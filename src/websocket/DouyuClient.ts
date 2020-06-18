import { log4js, douyu } from '../global'
import ProxyWorker from './proxyWorker'
import Barrage from './barrageFetcher'

const logger = log4js.getLogger("DouyuClient")
export default class DouyuClient {
    private roomid: string | number;
    private worker!: ProxyWorker;
    private barrage!: Barrage;

    public constructor(roomid: string | number) {
        this.roomid = roomid;
    }

    public start = async (): Promise<DouyuClient> => {
        let cookies = await douyu.login();
        logger.info(" login status : ", douyu.alreadyLogined)

        let proxyWSS = await douyu.fetchProxy(this.roomid)
        let server: any = proxyWSS[Math.floor(Math.random() * proxyWSS.length)]
        this.worker = new ProxyWorker("wss://" + server.domain + ":" + server.port, this.roomid, cookies)
        await this.worker.connect()
        await this.worker.onopen((obj) => {
            logger.warn(obj)
        })

        this.barrage = new Barrage('wss://danmuproxy.douyu.com:8506/', this.roomid);
        await this.barrage.connect()
        await this.barrage.onopen((obj) => {
            if (obj.type == 'chatmsg') {
                logger.info('[%s] - %s(lv:%s)[%s:%s]:\t%s', obj.rid, obj.nn, obj.level, obj.bnn, obj.bl, obj.txt);
            }
        });
        return this
    }


    public shutdown = async (): Promise<void> => {
        this.barrage.shutdown();
        this.worker.shutdown();
    }

    public get getWorker(): ProxyWorker {
        return this.worker;
    }

    public get getBarrageFetcher(): Barrage {
        return this.barrage;
    }
}