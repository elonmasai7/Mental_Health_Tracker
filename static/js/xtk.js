/*
 * 
 *                  xxxxxxx      xxxxxxx
 *                   x:::::x    x:::::x 
 *                    x:::::x  x:::::x  
 *                     x:::::xx:::::x   
 *                      x::::::::::x    
 *                       x::::::::x     
 *                       x::::::::x     
 *                      x::::::::::x    
 *                     x:::::xx:::::x   
 *                    x:::::x  x:::::x  
 *                   x:::::x    x:::::x 
 *              THE xxxxxxx      xxxxxxx TOOLKIT
 *                    
 *                  https://www.goXTK.com
 *                   
 * Copyright (c) 2012 The X Toolkit Developers <dev@goXTK.com>
 *                   
 *    The X Toolkit (XTK) is licensed under the MIT License:
 *      https://www.opensource.org/licenses/mit-license.php
 * 
 *      "Free software" is a matter of liberty, not price.
 *      "Free" as in "free speech", not as in "free beer".
 *                                         - Richard M. Stallman
 * 
 * FUELED BY:
 *  - the wonderful Constructive Solid Geometry library by Evan Wallace (https://madebyevan.com)
 *    LICENSE: https://raw.github.com/xtk/X/master/lib/csg/LICENSE
 *
 *  - parts of the Google Closure Library (https://code.google.com/closure/library)
 *    LICENSE: https://raw.github.com/xtk/X/master/lib/closure-library/LICENSE
 * 
 *  - the JSXCompressor library (https://jsxgraph.uni-bayreuth.de/wp/jsxcompressor/)
 *    LICENSE: https://raw.github.com/xtk/X/master/lib/JXG/LICENSE
 *
 * MORE CREDITS: https://raw.github.com/xtk/X/master/LICENSE
 *
 */
function i(a) {
    throw a;
}
var n = void 0,
    o = !0,
    r = null,
    s = !1;

function aa() {
    return function() {}
}

function ba(a) {
    return function(b) {
        this[a] = b
    }
}

function t(a) {
    return function() {
        return this[a]
    }
}
var u, ca = this;

function da() {}

function ea(a) {
    var b = typeof a;
    if ("object" == b)
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
        } else return "null";
    else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b
}

function fa(a) {
    return a !== n
}

function y(a) {
    return a != r
}

function C(a) {
    return "array" == ea(a)
}

function ha(a) {
    var b = ea(a);
    return "array" == b || "object" == b && "number" == typeof a.length
}

function ia(a) {
    return "string" == typeof a
}

function D(a) {
    return "number" == typeof a
}

function ja(a) {
    return "function" == ea(a)
}

function ka(a) {
    a = ea(a);
    return "object" == a || "array" == a || "function" == a
}

function la(a) {
    return a[ma] || (a[ma] = ++na)
}
var ma = "closure_uid_" + Math.floor(2147483648 * Math.random()).toString(36),
    na = 0;

function oa(a, b, c) {
    return a.call.apply(a.bind, arguments)
}

function pa(a, b, c) {
    a || i(Error());
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c, d);
            return a.apply(b, c)
        }
    }
    return function() {
        return a.apply(b, arguments)
    }
}

function qa(a, b, c) {
    qa = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? oa : pa;
    return qa.apply(r, arguments)
}

function ra(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b = Array.prototype.slice.call(arguments);
        b.unshift.apply(b, c);
        return a.apply(this, b)
    }
}
var sa = Date.now || function() {
    return +new Date
};

function E(a, b) {
    var c = a.split("."),
        d = ca;
    !(c[0] in d) && d.execScript && d.execScript("var " + c[0]);
    for (var e; c.length && (e = c.shift());) !c.length && fa(b) ? d[e] = b : d = d[e] ? d[e] : d[e] = {}
}

function H(a, b) {
    function c() {}
    c.prototype = b.prototype;
    a.k = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a
};

function va(a, b, c) {
    this.Ca = this.Ba = this.Aa = 0;
    3 == arguments.length ? (this.Aa = Number(a), this.Ba = Number(b), this.Ca = Number(c)) : a instanceof va ? (this.Aa = Number(a.x()), this.Ba = Number(a.y()), this.Ca = Number(a.b())) : (this.Aa = Number(a[0]), this.Ba = Number(a[1]), this.Ca = Number(a[2]))
}
va.prototype = {
    f: function() {
        return new va(this.Aa, this.Ba, this.Ca)
    },
    $e: function() {
        return new va(-this.Aa, -this.Ba, -this.Ca)
    },
    Ec: function(a) {
        return new va(this.Aa + a.x(), this.Ba + a.y(), this.Ca + a.b())
    },
    md: function(a) {
        return new va(this.Aa - a.x(), this.Ba - a.y(), this.Ca - a.b())
    },
    Hb: function(a) {
        return new va(this.Aa * a, this.Ba * a, this.Ca * a)
    },
    jh: function(a) {
        return new va(this.Aa / a, this.Ba / a, this.Ca / a)
    },
    Bc: function(a) {
        return this.Aa * a.x() + this.Ba * a.y() + this.Ca * a.b()
    },
    hg: function(a, b) {
        return this.Ec(a.md(this).Hb(b))
    },
    length: function() {
        return Math.sqrt(this.Bc(this))
    },
    sd: function() {
        return this.jh(this.length())
    },
    Ke: function(a) {
        return new va(this.Ba * a.b() - this.Ca * a.y(), this.Ca * a.x() - this.Aa * a.b(), this.Aa * a.y() - this.Ba * a.x())
    },
    x: t("Aa"),
    y: t("Ba"),
    b: t("Ca")
};
var I = I || {};
I.Yi = o;
I.ra = function(a) {
    eval("X.DEV === undefined") || window.console.time(a)
};
I.ma = function(a) {
    eval("X.DEV === undefined") || window.console.timeEnd(a)
};
window["X.counter"] = new function() {
    this.Tg = 0;
    this.Ui = function() {
        return this.Tg++
    }
};

function wa(a, b) {
    for (var c in b) {
        var d = b.__lookupGetter__(c),
            e = b.__lookupSetter__(c);
        d || e ? (d && a.__defineGetter__(c, d), e && a.__defineSetter__(c, e)) : a[c] = b[c]
    }
}
Function.prototype.bind || (Function.prototype.bind = function(a) {
    function b() {
        return f.apply(this instanceof c ? this : a || window, e.concat(d.call(arguments)))
    }

    function c() {}
    "function" !== typeof this && i(new TypeError("Function.prototype.bind - what is trying to be bound is not callable"));
    var d = Array.prototype.slice,
        e = d.call(arguments, 1),
        f = this;
    c.prototype = this.prototype;
    b.prototype = new c;
    return b
});
(function() {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.od; ++c) window.od = window[b[c] + "RequestAnimationFrame"], window.Md = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.od || (window.od = function(b) {
        var c = Date.now(),
            f = Math.max(0, 16 - (c - a)),
            g = window.setTimeout(function() {
                b(c + f)
            }, f);
        a = c + f;
        return g
    });
    window.Md || (window.Md = function(a) {
        clearTimeout(a)
    })
})();
E("Function.prototype.bind", Function.prototype.bind);
E("window.requestAnimationFrame", window.od);
E("window.cancelAnimationFrame", window.Md);

function xa(a) {
    if (!ya.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Aa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Ba, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ea, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Fa, "&quot;"));
    return a
}
var Aa = /&/g,
    Ba = /</g,
    Ea = />/g,
    Fa = /\"/g,
    ya = /[&<>\"]/;
var Ga, Ha, Ia, Ja, Ka, La, Ma;

function Na() {
    return ca.navigator ? ca.navigator.userAgent : r
}

function Oa() {
    return ca.navigator
}
Ka = Ja = Ia = Ha = Ga = s;
var Pa;
if (Pa = Na()) {
    var Qa = Oa();
    Ga = 0 == Pa.indexOf("Opera");
    Ha = !Ga && -1 != Pa.indexOf("MSIE");
    Ja = (Ia = !Ga && -1 != Pa.indexOf("WebKit")) && -1 != Pa.indexOf("Mobile");
    Ka = !Ga && !Ia && "Gecko" == Qa.product
}
var Ra = Ga,
    K = Ha,
    Ta = Ka,
    Ua = Ia,
    Va = Ja,
    Wa, Xa = Oa();
Wa = Xa && Xa.platform || "";
La = -1 != Wa.indexOf("Mac");
Ma = -1 != Wa.indexOf("Win");
var Ya = !!Oa() && -1 != (Oa().appVersion || "").indexOf("X11"),
    Za;
a: {
    var ab = "",
        bb;
    if (Ra && ca.opera) var cb = ca.opera.version,
        ab = "function" == typeof cb ? cb() : cb;
    else if (Ta ? bb = /rv\:([^\);]+)(\)|;)/ : K ? bb = /MSIE\s+([^\);]+)(\)|;)/ : Ua && (bb = /WebKit\/(\S+)/), bb) var db = bb.exec(Na()),
        ab = db ? db[1] : "";
    if (K) {
        var eb, fb = ca.document;
        eb = fb ? fb.documentMode : n;
        if (eb > parseFloat(ab)) {
            Za = "" + eb;
            break a
        }
    }
    Za = ab
}
var gb = {};

function hb(a) {
    var b;
    if (!(b = gb[a])) {
        b = 0;
        for (var c = ("" + Za).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = ("" + a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
            var g = c[f] || "",
                h = d[f] || "",
                k = RegExp("(\\d*)(\\D*)", "g"),
                l = RegExp("(\\d*)(\\D*)", "g");
            do {
                var j = k.exec(g) || ["", "", ""],
                    m = l.exec(h) || ["", "", ""];
                if (0 == j[0].length && 0 == m[0].length) break;
                b = ((0 == j[1].length ? 0 : parseInt(j[1], 10)) < (0 == m[1].length ? 0 : parseInt(m[1], 10)) ? -1 : (0 == j[1].length ? 0 : parseInt(j[1],
                    10)) > (0 == m[1].length ? 0 : parseInt(m[1], 10)) ? 1 : 0) || ((0 == j[2].length) < (0 == m[2].length) ? -1 : (0 == j[2].length) > (0 == m[2].length) ? 1 : 0) || (j[2] < m[2] ? -1 : j[2] > m[2] ? 1 : 0)
            } while (0 == b)
        }
        b = gb[a] = 0 <= b
    }
    return b
}
var jb = {};

function kb(a) {
    return jb[a] || (jb[a] = K && document.documentMode && document.documentMode >= a)
};

function lb(a, b) {
    for (var c in a) b.call(n, a[c], c, a)
}

function mb(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = a[d];
    return b
}

function nb(a) {
    var b = [],
        c = 0,
        d;
    for (d in a) b[c++] = d;
    return b
}
var ob = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");

function rb(a, b) {
    for (var c, d, e = 1; e < arguments.length; e++) {
        d = arguments[e];
        for (c in d) a[c] = d[c];
        for (var f = 0; f < ob.length; f++) c = ob[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
    }
};
var sb = Array.prototype,
    tb = sb.indexOf ? function(a, b, c) {
        return sb.indexOf.call(a, b, c)
    } : function(a, b, c) {
        c = c == r ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (ia(a)) return !ia(b) || 1 != b.length ? -1 : a.indexOf(b, c);
        for (; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    },
    ub = sb.forEach ? function(a, b, c) {
        sb.forEach.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = ia(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    },
    vb = sb.map ? function(a, b, c) {
        return sb.map.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = Array(d), f =
                ia(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
        return e
    },
    wb = sb.some ? function(a, b, c) {
        return sb.some.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = ia(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return o;
        return s
    },
    xb = sb.every ? function(a, b, c) {
        return sb.every.call(a, b, c)
    } : function(a, b, c) {
        for (var d = a.length, e = ia(a) ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && !b.call(c, e[f], f, a)) return s;
        return o
    };

function yb(a, b) {
    var c = tb(a, b);
    0 <= c && sb.splice.call(a, c, 1)
}

function zb(a) {
    return sb.concat.apply(sb, arguments)
}

function Ab(a) {
    if (C(a)) return zb(a);
    for (var b = [], c = 0, d = a.length; c < d; c++) b[c] = a[c];
    return b
}

function Bb(a, b, c) {
    return 2 >= arguments.length ? sb.slice.call(a, b) : sb.slice.call(a, b, c)
};

function Cb(a) {
    if ("function" == typeof a.Wa) a = a.Wa();
    else if (ha(a) || ia(a)) a = a.length;
    else {
        var b = 0,
            c;
        for (c in a) b++;
        a = b
    }
    return a
}

function Db(a) {
    if ("function" == typeof a.Na) return a.Na();
    if (ia(a)) return a.split("");
    if (ha(a)) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    }
    return mb(a)
}

function Eb(a, b) {
    if ("function" == typeof a.every) return a.every(b, n);
    if (ha(a) || ia(a)) return xb(a, b, n);
    var c;
    if ("function" == typeof a.hd) c = a.hd();
    else if ("function" != typeof a.Na)
        if (ha(a) || ia(a)) {
            c = [];
            for (var d = a.length, e = 0; e < d; e++) c.push(e)
        } else c = nb(a);
    else c = n;
    for (var d = Db(a), e = d.length, f = 0; f < e; f++)
        if (!b.call(n, d[f], c && c[f], a)) return s;
    return o
};
var Fb = "StopIteration" in ca ? ca.StopIteration : Error("StopIteration");

function Gb() {}
Gb.prototype.next = function() {
    i(Fb)
};
Gb.prototype.Kc = function() {
    return this
};

function Kb(a) {
    if (a instanceof Gb) return a;
    if ("function" == typeof a.Kc) return a.Kc(s);
    if (ha(a)) {
        var b = 0,
            c = new Gb;
        c.next = function() {
            for (;;) {
                b >= a.length && i(Fb);
                if (b in a) return a[b++];
                b++
            }
        };
        return c
    }
    i(Error("Not implemented"))
}

function Lb(a, b) {
    if (ha(a)) try {
        ub(a, b, n)
    } catch (c) {
        c !== Fb && i(c)
    } else {
        a = Kb(a);
        try {
            for (;;) b.call(n, a.next(), n, a)
        } catch (d) {
            d !== Fb && i(d)
        }
    }
};

function Mb(a, b) {
    this.H = {};
    this.z = [];
    var c = arguments.length;
    if (1 < c) {
        c % 2 && i(Error("Uneven number of arguments"));
        for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
    } else a && this.De(a)
}
u = Mb.prototype;
u.M = 0;
u.td = 0;
u.Wa = t("M");
u.Na = function() {
    Nb(this);
    for (var a = [], b = 0; b < this.z.length; b++) a.push(this.H[this.z[b]]);
    return a
};
u.hd = function() {
    Nb(this);
    return this.z.concat()
};
u.Ie = function(a) {
    for (var b = 0; b < this.z.length; b++) {
        var c = this.z[b];
        if (Ob(this.H, c) && this.H[c] == a) return o
    }
    return s
};
u.dd = function(a, b) {
    if (this === a) return o;
    if (this.M != a.Wa()) return s;
    var c = b || Pb;
    Nb(this);
    for (var d, e = 0; d = this.z[e]; e++)
        if (!c(this.get(d), a.get(d))) return s;
    return o
};

function Pb(a, b) {
    return a === b
}
u.clear = function() {
    this.H = {};
    this.td = this.M = this.z.length = 0
};
u.remove = function(a) {
    return Ob(this.H, a) ? (delete this.H[a], this.M--, this.td++, this.z.length > 2 * this.M && Nb(this), o) : s
};

function Nb(a) {
    if (a.M != a.z.length) {
        for (var b = 0, c = 0; b < a.z.length;) {
            var d = a.z[b];
            Ob(a.H, d) && (a.z[c++] = d);
            b++
        }
        a.z.length = c
    }
    if (a.M != a.z.length) {
        for (var e = {}, c = b = 0; b < a.z.length;) d = a.z[b], Ob(e, d) || (a.z[c++] = d, e[d] = 1), b++;
        a.z.length = c
    }
}
u.get = function(a, b) {
    return Ob(this.H, a) ? this.H[a] : b
};
u.set = function(a, b) {
    Ob(this.H, a) || (this.M++, this.z.push(a), this.td++);
    this.H[a] = b
};
u.De = function(a) {
    var b;
    a instanceof Mb ? (b = a.hd(), a = a.Na()) : (b = nb(a), a = mb(a));
    for (var c = 0; c < b.length; c++) this.set(b[c], a[c])
};
u.f = function() {
    return new Mb(this)
};
u.Kc = function(a) {
    Nb(this);
    var b = 0,
        c = this.z,
        d = this.H,
        e = this.td,
        f = this,
        g = new Gb;
    g.next = function() {
        for (;;) {
            e != f.td && i(Error("The map has changed since the iterator was created"));
            b >= c.length && i(Fb);
            var g = c[b++];
            return a ? g : d[g]
        }
    };
    return g
};

function Ob(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b)
};

function Qb(a) {
    this.H = new Mb;
    a && this.De(a)
}

function Rb(a) {
    var b = typeof a;
    return "object" == b && a || "function" == b ? "o" + la(a) : b.substr(0, 1) + a
}
u = Qb.prototype;
u.Wa = function() {
    return this.H.Wa()
};
u.add = function(a) {
    this.H.set(Rb(a), a)
};
u.De = function(a) {
    for (var a = Db(a), b = a.length, c = 0; c < b; c++) this.add(a[c])
};
u.ce = function(a) {
    for (var a = Db(a), b = a.length, c = 0; c < b; c++) this.remove(a[c])
};
u.remove = function(a) {
    return this.H.remove(Rb(a))
};
u.clear = function() {
    this.H.clear()
};
u.contains = function(a) {
    a = Rb(a);
    return Ob(this.H.H, a)
};
u.fg = function(a) {
    for (var b = new Qb, a = Db(a), c = 0; c < a.length; c++) {
        var d = a[c];
        this.contains(d) && b.add(d)
    }
    return b
};
u.Na = function() {
    return this.H.Na()
};
u.f = function() {
    return new Qb(this)
};
u.dd = function(a) {
    return this.Wa() == Cb(a) && Sb(this, a)
};

function Sb(a, b) {
    var c = Cb(b);
    if (a.Wa() > c) return s;
    !(b instanceof Qb) && 5 < c && (b = new Qb(b));
    return Eb(a, function(a) {
        if ("function" == typeof b.contains) a = b.contains(a);
        else if ("function" == typeof b.Ie) a = b.Ie(a);
        else if (ha(b) || ia(b)) a = 0 <= tb(b, a);
        else a: {
            for (var c in b)
                if (b[c] == a) {
                    a = o;
                    break a
                }
            a = s
        }
        return a
    })
}
u.Kc = function() {
    return this.H.Kc(s)
};

function Tb() {}
Tb.prototype.Sf = s;
Tb.prototype.Ma = function() {
    this.Sf || (this.Sf = o, this.N())
};
Tb.prototype.N = function() {
    this.gh && Ub.apply(r, this.gh)
};

function Vb(a) {
    a && "function" == typeof a.Ma && a.Ma()
}

function Ub(a) {
    for (var b = 0, c = arguments.length; b < c; ++b) {
        var d = arguments[b];
        ha(d) ? Ub.apply(r, d) : Vb(d)
    }
};

function Wb(a, b) {
    this.jg = b;
    this.gd = [];
    a > this.jg && i(Error("[goog.structs.SimplePool] Initial cannot be greater than max"));
    for (var c = 0; c < a; c++) this.gd.push(this.Od())
}
H(Wb, Tb);
u = Wb.prototype;
u.Pf = r;
u.Rf = r;

function Xb(a, b) {
    a.gd.length < a.jg ? a.gd.push(b) : a.Me(b)
}
u.Od = function() {
    return this.Pf ? this.Pf() : {}
};
u.Me = function(a) {
    if (this.Rf) this.Rf(a);
    else if (ka(a))
        if (ja(a.Ma)) a.Ma();
        else
            for (var b in a) delete a[b]
};
u.N = function() {
    Wb.k.N.call(this);
    for (var a = this.gd; a.length;) this.Me(a.pop());
    delete this.gd
};

function Yb() {
    this.ed = [];
    this.ff = new Mb;
    this.Fg = this.Gg = this.Hg = this.Cg = 0;
    this.rd = new Mb;
    this.Mf = this.Eg = 0;
    this.af = 1;
    this.Ne = new Wb(0, 4E3);
    this.Ne.Od = function() {
        return new Zb
    };
    this.Dg = new Wb(0, 50);
    this.Dg.Od = function() {
        return new $b
    };
    var a = this;
    this.Re = new Wb(0, 2E3);
    this.Re.Od = function() {
        return "" + a.af++
    };
    this.Re.Me = aa()
}

function $b() {
    this.sf = this.time = this.count = 0
}
$b.prototype.toString = function() {
    var a = [];
    a.push(this.type, " ", this.count, " (", Math.round(10 * this.time) / 10, " ms)");
    this.sf && a.push(" [VarAlloc = ", this.sf, "]");
    return a.join("")
};

function Zb() {}

function ac(a, b, c, d) {
    var e = []; - 1 == c ? e.push("    ") : e.push(bc(a.Tf - c));
    e.push(" ", cc(a.Tf - b));
    0 == a.Oe ? e.push(" Start        ") : 1 == a.Oe ? (e.push(" Done "), e.push(bc(a.Qj - a.startTime), " ms ")) : e.push(" Comment      ");
    e.push(d, a);
    0 < a.Qi && e.push("[VarAlloc ", a.Qi, "] ");
    return e.join("")
}
Zb.prototype.toString = function() {
    return this.type == r ? this.dh : "[" + this.type + "] " + this.dh
};
Yb.prototype.reset = function() {
    for (var a = 0; a < this.ed.length; a++) {
        var b = this.Ne.id;
        b && Xb(this.Re, b);
        Xb(this.Ne, this.ed[a])
    }
    this.ed.length = 0;
    this.ff.clear();
    this.Cg = sa();
    this.Mf = this.Eg = this.Fg = this.Gg = this.Hg = 0;
    b = this.rd.hd();
    for (a = 0; a < b.length; a++) {
        var c = this.rd.get(b[a]);
        c.count = 0;
        c.time = 0;
        c.sf = 0;
        Xb(this.Dg, c)
    }
    this.rd.clear()
};
Yb.prototype.toString = function() {
    for (var a = [], b = -1, c = [], d = 0; d < this.ed.length; d++) {
        var e = this.ed[d];
        1 == e.Oe && c.pop();
        a.push(" ", ac(e, this.Cg, b, c.join("")));
        b = e.Tf;
        a.push("\n");
        0 == e.Oe && c.push("|  ")
    }
    if (0 != this.ff.Wa()) {
        var f = sa();
        a.push(" Unstopped timers:\n");
        Lb(this.ff, function(b) {
            a.push("  ", b, " (", f - b.startTime, " ms, started at ", cc(b.startTime), ")\n")
        })
    }
    b = this.rd.hd();
    for (d = 0; d < b.length; d++) c = this.rd.get(b[d]), 1 < c.count && a.push(" TOTAL ", c, "\n");
    a.push("Total tracers created ", this.Eg, "\n", "Total comments created ",
        this.Mf, "\n", "Overhead start: ", this.Hg, " ms\n", "Overhead end: ", this.Gg, " ms\n", "Overhead comment: ", this.Fg, " ms\n");
    return a.join("")
};

function bc(a) {
    var a = Math.round(a),
        b = "";
    1E3 > a && (b = " ");
    100 > a && (b = "  ");
    10 > a && (b = "   ");
    return b + a
}

function cc(a) {
    a = Math.round(a);
    return ("" + (100 + a / 1E3 % 60)).substring(1, 3) + "." + ("" + (1E3 + a % 1E3)).substring(1, 4)
}
new Yb;

function dc() {}
var ec = 0;
u = dc.prototype;
u.key = 0;
u.Gc = s;
u.Fe = s;
u.la = function(a, b, c, d, e, f) {
    ja(a) ? this.gg = o : a && a.handleEvent && ja(a.handleEvent) ? this.gg = s : i(Error("Invalid listener argument"));
    this.kd = a;
    this.yg = b;
    this.src = c;
    this.type = d;
    this.capture = !!e;
    this.Pe = f;
    this.Fe = s;
    this.key = ++ec;
    this.Gc = s
};
u.handleEvent = function(a) {
    return this.gg ? this.kd.call(this.Pe || this.src, a) : this.kd.handleEvent.call(this.kd, a)
};
!K || kb(9);
var fc = !K || kb(9),
    gc = K && !hb("8");
!Ua || hb("528");
Ta && hb("1.9b") || K && hb("8") || Ra && hb("9.5") || Ua && hb("528");
!Ta || hb("8");

function hc(a, b) {
    this.type = a;
    this.currentTarget = this.target = b
}
H(hc, Tb);
u = hc.prototype;
u.N = function() {
    delete this.type;
    delete this.target;
    delete this.currentTarget
};
u.lc = s;
u.pd = o;
u.stopPropagation = function() {
    this.lc = o
};
u.preventDefault = function() {
    this.pd = s
};

function ic(a) {
    ic[" "](a);
    return a
}
ic[" "] = da;

function jc(a, b) {
    a && this.la(a, b)
}
H(jc, hc);
u = jc.prototype;
u.target = r;
u.relatedTarget = r;
u.offsetX = 0;
u.offsetY = 0;
u.clientX = 0;
u.clientY = 0;
u.screenX = 0;
u.screenY = 0;
u.button = 0;
u.keyCode = 0;
u.charCode = 0;
u.ctrlKey = s;
u.altKey = s;
u.shiftKey = s;
u.metaKey = s;
u.Va = r;
u.la = function(a, b) {
    var c = this.type = a.type;
    hc.call(this, c);
    this.target = a.target || a.srcElement;
    this.currentTarget = b;
    var d = a.relatedTarget;
    if (d) {
        if (Ta) {
            var e;
            a: {
                try {
                    ic(d.nodeName);
                    e = o;
                    break a
                } catch (f) {}
                e = s
            }
            e || (d = r)
        }
    } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
    this.relatedTarget = d;
    this.offsetX = Ua || a.offsetX !== n ? a.offsetX : a.layerX;
    this.offsetY = Ua || a.offsetY !== n ? a.offsetY : a.layerY;
    this.clientX = a.clientX !== n ? a.clientX : a.pageX;
    this.clientY = a.clientY !== n ? a.clientY : a.pageY;
    this.screenX =
        a.screenX || 0;
    this.screenY = a.screenY || 0;
    this.button = a.button;
    this.keyCode = a.keyCode || 0;
    this.charCode = a.charCode || ("keypress" == c ? a.keyCode : 0);
    this.ctrlKey = a.ctrlKey;
    this.altKey = a.altKey;
    this.shiftKey = a.shiftKey;
    this.metaKey = a.metaKey;
    this.state = a.state;
    this.Va = a;
    delete this.pd;
    delete this.lc
};
u.stopPropagation = function() {
    jc.k.stopPropagation.call(this);
    this.Va.stopPropagation ? this.Va.stopPropagation() : this.Va.cancelBubble = o
};
u.preventDefault = function() {
    jc.k.preventDefault.call(this);
    var a = this.Va;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = s, gc) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
    } catch (b) {}
};
u.sh = t("Va");
u.N = function() {
    jc.k.N.call(this);
    this.relatedTarget = this.currentTarget = this.target = this.Va = r
};
var kc = {},
    lc = {},
    mc = {},
    nc = {};

function M(a, b, c, d, e) {
    if (b) {
        if (C(b)) {
            for (var f = 0; f < b.length; f++) M(a, b[f], c, d, e);
            return r
        }
        var d = !!d,
            g = lc;
        b in g || (g[b] = {
            M: 0,
            Ga: 0
        });
        g = g[b];
        d in g || (g[d] = {
            M: 0,
            Ga: 0
        }, g.M++);
        var g = g[d],
            h = la(a),
            k;
        g.Ga++;
        if (g[h]) {
            k = g[h];
            for (f = 0; f < k.length; f++)
                if (g = k[f], g.kd == c && g.Pe == e) {
                    if (g.Gc) break;
                    return k[f].key
                }
        } else k = g[h] = [], g.M++;
        f = oc();
        f.src = a;
        g = new dc;
        g.la(c, f, a, b, d, e);
        c = g.key;
        f.key = c;
        k.push(g);
        kc[c] = g;
        mc[h] || (mc[h] = []);
        mc[h].push(g);
        a.addEventListener ? (a == ca || !a.Qf) && a.addEventListener(b, f, d) : a.attachEvent(b in
            nc ? nc[b] : nc[b] = "on" + b, f);
        return c
    }
    i(Error("Invalid event type"))
}

function oc() {
    var a = pc,
        b = fc ? function(c) {
            return a.call(b.src, b.key, c)
        } : function(c) {
            c = a.call(b.src, b.key, c);
            if (!c) return c
        };
    return b
}

function qc(a, b, c, d, e) {
    if (C(b))
        for (var f = 0; f < b.length; f++) qc(a, b[f], c, d, e);
    else a = M(a, b, c, d, e), kc[a].Fe = o
}

function rc(a, b, c, d, e) {
    if (C(b))
        for (var f = 0; f < b.length; f++) rc(a, b[f], c, d, e);
    else {
        d = !!d;
        a: {
            f = lc;
            if (b in f && (f = f[b], d in f && (f = f[d], a = la(a), f[a]))) {
                a = f[a];
                break a
            }
            a = r
        }
        if (a)
            for (f = 0; f < a.length; f++)
                if (a[f].kd == c && a[f].capture == d && a[f].Pe == e) {
                    sc(a[f].key);
                    break
                }
    }
}

function sc(a) {
    if (!kc[a]) return s;
    var b = kc[a];
    if (b.Gc) return s;
    var c = b.src,
        d = b.type,
        e = b.yg,
        f = b.capture;
    c.removeEventListener ? (c == ca || !c.Qf) && c.removeEventListener(d, e, f) : c.detachEvent && c.detachEvent(d in nc ? nc[d] : nc[d] = "on" + d, e);
    c = la(c);
    e = lc[d][f][c];
    if (mc[c]) {
        var g = mc[c];
        yb(g, b);
        0 == g.length && delete mc[c]
    }
    b.Gc = o;
    e.ng = o;
    tc(d, f, c, e);
    delete kc[a];
    return o
}

function tc(a, b, c, d) {
    if (!d.Zd && d.ng) {
        for (var e = 0, f = 0; e < d.length; e++) d[e].Gc ? d[e].yg.src = r : (e != f && (d[f] = d[e]), f++);
        d.length = f;
        d.ng = s;
        0 == f && (delete lc[a][b][c], lc[a][b].M--, 0 == lc[a][b].M && (delete lc[a][b], lc[a].M--), 0 == lc[a].M && delete lc[a])
    }
}

function uc(a) {
    var b, c = 0,
        d = b == r;
    b = !!b;
    if (a == r) lb(mc, function(a) {
        for (var e = a.length - 1; 0 <= e; e--) {
            var f = a[e];
            if (d || b == f.capture) sc(f.key), c++
        }
    });
    else if (a = la(a), mc[a])
        for (var a = mc[a], e = a.length - 1; 0 <= e; e--) {
            var f = a[e];
            if (d || b == f.capture) sc(f.key), c++
        }
}

function vc(a) {
    var b = wc,
        a = la(a),
        c = mc[a];
    if (c) {
        var d = fa(b),
            e = fa(n);
        return d && e ? (c = lc[b], !!c && !!c[n] && a in c[n]) : !d && !e ? o : wb(c, function(a) {
            return d && a.type == b || e && a.capture == n
        })
    }
    return s
}

function xc(a, b, c, d, e) {
    var f = 1,
        b = la(b);
    if (a[b]) {
        a.Ga--;
        a = a[b];
        a.Zd ? a.Zd++ : a.Zd = 1;
        try {
            for (var g = a.length, h = 0; h < g; h++) {
                var k = a[h];
                k && !k.Gc && (f &= yc(k, e) !== s)
            }
        } finally {
            a.Zd--, tc(c, d, b, a)
        }
    }
    return Boolean(f)
}

function yc(a, b) {
    var c = a.handleEvent(b);
    a.Fe && sc(a.key);
    return c
}

function pc(a, b) {
    if (!kc[a]) return o;
    var c = kc[a],
        d = c.type,
        e = lc;
    if (!(d in e)) return o;
    var e = e[d],
        f, g;
    if (!fc) {
        var h;
        if (!(h = b)) a: {
            h = ["window", "event"];
            for (var k = ca; f = h.shift();)
                if (y(k[f])) k = k[f];
                else {
                    h = r;
                    break a
                }
            h = k
        }
        f = h;
        h = o in e;
        k = s in e;
        if (h) {
            if (0 > f.keyCode || f.returnValue != n) return o;
            a: {
                var l = s;
                if (0 == f.keyCode) try {
                    f.keyCode = -1;
                    break a
                } catch (j) {
                    l = o
                }
                if (l || f.returnValue == n) f.returnValue = o
            }
        }
        l = new jc;
        l.la(f, this);
        f = o;
        try {
            if (h) {
                for (var m = [], p = l.currentTarget; p; p = p.parentNode) m.push(p);
                g = e[o];
                g.Ga = g.M;
                for (var q =
                        m.length - 1; !l.lc && 0 <= q && g.Ga; q--) l.currentTarget = m[q], f &= xc(g, m[q], d, o, l);
                if (k) {
                    g = e[s];
                    g.Ga = g.M;
                    for (q = 0; !l.lc && q < m.length && g.Ga; q++) l.currentTarget = m[q], f &= xc(g, m[q], d, s, l)
                }
            } else f = yc(c, l)
        } finally {
            m && (m.length = 0), l.Ma()
        }
        return f
    }
    d = new jc(b, this);
    try {
        f = yc(c, d)
    } finally {
        d.Ma()
    }
    return f
}
var zc = 0;

function Ac(a) {
    return a + "_" + zc++
};

function Bc() {}
H(Bc, Tb);
u = Bc.prototype;
u.Qf = o;
u.ae = r;
u.jf = ba("ae");
u.addEventListener = function(a, b, c, d) {
    M(this, a, b, c, d)
};
u.removeEventListener = function(a, b, c, d) {
    rc(this, a, b, c, d)
};
u.dispatchEvent = function(a) {
    var b = a.type || a,
        c = lc;
    if (b in c) {
        if (ia(a)) a = new hc(a, this);
        else if (a instanceof hc) a.target = a.target || this;
        else {
            var d = a,
                a = new hc(b, this);
            rb(a, d)
        }
        var d = 1,
            e, c = c[b],
            b = o in c,
            f;
        if (b) {
            e = [];
            for (f = this; f; f = f.ae) e.push(f);
            f = c[o];
            f.Ga = f.M;
            for (var g = e.length - 1; !a.lc && 0 <= g && f.Ga; g--) a.currentTarget = e[g], d &= xc(f, e[g], a.type, o, a) && a.pd != s
        }
        if (s in c)
            if (f = c[s], f.Ga = f.M, b)
                for (g = 0; !a.lc && g < e.length && f.Ga; g++) a.currentTarget = e[g], d &= xc(f, e[g], a.type, s, a) && a.pd != s;
            else
                for (e = this; !a.lc && e &&
                    f.Ga; e = e.ae) a.currentTarget = e, d &= xc(f, e, a.type, s, a) && a.pd != s;
        a = Boolean(d)
    } else a = o;
    return a
};
u.N = function() {
    Bc.k.N.call(this);
    uc(this);
    this.ae = r
};

function N() {
    this.c = "base";
    this.sa = window["X.counter"].Ui();
    this.e = s
}
H(N, Bc);
N.prototype.__defineGetter__("classname", t("c"));
N.prototype.__defineGetter__("id", t("sa"));
E("X.base", N);

function Cc(a, b) {
    this.za = new va(a);
    this.fa = new va(b)
}
Cc.prototype = {
    f: function() {
        return new Cc(this.za.f(), this.fa.f())
    },
    hc: function() {
        this.fa = this.fa.$e()
    },
    Gh: function(a, b) {
        return new Cc(this.za.hg(a.za, b), this.fa.hg(a.fa, b))
    }
};

function Gc(a, b) {
    this.fa = a;
    this.ud = b
}
Gc.prototype = {
    f: function() {
        return new Gc(this.fa.f(), this.ud)
    },
    hc: function() {
        this.fa = this.fa.$e();
        this.ud = -this.ud
    }
};

function Hc(a, b) {
    this.ib = a;
    this.ge = b;
    var c = a[0].za,
        d = a[2].za,
        d = a[1].za.md(c).Ke(d.md(c)).sd();
    this.ya = new Gc(d, d.Bc(c))
}
Hc.prototype = {
    f: function() {
        var a = this.ib.map(function(a) {
            return a.f()
        });
        return new Hc(a, this.ge)
    },
    hc: function() {
        this.ib.reverse().map(function(a) {
            a.hc()
        });
        this.ya.hc()
    },
    Bg: function(a, b, c, d, e) {
        for (var f = 0, g = [], h = 0; h < this.ib.length; h++) {
            var k = a.fa.Bc(this.ib[h].za) - a.ud,
                k = -1.0E-5 > k ? 2 : 1.0E-5 < k ? 1 : 0,
                f = f | k;
            g.push(k)
        }
        switch (f) {
            case 0:
                (0 < a.fa.Bc(this.ya.fa) ? b : c).push(this);
                break;
            case 1:
                d.push(this);
                break;
            case 2:
                e.push(this);
                break;
            case 3:
                b = [];
                c = [];
                for (h = 0; h < this.ib.length; h++) {
                    var l = (h + 1) % this.ib.length,
                        k =
                        g[h],
                        j = g[l],
                        f = this.ib[h],
                        l = this.ib[l];
                    2 != k && b.push(f);
                    1 != k && c.push(2 != k ? f.f() : f);
                    3 == (k | j) && (k = (a.ud - a.fa.Bc(f.za)) / a.fa.Bc(l.za.md(f.za)), k = f.Gh(l, k), b.push(k), c.push(k.f()))
                }
                3 <= b.length && d.push(new Hc(b, this.ge));
                3 <= c.length && e.push(new Hc(c, this.ge))
        }
    }
};

function Ic(a) {
    this.ga = this.ha = this.ya = r;
    this.C = [];
    a && this.yc(a)
}
Ic.prototype = {
    f: function() {
        var a = new Ic;
        a.Bi(this.ya && this.ya.f());
        a.Ai(this.ha && this.ha.f());
        a.zi(this.ga && this.ga.f());
        a.ee(this.C.map(function(a) {
            return a.f()
        }));
        return a
    },
    ba: function() {
        for (var a = 0; a < this.C.length; a++) this.C[a].hc();
        this.ya.hc();
        this.ha && this.ha.ba();
        this.ga && this.ga.ba();
        a = this.ha;
        this.ha = this.ga;
        this.ga = a
    },
    He: function(a) {
        if (!this.ya) return a.slice();
        for (var b = [], c = [], d = 0; d < a.length; d++) a[d].Bg(this.ya, b, c, b, c);
        this.ha && (b = this.ha.He(b));
        c = this.ga ? this.ga.He(c) : [];
        return b.concat(c)
    },
    La: function(a) {
        this.C = a.He(this.C);
        this.ha && this.ha.La(a);
        this.ga && this.ga.La(a)
    },
    Fb: function() {
        var a = this.C.slice();
        this.ha && (a = a.concat(this.ha.Fb()));
        this.ga && (a = a.concat(this.ga.Fb()));
        return a
    },
    yc: function(a) {
        if (a.length) {
            this.ya || (this.ya = a[0].ya.f());
            for (var b = [], c = [], d = 0; d < a.length; d++) a[d].Bg(this.ya, this.C, this.C, b, c);
            b.length && (this.ha || (this.ha = new Ic), this.ha.yc(b));
            c.length && (this.ga || (this.ga = new Ic), this.ga.yc(c))
        }
    },
    Bi: ba("ya"),
    Ai: ba("ha"),
    zi: ba("ga"),
    ee: ba("C")
};

function Jc() {
    this.C = []
}

function Kc(a) {
    var b = new Jc;
    b.ee(a);
    return b
}
Jc.prototype = {
    f: function() {
        var a = new Jc;
        a.ee(this.C.map(function(a) {
            return a.f()
        }));
        return a
    },
    qf: function(a) {
        var b = new Ic(this.f().C),
            a = new Ic(a.f().C);
        b.La(a);
        a.La(b);
        a.ba();
        a.La(b);
        a.ba();
        b.yc(a.Fb());
        return Kc(b.Fb())
    },
    hb: function(a) {
        var b = new Ic(this.f().C),
            a = new Ic(a.f().C);
        b.ba();
        b.La(a);
        a.La(b);
        a.ba();
        a.La(b);
        a.ba();
        b.yc(a.Fb());
        b.ba();
        return Kc(b.Fb())
    },
    Te: function(a) {
        var b = new Ic(this.f().C),
            a = new Ic(a.f().C);
        b.ba();
        a.La(b);
        a.ba();
        b.La(a);
        a.La(b);
        b.yc(a.Fb());
        b.ba();
        return Kc(b.Fb())
    },
    inverse: function() {
        var a =
            this.f();
        a.C.map(function(a) {
            a.hc()
        });
        return a
    },
    ee: ba("C")
};

function Lc() {
    N.call(this);
    this.c = "indexer";
    this.Ce = [];
    this.ub = {}
}
H(Lc, N);
Lc.prototype.add = function(a) {
    y(a) || i(Error("Invalid object."));
    var b = window.JSON.stringify(a);
    b in this.ub || (this.ub[b] = this.Ce.length, this.Ce.push(a));
    return this.ub[b]
};
Lc.prototype.unique = t("Ce");

function Mc(a) {
    N.call(this);
    this.c = "file";
    this.wc = a;
    this.e = o
}
H(Mc, N);

function Nc() {
    this.nb = this.mb = this.Ia = this.p = r
}
Nc.prototype.__defineSetter__("file", function(a) {
    this.p = !y(a) || C(a) && 0 == a.length ? r : C(a) ? 1 == a.length ? new Mc(a[0]) : vb(a, function(a) {
        var c = new P;
        c.p = new Mc(a);
        return c
    }) : new Mc(a)
});
Nc.prototype.__defineGetter__("file", function() {
    return !this.p ? "" : C(this.p) ? this.p.map(function(a) {
        return a.p.wc
    }) : this.p.wc
});
Nc.prototype.__defineGetter__("filedata", t("Ia"));
Nc.prototype.__defineSetter__("filedata", function(a) {
    if (!y(a) || C(a) && 0 == a.length) this.Ia = r;
    if (C(a))
        if (1 == a.length) this.Ia = a[0];
        else {
            var b = this.p.length,
                c;
            for (c = 0; c < b; c++) this.p[c].Ia = a[c]
        }
    else this.Ia = a
});
Nc.prototype.__defineSetter__("hdrfile", function(a) {
    this.mb = y(a) ? new Mc(a) : r
});
Nc.prototype.__defineGetter__("hdrfile", function() {
    return !this.mb ? "" : this.mb.wc
});
Nc.prototype.__defineGetter__("hdrfiledata", t("nb"));
Nc.prototype.__defineSetter__("hdrfiledata", ba("nb"));

function Oc() {
    N.call(this);
    this.c = "colortable";
    this.ub = new Mb;
    wa(this, new Nc)
}
H(Oc, N);
Oc.prototype.add = function(a, b, c, d, e, f) {
    (!D(a) || !D(c) || !D(d) || !D(e) || !D(f)) && i(Error("Invalid color table entry."));
    this.ub.set(a, [b, c, d, e, f]);
    this.e = o
};

function Pc(a, b, c) {
    this.x = fa(a) ? a : 0;
    this.y = fa(b) ? b : 0;
    this.b = fa(c) ? c : 0
}
Pc.prototype.f = function() {
    return new Pc(this.x, this.y, this.b)
};
Pc.prototype.pf = function() {
    return [this.x, this.y, this.b]
};

function Q(a, b, c) {
    this.x = a;
    this.y = b;
    this.b = c
}
H(Q, Pc);
u = Q.prototype;
u.f = function() {
    return new Q(this.x, this.y, this.b)
};
u.jc = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.b * this.b)
};
u.scale = function(a) {
    this.x *= a;
    this.y *= a;
    this.b *= a;
    return this
};
u.ba = function() {
    this.x = -this.x;
    this.y = -this.y;
    this.b = -this.b;
    return this
};
u.normalize = function() {
    return this.scale(1 / this.jc())
};
u.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    this.b += a.b;
    return this
};
u.hb = function(a) {
    this.x -= a.x;
    this.y -= a.y;
    this.b -= a.b;
    return this
};
u.dd = function(a) {
    return this == a || !!a && this.x == a.x && this.y == a.y && this.b == a.b
};

