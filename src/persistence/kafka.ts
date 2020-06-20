import Kafka from 'node-rdkafka'
import { log4js } from '../global'
import { Persistence, persistenceType } from './absPersistence';
const logger = log4js.getLogger("kafka");






class KafkaClient implements Persistence {

    private producer!: Kafka.Producer;
    private isReady: boolean = false;
    private waittingList: Array<string> = [];

    constructor() {
        //todo  临时方法 .. 未来会从配置读取
        this.producer = new Kafka.Producer({
            'metadata.broker.list': 'localhost:9092'
        });
        this.producer.connect();
        this.producer.on('ready', () => {
            this.isReady = true;
            logger.info("  kafka ready ... ");
            //  一旦连接 检查等待队列是否有排队消息 .. 如果有就发送...
            let size = this.waittingList.length;
            if (size > 0) {
                while (size--) {
                    this.save(this.waittingList[size]);
                    this.waittingList.splice(size, 1);
                }
            }
        })
        // this.producer.on('event.error', function (err) {
        //     logger.error('Error from producer');
        //     logger.error(err);
        // })
        this.producer.setPollInterval(100);
    }

    public async save(msg: string | object): Promise<void> {
        if (typeof msg == 'object') {
            msg = JSON.stringify(msg);
        }
        if (this.isReady) {
            this.producer.produce("topic", null, Buffer.from(msg));
        } else {
            logger.warn(" broker is not ready , push to waitting list ")
            this.waittingList.push(msg);
        }

    }

}

export { KafkaClient };