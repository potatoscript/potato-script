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
var _potatoMenuTitle = 0,
    _potatoMenu = 0,
    _potatoId = new Array,
    _potatoBindId = new Array,
    _potatoBindIndex = new Array,
    _potatoArray = [
        []
    ],
    _potatoTableId, _potatoBindIndexId = new Array,
    _potatoIndexId = new Array,
    _potatoIndexValue = new Array,
    _potatoElement = new Array,
    pims, _pimS, _pcofig, _fieldtime, _value, _fieldboard, PIMS = function() {
        return _psinit.init()
    },
    _pcnst = function() {
        return this.KB = [75, 69, 89, 66, 79, 65, 82, 68], this.KP = [75, 69, 89, 80, 65, 68], this.h = [35], this.lp = [112, 111, 116, 97, 116, 111], this.r = [114, 101, 103, 105, 115, 116, 101, 114, 80, 111, 116, 97, 116, 111], this
    },
    _pdir = function() {
        return this.jsonphp = "config/json.php", this.potatoModelDir = "../apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/", this.potatoModelDir2 = "apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/", this
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
            pimsThis: new Object,
            pimsParameters: "pims",
            where: [],
            whereOther: [],
            field: [],
            fieldOther: [],
            newP: new Array,
            rsd: "",
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
            _pimS = this.settings, Oget = this.settings;
            var t = new Date,
                e = t.getDate(),
                i = t.getHours(),
                l = t.getMinutes(),
                n = t.getMonth() + 1,
                o = t.getSeconds(),
                r = t.getFullYear();
            _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(l) < 10 ? "0" + l : l, _pimS.month = parseInt(n) < 10 ? "0" + n : n, _pimS.second = parseInt(o) < 10 ? "0" + o : o, _pimS.year = r, Oget.today = r + "-" + Oget.month + "-" + Oget.day, pims = X, potato = X, _$.init(), document.onmouseover = X.prototype.doOver, document.onmouseout = X.prototype.doOut, document.onmousedown = X.prototype.doDown, document.onmouseup = X.prototype.doUp
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

    function o(t) {
        return function(e) {
            tt(e) && (h(e, t), n(e.querySelectorAll(X), t))
        }
    }

    function r(t) {
        var e = t.getAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111)),
            i = t.nodeName.toUpperCase(),
            l = M.call(N, e ? F + e.toUpperCase() : $ + i);
        return e && -1 < l && !a(i, e) ? -1 : l
    }

    function a(t, e) {
        return -1 < X.indexOf(t + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + e + '"]')
    }

    function s(t) {
        var e = t.currentTarget,
            i = t.attrChange,
            l = t.attrName,
            n = t.target;
        pt && (!n || n === e) && e.attributeChangedCallback && "style" !== l && e.attributeChangedCallback(l, i === t[_] ? null : t.prevValue, i === t[I] ? null : t.newValue)
    }

    function d(t) {
        var e = o(t);
        return function(t) {
            g.push(e, t.target)
        }
    }

    function c(t) {
        ut && (ut = !1, t.currentTarget.removeEventListener(E, c)), n((t.target || e).querySelectorAll(X), t.detail === S ? S : A), Z && function() {
            for (var t, e = 0, i = et.length; e < i; e++) t = et[e], O.contains(t) || (et.splice(e, 1), h(t, S))
        }()
    }

    function u(t, e) {
        var i = this;
        lt.call(i, t, e), m.call(i, {
            target: i
        })
    }

    function p(t, e) {
        G(t, e), b ? b.observe(t, rt) : (ct && (t.setAttribute = u, t[w] = y(t), t.addEventListener(B, m)), t.addEventListener(T, s)), t.createdCallback && pt && (t.created = !0, t.createdCallback(), t.created = !1)
    }

    function h(t, e) {
        var i, l = r(t); - 1 < l && (v(t, D[l]), l = 0, e !== A || t[A] ? e === S && !t[S] && (t[A] = !1, t[S] = !0, l = 1) : (t[S] = !1, t[A] = !0, l = 1, Z && M.call(et, t) < 0 && et.push(t)), l && (i = t[e + "Callback"]) && i.call(t))
    }
    if (!(l in e)) {
        var g, m, f, y, b, v, x, w = "__" + l + (1e5 * Math.random() >> 0),
            A = "attached",
            S = "detached",
            k = "extends",
            _ = "ADDITION",
            C = "MODIFICATION",
            I = "REMOVAL",
            T = "DOMAttrModified",
            E = "DOMContentLoaded",
            B = "DOMSubtreeModified",
            $ = "<",
            F = "=",
            L = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
            R = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
            N = [],
            D = [],
            X = "",
            O = e.documentElement,
            M = N.indexOf || function(t) {
                for (var e = this.length; e-- && this[e] !== t;);
                return e
            },
            z = i.prototype,
            H = z.hasOwnProperty,
            P = z.isPrototypeOf,
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
                    for (var i, l = K(e), n = 0, o = l.length; n < o; n++) i = l[n], H.call(t, i) || W(t, i, j(e, i))
                }
                return function(e, i) {
                    do {
                        t(e, i)
                    } while ((i = U(i)) && !P.call(i, e));
                    return e
                }
            }() : function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }),
            J = t.MutationObserver || t.WebKitMutationObserver,
            Q = (t.HTMLElement || t.Element || t.Node).prototype,
            Z = !P.call(Q, O),
            tt = Z ? function(t) {
                return 1 === t.nodeType
            } : function(t) {
                return P.call(Q, t)
            },
            et = Z && [],
            it = Q.cloneNode,
            lt = Q.setAttribute,
            nt = Q.removeAttribute,
            ot = e.createElement,
            rt = J && {
                attributes: !0,
                characterData: !0,
                attributeOldValue: !0
            },
            at = J || function(t) {
                ct = !1, O.removeEventListener(T, at)
            },
            st = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                setTimeout(t, 10)
            },
            dt = !1,
            ct = !0,
            ut = !0,
            pt = !0;
        V || Y ? (v = function(t, e) {
            P.call(e, t) || p(t, e)
        }, x = p) : x = v = function(t, e) {
            t[w] || (t[w] = i(!0), p(t, e))
        }, Z ? (ct = !1, function() {
            var t = j(Q, "addEventListener"),
                e = t.value,
                i = function(t) {
                    var e = new CustomEvent(T, {
                        bubbles: !0
                    });
                    e.attrName = t, e.prevValue = this.getAttribute(t), e.newValue = null, e[I] = e.attrChange = 2, nt.call(this, t), this.dispatchEvent(e)
                },
                l = function(t, e) {
                    var i = this.hasAttribute(t),
                        l = i && this.getAttribute(t),
                        n = new CustomEvent(T, {
                            bubbles: !0
                        });
                    lt.call(this, t, e), n.attrName = t, n.prevValue = i ? l : null, n.newValue = e, i ? n[C] = n.attrChange = 1 : n[_] = n.attrChange = 0, this.dispatchEvent(n)
                },
                n = function(t) {
                    var e, i = t.currentTarget,
                        l = i[w],
                        n = t.propertyName;
                    l.hasOwnProperty(n) && (l = l[n], (e = new CustomEvent(T, {
                        bubbles: !0
                    })).attrName = l.name, e.prevValue = l.value || null, e.newValue = l.value = i[n] || null, null == e.prevValue ? e[_] = e.attrChange = 0 : e[C] = e.attrChange = 1, i.dispatchEvent(e))
                };
            t.value = function(t, o, r) {
                t === T && this.attributeChangedCallback && this.setAttribute !== l && (this[w] = {
                    className: {
                        name: "class",
                        value: this.className
                    }
                }, this.setAttribute = l, this.removeAttribute = i, e.call(this, "propertychange", n)), e.call(this, t, o, r)
            }, W(Q, "addEventListener", t)
        }()) : J || (O.addEventListener(T, at), O.setAttribute(w, 1), O.removeAttribute(w), ct && (m = function(t) {
            var e, i, l, n = this;
            if (n === t.target) {
                for (l in e = n[w], n[w] = i = y(n), i) {
                    if (!(l in e)) return f(0, n, l, e[l], i[l], _);
                    if (i[l] !== e[l]) return f(1, n, l, e[l], i[l], C)
                }
                for (l in e)
                    if (!(l in i)) return f(2, n, l, e[l], i[l], I)
            }
        }, f = function(t, e, i, l, n, o) {
            var r = {
                attrChange: t,
                currentTarget: e,
                attrName: i,
                prevValue: l,
                newValue: n
            };
            r[o] = t, s(r)
        }, y = function(t) {
            for (var e, i, l = {}, n = t.attributes, o = 0, r = n.length; o < r; o++) "setAttribute" !== (i = (e = n[o]).name) && (l[i] = e.value);
            return l
        })), e[l] = function(t, i) {
            if (l = t.toUpperCase(), dt || (dt = !0, J ? (b = function(t, e) {
                    function i(t, e) {
                        for (var i = 0, l = t.length; i < l; e(t[i++]));
                    }
                    return new J(function(l) {
                        for (var n, o, r = 0, a = l.length; r < a; r++) "childList" === (n = l[r]).type ? (i(n.addedNodes, t), i(n.removedNodes, e)) : (o = n.target, pt && o.attributeChangedCallback && "style" !== n.attributeName && o.attributeChangedCallback(n.attributeName, n.oldValue, o.getAttribute(n.attributeName)))
                    })
                }(o(A), o(S))).observe(e, {
                    childList: !0,
                    subtree: !0
                }) : (g = [], st(function t() {
                    for (; g.length;) g.shift().call(null, g.shift());
                    st(t)
                }), e.addEventListener("DOMNodeInserted", d(A)), e.addEventListener("DOMNodeRemoved", d(S))), e.addEventListener(E, c), e.addEventListener("readystatechange", c), e.createElement = function(t, i) {
                    var l = ot.apply(e, arguments),
                        n = "" + t,
                        o = M.call(N, (i ? F : $) + (i || n).toUpperCase()),
                        r = -1 < o;
                    return i && (l.setAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111), i = i.toLowerCase()), r && (r = a(n.toUpperCase(), i))), pt = !e.createElement.innerHTMLHelper, r && x(l, D[o]), l
                }, Q.cloneNode = function(t) {
                    var e = it.call(this, !!t),
                        i = r(e);
                    return -1 < i && x(e, D[i]), t && function(t) {
                        for (var e, i = 0, l = t.length; i < l; i++) e = t[i], x(e, D[r(e)])
                    }(e.querySelectorAll(X)), e
                }), -2 < M.call(N, F + l) + M.call(N, $ + l)) throw new Error("A " + t + " type pims already registered");
            if (!L.test(l) || -1 < M.call(R, l)) throw new Error("The type " + t + " pims invalid");
            var l, s = function() {
                    return p ? e.createElement(h, l) : e.createElement(h)
                },
                u = i || z,
                p = H.call(u, k),
                h = p ? i[k].toUpperCase() : l,
                m = N.push((p ? F : $) + l) - 1;
            return X = X.concat(X.length ? "," : "", p ? h + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + t.toLowerCase() + '"]' : h), s.prototype = D[m] = H.call(u, "prototype") ? u.prototype : q(Q), n(e.querySelectorAll(X), A), s
        }
    }
}(window, document, Object, __p.prototype.l(_pcnst().r));
var X = function() {
    var _pimS = function(t, e, i, l, n) {
        var o = __p.prototype.l(_pcnst().lp);
        if (this.data = [], this.array1 = [], this.array2 = [], this.where = [], this.field = [], this.whereOther = [], this.fieldOther = [], this.Query = 0, this.Submit = 0, -1 != String(t).indexOf(__p.prototype.l(_pcnst().h)) && (o = String(t).split(__p.prototype.l(_pcnst().h)).slice(1, 2)), !n) {
            if (t && o == __p.prototype.l(_pcnst().lp)) return window === this ? new _pimS(t) : (this.Day = this.day(), this.e = document.getElementById(t), this.Hour = this.hour(), this.id = t, this.Minute = this.minute(), this.Month = this.month(), this.obj = document.getElementById(t), this.Patent = this.getPatent(), this.Second = this.second(), this.x = t, this.Year = this.year(), this.table, this.ci, this.ri, this.value, this.oldValue, this.dataID, this.trigger, this.chartLabel, this.chartValue, this.chartXvalue, this.element, this.element1, this.element2, this.element3, this.element4, this.element5, this.element6, this.element7, this.element8, this.element9, this.elementbar, this.element1bar, this.element2bar, this.element3bar, this.element4bar, this.element5bar, this.element6bar, this.element7bar, this.element8bar, this.element9bar, this.elementdoughnut, this.element1doughnut, this.element2doughnut, this.element3doughnut, this.element4doughnut, this.element5doughnut, this.element6doughnut, this.element7doughnut, this.element8doughnut, this.element9doughnut, this.elementradar, this.element1radar, this.element2radar, this.element3radar, this.element4radar, this.element5radar, this.element6radar, this.element7radar, this.element8radar, this.element9radar, this);
            if (t && o != __p.prototype.l(_pcnst().lp)) {
                var r = String(o).toUpperCase();
                return $("#" + r)
            }
            return window === this ? new _pimS(__p.prototype.l(_pcnst().up)) : (this.x = __p.prototype.l(_pcnst().up), this.e = document.getElementById(__p.prototype.l(_pcnst().up)), this)
        }
        this.x = t, this.y = e, this.dx = i, this.dy = l, this.radius = n
    };
    return _pimS.prototype = {
        _a_: function(t, e) {
            this.e.addEventListener(t, e, !1)
        },
        background: function(t) {
            return this.e.style.background = t, this
        },
        _b_: function(t) {
            var e = this._p_(t),
                i = this.getHTMLElement(),
                l = this.x,
                n = e.model,
                o = l.split("-"),
                r = o.slice(2, 3),
                a = (o.slice(2, 3), !1);
            "true" != e.stacked && 1 != e.stacked || (a = !0);
            var s = !0;
            if ("false" != e.tooltips && 0 != e.tooltips || (s = !1), String(e.params).split("@").slice(1, 2) == l) var d = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                var t = '<div class="chartWrapper" style="position:relative">';
                t += '<div id="div_' + r + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="div_chart_' + r + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + r + '" style="background:' + e.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(e.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t
            };
            var c = 0,
                u = [];
            if (null != [] && "null" != d)
                for (var p = (String(d).match(/AND/g) || []).length, h = String(d).split("AND"), g = 0; g <= p; g++) {
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
                var o = String(e.dataLabel).split(","),
                    d = String(e.dataLabel2).split(",");
                if ("bar" == e.chartType) {
                    for (var c = 1, u = 0; u <= o.length + 1; u++) "data" != o[u] && (i[c] = new Array, c++);
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
                        var w = 0,
                            A = [];
                        A[0] = 0;
                        var S = 0;
                        for (c = 1; c <= o.length; c++) try {
                            "data" != o[c] && (i[S].push(t[u][c]), 1 == a ? w += parseFloat(t[u][c]) : (A[c] = 0, parseFloat(t[u][c]) > 0 && "undefined" != t[u][c] && (A[c] = parseFloat(t[u][c]))), S++)
                        } catch (t) {}
                        if (i[S].push(w), h[u] = 1 == a ? w : maxArray(A), "data" != d[0]) {
                            var k = 0,
                                _ = [];
                            _[0] = 0;
                            var C = 0;
                            for (c = 0; c < d.length; c++)
                                if ("undefined" != t[u][d[c]] && null != t[u][d[c]]) try {
                                    n[C].push(t[u][d[c]]), 1 == a ? k += parseFloat(t[u][d[c]]) : (k[c] = 0, parseFloat(t[u][d[c]]) > 0 && (_[c] = parseFloat(t[u][d[c]]))), C++
                                } catch (t) {}
                                g[u] = 1 == a ? k : maxArray(_)
                        }
                        w
                    } else i[0].push(t[u][1]), h[u] = t[u][1], t[u][1]
                }
                var I = new Array,
                    T = (c = 0, !1);
                if ("bar" == e.chartType) {
                    if ("data" != d[0])
                        for (u = 0; u < d.length; u++) I[c] = {
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
                        }, T = !0, c++;
                    for (u = 0; u < o.length; u++) "data" != o[u] && (I[c] = {
                        type: "bar",
                        label: o[u],
                        backgroundColor: e.colorIndex[u],
                        borderColor: "#444",
                        borderWidth: 1,
                        data: i[u]
                    }, c++);
                    I[c] = {
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
                    var E = "bottom";
                    null != e.legendPosition && (E = e.legendPosition);
                    var B = {
                        position: E,
                        display: !0,
                        labels: {
                            usePointStyle: !0
                        }
                    }
                } else B = {
                    position: "bottom",
                    display: !1
                };
                if ("bar" == e.chartType) {
                    var F = 1.2;
                    "" != e.label2String && (F = 2);
                    var L = [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-1",
                            stacked: a,
                            ticks: {
                                callback: function(t, e, i) {
                                    return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                },
                                beginAtZero: !0,
                                max: maxArray(h) * F,
                                min: 0,
                                fontSize: e.yAxesFontSize
                            },
                            scaleLabel: {
                                display: !0,
                                labelString: e.labelString,
                                fontSize: e.labelFontSize
                            }
                        }, {
                            display: T,
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
                        R = {
                            duration: 500,
                            easing: "easeOutQuart",
                            onComplete: function() {
                                var i = this.chart.ctx,
                                    l = this.scales["y-axis-1"].width - 10,
                                    n = this.scales["y-axis-1"].height + this.scales["y-axis-1"].top + 10,
                                    o = document.getElementById("yAxis_" + r).getContext("2d");
                                o.canvas.width = l, o.drawImage(this.chart.canvas, 0, 0, l, n, 0, 0, l, n), i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom";
                                var s = 0;
                                this.data.datasets.forEach(function(e) {
                                    if (s == c && 1 == a)
                                        for (var l = 0; l < e.data.length; l++) {
                                            var n = e._meta[Object.keys(e._meta)[0]].data[l]._model,
                                                o = e._meta[Object.keys(e._meta)[0]].data[l]._yScale.maxHeight;
                                            i.fillStyle = "#444";
                                            var r = n.y - 5;
                                            (o - n.y) / o >= .93 && (r = n.y + 14), t.length < 31 && i.fillText(pims().Comma(parseFloat(e.data[l])), n.x, r)
                                        }
                                    s++
                                })
                            }
                        }
                } else L = [], R = {
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
                var N = {
                        hover: {
                            animationDuration: 1,
                            onHover: function(t, i) {
                                var n = this.getElementAtEvent(t);
                                if (n.length) {
                                    t.target.style.cursor = "pointer";
                                    try {
                                        var o = n[0]._chart.data,
                                            r = n[0]._datasetIndex,
                                            a = o.datasets[r].label,
                                            s = o.datasets[r].data[n[0]._index];
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
                                var o = n[0]._chart.data,
                                    r = n[0]._datasetIndex,
                                    a = o.datasets[r].label,
                                    s = o.datasets[r].data[n[0]._index];
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
                        legend: B,
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
                            yAxes: L
                        },
                        tooltips: {
                            enabled: s
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        animation: R
                    },
                    D = "<canvas id='canvas-" + r + "' style='background:" + e.background + "'></canvas>",
                    X = document.getElementById("div_chart_" + r);
                X.innerHTML = "", $("#div_" + r).show().css({
                    width: e.width + "px",
                    height: e.height + "px",
                    border: e.border
                });
                var O = "100%";
                t.length > 50 && (O = "130%"), t.length > 100 && (O = "150%"), t.length > 150 && (O = "180%"), t.length > 200 && (O = "250%"), t.length > 250 && (O = "300%"), t.length > 300 && (O = "350%"), t.length > 350 && (O = "400%"), t.length > 400 && (O = "500%"), $("#div_chart_" + r).html(D).css({
                    width: O
                });
                var M = document.getElementById("canvas-" + r);
                try {
                    var z = e.name;
                    null == z && (z = "");
                    var H = document.createElement("span");
                    H.innerText = z, H.style.fontSize = e.nameFontSize, X.appendChild(H), $("#div_" + r + " span").css({
                        position: "absolute",
                        left: e.width / 6 + "px",
                        top: 2 * -e.fontSize + "px",
                        fontSize: e.nameFontSize + "px",
                        textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                    })
                } catch (t) {}
                if ("bar" == e.chartType) new Chart(M, {
                    type: e.chartType,
                    options: N,
                    data: {
                        labels: p,
                        datasets: I
                    }
                });
                else new Chart(M, {
                    type: "horizontalBar",
                    options: N,
                    data: {
                        labels: p,
                        datasets: [{
                            label: o[0],
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
                o = [];
            if (String(l.field).split("@").slice(1, 2) == i) var r = String(l.field).split("@").slice(0, 1);
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
                    potato.Query = 100, potato.Submit = 100;
                    for (var t = 0; t < _potatoId.length; t++)
                        if (n == String(_potatoId[t])) {
                            var e = String(_potatoBindId[t]);
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
                    if (null == r || "null" == r || 1 != potato.Query && 1 != potato.Submit) {
                        if ("null" == r && (1 == potato.Query || 1 == potato.Submit)) {
                            c = i + ".php", u = [];
                            if (null != o && "null" != s)
                                for (y = (String(s).match(/AND/g) || []).length, b = String(s).split("AND"), v = 0; v <= y; v++) {
                                    x = String(b.slice(v, v + 1)).split(":"), w = new Function(x.slice(1, 2));
                                    "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (u[String(x.slice(0, 1)).replace(/\s+/g, "")] = w())
                                }
                            pimsData = [], _pimS.prototype._rp_(c, u, function(t) {
                                potato.data = JSON.parse(t), l.callback()
                            })
                        }
                    } else {
                        potato.Query = 0, potato.Submit = 0;
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
                        if (null != r && "null" != r) {
                            p = X.prototype.getIdClass(String(r));
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
                                    w = new Function(x.slice(1, 2));
                                "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (v < y ? 0 == v ? (m += "," + String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += ",'" + w() + "',") : (m += String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += "'" + w() + "',") : 0 == y ? (m += String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += "'" + w() + "',") : (m += String(x.slice(0, 1)).replace(/\s+/g, ""), f += "'" + w() + "'"))
                            }
                        if (u.fields = m, u.fieldsValue = f, "null" != s && null != o)
                            for (var y = (String(s).match(/AND/g) || []).length, b = String(s).split("AND"), v = 0; v <= y; v++) {
                                var x = String(b.slice(v, v + 1)).split(":"),
                                    w = new Function(x.slice(1, 2));
                                "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (u[String(x.slice(0, 1)).replace(/\s+/g, "")] = w())
                            }
                        potato.data = [], _pimS.prototype._rp_(c, u, function(t) {
                            potato.data = JSON.parse(t);
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
                        o = "='" + l + "'";
                    t = t.substring(0, n) + o + t.substring(n + e[i].length)
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
                    for (var i = String(e).split(" "), l = (o = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onchange = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onchange = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var o = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), r = 0; r < o.length; r++)
                        for (l = o[r].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onchange = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (r = 0; r < a.length; r++) a[r].onchange = t
                }
        },
        CLICK: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), l = (o = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onclick = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onclick = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var o = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), r = 0; r < o.length; r++)
                        for (l = o[r].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onclick = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (r = 0; r < a.length; r++) a[r].onclick = t
                }
        },
        closeEditCell: function() {
            var t = pimsThis,
                e = pimsParameters;
            if ("undefined" != String(t.firstChild.nodeValue)) {
                i = document.createTextNode(t.firstChild.value), t.replaceChild(i, t.firstChild);
                document.getElementById(e.id);
                null != t.firstChild.nodeValue && "undefined" != t.firstChild.nodeValue && e.callback(t.firstChild.nodeValue, _pimS.colId)
            }
        },
        closePad_keep: function(t, e) {
            e = _value;
            if ("" == t && (e.value = ""), "Close" != t && "Now" != t && "CE" != t) "-" != e.value && "" != e.value || (e.value = t), e.value = t + ":" + e.value.split(":").slice(1, 2), $("._min_cls").attr("disabled", !1);
            else if ($("._min_cls").attr("disabled", !0), "Now" == t && (e.value = X.prototype.setHour() + ":" + X.prototype.setMinute()), "CE" == t && (e.value = "0", $("._min_cls").attr("disabled", !0)), "Close" == t)
                if ("undefined" != potato.value && null != potato.value && "0" != potato.value && 0 != e.value) {
                    try {
                        document.getElementById(keyID).style.display = "none", $("._min_cls").attr("disabled", !0), potato.value = e.value
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
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), o = 3; o <= t; o++) n = n + "_" + e.slice(o, o + 1);
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
                l = this._p_(t),
                n = l.id;
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
                    for (var t = 0; t < _potatoId.length; t++)
                        if (n == String(_potatoId[t])) {
                            var e = String(_potatoBindId[t]);
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
                n = this.x + ".php",
                o = this.x,
                r = l.split("-"),
                a = r.slice(2, 3);
            r.slice(2, 3);
            if (String(e.params).split("@").slice(1, 2) == l) var s = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                this.innerHTML = '<div id="' + o + '"></div> '
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
                    for (var r = 0; r < i.length; r++) i[r][n] = t[n][r];
                var s = document.getElementById(o);
                s.innerHTML = "", $("#" + o).append('<canvas id="canvas-' + a + '" >読み込み中．．．</canvas>');
                var d = document.getElementById("canvas-" + a);
                if ($("#" + o).css({
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
                                        o = n.data[l]._model,
                                        r = n.total,
                                        a = o.innerRadius + (o.outerRadius - o.innerRadius) / 2,
                                        s = o.startAngle,
                                        d = s + (o.endAngle - s) / 2,
                                        c = a * Math.cos(d),
                                        u = a * Math.sin(d);
                                    i.fillStyle = "#000";
                                    var p = String(Math.round(e.data[l] / r * 100)) + "%";
                                    if (l < e.data.length - 1) {
                                        var h = o.x + c + 70;
                                        u > 0 && c < 0 && (h = o.x + c - 50), i.fillText(t[l][0] + ": " + t[l][1] + ", " + p, h, o.y + u + 8)
                                    }
                                }
                                p = String(Math.round(e.data[e.data.length - 1] / r * 100)) + "%";
                                i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + p, o.x + c, o.y + 2 * u)
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
            var e = this._p_(t),
                i = e.editWidth,
                l = this.x;
            e.id = l;
            var n = this.e,
                o = new Array;
            o = e.targetCol;
            var r = e.idCol,
                a = "-";

            function s() {
                _pimS.nodevalue = __p.prototype.l(_pcnst().lp);
                var t = "-";
                try {
                    t = n.rows[_pimS.rowId].cells[e.matchCol].innerText
                } catch (t) {}
                if (!("-" != e.matchCol && t != e.matchValue || $(this).parent().children().index(this) != o && -1 == o.indexOf($(this).parent().children().index(this)) && "any" != o)) {
                    var l = 0,
                        s = this;
                    try {
                        s.firstChild.value
                    } catch (t) {
                        s.innerText = " "
                    }
                    if ("INPUT" == s.firstChild.nodeName) {
                        s = this;
                        var d = document.createTextNode(s.firstChild.value);
                        s.replaceChild(d, s.firstChild), l = 1, potato.trigger = 0, _pimS.nodevalue = s.firstChild.nodeValue, e.callback(n.rows[_pimS.rowId].cells[r].innerText, s.firstChild.nodeValue, _pimS.colId, a)
                    }
                    if (1 != l && "INPUT" != s.firstChild.nodeName && "IMG" != s.firstChild.nodeName) {
                        var c = document.createElement("input");
                        c.select(), c.value = s.firstChild.nodeValue, c.setAttribute("autocomplete", "off"), c.style.width = i + "px", c.style.height = "25px", c.style.fontSize = "15px", c.style.fontWeight = "bold", c.style.background = "rgb(255,244,255)", "undefined" != s.firstChild.nodeValue && (s.replaceChild(c, s.firstChild), s.firstChild.select(), s.firstChild.focus())
                    }
                }
            }
            $("#" + l + " td").click(function() {
                _pimS.colId = $(this).parent().children().index(this), _pimS.rowId = $(this).parent().parent().children().index(this.parentNode), 1 != potato.trigger && (a = n.rows[_pimS.rowId].cells[_pimS.colId].innerText, potato.oldValue = n.rows[_pimS.rowId].cells[_pimS.colId].innerText, potato.trigger = 1)
            });
            for (var d = document.getElementById(l).getElementsByTagName("td"), c = 0; c < d.length; c++) d[c].onkeyup = function(t) {}, "dblclick" == e.trigger ? d[c].ondblclick = s : "click" == e.trigger ? d[c].onclick = s : d[c].ondblclick = s, d[c].onmousemove = function() {}
        },
        _ect_: function(t) {
            var e = this._p_(t);
            pimsParameters = e;
            var i = this.x,
                l = i,
                n = new Array;

            function o() {
                var t = "-";
                try {
                    t = l.rows[_pimS.rowId].cells[e.matchCol].innerText
                } catch (t) {}
                try {
                    if (!("-" != e.matchCol && t != e.matchValue || $(this).parent().children().index(this) != n && -1 == n.indexOf($(this).parent().children().index(this)) && "any" != n)) {
                        var i = 0,
                            o = this;
                        try {
                            o.firstChild.value
                        } catch (t) {
                            o.innerText = " "
                        }
                        if (pimsThis = this, "INPUT" == o.firstChild.nodeName) {
                            o = this;
                            r = document.createTextNode(o.firstChild.value), o.replaceChild(r, o.firstChild), i = 1, $("#keypadtable").hide()
                        }
                        if (1 != i && "INPUT" != o.firstChild.nodeName && "IMG" != o.firstChild.nodeName) {
                            var a = document.createElement("input");
                            a.select();
                            var s = o.firstChild.nodeValue;
                            "null" != s && "undefined" != s && null != s && null != s || (s = o.firstChild.innerText), a.value = s, a.setAttribute("autocomplete", "off"), a.style.width = e.editWidth + "px", a.style.height = "25px", a.style.fontSize = "15px", a.style.fontWeight = "bold", a.style.background = "rgb(255,244,255)", "undefined" != o.firstChild.nodeValue && (o.replaceChild(a, o.firstChild), o.firstChild.select(), o.firstChild.focus());
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
            for (var r = document.getElementById(i), a = r.getElementsByTagName("td"), s = 0; s < a.length; s++) a[s].onkeyup = function(t) {}, "dblclick" == e.trigger ? a[s].ondblclick = o : "click" == e.trigger ? a[s].onclick = o : a[s].ondblclick = o, a[s].onmousemove = function() {}
        },
        _el_: function(t, e, i) {
            var l;
            if ((l = document.body.createTextRange()).moveToElementText(document.getElementById(t)), l.execCommand("COPY")) {
                var n = new ActiveXObject("_el_.Application");
                e ? n.Workbooks.Open(e) : n.Workbooks.Add, n.visible = !0, n.Worksheets(1).Paste
            } else {
                var o = this.ActiveXObject("_el_.Application");
                if (o.visible = !0, e && "" != e) {
                    var r = String(location).split("?"),
                        s = new ActiveXObject("Scripting.FileSystemObject");
                    s.FolderExists("C:\\PIMS") || s.CreateFolder("C:\\PIMS"), a = o.Workbooks.Open(r.slice(0, 1) + e)
                } else a = o.Workbooks.Add;
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
            var i, l, n, o = [];
            for (i = (e = e || document).getElementsByTagName("*"), l = 0; l < i.length; l++)
                if (null != (n = i[l].getAttribute("class")))
                    for (n = n.split(" "), j = 0; j < n.length; j++)
                        if (n[j] === t) {
                            o.push(i[l]);
                            break
                        }
            return o
        },
        getIdType: function(t, e) {
            var i, l, n, o = [];
            for (i = (e = e || document).getElementsByTagName("*"), l = 0; l < i.length; l++)
                if (null != (n = i[l].getAttribute("type")))
                    for (n = n.split(" "), j = 0; j < n.length; j++)
                        if (n[j] === t) {
                            o.push(i[l]);
                            break
                        }
            return o
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
            var o = n.getFullYear(),
                r = n.getMonth() + 1;
            r = parseInt(r) < 10 ? "0" + r : r;
            var a = n.getDate();
            return o + e + r + e + (a = parseInt(a) < 10 ? "0" + a : a)
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
            "" == t && (e.value = ""), "<-" == t && (e.value = e.value.substring(0, parseFloat(e.value.length) - 1)), "<-" != t && "" != t && (e.value += t), e.value != "0" + t && e.value != "" + t && e.value != "Keypad" + t && e.value != "Keyboard" + t && e.value != "Timepad" + t || (e.value = t), "." == t && "." == e.value && (e.value = "0."), "" == e.value && (e.value = "0"), "CE" == t && (e.value = "0"), pimsTargetId = e.value, potato.value = e.value
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
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), o = 3; o <= t; o++) n = n + "_" + e.slice(o, o + 1);
                this.name = n, this.is = i;
                var r = '<div id="div_' + i + '"> ';
                r += '<input type="text" id="' + i + '"> ', r += '<div class="keypad" id="keypad-' + i + '"></div> ', r += "</div> ", this.innerHTML = r, _fieldboard = document.getElementById(i), $("#div_" + i).css({
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
                t += '<input type="text" id="' + n + '"> ', t += '<div class="keypad" id="keypad-' + n + '"></div> ', t += "</div> ", this.innerHTML = t, _value = document.getElementById(n), pims("#div-" + n).style.display = l.display, pims("#div-" + n).style.position = l.position, pims("#div-" + n).style.left = l.left + "px", pims("#div-" + n).style.top = l.top + "px", pims("#" + n).style.top = l.top + "px", $("#div-" + n).css({
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
                        o = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                        r = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                    $("#keypad-" + n).css({
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(l.topKey) + parseFloat(r) + "px",
                        left: parseFloat(event.clientX) + parseFloat(l.leftKey) - parseFloat(o) + "px"
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
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), o = 3; o <= t; o++) n = n + "_" + e.slice(o, o + 1);
                this.name = n, this.is = i;
                var r = '<div id="div_' + i + '"> ';
                r += '<input type="text" id="' + i + '"> ', r += '<div class="keypad" id="keypad-' + i + '"></div> ', r += "</div> ", this.innerHTML = r, _value = document.getElementById(i), $("#div_" + i).css({
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
                t += '<input type="text" id="' + l + '"> ', t += '<div class="keypad" id="keypad-' + l + '"></div> ', t += "</div> ", this.innerHTML = t, _value = document.getElementById(l), $("#div-" + l).css({
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
                        o = (window.pageXOffset || n.scrollLeft) - (n.clientLeft || 0),
                        r = (window.pageYOffset || n.scrollTop) - (n.clientTop || 0);
                    if (parseFloat(i.topKey) >= 0) $("#keypad-" + l).css({
                        zIndex: "2000",
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(i.topKey) + parseFloat(r) + "px",
                        left: parseFloat(event.clientX) + parseFloat(i.leftKey) - parseFloat(o) + "px"
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
                }), $("#keypad-" + l).load(i.htm).click(function() {
                    for (var t = 0; t < _potatoId.length; t++)
                        if (l == String(_potatoId[t])) {
                            var e = String(_potatoBindId[t]);
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
                o = this._p_(t);
            o.id = l, i.createdCallback = function() {
                for (var i = (l.match(/-/g) || []).length, r = l.split("-"), a = r.slice(2, 3), s = 3; s <= i; s++) a = a + "_" + r.slice(s, s + 1);
                this.name = a, this.is = l, this.innerHTML = '<input type="text" id="' + l + '" class="' + o.className + '" > ', this.innerHTML += '<div id="pims-list-' + l + '" class="pims-list"> ', $("#" + l).css({
                    width: o.width + "px",
                    height: o.height + "px",
                    color: o.color,
                    background: o.background,
                    boxShadow: o.boxShadow,
                    display: o.display,
                    fontFamily: o.fontFamily,
                    fontWeight: o.fontWeight,
                    fontSize: o.fontSize + "px",
                    textAlign: o.textAlign,
                    padding: o.padding,
                    margin: o.margin,
                    border: o.border,
                    borderRadius: o.borderRadius + "px",
                    textTransform: o.textTransform,
                    position: o.position,
                    left: o.left + "px",
                    top: o.top + "px",
                    float: o.float,
                    cursor: "pointer"
                }).attr({
                    value: o.value,
                    type: o.type
                }).mousemove(function() {
                    "null" != o.hoverBgColor && $(this).css("background", o.hoverBgColor), $(this).css("color", o.hoverColor), "" != o.hoverText && $("#" + o.hoverId).html(o.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: o.hoverHeight + "px",
                        width: o.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != o.hoverBgColor && $(this).css("background", o.background), $(this).css("color", o.i), $("#" + o.hoverId).hide().html("")
                }).keyup(function(t) {
                    try {
                        o.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        o.change()
                    } catch (t) {}
                }), pims("#" + l).CLICK(function(i) {
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
                    var o = _pimS.prototype._p_(t),
                        r = o.params;
                    if ("block" != document.getElementById("pims-list-" + l).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("pims-list-" + l).style.height == o.heightTable + "px") document.getElementById("pims-list-" + l).style.height = "0px";
                    else {
                        try {
                            pimsListObject.style.display = "none"
                        } catch (t) {}
                        $("#pims-list-" + l).css("display", "block"), _pimS.prototype._rp_(r.model, r, function(t) {
                            var r = JSON.parse(t),
                                a = "<table class='potato-list-table' id='potato-list-table-" + l + "' >",
                                s = 0;
                            for (e in a += "<tr>", r[0]) "" != r[0][e] ? a += "<th>" + r[0][e] + "</th>" : a += "<th style='display:none'>" + r[0][e] + "</th>", s++;
                            for (n in a += "</tr>", r)
                                if ("undefined" != r[n][0] && null != r[n][0] && n > 0) {
                                    a += "<tr>";
                                    for (var d = 0; d < s; d++) "" != r[0][d] ? a += "<td>" + r[n][d] + "</td>" : a += "<td style='display:none'>" + r[n][d] + "</td>";
                                    a += "</tr>"
                                }
                            a += "</table>", document.getElementById("pims-list-" + l).style.height = "0px";
                            var c = i.clientY - o.height - 10 + "px";
                            0 != o.top && (c = o.top + o.height + 10 + "px");
                            var u = i.clientX - o.width / 2 + "px";
                            0 != o.left && (u = o.left + 5 + "px"), pimsListObject = document.getElementById("pims-list-" + l), $("#pims-list-" + l).html(a).show().css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: u,
                                top: c,
                                height: o.heightTable + "px",
                                width: o.widthTable + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                background: "transparent"
                            }), $("#potato-list-table-" + l + " td").css({
                                fontFamily: o.fontFamily,
                                fontWeight: o.fontWeight,
                                fontSize: o.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("potato-list-table-" + l),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(l).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                });
                                try {
                                    o.click(t.rows[e])
                                } catch (t) {}
                                document.getElementById("pims-list-" + l).style.height = "0px"
                            }), $("#potato-list-table-" + l + " th").css("cursor", "pointer").click(function() {
                                var t = document.getElementById("potato-list-table-" + l),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(l).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), document.getElementById(l).style.background = o.background;
                                try {
                                    o.click(t.rows[e])
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
                o = this._p_(t),
                r = o.id;
            i.createdCallback = function() {
                if (this.id = r + "_", X.prototype.getAttribute(this, r).index, X.prototype.getAttribute(this, r).field, this.pims = r, this.innerHTML = '<input type="text" id="' + r + '"  class="' + o.className + '" > ', this.innerHTML += '<div id="div-' + r + '" onscroll="pims(\'div-' + r + "').scrolly('locked_top',0,0)\" class=\"pims-list\"> ", $("#" + r).css({
                        width: o.width + "px",
                        height: o.height + "px",
                        color: o.color,
                        background: o.background,
                        boxShadow: o.boxShadow,
                        display: o.display,
                        fontFamily: o.fontFamily,
                        fontWeight: o.fontWeight,
                        fontSize: o.fontSize + "px",
                        textAlign: o.textAlign,
                        padding: o.padding,
                        margin: o.margin,
                        border: o.border,
                        borderRadius: o.borderRadius + "px",
                        textTransform: o.textTransform,
                        position: o.position,
                        left: o.left + "px",
                        top: o.top + "px",
                        float: o.float,
                        cursor: "pointer"
                    }).attr({
                        value: o.value,
                        type: o.type
                    }).mousemove(function() {
                        "null" != o.hoverBgColor && $(this).css("background", o.hoverBgColor), $(this).css("color", o.hoverColor), "" != o.hoverText && $("#" + o.hoverId).html(o.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: o.hoverHeight + "px",
                            width: o.hoverWidth + "px",
                            background: "#ffffe5",
                            border: "1px solid black",
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != o.hoverBgColor && $(this).css("background", o.background), $(this).css("color", o.i), $("#" + o.hoverId).hide().html("")
                    }).keyup(function(t) {
                        for (var e = 0; e < _potatoId.length; e++)
                            if (r == String(_potatoId[e])) {
                                var i = String(_potatoBindId[e]);
                                document.getElementById(i).innerText = document.getElementById(r).value
                            }
                        try {
                            o.keyup(t)
                        } catch (t) {}
                    }).change(function() {
                        try {
                            o.change()
                        } catch (t) {}
                    }), String(o.widthTable).split("_").slice(1, 2) == l) var i = String(o.widthTable).split("_").slice(0, 1);
                if (String(o.heightTable).split("_").slice(1, 2) == l) var a = String(o.heightTable).split("_").slice(0, 1);
                if (String(o.marginTop).split("_").slice(1, 2) == l) var s = String(o.marginTop).split("_").slice(0, 1);
                if (String(o.marginLeft).split("_").slice(1, 2) == l) var d = String(o.marginLeft).split("_").slice(0, 1);
                if (String(o.params).split("@").slice(1, 2) == l) var c = String(o.params).split("@").slice(0, 1);
                if (String(o.where).split("@").slice(1, 2) == l) var u = String(o.where).split("@").slice(0, 1);
                pims("#" + r).onclick = function(o) {
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
                    if ("block" != document.getElementById("div-" + r).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("div-" + r).style.height == p.heightTable + "px") document.getElementById("div-" + r).style.height = "0px";
                    else {
                        try {
                            pimsListObject.style.display = "none"
                        } catch (t) {}
                        $("#div-" + r).css("display", "block");
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
                            for (var v = (String(c).match(/AND/g) || []).length, x = String(c).split("AND"), w = 0; w <= v; w++) {
                                var A = String(x.slice(w, w + 1)).split(":"),
                                    S = new Function(A.slice(1, 2));
                                "null" != String(A.slice(0, 1)).replace(/\s+/g, "") && (m[String(A.slice(0, 1)).replace(/\s+/g, "")] = S())
                            }
                        _pimS.prototype._rp_(g, m, function(t) {
                            var o = JSON.parse(t),
                                c = "<table class='potato-list-table' id='table-" + r + "' >",
                                u = 0;
                            for (e in c += "<tr>", o[0]) "" != o[0][e] ? c += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + o[0][e] + "</th>" : c += "<th style='display:none'>" + o[0][e] + "</th>", u++;
                            for (n in c += "</tr>", o)
                                if ("undefined" != o[n][0] && null != o[n][0] && n > 0) {
                                    c += "<tr>";
                                    for (var h = 0; h < u; h++) "" != o[0][h] ? c += "<td>" + o[n][h] + "</td>" : c += "<td style='display:none'>" + o[n][h] + "</td>";
                                    c += "</tr>"
                                }
                            c += "</table>", document.getElementById("div-" + r).style.height = "0px";
                            var g = parseFloat(s) + "px",
                                m = parseFloat(d) + "px";
                            pimsListObject = document.getElementById("div-" + r), $("#div-" + r).html(c).show().css({
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
                            }), $("#table-" + r + " td").css({
                                fontFamily: p.fontFamily,
                                fontWeight: p.fontWeight,
                                fontSize: p.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("table-" + r),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                if ("閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText) {
                                    pims(r).value(t.rows[e].cells[0].innerText);
                                    for (var n = 0; n < _potatoId.length; n++)
                                        if (r == String(_potatoId[n])) {
                                            var o = String(_potatoBindId[n]);
                                            document.getElementById(o).innerText = document.getElementById(r).value
                                        }
                                } else $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), $("#div-" + r).html("");
                                try {
                                    p.click(t.rows[e], l, i), $("#div-" + r).html("")
                                } catch (t) {}
                                document.getElementById("div-" + r).style.height = "0px"
                            }), $("#table-" + r + " th").css("cursor", "pointer").click(function() {
                                var t = document.getElementById("table-" + r),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                ci = $(this).parent().children().index(this), "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(r).value(t.rows[e].cells[0].innerText) : ($(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), $("#div-" + r).html("")), document.getElementById(r).style.background = p.background;
                                try {
                                    p.click(t.rows[e], l, ci)
                                } catch (t) {}
                                document.getElementById("div-" + r).style.height = "0px"
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
                o = setInterval(function() {
                    0 == --n && (clearInterval(o), $("body").css("background", e), i(), $(String.fromCharCode(35, 80, 73, 77, 83)).html("").hide(), $("#body").show())
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
                o = this._p_(t),
                r = o.id;
            i.createdCallback = function() {
                this.id = r + "_", this.pims = r;
                var i = o.menuTitle.split(","),
                    a = o.menuModel.split(",");
                this.innerHTML = "<table><tr>";
                for (var s = 0; s < i.length; s++) this.innerHTML += '<td><a id="' + r + "-" + i[s] + '" name="' + a[s] + '" class="' + o.id + '" >' + i[s] + "</a></td>", $("#" + r + "-" + i[s]).css({
                    width: o.width + "px",
                    height: o.height + "px",
                    color: o.color,
                    background: o.background,
                    boxShadow: o.boxShadow,
                    fontFamily: o.fontFamily,
                    fontWeight: o.fontWeight,
                    fontSize: o.fontSize + "px",
                    textAlign: o.textAlign,
                    padding: o.padding,
                    margin: o.margin,
                    border: o.border,
                    textDecoration: "underline",
                    borderRadius: o.borderRadius + "px",
                    textTransform: o.textTransform,
                    position: o.position,
                    left: o.left + "px",
                    top: o.top + "px",
                    float: o.float,
                    cursor: "pointer"
                }).mouseover(function() {
                    "null" != o.hoverBgColor && $(this).css("background", o.hoverBgColor), $(this).css("color", o.hoverColor), "" != o.hoverText && $("#" + o.hoverId).html(o.hoverText).show().css({
                        fontSize: "15px",
                        fontFamily: "Arial",
                        padding: "3px 3px 3px 3px",
                        height: o.hoverHeight + "px",
                        width: o.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        borderRadius: "3px"
                    })
                }).mouseout(function() {
                    "null" != o.hoverBgColor && $(this).css("background", o.background), $(this).css("color", o.i), $("#" + o.hoverId).hide().html("")
                }).keyup(function(t) {
                    for (var e = 0; e < _potatoId.length; e++)
                        if (r == String(_potatoId[e])) {
                            var i = String(_potatoBindId[e]);
                            document.getElementById(i).innerText = document.getElementById(r).value
                        }
                    try {
                        o.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        o.change()
                    } catch (t) {}
                });
                if (this.innerHTML += "</tr></table>", this.innerHTML += '<div id="div-' + r + '" onscroll="pims(\'div-' + r + "').scrolly('locked_top',0,0)\" class=\"" + o.id + '"> ', String(o.widthTable).split("_").slice(1, 2) == l) var d = String(o.widthTable).split("_").slice(0, 1);
                if (String(o.heightTable).split("_").slice(1, 2) == l) var c = String(o.heightTable).split("_").slice(0, 1);
                if (String(o.marginTop).split("_").slice(1, 2) == l) var u = String(o.marginTop).split("_").slice(0, 1);
                if (String(o.marginLeft).split("_").slice(1, 2) == l) var p = String(o.marginLeft).split("_").slice(0, 1);
                if (String(o.params).split("@").slice(1, 2) == l) var h = String(o.params).split("@").slice(0, 1);
                if (String(o.where).split("@").slice(1, 2) == l) var g = String(o.where).split("@").slice(0, 1);
                $("." + r).mouseenter(function(i) {
                    _potatoMenu = 1;
                    var o = _pimS.prototype._p_(t),
                        a = h;
                    if ("block" != document.getElementById("div-" + r).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("div-" + r).style.height == o.heightTable + "px") document.getElementById("div-" + r).style.height = "0px";
                    else {
                        $("#div-" + r).css("marginTop", "-2px");
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
                            for (var v = (String(h).match(/AND/g) || []).length, x = String(h).split("AND"), w = 0; w <= v; w++) {
                                var A = String(x.slice(w, w + 1)).split(":"),
                                    S = new Function(A.slice(1, 2));
                                "null" != String(A.slice(0, 1)).replace(/\s+/g, "") && (m[String(A.slice(0, 1)).replace(/\s+/g, "")] = S())
                            }
                        _pimS.prototype._rp_(s, m, function(t) {
                            var i = JSON.parse(t);
                            check_model = 1;
                            var a = "<table class='potato-menu-table' id='table-" + r + "' >",
                                s = 0;
                            for (e in a += "<tr>", i[0]) "" != i[0][e] ? a += "<th>" + i[0][e] + "</th>" : a += "<th style='display:none'>" + i[0][e] + "</th>", s++;
                            for (n in a += "</tr>", i)
                                if ("undefined" != i[n][0] && null != i[n][0] && n > 0) {
                                    a += "<tr>";
                                    for (var h = 0; h < s; h++) "" != i[0][h] ? a += "<td>" + i[n][h] + "</td>" : a += "<td style='display:none'>" + i[n][h] + "</td>";
                                    a += "</tr>"
                                }
                            a += "</table>", document.getElementById("div-" + r).style.height = "0px";
                            var g = parseFloat(u) + "px",
                                m = parseFloat(p) + "px";
                            pimsListObject = document.getElementById("div-" + r), document.getElementById("div-" + r).style.display = "block", $("#div-" + r).html(a).css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: m,
                                top: g,
                                height: c + "px",
                                width: d + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                display: o.display,
                                background: "transparent",
                                zIndex: 1e4
                            }), $("#table-" + r + " td").css({
                                textAlign: "left",
                                fontFamily: o.fontFamily,
                                fontWeight: o.fontWeight,
                                fontSize: o.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("table-" + r),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                potato.table = t.rows[e], potato.ci = i;
                                try {
                                    o.click(t.rows[e], l, i), $("#div-" + r).html("")
                                } catch (t) {}
                                document.getElementById("div-" + r).style.height = "0px"
                            }), $("#table-" + r + " th").css("cursor", "pointer").click(function() {
                                $("#div-" + r).css("display", "none")
                            });
                            try {
                                o.callback(l)
                            } catch (t) {}
                        })
                    }
                }), $("." + r).mouseleave(function(t) {
                    _potatoMenu = 0
                }), $(document).mouseover(function(t) {
                    0 == _potatoMenu && $("#div-" + r).css("display", "none")
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
                    for (var i = String(e).split(" "), l = (o = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmousemove = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onmousemove = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var o = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), r = 0; r < o.length; r++)
                        for (l = o[r].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmousemove = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (r = 0; r < a.length; r++) a[r].onmousemove = t
                }
        },
        MOUSEOUT: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), l = (o = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmouseout = t;
                else(a = document.getElementById(String(e).split("#").slice(1, 2))).onmouseout = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var o = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), r = 0; r < o.length; r++)
                        for (l = o[r].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmouseout = t
                } else {
                    var a = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (r = 0; r < a.length; r++) a[r].onmouseout = t
                }
        },
        MultipleSelect: function(t) {
            var e, i = this._p_(t),
                l = this.x,
                n = this.e;
            i.id = l;
            var o = [],
                r = [],
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
                    if (-1 == String(c.cells[s].innerHTML).indexOf(i.markSymbol)) r[a] = c.cells[d].innerText, a++, c.cells[s].innerHTML = '<font style="font-weight:bold;color:red;background:yellow">' + i.markSymbol + "</font>" + c.cells[s].innerHTML;
                    else {
                        var u = String(c.cells[s].innerHTML).split(i.markSymbol);
                        c.cells[s].innerHTML = u.slice(1, 2);
                        for (var p = 0; p < r.length; p++) r[p] == c.cells[d].innerText && (r[p] = "")
                    }
                    o = [];
                    var h = 0;
                    for (p = 0; p < r.length; p++)
                        if ("" != r[p] && "undefined" != r[p]) {
                            for (var g = 0, m = 0; m < o.length; m++) o[m] == r[p] && (g = 1);
                            0 == g && (o[h] = r[p], h++)
                        }
                    i.callback(o, l)
                }
            }
        },
        optionText: function() {
            return document.getElementById(this.x).options[document.getElementById(this.x).selectedIndex].text
        },
        _p_: function(t) {
            var e, i, l, n, o, r, a, s, d, c, u, p, h, g, m, f, y, b, v, x, w, A, S, k, _, C, I, T, E, B, $, F, L, R, N, D, X, O, M, z, H, P, W, j, K, U, V, Y, q, G, J, Q, Z, tt, et, it, lt, nt, ot, rt, at, st, dt, ct, ut, pt, ht, gt, mt, ft, yt, bt, vt, xt, wt, At, St, kt, _t, Ct, It, Tt, Et, Bt, $t, Ft, Lt, Rt, Nt, Dt, Xt, Ot, Mt, zt, Ht, Pt, Wt, jt, Kt, Ut, Vt, Yt, qt, Gt, Jt = new Array;
            return this.clearArrays(), t(), null == (Lt = css.textTransform) && (Lt = "none"), null == (e = css.background) && (e = "white"), null == (i = css.border) && (i = "1px solid black"), null == (l = css.borderRadius) && (l = 10), null == (n = css.boxShadow) && (n = "0 0 0px rgba(0,0,0,0)"), null == (o = events.callback) && (o = this.dummy()), null == (r = attr.canvas) && (r = "chart"), null == (a = param.cell) && (a = "0"), null == (d = attr.chartType) && (d = "pie"), null == (c = attr.chartId) && (c = "chart1Id"), null == (g = param.col) && (g = 1e3), null == (f = css.colorIndex) && (f = ["#c5ffb3"]), null == (s = events.change) && (s = this.dummy()), null == (u = attr.className) && (u = "pimsClassName"), null == (p = events.click) && (p = this.dummy()), null == (h = attr.cls) && (h = ""), null == (y = attr.container) && (y = "container"), null == (m = css.color) && (m = "black"), null == (b = css.cursor) && (b = "default"), null == (v = css.dataFontSize) && (v = 12), null == (x = attr.dataLabel) && (x = "data"), null == (w = attr.dataLabel2) && (w = "data"), null == (A = attr.disabled) && (A = !1), null == (S = css.display) && (S = "block"), null == (k = css.displayKey) && (k = "none"), null == (_ = param.editWidth) && (_ = 100), null == (C = param.fieldClass) && (C = 0), null == (E = css.float) && (E = ""), null == (I = css.fontSize) && (I = 18), null == (B = css.fontWeight) && (B = "normal"), null == ($ = css.fontFamily) && ($ = "Helvetica"), null == (T = attr.format) && (T = "yy-mm-dd"), null == (F = param.header) && (F = "0"), null == (L = css.height) && (L = 30), null == (R = css.heightTable) && (R = 450), null == (N = events.hover) && (N = this.dummy()), D = css.hoverColor, null == (X = css.hoverBgColor) && (X = "null"), null == (O = attr.hoverId) && (O = "pims-hovertext"), null == (M = attr.hoverText) && (M = ""), null == (H = css.hoverHeight) && (H = 30), null == (z = css.hoverWidth) && (z = ""), null == (P = param.htm) && (P = "config/keypad.htm"), null == (W = attr.id) && (W = "x"), null == (j = param.idCol) && (j = 0), image = attr.image, null == image && (image = "nil 0 0"), K = attr.imageDir, null == (U = css.imgWidth) && (U = 45), null == (V = css.imgHeight) && (V = 45), null == (Y = events.keyup) && (Y = this.dummy()), null == (J = css.labelFontSize) && (J = 12), null == (Q = css.label2FontSize) && (Q = 12), null == (q = attr.labelString) && (q = ""), null == (G = attr.label2String) && (G = ""), null == (et = css.left) && (et = 0), null == (it = css.leftKey) && (it = 0), null == (Z = css.legendDisplay) && (Z = !1), null == (tt = css.legendPosition) && (tt = "bottom"), null == (rt = param.markSymbol) && (rt = ""), null == (nt = param.matchCol) && (nt = "-"), null == (ot = param.matchValue) && (ot = "-"), null == (lt = css.margin) && (lt = "0px 0px 0px 0px"), null == (ct = css.marginKey) && (ct = "0px 0px 0px 0px"), null == (ut = css.marginLeft) && (ut = "0"), null == (pt = css.marginTop) && (pt = "0"), null == (at = param.menuModel) && (at = "null"), null == (st = param.menuTitle) && (st = "null"), ht = param.model, null == (dt = attr.multiple) && (dt = !1), null == (gt = attr.name) && (gt = ""), null == (mt = attr.onscroll) && (mt = this.dummy()), null == (ft = css.padding) && (ft = "3px 0px 0px 3px"), null == (ft = css.padding) && (ft = "3px 0px 0px 3px"), null == (yt = css.paddingLeft) && (yt = "1"), null == (bt = css.paddingTop) && (bt = "1"), null == (vt = css.pointBorderColorIndex) && (vt = ["#000000"]), null == (xt = css.pointBorderDash) && (xt = [0]), null == (wt = css.pointBorderWidth) && (wt = [1]), null == (At = css.pointColorIndex) && (At = ["#c5ffb3"]), null == (St = css.pointRadius) && (St = ["5"]), null == (kt = css.pointStyle) && (kt = ["triangle"]), null == (_t = css.position) && (_t = "static"), null == (Ct = param.row) && (Ct = "0"), null == (It = param.selectCol) && (It = ""), null == (Tt = css.showDay) && (Tt = !1), null == (Et = attr.stacked) && (Et = !1), null == (Bt = attr.tableId) && (Bt = "tableId"), null == ($t = attr.targetIndex) && ($t = 0), null == (Jt = param.targetCol) && (Jt = ""), null == (Ft = attr.targetColor) && (Ft = "WHITE"), null == (Rt = css.textAlign) && (Rt = "center"), null == (Nt = attr.title) && (Nt = ""), null == (Dt = css.titleFontSize) && (Dt = 25), null == (Xt = attr.tooltips) && (Xt = !0), null == (Ot = css.top) && (Ot = 0), null == (Mt = css.topKey) && (Mt = 0), null == (zt = events.trigger) && (zt = "ondblclick"), null == (Ht = attr.type) && (Ht = "text"), null == (Pt = attr.value) && (Pt = ""), null == (Kt = param.whereClass) && (Kt = 0), null == (Wt = css.width) && (Wt = 119), null == (jt = css.widthTable) && (jt = 130), null == (Ut = css.xAxesFontSize) && (Ut = 12), null == (Vt = css.xlabelAngle) && (Vt = 0), null == (Yt = css.yAxesFontSize) && (Yt = 12), null == (qt = css.y2AxesFontSize) && (qt = 12), null == (Gt = attr.y2AxesType) && (Gt = ""), {
                background: e,
                border: i,
                borderRadius: l,
                boxShadow: n,
                canvas: r,
                change: s,
                callback: o,
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
                dataLabel2: w,
                disabled: A,
                display: S,
                displayKey: k,
                editWidth: _,
                field: field,
                fieldClass: C,
                fieldOther: fieldOther,
                float: E,
                fontFamily: $,
                fontSize: I,
                fontWeight: B,
                format: T,
                header: F,
                height: L,
                heightTable: R,
                hover: N,
                hoverBgColor: X,
                hoverColor: D,
                hoverHeight: H,
                hoverId: O,
                hoverText: M,
                hoverWidth: z,
                htm: P,
                id: W,
                idCol: j,
                image: image,
                imageDir: K,
                imgHeight: V,
                imgWidth: U,
                keyup: Y,
                labelString: q,
                label2String: G,
                labelFontSize: J,
                label2FontSize: Q,
                left: et,
                leftKey: it,
                legendDisplay: Z,
                legendPosition: tt,
                marginKey: ct,
                markSymbol: rt,
                margin: lt,
                marginLeft: ut,
                marginTop: pt,
                matchCol: nt,
                matchValue: ot,
                menuModel: at,
                menuTitle: st,
                model: ht,
                multiple: dt,
                name: gt,
                onscroll: mt,
                padding: ft,
                paddingLeft: yt,
                paddingTop: bt,
                params: params,
                pointBorderColorIndex: vt,
                pointBorderDash: xt,
                pointBorderWidth: wt,
                pointColorIndex: At,
                pointRadius: St,
                pointStyle: kt,
                position: _t,
                row: Ct,
                selectCol: It,
                showDay: Tt,
                stacked: Et,
                tableId: Bt,
                targetIndex: $t,
                targetColor: Ft,
                targetCol: Jt,
                textAlign: Rt,
                textTransform: Lt,
                title: Nt,
                titleFontSize: Dt,
                tooltips: Xt,
                top: Ot,
                topKey: Mt,
                trigger: zt,
                type: Ht,
                value: Pt,
                where: where,
                whereClass: Kt,
                width: Wt,
                widthTable: jt,
                xAxesFontSize: Ut,
                xlabelAngle: Vt,
                yAxesFontSize: Yt,
                y2AxesFontSize: qt,
                y2AxesType: Gt
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
            for (var o in t) {
                if ("WHERE" == o) {
                    n = 1;
                    for (var r in t[o]) {
                        if ("class" == r)
                            for (var a = X.prototype.getIdClass(t[o][r]), s = 0; s < a.length; s++) {
                                var d = String(a[s].id).split("-").slice(2, 3);
                                l[a[s].field] = pims("#" + d).value
                            }
                        "class" != r && (l[r] = t[o][r])
                    }
                }
                if ("FIELD" == o) {
                    n = 1;
                    var c = "",
                        u = "";
                    for (var r in t[o]) {
                        if ("class" == r)
                            for (a = X.prototype.getIdClass(t[o][r]), s = 1; s < a.length; s++) {
                                c += a[s].field + ",";
                                d = String(a[s].id).split("-").slice(2, 3);
                                u += "'" + pims("#" + d).value + "',"
                            }
                        "class" != r && (c += r + ",", u += "'" + t[o][r] + "',", s++)
                    }
                    c += a[0].field;
                    d = String(a[0].id).split("-").slice(2, 3);
                    u += "'" + pims("#" + d).value + "'", l.fields = c, l.fieldsValue = u
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
                o = this.x,
                r = l.split("-"),
                a = r.slice(2, 3);
            r.slice(2, 3);
            if (String(e.params).split("@").slice(1, 2) == l) var s = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                this.innerHTML = '<div id="' + o + '"></div> '
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
                    for (var r = 0; r < i.length; r++) i[r][n] = t[n][r];
                var s = document.getElementById(o);
                s.innerHTML = "", $("#" + o).append('<canvas id="canvas-' + a + '" >読み込み中．．．</canvas>');
                var d = document.getElementById("canvas-" + a);
                $("#" + o).css({
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
                                        o = n.data[l]._model,
                                        r = n.total,
                                        a = o.innerRadius + (o.outerRadius - o.innerRadius) / 2,
                                        s = o.startAngle,
                                        d = s + (o.endAngle - s) / 2,
                                        c = a * Math.cos(d),
                                        u = a * Math.sin(d);
                                    i.fillStyle = "#000";
                                    var p = String(Math.round(e.data[l] / r * 100)) + "%";
                                    if (l < e.data.length - 1) {
                                        var h = o.x + c + 70;
                                        u > 0 && c < 0 && (h = o.x + c - 50), i.fillText(t[l][0] + ": " + t[l][1] + ", " + p, h, o.y + u + 8)
                                    }
                                }
                                p = String(Math.round(e.data[e.data.length - 1] / r * 100)) + "%";
                                i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + p, o.x + c, o.y + 2 * u)
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
        reloadBar: function(t, e) {
            var i = [],
                l = [],
                n = (t = String(t).toUpperCase(), _potatoElement[t]),
                o = n.getAttribute("model"),
                r = String(n.getAttribute("chartType")).toLowerCase();
            null == r && (r = "bar");
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
            var w = n.getAttribute("y2AxesType");
            null == w && (w = "");
            var A = n.getAttribute("click");
            if (null != A) {
                var S = n.localName;
                l[String(S)] = new Function(A)
            }
            var k = n.getAttribute("hover");
            if (null != k) {
                S = n.localName;
                i[String(S)] = new Function(k)
            }
            _ = 'dataLabel:"-"';
            try {
                var _ = n.getAttribute("params");
                null == _ && (_ = 'dataLabel:"-"')
            } catch (t) {}
            var C = new Function(n.getAttribute("callback"));
            try {
                I = (I = new Function(n.getAttribute("stacked")))()
            } catch (t) {
                var I;
                null == (I = n.getAttribute("stacked")) && (I = !1)
            }
            null != I && "undefined" != I || null == (I = n.getAttribute("stacked")) && (I = !1);
            try {
                T = (T = new Function(n.getAttribute("tooltips")))()
            } catch (t) {
                var T;
                null == (T = n.getAttribute("tooltips")) && (T = !1)
            }
            null != T && "undefined" != T || null == (T = n.getAttribute("tooltips")) && (T = !0);
            try {
                E = (E = new Function(n.getAttribute("yAxesTitle")))()
            } catch (t) {
                var E;
                null == (E = n.getAttribute("yAxesTitle")) && (E = "")
            }
            null != E && "undefined" != E || null == (E = n.getAttribute("yAxesTitle")) && (E = "");
            try {
                B = (B = new Function(n.getAttribute("y2AxesTitle")))()
            } catch (t) {
                var B;
                null == (B = n.getAttribute("y2AxesTitle")) && (B = "")
            }
            null != B && "undefined" != B || null == (B = n.getAttribute("y2AxesTitle")) && (B = "");
            try {
                $ = ($ = new Function(n.getAttribute("showDay")))()
            } catch (t) {
                var $;
                null == ($ = n.getAttribute("showDay")) && ($ = !0)
            }
            null != $ && "undefined" != $ || null == ($ = n.getAttribute("showDay")) && ($ = !0);
            try {
                F = (F = new Function(n.getAttribute("height")))()
            } catch (t) {
                var F;
                null == (F = n.getAttribute("height")) && (F = 350)
            }
            null != F && "undefined" != F || null == (F = n.getAttribute("height")) && (F = 350);
            try {
                L = (L = new Function(n.getAttribute("width")))()
            } catch (t) {
                var L;
                null == (L = n.getAttribute("width")) && (L = 600)
            }
            null != L && "undefined" != L || null == (L = n.getAttribute("width")) && (L = 600);
            try {
                R = (R = new Function(n.getAttribute("xlabelAngle")))()
            } catch (t) {
                var R;
                null == (R = n.getAttribute("xlabelAngle")) && (R = 0)
            }
            null != R && "undefined" != R || null == (R = n.getAttribute("xlabelAngle")) && (R = 0);
            try {
                N = (N = new Function(n.getAttribute("dataLabel")))()
            } catch (t) {
                var N;
                null == (N = n.getAttribute("dataLabel")) && (N = "data")
            }
            null != N && "undefined" != N || null == (N = n.getAttribute("dataLabel")) && (N = "data");
            try {
                D = (D = new Function(n.getAttribute("dataLabel2")))()
            } catch (t) {
                var D;
                null == (D = n.getAttribute("dataLabel2")) && (D = "data")
            }
            null != D && "undefined" != D || null == (D = n.getAttribute("dataLabel2")) && (D = "data");
            try {
                var X = new Function(n.getAttribute("colorIndex"));
                X = String(X()).split(",")
            } catch (t) {
                try {
                    X = n.getAttribute("colorIndex").split(",")
                } catch (t) {}
                null == X && (X = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            if (null == X || "undefined" == X) {
                try {
                    X = String(n.getAttribute("colorIndex")).split(",")
                } catch (t) {}
                null == X && (X = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            try {
                var O = new Function(n.getAttribute("pointBorderColorIndex"));
                O = String(O()).split(",")
            } catch (t) {
                try {
                    O = String(n.getAttribute("pointBorderColorIndex")).split(",")
                } catch (t) {}
                null == O && (O = ["#000000", "#000000", "#000000", "#000000", "#000000"])
            }
            if (null == O || "undefined" == O) {
                try {
                    O = n.getAttribute("pointBorderColorIndex").split(",")
                } catch (t) {}
                null == O && (O = ["#000000", "#000000", "#000000", "#000000", "#000000"])
            }
            try {
                var M = new Function(n.getAttribute("pointBorderDash"));
                M = String(M()).split(",")
            } catch (t) {
                try {
                    M = String(n.getAttribute("pointBorderDash")).split(",")
                } catch (t) {}
                null == M && (M = [0, 0, 0, 0, 0])
            }
            if (null == M || "undefined" == M) {
                try {
                    M = n.getAttribute("pointBorderDash").split(",")
                } catch (t) {}
                null == M && (M = [0, 0, 0, 0, 0])
            }
            try {
                var z = new Function(n.getAttribute("pointBorderWidth"));
                z = String(z()).split(",")
            } catch (t) {
                try {
                    z = String(n.getAttribute("pointBorderWidth")).split(",")
                } catch (t) {}
                null == z && (z = ["1", "1", "1", "1", "1"])
            }
            if (null == z || "undefined" == z) {
                try {
                    z = n.getAttribute("pointBorderWidth").split(",")
                } catch (t) {}
                null == z && (z = ["1", "1", "1", "1", "1"])
            }
            try {
                var H = new Function(n.getAttribute("pointColorIndex"));
                H = String(H()).split(",")
            } catch (t) {
                try {
                    H = String(n.getAttribute("pointColorIndex")).split(",")
                } catch (t) {}
                null == H && (H = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
            }
            if (null == H || "undefined" == H) {
                try {
                    H = n.getAttribute("pointColorIndex").split(",")
                } catch (t) {}
                null == H && (H = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
            }
            try {
                var P = new Function(n.getAttribute("pointStyle"));
                P = String(P()).split(",")
            } catch (t) {
                try {
                    P = n.getAttribute("pointStyle").split(",")
                } catch (t) {}
                null == P && (P = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
            }
            if (null == P || "undefined" == P) {
                try {
                    P = n.getAttribute("pointStyle").split(",")
                } catch (t) {}
                null == P && (P = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
            }
            try {
                var W = new Function(n.getAttribute("pointRadius"));
                W = String(W()).split(",")
            } catch (t) {
                try {
                    W = n.getAttribute("pointRadius").split(",")
                } catch (t) {}
                null == W && (W = ["5", "5", "8", "8"])
            }
            if (null == W || "undefined" == W) {
                try {
                    W = n.getAttribute("pointRadius").split(",")
                } catch (t) {}
                null == W && (W = ["5", "5", "8", "8"])
            }
            "false" != e && 0 != e && pims(n.localName)._b_(function() {
                params = _ + "@" + n.localName, css = {
                    display: d,
                    background: s,
                    border: a,
                    height: F,
                    width: L,
                    fontSize: v,
                    legendDisplay: u,
                    legendPosition: p,
                    colorIndex: X,
                    pointBorderColorIndex: O,
                    pointBorderDash: M,
                    pointBorderWidth: z,
                    pointColorIndex: H,
                    pointStyle: P,
                    pointRadius: W,
                    showDay: $,
                    xlabelAngle: R,
                    labelFontSize: h,
                    label2FontSize: g,
                    yAxesFontSize: m,
                    y2AxesFontSize: f,
                    xAxesFontSize: y,
                    dataFontSize: b,
                    titleFontSize: c
                }, attr = {
                    chartType: r,
                    title: x,
                    labelString: E,
                    label2String: B,
                    y2AxesType: w,
                    stacked: I,
                    tooltips: T,
                    dataLabel: N,
                    dataLabel2: D
                }, param = {
                    model: o
                }, null != A && (events = {
                    callback: function() {
                        try {
                            C()
                        } catch (t) {}
                    },
                    click: function(t, e, i, n) {
                        for (var o in potato.chartLabel = e, potato.chartValue = i, potato.chartXvalue = n, l) {
                            String(o) == t && l[o]()
                        }
                    },
                    hover: function(t, e, l, n) {
                        for (var o in potato.chartLabel = e, potato.chartValue = l, potato.chartXvalue = n, i) {
                            String(o) == t && i[o]()
                        }
                    }
                })
            })
        },
        reloadDoughnut: function(t, e) {
            var i = [],
                l = potato.elementdoughnut;
            if (t) switch (t) {
                case 1:
                    l = potato.element1doughnut;
                    break;
                case 2:
                    l = potato.element2doughnut;
                    break;
                case 3:
                    l = potato.element3doughnut;
                    break;
                case 4:
                    l = potato.element4doughnut;
                    break;
                case 5:
                    l = potato.element5doughnut;
                    break;
                case 6:
                    l = potato.element6doughnut;
                    break;
                case 7:
                    l = potato.element7doughnut;
                    break;
                case 8:
                    l = potato.element8doughnut;
                    break;
                case 9:
                    l = potato.element9doughnut
            }
            var n = l.getAttribute("border");
            null == n && (n = "1px solid black");
            var o = l.getAttribute("height");
            null == o && (o = 350);
            var r = l.getAttribute("width");
            null == r && (r = 600);
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
                    height: o,
                    width: r,
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
                        for (var n in potato.chartLabel = l, potato.chartValue = e, i) {
                            String(n) == t && i[n]()
                        }
                    }
                })
            })
        },
        reloadRadar: function(t, e) {
            var i = [],
                l = potato.elementradar;
            if (t) switch (t) {
                case 1:
                    l = potato.element1radar;
                    break;
                case 2:
                    l = potato.element2radar;
                    break;
                case 3:
                    l = potato.element3radar;
                    break;
                case 4:
                    l = potato.element4radar;
                    break;
                case 5:
                    l = potato.element5radar;
                    break;
                case 6:
                    l = potato.element6radar;
                    break;
                case 7:
                    l = potato.element7radar;
                    break;
                case 8:
                    l = potato.element8radar;
                    break;
                case 9:
                    l = potato.element9radar
            }
            var n = l.getAttribute("border");
            null == n && (n = "1px solid black");
            var o = l.getAttribute("height");
            null == o && (o = 350);
            var r = l.getAttribute("width");
            null == r && (r = 600);
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
                    height: o,
                    width: r,
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
                        for (var n in potato.chartLabel = l, potato.chartValue = e, i) {
                            String(n) == t && i[n]()
                        }
                    }
                })
            })
        },
        reloadTable: function(t) {
            this.setBindTableElements();
            var e, i, l, n = potato.element;
            if (t) switch (t) {
                case 1:
                    n = potato.element1;
                    break;
                case 2:
                    n = potato.element2;
                    break;
                case 3:
                    n = potato.element3;
                    break;
                case 4:
                    n = potato.element4;
                    break;
                case 5:
                    n = potato.element5;
                    break;
                case 6:
                    n = potato.element6;
                    break;
                case 7:
                    n = potato.element7;
                    break;
                case 8:
                    n = potato.element8;
                    break;
                case 9:
                    n = potato.element9
            }
            var o = n.getAttribute("id"),
                r = String(n.localName).split("-");
            null == o && (o = r.slice(2, 3));
            var a = n.getAttribute("model");
            null == a && (a = String(r.slice(2, 3)).toLowerCase() + ".php");
            var s = n.getAttribute("header");
            null == s && (s = "");
            var d = n.getAttribute("border");
            null == d && (d = "0px solid black");
            var c = n.getAttribute("borderRadius");
            null == c && (c = 0), null != n.getAttribute("click") && (e = new Function(n.getAttribute("click")));
            var u = n.getAttribute("height");
            null == u && (u = window.innerHeight - 200);
            var p = n.getAttribute("width");
            null == p && (p = window.innerWidth - 30);
            var h = n.getAttribute("root");
            if (null == h) try {
                r = String(n.localName).split("-");
                h = String(r.slice(1, 2))
            } catch (t) {
                h = "getFIELD"
            }
            var g = n.getAttribute("whereClass");
            null == g && (g = "getWHERE");
            try {
                var m = n.getAttribute("params")
            } catch (t) {}
            var f = n.getAttribute("editCols");
            null != n.getAttribute("editCellCallback") && (i = new Function(n.getAttribute("editCellCallback")));
            var y = n.getAttribute("editWidth");
            null == y && (y = 50);
            var b = n.getAttribute("selectCols"),
                v = n.getAttribute("targetCol");
            null == v && (v = 0);
            var x = n.getAttribute("markSymbol");
            null == x && (x = "★"), null != n.getAttribute("selectCellCallback") && (l = new Function(n.getAttribute("selectCellCallback")));
            var w = new Function(n.getAttribute("callback"));
            pims(n.localName)._tb_({
                FIELD: {
                    class: h
                },
                WHERE: {
                    class: g
                }
            }, function() {
                params = m + "@" + n.localName, css = {
                    border: d,
                    borderRadius: c,
                    height: u,
                    width: p
                }, attr = {
                    id: o
                }, param = {
                    model: a,
                    header: s
                }, events = {
                    callback: function(t, e) {
                        try {
                            w()
                        } catch (t) {}
                        if (null != b) {
                            var i = [];
                            try {
                                i = b.split(",")
                            } catch (t) {
                                i = b
                            }
                            i.length > 0 && pims(e).MultipleSelect(function() {
                                param = {
                                    markSymbol: x,
                                    targetCol: v,
                                    selectCol: b
                                }, events = {
                                    callback: function(t) {
                                        potato.data = [], potato.data = t;
                                        try {
                                            l()
                                        } catch (t) {}
                                    }
                                }
                            })
                        }
                    },
                    click: function(t, l, n, o) {
                        potato.table = t, potato.ri = l, potato.ci = n;
                        try {
                            e()
                        } catch (t) {}
                        var r = [];
                        try {
                            r = f.split(",")
                        } catch (t) {}
                        r.length > 0 && -1 != r.indexOf(String(n)) && pims(o)._ec_(function() {
                            param = {
                                editWidth: y,
                                targetCol: n
                            }, events = {
                                callback: function(t, e, l, n) {
                                    potato.dataID = t, potato.value = e, potato.ci = l;
                                    try {
                                        i()
                                    } catch (t) {}
                                }
                            }
                        })
                    }
                }
            })
        },
        response: function(t, e) {
            var i = new XMLHttpRequest;
            i.open("GET", _pdir().potatoModelDir2 + t), i.onload = function() {
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
            l += "& model=" + _pdir().potatoModelDir + t;
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
            var o = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            return o.open("POST", "config/xml.php"), o.onreadystatechange = function() {
                o.readyState > 3 && 200 == o.status && (pims_console = o.responseText, l(t, o.responseText))
            }, o.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), o.setRequestHeader("Chartset", "UTF-8"), o.setRequestHeader("Content-length", n.length), o.setRequestHeader("Connection", "close"), o.send(n), o
        },
        second: function() {
            var t = (new Date).getSeconds();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        Select: function(t, e, i) {
            var l = this.getHTMLElement(),
                n = this.x,
                o = this._p_(i);
            o.id = n, l.createdCallback = function() {
                this.innerHTML = '<Select id="' + n + '"></Select> ';
                for (var t = (n.match(/-/g) || []).length, e = n.split("-"), i = e.slice(2, 3), l = 3; l <= t; l++) i = i + "_" + e.slice(l, l + 1);
                this.name = i, this.is = n, $("#" + n).css({
                    width: o.width + "px",
                    height: o.height + "px",
                    color: o.color,
                    background: o.background,
                    boxShadow: o.boxShadow,
                    display: o.display,
                    fontFamily: o.fontFamily,
                    fontWeight: o.fontWeight,
                    fontSize: o.fontSize + "px",
                    textAlign: o.textAlign,
                    padding: o.padding,
                    border: o.border,
                    position: o.position,
                    left: o.left + "px",
                    top: o.top + "px",
                    borderRadius: o.borderRadius + "px",
                    textTransform: o.textTransform,
                    cursor: "pointer"
                }).attr("multiple", o.multiple).mousemove(function() {
                    "null" != o.hoverBgColor && $(this).css("background", o.hoverBgColor), $(this).css("color", o.hoverColor), "" != o.hoverText && $("#" + o.hoverId).html(o.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: o.hoverHeight + "px",
                        width: o.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 50
                    })
                }).mouseout(function() {
                    "null" != o.hoverBgColor && $(this).css("background", o.background), $(this).css("color", o.i), $("#" + o.hoverId).hide().html("")
                }).change(function() {
                    try {
                        o.change()
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
                        o.click()
                    } catch (t) {}
                })
            }, this._rp_(t, e, function(t) {
                var e = document.getElementById(n),
                    i = JSON.parse(t);
                e.length = 0;
                var l = 0;
                for (var r in i)
                    if ("undefined" != i[r].d0 && null != i[r].d0) {
                        var a = i[r].d1;
                        T = i[r].d0, e[l] = new Option(a, T), l++
                    }
                o.callback()
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
                o = String(n).split("-").slice(2, 3),
                r = n + ".php",
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
                this.id = o + "_";
                var t = document.getElementById(n);
                try {
                    this.index = t.getAttribute("index"), this.field = t.getAttribute("field"), null == this.index && (this.index = 0), null == this.field && (this.field = 0)
                } catch (t) {}
                this.pims = n, this.innerHTML = '<Select id="pims-' + n + '"></Select> ', (t = document.getElementById(o)).style.width = i.width + "px", "string" == typeof i.width && (t.style.width = i.width), t.style.height = i.height + "px", "string" == typeof i.height && (t.style.height = i.height), t.style.background = i.background, t.style.boxShadow = i.boxShadow, t.style.color = i.color, t.style.display = i.display, t.style.fontFamily = i.fontFamily, t.style.fontWeight = i.fontWeight, t.style.fontSize = i.fontSize + "px", "string" == typeof i.fontSize && (t.style.fontSize = i.fontSize), t.style.textAlign = i.textAlign, t.style.padding = i.padding, t.style.border = i.border, t.style.position = i.position, t.style.left = i.left + "px", "string" == typeof i.left && (t.style.left = i.left), t.style.top = i.top + "px", "string" == typeof i.top && (t.style.top = i.top), t.style.borderRadius = i.borderRadius + "px", "string" == typeof i.borderRadius && (t.style.borderRadius = i.borderRadius), t.style.textTransform = i.textTransform, t.style.cursor = "pointer", t.multiple = i.multiple, X("#" + o).CLICK(function() {
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
                }), X("#" + o).MOUSEMOVE(function() {
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
                }), X("#" + o).MOUSEOUT(function() {
                    "null" != i.hoverBgColor && $(this).css("background", i.background), $(this).css("color", i.i), $("#" + i.hoverId).hide().html("")
                }), X("#" + n).CHANGE(function() {
                    try {
                        i.change()
                    } catch (t) {}
                })
            }, this._rp_(r, s, function(t) {
                var e = document.getElementById(o),
                    l = JSON.parse(t);
                e.length = 0;
                var n = 0;
                for (var r in l)
                    if ("undefined" != l[r][0] && null != l[r][0]) {
                        var a = l[r][1];
                        T = l[r][0], e[n] = new Option(a, T), n++
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
            for (var l = this.x, n = document.getElementsByClassName(t), o = 0; o < n.length; o++) parseFloat(document.getElementById(l).scrollLeft) > e ? n[o].style.left = i ? parseFloat(document.getElementById(l).scrollLeft) + parseFloat(i) + "px" : document.getElementById(l).scrollLeft + "px" : n[o].style.left = "0px"
        },
        scrolly: function(t, e, i) {
            for (var l = this.x, n = document.getElementsByClassName(t), o = 0; o < n.length; o++) parseFloat(document.getElementById(l).scrollTop) > e ? n[o].style.top = i ? parseFloat(document.getElementById(l).scrollTop) + parseFloat(i) + "px" : document.getElementById(l).scrollTop + "px" : n[o].style.top = "0px"
        },
        setBindTableElements: function() {
            _potatoArray = [];
            for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e++) {
                var i = t[e].getAttribute("bind");
                try {
                    if (null != i && -1 != i.indexOf(",")) {
                        var l = String(i).split(","),
                            n = String(t[e].getAttribute("id")).split("_").slice(0, 1),
                            o = l[2];
                        null == o && (o = n), _potatoArray.push({
                            id: l[1],
                            field: o,
                            value: document.getElementById(n).value,
                            bind: l[0]
                        })
                    }
                } catch (t) {}
            }
            _potatoArray.sort(function(t, e) {
                var i = t.id,
                    l = e.id,
                    n = 0;
                return i > l ? n = 1 : i < l && (n = -1), n
            })
        },
        _se_: function() {
            var t, e = document.getElementsByTagName("*"),
                i = [],
                l = [],
                n = [],
                o = [],
                r = [],
                a = [],
                s = [],
                d = [],
                c = 0;
            for (t = 0; t < e.length; t++) {
                var u = e[t].getAttribute("bind");
                if (null != u) {
                    if (_potatoId[c] = u, null != e[t].getAttribute("id")) _potatoBindId[c] = e[t].getAttribute("id");
                    else {
                        var p = String(e[t].tagName).split("-");
                        _potatoBindId[c] = String(p.slice(2, 3)).toLowerCase()
                    }
                    c++
                }
                var h = String(e[t].tagName).split("-");
                if (-1 != this.If(h.slice(0, 1))) {
                    var g, m, f = String(e[t].tagName).split("-");
                    if ("BUTTON" == f.slice(1, 2)) {
                        var y = e[t].getAttribute("id");
                        null == y && (y = f.slice(2, 3));
                        var b = e[t].getAttribute("background");
                        null == b && (b = "#eeeeee");
                        var v = e[t].getAttribute("border");
                        null == v && (v = "1px solid black");
                        var x = e[t].getAttribute("borderRadius");
                        null == x && (x = 5);
                        var w = e[t].getAttribute("boxShadow");
                        null == w && (w = "0 0 0px rgba(0,0,0,0)");
                        var A = e[t].getAttribute("color");
                        null == A && (A = "black");
                        var S = e[t].getAttribute("display");
                        null == S && (S = "block");
                        var k = e[t].getAttribute("fontFamily");
                        null == k && (k = "Arial");
                        var _ = e[t].getAttribute("fontSize");
                        null == _ && (_ = 15);
                        var C = e[t].getAttribute("fontWeight");
                        null == C && (C = "normal");
                        var I = e[t].getAttribute("submit"),
                            T = e[t].getAttribute("fieldOther"),
                            E = e[t].getAttribute("height");
                        null == E && (E = 30);
                        var B = e[t].getAttribute("hoverBgColor");
                        null == B && (B = "yellow");
                        var F = e[t].getAttribute("hoverText");
                        null == F && (F = "");
                        var L = e[t].getAttribute("left");
                        null == L && (L = 0);
                        var R = e[t].getAttribute("margin");
                        null == R && (R = "2px 2px 2px 2px");
                        var N = e[t].getAttribute("padding");
                        null == N && (N = "5px 0px 5px 5px");
                        var D = e[t].getAttribute("paddingLeft");
                        null == D && (D = 1);
                        var O = e[t].getAttribute("paddingTop");
                        null == O && (O = 1);
                        var M = e[t].getAttribute("params"),
                            z = e[t].getAttribute("position");
                        null == z && (z = "static");
                        var H = e[t].getAttribute("textAlign");
                        null == H && (H = "center");
                        var P = e[t].getAttribute("top");
                        null == P && (P = 0);
                        var W = e[t].getAttribute("width");
                        null == W && (W = 100);
                        var j, K, U = e[t].getAttribute("whereClass");
                        pims(e[t].localName)._bt_(function() {
                            if (where = U + "@" + e[t].localName, field = I + "@" + e[t].localName, fieldOther = T + "@" + e[t].localName, params = M + "@" + e[t].localName, css = {
                                    background: b,
                                    border: v,
                                    borderRadius: x,
                                    boxShadow: w,
                                    color: A,
                                    display: S,
                                    fontFamily: k,
                                    fontSize: _,
                                    fontWeight: C,
                                    height: E,
                                    hoverBgColor: B,
                                    left: L,
                                    margin: R,
                                    padding: N,
                                    position: z,
                                    paddingTop: O,
                                    paddingLeft: D,
                                    textAlign: H,
                                    top: P,
                                    width: W
                                }, null != e[t].getAttribute("value") && null != e[t].getAttribute("image") ? attr = {
                                    value: e[t].getAttribute("value"),
                                    image: e[t].getAttribute("image"),
                                    hoverText: F,
                                    id: y
                                } : null != e[t].getAttribute("value") && null == e[t].getAttribute("image") ? attr = {
                                    value: e[t].getAttribute("value"),
                                    hoverText: F
                                } : null == e[t].getAttribute("value") && null != e[t].getAttribute("image") && (attr = {
                                    image: e[t].getAttribute("image"),
                                    hoverText: F
                                }), null != e[t].getAttribute("click")) try {
                                j = new Function(e[t].getAttribute("click")), null != e[t].getAttribute("callback") && (K = new Function(e[t].getAttribute("callback"))), events = {
                                    click: j,
                                    callback: K
                                }
                            } catch (t) {} else try {
                                try {
                                    j = new Function("_potato." + String(f.slice(2, 3)).toLowerCase() + "()")
                                } catch (t) {
                                    j = new Function(y + "()")
                                }
                                null != e[t].getAttribute("callback") && (K = new Function(e[t].getAttribute("callback"))), events = {
                                    click: j,
                                    callback: K
                                }
                            } catch (t) {}
                        })
                    }
                    if ("CALENDAR" == f.slice(1, 2)) {
                        var V = e[t].getAttribute("background");
                        null == V && (V = "#ffffff");
                        var Y = e[t].getAttribute("border");
                        null == Y && (Y = "1px solid grey");
                        var q = e[t].getAttribute("borderRadius");
                        null == q && (q = 7);
                        var G = e[t].getAttribute("fontSize"),
                            J = e[t].getAttribute("display");
                        null == J && (J = "block"), null == G && (G = 15);
                        var Q = e[t].getAttribute("height");
                        null == Q && (Q = 30);
                        var Z = e[t].getAttribute("hoverBgColor");
                        null == Z && (Z = "yellow");
                        var tt = e[t].getAttribute("hoverText");
                        null == tt && (tt = "");
                        var et = e[t].getAttribute("value"); - 1 != String(et).indexOf("return") && (et = new Function(e[t].getAttribute("value"))), null == et && (et = pims().GetDate("today", "-", 0));
                        var it = e[t].getAttribute("width");
                        null == it && (it = 100);
                        var lt = e[t].getAttribute("padding");
                        null == lt && (lt = "0px 0px 0px 0px");
                        var nt = e[t].getAttribute("id");
                        null == nt && (nt = String(f.slice(2, 3)).toLowerCase());
                        var ot = e[t].getAttribute("class");
                        if (null == ot && (ot = "getFIELD"), $(e[t].localName).addClass(ot), null != (Ie = e[t].getAttribute("change"))) {
                            h = e[t].localName;
                            n[String(h)] = new Function(Ie)
                        }
                        pims(e[t].localName)._d_(function() {
                            css = {
                                height: Q,
                                width: it,
                                fontSize: G,
                                hoverBgColor: Z,
                                border: Y,
                                borderRadius: q,
                                background: V,
                                padding: lt,
                                display: J
                            }, attr = {
                                value: et,
                                hoverText: tt,
                                id: nt,
                                name: nt
                            }, null != Ie && (events = {
                                change: function(t) {
                                    for (var e in n) {
                                        String(e) == t && n[e]()
                                    }
                                }
                            })
                        })
                    }
                    if ("KEYPAD" == f.slice(1, 2)) {
                        var rt = e[t].getAttribute("background");
                        null == rt && (rt = "#ffffff");
                        var at = e[t].getAttribute("borderRadius");
                        null == at && (at = 7);
                        var st = e[t].getAttribute("fontSize");
                        null == st && (st = 15);
                        var dt = e[t].getAttribute("height");
                        null == dt && (dt = 30);
                        var ct = e[t].getAttribute("hoverBgColor");
                        null == ct && (ct = "yellow");
                        var ut = e[t].getAttribute("htm");
                        null == ut && (ut = "config/keypad.htm");
                        var pt = e[t].getAttribute("left");
                        null == pt && (pt = 0);
                        var ht = e[t].getAttribute("top");
                        null == ht && (ht = 0);
                        var gt = e[t].getAttribute("value");
                        null == gt && (gt = "0");
                        var mt = e[t].getAttribute("width");
                        null == mt && (mt = 100);
                        var ft = e[t].getAttribute("id");
                        null == ft && (ft = String(f.slice(2, 3)).toLowerCase());
                        var yt = e[t].getAttribute("border");
                        null == yt && (yt = "1px solid black");
                        var bt = e[t].getAttribute("class");
                        null == bt && (bt = "getFIELD"), $(e[t].localName).addClass(bt);
                        var vt = new Function(e[t].getAttribute("change")),
                            xt = new Function(e[t].getAttribute("click"));
                        pims(e[t].localName)._kp_(function() {
                            param = {
                                htm: ut
                            }, css = {
                                height: dt,
                                width: mt,
                                fontSize: st,
                                hoverBgColor: ct,
                                borderRadius: at,
                                background: rt,
                                topKey: ht,
                                leftKey: pt,
                                border: yt
                            }, attr = {
                                value: gt,
                                id: ft,
                                name: ft
                            }, events = {
                                change: vt,
                                click: xt
                            }
                        })
                    }
                    if ("LIST" == f.slice(1, 2)) {
                        var wt = e[t].getAttribute("background");
                        null == wt && (wt = "#ffffff");
                        var At = e[t].getAttribute("borderRadius");
                        null == At && (At = 7);
                        var St = e[t].getAttribute("fontSize");
                        null == St && (St = 15);
                        var kt = e[t].getAttribute("height");
                        null == kt && (kt = 30);
                        var _t = e[t].getAttribute("hoverBgColor");
                        null == _t && (_t = "yellow");
                        var Ct = e[t].getAttribute("hoverText");
                        null == Ct && (Ct = "");
                        var It = e[t].getAttribute("value");
                        null == It && (It = "0");
                        var Tt = e[t].getAttribute("width");
                        null == Tt && (Tt = 100);
                        var Et = e[t].getAttribute("widthTable");
                        null == Et && (Et = 550);
                        var Bt = e[t].getAttribute("heightTable");
                        null == Bt && (Bt = 450);
                        var $t = e[t].getAttribute("id");
                        null == $t && ($t = String(f.slice(2, 3)).toLowerCase());
                        var Ft = e[t].getAttribute("model");
                        null == Ft && (Ft = String(f.slice(2, 3)).toLowerCase() + ".php");
                        var Lt = e[t].getAttribute("class");
                        null == Lt && (Lt = "getFIELD"), $(e[t].localName).addClass(Lt);
                        var Rt = e[t].getAttribute("whereClass"),
                            Nt = e[t].getAttribute("params"),
                            Dt = e[t].getAttribute("onscroll");
                        if (null != (Ce = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            l[String(h)] = new Function(Ce)
                        } else try {
                            h = e[t].localName;
                            l[String(h)] = new Function(String(f.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (oe = e[t].getAttribute("callback"))) {
                            h = e[t].localName;
                            i[String(h)] = new Function(oe)
                        }
                        var Xt = e[t].getAttribute("topTable"),
                            Ot = e[t].getAttribute("leftTable"),
                            Mt = e[t].getAttribute("display"),
                            zt = String(e[t].localName);
                        pims(zt)._lt_(function() {
                            try {
                                where = Rt + "@" + zt
                            } catch (t) {}
                            try {
                                params = Nt + "@" + zt
                            } catch (t) {}
                            css = {
                                display: Mt,
                                height: kt,
                                width: Tt,
                                fontSize: St,
                                hoverBgColor: _t,
                                borderRadius: At,
                                background: wt,
                                marginTop: Xt + "_" + zt,
                                marginLeft: Ot + "_" + zt,
                                widthTable: Et + "_" + zt,
                                heightTable: Bt + "_" + zt
                            }, param = {
                                model: Ft
                            }, attr = {
                                onscroll: Dt,
                                value: It,
                                hoverText: Ct,
                                id: $t
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
                    if ("MENU" == f.slice(1, 2)) {
                        var Ht = e[t].getAttribute("background");
                        null == Ht && (Ht = "#ffffff");
                        var Pt = e[t].getAttribute("border");
                        null == Pt && (Pt = "0px");
                        var Wt = e[t].getAttribute("menuModel");
                        null == Wt && (Wt = "null");
                        var jt = e[t].getAttribute("menuTitle");
                        null == jt && (jt = "null");
                        var Kt = e[t].getAttribute("padding"),
                            Ut = e[t].getAttribute("color");
                        null == Ut && (Ut = "BLUE");
                        var Vt = e[t].getAttribute("borderRadius");
                        null == Vt && (Vt = 7);
                        var Yt = e[t].getAttribute("fontSize");
                        null == Yt && (Yt = 15);
                        var qt = e[t].getAttribute("height");
                        null == qt && (qt = 30);
                        var Gt = e[t].getAttribute("hoverBgColor");
                        null == Gt && (Gt = "yellow");
                        var Jt = e[t].getAttribute("hoverText");
                        null == Jt && (Jt = "");
                        var Qt = e[t].getAttribute("value");
                        null == Qt && (Qt = "0");
                        var Zt = e[t].getAttribute("width");
                        null == Zt && (Zt = document.innerWidth + "px");
                        var te = e[t].getAttribute("widthMenu");
                        null == te && (te = 550);
                        var ee = e[t].getAttribute("heightTable");
                        null == ee && (ee = 450);
                        var ie = e[t].getAttribute("id");
                        null == ie && (ie = String(f.slice(2, 3)).toLowerCase());
                        var le = e[t].getAttribute("model");
                        null == le && (le = String(f.slice(2, 3)).toLowerCase() + ".php");
                        var ne = e[t].getAttribute("class");
                        null == ne && (ne = "getFIELD"), $(e[t].localName).addClass(ne);
                        var oe, re = e[t].getAttribute("whereClass"),
                            ae = e[t].getAttribute("params"),
                            se = e[t].getAttribute("onscroll");
                        if (null != (Ce = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            d[String(h)] = new Function(Ce)
                        } else try {
                            h = e[t].localName;
                            d[String(h)] = new Function(String(f.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (oe = e[t].getAttribute("callback"))) {
                            h = e[t].localName;
                            s[String(h)] = new Function(oe)
                        }
                        var de = e[t].getAttribute("topTable"),
                            ce = e[t].getAttribute("leftTable"),
                            ue = e[t].getAttribute("display");
                        zt = String(e[t].localName);
                        pims(zt)._m_(function() {
                            try {
                                where = re + "@" + zt
                            } catch (t) {}
                            try {
                                params = ae + "@" + zt
                            } catch (t) {}
                            css = {
                                display: ue,
                                height: qt,
                                width: Zt,
                                color: Ut,
                                fontSize: Yt,
                                hoverBgColor: Gt,
                                borderRadius: Vt,
                                border: Pt,
                                background: Ht,
                                padding: Kt,
                                marginTop: de + "_" + zt,
                                marginLeft: ce + "_" + zt,
                                widthTable: te + "_" + zt,
                                heightTable: ee + "_" + zt
                            }, param = {
                                model: le,
                                menuTitle: jt,
                                menuModel: Wt
                            }, attr = {
                                onscroll: se,
                                value: Qt,
                                hoverText: Jt,
                                id: ie
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
                    if ("TABLE" == f.slice(1, 2) && (potato.element = e[t], _potatoTableId = 0), "TABLE1" == f.slice(1, 2) && (potato.element1 = e[t], _potatoTableId = 1), "TABLE2" == f.slice(1, 2) && (potato.element2 = e[t], _potatoTableId = 2), "TABLE3" == f.slice(1, 2) && (potato.element3 = e[t], _potatoTableId = 3), "TABLE4" == f.slice(1, 2) && (potato.element4 = e[t], _potatoTableId = 4), "TABLE5" == f.slice(1, 2) && (potato.element5 = e[t], _potatoTableId = 5), "TABLE6" == f.slice(1, 2) && (potato.element6 = e[t], _potatoTableId = 6), "TABLE7" == f.slice(1, 2) && (potato.element7 = e[t], _potatoTableId = 7), "TABLE8" == f.slice(1, 2) && (potato.element8 = e[t], _potatoTableId = 8), "TABLE9" == f.slice(1, 2) && (potato.element9 = e[t], _potatoTableId = 9), "TEXT" == f.slice(1, 2)) {
                        var pe = e[t].getAttribute("background");
                        null == pe && (pe = "#ffffff");
                        var he = e[t].getAttribute("border");
                        null == he && (he = "1px solid black");
                        var ge = e[t].getAttribute("borderRadius");
                        null == ge && (ge = 7);
                        var me = e[t].getAttribute("color");
                        null == me && (me = "black");
                        var fe = e[t].getAttribute("cursor");
                        null == fe && (fe = "default");
                        var ye = e[t].getAttribute("display");
                        null == ye && (ye = "block");
                        var be = e[t].getAttribute("disabled"),
                            ve = e[t].getAttribute("fontSize");
                        null == ve && (ve = 15);
                        var xe = e[t].getAttribute("height");
                        null == xe && (xe = 30);
                        var we = e[t].getAttribute("hoverBgColor");
                        null == we && (we = "yellow");
                        var Ae = e[t].getAttribute("hoverText");
                        null == Ae && (Ae = "");
                        var Se = e[t].getAttribute("value");
                        null == Se && (Se = "0");
                        var ke = e[t].getAttribute("width");
                        null == ke && (ke = 100);
                        var _e = e[t].getAttribute("id");
                        null == _e && (_e = f.slice(2, 3));
                        var Ce, Ie, Te = e[t].getAttribute("class");
                        if (null == Te && (Te = "getFIELD"), $(e[t].localName).addClass(Te), null != (Ce = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            o[String(h)] = new Function(Ce)
                        }
                        if (null != (Ie = e[t].getAttribute("change"))) {
                            h = e[t].localName;
                            a[String(h)] = new Function(Ie)
                        }
                        var Ee = e[t].getAttribute("keyup");
                        if (null != Ee) {
                            h = e[t].localName;
                            r[String(h)] = new Function(Ee)
                        }
                        pims(e[t].localName)._tx_(function() {
                            css = {
                                height: xe,
                                width: ke,
                                fontSize: ve,
                                hoverBgColor: we,
                                border: he,
                                borderRadius: ge,
                                background: pe,
                                display: ye,
                                color: me,
                                cursor: fe
                            }, attr = {
                                disabled: be,
                                value: Se,
                                hoverText: Ae,
                                id: _e
                            }, events = {
                                click: function(t) {
                                    for (var e in o) {
                                        String(e) == t && o[e]()
                                    }
                                },
                                change: function(t) {
                                    for (var e in a) {
                                        String(e) == t && a[e]()
                                    }
                                },
                                keyup: function(t, e) {
                                    for (var i in r) {
                                        String(i) == t && r[i]()
                                    }
                                }
                            }
                        })
                    }
                    if ("CHART" == f.slice(1, 2)) potato.elementbar = e[t], _potatoElement[f.slice(2, 3)] = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(f.slice(2, 3)) : X.prototype.reloadBar(f.slice(2, 3), "false");
                    if ("BAR" == f.slice(1, 2)) {
                        var Be;
                        e[t].getAttribute("type");
                        potato.elementbar = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(0) : X.prototype.reloadBar(0, "false")
                    }
                    if ("BAR1" == f.slice(1, 2)) potato.element1bar = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(1) : X.prototype.reloadBar(1, "false");
                    if ("BAR2" == f.slice(1, 2)) potato.element2bar = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(2) : X.prototype.reloadBar(2, "false");
                    if ("BAR3" == f.slice(1, 2)) potato.element3bar = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(3) : X.prototype.reloadBar(3, "false");
                    if ("BAR4" == f.slice(1, 2)) potato.element4bar = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(4) : X.prototype.reloadBar(4, "false");
                    if ("BAR5" == f.slice(1, 2)) potato.element5bar = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(5) : X.prototype.reloadBar(5, "false");
                    if ("BAR6" == f.slice(1, 2)) potato.element6bar = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(6) : X.prototype.reloadBar(6, "false");
                    if ("BAR7" == f.slice(1, 2)) potato.element7bar = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(7) : X.prototype.reloadBar(7, "false");
                    if ("BAR8" == f.slice(1, 2)) potato.element8bar = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(8) : X.prototype.reloadBar(8, "false");
                    if ("BAR9" == f.slice(1, 2)) potato.element9bar = e[t], null == (Be = e[t].getAttribute("onload")) && (Be = "true"), "true" == Be ? X.prototype.reloadBar(9) : X.prototype.reloadBar(9, "false");
                    if ("DOUGHNUT" == f.slice(1, 2)) potato.elementdoughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(0) : X.prototype.reloadDoughnut(0, "false");
                    if ("DOUGHNUT1" == f.slice(1, 2)) potato.element1doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(1) : X.prototype.reloadDoughnut(1, "false");
                    if ("DOUGHNUT2" == f.slice(1, 2)) potato.element2doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(2) : X.prototype.reloadDoughnut(2, "false");
                    if ("DOUGHNUT3" == f.slice(1, 2)) potato.element3doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(3) : X.prototype.reloadDoughnut(3, "false");
                    if ("DOUGHNUT4" == f.slice(1, 2)) potato.element4doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(4) : X.prototype.reloadDoughnut(4, "false");
                    if ("DOUGHNUT5" == f.slice(1, 2)) potato.element5doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(5) : X.prototype.reloadDoughnut(5, "false");
                    if ("DOUGHNUT6" == f.slice(1, 2)) potato.element6doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(6) : X.prototype.reloadDoughnut(6, "false");
                    if ("DOUGHNUT7" == f.slice(1, 2)) potato.element7doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(7) : X.prototype.reloadDoughnut(7, "false");
                    if ("DOUGHNUT8" == f.slice(1, 2)) potato.element8doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(8) : X.prototype.reloadDoughnut(8, "false");
                    if ("DOUGHNUT9" == f.slice(1, 2)) potato.element9doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(9) : X.prototype.reloadDoughnut(9, "false");
                    if ("RADAR" == f.slice(1, 2)) potato.elementradar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(0) : X.prototype.reloadRadar(0, "false");
                    if ("RADAR1" == f.slice(1, 2)) potato.element1radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(1) : X.prototype.reloadRadar(1, "false");
                    if ("RADAR2" == f.slice(1, 2)) potato.element2radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(2) : X.prototype.reloadRadar(2, "false");
                    if ("RADAR3" == f.slice(1, 2)) potato.element3radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(3) : X.prototype.reloadRadar(3, "false");
                    if ("RADAR4" == f.slice(1, 2)) potato.element4radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(4) : X.prototype.reloadRadar(4, "false");
                    if ("RADAR5" == f.slice(1, 2)) potato.element5radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(5) : X.prototype.reloadRadar(5, "false");
                    if ("RADAR6" == f.slice(1, 2)) potato.element6radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(6) : X.prototype.reloadRadar(6, "false");
                    if ("RADAR7" == f.slice(1, 2)) potato.element7radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(7) : X.prototype.reloadRadar(7, "false");
                    if ("RADAR8" == f.slice(1, 2)) potato.element8radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(8) : X.prototype.reloadRadar(8, "false");
                    if ("RADAR9" == f.slice(1, 2)) potato.element9radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(9) : X.prototype.reloadRadar(9, "false")
                }
            }
            try {
                0 == _potatoTableId ? X.prototype.reloadTable() : X.prototype.reloadTable(_potatoTableId)
            } catch (t) {}
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
                for (var o = X.prototype.getIdClass(t), r = (t = [], 0); r < o.length; r++) "length" != o[r].name && (t[o[r].name] = pims(o[r].is).value());
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
                for (var o = X.prototype.getIdClass(t), r = (t = [], 0); r < o.length; r++) "length" != o[r].name && (t[o[r].name] = pims(o[r].is).value());
            this._rp_(n, t, function(t) {
                "tableId" == i.tableId && (i.tableId = "table_" + l);
                var e = JSON.parse(t),
                    n = "<table id=" + i.tableId + " class=" + i.cls + ">";
                if (null != i.data.d0) {
                    var o, r = (new Array, 0);
                    for (o in n += "<tr>", i.data) n += "<th>" + i.data["d" + r] + "</th>", r += 1;
                    for (var a in n += "</tr>", e)
                        if ("undefined" != e[a].d0 && null != e[a].d0) {
                            n += "<tr>";
                            for (var s = 0; r > s; s++) n += "<td>" + e[a]["d" + s] + "</td>";
                            n += "</tr>"
                        }
                } else {
                    r = 0;
                    for (o in n += "<tr>", e[0]) "" != e[0][o] ? n += "<th>" + e[0][o] + "</th>" : n += "<th style='display:none'>" + e[0][o] + "</th>", r++;
                    for (var a in n += "</tr>", e)
                        if ("undefined" != e[a][0] && null != e[a][0] && a > 0) {
                            n += "<tr>";
                            for (s = 0; r > s; s++) "" != e[0][s] ? n += "<td>" + e[a][s] + "</td>" : n += "<td style='display:none'>" + e[a][s] + "</td>";
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
                        for (var t = 0; t < r; t++) d.rows[ri].cells[t].style.background = "#dfdfdf"
                    } catch (t) {}
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (t = 0; t < r; t++) d.rows[ri].cells[t].style.background = "yellow";
                    i.click(d.rows[ri], ri, ci)
                })
            })
        },
        _tb_: function(t, i) {
            for (var l = this._p_(i), n = this.getHTMLElement(), o = this.x, r = [
                    []
                ], a = l.id, s = String(l.header).split(","), d = 0, c = 0; c < _potatoArray.length; c++) a == String(_potatoArray[c].bind) && (r[d] = _potatoArray[c].value, d++);
            n.createdCallback = function() {
                this.innerHTML = '<div id="div-' + a + '" ></div> '
            }, this._rp_(l.model, r, function(t) {
                var i = JSON.parse(t);
                "tableId" == l.tableId && (l.tableId = "table-" + a);
                var n = "<table id=" + l.tableId + " style='border-collapse:collapse;width:99%'>";
                if (null != s && s.length > 0) {
                    var o = 0;
                    for (e in n += "<tr>", s) "" != s[e] ? n += "<th style='border:1px solid black'>" + s[e] + "</th>" : n += "<th style='display:none'>" + s[e] + "</th>", o++;
                    for (var r in n += "</tr>", i)
                        if ("undefined" != i[r][0] && null != i[r][0] && r >= 0) {
                            n += "<tr>";
                            for (var d = 0; d < o; d++) "" != s[d] && null != s[d] ? n += "<td style='border:1px solid black;padding-left:5px'>" + i[r][d] + "</td>" : n += "<td style='display:none'>" + i[r][d] + "</td>";
                            n += "</tr>"
                        }
                } else {
                    o = 0;
                    for (e in n += "<tr>", i[0]) "" != i[0][e] ? n += "<th style='border:1px solid black'>" + i[0][e] + "</th>" : n += "<th style='display:none'>" + i[0][e] + "</th>", o++;
                    for (var r in n += "</tr>", i)
                        if ("undefined" != i[r][0] && null != i[r][0] && r > 0) {
                            n += "<tr>";
                            for (d = 0; o > d; d++) "" != i[0][d] && null != i[0][d] && "undefined" != i[0][d] ? n += "<td style='border:1px solid black'>" + i[r][d] + "</td>" : n += "<td style='display:none'>" + i[r][d] + "</td>";
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
                var c = document.getElementById(l.tableId),
                    u = $("#" + l.tableId + " tbody");
                $(document).keydown(function(t) {
                    if (u.find(".highlight").length)
                        if (40 == t.which) {
                            var e = u.find(".highlight").next();
                            X.prototype.tableHighlight(e[0].rowIndex, l.tableId)
                        } else if (38 == t.which) {
                        var i = u.find(".highlight").prev();
                        X.prototype.tableHighlight(i[0].rowIndex, l.tableId)
                    }
                });
                try {
                    c = document.getElementById(l.tableId);
                    l.callback(c, l.tableId)
                } catch (t) {}
                $("#" + l.tableId + " td").click(function() {
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (var t = 0; t < o; t++) 0;
                    l.click(c.rows[ri], ri, ci, l.tableId)
                })
            });
            try {
                pimsElement = document.registerPotato(o, {
                    prototype: n
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(o, {
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
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), o = 3; o <= t; o++) n = n + "_" + e.slice(o, o + 1);
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
                n = e.id;
            i.createdCallback = function() {
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
                    for (var i = 0; i < _potatoId.length; i++)
                        if (String(n).toLowerCase() == String(_potatoId[i])) {
                            var o = String(_potatoBindId[i]);
                            document.getElementById(o).innerText = document.getElementById(n).value
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
                for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), o = 3; o <= t; o++) n = n + "_" + e.slice(o, o + 1);
                this.name = n, this.is = i;
                var r = '<div id="div_' + i + '"> ';
                r += '<input type="text" id="' + i + '"> ', r += '<div class="keypad" id="keypad-' + i + '"></div> ', r += "</div> ", this.innerHTML = r, _fieldtime = document.getElementById("input-" + i), $("#div_" + i).css({
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
    _potato = new X;
! function(t, e) {
    t.fn.extend({
        box: function(e, i, l, n) {
            var o = t(this).attr("id");
            n ? "free" == n ? (_ = new PIMS, _.$ListFree(o, e, i, l)) : (_ = new PIMS, _.$ListFix(o, e, i, l)) : (_ = new PIMS, _.$ListFree(o, e, i, l))
        },
        excel: function(e, i) {
            _ = new PIMS, _.$_el_(t(this).attr("id"), e, i)
        },
        keyboard: function(e, i) {
            _ = new PIMS, _.$Keyboard(t(this).attr("id"), e, i), t(".tool_key_cls_o,.tool_key_cls_n").show()
        },
        keypad: function(e, i) {
            _ = new PIMS, _.$Keypad(t(this).attr("id"), e, i), t(".tool_key_cls_o,.tool_key_cls_n").show()
        },
        timepad: function(e, i) {
            _ = new PIMS, _.$Timepad(t(this).attr("id"), e, i)
        },
        multiselect: function(e, i, l, n) {
            _ = new PIMS, _.$MultipleSelect(e, t(this).attr("id"), i, l, n)
        },
        obj: function() {
            return document.getElementById(t(this).attr("id"))
        },
        pop: function(e) {
            var i = t(this).attr("id");
            _ = new PIMS, _.$Pop(e, i)
        },
        scrollx: function(e, i, l) {
            for (var n = t(this).attr("id"), o = document.getElementsByClassName(e), r = 0; r < o.length; r++) parseFloat(document.getElementById(n).scrollLeft) > i ? o[r].style.left = l ? parseFloat(document.getElementById(n).scrollLeft) + parseFloat(l) + "px" : document.getElementById(n).scrollLeft + "px" : o[r].style.left = "0px"
        },
        scrolly: function(e, i, l) {
            for (var n = t(this).attr("id"), o = document.getElementsByClassName(e), r = 0; r < o.length; r++) parseFloat(document.getElementById(n).scrollTop) > i ? o[r].style.top = l ? parseFloat(document.getElementById(n).scrollTop) + parseFloat(l) + "px" : document.getElementById(n).scrollTop + "px" : o[r].style.top = "0px"
        }
    }), t.extend({
        collapse: function(e, i, l) {
            var n = 1440,
                o = setInterval(function() {
                    0 != n ? (n -= 40, t(".link", e).stop().animate({
                        rotate: "+=40deg"
                    }, 0)) : clearInterval(o)
                }, 10);
            e.stop().animate({
                width: i + "px",
                height: l + "px"
            }, 500).find(".item_content").stop(!0, !0).fadeOut().find("p").stop(!0, !0).fadeOut()
        },
        comma: function(t) {
            return _ = new PIMS, _.$Commas(t)
        },
        countdown: function(t, e) {
            _ = new PIMS, _.$Countdown(t, e)
        },
        editcell: function(t, e, i) {
            _ = new PIMS, _.$_ec_(t, e, i)
        },
        editcellclick: function(t, e, i) {
            _ = new PIMS, _.$EditCellsClick(t, e, i)
        },
        expand: function(e, i, l) {
            var n = 0,
                o = setInterval(function() {
                    1440 != n ? (n += 40, t(".link", e).stop().animate({
                        rotate: "+=-40deg"
                    }, 0)) : clearInterval(o)
                }, 10);
            e.stop().animate({
                width: i + "px",
                height: l + "px"
            }, 500).find(".item_content").fadeIn(400, function() {
                t(this).find("p").stop(!0, !0).fadeIn(600)
            })
        },
        day: function() {
            var t = (new Date).getDate();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        month: function() {
            var t = (new Date).getMonth() + 1;
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        year: function() {
            return (new Date).getFullYear()
        },
        date: function(t, e, i) {
            e || (e = "-"), "today" == t && (t = this.year() + "-" + this.month() + "-" + this.day());
            var l = t.split(e),
                n = new Date(l[0] + "/" + l[1] + "/" + l[2]);
            n.setDate(n.getDate() + i);
            var o = n.getFullYear(),
                r = n.getMonth() + 1;
            r = parseInt(r) < 10 ? "0" + r : r;
            var a = n.getDate();
            return o + e + r + e + (a = parseInt(a) < 10 ? "0" + a : a)
        },
        load: function(e, i, l) {
            document.name = e;
            var n = document.registerElement("pims-loading");
            document.body.appendChild(new n), t("pims-loading").html('Loading...<img src="lib/images/img-loading.gif" style="width:35px;height:35px"/>').show().css({
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
            var o = 1,
                r = setInterval(function() {
                    0 == --o && (t("#body").show(), t("#PIMS").html("").hide(), l(), t("body").css("background", i), clearInterval(r))
                }, 1e3)
        },
        pop: function(t, e, i, l) {
            newwindow = this.getWindow(t, e, i, l), window.focus && newwindow.focus()
        }
    })
}($), PIMS();
