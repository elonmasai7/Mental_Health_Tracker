/* Most used theme JS files in one:
0.  jQuery Migrate v1.4.1
1.  superfish.min.js
2.  core.min.js
3.  widget.min.js
4.  tabs.min.js
5.  effect.min.js
6.  effect-fade.min.js
7.  accordion.min.js
8.  swiper.js
9.  wp-a11y.min
10. wp-embed.min.js
11. datepicker.min.js
12. core.messages.min.js
-----------------------------------------------------------------------------------------------*/

/* 0.  jQuery Migrate v1.4.1
-----------------------------------------------------------------------------------------------*/
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(a, b, c) {
        function d(c) {
            var d = b.console;
            f[c] || (f[c] = !0, a.migrateWarnings.push(c), d && d.warn && !a.migrateMute && (d.warn("JQMIGRATE: " + c), a.migrateTrace && d.trace && d.trace()))
        }

        function e(b, c, e, f) {
            if (Object.defineProperty) try {
                return void Object.defineProperty(b, c, {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return d(f), e
                    },
                    set: function(a) {
                        d(f), e = a
                    }
                })
            } catch (g) {}
            a._definePropertyBroken = !0, b[c] = e
        }
        a.migrateVersion = "1.4.1";
        var f = {};
        a.migrateWarnings = [], b.console && b.console.log && b.console.log("JQMIGRATE: Migrate is installed" + (a.migrateMute ? "" : " with logging active") + ", version " + a.migrateVersion), a.migrateTrace === c && (a.migrateTrace = !0), a.migrateReset = function() {
            f = {}, a.migrateWarnings.length = 0
        }, "BackCompat" === document.compatMode && d("jQuery is not compatible with Quirks Mode");
        var g = a("<input/>", {
                size: 1
            }).attr("size") && a.attrFn,
            h = a.attr,
            i = a.attrHooks.value && a.attrHooks.value.get || function() {
                return null
            },
            j = a.attrHooks.value && a.attrHooks.value.set || function() {
                return c
            },
            k = /^(?:input|button)$/i,
            l = /^[238]$/,
            m = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
            n = /^(?:checked|selected)$/i;
        e(a, "attrFn", g || {}, "jQuery.attrFn is deprecated"), a.attr = function(b, e, f, i) {
            var j = e.toLowerCase(),
                o = b && b.nodeType;
            return i && (h.length < 4 && d("jQuery.fn.attr( props, pass ) is deprecated"), b && !l.test(o) && (g ? e in g : a.isFunction(a.fn[e]))) ? a(b)[e](f) : ("type" === e && f !== c && k.test(b.nodeName) && b.parentNode && d("Can't change the 'type' of an input or button in IE 6/7/8"), !a.attrHooks[j] && m.test(j) && (a.attrHooks[j] = {
                get: function(b, d) {
                    var e, f = a.prop(b, d);
                    return f === !0 || "boolean" != typeof f && (e = b.getAttributeNode(d)) && e.nodeValue !== !1 ? d.toLowerCase() : c
                },
                set: function(b, c, d) {
                    var e;
                    return c === !1 ? a.removeAttr(b, d) : (e = a.propFix[d] || d, e in b && (b[e] = !0), b.setAttribute(d, d.toLowerCase())), d
                }
            }, n.test(j) && d("jQuery.fn.attr('" + j + "') might use property instead of attribute")), h.call(a, b, e, f))
        }, a.attrHooks.value = {
            get: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? i.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value') no longer gets properties"), b in a ? a.value : null)
            },
            set: function(a, b) {
                var c = (a.nodeName || "").toLowerCase();
                return "button" === c ? j.apply(this, arguments) : ("input" !== c && "option" !== c && d("jQuery.fn.attr('value', val) no longer sets properties"), void(a.value = b))
            }
        };
        var o, p, q = a.fn.init,
            r = a.find,
            s = a.parseJSON,
            t = /^\s*</,
            u = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            v = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            w = /^([^<]*)(<[\w\W]+>)([^>]*)$/;
        a.fn.init = function(b, e, f) {
            var g, h;
            return b && "string" == typeof b && !a.isPlainObject(e) && (g = w.exec(a.trim(b))) && g[0] && (t.test(b) || d("$(html) HTML strings must start with '<' character"), g[3] && d("$(html) HTML text after last tag is ignored"), "#" === g[0].charAt(0) && (d("HTML string cannot start with a '#' character"), a.error("JQMIGRATE: Invalid selector string (XSS)")), e && e.context && e.context.nodeType && (e = e.context), a.parseHTML) ? q.call(this, a.parseHTML(g[2], e && e.ownerDocument || e || document, !0), e, f) : (h = q.apply(this, arguments), b && b.selector !== c ? (h.selector = b.selector, h.context = b.context) : (h.selector = "string" == typeof b ? b : "", b && (h.context = b.nodeType ? b : e || document)), h)
        }, a.fn.init.prototype = a.fn, a.find = function(a) {
            var b = Array.prototype.slice.call(arguments);
            if ("string" == typeof a && u.test(a)) try {
                document.querySelector(a)
            } catch (c) {
                a = a.replace(v, function(a, b, c, d) {
                    return "[" + b + c + '"' + d + '"]'
                });
                try {
                    document.querySelector(a), d("Attribute selector with '#' must be quoted: " + b[0]), b[0] = a
                } catch (e) {
                    d("Attribute selector with '#' was not fixed: " + b[0])
                }
            }
            return r.apply(this, b)
        };
        var x;
        for (x in r) Object.prototype.hasOwnProperty.call(r, x) && (a.find[x] = r[x]);
        a.parseJSON = function(a) {
            return a ? s.apply(this, arguments) : (d("jQuery.parseJSON requires a valid JSON string"), null)
        }, a.uaMatch = function(a) {
            a = a.toLowerCase();
            var b = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || a.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
            return {
                browser: b[1] || "",
                version: b[2] || "0"
            }
        }, a.browser || (o = a.uaMatch(navigator.userAgent), p = {}, o.browser && (p[o.browser] = !0, p.version = o.version), p.chrome ? p.webkit = !0 : p.webkit && (p.safari = !0), a.browser = p), e(a, "browser", a.browser, "jQuery.browser is deprecated"), a.boxModel = a.support.boxModel = "CSS1Compat" === document.compatMode, e(a, "boxModel", a.boxModel, "jQuery.boxModel is deprecated"), e(a.support, "boxModel", a.support.boxModel, "jQuery.support.boxModel is deprecated"), a.sub = function() {
            function b(a, c) {
                return new b.fn.init(a, c)
            }
            a.extend(!0, b, this), b.superclass = this, b.fn = b.prototype = this(), b.fn.constructor = b, b.sub = this.sub, b.fn.init = function(d, e) {
                var f = a.fn.init.call(this, d, e, c);
                return f instanceof b ? f : b(f)
            }, b.fn.init.prototype = b.fn;
            var c = b(document);
            return d("jQuery.sub() is deprecated"), b
        }, a.fn.size = function() {
            return d("jQuery.fn.size() is deprecated; use the .length property"), this.length
        };
        var y = !1;
        a.swap && a.each(["height", "width", "reliableMarginRight"], function(b, c) {
            var d = a.cssHooks[c] && a.cssHooks[c].get;
            d && (a.cssHooks[c].get = function() {
                var a;
                return y = !0, a = d.apply(this, arguments), y = !1, a
            })
        }), a.swap = function(a, b, c, e) {
            var f, g, h = {};
            y || d("jQuery.swap() is undocumented and deprecated");
            for (g in b) h[g] = a.style[g], a.style[g] = b[g];
            f = c.apply(a, e || []);
            for (g in b) a.style[g] = h[g];
            return f
        }, a.ajaxSetup({
            converters: {
                "text json": a.parseJSON
            }
        });
        var z = a.fn.data;
        a.fn.data = function(b) {
            var e, f, g = this[0];
            return !g || "events" !== b || 1 !== arguments.length || (e = a.data(g, b), f = a._data(g, b), e !== c && e !== f || f === c) ? z.apply(this, arguments) : (d("Use of jQuery.fn.data('events') is deprecated"), f)
        };
        var A = /\/(java|ecma)script/i;
        a.clean || (a.clean = function(b, c, e, f) {
            c = c || document, c = !c.nodeType && c[0] || c, c = c.ownerDocument || c, d("jQuery.clean() is deprecated");
            var g, h, i, j, k = [];
            if (a.merge(k, a.buildFragment(b, c).childNodes), e)
                for (i = function(a) {
                        return !a.type || A.test(a.type) ? f ? f.push(a.parentNode ? a.parentNode.removeChild(a) : a) : e.appendChild(a) : void 0
                    }, g = 0; null != (h = k[g]); g++) a.nodeName(h, "script") && i(h) || (e.appendChild(h), "undefined" != typeof h.getElementsByTagName && (j = a.grep(a.merge([], h.getElementsByTagName("script")), i), k.splice.apply(k, [g + 1, 0].concat(j)), g += j.length));
            return k
        });
        var B = a.event.add,
            C = a.event.remove,
            D = a.event.trigger,
            E = a.fn.toggle,
            F = a.fn.live,
            G = a.fn.die,
            H = a.fn.load,
            I = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",
            J = new RegExp("\\b(?:" + I + ")\\b"),
            K = /(?:^|\s)hover(\.\S+|)\b/,
            L = function(b) {
                return "string" != typeof b || a.event.special.hover ? b : (K.test(b) && d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), b && b.replace(K, "mouseenter$1 mouseleave$1"))
            };
        a.event.props && "attrChange" !== a.event.props[0] && a.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), a.event.dispatch && e(a.event, "handle", a.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), a.event.add = function(a, b, c, e, f) {
            a !== document && J.test(b) && d("AJAX events should be attached to document: " + b), B.call(this, a, L(b || ""), c, e, f)
        }, a.event.remove = function(a, b, c, d, e) {
            C.call(this, a, L(b) || "", c, d, e)
        }, a.each(["load", "unload", "error"], function(b, c) {
            a.fn[c] = function() {
                var a = Array.prototype.slice.call(arguments, 0);
                return "load" === c && "string" == typeof a[0] ? H.apply(this, a) : (d("jQuery.fn." + c + "() is deprecated"), a.splice(0, 0, c), arguments.length ? this.bind.apply(this, a) : (this.triggerHandler.apply(this, a), this))
            }
        }), a.fn.toggle = function(b, c) {
            if (!a.isFunction(b) || !a.isFunction(c)) return E.apply(this, arguments);
            d("jQuery.fn.toggle(handler, handler...) is deprecated");
            var e = arguments,
                f = b.guid || a.guid++,
                g = 0,
                h = function(c) {
                    var d = (a._data(this, "lastToggle" + b.guid) || 0) % g;
                    return a._data(this, "lastToggle" + b.guid, d + 1), c.preventDefault(), e[d].apply(this, arguments) || !1
                };
            for (h.guid = f; g < e.length;) e[g++].guid = f;
            return this.click(h)
        }, a.fn.live = function(b, c, e) {
            return d("jQuery.fn.live() is deprecated"), F ? F.apply(this, arguments) : (a(this.context).on(b, this.selector, c, e), this)
        }, a.fn.die = function(b, c) {
            return d("jQuery.fn.die() is deprecated"), G ? G.apply(this, arguments) : (a(this.context).off(b, this.selector || "**", c), this)
        }, a.event.trigger = function(a, b, c, e) {
            return c || J.test(a) || d("Global events are undocumented and deprecated"), D.call(this, a, b, c || document, e)
        }, a.each(I.split("|"), function(b, c) {
            a.event.special[c] = {
                setup: function() {
                    var b = this;
                    return b !== document && (a.event.add(document, c + "." + a.guid, function() {
                        a.event.trigger(c, Array.prototype.slice.call(arguments, 1), b, !0)
                    }), a._data(this, c, a.guid++)), !1
                },
                teardown: function() {
                    return this !== document && a.event.remove(document, c + "." + a._data(this, c)), !1
                }
            }
        }), a.event.special.ready = {
            setup: function() {
                this === document && d("'ready' event is deprecated")
            }
        };
        var M = a.fn.andSelf || a.fn.addBack,
            N = a.fn.find;
        if (a.fn.andSelf = function() {
                return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), M.apply(this, arguments)
            }, a.fn.find = function(a) {
                var b = N.apply(this, arguments);
                return b.context = this.context, b.selector = this.selector ? this.selector + " " + a : a, b
            }, a.Callbacks) {
            var O = a.Deferred,
                P = [
                    ["resolve", "done", a.Callbacks("once memory"), a.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", a.Callbacks("once memory"), a.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", a.Callbacks("memory"), a.Callbacks("memory")]
                ];
            a.Deferred = function(b) {
                var c = O(),
                    e = c.promise();
                return c.pipe = e.pipe = function() {
                    var b = arguments;
                    return d("deferred.pipe() is deprecated"), a.Deferred(function(d) {
                        a.each(P, function(f, g) {
                            var h = a.isFunction(b[f]) && b[f];
                            c[g[1]](function() {
                                var b = h && h.apply(this, arguments);
                                b && a.isFunction(b.promise) ? b.promise().done(d.resolve).fail(d.reject).progress(d.notify) : d[g[0] + "With"](this === e ? d.promise() : this, h ? [b] : arguments)
                            })
                        }), b = null
                    }).promise()
                }, c.isResolved = function() {
                    return d("deferred.isResolved is deprecated"), "resolved" === c.state()
                }, c.isRejected = function() {
                    return d("deferred.isRejected is deprecated"), "rejected" === c.state()
                }, b && b.call(c, c), c
            }
        }
    }(jQuery, window);

