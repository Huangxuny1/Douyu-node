import WebSocket from 'ws';
import BufferCoder from "../serializer/BufferCoder"
import STT from "../serializer/STT"
import { log4js } from "../global"


const logger = log4js.getLogger('AbsDouyuWebsocket');

export default abstract class AbsDouyuWebsocket {
    private url: string;
    private dyWebsocket!: WebSocket;
    private bufferCoder = new BufferCoder();
    private msgHandler: (msg: DouyuMessage) => void = (msg: DouyuMessage) => { console.log(msg) };

    public constructor(url: string = '') {
        this.url = url;
    }


    public start = async (): Promise<void> => {
        await this.connect();
        this.onerror();
        this.onclose();
        this.onopen();
    }

    /**
     *  websocket on open 
     *   then  login .
     */
    protected onopen = async (): Promise<void> => {
        this.dyWebsocket.onopen = async (event: WebSocket.OpenEvent) => {
            this.login()
        }
    }

    /**
     * 发送给斗鱼ws 的消息
     * 可以为对象 {type:xxx, key:value ... }
     * 也可以是字符串  type@=xxx/key@=value/ ...
     * 
     * 会自动把对象编码成字符串 , 然后把字符串按斗鱼协议编码发送
     * @param content 消息
     */
    public send = async (content: string | object): Promise<void> => {
        if (this.dyWebsocket.readyState === this.dyWebsocket.OPEN) {
            let msg: string;
            if (typeof content == 'object') {
                msg = STT.encode(content)
            } else {
                msg = content;
            }
            return this.dyWebsocket.send(this.bufferCoder.encode(msg))
        }
        throw new Error(" websocket not ready ... ")
    }

    /**
     *   new 
     */
    protected connect = async (): Promise<void> => {
        logger.info(" connect to url ", this.url)
        this.dyWebsocket = new WebSocket(this.url);
    }

    /**
     * 一个心跳的封装 
     * @param period 心跳间隔
     * @param describe 心跳描述, roomid 之类的
     */
    protected heartbeat = async (period: number, describe?: any): Promise<NodeJS.Timeout> => {
        // 立即发送一次心跳
        this.send(this.heartbeatContent());
        // 返回是为了之后 取消定时
        return setInterval(() => {
            let content = this.heartbeatContent();
            logger.info(" send hearbeat ...", content, describe);
            this.send(content);
        }, period);
    }

    /**
     * 处理websocket onmessage 事件. 把消息通过斗鱼协议进行decode , 一些登陆房间的事需要在对应的 client 处理
     * 
     * @param callback 消息回调  默认直接 console.log(obj)
     */
    protected onmessage = async (callback: (msg: DouyuMessage) => void = (msg) => console.log(msg)): Promise<void> => {
        this.dyWebsocket.onmessage = async (ev: WebSocket.MessageEvent) => {
            this.bufferCoder.decode(ev.data as Buffer, callback);
        };
    }

    /**
     *  暂时没遇到 出发此事件
     */
    protected onerror = async (): Promise<void> => {
        this.dyWebsocket.onerror = async (event: WebSocket.ErrorEvent) => {
            logger.error(" on error ", event.message)
        }
    }

    /**
     *  Notice : 当斗鱼 error code:51 的时候是不会出发 close 的... 
     */
    protected onclose = async (): Promise<void> => {
        this.dyWebsocket.onclose = async (event: WebSocket.CloseEvent) => {
            this.closeHandler();
            logger.warn(" connection closed : reason : %s  ,code : %s , target : %s ", event.reason, event.code, event);
            // 自动重连  不优雅...
            // this.connect();
            // this.onopen((obj) => {
            //     logger.error(obj)
            // })
        }

    }

    /**
     *  关闭连接 , 用处不大 
     */
    public closeConnection = async (): Promise<void> => {
        logger.warn(" close ...")
        this.dyWebsocket.close();
    }

    protected abstract async login(): Promise<void>;

    protected abstract heartbeatContent(): string | object;

    protected abstract async closeHandler(): Promise<void>;

    public set callback(msgHandler: (obj: any) => void) {
        this.msgHandler = msgHandler;
    }

    public get getMsgHandler(): (obj: any) => void {
        return this.msgHandler;
    }
}