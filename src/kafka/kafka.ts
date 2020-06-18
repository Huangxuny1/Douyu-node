import Kafka from 'node-rdkafka'

let producer = new Kafka.Producer({
    'metadata.broker.list': '192.168.1.83:9092'
});


producer.connect({
    timeout:100000
});

producer.on('ready', function () {
    try {
        console.log("ready")
        producer.produce(
            // Topic to send the message to
            'topic',
            // optionally we can manually specify a partition for the message
            // this defaults to -1 - which will use librdkafka's default partitioner (consistent random for keyed messages, random for unkeyed messages)
            null,
            // Message to send. Must be a buffer
            Buffer.from('Awesome message'),
            // for keyed messages, we also specify the key - note that this field is optional
            'Stormwind',
            // you can send a timestamp here. If your broker version supports it,
            // it will get added. Otherwise, we default to 0
            Date.now(),
            // you can send an opaque token here, which gets passed along
            // to your delivery reports
        );
    } catch (err) {
        console.error('A problem occurred when sending our message');
        console.error(err);
    }
});