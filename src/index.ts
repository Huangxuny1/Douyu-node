import { log4js, douyu } from './global';
import DouyuClient from './websocket/DouyuClient'



const logger = log4js.getLogger('index');



(
    async () => {
        // logger.info(await douyu.login());
        let client = new DouyuClient(73965)
        await client.start()

        logger.debug(await douyu.whoami());

        let worker = client.getWorker;

        process.openStdin().addListener("data", function (d) {

            logger.error("you entered: [" + d.toString().trim() + "]");
            if (d.toString().trim() == "s") {
                client.shutdown()
            } else {
                worker.sendBarrage(d.toString().trim())
            }

        });
    }
)()
