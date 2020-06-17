import WebSocket from 'ws';
import BufferCoder from "../serializer/BufferCoder"
import STT from "../serializer/STT"
import { log4js } from "../global"

// interface IDouyuWebsocket {
//     ws: WebSocket;
//     heartbeat: any;
// }

export default abstract class AbsDouyuWebsocket {
    private logger = log4js.getLogger('AbsDouyuWebsocket');
    private url: string;
    private dyWebsocket!: WebSocket;
    private bufferCoder = new BufferCoder();

    public constructor(url: string) {
        this.url = url;
    }

    public connect = async (): Promise<void> => {
        this.logger.info(" connect to url ", this.url)
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

    public heartbeat = (content: string | object, period: number, describe?: any): NodeJS.Timeout => {
        this.send(content);
        return setInterval(() => {
            this.logger.info(" send hearbeat ...", content, describe)
            this.send(content);
        }, period)
    }

    public onmessage = async (callback: (obj: any) => void = (obj) => console.log(obj)): Promise<void> => {
        this.dyWebsocket.onmessage = async (ev: WebSocket.MessageEvent) => {
            //this.logger.debug(" onmessage : ", ev)
            const buf = ev.data as Buffer;
            this.bufferCoder.decode(ev.data as Buffer, callback);
        };
    }

    public onopen = async (): Promise<void> => {
        this.dyWebsocket.onopen = async (event: WebSocket.OpenEvent) => {
            await this.login()
        }
    }

    abstract async login(): Promise<void>;

}