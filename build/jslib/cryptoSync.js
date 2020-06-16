"use strict";
var n = function cryptoSyncModule(u) {
    var s;
    s || (s = "undefined" != typeof u ? u : {});
    var l, A = {};
    for (l in s)
        s.hasOwnProperty(l) && (A[l] = s[l]);
    s.arguments = [],
        s.thisProgram = "./this.program",
        s.quit = function (e, t) {
            throw t;
        },
        s.preRun = [],
        s.postRun = [];
    var m = "";
    var _ = function Za(e) { }, w = function $a(e) { };
    for (l in A)
        A.hasOwnProperty(l) && (s[l] = A[l]);
    function ab(e) {
        var t;
        return t || (t = 16),
            Math.ceil(e / t) * t;
    }
    A = void 0;
    var k, S, x, C, E, R, I, M, F, N, B = !1;
    function assert(e, t) {
        e || db("Assertion failed: " + t);
    }
    function gb(e, t) {
        if (0 === t || !e)
            return "";
        for (var r, n = 0, o = 0; n |= r = x[e + o >> 0],
            (0 != r || t) && (o++,
                !t || o != t);)
            ;
        if (t || (t = o),
            r = "",
            n < 128) {
            for (; 0 < t;)
                n = String.fromCharCode.apply(String, x.subarray(e, e + Math.min(t, 1024))),
                    r = r ? r + n : n,
                    e += 1024,
                    t -= 1024;
            return r;
        }
        e: {
            for (t = x,
                n = e; t[n];)
                ++n;
            for (n = "";;) {
                if (!(r = t[e++])) {
                    e = n;
                    break e;
                }
                if (128 & r)
                    if (o = 63 & t[e++],
                        192 == (224 & r))
                        n += String.fromCharCode((31 & r) << 6 | o);
                    else {
                        var i = 63 & t[e++];
                        if (224 == (240 & r))
                            r = (15 & r) << 12 | o << 6 | i;
                        else {
                            var a = 63 & t[e++];
                            if (240 == (248 & r))
                                r = (7 & r) << 18 | o << 12 | i << 6 | a;
                            else {
                                var u = 63 & t[e++];
                                r = 248 == (252 & r) ? (3 & r) << 24 | o << 18 | i << 12 | a << 6 | u : (1 & r) << 30 | o << 24 | i << 18 | a << 12 | u << 6 | 63 & t[e++];
                            }
                        }
                        r < 65536 ? n += String.fromCharCode(r) : (r -= 65536,
                            n += String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r));
                    }
                else
                    n += String.fromCharCode(r);
            }
        }
        return e;
    }
    function lb(e, t) {
        return 0 < e % t && (e += t - e % t),
            e;
    }
    function ob() {
        s.HEAP8 = S = new Int8Array(k),
            s.HEAP16 = new Int16Array(k),
            s.HEAP32 = C = new Int32Array(k),
            s.HEAPU8 = x = new Uint8Array(k),
            s.HEAPU16 = new Uint16Array(k),
            s.HEAPU32 = new Uint32Array(k),
            s.HEAPF32 = new Float32Array(k),
            s.HEAPF64 = new Float64Array(k);
    }
    E = 0,
        s.reallocBuffer || (s.reallocBuffer = function (e) {
            try {
                var t = S, r = new ArrayBuffer(e);
                new Int8Array(r).set(t);
            }
            catch (e) {
                return !1;
            }
            return !!ue(r) && r;
        });
    try {
        (N = Function.prototype.call.bind(Object.getOwnPropertyDescriptor(ArrayBuffer.prototype, "byteLength").get))(new ArrayBuffer(4));
    }
    catch (e) {
        N = function zb(e) {
            return e.byteLength;
        };
    }
    var V = s.TOTAL_STACK || 3145728, U = s.TOTAL_MEMORY || 4194304;
    function Gb(e) {
        for (; 0 < e.length;) {
            var t = e.shift();
            if ("function" == typeof t)
                t();
            else {
                var r = t.o;
                "number" == typeof r ? void 0 === t.m ? s.dynCall_v(r) : s.dynCall_vi(r, t.m) : r(void 0 === t.m ? null : t.m);
            }
        }
    }
    U < V && w("TOTAL_MEMORY should be larger than TOTAL_STACK, was " + U + "! (TOTAL_STACK=" + V + ")"),
        s.buffer ? k = s.buffer : (k = new ArrayBuffer(U),
            s.buffer = k),
        ob();
    var W = [], G = [], z = [], H = [], Y = !1;
    function Mb() {
        var e = s.preRun.shift();
        W.unshift(e);
    }
    Math.imul && -5 === Math.imul(4294967295, 5) || (Math.imul = function (e, t) {
        var r = 65535 & e, n = 65535 & t;
        return r * n + ((e >>> 16) * n + r * (t >>> 16) << 16) | 0;
    }),
        Math.clz32 || (Math.clz32 = function (e) {
            var t = 32, r = e >> 16;
            return r && (t -= 16,
                e = r),
                (r = e >> 8) && (t -= 8,
                    e = r),
                (r = e >> 4) && (t -= 4,
                    e = r),
                (r = e >> 2) && (t -= 2,
                    e = r),
                e >> 1 ? t - 2 : t - e;
        }),
        Math.trunc || (Math.trunc = function (e) {
            return e < 0 ? Math.ceil(e) : Math.floor(e);
        });
    var J = 0, X = null, Q = null;
    s.preloadedImages = {},
        s.preloadedAudios = {};
    var ee = null, te = "data:application/octet-stream;base64,";
    E = 4736 + 8,
        G.push(),
        ee = "data:application/octet-stream;base64,AAAAAAAAAAApxdWrDG8iIdDyb/4wLelGb2eUg0CbSLvkEvmfkjc7BQAAAAAAAAAAAAAAAAAAAABjfHd78mtvxTABZyv+16t2yoLJffpZR/Ct1KKvnKRywLf9kyY2P/fMNKXl8XHYMRUExyPDGJYFmgcSgOLrJ7J1CYMsGhtuWqBSO9azKeMvhFPRAO0g/LFbasu+OUpMWM/Q76r7Q00zhUX5An9QPJ+oUaNAj5KdOPW8ttohEP/z0s0ME+xfl0QXxKd+PWRdGXNggU/cIiqQiEbuuBTeXgvb4DI6CkkGJFzC06xikZXkeefIN22N1U6pbFb06mV6rgi6eCUuHKa0xujddB9LvYuKcD61ZkgD9g5hNVe5hsEdnuH4mBFp2Y6Umx6H6c5VKN+MoYkNv+ZCaEGZLQ+wVLsWAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAbAAAANgAAAAAAAAAAAAAAUglq1TA2pTi/QKOegfPX+3zjOYKbL/+HNI5DRMTe6ctUe5QypsIjPe5MlQtC+sNOCC6hZijZJLJ2W6JJbYvRJXL49mSGaJgW1KRczF1ltpJscEhQ/e252l4VRlenjZ2EkNirAIy80wr35FgFuLNFBtAsHo/KPw8Cwa+9AwETims6kRFBT2fc6pfyz87wtOZzlqx0IuetNYXi+TfoHHXfbkfxGnEdKcWJb7diDqoYvhv8Vj5LxtJ5IJrbwP54zVr0H92oM4gHxzGxEhBZJ4DsX2BRf6kZtUoNLeV6n5PJnO+g4DtNrir1sMjruzyDU5lhFysEfrp31ibhaRRjVSEMfQ4LDQkJDgsNDQkOCwsNCQ5BQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGFiY2RlZmdoamtsbW5vcHFyc3R1dnd4eXpBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWjAxMjM0NTY3ODkAAABUISIZDQECAxFLHAwQBAsdEh4naG5vcHFiIAUGDxMUFRoIFgcoJBcYCQoOGx8lI4OCfSYqKzw9Pj9DR0pNWFlaW1xdXl9gYWNkZWZnaWprbHJzdHl6e3wAAAAAAAAAAABJbGxlZ2FsIGJ5dGUgc2VxdWVuY2UARG9tYWluIGVycm9yAFJlc3VsdCBub3QgcmVwcmVzZW50YWJsZQBOb3QgYSB0dHkAUGVybWlzc2lvbiBkZW5pZWQAT3BlcmF0aW9uIG5vdCBwZXJtaXR0ZWQATm8gc3VjaCBmaWxlIG9yIGRpcmVjdG9yeQBObyBzdWNoIHByb2Nlc3MARmlsZSBleGlzdHMAVmFsdWUgdG9vIGxhcmdlIGZvciBkYXRhIHR5cGUATm8gc3BhY2UgbGVmdCBvbiBkZXZpY2UAT3V0IG9mIG1lbW9yeQBSZXNvdXJjZSBidXN5AEludGVycnVwdGVkIHN5c3RlbSBjYWxsAFJlc291cmNlIHRlbXBvcmFyaWx5IHVuYXZhaWxhYmxlAEludmFsaWQgc2VlawBDcm9zcy1kZXZpY2UgbGluawBSZWFkLW9ubHkgZmlsZSBzeXN0ZW0ARGlyZWN0b3J5IG5vdCBlbXB0eQBDb25uZWN0aW9uIHJlc2V0IGJ5IHBlZXIAT3BlcmF0aW9uIHRpbWVkIG91dABDb25uZWN0aW9uIHJlZnVzZWQASG9zdCBpcyBkb3duAEhvc3QgaXMgdW5yZWFjaGFibGUAQWRkcmVzcyBpbiB1c2UAQnJva2VuIHBpcGUASS9PIGVycm9yAE5vIHN1Y2ggZGV2aWNlIG9yIGFkZHJlc3MAQmxvY2sgZGV2aWNlIHJlcXVpcmVkAE5vIHN1Y2ggZGV2aWNlAE5vdCBhIGRpcmVjdG9yeQBJcyBhIGRpcmVjdG9yeQBUZXh0IGZpbGUgYnVzeQBFeGVjIGZvcm1hdCBlcnJvcgBJbnZhbGlkIGFyZ3VtZW50AEFyZ3VtZW50IGxpc3QgdG9vIGxvbmcAU3ltYm9saWMgbGluayBsb29wAEZpbGVuYW1lIHRvbyBsb25nAFRvbyBtYW55IG9wZW4gZmlsZXMgaW4gc3lzdGVtAE5vIGZpbGUgZGVzY3JpcHRvcnMgYXZhaWxhYmxlAEJhZCBmaWxlIGRlc2NyaXB0b3IATm8gY2hpbGQgcHJvY2VzcwBCYWQgYWRkcmVzcwBGaWxlIHRvbyBsYXJnZQBUb28gbWFueSBsaW5rcwBObyBsb2NrcyBhdmFpbGFibGUAUmVzb3VyY2UgZGVhZGxvY2sgd291bGQgb2NjdXIAU3RhdGUgbm90IHJlY292ZXJhYmxlAFByZXZpb3VzIG93bmVyIGRpZWQAT3BlcmF0aW9uIGNhbmNlbGVkAEZ1bmN0aW9uIG5vdCBpbXBsZW1lbnRlZABObyBtZXNzYWdlIG9mIGRlc2lyZWQgdHlwZQBJZGVudGlmaWVyIHJlbW92ZWQARGV2aWNlIG5vdCBhIHN0cmVhbQBObyBkYXRhIGF2YWlsYWJsZQBEZXZpY2UgdGltZW91dABPdXQgb2Ygc3RyZWFtcyByZXNvdXJjZXMATGluayBoYXMgYmVlbiBzZXZlcmVkAFByb3RvY29sIGVycm9yAEJhZCBtZXNzYWdlAEZpbGUgZGVzY3JpcHRvciBpbiBiYWQgc3RhdGUATm90IGEgc29ja2V0AERlc3RpbmF0aW9uIGFkZHJlc3MgcmVxdWlyZWQATWVzc2FnZSB0b28gbGFyZ2UAUHJvdG9jb2wgd3JvbmcgdHlwZSBmb3Igc29ja2V0AFByb3RvY29sIG5vdCBhdmFpbGFibGUAUHJvdG9jb2wgbm90IHN1cHBvcnRlZABTb2NrZXQgdHlwZSBub3Qgc3VwcG9ydGVkAE5vdCBzdXBwb3J0ZWQAUHJvdG9jb2wgZmFtaWx5IG5vdCBzdXBwb3J0ZWQAQWRkcmVzcyBmYW1pbHkgbm90IHN1cHBvcnRlZCBieSBwcm90b2NvbABBZGRyZXNzIG5vdCBhdmFpbGFibGUATmV0d29yayBpcyBkb3duAE5ldHdvcmsgdW5yZWFjaGFibGUAQ29ubmVjdGlvbiByZXNldCBieSBuZXR3b3JrAENvbm5lY3Rpb24gYWJvcnRlZABObyBidWZmZXIgc3BhY2UgYXZhaWxhYmxlAFNvY2tldCBpcyBjb25uZWN0ZWQAU29ja2V0IG5vdCBjb25uZWN0ZWQAQ2Fubm90IHNlbmQgYWZ0ZXIgc29ja2V0IHNodXRkb3duAE9wZXJhdGlvbiBhbHJlYWR5IGluIHByb2dyZXNzAE9wZXJhdGlvbiBpbiBwcm9ncmVzcwBTdGFsZSBmaWxlIGhhbmRsZQBSZW1vdGUgSS9PIGVycm9yAFF1b3RhIGV4Y2VlZGVkAE5vIG1lZGl1bSBmb3VuZABXcm9uZyBtZWRpdW0gdHlwZQBObyBlcnJvciBpbmZvcm1hdGlvbgAAAAAAABEACgAREREAAAAABQAAAAAAAAkAAAAACwAAAAAAAAAAEQAPChEREQMKBwABEwkLCwAACQYLAAALAAYRAAAAERERAAAAAAAAAAAAAAAAAAAAAAsAAAAAAAAAABEACgoREREACgAAAgAJCwAAAAkACwAACwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAAAAAAAAAMAAAAAAwAAAAACQwAAAAAAAwAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAADQAAAAQNAAAAAAkOAAAAAAAOAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAA8AAAAADwAAAAAJEAAAAAAAEAAAEAAAEgAAABISEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASAAAAEhISAAAAAAAACQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAAAAAAAAAACgAAAAAKAAAAAAkLAAAAAAALAAALAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAAwAAAAADAAAAAAJDAAAAAAADAAADAAAMDEyMzQ1Njc4OUFCQ0RFRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlcyVzACUwMngAJXUlZCVsbGQlcwBzdGF0ZSAhPSBOVUxMAC4vY29yZS9hZXN0aHJlYWQuY3BwAGFkZF9yb3VuZF9rZXkAa2V5ICE9IE5VTEwAJS4yeAAtKyAgIDBYMHgAKG51bGwpAC0wWCswWCAwWC0weCsweCAweABpbmYASU5GAG5hbgBOQU4ALg==";
    var re = E, ne = E += 16;
    F = ne,
        M = ab(I = (R = ab(E = E + 4 + 15 & -16)) + V),
        C[F >> 2] = M;
    var oe = !1, ie = "function" == typeof atob ? atob : function (e) {
        var t = "", r = 0;
        e = e.replace(/[^A-Za-z0-9\+\/=]/g, "");
        do {
            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(r++)), o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(r++)), i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(r++)), a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(e.charAt(r++));
            n = n << 2 | o >> 4,
                o = (15 & o) << 4 | i >> 2;
            var u = (3 & i) << 6 | a;
            t += String.fromCharCode(n),
                64 !== i && (t += String.fromCharCode(o)),
                64 !== a && (t += String.fromCharCode(u));
        } while (r < e.length);
        return t;
    };
    function Ta(e) {
        if (String.prototype.startsWith ? e.startsWith(te) : 0 === e.indexOf(te)) {
            e = e.slice(te.length);
            try {
                var t = ie(e), r = new Uint8Array(t.length);
                for (e = 0; e < t.length; ++e)
                    r[e] = t.charCodeAt(e);
            }
            catch (e) {
                throw Error("Converting base64 string to bytes failed.");
            }
            return r;
        }
    }
    s.asmGlobalArg = {
        Math: Math,
        Int8Array: Int8Array,
        Int16Array: Int16Array,
        Int32Array: Int32Array,
        Uint8Array: Uint8Array,
        Uint16Array: Uint16Array,
        Uint32Array: Uint32Array,
        Float32Array: Float32Array,
        Float64Array: Float64Array,
        NaN: NaN,
        Infinity: 1 / 0,
        byteLength: N
    },
        s.asmLibraryArg = {
            a: db,
            b: assert,
            c: function c() {
                var e = s.usingWasm ? 65536 : 16777216, t = 2147483648 - e;
                if (C[F >> 2] > t)
                    return !1;
                var r = U;
                for (U = Math.max(U, 16777216); U < C[F >> 2];)
                    U = U <= 536870912 ? lb(2 * U, e) : Math.min(lb((3 * U + 2147483648) / 4, e), t);
                return (e = s.reallocBuffer(U)) && e.byteLength == U ? (s.buffer = k = e,
                    ob(),
                    !0) : (U = r,
                    !1);
            },
            d: function d() {
                return U;
            },
            e: function e(t, r, n, o) {
                db("Assertion failed: " + gb(t) + ", at: " + [r ? gb(r) : "unknown filename", n, o ? gb(o) : "unknown function"]);
            },
            f: function f(e) {
                return s.___errno_location && (C[s.___errno_location() >> 2] = e),
                    e;
            },
            g: function g(e, t, r) {
                return x.set(x.subarray(t, t + r), e),
                    e;
            },
            h: function h(e) {
                var t = Date.now() / 1e3 | 0;
                return e && (C[e >> 2] = t),
                    t;
            },
            i: F,
            j: re,
            k: R,
            l: I
        };
    var ae = function (e, r, u) {
        function Ir(e, t) {
            if (t |= 0,
                (e |= 0) || X(3361, 3375, 134, 3396),
                t) {
                l[e >> 0] ^= l[t >> 0];
                var r = e + 1 | 0;
                l[r >> 0] ^= l[t + 1 >> 0],
                    l[(r = e + 2 | 0) >> 0] ^= l[t + 2 >> 0],
                    l[(r = e + 3 | 0) >> 0] ^= l[t + 3 >> 0],
                    l[(r = e + 4 | 0) >> 0] ^= l[t + 4 >> 0],
                    l[(r = e + 5 | 0) >> 0] ^= l[t + 5 >> 0],
                    l[(r = e + 6 | 0) >> 0] ^= l[t + 6 >> 0],
                    l[(r = e + 7 | 0) >> 0] ^= l[t + 7 >> 0],
                    l[(r = e + 8 | 0) >> 0] ^= l[t + 8 >> 0],
                    l[(r = e + 9 | 0) >> 0] ^= l[t + 9 >> 0],
                    l[(r = e + 10 | 0) >> 0] ^= l[t + 10 >> 0],
                    l[(r = e + 11 | 0) >> 0] ^= l[t + 11 >> 0],
                    l[(r = e + 12 | 0) >> 0] ^= l[t + 12 >> 0],
                    l[(r = e + 13 | 0) >> 0] ^= l[t + 13 >> 0],
                    l[(r = e + 14 | 0) >> 0] ^= l[t + 14 >> 0],
                    l[(e = e + 15 | 0) >> 0] ^= l[t + 15 >> 0];
            }
            else
                X(3410, 3375, 135, 3396);
        }
        function _r(e, t) {
            if (e |= 0,
                t |= 0,
                !(0 | g[1127])) {
                var r = 0;
                do {
                    var n = r >>> 1, o = (n = 0 == (1 & r | 0) ? n : -306674912 ^ n) >>> 1;
                    n = (o = 0 == (1 & n | 0) ? o : -306674912 ^ o) >>> 1,
                        o = (n = 0 == (1 & o | 0) ? n : -306674912 ^ n) >>> 1,
                        n = (o = 0 == (1 & n | 0) ? o : -306674912 ^ o) >>> 1,
                        o = (n = 0 == (1 & o | 0) ? n : -306674912 ^ n) >>> 1,
                        n = (o = 0 == (1 & n | 0) ? o : -306674912 ^ o) >>> 1,
                        o = (n = 0 == (1 & o | 0) ? n : -306674912 ^ n) >>> 1,
                        g[3488 + (r << 2) >> 2] = 0 == (1 & n | 0) ? o : -306674912 ^ o,
                        r = r + 1 | 0;
                } while (256 != (0 | r));
            }
            if (!t)
                return 0;
            for (r = -1,
                o = 0; r = g[3488 + ((255 & r ^ (0 | _[e + o >> 0])) << 2) >> 2] ^ r >>> 8,
                (0 | (o = o + 1 | 0)) != (0 | t);)
                ;
            return 0 | ~r;
        }
        function Rr(e, t) {
            t |= 0;
            var r = 0 | g[(e |= 0) >> 2], n = e + 4 | 0, o = 0 | g[n >> 2], i = e + 8 | 0, a = 0 | g[i >> 2], u = e + 12 | 0, c = 0 | g[u >> 2], s = (0 | _[t + 1 >> 0]) << 8 | _[t >> 0] | 0 | (0 | _[t + 2 >> 0]) << 16 | (0 | _[t + 3 >> 0]) << 24, f = (0 | _[t + 5 >> 0]) << 8 | _[t + 4 >> 0] | 0 | (0 | _[t + 6 >> 0]) << 16 | (0 | _[t + 7 >> 0]) << 24, l = (0 | _[t + 9 >> 0]) << 8 | _[t + 8 >> 0] | 0 | (0 | _[t + 10 >> 0]) << 16 | (0 | _[t + 11 >> 0]) << 24, p = (0 | _[t + 13 >> 0]) << 8 | _[t + 12 >> 0] | 0 | (0 | _[t + 14 >> 0]) << 16 | (0 | _[t + 15 >> 0]) << 24, d = (0 | _[t + 17 >> 0]) << 8 | _[t + 16 >> 0] | 0 | (0 | _[t + 18 >> 0]) << 16 | (0 | _[t + 19 >> 0]) << 24, b = (0 | _[t + 21 >> 0]) << 8 | _[t + 20 >> 0] | 0 | (0 | _[t + 22 >> 0]) << 16 | (0 | _[t + 23 >> 0]) << 24, h = (0 | _[t + 25 >> 0]) << 8 | _[t + 24 >> 0] | 0 | (0 | _[t + 26 >> 0]) << 16 | (0 | _[t + 27 >> 0]) << 24, v = (0 | _[t + 29 >> 0]) << 8 | _[t + 28 >> 0] | 0 | (0 | _[t + 30 >> 0]) << 16 | (0 | _[t + 31 >> 0]) << 24, A = (0 | _[t + 33 >> 0]) << 8 | _[t + 32 >> 0] | 0 | (0 | _[t + 34 >> 0]) << 16 | (0 | _[t + 35 >> 0]) << 24, y = (0 | _[t + 37 >> 0]) << 8 | _[t + 36 >> 0] | 0 | (0 | _[t + 38 >> 0]) << 16 | (0 | _[t + 39 >> 0]) << 24, m = (0 | _[t + 41 >> 0]) << 8 | _[t + 40 >> 0] | 0 | (0 | _[t + 42 >> 0]) << 16 | (0 | _[t + 43 >> 0]) << 24, w = (0 | _[t + 45 >> 0]) << 8 | _[t + 44 >> 0] | 0 | (0 | _[t + 46 >> 0]) << 16 | (0 | _[t + 47 >> 0]) << 24, k = (0 | _[t + 49 >> 0]) << 8 | _[t + 48 >> 0] | 0 | (0 | _[t + 50 >> 0]) << 16 | (0 | _[t + 51 >> 0]) << 24, S = (0 | _[t + 53 >> 0]) << 8 | _[t + 52 >> 0] | 0 | (0 | _[t + 54 >> 0]) << 16 | (0 | _[t + 55 >> 0]) << 24, x = (0 | _[t + 57 >> 0]) << 8 | _[t + 56 >> 0] | 0 | (0 | _[t + 58 >> 0]) << 16 | (0 | _[t + 59 >> 0]) << 24, O = (0 | _[t + 61 >> 0]) << 8 | _[t + 60 >> 0] | 0 | (0 | _[t + 62 >> 0]) << 16 | (0 | _[t + 63 >> 0]) << 24, C = r + -680876935 + (c & ~o | a & o) + s | 0, E = a + 606105820 + l + ((t = ((t = c + -389564585 + f + ((C = (C << 7 | C >>> 25) + o | 0) & o | a & ~C) | 0) << 12 | t >>> 20) + C | 0) & C | o & ~t) | 0, R = o + -1044525329 + p + ((E = (E << 17 | E >>> 15) + t | 0) & t | C & ~E) | 0, I = ~(t = ((t = S + -40341100 + (t = ((t = y + -1958414416 + (t = ((t = t + 1200080427 + b + ((C = ((C = C + -176418896 + d + ((R = (R << 22 | R >>> 10) + E | 0) & E | t & ~R) | 0) << 7 | C >>> 25) + R | 0) & R | E & ~C) | 0) << 12 | t >>> 20) + C | 0) + ((C = ((C = A + 1770035417 + C + ((R = ((R = v + -45705982 + R + ((E = ((E = E + -1473231340 + h + (t & C | R & ~t) | 0) << 17 | E >>> 15) + t | 0) & t | C & ~E) | 0) << 22 | R >>> 10) + E | 0) & E | t & ~R) | 0) << 7 | C >>> 25) + R | 0) & R | E & ~C) | 0) << 12 | t >>> 20) + C | 0) + ((C = ((C = k + 1804603683 + C + ((R = ((R = w + -1990404161 + R + ((E = ((E = m + -42062 + E + (t & C | R & ~t) | 0) << 17 | E >>> 15) + t | 0) & t | C & ~E) | 0) << 22 | R >>> 10) + E | 0) & E | t & ~R) | 0) << 7 | C >>> 25) + R | 0) & R | E & ~C) | 0) << 12 | t >>> 20) + C | 0), D = ~(E = ((E = x + -1502002289 + E + (t & C | R & I) | 0) << 17 | E >>> 15) + t | 0);
            R = y + -343485552 + (R = ((R = S + 1309151648 + (R = ((R = f + -2054922800 + (R = ((R = b + -57434056 + (R = ((R = l + -995338650 + (R = ((R = h + 76029190 + (R = ((R = m + -1094730639 + (R = ((R = x + -35309555 + (R = ((R = k + -1926607735 + (R = ((R = A + 1163531500 + (R = ((R = d + -405537849 + (R = ((R = s + -373897303 + (R = ((R = O + 1236535330 + R + (E & t | C & D) | 0) << 22 | R >>> 10) + E | 0) + ((E = ((E = w + 643717712 + E + ((D = ((D = h + -1069501633 + t + ((I = ((I = f + -165796511 + C + (R & t | E & I) | 0) << 5 | I >>> 27) + R | 0) & E | R & D) | 0) << 9 | D >>> 23) + I | 0) & R | I & ~R) | 0) << 14 | E >>> 18) + D | 0) & I | D & ~I) | 0) << 20 | R >>> 12) + E | 0) + ((E = ((E = O + -660478336 + E + ((D = ((D = m + 38016082 + D + ((I = ((I = b + -701558692 + I + (R & D | E & ~D) | 0) << 5 | I >>> 27) + R | 0) & E | R & ~E) | 0) << 9 | D >>> 23) + I | 0) & R | I & ~R) | 0) << 14 | E >>> 18) + D | 0) & I | D & ~I) | 0) << 20 | R >>> 12) + E | 0) + ((E = ((E = p + -187363962 + E + ((D = ((D = x + -1019803691 + D + ((I = ((I = y + 568446437 + I + (R & D | E & ~D) | 0) << 5 | I >>> 27) + R | 0) & E | R & ~E) | 0) << 9 | D >>> 23) + I | 0) & R | I & ~R) | 0) << 14 | E >>> 18) + D | 0) & I | D & ~I) | 0) << 20 | R >>> 12) + E | 0) + ((E = ((E = v + 1735328472 + E + ((D = ((D = l + -51403785 + D + ((I = ((I = S + -1444681468 + I + (R & D | E & ~D) | 0) << 5 | I >>> 27) + R | 0) & E | R & ~E) | 0) << 9 | D >>> 23) + I | 0) & R | I & ~R) | 0) << 14 | E >>> 18) + D | 0) & I | D & ~I) | 0) << 20 | R >>> 12) + E | 0) + ((t = ((t = A + -2022574462 + D + ((t = R ^ E) ^ (I = ((I = b + -378557 + I + (t ^ D) | 0) << 4 | I >>> 28) + R | 0)) | 0) << 11 | t >>> 21) + I | 0) ^ I ^ (E = ((E = w + 1839030563 + E + (I ^ R ^ t) | 0) << 16 | E >>> 16) + t | 0)) | 0) << 23 | R >>> 9) + E | 0) + ((t = ((t = d + 1272893354 + t + (R ^ E ^ (I = ((I = f + -1530992059 + I + (E ^ t ^ R) | 0) << 4 | I >>> 28) + R | 0)) | 0) << 11 | t >>> 21) + I | 0) ^ I ^ (E = ((E = v + -155497631 + E + (I ^ R ^ t) | 0) << 16 | E >>> 16) + t | 0)) | 0) << 23 | R >>> 9) + E | 0) + ((t = ((t = s + -358537221 + t + (R ^ E ^ (I = ((I = S + 681279175 + I + (E ^ t ^ R) | 0) << 4 | I >>> 28) + R | 0)) | 0) << 11 | t >>> 21) + I | 0) ^ I ^ (E = ((E = p + -722521978 + E + (I ^ R ^ t) | 0) << 16 | E >>> 16) + t | 0)) | 0) << 23 | R >>> 9) + E | 0) + ((t = ((t = k + -421815834 + t + (R ^ E ^ (I = ((I = y + -640364486 + I + (E ^ t ^ R) | 0) << 4 | I >>> 28) + R | 0)) | 0) << 11 | t >>> 21) + I | 0) ^ I ^ (E = ((E = O + 530742521 + E + (I ^ R ^ t) | 0) << 16 | E >>> 16) + t | 0)) | 0) << 23 | R >>> 9) + E | 0) + (((E = ((E = x + -1416354906 + E + (((t = ((t = v + 1126891414 + t + (((I = ((I = s + -198630845 + I + ((R | ~t) ^ E) | 0) << 6 | I >>> 26) + R | 0) | ~E) ^ R) | 0) << 10 | t >>> 22) + I | 0) | ~R) ^ I) | 0) << 15 | E >>> 17) + t | 0) | ~I) ^ t) | 0) << 21 | R >>> 11) + E | 0) + (((E = ((E = m + -1051524 + E + (((t = ((t = p + -1894986607 + t + (((I = ((I = k + 1700485570 + I + ((R | ~t) ^ E) | 0) << 6 | I >>> 26) + R | 0) | ~E) ^ R) | 0) << 10 | t >>> 22) + I | 0) | ~R) ^ I) | 0) << 15 | E >>> 17) + t | 0) | ~I) ^ t) | 0) << 21 | R >>> 11) + E | 0) + (((E = ((E = h + -1560198381 + E + (((t = ((t = O + -30611745 + t + (((I = ((I = A + 1873313358 + I + ((R | ~t) ^ E) | 0) << 6 | I >>> 26) + R | 0) | ~E) ^ R) | 0) << 10 | t >>> 22) + I | 0) | ~R) ^ I) | 0) << 15 | E >>> 17) + t | 0) | ~I) ^ t) | 0) << 21 | R >>> 11) + E | 0) + (((E = ((E = l + 718787258 + E + (((t = ((t = w + -1120210380 + t + (((I = ((I = d + -145523071 + I + ((R | ~t) ^ E) | 0) << 6 | I >>> 26) + R | 0) | ~E) ^ R) | 0) << 10 | t >>> 22) + I | 0) | ~R) ^ I) | 0) << 15 | E >>> 17) + t | 0) | ~I) ^ t) | 0,
                g[e >> 2] = I + r,
                g[n >> 2] = E + o + (R << 21 | R >>> 11),
                g[i >> 2] = E + a,
                g[u >> 2] = t + c;
        }
        function Wr(e, t) {
            e |= 0;
            var r = M;
            M = M + 16 | 0;
            var n = r, o = 16 + (t |= 0) | 0, i = 0 | g[o >> 2];
            l[n >> 0] = i,
                l[n + 1 >> 0] = i >>> 8,
                l[n + 2 >> 0] = i >>> 16,
                l[n + 3 >> 0] = i >>> 24;
            var a = t + 20 | 0, u = 0 | g[a >> 2];
            l[n + 4 >> 0] = u,
                l[n + 5 >> 0] = u >>> 8,
                l[n + 6 >> 0] = u >>> 16,
                l[n + 7 >> 0] = u >>> 24;
            var c = i >>> 3 & 63, s = (c >>> 0 < 56 ? 56 : 120) - c | 0, f = s << 3;
            i = f + i | 0;
            var p = u + 1 | 0;
            if ((g[o >> 2] = i) >>> 0 < f >>> 0 && (u = g[a >> 2] = p),
                g[a >> 2] = u + (s >>> 29),
                u = t + 24 + c | 0,
                (p = 64 - c | 0) >>> 0 <= s >>> 0) {
                if (Jr(0 | u, 704, 0 | p),
                    Rr(t, u = t + 24 | 0),
                    (p + 63 | 0) >>> 0 < s >>> 0)
                    for (;;) {
                        if (Rr(t, 704 + p | 0),
                            c = p + 64 | 0,
                            !((p + 127 | 0) >>> 0 < s >>> 0)) {
                            p = c;
                            break;
                        }
                        p = c;
                    }
            }
            else
                p = 0;
            for (Jr(0 | u, 704 + p | 0, s - p | 0),
                c = (i = 0 | g[o >> 2]) >>> 3 & 63,
                g[o >> 2] = i + 64,
                p = 1 + (u = 0 | g[a >> 2]) | 0,
                4294967231 < i >>> 0 && (u = g[a >> 2] = p),
                g[a >> 2] = u,
                u = t + 24 + c | 0,
                8 < (s = 64 - c | 0) >>> 0 ? (p = 8,
                    c = t) : (Jr(0 | u, 0 | n, 0 | s),
                    Rr(t, u = t + 24 | 0),
                    p = 8 - s | 0,
                    c = t,
                    n = n + s | 0),
                Jr(0 | u, 0 | n, 0 | p),
                l[e >> 0] = g[c >> 2],
                n = 0 | g[c >> 2],
                l[e + 1 >> 0] = n >>> 8,
                n = 0 | g[c >> 2],
                l[e + 2 >> 0] = n >>> 16,
                n = 0 | g[c >> 2],
                l[e + 3 >> 0] = n >>> 24,
                n = t + 4 | 0,
                l[e + 4 >> 0] = g[n >> 2],
                i = 0 | g[n >> 2],
                l[e + 5 >> 0] = i >>> 8,
                i = 0 | g[n >> 2],
                l[e + 6 >> 0] = i >>> 16,
                n = 0 | g[n >> 2],
                l[e + 7 >> 0] = n >>> 24,
                n = t + 8 | 0,
                l[e + 8 >> 0] = g[n >> 2],
                i = 0 | g[n >> 2],
                l[e + 9 >> 0] = i >>> 8,
                i = 0 | g[n >> 2],
                l[e + 10 >> 0] = i >>> 16,
                n = 0 | g[n >> 2],
                l[e + 11 >> 0] = n >>> 24,
                n = t + 12 | 0,
                l[e + 12 >> 0] = g[n >> 2],
                i = 0 | g[n >> 2],
                l[e + 13 >> 0] = i >>> 8,
                i = 0 | g[n >> 2],
                l[e + 14 >> 0] = i >>> 16,
                n = 0 | g[n >> 2],
                l[e + 15 >> 0] = n >>> 24,
                n = t + 88 | 0; ((l[t >> 0] = 0) | (t = t + 1 | 0)) < (0 | n);)
                ;
            M = r;
        }
        function p(e, t, r) {
            e |= 0,
                t |= 0,
                r |= 0;
            var n = M;
            M = M + 240 | 0;
            var o = n + 136 | 0, i = n + 128 | 0, a = n + 120 | 0, u = n + 112 | 0, c = n + 104 | 0, s = n + 96 | 0, f = n + 88 | 0, p = n + 80 | 0, d = n + 72 | 0, b = n + 64 | 0, h = n + 56 | 0, v = n + 48 | 0, A = n + 40 | 0, y = n + 32 | 0, m = n + 24 | 0, w = n + 16 | 0, k = n + 144 | 0;
            if (g[n >> 2] = 0,
                g[n + 4 >> 2] = 0,
                g[n + 8 >> 2] = 0,
                !((g[n + 12 >> 2] = 0) == (0 | e) | 0 == (0 | r))) {
                g[k >> 2] = 1732584193,
                    g[k + 4 >> 2] = -271733879,
                    g[k + 8 >> 2] = -1732584194,
                    g[k + 12 >> 2] = 271733878,
                    g[k + 16 >> 2] = t << 3,
                    g[k + 20 >> 2] = t >>> 29;
                var S = k + 24 | 0;
                if (64 <= t >>> 0) {
                    for (var x = S, O = e, C = x + 64 | 0; l[x >> 0] = 0 | l[O >> 0],
                        O = O + 1 | 0,
                        (0 | (x = x + 1 | 0)) < (0 | C);)
                        ;
                    if (Rr(k, S),
                        127 < t >>> 0)
                        for (O = 64; Rr(k, e + O | 0),
                            x = O + 64 | 0,
                            (O + 127 | 0) >>> 0 < t >>> 0;)
                            O = x;
                    else
                        x = 64;
                }
                else
                    x = 0;
                Jr(0 | S, e + x | 0, t - x | 0),
                    Wr(n, k),
                    g[w >> 2] = _[n >> 0],
                    Sr(r, 3, 3422, w),
                    g[m >> 2] = _[n + 1 >> 0],
                    Sr(r + 2 | 0, 3, 3422, m),
                    g[y >> 2] = _[n + 2 >> 0],
                    Sr(r + 4 | 0, 3, 3422, y),
                    g[A >> 2] = _[n + 3 >> 0],
                    Sr(r + 6 | 0, 3, 3422, A),
                    g[v >> 2] = _[n + 4 >> 0],
                    Sr(r + 8 | 0, 3, 3422, v),
                    g[h >> 2] = _[n + 5 >> 0],
                    Sr(r + 10 | 0, 3, 3422, h),
                    g[b >> 2] = _[n + 6 >> 0],
                    Sr(r + 12 | 0, 3, 3422, b),
                    g[d >> 2] = _[n + 7 >> 0],
                    Sr(r + 14 | 0, 3, 3422, d),
                    g[p >> 2] = _[n + 8 >> 0],
                    Sr(r + 16 | 0, 3, 3422, p),
                    g[f >> 2] = _[n + 9 >> 0],
                    Sr(r + 18 | 0, 3, 3422, f),
                    g[s >> 2] = _[n + 10 >> 0],
                    Sr(r + 20 | 0, 3, 3422, s),
                    g[c >> 2] = _[n + 11 >> 0],
                    Sr(r + 22 | 0, 3, 3422, c),
                    g[u >> 2] = _[n + 12 >> 0],
                    Sr(r + 24 | 0, 3, 3422, u),
                    g[a >> 2] = _[n + 13 >> 0],
                    Sr(r + 26 | 0, 3, 3422, a),
                    g[i >> 2] = _[n + 14 >> 0],
                    Sr(r + 28 | 0, 3, 3422, i),
                    g[o >> 2] = _[n + 15 >> 0],
                    Sr(r + 30 | 0, 3, 3422, o);
            }
            M = n;
        }
        function Fr(e, t, r) {
            switch (t |= 0,
                r |= 0,
                (e |= 0) << 24 >> 24) {
                case 0:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    r = 0;
                    do {
                        var n = t + r | 0, o = 47 + (-9 ^ l[n >> 0]) & 255;
                        o = 159 + (o << 1 | o >>> 7) & 255,
                            l[n >> 0] = o >>> 7 | o << 1,
                            r = r + 1 | 0;
                    } while ((0 | r) != (0 | e));
                    break;
                case 1:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; n = 193 + ((n = 255 & (-28 ^ l[(o = t + r | 0) >> 0])) << 2 | n >>> 6) & 255 ^ 33,
                        l[o >> 0] = 161 + (n >>> 1 | n << 7),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 2:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    r = 0;
                    do {
                        var i = 69 + (0 | _[(o = t + r | 0) >> 0]) | 0;
                        n = 130 ^ (((n = i << 2 & 252) | i >>> 6 & 3) << 2 & 252 | n >>> 6),
                            l[o >> 0] = 82 + (n >>> 3 | n << 5),
                            r = r + 1 | 0;
                    } while ((0 | r) != (0 | e));
                    break;
                case 3:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 247 + ((o = 255 & (-12 ^ l[(i = t + r | 0) >> 0])) >>> 1 | o << 7) & 255,
                        l[i >> 0] = 20 + (o << 6 | o >>> 2) ^ 131,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 4:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 0 | _[(i = t + r | 0) >> 0],
                        l[i >> 0] = 86 + (o << 3 | o >>> 5) ^ 177,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 5:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (n = 40 + (243 + ((n = 0 | _[(i = t + r | 0) >> 0]) >>> 2 | n << 6) ^ 130) & 255) << 2 & 252,
                        l[i >> 0] = (o | n >>> 6) << 3 | o >>> 5,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 6:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (n = 138 + (0 | _[(i = t + r | 0) >> 0]) | 0) << 3 & 248,
                        l[i >> 0] = 205 + (88 ^ ((n >>> 5 & 7 | o) << 1 | o >>> 7)),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 7:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (n = 196 + (182 + (0 | _[(i = t + r | 0) >> 0]) ^ 108) & 255) << 2 & 252,
                        l[i >> 0] = (o | n >>> 6) << 2 | o >>> 6,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 8:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 145 + ((o = 129 + (0 | _[(i = t + r | 0) >> 0]) | 0) >>> 5 & 7 | o << 3) & 255,
                        l[i >> 0] = 175 ^ (o << 5 | o >>> 3),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 9:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; n = (n = 1 + (21 ^ ((n = 0 | _[(i = t + r | 0) >> 0]) >>> 6 | n << 2)) & 255) << 6 & 192 | (o = n >>> 2),
                        l[i >> 0] = 44 + (178 ^ (n >>> 4 | o << 4)) ^ 247,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 10:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 28 + (19 ^ ((n = (n = 0 | _[(i = t + r | 0) >> 0]) << 4 & 240 | (o = n >>> 4)) >>> 1 | o << 7)) & 255,
                        l[i >> 0] = 63 + (o >>> 7 | o << 1),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 11:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; l[(i = t + r | 0) >> 0] = 128 + (99 + (0 | l[i >> 0]) & 255) ^ 144,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 12:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 62 + ((o = 131 ^ ((o = 0 | _[(i = t + r | 0) >> 0]) >>> 6 | o << 2 & 252)) << 7 | o >>> 1) & 255,
                        l[i >> 0] = 12 + (o << 2 | o >>> 6),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 13:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (-124 ^ l[(i = t + r | 0) >> 0]) - 49 & 255,
                        l[i >> 0] = o >>> 3 | o << 5,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 14:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    r = 0;
                    do {
                        var a = -26 ^ l[(i = t + r | 0) >> 0];
                        n = 125 + (255 & a) | 0,
                            n = ((a = ((a = a + 125 & 255) >>> 7 | a << 1) << 2 & 252) | n >>> 5 & 3) << 3 & 248 | (o = a >>> 5),
                            l[i >> 0] = n >>> 1 | o << 7,
                            r = r + 1 | 0;
                    } while ((0 | r) != (0 | e));
                    break;
                case 15:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 212 + (18 ^ ((i = 0 | _[(a = t + r | 0) >> 0]) >>> 5 | i << 3)) & 255,
                        l[a >> 0] = i << 2 | i >>> 6,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 16:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 3 + (255 & (i = 0 | l[(a = t + r | 0) >> 0])) | 0,
                        i = 218 + (((i = ((i = i + -109 & 255) << 5 | i >>> 3) << 1 & 254) | o >>> 2 & 1) << 4 | i >>> 4) & 255,
                        l[a >> 0] = 223 ^ (i >>> 1 | i << 7),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 17:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 21 + (108 ^ ((o = (o = 0 | _[(a = t + r | 0) >> 0]) << 7 & 128 | (i = o >>> 1)) >>> 6 | i << 2)) & 255,
                        l[a >> 0] = i << 6 | i >>> 2,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 18:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (o = 102 + (0 | _[(a = t + r | 0) >> 0]) | 0) << 3 & 248,
                        l[a >> 0] = 55 + (19 + ((i | o >>> 5 & 7) << 3 | i >>> 5) ^ 245),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 19:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 105 + ((i = 0 | _[(a = t + r | 0) >> 0]) << 3 | i >>> 5) & 255,
                        l[a >> 0] = 13 + (i >>> 5 | i << 3) ^ 56,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 20:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 58 + (((i = (o = 241 + ((o = 0 | _[(a = t + r | 0) >> 0]) << 7 | o >>> 1) & 255) << 3 & 248) | o >>> 5) << 2 | i >>> 6) & 255 ^ 168,
                        l[a >> 0] = 234 + (i << 4 | i >>> 4) ^ 22,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 21:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (o = 95 + (3 + ((o = 0 | _[(a = t + r | 0) >> 0]) << 2 | o >>> 6) ^ 201) & 255) << 1 & 254,
                        l[a >> 0] = 155 + ((i | o >>> 7) << 2 | i >>> 6),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 22:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = ((i = 36 + (-48 ^ l[(a = t + r | 0) >> 0]) & 255) << 2 | i >>> 6) << 5 & 224 | (o = i >>> 1 & 31),
                        l[a >> 0] = 189 + (o << 7 | i >>> 1),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 23:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (52 + (0 | l[(a = t + r | 0) >> 0]) << 24 >> 24 ^ 52) - 60 & 255,
                        l[a >> 0] = i >>> 3 | i << 5,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 24:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 228 ^ ((i = 40 + (0 | l[(a = t + r | 0) >> 0]) & 255) >>> 5 | i << 3 & 248),
                        l[a >> 0] = i << 3 | i >>> 5,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 25:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (o = 89 + ((o = 185 + (12 ^ ((o = 0 | _[(a = t + r | 0) >> 0]) << 7 | o >>> 1)) & 255) >>> 3 | o << 5) & 255) << 2 & 252,
                        l[a >> 0] = (i | o >>> 6) << 4 | i >>> 4,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 26:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 17 + ((i = 255 & ((0 | l[(a = t + r | 0) >> 0]) - 14 << 24 >> 24 ^ -88)) >>> 6 | i << 2) & 255,
                        l[a >> 0] = i << 5 | i >>> 3,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 27:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 8 + (65 ^ ((i = 84 + (0 | _[(a = t + r | 0) >> 0]) | 0) >>> 4 & 15 | i << 4)) & 255,
                        l[a >> 0] = 60 + (i >>> 5 | i << 3),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 28:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 129 + (179 ^ ((o = (o = 0 | _[(a = t + r | 0) >> 0]) << 7 & 128 | (i = o >>> 1)) >>> 2 | i << 6)) & 255,
                        l[a >> 0] = 253 + (145 + (i << 3 | i >>> 5) ^ 18),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 29:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 52 + (44 ^ l[(a = t + r | 0) >> 0]) & 255,
                        l[a >> 0] = i >>> 4 | i << 4,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 30:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 93 + (136 ^ ((i = 131 + ((i = 148 + ((i = 0 | _[(a = t + r | 0) >> 0]) >>> 4 | i << 4) & 255) >>> 5 | i << 3) & 255) >>> 5 | i << 3)) & 255 ^ 237,
                        l[a >> 0] = i << 2 | i >>> 6,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 31:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 172 + ((i = 161 + (11 + ((i = 45 + (0 | _[(a = t + r | 0) >> 0]) | 0) >>> 3 & 31 | i << 5) ^ 251) & 255) << 6 | i >>> 2) & 255,
                        l[a >> 0] = i << 1 | i >>> 7,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 32:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 151 + ((i = 5 + ((i = 18 + (0 | _[(a = t + r | 0) >> 0]) | 0) >>> 4 & 15 | i << 4) & 255 ^ 125) << 2 | i >>> 6) & 255,
                        l[a >> 0] = i << 2 | i >>> 6,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 33:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (o = 8 + (0 | l[(a = t + r | 0) >> 0]) & 255) << 6 & 192 | (i = o >>> 2),
                        l[a >> 0] = 228 ^ (o >>> 5 | i << 3),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 34:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (i = 226 + (112 + ((i = 0 | _[(a = t + r | 0) >> 0]) << 4 | i >>> 4) ^ 165) & 255) << 5 & 224 | (o = i >>> 3),
                        o = (i >>>= 1) | o << 7 & 128,
                        l[a >> 0] = o >>> 3 | i << 5,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 35:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (o = 167 + (198 + (0 | _[(a = t + r | 0) >> 0]) ^ 222) & 255 ^ 139) << 6 & 192 | (i = o >>> 2),
                        l[a >> 0] = 176 + (o >>> 5 | i << 3),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 36:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 143 + ((i = 84 + (0 | _[(a = t + r | 0) >> 0]) | 0) >>> 1 & 127 | i << 7) & 255,
                        l[a >> 0] = 171 + (89 ^ (i << 3 | i >>> 5)),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 37:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 216 + (209 ^ ((i = 0 | _[(a = t + r | 0) >> 0]) << 5 | i >>> 3)) & 255,
                        l[a >> 0] = i >>> 7 | i << 1,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 38:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 245 + ((i = 229 + (0 | _[(a = t + r | 0) >> 0]) | 0) >>> 2 & 63 | i << 6) & 255 ^ 193,
                        l[a >> 0] = 204 + (187 + (i >>> 7 | i << 1) ^ 209) ^ 212,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 39:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = ((i = 169 + (0 | _[(a = t + r | 0) >> 0]) | 0) >>> 6 & 3 | (o = i << 2 & 252)) << 1 & 254,
                        l[a >> 0] = 124 + (132 ^ ((i | o >>> 7) << 4 | i >>> 4)),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 40:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (o = 131 + (159 + ((i = (i = 0 | _[(a = t + r | 0) >> 0]) << 4 & 240 | (o = i >>> 4)) >>> 3 | o << 5) ^ 212) & 255) << 6 & 192 | (i = o >>> 2),
                        l[a >> 0] = o >>> 4 | i << 4,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 41:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (o = 26 + ((o = 209 + (243 + ((o = 0 | _[(a = t + r | 0) >> 0]) << 4 | o >>> 4) ^ 165) & 255) << 3 | o >>> 5) & 255) << 4 & 240,
                        l[a >> 0] = (i | o >>> 4) << 2 | i >>> 6,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 42:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 185 + (211 + ((o = (o = 38 + (255 & (21 ^ l[(a = t + r | 0) >> 0])) | 0) << 7 & 128 | (i = o >>> 1 & 127)) >>> 5 | i << 3) ^ 129) & 255,
                        l[a >> 0] = 30 ^ (i >>> 2 | i << 6),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 43:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 245 + ((i = 8 + ((i = 27 + (-12 ^ l[(a = t + r | 0) >> 0]) & 255) >>> 1 | i << 7) & 255) << 6 | i >>> 2) & 255,
                        l[a >> 0] = i << 7 | i >>> 1,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 44:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (i = 0 | _[(a = t + r | 0) >> 0]) << 5 & 224 | (o = i >>> 3),
                        i = 168 + ((o = (i >>>= 2) | o << 6 & 192) >>> 2 | i << 6) & 255,
                        l[a >> 0] = 243 + (i << 1 | i >>> 7) ^ 18,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 45:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (o = 3 + (216 + ((o = 0 | _[(a = t + r | 0) >> 0]) << 1 | o >>> 7) ^ 40) & 255) << 6 & 192 | (i = o >>> 2),
                        l[a >> 0] = o >>> 2 | i << 6,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 46:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 30 + (169 + ((i = 0 | _[(a = t + r | 0) >> 0]) << 1 | i >>> 7) ^ 247) & 255,
                        l[a >> 0] = 121 + (i >>> 3 | i << 5) ^ 55,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 47:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (i = 255 & (112 + (0 | l[(a = t + r | 0) >> 0]) << 24 >> 24 ^ 32)) << 7 & 128 | (o = i >>> 1),
                        o = (i >>>= 2) | o << 6 & 192,
                        l[a >> 0] = o >>> 4 | i << 4,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                default:
                    if (n = 65535 & r,
                        r = 0 != r << 16 >> 16,
                        48 == e << 24 >> 24) {
                        if (r)
                            for (r = 0; i = (o = 0 | _[(a = t + r | 0) >> 0]) << 1 & 254,
                                l[a >> 0] = 206 + ((i | o >>> 7) << 3 | i >>> 5) ^ 144,
                                (0 | (r = r + 1 | 0)) != (0 | n);)
                                ;
                    }
                    else if (r)
                        for (r = 0; o = (i = (o = 119 + (0 | l[(a = t + r | 0) >> 0]) & 255) >>> 5) | o << 3 & 248,
                            l[a >> 0] = 29 ^ (o >>> 1 | i << 7),
                            (0 | (r = r + 1 | 0)) != (0 | n);)
                            ;
            }
        }
        function Cr(e, t, r) {
            switch (t |= 0,
                r |= 0,
                (e |= 0) << 24 >> 24) {
                case 0:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    r = 0;
                    do {
                        var n = t + r | 0, o = 0 | _[n >> 0];
                        o = 97 + (o >>> 1 | o << 7) & 255,
                            l[n >> 0] = 209 + (o << 7 | o >>> 1) ^ 247,
                            r = r + 1 | 0;
                    } while ((0 | r) != (0 | e));
                    break;
                case 1:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; n = 63 + (33 ^ ((n = 95 + (0 | l[(o = t + r | 0) >> 0]) & 255) >>> 7 | n << 1)) & 255,
                        l[o >> 0] = 228 ^ (n << 6 | n >>> 2),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 2:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    r = 0;
                    do {
                        var i = (0 | l[(o = t + r | 0) >> 0]) - 82 & 255;
                        i = (i = 130 ^ (i >>> 5 | i << 3 & 248)) << 6 & 192 | (n = i >>> 2),
                            l[o >> 0] = 187 + (i >>> 2 | n << 6),
                            r = r + 1 | 0;
                    } while ((0 | r) != (0 | e));
                    break;
                case 3:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 9 + ((o = (-125 ^ l[(i = t + r | 0) >> 0]) - 20 & 255) << 2 | o >>> 6) & 255,
                        l[i >> 0] = 244 ^ (o >>> 7 | o << 1),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 4:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (n = (-79 ^ l[(i = t + r | 0) >> 0]) - 86 & 255) << 5,
                        l[i >> 0] = 32 & o | n >>> 3 | 192 & o,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 5:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 13 + (216 + ((n = (n = 0 | _[(i = t + r | 0) >> 0]) << 5 & 224 | (o = n >>> 3)) >>> 2 | o << 6) ^ 130) & 255,
                        l[i >> 0] = o >>> 6 | o << 2,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 6:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 44 ^ ((o = 51 + (0 | l[(i = t + r | 0) >> 0]) & 255) >>> 1 | o << 7 & 128),
                        l[i >> 0] = 118 + (o << 5 | o >>> 3),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 7:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; n = (n = 0 | _[(i = t + r | 0) >> 0]) << 6 & 192 | (o = n >>> 2),
                        l[i >> 0] = 74 + (60 + (n >>> 2 | o << 6) ^ 108),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 8:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 111 + ((o = 255 & (-81 ^ l[(i = t + r | 0) >> 0])) << 3 | o >>> 5) & 255,
                        l[i >> 0] = 127 + (o >>> 3 | o << 5),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 9:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 255 + (((o = (n = 255 & ((-9 ^ l[(i = t + r | 0) >> 0]) - 44 << 24 >> 24 ^ -78)) << 4 & 240) | n >>> 4) << 2 | o >>> 6) & 255 ^ 21,
                        l[i >> 0] = o >>> 2 | o << 6,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 10:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 38 ^ ((o = 228 + ((o = (0 | l[(i = t + r | 0) >> 0]) - 63 & 255) >>> 1 | o << 7) & 255) >>> 7 | o << 1 & 254),
                        l[i >> 0] = o << 4 | o >>> 4,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 11:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; l[(i = t + r | 0) >> 0] = 157 + (255 & (16 ^ l[i >> 0])),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 12:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 87 ^ ((o = 194 + ((o = (0 | l[(i = t + r | 0) >> 0]) - 12 & 255) << 6 | o >>> 2) & 255) << 1 & 254 | o >>> 7),
                        l[i >> 0] = 53 ^ (o >>> 2 | o << 6),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 13:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 0 | _[(i = t + r | 0) >> 0],
                        l[i >> 0] = 49 + (o >>> 5 | o << 3) ^ 132,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 14:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = ((o = 0 | _[(i = t + r | 0) >> 0]) << 1 | o >>> 7) << 5 & 224 | 28 & (n = o >>> 2),
                        l[i >> 0] = 131 + (o >>> 3 | n << 5 & 96 | o << 5) ^ 230,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 15:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 44 + ((o = 0 | _[(i = t + r | 0) >> 0]) << 6 | o >>> 2) & 255 ^ 18,
                        l[i >> 0] = o >>> 3 | o << 5,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 16:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (o = 38 + ((o = 255 & (-33 ^ l[(i = t + r | 0) >> 0])) >>> 7 | o << 1) & 255) << 4 & 240 | (n = o >>> 4),
                        n = (o >>>= 1) | n << 7 & 128,
                        l[i >> 0] = 109 + (n >>> 5 | o << 3),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 17:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = (n = 235 + ((n = 0 | _[(i = t + r | 0) >> 0]) << 2 | n >>> 6) & 255) << 6 & 192,
                        l[i >> 0] = 54 ^ ((n >>> 2 | o) << 1 | o >>> 7),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 18:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; n = (n = 237 + (201 + (0 | _[(i = t + r | 0) >> 0]) ^ 245) & 255) << 5 & 224 | (o = n >>> 3),
                        l[i >> 0] = 154 + (n >>> 3 | o << 5),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 19:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 151 + ((o = (56 ^ l[(i = t + r | 0) >> 0]) - 13 & 255) >>> 3 | o << 5) & 255,
                        l[i >> 0] = o << 5 | o >>> 3,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 20:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 15 + ((n = (n = 198 + (168 ^ ((n = 22 + (255 & (22 ^ l[(i = t + r | 0) >> 0])) | 0) >>> 4 & 15 | n << 4)) & 255) << 6 & 192 | (o = n >>> 2)) >>> 3 | o << 5) & 255,
                        l[i >> 0] = o << 1 | o >>> 7,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 21:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; o = 253 + (161 + ((n = (o = (n = 101 + (0 | _[(i = t + r | 0) >> 0]) | 0) >>> 2 & 63) | n << 6 & 192) >>> 1 | o << 7) ^ 201) & 255,
                        l[i >> 0] = o << 6 | o >>> 2,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 22:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    r = 0;
                    do {
                        var a = 67 + (0 | _[(i = t + r | 0) >> 0]) | 0;
                        n = (a >>> 7 & 1 | (n = a << 1 & 254)) << 3 & 248 | (o = n >>> 5),
                            l[i >> 0] = 220 + (n >>> 2 | o << 6) ^ 208,
                            r = r + 1 | 0;
                    } while ((0 | r) != (0 | e));
                    break;
                case 23:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 0 | _[(a = t + r | 0) >> 0],
                        l[a >> 0] = 204 + (60 + (i >>> 5 | i << 3) ^ 52),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 24:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 228 ^ ((i = 0 | _[(a = t + r | 0) >> 0]) << 5 & 224 | i >>> 3),
                        l[a >> 0] = 216 + (i >>> 3 | i << 5),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 25:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 71 + ((i = 167 + ((o = (o = 0 | _[(a = t + r | 0) >> 0]) << 4 & 240 | (i = o >>> 4)) >>> 2 | i << 6) & 255) >>> 5 | i << 3) & 255,
                        l[a >> 0] = 24 ^ (i << 1 | i >>> 7),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 26:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 239 + ((i = 0 | _[(a = t + r | 0) >> 0]) << 3 | i >>> 5) & 255,
                        l[a >> 0] = 14 + (168 ^ (i >>> 2 | i << 6)),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 27:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 248 + ((i = (0 | l[(a = t + r | 0) >> 0]) - 60 & 255) >>> 3 | i << 5) & 255 ^ 65,
                        l[a >> 0] = 172 + (i << 4 | i >>> 4),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 28:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (o = 127 + ((o = 111 + (3 + (0 | _[(a = t + r | 0) >> 0]) ^ 18) & 255) << 5 | o >>> 3) & 255 ^ 179) << 2 & 252,
                        l[a >> 0] = (i | o >>> 6) << 1 | i >>> 7,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 29:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 0 | _[(a = t + r | 0) >> 0],
                        l[a >> 0] = 204 + (i >>> 4 | i << 4) ^ 44,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 30:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 108 + ((i = 125 + (17 ^ ((i = 163 + (237 ^ ((i = 0 | _[(a = t + r | 0) >> 0]) << 6 | i >>> 2)) & 255) >>> 3 | i << 5)) & 255) >>> 3 | i << 5) & 255,
                        l[a >> 0] = i >>> 4 | i << 4,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 31:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 245 + (95 + ((i = 84 + ((i = 0 | _[(a = t + r | 0) >> 0]) << 7 | i >>> 1) & 255) << 2 | i >>> 6) ^ 251) & 255,
                        l[a >> 0] = 211 + (i >>> 5 | i << 3),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 32:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 251 + (125 ^ ((i = 105 + ((i = 0 | _[(a = t + r | 0) >> 0]) << 6 | i >>> 2) & 255) << 6 | i >>> 2)) & 255,
                        l[a >> 0] = 238 + (i >>> 4 | i << 4),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 33:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (o = 255 & (-28 ^ l[(a = t + r | 0) >> 0])) << 5 & 224,
                        l[a >> 0] = 248 + ((i | o >>> 3) << 2 | i >>> 6),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 34:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 144 + (30 + (((i = ((o = 0 | _[(a = t + r | 0) >> 0]) >>> 5 | o << 3) << 1 & 254) | o >>> 4 & 1) << 3 | i >>> 5) ^ 165) & 255,
                        l[a >> 0] = i << 4 | i >>> 4,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 35:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (o = 80 + (0 | l[(a = t + r | 0) >> 0]) & 255) << 5 & 224,
                        l[a >> 0] = 58 + (89 + (139 ^ ((i | o >>> 3) << 2 | i >>> 6)) ^ 222),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 36:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 113 + ((i = 255 & (85 + (0 | l[(a = t + r | 0) >> 0]) << 24 >> 24 ^ 89)) << 5 | i >>> 3) & 255,
                        l[a >> 0] = 172 + (i >>> 7 | i << 1),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 37:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 40 + ((i = 0 | _[(a = t + r | 0) >> 0]) >>> 1 | i << 7) & 255 ^ 209,
                        l[a >> 0] = i << 3 | i >>> 5,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 38:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 11 + (193 ^ ((i = 69 + (52 + (255 & (-44 ^ l[(a = t + r | 0) >> 0])) ^ 209) & 255) >>> 1 | i << 7)) & 255,
                        l[a >> 0] = 27 + (i << 2 | i >>> 6),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 39:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (i = 255 & ((0 | l[(a = t + r | 0) >> 0]) - 124 << 24 >> 24 ^ -124)) << 4 & 240 | (o = i >>> 4),
                        o = (i >>>= 1) | o << 7 & 128,
                        l[a >> 0] = 87 + (o >>> 2 | i << 6),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 40:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (o = 97 + (125 + (((o = (i = 0 | _[(a = t + r | 0) >> 0]) << 4 & 240) | i >>> 4) << 2 | o >>> 6) ^ 212) & 255) << 3 & 248,
                        l[a >> 0] = (i | o >>> 5) << 4 | i >>> 4,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 41:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 13 + (47 + ((i = 230 + ((o = (o = 0 | _[(a = t + r | 0) >> 0]) << 6 & 192 | (i = o >>> 2)) >>> 4 | i << 4) & 255) << 5 | i >>> 3) ^ 165) & 255,
                        l[a >> 0] = i << 4 | i >>> 4,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 42:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = (o = 45 + (71 + ((o = 255 & (30 ^ l[(a = t + r | 0) >> 0])) >>> 6 | o << 2) ^ 129) & 255) << 5 & 224,
                        l[a >> 0] = 218 + ((i | o >>> 3) << 1 | i >>> 7) ^ 21,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 43:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 248 + ((i = 11 + ((i = 0 | _[(a = t + r | 0) >> 0]) << 1 | i >>> 7) & 255) << 2 | i >>> 6) & 255,
                        l[a >> 0] = 229 + (i >>> 7 | i << 1) ^ 244,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 44:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = ((i = 255 & (o = 88 + ((o = 13 + (255 & (18 ^ l[(a = t + r | 0) >> 0])) | 0) >>> 1 & 127 | o << 7) | 0)) >>> 6 | i << 2) << 2 & 252,
                        l[a >> 0] = (i | o >>> 4 & 3) << 3 | i >>> 5,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 45:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 40 + (253 + (((i = (o = 0 | _[(a = t + r | 0) >> 0]) << 2 & 252) | o >>> 6) << 2 | i >>> 6) ^ 40) & 255,
                        l[a >> 0] = i << 7 | i >>> 1,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 46:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = 87 + (226 + ((i = (55 ^ l[(a = t + r | 0) >> 0]) - 121 & 255) >>> 5 | i << 3) ^ 247) & 255,
                        l[a >> 0] = i << 7 | i >>> 1,
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                case 47:
                    if (e = 65535 & r,
                        !(r << 16 >> 16))
                        break;
                    for (r = 0; i = ((o = 0 | _[(a = t + r | 0) >> 0]) << 4 | o >>> 4) << 2 & 252,
                        l[a >> 0] = 144 + (32 ^ ((i | o >>> 2 & 3) << 1 | i >>> 7)),
                        (0 | (r = r + 1 | 0)) != (0 | e);)
                        ;
                    break;
                default:
                    if (n = 65535 & r,
                        r = 0 != r << 16 >> 16,
                        48 == e << 24 >> 24) {
                        if (r)
                            for (r = 0; o = (o = 50 + (-112 ^ l[(a = t + r | 0) >> 0]) & 255) << 5 & 224 | (i = o >>> 3),
                                l[a >> 0] = o >>> 1 | i << 7,
                                (0 | (r = r + 1 | 0)) != (0 | n);)
                                ;
                    }
                    else if (r)
                        for (r = 0; i = 58 ^ ((i = 0 | _[(a = t + r | 0) >> 0]) << 1 & 254 | i >>> 7),
                            l[a >> 0] = 137 + (i >>> 3 | i << 5),
                            (0 | (r = r + 1 | 0)) != (0 | n);)
                            ;
            }
        }
        function Vr(e) {
            var r = 0, i = 0, a = 0;
            if (!(e |= 0))
                return 0;
            var u = 8 < e >>> 0 ? e : 8, s = 31 - (0 | z(0 | u)) | 0;
            s = (0 == (0 | u) ? 1 : s) + (1 != (0 | o(0 | e)) & 1) | 0;
            e: do {
                if (3 < s >>> 0 & e >>> 0 < 1 << s >>> 0 && 0 != (0 | (r = 0 | g[4512 + (s + -1 << 2) >> 2]))) {
                    for (u = 0;;) {
                        var f = 0 | g[r + -8 >> 2];
                        if (e >>> 0 <= ((f >>> 1) - 8 | 0) >>> 0)
                            break;
                        if (!((u = u + 1 | 0) >>> 0 < 32 & 0 != (0 | (r = 0 | g[r + 4 >> 2])))) {
                            i = 8;
                            break e;
                        }
                    }
                    s = 0 | t(r, e);
                }
                else
                    i = 8;
            } while (0);
            e: do {
                if (8 == (0 | i)) {
                    t: do {
                        if (s >>> 0 < 32) {
                            for (; r = 0 | g[4512 + (s << 2) >> 2],
                                s = s + 1 | 0,
                                !(0 | r);)
                                if (32 <= s >>> 0)
                                    break t;
                            s = 0 | t(r, e);
                            break e;
                        }
                    } while (0);
                    if (0 | (s = 0 | g[1163]) && 0 == (1 & (a = 0 | g[s >> 2]) | 0)) {
                        if (g[s >> 2] = 1 | a,
                            r = 31 - (0 | z(0 | (u = 8 < (u = (a >>> 1) - 8 | 0) >>> 0 ? u : 8))) | 0,
                            i = s + 8 | 0,
                            r = 4512 + ((0 == (0 | u) ? 1 : r) << 2) | 0,
                            u = s + 12 | 0,
                            (0 | g[r >> 2]) == (0 | i) && (g[r >> 2] = g[u >> 2]),
                            0 | (s = 0 | g[i >> 2]) && (g[s + 4 >> 2] = g[u >> 2]),
                            0 | (s = 0 | g[u >> 2]) && (g[s >> 2] = g[i >> 2]),
                            f = 0 == (0 | n(e)),
                            s = 0 | g[1163],
                            f)
                            return g[s >> 2] &= -2,
                                (f = 0) | f;
                        if (s)
                            break;
                        return (s = 0) | s;
                    }
                    if (-1 == (0 | (r = 0 | c(0 | (i = e + 15 & -8)))))
                        return (f = 0) | f;
                    if ((0 | (u = r)) != (0 | (a = s = u + 7 & -8)) && -1 == (0 | c(s - u | 0)))
                        return (f = 0) | f;
                    (r = 0 | g[1163]) ? g[s + 4 >> 2] = r : g[1162] = a,
                        g[1163] = a,
                        g[s >> 2] = i << 1 | 1;
                }
            } while (0);
            return s + 8 | 0;
        }
        function t(e, t) {
            t |= 0;
            var r = (e |= 0) - 8 | 0, o = 0 | g[r >> 2], a = 31 - (0 | z(0 | (o = 8 < (o = (o >>> 1) - 8 | 0) >>> 0 ? o : 8))) | 0;
            if (a = 4512 + ((0 == (0 | o) ? 1 : a) << 2) | 0,
                o = e + 4 | 0,
                (0 | g[a >> 2]) == (0 | e) && (g[a >> 2] = g[o >> 2]),
                0 | (a = 0 | g[e >> 2]) && (g[a + 4 >> 2] = g[o >> 2]),
                0 | (a = 0 | g[o >> 2]) && (g[a >> 2] = g[e >> 2]),
                o = 0 | g[r >> 2],
                g[r >> 2] = 1 | o,
                a = (o >>>= 1) + (-8 - t) | 0,
                (0 | g[1163]) == (0 | r) & 8 == (-8 & a | 0)) {
                if (!(0 | n(o)))
                    return 0 | r;
                a = a + 8 | 0;
            }
            return a >>> 0 <= 15 || (a = 0 | g[r >> 2],
                t = o = e = e + t + 7 & -8,
                g[r >> 2] = 1 & a | e - r << 1,
                e = r + (a >>> 1) - e | 0,
                g[t >> 2] = e << 1 | 1 & g[t >> 2],
                g[t + 4 >> 2] = r,
                g[((0 | g[1163]) == (0 | r) ? 4652 : o + (2147483647 & e) + 4 | 0) >> 2] = o,
                i(t)),
                0 | r;
        }
        function n(e) {
            var t = 0 | g[g[1163] >> 2];
            if (-1 == (0 | c(0 | (t = (15 + (0 | e) & -8) - (t >>> 1) | 0))))
                return 0;
            var r = 0 | g[1163];
            if (!(1 & (e = 0 | g[r >> 2]))) {
                var n = (e >>> 1) - 8 | 0;
                e = 31 - (0 | z(0 | (n = 8 < n >>> 0 ? n : 8))) | 0;
                var o = r + 8 | 0;
                e = 4512 + ((0 == (0 | n) ? 1 : e) << 2) | 0,
                    n = r + 12 | 0,
                    (0 | g[e >> 2]) == (0 | o) && (g[e >> 2] = g[n >> 2]),
                    0 | (e = 0 | g[o >> 2]) && (g[e + 4 >> 2] = g[n >> 2]),
                    0 | (e = 0 | g[n >> 2]) && (g[e >> 2] = g[o >> 2]);
            }
            return e = (0 | g[r >> 2]) + (t << 1) | 0,
                1 & (g[r >> 2] = e) | 0 ? 1 : (t = 31 - (0 | z(0 | (n = 8 < (n = (e >>> 1) - 8 | 0) >>> 0 ? n : 8))) | 0,
                    e = r + 8 | 0,
                    n = 0 | g[(t = 4512 + ((0 == (0 | n) ? 1 : t) << 2) | 0) >> 2],
                    g[t >> 2] = e,
                    g[e >> 2] = 0,
                    (g[r + 12 >> 2] = n) && (g[n >> 2] = e),
                    1);
        }
        function i(e) {
            var t = 0, r = 0, n = 0, o = 0 | g[(e |= 0) >> 2];
            g[e >> 2] = -2 & o;
            var i = 0 | g[e + 4 >> 2], a = 0 | g[1163], u = (0 | a) == (0 | e), c = e + (o >>>= 1) | 0, s = u ? 0 : c;
            if (c = u ? 0 : c,
                0 | i && 0 == (1 & (t = 0 | g[i >> 2]) | 0)) {
                t = 31 - (0 | z(0 | (u = 8 < (u = (t >>> 1) - 8 | 0) >>> 0 ? u : 8))) | 0;
                var f = i + 8 | 0;
                t = 4512 + ((0 == (0 | u) ? 1 : t) << 2) | 0,
                    u = i + 12 | 0,
                    (0 | g[t >> 2]) == (0 | f) && (g[t >> 2] = g[u >> 2]),
                    0 | (t = 0 | g[f >> 2]) && (g[t + 4 >> 2] = g[u >> 2]),
                    0 | (t = 0 | g[u >> 2]) && (g[t >> 2] = g[f >> 2]),
                    g[i >> 2] = (0 | g[i >> 2]) + (-2 & g[e >> 2]),
                    c ? (g[c + 4 >> 2] = i,
                        1 & (t = 0 | g[c >> 2]) || (t = 31 - (0 | z(0 | (o = 8 < (o = (t >>> 1) - 8 | 0) >>> 0 ? o : 8))) | 0,
                            r = c + 8 | 0,
                            t = 4512 + ((0 == (0 | o) ? 1 : t) << 2) | 0,
                            o = c + 12 | 0,
                            (0 | g[t >> 2]) == (0 | r) && (g[t >> 2] = g[o >> 2]),
                            0 | (t = 0 | g[r >> 2]) && (g[t + 4 >> 2] = g[o >> 2]),
                            (t = 0 | g[o >> 2]) && (g[t >> 2] = g[r >> 2],
                                a = 0 | g[1163]),
                            g[i >> 2] = (0 | g[i >> 2]) + (-2 & g[c >> 2]),
                            t = (0 | c) == (0 | a) ? 4652 : s + ((t = 0 | g[c >> 2]) >>> 1) + 4 | 0,
                            n = 19)) : (t = 4652,
                        n = 19),
                    19 == (0 | n) && (g[t >> 2] = i),
                    t = 0 | g[i >> 2],
                    c = 31 - (0 | z(0 | (t = 8 < (t = (t >>> 1) - 8 | 0) >>> 0 ? t : 8))) | 0,
                    t = 0 | g[(c = 4512 + ((0 == (0 | t) ? 1 : c) << 2) | 0) >> 2],
                    g[c >> 2] = f,
                    g[f >> 2] = 0,
                    (g[u >> 2] = t) && (g[t >> 2] = f);
            }
            else
                a = 0 | c && 0 == (1 & (r = 0 | g[c >> 2]) | 0) ? (t = 31 - (0 | z(0 | (o = 8 < (o = (r >>> 1) - 8 | 0) >>> 0 ? o : 8))) | 0,
                    r = c + 8 | 0,
                    t = 4512 + ((0 == (0 | o) ? 1 : t) << 2) | 0,
                    o = c + 12 | 0,
                    (0 | g[t >> 2]) == (0 | r) && (g[t >> 2] = g[o >> 2]),
                    0 | (t = 0 | g[r >> 2]) && (g[t + 4 >> 2] = g[o >> 2]),
                    (t = 0 | g[o >> 2]) && (g[t >> 2] = g[r >> 2],
                        a = 0 | g[1163]),
                    t = (0 | g[e >> 2]) + (-2 & g[c >> 2]) | 0,
                    g[e >> 2] = t,
                    (0 | c) == (0 | a) ? g[1163] = e : (t = 0 | g[c >> 2],
                        g[s + (t >>> 1) + 4 >> 2] = e,
                        t = 0 | g[e >> 2]),
                    (t >>> 1) - 8 | 0) : o + -8 | 0,
                    c = 31 - (0 | z(0 | (a = 8 < a >>> 0 ? a : 8))) | 0,
                    t = e + 8 | 0,
                    a = 0 | g[(c = 4512 + ((0 == (0 | a) ? 1 : c) << 2) | 0) >> 2],
                    g[c >> 2] = t,
                    g[t >> 2] = 0,
                    (g[e + 12 >> 2] = a) && (g[a >> 2] = t);
        }
        function Qr(e) {
            (e |= 0) && i(e + -8 | 0);
        }
        function T(e, t) {
            var r = 0 | a(0 | (e |= 0));
            return 0 | (0 == (0 | t) ? e : r);
        }
        function Er(e) {
            var t, r = 0, n = e |= 0;
            e: do {
                if (3 & n)
                    for (t = n;;) {
                        if (!(0 | l[e >> 0])) {
                            e = t;
                            break e;
                        }
                        if (!(3 & (t = e = e + 1 | 0))) {
                            r = 5;
                            break;
                        }
                    }
                else
                    r = 5;
            } while (0);
            if (5 == (0 | r)) {
                for (; !((-2139062144 & (t = 0 | g[e >> 2]) ^ -2139062144) & t + -16843009);)
                    e = e + 4 | 0;
                if ((255 & t) << 24 >> 24)
                    for (; 0 != (0 | l[(e = e + 1 | 0) >> 0]);)
                        ;
            }
            return e - n | 0;
        }
        function O(e) {
            return ((0 | e) - 48 | 0) >>> 0 < 10 | 0;
        }
        function L(e, t) {
            return 0 | ((e |= 0) ? (t |= 0,
                0 | (e = (e |= 0) ? t >>> 0 < 128 ? (l[e >> 0] = t,
                    1) : 0 | g[1174] ? t >>> 0 < 2048 ? (l[e >> 0] = t >>> 6 | 192,
                    l[e + 1 >> 0] = 63 & t | 128,
                    2) : t >>> 0 < 55296 | 57344 == (-8192 & t | 0) ? (l[e >> 0] = t >>> 12 | 224,
                    l[e + 1 >> 0] = t >>> 6 & 63 | 128,
                    l[e + 2 >> 0] = 63 & t | 128,
                    3) : (t + -65536 | 0) >>> 0 < 1048576 ? (l[e >> 0] = t >>> 18 | 240,
                    l[e + 1 >> 0] = t >>> 12 & 63 | 128,
                    l[e + 2 >> 0] = t >>> 6 & 63 | 128,
                    l[e + 3 >> 0] = 63 & t | 128,
                    4) : (g[1180] = 84,
                    -1) : 57216 == (-128 & t | 0) ? (l[e >> 0] = t,
                    1) : (g[1180] = 84,
                    -1) : 1)) : 0);
        }
        function Sr(e, t, r, n) {
            var o = M;
            M = M + 16 | 0,
                g[o >> 2] = 0 | n;
            var i = 0 | e, a = 0 | t, u = 0, c = 0;
            e = t = 0;
            var s = 0;
            M = (n = M) + 128 | 0;
            for (var f = n + 124 | 0, p = n, d = 3216, b = p + 124 | 0; g[p >> 2] = g[d >> 2],
                d = d + 4 | 0,
                (0 | (p = p + 4 | 0)) < (0 | b);)
                ;
            if (2147483646 < (a + -1 | 0) >>> 0 ? a ? g[1180] = 75 : (u = f,
                c = 1,
                s = 4) : (u = i,
                c = a,
                s = 4),
                b = 4 == (0 | s)) {
                b = (b = -2 - u | 0) >>> 0 < c >>> 0 ? b : c,
                    g[n + 48 >> 2] = b,
                    g[(t = n + 20 | 0) >> 2] = u,
                    d = (g[n + 44 >> 2] = u) + b | 0,
                    g[(e = n + 16 | 0) >> 2] = d,
                    g[n + 28 >> 2] = d,
                    i = 0 | r,
                    r = 0 | n,
                    i |= 0;
                var h = M;
                M = M + 224 | 0;
                var v = h + 208 | 0, A = h + 160 | 0, m = h + 80 | 0, _ = h;
                for (a = (c = A) + 40 | 0; ((g[c >> 2] = 0) | (c = c + 4 | 0)) < (0 | a);)
                    ;
                if (g[v >> 2] = g[(0 | o) >> 2],
                    (0 | y(0, i, v, m, A)) < 0)
                    u = -1;
                else {
                    var w = 32 & (u = 0 | g[r >> 2]);
                    (0 | l[r + 74 >> 0]) < 1 && (g[r >> 2] = -33 & u),
                        0 | g[(c = r + 48 | 0) >> 2] ? u = 0 | y(r, i, v, m, A) : (f = 0 | g[(a = r + 44 | 0) >> 2],
                            g[a >> 2] = _,
                            g[(p = r + 28 | 0) >> 2] = _,
                            g[(s = r + 20 | 0) >> 2] = _,
                            g[c >> 2] = 80,
                            g[(d = r + 16 | 0) >> 2] = _ + 80,
                            u = 0 | y(r, i, v, m, A),
                            f && (re[1 & g[r + 36 >> 2]](r, 0, 0),
                                u = 0 == (0 | g[s >> 2]) ? -1 : u,
                                g[a >> 2] = f,
                                g[c >> 2] = 0,
                                g[d >> 2] = 0,
                                g[p >> 2] = 0,
                                g[s >> 2] = 0)),
                        _ = 0 | g[r >> 2],
                        g[r >> 2] = _ | w,
                        u = 0 == (32 & _ | 0) ? u : -1;
                }
                M = h,
                    b |= 0;
            }
            b && (b = 0 | g[t >> 2],
                l[b + (((0 | b) == (0 | g[e >> 2])) << 31 >> 31) >> 0] = 0),
                M = n,
                M = o;
        }
        function y(e, t, r, n, o) {
            e |= 0,
                r |= 0,
                n |= 0,
                o |= 0;
            var i, a = 0, u = M;
            M = M + 64 | 0;
            var c = u + 56 | 0, s = u + 40 | 0, f = u, p = u + 48 | 0, d = u + 60 | 0;
            g[c >> 2] = 0 | t;
            var b = 0 != (0 | e), v = f + 40 | 0;
            f = f + 39 | 0;
            var A = p + 4 | 0, y = t = i = 0;
            e: for (;;) {
                do {
                    -1 < (0 | t) && (t = (2147483647 - t | 0) < (0 | i) ? (g[1180] = 75,
                        -1) : i + t | 0);
                    var m = 0 | g[c >> 2];
                    if (!((i = 0 | l[m >> 0]) << 24 >> 24)) {
                        a = 93;
                        break e;
                    }
                    var w = m;
                    t: for (;;) {
                        switch (i << 24 >> 24) {
                            case 37:
                                a = 10;
                                break t;
                            case 0:
                                i = w;
                                break t;
                        }
                        var k = w + 1 | 0;
                        g[c >> 2] = k,
                            i = 0 | l[k >> 0],
                            w = k;
                    }
                    t: do {
                        if (10 == (0 | a)) {
                            a = 0,
                                i = w;
                            do {
                                if (37 != (0 | l[w + 1 >> 0]))
                                    break t;
                                i = i + 1 | 0,
                                    w = w + 2 | 0,
                                    g[c >> 2] = w;
                            } while (37 == (0 | l[w >> 0]));
                        }
                    } while (0);
                    i = i - m | 0,
                        b && P(e, m, i);
                } while (0 != (0 | i));
                if (w = 0 | g[c >> 2],
                    0 | O(i = 0 | l[w + 1 >> 0])) {
                    var S = (k = 36 == (0 | l[w + 2 >> 0])) ? i + -48 | 0 : -1, x = k ? 1 : y;
                    i = k ? 3 : 1;
                }
                else
                    S = -1,
                        x = y,
                        i = 1;
                var E = w + i | 0;
                if (g[c >> 2] = E,
                    31 < (w = ((i = 0 | l[E >> 0]) << 24 >> 24) - 32 | 0) >>> 0 | 0 == (1 << w & 75913 | 0)) {
                    y = 0;
                    var R = E;
                }
                else
                    for (y = 0,
                        i = E;;) {
                        if (y |= 1 << w,
                            E = i + 1 | 0,
                            g[c >> 2] = E,
                            31 < (w = ((i = 0 | l[E >> 0]) << 24 >> 24) - 32 | 0) >>> 0 | 0 == (1 << w & 75913 | 0)) {
                            R = E;
                            break;
                        }
                        i = E;
                    }
                if (42 == i << 24 >> 24) {
                    if (0 != (0 | O(i = 0 | l[(w = R + 1 | 0) >> 0])) && 36 == (0 | l[R + 2 >> 0]))
                        g[o + (i + -48 << 2) >> 2] = 10,
                            i = 0 | g[n + ((0 | l[w >> 0]) - 48 << 3) >> 2],
                            E = 1,
                            w = R + 3 | 0;
                    else {
                        if (0 | x) {
                            t = -1;
                            break;
                        }
                        b ? (E = 3 + (0 | g[r >> 2]) & -4,
                            i = 0 | g[E >> 2],
                            g[r >> 2] = E + 4) : i = 0,
                            E = 0;
                    }
                    g[c >> 2] = w;
                    var I = (k = (0 | i) < 0) ? 0 - i | 0 : i;
                    y = k ? 8192 | y : y,
                        k = E;
                }
                else {
                    if ((0 | (i = 0 | j(c))) < 0) {
                        t = -1;
                        break;
                    }
                    I = i,
                        k = x,
                        w = 0 | g[c >> 2];
                }
                if (46 == (0 | l[w >> 0]))
                    if (42 != (0 | l[(i = w + 1 | 0) >> 0]))
                        g[c >> 2] = i,
                            x = 0 | j(c),
                            i = 0 | g[c >> 2];
                    else if (0 | O(i = 0 | l[(E = w + 2 | 0) >> 0]) && 36 == (0 | l[w + 3 >> 0]))
                        g[o + (i + -48 << 2) >> 2] = 10,
                            x = 0 | g[n + ((0 | l[E >> 0]) - 48 << 3) >> 2],
                            i = w + 4 | 0,
                            g[c >> 2] = i;
                    else {
                        if (0 | k) {
                            t = -1;
                            break e;
                        }
                        if (b) {
                            var F = 3 + (0 | g[r >> 2]) & -4;
                            i = 0 | g[F >> 2],
                                g[r >> 2] = F + 4;
                        }
                        else
                            i = 0;
                        x = i,
                            i = g[c >> 2] = E;
                    }
                else
                    x = -1,
                        i = w;
                for (F = 0;;) {
                    if (57 < ((0 | l[i >> 0]) - 65 | 0) >>> 0) {
                        t = -1;
                        break e;
                    }
                    if (w = i + 1 | 0,
                        g[c >> 2] = w,
                        !(((R = 255 & (E = 0 | l[(0 | l[i >> 0]) - 65 + (2736 + (58 * F | 0)) >> 0])) - 1 | 0) >>> 0 < 8))
                        break;
                    F = R,
                        i = w;
                }
                if (!(E << 24 >> 24)) {
                    t = -1;
                    break;
                }
                if (w = -1 < (0 | S),
                    19 == E << 24 >> 24) {
                    if (w) {
                        t = -1;
                        break e;
                    }
                    a = 52;
                }
                else if (w)
                    g[o + (S << 2) >> 2] = R,
                        S = 0 | g[4 + (R = n + (S << 3) | 0) >> 2],
                        g[(a = s) >> 2] = g[R >> 2],
                        g[a + 4 >> 2] = S,
                        a = 52;
                else {
                    if (!b) {
                        t = 0;
                        break e;
                    }
                    D(s, R, r),
                        a = 53;
                }
                52 == (0 | a) && (a = 0,
                    b ? a = 53 : i = 0);
                t: do {
                    if (53 == (0 | a)) {
                        i = (a = 0) != (0 | F) & 3 == (15 & (i = 0 | l[i >> 0]) | 0) ? -33 & i : i,
                            w = -65537 & y,
                            S = 0 == (8192 & y | 0) ? y : w;
                        r: do {
                            switch (0 | i) {
                                case 110:
                                    switch ((255 & F) << 24 >> 24) {
                                        case 0:
                                        case 1:
                                            g[g[s >> 2] >> 2] = t,
                                                i = 0;
                                            break t;
                                        case 2:
                                            i = 0 | g[s >> 2],
                                                g[i >> 2] = t,
                                                g[i + 4 >> 2] = ((0 | t) < 0) << 31 >> 31,
                                                i = 0;
                                            break t;
                                        case 3:
                                            h[g[s >> 2] >> 1] = t,
                                                i = 0;
                                            break t;
                                        case 4:
                                            l[g[s >> 2] >> 0] = t,
                                                i = 0;
                                            break t;
                                        case 6:
                                            g[g[s >> 2] >> 2] = t,
                                                i = 0;
                                            break t;
                                        case 7:
                                            i = 0 | g[s >> 2],
                                                g[i >> 2] = t,
                                                g[i + 4 >> 2] = ((0 | t) < 0) << 31 >> 31,
                                                i = 0;
                                            break t;
                                        default:
                                            i = 0;
                                            break t;
                                    }
                                case 112:
                                    i = 120,
                                        w = 8 < x >>> 0 ? x : 8,
                                        y = 8 | S,
                                        a = 65;
                                    break;
                                case 88:
                                case 120:
                                    w = x,
                                        y = S,
                                        a = 65;
                                    break;
                                case 111:
                                    if (a = i = 0 | g[(w = s) >> 2],
                                        y = w = 0 | g[w + 4 >> 2],
                                        E = v,
                                        E |= 0,
                                        !(0 == (0 | (a |= 0)) & 0 == (0 | (y |= 0))))
                                        for (; l[(E = E + -1 | 0) >> 0] = 7 & a | 48,
                                            !(0 == (0 | (a = 0 | ir(0 | a, 0 | y, 3))) & 0 == (0 | (y = N)));)
                                            ;
                                    R = 0 | E,
                                        E = 3427,
                                        x = (F = 0) == (8 & S | 0) | (0 | (y = v - R | 0)) < (0 | x) ? x : y + 1 | 0,
                                        y = S,
                                        a = 71;
                                    break;
                                case 105:
                                case 100:
                                    i = 0 | g[(w = s) >> 2],
                                        E = (0 | (w = 0 | g[w + 4 >> 2])) < 0 ? (i = 0 | ar(0, 0, 0 | i, 0 | w),
                                            w = N,
                                            g[(y = s) >> 2] = i,
                                            g[y + 4 >> 2] = w,
                                            y = 1,
                                            3427) : (y = 0 != (2049 & S | 0) & 1,
                                            0 == (2048 & S | 0) ? 0 == (1 & S | 0) ? 3427 : 3429 : 3428),
                                        a = 70;
                                    break r;
                                case 117:
                                    E = 3427,
                                        i = (y = 0) | g[(w = s) >> 2],
                                        w = 0 | g[w + 4 >> 2],
                                        a = 70;
                                    break;
                                case 99:
                                    l[f >> 0] = g[s >> 2],
                                        m = f,
                                        F = 0,
                                        E = 3427,
                                        R = 1,
                                        i = v;
                                    break;
                                case 109:
                                    var B = 0 | g[1180];
                                    for (B |= 0,
                                        i = 0;;) {
                                        if ((0 | _[832 + i >> 0]) == (0 | B)) {
                                            a = 4;
                                            break;
                                        }
                                        if (87 == (0 | (i = i + 1 | 0))) {
                                            B = 87,
                                                a = 5;
                                            break;
                                        }
                                    }
                                    if (4 == (0 | a) && (i ? (B = i,
                                        a = 5) : i = 928),
                                        5 == (0 | a)) {
                                        i = 928;
                                        do {
                                            for (; i = (a = i) + 1 | 0,
                                                0 != (0 | l[a >> 0]);)
                                                ;
                                            B = B + -1 | 0;
                                        } while (0 != (0 | B));
                                    }
                                    if (a = 0 | i,
                                        B = 0 | g[1179],
                                        a |= 0,
                                        B |= 0) {
                                        var V;
                                        i = 0 | g[B >> 2];
                                        var U = 0 | g[B + 4 >> 2], G = a;
                                        U |= 0,
                                            G |= 0;
                                        var Z = 0;
                                        B = 1794895138 + (0 | g[(i |= 0) >> 2]) | 0;
                                        var z = 0 | T(0 | g[i + 8 >> 2], B), H = 0 | T(0 | g[i + 12 >> 2], B), Y = 0 | T(0 | g[i + 16 >> 2], B);
                                        n: do {
                                            if (z >>> 0 < U >>> 2 >>> 0 && H >>> 0 < (Z = U - (z << 2) | 0) >>> 0 & Y >>> 0 < Z >>> 0 && 0 == (3 & (Y | H) | 0)) {
                                                Z = H >>> 2;
                                                var J = Y >>> 2;
                                                for (V = 0;;) {
                                                    var X = z >>> 1, Q = V + X | 0, ee = Q << 1;
                                                    if (H = 0 | T(0 | g[i + ((Y = ee + Z | 0) << 2) >> 2], B),
                                                        !((Y = 0 | T(0 | g[i + (Y + 1 << 2) >> 2], B)) >>> 0 < U >>> 0 & H >>> 0 < (U - Y | 0) >>> 0)) {
                                                        H = 0;
                                                        break n;
                                                    }
                                                    if (0 | l[i + (Y + H) >> 0]) {
                                                        H = 0;
                                                        break n;
                                                    }
                                                    H = G,
                                                        Y = i + Y | 0,
                                                        Y |= 0;
                                                    var te = 0 | l[(H |= 0) >> 0], re = 0 | l[Y >> 0];
                                                    if (0 != te << 24 >> 24 && te << 24 >> 24 == re << 24 >> 24)
                                                        for (; Y = Y + 1 | 0,
                                                            te = 0 | l[(H = H + 1 | 0) >> 0],
                                                            re = 0 | l[Y >> 0],
                                                            0 != te << 24 >> 24 && te << 24 >> 24 == re << 24 >> 24;)
                                                            ;
                                                    if (!(H = (255 & te) - (255 & re) | 0))
                                                        break;
                                                    if (H = (0 | H) < 0,
                                                        1 == (0 | z)) {
                                                        H = 0;
                                                        break n;
                                                    }
                                                    V = H ? V : Q,
                                                        z = H ? X : z - X | 0;
                                                }
                                                Y = 0 | T(0 | g[i + ((H = ee + J | 0) << 2) >> 2], B),
                                                    H = (H = 0 | T(0 | g[i + (H + 1 << 2) >> 2], B)) >>> 0 < U >>> 0 & Y >>> 0 < (U - H | 0) >>> 0 && 0 == (0 | l[i + (H + Y) >> 0]) ? i + H | 0 : 0;
                                            }
                                            else
                                                H = 0;
                                        } while (0);
                                        i = 0 | H;
                                    }
                                    else
                                        i = 0;
                                    i = 0 | (0 == (0 | (B = i)) ? a : B),
                                        a = 75;
                                    break;
                                case 115:
                                    i = 0 == (0 | (i = 0 | g[s >> 2])) ? 3437 : i,
                                        a = 75;
                                    break;
                                case 67:
                                    g[p >> 2] = g[s >> 2],
                                        g[A >> 2] = 0,
                                        x = -1,
                                        y = g[s >> 2] = p,
                                        a = 80;
                                    break;
                                case 83:
                                    a = x ? (y = 0 | g[s >> 2],
                                        80) : (q(e, 32, I, 0, S),
                                        i = 0,
                                        90);
                                    break r;
                                case 65:
                                case 71:
                                case 70:
                                case 69:
                                case 97:
                                case 103:
                                case 102:
                                case 101:
                                    var ne;
                                    w = e,
                                        y = i,
                                        w |= 0,
                                        m = +(m = +C[s >> 3]),
                                        I |= 0,
                                        x |= 0,
                                        S |= 0,
                                        y |= 0;
                                    var oe = M;
                                    M = M + 560 | (Y = 0),
                                        F = oe + 32 | 0;
                                    var ie = ne = oe, ae = 12 + (i = oe + 540 | 0) | (g[(U = oe + 536 | 0) >> 2] = 0);
                                    if ($(m),
                                        (0 | (E = N)) < 0) {
                                        $(m = -m);
                                        var ue = 1;
                                        re = 3444,
                                            E = N;
                                    }
                                    else
                                        ue = 0 != (2049 & S | 0) & 1,
                                            re = 0 == (2048 & S | 0) ? 0 == (1 & S | 0) ? 3445 : 3450 : 3447;
                                    do {
                                        if (1 & 2146435072 == (2146435072 & E | 0))
                                            ne = 0 != (32 & y | 0),
                                                q(w, 32, I, E = ue + 3 | 0, -65537 & S),
                                                P(w, re, ue),
                                                P(w, m != m | 0 ? ne ? 3471 : 3475 : ne ? 3463 : 3467, 3);
                                        else {
                                            if ((E = 0 != (Q = 2 * ++rr(+m, 0 | U))) && (g[U >> 2] = (0 | g[U >> 2]) - 1), 97 == (0 | (z = 32 | y))) {
                                                if (X = 0 == (0 | (J = 32 & y)) ? re : re + 9 | 0,
                                                    V = 2 | ue,
                                                    11 < x >>> 0 | 0 == (0 | (E = 12 - x | 0)))
                                                    m = Q;
                                                else {
                                                    for (m = 8; m *= 16,
                                                        0 != (0 | (E = E + -1 | 0));)
                                                        ;
                                                    m = 45 == (0 | l[X >> 0]) ? -(m + (-Q - m)) : Q + m - m;
                                                }
                                                for ((0 | (E = 0 | K(E = (0 | (R = 0 | g[U >> 2])) < 0 ? 0 - R | 0 : R, ((0 | E) < 0) << 31 >> 31, ae))) == (0 | ae) && (l[(E = i + 11 | 0) >> 0] = 48),
                                                    l[E + -1 >> 0] = 43 + (R >> 31 & 2),
                                                    l[(B = E + -2 | 0) >> 0] = y + 15,
                                                    R = (0 | x) < 1,
                                                    F = 0 == (8 & S | 0),
                                                    i = ne; ue = ~~m,
                                                    E = i + 1 | 0,
                                                    l[i >> 0] = J | _[3200 + ue >> 0],
                                                    m = 16 * (m - +(0 | ue)),
                                                    i = 1 != (E - ie | 0) || F & R & 0 == m ? E : (l[E >> 0] = 46,
                                                        i + 2 | 0),
                                                    0 != m;)
                                                    ;
                                                q(w, 32, I, ae = (E = 0 != (0 | x) && (-2 - ie + i | 0) < (0 | x) ? x + 2 + (R = ae) - (F = B) | 0 : (R = ae) - ie - (F = B) + i | 0) + V | 0, S),
                                                    P(w, X, V),
                                                    q(w, 48, I, ae, 65536 ^ S),
                                                    P(w, ne, ie = i - ie | 0),
                                                    q(w, 48, E - (ie + (ne = R - F | 0)) | 0, 0, 0),
                                                    P(w, B, ne),
                                                    q(w, 32, I, ae, 8192 ^ S),
                                                    E = ae;
                                                break;
                                            }
                                            for (R = (0 | x) < 0 ? 6 : x,
                                                E ? (E = (0 | g[U >> 2]) - 28 | 0,
                                                    g[U >> 2] = E,
                                                    m = 268435456 * Q) : (m = Q,
                                                    E = 0 | g[U >> 2]),
                                                F = te = (0 | E) < 0 ? F : F + 288 | 0; H = ~~m >>> 0,
                                                g[F >> 2] = H,
                                                F = F + 4 | 0,
                                                0 != (m = 1e9 * (m - +(H >>> 0)));)
                                                ;
                                            if (H = te,
                                                0 < (0 | E))
                                                for (J = te;;) {
                                                    if (B = (0 | E) < 29 ? E : 29,
                                                        J >>> 0 <= (E = F + -4 | 0) >>> 0) {
                                                        for (i = 0; Z = 0 | Ar(0 | (ee = 0 | Ar(0 | (ee = 0 | br(0 | g[E >> 2], 0, 0 | B)), 0 | N, 0 | i, 0)), 0 | (G = N), 0 | (Z = 0 | er(0 | (i = 0 | fr(0 | ee, 0 | G, 1e9, 0)), 0 | N, -1e9, -1)), 0 | N),
                                                            g[E >> 2] = Z,
                                                            J >>> 0 <= (E = E + -4 | 0) >>> 0;)
                                                            ;
                                                        i = i ? (g[(Z = J + -4 | 0) >> 2] = i,
                                                            Z) : J;
                                                    }
                                                    else
                                                        i = J;
                                                    n: do {
                                                        if (i >>> 0 < F >>> 0)
                                                            for (E = F;;) {
                                                                if (0 | g[(F = E + -4 | 0) >> 2]) {
                                                                    F = E;
                                                                    break n;
                                                                }
                                                                if (!(i >>> 0 < F >>> 0))
                                                                    break;
                                                                E = F;
                                                            }
                                                    } while (0);
                                                    if (E = (0 | g[U >> 2]) - B | 0,
                                                        !(0 < (0 | (g[U >> 2] = E))))
                                                        break;
                                                    J = i;
                                                }
                                            else
                                                i = te;
                                            if ((0 | E) < 0) {
                                                x = 1 + ((R + 25 | 0) / 9 | 0) | 0,
                                                    ee = 102 == (0 | z);
                                                do {
                                                    if (X = (0 | (X = 0 - E | 0)) < 9 ? X : 9,
                                                        i >>> 0 < F >>> 0) {
                                                        for (B = (1 << X) - 1 | 0,
                                                            J = X ? 1e9 >>> X : 1e9,
                                                            V = 0,
                                                            E = i; Z = 0 | g[E >> 2],
                                                            g[E >> 2] = (X ? Z >>> X : Z) + V,
                                                            V = 0 | W(Z & B, J),
                                                            (E = E + 4 | 0) >>> 0 < F >>> 0;)
                                                            ;
                                                        i = 0 == (0 | g[i >> 2]) ? i + 4 | 0 : i,
                                                            V && (g[F >> 2] = V,
                                                                F = F + 4 | 0);
                                                    }
                                                    else
                                                        i = 0 == (0 | g[i >> 2]) ? i + 4 | 0 : i;
                                                    F = (0 | x) < ((Z = F - (E = ee ? te : i) | 0) >> 2 | 0) ? E + (x << 2) | 0 : F,
                                                        E = (0 | g[U >> 2]) + X | 0,
                                                        g[U >> 2] = E;
                                                } while ((0 | E) < 0);
                                            }
                                            if ((ee = i) >>> 0 < F >>> 0) {
                                                if (E = 9 * ((E = H - ee | 0) >> 2) | 0,
                                                    10 <= (B = 0 | g[ee >> 2]) >>> 0)
                                                    for (i = 10; E = E + 1 | 0,
                                                        (i = 10 * i | 0) >>> 0 <= B >>> 0;)
                                                        ;
                                            }
                                            else
                                                E = 0;
                                            if ((0 | (i = R - (102 == (0 | z) ? 0 : E) + (((G = 0 != (0 | R)) & (U = 103 == (0 | z))) << 31 >> 31) | 0)) < ((9 * ((Z = F - H | 0) >> 2) | 0) - 9 | 0)) {
                                                if (x = te + 4 + ((i = (0 | (Z = i + 9216 | 0)) / 9 | 0) - 1024 << 2) | 0,
                                                    (0 | (i = Z + (0 | W(i, -9)) | 0)) < 8)
                                                    for (B = 10; B = 10 * B | 0,
                                                        (0 | i) < 7;)
                                                        i = i + 1 | 0;
                                                else
                                                    B = 10;
                                                if ((V = (x + 4 | 0) == (0 | F)) & 0 == (0 | (J = (J = 0 | g[x >> 2]) - (X = 0 | W(i = (J >>> 0) / (B >>> 0) | 0, B)) | 0)))
                                                    i = x,
                                                        B = ee;
                                                else if (m = 0 == (1 & i | 0) ? 9007199254740992 : 9007199254740994,
                                                    Q = J >>> 0 < (Z = B >>> 1) >>> 0 ? .5 : V & (0 | J) == (0 | Z) ? 1 : 1.5,
                                                    ue && (Q = (Z = 45 == (0 | l[re >> 0])) ? -Q : Q,
                                                        m = Z ? -m : m),
                                                    g[x >> 2] = X,
                                                    m + Q != m) {
                                                    if (Z = X + B | 0,
                                                        999999999 < (g[x >> 2] = Z) >>> 0)
                                                        for (B = x,
                                                            E = ee;;) {
                                                            if ((i = B + -4 | 0) >>> (g[B >> 2] = 0) < E >>> 0 && (g[(E = E + -4 | 0) >> 2] = 0),
                                                                Z = 1 + (0 | g[i >> 2]) | 0,
                                                                !(999999999 < (g[i >> 2] = Z) >>> 0)) {
                                                                B = E;
                                                                break;
                                                            }
                                                            B = i;
                                                        }
                                                    else
                                                        i = x,
                                                            B = ee;
                                                    if (E = 9 * ((E = H - B | 0) >> 2) | 0,
                                                        10 <= (V = 0 | g[B >> 2]) >>> 0)
                                                        for (J = 10; E = E + 1 | 0,
                                                            (J = 10 * J | 0) >>> 0 <= V >>> 0;)
                                                            ;
                                                }
                                                else
                                                    i = x,
                                                        B = ee;
                                                F = (Z = i + 4 | 0) >>> 0 < F >>> 0 ? Z : F;
                                            }
                                            else
                                                B = ee;
                                            x = 0 - E | 0;
                                            n: do {
                                                if (B >>> 0 < F >>> 0)
                                                    for (;;) {
                                                        if (0 | g[(i = F + -4 | 0) >> 2]) {
                                                            Z = F,
                                                                z = 1;
                                                            break n;
                                                        }
                                                        if (!(B >>> 0 < i >>> 0)) {
                                                            Z = i,
                                                                z = 0;
                                                            break;
                                                        }
                                                        F = i;
                                                    }
                                                else
                                                    Z = F,
                                                        z = 0;
                                            } while (0);
                                            if (U) {
                                                if (R = (0 | E) < (0 | (R = R + (1 & (1 ^ G)) | 0)) & -5 < (0 | E) ? (J = y + -1 | 0,
                                                    R + -1 - E | 0) : (J = y + -2 | 0,
                                                    R + -1 | 0),
                                                    !(8 & S)) {
                                                    if (z && 0 != (0 | (Y = 0 | g[Z + -4 >> 2])))
                                                        if ((Y >>> 0) % 10 | 0)
                                                            i = 0;
                                                        else
                                                            for (i = 0,
                                                                F = 10; i = i + 1 | 0,
                                                                !((Y >>> 0) % ((F = 10 * F | 0) >>> 0) | 0);)
                                                                ;
                                                    else
                                                        i = 9;
                                                    F = (9 * ((F = Z - H | 0) >> 2) | 0) - 9 | 0,
                                                        R = (0 | R) < (0 | (y = 0 < (0 | (y = 102 == (32 | J) ? F - i | 0 : F + E - i | 0)) ? y : 0)) ? R : y;
                                                }
                                            }
                                            else
                                                J = y;
                                            if (V = (ee = 0 != (0 | R)) ? 1 : S >>> 3 & 1,
                                                X = 102 == (32 | J))
                                                E = (G = 0) < (0 | E) ? E : 0;
                                            else {
                                                if (((i = ae) - (F = 0 | K(F = (0 | E) < 0 ? x : E, ((0 | F) < 0) << 31 >> 31, ae)) | 0) < 2)
                                                    for (; l[(F = F + -1 | 0) >> 0] = 48,
                                                        (i - F | 0) < 2;)
                                                        ;
                                                l[F + -1 >> 0] = 43 + (E >> 31 & 2),
                                                    l[(E = F + -2 | 0) >> 0] = J,
                                                    E = i - (G = E) | 0;
                                            }
                                            if (q(w, 32, I, E = ue + 1 + R + V + E | 0, S),
                                                P(w, re, ue),
                                                q(w, 48, I, E, 65536 ^ S),
                                                X) {
                                                V = te >>> 0 < B >>> 0 ? te : B,
                                                    B = X = ne + 9 | 0,
                                                    J = ne + 8 | 0,
                                                    i = V;
                                                do {
                                                    if (F = 0 | K(0 | g[i >> 2], 0, X),
                                                        (0 | i) == (0 | V))
                                                        (0 | F) == (0 | X) && (l[J >> 0] = 48,
                                                            F = J);
                                                    else if (ne >>> 0 < F >>> 0)
                                                        for (Ur(0 | ne, 48, F - ie | 0); ne >>> 0 < (F = F + -1 | 0) >>> 0;)
                                                            ;
                                                    P(w, F, B - F | 0),
                                                        i = i + 4 | 0;
                                                } while (i >>> 0 <= te >>> 0);
                                                if (0 == (8 & S | 0) & (1 ^ ee) || P(w, 3479, 1),
                                                    i >>> 0 < Z >>> 0 & 0 < (0 | R))
                                                    for (;;) {
                                                        if (ne >>> 0 < (F = 0 | K(0 | g[i >> 2], 0, X)) >>> 0)
                                                            for (Ur(0 | ne, 48, F - ie | 0); ne >>> 0 < (F = F + -1 | 0) >>> 0;)
                                                                ;
                                                        if (P(w, F, (0 | R) < 9 ? R : 9),
                                                            F = R + -9 | 0,
                                                            !((i = i + 4 | 0) >>> 0 < Z >>> 0 & 9 < (0 | R))) {
                                                            R = F;
                                                            break;
                                                        }
                                                        R = F;
                                                    }
                                                q(w, 48, R + 9 | 0, 9, 0);
                                            }
                                            else {
                                                if (B >>> 0 < (U = z ? Z : B + 4 | 0) >>> 0 & -1 < (0 | R)) {
                                                    ee = 0 == (8 & S | 0),
                                                        z = x = ne + 9 | 0,
                                                        V = 0 - ie | 0,
                                                        X = ne + 8 | 0,
                                                        J = B;
                                                    do {
                                                        if ((0 | (F = 0 | K(0 | g[J >> 2], 0, x))) == (0 | x) && (l[X >> 0] = 48,
                                                            F = X),
                                                            (0 | J) == (0 | B))
                                                            i = F + 1 | 0,
                                                                P(w, F, 1),
                                                                ee & (0 | R) < 1 || P(w, 3479, 1),
                                                                F = i;
                                                        else if (!(F >>> 0 <= ne >>> 0))
                                                            for (Ur(0 | ne, 48, F + V | 0); ne >>> 0 < (F = F + -1 | 0) >>> 0;)
                                                                ;
                                                        P(w, F, (0 | (ie = z - F | 0)) < (0 | R) ? ie : R),
                                                            R = R - ie | 0,
                                                            J = J + 4 | 0;
                                                    } while (J >>> 0 < U >>> 0 & -1 < (0 | R));
                                                }
                                                q(w, 48, R + 18 | 0, 18, 0),
                                                    P(w, G, ae - G | 0);
                                            }
                                        }
                                        q(w, 32, I, E, 8192 ^ S);
                                    } while (0);
                                    M = oe,
                                        i = 0 | ((0 | E) < (0 | I) ? I : E);
                                    break t;
                                default:
                                    F = 0,
                                        E = 3427,
                                        R = x,
                                        w = S,
                                        i = v;
                            }
                        } while (0);
                        r: do {
                            if (65 == (0 | a)) {
                                if (x = m = 0 | g[(S = s) >> 2],
                                    a = S = 0 | g[S + 4 >> 2],
                                    E = v,
                                    R = 32 & i,
                                    E |= 0,
                                    R |= 0,
                                    !(0 == (0 | (x |= 0)) & 0 == (0 | (a |= 0))))
                                    for (; l[(E = E + -1 | 0) >> 0] = 0 | _[3200 + (15 & x) >> 0] | R,
                                        !(0 == (0 | (x = 0 | ir(0 | x, 0 | a, 4))) & 0 == (0 | (a = N)));)
                                        ;
                                R = 0 | E,
                                    F = (E = 0 == (8 & y | 0) | 0 == (0 | m) & 0 == (0 | S)) ? 0 : 2,
                                    E = E ? 3427 : 3427 + (i >>> 4) | 0,
                                    x = w,
                                    i = m,
                                    w = S,
                                    a = 71;
                            }
                            else if (70 == (0 | a))
                                R = 0 | K(i, w, v),
                                    F = y,
                                    y = S,
                                    a = 71;
                            else if (75 == (0 | a)) {
                                S = i,
                                    m = x,
                                    S |= a = 0,
                                    y = (E = 0) != (0 | (m |= 0));
                                n: do {
                                    if (y & 0 != (3 & S | 0))
                                        for (;;) {
                                            if (!(0 | l[S >> 0])) {
                                                m = S;
                                                break n;
                                            }
                                            if (!((y = 0 != (0 | (m = m + -1 | 0))) & 0 != (3 & (S = S + 1 | 0) | 0))) {
                                                E = 5;
                                                break;
                                            }
                                        }
                                    else
                                        E = 5;
                                } while (0);
                                n: do {
                                    if (5 == (0 | E)) {
                                        do {
                                            if (y) {
                                                if (!(0 | l[S >> 0])) {
                                                    if (m) {
                                                        m = S;
                                                        break n;
                                                    }
                                                    break;
                                                }
                                                o: do {
                                                    if (3 < m >>> 0)
                                                        for (;;) {
                                                            if ((-2139062144 & (y = 0 | g[S >> 2]) ^ -2139062144) & y + -16843009 | 0)
                                                                break o;
                                                            if (S = S + 4 | 0,
                                                                (m = m + -4 | 0) >>> 0 <= 3) {
                                                                E = 11;
                                                                break;
                                                            }
                                                        }
                                                    else
                                                        E = 11;
                                                } while (0);
                                                if (11 != (0 | E) || m)
                                                    for (;;) {
                                                        if (!(0 | l[S >> 0])) {
                                                            m = S;
                                                            break n;
                                                        }
                                                        if (!(m = m + -1 | 0))
                                                            break;
                                                        S = S + 1 | 0;
                                                    }
                                            }
                                        } while (0);
                                        m = 0;
                                    }
                                } while (0);
                                S = 0 | m,
                                    m = i,
                                    E = 3427,
                                    R = (y = (F = 0) == (0 | S)) ? x : S - i | 0,
                                    i = y ? i + x | 0 : S;
                            }
                            else if (80 == (0 | a)) {
                                for (R = y,
                                    i = a = 0; w = 0 | g[R >> 2];) {
                                    if ((E = (0 | (w = 0 | L(d, w))) < 0) | (x - i | 0) >>> 0 < w >>> 0) {
                                        a = 84;
                                        break;
                                    }
                                    if (!((i = w + i | 0) >>> 0 < x >>> 0))
                                        break;
                                    R = R + 4 | 0;
                                }
                                if (84 == (0 | a) && (a = 0,
                                    E)) {
                                    t = -1;
                                    break e;
                                }
                                if (q(e, 32, I, i, S),
                                    i)
                                    for (E = 0;;) {
                                        if (!(w = 0 | g[y >> 2])) {
                                            a = 90;
                                            break r;
                                        }
                                        if ((0 | i) < (0 | (E = (w = 0 | L(d, w)) + E | 0))) {
                                            a = 90;
                                            break r;
                                        }
                                        if (P(e, d, w),
                                            i >>> 0 <= E >>> 0) {
                                            a = 90;
                                            break;
                                        }
                                        y = y + 4 | 0;
                                    }
                                else
                                    i = 0,
                                        a = 90;
                            }
                        } while (0);
                        if (71 == (0 | a))
                            i = (a = 0) != (0 | x) | (w = 0 != (0 | i) | 0 != (0 | w)),
                                w = v - R + (1 & (1 ^ w)) | 0,
                                m = i ? R : v,
                                R = i ? (0 | w) < (0 | x) ? x : w : 0,
                                w = -1 < (0 | x) ? -65537 & y : y,
                                i = v;
                        else if (90 == (0 | a)) {
                            a = 0,
                                q(e, 32, I, i, 8192 ^ S),
                                i = (0 | i) < (0 | I) ? I : i;
                            break;
                        }
                        q(e, 32, i = (0 | I) < (0 | (S = (R = (0 | R) < (0 | (x = i - m | 0)) ? x : R) + F | 0)) ? S : I, S, w),
                            P(e, E, F),
                            q(e, 48, i, S, 65536 ^ w),
                            q(e, 48, R, x, 0),
                            P(e, m, x),
                            q(e, 32, i, S, 8192 ^ w);
                    }
                } while (0);
                y = k;
            }
            e: do {
                if (93 == (0 | a) && !e)
                    if (y) {
                        for (t = 1; i = 0 | g[o + (t << 2) >> 2];)
                            if (D(n + (t << 3) | 0, i, r),
                                10 <= (t = t + 1 | 0) >>> 0) {
                                t = 1;
                                break e;
                            }
                        for (w = 0;;) {
                            if (i = t + 1 | 0,
                                0 | w) {
                                t = -1;
                                break e;
                            }
                            if (10 <= i >>> 0) {
                                t = 1;
                                break e;
                            }
                            w = 0 | g[o + ((t = i) << 2) >> 2];
                        }
                    }
                    else
                        t = 0;
            } while (0);
            return M = u,
                0 | t;
        }
        function P(e, t, r) {
            if (!(32 & g[(e |= 0) >> 2])) {
                t |= 0,
                    r |= 0;
                var n, o = 0, i = 16 + (e |= 0) | 0;
                if (n = 0 | g[i >> 2])
                    o = 5;
                else {
                    var a = e, u = 74 + (a |= 0) | 0, c = 0 | l[u >> 0];
                    l[u >> 0] = c + 255 | c,
                        0 | (a = 8 & (u = 0 | g[a >> 2]) ? (g[a >> 2] = 32 | u,
                            -1) : (g[a + 8 >> 2] = 0,
                            c = (g[a + 4 >> 2] = 0) | g[a + 44 >> 2],
                            g[a + 28 >> 2] = c,
                            g[a + 20 >> 2] = c,
                            g[a + 16 >> 2] = c + (0 | g[a + 48 >> 2]),
                            0)) || (n = 0 | g[i >> 2],
                            o = 5);
                }
                e: do {
                    if (5 == (0 | o))
                        if (i = o = 0 | g[(a = e + 20 | 0) >> 2],
                            (n - o | 0) >>> 0 < r >>> 0)
                            re[1 & g[e + 36 >> 2]](e, t, r);
                        else {
                            t: do {
                                if ((0 | l[e + 75 >> 0]) < 0 | 0 == (0 | r))
                                    n = t;
                                else {
                                    for (o = r; 10 != (0 | l[t + (n = o + -1 | 0) >> 0]);) {
                                        if (!n) {
                                            n = t;
                                            break t;
                                        }
                                        o = n;
                                    }
                                    if ((0 | re[1 & g[e + 36 >> 2]](e, t, o)) >>> 0 < o >>> 0)
                                        break e;
                                    n = t + o | 0,
                                        r = r - o | 0,
                                        i = 0 | g[a >> 2];
                                }
                            } while (0);
                            Jr(0 | i, 0 | n, 0 | r),
                                g[a >> 2] = (0 | g[a >> 2]) + r;
                        }
                } while (0);
            }
        }
        function j(e) {
            var t = 0 | g[(e |= 0) >> 2], r = 0 | l[t >> 0];
            if (0 | O(r << 24 >> 24))
                for (var n = 0; n = (10 * n | 0) - 48 + (r << 24 >> 24) | 0,
                    t = t + 1 | 0,
                    g[e >> 2] = t,
                    0 != (0 | O((r = 0 | l[t >> 0]) << 24 >> 24));)
                    ;
            else
                n = 0;
            return 0 | n;
        }
        function D(e, t, r) {
            e |= 0,
                t |= 0,
                r |= 0;
            e: do {
                if (t >>> 0 <= 20)
                    switch (0 | t) {
                        case 9:
                            var n = 3 + (0 | g[r >> 2]) & -4;
                            t = 0 | g[n >> 2],
                                g[r >> 2] = n + 4,
                                g[e >> 2] = t;
                            break e;
                        case 10:
                            n = 3 + (0 | g[r >> 2]) & -4,
                                t = 0 | g[n >> 2],
                                g[r >> 2] = n + 4,
                                g[(n = e) >> 2] = t,
                                g[n + 4 >> 2] = ((0 | t) < 0) << 31 >> 31;
                            break e;
                        case 11:
                            n = 3 + (0 | g[r >> 2]) & -4,
                                t = 0 | g[n >> 2],
                                g[r >> 2] = n + 4,
                                g[(n = e) >> 2] = t,
                                g[n + 4 >> 2] = 0;
                            break e;
                        case 12:
                            t = n = 7 + (0 | g[r >> 2]) & -8;
                            var o = 0 | g[t >> 2];
                            t = 0 | g[t + 4 >> 2],
                                g[r >> 2] = n + 8,
                                g[(n = e) >> 2] = o,
                                g[n + 4 >> 2] = t;
                            break e;
                        case 13:
                            o = 3 + (0 | g[r >> 2]) & -4,
                                n = 0 | g[o >> 2],
                                g[r >> 2] = o + 4,
                                n = (65535 & n) << 16 >> 16,
                                g[(o = e) >> 2] = n,
                                g[o + 4 >> 2] = ((0 | n) < 0) << 31 >> 31;
                            break e;
                        case 14:
                            o = 3 + (0 | g[r >> 2]) & -4,
                                n = 0 | g[o >> 2],
                                g[r >> 2] = o + 4,
                                g[(o = e) >> 2] = 65535 & n,
                                g[o + 4 >> 2] = 0;
                            break e;
                        case 15:
                            o = 3 + (0 | g[r >> 2]) & -4,
                                n = 0 | g[o >> 2],
                                g[r >> 2] = o + 4,
                                n = (255 & n) << 24 >> 24,
                                g[(o = e) >> 2] = n,
                                g[o + 4 >> 2] = ((0 | n) < 0) << 31 >> 31;
                            break e;
                        case 16:
                            o = 3 + (0 | g[r >> 2]) & -4,
                                n = 0 | g[o >> 2],
                                g[r >> 2] = o + 4,
                                g[(o = e) >> 2] = 255 & n,
                                g[o + 4 >> 2] = 0;
                            break e;
                        case 17:
                        case 18:
                            o = 7 + (0 | g[r >> 2]) & -8,
                                t = +C[o >> 3],
                                g[r >> 2] = o + 8,
                                C[e >> 3] = t;
                            break e;
                        default:
                            break e;
                    }
            } while (0);
        }
        function K(e, t, r) {
            if (r |= 0,
                0 < (t |= 0) >>> 0 | 0 == (0 | t) & 4294967295 < (e |= 0) >>> 0)
                do {
                    var n = e, o = t, i = 0 | er(0 | (e = 0 | fr(0 | e, 0 | t, 10, 0)), 0 | (t = N), -10, -1);
                    i = 0 | Ar(0 | n, 0 | o, 0 | i, 0 | N),
                        l[(r = r + -1 | 0) >> 0] = 255 & i | 48;
                } while (9 < o >>> 0 | 9 == (0 | o) & 4294967295 < n >>> 0);
            if (t = e)
                for (; o = 255 & ((i = t) + (0 | W(t = (t >>> 0) / 10 | 0, -10)) | 48),
                    l[(r = r + -1 | 0) >> 0] = o,
                    10 <= i >>> 0;)
                    ;
            return 0 | r;
        }
        function q(e, t, r, n, o) {
            e |= 0;
            var i = M;
            if (M = M + 256 | 0,
                (0 | (n |= 0)) < (0 | (r |= 0)) & 0 == (73728 & (0 | o) | 0)) {
                if (Ur(0 | i, (0 | t) << 24 >> 24 | 0, 0 | ((r = r - n | 0) >>> 0 < 256 ? r : 256)),
                    255 < r >>> 0) {
                    for (n = r; P(e, i, 256),
                        255 < (n = n + -256 | 0) >>> 0;)
                        ;
                    r &= 255;
                }
                P(e, i, r);
            }
            M = i;
        }
        function $(e) {
            return C[I >> 3] = +e,
                e = 0 | g[I >> 2],
                N = 0 | g[I + 4 >> 2],
                0 | e;
        }
        function rr(e, t) {
            e = +e,
                t |= 0,
                C[I >> 3] = e;
            var r = 0 | g[I >> 2], n = 0 | g[I + 4 >> 2], o = 0 | ir(0 | r, 0 | n, 52);
            switch (2047 & o) {
                case 0:
                    r = 0 != e ? (e = +rr(0x10000000000000000 * e, t),
                        (0 | g[t >> 2]) - 64 | 0) : 0,
                        g[t >> 2] = r;
                    break;
                case 2047:
                    break;
                default:
                    g[t >> 2] = (2047 & o) - 1022,
                        g[I >> 2] = r,
                        g[I + 4 >> 2] = -2146435073 & n | 1071644672,
                        e = +C[I >> 3];
            }
            return +e;
        }
        function Z() {
            var e = 4640;
            e = 0 | Ar(0 | (e = 0 | er(0 | g[e >> 2], 0 | g[e + 4 >> 2], 1284865837, 1481765933)), 0 | N, 1, 0);
            var t = N;
            return 0 | ir(0 | (g[1160] = e), 0 | (g[1161] = t), 33);
        }
        function er(e, t, r, n) {
            t |= 0,
                n |= 0;
            var o = 0 | e, i = 0 | r, a = 65535 & (e = 0 | o), u = 65535 & (r = 0 | i), c = 0 | W(u, a), s = e >>> 16;
            return e = (c >>> 16) + (0 | W(u, s)) | 0,
                r = 0 | W(u = r >>> 16, a),
                r = 0 | (N = (e >>> 16) + (0 | W(u, s)) + (((65535 & e) + r | 0) >>> 16) | 0,
                    e + r << 16 | 65535 & c | 0),
                e = N,
                0 | (N = (0 | W(t, i)) + (0 | W(n, o)) + e | 0 & e,
                    0 | r);
        }
        function Ar(e, t, r, n) {
            return 0 | (N = (0 | t) + (0 | n) + ((r = (e |= 0) + (0 | r) >>> 0) >>> 0 < e >>> 0 | 0) >>> 0,
                0 | r);
        }
        function ar(e, t, r, n) {
            return 0 | (N = (0 | t) - (0 | n) - ((e |= 0) >>> 0 < (r |= 0) >>> 0 | 0) >>> 0,
                e - r >>> 0 | 0);
        }
        function v(e) {
            return 0 | ((e |= 0) ? 31 - (0 | z(e ^ e - 1)) | 0 : 32);
        }
        function b(e, t, r, n, o) {
            var i, a;
            o |= 0;
            var u = e |= 0, c = i = t |= 0, s = r |= 0, f = a = n |= 0;
            if (!c) {
                var l = 0 != (0 | o);
                if (f) {
                    if (!l)
                        return 0 | (N = 0);
                    g[o >> 2] = 0 | e,
                        g[o + 4 >> 2] = 0 & t,
                        o = a = 0;
                }
                else
                    l && (g[o >> 2] = (u >>> 0) % (s >>> 0),
                        g[o + 4 >> 2] = 0),
                        o = (u >>> (a = 0)) / (s >>> 0) >>> 0;
                return 0 | (N = a,
                    o);
            }
            l = 0 == (0 | f);
            do {
                if (s) {
                    if (!l) {
                        if ((l = (0 | z(0 | f)) - (0 | z(0 | c)) | 0) >>> 0 <= 31) {
                            var p = l + 1 | 0;
                            e = u >>> ((s = p) >>> 0) & (t = l - 31 >> 31) | c << (f = 31 - l | 0),
                                t &= c >>> (p >>> 0),
                                l = 0,
                                f = u << f;
                            break;
                        }
                        return o ? (g[o >> 2] = 0 | e,
                            g[o + 4 >> 2] = i | 0 & t,
                            o = a = 0) : o = a = 0,
                            0 | (N = a,
                                o);
                    }
                    if ((l = s - 1 | 0) & s | 0) {
                        var d = 64 - (f = 33 + (0 | z(0 | s)) - (0 | z(0 | c)) | 0) | 0, b = f - 32 | 0;
                        e = (p = 32 - f | 0) - 1 >> 31 & c >>> (b >>> 0) | (c << p | u >>> ((s = f) >>> 0)) & (t = b >> 31),
                            t &= c >>> (f >>> 0),
                            l = u << d & (i = p >> 31),
                            f = (c << d | u >>> (b >>> 0)) & i | u << p & f - 33 >> 31;
                        break;
                    }
                    0 | o && (g[o >> 2] = l & u,
                        g[o + 4 >> 2] = 0),
                        d = 1 == (0 | s) ? (b = i | 0 & t,
                            0 | e) : (b = c >>> ((d = 0 | v(0 | s)) >>> 0) | 0,
                            c << 32 - d | u >>> (d >>> 0) | 0);
                }
                else {
                    if (l)
                        return 0 | o && (g[o >> 2] = (c >>> 0) % (s >>> 0),
                            g[o + 4 >> 2] = 0),
                            (b = 0) | (N = b,
                                (c >>> 0) / (s >>> 0) >>> 0);
                    if (!u)
                        return 0 | o && (g[o >> 2] = 0,
                            g[o + 4 >> 2] = (c >>> 0) % (f >>> 0)),
                            (b = 0) | (N = b,
                                (c >>> 0) / (f >>> 0) >>> 0);
                    if (!((l = f - 1 | 0) & f))
                        return 0 | o && (g[o >> 2] = 0 | e,
                            g[o + 4 >> 2] = l & c | 0 & t),
                            d = c >>> (((b = 0) | v(0 | f)) >>> 0),
                            0 | (N = b,
                                d);
                    if ((l = (0 | z(0 | f)) - (0 | z(0 | c)) | 0) >>> 0 <= 30) {
                        e = c << (f = 31 - l | 0) | u >>> ((s = t = l + 1 | 0) >>> 0),
                            t = c >>> (t >>> 0),
                            l = 0,
                            f = u << f;
                        break;
                    }
                    if (!o)
                        return d = b = 0,
                            0 | (N = b,
                                d);
                    g[o >> 2] = 0 | e,
                        g[o + 4 >> 2] = i | 0 & t,
                        d = b = 0;
                }
                return 0 | (N = b,
                    d);
            } while (0);
            if (s) {
                for (c = 0 | Ar(0 | (p = 0 | r), 0 | (u = a | 0 & n), -1, -1),
                    r = N,
                    i = f,
                    f = 0; i = l >>> 31 | (n = i) << 1,
                    l = f | l << 1,
                    ar(0 | c, 0 | r, 0 | (n = e << 1 | n >>> 31 | 0), 0 | (a = e >>> 31 | t << 1 | 0)),
                    f = 1 & (b = (d = N) >> 31 | ((0 | d) < 0 ? -1 : 0) << 1),
                    e = 0 | ar(0 | n, 0 | a, b & p | 0, (((0 | d) < 0 ? -1 : 0) >> 31 | ((0 | d) < 0 ? -1 : 0) << 1) & u | 0),
                    t = N,
                    0 != (0 | (s = s - 1 | 0));)
                    ;
                c = i,
                    i = 0;
            }
            else
                c = f,
                    f = i = 0;
            return (s = 0) | o && (g[o >> 2] = e,
                g[o + 4 >> 2] = t),
                0 | (N = (0 | l) >>> 31 | (c | s) << 1 | 0 & (s << 1 | l >>> 31) | i,
                    -2 & (l << 1 | 0) | f);
        }
        function fr(e, t, r, n) {
            return 0 | b(0 | e, 0 | t, 0 | r, 0 | n, 0);
        }
        function Nr(e, t, r, n) {
            var o = M;
            M = M + 16 | 0;
            var i = 0 | o;
            return b(0 | e, 0 | t, 0 | r, 0 | n, i),
                M = o,
                0 | (N = 0 | g[i + 4 >> 2],
                    0 | g[i >> 2]);
        }
        function ir(e, t, r) {
            return t |= 0,
                (0 | (r |= 0)) < 32 ? (N = t >>> r,
                    (0 | e) >>> r | (t & (1 << r) - 1) << 32 - r) : t >>> r - 32 | (N = 0);
        }
        function br(e, t, r) {
            return e |= 0,
                (0 | (r |= 0)) < 32 ? (N = (0 | t) << r | (e & (1 << r) - 1 << 32 - r) >>> 32 - r,
                    e << r) : (N = e << r - 32,
                    0);
        }
        function a(e) {
            return (255 & (e |= 0)) << 24 | (e >> 8 & 255) << 16 | (e >> 16 & 255) << 8 | e >>> 24 | 0;
        }
        function o(e) {
            return W((e = (858993459 & (e = (e |= 0) - (e >>> 1 & 1431655765) | 0)) + (e >>> 2 & 858993459) | 0) + (e >>> 4) & 252645135, 16843009) >>> 24 | 0;
        }
        function Jr(e, t, r) {
            var n;
            if (e |= 0,
                t |= 0,
                8192 <= (0 | (r |= 0)))
                return 0 | ee(0 | e, 0 | t, 0 | r);
            var o = 0 | e, i = e + r | 0;
            if ((3 & e) == (3 & t)) {
                for (; 3 & e;) {
                    if (!r)
                        return 0 | o;
                    l[e >> 0] = 0 | l[t >> 0],
                        e = e + 1 | 0,
                        t = t + 1 | 0,
                        r = r - 1 | 0;
                }
                for (n = (r = -4 & i | 0) - 64 | 0; (0 | e) <= (0 | n);)
                    g[e >> 2] = g[t >> 2],
                        g[e + 4 >> 2] = g[t + 4 >> 2],
                        g[e + 8 >> 2] = g[t + 8 >> 2],
                        g[e + 12 >> 2] = g[t + 12 >> 2],
                        g[e + 16 >> 2] = g[t + 16 >> 2],
                        g[e + 20 >> 2] = g[t + 20 >> 2],
                        g[e + 24 >> 2] = g[t + 24 >> 2],
                        g[e + 28 >> 2] = g[t + 28 >> 2],
                        g[e + 32 >> 2] = g[t + 32 >> 2],
                        g[e + 36 >> 2] = g[t + 36 >> 2],
                        g[e + 40 >> 2] = g[t + 40 >> 2],
                        g[e + 44 >> 2] = g[t + 44 >> 2],
                        g[e + 48 >> 2] = g[t + 48 >> 2],
                        g[e + 52 >> 2] = g[t + 52 >> 2],
                        g[e + 56 >> 2] = g[t + 56 >> 2],
                        g[e + 60 >> 2] = g[t + 60 >> 2],
                        e = e + 64 | 0,
                        t = t + 64 | 0;
                for (; (0 | e) < (0 | r);)
                    g[e >> 2] = g[t >> 2],
                        e = e + 4 | 0,
                        t = t + 4 | 0;
            }
            else
                for (r = i - 4 | 0; (0 | e) < (0 | r);)
                    l[e >> 0] = 0 | l[t >> 0],
                        l[e + 1 >> 0] = 0 | l[t + 1 >> 0],
                        l[e + 2 >> 0] = 0 | l[t + 2 >> 0],
                        l[e + 3 >> 0] = 0 | l[t + 3 >> 0],
                        e = e + 4 | 0,
                        t = t + 4 | 0;
            for (; (0 | e) < (0 | i);)
                l[e >> 0] = 0 | l[t >> 0],
                    e = e + 1 | 0,
                    t = t + 1 | 0;
            return 0 | o;
        }
        function Ur(e, t, r) {
            var n, o = (e |= 0) + (r |= 0) | 0;
            if (t = 255 & (0 | t),
                67 <= (0 | r)) {
                for (; 3 & e;)
                    l[e >> 0] = t,
                        e = e + 1 | 0;
                var i = -4 & o | 0, a = i - 64 | 0;
                for (n = t | t << 8 | t << 16 | t << 24; (0 | e) <= (0 | a);)
                    g[e >> 2] = n,
                        g[e + 4 >> 2] = n,
                        g[e + 8 >> 2] = n,
                        g[e + 12 >> 2] = n,
                        g[e + 16 >> 2] = n,
                        g[e + 20 >> 2] = n,
                        g[e + 24 >> 2] = n,
                        g[e + 28 >> 2] = n,
                        g[e + 32 >> 2] = n,
                        g[e + 36 >> 2] = n,
                        g[e + 40 >> 2] = n,
                        g[e + 44 >> 2] = n,
                        g[e + 48 >> 2] = n,
                        g[e + 52 >> 2] = n,
                        g[e + 56 >> 2] = n,
                        g[e + 60 >> 2] = n,
                        e = e + 64 | 0;
                for (; (0 | e) < (0 | i);)
                    g[e >> 2] = n,
                        e = e + 4 | 0;
            }
            for (; (0 | e) < (0 | o);)
                l[e >> 0] = t,
                    e = e + 1 | 0;
            return o - r | 0;
        }
        function c(e) {
            e |= 0;
            var t = 0 | g[R >> 2], r = t + e | 0;
            return 0 < (0 | e) & (0 | r) < (0 | t) | (0 | r) < 0 ? (Q(12),
                -1) : (0 | (g[R >> 2] = r)) > (0 | J()) && 0 == (0 | Y()) ? (g[R >> 2] = t,
                Q(12),
                -1) : 0 | t;
        }
        var f = e.Int8Array, l = new f(u), d = e.Int16Array, h = new d(u), A = e.Int32Array, g = new A(u), m = e.Uint8Array, _ = new m(u), w = e.Uint16Array;
        new w(u);
        var k = e.Uint32Array;
        new k(u);
        var S = e.Float32Array;
        new S(u);
        var x = e.Float64Array, C = new x(u), E = e.byteLength, R = 0 | r.i, I = 0 | r.j, M = 0 | r.k, F = 0, N = 0, B = e.Math.floor, V = e.Math.abs, U = e.Math.ceil, W = e.Math.imul, G = e.Math.min, z = e.Math.clz32, H = r.a, Y = r.c, J = r.d, X = r.e, Q = r.f, ee = r.g, te = r.h, re = [function () {
                return H(0),
                    0;
            }, function (e, t, r) {
                r |= 0;
                var n = 20 + (e |= 0) | 0, o = 0 | g[n >> 2];
                return Jr(0 | o, 0 | t, 0 | (e = r >>> 0 < (e = (0 | g[e + 16 >> 2]) - o | 0) >>> 0 ? r : e)),
                    g[n >> 2] = (0 | g[n >> 2]) + e,
                    0 | r;
            }];
        return {
            ___errno_location: function ___errno_location() {
                return 4720;
            },
            ___muldi3: er,
            ___udivdi3: fr,
            ___uremdi3: Nr,
            _bitshift64Lshr: ir,
            _bitshift64Shl: br,
            _emscripten_replace_memory: function _emscripten_replace_memory(e) {
                return !(16777215 & E(e) || E(e) <= 16777215 || 2147483648 < E(e)) && (l = new f(e),
                    h = new d(e),
                    g = new A(e),
                    _ = new m(e),
                    new w(e),
                    new k(e),
                    new S(e),
                    C = new x(e),
                    u = e,
                    !0);
            },
            _free: Qr,
            _i64Add: Ar,
            _i64Subtract: ar,
            _llvm_bswap_i32: a,
            _llvm_ctpop_i32: o,
            _malloc: Vr,
            _memcpy: Jr,
            _memset: Ur,
            _sbrk: c,
            _sub_de: function _sub_de(e) {
                if (null == e)
                    return null;
                e = s.allocateUTF8(e);
                var t, r = 0, n = M;
                M = M + 544 | 0;
                var o = n + 528 | 0, i = n + 520 | 0, a = n + 480 | 0, u = n + 400 | 0, c = n + 320 | 0, f = n + 240 | 0, d = n + 160 | 0, b = n + 80 | 0, h = n;
                if (!(e |= 0))
                    return M = n,
                        0;
                l[a + 32 >> 0] = 0,
                    l[a >> 0] = 83,
                    l[a + 1 >> 0] = 80,
                    l[a + 2 >> 0] = 104,
                    l[a + 3 >> 0] = 68,
                    l[a + 4 >> 0] = 88,
                    l[a + 5 >> 0] = 89,
                    l[a + 6 >> 0] = 103,
                    l[a + 7 >> 0] = 110,
                    l[a + 8 >> 0] = 84,
                    l[a + 9 >> 0] = 115,
                    l[a + 10 >> 0] = 65,
                    l[a + 11 >> 0] = 111,
                    l[a + 12 >> 0] = 111,
                    l[a + 13 >> 0] = 73,
                    l[a + 14 >> 0] = 112,
                    l[a + 15 >> 0] = 75,
                    l[a + 16 >> 0] = 56,
                    l[a + 17 >> 0] = 88,
                    l[a + 18 >> 0] = 118,
                    l[a + 19 >> 0] = 57,
                    l[a + 20 >> 0] = 112,
                    l[a + 21 >> 0] = 106,
                    l[a + 22 >> 0] = 109,
                    l[a + 23 >> 0] = 53,
                    l[a + 24 >> 0] = 120,
                    l[a + 25 >> 0] = 56,
                    l[a + 26 >> 0] = 74,
                    l[a + 27 >> 0] = 82,
                    l[a + 28 >> 0] = 117,
                    l[a + 29 >> 0] = 83,
                    l[a + 30 >> 0] = 57,
                    l[a + 31 >> 0] = 80;
                for (var v = u, A = v + 64 | 0; ((g[v >> 2] = 0) | (v = v + 4 | 0)) < (0 | A);)
                    ;
                for (A = (v = c) + 64 | (l[u + 64 >> 0] = 0); ((g[v >> 2] = 0) | (v = v + 4 | 0)) < (0 | A);)
                    ;
                for (A = (v = f) + 64 | (l[c + 64 >> 0] = 0); ((g[v >> 2] = 0) | (v = v + 4 | 0)) < (0 | A);)
                    ;
                for (A = (v = d) + 64 | (l[f + 64 >> 0] = 0); ((g[v >> 2] = 0) | (v = v + 4 | 0)) < (0 | A);)
                    ;
                for (A = (v = b) + 64 | (l[d + 64 >> 0] = 0); ((g[v >> 2] = 0) | (v = v + 4 | 0)) < (0 | A);)
                    ;
                for (A = (v = h) + 64 | (l[b + 64 >> 0] = 0); ((g[v >> 2] = 0) | (v = v + 4 | 0)) < (0 | A);)
                    ;
                for (p(a, (l[h + 64 >> 0] = 0) | Er(a), u),
                    Jr(0 | b, 0 | u, 0 | (v = (v = 0 | Er(u)) >>> 0 < 16 ? v : 16)),
                    p(b, (l[b + v >> 0] = 0) | Er(b), c),
                    A = (v = b) + 64 | 0; ((g[v >> 2] = 0) | (v = v + 4 | 0)) < (0 | A);)
                    ;
                if (16 <= (a = (l[b + 64 >> 0] = 0) | Er(u)) >>> 0) {
                    var y = a + -16 | 0;
                    Jr(0 | b, u + 16 | 0, 0 | (y = y >>> 0 < 16 ? y : 16)),
                        l[b + y >> 0] = 0;
                }
                for (p(b, 0 | Er(b), f),
                    0 | l[4724] || (v = 0 | te(0),
                        g[1160] = (0 | v) - 1,
                        g[1161] = 0,
                        l[4724] = 1),
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 1 >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 2 >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 3 >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 4 >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 5 >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 6 >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 7 >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 8 >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 9 >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 10 >> 0] = 0 | l[v >> 0],
                    v = 768 + ((0 | Z()) % 61 | 0) | 0,
                    l[d + 11 >> 0] = 0 | l[v >> 0],
                    A = (v = b) + 64 | 0; ((g[v >> 2] = 0) | (v = v + 4 | 0)) < (0 | A);)
                    ;
                if (l[b + 64 >> 0] = 0,
                    g[i >> 2] = c,
                    g[i + 4 >> 2] = d,
                    Sr(b, 64, 3340, i),
                    Jr(0 | h, 0 | c, 0 | (a = 0 | Er(c))),
                    p(b, 0 | Er(b), h + a | 0),
                    y = 0 | Vr(a = 7 + (a = 0 | Er(e)) + (0 | Er(f)) | 0)) {
                    for (Ur(0 | y, 0, 0 | a),
                        A = (v = b) + 64 | 0; ((g[v >> 2] = 0) | (v = v + 4 | 0)) < (0 | A);)
                        ;
                    l[b + 64 >> 0] = 0,
                        g[o >> 2] = e,
                        g[o + 4 >> 2] = f,
                        Sr(y, a, 3340, o),
                        p(y, 0 | Er(y), b),
                        Ur(0 | y, 0, 0 | a),
                        0 | l[4724] || (c = 0 | te(0),
                            g[1160] = (0 | c) - 1,
                            g[1161] = 0,
                            l[4724] = 1);
                    var m = 768 + ((0 | Z()) % 61 | 0) | 0;
                    l[y >> 0] = 0 | l[m >> 0],
                        m = 768 + ((0 | Z()) % 61 | 0) | 0,
                        l[y + 1 >> 0] = 0 | l[m >> 0],
                        m = 768 + ((0 | Z()) % 61 | 0) | 0,
                        l[y + 2 >> 0] = 0 | l[m >> 0],
                        m = 768 + ((0 | Z()) % 61 | 0) | 0,
                        l[y + 3 >> 0] = 0 | l[m >> 0],
                        m = 768 + ((0 | Z()) % 61 | 0) | 0,
                        l[y + 4 >> 0] = 0 | l[m >> 0],
                        m = 768 + ((0 | Z()) % 61 | 0) | 0,
                        l[y + 5 >> 0] = 0 | l[m >> 0],
                        m = y + 6 | 0;
                    var w = 0 | Er(b);
                    Jr(0 | m, 0 | b, 0 | (w = w >>> 0 < 16 ? w : 16)),
                        c = (b = (l[m + w >> 0] = 0) | y) + (0 | Er(b)) | 0,
                        f = 0 | (c |= 0);
                    var k = t = a = 0;
                    A = o = 0 | e;
                    e: do {
                        if (3 & (A ^ f))
                            a = o;
                        else {
                            if (3 & A)
                                for (;;) {
                                    if (A = 0 | l[o >> 0],
                                        !((l[f >> 0] = A) << 24 >> 24))
                                        break e;
                                    if (f = f + 1 | 0,
                                        !(3 & (o = o + 1 | 0))) {
                                        a = o;
                                        break;
                                    }
                                }
                            else
                                a = o;
                            if (!((-2139062144 & (o = 0 | g[a >> 2]) ^ -2139062144) & o + -16843009))
                                for (;;) {
                                    if (a = a + 4 | 0,
                                        A = f + 4 | 0,
                                        g[f >> 2] = o,
                                        (-2139062144 & (o = 0 | g[a >> 2]) ^ -2139062144) & o + -16843009 | 0) {
                                        f = A;
                                        break;
                                    }
                                    f = A;
                                }
                        }
                        t = f,
                            k = 10;
                    } while (0);
                    if (10 == (0 | k) && (k = 0 | l[a >> 0],
                        (l[t >> 0] = k) << 24 >> 24))
                        for (f = t; f = f + 1 | 0,
                            k = 0 | l[(a = a + 1 | 0) >> 0],
                            0 != (l[f >> 0] = k) << 24 >> 24;)
                            ;
                    if (1 <= (0 | (w = 0 | Er(y))) && (a = 255 & (m = ((0 | _r(h, 0 | Er(h))) >>> 0) % 100 | 0),
                        u = 65535 & w,
                        m >>> 0 < 50 ? Cr(a, y, u) : Fr(a, y, u),
                        0 | (A = w >>> 3))) {
                        f = h + 4 | 0,
                            b = h + 8 | 0,
                            o = h + 12 | 0,
                            a = 0;
                        do {
                            k = 4 + (t = y + (a << 3) | 0) | 0;
                            var S = 0 | g[h >> 2], x = 0 | g[f >> 2], O = 0 | g[b >> 2];
                            for (m = 0 | g[o >> 2],
                                u = 0 | g[k >> 2],
                                i = c = 0,
                                v = 0 | g[t >> 2]; u = (((v = ((u << 4) + S ^ u + (c = c + -1640531527 | 0) ^ (u >>> 5) + x) + v | 0) << 4) + O ^ v + c ^ (v >>> 5) + m) + u | 0,
                                32 != (0 | (i = i + 1 | 0));)
                                ;
                            g[t >> 2] = v,
                                g[k >> 2] = u,
                                a = a + 1 | 0;
                        } while ((0 | a) != (0 | A));
                    }
                    if (Ur(0 | (a = 0 | Vr(h = 19 + ((0 | w) / 96 | 0) + ((w << 2 | 0) / 3 | 0) | 0)), 0, 0 | h),
                        a) {
                        Jr(0 | a, 0 | d, 0 | Er(d)),
                            f = a + 12 | 0;
                        e: do {
                            if (0 < (0 | w)) {
                                c = A = 0;
                                do {
                                    switch (3 & ((A >>> 0) % 3 | 0)) {
                                        case 0:
                                            u = 0 | _[y + A >> 0],
                                                u >>>= 2,
                                                i = c,
                                                v = 1,
                                                r = 25;
                                            break;
                                        case 1:
                                            u = (u = 0 | _[y + A >> 0]) >>> 4 | l[y + (A + -1) >> 0] << 4 & 48,
                                                i = c,
                                                v = 1,
                                                r = 25;
                                            break;
                                        case 2:
                                            i = 0 | _[(u = y + A | 0) >> 0],
                                                l[f + c >> 0] = 0 | l[640 + (i >>> 6 | l[y + (A + -1) >> 0] << 2 & 60) >> 0],
                                                u = 63 & l[u >> 0],
                                                i = c + 1 | 0,
                                                v = 2,
                                                r = 25;
                                    }
                                    25 == (0 | r) && (l[f + i >> (r = 0)] = 0 | l[640 + u >> 0],
                                        c = c + v | 0),
                                        A = A + 1 | 0;
                                } while ((0 | A) != (0 | w));
                                switch ((0 | (u = w + -1 | 0)) % 3 | 0) {
                                    case 0:
                                        l[f + c >> 0] = 0 | l[640 + (l[y + u >> 0] << 4 & 48) >> 0],
                                            l[f + (c + 1) >> 0] = 61,
                                            l[f + (c + 2) >> 0] = 61;
                                        break e;
                                    case 1:
                                        l[f + c >> 0] = 0 | l[640 + (l[y + u >> 0] << 2 & 60) >> 0],
                                            l[f + (c + 1) >> 0] = 61;
                                        break e;
                                    default:
                                        break e;
                                }
                            }
                        } while (0);
                        Qr(y);
                    }
                    else
                        a = 0;
                }
                else
                    a = 0;
                Qr(e),
                    M = n;
                var C = null;
                return 0 != i && (C = s.Pointer_stringify(a),
                    s._free(a)),
                    C;
            },
            _sub_dms: function _sub_dms(e, t, r) {
                if (null == r)
                    return null;
                r = s.allocateUTF8(r),
                    e |= 0,
                    t = +t;
                var n = 0, o = M;
                M = M + 688 | 0;
                var i = o + 672 | 0, a = o + 664 | 0, u = o + 656 | 0, c = o + 648 | 0, f = o + 640 | 0, p = o + 632 | 0, d = o + 624 | 0, b = o + 616 | 0, h = o + 608 | 0, v = o + 600 | 0, A = o + 592 | 0, y = o + 584 | 0, m = o + 576 | 0, w = o + 568 | 0, k = o + 560 | 0, S = o + 552 | 0, x = o + 544 | 0, O = o + 536 | 0, C = o + 528 | 0, E = o + 520 | 0, R = o + 512 | 0, I = o + 424 | 0, D = o + 144 | 0, P = o + 128 | 0, F = o + 80 | 0, T = o + 48 | 0, j = o;
                if (!(r |= 0))
                    return M = o,
                        0;
                var N = 0 | Vr(33);
                if (!N)
                    return M = o,
                        0;
                for (var q = N, L = q + 33 | 0; ((l[q >> 0] = 0) | (q = q + 1 | 0)) < (0 | L);)
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
                var Z = ~~t >>> 0, z = 1 <= +V(t) ? 0 < t ? ~~+G(+B(t / 4294967296), 4294967295) >>> 0 : ~~+U((t - +(~~t >>> 0)) / 4294967296) >>> 0 : 0;
                g[T >> 2] = 0,
                    g[T + 4 >> 2] = 0,
                    g[T + 8 >> 2] = 0,
                    g[T + 12 >> 2] = 0;
                var H = (l[T + 16 >> 0] = 0) | l[r >> 0], Y = 0 | l[r + 1 >> 0], J = 0 | l[r + 2 >> 0], X = 0 | l[r + 3 >> 0];
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
                        var Q = D + 8 | 0, $ = D + 4 | 0, ee = 0;
                        do {
                            var te = ee << 4, re = H + te | 0, ne = 15 + (0 | Er(re)) | 0;
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
                                44 != (0 | (oe = oe + 1 | 0));)
                                ;
                            var ie = ne >>> 4;
                            e: do {
                                if (0 | ie)
                                    for (t = 0,
                                        oe = Q;;) {
                                        var ae = te + (ne = t << 4) | 0;
                                        if ((0 | oe) == (0 | Q)) {
                                            oe = 0 | g[D >> 2];
                                            var ue = re + ne | 0;
                                            for (L = (q = ae) + 16 | 0; l[q >> 0] = 0 | l[ue >> 0],
                                                ue = ue + 1 | 0,
                                                (0 | (q = q + 1 | 0)) < (0 | L);)
                                                ;
                                            Ir(ae, D + 8 + (oe << 2 << 2) | 0);
                                            var ce = ae + 4 | 0, se = ae + 8 | 0, fe = ae + 12 | 0, le = ae + 1 | 0, pe = ae + 9 | 0, de = ae + 13 | 0, be = ae + 2 | 0, he = ae + 6 | 0, ve = ae + 14 | 0, Ae = ae + 3 | 0, ye = ae + 7 | 0, ge = ae + 11 | 0, me = ae + 5 | 0, _e = ae + 10 | 0, we = ae + 15 | 0;
                                            if (0 | (oe = oe + -1 | 0))
                                                do {
                                                    var ke = 0 | l[ce >> 0], Se = 0 | l[se >> 0], xe = 0 | l[fe >> 0], Oe = 0 | l[pe >> 0], Ce = 0 | l[de >> 0], Ee = 0 | l[be >> 0], Re = 0 | l[he >> 0], Ie = 0 | l[ve >> 0];
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
                                                                4 != (0 | (ne = ne + 1 | 0));)
                                                                ;
                                                            l[q >> 0] = Pe,
                                                                De = De + 1 | 0;
                                                        } while (4 != (0 | De));
                                                        ue = ue + 1 | 0;
                                                    } while (4 != (0 | ue));
                                                    g[ae >> 2] = g[P >> 2],
                                                        g[ae + 4 >> 2] = g[P + 4 >> 2],
                                                        g[ae + 8 >> 2] = g[P + 8 >> 2],
                                                        g[ae + 12 >> 2] = g[P + 12 >> 2],
                                                        oe = oe + -1 | 0;
                                                } while (0 != (0 | oe));
                                            Ie = 0 | l[ce >> 0],
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
                                                Ir(ae, Q);
                                        }
                                        if ((0 | (t = t + 1 | 0)) == (0 | ie))
                                            break e;
                                        oe = 0 | g[$ >> 2];
                                    }
                            } while (0);
                            ee = ee + 1 | 0;
                        } while ((0 | ee) != (0 | K));
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
                            t = 0 | l[T + 1 >> 0];;) {
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
                                32 != (0 | (oe = oe + 1 | 0));)
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
                                32 != (0 | (oe = oe + 1 | 0));)
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
                                t = 255 & Ae;
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
                            (0 | (q = q + 4 | 0)) < (0 | L);)
                            ;
                        if (Rr(I, ne),
                            127 < De >>> 0)
                            for (oe = 64; Rr(I, D + oe | 0),
                                t = oe + 64 | 0,
                                (oe + 127 | 0) >>> 0 < De >>> 0;)
                                oe = t;
                        else
                            t = 64;
                    }
                    else
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
                        32 != (0 | (ne = ne + 1 | 0));)
                        ;
                    for (g[T >> 2] = De,
                        g[ue >> 2] = t,
                        ue = T + 8 | 0,
                        t = 0 | g[se >> 2],
                        ne = oe = 0,
                        De = 0 | g[ue >> 2]; t = (((De = ((t << 4) + L ^ t + (oe = oe + -1640531527 | 0) ^ (t >>> 5) + q) + De | 0) << 4) + Pe ^ De + oe ^ (De >>> 5) + ce) + t | 0,
                        32 != (0 | (ne = ne + 1 | 0));)
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
                        T || (n = 58);
                }
                else
                    n = 58;
                return 58 == (0 | n) && (Qr(N), N = 0), Qr(r), M = o, O = null,
                    0 != N && (O = s.Pointer_stringify(N),
                        s._free(N)),
                    O;
            },
            dynCall_iiii: function dynCall_iiii(e, t, r, n) {
                return 0 | re[1 & (0 | e)](0 | t, 0 | r, 0 | n);
            },
            establishStackSpace: function establishStackSpace(e) {
                M = 0 | e;
            },
            getTempRet0: function getTempRet0() {
                return 0 | N;
            },
            runPostSets: function runPostSets() { },
            setTempRet0: function setTempRet0(e) {
                N = 0 | e;
            },
            setThrew: function setThrew(e) {
                F || (F = 0 | e);
            },
            stackAlloc: function stackAlloc(e) {
                var t = M;
                return M = 15 + (M = M + (0 | e) | 0) & -16,
                    0 | t;
            },
            stackRestore: function stackRestore(e) {
                M = 0 | e;
            },
            stackSave: function stackSave() {
                return 0 | M;
            }
        };
    }(s.asmGlobalArg, s.asmLibraryArg, k);
    s.___errno_location = ae.___errno_location,
        s.___muldi3 = ae.___muldi3,
        s.___udivdi3 = ae.___udivdi3,
        s.___uremdi3 = ae.___uremdi3,
        s._bitshift64Lshr = ae._bitshift64Lshr,
        s._bitshift64Shl = ae._bitshift64Shl;
    var ue = s._emscripten_replace_memory = ae._emscripten_replace_memory;
    s._free = ae._free,
        s._i64Add = ae._i64Add,
        s._i64Subtract = ae._i64Subtract,
        s._llvm_bswap_i32 = ae._llvm_bswap_i32,
        s._llvm_ctpop_i32 = ae._llvm_ctpop_i32;
    var ce = s._malloc = ae._malloc;
    if (s._memcpy = ae._memcpy,
        s._memset = ae._memset,
        s._sbrk = ae._sbrk,
        s._sub_de = ae._sub_de,
        s._sub_dms = ae._sub_dms,
        s.establishStackSpace = ae.establishStackSpace,
        s.getTempRet0 = ae.getTempRet0,
        s.runPostSets = ae.runPostSets,
        s.setTempRet0 = ae.setTempRet0,
        s.setThrew = ae.setThrew,
        s.stackAlloc = ae.stackAlloc,
        s.stackRestore = ae.stackRestore,
        s.stackSave = ae.stackSave,
        s.dynCall_iiii = ae.dynCall_iiii,
        s.asm = ae,
        s.Pointer_stringify = gb,
        s.allocateUTF8 = function (e) {
            for (var t = 0, r = 0; r < e.length; ++r) {
                var n = e.charCodeAt(r);
                55296 <= n && n <= 57343 && (n = 65536 + ((1023 & n) << 10) | 1023 & e.charCodeAt(++r)),
                    n <= 127 ? ++t : t = n <= 2047 ? t + 2 : n <= 65535 ? t + 3 : n <= 2097151 ? t + 4 : n <= 67108863 ? t + 5 : t + 6;
            }
            var o = t + 1;
            if ((t = ce(o)) && (r = S,
                n = t,
                0 < o)) {
                o = n + o - 1;
                for (var i = 0; i < e.length; ++i) {
                    var a = e.charCodeAt(i);
                    if (55296 <= a && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++i)),
                        a <= 127) {
                        if (o <= n)
                            break;
                        r[n++] = a;
                    }
                    else {
                        if (a <= 2047) {
                            if (o <= n + 1)
                                break;
                            r[n++] = 192 | a >> 6;
                        }
                        else {
                            if (a <= 65535) {
                                if (o <= n + 2)
                                    break;
                                r[n++] = 224 | a >> 12;
                            }
                            else {
                                if (a <= 2097151) {
                                    if (o <= n + 3)
                                        break;
                                    r[n++] = 240 | a >> 18;
                                }
                                else {
                                    if (a <= 67108863) {
                                        if (o <= n + 4)
                                            break;
                                        r[n++] = 248 | a >> 24;
                                    }
                                    else {
                                        if (o <= n + 5)
                                            break;
                                        r[n++] = 252 | a >> 30,
                                            r[n++] = 128 | a >> 24 & 63;
                                    }
                                    r[n++] = 128 | a >> 18 & 63;
                                }
                                r[n++] = 128 | a >> 12 & 63;
                            }
                            r[n++] = 128 | a >> 6 & 63;
                        }
                        r[n++] = 128 | 63 & a;
                    }
                }
                r[n] = 0;
            }
            return t;
        },
        ee) {
        if (String.prototype.startsWith ? !ee.startsWith(te) : 0 !== ee.indexOf(te)) {
            var se = ee;
            ee = s.locateFile ? s.locateFile(se, m) : m + se;
        }
        var fe = function Ac() {
            s.readAsync(ee, le, function () {
                throw "could not load memory initializer " + ee;
            });
        };
        J++,
            s.monitorRunDependencies && s.monitorRunDependencies(J);
        var le = function zc(e) {
            e.byteLength && (e = new Uint8Array(e)),
                x.set(e, 8),
                s.memoryInitializerRequest && delete s.memoryInitializerRequest.response,
                J--,
                s.monitorRunDependencies && s.monitorRunDependencies(J),
                0 == J && (null !== X && (clearInterval(X),
                    X = null),
                    Q && (e = Q,
                        Q = null,
                        e()));
        }, pe = Ta(ee);
        if (pe)
            le(pe.buffer);
        else if (s.memoryInitializerRequest) {
            var de = function Cc() {
                var e = s.memoryInitializerRequest, t = e.response;
                if (200 !== e.status && 0 !== e.status) {
                    if (!(t = Ta(s.memoryInitializerRequestURL)))
                        return void fe();
                    t = t.buffer;
                }
                le(t);
            };
            s.memoryInitializerRequest.response ? setTimeout(de, 0) : s.memoryInitializerRequest.addEventListener("load", de);
        }
        else
            fe();
    }
    function Mc() {
        function r() {
            if (!s.calledRun && (s.calledRun = !0,
                !B)) {
                if (Y || (Y = !0,
                    Gb(G)),
                    Gb(z),
                    s.onRuntimeInitialized && s.onRuntimeInitialized(),
                    s.postRun)
                    for ("function" == typeof s.postRun && (s.postRun = [s.postRun]); s.postRun.length;) {
                        var e = s.postRun.shift();
                        H.unshift(e);
                    }
                Gb(H);
            }
        }
        if (!(0 < J)) {
            if (s.preRun)
                for ("function" == typeof s.preRun && (s.preRun = [s.preRun]); s.preRun.length;)
                    Mb();
            Gb(W),
                0 < J || s.calledRun || (s.setStatus ? (s.setStatus("Running..."),
                    setTimeout(function () {
                        setTimeout(function () {
                            s.setStatus("");
                        }, 1),
                            r();
                    }, 1)) : r());
        }
    }
    function db(e) {
        throw s.onAbort && s.onAbort(e),
            e = void 0 !== e ? (_(e),
                w(e),
                JSON.stringify(e)) : "",
            B = !0,
            "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.";
    }
    if (Q = function r() {
        s.calledRun || Mc(),
            s.calledRun || (Q = r);
    },
        s.run = Mc,
        s.abort = db,
        s.preInit)
        for ("function" == typeof s.preInit && (s.preInit = [s.preInit]); 0 < s.preInit.length;)
            s.preInit.pop()();
    return s.noExitRuntime = !0,
        Mc(),
        s;
}({});
function cryptoSync(e, t) {
    if (n && "string" === typeof e && "function" === typeof n[e] && Array.isArray(t))
        return n[e].apply(null, t);
}
module.exports = cryptoSync;