function Qc(a, b) {
    var c = a.x - b.x,
        d = a.y - b.y,
        e = a.b - b.b;
    return Math.sqrt(c * c + d * d + e * e)
}

function Rc(a, b) {
    return new Q(a.x + b.x, a.y + b.y, a.b + b.b)
}

function Sc(a, b) {
    return new Q(a.y * b.b - a.b * b.y, a.b * b.x - a.x * b.b, a.x * b.y - a.y * b.x)
};

function Tc(a, b) {
    this.x = fa(a) ? a : 0;
    this.y = fa(b) ? b : 0
}
Tc.prototype.f = function() {
    return new Tc(this.x, this.y)
};

function Uc(a, b) {
    return new Tc(a.x - b.x, a.y - b.y)
};

function Vc(a, b) {
    this.x = a;
    this.y = b
}
H(Vc, Tc);
u = Vc.prototype;
u.f = function() {
    return new Vc(this.x, this.y)
};
u.jc = function() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
};
u.scale = function(a) {
    this.x *= a;
    this.y *= a;
    return this
};
u.ba = function() {
    this.x = -this.x;
    this.y = -this.y;
    return this
};
u.normalize = function() {
    return this.scale(1 / this.jc())
};
u.add = function(a) {
    this.x += a.x;
    this.y += a.y;
    return this
};
u.hb = function(a) {
    this.x -= a.x;
    this.y -= a.y;
    return this
};
u.rotate = function(a) {
    var b = Math.cos(a),
        a = Math.sin(a),
        c = this.y * b + this.x * a;
    this.x = this.x * b - this.y * a;
    this.y = c;
    return this
};
u.dd = function(a) {
    return this == a || !!a && this.x == a.x && this.y == a.y
};

function Wc(a, b) {
    this.width = a;
    this.height = b
}

function Xc(a, b) {
    return a == b ? o : !a || !b ? s : a.width == b.width && a.height == b.height
}
u = Wc.prototype;
u.f = function() {
    return new Wc(this.width, this.height)
};
u.ceil = function() {
    this.width = Math.ceil(this.width);
    this.height = Math.ceil(this.height);
    return this
};
u.floor = function() {
    this.width = Math.floor(this.width);
    this.height = Math.floor(this.height);
    return this
};
u.round = function() {
    this.width = Math.round(this.width);
    this.height = Math.round(this.height);
    return this
};
u.scale = function(a) {
    this.width *= a;
    this.height *= a;
    return this
};

function Yc(a, b) {
    if (a instanceof Yc) this.U = a.pf();
    else {
        var c;
        if (c = ha(a)) a: {
            for (var d = c = 0; d < a.length; d++) {
                if (!ha(a[d]) || 0 < c && a[d].length != c) {
                    c = s;
                    break a
                }
                for (var e = 0; e < a[d].length; e++)
                    if (!D(a[d][e])) {
                        c = s;
                        break a
                    }
                0 == c && (c = a[d].length)
            }
            c = 0 != c
        }
        c ? this.U = Ab(a) : a instanceof Wc ? this.U = Zc(a.height, a.width) : D(a) && D(b) && 0 < a && 0 < b ? this.U = Zc(a, b) : i(Error("Invalid argument(s) for Matrix contructor"))
    }
    this.I = new Wc(this.U[0].length, this.U.length)
}

function $c(a) {
    for (var b = [], c = 0; c < a; c++) {
        b[c] = [];
        for (var d = 0; d < a; d++) b[c][d] = c == d ? 1 : 0
    }
    return new Yc(b)
}

function ad(a, b, c) {
    for (var d = 0; d < a.xa().height; d++)
        for (var e = 0; e < a.xa().width; e++) b.call(c, a.U[d][e], d, e, a)
}

function bd(a, b) {
    var c = new Yc(a.xa());
    ad(a, function(d, e, f) {
        c.U[e][f] = b.call(n, d, e, f, a)
    });
    return c
}

function Zc(a, b) {
    for (var c = [], d = 0; d < a; d++) {
        c[d] = [];
        for (var e = 0; e < b; e++) c[d][e] = 0
    }
    return c
}
u = Yc.prototype;
u.add = function(a) {
    Xc(this.I, a.xa()) || i(Error("Matrix summation is only supported on arrays of equal size"));
    return bd(this, function(b, c, d) {
        return b + a.U[c][d]
    })
};
u.dd = function(a, b) {
    if (this.I.width != a.I.width || this.I.height != a.I.height) return s;
    for (var c = b || 0, d = 0; d < this.I.height; d++)
        for (var e = 0; e < this.I.width; e++)
            if (!(Math.abs(this.U[d][e] - a.U[d][e]) <= (c || 1.0E-6))) return s;
    return o
};
u.xa = t("I");
u.V = function(a, b) {
    return !(0 <= a && a < this.I.height && 0 <= b && b < this.I.width) ? r : this.U[a][b]
};
u.j = function(a, b, c) {
    0 <= a && a < this.I.height && 0 <= b && b < this.I.width || i(Error("Index out of bounds when setting matrix value, (" + a + "," + b + ") in size (" + this.I.height + "," + this.I.width + ")"));
    this.U[a][b] = c
};
u.multiply = function(a) {
    if (a instanceof Yc) return this.I.width != a.xa().height && i(Error("Invalid matrices for multiplication. Second matrix should have the same number of rows as the first has columns.")), cd(this, a);
    if (D(a)) return dd(this, a);
    i(Error("A matrix can only be multiplied by a number or another matrix."))
};
u.hb = function(a) {
    Xc(this.I, a.xa()) || i(Error("Matrix subtraction is only supported on arrays of equal size."));
    return bd(this, function(b, c, d) {
        return b - a.U[c][d]
    })
};
u.pf = t("U");

function cd(a, b) {
    var c = new Yc(a.I.height, b.xa().width);
    ad(c, function(a, e, f) {
        for (var g = a = 0; g < this.I.width; g++) a += this.V(e, g) * b.V(g, f);
        c.j(e, f, a)
    }, a);
    return c
}

function dd(a, b) {
    return bd(a, function(a) {
        return a * b
    })
};

function ed(a, b) {
    Yc.call(this, a, b);
    this.c = "matrix"
}
H(ed, Yc);

function fd(a) {
    for (var b = [], c = 0; c < a; c++) {
        b[c] = [];
        for (var d = 0; d < a; d++) b[c][d] = c == d ? 1 : 0
    }
    return new ed(b)
}
u = ed.prototype;
u.Fa = function() {
    var a = [],
        b = this.xa(),
        c, d;
    for (d = 0; d < b.height; d++)
        for (c = 0; c < b.width; c++) a.push(this.V(c, d));
    return a
};
u.translate = function(a) {
    this.I.width != this.I.height && i(Error("Can not translate non-square matrix."));
    var b = this.xa(),
        c = $c(b.height);
    a instanceof Vc && 3 == b.height ? (c.j(0, 2, a.x), c.j(1, 2, a.y)) : a instanceof Q && 4 == b.height ? (c.j(0, 3, a.x), c.j(1, 3, a.y), c.j(2, 3, a.b)) : i(Error("Translation failed."));
    return new ed(this.multiply(c))
};
u.rotate = function(a, b) {
    (4 != this.xa().height || this.I.width != this.I.height) && i(Error("Only 4x4 matrices can be rotated."));
    (!y(b) || !(b instanceof Q)) && i(Error("Invalid axis vector."));
    D(a) || i(Error("Invalid angle."));
    var c = b.normalize(),
        d = Math.cos(a),
        e = Math.sin(a),
        f = $c(4);
    f.j(0, 0, d + c.x * c.x * (1 - d));
    f.j(0, 1, c.x * c.y * (1 - d) - c.b * e);
    f.j(0, 2, c.x * c.b * (1 - d) + c.y * e);
    f.j(1, 0, c.y * c.x * (1 - d) + c.b * e);
    f.j(1, 1, d + c.y * c.y * (1 - d));
    f.j(1, 2, c.y * c.b * (1 - d) - c.x * e);
    f.j(2, 0, c.b * c.x * (1 - d) - c.y * e);
    f.j(2, 1, c.b * c.y * (1 - d) + c.x * e);
    f.j(2,
        2, d + c.b * c.b * (1 - d));
    return new ed(this.multiply(f))
};
u.Pa = function(a) {
    var b = this.xa(),
        c = Array(b.width),
        d;
    for (d = 0; d < c.length; d++) c[d] = Array(1), c[d][0] = 1;
    a instanceof Q && 3 <= b.width ? (c[0][0] = a.x, c[1][0] = a.y, c[2][0] = a.b) : i(Error("Multiplication by vector failed."));
    a = this.multiply(new Yc(c));
    return new Q(parseFloat(a.V(0, 0)), parseFloat(a.V(1, 0)), parseFloat(a.V(2, 0)))
};
u.Oi = function(a, b) {
    var c = this.U[a];
    this.U[a] = this.U[b];
    this.U[b] = c
};
u.Ni = function(a, b) {
    for (var c = this.xa(), d = 0, d = 0; d < c.height; d++) {
        var e = this.V(d, a);
        e || (e = 0);
        var f = this.V(d, b);
        f || (f = 0);
        this.j(d, a, f);
        this.j(d, b, e)
    }
};
E("X.matrix", ed);
E("X.matrix.createIdentityMatrix", fd);
E("X.matrix.prototype.flatten", ed.prototype.Fa);
E("X.matrix.prototype.translate", ed.prototype.translate);
E("X.matrix.prototype.rotate", ed.prototype.rotate);
E("X.matrix.prototype.toArray", ed.prototype.pf);
E("X.matrix.prototype.getValueAt", ed.prototype.V);
E("X.matrix.prototype.setValueAt", ed.prototype.j);
E("X.matrix.prototype.multiplyByVector", ed.prototype.Pa);
E("X.matrix.prototype.swapRows", ed.prototype.Oi);
E("X.matrix.prototype.swapCols", ed.prototype.Ni);

function gd() {
    N.call(this);
    this.c = "transform";
    this.F = fd(4);
    this.yf = new Float32Array(this.F.Fa())
}
H(gd, N);
gd.prototype.__defineGetter__("matrix", t("F"));
gd.prototype.__defineSetter__("matrix", function(a) {
    (!y(a) || !(a instanceof ed)) && i(Error("Invalid matrix."));
    this.F = a;
    this.o()
});
u = gd.prototype;
u.ti = function(a) {
    (!D(a) || -360 > a || 360 < a) && i(Error("Invalid angle."));
    this.F = this.F.rotate(a * Math.PI / 180, new Q(0, 1, 0));
    this.o()
};
u.ui = function(a) {
    (!D(a) || -360 > a || 360 < a) && i(Error("Invalid angle."));
    this.F = this.F.rotate(a * Math.PI / 180, new Q(1, 0, 0));
    this.o()
};
u.vi = function(a) {
    (!D(a) || -360 > a || 360 < a) && i(Error("Invalid angle."));
    this.F = this.F.rotate(a * Math.PI / 180, new Q(0, 0, 1));
    this.o()
};
u.Ri = function(a) {
    D(a) || i(Error("Invalid distance."));
    this.F = this.F.translate(new Q(a, 0, 0));
    this.o()
};
u.Si = function(a) {
    D(a) || i(Error("Invalid distance."));
    this.F = this.F.translate(new Q(0, a, 0));
    this.o()
};
u.Ti = function(a) {
    D(a) || i(Error("Invalid distance."));
    this.F = this.F.translate(new Q(0, 0, a));
    this.o()
};

function hd(a, b, c) {
    var d = a.F.V(b, c);
    d || (d = 0);
    a.F.j(b, c, -1 * d);
    a.o()
}
u.oh = function() {
    hd(this, 0, 0)
};
u.ph = function() {
    hd(this, 1, 1)
};
u.qh = function() {
    hd(this, 2, 2)
};
u.o = function() {
    this.yf = new Float32Array(this.F.Fa());
    this.e = o
};
E("X.transform", gd);
E("X.transform.prototype.rotateX", gd.prototype.ti);
E("X.transform.prototype.rotateY", gd.prototype.ui);
E("X.transform.prototype.rotateZ", gd.prototype.vi);
E("X.transform.prototype.translateX", gd.prototype.Ri);
E("X.transform.prototype.translateY", gd.prototype.Si);
E("X.transform.prototype.translateZ", gd.prototype.Ti);
E("X.transform.prototype.flipX", gd.prototype.oh);
E("X.transform.prototype.flipY", gd.prototype.ph);
E("X.transform.prototype.flipZ", gd.prototype.qh);
E("X.transform.prototype.modified", gd.prototype.o);

function id() {
    N.call(this);
    this.c = "texture";
    this.wa = this.ob = this.p = r;
    this.Bb = this.Cb = 0;
    wa(this, new Nc)
}
H(id, N);
E("X.texture", id);

function R(a, b) {
    N.call(this);
    this.c = "triplets";
    this.Ub = Infinity;
    this.Rb = -Infinity;
    this.Vb = Infinity;
    this.Sb = -Infinity;
    this.Wb = Infinity;
    this.Tb = -Infinity;
    this.vd = [0, 0, 0];
    this.t = 0;
    this.K = new Float32Array(a);
    y(b) && (this.K = b.K.subarray(0, b.K.length), this.t = this.K.length, this.Ub = b.Ub, this.Rb = b.Rb, this.Vb = b.Vb, this.Sb = b.Sb, this.Wb = b.Wb, this.Tb = b.Tb, this.vd = b.vd.slice())
}
H(R, N);
u = R.prototype;
u.add = function(a, b, c) {
    this.Ub = Math.min(this.Ub, a);
    this.Rb = Math.max(this.Rb, a);
    this.Vb = Math.min(this.Vb, b);
    this.Sb = Math.max(this.Sb, b);
    this.Wb = Math.min(this.Wb, c);
    this.Tb = Math.max(this.Tb, c);
    this.vd = [(this.Ub + this.Rb) / 2, (this.Vb + this.Sb) / 2, (this.Wb + this.Tb) / 2];
    this.e = o;
    this.K[this.t++] = a;
    this.K[this.t++] = b;
    this.K[this.t++] = c;
    return this.t / 3
};
u.Ic = function() {
    if (this.t != this.K.length) {
        var a = new Float32Array(this.t);
        a.set(this.K.subarray(0, this.t));
        this.K = a
    }
};
u.get = function(a) {
    a *= 3;
    return [this.K[a], this.K[a + 1], this.K[a + 2]]
};
u.remove = function() {
    i(Error("Not implemented."))
};
u.clear = function() {
    this.K = new Float32Array(this.K.length);
    this.e = o
};
R.prototype.__defineGetter__("count", function() {
    this.Ic();
    return this.K.length / 3
});
R.prototype.__defineGetter__("length", function() {
    this.Ic();
    return this.K.length
});
E("X.triplets", R);
E("X.triplets.prototype.add", R.prototype.add);
E("X.triplets.prototype.resize", R.prototype.Ic);
E("X.triplets.prototype.get", R.prototype.get);
E("X.triplets.prototype.remove", R.prototype.remove);
E("X.triplets.prototype.clear", R.prototype.clear);

function jd() {
    this.ka = kd;
    this.bc = new gd;
    this.Lb = [1, 1, 1];
    this.ac = this.A = this.W = this.h = this.g = r;
    this.xc = [];
    this.Ja = o;
    this.uc = this.Wc = 1;
    this.pc = r;
    this.Pc = s;
    this.$ = 1;
    this.Q = 0
}
var kd = "TRIANGLES";
jd.prototype.__defineSetter__("type", function(a) {
    return this.ka = a
});
jd.prototype.__defineGetter__("type", t("ka"));
jd.prototype.__defineGetter__("texture", function() {
    this.A || (this.A = new id);
    return this.A
});
jd.prototype.__defineGetter__("transform", t("bc"));
jd.prototype.__defineGetter__("points", t("g"));
jd.prototype.__defineSetter__("points", ba("g"));
jd.prototype.__defineGetter__("normals", t("h"));
jd.prototype.__defineSetter__("normals", ba("h"));
jd.prototype.__defineGetter__("colors", t("W"));
jd.prototype.__defineSetter__("colors", ba("W"));
jd.prototype.__defineGetter__("color", t("Lb"));
jd.prototype.__defineSetter__("color", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid color."));
    for (var b = this.d, c = b.length, d = 0, d = 0; d < c; d++) b[d].color = a;
    this.Lb = a;
    this.e = o
});
jd.prototype.__defineGetter__("opacity", t("$"));
jd.prototype.__defineSetter__("opacity", function(a) {
    (!D(a) || 1 < a || 0 > a) && i(Error("Invalid opacity."));
    for (var b = this.d, c = b.length, d = 0, d = 0; d < c; d++) b[d].opacity = a;
    this.$ = a;
    this.e = o
});
jd.prototype.__defineGetter__("caption", t("pc"));
jd.prototype.__defineSetter__("caption", function(a) {
    this.pc = a;
    this.e = o
});
jd.prototype.__defineGetter__("visible", t("Ja"));
jd.prototype.__defineSetter__("visible", function(a) {
    for (var b = this.d, c = b.length, d = 0, d = 0; d < c; d++) b[d].visible = a;
    this.Ja = a;
    this.e = o
});
jd.prototype.__defineGetter__("pointsize", t("Wc"));
jd.prototype.__defineSetter__("pointsize", function(a) {
    D(a) || i(Error("Invalid point size."));
    this.Wc = a;
    this.e = o
});
jd.prototype.__defineGetter__("magicmode", t("Pc"));
jd.prototype.__defineSetter__("magicmode", function(a) {
    "boolean" != typeof a && i(Error("Invalid magic mode setting."));
    this.Pc = a;
    this.e = o
});
jd.prototype.__defineGetter__("linewidth", t("uc"));
jd.prototype.__defineSetter__("linewidth", function(a) {
    D(a) || i(Error("Invalid line width."));
    this.uc = a;
    this.e = o
});

function pd() {
    this.Da = Infinity;
    this.Z = this.ta = -Infinity;
    this.aa = Infinity;
    this.xb = [0, 0, 0];
    this.vb = [1, 1, 1]
}
pd.prototype.__defineGetter__("lowerThreshold", t("Z"));
pd.prototype.__defineSetter__("lowerThreshold", ba("Z"));
pd.prototype.__defineGetter__("upperThreshold", t("aa"));
pd.prototype.__defineSetter__("upperThreshold", ba("aa"));
pd.prototype.__defineGetter__("min", t("Da"));
pd.prototype.__defineGetter__("max", t("ta"));
pd.prototype.__defineGetter__("minColor", t("xb"));
pd.prototype.__defineSetter__("minColor", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid min. color."));
    this.xb = a
});
pd.prototype.__defineGetter__("maxColor", t("vb"));
pd.prototype.__defineSetter__("maxColor", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid max. color."));
    this.vb = a
});

