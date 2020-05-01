import log4js from '../../logger';


export default class BufferCoder {
    private static logger = log4js.getLogger('BufferCoder')
    private static encoder = new TextEncoder();
    private static decoder = new TextDecoder();
    private static buffer = new ArrayBuffer(0);
    private static readLength = 0;

    private static concat = (...args: any) => {
        const arr = []
        for (let n = 0; n < args.length; n++) {
            arr[n] = args[n]
        }

        return arr.reduce(function (arr, buf) {
            const message = buf instanceof ArrayBuffer ? new Uint8Array(buf) : buf
            const t = new Uint8Array(arr.length + message.length)
            t.set(arr, 0)
            t.set(message, arr.length)
            return t
        }, new Uint8Array(0))
    }

    public static encode = (str: string) => {
        let buffer = new ArrayBuffer(0)
        let message = BufferCoder.concat(BufferCoder.encoder.encode(str), Uint8Array.of(0))
        let len = 8 + message.length
        let r = new DataView(new ArrayBuffer(len + 4))
        let offset = 0

        r.setUint32(offset, len, true)
        offset += 4
        r.setUint32(offset, len, true)
        offset += 4
        r.setInt16(offset, 689, true)
        offset += 2
        r.setInt8(offset, 0)
        offset += 1
        r.setInt8(offset, 0)
        offset += 1

        return new Uint8Array(r.buffer).set(message, offset), r.buffer
    }

    public static decode = (buf: Buffer, callback: Function) => {
        BufferCoder.buffer = BufferCoder.concat(BufferCoder.buffer, buf).buffer
        for (; BufferCoder.buffer && BufferCoder.buffer.byteLength > 0;) {
            if (0 === BufferCoder.readLength) {
                if (BufferCoder.buffer.byteLength < 4) return;

                BufferCoder.readLength = new DataView(BufferCoder.buffer).getUint32(0, true)
                BufferCoder.buffer = BufferCoder.buffer.slice(4)
            }

            if (BufferCoder.buffer.byteLength < BufferCoder.readLength) return;

            const str = BufferCoder.decoder.decode(BufferCoder.buffer.slice(8, BufferCoder.readLength - 1))
            BufferCoder.buffer = BufferCoder.buffer.slice(BufferCoder.readLength)
            BufferCoder.readLength = 0
            callback(str)
        }
    }
}