/* 1. superfish.min.js
-----------------------------------------------------------------------------------------------*/
;
(function(e) {
    "use strict";
    var s = function() {
        var s = {
                bcClass: "sf-breadcrumb",
                menuClass: "sf-js-enabled",
                anchorClass: "sf-with-ul",
                menuArrowClass: "sf-arrows"
            },
            o = function() {
                var s = /iPhone|iPad|iPod/i.test(navigator.userAgent);
                return s && e(window).load(function() {
                    e("body").children().on("click", e.noop)
                }), s
            }(),
            n = function() {
                var e = document.documentElement.style;
                return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
            }(),
            t = function(e, o) {
                var n = s.menuClass;
                o.cssArrows && (n += " " + s.menuArrowClass), e.toggleClass(n)
            },
            i = function(o, n) {
                return o.find("li." + n.pathClass).slice(0, n.pathLevels).addClass(n.hoverClass + " " + s.bcClass).filter(function() {
                    return e(this).children(n.popUpSelector).hide().show().length
                }).removeClass(n.pathClass)
            },
            r = function(e) {
                e.children("a").toggleClass(s.anchorClass)
            },
            a = function(e) {
                var s = e.css("ms-touch-action");
                s = "pan-y" === s ? "auto" : "pan-y", e.css("ms-touch-action", s)
            },
            l = function(s, t) {
                var i = "li:has(" + t.popUpSelector + ")";
                e.fn.hoverIntent && !t.disableHI ? s.hoverIntent(u, p, i) : s.on("mouseenter.superfish", i, u).on("mouseleave.superfish", i, p);
                var r = "MSPointerDown.superfish";
                o || (r += " touchend.superfish"), n && (r += " mousedown.superfish"), s.on("focusin.superfish", "li", u).on("focusout.superfish", "li", p).on(r, "a", t, h)
            },
            h = function(s) {
                var o = e(this),
                    n = o.siblings(s.data.popUpSelector);
                n.length > 0 && n.is(":hidden") && (o.one("click.superfish", !1), "MSPointerDown" === s.type ? o.trigger("focus") : e.proxy(u, o.parent("li"))())
            },
            u = function() {
                var s = e(this),
                    o = d(s);
                clearTimeout(o.sfTimer), s.siblings().superfish("hide").end().superfish("show")
            },
            p = function() {
                var s = e(this),
                    n = d(s);
                o ? e.proxy(f, s, n)() : (clearTimeout(n.sfTimer), n.sfTimer = setTimeout(e.proxy(f, s, n), n.delay))
            },
            f = function(s) {
                s.retainPath = e.inArray(this[0], s.$path) > -1, this.superfish("hide"), this.parents("." + s.hoverClass).length || (s.onIdle.call(c(this)), s.$path.length && e.proxy(u, s.$path)())
            },
            c = function(e) {
                return e.closest("." + s.menuClass)
            },
            d = function(e) {
                return c(e).data("sf-options")
            };
        return {
            hide: function(s) {
                if (this.length) {
                    var o = this,
                        n = d(o);
                    if (!n) return this;
                    var t = n.retainPath === !0 ? n.$path : "",
                        i = o.find("li." + n.hoverClass).add(this).not(t).removeClass(n.hoverClass).children(n.popUpSelector),
                        r = n.speedOut;
                    s && (i.show(), r = 0), n.retainPath = !1, n.onBeforeHide.call(i), i.stop(!0, !0).animate(n.animationOut, r, function() {
                        var s = e(this);
                        n.onHide.call(s)
                    })
                }
                return this
            },
            show: function() {
                var e = d(this);
                if (!e) return this;
                var s = this.addClass(e.hoverClass),
                    o = s.children(e.popUpSelector);
                return e.onBeforeShow.call(o), o.stop(!0, !0).animate(e.animation, e.speed, function() {
                    e.onShow.call(o)
                }), this
            },
            destroy: function() {
                return this.each(function() {
                    var o, n = e(this),
                        i = n.data("sf-options");
                    return i ? (o = n.find(i.popUpSelector).parent("li"), clearTimeout(i.sfTimer), t(n, i), r(o), a(n), n.off(".superfish").off(".hoverIntent"), o.children(i.popUpSelector).attr("style", function(e, s) {
                        return s.replace(/display[^;]+;?/g, "")
                    }), i.$path.removeClass(i.hoverClass + " " + s.bcClass).addClass(i.pathClass), n.find("." + i.hoverClass).removeClass(i.hoverClass), i.onDestroy.call(n), n.removeData("sf-options"), void 0) : !1
                })
            },
            init: function(o) {
                return this.each(function() {
                    var n = e(this);
                    if (n.data("sf-options")) return !1;
                    var h = e.extend({}, e.fn.superfish.defaults, o),
                        u = n.find(h.popUpSelector).parent("li");
                    h.$path = i(n, h), n.data("sf-options", h), t(n, h), r(u), a(n), l(n, h), u.not("." + s.bcClass).superfish("hide", !0), h.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function(o) {
        return s[o] ? s[o].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof o && o ? e.error("Method " + o + " does not exist on jQuery.fn.superfish") : s.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {
            opacity: "show"
        },
        animationOut: {
            opacity: "hide"
        },
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop
    }, e.fn.extend({
        hideSuperfishUl: s.hide,
        showSuperfishUl: s.show
    })
})(jQuery);

/* 2. core.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    function b(b, d) {
        var e, f, g, h = b.nodeName.toLowerCase();
        return "area" === h ? (e = b.parentNode, f = e.name, b.href && f && "map" === e.nodeName.toLowerCase() ? (g = a("img[usemap='#" + f + "']")[0], !!g && c(g)) : !1) : (/^(input|select|textarea|button|object)$/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
    }

    function c(b) {
        return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
            return "hidden" === a.css(this, "visibility")
        }).length
    }
    a.ui = a.ui || {}, a.extend(a.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), a.fn.extend({
        scrollParent: function(b) {
            var c = this.css("position"),
                d = "absolute" === c,
                e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                f = this.parents().filter(function() {
                    var b = a(this);
                    return d && "static" === b.css("position") ? !1 : e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
                }).eq(0);
            return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var a = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++a)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
            })
        }
    }), a.extend(a.expr[":"], {
        data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
            return function(c) {
                return !!a.data(c, b)
            }
        }) : function(b, c, d) {
            return !!a.data(b, d[3])
        },
        focusable: function(c) {
            return b(c, !isNaN(a.attr(c, "tabindex")))
        },
        tabbable: function(c) {
            var d = a.attr(c, "tabindex"),
                e = isNaN(d);
            return (e || d >= 0) && b(c, !e)
        }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
        function d(b, c, d, f) {
            return a.each(e, function() {
                c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
            }), c
        }
        var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
            f = c.toLowerCase(),
            g = {
                innerWidth: a.fn.innerWidth,
                innerHeight: a.fn.innerHeight,
                outerWidth: a.fn.outerWidth,
                outerHeight: a.fn.outerHeight
            };
        a.fn["inner" + c] = function(b) {
            return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
                a(this).css(f, d(this, b) + "px")
            })
        }, a.fn["outer" + c] = function(b, e) {
            return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
                a(this).css(f, d(this, b, !0, e) + "px")
            })
        }
    }), a.fn.addBack || (a.fn.addBack = function(a) {
        return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
        return function(c) {
            return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
        }
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
        focus: function(b) {
            return function(c, d) {
                return "number" == typeof c ? this.each(function() {
                    var b = this;
                    setTimeout(function() {
                        a(b).focus(), d && d.call(b)
                    }, c)
                }) : b.apply(this, arguments)
            }
        }(a.fn.focus),
        disableSelection: function() {
            var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(a + ".ui-disableSelection", function(a) {
                    a.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(b) {
            if (void 0 !== b) return this.css("zIndex", b);
            if (this.length)
                for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
                    if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
                    e = e.parent()
                }
            return 0
        }
    }), a.ui.plugin = {
        add: function(b, c, d) {
            var e, f = a.ui[b].prototype;
            for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
        },
        call: function(a, b, c, d) {
            var e, f = a.plugins[b];
            if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
                for (e = 0; e < f.length; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
        }
    }
});

/* 3. widget.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = 0,
        c = Array.prototype.slice;
    return a.cleanData = function(b) {
        return function(c) {
            var d, e, f;
            for (f = 0; null != (e = c[f]); f++) try {
                d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
            } catch (g) {}
            b(c)
        }
    }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h, i = {},
            j = b.split(".")[0];
        return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
            return !!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
            return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
        }, a.extend(g, f, {
            version: d.version,
            _proto: a.extend({}, d),
            _childConstructors: []
        }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
            return a.isFunction(d) ? void(i[b] = function() {
                var a = function() {
                        return c.prototype[b].apply(this, arguments)
                    },
                    e = function(a) {
                        return c.prototype[b].apply(this, a)
                    };
                return function() {
                    var b, c = this._super,
                        f = this._superApply;
                    return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
                }
            }()) : void(i[b] = d)
        }), g.prototype = a.widget.extend(h, {
            widgetEventPrefix: f ? h.widgetEventPrefix || b : b
        }, i, {
            constructor: g,
            namespace: j,
            widgetName: b,
            widgetFullName: e
        }), f ? (a.each(f._childConstructors, function(b, c) {
            var d = c.prototype;
            a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
    }, a.widget.extend = function(b) {
        for (var d, e, f = c.call(arguments, 1), g = 0, h = f.length; h > g; g++)
            for (d in f[g]) e = f[g][d], f[g].hasOwnProperty(d) && void 0 !== e && (b[d] = a.isPlainObject(e) ? a.isPlainObject(b[d]) ? a.widget.extend({}, b[d], e) : a.widget.extend({}, e) : e);
        return b
    }, a.widget.bridge = function(b, d) {
        var e = d.prototype.widgetFullName || b;
        a.fn[b] = function(f) {
            var g = "string" == typeof f,
                h = c.call(arguments, 1),
                i = this;
            return g ? this.each(function() {
                var c, d = a.data(this, e);
                return "instance" === f ? (i = d, !1) : d ? a.isFunction(d[f]) && "_" !== f.charAt(0) ? (c = d[f].apply(d, h), c !== d && void 0 !== c ? (i = c && c.jquery ? i.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + f + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + f + "'")
            }) : (h.length && (f = a.widget.extend.apply(null, [f].concat(h))), this.each(function() {
                var b = a.data(this, e);
                b ? (b.option(f || {}), b._init && b._init()) : a.data(this, e, new d(f, this))
            })), i
        }
    }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(c, d) {
            d = a(d || this.defaultElement || this)[0], this.element = a(d), this.uuid = b++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), d !== this && (a.data(d, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(a) {
                    a.target === d && this.destroy()
                }
            }), this.document = a(d.style ? d.ownerDocument : d.document || d), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), c), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
            return this.element
        },
        option: function(b, c) {
            var d, e, f, g = b;
            if (0 === arguments.length) return a.widget.extend({}, this.options);
            if ("string" == typeof b)
                if (g = {}, d = b.split("."), b = d.shift(), d.length) {
                    for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; f < d.length - 1; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
                    if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
                    e[b] = c
                } else {
                    if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
                    g[b] = c
                }
            return this._setOptions(g), this
        },
        _setOptions: function(a) {
            var b;
            for (b in a) this._setOption(b, a[b]);
            return this
        },
        _setOption: function(a, b) {
            return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(b, c, d) {
            var e, f = this;
            "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
                function h() {
                    return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
                }
                "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
                var i = d.match(/^([\w:-]*)\s*(.*)$/),
                    j = i[1] + f.eventNamespace,
                    k = i[2];
                k ? e.delegate(k, j, h) : c.bind(j, h)
            })
        },
        _off: function(b, c) {
            c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
        },
        _delay: function(a, b) {
            function c() {
                return ("string" == typeof a ? d[a] : a).apply(d, arguments)
            }
            var d = this;
            return setTimeout(c, b || 0)
        },
        _hoverable: function(b) {
            this.hoverable = this.hoverable.add(b), this._on(b, {
                mouseenter: function(b) {
                    a(b.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(b) {
                    a(b.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(b) {
            this.focusable = this.focusable.add(b), this._on(b, {
                focusin: function(b) {
                    a(b.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(b) {
                    a(b.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(b, c, d) {
            var e, f, g = this.options[b];
            if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
                for (e in f) e in c || (c[e] = f[e]);
            return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
    }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
            "string" == typeof e && (e = {
                effect: e
            });
            var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
            e = e || {}, "number" == typeof e && (e = {
                duration: e
            }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
                a(this)[b](), f && f.call(d[0]), c()
            })
        }
    }), a.widget
});

/* 4. tabs.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.tabs", {
        version: "1.11.4",
        delay: 300,
        options: {
            active: null,
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function() {
            var a = /#.*$/;
            return function(b) {
                var c, d;
                b = b.cloneNode(!1), c = b.href.replace(a, ""), d = location.href.replace(a, "");
                try {
                    c = decodeURIComponent(c)
                } catch (e) {}
                try {
                    d = decodeURIComponent(d)
                } catch (e) {}
                return b.hash.length > 1 && c === d
            }
        }(),
        _create: function() {
            var b = this,
                c = this.options;
            this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", c.collapsible), this._processTabs(), c.active = this._initialActive(), a.isArray(c.disabled) && (c.disabled = a.unique(c.disabled.concat(a.map(this.tabs.filter(".ui-state-disabled"), function(a) {
                return b.tabs.index(a)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(c.active) : a(), this._refresh(), this.active.length && this.load(c.active)
        },
        _initialActive: function() {
            var b = this.options.active,
                c = this.options.collapsible,
                d = location.hash.substring(1);
            return null === b && (d && this.tabs.each(function(c, e) {
                return a(e).attr("aria-controls") === d ? (b = c, !1) : void 0
            }), null === b && (b = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === b || -1 === b) && (b = this.tabs.length ? 0 : !1)), b !== !1 && (b = this.tabs.index(this.tabs.eq(b)), -1 === b && (b = c ? !1 : 0)), !c && b === !1 && this.anchors.length && (b = 0), b
        },
        _getCreateEventData: function() {
            return {
                tab: this.active,
                panel: this.active.length ? this._getPanelForTab(this.active) : a()
            }
        },
        _tabKeydown: function(b) {
            var c = a(this.document[0].activeElement).closest("li"),
                d = this.tabs.index(c),
                e = !0;
            if (!this._handlePageNav(b)) {
                switch (b.keyCode) {
                    case a.ui.keyCode.RIGHT:
                    case a.ui.keyCode.DOWN:
                        d++;
                        break;
                    case a.ui.keyCode.UP:
                    case a.ui.keyCode.LEFT:
                        e = !1, d--;
                        break;
                    case a.ui.keyCode.END:
                        d = this.anchors.length - 1;
                        break;
                    case a.ui.keyCode.HOME:
                        d = 0;
                        break;
                    case a.ui.keyCode.SPACE:
                        return b.preventDefault(), clearTimeout(this.activating), void this._activate(d);
                    case a.ui.keyCode.ENTER:
                        return b.preventDefault(), clearTimeout(this.activating), void this._activate(d === this.options.active ? !1 : d);
                    default:
                        return
                }
                b.preventDefault(), clearTimeout(this.activating), d = this._focusNextTab(d, e), b.ctrlKey || b.metaKey || (c.attr("aria-selected", "false"), this.tabs.eq(d).attr("aria-selected", "true"), this.activating = this._delay(function() {
                    this.option("active", d)
                }, this.delay))
            }
        },
        _panelKeydown: function(b) {
            this._handlePageNav(b) || b.ctrlKey && b.keyCode === a.ui.keyCode.UP && (b.preventDefault(), this.active.focus())
        },
        _handlePageNav: function(b) {
            return b.altKey && b.keyCode === a.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : b.altKey && b.keyCode === a.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function(b, c) {
            function d() {
                return b > e && (b = 0), 0 > b && (b = e), b
            }
            for (var e = this.tabs.length - 1; - 1 !== a.inArray(d(), this.options.disabled);) b = c ? b + 1 : b - 1;
            return b
        },
        _focusNextTab: function(a, b) {
            return a = this._findNextTab(a, b), this.tabs.eq(a).focus(), a
        },
        _setOption: function(a, b) {
            return "active" === a ? void this._activate(b) : "disabled" === a ? void this._setupDisabled(b) : (this._super(a, b), "collapsible" === a && (this.element.toggleClass("ui-tabs-collapsible", b), b || this.options.active !== !1 || this._activate(0)), "event" === a && this._setupEvents(b), void("heightStyle" === a && this._setupHeightStyle(b)))
        },
        _sanitizeSelector: function(a) {
            return a ? a.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function() {
            var b = this.options,
                c = this.tablist.children(":has(a[href])");
            b.disabled = a.map(c.filter(".ui-state-disabled"), function(a) {
                return c.index(a)
            }), this._processTabs(), b.active !== !1 && this.anchors.length ? this.active.length && !a.contains(this.tablist[0], this.active[0]) ? this.tabs.length === b.disabled.length ? (b.active = !1, this.active = a()) : this._activate(this._findNextTab(Math.max(0, b.active - 1), !1)) : b.active = this.tabs.index(this.active) : (b.active = !1, this.active = a()), this._refresh()
        },
        _refresh: function() {
            this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                "aria-hidden": "true"
            }), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._getPanelForTab(this.active).show().attr({
                "aria-hidden": "false"
            })) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function() {
            var b = this,
                c = this.tabs,
                d = this.anchors,
                e = this.panels;
            this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(b) {
                a(this).is(".ui-state-disabled") && b.preventDefault()
            }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                a(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                role: "tab",
                tabIndex: -1
            }), this.anchors = this.tabs.map(function() {
                return a("a", this)[0]
            }).addClass("ui-tabs-anchor").attr({
                role: "presentation",
                tabIndex: -1
            }), this.panels = a(), this.anchors.each(function(c, d) {
                var e, f, g, h = a(d).uniqueId().attr("id"),
                    i = a(d).closest("li"),
                    j = i.attr("aria-controls");
                b._isLocal(d) ? (e = d.hash, g = e.substring(1), f = b.element.find(b._sanitizeSelector(e))) : (g = i.attr("aria-controls") || a({}).uniqueId()[0].id, e = "#" + g, f = b.element.find(e), f.length || (f = b._createPanel(g), f.insertAfter(b.panels[c - 1] || b.tablist)), f.attr("aria-live", "polite")), f.length && (b.panels = b.panels.add(f)), j && i.data("ui-tabs-aria-controls", j), i.attr({
                    "aria-controls": g,
                    "aria-labelledby": h
                }), f.attr("aria-labelledby", h)
            }), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel"), c && (this._off(c.not(this.tabs)), this._off(d.not(this.anchors)), this._off(e.not(this.panels)))
        },
        _getList: function() {
            return this.tablist || this.element.find("ol,ul").eq(0)
        },
        _createPanel: function(b) {
            return a("<div>").attr("id", b).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
        },
        _setupDisabled: function(b) {
            a.isArray(b) && (b.length ? b.length === this.anchors.length && (b = !0) : b = !1);
            for (var c, d = 0; c = this.tabs[d]; d++) b === !0 || -1 !== a.inArray(d, b) ? a(c).addClass("ui-state-disabled").attr("aria-disabled", "true") : a(c).removeClass("ui-state-disabled").removeAttr("aria-disabled");
            this.options.disabled = b
        },
        _setupEvents: function(b) {
            var c = {};
            b && a.each(b.split(" "), function(a, b) {
                c[b] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function(a) {
                    a.preventDefault()
                }
            }), this._on(this.anchors, c), this._on(this.tabs, {
                keydown: "_tabKeydown"
            }), this._on(this.panels, {
                keydown: "_panelKeydown"
            }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(b) {
            var c, d = this.element.parent();
            "fill" === b ? (c = d.height(), c -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var b = a(this),
                    d = b.css("position");
                "absolute" !== d && "fixed" !== d && (c -= b.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() {
                c -= a(this).outerHeight(!0)
            }), this.panels.each(function() {
                a(this).height(Math.max(0, c - a(this).innerHeight() + a(this).height()))
            }).css("overflow", "auto")) : "auto" === b && (c = 0, this.panels.each(function() {
                c = Math.max(c, a(this).height("").height())
            }).height(c))
        },
        _eventHandler: function(b) {
            var c = this.options,
                d = this.active,
                e = a(b.currentTarget),
                f = e.closest("li"),
                g = f[0] === d[0],
                h = g && c.collapsible,
                i = h ? a() : this._getPanelForTab(f),
                j = d.length ? this._getPanelForTab(d) : a(),
                k = {
                    oldTab: d,
                    oldPanel: j,
                    newTab: h ? a() : f,
                    newPanel: i
                };
            b.preventDefault(), f.hasClass("ui-state-disabled") || f.hasClass("ui-tabs-loading") || this.running || g && !c.collapsible || this._trigger("beforeActivate", b, k) === !1 || (c.active = h ? !1 : this.tabs.index(f), this.active = g ? a() : f, this.xhr && this.xhr.abort(), j.length || i.length || a.error("jQuery UI Tabs: Mismatching fragment identifier."), i.length && this.load(this.tabs.index(f), b), this._toggle(b, k))
        },
        _toggle: function(b, c) {
            function d() {
                f.running = !1, f._trigger("activate", b, c)
            }

            function e() {
                c.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), g.length && f.options.show ? f._show(g, f.options.show, d) : (g.show(), d())
            }
            var f = this,
                g = c.newPanel,
                h = c.oldPanel;
            this.running = !0, h.length && this.options.hide ? this._hide(h, this.options.hide, function() {
                c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), e()
            }) : (c.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), h.hide(), e()), h.attr("aria-hidden", "true"), c.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), g.length && h.length ? c.oldTab.attr("tabIndex", -1) : g.length && this.tabs.filter(function() {
                return 0 === a(this).attr("tabIndex")
            }).attr("tabIndex", -1), g.attr("aria-hidden", "false"), c.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function(b) {
            var c, d = this._findActive(b);
            d[0] !== this.active[0] && (d.length || (d = this.active), c = d.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }))
        },
        _findActive: function(b) {
            return b === !1 ? a() : this.tabs.eq(b)
        },
        _getIndex: function(a) {
            return "string" == typeof a && (a = this.anchors.index(this.anchors.filter("[href$='" + a + "']"))), a
        },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tablist.unbind(this.eventNamespace), this.tabs.add(this.panels).each(function() {
                a.data(this, "ui-tabs-destroy") ? a(this).remove() : a(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
            }), this.tabs.each(function() {
                var b = a(this),
                    c = b.data("ui-tabs-aria-controls");
                c ? b.attr("aria-controls", c).removeData("ui-tabs-aria-controls") : b.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(b) {
            var c = this.options.disabled;
            c !== !1 && (void 0 === b ? c = !1 : (b = this._getIndex(b), c = a.isArray(c) ? a.map(c, function(a) {
                return a !== b ? a : null
            }) : a.map(this.tabs, function(a, c) {
                return c !== b ? c : null
            })), this._setupDisabled(c))
        },
        disable: function(b) {
            var c = this.options.disabled;
            if (c !== !0) {
                if (void 0 === b) c = !0;
                else {
                    if (b = this._getIndex(b), -1 !== a.inArray(b, c)) return;
                    c = a.isArray(c) ? a.merge([b], c).sort() : [b]
                }
                this._setupDisabled(c)
            }
        },
        load: function(b, c) {
            b = this._getIndex(b);
            var d = this,
                e = this.tabs.eq(b),
                f = e.find(".ui-tabs-anchor"),
                g = this._getPanelForTab(e),
                h = {
                    tab: e,
                    panel: g
                },
                i = function(a, b) {
                    "abort" === b && d.panels.stop(!1, !0), e.removeClass("ui-tabs-loading"), g.removeAttr("aria-busy"), a === d.xhr && delete d.xhr
                };
            this._isLocal(f[0]) || (this.xhr = a.ajax(this._ajaxSettings(f, c, h)), this.xhr && "canceled" !== this.xhr.statusText && (e.addClass("ui-tabs-loading"), g.attr("aria-busy", "true"), this.xhr.done(function(a, b, e) {
                setTimeout(function() {
                    g.html(a), d._trigger("load", c, h), i(e, b)
                }, 1)
            }).fail(function(a, b) {
                setTimeout(function() {
                    i(a, b)
                }, 1)
            })))
        },
        _ajaxSettings: function(b, c, d) {
            var e = this;
            return {
                url: b.attr("href"),
                beforeSend: function(b, f) {
                    return e._trigger("beforeLoad", c, a.extend({
                        jqXHR: b,
                        ajaxSettings: f
                    }, d))
                }
            }
        },
        _getPanelForTab: function(b) {
            var c = a(b).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + c))
        }
    })
});

/* 5. effect.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a) {
    var b = "ui-effects-",
        c = a;
    /*!
     */
    return a.effects = {
            effect: {}
        },
        function(a, b) {
            function c(a, b, c) {
                var d = l[b.type] || {};
                return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
            }

            function d(b) {
                var c = j(),
                    d = c._rgba = [];
                return b = b.toLowerCase(), o(i, function(a, e) {
                    var f, g = e.re.exec(b),
                        h = g && e.parse(g),
                        i = e.space || "rgba";
                    return h ? (f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1) : void 0
                }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b]
            }

            function e(a, b, c) {
                return c = (c + 1) % 1, 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
            }
            var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                h = /^([\-+])=\s*(\d+\.?\d*)/,
                i = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(a) {
                        return [a[1], a[2], a[3], a[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(a) {
                        return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(a) {
                        return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(a) {
                        return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(a) {
                        return [a[1], a[2] / 100, a[3] / 100, a[4]]
                    }
                }],
                j = a.Color = function(b, c, d, e) {
                    return new a.Color.fn.parse(b, c, d, e)
                },
                k = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                l = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                m = j.support = {},
                n = a("<p>")[0],
                o = a.each;
            n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) {
                b.cache = "_" + a, b.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), j.fn = a.extend(j.prototype, {
                parse: function(e, g, h, i) {
                    if (e === b) return this._rgba = [null, null, null, null], this;
                    (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                    var l = this,
                        m = a.type(e),
                        n = this._rgba = [];
                    return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
                        n[b.idx] = c(e[b.idx], b)
                    }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
                        e[b.cache] && (l[b.cache] = e[b.cache].slice())
                    }) : o(k, function(b, d) {
                        var f = d.cache;
                        o(d.props, function(a, b) {
                            if (!l[f] && d.to) {
                                if ("alpha" === a || null == e[a]) return;
                                l[f] = d.to(l._rgba)
                            }
                            l[f][b.idx] = c(e[a], b, !0)
                        }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                    }), this) : void 0
                },
                is: function(a) {
                    var b = j(a),
                        c = !0,
                        d = this;
                    return o(k, function(a, e) {
                        var f, g = b[e.cache];
                        return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function(a, b) {
                            return null != g[b.idx] ? c = g[b.idx] === f[b.idx] : void 0
                        })), c
                    }), c
                },
                _space: function() {
                    var a = [],
                        b = this;
                    return o(k, function(c, d) {
                        b[d.cache] && a.push(c)
                    }), a.pop()
                },
                transition: function(a, b) {
                    var d = j(a),
                        e = d._space(),
                        f = k[e],
                        g = 0 === this.alpha() ? j("transparent") : this,
                        h = g[f.cache] || f.to(g._rgba),
                        i = h.slice();
                    return d = d[f.cache], o(f.props, function(a, e) {
                        var f = e.idx,
                            g = h[f],
                            j = d[f],
                            k = l[e.type] || {};
                        null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
                    }), this[e](i)
                },
                blend: function(b) {
                    if (1 === this._rgba[3]) return this;
                    var c = this._rgba.slice(),
                        d = c.pop(),
                        e = j(b)._rgba;
                    return j(a.map(c, function(a, b) {
                        return (1 - d) * e[b] + d * a
                    }))
                },
                toRgbaString: function() {
                    var b = "rgba(",
                        c = a.map(this._rgba, function(a, b) {
                            return null == a ? b > 2 ? 1 : 0 : a
                        });
                    return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
                },
                toHslaString: function() {
                    var b = "hsla(",
                        c = a.map(this.hsla(), function(a, b) {
                            return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                        });
                    return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
                },
                toHexString: function(b) {
                    var c = this._rgba.slice(),
                        d = c.pop();
                    return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                        return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
                if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                var b, c, d = a[0] / 255,
                    e = a[1] / 255,
                    f = a[2] / 255,
                    g = a[3],
                    h = Math.max(d, e, f),
                    i = Math.min(d, e, f),
                    j = h - i,
                    k = h + i,
                    l = .5 * k;
                return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
            }, k.hsla.from = function(a) {
                if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                var b = a[0] / 360,
                    c = a[1],
                    d = a[2],
                    f = a[3],
                    g = .5 >= d ? d * (1 + c) : d + c - d * c,
                    h = 2 * d - g;
                return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
            }, o(k, function(d, e) {
                var f = e.props,
                    g = e.cache,
                    i = e.to,
                    k = e.from;
                j.fn[d] = function(d) {
                    if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                    var e, h = a.type(d),
                        l = "array" === h || "object" === h ? d : arguments,
                        m = this[g].slice();
                    return o(f, function(a, b) {
                        var d = l["object" === h ? a : b.idx];
                        null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                    }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
                }, o(f, function(b, c) {
                    j.fn[b] || (j.fn[b] = function(e) {
                        var f, g = a.type(e),
                            i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                            j = this[i](),
                            k = j[c.idx];
                        return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
                    })
                })
            }), j.hook = function(b) {
                var c = b.split(" ");
                o(c, function(b, c) {
                    a.cssHooks[c] = {
                        set: function(b, e) {
                            var f, g, h = "";
                            if ("transparent" !== e && ("string" !== a.type(e) || (f = d(e)))) {
                                if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                    for (g = "backgroundColor" === c ? b.parentNode : b;
                                        ("" === h || "transparent" === h) && g && g.style;) try {
                                        h = a.css(g, "backgroundColor"), g = g.parentNode
                                    } catch (i) {}
                                    e = e.blend(h && "transparent" !== h ? h : "_default")
                                }
                                e = e.toRgbaString()
                            }
                            try {
                                b.style[c] = e
                            } catch (i) {}
                        }
                    }, a.fx.step[c] = function(b) {
                        b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                    }
                })
            }, j.hook(g), a.cssHooks.borderColor = {
                expand: function(a) {
                    var b = {};
                    return o(["Top", "Right", "Bottom", "Left"], function(c, d) {
                        b["border" + d + "Color"] = a
                    }), b
                }
            }, f = a.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(c),
        function() {
            function b(b) {
                var c, d, e = b.ownerDocument.defaultView ? b.ownerDocument.defaultView.getComputedStyle(b, null) : b.currentStyle,
                    f = {};
                if (e && e.length && e[0] && e[e[0]])
                    for (d = e.length; d--;) c = e[d], "string" == typeof e[c] && (f[a.camelCase(c)] = e[c]);
                else
                    for (c in e) "string" == typeof e[c] && (f[c] = e[c]);
                return f
            }

            function d(b, c) {
                var d, e, g = {};
                for (d in c) e = c[d], b[d] !== e && (f[d] || (a.fx.step[d] || !isNaN(parseFloat(e))) && (g[d] = e));
                return g
            }
            var e = ["add", "remove", "toggle"],
                f = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            a.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(b, d) {
                a.fx.step[d] = function(a) {
                    ("none" !== a.end && !a.setAttr || 1 === a.pos && !a.setAttr) && (c.style(a.elem, d, a.end), a.setAttr = !0)
                }
            }), a.fn.addBack || (a.fn.addBack = function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }), a.effects.animateClass = function(c, f, g, h) {
                var i = a.speed(f, g, h);
                return this.queue(function() {
                    var f, g = a(this),
                        h = g.attr("class") || "",
                        j = i.children ? g.find("*").addBack() : g;
                    j = j.map(function() {
                        var c = a(this);
                        return {
                            el: c,
                            start: b(this)
                        }
                    }), f = function() {
                        a.each(e, function(a, b) {
                            c[b] && g[b + "Class"](c[b])
                        })
                    }, f(), j = j.map(function() {
                        return this.end = b(this.el[0]), this.diff = d(this.start, this.end), this
                    }), g.attr("class", h), j = j.map(function() {
                        var b = this,
                            c = a.Deferred(),
                            d = a.extend({}, i, {
                                queue: !1,
                                complete: function() {
                                    c.resolve(b)
                                }
                            });
                        return this.el.animate(this.diff, d), c.promise()
                    }), a.when.apply(a, j.get()).done(function() {
                        f(), a.each(arguments, function() {
                            var b = this.el;
                            a.each(this.diff, function(a) {
                                b.css(a, "")
                            })
                        }), i.complete.call(g[0])
                    })
                })
            }, a.fn.extend({
                addClass: function(b) {
                    return function(c, d, e, f) {
                        return d ? a.effects.animateClass.call(this, {
                            add: c
                        }, d, e, f) : b.apply(this, arguments)
                    }
                }(a.fn.addClass),
                removeClass: function(b) {
                    return function(c, d, e, f) {
                        return arguments.length > 1 ? a.effects.animateClass.call(this, {
                            remove: c
                        }, d, e, f) : b.apply(this, arguments)
                    }
                }(a.fn.removeClass),
                toggleClass: function(b) {
                    return function(c, d, e, f, g) {
                        return "boolean" == typeof d || void 0 === d ? e ? a.effects.animateClass.call(this, d ? {
                            add: c
                        } : {
                            remove: c
                        }, e, f, g) : b.apply(this, arguments) : a.effects.animateClass.call(this, {
                            toggle: c
                        }, d, e, f)
                    }
                }(a.fn.toggleClass),
                switchClass: function(b, c, d, e, f) {
                    return a.effects.animateClass.call(this, {
                        add: c,
                        remove: b
                    }, d, e, f)
                }
            })
        }(),
        function() {
            function c(b, c, d, e) {
                return a.isPlainObject(b) && (c = b, b = b.effect), b = {
                    effect: b
                }, null == c && (c = {}), a.isFunction(c) && (e = c, d = null, c = {}), ("number" == typeof c || a.fx.speeds[c]) && (e = d, d = c, c = {}), a.isFunction(d) && (e = d, d = null), c && a.extend(b, c), d = d || c.duration, b.duration = a.fx.off ? 0 : "number" == typeof d ? d : d in a.fx.speeds ? a.fx.speeds[d] : a.fx.speeds._default, b.complete = e || c.complete, b
            }

            function d(b) {
                return !b || "number" == typeof b || a.fx.speeds[b] ? !0 : "string" != typeof b || a.effects.effect[b] ? a.isFunction(b) ? !0 : "object" != typeof b || b.effect ? !1 : !0 : !0
            }
            a.extend(a.effects, {
                version: "1.11.4",
                save: function(a, c) {
                    for (var d = 0; d < c.length; d++) null !== c[d] && a.data(b + c[d], a[0].style[c[d]])
                },
                restore: function(a, c) {
                    var d, e;
                    for (e = 0; e < c.length; e++) null !== c[e] && (d = a.data(b + c[e]), void 0 === d && (d = ""), a.css(c[e], d))
                },
                setMode: function(a, b) {
                    return "toggle" === b && (b = a.is(":hidden") ? "show" : "hide"), b
                },
                getBaseline: function(a, b) {
                    var c, d;
                    switch (a[0]) {
                        case "top":
                            c = 0;
                            break;
                        case "middle":
                            c = .5;
                            break;
                        case "bottom":
                            c = 1;
                            break;
                        default:
                            c = a[0] / b.height
                    }
                    switch (a[1]) {
                        case "left":
                            d = 0;
                            break;
                        case "center":
                            d = .5;
                            break;
                        case "right":
                            d = 1;
                            break;
                        default:
                            d = a[1] / b.width
                    }
                    return {
                        x: d,
                        y: c
                    }
                },
                createWrapper: function(b) {
                    if (b.parent().is(".ui-effects-wrapper")) return b.parent();
                    var c = {
                            width: b.outerWidth(!0),
                            height: b.outerHeight(!0),
                            "float": b.css("float")
                        },
                        d = a("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        e = {
                            width: b.width(),
                            height: b.height()
                        },
                        f = document.activeElement;
                    try {
                        f.id
                    } catch (g) {
                        f = document.body
                    }
                    return b.wrap(d), (b[0] === f || a.contains(b[0], f)) && a(f).focus(), d = b.parent(), "static" === b.css("position") ? (d.css({
                        position: "relative"
                    }), b.css({
                        position: "relative"
                    })) : (a.extend(c, {
                        position: b.css("position"),
                        zIndex: b.css("z-index")
                    }), a.each(["top", "left", "bottom", "right"], function(a, d) {
                        c[d] = b.css(d), isNaN(parseInt(c[d], 10)) && (c[d] = "auto")
                    }), b.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), b.css(e), d.css(c).show()
                },
                removeWrapper: function(b) {
                    var c = document.activeElement;
                    return b.parent().is(".ui-effects-wrapper") && (b.parent().replaceWith(b), (b[0] === c || a.contains(b[0], c)) && a(c).focus()), b
                },
                setTransition: function(b, c, d, e) {
                    return e = e || {}, a.each(c, function(a, c) {
                        var f = b.cssUnit(c);
                        f[0] > 0 && (e[c] = f[0] * d + f[1])
                    }), e
                }
            }), a.fn.extend({
                effect: function() {
                    function b(b) {
                        function c() {
                            a.isFunction(f) && f.call(e[0]), a.isFunction(b) && b()
                        }
                        var e = a(this),
                            f = d.complete,
                            h = d.mode;
                        (e.is(":hidden") ? "hide" === h : "show" === h) ? (e[h](), c()) : g.call(e[0], d, c)
                    }
                    var d = c.apply(this, arguments),
                        e = d.mode,
                        f = d.queue,
                        g = a.effects.effect[d.effect];
                    return a.fx.off || !g ? e ? this[e](d.duration, d.complete) : this.each(function() {
                        d.complete && d.complete.call(this)
                    }) : f === !1 ? this.each(b) : this.queue(f || "fx", b)
                },
                show: function(a) {
                    return function(b) {
                        if (d(b)) return a.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "show", this.effect.call(this, e)
                    }
                }(a.fn.show),
                hide: function(a) {
                    return function(b) {
                        if (d(b)) return a.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "hide", this.effect.call(this, e)
                    }
                }(a.fn.hide),
                toggle: function(a) {
                    return function(b) {
                        if (d(b) || "boolean" == typeof b) return a.apply(this, arguments);
                        var e = c.apply(this, arguments);
                        return e.mode = "toggle", this.effect.call(this, e)
                    }
                }(a.fn.toggle),
                cssUnit: function(b) {
                    var c = this.css(b),
                        d = [];
                    return a.each(["em", "px", "%", "pt"], function(a, b) {
                        c.indexOf(b) > 0 && (d = [parseFloat(c), b])
                    }), d
                }
            })
        }(),
        function() {
            var b = {};
            a.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(a, c) {
                b[c] = function(b) {
                    return Math.pow(b, a + 2)
                }
            }), a.extend(b, {
                Sine: function(a) {
                    return 1 - Math.cos(a * Math.PI / 2)
                },
                Circ: function(a) {
                    return 1 - Math.sqrt(1 - a * a)
                },
                Elastic: function(a) {
                    return 0 === a || 1 === a ? a : -Math.pow(2, 8 * (a - 1)) * Math.sin((80 * (a - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(a) {
                    return a * a * (3 * a - 2)
                },
                Bounce: function(a) {
                    for (var b, c = 4; a < ((b = Math.pow(2, --c)) - 1) / 11;);
                    return 1 / Math.pow(4, 3 - c) - 7.5625 * Math.pow((3 * b - 2) / 22 - a, 2)
                }
            }), a.each(b, function(b, c) {
                a.easing["easeIn" + b] = c, a.easing["easeOut" + b] = function(a) {
                    return 1 - c(1 - a)
                }, a.easing["easeInOut" + b] = function(a) {
                    return .5 > a ? c(2 * a) / 2 : 1 - c(-2 * a + 2) / 2
                }
            })
        }(), a.effects
});

/* 6. effect-fade.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./effect"], a) : a(jQuery)
}(function(a) {
    return a.effects.effect.fade = function(b, c) {
        var d = a(this),
            e = a.effects.setMode(d, b.mode || "toggle");
        d.animate({
            opacity: e
        }, {
            queue: !1,
            duration: b.duration,
            easing: b.easing,
            complete: c
        })
    }
});

/* 7. accordion.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.accordion", {
        version: "1.11.4",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function() {
            var b = this.options;
            this.prevShow = this.prevHide = a(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), b.collapsible || b.active !== !1 && null != b.active || (b.active = 0), this._processPanels(), b.active < 0 && (b.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : a()
            }
        },
        _createIcons: function() {
            var b = this.options.icons;
            b && (a("<span>").addClass("ui-accordion-header-icon ui-icon " + b.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(b.header).addClass(b.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var a;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), a = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && a.css("height", "")
        },
        _setOption: function(a, b) {
            return "active" === a ? void this._activate(b) : ("event" === a && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(b)), this._super(a, b), "collapsible" !== a || b || this.options.active !== !1 || this._activate(0), "icons" === a && (this._destroyIcons(), b && this._createIcons()), void("disabled" === a && (this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!b))))
        },
        _keydown: function(b) {
            if (!b.altKey && !b.ctrlKey) {
                var c = a.ui.keyCode,
                    d = this.headers.length,
                    e = this.headers.index(b.target),
                    f = !1;
                switch (b.keyCode) {
                    case c.RIGHT:
                    case c.DOWN:
                        f = this.headers[(e + 1) % d];
                        break;
                    case c.LEFT:
                    case c.UP:
                        f = this.headers[(e - 1 + d) % d];
                        break;
                    case c.SPACE:
                    case c.ENTER:
                        this._eventHandler(b);
                        break;
                    case c.HOME:
                        f = this.headers[0];
                        break;
                    case c.END:
                        f = this.headers[d - 1]
                }
                f && (a(b.target).attr("tabIndex", -1), a(f).attr("tabIndex", 0), f.focus(), b.preventDefault())
            }
        },
        _panelKeyDown: function(b) {
            b.keyCode === a.ui.keyCode.UP && b.ctrlKey && a(b.currentTarget).prev().focus()
        },
        refresh: function() {
            var b = this.options;
            this._processPanels(), b.active === !1 && b.collapsible === !0 || !this.headers.length ? (b.active = !1, this.active = a()) : b.active === !1 ? this._activate(0) : this.active.length && !a.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (b.active = !1, this.active = a()) : this._activate(Math.max(0, b.active - 1)) : b.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var a = this.headers,
                b = this.panels;
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), b && (this._off(a.not(this.headers)), this._off(b.not(this.panels)))
        },
        _refresh: function() {
            var b, c = this.options,
                d = c.heightStyle,
                e = this.element.parent();
            this.active = this._findActive(c.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function() {
                var b = a(this),
                    c = b.uniqueId().attr("id"),
                    d = b.next(),
                    e = d.uniqueId().attr("id");
                b.attr("aria-controls", e), d.attr("aria-labelledby", c)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(c.event), "fill" === d ? (b = e.height(), this.element.siblings(":visible").each(function() {
                var c = a(this),
                    d = c.css("position");
                "absolute" !== d && "fixed" !== d && (b -= c.outerHeight(!0))
            }), this.headers.each(function() {
                b -= a(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                a(this).height(Math.max(0, b - a(this).innerHeight() + a(this).height()))
            }).css("overflow", "auto")) : "auto" === d && (b = 0, this.headers.next().each(function() {
                b = Math.max(b, a(this).css("height", "").height())
            }).height(b))
        },
        _activate: function(b) {
            var c = this._findActive(b)[0];
            c !== this.active[0] && (c = c || this.active[0], this._eventHandler({
                target: c,
                currentTarget: c,
                preventDefault: a.noop
            }))
        },
        _findActive: function(b) {
            return "number" == typeof b ? this.headers.eq(b) : a()
        },
        _setupEvents: function(b) {
            var c = {
                keydown: "_keydown"
            };
            b && a.each(b.split(" "), function(a, b) {
                c[b] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, c), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(b) {
            var c = this.options,
                d = this.active,
                e = a(b.currentTarget),
                f = e[0] === d[0],
                g = f && c.collapsible,
                h = g ? a() : e.next(),
                i = d.next(),
                j = {
                    oldHeader: d,
                    oldPanel: i,
                    newHeader: g ? a() : e,
                    newPanel: h
                };
            b.preventDefault(), f && !c.collapsible || this._trigger("beforeActivate", b, j) === !1 || (c.active = !g && this.headers.index(e), this.active = f ? a() : e, this._toggle(j), d.removeClass("ui-accordion-header-active ui-state-active"), c.icons && d.children(".ui-accordion-header-icon").removeClass(c.icons.activeHeader).addClass(c.icons.header), f || (e.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), c.icons && e.children(".ui-accordion-header-icon").removeClass(c.icons.header).addClass(c.icons.activeHeader), e.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(b) {
            var c = b.newPanel,
                d = this.prevShow.length ? this.prevShow : b.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = c, this.prevHide = d, this.options.animate ? this._animate(c, d, b) : (d.hide(), c.show(), this._toggleComplete(b)), d.attr({
                "aria-hidden": "true"
            }), d.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), c.length && d.length ? d.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : c.length && this.headers.filter(function() {
                return 0 === parseInt(a(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), c.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function(a, b, c) {
            var d, e, f, g = this,
                h = 0,
                i = a.css("box-sizing"),
                j = a.length && (!b.length || a.index() < b.index()),
                k = this.options.animate || {},
                l = j && k.down || k,
                m = function() {
                    g._toggleComplete(c)
                };
            return "number" == typeof l && (f = l), "string" == typeof l && (e = l), e = e || l.easing || k.easing, f = f || l.duration || k.duration, b.length ? a.length ? (d = a.show().outerHeight(), b.animate(this.hideProps, {
                duration: f,
                easing: e,
                step: function(a, b) {
                    b.now = Math.round(a)
                }
            }), void a.hide().animate(this.showProps, {
                duration: f,
                easing: e,
                complete: m,
                step: function(a, c) {
                    c.now = Math.round(a), "height" !== c.prop ? "content-box" === i && (h += c.now) : "content" !== g.options.heightStyle && (c.now = Math.round(d - b.outerHeight() - h), h = 0)
                }
            })) : b.animate(this.hideProps, f, e, m) : a.animate(this.showProps, f, e, m)
        },
        _toggleComplete: function(a) {
            var b = a.oldPanel;
            b.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), b.length && (b.parent()[0].className = b.parent()[0].className), this._trigger("activate", null, a)
        }
    })
});

/* 8. swiper.js
-----------------------------------------------------------------------------------------------*/
! function() {
    "use strict";

    function e(e) {
        e.fn.swiper = function(a) {
            var s;
            return e(this).each(function() {
                var e = new t(this, a);
                s || (s = e)
            }), s
        }
    }
    var a, t = function(e, s) {
        function r() {
            return "horizontal" === v.params.direction
        }

        function i(e) {
            return Math.floor(e)
        }

        function n() {
            v.autoplayTimeoutId = setTimeout(function() {
                v.params.loop ? (v.fixLoop(), v._slideNext()) : v.isEnd ? s.autoplayStopOnLast ? v.stopAutoplay() : v._slideTo(0) : v._slideNext()
            }, v.params.autoplay)
        }

        function o(e, t) {
            var s = a(e.target);
            if (!s.is(t))
                if ("string" == typeof t) s = s.parents(t);
                else if (t.nodeType) {
                var r;
                return s.parents().each(function(e, a) {
                    a === t && (r = t)
                }), r ? t : void 0
            }
            return 0 === s.length ? void 0 : s[0]
        }

        function l(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver,
                s = new t(function(e) {
                    e.forEach(function(e) {
                        v.onResize(!0), v.emit("onObserverUpdate", v, e)
                    })
                });
            s.observe(e, {
                attributes: "undefined" == typeof a.attributes ? !0 : a.attributes,
                childList: "undefined" == typeof a.childList ? !0 : a.childList,
                characterData: "undefined" == typeof a.characterData ? !0 : a.characterData
            }), v.observers.push(s)
        }

        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!v.params.allowSwipeToNext && (r() && 39 === a || !r() && 40 === a)) return !1;
            if (!v.params.allowSwipeToPrev && (r() && 37 === a || !r() && 38 === a)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (v.container.parents(".swiper-slide").length > 0 && 0 === v.container.parents(".swiper-slide-active").length) return;
                    var s = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        i = window.innerWidth,
                        n = window.innerHeight,
                        o = v.container.offset();
                    v.rtl && (o.left = o.left - v.container[0].scrollLeft);
                    for (var l = [
                            [o.left, o.top],
                            [o.left + v.width, o.top],
                            [o.left, o.top + v.height],
                            [o.left + v.width, o.top + v.height]
                        ], p = 0; p < l.length; p++) {
                        var d = l[p];
                        d[0] >= s.left && d[0] <= s.left + i && d[1] >= s.top && d[1] <= s.top + n && (t = !0)
                    }
                    if (!t) return
                }
                r() ? ((37 === a || 39 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !v.rtl || 37 === a && v.rtl) && v.slideNext(), (37 === a && !v.rtl || 39 === a && v.rtl) && v.slidePrev()) : ((38 === a || 40 === a) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && v.slideNext(), 38 === a && v.slidePrev())
            }
        }

        function d(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = v.mousewheel.event,
                t = 0;
            if (e.detail) t = -e.detail;
            else if ("mousewheel" === a)
                if (v.params.mousewheelForceToAxis)
                    if (r()) {
                        if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY))) return;
                        t = e.wheelDeltaX
                    } else {
                        if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX))) return;
                        t = e.wheelDeltaY
                    }
            else t = e.wheelDelta;
            else if ("DOMMouseScroll" === a) t = -e.detail;
            else if ("wheel" === a)
                if (v.params.mousewheelForceToAxis)
                    if (r()) {
                        if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY))) return;
                        t = -e.deltaX
                    } else {
                        if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX))) return;
                        t = -e.deltaY
                    }
            else t = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
            if (v.params.mousewheelInvert && (t = -t), v.params.freeMode) {
                var s = v.getWrapperTranslate() + t * v.params.mousewheelSensitivity;
                if (s > 0 && (s = 0), s < v.maxTranslate() && (s = v.maxTranslate()), v.setWrapperTransition(0), v.setWrapperTranslate(s), v.updateProgress(), v.updateActiveIndex(), v.params.freeModeSticky && (clearTimeout(v.mousewheel.timeout), v.mousewheel.timeout = setTimeout(function() {
                        v.slideReset()
                    }, 300)), 0 === s || s === v.maxTranslate()) return
            } else {
                if ((new window.Date).getTime() - v.mousewheel.lastScrollTime > 60)
                    if (0 > t)
                        if (v.isEnd && !v.params.loop || v.animating) {
                            if (v.params.mousewheelReleaseOnEdges) return !0
                        } else v.slideNext();
                else if (v.isBeginning && !v.params.loop || v.animating) {
                    if (v.params.mousewheelReleaseOnEdges) return !0
                } else v.slidePrev();
                v.mousewheel.lastScrollTime = (new window.Date).getTime()
            }
            return v.params.autoplay && v.stopAutoplay(), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
        }

        function u(e, t) {
            e = a(e);
            var s, i, n;
            s = e.attr("data-swiper-parallax") || "0", i = e.attr("data-swiper-parallax-x"), n = e.attr("data-swiper-parallax-y"), i || n ? (i = i || "0", n = n || "0") : r() ? (i = s, n = "0") : (n = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t + "%" : i * t + "px", n = n.indexOf("%") >= 0 ? parseInt(n, 10) * t + "%" : n * t + "px", e.transform("translate3d(" + i + ", " + n + ",0px)")
        }

        function c(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }
        if (!(this instanceof t)) return new t(e, s);
        var m = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeSticky: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                scrollbar: null,
                scrollbarHide: !0,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                hashnav: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationHiddenClass: "swiper-pagination-hidden",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            f = s && s.virtualTranslate;
        s = s || {};
        for (var h in m)
            if ("undefined" == typeof s[h]) s[h] = m[h];
            else if ("object" == typeof s[h])
            for (var g in m[h]) "undefined" == typeof s[h][g] && (s[h][g] = m[h][g]);
        var v = this;
        if (v.version = "3.1.0", v.params = s, v.classNames = [], "undefined" != typeof a && "undefined" != typeof Dom7 && (a = Dom7), ("undefined" != typeof a || (a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (v.$ = a, v.container = a(e), 0 !== v.container.length)) {
            if (v.container.length > 1) return void v.container.each(function() {
                new t(this, s)
            });
            v.container[0].swiper = v, v.container.data("swiper", v), v.classNames.push("swiper-container-" + v.params.direction), v.params.freeMode && v.classNames.push("swiper-container-free-mode"), v.support.flexbox || (v.classNames.push("swiper-container-no-flexbox"), v.params.slidesPerColumn = 1), (v.params.parallax || v.params.watchSlidesVisibility) && (v.params.watchSlidesProgress = !0), ["cube", "coverflow"].indexOf(v.params.effect) >= 0 && (v.support.transforms3d ? (v.params.watchSlidesProgress = !0, v.classNames.push("swiper-container-3d")) : v.params.effect = "slide"), "slide" !== v.params.effect && v.classNames.push("swiper-container-" + v.params.effect), "cube" === v.params.effect && (v.params.resistanceRatio = 0, v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.centeredSlides = !1, v.params.spaceBetween = 0, v.params.virtualTranslate = !0, v.params.setWrapperSize = !1), "fade" === v.params.effect && (v.params.slidesPerView = 1, v.params.slidesPerColumn = 1, v.params.slidesPerGroup = 1, v.params.watchSlidesProgress = !0, v.params.spaceBetween = 0, "undefined" == typeof f && (v.params.virtualTranslate = !0)), v.params.grabCursor && v.support.touch && (v.params.grabCursor = !1), v.wrapper = v.container.children("." + v.params.wrapperClass), v.params.pagination && (v.paginationContainer = a(v.params.pagination), v.params.paginationClickable && v.paginationContainer.addClass("swiper-pagination-clickable")), v.rtl = r() && ("rtl" === v.container[0].dir.toLowerCase() || "rtl" === v.container.css("direction")), v.rtl && v.classNames.push("swiper-container-rtl"), v.rtl && (v.wrongRTL = "-webkit-box" === v.wrapper.css("display")), v.params.slidesPerColumn > 1 && v.classNames.push("swiper-container-multirow"), v.device.android && v.classNames.push("swiper-container-android"), v.container.addClass(v.classNames.join(" ")), v.translate = 0, v.progress = 0, v.velocity = 0, v.lockSwipeToNext = function() {
                v.params.allowSwipeToNext = !1
            }, v.lockSwipeToPrev = function() {
                v.params.allowSwipeToPrev = !1
            }, v.lockSwipes = function() {
                v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !1
            }, v.unlockSwipeToNext = function() {
                v.params.allowSwipeToNext = !0
            }, v.unlockSwipeToPrev = function() {
                v.params.allowSwipeToPrev = !0
            }, v.unlockSwipes = function() {
                v.params.allowSwipeToNext = v.params.allowSwipeToPrev = !0
            }, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab"), v.imagesToLoad = [], v.imagesLoaded = 0, v.loadImage = function(e, a, t, s) {
                function r() {
                    s && s()
                }
                var i;
                e.complete && t ? r() : a ? (i = new window.Image, i.onload = r, i.onerror = r, i.src = a) : r()
            }, v.preloadImages = function() {
                function e() {
                    "undefined" != typeof v && null !== v && (void 0 !== v.imagesLoaded && v.imagesLoaded++, v.imagesLoaded === v.imagesToLoad.length && (v.params.updateOnImagesReady && v.update(), v.emit("onImagesReady", v)))
                }
                v.imagesToLoad = v.container.find("img");
                for (var a = 0; a < v.imagesToLoad.length; a++) v.loadImage(v.imagesToLoad[a], v.imagesToLoad[a].currentSrc || v.imagesToLoad[a].getAttribute("src"), !0, e)
            }, v.autoplayTimeoutId = void 0, v.autoplaying = !1, v.autoplayPaused = !1, v.startAutoplay = function() {
                return "undefined" != typeof v.autoplayTimeoutId ? !1 : v.params.autoplay ? v.autoplaying ? !1 : (v.autoplaying = !0, v.emit("onAutoplayStart", v), void n()) : !1
            }, v.stopAutoplay = function(e) {
                v.autoplayTimeoutId && (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplaying = !1, v.autoplayTimeoutId = void 0, v.emit("onAutoplayStop", v))
            }, v.pauseAutoplay = function(e) {
                v.autoplayPaused || (v.autoplayTimeoutId && clearTimeout(v.autoplayTimeoutId), v.autoplayPaused = !0, 0 === e ? (v.autoplayPaused = !1, n()) : v.wrapper.transitionEnd(function() {
                    v && (v.autoplayPaused = !1, v.autoplaying ? n() : v.stopAutoplay())
                }))
            }, v.minTranslate = function() {
                return -v.snapGrid[0]
            }, v.maxTranslate = function() {
                return -v.snapGrid[v.snapGrid.length - 1]
            }, v.updateContainerSize = function() {
                var e, a;
                e = "undefined" != typeof v.params.width ? v.params.width : v.container[0].clientWidth, a = "undefined" != typeof v.params.height ? v.params.height : v.container[0].clientHeight, 0 === e && r() || 0 === a && !r() || (e = e - parseInt(v.container.css("padding-left"), 10) - parseInt(v.container.css("padding-right"), 10), a = a - parseInt(v.container.css("padding-top"), 10) - parseInt(v.container.css("padding-bottom"), 10), v.width = e, v.height = a, v.size = r() ? v.width : v.height)
            }, v.updateSlidesSize = function() {
                v.slides = v.wrapper.children("." + v.params.slideClass), v.snapGrid = [], v.slidesGrid = [], v.slidesSizesGrid = [];
                var e, a = v.params.spaceBetween,
                    t = -v.params.slidesOffsetBefore,
                    s = 0,
                    n = 0;
                "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * v.size), v.virtualSize = -a, v.rtl ? v.slides.css({
                    marginLeft: "",
                    marginTop: ""
                }) : v.slides.css({
                    marginRight: "",
                    marginBottom: ""
                });
                var o;
                v.params.slidesPerColumn > 1 && (o = Math.floor(v.slides.length / v.params.slidesPerColumn) === v.slides.length / v.params.slidesPerColumn ? v.slides.length : Math.ceil(v.slides.length / v.params.slidesPerColumn) * v.params.slidesPerColumn);
                var l, p = v.params.slidesPerColumn,
                    d = o / p,
                    u = d - (v.params.slidesPerColumn * d - v.slides.length);
                for (e = 0; e < v.slides.length; e++) {
                    l = 0;
                    var c = v.slides.eq(e);
                    if (v.params.slidesPerColumn > 1) {
                        var m, f, h;
                        "column" === v.params.slidesPerColumnFill ? (f = Math.floor(e / p), h = e - f * p, (f > u || f === u && h === p - 1) && ++h >= p && (h = 0, f++), m = f + h * o / p, c.css({
                            "-webkit-box-ordinal-group": m,
                            "-moz-box-ordinal-group": m,
                            "-ms-flex-order": m,
                            "-webkit-order": m,
                            order: m
                        })) : (h = Math.floor(e / d), f = e - h * d), c.css({
                            "margin-top": 0 !== h && v.params.spaceBetween && v.params.spaceBetween + "px"
                        }).attr("data-swiper-column", f).attr("data-swiper-row", h)
                    }
                    "none" !== c.css("display") && ("auto" === v.params.slidesPerView ? (l = r() ? c.outerWidth(!0) : c.outerHeight(!0), v.params.roundLengths && (l = i(l))) : (l = (v.size - (v.params.slidesPerView - 1) * a) / v.params.slidesPerView, v.params.roundLengths && (l = i(l)), r() ? v.slides[e].style.width = l + "px" : v.slides[e].style.height = l + "px"), v.slides[e].swiperSlideSize = l, v.slidesSizesGrid.push(l), v.params.centeredSlides ? (t = t + l / 2 + s / 2 + a, 0 === e && (t = t - v.size / 2 - a), Math.abs(t) < .001 && (t = 0), n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t)) : (n % v.params.slidesPerGroup === 0 && v.snapGrid.push(t), v.slidesGrid.push(t), t = t + l + a), v.virtualSize += l + a, s = l, n++)
                }
                v.virtualSize = Math.max(v.virtualSize, v.size) + v.params.slidesOffsetAfter;
                var g;
                if (v.rtl && v.wrongRTL && ("slide" === v.params.effect || "coverflow" === v.params.effect) && v.wrapper.css({
                        width: v.virtualSize + v.params.spaceBetween + "px"
                    }), (!v.support.flexbox || v.params.setWrapperSize) && (r() ? v.wrapper.css({
                        width: v.virtualSize + v.params.spaceBetween + "px"
                    }) : v.wrapper.css({
                        height: v.virtualSize + v.params.spaceBetween + "px"
                    })), v.params.slidesPerColumn > 1 && (v.virtualSize = (l + v.params.spaceBetween) * o, v.virtualSize = Math.ceil(v.virtualSize / v.params.slidesPerColumn) - v.params.spaceBetween, v.wrapper.css({
                        width: v.virtualSize + v.params.spaceBetween + "px"
                    }), v.params.centeredSlides)) {
                    for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] < v.virtualSize + v.snapGrid[0] && g.push(v.snapGrid[e]);
                    v.snapGrid = g
                }
                if (!v.params.centeredSlides) {
                    for (g = [], e = 0; e < v.snapGrid.length; e++) v.snapGrid[e] <= v.virtualSize - v.size && g.push(v.snapGrid[e]);
                    v.snapGrid = g, Math.floor(v.virtualSize - v.size) > Math.floor(v.snapGrid[v.snapGrid.length - 1]) && v.snapGrid.push(v.virtualSize - v.size)
                }
                0 === v.snapGrid.length && (v.snapGrid = [0]), 0 !== v.params.spaceBetween && (r() ? v.rtl ? v.slides.css({
                    marginLeft: a + "px"
                }) : v.slides.css({
                    marginRight: a + "px"
                }) : v.slides.css({
                    marginBottom: a + "px"
                })), v.params.watchSlidesProgress && v.updateSlidesOffset()
            }, v.updateSlidesOffset = function() {
                for (var e = 0; e < v.slides.length; e++) v.slides[e].swiperSlideOffset = r() ? v.slides[e].offsetLeft : v.slides[e].offsetTop
            }, v.updateSlidesProgress = function(e) {
                if ("undefined" == typeof e && (e = v.translate || 0), 0 !== v.slides.length) {
                    "undefined" == typeof v.slides[0].swiperSlideOffset && v.updateSlidesOffset();
                    var a = -e;
                    v.rtl && (a = e);
                    v.container[0].getBoundingClientRect(), r() ? "left" : "top", r() ? "right" : "bottom";
                    v.slides.removeClass(v.params.slideVisibleClass);
                    for (var t = 0; t < v.slides.length; t++) {
                        var s = v.slides[t],
                            i = (a - s.swiperSlideOffset) / (s.swiperSlideSize + v.params.spaceBetween);
                        if (v.params.watchSlidesVisibility) {
                            var n = -(a - s.swiperSlideOffset),
                                o = n + v.slidesSizesGrid[t],
                                l = n >= 0 && n < v.size || o > 0 && o <= v.size || 0 >= n && o >= v.size;
                            l && v.slides.eq(t).addClass(v.params.slideVisibleClass)
                        }
                        s.progress = v.rtl ? -i : i
                    }
                }
            }, v.updateProgress = function(e) {
                "undefined" == typeof e && (e = v.translate || 0);
                var a = v.maxTranslate() - v.minTranslate();
                0 === a ? (v.progress = 0, v.isBeginning = v.isEnd = !0) : (v.progress = (e - v.minTranslate()) / a, v.isBeginning = v.progress <= 0, v.isEnd = v.progress >= 1), v.isBeginning && v.emit("onReachBeginning", v), v.isEnd && v.emit("onReachEnd", v), v.params.watchSlidesProgress && v.updateSlidesProgress(e), v.emit("onProgress", v, v.progress)
            }, v.updateActiveIndex = function() {
                var e, a, t, s = v.rtl ? v.translate : -v.translate;
                for (a = 0; a < v.slidesGrid.length; a++) "undefined" != typeof v.slidesGrid[a + 1] ? s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] - (v.slidesGrid[a + 1] - v.slidesGrid[a]) / 2 ? e = a : s >= v.slidesGrid[a] && s < v.slidesGrid[a + 1] && (e = a + 1) : s >= v.slidesGrid[a] && (e = a);
                (0 > e || "undefined" == typeof e) && (e = 0), t = Math.floor(e / v.params.slidesPerGroup), t >= v.snapGrid.length && (t = v.snapGrid.length - 1), e !== v.activeIndex && (v.snapIndex = t, v.previousIndex = v.activeIndex, v.activeIndex = e, v.updateClasses())
            }, v.updateClasses = function() {
                v.slides.removeClass(v.params.slideActiveClass + " " + v.params.slideNextClass + " " + v.params.slidePrevClass);
                var e = v.slides.eq(v.activeIndex);
                if (e.addClass(v.params.slideActiveClass), e.next("." + v.params.slideClass).addClass(v.params.slideNextClass), e.prev("." + v.params.slideClass).addClass(v.params.slidePrevClass), v.bullets && v.bullets.length > 0) {
                    v.bullets.removeClass(v.params.bulletActiveClass);
                    var t;
                    v.params.loop ? (t = Math.ceil(v.activeIndex - v.loopedSlides) / v.params.slidesPerGroup, t > v.slides.length - 1 - 2 * v.loopedSlides && (t -= v.slides.length - 2 * v.loopedSlides), t > v.bullets.length - 1 && (t -= v.bullets.length)) : t = "undefined" != typeof v.snapIndex ? v.snapIndex : v.activeIndex || 0, v.paginationContainer.length > 1 ? v.bullets.each(function() {
                        a(this).index() === t && a(this).addClass(v.params.bulletActiveClass)
                    }) : v.bullets.eq(t).addClass(v.params.bulletActiveClass)
                }
                v.params.loop || (v.params.prevButton && (v.isBeginning ? (a(v.params.prevButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.prevButton))) : (a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.prevButton)))), v.params.nextButton && (v.isEnd ? (a(v.params.nextButton).addClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.disable(a(v.params.nextButton))) : (a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.a11y && v.a11y && v.a11y.enable(a(v.params.nextButton)))))
            }, v.updatePagination = function() {
                if (v.params.pagination && v.paginationContainer && v.paginationContainer.length > 0) {
                    for (var e = "", a = v.params.loop ? Math.ceil((v.slides.length - 2 * v.loopedSlides) / v.params.slidesPerGroup) : v.snapGrid.length, t = 0; a > t; t++) e += v.params.paginationBulletRender ? v.params.paginationBulletRender(t, v.params.bulletClass) : "<" + v.params.paginationElement + ' class="' + v.params.bulletClass + '"></' + v.params.paginationElement + ">";
                    v.paginationContainer.html(e), v.bullets = v.paginationContainer.find("." + v.params.bulletClass), v.params.paginationClickable && v.params.a11y && v.a11y && v.a11y.initPagination()
                }
            }, v.update = function(e) {
                function a() {
                    s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate()), v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
                }
                if (v.updateContainerSize(), v.updateSlidesSize(), v.updateProgress(), v.updatePagination(), v.updateClasses(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), e) {
                    var t, s;
                    v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode ? a() : (t = ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0), t || a())
                }
            }, v.onResize = function(e) {
                var a = v.params.allowSwipeToPrev,
                    t = v.params.allowSwipeToNext;
                if (v.params.allowSwipeToPrev = v.params.allowSwipeToNext = !0, v.updateContainerSize(), v.updateSlidesSize(), ("auto" === v.params.slidesPerView || v.params.freeMode || e) && v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), v.controller && v.controller.spline && (v.controller.spline = void 0), v.params.freeMode) {
                    var s = Math.min(Math.max(v.translate, v.maxTranslate()), v.minTranslate());
                    v.setWrapperTranslate(s), v.updateActiveIndex(), v.updateClasses()
                } else v.updateClasses(), ("auto" === v.params.slidesPerView || v.params.slidesPerView > 1) && v.isEnd && !v.params.centeredSlides ? v.slideTo(v.slides.length - 1, 0, !1, !0) : v.slideTo(v.activeIndex, 0, !1, !0);
                v.params.allowSwipeToPrev = a, v.params.allowSwipeToNext = t
            };
            var w = ["mousedown", "mousemove", "mouseup"];
            window.navigator.pointerEnabled ? w = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (w = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), v.touchEvents = {
                start: v.support.touch || !v.params.simulateTouch ? "touchstart" : w[0],
                move: v.support.touch || !v.params.simulateTouch ? "touchmove" : w[1],
                end: v.support.touch || !v.params.simulateTouch ? "touchend" : w[2]
            }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === v.params.touchEventsTarget ? v.container : v.wrapper).addClass("swiper-wp8-" + v.params.direction), v.initEvents = function(e) {
                var t = e ? "off" : "on",
                    r = e ? "removeEventListener" : "addEventListener",
                    i = "container" === v.params.touchEventsTarget ? v.container[0] : v.wrapper[0],
                    n = v.support.touch ? i : document,
                    o = v.params.nested ? !0 : !1;
                v.browser.ie ? (i[r](v.touchEvents.start, v.onTouchStart, !1), n[r](v.touchEvents.move, v.onTouchMove, o), n[r](v.touchEvents.end, v.onTouchEnd, !1)) : (v.support.touch && (i[r](v.touchEvents.start, v.onTouchStart, !1), i[r](v.touchEvents.move, v.onTouchMove, o), i[r](v.touchEvents.end, v.onTouchEnd, !1)), !s.simulateTouch || v.device.ios || v.device.android || (i[r]("mousedown", v.onTouchStart, !1), document[r]("mousemove", v.onTouchMove, o), document[r]("mouseup", v.onTouchEnd, !1))), window[r]("resize", v.onResize), v.params.nextButton && (a(v.params.nextButton)[t]("click", v.onClickNext), v.params.a11y && v.a11y && a(v.params.nextButton)[t]("keydown", v.a11y.onEnterKey)), v.params.prevButton && (a(v.params.prevButton)[t]("click", v.onClickPrev), v.params.a11y && v.a11y && a(v.params.prevButton)[t]("keydown", v.a11y.onEnterKey)), v.params.pagination && v.params.paginationClickable && (a(v.paginationContainer)[t]("click", "." + v.params.bulletClass, v.onClickIndex), v.params.a11y && v.a11y && a(v.paginationContainer)[t]("keydown", "." + v.params.bulletClass, v.a11y.onEnterKey)), (v.params.preventClicks || v.params.preventClicksPropagation) && i[r]("click", v.preventClicks, !0)
            }, v.attachEvents = function(e) {
                v.initEvents()
            }, v.detachEvents = function() {
                v.initEvents(!0)
            }, v.allowClick = !0, v.preventClicks = function(e) {
                v.allowClick || (v.params.preventClicks && e.preventDefault(), v.params.preventClicksPropagation && v.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }, v.onClickNext = function(e) {
                e.preventDefault(), (!v.isEnd || v.params.loop) && v.slideNext()
            }, v.onClickPrev = function(e) {
                e.preventDefault(), (!v.isBeginning || v.params.loop) && v.slidePrev()
            }, v.onClickIndex = function(e) {
                e.preventDefault();
                var t = a(this).index() * v.params.slidesPerGroup;
                v.params.loop && (t += v.loopedSlides), v.slideTo(t)
            }, v.updateClickedSlide = function(e) {
                var t = o(e, "." + v.params.slideClass),
                    s = !1;
                if (t)
                    for (var r = 0; r < v.slides.length; r++) v.slides[r] === t && (s = !0);
                if (!t || !s) return v.clickedSlide = void 0, void(v.clickedIndex = void 0);
                if (v.clickedSlide = t, v.clickedIndex = a(t).index(), v.params.slideToClickedSlide && void 0 !== v.clickedIndex && v.clickedIndex !== v.activeIndex) {
                    var i, n = v.clickedIndex;
                    if (v.params.loop)
                        if (i = a(v.clickedSlide).attr("data-swiper-slide-index"), n > v.slides.length - v.params.slidesPerView) v.fixLoop(), n = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]').eq(0).index(), setTimeout(function() {
                            v.slideTo(n)
                        }, 0);
                        else if (n < v.params.slidesPerView - 1) {
                        v.fixLoop();
                        var l = v.wrapper.children("." + v.params.slideClass + '[data-swiper-slide-index="' + i + '"]');
                        n = l.eq(l.length - 1).index(), setTimeout(function() {
                            v.slideTo(n)
                        }, 0)
                    } else v.slideTo(n);
                    else v.slideTo(n)
                }
            };
            var y, b, x, T, S, C, M, P, z, I = "input, select, textarea, button",
                E = Date.now(),
                k = [];
            v.animating = !1, v.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var D, G;
            if (v.onTouchStart = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), D = "touchstart" === e.type, D || !("which" in e) || 3 !== e.which) {
                        if (v.params.noSwiping && o(e, "." + v.params.noSwipingClass)) return void(v.allowClick = !0);
                        if (!v.params.swipeHandler || o(e, v.params.swipeHandler)) {
                            var t = v.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                s = v.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                            if (!(v.device.ios && v.params.iOSEdgeSwipeDetection && t <= v.params.iOSEdgeSwipeThreshold)) {
                                if (y = !0, b = !1, T = void 0, G = void 0, v.touches.startX = t, v.touches.startY = s, x = Date.now(), v.allowClick = !0, v.updateContainerSize(), v.swipeDirection = void 0, v.params.threshold > 0 && (M = !1), "touchstart" !== e.type) {
                                    var r = !0;
                                    a(e.target).is(I) && (r = !1), document.activeElement && a(document.activeElement).is(I) && document.activeElement.blur(), r && e.preventDefault()
                                }
                                v.emit("onTouchStart", v, e)
                            }
                        }
                    }
                }, v.onTouchMove = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), !(D && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                        if (v.params.onlyExternal) return v.allowClick = !1, void(y && (v.touches.startX = v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.startY = v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, x = Date.now()));
                        if (D && document.activeElement && e.target === document.activeElement && a(e.target).is(I)) return b = !0, void(v.allowClick = !1);
                        if (v.emit("onTouchMove", v, e), !(e.targetTouches && e.targetTouches.length > 1)) {
                            if (v.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, v.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, "undefined" == typeof T) {
                                var t = 180 * Math.atan2(Math.abs(v.touches.currentY - v.touches.startY), Math.abs(v.touches.currentX - v.touches.startX)) / Math.PI;
                                T = r() ? t > v.params.touchAngle : 90 - t > v.params.touchAngle
                            }
                            if (T && v.emit("onTouchMoveOpposite", v, e), "undefined" == typeof G && v.browser.ieTouch && (v.touches.currentX !== v.touches.startX || v.touches.currentY !== v.touches.startY) && (G = !0), y) {
                                if (T) return void(y = !1);
                                if (G || !v.browser.ieTouch) {
                                    v.allowClick = !1, v.emit("onSliderMove", v, e), e.preventDefault(), v.params.touchMoveStopPropagation && !v.params.nested && e.stopPropagation(), b || (s.loop && v.fixLoop(), C = v.getWrapperTranslate(), v.setWrapperTransition(0), v.animating && v.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), v.params.autoplay && v.autoplaying && (v.params.autoplayDisableOnInteraction ? v.stopAutoplay() : v.pauseAutoplay()), z = !1, v.params.grabCursor && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grabbing", v.container[0].style.cursor = "-moz-grabbin", v.container[0].style.cursor = "grabbing")), b = !0;
                                    var i = v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY;
                                    i *= v.params.touchRatio, v.rtl && (i = -i), v.swipeDirection = i > 0 ? "prev" : "next", S = i + C;
                                    var n = !0;
                                    if (i > 0 && S > v.minTranslate() ? (n = !1, v.params.resistance && (S = v.minTranslate() - 1 + Math.pow(-v.minTranslate() + C + i, v.params.resistanceRatio))) : 0 > i && S < v.maxTranslate() && (n = !1, v.params.resistance && (S = v.maxTranslate() + 1 - Math.pow(v.maxTranslate() - C - i, v.params.resistanceRatio))), n && (e.preventedByNestedSwiper = !0), !v.params.allowSwipeToNext && "next" === v.swipeDirection && C > S && (S = C), !v.params.allowSwipeToPrev && "prev" === v.swipeDirection && S > C && (S = C), v.params.followFinger) {
                                        if (v.params.threshold > 0) {
                                            if (!(Math.abs(i) > v.params.threshold || M)) return void(S = C);
                                            if (!M) return M = !0, v.touches.startX = v.touches.currentX, v.touches.startY = v.touches.currentY, S = C, void(v.touches.diff = r() ? v.touches.currentX - v.touches.startX : v.touches.currentY - v.touches.startY)
                                        }(v.params.freeMode || v.params.watchSlidesProgress) && v.updateActiveIndex(), v.params.freeMode && (0 === k.length && k.push({
                                            position: v.touches[r() ? "startX" : "startY"],
                                            time: x
                                        }), k.push({
                                            position: v.touches[r() ? "currentX" : "currentY"],
                                            time: (new window.Date).getTime()
                                        })), v.updateProgress(S), v.setWrapperTranslate(S)
                                    }
                                }
                            }
                        }
                    }
                }, v.onTouchEnd = function(e) {
                    if (e.originalEvent && (e = e.originalEvent), v.emit("onTouchEnd", v, e), y) {
                        v.params.grabCursor && b && y && (v.container[0].style.cursor = "move", v.container[0].style.cursor = "-webkit-grab", v.container[0].style.cursor = "-moz-grab", v.container[0].style.cursor = "grab");
                        var t = Date.now(),
                            s = t - x;
                        if (v.allowClick && (v.updateClickedSlide(e), v.emit("onTap", v, e), 300 > s && t - E > 300 && (P && clearTimeout(P), P = setTimeout(function() {
                                v && (v.params.paginationHide && v.paginationContainer.length > 0 && !a(e.target).hasClass(v.params.bulletClass) && v.paginationContainer.toggleClass(v.params.paginationHiddenClass), v.emit("onClick", v, e))
                            }, 300)), 300 > s && 300 > t - E && (P && clearTimeout(P), v.emit("onDoubleTap", v, e))), E = Date.now(), setTimeout(function() {
                                v && (v.allowClick = !0)
                            }, 0), !y || !b || !v.swipeDirection || 0 === v.touches.diff || S === C) return void(y = b = !1);
                        y = b = !1;
                        var r;
                        if (r = v.params.followFinger ? v.rtl ? v.translate : -v.translate : -S, v.params.freeMode) {
                            if (r < -v.minTranslate()) return void v.slideTo(v.activeIndex);
                            if (r > -v.maxTranslate()) return void(v.slides.length < v.snapGrid.length ? v.slideTo(v.snapGrid.length - 1) : v.slideTo(v.slides.length - 1));
                            if (v.params.freeModeMomentum) {
                                if (k.length > 1) {
                                    var i = k.pop(),
                                        n = k.pop(),
                                        o = i.position - n.position,
                                        l = i.time - n.time;
                                    v.velocity = o / l, v.velocity = v.velocity / 2, Math.abs(v.velocity) < .02 && (v.velocity = 0), (l > 150 || (new window.Date).getTime() - i.time > 300) && (v.velocity = 0)
                                } else v.velocity = 0;
                                k.length = 0;
                                var p = 1e3 * v.params.freeModeMomentumRatio,
                                    d = v.velocity * p,
                                    u = v.translate + d;
                                v.rtl && (u = -u);
                                var c, m = !1,
                                    f = 20 * Math.abs(v.velocity) * v.params.freeModeMomentumBounceRatio;
                                if (u < v.maxTranslate()) v.params.freeModeMomentumBounce ? (u + v.maxTranslate() < -f && (u = v.maxTranslate() - f), c = v.maxTranslate(), m = !0, z = !0) : u = v.maxTranslate();
                                else if (u > v.minTranslate()) v.params.freeModeMomentumBounce ? (u - v.minTranslate() > f && (u = v.minTranslate() + f), c = v.minTranslate(), m = !0, z = !0) : u = v.minTranslate();
                                else if (v.params.freeModeSticky) {
                                    var h, g = 0;
                                    for (g = 0; g < v.snapGrid.length; g += 1)
                                        if (v.snapGrid[g] > -u) {
                                            h = g;
                                            break
                                        }
                                    u = Math.abs(v.snapGrid[h] - u) < Math.abs(v.snapGrid[h - 1] - u) || "next" === v.swipeDirection ? v.snapGrid[h] : v.snapGrid[h - 1], v.rtl || (u = -u)
                                }
                                if (0 !== v.velocity) p = v.rtl ? Math.abs((-u - v.translate) / v.velocity) : Math.abs((u - v.translate) / v.velocity);
                                else if (v.params.freeModeSticky) return void v.slideReset();
                                v.params.freeModeMomentumBounce && m ? (v.updateProgress(c), v.setWrapperTransition(p), v.setWrapperTranslate(u), v.onTransitionStart(), v.animating = !0, v.wrapper.transitionEnd(function() {
                                    v && z && (v.emit("onMomentumBounce", v), v.setWrapperTransition(v.params.speed), v.setWrapperTranslate(c), v.wrapper.transitionEnd(function() {
                                        v && v.onTransitionEnd()
                                    }))
                                })) : v.velocity ? (v.updateProgress(u), v.setWrapperTransition(p), v.setWrapperTranslate(u), v.onTransitionStart(), v.animating || (v.animating = !0, v.wrapper.transitionEnd(function() {
                                    v && v.onTransitionEnd()
                                }))) : v.updateProgress(u), v.updateActiveIndex()
                            }
                            return void((!v.params.freeModeMomentum || s >= v.params.longSwipesMs) && (v.updateProgress(), v.updateActiveIndex()))
                        }
                        var w, T = 0,
                            M = v.slidesSizesGrid[0];
                        for (w = 0; w < v.slidesGrid.length; w += v.params.slidesPerGroup) "undefined" != typeof v.slidesGrid[w + v.params.slidesPerGroup] ? r >= v.slidesGrid[w] && r < v.slidesGrid[w + v.params.slidesPerGroup] && (T = w, M = v.slidesGrid[w + v.params.slidesPerGroup] - v.slidesGrid[w]) : r >= v.slidesGrid[w] && (T = w, M = v.slidesGrid[v.slidesGrid.length - 1] - v.slidesGrid[v.slidesGrid.length - 2]);
                        var I = (r - v.slidesGrid[T]) / M;
                        if (s > v.params.longSwipesMs) {
                            if (!v.params.longSwipes) return void v.slideTo(v.activeIndex);
                            "next" === v.swipeDirection && (I >= v.params.longSwipesRatio ? v.slideTo(T + v.params.slidesPerGroup) : v.slideTo(T)), "prev" === v.swipeDirection && (I > 1 - v.params.longSwipesRatio ? v.slideTo(T + v.params.slidesPerGroup) : v.slideTo(T))
                        } else {
                            if (!v.params.shortSwipes) return void v.slideTo(v.activeIndex);
                            "next" === v.swipeDirection && v.slideTo(T + v.params.slidesPerGroup), "prev" === v.swipeDirection && v.slideTo(T)
                        }
                    }
                }, v._slideTo = function(e, a) {
                    return v.slideTo(e, a, !0, !0)
                }, v.slideTo = function(e, a, t, s) {
                    "undefined" == typeof t && (t = !0), "undefined" == typeof e && (e = 0), 0 > e && (e = 0), v.snapIndex = Math.floor(e / v.params.slidesPerGroup), v.snapIndex >= v.snapGrid.length && (v.snapIndex = v.snapGrid.length - 1);
                    var i = -v.snapGrid[v.snapIndex];
                    v.params.autoplay && v.autoplaying && (s || !v.params.autoplayDisableOnInteraction ? v.pauseAutoplay(a) : v.stopAutoplay()), v.updateProgress(i);
                    for (var n = 0; n < v.slidesGrid.length; n++) - Math.floor(100 * i) >= Math.floor(100 * v.slidesGrid[n]) && (e = n);
                    if (!v.params.allowSwipeToNext && i < v.translate && i < v.minTranslate()) return !1;
                    if (!v.params.allowSwipeToPrev && i > v.translate && i > v.maxTranslate() && (v.activeIndex || 0) !== e) return !1;
                    if ("undefined" == typeof a && (a = v.params.speed), v.previousIndex = v.activeIndex || 0, v.activeIndex = e, i === v.translate) return v.updateClasses(), !1;
                    v.updateClasses(), v.onTransitionStart(t);
                    r() ? i : 0, r() ? 0 : i;
                    return 0 === a ? (v.setWrapperTransition(0), v.setWrapperTranslate(i), v.onTransitionEnd(t)) : (v.setWrapperTransition(a), v.setWrapperTranslate(i), v.animating || (v.animating = !0,
                        v.wrapper.transitionEnd(function() {
                            v && v.onTransitionEnd(t)
                        }))), !0
                }, v.onTransitionStart = function(e) {
                    "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionStart(), e && (v.emit("onTransitionStart", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeStart", v))
                }, v.onTransitionEnd = function(e) {
                    v.animating = !1, v.setWrapperTransition(0), "undefined" == typeof e && (e = !0), v.lazy && v.lazy.onTransitionEnd(), e && (v.emit("onTransitionEnd", v), v.activeIndex !== v.previousIndex && v.emit("onSlideChangeEnd", v)), v.params.hashnav && v.hashnav && v.hashnav.setHash()
                }, v.slideNext = function(e, a, t) {
                    if (v.params.loop) {
                        if (v.animating) return !1;
                        v.fixLoop();
                        v.container[0].clientLeft;
                        return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                    }
                    return v.slideTo(v.activeIndex + v.params.slidesPerGroup, a, e, t)
                }, v._slideNext = function(e) {
                    return v.slideNext(!0, e, !0)
                }, v.slidePrev = function(e, a, t) {
                    if (v.params.loop) {
                        if (v.animating) return !1;
                        v.fixLoop();
                        v.container[0].clientLeft;
                        return v.slideTo(v.activeIndex - 1, a, e, t)
                    }
                    return v.slideTo(v.activeIndex - 1, a, e, t)
                }, v._slidePrev = function(e) {
                    return v.slidePrev(!0, e, !0)
                }, v.slideReset = function(e, a, t) {
                    return v.slideTo(v.activeIndex, a, e)
                }, v.setWrapperTransition = function(e, a) {
                    v.wrapper.transition(e), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTransition(e), v.params.parallax && v.parallax && v.parallax.setTransition(e), v.params.scrollbar && v.scrollbar && v.scrollbar.setTransition(e), v.params.control && v.controller && v.controller.setTransition(e, a), v.emit("onSetTransition", v, e)
                }, v.setWrapperTranslate = function(e, a, t) {
                    var s = 0,
                        i = 0,
                        n = 0;
                    r() ? s = v.rtl ? -e : e : i = e, v.params.virtualTranslate || (v.support.transforms3d ? v.wrapper.transform("translate3d(" + s + "px, " + i + "px, " + n + "px)") : v.wrapper.transform("translate(" + s + "px, " + i + "px)")), v.translate = r() ? s : i, a && v.updateActiveIndex(), "slide" !== v.params.effect && v.effects[v.params.effect] && v.effects[v.params.effect].setTranslate(v.translate), v.params.parallax && v.parallax && v.parallax.setTranslate(v.translate), v.params.scrollbar && v.scrollbar && v.scrollbar.setTranslate(v.translate), v.params.control && v.controller && v.controller.setTranslate(v.translate, t), v.emit("onSetTranslate", v, v.translate)
                }, v.getTranslate = function(e, a) {
                    var t, s, r, i;
                    return "undefined" == typeof a && (a = "x"), v.params.virtualTranslate ? v.rtl ? -v.translate : v.translate : (r = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? i = new window.WebKitCSSMatrix("none" === r.webkitTransform ? "" : r.webkitTransform) : (i = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = i.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? i.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? i.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), v.rtl && s && (s = -s), s || 0)
                }, v.getWrapperTranslate = function(e) {
                    return "undefined" == typeof e && (e = r() ? "x" : "y"), v.getTranslate(v.wrapper[0], e)
                }, v.observers = [], v.initObservers = function() {
                    if (v.params.observeParents)
                        for (var e = v.container.parents(), a = 0; a < e.length; a++) l(e[a]);
                    l(v.container[0], {
                        childList: !1
                    }), l(v.wrapper[0], {
                        attributes: !1
                    })
                }, v.disconnectObservers = function() {
                    for (var e = 0; e < v.observers.length; e++) v.observers[e].disconnect();
                    v.observers = []
                }, v.createLoop = function() {
                    v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove();
                    var e = v.wrapper.children("." + v.params.slideClass);
                    "auto" !== v.params.slidesPerView || v.params.loopedSlides || (v.params.loopedSlides = e.length), v.loopedSlides = parseInt(v.params.loopedSlides || v.params.slidesPerView, 10), v.loopedSlides = v.loopedSlides + v.params.loopAdditionalSlides, v.loopedSlides > e.length && (v.loopedSlides = e.length);
                    var t, s = [],
                        r = [];
                    for (e.each(function(t, i) {
                            var n = a(this);
                            t < v.loopedSlides && r.push(i), t < e.length && t >= e.length - v.loopedSlides && s.push(i), n.attr("data-swiper-slide-index", t)
                        }), t = 0; t < r.length; t++) v.wrapper.append(a(r[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass));
                    for (t = s.length - 1; t >= 0; t--) v.wrapper.prepend(a(s[t].cloneNode(!0)).addClass(v.params.slideDuplicateClass))
                }, v.destroyLoop = function() {
                    v.wrapper.children("." + v.params.slideClass + "." + v.params.slideDuplicateClass).remove(), v.slides.removeAttr("data-swiper-slide-index")
                }, v.fixLoop = function() {
                    var e;
                    v.activeIndex < v.loopedSlides ? (e = v.slides.length - 3 * v.loopedSlides + v.activeIndex, e += v.loopedSlides, v.slideTo(e, 0, !1, !0)) : ("auto" === v.params.slidesPerView && v.activeIndex >= 2 * v.loopedSlides || v.activeIndex > v.slides.length - 2 * v.params.slidesPerView) && (e = -v.slides.length + v.activeIndex + v.loopedSlides, e += v.loopedSlides, v.slideTo(e, 0, !1, !0))
                }, v.appendSlide = function(e) {
                    if (v.params.loop && v.destroyLoop(), "object" == typeof e && e.length)
                        for (var a = 0; a < e.length; a++) e[a] && v.wrapper.append(e[a]);
                    else v.wrapper.append(e);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0)
                }, v.prependSlide = function(e) {
                    v.params.loop && v.destroyLoop();
                    var a = v.activeIndex + 1;
                    if ("object" == typeof e && e.length) {
                        for (var t = 0; t < e.length; t++) e[t] && v.wrapper.prepend(e[t]);
                        a = v.activeIndex + e.length
                    } else v.wrapper.prepend(e);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.slideTo(a, 0, !1)
                }, v.removeSlide = function(e) {
                    v.params.loop && (v.destroyLoop(), v.slides = v.wrapper.children("." + v.params.slideClass));
                    var a, t = v.activeIndex;
                    if ("object" == typeof e && e.length) {
                        for (var s = 0; s < e.length; s++) a = e[s], v.slides[a] && v.slides.eq(a).remove(), t > a && t--;
                        t = Math.max(t, 0)
                    } else a = e, v.slides[a] && v.slides.eq(a).remove(), t > a && t--, t = Math.max(t, 0);
                    v.params.loop && v.createLoop(), v.params.observer && v.support.observer || v.update(!0), v.params.loop ? v.slideTo(t + v.loopedSlides, 0, !1) : v.slideTo(t, 0, !1)
                }, v.removeAllSlides = function() {
                    for (var e = [], a = 0; a < v.slides.length; a++) e.push(a);
                    v.removeSlide(e)
                }, v.effects = {
                    fade: {
                        setTranslate: function() {
                            for (var e = 0; e < v.slides.length; e++) {
                                var a = v.slides.eq(e),
                                    t = a[0].swiperSlideOffset,
                                    s = -t;
                                v.params.virtualTranslate || (s -= v.translate);
                                var i = 0;
                                r() || (i = s, s = 0);
                                var n = v.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                                a.css({
                                    opacity: n
                                }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                            }
                        },
                        setTransition: function(e) {
                            if (v.slides.transition(e), v.params.virtualTranslate && 0 !== e) {
                                var a = !1;
                                v.slides.transitionEnd(function() {
                                    if (!a && v) {
                                        a = !0, v.animating = !1;
                                        for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) v.wrapper.trigger(e[t])
                                    }
                                })
                            }
                        }
                    },
                    cube: {
                        setTranslate: function() {
                            var e, t = 0;
                            v.params.cube.shadow && (r() ? (e = v.wrapper.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.wrapper.append(e)), e.css({
                                height: v.width + "px"
                            })) : (e = v.container.find(".swiper-cube-shadow"), 0 === e.length && (e = a('<div class="swiper-cube-shadow"></div>'), v.container.append(e))));
                            for (var s = 0; s < v.slides.length; s++) {
                                var i = v.slides.eq(s),
                                    n = 90 * s,
                                    o = Math.floor(n / 360);
                                v.rtl && (n = -n, o = Math.floor(-n / 360));
                                var l = Math.max(Math.min(i[0].progress, 1), -1),
                                    p = 0,
                                    d = 0,
                                    u = 0;
                                s % 4 === 0 ? (p = 4 * -o * v.size, u = 0) : (s - 1) % 4 === 0 ? (p = 0, u = 4 * -o * v.size) : (s - 2) % 4 === 0 ? (p = v.size + 4 * o * v.size, u = v.size) : (s - 3) % 4 === 0 && (p = -v.size, u = 3 * v.size + 4 * v.size * o), v.rtl && (p = -p), r() || (d = p, p = 0);
                                var c = "rotateX(" + (r() ? 0 : -n) + "deg) rotateY(" + (r() ? n : 0) + "deg) translate3d(" + p + "px, " + d + "px, " + u + "px)";
                                if (1 >= l && l > -1 && (t = 90 * s + 90 * l, v.rtl && (t = 90 * -s - 90 * l)), i.transform(c), v.params.cube.slideShadows) {
                                    var m = r() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                        f = r() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                    0 === m.length && (m = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), i.append(m)), 0 === f.length && (f = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), i.append(f));
                                    i[0].progress;
                                    m.length && (m[0].style.opacity = -i[0].progress), f.length && (f[0].style.opacity = i[0].progress)
                                }
                            }
                            if (v.wrapper.css({
                                    "-webkit-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "-moz-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "-ms-transform-origin": "50% 50% -" + v.size / 2 + "px",
                                    "transform-origin": "50% 50% -" + v.size / 2 + "px"
                                }), v.params.cube.shadow)
                                if (r()) e.transform("translate3d(0px, " + (v.width / 2 + v.params.cube.shadowOffset) + "px, " + -v.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + v.params.cube.shadowScale + ")");
                                else {
                                    var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                        g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                        w = v.params.cube.shadowScale,
                                        y = v.params.cube.shadowScale / g,
                                        b = v.params.cube.shadowOffset;
                                    e.transform("scale3d(" + w + ", 1, " + y + ") translate3d(0px, " + (v.height / 2 + b) + "px, " + -v.height / 2 / y + "px) rotateX(-90deg)")
                                }
                            var x = v.isSafari || v.isUiWebView ? -v.size / 2 : 0;
                            v.wrapper.transform("translate3d(0px,0," + x + "px) rotateX(" + (r() ? 0 : t) + "deg) rotateY(" + (r() ? -t : 0) + "deg)")
                        },
                        setTransition: function(e) {
                            v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), v.params.cube.shadow && !r() && v.container.find(".swiper-cube-shadow").transition(e)
                        }
                    },
                    coverflow: {
                        setTranslate: function() {
                            for (var e = v.translate, t = r() ? -e + v.width / 2 : -e + v.height / 2, s = r() ? v.params.coverflow.rotate : -v.params.coverflow.rotate, i = v.params.coverflow.depth, n = 0, o = v.slides.length; o > n; n++) {
                                var l = v.slides.eq(n),
                                    p = v.slidesSizesGrid[n],
                                    d = l[0].swiperSlideOffset,
                                    u = (t - d - p / 2) / p * v.params.coverflow.modifier,
                                    c = r() ? s * u : 0,
                                    m = r() ? 0 : s * u,
                                    f = -i * Math.abs(u),
                                    h = r() ? 0 : v.params.coverflow.stretch * u,
                                    g = r() ? v.params.coverflow.stretch * u : 0;
                                Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(f) < .001 && (f = 0), Math.abs(c) < .001 && (c = 0), Math.abs(m) < .001 && (m = 0);
                                var w = "translate3d(" + g + "px," + h + "px," + f + "px)  rotateX(" + m + "deg) rotateY(" + c + "deg)";
                                if (l.transform(w), l[0].style.zIndex = -Math.abs(Math.round(u)) + 1, v.params.coverflow.slideShadows) {
                                    var y = r() ? l.find(".swiper-slide-shadow-left") : l.find(".swiper-slide-shadow-top"),
                                        b = r() ? l.find(".swiper-slide-shadow-right") : l.find(".swiper-slide-shadow-bottom");
                                    0 === y.length && (y = a('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'), l.append(y)), 0 === b.length && (b = a('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'), l.append(b)), y.length && (y[0].style.opacity = u > 0 ? u : 0), b.length && (b[0].style.opacity = -u > 0 ? -u : 0)
                                }
                            }
                            if (v.browser.ie) {
                                var x = v.wrapper[0].style;
                                x.perspectiveOrigin = t + "px 50%"
                            }
                        },
                        setTransition: function(e) {
                            v.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                        }
                    }
                }, v.lazy = {
                    initialImageLoaded: !1,
                    loadImageInSlide: function(e, t) {
                        if ("undefined" != typeof e && ("undefined" == typeof t && (t = !0), 0 !== v.slides.length)) {
                            var s = v.slides.eq(e),
                                r = s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                            !s.hasClass("swiper-lazy") || s.hasClass("swiper-lazy-loaded") || s.hasClass("swiper-lazy-loading") || r.add(s[0]), 0 !== r.length && r.each(function() {
                                var e = a(this);
                                e.addClass("swiper-lazy-loading");
                                var r = e.attr("data-background"),
                                    i = e.attr("data-src");
                                v.loadImage(e[0], i || r, !1, function() {
                                    if (r ? (e.css("background-image", "url(" + r + ")"), e.removeAttr("data-background")) : (e.attr("src", i), e.removeAttr("data-src")), e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"), s.find(".swiper-lazy-preloader, .preloader").remove(), v.params.loop && t) {
                                        var a = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(v.params.slideDuplicateClass)) {
                                            var n = v.wrapper.children('[data-swiper-slide-index="' + a + '"]:not(.' + v.params.slideDuplicateClass + ")");
                                            v.lazy.loadImageInSlide(n.index(), !1)
                                        } else {
                                            var o = v.wrapper.children("." + v.params.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]');
                                            v.lazy.loadImageInSlide(o.index(), !1)
                                        }
                                    }
                                    v.emit("onLazyImageReady", v, s[0], e[0])
                                }), v.emit("onLazyImageLoad", v, s[0], e[0])
                            })
                        }
                    },
                    load: function() {
                        var e;
                        if (v.params.watchSlidesVisibility) v.wrapper.children("." + v.params.slideVisibleClass).each(function() {
                            v.lazy.loadImageInSlide(a(this).index())
                        });
                        else if (v.params.slidesPerView > 1)
                            for (e = v.activeIndex; e < v.activeIndex + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                        else v.lazy.loadImageInSlide(v.activeIndex);
                        if (v.params.lazyLoadingInPrevNext)
                            if (v.params.slidesPerView > 1) {
                                for (e = v.activeIndex + v.params.slidesPerView; e < v.activeIndex + v.params.slidesPerView + v.params.slidesPerView; e++) v.slides[e] && v.lazy.loadImageInSlide(e);
                                for (e = v.activeIndex - v.params.slidesPerView; e < v.activeIndex; e++) v.slides[e] && v.lazy.loadImageInSlide(e)
                            } else {
                                var t = v.wrapper.children("." + v.params.slideNextClass);
                                t.length > 0 && v.lazy.loadImageInSlide(t.index());
                                var s = v.wrapper.children("." + v.params.slidePrevClass);
                                s.length > 0 && v.lazy.loadImageInSlide(s.index())
                            }
                    },
                    onTransitionStart: function() {
                        v.params.lazyLoading && (v.params.lazyLoadingOnTransitionStart || !v.params.lazyLoadingOnTransitionStart && !v.lazy.initialImageLoaded) && v.lazy.load()
                    },
                    onTransitionEnd: function() {
                        v.params.lazyLoading && !v.params.lazyLoadingOnTransitionStart && v.lazy.load()
                    }
                }, v.scrollbar = {
                    set: function() {
                        if (v.params.scrollbar) {
                            var e = v.scrollbar;
                            e.track = a(v.params.scrollbar), e.drag = e.track.find(".swiper-scrollbar-drag"), 0 === e.drag.length && (e.drag = a('<div class="swiper-scrollbar-drag"></div>'), e.track.append(e.drag)), e.drag[0].style.width = "", e.drag[0].style.height = "", e.trackSize = r() ? e.track[0].offsetWidth : e.track[0].offsetHeight, e.divider = v.size / v.virtualSize, e.moveDivider = e.divider * (e.trackSize / v.size), e.dragSize = e.trackSize * e.divider, r() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px", e.divider >= 1 ? e.track[0].style.display = "none" : e.track[0].style.display = "", v.params.scrollbarHide && (e.track[0].style.opacity = 0)
                        }
                    },
                    setTranslate: function() {
                        if (v.params.scrollbar) {
                            var e, a = v.scrollbar,
                                t = (v.translate || 0, a.dragSize);
                            e = (a.trackSize - a.dragSize) * v.progress, v.rtl && r() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : 0 > e ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), r() ? (v.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (v.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), v.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                                a.track[0].style.opacity = 0, a.track.transition(400)
                            }, 1e3))
                        }
                    },
                    setTransition: function(e) {
                        v.params.scrollbar && v.scrollbar.drag.transition(e)
                    }
                }, v.controller = {
                    LinearSpline: function(e, a) {
                        this.x = e, this.y = a, this.lastIndex = e.length - 1;
                        var t, s;
                        this.x.length;
                        this.interpolate = function(e) {
                            return e ? (s = r(this.x, e), t = s - 1, (e - this.x[t]) * (this.y[s] - this.y[t]) / (this.x[s] - this.x[t]) + this.y[t]) : 0
                        };
                        var r = function() {
                            var e, a, t;
                            return function(s, r) {
                                for (a = -1, e = s.length; e - a > 1;) s[t = e + a >> 1] <= r ? a = t : e = t;
                                return e
                            }
                        }()
                    },
                    getInterpolateFunction: function(e) {
                        v.controller.spline || (v.controller.spline = v.params.loop ? new v.controller.LinearSpline(v.slidesGrid, e.slidesGrid) : new v.controller.LinearSpline(v.snapGrid, e.snapGrid))
                    },
                    setTranslate: function(e, a) {
                        function s(a) {
                            e = a.rtl && "horizontal" === a.params.direction ? -v.translate : v.translate, "slide" === v.params.controlBy && (v.controller.getInterpolateFunction(a), i = -v.controller.spline.interpolate(-e)), i && "container" !== v.params.controlBy || (r = (a.maxTranslate() - a.minTranslate()) / (v.maxTranslate() - v.minTranslate()), i = (e - v.minTranslate()) * r + a.minTranslate()), v.params.controlInverse && (i = a.maxTranslate() - i), a.updateProgress(i), a.setWrapperTranslate(i, !1, v), a.updateActiveIndex()
                        }
                        var r, i, n = v.params.control;
                        if (v.isArray(n))
                            for (var o = 0; o < n.length; o++) n[o] !== a && n[o] instanceof t && s(n[o]);
                        else n instanceof t && a !== n && s(n)
                    },
                    setTransition: function(e, a) {
                        function s(a) {
                            a.setWrapperTransition(e, v), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
                                i && (a.params.loop && "slide" === v.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                            }))
                        }
                        var r, i = v.params.control;
                        if (v.isArray(i))
                            for (r = 0; r < i.length; r++) i[r] !== a && i[r] instanceof t && s(i[r]);
                        else i instanceof t && a !== i && s(i)
                    }
                }, v.hashnav = {
                    init: function() {
                        if (v.params.hashnav) {
                            v.hashnav.initialized = !0;
                            var e = document.location.hash.replace("#", "");
                            if (e)
                                for (var a = 0, t = 0, s = v.slides.length; s > t; t++) {
                                    var r = v.slides.eq(t),
                                        i = r.attr("data-hash");
                                    if (i === e && !r.hasClass(v.params.slideDuplicateClass)) {
                                        var n = r.index();
                                        v.slideTo(n, a, v.params.runCallbacksOnInit, !0)
                                    }
                                }
                        }
                    },
                    setHash: function() {
                        v.hashnav.initialized && v.params.hashnav && (document.location.hash = v.slides.eq(v.activeIndex).attr("data-hash") || "")
                    }
                }, v.disableKeyboardControl = function() {
                    a(document).off("keydown", p)
                }, v.enableKeyboardControl = function() {
                    a(document).on("keydown", p)
                }, v.mousewheel = {
                    event: !1,
                    lastScrollTime: (new window.Date).getTime()
                }, v.params.mousewheelControl) {
                try {
                    new window.WheelEvent("wheel"), v.mousewheel.event = "wheel"
                } catch (L) {}
                v.mousewheel.event || void 0 === document.onmousewheel || (v.mousewheel.event = "mousewheel"), v.mousewheel.event || (v.mousewheel.event = "DOMMouseScroll")
            }
            v.disableMousewheelControl = function() {
                return v.mousewheel.event ? (v.container.off(v.mousewheel.event, d), !0) : !1
            }, v.enableMousewheelControl = function() {
                return v.mousewheel.event ? (v.container.on(v.mousewheel.event, d), !0) : !1
            }, v.parallax = {
                setTranslate: function() {
                    v.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        u(this, v.progress)
                    }), v.slides.each(function() {
                        var e = a(this);
                        e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            var a = Math.min(Math.max(e[0].progress, -1), 1);
                            u(this, a)
                        })
                    })
                },
                setTransition: function(e) {
                    "undefined" == typeof e && (e = v.params.speed), v.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = a(this),
                            s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (s = 0), t.transition(s)
                    })
                }
            }, v._plugins = [];
            for (var B in v.plugins) {
                var O = v.plugins[B](v, v.params[B]);
                O && v._plugins.push(O)
            }
            return v.callPlugins = function(e) {
                for (var a = 0; a < v._plugins.length; a++) e in v._plugins[a] && v._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, v.emitterEventListeners = {}, v.emit = function(e) {
                v.params[e] && v.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (v.emitterEventListeners[e])
                    for (a = 0; a < v.emitterEventListeners[e].length; a++) v.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                v.callPlugins && v.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, v.on = function(e, a) {
                return e = c(e), v.emitterEventListeners[e] || (v.emitterEventListeners[e] = []), v.emitterEventListeners[e].push(a), v
            }, v.off = function(e, a) {
                var t;
                if (e = c(e), "undefined" == typeof a) return v.emitterEventListeners[e] = [], v;
                if (v.emitterEventListeners[e] && 0 !== v.emitterEventListeners[e].length) {
                    for (t = 0; t < v.emitterEventListeners[e].length; t++) v.emitterEventListeners[e][t] === a && v.emitterEventListeners[e].splice(t, 1);
                    return v
                }
            }, v.once = function(e, a) {
                e = c(e);
                var t = function() {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), v.off(e, t)
                };
                return v.on(e, t), v
            }, v.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function(e, a) {
                    return e.attr("role", a), e
                },
                addLabel: function(e, a) {
                    return e.attr("aria-label", a), e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(e) {
                    13 === e.keyCode && (a(e.target).is(v.params.nextButton) ? (v.onClickNext(e), v.isEnd ? v.a11y.notify(v.params.lastSlideMessage) : v.a11y.notify(v.params.nextSlideMessage)) : a(e.target).is(v.params.prevButton) && (v.onClickPrev(e), v.isBeginning ? v.a11y.notify(v.params.firstSlideMessage) : v.a11y.notify(v.params.prevSlideMessage)), a(e.target).is("." + v.params.bulletClass) && a(e.target)[0].click())
                },
                liveRegion: a('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = v.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(e))
                },
                init: function() {
                    if (v.params.nextButton) {
                        var e = a(v.params.nextButton);
                        v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.nextSlideMessage)
                    }
                    if (v.params.prevButton) {
                        var t = a(v.params.prevButton);
                        v.a11y.makeFocusable(t), v.a11y.addRole(t, "button"), v.a11y.addLabel(t, v.params.prevSlideMessage)
                    }
                    a(v.container).append(v.a11y.liveRegion)
                },
                initPagination: function() {
                    v.params.pagination && v.params.paginationClickable && v.bullets && v.bullets.length && v.bullets.each(function() {
                        var e = a(this);
                        v.a11y.makeFocusable(e), v.a11y.addRole(e, "button"), v.a11y.addLabel(e, v.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                    })
                },
                destroy: function() {
                    v.a11y.liveRegion && v.a11y.liveRegion.length > 0 && v.a11y.liveRegion.remove()
                }
            }, v.init = function() {
                v.params.loop && v.createLoop(), v.updateContainerSize(), v.updateSlidesSize(), v.updatePagination(), v.params.scrollbar && v.scrollbar && v.scrollbar.set(), "slide" !== v.params.effect && v.effects[v.params.effect] && (v.params.loop || v.updateProgress(), v.effects[v.params.effect].setTranslate()), v.params.loop ? v.slideTo(v.params.initialSlide + v.loopedSlides, 0, v.params.runCallbacksOnInit) : (v.slideTo(v.params.initialSlide, 0, v.params.runCallbacksOnInit), 0 === v.params.initialSlide && (v.parallax && v.params.parallax && v.parallax.setTranslate(), v.lazy && v.params.lazyLoading && (v.lazy.load(), v.lazy.initialImageLoaded = !0))), v.attachEvents(), v.params.observer && v.support.observer && v.initObservers(), v.params.preloadImages && !v.params.lazyLoading && v.preloadImages(), v.params.autoplay && v.startAutoplay(), v.params.keyboardControl && v.enableKeyboardControl && v.enableKeyboardControl(), v.params.mousewheelControl && v.enableMousewheelControl && v.enableMousewheelControl(), v.params.hashnav && v.hashnav && v.hashnav.init(), v.params.a11y && v.a11y && v.a11y.init(), v.emit("onInit", v)
            }, v.cleanupStyles = function() {
                v.container.removeClass(v.classNames.join(" ")).removeAttr("style"), v.wrapper.removeAttr("style"), v.slides && v.slides.length && v.slides.removeClass([v.params.slideVisibleClass, v.params.slideActiveClass, v.params.slideNextClass, v.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), v.paginationContainer && v.paginationContainer.length && v.paginationContainer.removeClass(v.params.paginationHiddenClass), v.bullets && v.bullets.length && v.bullets.removeClass(v.params.bulletActiveClass), v.params.prevButton && a(v.params.prevButton).removeClass(v.params.buttonDisabledClass), v.params.nextButton && a(v.params.nextButton).removeClass(v.params.buttonDisabledClass), v.params.scrollbar && v.scrollbar && (v.scrollbar.track && v.scrollbar.track.length && v.scrollbar.track.removeAttr("style"), v.scrollbar.drag && v.scrollbar.drag.length && v.scrollbar.drag.removeAttr("style"))
            }, v.destroy = function(e, a) {
                v.detachEvents(), v.stopAutoplay(), v.params.loop && v.destroyLoop(), a && v.cleanupStyles(), v.disconnectObservers(), v.params.keyboardControl && v.disableKeyboardControl && v.disableKeyboardControl(), v.params.mousewheelControl && v.disableMousewheelControl && v.disableMousewheelControl(), v.params.a11y && v.a11y && v.a11y.destroy(), v.emit("onDestroy"), e !== !1 && (v = null)
            }, v.init(), v
        }
    };
    t.prototype = {
        isSafari: function() {
            var e = navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
        },
        device: function() {
            var e = navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                r = !t && e.match(/(iPhone\sOS)\s([\d_]+)/);
            return {
                ios: t || r || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }()
        },
        plugins: {}
    };
    for (var s = ["jQuery", "Zepto", "Dom7"], r = 0; r < s.length; r++) window[s[r]] && e(window[s[r]]);
    var i;
    i = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7, i && ("transitionEnd" in i.fn || (i.fn.transitionEnd = function(e) {
        function a(i) {
            if (i.target === this)
                for (e.call(this, i), t = 0; t < s.length; t++) r.off(s[t], a)
        }
        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            r = this;
        if (e)
            for (t = 0; t < s.length; t++) r.on(s[t], a);
        return this
    }), "transform" in i.fn || (i.fn.transform = function(e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }), "transition" in i.fn || (i.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    })), window.Swiper = t
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});

