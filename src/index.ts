import { log4js, douyu } from './global';
import DouyuClient from './websocket/DouyuClient'
import { PersistenceFactory, persistenceType } from './persistence/absPersistence'

import Server from './server/server'

const logger = log4js.getLogger('index');


// new Server().start();
(
    async () => {

        let client = new DouyuClient(110);
        let persistence = new PersistenceFactory(persistenceType.KAFKA).getPersistence();
        client.setBarrageMsgCallback((obj) => {
            if (obj.type == 'chatmsg') {
                logger.info('[%s] - %s(lv:%s)[%s:%s]:\t%s', obj.rid, obj.nn, obj.level, obj.bnn, obj.bl, obj.txt);
                persistence.save(obj);
            }
        })
        
        await client.start()

        logger.debug(await douyu.whoami());

        let worker = client.getWorker;
        //let barrage = client.getBarrageFetcher;

        process.openStdin().addListener("data", function (d) {

            logger.error("you entered: [" + d.toString().trim() + "]");
            if (d.toString().trim() == "s") {
                client.shutdown()
            } else {
                worker.sendBarrage(d.toString().trim())
            }

        });
    }
)();
