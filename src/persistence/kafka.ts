import Kafka from 'node-rdkafka'
import { log4js } from '../global'
import { Persistence, persistenceType } from './absPersistence';
const logger = log4js.getLogger("kafka");






class KafkaClient implements Persistence {

    private producer!: Kafka.Producer;

    constructor() {
        this.producer = new Kafka.Producer({
            'metadata.broker.list': 'localhost:9092'
        });
        this.producer.connect();
        this.producer.on('ready', () => {
            logger.info("  kafka ready ... ");
        })
        this.producer.on('event.error', function (err) {
            logger.error('Error from producer');
            logger.error(err);
        })
        this.producer.setPollInterval(100);
    }

    public async save(msg: string): Promise<void> {
        //console.log(msg)
        this.producer.produce("topic", null, Buffer.from(msg));
    }

}

export { KafkaClient };