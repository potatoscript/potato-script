/*
*potato.html.js
*
*Copyright (c) 2019 LIM KIAN SENG all rights reserved
*
*Permission is hereby granted, free of charge, to any person obtaining a copy
*of this software and associated documentation files (the "Software"), to deal
*in the Software without restriction, including without limitation the rights
*to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
*copies of the Software, and to permit persons to whom the Software is
*furnished to do so, subject to the following conditions:
*
*The above copyright notice and this permission notice shall be included in all
*copies or substantial portions of the Software.
*
*THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
*IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
*FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
*AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
*LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
*OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
*SOFTWARE.*/
var _POTATOMenuTitle = 0,
    _POTATOMenu = 0,
    _POTATOId = new Array,
    _POTATOBindId = new Array,
    _POTATOBindIndex = new Array,
    _POTATOArray = [
        []
    ],
    _POTATOTableId, _POTATOBindIndexId = new Array,
    _POTATOIndexId = new Array,
    _POTATOIndexValue = new Array,
    _POTATOElement = new Array,
    _pimS, _potatoThis, _pcofig, _fieldtime, _value, _fieldboard, PIMS = function() {
        return _psinit.init()
    },
    _pcnst = function() {
        return this.KB = [75, 69, 89, 66, 79, 65, 82, 68], this.KP = [75, 69, 89, 80, 65, 68], this.h = [35], this.lp = [112, 111, 116, 97, 116, 111], this.r = [114, 101, 103, 105, 115, 116, 101, 114, 80, 111, 116, 97, 116, 111], this
    },
    _pdir = function() {
        return this.jsonphp = "config/json.php", this.POTATOModelDir = "../apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/", this.POTATOModelDir2 = "apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/", this
    },
    _psinit = {
        settings: {
            X_authorization: 0,
            nodevalue: "pims",
            colId: 0,
            rowId: 0,
            tabName1: String.fromCharCode(80, 79, 84, 65, 84, 79),
            tabName2: String.fromCharCode(79),
            pimsListObject: new Object,
            keyID: "pims",
            pimsReloadTime: "pims",
            pimsTargetId: "pims",
            _potatoThis: new Object,
            pimsParameters: "pims",
            where: [],
            whereOther: [],
            field: [],
            fieldOther: [],
            newP: new Array,
            rsd: "",
            now: "",
            day: "20",
            hour: "08",
            minute: "00",
            month: "06",
            second: "00",
            year: "2019",
            data: new Array,
            today: ""
        },
        init: function() {
            _pimS = this.settings, Oget = this.settings, _POTATO = this.settings;
            var t = new Date,
                e = t.getDate(),
                i = t.getHours(),
                l = t.getMinutes(),
                n = t.getMonth() + 1,
                r = t.getSeconds(),
                o = t.getFullYear();
            _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(l) < 10 ? "0" + l : l, _pimS.month = parseInt(n) < 10 ? "0" + n : n, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.year = o, _pimS.now = _pimS.hour + ":" + _pimS.minute, Oget.today = o + "-" + Oget.month + "-" + Oget.day, pims = X, POTATO = X, _$.init(), document.onmouseover = X.prototype.doOver, document.onmouseout = X.prototype.doOut, document.onmousedown = X.prototype.doDown, document.onmouseup = X.prototype.doUp
        },
        start: function() {}
    },
    __p = function() {
        var t = function() {};
        return t.prototype = {
            l: function(t) {
                return String.fromCharCode.apply(String, t)
            }
        }, t
    }();
