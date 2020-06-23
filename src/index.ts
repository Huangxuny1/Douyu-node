import { log4js, douyu } from './global';
import DouyuClient from './websocket/DouyuClient'
import { PersistenceFactory, persistenceType } from './persistence/absPersistence'

import Server from './server/server'

const logger = log4js.getLogger('index');


// new Server().start();
(
    async () => {

        let client = new DouyuClient(74960);
		//let persistence = new PersistenceFactory(persistenceType.KAFKA).getPersistence();
        client.setBarrageMsgCallback((obj) => {
            if (obj.type == 'chatmsg') {
                logger.info('[%s] - %s(lv:%s)[%s:%s]:\t%s', obj.rid, obj.nn, obj.level, obj.bnn, obj.bl, obj.txt);
				// persistence.save(obj);
            }
        })

        await client.start()

        logger.debug(await douyu.whoami());

        let worker = client.getWorker;
        //let barrage = client.getBarrageFetcher;

        // 临时输入方案. 未来会结合web server 通过 restAPI或者websocket替代
        process.openStdin().addListener("data", function (d) {

            logger.error("you entered: [" + d.toString().trim() + "]");
            if (d.toString().trim() == "s") {
                client.shutdown()
            } else if (d.toString().trim() == "g") {
                client.gift();
            } else if (d.toString().trim() == "t"){
                client.test();
            }else {
                worker.sendBarrage(d.toString().trim())
            }

        });
    }
)();
