import Kafka from 'node-rdkafka'
import { log4js } from '../global'
const logger = log4js.getLogger("kafka");

let producer = new Kafka.Producer({
    'metadata.broker.list': '192.168.1.83:9092'
});
producer.connect();
producer.on('ready', () => {
    logger.info("  kafka ready ... ");
})
producer.on('event.error', function (err) {
    logger.error('Error from producer');
    logger.error(err);
})
producer.setPollInterval(100);

export { producer };