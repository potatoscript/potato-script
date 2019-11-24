/* 
*2019-11-01: the file potato.html.js had been modified to potato.1.0.1.js
*debug the button id ---> if no id attribute provide the id will be in lowercase from the tag
*
*
*potato.1.0.1.js
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
                n = t.getMinutes(),
                l = t.getMonth() + 1,
                r = t.getSeconds(),
                o = t.getFullYear();
            _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(n) < 10 ? "0" + n : n, _pimS.month = parseInt(l) < 10 ? "0" + l : l, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.year = o, _pimS.now = _pimS.hour + ":" + _pimS.minute, Oget.today = o + "-" + Oget.month + "-" + Oget.day, pims = X, POTATO = X, _$.init(), document.onmouseover = X.prototype.doOver, document.onmouseout = X.prototype.doOut, document.onmousedown = X.prototype.doDown, document.onmouseup = X.prototype.doUp
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
! function(t, e, i, n) {
    "use strict";

    function l(t, e) {
        for (var i = 0, n = t.length; i < n; i++) h(t[i], e)
    }

    function r(t) {
        return function(e) {
            tt(e) && (h(e, t), l(e.querySelectorAll(R), t))
        }
    }

    function o(t) {
        var e = t.getAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111)),
            i = t.nodeName.toUpperCase(),
            n = z.call(L, e ? F + e.toUpperCase() : B + i);
        return e && -1 < n && !a(i, e) ? -1 : n
    }

    function a(t, e) {
        return -1 < R.indexOf(t + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + e + '"]')
    }

    function s(t) {
        var e = t.currentTarget,
            i = t.attrChange,
            n = t.attrName,
            l = t.target;
        pt && (!l || l === e) && e.attributeChangedCallback && "style" !== n && e.attributeChangedCallback(n, i === t[w] ? null : t.prevValue, i === t[C] ? null : t.newValue)
    }

    function d(t) {
        var e = r(t);
        return function(t) {
            g.push(e, t.target)
        }
    }

    function c(t) {
        ut && (ut = !1, t.currentTarget.removeEventListener(O, c)), l((t.target || e).querySelectorAll(R), t.detail === T ? T : _), Z && function() {
            for (var t, e = 0, i = et.length; e < i; e++) t = et[e], N.contains(t) || (et.splice(e, 1), h(t, T))
        }()
    }

    function u(t, e) {
        var i = this;
        nt.call(i, t, e), m.call(i, {
            target: i
        })
    }

    function p(t, e) {
        G(t, e), b ? b.observe(t, ot) : (ct && (t.setAttribute = u, t[A] = y(t), t.addEventListener(E, m)), t.addEventListener(I, s)), t.createdCallback && pt && (t.created = !0, t.createdCallback(), t.created = !1)
    }

    function h(t, e) {
        var i, n = o(t); - 1 < n && (v(t, D[n]), n = 0, e !== _ || t[_] ? e === T && !t[T] && (t[_] = !1, t[T] = !0, n = 1) : (t[T] = !1, t[_] = !0, n = 1, Z && z.call(et, t) < 0 && et.push(t)), n && (i = t[e + "Callback"]) && i.call(t))
    }
    if (!(n in e)) {
        var g, m, f, y, b, v, x, A = "__" + n + (1e5 * Math.random() >> 0),
            _ = "attached",
            T = "detached",
            S = "extends",
            w = "ADDITION",
            k = "MODIFICATION",
            C = "REMOVAL",
            I = "DOMAttrModified",
            O = "DOMContentLoaded",
            E = "DOMSubtreeModified",
            B = "<",
            F = "=",
            $ = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
            P = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
            L = [],
            D = [],
            R = "",
            N = e.documentElement,
            z = L.indexOf || function(t) {
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
                    for (var i, n = K(e), l = 0, r = n.length; l < r; l++) i = n[l], X.call(t, i) || W(t, i, j(e, i))
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
            Z = !M.call(Q, N),
            tt = Z ? function(t) {
                return 1 === t.nodeType
            } : function(t) {
                return M.call(Q, t)
            },
            et = Z && [],
            it = Q.cloneNode,
            nt = Q.setAttribute,
            lt = Q.removeAttribute,
            rt = e.createElement,
            ot = J && {
                attributes: !0,
                characterData: !0,
                attributeOldValue: !0
            },
            at = J || function(t) {
                ct = !1, N.removeEventListener(I, at)
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
                    e.attrName = t, e.prevValue = this.getAttribute(t), e.newValue = null, e[C] = e.attrChange = 2, lt.call(this, t), this.dispatchEvent(e)
                },
                n = function(t, e) {
                    var i = this.hasAttribute(t),
                        n = i && this.getAttribute(t),
                        l = new CustomEvent(I, {
                            bubbles: !0
                        });
                    nt.call(this, t, e), l.attrName = t, l.prevValue = i ? n : null, l.newValue = e, i ? l[k] = l.attrChange = 1 : l[w] = l.attrChange = 0, this.dispatchEvent(l)
                },
                l = function(t) {
                    var e, i = t.currentTarget,
                        n = i[A],
                        l = t.propertyName;
                    n.hasOwnProperty(l) && (n = n[l], (e = new CustomEvent(I, {
                        bubbles: !0
                    })).attrName = n.name, e.prevValue = n.value || null, e.newValue = n.value = i[l] || null, null == e.prevValue ? e[w] = e.attrChange = 0 : e[k] = e.attrChange = 1, i.dispatchEvent(e))
                };
            t.value = function(t, r, o) {
                t === I && this.attributeChangedCallback && this.setAttribute !== n && (this[A] = {
                    className: {
                        name: "class",
                        value: this.className
                    }
                }, this.setAttribute = n, this.removeAttribute = i, e.call(this, "propertychange", l)), e.call(this, t, r, o)
            }, W(Q, "addEventListener", t)
        }()) : J || (N.addEventListener(I, at), N.setAttribute(A, 1), N.removeAttribute(A), ct && (m = function(t) {
            var e, i, n, l = this;
            if (l === t.target) {
                for (n in e = l[A], l[A] = i = y(l), i) {
                    if (!(n in e)) return f(0, l, n, e[n], i[n], w);
                    if (i[n] !== e[n]) return f(1, l, n, e[n], i[n], k)
                }
                for (n in e)
                    if (!(n in i)) return f(2, l, n, e[n], i[n], C)
            }
        }, f = function(t, e, i, n, l, r) {
            var o = {
                attrChange: t,
                currentTarget: e,
                attrName: i,
                prevValue: n,
                newValue: l
            };
            o[r] = t, s(o)
        }, y = function(t) {
            for (var e, i, n = {}, l = t.attributes, r = 0, o = l.length; r < o; r++) "setAttribute" !== (i = (e = l[r]).name) && (n[i] = e.value);
            return n
        })), e[n] = function(t, i) {
            if (n = t.toUpperCase(), dt || (dt = !0, J ? (b = function(t, e) {
                    function i(t, e) {
                        for (var i = 0, n = t.length; i < n; e(t[i++]));
                    }
                    return new J(function(n) {
                        for (var l, r, o = 0, a = n.length; o < a; o++) "childList" === (l = n[o]).type ? (i(l.addedNodes, t), i(l.removedNodes, e)) : (r = l.target, pt && r.attributeChangedCallback && "style" !== l.attributeName && r.attributeChangedCallback(l.attributeName, l.oldValue, r.getAttribute(l.attributeName)))
                    })
                }(r(_), r(T))).observe(e, {
                    childList: !0,
                    subtree: !0
                }) : (g = [], st(function t() {
                    for (; g.length;) g.shift().call(null, g.shift());
                    st(t)
                }), e.addEventListener("DOMNodeInserted", d(_)), e.addEventListener("DOMNodeRemoved", d(T))), e.addEventListener(O, c), e.addEventListener("readystatechange", c), e.createElement = function(t, i) {
                    var n = rt.apply(e, arguments),
                        l = "" + t,
                        r = z.call(L, (i ? F : B) + (i || l).toUpperCase()),
                        o = -1 < r;
                    return i && (n.setAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111), i = i.toLowerCase()), o && (o = a(l.toUpperCase(), i))), pt = !e.createElement.innerHTMLHelper, o && x(n, D[r]), n
                }, Q.cloneNode = function(t) {
                    var e = it.call(this, !!t),
                        i = o(e);
                    return -1 < i && x(e, D[i]), t && function(t) {
                        for (var e, i = 0, n = t.length; i < n; i++) e = t[i], x(e, D[o(e)])
                    }(e.querySelectorAll(R)), e
                }), -2 < z.call(L, F + n) + z.call(L, B + n)) throw new Error("A " + t + " type pims already registered");
            if (!$.test(n) || -1 < z.call(P, n)) throw new Error("The type " + t + " pims invalid");
            var n, s = function() {
                    return p ? e.createElement(h, n) : e.createElement(h)
                },
                u = i || H,
                p = X.call(u, S),
                h = p ? i[S].toUpperCase() : n,
                m = L.push((p ? F : B) + n) - 1;
            return R = R.concat(R.length ? "," : "", p ? h + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + t.toLowerCase() + '"]' : h), s.prototype = D[m] = X.call(u, "prototype") ? u.prototype : q(Q), l(e.querySelectorAll(R), _), s
        }
    }
}(window, document, Object, __p.prototype.l(_pcnst().r));
var X = function() {
    var _pimS = function(t, e, i, n, l) {
        var r = __p.prototype.l(_pcnst().lp);
        if (this.data = [], this.array1 = [], this.array2 = [], this.where = [], this.field = [], this.whereOther = [], this.fieldOther = [], this.Query = 0, this.Submit = 0, -1 != String(t).indexOf(__p.prototype.l(_pcnst().h)) && (r = String(t).split(__p.prototype.l(_pcnst().h)).slice(1, 2)), !l) {
            if (t && r == __p.prototype.l(_pcnst().lp)) return window === this ? new _pimS(t) : (this.Day = this.day(), this.e = document.getElementById(t), this.Hour = this.hour(), this.id = t, this.Minute = this.minute(), this.Month = this.month(), this.obj = document.getElementById(t), this.Patent = this.getPatent(), this.Second = this.second(), this.x = t, this.Year = this.year(), this.table, this.ci, this.ri, this.title, this.value, this.oldValue, this.dataID, this.trigger, this.chartLabel, this.chartYvalue, this.chartXvalue, this.element, this.element1, this.element2, this.element3, this.element4, this.element5, this.element6, this.element7, this.element8, this.element9, this.elementbar, this.element1bar, this.element2bar, this.element3bar, this.element4bar, this.element5bar, this.element6bar, this.element7bar, this.element8bar, this.element9bar, this.elementdoughnut, this.element1doughnut, this.element2doughnut, this.element3doughnut, this.element4doughnut, this.element5doughnut, this.element6doughnut, this.element7doughnut, this.element8doughnut, this.element9doughnut, this.elementradar, this.element1radar, this.element2radar, this.element3radar, this.element4radar, this.element5radar, this.element6radar, this.element7radar, this.element8radar, this.element9radar, this);
            if (t && r != __p.prototype.l(_pcnst().lp)) {
                var o = String(r).toLowerCase();
                return document.getElementById(o)
            }
            return window === this ? new _pimS(__p.prototype.l(_pcnst().up)) : (this.x = __p.prototype.l(_pcnst().up), this.e = document.getElementById(__p.prototype.l(_pcnst().up)), this)
        }
        this.x = t, this.y = e, this.dx = i, this.dy = n, this.radius = l
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
                n = this.x,
                l = e.model,
                r = n.split("-"),
                o = r.slice(2, 3),
                a = (r.slice(2, 3), !1);
            "true" != e.stacked && 1 != e.stacked || (a = !0);
            var s = !0;
            if ("false" != e.tooltips && 0 != e.tooltips || (s = !1), String(e.params).split("@").slice(1, 2) == n) var d = String(e.params).split("@").slice(0, 1);
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
            0 == c && this.Post(l, u, function(t) {
                var i = new Array,
                    l = new Array;
                i[0] = new Array, l[0] = new Array;
                new Array;
                var r = String(e.dataLabel).split(","),
                    d = String(e.dataLabel2).split(",");
                if ("bar" == e.chartType) {
                    for (var c = 1, u = 0; u <= r.length + 1; u++) "data" != r[u] && (i[c] = new Array, c++);
                    if ("data" != d[0])
                        for (c = 0, u = 0; u <= d.length; u++) l[c] = new Array, c++
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
                            _ = [];
                        _[0] = 0;
                        var T = 0;
                        for (c = 1; c <= r.length; c++) try {
                            "data" != r[c] && (i[T].push(t[u][c]), 1 == a ? A += parseFloat(t[u][c]) : (_[c] = 0, parseFloat(t[u][c]) > 0 && "undefined" != t[u][c] && (_[c] = parseFloat(t[u][c]))), T++)
                        } catch (t) {}
                        if (i[T].push(A), h[u] = 1 == a ? A : maxArray(_), "data" != d[0]) {
                            var S = 0,
                                w = [];
                            w[0] = 0;
                            var k = 0;
                            for (c = 0; c < d.length; c++)
                                if ("undefined" != t[u][d[c]] && null != t[u][d[c]]) try {
                                    l[k].push(t[u][d[c]]), 1 == a ? S += parseFloat(t[u][d[c]]) : (S[c] = 0, parseFloat(t[u][d[c]]) > 0 && (w[c] = parseFloat(t[u][d[c]]))), k++
                                } catch (t) {}
                                g[u] = 1 == a ? S : maxArray(w)
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
                            data: l[u]
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
                        data: i[T]
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
                                    n = this.scales["y-axis-1"].width - 10,
                                    l = this.scales["y-axis-1"].height + this.scales["y-axis-1"].top + 10,
                                    r = document.getElementById("yAxis_" + o).getContext("2d");
                                r.canvas.width = n, r.drawImage(this.chart.canvas, 0, 0, n, l, 0, 0, n, l), i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom";
                                var a = 0;
                                this.data.datasets.forEach(function(e) {
                                    for (var n = 0; n < e.data.length; n++) {
                                        var l = e._meta[Object.keys(e._meta)[0]].data[n]._model,
                                            r = e._meta[Object.keys(e._meta)[0]].data[n]._yScale.maxHeight;
                                        i.fillStyle = "#444";
                                        var o = l.y - 5;
                                        (r - l.y) / r >= .93 && (o = l.y + 14), "bar" == e.type && a != c && (o += 20), t.length < 31 && i.fillText(pims().Comma(parseFloat(e.data[n])), l.x, o)
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
                                var n = e._meta[Object.keys(e._meta)[0]].data[i]._model;
                                e._meta[Object.keys(e._meta)[0]].data[i]._yScale.maxHeight;
                                t.fillStyle = "#444", t.fillText(pims().Comma(parseFloat(e.data[i])), n.x + 20, n.y + 5)
                            }
                        })
                    }
                };
                "true" == e.display ? e.display = !0 : e.display = !1;
                var L = {
                        hover: {
                            animationDuration: 1,
                            onHover: function(t, i) {
                                var l = this.getElementAtEvent(t);
                                if (l.length) {
                                    t.target.style.cursor = "pointer";
                                    try {
                                        var r = l[0]._chart.data,
                                            o = l[0]._datasetIndex,
                                            a = r.datasets[o].label,
                                            s = r.datasets[o].data[l[0]._index];
                                        t = i[0];
                                        var d = this.data.labels[t._index];
                                        e.hover(n, a, s, d)
                                    } catch (t) {
                                        e.hover(n, "-")
                                    }
                                } else t.target.style.cursor = "default", e.hover(n, "-")
                            }
                        },
                        onClick: function(t, i) {
                            var l = this.getElementAtEvent(t);
                            if (l.length) try {
                                var r = l[0]._chart.data,
                                    o = l[0]._datasetIndex,
                                    a = r.datasets[o].label,
                                    s = r.datasets[o].data[l[0]._index];
                                t = i[0];
                                var d = this.data.labels[t._index];
                                e.click(n, a, s, d)
                            } catch (t) {
                                e.click(n, "-")
                            } else e.click(n, "-")
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
                    D = "<canvas id='canvas-" + o + "' style='background:" + e.background + "'></canvas>",
                    R = document.getElementById("div_chart_" + o);
                R.innerHTML = "", $("#div_" + o).show().css({
                    width: e.width + "px",
                    height: e.height + "px",
                    border: e.border
                });
                var N = "100%";
                t.length > 50 && (N = "130%"), t.length > 100 && (N = "150%"), t.length > 150 && (N = "180%"), t.length > 200 && (N = "250%"), t.length > 250 && (N = "300%"), t.length > 300 && (N = "350%"), t.length > 350 && (N = "400%"), t.length > 400 && (N = "500%"), $("#div_chart_" + o).html(D).css({
                    width: N
                });
                var z = document.getElementById("canvas-" + o);
                try {
                    var H = e.name;
                    null == H && (H = "");
                    var X = document.createElement("span");
                    X.innerText = H, X.style.fontSize = e.nameFontSize, R.appendChild(X), $("#div_" + o + " span").css({
                        position: "absolute",
                        left: e.width / 6 + "px",
                        top: 2 * -e.fontSize + "px",
                        fontSize: e.nameFontSize + "px",
                        textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                    })
                } catch (t) {}
                if ("bar" == e.chartType) new Chart(z, {
                    type: e.chartType,
                    options: L,
                    data: {
                        labels: p,
                        datasets: C
                    }
                });
                else new Chart(z, {
                    type: "horizontalBar",
                    options: L,
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
                pimsElement = document.registerPotato(n, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(n, {
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
                n = this._p_(t),
                l = (i.split("-"), n.id),
                r = [];
            if (String(n.field).split("@").slice(1, 2) == i) var o = String(n.field).split("@").slice(0, 1);
            if (String(n.fieldOther).split("@").slice(1, 2) == i) var a = String(n.fieldOther).split("@").slice(0, 1);
            if (String(n.params).split("@").slice(1, 2) == i) var s = String(n.params).split("@").slice(0, 1);
            if (String(n.where).split("@").slice(1, 2) == i) var d = String(n.where).split("@").slice(0, 1);
            e.createdCallback = function() {
                this.id = n.id;
                var t = '<table style="font-weight:' + n.fontWeight + ";font-size:" + n.fontSize + "px;padding:" + n.paddingTop + "px 1px 1px " + n.paddingLeft + 'px"><tr>';
                "nil 0 0" != n.image ? (t += '<td><img id="img_' + l + '" src="' + String(n.image).split(" ").slice(0, 1) + '" style="width:' + String(n.image).split(" ").slice(1, 2) + "px;height:" + String(n.image).split(" ").slice(2, 3) + 'px"/></td>', t += '<td style="vertical-align:middle;text-align:center">' + n.value + "</td>") : t += '<td style="vertical-align:middle;text-align:center">' + n.value + "</td>", t += "</tr></table>", this.innerHTML = t, $("#" + l).css({
                    background: n.background,
                    border: n.border,
                    borderLeft: "1px solid buttonshadow",
                    borderRight: "2px solid black",
                    borderTop: "1px solid buttonshadow",
                    borderBottom: "2px solid black",
                    borderRadius: n.borderRadius + "px",
                    boxShadow: n.boxShadow,
                    color: n.color,
                    cursor: "pointer",
                    display: n.display,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    height: n.height + "px",
                    left: n.left + "px",
                    margin: n.margin,
                    marginBottom: n.marginBottom + "px",
                    marginLeft: n.marginLeft + "px",
                    marginRight: n.marginRight + "px",
                    marginTop: n.marginTop + "px",
                    padding: n.padding,
                    paddingBottom: n.paddingBottom + "px",
                    paddingLeft: n.paddingLeft + "px",
                    paddingRight: n.paddingRight + "px",
                    paddingTop: n.paddingTop + "px",
                    position: n.position,
                    textAlign: n.textAlign,
                    top: n.top + "px",
                    width: n.width + "px"
                }).addClass("pimsButton").mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        fontSize: "15px",
                        fontFamily: "Arial",
                        padding: "3px 3px 3px 3px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        borderRadius: "3px"
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).click(function() {
                    POTATO.Query = 100, POTATO.Submit = 100;
                    for (var t = 0; t < _POTATOId.length; t++)
                        if (l == String(_POTATOId[t])) {
                            var e = String(_POTATOBindId[t]);
                            document.getElementById(e).innerText = n.value
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
                        n.click()
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
                                POTATO.data = JSON.parse(t), n.callback()
                            })
                        }
                    } else {
                        POTATO.Query = 0, POTATO.Submit = 0;
                        var c = l + ".php",
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
                                n.callback()
                            } catch (t) {}
                        })
                    }
                }), "none" == n.display ? $("#" + l).hide() : $("#" + l).show()
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
                    var n = e[i].replace(/^=\s*\"|\"$/g, "");
                    n = n.replace(/\'/g, "%26apos;");
                    var l = t.indexOf(e[i]),
                        r = "='" + n + "'";
                    t = t.substring(0, l) + r + t.substring(l + e[i].length)
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
            var n = this._p_(i);
            this.attributes = new Array, this.params = new Object, this.variables = new Object, this.chartAttribute("s", "lib/charts/" + n.chartType + ".swf"), this.chartAttribute("w", n.width), this.chartAttribute("h", n.height), this.chartAttribute("id", n.chartId), this.chartParam("bgcolor", n.background), this.chartParam("quality", "high"), this.chartVariable("chartWidth", n.width), this.chartVariable("chartHeight", n.height);
            var l = this.getHTMLElement();
            this._rx_(this, t, e, function(t, e) {
                t.chartXML(e), t.chartParam("WMode", "transparent"), t.getChart(t.x), n.callback(e)
            });
            try {
                pimsElement = document.registerPotato(m, {
                    prototype: l
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(m, {
                        prototype: l,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        CHANGE: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), n = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onchange = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onchange = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (n = r[o].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onchange = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onchange = t
                }
        },
        CLICK: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), n = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onclick = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onclick = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (n = r[o].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onclick = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onclick = t
                }
        },
        closeEditCell: function() {
            var e = _potatoThis,
                i = document.createTextNode(e.firstChild.value);
            e.replaceChild(i, e.firstChild), t = 1, $("#keypadtable").hide(), potato.trigger = 0, _pimS.nodevalue = e.firstChild.nodeValue;
            var n = potato.table;
            potato._.callback(e.firstChild.nodeValue, potato.oldValue, n.cells[potato._.targetId].innerText, potato.ci)
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
                n = this._p_(t);
            n.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + e.slice(r, r + 1);
                this.name = l, this.is = i, this.innerHTML = '<input type="text" id="' + i + '"> ', $("#" + i).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px",
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).change(function() {
                    try {
                        n.change()
                    } catch (t) {}
                }).click(function() {
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        n.click()
                    } catch (t) {}
                }).datepicker({
                    dateFormat: n.format,
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
                n = this._p_(t);
            "potato.today()" == n.value && (n.value = potato.today()), "potato.now()" == n.value && (n.value = potato.now());
            var l = n.id;
            e.createdCallback = function() {
                this.id = l + "_", X.prototype.getAttribute(this, i).index, X.prototype.getAttribute(this, i).field, this.pims = i, this.innerHTML = '<input type="text" id="' + l + '"> ', $("#" + l).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px",
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: n.padding,
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        fontSize: "15px",
                        fontFamily: "Arial"
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).change(function() {
                    for (var t = 0; t < _POTATOId.length; t++)
                        if (l == String(_POTATOId[t])) {
                            var e = String(_POTATOBindId[t]);
                            document.getElementById(e).innerText = document.getElementById(l).value
                        }
                    try {
                        n.change(i)
                    } catch (t) {}
                }).click(function() {
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        n.click()
                    } catch (t) {}
                }).datepicker({
                    dateFormat: n.format,
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
                    n = i.cDisabled;
                n = null != n;
                var l = i.cToggle;
                toggle_disabled = null != l, l && i.value ? (X.prototype.makePressed(i), X.prototype.makeGray(i, !0)) : "pimsButton" != i.className || n || (X.prototype.makeFlat(i), X.prototype.makeGray(i, !0))
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
                n = this.x,
                l = e.model,
                r = this.x,
                o = n.split("-"),
                a = o.slice(2, 3);
            o.slice(2, 3);
            if (String(e.params).split("@").slice(1, 2) == n) var s = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                this.innerHTML = '<div id="' + r + '"></div> '
            };
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(n, {
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
            this.Post(l, d, function(t) {
                var i = new Array;
                i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                for (var l = 0; l < t.length; l++)
                    for (var o = 0; o < i.length; o++) i[o][l] = t[l][o];
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
                                for (var n = 0; n < e.data.length; n++) {
                                    var l = e._meta[Object.keys(e._meta)[0]],
                                        r = l.data[n]._model,
                                        o = l.total,
                                        a = r.innerRadius + (r.outerRadius - r.innerRadius) / 2,
                                        s = r.startAngle,
                                        d = s + (r.endAngle - s) / 2,
                                        c = a * Math.cos(d),
                                        u = a * Math.sin(d);
                                    i.fillStyle = "#000";
                                    var p = String(Math.round(e.data[n] / o * 100)) + "%";
                                    if (n < e.data.length - 1) {
                                        var h = r.x + c + 70;
                                        u > 0 && c < 0 && (h = r.x + c - 50), i.fillText(t[n][0] + ": " + t[n][1] + ", " + p, h, r.y + u + 8)
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
                        e.targetIndex = i[0]._index, e.targetColor = i[0]._model.backgroundColor, e.click(n, i[0]._chart.data.labels[i[0]._index], i[0]._model.backgroundColor)
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
                                    if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var n = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                        l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                    else l = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                    document.getElementById("img-doughnut-" + a).src = l, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                }
                            } else if ("null" != e.imageDir) {
                                i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) n = String(this._data.labels[e.targetIndex]).split("-"), l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                else l = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                document.getElementById("img-doughnut-" + a).src = l, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + e.targetColor
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
            potato.table = document.getElementById(e.id);
            document.getElementById(e.id);
            var n = new Array;
            n = e.targetCol;
            e.id;

            function l() {
                var t = document.getElementById(e.id);
                _pimS.nodevalue = __p.prototype.l(_pcnst().lp);
                var l = "-";
                try {
                    l = t.rows[potato.ri].cells[e.matchCol].innerText
                } catch (t) {}
                var r = -1;
                try {
                    r = n.indexOf($(this).parent().children().index(this))
                } catch (t) {}
                if (!("-" != e.matchCol && l != e.matchValue || $(this).parent().children().index(this) != n && -1 == r && "any" != n)) {
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
            for (var r = document.getElementById(e.id).getElementsByTagName("td"), o = 0; o < r.length; o++) r[o].onkeyup = function(t) {}, "dblclick" == e.trigger ? r[o].ondblclick = l : "click" == e.trigger ? r[o].onclick = l : r[o].ondblclick = l, r[o].onmousemove = function() {}
        },
        _ect_: function(t) {
            var e = this._p_(t);
            pimsParameters = e;
            var i = e.id,
                n = document.getElementById(e.id),
                l = new Array;

            function r() {
                var t = "-";
                try {
                    t = n.rows[_pimS.rowId].cells[e.matchCol].innerText
                } catch (t) {}
                try {
                    if (!("-" != e.matchCol && t != e.matchValue || $(this).parent().children().index(this) != l && -1 == l.indexOf($(this).parent().children().index(this)) && "any" != l)) {
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
            l = e.targetCol;
            for (var o = document.getElementById(i), a = o.getElementsByTagName("td"), s = 0; s < a.length; s++) a[s].onkeyup = function(t) {}, "dblclick" == e.trigger ? a[s].ondblclick = r : "click" == e.trigger ? a[s].onclick = r : a[s].ondblclick = r, a[s].onmousemove = function() {}
        },
        _el_: function(t, e, i) {
            var n;
            if ((n = document.body.createTextRange()).moveToElementText(document.getElementById(t)), n.execCommand("COPY")) {
                var l = new ActiveXObject("_el_.Application");
                e ? l.Workbooks.Open(e) : l.Workbooks.Add, l.visible = !0, l.Worksheets(1).Paste
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
            var i, n, l, r = [];
            for (i = (e = e || document).getElementsByTagName("*"), n = 0; n < i.length; n++)
                if (null != (l = i[n].getAttribute("class")))
                    for (l = l.split(" "), j = 0; j < l.length; j++)
                        if (l[j] === t) {
                            r.push(i[n]);
                            break
                        }
            return r
        },
        getIdType: function(t, e) {
            var i, n, l, r = [];
            for (i = (e = e || document).getElementsByTagName("*"), n = 0; n < i.length; n++)
                if (null != (l = i[n].getAttribute("type")))
                    for (l = l.split(" "), j = 0; j < l.length; j++)
                        if (l[j] === t) {
                            r.push(i[n]);
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
            var n = t.split(e),
                l = new Date(n[0] + "/" + n[1] + "/" + n[2]);
            l.setDate(l.getDate() + i);
            var r = l.getFullYear(),
                o = l.getMonth() + 1;
            o = parseInt(o) < 10 ? "0" + o : o;
            var a = l.getDate();
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
            var n = this.getChartVariablePairs().join("&");
            return n.length > 0 && (t += '<param name="flashvars" value="' + n + '" />'), t += "</object>"
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
                n = this._p_(t);
            n.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + e.slice(r, r + 1);
                this.name = l, this.is = i;
                var o = '<div id="div_' + i + '"> ';
                o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, _fieldboard = document.getElementById(i), $("#div_" + i).css({
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px"
                }), $("#" + i).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    display: n.display,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + i, $(".keypad").hide(), $("#keypad-" + i).show(), $("#KeyBoard").show(), $("#keypad-" + i).css({
                        position: "absolute",
                        top: event.clientY + 20 + n.topKey,
                        left: event.clientX + n.leftKey
                    }), _fieldboard = document.getElementById(i)
                }), $("#keypad-" + i).load("config/keyboard.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: n.marginKey,
                    display: n.displayKey
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
                n = this._p_(t),
                l = n.id;
            e.createdCallback = function() {
                this.id = l + "_", X.prototype.getAttribute(this, l).index, X.prototype.getAttribute(this, l).field, this.pims = l;
                var t = '<div id="div-' + l + '"> ';
                t += '<input type="text" id="' + l + '"> ', t += '<div class="keypad" id="keypad-' + l + '"></div> ', t += "</div> ", this.innerHTML = t, _value = document.getElementById(l), pims("#div-" + l).style.display = n.display, pims("#div-" + l).style.position = n.position, pims("#div-" + l).style.left = n.left + "px", pims("#div-" + l).style.top = n.top + "px", POTATO("#" + l).style.top = n.top + "px", $("#div-" + l).css({
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px"
                }), $("#" + l).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    display: n.display,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + l, $(".keypad").hide(), $("#keypad-" + l).show(), $("#KeyBoard").show();
                    var i = document.documentElement,
                        r = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                        o = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                    $("#keypad-" + l).css({
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(n.topKey) + parseFloat(o) + "px",
                        left: parseFloat(event.clientX) + parseFloat(n.leftKey) - parseFloat(r) + "px"
                    }), _fieldboard = document.getElementById(l);
                    try {
                        n.click()
                    } catch (t) {}
                }), $("#keypad-" + l).load(n.htm).click(function() {
                    try {
                        n.change(l)
                    } catch (t) {}
                }).css({
                    width: "200px",
                    height: "150px",
                    display: n.displayKey
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
                n = this._p_(t);
            n.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + e.slice(r, r + 1);
                this.name = l, this.is = i;
                var o = '<div id="div_' + i + '"> ';
                o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, _value = document.getElementById(i), $("#div_" + i).css({
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px"
                }), $("#" + i).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    display: n.display,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + i, $(".keypad").hide(), $("#keypad-" + i).show(), $("#KeyPad").show(), $("#keypad-" + i).css({
                        position: "absolute",
                        top: event.clientY + 20 + n.topKey,
                        left: event.clientX + n.leftKey
                    }), _value = document.getElementById(i)
                }), $("#keypad-" + i).load("config/keypad.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: n.marginKey,
                    display: n.displayKey
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
                n = i.id,
                l = this.x;
            e.createdCallback = function() {
                this.id = i.id + "_", X.prototype.getAttribute(this, n).index, X.prototype.getAttribute(this, n).field, this.pims = n;
                var t = '<div id="div-' + n + '"> ';
                t += '<input type="text" id="' + n + '"> ', t += '<div class="keypad" id="keypad-' + n + '"></div> ', t += "</div> ", this.innerHTML = t, _value = document.getElementById(n), "potato.now" == i.value && (i.value = potato.now), "potato.today()" == i.value && (i.value = potato.today()), "potato.now()" == i.value && (i.value = potato.now()), $("#div-" + n).css({
                    display: i.display,
                    position: i.position,
                    left: i.left + "px",
                    top: i.top + "px"
                }), $("#" + n).css({
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
                    keyID = "keypad-" + n, $(".keypad").hide(), $("#keypad-" + n).show(), $("#KeyPad").show();
                    var l = document.documentElement,
                        r = (window.pageXOffset || l.scrollLeft) - (l.clientLeft || 0),
                        o = (window.pageYOffset || l.scrollTop) - (l.clientTop || 0);
                    if (parseFloat(i.topKey) >= 0) $("#keypad-" + n).css({
                        zIndex: "2000",
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(i.topKey) + parseFloat(o) + "px",
                        left: parseFloat(event.clientX) + parseFloat(i.leftKey) - parseFloat(r) + "px"
                    });
                    else {
                        var a = document.getElementById("keypad-" + n).offsetTop;
                        $("#keypad-" + n).css({
                            position: "absolute",
                            top: parseFloat(a) + "px"
                        })
                    }
                    _value = document.getElementById(n);
                    try {
                        i.click()
                    } catch (t) {}
                }).keyup(function(t) {
                    for (var e = 0; e < _POTATOId.length; e++)
                        if (n == String(_POTATOId[e])) {
                            var i = String(_POTATOBindId[e]);
                            document.getElementById(i).innerText = document.getElementById(n).value
                        }
                }), $("#keypad-" + n).load(i.htm).click(function() {
                    for (var t = 0; t < _POTATOId.length; t++)
                        if (n == String(_POTATOId[t])) {
                            var e = String(_POTATOBindId[t]);
                            document.getElementById(e).innerText = document.getElementById(n).value
                        }
                    try {
                        i.change(n)
                    } catch (t) {}
                    try {
                        i.click(n)
                    } catch (t) {}
                }).css({
                    width: "200px",
                    height: "150px",
                    display: i.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(l, {
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
                                var _ = String(x.slice(A, A + 1)).split(":"),
                                    T = new Function(_.slice(1, 2));
                                "null" != String(_.slice(0, 1)).replace(/\s+/g, "") && (m[String(_.slice(0, 1)).replace(/\s+/g, "")] = T())
                            }
                        _pimS.prototype._rp_(g, m, function(t) {
                            var r = JSON.parse(t),
                                c = "<table class='potato-list-table' id='" + o + "' >",
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
                            }), $("#" + o + " td").css({
                                fontFamily: p.fontFamily,
                                fontWeight: p.fontWeight,
                                fontSize: p.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById(o),
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
                            }), $("#" + o + " th").css("cursor", "pointer").click(function() {
                                var t = document.getElementById(o),
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
            var n = document.registerPotato("pims-loading");
            document.body.appendChild(new n), $("pims-loading").html('Loading...<img src="lib/images/img-loading.gif" style="width:35px;height:35px"/>').show().css({
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
            var l = 1,
                r = setInterval(function() {
                    0 == --l && (clearInterval(r), $("body").css("background", e), i(), $(String.fromCharCode(35, 80, 73, 77, 83)).html("").hide(), $("#body").show())
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
            for (var n = X.prototype.findChildren(t, "tagName", "IMG"), l = 0; l < n.length; l++) n[l].style.filter = i
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
                                var _ = String(x.slice(A, A + 1)).split(":"),
                                    T = new Function(_.slice(1, 2));
                                "null" != String(_.slice(0, 1)).replace(/\s+/g, "") && (m[String(_.slice(0, 1)).replace(/\s+/g, "")] = T())
                            }
                        _pimS.prototype._rp_(s, m, function(t) {
                            var i = JSON.parse(t);
                            check_model = 1;
                            var a = "<table class='potato-menu-table' id='" + o + "' >",
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
                            }), $("#" + o + " td").css({
                                textAlign: "left",
                                fontFamily: r.fontFamily,
                                fontWeight: r.fontWeight,
                                fontSize: r.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById(o),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                potato.table = t.rows[e], potato.ci = i;
                                try {
                                    r.click(t.rows[e], l, i), $("#div-" + o).html("")
                                } catch (t) {}
                                document.getElementById("div-" + o).style.height = "0px"
                            }), $("#" + o + " th").css("cursor", "pointer").click(function() {
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
                    for (var i = String(e).split(" "), n = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmousemove = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onmousemove = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (n = r[o].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmousemove = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onmousemove = t
                }
        },
        MOUSEOUT: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), n = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmouseout = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onmouseout = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < r.length; o++)
                        for (n = r[o].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmouseout = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (o = 0; o < a.length; o++) a[o].onmouseout = t
                }
        },
        MultipleSelect: function(t) {
            var e, i = this._p_(t),
                n = i.id,
                l = document.getElementById(n),
                r = [],
                o = [],
                a = 0;
            $("#" + n + " td").click(function() {
                e = $(this).parent().children().index(this), $(this).parent().parent().children().index(this.parentNode)
            });
            for (var s = 1; s < l.rows.length; s++) l.rows[s].onclick = function() {
                var t = "-";
                try {
                    t = l.rows[d].cells[i.matchCol].innerText
                } catch (t) {}
                if (!("-" != i.matchCol && t != i.matchValue || e != i.selectCol && "any" != i.selectCol)) {
                    var s = i.selectCol,
                        d = i.targetCol;
                    "any" == s && (s = 0), "any" == d && (d = e, s = e);
                    var c = l.rows[this.rowIndex];
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
                    i.callback(r, n)
                }
            }
        },
        now: function() {
            var t = new Date,
                e = t.getDate(),
                i = t.getHours(),
                n = t.getMinutes(),
                l = t.getMonth() + 1,
                r = t.getSeconds(),
                o = t.getFullYear();
            return _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(n) < 10 ? "0" + n : n, _pimS.month = parseInt(l) < 10 ? "0" + l : l, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.year = o, _pimS.title = "_POTATO", _pimS.hour + ":" + _pimS.minute + ":" + _pimS.second
        },
        obj: function(t) {
            t = String(t).toLowerCase();
            return document.getElementById(t)
        },
        optionText: function() {
            return document.getElementById(this.x).options[document.getElementById(this.x).selectedIndex].text
        },
        _p_: function(t) {
            var e, i, n, l, r, o, a, s, d, c, u, p, h, g, m, f, y, b, v, x, A, _, T, S, w, k, C, I, O, E, B, F, $, P, L, D, R, N, z, H, X, M, W, j, K, U, V, Y, q, G, J, Q, Z, tt, et, it, nt, lt, rt, ot, at, st, dt, ct, ut, pt, ht, gt, mt, ft, yt, bt, vt, xt, At, _t, Tt, St, wt, kt, Ct, It, Ot, Et, Bt, Ft, $t, Pt, Lt, Dt, Rt, Nt, zt, Ht, Xt, Mt, Wt, jt, Kt, Ut, Vt, Yt, qt, Gt, Jt, Qt, Zt, te, ee, ie, ne, le, re, oe, ae, se = new Array;
            return this.clearArrays(), t(), null == (jt = css.textTransform) && (jt = "none"), e = css.background, i = css.border, n = css.borderRadius, l = css.boxShadow, null == (r = events.callback) && (r = this.dummy()), null == (o = attr.canvas) && (o = "chart"), null == (a = param.cell) && (a = "0"), null == (d = attr.chartType) && (d = "pie"), null == (c = attr.chartId) && (c = "chart1Id"), null == (g = param.col) && (g = 1e3), null == (f = css.colorIndex) && (f = ["#c5ffb3"]), null == (s = events.change) && (s = this.dummy()), null == (u = attr.className) && (u = "pimsClassName"), null == (p = events.click) && (p = this.dummy()), null == (h = attr.cls) && (h = ""), null == (y = attr.container) && (y = "container"), m = css.color, null == (b = css.cursor) && (b = "default"), null == (v = css.dataFontSize) && (v = 12), null == (x = attr.dataLabel) && (x = "data"), null == (A = attr.dataLabel2) && (A = "data"), null == (_ = attr.disabled) && (_ = !1), T = css.display, null == (S = css.displayKey) && (S = "none"), null == (w = param.editWidth) && (w = 100), null == (k = param.fieldClass) && (k = 0), D = css.float, C = css.fontColorTD, I = css.fontColorTH, O = css.fontFamily, E = css.fontFamilyTD, B = css.fontFamilyTH, F = css.fontSize, $ = css.fontSizeTD, P = css.fontSizeTH, R = css.fontWeight, null == (L = attr.format) && (L = "yy-mm-dd"), null == (N = param.header) && (N = "0"), z = css.height, null == (H = css.heightTable) && (H = 450), null == (X = events.hover) && (X = this.dummy()), M = css.hoverColor, null == (W = css.hoverBgColor) && (W = "null"), j = attr.hoverId, null == (K = attr.hoverText) && (K = ""), null == (V = css.hoverHeight) && (V = 30), null == (U = css.hoverWidth) && (U = ""), null == (Y = param.htm) && (Y = "config/keypad.htm"), q = attr.id, null == (G = param.idCol) && (G = 0), image = attr.image, null == image && (image = "nil 0 0"), J = attr.imageDir, null == (Q = css.imgWidth) && (Q = 45), null == (Z = css.imgHeight) && (Z = 45), null == (tt = events.keyup) && (tt = this.dummy()), null == (nt = css.labelFontSize) && (nt = 12), null == (lt = css.label2FontSize) && (lt = 12), null == (et = attr.labelString) && (et = ""), null == (it = attr.label2String) && (it = ""), at = css.left, null == (st = css.leftKey) && (st = 0), null == (rt = css.legendDisplay) && (rt = !1), null == (ot = css.legendPosition) && (ot = "bottom"), dt = css.margin, ct = css.marginBottom, vt = css.marginLeft, ut = css.marginRight, xt = css.marginTop, null == (gt = param.markSymbol) && (gt = ""), null == (pt = param.matchCol) && (pt = "-"), null == (ht = param.matchValue) && (ht = "-"), null == (bt = css.marginKey) && (bt = "0px 0px 0px 0px"), null == (mt = param.menuModel) && (mt = "null"), null == (ft = param.menuTitle) && (ft = "null"), At = param.model, null == (yt = attr.multiple) && (yt = !1), _t = attr.name, null == (Tt = attr.onscroll) && (Tt = this.dummy()), St = css.padding, css.paddingBottom, wt = css.paddingLeft, css.paddingRight, kt = css.paddingTop, null == (Ct = css.pointBorderColorIndex) && (Ct = ["#000000"]), null == (It = css.pointBorderDash) && (It = [0]), null == (Ot = css.pointBorderWidth) && (Ot = [1]), null == (Et = css.pointColorIndex) && (Et = ["#c5ffb3"]), null == (Bt = css.pointRadius) && (Bt = ["5"]), null == (Ft = css.pointStyle) && (Ft = ["triangle"]), $t = css.position, null == (Pt = param.row) && (Pt = "0"), null == (Lt = param.selectCol) && (Lt = ""), null == (Dt = param.selectColumn) && (Dt = ""), null == (Rt = css.showDay) && (Rt = !1), null == (Nt = attr.stacked) && (Nt = !1), null == (zt = attr.tableId) && (zt = "tableId"), null == (Xt = param.targetId) && (Xt = 0), null == (Mt = attr.targetIndex) && (Mt = 0), null == (Ht = param.targetColumn) && (Ht = ""), null == (se = param.targetCol) && (se = ""), null == (Wt = attr.targetColor) && (Wt = "WHITE"), Kt = css.textAlign, null == (Ut = attr.title) && (Ut = ""), null == (Vt = css.titleFontSize) && (Vt = 25), null == (Yt = attr.tooltips) && (Yt = !0), qt = css.top, null == (Gt = css.topKey) && (Gt = 0), null == (Jt = events.trigger) && (Jt = "ondblclick"), null == (Qt = attr.type) && (Qt = "text"), null == (Zt = attr.value) && (Zt = ""), null == (ie = param.whereClass) && (ie = 0), te = css.width, null == (ee = css.widthTable) && (ee = 130), null == (ne = css.xAxesFontSize) && (ne = 12), null == (le = css.xlabelAngle) && (le = 0), null == (re = css.yAxesFontSize) && (re = 12), null == (oe = css.y2AxesFontSize) && (oe = 12), null == (ae = attr.y2AxesType) && (ae = ""), {
                background: e,
                border: i,
                borderRadius: n,
                boxShadow: l,
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
                disabled: _,
                display: T,
                displayKey: S,
                editWidth: w,
                field: field,
                fieldClass: k,
                fieldOther: fieldOther,
                float: D,
                fontColorTD: C,
                fontColorTH: I,
                fontFamilyTD: E,
                fontFamilyTH: B,
                fontFamily: O,
                fontSize: F,
                fontSizeTD: $,
                fontSizeTH: P,
                fontWeight: R,
                format: L,
                header: N,
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
                labelFontSize: nt,
                label2FontSize: lt,
                left: at,
                leftKey: st,
                legendDisplay: rt,
                legendPosition: ot,
                marginKey: bt,
                markSymbol: gt,
                margin: dt,
                marginBottom: ct,
                marginLeft: vt,
                marginRight: ut,
                marginTop: xt,
                matchCol: pt,
                matchValue: ht,
                menuModel: mt,
                menuTitle: ft,
                model: At,
                multiple: yt,
                name: _t,
                onscroll: Tt,
                padding: St,
                paddingLeft: wt,
                paddingTop: kt,
                params: params,
                pointBorderColorIndex: Ct,
                pointBorderDash: It,
                pointBorderWidth: Ot,
                pointColorIndex: Et,
                pointRadius: Bt,
                pointStyle: Ft,
                position: $t,
                row: Pt,
                selectCol: Lt,
                selectColumn: Dt,
                showDay: Rt,
                stacked: Nt,
                tableId: zt,
                targetIndex: Mt,
                targetColor: Wt,
                targetColumn: Ht,
                targetCol: se,
                targetId: Xt,
                textAlign: Kt,
                textTransform: jt,
                title: Ut,
                titleFontSize: Vt,
                tooltips: Yt,
                top: qt,
                topKey: Gt,
                trigger: Jt,
                type: Qt,
                value: Zt,
                where: where,
                whereClass: ie,
                width: te,
                widthTable: ee,
                xAxesFontSize: ne,
                xlabelAngle: le,
                yAxesFontSize: re,
                y2AxesFontSize: oe,
                y2AxesType: ae
            }
        },
        Post: function(t, e, i) {
            this._rp_(t, e, function(t) {
                i(JSON.parse(t))
            })
        },
        POST: function(t, e) {
            var i = this.x,
                n = [],
                l = 0;
            for (var r in t) {
                if ("WHERE" == r) {
                    l = 1;
                    for (var o in t[r]) {
                        if ("class" == o)
                            for (var a = X.prototype.getIdClass(t[r][o]), s = 0; s < a.length; s++) {
                                var d = String(a[s].id).split("-").slice(2, 3);
                                n[a[s].field] = POTATO("#" + d).value
                            }
                        "class" != o && (n[o] = t[r][o])
                    }
                }
                if ("FIELD" == r) {
                    l = 1;
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
                    u += "'" + POTATO("#" + d).value + "'", n.fields = c, n.fieldsValue = u
                }
            }
            0 == l && (n = t), this._rp_(i, n, function(t) {
                try {
                    e(JSON.parse(t))
                } catch (t) {}
            })
        },
        Radar: function(t) {
            var e = this._p_(t),
                i = this.getHTMLElement(),
                n = this.x,
                l = this.x + ".php",
                r = this.x,
                o = n.split("-"),
                a = o.slice(2, 3);
            o.slice(2, 3);
            if (String(e.params).split("@").slice(1, 2) == n) var s = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                this.innerHTML = '<div id="' + r + '"></div> '
            };
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(n, {
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
            pims().Post(l, d, function(t) {
                var i = new Array;
                i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                for (var l = 0; l < t.length; l++)
                    for (var o = 0; o < i.length; o++) i[o][l] = t[l][o];
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
                                for (var n = 0; n < e.data.length; n++) {
                                    var l = e._meta[Object.keys(e._meta)[0]],
                                        r = l.data[n]._model,
                                        o = l.total,
                                        a = r.innerRadius + (r.outerRadius - r.innerRadius) / 2,
                                        s = r.startAngle,
                                        d = s + (r.endAngle - s) / 2,
                                        c = a * Math.cos(d),
                                        u = a * Math.sin(d);
                                    i.fillStyle = "#000";
                                    var p = String(Math.round(e.data[n] / o * 100)) + "%";
                                    if (n < e.data.length - 1) {
                                        var h = r.x + c + 70;
                                        u > 0 && c < 0 && (h = r.x + c - 50), i.fillText(t[n][0] + ": " + t[n][1] + ", " + p, h, r.y + u + 8)
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
                        e.targetIndex = i[0]._index, e.targetColor = i[0]._model.backgroundColor, e.click(n, i[0]._chart.data.labels[i[0]._index], i[0]._model.backgroundColor)
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
                                if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var n = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                    l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                else l = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                document.getElementById("img-doughnut-" + a).src = l, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + t.labelColors[0].backgroundColor
                            } else {
                                i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                if ($("#note-doughnut-" + a).show().html(i).css("border", "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) n = String(this._data.labels[e.targetIndex]).split("-"), l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                else l = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                document.getElementById("img-doughnut-" + a).src = l, document.getElementById("img-doughnut-" + a).style.display = "block", document.getElementById("img-doughnut-" + a).style.border = "5px solid " + e.targetColor
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
                n = [],
                l = (t = String(t).toUpperCase(), _POTATOElement[t]),
                r = l.getAttribute("model"),
                o = String(l.getAttribute("chartType")).toLowerCase();
            null == o && (o = "bar");
            var a = l.getAttribute("border");
            null == a && (a = "1px solid black");
            var s = l.getAttribute("background");
            null == s && (s = "transparent");
            var d = l.getAttribute("titleDisplay");
            null == d && (d = !0);
            var c = l.getAttribute("titleFontSize");
            null == c && (c = 25);
            var u = l.getAttribute("legendDisplay");
            null == u && (u = !0);
            var p = l.getAttribute("legendPosition");
            null == p && (p = "bottom");
            var h = l.getAttribute("labelFontSize");
            null == h && (h = 12);
            var g = l.getAttribute("label2FontSize");
            null == g && (g = 12);
            var m = l.getAttribute("yAxesFontSize");
            null == m && (m = 12);
            var f = l.getAttribute("y2AxesFontSize");
            null == f && (f = 12);
            var y = l.getAttribute("xAxesFontSize");
            null == y && (y = 12);
            var b = l.getAttribute("dataFontSize");
            null == b && (b = 12);
            var v = l.getAttribute("fontSize");
            null == v && (v = 15);
            var x = l.getAttribute("title");
            null == x && (x = "_b_ Chart");
            var A = l.getAttribute("y2AxesType");
            null == A && (A = "line");
            var _ = l.getAttribute("click");
            if (null != _) {
                var T = l.localName;
                n[String(T)] = new Function(_)
            }
            var S = l.getAttribute("hover");
            if (null != S) {
                T = l.localName;
                i[String(T)] = new Function(S)
            }
            var w = l.getAttribute("imageDir");
            if (null == w) w = "null";
            else {
                var k = new Function(w);
                w = k()
            }
            C = 'dataLabel:"-"';
            try {
                var C = l.getAttribute("params");
                null == C && (C = 'dataLabel:"-"')
            } catch (t) {}
            var I = new Function(l.getAttribute("callback"));
            try {
                O = (O = new Function(l.getAttribute("stacked")))()
            } catch (t) {
                var O;
                null == (O = l.getAttribute("stacked")) && (O = !1)
            }
            null != O && "undefined" != O || null == (O = l.getAttribute("stacked")) && (O = !1);
            try {
                E = (E = new Function(l.getAttribute("tooltips")))()
            } catch (t) {
                var E;
                null == (E = l.getAttribute("tooltips")) && (E = !1)
            }
            null != E && "undefined" != E || null == (E = l.getAttribute("tooltips")) && (E = !0);
            try {
                B = (B = new Function(l.getAttribute("yAxesTitle")))()
            } catch (t) {
                var B;
                null == (B = l.getAttribute("yAxesTitle")) && (B = "")
            }
            null != B && "undefined" != B || null == (B = l.getAttribute("yAxesTitle")) && (B = "");
            try {
                F = (F = new Function(l.getAttribute("y2AxesTitle")))()
            } catch (t) {
                var F;
                null == (F = l.getAttribute("y2AxesTitle")) && (F = "")
            }
            null != F && "undefined" != F || null == (F = l.getAttribute("y2AxesTitle")) && (F = "");
            try {
                $ = ($ = new Function(l.getAttribute("showDay")))()
            } catch (t) {
                var $;
                null == ($ = l.getAttribute("showDay")) && ($ = !0)
            }
            null != $ && "undefined" != $ || null == ($ = l.getAttribute("showDay")) && ($ = !0);
            try {
                P = (P = new Function(l.getAttribute("height")))()
            } catch (t) {
                var P;
                null == (P = l.getAttribute("height")) && (P = 350)
            }
            null != P && "undefined" != P || null == (P = l.getAttribute("height")) && (P = 350);
            try {
                L = (L = new Function(l.getAttribute("width")))()
            } catch (t) {
                var L;
                null == (L = l.getAttribute("width")) && (L = 600)
            }
            null != L && "undefined" != L || null == (L = l.getAttribute("width")) && (L = 600);
            try {
                D = (D = new Function(l.getAttribute("xlabelAngle")))()
            } catch (t) {
                var D;
                null == (D = l.getAttribute("xlabelAngle")) && (D = 0)
            }
            null != D && "undefined" != D || null == (D = l.getAttribute("xlabelAngle")) && (D = 0);
            try {
                R = (R = new Function(l.getAttribute("dataLabel")))()
            } catch (t) {
                var R;
                null == (R = l.getAttribute("dataLabel")) && (R = "data")
            }
            null != R && "undefined" != R || null == (R = l.getAttribute("dataLabel")) && (R = "data");
            try {
                N = (N = new Function(l.getAttribute("dataLabel2")))()
            } catch (t) {
                var N;
                null == (N = l.getAttribute("dataLabel2")) && (N = "data")
            }
            null != N && "undefined" != N || null == (N = l.getAttribute("dataLabel2")) && (N = "data");
            try {
                var z = new Function(l.getAttribute("colorIndex"));
                z = String(z()).split(",")
            } catch (t) {
                try {
                    z = l.getAttribute("colorIndex").split(",")
                } catch (t) {}
                null == z && (z = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            if (null == z || "undefined" == z) {
                try {
                    z = String(l.getAttribute("colorIndex")).split(",")
                } catch (t) {}
                null == z && (z = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            try {
                var H = new Function(l.getAttribute("pointBorderColorIndex"));
                H = String(H()).split(",")
            } catch (t) {
                try {
                    H = String(l.getAttribute("pointBorderColorIndex")).split(",")
                } catch (t) {}
                null == H && (H = ["#000000", "#000000", "#000000", "#000000", "#000000"])
            }
            if (null == H || "undefined" == H) {
                try {
                    H = l.getAttribute("pointBorderColorIndex").split(",")
                } catch (t) {}
                null == H && (H = ["#000000", "#000000", "#000000", "#000000", "#000000"])
            }
            try {
                var X = new Function(l.getAttribute("pointBorderDash"));
                X = String(X()).split(",")
            } catch (t) {
                try {
                    X = String(l.getAttribute("pointBorderDash")).split(",")
                } catch (t) {}
                null == X && (X = [0, 0, 0, 0, 0])
            }
            if (null == X || "undefined" == X) {
                try {
                    X = l.getAttribute("pointBorderDash").split(",")
                } catch (t) {}
                null == X && (X = [0, 0, 0, 0, 0])
            }
            try {
                var M = new Function(l.getAttribute("pointBorderWidth"));
                M = String(M()).split(",")
            } catch (t) {
                try {
                    M = String(l.getAttribute("pointBorderWidth")).split(",")
                } catch (t) {}
                null == M && (M = ["1", "1", "1", "1", "1"])
            }
            if (null == M || "undefined" == M) {
                try {
                    M = l.getAttribute("pointBorderWidth").split(",")
                } catch (t) {}
                null == M && (M = ["1", "1", "1", "1", "1"])
            }
            try {
                var W = new Function(l.getAttribute("pointColorIndex"));
                W = String(W()).split(",")
            } catch (t) {
                try {
                    W = String(l.getAttribute("pointColorIndex")).split(",")
                } catch (t) {}
                null == W && (W = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
            }
            if (null == W || "undefined" == W) {
                try {
                    W = l.getAttribute("pointColorIndex").split(",")
                } catch (t) {}
                null == W && (W = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
            }
            try {
                var j = new Function(l.getAttribute("pointStyle"));
                j = String(j()).split(",")
            } catch (t) {
                try {
                    j = l.getAttribute("pointStyle").split(",")
                } catch (t) {}
                null == j && (j = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
            }
            if (null == j || "undefined" == j) {
                try {
                    j = l.getAttribute("pointStyle").split(",")
                } catch (t) {}
                null == j && (j = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
            }
            K = ["5", "5", "8", "8"];
            try {
                var K = l.getAttribute("pointRadius").split(",")
            } catch (t) {}
            null == K && (K = ["5", "5", "8", "8"]), "false" != e && 0 != e && ("pie" != o ? pims(l.localName)._b_(function() {
                params = C + "@" + l.localName, css = {
                    display: d,
                    background: s,
                    border: a,
                    height: P,
                    width: L,
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
                    xlabelAngle: D,
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
                    dataLabel: R,
                    dataLabel2: N
                }, param = {
                    model: r
                }, null != _ && (events = {
                    callback: function() {
                        try {
                            I()
                        } catch (t) {}
                    },
                    click: function(t, e, i, l) {
                        for (var r in potato.chartLabel = e, potato.chartYvalue = i, potato.chartXvalue = l, n) {
                            String(r) == t && n[r]()
                        }
                    },
                    hover: function(t, e, n, l) {
                        for (var r in potato.chartLabel = e, potato.chartYvalue = n, potato.chartXvalue = l, i) {
                            String(r) == t && i[r]()
                        }
                    }
                })
            }) : pims(l.localName)._dn_(function() {
                params = C + "@" + l.localName, css = {
                    border: a,
                    height: P,
                    width: L,
                    fontSize: v,
                    display: d,
                    dataFontSize: b,
                    titleFontSize: c
                }, attr = {
                    imageDir: w,
                    title: x
                }, param = {
                    model: r
                }, null != _ && (events = {
                    callback: function() {
                        try {
                            I()
                        } catch (t) {}
                    },
                    click: function(t, e, n) {
                        for (var l in potato.chartLabel = n, potato.chartYvalue = e, i) {
                            String(l) == t && i[l]()
                        }
                    }
                })
            }))
        },
        reloadDoughnut: function(t, e) {
            var i = [],
                n = (t = String(t).toUpperCase(), _POTATOElement[t]),
                l = n.getAttribute("border");
            null == l && (l = "1px solid black");
            var r = n.getAttribute("height");
            null == r && (r = 350);
            var o = n.getAttribute("width");
            null == o && (o = 600);
            var a = n.getAttribute("dataFontSize");
            null == a && (a = 12);
            var s = n.getAttribute("fontSize");
            null == s && (s = 15);
            var d = n.getAttribute("imageDir");
            if (null == d) d = "null";
            else {
                var c = new Function(d);
                d = c()
            }
            var u = n.getAttribute("titleDisplay");
            null == u && (u = !1);
            var p = n.getAttribute("titleFontSize");
            null == p && (p = 25);
            var h = n.getAttribute("title");
            null == h && (h = "_dn_ Chart");
            var g = n.getAttribute("click");
            if (null != g) {
                var m = n.localName;
                i[String(m)] = new Function(g)
            }
            var f = new Function(n.getAttribute("callback")),
                y = n.getAttribute("params");
            "false" != e && pims(n.localName)._dn_(function() {
                params = y + "@" + n.localName, css = {
                    border: l,
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
                    click: function(t, e, n) {
                        for (var l in potato.chartLabel = n, potato.chartYvalue = e, i) {
                            String(l) == t && i[l]()
                        }
                    }
                })
            })
        },
        reloadRadar: function(t, e) {
            var i = [],
                n = POTATO.elementradar;
            if (t) switch (t) {
                case 1:
                    n = POTATO.element1radar;
                    break;
                case 2:
                    n = POTATO.element2radar;
                    break;
                case 3:
                    n = POTATO.element3radar;
                    break;
                case 4:
                    n = POTATO.element4radar;
                    break;
                case 5:
                    n = POTATO.element5radar;
                    break;
                case 6:
                    n = POTATO.element6radar;
                    break;
                case 7:
                    n = POTATO.element7radar;
                    break;
                case 8:
                    n = POTATO.element8radar;
                    break;
                case 9:
                    n = POTATO.element9radar
            }
            var l = n.getAttribute("border");
            null == l && (l = "1px solid black");
            var r = n.getAttribute("height");
            null == r && (r = 350);
            var o = n.getAttribute("width");
            null == o && (o = 600);
            var a = n.getAttribute("dataFontSize");
            null == a && (a = 12);
            var s = n.getAttribute("fontSize");
            null == s && (s = 15);
            var d = n.getAttribute("titleDisplay");
            null == d && (d = !1);
            var c = n.getAttribute("titleFontSize");
            null == c && (c = 25);
            var u = n.getAttribute("title");
            null == u && (u = "_dn_ Chart");
            var p = n.getAttribute("click");
            if (null != p) {
                var h = n.localName;
                i[String(h)] = new Function(p)
            }
            var g = new Function(n.getAttribute("callback")),
                m = n.getAttribute("params");
            "false" != e && pims(n.localName).Radar(function() {
                params = m + "@" + n.localName, css = {
                    border: l,
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
                    click: function(t, e, n) {
                        for (var l in potato.chartLabel = n, potato.chartYvalue = e, i) {
                            String(l) == t && i[l]()
                        }
                    }
                })
            })
        },
        reloadTable: function(t) {
            this.setBindTableElements();
            t = String(t).toUpperCase();
            var e, i = _POTATOElement[t],
                n = i.getAttribute("id"),
                l = String(i.localName).split("-");
            null == n && (n = String(l.slice(2, 3)).toLowerCase());
            var r = i.getAttribute("model");
            null == r && (r = String(l.slice(2, 3)).toLowerCase() + ".php");
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
                l = String(i.localName).split("-");
                y = String(l.slice(1, 2))
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
            var _ = i.getAttribute("targetCol");
            null == _ && (_ = 0);
            var T = i.getAttribute("markSymbol");
            null == T && (T = "★"), null != i.getAttribute("selectCellCallback") && new Function(i.getAttribute("selectCellCallback"));
            var S = new Function(i.getAttribute("callback")),
                w = i.getAttribute("multipleSelect"),
                k = (x = i.getAttribute("editCell"), i.getAttribute("htm"));
            pims(i.localName)._tb_({
                FIELD: {
                    class: y
                },
                WHERE: {
                    class: b
                }
            }, function() {
                multipleSelect = w + "@" + i.localName, editCell = x + "@" + i.localName, params = v + "@" + i.localName, css = {
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
                    id: n
                }, param = {
                    model: r,
                    header: o,
                    htm: k
                }, events = {
                    callback: function(t, e) {
                        try {
                            S()
                        } catch (t) {}
                    },
                    click: function(t, i, n, l) {
                        potato.table = t, potato.ri = i, potato.ci = n;
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
            var n = "string" == typeof e ? e : Object.keys(e).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&"),
                l = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            l.open("POST", t);
            return l.onreadystatechange = function() {
                l.readyState > 3 && 200 == l.status && (pims_console = l.responseText, i(l.responseText))
            }, l.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), l.setRequestHeader("Chartset", "UTF-8"), l.send(n), l
        },
        _re_: function(t, e, i) {
            var n = "string" == typeof e ? e : Object.keys(e).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            }).join("&");
            n += "& model=" + _pdir().POTATOModelDir + t;
            var l = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            return l.open("POST", "config/excel.php"), l.onreadystatechange = function() {
                l.readyState > 3 && 200 == l.status && (pims_console = l.responseText, i(l.responseText))
            }, l.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), l.setRequestHeader("Chartset", "UTF-8"), l.setRequestHeader("Content-length", n.length), l.setRequestHeader("Connection", "close"), l.send(n), l
        },
        _rx_: function(t, e, i, n) {
            var l = "string" == typeof i ? i : Object.keys(i).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(i[t])
            }).join("&");
            l += "& model=../apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/" + e;
            var r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            return r.open("POST", "config/xml.php"), r.onreadystatechange = function() {
                r.readyState > 3 && 200 == r.status && (pims_console = r.responseText, n(t, r.responseText))
            }, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.setRequestHeader("Chartset", "UTF-8"), r.setRequestHeader("Content-length", l.length), r.setRequestHeader("Connection", "close"), r.send(l), r
        },
        second: function() {
            var t = (new Date).getSeconds();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        Select: function(t, e, i) {
            var n = this.getHTMLElement(),
                l = this.x,
                r = this._p_(i);
            r.id = l, n.createdCallback = function() {
                this.innerHTML = '<Select id="' + l + '"></Select> ';
                for (var t = (l.match(/-/g) || []).length, e = l.split("-"), i = e.slice(2, 3), n = 3; n <= t; n++) i = i + "_" + e.slice(n, n + 1);
                this.name = i, this.is = l, $("#" + l).css({
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
                var e = document.getElementById(l),
                    i = JSON.parse(t);
                e.length = 0;
                var n = 0;
                for (var o in i)
                    if ("undefined" != i[o].d0 && null != i[o].d0) {
                        var a = i[o].d1;
                        T = i[o].d0, e[n] = new Option(a, T), n++
                    }
                r.callback()
            });
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: n,
                    extends: "div"
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: n,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        SELECT: function(t, e) {
            var i = this._p_(e),
                n = this.getHTMLElement(),
                l = this.x,
                r = String(l).split("-").slice(2, 3),
                o = l + ".php",
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
            d > 0 ? s.fieldsLength = 2 : s = {}, n.createdCallback = function() {
                this.id = r + "_";
                var t = document.getElementById(l);
                try {
                    this.index = t.getAttribute("index"), this.field = t.getAttribute("field"), null == this.index && (this.index = 0), null == this.field && (this.field = 0)
                } catch (t) {}
                this.pims = l, this.innerHTML = '<Select id="pims-' + l + '"></Select> ', (t = document.getElementById(r)).style.width = i.width + "px", "string" == typeof i.width && (t.style.width = i.width), t.style.height = i.height + "px", "string" == typeof i.height && (t.style.height = i.height), t.style.background = i.background, t.style.boxShadow = i.boxShadow, t.style.color = i.color, t.style.display = i.display, t.style.fontFamily = i.fontFamily, t.style.fontWeight = i.fontWeight, t.style.fontSize = i.fontSize + "px", "string" == typeof i.fontSize && (t.style.fontSize = i.fontSize), t.style.textAlign = i.textAlign, t.style.padding = i.padding, t.style.border = i.border, t.style.position = i.position, t.style.left = i.left + "px", "string" == typeof i.left && (t.style.left = i.left), t.style.top = i.top + "px", "string" == typeof i.top && (t.style.top = i.top), t.style.borderRadius = i.borderRadius + "px", "string" == typeof i.borderRadius && (t.style.borderRadius = i.borderRadius), t.style.textTransform = i.textTransform, t.style.cursor = "pointer", t.multiple = i.multiple, X("#" + r).CLICK(function() {
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
                }), X("#" + l).CHANGE(function() {
                    try {
                        i.change()
                    } catch (t) {}
                })
            }, this._rp_(o, s, function(t) {
                var e = document.getElementById(r),
                    n = JSON.parse(t);
                e.length = 0;
                var l = 0;
                for (var o in n)
                    if ("undefined" != n[o][0] && null != n[o][0]) {
                        var a = n[o][1];
                        T = n[o][0], e[l] = new Option(a, T), l++
                    }
                i.callback()
            });
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: n,
                    extends: "div"
                })
            } catch (t) {}
        },
        scrollx: function(t, e, i) {
            for (var n = this.x, l = document.getElementsByClassName(t), r = 0; r < l.length; r++) parseFloat(document.getElementById(n).scrollLeft) > e ? l[r].style.left = i ? parseFloat(document.getElementById(n).scrollLeft) + parseFloat(i) + "px" : document.getElementById(n).scrollLeft + "px" : l[r].style.left = "0px"
        },
        scrolly: function(t, e, i) {
            for (var n = this.x, l = document.getElementsByClassName(t), r = 0; r < l.length; r++) parseFloat(document.getElementById(n).scrollTop) > e ? l[r].style.top = i ? parseFloat(document.getElementById(n).scrollTop) + parseFloat(i) + "px" : document.getElementById(n).scrollTop + "px" : l[r].style.top = "0px"
        },
        setBindTableElements: function() {
            _POTATOArray = [];
            for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e++) {
                var i = t[e].getAttribute("bind");
                try {
                    if (null != i) {
                        var n = String(t[e].getAttribute("id")).split("_").slice(0, 1);
                        null == field && (field = n), _POTATOArray.push({
                            id: n,
                            value: document.getElementById(n).value,
                            bind: i
                        })
                    }
                } catch (t) {}
            }
        },
        _se_a: function(t, e, i, n) {
            var l = e.getAttribute(i);
            if (null == l)
                if (null != t)
                    if (-1 == t.indexOf(i)) l = n;
                    else {
                        var r = t.split(i);
                        v2 = String(r.slice(1, 2)).split(":"), -1 != String(v2.slice(1, 2)).indexOf(";") ? (v3 = String(v2.slice(1, 2)).split(";"), l = v3.slice(0, 1)) : l = v2.slice(1, 2)
                    } else l = n;
            return l
        },
        _se_: function() {
            var t, e = document.getElementsByTagName("*"),
                i = [],
                n = [],
                l = [],
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
                        var b = e[t].getAttribute("style"),
                            v = this._se_a(b, e[t], "background", "#eeeeee"),
                            x = this._se_a(b, e[t], "border", "1px solid black"),
                            A = this._se_a(b, e[t], "borderRadius", "5"),
                            _ = this._se_a(b, e[t], "boxShadow", "0 0 0px rgba(0,0,0,0)"),
                            T = this._se_a(b, e[t], "color", "black"),
                            S = this._se_a(b, e[t], "display", "block"),
                            w = this._se_a(b, e[t], "fontFamily", "Tempus Sans ITC"),
                            k = this._se_a(b, e[t], "fontSize", "15"),
                            C = this._se_a(b, e[t], "fontWeight", "normal"),
                            I = this._se_a(b, e[t], "height", "30"),
                            O = this._se_a(b, e[t], "hoverBgColor0", "yellow"),
                            E = this._se_a(b, e[t], "margin", "2px 2px 2px 2px"),
                            B = this._se_a(b, e[t], "marginBottom", "2"),
                            F = this._se_a(b, e[t], "marginLeft", "2"),
                            P = this._se_a(b, e[t], "marginRight", "2"),
                            L = this._se_a(b, e[t], "marginTop", "2"),
                            D = this._se_a(b, e[t], "padding", "5px 0px 5px 5px"),
                            R = this._se_a(b, e[t], "paddingBottom", "1"),
                            N = this._se_a(b, e[t], "paddingLeft", "1"),
                            z = this._se_a(b, e[t], "paddingRight", "1"),
                            H = this._se_a(b, e[t], "paddingTop", "1"),
                            M = this._se_a(b, e[t], "textAlign", "center"),
                            W = this._se_a(b, e[t], "width", "100"),
                            j = (this._se_a(b, e[t], "", ""), e[t].getAttribute("id"));
                        null == j && (j = String(y.slice(2, 3)).toLowerCase());
                        var K, U, V = this._se_a(b, e[t], "hoverId", "potatoHoverText"),
                            Y = this._se_a(b, e[t], "hoverText", ""),
                            q = this._se_a(b, e[t], "left", "0"),
                            G = this._se_a(b, e[t], "top", "0"),
                            J = this._se_a(b, e[t], "position", "static"),
                            Q = e[t].getAttribute("submit"),
                            Z = e[t].getAttribute("fieldOther"),
                            tt = e[t].getAttribute("params"),
                            et = e[t].getAttribute("whereClass");
                        pims(e[t].localName)._bt_(function() {
                            if (where = et + "@" + e[t].localName, field = Q + "@" + e[t].localName, fieldOther = Z + "@" + e[t].localName, params = tt + "@" + e[t].localName, css = {
                                    background: v,
                                    border: x,
                                    borderRadius: A,
                                    boxShadow: _,
                                    color: T,
                                    display: S,
                                    fontFamily: w,
                                    fontSize: k,
                                    fontWeight: C,
                                    height: I,
                                    hoverBgColor: O,
                                    left: q,
                                    margin: E,
                                    marginBottom: B,
                                    marginLeft: F,
                                    marginRight: P,
                                    marginTop: L,
                                    padding: D,
                                    paddingBottom: R,
                                    paddingLeft: N,
                                    paddingRight: z,
                                    paddingTop: H,
                                    position: J,
                                    textAlign: M,
                                    top: G,
                                    width: W
                                }, null != e[t].getAttribute("value") && null != e[t].getAttribute("image") ? attr = {
                                    value: e[t].getAttribute("value"),
                                    image: e[t].getAttribute("image"),
                                    hoverText: Y,
                                    hoverId: V,
                                    id: j
                                } : null != e[t].getAttribute("value") && null == e[t].getAttribute("image") ? attr = {
                                    value: e[t].getAttribute("value"),
                                    hoverText: Y,
                                    id: j
                                } : null == e[t].getAttribute("value") && null != e[t].getAttribute("image") && (attr = {
                                    image: e[t].getAttribute("image"),
                                    hoverText: Y,
                                    id: j
                                }), null != e[t].getAttribute("click")) try {
                                K = new Function(e[t].getAttribute("click")), null != e[t].getAttribute("callback") && (U = new Function(e[t].getAttribute("callback"))), events = {
                                    click: K,
                                    callback: U
                                }
                            } catch (t) {} else try {
                                try {
                                    K = new Function("_POTATO." + String(y.slice(2, 3)).toLowerCase() + "()")
                                } catch (t) {
                                    K = new Function(j + "()")
                                }
                                null != e[t].getAttribute("callback") && (U = new Function(e[t].getAttribute("callback"))), events = {
                                    click: K,
                                    callback: U
                                }
                            } catch (t) {}
                        })
                    }
                    if ("CALENDAR" == y.slice(1, 2)) {
                        var it = e[t].getAttribute("background");
                        null == it && (it = "#ffffff");
                        var nt = e[t].getAttribute("border");
                        null == nt && (nt = "1px solid grey");
                        var lt = e[t].getAttribute("borderRadius");
                        null == lt && (lt = 7);
                        var rt = e[t].getAttribute("fontSize"),
                            ot = e[t].getAttribute("display");
                        null == ot && (ot = "block"), null == rt && (rt = 15);
                        var at = e[t].getAttribute("height");
                        null == at && (at = 30);
                        var st = e[t].getAttribute("hoverBgColor");
                        null == st && (st = "yellow");
                        var dt = e[t].getAttribute("hoverText");
                        null == dt && (dt = "");
                        var ct = e[t].getAttribute("value"); - 1 != String(ct).indexOf("return") && (ct = new Function(e[t].getAttribute("value"))), null == ct && (ct = pims().GetDate("today", "-", 0));
                        var ut = e[t].getAttribute("width");
                        null == ut && (ut = 100);
                        var pt, ht = e[t].getAttribute("padding");
                        null == ht && (ht = "0px 0px 0px 0px"), null == (pt = e[t].getAttribute("id")) && (pt = String(y.slice(2, 3)).toLowerCase());
                        var gt = e[t].getAttribute("class");
                        if (null == gt && (gt = "getFIELD"), $(e[t].localName).addClass(gt), null != (Re = e[t].getAttribute("change"))) {
                            h = e[t].localName;
                            l[String(h)] = new Function(Re)
                        }
                        pims(e[t].localName)._d_(function() {
                            css = {
                                height: at,
                                width: ut,
                                fontSize: rt,
                                hoverBgColor: st,
                                border: nt,
                                borderRadius: lt,
                                background: it,
                                padding: ht,
                                display: ot
                            }, attr = {
                                value: ct,
                                hoverText: dt,
                                id: pt,
                                name: pt
                            }, null != Re && (events = {
                                change: function(t) {
                                    for (var e in l) {
                                        String(e) == t && l[e]()
                                    }
                                }
                            })
                        })
                    }
                    if ("KEYPAD" == y.slice(1, 2)) {
                        var mt = e[t].getAttribute("background");
                        null == mt && (mt = "#ffffff");
                        var ft = e[t].getAttribute("borderRadius");
                        null == ft && (ft = 7);
                        var yt = e[t].getAttribute("fontSize");
                        null == yt && (yt = 15);
                        var bt = e[t].getAttribute("height");
                        null == bt && (bt = 30);
                        var vt = e[t].getAttribute("hoverBgColor");
                        null == vt && (vt = "yellow");
                        var xt = e[t].getAttribute("htm");
                        null == xt && (xt = "config/keypad.htm");
                        var At = e[t].getAttribute("left");
                        null == At && (At = 0);
                        var _t = e[t].getAttribute("top");
                        null == _t && (_t = 0);
                        var Tt = e[t].getAttribute("value");
                        null == Tt && (Tt = "0");
                        var St = e[t].getAttribute("width");
                        null == St && (St = 100);
                        var wt = e[t].getAttribute("id");
                        null == wt && (wt = String(y.slice(2, 3)).toLowerCase());
                        var kt = e[t].getAttribute("border");
                        null == kt && (kt = "1px solid black");
                        var Ct = e[t].getAttribute("class");
                        null == Ct && (Ct = "getFIELD"), $(e[t].localName).addClass(Ct);
                        var It = new Function(e[t].getAttribute("change")),
                            Ot = new Function(e[t].getAttribute("click"));
                        pims(e[t].localName)._kp_(function() {
                            param = {
                                htm: xt
                            }, css = {
                                height: bt,
                                width: St,
                                fontSize: yt,
                                hoverBgColor: vt,
                                borderRadius: ft,
                                background: mt,
                                topKey: _t,
                                leftKey: At,
                                border: kt
                            }, attr = {
                                value: Tt,
                                id: wt,
                                name: wt
                            }, events = {
                                change: It,
                                click: Ot
                            }
                        })
                    }
                    if ("LIST" == y.slice(1, 2)) {
                        var Et = e[t].getAttribute("background");
                        null == Et && (Et = "#ffffff");
                        var Bt = e[t].getAttribute("borderRadius");
                        null == Bt && (Bt = 7);
                        var Ft = e[t].getAttribute("fontSize");
                        null == Ft && (Ft = 15);
                        var $t = e[t].getAttribute("height");
                        null == $t && ($t = 30);
                        var Pt = e[t].getAttribute("hoverBgColor");
                        null == Pt && (Pt = "yellow");
                        var Lt = e[t].getAttribute("hoverText");
                        null == Lt && (Lt = "");
                        var Dt = e[t].getAttribute("value");
                        null == Dt && (Dt = "0");
                        var Rt = e[t].getAttribute("width");
                        null == Rt && (Rt = 100);
                        var Nt = e[t].getAttribute("widthTable");
                        null == Nt && (Nt = 550);
                        var zt = e[t].getAttribute("heightTable");
                        null == zt && (zt = 450);
                        var Ht = e[t].getAttribute("id");
                        null == Ht && (Ht = String(y.slice(2, 3)).toLowerCase());
                        var Xt = e[t].getAttribute("model");
                        null == Xt && (Xt = String(y.slice(2, 3)).toLowerCase() + ".php");
                        var Mt = e[t].getAttribute("class");
                        null == Mt && (Mt = "getFIELD"), $(e[t].localName).addClass(Mt);
                        var Wt = e[t].getAttribute("whereClass"),
                            jt = e[t].getAttribute("params"),
                            Kt = e[t].getAttribute("onscroll");
                        if (null != (De = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            n[String(h)] = new Function(De)
                        } else try {
                            h = e[t].localName;
                            n[String(h)] = new Function(String(y.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (ge = e[t].getAttribute("callback"))) {
                            h = e[t].localName;
                            i[String(h)] = new Function(ge)
                        }
                        var Ut = e[t].getAttribute("topTable"),
                            Vt = e[t].getAttribute("leftTable"),
                            Yt = e[t].getAttribute("display"),
                            qt = String(e[t].localName);
                        pims(qt)._lt_(function() {
                            try {
                                where = Wt + "@" + qt
                            } catch (t) {}
                            try {
                                params = jt + "@" + qt
                            } catch (t) {}
                            css = {
                                display: Yt,
                                height: $t,
                                width: Rt,
                                fontSize: Ft,
                                hoverBgColor: Pt,
                                borderRadius: Bt,
                                background: Et,
                                marginTop: Ut + "_" + qt,
                                marginLeft: Vt + "_" + qt,
                                widthTable: Nt + "_" + qt,
                                heightTable: zt + "_" + qt
                            }, param = {
                                model: Xt
                            }, attr = {
                                onscroll: Kt,
                                value: Dt,
                                hoverText: Lt,
                                id: Ht
                            }, events = {
                                click: function(t, e, i) {
                                    for (var l in potato.table = t, potato.ci = i, n) {
                                        String(l) == e && n[l]()
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
                        var Gt = e[t].getAttribute("background");
                        null == Gt && (Gt = "#ffffff");
                        var Jt = e[t].getAttribute("border");
                        null == Jt && (Jt = "0px");
                        var Qt = e[t].getAttribute("menuModel");
                        null == Qt && (Qt = "null");
                        var Zt = e[t].getAttribute("menuTitle");
                        null == Zt && (Zt = "null");
                        var te = e[t].getAttribute("padding"),
                            ee = e[t].getAttribute("color");
                        null == ee && (ee = "BLUE");
                        var ie = e[t].getAttribute("borderRadius");
                        null == ie && (ie = 7);
                        var ne = e[t].getAttribute("fontSize");
                        null == ne && (ne = 15);
                        var le = e[t].getAttribute("height");
                        null == le && (le = 30);
                        var re = e[t].getAttribute("hoverBgColor");
                        null == re && (re = "yellow");
                        var oe = e[t].getAttribute("hoverText");
                        null == oe && (oe = "");
                        var ae = e[t].getAttribute("value");
                        null == ae && (ae = "0");
                        var se = e[t].getAttribute("width");
                        null == se && (se = document.innerWidth + "px");
                        var de = e[t].getAttribute("widthMenu");
                        null == de && (de = 550);
                        var ce = e[t].getAttribute("heightTable");
                        null == ce && (ce = 450);
                        var ue = e[t].getAttribute("id");
                        null == ue && (ue = String(y.slice(2, 3)).toLowerCase());
                        var pe = e[t].getAttribute("model");
                        null == pe && (pe = String(y.slice(2, 3)).toLowerCase() + ".php");
                        var he = e[t].getAttribute("class");
                        null == he && (he = "getFIELD"), $(e[t].localName).addClass(he);
                        var ge, me = e[t].getAttribute("whereClass"),
                            fe = e[t].getAttribute("params"),
                            ye = e[t].getAttribute("onscroll");
                        if (null != (De = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            d[String(h)] = new Function(De)
                        } else try {
                            h = e[t].localName;
                            d[String(h)] = new Function(String(y.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (ge = e[t].getAttribute("callback"))) {
                            h = e[t].localName;
                            s[String(h)] = new Function(ge)
                        }
                        var be = e[t].getAttribute("topTable"),
                            ve = e[t].getAttribute("leftTable"),
                            xe = e[t].getAttribute("display");
                        qt = String(e[t].localName);
                        pims(qt)._m_(function() {
                            try {
                                where = me + "@" + qt
                            } catch (t) {}
                            try {
                                params = fe + "@" + qt
                            } catch (t) {}
                            css = {
                                display: xe,
                                height: le,
                                width: se,
                                color: ee,
                                fontSize: ne,
                                hoverBgColor: re,
                                borderRadius: ie,
                                border: Jt,
                                background: Gt,
                                padding: te,
                                marginTop: be + "_" + qt,
                                marginLeft: ve + "_" + qt,
                                widthTable: de + "_" + qt,
                                heightTable: ce + "_" + qt
                            }, param = {
                                model: pe,
                                menuTitle: Zt,
                                menuModel: Qt
                            }, attr = {
                                onscroll: ye,
                                value: ae,
                                hoverText: oe,
                                id: ue
                            }, events = {
                                click: function(t, e, i) {
                                    for (var n in potato.table = t, potato.ci = i, d) {
                                        String(n) == e && d[n]()
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
                    if ("TABLE" == y.slice(1, 2)) POTATO.element = e[t], _POTATOElement[y.slice(2, 3)] = e[t], null == (pt = e[t].getAttribute("id")) && (pt = String(y.slice(2, 3)).toLowerCase()), null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadTable(pt) : X.prototype.reloadTable(pt, "false");
                    if ("TEXT" == y.slice(1, 2)) {
                        b = e[t].getAttribute("style");
                        var Ae = this._se_a(b, e[t], "background", "#ffffff"),
                            _e = this._se_a(b, e[t], "border", "1px solid black"),
                            Te = this._se_a(b, e[t], "borderRadius", "5"),
                            Se = (this._se_a(b, e[t], "boxShadow", "0 0 0px rgba(0,0,0,0)"), this._se_a(b, e[t], "color", "black")),
                            we = this._se_a(b, e[t], "display", "block"),
                            ke = (this._se_a(b, e[t], "fontFamily", "Tempus Sans ITC"), this._se_a(b, e[t], "fontSize", "15")),
                            Ce = (this._se_a(b, e[t], "fontWeight", "normal"), this._se_a(b, e[t], "height", "30")),
                            Ie = this._se_a(b, e[t], "hoverBgColor0", "yellow"),
                            Oe = (this._se_a(b, e[t], "margin", "2px 2px 2px 2px"), this._se_a(b, e[t], "marginBottom", "2"), this._se_a(b, e[t], "marginLeft", "2"), this._se_a(b, e[t], "marginRight", "2"), this._se_a(b, e[t], "marginTop", "2"), this._se_a(b, e[t], "padding", "5px 0px 5px 5px"), this._se_a(b, e[t], "paddingBottom", "1"), this._se_a(b, e[t], "paddingLeft", "1"), this._se_a(b, e[t], "paddingRight", "1"), this._se_a(b, e[t], "paddingTop", "1"), this._se_a(b, e[t], "textAlign", "center"), this._se_a(b, e[t], "width", "100"));
                        null == (Pe = e[t].getAttribute("id")) && (Pe = String(y.slice(2, 3)).toLowerCase());
                        var Ee = this._se_a(b, e[t], "hoverId", "potatoHoverText"),
                            Be = this._se_a(b, e[t], "hoverText", ""),
                            Fe = (this._se_a(b, e[t], "left", "0"), this._se_a(b, e[t], "top", "0"), this._se_a(b, e[t], "position", "static"), e[t].getAttribute("cursor"));
                        null == Fe && (Fe = "default"), null == (we = e[t].getAttribute("display")) && (we = "block");
                        var $e = e[t].getAttribute("disabled");
                        null == (ke = e[t].getAttribute("fontSize")) && (ke = 15), null == (Ce = e[t].getAttribute("height")) && (Ce = 30), null == (Ie = e[t].getAttribute("hoverBgColor")) && (Ie = "yellow"), null == (Be = e[t].getAttribute("hoverText")) && (Be = "");
                        var Pe, Le = e[t].getAttribute("value");
                        null == Le && (Le = "0"), null == (Oe = e[t].getAttribute("width")) && (Oe = 100), null == (Pe = e[t].getAttribute("id")) && (Pe = String(y.slice(2, 3)).toLowerCase());
                        var De, Re, Ne = e[t].getAttribute("class");
                        if (null == Ne && (Ne = "getFIELD"), $(e[t].localName).addClass(Ne), null != (De = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            r[String(h)] = new Function(De)
                        }
                        if (null != (Re = e[t].getAttribute("change"))) {
                            h = e[t].localName;
                            a[String(h)] = new Function(Re)
                        }
                        var ze = e[t].getAttribute("keyup");
                        if (null != ze) {
                            h = e[t].localName;
                            o[String(h)] = new Function(ze)
                        }
                        pims(e[t].localName)._tx_(function() {
                            css = {
                                height: Ce,
                                width: Oe,
                                fontSize: ke,
                                hoverBgColor: Ie,
                                border: _e,
                                borderRadius: Te,
                                background: Ae,
                                display: we,
                                color: Se,
                                cursor: Fe
                            }, attr = {
                                disabled: $e,
                                value: Le,
                                hoverText: Be,
                                hoverId: Ee,
                                id: Pe
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
                n = this.x,
                l = n + ".php";
            if (null != i.model && (l = i.model + ".php"), i.id = n, "string" == typeof t)
                for (var r = X.prototype.getIdClass(t), o = (t = [], 0); o < r.length; o++) "length" != r[o].name && (t[r[o].name] = pims(r[o].is).value());
            this._re_(l, t, function(t) {
                try {
                    i.callback()
                } catch (t) {}
            })
        },
        Table: function(t, e) {
            var i = this._p_(e),
                n = this.x,
                l = n + ".php";
            if (null != i.model && (l = i.model + ".php"), i.id = n, "string" == typeof t)
                for (var r = X.prototype.getIdClass(t), o = (t = [], 0); o < r.length; o++) "length" != r[o].name && (t[r[o].name] = pims(r[o].is).value());
            this._rp_(l, t, function(t) {
                "tableId" == i.tableId && (i.tableId = "table_" + n);
                var e = JSON.parse(t),
                    l = "<table id=" + i.tableId + " class=" + i.cls + ">";
                if (null != i.data.d0) {
                    var r, o = (new Array, 0);
                    for (r in l += "<tr>", i.data) l += "<th>" + i.data["d" + o] + "</th>", o += 1;
                    for (var a in l += "</tr>", e)
                        if ("undefined" != e[a].d0 && null != e[a].d0) {
                            l += "<tr>";
                            for (var s = 0; o > s; s++) l += "<td>" + e[a]["d" + s] + "</td>";
                            l += "</tr>"
                        }
                } else {
                    o = 0;
                    for (r in l += "<tr>", e[0]) "" != e[0][r] ? l += "<th>" + e[0][r] + "</th>" : l += "<th style='display:none'>" + e[0][r] + "</th>", o++;
                    for (var a in l += "</tr>", e)
                        if ("undefined" != e[a][0] && null != e[a][0] && a > 0) {
                            l += "<tr>";
                            for (s = 0; o > s; s++) "" != e[0][s] ? l += "<td>" + e[a][s] + "</td>" : l += "<td style='display:none'>" + e[a][s] + "</td>";
                            l += "</tr>"
                        }
                }
                l += "</table>", $("#" + n).html(l).show().css({
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
                        var n = c.find(".highlight").prev();
                        X.prototype.tableHighlight(n[0].rowIndex, i.tableId)
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
            for (var n = this._p_(i), l = this.getHTMLElement(), r = this.x, o = [
                    []
                ], a = n.id, s = String(n.header).split(","), d = 0; d < _POTATOArray.length; d++) a == String(_POTATOArray[d].bind) && (o[_POTATOArray[d].id] = _POTATOArray[d].value, 0);
            l.createdCallback = function() {
                this.innerHTML = '<div id="div-' + a + '" ></div> '
            }, this._rp_(n.model, o, function(t) {
                var i = JSON.parse(t),
                    l = "<table id=" + n.id + " style='border-collapse:collapse;width:99%'>";
                if (null != s && s.length > 0) {
                    var o = 0;
                    for (e in l += "<tr>", s) "" != s[e] ? l += "<th style='border:1px solid black;font-size:" + n.fontSizeTH + "px;color:" + n.fontColorTH + ";font-family:" + n.fontFamilyTH + "'>" + s[e] + "</th>" : l += "<th style='display:none'>" + s[e] + "</th>", o++;
                    for (var d in l += "</tr>", i)
                        if ("undefined" != i[d][0] && null != i[d][0] && d >= 0) {
                            l += "<tr>";
                            for (var c = 0; c < o; c++) "" != s[c] && null != s[c] ? l += "<td style='border:1px solid black;padding-left:5px;font-size:" + n.fontSizeTD + "px;color:" + n.fontColorTD + ";font-family:" + n.fontFamilyTD + "'>" + i[d][c] + "</td>" : l += "<td style='display:none'>" + i[d][c] + "</td>";
                            l += "</tr>"
                        }
                } else {
                    o = 0;
                    for (e in l += "<tr>", i[0]) "" != i[0][e] ? l += "<th style='border:1px solid black;font-size:" + n.fontSizeTH + "px;color:" + n.fontColorTH + ";font-family:" + n.fontFamilyTH + "'>" + i[0][e] + "</th>" : l += "<th style='display:none'>" + i[0][e] + "</th>", o++;
                    for (var d in l += "</tr>", i)
                        if ("undefined" != i[d][0] && null != i[d][0] && d > 0) {
                            l += "<tr>";
                            for (c = 0; o > c; c++) "" != i[0][c] && null != i[0][c] && "undefined" != i[0][c] ? l += "<td style='border:1px solid black;font-size:" + n.fontSizeTD + "px;color:" + n.fontColorTD + ";font-family:" + n.fontFamilyTD + "'>" + i[d][c] + "</td>" : l += "<td style='display:none'>" + i[d][c] + "</td>";
                            l += "</tr>"
                        }
                }
                l += "</table>", $("#div-" + a).html(l).show().css({
                    overflow: "auto",
                    width: n.width + "px",
                    height: n.height + "px",
                    background: n.background,
                    display: n.display,
                    border: n.border,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px",
                    borderRadius: n.borderRadius + "px"
                });
                var u = document.getElementById(n.id),
                    p = $("#" + n.id + " tbody");
                $(document).keydown(function(t) {
                    if (p.find(".highlight").length)
                        if (40 == t.which) {
                            var e = p.find(".highlight").next();
                            X.prototype.tableHighlight(e[0].rowIndex, n.tableId)
                        } else if (38 == t.which) {
                        var i = p.find(".highlight").prev();
                        X.prototype.tableHighlight(i[0].rowIndex, n.tableId)
                    }
                });
                try {
                    if (potato.table = u, n.callback(u, n.id), String(editCell).split("@").slice(1, 2) == r) {
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
                                id: n.id
                            }, param = g;
                            var t = new Function("return " + String(g.callback));
                            events = {
                                callback: t()
                            }
                        })
                    }
                    if (String(multipleSelect).split("@").slice(1, 2) == r) {
                        var A = String(multipleSelect).split("@").slice(0, 1),
                            _ = [];
                        if (null != A[0] && "null" != A[0])
                            for (f = (String(A[0]).match(/,/g) || []).length, y = String(A[0]).split(","), b = 0; b <= f; b++) {
                                v = String(y.slice(b, b + 1)).split(":");
                                _[String(v.slice(0, 1)).replace(/\s+/g, "")] = v.slice(1, 2)
                            }
                        potato.MultipleSelect(function() {
                            attr = {
                                id: n.id
                            }, param = _;
                            var t = new Function("return " + String(_.callback));
                            events = {
                                callback: t()
                            }
                        })
                    }
                } catch (t) {}
                $("#" + n.id + " td").click(function() {
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (var t = 0; t < o; t++) 0;
                    n.click(u.rows[ri], ri, ci, n.id)
                })
            });
            try {
                pimsElement = document.registerPotato(r, {
                    prototype: l
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(r, {
                        prototype: l,
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
                n = this._p_(t);
            n.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + e.slice(r, r + 1);
                this.name = l, this.is = i, this.innerHTML = '<input type="text" id="' + i + '" class="' + n.className + '"> ', $("#" + i).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    display: n.display,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    textTransform: n.textTransform,
                    cursor: n.cursor
                }).attr({
                    value: n.value,
                    type: n.type
                }).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).keyup(function(t) {
                    try {
                        n.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        n.change()
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
                        n.click()
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
                n = this.x,
                l = e.id;
            "potato.now" == e.value && (e.value = potato.now), "potato.today()" == e.value && (e.value = potato.today()), "potato.now()" == e.value && (e.value = potato.now()), i.createdCallback = function() {
                this.id = l + "_", X.prototype.getAttribute(this, n).index, X.prototype.getAttribute(this, n).field, this.pims = n, this.innerHTML = '<input type="text" id="' + l + '" class="' + e.className + '"> ', $("#" + l).css({
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
                        if (String(l).toLowerCase() == String(_POTATOId[i]).toLowerCase()) {
                            var r = String(_POTATOBindId[i]);
                            document.getElementById(r).value = document.getElementById(l).value
                        }
                    try {
                        e.keyup(n, t)
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
                        e.click(n)
                    } catch (t) {}
                })
            };
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(n, {
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
                n = t.getSeconds();
            return e >= 12 && "pm", i < 10 && (i = "0" + i), n < 10 && (n = "0" + n), e + ":" + i + ":" + n
        },
        Timepad: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                n = this._p_(t);
            n.id = i, e.createdCallback = function() {
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + e.slice(r, r + 1);
                this.name = l, this.is = i;
                var o = '<div id="div_' + i + '"> ';
                o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, _fieldtime = document.getElementById("input-" + i), $("#div_" + i).css({
                    display: n.display,
                    position: n.position,
                    left: n.left + "px",
                    top: n.top + "px"
                }), $("#" + i).css({
                    width: n.width + "px",
                    height: n.height + "px",
                    color: n.color,
                    display: n.display,
                    background: n.background,
                    boxShadow: n.boxShadow,
                    fontFamily: n.fontFamily,
                    fontWeight: n.fontWeight,
                    fontSize: n.fontSize + "px",
                    textAlign: n.textAlign,
                    padding: n.padding,
                    border: n.border,
                    borderRadius: n.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", n.value).mousemove(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: n.hoverHeight + "px",
                        width: n.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + i, $(".keypad").hide(), $("#keypad-" + i).show().css({
                        position: "absolute",
                        top: event.clientY + 20 + n.topKey,
                        left: event.clientX + n.leftKey
                    }), $("#TimePad").show(), _fieldtime = document.getElementById(i)
                }), $("#keypad-" + i).load("config/timepad.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: n.marginKey,
                    display: n.displayKey
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
                n = t.getMinutes(),
                l = t.getMonth() + 1,
                r = t.getSeconds(),
                o = t.getFullYear();
            return _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(n) < 10 ? "0" + n : n, _pimS.month = parseInt(l) < 10 ? "0" + l : l, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.year = o, _pimS.title = "_POTATO", _pimS.now = _pimS.hour + ":" + _pimS.minute, o + "-" + Oget.month + "-" + Oget.day
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
    for (var e = parseFloat(t[0]), i = t.length, n = 1; n < i; n++) parseFloat(t[n]) > e && (e = parseFloat(t[n]));
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