function qd() {
    N.call(this);
    this.c = "scalars";
    this.Lc = this.v = r;
    this.If = o;
    this.me = 0;
    wa(this, new Nc);
    wa(this, new pd);
    this.xb = [0, 1, 0];
    this.vb = [1, 0, 0]
}
H(qd, N);
qd.prototype.__defineGetter__("array", t("v"));
qd.prototype.__defineSetter__("array", function(a) {
    this.Lc = this.v = a;
    this.e = o
});
qd.prototype.__defineGetter__("interpolation", t("me"));
qd.prototype.__defineSetter__("interpolation", ba("me"));
E("X.scalars", qd);

function T(a) {
    N.call(this);
    this.c = "object";
    this.d = [];
    this.u = this.ca = r;
    wa(this, new jd);
    y(a) && this.ec(a)
}
H(T, N);
T.prototype.ec = function(a) {
    this.ka = a.ka;
    this.bc = new gd;
    this.bc.F = new ed(a.bc.F.U);
    this.Lb = a.Lb.slice();
    a.g && (this.g = new R(a.g.length, a.g));
    a.h && (this.h = new R(a.h.length, a.h));
    a.W && (this.W = new R(a.W.length, a.W));
    this.A = a.A;
    this.ac = a.ac;
    a.p && (this.p = new Mc((new String(a.p.wc)).toString()));
    this.$ = a.$;
    this.d.length = 0;
    var b = a.d;
    if (b)
        for (var c = b.length, d = 0, d = 0; d < c; d++) this.d.push(new I[b[d].c](b[d]));
    this.Ja = a.Ja;
    this.Wc = a.Wc;
    this.uc = a.uc;
    a.pc && (this.pc = (new String(a.pc)).toString());
    this.Pc = a.Pc;
    this.xc =
        a.xc.slice();
    this.e = o
};
T.prototype.__defineGetter__("colortable", function() {
    this.ca || (this.ca = new Oc);
    return this.ca
});
T.prototype.__defineGetter__("scalars", function() {
    this.u || (this.u = new qd);
    return this.u
});
T.prototype.__defineGetter__("children", t("d"));
T.prototype.o = function() {
    var a = new rd;
    a.R = this;
    this.dispatchEvent(a)
};

function sd(a, b) {
    (!y(a) || !y(b) || !(a instanceof T) || !(b instanceof T)) && i(Error("Fatal: Two valid X.objects are required for comparison."));
    return 1 == a.$ ? -1 : 1 == b.$ ? 1 : y(a.Q) && y(b.Q) && a.Q > b.Q ? -1 : 1
}
E("X.object", T);
E("X.object.prototype.modified", T.prototype.o);

function td() {}

function ud(a) {
    for (var b = a.g.count, c = [], d = 0, d = 0; d < b; d += 3) {
        var e = a.g.get(d),
            f = a.g.get(d + 1),
            g = a.g.get(d + 2),
            h = a.h.get(d),
            k = a.h.get(d + 1),
            l = a.h.get(d + 2),
            j = a.Lb;
        a.W && 0 < a.W.length && (j = a.W.get(d));
        var m = [];
        m.push(new Cc(e, h));
        m.push(new Cc(f, k));
        m.push(new Cc(g, l));
        c.push(new Hc(m, j))
    }
    return Kc(c)
}

function vd(a, b) {
    (!y(b) || !(b instanceof Jc)) && i(Error("Invalid CSG object."));
    var c = new Lc,
        d = [];
    vb(b.C, function(a) {
        for (var b = [], g = a.ge, b = vb(a.ib, function(a) {
                a.color = g;
                return c.add(a)
            }), a = a = 2; a < b.length; a++) d.push([b[0], b[a - 1], b[a]])
    }.bind(a));
    a.Sg = vb(c.unique(), function(a) {
        return [a.za.x(), a.za.y(), a.za.b()]
    });
    a.Rg = vb(c.unique(), function(a) {
        return [a.fa.x(), a.fa.y(), a.fa.b()]
    });
    a.Qg = vb(c.unique(), function(a) {
        return !a.color ? r : [a.color[0], a.color[1], a.color[2]]
    });
    a.g = new R(9 * d.length);
    a.h = new R(9 * d.length);
    a.W = new R(9 * d.length);
    vb(d, function(a) {
        var b = a[0],
            c = a[1],
            a = a[2],
            d = this.Sg,
            k = this.Rg,
            l = this.Qg;
        this.g.add(d[b][0], d[b][1], d[b][2]);
        this.g.add(d[c][0], d[c][1], d[c][2]);
        this.g.add(d[a][0], d[a][1], d[a][2]);
        this.h.add(k[b][0], k[b][1], k[b][2]);
        this.h.add(k[c][0], k[c][1], k[c][2]);
        this.h.add(k[a][0], k[a][1], k[a][2]);
        l[b] && this.W.add(l[b][0], l[b][1], l[b][2]);
        l[c] && this.W.add(l[c][0], l[c][1], l[c][2]);
        l[a] && this.W.add(l[a][0], l[a][1], l[a][2])
    }.bind(a));
    0 == a.W.t && (a.W = r);
    a.ka = kd
}
td.prototype.qf = function(a) {
    (!y(a) || !(a instanceof Jc) && !(a instanceof T)) && i(Error("Invalid object."));
    var b = a;
    a instanceof T && (b = ud(b));
    a = new T;
    wa(a, new td);
    vd(a, ud(this).qf(b));
    return a
};
td.prototype.hb = function(a) {
    (!y(a) || !(a instanceof Jc) && !(a instanceof T)) && i(Error("Invalid object."));
    var b = a;
    a instanceof T && (b = ud(b));
    a = new T;
    wa(a, new td);
    vd(a, ud(this).hb(b));
    return a
};
td.prototype.Te = function(a) {
    (!y(a) || !(a instanceof Jc) && !(a instanceof T)) && i(Error("Invalid object."));
    var b = a;
    a instanceof T && (b = ud(b));
    a = new T;
    wa(a, new td);
    vd(a, ud(this).Te(b));
    return a
};
td.prototype.inverse = function() {
    var a = new T;
    wa(a, new td);
    vd(a, ud(this).inverse());
    return a
};
E("X.constructable", td);
E("X.constructable.prototype.intersect", td.prototype.Te);
E("X.constructable.prototype.inverse", td.prototype.inverse);
E("X.constructable.prototype.subtract", td.prototype.hb);
E("X.constructable.prototype.union", td.prototype.qf);

function wd(a) {
    hc.call(this, a);
    this.c = "event"
}
H(wd, hc);
var xd = Ac("pan"),
    yd = Ac("rotate"),
    zd = Ac("zoom"),
    Ad = Ac("scroll");
Ac("render");
var Bd = Ac("resetview"),
    Cd = Ac("windowlevel"),
    wc = Ac("modified"),
    Dd = Ac("progress"),
    Ed = Ac("hover"),
    Fd = Ac("hover_end"),
    Gd = Ac("paint");

function Hd() {
    wd.call(this, xd);
    this.Q = new Vc(0, 0)
}
H(Hd, wd);

function Id() {
    wd.call(this, yd);
    this.Q = new Vc(0, 0)
}
H(Id, wd);

function Jd() {
    wd.call(this, zd);
    this.kb = this.Pb = s
}
H(Jd, wd);

function Kd() {
    wd.call(this, Ad);
    this.L = s
}
H(Kd, wd);

function Ld() {
    wd.call(this, Ed);
    this.dc = this.cc = 0
}
H(Ld, wd);

function Nd() {
    wd.call(this, Fd)
}
H(Nd, wd);

function Od() {
    wd.call(this, Gd);
    this.dc = this.cc = 0
}
H(Od, wd);

function rd() {
    wd.call(this, wc);
    this.q = this.R = r
}
H(rd, wd);

function Pd() {
    wd.call(this, Dd);
    this.Jf = 0
}
H(Pd, wd);

function Qd(a, b, c) {
    y(a) || i(Error("Invalid GL Buffer."));
    y(b) || i(Error("Invalid number of items."));
    y(c) || i(Error("Invalid item size."));
    N.call(this);
    this.c = "buffer";
    this.ja = a;
    this.sb = b;
    this.tb = c
}
H(Qd, N);

function Rd(a) {
    this.s = a;
    this.ig = M(this.s, Ta ? "DOMMouseScroll" : "mousewheel", this)
}
H(Rd, Bc);
Rd.prototype.handleEvent = function(a) {
    var b = 0,
        c = 0,
        d = 0,
        a = a.Va;
    if ("mousewheel" == a.type) {
        c = 1;
        if (K || Ua && (Ma || hb("532.0"))) c = 40;
        d = Ua && La && 0 != -a.wheelDelta % c ? -a.wheelDelta : -a.wheelDelta / c;
        fa(a.wheelDeltaX) ? (b = Ua && La && 0 != -a.wheelDeltaX % c ? -a.wheelDeltaX : -a.wheelDeltaX / c, c = Ua && La && 0 != -a.wheelDeltaY % c ? -a.wheelDeltaY : -a.wheelDeltaY / c) : c = d
    } else d = a.detail, 100 < d ? d = 3 : -100 > d && (d = -3), fa(a.axis) && a.axis === a.HORIZONTAL_AXIS ? b = d : c = d;
    D(this.kg) && Math.min(Math.max(b, -this.kg), this.kg);
    D(this.lg) && (c = Math.min(Math.max(c, -this.lg), this.lg));
    b = new Sd(d, a, 0, c);
    try {
        this.dispatchEvent(b)
    } finally {
        b.Ma()
    }
};
Rd.prototype.N = function() {
    Rd.k.N.call(this);
    sc(this.ig);
    delete this.ig
};

function Sd(a, b, c, d) {
    b && this.la(b, n);
    this.type = "mousewheel";
    this.detail = a;
    this.Ac = d
}
H(Sd, jc);
K || Ua && hb("525");
var Td;

function Ud(a, b) {
    var c;
    c = (c = a.className) && "function" == typeof c.split ? c.split(/\s+/) : [];
    var d = Bb(arguments, 1),
        e;
    e = c;
    for (var f = 0, g = 0; g < d.length; g++) 0 <= tb(e, d[g]) || (e.push(d[g]), f++);
    e = f == d.length;
    a.className = c.join(" ");
    return e
};
var Vd = !K || kb(9);
!Ta && !K || K && kb(9) || Ta && hb("1.9.1");
K && hb("9");

function Wd(a) {
    return a ? new Xd(Yd(a)) : Td || (Td = new Xd)
}

function Zd(a) {
    return ia(a) ? document.getElementById(a) : a
}

function ae(a, b) {
    lb(b, function(b, d) {
        "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in be ? a.setAttribute(be[d], b) : 0 == d.lastIndexOf("aria-", 0) ? a.setAttribute(d, b) : a[d] = b
    })
}
var be = {
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    colspan: "colSpan",
    rowspan: "rowSpan",
    valign: "vAlign",
    height: "height",
    width: "width",
    usemap: "useMap",
    frameborder: "frameBorder",
    maxlength: "maxLength",
    type: "type"
};

function ce(a, b, c) {
    return de(document, arguments)
}

function de(a, b) {
    var c = b[0],
        d = b[1];
    if (!Vd && d && (d.name || d.type)) {
        c = ["<", c];
        d.name && c.push(' name="', xa(d.name), '"');
        if (d.type) {
            c.push(' type="', xa(d.type), '"');
            var e = {};
            rb(e, d);
            d = e;
            delete d.type
        }
        c.push(">");
        c = c.join("")
    }
    c = a.createElement(c);
    d && (ia(d) ? c.className = d : C(d) ? Ud.apply(r, [c].concat(d)) : ae(c, d));
    2 < b.length && ee(a, c, b);
    return c
}

function ee(a, b, c) {
    function d(c) {
        c && b.appendChild(ia(c) ? a.createTextNode(c) : c)
    }
    for (var e = 2; e < c.length; e++) {
        var f = c[e];
        ha(f) && !(ka(f) && 0 < f.nodeType) ? ub(fe(f) ? Ab(f) : f, d) : d(f)
    }
}

function ge(a) {
    a && a.parentNode && a.parentNode.removeChild(a)
}

function he(a) {
    for (; a && 1 != a.nodeType;) a = a.nextSibling;
    return a
}

function ie(a, b) {
    if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
    if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
    for (; b && a != b;) b = b.parentNode;
    return b == a
}

function Yd(a) {
    return 9 == a.nodeType ? a : a.ownerDocument || a.document
}

function fe(a) {
    if (a && "number" == typeof a.length) {
        if (ka(a)) return "function" == typeof a.item || "string" == typeof a.item;
        if (ja(a)) return "function" == typeof a.item
    }
    return s
}

function Xd(a) {
    this.O = a || ca.document || document
}
u = Xd.prototype;
u.Rd = Wd;
u.i = function(a) {
    return ia(a) ? this.O.getElementById(a) : a
};
u.zc = function(a, b, c) {
    return de(this.O, arguments)
};
u.createElement = function(a) {
    return this.O.createElement(a)
};
u.createTextNode = function(a) {
    return this.O.createTextNode(a)
};

function je(a) {
    return "CSS1Compat" == a.O.compatMode
}

function ke(a) {
    var b = a.O,
        a = !Ua && "CSS1Compat" == b.compatMode ? b.documentElement : b.body,
        b = b.parentWindow || b.defaultView;
    return new Tc(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
}
u.appendChild = function(a, b) {
    a.appendChild(b)
};
u.contains = ie;

function le(a) {
    (!y(a) || !(a instanceof Element)) && i(Error("Could not add interactor to the given element."));
    N.call(this);
    this.c = "interactor";
    this.qc = a;
    this.te = this.Cf = this.Bf = this.Df = this.Af = this.Ef = r;
    this.se = o;
    this.Db = this.wb = this.$a = s;
    this.Bd = [0, 0];
    this.oe = new Vc(0, 0);
    this.X = {
        MOUSEWHEEL_ENABLED: o,
        MOUSECLICKS_ENABLED: o,
        KEYBOARD_ENABLED: o,
        HOVERING_ENABLED: o,
        CONTEXTMENU_ENABLED: s
    }
}
H(le, N);
le.prototype.__defineGetter__("config", t("X"));
le.prototype.__defineGetter__("leftButtonDown", t("$a"));
le.prototype.__defineGetter__("middleButtonDown", t("wb"));
le.prototype.__defineGetter__("rightButtonDown", t("Db"));
le.prototype.la = function() {
    this.X.MOUSEWHEEL_ENABLED ? (this.te = new Rd(this.qc), this.Ef = M(this.te, "mousewheel", this.nd.bind(this))) : (sc(this.Ef), this.te = r);
    this.X.MOUSECLICKS_ENABLED ? (this.Af = M(this.qc, "mousedown", this.Sh.bind(this)), this.Df = M(this.qc, "mouseup", this.Xh.bind(this))) : (sc(this.Af), sc(this.Df));
    this.qc.oncontextmenu = this.X.CONTEXTMENU_ENABLED ? r : function() {
        return s
    };
    window.onkeydown = this.X.KEYBOARD_ENABLED ? this.qg.bind(this) : r;
    sc(this.Bf);
    sc(this.Cf);
    this.Bf = M(this.qc, "mousemove", this.Uh.bind(this));
    this.Cf = M(this.qc, "mouseout", this.Vh.bind(this))
};
le.prototype.Sh = function(a) {
    0 == a.button ? this.$a = o : 1 == a.button ? this.wb = o : 2 == a.button && (this.Db = o);
    eval("this.onMouseDown(" + this.$a + "," + this.wb + "," + this.Db + ")");
    me(this);
    a.preventDefault()
};
le.prototype.Rh = aa();
le.prototype.Xh = function(a) {
    0 == a.button ? this.$a = s : 1 == a.button ? this.wb = s : 2 == a.button && (this.Db = s);
    if (this instanceof ne) {
        var b = new Od;
        b.cc = a.offsetX;
        b.dc = a.offsetY;
        this.dispatchEvent(b)
    }
    eval("this.onMouseUp(" + this.$a + "," + this.wb + "," + this.Db + ")");
    me(this);
    a.preventDefault()
};
le.prototype.__defineGetter__("mousePosition", t("Bd"));
u = le.prototype;
u.Wh = aa();
u.Vh = function(a) {
    this.se = s;
    this.X.KEYBOARD_ENABLED && (window.onkeydown = r);
    this.Db = this.wb = this.$a = s;
    me(this);
    this.oe = new Vc(0, 0);
    a.preventDefault()
};
u.Th = aa();
u.Uh = function(a) {
    this.mousemoveEvent = a;
    eval("this.onMouseMove(this['mousemoveEvent'])");
    this.se = o;
    this.X.KEYBOARD_ENABLED && window.onkeydown == r && (window.onkeydown = this.qg.bind(this));
    a.preventDefault();
    var b = a.shiftKey;
    this.Bd = [a.offsetX, a.offsetY];
    var c = new Vc(this.Bd[0], this.Bd[1]),
        a = this.oe.hb(c);
    this.oe = c.f();
    this.X.HOVERING_ENABLED && ((0 < Math.abs(a.x) || 0 < Math.abs(a.y) || this.wb || this.$a || this.Db) && me(this), this.Qe = setTimeout(function() {
        me(this);
        var a = new Ld;
        a.cc = c.x;
        a.dc = c.y;
        this.dispatchEvent(a);
        this.Qe =
            r
    }.bind(this), 300));
    2 > Math.abs(a.x) && (a.x = 0);
    2 > Math.abs(a.y) && (a.y = 0);
    0 != a.jc() && (this.$a && !b ? (b = new Id, b.Q = a, this.dispatchEvent(b)) : this.wb || this.$a && b ? (b = new Hd, 5 < a.x ? a.x = 5 : -5 > a.x && (a.x = -5), 5 < a.y ? a.y = 5 : -5 > a.y && (a.y = -5), b.Q = a, this.dispatchEvent(b)) : this.Db && (b = new Jd, b.Pb = 0 < a.y, b.kb = s, this.dispatchEvent(b)))
};

function me(a) {
    a.Qe && clearTimeout(a.Qe);
    a.dispatchEvent(new Nd)
}
u.Yh = aa();
u.nd = function(a) {
    this.mouseWheelEvent = a;
    eval("this.onMouseWheel(this['mouseWheelEvent'])");
    me(this);
    a.preventDefault()
};
u.Ph = aa();
u.rotate = function(a, b) {
    var c = new Id,
        d = new Vc(0, 0);
    d.x = a;
    d.y = b;
    c.Q = d;
    this.dispatchEvent(c)
};
u.qg = function(a) {
    if (this.se) {
        this.keyEvent = a;
        eval("this.onKey(this['keyEvent'])");
        me(this);
        var b = a.altKey,
            c = a.shiftKey,
            d = a.keyCode;
        37 <= d && 40 >= d && (a.preventDefault(), a = r, c ? a = new Hd : b ? a = new Jd : (a = new Id, this instanceof ne && (a = new Kd)), a && (c = new Vc(0, 0), 37 == d ? (c.x = 5, a.L = s, b && (a.L = o, a.Pb = o, a.kb = s)) : 39 == d ? (c.x = -5, a.L = o, b && (a.Pb = s, a.kb = s)) : 38 == d ? (c.y = 5, a.L = o, b && (a.Pb = o, a.kb = o)) : 40 == d && (c.y = -5, a.L = s, b && (a.Pb = s, a.kb = o)), a.Q = c, this.dispatchEvent(a)))
    }
};
E("X.interactor", le);
E("X.interactor.prototype.init", le.prototype.la);
E("X.interactor.prototype.onMouseDown", le.prototype.Rh);
E("X.interactor.prototype.onMouseUp", le.prototype.Wh);
E("X.interactor.prototype.onMouseMove", le.prototype.Th);
E("X.interactor.prototype.onMouseWheel", le.prototype.Yh);
E("X.interactor.prototype.onKey", le.prototype.Ph);
E("X.interactor.prototype.rotate", le.prototype.rotate);

function ne(a) {
    le.call(this, a);
    this.c = "interactor2D"
}
H(ne, le);
ne.prototype.nd = function(a) {
    ne.k.nd.call(this, a);
    var b = new Kd;
    y(a.Ac) || (a.Ac = 0);
    b.L = 0 > a.Ac;
    this.dispatchEvent(b)
};

function oe(a, b) {
    (!D(a) || !D(b)) && i(Error("A camera needs valid width and height values."));
    N.call(this);
    this.c = "camera";
    this.va = new Q(0, 0, 100);
    this.rc = new Q(0, 0, 0);
    this.L = new Q(0, 1, 0);
    this.m = this.$d(this.va, this.rc);
    this.Ob = new Float32Array(this.m.Fa())
}
H(oe, N);
oe.prototype.ci = function(a) {
    a instanceof Id || i(Error("Received no valid rotate event."));
    this.rotate(a.Q)
};
oe.prototype.gi = function(a) {
    a instanceof Jd || i(Error("Received no valid zoom event."));
    a.Pb ? this.Kg(a.kb) : this.Lg(a.kb)
};
oe.prototype.$h = function(a) {
    a instanceof Hd || i(Error("Received no valid pan event."));
    this.vg(a.Q)
};
oe.prototype.__defineGetter__("view", t("m"));
oe.prototype.__defineSetter__("view", function(a) {
    (!y(a) || !(a instanceof ed)) && i(Error("Invalid view matrix."));
    this.m = a;
    this.Ob = new Float32Array(this.m.Fa())
});
oe.prototype.__defineGetter__("position", function() {
    return [this.va.x, this.va.y, this.va.b]
});
oe.prototype.__defineSetter__("position", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid position."));
    this.va = new Q(a[0], a[1], a[2]);
    this.reset()
});
oe.prototype.__defineGetter__("focus", function() {
    return [this.rc.x, this.rc.y, this.rc.b]
});
oe.prototype.__defineSetter__("focus", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid focus"));
    this.rc = new Q(a[0], a[1], a[2]);
    this.reset()
});
oe.prototype.__defineGetter__("up", function() {
    return [this.L.x, this.L.y, this.L.b]
});
oe.prototype.__defineSetter__("up", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid up vector."));
    this.L = new Q(a[0], a[1], a[2]);
    this.reset()
});
u = oe.prototype;
u.reset = function() {
    this.m = this.$d(this.va, this.rc);
    this.Ob = new Float32Array(this.m.Fa())
};
u.rotate = function(a) {
    C(a) && 2 == a.length ? a = new Vc(a[0], a[1]) : a instanceof Vc || i(Error("Invalid distance vector for rotate operation."));
    return a
};
u.vg = function(a) {
    C(a) && 2 == a.length ? a = new Vc(a[0], a[1]) : a instanceof Vc || i(Error("Invalid distance vector for pan operation."));
    a = new Q(-a.x, a.y, 0);
    a = fd(4).translate(a);
    this.m = new ed(a.multiply(this.m));
    this.Ob = new Float32Array(this.m.Fa())
};
u.Kg = function(a) {
    var b = 20;
    y(a) && !a && (b = 1);
    a = new Q(0, 0, b);
    a = fd(4).translate(a);
    this.m = new ed(a.multiply(this.m));
    this.Ob = new Float32Array(this.m.Fa())
};
u.Lg = function(a) {
    var b = 30;
    y(a) && !a && (b = 1);
    a = new Q(0, 0, -b);
    a = fd(4).translate(a);
    this.m = new ed(a.multiply(this.m));
    this.Ob = new Float32Array(this.m.Fa())
};
u.$d = function(a, b) {
    (!(a instanceof Q) || !(b instanceof Q)) && i(Error("3D vectors required for calculating the view."));
    return fd(4)
};
E("X.camera", oe);
E("X.camera.prototype.pan", oe.prototype.vg);
E("X.camera.prototype.rotate", oe.prototype.rotate);
E("X.camera.prototype.zoomIn", oe.prototype.Kg);
E("X.camera.prototype.zoomOut", oe.prototype.Lg);

function qe(a, b) {
    oe.call(this, a, b);
    this.c = "camera3D";
    this.wf = 45;
    this.Ff = new Float32Array(re(this.wf, a / b).Fa())
}
H(qe, oe);

function re(a, b) {
    var c = 1 * Math.tan(a * Math.PI / 360),
        d = -c;
    return new ed([
        [2 / (c * b - d * b), 0, (c * b + d * b) / (c * b - d * b), 0],
        [0, 2 / (c - d), (c + d) / (c - d), 0],
        [0, 0, -10001 / 9999, -2.000200020002],
        [0, 0, -1, 0]
    ])
}
qe.prototype.rotate = function(a) {
    var a = qe.k.rotate.call(this, a),
        b = -a.x / 5 * Math.PI / 180,
        a = -a.y / 5 * Math.PI / 180,
        c = fd(4),
        d = new Q(parseFloat(this.m.V(0, 0)), parseFloat(this.m.V(0, 1)), parseFloat(this.m.V(0, 2))),
        b = c.rotate(b, new Q(parseFloat(this.m.V(1, 0)), parseFloat(this.m.V(1, 1)), parseFloat(this.m.V(1, 2)))),
        a = c.rotate(a, d);
    this.m = new ed(this.m.multiply(a.multiply(b)));
    this.Ob = new Float32Array(this.m.Fa())
};
qe.prototype.$d = function(a, b) {
    qe.k.$d.call(this, a, b);
    var c = fd(4),
        d = new Q(a.x - b.x, a.y - b.y, a.b - b.b),
        d = d.normalize(),
        e = this.L.f();
    e.dd(d) && (e.b += 1.0E-6);
    var f = Sc(e, d),
        e = Sc(d, f),
        f = f.normalize(),
        e = e.normalize();
    c.j(0, 0, f.x);
    c.j(0, 1, f.y);
    c.j(0, 2, f.b);
    c.j(0, 3, 0);
    c.j(1, 0, e.x);
    c.j(1, 1, e.y);
    c.j(1, 2, e.b);
    c.j(1, 3, 0);
    c.j(2, 0, d.x);
    c.j(2, 1, d.y);
    c.j(2, 2, d.b);
    c.j(2, 3, 0);
    c.j(3, 0, 0);
    c.j(3, 1, 0);
    c.j(3, 2, 0);
    c.j(3, 3, 1);
    d = a.f();
    return c.translate(d.ba())
};
E("X.camera3D", qe);

function V() {
    N.call(this);
    this.c = "parser";
    this.P = r;
    this.t = 0;
    this.Vg = 0 < (new Int8Array((new Int16Array([1])).buffer))[0];
    this.vc = o
}
H(V, N);
V.prototype.parse = function() {
    i(Error("The function parse() should be overloaded."))
};
V.prototype.parse = function() {
    i(Error("The function parse() should be overloaded."))
};

function se(a) {
    for (var b = Infinity, c = -Infinity, d = a.length, e = 0, e = 0; e < d; e++) var f = a[e],
        b = Math.min(b, f),
        c = Math.max(c, f);
    return [b, c]
}

function $(a, b, c) {
    y(c) || (c = 1);
    var d = 1,
        e = Uint8Array;
    switch (b) {
        case "schar":
            e = Int8Array;
            break;
        case "ushort":
            e = Uint16Array;
            d = 2;
            break;
        case "sshort":
            e = Int16Array;
            d = 2;
            break;
        case "uint":
            e = Uint32Array;
            d = 4;
            break;
        case "sint":
            e = Int32Array;
            d = 4;
            break;
        case "float":
            e = Float32Array, d = 4
    }
    b = new e(a.P.slice(a.t, a.t += c * d));
    a.Vg != a.vc && (b = te(b, d));
    return 1 == c ? b[0] : b
}

function te(a, b) {
    for (var c = new Uint8Array(a.buffer, a.byteOffset, a.byteLength), d = 0; d < a.byteLength; d += b)
        for (var e = d + b - 1, f = d; e > f; e--, f++) {
            var g = c[f];
            c[f] = c[e];
            c[e] = g
        }
    return a
}

function ue(a, b, c) {
    I.ra(a.c + ".reslice");
    var d = b.Y,
        e = c.max,
        f = c.data,
        g = d[2],
        h = d[1],
        d = d[0],
        k = b.n != r,
        l = h * d,
        j = Array(g),
        m = Array(g),
        p = 0,
        q = r;
    b.ca && (q = b.ca.ub);
    for (var v = 0, w = 0, z = 0, A = 0, x = 4 * l, v = 0; v < g; v++) {
        j[v] = Array(h);
        m[v] = Array(h);
        for (var B = f.subarray(v * l, (v + 1) * l), F = new Uint8Array(x), w = A = 0; w < h; w++) {
            j[v][w] = new c.data.constructor(d);
            m[v][w] = new c.data.constructor(d);
            for (z = 0; z < d; z++) {
                var p = B[A],
                    O = 0,
                    Y = 0,
                    G = 0,
                    L = 0;
                q ? (L = q.get(Math.floor(p)), L || (O = q.Na(), L = O[O.length - 1]), O = 255 * L[1], Y = 255 * L[2], G = 255 * L[3], L = 255 * L[4]) :
                    (O = Y = G = 255 * (p / e), L = 255);
                var J = 4 * A;
                F[J] = O;
                F[++J] = Y;
                F[++J] = G;
                F[++J] = L;
                j[v][w][z] = 255 * (p / e);
                m[v][w][z] = p;
                A++
            }
        }
        p = new id;
        p.wa = F;
        p.Cb = d;
        p.Bb = h;
        B = b.bb.d[v];
        B.A = p;
        k && (B.n = b.n.bb.d[v].A)
    }
    d != h ? k ? b.ca ? (ve(g, d, h, m, b.ca, b.T, b.n.T, o), ve(g, h, d, m, b.ca, b.S, b.n.S, s)) : (we(g, d, h, j, b.T, b.n.T, o), we(g, h, d, j, b.S, b.n.S, s)) : b.ca ? (ve(g, d, h, m, b.ca, b.T, r, o), ve(g, h, d, m, b.ca, b.S, r, s)) : (we(g, d, h, j, b.T, r, o), we(g, h, d, j, b.S, r, s)) : k ? b.ca ? xe(g, d, h, j, b.ca, b.S, b.n.S, b.T, b.n.T) : ye(g, d, h, j, b.S, b.n.S, b.T, b.n.T) : b.ca ? xe(g, d, h, m, b.ca, b.S, r,
        b.T, r) : ye(g, d, h, j, b.S, r, b.T, r);
    I.ma(a.c + ".reslice");
    return m
}

function we(a, b, c, d, e, f, g) {
    for (var h = 4 * a * b, k = 0, k = 0; k < c; k++) {
        for (var l = new Uint8Array(h), j = 0, m = 0, j = 0; j < a; j++)
            for (var p = 0, q = d[j], p = 0; p < b; p++) {
                var v, w = v = g ? q[k][p] : q[p][k],
                    z = v,
                    A = 4 * m;
                l[A] = v;
                l[++A] = w;
                l[++A] = z;
                l[++A] = 255;
                m++
            }
        j = new id;
        j.wa = l;
        j.Cb = b;
        j.Bb = a;
        l = e.d[k];
        l.A = j;
        f && (l.n = f.d[k].A)
    }
}

function ve(a, b, c, d, e, f, g, h) {
    for (var e = e.ub, k = 4 * a * b, l = 0, l = 0; l < c; l++) {
        for (var j = new Uint8Array(k), m = 0, p = 0, m = 0; m < a; m++)
            for (var q = d[m], v = 0, v = 0; v < b; v++) {
                var w = e.get(Math.floor(h ? q[l][v] : q[v][l]));
                w || (w = e.Na(), w = w[w.length - 1]);
                var z = 255 * w[2],
                    A = 255 * w[3],
                    x = 255 * w[4],
                    B = 4 * p;
                j[B] = 255 * w[1];
                j[++B] = z;
                j[++B] = A;
                j[++B] = x;
                p++
            }
        m = new id;
        m.wa = j;
        m.Cb = b;
        m.Bb = a;
        j = f.d[l];
        j.A = m;
        g && (j.n = g.d[l].A)
    }
}

