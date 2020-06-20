import { KafkaConsumer } from "node-rdkafka";
import { KafkaClient } from "./kafka";


enum persistenceType {
    KAFKA = 1,
    MYSQL
}

class PersistenceFactory {
    private type: persistenceType = -1;

    constructor(type: persistenceType) {
        this.type = type;
    }

    public getPersistence = (): Persistence => {
        if (this.type === persistenceType.KAFKA) {
            return new KafkaClient();
        }
        throw new Error(" not support persistence scheme  ... ")
    }

}

interface Persistence {
    //todo 未来可能会传一个object, 因为 不同持久化方案需要的参数不同
    save(msg: string|object): Promise<void>;

}


export { persistenceType, Persistence, PersistenceFactory }