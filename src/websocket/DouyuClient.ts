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

        let proxyWSS = await douyu.fetchProxy(this.roomid)
        let server: any = proxyWSS[Math.floor(Math.random() * proxyWSS.length)]
        this.worker = new ProxyWorker("wss://" + server.domain + ":" + server.port, this.roomid, cookies)

        this.worker.connect()
        this.worker.onopen((obj) => {
            logger.warn(obj)
        })

        this.barrage = new Barrage('wss://danmuproxy.douyu.com:8506/', this.roomid);
        this.barrage.connect()
        this.barrage.onopen(this.dmMsgCallback);
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

    public set msgCallback(callback: (obj: any) => void) {
        this.dmMsgCallback = callback;
    }
}