/* 9. menu.min.js
-----------------------------------------------------------------------------------------------*/
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery", "./core", "./widget", "./position"], a) : a(jQuery)
}(function(a) {
    return a.widget("ui.menu", {
        version: "1.11.4",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            items: "> *",
            menus: "ul",
            position: {
                my: "left-1 top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item": function(a) {
                    a.preventDefault()
                },
                "click .ui-menu-item": function(b) {
                    var c = a(b.target);
                    !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(b) {
                    if (!this.previousFilter) {
                        var c = a(b.currentTarget);
                        c.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(a, b) {
                    var c = this.active || this.element.find(this.options.items).eq(0);
                    b || this.focus(a, c)
                },
                blur: function(b) {
                    this._delay(function() {
                        a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(a) {
                    this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var b = a(this);
                b.data("ui-menu-submenu-carat") && b.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(b) {
            var c, d, e, f, g = !0;
            switch (b.keyCode) {
                case a.ui.keyCode.PAGE_UP:
                    this.previousPage(b);
                    break;
                case a.ui.keyCode.PAGE_DOWN:
                    this.nextPage(b);
                    break;
                case a.ui.keyCode.HOME:
                    this._move("first", "first", b);
                    break;
                case a.ui.keyCode.END:
                    this._move("last", "last", b);
                    break;
                case a.ui.keyCode.UP:
                    this.previous(b);
                    break;
                case a.ui.keyCode.DOWN:
                    this.next(b);
                    break;
                case a.ui.keyCode.LEFT:
                    this.collapse(b);
                    break;
                case a.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
                    break;
                case a.ui.keyCode.ENTER:
                case a.ui.keyCode.SPACE:
                    this._activate(b);
                    break;
                case a.ui.keyCode.ESCAPE:
                    this.collapse(b);
                    break;
                default:
                    g = !1, d = this.previousFilter || "", e = String.fromCharCode(b.keyCode), f = !1, clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), c = f && c.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            g && b.preventDefault()
        },
        _activate: function(a) {
            this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a))
        },
        refresh: function() {
            var b, c, d = this,
                e = this.options.icons.submenu,
                f = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var b = a(this),
                    c = b.parent(),
                    d = a("<span>").addClass("ui-menu-icon ui-icon " + e).data("ui-menu-submenu-carat", !0);
                c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"))
            }), b = f.add(this.element), c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
                var b = a(this);
                d._isDivider(b) && b.addClass("ui-widget-content ui-menu-divider")
            }), c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(a, b) {
            "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this._super(a, b)
        },
        focus: function(a, b) {
            var c, d;
            this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
                item: b
            })
        },
        _scrollIntoView: function(b) {
            var c, d, e, f, g, h;
            this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), e < 0 ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
        },
        blur: function(a, b) {
            b || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
                item: this.active
            }))
        },
        _startOpening: function(a) {
            clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(a)
            }, this.delay))
        },
        _open: function(b) {
            var c = a.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
        },
        collapseAll: function(b, c) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
                d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
            }, this.delay)
        },
        _close: function(a) {
            a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(b) {
            return !a(b.target).closest(".ui-menu").length
        },
        _isDivider: function(a) {
            return !/[^\-\u2014\u2013\s]/.test(a.text())
        },
        collapse: function(a) {
            var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            b && b.length && (this._close(), this.focus(a, b))
        },
        expand: function(a) {
            var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            b && b.length && (this._open(b.parent()), this._delay(function() {
                this.focus(a, b)
            }))
        },
        next: function(a) {
            this._move("next", "first", a)
        },
        previous: function(a) {
            this._move("prev", "last", a)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(a, b, c) {
            var d;
            this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), this.focus(c, d)
        },
        nextPage: function(b) {
            var c, d, e;
            return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d - e < 0
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b)
        },
        previousPage: function(b) {
            var c, d, e;
            return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return c = a(this), c.offset().top - d + e > 0
            }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(b) {
            this.active = this.active || a(b.target).closest(".ui-menu-item");
            var c = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
        },
        _filterMenuItems: function(b) {
            var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                d = new RegExp("^" + c, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                return d.test(a.trim(a(this).text()))
            })
        }
    })
});

