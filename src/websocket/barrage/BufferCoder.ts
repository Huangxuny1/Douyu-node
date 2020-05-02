import log4js from '../../logger';

export default class BufferCoder {
  private logger = log4js.getLogger('BufferCoder');
  private encoder = new TextEncoder();
  private decoder = new TextDecoder();
  private buffer = new ArrayBuffer(0);
  private readLength = 0;

  public encode = (str: string) => {
    let buffer = new ArrayBuffer(0);
    let message = this.concat(this.encoder.encode(str), Uint8Array.of(0));
    let len = 8 + message.length;
    let r = new DataView(new ArrayBuffer(len + 4));
    let offset = 0;

    r.setUint32(offset, len, true);
    offset += 4;
    r.setUint32(offset, len, true);
    offset += 4;
    r.setInt16(offset, 689, true);
    offset += 2;
    r.setInt8(offset, 0);
    offset += 1;
    r.setInt8(offset, 0);
    offset += 1;

    return new Uint8Array(r.buffer).set(message, offset), r.buffer;
  };

  public decode = (buf: Buffer, callback: Function) => {
    this.buffer = this.concat(this.buffer, buf).buffer;
    for (; this.buffer && this.buffer.byteLength > 0; ) {
      if (0 === this.readLength) {
        if (this.buffer.byteLength < 4) return;

        this.readLength = new DataView(this.buffer).getUint32(0, true);
        this.buffer = this.buffer.slice(4);
      }

      if (this.buffer.byteLength < this.readLength) return;

      const str = this.decoder.decode(this.buffer.slice(8, this.readLength - 1));
      this.buffer = this.buffer.slice(this.readLength);
      this.readLength = 0;
      callback(str);
    }
  };

  private concat = (...args: any) => {
    const arr = [];
    for (let n = 0; n < args.length; n++) {
      arr[n] = args[n];
    }

    return arr.reduce(function (arr, buf) {
      const message = buf instanceof ArrayBuffer ? new Uint8Array(buf) : buf;
      const t = new Uint8Array(arr.length + message.length);
      t.set(arr, 0);
      t.set(message, arr.length);
      return t;
    }, new Uint8Array(0));
  };
}
