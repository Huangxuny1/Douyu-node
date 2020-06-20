https://www.douyu.com/webSocket.worker_38a52ea.worker.min.js

## en/decoder 
```
function() {
    function BufferCoder() {
        this.buffer = new ArrayBuffer(0),
        this.decoder = new TextDecoder,
        this.encoder = new TextEncoder,
        this.littleEndian = !0,
        this.readLength = 0
    }
    return BufferCoder.prototype.concat = function() {
        for (var l = [], n = 0; n < arguments.length; n++)
            l[n] = arguments[n];
        return l.reduce(function(l, n) {
            var u = n instanceof ArrayBuffer ? new Uint8Array(n) : n
              , e = new Uint8Array(l.length + u.length);
            return e.set(l, 0),
            e.set(u, l.length),
            e
        }, new Uint8Array(0))
    }
    ,
    BufferCoder.prototype.decode = function(l, n, u) {
        for (void 0 === u && (u = this.littleEndian),
        this.buffer = this.concat(this.buffer, l).buffer; this.buffer && this.buffer.byteLength > 0; ) {
            if (0 === this.readLength) {
                if (this.buffer.byteLength < 4)
                    return;
                this.readLength = new DataView(this.buffer).getUint32(0, u),
                this.buffer = this.buffer.slice(4)
            }
            if (this.buffer.byteLength < this.readLength)
                return;
            var e = this.decoder.decode(this.buffer.slice(8, this.readLength - 1));
            this.buffer = this.buffer.slice(this.readLength),
            this.readLength = 0,
            n(e)
        }
    }
    ,
    BufferCoder.prototype.encode = function(l, n) {
        postMessage
        void 0 === n && (n = this.littleEndian);
        var u = this.concat(this.encoder.encode(l), Uint8Array.of(0))
          , e = 8 + u.length
          , r = new DataView(new ArrayBuffer(e + 4))
          , i = 0;
        return r.setUint32(i, e, n),
        i += 4,
        r.setUint32(i, e, n),
        i += 4,
        r.setInt16(i, 689, n),
        i += 2,
        r.setInt8(i, 0),
        i += 1,
        r.setInt8(i, 0),
        i += 1,
        new Uint8Array(r.buffer).set(u, i),
        r.buffer
    }
    ,
    BufferCoder
}();
```


### kd

> let k = [0x174d4dc8, 0xfb8b26a6, 0x7b5a767d, 0x3b251e1f];

```
function(v, rs, k, did, roomid, time) {
    for (var I = 0; I < v.length; I += 2) {
        var i, v0 = v[I],
            v1 = v[I + 1],
            delta = 0x9E3779B9,
            sum = delta * rs;
        v0 += 0x6bec8b74;
        v0 += 0xcce4ab9;
        v1 -= 0x60dd744b;
        v1 -= 0x4f105ed9;
        for (i = 0; i < rs; i++) {
            v1 -= (((v0 << 4) ^ (v0 >>> 5)) + v0) ^ (sum + k[(sum >>> 11) & 3]);
            sum -= delta;
            v0 -= (((v1 << 4) ^ (v1 >>> 5)) + v1) ^ (sum + k[sum & 3]);
        }
        v0 -= 0xa2b59350;
        v0 -= 0xbe7635a2;
        v1 += 0xa30dde55;
        v1 += 0xa2b59350;
        v[I] = v0;
        v[I + 1] = v1;
    }
}
```

### hex_kd
```
function hex2bin(e) {
            if ("string" === typeof e && e.length % 8 === 0) {
                for (var r = [], t = e.length, o = 0; o < t; )
                    r.push(e.substr(o, 2)),
                    o += 2;
                for (var n = [], i = r.length, s = 0; s < i; )
                    n.push(parseInt(r.slice(s, s + 4).reverse().join(""), 16)),
                    s += 4;
                return n
            }
            return null
        }
```

### _sub_dms