/* 10. wp-a11y.min
-----------------------------------------------------------------------------------------------*/
window.wp = window.wp || {},
    function(a, b) {
        "use strict";

        function c(a, c) {
            e(), a = b("<p>").html(a).text(), g && "assertive" === c ? g.text(a) : f && f.text(a)
        }

        function d(a) {
            a = a || "polite";
            var c = b("<div>", {
                id: "wp-a11y-speak-" + a,
                "aria-live": a,
                "aria-relevant": "additions text",
                "aria-atomic": "true",
                "class": "screen-reader-text wp-a11y-speak-region"
            });
            return b(document.body).append(c), c
        }

        function e() {
            b(".wp-a11y-speak-region").text("")
        }
        var f, g;
        b(document).ready(function() {
            f = b("#wp-a11y-speak-polite"), g = b("#wp-a11y-speak-assertive"), f.length || (f = d("polite")), g.length || (g = d("assertive"))
        }), a.a11y = a.a11y || {}, a.a11y.speak = c
    }(window.wp, window.jQuery);

/* 11.  wp-embed.min.js
-----------------------------------------------------------------------------------------------*/
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++)
                if (d = i[c], !d.getAttribute("data-secret")) {
                    if (f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f), g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
                } else;
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d.secret || d.message || d.value)
                    if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                        var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                            k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                        for (e = 0; e < k.length; e++) k[e].style.display = "none";
                        for (e = 0; e < j.length; e++)
                            if (f = j[e], c.source === f.contentWindow) {
                                if (f.removeAttribute("style"), "height" === d.message) {
                                    if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                    else if (~~g < 200) g = 200;
                                    f.height = g
                                }
                                if ("link" === d.message)
                                    if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                        if (b.activeElement === f) a.top.location.href = d.value
                            } else;
                    }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);

