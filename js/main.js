if (function(f, x) {
    var e, i, v = typeof x,
        m = f.document,
        t = f.location,
        n = f.jQuery,
        s = f.$,
        o = {},
        u = [],
        r = "1.9.1",
        y = u.concat,
        a = u.push,
        h = u.slice,
        l = u.indexOf,
        c = o.toString,
        g = o.hasOwnProperty,
        d = r.trim,
        gt = function(t, e) {
            return new gt.fn.init(t, e, i)
        },
        p = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        E = /\S+/g,
        b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        w = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        C = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        T = /^[\],:{}\s]*$/,
        _ = /(?:^|:|,)(?:\s*\[)+/g,
        S = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        A = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
        N = /^-ms-/,
        L = /-([\da-z])/gi,
        O = function(t, e) {
            return e.toUpperCase()
        },
        k = function(t) {
            (m.addEventListener || "load" === t.type || "complete" === m.readyState) && (R(), gt.ready())
        },
        R = function() {
            m.addEventListener ? (m.removeEventListener("DOMContentLoaded", k, !1), f.removeEventListener("load", k, !1)) : (m.detachEvent("onreadystatechange", k), f.detachEvent("onload", k))
        };

    function D(t) {
        var e = t.length,
            i = gt.type(t);
        return !gt.isWindow(t) && (!(1 !== t.nodeType || !e) || ("array" === i || "function" !== i && (0 === e || "number" == typeof e && 0 < e && e - 1 in t)))
    }
    gt.fn = gt.prototype = {
        jquery: r,
        constructor: gt,
        init: function(t, e, i) {
            var n, s;
            if (!t) return this;
            if ("string" == typeof t) {
                if (!(n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && 3 <= t.length ? [null, t, null] : w.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof gt ? e[0] : e, gt.merge(this, gt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), C.test(n[1]) && gt.isPlainObject(e))
                        for (n in e) gt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                if ((s = m.getElementById(n[2])) && s.parentNode) {
                    if (s.id !== n[2]) return i.find(t);
                    this.length = 1, this[0] = s
                }
                return this.context = m, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : gt.isFunction(t) ? i.ready(t) : (t.selector !== x && (this.selector = t.selector, this.context = t.context), gt.makeArray(t, this))
        },
        selector: "",
        length: 0,
        size: function() {
            return this.length
        },
        toArray: function() {
            return h.call(this)
        },
        get: function(t) {
            return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t]
        },
        pushStack: function(t) {
            var e = gt.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function(t, e) {
            return gt.each(this, t, e)
        },
        ready: function(t) {
            return gt.ready.promise().done(t), this
        },
        slice: function() {
            return this.pushStack(h.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length,
                i = +t + (t < 0 ? e : 0);
            return this.pushStack(0 <= i && i < e ? [this[i]] : [])
        },
        map: function(i) {
            return this.pushStack(gt.map(this, function(t, e) {
                return i.call(t, e, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: a,
        sort: [].sort,
        splice: [].splice
    }, gt.fn.init.prototype = gt.fn, gt.extend = gt.fn.extend = function() {
        var t, e, i, n, s, o, r = arguments[0] || {},
            a = 1,
            l = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[1] || {}, a = 2), "object" == typeof r || gt.isFunction(r) || (r = {}), l === a && (r = this, --a); a < l; a++)
            if (null != (s = arguments[a]))
                for (n in s) t = r[n], r !== (i = s[n]) && (c && i && (gt.isPlainObject(i) || (e = gt.isArray(i))) ? (e ? (e = !1, o = t && gt.isArray(t) ? t : []) : o = t && gt.isPlainObject(t) ? t : {}, r[n] = gt.extend(c, o, i)) : i !== x && (r[n] = i));
        return r
    }, gt.extend({
        noConflict: function(t) {
            return f.$ === gt && (f.$ = s), t && f.jQuery === gt && (f.jQuery = n), gt
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) {
            t ? gt.readyWait++ : gt.ready(!0)
        },
        ready: function(t) {
            if (!0 === t ? !--gt.readyWait : !gt.isReady) {
                if (!m.body) return setTimeout(gt.ready);
                (gt.isReady = !0) !== t && 0 < --gt.readyWait || (e.resolveWith(m, [gt]), gt.fn.trigger && gt(m).trigger("ready").off("ready"))
            }
        },
        isFunction: function(t) {
            return "function" === gt.type(t)
        },
        isArray: Array.isArray || function(t) {
            return "array" === gt.type(t)
        },
        isWindow: function(t) {
            return null != t && t == t.window
        },
        isNumeric: function(t) {
            return !isNaN(parseFloat(t)) && isFinite(t)
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? o[c.call(t)] || "object" : typeof t
        },
        isPlainObject: function(t) {
            if (!t || "object" !== gt.type(t) || t.nodeType || gt.isWindow(t)) return !1;
            try {
                if (t.constructor && !g.call(t, "constructor") && !g.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (t) {
                return !1
            }
            var e;
            for (e in t);
            return e === x || g.call(t, e)
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        error: function(t) {
            throw Error(t)
        },
        parseHTML: function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || m;
            var n = C.exec(t),
                s = !i && [];
            return n ? [e.createElement(n[1])] : (n = gt.buildFragment([t], e, s), s && gt(s).remove(), gt.merge([], n.childNodes))
        },
        parseJSON: function(t) {
            return f.JSON && f.JSON.parse ? f.JSON.parse(t) : null === t ? t : "string" == typeof t && ((t = gt.trim(t)) && T.test(t.replace(S, "@").replace(A, "]").replace(_, ""))) ? Function("return " + t)() : (gt.error("Invalid JSON: " + t), x)
        },
        parseXML: function(t) {
            var e;
            if (!t || "string" != typeof t) return null;
            try {
                f.DOMParser ? e = (new DOMParser).parseFromString(t, "text/xml") : ((e = new ActiveXObject("Microsoft.XMLDOM")).async = "false", e.loadXML(t))
            } catch (t) {
                e = x
            }
            return e && e.documentElement && !e.getElementsByTagName("parsererror").length || gt.error("Invalid XML: " + t), e
        },
        noop: function() {},
        globalEval: function(t) {
            t && gt.trim(t) && (f.execScript || function(t) {
                f.eval.call(f, t)
            })(t)
        },
        camelCase: function(t) {
            return t.replace(N, "ms-").replace(L, O)
        },
        nodeName: function(t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function(t, e, i) {
            var n = 0,
                s = t.length,
                o = D(t);
            if (i) {
                if (o)
                    for (; n < s && !1 !== e.apply(t[n], i); n++);
                else
                    for (n in t)
                        if (!1 === e.apply(t[n], i)) break
            } else if (o)
                for (; n < s && !1 !== e.call(t[n], n, t[n]); n++);
            else
                for (n in t)
                    if (!1 === e.call(t[n], n, t[n])) break; return t
        },
        trim: d && !d.call("\ufeffÂ ") ? function(t) {
            return null == t ? "" : d.call(t)
        } : function(t) {
            return null == t ? "" : (t + "").replace(b, "")
        },
        makeArray: function(t, e) {
            var i = e || [];
            return null != t && (D(Object(t)) ? gt.merge(i, "string" == typeof t ? [t] : t) : a.call(i, t)), i
        },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (l) return l.call(e, t, i);
                for (n = e.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, e) {
            var i = e.length,
                n = t.length,
                s = 0;
            if ("number" == typeof i)
                for (; s < i; s++) t[n++] = e[s];
            else
                for (; e[s] !== x;) t[n++] = e[s++];
            return t.length = n, t
        },
        grep: function(t, e, i) {
            var n = [],
                s = 0,
                o = t.length;
            for (i = !!i; s < o; s++) i !== !!e(t[s], s) && n.push(t[s]);
            return n
        },
        map: function(t, e, i) {
            var n, s = 0,
                o = t.length,
                r = [];
            if (D(t))
                for (; s < o; s++) null != (n = e(t[s], s, i)) && (r[r.length] = n);
            else
                for (s in t) null != (n = e(t[s], s, i)) && (r[r.length] = n);
            return y.apply([], r)
        },
        guid: 1,
        proxy: function(t, e) {
            var i, n, s;
            return "string" == typeof e && (s = t[e], e = t, t = s), gt.isFunction(t) ? (i = h.call(arguments, 2), (n = function() {
                return t.apply(e || this, i.concat(h.call(arguments)))
            }).guid = t.guid = t.guid || gt.guid++, n) : x
        },
        access: function(t, e, i, n, s, o, r) {
            var a = 0,
                l = t.length,
                c = null == i;
            if ("object" === gt.type(i))
                for (a in s = !0, i) gt.access(t, e, a, i[a], !0, o, r);
            else if (n !== x && (s = !0, gt.isFunction(n) || (r = !0), c && (r ? (e.call(t, n), e = null) : (c = e, e = function(t, e, i) {
                    return c.call(gt(t), i)
                })), e))
                for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
            return s ? t : c ? e.call(t) : l ? e(t[0], i) : o
        },
        now: function() {
            return (new Date).getTime()
        }
    }), gt.ready.promise = function(t) {
        if (!e)
            if (e = gt.Deferred(), "complete" === m.readyState) setTimeout(gt.ready);
            else if (m.addEventListener) m.addEventListener("DOMContentLoaded", k, !1), f.addEventListener("load", k, !1);
        else {
            m.attachEvent("onreadystatechange", k), f.attachEvent("onload", k);
            var i = !1;
            try {
                i = null == f.frameElement && m.documentElement
            } catch (t) {}
            i && i.doScroll && function e() {
                if (!gt.isReady) {
                    try {
                        i.doScroll("left")
                    } catch (t) {
                        return setTimeout(e, 50)
                    }
                    R(), gt.ready()
                }
            }()
        }
        return e.promise(t)
    }, gt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        o["[object " + e + "]"] = e.toLowerCase()
    }), i = gt(m);
    var P = {};
    gt.Callbacks = function(s) {
        var t, i;
        s = "string" == typeof s ? P[s] || (i = P[t = s] = {}, gt.each(t.match(E) || [], function(t, e) {
            i[e] = !0
        }), i) : gt.extend({}, s);
        var n, e, o, r, a, l, c = [],
            h = !s.once && [],
            u = function(t) {
                for (e = s.memory && t, o = !0, a = l || 0, l = 0, r = c.length, n = !0; c && a < r; a++)
                    if (!1 === c[a].apply(t[0], t[1]) && s.stopOnFalse) {
                        e = !1;
                        break
                    }
                n = !1, c && (h ? h.length && u(h.shift()) : e ? c = [] : d.disable())
            },
            d = {
                add: function() {
                    if (c) {
                        var t = c.length;
                        (function n(t) {
                            gt.each(t, function(t, e) {
                                var i = gt.type(e);
                                "function" === i ? s.unique && d.has(e) || c.push(e) : e && e.length && "string" !== i && n(e)
                            })
                        })(arguments), n ? r = c.length : e && (l = t, u(e))
                    }
                    return this
                },
                remove: function() {
                    return c && gt.each(arguments, function(t, e) {
                        for (var i; - 1 < (i = gt.inArray(e, c, i));) c.splice(i, 1), n && (i <= r && r--, i <= a && a--)
                    }), this
                },
                has: function(t) {
                    return t ? -1 < gt.inArray(t, c) : !(!c || !c.length)
                },
                empty: function() {
                    return c = [], this
                },
                disable: function() {
                    return c = h = e = x, this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return h = x, e || d.disable(), this
                },
                locked: function() {
                    return !h
                },
                fireWith: function(t, e) {
                    return e = [t, (e = e || []).slice ? e.slice() : e], !c || o && !h || (n ? h.push(e) : u(e)), this
                },
                fire: function() {
                    return d.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return d
    }, gt.extend({
        Deferred: function(t) {
            var r = [
                    ["resolve", "done", gt.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", gt.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", gt.Callbacks("memory")]
                ],
                s = "pending",
                a = {
                    state: function() {
                        return s
                    },
                    always: function() {
                        return l.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var o = arguments;
                        return gt.Deferred(function(s) {
                            gt.each(r, function(t, e) {
                                var i = e[0],
                                    n = gt.isFunction(o[t]) && o[t];
                                l[e[1]](function() {
                                    var t = n && n.apply(this, arguments);
                                    t && gt.isFunction(t.promise) ? t.promise().done(s.resolve).fail(s.reject).progress(s.notify) : s[i + "With"](this === a ? s.promise() : this, n ? [t] : arguments)
                                })
                            }), o = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? gt.extend(t, a) : a
                    }
                },
                l = {};
            return a.pipe = a.then, gt.each(r, function(t, e) {
                var i = e[2],
                    n = e[3];
                a[e[1]] = i.add, n && i.add(function() {
                    s = n
                }, r[1 ^ t][2].disable, r[2][2].lock), l[e[0]] = function() {
                    return l[e[0] + "With"](this === l ? a : this, arguments), this
                }, l[e[0] + "With"] = i.fireWith
            }), a.promise(l), t && t.call(l, l), l
        },
        when: function(t) {
            var s, e, i, n = 0,
                o = h.call(arguments),
                r = o.length,
                a = 1 !== r || t && gt.isFunction(t.promise) ? r : 0,
                l = 1 === a ? t : gt.Deferred(),
                c = function(e, i, n) {
                    return function(t) {
                        i[e] = this, n[e] = 1 < arguments.length ? h.call(arguments) : t, n === s ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                    }
                };
            if (1 < r)
                for (s = Array(r), e = Array(r), i = Array(r); n < r; n++) o[n] && gt.isFunction(o[n].promise) ? o[n].promise().done(c(n, i, o)).fail(l.reject).progress(c(n, e, s)) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    }), gt.support = function() {
        var o, t, e, i, n, s, r, a, l, c, h = m.createElement("div");
        if (h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = h.getElementsByTagName("*"), e = h.getElementsByTagName("a")[0], !t || !e || !t.length) return {};
        r = (n = m.createElement("select")).appendChild(m.createElement("option")), i = h.getElementsByTagName("input")[0], e.style.cssText = "top:1px;float:left;opacity:.5", o = {
            getSetAttribute: "t" !== h.className,
            leadingWhitespace: 3 === h.firstChild.nodeType,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !!h.getElementsByTagName("link").length,
            style: /top/.test(e.getAttribute("style")),
            hrefNormalized: "/a" === e.getAttribute("href"),
            opacity: /^0.5/.test(e.style.opacity),
            cssFloat: !!e.style.cssFloat,
            checkOn: !!i.value,
            optSelected: r.selected,
            enctype: !!m.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== m.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === m.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, i.checked = !0, o.noCloneChecked = i.cloneNode(!0).checked, n.disabled = !0, o.optDisabled = !r.disabled;
        try {
            delete h.test
        } catch (t) {
            o.deleteExpando = !1
        }
        for (c in (i = m.createElement("input")).setAttribute("value", ""), o.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), o.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), (s = m.createDocumentFragment()).appendChild(i), o.appendChecked = i.checked, o.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, h.attachEvent && (h.attachEvent("onclick", function() {
                o.noCloneEvent = !1
            }), h.cloneNode(!0).click()), {
                submit: !0,
                change: !0,
                focusin: !0
            }) h.setAttribute(a = "on" + c, "t"), o[c + "Bubbles"] = a in f || !1 === h.attributes[a].expando;
        return h.style.backgroundClip = "content-box", h.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === h.style.backgroundClip, gt(function() {
            var t, e, i, n = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                s = m.getElementsByTagName("body")[0];
            s && ((t = m.createElement("div")).style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(t).appendChild(h), h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (i = h.getElementsByTagName("td"))[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", o.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, h.innerHTML = "", h.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", o.boxSizing = 4 === h.offsetWidth, o.doesNotIncludeMarginInBodyOffset = 1 !== s.offsetTop, f.getComputedStyle && (o.pixelPosition = "1%" !== (f.getComputedStyle(h, null) || {}).top, o.boxSizingReliable = "4px" === (f.getComputedStyle(h, null) || {
                width: "4px"
            }).width, (e = h.appendChild(m.createElement("div"))).style.cssText = h.style.cssText = n, e.style.marginRight = e.style.width = "0", h.style.width = "1px", o.reliableMarginRight = !parseFloat((f.getComputedStyle(e, null) || {}).marginRight)), typeof h.style.zoom !== v && (h.innerHTML = "", h.style.cssText = n + "width:1px;padding:1px;display:inline;zoom:1", o.inlineBlockNeedsLayout = 3 === h.offsetWidth, h.style.display = "block", h.innerHTML = "<div></div>", h.firstChild.style.width = "5px", o.shrinkWrapBlocks = 3 !== h.offsetWidth, o.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(t), t = h = i = e = null)
        }), t = n = s = r = e = i = null, o
    }();
    var $ = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        I = /([A-Z])/g;

    function M(t, e, i, n) {
        if (gt.acceptData(t)) {
            var s, o, r = gt.expando,
                a = "string" == typeof e,
                l = t.nodeType,
                c = l ? gt.cache : t,
                h = l ? t[r] : t[r] && r;
            if (h && c[h] && (n || c[h].data) || !a || i !== x) return h || (l ? t[r] = h = u.pop() || gt.guid++ : h = r), c[h] || (c[h] = {}, l || (c[h].toJSON = gt.noop)), ("object" == typeof e || "function" == typeof e) && (n ? c[h] = gt.extend(c[h], e) : c[h].data = gt.extend(c[h].data, e)), s = c[h], n || (s.data || (s.data = {}), s = s.data), i !== x && (s[gt.camelCase(e)] = i), a ? null == (o = s[e]) && (o = s[gt.camelCase(e)]) : o = s, o
        }
    }

    function B(t, e, i) {
        if (gt.acceptData(t)) {
            var n, s, o, r = t.nodeType,
                a = r ? gt.cache : t,
                l = r ? t[gt.expando] : gt.expando;
            if (a[l]) {
                if (e && (o = i ? a[l] : a[l].data)) {
                    gt.isArray(e) ? e = e.concat(gt.map(e, gt.camelCase)) : e in o ? e = [e] : e = (e = gt.camelCase(e)) in o ? [e] : e.split(" ");
                    for (n = 0, s = e.length; n < s; n++) delete o[e[n]];
                    if (!(i ? H : gt.isEmptyObject)(o)) return
                }(i || (delete a[l].data, H(a[l]))) && (r ? gt.cleanData([t], !0) : gt.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null)
            }
        }
    }

    function F(t, e, i) {
        if (i === x && 1 === t.nodeType) {
            var n = "data-" + e.replace(I, "-$1").toLowerCase();
            if ("string" == typeof(i = t.getAttribute(n))) {
                try {
                    i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : $.test(i) ? gt.parseJSON(i) : i)
                } catch (t) {}
                gt.data(t, e, i)
            } else i = x
        }
        return i
    }

    function H(t) {
        var e;
        for (e in t)
            if (("data" !== e || !gt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }
    gt.extend({
        cache: {},
        expando: "jQuery" + (r + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(t) {
            return !!(t = t.nodeType ? gt.cache[t[gt.expando]] : t[gt.expando]) && !H(t)
        },
        data: function(t, e, i) {
            return M(t, e, i)
        },
        removeData: function(t, e) {
            return B(t, e)
        },
        _data: function(t, e, i) {
            return M(t, e, i, !0)
        },
        _removeData: function(t, e) {
            return B(t, e, !0)
        },
        acceptData: function(t) {
            if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
            var e = t.nodeName && gt.noData[t.nodeName.toLowerCase()];
            return !e || !0 !== e && t.getAttribute("classid") === e
        }
    }), gt.fn.extend({
        data: function(e, t) {
            var i, n, s = this[0],
                o = 0,
                r = null;
            if (e === x) {
                if (this.length && (r = gt.data(s), 1 === s.nodeType && !gt._data(s, "parsedAttrs"))) {
                    for (i = s.attributes; i.length > o; o++)(n = i[o].name).indexOf("data-") || (n = gt.camelCase(n.slice(5)), F(s, n, r[n]));
                    gt._data(s, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof e ? this.each(function() {
                gt.data(this, e)
            }) : gt.access(this, function(t) {
                return t === x ? s ? F(s, e, gt.data(s, e)) : null : (this.each(function() {
                    gt.data(this, e, t)
                }), x)
            }, null, t, 1 < arguments.length, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                gt.removeData(this, t)
            })
        }
    }), gt.extend({
        queue: function(t, e, i) {
            var n;
            return t ? (e = (e || "fx") + "queue", n = gt._data(t, e), i && (!n || gt.isArray(i) ? n = gt._data(t, e, gt.makeArray(i)) : n.push(i)), n || []) : x
        },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = gt.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = gt._queueHooks(t, e);
            "inprogress" === s && (s = i.shift(), n--), (o.cur = s) && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, function() {
                gt.dequeue(t, e)
            }, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) {
            var i = e + "queueHooks";
            return gt._data(t, i) || gt._data(t, i, {
                empty: gt.Callbacks("once memory").add(function() {
                    gt._removeData(t, e + "queue"), gt._removeData(t, i)
                })
            })
        }
    }), gt.fn.extend({
        queue: function(e, i) {
            var t = 2;
            return "string" != typeof e && (i = e, e = "fx", t--), t > arguments.length ? gt.queue(this[0], e) : i === x ? this : this.each(function() {
                var t = gt.queue(this, e, i);
                gt._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && gt.dequeue(this, e)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                gt.dequeue(this, t)
            })
        },
        delay: function(n, t) {
            return n = gt.fx && gt.fx.speeds[n] || n, t = t || "fx", this.queue(t, function(t, e) {
                var i = setTimeout(t, n);
                e.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var i, n = 1,
                s = gt.Deferred(),
                o = this,
                r = this.length,
                a = function() {
                    --n || s.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = x), t = t || "fx"; r--;)(i = gt._data(o[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
            return a(), s.promise(e)
        }
    });
    var j, z, W = /[\t\r\n]/g,
        q = /\r/g,
        V = /^(?:input|select|textarea|button|object)$/i,
        U = /^(?:a|area)$/i,
        G = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
        X = /^(?:checked|selected)$/i,
        Q = gt.support.getSetAttribute,
        Y = gt.support.input;
    gt.fn.extend({
        attr: function(t, e) {
            return gt.access(this, gt.attr, t, e, 1 < arguments.length)
        },
        removeAttr: function(t) {
            return this.each(function() {
                gt.removeAttr(this, t)
            })
        },
        prop: function(t, e) {
            return gt.access(this, gt.prop, t, e, 1 < arguments.length)
        },
        removeProp: function(t) {
            return t = gt.propFix[t] || t, this.each(function() {
                try {
                    this[t] = x, delete this[t]
                } catch (t) {}
            })
        },
        addClass: function(e) {
            var t, i, n, s, o, r = 0,
                a = this.length,
                l = "string" == typeof e && e;
            if (gt.isFunction(e)) return this.each(function(t) {
                gt(this).addClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(E) || []; r < a; r++)
                    if (n = 1 === (i = this[r]).nodeType && (i.className ? (" " + i.className + " ").replace(W, " ") : " ")) {
                        for (o = 0; s = t[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        i.className = gt.trim(n)
                    }
            return this
        },
        removeClass: function(e) {
            var t, i, n, s, o, r = 0,
                a = this.length,
                l = 0 === arguments.length || "string" == typeof e && e;
            if (gt.isFunction(e)) return this.each(function(t) {
                gt(this).removeClass(e.call(this, t, this.className))
            });
            if (l)
                for (t = (e || "").match(E) || []; r < a; r++)
                    if (n = 1 === (i = this[r]).nodeType && (i.className ? (" " + i.className + " ").replace(W, " ") : "")) {
                        for (o = 0; s = t[o++];)
                            for (; 0 <= n.indexOf(" " + s + " ");) n = n.replace(" " + s + " ", " ");
                        i.className = e ? gt.trim(n) : ""
                    }
            return this
        },
        toggleClass: function(o, r) {
            var a = typeof o,
                l = "boolean" == typeof r;
            return gt.isFunction(o) ? this.each(function(t) {
                gt(this).toggleClass(o.call(this, t, this.className, r), r)
            }) : this.each(function() {
                if ("string" === a)
                    for (var t, e = 0, i = gt(this), n = r, s = o.match(E) || []; t = s[e++];) n = l ? n : !i.hasClass(t), i[n ? "addClass" : "removeClass"](t);
                else(a === v || "boolean" === a) && (this.className && gt._data(this, "__className__", this.className), this.className = this.className || !1 === o ? "" : gt._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
                if (1 === this[i].nodeType && 0 <= (" " + this[i].className + " ").replace(W, " ").indexOf(e)) return !0;
            return !1
        },
        val: function(n) {
            var t, s, o, e = this[0];
            return arguments.length ? (o = gt.isFunction(n), this.each(function(t) {
                var e, i = gt(this);
                1 === this.nodeType && (null == (e = o ? n.call(this, t, i.val()) : n) ? e = "" : "number" == typeof e ? e += "" : gt.isArray(e) && (e = gt.map(e, function(t) {
                    return null == t ? "" : t + ""
                })), (s = gt.valHooks[this.type] || gt.valHooks[this.nodeName.toLowerCase()]) && "set" in s && s.set(this, e, "value") !== x || (this.value = e))
            })) : e ? (s = gt.valHooks[e.type] || gt.valHooks[e.nodeName.toLowerCase()]) && "get" in s && (t = s.get(e, "value")) !== x ? t : "string" == typeof(t = e.value) ? t.replace(q, "") : null == t ? "" : t : void 0
        }
    }), gt.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = t.attributes.value;
                    return !e || e.specified ? t.value : t.text
                }
            },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || s < 0, r = o ? null : [], a = o ? s + 1 : n.length, l = s < 0 ? a : o ? s : 0; l < a; l++)
                        if (!(!(i = n[l]).selected && l !== s || (gt.support.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && gt.nodeName(i.parentNode, "optgroup"))) {
                            if (e = gt(i).val(), o) return e;
                            r.push(e)
                        }
                    return r
                },
                set: function(t, e) {
                    var i = gt.makeArray(e);
                    return gt(t).find("option").each(function() {
                        this.selected = 0 <= gt.inArray(gt(this).val(), i)
                    }), i.length || (t.selectedIndex = -1), i
                }
            }
        },
        attr: function(t, e, i) {
            var n, s, o, r = t.nodeType;
            if (t && 3 !== r && 8 !== r && 2 !== r) return typeof t.getAttribute === v ? gt.prop(t, e, i) : ((s = 1 !== r || !gt.isXMLDoc(t)) && (e = e.toLowerCase(), n = gt.attrHooks[e] || (G.test(e) ? z : j)), i === x ? n && s && "get" in n && null !== (o = n.get(t, e)) ? o : (typeof t.getAttribute !== v && (o = t.getAttribute(e)), null == o ? x : o) : null !== i ? n && s && "set" in n && (o = n.set(t, i, e)) !== x ? o : (t.setAttribute(e, i + ""), i) : (gt.removeAttr(t, e), x))
        },
        removeAttr: function(t, e) {
            var i, n, s = 0,
                o = e && e.match(E);
            if (o && 1 === t.nodeType)
                for (; i = o[s++];) n = gt.propFix[i] || i, G.test(i) ? !Q && X.test(i) ? t[gt.camelCase("default-" + i)] = t[n] = !1 : t[n] = !1 : gt.attr(t, i, ""), t.removeAttribute(Q ? i : n)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!gt.support.radioValue && "radio" === e && gt.nodeName(t, "input")) {
                        var i = t.value;
                        return t.setAttribute("type", e), i && (t.value = i), e
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            for: "htmlFor",
            class: "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function(t, e, i) {
            var n, s, o = t.nodeType;
            if (t && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !gt.isXMLDoc(t)) && (e = gt.propFix[e] || e, s = gt.propHooks[e]), i !== x ? s && "set" in s && (n = s.set(t, i, e)) !== x ? n : t[e] = i : s && "get" in s && null !== (n = s.get(t, e)) ? n : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = t.getAttributeNode("tabindex");
                    return e && e.specified ? parseInt(e.value, 10) : V.test(t.nodeName) || U.test(t.nodeName) && t.href ? 0 : x
                }
            }
        }
    }), z = {
        get: function(t, e) {
            var i = gt.prop(t, e),
                n = "boolean" == typeof i && t.getAttribute(e),
                s = "boolean" == typeof i ? Y && Q ? null != n : X.test(e) ? t[gt.camelCase("default-" + e)] : !!n : t.getAttributeNode(e);
            return s && !1 !== s.value ? e.toLowerCase() : x
        },
        set: function(t, e, i) {
            return !1 === e ? gt.removeAttr(t, i) : Y && Q || !X.test(i) ? t.setAttribute(!Q && gt.propFix[i] || i, i) : t[gt.camelCase("default-" + i)] = t[i] = !0, i
        }
    }, Y && Q || (gt.attrHooks.value = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return gt.nodeName(t, "input") ? t.defaultValue : i && i.specified ? i.value : x
        },
        set: function(t, e, i) {
            return gt.nodeName(t, "input") ? (t.defaultValue = e, x) : j && j.set(t, e, i)
        }
    }), Q || (j = gt.valHooks.button = {
        get: function(t, e) {
            var i = t.getAttributeNode(e);
            return i && ("id" === e || "name" === e || "coords" === e ? "" !== i.value : i.specified) ? i.value : x
        },
        set: function(t, e, i) {
            var n = t.getAttributeNode(i);
            return n || t.setAttributeNode(n = t.ownerDocument.createAttribute(i)), n.value = e += "", "value" === i || e === t.getAttribute(i) ? e : x
        }
    }, gt.attrHooks.contenteditable = {
        get: j.get,
        set: function(t, e, i) {
            j.set(t, "" !== e && e, i)
        }
    }, gt.each(["width", "height"], function(t, i) {
        gt.attrHooks[i] = gt.extend(gt.attrHooks[i], {
            set: function(t, e) {
                return "" === e ? (t.setAttribute(i, "auto"), e) : x
            }
        })
    })), gt.support.hrefNormalized || (gt.each(["href", "src", "width", "height"], function(t, i) {
        gt.attrHooks[i] = gt.extend(gt.attrHooks[i], {
            get: function(t) {
                var e = t.getAttribute(i, 2);
                return null == e ? x : e
            }
        })
    }), gt.each(["href", "src"], function(t, e) {
        gt.propHooks[e] = {
            get: function(t) {
                return t.getAttribute(e, 4)
            }
        }
    })), gt.support.style || (gt.attrHooks.style = {
        get: function(t) {
            return t.style.cssText || x
        },
        set: function(t, e) {
            return t.style.cssText = e + ""
        }
    }), gt.support.optSelected || (gt.propHooks.selected = gt.extend(gt.propHooks.selected, {
        get: function(t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        }
    })), gt.support.enctype || (gt.propFix.enctype = "encoding"), gt.support.checkOn || gt.each(["radio", "checkbox"], function() {
        gt.valHooks[this] = {
            get: function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            }
        }
    }), gt.each(["radio", "checkbox"], function() {
        gt.valHooks[this] = gt.extend(gt.valHooks[this], {
            set: function(t, e) {
                return gt.isArray(e) ? t.checked = 0 <= gt.inArray(gt(t).val(), e) : x
            }
        })
    });
    var K = /^(?:input|select|textarea)$/i,
        Z = /^key/,
        J = /^(?:mouse|contextmenu)|click/,
        tt = /^(?:focusinfocus|focusoutblur)$/,
        et = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return !0
    }

    function nt() {
        return !1
    }
    gt.event = {
            global: {},
            add: function(t, e, i, n, s) {
                var o, r, a, l, c, h, u, d, p, f, m, g = gt._data(t);
                if (g) {
                    for (i.handler && (i = (l = i).handler, s = l.selector), i.guid || (i.guid = gt.guid++), (r = g.events) || (r = g.events = {}), (h = g.handle) || ((h = g.handle = function(t) {
                            return typeof gt === v || t && gt.event.triggered === t.type ? x : gt.event.dispatch.apply(h.elem, arguments)
                        }).elem = t), a = (e = (e || "").match(E) || [""]).length; a--;) p = m = (o = et.exec(e[a]) || [])[1], f = (o[2] || "").split(".").sort(), c = gt.event.special[p] || {}, p = (s ? c.delegateType : c.bindType) || p, c = gt.event.special[p] || {}, u = gt.extend({
                        type: p,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: s,
                        needsContext: s && gt.expr.match.needsContext.test(s),
                        namespace: f.join(".")
                    }, l), (d = r[p]) || ((d = r[p] = []).delegateCount = 0, c.setup && !1 !== c.setup.call(t, n, f, h) || (t.addEventListener ? t.addEventListener(p, h, !1) : t.attachEvent && t.attachEvent("on" + p, h))), c.add && (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? d.splice(d.delegateCount++, 0, u) : d.push(u), gt.event.global[p] = !0;
                    t = null
                }
            },
            remove: function(t, e, i, n, s) {
                var o, r, a, l, c, h, u, d, p, f, m, g = gt.hasData(t) && gt._data(t);
                if (g && (h = g.events)) {
                    for (c = (e = (e || "").match(E) || [""]).length; c--;)
                        if (p = m = (a = et.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), p) {
                            for (u = gt.event.special[p] || {}, d = h[p = (n ? u.delegateType : u.bindType) || p] || [], a = a[2] && RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) r = d[o], !s && m !== r.origType || i && i.guid !== r.guid || a && !a.test(r.namespace) || n && n !== r.selector && ("**" !== n || !r.selector) || (d.splice(o, 1), r.selector && d.delegateCount--, u.remove && u.remove.call(t, r));
                            l && !d.length && (u.teardown && !1 !== u.teardown.call(t, f, g.handle) || gt.removeEvent(t, p, g.handle), delete h[p])
                        } else
                            for (p in h) gt.event.remove(t, p + e[c], i, n, !0);
                    gt.isEmptyObject(h) && (delete g.handle, gt._removeData(t, "events"))
                }
            },
            trigger: function(t, e, i, n) {
                var s, o, r, a, l, c, h, u = [i || m],
                    d = g.call(t, "type") ? t.type : t,
                    p = g.call(t, "namespace") ? t.namespace.split(".") : [];
                if (r = c = i = i || m, 3 !== i.nodeType && 8 !== i.nodeType && !tt.test(d + gt.event.triggered) && (0 <= d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), o = d.indexOf(":") < 0 && "on" + d, (t = t[gt.expando] ? t : new gt.Event(d, "object" == typeof t && t)).isTrigger = !0, t.namespace = p.join("."), t.namespace_re = t.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = x, t.target || (t.target = i), e = null == e ? [t] : gt.makeArray(e, [t]), l = gt.event.special[d] || {}, n || !l.trigger || !1 !== l.trigger.apply(i, e))) {
                    if (!n && !l.noBubble && !gt.isWindow(i)) {
                        for (a = l.delegateType || d, tt.test(a + d) || (r = r.parentNode); r; r = r.parentNode) u.push(r), c = r;
                        c === (i.ownerDocument || m) && u.push(c.defaultView || c.parentWindow || f)
                    }
                    for (h = 0;
                        (r = u[h++]) && !t.isPropagationStopped();) t.type = 1 < h ? a : l.bindType || d, (s = (gt._data(r, "events") || {})[t.type] && gt._data(r, "handle")) && s.apply(r, e), (s = o && r[o]) && gt.acceptData(r) && s.apply && !1 === s.apply(r, e) && t.preventDefault();
                    if (t.type = d, !(n || t.isDefaultPrevented() || l._default && !1 !== l._default.apply(i.ownerDocument, e) || "click" === d && gt.nodeName(i, "a")) && gt.acceptData(i) && o && i[d] && !gt.isWindow(i)) {
                        (c = i[o]) && (i[o] = null), gt.event.triggered = d;
                        try {
                            i[d]()
                        } catch (t) {}
                        gt.event.triggered = x, c && (i[o] = c)
                    }
                    return t.result
                }
            },
            dispatch: function(t) {
                t = gt.event.fix(t);
                var e, i, n, s, o, r = [],
                    a = h.call(arguments),
                    l = (gt._data(this, "events") || {})[t.type] || [],
                    c = gt.event.special[t.type] || {};
                if ((a[0] = t).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, t)) {
                    for (r = gt.event.handlers.call(this, t, l), e = 0;
                        (s = r[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = s.elem, o = 0;
                            (n = s.handlers[o++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(n.namespace)) && (t.handleObj = n, t.data = n.data, (i = ((gt.event.special[n.origType] || {}).handle || n.handler).apply(s.elem, a)) !== x && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, s, o, r = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && (!t.button || "click" !== t.type))
                    for (; l != this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (s = [], o = 0; o < a; o++) s[i = (n = e[o]).selector + " "] === x && (s[i] = n.needsContext ? 0 <= gt(i, this).index(l) : gt.find(i, this, null, [l]).length), s[i] && s.push(n);
                            s.length && r.push({
                                elem: l,
                                handlers: s
                            })
                        }
                return e.length > a && r.push({
                    elem: this,
                    handlers: e.slice(a)
                }), r
            },
            fix: function(t) {
                if (t[gt.expando]) return t;
                var e, i, n, s = t.type,
                    o = t,
                    r = this.fixHooks[s];
                for (r || (this.fixHooks[s] = r = J.test(s) ? this.mouseHooks : Z.test(s) ? this.keyHooks : {}), n = r.props ? this.props.concat(r.props) : this.props, t = new gt.Event(o), e = n.length; e--;) t[i = n[e]] = o[i];
                return t.target || (t.target = o.srcElement || m), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, r.filter ? r.filter(t, o) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, s, o = e.button,
                        r = e.fromElement;
                    return null == t.pageX && null != e.clientX && (s = (n = t.target.ownerDocument || m).documentElement, i = n.body, t.pageX = e.clientX + (s && s.scrollLeft || i && i.scrollLeft || 0) - (s && s.clientLeft || i && i.clientLeft || 0), t.pageY = e.clientY + (s && s.scrollTop || i && i.scrollTop || 0) - (s && s.clientTop || i && i.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? e.toElement : r), t.which || o === x || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    trigger: function() {
                        return gt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : x
                    }
                },
                focus: {
                    trigger: function() {
                        if (this !== m.activeElement && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === m.activeElement && this.blur ? (this.blur(), !1) : x
                    },
                    delegateType: "focusout"
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== x && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, i, n) {
                var s = gt.extend(new gt.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? gt.event.trigger(s, null, e) : gt.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
            }
        }, gt.removeEvent = m.removeEventListener ? function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function(t, e, i) {
            var n = "on" + e;
            t.detachEvent && (typeof t[n] === v && (t[n] = null), t.detachEvent(n, i))
        }, gt.Event = function(t, e) {
            return this instanceof gt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || t.getPreventDefault && t.getPreventDefault() ? it : nt) : this.type = t, e && gt.extend(this, e), this.timeStamp = t && t.timeStamp || gt.now(), this[gt.expando] = !0, x) : new gt.Event(t, e)
        }, gt.Event.prototype = {
            isDefaultPrevented: nt,
            isPropagationStopped: nt,
            isImmediatePropagationStopped: nt,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = it, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = it, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = it, this.stopPropagation()
            }
        }, gt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, s) {
            gt.event.special[t] = {
                delegateType: s,
                bindType: s,
                handle: function(t) {
                    var e, i = t.relatedTarget,
                        n = t.handleObj;
                    return (!i || i !== this && !gt.contains(this, i)) && (t.type = n.origType, e = n.handler.apply(this, arguments), t.type = s), e
                }
            }
        }), gt.support.submitBubbles || (gt.event.special.submit = {
            setup: function() {
                return !gt.nodeName(this, "form") && (gt.event.add(this, "click._submit keypress._submit", function(t) {
                    var e = t.target,
                        i = gt.nodeName(e, "input") || gt.nodeName(e, "button") ? e.form : x;
                    i && !gt._data(i, "submitBubbles") && (gt.event.add(i, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), gt._data(i, "submitBubbles", !0))
                }), x)
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && gt.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return !gt.nodeName(this, "form") && (gt.event.remove(this, "._submit"), x)
            }
        }), gt.support.changeBubbles || (gt.event.special.change = {
            setup: function() {
                return K.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (gt.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), gt.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), gt.event.simulate("change", this, t, !0)
                })), !1) : (gt.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    K.test(e.nodeName) && !gt._data(e, "changeBubbles") && (gt.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || gt.event.simulate("change", this.parentNode, t, !0)
                    }), gt._data(e, "changeBubbles", !0))
                }), x)
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : x
            },
            teardown: function() {
                return gt.event.remove(this, "._change"), !K.test(this.nodeName)
            }
        }), gt.support.focusinBubbles || gt.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = 0,
                n = function(t) {
                    gt.event.simulate(e, t.target, gt.event.fix(t), !0)
                };
            gt.event.special[e] = {
                setup: function() {
                    0 == i++ && m.addEventListener(t, n, !0)
                },
                teardown: function() {
                    0 == --i && m.removeEventListener(t, n, !0)
                }
            }
        }), gt.fn.extend({
            on: function(t, e, i, n, s) {
                var o, r;
                if ("object" == typeof t) {
                    for (o in "string" != typeof e && (i = i || e, e = x), t) this.on(o, e, i, t[o], s);
                    return this
                }
                if (null == i && null == n ? (n = e, i = e = x) : null == n && ("string" == typeof e ? (n = i, i = x) : (n = i, i = e, e = x)), !1 === n) n = nt;
                else if (!n) return this;
                return 1 === s && (r = n, (n = function(t) {
                    return gt().off(t), r.apply(this, arguments)
                }).guid = r.guid || (r.guid = gt.guid++)), this.each(function() {
                    gt.event.add(this, t, n, i, e)
                })
            },
            one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, s;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, gt(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (s in t) this.off(s, e, t[s]);
                    return this
                }
                return (!1 === e || "function" == typeof e) && (i = e, e = x), !1 === i && (i = nt), this.each(function() {
                    gt.event.remove(this, t, i, e)
                })
            },
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            trigger: function(t, e) {
                return this.each(function() {
                    gt.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? gt.event.trigger(t, e, i, !0) : x
            }
        }),
        function(i, n) {
            var t, C, T, o, e, f, c, x, m, E, s, g, v, r, a, y, h, _ = "sizzle" + -new Date,
                b = i.document,
                w = {},
                S = 0,
                u = 0,
                l = tt(),
                d = tt(),
                p = tt(),
                A = typeof n,
                N = [],
                L = N.pop,
                O = N.push,
                k = N.slice,
                R = N.indexOf || function(t) {
                    for (var e = 0, i = this.length; e < i; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                D = "[\\x20\\t\\r\\n\\f]",
                P = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                $ = P.replace("w", "w#"),
                I = "\\[" + D + "*(" + P + ")" + D + "*(?:([*^$|!~]?=)" + D + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + $ + ")|)|)" + D + "*\\]",
                M = ":(" + P + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + I.replace(3, 8) + ")*)|.*)\\)|)",
                B = RegExp("^" + D + "+|((?:^|[^\\\\])(?:\\\\.)*)" + D + "+$", "g"),
                F = RegExp("^" + D + "*," + D + "*"),
                H = RegExp("^" + D + "*([\\x20\\t\\r\\n\\f>+~])" + D + "*"),
                j = RegExp(M),
                z = RegExp("^" + $ + "$"),
                W = {
                    ID: RegExp("^#(" + P + ")"),
                    CLASS: RegExp("^\\.(" + P + ")"),
                    NAME: RegExp("^\\[name=['\"]?(" + P + ")['\"]?\\]"),
                    TAG: RegExp("^(" + P.replace("w", "w*") + ")"),
                    ATTR: RegExp("^" + I),
                    PSEUDO: RegExp("^" + M),
                    CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + D + "*(even|odd|(([+-]|)(\\d*)n|)" + D + "*(?:([+-]|)" + D + "*(\\d+)|))" + D + "*\\)|)", "i"),
                    needsContext: RegExp("^" + D + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + D + "*((?:-\\d)?\\d*)" + D + "*\\)|)(?=[^-]|$)", "i")
                },
                q = /[\x20\t\r\n\f]*[+~]/,
                V = /^[^{]+\{\s*\[native code/,
                U = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                G = /^(?:input|select|textarea|button)$/i,
                X = /^h\d$/i,
                Q = /'|\\/g,
                Y = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                K = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
                Z = function(t, e) {
                    var i = "0x" + e - 65536;
                    return i != i ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i)
                };
            try {
                k.call(b.documentElement.childNodes, 0)[0].nodeType
            } catch (t) {
                k = function(t) {
                    for (var e, i = []; e = this[t++];) i.push(e);
                    return i
                }
            }

            function J(t) {
                return V.test(t + "")
            }

            function tt() {
                var i, n = [];
                return i = function(t, e) {
                    return n.push(t += " ") > T.cacheLength && delete i[n.shift()], i[t] = e
                }
            }

            function et(t) {
                return t[_] = !0, t
            }

            function it(t) {
                var e = E.createElement("div");
                try {
                    return t(e)
                } catch (t) {
                    return !1
                } finally {
                    e = null
                }
            }

            function nt(t, e, i, n) {
                var s, o, r, a, l, c, h, u, d, p;
                if ((e ? e.ownerDocument || e : b) !== E && m(e), i = i || [], !t || "string" != typeof t) return i;
                if (1 !== (a = (e = e || E).nodeType) && 9 !== a) return [];
                if (!g && !n) {
                    if (s = U.exec(t))
                        if (r = s[1]) {
                            if (9 === a) {
                                if (!(o = e.getElementById(r)) || !o.parentNode) return i;
                                if (o.id === r) return i.push(o), i
                            } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && y(e, o) && o.id === r) return i.push(o), i
                        } else {
                            if (s[2]) return O.apply(i, k.call(e.getElementsByTagName(t), 0)), i;
                            if ((r = s[3]) && w.getByClassName && e.getElementsByClassName) return O.apply(i, k.call(e.getElementsByClassName(r), 0)), i
                        }
                    if (w.qsa && !v.test(t)) {
                        if (h = !0, u = _, d = e, p = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                            for (c = lt(t), (h = e.getAttribute("id")) ? u = h.replace(Q, "\\$&") : e.setAttribute("id", u), u = "[id='" + u + "'] ", l = c.length; l--;) c[l] = u + ct(c[l]);
                            d = q.test(t) && e.parentNode || e, p = c.join(",")
                        }
                        if (p) try {
                            return O.apply(i, k.call(d.querySelectorAll(p), 0)), i
                        } catch (t) {} finally {
                            h || e.removeAttribute("id")
                        }
                    }
                }
                return function(t, e, i, n) {
                    var s, o, r, a, l, c = lt(t);
                    if (!n && 1 === c.length) {
                        if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (r = o[0]).type && 9 === e.nodeType && !g && T.relative[o[1].type]) {
                            if (!(e = T.find.ID(r.matches[0].replace(K, Z), e)[0])) return i;
                            t = t.slice(o.shift().value.length)
                        }
                        for (s = W.needsContext.test(t) ? 0 : o.length; s-- && (r = o[s], !T.relative[a = r.type]);)
                            if ((l = T.find[a]) && (n = l(r.matches[0].replace(K, Z), q.test(o[0].type) && e.parentNode || e))) {
                                if (o.splice(s, 1), !(t = n.length && ct(o))) return O.apply(i, k.call(n, 0)), i;
                                break
                            }
                    }
                    return f(t, c)(n, e, g, i, q.test(t)), i
                }(t.replace(B, "$1"), e, i, n)
            }

            function st(t, e) {
                var i = e && t,
                    n = i && (~e.sourceIndex || 1 << 31) - (~t.sourceIndex || 1 << 31);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function ot(e) {
                return function(t) {
                    return "input" === t.nodeName.toLowerCase() && t.type === e
                }
            }

            function rt(i) {
                return function(t) {
                    var e = t.nodeName.toLowerCase();
                    return ("input" === e || "button" === e) && t.type === i
                }
            }

            function at(r) {
                return et(function(o) {
                    return o = +o, et(function(t, e) {
                        for (var i, n = r([], t.length, o), s = n.length; s--;) t[i = n[s]] && (t[i] = !(e[i] = t[i]))
                    })
                })
            }
            for (t in e = nt.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, m = nt.setDocument = function(t) {
                    var l = t ? t.ownerDocument || t : b;
                    return l !== E && 9 === l.nodeType && l.documentElement && (s = (E = l).documentElement, g = e(l), w.tagNameNoComments = it(function(t) {
                        return t.appendChild(l.createComment("")), !t.getElementsByTagName("*").length
                    }), w.attributes = it(function(t) {
                        t.innerHTML = "<select></select>";
                        var e = typeof t.lastChild.getAttribute("multiple");
                        return "boolean" !== e && "string" !== e
                    }), w.getByClassName = it(function(t) {
                        return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!t.getElementsByClassName || !t.getElementsByClassName("e").length) && (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length)
                    }), w.getByName = it(function(t) {
                        t.id = _ + 0, t.innerHTML = "<a name='" + _ + "'></a><div name='" + _ + "'></div>", s.insertBefore(t, s.firstChild);
                        var e = l.getElementsByName && l.getElementsByName(_).length === 2 + l.getElementsByName(_ + 0).length;
                        return w.getIdNotName = !l.getElementById(_), s.removeChild(t), e
                    }), T.attrHandle = it(function(t) {
                        return t.innerHTML = "<a href='#'></a>", t.firstChild && typeof t.firstChild.getAttribute !== A && "#" === t.firstChild.getAttribute("href")
                    }) ? {} : {
                        href: function(t) {
                            return t.getAttribute("href", 2)
                        },
                        type: function(t) {
                            return t.getAttribute("type")
                        }
                    }, w.getIdNotName ? (T.find.ID = function(t, e) {
                        if (typeof e.getElementById !== A && !g) {
                            var i = e.getElementById(t);
                            return i && i.parentNode ? [i] : []
                        }
                    }, T.filter.ID = function(t) {
                        var e = t.replace(K, Z);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (T.find.ID = function(t, e) {
                        if (typeof e.getElementById !== A && !g) {
                            var i = e.getElementById(t);
                            return i ? i.id === t || typeof i.getAttributeNode !== A && i.getAttributeNode("id").value === t ? [i] : n : []
                        }
                    }, T.filter.ID = function(t) {
                        var i = t.replace(K, Z);
                        return function(t) {
                            var e = typeof t.getAttributeNode !== A && t.getAttributeNode("id");
                            return e && e.value === i
                        }
                    }), T.find.TAG = w.tagNameNoComments ? function(t, e) {
                        return typeof e.getElementsByTagName !== A ? e.getElementsByTagName(t) : n
                    } : function(t, e) {
                        var i, n = [],
                            s = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = o[s++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return o
                    }, T.find.NAME = w.getByName && function(t, e) {
                        return typeof e.getElementsByName !== A ? e.getElementsByName(name) : n
                    }, T.find.CLASS = w.getByClassName && function(t, e) {
                        return typeof e.getElementsByClassName === A || g ? n : e.getElementsByClassName(t)
                    }, r = [], v = [":focus"], (w.qsa = J(l.querySelectorAll)) && (it(function(t) {
                        t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || v.push("\\[" + D + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || v.push(":checked")
                    }), it(function(t) {
                        t.innerHTML = "<input type='hidden' i=''/>", t.querySelectorAll("[i^='']").length && v.push("[*^$]=" + D + "*(?:\"\"|'')"), t.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                    })), (w.matchesSelector = J(a = s.matchesSelector || s.mozMatchesSelector || s.webkitMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && it(function(t) {
                        w.disconnectedMatch = a.call(t, "div"), a.call(t, "[s!='']:x"), r.push("!=", M)
                    }), v = RegExp(v.join("|")), r = RegExp(r.join("|")), y = J(s.contains) || s.compareDocumentPosition ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, h = s.compareDocumentPosition ? function(t, e) {
                        var i;
                        return t === e ? (c = !0, 0) : (i = e.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(e)) ? 1 & i || t.parentNode && 11 === t.parentNode.nodeType ? t === l || y(b, t) ? -1 : e === l || y(b, e) ? 1 : 0 : 4 & i ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                    } : function(t, e) {
                        var i, n = 0,
                            s = t.parentNode,
                            o = e.parentNode,
                            r = [t],
                            a = [e];
                        if (t === e) return c = !0, 0;
                        if (!s || !o) return t === l ? -1 : e === l ? 1 : s ? -1 : o ? 1 : 0;
                        if (s === o) return st(t, e);
                        for (i = t; i = i.parentNode;) r.unshift(i);
                        for (i = e; i = i.parentNode;) a.unshift(i);
                        for (; r[n] === a[n];) n++;
                        return n ? st(r[n], a[n]) : r[n] === b ? -1 : a[n] === b ? 1 : 0
                    }, c = !1, [0, 0].sort(h), w.detectDuplicates = c), E
                }, nt.matches = function(t, e) {
                    return nt(t, null, null, e)
                }, nt.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== E && m(t), e = e.replace(Y, "='$1']"), !(!w.matchesSelector || g || r && r.test(e) || v.test(e))) try {
                        var i = a.call(t, e);
                        if (i || w.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
                    } catch (t) {}
                    return 0 < nt(e, E, null, [t]).length
                }, nt.contains = function(t, e) {
                    return (t.ownerDocument || t) !== E && m(t), y(t, e)
                }, nt.attr = function(t, e) {
                    var i;
                    return (t.ownerDocument || t) !== E && m(t), g || (e = e.toLowerCase()), (i = T.attrHandle[e]) ? i(t) : g || w.attributes ? t.getAttribute(e) : ((i = t.getAttributeNode(e)) || t.getAttribute(e)) && !0 === t[e] ? e : i && i.specified ? i.value : null
                }, nt.error = function(t) {
                    throw Error("Syntax error, unrecognized expression: " + t)
                }, nt.uniqueSort = function(t) {
                    var e, i = [],
                        n = 1,
                        s = 0;
                    if (c = !w.detectDuplicates, t.sort(h), c) {
                        for (; e = t[n]; n++) e === t[n - 1] && (s = i.push(n));
                        for (; s--;) t.splice(i[s], 1)
                    }
                    return t
                }, o = nt.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        s = t.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += o(t)
                        } else if (3 === s || 4 === s) return t.nodeValue
                    } else
                        for (; e = t[n]; n++) i += o(e);
                    return i
                }, T = nt.selectors = {
                    cacheLength: 50,
                    createPseudo: et,
                    match: W,
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(K, Z), t[3] = (t[4] || t[5] || "").replace(K, Z), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || nt.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && nt.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var e, i = !t[5] && t[2];
                            return W.CHILD.test(t[0]) ? null : (t[4] ? t[2] = t[4] : i && j.test(i) && (e = lt(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            return "*" === e ? function() {
                                return !0
                            } : (e = e.replace(K, Z).toLowerCase(), function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            })
                        },
                        CLASS: function(t) {
                            var e = l[t + " "];
                            return e || (e = RegExp("(^|" + D + ")" + t + "(" + D + "|$)")) && l(t, function(t) {
                                return e.test(t.className || typeof t.getAttribute !== A && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(i, n, s) {
                            return function(t) {
                                var e = nt.attr(t, i);
                                return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === s : "!=" === n ? e !== s : "^=" === n ? s && 0 === e.indexOf(s) : "*=" === n ? s && -1 < e.indexOf(s) : "$=" === n ? s && e.slice(-s.length) === s : "~=" === n ? -1 < (" " + e + " ").indexOf(s) : "|=" === n && (e === s || e.slice(0, s.length + 1) === s + "-"))
                            }
                        },
                        CHILD: function(p, t, e, f, m) {
                            var g = "nth" !== p.slice(0, 3),
                                v = "last" !== p.slice(-4),
                                y = "of-type" === t;
                            return 1 === f && 0 === m ? function(t) {
                                return !!t.parentNode
                            } : function(t, e, i) {
                                var n, s, o, r, a, l, c = g !== v ? "nextSibling" : "previousSibling",
                                    h = t.parentNode,
                                    u = y && t.nodeName.toLowerCase(),
                                    d = !i && !y;
                                if (h) {
                                    if (g) {
                                        for (; c;) {
                                            for (o = t; o = o[c];)
                                                if (y ? o.nodeName.toLowerCase() === u : 1 === o.nodeType) return !1;
                                            l = c = "only" === p && !l && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (l = [v ? h.firstChild : h.lastChild], v && d) {
                                        for (a = (n = (s = h[_] || (h[_] = {}))[p] || [])[0] === S && n[1], r = n[0] === S && n[2], o = a && h.childNodes[a]; o = ++a && o && o[c] || (r = a = 0) || l.pop();)
                                            if (1 === o.nodeType && ++r && o === t) {
                                                s[p] = [S, a, r];
                                                break
                                            }
                                    } else if (d && (n = (t[_] || (t[_] = {}))[p]) && n[0] === S) r = n[1];
                                    else
                                        for (;
                                            (o = ++a && o && o[c] || (r = a = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== u : 1 !== o.nodeType) || !++r || (d && ((o[_] || (o[_] = {}))[p] = [S, r]), o !== t)););
                                    return (r -= m) === f || 0 == r % f && 0 <= r / f
                                }
                            }
                        },
                        PSEUDO: function(t, o) {
                            var e, r = T.pseudos[t] || T.setFilters[t.toLowerCase()] || nt.error("unsupported pseudo: " + t);
                            return r[_] ? r(o) : 1 < r.length ? (e = [t, t, "", o], T.setFilters.hasOwnProperty(t.toLowerCase()) ? et(function(t, e) {
                                for (var i, n = r(t, o), s = n.length; s--;) t[i = R.call(t, n[s])] = !(e[i] = n[s])
                            }) : function(t) {
                                return r(t, 0, e)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: et(function(t) {
                            var n = [],
                                s = [],
                                a = f(t.replace(B, "$1"));
                            return a[_] ? et(function(t, e, i, n) {
                                for (var s, o = a(t, null, n, []), r = t.length; r--;)(s = o[r]) && (t[r] = !(e[r] = s))
                            }) : function(t, e, i) {
                                return n[0] = t, a(n, null, i, s), !s.pop()
                            }
                        }),
                        has: et(function(e) {
                            return function(t) {
                                return 0 < nt(e, t).length
                            }
                        }),
                        contains: et(function(e) {
                            return function(t) {
                                return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
                            }
                        }),
                        lang: et(function(i) {
                            return z.test(i || "") || nt.error("unsupported lang: " + i), i = i.replace(K, Z).toLowerCase(),
                                function(t) {
                                    var e;
                                    do {
                                        if (e = g ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang) return (e = e.toLowerCase()) === i || 0 === e.indexOf(i + "-")
                                    } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function(t) {
                            var e = i.location && i.location.hash;
                            return e && e.slice(1) === t.id
                        },
                        root: function(t) {
                            return t === s
                        },
                        focus: function(t) {
                            return t === E.activeElement && (!E.hasFocus || E.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return !1 === t.disabled
                        },
                        disabled: function(t) {
                            return !0 === t.disabled
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if ("@" < t.nodeName || 3 === t.nodeType || 4 === t.nodeType) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !T.pseudos.empty(t)
                        },
                        header: function(t) {
                            return X.test(t.nodeName)
                        },
                        input: function(t) {
                            return G.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                        },
                        first: at(function() {
                            return [0]
                        }),
                        last: at(function(t, e) {
                            return [e - 1]
                        }),
                        eq: at(function(t, e, i) {
                            return [i < 0 ? i + e : i]
                        }),
                        even: at(function(t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t
                        }),
                        odd: at(function(t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t
                        }),
                        lt: at(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; 0 <= --n;) t.push(n);
                            return t
                        }),
                        gt: at(function(t, e, i) {
                            for (var n = i < 0 ? i + e : i; e > ++n;) t.push(n);
                            return t
                        })
                    }
                }, {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) T.pseudos[t] = ot(t);
            for (t in {
                    submit: !0,
                    reset: !0
                }) T.pseudos[t] = rt(t);

            function lt(t, e) {
                var i, n, s, o, r, a, l, c = d[t + " "];
                if (c) return e ? 0 : c.slice(0);
                for (r = t, a = [], l = T.preFilter; r;) {
                    for (o in (!i || (n = F.exec(r))) && (n && (r = r.slice(n[0].length) || r), a.push(s = [])), i = !1, (n = H.exec(r)) && (i = n.shift(), s.push({
                            value: i,
                            type: n[0].replace(B, " ")
                        }), r = r.slice(i.length)), T.filter) !(n = W[o].exec(r)) || l[o] && !(n = l[o](n)) || (i = n.shift(), s.push({
                        value: i,
                        type: o,
                        matches: n
                    }), r = r.slice(i.length));
                    if (!i) break
                }
                return e ? r.length : r ? nt.error(t) : d(t, a).slice(0)
            }

            function ct(t) {
                for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                return n
            }

            function ht(a, t, e) {
                var l = t.dir,
                    c = e && "parentNode" === l,
                    h = u++;
                return t.first ? function(t, e, i) {
                    for (; t = t[l];)
                        if (1 === t.nodeType || c) return a(t, e, i)
                } : function(t, e, i) {
                    var n, s, o, r = S + " " + h;
                    if (i) {
                        for (; t = t[l];)
                            if ((1 === t.nodeType || c) && a(t, e, i)) return !0
                    } else
                        for (; t = t[l];)
                            if (1 === t.nodeType || c)
                                if ((s = (o = t[_] || (t[_] = {}))[l]) && s[0] === r) {
                                    if (!0 === (n = s[1]) || n === C) return !0 === n
                                } else if ((s = o[l] = [r])[1] = a(t, e, i) || C, !0 === s[1]) return !0
                }
            }

            function ut(s) {
                return 1 < s.length ? function(t, e, i) {
                    for (var n = s.length; n--;)
                        if (!s[n](t, e, i)) return !1;
                    return !0
                } : s[0]
            }

            function dt(t, e, i, n, s) {
                for (var o, r = [], a = 0, l = t.length, c = null != e; a < l; a++)(o = t[a]) && (!i || i(o, n, s)) && (r.push(o), c && e.push(a));
                return r
            }

            function pt(p, f, m, g, v, t) {
                return g && !g[_] && (g = pt(g)), v && !v[_] && (v = pt(v, t)), et(function(t, e, i, n) {
                    var s, o, r, a = [],
                        l = [],
                        c = e.length,
                        h = t || function(t, e, i) {
                            for (var n = 0, s = e.length; n < s; n++) nt(t, e[n], i);
                            return i
                        }(f || "*", i.nodeType ? [i] : i, []),
                        u = !p || !t && f ? h : dt(h, a, p, i, n),
                        d = m ? v || (t ? p : c || g) ? [] : e : u;
                    if (m && m(u, d, i, n), g)
                        for (s = dt(d, l), g(s, [], i, n), o = s.length; o--;)(r = s[o]) && (d[l[o]] = !(u[l[o]] = r));
                    if (t) {
                        if (v || p) {
                            if (v) {
                                for (s = [], o = d.length; o--;)(r = d[o]) && s.push(u[o] = r);
                                v(null, d = [], s, n)
                            }
                            for (o = d.length; o--;)(r = d[o]) && -1 < (s = v ? R.call(t, r) : a[o]) && (t[s] = !(e[s] = r))
                        }
                    } else d = dt(d === e ? d.splice(c, d.length) : d), v ? v(null, e, d, n) : O.apply(e, d)
                })
            }

            function ft(t) {
                for (var n, e, i, s = t.length, o = T.relative[t[0].type], r = o || T.relative[" "], a = o ? 1 : 0, l = ht(function(t) {
                        return t === n
                    }, r, !0), c = ht(function(t) {
                        return -1 < R.call(n, t)
                    }, r, !0), h = [function(t, e, i) {
                        return !o && (i || e !== x) || ((n = e).nodeType ? l(t, e, i) : c(t, e, i))
                    }]; a < s; a++)
                    if (e = T.relative[t[a].type]) h = [ht(ut(h), e)];
                    else {
                        if ((e = T.filter[t[a].type].apply(null, t[a].matches))[_]) {
                            for (i = ++a; i < s && !T.relative[t[i].type]; i++);
                            return pt(1 < a && ut(h), 1 < a && ct(t.slice(0, a - 1)).replace(B, "$1"), e, a < i && ft(t.slice(a, i)), i < s && ft(t = t.slice(i)), i < s && ct(t))
                        }
                        h.push(e)
                    }
                return ut(h)
            }

            function mt() {}
            f = nt.compile = function(t, e) {
                var i, g, v, y, b, w, n, s = [],
                    o = [],
                    r = p[t + " "];
                if (!r) {
                    for (e || (e = lt(t)), i = e.length; i--;)(r = ft(e[i]))[_] ? s.push(r) : o.push(r);
                    r = p(t, (g = o, b = (y = 0) < (v = s).length, w = 0 < g.length, n = function(t, e, i, n, s) {
                        var o, r, a, l = [],
                            c = 0,
                            h = "0",
                            u = t && [],
                            d = null != s,
                            p = x,
                            f = t || w && T.find.TAG("*", s && e.parentNode || e),
                            m = S += null == p ? 1 : Math.random() || .1;
                        for (d && (x = e !== E && e, C = y); null != (o = f[h]); h++) {
                            if (w && o) {
                                for (r = 0; a = g[r++];)
                                    if (a(o, e, i)) {
                                        n.push(o);
                                        break
                                    }
                                d && (S = m, C = ++y)
                            }
                            b && ((o = !a && o) && c--, t && u.push(o))
                        }
                        if (c += h, b && h !== c) {
                            for (r = 0; a = v[r++];) a(u, l, e, i);
                            if (t) {
                                if (0 < c)
                                    for (; h--;) u[h] || l[h] || (l[h] = L.call(n));
                                l = dt(l)
                            }
                            O.apply(n, l), d && !t && 0 < l.length && 1 < c + v.length && nt.uniqueSort(n)
                        }
                        return d && (S = m, x = p), u
                    }, b ? et(n) : n))
                }
                return r
            }, T.pseudos.nth = T.pseudos.eq, T.filters = mt.prototype = T.pseudos, T.setFilters = new mt, m(), nt.attr = gt.attr, gt.find = nt, gt.expr = nt.selectors, gt.expr[":"] = gt.expr.pseudos, gt.unique = nt.uniqueSort, gt.text = nt.getText, gt.isXMLDoc = nt.isXML, gt.contains = nt.contains
        }(f);
    var st = /Until$/,
        ot = /^(?:parents|prev(?:Until|All))/,
        rt = /^.[^:#\[\.,]*$/,
        at = gt.expr.match.needsContext,
        lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function ct(t, e) {
        for (;
            (t = t[e]) && 1 !== t.nodeType;);
        return t
    }

    function ht(t, i, n) {
        if (i = i || 0, gt.isFunction(i)) return gt.grep(t, function(t, e) {
            return !!i.call(t, e, t) === n
        });
        if (i.nodeType) return gt.grep(t, function(t) {
            return t === i === n
        });
        if ("string" == typeof i) {
            var e = gt.grep(t, function(t) {
                return 1 === t.nodeType
            });
            if (rt.test(i)) return gt.filter(i, e, !n);
            i = gt.filter(i, e)
        }
        return gt.grep(t, function(t) {
            return 0 <= gt.inArray(t, i) === n
        })
    }

    function ut(t) {
        var e = dt.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }
    gt.fn.extend({
        find: function(t) {
            var e, i, n, s = this.length;
            if ("string" != typeof t) return (n = this).pushStack(gt(t).filter(function() {
                for (e = 0; e < s; e++)
                    if (gt.contains(n[e], this)) return !0
            }));
            for (i = [], e = 0; e < s; e++) gt.find(t, this[e], i);
            return (i = this.pushStack(1 < s ? gt.unique(i) : i)).selector = (this.selector ? this.selector + " " : "") + t, i
        },
        has: function(t) {
            var e, i = gt(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; e < n; e++)
                    if (gt.contains(this, i[e])) return !0
            })
        },
        not: function(t) {
            return this.pushStack(ht(this, t, !1))
        },
        filter: function(t) {
            return this.pushStack(ht(this, t, !0))
        },
        is: function(t) {
            return !!t && ("string" == typeof t ? at.test(t) ? 0 <= gt(t, this.context).index(this[0]) : 0 < gt.filter(t, this).length : 0 < this.filter(t).length)
        },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], r = at.test(t) || "string" != typeof t ? gt(t, e || this.context) : 0; n < s; n++)
                for (i = this[n]; i && i.ownerDocument && i !== e && 11 !== i.nodeType;) {
                    if (r ? -1 < r.index(i) : gt.find.matchesSelector(i, t)) {
                        o.push(i);
                        break
                    }
                    i = i.parentNode
                }
            return this.pushStack(1 < o.length ? gt.unique(o) : o)
        },
        index: function(t) {
            return t ? "string" == typeof t ? gt.inArray(this[0], gt(t)) : gt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            var i = "string" == typeof t ? gt(t, e) : gt.makeArray(t && t.nodeType ? [t] : t),
                n = gt.merge(this.get(), i);
            return this.pushStack(gt.unique(n))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), gt.fn.andSelf = gt.fn.addBack, gt.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return gt.dir(t, "parentNode")
        },
        parentsUntil: function(t, e, i) {
            return gt.dir(t, "parentNode", i)
        },
        next: function(t) {
            return ct(t, "nextSibling")
        },
        prev: function(t) {
            return ct(t, "previousSibling")
        },
        nextAll: function(t) {
            return gt.dir(t, "nextSibling")
        },
        prevAll: function(t) {
            return gt.dir(t, "previousSibling")
        },
        nextUntil: function(t, e, i) {
            return gt.dir(t, "nextSibling", i)
        },
        prevUntil: function(t, e, i) {
            return gt.dir(t, "previousSibling", i)
        },
        siblings: function(t) {
            return gt.sibling((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return gt.sibling(t.firstChild)
        },
        contents: function(t) {
            return gt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : gt.merge([], t.childNodes)
        }
    }, function(n, s) {
        gt.fn[n] = function(t, e) {
            var i = gt.map(this, s, t);
            return st.test(n) || (e = t), e && "string" == typeof e && (i = gt.filter(e, i)), i = 1 < this.length && !lt[n] ? gt.unique(i) : i, 1 < this.length && ot.test(n) && (i = i.reverse()), this.pushStack(i)
        }
    }), gt.extend({
        filter: function(t, e, i) {
            return i && (t = ":not(" + t + ")"), 1 === e.length ? gt.find.matchesSelector(e[0], t) ? [e[0]] : [] : gt.find.matches(t, e)
        },
        dir: function(t, e, i) {
            for (var n = [], s = t[e]; s && 9 !== s.nodeType && (i === x || 1 !== s.nodeType || !gt(s).is(i));) 1 === s.nodeType && n.push(s), s = s[e];
            return n
        },
        sibling: function(t, e) {
            for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
            return i
        }
    });
    var dt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        pt = / jQuery\d+="(?:null|\d+)"/g,
        ft = RegExp("<(?:" + dt + ")[\\s/>]", "i"),
        mt = /^\s+/,
        vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        yt = /<([\w:]+)/,
        bt = /<tbody/i,
        wt = /<|&#?\w+;/,
        Ct = /<(?:script|style|link)/i,
        Tt = /^(?:checkbox|radio)$/i,
        xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Et = /^$|\/(?:java|ecma)script/i,
        _t = /^true\/(.*)/,
        St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        At = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            area: [1, "<map>", "</map>"],
            param: [1, "<object>", "</object>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: gt.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
        },
        Nt = ut(m).appendChild(m.createElement("div"));

    function Lt(t) {
        var e = t.getAttributeNode("type");
        return t.type = (e && e.specified) + "/" + t.type, t
    }

    function Ot(t) {
        var e = _t.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function kt(t, e) {
        for (var i, n = 0; null != (i = t[n]); n++) gt._data(i, "globalEval", !e || gt._data(e[n], "globalEval"))
    }

    function Rt(t, e) {
        if (1 === e.nodeType && gt.hasData(t)) {
            var i, n, s, o = gt._data(t),
                r = gt._data(e, o),
                a = o.events;
            if (a)
                for (i in delete r.handle, r.events = {}, a)
                    for (n = 0, s = a[i].length; n < s; n++) gt.event.add(e, i, a[i][n]);
            r.data && (r.data = gt.extend({}, r.data))
        }
    }

    function Dt(t, e) {
        var i, n, s;
        if (1 === e.nodeType) {
            if (i = e.nodeName.toLowerCase(), !gt.support.noCloneEvent && e[gt.expando]) {
                for (n in (s = gt._data(e)).events) gt.removeEvent(e, n, s.handle);
                e.removeAttribute(gt.expando)
            }
            "script" === i && e.text !== t.text ? (Lt(e).text = t.text, Ot(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), gt.support.html5Clone && t.innerHTML && !gt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Tt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === i || "textarea" === i) && (e.defaultValue = t.defaultValue)
        }
    }

    function Pt(t, e) {
        var i, n, s = 0,
            o = typeof t.getElementsByTagName !== v ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== v ? t.querySelectorAll(e || "*") : x;
        if (!o)
            for (o = [], i = t.childNodes || t; null != (n = i[s]); s++) !e || gt.nodeName(n, e) ? o.push(n) : gt.merge(o, Pt(n, e));
        return e === x || e && gt.nodeName(t, e) ? gt.merge([t], o) : o
    }

    function $t(t) {
        Tt.test(t.type) && (t.defaultChecked = t.checked)
    }
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, gt.fn.extend({
        text: function(t) {
            return gt.access(this, function(t) {
                return t === x ? gt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || m).createTextNode(t))
            }, null, t, arguments.length)
        },
        wrapAll: function(e) {
            if (gt.isFunction(e)) return this.each(function(t) {
                gt(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = gt(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function(i) {
            return gt.isFunction(i) ? this.each(function(t) {
                gt(this).wrapInner(i.call(this, t))
            }) : this.each(function() {
                var t = gt(this),
                    e = t.contents();
                e.length ? e.wrapAll(i) : t.append(i)
            })
        },
        wrap: function(e) {
            var i = gt.isFunction(e);
            return this.each(function(t) {
                gt(this).wrapAll(i ? e.call(this, t) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                gt.nodeName(this, "body") || gt(this).replaceWith(this.childNodes)
            }).end()
        },
        append: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(t)
            })
        },
        prepend: function() {
            return this.domManip(arguments, !0, function(t) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(t, this.firstChild)
            })
        },
        before: function() {
            return this.domManip(arguments, !1, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return this.domManip(arguments, !1, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        remove: function(t, e) {
            for (var i, n = 0; null != (i = this[n]); n++)(!t || 0 < gt.filter(t, [i]).length) && (e || 1 !== i.nodeType || gt.cleanData(Pt(i)), i.parentNode && (e && gt.contains(i.ownerDocument, i) && kt(Pt(i, "script")), i.parentNode.removeChild(i)));
            return this
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && gt.cleanData(Pt(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && gt.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function(t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function() {
                return gt.clone(this, t, e)
            })
        },
        html: function(t) {
            return gt.access(this, function(t) {
                var e = this[0] || {},
                    i = 0,
                    n = this.length;
                if (t === x) return 1 === e.nodeType ? e.innerHTML.replace(pt, "") : x;
                if (!("string" != typeof t || Ct.test(t) || !gt.support.htmlSerialize && ft.test(t) || !gt.support.leadingWhitespace && mt.test(t) || At[(yt.exec(t) || ["", ""])[1].toLowerCase()])) {
                    t = t.replace(vt, "<$1></$2>");
                    try {
                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (gt.cleanData(Pt(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (t) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function(t) {
            return gt.isFunction(t) || "string" == typeof t || (t = gt(t).not(this).detach()), this.domManip([t], !0, function(t) {
                var e = this.nextSibling,
                    i = this.parentNode;
                i && (gt(this).remove(), i.insertBefore(t, e))
            })
        },
        detach: function(t) {
            return this.remove(t, !0)
        },
        domManip: function(i, n, s) {
            i = y.apply([], i);
            var t, e, o, r, a, l, c, h, u = 0,
                d = this.length,
                p = this,
                f = d - 1,
                m = i[0],
                g = gt.isFunction(m);
            if (g || !(d <= 1 || "string" != typeof m || gt.support.checkClone) && xt.test(m)) return this.each(function(t) {
                var e = p.eq(t);
                g && (i[0] = m.call(this, t, n ? e.html() : x)), e.domManip(i, n, s)
            });
            if (d && (t = (l = gt.buildFragment(i, this[0].ownerDocument, !1, this)).firstChild, 1 === l.childNodes.length && (l = t), t)) {
                for (n = n && gt.nodeName(t, "tr"), o = (r = gt.map(Pt(l, "script"), Lt)).length; u < d; u++) e = l, u !== f && (e = gt.clone(e, !0, !0), o && gt.merge(r, Pt(e, "script"))), s.call(n && gt.nodeName(this[u], "table") ? (c = this[u], h = "tbody", c.getElementsByTagName(h)[0] || c.appendChild(c.ownerDocument.createElement(h))) : this[u], e, u);
                if (o)
                    for (a = r[r.length - 1].ownerDocument, gt.map(r, Ot), u = 0; u < o; u++) e = r[u], Et.test(e.type || "") && !gt._data(e, "globalEval") && gt.contains(a, e) && (e.src ? gt.ajax({
                        url: e.src,
                        type: "GET",
                        dataType: "script",
                        async: !1,
                        global: !1,
                        throws: !0
                    }) : gt.globalEval((e.text || e.textContent || e.innerHTML || "").replace(St, "")));
                l = t = null
            }
            return this
        }
    }), gt.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, r) {
        gt.fn[t] = function(t) {
            for (var e, i = 0, n = [], s = gt(t), o = s.length - 1; i <= o; i++) e = i === o ? this : this.clone(!0), gt(s[i])[r](e), a.apply(n, e.get());
            return this.pushStack(n)
        }
    }), gt.extend({
        clone: function(t, e, i) {
            var n, s, o, r, a, l = gt.contains(t.ownerDocument, t);
            if (gt.support.html5Clone || gt.isXMLDoc(t) || !ft.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (Nt.innerHTML = t.outerHTML, Nt.removeChild(o = Nt.firstChild)), !(gt.support.noCloneEvent && gt.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || gt.isXMLDoc(t)))
                for (n = Pt(o), a = Pt(t), r = 0; null != (s = a[r]); ++r) n[r] && Dt(s, n[r]);
            if (e)
                if (i)
                    for (a = a || Pt(t), n = n || Pt(o), r = 0; null != (s = a[r]); r++) Rt(s, n[r]);
                else Rt(t, o);
            return 0 < (n = Pt(o, "script")).length && kt(n, !l && Pt(t, "script")), n = a = s = null, o
        },
        buildFragment: function(t, e, i, n) {
            for (var s, o, r, a, l, c, h, u = t.length, d = ut(e), p = [], f = 0; f < u; f++)
                if ((o = t[f]) || 0 === o)
                    if ("object" === gt.type(o)) gt.merge(p, o.nodeType ? [o] : o);
                    else if (wt.test(o)) {
                for (a = a || d.appendChild(e.createElement("div")), l = (yt.exec(o) || ["", ""])[1].toLowerCase(), h = At[l] || At._default, a.innerHTML = h[1] + o.replace(vt, "<$1></$2>") + h[2], s = h[0]; s--;) a = a.lastChild;
                if (!gt.support.leadingWhitespace && mt.test(o) && p.push(e.createTextNode(mt.exec(o)[0])), !gt.support.tbody)
                    for (s = (o = "table" !== l || bt.test(o) ? "<table>" !== h[1] || bt.test(o) ? 0 : a : a.firstChild) && o.childNodes.length; s--;) gt.nodeName(c = o.childNodes[s], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (gt.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = d.lastChild
            } else p.push(e.createTextNode(o));
            for (a && d.removeChild(a), gt.support.appendChecked || gt.grep(Pt(p, "input"), $t), f = 0; o = p[f++];)
                if ((!n || -1 === gt.inArray(o, n)) && (r = gt.contains(o.ownerDocument, o), a = Pt(d.appendChild(o), "script"), r && kt(a), i))
                    for (s = 0; o = a[s++];) Et.test(o.type || "") && i.push(o);
            return a = null, d
        },
        cleanData: function(t, e) {
            for (var i, n, s, o, r = 0, a = gt.expando, l = gt.cache, c = gt.support.deleteExpando, h = gt.event.special; null != (i = t[r]); r++)
                if ((e || gt.acceptData(i)) && (o = (s = i[a]) && l[s])) {
                    if (o.events)
                        for (n in o.events) h[n] ? gt.event.remove(i, n) : gt.removeEvent(i, n, o.handle);
                    l[s] && (delete l[s], c ? delete i[a] : typeof i.removeAttribute !== v ? i.removeAttribute(a) : i[a] = null, u.push(s))
                }
        }
    });
    var It, Mt, Bt, Ft = /alpha\([^)]*\)/i,
        Ht = /opacity\s*=\s*([^)]*)/,
        jt = /^(top|right|bottom|left)$/,
        zt = /^(none|table(?!-c[ea]).+)/,
        Wt = /^margin/,
        qt = RegExp("^(" + p + ")(.*)$", "i"),
        Vt = RegExp("^(" + p + ")(?!px)[a-z%]+$", "i"),
        Ut = RegExp("^([+-])=(" + p + ")", "i"),
        Gt = {
            BODY: "block"
        },
        Xt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qt = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Yt = ["Top", "Right", "Bottom", "Left"],
        Kt = ["Webkit", "O", "Moz", "ms"];

    function Zt(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = Kt.length; s--;)
            if ((e = Kt[s] + i) in t) return e;
        return n
    }

    function Jt(t, e) {
        return t = e || t, "none" === gt.css(t, "display") || !gt.contains(t.ownerDocument, t)
    }

    function te(t, e) {
        for (var i, n, s, o = [], r = 0, a = t.length; r < a; r++)(n = t[r]).style && (o[r] = gt._data(n, "olddisplay"), i = n.style.display, e ? (o[r] || "none" !== i || (n.style.display = ""), "" === n.style.display && Jt(n) && (o[r] = gt._data(n, "olddisplay", se(n.nodeName)))) : o[r] || (s = Jt(n), (i && "none" !== i || !s) && gt._data(n, "olddisplay", s ? i : gt.css(n, "display"))));
        for (r = 0; r < a; r++)(n = t[r]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? o[r] || "" : "none"));
        return t
    }

    function ee(t, e, i) {
        var n = qt.exec(e);
        return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
    }

    function ie(t, e, i, n, s) {
        for (var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, r = 0; o < 4; o += 2) "margin" === i && (r += gt.css(t, i + Yt[o], !0, s)), n ? ("content" === i && (r -= gt.css(t, "padding" + Yt[o], !0, s)), "margin" !== i && (r -= gt.css(t, "border" + Yt[o] + "Width", !0, s))) : (r += gt.css(t, "padding" + Yt[o], !0, s), "padding" !== i && (r += gt.css(t, "border" + Yt[o] + "Width", !0, s)));
        return r
    }

    function ne(t, e, i) {
        var n = !0,
            s = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = Mt(t),
            r = gt.support.boxSizing && "border-box" === gt.css(t, "boxSizing", !1, o);
        if (s <= 0 || null == s) {
            if (((s = Bt(t, e, o)) < 0 || null == s) && (s = t.style[e]), Vt.test(s)) return s;
            n = r && (gt.support.boxSizingReliable || s === t.style[e]), s = parseFloat(s) || 0
        }
        return s + ie(t, e, i || (r ? "border" : "content"), n, o) + "px"
    }

    function se(t) {
        var e = m,
            i = Gt[t];
        return i || ("none" !== (i = oe(t, e)) && i || ((e = ((It = (It || gt("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement))[0].contentWindow || It[0].contentDocument).document).write("<!doctype html><html><body>"), e.close(), i = oe(t, e), It.detach()), Gt[t] = i), i
    }

    function oe(t, e) {
        var i = gt(e.createElement(t)).appendTo(e.body),
            n = gt.css(i[0], "display");
        return i.remove(), n
    }
    gt.fn.extend({
        css: function(t, e) {
            return gt.access(this, function(t, e, i) {
                var n, s, o = {},
                    r = 0;
                if (gt.isArray(e)) {
                    for (s = Mt(t), n = e.length; r < n; r++) o[e[r]] = gt.css(t, e[r], !1, s);
                    return o
                }
                return i !== x ? gt.style(t, e, i) : gt.css(t, e)
            }, t, e, 1 < arguments.length)
        },
        show: function() {
            return te(this, !0)
        },
        hide: function() {
            return te(this)
        },
        toggle: function(t) {
            var e = "boolean" == typeof t;
            return this.each(function() {
                (e ? t : Jt(this)) ? gt(this).show(): gt(this).hide()
            })
        }
    }), gt.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var i = Bt(t, "opacity");
                        return "" === i ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: gt.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(t, e, i, n) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var s, o, r, a = gt.camelCase(e),
                    l = t.style;
                if (e = gt.cssProps[a] || (gt.cssProps[a] = Zt(l, a)), r = gt.cssHooks[e] || gt.cssHooks[a], i === x) return r && "get" in r && (s = r.get(t, !1, n)) !== x ? s : l[e];
                if ("string" === (o = typeof i) && (s = Ut.exec(i)) && (i = (s[1] + 1) * s[2] + parseFloat(gt.css(t, e)), o = "number"), !(null == i || "number" === o && isNaN(i) || ("number" !== o || gt.cssNumber[a] || (i += "px"), gt.support.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (l[e] = "inherit"), r && "set" in r && (i = r.set(t, i, n)) === x))) try {
                    l[e] = i
                } catch (t) {}
            }
        },
        css: function(t, e, i, n) {
            var s, o, r, a = gt.camelCase(e);
            return e = gt.cssProps[a] || (gt.cssProps[a] = Zt(t.style, a)), (r = gt.cssHooks[e] || gt.cssHooks[a]) && "get" in r && (o = r.get(t, !0, i)), o === x && (o = Bt(t, e, n)), "normal" === o && e in Qt && (o = Qt[e]), "" === i || i ? (s = parseFloat(o), !0 === i || gt.isNumeric(s) ? s || 0 : o) : o
        },
        swap: function(t, e, i, n) {
            var s, o, r = {};
            for (o in e) r[o] = t.style[o], t.style[o] = e[o];
            for (o in s = i.apply(t, n || []), e) t.style[o] = r[o];
            return s
        }
    }), f.getComputedStyle ? (Mt = function(t) {
        return f.getComputedStyle(t, null)
    }, Bt = function(t, e, i) {
        var n, s, o, r = i || Mt(t),
            a = r ? r.getPropertyValue(e) || r[e] : x,
            l = t.style;
        return r && ("" !== a || gt.contains(t.ownerDocument, t) || (a = gt.style(t, e)), Vt.test(a) && Wt.test(e) && (n = l.width, s = l.minWidth, o = l.maxWidth, l.minWidth = l.maxWidth = l.width = a, a = r.width, l.width = n, l.minWidth = s, l.maxWidth = o)), a
    }) : m.documentElement.currentStyle && (Mt = function(t) {
        return t.currentStyle
    }, Bt = function(t, e, i) {
        var n, s, o, r = i || Mt(t),
            a = r ? r[e] : x,
            l = t.style;
        return null == a && l && l[e] && (a = l[e]), Vt.test(a) && !jt.test(e) && (n = l.left, (o = (s = t.runtimeStyle) && s.left) && (s.left = t.currentStyle.left), l.left = "fontSize" === e ? "1em" : a, a = l.pixelLeft + "px", l.left = n, o && (s.left = o)), "" === a ? "auto" : a
    }), gt.each(["height", "width"], function(t, s) {
        gt.cssHooks[s] = {
            get: function(t, e, i) {
                return e ? 0 === t.offsetWidth && zt.test(gt.css(t, "display")) ? gt.swap(t, Xt, function() {
                    return ne(t, s, i)
                }) : ne(t, s, i) : x
            },
            set: function(t, e, i) {
                var n = i && Mt(t);
                return ee(0, e, i ? ie(t, s, i, gt.support.boxSizing && "border-box" === gt.css(t, "boxSizing", !1, n), n) : 0)
            }
        }
    }), gt.support.opacity || (gt.cssHooks.opacity = {
        get: function(t, e) {
            return Ht.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = gt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = n && n.filter || i.filter || "";
            ((i.zoom = 1) <= e || "" === e) && "" === gt.trim(o.replace(Ft, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = Ft.test(o) ? o.replace(Ft, s) : o + " " + s)
        }
    }), gt(function() {
        gt.support.reliableMarginRight || (gt.cssHooks.marginRight = {
            get: function(t, e) {
                return e ? gt.swap(t, {
                    display: "inline-block"
                }, Bt, [t, "marginRight"]) : x
            }
        }), !gt.support.pixelPosition && gt.fn.position && gt.each(["top", "left"], function(t, i) {
            gt.cssHooks[i] = {
                get: function(t, e) {
                    return e ? (e = Bt(t, i), Vt.test(e) ? gt(t).position()[i] + "px" : e) : x
                }
            }
        })
    }), gt.expr && gt.expr.filters && (gt.expr.filters.hidden = function(t) {
        return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !gt.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || gt.css(t, "display"))
    }, gt.expr.filters.visible = function(t) {
        return !gt.expr.filters.hidden(t)
    }), gt.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(s, o) {
        gt.cssHooks[s + o] = {
            expand: function(t) {
                for (var e = 0, i = {}, n = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) i[s + Yt[e] + o] = n[e] || n[e - 2] || n[0];
                return i
            }
        }, Wt.test(s) || (gt.cssHooks[s + o].set = ee)
    });
    var re = /%20/g,
        ae = /\[\]$/,
        le = /\r?\n/g,
        ce = /^(?:submit|button|image|reset|file)$/i,
        he = /^(?:input|select|textarea|keygen)/i;

    function ue(i, t, n, s) {
        var e;
        if (gt.isArray(t)) gt.each(t, function(t, e) {
            n || ae.test(i) ? s(i, e) : ue(i + "[" + ("object" == typeof e ? t : "") + "]", e, n, s)
        });
        else if (n || "object" !== gt.type(t)) s(i, t);
        else
            for (e in t) ue(i + "[" + e + "]", t[e], n, s)
    }
    gt.fn.extend({
        serialize: function() {
            return gt.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = gt.prop(this, "elements");
                return t ? gt.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !gt(this).is(":disabled") && he.test(this.nodeName) && !ce.test(t) && (this.checked || !Tt.test(t))
            }).map(function(t, e) {
                var i = gt(this).val();
                return null == i ? null : gt.isArray(i) ? gt.map(i, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(le, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: i.replace(le, "\r\n")
                }
            }).get()
        }
    }), gt.param = function(t, e) {
        var i, n = [],
            s = function(t, e) {
                e = gt.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (e === x && (e = gt.ajaxSettings && gt.ajaxSettings.traditional), gt.isArray(t) || t.jquery && !gt.isPlainObject(t)) gt.each(t, function() {
            s(this.name, this.value)
        });
        else
            for (i in t) ue(i, t[i], e, s);
        return n.join("&").replace(re, "+")
    }, gt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, i) {
        gt.fn[i] = function(t, e) {
            return 0 < arguments.length ? this.on(i, null, t, e) : this.trigger(i)
        }
    }), gt.fn.hover = function(t, e) {
        return this.mouseenter(t).mouseleave(e || t)
    };
    var de, pe, fe = gt.now(),
        me = /\?/,
        ge = /#.*$/,
        ve = /([?&])_=[^&]*/,
        ye = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        be = /^(?:GET|HEAD)$/,
        we = /^\/\//,
        Ce = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Te = gt.fn.load,
        xe = {},
        Ee = {},
        _e = "*/".concat("*");
    try {
        pe = t.href
    } catch (t) {
        (pe = m.createElement("a")).href = "", pe = pe.href
    }

    function Se(o) {
        return function(t, e) {
            "string" != typeof t && (e = t, t = "*");
            var i, n = 0,
                s = t.toLowerCase().match(E) || [];
            if (gt.isFunction(e))
                for (; i = s[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (o[i] = o[i] || []).unshift(e)) : (o[i] = o[i] || []).push(e)
        }
    }

    function Ae(e, s, o, r) {
        var a = {},
            l = e === Ee;

        function c(t) {
            var n;
            return a[t] = !0, gt.each(e[t] || [], function(t, e) {
                var i = e(s, o, r);
                return "string" != typeof i || l || a[i] ? l ? !(n = i) : x : (s.dataTypes.unshift(i), c(i), !1)
            }), n
        }
        return c(s.dataTypes[0]) || !a["*"] && c("*")
    }

    function Ne(t, e) {
        var i, n, s = gt.ajaxSettings.flatOptions || {};
        for (n in e) e[n] !== x && ((s[n] ? t : i || (i = {}))[n] = e[n]);
        return i && gt.extend(!0, t, i), t
    }
    de = Ce.exec(pe.toLowerCase()) || [], gt.fn.load = function(t, e, i) {
        if ("string" != typeof t && Te) return Te.apply(this, arguments);
        var n, s, o, r = this,
            a = t.indexOf(" ");
        return 0 <= a && (n = t.slice(a, t.length), t = t.slice(0, a)), gt.isFunction(e) ? (i = e, e = x) : e && "object" == typeof e && (o = "POST"), 0 < r.length && gt.ajax({
            url: t,
            type: o,
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments, r.html(n ? gt("<div>").append(gt.parseHTML(t)).find(n) : t)
        }).complete(i && function(t, e) {
            r.each(i, s || [t.responseText, e, t])
        }), this
    }, gt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        gt.fn[e] = function(t) {
            return this.on(e, t)
        }
    }), gt.each(["get", "post"], function(t, s) {
        gt[s] = function(t, e, i, n) {
            return gt.isFunction(e) && (n = n || i, i = e, e = x), gt.ajax({
                url: t,
                type: s,
                dataType: n,
                data: e,
                success: i
            })
        }
    }), gt.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: pe,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(de[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": _e,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": f.String,
                "text html": !0,
                "text json": gt.parseJSON,
                "text xml": gt.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Ne(Ne(t, gt.ajaxSettings), e) : Ne(gt.ajaxSettings, t)
        },
        ajaxPrefilter: Se(xe),
        ajaxTransport: Se(Ee),
        ajax: function(t, e) {
            "object" == typeof t && (e = t, t = x), e = e || {};
            var i, n, h, u, d, p, f, s, m = gt.ajaxSetup({}, e),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? gt(g) : gt.event,
                y = gt.Deferred(),
                b = gt.Callbacks("once memory"),
                w = m.statusCode || {},
                o = {},
                r = {},
                C = 0,
                a = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(t) {
                        var e;
                        if (2 === C) {
                            if (!s)
                                for (s = {}; e = ye.exec(u);) s[e[1].toLowerCase()] = e[2];
                            e = s[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function() {
                        return 2 === C ? u : null
                    },
                    setRequestHeader: function(t, e) {
                        var i = t.toLowerCase();
                        return C || (t = r[i] = r[i] || t, o[t] = e), this
                    },
                    overrideMimeType: function(t) {
                        return C || (m.mimeType = t), this
                    },
                    statusCode: function(t) {
                        var e;
                        if (t)
                            if (C < 2)
                                for (e in t) w[e] = [w[e], t[e]];
                            else T.always(t[T.status]);
                        return this
                    },
                    abort: function(t) {
                        var e = t || a;
                        return f && f.abort(e), l(0, e), this
                    }
                };
            if (y.promise(T).complete = b.add, T.success = T.done, T.error = T.fail, m.url = ((t || m.url || pe) + "").replace(ge, "").replace(we, de[1] + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = gt.trim(m.dataType || "*").toLowerCase().match(E) || [""], null == m.crossDomain && (i = Ce.exec(m.url.toLowerCase()), m.crossDomain = !(!i || i[1] === de[1] && i[2] === de[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (de[3] || ("http:" === de[1] ? 80 : 443)))), m.data && m.processData && "string" != typeof m.data && (m.data = gt.param(m.data, m.traditional)), Ae(xe, m, e, T), 2 === C) return T;
            for (n in (p = m.global) && 0 == gt.active++ && gt.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !be.test(m.type), h = m.url, m.hasContent || (m.data && (h = m.url += (me.test(h) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = ve.test(h) ? h.replace(ve, "$1_=" + fe++) : h + (me.test(h) ? "&" : "?") + "_=" + fe++)), m.ifModified && (gt.lastModified[h] && T.setRequestHeader("If-Modified-Since", gt.lastModified[h]), gt.etag[h] && T.setRequestHeader("If-None-Match", gt.etag[h])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && T.setRequestHeader("Content-Type", m.contentType), T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + _e + "; q=0.01" : "") : m.accepts["*"]), m.headers) T.setRequestHeader(n, m.headers[n]);
            if (m.beforeSend && (!1 === m.beforeSend.call(g, T, m) || 2 === C)) return T.abort();
            for (n in a = "abort", {
                    success: 1,
                    error: 1,
                    complete: 1
                }) T[n](m[n]);
            if (f = Ae(Ee, m, e, T)) {
                T.readyState = 1, p && v.trigger("ajaxSend", [T, m]), m.async && 0 < m.timeout && (d = setTimeout(function() {
                    T.abort("timeout")
                }, m.timeout));
                try {
                    C = 1, f.send(o, l)
                } catch (t) {
                    if (!(C < 2)) throw t;
                    l(-1, t)
                }
            } else l(-1, "No Transport");

            function l(t, e, i, n) {
                var s, o, r, a, l, c = e;
                2 !== C && (C = 2, d && clearTimeout(d), f = x, u = n || "", T.readyState = 0 < t ? 4 : 0, i && (a = function(t, e, i) {
                    var n, s, o, r, a = t.contents,
                        l = t.dataTypes,
                        c = t.responseFields;
                    for (r in c) r in i && (e[c[r]] = i[r]);
                    for (;
                        "*" === l[0];) l.shift(), s === x && (s = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (s)
                        for (r in a)
                            if (a[r] && a[r].test(s)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in i) o = l[0];
                    else {
                        for (r in i) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                o = r;
                                break
                            }
                            n || (n = r)
                        }
                        o = o || n
                    }
                    return o ? (o !== l[0] && l.unshift(o), i[o]) : x
                }(m, T, i)), 200 <= t && t < 300 || 304 === t ? (m.ifModified && ((l = T.getResponseHeader("Last-Modified")) && (gt.lastModified[h] = l), (l = T.getResponseHeader("etag")) && (gt.etag[h] = l)), 204 === t ? (s = !0, c = "nocontent") : 304 === t ? (s = !0, c = "notmodified") : (c = (s = function(t, e) {
                    var i, n, s, o, r = {},
                        a = 0,
                        l = t.dataTypes.slice(),
                        c = l[0];
                    if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), l[1])
                        for (s in t.converters) r[s.toLowerCase()] = t.converters[s];
                    for (; n = l[++a];)
                        if ("*" !== n) {
                            if ("*" !== c && c !== n) {
                                if (!(s = r[c + " " + n] || r["* " + n]))
                                    for (i in r)
                                        if ((o = i.split(" "))[1] === n && (s = r[c + " " + o[0]] || r["* " + o[0]])) {
                                            !0 === s ? s = r[i] : !0 !== r[i] && (n = o[0], l.splice(a--, 0, n));
                                            break
                                        }
                                if (!0 !== s)
                                    if (s && t.throws) e = s(e);
                                    else try {
                                        e = s(e)
                                    } catch (t) {
                                        return {
                                            state: "parsererror",
                                            error: s ? t : "No conversion from " + c + " to " + n
                                        }
                                    }
                            }
                            c = n
                        }
                    return {
                        state: "success",
                        data: e
                    }
                }(m, a)).state, o = s.data, s = !(r = s.error))) : (r = c, (t || !c) && (c = "error", t < 0 && (t = 0))), T.status = t, T.statusText = (e || c) + "", s ? y.resolveWith(g, [o, c, T]) : y.rejectWith(g, [T, c, r]), T.statusCode(w), w = x, p && v.trigger(s ? "ajaxSuccess" : "ajaxError", [T, m, s ? o : r]), b.fireWith(g, [T, c]), p && (v.trigger("ajaxComplete", [T, m]), --gt.active || gt.event.trigger("ajaxStop")))
            }
            return T
        },
        getScript: function(t, e) {
            return gt.get(t, x, e, "script")
        },
        getJSON: function(t, e, i) {
            return gt.get(t, e, i, "json")
        }
    }), gt.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(t) {
                return gt.globalEval(t), t
            }
        }
    }), gt.ajaxPrefilter("script", function(t) {
        t.cache === x && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), gt.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var n, s = m.head || gt("head")[0] || m.documentElement;
            return {
                send: function(t, i) {
                    (n = m.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(t, e) {
                        (e || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, e || i(200, "success"))
                    }, s.insertBefore(n, s.firstChild)
                },
                abort: function() {
                    n && n.onload(x, !0)
                }
            }
        }
    });
    var Le = [],
        Oe = /(=)\?(?=&|$)|\?\?/;
    gt.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Le.pop() || gt.expando + "_" + fe++;
            return this[t] = !0, t
        }
    }), gt.ajaxPrefilter("json jsonp", function(t, e, i) {
        var n, s, o, r = !1 !== t.jsonp && (Oe.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && Oe.test(t.data) && "data");
        return r || "jsonp" === t.dataTypes[0] ? (n = t.jsonpCallback = gt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, r ? t[r] = t[r].replace(Oe, "$1" + n) : !1 !== t.jsonp && (t.url += (me.test(t.url) ? "&" : "?") + t.jsonp + "=" + n), t.converters["script json"] = function() {
            return o || gt.error(n + " was not called"), o[0]
        }, t.dataTypes[0] = "json", s = f[n], f[n] = function() {
            o = arguments
        }, i.always(function() {
            f[n] = s, t[n] && (t.jsonpCallback = e.jsonpCallback, Le.push(n)), o && gt.isFunction(s) && s(o[0]), o = s = x
        }), "script") : x
    });
    var ke, Re, De = 0,
        Pe = f.ActiveXObject && function() {
            var t;
            for (t in ke) ke[t](x, !0)
        };

    function $e() {
        try {
            return new f.XMLHttpRequest
        } catch (t) {}
    }
    gt.ajaxSettings.xhr = f.ActiveXObject ? function() {
        return !this.isLocal && $e() || function() {
            try {
                return new f.ActiveXObject("Microsoft.XMLHTTP")
            } catch (t) {}
        }()
    } : $e, Re = gt.ajaxSettings.xhr(), gt.support.cors = !!Re && "withCredentials" in Re, (Re = gt.support.ajax = !!Re) && gt.ajaxTransport(function(c) {
        var h;
        if (!c.crossDomain || gt.support.cors) return {
            send: function(t, r) {
                var a, e, l = c.xhr();
                if (c.username ? l.open(c.type, c.url, c.async, c.username, c.password) : l.open(c.type, c.url, c.async), c.xhrFields)
                    for (e in c.xhrFields) l[e] = c.xhrFields[e];
                c.mimeType && l.overrideMimeType && l.overrideMimeType(c.mimeType), c.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (e in t) l.setRequestHeader(e, t[e])
                } catch (t) {}
                l.send(c.hasContent && c.data || null), h = function(t, e) {
                    var i, n, s, o;
                    try {
                        if (h && (e || 4 === l.readyState))
                            if (h = x, a && (l.onreadystatechange = gt.noop, Pe && delete ke[a]), e) 4 !== l.readyState && l.abort();
                            else {
                                o = {}, i = l.status, n = l.getAllResponseHeaders(), "string" == typeof l.responseText && (o.text = l.responseText);
                                try {
                                    s = l.statusText
                                } catch (t) {
                                    s = ""
                                }
                                i || !c.isLocal || c.crossDomain ? 1223 === i && (i = 204) : i = o.text ? 200 : 404
                            }
                    } catch (t) {
                        e || r(-1, t)
                    }
                    o && r(i, s, o, n)
                }, c.async ? 4 === l.readyState ? setTimeout(h) : (a = ++De, Pe && (ke || (ke = {}, gt(f).unload(Pe)), ke[a] = h), l.onreadystatechange = h) : h()
            },
            abort: function() {
                h && h(x, !0)
            }
        }
    });
    var Ie, Me, Be = /^(?:toggle|show|hide)$/,
        Fe = RegExp("^(?:([+-])=|)(" + p + ")([a-z%]*)$", "i"),
        He = /queueHooks$/,
        je = [function(e, t, i) {
            var n, s, o, r, a, l, c, h, u, d = this,
                p = e.style,
                f = {},
                m = [],
                g = e.nodeType && Jt(e);
            for (s in i.queue || (null == (h = gt._queueHooks(e, "fx")).unqueued && (h.unqueued = 0, u = h.empty.fire, h.empty.fire = function() {
                    h.unqueued || u()
                }), h.unqueued++, d.always(function() {
                    d.always(function() {
                        h.unqueued--, gt.queue(e, "fx").length || h.empty.fire()
                    })
                })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === gt.css(e, "display") && "none" === gt.css(e, "float") && (gt.support.inlineBlockNeedsLayout && "inline" !== se(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", gt.support.shrinkWrapBlocks || d.always(function() {
                    p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                })), t)
                if (r = t[s], Be.exec(r)) {
                    if (delete t[s], l = l || "toggle" === r, r === (g ? "hide" : "show")) continue;
                    m.push(s)
                }
            if (o = m.length) {
                "hidden" in (a = gt._data(e, "fxshow") || gt._data(e, "fxshow", {})) && (g = a.hidden), l && (a.hidden = !g), g ? gt(e).show() : d.done(function() {
                    gt(e).hide()
                }), d.done(function() {
                    var t;
                    for (t in gt._removeData(e, "fxshow"), f) gt.style(e, t, f[t])
                });
                for (s = 0; s < o; s++) n = m[s], c = d.createTween(n, g ? a[n] : 0), f[n] = a[n] || gt.style(e, n), n in a || (a[n] = c.start, g && (c.end = c.start, c.start = "width" === n || "height" === n ? 1 : 0))
            }
        }],
        ze = {
            "*": [function(t, e) {
                var i, n, s = this.createTween(t, e),
                    o = Fe.exec(e),
                    r = s.cur(),
                    a = +r || 0,
                    l = 1,
                    c = 20;
                if (o) {
                    if (i = +o[2], "px" !== (n = o[3] || (gt.cssNumber[t] ? "" : "px")) && a)
                        for (a = gt.css(s.elem, t, !0) || i || 1; a /= l = l || ".5", gt.style(s.elem, t, a + n), l !== (l = s.cur() / r) && 1 !== l && --c;);
                    s.unit = n, s.start = a, s.end = o[1] ? a + (o[1] + 1) * i : i
                }
                return s
            }]
        };

    function We() {
        return setTimeout(function() {
            Ie = x
        }), Ie = gt.now()
    }

    function qe(o, t, e) {
        var i, r, a, n, s = 0,
            l = je.length,
            c = gt.Deferred().always(function() {
                delete h.elem
            }),
            h = function() {
                if (r) return !1;
                for (var t = Ie || We(), e = Math.max(0, u.startTime + u.duration - t), i = 1 - (e / u.duration || 0), n = 0, s = u.tweens.length; n < s; n++) u.tweens[n].run(i);
                return c.notifyWith(o, [u, i, e]), i < 1 && s ? e : (c.resolveWith(o, [u]), !1)
            },
            u = c.promise({
                elem: o,
                props: gt.extend({}, t),
                opts: gt.extend(!0, {
                    specialEasing: {}
                }, e),
                originalProperties: t,
                originalOptions: e,
                startTime: Ie || We(),
                duration: e.duration,
                tweens: [],
                createTween: function(t, e) {
                    var i = gt.Tween(o, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function(t) {
                    var e = 0,
                        i = t ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; e < i; e++) u.tweens[e].run(1);
                    return t ? c.resolveWith(o, [u, t]) : c.rejectWith(o, [u, t]), this
                }
            }),
            d = u.props;
        for (function(t, e) {
                var i, n, s, o, r;
                for (s in t)
                    if (n = gt.camelCase(s), o = e[n], i = t[s], gt.isArray(i) && (o = i[1], i = t[s] = i[0]), s !== n && (t[n] = i, delete t[s]), (r = gt.cssHooks[n]) && "expand" in r)
                        for (s in i = r.expand(i), delete t[n], i) s in t || (t[s] = i[s], e[s] = o);
                    else e[n] = o
            }(d, u.opts.specialEasing); s < l; s++)
            if (i = je[s].call(u, o, d, u.opts)) return i;
        return a = u, n = d, gt.each(n, function(t, e) {
            for (var i = (ze[t] || []).concat(ze["*"]), n = 0, s = i.length; n < s; n++)
                if (i[n].call(a, t, e)) return
        }), gt.isFunction(u.opts.start) && u.opts.start.call(o, u), gt.fx.timer(gt.extend(h, {
            elem: o,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function Ve(t, e, i, n, s) {
        return new Ve.prototype.init(t, e, i, n, s)
    }

    function Ue(t, e) {
        var i, n = {
                height: t
            },
            s = 0;
        for (e = e ? 1 : 0; s < 4; s += 2 - e) n["margin" + (i = Yt[s])] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function Ge(t) {
        return gt.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    gt.Animation = gt.extend(qe, {
        tweener: function(t, e) {
            gt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
            for (var i, n = 0, s = t.length; n < s; n++) i = t[n], ze[i] = ze[i] || [], ze[i].unshift(e)
        },
        prefilter: function(t, e) {
            e ? je.unshift(t) : je.push(t)
        }
    }), ((gt.Tween = Ve).prototype = {
        constructor: Ve,
        init: function(t, e, i, n, s, o) {
            this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (gt.cssNumber[i] ? "" : "px")
        },
        cur: function() {
            var t = Ve.propHooks[this.prop];
            return t && t.get ? t.get(this) : Ve.propHooks._default.get(this)
        },
        run: function(t) {
            var e, i = Ve.propHooks[this.prop];
            return this.pos = e = this.options.duration ? gt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Ve.propHooks._default.set(this), this
        }
    }).init.prototype = Ve.prototype, (Ve.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = gt.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0 : t.elem[t.prop]
            },
            set: function(t) {
                gt.fx.step[t.prop] ? gt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[gt.cssProps[t.prop]] || gt.cssHooks[t.prop]) ? gt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
            }
        }
    }).scrollTop = Ve.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, gt.each(["toggle", "show", "hide"], function(t, n) {
        var s = gt.fn[n];
        gt.fn[n] = function(t, e, i) {
            return null == t || "boolean" == typeof t ? s.apply(this, arguments) : this.animate(Ue(n, !0), t, e, i)
        }
    }), gt.fn.extend({
        fadeTo: function(t, e, i, n) {
            return this.filter(Jt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, i, n)
        },
        animate: function(e, t, i, n) {
            var s = gt.isEmptyObject(e),
                o = gt.speed(t, i, n),
                r = function() {
                    var t = qe(this, gt.extend({}, e), o);
                    r.finish = function() {
                        t.stop(!0)
                    }, (s || gt._data(this, "finish")) && t.stop(!0)
                };
            return r.finish = r, s || !1 === o.queue ? this.each(r) : this.queue(o.queue, r)
        },
        stop: function(s, t, o) {
            var r = function(t) {
                var e = t.stop;
                delete t.stop, e(o)
            };
            return "string" != typeof s && (o = t, t = s, s = x), t && !1 !== s && this.queue(s || "fx", []), this.each(function() {
                var t = !0,
                    e = null != s && s + "queueHooks",
                    i = gt.timers,
                    n = gt._data(this);
                if (e) n[e] && n[e].stop && r(n[e]);
                else
                    for (e in n) n[e] && n[e].stop && He.test(e) && r(n[e]);
                for (e = i.length; e--;) i[e].elem !== this || null != s && i[e].queue !== s || (i[e].anim.stop(o), t = !1, i.splice(e, 1));
                (t || !o) && gt.dequeue(this, s)
            })
        },
        finish: function(r) {
            return !1 !== r && (r = r || "fx"), this.each(function() {
                var t, e = gt._data(this),
                    i = e[r + "queue"],
                    n = e[r + "queueHooks"],
                    s = gt.timers,
                    o = i ? i.length : 0;
                for (e.finish = !0, gt.queue(this, r, []), n && n.cur && n.cur.finish && n.cur.finish.call(this), t = s.length; t--;) s[t].elem === this && s[t].queue === r && (s[t].anim.stop(!0), s.splice(t, 1));
                for (t = 0; t < o; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete e.finish
            })
        }
    }), gt.each({
        slideDown: Ue("show"),
        slideUp: Ue("hide"),
        slideToggle: Ue("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, n) {
        gt.fn[t] = function(t, e, i) {
            return this.animate(n, t, e, i)
        }
    }), gt.speed = function(t, e, i) {
        var n = t && "object" == typeof t ? gt.extend({}, t) : {
            complete: i || !i && e || gt.isFunction(t) && t,
            duration: t,
            easing: i && e || e && !gt.isFunction(e) && e
        };
        return n.duration = gt.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in gt.fx.speeds ? gt.fx.speeds[n.duration] : gt.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
            gt.isFunction(n.old) && n.old.call(this), n.queue && gt.dequeue(this, n.queue)
        }, n
    }, gt.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        }
    }, gt.timers = [], gt.fx = Ve.prototype.init, gt.fx.tick = function() {
        var t, e = gt.timers,
            i = 0;
        for (Ie = gt.now(); e.length > i; i++)(t = e[i])() || e[i] !== t || e.splice(i--, 1);
        e.length || gt.fx.stop(), Ie = x
    }, gt.fx.timer = function(t) {
        t() && gt.timers.push(t) && gt.fx.start()
    }, gt.fx.interval = 13, gt.fx.start = function() {
        Me || (Me = setInterval(gt.fx.tick, gt.fx.interval))
    }, gt.fx.stop = function() {
        clearInterval(Me), Me = null
    }, gt.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, gt.fx.step = {}, gt.expr && gt.expr.filters && (gt.expr.filters.animated = function(e) {
        return gt.grep(gt.timers, function(t) {
            return e === t.elem
        }).length
    }), gt.fn.offset = function(e) {
        if (arguments.length) return e === x ? this : this.each(function(t) {
            gt.offset.setOffset(this, e, t)
        });
        var t, i, n = {
                top: 0,
                left: 0
            },
            s = this[0],
            o = s && s.ownerDocument;
        return o ? (t = o.documentElement, gt.contains(t, s) ? (typeof s.getBoundingClientRect !== v && (n = s.getBoundingClientRect()), i = Ge(o), {
            top: n.top + (i.pageYOffset || t.scrollTop) - (t.clientTop || 0),
            left: n.left + (i.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
        }) : n) : void 0
    }, gt.offset = {
        setOffset: function(t, e, i) {
            var n = gt.css(t, "position");
            "static" === n && (t.style.position = "relative");
            var s, o, r = gt(t),
                a = r.offset(),
                l = gt.css(t, "top"),
                c = gt.css(t, "left"),
                h = {},
                u = {};
            ("absolute" === n || "fixed" === n) && -1 < gt.inArray("auto", [l, c]) ? (s = (u = r.position()).top, o = u.left) : (s = parseFloat(l) || 0, o = parseFloat(c) || 0), gt.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (h.top = e.top - a.top + s), null != e.left && (h.left = e.left - a.left + o), "using" in e ? e.using.call(t, h) : r.css(h)
        }
    }, gt.fn.extend({
        position: function() {
            if (this[0]) {
                var t, e, i = {
                        top: 0,
                        left: 0
                    },
                    n = this[0];
                return "fixed" === gt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), gt.nodeName(t[0], "html") || (i = t.offset()), i.top += gt.css(t[0], "borderTopWidth", !0), i.left += gt.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - i.top - gt.css(n, "marginTop", !0),
                    left: e.left - i.left - gt.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || m.documentElement; t && !gt.nodeName(t, "html") && "static" === gt.css(t, "position");) t = t.offsetParent;
                return t || m.documentElement
            })
        }
    }), gt.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, s) {
        var o = /Y/.test(s);
        gt.fn[e] = function(t) {
            return gt.access(this, function(t, e, i) {
                var n = Ge(t);
                return i === x ? n ? s in n ? n[s] : n.document.documentElement[e] : t[e] : (n ? n.scrollTo(o ? gt(n).scrollLeft() : i, o ? i : gt(n).scrollTop()) : t[e] = i, x)
            }, e, t, arguments.length, null)
        }
    }), gt.each({
        Height: "height",
        Width: "width"
    }, function(o, r) {
        gt.each({
            padding: "inner" + o,
            content: r,
            "": "outer" + o
        }, function(n, t) {
            gt.fn[t] = function(t, e) {
                var i = arguments.length && (n || "boolean" != typeof t),
                    s = n || (!0 === t || !0 === e ? "margin" : "border");
                return gt.access(this, function(t, e, i) {
                    var n;
                    return gt.isWindow(t) ? t.document.documentElement["client" + o] : 9 === t.nodeType ? (n = t.documentElement, Math.max(t.body["scroll" + o], n["scroll" + o], t.body["offset" + o], n["offset" + o], n["client" + o])) : i === x ? gt.css(t, e, s) : gt.style(t, e, i, s)
                }, r, i ? t : x, i, null)
            }
        })
    }), f.jQuery = f.$ = gt, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() {
        return gt
    })
}(window), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery");

function _inherits(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
t.prototype = new e
}! function(t) {
"use strict";
var e = jQuery.fn.jquery.split(" ")[0].split(".");
if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || 3 < e[0]) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(),
function(n) {
"use strict";
n.fn.emulateTransitionEnd = function(t) {
    var e = !1,
        i = this;
    n(this).one("bsTransitionEnd", function() {
        e = !0
    });
    return setTimeout(function() {
        e || n(i).trigger(n.support.transition.end)
    }, t), this
}, n(function() {
    n.support.transition = function() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }(), n.support.transition && (n.event.special.bsTransitionEnd = {
        bindType: n.support.transition.end,
        delegateType: n.support.transition.end,
        handle: function(t) {
            if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
        }
    })
})
}(jQuery),
function(o) {
"use strict";
var e = '[data-dismiss="alert"]',
    r = function(t) {
        o(t).on("click", e, this.close)
    };
r.VERSION = "3.3.7", r.TRANSITION_DURATION = 150, r.prototype.close = function(t) {
    function e() {
        s.detach().trigger("closed.bs.alert").remove()
    }
    var i = o(this),
        n = i.attr("data-target");
    n || (n = (n = i.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, ""));
    var s = o("#" === n ? [] : n);
    t && t.preventDefault(), s.length || (s = i.closest(".alert")), s.trigger(t = o.Event("close.bs.alert")), t.isDefaultPrevented() || (s.removeClass("in"), o.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", e).emulateTransitionEnd(r.TRANSITION_DURATION) : e())
};
var t = o.fn.alert;
o.fn.alert = function(i) {
    return this.each(function() {
        var t = o(this),
            e = t.data("bs.alert");
        e || t.data("bs.alert", e = new r(this)), "string" == typeof i && e[i].call(t)
    })
}, o.fn.alert.Constructor = r, o.fn.alert.noConflict = function() {
    return o.fn.alert = t, this
}, o(document).on("click.bs.alert.data-api", e, r.prototype.close)
}(jQuery),
function(o) {
"use strict";

function i(n) {
    return this.each(function() {
        var t = o(this),
            e = t.data("bs.button"),
            i = "object" == typeof n && n;
        e || t.data("bs.button", e = new s(this, i)), "toggle" == n ? e.toggle() : n && e.setState(n)
    })
}
var s = function(t, e) {
    this.$element = o(t), this.options = o.extend({}, s.DEFAULTS, e), this.isLoading = !1
};
s.VERSION = "3.3.7", s.DEFAULTS = {
    loadingText: "loading..."
}, s.prototype.setState = function(t) {
    var e = "disabled",
        i = this.$element,
        n = i.is("input") ? "val" : "html",
        s = i.data();
    t += "Text", null == s.resetText && i.data("resetText", i[n]()), setTimeout(o.proxy(function() {
        i[n](null == s[t] ? this.options[t] : s[t]), "loadingText" == t ? (this.isLoading = !0, i.addClass(e).attr(e, e).prop(e, !0)) : this.isLoading && (this.isLoading = !1, i.removeClass(e).removeAttr(e).prop(e, !1))
    }, this), 0)
}, s.prototype.toggle = function() {
    var t = !0,
        e = this.$element.closest('[data-toggle="buttons"]');
    if (e.length) {
        var i = this.$element.find("input");
        "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
};
var t = o.fn.button;
o.fn.button = i, o.fn.button.Constructor = s, o.fn.button.noConflict = function() {
    return o.fn.button = t, this
}, o(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    var e = o(t.target).closest(".btn");
    i.call(e, "toggle"), o(t.target).is('input[type="radio"], input[type="checkbox"]') || (t.preventDefault(), e.is("input,button") ? e.trigger("focus") : e.find("input:visible,button:visible").first().trigger("focus"))
}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
    o(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
})
}(jQuery),
function(u) {
"use strict";

function r(s) {
    return this.each(function() {
        var t = u(this),
            e = t.data("bs.carousel"),
            i = u.extend({}, d.DEFAULTS, t.data(), "object" == typeof s && s),
            n = "string" == typeof s ? s : i.slide;
        e || t.data("bs.carousel", e = new d(this, i)), "number" == typeof s ? e.to(s) : n ? e[n]() : i.interval && e.pause().cycle()
    })
}
var d = function(t, e) {
    this.$element = u(t), this.$indicators = this.$element.find(".carousel-indicators"), this.options = e, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", u.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", u.proxy(this.pause, this)).on("mouseleave.bs.carousel", u.proxy(this.cycle, this))
};
d.VERSION = "3.3.7", d.TRANSITION_DURATION = 600, d.DEFAULTS = {
    interval: 5e3,
    pause: "hover",
    wrap: !0,
    keyboard: !0
}, d.prototype.keydown = function(t) {
    if (!/input|textarea/i.test(t.target.tagName)) {
        switch (t.which) {
            case 37:
                this.prev();
                break;
            case 39:
                this.next();
                break;
            default:
                return
        }
        t.preventDefault()
    }
}, d.prototype.cycle = function(t) {
    return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(u.proxy(this.next, this), this.options.interval)), this
}, d.prototype.getItemIndex = function(t) {
    return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
}, d.prototype.getItemForDirection = function(t, e) {
    var i = this.getItemIndex(e);
    if (("prev" == t && 0 === i || "next" == t && i == this.$items.length - 1) && !this.options.wrap) return e;
    var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
    return this.$items.eq(n)
}, d.prototype.to = function(t) {
    var e = this,
        i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
    if (!(t > this.$items.length - 1 || t < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
        e.to(t)
    }) : i == t ? this.pause().cycle() : this.slide(i < t ? "next" : "prev", this.$items.eq(t))
}, d.prototype.pause = function(t) {
    return t || (this.paused = !0), this.$element.find(".next, .prev").length && u.support.transition && (this.$element.trigger(u.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
}, d.prototype.next = function() {
    if (!this.sliding) return this.slide("next")
}, d.prototype.prev = function() {
    if (!this.sliding) return this.slide("prev")
}, d.prototype.slide = function(t, e) {
    var i = this.$element.find(".item.active"),
        n = e || this.getItemForDirection(t, i),
        s = this.interval,
        o = "next" == t ? "left" : "right",
        r = this;
    if (n.hasClass("active")) return this.sliding = !1;
    var a = n[0],
        l = u.Event("slide.bs.carousel", {
            relatedTarget: a,
            direction: o
        });
    if (this.$element.trigger(l), !l.isDefaultPrevented()) {
        if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
            this.$indicators.find(".active").removeClass("active");
            var c = u(this.$indicators.children()[this.getItemIndex(n)]);
            c && c.addClass("active")
        }
        var h = u.Event("slid.bs.carousel", {
            relatedTarget: a,
            direction: o
        });
        return u.support.transition && this.$element.hasClass("slide") ? (n.addClass(t), n[0].offsetWidth, i.addClass(o), n.addClass(o), i.one("bsTransitionEnd", function() {
            n.removeClass([t, o].join(" ")).addClass("active"), i.removeClass(["active", o].join(" ")), r.sliding = !1, setTimeout(function() {
                r.$element.trigger(h)
            }, 0)
        }).emulateTransitionEnd(d.TRANSITION_DURATION)) : (i.removeClass("active"), n.addClass("active"), this.sliding = !1, this.$element.trigger(h)), s && this.cycle(), this
    }
};
var t = u.fn.carousel;
u.fn.carousel = r, u.fn.carousel.Constructor = d, u.fn.carousel.noConflict = function() {
    return u.fn.carousel = t, this
};
var e = function(t) {
    var e, i = u(this),
        n = u(i.attr("data-target") || (e = i.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, ""));
    if (n.hasClass("carousel")) {
        var s = u.extend({}, n.data(), i.data()),
            o = i.attr("data-slide-to");
        o && (s.interval = !1), r.call(n, s), o && n.data("bs.carousel").to(o), t.preventDefault()
    }
};
u(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), u(window).on("load", function() {
    u('[data-ride="carousel"]').each(function() {
        var t = u(this);
        r.call(t, t.data())
    })
})
}(jQuery),
function(r) {
"use strict";

function s(t) {
    var e, i = t.attr("data-target") || (e = t.attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "");
    return r(i)
}

function a(n) {
    return this.each(function() {
        var t = r(this),
            e = t.data("bs.collapse"),
            i = r.extend({}, l.DEFAULTS, t.data(), "object" == typeof n && n);
        !e && i.toggle && /show|hide/.test(n) && (i.toggle = !1), e || t.data("bs.collapse", e = new l(this, i)), "string" == typeof n && e[n]()
    })
}
var l = function(t, e) {
    this.$element = r(t), this.options = r.extend({}, l.DEFAULTS, e), this.$trigger = r('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
};
l.VERSION = "3.3.7", l.TRANSITION_DURATION = 350, l.DEFAULTS = {
    toggle: !0
}, l.prototype.dimension = function() {
    return this.$element.hasClass("width") ? "width" : "height"
}, l.prototype.show = function() {
    if (!this.transitioning && !this.$element.hasClass("in")) {
        var t, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
        if (!(e && e.length && ((t = e.data("bs.collapse")) && t.transitioning))) {
            var i = r.Event("show.bs.collapse");
            if (this.$element.trigger(i), !i.isDefaultPrevented()) {
                e && e.length && (a.call(e, "hide"), t || e.data("bs.collapse", null));
                var n = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[n](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                var s = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[n](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                };
                if (!r.support.transition) return s.call(this);
                var o = r.camelCase(["scroll", n].join("-"));
                this.$element.one("bsTransitionEnd", r.proxy(s, this)).emulateTransitionEnd(l.TRANSITION_DURATION)[n](this.$element[0][o])
            }
        }
    }
}, l.prototype.hide = function() {
    if (!this.transitioning && this.$element.hasClass("in")) {
        var t = r.Event("hide.bs.collapse");
        if (this.$element.trigger(t), !t.isDefaultPrevented()) {
            var e = this.dimension();
            this.$element[e](this.$element[e]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
            var i = function() {
                this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
            };
            return r.support.transition ? void this.$element[e](0).one("bsTransitionEnd", r.proxy(i, this)).emulateTransitionEnd(l.TRANSITION_DURATION) : i.call(this)
        }
    }
}, l.prototype.toggle = function() {
    this[this.$element.hasClass("in") ? "hide" : "show"]()
}, l.prototype.getParent = function() {
    return r(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(r.proxy(function(t, e) {
        var i = r(e);
        this.addAriaAndCollapsedClass(s(i), i)
    }, this)).end()
}, l.prototype.addAriaAndCollapsedClass = function(t, e) {
    var i = t.hasClass("in");
    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
};
var t = r.fn.collapse;
r.fn.collapse = a, r.fn.collapse.Constructor = l, r.fn.collapse.noConflict = function() {
    return r.fn.collapse = t, this
}, r(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
    var e = r(this);
    e.attr("data-target") || t.preventDefault();
    var i = s(e),
        n = i.data("bs.collapse") ? "toggle" : e.data();
    a.call(i, n)
})
}(jQuery),
function(r) {
"use strict";

function a(t) {
    var e = t.attr("data-target");
    e || (e = (e = t.attr("href")) && /#[A-Za-z]/.test(e) && e.replace(/.*(?=#[^\s]*$)/, ""));
    var i = e && r(e);
    return i && i.length ? i : t.parent()
}

function o(n) {
    n && 3 === n.which || (r(".dropdown-backdrop").remove(), r(l).each(function() {
        var t = r(this),
            e = a(t),
            i = {
                relatedTarget: this
            };
        e.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && r.contains(e[0], n.target) || (e.trigger(n = r.Event("hide.bs.dropdown", i)), n.isDefaultPrevented() || (t.attr("aria-expanded", "false"), e.removeClass("open").trigger(r.Event("hidden.bs.dropdown", i)))))
    }))
}
var l = '[data-toggle="dropdown"]',
    n = function(t) {
        r(t).on("click.bs.dropdown", this.toggle)
    };
n.VERSION = "3.3.7", n.prototype.toggle = function(t) {
    var e = r(this);
    if (!e.is(".disabled, :disabled")) {
        var i = a(e),
            n = i.hasClass("open");
        if (o(), !n) {
            "ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length && r(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(r(this)).on("click", o);
            var s = {
                relatedTarget: this
            };
            if (i.trigger(t = r.Event("show.bs.dropdown", s)), t.isDefaultPrevented()) return;
            e.trigger("focus").attr("aria-expanded", "true"), i.toggleClass("open").trigger(r.Event("shown.bs.dropdown", s))
        }
        return !1
    }
}, n.prototype.keydown = function(t) {
    if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName)) {
        var e = r(this);
        if (t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled")) {
            var i = a(e),
                n = i.hasClass("open");
            if (!n && 27 != t.which || n && 27 == t.which) return 27 == t.which && i.find(l).trigger("focus"), e.trigger("click");
            var s = i.find(".dropdown-menu li:not(.disabled):visible a");
            if (s.length) {
                var o = s.index(t.target);
                38 == t.which && 0 < o && o--, 40 == t.which && o < s.length - 1 && o++, ~o || (o = 0), s.eq(o).trigger("focus")
            }
        }
    }
};
var t = r.fn.dropdown;
r.fn.dropdown = function(i) {
    return this.each(function() {
        var t = r(this),
            e = t.data("bs.dropdown");
        e || t.data("bs.dropdown", e = new n(this)), "string" == typeof i && e[i].call(t)
    })
}, r.fn.dropdown.Constructor = n, r.fn.dropdown.noConflict = function() {
    return r.fn.dropdown = t, this
}, r(document).on("click.bs.dropdown.data-api", o).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
    t.stopPropagation()
}).on("click.bs.dropdown.data-api", l, n.prototype.toggle).on("keydown.bs.dropdown.data-api", l, n.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown)
}(jQuery),
function(o) {
"use strict";

function r(n, s) {
    return this.each(function() {
        var t = o(this),
            e = t.data("bs.modal"),
            i = o.extend({}, a.DEFAULTS, t.data(), "object" == typeof n && n);
        e || t.data("bs.modal", e = new a(this, i)), "string" == typeof n ? e[n](s) : i.show && e.show(s)
    })
}
var a = function(t, e) {
    this.options = e, this.$body = o(document.body), this.$element = o(t), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, o.proxy(function() {
        this.$element.trigger("loaded.bs.modal")
    }, this))
};
a.VERSION = "3.3.7", a.TRANSITION_DURATION = 300, a.BACKDROP_TRANSITION_DURATION = 150, a.DEFAULTS = {
    backdrop: !0,
    keyboard: !0,
    show: !0
}, a.prototype.toggle = function(t) {
    return this.isShown ? this.hide() : this.show(t)
}, a.prototype.show = function(i) {
    var n = this,
        t = o.Event("show.bs.modal", {
            relatedTarget: i
        });
    this.$element.trigger(t), this.isShown || t.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', o.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
        n.$element.one("mouseup.dismiss.bs.modal", function(t) {
            o(t.target).is(n.$element) && (n.ignoreBackdropClick = !0)
        })
    }), this.backdrop(function() {
        var t = o.support.transition && n.$element.hasClass("fade");
        n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), t && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
        var e = o.Event("shown.bs.modal", {
            relatedTarget: i
        });
        t ? n.$dialog.one("bsTransitionEnd", function() {
            n.$element.trigger("focus").trigger(e)
        }).emulateTransitionEnd(a.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(e)
    }))
}, a.prototype.hide = function(t) {
    t && t.preventDefault(), t = o.Event("hide.bs.modal"), this.$element.trigger(t), this.isShown && !t.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), o(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), o.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", o.proxy(this.hideModal, this)).emulateTransitionEnd(a.TRANSITION_DURATION) : this.hideModal())
}, a.prototype.enforceFocus = function() {
    o(document).off("focusin.bs.modal").on("focusin.bs.modal", o.proxy(function(t) {
        document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
    }, this))
}, a.prototype.escape = function() {
    this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", o.proxy(function(t) {
        27 == t.which && this.hide()
    }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
}, a.prototype.resize = function() {
    this.isShown ? o(window).on("resize.bs.modal", o.proxy(this.handleUpdate, this)) : o(window).off("resize.bs.modal")
}, a.prototype.hideModal = function() {
    var t = this;
    this.$element.hide(), this.backdrop(function() {
        t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
    })
}, a.prototype.removeBackdrop = function() {
    this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
}, a.prototype.backdrop = function(t) {
    var e = this,
        i = this.$element.hasClass("fade") ? "fade" : "";
    if (this.isShown && this.options.backdrop) {
        var n = o.support.transition && i;
        if (this.$backdrop = o(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", o.proxy(function(t) {
                return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
            }, this)), n && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !t) return;
        n ? this.$backdrop.one("bsTransitionEnd", t).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : t()
    } else if (!this.isShown && this.$backdrop) {
        this.$backdrop.removeClass("in");
        var s = function() {
            e.removeBackdrop(), t && t()
        };
        o.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(a.BACKDROP_TRANSITION_DURATION) : s()
    } else t && t()
}, a.prototype.handleUpdate = function() {
    this.adjustDialog()
}, a.prototype.adjustDialog = function() {
    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
        paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
        paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
    })
}, a.prototype.resetAdjustments = function() {
    this.$element.css({
        paddingLeft: "",
        paddingRight: ""
    })
}, a.prototype.checkScrollbar = function() {
    var t = window.innerWidth;
    if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
}, a.prototype.setScrollbar = function() {
    var t = parseInt(this.$body.css("padding-right") || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
}, a.prototype.resetScrollbar = function() {
    this.$body.css("padding-right", this.originalBodyPad)
}, a.prototype.measureScrollbar = function() {
    var t = document.createElement("div");
    t.className = "modal-scrollbar-measure", this.$body.append(t);
    var e = t.offsetWidth - t.clientWidth;
    return this.$body[0].removeChild(t), e
};
var t = o.fn.modal;
o.fn.modal = r, o.fn.modal.Constructor = a, o.fn.modal.noConflict = function() {
    return o.fn.modal = t, this
}, o(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
    var e = o(this),
        i = e.attr("href"),
        n = o(e.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
        s = n.data("bs.modal") ? "toggle" : o.extend({
            remote: !/#/.test(i) && i
        }, n.data(), e.data());
    e.is("a") && t.preventDefault(), n.one("show.bs.modal", function(t) {
        t.isDefaultPrevented() || n.one("hidden.bs.modal", function() {
            e.is(":visible") && e.trigger("focus")
        })
    }), r.call(n, s, this)
})
}(jQuery),
function(m) {
"use strict";
var g = function(t, e) {
    this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
};
g.VERSION = "3.3.7", g.TRANSITION_DURATION = 150, g.DEFAULTS = {
    animation: !0,
    placement: "top",
    selector: !1,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: "hover focus",
    title: "",
    delay: 0,
    html: !1,
    container: !1,
    viewport: {
        selector: "body",
        padding: 0
    }
}, g.prototype.init = function(t, e, i) {
    if (this.enabled = !0, this.type = t, this.$element = m(e), this.options = this.getOptions(i), this.$viewport = this.options.viewport && m(m.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
            click: !1,
            hover: !1,
            focus: !1
        }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
    for (var n = this.options.trigger.split(" "), s = n.length; s--;) {
        var o = n[s];
        if ("click" == o) this.$element.on("click." + this.type, this.options.selector, m.proxy(this.toggle, this));
        else if ("manual" != o) {
            var r = "hover" == o ? "mouseenter" : "focusin",
                a = "hover" == o ? "mouseleave" : "focusout";
            this.$element.on(r + "." + this.type, this.options.selector, m.proxy(this.enter, this)), this.$element.on(a + "." + this.type, this.options.selector, m.proxy(this.leave, this))
        }
    }
    this.options.selector ? this._options = m.extend({}, this.options, {
        trigger: "manual",
        selector: ""
    }) : this.fixTitle()
}, g.prototype.getDefaults = function() {
    return g.DEFAULTS
}, g.prototype.getOptions = function(t) {
    return (t = m.extend({}, this.getDefaults(), this.$element.data(), t)).delay && "number" == typeof t.delay && (t.delay = {
        show: t.delay,
        hide: t.delay
    }), t
}, g.prototype.getDelegateOptions = function() {
    var i = {},
        n = this.getDefaults();
    return this._options && m.each(this._options, function(t, e) {
        n[t] != e && (i[t] = e)
    }), i
}, g.prototype.enter = function(t) {
    var e = t instanceof this.constructor ? t : m(t.currentTarget).data("bs." + this.type);
    return e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e)), t instanceof m.Event && (e.inState["focusin" == t.type ? "focus" : "hover"] = !0), e.tip().hasClass("in") || "in" == e.hoverState ? void(e.hoverState = "in") : (clearTimeout(e.timeout), e.hoverState = "in", e.options.delay && e.options.delay.show ? void(e.timeout = setTimeout(function() {
        "in" == e.hoverState && e.show()
    }, e.options.delay.show)) : e.show())
}, g.prototype.isInStateTrue = function() {
    for (var t in this.inState)
        if (this.inState[t]) return !0;
    return !1
}, g.prototype.leave = function(t) {
    var e = t instanceof this.constructor ? t : m(t.currentTarget).data("bs." + this.type);
    if (e || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e)), t instanceof m.Event && (e.inState["focusout" == t.type ? "focus" : "hover"] = !1), !e.isInStateTrue()) return clearTimeout(e.timeout), e.hoverState = "out", e.options.delay && e.options.delay.hide ? void(e.timeout = setTimeout(function() {
        "out" == e.hoverState && e.hide()
    }, e.options.delay.hide)) : e.hide()
}, g.prototype.show = function() {
    var t = m.Event("show.bs." + this.type);
    if (this.hasContent() && this.enabled) {
        this.$element.trigger(t);
        var e = m.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
        if (t.isDefaultPrevented() || !e) return;
        var i = this,
            n = this.tip(),
            s = this.getUID(this.type);
        this.setContent(), n.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && n.addClass("fade");
        var o = "function" == typeof this.options.placement ? this.options.placement.call(this, n[0], this.$element[0]) : this.options.placement,
            r = /\s?auto?\s?/i,
            a = r.test(o);
        a && (o = o.replace(r, "") || "top"), n.detach().css({
            top: 0,
            left: 0,
            display: "block"
        }).addClass(o).data("bs." + this.type, this), this.options.container ? n.appendTo(this.options.container) : n.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
        var l = this.getPosition(),
            c = n[0].offsetWidth,
            h = n[0].offsetHeight;
        if (a) {
            var u = o,
                d = this.getPosition(this.$viewport);
            o = "bottom" == o && l.bottom + h > d.bottom ? "top" : "top" == o && l.top - h < d.top ? "bottom" : "right" == o && l.right + c > d.width ? "left" : "left" == o && l.left - c < d.left ? "right" : o, n.removeClass(u).addClass(o)
        }
        var p = this.getCalculatedOffset(o, l, c, h);
        this.applyPlacement(p, o);
        var f = function() {
            var t = i.hoverState;
            i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
        };
        m.support.transition && this.$tip.hasClass("fade") ? n.one("bsTransitionEnd", f).emulateTransitionEnd(g.TRANSITION_DURATION) : f()
    }
}, g.prototype.applyPlacement = function(t, e) {
    var i = this.tip(),
        n = i[0].offsetWidth,
        s = i[0].offsetHeight,
        o = parseInt(i.css("margin-top"), 10),
        r = parseInt(i.css("margin-left"), 10);
    isNaN(o) && (o = 0), isNaN(r) && (r = 0), t.top += o, t.left += r, m.offset.setOffset(i[0], m.extend({
        using: function(t) {
            i.css({
                top: Math.round(t.top),
                left: Math.round(t.left)
            })
        }
    }, t), 0), i.addClass("in");
    var a = i[0].offsetWidth,
        l = i[0].offsetHeight;
    "top" == e && l != s && (t.top = t.top + s - l);
    var c = this.getViewportAdjustedDelta(e, t, a, l);
    c.left ? t.left += c.left : t.top += c.top;
    var h = /top|bottom/.test(e),
        u = h ? 2 * c.left - n + a : 2 * c.top - s + l,
        d = h ? "offsetWidth" : "offsetHeight";
    i.offset(t), this.replaceArrow(u, i[0][d], h)
}, g.prototype.replaceArrow = function(t, e, i) {
    this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
}, g.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle();
    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
}, g.prototype.hide = function(t) {
    function e() {
        "in" != i.hoverState && n.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), t && t()
    }
    var i = this,
        n = m(this.$tip),
        s = m.Event("hide.bs." + this.type);
    if (this.$element.trigger(s), !s.isDefaultPrevented()) return n.removeClass("in"), m.support.transition && n.hasClass("fade") ? n.one("bsTransitionEnd", e).emulateTransitionEnd(g.TRANSITION_DURATION) : e(), this.hoverState = null, this
}, g.prototype.fixTitle = function() {
    var t = this.$element;
    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
}, g.prototype.hasContent = function() {
    return this.getTitle()
}, g.prototype.getPosition = function(t) {
    var e = (t = t || this.$element)[0],
        i = "BODY" == e.tagName,
        n = e.getBoundingClientRect();
    null == n.width && (n = m.extend({}, n, {
        width: n.right - n.left,
        height: n.bottom - n.top
    }));
    var s = window.SVGElement && e instanceof window.SVGElement,
        o = i ? {
            top: 0,
            left: 0
        } : s ? null : t.offset(),
        r = {
            scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
        },
        a = i ? {
            width: m(window).width(),
            height: m(window).height()
        } : null;
    return m.extend({}, n, r, a, o)
}, g.prototype.getCalculatedOffset = function(t, e, i, n) {
    return "bottom" == t ? {
        top: e.top + e.height,
        left: e.left + e.width / 2 - i / 2
    } : "top" == t ? {
        top: e.top - n,
        left: e.left + e.width / 2 - i / 2
    } : "left" == t ? {
        top: e.top + e.height / 2 - n / 2,
        left: e.left - i
    } : {
        top: e.top + e.height / 2 - n / 2,
        left: e.left + e.width
    }
}, g.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
    var s = {
        top: 0,
        left: 0
    };
    if (!this.$viewport) return s;
    var o = this.options.viewport && this.options.viewport.padding || 0,
        r = this.getPosition(this.$viewport);
    if (/right|left/.test(t)) {
        var a = e.top - o - r.scroll,
            l = e.top + o - r.scroll + n;
        a < r.top ? s.top = r.top - a : l > r.top + r.height && (s.top = r.top + r.height - l)
    } else {
        var c = e.left - o,
            h = e.left + o + i;
        c < r.left ? s.left = r.left - c : h > r.right && (s.left = r.left + r.width - h)
    }
    return s
}, g.prototype.getTitle = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
}, g.prototype.getUID = function(t) {
    for (; t += ~~(1e6 * Math.random()), document.getElementById(t););
    return t
}, g.prototype.tip = function() {
    if (!this.$tip && (this.$tip = m(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
    return this.$tip
}, g.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
}, g.prototype.enable = function() {
    this.enabled = !0
}, g.prototype.disable = function() {
    this.enabled = !1
}, g.prototype.toggleEnabled = function() {
    this.enabled = !this.enabled
}, g.prototype.toggle = function(t) {
    var e = this;
    t && ((e = m(t.currentTarget).data("bs." + this.type)) || (e = new this.constructor(t.currentTarget, this.getDelegateOptions()), m(t.currentTarget).data("bs." + this.type, e))), t ? (e.inState.click = !e.inState.click, e.isInStateTrue() ? e.enter(e) : e.leave(e)) : e.tip().hasClass("in") ? e.leave(e) : e.enter(e)
}, g.prototype.destroy = function() {
    var t = this;
    clearTimeout(this.timeout), this.hide(function() {
        t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
    })
};
var t = m.fn.tooltip;
m.fn.tooltip = function(n) {
    return this.each(function() {
        var t = m(this),
            e = t.data("bs.tooltip"),
            i = "object" == typeof n && n;
        !e && /destroy|hide/.test(n) || (e || t.data("bs.tooltip", e = new g(this, i)), "string" == typeof n && e[n]())
    })
}, m.fn.tooltip.Constructor = g, m.fn.tooltip.noConflict = function() {
    return m.fn.tooltip = t, this
}
}(jQuery),
function(s) {
"use strict";
var o = function(t, e) {
    this.init("popover", t, e)
};
if (!s.fn.tooltip) throw new Error("Popover requires tooltip.js");
o.VERSION = "3.3.7", o.DEFAULTS = s.extend({}, s.fn.tooltip.Constructor.DEFAULTS, {
    placement: "right",
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
}), ((o.prototype = s.extend({}, s.fn.tooltip.Constructor.prototype)).constructor = o).prototype.getDefaults = function() {
    return o.DEFAULTS
}, o.prototype.setContent = function() {
    var t = this.tip(),
        e = this.getTitle(),
        i = this.getContent();
    t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
}, o.prototype.hasContent = function() {
    return this.getTitle() || this.getContent()
}, o.prototype.getContent = function() {
    var t = this.$element,
        e = this.options;
    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
}, o.prototype.arrow = function() {
    return this.$arrow = this.$arrow || this.tip().find(".arrow")
};
var t = s.fn.popover;
s.fn.popover = function(n) {
    return this.each(function() {
        var t = s(this),
            e = t.data("bs.popover"),
            i = "object" == typeof n && n;
        !e && /destroy|hide/.test(n) || (e || t.data("bs.popover", e = new o(this, i)), "string" == typeof n && e[n]())
    })
}, s.fn.popover.Constructor = o, s.fn.popover.noConflict = function() {
    return s.fn.popover = t, this
}
}(jQuery),
function(o) {
"use strict";

function s(t, e) {
    this.$body = o(document.body), this.$scrollElement = o(o(t).is(document.body) ? window : t), this.options = o.extend({}, s.DEFAULTS, e), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", o.proxy(this.process, this)), this.refresh(), this.process()
}

function e(n) {
    return this.each(function() {
        var t = o(this),
            e = t.data("bs.scrollspy"),
            i = "object" == typeof n && n;
        e || t.data("bs.scrollspy", e = new s(this, i)), "string" == typeof n && e[n]()
    })
}
s.VERSION = "3.3.7", s.DEFAULTS = {
    offset: 10
}, s.prototype.getScrollHeight = function() {
    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
}, s.prototype.refresh = function() {
    var t = this,
        n = "offset",
        s = 0;
    this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), o.isWindow(this.$scrollElement[0]) || (n = "position", s = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
        var t = o(this),
            e = t.data("target") || t.attr("href"),
            i = /^#./.test(e) && o(e);
        return i && i.length && i.is(":visible") && [
            [i[n]().top + s, e]
        ] || null
    }).sort(function(t, e) {
        return t[0] - e[0]
    }).each(function() {
        t.offsets.push(this[0]), t.targets.push(this[1])
    })
}, s.prototype.process = function() {
    var t, e = this.$scrollElement.scrollTop() + this.options.offset,
        i = this.getScrollHeight(),
        n = this.options.offset + i - this.$scrollElement.height(),
        s = this.offsets,
        o = this.targets,
        r = this.activeTarget;
    if (this.scrollHeight != i && this.refresh(), n <= e) return r != (t = o[o.length - 1]) && this.activate(t);
    if (r && e < s[0]) return this.activeTarget = null, this.clear();
    for (t = s.length; t--;) r != o[t] && e >= s[t] && (void 0 === s[t + 1] || e < s[t + 1]) && this.activate(o[t])
}, s.prototype.activate = function(t) {
    this.activeTarget = t, this.clear();
    var e = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
        i = o(e).parents("li").addClass("active");
    i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
}, s.prototype.clear = function() {
    o(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
};
var t = o.fn.scrollspy;
o.fn.scrollspy = e, o.fn.scrollspy.Constructor = s, o.fn.scrollspy.noConflict = function() {
    return o.fn.scrollspy = t, this
}, o(window).on("load.bs.scrollspy.data-api", function() {
    o('[data-spy="scroll"]').each(function() {
        var t = o(this);
        e.call(t, t.data())
    })
})
}(jQuery),
function(a) {
"use strict";

function e(i) {
    return this.each(function() {
        var t = a(this),
            e = t.data("bs.tab");
        e || t.data("bs.tab", e = new r(this)), "string" == typeof i && e[i]()
    })
}
var r = function(t) {
    this.element = a(t)
};
r.VERSION = "3.3.7", r.TRANSITION_DURATION = 150, r.prototype.show = function() {
    var t = this.element,
        e = t.closest("ul:not(.dropdown-menu)"),
        i = t.data("target");
    if (i || (i = (i = t.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
        var n = e.find(".active:last a"),
            s = a.Event("hide.bs.tab", {
                relatedTarget: t[0]
            }),
            o = a.Event("show.bs.tab", {
                relatedTarget: n[0]
            });
        if (n.trigger(s), t.trigger(o), !o.isDefaultPrevented() && !s.isDefaultPrevented()) {
            var r = a(i);
            this.activate(t.closest("li"), e), this.activate(r, r.parent(), function() {
                n.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                }), t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: n[0]
                })
            })
        }
    }
}, r.prototype.activate = function(t, e, i) {
    function n() {
        s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), o ? (t[0].offsetWidth, t.addClass("in")) : t.removeClass("fade"), t.parent(".dropdown-menu").length && t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
    }
    var s = e.find("> .active"),
        o = i && a.support.transition && (s.length && s.hasClass("fade") || !!e.find("> .fade").length);
    s.length && o ? s.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n(), s.removeClass("in")
};
var t = a.fn.tab;
a.fn.tab = e, a.fn.tab.Constructor = r, a.fn.tab.noConflict = function() {
    return a.fn.tab = t, this
};
var i = function(t) {
    t.preventDefault(), e.call(a(this), "show")
};
a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery),
function(l) {
"use strict";

function i(n) {
    return this.each(function() {
        var t = l(this),
            e = t.data("bs.affix"),
            i = "object" == typeof n && n;
        e || t.data("bs.affix", e = new c(this, i)), "string" == typeof n && e[n]()
    })
}
var c = function(t, e) {
    this.options = l.extend({}, c.DEFAULTS, e), this.$target = l(this.options.target).on("scroll.bs.affix.data-api", l.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", l.proxy(this.checkPositionWithEventLoop, this)), this.$element = l(t), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
};
c.VERSION = "3.3.7", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
    offset: 0,
    target: window
}, c.prototype.getState = function(t, e, i, n) {
    var s = this.$target.scrollTop(),
        o = this.$element.offset(),
        r = this.$target.height();
    if (null != i && "top" == this.affixed) return s < i && "top";
    if ("bottom" == this.affixed) return null != i ? !(s + this.unpin <= o.top) && "bottom" : !(s + r <= t - n) && "bottom";
    var a = null == this.affixed,
        l = a ? s : o.top;
    return null != i && s <= i ? "top" : null != n && t - n <= l + (a ? r : e) && "bottom"
}, c.prototype.getPinnedOffset = function() {
    if (this.pinnedOffset) return this.pinnedOffset;
    this.$element.removeClass(c.RESET).addClass("affix");
    var t = this.$target.scrollTop(),
        e = this.$element.offset();
    return this.pinnedOffset = e.top - t
}, c.prototype.checkPositionWithEventLoop = function() {
    setTimeout(l.proxy(this.checkPosition, this), 1)
}, c.prototype.checkPosition = function() {
    if (this.$element.is(":visible")) {
        var t = this.$element.height(),
            e = this.options.offset,
            i = e.top,
            n = e.bottom,
            s = Math.max(l(document).height(), l(document.body).height());
        "object" != typeof e && (n = i = e), "function" == typeof i && (i = e.top(this.$element)), "function" == typeof n && (n = e.bottom(this.$element));
        var o = this.getState(s, t, i, n);
        if (this.affixed != o) {
            null != this.unpin && this.$element.css("top", "");
            var r = "affix" + (o ? "-" + o : ""),
                a = l.Event(r + ".bs.affix");
            if (this.$element.trigger(a), a.isDefaultPrevented()) return;
            this.affixed = o, this.unpin = "bottom" == o ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(r).trigger(r.replace("affix", "affixed") + ".bs.affix")
        }
        "bottom" == o && this.$element.offset({
            top: s - t - n
        })
    }
};
var t = l.fn.affix;
l.fn.affix = i, l.fn.affix.Constructor = c, l.fn.affix.noConflict = function() {
    return l.fn.affix = t, this
}, l(window).on("load", function() {
    l('[data-spy="affix"]').each(function() {
        var t = l(this),
            e = t.data();
        e.offset = e.offset || {}, null != e.offsetBottom && (e.offset.bottom = e.offsetBottom), null != e.offsetTop && (e.offset.top = e.offsetTop), i.call(t, e)
    })
})
}(jQuery);
var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
},
commons = function() {
    function t() {}
    return t.attachParentSelector = function(t, e) {
        var i = e;
        return "" !== t && 0 < t.length && (i = t == e ? e : $(t).hasClass(e) ? t + "" + e : t + " " + e), i
    }, t
},
propellerControlMapping = {
    "pmd-checkbox": function() {
        $(".pmd-checkbox").pmdCheckBox()
    },
    "pmd-radio": function() {
        $(".pmd-radio").pmdRadio()
    },
    "pmd-textfield": function() {
        $(".pmd-textfield").pmdTextfield()
    },
    "pmd-dropdown": function() {
        $(".pmd-dropdown").pmdDropdown()
    },
    "pmd-alert-toggle": function() {
        $(".pmd-alert-toggle").pmdAlert()
    },
    "pmd-tabs": function() {
        $(".pmd-tabs").pmdTab()
    },
    "pmd-sidebar": function() {
        $().pmdSidebar()
    },
    "pmd-accordion": function() {
        $(".pmd-accordion").pmdAccordion()
    },
    "pmd-ripple-effect": function() {
        $(".pmd-ripple-effect").pmdButton()
    }
},
observeDOM = function() {
    var e = window.MutationObserver || window.WebKitMutationObserver,
        n = window.addEventListener;
    return function(t, i) {
        e ? new e(function(t, e) {
            (t[0].addedNodes.length || t[0].removedNodes.length) && i(t)
        }).observe(t, {
            childList: !0,
            subtree: !0,
            attributes: !0,
            characterData: !0
        }) : n && (t.addEventListener("DOMNodeInserted", i, !1), t.addEventListener("DOMNodeRemoved", i, !1))
    }
}();
$(document).ready(function() {
observeDOM(document.querySelector("body"), function(i) {
    function r(t, e) {
        0 != t.length ? function t(e, i, n) {
            if (i >= e.length) return void n();
            var s = e[i];
            if (function(t) {
                    if (null == $(t).attr("class")) return !1;
                    for (var e = $(t).attr("class").split(" "), i = 0; i < e.length; i++)
                        if (propellerControlMapping.hasOwnProperty(e[i])) return !0;
                    return !1
                }(s)) {
                null != $(s).attr("data-toggle") && "popover" == $(s).attr("data-toggle").toLowerCase() && $().pmdPopover();
                var o = $(s).attr("class");
                if (null == o) return void n();
                (o = o.split(" ")).forEach(function(t) {
                    return !!propellerControlMapping[t] && (propellerControlMapping[t](), !0)
                }), t(e, i + 1, function() {
                    n()
                })
            } else r(s.childNodes, function() {
                t(e, i + 1, function() {
                    n()
                })
            })
        }(t, 0, function() {
            e()
        }) : e()
    }! function t(e) {
        e >= i.length || r(i[e].addedNodes, function() {
            t(e + 1)
        })
    }(0)
})
});
var updatedCSS, pmdTextfield = function(i) {
    var n = (i.fn.pmdTextfield, {
            PMD_TEXTFIELD: "pmd-textfield",
            FOCUS: "pmd-textfield-focused",
            FLOATING_COMPLETE: "pmd-textfield-floating-label-completed",
            FLOATING_ACTIVE: "pmd-textfield-floating-label-active"
        }),
        s = {
            PARENT_SELECTOR: "",
            PMD_TEXTFIELD: "." + n.PMD_TEXTFIELD,
            FOCUS: "." + n.FOCUS,
            INPUT: ".form-control"
        },
        e = '<span class="pmd-textfield-focused"></span>',
        t = "focus",
        o = "focusout",
        r = "change",
        a = function() {
            function t() {
                i(t.prototype.attachParentSelector(s.PARENT_SELECTOR, s.FOCUS)).remove(), i(t.prototype.attachParentSelector(s.PARENT_SELECTOR, s.PMD_TEXTFIELD)).find(s.INPUT).after(e), i(t.prototype.attachParentSelector(s.PARENT_SELECTOR, s.PMD_TEXTFIELD)).find(s.INPUT).each(function() {
                    "" !== i(this).val() && i(this).closest(s.PMD_TEXTFIELD).addClass(n.FLOATING_COMPLETE)
                })
            }
            return _inherits(t, commons), t
        }();
    return i(document).on(r, s.PMD_TEXTFIELD + " " + s.INPUT, function(t) {
        var e = i(t.target);
        "" !== e.val() && e.closest(s.PMD_TEXTFIELD).addClass(n.FLOATING_COMPLETE)
    }), i(document).on(t, s.PMD_TEXTFIELD + " " + s.INPUT, function(t) {
        i(t.target).closest(s.PMD_TEXTFIELD).addClass(n.FLOATING_ACTIVE + " " + n.FLOATING_COMPLETE)
    }), i(document).on(o, s.PMD_TEXTFIELD + " " + s.INPUT, function(t) {
        var e = i(t.target);
        "" === e.val() && e.closest(s.PMD_TEXTFIELD).removeClass(n.FLOATING_COMPLETE), e.closest(s.PMD_TEXTFIELD).removeClass(n.FLOATING_ACTIVE)
    }), i.fn.pmdTextfield = function() {
        "" !== this.selector && (s.PARENT_SELECTOR = this.selector), new a
    }, a
}(jQuery)(),
pmdCheckBox = function(o) {
    var r = (o.fn.pmdCheckBox, {
            ANIMATE: "animate",
            PMD_CHECKBOX: "pmd-checkbox",
            TEXTFIELD_FOCUS: "pmd-textfield-focused"
        }),
        a = {
            PARENT_SELECTOR: "",
            PMD_CHECKBOX: "." + r.PMD_CHECKBOX,
            INPUT: "input:checkbox:not(.pm-ini)",
            RIPPLE: ".pmd-checkbox-ripple-effect",
            INK: ".ink"
        },
        i = '<span class="pmd-checkbox-label">&nbsp;</span>',
        t = function() {
            function e() {
                var t = e.prototype.attachParentSelector(a.PARENT_SELECTOR, a.PMD_CHECKBOX);
                o(t).find(a.INPUT).after(i), o(t).find(a.INPUT).addClass("pm-ini")
            }
            return _inherits(e, commons), e
        }();
    return o(document).on("mousedown", a.RIPPLE, function(t) {
        var e = o(t.target);
        o(a.INK).remove(), 0 === e.find(a.INK).length && e.append(gQ.SPAN_LINK);
        var i = e.find(a.INK);
        i.removeClass(r.ANIMATE), i.height() || i.width() || (Math.max(e.outerWidth(), e.outerHeight()), i.css({
            height: 20,
            width: 20
        }));
        var n = t.pageX - e.offset().left - i.width() / 2,
            s = t.pageY - e.offset().top - i.height() / 2;
        i.css({
            top: s + "px",
            left: n + "px"
        }).addClass(r.ANIMATE), setTimeout(function() {
            i.remove()
        }, 1500)
    }), o.fn.pmdCheckBox = function() {
        "" !== this.selector && (a.PARENT_SELECTOR = this.selector), new t
    }, t
}(jQuery)(),
pmdRadio = function(o) {
    var r = (o.fn.pmdRadio, {
            ANIMATE: "animate",
            PMD_RADIO: "pmd-radio",
            PM_INI: "pm-ini"
        }),
        a = {
            PARENT_SELECTOR: "",
            PMD_RADIO: "." + r.PMD_RADIO,
            INPUT: "input:radio:not(.pm-ini)",
            RIPPLE: ".pmd-radio-ripple-effect",
            INK: ".ink"
        },
        i = '<span class="pmd-radio-label">&nbsp;</span>',
        t = function() {
            function e() {
                var t = e.prototype.attachParentSelector(a.PARENT_SELECTOR, a.PMD_RADIO);
                o(t).find(a.INPUT).after(i), o(t).find(a.INPUT).addClass(r.PM_INI)
            }
            return _inherits(e, commons), e
        }();
    return o(document).on("mousedown", a.RIPPLE, function(t) {
        var e = o(t.target);
        o(a.INK).remove(), 0 === e.find(a.INK).length && e.append('<span class="ink"></span>');
        var i = e.find(a.INK);
        i.removeClass(r.ANIMATE), i.height() || i.width() || (Math.max(e.outerWidth(), e.outerHeight()), i.css({
            height: 15,
            width: 15
        }));
        var n = t.pageX - e.offset().left - i.width() / 2,
            s = t.pageY - e.offset().top - i.height() / 2;
        i.css({
            top: s + "px",
            left: n + "px"
        }).addClass(r.ANIMATE), setTimeout(function() {
            i.remove()
        }, 1500)
    }), o.fn.pmdRadio = function() {
        "" !== this.selector && (a.PARENT_SELECTOR = this.selector), new t
    }, t
}(jQuery)(),
pmdButton = function(r) {
    function e(t) {
        var e = r(t.target);
        r(a.INK).remove(), 0 === e.find(a.INK).length && e.append(c.SPAN);
        var i = e.find(a.INK);
        if (i.removeClass(l.ANIMATE), !i.height() && !i.width()) {
            var n = Math.max(e.outerWidth(), e.outerHeight());
            i.css({
                height: n,
                width: n
            })
        }
        var s = t.pageX - e.offset().left - i.width() / 2,
            o = t.pageY - e.offset().top - i.height() / 2;
        i.css({
            top: o + "px",
            left: s + "px"
        }).addClass(l.ANIMATE), setTimeout(function() {
            i.remove()
        }, 1500)
    }
    var a = (r.fn.pmdButton, {
            PARENT_SELECTOR: "",
            PMD_RIPPLE_EFFECT: ".pmd-ripple-effect",
            INK: ".ink"
        }),
        l = {
            ANIMATE: "animate"
        },
        i = "mousedown",
        n = "touchstart",
        c = {
            SPAN: "<span class='ink'></span>"
        },
        t = function() {
            function t() {
                r(t.prototype.attachParentSelector(a.PARENT_SELECTOR, a.PMD_RIPPLE_EFFECT)).on(i + " " + n, e)
            }
            return _inherits(t, commons), t
        }();
    return r.fn.pmdButton = function() {
        "" !== this.selector && (a.PARENT_SELECTOR = this.selector), new t
    }, t
}(jQuery)(),
pmdDropdown = function(h) {
    function n(t) {
        var e, i, n, s, o, r = h(t.target).closest(p.PMD_SIDEBAR).hasClass(d.PMD_SIDEBAR),
            a = h(t.target).find(p.DROPDOWN_MENU).hasClass(d.CENTER),
            l = h(t.target).find(p.DROPDOWN_MENU),
            c = h(t.target).find(p.DROPDOWN_TOGGLE).attr("data-sidebar");
        h(window).width() < u ? ("true" === c && (l.first().stop(!0, !0).slideDown(300), h(t.target).addClass(d.PMD_SIDEBAR_DROPDOWN)), h(".pmd-navbar").addClass("minSizeClass")) : (r ? l.first().stop(!0, !0).slideDown() : a ? (h(t.target).parents().hasClass(d.PMD_SIDEBAR) || h(p.DROPDOWN_MENU).removeAttr("style"), l.first().stop(!0, !0).slideDown()) : (i = (e = l).closest(p.CONTAINER), n = i.find(p.BG), s = e.outerWidth(), o = e.outerHeight(), i.css({
            width: s + "px",
            height: o + "px"
        }), n.css({
            width: s + "px",
            height: o + "px"
        }), setTimeout(function() {
            e.css("clip", "rect(0 " + s + "px " + o + "px 0)")
        }, 10), e.hasClass(d.RIGHT) ? (n.addClass(d.BG_RIGHT), i.css({
            right: "0",
            left: "auto"
        })) : e.hasClass(d.TOP_LEFT) ? n.addClass(d.BG_BOTTOM_LEFT) : e.hasClass(d.TOP_RIGHT) && (n.addClass(d.BG_BOTTOM_RIGHT), i.css({
            right: "0",
            left: "auto"
        }))), h(".pmd-navbar").removeClass("minSizeClass")), t.target.closable = !1
    }

    function s(t) {
        if (h(t.target).parents("aside").hasClass(d.PMD_SIDEBAR)) return t.target.closable;
        var e, i, n, s, o, r = h(t.target).closest(p.PMD_SIDEBAR).hasClass(d.PMD_SIDEBAR),
            a = h(t.target).find(p.DROPDOWN_MENU).hasClass(d.CENTER),
            l = h(t.target).find(p.DROPDOWN_MENU);
        h(window).width() < u ? ("true" == h(t.target).find(p.DROPDOWN_TOGGLE).attr("data-sidebar") && l.first().stop(!0, !0).slideUp(300), h(".pmd-navbar").addClass("minSizeClass")) : (r ? l.first().stop(!0, !0).slideUp(300) : a ? (h(t.target).parents().hasClass(d.PMD_SIDEBAR) || h(p.DROPDOWN_MENU).removeAttr("style"), l.first().stop(!0, !0).slideUp(300)) : (i = (e = l).closest(p.CONTAINER), n = i.find(p.BG), s = e.outerWidth(), o = e.outerHeight(), e.css("clip", "rect(0 0 0 0)"), i.removeAttr("style"), n.removeAttr("style"), e.hasClass(d.RIGHT) ? e.css("clip", "rect(0 " + s + "px 0 " + s + "px)") : e.hasClass(d.TOP_LEFT) ? e.css("clip", "rect(" + o + "px 0 " + o + "px 0)") : e.hasClass(d.TOP_RIGHT) && e.css("clip", "rect(" + o + "px " + s + "px " + o + "px " + s + "px)")), h(".pmd-navbar").removeClass("minSizeClass"))
    }

    function o(t) {
        var e = h(p.PMD_DROPDOWN);
        h(t.currentTarget).closest(p.PMD_SIDEBAR).hasClass(d.PMD_SIDEBAR) && !h(t.currentTarget).hasClass(d.OPEN) ? (e.removeClass(d.OPEN), h(p.DROPDOWN_MENU).slideUp(300)) : h(t.currentTarget).parents("aside").hasClass(d.PMD_SIDEBAR) && h(p.DROPDOWN_MENU).slideUp(300), t.currentTarget.closable = !0
    }

    function r() {
        var t = h(p.PMD_DROPDOWN),
            e = t.find(p.DROPDOWN_MENU).outerWidth(),
            i = t.find(p.DROPDOWN_MENU).outerHeight();
        t.find(p.RIGHT).css("clip", "rect(0 " + e + "px 0 " + e + "px)"), t.find(p.TOP_LEFT).css("clip", "rect(" + i + "px 0 " + i + "px 0)"), t.find(p.TOP_RIGHT).css("clip", "rect(" + i + "px " + e + "px " + i + "px " + e + "px)"), t.off(c.SHOW_BS_DROPDOWN), t.on(c.SHOW_BS_DROPDOWN, n), t.off(c.HIDE_BS_DROPDOWN), t.on(c.HIDE_BS_DROPDOWN, s), h(window).width() > u ? (t.off(c.CLICK), t.on(c.CLICK, o)) : t.find(p.DROPDOWN_MENU).removeAttr("style"), h(window).width() < u ? h(".pmd-navbar").addClass("minSizeClass") : h(".pmd-navbar").removeClass("minSizeClass")
    }
    var u = (h.fn.pmdDropdown, 767),
        d = {
            CENTER: "pmd-dropdown-menu-center",
            PMD_SIDEBAR_DROPDOWN: "pmd-sidebar-dropdown",
            RIGHT: "dropdown-menu-right",
            BG_RIGHT: "pmd-dropdown-menu-bg-right",
            TOP_LEFT: "pmd-dropdown-menu-top-left",
            BG_BOTTOM_LEFT: "pmd-dropdown-menu-bg-bottom-left",
            TOP_RIGHT: "pmd-dropdown-menu-top-right",
            BG_BOTTOM_RIGHT: "pmd-dropdown-menu-bg-bottom-right",
            PMD_SIDEBAR: "pmd-sidebar",
            OPEN: "open",
            PM_INI: "pm-ini"
        },
        p = {
            PARENT_SELECTOR: "",
            DROPDOWN_MENU: ".dropdown-menu",
            RIGHT: "." + d.RIGHT,
            TOP_LEFT: "." + d.TOP_LEFT,
            TOP_RIGHT: "." + d.TOP_RIGHT,
            BG: ".pmd-dropdown-menu-bg",
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            PMD_DROPDOWN: ".pmd-dropdown",
            PMD_SIDEBAR: "." + d.PMD_SIDEBAR,
            CONTAINER: ".pmd-dropdown-menu-container",
            PMD_DROPDOWN_HOVER: ".pmd-dropdown-hover",
            DATA_TOGGLE_DROPDOWN: '[data-toggle="dropdown"]'
        },
        a = "<div class='pmd-dropdown-menu-container'></div>",
        l = '<div class="pmd-dropdown-menu-bg"></div>',
        c = {
            CLICK: "click",
            SHOW_BS_DROPDOWN: "show.bs.dropdown",
            HIDE_BS_DROPDOWN: "hide.bs.dropdown"
        },
        e = function() {
            function o(t) {
                var e = o.prototype.attachParentSelector(p.PARENT_SELECTOR, p.PMD_DROPDOWN),
                    i = h(e).find(p.DROPDOWN_MENU + ":not(." + d.PM_INI + ")");
                h(i).wrap(a), h(i).before(l), h(i).addClass(d.PM_INI);
                var n, s = h(i).prev("button").attr("data-trigger");
                null != s && "hover" == s.toLowerCase() && h(i).prev("button").addClass("pmd-dropdown-hover"), h(p.PMD_DROPDOWN_HOVER).hover(function(t) {
                    window.clearTimeout(n);
                    var e = h(t.target).parent(),
                        i = h(this);
                    if (e.hasClass("open") && e.is(t.target)) return !0;
                    i.attr("aria-expanded", "true"), e.addClass("open"), i.parent().trigger(c.SHOW_BS_DROPDOWN)
                }, function(e) {
                    var i = h(this);
                    n = window.setTimeout(function() {
                        var t = h(e.target).parent();
                        if (-1 < t.attr("class").split(" ").indexOf("isOpenReq")) return !0;
                        i.attr("aria-expanded", "false"), t.removeClass("open"), i.parent().trigger(c.HIDE_BS_DROPDOWN)
                    }, 10)
                }), h(p.PMD_DROPDOWN_HOVER).parent().find(".dropdown-menu").each(function() {
                    var t, e = h(this);
                    e.hover(function() {
                        window.clearTimeout(t), e.parent().parent().addClass("isOpenReq"), e.show()
                    }, function() {
                        t = window.setTimeout(function() {
                            e.parent().parent().removeClass("open"), e.parent().parent().removeClass("isOpenReq"), e.parent().parent().trigger(c.HIDE_BS_DROPDOWN)
                        }, 10)
                    })
                }), void 0 !== t && null !== t.minimumSize && (u = parseFloat(t.minimumSize)), r()
            }
            return _inherits(o, commons), o
        }();
    return h(window).resize(r), h.fn.pmdDropdown = function(t) {
        "" !== this.selector && (p.PARENT_SELECTOR = this.selector), new e(t)
    }, e
}(jQuery)(),
pmdAccordion = function(r) {
    function e(t) {
        var e = r(t.target),
            i = e.attr("href"),
            n = e.attr("data-expandable"),
            s = e.attr("aria-expanded"),
            o = e.closest(".pmd-accordion").attr("id");
        "true" === n ? ("true" === s ? e.parents(l.PANEL).removeClass(a.ACTIVE) : e.parents(l.PANEL).addClass(a.ACTIVE), r(i).hasClass(a.IN) ? r(i).collapse("hide") : r(i).collapse("show")) : "true" === s ? r("#" + o + " " + l.ACTIVE).removeClass(a.ACTIVE) : (r("#" + o + " " + l.ACTIVE).removeClass(a.ACTIVE), e.parents(l.PANEL).addClass(a.ACTIVE))
    }

    function i(t) {
        var e = r(t.target).attr("data-target");
        r("#" + e + " " + l.DATA_TOGGLE_COLLAPSE).each(function(t, e) {
            var i = r(e).attr("href");
            !1 === r(i).hasClass(a.IN) && (r(i).collapse("show"), r(i).parent().addClass(a.ACTIVE))
        })
    }

    function n(t) {
        var e = r(t.target).attr("data-target");
        r("#" + e + " " + l.DATA_TOGGLE_COLLAPSE).each(function(t, e) {
            var i = r(e).attr("href");
            r(i).collapse("hide"), r(i).parent().removeClass(a.ACTIVE)
        })
    }
    var a = (r.fn.pmdAccordion, {
            IN: "in",
            ACTIVE: "active"
        }),
        l = {
            PARENT_SELECTOR: "",
            DATA_TOGGLE_COLLAPSE: 'a[data-toggle="collapse"]',
            COLLAPSE_IN: ".collapse.in",
            ACTIVE: "." + a.ACTIVE,
            PANEL: ".panel",
            EXPANDALL: "#expandAll",
            COLLAPSEALL: "#collapseAll"
        },
        s = "click",
        t = function() {
            function t() {
                r(t.prototype.attachParentSelector(l.PARENT_SELECTOR, l.COLLAPSE_IN)).parents(l.PANEL).addClass(a.ACTIVE), r(t.prototype.attachParentSelector(l.PARENT_SELECTOR, l.DATA_TOGGLE_COLLAPSE)).off(s), r(t.prototype.attachParentSelector(l.PARENT_SELECTOR, l.DATA_TOGGLE_COLLAPSE)).on(s, e), r(t.prototype.attachParentSelector(l.PARENT_SELECTOR, l.EXPANDALL)).off(s), r(t.prototype.attachParentSelector(l.PARENT_SELECTOR, l.EXPANDALL)).on(s, i), r(t.prototype.attachParentSelector(l.PARENT_SELECTOR, l.COLLAPSEALL)).off(s), r(t.prototype.attachParentSelector(l.PARENT_SELECTOR, l.COLLAPSEALL)).on(s, n)
            }
            return _inherits(t, commons), t
        }();
    return r.fn.pmdAccordion = function() {
        "" !== this.selector && (l.PARENT_SELECTOR = this.selector), new t
    }, t
}(jQuery)(),
pmdAlert = function(o) {
    function r(t) {
        o(t.target).parents(v.PMD_ALERT).slideUp(function() {
            o(this).removeClass(g.VISIBLE).remove()
        })
    }
    var a = (o.fn.pmdAlert, "left"),
        l = "top",
        c = "fadeInUp",
        h = "Alert Message",
        u = "information",
        d = "Ok",
        p = "false",
        f = 3e3,
        m = void 0,
        g = {
            CONTAINER: "pmd-alert-container",
            PMD_ALERT: "pmd-alert",
            CLOSE: "pmd-alert-close",
            VISIBLE: "visible"
        },
        v = {
            PARENT_SELECTOR: "",
            TOGGLE: ".pmd-alert-toggle",
            BODY: "body",
            CONTAINER: "." + g.CONTAINER,
            PMD_ALERT: "." + g.PMD_ALERT,
            CENTER: ".center",
            CLOSE: "." + g.CLOSE
        },
        y = "click",
        e = function() {
            function t(s) {
                o(t.prototype.attachParentSelector(v.PARENT_SELECTOR, v.TOGGLE)).unbind("click"), o(t.prototype.attachParentSelector(v.PARENT_SELECTOR, v.TOGGLE)).on("click", function() {
                    a = o(this).attr("data-positionX"), l = o(this).attr("data-positionY"), c = o(this).attr("data-effect"), h = o(this).attr("data-message"), u = o(this).attr("data-type"), d = o(this).attr("data-action-text"), p = o(this).attr("data-action"), m = void 0, m = null != o(this).attr("data-action-event") && "" != o(this).attr("data-action-event") ? o(this).attr("data-action-event") : m, o(window).width() < 768 && (a = "center"), o(v.CONTAINER + "." + a + "." + l).length || o("body").append("<div class='" + g.CONTAINER + " " + a + " " + l + "'></div>");
                    var t = o(v.CONTAINER + "." + a + "." + l),
                        e = "true" == p ? null == d ? "<div class='pmd-alert' data-action='true'>" + h + "<a href='javascript:void(0)' class='pmd-alert-close' onclick='(" + m + ")()'>Ã—</a></div>" : "<div class='pmd-alert' data-action='true'>" + h + "<a href='javascript:void(0)' class='pmd-alert-close' onclick='(" + m + ")()'>" + d + "</a></div>" : null == d ? "<div class='pmd-alert' data-action='false'>" + h + "</div>" : "<div class='pmd-alert' data-action='true'>" + h + "<a href='javascript:void(0)' class='pmd-alert-close'>" + d + "</a></div>",
                        i = o(v.CONTAINER + "." + a + "." + l + " " + v.PMD_ALERT).length;
                    void 0 !== o(this).attr("data-duration") && (f = o(this).attr("data-duration")), void 0 !== s && null !== s.dataDuration && (f = parseFloat(s.dataDuration)), 0 < i && "top" != l ? t.prepend(e) : t.append(e), t.width(o(v.CONTAINER).outerWidth()), "true" == p ? t.children("[data-action='true']").addClass(g.VISIBLE + " " + c) : t.children("[data-action='false']").addClass(g.VISIBLE + " " + c).delay(f).slideUp(function() {
                        o(this).removeClass(g.VISIBLE + " " + c).remove()
                    }), t.children(v.PMD_ALERT).eq(i).addClass(u);
                    var n = o(v.CONTAINER).outerWidth() / 2;
                    o(v.CONTAINER + v.CENTER).css("marginLeft", "-" + n + "px"), o(document).on(y, v.CLOSE, r)
                })
            }
            return _inherits(t, commons), t
        }();
    return o.fn.pmdAlert = function(t) {
        "" !== this.selector && (v.PARENT_SELECTOR = this.selector), new e(t)
    }, e
}(jQuery)(),
pmdPopover = function(u) {
    function t(t, e) {
        var i = u(e).attr("data-placement"),
            n = u(window).scrollTop(),
            s = u(window).width(),
            o = u(window).height(),
            r = u(e).outerWidth(),
            a = u(e).outerHeight(),
            l = u(e).offset().top,
            c = u(e).offset().left,
            h = l - n;
        return "left" == i && c <= 200 ? "right" : "right" == i && s - c - r <= 200 ? "left" : "top" == i && h <= 200 ? "bottom" : "bottom" == i && o - h - a <= 200 ? "top" : i
    }
    var i = (u.fn.pmdPopover, {
            PARENT_SELECTOR: "",
            POPOVER_HTML_DATA_TOGGLE: '.popover-html[data-toggle="popover"]',
            DATA_TOGGLE: '[data-toggle="popover"]',
            POPOVER: ".popover"
        }),
        e = "shown.bs.popover",
        n = "hidden.bs.popover",
        s = {
            html: !0,
            content: function(t) {
                var e = u(this).attr("data-id");
                return u(e).html()
            },
            placement: t
        },
        o = {
            placement: t
        },
        r = function() {
            u(i.POPOVER_HTML_DATA_TOGGLE).popover(s), u(i.DATA_TOGGLE).popover(o), u(i.DATA_TOGGLE).on(e, function(t) {
                var e = u(t.target).attr("data-color");
                u(i.POPOVER).addClass(e)
            }).on(n, function(t) {
                var e = u(t.target).attr("data-color");
                u(i.POPOVER).removeClass(e)
            })
        };
    return u.fn.pmdPopover = function() {
        "" !== this.selector && (i.PARENT_SELECTOR = this.selector), new r
    }, r
}(jQuery)(),
pmdTab = function(p) {
    function n(t) {
        var e = 0;
        return t.find(f.LI).each(function() {
            var t = p(this)[0].getBoundingClientRect().width;
            e += t
        }), e
    }

    function i(t) {
        t.find(f.UL_NAV_TABS).hasClass(u.NAV_JUSTIFIED) ? t.find(f.UL_NAV_TABS).width("100%") : t.find(f.UL_NAV_TABS).width(n(t))
    }

    function s(t) {
        if (t.outerWidth() < n(t)) {
            var e = t.find(f.SCROLL_CONTAINER).scrollLeft(),
                i = t.width();
            0 < t.find(f.NAV_TAB).width() - e - i && t.find(f.SCROLL_RIGHT).show()
        } else t.find(f.SCROLL_RIGHT).hide();
        t.find(f.UL_NAV_TABS).position().left < 0 ? 0 < t.find(f.SCROLL_CONTAINER).scrollLeft() && t.find(f.SCROLL_LEFT).show() : t.find(f.SCROLL_LEFT).hide()
    }

    function o(t) {
        var e = t.outerWidth() / 2,
            i = t.offset().left,
            n = t.find(f.UL_LI_ACTIVE).outerWidth() / 2,
            s = t.find(f.SCROLL_CONTAINER).scrollLeft(),
            o = t.find(f.UL_LI_ACTIVE).offset().left - e - i + s + n;
        t.find(f.SCROLL_CONTAINER).animate({
            scrollLeft: o
        }, 1)
    }

    function r(t) {
        var n = t.find(f.ACTIVE_BAR),
            e = t.find(f.UL_LI_ACTIVE),
            i = e.offset().left,
            s = t.find(f.NAV).offset().left,
            o = t.offset().left,
            r = i - o,
            a = o - s + i - o;
        s < o ? n.width(e.width() + "px").css("left", a + "px") : n.width(e.width() + "px").css("left", r + "px"), t.find(f.UL_LI).click(function() {
            var t = p(this).width() + "px",
                e = p(this).offset().left - o,
                i = p(this).closest(f.NAV).offset().left;
            a = o - i + e, n.width(t).css("left", a + "px")
        })
    }

    function a(t) {
        var e = t.data.param1;
        setTimeout(function() {
            i(e), s(e), o(e)
        }, 150), r(e)
    }

    function l(t) {
        var e = t.data.param1,
            i = "",
            n = p(t.currentTarget).prev(f.SCROLL_CONTAINER),
            s = n.find(f.NAV_TABS_LI),
            o = p(t.currentTarget).outerWidth(),
            r = e.outerWidth(),
            a = e.offset().left + r;
        if (s.each(function() {
                var t = p(this).offset().left,
                    e = p(this).offset().left + p(this).outerWidth();
                p(this).removeClass(u.PREV_TAB), t < a && a < e && (i = e - a + o, p(this).addClass(u.LAST_TAB), p(this).prev().removeClass(u.LAST_TAB))
            }), 0 === n.find(f.LAST_TAB).next().length) {
            var l = n.find(f.LAST_TAB).offset().left + n.find(f.LAST_TAB).outerWidth() - a;
            n.animate({
                scrollLeft: "+=" + l
            }), p(t.currentTarget).fadeOut("slow")
        } else n.animate({
            scrollLeft: "+=" + i
        });
        p(t.currentTarget).parents(f.PMD_TAB).find(f.SCROLL_LEFT).fadeIn("slow")
    }

    function c(t) {
        var e = t.data.param1,
            i = p(t.currentTarget).next(f.SCROLL_CONTAINER),
            n = i.find(f.NAV_TABS_LI),
            s = p(t.currentTarget).outerWidth(),
            o = e.offset().left,
            r = "";
        if (n.each(function() {
                var t = p(this).offset().left,
                    e = p(this).offset().left + p(this).outerWidth();
                p(this).removeClass(u.LAST_TAB), t < o && o < e && (r = o - t + s, p(this).addClass(u.PREV_TAB), p(this).next().removeClass(u.PREV_TAB))
            }), 0 === i.find(f.PREV_TAB).prev().length) {
            var a = i.find(f.PREV_TAB).offset().left,
                l = o - a;
            i.animate({
                scrollLeft: "-=" + l
            }), p(t.currentTarget).fadeOut("slow")
        } else i.animate({
            scrollLeft: "-=" + r
        });
        p(t.currentTarget).parents(f.PMD_TAB).find(f.SCROLL_RIGHT).fadeIn("slow")
    }

    function h(t) {
        var e = t.data.param1,
            i = p(t.target).closest(f.SCROLL_CONTAINER),
            n = p(t.target).offset().left,
            s = p(t.target).offset().left + p(t.target).outerWidth(),
            o = e.outerWidth(),
            r = e.offset().left + o,
            a = p(f.SCROLL_RIGHT).outerWidth(),
            l = e.offset().left,
            c = r - a,
            h = l + a;
        if (n < h && h < s) {
            var u = l - n + a;
            i.animate({
                scrollLeft: "-=" + u
            }), p(t.target).parents(f.PMD_TAB).find(f.SCROLL_RIGHT).fadeIn("slow")
        }
        if (n < c && c < s) {
            var d = s - r + a;
            i.animate({
                scrollLeft: "+=" + d
            }), p(t.target).parents(f.PMD_TAB).find(f.SCROLL_LEFT).fadeIn("slow")
        }
    }
    var u = (p.fn.pmdTab, {
            PMD_TAB: "pmd-tabs",
            NAV_JUSTIFIED: "nav-justified",
            PREV_TAB: "prev-tab",
            LAST_TAB: "last-tab",
            PM_INI: "pm-ini",
            SCROLL: "pmd-tabs-scroll",
            SCROLL_CONTAINER: "pmd-tabs-scroll-container",
            ACTIVE_BAR: "pmd-tab-active-bar"
        }),
        f = {
            PARENT_SELECTOR: "",
            PMD_TAB: "." + u.PMD_TAB,
            UL_NAV_TABS: "ul.nav-tabs",
            LI: "li",
            SCROLL_CONTAINER: "." + u.SCROLL_CONTAINER,
            NAV_TAB: ".nav-tabs",
            SCROLL_RIGHT: ".pmd-tabs-scroll-right",
            SCROLL_LEFT: ".pmd-tabs-scroll-left",
            UL_LI_ACTIVE: "ul li.active",
            ACTIVE_BAR: "." + u.ACTIVE_BAR,
            NAV: ".nav",
            UL_LI: "ul li",
            NAV_TABS_LI: ".nav-tabs li",
            LAST_TAB: "." + u.LAST_TAB,
            PREV_TAB: "." + u.PREV_TAB,
            PM_INI: "." + u.PM_INI
        },
        d = "<div class='pmd-tab-active-bar'></div>",
        m = "<div class='pmd-tabs-scroll-left'><i class='material-icons pmd-sm'>chevron_left</i></div>",
        g = "<div class='pmd-tabs-scroll-right'><i class='material-icons pmd-sm'>chevron_right</i></div>",
        v = "<div class='pmd-tabs-scroll-container'></div>",
        e = function() {
            function t(e) {
                p(window).unbind("resize"), p(t.prototype.attachParentSelector(f.PARENT_SELECTOR, f.PMD_TAB)).each(function() {
                    var t = p(this);
                    void 0 === e || null === e.scroll || 1 != e.scroll && "true" != e.scroll ? (t.removeClass(u.SCROLL), void 0 !== e && void 0 !== t.attr("scroll") && "true" == t.attr("scroll").toLowerCase() && t.attr("scroll", "false"), -1 < t.find(".nav.nav-tabs").parent().attr("class").split(" ").indexOf(u.SCROLL_CONTAINER) && (t.find(".nav.nav-tabs").unwrap(), t.find(f.ACTIVE_BAR).remove(), t.find(f.SCROLL_LEFT).remove(), t.find(f.SCROLL_RIGHT).remove())) : t.addClass(u.SCROLL), void 0 !== t.attr("scroll") && "true" == t.attr("scroll").toLowerCase() && t.addClass(u.SCROLL), -1 < t.attr("class").split(" ").indexOf(u.SCROLL) ? t.find(".nav.nav-tabs").parent().attr("class").split(" ").indexOf(u.SCROLL_CONTAINER) < 0 && (t.find(".nav.nav-tabs").wrap(v), t.find(f.SCROLL_CONTAINER).append(d), t.find(f.SCROLL_CONTAINER).before(m), t.append(g)) : 0 == t.find(f.ACTIVE_BAR).length && t.find(".nav.nav-tabs").before(d), i(t), s(t), o(t), r(t), t.find(f.SCROLL_RIGHT).off("click"), t.find(f.SCROLL_LEFT).off("click"), t.find(f.SCROLL_RIGHT).click({
                        param1: t
                    }, l), t.find(f.SCROLL_LEFT).click({
                        param1: t
                    }, c), t.find(f.UL_LI).click({
                        param1: t
                    }, h), p(window).resize({
                        param1: t
                    }, a)
                })
            }
            return _inherits(t, commons), t
        }();
    return p.fn.pmdTab = function(t) {
        "" !== this.selector && (f.PARENT_SELECTOR = this.selector), new e(t)
    }, e
}(jQuery)(),
pmdSidebar = function(l) {
    function c(t) {
        var e = "#" + l(t.currentTarget).attr("data-target");
        l(e).toggleClass(h.OPEN), (l(e).hasClass(h.LEFT_FIXED) || l(e).hasClass(h.RIGHT_FIXED)) && l(e).hasClass(h.OPEN) ? (l(u.OVERLAY).addClass(h.OVERLAY_ACTIVE), l(u.BODY).addClass(h.BODY_OPEN)) : (l(u.OVERLAY).removeClass(h.OVERLAY_ACTIVE), l(u.BODY).removeClass(h.BODY_OPEN))
    }

    function i() {
        l(u.NAVBAR_SIDEBAR).toggleClass(h.OPEN), l(u.NAVBAR_SIDEBAR).hasClass(h.NAVBAR_SIDEBAR) && l(u.NAVBAR_SIDEBAR).hasClass(h.OPEN) ? l(u.OVERLAY).addClass(h.OVERLAY_ACTIVE) : l(u.OVERLAY).removeClass(h.OVERLAY_ACTIVE), l(u.BODY).addClass(h.BODY_OPEN)
    }

    function n(t) {
        l(t.currentTarget).removeClass(h.OVERLAY_ACTIVE), l(u.SIDEBAR).removeClass(h.OPEN), l(u.NAVBAR_SIDEBAR).removeClass(h.OPEN), l(u.BODY).removeClass(h.BODY_OPEN), t.stopPropagation()
    }

    function s(t) {
        var e = (t.data.param1, u.SIDEBAR);
        l(e).each(function() {
            var t = l(this).attr("id"),
                e = l("a[data-target=" + t + "]").attr("is-open-width");
            l(window).width() < e ? l("#" + t).hasClass(h.LEFT && h.SLIDE_PUSH) ? (l("#" + t).removeClass(h.OPEN + " " + h.SLIDE_PUSH), l("#" + t).addClass(h.LEFT_FIXED + " " + h.IS_SLIDEPUSH)) : l("#" + t).removeClass(h.OPEN) : l("#" + t).hasClass(h.IS_SLIDEPUSH) ? (l("#" + t).addClass(h.OPEN + " " + h.SLIDE_PUSH), l("#" + t).removeClass(h.LEFT_FIXED)) : l("#" + t).addClass(h.OPEN)
        }), l(o.prototype.attachParentSelector(u.PARENT_SELECTOR, u.OVERLAY)).removeClass(h.OVERLAY_ACTIVE), l(u.BODY).removeClass(h.BODY_OPEN)
    }
    var h = (l.fn.pmdSidebar, {
            OPEN: "pmd-sidebar-open",
            SLIDE_PUSH: "pmd-sidebar-slide-push",
            RIGHT_FIXED: "pmd-sidebar-right-fixed",
            LEFT_FIXED: "pmd-sidebar-left-fixed",
            OVERLAY_ACTIVE: "pmd-sidebar-overlay-active",
            BODY_OPEN: "pmd-body-open",
            RIGHT: "pmd-sidebar-right",
            NAVBAR_SIDEBAR: "pmd-navbar-sidebar",
            LEFT: "pmd-sidebar-left",
            PM_INI: ".pm-ini",
            IS_SLIDEPUSH: "is-slidepush"
        }),
        u = {
            BODY: "body",
            PARENT_SELECTOR: "",
            OVERLAY: ".pmd-sidebar-overlay",
            SIDEBAR: ".pmd-sidebar",
            LEFT: "." + h.LEFT,
            RIGHT_FIXED: "." + h.RIGHT_FIXED,
            NAVBAR_SIDEBAR: "." + h.NAVBAR_SIDEBAR,
            SIDEBAR_HEADER: "#sidebar .sidebar-header",
            TOGGLE: ".pmd-sidebar-toggle",
            TOPBAR_FIXED: ".topbar-fixed",
            SIDEBAR_DROPDOWN: ".pmd-sidebar-nav .dropdown-menu",
            TOGGLE_RIGHT: ".pmd-sidebar-toggle-right",
            TOPBAR_TOGGLE: ".pmd-topbar-toggle",
            TOPBAR_CLOSE: ".topbar-close",
            NAVBAR_TOGGLE: ".pmd-navbar-toggle",
            PM_INI: ".pm-ini",
            IS_SLIDEPUSH: "." + h.IS_SLIDEPUSH
        },
        d = "click",
        o = function() {
            function a(t) {
                var r, e = u.TOGGLE;
                "" != u.PARENT_SELECTOR && null != u.PARENT_SELECTOR && (e = u.TOGGLE + "[data-target=" + u.PARENT_SELECTOR.substr(1, u.PARENT_SELECTOR.length) + "]"), l(e).each(function() {
                    var t = l(this),
                        e = "#" + t.attr("data-target"),
                        i = t.attr("data-placement"),
                        n = t.attr("data-position"),
                        s = t.attr("is-open");
                    t.attr("minsize"), n = n || "", "left" == (i = i || "").toLowerCase() ? l(e).addClass(h.LEFT) : "right" == i.toLowerCase() ? l(e).addClass(h.RIGHT_FIXED) : l(e).addClass(h.LEFT), "left" == i.toLowerCase() && "slidepush" == n.toLowerCase() ? l(e).addClass(h.SLIDE_PUSH) : "left" == i.toLowerCase() && "fixed" == n.toLowerCase() ? l(e).addClass(h.LEFT_FIXED) : "right" == i.toLowerCase() && "slidepush" == n.toLowerCase() || ("right" == i.toLowerCase() && "fixed" == n.toLowerCase() ? l(e).addClass(h.RIGHT_FIXED) : l(e).addClass(h.LEFT_FIXED)), null == s || 1 != s && "true" != s ? l(e).removeClass(h.OPEN) : l(e).addClass(h.OPEN), l(e + " " + u.SIDEBAR_DROPDOWN).off(), l(e + " " + u.SIDEBAR_DROPDOWN).on(d, function(t) {
                        t.stopPropagation()
                    }), l(a.prototype.attachParentSelector(u.PARENT_SELECTOR, u.TOPBAR_TOGGLE)).off(d), l(a.prototype.attachParentSelector(u.PARENT_SELECTOR, u.TOPBAR_TOGGLE)).on(d, function(t) {
                        l(u.TOPBAR_FIXED).toggleClass(h.OPEN)
                    }), l(a.prototype.attachParentSelector(u.PARENT_SELECTOR, u.TOPBAR_CLOSE)).off(d), l(a.prototype.attachParentSelector(u.PARENT_SELECTOR, u.TOPBAR_CLOSE)).on(d, function() {
                        l(u.TOPBAR_FIXED).removeClass(h.OPEN)
                    }), t.off(d), t.on(d, c);
                    var o = t.attr("is-open-width");
                    l(window).width() < o ? l(e).hasClass(h.LEFT && h.SLIDE_PUSH) ? (l(e).removeClass(h.OPEN + " " + h.SLIDE_PUSH), l(e).addClass(h.LEFT_FIXED + " " + h.IS_SLIDEPUSH)) : l(e).removeClass(h.OPEN) : l(e).hasClass(h.IS_SLIDEPUSH) && (l(e).addClass(h.OPEN + " " + h.SLIDE_PUSH), l(e).removeClass(h.LEFT_FIXED))
                }), l(a.prototype.attachParentSelector(u.PARENT_SELECTOR, u.NAVBAR_TOGGLE)).off(d), l(a.prototype.attachParentSelector(u.PARENT_SELECTOR, u.NAVBAR_TOGGLE)).on(d, i), l(a.prototype.attachParentSelector(u.PARENT_SELECTOR, u.OVERLAY)).off(d), l(a.prototype.attachParentSelector(u.PARENT_SELECTOR, u.OVERLAY)).on(d, n), l(window).resize({
                    param1: t
                }, s), r = jQuery.fn.removeClass, jQuery.fn.removeClass = function(t) {
                    if (t && "function" == typeof t.test)
                        for (var e = 0, i = this.length; e < i; e++) {
                            var n = this[e];
                            if (1 === n.nodeType && n.className) {
                                for (var s = n.className.split(/\s+/), o = s.length; o--;) t.test(s[o]) && s.splice(o, 1);
                                n.className = jQuery.trim(s.join(" "))
                            }
                        } else r.call(this, t);
                    return this
                }
            }
            return _inherits(a, commons), a
        }();
    return l.fn.pmdSidebar = function(t) {
        "" !== this.selector && (u.PARENT_SELECTOR = this.selector), new o(t)
    }, o
}(jQuery)();