function ye(a, b, c, d, e, f, g, h) {
    for (var k = 4 * a * b, l = 0, l = 0; l < c; l++) {
        for (var j = new Uint8Array(k), m = new Uint8Array(k), p = 0, q = 0, q = 0; q < a; q++)
            for (var v = d[q], w = 0, w = 0; w < b; w++) {
                var z = v[w][l],
                    A = z,
                    x = z,
                    B = 4 * p;
                j[B] = z;
                j[++B] = A;
                j[++B] = x;
                j[++B] = 255;
                x = A = z = B = v[l][w];
                B = 4 * p;
                m[B] = z;
                m[++B] = A;
                m[++B] = x;
                m[++B] = 255;
                p++
            }
        p = new id;
        p.wa = j;
        p.Cb = b;
        p.Bb = a;
        j = e.d[l];
        j.A = p;
        f && (j.n = f.d[l].A);
        j = new id;
        j.wa = m;
        j.Cb = b;
        j.Bb = a;
        m = g.d[l];
        m.A = j;
        h && (m.n = h.d[l].A)
    }
}

function xe(a, b, c, d, e, f, g, h, k) {
    for (var e = e.ub, l = 4 * a * b, j = 0, j = 0; j < c; j++) {
        for (var m = new Uint8Array(l), p = new Uint8Array(l), q = 0, v = 0, v = 0; v < a; v++)
            for (var w = d[v], z = 0, z = 0; z < b; z++) {
                var A = e.get(Math.floor(w[z][j]));
                if (!A) var x = e.Na(),
                    A = x[x.length - 1];
                var B = 255 * A[2],
                    F = 255 * A[3],
                    O = 255 * A[4],
                    x = 4 * q;
                m[x] = 255 * A[1];
                m[++x] = B;
                m[++x] = F;
                m[++x] = O;
                x = e.get(Math.floor(w[j][z]));
                x || (x = e.Na(), x = x[x.length - 1]);
                A = 255 * x[1];
                B = 255 * x[2];
                F = 255 * x[3];
                O = 255 * x[4];
                x = 4 * q;
                p[x] = A;
                p[++x] = B;
                p[++x] = F;
                p[++x] = O;
                q++
            }
        q = new id;
        q.wa = m;
        q.Cb = b;
        q.Bb = a;
        m =
            f.d[j];
        m.A = q;
        g && (m.n = g.d[j].A);
        m = new id;
        m.wa = p;
        m.Cb = b;
        m.Bb = a;
        p = h.d[j];
        p.A = m;
        k && (p.n = k.d[j].A)
    }
};

function ze() {
    V.call(this);
    this.c = "parserIMAGE"
}
H(ze, V);
ze.prototype.parse = function(a, b, c, d) {
    c instanceof ArrayBuffer || i(Error());
    for (var e = new Uint8Array(c), f = e.length, g = Array(f); f--;) g[f] = String.fromCharCode(e[f]);
    e = window.btoa(g.join(""));
    f = new Image;
    qc(f, "load", this.hi.bind(this, f, a, b, c, d));
    f.src = "data:image/" + d + ";base64," + e
};
ze.prototype.hi = function(a, b, c) {
    b.ob = a;
    b.wa = r;
    a = new rd;
    a.R = c;
    a.q = b;
    this.dispatchEvent(a)
};
E("X.parserIMAGE", ze);
E("X.parserIMAGE.prototype.parse", ze.prototype.parse);

function Ae(a, b) {
    oe.call(this, a, b);
    this.c = "camera2D"
}
H(Ae, oe);

function Be() {
    N.call(this);
    this.c = "shaders";
    this.Id = "";
    this.Id = "precision mediump float;\n\nattribute vec3 vertexPosition;\nattribute vec3 vertexNormal;\nattribute vec3 vertexColor;\nattribute vec2 vertexTexturePos;\nattribute float vertexScalar;\n\nuniform mat4 view;\nuniform mat4 perspective;\nuniform vec3 center;\nuniform mat4 objectTransform;\nuniform bool useObjectColor;\nuniform bool useScalars;\nuniform bool scalarsReplaceMode;\nuniform float scalarsMin;\nuniform float scalarsMax;\nuniform vec3 scalarsMinColor;\nuniform vec3 scalarsMaxColor;\nuniform float scalarsMinThreshold;\nuniform float scalarsMaxThreshold;\nuniform int scalarsInterpolation;\nuniform vec3 objectColor;\nuniform float pointSize;\n\nvarying float fDiscardNow;\nvarying vec4 fVertexPosition;\nvarying vec3 fragmentColor;\nvarying vec2 fragmentTexturePos;\nvarying vec3 fVertexNormal;\nvarying vec3 fTransformedVertexNormal;\n\nvoid main(void) {\n  fTransformedVertexNormal = mat3(view[0].xyz,view[1].xyz,view[2].xyz) * mat3(objectTransform[0].xyz,objectTransform[1].xyz,objectTransform[2].xyz) * vertexNormal;\n  fVertexNormal = vertexNormal;\n  fDiscardNow = 0.0;\n  vec3 vertexPosition2 = vertexPosition - center;\n  fVertexPosition = view * objectTransform * vec4(vertexPosition2, 1.0);\n  fragmentTexturePos = vertexTexturePos;\n  if (useScalars) {\n    float scalarValue = vertexScalar;\n    if (scalarValue < scalarsMinThreshold || scalarValue > scalarsMaxThreshold) {\n      if (scalarsReplaceMode) {\n        fragmentColor = objectColor;\n      } else {\n        fDiscardNow = 1.0;\n      }\n    } else {\n      if (scalarsReplaceMode) {\n        if (scalarsInterpolation == 1) {\n            vec3 zeroMaxColor;\n            vec3 zeroMinColor;\n            zeroMaxColor[0] = scalarsMaxColor[0]*0.33;\n            zeroMaxColor[1] = scalarsMaxColor[1]*0.33;\n            zeroMaxColor[2] = scalarsMaxColor[2]*0.33;\n            zeroMinColor[0] = scalarsMinColor[0]*0.33;\n            zeroMinColor[1] = scalarsMinColor[1]*0.33;\n            zeroMinColor[2] = scalarsMinColor[2]*0.33;\n            if(scalarValue < 0.0) {fragmentColor = scalarValue/(scalarsMin) * scalarsMinColor + (1.0 - scalarValue/(scalarsMin)) * (zeroMinColor);}\n            else {fragmentColor = scalarValue/(scalarsMax) * scalarsMaxColor + (1.0 - scalarValue/(scalarsMax)) * (zeroMaxColor);}\n        } else {\n            fragmentColor = scalarValue * scalarsMaxColor + (1.0 - scalarValue) * scalarsMinColor;\n          }\n      } else {\n        fragmentColor = vertexColor;\n      }\n    }\n  } else if (useObjectColor) {\n    fragmentColor = objectColor;\n  } else {\n    fragmentColor = vertexColor;\n  }\n  gl_PointSize = pointSize;\n  gl_Position = perspective * fVertexPosition;\n}\n";
    this.yd = "";
    this.yd = "precision mediump float;\n\nuniform bool usePicking;\nuniform bool useTexture;\nuniform bool volumeTexture;\nuniform bool useLabelMapTexture;\nuniform sampler2D textureSampler;\nuniform sampler2D textureSampler2;\nuniform float objectOpacity;\nuniform float labelmapOpacity;\nuniform float volumeLowerThreshold;\nuniform float volumeUpperThreshold;\nuniform float volumeScalarMin;\nuniform float volumeScalarMax;\nuniform vec3 volumeScalarMinColor;\nuniform vec3 volumeScalarMaxColor;\nuniform float volumeWindowLow;\nuniform float volumeWindowHigh;\n\nvarying float fDiscardNow;\nvarying vec4 fVertexPosition;\nvarying vec3 fragmentColor;\nvarying vec2 fragmentTexturePos;\nvarying vec3 fVertexNormal;\nvarying vec3 fTransformedVertexNormal;\n\nvoid main(void) {\n if (fDiscardNow > 0.0) {\n   discard;\n }\n if (usePicking) {\n   gl_FragColor = vec4(fragmentColor, 1.0);\n } else if (useTexture) {\n   vec4 texture1 = texture2D(textureSampler,fragmentTexturePos);\n   vec4 textureSum = texture1;\n   if (volumeTexture) {\n     float _windowLow = (volumeWindowLow / volumeScalarMax);\n     float _windowHigh = (volumeWindowHigh / volumeScalarMax);\n     vec3 _minrange = vec3(_windowLow,_windowLow,_windowLow);\n     vec3 _maxrange = vec3(_windowHigh,_windowHigh,_windowHigh);\n     vec3 fac = _maxrange - _minrange;\n     textureSum = vec4((textureSum.r - _minrange)/fac,1);\n     textureSum = textureSum.r * vec4(volumeScalarMaxColor,1) + (1.0 - textureSum.r) * vec4(volumeScalarMinColor,1);\n   }\n   if (useLabelMapTexture) {\n     vec4 texture2 = texture2D(textureSampler2,fragmentTexturePos);\n     if (texture2.a > 0.0) {\n       if (labelmapOpacity < 1.0) {\n         textureSum = mix(texture2, textureSum, 1.0 - labelmapOpacity);\n       } else {\n         textureSum = texture2;\n       }\n     }\n   }\n   if (volumeTexture) {\n     float _volumeLowerThreshold = (volumeLowerThreshold / volumeScalarMax);\n     float _volumeUpperThreshold = (volumeUpperThreshold / volumeScalarMax);\n     if (texture1.r < _volumeLowerThreshold ||\n         texture1.r > _volumeUpperThreshold) {\n       discard;\n     };\n   };\n   gl_FragColor = textureSum;\n   gl_FragColor.a = objectOpacity;\n } else {\n   vec3 nNormal = normalize(fTransformedVertexNormal);\n   if (fVertexNormal == vec3(0.0,0.0,0.0)) {\n     gl_FragColor = vec4(fragmentColor,1.0);\n     return;\n   }\n   vec3 light = vec3(0.0, 0.0, 1.0);\n   vec3 lightDirection = vec3(0,0,-10);\n   lightDirection = normalize(lightDirection);\n   vec3 eyeDirection = normalize(-fVertexPosition.xyz);\n   vec3 reflectionDirection = reflect(-lightDirection, nNormal);\n   float specular = pow(max(dot(reflectionDirection, eyeDirection), 0.0), 10.0);\n   float diffuse = 0.8 * max(dot(nNormal, light), 0.0);\n   float ambient = 0.3;\n   gl_FragColor = vec4(fragmentColor * ambient +\n                       fragmentColor * diffuse +\n                       vec3(0.2, 0.2, 0.2) * specular,\n                       objectOpacity);\n }\n}\n"
}
H(Be, N);
var Ce = {
        xj: "vertexPosition",
        wj: "vertexNormal",
        vj: "vertexColor",
        zj: "vertexTexturePos",
        yj: "vertexScalar"
    },
    De = {
        Aj: "view",
        ej: "perspective",
        Xi: "center",
        dj: "objectTransform",
        rj: "useObjectColor",
        bj: "objectColor",
        tj: "useScalars",
        nj: "scalarsReplaceMode",
        kj: "scalarsMin",
        hj: "scalarsMax",
        lj: "scalarsMinColor",
        ij: "scalarsMaxColor",
        mj: "scalarsMinThreshold",
        jj: "scalarsMaxThreshold",
        gj: "scalarsInterpolation",
        fj: "pointSize",
        cj: "objectOpacity",
        aj: "normal",
        sj: "usePicking",
        uj: "useTexture",
        qj: "useLabelMapTexture",
        Zi: "labelmapOpacity",
        oj: "textureSampler",
        pj: "textureSampler2",
        Bj: "volumeLowerThreshold",
        Hj: "volumeUpperThreshold",
        Ej: "volumeScalarMin",
        Cj: "volumeScalarMax",
        Fj: "volumeScalarMinColor",
        Dj: "volumeScalarMaxColor",
        Jj: "volumeWindowLow",
        Ij: "volumeWindowHigh",
        Gj: "volumeTexture"
    };

function Ee(a) {
    var b = Object.keys(De);
    Object.keys(Ce).every(function(a) {
        a = Ce[a];
        return -1 != this.Id.search(a) || -1 != this.yd.search(a)
    }.bind(a)) || i(Error("Could not find all attributes in the shader sources."));
    b.every(function(a) {
        a = De[a];
        return -1 != this.Id.search(a) || -1 != this.yd.search(a)
    }.bind(a)) || i(Error("Could not find all uniforms in the shader sources."))
};

function Fe(a) {
    T.call(this);
    this.c = "slice";
    this.l = [0, 0, 0];
    this.sc = [0, 0, 1];
    this.L = [0, 1, 0];
    this.w = this.B = 10;
    this.ac = [0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0];
    this.n = this.eb = r;
    this.Sa = o;
    this.oc = [1, 1, 1];
    y(a) && this.ec(a)
}
H(Fe, T);
Fe.prototype.ec = function(a) {
    this.l = a.l.slice();
    this.sc = a.sc.slice();
    this.L = a.L.slice();
    this.B = a.B;
    this.w = a.w;
    this.eb = a.eb;
    this.n = a.n;
    this.Sa = a.Sa;
    this.oc = a.oc;
    this.Ug = a.Ug;
    Fe.k.ec.call(this, a)
};
Fe.prototype.fc = function() {
    var a = new Q(this.sc[0], this.sc[1], this.sc[2]),
        b = new Q(this.L[0], this.L[1], this.L[2]),
        c = Sc(b, a),
        d = new Q(this.l[0], this.l[1], this.l[2]),
        e = new Q(1, 1, 1);
    1 == a.x ? (e = new Q(this.l[0], this.w / 2, this.B / 2), this.ac = [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0]) : 1 == a.y ? (e = new Q(this.B / 2, this.l[1], this.w / 2), this.ac = [0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1]) : 1 == a.b && (e = new Q(this.B / 2, this.w / 2, this.l[2]));
    var f = Rc(c.f().ba(), b.f().ba()),
        f = new Q(f.x * e.x, f.y * e.y, f.b * e.b);
    f.add(d);
    var g = Rc(c.f().ba(), b),
        g = new Q(g.x * e.x, g.y * e.y,
            g.b * e.b);
    g.add(d);
    var h = Rc(c, b.f().ba()),
        h = new Q(h.x * e.x, h.y * e.y, h.b * e.b);
    h.add(d);
    var k = h,
        b = Rc(c, b),
        b = new Q(b.x * e.x, b.y * e.y, b.b * e.b);
    b.add(d);
    d = g;
    this.g = new R(18);
    this.h = new R(18);
    this.g.add(f.x, f.y, f.b);
    this.g.add(g.x, g.y, g.b);
    this.g.add(h.x, h.y, h.b);
    this.g.add(k.x, k.y, k.b);
    this.g.add(b.x, b.y, b.b);
    this.g.add(d.x, d.y, d.b);
    this.h.add(a.x, a.y, a.b);
    this.h.add(a.x, a.y, a.b);
    this.h.add(a.x, a.y, a.b);
    this.h.add(a.x, a.y, a.b);
    this.h.add(a.x, a.y, a.b);
    this.h.add(a.x, a.y, a.b);
    this.Sa && (a = new T, a.g = new R(24),
        a.h = new R(24), a.g.add(f.x, f.y, f.b), a.g.add(g.x, g.y, g.b), a.g.add(g.x, g.y, g.b), a.g.add(b.x, b.y, b.b), a.g.add(b.x, b.y, b.b), a.g.add(h.x, h.y, h.b), a.g.add(h.x, h.y, h.b), a.g.add(f.x, f.y, f.b), a.h.add(0, 0, 0), a.h.add(0, 0, 0), a.h.add(0, 0, 0), a.h.add(0, 0, 0), a.h.add(0, 0, 0), a.h.add(0, 0, 0), a.h.add(0, 0, 0), a.h.add(0, 0, 0), a.Lb = [this.oc[0], this.oc[1], this.oc[2]], a.ka = "LINES", a.uc = 2, this.d.push(a))
};
E("X.slice", Fe);

function P(a) {
    T.call(this);
    this.c = "volume";
    this.l = [0, 0, 0];
    this.Y = [10, 10, 10];
    this.G = [1, 1, 1];
    this.ob = [];
    this.Oc = this.rb = this.Nc = this.qb = this.Mc = this.pb = 0;
    this.S = new T;
    this.T = new T;
    this.bb = new T;
    this.Jd = this.Ka = s;
    this.Eb = 0;
    this.n = r;
    this.Sa = o;
    this.ea = Infinity;
    this.da = -Infinity;
    wa(this, new Nc);
    wa(this, new pd);
    y(a) && this.ec(a)
}
H(P, T);
P.prototype.ec = function(a) {
    window.console.log(a);
    this.l = a.l.slice();
    this.Y = a.Y.slice();
    this.G = a.G.slice();
    this.pb = a.pb;
    this.Mc = a.Mc;
    this.qb = a.qb;
    this.Nc = a.Nc;
    this.rb = a.rb;
    this.Oc = a.Oc;
    this.S = new T(a.S);
    this.T = new T(a.T);
    this.bb = new T(a.bb);
    this.Ka = a.Ka;
    this.Jd = a.Jd;
    this.Eb = a.Eb;
    this.n = a.n;
    this.Sa = a.Sa;
    P.k.ec.call(this, a)
};
P.prototype.fc = function() {
    this.d.length = 0;
    this.S.d.length = 0;
    this.T.d.length = 0;
    this.bb.d.length = 0;
    this.d.push(this.S);
    this.d.push(this.T);
    this.d.push(this.bb);
    for (var a = 0, a = 0; 3 > a; a++) {
        for (var b = (this.Y[a] - 1) / 2, c = b, d = 0, d = 0; d < this.Y[a]; d++) {
            var e = -b * this.G[a] + d * this.G[a],
                f = [
                    [this.l[0] + e, this.l[1], this.l[2]],
                    [this.l[0], this.l[1] + e, this.l[2]],
                    [this.l[0], this.l[1], this.l[2] + e]
                ],
                e = this.d[a].d,
                g = 0,
                h = 0,
                k = [1, 1, 1],
                l = this.Sa;
            0 == a ? (g = this.Y[2] * this.G[2] - this.G[2], h = this.Y[1] * this.G[1] - this.G[1], k = [1, 1, 0]) : 1 ==
                a ? (g = this.Y[0] * this.G[0] - this.G[0], h = this.Y[2] * this.G[2] - this.G[2], k = [1, 0, 0]) : 2 == a && (g = this.Y[0] * this.G[0] - this.G[0], h = this.Y[1] * this.G[1] - this.G[1], k = [0, 1, 0]);
            y(this.eb) && (l = s);
            var j = new Fe,
                m = j,
                f = f[a],
                p = [
                    [1, 0, 0],
                    [0, 1, 0],
                    [0, 0, 1]
                ][a],
                q = [
                    [0, 1, 0],
                    [0, 0, -1],
                    [0, 1, 0]
                ][a];
            (!y(f) || !C(f) || 3 != f.length) && i(Error("Invalid center."));
            (!y(p) || !C(p) || 3 != p.length) && i(Error("Invalid front direction."));
            (!y(q) || !C(q) || 3 != q.length) && i(Error("Invalid up direction."));
            D(g) || i(Error("Invalid width."));
            D(h) || i(Error("Invalid height."));
            var v = s;
            y(l) && (v = l);
            l = [1, 1, 1];
            y(k) && (l = k);
            m.l = f;
            m.sc = p;
            m.L = q;
            m.B = g;
            m.w = h;
            m.Sa = v;
            m.oc = l;
            m.fc();
            j.eb = this;
            j.visible = d == Math.floor(c);
            e.push(j)
        }
        0 == a ? this.Mc = this.pb = c : 1 == a ? this.Nc = this.qb = c : 2 == a && (this.Oc = this.rb = c)
    }
    this.e = o
};
P.prototype.o = function(a) {
    a = "undefined" !== typeof a ? a : o;
    if (0 < this.d.length)
        if (this.Ka != this.Jd && (this.Ka ? (this.d[0].d[parseInt(this.pb, 10)].visible = s, this.d[1].d[parseInt(this.qb, 10)].visible = s, this.d[2].d[parseInt(this.rb, 10)].visible = s) : this.d[this.Eb].visible = s, this.e = o, this.Jd = this.Ka), this.Ka) Ge(this, this.Eb);
        else
            for (var b = 0, b = 0; 3 > b; b++) {
                var c = this.d[b],
                    d = 0,
                    e = 0;
                0 == b ? (d = this.pb, e = this.Mc, this.Mc = this.pb) : 1 == b ? (d = this.qb, e = this.Nc, this.Nc = this.qb) : 2 == b && (d = this.rb, e = this.Oc, this.Oc = this.rb);
                c.d[parseInt(e,
                    10)].visible = s;
                c = c.d[parseInt(d, 10)];
                c.visible = o;
                c.$ = 1
            }
    a && P.k.o.call(this)
};
P.prototype.__defineGetter__("dimensions", t("Y"));
P.prototype.__defineGetter__("volumeRendering", t("Ka"));
P.prototype.__defineSetter__("volumeRendering", function(a) {
    this.Ka = a;
    this.o(s)
});
P.prototype.__defineSetter__("visible", ba("Ja"));
P.prototype.__defineGetter__("center", t("l"));
P.prototype.__defineSetter__("center", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid center."));
    this.l = a
});
P.prototype.__defineGetter__("image", t("ob"));
P.prototype.__defineGetter__("labelmap", function() {
    this.n || (this.n = new He(this));
    return this.n
});
P.prototype.__defineGetter__("indexX", t("pb"));
P.prototype.__defineSetter__("indexX", function(a) {
    D(a) && 0 <= a && a < this.S.d.length && (this.pb = a, this.o(s))
});
P.prototype.__defineGetter__("indexY", t("qb"));
P.prototype.__defineSetter__("indexY", function(a) {
    D(a) && 0 <= a && a < this.T.d.length && (this.qb = a, this.o(s))
});
P.prototype.__defineGetter__("indexZ", t("rb"));
P.prototype.__defineSetter__("indexZ", function(a) {
    D(a) && 0 <= a && a < this.bb.d.length && (this.rb = a, this.o(s))
});
P.prototype.__defineGetter__("windowLow", t("ea"));
P.prototype.__defineSetter__("windowLow", ba("ea"));
P.prototype.__defineGetter__("windowHigh", t("da"));
P.prototype.__defineSetter__("windowHigh", ba("da"));
P.prototype.__defineGetter__("borders", t("Sa"));
P.prototype.__defineSetter__("borders", ba("Sa"));

function Ge(a, b) {
    if (a.Ka && (a.e || b != a.Eb)) {
        var c = a.d[a.Eb];
        c.visible = s;
        var c = a.d[b],
            d = c.d.length,
            e;
        for (e = 0; e < d; e++) c.d[e].Ja = o;
        a.Eb = b;
        a.e = s
    }
}
E("X.volume", P);
E("X.volume.prototype.modified", P.prototype.o);

function Ie() {
    V.call(this);
    this.c = "parserSTL"
}
H(Ie, V);
Ie.prototype.parse = function(a, b, c) {
    I.ra(this.c + ".parse");
    this.P = c;
    var d = b.g,
        e = b.h;
    if ("solid" == String.fromCharCode.apply(r, $(this, "uchar", 5))) {
        b.g = d = new R(c.byteLength);
        b.h = e = new R(c.byteLength);
        var f = d,
            d = e,
            e = $(this, "uchar", c.byteLength - 5),
            c = e.length,
            g = s,
            h = s,
            k = 0,
            l;
        for (l = 0; l < c; l++)
            if (10 == e[l]) {
                if (g || h) {
                    var j = String.fromCharCode.apply(r, e.subarray(k, l)).split(" "),
                        h = parseFloat(j[0]),
                        m = parseFloat(j[1]),
                        j = parseFloat(j[2]);
                    g ? (d.add(h, m, j), d.add(h, m, j), d.add(h, m, j)) : f.add(h, m, j);
                    h = g = s
                }
            } else 32 == e[l - 1] &&
                (102 == e[l] ? (k = l += 13, g = o) : 118 == e[l] && (k = l += 7, h = o))
    } else {
        this.t = 80;
        f = $(this, "uint");
        b.g = d = new R(9 * f);
        b.h = e = new R(9 * f);
        for (c = c = 0; c < f; c++) g = $(this, "float", 12), k = g[0], l = g[1], h = g[2], e.add(k, l, h), e.add(k, l, h), e.add(k, l, h), d.add(g[3], g[4], g[5]), d.add(g[6], g[7], g[8]), d.add(g[9], g[10], g[11]), this.t += 2
    }
    I.ma(this.c + ".parse");
    f = new rd;
    f.R = b;
    f.q = a;
    this.dispatchEvent(f)
};
E("X.parserSTL", Ie);
E("X.parserSTL.prototype.parse", Ie.prototype.parse);

function Je(a) {
    function b() {
        Dc += 8;
        return U < za.length ? za[U++] : -1
    }

    function c() {
        var a;
        Dc++;
        a = ta & 1;
        ta >>= 1;
        0 == ta && (ta = b(), a = ta & 1, ta = ta >> 1 | 128);
        return a
    }

    function d(a) {
        for (var b = 0, d = a; d--;) b = b << 1 | c();
        a && (b = Y[b] >> 8 - a);
        return b
    }

    function e(a) {
        x[B++] = a;
        if (O == v - 1) {
            var b = new Uint8Array(2 * v);
            b.set(q);
            q = b;
            v *= 2
        }
        q[O++] = a;
        32768 == B && (B = 0)
    }

    function f() {
        this.Ld = this.Kd = 0;
        this.Ue = r
    }

    function g() {
        for (;;) {
            if (pb[Ca] >= ld) return -1;
            if (Ec[pb[Ca]] == Ca) return pb[Ca]++;
            pb[Ca]++
        }
    }

    function h() {
        var a = Fc[Hb],
            b;
        if (17 == Ca) return -1;
        Hb++;
        Ca++;
        b = g();
        if (0 <= b) a.Kd = b;
        else if (a.Kd = 32768, h()) return -1;
        b = g();
        if (0 <= b) a.Ld = b, a.Ue = r;
        else if (a.Ld = 32768, a.Ue = Fc[Hb], a.Mj = Hb, h()) return -1;
        Ca--;
        return 0
    }

    function k(a, b, c) {
        Fc = a;
        Hb = 0;
        Ec = c;
        ld = b;
        for (a = 0; 17 > a; a++) pb[a] = 0;
        Ca = 0;
        return h() ? -1 : 0
    }

    function l(a) {
        for (var b, d, e = 0, f = a[e];;)
            if (b = c()) {
                if (!(f.Ld & 32768)) return f.Ld;
                f = f.Ue;
                b = a.length;
                for (d = 0; d < b; d++)
                    if (a[d] === f) {
                        e = d;
                        break
                    }
            } else {
                if (!(f.Kd & 32768)) return f.Kd;
                e++;
                f = a[e]
            }
    }

    function j() {
        var a, g, h, j, m;
        do
            if (a = c(), h = d(2), 0 == h) {
                ta = 1;
                h = b();
                h |= b() << 8;
                for (b(), b(); h--;) g =
                    b(), e(g)
            } else if (1 == h)
            for (;;)
                if (h = Y[d(7)] >> 1, 23 < h ? (h = h << 1 | c(), 199 < h ? (h -= 128, h = h << 1 | c()) : (h -= 48, 143 < h && (h += 136))) : h += 256, 256 > h) e(h);
                else if (256 == h) break;
        else {
            var p;
            h -= 257;
            m = d(L[h]) + G[h];
            h = Y[d(5)] >> 3;
            8 < S[h] ? (p = d(8), p |= d(S[h] - 8) << 8) : p = d(S[h]);
            p += J[h];
            for (h = 0; h < m; h++) g = x[B - p & 32767], e(g)
        } else if (2 == h) {
            var q = Array(320);
            g = 257 + d(5);
            p = 1 + d(5);
            j = 4 + d(4);
            for (h = 0; 19 > h; h++) q[h] = 0;
            for (h = 0; h < j; h++) q[ga[h]] = d(3);
            m = ib.length;
            for (j = 0; j < m; j++) ib[j] = new f;
            if (k(ib, 19, q)) {
                B = 0;
                return
            }
            m = g + p;
            j = 0;
            for (var w = -1; j < m;)
                if (w++, h =
                    l(ib), 16 > h) q[j++] = h;
                else if (16 == h) {
                var v;
                h = 3 + d(2);
                if (j + h > m) {
                    B = 0;
                    return
                }
                for (v = j ? q[j - 1] : 0; h--;) q[j++] = v
            } else {
                h = 17 == h ? 3 + d(3) : 11 + d(7);
                if (j + h > m) {
                    B = 0;
                    return
                }
                for (; h--;) q[j++] = 0
            }
            m = Jb.length;
            for (j = 0; j < m; j++) Jb[j] = new f;
            if (k(Jb, g, q)) {
                B = 0;
                return
            }
            m = Jb.length;
            for (j = 0; j < m; j++) ib[j] = new f;
            h = [];
            for (j = g; j < q.length; j++) h[j - g] = q[j];
            if (k(ib, p, h)) {
                B = 0;
                return
            }
            for (;;)
                if (h = l(Jb), 256 <= h) {
                    h -= 256;
                    if (0 == h) break;
                    h--;
                    m = d(L[h]) + G[h];
                    h = l(ib);
                    8 < S[h] ? (p = d(8), p |= d(S[h] - 8) << 8) : p = d(S[h]);
                    for (p += J[h]; m--;) g = x[B - p & 32767], e(g)
                } else e(h)
        }
        while (!a);
        B = 0;
        ta = 1
    }

    function m() {
        var a = [],
            c;
        w & 8 && (a[0] = b(), a[1] = b(), a[2] = b(), a[3] = b(), 80 == a[0] && 75 == a[1] && 7 == a[2] && 8 == a[3] && (b(), b(), b(), b()), b(), b(), b(), b(), b(), b(), b(), b());
        F && p(za.byteLength);
        a[0] = b();
        if (8 == a[0]) {
            w = b();
            b();
            b();
            b();
            b();
            b();
            b();
            if (w & 4) {
                a[0] = b();
                a[2] = b();
                Ca = a[0] + 256 * a[1];
                for (a = 0; a < Ca; a++) b()
            }
            if (w & 8) {
                a = 0;
                for (qb = []; c = b();) {
                    if ("7" == c || ":" == c) a = 0;
                    a < md - 1 && (qb[a++] = c)
                }
            }
            if (w & 16)
                for (; b(););
            w & 2 && (b(), b());
            j();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            F && p(za.byteLength)
        }
    }

    function p(a) {
        v = a;
        q = new Uint8Array(a);
        a = [];
        F = s;
        a[0] = b();
        a[1] = b();
        120 == a[0] && 218 == a[1] && (j(), A[z] = Array(2), A[z][0] = q, A[z][1] = "geonext.gxt", z++);
        31 == a[0] && 139 == a[1] && (m(), A[z] = Array(2), A[z][0] = q, A[z][1] = "file", z++);
        if (80 == a[0] && 75 == a[1] && (F = o, a[2] = b(), a[3] = b(), 3 == a[2] && 4 == a[3])) {
            a[0] = b();
            a[1] = b();
            w = b();
            w |= b() << 8;
            a = b();
            a |= b() << 8;
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            b();
            var c = b(),
                c = c | b() << 8,
                d = b(),
                d = d | b() << 8,
                e = 0;
            for (qb = []; c--;) {
                var f = b();
                "/" == f | ":" == f ? e = 0 : e < md - 1 && (qb[e++] = String.fromCharCode(f))
            }
            nd || (nd = qb);
            for (e = 0; e <
                d;) b(), e++;
            O = 0;
            8 == a && (j(), A[z] = Array(2), A[z][0] = q, A[z][1] = qb.join(""), z++);
            m()
        }
    }
    var q = r,
        v = 0,
        w, z = 0,
        A = [],
        x = Array(32768),
        B = 0,
        F = s,
        O = 0,
        Y = [0, 128, 64, 192, 32, 160, 96, 224, 16, 144, 80, 208, 48, 176, 112, 240, 8, 136, 72, 200, 40, 168, 104, 232, 24, 152, 88, 216, 56, 184, 120, 248, 4, 132, 68, 196, 36, 164, 100, 228, 20, 148, 84, 212, 52, 180, 116, 244, 12, 140, 76, 204, 44, 172, 108, 236, 28, 156, 92, 220, 60, 188, 124, 252, 2, 130, 66, 194, 34, 162, 98, 226, 18, 146, 82, 210, 50, 178, 114, 242, 10, 138, 74, 202, 42, 170, 106, 234, 26, 154, 90, 218, 58, 186, 122, 250, 6, 134, 70, 198, 38, 166, 102, 230,
            22, 150, 86, 214, 54, 182, 118, 246, 14, 142, 78, 206, 46, 174, 110, 238, 30, 158, 94, 222, 62, 190, 126, 254, 1, 129, 65, 193, 33, 161, 97, 225, 17, 145, 81, 209, 49, 177, 113, 241, 9, 137, 73, 201, 41, 169, 105, 233, 25, 153, 89, 217, 57, 185, 121, 249, 5, 133, 69, 197, 37, 165, 101, 229, 21, 149, 85, 213, 53, 181, 117, 245, 13, 141, 77, 205, 45, 173, 109, 237, 29, 157, 93, 221, 61, 189, 125, 253, 3, 131, 67, 195, 35, 163, 99, 227, 19, 147, 83, 211, 51, 179, 115, 243, 11, 139, 75, 203, 43, 171, 107, 235, 27, 155, 91, 219, 59, 187, 123, 251, 7, 135, 71, 199, 39, 167, 103, 231, 23, 151, 87, 215, 55, 183, 119, 247, 15, 143, 79, 207, 47,
            175, 111, 239, 31, 159, 95, 223, 63, 191, 127, 255
        ],
        G = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
        L = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 99, 99],
        J = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577],
        S = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
        ga = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
        za = a,
        U = 0,
        ta = 1,
        Dc = 0,
        md = 256,
        qb = [],
        nd, Jb = Array(288),
        ib = Array(32),
        Hb = 0,
        Fc = r,
        Ca = 0,
        pb = Array(17);
    pb[0] = 0;
    var Ec, ld;
    Je.prototype.he = function() {
        p(za.byteLength);
        return q
    }
};