/* 12.  datepicker.min.js
-----------------------------------------------------------------------------------------------*/
! function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "./core"], e) : e(jQuery)
}(function(e) {
    function t(e) {
        for (var t, a; e.length && e[0] !== document;) {
            if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (a = parseInt(e.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
            e = e.parent()
        }
        return 0
    }

    function a() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = i(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function i(t) {
        var a = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(a, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(a, "mouseover", s)
    }

    function s() {
        e.datepicker._isDisabledDatepicker(n.inline ? n.dpDiv.parent()[0] : n.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function r(t, a) {
        e.extend(t, a);
        for (var i in a) null == a[i] && (t[i] = a[i]);
        return t
    }
    e.extend(e.ui, {
        datepicker: {
            version: "1.11.4"
        }
    });
    var n;
    return e.extend(a.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return r(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, a) {
            var i, s, r;
            i = t.nodeName.toLowerCase(), s = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), r = this._newInst(e(t), s), r.settings = e.extend({}, a || {}), "input" === i ? this._connectDatepicker(t, r) : s && this._inlineDatepicker(t, r)
        },
        _newInst: function(t, a) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: a,
                dpDiv: a ? i(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, a) {
            var i = e(t);
            a.append = e([]), a.trigger = e([]), i.hasClass(this.markerClassName) || (this._attachments(i, a), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(a), e.data(t, "datepicker", a), a.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, a) {
            var i, s, r, n = this._get(a, "appendText"),
                d = this._get(a, "isRTL");
            a.append && a.append.remove(), n && (a.append = e("<span class='" + this._appendClass + "'>" + n + "</span>"), t[d ? "before" : "after"](a.append)), t.unbind("focus", this._showDatepicker), a.trigger && a.trigger.remove(), i = this._get(a, "showOn"), ("focus" === i || "both" === i) && t.focus(this._showDatepicker), ("button" === i || "both" === i) && (s = this._get(a, "buttonText"), r = this._get(a, "buttonImage"), a.trigger = e(this._get(a, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: r,
                alt: s,
                title: s
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(r ? e("<img/>").attr({
                src: r,
                alt: s,
                title: s
            }) : s)), t[d ? "before" : "after"](a.trigger), a.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, a, i, s, r = new Date(2009, 11, 20),
                    n = this._get(e, "dateFormat");
                n.match(/[DM]/) && (t = function(e) {
                    for (a = 0, i = 0, s = 0; s < e.length; s++) e[s].length > a && (a = e[s].length, i = s);
                    return i
                }, r.setMonth(t(this._get(e, n.match(/MM/) ? "monthNames" : "monthNamesShort"))), r.setDate(t(this._get(e, n.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - r.getDay())), e.input.attr("size", this._formatDate(e, r).length)
            }
        },
        _inlineDatepicker: function(t, a) {
            var i = e(t);
            i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(a.dpDiv), e.data(t, "datepicker", a), this._setDate(a, this._getDefaultDate(a), !0), this._updateDatepicker(a), this._updateAlternate(a), a.settings.disabled && this._disableDatepicker(t), a.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, a, i, s, n) {
            var d, c, o, l, h, u = this._dialogInst;
            return u || (this.uuid += 1, d = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + d + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), u = this._dialogInst = this._newInst(this._dialogInput, !1), u.settings = {}, e.data(this._dialogInput[0], "datepicker", u)), r(u.settings, s || {}), a = a && a.constructor === Date ? this._formatDate(u, a) : a, this._dialogInput.val(a), this._pos = n ? n.length ? n : [n.pageX, n.pageY] : null, this._pos || (c = document.documentElement.clientWidth, o = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + l, o / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", u), this
        },
        _destroyDatepicker: function(t) {
            var a, i = e(t),
                s = e.data(t, "datepicker");
            i.hasClass(this.markerClassName) && (a = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === a ? (s.append.remove(), s.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === a || "span" === a) && i.removeClass(this.markerClassName).empty(), n === s && (n = null))
        },
        _enableDatepicker: function(t) {
            var a, i, s = e(t),
                r = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (a = t.nodeName.toLowerCase(), "input" === a ? (t.disabled = !1, r.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === a || "span" === a) && (i = s.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var a, i, s = e(t),
                r = e.data(t, "datepicker");
            s.hasClass(this.markerClassName) && (a = t.nodeName.toLowerCase(), "input" === a ? (t.disabled = !0, r.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === a || "span" === a) && (i = s.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; t < this._disabledInputs.length; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, "datepicker")
            } catch (a) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(t, a, i) {
            var s, n, d, c, o = this._getInst(t);
            return 2 === arguments.length && "string" == typeof a ? "defaults" === a ? e.extend({}, e.datepicker._defaults) : o ? "all" === a ? e.extend({}, o.settings) : this._get(o, a) : null : (s = a || {}, "string" == typeof a && (s = {}, s[a] = i), void(o && (this._curInst === o && this._hideDatepicker(), n = this._getDateDatepicker(t, !0), d = this._getMinMaxDate(o, "min"), c = this._getMinMaxDate(o, "max"), r(o.settings, s), null !== d && void 0 !== s.dateFormat && void 0 === s.minDate && (o.settings.minDate = this._formatDate(o, d)), null !== c && void 0 !== s.dateFormat && void 0 === s.maxDate && (o.settings.maxDate = this._formatDate(o, c)), "disabled" in s && (s.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), o), this._autoSize(o), this._setDate(o, n), this._updateAlternate(o), this._updateDatepicker(o))))
        },
        _changeDatepicker: function(e, t, a) {
            this._optionDatepicker(e, t, a)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var a = this._getInst(e);
            a && (this._setDate(a, t), this._updateDatepicker(a), this._updateAlternate(a))
        },
        _getDateDatepicker: function(e, t) {
            var a = this._getInst(e);
            return a && !a.inline && this._setDateFromField(a, t), a ? this._getDate(a) : null
        },
        _doKeyDown: function(t) {
            var a, i, s, r = e.datepicker._getInst(t.target),
                n = !0,
                d = r.dpDiv.is(".ui-datepicker-rtl");
            if (r._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), n = !1;
                    break;
                case 13:
                    return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", r.dpDiv), s[0] && e.datepicker._selectDay(t.target, r.selectedMonth, r.selectedYear, s[0]), a = e.datepicker._get(r, "onSelect"), a ? (i = e.datepicker._formatDate(r), a.apply(r.input ? r.input[0] : null, [i, r])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(r, "stepBigMonths") : -e.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(r, "stepBigMonths") : +e.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), n = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), n = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, d ? 1 : -1, "D"), n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(r, "stepBigMonths") : -e.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), n = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, d ? -1 : 1, "D"), n = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(r, "stepBigMonths") : +e.datepicker._get(r, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), n = t.ctrlKey || t.metaKey;
                    break;
                default:
                    n = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : n = !1;
            n && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(t) {
            var a, i, s = e.datepicker._getInst(t.target);
            return e.datepicker._get(s, "constrainInput") ? (a = e.datepicker._possibleChars(e.datepicker._get(s, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > i || !a || a.indexOf(i) > -1) : void 0
        },
        _doKeyUp: function(t) {
            var a, i = e.datepicker._getInst(t.target);
            if (i.input.val() !== i.lastVal) try {
                a = e.datepicker.parseDate(e.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, e.datepicker._getFormatConfig(i)), a && (e.datepicker._setDateFromField(i), e.datepicker._updateAlternate(i), e.datepicker._updateDatepicker(i))
            } catch (s) {}
            return !0
        },
        _showDatepicker: function(a) {
            if (a = a.target || a, "input" !== a.nodeName.toLowerCase() && (a = e("input", a.parentNode)[0]), !e.datepicker._isDisabledDatepicker(a) && e.datepicker._lastInput !== a) {
                var i, s, n, d, c, o, l;
                i = e.datepicker._getInst(a), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), s = e.datepicker._get(i, "beforeShow"), n = s ? s.apply(a, [a, i]) : {}, n !== !1 && (r(i.settings, n), i.lastVal = null, e.datepicker._lastInput = a, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (a.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(a), e.datepicker._pos[1] += a.offsetHeight), d = !1, e(a).parents().each(function() {
                    return d |= "fixed" === e(this).css("position"), !d
                }), c = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), c = e.datepicker._checkOffset(i, c, d), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : d ? "fixed" : "absolute",
                    display: "none",
                    left: c.left + "px",
                    top: c.top + "px"
                }), i.inline || (o = e.datepicker._get(i, "showAnim"), l = e.datepicker._get(i, "duration"), i.dpDiv.css("z-index", t(e(a)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[o] ? i.dpDiv.show(o, e.datepicker._get(i, "showOptions"), l) : i.dpDiv[o || "show"](o ? l : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
            var a, i = this._getNumberOfMonths(t),
                r = i[1],
                d = 17,
                c = t.dpDiv.find("." + this._dayOverClass + " a");
            c.length > 0 && s.apply(c.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), r > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + r).css("width", d * r + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (a = t.yearshtml, setTimeout(function() {
                a === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), a = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, a, i) {
            var s = t.dpDiv.outerWidth(),
                r = t.dpDiv.outerHeight(),
                n = t.input ? t.input.outerWidth() : 0,
                d = t.input ? t.input.outerHeight() : 0,
                c = document.documentElement.clientWidth + (i ? 0 : e(document).scrollLeft()),
                o = document.documentElement.clientHeight + (i ? 0 : e(document).scrollTop());
            return a.left -= this._get(t, "isRTL") ? s - n : 0, a.left -= i && a.left === t.input.offset().left ? e(document).scrollLeft() : 0, a.top -= i && a.top === t.input.offset().top + d ? e(document).scrollTop() : 0, a.left -= Math.min(a.left, a.left + s > c && c > s ? Math.abs(a.left + s - c) : 0), a.top -= Math.min(a.top, a.top + r > o && o > r ? Math.abs(r + d) : 0), a
        },
        _findPos: function(t) {
            for (var a, i = this._getInst(t), s = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"];
            return a = e(t).offset(), [a.left, a.top]
        },
        _hideDatepicker: function(t) {
            var a, i, s, r, n = this._curInst;
            !n || t && n !== e.data(t, "datepicker") || this._datepickerShowing && (a = this._get(n, "showAnim"), i = this._get(n, "duration"), s = function() {
                e.datepicker._tidyDialog(n)
            }, e.effects && (e.effects.effect[a] || e.effects[a]) ? n.dpDiv.hide(a, e.datepicker._get(n, "showOptions"), i, s) : n.dpDiv["slideDown" === a ? "slideUp" : "fadeIn" === a ? "fadeOut" : "hide"](a ? i : null, s), a || s(), this._datepickerShowing = !1, r = this._get(n, "onClose"), r && r.apply(n.input ? n.input[0] : null, [n.input ? n.input.val() : "", n]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var a = e(t.target),
                    i = e.datepicker._getInst(a[0]);
                (a[0].id !== e.datepicker._mainDivId && 0 === a.parents("#" + e.datepicker._mainDivId).length && !a.hasClass(e.datepicker.markerClassName) && !a.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || a.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== i) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, a, i) {
            var s = e(t),
                r = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(r, a + ("M" === i ? this._get(r, "showCurrentAtPos") : 0), i), this._updateDatepicker(r))
        },
        _gotoToday: function(t) {
            var a, i = e(t),
                s = this._getInst(i[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (a = new Date, s.selectedDay = a.getDate(), s.drawMonth = s.selectedMonth = a.getMonth(), s.drawYear = s.selectedYear = a.getFullYear()), this._notifyChange(s), this._adjustDate(i)
        },
        _selectMonthYear: function(t, a, i) {
            var s = e(t),
                r = this._getInst(s[0]);
            r["selected" + ("M" === i ? "Month" : "Year")] = r["draw" + ("M" === i ? "Month" : "Year")] = parseInt(a.options[a.selectedIndex].value, 10), this._notifyChange(r), this._adjustDate(s)
        },
        _selectDay: function(t, a, i, s) {
            var r, n = e(t);
            e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(n[0]) || (r = this._getInst(n[0]), r.selectedDay = r.currentDay = e("a", s).html(), r.selectedMonth = r.currentMonth = a, r.selectedYear = r.currentYear = i, this._selectDate(t, this._formatDate(r, r.currentDay, r.currentMonth, r.currentYear)))
        },
        _clearDate: function(t) {
            var a = e(t);
            this._selectDate(a, "")
        },
        _selectDate: function(t, a) {
            var i, s = e(t),
                r = this._getInst(s[0]);
            a = null != a ? a : this._formatDate(r), r.input && r.input.val(a), this._updateAlternate(r), i = this._get(r, "onSelect"), i ? i.apply(r.input ? r.input[0] : null, [a, r]) : r.input && r.input.trigger("change"), r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], "object" != typeof r.input[0] && r.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var a, i, s, r = this._get(t, "altField");
            r && (a = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), s = this.formatDate(a, i, this._getFormatConfig(t)), e(r).each(function() {
                e(this).val(s)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, a = new Date(e.getTime());
            return a.setDate(a.getDate() + 4 - (a.getDay() || 7)), t = a.getTime(), a.setMonth(0), a.setDate(1), Math.floor(Math.round((t - a) / 864e5) / 7) + 1
        },
        parseDate: function(t, a, i) {
            if (null == t || null == a) throw "Invalid arguments";
            if (a = "object" == typeof a ? a.toString() : a + "", "" === a) return null;
            var s, r, n, d, c = 0,
                o = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                l = "string" != typeof o ? o : (new Date).getFullYear() % 100 + parseInt(o, 10),
                h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                u = (i ? i.dayNames : null) || this._defaults.dayNames,
                p = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                g = (i ? i.monthNames : null) || this._defaults.monthNames,
                _ = -1,
                k = -1,
                f = -1,
                m = -1,
                D = !1,
                y = function(e) {
                    var a = s + 1 < t.length && t.charAt(s + 1) === e;
                    return a && s++, a
                },
                v = function(e) {
                    var t = y(e),
                        i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        s = "y" === e ? i : 1,
                        r = new RegExp("^\\d{" + s + "," + i + "}"),
                        n = a.substring(c).match(r);
                    if (!n) throw "Missing number at position " + c;
                    return c += n[0].length, parseInt(n[0], 10)
                },
                M = function(t, i, s) {
                    var r = -1,
                        n = e.map(y(t) ? s : i, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(n, function(e, t) {
                            var i = t[1];
                            return a.substr(c, i.length).toLowerCase() === i.toLowerCase() ? (r = t[0], c += i.length, !1) : void 0
                        }), -1 !== r) return r + 1;
                    throw "Unknown name at position " + c
                },
                b = function() {
                    if (a.charAt(c) !== t.charAt(s)) throw "Unexpected literal at position " + c;
                    c++
                };
            for (s = 0; s < t.length; s++)
                if (D) "'" !== t.charAt(s) || y("'") ? b() : D = !1;
                else switch (t.charAt(s)) {
                    case "d":
                        f = v("d");
                        break;
                    case "D":
                        M("D", h, u);
                        break;
                    case "o":
                        m = v("o");
                        break;
                    case "m":
                        k = v("m");
                        break;
                    case "M":
                        k = M("M", p, g);
                        break;
                    case "y":
                        _ = v("y");
                        break;
                    case "@":
                        d = new Date(v("@")), _ = d.getFullYear(), k = d.getMonth() + 1, f = d.getDate();
                        break;
                    case "!":
                        d = new Date((v("!") - this._ticksTo1970) / 1e4), _ = d.getFullYear(), k = d.getMonth() + 1, f = d.getDate();
                        break;
                    case "'":
                        y("'") ? b() : D = !0;
                        break;
                    default:
                        b()
                }
            if (c < a.length && (n = a.substr(c), !/^\s+/.test(n))) throw "Extra/unparsed characters found in date: " + n;
            if (-1 === _ ? _ = (new Date).getFullYear() : 100 > _ && (_ += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= _ ? 0 : -100)), m > -1)
                for (k = 1, f = m; r = this._getDaysInMonth(_, k - 1), !(r >= f);) k++, f -= r;
            if (d = this._daylightSavingAdjust(new Date(_, k - 1, f)), d.getFullYear() !== _ || d.getMonth() + 1 !== k || d.getDate() !== f) throw "Invalid date";
            return d
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 60 * 60 * 1e7,
        formatDate: function(e, t, a) {
            if (!t) return "";
            var i, s = (a ? a.dayNamesShort : null) || this._defaults.dayNamesShort,
                r = (a ? a.dayNames : null) || this._defaults.dayNames,
                n = (a ? a.monthNamesShort : null) || this._defaults.monthNamesShort,
                d = (a ? a.monthNames : null) || this._defaults.monthNames,
                c = function(t) {
                    var a = i + 1 < e.length && e.charAt(i + 1) === t;
                    return a && i++, a
                },
                o = function(e, t, a) {
                    var i = "" + t;
                    if (c(e))
                        for (; i.length < a;) i = "0" + i;
                    return i
                },
                l = function(e, t, a, i) {
                    return c(e) ? i[t] : a[t]
                },
                h = "",
                u = !1;
            if (t)
                for (i = 0; i < e.length; i++)
                    if (u) "'" !== e.charAt(i) || c("'") ? h += e.charAt(i) : u = !1;
                    else switch (e.charAt(i)) {
                        case "d":
                            h += o("d", t.getDate(), 2);
                            break;
                        case "D":
                            h += l("D", t.getDay(), s, r);
                            break;
                        case "o":
                            h += o("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            h += o("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            h += l("M", t.getMonth(), n, d);
                            break;
                        case "y":
                            h += c("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            h += t.getTime();
                            break;
                        case "!":
                            h += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            c("'") ? h += "'" : u = !0;
                            break;
                        default:
                            h += e.charAt(i)
                    }
            return h
        },
        _possibleChars: function(e) {
            var t, a = "",
                i = !1,
                s = function(a) {
                    var i = t + 1 < e.length && e.charAt(t + 1) === a;
                    return i && t++, i
                };
            for (t = 0; t < e.length; t++)
                if (i) "'" !== e.charAt(t) || s("'") ? a += e.charAt(t) : i = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        a += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? a += "'" : i = !0;
                        break;
                    default:
                        a += e.charAt(t)
                }
            return a
        },
        _get: function(e, t) {
            return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var a = this._get(e, "dateFormat"),
                    i = e.lastVal = e.input ? e.input.val() : null,
                    s = this._getDefaultDate(e),
                    r = s,
                    n = this._getFormatConfig(e);
                try {
                    r = this.parseDate(a, i, n) || s
                } catch (d) {
                    i = t ? "" : i
                }
                e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), e.currentDay = i ? r.getDate() : 0, e.currentMonth = i ? r.getMonth() : 0, e.currentYear = i ? r.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, a, i) {
            var s = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                r = function(a) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), a, e.datepicker._getFormatConfig(t))
                    } catch (i) {}
                    for (var s = (a.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, r = s.getFullYear(), n = s.getMonth(), d = s.getDate(), c = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, o = c.exec(a); o;) {
                        switch (o[2] || "d") {
                            case "d":
                            case "D":
                                d += parseInt(o[1], 10);
                                break;
                            case "w":
                            case "W":
                                d += 7 * parseInt(o[1], 10);
                                break;
                            case "m":
                            case "M":
                                n += parseInt(o[1], 10), d = Math.min(d, e.datepicker._getDaysInMonth(r, n));
                                break;
                            case "y":
                            case "Y":
                                r += parseInt(o[1], 10), d = Math.min(d, e.datepicker._getDaysInMonth(r, n))
                        }
                        o = c.exec(a)
                    }
                    return new Date(r, n, d)
                },
                n = null == a || "" === a ? i : "string" == typeof a ? r(a) : "number" == typeof a ? isNaN(a) ? i : s(a) : new Date(a.getTime());
            return n = n && "Invalid Date" === n.toString() ? i : n, n && (n.setHours(0), n.setMinutes(0), n.setSeconds(0), n.setMilliseconds(0)), this._daylightSavingAdjust(n)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, a) {
            var i = !t,
                s = e.selectedMonth,
                r = e.selectedYear,
                n = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = n.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = n.getMonth(), e.drawYear = e.selectedYear = e.currentYear = n.getFullYear(), s === e.selectedMonth && r === e.selectedYear || a || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var a = this._get(t, "stepMonths"),
                i = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(i, -a, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(i, +a, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(i)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(i, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(i, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, a, i, s, r, n, d, c, o, l, h, u, p, g, _, k, f, m, D, y, v, M, b, w, C, I, x, Y, S, N, F, T, A, K, j, O, R, L, W, E = new Date,
                H = this._daylightSavingAdjust(new Date(E.getFullYear(), E.getMonth(), E.getDate())),
                P = this._get(e, "isRTL"),
                U = this._get(e, "showButtonPanel"),
                z = this._get(e, "hideIfNoPrevNext"),
                B = this._get(e, "navigationAsDateFormat"),
                J = this._getNumberOfMonths(e),
                V = this._get(e, "showCurrentAtPos"),
                q = this._get(e, "stepMonths"),
                Q = 1 !== J[0] || 1 !== J[1],
                X = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                Z = this._getMinMaxDate(e, "min"),
                $ = this._getMinMaxDate(e, "max"),
                G = e.drawMonth - V,
                ee = e.drawYear;
            if (0 > G && (G += 12, ee--), $)
                for (t = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - J[0] * J[1] + 1, $.getDate())), t = Z && Z > t ? Z : t; this._daylightSavingAdjust(new Date(ee, G, 1)) > t;) G--, 0 > G && (G = 11, ee--);
            for (e.drawMonth = G, e.drawYear = ee, a = this._get(e, "prevText"), a = B ? this.formatDate(a, this._daylightSavingAdjust(new Date(ee, G - q, 1)), this._getFormatConfig(e)) : a, i = this._canAdjustMonth(e, -1, ee, G) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "e" : "w") + "'>" + a + "</span></a>" : z ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + a + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "e" : "w") + "'>" + a + "</span></a>", s = this._get(e, "nextText"), s = B ? this.formatDate(s, this._daylightSavingAdjust(new Date(ee, G + q, 1)), this._getFormatConfig(e)) : s, r = this._canAdjustMonth(e, 1, ee, G) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "w" : "e") + "'>" + s + "</span></a>" : z ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (P ? "w" : "e") + "'>" + s + "</span></a>", n = this._get(e, "currentText"), d = this._get(e, "gotoCurrent") && e.currentDay ? X : H, n = B ? this.formatDate(n, d, this._getFormatConfig(e)) : n, c = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", o = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (P ? c : "") + (this._isInRange(e, d) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + n + "</button>" : "") + (P ? "" : c) + "</div>" : "", l = parseInt(this._get(e, "firstDay"), 10), l = isNaN(l) ? 0 : l, h = this._get(e, "showWeek"), u = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), g = this._get(e, "monthNames"), _ = this._get(e, "monthNamesShort"), k = this._get(e, "beforeShowDay"), f = this._get(e, "showOtherMonths"), m = this._get(e, "selectOtherMonths"), D = this._getDefaultDate(e), y = "", M = 0; M < J[0]; M++) {
                for (b = "", this.maxRows = 4, w = 0; w < J[1]; w++) {
                    if (C = this._daylightSavingAdjust(new Date(ee, G, e.selectedDay)), I = " ui-corner-all", x = "", Q) {
                        if (x += "<div class='ui-datepicker-group", J[1] > 1) switch (w) {
                            case 0:
                                x += " ui-datepicker-group-first", I = " ui-corner-" + (P ? "right" : "left");
                                break;
                            case J[1] - 1:
                                x += " ui-datepicker-group-last", I = " ui-corner-" + (P ? "left" : "right");
                                break;
                            default:
                                x += " ui-datepicker-group-middle", I = ""
                        }
                        x += "'>"
                    }
                    for (x += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === M ? P ? r : i : "") + (/all|right/.test(I) && 0 === M ? P ? i : r : "") + this._generateMonthYearHeader(e, G, ee, Z, $, M > 0 || w > 0, g, _) + "</div><table class='ui-datepicker-calendar'><thead><tr>", Y = h ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) S = (v + l) % 7, Y += "<th scope='col'" + ((v + l + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[S] + "'>" + p[S] + "</span></th>";
                    for (x += Y + "</tr></thead><tbody>", N = this._getDaysInMonth(ee, G), ee === e.selectedYear && G === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, N)), F = (this._getFirstDayOfMonth(ee, G) - l + 7) % 7, T = Math.ceil((F + N) / 7), A = Q && this.maxRows > T ? this.maxRows : T, this.maxRows = A, K = this._daylightSavingAdjust(new Date(ee, G, 1 - F)), j = 0; A > j; j++) {
                        for (x += "<tr>", O = h ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(K) + "</td>" : "", v = 0; 7 > v; v++) R = k ? k.apply(e.input ? e.input[0] : null, [K]) : [!0, ""], L = K.getMonth() !== G, W = L && !m || !R[0] || Z && Z > K || $ && K > $, O += "<td class='" + ((v + l + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (L ? " ui-datepicker-other-month" : "") + (K.getTime() === C.getTime() && G === e.selectedMonth && e._keyEvent || D.getTime() === K.getTime() && D.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (W ? " " + this._unselectableClass + " ui-state-disabled" : "") + (L && !f ? "" : " " + R[1] + (K.getTime() === X.getTime() ? " " + this._currentClass : "") + (K.getTime() === H.getTime() ? " ui-datepicker-today" : "")) + "'" + (L && !f || !R[2] ? "" : " title='" + R[2].replace(/'/g, "&#39;") + "'") + (W ? "" : " data-handler='selectDay' data-event='click' data-month='" + K.getMonth() + "' data-year='" + K.getFullYear() + "'") + ">" + (L && !f ? "&#xa0;" : W ? "<span class='ui-state-default'>" + K.getDate() + "</span>" : "<a class='ui-state-default" + (K.getTime() === H.getTime() ? " ui-state-highlight" : "") + (K.getTime() === X.getTime() ? " ui-state-active" : "") + (L ? " ui-priority-secondary" : "") + "' href='#'>" + K.getDate() + "</a>") + "</td>", K.setDate(K.getDate() + 1), K = this._daylightSavingAdjust(K);
                        x += O + "</tr>"
                    }
                    G++, G > 11 && (G = 0, ee++), x += "</tbody></table>" + (Q ? "</div>" + (J[0] > 0 && w === J[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), b += x
                }
                y += b
            }
            return y += o, e._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(e, t, a, i, s, r, n, d) {
            var c, o, l, h, u, p, g, _, k = this._get(e, "changeMonth"),
                f = this._get(e, "changeYear"),
                m = this._get(e, "showMonthAfterYear"),
                D = "<div class='ui-datepicker-title'>",
                y = "";
            if (r || !k) y += "<span class='ui-datepicker-month'>" + n[t] + "</span>";
            else {
                for (c = i && i.getFullYear() === a, o = s && s.getFullYear() === a, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", l = 0; 12 > l; l++)(!c || l >= i.getMonth()) && (!o || l <= s.getMonth()) && (y += "<option value='" + l + "'" + (l === t ? " selected='selected'" : "") + ">" + d[l] + "</option>");
                y += "</select>"
            }
            if (m || (D += y + (!r && k && f ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", r || !f) D += "<span class='ui-datepicker-year'>" + a + "</span>";
                else {
                    for (h = this._get(e, "yearRange").split(":"), u = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? a + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? u + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? u : t
                        }, g = p(h[0]), _ = Math.max(g, p(h[1] || "")), g = i ? Math.max(g, i.getFullYear()) : g, _ = s ? Math.min(_, s.getFullYear()) : _, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; _ >= g; g++) e.yearshtml += "<option value='" + g + "'" + (g === a ? " selected='selected'" : "") + ">" + g + "</option>";
                    e.yearshtml += "</select>", D += e.yearshtml, e.yearshtml = null
                }
            return D += this._get(e, "yearSuffix"), m && (D += (!r && k && f ? "" : "&#xa0;") + y), D += "</div>"
        },
        _adjustInstDate: function(e, t, a) {
            var i = e.drawYear + ("Y" === a ? t : 0),
                s = e.drawMonth + ("M" === a ? t : 0),
                r = Math.min(e.selectedDay, this._getDaysInMonth(i, s)) + ("D" === a ? t : 0),
                n = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, s, r)));
            e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), ("M" === a || "Y" === a) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var a = this._getMinMaxDate(e, "min"),
                i = this._getMinMaxDate(e, "max"),
                s = a && a > t ? a : t;
            return i && s > i ? i : s
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, a, i) {
            var s = this._getNumberOfMonths(e),
                r = this._daylightSavingAdjust(new Date(a, i + (0 > t ? t : s[0] * s[1]), 1));
            return 0 > t && r.setDate(this._getDaysInMonth(r.getFullYear(), r.getMonth())), this._isInRange(e, r)
        },
        _isInRange: function(e, t) {
            var a, i, s = this._getMinMaxDate(e, "min"),
                r = this._getMinMaxDate(e, "max"),
                n = null,
                d = null,
                c = this._get(e, "yearRange");
            return c && (a = c.split(":"), i = (new Date).getFullYear(), n = parseInt(a[0], 10), d = parseInt(a[1], 10), a[0].match(/[+\-].*/) && (n += i), a[1].match(/[+\-].*/) && (d += i)), (!s || t.getTime() >= s.getTime()) && (!r || t.getTime() <= r.getTime()) && (!n || t.getFullYear() >= n) && (!d || t.getFullYear() <= d)
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, a, i) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, a, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var a = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(a)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(a)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(a))
    }, e.datepicker = new a, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker
});