function dynamicColor() {
$.when($.get("pmd-color-settings/css/color-theme.css")).done(function(t) {
    var e = e(),
        i = i(),
        n = n(),
        s = s();

    function e() {
        if ($(".primary-color-block .active").hasClass("btn-color")) return $(".primary-color-block .active").attr("data-color");
        if ($(".primary-color-block .active").hasClass("form-group")) return $("#custom-primary").data("colorpicker").color;
        return "#4acc8e"
    }

    function i() {
        if ($(".secondary-color-block .active").hasClass("btn-color")) return $(".secondary-color-block .active").attr("data-color");
        if ($(".secondary-color-block .active").hasClass("form-group")) return $("#custom-secondary").data("colorpicker").color;
        return "#89efee"
    }

    function n() {
        if ($(".primary-text-color-block .active").hasClass("btn-color")) return $(".primary-text-color-block .active").attr("data-color");
        if ($(".primary-text-color-block .active").hasClass("form-group")) return $("#custom-text-primary").data("colorpicker").color;
        return "#212121"
    }

    function s() {
        if ($(".secondary-text-color-block .active").hasClass("btn-color")) return $(".secondary-text-color-block .active").attr("data-color");
        if ($(".secondary-text-color-block .active").hasClass("form-group")) return $("#custom-text-secondary").data("colorpicker").color;
        return "#424242"
    }
    if (console.log(e), "undefined" == !e) var o = r(e).r + "," + r(e).g + "," + r(e).b;
    else o = "25,40,102";

    function r(t) {
        var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return e ? {
            r: parseInt(e[1], 16),
            g: parseInt(e[2], 16),
            b: parseInt(e[3], 16)
        } : null
    }
    $(".colorThemeCSS").remove(), updatedCSS = t.replace(/#4acc8e/g, e).replace(/#89efee/g, i).replace(/25,40,102/g, o).replace(/#212121/g, n).replace(/#424242/g, s), $("<style />").addClass("colorThemeCSS").text(updatedCSS).appendTo($("head")), $("#download-theme-css").removeClass("disabled")
})
}! function(l, i, s, o) {
function c(t, e) {
    this.settings = null, this.options = l.extend({}, c.Defaults, e), this.$element = l(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: {
            start: null,
            current: null
        },
        direction: null
    }, this._states = {
        current: {},
        tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"]
        }
    }, l.each(["onResize", "onThrottledResize"], l.proxy(function(t, e) {
        this._handlers[e] = l.proxy(this[e], this)
    }, this)), l.each(c.Plugins, l.proxy(function(t, e) {
        this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
    }, this)), l.each(c.Workers, l.proxy(function(t, e) {
        this._pipe.push({
            filter: e.filter,
            run: l.proxy(e.run, this)
        })
    }, this)), this.setup(), this.initialize()
}
c.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: i,
    fallbackEasing: "swing",
    info: !1,
    nestedItemSelector: !1,
    itemElement: "div",
    stageElement: "div",
    refreshClass: "owl-refresh",
    loadedClass: "owl-loaded",
    loadingClass: "owl-loading",
    rtlClass: "owl-rtl",
    responsiveClass: "owl-responsive",
    dragClass: "owl-drag",
    itemClass: "owl-item",
    stageClass: "owl-stage",
    stageOuterClass: "owl-stage-outer",
    grabClass: "owl-grab"
}, c.Width = {
    Default: "default",
    Inner: "inner",
    Outer: "outer"
}, c.Type = {
    Event: "event",
    State: "state"
}, c.Plugins = {}, c.Workers = [{
    filter: ["width", "settings"],
    run: function() {
        this._width = this.$element.width()
    }
}, {
    filter: ["width", "items", "settings"],
    run: function(t) {
        t.current = this._items && this._items[this.relative(this._current)]
    }
}, {
    filter: ["items", "settings"],
    run: function() {
        this.$stage.children(".cloned").remove()
    }
}, {
    filter: ["width", "items", "settings"],
    run: function(t) {
        var e = this.settings.margin || "",
            i = !this.settings.autoWidth,
            n = this.settings.rtl,
            s = {
                width: "auto",
                "margin-left": n ? e : "",
                "margin-right": n ? "" : e
            };
        !i && this.$stage.children().css(s), t.css = s
    }
}, {
    filter: ["width", "items", "settings"],
    run: function(t) {
        var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
            i = null,
            n = this._items.length,
            s = !this.settings.autoWidth,
            o = [];
        for (t.items = {
                merge: !1,
                width: e
            }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = 1 < i || t.items.merge, o[n] = s ? e * i : this._items[n].width();
        this._widths = o
    }
}, {
    filter: ["items", "settings"],
    run: function() {
        var t = [],
            e = this._items,
            i = this.settings,
            n = Math.max(2 * i.items, 4),
            s = 2 * Math.ceil(e.length / 2),
            o = i.loop && e.length ? i.rewind ? n : Math.max(n, s) : 0,
            r = "",
            a = "";
        for (o /= 2; o--;) t.push(this.normalize(t.length / 2, !0)), r += e[t[t.length - 1]][0].outerHTML, t.push(this.normalize(e.length - 1 - (t.length - 1) / 2, !0)), a = e[t[t.length - 1]][0].outerHTML + a;
        this._clones = t, l(r).addClass("cloned").appendTo(this.$stage), l(a).addClass("cloned").prependTo(this.$stage)
    }
}, {
    filter: ["width", "items", "settings"],
    run: function() {
        for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
        this._coordinates = o
    }
}, {
    filter: ["width", "items", "settings"],
    run: function() {
        var t = this.settings.stagePadding,
            e = this._coordinates,
            i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
        this.$stage.css(i)
    }
}, {
    filter: ["width", "items", "settings"],
    run: function(t) {
        var e = this._coordinates.length,
            i = !this.settings.autoWidth,
            n = this.$stage.children();
        if (i && t.items.merge)
            for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
        else i && (t.css.width = t.items.width, n.css(t.css))
    }
}, {
    filter: ["items"],
    run: function() {
        this._coordinates.length < 1 && this.$stage.removeAttr("style")
    }
}, {
    filter: ["width", "items", "settings"],
    run: function(t) {
        t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current)
    }
}, {
    filter: ["position"],
    run: function() {
        this.animate(this.coordinates(this._current))
    }
}, {
    filter: ["width", "position", "items", "settings"],
    run: function() {
        var t, e, i, n, s = this.settings.rtl ? 1 : -1,
            o = 2 * this.settings.stagePadding,
            r = this.coordinates(this.current()) + o,
            a = r + this.width() * s,
            l = [];
        for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", r) && this.op(t, ">", a) || this.op(e, "<", r) && this.op(e, ">", a)) && l.push(i);
        this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
    }
}], c.prototype.initialize = function() {
    var t, e, i;
    (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) && (t = this.$element.find("img"), e = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : o, i = this.$element.children(e).width(), t.length && i <= 0 && this.preloadAutoWidthImages(t));
    this.$element.addClass(this.options.loadingClass), this.$stage = l("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
}, c.prototype.setup = function() {
    var e = this.viewport(),
        t = this.options.responsive,
        i = -1,
        n = null;
    t ? (l.each(t, function(t) {
        t <= e && i < t && (i = Number(t))
    }), "function" == typeof(n = l.extend({}, this.options, t[i])).stagePadding && (n.stagePadding = n.stagePadding()), delete n.responsive, n.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : n = l.extend({}, this.options), this.trigger("change", {
        property: {
            name: "settings",
            value: n
        }
    }), this._breakpoint = i, this.settings = n, this.invalidate("settings"), this.trigger("changed", {
        property: {
            name: "settings",
            value: this.settings
        }
    })
}, c.prototype.optionsLogic = function() {
    this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
}, c.prototype.prepare = function(t) {
    var e = this.trigger("prepare", {
        content: t
    });
    return e.data || (e.data = l("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
        content: e.data
    }), e.data
}, c.prototype.update = function() {
    for (var t = 0, e = this._pipe.length, i = l.proxy(function(t) {
            return this[t]
        }, this._invalidated), n = {}; t < e;)(this._invalidated.all || 0 < l.grep(this._pipe[t].filter, i).length) && this._pipe[t].run(n), t++;
    this._invalidated = {}, !this.is("valid") && this.enter("valid")
}, c.prototype.width = function(t) {
    switch (t = t || c.Width.Default) {
        case c.Width.Inner:
        case c.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
    }
}, c.prototype.refresh = function() {
    this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
}, c.prototype.onThrottledResize = function() {
    i.clearTimeout(this.resizeTimer), this.resizeTimer = i.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
}, c.prototype.onResize = function() {
    return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
}, c.prototype.registerEventHandlers = function() {
    l.support.transition && this.$stage.on(l.support.transition.end + ".owl.core", l.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(i, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
        return !1
    })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", l.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", l.proxy(this.onDragEnd, this)))
}, c.prototype.onDragStart = function(t) {
    var e = null;
    3 !== t.which && (l.support.transform ? e = {
        x: (e = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === e.length ? 12 : 4],
        y: e[16 === e.length ? 13 : 5]
    } : (e = this.$stage.position(), e = {
        x: this.settings.rtl ? e.left + this.$stage.width() - this.width() + this.settings.margin : e.left,
        y: e.top
    }), this.is("animating") && (l.support.transform ? this.animate(e.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = l(t.target), this._drag.stage.start = e, this._drag.stage.current = e, this._drag.pointer = this.pointer(t), l(s).on("mouseup.owl.core touchend.owl.core", l.proxy(this.onDragEnd, this)), l(s).one("mousemove.owl.core touchmove.owl.core", l.proxy(function(t) {
        var e = this.difference(this._drag.pointer, this.pointer(t));
        l(s).on("mousemove.owl.core touchmove.owl.core", l.proxy(this.onDragMove, this)), Math.abs(e.x) < Math.abs(e.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
    }, this)))
}, c.prototype.onDragMove = function(t) {
    var e = null,
        i = null,
        n = null,
        s = this.difference(this._drag.pointer, this.pointer(t)),
        o = this.difference(this._drag.stage.start, s);
    this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
}, c.prototype.onDragEnd = function(t) {
    var e = this.difference(this._drag.pointer, this.pointer(t)),
        i = this._drag.stage.current,
        n = 0 < e.x ^ this.settings.rtl ? "left" : "right";
    l(s).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== e.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(i.x, 0 !== e.x ? n : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = n, (3 < Math.abs(e.x) || 300 < (new Date).getTime() - this._drag.time) && this._drag.target.one("click.owl.core", function() {
        return !1
    })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
}, c.prototype.closest = function(i, n) {
    var s = -1,
        o = this.width(),
        r = this.coordinates();
    return this.settings.freeDrag || l.each(r, l.proxy(function(t, e) {
        return "left" === n && e - 30 < i && i < e + 30 ? s = t : "right" === n && e - o - 30 < i && i < e - o + 30 ? s = t + 1 : this.op(i, "<", e) && this.op(i, ">", r[t + 1] || e - o) && (s = "left" === n ? t + 1 : t), -1 === s
    }, this)), this.settings.loop || (this.op(i, ">", r[this.minimum()]) ? s = i = this.minimum() : this.op(i, "<", r[this.maximum()]) && (s = i = this.maximum())), s
}, c.prototype.animate = function(t) {
    var e = 0 < this.speed();
    this.is("animating") && this.onTransitionEnd(), e && (this.enter("animating"), this.trigger("translate")), l.support.transform3d && l.support.transition ? this.$stage.css({
        transform: "translate3d(" + t + "px,0px,0px)",
        transition: this.speed() / 1e3 + "s"
    }) : e ? this.$stage.animate({
        left: t + "px"
    }, this.speed(), this.settings.fallbackEasing, l.proxy(this.onTransitionEnd, this)) : this.$stage.css({
        left: t + "px"
    })
}, c.prototype.is = function(t) {
    return this._states.current[t] && 0 < this._states.current[t]
}, c.prototype.current = function(t) {
    if (t === o) return this._current;
    if (0 === this._items.length) return o;
    if (t = this.normalize(t), this._current !== t) {
        var e = this.trigger("change", {
            property: {
                name: "position",
                value: t
            }
        });
        e.data !== o && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", {
            property: {
                name: "position",
                value: this._current
            }
        })
    }
    return this._current
}, c.prototype.invalidate = function(t) {
    return "string" === l.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), l.map(this._invalidated, function(t, e) {
        return e
    })
}, c.prototype.reset = function(t) {
    (t = this.normalize(t)) !== o && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
}, c.prototype.normalize = function(t, e) {
    var i = this._items.length,
        n = e ? 0 : this._clones.length;
    return !this.isNumeric(t) || i < 1 ? t = o : (t < 0 || i + n <= t) && (t = ((t - n / 2) % i + i) % i + n / 2), t
}, c.prototype.relative = function(t) {
    return t -= this._clones.length / 2, this.normalize(t, !0)
}, c.prototype.maximum = function(t) {
    var e, i, n, s = this.settings,
        o = this._coordinates.length;
    if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
    else if (s.autoWidth || s.merge) {
        for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !(n < (i += this._items[e].width() + this.settings.margin)););
        o = e + 1
    } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
    return t && (o -= this._clones.length / 2), Math.max(o, 0)
}, c.prototype.minimum = function(t) {
    return t ? 0 : this._clones.length / 2
}, c.prototype.items = function(t) {
    return t === o ? this._items.slice() : (t = this.normalize(t, !0), this._items[t])
}, c.prototype.mergers = function(t) {
    return t === o ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t])
}, c.prototype.clones = function(i) {
    var e = this._clones.length / 2,
        n = e + this._items.length,
        s = function(t) {
            return t % 2 == 0 ? n + t / 2 : e - (t + 1) / 2
        };
    return i === o ? l.map(this._clones, function(t, e) {
        return s(e)
    }) : l.map(this._clones, function(t, e) {
        return t === i ? s(e) : null
    })
}, c.prototype.speed = function(t) {
    return t !== o && (this._speed = t), this._speed
}, c.prototype.coordinates = function(t) {
    var e, i = 1,
        n = t - 1;
    return t === o ? l.map(this._coordinates, l.proxy(function(t, e) {
        return this.coordinates(e)
    }, this)) : (this.settings.center ? (this.settings.rtl && (i = -1, n = t + 1), e = this._coordinates[t], e += (this.width() - e + (this._coordinates[n] || 0)) / 2 * i) : e = this._coordinates[n] || 0, e = Math.ceil(e))
}, c.prototype.duration = function(t, e, i) {
    return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed)
}, c.prototype.to = function(t, e) {
    var i = this.current(),
        n = null,
        s = t - this.relative(i),
        o = (0 < s) - (s < 0),
        r = this._items.length,
        a = this.minimum(),
        l = this.maximum();
    this.settings.loop ? (!this.settings.rewind && Math.abs(s) > r / 2 && (s += -1 * o * r), (n = (((t = i + s) - a) % r + r) % r + a) !== t && n - s <= l && 0 < n - s && (i = n - s, t = n, this.reset(i))) : this.settings.rewind ? t = (t % (l += 1) + l) % l : t = Math.max(a, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
}, c.prototype.next = function(t) {
    t = t || !1, this.to(this.relative(this.current()) + 1, t)
}, c.prototype.prev = function(t) {
    t = t || !1, this.to(this.relative(this.current()) - 1, t)
}, c.prototype.onTransitionEnd = function(t) {
    if (t !== o && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
    this.leave("animating"), this.trigger("translated")
}, c.prototype.viewport = function() {
    var t;
    return this.options.responsiveBaseElement !== i ? t = l(this.options.responsiveBaseElement).width() : i.innerWidth ? t = i.innerWidth : s.documentElement && s.documentElement.clientWidth ? t = s.documentElement.clientWidth : console.warn("Can not detect viewport width."), t
}, c.prototype.replace = function(t) {
    this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : l(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function() {
        return 1 === this.nodeType
    }).each(l.proxy(function(t, e) {
        e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
    }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
}, c.prototype.add = function(t, e) {
    var i = this.relative(this._current);
    e = e === o ? this._items.length : this.normalize(e, !0), t = t instanceof jQuery ? t : l(t), this.trigger("add", {
        content: t,
        position: e
    }), t = this.prepare(t), 0 === this._items.length || e === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[e - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[e].before(t), this._items.splice(e, 0, t), this._mergers.splice(e, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[i] && this.reset(this._items[i].index()), this.invalidate("items"), this.trigger("added", {
        content: t,
        position: e
    })
}, c.prototype.remove = function(t) {
    (t = this.normalize(t, !0)) !== o && (this.trigger("remove", {
        content: this._items[t],
        position: t
    }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", {
        content: null,
        position: t
    }))
}, c.prototype.preloadAutoWidthImages = function(t) {
    t.each(l.proxy(function(t, e) {
        this.enter("pre-loading"), e = l(e), l(new Image).one("load", l.proxy(function(t) {
            e.attr("src", t.target.src), e.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
        }, this)).attr("src", e.attr("src") || e.attr("data-src") || e.attr("data-src-retina"))
    }, this))
}, c.prototype.destroy = function() {
    for (var t in this.$element.off(".owl.core"), this.$stage.off(".owl.core"), l(s).off(".owl.core"), !1 !== this.settings.responsive && (i.clearTimeout(this.resizeTimer), this.off(i, "resize", this._handlers.onThrottledResize)), this._plugins) this._plugins[t].destroy();
    this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
}, c.prototype.op = function(t, e, i) {
    var n = this.settings.rtl;
    switch (e) {
        case "<":
            return n ? i < t : t < i;
        case ">":
            return n ? t < i : i < t;
        case ">=":
            return n ? t <= i : i <= t;
        case "<=":
            return n ? i <= t : t <= i
    }
}, c.prototype.on = function(t, e, i, n) {
    t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i)
}, c.prototype.off = function(t, e, i, n) {
    t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i)
}, c.prototype.trigger = function(t, e, i, n, s) {
    var o = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        },
        r = l.camelCase(l.grep(["on", t, i], function(t) {
            return t
        }).join("-").toLowerCase()),
        a = l.Event([t, "owl", i || "carousel"].join(".").toLowerCase(), l.extend({
            relatedTarget: this
        }, o, e));
    return this._supress[t] || (l.each(this._plugins, function(t, e) {
        e.onTrigger && e.onTrigger(a)
    }), this.register({
        type: c.Type.Event,
        name: t
    }), this.$element.trigger(a), this.settings && "function" == typeof this.settings[r] && this.settings[r].call(this, a)), a
}, c.prototype.enter = function(t) {
    l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
        this._states.current[e] === o && (this._states.current[e] = 0), this._states.current[e]++
    }, this))
}, c.prototype.leave = function(t) {
    l.each([t].concat(this._states.tags[t] || []), l.proxy(function(t, e) {
        this._states.current[e]--
    }, this))
}, c.prototype.register = function(i) {
    if (i.type === c.Type.Event) {
        if (l.event.special[i.name] || (l.event.special[i.name] = {}), !l.event.special[i.name].owl) {
            var e = l.event.special[i.name]._default;
            l.event.special[i.name]._default = function(t) {
                return !e || !e.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && -1 < t.namespace.indexOf("owl") : e.apply(this, arguments)
            }, l.event.special[i.name].owl = !0
        }
    } else i.type === c.Type.State && (this._states.tags[i.name] ? this._states.tags[i.name] = this._states.tags[i.name].concat(i.tags) : this._states.tags[i.name] = i.tags, this._states.tags[i.name] = l.grep(this._states.tags[i.name], l.proxy(function(t, e) {
        return l.inArray(t, this._states.tags[i.name]) === e
    }, this)))
}, c.prototype.suppress = function(t) {
    l.each(t, l.proxy(function(t, e) {
        this._supress[e] = !0
    }, this))
}, c.prototype.release = function(t) {
    l.each(t, l.proxy(function(t, e) {
        delete this._supress[e]
    }, this))
}, c.prototype.pointer = function(t) {
    var e = {
        x: null,
        y: null
    };
    return (t = (t = t.originalEvent || t || i.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (e.x = t.pageX, e.y = t.pageY) : (e.x = t.clientX, e.y = t.clientY), e
}, c.prototype.isNumeric = function(t) {
    return !isNaN(parseFloat(t))
}, c.prototype.difference = function(t, e) {
    return {
        x: t.x - e.x,
        y: t.y - e.y
    }
}, l.fn.owlCarousel = function(e) {
    var n = Array.prototype.slice.call(arguments, 1);
    return this.each(function() {
        var t = l(this),
            i = t.data("owl.carousel");
        i || (i = new c(this, "object" == typeof e && e), t.data("owl.carousel", i), l.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, e) {
            i.register({
                type: c.Type.Event,
                name: e
            }), i.$element.on(e + ".owl.carousel.core", l.proxy(function(t) {
                t.namespace && t.relatedTarget !== this && (this.suppress([e]), i[e].apply(this, [].slice.call(arguments, 1)), this.release([e]))
            }, i))
        })), "string" == typeof e && "_" !== e.charAt(0) && i[e].apply(i, n)
    })
}, l.fn.owlCarousel.Constructor = c
}(window.Zepto || window.jQuery, window, document),
function(e, i, t, n) {
var s = function(t) {
    this._core = t, this._interval = null, this._visible = null, this._handlers = {
        "initialized.owl.carousel": e.proxy(function(t) {
            t.namespace && this._core.settings.autoRefresh && this.watch()
        }, this)
    }, this._core.options = e.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
};
s.Defaults = {
    autoRefresh: !0,
    autoRefreshInterval: 500
}, s.prototype.watch = function() {
    this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = i.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
}, s.prototype.refresh = function() {
    this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
}, s.prototype.destroy = function() {
    var t, e;
    for (t in i.clearInterval(this._interval), this._handlers) this._core.$element.off(t, this._handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
}(window.Zepto || window.jQuery, window, document),
function(a, o, t, e) {
var i = function(t) {
    this._core = t, this._loaded = [], this._handlers = {
        "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(t) {
            if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                for (var e = this._core.settings, i = e.center && Math.ceil(e.items / 2) || e.items, n = e.center && -1 * i || 0, s = (t.property && void 0 !== t.property.value ? t.property.value : this._core.current()) + n, o = this._core.clones().length, r = a.proxy(function(t, e) {
                        this.load(e)
                    }, this); n++ < i;) this.load(o / 2 + this._core.relative(s)), o && a.each(this._core.clones(this._core.relative(s)), r), s++
        }, this)
    }, this._core.options = a.extend({}, i.Defaults, this._core.options), this._core.$element.on(this._handlers)
};
i.Defaults = {
    lazyLoad: !1
}, i.prototype.load = function(t) {
    var e = this._core.$stage.children().eq(t),
        i = e && e.find(".owl-lazy");
    !i || -1 < a.inArray(e.get(0), this._loaded) || (i.each(a.proxy(function(t, e) {
        var i, n = a(e),
            s = 1 < o.devicePixelRatio && n.attr("data-src-retina") || n.attr("data-src");
        this._core.trigger("load", {
            element: n,
            url: s
        }, "lazy"), n.is("img") ? n.one("load.owl.lazy", a.proxy(function() {
            n.css("opacity", 1), this._core.trigger("loaded", {
                element: n,
                url: s
            }, "lazy")
        }, this)).attr("src", s) : ((i = new Image).onload = a.proxy(function() {
            n.css({
                "background-image": 'url("' + s + '")',
                opacity: "1"
            }), this._core.trigger("loaded", {
                element: n,
                url: s
            }, "lazy")
        }, this), i.src = s)
    }, this)), this._loaded.push(e.get(0)))
}, i.prototype.destroy = function() {
    var t, e;
    for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, a.fn.owlCarousel.Constructor.Plugins.Lazy = i
}(window.Zepto || window.jQuery, window, document),
function(o, t, e, i) {
var n = function(t) {
    this._core = t, this._handlers = {
        "initialized.owl.carousel refreshed.owl.carousel": o.proxy(function(t) {
            t.namespace && this._core.settings.autoHeight && this.update()
        }, this),
        "changed.owl.carousel": o.proxy(function(t) {
            t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update()
        }, this),
        "loaded.owl.lazy": o.proxy(function(t) {
            t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
        }, this)
    }, this._core.options = o.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers)
};
n.Defaults = {
    autoHeight: !1,
    autoHeightClass: "owl-height"
}, n.prototype.update = function() {
    var t, e = this._core._current,
        i = e + this._core.settings.items,
        n = this._core.$stage.children().toArray().slice(e, i),
        s = [];
    o.each(n, function(t, e) {
        s.push(o(e).height())
    }), t = Math.max.apply(null, s), this._core.$stage.parent().height(t).addClass(this._core.settings.autoHeightClass)
}, n.prototype.destroy = function() {
    var t, e;
    for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, o.fn.owlCarousel.Constructor.Plugins.AutoHeight = n
}(window.Zepto || window.jQuery, window, document),
function(h, t, e, i) {
var n = function(t) {
    this._core = t, this._videos = {}, this._playing = null, this._handlers = {
        "initialized.owl.carousel": h.proxy(function(t) {
            t.namespace && this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"]
            })
        }, this),
        "resize.owl.carousel": h.proxy(function(t) {
            t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
        }, this),
        "refreshed.owl.carousel": h.proxy(function(t) {
            t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
        }, this),
        "changed.owl.carousel": h.proxy(function(t) {
            t.namespace && "position" === t.property.name && this._playing && this.stop()
        }, this),
        "prepared.owl.carousel": h.proxy(function(t) {
            if (t.namespace) {
                var e = h(t.content).find(".owl-video");
                e.length && (e.css("display", "none"), this.fetch(e, h(t.content)))
            }
        }, this)
    }, this._core.options = h.extend({}, n.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", h.proxy(function(t) {
        this.play(t)
    }, this))
};
n.Defaults = {
    video: !1,
    videoHeight: !1,
    videoWidth: !1
}, n.prototype.fetch = function(t, e) {
    var i = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube",
        n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
        s = t.attr("data-width") || this._core.settings.videoWidth,
        o = t.attr("data-height") || this._core.settings.videoHeight,
        r = t.attr("href");
    if (!r) throw new Error("Missing video URL.");
    if (-1 < (n = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu")) i = "youtube";
    else if (-1 < n[3].indexOf("vimeo")) i = "vimeo";
    else {
        if (!(-1 < n[3].indexOf("vzaar"))) throw new Error("Video URL not supported.");
        i = "vzaar"
    }
    n = n[6], this._videos[r] = {
        type: i,
        id: n,
        width: s,
        height: o
    }, e.attr("data-video", r), this.thumbnail(t, this._videos[r])
}, n.prototype.thumbnail = function(e, t) {
    var i, n, s = t.width && t.height ? 'style="width:' + t.width + "px;height:" + t.height + 'px;"' : "",
        o = e.find("img"),
        r = "src",
        a = "",
        l = this._core.settings,
        c = function(t) {
            '<div class="owl-video-play-icon"></div>', i = l.lazyLoad ? '<div class="owl-video-tn ' + a + '" ' + r + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(i), e.after('<div class="owl-video-play-icon"></div>')
        };
    if (e.wrap('<div class="owl-video-wrapper"' + s + "></div>"), this._core.settings.lazyLoad && (r = "data-src", a = "owl-lazy"), o.length) return c(o.attr(r)), o.remove(), !1;
    "youtube" === t.type ? (n = "//img.youtube.com/vi/" + t.id + "/hqdefault.jpg", c(n)) : "vimeo" === t.type ? h.ajax({
        type: "GET",
        url: "//vimeo.com/api/v2/video/" + t.id + ".json",
        jsonp: "callback",
        dataType: "jsonp",
        success: function(t) {
            n = t[0].thumbnail_large, c(n)
        }
    }) : "vzaar" === t.type && h.ajax({
        type: "GET",
        url: "//vzaar.com/api/videos/" + t.id + ".json",
        jsonp: "callback",
        dataType: "jsonp",
        success: function(t) {
            n = t.framegrab_url, c(n)
        }
    })
}, n.prototype.stop = function() {
    this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
}, n.prototype.play = function(t) {
    var e, i = h(t.target).closest("." + this._core.settings.itemClass),
        n = this._videos[i.attr("data-video")],
        s = n.width || "100%",
        o = n.height || this._core.$stage.height();
    this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), i = this._core.items(this._core.relative(i.index())), this._core.reset(i.index()), "youtube" === n.type ? e = '<iframe width="' + s + '" height="' + o + '" src="//www.youtube.com/embed/' + n.id + "?autoplay=1&rel=0&v=" + n.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === n.type ? e = '<iframe src="//player.vimeo.com/video/' + n.id + '?autoplay=1" width="' + s + '" height="' + o + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === n.type && (e = '<iframe frameborder="0"height="' + o + '"width="' + s + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + n.id + '/player?autoplay=true"></iframe>'), h('<div class="owl-video-frame">' + e + "</div>").insertAfter(i.find(".owl-video")), this._playing = i.addClass("owl-video-playing"))
}, n.prototype.isInFullScreen = function() {
    var t = e.fullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement;
    return t && h(t).parent().hasClass("owl-video-frame")
}, n.prototype.destroy = function() {
    var t, e;
    for (t in this._core.$element.off("click.owl.video"), this._handlers) this._core.$element.off(t, this._handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, h.fn.owlCarousel.Constructor.Plugins.Video = n
}(window.Zepto || window.jQuery, window, document),
function(r, t, e, i) {
var n = function(t) {
    this.core = t, this.core.options = r.extend({}, n.Defaults, this.core.options), this.swapping = !0, this.previous = void 0, this.next = void 0, this.handlers = {
        "change.owl.carousel": r.proxy(function(t) {
            t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value)
        }, this),
        "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": r.proxy(function(t) {
            t.namespace && (this.swapping = "translated" == t.type)
        }, this),
        "translate.owl.carousel": r.proxy(function(t) {
            t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
        }, this)
    }, this.core.$element.on(this.handlers)
};
n.Defaults = {
    animateOut: !1,
    animateIn: !1
}, n.prototype.swap = function() {
    if (1 === this.core.settings.items && r.support.animation && r.support.transition) {
        this.core.speed(0);
        var t, e = r.proxy(this.clear, this),
            i = this.core.$stage.children().eq(this.previous),
            n = this.core.$stage.children().eq(this.next),
            s = this.core.settings.animateIn,
            o = this.core.settings.animateOut;
        this.core.current() !== this.previous && (o && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), i.one(r.support.animation.end, e).css({
            left: t + "px"
        }).addClass("animated owl-animated-out").addClass(o)), s && n.one(r.support.animation.end, e).addClass("animated owl-animated-in").addClass(s))
    }
}, n.prototype.clear = function(t) {
    r(t.target).css({
        left: ""
    }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
}, n.prototype.destroy = function() {
    var t, e;
    for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, r.fn.owlCarousel.Constructor.Plugins.Animate = n
}(window.Zepto || window.jQuery, window, document),
function(i, n, s, t) {
var e = function(t) {
    this._core = t, this._timeout = null, this._paused = !1, this._handlers = {
        "changed.owl.carousel": i.proxy(function(t) {
            t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
        }, this),
        "initialized.owl.carousel": i.proxy(function(t) {
            t.namespace && this._core.settings.autoplay && this.play()
        }, this),
        "play.owl.autoplay": i.proxy(function(t, e, i) {
            t.namespace && this.play(e, i)
        }, this),
        "stop.owl.autoplay": i.proxy(function(t) {
            t.namespace && this.stop()
        }, this),
        "mouseover.owl.autoplay": i.proxy(function() {
            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
        }, this),
        "mouseleave.owl.autoplay": i.proxy(function() {
            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
        }, this),
        "touchstart.owl.core": i.proxy(function() {
            this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
        }, this),
        "touchend.owl.core": i.proxy(function() {
            this._core.settings.autoplayHoverPause && this.play()
        }, this)
    }, this._core.$element.on(this._handlers), this._core.options = i.extend({}, e.Defaults, this._core.options)
};
e.Defaults = {
    autoplay: !1,
    autoplayTimeout: 5e3,
    autoplayHoverPause: !1,
    autoplaySpeed: !1
}, e.prototype.play = function(t, e) {
    this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
}, e.prototype._getNextTimeout = function(t, e) {
    return this._timeout && n.clearTimeout(this._timeout), n.setTimeout(i.proxy(function() {
        this._paused || this._core.is("busy") || this._core.is("interacting") || s.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
    }, this), t || this._core.settings.autoplayTimeout)
}, e.prototype._setAutoPlayInterval = function() {
    this._timeout = this._getNextTimeout()
}, e.prototype.stop = function() {
    this._core.is("rotating") && (n.clearTimeout(this._timeout), this._core.leave("rotating"))
}, e.prototype.pause = function() {
    this._core.is("rotating") && (this._paused = !0)
}, e.prototype.destroy = function() {
    var t, e;
    for (t in this.stop(), this._handlers) this._core.$element.off(t, this._handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, i.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(o, t, e, i) {
"use strict";
var n = function(t) {
    this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
        next: this._core.next,
        prev: this._core.prev,
        to: this._core.to
    }, this._handlers = {
        "prepared.owl.carousel": o.proxy(function(t) {
            t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + o(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
        }, this),
        "added.owl.carousel": o.proxy(function(t) {
            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
        }, this),
        "remove.owl.carousel": o.proxy(function(t) {
            t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
        }, this),
        "changed.owl.carousel": o.proxy(function(t) {
            t.namespace && "position" == t.property.name && this.draw()
        }, this),
        "initialized.owl.carousel": o.proxy(function(t) {
            t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
        }, this),
        "refreshed.owl.carousel": o.proxy(function(t) {
            t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
        }, this)
    }, this._core.options = o.extend({}, n.Defaults, this._core.options), this.$element.on(this._handlers)
};
n.Defaults = {
    nav: !1,
    navText: ["prev", "next"],
    navSpeed: !1,
    navElement: "div",
    navContainer: !1,
    navContainerClass: "owl-nav",
    navClass: ["owl-prev", "owl-next"],
    slideBy: 1,
    dotClass: "owl-dot",
    dotsClass: "owl-dots",
    dots: !0,
    dotsEach: !1,
    dotsData: !1,
    dotsSpeed: !1,
    dotsContainer: !1
}, n.prototype.initialize = function() {
    var t, i = this._core.settings;
    for (t in this._controls.$relative = (i.navContainer ? o(i.navContainer) : o("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = o("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", o.proxy(function(t) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = o("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", o.proxy(function(t) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [o("<div>").addClass(i.dotClass).append(o("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? o(i.dotsContainer) : o("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", o.proxy(function(t) {
            var e = o(t.target).parent().is(this._controls.$absolute) ? o(t.target).index() : o(t.target).parent().index();
            t.preventDefault(), this.to(e, i.dotsSpeed)
        }, this)), this._overrides) this._core[t] = o.proxy(this[t], this)
}, n.prototype.destroy = function() {
    var t, e, i, n;
    for (t in this._handlers) this.$element.off(t, this._handlers[t]);
    for (e in this._controls) this._controls[e].remove();
    for (n in this.overides) this._core[n] = this._overrides[n];
    for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
}, n.prototype.update = function() {
    var t, e, i = this._core.clones().length / 2,
        n = i + this._core.items().length,
        s = this._core.maximum(!0),
        o = this._core.settings,
        r = o.center || o.autoWidth || o.dotsData ? 1 : o.dotsEach || o.items;
    if ("page" !== o.slideBy && (o.slideBy = Math.min(o.slideBy, o.items)), o.dots || "page" == o.slideBy)
        for (this._pages = [], t = i, e = 0; t < n; t++) {
            if (r <= e || 0 === e) {
                if (this._pages.push({
                        start: Math.min(s, t - i),
                        end: t - i + r - 1
                    }), Math.min(s, t - i) === s) break;
                e = 0, 0
            }
            e += this._core.mergers(this._core.relative(t))
        }
}, n.prototype.draw = function() {
    var t, e = this._core.settings,
        i = this._core.items().length <= e.items,
        n = this._core.relative(this._core.current()),
        s = e.loop || e.rewind;
    this._controls.$relative.toggleClass("disabled", !e.nav || i), e.nav && (this._controls.$previous.toggleClass("disabled", !s && n <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && n >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !e.dots || i), e.dots && (t = this._pages.length - this._controls.$absolute.children().length, e.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : 0 < t ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : t < 0 && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(o.inArray(this.current(), this._pages)).addClass("active"))
}, n.prototype.onTrigger = function(t) {
    var e = this._core.settings;
    t.page = {
        index: o.inArray(this.current(), this._pages),
        count: this._pages.length,
        size: e && (e.center || e.autoWidth || e.dotsData ? 1 : e.dotsEach || e.items)
    }
}, n.prototype.current = function() {
    var i = this._core.relative(this._core.current());
    return o.grep(this._pages, o.proxy(function(t, e) {
        return t.start <= i && t.end >= i
    }, this)).pop()
}, n.prototype.getPosition = function(t) {
    var e, i, n = this._core.settings;
    return "page" == n.slideBy ? (e = o.inArray(this.current(), this._pages), i = this._pages.length, t ? ++e : --e, e = this._pages[(e % i + i) % i].start) : (e = this._core.relative(this._core.current()), i = this._core.items().length, t ? e += n.slideBy : e -= n.slideBy), e
}, n.prototype.next = function(t) {
    o.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
}, n.prototype.prev = function(t) {
    o.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
}, n.prototype.to = function(t, e, i) {
    var n;
    !i && this._pages.length ? (n = this._pages.length, o.proxy(this._overrides.to, this._core)(this._pages[(t % n + n) % n].start, e)) : o.proxy(this._overrides.to, this._core)(t, e)
}, o.fn.owlCarousel.Constructor.Plugins.Navigation = n
}(window.Zepto || window.jQuery, window, document),
function(n, s, t, e) {
"use strict";
var i = function(t) {
    this._core = t, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
        "initialized.owl.carousel": n.proxy(function(t) {
            t.namespace && "URLHash" === this._core.settings.startPosition && n(s).trigger("hashchange.owl.navigation")
        }, this),
        "prepared.owl.carousel": n.proxy(function(t) {
            if (t.namespace) {
                var e = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                if (!e) return;
                this._hashes[e] = t.content
            }
        }, this),
        "changed.owl.carousel": n.proxy(function(t) {
            if (t.namespace && "position" === t.property.name) {
                var i = this._core.items(this._core.relative(this._core.current())),
                    e = n.map(this._hashes, function(t, e) {
                        return t === i ? e : null
                    }).join();
                if (!e || s.location.hash.slice(1) === e) return;
                s.location.hash = e
            }
        }, this)
    }, this._core.options = n.extend({}, i.Defaults, this._core.options), this.$element.on(this._handlers), n(s).on("hashchange.owl.navigation", n.proxy(function(t) {
        var e = s.location.hash.substring(1),
            i = this._core.$stage.children(),
            n = this._hashes[e] && i.index(this._hashes[e]);
        void 0 !== n && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
    }, this))
};
i.Defaults = {
    URLhashListener: !1
}, i.prototype.destroy = function() {
    var t, e;
    for (t in n(s).off("hashchange.owl.navigation"), this._handlers) this._core.$element.off(t, this._handlers[t]);
    for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
}, n.fn.owlCarousel.Constructor.Plugins.Hash = i
}(window.Zepto || window.jQuery, window, document),
function(s, t, e, o) {
function i(t, i) {
    var n = !1,
        e = t.charAt(0).toUpperCase() + t.slice(1);
    return s.each((t + " " + a.join(e + " ") + e).split(" "), function(t, e) {
        if (r[e] !== o) return n = !i || e, !1
    }), n
}

function n(t) {
    return i(t, !0)
}
var r = s("<support>").get(0).style,
    a = "Webkit Moz O ms".split(" "),
    l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    },
    c = function() {
        return !!i("transform")
    },
    h = function() {
        return !!i("perspective")
    },
    u = function() {
        return !!i("animation")
    };
(function() {
    return !!i("transition")
})() && (s.support.transition = new String(n("transition")), s.support.transition.end = l.transition.end[s.support.transition]), u() && (s.support.animation = new String(n("animation")), s.support.animation.end = l.animation.end[s.support.animation]), c() && (s.support.transform = new String(n("transform")), s.support.transform3d = h())
}(window.Zepto || window.jQuery, window, document),
function(t) {
"function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof module && module.exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function(h) {
h.extend(h.fn, {
    validate: function(t) {
        if (this.length) {
            var n = h.data(this[0], "validator");
            return n || (this.attr("novalidate", "novalidate"), n = new h.validator(t, this[0]), h.data(this[0], "validator", n), n.settings.onsubmit && (this.on("click.validate", ":submit", function(t) {
                n.submitButton = t.currentTarget, h(this).hasClass("cancel") && (n.cancelSubmit = !0), void 0 !== h(this).attr("formnovalidate") && (n.cancelSubmit = !0)
            }), this.on("submit.validate", function(i) {
                function t() {
                    var t, e;
                    return n.submitButton && (n.settings.submitHandler || n.formSubmitted) && (t = h("<input type='hidden'/>").attr("name", n.submitButton.name).val(h(n.submitButton).val()).appendTo(n.currentForm)), !n.settings.submitHandler || (e = n.settings.submitHandler.call(n, n.currentForm, i), t && t.remove(), void 0 !== e && e)
                }
                return n.settings.debug && i.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, t()) : n.form() ? n.pendingRequest ? !(n.formSubmitted = !0) : t() : (n.focusInvalid(), !1)
            })), n)
        }
        t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
    },
    valid: function() {
        var t, e, i;
        return h(this[0]).is("form") ? t = this.validate().form() : (i = [], t = !0, e = h(this[0].form).validate(), this.each(function() {
            (t = e.element(this) && t) || (i = i.concat(e.errorList))
        }), e.errorList = i), t
    },
    rules: function(t, e) {
        var i, n, s, o, r, a, l = this[0];
        if (null != l && (!l.form && l.hasAttribute("contenteditable") && (l.form = this.closest("form")[0], l.name = this.attr("name")), null != l.form)) {
            if (t) switch (n = (i = h.data(l.form, "validator").settings).rules, s = h.validator.staticRules(l), t) {
                case "add":
                    h.extend(s, h.validator.normalizeRule(e)), delete s.messages, n[l.name] = s, e.messages && (i.messages[l.name] = h.extend(i.messages[l.name], e.messages));
                    break;
                case "remove":
                    return e ? (a = {}, h.each(e.split(/\s/), function(t, e) {
                        a[e] = s[e], delete s[e]
                    }), a) : (delete n[l.name], s)
            }
            return (o = h.validator.normalizeRules(h.extend({}, h.validator.classRules(l), h.validator.attributeRules(l), h.validator.dataRules(l), h.validator.staticRules(l)), l)).required && (r = o.required, delete o.required, o = h.extend({
                required: r
            }, o)), o.remote && (r = o.remote, delete o.remote, o = h.extend(o, {
                remote: r
            })), o
        }
    }
}), h.extend(h.expr.pseudos || h.expr[":"], {
    blank: function(t) {
        return !h.trim("" + h(t).val())
    },
    filled: function(t) {
        var e = h(t).val();
        return null !== e && !!h.trim("" + e)
    },
    unchecked: function(t) {
        return !h(t).prop("checked")
    }
}), h.validator = function(t, e) {
    this.settings = h.extend(!0, {}, h.validator.defaults, t), this.currentForm = e, this.init()
}, h.validator.format = function(i, t) {
    return 1 === arguments.length ? function() {
        var t = h.makeArray(arguments);
        return t.unshift(i), h.validator.format.apply(this, t)
    } : (void 0 === t || (2 < arguments.length && t.constructor !== Array && (t = h.makeArray(arguments).slice(1)), t.constructor !== Array && (t = [t]), h.each(t, function(t, e) {
        i = i.replace(new RegExp("\\{" + t + "\\}", "g"), function() {
            return e
        })
    })), i)
}, h.extend(h.validator, {
    defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        pendingClass: "pending",
        validClass: "valid",
        errorElement: "label",
        focusCleanup: !1,
        focusInvalid: !0,
        errorContainer: h([]),
        errorLabelContainer: h([]),
        onsubmit: !0,
        ignore: ":hidden",
        ignoreTitle: !1,
        onfocusin: function(t) {
            this.lastActive = t, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(t)))
        },
        onfocusout: function(t) {
            this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
        },
        onkeyup: function(t, e) {
            9 === e.which && "" === this.elementValue(t) || -1 !== h.inArray(e.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
        },
        onclick: function(t) {
            t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
        },
        highlight: function(t, e, i) {
            "radio" === t.type ? this.findByName(t.name).addClass(e).removeClass(i) : h(t).addClass(e).removeClass(i)
        },
        unhighlight: function(t, e, i) {
            "radio" === t.type ? this.findByName(t.name).removeClass(e).addClass(i) : h(t).removeClass(e).addClass(i)
        }
    },
    setDefaults: function(t) {
        h.extend(h.validator.defaults, t)
    },
    messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        equalTo: "Please enter the same value again.",
        maxlength: h.validator.format("Please enter no more than {0} characters."),
        minlength: h.validator.format("Please enter at least {0} characters."),
        rangelength: h.validator.format("Please enter a value between {0} and {1} characters long."),
        range: h.validator.format("Please enter a value between {0} and {1}."),
        max: h.validator.format("Please enter a value less than or equal to {0}."),
        min: h.validator.format("Please enter a value greater than or equal to {0}."),
        step: h.validator.format("Please enter a multiple of {0}.")
    },
    autoCreateRanges: !1,
    prototype: {
        init: function() {
            this.labelContainer = h(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || h(this.currentForm), this.containers = h(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
            var i, n = this.groups = {};

            function t(t) {
                !this.form && this.hasAttribute("contenteditable") && (this.form = h(this).closest("form")[0], this.name = h(this).attr("name"));
                var e = h.data(this.form, "validator"),
                    i = "on" + t.type.replace(/^validate/, ""),
                    n = e.settings;
                n[i] && !h(this).is(n.ignore) && n[i].call(e, this, t)
            }
            h.each(this.settings.groups, function(i, t) {
                "string" == typeof t && (t = t.split(/\s/)), h.each(t, function(t, e) {
                    n[e] = i
                })
            }), i = this.settings.rules, h.each(i, function(t, e) {
                i[t] = h.validator.normalizeRule(e)
            }), h(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && h(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
        },
        form: function() {
            return this.checkForm(), h.extend(this.submitted, this.errorMap), this.invalid = h.extend({}, this.errorMap), this.valid() || h(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
        },
        checkForm: function() {
            this.prepareForm();
            for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++) this.check(e[t]);
            return this.valid()
        },
        element: function(t) {
            var e, i, n = this.clean(t),
                s = this.validationTargetFor(n),
                o = this,
                r = !0;
            return void 0 === s ? delete this.invalid[n.name] : (this.prepareElement(s), this.currentElements = h(s), (i = this.groups[s.name]) && h.each(this.groups, function(t, e) {
                e === i && t !== s.name && (n = o.validationTargetFor(o.clean(o.findByName(t)))) && n.name in o.invalid && (o.currentElements.push(n), r = o.check(n) && r)
            }), e = !1 !== this.check(s), r = r && e, this.invalid[s.name] = !e, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), h(t).attr("aria-invalid", !e)), r
        },
        showErrors: function(e) {
            if (e) {
                var i = this;
                h.extend(this.errorMap, e), this.errorList = h.map(this.errorMap, function(t, e) {
                    return {
                        message: t,
                        element: i.findByName(e)[0]
                    }
                }), this.successList = h.grep(this.successList, function(t) {
                    return !(t.name in e)
                })
            }
            this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
        },
        resetForm: function() {
            h.fn.resetForm && h(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
            var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
            this.resetElements(t)
        },
        resetElements: function(t) {
            var e;
            if (this.settings.unhighlight)
                for (e = 0; t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, ""), this.findByName(t[e].name).removeClass(this.settings.validClass);
            else t.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
        },
        numberOfInvalids: function() {
            return this.objectLength(this.invalid)
        },
        objectLength: function(t) {
            var e, i = 0;
            for (e in t) void 0 !== t[e] && null !== t[e] && !1 !== t[e] && i++;
            return i
        },
        hideErrors: function() {
            this.hideThese(this.toHide)
        },
        hideThese: function(t) {
            t.not(this.containers).text(""), this.addWrapper(t).hide()
        },
        valid: function() {
            return 0 === this.size()
        },
        size: function() {
            return this.errorList.length
        },
        focusInvalid: function() {
            if (this.settings.focusInvalid) try {
                h(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
            } catch (t) {}
        },
        findLastActive: function() {
            var e = this.lastActive;
            return e && 1 === h.grep(this.errorList, function(t) {
                return t.element.name === e.name
            }).length && e
        },
        elements: function() {
            var e = this,
                i = {};
            return h(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                var t = this.name || h(this).attr("name");
                return !t && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = h(this).closest("form")[0], this.name = t), !(t in i || !e.objectLength(h(this).rules())) && (i[t] = !0)
            })
        },
        clean: function(t) {
            return h(t)[0]
        },
        errors: function() {
            var t = this.settings.errorClass.split(" ").join(".");
            return h(this.settings.errorElement + "." + t, this.errorContext)
        },
        resetInternals: function() {
            this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = h([]), this.toHide = h([])
        },
        reset: function() {
            this.resetInternals(), this.currentElements = h([])
        },
        prepareForm: function() {
            this.reset(), this.toHide = this.errors().add(this.containers)
        },
        prepareElement: function(t) {
            this.reset(), this.toHide = this.errorsFor(t)
        },
        elementValue: function(t) {
            var e, i, n = h(t),
                s = t.type;
            return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && void 0 !== t.validity ? t.validity.badInput ? "NaN" : n.val() : (e = t.hasAttribute("contenteditable") ? n.text() : n.val(), "file" === s ? "C:\\fakepath\\" === e.substr(0, 12) ? e.substr(12) : 0 <= (i = e.lastIndexOf("/")) ? e.substr(i + 1) : 0 <= (i = e.lastIndexOf("\\")) ? e.substr(i + 1) : e : "string" == typeof e ? e.replace(/\r/g, "") : e)
        },
        check: function(e) {
            e = this.validationTargetFor(this.clean(e));
            var t, i, n, s, o = h(e).rules(),
                r = h.map(o, function(t, e) {
                    return e
                }).length,
                a = !1,
                l = this.elementValue(e);
            if ("function" == typeof o.normalizer ? s = o.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s) {
                if ("string" != typeof(l = s.call(e, l))) throw new TypeError("The normalizer should return a string value.");
                delete o.normalizer
            }
            for (i in o) {
                n = {
                    method: i,
                    parameters: o[i]
                };
                try {
                    if ("dependency-mismatch" === (t = h.validator.methods[i].call(this, l, e, n.parameters)) && 1 === r) {
                        a = !0;
                        continue
                    }
                    if (a = !1, "pending" === t) return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                    if (!t) return this.formatAndAdd(e, n), !1
                } catch (t) {
                    throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method.", t), t instanceof TypeError && (t.message += ".  Exception occurred when checking element " + e.id + ", check the '" + n.method + "' method."), t
                }
            }
            if (!a) return this.objectLength(o) && this.successList.push(e), !0
        },
        customDataMessage: function(t, e) {
            return h(t).data("msg" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()) || h(t).data("msg")
        },
        customMessage: function(t, e) {
            var i = this.settings.messages[t];
            return i && (i.constructor === String ? i : i[e])
        },
        findDefined: function() {
            for (var t = 0; t < arguments.length; t++)
                if (void 0 !== arguments[t]) return arguments[t]
        },
        defaultMessage: function(t, e) {
            "string" == typeof e && (e = {
                method: e
            });
            var i = this.findDefined(this.customMessage(t.name, e.method), this.customDataMessage(t, e.method), !this.settings.ignoreTitle && t.title || void 0, h.validator.messages[e.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                n = /\$?\{(\d+)\}/g;
            return "function" == typeof i ? i = i.call(this, e.parameters, t) : n.test(i) && (i = h.validator.format(i.replace(n, "{$1}"), e.parameters)), i
        },
        formatAndAdd: function(t, e) {
            var i = this.defaultMessage(t, e);
            this.errorList.push({
                message: i,
                element: t,
                method: e.method
            }), this.errorMap[t.name] = i, this.submitted[t.name] = i
        },
        addWrapper: function(t) {
            return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
        },
        defaultShowErrors: function() {
            var t, e, i;
            for (t = 0; this.errorList[t]; t++) i = this.errorList[t], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
            if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);
            if (this.settings.unhighlight)
                for (t = 0, e = this.validElements(); e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
            this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
        },
        validElements: function() {
            return this.currentElements.not(this.invalidElements())
        },
        invalidElements: function() {
            return h(this.errorList).map(function() {
                return this.element
            })
        },
        showLabel: function(t, e) {
            var i, n, s, o, r = this.errorsFor(t),
                a = this.idOrName(t),
                l = h(t).attr("aria-describedby");
            r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(e)) : (i = r = h("<" + this.settings.errorElement + ">").attr("id", a + "-error").addClass(this.settings.errorClass).html(e || ""), this.settings.wrapper && (i = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(i) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, i, h(t)) : i.insertAfter(t), r.is("label") ? r.attr("for", a) : 0 === r.parents("label[for='" + this.escapeCssMeta(a) + "']").length && (s = r.attr("id"), l ? l.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (l += " " + s) : l = s, h(t).attr("aria-describedby", l), (n = this.groups[t.name]) && (o = this, h.each(o.groups, function(t, e) {
                e === n && h("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", r.attr("id"))
            })))), !e && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r, t)), this.toShow = this.toShow.add(r)
        },
        errorsFor: function(t) {
            var e = this.escapeCssMeta(this.idOrName(t)),
                i = h(t).attr("aria-describedby"),
                n = "label[for='" + e + "'], label[for='" + e + "'] *";
            return i && (n = n + ", #" + this.escapeCssMeta(i).replace(/\s+/g, ", #")), this.errors().filter(n)
        },
        escapeCssMeta: function(t) {
            return t.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
        },
        idOrName: function(t) {
            return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
        },
        validationTargetFor: function(t) {
            return this.checkable(t) && (t = this.findByName(t.name)), h(t).not(this.settings.ignore)[0]
        },
        checkable: function(t) {
            return /radio|checkbox/i.test(t.type)
        },
        findByName: function(t) {
            return h(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
        },
        getLength: function(t, e) {
            switch (e.nodeName.toLowerCase()) {
                case "select":
                    return h("option:selected", e).length;
                case "input":
                    if (this.checkable(e)) return this.findByName(e.name).filter(":checked").length
            }
            return t.length
        },
        depend: function(t, e) {
            return !this.dependTypes[typeof t] || this.dependTypes[typeof t](t, e)
        },
        dependTypes: {
            boolean: function(t) {
                return t
            },
            string: function(t, e) {
                return !!h(t, e.form).length
            },
            function: function(t, e) {
                return t(e)
            }
        },
        optional: function(t) {
            var e = this.elementValue(t);
            return !h.validator.methods.required.call(this, e, t) && "dependency-mismatch"
        },
        startRequest: function(t) {
            this.pending[t.name] || (this.pendingRequest++, h(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
        },
        stopRequest: function(t, e) {
            this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], h(t).removeClass(this.settings.pendingClass), e && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (h(this.currentForm).submit(), this.submitButton && h("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !e && 0 === this.pendingRequest && this.formSubmitted && (h(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
        },
        previousValue: function(t, e) {
            return e = "string" == typeof e && e || "remote", h.data(t, "previousValue") || h.data(t, "previousValue", {
                old: null,
                valid: !0,
                message: this.defaultMessage(t, {
                    method: e
                })
            })
        },
        destroy: function() {
            this.resetForm(), h(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
        }
    },
    classRuleSettings: {
        required: {
            required: !0
        },
        email: {
            email: !0
        },
        url: {
            url: !0
        },
        date: {
            date: !0
        },
        dateISO: {
            dateISO: !0
        },
        number: {
            number: !0
        },
        digits: {
            digits: !0
        },
        creditcard: {
            creditcard: !0
        }
    },
    addClassRules: function(t, e) {
        t.constructor === String ? this.classRuleSettings[t] = e : h.extend(this.classRuleSettings, t)
    },
    classRules: function(t) {
        var e = {},
            i = h(t).attr("class");
        return i && h.each(i.split(" "), function() {
            this in h.validator.classRuleSettings && h.extend(e, h.validator.classRuleSettings[this])
        }), e
    },
    normalizeAttributeRule: function(t, e, i, n) {
        /min|max|step/.test(i) && (null === e || /number|range|text/.test(e)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? t[i] = n : e === i && "range" !== e && (t[i] = !0)
    },
    attributeRules: function(t) {
        var e, i, n = {},
            s = h(t),
            o = t.getAttribute("type");
        for (e in h.validator.methods) "required" === e ? ("" === (i = t.getAttribute(e)) && (i = !0), i = !!i) : i = s.attr(e), this.normalizeAttributeRule(n, o, e, i);
        return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n
    },
    dataRules: function(t) {
        var e, i, n = {},
            s = h(t),
            o = t.getAttribute("type");
        for (e in h.validator.methods) i = s.data("rule" + e.charAt(0).toUpperCase() + e.substring(1).toLowerCase()), this.normalizeAttributeRule(n, o, e, i);
        return n
    },
    staticRules: function(t) {
        var e = {},
            i = h.data(t.form, "validator");
        return i.settings.rules && (e = h.validator.normalizeRule(i.settings.rules[t.name]) || {}), e
    },
    normalizeRules: function(n, s) {
        return h.each(n, function(t, e) {
            if (!1 !== e) {
                if (e.param || e.depends) {
                    var i = !0;
                    switch (typeof e.depends) {
                        case "string":
                            i = !!h(e.depends, s.form).length;
                            break;
                        case "function":
                            i = e.depends.call(s, s)
                    }
                    i ? n[t] = void 0 === e.param || e.param : (h.data(s.form, "validator").resetElements(h(s)), delete n[t])
                }
            } else delete n[t]
        }), h.each(n, function(t, e) {
            n[t] = h.isFunction(e) && "normalizer" !== t ? e(s) : e
        }), h.each(["minlength", "maxlength"], function() {
            n[this] && (n[this] = Number(n[this]))
        }), h.each(["rangelength", "range"], function() {
            var t;
            n[this] && (h.isArray(n[this]) ? n[this] = [Number(n[this][0]), Number(n[this][1])] : "string" == typeof n[this] && (t = n[this].replace(/[\[\]]/g, "").split(/[\s,]+/), n[this] = [Number(t[0]), Number(t[1])]))
        }), h.validator.autoCreateRanges && (null != n.min && null != n.max && (n.range = [n.min, n.max], delete n.min, delete n.max), null != n.minlength && null != n.maxlength && (n.rangelength = [n.minlength, n.maxlength], delete n.minlength, delete n.maxlength)), n
    },
    normalizeRule: function(t) {
        if ("string" == typeof t) {
            var e = {};
            h.each(t.split(/\s/), function() {
                e[this] = !0
            }), t = e
        }
        return t
    },
    addMethod: function(t, e, i) {
        h.validator.methods[t] = e, h.validator.messages[t] = void 0 !== i ? i : h.validator.messages[t], e.length < 3 && h.validator.addClassRules(t, h.validator.normalizeRule(t))
    },
    methods: {
        required: function(t, e, i) {
            if (!this.depend(i, e)) return "dependency-mismatch";
            if ("select" === e.nodeName.toLowerCase()) {
                var n = h(e).val();
                return n && 0 < n.length
            }
            return this.checkable(e) ? 0 < this.getLength(t, e) : 0 < t.length
        },
        email: function(t, e) {
            return this.optional(e) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)
        },
        url: function(t, e) {
            return this.optional(e) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(t)
        },
        date: function(t, e) {
            return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
        },
        dateISO: function(t, e) {
            return this.optional(e) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)
        },
        number: function(t, e) {
            return this.optional(e) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
        },
        digits: function(t, e) {
            return this.optional(e) || /^\d+$/.test(t)
        },
        minlength: function(t, e, i) {
            var n = h.isArray(t) ? t.length : this.getLength(t, e);
            return this.optional(e) || i <= n
        },
        maxlength: function(t, e, i) {
            var n = h.isArray(t) ? t.length : this.getLength(t, e);
            return this.optional(e) || n <= i
        },
        rangelength: function(t, e, i) {
            var n = h.isArray(t) ? t.length : this.getLength(t, e);
            return this.optional(e) || n >= i[0] && n <= i[1]
        },
        min: function(t, e, i) {
            return this.optional(e) || i <= t
        },
        max: function(t, e, i) {
            return this.optional(e) || t <= i
        },
        range: function(t, e, i) {
            return this.optional(e) || t >= i[0] && t <= i[1]
        },
        step: function(t, e, i) {
            var n, s = h(e).attr("type"),
                o = "Step attribute on input type " + s + " is not supported.",
                r = new RegExp("\\b" + s + "\\b"),
                a = function(t) {
                    var e = ("" + t).match(/(?:\.(\d+))?$/);
                    return e && e[1] ? e[1].length : 0
                },
                l = function(t) {
                    return Math.round(t * Math.pow(10, n))
                },
                c = !0;
            if (s && !r.test(["text", "number", "range"].join())) throw new Error(o);
            return n = a(i), (a(t) > n || l(t) % l(i) != 0) && (c = !1), this.optional(e) || c
        },
        equalTo: function(t, e, i) {
            var n = h(i);
            return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                h(e).valid()
            }), t === n.val()
        },
        remote: function(o, r, t, a) {
            if (this.optional(r)) return "dependency-mismatch";
            a = "string" == typeof a && a || "remote";
            var l, e, i, c = this.previousValue(r, a);
            return this.settings.messages[r.name] || (this.settings.messages[r.name] = {}), c.originalMessage = c.originalMessage || this.settings.messages[r.name][a], this.settings.messages[r.name][a] = c.message, t = "string" == typeof t && {
                url: t
            } || t, i = h.param(h.extend({
                data: o
            }, t.data)), c.old === i ? c.valid : (c.old = i, (l = this).startRequest(r), (e = {})[r.name] = o, h.ajax(h.extend(!0, {
                mode: "abort",
                port: "validate" + r.name,
                dataType: "json",
                data: e,
                context: l.currentForm,
                success: function(t) {
                    var e, i, n, s = !0 === t || "true" === t;
                    l.settings.messages[r.name][a] = c.originalMessage, s ? (n = l.formSubmitted, l.resetInternals(), l.toHide = l.errorsFor(r), l.formSubmitted = n, l.successList.push(r), l.invalid[r.name] = !1, l.showErrors()) : (e = {}, i = t || l.defaultMessage(r, {
                        method: a,
                        parameters: o
                    }), e[r.name] = c.message = i, l.invalid[r.name] = !0, l.showErrors(e)), c.valid = s, l.stopRequest(r, s)
                }
            }, t)), "pending")
        }
    }
});
var n, s = {};
return h.ajaxPrefilter ? h.ajaxPrefilter(function(t, e, i) {
    var n = t.port;
    "abort" === t.mode && (s[n] && s[n].abort(), s[n] = i)
}) : (n = h.ajax, h.ajax = function(t) {
    var e = ("mode" in t ? t : h.ajaxSettings).mode,
        i = ("port" in t ? t : h.ajaxSettings).port;
    return "abort" === e ? (s[i] && s[i].abort(), s[i] = n.apply(this, arguments), s[i]) : n.apply(this, arguments)
}), h
}), $(document).ready(function() {
    "use strict";

    function s() {
        var s = $(document).scrollTop() + 205;
        $(".primary-navbar .nav > li > a").each(function() {
            var t = $(this),
                e = $(t.attr("href"));
            if (null != e.position())
                if (e.position().top <= s && e.position().top + e.height() > s) {
                    $(".nav li a").removeClass("active"), t.addClass("active");
                    var i = $(".active").offset().left - $(".nav").offset().left,
                        n = $(this).outerWidth();
                    $(".nav .nav-active").css({
                        left: i,
                        width: n
                    })
                } else t.removeClass("active")
        })
    }
    $(function() {
        jQuery("img.svg").each(function() {
            var i = jQuery(this),
                n = i.attr("id"),
                s = i.attr("class"),
                t = i.attr("src");
            jQuery.get(t, function(t) {
                var e = jQuery(t).find("svg");
                void 0 !== n && (e = e.attr("id", n)), void 0 !== s && (e = e.attr("class", s + " replaced-svg")), !(e = e.removeAttr("xmlns:a")).attr("viewBox") && e.attr("height") && e.attr("width") && e.attr("viewBox", "0 0 " + e.attr("height") + " " + e.attr("width")), i.replaceWith(e)
            }, "xml")
        })
    }), $(".pmd-features-list li").on("mouseenter", function() {
        if (!$(this).hasClass("active")) {
            $(".display-mobile div").removeClass("display-img");
            var t = $(this).attr("data-img");
            $(".pmd-features-list li.active").removeClass("active"), $(this).addClass("active"), $("#content1").find("img").attr("src", "images/" + t)
        }
    }), $("#testimonials-slider").owlCarousel({
        loop: !0,
        dots: !0,
        autoHeight: !0,
        autoHeightClass: "owl-height",
        nav: !1,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: !0,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 1,
                nav: !1
            },
            1e3: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    }), $("#members").owlCarousel({
        loop: !0,
        dots: !1,
        nav: !0,
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: !0,
        responsiveClass: !0,
        responsive: {
            0: {
                items: 1,
                nav: !1,
                dots: !0
            },
            768: {
                items: 3,
                nav: !1,
                dots: !0
            },
            1e3: {
                items: 3,
                nav: !1,
                dots: !0
            },
            1025: {
                items: 4,
                nav: !0,
                dots: !1
            }
        }
    }), $(".search-toggle").on("click", function() {
        767 < $(window).width() && ($(this).hasClass("active") ? ($(this).removeClass("active"), $(".search-form").removeClass("open"), setTimeout(function() {
            $(".navbar-nav").removeClass("hide")
        }, 300)) : ($(this).addClass("active"), $(".search-form").addClass("open"), $(".navbar-nav").addClass("hide")))
    }), $(window).on("scroll load resize", s), $('.navbar-nav li a[href^="#"]').on("click", function(t) {
        t.preventDefault(), $(window).width() < 768 && $(".pmd-sidebar-overlay").trigger("click"), $(document).off("scroll");
        var e = this.hash,
            i = $(e),
            n = $(".navbar").height();
        $("body").hasClass("propeller-topbar-body") ? $("html, body").stop().animate({
            scrollTop: i.offset().top - n - 48
        }, 500, function() {
            $(document).on("scroll", s)
        }) : $("html, body").stop().animate({
            scrollTop: i.offset().top - n
        }, 500, function() {
            $(document).on("scroll", s)
        })
    }), $(window).on("load", function() {
        var t = location.hash;
        "" !== t && function(t) {
            $(window).scrollTop(0);
            var e = $(".navbar").height();
            $("body, html").animate({
                scrollTop: $(t).offset().top - e
            }, 600)
        }(t)
    }), $(window).on("load", function() {
        $("#status").fadeOut(), $("#preloader").delay(350).fadeOut("slow"), $("body").delay(350).css({
            overflow: "visible"
        })
    }),

    $("#form-contact").validate({
        rules: {
            name: "required",
            email: {
                required: !0,
                email: !0
            },
            ContactNumber: {
                required: !0,
                minlength: 9,
                number: !0
            },
            UserMessage: {
                required: !0,
                minlength: 50
            }
        },
        messages: {
            name: "Por favor ingresa tu nombre",
            email: "Ingresa un correo valido",
            ContactNumber: {
                required: "Por favor ingresa un numero telefonico valida",
                minlength: "Tu numero de telefono debe de contener almenos 9 numeros"
            },
            UserMessage: {
                required: "Por favor escribe tu mensaje",
                minlength: "Tu mensaje debe de contener por lo menos 50 caracteres"
            }
        },
        highlight: function(t) {
            $(t).closest(".form-group").addClass("has-error")
        },
        errorClass: "error help-block",
        errorElement: "p",
        errorPlacement: function(t, e) {
            t.insertAfter(e.next(".pmd-textfield-focused"))
        },
        submitHandler: function() {
            $(".alert").slideDown(), $("form").trigger("reset"), $("#form-contact").find(".form-group").removeClass("has-error pmd-textfield-floating-label-completed");
            setTimeout(function(){
                $(".alert").slideUp();
            },3000);
        }
    }), $("#form-reset").click(function() {
        var t = $(this).closest("form");
        t.validate().resetForm(), t.find(".form-group").removeClass("has-error pmd-textfield-floating-label-completed"), $("form").trigger("reset")
    })
}),
function(e) {
    var i = "undefined" == typeof window ? this : window;
    "object" == typeof exports ? module.exports = e(i.jQuery, i) : "function" == typeof define && define.amd ? define(["jquery"], function(t) {
        return e(t, i)
    }) : i.jQuery && !i.jQuery.fn.colorpicker && e(i.jQuery, i)
}(function(t, s) {
    "use strict";
    var c = t,
        o = function(t, e, i, n) {
            this.fallbackValue = i ? i && void 0 !== i.h ? i : this.value = {
                h: 0,
                s: 0,
                b: 0,
                a: 1
            } : null, this.fallbackFormat = n || "rgba", this.value = this.fallbackValue, this.origFormat = null, this.predefinedColors = e || {}, this.colors = c.extend({}, o.webColors, this.predefinedColors), t && (void 0 !== t.h ? this.value = t : this.setColor(String(t))), this.value || (this.value = {
                h: 0,
                s: 0,
                b: 0,
                a: 1
            })
        };
    o.webColors = {
        aliceblue: "#f0f8ff",
        antiquewhite: "#faebd7",
        aqua: "#00ffff",
        aquamarine: "#7fffd4",
        azure: "#f0ffff",
        beige: "#f5f5dc",
        bisque: "#ffe4c4",
        black: "#000000",
        blanchedalmond: "#ffebcd",
        blue: "#0000ff",
        blueviolet: "#8a2be2",
        brown: "#a52a2a",
        burlywood: "#deb887",
        cadetblue: "#5f9ea0",
        chartreuse: "#7fff00",
        chocolate: "#d2691e",
        coral: "#ff7f50",
        cornflowerblue: "#6495ed",
        cornsilk: "#fff8dc",
        crimson: "#dc143c",
        cyan: "#00ffff",
        darkblue: "#00008b",
        darkcyan: "#008b8b",
        darkgoldenrod: "#b8860b",
        darkgray: "#a9a9a9",
        darkgreen: "#006400",
        darkkhaki: "#bdb76b",
        darkmagenta: "#8b008b",
        darkolivegreen: "#556b2f",
        darkorange: "#ff8c00",
        darkorchid: "#9932cc",
        darkred: "#8b0000",
        darksalmon: "#e9967a",
        darkseagreen: "#8fbc8f",
        darkslateblue: "#483d8b",
        darkslategray: "#2f4f4f",
        darkturquoise: "#00ced1",
        darkviolet: "#9400d3",
        deeppink: "#ff1493",
        deepskyblue: "#00bfff",
        dimgray: "#696969",
        dodgerblue: "#1e90ff",
        firebrick: "#b22222",
        floralwhite: "#fffaf0",
        forestgreen: "#228b22",
        fuchsia: "#ff00ff",
        gainsboro: "#dcdcdc",
        ghostwhite: "#f8f8ff",
        gold: "#ffd700",
        goldenrod: "#daa520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#adff2f",
        honeydew: "#f0fff0",
        hotpink: "#ff69b4",
        indianred: "#cd5c5c",
        indigo: "#4b0082",
        ivory: "#fffff0",
        khaki: "#f0e68c",
        lavender: "#e6e6fa",
        lavenderblush: "#fff0f5",
        lawngreen: "#7cfc00",
        lemonchiffon: "#fffacd",
        lightblue: "#add8e6",
        lightcoral: "#f08080",
        lightcyan: "#e0ffff",
        lightgoldenrodyellow: "#fafad2",
        lightgrey: "#d3d3d3",
        lightgreen: "#90ee90",
        lightpink: "#ffb6c1",
        lightsalmon: "#ffa07a",
        lightseagreen: "#20b2aa",
        lightskyblue: "#87cefa",
        lightslategray: "#778899",
        lightsteelblue: "#b0c4de",
        lightyellow: "#ffffe0",
        lime: "#00ff00",
        limegreen: "#32cd32",
        linen: "#faf0e6",
        magenta: "#ff00ff",
        maroon: "#800000",
        mediumaquamarine: "#66cdaa",
        mediumblue: "#0000cd",
        mediumorchid: "#ba55d3",
        mediumpurple: "#9370d8",
        mediumseagreen: "#3cb371",
        mediumslateblue: "#7b68ee",
        mediumspringgreen: "#00fa9a",
        mediumturquoise: "#48d1cc",
        mediumvioletred: "#c71585",
        midnightblue: "#191970",
        mintcream: "#f5fffa",
        mistyrose: "#ffe4e1",
        moccasin: "#ffe4b5",
        navajowhite: "#ffdead",
        navy: "#000080",
        oldlace: "#fdf5e6",
        olive: "#808000",
        olivedrab: "#6b8e23",
        orange: "#ffa500",
        orangered: "#ff4500",
        orchid: "#da70d6",
        palegoldenrod: "#eee8aa",
        palegreen: "#98fb98",
        paleturquoise: "#afeeee",
        palevioletred: "#d87093",
        papayawhip: "#ffefd5",
        peachpuff: "#ffdab9",
        peru: "#cd853f",
        pink: "#ffc0cb",
        plum: "#dda0dd",
        powderblue: "#b0e0e6",
        purple: "#800080",
        red: "#ff0000",
        rosybrown: "#bc8f8f",
        royalblue: "#4169e1",
        saddlebrown: "#8b4513",
        salmon: "#fa8072",
        sandybrown: "#f4a460",
        seagreen: "#2e8b57",
        seashell: "#fff5ee",
        sienna: "#a0522d",
        silver: "#c0c0c0",
        skyblue: "#87ceeb",
        slateblue: "#6a5acd",
        slategray: "#708090",
        snow: "#fffafa",
        springgreen: "#00ff7f",
        steelblue: "#4682b4",
        tan: "#d2b48c",
        teal: "#008080",
        thistle: "#d8bfd8",
        tomato: "#ff6347",
        turquoise: "#40e0d0",
        violet: "#ee82ee",
        wheat: "#f5deb3",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00",
        yellowgreen: "#9acd32",
        transparent: "transparent"
    };
    var r = {
            horizontal: !(o.prototype = {
                constructor: o,
                colors: {},
                predefinedColors: {},
                getValue: function() {
                    return this.value
                },
                setValue: function(t) {
                    this.value = t
                },
                _sanitizeNumber: function(t) {
                    return "number" == typeof t ? t : isNaN(t) || null === t || "" === t || void 0 === t ? 1 : "" === t ? 0 : void 0 !== t.toLowerCase ? (t.match(/^\./) && (t = "0" + t), Math.ceil(100 * parseFloat(t)) / 100) : 1
                },
                isTransparent: function(t) {
                    return !(!t || !("string" == typeof t || t instanceof String)) && ("transparent" === (t = t.toLowerCase().trim()) || t.match(/#?00000000/) || t.match(/(rgba|hsla)\(0,0,0,0?\.?0\)/))
                },
                rgbaIsTransparent: function(t) {
                    return 0 === t.r && 0 === t.g && 0 === t.b && 0 === t.a
                },
                setColor: function(t) {
                    if (t = t.toLowerCase().trim()) {
                        if (this.isTransparent(t)) return this.value = {
                            h: 0,
                            s: 0,
                            b: 0,
                            a: 0
                        }, !0;
                        var e = this.parse(t);
                        e ? (this.value = this.value = {
                            h: e.h,
                            s: e.s,
                            b: e.b,
                            a: e.a
                        }, this.origFormat || (this.origFormat = e.format)) : this.fallbackValue && (this.value = this.fallbackValue)
                    }
                    return !1
                },
                setHue: function(t) {
                    this.value.h = 1 - t
                },
                setSaturation: function(t) {
                    this.value.s = t
                },
                setBrightness: function(t) {
                    this.value.b = 1 - t
                },
                setAlpha: function(t) {
                    this.value.a = Math.round(parseInt(100 * (1 - t), 10) / 100 * 100) / 100
                },
                toRGB: function(t, e, i, n) {
                    var s, o, r, a, l;
                    return 0 === arguments.length && (t = this.value.h, e = this.value.s, i = this.value.b, n = this.value.a), t = (t *= 360) % 360 / 60, s = o = r = i - (l = i * e), s += [l, a = l * (1 - Math.abs(t % 2 - 1)), 0, 0, a, l][t = ~~t], o += [a, l, l, a, 0, 0][t], r += [0, 0, a, l, l, a][t], {
                        r: Math.round(255 * s),
                        g: Math.round(255 * o),
                        b: Math.round(255 * r),
                        a: n
                    }
                },
                toHex: function(t, e, i, n) {
                    0 === arguments.length && (t = this.value.h, e = this.value.s, i = this.value.b, n = this.value.a);
                    var s = this.toRGB(t, e, i, n);
                    return this.rgbaIsTransparent(s) ? "transparent" : "#" + ((1 << 24) + (parseInt(s.r) << 16) + (parseInt(s.g) << 8) + parseInt(s.b)).toString(16).slice(1)
                },
                toHSL: function(t, e, i, n) {
                    0 === arguments.length && (t = this.value.h, e = this.value.s, i = this.value.b, n = this.value.a);
                    var s = t,
                        o = (2 - e) * i,
                        r = e * i;
                    return r /= 0 < o && o <= 1 ? o : 2 - o, o /= 2, 1 < r && (r = 1), {
                        h: isNaN(s) ? 0 : s,
                        s: isNaN(r) ? 0 : r,
                        l: isNaN(o) ? 0 : o,
                        a: isNaN(n) ? 0 : n
                    }
                },
                toAlias: function(t, e, i, n) {
                    var s, o = 0 === arguments.length ? this.toHex() : this.toHex(t, e, i, n),
                        r = "alias" === this.origFormat ? o : this.toString(this.origFormat, !1);
                    for (var a in this.colors)
                        if ((s = this.colors[a].toLowerCase().trim()) === o || s === r) return a;
                    return !1
                },
                RGBtoHSB: function(t, e, i, n) {
                    var s, o, r, a;
                    return t /= 255, e /= 255, i /= 255, s = ((s = 0 === (a = (r = Math.max(t, e, i)) - Math.min(t, e, i)) ? null : r === t ? (e - i) / a : r === e ? (i - t) / a + 2 : (t - e) / a + 4) + 360) % 6 * 60 / 360, o = 0 === a ? 0 : a / r, {
                        h: this._sanitizeNumber(s),
                        s: o,
                        b: r,
                        a: this._sanitizeNumber(n)
                    }
                },
                HueToRGB: function(t, e, i) {
                    return i < 0 ? i += 1 : 1 < i && (i -= 1), 6 * i < 1 ? t + (e - t) * i * 6 : 2 * i < 1 ? e : 3 * i < 2 ? t + (e - t) * (2 / 3 - i) * 6 : t
                },
                HSLtoRGB: function(t, e, i, n) {
                    var s;
                    e < 0 && (e = 0);
                    var o = 2 * i - (s = i <= .5 ? i * (1 + e) : i + e - i * e),
                        r = t + 1 / 3,
                        a = t,
                        l = t - 1 / 3;
                    return [Math.round(255 * this.HueToRGB(o, s, r)), Math.round(255 * this.HueToRGB(o, s, a)), Math.round(255 * this.HueToRGB(o, s, l)), this._sanitizeNumber(n)]
                },
                parse: function(n) {
                    if (0 === arguments.length) return !1;
                    var s, o, r = this,
                        a = !1,
                        l = void 0 !== this.colors[n];
                    return l && (n = this.colors[n].toLowerCase().trim()), c.each(this.stringParsers, function(t, e) {
                        var i = e.re.exec(n);
                        return !(s = i && e.parse.apply(r, [i])) || (a = {}, o = l ? "alias" : e.format ? e.format : r.getValidFallbackFormat(), (a = o.match(/hsla?/) ? r.RGBtoHSB.apply(r, r.HSLtoRGB.apply(r, s)) : r.RGBtoHSB.apply(r, s)) instanceof Object && (a.format = o), !1)
                    }), a
                },
                getValidFallbackFormat: function() {
                    var t = ["rgba", "rgb", "hex", "hsla", "hsl"];
                    return this.origFormat && -1 !== t.indexOf(this.origFormat) ? this.origFormat : this.fallbackFormat && -1 !== t.indexOf(this.fallbackFormat) ? this.fallbackFormat : "rgba"
                },
                toString: function(t, e) {
                    e = e || !1;
                    var i = !1;
                    switch (t = t || this.origFormat || this.fallbackFormat) {
                        case "rgb":
                            return i = this.toRGB(), this.rgbaIsTransparent(i) ? "transparent" : "rgb(" + i.r + "," + i.g + "," + i.b + ")";
                        case "rgba":
                            return "rgba(" + (i = this.toRGB()).r + "," + i.g + "," + i.b + "," + i.a + ")";
                        case "hsl":
                            return i = this.toHSL(), "hsl(" + Math.round(360 * i.h) + "," + Math.round(100 * i.s) + "%," + Math.round(100 * i.l) + "%)";
                        case "hsla":
                            return i = this.toHSL(), "hsla(" + Math.round(360 * i.h) + "," + Math.round(100 * i.s) + "%," + Math.round(100 * i.l) + "%," + i.a + ")";
                        case "hex":
                            return this.toHex();
                        case "alias":
                            return !1 === (i = this.toAlias()) ? this.toString(this.getValidFallbackFormat()) : e && !(i in o.webColors) && i in this.predefinedColors ? this.predefinedColors[i] : i;
                        default:
                            return i
                    }
                },
                stringParsers: [{
                    re: /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*?\)/,
                    format: "rgb",
                    parse: function(t) {
                        return [t[1], t[2], t[3], 1]
                    }
                }, {
                    re: /rgb\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
                    format: "rgb",
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], 1]
                    }
                }, {
                    re: /rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
                    format: "rgba",
                    parse: function(t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba\(\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
                    format: "rgba",
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /hsl\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*?\)/,
                    format: "hsl",
                    parse: function(t) {
                        return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
                    }
                }, {
                    re: /hsla\(\s*(\d*(?:\.\d+)?)\s*,\s*(\d*(?:\.\d+)?)\%\s*,\s*(\d*(?:\.\d+)?)\%\s*(?:,\s*(\d*(?:\.\d+)?)\s*)?\)/,
                    format: "hsla",
                    parse: function(t) {
                        return [t[1] / 360, t[2] / 100, t[3] / 100, t[4]]
                    }
                }, {
                    re: /#?([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/,
                    format: "hex",
                    parse: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), 1]
                    }
                }, {
                    re: /#?([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/,
                    format: "hex",
                    parse: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16), 1]
                    }
                }],
                colorNameToHex: function(t) {
                    return void 0 !== this.colors[t.toLowerCase()] && this.colors[t.toLowerCase()]
                }
            }),
            inline: !1,
            color: !1,
            format: !1,
            input: "input",
            container: !1,
            component: ".add-on, .input-group-addon",
            fallbackColor: !1,
            fallbackFormat: "hex",
            sliders: {
                saturation: {
                    maxLeft: 160,
                    maxTop: 160,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 0,
                    maxTop: 160,
                    callLeft: !1,
                    callTop: "setHue"
                },
                alpha: {
                    maxLeft: 0,
                    maxTop: 160,
                    callLeft: !1,
                    callTop: "setAlpha"
                }
            },
            slidersHorz: {
                saturation: {
                    maxLeft: 160,
                    maxTop: 160,
                    callLeft: "setSaturation",
                    callTop: "setBrightness"
                },
                hue: {
                    maxLeft: 160,
                    maxTop: 0,
                    callLeft: "setHue",
                    callTop: !1
                },
                alpha: {
                    maxLeft: 160,
                    maxTop: 0,
                    callLeft: "setAlpha",
                    callTop: !1
                }
            },
            template: '<div class="colorpicker dropdown-menu"><div class="colorpicker-saturation"><i><b></b></i></div><div class="colorpicker-hue"><i></i></div><div class="colorpicker-alpha"><i></i></div><div class="colorpicker-color"><div /></div><div class="colorpicker-selectors"></div></div>',
            align: "left",
            customClass: null,
            colorSelectors: null
        },
        a = function(t, e) {
            this.element = c(t).addClass("colorpicker-element"), this.options = c.extend(!0, {}, r, this.element.data(), e), this.component = this.options.component, this.component = !1 !== this.component && this.element.find(this.component), this.component && 0 === this.component.length && (this.component = !1), this.container = !0 === this.options.container ? this.element : this.options.container, this.container = !1 !== this.container && c(this.container), this.input = this.element.is("input") ? this.element : !!this.options.input && this.element.find(this.options.input), this.input && 0 === this.input.length && (this.input = !1), this.color = this.createColor(!1 !== this.options.color ? this.options.color : this.getValue()), this.format = !1 !== this.options.format ? this.options.format : this.color.origFormat, !1 !== this.options.color && (this.updateInput(this.color), this.updateData(this.color));
            var i = this.picker = c(this.options.template);
            if (this.options.customClass && i.addClass(this.options.customClass), this.options.inline ? i.addClass("colorpicker-inline colorpicker-visible") : i.addClass("colorpicker-hidden"), this.options.horizontal && i.addClass("colorpicker-horizontal"), -1 === ["rgba", "hsla", "alias"].indexOf(this.format) && !1 !== this.options.format && "transparent" !== this.getValue() || i.addClass("colorpicker-with-alpha"), "right" === this.options.align && i.addClass("colorpicker-right"), !0 === this.options.inline && i.addClass("colorpicker-no-arrow"), this.options.colorSelectors) {
                var n = this,
                    s = n.picker.find(".colorpicker-selectors");
                0 < s.length && (c.each(this.options.colorSelectors, function(t, e) {
                    var i = c("<i />").addClass("colorpicker-selectors-color").css("background-color", e).data("class", t).data("alias", t);
                    i.on("click.colorpicker touchend.colorpicker", function() {
                        n.setValue("alias" === n.format ? c(this).data("alias") : c(this).css("background-color"))
                    }), s.append(i)
                }), s.show().addClass("colorpicker-visible"))
            }
            i.on("mousedown.colorpicker touchstart.colorpicker", c.proxy(function(t) {
                t.target === t.currentTarget && t.preventDefault()
            }, this)), i.find(".colorpicker-saturation, .colorpicker-hue, .colorpicker-alpha").on("mousedown.colorpicker touchstart.colorpicker", c.proxy(this.mousedown, this)), i.appendTo(this.container ? this.container : c("body")), !1 !== this.input && (this.input.on({
                "keyup.colorpicker": c.proxy(this.keyup, this)
            }), this.input.on({
                "change.colorpicker": c.proxy(this.change, this)
            }), !1 === this.component && this.element.on({
                "focus.colorpicker": c.proxy(this.show, this)
            }), !1 === this.options.inline && this.element.on({
                "focusout.colorpicker": c.proxy(this.hide, this)
            })), !1 !== this.component && this.component.on({
                "click.colorpicker": c.proxy(this.show, this)
            }), !1 === this.input && !1 === this.component && this.element.on({
                "click.colorpicker": c.proxy(this.show, this)
            }), !1 !== this.input && !1 !== this.component && "color" === this.input.attr("type") && this.input.on({
                "click.colorpicker": c.proxy(this.show, this),
                "focus.colorpicker": c.proxy(this.show, this)
            }), this.update(), c(c.proxy(function() {
                this.element.trigger("create")
            }, this))
        };
    a.Color = o, a.prototype = {
        constructor: a,
        destroy: function() {
            this.picker.remove(), this.element.removeData("colorpicker", "color").off(".colorpicker"), !1 !== this.input && this.input.off(".colorpicker"), !1 !== this.component && this.component.off(".colorpicker"), this.element.removeClass("colorpicker-element"), this.element.trigger({
                type: "destroy"
            })
        },
        reposition: function() {
            if (!1 !== this.options.inline || this.options.container) return !1;
            var t = this.container && this.container[0] !== s.document.body ? "position" : "offset",
                e = this.component || this.element,
                i = e[t]();
            "right" === this.options.align && (i.left -= this.picker.outerWidth() - e.outerWidth()), this.picker.css({
                top: i.top + e.outerHeight() + 10,
                left: i.left
            })
        },
        show: function(t) {
            this.isDisabled() || (this.picker.addClass("colorpicker-visible").removeClass("colorpicker-hidden"), this.reposition(), c(s).on("resize.colorpicker", c.proxy(this.reposition, this)), !t || this.hasInput() && "color" !== this.input.attr("type") || t.stopPropagation && t.preventDefault && (t.stopPropagation(), t.preventDefault()), !this.component && this.input || !1 !== this.options.inline || c(s.document).on({
                "mousedown.colorpicker": c.proxy(this.hide, this)
            }), this.element.trigger({
                type: "showPicker",
                color: this.color
            }))
        },
        hide: function(t) {
            if (void 0 !== t && t.target && (0 < c(t.currentTarget).parents(".colorpicker").length || 0 < c(t.target).parents(".colorpicker").length)) return !1;
            this.picker.addClass("colorpicker-hidden").removeClass("colorpicker-visible"), c(s).off("resize.colorpicker", this.reposition), c(s.document).off({
                "mousedown.colorpicker": this.hide
            }), this.update(), this.element.trigger({
                type: "hidePicker",
                color: this.color
            })
        },
        updateData: function(t) {
            return t = t || this.color.toString(this.format, !1), this.element.data("color", t), t
        },
        updateInput: function(t) {
            return t = t || this.color.toString(this.format, !1), !1 !== this.input && this.input.prop("value", t), t
        },
        updatePicker: function(t) {
            void 0 !== t && (this.color = this.createColor(t));
            var e = !1 === this.options.horizontal ? this.options.sliders : this.options.slidersHorz,
                i = this.picker.find("i");
            if (0 !== i.length) return !1 === this.options.horizontal ? (e = this.options.sliders, i.eq(1).css("top", e.hue.maxTop * (1 - this.color.value.h)).end().eq(2).css("top", e.alpha.maxTop * (1 - this.color.value.a))) : (e = this.options.slidersHorz, i.eq(1).css("left", e.hue.maxLeft * (1 - this.color.value.h)).end().eq(2).css("left", e.alpha.maxLeft * (1 - this.color.value.a))), i.eq(0).css({
                top: e.saturation.maxTop - this.color.value.b * e.saturation.maxTop,
                left: this.color.value.s * e.saturation.maxLeft
            }), this.picker.find(".colorpicker-saturation").css("backgroundColor", this.color.toHex(this.color.value.h, 1, 1, 1)), this.picker.find(".colorpicker-alpha").css("backgroundColor", this.color.toHex()), this.picker.find(".colorpicker-color, .colorpicker-color div").css("backgroundColor", this.color.toString(this.format, !0)), t
        },
        updateComponent: function(t) {
            var e;
            if (e = void 0 !== t ? this.createColor(t) : this.color, !1 !== this.component) {
                var i = this.component.find("i").eq(0);
                0 < i.length ? i.css({
                    backgroundColor: e.toString(this.format, !0)
                }) : this.component.css({
                    backgroundColor: e.toString(this.format, !0)
                })
            }
            return e.toString(this.format, !1)
        },
        update: function(t) {
            var e;
            return !1 === this.getValue(!1) && !0 !== t || (e = this.updateComponent(), this.updateInput(e), this.updateData(e), this.updatePicker()), e
        },
        setValue: function(t) {
            this.color = this.createColor(t), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: t
            })
        },
        createColor: function(t) {
            return new o(t || null, this.options.colorSelectors, this.options.fallbackColor ? this.options.fallbackColor : this.color, this.options.fallbackFormat)
        },
        getValue: function(t) {
            var e;
            return t = void 0 === t ? this.options.fallbackColor : t, void 0 !== (e = this.hasInput() ? this.input.val() : this.element.data("color")) && "" !== e && null !== e || (e = t), e
        },
        hasInput: function() {
            return !1 !== this.input
        },
        isDisabled: function() {
            return !!this.hasInput() && !0 === this.input.prop("disabled")
        },
        disable: function() {
            return !!this.hasInput() && (this.input.prop("disabled", !0), this.element.trigger({
                type: "disable",
                color: this.color,
                value: this.getValue()
            }), !0)
        },
        enable: function() {
            return !!this.hasInput() && (this.input.prop("disabled", !1), this.element.trigger({
                type: "enable",
                color: this.color,
                value: this.getValue()
            }), !0)
        },
        currentSlider: null,
        mousePointer: {
            left: 0,
            top: 0
        },
        mousedown: function(t) {
            !t.pageX && !t.pageY && t.originalEvent && t.originalEvent.touches && (t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY), t.stopPropagation(), t.preventDefault();
            var e = c(t.target).closest("div"),
                i = this.options.horizontal ? this.options.slidersHorz : this.options.sliders;
            if (!e.is(".colorpicker")) {
                if (e.is(".colorpicker-saturation")) this.currentSlider = c.extend({}, i.saturation);
                else if (e.is(".colorpicker-hue")) this.currentSlider = c.extend({}, i.hue);
                else {
                    if (!e.is(".colorpicker-alpha")) return !1;
                    this.currentSlider = c.extend({}, i.alpha)
                }
                var n = e.offset();
                this.currentSlider.guide = e.find("i")[0].style, this.currentSlider.left = t.pageX - n.left, this.currentSlider.top = t.pageY - n.top, this.mousePointer = {
                    left: t.pageX,
                    top: t.pageY
                }, c(s.document).on({
                    "mousemove.colorpicker": c.proxy(this.mousemove, this),
                    "touchmove.colorpicker": c.proxy(this.mousemove, this),
                    "mouseup.colorpicker": c.proxy(this.mouseup, this),
                    "touchend.colorpicker": c.proxy(this.mouseup, this)
                }).trigger("mousemove")
            }
            return !1
        },
        mousemove: function(t) {
            !t.pageX && !t.pageY && t.originalEvent && t.originalEvent.touches && (t.pageX = t.originalEvent.touches[0].pageX, t.pageY = t.originalEvent.touches[0].pageY), t.stopPropagation(), t.preventDefault();
            var e = Math.max(0, Math.min(this.currentSlider.maxLeft, this.currentSlider.left + ((t.pageX || this.mousePointer.left) - this.mousePointer.left))),
                i = Math.max(0, Math.min(this.currentSlider.maxTop, this.currentSlider.top + ((t.pageY || this.mousePointer.top) - this.mousePointer.top)));
            return this.currentSlider.guide.left = e + "px", this.currentSlider.guide.top = i + "px", this.currentSlider.callLeft && this.color[this.currentSlider.callLeft].call(this.color, e / this.currentSlider.maxLeft), this.currentSlider.callTop && this.color[this.currentSlider.callTop].call(this.color, i / this.currentSlider.maxTop), !1 !== this.options.format || "setAlpha" !== this.currentSlider.callTop && "setAlpha" !== this.currentSlider.callLeft || (1 !== this.color.value.a ? (this.format = "rgba", this.color.origFormat = "rgba") : (this.format = "hex", this.color.origFormat = "hex")), this.update(!0), this.element.trigger({
                type: "changeColor",
                color: this.color
            }), !1
        },
        mouseup: function(t) {
            return t.stopPropagation(), t.preventDefault(), c(s.document).off({
                "mousemove.colorpicker": this.mousemove,
                "touchmove.colorpicker": this.mousemove,
                "mouseup.colorpicker": this.mouseup,
                "touchend.colorpicker": this.mouseup
            }), !1
        },
        change: function(t) {
            this.keyup(t)
        },
        keyup: function(t) {
            38 === t.keyCode ? (this.color.value.a < 1 && (this.color.value.a = Math.round(100 * (this.color.value.a + .01)) / 100), this.update(!0)) : 40 === t.keyCode ? (0 < this.color.value.a && (this.color.value.a = Math.round(100 * (this.color.value.a - .01)) / 100), this.update(!0)) : (this.color = this.createColor(this.input.val()), this.color.origFormat && !1 === this.options.format && (this.format = this.color.origFormat), !1 !== this.getValue(!1) && (this.updateData(), this.updateComponent(), this.updatePicker())), this.element.trigger({
                type: "changeColor",
                color: this.color,
                value: this.input.val()
            })
        }
    }, c.colorpicker = a, c.fn.colorpicker = function(i) {
        var n = Array.prototype.slice.call(arguments, 1),
            t = 1 === this.length,
            s = null,
            e = this.each(function() {
                var t = c(this),
                    e = t.data("colorpicker");
                e || (e = new a(this, "object" == typeof i ? i : {}), t.data("colorpicker", e)), "string" == typeof i ? c.isFunction(e[i]) ? s = e[i].apply(e, n) : (n.length && (e[i] = n[0]), s = e[i]) : s = t
            });
        return t ? s : e
    }, c.fn.colorpicker.constructor = a
}), $(".btn-color-setting,.color-theme-setting .btn-close").on("click", function() {
    $(".color-theme-setting, .btn-color-setting").toggleClass("open")
}), $(".preset-color-block .btn-color, .preset-color-block .form-control,.preset-color-block .input-group-addon").on("click", function() {
    $(this).hasClass("active") ? $(this).parent().hasClass("form-group") || $(this).removeClass("active") : $(this).parent().hasClass("form-group") ? ($(this).parent().siblings(".active").removeClass("active"), $(this).parent().addClass("active")) : ($(this).siblings(".active").removeClass("active"), $(this).addClass("active")), dynamicColor()
}), $("#custom-primary").colorpicker({
    align: "right",
    container: "#custom-primary",
    format: "hex"
}), $("#custom-secondary").colorpicker({
    align: "right",
    container: "#custom-secondary",
    format: "hex"
}), $("#custom-text-primary").colorpicker({
    align: "right",
    container: "#custom-text-primary",
    format: "hex"
}), $("#custom-text-secondary").colorpicker({
    align: "right",
    container: "#custom-text-secondary",
    format: "hex"
}), $("#custom-secondary, #custom-primary, #custom-text-primary, #custom-text-secondary").colorpicker().on("changeColor", function(t) {
    dynamicColor()
});
var textFile = null,
makeTextFile = function(t) {
    var e = new Blob([t], {
        type: "text/plain"
    });
    return null !== textFile && window.URL.revokeObjectURL(textFile), textFile = window.URL.createObjectURL(e)
},

download = document.getElementById("download-theme-css");
download.addEventListener("click", function() {
var t = document.createElement("a");
t.href = makeTextFile(updatedCSS), t.download = "theme-css.css", document.body.appendChild(t), t.click(), setTimeout(function() {
    document.body.removeChild(t)
}, 100)
}), $(document).ready(function() {
"use strict";
$("body").addClass("propeller-topbar-body"), $(".close-propeller-topbar").on("click", function() {
    $("body").addClass("hidden-propeller"), $(".propeller-topbar").hide(), $("body").removeClass("propeller-topbar-body")
})
}), $(window).on("scroll", function() {
"use strict";
56 < $(this).scrollTop() ? $("body").removeClass("propeller-topbar-body") : $("body").hasClass("hidden-propeller") ? ($(".propeller-topbar").slideUp(), $("body").removeClass("propeller-topbar-body")) : ($(".propeller-topbar").show(), $("body").addClass("propeller-topbar-body"))
});