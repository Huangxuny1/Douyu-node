import { log4js, douyu } from './global';
import Barrage from './websocket/barrageFetcher'
import ProxyWorker from './websocket/proxyWorker'



const logger = log4js.getLogger('index');



(
    async () => {
        // logger.info(await douyu.login());
        // logger.debug(await douyu.whoami());
        let cookies = await douyu.login();
        logger.info(" login status : ", douyu.alreadyLogined)
        let proxyWSS = await douyu.fetchProxy(9999)
        let server: any = proxyWSS[Math.floor(Math.random() * proxyWSS.length)]
        let worker = new ProxyWorker("wss://" + server.domain + ":" + server.port, 9999, cookies)

        await worker.connect()
        await worker.onopen((obj) => {
            logger.warn(obj)
        })

        let barrage = new Barrage('wss://danmuproxy.douyu.com:8506/', 9999);
        await barrage.connect()
        await barrage.onopen((obj) => {
            if (obj.type == 'chatmsg') {
                logger.info('[%s] - %s(lv:%s)[%s:%s]:\t%s', obj.rid, obj.nn, obj.level, obj.bnn, obj.bl, obj.txt);
            }
        });

        let input = process.openStdin()
        input.addListener("data", function (d) {
            // note:  d is an object, and when converted to a string it will
            // end with a linefeed.  so we (rather crudely) account for that  
            // with toString() and then substring() 
            logger.error("you entered: [" + d.toString().trim() + "]");
            worker.sendBarrage(d.toString().trim())
        });

        // let a = new Barrage('wss://danmuproxy.douyu.com:8506/', 9999);
        // await a.connect()
        // await a.onopen((obj) => {
        //     if (obj.type == 'chatmsg') {
        //         logger.info('[%s] - %s(lv:%s)[%s:%s]:\t%s', obj.rid, obj.nn, obj.level, obj.bnn, obj.bl, obj.txt);
        //     }
        // });

    }
)()