function Ke() {
    V.call(this);
    this.c = "parserDCM"
}
H(Ke, V);
Ke.prototype.parse = function(a, b, c) {
    c = this.kc(c, b);
    if (c.Yd == c.Xa) {
        var d = c.mf.length,
            e, f = 0;
        for (e = 0; e < d; e++) {
            var g = c.mf[e];
            g !== n && (g *= c.jb, g = c.cd.subarray(g, g + c.jb), c.data.set(g, f * c.jb), f++)
        }
        b.Y = [c.J[0], c.J[1], c.J[2]];
        b.G = [c.qa[0], c.qa[1], c.qa[2]];
        e = se(c.data);
        d = e[0];
        e = e[1];
        c.min = b.Da = b.ea = d;
        c.max = b.ta = b.da = e; - Infinity == b.Z && (b.Z = d);
        Infinity == b.aa && (b.aa = e);
        b.fc();
        b.ob = ue(this, b, c)
    }
    c = new rd;
    c.R = b;
    c.q = a;
    this.dispatchEvent(c)
};
Ke.prototype.kc = function(a, b) {
    this.P = a;
    if (y(b.nc)) {
        d = b.nc;
        f = d.eg;
        h = d.dg;
        this.t = 2 * f;
        var c = $(this, "uchar", h),
            c = parseInt(String.fromCharCode.apply(r, c), 10);
        d.J[2]++
    } else {
        var d = {
            rows: 0,
            cols: 0,
            qa: r,
            Ee: 0,
            $g: 0,
            Xa: 1,
            Nh: 1,
            eg: 0,
            dg: 0,
            Yd: 0,
            jb: 0,
            cd: r,
            gf: 0,
            mf: [],
            data: r,
            min: Infinity,
            max: -Infinity
        };
        d.Xa = b.p.length;
        y(d.Xa) || (d.Xa = 1);
        for (var e = $(this, "ushort", this.P.byteLength), f = 66, g = h = r, h = r, c = "", k = 7; 0 < k;)
            if (h = e[f++], 40 == h) switch (g = e[f++], f++, h = e[f++], g) {
                case 16:
                    d.rows = e[f++];
                    k--;
                    break;
                case 17:
                    d.cols = e[f++];
                    k--;
                    break;
                case 256:
                    d.Ee = e[f++];
                    k--;
                    break;
                case 257:
                    d.$g = e[f++];
                    k--;
                    break;
                case 2:
                    d.Nh = e[f++];
                    k--;
                    break;
                case 48:
                    for (var g = "", l = 0, l = 0; l < h / 2; l++) var j = e[f++],
                        m = j & 255,
                        j = (j & 65280) >> 8,
                        g = g + String.fromCharCode(m),
                        g = g + String.fromCharCode(j);
                    g = g.split("\\");
                    d.qa = [+g[0], +g[1], 1];
                    k--
            } else if (32 == h && (g = e[f++], 19 == g)) {
                f++;
                h = e[f++];
                d.eg = f;
                d.dg = h;
                for (l = 0; l < h / 2; l++) j = e[f++], m = j & 255, j = (j & 65280) >> 8, c += String.fromCharCode(m), c += String.fromCharCode(j), c = parseInt(c, 10);
                k--
            }
        b.nc = d;
        d.J = [d.cols, d.rows, 1];
        d.jb = d.rows * d.cols;
        switch (d.Ee) {
            case 8:
                d.cd =
                    new Uint8Array(d.cols * d.rows * d.Xa);
                d.data = new Uint8Array(d.cols * d.rows * d.Xa);
                break;
            case 16:
                d.cd = new Uint16Array(d.cols * d.rows * d.Xa);
                d.data = new Uint16Array(d.cols * d.rows * d.Xa);
                break;
            case 32:
                d.cd = new Uint32Array(d.cols * d.rows * d.Xa), d.data = new Uint32Array(d.cols * d.rows * d.Xa)
        }
    }
    this.t = this.P.byteLength - 2 * d.jb;
    e = r;
    switch (d.Ee) {
        case 8:
            e = $(this, "uchar", d.jb);
            break;
        case 16:
            e = $(this, "ushort", d.jb);
            break;
        case 32:
            e = $(this, "uint", d.jb)
    }
    d.mf[c] = d.gf;
    d.cd.set(e, d.gf * d.jb);
    d.gf++;
    ++d.Yd;
    return d
};
E("X.parserDCM", Ke);
E("X.parserDCM.prototype.parse", Ke.prototype.parse);

function Le() {
    V.call(this);
    this.c = "parserVTK"
}
H(Le, V);
Le.prototype.parse = function(a, b, c) {
    I.ra(this.c + ".parse");
    var d = b.g,
        e = b.h,
        f = new Uint8Array(c),
        g = "";
    b.g = d = new R(c.byteLength);
    b.h = e = new R(c.byteLength);
    for (var c = 0, h = f.length; c < h; c += 32768) g += String.fromCharCode.apply(r, f.subarray(c, Math.min(c + 32768, h)));
    f = g.split("\n");
    g = f.length;
    this.Zc = this.$c = r;
    this.Nb = [];
    this.ua = kd;
    this.ve = this.zb = this.lb = this.Ab = s;
    c = 0;
    for (h = g % 8; h--;) Me(this, f[c]), c++;
    for (h = 0.125 * g ^ 0; h--;) Me(this, f[c]), c++, Me(this, f[c]), c++, Me(this, f[c]), c++, Me(this, f[c]), c++, Me(this, f[c]), c++,
        Me(this, f[c]), c++, Me(this, f[c]), c++, Me(this, f[c]), c++;
    var c = this.$c,
        f = this.Zc,
        g = f.length,
        k = h = this.Nb.length;
    do {
        var l = this.Nb[h - k],
            j = l.length,
            m;
        for (m = 0; m < j && !("LINES" == this.ua && m + 1 >= j); m++) {
            var p = parseInt(l[m], 10),
                q = c.get(p);
            d.add(q[0], q[1], q[2]);
            var v = p,
                w = q;
            "LINES" == this.ua ? (v = parseInt(l[m + 1], 10), w = c.get(v), d.add(w[0], w[1], w[2])) : "TRIANGLE_STRIPS" == this.ua && (0 == m || m == j - 1) && d.add(q[0], q[1], q[2]);
            p < g ? (w = f.get(p), e.add(w[0], w[1], w[2]), "LINES" == this.ua ? (v = f.get(v), e.add(v[0], v[1], v[2])) : "TRIANGLE_STRIPS" ==
                this.ua && (0 == m || m == j - 1) && e.add(w[0], w[1], w[2])) : (v = new Q(q[0], q[1], q[2]), v.normalize(), e.add(v.x, v.y, v.b), "LINES" == this.ua ? (v = new Q(w[0], w[1], w[2]), v.normalize(), e.add(v.x, v.y, v.b)) : "TRIANGLE_STRIPS" == this.ua && (0 == m || m == j - 1) && e.add(v.x, v.y, v.b))
        }
        k--
    } while (0 < k);
    b.ka = this.ua;
    I.ma(this.c + ".parse");
    d = new rd;
    d.R = b;
    d.q = a;
    this.dispatchEvent(d)
};

function Me(a, b) {
    var b = b.replace(/^\s+|\s+$/g, ""),
        c = b.split(" "),
        d = c.length,
        e = c[0];
    switch (e) {
        case "POINTS":
            a.Ab = o;
            a.lb = s;
            a.zb = s;
            c = parseInt(c[1], 10);
            a.$c = new R(3 * c);
            a.Zc = new R(3 * c);
            return;
        case "VERTICES":
            a.lb = o;
            a.Ab = s;
            a.zb = s;
            c = parseInt(c[1], 10);
            3 <= c ? a.ua = kd : 1 == c ? a.ua = "POINTS" : i(Error("This VTK file is not supported!"));
            a.Nb = [];
            return;
        case "TRIANGLE_STRIPS":
            a.lb = o;
            a.Ab = s;
            a.zb = s;
            a.ua = "TRIANGLE_STRIPS";
            a.Nb = [];
            return;
        case "LINES":
            a.lb = o;
            a.Ab = s;
            a.zb = s;
            a.ua = "LINES";
            a.Nb = [];
            return;
        case "POLYGONS":
            a.lb = o;
            a.Ab = s;
            a.zb = s;
            a.ua = "POLYGONS";
            a.Nb = [];
            return;
        case "POINT_DATA":
            a.zb = o;
            a.Ab = s;
            a.lb = s;
            return
    }
    if (a.Ab)
        if (1 == d || isNaN(parseFloat(e))) a.Ab = s;
        else {
            if (3 <= d) {
                var e = parseFloat(c[0]),
                    f = parseFloat(c[1]),
                    g = parseFloat(c[2]);
                a.$c.add(e, f, g)
            }
            6 <= d && (e = parseFloat(c[3]), f = parseFloat(c[4]), g = parseFloat(c[5]), a.$c.add(e, f, g));
            9 <= d && (d = parseFloat(c[6]), e = parseFloat(c[7]), c = parseFloat(c[8]), a.$c.add(d, e, c))
        }
    else a.lb ? 1 == d || isNaN(parseFloat(e)) ? a.lb = s : a.Nb.push(c.slice(1)) : a.zb && ("NORMALS" == e ? a.ve = o : 1 == d || isNaN(parseFloat(e)) ?
        (a.zb = s, a.ve = s) : a.ve && (3 <= d && (e = parseFloat(c[0]), f = parseFloat(c[1]), g = parseFloat(c[2]), a.Zc.add(e, f, g)), 6 <= d && (e = parseFloat(c[3]), f = parseFloat(c[4]), g = parseFloat(c[5]), a.Zc.add(e, f, g)), 9 <= d && (d = parseFloat(c[6]), e = parseFloat(c[7]), c = parseFloat(c[8]), a.Zc.add(d, e, c))))
}
E("X.parserVTK", Le);
E("X.parserVTK.prototype.parse", Le.prototype.parse);

function Ne() {
    V.call(this);
    this.c = "parserFSM";
    this.vc = s
}
H(Ne, V);
Ne.prototype.parse = function(a, b, c) {
    I.ra(this.c + ".parse");
    this.P = c;
    var d = b.g,
        e = b.h;
    b.xc = [];
    var f = b.xc,
        c = 0,
        g;
    do g = $(this, "uchar"), c++; while (200 > c && 10 != g);
    $(this, "uchar");
    var e = $(this, "uint"),
        c = $(this, "uint"),
        h = $(this, "float", 3 * e);
    g = $(this, "uint", 3 * c);
    var k = new Uint32Array(e),
        l = new Float32Array(9 * c);
    b.g = d = new R(9 * c);
    b.h = e = new R(9 * c);
    var j;
    for (j = 0; j < c; j++) {
        var m = 3 * j,
            p = g[m],
            q = g[m + 1],
            v = g[m + 2];
        f.push(p);
        f.push(q);
        f.push(v);
        k[p] += 1;
        k[q] += 1;
        k[v] += 1;
        var m = 3 * p,
            w = 3 * q,
            z = 3 * v,
            A = h[m],
            x = h[m + 1],
            B = h[m + 2],
            q = h[w],
            v = h[w +
                1],
            p = h[w + 2],
            F = h[z],
            O = h[z + 1],
            Y = h[z + 2];
        d.add(A, x, B);
        d.add(q, v, p);
        d.add(F, O, Y);
        A = new Q(A, x, B);
        F = new Q(F, O, Y);
        q = (new Q(q, v, p)).f().hb(A);
        v = F.f().hb(A);
        q = Sc(q, v).normalize();
        l[m] += q.x;
        l[m + 1] += q.y;
        l[m + 2] += q.b;
        l[w] += q.x;
        l[w + 1] += q.y;
        l[w + 2] += q.b;
        l[z] += q.x;
        l[z + 1] += q.y;
        l[z + 2] += q.b
    }
    for (j = 0; j < c; j++) m = 3 * j, p = g[m], q = g[m + 1], v = g[m + 2], m = 3 * p, w = 3 * q, z = 3 * v, f = new Q(l[w], l[w + 1], l[w + 2]), h = new Q(l[z], l[z + 1], l[z + 2]), m = (new Q(l[m], l[m + 1], l[m + 2])).scale(1 / k[p]).normalize(), f = f.scale(1 / k[q]).normalize(), h = h.scale(1 / k[v]).normalize(),
        e.add(m.x, m.y, m.b), e.add(f.x, f.y, f.b), e.add(h.x, h.y, h.b);
    b.ka = kd;
    I.ma(this.c + ".parse");
    c = new rd;
    c.R = b;
    c.q = a;
    this.dispatchEvent(c)
};
E("X.parserFSM", Ne);
E("X.parserFSM.prototype.parse", Ne.prototype.parse);

function Oe() {
    V.call(this);
    this.c = "parserMGZ";
    this.vc = s
}
H(Oe, V);
Oe.prototype.parse = function(a, b, c, d) {
    I.ra(this.c + ".parse");
    var e = c;
    d && (e = (new Je(new Uint8Array(c))).he(), e = e.buffer);
    c = this.kc(e);
    b.Y = [c.Xe, c.Ye, c.Ze];
    b.G = c.Ig;
    d = c.min;
    e = c.max;
    b.Da = b.ea = d;
    b.ta = b.da = e; - Infinity == b.Z && (b.Z = d);
    Infinity == b.aa && (b.aa = e);
    b.fc();
    I.ma(this.c + ".parse");
    b.ob = ue(this, b, c);
    c = new rd;
    c.R = b;
    c.q = a;
    this.dispatchEvent(c)
};
Oe.prototype.kc = function(a) {
    this.P = a;
    a = {
        version: 0,
        Pg: 0,
        Ng: 0,
        rh: 0,
        Og: 0,
        Xe: 0,
        Ye: 0,
        Ze: 0,
        Mh: 0,
        type: 0,
        kh: 0,
        zg: 0,
        $i: r,
        Mg: r,
        Ig: r,
        data: r,
        min: Infinity,
        max: -Infinity
    };
    a.version = $(this, "uint");
    a.Xe = $(this, "uint");
    a.Ye = $(this, "uint");
    a.Ze = $(this, "uint");
    a.Mh = $(this, "uint");
    a.type = $(this, "uint");
    a.kh = $(this, "uint");
    a.zg = $(this, "ushort");
    if (0 < a.zg) {
        a.Ig = $(this, "float", 3);
        var b = [];
        b.push($(this, "float", 3));
        b.push($(this, "float", 3));
        b.push($(this, "float", 3));
        b.push($(this, "float", 3));
        a.Mg = b
    }
    this.t = 284;
    b = a.Xe * a.Ye *
        a.Ze;
    switch (a.type) {
        case 0:
            a.data = $(this, "uchar", b);
            break;
        case 1:
            a.data = $(this, "uint", b);
            break;
        case 3:
            a.data = $(this, "float", b);
            break;
        case 4:
            a.data = $(this, "ushort", b);
            break;
        default:
            i(Error("Unsupported MGH/MGZ data type: " + a.type))
    }
    b = se(a.data);
    a.min = b[0];
    a.max = b[1];
    this.t + 16 < this.P.byteLength && (a.Pg = $(this, "float"), a.rh = $(this, "float"), a.Ng = $(this, "float"), a.Og = $(this, "float"));
    return a
};
E("X.parserMGZ", Oe);
E("X.parserMGZ.prototype.parse", Oe.prototype.parse);

function Pe() {
    V.call(this);
    this.c = "parserLBL"
}
H(Pe, V);
Pe.prototype.parse = function(a, b, c) {
    I.ra(this.c + ".parse");
    var d = b.xc,
        e = d.length;
    0 == e && i(Error("No _pointIndices defined on the X.object."));
    this.P = c;
    for (var f = [], g = $(this, "uchar", c.byteLength), h = g.length, k = s, l = 0, c = 1; c < h; c++) 10 == g[c - 1] ? (l = c, k = o) : k && 32 == g[c] && (k = parseInt(String.fromCharCode.apply(r, g.subarray(l, c)), 10), f.push(k), k = s);
    g = b.u.v ? b.u.v : new Float32Array(e);
    h = f.length;
    for (c = 0; c < h; c++) g[f[c]] = 1;
    f = new Float32Array(3 * e);
    for (c = h = 0; c < e; c++) l = d[c], l > e && i(Error("Could not find scalar for vertex.")),
        l = g[l], f[h++] = l, f[h++] = l, f[h++] = l;
    b.u.v = g;
    b.u.Lc = f;
    b.u.e = o;
    I.ma(this.c + ".parse");
    d = new rd;
    d.R = b;
    d.q = a;
    this.dispatchEvent(d)
};
E("X.parserLBL", Pe);
E("X.parserLBL.prototype.parse", Pe.prototype.parse);

