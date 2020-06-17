import stt from "./STT";
import BufferCoder from "./BufferCoder";

const obj = [{
    a: "a1",
    b: [
        { b1: "bc1" },
        { b2: "bc2" },
    ],
    c: {
        c1: { c11: "cc11" },
        c2: [{ c21: "cc21" }, { c22: "cc22" }],
    },
}, {
    type: "msgrepeaterproxylist",
    rid: "0",
    list: [
        { id: "0", nr: "0", ml: "10000", ip: "danmuproxy.douyu.com", port: "8501" },
        { id: "0", nr: "0", ml: "10000", ip: "danmuproxy.douyu.com", port: "8502" },
        { id: "0", nr: "0", ml: "10000", ip: "danmuproxy.douyu.com", port: "8503" },
        { id: "0", nr: "0", ml: "10000", ip: "danmuproxy.douyu.com", port: "8504" },
        { id: "0", nr: "0", ml: "10000", ip: "danmuproxy.douyu.com", port: "8505" },
        { id: "0", nr: "0", ml: "10000", ip: "danmuproxy.douyu.com", port: "8506" },
    ],
}];

const str = [
    "a@=a1/b@=b1@AA=bc1@AS@Sb2@AA=bc2@AS@S/c@=c1@A=c11@AA=cc11@AS@Sc2@A=c21@AAA=cc21@AAS@ASc22@AAA=cc22@AAS@AS@S/",
    "type@=msgrepeaterproxylist/rid@=0/list@=id@AA=0@ASnr@AA=0@ASml@AA=10000@ASip@AA=danmuproxy.douyu.com@ASport@AA=8501@AS@Sid@AA=0@ASnr@AA=0@ASml@AA=10000@ASip@AA=danmuproxy.douyu.com@ASport@AA=8502@AS@Sid@AA=0@ASnr@AA=0@ASml@AA=10000@ASip@AA=danmuproxy.douyu.com@ASport@AA=8503@AS@Sid@AA=0@ASnr@AA=0@ASml@AA=10000@ASip@AA=danmuproxy.douyu.com@ASport@AA=8504@AS@Sid@AA=0@ASnr@AA=0@ASml@AA=10000@ASip@AA=danmuproxy.douyu.com@ASport@AA=8505@AS@Sid@AA=0@ASnr@AA=0@ASml@AA=10000@ASip@AA=danmuproxy.douyu.com@ASport@AA=8506@AS@S/",
];

const buffercoder = new BufferCoder();

test("encode", () => {
    for (let i = 0; i < str.length; i++) {
        expect(stt.encode(obj[i])).toEqual(str[i]);
    }
});

test("decode", () => {
    for (let i = 0; i < str.length; i++) {
        expect(stt.decode(str[i])).toEqual(obj[i]);
    }
});

test("bufferCoder", () => {
    // assert(str.length == obj.length, "str length != obj.length ");
    for (let i = 0; i < str.length; i++) {
        buffercoder.decode(buffercoder.encode(str[i]), (m: any) => {
            expect(m).toEqual(obj[i]);
        });
    }
});


test("test",()=>{
    let o = stt.decode('type@=joingroup/rid@=74970/gid@=-9999/')
    console.log(o)
})