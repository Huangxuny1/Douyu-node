import WebSocket from 'ws';
import BufferCoder from "../serializer/BufferCoder"
import STT from "../serializer/STT"
import { log4js } from "../global"

// interface IDouyuWebsocket {
//     ws: WebSocket;
//     heartbeat: any;
// }
const logger = log4js.getLogger('AbsDouyuWebsocket');
export default abstract class AbsDouyuWebsocket {
    private url: string;
    private dyWebsocket!: WebSocket;
    private bufferCoder = new BufferCoder();

    public constructor(url: string = '') {
        this.url = url;
    }

    public connect = async (): Promise<void> => {
        logger.info(" connect to url ", this.url)
        this.dyWebsocket = new WebSocket(this.url);
    }

    public send = async (content: string | object): Promise<void> => {
        let msg: string;
        if (typeof content == 'object') {
            msg = STT.encode(content)
        } else {
            msg = content;
        }
        return this.dyWebsocket.send(this.bufferCoder.encode(msg))
    }

    public heartbeat = async (period: number, describe?: any): Promise<NodeJS.Timeout> => {
        this.send(this.heartbeatContent());
        return setInterval(() => {
            let content = this.heartbeatContent()
            logger.info(" send hearbeat ...", content, describe)
            this.send(content);
        }, period)
    }

    protected onmessage = async (callback: (obj: any) => void = (obj) => console.log(obj)): Promise<void> => {
        this.dyWebsocket.onmessage = async (ev: WebSocket.MessageEvent) => {
            //logger.debug(" onmessage : ", ev)
            const buf = ev.data as Buffer;
            this.bufferCoder.decode(ev.data as Buffer, callback);
        };
    }

    public onopen = async (msgHandler: (obj: any) => void): Promise<void> => {
        this.dyWebsocket.onopen = async (event: WebSocket.OpenEvent) => {
            await this.login(msgHandler)
        }
    }

    protected abstract async login(msgHandler: (obj: any) => void): Promise<void>;

    protected abstract heartbeatContent(): string | object;

    public set setUrl(url: string) {
        this.url = url;
    }
}