function Qe() {
    V.call(this);
    this.c = "parserNRRD"
}
H(Qe, V);
Qe.prototype.parse = function(a, b, c) {
    I.ra(this.c + ".parse");
    this.P = c;
    var c = $(this, "uchar", c.byteLength),
        d = c.length,
        e = r,
        f = 0,
        g;
    for (g = 1; g < d; g++)
        if (10 == c[g - 1] && 10 == c[g]) {
            e = String.fromCharCode.apply(r, c.subarray(0, g - 2));
            f = g + 1;
            break
        }
    var h, k, l, j, d = e.split(/\r?\n/);
    for (e = 0, g = d.length; e < g; e++)
        if (h = d[e], h.match(/NRRD\d+/)) this.Ih = o;
        else if (!h.match(/^#/) && (j = h.match(/(.*):(.*)/))) k = j[1].trim(), h = j[2].trim(), (l = this.nh[k]) ? l.call(this, h) : this[k] = h;
    this.Ih || i(Error("Not an NRRD file"));
    "raw" !== this.encoding && "gzip" !==
        this.encoding && "gz" !== this.encoding && i(Error("Only raw or gz/gzip encoding is allowed"));
    if (!this.Ha && (this.Ha = [new Q(1, 0, 0), new Q(0, 1, 0), new Q(0, 0, 1)], this.nf)) {
        d = [];
        for (j = 0; 2 >= j; j++) d.push(!isNaN(this.nf[j]) ? this.Ha[j].scale(this.nf[j]) : n)
    }
    f = c.subarray(f);
    if ("gzip" == this.encoding || "gz" == this.encoding) f = (new Je(f)).he();
    f = f.buffer;
    c = {
        data: r,
        min: Infinity,
        max: -Infinity
    };
    c.data = new this.Ib(f);
    j = se(c.data);
    f = c.min = j[0];
    j = c.max = j[1];
    b.Y = [this.kf[0], this.kf[1], this.kf[2]];
    b.G = [(new Q(this.Ha[0][0], this.Ha[0][1],
        this.Ha[0][2])).jc(), (new Q(this.Ha[1][0], this.Ha[1][1], this.Ha[1][2])).jc(), (new Q(this.Ha[2][0], this.Ha[2][1], this.Ha[2][2])).jc()];
    b.Da = b.ea = f;
    b.ta = b.da = j; - Infinity == b.Z && (b.Z = f);
    Infinity == b.aa && (b.aa = j);
    b.fc();
    I.ma(this.c + ".parse");
    b.ob = ue(this, b, c);
    c = new rd;
    c.R = b;
    c.q = a;
    this.dispatchEvent(c)
};
Qe.prototype.nh = {
    type: function(a) {
        switch (a) {
            case "uchar":
            case "unsigned char":
            case "uint8":
            case "uint8_t":
                this.Ib = Uint8Array;
                break;
            case "signed char":
            case "int8":
            case "int8_t":
                this.Ib = Int8Array;
                break;
            case "short":
            case "short int":
            case "signed short":
            case "signed short int":
            case "int16":
            case "int16_t":
                this.Ib = Int16Array;
                break;
            case "ushort":
            case "unsigned short":
            case "unsigned short int":
            case "uint16":
            case "uint16_t":
                this.Ib = Uint16Array;
                break;
            case "int":
            case "signed int":
            case "int32":
            case "int32_t":
                this.Ib =
                    Int32Array;
                break;
            case "uint":
            case "unsigned int":
            case "uint32":
            case "uint32_t":
                this.Ib = Uint32Array;
                break;
            case "float":
                this.Ib = Float32Array;
                break;
            default:
                i(Error("Unsupported NRRD data type: " + a))
        }
        return this.type = a
    },
    endian: function(a) {
        return a
    },
    encoding: function(a) {
        return this.encoding = a
    },
    dimension: function(a) {
        return this.J = parseInt(a, 10)
    },
    sizes: function(a) {
        var b, c, d, e;
        d = a.split(/\s+/);
        e = [];
        for (b = 0, c = d.length; b < c; b++) a = d[b], e.push(parseInt(a, 10));
        return this.kf = e
    },
    "space directions": function(a) {
        var b,
            c, d;
        c = a.match(/\(.*?\)/g);
        return this.Ha = function() {
            var a, f, g;
            g = [];
            for (a = 0, f = c.length; a < f; a++) d = c[a], g.push(function() {
                var a, c, e, f;
                e = d.slice(1, -1).split(/,/);
                f = [];
                for (a = 0, c = e.length; a < c; a++) b = e[a], f.push(parseFloat(b));
                return f
            }());
            return g
        }()
    },
    spacings: function(a) {
        var b;
        b = a.split(/\s+/);
        var c, d, e;
        e = [];
        for (c = 0, d = b.length; c < d; c++) a = b[c], e.push(parseFloat(a));
        return this.nf = e
    }
};
E("X.parserNRRD", Qe);
E("X.parserNRRD.prototype.parse", Qe.prototype.parse);

function Re() {
    V.call(this);
    this.c = "parserCRV";
    this.vc = s
}
H(Re, V);
Re.prototype.parse = function(a, b, c) {
    I.ra(this.c + ".parse");
    var d = b.xc;
    0 == d.length && i(Error("No _pointIndices defined on the X.object."));
    this.P = c;
    this.t = 3;
    var e = $(this, "uint");
    $(this, "uint");
    $(this, "uint");
    var f = 0,
        g = 0,
        h = 0,
        k = 0,
        l = 0,
        j = 0,
        m = 0,
        p = 0,
        q = 0,
        v = 0,
        w = 0,
        c = Array(2),
        z = Array(2),
        A = $(this, "float", e),
        x;
    for (x = 0; x < e; x++) {
        var B = A[x];
        0 == x && (c[0] = z[0] = B);
        0 <= B ? (f++, k += B) : (g++, h += B);
        q += B;
        w++;
        z[0] = Math.max(B, z[0]);
        c[0] = Math.min(B, c[0]);
        A[x] = B
    }
    0 != f && (l = k / f);
    0 != g && (j = h / g);
    0 != w && (v = q / w);
    for (w = q = h = k = 0; w < e; w++) B = A[w],
        x = 0, 0 <= B ? (x = Math.pow(B - l, 2), k += x) : (x = Math.pow(B - j, 2), h += x), x = Math.pow(B - v, 2), q += x;
    1 < f && (m = Math.sqrt(k / (f - 1)));
    1 < g && (p = Math.sqrt(h / (g - 1)));
    c[1] = j - 2.5 * p;
    z[1] = l + 2.5 * m;
    e = d.length;
    f = new Float32Array(3 * e);
    for (w = 0; w < e; w++) g = A[d[w]], h = 3 * w, f[h] = g, f[h + 1] = g, f[h + 2] = g;
    b.u.Da = c[1];
    b.u.ta = z[1]; - Infinity == b.u.Z && (b.u.Z = c[1]);
    Infinity == b.u.aa && (b.u.aa = z[1]);
    b.u.v = A;
    b.u.Lc = f;
    b.u.e = o;
    I.ma(this.c + ".parse");
    d = new rd;
    d.R = b;
    d.q = a;
    this.dispatchEvent(d)
};
E("X.parserCRV", Re);
E("X.parserCRV.prototype.parse", Re.prototype.parse);

function Se() {
    V.call(this);
    this.c = "parserTRK"
}
H(Se, V);
Se.prototype.parse = function(a, b, c) {
    I.ra(this.c + ".parse");
    var d = b.g,
        e = b.h,
        f = b.W;
    this.P = c;
    $(this, "uchar", 6);
    $(this, "ushort", 3);
    var g = $(this, "float", 3);
    $(this, "float", 3);
    var h = $(this, "ushort");
    $(this, "uchar", 200);
    $(this, "ushort");
    $(this, "uchar", 200);
    $(this, "float", 16);
    $(this, "uchar", 444);
    $(this, "uchar", 4);
    $(this, "uchar", 4);
    $(this, "float", 6);
    $(this, "uchar", 2);
    $(this, "uchar");
    $(this, "uchar");
    $(this, "uchar");
    $(this, "uchar");
    $(this, "uchar");
    $(this, "uchar");
    var k = $(this, "uint");
    $(this, "uint");
    var l = $(this,
            "uint"),
        j = [],
        m = [],
        c = Infinity,
        p = -Infinity,
        q = r,
        v = r,
        w = r,
        z = r,
        e = d = r,
        A = $(this, "uint", (this.P.byteLength - 1E3) / 4);
    this.t = l;
    for (var x = $(this, "float", (this.P.byteLength - 1E3) / 4), B = 0, l = f = 0; l < k; l++) {
        for (var F = A[B], O = new R(3 * F), Y = 0, G = 0; G < F; G++) {
            var L = x[B + 3 * G + G * h + 1],
                J = x[B + 3 * G + G * h + 2],
                S = x[B + 3 * G + G * h + 3],
                L = L / g[0],
                J = J / g[1],
                S = S / g[2];
            O.add(L, J, S);
            if (0 < G) var ga = O.get(G - 1),
                Y = Y + Math.sqrt(Math.pow(L - ga[0], 2) + Math.pow(J - ga[1], 2) + Math.pow(S - ga[2], 2));
            G < F - 1 && (f += 6)
        }
        B += 3 * F + F * h + 1;
        G = O.Ub;
        F = O.Rb;
        L = O.Vb;
        J = O.Sb;
        S = O.Wb;
        ga = O.Tb;
        if (!q ||
            G < q) q = G;
        if (!v || F > v) v = F;
        if (!w || L < w) w = L;
        if (!z || J > z) z = J;
        if (!d || S < d) d = S;
        if (!e || ga > e) e = ga;
        j.push(O);
        m.push(Y)
    }
    g = (q + v) / 2;
    w = (w + z) / 2;
    h = (d + e) / 2;
    z = new Float32Array(f);
    b.g = d = new R(f);
    b.h = e = new R(f);
    b.W = f = new R(f);
    for (l = q = 0; l < k; l++) {
        v = j[l];
        A = v.count;
        Y = m[l];
        c = Math.min(c, Y);
        p = Math.max(p, Y);
        for (G = 0; G < A - 1; G++) {
            B = v.get(G);
            x = v.get(G + 1);
            d.add(B[0], B[1], B[2]);
            d.add(x[0], x[1], x[2]);
            var O = B[0] - g,
                F = B[1] - w,
                L = B[2] - h,
                J = Math.sqrt(O * O + F * F + L * L),
                S = x[0] - g,
                ga = x[1] - w,
                za = x[2] - h,
                U = Math.sqrt(S * S + ga * ga + za * za);
            e.add(O / J, F / J, L / J);
            e.add(S /
                U, ga / U, za / U);
            x = [Math.abs(x[0] - B[0]), Math.abs(x[1] - B[1]), Math.abs(x[2] - B[2])];
            B = Math.sqrt(x[0] * x[0] + x[1] * x[1] + x[2] * x[2]);
            x[0] /= B;
            x[1] /= B;
            x[2] /= B;
            f.add(x[0], x[1], x[2]);
            f.add(x[0], x[1], x[2]);
            z[q++] = Y;
            z[q++] = Y;
            z[q++] = Y;
            z[q++] = Y;
            z[q++] = Y;
            z[q++] = Y
        }
    }
    b.ka = "LINES";
    k = new qd;
    k.Da = c;
    k.ta = p;
    k.Z = c;
    k.aa = p;
    k.Lc = z;
    k.If = s;
    k.e = o;
    b.u = k;
    I.ma(this.c + ".parse");
    c = new rd;
    c.R = b;
    c.q = a;
    this.dispatchEvent(c)
};
E("X.parserTRK", Se);
E("X.parserTRK.prototype.parse", Se.prototype.parse);

function Te() {
    V.call(this);
    this.c = "parserDX"
}
H(Te, V);
Te.prototype.parse = function(a, b, c) {
    I.ra(this.c + ".parse");
    this.P = c;
    for (var d = $(this, "uchar", c.byteLength), e = new R(c.byteLength), f = new R(c.byteLength), g = 0, h = 0; h < d.length;) {
        if (10 == d[h]) {
            var k = String.fromCharCode.apply(r, d.subarray(g, h));
            if (!k) {
                h++;
                g = h;
                continue
            }
            k = k.replace(/^\s+|\s+$/g, "");
            if ("object" == k.split(" ")[0]) a: {
                for (var k = e, l = f, j = d, m = g, p = h, m = String.fromCharCode.apply(r, j.subarray(m, p)).replace(/^\s+|\s+$/g, ""), m = m.split(" "), q = 0, v = r, g = 0; g < m.length; g++) {
                    var w = m[g];
                    if ("type" == w) g++, v = m[g];
                    else if ("items" ==
                        w) g++, q = parseInt(m[g], 10);
                    else if ("shape" == w && (g++, "3" != m[g])) break a
                }
                if (!(0 == q || v == r)) {
                    w = new R(3 * q);
                    p++;
                    for (var m = p, z = 0; p < j.length;) {
                        if (10 == j[p]) {
                            m = String.fromCharCode.apply(r, j.subarray(m, p));
                            if (!m) {
                                p++;
                                m = g;
                                continue
                            }
                            m = m.replace(/^\s+|\s+$/g, "");
                            m = m.split(" ");
                            if ("float" == v) {
                                var A = parseFloat(m[0]),
                                    x = parseFloat(m[1]),
                                    m = parseFloat(m[2]);
                                w.add(A, x, m)
                            } else "int" == v && (A = parseInt(m[0], 10), x = parseInt(m[1], 10), m = parseInt(m[2], 10), w.add(A, x, m));
                            z++;
                            m = p + 1
                        }
                        p++;
                        if (z >= q) break
                    }
                    for (; p < j.length;) {
                        if (10 == j[p]) {
                            m =
                                String.fromCharCode.apply(r, j.subarray(m, p));
                            if (!m) break;
                            m = m.replace(/^\s+|\s+$/g, "");
                            if (-1 != m.indexOf('"dep"') && -1 != m.indexOf('"positions"')) {
                                for (g = 0; g < w.count; g++) j = w.get(g), k.add(j[0], j[1], j[2]);
                                break
                            } else if (-1 != m.indexOf('"dep"') && -1 != m.indexOf('"connections"')) {
                                for (g = 0; g < w.count; g++) j = w.get(g), l.add(j[0], j[1], j[2]);
                                break
                            }
                            m = p + 1
                        }
                        p++
                    }
                }
            }
            g = h + 1
        }
        h++
    }
    d = b.g = new R(c.byteLength);
    c = b.h = new R(c.byteLength);
    for (h = 0; h < f.count; h++) k = f.get(h), p = e.get(k[0]), j = e.get(k[1]), v = e.get(k[2]), d.add(p[0], p[1], p[2]), d.add(j[0],
        j[1], j[2]), d.add(v[0], v[1], v[2]), k = j[0] - p[0], l = j[1] - p[1], q = j[2] - p[2], j = v[0] - p[0], g = v[1] - p[1], v = v[2] - p[2], p = l * v - q * g, q = q * j - k * v, k = k * g - l * j, l = Math.sqrt(Math.pow(p, 2) + Math.pow(q, 2) + Math.pow(k, 2)), j = p / l, g = q / l, k /= l, c.add(j, g, k), c.add(j, g, k), c.add(j, g, k);
    I.ma(this.c + ".parse");
    e = new rd;
    e.R = b;
    e.q = a;
    this.dispatchEvent(e)
};
E("X.parserDX", Te);
E("X.parserDX.prototype.parse", Te.prototype.parse);

function Ue() {
    V.call(this);
    this.c = "parserLUT"
}
H(Ue, V);
Ue.prototype.parse = function(a, b, c) {
    I.ra(this.c + ".parse");
    this.P = c;
    var c = $(this, "uchar", c.byteLength),
        d = c.length,
        e = 0,
        f;
    for (f = 0; f < d; f++)
        if (10 == c[f]) {
            var g = String.fromCharCode.apply(r, c.subarray(e, f)),
                e = f + 1,
                g = g.replace(/^\s+|\s+$/g, "");
            "#" != g[0] && (g = g.split(" "), g = g.filter(function(a) {
                return "" != a
            }), 6 == g.length && (g[2] = parseInt(g[2], 10) / 255, g[3] = parseInt(g[3], 10) / 255, g[4] = parseInt(g[4], 10) / 255, g[5] = parseInt(g[5], 10) / 255, a.add(parseInt(g[0], 10), g[1], g[2], g[3], g[4], g[5], 10)))
        }
    I.ma(this.c + ".parse");
    c = new rd;
    c.R = b;
    c.q = a;
    this.dispatchEvent(c)
};
E("X.parserLUT", Ue);
E("X.parserLUT.prototype.parse", Ue.prototype.parse);

function Ve() {
    V.call(this);
    this.c = "parserIMG"
}
H(Ve, V);
Ve.prototype.parse = function(a, b, c, d, e) {
    I.ra(this.c + ".parse");
    var f = d;
    e && (f = (new Je(new Uint8Array(d))).he(), f = f.buffer);
    348 != (new Uint32Array(c, 0, 1))[0] && (this.vc = s);
    c = this.kc(c, f);
    b.Y = [c.J[1], c.J[2], c.J[3]];
    b.G = [c.qa[1], c.qa[2], c.qa[3]];
    d = c.min;
    e = c.max;
    b.Da = b.ea = d;
    b.ta = b.da = e; - Infinity == b.Z && (b.Z = d);
    Infinity == b.aa && (b.aa = e);
    b.fc();
    I.ma(this.c + ".parse");
    ue(this, b, c);
    c = new rd;
    c.R = b;
    c.q = a;
    this.dispatchEvent(c)
};
Ve.prototype.kc = function(a, b) {
    var c = {
        J: [],
        Gb: 0,
        qa: [],
        data: []
    };
    this.P = a;
    this.t = 40;
    c.J = $(this, "ushort", 8);
    this.t = 70;
    c.Gb = $(this, "ushort");
    this.t = 76;
    c.qa = $(this, "float", 8);
    var d = c.J[1] * c.J[2] * c.J[3];
    this.P = b;
    this.t = 0;
    switch (c.Gb) {
        case 2:
            c.data = $(this, "uchar", d);
            break;
        case 4:
            c.data = $(this, "sshort", d);
            break;
        case 8:
            c.data = $(this, "sint", d);
            break;
        case 16:
            c.data = $(this, "float", d);
            break;
        default:
            window.console.log("Unsupported IMG data type: " + c.Gb), i(Error("Unsupported IMG data type: " + c.Gb))
    }
    d = se(c.data);
    c.min = d[0];
    c.max = d[1];
    return c
};
E("X.parserIMG", Ve);
E("X.parserIMG.prototype.parse", Ve.prototype.parse);

function We() {
    V.call(this);
    this.c = "parserNII"
}
H(We, V);

function Xe(a, b) {
    var c = b.slice(0),
        c = new Uint32Array(c, 0, 1),
        d = c[0];
    if (348 == d) return o;
    d = te(c, 4)[0];
    return 348 == d ? (a.vc = s, o) : s
}
We.prototype.parse = function(a, b, c) {
    I.ra(this.c + ".parse");
    var d = c;
    Xe(this, d) || (d = (new Je(new Uint8Array(c))).he(), d = d.buffer, Xe(this, d) || i(Error("Invalid nifti file.")));
    c = this.kc(d);
    b.Y = [c.J[1], c.J[2], c.J[3]];
    b.G = [c.qa[1], c.qa[2], c.qa[3]];
    var d = c.min,
        e = c.max;
    b.Da = b.ea = d;
    b.ta = b.da = e; - Infinity == b.Z && (b.Z = d);
    Infinity == b.aa && (b.aa = e);
    b.fc();
    I.ma(this.c + ".parse");
    b.ob = ue(this, b, c);
    c = new rd;
    c.R = b;
    c.q = a;
    this.dispatchEvent(c)
};
We.prototype.kc = function(a) {
    this.P = a;
    a = {
        Ei: 0,
        eh: r,
        fh: r,
        mh: 0,
        yi: 0,
        qi: 0,
        ih: r,
        J: r,
        Dh: 0,
        Eh: 0,
        Fh: 0,
        Bh: 0,
        Gb: 0,
        Zg: 0,
        Ii: 0,
        qa: r,
        Jg: 0,
        xi: 0,
        wi: 0,
        Hi: 0,
        Fi: r,
        Wi: r,
        ah: 0,
        bh: 0,
        Gi: 0,
        Pi: 0,
        th: 0,
        uh: 0,
        hh: r,
        Yg: r,
        ji: 0,
        Ci: 0,
        ni: 0,
        oi: 0,
        pi: 0,
        ki: 0,
        li: 0,
        mi: 0,
        Ji: r,
        Ki: r,
        Li: r,
        Ch: r,
        Jh: r,
        data: r,
        min: Infinity,
        max: -Infinity
    };
    a.Ei = $(this, "uint");
    a.eh = $(this, "uchar", 10);
    a.fh = $(this, "uchar", 18);
    a.mh = $(this, "uint");
    a.yi = $(this, "ushort");
    a.qi = $(this, "uchar");
    a.ih = $(this, "uchar");
    a.J = $(this, "ushort", 8);
    a.Dh = $(this, "float");
    a.Eh = $(this, "float");
    a.Fh = $(this, "float");
    a.Bh = $(this, "ushort");
    a.Gb = $(this, "ushort");
    a.Zg = $(this, "ushort");
    a.Ii = $(this, "ushort");
    a.qa = $(this, "float", 8);
    a.Jg = $(this, "float");
    a.xi = $(this, "float");
    a.wi = $(this, "float");
    a.Hi = $(this, "ushort");
    a.Fi = $(this, "uchar");
    a.Wi = $(this, "uchar");
    a.ah = $(this, "float");
    a.bh = $(this, "float");
    a.Gi = $(this, "float");
    a.Pi = $(this, "float");
    a.th = $(this, "uint", 1);
    a.uh = $(this, "uint", 1);
    a.hh = $(this, "uchar", 80);
    a.Yg = $(this, "uchar", 24);
    a.ji = $(this, "ushort");
    a.Ci = $(this, "ushort");
    a.ni = $(this, "float");
    a.oi =
        $(this, "float");
    a.pi = $(this, "float");
    a.ki = $(this, "float");
    a.li = $(this, "float");
    a.mi = $(this, "float");
    a.Ji = $(this, "float", 4);
    a.Ki = $(this, "float", 4);
    a.Li = $(this, "float", 4);
    a.Ch = $(this, "uchar", 16);
    a.Jh = $(this, "uchar", 4);
    this.t = parseInt(a.Jg, 10);
    var b = a.J[1] * a.J[2] * a.J[3];
    switch (a.Gb) {
        case 2:
            a.data = $(this, "uchar", b);
            break;
        case 4:
            a.data = $(this, "sshort", b);
            break;
        case 8:
            a.data = $(this, "sint", b);
            break;
        case 16:
            a.data = $(this, "float", b);
            break;
        case 256:
            a.data = $(this, "schar", b);
            break;
        case 512:
            a.data = $(this, "ushort",
                b);
            break;
        case 768:
            a.data = $(this, "uint", b);
            break;
        default:
            i(Error("Unsupported NII data type: " + a.Gb))
    }
    b = se(a.data);
    a.min = b[0];
    a.max = b[1];
    return a
};
E("X.parserNII", We);
E("X.parserNII.prototype.parse", We.prototype.parse);

function Ye() {
    N.call(this);
    this.c = "loader";
    this.tc = new Mb;
    this.Xc = 0
}
H(Ye, N);

function Ze(a, b) {
    a.Xc += b / a.tc.Wa() / 3;
    a.Xc = Math.min(1, a.Xc);
    var c = new Pd;
    c.Jf = a.Xc;
    a.dispatchEvent(c)
}

function $e(a) {
    var a = a.p.wc,
        b = a.split(".").pop().toUpperCase();
    b == a.toUpperCase() && (b = "");
    b in af || i(Error("The " + b + " file format is not supported."));
    return [a, b, af[b][0], af[b][1], af[b][2]]
}
Ye.prototype.load = function(a, b) {
    (!a || !b) && i(Error("No container or object to load."));
    if (!Ob(this.tc.H, a.sa) || this.tc.get(a.sa)) {
        this.tc.set(a.sa, s);
        var c = $e(a)[0];
        a.Ia != r && (a.mb != r && a.nb != r || a.mb == r) ? this.parse(r, a, b) : (bf(this, c, s, a, b), a.mb != r && a.nb == r && bf(this, a.mb.wc, o, a, b))
    }
};

function bf(a, b, c, d, e) {
    var f = new XMLHttpRequest;
    M(f, "abort", a.Vf.bind(a, f, d, e));
    M(f, "error", a.Vf.bind(a, f, d, e));
    M(f, "load", a.parse.bind(a, f, d, e, c));
    f.open("GET", b, o);
    f.responseType = "arraybuffer";
    f.send(r)
}
Ye.prototype.parse = function(a, b, c, d) {
    Ze(this, 1);
    setTimeout(function() {
        var e = $e(b),
            f = e[3],
            e = new e[2];
        qc(e, wc, this.complete.bind(this));
        if (d) {
            if (b.nb = a.response, b.Ia == r) return
        } else if (b.Ia == r && (d || (b.Ia = a.response), b.mb != r && b.nb == r)) return;
        b.nb != r ? e.parse(b, c, b.nb, b.Ia, f) : e.parse(b, c, b.Ia, f)
    }.bind(this), 100)
};
Ye.prototype.complete = function(a) {
    Ze(this, 1);
    setTimeout(function() {
        var b = a.q,
            c = a.R;
        b.p.e = s;
        b.e = o;
        c.o();
        this.tc.set(b.sa, o)
    }.bind(this), 100)
};
Ye.prototype.Vf = function(a, b, c) {
    i(Error("Loading failed: ", b, c))
};
var af = {
    STL: [Ie, r],
    VTK: [Le, r],
    TRK: [Se, r],
    DX: [Te, r],
    FSM: [Ne, r],
    INFLATED: [Ne, r],
    SMOOTHWM: [Ne, r],
    SPHERE: [Ne, r],
    PIAL: [Ne, r],
    ORIG: [Ne, r],
    NRRD: [Qe, r],
    NII: [We, r],
    GZ: [We, r],
    DCM: [Ke, r],
    DICOM: [Ke, r],
    IMG: [Ve, r],
    HDR: [Ve, r],
    "": [Ke, r],
    CRV: [Re, r],
    LABEL: [Pe, r],
    MGH: [Oe, s],
    MGZ: [Oe, o],
    TXT: [Ue, r],
    LUT: [Ue, r],
    PNG: [ze, "png"],
    JPG: [ze, "jpeg"],
    JPEG: [ze, "jpeg"],
    GIF: [ze, "gif"]
};

function cf(a) {
    function b(a, b, d) {
        b = 2 * b * Math.PI;
        b = k.Hb(Math.cos(b)).Ec(l.Hb(Math.sin(b)));
        a = c.Ec(e.Hb(a)).Ec(b.Hb(f));
        d = b.Hb(1 - Math.abs(d)).Ec(g.Hb(d));
        return new Cc(a, d)
    }
    this.C = [];
    for (var a = a || {}, c = new va(a.start || [0, -1, 0]), d = new va(a.end || [0, 1, 0]), e = d.md(c), f = a.Ya || 1, a = a.lf || 16, g = e.sd(), h = 0.5 < Math.abs(g.y()), k = (new va(h, !h, 0)).Ke(g).sd(), l = k.Ke(g).sd(), h = new Cc(c, g.$e()), d = new Cc(d, g.sd()), j = [], m = 0; m < a; m++) {
        var p = m / a,
            q = (m + 1) / a;
        j.push(new Hc([h, b(0, p, -1), b(0, q, -1)]));
        j.push(new Hc([b(0, q, 0), b(0, p,
            0), b(1, p, 0), b(1, q, 0)]));
        j.push(new Hc([d, b(1, q, 1), b(1, p, 1)]))
    }
    return Kc(j)
}
H(cf, Jc);

function df() {
    T.call(this);
    this.c = "cylinder";
    this.Be = [-10, -10, -10];
    this.ke = [10, 10, 10];
    this.Xb = 10;
    this.$b = 32;
    wa(this, new td)
}
H(df, T);
df.prototype.__defineGetter__("start", t("Be"));
df.prototype.__defineSetter__("start", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid start"));
    this.Be = a
});
df.prototype.__defineGetter__("end", t("ke"));
df.prototype.__defineSetter__("end", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid end"));
    this.ke = a
});
df.prototype.__defineGetter__("radius", t("Xb"));
df.prototype.__defineSetter__("radius", function(a) {
    D(a) || i(Error("Invalid radius."));
    this.Xb = a
});
df.prototype.o = function() {
    vd(this, new cf({
        start: this.Be,
        end: this.ke,
        Ya: this.Xb,
        lf: this.$b
    }));
    df.k.o.call(this)
};
E("X.cylinder", df);
E("X.cylinder.prototype.modified", df.prototype.o);

function ef(a) {
    function b(a, b) {
        var a = a * 2 * Math.PI,
            b = b * Math.PI,
            e = new va(Math.cos(a) * Math.sin(b), Math.cos(b), Math.sin(a) * Math.sin(b));
        g.push(new Cc(c.Ec(e.Hb(d)), e))
    }
    this.C = [];
    for (var a = a || {}, c = new va(a.Ge || [0, 0, 0]), d = a.Ya || 1, e = a.lf || 16, a = a.Mi || 8, f = [], g = [], h = 0; h < e; h++)
        for (var k = 0; k < a; k++) g = [], b(h / e, k / a), 0 < k && b((h + 1) / e, k / a), k < a - 1 && b((h + 1) / e, (k + 1) / a), b(h / e, (k + 1) / a), f.push(new Hc(g));
    return Kc(f)
}
H(ef, Jc);

function ff() {
    T.call(this);
    this.c = "sphere";
    this.l = [0, 0, 0];
    this.Xb = 5;
    this.$b = 32;
    this.Wg = 16;
    wa(this, new td)
}
H(ff, T);
ff.prototype.__defineGetter__("center", t("l"));
ff.prototype.__defineSetter__("center", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid center"));
    this.l = a
});
ff.prototype.__defineGetter__("radius", t("Xb"));
ff.prototype.__defineSetter__("radius", function(a) {
    D(a) || i(Error("Invalid radius."));
    this.Xb = a
});
ff.prototype.o = function() {
    vd(this, new ef({
        Ge: this.l,
        Ya: this.Xb,
        lf: this.$b,
        Mi: this.Wg
    }));
    ff.k.o.call(this)
};
E("X.sphere", ff);
E("X.sphere.prototype.modified", ff.prototype.o);

function He(a) {
    P.call(this);
    this.c = "labelmap";
    this.eb = a
}
H(He, P);
He.prototype.o = function() {
    var a = new rd;
    a.R = this;
    this.dispatchEvent(a);
    this.eb.o()
};
E("X.labelmap", He);

function gf(a) {
    this.C = [];
    var a = a || {},
        b = new va(a.Ge || [0, 0, 0]),
        c = !a.Ya ? [1, 1, 1] : a.Ya.length ? a.Ya : [a.Ya, a.Ya, a.Ya];
    return Kc([
        [
            [0, 4, 6, 2],
            [-1, 0, 0]
        ],
        [
            [1, 3, 7, 5],
            [1, 0, 0]
        ],
        [
            [0, 1, 5, 4],
            [0, -1, 0]
        ],
        [
            [2, 6, 7, 3],
            [0, 1, 0]
        ],
        [
            [0, 2, 3, 1],
            [0, 0, -1]
        ],
        [
            [4, 5, 7, 6],
            [0, 0, 1]
        ]
    ].map(function(a) {
        return new Hc(a[0].map(function(e) {
            e = new va(b.x() + c[0] * (2 * !!(e & 1) - 1), b.y() + c[1] * (2 * !!(e & 2) - 1), b.b() + c[2] * (2 * !!(e & 4) - 1));
            return new Cc(e, new va(a[1]))
        }))
    }))
}
H(gf, Jc);

function hf() {
    T.call(this);
    this.c = "cube";
    this.l = [0, 0, 0];
    this.re = this.qe = this.pe = 20;
    this.ac = [0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0];
    wa(this, new td)
}
H(hf, T);
hf.prototype.__defineGetter__("center", t("l"));
hf.prototype.__defineSetter__("center", function(a) {
    (!y(a) || !C(a) || 3 != a.length) && i(Error("Invalid center"));
    this.l = a
});
hf.prototype.__defineGetter__("lengthX", t("pe"));
hf.prototype.__defineSetter__("lengthX", function(a) {
    D(a) || i(Error("Invalid lengthX."));
    this.pe = a
});
hf.prototype.__defineGetter__("lengthY", t("qe"));
hf.prototype.__defineSetter__("lengthY", function(a) {
    D(a) || i(Error("Invalid lengthY."));
    this.qe = a
});
hf.prototype.__defineGetter__("lengthZ", t("re"));
hf.prototype.__defineSetter__("lengthZ", function(a) {
    D(a) || i(Error("Invalid lengthZ."));
    this.re = a
});
hf.prototype.o = function() {
    vd(this, new gf({
        Ge: this.l,
        Ya: [this.pe / 2, this.qe / 2, this.re / 2]
    }));
    hf.k.o.call(this)
};
E("X.cube", hf);
E("X.cube.prototype.modified", hf.prototype.o);

function jf(a) {
    le.call(this, a);
    this.c = "interactor3D"
}
H(jf, le);
jf.prototype.nd = function(a) {
    jf.k.nd.call(this, a);
    var b = new Jd;
    y(a.Ac) || (a.Ac = 0);
    b.Pb = 0 > a.Ac;
    b.kb = o;
    this.dispatchEvent(b)
};

function kf(a) {
    N.call(this);
    this.c = "array";
    this.v = [];
    this.vf = a
}
H(kf, N);
kf.prototype.add = function(a) {
    this.v.push(a);
    return o
};
kf.prototype.clear = function() {
    this.v.length = 0
};

function lf(a, b, c) {
    var d = c - b;
    if (!(2 > d)) {
        d = b + Math.floor(d / 2);
        lf(a, b, d);
        for (lf(a, d, c); b < d; ++b)
            if (0 < a.vf(a.v[b], a.v[d])) {
                var e = a.v[b];
                a.v[b] = a.v[d];
                for (var f = a, g = d, h = c; g + 1 < h && 0 > f.vf(f.v[g + 1], e);) {
                    var k = f,
                        l = g + 1,
                        j = k.v[g];
                    k.v[g] = k.v[l];
                    k.v[l] = j;
                    ++g
                }
                f.v[g] = e
            }
    }
}
kf.prototype.sort = function() {
    lf(this, 0, this.v.length)
};

function mf(a, b, c, d) {
    this.top = a;
    this.right = b;
    this.bottom = c;
    this.left = d
}
mf.prototype.f = function() {
    return new mf(this.top, this.right, this.bottom, this.left)
};
mf.prototype.contains = function(a) {
    return !this || !a ? s : a instanceof mf ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom
};

function nf(a, b, c, d) {
    this.left = a;
    this.top = b;
    this.width = c;
    this.height = d
}
nf.prototype.f = function() {
    return new nf(this.left, this.top, this.width, this.height)
};
nf.prototype.fg = function(a) {
    var b = Math.max(this.left, a.left),
        c = Math.min(this.left + this.width, a.left + a.width);
    if (b <= c) {
        var d = Math.max(this.top, a.top),
            a = Math.min(this.top + this.height, a.top + a.height);
        if (d <= a) return this.left = b, this.top = d, this.width = c - b, this.height = a - d, o
    }
    return s
};
nf.prototype.contains = function(a) {
    return a instanceof nf ? this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height : a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height
};
nf.prototype.xa = function() {
    return new Wc(this.width, this.height)
};

function of (a, b) {
    var c = Yd(a);
    return c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, r)) ? c[b] || c.getPropertyValue(b) : ""
}

function pf(a, b) {
    return a.currentStyle ? a.currentStyle[b] : r
}

function qf(a, b) {
    return of(a, b) || pf(a, b) || a.style && a.style[b]
}

function rf(a) {
    a = a ? 9 == a.nodeType ? a : Yd(a) : document;
    return K && !kb(9) && !je(Wd(a)) ? a.body : a.documentElement
}

function sf(a) {
    var b = a.getBoundingClientRect();
    K && (a = a.ownerDocument, b.left -= a.documentElement.clientLeft + a.body.clientLeft, b.top -= a.documentElement.clientTop + a.body.clientTop);
    return b
}

