import { log4js, douyu } from '../global'
import ProxyWorker from './proxyWorker'
import Barrage from './barrageFetcher'



const logger = log4js.getLogger("DouyuClient")
export default class DouyuClient {
    private roomid: string | number;
    private worker!: ProxyWorker;
    private barrage!: Barrage;


    private dmMsgCallback: (obj: any) => void = (obj) => {
        if (obj.type == 'chatmsg') {
            logger.error('[%s] - %s(lv:%s)[%s:%s]:\t%s', obj.rid, obj.nn, obj.level, obj.bnn, obj.bl, obj.txt);
            //producer.produce("topic", null, Buffer.from(JSON.stringify(obj)));
        }
    }

    public constructor(roomid: string | number) {
        this.roomid = roomid;
    }

    public start = async (): Promise<DouyuClient> => {

        let cookies = await douyu.login();
        logger.info(" login status : ", douyu.alreadyLogined)

        // 从 http api中获取 wss://wsproxy.douyu.com  url 和 端口
        let proxyWSS = await douyu.fetchProxy(this.roomid)

        // 随机选取一个
        let server: any = proxyWSS[Math.floor(Math.random() * proxyWSS.length)]
        this.worker = new ProxyWorker("wss://" + server.domain + ":" + server.port, this.roomid, cookies)
        if (this.cacheProxyCallback) {
            console.log(" set cacheProxyCallback")
            this.worker.callback = this.cacheProxyCallback;
        }
        this.worker.start();

        // 等待 wsproxy.douyu.com 返回 wss://danmuproxy.douyu.com  url 和端口
        let danmuproxies = await this.worker.getMsgrepeaterproxylist();

        // 随机选取一个
        let dmserver: any = danmuproxies[Math.floor(Math.random() * danmuproxies.length)];
        this.barrage = new Barrage('wss://' + dmserver.ip + ':' + dmserver.port, this.roomid);
        if (this.cacheBarrageMsgCallback) {
            console.log(" set cacheBarrageMsgCallback")
            this.barrage.callback = this.cacheBarrageMsgCallback;
        }
        this.barrage.start();

        return this
    }


    public shutdown = async (): Promise<void> => {
        this.barrage.closeConnection();
        this.worker.closeConnection();
    }

    public get getWorker(): ProxyWorker {
        return this.worker;
    }

    public get getBarrageFetcher(): Barrage {
        return this.barrage;
    }

    private cacheBarrageMsgCallback!: (obj: any) => void;

    public setBarrageMsgCallback = (callback: (obj: any) => void) => {
        if (this.barrage === undefined) {
            this.cacheBarrageMsgCallback = callback;
        } else {
            this.barrage.callback = callback;
        }
    }
    private cacheProxyCallback!: (obj: any) => void;
    public setProxyCallback = (callback: (obj: any) => void) => {
        if (this.worker === undefined) {
            console.log(" cache setProxyCallback")
            this.cacheProxyCallback = callback;
        } else {
            this.worker.callback = callback;
        }

    }
}