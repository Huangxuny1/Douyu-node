import { log4js, douyu } from '../global'
import ProxyWorker from './proxyWorker'
import Barrage from './barrageFetcher'
import Kafka from 'node-rdkafka'


const logger = log4js.getLogger("DouyuClient")
export default class DouyuClient {
    private roomid: string | number;
    private worker!: ProxyWorker;
    private barrage!: Barrage;

    public constructor(roomid: string | number) {
        this.roomid = roomid;
    }

    public start = async (): Promise<DouyuClient> => {

        let producer = new Kafka.Producer({
            'metadata.broker.list': '192.168.1.83:9092'
        });
        producer.connect();
        producer.on('ready', () => {
            logger.info("  kafka ready ... ");
        })
        producer.on('event.error', function (err) {
            console.error('Error from producer');
            console.error(err);
        })
        producer.setPollInterval(100);


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
        this.barrage.onopen((obj) => {
            if (obj.type == 'chatmsg') {
                logger.info('[%s] - %s(lv:%s)[%s:%s]:\t%s', obj.rid, obj.nn, obj.level, obj.bnn, obj.bl, obj.txt);
                producer.produce("topic", null, Buffer.from(JSON.stringify(obj)));
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