export default class STT {
    public static encode = (e: any, t?: any): string => {
        if ('string' === typeof e) return e;
        var r = Object.prototype.toString.call(e),
            n = '[object Array]' === r,
            o =
                '[object Object]' === r && (null === Object.getPrototypeOf(e) || Object === e.constructor);
        return n || o
            ? Object.keys(e).reduce(function (t, r) {
                return (
                    t +
                    (n
                        ? ''
                        : r.replace(/@|\//g, function (e) {
                            return '@' + ('@' === e ? 'A' : 'S');
                        }) + '@=') +
                    STT.encode(e[r], !0).replace(/@|\//g, (e: any) => {
                        return '@' + ('@' === e ? 'A' : 'S');
                    }) +
                    '/'
                );
            }, '')
            : (t ||
                console.error(
                    '%c [@shark/net - encode]: Illegal parameter!\n  The argument must be a valid string, a plain object or a array!!!',
                    'color: #f0f; font-size: 20px;',
                    e
                ),
                t ? String(e) : '');
    };

    private static inner_decode = (l: any) => {
        let n: any, u: any;
        if ('string' === typeof l && l) {
            let e = '/' !== l.charAt(l.length - 1) ? l.concat('/') : l,
                r = e.length,
                i: any = /@=/g.test(e) ? {} : [],
                t = 0,
                o = '',
                s = '';
            for (; t < r;) {
                let a = e.charAt(t);
                if ('/' === a)
                    Array.isArray(i) ? i.push(s) : (i[o] = s), (o = (n = ['', ''])[0]), (s = n[1]);
                else if ('@' === a)
                    switch (((t += 1), e.charAt(t))) {
                        case 'A':
                            s += '@';
                            break;
                        case 'S':
                            s += '/';
                            break;
                        case '=':
                            (o = (u = [s, ''])[0]), (s = u[1]);
                    }
                else s += a;
                t += 1;
            }
            return i;
        }
        console.error(
            '%c [@shark/net - decode]: Illegal parameter!\n  The argument must be a valid string!!!',
            'color: #f0f; font-size: 20px;',
            l
        );
    };

    public static decode = (str: any): object => {
        let a = STT.inner_decode(str);
        for (let b in a) {
            if (b !== 'undefined' && b !== 'txt' && (a[b] as string).match('@')) {
                a[b] = STT.decode(a[b]);
            }
        }
        return a;
    };
}
