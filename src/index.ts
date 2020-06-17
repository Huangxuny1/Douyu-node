import { log4js, douyu } from './global';
import DouyuClient from './websocket/DouyuClient'



const logger = log4js.getLogger('index');



(
    async () => {
        // logger.info(await douyu.login());
        let client = new DouyuClient(9999)
        await client.start()

        logger.debug(await douyu.whoami());

        let worker = client.getWorker;

        let input = process.openStdin()
        input.addListener("data", function (d) {
            logger.error("you entered: [" + d.toString().trim() + "]");
            worker.sendBarrage(d.toString().trim())

        });
    }
)()