function tf(a) {
    if (K && !kb(8)) return a.offsetParent;
    for (var b = Yd(a), c = qf(a, "position"), d = "fixed" == c || "absolute" == c, a = a.parentNode; a && a != b; a = a.parentNode)
        if (c = qf(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
    return r
}

function uf(a) {
    for (var b = new mf(0, Infinity, Infinity, 0), c = Wd(a), d = c.O.body, e = c.O.documentElement, f = !Ua && "CSS1Compat" == c.O.compatMode ? c.O.documentElement : c.O.body; a = tf(a);)
        if ((!K || 0 != a.clientWidth) && (!Ua || 0 != a.clientHeight || a != d) && a != d && a != e && "visible" != qf(a, "overflow")) {
            var g = vf(a),
                h;
            h = a;
            if (Ta && !hb("1.9")) {
                var k = parseFloat( of (h, "borderLeftWidth"));
                if (wf(h)) var l = h.offsetWidth - h.clientWidth - k - parseFloat( of (h, "borderRightWidth")),
                    k = k + l;
                h = new Tc(k, parseFloat( of (h, "borderTopWidth")))
            } else h = new Tc(h.clientLeft,
                h.clientTop);
            g.x += h.x;
            g.y += h.y;
            b.top = Math.max(b.top, g.y);
            b.right = Math.min(b.right, g.x + a.clientWidth);
            b.bottom = Math.min(b.bottom, g.y + a.clientHeight);
            b.left = Math.max(b.left, g.x)
        }
    d = f.scrollLeft;
    f = f.scrollTop;
    b.left = Math.max(b.left, d);
    b.top = Math.max(b.top, f);
    c = c.O.parentWindow || c.O.defaultView || window;
    e = c.document;
    Ua && !hb("500") && !Va ? ("undefined" == typeof c.innerHeight && (c = window), e = c.innerHeight, a = c.document.documentElement.scrollHeight, c == c.top && a < e && (e -= 15), c = new Wc(c.innerWidth, e)) : (c = "CSS1Compat" ==
        e.compatMode ? e.documentElement : e.body, c = new Wc(c.clientWidth, c.clientHeight));
    b.right = Math.min(b.right, d + c.width);
    b.bottom = Math.min(b.bottom, f + c.height);
    return 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : r
}

function vf(a) {
    var b, c = Yd(a),
        d = qf(a, "position"),
        e = Ta && c.getBoxObjectFor && !a.getBoundingClientRect && "absolute" == d && (b = c.getBoxObjectFor(a)) && (0 > b.screenX || 0 > b.screenY),
        f = new Tc(0, 0),
        g = rf(c);
    if (a == g) return f;
    if (a.getBoundingClientRect) b = sf(a), a = ke(Wd(c)), f.x = b.left + a.x, f.y = b.top + a.y;
    else if (c.getBoxObjectFor && !e) b = c.getBoxObjectFor(a), a = c.getBoxObjectFor(g), f.x = b.screenX - a.screenX, f.y = b.screenY - a.screenY;
    else {
        b = a;
        do {
            f.x += b.offsetLeft;
            f.y += b.offsetTop;
            b != a && (f.x += b.clientLeft || 0, f.y += b.clientTop || 0);
            if (Ua && "fixed" == qf(b, "position")) {
                f.x += c.body.scrollLeft;
                f.y += c.body.scrollTop;
                break
            }
            b = b.offsetParent
        } while (b && b != a);
        if (Ra || Ua && "absolute" == d) f.y -= c.body.offsetTop;
        for (b = a;
            (b = tf(b)) && b != c.body && b != g;)
            if (f.x -= b.scrollLeft, !Ra || "TR" != b.tagName) f.y -= b.scrollTop
    }
    return f
}

function xf(a, b) {
    "number" == typeof a && (a = (b ? Math.round(a) : a) + "px");
    return a
}

function yf(a) {
    if ("none" != qf(a, "display")) return zf(a);
    var b = a.style,
        c = b.display,
        d = b.visibility,
        e = b.position;
    b.visibility = "hidden";
    b.position = "absolute";
    b.display = "inline";
    a = zf(a);
    b.display = c;
    b.position = e;
    b.visibility = d;
    return a
}

function zf(a) {
    var b = a.offsetWidth,
        c = a.offsetHeight,
        d = Ua && !b && !c;
    return (!fa(b) || d) && a.getBoundingClientRect ? (a = sf(a), new Wc(a.right - a.left, a.bottom - a.top)) : new Wc(b, c)
}

function Af(a, b) {
    a.style.display = b ? "" : "none"
}

function wf(a) {
    return "rtl" == qf(a, "direction")
}

function Bf(a, b) {
    if (/^\d+px?$/.test(b)) return parseInt(b, 10);
    var c = a.style.left,
        d = a.runtimeStyle.left;
    a.runtimeStyle.left = a.currentStyle.left;
    a.style.left = b;
    var e = a.style.pixelLeft;
    a.style.left = c;
    a.runtimeStyle.left = d;
    return e
}
var Cf = {
    thin: 2,
    medium: 4,
    thick: 6
};

function Df(a, b) {
    if ("none" == pf(a, b + "Style")) return 0;
    var c = pf(a, b + "Width");
    return c in Cf ? Cf[c] : Bf(a, c)
};

function Ef(a) {
    this.Oa = a;
    this.z = []
}
H(Ef, Tb);
var Ff = [];

function Gf(a, b, c, d, e) {
    C(c) || (Ff[0] = c, c = Ff);
    for (var f = 0; f < c.length; f++) a.z.push(M(b, c[f], d || a, e || s, a.Oa || a))
}
Ef.prototype.ce = function() {
    ub(this.z, sc);
    this.z.length = 0
};
Ef.prototype.N = function() {
    Ef.k.N.call(this);
    this.ce()
};
Ef.prototype.handleEvent = function() {
    i(Error("EventHandler.handleEvent not implemented"))
};

function Hf() {}(function(a) {
    a.Wf = function() {
        return a.Ah || (a.Ah = new a)
    }
})(Hf);
Hf.prototype.af = 0;
Hf.Wf();

function If(a) {
    this.Ua = a || Wd()
}
H(If, Bc);
u = If.prototype;
u.yh = Hf.Wf();
u.cg = r;
u.ic = s;
u.s = r;
u.Dc = r;
u.Nd = r;
u.bd = r;
u.Vi = s;
u.i = t("s");
u.jf = function(a) {
    this.Dc && this.Dc != a && i(Error("Method not supported"));
    If.k.jf.call(this, a)
};
u.Rd = t("Ua");
u.zc = function() {
    this.s = this.Ua.createElement("div")
};
u.mc = function(a) {
    this.fb(a)
};
u.fb = function(a, b) {
    this.ic && i(Error("Component already rendered"));
    this.s || this.zc();
    a ? a.insertBefore(this.s, b || r) : this.Ua.O.body.appendChild(this.s);
    (!this.Dc || this.Dc.ic) && this.Qd()
};
u.Qd = function() {
    this.ic = o;
    Jf(this, function(a) {
        !a.ic && a.i() && a.Qd()
    })
};
u.fd = function() {
    Jf(this, function(a) {
        a.ic && a.fd()
    });
    this.Vd && this.Vd.ce();
    this.ic = s
};
u.N = function() {
    If.k.N.call(this);
    this.ic && this.fd();
    this.Vd && (this.Vd.Ma(), delete this.Vd);
    Jf(this, function(a) {
        a.Ma()
    });
    !this.Vi && this.s && ge(this.s);
    this.Dc = this.s = this.bd = this.Nd = r
};

function Jf(a, b) {
    a.Nd && ub(a.Nd, b, n)
}
u.removeChild = function(a, b) {
    if (a) {
        var c = ia(a) ? a : a.cg || (a.cg = ":" + (a.yh.af++).toString(36)),
            a = this.bd && c ? (c in this.bd ? this.bd[c] : n) || r : r;
        if (c && a) {
            var d = this.bd;
            c in d && delete d[c];
            yb(this.Nd, a);
            b && (a.fd(), a.s && ge(a.s));
            c = a;
            c == r && i(Error("Unable to set parent component"));
            c.Dc = r;
            If.k.jf.call(c, r)
        }
    }
    a || i(Error("Child is not in parent component"));
    return a
};

function Kf() {}
H(Kf, Bc);
u = Kf.prototype;
u.rf = 0;
u.ld = 0;
u.We = 100;
u.Uf = 0;
u.of = 1;
u.Hh = s;
u.Lh = s;
u.fe = function(a) {
    a = Lf(this, a);
    this.rf != a && (this.rf = a + this.Uf > this.We ? this.We - this.Uf : a < this.ld ? this.ld : a, !this.Hh && !this.Lh && this.dispatchEvent("change"))
};
u.Ud = function() {
    return Lf(this, this.rf)
};
u.Td = function() {
    return Lf(this, this.ld)
};
u.Sd = function() {
    return Lf(this, this.We)
};

function Lf(a, b) {
    return a.of == r ? b : a.ld + Math.round((b - a.ld) / a.of) * a.of
};

function Mf(a) {
    this.Ua = a || Wd();
    this.Fc = new Kf;
    M(this.Fc, "change", this.vh, s, this)
}
H(Mf, If);
var Nf = {
    vertical: "progress-bar-vertical",
    horizontal: "progress-bar-horizontal"
};
u = Mf.prototype;
u.zc = function() {
    this.Ra = this.Rd().zc("div", "progress-bar-thumb");
    var a = Nf[this.ug];
    this.s = this.Rd().zc("div", a, this.Ra);
    Of(this);
    this.i().setAttribute("aria-valuemin", this.Td());
    this.i().setAttribute("aria-valuemax", this.Sd())
};
u.Qd = function() {
    Mf.k.Qd.call(this);
    K && 7 > Za && M(this.i(), "resize", this.ie, s, this);
    this.ie();
    var a = this.i();
    a.setAttribute("role", "progressbar");
    a.Pj = "progressbar";
    this.i().setAttribute("aria-live", "polite")
};
u.fd = function() {
    Mf.k.fd.call(this);
    Pf(this)
};

function Pf(a) {
    K && 7 > Za && rc(a.i(), "resize", a.ie, s, a)
}
u.Ud = function() {
    return this.Fc.Ud()
};
u.fe = function(a) {
    this.Fc.fe(a);
    this.i() && Of(this)
};

function Of(a) {
    var b = a.Ud();
    a.i().setAttribute("aria-valuenow", b)
}
u.Td = function() {
    return this.Fc.Td()
};
u.Sd = function() {
    return this.Fc.Sd()
};
u.ug = "horizontal";
u.vh = function() {
    this.ie();
    this.dispatchEvent("change")
};
u.ie = function() {
    if (this.Ra) {
        var a = this.Td(),
            b = this.Sd(),
            a = (this.Ud() - a) / (b - a),
            b = Math.round(100 * a);
        "vertical" == this.ug ? K && 7 > Za ? (this.Ra.style.top = 0, this.Ra.style.height = "100%", b = this.Ra.offsetHeight, a = Math.round(a * b), this.Ra.style.top = b - a + "px", this.Ra.style.height = a + "px") : (this.Ra.style.top = 100 - b + "%", this.Ra.style.height = b + "%") : this.Ra.style.width = b + "%"
    }
};
u.N = function() {
    Pf(this);
    Mf.k.N.call(this);
    this.Ra = r;
    this.Fc.Ma()
};

function Qf(a, b) {
    y(a) || i(Error("No valid parent element."));
    y(b) || i(Error("Invalid initial value."));
    Mf.call(this);
    this.c = "progressbar";
    this.Ea = a;
    this.xd = this.cb = r;
    this.Mb = [];
    this.Mb = [".progress-bar-horizontal {\n  position: relative;\n  border: 1px solid #949dad;\n  background: white;\n  padding: 1px;\n  overflow: hidden;\n  margin: 2px;\n  width: 100px;\n  height: 5px;\n}", ".progress-bar-thumb {\n  position: relative;\n  background: #F62217;\n  overflow: hidden;\n  width: 0%;\n  height: 100%;\n}",
        ".progress-bar-thumb-done {\n  background: #57E964;\n}"
    ];
    this.fe(b);
    this.Se()
}
H(Qf, Mf);
Qf.prototype.Se = function() {
    if ("static" == this.Ea.style.position || "" == this.Ea.style.position) this.Ea.style.position = "relative";
    var a = document.getElementsByTagName("head")[0],
        b = ce("style");
    b.type = "text/css";
    b.media = "screen";
    var c = document.createTextNode(this.Mb[0]),
        d = document.createTextNode(this.Mb[1]),
        e = document.createTextNode(this.Mb[2]);
    a.appendChild(b);
    b.appendChild(c);
    b.appendChild(d);
    b.appendChild(e);
    this.cb = b;
    this.mc(this.Ea);
    a = this.i();
    a.style.position = "absolute";
    a.style.top = (this.Ea.clientHeight -
        5) / 2 + "px";
    a.style.left = (this.Ea.clientWidth - 100) / 2 + "px";
    a.classList.add("xtk-progress-bar")
};

function Rf(a) {
    var b = a.i().style.top,
        c = a.i().style.left;
    ge(a.i());
    var d = new Qf(a.Ea, 100),
        e = d.i();
    e.style.position = "absolute";
    e.style.top = b;
    e.style.left = c;
    e.classList.add("xtk-progress-bar");
    (e.firstElementChild != n ? e.firstElementChild : he(e.firstChild)).classList.add("progress-bar-thumb-done");
    a.xd = d
}
Qf.prototype.Xd = function() {
    this.cb && ge(this.cb);
    this.i() && ge(this.i());
    this.xd && ge(this.xd.i());
    this.xd = this.cb = r
};
var Sf = ca.window;

function Tf(a, b, c) {
    ja(a) ? c && (a = qa(a, c)) : a && "function" == typeof a.handleEvent ? a = qa(a.handleEvent, a) : i(Error("Invalid listener argument"));
    return 2147483647 < b ? -1 : Sf.setTimeout(a, b || 0)
};

function Uf() {
    N.call(this);
    this.c = "renderer";
    this.q = window.document.body;
    this.B = this.q.clientWidth;
    this.w = this.q.clientHeight;
    this.Dd = this.Cd = 0;
    this.Qb = this.r = this.ia = r;
    this.ab = new kf(sd);
    this.Ta = [];
    this.D = r;
    this.we = this.zd = this.Ad = s;
    this.a = this.na = r;
    this.X = {
        PROGRESSBAR_ENABLED: o
    };
    this.tf = -1;
    window.console.log("XTK release 9 -- 2013-04-18 10:38:23 -- https://www.goXTK.com -- @goXTK")
}
H(Uf, N);
u = Uf.prototype;
u.ai = function(a) {
    this.na && this.na.fe(100 * a.Jf)
};
u.Qh = function(a) {
    y(a) && a instanceof rd && a.R && this.Za(a.R)
};
u.df = function(a) {
    (!y(a) || !(a instanceof Ld)) && i(Error("Invalid hover event."))
};
u.Zh = function(a) {
    (!y(a) || !(a instanceof Od)) && i(Error("Invalid paint event."));
    this.Cd = a.cc;
    this.Dd = a.dc;
    this.fb(s, s)
};
u.bi = function() {
    var a = Zd(this.q);
    this.B = a.clientWidth;
    this.w = a.clientHeight;
    a = Zd(this.ia);
    a.width = this.B;
    a.height = this.w;
    this instanceof Vf && (this.a.viewport(0, 0, this.B, this.w), this.r.Ff = new Float32Array(re(this.r.wf, this.ia.width / this.ia.height).Fa()));
    this.Hc()
};
u.ef = function(a) {
    (!y(a) || !(a instanceof Kd)) && i(Error("Invalid scroll event."))
};
Uf.prototype.__defineGetter__("config", t("X"));
Uf.prototype.__defineGetter__("interactor", t("Qb"));
Uf.prototype.__defineGetter__("camera", t("r"));
Uf.prototype.__defineGetter__("loadingCompleted", t("zd"));
Uf.prototype.__defineGetter__("container", t("q"));
Uf.prototype.__defineSetter__("container", function(a) {
    y(a) || i(Error("An ID to a valid container (<div>..) is required."));
    var b = a;
    ia(b) && (b = Zd(a));
    ka(b) && 1 == b.nodeType || i(Error("Could not find the given container."));
    this.q = b
});
u = Uf.prototype;
u.Hc = function() {
    this.r.reset()
};

function Wf(a) {
    a.X.PROGRESSBAR_ENABLED && a.na && !a.uf && (Rf(a.na), a.uf = Tf(function() {
        this.uf = r;
        this.na && (this.na.Xd(), this.na = r);
        this.mc()
    }.bind(a), 700))
}
u.la = function(a) {
    var b = ce("canvas");
    this.q.appendChild(b);
    this.B = this.q.clientWidth;
    this.w = this.q.clientHeight;
    b.width = this.B;
    b.height = this.w;
    try {
        var c = b.getContext(a);
        c || i(Error())
    } catch (d) {
        var e = "Sorry, " + a + ' context is <strong>not supported</strong> on this machine! See <a href="https://crash.goXTK.com" target="_blank">https://crash.goXTK.com</a> for requirements..';
        this.q.innerHTML = '<h3 style="color:red;font-family:sans-serif;">Oooops..</h3><p style="color:red;font-family:sans-serif;">' + e + "</p>";
        i(Error(e))
    }
    this.D = new Ye;
    M(this.D, Dd, this.ai.bind(this));
    this.ia = b;
    this.a = c;
    b = new jf(this.ia);
    "2d" == a && (b = new ne(this.ia));
    b.la();
    M(b, Bd, this.Hc.bind(this));
    M(b, Ed, this.df.bind(this));
    M(b, Ad, this.ef.bind(this));
    M(b, Gd, this.Zh.bind(this));
    this.Qb = b;
    b = new qe(this.B, this.w);
    "2d" == a && (b = new Ae(this.B, this.w));
    a = b;
    c = this.Qb;
    (!y(c) || !(c instanceof le)) && i(Error("Could not observe the interactor."));
    M(c, yd, a.ci.bind(a));
    M(c, xd, a.$h.bind(a));
    M(c, zd, a.gi.bind(a));
    this.r = b;
    M(window, "resize", this.bi, s, this)
};
u.add = function(a) {
    (a instanceof hf || a instanceof ff || a instanceof df) && a.o();
    this.Ta.push(a);
    this.Za(a)
};
u.Za = function(a) {
    (!this.ia || !this.a) && i(Error("The renderer was not initialized properly."));
    y(a) || (window.console.log(a), i(Error("Illegal object.")));
    vc(a) || M(a, wc, this.Qh.bind(this))
};
u.get = function(a) {
    y(a) || i(Error("Invalid object id."));
    for (var b = this.ab.v, c = b.length, d = 0, d = 0; d < c; d++)
        if (b[d].sa == a) return b[d];
    return r
};
u.mc = function() {
    (!this.ia || !this.a) && i(Error("The renderer was not initialized properly."));
    y(this.Hf) || (this.D.tc.Ie(s) ? (this.X.PROGRESSBAR_ENABLED && !this.na && (this.na = new Qf(this.q, 3)), this.we = this.zd = s, this.Hf = Tf(function() {
        this.Hf = r;
        this.mc()
    }.bind(this), 100)) : (!this.zd && !this.we && (this.we = o, eval("this.onShowtime()"), this.zd = o), this.na ? Wf(this) : (this.tf = window.od(this.mc.bind(this), this.ia), eval("this.onRender()"), this.fb(s, o))))
};
u.tg = aa();
u.rg = aa();
u.fb = aa();
u.Pd = function() {
    window.Md(this.tf);
    this.D && (delete this.D, this.D = r);
    this.na && (this.na.Xd(), delete this.na, this.na = r);
    this.ab.clear();
    delete this.ab;
    this.Ta.length = 0;
    delete this.Ta;
    delete this.D;
    this.D = r;
    delete this.r;
    this.r = r;
    delete this.Qb;
    this.Qb = r;
    delete this.a;
    this.a = r;
    ge(this.ia);
    delete this.ia;
    this.ia = r
};

function Xf(a, b, c, d, e, f, g, h) {
    var k, l = c.offsetParent;
    if (l) {
        var j = "HTML" == l.tagName || "BODY" == l.tagName;
        if (!j || "static" != qf(l, "position")) k = vf(l), j || (k = Uc(k, new Tc(l.scrollLeft, l.scrollTop)))
    }
    l = vf(a);
    j = yf(a);
    l = new nf(l.x, l.y, j.width, j.height);
    (j = uf(a)) && l.fg(new nf(j.left, j.top, j.right - j.left, j.bottom - j.top));
    var j = Wd(a),
        m = Wd(c);
    if (j.O != m.O) {
        var p = j.O.body,
            m = m.O.parentWindow || m.O.defaultView,
            q = new Tc(0, 0),
            v = Yd(p) ? Yd(p).parentWindow || Yd(p).defaultView : window,
            w = p;
        do {
            var z;
            if (v == m) z = vf(w);
            else {
                var A = w;
                z = new Tc;
                if (1 == A.nodeType)
                    if (A.getBoundingClientRect) A = sf(A), z.x = A.left, z.y = A.top;
                    else {
                        var x = ke(Wd(A)),
                            A = vf(A);
                        z.x = A.x - x.x;
                        z.y = A.y - x.y
                    }
                else {
                    var x = ja(A.sh),
                        B = A;
                    A.targetTouches ? B = A.targetTouches[0] : x && A.Va.targetTouches && (B = A.Va.targetTouches[0]);
                    z.x = B.clientX;
                    z.y = B.clientY
                }
            }
            q.x += z.x;
            q.y += z.y
        } while (v && v != m && (w = v.frameElement) && (v = v.parent));
        p = Uc(q, vf(p));
        K && !je(j) && (p = Uc(p, ke(j)));
        l.left += p.x;
        l.top += p.y
    }
    a = (b & 4 && wf(a) ? b ^ 2 : b) & -5;
    b = new Tc(a & 2 ? l.left + l.width : l.left, a & 1 ? l.top + l.height : l.top);
    k && (b = Uc(b,
        k));
    e && (b.x += (a & 2 ? -1 : 1) * e.x, b.y += (a & 1 ? -1 : 1) * e.y);
    var F;
    if (g && (F = uf(c)) && k) F.top -= k.y, F.right -= k.x, F.bottom -= k.y, F.left -= k.x;
    return Yf(b, c, d, f, F, g, h)
}

function Yf(a, b, c, d, e, f, g) {
    var a = a.f(),
        h = 0,
        k = (c & 4 && wf(b) ? c ^ 2 : c) & -5,
        c = yf(b),
        g = g ? g.f() : c.f();
    if (d || 0 != k) k & 2 ? a.x -= g.width + (d ? d.right : 0) : d && (a.x += d.left), k & 1 ? a.y -= g.height + (d ? d.bottom : 0) : d && (a.y += d.top);
    if (f) {
        if (e) {
            h = a;
            d = 0;
            if (65 == (f & 65) && (h.x < e.left || h.x >= e.right)) f &= -2;
            if (132 == (f & 132) && (h.y < e.top || h.y >= e.bottom)) f &= -5;
            h.x < e.left && f & 1 && (h.x = e.left, d |= 1);
            h.x < e.left && h.x + g.width > e.right && f & 16 && (g.width = Math.max(g.width - (h.x + g.width - e.right), 0), d |= 4);
            h.x + g.width > e.right && f & 1 && (h.x = Math.max(e.right - g.width,
                e.left), d |= 1);
            f & 2 && (d |= (h.x < e.left ? 16 : 0) | (h.x + g.width > e.right ? 32 : 0));
            h.y < e.top && f & 4 && (h.y = e.top, d |= 2);
            h.y >= e.top && h.y + g.height > e.bottom && f & 32 && (g.height = Math.max(g.height - (h.y + g.height - e.bottom), 0), d |= 8);
            h.y + g.height > e.bottom && f & 4 && (h.y = Math.max(e.bottom - g.height, e.top), d |= 2);
            f & 8 && (d |= (h.y < e.top ? 64 : 0) | (h.y + g.height > e.bottom ? 128 : 0));
            h = d
        } else h = 256;
        if (h & 496) return h
    }
    f = a;
    e = Ta && (La || Ya) && hb("1.9");
    f instanceof Tc ? (a = f.x, f = f.y) : (a = f, f = n);
    b.style.left = xf(a, e);
    b.style.top = xf(f, e);
    Xc(c, g) || (a = je(Wd(Yd(b))),
        K && (!a || !hb("8")) ? (c = b.style, a ? (K ? (a = Bf(b, pf(b, "paddingLeft")), e = Bf(b, pf(b, "paddingRight")), f = Bf(b, pf(b, "paddingTop")), d = Bf(b, pf(b, "paddingBottom")), a = new mf(f, e, d, a)) : (a = of (b, "paddingLeft"), e = of (b, "paddingRight"), f = of (b, "paddingTop"), d = of (b, "paddingBottom"), a = new mf(parseFloat(f), parseFloat(e), parseFloat(d), parseFloat(a))), K ? (e = Df(b, "borderLeft"), f = Df(b, "borderRight"), d = Df(b, "borderTop"), b = Df(b, "borderBottom"), b = new mf(d, f, b, e)) : (e = of (b, "borderLeftWidth"), f = of (b, "borderRightWidth"), d = of (b, "borderTopWidth"),
            b = of (b, "borderBottomWidth"), b = new mf(parseFloat(d), parseFloat(f), parseFloat(b), parseFloat(e))), c.pixelWidth = g.width - b.left - a.left - a.right - b.right, c.pixelHeight = g.height - b.top - a.top - a.bottom - b.bottom) : (c.pixelWidth = g.width, c.pixelHeight = g.height)) : (b = b.style, Ta ? b.MozBoxSizing = "border-box" : Ua ? b.WebkitBoxSizing = "border-box" : b.boxSizing = "border-box", b.width = Math.max(g.width, 0) + "px", b.height = Math.max(g.height, 0) + "px"));
    return h
};

function Zf() {}
Zf.prototype.Qa = aa();

function $f(a, b) {
    this.element = a;
    this.Of = b
}
H($f, Zf);
$f.prototype.Qa = function(a, b, c) {
    Xf(this.element, this.Of, a, b, n, c)
};

function ag(a, b) {
    this.Oa = new Ef(this);
    this.hf(a || r);
    b && (this.Jc = b)
}
H(ag, Bc);
u = ag.prototype;
u.s = r;
u.Xg = o;
u.Kf = r;
u.pa = s;
u.Di = s;
u.Ve = -1;
u.xh = s;
u.lh = o;
u.Jc = "toggle_display";
u.i = t("s");
u.hf = function(a) {
    this.pa && i(Error("Can not change this state of the popup while showing."));
    this.s = a
};

function bg(a, b) {
    a.qd && a.qd.stop();
    a.jd && a.jd.stop();
    if (b) {
        if (!a.pa && a.bf()) {
            a.s || i(Error("Caller must call setElement before trying to show the popup"));
            a.Qa();
            var c = Yd(a.s);
            a.xh && Gf(a.Oa, c, "keydown", a.Oh, o);
            if (a.Xg)
                if (Gf(a.Oa, c, "mousedown", a.pg, o), K) {
                    var d;
                    try {
                        d = c.activeElement
                    } catch (e) {}
                    for (; d && "IFRAME" == d.nodeName;) {
                        try {
                            var f = d.contentDocument || d.contentWindow.document
                        } catch (g) {
                            break
                        }
                        c = f;
                        d = c.activeElement
                    }
                    Gf(a.Oa, c, "mousedown", a.pg, o);
                    Gf(a.Oa, c, "deactivate", a.og)
                } else Gf(a.Oa, c, "blur", a.og);
            "toggle_display" ==
            a.Jc ? (a.s.style.visibility = "visible", Af(a.s, o)) : "move_offscreen" == a.Jc && a.Qa();
            a.pa = o;
            a.qd ? (qc(a.qd, "end", a.sg, s, a), a.qd.play()) : a.sg()
        }
    } else cg(a)
}
u.Qa = da;

function cg(a, b) {
    if (!a.pa || !a.dispatchEvent({
            type: "beforehide",
            target: b
        })) return s;
    a.Oa && a.Oa.ce();
    a.jd ? (qc(a.jd, "end", ra(a.Nf, b), s, a), a.jd.play()) : a.Nf(b);
    return o
}
u.Nf = function(a) {
    "toggle_display" == this.Jc ? this.Di ? Tf(this.bg, 0, this) : this.bg() : "move_offscreen" == this.Jc && (this.s.style.left = "-200px", this.s.style.top = "-200px");
    this.pa = s;
    this.cf(a)
};
u.bg = function() {
    this.s.style.visibility = "hidden";
    Af(this.s, s)
};
u.bf = function() {
    return this.dispatchEvent("beforeshow")
};
u.sg = function() {
    this.Ve = sa();
    this.dispatchEvent("show")
};
u.cf = function(a) {
    sa();
    this.dispatchEvent({
        type: "hide",
        target: a
    })
};
u.pg = function(a) {
    a = a.target;
    !ie(this.s, a) && (!this.Kf || ie(this.Kf, a)) && !(150 > sa() - this.Ve) && cg(this, a)
};
u.Oh = function(a) {
    27 == a.keyCode && cg(this, a.target) && (a.preventDefault(), a.stopPropagation())
};
u.og = function(a) {
    if (this.lh) {
        var b = Yd(this.s);
        if (K || Ra) {
            if (a = b.activeElement, !a || ie(this.s, a) || "BODY" == a.tagName) return
        } else if (a.target != b) return;
        150 > sa() - this.Ve || cg(this)
    }
};
u.N = function() {
    ag.k.N.call(this);
    this.Oa.Ma();
    Vb(this.qd);
    Vb(this.jd);
    delete this.s;
    delete this.Oa
};

function dg(a, b) {
    this.Je = a instanceof Tc ? a : new Tc(a, b)
}
H(dg, Zf);
dg.prototype.Qa = function(a, b, c, d) {
    Xf(rf(a), 0, a, b, this.Je, c, r, d)
};

function eg(a, b) {
    this.ii = 4;
    this.be = b || n;
    ag.call(this, a)
}
H(eg, ag);
eg.prototype.Qa = function() {
    if (this.be) {
        var a = !this.pa && "move_offscreen" != this.Jc,
            b = this.i();
        a && (b.style.visibility = "hidden", Af(b, o));
        this.be.Qa(b, this.ii, this.Nj);
        a && Af(b, s)
    }
};

function fg(a, b, c) {
    this.Ua = c || (a ? Wd(Zd(a)) : Wd());
    eg.call(this, this.Ua.zc("div", {
        style: "position:absolute;display:none;"
    }));
    this.Le = new Tc(1, 1);
    this.gc = new Qb;
    a && gg(this, a);
    if (b != r)
        if (a = this.i(), "textContent" in a) a.textContent = b;
        else if (a.firstChild && 3 == a.firstChild.nodeType) {
        for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
        a.firstChild.data = b
    } else {
        for (; c = a.firstChild;) a.removeChild(c);
        a.appendChild(Yd(a).createTextNode(b))
    }
}
H(fg, eg);
var hg = [];
u = fg.prototype;
u.oa = r;
u.className = "goog-tooltip";
u.Ag = 500;
u.wh = 0;
u.Rd = t("Ua");

function gg(a, b) {
    b = Zd(b);
    a.gc.add(b);
    M(b, "mouseover", a.Zf, s, a);
    M(b, "mouseout", a.Wd, s, a);
    M(b, "mousemove", a.Yf, s, a);
    M(b, "focus", a.Xf, s, a);
    M(b, "blur", a.Wd, s, a)
}
u.detach = function(a) {
    if (a) a = Zd(a), ig(this, a), this.gc.remove(a);
    else {
        for (var b = this.gc.Na(), c = 0; a = b[c]; c++) ig(this, a);
        this.gc.clear()
    }
};

function ig(a, b) {
    rc(b, "mouseover", a.Zf, s, a);
    rc(b, "mouseout", a.Wd, s, a);
    rc(b, "mousemove", a.Yf, s, a);
    rc(b, "focus", a.Xf, s, a);
    rc(b, "blur", a.Wd, s, a)
}
u.hf = function(a) {
    var b = this.i();
    b && ge(b);
    fg.k.hf.call(this, a);
    a && (b = this.Ua.O.body, b.insertBefore(a, b.lastChild))
};
u.bf = function() {
    if (!ag.prototype.bf.call(this)) return s;
    if (this.anchor)
        for (var a, b = 0; a = hg[b]; b++) ie(a.i(), this.anchor) || bg(a, s);
    0 <= tb(hg, this) || hg.push(this);
    a = this.i();
    a.className = this.className;
    jg(this);
    M(a, "mouseover", this.ag, s, this);
    M(a, "mouseout", this.$f, s, this);
    kg(this);
    return o
};
u.cf = function() {
    yb(hg, this);
    for (var a = this.i(), b, c = 0; b = hg[c]; c++) b.anchor && ie(a, b.anchor) && bg(b, s);
    this.wg && lg(this.wg);
    rc(a, "mouseover", this.ag, s, this);
    rc(a, "mouseout", this.$f, s, this);
    this.anchor = n;
    if (0 == (this.gb ? this.pa ? 4 : 1 : this.Cc ? 3 : this.pa ? 2 : 0)) this.de = s;
    ag.prototype.cf.call(this)
};
u.mg = function(a, b) {
    this.anchor == a && this.gc.contains(this.anchor) && (this.de || !this.Oj ? (bg(this, s), this.pa || (this.anchor = a, this.be = b || mg(this, 0) || n, this.pa && this.Qa(), bg(this, o))) : this.anchor = n);
    this.gb = n
};
u.Kh = function(a) {
    this.Cc = n;
    a == this.anchor && (this.oa == r || this.oa != this.i() && !this.gc.contains(this.oa)) && (!this.Lf || !this.Lf.oa) && bg(this, s)
};

function ng(a, b) {
    var c = ke(a.Ua);
    a.Le.x = b.clientX + c.x;
    a.Le.y = b.clientY + c.y
}
u.Zf = function(a) {
    var b = og(this, a.target);
    this.oa = b;
    jg(this);
    b != this.anchor && (this.anchor = b, this.gb || (this.gb = Tf(qa(this.mg, this, b, n), this.Ag)), pg(this), ng(this, a))
};

function og(a, b) {
    try {
        for (; b && !a.gc.contains(b);) b = b.parentNode;
        return b
    } catch (c) {
        return r
    }
}
u.Yf = function(a) {
    ng(this, a);
    this.de = o
};
u.Xf = function(a) {
    this.oa = a = og(this, a.target);
    this.de = o;
    if (this.anchor != a) {
        this.anchor = a;
        var b = mg(this, 1);
        jg(this);
        this.gb || (this.gb = Tf(qa(this.mg, this, a, b), this.Ag));
        pg(this)
    }
};

function mg(a, b) {
    if (0 == b) {
        var c = a.Le.f();
        return new qg(c)
    }
    return new rg(a.oa)
}

function pg(a) {
    if (a.anchor)
        for (var b, c = 0; b = hg[c]; c++) ie(b.i(), a.anchor) && (b.Lf = a, a.wg = b)
}
u.Wd = function(a) {
    var b = og(this, a.target),
        c = og(this, a.relatedTarget);
    b != c && (b == this.oa && (this.oa = r), kg(this), this.de = s, this.pa && (!a.relatedTarget || !ie(this.i(), a.relatedTarget)) ? lg(this) : this.anchor = n)
};
u.ag = function() {
    var a = this.i();
    this.oa != a && (jg(this), this.oa = a)
};
u.$f = function(a) {
    var b = this.i();
    if (this.oa == b && (!a.relatedTarget || !ie(b, a.relatedTarget))) this.oa = r, lg(this)
};

function kg(a) {
    a.gb && (Sf.clearTimeout(a.gb), a.gb = n)
}

function lg(a) {
    if (2 == (a.gb ? a.pa ? 4 : 1 : a.Cc ? 3 : a.pa ? 2 : 0)) a.Cc = Tf(qa(a.Kh, a, a.anchor), a.wh)
}

function jg(a) {
    a.Cc && (Sf.clearTimeout(a.Cc), a.Cc = n)
}
u.N = function() {
    bg(this, s);
    kg(this);
    this.detach();
    this.i() && ge(this.i());
    this.oa = r;
    delete this.Ua;
    fg.k.N.call(this)
};

function qg(a, b) {
    dg.call(this, a, b)
}
H(qg, dg);
qg.prototype.Qa = function(a, b, c) {
    b = rf(a);
    b = uf(b);
    c = c ? new mf(c.top + 10, c.right, c.bottom, c.left + 10) : new mf(10, 0, 0, 10);
    Yf(this.Je, a, 4, c, b, 9) & 496 && Yf(this.Je, a, 4, c, b, 5)
};

function rg(a) {
    $f.call(this, a, 3)
}
H(rg, $f);
rg.prototype.Qa = function(a, b, c) {
    var d = new Tc(10, 0);
    Xf(this.element, this.Of, a, b, d, c, 9) & 496 && Xf(this.element, 2, a, 1, d, c, 5)
};

function sg(a, b, c, d) {
    y(a) || i(Error("No valid parent element."));
    (!D(b) || !D(c)) && i(Error("Invalid coordinates."));
    (!y(d) || !(d instanceof le)) && i(Error("Invalid interactor."));
    fg.call(this);
    this.c = "caption";
    this.Ea = a;
    this.cc = b;
    this.dc = c;
    this.Qb = d;
    this.cb = r;
    this.Mb = [];
    this.Mb = [".x-tooltip {\n  background: #C0C0FF;\n  color: #000000;\n  border: 1px solid infotext;\n  padding: 1px;\n  font-family: sans-serif;\n}"];
    qc(d, Fd, this.Xd.bind(this));
    this.Se()
}
H(sg, fg);
sg.prototype.Se = function() {
    if ("static" == this.Ea.style.position || "" == this.Ea.style.position) this.Ea.style.position = "relative";
    var a = document.getElementsByTagName("head")[0],
        b = ce("style");
    b.type = "text/css";
    b.media = "screen";
    var c = document.createTextNode(this.Mb[0]);
    a.appendChild(b);
    b.appendChild(c);
    this.cb = b;
    this.be = new dg(this.cc, this.dc) || n;
    this.pa && this.Qa();
    bg(this, o);
    gg(this, this.Ea);
    this.i().classList.add("x-tooltip")
};
sg.prototype.Xd = function() {
    bg(this, s);
    this.cb && ge(this.cb);
    this.i() && ge(this.i());
    this.cb = r
};

function Vf() {
    Uf.call(this);
    this.c = "renderer3D";
    this.Sc = this.Vc = this.Rc = this.Uc = this.Qc = this.Tc = this.xe = this.ye = r;
    this.l = [0, 0, 0];
    this.Gf = r;
    this.je = new Mb;
    this.Yc = new Mb;
    this.ad = new Mb;
    this.ue = new Mb;
    this.wd = new Mb;
    this.Fd = new Mb;
    this.Gd = new Mb;
    this.Hd = new Mb;
    this.Kb = this.Jb = r;
    this.X = {
        PROGRESSBAR_ENABLED: o,
        PICKING_ENABLED: o,
        ORDERING_ENABLED: o,
        STATISTICS_ENABLED: s
    }
}
H(Vf, Uf);
Vf.prototype.__defineGetter__("config", t("X"));
Vf.prototype.__defineSetter__("animateRotateDirection", function(a) {
    (!y(a) || 1 > a || 4 < a) && i(Error("Invalid rorate direction."));
    this.Jb = a
});
Vf.prototype.__defineSetter__("animateRotateRate", function(a) {
    (!y(a) || 0 > a) && i(Error("Invalid rorate rate."));
    this.Kb = a
});
u = Vf.prototype;
u.ri = function() {
    this.Sc = this.Vc = this.Rc = this.Uc = this.Qc = this.Tc = r;
    this.l = [0, 0, 0]
};
u.df = function(a) {
    Vf.k.df.call(this, a);
    var b = a.cc,
        a = a.dc,
        c = this.get(this.xg(b, a));
    if (c && (c = c.pc))(new sg(this.q, this.q.offsetLeft + b + 10, this.q.offsetTop + a + 10, this.Qb)).i().innerHTML = c
};
u.la = function() {
    Vf.k.la.call(this, "experimental-webgl");
    try {
        if (this.a.viewport(0, 0, this.B, this.w), this.a.clearColor(0, 0, 0, 0), this.a.enable(this.a.BLEND), this.a.blendEquation(this.a.FUNC_ADD), this.a.blendFunc(this.a.SRC_ALPHA, this.a.ONE_MINUS_SRC_ALPHA), this.a.enable(this.a.DEPTH_TEST), this.a.depthFunc(this.a.LEQUAL), this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT), this.X.PICKING_ENABLED) {
            var a = this.a.createFramebuffer(),
                b = this.a.createRenderbuffer(),
                c = this.a.createTexture();
            this.a.bindTexture(this.a.TEXTURE_2D,
                c);
            this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGB, this.B, this.w, 0, this.a.RGB, this.a.UNSIGNED_BYTE, r);
            this.a.bindFramebuffer(this.a.FRAMEBUFFER, a);
            this.a.bindRenderbuffer(this.a.RENDERBUFFER, b);
            this.a.renderbufferStorage(this.a.RENDERBUFFER, this.a.DEPTH_COMPONENT16, this.B, this.w);
            this.a.bindRenderbuffer(this.a.RENDERBUFFER, r);
            this.a.framebufferTexture2D(this.a.FRAMEBUFFER, this.a.COLOR_ATTACHMENT0, this.a.TEXTURE_2D, c, 0);
            this.a.framebufferRenderbuffer(this.a.FRAMEBUFFER, this.a.DEPTH_ATTACHMENT, this.a.RENDERBUFFER,
                b);
            this.a.bindFramebuffer(this.a.FRAMEBUFFER, r);
            this.Gf = a
        }
    } catch (d) {
        i(Error("Exception while accessing GL Context!\n" + d))
    }
    tg(this)
};