```
function _sub_dms(e, t, r) {
                        if (null == r)
                            return null;
                        r = s.allocateUTF8(r),
                        e |= 0,
                        t = +t;
                        var n = 0
                          , o = M;
                        M = M + 688 | 0;
                        var i = o + 672 | 0
                          , a = o + 664 | 0
                          , u = o + 656 | 0
                          , c = o + 648 | 0
                          , f = o + 640 | 0
                          , p = o + 632 | 0
                          , d = o + 624 | 0
                          , b = o + 616 | 0
                          , h = o + 608 | 0
                          , v = o + 600 | 0
                          , A = o + 592 | 0
                          , y = o + 584 | 0
                          , m = o + 576 | 0
                          , w = o + 568 | 0
                          , k = o + 560 | 0
                          , S = o + 552 | 0
                          , x = o + 544 | 0
                          , O = o + 536 | 0
                          , C = o + 528 | 0
                          , E = o + 520 | 0
                          , R = o + 512 | 0
                          , I = o + 424 | 0
                          , D = o + 144 | 0
                          , P = o + 128 | 0
                          , F = o + 80 | 0
                          , T = o + 48 | 0
                          , j = o;
                        if (!(r |= 0))
                            return M = o,
                            0;
                        var N = 0 | Vr(33);
                        if (!N)
                            return M = o,
                            0;
                        for (var q = N, L = q + 33 | 0; ((l[q >> 0] = 0) | (q = q + 1 | 0)) < (0 | L); )
                            ;
                        l[j + 32 >> 0] = 0,
                        l[j >> 0] = 111,
                        l[j + 1 >> 0] = 119,
                        l[j + 2 >> 0] = 100,
                        l[j + 3 >> 0] = 119,
                        l[j + 4 >> 0] = 116,
                        l[j + 5 >> 0] = 109,
                        l[j + 6 >> 0] = 48,
                        l[j + 7 >> 0] = 97,
                        l[j + 8 >> 0] = 120,
                        l[j + 9 >> 0] = 102;
                        var W = j + 10 | 0;
                        l[W >> 0] = 98,
                        l[j + 11 >> 0] = 98,
                        l[j + 12 >> 0] = 97,
                        l[j + 13 >> 0] = 48,
                        l[j + 14 >> 0] = 111,
                        l[j + 15 >> 0] = 114,
                        l[j + 16 >> 0] = 50,
                        l[j + 17 >> 0] = 102,
                        l[j + 18 >> 0] = 104,
                        l[j + 19 >> 0] = 121,
                        l[j + 20 >> 0] = 107,
                        l[j + 21 >> 0] = 49,
                        l[j + 22 >> 0] = 57,
                        l[j + 23 >> 0] = 107,
                        l[j + 24 >> 0] = 115,
                        l[j + 25 >> 0] = 107,
                        l[j + 26 >> 0] = 97,
                        l[j + 27 >> 0] = 120,
                        l[j + 28 >> 0] = 102,
                        l[j + 29 >> 0] = 50,
                        l[j + 30 >> 0] = 116,
                        l[j + 31 >> 0] = 113;
                        var Z = ~~t >>> 0
                          , z = 1 <= +V(t) ? 0 < t ? ~~+G(+B(t / 4294967296), 4294967295) >>> 0 : ~~+U((t - +(~~t >>> 0)) / 4294967296) >>> 0 : 0;
                        g[T >> 2] = 0,
                        g[T + 4 >> 2] = 0,
                        g[T + 8 >> 2] = 0,
                        g[T + 12 >> 2] = 0;
                        var H = (l[T + 16 >> 0] = 0) | l[r >> 0]
                          , Y = 0 | l[r + 1 >> 0]
                          , J = 0 | l[r + 2 >> 0]
                          , X = 0 | l[r + 3 >> 0];
                        if (Y = (65535 & ((96 < J << 24 >> 24 ? 9 : 0) + (J << 24 >> 24) << 4 | (96 < X << 24 >> 24 ? 169 : 208) + (255 & X))) << 8 & 65535 | 255 & ((96 < H << 24 >> 24 ? 9 : 0) + (H << 24 >> 24) << 4 | (96 < Y << 24 >> 24 ? 169 : 208) + (255 & Y)),
                        16 == (0 | Er(H = r + 4 | 0))) {
                            g[F >> 2] = g[4],
                            g[F + 4 >> 2] = g[5],
                            g[F + 8 >> 2] = g[6],
                            g[F + 12 >> 2] = g[7],
                            g[F + 16 >> 2] = g[8],
                            g[F + 20 >> 2] = g[9],
                            g[F + 24 >> 2] = g[10],
                            g[F + 28 >> 2] = g[11],
                            l[F + 32 >> 0] = 0 | l[48];
                            var K = 15 + (0 | Er(H)) | 0;
                            if (0 | (K >>>= 4)) {
                                var Q = D + 8 | 0
                                  , $ = D + 4 | 0
                                  , ee = 0;
                                do {
                                    var te = ee << 4
                                      , re = H + te | 0
                                      , ne = 15 + (0 | Er(re)) | 0;
                                    g[D >> 2] = 10,
                                    g[$ >> 2] = Q,
                                    g[D + 8 >> 2] = (0 | _[F + 1 >> 0]) << 8 | _[F >> 0] | 0 | (0 | _[F + 2 >> 0]) << 16 | (0 | _[F + 3 >> 0]) << 24,
                                    g[D + 12 >> 2] = (0 | _[F + 5 >> 0]) << 8 | _[F + 4 >> 0] | 0 | (0 | _[F + 6 >> 0]) << 16 | (0 | _[F + 7 >> 0]) << 24,
                                    g[D + 16 >> 2] = (0 | _[F + 9 >> 0]) << 8 | _[F + 8 >> 0] | 0 | (0 | _[F + 10 >> 0]) << 16 | (0 | _[F + 11 >> 0]) << 24,
                                    t = (0 | _[F + 13 >> 0]) << 8 | _[F + 12 >> 0] | 0 | (0 | _[F + 14 >> 0]) << 16 | (0 | _[F + 15 >> 0]) << 24,
                                    g[D + 20 >> 2] = t,
                                    te = T + te | 0;
                                    for (var oe = 4; 3 & oe || (t = ((0 | _[64 + (t >>> 16 & 255) >> 0]) << 8 | _[64 + (t >>> 8 & 255) >> 0] | 0 | (0 | _[64 + (t >>> 24) >> 0]) << 16 | (0 | _[64 + (255 & t) >> 0]) << 24) ^ g[320 + ((oe >>> 2) - 1 << 2) >> 2]),
                                    t ^= g[D + 8 + (oe + -4 << 2) >> 2],
                                    g[D + 8 + (oe << 2) >> 2] = t,
                                    44 != (0 | (oe = oe + 1 | 0)); )
                                        ;
                                    var ie = ne >>> 4;
                                    e: do {
                                        if (0 | ie)
                                            for (t = 0,
                                            oe = Q; ; ) {
                                                var ae = te + (ne = t << 4) | 0;
                                                if ((0 | oe) == (0 | Q)) {
                                                    oe = 0 | g[D >> 2];
                                                    var ue = re + ne | 0;
                                                    for (L = (q = ae) + 16 | 0; l[q >> 0] = 0 | l[ue >> 0],
                                                    ue = ue + 1 | 0,
                                                    (0 | (q = q + 1 | 0)) < (0 | L); )
                                                        ;
                                                    Ir(ae, D + 8 + (oe << 2 << 2) | 0);
                                                    var ce = ae + 4 | 0
                                                      , se = ae + 8 | 0
                                                      , fe = ae + 12 | 0
                                                      , le = ae + 1 | 0
                                                      , pe = ae + 9 | 0
                                                      , de = ae + 13 | 0
                                                      , be = ae + 2 | 0
                                                      , he = ae + 6 | 0
                                                      , ve = ae + 14 | 0
                                                      , Ae = ae + 3 | 0
                                                      , ye = ae + 7 | 0
                                                      , ge = ae + 11 | 0
                                                      , me = ae + 5 | 0
                                                      , _e = ae + 10 | 0
                                                      , we = ae + 15 | 0;
                                                    if (0 | (oe = oe + -1 | 0))
                                                        do {
                                                            var ke = 0 | l[ce >> 0]
                                                              , Se = 0 | l[se >> 0]
                                                              , xe = 0 | l[fe >> 0]
                                                              , Oe = 0 | l[pe >> 0]
                                                              , Ce = 0 | l[de >> 0]
                                                              , Ee = 0 | l[be >> 0]
                                                              , Re = 0 | l[he >> 0]
                                                              , Ie = 0 | l[ve >> 0];
                                                            ue = 0 | l[Ae >> 0],
                                                            X = 0 | l[ye >> 0],
                                                            J = 0 | l[ge >> 0],
                                                            l[ce >> 0] = 0 | l[le >> 0],
                                                            l[he >> 0] = Oe,
                                                            l[ye >> 0] = Ce,
                                                            l[se >> 0] = Ee,
                                                            l[pe >> 0] = Re,
                                                            l[ge >> 0] = Ie,
                                                            l[fe >> 0] = ue,
                                                            l[de >> 0] = X,
                                                            l[ve >> 0] = J,
                                                            J = 0 | g[ce >> 2],
                                                            X = 0 | g[se >> 2],
                                                            ue = 0 | g[fe >> 2],
                                                            l[ae >> 0] = 0 | l[368 + (0 | _[ae >> 0]) >> 0],
                                                            l[le >> 0] = 0 | l[368 + (J >>> 24) >> 0],
                                                            l[be >> 0] = 0 | l[368 + (X >>> 16 & 255) >> 0],
                                                            l[Ae >> 0] = 0 | l[368 + (ue >>> 8 & 255) >> 0],
                                                            l[ce >> 0] = 0 | l[368 + (255 & ke) >> 0],
                                                            l[me >> 0] = 0 | l[368 + (255 & J) >> 0],
                                                            l[he >> 0] = 0 | l[368 + (X >>> 24) >> 0],
                                                            l[ye >> 0] = 0 | l[368 + (ue >>> 16 & 255) >> 0],
                                                            l[se >> 0] = 0 | l[368 + (255 & Se) >> 0],
                                                            l[pe >> 0] = 0 | l[368 + (J >>> 8 & 255) >> 0],
                                                            l[_e >> 0] = 0 | l[368 + (255 & X) >> 0],
                                                            l[ge >> 0] = 0 | l[368 + (ue >>> 24) >> 0],
                                                            l[fe >> 0] = 0 | l[368 + (255 & xe) >> 0],
                                                            l[de >> 0] = 0 | l[368 + (J >>> 16 & 255) >> 0],
                                                            l[ve >> 0] = 0 | l[368 + (X >>> 8 & 255) >> 0],
                                                            l[we >> 0] = 0 | l[368 + (255 & ue) >> 0],
                                                            Ir(ae, D + 8 + (oe << 2 << 2) | 0),
                                                            g[P >> 2] = 0,
                                                            g[P + 4 >> 2] = 0,
                                                            g[P + 8 >> 2] = 0,
                                                            ue = g[P + 12 >> 2] = 0;
                                                            do {
                                                                var De = 0;
                                                                do {
                                                                    for (var Pe = (ne = 0) | l[(q = P + ((L = De << 2) + ue) | 0) >> 0]; Ce = (Ee = 255 & (Re = 0 | l[624 + (ue << 2) + ne >> 0])) << 1,
                                                                    Re = (Ce = Re << 24 >> 24 < 0 ? 27 ^ Ce : Ce) << 1 & 510,
                                                                    Ie = (Re = (255 & Ce) << 24 >> 24 < 0 ? 27 ^ Re : Re) << 1 & 510,
                                                                    ke = (Ie = (255 & Re) << 24 >> 24 < 0 ? 27 ^ Ie : Ie) << 1 & 510,
                                                                    Se = (ke = (255 & Ie) << 24 >> 24 < 0 ? 27 ^ ke : ke) << 1 & 510,
                                                                    xe = (Se = (255 & ke) << 24 >> 24 < 0 ? 27 ^ Se : Se) << 1 & 510,
                                                                    J = (xe = (255 & Se) << 24 >> 24 < 0 ? 27 ^ xe : xe) << 1,
                                                                    Pe ^= 255 & (Ce & 0 - ((X = 0 | _[ae + (ne + L) >> 0]) >>> 1 & 1) ^ 0 - (1 & X) & Ee ^ Re & 0 - (X >>> 2 & 1) ^ Ie & 0 - (X >>> 3 & 1) ^ ke & 0 - (X >>> 4 & 1) ^ Se & 0 - (X >>> 5 & 1) ^ xe & 0 - (X >>> 6 & 1) ^ ((255 & xe) << 24 >> 24 < 0 ? 254 & J ^ 27 : J) & 0 - (X >>> 7)),
                                                                    4 != (0 | (ne = ne + 1 | 0)); )
                                                                        ;
                                                                    l[q >> 0] = Pe,
                                                                    De = De + 1 | 0
                                                                } while (4 != (0 | De));ue = ue + 1 | 0
                                                            } while (4 != (0 | ue));g[ae >> 2] = g[P >> 2],
                                                            g[ae + 4 >> 2] = g[P + 4 >> 2],
                                                            g[ae + 8 >> 2] = g[P + 8 >> 2],
                                                            g[ae + 12 >> 2] = g[P + 12 >> 2],
                                                            oe = oe + -1 | 0
                                                        } while (0 != (0 | oe));Ie = 0 | l[ce >> 0],
                                                    ke = 0 | l[se >> 0],
                                                    Se = 0 | l[fe >> 0];
                                                    var Me = 0 | l[pe >> 0];
                                                    Oe = 0 | l[de >> 0],
                                                    Ce = 0 | l[be >> 0],
                                                    Ee = 0 | l[he >> 0],
                                                    Re = 0 | l[ve >> 0],
                                                    X = 0 | l[Ae >> 0],
                                                    J = 0 | l[ye >> 0],
                                                    xe = 0 | l[ge >> 0],
                                                    l[ce >> 0] = 0 | l[le >> 0],
                                                    l[he >> 0] = Me,
                                                    l[ye >> 0] = Oe,
                                                    l[se >> 0] = Ce,
                                                    l[pe >> 0] = Ee,
                                                    l[ge >> 0] = Re,
                                                    l[fe >> 0] = X,
                                                    l[de >> 0] = J,
                                                    l[ve >> 0] = xe,
                                                    xe = 0 | g[ce >> 2],
                                                    J = 0 | g[se >> 2],
                                                    X = 0 | g[fe >> 2],
                                                    l[ae >> 0] = 0 | l[368 + (0 | _[ae >> 0]) >> 0],
                                                    l[le >> 0] = 0 | l[368 + (xe >>> 24) >> 0],
                                                    l[be >> 0] = 0 | l[368 + (J >>> 16 & 255) >> 0],
                                                    l[Ae >> 0] = 0 | l[368 + (X >>> 8 & 255) >> 0],
                                                    l[ce >> 0] = 0 | l[368 + (255 & Ie) >> 0],
                                                    l[me >> 0] = 0 | l[368 + (255 & xe) >> 0],
                                                    l[he >> 0] = 0 | l[368 + (J >>> 24) >> 0],
                                                    l[ye >> 0] = 0 | l[368 + (X >>> 16 & 255) >> 0],
                                                    l[se >> 0] = 0 | l[368 + (255 & ke) >> 0],
                                                    l[pe >> 0] = 0 | l[368 + (xe >>> 8 & 255) >> 0],
                                                    l[_e >> 0] = 0 | l[368 + (255 & J) >> 0],
                                                    l[ge >> 0] = 0 | l[368 + (X >>> 24) >> 0],
                                                    l[fe >> 0] = 0 | l[368 + (255 & Se) >> 0],
                                                    l[de >> 0] = 0 | l[368 + (xe >>> 16 & 255) >> 0],
                                                    l[ve >> 0] = 0 | l[368 + (J >>> 8 & 255) >> 0],
                                                    l[we >> 0] = 0 | l[368 + (255 & X) >> 0],
                                                    Ir(ae, Q)
                                                }
                                                if ((0 | (t = t + 1 | 0)) == (0 | ie))
                                                    break e;
                                                oe = 0 | g[$ >> 2]
                                            }
                                    } while (0);ee = ee + 1 | 0
                                } while ((0 | ee) != (0 | K))
                            }
                            if (oe = (X = ((t = 65535 & Y) >>> 0) % 100 | 0) << 1,
                            X >>> 0 < 50 ? Cr(255 & oe, T, 16) : Fr(oe + 156 & 255, T, 16),
                            X = 50 * t | 0,
                            Y << 16 >> 16) {
                                Re = T + 8 | 0,
                                ie = T + 4 | 0;
                                var Fe = T + 12 | 0;
                                for (Ie = D + 20 | 0,
                                ke = D + 16 | 0,
                                Se = D + 4 | 0,
                                xe = D + 8 | 0,
                                J = D + 12 | 0,
                                me = D + 24 | 0,
                                Ee = D + 25 | 0,
                                _e = D + 26 | 0,
                                we = D + 27 | 0,
                                ae = D + 28 | 0,
                                ee = D + 29 | 0,
                                te = D + 30 | 0,
                                H = D + 31 | 0,
                                K = D + 32 | 0,
                                Q = D + 33 | 0,
                                $ = D + 34 | 0,
                                re = D + 35 | 0,
                                Y = D + 36 | 0,
                                Me = D + 37 | 0,
                                Oe = D + 38 | 0,
                                Ce = D + 39 | 0,
                                he = (ge = 0) | l[T >> 0],
                                be = 0 | l[T + 2 >> 0],
                                ye = 0 | l[T + 3 >> 0],
                                de = 0 | l[ie >> 0],
                                pe = 0 | l[T + 5 >> 0],
                                fe = 0 | l[T + 6 >> 0],
                                q = 0 | l[T + 7 >> 0],
                                Pe = 0 | l[Re >> 0],
                                ce = 0 | l[T + 9 >> 0],
                                se = 0 | l[T + 10 >> 0],
                                ne = 0 | l[T + 11 >> 0],
                                De = 0 | l[Fe >> 0],
                                ue = 0 | l[T + 13 >> 0],
                                L = 0 | l[T + 14 >> 0],
                                oe = 0 | l[T + 15 >> 0],
                                t = 0 | l[T + 1 >> 0]; ; ) {
                                    for (g[P >> 2] = 0,
                                    g[P + 4 >> 2] = 0,
                                    g[P + 8 >> 2] = 0,
                                    g[P + 12 >> 2] = 0,
                                    g[D >> 2] = 1732584193,
                                    g[Se >> 2] = -271733879,
                                    g[xe >> 2] = -1732584194,
                                    g[J >> 2] = 271733878,
                                    g[ke >> 2] = 128,
                                    g[Ie >> 2] = 0,
                                    l[me >> 0] = he,
                                    l[Ee >> 0] = t,
                                    l[_e >> 0] = be,
                                    l[we >> 0] = ye,
                                    l[ae >> 0] = de,
                                    l[ee >> 0] = pe,
                                    l[te >> 0] = fe,
                                    l[H >> 0] = q,
                                    l[K >> 0] = Pe,
                                    l[Q >> 0] = ce,
                                    l[$ >> 0] = se,
                                    l[re >> 0] = ne,
                                    l[Y >> 0] = De,
                                    l[Me >> 0] = ue,
                                    l[Oe >> 0] = L,
                                    l[Ce >> 0] = oe,
                                    Wr(P, D),
                                    g[T >> 2] = g[P >> 2],
                                    g[T + 4 >> 2] = g[P + 4 >> 2],
                                    g[T + 8 >> 2] = g[P + 8 >> 2],
                                    g[T + 12 >> 2] = g[P + 12 >> 2],
                                    L = 0 | g[ie >> 2],
                                    oe = t = 0,
                                    De = 0 | g[T >> 2]; L = (((De = (1880330306 + (L << 4) ^ L + (t = t + -1640531527 | 0) ^ (L >>> 5) - 1078357479) + De | 0) << 4) - 893414228 ^ De + t ^ (De >>> 5) - 904415881) + L | 0,
                                    32 != (0 | (oe = oe + 1 | 0)); )
                                        ;
                                    for (Ae = (g[T >> 2] = De) >>> 8,
                                    ne = De >>> 16,
                                    ye = De >>> 24 & 255,
                                    ue = (g[ie >> 2] = L) >>> 8,
                                    q = L >>> 16,
                                    Pe = L >>> 24,
                                    ve = 0 | g[Fe >> 2],
                                    oe = t = 0,
                                    le = 0 | g[Re >> 2]; ve = (1817191059 + ((le = (1435902107 + (ve << 4) ^ ve + (t = t + -1640531527 | 0) ^ 844315429 + (ve >>> 5)) + le | 0) << 4) ^ le + t ^ (le >>> 5) - 1520675947) + ve | 0,
                                    32 != (0 | (oe = oe + 1 | 0)); )
                                        ;
                                    if (g[Re >> 2] = le,
                                    g[Fe >> 2] = ve,
                                    X >>> 0 <= (ge = ge + 1 | 0) >>> 0)
                                        break;
                                    he = 255 & De,
                                    be = 255 & ne,
                                    de = 255 & L,
                                    pe = 255 & ue,
                                    fe = 255 & q,
                                    q = 255 & Pe,
                                    Pe = 255 & le,
                                    ce = le >>> 8 & 255,
                                    se = le >>> 16 & 255,
                                    ne = le >>> 24 & 255,
                                    De = 255 & ve,
                                    ue = ve >>> 8 & 255,
                                    L = ve >>> 16 & 255,
                                    oe = ve >>> 24 & 255,
                                    t = 255 & Ae
                                }
                            }
                            if ((t = (e >>> 0) % 200 | 0) >>> 0 < 100 ? Cr(255 & t, T, 4) : Fr(t + 156 & 255, T, 4),
                            (255 & (t = (255 & (t = 0 | l[W >> 0])) < 200 ? t : t + 56 << 24 >> 24)) < 100 ? Cr(t, T + 4 | 0, 4) : Fr(156 + (255 & t) & 255, T + 4 | 0, 4),
                            (t = 0 | Nr(0 | Z, 0 | z, 200, 0)) >>> 0 < 100 ? Cr(255 & t, T + 8 | 0, 4) : Fr(t + 156 & 255, T + 8 | 0, 4),
                            (255 & (t = (255 & (t = 0 | l[(se = T + 12 | 0) >> 0])) < 200 ? t : t + 56 << 24 >> 24)) < 100 ? Cr(t, se, 4) : Fr(156 + (255 & t) & 255, se, 4),
                            Ur(0 | D, 0, 200),
                            g[I >> 2] = e,
                            g[I + 4 >> 2] = 1,
                            g[(De = I + 8 | 0) >> 2] = Z,
                            g[De + 4 >> 2] = z,
                            g[I + 16 >> 2] = j,
                            Sr(D, 200, 3350, I),
                            g[F >> 2] = 0,
                            g[F + 4 >> 2] = 0,
                            g[F + 8 >> 2] = 0,
                            g[F + 12 >> 2] = 0,
                            g[F + 16 >> 2] = 0,
                            g[F + 20 >> 2] = 0,
                            g[F + 24 >> 2] = 0,
                            g[F + 28 >> 2] = 0,
                            De = (l[F + 32 >> 0] = 0) | Er(D),
                            g[P >> 2] = 0,
                            g[P + 4 >> 2] = 0,
                            g[P + 8 >> 2] = 0,
                            g[P + 12 >> 2] = 0,
                            g[I >> 2] = 1732584193,
                            g[I + 4 >> 2] = -271733879,
                            g[I + 8 >> 2] = -1732584194,
                            g[I + 12 >> 2] = 271733878,
                            g[I + 16 >> 2] = De << 3,
                            g[I + 20 >> 2] = De >>> 29,
                            ne = I + 24 | 0,
                            64 <= De >>> 0) {
                                for (ue = D,
                                L = (q = ne) + 64 | 0; g[q >> 2] = g[ue >> 2],
                                ue = ue + 4 | 0,
                                (0 | (q = q + 4 | 0)) < (0 | L); )
                                    ;
                                if (Rr(I, ne),
                                127 < De >>> 0)
                                    for (oe = 64; Rr(I, D + oe | 0),
                                    t = oe + 64 | 0,
                                    (oe + 127 | 0) >>> 0 < De >>> 0; )
                                        oe = t;
                                else
                                    t = 64
                            } else
                                t = 0;
                            for (Jr(0 | ne, D + t | 0, De - t | 0),
                            Wr(P, I),
                            q = 0 | l[P + 1 >> 0],
                            z = 0 | l[P + 2 >> 0],
                            Pe = 0 | l[P + 3 >> 0],
                            e = 0 | l[P + 4 >> 0],
                            ce = 0 | l[P + 5 >> 0],
                            Z = 0 | l[P + 6 >> 0],
                            j = 0 | l[P + 7 >> 0],
                            D = 0 | l[P + 8 >> 0],
                            I = 0 | l[P + 9 >> 0],
                            De = 0 | l[P + 10 >> 0],
                            ne = 0 | l[P + 11 >> 0],
                            oe = 0 | l[P + 12 >> 0],
                            t = 0 | l[P + 13 >> 0],
                            L = 0 | l[P + 14 >> 0],
                            ue = 0 | l[P + 15 >> 0],
                            g[R >> 2] = _[P >> 0],
                            Sr(F, 3, 3345, R),
                            g[E >> 2] = 255 & q,
                            Sr(F + 2 | 0, 3, 3345, E),
                            q = F + 4 | 0,
                            g[C >> 2] = 255 & z,
                            Sr(q, 3, 3345, C),
                            g[O >> 2] = 255 & Pe,
                            Sr(F + 6 | 0, 3, 3345, O),
                            Pe = F + 8 | 0,
                            g[x >> 2] = 255 & e,
                            Sr(Pe, 3, 3345, x),
                            g[S >> 2] = 255 & ce,
                            Sr(F + 10 | 0, 3, 3345, S),
                            ce = F + 12 | 0,
                            g[k >> 2] = 255 & Z,
                            Sr(ce, 3, 3345, k),
                            g[w >> 2] = 255 & j,
                            Sr(F + 14 | 0, 3, 3345, w),
                            g[m >> 2] = 255 & D,
                            Sr(F + 16 | 0, 3, 3345, m),
                            g[y >> 2] = 255 & I,
                            Sr(F + 18 | 0, 3, 3345, y),
                            g[A >> 2] = 255 & De,
                            Sr(F + 20 | 0, 3, 3345, A),
                            g[v >> 2] = 255 & ne,
                            Sr(F + 22 | 0, 3, 3345, v),
                            g[h >> 2] = 255 & oe,
                            Sr(F + 24 | 0, 3, 3345, h),
                            g[b >> 2] = 255 & t,
                            Sr(F + 26 | 0, 3, 3345, b),
                            g[d >> 2] = 255 & L,
                            Sr(F + 28 | 0, 3, 3345, d),
                            g[p >> 2] = 255 & ue,
                            Sr(F + 30 | 0, 3, 3345, p),
                            ue = T + 4 | 0,
                            L = 0 | g[F >> 2],
                            q = 0 | g[q >> 2],
                            Pe = 0 | g[Pe >> 2],
                            ce = 0 | g[ce >> 2],
                            t = 0 | g[ue >> 2],
                            ne = oe = 0,
                            De = 0 | g[T >> 2]; t = (((De = ((t << 4) + L ^ t + (oe = oe + -1640531527 | 0) ^ (t >>> 5) + q) + De | 0) << 4) + Pe ^ De + oe ^ (De >>> 5) + ce) + t | 0,
                            32 != (0 | (ne = ne + 1 | 0)); )
                                ;
                            for (g[T >> 2] = De,
                            g[ue >> 2] = t,
                            ue = T + 8 | 0,
                            t = 0 | g[se >> 2],
                            ne = oe = 0,
                            De = 0 | g[ue >> 2]; t = (((De = ((t << 4) + L ^ t + (oe = oe + -1640531527 | 0) ^ (t >>> 5) + q) + De | 0) << 4) + Pe ^ De + oe ^ (De >>> 5) + ce) + t | 0,
                            32 != (0 | (ne = ne + 1 | 0)); )
                                ;
                            g[ue >> 2] = De,
                            g[se >> 2] = t,
                            T = 0 | _r(T, 16),
                            g[f >> 2] = 1,
                            Sr(N, 3, 3345, f),
                            g[c >> 2] = 255 & T,
                            Sr(N + 2 | 0, 3, 3345, c),
                            g[u >> 2] = T >>> 8 & 255,
                            Sr(N + 4 | 0, 3, 3345, u),
                            g[a >> 2] = T >>> 16 & 255,
                            Sr(N + 6 | 0, 3, 3345, a),
                            g[i >> 2] = T >>> 24,
                            Sr(N + 8 | 0, 3, 3345, i),
                            T || (n = 58)
                        } else
                            n = 58;
                        return 58 == (0 | n) && (Qr(N),
                        N = 0),
                        Qr(r),
                        M = o,
                        O = null,
                        0 != N && (O = s.Pointer_stringify(N),
                        s._free(N)),
                        O
                    }
```