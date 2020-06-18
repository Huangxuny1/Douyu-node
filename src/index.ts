import { log4js, douyu } from './global';
import DouyuClient from './websocket/DouyuClient'

import Server from './server/server'

const logger = log4js.getLogger('index');


// new Server().start();
(
    async () => {

        let client = new DouyuClient(74960)
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
// import Kafka from 'node-rdkafka'
// (async () => {
//     let producer = new Kafka.Producer({
//         'metadata.broker.list': '192.168.1.83:9092'
//     });


//     producer.connect();

//     // Wait for the ready event before proceeding
//     producer.on('ready', function () {
//         try {
//             producer.produce(
//                 // Topic to send the message to
//                 'topic',
//                 // optionally we can manually specify a partition for the message
//                 // this defaults to -1 - which will use librdkafka's default partitioner (consistent random for keyed messages, random for unkeyed messages)
//                 null,
//                 // Message to send. Must be a buffer
//                 Buffer.from(JSON.stringify({
//                     type: 'loginreq',
//                     room_id: 74960,
//                     dfl: { sn: '105', ss: '1' },
//                     username: '61609154',
//                     uid: '61609154',
//                     ver: '20190610',
//                     aver: '218101901',
//                     ct: '0'
//                 })),
//                 // for keyed messages, we also specify the key - note that this field is optional
//                 'Stormwind',
//                 // you can send a timestamp here. If your broker version supports it,
//                 // it will get added. Otherwise, we default to 0
//                 Date.now(),
//                 // you can send an opaque token here, which gets passed along
//                 // to your delivery reports
//             );
//         } catch (err) {
//             console.error('A problem occurred when sending our message');
//             console.error(err);
//         }
//     });

//     // Any errors we encounter, including connection errors
//     producer.on('event.error', function (err) {
//         console.error('Error from producer');
//         console.error(err);
//     })

//     // We must either call .poll() manually after sending messages
//     // or set the producer to poll on an interval (.setPollInterval).
//     // Without this, we do not get delivery events and the queue
//     // will eventually fill up.
//     producer.setPollInterval(100);
// })()