function tg(a) {
    var b = new Be;
    (!y(a.ia) || !y(a.a) || !y(a.r)) && i(Error("Renderer was not initialized properly."));
    (!y(b) || !(b instanceof Be)) && i(Error("Could not add shaders."));
    Ee(b);
    var c = a.a.createShader(a.a.FRAGMENT_SHADER),
        d = a.a.createShader(a.a.VERTEX_SHADER);
    a.a.shaderSource(c, b.yd);
    a.a.shaderSource(d, b.Id);
    a.a.compileShader(c);
    a.a.compileShader(d);
    a.a.getShaderParameter(c, a.a.COMPILE_STATUS) || i(Error("Fragement Shader compilation failed!\n" + a.a.getShaderInfoLog(c)));
    a.a.getShaderParameter(d, a.a.COMPILE_STATUS) ||
        i(Error("Vertex Shader compilation failed!\n" + a.a.getShaderInfoLog(d)));
    var e = a.a.createProgram();
    a.a.attachShader(e, d);
    a.a.attachShader(e, c);
    a.a.linkProgram(e);
    a.a.getProgramParameter(e, a.a.LINK_STATUS) || i(Error("Could not create shader program!\n" + a.a.getShaderInfoLog(c) + "\n" + a.a.getShaderInfoLog(d) + "\n" + a.a.getProgramInfoLog(e)));
    a.a.useProgram(e);
    a.xe = e;
    Object.keys(Ce).forEach(function(a) {
        a = Ce[a];
        this.je.set(a, this.a.getAttribLocation(this.xe, a));
        this.a.enableVertexAttribArray(this.je.get(a))
    }.bind(a));
    Object.keys(De).forEach(function(a) {
        a = De[a];
        this.Yc.set(a, this.a.getUniformLocation(this.xe, a))
    }.bind(a));
    a.ye = b
}
u.Za = function(a) {
    Vf.k.Za.call(this, a);
    var b = s;
    this.get(a.sa) && (b = o);
    var c = a.sa,
        d = a.g,
        e = a.h,
        f = a.W,
        g = a.A,
        h = a.p,
        k = a.bc,
        l = a.ca,
        j = a.n,
        m = a.u;
    if (y(j) && y(j.p) && j.p.e) this.Za(j);
    else if (y(j) && j.e && this.Za(j), y(l) && y(l.p) && l.p.e) this.D.load(l, a);
    else if (y(g) && y(g.p) && g.p.e) this.D.load(g, a);
    else {
        if (y(h) && C(h))
            if (y(a.nc)) {
                if (a.nc.Yd != h.length || !a.e) return
            } else {
                b = 0;
                c = h.length;
                for (b = 0; b < c; b++) this.D.load(h[b], a);
                return
            }
        else {
            if (y(h) && h.e) {
                this.D.load(a, a);
                return
            }
            if (y(m) && y(m.p) && m.p.e) {
                this.D.load(m, a);
                return
            }
        }
        if (0 <
            a.d.length) {
            h = a.d;
            l = h.length;
            for (j = j = 0; j < l; j++) this.Za(h[j])
        }
        if (d) {
            for (h = 0; this.Ad;) h++, window.console.log("Possible thread lock avoided: " + h);
            this.Ad = o;
            l = a instanceof Fe && a.eb instanceof He;
            b && y(g) && g.e && (h = this.Gd.get(c), y(h) && this.a.isBuffer(h.ja) && this.a.deleteBuffer(h.ja));
            h = r;
            y(g) && (!b || g.e ? (h = a.ac, y(h) || i(Error("Can not add an object and texture without valid coordinate mapping! Set the textureCoordinateMap!")), j = s, g.wa && (j = o), this.a.pixelStorei(this.a.UNPACK_FLIP_Y_WEBGL, j), j = this.a.createTexture(),
                j.zh = g.ob, this.Hd.set(g.sa, j), this.a.bindTexture(this.a.TEXTURE_2D, j), g.wa ? this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGBA, g.Cb, g.Bb, 0, this.a.RGBA, this.a.UNSIGNED_BYTE, g.wa) : this.a.texImage2D(this.a.TEXTURE_2D, 0, this.a.RGBA, this.a.RGBA, this.a.UNSIGNED_BYTE, j.zh), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_S, this.a.CLAMP_TO_EDGE), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_WRAP_T, this.a.CLAMP_TO_EDGE), l ? (this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.NEAREST),
                    this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.NEAREST)) : (this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MAG_FILTER, this.a.LINEAR), this.a.texParameteri(this.a.TEXTURE_2D, this.a.TEXTURE_MIN_FILTER, this.a.LINEAR)), this.a.bindTexture(this.a.TEXTURE_2D, r), j = this.a.createBuffer(), this.a.bindBuffer(this.a.ARRAY_BUFFER, j), this.a.bufferData(this.a.ARRAY_BUFFER, new Float32Array(h), this.a.STATIC_DRAW), h = new Qd(j, h.length, 2), g.e = s) : h = this.Gd.get(c));
            Ze(this.D, 0.1);
            if (l) this.Ad =
                s, I.ma(this.c + ".update"), Ze(this.D, 0.9);
            else {
                if (!b || d.e || k.e) {
                    l = k.F;
                    g = l.Pa(new Q(d.Ub, d.Vb, d.Wb));
                    l = l.Pa(new Q(d.Rb, d.Sb, d.Tb));
                    if (this.Tc === r || g.x < this.Tc) this.Tc = g.x;
                    if (this.Qc === r || l.x > this.Qc) this.Qc = l.x;
                    if (this.Uc === r || g.y < this.Uc) this.Uc = g.y;
                    if (this.Rc === r || l.y > this.Rc) this.Rc = l.y;
                    if (this.Vc === r || g.b < this.Vc) this.Vc = g.b;
                    if (this.Sc === r || l.b > this.Sc) this.Sc = l.b;
                    this.l = [(this.Tc + this.Qc) / 2, (this.Uc + this.Rc) / 2, (this.Vc + this.Sc) / 2];
                    k.e = s
                }
                b && d.e && (k = this.ad.get(c), y(k) && this.a.isBuffer(k.ja) && this.a.deleteBuffer(k.ja));
                k = r;
                !b || d.e ? (k = this.a.createBuffer(), d.Ic(), this.a.bindBuffer(this.a.ARRAY_BUFFER, k), this.a.bufferData(this.a.ARRAY_BUFFER, d.K, this.a.STATIC_DRAW), k = new Qd(k, d.count, 3), d.e = s) : k = this.ad.get(c);
                Ze(this.D, 0.3);
                b && e.e && (g = this.ad.get(c), y(g) && this.a.isBuffer(g.ja) && this.a.deleteBuffer(g.ja));
                g = r;
                !b || e.e ? (g = this.a.createBuffer(), e.Ic(), this.a.bindBuffer(this.a.ARRAY_BUFFER, g), this.a.bufferData(this.a.ARRAY_BUFFER, e.K, this.a.STATIC_DRAW), g = new Qd(g, e.count, 3), e.e = s) : g = this.ue.get(c);
                Ze(this.D, 0.3);
                b &&
                    f && f.e && (e = this.wd.get(c), y(e) && this.a.isBuffer(e.ja) && this.a.deleteBuffer(e.ja));
                e = r;
                f && (!b || f.e ? (f.length != d.length && i(Error("Mismatch between points and point colors.")), e = this.a.createBuffer(), f.Ic(), this.a.bindBuffer(this.a.ARRAY_BUFFER, e), this.a.bufferData(this.a.ARRAY_BUFFER, f.K, this.a.STATIC_DRAW), e = new Qd(e, f.count, 3), f.e = s) : e = this.wd.get(c));
                Ze(this.D, 0.2);
                b && m && m.e && (f = this.Fd.get(c), y(f) && this.a.isBuffer(f.ja) && this.a.deleteBuffer(f.ja));
                f = r;
                m && (f = m.Lc, !b || m.e ? (f.length != d.length && i(Error("Mismatch between points and scalars.")),
                    d = this.a.createBuffer(), this.a.bindBuffer(this.a.ARRAY_BUFFER, d), this.a.bufferData(this.a.ARRAY_BUFFER, f, this.a.STATIC_DRAW), f = new Qd(d, f.length, 3), m.e = s) : f = this.Fd.get(c));
                Ze(this.D, 0.1);
                b || this.ab.add(a);
                this.ad.set(c, k);
                this.ue.set(c, g);
                this.wd.set(c, e);
                this.Gd.set(c, h);
                this.Fd.set(c, f);
                this.Ad = a.e = s
            }
        } else a.e = s
    }
};

function ug(a, b) {
    var c = b.g.vd,
        c = a.r.m.Pa(b.bc.F.Pa(new Q(c[0], c[1], c[2]))),
        c = Qc(a.r.va, c);
    return Math.round(1E3 * c) / 1E3
}
u.xg = function(a, b) {
    if (this.X.PICKING_ENABLED) {
        this.fb(o, s);
        var c = new Uint8Array(4);
        this.a.readPixels(a, this.w - b, 1, 1, this.a.RGBA, this.a.UNSIGNED_BYTE, c);
        return c[0] + 255 * c[1] + 65025 * c[2]
    }
    return -1
};
u.fb = function(a, b) {
    Vf.k.fb.call(this, a, b);
    var c = this.ab.v,
        d = c.length;
    if (0 != d) {
        a ? this.a.bindFramebuffer(this.a.FRAMEBUFFER, this.Gf) : this.a.bindFramebuffer(this.a.FRAMEBUFFER, r);
        if (y(this.Jb) && 0 <= this.Jb && y(this.Kb) && 0 < this.Kb) {
            var e = new Vc(0, 0);
            1 == this.Jb ? e.x = this.Kb : 2 == this.Jb ? e.x = -1 * this.Kb : 3 == this.Jb ? e.y = this.Kb : 4 == this.Jb && (e.y = -1 * this.Kb);
            this.r.rotate(e)
        }
        this.a.viewport(0, 0, this.B, this.w);
        this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT);
        var e = this.r.Ff,
            f = this.r.Ob;
        this.a.uniformMatrix4fv(this.Yc.get("perspective"),
            s, e);
        this.a.uniformMatrix4fv(this.Yc.get("view"), s, f);
        e = this.l;
        this.a.uniform3f(this.Yc.get("center"), parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2]));
        f = this.Ta.length;
        for (e = 0; e < f; ++e) {
            var g = this.Ta[e];
            if (g instanceof P) {
                var h = new Q(1, 0, 0),
                    h = this.r.m.Pa(h),
                    k = Qc(this.r.va, h),
                    h = new Q(-1, 0, 0),
                    h = this.r.m.Pa(h),
                    l = Qc(this.r.va, h),
                    h = new Q(0, 1, 0),
                    h = this.r.m.Pa(h),
                    j = Qc(this.r.va, h),
                    h = new Q(0, -1, 0),
                    h = this.r.m.Pa(h),
                    m = Qc(this.r.va, h),
                    h = new Q(0, 0, 1),
                    h = this.r.m.Pa(h),
                    p = Qc(this.r.va, h),
                    h = new Q(0, 0, -1),
                    h = this.r.m.Pa(h),
                    h = Qc(this.r.va, h),
                    q = Math.max(k, j, p, l, m, h);
                q == k || q == l ? Ge(g, 0) : q == j || q == m ? Ge(g, 1) : (q == p || q == h) && Ge(g, 2)
            }
        }
        if (this.X.ORDERING_ENABLED) {
            k = s;
            f = this.Ta;
            g = f.length - 1;
            do
                if (e = f[g], e instanceof P && e.Ka) {
                    l = e.Eb;
                    k = e.S.d;
                    1 == l ? k = e.T.d : 2 == l && (k = e.bb.d);
                    l = k.length;
                    j = k[0];
                    j.Q = ug(this, j);
                    j.$ = e.$;
                    m = k[l - 1];
                    m.Q = ug(this, m);
                    m.$ = e.$;
                    m = Math.round(1E3 * ((m.Q - j.Q) / l)) / 1E3;
                    for (p = p = 1; p < l - 1; p++) h = Math.round(1E3 * (j.Q + p * m)) / 1E3, k[p].Q = h, k[p].$ = e.$;
                    k = o
                }
            while (g--);
            f = this.ab.v;
            g = f.length - 1;
            do
                if (e = f[g], e.Ja && !(1 == e.$ || e instanceof Fe)) e.Q =
                    ug(this, e), k = o; while (g--);
            k && this.ab.sort()
        }
        if (f = !a && y(b) && b && this.X.STATISTICS_ENABLED) var v = 0,
            w = 0,
            z = 0,
            A = 0;
        var e = this.je,
            g = e.get("vertexPosition"),
            k = e.get("vertexNormal"),
            l = e.get("vertexColor"),
            j = e.get("vertexTexturePos"),
            m = e.get("vertexScalar"),
            e = this.Yc,
            p = e.get("usePicking"),
            h = e.get("useObjectColor"),
            q = e.get("objectColor"),
            x = e.get("useScalars"),
            B = e.get("scalarsReplaceMode"),
            F = e.get("scalarsMin"),
            O = e.get("scalarsMax"),
            Y = e.get("scalarsMinColor"),
            G = e.get("scalarsMaxColor"),
            L = e.get("scalarsInterpolation"),
            J = e.get("scalarsMinThreshold"),
            S = e.get("scalarsMaxThreshold"),
            ga = e.get("objectOpacity"),
            za = e.get("labelmapOpacity"),
            U = e.get("useTexture"),
            ta = e.get("useLabelMapTexture"),
            Dc = e.get("textureSampler"),
            md = e.get("textureSampler2"),
            qb = e.get("volumeLowerThreshold"),
            nd = e.get("volumeUpperThreshold"),
            Jb = e.get("volumeScalarMin"),
            ib = e.get("volumeScalarMax"),
            Hb = e.get("volumeWindowLow"),
            Fc = e.get("volumeWindowHigh"),
            Ca = e.get("volumeScalarMinColor"),
            pb = e.get("volumeScalarMaxColor"),
            Ec = e.get("volumeTexture"),
            ld = e.get("objectTransform"),
            vg = e.get("pointSize"),
            e = d;
        do {
            var W = c[d - e];
            if (W) {
                var Z = r;
                W instanceof Fe && W.eb && (Z = W.eb);
                if (W.Ja && (!Z || Z.Ja)) {
                    var ua = W.sa,
                        Sa = W.Pc,
                        Da = this.ad.get(ua),
                        $a = this.ue.get(ua),
                        $d = this.wd.get(ua),
                        Ib = this.Fd.get(ua),
                        pe = this.Gd.get(ua);
                    this.a.bindBuffer(this.a.ARRAY_BUFFER, Da.ja);
                    this.a.vertexAttribPointer(g, Da.tb, this.a.FLOAT, s, 0, 0);
                    this.a.bindBuffer(this.a.ARRAY_BUFFER, $a.ja);
                    this.a.vertexAttribPointer(k, $a.tb, this.a.FLOAT, s, 0, 0);
                    a ? this.a.uniform1i(p, o) : this.a.uniform1i(p, s);
                    $d && !a && !Sa ? (this.a.uniform1i(h,
                        s), this.a.bindBuffer(this.a.ARRAY_BUFFER, $d.ja), this.a.vertexAttribPointer(l, $d.tb, this.a.FLOAT, s, 0, 0)) : ($a = 1, Sa && !a && ($a = 0), this.a.uniform1i(h, $a), $a = W.Lb, a && ($a = [Math.floor(ua % 65025 % 255) / 255, Math.floor(ua % 65025 / 255) / 255, Math.floor(ua / 65025) / 255]), this.a.uniform3f(q, parseFloat($a[0]), parseFloat($a[1]), parseFloat($a[2])), this.a.vertexAttribPointer(l, Da.tb, this.a.FLOAT, s, 0, 0));
                    Ib && !a && !Sa ? (this.a.uniform1i(x, o), this.a.uniform1i(B, W.u.If), ua = W.u.xb, Sa = W.u.vb, this.a.uniform3f(Y, parseFloat(ua[0]), parseFloat(ua[1]),
                        parseFloat(ua[2])), this.a.uniform3f(G, parseFloat(Sa[0]), parseFloat(Sa[1]), parseFloat(Sa[2])), this.a.uniform1f(J, parseFloat(W.u.Z)), this.a.uniform1f(S, parseFloat(W.u.aa)), this.a.uniform1f(F, parseFloat(W.u.Da)), this.a.uniform1f(O, parseFloat(W.u.ta)), this.a.uniform1i(L, parseInt(W.u.me, 10)), this.a.bindBuffer(this.a.ARRAY_BUFFER, Ib.ja), this.a.vertexAttribPointer(m, Ib.tb, this.a.FLOAT, s, 0, 0)) : (this.a.uniform1i(x, s), this.a.vertexAttribPointer(m, Da.tb, this.a.FLOAT, s, 0, 0));
                    this.a.uniform1f(ga, parseFloat(W.$));
                    W.A && pe && !a ? (this.a.uniform1i(U, o), this.a.activeTexture(this.a.TEXTURE0), this.a.bindTexture(this.a.TEXTURE_2D, this.Hd.get(W.A.sa)), this.a.uniform1i(Dc, 0), this.a.bindBuffer(this.a.ARRAY_BUFFER, pe.ja), this.a.vertexAttribPointer(j, pe.tb, this.a.FLOAT, s, 0, 0), this.a.uniform1i(Ec, s)) : (this.a.uniform1i(U, s), this.a.vertexAttribPointer(j, Da.tb, this.a.FLOAT, s, 0, 0));
                    Z && (this.a.uniform1i(Ec, o), this.a.uniform1f(qb, Z.Z), this.a.uniform1f(nd, Z.aa), this.a.uniform1f(Jb, Z.Da), this.a.uniform1f(ib, Z.ta), ua = Z.xb, Sa = Z.vb,
                        this.a.uniform3f(Ca, parseFloat(ua[0]), parseFloat(ua[1]), parseFloat(ua[2])), this.a.uniform3f(pb, parseFloat(Sa[0]), parseFloat(Sa[1]), parseFloat(Sa[2])), this.a.uniform1f(Hb, Z.ea), this.a.uniform1f(Fc, Z.da), Ib = Z.n, this.a.uniform1i(ta, s), Z.Ka ? this.a.uniform1f(ga, parseFloat(Z.$)) : Ib && Ib.Ja && (Z = W.n.sa, this.a.uniform1i(ta, o), this.a.activeTexture(this.a.TEXTURE1), this.a.bindTexture(this.a.TEXTURE_2D, this.Hd.get(Z)), this.a.uniform1i(md, 1), this.a.uniform1f(za, Ib.$)));
                    this.a.uniformMatrix4fv(ld, s, W.bc.yf);
                    Z = 1;
                    "POINTS" == W.ka && (Z = W.Wc);
                    this.a.uniform1f(vg, Z);
                    Z = -1;
                    W.ka == kd ? (Z = this.a.TRIANGLES, f && (w += Da.sb / 3)) : "LINES" == W.ka ? (this.a.lineWidth(W.uc), Z = this.a.LINES, f && (z += Da.sb / 2)) : "POINTS" == W.ka ? (Z = this.a.POINTS, f && (A += Da.sb)) : "TRIANGLE_STRIPS" == W.ka ? (Z = this.a.TRIANGLE_STRIP, f && (w += Da.sb / 3)) : "POLYGONS" == W.ka && (Z = 0 == Da.sb % 3 ? this.a.TRIANGLES : this.a.TRIANGLE_FAN, f && (w += Da.sb / 3));
                    f && (v += Da.sb);
                    this.a.drawArrays(Z, 0, Da.sb)
                }
            }
        } while (--e);
        f && (c = "Objects: " + d + " | " + ("Vertices: " + v + " | ") + ("Triangles: " + Math.round(w) +
            " | "), c = c + ("Lines: " + z + " | ") + ("Points: " + A + " | ") + ("Textures: " + this.Hd.Wa()), window.console.log(c))
    }
};
u.Pd = function() {
    this.ye = r;
    delete this.ye;
    this.a.clear(this.a.COLOR_BUFFER_BIT | this.a.DEPTH_BUFFER_BIT);
    Vf.k.Pd.call(this)
};
E("X.renderer3D", Vf);
E("X.renderer3D.prototype.init", Vf.prototype.la);
E("X.renderer3D.prototype.add", Vf.prototype.add);
E("X.renderer3D.prototype.onShowtime", Vf.prototype.tg);
E("X.renderer3D.prototype.onRender", Vf.prototype.rg);
E("X.renderer3D.prototype.get", Vf.prototype.get);
E("X.renderer3D.prototype.render", Vf.prototype.mc);
E("X.renderer3D.prototype.destroy", Vf.prototype.Pd);
E("X.renderer3D.prototype.resetBoundingBox", Vf.prototype.ri);
E("X.renderer3D.prototype.resetViewAndRender", Vf.prototype.Hc);
E("X.renderer3D.prototype.pick", Vf.prototype.xg);

function wg() {
    T.call(this);
    this.c = "mesh";
    wa(this, new Nc)
}
H(wg, T);
E("X.mesh", wg);

function xg() {
    T.call(this);
    this.c = "fibers";
    wa(this, new Nc)
}
H(xg, T);
E("X.fibers", xg);

function yg() {
    Uf.call(this);
    this.c = "renderer2D";
    this.zf = this.ne = this.xf = this.le = this.yb = r;
    this.Ed = this.Yb = this.Zb = this.ze = this.Ae = 0
}
H(yg, Uf);
yg.prototype.di = aa();
yg.prototype.ei = aa();
yg.prototype.ef = function(a) {
    yg.k.ef.call(this, a);
    var b = this.Ta[0];
    if (b) {
        var c = this.yb;
        b["index" + c] = a.L ? b["index" + c] + 1 : b["index" + c] - 1;
        eval("this.onScroll();")
    }
};
yg.prototype.fi = function(a) {
    var b = this.Ta[0];
    if (b) {
        var c = b.da - b.ea,
            d = c / 2,
            e = parseInt(c + c / 15 * -a.Lj, 10),
            a = parseInt(d + d / 15 * a.Kj, 10);
        c == e && e++;
        d == a && a++;
        b.ea -= parseInt(d - a, 10);
        b.ea -= parseInt(c - e, 10);
        b.ea = Math.max(b.ea, b.Da);
        b.da -= parseInt(d - a, 10);
        b.da += parseInt(c - e, 10);
        b.da = Math.min(b.da, b.ta);
        eval("this.onWindowLevel();")
    }
};
yg.prototype.__defineGetter__("orientation", t("yb"));
yg.prototype.__defineSetter__("orientation", function(a) {
    a = a.toUpperCase();
    "X" != a && "Y" != a && "Z" != a && i(Error("Invalid orientation."));
    this.yb = a
});
u = yg.prototype;
u.la = function() {
    this.yb || i(Error("No 2D orientation set."));
    yg.k.la.call(this, "2d");
    this.a.fillStyle = "rgba(0,0,0,0)";
    this.a.fillRect(0, 0, this.ia.width, this.ia.height);
    this.le = ce("canvas");
    this.ne = ce("canvas");
    M(this.r, Cd, this.fi.bind(this))
};
u.rotate = function() {
    this.Ed++
};
u.si = function() {
    this.Ed--
};
u.Hc = function() {
    yg.k.Hc.call(this);
    zg(this);
    var a = this.Ta[0];
    a && (a.da = a.ta, a.ea = a.Da)
};
u.Za = function(a) {
    yg.k.Za.call(this, a);
    var b = s;
    this.get(a.sa) && (b = o);
    var c = a.p,
        d = a.n,
        e = a.ca;
    if (y(d) && y(d.p) && d.p.e) this.Za(d);
    else if (y(e) && y(e.p) && e.p.e) this.D.load(e, a);
    else {
        if (y(c) && C(c))
            if (y(a.nc)) {
                if (a.nc.Yd != c.length || b && !a.e) return
            } else {
                b = 0;
                d = c.length;
                for (b = 0; b < d; b++) this.D.load(c[b], a);
                return
            }
        else if (y(c) && c.e) {
            this.D.load(a, a);
            return
        }
        var d = c = 0,
            e = a.Y,
            f = a.G;
        "X" == this.yb ? (this.$b = a.S.d, c = e[1], d = e[2], this.Zb = f[1], this.Yb = f[2]) : "Y" == this.yb ? (this.$b = a.T.d, c = e[0], d = e[2], this.Zb = f[0], this.Yb = f[2]) :
            "Z" == this.yb && (this.$b = a.bb.d, c = e[0], d = e[1], this.Zb = f[0], this.Yb = f[1]);
        this.Ae = c;
        this.ze = d;
        e = this.le;
        e.width = c;
        e.height = d;
        f = this.ne;
        f.width = c;
        f.height = d;
        this.xf = e.getContext("2d");
        this.zf = f.getContext("2d");
        b || (this.ab.add(a), zg(this))
    }
};

function zg(a) {
    a.r.m.j(2, 3, Math.min(a.B / (a.Ae * a.Zb), a.w / (a.ze * a.Yb)))
}
u.fb = function(a, b) {
    yg.k.fb.call(this, a, b);
    if (0 != this.ab.v.length) {
        var c = this.B,
            d = this.w,
            e = this.r.m;
        this.a.save();
        this.a.clearRect(-c, -d, 2 * c, 2 * d);
        this.a.restore();
        var f = 1 * e.V(0, 3),
            g = -1 * e.V(1, 3),
            h = Math.max(e.V(2, 3), 0.6);
        this.a.setTransform(h, 0, 0, h, f, g);
        var e = this.Ta[0],
            k = this.$b[parseInt(e["index" + this.yb], 10)],
            l = k.A.wa,
            k = k.n,
            j = r;
        k && (j = k.wa);
        var m = this.Ae,
            p = this.ze,
            q = this.xf,
            v = this.zf,
            w = q.getImageData(0, 0, m, p),
            z = v.getImageData(0, 0, m, p),
            A = w.data,
            x = z.data,
            B = A.length,
            F = e.ta,
            O = e.Z,
            Y = e.aa,
            G = 0,
            L = 0;
        if (0 < this.Cd *
            this.Dd) {
            if (this.B / this.w < m / p) var J = m / this.B,
                G = (this.w - p / J) / 2,
                L = this.Dd - G,
                L = L * J,
                G = this.Cd * J;
            else J = p / this.w, G = (this.B - m / J) / 2, G = this.Cd - G, G *= J, L = this.Dd * J;
            0 < G * L && (G = Math.floor(G + 0.5), L = Math.floor(L + 0.5))
        }
        J = 0;
        do {
            var S = [0, 0, 0, 0],
                ga = [0, 0, 0, 0],
                za = l[J] / 255 * F,
                U = l[J],
                ta = e.ea / F,
                U = (U / 255 - ta) / (e.da / F - ta),
                U = 255 * U;
            za >= O && za <= Y && (S = new Q(e.xb[0], e.xb[1], e.xb[2]), S = (new Q(e.vb[0], e.vb[1], e.vb[2])).scale(U).add(S.scale(255 - U)), S = [Math.floor(S.x), Math.floor(S.y), Math.floor(S.b), 255], k && (ga = [j[J], j[J + 1], j[J + 2], j[J +
                3]]));
            U = B - 1 - J;
            0 < G * L && (L - 1) * m + G == Math.ceil(U / 4) ? (A[U - 3] = 255, A[U - 2] = 255, A[U - 1] = 0, A[U] = 255) : (A[U - 3] = S[0], A[U - 2] = S[1], A[U - 1] = S[2], A[U] = S[3]);
            x[U - 3] = ga[0];
            x[U - 2] = ga[1];
            x[U - 1] = ga[2];
            x[U] = ga[3];
            J += 4
        } while (J < B);
        q.putImageData(w, 0, 0);
        v.putImageData(z, 0, 0);
        this.a.globalAlpha = 1;
        this.a.translate(c / 2 / h, d / 2 / h);
        this.a.rotate(0.5 * Math.PI * this.Ed);
        switch (this.Ed % 4) {
            case 1:
                c = f;
                f = g;
                g = -c;
                break;
            case 2:
                f *= -1;
                g *= -1;
                break;
            case 3:
                c = f, f = -g, g = c
        }
        f = -m * this.Zb / 2 + f;
        g = -p * this.Yb / 2 + g;
        this.a.drawImage(this.le, f, g, m * this.Zb, p * this.Yb);
        k && e.n.Ja && (this.a.globalAlpha = e.n.$, this.a.drawImage(this.ne, f, g, m * this.Zb, p * this.Yb))
    }
};
E("X.renderer2D", yg);
E("X.renderer2D.prototype.init", yg.prototype.la);
E("X.renderer2D.prototype.add", yg.prototype.add);
E("X.renderer2D.prototype.onShowtime", yg.prototype.tg);
E("X.renderer2D.prototype.onRender", yg.prototype.rg);
E("X.renderer2D.prototype.onScroll", yg.prototype.di);
E("X.renderer2D.prototype.onWindowLevel", yg.prototype.ei);
E("X.renderer2D.prototype.get", yg.prototype.get);
E("X.renderer2D.prototype.rotate", yg.prototype.rotate);
E("X.renderer2D.prototype.rotateCounter", yg.prototype.si);
E("X.renderer2D.prototype.resetViewAndRender", yg.prototype.Hc);
E("X.renderer2D.prototype.render", yg.prototype.mc);
E("X.renderer2D.prototype.destroy", yg.prototype.Pd);