! function(t, e, i, l) {
    "use strict";

    function n(t, e) {
        for (var i = 0, l = t.length; i < l; i++) h(t[i], e)
    }

    function r(t) {
        return function(e) {
            tt(e) && (h(e, t), n(e.querySelectorAll(L), t))
        }
    }

    function o(t) {
        var e = t.getAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111)),
            i = t.nodeName.toUpperCase(),
            l = z.call(D, e ? F + e.toUpperCase() : B + i);
        return e && -1 < l && !a(i, e) ? -1 : l
    }

    function a(t, e) {
        return -1 < L.indexOf(t + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + e + '"]')
    }

    function s(t) {
        var e = t.currentTarget,
            i = t.attrChange,
            l = t.attrName,
            n = t.target;
        pt && (!n || n === e) && e.attributeChangedCallback && "style" !== l && e.attributeChangedCallback(l, i === t[k] ? null : t.prevValue, i === t[C] ? null : t.newValue)
    }

    function d(t) {
        var e = r(t);
        return function(t) {
            g.push(e, t.target)
        }
    }

    function c(t) {
        ut && (ut = !1, t.currentTarget.removeEventListener(O, c)), n((t.target || e).querySelectorAll(L), t.detail === S ? S : T), Z && function() {
            for (var t, e = 0, i = et.length; e < i; e++) t = et[e], R.contains(t) || (et.splice(e, 1), h(t, S))
        }()
    }

    function u(t, e) {
        var i = this;
        lt.call(i, t, e), m.call(i, {
            target: i
        })
    }

    function p(t, e) {
        G(t, e), b ? b.observe(t, ot) : (ct && (t.setAttribute = u, t[A] = y(t), t.addEventListener(E, m)), t.addEventListener(I, s)), t.createdCallback && pt && (t.created = !0, t.createdCallback(), t.created = !1)
    }

    function h(t, e) {
        var i, l = o(t); - 1 < l && (v(t, N[l]), l = 0, e !== T || t[T] ? e === S && !t[S] && (t[T] = !1, t[S] = !0, l = 1) : (t[S] = !1, t[T] = !0, l = 1, Z && z.call(et, t) < 0 && et.push(t)), l && (i = t[e + "Callback"]) && i.call(t))
    }
    if (!(l in e)) {
        var g, m, f, y, b, v, x, A = "__" + l + (1e5 * Math.random() >> 0),
            T = "attached",
            S = "detached",
            w = "extends",
            k = "ADDITION",
            _ = "MODIFICATION",
            C = "REMOVAL",
            I = "DOMAttrModified",
            O = "DOMContentLoaded",
            E = "DOMSubtreeModified",
            B = "<",
            F = "=",
            $ = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
            P = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
            D = [],
            N = [],
            L = "",
            R = e.documentElement,
            z = D.indexOf || function(t) {
                for (var e = this.length; e-- && this[e] !== t;);
                return e
            },
            H = i.prototype,
            X = H.hasOwnProperty,
            M = H.isPrototypeOf,
            W = i.defineProperty,
            j = i.getOwnPropertyDescriptor,
            K = i.getOwnPropertyNames,
            U = i.getPrototypeOf,
            V = i.setPrototypeOf,
            Y = !!i.__proto__,
            q = i.create || function t(e) {
                return e ? (t.prototype = e, new t) : this
            },
            G = V || (Y ? function(t, e) {
                return t.__proto__ = e, t
            } : K && j ? function() {
                function t(t, e) {
                    for (var i, l = K(e), n = 0, r = l.length; n < r; n++) i = l[n], X.call(t, i) || W(t, i, j(e, i))
                }
                return function(e, i) {
                    do {
                        t(e, i)
                    } while ((i = U(i)) && !M.call(i, e));
                    return e
                }
            }() : function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }),
            J = t.MutationObserver || t.WebKitMutationObserver,
            Q = (t.HTMLElement || t.Element || t.Node).prototype,
            Z = !M.call(Q, R),
            tt = Z ? function(t) {
                return 1 === t.nodeType
            } : function(t) {
                return M.call(Q, t)
            },
            et = Z && [],
            it = Q.cloneNode,
            lt = Q.setAttribute,
            nt = Q.removeAttribute,
            rt = e.createElement,
            ot = J && {
                attributes: !0,
                characterData: !0,
                attributeOldValue: !0
            },
            at = J || function(t) {
                ct = !1, R.removeEventListener(I, at)
            },
            st = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                setTimeout(t, 10)
            },
            dt = !1,
            ct = !0,
            ut = !0,
            pt = !0;
        V || Y ? (v = function(t, e) {
            M.call(e, t) || p(t, e)
        }, x = p) : x = v = function(t, e) {
            t[A] || (t[A] = i(!0), p(t, e))
        }, Z ? (ct = !1, function() {
            var t = j(Q, "addEventListener"),
                e = t.value,
                i = function(t) {
                    var e = new CustomEvent(I, {
                        bubbles: !0
                    });
                    e.attrName = t, e.prevValue = this.getAttribute(t), e.newValue = null, e[C] = e.attrChange = 2, nt.call(this, t), this.dispatchEvent(e)
                },
                l = function(t, e) {
                    var i = this.hasAttribute(t),
                        l = i && this.getAttribute(t),
                        n = new CustomEvent(I, {
                            bubbles: !0
                        });
                    lt.call(this, t, e), n.attrName = t, n.prevValue = i ? l : null, n.newValue = e, i ? n[_] = n.attrChange = 1 : n[k] = n.attrChange = 0, this.dispatchEvent(n)
                },
                n = function(t) {
                    var e, i = t.currentTarget,
                        l = i[A],
                        n = t.propertyName;
                    l.hasOwnProperty(n) && (l = l[n], (e = new CustomEvent(I, {
                        bubbles: !0
                    })).attrName = l.name, e.prevValue = l.value || null, e.newValue = l.value = i[n] || null, null == e.prevValue ? e[k] = e.attrChange = 0 : e[_] = e.attrChange = 1, i.dispatchEvent(e))
                };
            t.value = function(t, r, o) {
                t === I && this.attributeChangedCallback && this.setAttribute !== l && (this[A] = {
                    className: {
                        name: "class",
                        value: this.className
                    }
                }, this.setAttribute = l, this.removeAttribute = i, e.call(this, "propertychange", n)), e.call(this, t, r, o)
            }, W(Q, "addEventListener", t)
        }()) : J || (R.addEventListener(I, at), R.setAttribute(A, 1), R.removeAttribute(A), ct && (m = function(t) {
            var e, i, l, n = this;
            if (n === t.target) {
                for (l in e = n[A], n[A] = i = y(n), i) {
                    if (!(l in e)) return f(0, n, l, e[l], i[l], k);
                    if (i[l] !== e[l]) return f(1, n, l, e[l], i[l], _)
                }
                for (l in e)
                    if (!(l in i)) return f(2, n, l, e[l], i[l], C)
            }
        }, f = function(t, e, i, l, n, r) {
            var o = {
                attrChange: t,
                currentTarget: e,
                attrName: i,
                prevValue: l,
                newValue: n
            };
            o[r] = t, s(o)
        }, y = function(t) {
            for (var e, i, l = {}, n = t.attributes, r = 0, o = n.length; r < o; r++) "setAttribute" !== (i = (e = n[r]).name) && (l[i] = e.value);
            return l
        })), e[l] = function(t, i) {
            if (l = t.toUpperCase(), dt || (dt = !0, J ? (b = function(t, e) {
                    function i(t, e) {
                        for (var i = 0, l = t.length; i < l; e(t[i++]));
                    }
                    return new J(function(l) {
                        for (var n, r, o = 0, a = l.length; o < a; o++) "childList" === (n = l[o]).type ? (i(n.addedNodes, t), i(n.removedNodes, e)) : (r = n.target, pt && r.attributeChangedCallback && "style" !== n.attributeName && r.attributeChangedCallback(n.attributeName, n.oldValue, r.getAttribute(n.attributeName)))
                    })
                }(r(T), r(S))).observe(e, {
                    childList: !0,
                    subtree: !0
                }) : (g = [], st(function t() {
                    for (; g.length;) g.shift().call(null, g.shift());
                    st(t)
                }), e.addEventListener("DOMNodeInserted", d(T)), e.addEventListener("DOMNodeRemoved", d(S))), e.addEventListener(O, c), e.addEventListener("readystatechange", c), e.createElement = function(t, i) {
                    var l = rt.apply(e, arguments),
                        n = "" + t,
                        r = z.call(D, (i ? F : B) + (i || n).toUpperCase()),
                        o = -1 < r;
                    return i && (l.setAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111), i = i.toLowerCase()), o && (o = a(n.toUpperCase(), i))), pt = !e.createElement.innerHTMLHelper, o && x(l, N[r]), l
                }, Q.cloneNode = function(t) {
                    var e = it.call(this, !!t),
                        i = o(e);
                    return -1 < i && x(e, N[i]), t && function(t) {
                        for (var e, i = 0, l = t.length; i < l; i++) e = t[i], x(e, N[o(e)])
                    }(e.querySelectorAll(L)), e
                }), -2 < z.call(D, F + l) + z.call(D, B + l)) throw new Error("A " + t + " type pims already registered");
            if (!$.test(l) || -1 < z.call(P, l)) throw new Error("The type " + t + " pims invalid");
            var l, s = function() {
                    return p ? e.createElement(h, l) : e.createElement(h)
                },
                u = i || H,
                p = X.call(u, w),
                h = p ? i[w].toUpperCase() : l,
                m = D.push((p ? F : B) + l) - 1;
            return L = L.concat(L.length ? "," : "", p ? h + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + t.toLowerCase() + '"]' : h), s.prototype = N[m] = X.call(u, "prototype") ? u.prototype : q(Q), n(e.querySelectorAll(L), T), s
        }
    }
}(window, document, Object, __p.prototype.l(_pcnst().r));
var X = function() {
    var _pimS = function(t, e, i, l, n) {
        var r = __p.prototype.l(_pcnst().lp);
        if (this.data = [], this.array1 = [], this.array2 = [], this.where = [], this.field = [], this.whereOther = [], this.fieldOther = [], this.Query = 0, this.Submit = 0, -1 != String(t).indexOf(__p.prototype.l(_pcnst().h)) && (r = String(t).split(__p.prototype.l(_pcnst().h)).slice(1, 2)), !n) {
            if (t && r == __p.prototype.l(_pcnst().lp)) return window === this ? new _pimS(t) : (this.Day = this.day(), this.e = document.getElementById(t), this.Hour = this.hour(), this.id = t, this.Minute = this.minute(), this.Month = this.month(), this.obj = document.getElementById(t), this.Patent = this.getPatent(), this.Second = this.second(), this.x = t, this.Year = this.year(), this.table, this.ci, this.ri, this.title, this.value, this.oldValue, this.dataID, this.trigger, this.chartLabel, this.chartYvalue, this.chartXvalue, this.element, this.element1, this.element2, this.element3, this.element4, this.element5, this.element6, this.element7, this.element8, this.element9, this.elementbar, this.element1bar, this.element2bar, this.element3bar, this.element4bar, this.element5bar, this.element6bar, this.element7bar, this.element8bar, this.element9bar, this.elementdoughnut, this.element1doughnut, this.element2doughnut, this.element3doughnut, this.element4doughnut, this.element5doughnut, this.element6doughnut, this.element7doughnut, this.element8doughnut, this.element9doughnut, this.elementradar, this.element1radar, this.element2radar, this.element3radar, this.element4radar, this.element5radar, this.element6radar, this.element7radar, this.element8radar, this.element9radar, this);
            if (t && r != __p.prototype.l(_pcnst().lp)) {
                var o = String(r).toLowerCase();
                return document.getElementById(o)
            }
            return window === this ? new _pimS(__p.prototype.l(_pcnst().up)) : (this.x = __p.prototype.l(_pcnst().up), this.e = document.getElementById(__p.prototype.l(_pcnst().up)), this)
        }
        this.x = t, this.y = e, this.dx = i, this.dy = l, this.radius = n
    };
    return _pimS.prototype = {
        chartLabel: "",
        chartYvalue: "",
        chartXvalue: "",
        model: "POTATO.php",
        title: "POTATO",
        table: "",
        ci: "",
        ri: "",
        width: 100,
        height: 30,
        _: new Object,
        oldValue: "",
        menuTitle: "",
        menuModel: "",
        trigger: 0,
        _a_: function(t, e) {
            this.e.addEventListener(t, e, !1)
        },
        background: function(t) {
            return this.e.style.background = t, this
        },
        _b_: function(t) {
            var e = this._p_(t);
            (e.title = "potato.title") && (e.title = potato.title), (e.model = "potato.model") && (e.model = potato.model);
            var i = this.getHTMLElement(),
                l = this.x,
                n = e.model,
                r = l.split("-"),
                o = r.slice(2, 3),
                a = (r.slice(2, 3), !1);
            "true" != e.stacked && 1 != e.stacked || (a = !0);
            var s = !0;
            if ("false" != e.tooltips && 0 != e.tooltips || (s = !1), String(e.params).split("@").slice(1, 2) == l) var d = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                var t = '<div class="chartWrapper" style="position:relative">';
                t += '<div id="div_' + o + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="div_chart_' + o + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + o + '" style="background:' + e.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(e.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t
            };
            var c = 0,
                u = [];
            if (null != [] && "null" != d)
                for (var p = (String(d).match(/,/g) || []).length, h = String(d).split(","), g = 0; g <= p; g++) {
                    var m = String(h.slice(g, g + 1)).split(":"),
                        f = new Function(m.slice(1, 2));
                    if ("null" != String(m.slice(0, 1)).replace(/\s+/g, "")) try {
                        u[String(m.slice(0, 1)).replace(/\s+/g, "")] = String(f()).split(",")
                    } catch (t) {
                        c = 1, u[String(m.slice(0, 1)).replace(/\s+/g, "")] = ""
                    }
                }
            0 == c && this.Post(n, u, function(t) {
                var i = new Array,
                    n = new Array;
                i[0] = new Array, n[0] = new Array;
                new Array;
                var r = String(e.dataLabel).split(","),
                    d = String(e.dataLabel2).split(",");
                if ("bar" == e.chartType) {
                    for (var c = 1, u = 0; u <= r.length + 1; u++) "data" != r[u] && (i[c] = new Array, c++);
                    if ("data" != d[0])
                        for (c = 0, u = 0; u <= d.length; u++) n[c] = new Array, c++
                }
                var p = new Array,
                    h = new Array,
                    g = new Array,
                    m = (new Array, "");
                for (u = 0; u < t.length; u++) {
                    if (p[u] = t[u][0], "true" == e.showDay) {
                        var f = String(t[u][0]).split("-"),
                            y = "20" + f.slice(0, 1),
                            b = f.slice(1, 2),
                            v = f.slice(2, 3),
                            x = new Date(y + "/" + b + "/" + v);
                        if (0 == x.getDay()) m = "日";
                        if (1 == x.getDay()) m = "月";
                        if (2 == x.getDay()) m = "火";
                        if (3 == x.getDay()) m = "水";
                        if (4 == x.getDay()) m = "木";
                        if (5 == x.getDay()) m = "金";
                        if (6 == x.getDay()) m = "土";
                        p[u] = t[u][0] + " (" + m + ")"
                    }
                    if ("bar" == e.chartType) {
                        var A = 0,
                            T = [];
                        T[0] = 0;
                        var S = 0;
                        for (c = 1; c <= r.length; c++) try {
                            "data" != r[c] && (i[S].push(t[u][c]), 1 == a ? A += parseFloat(t[u][c]) : (T[c] = 0, parseFloat(t[u][c]) > 0 && "undefined" != t[u][c] && (T[c] = parseFloat(t[u][c]))), S++)
                        } catch (t) {}
                        if (i[S].push(A), h[u] = 1 == a ? A : maxArray(T), "data" != d[0]) {
                            var w = 0,
                                k = [];
                            k[0] = 0;
                            var _ = 0;
                            for (c = 0; c < d.length; c++)
                                if ("undefined" != t[u][d[c]] && null != t[u][d[c]]) try {
                                    n[_].push(t[u][d[c]]), 1 == a ? w += parseFloat(t[u][d[c]]) : (w[c] = 0, parseFloat(t[u][d[c]]) > 0 && (k[c] = parseFloat(t[u][d[c]]))), _++
                                } catch (t) {}
                                g[u] = 1 == a ? w : maxArray(k)
                        }
                        A
                    } else i[0].push(t[u][1]), h[u] = t[u][1], t[u][1]
                }
                var C = new Array,
                    I = (c = 0, !1);
                if ("bar" == e.chartType) {
                    if ("data" != d[0])
                        for (u = 0; u < d.length; u++) C[c] = {
                            type: "line",
                            label: d[u],
                            radius: e.pointRadius[u],
                            backgroundColor: e.pointColorIndex[u],
                            pointStyle: e.pointStyle[u],
                            borderDash: [e.pointBorderDash[u]],
                            borderColor: e.pointBorderColorIndex[u],
                            borderWidth: e.pointBorderWidth[u],
                            yAxisID: "y-axis-2",
                            fill: !1,
                            data: n[u]
                        }, I = !0, c++;
                    for (u = 0; u < r.length; u++) "data" != r[u] && (C[c] = {
                        type: "bar",
                        label: r[u],
                        backgroundColor: e.colorIndex[u],
                        borderColor: "#444",
                        borderWidth: 1,
                        data: i[u]
                    }, c++);
                    C[c] = {
                        type: "line",
                        label: "",
                        borderColor: "#fff",
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        borderColor: "transparent",
                        fill: !1,
                        data: i[S]
                    }
                }
                if ("true" == e.legendDisplay) {
                    var O = "bottom";
                    null != e.legendPosition && (O = e.legendPosition);
                    var E = {
                        position: O,
                        display: !0,
                        labels: {
                            usePointStyle: !0
                        }
                    }
                } else E = {
                    position: "bottom",
                    display: !1
                };
                if ("bar" == e.chartType) {
                    var B = 1.2;
                    "" != e.label2String && (B = 2);
                    var F = [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-1",
                            stacked: a,
                            ticks: {
                                callback: function(t, e, i) {
                                    return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                },
                                beginAtZero: !0,
                                max: maxArray(h) * B,
                                min: 0,
                                fontSize: e.yAxesFontSize
                            },
                            scaleLabel: {
                                display: !0,
                                labelString: e.labelString,
                                fontSize: e.labelFontSize
                            }
                        }, {
                            display: I,
                            position: "right",
                            id: "y-axis-2",
                            gridLines: {
                                drawOnChartArea: !1
                            },
                            ticks: {
                                callback: function(t, e, i) {
                                    return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                },
                                beginAtZero: !0,
                                fontSize: e.y2AxesFontSize,
                                beginAtZero: !1,
                                min: -maxArray(g)
                            },
                            scaleLabel: {
                                display: !0,
                                labelString: e.label2String,
                                fontSize: e.label2FontSize
                            }
                        }],
                        P = {
                            duration: 500,
                            easing: "easeOutQuart",
                            onComplete: function() {
                                var i = this.chart.ctx,
                                    l = this.scales["y-axis-1"].width - 10,
                                    n = this.scales["y-axis-1"].height + this.scales["y-axis-1"].top + 10,
                                    r = document.getElementById("yAxis_" + o).getContext("2d");
                                r.canvas.width = l, r.drawImage(this.chart.canvas, 0, 0, l, n, 0, 0, l, n), i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom";
                                var a = 0;
                                this.data.datasets.forEach(function(e) {
                                    for (var l = 0; l < e.data.length; l++) {
                                        var n = e._meta[Object.keys(e._meta)[0]].data[l]._model,
                                            r = e._meta[Object.keys(e._meta)[0]].data[l]._yScale.maxHeight;
                                        i.fillStyle = "#444";
                                        var o = n.y - 5;
                                        (r - n.y) / r >= .93 && (o = n.y + 14), "bar" == e.type && a != c && (o += 20), t.length < 31 && i.fillText(pims().Comma(parseFloat(e.data[l])), n.x, o)
                                    }
                                    a++
                                })
                            }
                        }
                } else F = [], P = {
                    duration: 500,
                    easing: "easeOutQuart",
                    onComplete: function() {
                        var t = this.chart.ctx;
                        t.font = Chart.helpers.fontString(11, "normal", "Arial"), t.textAlign = "center", t.textBaseline = "bottom", this.data.datasets.forEach(function(e) {
                            for (var i = 0; i < e.data.length; i++) {
                                var l = e._meta[Object.keys(e._meta)[0]].data[i]._model;
                                e._meta[Object.keys(e._meta)[0]].data[i]._yScale.maxHeight;
                                t.fillStyle = "#444", t.fillText(pims().Comma(parseFloat(e.data[i])), l.x + 20, l.y + 5)
                            }
                        })
                    }
                };
                "true" == e.display ? e.display = !0 : e.display = !1;
                var D = {
                        hover: {
                            animationDuration: 1,
                            onHover: function(t, i) {
                                var n = this.getElementAtEvent(t);
                                if (n.length) {
                                    t.target.style.cursor = "pointer";
                                    try {
                                        var r = n[0]._chart.data,
                                            o = n[0]._datasetIndex,
                                            a = r.datasets[o].label,
                                            s = r.datasets[o].data[n[0]._index];
                                        t = i[0];
                                        var d = this.data.labels[t._index];
                                        e.hover(l, a, s, d)
                                    } catch (t) {
                                        e.hover(l, "-")
                                    }
                                } else t.target.style.cursor = "default", e.hover(l, "-")
                            }
                        },
                        onClick: function(t, i) {
                            var n = this.getElementAtEvent(t);
                            if (n.length) try {
                                var r = n[0]._chart.data,
                                    o = n[0]._datasetIndex,
                                    a = r.datasets[o].label,
                                    s = r.datasets[o].data[n[0]._index];
                                t = i[0];
                                var d = this.data.labels[t._index];
                                e.click(l, a, s, d)
                            } catch (t) {
                                e.click(l, "-")
                            } else e.click(l, "-")
                        },
                        title: {
                            display: e.display,
                            text: e.title,
                            fontSize: e.titleFontSize
                        },
                        legend: E,
                        scales: {
                            xAxes: [{
                                stacked: a,
                                ticks: {
                                    autoSkip: !1,
                                    fontSize: e.xAxesFontSize,
                                    maxRotation: e.xlabelAngle,
                                    minRotation: e.xlabelAngle
                                }
                            }],
                            yAxes: F
                        },
                        tooltips: {
                            enabled: s
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        animation: P
                    },
                    N = "<canvas id='canvas-" + o + "' style='background:" + e.background + "'></canvas>",
                    L = document.getElementById("div_chart_" + o);
                L.innerHTML = "", $("#div_" + o).show().css({
                    width: e.width + "px",
                    height: e.height + "px",
                    border: e.border
                });
                var R = "100%";
                t.length > 50 && (R = "130%"), t.length > 100 && (R = "150%"), t.length > 150 && (R = "180%"), t.length > 200 && (R = "250%"), t.length > 250 && (R = "300%"), t.length > 300 && (R = "350%"), t.length > 350 && (R = "400%"), t.length > 400 && (R = "500%"), $("#div_chart_" + o).html(N).css({
                    width: R
                });
                var z = document.getElementById("canvas-" + o);
                try {
                    var H = e.name;
                    null == H && (H = "");
                    var X = document.createElement("span");
                    X.innerText = H, X.style.fontSize = e.nameFontSize, L.appendChild(X), $("#div_" + o + " span").css({
                        position: "absolute",
                        left: e.width / 6 + "px",
                        top: 2 * -e.fontSize + "px",
                        fontSize: e.nameFontSize + "px",
                        textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                    })
                } catch (t) {}
                if ("bar" == e.chartType) new Chart(z, {
                    type: e.chartType,
                    options: D,
                    data: {
                        labels: p,
                        datasets: C
                    }
                });
                else new Chart(z, {
                    type: "horizontalBar",
                    options: D,
                    data: {
                        labels: p,
                        datasets: [{
                            label: r[0],
                            backgroundColor: e.colorIndex[0],
                            borderColor: "black",
                            borderWidth: .8,
                            data: i[0]
                        }]
                    }
                });
                try {
                    e.callback()
                } catch (t) {}
            });
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        Blink: function(t, e) {
            var i = this._p_(e);
            document.getElementById(i.tableId).rows[i.row].cells[i.cell].style.backgroundColor = i.background, b__[t] = setTimeout(function() {
                O.Blink_(t, e)
            }, 1e3)
        },
        Blink_: function(t, e) {
            var i = this._p_(e);
            document.getElementById(i.tableId).rows[i.row].cells[i.cell].style.backgroundColor = "white", b___[t] = setTimeout(function() {
                O.Blink(t, e)
            }, 1e3)
        },
        Box: function(t) {
            var e = this._p_(t);
            document.getElementById(this.e.id).style.display = "block", $("#" + this.e.id).show().css({
                padding: e.padding,
                width: e.width + "px",
                height: e.height + "px",
                background: e.background,
                boxShadow: e.boxShadow,
                border: e.border,
                borderRadius: e.borderRadius + "px",
                position: "absolute",
                top: event.clientY + e.top + "px",
                left: event.clientX + e.left + "px"
            })
        },
        _bt_: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                l = this._p_(t),
                n = (i.split("-"), l.id),
                r = [];
            if (String(l.field).split("@").slice(1, 2) == i) var o = String(l.field).split("@").slice(0, 1);
            if (String(l.fieldOther).split("@").slice(1, 2) == i) var a = String(l.fieldOther).split("@").slice(0, 1);
            if (String(l.params).split("@").slice(1, 2) == i) var s = String(l.params).split("@").slice(0, 1);
            if (String(l.where).split("@").slice(1, 2) == i) var d = String(l.where).split("@").slice(0, 1);
            e.createdCallback = function() {
                this.id = n;
                var t = '<table style="font-weight:' + l.fontWeight + ";font-size:" + l.fontSize + "px;padding:" + l.paddingTop + "px 1px 1px " + l.paddingLeft + 'px"><tr>';
                "nil 0 0" != l.image ? (t += '<td><img id="img_' + n + '" src="' + String(l.image).split(" ").slice(0, 1) + '" style="width:' + String(l.image).split(" ").slice(1, 2) + "px;height:" + String(l.image).split(" ").slice(2, 3) + 'px"/></td>', t += '<td style="vertical-align:middle;text-align:center">' + l.value + "</td>") : t += '<td style="vertical-align:middle;text-align:center">' + l.value + "</td>", t += "</tr></table>", this.innerHTML = t, $("#" + n).css({
                    background: l.background,
                    border: l.border,
                    borderLeft: "1px solid buttonshadow",
                    borderRight: "2px solid black",
                    borderTop: "1px solid buttonshadow",
                    borderBottom: "2px solid black",
                    borderRadius: l.borderRadius + "px",
                    boxShadow: l.boxShadow,
                    color: l.color,
                    cursor: "pointer",
                    display: l.display,
                    fontFamily: l.fontFamily,
                    fontWeight: l.fontWeight,
                    fontSize: l.fontSize + "px",
                    height: l.height + "px",
                    left: l.left + "px",
                    margin: l.margin,
                    padding: l.padding,
                    position: l.position,
                    textAlign: l.textAlign,
                    top: l.top + "px",
                    width: l.width + "px"
                }).addClass("pimsButton").mousemove(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.hoverBgColor), $(this).css("color", l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                        fontSize: "15px",
                        fontFamily: "Arial",
                        padding: "3px 3px 3px 3px",
                        height: l.hoverHeight + "px",
                        width: l.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        borderRadius: "3px"
                    })
                }).mouseout(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.background), $(this).css("color", l.i), $("#" + l.hoverId).hide().html("")
                }).click(function() {
                    POTATO.Query = 100, POTATO.Submit = 100;
                    for (var t = 0; t < _POTATOId.length; t++)
                        if (n == String(_POTATOId[t])) {
                            var e = String(_POTATOBindId[t]);
                            document.getElementById(e).innerText = l.value
                        }
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    try {
                        l.click()
                    } catch (t) {}
                    if (null == o || "null" == o || 1 != POTATO.Query && 1 != POTATO.Submit) {
                        if ("null" == o && (1 == POTATO.Query || 1 == POTATO.Submit)) {
                            c = i + ".php", u = [];
                            if (null != r && "null" != s)
                                for (y = (String(s).match(/AND/g) || []).length, b = String(s).split("AND"), v = 0; v <= y; v++) {
                                    x = String(b.slice(v, v + 1)).split(":"), A = new Function(x.slice(1, 2));
                                    "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (u[String(x.slice(0, 1)).replace(/\s+/g, "")] = A())
                                }
                            pimsData = [], _pimS.prototype._rp_(c, u, function(t) {
                                POTATO.data = JSON.parse(t), l.callback()
                            })
                        }
                    } else {
                        POTATO.Query = 0, POTATO.Submit = 0;
                        var c = n + ".php",
                            u = [];
                        if (null != d && "null" != d) {
                            var p = X.prototype.getIdClass(String(d));
                            try {
                                this.index = p.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = p.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (var h = 0; h < p.length; h++) {
                                var g = String(p[h].id).split("-").slice(2, 3);
                                u[p[h].field] = pims(g).value()
                            }
                        }
                        var m = "",
                            f = "";
                        if (null != o && "null" != o) {
                            p = X.prototype.getIdClass(String(o));
                            try {
                                this.index = p.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = p.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (h = 0; h < p.length; h++) {
                                g = String(p[h].id).split("-").slice(2, 3);
                                h + 1 < p.length ? (m += String(p[h].field).replace(/\s+/g, "") + ",", f += "'" + pims(g).value() + "',") : (m += String(p[h].field).replace(/\s+/g, ""), f += "'" + pims(g).value() + "'")
                            }
                        }
                        if ("null" != a)
                            for (var y = (String(a).match(/AND/g) || []).length, b = String(a).split("AND"), v = 0; v <= y; v++) {
                                var x = String(b.slice(v, v + 1)).split(":"),
                                    A = new Function(x.slice(1, 2));
                                "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (v < y ? 0 == v ? (m += "," + String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += ",'" + A() + "',") : (m += String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += "'" + A() + "',") : 0 == y ? (m += String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += "'" + A() + "',") : (m += String(x.slice(0, 1)).replace(/\s+/g, ""), f += "'" + A() + "'"))
                            }
                        if (u.fields = m, u.fieldsValue = f, "null" != s && null != r)
                            for (var y = (String(s).match(/AND/g) || []).length, b = String(s).split("AND"), v = 0; v <= y; v++) {
                                var x = String(b.slice(v, v + 1)).split(":"),
                                    A = new Function(x.slice(1, 2));
                                "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (u[String(x.slice(0, 1)).replace(/\s+/g, "")] = A())
                            }
                        POTATO.data = [], _pimS.prototype._rp_(c, u, function(t) {
                            POTATO.data = JSON.parse(t);
                            try {
                                l.callback()
                            } catch (t) {}
                        })
                    }
                }), "none" == l.display ? $("#" + n).hide() : $("#" + n).show()
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(i, {
                        prototype: e,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        chartEncode: function(t) {
            var e = t.match(/=\s*\".*?\"/g);
            if (e)
                for (var i = 0; i < e.length; i++) {
                    var l = e[i].replace(/^=\s*\"|\"$/g, "");
                    l = l.replace(/\'/g, "%26apos;");
                    var n = t.indexOf(e[i]),
                        r = "='" + l + "'";
                    t = t.substring(0, n) + r + t.substring(n + e[i].length)
                }
            return t = (t = (t = t.replace(/\"/g, "%26quot;")).replace(/%(?![\da-f]{2}|[\da-f]{4})/gi, "%25")).replace(/\&/g, "%26")
        },
        chartXML: function(t) {
            this.chartVariable("dataXML", this.chartEncode(t))
        },
        chartTransparent: function(t) {
            this.chartParam("WMode", "transparent")
        },
        chartAttribute: function(t, e) {
            this.attributes[t] = e
        },
        chartParam: function(t, e) {
            this.params[t] = e
        },
        chartVariable: function(t, e) {
            this.variables[t] = e
        },
        clearArrays: function() {
            attr = [], css = [], events = [], param = [], params = [], object = [], data = [], callback = []
        },
        click: function(t) {
            this._a_("click", t)
        },
        Clear: function(t, e) {
            var i = this._p_(e);
            clearTimeout(b__[t]), clearTimeout(b___[t]), document.getElementById(i.tableId).rows[i.row].cells[i.cell].style.backgroundColor = "white"
        },
        Chart: function(t, e, i) {
            var l = this._p_(i);
            this.attributes = new Array, this.params = new Object, this.variables = new Object, this.chartAttribute("s", "lib/charts/" + l.chartType + ".swf"), this.chartAttribute("w", l.width), this.chartAttribute("h", l.height), this.chartAttribute("id", l.chartId), this.chartParam("bgcolor", l.background), this.chartParam("quality", "high"), this.chartVariable("chartWidth", l.width), this.chartVariable("chartHeight", l.height);
            var n = this.getHTMLElement();
            this._rx_(this, t, e, function(t, e) {
                t.chartXML(e), t.chartParam("WMode", "transparent"), t.getChart(t.x), l.callback(e)
            });
            try {
                pimsElement = document.registerPotato(m, {
                    prototype: n
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(m, {
                        prototype: n,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        CHANGE: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), l = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onchange = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onchange = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (l = r[o].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onchange = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onchange = t
                }
        },
        CLICK: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), l = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onclick = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onclick = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (l = r[o].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onclick = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onclick = t
                }
        },
        closeEditCell: function() {
            var e = _potatoThis,
                i = document.createTextNode(e.firstChild.value);
            e.replaceChild(i, e.firstChild), t = 1, $("#keypadtable").hide(), potato.trigger = 0, _pimS.nodevalue = e.firstChild.nodeValue;
            var l = potato.table;
            potato._.callback(e.firstChild.nodeValue, potato.oldValue, l.cells[potato._.targetId].innerText, potato.ci)
        },
        closePad_backup: function(t, e) {
            e = _value;
            if ("" == t && (e.value = ""), "Close" != t && "Now" != t && "CE" != t) "-" != e.value && "" != e.value || (e.value = t), e.value = t + ":" + e.value.split(":").slice(1, 2), $("._min_cls").attr("disabled", !1);
            else if ($("._min_cls").attr("disabled", !0), "Now" == t && (e.value = X.prototype.setHour() + ":" + X.prototype.setMinute()), "CE" == t && (e.value = "0", $("._min_cls").attr("disabled", !0)), "Close" == t)
                if ("undefined" != POTATO.value && null != POTATO.value && "0" != POTATO.value && 0 != e.value) {
                    try {
                        document.getElementById(keyID).style.display = "none", $("._min_cls").attr("disabled", !0), POTATO.value = e.value
                    } catch (t) {}
                    try {
                        document.getElementById("keypadtable").style.display = "none", X.prototype.closeEditCell()
                    } catch (t) {}
                } else {
                    document.getElementById(keyID).style.display = "none";
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                }
            try {
                "" == e.value && (e.value = "-")
            } catch (t) {}
        },
        closeTablePad: function(t, e) {
            try {
                document.getElementById("keypadtable").style.display = "none", X.prototype.closeEditCell()
            } catch (t) {}
        },
        closePad: function() {
            document.getElementById(keyID).style.display = "none"
        },
        Comma: function(t) {
            x = (t += "").split("."), x1 = x[0], x2 = x.length > 1 ? "." + x[1] : "";
            for (var e = /(\d+)(\d{3})/; e.test(x1);) x1 = x1.replace(e, "$1,$2");
            return x1 + x2
        },
        color: function(t) {
            return this.e.style.color = t, this
        },
        counting: function() {
            pims().reload(pimsReloadTime)
        },
        day: function() {
            var t = (new Date).getDate();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        Date: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                l = this._p_(t);
            l.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), r = 3; r <= t; r++) n = n + "_" + e.slice(r, r + 1);
                this.name = n, this.is = i, this.innerHTML = '<input type="text" id="' + i + '"> ', $("#" + i).css({
                    width: l.width + "px",
                    height: l.height + "px",
                    color: l.color,
                    background: l.background,
                    boxShadow: l.boxShadow,
                    display: l.display,
                    position: l.position,
                    left: l.left + "px",
                    top: l.top + "px",
                    fontFamily: l.fontFamily,
                    fontWeight: l.fontWeight,
                    fontSize: l.fontSize + "px",
                    textAlign: l.textAlign,
                    padding: l.padding,
                    border: l.border,
                    borderRadius: l.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", l.value).mousemove(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.hoverBgColor), $(this).css("color", l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: l.hoverHeight + "px",
                        width: l.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.background), $(this).css("color", l.i), $("#" + l.hoverId).hide().html("")
                }).change(function() {
                    try {
                        l.change()
                    } catch (t) {}
                }).click(function() {
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        l.click()
                    } catch (t) {}
                }).datepicker({
                    dateFormat: l.format,
                    showButtonPanel: !0,
                    showAnim: "show",
                    beforeShow: function() {
                        setTimeout(function() {
                            $(".ui-datepicker").css("z-index", 99999999999999)
                        }, 0)
                    }
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _d_: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                l = this._p_(t);
            "potato.today()" == l.value && (l.value = potato.today()), "potato.now()" == l.value && (l.value = potato.now());
            var n = l.id;
            e.createdCallback = function() {
                this.id = n + "_", X.prototype.getAttribute(this, i).index, X.prototype.getAttribute(this, i).field, this.pims = i, this.innerHTML = '<input type="text" id="' + n + '"> ', $("#" + n).css({
                    width: l.width + "px",
                    height: l.height + "px",
                    color: l.color,
                    background: l.background,
                    boxShadow: l.boxShadow,
                    display: l.display,
                    position: l.position,
                    left: l.left + "px",
                    top: l.top + "px",
                    fontFamily: l.fontFamily,
                    fontWeight: l.fontWeight,
                    fontSize: l.fontSize + "px",
                    textAlign: l.textAlign,
                    padding: l.padding,
                    border: l.border,
                    borderRadius: l.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", l.value).mousemove(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.hoverBgColor), $(this).css("color", l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                        padding: l.padding,
                        height: l.hoverHeight + "px",
                        width: l.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        fontSize: "15px",
                        fontFamily: "Arial"
                    })
                }).mouseout(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.background), $(this).css("color", l.i), $("#" + l.hoverId).hide().html("")
                }).change(function() {
                    for (var t = 0; t < _POTATOId.length; t++)
                        if (n == String(_POTATOId[t])) {
                            var e = String(_POTATOBindId[t]);
                            document.getElementById(e).innerText = document.getElementById(n).value
                        }
                    try {
                        l.change(i)
                    } catch (t) {}
                }).click(function() {
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        l.click()
                    } catch (t) {}
                }).datepicker({
                    dateFormat: l.format,
                    showButtonPanel: !0,
                    showAnim: "show",
                    beforeShow: function() {
                        setTimeout(function() {
                            $(".ui-datepicker").css("z-index", 99999999999999)
                        }, 0)
                    }
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(i, {
                        prototype: e,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        doOver: function() {
            var t = X.prototype.getReal(window.event.toElement, "className", "pimsButton");
            if (t != X.prototype.getReal(window.event.fromElement, "className", "pimsButton")) {
                var e = t,
                    i = e.cDisabled;
                i = null != i, "pimsButton" == e.className && (e.onselectstart = new Function("return false")), "pimsButton" != e.className || i || (X.prototype.makeRaised(e), X.prototype.makeGray(e, !1))
            }
        },
        doOut: function() {
            var t = X.prototype.getReal(window.event.toElement, "className", "pimsButton"),
                e = X.prototype.getReal(window.event.fromElement, "className", "pimsButton");
            if (t != e) {
                var i = e,
                    l = i.cDisabled;
                l = null != l;
                var n = i.cToggle;
                toggle_disabled = null != n, n && i.value ? (X.prototype.makePressed(i), X.prototype.makeGray(i, !0)) : "pimsButton" != i.className || l || (X.prototype.makeFlat(i), X.prototype.makeGray(i, !0))
            }
        },
        doDown: function() {
            el = X.prototype.getReal(window.event.srcElement, "className", "pimsButton");
            var t = el.cDisabled;
            t = null != t, "pimsButton" != el.className || t || X.prototype.makePressed(el)
        },
        doUp: function() {
            el = X.prototype.getReal(window.event.srcElement, "className", "pimsButton");
            var t = el.cDisabled;
            t = null != t, "pimsButton" != el.className || t || X.prototype.makeRaised(el)
        },
        _dn_: function(t) {
            var e = this._p_(t),
                i = this.getHTMLElement(),
                l = this.x,
                n = e.model,
                r = this.x,
                o = l.split("-"),
                a = o.slice(2, 3);
            o.slice(2, 3);
            if (String(e.params).split("@").slice(1, 2) == l) var s = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                this.innerHTML = '<div id="' + r + '"></div> '
            };
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
            var d = [];
            if (null != [] && "null" != s)
                for (var c = (String(s).match(/,/g) || []).length, u = String(s).split(","), p = 0; p <= c; p++) {
                    var h = String(u.slice(p, p + 1)).split(":"),
                        g = new Function(h.slice(1, 2));
                    if ("null" != String(h.slice(0, 1)).replace(/\s+/g, "")) try {
                        d[String(h.slice(0, 1)).replace(/\s+/g, "")] = String(g()).split(",")
                    } catch (t) {
                        check_error = 1, d[String(h.slice(0, 1)).replace(/\s+/g, "")] = ""
                    }
                }
            this.Post(n, d, function(t) {
                var i = new Array;
                i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                for (var n = 0; n < t.length; n++)
                    for (var o = 0; o < i.length; o++) i[o][n] = t[n][o];
                var s = document.getElementById(r);
                s.innerHTML = "", $("#" + r).append('<canvas id="canvas-' + a + '" >読み込み中．．．</canvas>');
                var d = document.getElementById("canvas-" + a);
                if ($("#" + r).css({
                        width: e.width + "px",
                        height: e.height + "px",
                        border: e.border,
                        borderRadius: e.borderRadius,
                        position: e.position,
                        top: e.top + "px",
                        left: e.left + "px"
                    }), "null" != e.imageDir) {
                    var c = document.createElement("div");
                    c.setAttribute("id", "note-doughnut-" + a), s.appendChild(c), $("#note-doughnut-" + a).css({
                        fontSize: e.fontSize + "px",
                        position: "relative",
                        left: e.width / 10 + "px",
                        width: .8 * e.width + "px",
                        padding: "5px 5px 5px 5px",
                        textAlign: "center"
                    });
                    var u = document.createElement("img");
                    u.setAttribute("id", "img-doughnut-" + a), u.setAttribute("onerror", "this.style.display='none'"), s.appendChild(u), $("#img-doughnut-" + a).css({
                        display: "block",
                        border: "0px",
                        borderRadius: e.height / 2 + "px",
                        background: "transparent",
                        height: e.height / 2 + "px",
                        width: e.height / 2 + "px",
                        position: "relative",
                        left: e.width / 2 - e.height / 2 / 2 + "px",
                        top: -e.height / 2 - e.height / 2 / 2 - 20 - e.fontSize + "px"
                    });
                    var p = i[3][0];
                    if ($("#note-doughnut-" + a).show().html(p).css("border", "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var h = String(i[0][0]).split("-"),
                        g = e.imageDir + h[0] + "-" + String(h[1]).substring(0, 1) + ".jpg";
                    else g = e.imageDir + i[0][0] + ".jpg";
                    document.getElementById("img-doughnut-" + a).src = g, document.getElementById("img-doughnut-" + a).style.border = "5px solid " + i[2][0]
                }
                e.targetIndex = 0, e.targetColor = i[2][0];
                var m = {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legend: {
                        position: "top",
                        display: !1
                    },
                    title: {
                        display: e.display,
                        text: e.title,
                        fontSize: e.titleFontSize
                    },
                    animation: {
                        duration: 500,
                        easing: "easeOutQuart",
                        onComplete: function() {
                            var i = this.chart.ctx;
                            i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom", this.data.datasets.forEach(function(e) {
                                for (var l = 0; l < e.data.length; l++) {
                                    var n = e._meta[Object.keys(e._meta)[0]],
                                        r = n.data[l]._model,
                                        o = n.total,
                                        a = r.innerRadius + (r.outerRadius - r.innerRadius) / 2,
                                        s = r.startAngle,
                                        d = s + (r.endAngle - s) / 2,
                                        c = a * Math.cos(d),
                                        u = a * Math.sin(d);
                                    i.fillStyle = "#000";
                                    var p = String(Math.round(e.data[l] / o * 100)) + "%";
                                    if (l < e.data.length - 1) {
                                        var h = r.x + c + 70;
                                        u > 0 && c < 0 && (h = r.x + c - 50), i.fillText(t[l][0] + ": " + t[l][1] + ", " + p, h, r.y + u + 8)
                                    }
                                }
                                p = String(Math.round(e.data[e.data.length - 1] / o * 100)) + "%";
                                i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + p, r.x + c, r.y + 2 * u)
                            })
                        }
                    },
                    hover: {
                        onHover: function(t) {
                            this.getElementAtEvent(t).length ? t.target.style.cursor = "pointer" : t.target.style.cursor = "default", "null" != e.imageDir && (pims("#img-doughnut-" + a).style.display = "block")
                        }
                    },
                    onClick: function(t, i) {
                        e.targetIndex = i[0]._index, e.targetColor = i[0]._model.backgroundColor, e.click(l, i[0]._chart.data.labels[i[0]._index], i[0]._model.backgroundColor)
                    },
                    tooltips: {
                        enabled: !1,
                        backgroundColor: "yellow",
                        bodyFontColor: "black",
                        bodyFontSize: 12,
                        borderColor: "#000",
                        borderWidth: 1,
                        custom: function(t) {
                            if (t.opacity > 0) {
                                if ("null" != e.imageDir) {
                                    var i = this._data.datasets[0].other[t.dataPoints[0].index];
                                    if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var l = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                        n = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                    else n = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                    document.getElementById("img-doughnut-" + a).src = n, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                }
                            } else if ("null" != e.imageDir) {
                                i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) l = String(this._data.labels[e.targetIndex]).split("-"), n = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                else n = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                document.getElementById("img-doughnut-" + a).src = n, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + e.targetColor
                            }
                        }
                    }
                };
                new Chart(d, {
                    type: "doughnut",
                    data: {
                        labels: i[0],
                        datasets: [{
                            label: "不適合品番",
                            backgroundColor: i[2],
                            borderColor: "grey",
                            borderWidth: .5,
                            data: i[1],
                            other: i[3]
                        }]
                    },
                    showDatapoints: !0,
                    options: m
                });
                try {
                    e.callback()
                } catch (t) {}
            })
        },
        dummy: function() {
            return null
        },
        _ec_: function(t) {
            var e = this._p_(t);
            potato._ = this._p_(t);
            var i = e.editWidth;
            e.id;
            potato.table = document.getElementById("table-" + e.id);
            document.getElementById("table-" + e.id);
            var l = new Array;
            l = e.targetCol;
            e.id;

            function n() {
                var t = document.getElementById(e.id);
                _pimS.nodevalue = __p.prototype.l(_pcnst().lp);
                var n = "-";
                try {
                    n = t.rows[potato.ri].cells[e.matchCol].innerText
                } catch (t) {}
                var r = -1;
                try {
                    r = l.indexOf($(this).parent().children().index(this))
                } catch (t) {}
                if (!("-" != e.matchCol && n != e.matchValue || $(this).parent().children().index(this) != l && -1 == r && "any" != l)) {
                    var o = 0,
                        a = this;
                    try {
                        a.firstChild.value
                    } catch (t) {
                        a.innerText = " "
                    }
                    if (_potatoThis = this, "INPUT" == a.firstChild.nodeName) {
                        a = this;
                        var s = document.createTextNode(a.firstChild.value);
                        a.replaceChild(s, a.firstChild), o = 1, $("#keypadtable").hide(), potato.trigger = 0, _pimS.nodevalue = a.firstChild.nodeValue, e.callback(a.firstChild.nodeValue, potato.oldValue, t.rows[potato.ri].cells[e.targetId].innerText, potato.ci)
                    }
                    if (1 != o && "INPUT" != a.firstChild.nodeName && "IMG" != a.firstChild.nodeName) {
                        var d = document.createElement("input");
                        d.select(), d.value = a.firstChild.nodeValue, d.setAttribute("autocomplete", "off"), d.style.width = i + "px", d.style.height = "25px", d.style.fontSize = "15px", d.style.fontWeight = "bold", d.style.background = "rgb(255,244,255)", "undefined" != a.firstChild.nodeValue && (a.replaceChild(d, a.firstChild), a.firstChild.select(), a.firstChild.focus());
                        var c = document.createElement("div");
                        c.innerHTML = '<div id="keypadtable"></div>', document.body.appendChild(c);
                        var u = event.clientY + 20;
                        u > 300 && (u = event.clientY - 220);
                        var p = event.clientX;
                        p > 900 && (p = event.clientX - 100), keyID = "keypadtable", $("#keypadtable").load(e.htm).css({
                            width: "200px",
                            height: "150px",
                            margin: e.marginKey,
                            display: "block",
                            position: "absolute",
                            top: u,
                            left: p,
                            zIndex: 2e3
                        }), _value = d
                    }
                }
            }
            $("#" + e.id + " td").click(function() {
                if (potato.ci = $(this).parent().children().index(this), potato.ri = $(this).parent().parent().children().index(this.parentNode), 1 != potato.trigger) {
                    var t = document.getElementById(e.id);
                    potato.oldValue = t.rows[potato.ri].cells[potato.ci].innerText, potato.trigger = 1
                }
            });
            for (var r = document.getElementById(e.id).getElementsByTagName("td"), o = 0; o < r.length; o++) r[o].onkeyup = function(t) {}, "dblclick" == e.trigger ? r[o].ondblclick = n : "click" == e.trigger ? r[o].onclick = n : r[o].ondblclick = n, r[o].onmousemove = function() {}
        },
        _ect_: function(t) {
            var e = this._p_(t);
            pimsParameters = e;
            var i = e.id,
                l = document.getElementById("table-" + e.id),
                n = new Array;

            function r() {
                var t = "-";
                try {
                    t = l.rows[_pimS.rowId].cells[e.matchCol].innerText
                } catch (t) {}
                try {
                    if (!("-" != e.matchCol && t != e.matchValue || $(this).parent().children().index(this) != n && -1 == n.indexOf($(this).parent().children().index(this)) && "any" != n)) {
                        var i = 0,
                            r = this;
                        try {
                            r.firstChild.value
                        } catch (t) {
                            r.innerText = " "
                        }
                        if (_potatoThis = this, "INPUT" == r.firstChild.nodeName) {
                            r = this;
                            o = document.createTextNode(r.firstChild.value), r.replaceChild(o, r.firstChild), i = 1, $("#keypadtable").hide()
                        }
                        if (1 != i && "INPUT" != r.firstChild.nodeName && "IMG" != r.firstChild.nodeName) {
                            var a = document.createElement("input");
                            a.select();
                            var s = r.firstChild.nodeValue;
                            "null" != s && "undefined" != s && null != s && null != s || (s = r.firstChild.innerText), a.value = s, a.setAttribute("autocomplete", "off"), a.style.width = e.editWidth + "px", a.style.height = "25px", a.style.fontSize = "15px", a.style.fontWeight = "bold", a.style.background = "rgb(255,244,255)", "undefined" != r.firstChild.nodeValue && (r.replaceChild(a, r.firstChild), r.firstChild.select(), r.firstChild.focus());
                            var d = document.createElement("div");
                            d.innerHTML = '<div id="keypadtable"></div>', document.body.appendChild(d);
                            var c = event.clientY + 20;
                            c > 300 && (c = event.clientY - 220);
                            var u = event.clientX;
                            u > 900 && (u = event.clientX - 100), $("#keypadtable").load(e.htm).css({
                                width: "200px",
                                height: "150px",
                                margin: e.marginKey,
                                display: "block",
                                position: "absolute",
                                top: c,
                                left: u,
                                zIndex: 2e3
                            }), _value = a
                        }
                    }
                } catch (t) {}
            }
            n = e.targetCol;
            for (var o = document.getElementById(i), a = o.getElementsByTagName("td"), s = 0; s < a.length; s++) a[s].onkeyup = function(t) {}, "dblclick" == e.trigger ? a[s].ondblclick = r : "click" == e.trigger ? a[s].onclick = r : a[s].ondblclick = r, a[s].onmousemove = function() {}
        },
        _el_: function(t, e, i) {
            var l;
            if ((l = document.body.createTextRange()).moveToElementText(document.getElementById(t)), l.execCommand("COPY")) {
                var n = new ActiveXObject("_el_.Application");
                e ? n.Workbooks.Open(e) : n.Workbooks.Add, n.visible = !0, n.Worksheets(1).Paste
            } else {
                var r = this.ActiveXObject("_el_.Application");
                if (r.visible = !0, e && "" != e) {
                    var o = String(location).split("?"),
                        s = new ActiveXObject("Scripting.FileSystemObject");
                    s.FolderExists("C:\\PIMS") || s.CreateFolder("C:\\PIMS"), a = r.Workbooks.Open(o.slice(0, 1) + e)
                } else a = r.Workbooks.Add;
                a.Worksheets(1).Paste
            }
            window.clipboardData.clearData()
        },
        findChildren: function(el, type, value) {
            for (var children = el.children, tmp = new Array, j = 0, i = 0; i < children.length; i++) eval("children[i]." + type + '=="' + value + '"') && (tmp[tmp.length] = children[i]), tmp = tmp.concat(X.prototype.findChildren(children[i], type, value));
            return tmp
        },
        fcc: function(t) {
            return String.fromCharCode.apply(String, t)
        },
        fccs: function(t) {
            return String.fromCharCode(t)
        },
        getIdClass: function(t, e) {
            var i, l, n, r = [];
            for (i = (e = e || document).getElementsByTagName("*"), l = 0; l < i.length; l++)
                if (null != (n = i[l].getAttribute("class")))
                    for (n = n.split(" "), j = 0; j < n.length; j++)
                        if (n[j] === t) {
                            r.push(i[l]);
                            break
                        }
            return r
        },
        getIdType: function(t, e) {
            var i, l, n, r = [];
            for (i = (e = e || document).getElementsByTagName("*"), l = 0; l < i.length; l++)
                if (null != (n = i[l].getAttribute("type")))
                    for (n = n.split(" "), j = 0; j < n.length; j++)
                        if (n[j] === t) {
                            r.push(i[l]);
                            break
                        }
            return r
        },
        Get: function(t, e) {
            this.html = "", this.value = "";
            var i = this.e;
            this.response(t, function(t) {
                i.innerHTML = "", e(t), "" != this.html && i.insertAdjacentHTML("beforeend", this.html), "" != this.value && (i.value = this.value)
            })
        },
        GetDate: function(t, e, i) {
            e || (e = "-"), "today" == t && (t = this.year() + "-" + this.month() + "-" + this.day());
            var l = t.split(e),
                n = new Date(l[0] + "/" + l[1] + "/" + l[2]);
            n.setDate(n.getDate() + i);
            var r = n.getFullYear(),
                o = n.getMonth() + 1;
            o = parseInt(o) < 10 ? "0" + o : o;
            var a = n.getDate();
            return r + e + o + e + (a = parseInt(a) < 10 ? "0" + a : a)
        },
        getAttribute: function(t, e) {
            var i = document.getElementById(e);
            try {
                t.index = i.getAttribute("index"), t.field = i.getAttribute("field"), null == t.index && (t.index = 9999999), null == t.field && (t.field = 9999999)
            } catch (t) {}
            return {
                index: t.index,
                field: t.field
            }
        },
        getBoolean: function(t, e, i) {
            return String(t).split(e).slice(0, 1) != i
        },
        getChartAttribute: function(t) {
            return this.attributes[t]
        },
        getChartParams: function() {
            return this.params
        },
        getChartVariable: function(t) {
            return this.variables[t]
        },
        getChartVariables: function() {
            return this.variables
        },
        getChartVariablePairs: function() {
            var t, e = new Array,
                i = this.getChartVariables();
            for (t in i) e.push(t + "=" + i[t]);
            return e
        },
        getChartHtml: function() {
            var t = "";
            t = '<object id="' + this.getChartAttribute("id") + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getChartAttribute("w") + '" height="' + this.getChartAttribute("h") + '">', t += '<param name="movie" value="' + this.getChartAttribute("s") + '" />';
            var e = this.getChartParams();
            for (var i in e) t += '<param name="' + i + '" value="' + e[i] + '" />';
            var l = this.getChartVariablePairs().join("&");
            return l.length > 0 && (t += '<param name="flashvars" value="' + l + '" />'), t += "</object>"
        },
        getChart: function(t) {
            return 1 == this.detectFlashVersion && this.installedVer.major < 6 ? 1 == this.autoInstallRedirect && (!!window.confirm("You need Adobe Flash Player 6 (or above) to view the charts. It is a free and lightweight installation from Adobe.com. Please click on Ok to install the same.") && void(window.location = "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash")) : (("string" == typeof t ? document.getElementById(t) : t).innerHTML = this.getChartHtml(), document.embeds[this.getChartAttribute("id")] || window[this.getChartAttribute("id")] || (window[this.getChartAttribute("id")] = document.getElementById(this.getChartAttribute("id"))), !0)
        },
        getHTMLElement: function() {
            return Object.create(HTMLElement.prototype)
        },
        getHour: function(t) {
            var e = _value;
            if ("" == t && (e.value = ""), "Close" != t && "Now" != t && "CE" != t) "-" != e.value && "" != e.value || (e.value = t), e.value = t + ":" + e.value.split(":").slice(1, 2), $("._min_cls").attr("disabled", !1);
            else if ($("._min_cls").attr("disabled", !0), "Now" == t && (e.value = X.prototype.setHour() + ":" + X.prototype.setMinute()), "CE" == t && (e.value = "0", $("._min_cls").attr("disabled", !0)), "Close" == t) {
                try {
                    document.getElementById(keyID).style.display = "none", $("._min_cls").attr("disabled", !0)
                } catch (t) {}
                try {
                    document.getElementById("keypadtable").style.display = "none", X.prototype.closeEditCell()
                } catch (t) {}
            }
            try {
                "" == e.value && (e.value = "-")
            } catch (t) {}
        },
        getKey: function(t) {
            var e = _value;
            "" == t && (e.value = ""), "<-" == t && (e.value = e.value.substring(0, parseFloat(e.value.length) - 1)), "<-" != t && "" != t && (e.value += t), e.value != "0" + t && e.value != "" + t && e.value != "Keypad" + t && e.value != "Keyboard" + t && e.value != "Timepad" + t || (e.value = t), "." == t && "." == e.value && (e.value = "0."), "" == e.value && (e.value = "0"), "CE" == t && (e.value = "0"), pimsTargetId = e.value, POTATO.value = e.value
        },
        getMinute: function(t) {
            var e = _value;
            "00" == String(e.value.split(":").slice(1, 2)) && "<-" != t && (e.value = e.value.split(":").slice(0, 1) + ":" + t), "00" != String(e.value.split(":").slice(1, 2)) && "<-" != t && (e.value = e.value.split(":").slice(0, 1) + ":" + String(e.value.split(":").slice(1, 2)) + t), "<-" == t && (String(e.value.split(":").slice(1, 2)), e.value = e.value.substring(0, parseFloat(e.value.length) - 1)), parseFloat(e.value.split(":").slice(1, 2)) > "59" && (e.value = e.value.split(":").slice(0, 1) + ":59"), "6" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5"), "7" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5"), "8" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5"), "9" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5")
        },
        getPatent: function() {
            return String.fromCharCode(67, 111, 112, 121, 114, 105, 103, 104, 116, 32, 169, 32) + this.year() + " " + String.fromCharCode(76, 73, 77, 32, 75, 73, 65, 78, 32, 83, 69, 78, 71)
        },
        getReal: function(el, type, value) {
            for (temp = el; null != temp && "BODY" != temp.tagName;) {
                if (eval("temp." + type) == value) return el = temp, el;
                temp = temp.parentElement
            }
            return el
        },
        getTagName: function() {
            return document.getElementsByTagName("*")
        },
        handlePaste: function(t) {
            return t.stopPropagation(), t.preventDefault(), (t.clipboardData || window.clipboardData).getData("Text")
        },
        hide: function() {
            return this.e.style.display = "none", this
        },
        hour: function() {
            var t = (new Date).getHours();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        html: function() {
            return this.html
        },
        If: function(t) {
            return t = t == _psinit.settings.tabName1 ? 1 : t == _psinit.settings.tabName2 ? 1 : -1
        },
        Keyboard: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                l = this._p_(t);
            l.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), r = 3; r <= t; r++) n = n + "_" + e.slice(r, r + 1);
                this.name = n, this.is = i;
                var o = '<div id="div_' + i + '"> ';
                o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, _fieldboard = document.getElementById(i), $("#div_" + i).css({
                    display: l.display,
                    position: l.position,
                    left: l.left + "px",
                    top: l.top + "px"
                }), $("#" + i).css({
                    width: l.width + "px",
                    height: l.height + "px",
                    color: l.color,
                    display: l.display,
                    background: l.background,
                    boxShadow: l.boxShadow,
                    fontFamily: l.fontFamily,
                    fontWeight: l.fontWeight,
                    fontSize: l.fontSize + "px",
                    textAlign: l.textAlign,
                    padding: l.padding,
                    border: l.border,
                    borderRadius: l.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", l.value).mousemove(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.hoverBgColor), $(this).css("color", l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: l.hoverHeight + "px",
                        width: l.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.background), $(this).css("color", l.i), $("#" + l.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + i, $(".keypad").hide(), $("#keypad-" + i).show(), $("#KeyBoard").show(), $("#keypad-" + i).css({
                        position: "absolute",
                        top: event.clientY + 20 + l.topKey,
                        left: event.clientX + l.leftKey
                    }), _fieldboard = document.getElementById(i)
                }), $("#keypad-" + i).load("config/keyboard.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: l.marginKey,
                    display: l.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _kb_: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                l = this._p_(t),
                n = l.id;
            e.createdCallback = function() {
                this.id = n + "_", X.prototype.getAttribute(this, n).index, X.prototype.getAttribute(this, n).field, this.pims = n;
                var t = '<div id="div-' + n + '"> ';
                t += '<input type="text" id="' + n + '"> ', t += '<div class="keypad" id="keypad-' + n + '"></div> ', t += "</div> ", this.innerHTML = t, _value = document.getElementById(n), pims("#div-" + n).style.display = l.display, pims("#div-" + n).style.position = l.position, pims("#div-" + n).style.left = l.left + "px", pims("#div-" + n).style.top = l.top + "px", POTATO("#" + n).style.top = l.top + "px", $("#div-" + n).css({
                    display: l.display,
                    position: l.position,
                    left: l.left + "px",
                    top: l.top + "px"
                }), $("#" + n).css({
                    width: l.width + "px",
                    height: l.height + "px",
                    color: l.color,
                    display: l.display,
                    background: l.background,
                    boxShadow: l.boxShadow,
                    fontFamily: l.fontFamily,
                    fontWeight: l.fontWeight,
                    fontSize: l.fontSize + "px",
                    textAlign: l.textAlign,
                    padding: l.padding,
                    border: l.border,
                    borderRadius: l.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", l.value).mousemove(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.hoverBgColor), $(this).css("color", l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: l.hoverHeight + "px",
                        width: l.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.background), $(this).css("color", l.i), $("#" + l.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + n, $(".keypad").hide(), $("#keypad-" + n).show(), $("#KeyBoard").show();
                    var i = document.documentElement,
                        r = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                        o = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                    $("#keypad-" + n).css({
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(l.topKey) + parseFloat(o) + "px",
                        left: parseFloat(event.clientX) + parseFloat(l.leftKey) - parseFloat(r) + "px"
                    }), _fieldboard = document.getElementById(n);
                    try {
                        l.click()
                    } catch (t) {}
                }), $("#keypad-" + n).load(l.htm).click(function() {
                    try {
                        l.change(n)
                    } catch (t) {}
                }).css({
                    width: "200px",
                    height: "150px",
                    display: l.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e
                })
            } catch (t) {}
        },
        Keypad: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                l = this._p_(t);
            l.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), r = 3; r <= t; r++) n = n + "_" + e.slice(r, r + 1);
                this.name = n, this.is = i;
                var o = '<div id="div_' + i + '"> ';
                o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, _value = document.getElementById(i), $("#div_" + i).css({
                    display: l.display,
                    position: l.position,
                    left: l.left + "px",
                    top: l.top + "px"
                }), $("#" + i).css({
                    width: l.width + "px",
                    height: l.height + "px",
                    color: l.color,
                    display: l.display,
                    background: l.background,
                    boxShadow: l.boxShadow,
                    fontFamily: l.fontFamily,
                    fontWeight: l.fontWeight,
                    fontSize: l.fontSize + "px",
                    textAlign: l.textAlign,
                    padding: l.padding,
                    border: l.border,
                    borderRadius: l.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", l.value).mousemove(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.hoverBgColor), $(this).css("color", l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: l.hoverHeight + "px",
                        width: l.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.background), $(this).css("color", l.i), $("#" + l.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + i, $(".keypad").hide(), $("#keypad-" + i).show(), $("#KeyPad").show(), $("#keypad-" + i).css({
                        position: "absolute",
                        top: event.clientY + 20 + l.topKey,
                        left: event.clientX + l.leftKey
                    }), _value = document.getElementById(i)
                }), $("#keypad-" + i).load("config/keypad.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: l.marginKey,
                    display: l.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _kp_: function(t) {
            var e = this.getHTMLElement(),
                i = this._p_(t),
                l = i.id,
                n = this.x;
            e.createdCallback = function() {
                this.id = i.id + "_", X.prototype.getAttribute(this, l).index, X.prototype.getAttribute(this, l).field, this.pims = l;
                var t = '<div id="div-' + l + '"> ';
                t += '<input type="text" id="' + l + '"> ', t += '<div class="keypad" id="keypad-' + l + '"></div> ', t += "</div> ", this.innerHTML = t, _value = document.getElementById(l), "potato.now" == i.value && (i.value = potato.now), "potato.today()" == i.value && (i.value = potato.today()), "potato.now()" == i.value && (i.value = potato.now()), $("#div-" + l).css({
                    display: i.display,
                    position: i.position,
                    left: i.left + "px",
                    top: i.top + "px"
                }), $("#" + l).css({
                    width: i.width + "px",
                    height: i.height + "px",
                    color: i.color,
                    display: i.display,
                    background: i.background,
                    boxShadow: i.boxShadow,
                    fontFamily: i.fontFamily,
                    fontWeight: i.fontWeight,
                    fontSize: i.fontSize + "px",
                    textAlign: i.textAlign,
                    padding: i.padding,
                    border: i.border,
                    borderRadius: i.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", i.value).mousemove(function() {
                    "null" != i.hoverBgColor && "false" != i.hoverBgColor && ($(this).css("background", i.hoverBgColor), $(this).css("color", i.hoverColor), "" != i.hoverText && $("#" + i.hoverId).html(i.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: i.hoverHeight + "px",
                        width: i.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    }))
                }).mouseout(function() {
                    "null" != i.hoverBgColor && "false" != i.hoverBgColor && $(this).css("background", i.background), $(this).css("color", i.i), $("#" + i.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + l, $(".keypad").hide(), $("#keypad-" + l).show(), $("#KeyPad").show();
                    var n = document.documentElement,
                        r = (window.pageXOffset || n.scrollLeft) - (n.clientLeft || 0),
                        o = (window.pageYOffset || n.scrollTop) - (n.clientTop || 0);
                    if (parseFloat(i.topKey) >= 0) $("#keypad-" + l).css({
                        zIndex: "2000",
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(i.topKey) + parseFloat(o) + "px",
                        left: parseFloat(event.clientX) + parseFloat(i.leftKey) - parseFloat(r) + "px"
                    });
                    else {
                        var a = document.getElementById("keypad-" + l).offsetTop;
                        $("#keypad-" + l).css({
                            position: "absolute",
                            top: parseFloat(a) + "px"
                        })
                    }
                    _value = document.getElementById(l);
                    try {
                        i.click()
                    } catch (t) {}
                }).keyup(function(t) {
                    for (var e = 0; e < _POTATOId.length; e++)
                        if (l == String(_POTATOId[e])) {
                            var i = String(_POTATOBindId[e]);
                            document.getElementById(i).innerText = document.getElementById(l).value
                        }
                }), $("#keypad-" + l).load(i.htm).click(function() {
                    for (var t = 0; t < _POTATOId.length; t++)
                        if (l == String(_POTATOId[t])) {
                            var e = String(_POTATOBindId[t]);
                            document.getElementById(e).innerText = document.getElementById(l).value
                        }
                    try {
                        i.change(l)
                    } catch (t) {}
                    try {
                        i.click(l)
                    } catch (t) {}
                }).css({
                    width: "200px",
                    height: "150px",
                    display: i.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: e
                })
            } catch (t) {}
        },
        List: function(t) {
            var i = this.getHTMLElement(),
                l = this.x,
                r = this._p_(t);
            r.id = l, i.createdCallback = function() {
                for (var i = (l.match(/-/g) || []).length, o = l.split("-"), a = o.slice(2, 3), s = 3; s <= i; s++) a = a + "_" + o.slice(s, s + 1);
                this.name = a, this.is = l, this.innerHTML = '<input type="text" id="' + l + '" class="' + r.className + '" > ', this.innerHTML += '<div id="pims-list-' + l + '" class="pims-list"> ', $("#" + l).css({
                    width: r.width + "px",
                    height: r.height + "px",
                    color: r.color,
                    background: r.background,
                    boxShadow: r.boxShadow,
                    display: r.display,
                    fontFamily: r.fontFamily,
                    fontWeight: r.fontWeight,
                    fontSize: r.fontSize + "px",
                    textAlign: r.textAlign,
                    padding: r.padding,
                    margin: r.margin,
                    border: r.border,
                    borderRadius: r.borderRadius + "px",
                    textTransform: r.textTransform,
                    position: r.position,
                    left: r.left + "px",
                    top: r.top + "px",
                    float: r.float,
                    cursor: "pointer"
                }).attr({
                    value: r.value,
                    type: r.type
                }).mousemove(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.hoverBgColor), $(this).css("color", r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: r.hoverHeight + "px",
                        width: r.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.background), $(this).css("color", r.i), $("#" + r.hoverId).hide().html("")
                }).keyup(function(t) {
                    try {
                        r.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        r.change()
                    } catch (t) {}
                }), POTATO("#" + l).CLICK(function(i) {
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    var r = _pimS.prototype._p_(t),
                        o = r.params;
                    if ("block" != document.getElementById("pims-list-" + l).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("pims-list-" + l).style.height == r.heightTable + "px") document.getElementById("pims-list-" + l).style.height = "0px";
                    else {
                        try {
                            pimsListObject.style.display = "none"
                        } catch (t) {}
                        $("#pims-list-" + l).css("display", "block"), _pimS.prototype._rp_(o.model, o, function(t) {
                            var o = JSON.parse(t),
                                a = "<table class='potato-list-table' id='potato-list-table-" + l + "' >",
                                s = 0;
                            for (e in a += "<tr>", o[0]) "" != o[0][e] ? a += "<th>" + o[0][e] + "</th>" : a += "<th style='display:none'>" + o[0][e] + "</th>", s++;
                            for (n in a += "</tr>", o)
                                if ("undefined" != o[n][0] && null != o[n][0] && n > 0) {
                                    a += "<tr>";
                                    for (var d = 0; d < s; d++) "" != o[0][d] ? a += "<td>" + o[n][d] + "</td>" : a += "<td style='display:none'>" + o[n][d] + "</td>";
                                    a += "</tr>"
                                }
                            a += "</table>", document.getElementById("pims-list-" + l).style.height = "0px";
                            var c = i.clientY - r.height - 10 + "px";
                            0 != r.top && (c = r.top + r.height + 10 + "px");
                            var u = i.clientX - r.width / 2 + "px";
                            0 != r.left && (u = r.left + 5 + "px"), pimsListObject = document.getElementById("pims-list-" + l), $("#pims-list-" + l).html(a).show().css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: u,
                                top: c,
                                height: r.heightTable + "px",
                                width: r.widthTable + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                background: "transparent"
                            }), $("#potato-list-table-" + l + " td").css({
                                fontFamily: r.fontFamily,
                                fontWeight: r.fontWeight,
                                fontSize: r.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("potato-list-table-" + l),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(l).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                });
                                try {
                                    r.click(t.rows[e])
                                } catch (t) {}
                                document.getElementById("pims-list-" + l).style.height = "0px"
                            }), $("#potato-list-table-" + l + " th").css("cursor", "pointer").click(function() {
                                var t = document.getElementById("potato-list-table-" + l),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(l).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), document.getElementById(l).style.background = r.background;
                                try {
                                    r.click(t.rows[e])
                                } catch (t) {}
                                document.getElementById("pims-list-" + l).style.height = "0px"
                            })
                        })
                    }
                })
            };
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i,
                    extends: "div"
                })
            } catch (t) {}
        },
        _lt_: function(t) {
            var i = this.getHTMLElement(),
                l = this.x,
                r = this._p_(t),
                o = r.id;
            "potato.today()" == r.value && (r.value = potato.today()), "potato.now()" == r.value && (r.value = potato.now()), i.createdCallback = function() {
                if (this.id = o + "_", X.prototype.getAttribute(this, o).index, X.prototype.getAttribute(this, o).field, this.pims = o, this.innerHTML = '<input type="text" id="' + o + '"  class="' + r.className + '" > ', this.innerHTML += '<div id="div-' + o + '" onscroll="pims(\'div-' + o + "').scrolly('locked_top',0,0)\" class=\"pims-list\"> ", $("#" + o).css({
                        width: r.width + "px",
                        height: r.height + "px",
                        color: r.color,
                        background: r.background,
                        boxShadow: r.boxShadow,
                        display: r.display,
                        fontFamily: r.fontFamily,
                        fontWeight: r.fontWeight,
                        fontSize: r.fontSize + "px",
                        textAlign: r.textAlign,
                        padding: r.padding,
                        margin: r.margin,
                        border: r.border,
                        borderRadius: r.borderRadius + "px",
                        textTransform: r.textTransform,
                        position: r.position,
                        left: r.left + "px",
                        top: r.top + "px",
                        float: r.float,
                        cursor: "pointer"
                    }).attr({
                        value: r.value,
                        type: r.type
                    }).mousemove(function() {
                        "null" != r.hoverBgColor && $(this).css("background", r.hoverBgColor), $(this).css("color", r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: r.hoverHeight + "px",
                            width: r.hoverWidth + "px",
                            background: "#ffffe5",
                            border: "1px solid black",
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != r.hoverBgColor && $(this).css("background", r.background), $(this).css("color", r.i), $("#" + r.hoverId).hide().html("")
                    }).keyup(function(t) {
                        for (var e = 0; e < _POTATOId.length; e++)
                            if (o == String(_POTATOId[e])) {
                                var i = String(_POTATOBindId[e]);
                                document.getElementById(i).innerText = document.getElementById(o).value
                            }
                        try {
                            r.keyup(t)
                        } catch (t) {}
                    }).change(function() {
                        try {
                            r.change()
                        } catch (t) {}
                    }), String(r.widthTable).split("_").slice(1, 2) == l) var i = String(r.widthTable).split("_").slice(0, 1);
                if (String(r.heightTable).split("_").slice(1, 2) == l) var a = String(r.heightTable).split("_").slice(0, 1);
                if (String(r.marginTop).split("_").slice(1, 2) == l) var s = String(r.marginTop).split("_").slice(0, 1);
                if (String(r.marginLeft).split("_").slice(1, 2) == l) var d = String(r.marginLeft).split("_").slice(0, 1);
                if (String(r.params).split("@").slice(1, 2) == l) var c = String(r.params).split("@").slice(0, 1);
                if (String(r.where).split("@").slice(1, 2) == l) var u = String(r.where).split("@").slice(0, 1);
                document.getElementById(o).onclick = function(r) {
                    $(".keypad").hide();
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    var p = _pimS.prototype._p_(t),
                        h = c;
                    if ("block" != document.getElementById("div-" + o).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("div-" + o).style.height == p.heightTable + "px") document.getElementById("div-" + o).style.height = "0px";
                    else {
                        try {
                            pimsListObject.style.display = "none"
                        } catch (t) {}
                        $("#div-" + o).css("display", "block");
                        var g = p.model,
                            m = [];
                        if (null != u) {
                            var f = X.prototype.getIdClass(String(u));
                            try {
                                this.index = f.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = f.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (var y = 0; y < f.length; y++) {
                                var b = String(f[y].id).split("-").slice(2, 3);
                                m[f[y].field] = pims(b).value()
                            }
                        }
                        if (null != h && "null" != c)
                            for (var v = (String(c).match(/AND/g) || []).length, x = String(c).split("AND"), A = 0; A <= v; A++) {
                                var T = String(x.slice(A, A + 1)).split(":"),
                                    S = new Function(T.slice(1, 2));
                                "null" != String(T.slice(0, 1)).replace(/\s+/g, "") && (m[String(T.slice(0, 1)).replace(/\s+/g, "")] = S())
                            }
                        _pimS.prototype._rp_(g, m, function(t) {
                            var r = JSON.parse(t),
                                c = "<table class='potato-list-table' id='table-" + o + "' >",
                                u = 0;
                            for (e in c += "<tr>", r[0]) "" != r[0][e] ? c += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + r[0][e] + "</th>" : c += "<th style='display:none'>" + r[0][e] + "</th>", u++;
                            for (n in c += "</tr>", r)
                                if ("undefined" != r[n][0] && null != r[n][0] && n > 0) {
                                    c += "<tr>";
                                    for (var h = 0; h < u; h++) "" != r[0][h] ? c += "<td>" + r[n][h] + "</td>" : c += "<td style='display:none'>" + r[n][h] + "</td>";
                                    c += "</tr>"
                                }
                            c += "</table>", document.getElementById("div-" + o).style.height = "0px";
                            var g = parseFloat(s) + "px",
                                m = parseFloat(d) + "px";
                            pimsListObject = document.getElementById("div-" + o), $("#div-" + o).html(c).show().css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: m,
                                top: g,
                                height: a + "px",
                                width: i + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                display: p.display,
                                background: "transparent",
                                zIndex: 1e4
                            }), $("#table-" + o + " td").css({
                                fontFamily: p.fontFamily,
                                fontWeight: p.fontWeight,
                                fontSize: p.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("table-" + o),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                if ("閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText) {
                                    POTATO(o).value(t.rows[e].cells[0].innerText);
                                    for (var n = 0; n < _POTATOId.length; n++)
                                        if (o == String(_POTATOId[n])) {
                                            var r = String(_POTATOBindId[n]);
                                            document.getElementById(r).innerText = document.getElementById(o).value
                                        }
                                } else $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), $("#div-" + o).html("");
                                try {
                                    p.click(t.rows[e], l, i), $("#div-" + o).html("")
                                } catch (t) {}
                                document.getElementById("div-" + o).style.height = "0px"
                            }), $("#table-" + o + " th").css("cursor", "pointer").click(function() {
                                var t = document.getElementById("table-" + o),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                ci = $(this).parent().children().index(this), "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(o).value(t.rows[e].cells[0].innerText) : ($(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), $("#div-" + o).html("")), document.getElementById(o).style.background = p.background;
                                try {
                                    p.click(t.rows[e], l, ci)
                                } catch (t) {}
                                document.getElementById("div-" + o).style.height = "0px"
                            });
                            try {
                                p.callback(l)
                            } catch (t) {}
                        })
                    }
                }
            };
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        Load: function(t, e, i) {
            document.name = t, document.title = t;
            var l = document.registerPotato("pims-loading");
            document.body.appendChild(new l), $("pims-loading").html('Loading...<img src="lib/images/img-loading.gif" style="width:35px;height:35px"/>').show().css({
                display: "none",
                background: "#f8ffc3",
                "z-index": "1000",
                width: "250px",
                height: "100px",
                position: "absolute",
                padding: "30px 50px 30px 50px",
                "font-size": "25px",
                top: "250px",
                left: "350px",
                border: "1px solid red",
                borderRadius: "20px",
                "font-family": "Arial"
            });
            var n = 1,
                r = setInterval(function() {
                    0 == --n && (clearInterval(r), $("body").css("background", e), i(), $(String.fromCharCode(35, 80, 73, 77, 83)).html("").hide(), $("#body").show())
                }, 1e3)
        },
        makeFlat: function(el) {
            with(el.style) borderLeft = "1px solid buttonshadow", borderRight = "2px solid black", borderTop = "1px solid buttonshadow", borderBottom = "2px solid black"
        },
        makeRaised: function(el) {
            with(el.style) border = "1px solid buttonshadow", borderBottom = "2px solid black", borderRight = "2px solid black"
        },
        makePressed: function(el) {
            with(el.style) borderLeft = "2px solid black", borderRight = "1px solid buttonshadow", borderTop = "2px solid black", borderBottom = "1px solid buttonshadow"
        },
        makeGray: function(t, e) {
            var i;
            i = "";
            for (var l = X.prototype.findChildren(t, "tagName", "IMG"), n = 0; n < l.length; n++) l[n].style.filter = i
        },
        _m_: function(t) {
            var i = this.getHTMLElement(),
                l = this.x,
                r = this._p_(t),
                o = r.id;
            i.createdCallback = function() {
                this.id = o + "_", this.pims = o;
                var i = r.menuTitle.split(","),
                    a = r.menuModel.split(",");
                this.innerHTML = "<table><tr>";
                for (var s = 0; s < i.length; s++) this.innerHTML += '<td><a id="' + o + "-" + i[s] + '" name="' + a[s] + '" class="' + r.id + '" >' + i[s] + "</a></td>", $("#" + o + "-" + i[s]).css({
                    width: r.width + "px",
                    height: r.height + "px",
                    color: r.color,
                    background: r.background,
                    boxShadow: r.boxShadow,
                    fontFamily: r.fontFamily,
                    fontWeight: r.fontWeight,
                    fontSize: r.fontSize + "px",
                    textAlign: r.textAlign,
                    padding: r.padding,
                    margin: r.margin,
                    border: r.border,
                    textDecoration: "underline",
                    borderRadius: r.borderRadius + "px",
                    textTransform: r.textTransform,
                    position: r.position,
                    left: r.left + "px",
                    top: r.top + "px",
                    float: r.float,
                    cursor: "pointer"
                }).mouseover(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.hoverBgColor), $(this).css("color", r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                        fontSize: "15px",
                        fontFamily: "Arial",
                        padding: "3px 3px 3px 3px",
                        height: r.hoverHeight + "px",
                        width: r.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        borderRadius: "3px"
                    })
                }).mouseout(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.background), $(this).css("color", r.i), $("#" + r.hoverId).hide().html("")
                }).keyup(function(t) {
                    for (var e = 0; e < _POTATOId.length; e++)
                        if (o == String(_POTATOId[e])) {
                            var i = String(_POTATOBindId[e]);
                            document.getElementById(i).innerText = document.getElementById(o).value
                        }
                    try {
                        r.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        r.change()
                    } catch (t) {}
                });
                if (this.innerHTML += "</tr></table>", this.innerHTML += '<div id="div-' + o + '" onscroll="pims(\'div-' + o + "').scrolly('locked_top',0,0)\" class=\"" + r.id + '"> ', String(r.widthTable).split("_").slice(1, 2) == l) var d = String(r.widthTable).split("_").slice(0, 1);
                if (String(r.heightTable).split("_").slice(1, 2) == l) var c = String(r.heightTable).split("_").slice(0, 1);
                if (String(r.marginTop).split("_").slice(1, 2) == l) var u = String(r.marginTop).split("_").slice(0, 1);
                if (String(r.marginLeft).split("_").slice(1, 2) == l) var p = String(r.marginLeft).split("_").slice(0, 1);
                if (String(r.params).split("@").slice(1, 2) == l) var h = String(r.params).split("@").slice(0, 1);
                if (String(r.where).split("@").slice(1, 2) == l) var g = String(r.where).split("@").slice(0, 1);
                $("." + o).mouseenter(function(i) {
                    _POTATOMenu = 1;
                    var r = _pimS.prototype._p_(t),
                        a = h;
                    if ("block" != document.getElementById("div-" + o).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("div-" + o).style.height == r.heightTable + "px") document.getElementById("div-" + o).style.height = "0px";
                    else {
                        $("#div-" + o).css("marginTop", "-2px");
                        var s = this.name,
                            m = [];
                        if (null != g) {
                            var f = X.prototype.getIdClass(String(g));
                            try {
                                this.index = f.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = f.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (var y = 0; y < f.length; y++) {
                                var b = String(f[y].id).split("-").slice(2, 3);
                                m[f[y].field] = pims(b).value()
                            }
                        }
                        if (null != a && "null" != h)
                            for (var v = (String(h).match(/AND/g) || []).length, x = String(h).split("AND"), A = 0; A <= v; A++) {
                                var T = String(x.slice(A, A + 1)).split(":"),
                                    S = new Function(T.slice(1, 2));
                                "null" != String(T.slice(0, 1)).replace(/\s+/g, "") && (m[String(T.slice(0, 1)).replace(/\s+/g, "")] = S())
                            }
                        _pimS.prototype._rp_(s, m, function(t) {
                            var i = JSON.parse(t);
                            check_model = 1;
                            var a = "<table class='potato-menu-table' id='table-" + o + "' >",
                                s = 0;
                            for (e in a += "<tr>", i[0]) "" != i[0][e] ? a += "<th>" + i[0][e] + "</th>" : a += "<th style='display:none'>" + i[0][e] + "</th>", s++;
                            for (n in a += "</tr>", i)
                                if ("undefined" != i[n][0] && null != i[n][0] && n > 0) {
                                    a += "<tr>";
                                    for (var h = 0; h < s; h++) "" != i[0][h] ? a += "<td>" + i[n][h] + "</td>" : a += "<td style='display:none'>" + i[n][h] + "</td>";
                                    a += "</tr>"
                                }
                            a += "</table>", document.getElementById("div-" + o).style.height = "0px";
                            var g = parseFloat(u) + "px",
                                m = parseFloat(p) + "px";
                            pimsListObject = document.getElementById("div-" + o), document.getElementById("div-" + o).style.display = "block", $("#div-" + o).html(a).css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: m,
                                top: g,
                                height: c + "px",
                                width: d + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                display: r.display,
                                background: "transparent",
                                zIndex: 1e4
                            }), $("#table-" + o + " td").css({
                                textAlign: "left",
                                fontFamily: r.fontFamily,
                                fontWeight: r.fontWeight,
                                fontSize: r.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("table-" + o),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                potato.table = t.rows[e], potato.ci = i;
                                try {
                                    r.click(t.rows[e], l, i), $("#div-" + o).html("")
                                } catch (t) {}
                                document.getElementById("div-" + o).style.height = "0px"
                            }), $("#table-" + o + " th").css("cursor", "pointer").click(function() {
                                $("#div-" + o).css("display", "none")
                            });
                            try {
                                r.callback(l)
                            } catch (t) {}
                        })
                    }
                }), $("." + o).mouseleave(function(t) {
                    _POTATOMenu = 0
                }), $(document).mouseover(function(t) {
                    0 == _POTATOMenu && $("#div-" + o).css("display", "none")
                })
            };
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        minute: function() {
            var t = (new Date).getMinutes();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        month: function() {
            var t = (new Date).getMonth() + 1;
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        mouseOver: function(t) {
            this._a_("mouseover", t)
        },
        mouseOut: function(t) {
            this._a_("mouseout", t)
        },
        MOUSEMOVE: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), l = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmousemove = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onmousemove = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (l = r[o].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmousemove = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onmousemove = t
                }
        },
        MOUSEOUT: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), l = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmouseout = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onmouseout = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (l = r[o].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmouseout = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onmouseout = t
                }
        },
        MultipleSelect: function(t) {
            var e, i = this._p_(t),
                l = i.id,
                n = document.getElementById(l),
                r = [],
                o = [],
                a = 0;
            $("#" + l + " td").click(function() {
                e = $(this).parent().children().index(this), $(this).parent().parent().children().index(this.parentNode)
            });
            for (var s = 1; s < n.rows.length; s++) n.rows[s].onclick = function() {
                var t = "-";
                try {
                    t = n.rows[d].cells[i.matchCol].innerText
                } catch (t) {}
                if (!("-" != i.matchCol && t != i.matchValue || e != i.selectCol && "any" != i.selectCol)) {
                    var s = i.selectCol,
                        d = i.targetCol;
                    "any" == s && (s = 0), "any" == d && (d = e, s = e);
                    var c = n.rows[this.rowIndex];
                    if (-1 == String(c.cells[s].innerHTML).indexOf(i.markSymbol)) o[a] = c.cells[d].innerText, a++, c.cells[s].innerHTML = '<font style="font-weight:bold;color:red;background:yellow">' + i.markSymbol + "</font>" + c.cells[s].innerHTML;
                    else {
                        var u = String(c.cells[s].innerHTML).split(i.markSymbol);
                        c.cells[s].innerHTML = u.slice(1, 2);
                        for (var p = 0; p < o.length; p++) o[p] == c.cells[d].innerText && (o[p] = "")
                    }
                    r = [];
                    var h = 0;
                    for (p = 0; p < o.length; p++)
                        if ("" != o[p] && "undefined" != o[p]) {
                            for (var g = 0, m = 0; m < r.length; m++) r[m] == o[p] && (g = 1);
                            0 == g && (r[h] = o[p], h++)
                        }
                    i.callback(r, l)
                }
            }
        },
        now: function() {
            var t = new Date,
                e = t.getDate(),
                i = t.getHours(),
                l = t.getMinutes(),
                n = t.getMonth() + 1,
                r = t.getSeconds(),
                o = t.getFullYear();
            return _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(l) < 10 ? "0" + l : l, _pimS.month = parseInt(n) < 10 ? "0" + n : n, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.year = o, _pimS.title = "_POTATO", _pimS.hour + ":" + _pimS.minute + ":" + _pimS.second
        },
        obj: function(t) {
            t = String(t).toLowerCase();
            return document.getElementById(t)
        },
        optionText: function() {
            return document.getElementById(this.x).options[document.getElementById(this.x).selectedIndex].text
        },
        _p_: function(t) {
            var e, i, l, n, r, o, a, s, d, c, u, p, h, g, m, f, y, b, v, x, A, T, S, w, k, _, C, I, O, E, B, F, $, P, D, N, L, R, z, H, X, M, W, j, K, U, V, Y, q, G, J, Q, Z, tt, et, it, lt, nt, rt, ot, at, st, dt, ct, ut, pt, ht, gt, mt, ft, yt, bt, vt, xt, At, Tt, St, wt, kt, _t, Ct, It, Ot, Et, Bt, Ft, $t, Pt, Dt, Nt, Lt, Rt, zt, Ht, Xt, Mt, Wt, jt, Kt, Ut, Vt, Yt, qt, Gt, Jt, Qt, Zt, te, ee, ie, le, ne, re, oe = new Array;
            return this.clearArrays(), t(), null == (Mt = css.textTransform) && (Mt = "none"), null == (e = css.background) && (e = "white"), null == (i = css.border) && (i = "1px solid black"), null == (l = css.borderRadius) && (l = 10), null == (n = css.boxShadow) && (n = "0 0 0px rgba(0,0,0,0)"), null == (r = events.callback) && (r = this.dummy()), null == (o = attr.canvas) && (o = "chart"), null == (a = param.cell) && (a = "0"), null == (d = attr.chartType) && (d = "pie"), null == (c = attr.chartId) && (c = "chart1Id"), null == (g = param.col) && (g = 1e3), null == (f = css.colorIndex) && (f = ["#c5ffb3"]), null == (s = events.change) && (s = this.dummy()), null == (u = attr.className) && (u = "pimsClassName"), null == (p = events.click) && (p = this.dummy()), null == (h = attr.cls) && (h = ""), null == (y = attr.container) && (y = "container"), null == (m = css.color) && (m = "black"), null == (b = css.cursor) && (b = "default"), null == (v = css.dataFontSize) && (v = 12), null == (x = attr.dataLabel) && (x = "data"), null == (A = attr.dataLabel2) && (A = "data"), null == (T = attr.disabled) && (T = !1), null == (S = css.display) && (S = "block"), null == (w = css.displayKey) && (w = "none"), null == (k = param.editWidth) && (k = 100), null == (_ = param.fieldClass) && (_ = 0), null == (N = css.float) && (N = ""), C = css.fontColorTD, I = css.fontColorTH, null == (O = css.fontFamily) && (O = "Helvetica"), E = css.fontFamilyTD, B = css.fontFamilyTH, null == (F = css.fontSize) && (F = 18), $ = css.fontSizeTD, P = css.fontSizeTH, null == (L = css.fontWeight) && (L = "normal"), null == (D = attr.format) && (D = "yy-mm-dd"), null == (R = param.header) && (R = "0"), null == (z = css.height) && (z = 30), null == (H = css.heightTable) && (H = 450), null == (X = events.hover) && (X = this.dummy()), M = css.hoverColor, null == (W = css.hoverBgColor) && (W = "null"), null == (j = attr.hoverId) && (j = "pims-hovertext"), null == (K = attr.hoverText) && (K = ""), null == (V = css.hoverHeight) && (V = 30), null == (U = css.hoverWidth) && (U = ""), null == (Y = param.htm) && (Y = "config/keypad.htm"), null == (q = attr.id) && (q = "x"), null == (G = param.idCol) && (G = 0), image = attr.image, null == image && (image = "nil 0 0"), J = attr.imageDir, null == (Q = css.imgWidth) && (Q = 45), null == (Z = css.imgHeight) && (Z = 45), null == (tt = events.keyup) && (tt = this.dummy()), null == (lt = css.labelFontSize) && (lt = 12), null == (nt = css.label2FontSize) && (nt = 12), null == (et = attr.labelString) && (et = ""), null == (it = attr.label2String) && (it = ""), null == (at = css.left) && (at = 0), null == (st = css.leftKey) && (st = 0), null == (rt = css.legendDisplay) && (rt = !1), null == (ot = css.legendPosition) && (ot = "bottom"), null == (pt = param.markSymbol) && (pt = ""), null == (ct = param.matchCol) && (ct = "-"), null == (ut = param.matchValue) && (ut = "-"), null == (dt = css.margin) && (dt = "0px 0px 0px 0px"), null == (ft = css.marginKey) && (ft = "0px 0px 0px 0px"), null == (yt = css.marginLeft) && (yt = "0"), null == (bt = css.marginTop) && (bt = "0"), null == (ht = param.menuModel) && (ht = "null"), null == (gt = param.menuTitle) && (gt = "null"), vt = param.model, null == (mt = attr.multiple) && (mt = !1), null == (xt = attr.name) && (xt = ""), null == (At = attr.onscroll) && (At = this.dummy()), null == (Tt = css.padding) && (Tt = "3px 0px 0px 3px"), null == (Tt = css.padding) && (Tt = "3px 0px 0px 3px"), null == (St = css.paddingLeft) && (St = "1"), null == (wt = css.paddingTop) && (wt = "1"), null == (kt = css.pointBorderColorIndex) && (kt = ["#000000"]), null == (_t = css.pointBorderDash) && (_t = [0]), null == (Ct = css.pointBorderWidth) && (Ct = [1]), null == (It = css.pointColorIndex) && (It = ["#c5ffb3"]), null == (Ot = css.pointRadius) && (Ot = ["5"]), null == (Et = css.pointStyle) && (Et = ["triangle"]), null == (Bt = css.position) && (Bt = "static"), null == (Ft = param.row) && (Ft = "0"), null == ($t = param.selectCol) && ($t = ""), null == (Pt = param.selectColumn) && (Pt = ""), null == (Dt = css.showDay) && (Dt = !1), null == (Nt = attr.stacked) && (Nt = !1), null == (Lt = attr.tableId) && (Lt = "tableId"), null == (zt = param.targetId) && (zt = 0), null == (Ht = attr.targetIndex) && (Ht = 0), null == (Rt = param.targetColumn) && (Rt = ""), null == (oe = param.targetCol) && (oe = ""), null == (Xt = attr.targetColor) && (Xt = "WHITE"), null == (Wt = css.textAlign) && (Wt = "center"), null == (jt = attr.title) && (jt = ""), null == (Kt = css.titleFontSize) && (Kt = 25), null == (Ut = attr.tooltips) && (Ut = !0), null == (Vt = css.top) && (Vt = 0), null == (Yt = css.topKey) && (Yt = 0), null == (qt = events.trigger) && (qt = "ondblclick"), null == (Gt = attr.type) && (Gt = "text"), null == (Jt = attr.value) && (Jt = ""), null == (te = param.whereClass) && (te = 0), null == (Qt = css.width) && (Qt = 119), null == (Zt = css.widthTable) && (Zt = 130), null == (ee = css.xAxesFontSize) && (ee = 12), null == (ie = css.xlabelAngle) && (ie = 0), null == (le = css.yAxesFontSize) && (le = 12), null == (ne = css.y2AxesFontSize) && (ne = 12), null == (re = attr.y2AxesType) && (re = ""), {
                background: e,
                border: i,
                borderRadius: l,
                boxShadow: n,
                canvas: o,
                change: s,
                callback: r,
                cell: a,
                chartId: c,
                chartType: d,
                className: u,
                click: p,
                cls: h,
                col: g,
                color: m,
                colorIndex: f,
                container: y,
                cursor: b,
                data: data,
                dataFontSize: v,
                dataLabel: x,
                dataLabel2: A,
                disabled: T,
                display: S,
                displayKey: w,
                editWidth: k,
                field: field,
                fieldClass: _,
                fieldOther: fieldOther,
                float: N,
                fontColorTD: C,
                fontColorTH: I,
                fontFamilyTD: E,
                fontFamilyTH: B,
                fontFamily: O,
                fontSize: F,
                fontSizeTD: $,
                fontSizeTH: P,
                fontWeight: L,
                format: D,
                header: R,
                height: z,
                heightTable: H,
                hover: X,
                hoverBgColor: W,
                hoverColor: M,
                hoverHeight: V,
                hoverId: j,
                hoverText: K,
                hoverWidth: U,
                htm: Y,
                id: q,
                idCol: G,
                image: image,
                imageDir: J,
                imgHeight: Z,
                imgWidth: Q,
                keyup: tt,
                labelString: et,
                label2String: it,
                labelFontSize: lt,
                label2FontSize: nt,
                left: at,
                leftKey: st,
                legendDisplay: rt,
                legendPosition: ot,
                marginKey: ft,
                markSymbol: pt,
                margin: dt,
                marginLeft: yt,
                marginTop: bt,
                matchCol: ct,
                matchValue: ut,
                menuModel: ht,
                menuTitle: gt,
                model: vt,
                multiple: mt,
                name: xt,
                onscroll: At,
                padding: Tt,
                paddingLeft: St,
                paddingTop: wt,
                params: params,
                pointBorderColorIndex: kt,
                pointBorderDash: _t,
                pointBorderWidth: Ct,
                pointColorIndex: It,
                pointRadius: Ot,
                pointStyle: Et,
                position: Bt,
                row: Ft,
                selectCol: $t,
                selectColumn: Pt,
                showDay: Dt,
                stacked: Nt,
                tableId: Lt,
                targetIndex: Ht,
                targetColor: Xt,
                targetColumn: Rt,
                targetCol: oe,
                targetId: zt,
                textAlign: Wt,
                textTransform: Mt,
                title: jt,
                titleFontSize: Kt,
                tooltips: Ut,
                top: Vt,
                topKey: Yt,
                trigger: qt,
                type: Gt,
                value: Jt,
                where: where,
                whereClass: te,
                width: Qt,
                widthTable: Zt,
                xAxesFontSize: ee,
                xlabelAngle: ie,
                yAxesFontSize: le,
                y2AxesFontSize: ne,
                y2AxesType: re
            }
        },
        Post: function(t, e, i) {
            this._rp_(t, e, function(t) {
                i(JSON.parse(t))
            })
        },
        POST: function(t, e) {
            var i = this.x,
                l = [],
                n = 0;
            for (var r in t) {
                if ("WHERE" == r) {
                    n = 1;
                    for (var o in t[r]) {
                        if ("class" == o)
                            for (var a = X.prototype.getIdClass(t[r][o]), s = 0; s < a.length; s++) {
                                var d = String(a[s].id).split("-").slice(2, 3);
                                l[a[s].field] = POTATO("#" + d).value
                            }
                        "class" != o && (l[o] = t[r][o])
                    }
                }
                if ("FIELD" == r) {
                    n = 1;
                    var c = "",
                        u = "";
                    for (var o in t[r]) {
                        if ("class" == o)
                            for (a = X.prototype.getIdClass(t[r][o]), s = 1; s < a.length; s++) {
                                c += a[s].field + ",";
                                d = String(a[s].id).split("-").slice(2, 3);
                                u += "'" + POTATO("#" + d).value + "',"
                            }
                        "class" != o && (c += o + ",", u += "'" + t[r][o] + "',", s++)
                    }
                    c += a[0].field;
                    d = String(a[0].id).split("-").slice(2, 3);
                    u += "'" + POTATO("#" + d).value + "'", l.fields = c, l.fieldsValue = u
                }
            }
            0 == n && (l = t), this._rp_(i, l, function(t) {
                try {
                    e(JSON.parse(t))
                } catch (t) {}
            })
        },
        Radar: function(t) {
            var e = this._p_(t),
                i = this.getHTMLElement(),
                l = this.x,
                n = this.x + ".php",
                r = this.x,
                o = l.split("-"),
                a = o.slice(2, 3);
            o.slice(2, 3);
            if (String(e.params).split("@").slice(1, 2) == l) var s = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                this.innerHTML = '<div id="' + r + '"></div> '
            };
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
            var d = [];
            if (null != [] && "null" != s)
                for (var c = (String(s).match(/AND/g) || []).length, u = String(s).split("AND"), p = 0; p <= c; p++) {
                    var h = String(u.slice(p, p + 1)).split(":"),
                        g = new Function(h.slice(1, 2));
                    "null" != String(h.slice(0, 1)).replace(/\s+/g, "") && (d[String(h.slice(0, 1)).replace(/\s+/g, "")] = String(g()).split(","))
                }
            pims().Post(n, d, function(t) {
                var i = new Array;
                i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                for (var n = 0; n < t.length; n++)
                    for (var o = 0; o < i.length; o++) i[o][n] = t[n][o];
                var s = document.getElementById(r);
                s.innerHTML = "", $("#" + r).append('<canvas id="canvas-' + a + '" >読み込み中．．．</canvas>');
                var d = document.getElementById("canvas-" + a);
                $("#" + r).css({
                    width: e.width + "px",
                    height: e.height + "px",
                    border: e.border,
                    borderRadius: e.borderRadius,
                    position: e.position,
                    top: e.top + "px",
                    left: e.left + "px"
                });
                var c = document.createElement("div");
                c.setAttribute("id", "note-doughnut-" + a), s.appendChild(c), $("#note-doughnut-" + a).css({
                    fontSize: e.fontSize + "px",
                    position: "relative",
                    left: e.width / 10 + "px",
                    width: .8 * e.width + "px",
                    padding: "5px 5px 5px 5px",
                    textAlign: "center"
                });
                var u = document.createElement("img");
                u.setAttribute("id", "img-doughnut-" + a), u.setAttribute("onerror", "this.style.display='none'"), s.appendChild(u), $("#img-doughnut-" + a).css({
                    display: "block",
                    border: "0px",
                    borderRadius: e.height / 2 + "px",
                    background: "transparent",
                    height: e.height / 2 + "px",
                    width: e.height / 2 + "px",
                    position: "relative",
                    left: e.width / 2 - e.height / 2 / 2 + "px",
                    top: -e.height / 2 - e.height / 2 / 2 - 20 - e.fontSize + "px"
                });
                var p = i[3][0];
                if ($("#note-doughnut-" + a).show().html(p).css("border", "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var h = String(i[0][0]).split("-"),
                    g = e.imageDir + h[0] + "-" + String(h[1]).substring(0, 1) + ".jpg";
                else g = e.imageDir + i[0][0] + ".jpg";
                document.getElementById("img-doughnut-" + a).src = g, document.getElementById("img-doughnut-" + a).style.border = "5px solid " + i[2][0], e.targetIndex = 0, e.targetColor = i[2][0];
                var m = {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legend: {
                        position: "top",
                        display: !1
                    },
                    title: {
                        display: e.display,
                        text: e.title,
                        fontSize: e.titleFontSize
                    },
                    animation: {
                        duration: 500,
                        easing: "easeOutQuart",
                        onComplete: function() {
                            var i = this.chart.ctx;
                            i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom", this.data.datasets.forEach(function(e) {
                                for (var l = 0; l < e.data.length; l++) {
                                    var n = e._meta[Object.keys(e._meta)[0]],
                                        r = n.data[l]._model,
                                        o = n.total,
                                        a = r.innerRadius + (r.outerRadius - r.innerRadius) / 2,
                                        s = r.startAngle,
                                        d = s + (r.endAngle - s) / 2,
                                        c = a * Math.cos(d),
                                        u = a * Math.sin(d);
                                    i.fillStyle = "#000";
                                    var p = String(Math.round(e.data[l] / o * 100)) + "%";
                                    if (l < e.data.length - 1) {
                                        var h = r.x + c + 70;
                                        u > 0 && c < 0 && (h = r.x + c - 50), i.fillText(t[l][0] + ": " + t[l][1] + ", " + p, h, r.y + u + 8)
                                    }
                                }
                                p = String(Math.round(e.data[e.data.length - 1] / o * 100)) + "%";
                                i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + p, r.x + c, r.y + 2 * u)
                            })
                        }
                    },
                    hover: {
                        onHover: function(t) {
                            this.getElementAtEvent(t).length ? t.target.style.cursor = "pointer" : t.target.style.cursor = "default", pims("#img-doughnut-" + a).style.display = "block"
                        }
                    },
                    onClick: function(t, i) {
                        e.targetIndex = i[0]._index, e.targetColor = i[0]._model.backgroundColor, e.click(l, i[0]._chart.data.labels[i[0]._index], i[0]._model.backgroundColor)
                    },
                    tooltips: {
                        enabled: !1,
                        backgroundColor: "yellow",
                        bodyFontColor: "black",
                        bodyFontSize: 12,
                        borderColor: "#000",
                        borderWidth: 1,
                        custom: function(t) {
                            if (t.opacity > 0) {
                                var i = this._data.datasets[0].other[t.dataPoints[0].index];
                                if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var l = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                    n = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                else n = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                document.getElementById("img-doughnut-" + a).src = n, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + t.labelColors[0].backgroundColor
                            } else {
                                i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) l = String(this._data.labels[e.targetIndex]).split("-"), n = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                else n = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                document.getElementById("img-doughnut-" + a).src = n, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + e.targetColor
                            }
                        }
                    }
                };
                new Chart(d, {
                    type: "doughnut",
                    data: {
                        labels: i[0],
                        datasets: [{
                            label: "不適合品番",
                            backgroundColor: i[2],
                            borderColor: "grey",
                            borderWidth: .5,
                            data: i[1],
                            other: i[3]
                        }]
                    },
                    showDatapoints: !0,
                    options: m
                });
                try {
                    e.callback()
                } catch (t) {}
            })
        },
        reload: function(t) {
            pimsReloadTime = t;
            var e = new Date,
                i = pims().timeNow();
            document.name = e.toLocaleDateString() + i, setTimeout(pims().counting, 1e3), i == t && (window.onbeforeunload = function(t) {}, location.reload())
        },
        reloadChart: function(t, e) {
            var i = [],
                l = [],
                n = (t = String(t).toUpperCase(), _POTATOElement[t]),
                r = n.getAttribute("model"),
                o = String(n.getAttribute("chartType")).toLowerCase();
            null == o && (o = "bar");
            var a = n.getAttribute("border");
            null == a && (a = "1px solid black");
            var s = n.getAttribute("background");
            null == s && (s = "transparent");
            var d = n.getAttribute("titleDisplay");
            null == d && (d = !0);
            var c = n.getAttribute("titleFontSize");
            null == c && (c = 25);
            var u = n.getAttribute("legendDisplay");
            null == u && (u = !0);
            var p = n.getAttribute("legendPosition");
            null == p && (p = "bottom");
            var h = n.getAttribute("labelFontSize");
            null == h && (h = 12);
            var g = n.getAttribute("label2FontSize");
            null == g && (g = 12);
            var m = n.getAttribute("yAxesFontSize");
            null == m && (m = 12);
            var f = n.getAttribute("y2AxesFontSize");
            null == f && (f = 12);
            var y = n.getAttribute("xAxesFontSize");
            null == y && (y = 12);
            var b = n.getAttribute("dataFontSize");
            null == b && (b = 12);
            var v = n.getAttribute("fontSize");
            null == v && (v = 15);
            var x = n.getAttribute("title");
            null == x && (x = "_b_ Chart");
            var A = n.getAttribute("y2AxesType");
            null == A && (A = "line");
            var T = n.getAttribute("click");
            if (null != T) {
                var S = n.localName;
                l[String(S)] = new Function(T)
            }
            var w = n.getAttribute("hover");
            if (null != w) {
                S = n.localName;
                i[String(S)] = new Function(w)
            }
            var k = n.getAttribute("imageDir");
            if (null == k) k = "null";
            else {
                var _ = new Function(k);
                k = _()
            }
            C = 'dataLabel:"-"';
            try {
                var C = n.getAttribute("params");
                null == C && (C = 'dataLabel:"-"')
            } catch (t) {}
            var I = new Function(n.getAttribute("callback"));
            try {
                O = (O = new Function(n.getAttribute("stacked")))()
            } catch (t) {
                var O;
                null == (O = n.getAttribute("stacked")) && (O = !1)
            }
            null != O && "undefined" != O || null == (O = n.getAttribute("stacked")) && (O = !1);
            try {
                E = (E = new Function(n.getAttribute("tooltips")))()
            } catch (t) {
                var E;
                null == (E = n.getAttribute("tooltips")) && (E = !1)
            }
            null != E && "undefined" != E || null == (E = n.getAttribute("tooltips")) && (E = !0);
            try {
                B = (B = new Function(n.getAttribute("yAxesTitle")))()
            } catch (t) {
                var B;
                null == (B = n.getAttribute("yAxesTitle")) && (B = "")
            }
            null != B && "undefined" != B || null == (B = n.getAttribute("yAxesTitle")) && (B = "");
            try {
                F = (F = new Function(n.getAttribute("y2AxesTitle")))()
            } catch (t) {
                var F;
                null == (F = n.getAttribute("y2AxesTitle")) && (F = "")
            }
            null != F && "undefined" != F || null == (F = n.getAttribute("y2AxesTitle")) && (F = "");
            try {
                $ = ($ = new Function(n.getAttribute("showDay")))()
            } catch (t) {
                var $;
                null == ($ = n.getAttribute("showDay")) && ($ = !0)
            }
            null != $ && "undefined" != $ || null == ($ = n.getAttribute("showDay")) && ($ = !0);
            try {
                P = (P = new Function(n.getAttribute("height")))()
            } catch (t) {
                var P;
                null == (P = n.getAttribute("height")) && (P = 350)
            }
            null != P && "undefined" != P || null == (P = n.getAttribute("height")) && (P = 350);
            try {
                D = (D = new Function(n.getAttribute("width")))()
            } catch (t) {
                var D;
                null == (D = n.getAttribute("width")) && (D = 600)
            }
            null != D && "undefined" != D || null == (D = n.getAttribute("width")) && (D = 600);
            try {
                N = (N = new Function(n.getAttribute("xlabelAngle")))()
            } catch (t) {
                var N;
                null == (N = n.getAttribute("xlabelAngle")) && (N = 0)
            }
            null != N && "undefined" != N || null == (N = n.getAttribute("xlabelAngle")) && (N = 0);
            try {
                L = (L = new Function(n.getAttribute("dataLabel")))()
            } catch (t) {
                var L;
                null == (L = n.getAttribute("dataLabel")) && (L = "data")
            }
            null != L && "undefined" != L || null == (L = n.getAttribute("dataLabel")) && (L = "data");
            try {
                R = (R = new Function(n.getAttribute("dataLabel2")))()
            } catch (t) {
                var R;
                null == (R = n.getAttribute("dataLabel2")) && (R = "data")
            }
            null != R && "undefined" != R || null == (R = n.getAttribute("dataLabel2")) && (R = "data");
            try {
                var z = new Function(n.getAttribute("colorIndex"));
                z = String(z()).split(",")
            } catch (t) {
                try {
                    z = n.getAttribute("colorIndex").split(",")
                } catch (t) {}
                null == z && (z = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            if (null == z || "undefined" == z) {
                try {
                    z = String(n.getAttribute("colorIndex")).split(",")
                } catch (t) {}
                null == z && (z = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            try {
                var H = new Function(n.getAttribute("pointBorderColorIndex"));
                H = String(H()).split(",")
            } catch (t) {
                try {
                    H = String(n.getAttribute("pointBorderColorIndex")).split(",")
                } catch (t) {}
                null == H && (H = ["#000000", "#000000", "#000000", "#000000", "#000000"])
            }
            if (null == H || "undefined" == H) {
                try {
                    H = n.getAttribute("pointBorderColorIndex").split(",")
                } catch (t) {}
                null == H && (H = ["#000000", "#000000", "#000000", "#000000", "#000000"])
            }
            try {
                var X = new Function(n.getAttribute("pointBorderDash"));
                X = String(X()).split(",")
            } catch (t) {
                try {
                    X = String(n.getAttribute("pointBorderDash")).split(",")
                } catch (t) {}
                null == X && (X = [0, 0, 0, 0, 0])
            }
            if (null == X || "undefined" == X) {
                try {
                    X = n.getAttribute("pointBorderDash").split(",")
                } catch (t) {}
                null == X && (X = [0, 0, 0, 0, 0])
            }
            try {
                var M = new Function(n.getAttribute("pointBorderWidth"));
                M = String(M()).split(",")
            } catch (t) {
                try {
                    M = String(n.getAttribute("pointBorderWidth")).split(",")
                } catch (t) {}
                null == M && (M = ["1", "1", "1", "1", "1"])
            }
            if (null == M || "undefined" == M) {
                try {
                    M = n.getAttribute("pointBorderWidth").split(",")
                } catch (t) {}
                null == M && (M = ["1", "1", "1", "1", "1"])
            }
            try {
                var W = new Function(n.getAttribute("pointColorIndex"));
                W = String(W()).split(",")
            } catch (t) {
                try {
                    W = String(n.getAttribute("pointColorIndex")).split(",")
                } catch (t) {}
                null == W && (W = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
            }
            if (null == W || "undefined" == W) {
                try {
                    W = n.getAttribute("pointColorIndex").split(",")
                } catch (t) {}
                null == W && (W = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
            }
            try {
                var j = new Function(n.getAttribute("pointStyle"));
                j = String(j()).split(",")
            } catch (t) {
                try {
                    j = n.getAttribute("pointStyle").split(",")
                } catch (t) {}
                null == j && (j = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
            }
            if (null == j || "undefined" == j) {
                try {
                    j = n.getAttribute("pointStyle").split(",")
                } catch (t) {}
                null == j && (j = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
            }
            K = ["5", "5", "8", "8"];
            try {
                var K = n.getAttribute("pointRadius").split(",")
            } catch (t) {}
            null == K && (K = ["5", "5", "8", "8"]), "false" != e && 0 != e && ("pie" != o ? pims(n.localName)._b_(function() {
                params = C + "@" + n.localName, css = {
                    display: d,
                    background: s,
                    border: a,
                    height: P,
                    width: D,
                    fontSize: v,
                    legendDisplay: u,
                    legendPosition: p,
                    colorIndex: z,
                    pointBorderColorIndex: H,
                    pointBorderDash: X,
                    pointBorderWidth: M,
                    pointColorIndex: W,
                    pointStyle: j,
                    pointRadius: K,
                    showDay: $,
                    xlabelAngle: N,
                    labelFontSize: h,
                    label2FontSize: g,
                    yAxesFontSize: m,
                    y2AxesFontSize: f,
                    xAxesFontSize: y,
                    dataFontSize: b,
                    titleFontSize: c
                }, attr = {
                    chartType: o,
                    title: x,
                    labelString: B,
                    label2String: F,
                    y2AxesType: A,
                    stacked: O,
                    tooltips: E,
                    dataLabel: L,
                    dataLabel2: R
                }, param = {
                    model: r
                }, null != T && (events = {
                    callback: function() {
                        try {
                            I()
                        } catch (t) {}
                    },
                    click: function(t, e, i, n) {
                        for (var r in potato.chartLabel = e, potato.chartYvalue = i, potato.chartXvalue = n, l) {
                            String(r) == t && l[r]()
                        }
                    },
                    hover: function(t, e, l, n) {
                        for (var r in potato.chartLabel = e, potato.chartYvalue = l, potato.chartXvalue = n, i) {
                            String(r) == t && i[r]()
                        }
                    }
                })
            }) : pims(n.localName)._dn_(function() {
                params = C + "@" + n.localName, css = {
                    border: a,
                    height: P,
                    width: D,
                    fontSize: v,
                    display: d,
                    dataFontSize: b,
                    titleFontSize: c
                }, attr = {
                    imageDir: k,
                    title: x
                }, param = {
                    model: r
                }, null != T && (events = {
                    callback: function() {
                        try {
                            I()
                        } catch (t) {}
                    },
                    click: function(t, e, l) {
                        for (var n in potato.chartLabel = l, potato.chartYvalue = e, i) {
                            String(n) == t && i[n]()
                        }
                    }
                })
            }))
        },
        reloadDoughnut: function(t, e) {
            var i = [],
                l = (t = String(t).toUpperCase(), _POTATOElement[t]),
                n = l.getAttribute("border");
            null == n && (n = "1px solid black");
            var r = l.getAttribute("height");
            null == r && (r = 350);
            var o = l.getAttribute("width");
            null == o && (o = 600);
            var a = l.getAttribute("dataFontSize");
            null == a && (a = 12);
            var s = l.getAttribute("fontSize");
            null == s && (s = 15);
            var d = l.getAttribute("imageDir");
            if (null == d) d = "null";
            else {
                var c = new Function(d);
                d = c()
            }
            var u = l.getAttribute("titleDisplay");
            null == u && (u = !1);
            var p = l.getAttribute("titleFontSize");
            null == p && (p = 25);
            var h = l.getAttribute("title");
            null == h && (h = "_dn_ Chart");
            var g = l.getAttribute("click");
            if (null != g) {
                var m = l.localName;
                i[String(m)] = new Function(g)
            }
            var f = new Function(l.getAttribute("callback")),
                y = l.getAttribute("params");
            "false" != e && pims(l.localName)._dn_(function() {
                params = y + "@" + l.localName, css = {
                    border: n,
                    height: r,
                    width: o,
                    fontSize: s,
                    display: u,
                    dataFontSize: a,
                    titleFontSize: p
                }, attr = {
                    imageDir: d,
                    title: h
                }, null != g && (events = {
                    callback: function() {
                        try {
                            f()
                        } catch (t) {}
                    },
                    click: function(t, e, l) {
                        for (var n in potato.chartLabel = l, potato.chartYvalue = e, i) {
                            String(n) == t && i[n]()
                        }
                    }
                })
            })
        },
        reloadRadar: function(t, e) {
            var i = [],
                l = POTATO.elementradar;
            if (t) switch (t) {
                case 1:
                    l = POTATO.element1radar;
                    break;
                case 2:
                    l = POTATO.element2radar;
                    break;
                case 3:
                    l = POTATO.element3radar;
                    break;
                case 4:
                    l = POTATO.element4radar;
                    break;
                case 5:
                    l = POTATO.element5radar;
                    break;
                case 6:
                    l = POTATO.element6radar;
                    break;
                case 7:
                    l = POTATO.element7radar;
                    break;
                case 8:
                    l = POTATO.element8radar;
                    break;
                case 9:
                    l = POTATO.element9radar
            }
            var n = l.getAttribute("border");
            null == n && (n = "1px solid black");
            var r = l.getAttribute("height");
            null == r && (r = 350);
            var o = l.getAttribute("width");
            null == o && (o = 600);
            var a = l.getAttribute("dataFontSize");
            null == a && (a = 12);
            var s = l.getAttribute("fontSize");
            null == s && (s = 15);
            var d = l.getAttribute("titleDisplay");
            null == d && (d = !1);
            var c = l.getAttribute("titleFontSize");
            null == c && (c = 25);
            var u = l.getAttribute("title");
            null == u && (u = "_dn_ Chart");
            var p = l.getAttribute("click");
            if (null != p) {
                var h = l.localName;
                i[String(h)] = new Function(p)
            }
            var g = new Function(l.getAttribute("callback")),
                m = l.getAttribute("params");
            "false" != e && pims(l.localName).Radar(function() {
                params = m + "@" + l.localName, css = {
                    border: n,
                    height: r,
                    width: o,
                    fontSize: s,
                    display: d,
                    dataFontSize: a,
                    titleFontSize: c
                }, attr = {
                    title: u
                }, null != p && (events = {
                    callback: function() {
                        try {
                            g()
                        } catch (t) {}
                    },
                    click: function(t, e, l) {
                        for (var n in potato.chartLabel = l, potato.chartYvalue = e, i) {
                            String(n) == t && i[n]()
                        }
                    }
                })
            })
        },
        reloadTable: function(t) {
            this.setBindTableElements();
            t = String(t).toUpperCase();
            var e, i = _POTATOElement[t],
                l = i.getAttribute("id"),
                n = String(i.localName).split("-");
            null == l && (l = n.slice(2, 3));
            var r = i.getAttribute("model");
            null == r && (r = String(n.slice(2, 3)).toLowerCase() + ".php");
            var o = i.getAttribute("header");
            null == o && (o = "");
            var a = i.getAttribute("border");
            null == a && (a = "0px solid black");
            var s = i.getAttribute("borderRadius");
            null == s && (s = 0);
            var d = i.getAttribute("fontColorTD"),
                c = i.getAttribute("fontColorTH"),
                u = i.getAttribute("fontFamilyTD"),
                p = i.getAttribute("fontFamilyTH"),
                h = i.getAttribute("fontSizeTD"),
                g = i.getAttribute("fontSizeTH");
            null != i.getAttribute("click") && (e = new Function(i.getAttribute("click")));
            var m = i.getAttribute("height");
            null == m && (m = window.innerHeight - 200);
            var f = i.getAttribute("width");
            null == f && (f = window.innerWidth - 30);
            var y = i.getAttribute("root");
            if (null == y) try {
                n = String(i.localName).split("-");
                y = String(n.slice(1, 2))
            } catch (t) {
                y = "getFIELD"
            }
            var b = i.getAttribute("whereClass");
            null == b && (b = "getWHERE");
            try {
                var v = i.getAttribute("params")
            } catch (t) {}
            var x = i.getAttribute("editCols");
            null != i.getAttribute("editCellCallback") && new Function(i.getAttribute("editCellCallback"));
            var A = i.getAttribute("editWidth");
            null == A && (A = 50);
            i.getAttribute("selectCols");
            var T = i.getAttribute("targetCol");
            null == T && (T = 0);
            var S = i.getAttribute("markSymbol");
            null == S && (S = "★"), null != i.getAttribute("selectCellCallback") && new Function(i.getAttribute("selectCellCallback"));
            var w = new Function(i.getAttribute("callback")),
                k = i.getAttribute("multipleSelect"),
                _ = (x = i.getAttribute("editCell"), i.getAttribute("htm"));
            pims(i.localName)._tb_({
                FIELD: {
                    class: y
                },
                WHERE: {
                    class: b
                }
            }, function() {
                multipleSelect = k + "@" + i.localName, editCell = x + "@" + i.localName, params = v + "@" + i.localName, css = {
                    border: a,
                    borderRadius: s,
                    height: m,
                    width: f,
                    fontFamilyTD: u,
                    fontFamilyTH: p,
                    fontColorTD: d,
                    fontColorTH: c,
                    fontSizeTD: h,
                    fontSizeTH: g
                }, attr = {
                    id: l
                }, param = {
                    model: r,
                    header: o,
                    htm: _
                }, events = {
                    callback: function(t, e) {
                        try {
                            w()
                        } catch (t) {}
                    },
                    click: function(t, i, l, n) {
                        potato.table = t, potato.ri = i, potato.ci = l;
                        try {
                            e()
                        } catch (t) {}
                        try {
                            x.split(",")
                        } catch (t) {}
                    }
                }
            })
        },
        response: function(t, e) {
            var i = new XMLHttpRequest;
            i.open("GET", _pdir().POTATOModelDir2 + t), i.onload = function() {
                e(JSON.parse(i.responseText))
            }, i.send()
        },
        _rp_: function(t, e, i) {
            var l = "string" == typeof e ? e : Object.keys(e).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&"),
                n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            n.open("POST", t);
            return n.onreadystatechange = function() {
                n.readyState > 3 && 200 == n.status && (pims_console = n.responseText, i(n.responseText))
            }, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.setRequestHeader("Chartset", "UTF-8"), n.send(l), n
        },
        _re_: function(t, e, i) {
            var l = "string" == typeof e ? e : Object.keys(e).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            }).join("&");
            l += "& model=" + _pdir().POTATOModelDir + t;
            var n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            return n.open("POST", "config/excel.php"), n.onreadystatechange = function() {
                n.readyState > 3 && 200 == n.status && (pims_console = n.responseText, i(n.responseText))
            }, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.setRequestHeader("Chartset", "UTF-8"), n.setRequestHeader("Content-length", l.length), n.setRequestHeader("Connection", "close"), n.send(l), n
        },
        _rx_: function(t, e, i, l) {
            var n = "string" == typeof i ? i : Object.keys(i).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(i[t])
            }).join("&");
            n += "& model=../apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/" + e;
            var r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            return r.open("POST", "config/xml.php"), r.onreadystatechange = function() {
                r.readyState > 3 && 200 == r.status && (pims_console = r.responseText, l(t, r.responseText))
            }, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.setRequestHeader("Chartset", "UTF-8"), r.setRequestHeader("Content-length", n.length), r.setRequestHeader("Connection", "close"), r.send(n), r
        },
        second: function() {
            var t = (new Date).getSeconds();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        Select: function(t, e, i) {
            var l = this.getHTMLElement(),
                n = this.x,
                r = this._p_(i);
            r.id = n, l.createdCallback = function() {
                this.innerHTML = '<Select id="' + n + '"></Select> ';
                for (var t = (n.match(/-/g) || []).length, e = n.split("-"), i = e.slice(2, 3), l = 3; l <= t; l++) i = i + "_" + e.slice(l, l + 1);
                this.name = i, this.is = n, $("#" + n).css({
                    width: r.width + "px",
                    height: r.height + "px",
                    color: r.color,
                    background: r.background,
                    boxShadow: r.boxShadow,
                    display: r.display,
                    fontFamily: r.fontFamily,
                    fontWeight: r.fontWeight,
                    fontSize: r.fontSize + "px",
                    textAlign: r.textAlign,
                    padding: r.padding,
                    border: r.border,
                    position: r.position,
                    left: r.left + "px",
                    top: r.top + "px",
                    borderRadius: r.borderRadius + "px",
                    textTransform: r.textTransform,
                    cursor: "pointer"
                }).attr("multiple", r.multiple).mousemove(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.hoverBgColor), $(this).css("color", r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: r.hoverHeight + "px",
                        width: r.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 50
                    })
                }).mouseout(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.background), $(this).css("color", r.i), $("#" + r.hoverId).hide().html("")
                }).change(function() {
                    try {
                        r.change()
                    } catch (t) {}
                }).click(function() {
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        r.click()
                    } catch (t) {}
                })
            }, this._rp_(t, e, function(t) {
                var e = document.getElementById(n),
                    i = JSON.parse(t);
                e.length = 0;
                var l = 0;
                for (var o in i)
                    if ("undefined" != i[o].d0 && null != i[o].d0) {
                        var a = i[o].d1;
                        T = i[o].d0, e[l] = new Option(a, T), l++
                    }
                r.callback()
            });
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: l,
                    extends: "div"
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(n, {
                        prototype: l,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        SELECT: function(t, e) {
            var i = this._p_(e),
                l = this.getHTMLElement(),
                n = this.x,
                r = String(n).split("-").slice(2, 3),
                o = n + ".php",
                a = "",
                s = [],
                d = 0;
            for (var c in t) {
                if (d++, "WHERE" == c) {
                    var u = 0;
                    for (var p in t[c]) {
                        if ("class" == p)
                            for (var h = X.prototype.getIdClass(t[c][p]), g = 0; g < h.length; g++) s[h[g].field] = pims(h[g].is).value();
                        "class" != p && (s[p] = t[c][p])
                    }
                }
                if ("FIELD" == c) {
                    u = 0, a = "";
                    var m, f = [],
                        y = [],
                        b = 0;
                    for (var p in t[c]) {
                        if ("class" == p) {
                            b = 1, m = (h = X.prototype.getIdClass(t[c][p]))[0].field;
                            for (g = 0; g < h.length; g++) {
                                var v = String(h[g].pims).split("-");
                                f[v.slice(1, 2)] = h[g].field + ",", y[v.slice(1, 2)] = h[g].pims
                            }
                            u = parseFloat(v.slice(1, 2))
                        }
                        "class" != p && (1 == b ? f[u + 1] = p + "," : f[u] = p + ",", m = p, u++)
                    }
                    f[f.length] = m;
                    for (g = 0; g < f.length; g++) a += f[g];
                    s.fields = a
                }
            }
            d > 0 ? s.fieldsLength = 2 : s = {}, l.createdCallback = function() {
                this.id = r + "_";
                var t = document.getElementById(n);
                try {
                    this.index = t.getAttribute("index"), this.field = t.getAttribute("field"), null == this.index && (this.index = 0), null == this.field && (this.field = 0)
                } catch (t) {}
                this.pims = n, this.innerHTML = '<Select id="pims-' + n + '"></Select> ', (t = document.getElementById(r)).style.width = i.width + "px", "string" == typeof i.width && (t.style.width = i.width), t.style.height = i.height + "px", "string" == typeof i.height && (t.style.height = i.height), t.style.background = i.background, t.style.boxShadow = i.boxShadow, t.style.color = i.color, t.style.display = i.display, t.style.fontFamily = i.fontFamily, t.style.fontWeight = i.fontWeight, t.style.fontSize = i.fontSize + "px", "string" == typeof i.fontSize && (t.style.fontSize = i.fontSize), t.style.textAlign = i.textAlign, t.style.padding = i.padding, t.style.border = i.border, t.style.position = i.position, t.style.left = i.left + "px", "string" == typeof i.left && (t.style.left = i.left), t.style.top = i.top + "px", "string" == typeof i.top && (t.style.top = i.top), t.style.borderRadius = i.borderRadius + "px", "string" == typeof i.borderRadius && (t.style.borderRadius = i.borderRadius), t.style.textTransform = i.textTransform, t.style.cursor = "pointer", t.multiple = i.multiple, X("#" + r).CLICK(function() {
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        i.click()
                    } catch (t) {}
                }), X("#" + r).MOUSEMOVE(function() {
                    "null" != i.hoverBgColor && $(this).css("background", i.hoverBgColor), $(this).css("color", i.hoverColor), "" != i.hoverText && $("#" + i.hoverId).html(i.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: i.hoverHeight + "px",
                        width: i.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 50
                    })
                }), X("#" + r).MOUSEOUT(function() {
                    "null" != i.hoverBgColor && $(this).css("background", i.background), $(this).css("color", i.i), $("#" + i.hoverId).hide().html("")
                }), X("#" + n).CHANGE(function() {
                    try {
                        i.change()
                    } catch (t) {}
                })
            }, this._rp_(o, s, function(t) {
                var e = document.getElementById(r),
                    l = JSON.parse(t);
                e.length = 0;
                var n = 0;
                for (var o in l)
                    if ("undefined" != l[o][0] && null != l[o][0]) {
                        var a = l[o][1];
                        T = l[o][0], e[n] = new Option(a, T), n++
                    }
                i.callback()
            });
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: l,
                    extends: "div"
                })
            } catch (t) {}
        },
        scrollx: function(t, e, i) {
            for (var l = this.x, n = document.getElementsByClassName(t), r = 0; r < n.length; r++) parseFloat(document.getElementById(l).scrollLeft) > e ? n[r].style.left = i ? parseFloat(document.getElementById(l).scrollLeft) + parseFloat(i) + "px" : document.getElementById(l).scrollLeft + "px" : n[r].style.left = "0px"
        },
        scrolly: function(t, e, i) {
            for (var l = this.x, n = document.getElementsByClassName(t), r = 0; r < n.length; r++) parseFloat(document.getElementById(l).scrollTop) > e ? n[r].style.top = i ? parseFloat(document.getElementById(l).scrollTop) + parseFloat(i) + "px" : document.getElementById(l).scrollTop + "px" : n[r].style.top = "0px"
        },
        setBindTableElements: function() {
            _POTATOArray = [];
            for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e++) {
                var i = t[e].getAttribute("bind");
                try {
                    if (null != i) {
                        var l = String(t[e].getAttribute("id")).split("_").slice(0, 1);
                        null == field && (field = l), _POTATOArray.push({
                            id: l,
                            value: document.getElementById(l).value,
                            bind: i
                        })
                    }
                } catch (t) {}
            }
        },
        _se_: function() {
            var t, e = document.getElementsByTagName("*"),
                i = [],
                l = [],
                n = [],
                r = [],
                o = [],
                a = [],
                s = [],
                d = [],
                c = 0;
            for (t = 0; t < e.length; t++) {
                var u = e[t].getAttribute("bind");
                if (null != u) {
                    if (_POTATOId[c] = u, null != e[t].getAttribute("id")) _POTATOBindId[c] = e[t].getAttribute("id");
                    else {
                        var p = String(e[t].tagName).split("-");
                        _POTATOBindId[c] = String(p.slice(2, 3)).toLowerCase()
                    }
                    c++
                }
                var h = String(e[t].tagName).split("-");
                if (-1 != this.If(h.slice(0, 1))) {
                    var g, m, f, y = String(e[t].tagName).split("-");
                    if ("BUTTON" == y.slice(1, 2)) {
                        var b = e[t].getAttribute("id");
                        null == b && (b = y.slice(2, 3));
                        var v = e[t].getAttribute("background");
                        null == v && (v = "#eeeeee");
                        var x = e[t].getAttribute("border");
                        null == x && (x = "1px solid black");
                        var A = e[t].getAttribute("borderRadius");
                        null == A && (A = 5);
                        var T = e[t].getAttribute("boxShadow");
                        null == T && (T = "0 0 0px rgba(0,0,0,0)");
                        var S = e[t].getAttribute("color");
                        null == S && (S = "black");
                        var w = e[t].getAttribute("display");
                        null == w && (w = "block");
                        var k = e[t].getAttribute("fontFamily");
                        null == k && (k = "Arial");
                        var _ = e[t].getAttribute("fontSize");
                        null == _ && (_ = 15);
                        var C = e[t].getAttribute("fontWeight");
                        null == C && (C = "normal");
                        var I = e[t].getAttribute("submit"),
                            O = e[t].getAttribute("fieldOther"),
                            E = e[t].getAttribute("height");
                        null == E && (E = 30);
                        var B = e[t].getAttribute("hoverBgColor");
                        null == B && (B = "yellow");
                        var F = e[t].getAttribute("hoverText");
                        null == F && (F = "");
                        var P = e[t].getAttribute("left");
                        null == P && (P = 0);
                        var D = e[t].getAttribute("margin");
                        null == D && (D = "2px 2px 2px 2px");
                        var N = e[t].getAttribute("padding");
                        null == N && (N = "5px 0px 5px 5px");
                        var L = e[t].getAttribute("paddingLeft");
                        null == L && (L = 1);
                        var R = e[t].getAttribute("paddingTop");
                        null == R && (R = 1);
                        var z = e[t].getAttribute("params"),
                            H = e[t].getAttribute("position");
                        null == H && (H = "static");
                        var M = e[t].getAttribute("textAlign");
                        null == M && (M = "center");
                        var W = e[t].getAttribute("top");
                        null == W && (W = 0);
                        var j = e[t].getAttribute("width");
                        null == j && (j = 100);
                        var K, U, V = e[t].getAttribute("whereClass");
                        pims(e[t].localName)._bt_(function() {
                            if (where = V + "@" + e[t].localName, field = I + "@" + e[t].localName, fieldOther = O + "@" + e[t].localName, params = z + "@" + e[t].localName, css = {
                                    background: v,
                                    border: x,
                                    borderRadius: A,
                                    boxShadow: T,
                                    color: S,
                                    display: w,
                                    fontFamily: k,
                                    fontSize: _,
                                    fontWeight: C,
                                    height: E,
                                    hoverBgColor: B,
                                    left: P,
                                    margin: D,
                                    padding: N,
                                    position: H,
                                    paddingTop: R,
                                    paddingLeft: L,
                                    textAlign: M,
                                    top: W,
                                    width: j
                                }, null != e[t].getAttribute("value") && null != e[t].getAttribute("image") ? attr = {
                                    value: e[t].getAttribute("value"),
                                    image: e[t].getAttribute("image"),
                                    hoverText: F,
                                    id: b
                                } : null != e[t].getAttribute("value") && null == e[t].getAttribute("image") ? attr = {
                                    value: e[t].getAttribute("value"),
                                    hoverText: F
                                } : null == e[t].getAttribute("value") && null != e[t].getAttribute("image") && (attr = {
                                    image: e[t].getAttribute("image"),
                                    hoverText: F
                                }), null != e[t].getAttribute("click")) try {
                                K = new Function(e[t].getAttribute("click")), null != e[t].getAttribute("callback") && (U = new Function(e[t].getAttribute("callback"))), events = {
                                    click: K,
                                    callback: U
                                }
                            } catch (t) {} else try {
                                try {
                                    K = new Function("_POTATO." + String(y.slice(2, 3)).toLowerCase() + "()")
                                } catch (t) {
                                    K = new Function(b + "()")
                                }
                                null != e[t].getAttribute("callback") && (U = new Function(e[t].getAttribute("callback"))), events = {
                                    click: K,
                                    callback: U
                                }
                            } catch (t) {}
                        })
                    }
                    if ("CALENDAR" == y.slice(1, 2)) {
                        var Y = e[t].getAttribute("background");
                        null == Y && (Y = "#ffffff");
                        var q = e[t].getAttribute("border");
                        null == q && (q = "1px solid grey");
                        var G = e[t].getAttribute("borderRadius");
                        null == G && (G = 7);
                        var J = e[t].getAttribute("fontSize"),
                            Q = e[t].getAttribute("display");
                        null == Q && (Q = "block"), null == J && (J = 15);
                        var Z = e[t].getAttribute("height");
                        null == Z && (Z = 30);
                        var tt = e[t].getAttribute("hoverBgColor");
                        null == tt && (tt = "yellow");
                        var et = e[t].getAttribute("hoverText");
                        null == et && (et = "");
                        var it = e[t].getAttribute("value"); - 1 != String(it).indexOf("return") && (it = new Function(e[t].getAttribute("value"))), null == it && (it = pims().GetDate("today", "-", 0));
                        var lt = e[t].getAttribute("width");
                        null == lt && (lt = 100);
                        var nt = e[t].getAttribute("padding");
                        null == nt && (nt = "0px 0px 0px 0px");
                        var rt = e[t].getAttribute("id");
                        null == rt && (rt = String(y.slice(2, 3)).toLowerCase());
                        var ot = e[t].getAttribute("class");
                        if (null == ot && (ot = "getFIELD"), $(e[t].localName).addClass(ot), null != (Ie = e[t].getAttribute("change"))) {
                            h = e[t].localName;
                            n[String(h)] = new Function(Ie)
                        }
                        pims(e[t].localName)._d_(function() {
                            css = {
                                height: Z,
                                width: lt,
                                fontSize: J,
                                hoverBgColor: tt,
                                border: q,
                                borderRadius: G,
                                background: Y,
                                padding: nt,
                                display: Q
                            }, attr = {
                                value: it,
                                hoverText: et,
                                id: rt,
                                name: rt
                            }, null != Ie && (events = {
                                change: function(t) {
                                    for (var e in n) {
                                        String(e) == t && n[e]()
                                    }
                                }
                            })
                        })
                    }
                    if ("KEYPAD" == y.slice(1, 2)) {
                        var at = e[t].getAttribute("background");
                        null == at && (at = "#ffffff");
                        var st = e[t].getAttribute("borderRadius");
                        null == st && (st = 7);
                        var dt = e[t].getAttribute("fontSize");
                        null == dt && (dt = 15);
                        var ct = e[t].getAttribute("height");
                        null == ct && (ct = 30);
                        var ut = e[t].getAttribute("hoverBgColor");
                        null == ut && (ut = "yellow");
                        var pt = e[t].getAttribute("htm");
                        null == pt && (pt = "config/keypad.htm");
                        var ht = e[t].getAttribute("left");
                        null == ht && (ht = 0);
                        var gt = e[t].getAttribute("top");
                        null == gt && (gt = 0);
                        var mt = e[t].getAttribute("value");
                        null == mt && (mt = "0");
                        var ft = e[t].getAttribute("width");
                        null == ft && (ft = 100);
                        var yt = e[t].getAttribute("id");
                        null == yt && (yt = String(y.slice(2, 3)).toLowerCase());
                        var bt = e[t].getAttribute("border");
                        null == bt && (bt = "1px solid black");
                        var vt = e[t].getAttribute("class");
                        null == vt && (vt = "getFIELD"), $(e[t].localName).addClass(vt);
                        var xt = new Function(e[t].getAttribute("change")),
                            At = new Function(e[t].getAttribute("click"));
                        pims(e[t].localName)._kp_(function() {
                            param = {
                                htm: pt
                            }, css = {
                                height: ct,
                                width: ft,
                                fontSize: dt,
                                hoverBgColor: ut,
                                borderRadius: st,
                                background: at,
                                topKey: gt,
                                leftKey: ht,
                                border: bt
                            }, attr = {
                                value: mt,
                                id: yt,
                                name: yt
                            }, events = {
                                change: xt,
                                click: At
                            }
                        })
                    }
                    if ("LIST" == y.slice(1, 2)) {
                        var Tt = e[t].getAttribute("background");
                        null == Tt && (Tt = "#ffffff");
                        var St = e[t].getAttribute("borderRadius");
                        null == St && (St = 7);
                        var wt = e[t].getAttribute("fontSize");
                        null == wt && (wt = 15);
                        var kt = e[t].getAttribute("height");
                        null == kt && (kt = 30);
                        var _t = e[t].getAttribute("hoverBgColor");
                        null == _t && (_t = "yellow");
                        var Ct = e[t].getAttribute("hoverText");
                        null == Ct && (Ct = "");
                        var It = e[t].getAttribute("value");
                        null == It && (It = "0");
                        var Ot = e[t].getAttribute("width");
                        null == Ot && (Ot = 100);
                        var Et = e[t].getAttribute("widthTable");
                        null == Et && (Et = 550);
                        var Bt = e[t].getAttribute("heightTable");
                        null == Bt && (Bt = 450);
                        var Ft = e[t].getAttribute("id");
                        null == Ft && (Ft = String(y.slice(2, 3)).toLowerCase());
                        var $t = e[t].getAttribute("model");
                        null == $t && ($t = String(y.slice(2, 3)).toLowerCase() + ".php");
                        var Pt = e[t].getAttribute("class");
                        null == Pt && (Pt = "getFIELD"), $(e[t].localName).addClass(Pt);
                        var Dt = e[t].getAttribute("whereClass"),
                            Nt = e[t].getAttribute("params"),
                            Lt = e[t].getAttribute("onscroll");
                        if (null != (Ce = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            l[String(h)] = new Function(Ce)
                        } else try {
                            h = e[t].localName;
                            l[String(h)] = new Function(String(y.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (oe = e[t].getAttribute("callback"))) {
                            h = e[t].localName;
                            i[String(h)] = new Function(oe)
                        }
                        var Rt = e[t].getAttribute("topTable"),
                            zt = e[t].getAttribute("leftTable"),
                            Ht = e[t].getAttribute("display"),
                            Xt = String(e[t].localName);
                        pims(Xt)._lt_(function() {
                            try {
                                where = Dt + "@" + Xt
                            } catch (t) {}
                            try {
                                params = Nt + "@" + Xt
                            } catch (t) {}
                            css = {
                                display: Ht,
                                height: kt,
                                width: Ot,
                                fontSize: wt,
                                hoverBgColor: _t,
                                borderRadius: St,
                                background: Tt,
                                marginTop: Rt + "_" + Xt,
                                marginLeft: zt + "_" + Xt,
                                widthTable: Et + "_" + Xt,
                                heightTable: Bt + "_" + Xt
                            }, param = {
                                model: $t
                            }, attr = {
                                onscroll: Lt,
                                value: It,
                                hoverText: Ct,
                                id: Ft
                            }, events = {
                                click: function(t, e, i) {
                                    for (var n in potato.table = t, potato.ci = i, l) {
                                        String(n) == e && l[n]()
                                    }
                                },
                                callback: function(t) {
                                    for (var e in i) {
                                        String(e) == t && i[e]()
                                    }
                                }
                            }
                        })
                    }
                    if ("MENU" == y.slice(1, 2)) {
                        var Mt = e[t].getAttribute("background");
                        null == Mt && (Mt = "#ffffff");
                        var Wt = e[t].getAttribute("border");
                        null == Wt && (Wt = "0px");
                        var jt = e[t].getAttribute("menuModel");
                        null == jt && (jt = "null");
                        var Kt = e[t].getAttribute("menuTitle");
                        null == Kt && (Kt = "null");
                        var Ut = e[t].getAttribute("padding"),
                            Vt = e[t].getAttribute("color");
                        null == Vt && (Vt = "BLUE");
                        var Yt = e[t].getAttribute("borderRadius");
                        null == Yt && (Yt = 7);
                        var qt = e[t].getAttribute("fontSize");
                        null == qt && (qt = 15);
                        var Gt = e[t].getAttribute("height");
                        null == Gt && (Gt = 30);
                        var Jt = e[t].getAttribute("hoverBgColor");
                        null == Jt && (Jt = "yellow");
                        var Qt = e[t].getAttribute("hoverText");
                        null == Qt && (Qt = "");
                        var Zt = e[t].getAttribute("value");
                        null == Zt && (Zt = "0");
                        var te = e[t].getAttribute("width");
                        null == te && (te = document.innerWidth + "px");
                        var ee = e[t].getAttribute("widthMenu");
                        null == ee && (ee = 550);
                        var ie = e[t].getAttribute("heightTable");
                        null == ie && (ie = 450);
                        var le = e[t].getAttribute("id");
                        null == le && (le = String(y.slice(2, 3)).toLowerCase());
                        var ne = e[t].getAttribute("model");
                        null == ne && (ne = String(y.slice(2, 3)).toLowerCase() + ".php");
                        var re = e[t].getAttribute("class");
                        null == re && (re = "getFIELD"), $(e[t].localName).addClass(re);
                        var oe, ae = e[t].getAttribute("whereClass"),
                            se = e[t].getAttribute("params"),
                            de = e[t].getAttribute("onscroll");
                        if (null != (Ce = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            d[String(h)] = new Function(Ce)
                        } else try {
                            h = e[t].localName;
                            d[String(h)] = new Function(String(y.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (oe = e[t].getAttribute("callback"))) {
                            h = e[t].localName;
                            s[String(h)] = new Function(oe)
                        }
                        var ce = e[t].getAttribute("topTable"),
                            ue = e[t].getAttribute("leftTable"),
                            pe = e[t].getAttribute("display");
                        Xt = String(e[t].localName);
                        pims(Xt)._m_(function() {
                            try {
                                where = ae + "@" + Xt
                            } catch (t) {}
                            try {
                                params = se + "@" + Xt
                            } catch (t) {}
                            css = {
                                display: pe,
                                height: Gt,
                                width: te,
                                color: Vt,
                                fontSize: qt,
                                hoverBgColor: Jt,
                                borderRadius: Yt,
                                border: Wt,
                                background: Mt,
                                padding: Ut,
                                marginTop: ce + "_" + Xt,
                                marginLeft: ue + "_" + Xt,
                                widthTable: ee + "_" + Xt,
                                heightTable: ie + "_" + Xt
                            }, param = {
                                model: ne,
                                menuTitle: Kt,
                                menuModel: jt
                            }, attr = {
                                onscroll: de,
                                value: Zt,
                                hoverText: Qt,
                                id: le
                            }, events = {
                                click: function(t, e, i) {
                                    for (var l in potato.table = t, potato.ci = i, d) {
                                        String(l) == e && d[l]()
                                    }
                                },
                                callback: function(t) {
                                    for (var e in s) {
                                        String(e) == t && s[e]()
                                    }
                                }
                            }
                        })
                    }
                    if ("CHART" == y.slice(1, 2)) POTATO.elementbar = e[t], _POTATOElement[y.slice(2, 3)] = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadChart(y.slice(2, 3)) : X.prototype.reloadChart(y.slice(2, 3), "false");
                    if ("TABLE" == y.slice(1, 2)) POTATO.element = e[t], _POTATOElement[y.slice(2, 3)] = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadTable(y.slice(2, 3)) : X.prototype.reloadTable(y.slice(2, 3), "false");
                    if ("TEXT" == y.slice(1, 2)) {
                        var he = e[t].getAttribute("background");
                        null == he && (he = "#ffffff");
                        var ge = e[t].getAttribute("border");
                        null == ge && (ge = "1px solid black");
                        var me = e[t].getAttribute("borderRadius");
                        null == me && (me = 7);
                        var fe = e[t].getAttribute("color");
                        null == fe && (fe = "black");
                        var ye = e[t].getAttribute("cursor");
                        null == ye && (ye = "default");
                        var be = e[t].getAttribute("display");
                        null == be && (be = "block");
                        var ve = e[t].getAttribute("disabled"),
                            xe = e[t].getAttribute("fontSize");
                        null == xe && (xe = 15);
                        var Ae = e[t].getAttribute("height");
                        null == Ae && (Ae = 30);
                        var Te = e[t].getAttribute("hoverBgColor");
                        null == Te && (Te = "yellow");
                        var Se = e[t].getAttribute("hoverText");
                        null == Se && (Se = "");
                        var we = e[t].getAttribute("value");
                        null == we && (we = "0");
                        var ke = e[t].getAttribute("width");
                        null == ke && (ke = 100);
                        var _e = e[t].getAttribute("id");
                        null == _e && (_e = y.slice(2, 3));
                        var Ce, Ie, Oe = e[t].getAttribute("class");
                        if (null == Oe && (Oe = "getFIELD"), $(e[t].localName).addClass(Oe), null != (Ce = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            r[String(h)] = new Function(Ce)
                        }
                        if (null != (Ie = e[t].getAttribute("change"))) {
                            h = e[t].localName;
                            a[String(h)] = new Function(Ie)
                        }
                        var Ee = e[t].getAttribute("keyup");
                        if (null != Ee) {
                            h = e[t].localName;
                            o[String(h)] = new Function(Ee)
                        }
                        pims(e[t].localName)._tx_(function() {
                            css = {
                                height: Ae,
                                width: ke,
                                fontSize: xe,
                                hoverBgColor: Te,
                                border: ge,
                                borderRadius: me,
                                background: he,
                                display: be,
                                color: fe,
                                cursor: ye
                            }, attr = {
                                disabled: ve,
                                value: we,
                                hoverText: Se,
                                id: _e
                            }, events = {
                                click: function(t) {
                                    for (var e in r) {
                                        String(e) == t && r[e]()
                                    }
                                },
                                change: function(t) {
                                    for (var e in a) {
                                        String(e) == t && a[e]()
                                    }
                                },
                                keyup: function(t, e) {
                                    for (var i in o) {
                                        String(i) == t && o[i]()
                                    }
                                }
                            }
                        })
                    }
                    if ("DOUGHNUT" == y.slice(1, 2)) POTATO.elementdoughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(0) : X.prototype.reloadDoughnut(0, "false");
                    if ("DOUGHNUT1" == y.slice(1, 2)) POTATO.element1doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(1) : X.prototype.reloadDoughnut(1, "false");
                    if ("DOUGHNUT2" == y.slice(1, 2)) POTATO.element2doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(2) : X.prototype.reloadDoughnut(2, "false");
                    if ("DOUGHNUT3" == y.slice(1, 2)) POTATO.element3doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(3) : X.prototype.reloadDoughnut(3, "false");
                    if ("DOUGHNUT4" == y.slice(1, 2)) POTATO.element4doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(4) : X.prototype.reloadDoughnut(4, "false");
                    if ("DOUGHNUT5" == y.slice(1, 2)) POTATO.element5doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(5) : X.prototype.reloadDoughnut(5, "false");
                    if ("DOUGHNUT6" == y.slice(1, 2)) POTATO.element6doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(6) : X.prototype.reloadDoughnut(6, "false");
                    if ("DOUGHNUT7" == y.slice(1, 2)) POTATO.element7doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(7) : X.prototype.reloadDoughnut(7, "false");
                    if ("DOUGHNUT8" == y.slice(1, 2)) POTATO.element8doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(8) : X.prototype.reloadDoughnut(8, "false");
                    if ("DOUGHNUT9" == y.slice(1, 2)) POTATO.element9doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(9) : X.prototype.reloadDoughnut(9, "false");
                    if ("RADAR" == y.slice(1, 2)) POTATO.elementradar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(0) : X.prototype.reloadRadar(0, "false");
                    if ("RADAR1" == y.slice(1, 2)) POTATO.element1radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(1) : X.prototype.reloadRadar(1, "false");
                    if ("RADAR2" == y.slice(1, 2)) POTATO.element2radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(2) : X.prototype.reloadRadar(2, "false");
                    if ("RADAR3" == y.slice(1, 2)) POTATO.element3radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(3) : X.prototype.reloadRadar(3, "false");
                    if ("RADAR4" == y.slice(1, 2)) POTATO.element4radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(4) : X.prototype.reloadRadar(4, "false");
                    if ("RADAR5" == y.slice(1, 2)) POTATO.element5radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(5) : X.prototype.reloadRadar(5, "false");
                    if ("RADAR6" == y.slice(1, 2)) POTATO.element6radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(6) : X.prototype.reloadRadar(6, "false");
                    if ("RADAR7" == y.slice(1, 2)) POTATO.element7radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(7) : X.prototype.reloadRadar(7, "false");
                    if ("RADAR8" == y.slice(1, 2)) POTATO.element8radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(8) : X.prototype.reloadRadar(8, "false");
                    if ("RADAR9" == y.slice(1, 2)) POTATO.element9radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(9) : X.prototype.reloadRadar(9, "false")
                }
            }
        },
        setHour: function() {
            var t = (new Date).getHours();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        setMinute: function() {
            var t = (new Date).getMinutes();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        show: function() {
            return this.e.style.display = "block", this
        },
        TableExcel: function(t, e) {
            var i = this._p_(e),
                l = this.x,
                n = l + ".php";
            if (null != i.model && (n = i.model + ".php"), i.id = l, "string" == typeof t)
                for (var r = X.prototype.getIdClass(t), o = (t = [], 0); o < r.length; o++) "length" != r[o].name && (t[r[o].name] = pims(r[o].is).value());
            this._re_(n, t, function(t) {
                try {
                    i.callback()
                } catch (t) {}
            })
        },
        Table: function(t, e) {
            var i = this._p_(e),
                l = this.x,
                n = l + ".php";
            if (null != i.model && (n = i.model + ".php"), i.id = l, "string" == typeof t)
                for (var r = X.prototype.getIdClass(t), o = (t = [], 0); o < r.length; o++) "length" != r[o].name && (t[r[o].name] = pims(r[o].is).value());
            this._rp_(n, t, function(t) {
                "tableId" == i.tableId && (i.tableId = "table_" + l);
                var e = JSON.parse(t),
                    n = "<table id=" + i.tableId + " class=" + i.cls + ">";
                if (null != i.data.d0) {
                    var r, o = (new Array, 0);
                    for (r in n += "<tr>", i.data) n += "<th>" + i.data["d" + o] + "</th>", o += 1;
                    for (var a in n += "</tr>", e)
                        if ("undefined" != e[a].d0 && null != e[a].d0) {
                            n += "<tr>";
                            for (var s = 0; o > s; s++) n += "<td>" + e[a]["d" + s] + "</td>";
                            n += "</tr>"
                        }
                } else {
                    o = 0;
                    for (r in n += "<tr>", e[0]) "" != e[0][r] ? n += "<th>" + e[0][r] + "</th>" : n += "<th style='display:none'>" + e[0][r] + "</th>", o++;
                    for (var a in n += "</tr>", e)
                        if ("undefined" != e[a][0] && null != e[a][0] && a > 0) {
                            n += "<tr>";
                            for (s = 0; o > s; s++) "" != e[0][s] ? n += "<td>" + e[a][s] + "</td>" : n += "<td style='display:none'>" + e[a][s] + "</td>";
                            n += "</tr>"
                        }
                }
                n += "</table>", $("#" + l).html(n).show().css({
                    overflow: "auto",
                    width: i.width + "px",
                    height: i.height + "px",
                    background: i.background,
                    display: i.display,
                    border: i.border,
                    position: i.position,
                    left: i.left + "px",
                    top: i.top + "px",
                    borderRadius: i.borderRadius + "px"
                });
                var d = document.getElementById(i.tableId),
                    c = $("#" + i.tableId + " tbody").on("click", "tr", function() {
                        X.prototype.tableHighlight($(this)[0].rowIndex, i.tableId)
                    });
                $(document).keydown(function(t) {
                    if (c.find(".highlight").length)
                        if (40 == t.which) {
                            var e = c.find(".highlight").next();
                            X.prototype.tableHighlight(e[0].rowIndex, i.tableId)
                        } else if (38 == t.which) {
                        var l = c.find(".highlight").prev();
                        X.prototype.tableHighlight(l[0].rowIndex, i.tableId)
                    }
                });
                try {
                    i.callback(d, i.tableId)
                } catch (t) {}
                $("#" + i.tableId + " td").click(function() {
                    try {
                        $("table tbody tr").removeClass("highlight");
                        for (var t = 0; t < o; t++) d.rows[ri].cells[t].style.background = "#dfdfdf"
                    } catch (t) {}
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (t = 0; t < o; t++) d.rows[ri].cells[t].style.background = "yellow";
                    i.click(d.rows[ri], ri, ci)
                })
            })
        },
        _tb_: function(t, i) {
            for (var l = this._p_(i), n = this.getHTMLElement(), r = this.x, o = [
                    []
                ], a = l.id, s = String(l.header).split(","), d = 0; d < _POTATOArray.length; d++) a == String(_POTATOArray[d].bind) && (o[_POTATOArray[d].id] = _POTATOArray[d].value, 0);
            n.createdCallback = function() {
                this.innerHTML = '<div id="div-' + a + '" ></div> '
            }, this._rp_(l.model, o, function(t) {
                var i = JSON.parse(t);
                "tableId" == l.tableId && (l.tableId = "table-" + a);
                var n = "<table id=" + l.tableId + " style='border-collapse:collapse;width:99%'>";
                if (null != s && s.length > 0) {
                    var o = 0;
                    for (e in n += "<tr>", s) "" != s[e] ? n += "<th style='border:1px solid black;font-size:" + l.fontSizeTH + "px;color:" + l.fontColorTH + ";font-family:" + l.fontFamilyTH + "'>" + s[e] + "</th>" : n += "<th style='display:none'>" + s[e] + "</th>", o++;
                    for (var d in n += "</tr>", i)
                        if ("undefined" != i[d][0] && null != i[d][0] && d >= 0) {
                            n += "<tr>";
                            for (var c = 0; c < o; c++) "" != s[c] && null != s[c] ? n += "<td style='border:1px solid black;padding-left:5px;font-size:" + l.fontSizeTD + "px;color:" + l.fontColorTD + ";font-family:" + l.fontFamilyTD + "'>" + i[d][c] + "</td>" : n += "<td style='display:none'>" + i[d][c] + "</td>";
                            n += "</tr>"
                        }
                } else {
                    o = 0;
                    for (e in n += "<tr>", i[0]) "" != i[0][e] ? n += "<th style='border:1px solid black;font-size:" + l.fontSizeTH + "px;color:" + l.fontColorTH + ";font-family:" + l.fontFamilyTH + "'>" + i[0][e] + "</th>" : n += "<th style='display:none'>" + i[0][e] + "</th>", o++;
                    for (var d in n += "</tr>", i)
                        if ("undefined" != i[d][0] && null != i[d][0] && d > 0) {
                            n += "<tr>";
                            for (c = 0; o > c; c++) "" != i[0][c] && null != i[0][c] && "undefined" != i[0][c] ? n += "<td style='border:1px solid black;font-size:" + l.fontSizeTD + "px;color:" + l.fontColorTD + ";font-family:" + l.fontFamilyTD + "'>" + i[d][c] + "</td>" : n += "<td style='display:none'>" + i[d][c] + "</td>";
                            n += "</tr>"
                        }
                }
                n += "</table>", $("#div-" + a).html(n).show().css({
                    overflow: "auto",
                    width: l.width + "px",
                    height: l.height + "px",
                    background: l.background,
                    display: l.display,
                    border: l.border,
                    position: l.position,
                    left: l.left + "px",
                    top: l.top + "px",
                    borderRadius: l.borderRadius + "px"
                });
                var u = document.getElementById(l.tableId),
                    p = $("#" + l.tableId + " tbody");
                $(document).keydown(function(t) {
                    if (p.find(".highlight").length)
                        if (40 == t.which) {
                            var e = p.find(".highlight").next();
                            X.prototype.tableHighlight(e[0].rowIndex, l.tableId)
                        } else if (38 == t.which) {
                        var i = p.find(".highlight").prev();
                        X.prototype.tableHighlight(i[0].rowIndex, l.tableId)
                    }
                });
                try {
                    if (potato.table = u, l.callback(u, l.tableId), String(editCell).split("@").slice(1, 2) == r) {
                        var h = String(editCell).split("@").slice(0, 1),
                            g = [];
                        if (null != h[0] && "null" != h[0]) {
                            for (var m = String(h[0]).replace(/\s+/g, "").split("callback").slice(0, 1), f = (String(m).match(/,/g) || []).length, y = String(h[0]).split(","), b = 0; b < f; b++) {
                                var v = String(y.slice(b, b + 1)).split(":");
                                g[String(v.slice(0, 1)).replace(/\s+/g, "")] = v.slice(1, 2)
                            }
                            v = String(y.slice(b, b + 1)).split(":");
                            var x = String(String(h[0]).split("callback").slice(1, 2)).split(":");
                            g[String(v.slice(0, 1)).replace(/\s+/g, "")] = x.slice(1, 2)
                        }
                        potato._ec_(function() {
                            attr = {
                                id: "table-" + l.id
                            }, param = g;
                            var t = new Function("return " + String(g.callback));
                            events = {
                                callback: t()
                            }
                        })
                    }
                    if (String(multipleSelect).split("@").slice(1, 2) == r) {
                        var A = String(multipleSelect).split("@").slice(0, 1),
                            T = [];
                        if (null != A[0] && "null" != A[0])
                            for (f = (String(A[0]).match(/,/g) || []).length, y = String(A[0]).split(","), b = 0; b <= f; b++) {
                                v = String(y.slice(b, b + 1)).split(":");
                                T[String(v.slice(0, 1)).replace(/\s+/g, "")] = v.slice(1, 2)
                            }
                        potato.MultipleSelect(function() {
                            attr = {
                                id: "table-" + l.id
                            }, param = T;
                            var t = new Function("return " + String(T.callback));
                            events = {
                                callback: t()
                            }
                        })
                    }
                } catch (t) {}
                $("#" + l.tableId + " td").click(function() {
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (var t = 0; t < o; t++) 0;
                    l.click(u.rows[ri], ri, ci, l.tableId)
                })
            });
            try {
                pimsElement = document.registerPotato(r, {
                    prototype: n
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(r, {
                        prototype: n,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        tableHighlight: function(t, e) {
            t + 1 > $("#" + e + " tbody tr").length && (t = 0), $("#" + e + " tbody tr:eq(" + t + ")").length > 0 && ($("#" + e + " tbody tr").removeClass("highlight"), $("#" + e + " tbody tr:eq(" + t + ")").addClass("highlight"))
        },
        Text: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                l = this._p_(t);
            l.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), r = 3; r <= t; r++) n = n + "_" + e.slice(r, r + 1);
                this.name = n, this.is = i, this.innerHTML = '<input type="text" id="' + i + '" class="' + l.className + '"> ', $("#" + i).css({
                    width: l.width + "px",
                    height: l.height + "px",
                    color: l.color,
                    background: l.background,
                    boxShadow: l.boxShadow,
                    display: l.display,
                    fontFamily: l.fontFamily,
                    fontWeight: l.fontWeight,
                    fontSize: l.fontSize + "px",
                    textAlign: l.textAlign,
                    padding: l.padding,
                    border: l.border,
                    borderRadius: l.borderRadius + "px",
                    textTransform: l.textTransform,
                    cursor: l.cursor
                }).attr({
                    value: l.value,
                    type: l.type
                }).mousemove(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.hoverBgColor), $(this).css("color", l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: l.hoverHeight + "px",
                        width: l.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.background), $(this).css("color", l.i), $("#" + l.hoverId).hide().html("")
                }).keyup(function(t) {
                    try {
                        l.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        l.change()
                    } catch (t) {}
                }).click(function() {
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        l.click()
                    } catch (t) {}
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _tx_: function(t) {
            var e = this._p_(t),
                i = this.getHTMLElement(),
                l = this.x,
                n = String(e.id).toLowerCase();
            "potato.now" == e.value && (e.value = potato.now), "potato.today()" == e.value && (e.value = potato.today()), "potato.now()" == e.value && (e.value = potato.now()), i.createdCallback = function() {
                this.id = n + "_", X.prototype.getAttribute(this, l).index, X.prototype.getAttribute(this, l).field, this.pims = l, this.innerHTML = '<input type="text" id="' + n + '" class="' + e.className + '"> ', $("#" + n).css({
                    width: e.width + "px",
                    height: e.height + "px",
                    color: e.color,
                    background: e.background,
                    boxShadow: e.boxShadow,
                    display: e.display,
                    fontFamily: e.fontFamily,
                    fontWeight: e.fontWeight,
                    fontSize: e.fontSize + "px",
                    textAlign: e.textAlign,
                    padding: e.padding,
                    border: e.border,
                    borderRadius: e.borderRadius + "px",
                    textTransform: e.textTransform,
                    cursor: e.cursor
                }).attr({
                    value: e.value,
                    disabled: e.disabled,
                    type: e.type
                }).mousemove(function() {
                    "null" != e.hoverBgColor && $(this).css("background", e.hoverBgColor), $(this).css("color", e.hoverColor), "" != e.hoverText && $("#" + e.hoverId).html(e.hoverText).show().css({
                        fontSize: "15px",
                        fontFamily: "Arial",
                        padding: "3px 3px 3px 3px",
                        height: e.hoverHeight + "px",
                        width: e.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        borderRadius: "3px"
                    })
                }).mouseout(function() {
                    "null" != e.hoverBgColor && $(this).css("background", e.background), $(this).css("color", e.i), $("#" + e.hoverId).hide().html("")
                }).keyup(function(t) {
                    for (var i = 0; i < _POTATOId.length; i++)
                        if (String(n).toLowerCase() == String(_POTATOId[i])) {
                            var r = String(_POTATOBindId[i]);
                            document.getElementById(r).innerText = document.getElementById(n).value
                        }
                    try {
                        e.keyup(l, t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        e.change()
                    } catch (t) {}
                }).click(function() {
                    try {
                        document.getElementById("keypadtable").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyPad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("TimePad").style.display = "none"
                    } catch (t) {}
                    try {
                        document.getElementById("KeyBoard").style.display = "none"
                    } catch (t) {}
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        e.click(l)
                    } catch (t) {}
                })
            };
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: i,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        timeNow: function() {
            var t = new Date,
                e = t.getHours(),
                i = t.getMinutes(),
                l = t.getSeconds();
            return e >= 12 && "pm", i < 10 && (i = "0" + i), l < 10 && (l = "0" + l), e + ":" + i + ":" + l
        },
        Timepad: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                l = this._p_(t);
            l.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), r = 3; r <= t; r++) n = n + "_" + e.slice(r, r + 1);
                this.name = n, this.is = i;
                var o = '<div id="div_' + i + '"> ';
                o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, _fieldtime = document.getElementById("input-" + i), $("#div_" + i).css({
                    display: l.display,
                    position: l.position,
                    left: l.left + "px",
                    top: l.top + "px"
                }), $("#" + i).css({
                    width: l.width + "px",
                    height: l.height + "px",
                    color: l.color,
                    display: l.display,
                    background: l.background,
                    boxShadow: l.boxShadow,
                    fontFamily: l.fontFamily,
                    fontWeight: l.fontWeight,
                    fontSize: l.fontSize + "px",
                    textAlign: l.textAlign,
                    padding: l.padding,
                    border: l.border,
                    borderRadius: l.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", l.value).mousemove(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.hoverBgColor), $(this).css("color", l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: l.hoverHeight + "px",
                        width: l.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != l.hoverBgColor && $(this).css("background", l.background), $(this).css("color", l.i), $("#" + l.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + i, $(".keypad").hide(), $("#keypad-" + i).show().css({
                        position: "absolute",
                        top: event.clientY + 20 + l.topKey,
                        left: event.clientX + l.leftKey
                    }), $("#TimePad").show(), _fieldtime = document.getElementById(i)
                }), $("#keypad-" + i).load("config/timepad.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: l.marginKey,
                    display: l.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        today: function() {
            var t = new Date,
                e = t.getDate(),
                i = t.getHours(),
                l = t.getMinutes(),
                n = t.getMonth() + 1,
                r = t.getSeconds(),
                o = t.getFullYear();
            return _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(l) < 10 ? "0" + l : l, _pimS.month = parseInt(n) < 10 ? "0" + n : n, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.year = o, _pimS.title = "_POTATO", _pimS.now = _pimS.hour + ":" + _pimS.minute, o + "-" + Oget.month + "-" + Oget.day
        },
        value: function(t) {
            return t ? (this.e.value = t, this) : this.e.value
        },
        year: function() {
            return (new Date).getFullYear()
        }
    }, _pimS
}();

function maxArray(t) {
    for (var e = parseFloat(t[0]), i = t.length, l = 1; l < i; l++) parseFloat(t[l]) > e && (e = parseFloat(t[l]));
    return e
}

function findText(t) {
    var e = document.body.createTextRange();
    self.oRange = e;
    e.getBookmark();
    e.findText(t) && (e.select(), e.collapse(), e.moveStart("word", 1), e.moveEnd("textedit", 1))
}
_pcofig = function() {
    try {
        this.tl_ = tl_
    } catch (t) {
        this.tl_ = ""
    }
    try {
        this.dv_ = dv_
    } catch (t) {
        this.dv_ = ""
    }
    try {
        this.nk_ = nk_
    } catch (t) {
        this.nk_ = ""
    }
    this.ksl_ = "60, 102, 111, 110, 116, 32, 115, 116, 121, 108, 101, 61, 39, 119, 105, 100, 116, 104, 58, 51, 48, 48, 112, 120, 59, 99, 111, 108, 111, 114, 58, 98, 108, 97, 99, 107, 59, 102, 111, 110, 116, 45, 115, 105, 122, 101, 58, 49, 51, 112, 120, 39, 62,", this.ksl_ += " 85, 115, 105, 110, 103, 32, 70, 114, 97, 109, 101, 87, 111, 114, 107, 32, 67, 114, 101, 97, 116, 101, 100, 32, 98, 121, 32, 76, 73, 77, 46, 32, 75, 73, 65, 78, 46, 32, 83, 69, 78, 71, 46, 32, 40, 66, 82, 85, 67, 69, 41 ", this.ksl_ = X().fcc(this.ksl_.split(","));
    try {
        this.lg_ = lg_
    } catch (t) {
        this.lg_ = ""
    }
    try {
        this.ld_ = ld_
    } catch (t) {
        this.ld_ = ""
    }
    return this._ksl = this.lg_ + this.tl_ + this.dv_ + this.nk_ + this.ksl_ + this.ld_, this
};
var _$, _$ = {
        settings: {},
        init: function() {
            _$ = this.settings, this.start(), this.setE()
        },
        setE: function() {},
        start: function() {
            window.onload = function() {
                X()._se_()
            }
        }
    },
    potato = new X,
    O = new X;
PIMS();
