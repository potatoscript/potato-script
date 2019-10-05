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
            data: new Array
        },
        init: function() {
            _pimS = this.settings;
            var t = new Date,
                e = t.getDate(),
                i = t.getHours(),
                l = t.getMinutes(),
                n = t.getMonth() + 1,
                r = t.getSeconds(),
                o = t.getFullYear();
            _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(l) < 10 ? "0" + l : l, _pimS.month = parseInt(n) < 10 ? "0" + n : n, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.day = o, potato = pims = X, _$.init(), document.onmouseover = X.prototype.doOver, document.onmouseout = X.prototype.doOut, document.onmousedown = X.prototype.doDown, document.onmouseup = X.prototype.doUp
        },
        start: function() {}
    },
    __p = function() {
        function t() {}
        return t.prototype = {
            l: function(t) {
                return String.fromCharCode.apply(String, t)
            }
        }, t
    }();
! function(t, u, i, e) {
    "use strict";

    function p(t, e) {
        for (var i = 0, l = t.length; i < l; i++) r(t[i], e)
    }

    function h(e) {
        return function(t) {
            et(t) && (r(t, e), p(t.querySelectorAll(O), e))
        }
    }

    function g(t) {
        var e = t.getAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111)),
            i = t.nodeName.toUpperCase(),
            l = z.call(D, e ? L + e.toUpperCase() : F + i);
        return e && -1 < l && !m(i, e) ? -1 : l
    }

    function m(t, e) {
        return -1 < O.indexOf(t + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + e + '"]')
    }

    function a(t) {
        var e = t.currentTarget,
            i = t.attrChange,
            l = t.attrName,
            n = t.target;
        !ht || n && n !== e || !e.attributeChangedCallback || "style" === l || e.attributeChangedCallback(l, i === t[I] ? null : t.prevValue, i === t[E] ? null : t.newValue)
    }

    function f(t) {
        var e = h(t);
        return function(t) {
            y.push(e, t.target)
        }
    }

    function b(t) {
        pt && (pt = !1, t.currentTarget.removeEventListener($, b)), p((t.target || u).querySelectorAll(O), t.detail === _ ? _ : S), tt && function() {
            for (var t, e = 0, i = it.length; e < i; e++) t = it[e], M.contains(t) || (it.splice(e, 1), r(t, _))
        }()
    }

    function l(t, e) {
        nt.call(this, t, e), o.call(this, {
            target: this
        })
    }

    function n(t, e) {
        J(t, e), v ? v.observe(t, at) : (ut && (t.setAttribute = l, t[k] = d(t), t.addEventListener("DOMSubtreeModified", o)), t.addEventListener(B, a)), t.createdCallback && ht && (t.created = !0, t.createdCallback(), t.created = !1)
    }

    function r(t, e) {
        var i, l = g(t); - 1 < l && (c(t, X[l]), l = 0, e !== S || t[S] ? e !== _ || t[_] || (t[S] = !1, t[_] = !0, l = 1) : (t[_] = !1, t[S] = !0, l = 1, tt && z.call(it, t) < 0 && it.push(t)), l && (i = t[e + "Callback"]) && i.call(t))
    }
    if (!(e in u)) {
        var y, o, s, d, v, c, x, w, A, k = "__" + e + (1e5 * Math.random() >> 0),
            S = "attached",
            _ = "detached",
            C = "extends",
            I = "ADDITION",
            T = "MODIFICATION",
            E = "REMOVAL",
            B = "DOMAttrModified",
            $ = "DOMContentLoaded",
            F = "<",
            L = "=",
            N = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
            R = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
            D = [],
            X = [],
            O = "",
            M = u.documentElement,
            z = D.indexOf || function(t) {
                for (var e = this.length; e-- && this[e] !== t;);
                return e
            },
            H = i.prototype,
            P = H.hasOwnProperty,
            W = H.isPrototypeOf,
            j = i.defineProperty,
            K = i.getOwnPropertyDescriptor,
            V = i.getOwnPropertyNames,
            U = i.getPrototypeOf,
            Y = i.setPrototypeOf,
            q = !!i.__proto__,
            G = i.create || function t(e) {
                return e ? (t.prototype = e, new t) : this
            },
            J = Y || (q ? function(t, e) {
                return t.__proto__ = e, t
            } : V && K ? function(t, e) {
                for (; gt(t, e), (e = U(e)) && !W.call(e, t););
                return t
            } : function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }),
            Q = t.MutationObserver || t.WebKitMutationObserver,
            Z = (t.HTMLElement || t.Element || t.Node).prototype,
            tt = !W.call(Z, M),
            et = tt ? function(t) {
                return 1 === t.nodeType
            } : function(t) {
                return W.call(Z, t)
            },
            it = tt && [],
            lt = Z.cloneNode,
            nt = Z.setAttribute,
            rt = Z.removeAttribute,
            ot = u.createElement,
            at = Q && {
                attributes: !0,
                characterData: !0,
                attributeOldValue: !0
            },
            st = Q || function(t) {
                ut = !1, M.removeEventListener(B, st)
            },
            dt = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                setTimeout(t, 10)
            },
            ct = !1,
            ut = !0,
            pt = !0,
            ht = !0;
        x = Y || q ? (c = function(t, e) {
            W.call(e, t) || n(t, e)
        }, n) : c = function(t, e) {
            t[k] || (t[k] = i(!0), n(t, e))
        }, tt ? (ut = !1, w = K(Z, "addEventListener"), A = w.value, w.value = function(t, e, i) {
            t === B && this.attributeChangedCallback && this.setAttribute !== ft && (this[k] = {
                className: {
                    name: "class",
                    value: this.className
                }
            }, this.setAttribute = ft, this.removeAttribute = mt, A.call(this, "propertychange", bt)), A.call(this, t, e, i)
        }, j(Z, "addEventListener", w)) : Q || (M.addEventListener(B, st), M.setAttribute(k, 1), M.removeAttribute(k), ut && (o = function(t) {
            var e, i, l, n = this;
            if (n === t.target) {
                for (l in e = n[k], n[k] = i = d(n), i) {
                    if (!(l in e)) return s(0, n, l, e[l], i[l], I);
                    if (i[l] !== e[l]) return s(1, n, l, e[l], i[l], T)
                }
                for (l in e)
                    if (!(l in i)) return s(2, n, l, e[l], i[l], E)
            }
        }, s = function(t, e, i, l, n, r) {
            var o = {
                attrChange: t,
                currentTarget: e,
                attrName: i,
                prevValue: l,
                newValue: n
            };
            o[r] = t, a(o)
        }, d = function(t) {
            for (var e, i, l = {}, n = t.attributes, r = 0, o = n.length; r < o; r++) "setAttribute" !== (i = (e = n[r]).name) && (l[i] = e.value);
            return l
        })), u[e] = function(t, e) {
            function r(t, e) {
                for (var i = 0, l = t.length; i < l; e(t[i++]));
            }
            var o, a;
            if (l = t.toUpperCase(), ct || (ct = !0, Q ? (o = h(S), a = h(_), (v = new Q(function(t) {
                    for (var e, i, l = 0, n = t.length; l < n; l++) "childList" === (e = t[l]).type ? (r(e.addedNodes, o), r(e.removedNodes, a)) : (i = e.target, ht && i.attributeChangedCallback && "style" !== e.attributeName && i.attributeChangedCallback(e.attributeName, e.oldValue, i.getAttribute(e.attributeName)))
                })).observe(u, {
                    childList: !0,
                    subtree: !0
                })) : (y = [], dt(function t() {
                    for (; y.length;) y.shift().call(null, y.shift());
                    dt(t)
                }), u.addEventListener("DOMNodeInserted", f(S)), u.addEventListener("DOMNodeRemoved", f(_))), u.addEventListener($, b), u.addEventListener("readystatechange", b), u.createElement = function(t, e) {
                    var i = ot.apply(u, arguments),
                        l = "" + t,
                        n = z.call(D, (e ? L : F) + (e || l).toUpperCase()),
                        r = -1 < n;
                    return e && (i.setAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111), e = e.toLowerCase()), r = r && m(l.toUpperCase(), e)), ht = !u.createElement.innerHTMLHelper, r && x(i, X[n]), i
                }, Z.cloneNode = function(t) {
                    var e = lt.call(this, !!t),
                        i = g(e);
                    return -1 < i && x(e, X[i]), t && function(t) {
                        for (var e, i = 0, l = t.length; i < l; i++) e = t[i], x(e, X[g(e)])
                    }(e.querySelectorAll(O)), e
                }), -2 < z.call(D, L + l) + z.call(D, F + l)) throw new Error("A " + t + " type pims already registered");
            if (!N.test(l) || -1 < z.call(R, l)) throw new Error("The type " + t + " pims invalid");

            function i() {
                return s ? u.createElement(d, l) : u.createElement(d)
            }
            var l, n = e || H,
                s = P.call(n, C),
                d = s ? e[C].toUpperCase() : l,
                c = D.push((s ? L : F) + l) - 1;
            return O = O.concat(O.length ? "," : "", s ? d + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + t.toLowerCase() + '"]' : d), i.prototype = X[c] = P.call(n, "prototype") ? n.prototype : G(Z), p(u.querySelectorAll(O), S), i
        }
    }

    function gt(t, e) {
        for (var i, l = V(e), n = 0, r = l.length; n < r; n++) i = l[n], P.call(t, i) || j(t, i, K(e, i))
    }

    function mt(t) {
        var e = new CustomEvent(B, {
            bubbles: !0
        });
        e.attrName = t, e.prevValue = this.getAttribute(t), e.newValue = null, e[E] = e.attrChange = 2, rt.call(this, t), this.dispatchEvent(e)
    }

    function ft(t, e) {
        var i = this.hasAttribute(t),
            l = i && this.getAttribute(t),
            n = new CustomEvent(B, {
                bubbles: !0
            });
        nt.call(this, t, e), n.attrName = t, n.prevValue = i ? l : null, n.newValue = e, i ? n[T] = n.attrChange = 1 : n[I] = n.attrChange = 0, this.dispatchEvent(n)
    }

    function bt(t) {
        var e, i = t.currentTarget,
            l = i[k],
            n = t.propertyName;
        l.hasOwnProperty(n) && (l = l[n], (e = new CustomEvent(B, {
            bubbles: !0
        })).attrName = l.name, e.prevValue = l.value || null, e.newValue = l.value = i[n] || null, null == e.prevValue ? e[I] = e.attrChange = 0 : e[T] = e.attrChange = 1, i.dispatchEvent(e))
    }
}(window, document, Object, __p.prototype.l(_pcnst().r));
var X = function() {
    var _pimS = function(t, e, i, l, n) {
        var r = __p.prototype.l(_pcnst().lp);
        if (this.data = [], this.array1 = [], this.array2 = [], this.where = [], this.field = [], this.whereOther = [], this.fieldOther = [], this.Query = 0, this.Submit = 0, -1 != String(t).indexOf(__p.prototype.l(_pcnst().h)) && (r = String(t).split(__p.prototype.l(_pcnst().h)).slice(1, 2)), !n) {
            if (t && r == __p.prototype.l(_pcnst().lp)) return window === this ? new _pimS(t) : (this.Day = this.day(), this.e = document.getElementById(t), this.Hour = this.hour(), this.id = t, this.Minute = this.minute(), this.Month = this.month(), this.obj = document.getElementById(t), this.Patent = this.getPatent(), this.Second = this.second(), this.x = t, this.Year = this.year(), this.table, this.ci, this.ri, this.value, this.oldValue, this.dataID, this.trigger, this.chartLabel, this.chartValue, this.chartXvalue, this.element, this.element1, this.element2, this.element3, this.element4, this.element5, this.element6, this.element7, this.element8, this.element9, this.elementbar, this.element1bar, this.element2bar, this.element3bar, this.element4bar, this.element5bar, this.element6bar, this.element7bar, this.element8bar, this.element9bar, this.elementdoughnut, this.element1doughnut, this.element2doughnut, this.element3doughnut, this.element4doughnut, this.element5doughnut, this.element6doughnut, this.element7doughnut, this.element8doughnut, this.element9doughnut, this.elementradar, this.element1radar, this.element2radar, this.element3radar, this.element4radar, this.element5radar, this.element6radar, this.element7radar, this.element8radar, this.element9radar, this);
            if (t && r != __p.prototype.l(_pcnst().lp)) {
                var o = String(r).toLowerCase();
                return document.getElementById(o)
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
            var X = this._p_(t),
                e = this.getHTMLElement(),
                O = this.x,
                i = this.x + ".php",
                l = O.split("-"),
                M = l.slice(2, 3),
                z = (l.slice(2, 3), !1);
            "true" != X.stacked && 1 != X.stacked || (z = !0);
            var H = !0;
            if ("false" != X.tooltips && 0 != X.tooltips || (H = !1), String(X.params).split("@").slice(1, 2) == O) var n = String(X.params).split("@").slice(0, 1);
            e.createdCallback = function() {
                var t = '<div class="chartWrapper" style="position:relative">';
                t += '<div id="div_' + M + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="div_chart_' + M + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + M + '" style="background:' + X.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(X.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t
            };
            var r = 0,
                o = [];
            if (null != [] && "null" != n)
                for (var a = (String(n).match(/AND/g) || []).length, s = String(n).split("AND"), d = 0; d <= a; d++) {
                    var c = String(s.slice(d, d + 1)).split(":"),
                        u = new Function(c.slice(1, 2));
                    if ("null" != String(c.slice(0, 1)).replace(/\s+/g, "")) try {
                        o[String(c.slice(0, 1)).replace(/\s+/g, "")] = String(u()).split(",")
                    } catch (t) {
                        r = 1, o[String(c.slice(0, 1)).replace(/\s+/g, "")] = ""
                    }
                }
            0 == r && this.Post(i, o, function(a) {
                var t = new Array,
                    e = new Array;
                t[0] = new Array, e[0] = new Array;
                new Array;
                var i = String(X.dataLabel).split(","),
                    l = String(X.dataLabel2).split(",");
                if ("bar" == X.chartType) {
                    for (var s = 1, n = 0; n <= i.length + 1; n++) "data" != i[n] && (t[s] = new Array, s++);
                    if ("data" != l[0])
                        for (s = 0, n = 0; n <= l.length; n++) e[s] = new Array, s++
                }
                var r = new Array,
                    o = new Array,
                    d = new Array,
                    c = (new Array, "");
                for (n = 0; n < a.length; n++) {
                    if (r[n] = a[n][0], "true" == X.showDay) {
                        var u = String(a[n][0]).split("-"),
                            p = "20" + u.slice(0, 1),
                            h = u.slice(1, 2),
                            g = u.slice(2, 3),
                            m = new Date(p + "/" + h + "/" + g);
                        if (0 == m.getDay()) c = "日";
                        if (1 == m.getDay()) c = "月";
                        if (2 == m.getDay()) c = "火";
                        if (3 == m.getDay()) c = "水";
                        if (4 == m.getDay()) c = "木";
                        if (5 == m.getDay()) c = "金";
                        if (6 == m.getDay()) c = "土";
                        r[n] = a[n][0] + " (" + c + ")"
                    }
                    if ("bar" == X.chartType) {
                        var f = 0,
                            b = [],
                            y = b[0] = 0;
                        for (s = 1; s <= i.length; s++) try {
                            "data" != i[s] && (t[y].push(a[n][s]), 1 == z ? f += parseFloat(a[n][s]) : (b[s] = 0) < parseFloat(a[n][s]) && "undefined" != a[n][s] && (b[s] = parseFloat(a[n][s])), y++)
                        } catch (t) {}
                        if (t[y].push(f), o[n] = 1 == z ? f : maxArray(b), "data" != l[0]) {
                            var v = 0,
                                x = [],
                                w = x[0] = 0;
                            for (s = 0; s < l.length; s++)
                                if ("undefined" != a[n][l[s]] && null != a[n][l[s]]) try {
                                    e[w].push(a[n][l[s]]), 1 == z ? v += parseFloat(a[n][l[s]]) : (v[s] = 0) < parseFloat(a[n][l[s]]) && (x[s] = parseFloat(a[n][l[s]])), w++
                                } catch (t) {}
                                d[n] = 1 == z ? v : maxArray(x)
                        }
                        f
                    } else t[0].push(a[n][1]), o[n] = a[n][1], a[n][1]
                }
                var A = new Array,
                    k = (s = 0, !1);
                if ("bar" == X.chartType) {
                    if ("data" != l[0])
                        for (n = 0; n < l.length; n++) A[s] = {
                            type: "line",
                            label: l[n],
                            radius: X.pointRadius[n],
                            backgroundColor: X.pointColorIndex[n],
                            pointStyle: X.pointStyle[n],
                            borderDash: [X.pointBorderDash[n]],
                            borderColor: X.pointBorderColorIndex[n],
                            borderWidth: X.pointBorderWidth[n],
                            yAxisID: "y-axis-2",
                            fill: !1,
                            data: e[n]
                        }, k = !0, s++;
                    for (n = 0; n < i.length; n++) "data" != i[n] && (A[s] = {
                        type: "bar",
                        label: i[n],
                        backgroundColor: X.colorIndex[n],
                        borderColor: "#444",
                        borderWidth: 1,
                        data: t[n]
                    }, s++);
                    A[s] = {
                        type: "line",
                        label: "",
                        borderColor: "#fff",
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        borderColor: "transparent",
                        fill: !1,
                        data: t[y]
                    }
                }
                if ("true" == X.legendDisplay) {
                    var S = "bottom";
                    null != X.legendPosition && (S = X.legendPosition);
                    var _ = {
                        position: S,
                        display: !0,
                        labels: {
                            usePointStyle: !0
                        }
                    }
                } else _ = {
                    position: "bottom",
                    display: !1
                };
                if ("bar" == X.chartType) {
                    var C = 1.2;
                    "" != X.label2String && (C = 2);
                    var I = [{
                            type: "linear",
                            position: "left",
                            id: "y-axis-1",
                            stacked: z,
                            ticks: {
                                callback: function(t, e, i) {
                                    return 999 < parseFloat(t) || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                },
                                beginAtZero: !0,
                                max: maxArray(o) * C,
                                min: 0,
                                fontSize: X.yAxesFontSize
                            },
                            scaleLabel: {
                                display: !0,
                                labelString: X.labelString,
                                fontSize: X.labelFontSize
                            }
                        }, {
                            display: k,
                            position: "right",
                            id: "y-axis-2",
                            gridLines: {
                                drawOnChartArea: !1
                            },
                            ticks: {
                                callback: function(t, e, i) {
                                    return 999 < parseFloat(t) || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                },
                                beginAtZero: !0,
                                fontSize: X.y2AxesFontSize,
                                beginAtZero: !1,
                                min: -maxArray(d)
                            },
                            scaleLabel: {
                                display: !0,
                                labelString: X.label2String,
                                fontSize: X.label2FontSize
                            }
                        }],
                        T = {
                            duration: 500,
                            easing: "easeOutQuart",
                            onComplete: function() {
                                var r = this.chart.ctx,
                                    t = this.scales["y-axis-1"].width - 10,
                                    e = this.scales["y-axis-1"].height + this.scales["y-axis-1"].top + 10,
                                    i = document.getElementById("yAxis_" + M).getContext("2d");
                                i.canvas.width = t, i.drawImage(this.chart.canvas, 0, 0, t, e, 0, 0, t, e), r.font = Chart.helpers.fontString(X.dataFontSize, "normal", "Arial"), r.textAlign = "center", r.textBaseline = "bottom";
                                var o = 0;
                                this.data.datasets.forEach(function(t) {
                                    if (o == s && 1 == z)
                                        for (var e = 0; e < t.data.length; e++) {
                                            var i = t._meta[Object.keys(t._meta)[0]].data[e]._model,
                                                l = t._meta[Object.keys(t._meta)[0]].data[e]._yScale.maxHeight;
                                            r.fillStyle = "#444";
                                            var n = i.y - 5;.93 <= (l - i.y) / l && (n = i.y + 14), a.length < 31 && r.fillText(pims().Comma(parseFloat(t.data[e])), i.x, n)
                                        }
                                    o++
                                })
                            }
                        }
                } else I = [], T = {
                    duration: 500,
                    easing: "easeOutQuart",
                    onComplete: function() {
                        var l = this.chart.ctx;
                        l.font = Chart.helpers.fontString(11, "normal", "Arial"), l.textAlign = "center", l.textBaseline = "bottom", this.data.datasets.forEach(function(t) {
                            for (var e = 0; e < t.data.length; e++) {
                                var i = t._meta[Object.keys(t._meta)[0]].data[e]._model;
                                t._meta[Object.keys(t._meta)[0]].data[e]._yScale.maxHeight;
                                l.fillStyle = "#444", l.fillText(pims().Comma(parseFloat(t.data[e])), i.x + 20, i.y + 5)
                            }
                        })
                    }
                };
                "true" == X.display ? X.display = !0 : X.display = !1;
                var E = {
                        hover: {
                            animationDuration: 1,
                            onHover: function(t, e) {
                                var i = this.getElementAtEvent(t);
                                if (i.length) {
                                    t.target.style.cursor = "pointer";
                                    try {
                                        var l = i[0]._chart.data,
                                            n = i[0]._datasetIndex,
                                            r = l.datasets[n].label,
                                            o = l.datasets[n].data[i[0]._index];
                                        t = e[0];
                                        var a = this.data.labels[t._index];
                                        X.hover(O, r, o, a)
                                    } catch (t) {
                                        X.hover(O, "-")
                                    }
                                } else t.target.style.cursor = "default", X.hover(O, "-")
                            }
                        },
                        onClick: function(t, e) {
                            var i = this.getElementAtEvent(t);
                            if (i.length) try {
                                var l = i[0]._chart.data,
                                    n = i[0]._datasetIndex,
                                    r = l.datasets[n].label,
                                    o = l.datasets[n].data[i[0]._index];
                                t = e[0];
                                var a = this.data.labels[t._index];
                                X.click(O, r, o, a)
                            } catch (t) {
                                X.click(O, "-")
                            } else X.click(O, "-")
                        },
                        title: {
                            display: X.display,
                            text: X.title,
                            fontSize: X.titleFontSize
                        },
                        legend: _,
                        scales: {
                            xAxes: [{
                                stacked: z,
                                ticks: {
                                    autoSkip: !1,
                                    fontSize: X.xAxesFontSize,
                                    maxRotation: X.xlabelAngle,
                                    minRotation: X.xlabelAngle
                                }
                            }],
                            yAxes: I
                        },
                        tooltips: {
                            enabled: H
                        },
                        responsive: !0,
                        maintainAspectRatio: !1,
                        animation: T
                    },
                    B = "<canvas id='canvas-" + M + "' style='background:" + X.background + "'></canvas>",
                    F = document.getElementById("div_chart_" + M);
                F.innerHTML = "", $("#div_" + M).show().css({
                    width: X.width + "px",
                    height: X.height + "px",
                    border: X.border
                });
                var L = "100%";
                50 < a.length && (L = "130%"), 100 < a.length && (L = "150%"), 150 < a.length && (L = "180%"), 200 < a.length && (L = "250%"), 250 < a.length && (L = "300%"), 300 < a.length && (L = "350%"), 350 < a.length && (L = "400%"), 400 < a.length && (L = "500%"), $("#div_chart_" + M).html(B).css({
                    width: L
                });
                var N = document.getElementById("canvas-" + M);
                try {
                    var R = X.name;
                    null == R && (R = "");
                    var D = document.createElement("span");
                    D.innerText = R, D.style.fontSize = X.nameFontSize, F.appendChild(D), $("#div_" + M + " span").css({
                        position: "absolute",
                        left: X.width / 6 + "px",
                        top: 2 * -X.fontSize + "px",
                        fontSize: X.nameFontSize + "px",
                        textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                    })
                } catch (t) {}
                if ("bar" == X.chartType) new Chart(N, {
                    type: X.chartType,
                    options: E,
                    data: {
                        labels: r,
                        datasets: A
                    }
                });
                else new Chart(N, {
                    type: "horizontalBar",
                    options: E,
                    data: {
                        labels: r,
                        datasets: [{
                            label: i[0],
                            backgroundColor: X.colorIndex[0],
                            borderColor: "black",
                            borderWidth: .8,
                            data: t[0]
                        }]
                    }
                });
                try {
                    X.callback()
                } catch (t) {}
            });
            try {
                pimsElement = document.registerPotato(O, {
                    prototype: e
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(O, {
                        prototype: e,
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
                g = this.x,
                m = this._p_(t),
                f = (g.split("-"), m.id),
                b = [];
            if (String(m.field).split("@").slice(1, 2) == g) var y = String(m.field).split("@").slice(0, 1);
            if (String(m.fieldOther).split("@").slice(1, 2) == g) var v = String(m.fieldOther).split("@").slice(0, 1);
            if (String(m.params).split("@").slice(1, 2) == g) var x = String(m.params).split("@").slice(0, 1);
            if (String(m.where).split("@").slice(1, 2) == g) var w = String(m.where).split("@").slice(0, 1);
            e.createdCallback = function() {
                this.id = f;
                var t = '<table style="font-weight:' + m.fontWeight + ";font-size:" + m.fontSize + "px;padding:" + m.paddingTop + "px 1px 1px " + m.paddingLeft + 'px"><tr>';
                "nil 0 0" != m.image && (t += '<td><img id="img_' + f + '" src="' + String(m.image).split(" ").slice(0, 1) + '" style="width:' + String(m.image).split(" ").slice(1, 2) + "px;height:" + String(m.image).split(" ").slice(2, 3) + 'px"/></td>'), t += '<td style="vertical-align:middle;text-align:center">' + m.value + "</td>", t += "</tr></table>", this.innerHTML = t, $("#" + f).css({
                    background: m.background,
                    border: m.border,
                    borderLeft: "1px solid buttonshadow",
                    borderRight: "2px solid black",
                    borderTop: "1px solid buttonshadow",
                    borderBottom: "2px solid black",
                    borderRadius: m.borderRadius + "px",
                    boxShadow: m.boxShadow,
                    color: m.color,
                    cursor: "pointer",
                    display: m.display,
                    fontFamily: m.fontFamily,
                    fontWeight: m.fontWeight,
                    fontSize: m.fontSize + "px",
                    height: m.height + "px",
                    left: m.left + "px",
                    margin: m.margin,
                    padding: m.padding,
                    position: m.position,
                    textAlign: m.textAlign,
                    top: m.top + "px",
                    width: m.width + "px"
                }).addClass("pimsButton").mousemove(function() {
                    "null" != m.hoverBgColor && $(this).css("background", m.hoverBgColor), $(this).css("color", m.hoverColor), "" != m.hoverText && $("#" + m.hoverId).html(m.hoverText).show().css({
                        fontSize: "15px",
                        fontFamily: "Arial",
                        padding: "3px 3px 3px 3px",
                        height: m.hoverHeight + "px",
                        width: m.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20,
                        borderRadius: "3px"
                    })
                }).mouseout(function() {
                    "null" != m.hoverBgColor && $(this).css("background", m.background), $(this).css("color", m.i), $("#" + m.hoverId).hide().html("")
                }).click(function() {
                    pims.Query = 100, pims.Submit = 100;
                    for (var t = 0; t < _potatoId.length; t++)
                        if (f == String(_potatoId[t])) {
                            var e = String(_potatoBindId[t]);
                            document.getElementById(e).innerText = m.value
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
                        m.click()
                    } catch (t) {}
                    if (null == y || "null" == y || 1 != pims.Query && 1 != pims.Submit) {
                        if ("null" == y && (1 == pims.Query || 1 == pims.Submit)) {
                            i = g + ".php", l = [];
                            if (null != b && "null" != x)
                                for (d = (String(x).match(/AND/g) || []).length, c = String(x).split("AND"), u = 0; u <= d; u++) {
                                    p = String(c.slice(u, u + 1)).split(":"), h = new Function(p.slice(1, 2));
                                    "null" != String(p.slice(0, 1)).replace(/\s+/g, "") && (l[String(p.slice(0, 1)).replace(/\s+/g, "")] = h())
                                }
                            pimsData = [], _pimS.prototype._rp_(i, l, function(t) {
                                pims.data = JSON.parse(t), m.callback()
                            })
                        }
                    } else {
                        pims.Query = 0, pims.Submit = 0;
                        var i = f + ".php",
                            l = [];
                        if (null != w && "null" != w) {
                            var n = X.prototype.getIdClass(String(w));
                            try {
                                this.index = n.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = n.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (var r = 0; r < n.length; r++) {
                                var o = String(n[r].id).split("-").slice(2, 3);
                                l[n[r].field] = pims(o).value()
                            }
                        }
                        var a = "",
                            s = "";
                        if (null != y && "null" != y) {
                            n = X.prototype.getIdClass(String(y));
                            try {
                                this.index = n.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = n.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (r = 0; r < n.length; r++) {
                                o = String(n[r].id).split("-").slice(2, 3);
                                r + 1 < n.length ? (a += String(n[r].field).replace(/\s+/g, "") + ",", s += "'" + pims(o).value() + "',") : (a += String(n[r].field).replace(/\s+/g, ""), s += "'" + pims(o).value() + "'")
                            }
                        }
                        if ("null" != v)
                            for (var d = (String(v).match(/AND/g) || []).length, c = String(v).split("AND"), u = 0; u <= d; u++) {
                                var p = String(c.slice(u, u + 1)).split(":"),
                                    h = new Function(p.slice(1, 2));
                                "null" != String(p.slice(0, 1)).replace(/\s+/g, "") && (u < d ? 0 == u ? (a += "," + String(p.slice(0, 1)).replace(/\s+/g, "") + ",", s += ",'" + h() + "',") : (a += String(p.slice(0, 1)).replace(/\s+/g, "") + ",", s += "'" + h() + "',") : 0 == d ? (a += String(p.slice(0, 1)).replace(/\s+/g, "") + ",", s += "'" + h() + "',") : (a += String(p.slice(0, 1)).replace(/\s+/g, ""), s += "'" + h() + "'"))
                            }
                        if (l.fields = a, l.fieldsValue = s, "null" != x && null != b)
                            for (var d = (String(x).match(/AND/g) || []).length, c = String(x).split("AND"), u = 0; u <= d; u++) {
                                var p = String(c.slice(u, u + 1)).split(":"),
                                    h = new Function(p.slice(1, 2));
                                "null" != String(p.slice(0, 1)).replace(/\s+/g, "") && (l[String(p.slice(0, 1)).replace(/\s+/g, "")] = h())
                            }
                        pims.data = [], _pimS.prototype._rp_(i, l, function(t) {
                            pims.data = JSON.parse(t);
                            try {
                                m.callback()
                            } catch (t) {}
                        })
                    }
                }), "none" == m.display ? $("#" + f).hide() : $("#" + f).show()
            };
            try {
                pimsElement = document.registerPotato(g, {
                    prototype: e
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(g, {
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
                if ("undefined" != pims.value && null != pims.value && "0" != pims.value && 0 != e.value) {
                    try {
                        document.getElementById(keyID).style.display = "none", $("._min_cls").attr("disabled", !0), pims.value = e.value
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
            x = (t += "").split("."), x1 = x[0], x2 = 1 < x.length ? "." + x[1] : "";
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
                n = this.x,
                r = this._p_(t);
            r.id = n, e.createdCallback = function() {
                for (var t = (n.match(/-/g) || []).length, e = n.split("-"), i = e.slice(2, 3), l = 3; l <= t; l++) i = i + "_" + e.slice(l, l + 1);
                this.name = i, this.is = n, this.innerHTML = '<input type="text" id="' + n + '"> ', $("#" + n).css({
                    width: r.width + "px",
                    height: r.height + "px",
                    color: r.color,
                    background: r.background,
                    boxShadow: r.boxShadow,
                    display: r.display,
                    position: r.position,
                    left: r.left + "px",
                    top: r.top + "px",
                    fontFamily: r.fontFamily,
                    fontWeight: r.fontWeight,
                    fontSize: r.fontSize + "px",
                    textAlign: r.textAlign,
                    padding: r.padding,
                    border: r.border,
                    borderRadius: r.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", r.value).mousemove(function() {
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
                }).change(function() {
                    try {
                        r.change()
                    } catch (t) {}
                }).click(function() {
                    try {
                        pimsListObject.style.display = "none"
                    } catch (t) {}
                    try {
                        r.click()
                    } catch (t) {}
                }).datepicker({
                    dateFormat: r.format,
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
                pimsElement = document.registerPotato(n, {
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
            var u = this._p_(t),
                e = this.getHTMLElement(),
                p = this.x,
                i = this.x + ".php",
                g = this.x,
                l = p.split("-"),
                m = l.slice(2, 3);
            l.slice(2, 3);
            if (String(u.params).split("@").slice(1, 2) == p) var n = String(u.params).split("@").slice(0, 1);
            e.createdCallback = function() {
                this.innerHTML = '<div id="' + g + '"></div> '
            };
            try {
                pimsElement = document.registerPotato(p, {
                    prototype: e
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(p, {
                        prototype: e,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
            var r = [];
            if (null != [] && "null" != n)
                for (var o = (String(n).match(/AND/g) || []).length, a = String(n).split("AND"), s = 0; s <= o; s++) {
                    var d = String(a.slice(s, s + 1)).split(":"),
                        c = new Function(d.slice(1, 2));
                    "null" != String(d.slice(0, 1)).replace(/\s+/g, "") && (r[String(d.slice(0, 1)).replace(/\s+/g, "")] = String(c()).split(","))
                }
            pims().Post(i, r, function(h) {
                var t = new Array;
                t[0] = new Array, t[1] = new Array, t[2] = new Array, t[3] = new Array;
                for (var e = 0; e < h.length; e++)
                    for (var i = 0; i < t.length; i++) t[i][e] = h[e][i];
                var l = document.getElementById(g);
                l.innerHTML = "", $("#" + g).append('<canvas id="canvas-' + m + '" >読み込み中．．．</canvas>');
                var n = document.getElementById("canvas-" + m);
                if ($("#" + g).css({
                        width: u.width + "px",
                        height: u.height + "px",
                        border: u.border,
                        borderRadius: u.borderRadius,
                        position: u.position,
                        top: u.top + "px",
                        left: u.left + "px"
                    }), "null" != u.imageDir) {
                    var r = document.createElement("div");
                    r.setAttribute("id", "note-doughnut-" + m), l.appendChild(r), $("#note-doughnut-" + m).css({
                        fontSize: u.fontSize + "px",
                        position: "relative",
                        left: u.width / 10 + "px",
                        width: .8 * u.width + "px",
                        padding: "5px 5px 5px 5px",
                        textAlign: "center"
                    });
                    var o = document.createElement("img");
                    o.setAttribute("id", "img-doughnut-" + m), o.setAttribute("onerror", "this.style.display='none'"), l.appendChild(o), $("#img-doughnut-" + m).css({
                        display: "block",
                        border: "0px",
                        borderRadius: u.height / 2 + "px",
                        background: "transparent",
                        height: u.height / 2 + "px",
                        width: u.height / 2 + "px",
                        position: "relative",
                        left: u.width / 2 - u.height / 2 / 2 + "px",
                        top: -u.height / 2 - u.height / 2 / 2 - 20 - u.fontSize + "px"
                    });
                    var a = t[3][0];
                    if ($("#note-doughnut-" + m).show().html(a).css("border", "3px solid " + t[2][0]), -1 != String(h[0][0]).indexOf("-")) var s = String(t[0][0]).split("-"),
                        d = u.imageDir + s[0] + "-" + String(s[1]).substring(0, 1) + ".jpg";
                    else d = u.imageDir + t[0][0] + ".jpg";
                    document.getElementById("img-doughnut-" + m).src = d, document.getElementById("img-doughnut-" + m).style.border = "5px solid " + t[2][0]
                }
                u.targetIndex = 0, u.targetColor = t[2][0];
                var c = {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legend: {
                        position: "top",
                        display: !1
                    },
                    title: {
                        display: u.display,
                        text: u.title,
                        fontSize: u.titleFontSize
                    },
                    animation: {
                        duration: 500,
                        easing: "easeOutQuart",
                        onComplete: function() {
                            var p = this.chart.ctx;
                            p.font = Chart.helpers.fontString(u.dataFontSize, "normal", "Arial"), p.textAlign = "center", p.textBaseline = "bottom", this.data.datasets.forEach(function(t) {
                                for (var e = 0; e < t.data.length; e++) {
                                    var i = t._meta[Object.keys(t._meta)[0]],
                                        l = i.data[e]._model,
                                        n = i.total,
                                        r = l.innerRadius + (l.outerRadius - l.innerRadius) / 2,
                                        o = l.startAngle,
                                        a = o + (l.endAngle - o) / 2,
                                        s = r * Math.cos(a),
                                        d = r * Math.sin(a);
                                    p.fillStyle = "#000";
                                    var c = String(Math.round(t.data[e] / n * 100)) + "%";
                                    if (e < t.data.length - 1) {
                                        var u = l.x + s + 70;
                                        0 < d && s < 0 && (u = l.x + s - 50), p.fillText(h[e][0] + ": " + h[e][1] + ", " + c, u, l.y + d + 8)
                                    }
                                }
                                c = String(Math.round(t.data[t.data.length - 1] / n * 100)) + "%";
                                p.fillText(h[t.data.length - 1][0] + ": " + h[t.data.length - 1][1] + ", " + c, l.x + s, l.y + 2 * d)
                            })
                        }
                    },
                    hover: {
                        onHover: function(t) {
                            this.getElementAtEvent(t).length ? t.target.style.cursor = "pointer" : t.target.style.cursor = "default", "null" != u.imageDir && (pims("#img-doughnut-" + m).style.display = "block")
                        }
                    },
                    onClick: function(t, e) {
                        u.targetIndex = e[0]._index, u.targetColor = e[0]._model.backgroundColor, u.click(p, e[0]._chart.data.labels[e[0]._index], e[0]._model.backgroundColor)
                    },
                    tooltips: {
                        enabled: !1,
                        backgroundColor: "yellow",
                        bodyFontColor: "black",
                        bodyFontSize: 12,
                        borderColor: "#000",
                        borderWidth: 1,
                        custom: function(t) {
                            if (0 < t.opacity) {
                                if ("null" != u.imageDir) {
                                    var e = this._data.datasets[0].other[t.dataPoints[0].index];
                                    if ($("#note-doughnut-" + m).show().html(e).css("border", "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var i = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                        l = u.imageDir + i[0] + "-" + String(i[1]).substring(0, 1) + ".jpg";
                                    else l = u.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                    document.getElementById("img-doughnut-" + m).src = l, document.getElementById("img-doughnut-" + m).style.display = "block", document.getElementById("img-doughnut-" + m).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                }
                            } else if ("null" != u.imageDir) {
                                e = this._data.datasets[0].other[u.targetIndex] + " ,  ";
                                if ($("#note-doughnut-" + m).show().html(e).css("border", "3px solid " + u.targetColor), -1 != String(this._data.labels[u.targetIndex]).indexOf("-")) i = String(this._data.labels[u.targetIndex]).split("-"), l = u.imageDir + i[0] + "-" + String(i[1]).substring(0, 1) + ".jpg";
                                else l = u.imageDir + this._data.labels[u.targetIndex] + ".jpg";
                                document.getElementById("img-doughnut-" + m).src = l, document.getElementById("img-doughnut-" + m).style.display = "block", document.getElementById("img-doughnut-" + m).style.border = "5px solid " + u.targetColor
                            }
                        }
                    }
                };
                new Chart(n, {
                    type: "doughnut",
                    data: {
                        labels: t[0],
                        datasets: [{
                            label: "不適合品番",
                            backgroundColor: t[2],
                            borderColor: "grey",
                            borderWidth: .5,
                            data: t[1],
                            other: t[3]
                        }]
                    },
                    showDatapoints: !0,
                    options: c
                });
                try {
                    u.callback()
                } catch (t) {}
            })
        },
        dummy: function() {
            return null
        },
        _ec_: function(t) {
            var r = this._p_(t),
                o = r.editWidth,
                e = this.x;
            r.id = e;
            var a = this.e,
                s = new Array;
            s = r.targetCol;
            var d = r.idCol,
                c = "-";

            function i() {
                _pimS.nodevalue = __p.prototype.l(_pcnst().lp);
                var t = "-";
                try {
                    t = a.rows[_pimS.rowId].cells[r.matchCol].innerText
                } catch (t) {}
                if (!("-" != r.matchCol && t != r.matchValue || $(this).parent().children().index(this) != s && -1 == s.indexOf($(this).parent().children().index(this)) && "any" != s)) {
                    var e = 0,
                        i = this;
                    try {
                        i.firstChild.value
                    } catch (t) {
                        i.innerText = " "
                    }
                    if ("INPUT" == i.firstChild.nodeName) {
                        i = this;
                        var l = document.createTextNode(i.firstChild.value);
                        i.replaceChild(l, i.firstChild), e = 1, pims.trigger = 0, _pimS.nodevalue = i.firstChild.nodeValue, r.callback(a.rows[_pimS.rowId].cells[d].innerText, i.firstChild.nodeValue, _pimS.colId, c)
                    }
                    if (1 != e && "INPUT" != i.firstChild.nodeName && "IMG" != i.firstChild.nodeName) {
                        var n = document.createElement("input");
                        n.select(), n.value = i.firstChild.nodeValue, n.setAttribute("autocomplete", "off"), n.style.width = o + "px", n.style.height = "25px", n.style.fontSize = "15px", n.style.fontWeight = "bold", n.style.background = "rgb(255,244,255)", "undefined" != i.firstChild.nodeValue && (i.replaceChild(n, i.firstChild), i.firstChild.select(), i.firstChild.focus())
                    }
                }
            }
            $("#" + e + " td").click(function() {
                _pimS.colId = $(this).parent().children().index(this), _pimS.rowId = $(this).parent().parent().children().index(this.parentNode), 1 != pims.trigger && (c = a.rows[_pimS.rowId].cells[_pimS.colId].innerText, pims.oldValue = a.rows[_pimS.rowId].cells[_pimS.colId].innerText, pims.trigger = 1)
            });
            for (var l = document.getElementById(e).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onkeyup = function(t) {}, "dblclick" == r.trigger ? l[n].ondblclick = i : "click" == r.trigger ? l[n].onclick = i : l[n].ondblclick = i, l[n].onmousemove = function() {}
        },
        _ect_: function(t) {
            var s = this._p_(t);
            pimsParameters = s;
            var e = this.x,
                d = e,
                c = new Array;

            function i() {
                var t = "-";
                try {
                    t = d.rows[_pimS.rowId].cells[s.matchCol].innerText
                } catch (t) {}
                try {
                    if (!("-" != s.matchCol && t != s.matchValue || $(this).parent().children().index(this) != c && -1 == c.indexOf($(this).parent().children().index(this)) && "any" != c)) {
                        var e = 0,
                            i = this;
                        try {
                            i.firstChild.value
                        } catch (t) {
                            i.innerText = " "
                        }
                        if (pimsThis = this, "INPUT" == i.firstChild.nodeName) {
                            i = this;
                            u = document.createTextNode(i.firstChild.value), i.replaceChild(u, i.firstChild), e = 1, $("#keypadtable").hide()
                        }
                        if (1 != e && "INPUT" != i.firstChild.nodeName && "IMG" != i.firstChild.nodeName) {
                            var l = document.createElement("input");
                            l.select();
                            var n = i.firstChild.nodeValue;
                            "null" != n && "undefined" != n && null != n && null != n || (n = i.firstChild.innerText), l.value = n, l.setAttribute("autocomplete", "off"), l.style.width = s.editWidth + "px", l.style.height = "25px", l.style.fontSize = "15px", l.style.fontWeight = "bold", l.style.background = "rgb(255,244,255)", "undefined" != i.firstChild.nodeValue && (i.replaceChild(l, i.firstChild), i.firstChild.select(), i.firstChild.focus());
                            var r = document.createElement("div");
                            r.innerHTML = '<div id="keypadtable"></div>', document.body.appendChild(r);
                            var o = event.clientY + 20;
                            300 < o && (o = event.clientY - 220);
                            var a = event.clientX;
                            900 < a && (a = event.clientX - 100), $("#keypadtable").load(s.htm).css({
                                width: "200px",
                                height: "150px",
                                margin: s.marginKey,
                                display: "block",
                                position: "absolute",
                                top: o,
                                left: a,
                                zIndex: 2e3
                            }), _value = l
                        }
                    }
                } catch (t) {}
            }
            c = s.targetCol;
            for (var u = document.getElementById(e), l = u.getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onkeyup = function(t) {}, "dblclick" == s.trigger ? l[n].ondblclick = i : "click" == s.trigger ? l[n].onclick = i : l[n].ondblclick = i, l[n].onmousemove = function() {}
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
            e = e || "-", "today" == t && (t = this.year() + "-" + this.month() + "-" + this.day());
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
            return 0 < l.length && (t += '<param name="flashvars" value="' + l + '" />'), t += "</object>"
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
            "" == t && (e.value = ""), "<-" == t && (e.value = e.value.substring(0, parseFloat(e.value.length) - 1)), "<-" != t && "" != t && (e.value += t), e.value != "0" + t && e.value != "" + t && e.value != "Keypad" + t && e.value != "Keyboard" + t && e.value != "Timepad" + t || (e.value = t), "." == t && "." == e.value && (e.value = "0."), "" == e.value && (e.value = "0"), "CE" == t && (e.value = "0"), pimsTargetId = e.value, pims.value = e.value
        },
        getMinute: function(t) {
            var e = _value;
            "00" == String(e.value.split(":").slice(1, 2)) && "<-" != t && (e.value = e.value.split(":").slice(0, 1) + ":" + t), "00" != String(e.value.split(":").slice(1, 2)) && "<-" != t && (e.value = e.value.split(":").slice(0, 1) + ":" + String(e.value.split(":").slice(1, 2)) + t), "<-" == t && (String(e.value.split(":").slice(1, 2)), e.value = e.value.substring(0, parseFloat(e.value.length) - 1)), "59" < parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":59"), "6" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5"), "7" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5"), "8" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5"), "9" == parseFloat(e.value.split(":").slice(1, 2)) && (e.value = e.value.split(":").slice(0, 1) + ":5")
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
                r = this.x,
                o = this._p_(t);
            o.id = r, e.createdCallback = function() {
                for (var t = (r.match(/-/g) || []).length, e = r.split("-"), i = e.slice(2, 3), l = 3; l <= t; l++) i = i + "_" + e.slice(l, l + 1);
                this.name = i;
                var n = '<div id="div_' + (this.is = r) + '"> ';
                n += '<input type="text" id="' + r + '"> ', n += '<div class="keypad" id="keypad-' + r + '"></div> ', n += "</div> ", this.innerHTML = n, _fieldboard = document.getElementById(r), $("#div_" + r).css({
                    display: o.display,
                    position: o.position,
                    left: o.left + "px",
                    top: o.top + "px"
                }), $("#" + r).css({
                    width: o.width + "px",
                    height: o.height + "px",
                    color: o.color,
                    display: o.display,
                    background: o.background,
                    boxShadow: o.boxShadow,
                    fontFamily: o.fontFamily,
                    fontWeight: o.fontWeight,
                    fontSize: o.fontSize + "px",
                    textAlign: o.textAlign,
                    padding: o.padding,
                    border: o.border,
                    borderRadius: o.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", o.value).mousemove(function() {
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
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + r, $(".keypad").hide(), $("#keypad-" + r).show(), $("#KeyBoard").show(), $("#keypad-" + r).css({
                        position: "absolute",
                        top: event.clientY + 20 + o.topKey,
                        left: event.clientX + o.leftKey
                    }), _fieldboard = document.getElementById(r)
                }), $("#keypad-" + r).load("config/keyboard.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: o.marginKey,
                    display: o.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(r, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _kb_: function(t) {
            var e = this.getHTMLElement(),
                i = this.x,
                r = this._p_(t),
                o = r.id;
            e.createdCallback = function() {
                this.id = o + "_", X.prototype.getAttribute(this, o).index, X.prototype.getAttribute(this, o).field;
                var t = '<div id="div-' + (this.pims = o) + '"> ';
                t += '<input type="text" id="' + o + '"> ', t += '<div class="keypad" id="keypad-' + o + '"></div> ', t += "</div> ", this.innerHTML = t, _value = document.getElementById(o), pims("#div-" + o).style.display = r.display, pims("#div-" + o).style.position = r.position, pims("#div-" + o).style.left = r.left + "px", pims("#div-" + o).style.top = r.top + "px", pims("#" + o).style.top = r.top + "px", $("#div-" + o).css({
                    display: r.display,
                    position: r.position,
                    left: r.left + "px",
                    top: r.top + "px"
                }), $("#" + o).css({
                    width: r.width + "px",
                    height: r.height + "px",
                    color: r.color,
                    display: r.display,
                    background: r.background,
                    boxShadow: r.boxShadow,
                    fontFamily: r.fontFamily,
                    fontWeight: r.fontWeight,
                    fontSize: r.fontSize + "px",
                    textAlign: r.textAlign,
                    padding: r.padding,
                    border: r.border,
                    borderRadius: r.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", r.value).mousemove(function() {
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
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + o, $(".keypad").hide(), $("#keypad-" + o).show(), $("#KeyBoard").show();
                    var i = document.documentElement,
                        l = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                        n = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                    $("#keypad-" + o).css({
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(r.topKey) + parseFloat(n) + "px",
                        left: parseFloat(event.clientX) + parseFloat(r.leftKey) - parseFloat(l) + "px"
                    }), _fieldboard = document.getElementById(o);
                    try {
                        r.click()
                    } catch (t) {}
                }), $("#keypad-" + o).load(r.htm).click(function() {
                    try {
                        r.change(o)
                    } catch (t) {}
                }).css({
                    width: "200px",
                    height: "150px",
                    display: r.displayKey
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
                r = this.x,
                o = this._p_(t);
            o.id = r, e.createdCallback = function() {
                for (var t = (r.match(/-/g) || []).length, e = r.split("-"), i = e.slice(2, 3), l = 3; l <= t; l++) i = i + "_" + e.slice(l, l + 1);
                this.name = i;
                var n = '<div id="div_' + (this.is = r) + '"> ';
                n += '<input type="text" id="' + r + '"> ', n += '<div class="keypad" id="keypad-' + r + '"></div> ', n += "</div> ", this.innerHTML = n, _value = document.getElementById(r), $("#div_" + r).css({
                    display: o.display,
                    position: o.position,
                    left: o.left + "px",
                    top: o.top + "px"
                }), $("#" + r).css({
                    width: o.width + "px",
                    height: o.height + "px",
                    color: o.color,
                    display: o.display,
                    background: o.background,
                    boxShadow: o.boxShadow,
                    fontFamily: o.fontFamily,
                    fontWeight: o.fontWeight,
                    fontSize: o.fontSize + "px",
                    textAlign: o.textAlign,
                    padding: o.padding,
                    border: o.border,
                    borderRadius: o.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", o.value).mousemove(function() {
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
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + r, $(".keypad").hide(), $("#keypad-" + r).show(), $("#KeyPad").show(), $("#keypad-" + r).css({
                        position: "absolute",
                        top: event.clientY + 20 + o.topKey,
                        left: event.clientX + o.leftKey
                    }), _value = document.getElementById(r)
                }), $("#keypad-" + r).load("config/keypad.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: o.marginKey,
                    display: o.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(r, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _kp_: function(t) {
            var e = this.getHTMLElement(),
                o = this._p_(t),
                a = o.id,
                i = this.x;
            e.createdCallback = function() {
                this.id = o.id + "_", X.prototype.getAttribute(this, a).index, X.prototype.getAttribute(this, a).field;
                var t = '<div id="div-' + (this.pims = a) + '"> ';
                t += '<input type="text" id="' + a + '"> ', t += '<div class="keypad" id="keypad-' + a + '"></div> ', t += "</div> ", this.innerHTML = t, _value = document.getElementById(a), $("#div-" + a).css({
                    display: o.display,
                    position: o.position,
                    left: o.left + "px",
                    top: o.top + "px"
                }), $("#" + a).css({
                    width: o.width + "px",
                    height: o.height + "px",
                    color: o.color,
                    display: o.display,
                    background: o.background,
                    boxShadow: o.boxShadow,
                    fontFamily: o.fontFamily,
                    fontWeight: o.fontWeight,
                    fontSize: o.fontSize + "px",
                    textAlign: o.textAlign,
                    padding: o.padding,
                    border: o.border,
                    borderRadius: o.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", o.value).mousemove(function() {
                    "null" != o.hoverBgColor && "false" != o.hoverBgColor && ($(this).css("background", o.hoverBgColor), $(this).css("color", o.hoverColor), "" != o.hoverText && $("#" + o.hoverId).html(o.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: o.hoverHeight + "px",
                        width: o.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    }))
                }).mouseout(function() {
                    "null" != o.hoverBgColor && "false" != o.hoverBgColor && $(this).css("background", o.background), $(this).css("color", o.i), $("#" + o.hoverId).hide().html("")
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + a, $(".keypad").hide(), $("#keypad-" + a).show(), $("#KeyPad").show();
                    var i = document.documentElement,
                        l = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                        n = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                    if (0 <= parseFloat(o.topKey)) $("#keypad-" + a).css({
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(o.topKey) + parseFloat(n) + "px",
                        left: parseFloat(event.clientX) + parseFloat(o.leftKey) - parseFloat(l) + "px"
                    });
                    else {
                        var r = document.getElementById("keypad-" + a).offsetTop;
                        $("#keypad-" + a).css({
                            position: "absolute",
                            top: parseFloat(r) + "px"
                        })
                    }
                    _value = document.getElementById(a);
                    try {
                        o.click()
                    } catch (t) {}
                }), $("#keypad-" + a).load(o.htm).click(function() {
                    for (var t = 0; t < _potatoId.length; t++)
                        if (a == String(_potatoId[t])) {
                            var e = String(_potatoBindId[t]);
                            document.getElementById(e).innerText = document.getElementById(a).value
                        }
                    try {
                        o.change(a)
                    } catch (t) {}
                    try {
                        o.click(a)
                    } catch (t) {}
                }).css({
                    width: "200px",
                    height: "150px",
                    display: o.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(i, {
                    prototype: e
                })
            } catch (t) {}
        },
        List: function(o) {
            var t = this.getHTMLElement(),
                u = this.x,
                a = this._p_(o);
            a.id = u, t.createdCallback = function() {
                for (var t = (u.match(/-/g) || []).length, i = u.split("-"), l = i.slice(2, 3), r = 3; r <= t; r++) l = l + "_" + i.slice(r, r + 1);
                this.name = l, this.is = u, this.innerHTML = '<input type="text" id="' + u + '" class="' + a.className + '" > ', this.innerHTML += '<div id="pims-list-' + u + '" class="pims-list"> ', $("#" + u).css({
                    width: a.width + "px",
                    height: a.height + "px",
                    color: a.color,
                    background: a.background,
                    boxShadow: a.boxShadow,
                    display: a.display,
                    fontFamily: a.fontFamily,
                    fontWeight: a.fontWeight,
                    fontSize: a.fontSize + "px",
                    textAlign: a.textAlign,
                    padding: a.padding,
                    margin: a.margin,
                    border: a.border,
                    borderRadius: a.borderRadius + "px",
                    textTransform: a.textTransform,
                    position: a.position,
                    left: a.left + "px",
                    top: a.top + "px",
                    float: a.float,
                    cursor: "pointer"
                }).attr({
                    value: a.value,
                    type: a.type
                }).mousemove(function() {
                    "null" != a.hoverBgColor && $(this).css("background", a.hoverBgColor), $(this).css("color", a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: a.hoverHeight + "px",
                        width: a.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 20
                    })
                }).mouseout(function() {
                    "null" != a.hoverBgColor && $(this).css("background", a.background), $(this).css("color", a.i), $("#" + a.hoverId).hide().html("")
                }).keyup(function(t) {
                    try {
                        a.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        a.change()
                    } catch (t) {}
                }), pims("#" + u).CLICK(function(d) {
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
                    var c = _pimS.prototype._p_(o),
                        t = c.params;
                    if ("block" != document.getElementById("pims-list-" + u).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("pims-list-" + u).style.height == c.heightTable + "px") document.getElementById("pims-list-" + u).style.height = "0px";
                    else {
                        try {
                            pimsListObject.style.display = "none"
                        } catch (t) {}
                        $("#pims-list-" + u).css("display", "block"), _pimS.prototype._rp_(t.model, t, function(t) {
                            var i = JSON.parse(t),
                                l = "<table class='potato-list-table' id='potato-list-table-" + u + "' >",
                                r = 0;
                            for (e in l += "<tr>", i[0]) "" != i[0][e] ? l += "<th>" + i[0][e] + "</th>" : l += "<th style='display:none'>" + i[0][e] + "</th>", r++;
                            for (n in l += "</tr>", i)
                                if ("undefined" != i[n][0] && null != i[n][0] && 0 < n) {
                                    l += "<tr>";
                                    for (var o = 0; o < r; o++) "" != i[0][o] ? l += "<td>" + i[n][o] + "</td>" : l += "<td style='display:none'>" + i[n][o] + "</td>";
                                    l += "</tr>"
                                }
                            l += "</table>", document.getElementById("pims-list-" + u).style.height = "0px";
                            var a = d.clientY - c.height - 10 + "px";
                            0 != c.top && (a = c.top + c.height + 10 + "px");
                            var s = d.clientX - c.width / 2 + "px";
                            0 != c.left && (s = c.left + 5 + "px"), pimsListObject = document.getElementById("pims-list-" + u), $("#pims-list-" + u).html(l).show().css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: s,
                                top: a,
                                height: c.heightTable + "px",
                                width: c.widthTable + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                background: "transparent"
                            }), $("#potato-list-table-" + u + " td").css({
                                fontFamily: c.fontFamily,
                                fontWeight: c.fontWeight,
                                fontSize: c.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("potato-list-table-" + u),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(u).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                });
                                try {
                                    c.click(t.rows[e])
                                } catch (t) {}
                                document.getElementById("pims-list-" + u).style.height = "0px"
                            }), $("#potato-list-table-" + u + " th").css("cursor", "pointer").click(function() {
                                var t = document.getElementById("potato-list-table-" + u),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(u).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), document.getElementById(u).style.background = c.background;
                                try {
                                    c.click(t.rows[e])
                                } catch (t) {}
                                document.getElementById("pims-list-" + u).style.height = "0px"
                            })
                        })
                    }
                })
            };
            try {
                pimsElement = document.registerPotato(u, {
                    prototype: t,
                    extends: "div"
                })
            } catch (t) {}
        },
        _lt_: function(w) {
            var i = this.getHTMLElement(),
                A = this.x,
                l = this._p_(w),
                k = l.id;
            i.createdCallback = function() {
                if (this.id = k + "_", X.prototype.getAttribute(this, k).index, X.prototype.getAttribute(this, k).field, this.pims = k, this.innerHTML = '<input type="text" id="' + k + '"  class="' + l.className + '" > ', this.innerHTML += '<div id="div-' + k + '" onscroll="pims(\'div-' + k + "').scrolly('locked_top',0,0)\" class=\"pims-list\"> ", $("#" + k).css({
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
                        margin: l.margin,
                        border: l.border,
                        borderRadius: l.borderRadius + "px",
                        textTransform: l.textTransform,
                        position: l.position,
                        left: l.left + "px",
                        top: l.top + "px",
                        float: l.float,
                        cursor: "pointer"
                    }).attr({
                        value: l.value,
                        type: l.type
                    }).mousemove(function() {
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
                    }).keyup(function(t) {
                        for (var e = 0; e < _potatoId.length; e++)
                            if (k == String(_potatoId[e])) {
                                var i = String(_potatoBindId[e]);
                                document.getElementById(i).innerText = document.getElementById(k).value
                            }
                        try {
                            l.keyup(t)
                        } catch (t) {}
                    }).change(function() {
                        try {
                            l.change()
                        } catch (t) {}
                    }), String(l.widthTable).split("_").slice(1, 2) == A) var m = String(l.widthTable).split("_").slice(0, 1);
                if (String(l.heightTable).split("_").slice(1, 2) == A) var f = String(l.heightTable).split("_").slice(0, 1);
                if (String(l.marginTop).split("_").slice(1, 2) == A) var b = String(l.marginTop).split("_").slice(0, 1);
                if (String(l.marginLeft).split("_").slice(1, 2) == A) var y = String(l.marginLeft).split("_").slice(0, 1);
                if (String(l.params).split("@").slice(1, 2) == A) var v = String(l.params).split("@").slice(0, 1);
                if (String(l.where).split("@").slice(1, 2) == A) var x = String(l.where).split("@").slice(0, 1);
                pims("#" + k).onclick = function(t) {
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
                    var d = _pimS.prototype._p_(w),
                        i = v;
                    if ("block" != document.getElementById("div-" + k).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("div-" + k).style.height == d.heightTable + "px") document.getElementById("div-" + k).style.height = "0px";
                    else {
                        try {
                            pimsListObject.style.display = "none"
                        } catch (t) {}
                        $("#div-" + k).css("display", "block");
                        var l = d.model,
                            r = [];
                        if (null != x) {
                            var o = X.prototype.getIdClass(String(x));
                            try {
                                this.index = o.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = o.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (var a = 0; a < o.length; a++) {
                                var s = String(o[a].id).split("-").slice(2, 3);
                                r[o[a].field] = pims(s).value()
                            }
                        }
                        if (null != i && "null" != v)
                            for (var c = (String(v).match(/AND/g) || []).length, u = String(v).split("AND"), p = 0; p <= c; p++) {
                                var h = String(u.slice(p, p + 1)).split(":"),
                                    g = new Function(h.slice(1, 2));
                                "null" != String(h.slice(0, 1)).replace(/\s+/g, "") && (r[String(h.slice(0, 1)).replace(/\s+/g, "")] = g())
                            }
                        _pimS.prototype._rp_(l, r, function(t) {
                            var i = JSON.parse(t),
                                l = "<table class='potato-list-table' id='table-" + k + "' >",
                                r = 0;
                            for (e in l += "<tr>", i[0]) "" != i[0][e] ? l += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + i[0][e] + "</th>" : l += "<th style='display:none'>" + i[0][e] + "</th>", r++;
                            for (n in l += "</tr>", i)
                                if ("undefined" != i[n][0] && null != i[n][0] && 0 < n) {
                                    l += "<tr>";
                                    for (var o = 0; o < r; o++) "" != i[0][o] ? l += "<td>" + i[n][o] + "</td>" : l += "<td style='display:none'>" + i[n][o] + "</td>";
                                    l += "</tr>"
                                }
                            l += "</table>", document.getElementById("div-" + k).style.height = "0px";
                            var a = parseFloat(b) + "px",
                                s = parseFloat(y) + "px";
                            pimsListObject = document.getElementById("div-" + k), $("#div-" + k).html(l).show().css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: s,
                                top: a,
                                height: f + "px",
                                width: m + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                display: d.display,
                                background: "transparent",
                                zIndex: 1e4
                            }), $("#table-" + k + " td").css({
                                fontFamily: d.fontFamily,
                                fontWeight: d.fontWeight,
                                fontSize: d.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("table-" + k),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                if ("閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText) {
                                    pims(k).value(t.rows[e].cells[0].innerText);
                                    for (var l = 0; l < _potatoId.length; l++)
                                        if (k == String(_potatoId[l])) {
                                            var n = String(_potatoBindId[l]);
                                            document.getElementById(n).innerText = document.getElementById(k).value
                                        }
                                } else $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), $("#div-" + k).html("");
                                try {
                                    d.click(t.rows[e], A, i), $("#div-" + k).html("")
                                } catch (t) {}
                                document.getElementById("div-" + k).style.height = "0px"
                            }), $("#table-" + k + " th").css("cursor", "pointer").click(function() {
                                var t = document.getElementById("table-" + k),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                ci = $(this).parent().children().index(this), "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(k).value(t.rows[e].cells[0].innerText) : ($(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), $("#div-" + k).html("")), document.getElementById(k).style.background = d.background;
                                try {
                                    d.click(t.rows[e], A, ci)
                                } catch (t) {}
                                document.getElementById("div-" + k).style.height = "0px"
                            });
                            try {
                                d.callback(A)
                            } catch (t) {}
                        })
                    }
                }
            };
            try {
                pimsElement = document.registerPotato(A, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(A, {
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
        _m_: function(w) {
            var i = this.getHTMLElement(),
                A = this.x,
                r = this._p_(w),
                k = r.id;
            i.createdCallback = function() {
                this.id = k + "_", this.pims = k;
                var t = r.menuTitle.split(","),
                    i = r.menuModel.split(",");
                this.innerHTML = "<table><tr>";
                for (var l = 0; l < t.length; l++) this.innerHTML += '<td><a id="' + k + "-" + t[l] + '" name="' + i[l] + '" class="' + r.id + '" >' + t[l] + "</a></td>", $("#" + k + "-" + t[l]).css({
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
                    for (var e = 0; e < _potatoId.length; e++)
                        if (k == String(_potatoId[e])) {
                            var i = String(_potatoBindId[e]);
                            document.getElementById(i).innerText = document.getElementById(k).value
                        }
                    try {
                        r.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        r.change()
                    } catch (t) {}
                });
                if (this.innerHTML += "</tr></table>", this.innerHTML += '<div id="div-' + k + '" onscroll="pims(\'div-' + k + "').scrolly('locked_top',0,0)\" class=\"" + r.id + '"> ', String(r.widthTable).split("_").slice(1, 2) == A) var m = String(r.widthTable).split("_").slice(0, 1);
                if (String(r.heightTable).split("_").slice(1, 2) == A) var f = String(r.heightTable).split("_").slice(0, 1);
                if (String(r.marginTop).split("_").slice(1, 2) == A) var b = String(r.marginTop).split("_").slice(0, 1);
                if (String(r.marginLeft).split("_").slice(1, 2) == A) var y = String(r.marginLeft).split("_").slice(0, 1);
                if (String(r.params).split("@").slice(1, 2) == A) var v = String(r.params).split("@").slice(0, 1);
                if (String(r.where).split("@").slice(1, 2) == A) var x = String(r.where).split("@").slice(0, 1);
                $("." + k).mouseenter(function(t) {
                    _potatoMenu = 1;
                    var d = _pimS.prototype._p_(w),
                        i = v;
                    if ("block" != document.getElementById("div-" + k).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("div-" + k).style.height == d.heightTable + "px") document.getElementById("div-" + k).style.height = "0px";
                    else {
                        $("#div-" + k).css("marginTop", "-2px");
                        var l = this.name,
                            r = [];
                        if (null != x) {
                            var o = X.prototype.getIdClass(String(x));
                            try {
                                this.index = o.getAttribute("index"), null == this.index && (this.index = 9999999)
                            } catch (t) {
                                this.index = 9999999
                            }
                            try {
                                this.field = o.getAttribute("field"), null == this.field && (this.field = 9999999)
                            } catch (t) {
                                this.field = 9999999
                            }
                            for (var a = 0; a < o.length; a++) {
                                var s = String(o[a].id).split("-").slice(2, 3);
                                r[o[a].field] = pims(s).value()
                            }
                        }
                        if (null != i && "null" != v)
                            for (var c = (String(v).match(/AND/g) || []).length, u = String(v).split("AND"), p = 0; p <= c; p++) {
                                var h = String(u.slice(p, p + 1)).split(":"),
                                    g = new Function(h.slice(1, 2));
                                "null" != String(h.slice(0, 1)).replace(/\s+/g, "") && (r[String(h.slice(0, 1)).replace(/\s+/g, "")] = g())
                            }
                        _pimS.prototype._rp_(l, r, function(t) {
                            var i = JSON.parse(t);
                            check_model = 1;
                            var l = "<table class='potato-menu-table' id='table-" + k + "' >",
                                r = 0;
                            for (e in l += "<tr>", i[0]) "" != i[0][e] ? l += "<th>" + i[0][e] + "</th>" : l += "<th style='display:none'>" + i[0][e] + "</th>", r++;
                            for (n in l += "</tr>", i)
                                if ("undefined" != i[n][0] && null != i[n][0] && 0 < n) {
                                    l += "<tr>";
                                    for (var o = 0; o < r; o++) "" != i[0][o] ? l += "<td>" + i[n][o] + "</td>" : l += "<td style='display:none'>" + i[n][o] + "</td>";
                                    l += "</tr>"
                                }
                            l += "</table>", document.getElementById("div-" + k).style.height = "0px";
                            var a = parseFloat(b) + "px",
                                s = parseFloat(y) + "px";
                            pimsListObject = document.getElementById("div-" + k), document.getElementById("div-" + k).style.display = "block", $("#div-" + k).html(l).css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: s,
                                top: a,
                                height: f + "px",
                                width: m + "px",
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                display: d.display,
                                background: "transparent",
                                zIndex: 1e4
                            }), $("#table-" + k + " td").css({
                                textAlign: "left",
                                fontFamily: d.fontFamily,
                                fontWeight: d.fontWeight,
                                fontSize: d.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("table-" + k),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                potato.table = t.rows[e], potato.ci = i;
                                try {
                                    d.click(t.rows[e], A, i), $("#div-" + k).html("")
                                } catch (t) {}
                                document.getElementById("div-" + k).style.height = "0px"
                            }), $("#table-" + k + " th").css("cursor", "pointer").click(function() {
                                $("#div-" + k).css("display", "none")
                            });
                            try {
                                d.callback(A)
                            } catch (t) {}
                        })
                    }
                }), $("." + k).mouseleave(function(t) {
                    _potatoMenu = 0
                }), $(document).mouseover(function(t) {
                    0 == _potatoMenu && $("#div-" + k).css("display", "none")
                })
            };
            try {
                pimsElement = document.registerPotato(A, {
                    prototype: i
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(A, {
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
            var d, c = this._p_(t),
                u = this.x,
                p = this.e;
            c.id = u;
            var h = [],
                g = [],
                m = 0;
            $("#" + u + " td").click(function() {
                d = $(this).parent().children().index(this), $(this).parent().parent().children().index(this.parentNode)
            });
            for (var e = 1; e < p.rows.length; e++) p.rows[e].onclick = function() {
                var t = "-";
                try {
                    t = p.rows[i].cells[c.matchCol].innerText
                } catch (t) {}
                if (!("-" != c.matchCol && t != c.matchValue || d != c.selectCol && "any" != c.selectCol)) {
                    var e = c.selectCol,
                        i = c.targetCol;
                    "any" == e && (e = 0), "any" == i && (e = i = d);
                    var l = p.rows[this.rowIndex];
                    if (-1 == String(l.cells[e].innerHTML).indexOf(c.markSymbol)) g[m] = l.cells[i].innerText, m++, l.cells[e].innerHTML = '<font style="font-weight:bold;color:red;background:yellow">' + c.markSymbol + "</font>" + l.cells[e].innerHTML;
                    else {
                        var n = String(l.cells[e].innerHTML).split(c.markSymbol);
                        l.cells[e].innerHTML = n.slice(1, 2);
                        for (var r = 0; r < g.length; r++) g[r] == l.cells[i].innerText && (g[r] = "")
                    }
                    h = [];
                    var o = 0;
                    for (r = 0; r < g.length; r++)
                        if ("" != g[r] && "undefined" != g[r]) {
                            for (var a = 0, s = 0; s < h.length; s++) h[s] == g[r] && (a = 1);
                            0 == a && (h[o] = g[r], o++)
                        }
                    c.callback(h, u)
                }
            }
        },
        optionText: function() {
            return document.getElementById(this.x).options[document.getElementById(this.x).selectedIndex].text
        },
        _p_: function(t) {
            var e, i, l, n, r, o, a, s, d, c, u, p, h, g, m, f, b, y, v, x, w, A, k, S, _, C, I, T, E, B, $, F, L, N, R, D, X, O, M, z, H, P, W, j, K, V, U, Y, q, G, J, Q, Z, tt, et, it, lt, nt, rt, ot, at, st, dt, ct, ut, pt, ht, gt, mt, ft, bt, yt, vt, xt, wt, At, kt, St, _t, Ct, It, Tt, Et, Bt, $t, Ft, Lt, Nt, Rt, Dt, Xt, Ot, Mt, zt, Ht, Pt, Wt, jt, Kt, Vt, Ut, Yt, qt, Gt, Jt = new Array;
            return this.clearArrays(), t(), null == (Lt = css.textTransform) && (Lt = "none"), null == (e = css.background) && (e = "white"), null == (i = css.border) && (i = "1px solid black"), null == (l = css.borderRadius) && (l = 10), null == (n = css.boxShadow) && (n = "0 0 0px rgba(0,0,0,0)"), null == (r = events.callback) && (r = this.dummy()), null == (o = attr.canvas) && (o = "chart"), null == (a = param.cell) && (a = "0"), null == (d = attr.chartType) && (d = "pie"), null == (c = attr.chartId) && (c = "chart1Id"), null == (g = param.col) && (g = 1e3), null == (f = css.colorIndex) && (f = ["#c5ffb3"]), null == (s = events.change) && (s = this.dummy()), null == (u = attr.className) && (u = "pimsClassName"), null == (p = events.click) && (p = this.dummy()), null == (h = attr.cls) && (h = ""), null == (b = attr.container) && (b = "container"), null == (m = css.color) && (m = "black"), null == (y = css.cursor) && (y = "default"), null == (v = css.dataFontSize) && (v = 12), null == (x = attr.dataLabel) && (x = "data"), null == (w = attr.dataLabel2) && (w = "data"), null == (A = attr.disabled) && (A = !1), null == (k = css.display) && (k = "block"), null == (S = css.displayKey) && (S = "none"), null == (_ = param.editWidth) && (_ = 100), null == (C = param.fieldClass) && (C = 0), null == (E = css.float) && (E = ""), null == (I = css.fontSize) && (I = 18), null == (B = css.fontWeight) && (B = "normal"), null == ($ = css.fontFamily) && ($ = "Helvetica"), null == (T = attr.format) && (T = "yy-mm-dd"), null == (F = param.header) && (F = "0"), null == (L = css.height) && (L = 30), null == (N = css.heightTable) && (N = 450), null == (R = events.hover) && (R = this.dummy()), D = css.hoverColor, null == (X = css.hoverBgColor) && (X = "null"), null == (O = attr.hoverId) && (O = "pims-hovertext"), null == (M = attr.hoverText) && (M = ""), null == (H = css.hoverHeight) && (H = 30), null == (z = css.hoverWidth) && (z = ""), null == (P = param.htm) && (P = "config/keypad.htm"), null == (W = attr.id) && (W = "x"), null == (j = param.idCol) && (j = 0), image = attr.image, null == image && (image = "nil 0 0"), K = attr.imageDir, null == (V = css.imgWidth) && (V = 45), null == (U = css.imgHeight) && (U = 45), null == (Y = events.keyup) && (Y = this.dummy()), null == (J = css.labelFontSize) && (J = 12), null == (Q = css.label2FontSize) && (Q = 12), null == (q = attr.labelString) && (q = ""), null == (G = attr.label2String) && (G = ""), null == (et = css.left) && (et = 0), null == (it = css.leftKey) && (it = 0), null == (Z = css.legendDisplay) && (Z = !1), null == (tt = css.legendPosition) && (tt = "bottom"), null == (ot = param.markSymbol) && (ot = ""), null == (nt = param.matchCol) && (nt = "-"), null == (rt = param.matchValue) && (rt = "-"), null == (lt = css.margin) && (lt = "0px 0px 0px 0px"), null == (ct = css.marginKey) && (ct = "0px 0px 0px 0px"), null == (ut = css.marginLeft) && (ut = "0"), null == (pt = css.marginTop) && (pt = "0"), null == (at = param.menuModel) && (at = "null"), null == (st = param.menuTitle) && (st = "null"), ht = param.model, null == (dt = attr.multiple) && (dt = !1), null == (gt = attr.name) && (gt = ""), null == (mt = attr.onscroll) && (mt = this.dummy()), null == (ft = css.padding) && (ft = "3px 0px 0px 3px"), null == (ft = css.padding) && (ft = "3px 0px 0px 3px"), null == (bt = css.paddingLeft) && (bt = "1"), null == (yt = css.paddingTop) && (yt = "1"), null == (vt = css.pointBorderColorIndex) && (vt = ["#000000"]), null == (xt = css.pointBorderDash) && (xt = [0]), null == (wt = css.pointBorderWidth) && (wt = [1]), null == (At = css.pointColorIndex) && (At = ["#c5ffb3"]), null == (kt = css.pointRadius) && (kt = ["5"]), null == (St = css.pointStyle) && (St = ["triangle"]), null == (_t = css.position) && (_t = "static"), null == (Ct = param.row) && (Ct = "0"), null == (It = param.selectCol) && (It = ""), null == (Tt = css.showDay) && (Tt = !1), null == (Et = attr.stacked) && (Et = !1), null == (Bt = attr.tableId) && (Bt = "tableId"), null == ($t = attr.targetIndex) && ($t = 0), null == (Jt = param.targetCol) && (Jt = ""), null == (Ft = attr.targetColor) && (Ft = "WHITE"), null == (Nt = css.textAlign) && (Nt = "center"), null == (Rt = attr.title) && (Rt = ""), null == (Dt = css.titleFontSize) && (Dt = 25), null == (Xt = attr.tooltips) && (Xt = !0), null == (Ot = css.top) && (Ot = 0), null == (Mt = css.topKey) && (Mt = 0), null == (zt = events.trigger) && (zt = "ondblclick"), null == (Ht = attr.type) && (Ht = "text"), null == (Pt = attr.value) && (Pt = ""), null == (Kt = param.whereClass) && (Kt = 0), null == (Wt = css.width) && (Wt = 119), null == (jt = css.widthTable) && (jt = 130), null == (Vt = css.xAxesFontSize) && (Vt = 12), null == (Ut = css.xlabelAngle) && (Ut = 0), null == (Yt = css.yAxesFontSize) && (Yt = 12), null == (qt = css.y2AxesFontSize) && (qt = 12), null == (Gt = attr.y2AxesType) && (Gt = ""), {
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
                container: b,
                cursor: y,
                data: data,
                dataFontSize: v,
                dataLabel: x,
                dataLabel2: w,
                disabled: A,
                display: k,
                displayKey: S,
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
                heightTable: N,
                hover: R,
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
                imgHeight: U,
                imgWidth: V,
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
                markSymbol: ot,
                margin: lt,
                marginLeft: ut,
                marginTop: pt,
                matchCol: nt,
                matchValue: rt,
                menuModel: at,
                menuTitle: st,
                model: ht,
                multiple: dt,
                name: gt,
                onscroll: mt,
                padding: ft,
                paddingLeft: bt,
                paddingTop: yt,
                params: params,
                pointBorderColorIndex: vt,
                pointBorderDash: xt,
                pointBorderWidth: wt,
                pointColorIndex: At,
                pointRadius: kt,
                pointStyle: St,
                position: _t,
                row: Ct,
                selectCol: It,
                showDay: Tt,
                stacked: Et,
                tableId: Bt,
                targetIndex: $t,
                targetColor: Ft,
                targetCol: Jt,
                textAlign: Nt,
                textTransform: Lt,
                title: Rt,
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
                xAxesFontSize: Vt,
                xlabelAngle: Ut,
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
            for (var r in t) {
                if ("WHERE" == r) {
                    n = 1;
                    for (var o in t[r]) {
                        if ("class" == o)
                            for (var a = X.prototype.getIdClass(t[r][o]), s = 0; s < a.length; s++) {
                                var d = String(a[s].id).split("-").slice(2, 3);
                                l[a[s].field] = pims("#" + d).value
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
                                u += "'" + pims("#" + d).value + "',"
                            }
                        "class" != o && (c += o + ",", u += "'" + t[r][o] + "',", s++)
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
            var u = this._p_(t),
                e = this.getHTMLElement(),
                p = this.x,
                i = this.x + ".php",
                g = this.x,
                l = p.split("-"),
                m = l.slice(2, 3);
            l.slice(2, 3);
            if (String(u.params).split("@").slice(1, 2) == p) var n = String(u.params).split("@").slice(0, 1);
            e.createdCallback = function() {
                this.innerHTML = '<div id="' + g + '"></div> '
            };
            try {
                pimsElement = document.registerPotato(p, {
                    prototype: e
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(p, {
                        prototype: e,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
            var r = [];
            if (null != [] && "null" != n)
                for (var o = (String(n).match(/AND/g) || []).length, a = String(n).split("AND"), s = 0; s <= o; s++) {
                    var d = String(a.slice(s, s + 1)).split(":"),
                        c = new Function(d.slice(1, 2));
                    "null" != String(d.slice(0, 1)).replace(/\s+/g, "") && (r[String(d.slice(0, 1)).replace(/\s+/g, "")] = String(c()).split(","))
                }
            pims().Post(i, r, function(h) {
                var t = new Array;
                t[0] = new Array, t[1] = new Array, t[2] = new Array, t[3] = new Array;
                for (var e = 0; e < h.length; e++)
                    for (var i = 0; i < t.length; i++) t[i][e] = h[e][i];
                var l = document.getElementById(g);
                l.innerHTML = "", $("#" + g).append('<canvas id="canvas-' + m + '" >読み込み中．．．</canvas>');
                var n = document.getElementById("canvas-" + m);
                $("#" + g).css({
                    width: u.width + "px",
                    height: u.height + "px",
                    border: u.border,
                    borderRadius: u.borderRadius,
                    position: u.position,
                    top: u.top + "px",
                    left: u.left + "px"
                });
                var r = document.createElement("div");
                r.setAttribute("id", "note-doughnut-" + m), l.appendChild(r), $("#note-doughnut-" + m).css({
                    fontSize: u.fontSize + "px",
                    position: "relative",
                    left: u.width / 10 + "px",
                    width: .8 * u.width + "px",
                    padding: "5px 5px 5px 5px",
                    textAlign: "center"
                });
                var o = document.createElement("img");
                o.setAttribute("id", "img-doughnut-" + m), o.setAttribute("onerror", "this.style.display='none'"), l.appendChild(o), $("#img-doughnut-" + m).css({
                    display: "block",
                    border: "0px",
                    borderRadius: u.height / 2 + "px",
                    background: "transparent",
                    height: u.height / 2 + "px",
                    width: u.height / 2 + "px",
                    position: "relative",
                    left: u.width / 2 - u.height / 2 / 2 + "px",
                    top: -u.height / 2 - u.height / 2 / 2 - 20 - u.fontSize + "px"
                });
                var a = t[3][0];
                if ($("#note-doughnut-" + m).show().html(a).css("border", "3px solid " + t[2][0]), -1 != String(h[0][0]).indexOf("-")) var s = String(t[0][0]).split("-"),
                    d = u.imageDir + s[0] + "-" + String(s[1]).substring(0, 1) + ".jpg";
                else d = u.imageDir + t[0][0] + ".jpg";
                document.getElementById("img-doughnut-" + m).src = d, document.getElementById("img-doughnut-" + m).style.border = "5px solid " + t[2][0], u.targetIndex = 0, u.targetColor = t[2][0];
                var c = {
                    responsive: !0,
                    maintainAspectRatio: !1,
                    legend: {
                        position: "top",
                        display: !1
                    },
                    title: {
                        display: u.display,
                        text: u.title,
                        fontSize: u.titleFontSize
                    },
                    animation: {
                        duration: 500,
                        easing: "easeOutQuart",
                        onComplete: function() {
                            var p = this.chart.ctx;
                            p.font = Chart.helpers.fontString(u.dataFontSize, "normal", "Arial"), p.textAlign = "center", p.textBaseline = "bottom", this.data.datasets.forEach(function(t) {
                                for (var e = 0; e < t.data.length; e++) {
                                    var i = t._meta[Object.keys(t._meta)[0]],
                                        l = i.data[e]._model,
                                        n = i.total,
                                        r = l.innerRadius + (l.outerRadius - l.innerRadius) / 2,
                                        o = l.startAngle,
                                        a = o + (l.endAngle - o) / 2,
                                        s = r * Math.cos(a),
                                        d = r * Math.sin(a);
                                    p.fillStyle = "#000";
                                    var c = String(Math.round(t.data[e] / n * 100)) + "%";
                                    if (e < t.data.length - 1) {
                                        var u = l.x + s + 70;
                                        0 < d && s < 0 && (u = l.x + s - 50), p.fillText(h[e][0] + ": " + h[e][1] + ", " + c, u, l.y + d + 8)
                                    }
                                }
                                c = String(Math.round(t.data[t.data.length - 1] / n * 100)) + "%";
                                p.fillText(h[t.data.length - 1][0] + ": " + h[t.data.length - 1][1] + ", " + c, l.x + s, l.y + 2 * d)
                            })
                        }
                    },
                    hover: {
                        onHover: function(t) {
                            this.getElementAtEvent(t).length ? t.target.style.cursor = "pointer" : t.target.style.cursor = "default", pims("#img-doughnut-" + m).style.display = "block"
                        }
                    },
                    onClick: function(t, e) {
                        u.targetIndex = e[0]._index, u.targetColor = e[0]._model.backgroundColor, u.click(p, e[0]._chart.data.labels[e[0]._index], e[0]._model.backgroundColor)
                    },
                    tooltips: {
                        enabled: !1,
                        backgroundColor: "yellow",
                        bodyFontColor: "black",
                        bodyFontSize: 12,
                        borderColor: "#000",
                        borderWidth: 1,
                        custom: function(t) {
                            if (0 < t.opacity) {
                                var e = this._data.datasets[0].other[t.dataPoints[0].index];
                                if ($("#note-doughnut-" + m).show().html(e).css("border", "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var i = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                    l = u.imageDir + i[0] + "-" + String(i[1]).substring(0, 1) + ".jpg";
                                else l = u.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                document.getElementById("img-doughnut-" + m).src = l, document.getElementById("img-doughnut-" + m).style.display = "block", document.getElementById("img-doughnut-" + m).style.border = "5px solid " + t.labelColors[0].backgroundColor
                            } else {
                                e = this._data.datasets[0].other[u.targetIndex] + " ,  ";
                                if ($("#note-doughnut-" + m).show().html(e).css("border", "3px solid " + u.targetColor), -1 != String(this._data.labels[u.targetIndex]).indexOf("-")) i = String(this._data.labels[u.targetIndex]).split("-"), l = u.imageDir + i[0] + "-" + String(i[1]).substring(0, 1) + ".jpg";
                                else l = u.imageDir + this._data.labels[u.targetIndex] + ".jpg";
                                document.getElementById("img-doughnut-" + m).src = l, document.getElementById("img-doughnut-" + m).style.display = "block", document.getElementById("img-doughnut-" + m).style.border = "5px solid " + u.targetColor
                            }
                        }
                    }
                };
                new Chart(n, {
                    type: "doughnut",
                    data: {
                        labels: t[0],
                        datasets: [{
                            label: "不適合品番",
                            backgroundColor: t[2],
                            borderColor: "grey",
                            borderWidth: .5,
                            data: t[1],
                            other: t[3]
                        }]
                    },
                    showDatapoints: !0,
                    options: c
                });
                try {
                    u.callback()
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
            var r = [],
                o = [],
                i = pims.elementbar;
            if (t) switch (t) {
                case 1:
                    i = pims.element1bar;
                    break;
                case 2:
                    i = pims.element2bar;
                    break;
                case 3:
                    i = pims.element3bar;
                    break;
                case 4:
                    i = pims.element4bar;
                    break;
                case 5:
                    i = pims.element5bar;
                    break;
                case 6:
                    i = pims.element6bar;
                    break;
                case 7:
                    i = pims.element7bar;
                    break;
                case 8:
                    i = pims.element8bar;
                    break;
                case 9:
                    i = pims.element9bar
            }
            var l = i.getAttribute("chartType");
            null == l && (l = "bar");
            var n = i.getAttribute("border");
            null == n && (n = "1px solid black");
            var a = i.getAttribute("background");
            null == a && (a = "transparent");
            var s = i.getAttribute("titleDisplay");
            null == s && (s = !0);
            var d = i.getAttribute("titleFontSize");
            null == d && (d = 25);
            var c = i.getAttribute("legendDisplay");
            null == c && (c = !0);
            var u = i.getAttribute("legendPosition");
            null == u && (u = "bottom");
            var p = i.getAttribute("labelFontSize");
            null == p && (p = 12);
            var h = i.getAttribute("label2FontSize");
            null == h && (h = 12);
            var g = i.getAttribute("yAxesFontSize");
            null == g && (g = 12);
            var m = i.getAttribute("y2AxesFontSize");
            null == m && (m = 12);
            var f = i.getAttribute("xAxesFontSize");
            null == f && (f = 12);
            var b = i.getAttribute("dataFontSize");
            null == b && (b = 12);
            var y = i.getAttribute("fontSize");
            null == y && (y = 15);
            var v = i.getAttribute("title");
            null == v && (v = "_b_ Chart");
            var x = i.getAttribute("y2AxesType");
            null == x && (x = "");
            var w = i.getAttribute("click");
            if (null != w) {
                var A = i.localName;
                o[String(A)] = new Function(w)
            }
            var k = i.getAttribute("hover");
            if (null != k) {
                A = i.localName;
                r[String(A)] = new Function(k)
            }
            S = 'dataLabel:"-"';
            try {
                var S = i.getAttribute("params");
                null == S && (S = 'dataLabel:"-"')
            } catch (t) {}
            var _ = new Function(i.getAttribute("callback"));
            try {
                C = (C = new Function(i.getAttribute("stacked")))()
            } catch (t) {
                var C;
                null == (C = i.getAttribute("stacked")) && (C = !1)
            }
            null != C && "undefined" != C || null == (C = i.getAttribute("stacked")) && (C = !1);
            try {
                I = (I = new Function(i.getAttribute("tooltips")))()
            } catch (t) {
                var I;
                null == (I = i.getAttribute("tooltips")) && (I = !1)
            }
            null != I && "undefined" != I || null == (I = i.getAttribute("tooltips")) && (I = !0);
            try {
                T = (T = new Function(i.getAttribute("yAxesTitle")))()
            } catch (t) {
                var T;
                null == (T = i.getAttribute("yAxesTitle")) && (T = "")
            }
            null != T && "undefined" != T || null == (T = i.getAttribute("yAxesTitle")) && (T = "");
            try {
                E = (E = new Function(i.getAttribute("y2AxesTitle")))()
            } catch (t) {
                var E;
                null == (E = i.getAttribute("y2AxesTitle")) && (E = "")
            }
            null != E && "undefined" != E || null == (E = i.getAttribute("y2AxesTitle")) && (E = "");
            try {
                B = (B = new Function(i.getAttribute("showDay")))()
            } catch (t) {
                var B;
                null == (B = i.getAttribute("showDay")) && (B = !0)
            }
            null != B && "undefined" != B || null == (B = i.getAttribute("showDay")) && (B = !0);
            try {
                $ = ($ = new Function(i.getAttribute("height")))()
            } catch (t) {
                var $;
                null == ($ = i.getAttribute("height")) && ($ = 350)
            }
            null != $ && "undefined" != $ || null == ($ = i.getAttribute("height")) && ($ = 350);
            try {
                F = (F = new Function(i.getAttribute("width")))()
            } catch (t) {
                var F;
                null == (F = i.getAttribute("width")) && (F = 600)
            }
            null != F && "undefined" != F || null == (F = i.getAttribute("width")) && (F = 600);
            try {
                L = (L = new Function(i.getAttribute("xlabelAngle")))()
            } catch (t) {
                var L;
                null == (L = i.getAttribute("xlabelAngle")) && (L = 0)
            }
            null != L && "undefined" != L || null == (L = i.getAttribute("xlabelAngle")) && (L = 0);
            try {
                N = (N = new Function(i.getAttribute("dataLabel")))()
            } catch (t) {
                var N;
                null == (N = i.getAttribute("dataLabel")) && (N = "data")
            }
            null != N && "undefined" != N || null == (N = i.getAttribute("dataLabel")) && (N = "data");
            try {
                R = (R = new Function(i.getAttribute("dataLabel2")))()
            } catch (t) {
                var R;
                null == (R = i.getAttribute("dataLabel2")) && (R = "data")
            }
            null != R && "undefined" != R || null == (R = i.getAttribute("dataLabel2")) && (R = "data");
            try {
                var D = new Function(i.getAttribute("colorIndex"));
                D = String(D()).split(",")
            } catch (t) {
                try {
                    D = i.getAttribute("colorIndex").split(",")
                } catch (t) {}
                null == D && (D = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            if (null == D || "undefined" == D) {
                try {
                    D = String(i.getAttribute("colorIndex")).split(",")
                } catch (t) {}
                null == D && (D = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            try {
                var X = new Function(i.getAttribute("pointBorderColorIndex"));
                X = String(X()).split(",")
            } catch (t) {
                try {
                    X = String(i.getAttribute("pointBorderColorIndex")).split(",")
                } catch (t) {}
                null == X && (X = ["#000000", "#000000", "#000000", "#000000", "#000000"])
            }
            if (null == X || "undefined" == X) {
                try {
                    X = i.getAttribute("pointBorderColorIndex").split(",")
                } catch (t) {}
                null == X && (X = ["#000000", "#000000", "#000000", "#000000", "#000000"])
            }
            try {
                var O = new Function(i.getAttribute("pointBorderDash"));
                O = String(O()).split(",")
            } catch (t) {
                try {
                    O = String(i.getAttribute("pointBorderDash")).split(",")
                } catch (t) {}
                null == O && (O = [0, 0, 0, 0, 0])
            }
            if (null == O || "undefined" == O) {
                try {
                    O = i.getAttribute("pointBorderDash").split(",")
                } catch (t) {}
                null == O && (O = [0, 0, 0, 0, 0])
            }
            try {
                var M = new Function(i.getAttribute("pointBorderWidth"));
                M = String(M()).split(",")
            } catch (t) {
                try {
                    M = String(i.getAttribute("pointBorderWidth")).split(",")
                } catch (t) {}
                null == M && (M = ["1", "1", "1", "1", "1"])
            }
            if (null == M || "undefined" == M) {
                try {
                    M = i.getAttribute("pointBorderWidth").split(",")
                } catch (t) {}
                null == M && (M = ["1", "1", "1", "1", "1"])
            }
            try {
                var z = new Function(i.getAttribute("pointColorIndex"));
                z = String(z()).split(",")
            } catch (t) {
                try {
                    z = String(i.getAttribute("pointColorIndex")).split(",")
                } catch (t) {}
                null == z && (z = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
            }
            if (null == z || "undefined" == z) {
                try {
                    z = i.getAttribute("pointColorIndex").split(",")
                } catch (t) {}
                null == z && (z = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
            }
            try {
                var H = new Function(i.getAttribute("pointStyle"));
                H = String(H()).split(",")
            } catch (t) {
                try {
                    H = i.getAttribute("pointStyle").split(",")
                } catch (t) {}
                null == H && (H = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
            }
            if (null == H || "undefined" == H) {
                try {
                    H = i.getAttribute("pointStyle").split(",")
                } catch (t) {}
                null == H && (H = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
            }
            try {
                var P = new Function(i.getAttribute("pointRadius"));
                P = String(P()).split(",")
            } catch (t) {
                try {
                    P = i.getAttribute("pointRadius").split(",")
                } catch (t) {}
                null == P && (P = ["5", "5", "8", "8"])
            }
            if (null == P || "undefined" == P) {
                try {
                    P = i.getAttribute("pointRadius").split(",")
                } catch (t) {}
                null == P && (P = ["5", "5", "8", "8"])
            }
            "false" != e && 0 != e && pims(i.localName)._b_(function() {
                params = S + "@" + i.localName, css = {
                    display: s,
                    background: a,
                    border: n,
                    height: $,
                    width: F,
                    fontSize: y,
                    legendDisplay: c,
                    legendPosition: u,
                    colorIndex: D,
                    pointBorderColorIndex: X,
                    pointBorderDash: O,
                    pointBorderWidth: M,
                    pointColorIndex: z,
                    pointStyle: H,
                    pointRadius: P,
                    showDay: B,
                    xlabelAngle: L,
                    labelFontSize: p,
                    label2FontSize: h,
                    yAxesFontSize: g,
                    y2AxesFontSize: m,
                    xAxesFontSize: f,
                    dataFontSize: b,
                    titleFontSize: d
                }, attr = {
                    chartType: l,
                    title: v,
                    labelString: T,
                    label2String: E,
                    y2AxesType: x,
                    stacked: C,
                    tooltips: I,
                    dataLabel: N,
                    dataLabel2: R
                }, null != w && (events = {
                    callback: function() {
                        try {
                            _()
                        } catch (t) {}
                    },
                    click: function(t, e, i, l) {
                        for (var n in pims.chartLabel = e, pims.chartValue = i, pims.chartXvalue = l, o) {
                            String(n) == t && o[n]()
                        }
                    },
                    hover: function(t, e, i, l) {
                        for (var n in pims.chartLabel = e, pims.chartValue = i, pims.chartXvalue = l, r) {
                            String(n) == t && r[n]()
                        }
                    }
                })
            })
        },
        reloadDoughnut: function(t, e) {
            var n = [],
                i = pims.elementdoughnut;
            if (t) switch (t) {
                case 1:
                    i = pims.element1doughnut;
                    break;
                case 2:
                    i = pims.element2doughnut;
                    break;
                case 3:
                    i = pims.element3doughnut;
                    break;
                case 4:
                    i = pims.element4doughnut;
                    break;
                case 5:
                    i = pims.element5doughnut;
                    break;
                case 6:
                    i = pims.element6doughnut;
                    break;
                case 7:
                    i = pims.element7doughnut;
                    break;
                case 8:
                    i = pims.element8doughnut;
                    break;
                case 9:
                    i = pims.element9doughnut
            }
            var l = i.getAttribute("border");
            null == l && (l = "1px solid black");
            var r = i.getAttribute("height");
            null == r && (r = 350);
            var o = i.getAttribute("width");
            null == o && (o = 600);
            var a = i.getAttribute("dataFontSize");
            null == a && (a = 12);
            var s = i.getAttribute("fontSize");
            null == s && (s = 15);
            var d = i.getAttribute("imageDir");
            if (null == d) d = "null";
            else {
                var c = new Function(d);
                d = c()
            }
            var u = i.getAttribute("titleDisplay");
            null == u && (u = !1);
            var p = i.getAttribute("titleFontSize");
            null == p && (p = 25);
            var h = i.getAttribute("title");
            null == h && (h = "_dn_ Chart");
            var g = i.getAttribute("click");
            if (null != g) {
                var m = i.localName;
                n[String(m)] = new Function(g)
            }
            var f = new Function(i.getAttribute("callback")),
                b = i.getAttribute("params");
            "false" != e && pims(i.localName)._dn_(function() {
                params = b + "@" + i.localName, css = {
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
                    click: function(t, e, i) {
                        for (var l in pims.chartLabel = i, pims.chartValue = e, n) {
                            String(l) == t && n[l]()
                        }
                    }
                })
            })
        },
        reloadRadar: function(t, e) {
            var n = [],
                i = pims.elementradar;
            if (t) switch (t) {
                case 1:
                    i = pims.element1radar;
                    break;
                case 2:
                    i = pims.element2radar;
                    break;
                case 3:
                    i = pims.element3radar;
                    break;
                case 4:
                    i = pims.element4radar;
                    break;
                case 5:
                    i = pims.element5radar;
                    break;
                case 6:
                    i = pims.element6radar;
                    break;
                case 7:
                    i = pims.element7radar;
                    break;
                case 8:
                    i = pims.element8radar;
                    break;
                case 9:
                    i = pims.element9radar
            }
            var l = i.getAttribute("border");
            null == l && (l = "1px solid black");
            var r = i.getAttribute("height");
            null == r && (r = 350);
            var o = i.getAttribute("width");
            null == o && (o = 600);
            var a = i.getAttribute("dataFontSize");
            null == a && (a = 12);
            var s = i.getAttribute("fontSize");
            null == s && (s = 15);
            var d = i.getAttribute("titleDisplay");
            null == d && (d = !1);
            var c = i.getAttribute("titleFontSize");
            null == c && (c = 25);
            var u = i.getAttribute("title");
            null == u && (u = "_dn_ Chart");
            var p = i.getAttribute("click");
            if (null != p) {
                var h = i.localName;
                n[String(h)] = new Function(p)
            }
            var g = new Function(i.getAttribute("callback")),
                m = i.getAttribute("params");
            "false" != e && pims(i.localName).Radar(function() {
                params = m + "@" + i.localName, css = {
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
                    click: function(t, e, i) {
                        for (var l in pims.chartLabel = i, pims.chartValue = e, n) {
                            String(l) == t && n[l]()
                        }
                    }
                })
            })
        },
        reloadTable: function(t) {
            this.setBindTableElements();
            var r, o, l, e = pims.element;
            if (t) switch (t) {
                case 1:
                    e = pims.element1;
                    break;
                case 2:
                    e = pims.element2;
                    break;
                case 3:
                    e = pims.element3;
                    break;
                case 4:
                    e = pims.element4;
                    break;
                case 5:
                    e = pims.element5;
                    break;
                case 6:
                    e = pims.element6;
                    break;
                case 7:
                    e = pims.element7;
                    break;
                case 8:
                    e = pims.element8;
                    break;
                case 9:
                    e = pims.element9
            }
            var i = e.getAttribute("id"),
                n = String(e.localName).split("-");
            null == i && (i = n.slice(2, 3));
            var a = e.getAttribute("model");
            null == a && (a = String(n.slice(2, 3)).toLowerCase() + ".php");
            var s = e.getAttribute("header");
            null == s && (s = "");
            var d = e.getAttribute("border");
            null == d && (d = "0px solid black");
            var c = e.getAttribute("borderRadius");
            null == c && (c = 0), null != e.getAttribute("click") && (r = new Function(e.getAttribute("click")));
            var u = e.getAttribute("height");
            null == u && (u = window.innerHeight - 200);
            var p = e.getAttribute("width");
            null == p && (p = window.innerWidth - 30);
            var h = e.getAttribute("root");
            if (null == h) try {
                n = String(e.localName).split("-");
                h = String(n.slice(1, 2))
            } catch (t) {
                h = "getFIELD"
            }
            var g = e.getAttribute("whereClass");
            null == g && (g = "getWHERE");
            try {
                var m = e.getAttribute("params")
            } catch (t) {}
            var f = e.getAttribute("editCols");
            null != e.getAttribute("editCellCallback") && (o = new Function(e.getAttribute("editCellCallback")));
            var b = e.getAttribute("editWidth");
            null == b && (b = 50);
            var y = e.getAttribute("selectCols"),
                v = e.getAttribute("targetCol");
            null == v && (v = 0);
            var x = e.getAttribute("markSymbol");
            null == x && (x = "★"), null != e.getAttribute("selectCellCallback") && (l = new Function(e.getAttribute("selectCellCallback")));
            var w = new Function(e.getAttribute("callback"));
            pims(e.localName)._tb_({
                FIELD: {
                    class: h
                },
                WHERE: {
                    class: g
                }
            }, function() {
                params = m + "@" + e.localName, css = {
                    border: d,
                    borderRadius: c,
                    height: u,
                    width: p
                }, attr = {
                    id: i
                }, param = {
                    model: a,
                    header: s
                }, events = {
                    callback: function(t, e) {
                        try {
                            w()
                        } catch (t) {}
                        if (null != y) {
                            var i = [];
                            try {
                                i = y.split(",")
                            } catch (t) {
                                i = y
                            }
                            0 < i.length && pims(e).MultipleSelect(function() {
                                param = {
                                    markSymbol: x,
                                    targetCol: v,
                                    selectCol: y
                                }, events = {
                                    callback: function(t) {
                                        pims.data = [], pims.data = t;
                                        try {
                                            l()
                                        } catch (t) {}
                                    }
                                }
                            })
                        }
                    },
                    click: function(t, e, i, l) {
                        potato.table = t, potato.ri = e, potato.ci = i;
                        try {
                            r()
                        } catch (t) {}
                        var n = [];
                        try {
                            n = f.split(",")
                        } catch (t) {}
                        0 < n.length && -1 != n.indexOf(String(i)) && pims(l)._ec_(function() {
                            param = {
                                editWidth: b,
                                targetCol: i
                            }, events = {
                                callback: function(t, e, i, l) {
                                    pims.dataID = t, pims.value = e, pims.ci = i;
                                    try {
                                        o()
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
                3 < n.readyState && 200 == n.status && (pims_console = n.responseText, i(n.responseText))
            }, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.setRequestHeader("Chartset", "UTF-8"), n.send(l), n
        },
        _re_: function(t, e, i) {
            var l = "string" == typeof e ? e : Object.keys(e).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
            }).join("&");
            l += "& model=" + _pdir().potatoModelDir + t;
            var n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            return n.open("POST", "config/excel.php"), n.onreadystatechange = function() {
                3 < n.readyState && 200 == n.status && (pims_console = n.responseText, i(n.responseText))
            }, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.setRequestHeader("Chartset", "UTF-8"), n.setRequestHeader("Content-length", l.length), n.setRequestHeader("Connection", "close"), n.send(l), n
        },
        _rx_: function(t, e, i, l) {
            var n = "string" == typeof i ? i : Object.keys(i).map(function(t) {
                return encodeURIComponent(t) + "=" + encodeURIComponent(i[t])
            }).join("&");
            n += "& model=../apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/" + e;
            var r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            return r.open("POST", "config/xml.php"), r.onreadystatechange = function() {
                3 < r.readyState && 200 == r.status && (pims_console = r.responseText, l(t, r.responseText))
            }, r.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), r.setRequestHeader("Chartset", "UTF-8"), r.setRequestHeader("Content-length", n.length), r.setRequestHeader("Connection", "close"), r.send(n), r
        },
        second: function() {
            var t = (new Date).getSeconds();
            return t = parseInt(t) < 10 ? "0" + t : t
        },
        Select: function(t, e, i) {
            var l = this.getHTMLElement(),
                o = this.x,
                a = this._p_(i);
            a.id = o, l.createdCallback = function() {
                this.innerHTML = '<Select id="' + o + '"></Select> ';
                for (var t = (o.match(/-/g) || []).length, e = o.split("-"), i = e.slice(2, 3), l = 3; l <= t; l++) i = i + "_" + e.slice(l, l + 1);
                this.name = i, this.is = o, $("#" + o).css({
                    width: a.width + "px",
                    height: a.height + "px",
                    color: a.color,
                    background: a.background,
                    boxShadow: a.boxShadow,
                    display: a.display,
                    fontFamily: a.fontFamily,
                    fontWeight: a.fontWeight,
                    fontSize: a.fontSize + "px",
                    textAlign: a.textAlign,
                    padding: a.padding,
                    border: a.border,
                    position: a.position,
                    left: a.left + "px",
                    top: a.top + "px",
                    borderRadius: a.borderRadius + "px",
                    textTransform: a.textTransform,
                    cursor: "pointer"
                }).attr("multiple", a.multiple).mousemove(function() {
                    "null" != a.hoverBgColor && $(this).css("background", a.hoverBgColor), $(this).css("color", a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
                        padding: "10px 10px 0px 10px",
                        height: a.hoverHeight + "px",
                        width: a.hoverWidth + "px",
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30,
                        left: event.clientX - 50
                    })
                }).mouseout(function() {
                    "null" != a.hoverBgColor && $(this).css("background", a.background), $(this).css("color", a.i), $("#" + a.hoverId).hide().html("")
                }).change(function() {
                    try {
                        a.change()
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
                        a.click()
                    } catch (t) {}
                })
            }, this._rp_(t, e, function(t) {
                var e = document.getElementById(o),
                    i = JSON.parse(t),
                    l = e.length = 0;
                for (var n in i)
                    if ("undefined" != i[n].d0 && null != i[n].d0) {
                        var r = i[n].d1;
                        T = i[n].d0, e[l] = new Option(r, T), l++
                    }
                a.callback()
            });
            try {
                pimsElement = document.registerPotato(o, {
                    prototype: l,
                    extends: "div"
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(o, {
                        prototype: l,
                        extends: __p.prototype.l(_pcnst().lp)
                    })
                } catch (t) {}
            }
        },
        SELECT: function(t, e) {
            var o = this._p_(e),
                i = this.getHTMLElement(),
                l = this.x,
                a = String(l).split("-").slice(2, 3),
                n = l + ".php",
                r = "",
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
                    u = 0, r = "";
                    var m, f = [],
                        b = [],
                        y = 0;
                    for (var p in t[c]) {
                        if ("class" == p) {
                            y = 1, m = (h = X.prototype.getIdClass(t[c][p]))[0].field;
                            for (g = 0; g < h.length; g++) {
                                var v = String(h[g].pims).split("-");
                                f[v.slice(1, 2)] = h[g].field + ",", b[v.slice(1, 2)] = h[g].pims
                            }
                            u = parseFloat(v.slice(1, 2))
                        }
                        "class" != p && (1 == y ? f[u + 1] = p + "," : f[u] = p + ",", m = p, u++)
                    }
                    f[f.length] = m;
                    for (g = 0; g < f.length; g++) r += f[g];
                    s.fields = r
                }
            }
            0 < d ? s.fieldsLength = 2 : s = {}, i.createdCallback = function() {
                this.id = a + "_";
                var t = document.getElementById(l);
                try {
                    this.index = t.getAttribute("index"), this.field = t.getAttribute("field"), null == this.index && (this.index = 0), null == this.field && (this.field = 0)
                } catch (t) {}
                this.pims = l, this.innerHTML = '<Select id="pims-' + l + '"></Select> ', (t = document.getElementById(a)).style.width = o.width + "px", "string" == typeof o.width && (t.style.width = o.width), t.style.height = o.height + "px", "string" == typeof o.height && (t.style.height = o.height), t.style.background = o.background, t.style.boxShadow = o.boxShadow, t.style.color = o.color, t.style.display = o.display, t.style.fontFamily = o.fontFamily, t.style.fontWeight = o.fontWeight, t.style.fontSize = o.fontSize + "px", "string" == typeof o.fontSize && (t.style.fontSize = o.fontSize), t.style.textAlign = o.textAlign, t.style.padding = o.padding, t.style.border = o.border, t.style.position = o.position, t.style.left = o.left + "px", "string" == typeof o.left && (t.style.left = o.left), t.style.top = o.top + "px", "string" == typeof o.top && (t.style.top = o.top), t.style.borderRadius = o.borderRadius + "px", "string" == typeof o.borderRadius && (t.style.borderRadius = o.borderRadius), t.style.textTransform = o.textTransform, t.style.cursor = "pointer", t.multiple = o.multiple, X("#" + a).CLICK(function() {
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
                }), X("#" + a).MOUSEMOVE(function() {
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
                }), X("#" + a).MOUSEOUT(function() {
                    "null" != o.hoverBgColor && $(this).css("background", o.background), $(this).css("color", o.i), $("#" + o.hoverId).hide().html("")
                }), X("#" + l).CHANGE(function() {
                    try {
                        o.change()
                    } catch (t) {}
                })
            }, this._rp_(n, s, function(t) {
                var e = document.getElementById(a),
                    i = JSON.parse(t),
                    l = e.length = 0;
                for (var n in i)
                    if ("undefined" != i[n][0] && null != i[n][0]) {
                        var r = i[n][1];
                        T = i[n][0], e[l] = new Option(r, T), l++
                    }
                o.callback()
            });
            try {
                pimsElement = document.registerPotato(l, {
                    prototype: i,
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
            _potatoArray = [];
            for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e++) {
                var i = t[e].getAttribute("bind");
                try {
                    if (null != i && -1 != i.indexOf(",")) {
                        var l = String(i).split(","),
                            n = String(t[e].getAttribute("id")).split("_").slice(0, 1),
                            r = l[2];
                        null == r && (r = n), _potatoArray.push({
                            id: l[1],
                            field: r,
                            value: document.getElementById(n).value,
                            bind: l[0]
                        })
                    }
                } catch (t) {}
            }
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
                    if (_potatoId[c] = u, null != e[t].getAttribute("id")) _potatoBindId[c] = e[t].getAttribute("id");
                    else {
                        var p = String(e[t].tagName).split("-");
                        _potatoBindId[c] = String(p.slice(2, 3)).toLowerCase()
                    }
                    c++
                }
                var h = String(e[t].tagName).split("-");
                if (-1 != this.If(h.slice(0, 1))) {
                    var g, m, f, b = String(e[t].tagName).split("-");
                    if ("BUTTON" == b.slice(1, 2)) {
                        var y = e[t].getAttribute("id");
                        null == y && (y = b.slice(2, 3));
                        var v = e[t].getAttribute("background");
                        null == v && (v = "#eeeeee");
                        var x = e[t].getAttribute("border");
                        null == x && (x = "1px solid black");
                        var w = e[t].getAttribute("borderRadius");
                        null == w && (w = 5);
                        var A = e[t].getAttribute("boxShadow");
                        null == A && (A = "0 0 0px rgba(0,0,0,0)");
                        var k = e[t].getAttribute("color");
                        null == k && (k = "black");
                        var S = e[t].getAttribute("display");
                        null == S && (S = "block");
                        var _ = e[t].getAttribute("fontFamily");
                        null == _ && (_ = "Arial");
                        var C = e[t].getAttribute("fontSize");
                        null == C && (C = 15);
                        var I = e[t].getAttribute("fontWeight");
                        null == I && (I = "normal");
                        var T = e[t].getAttribute("submit"),
                            E = e[t].getAttribute("fieldOther"),
                            B = e[t].getAttribute("height");
                        null == B && (B = 30);
                        var F = e[t].getAttribute("hoverBgColor");
                        null == F && (F = "yellow");
                        var L = e[t].getAttribute("hoverText");
                        null == L && (L = "");
                        var N = e[t].getAttribute("left");
                        null == N && (N = 0);
                        var R = e[t].getAttribute("margin");
                        null == R && (R = "2px 2px 2px 2px");
                        var D = e[t].getAttribute("padding");
                        null == D && (D = "5px 0px 5px 5px");
                        var O = e[t].getAttribute("paddingLeft");
                        null == O && (O = 1);
                        var M = e[t].getAttribute("paddingTop");
                        null == M && (M = 1);
                        var z = e[t].getAttribute("params"),
                            H = e[t].getAttribute("position");
                        null == H && (H = "static");
                        var P = e[t].getAttribute("textAlign");
                        null == P && (P = "center");
                        var W = e[t].getAttribute("top");
                        null == W && (W = 0);
                        var j = e[t].getAttribute("width");
                        null == j && (j = 100);
                        var K, V, U = e[t].getAttribute("whereClass");
                        pims(e[t].localName)._bt_(function() {
                            if (where = U + "@" + e[t].localName, field = T + "@" + e[t].localName, fieldOther = E + "@" + e[t].localName, params = z + "@" + e[t].localName, css = {
                                    background: v,
                                    border: x,
                                    borderRadius: w,
                                    boxShadow: A,
                                    color: k,
                                    display: S,
                                    fontFamily: _,
                                    fontSize: C,
                                    fontWeight: I,
                                    height: B,
                                    hoverBgColor: F,
                                    left: N,
                                    margin: R,
                                    padding: D,
                                    position: H,
                                    paddingTop: M,
                                    paddingLeft: O,
                                    textAlign: P,
                                    top: W,
                                    width: j
                                }, null != e[t].getAttribute("value") && null != e[t].getAttribute("image") ? attr = {
                                    value: e[t].getAttribute("value"),
                                    image: e[t].getAttribute("image"),
                                    hoverText: L,
                                    id: y
                                } : null != e[t].getAttribute("value") && null == e[t].getAttribute("image") ? attr = {
                                    value: e[t].getAttribute("value"),
                                    hoverText: L
                                } : null == e[t].getAttribute("value") && null != e[t].getAttribute("image") && (attr = {
                                    image: e[t].getAttribute("image"),
                                    hoverText: L
                                }), null != e[t].getAttribute("click")) try {
                                K = new Function(e[t].getAttribute("click")), null != e[t].getAttribute("callback") && (V = new Function(e[t].getAttribute("callback"))), events = {
                                    click: K,
                                    callback: V
                                }
                            } catch (t) {} else try {
                                try {
                                    K = new Function("_pims." + String(b.slice(2, 3)).toLowerCase() + "()")
                                } catch (t) {
                                    K = new Function(y + "()")
                                }
                                null != e[t].getAttribute("callback") && (V = new Function(e[t].getAttribute("callback"))), events = {
                                    click: K,
                                    callback: V
                                }
                            } catch (t) {}
                        })
                    }
                    if ("CALENDAR" == b.slice(1, 2)) {
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
                        null == rt && (rt = b.slice(2, 3));
                        var ot = e[t].getAttribute("class");
                        if (null == ot && (ot = "getFIELD"), $(e[t].localName).addClass(ot), null != (Te = e[t].getAttribute("change"))) {
                            h = e[t].localName;
                            l[String(h)] = new Function(Te)
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
                                id: rt
                            }, null != Te && (events = {
                                change: function(t) {
                                    for (var e in l) {
                                        String(e) == t && l[e]()
                                    }
                                }
                            })
                        })
                    }
                    if ("KEYPAD" == b.slice(1, 2)) {
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
                        var bt = e[t].getAttribute("id");
                        null == bt && (bt = String(b.slice(2, 3)).toLowerCase());
                        var yt = e[t].getAttribute("border");
                        null == yt && (yt = "1px solid black");
                        var vt = e[t].getAttribute("class");
                        null == vt && (vt = "getFIELD"), $(e[t].localName).addClass(vt);
                        var xt = new Function(e[t].getAttribute("change")),
                            wt = new Function(e[t].getAttribute("click"));
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
                                border: yt
                            }, attr = {
                                value: mt,
                                id: bt,
                                name: bt
                            }, events = {
                                change: xt,
                                click: wt
                            }
                        })
                    }
                    if ("LIST" == b.slice(1, 2)) {
                        var At = e[t].getAttribute("background");
                        null == At && (At = "#ffffff");
                        var kt = e[t].getAttribute("borderRadius");
                        null == kt && (kt = 7);
                        var St = e[t].getAttribute("fontSize");
                        null == St && (St = 15);
                        var _t = e[t].getAttribute("height");
                        null == _t && (_t = 30);
                        var Ct = e[t].getAttribute("hoverBgColor");
                        null == Ct && (Ct = "yellow");
                        var It = e[t].getAttribute("hoverText");
                        null == It && (It = "");
                        var Tt = e[t].getAttribute("value");
                        null == Tt && (Tt = "0");
                        var Et = e[t].getAttribute("width");
                        null == Et && (Et = 100);
                        var Bt = e[t].getAttribute("widthTable");
                        null == Bt && (Bt = 550);
                        var $t = e[t].getAttribute("heightTable");
                        null == $t && ($t = 450);
                        var Ft = e[t].getAttribute("id");
                        null == Ft && (Ft = String(b.slice(2, 3)).toLowerCase());
                        var Lt = e[t].getAttribute("model");
                        null == Lt && (Lt = String(b.slice(2, 3)).toLowerCase() + ".php");
                        var Nt = e[t].getAttribute("class");
                        null == Nt && (Nt = "getFIELD"), $(e[t].localName).addClass(Nt);
                        var Rt = e[t].getAttribute("whereClass"),
                            Dt = e[t].getAttribute("params"),
                            Xt = e[t].getAttribute("onscroll");
                        if (null != (Ie = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            n[String(h)] = new Function(Ie)
                        } else try {
                            h = e[t].localName;
                            n[String(h)] = new Function(String(b.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (oe = e[t].getAttribute("callback"))) {
                            h = e[t].localName;
                            i[String(h)] = new Function(oe)
                        }
                        var Ot = e[t].getAttribute("topTable"),
                            Mt = e[t].getAttribute("leftTable"),
                            zt = e[t].getAttribute("display"),
                            Ht = String(e[t].localName);
                        pims(Ht)._lt_(function() {
                            try {
                                where = Rt + "@" + Ht
                            } catch (t) {}
                            try {
                                params = Dt + "@" + Ht
                            } catch (t) {}
                            css = {
                                display: zt,
                                height: _t,
                                width: Et,
                                fontSize: St,
                                hoverBgColor: Ct,
                                borderRadius: kt,
                                background: At,
                                marginTop: Ot + "_" + Ht,
                                marginLeft: Mt + "_" + Ht,
                                widthTable: Bt + "_" + Ht,
                                heightTable: $t + "_" + Ht
                            }, param = {
                                model: Lt
                            }, attr = {
                                onscroll: Xt,
                                value: Tt,
                                hoverText: It,
                                id: Ft
                            }, events = {
                                click: function(t, e, i) {
                                    for (var l in pims.table = t, pims.ci = i, n) {
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
                    if ("MENU" == b.slice(1, 2)) {
                        var Pt = e[t].getAttribute("background");
                        null == Pt && (Pt = "#ffffff");
                        var Wt = e[t].getAttribute("border");
                        null == Wt && (Wt = "0px");
                        var jt = e[t].getAttribute("menuModel");
                        null == jt && (jt = "null");
                        var Kt = e[t].getAttribute("menuTitle");
                        null == Kt && (Kt = "null");
                        var Vt = e[t].getAttribute("padding"),
                            Ut = e[t].getAttribute("color");
                        null == Ut && (Ut = "BLUE");
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
                        null == le && (le = String(b.slice(2, 3)).toLowerCase());
                        var ne = e[t].getAttribute("model");
                        null == ne && (ne = String(b.slice(2, 3)).toLowerCase() + ".php");
                        var re = e[t].getAttribute("class");
                        null == re && (re = "getFIELD"), $(e[t].localName).addClass(re);
                        var oe, ae = e[t].getAttribute("whereClass"),
                            se = e[t].getAttribute("params"),
                            de = e[t].getAttribute("onscroll");
                        if (null != (Ie = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            d[String(h)] = new Function(Ie)
                        } else try {
                            h = e[t].localName;
                            d[String(h)] = new Function(String(b.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (oe = e[t].getAttribute("callback"))) {
                            h = e[t].localName;
                            s[String(h)] = new Function(oe)
                        }
                        var ce = e[t].getAttribute("topTable"),
                            ue = e[t].getAttribute("leftTable"),
                            pe = e[t].getAttribute("display");
                        Ht = String(e[t].localName);
                        pims(Ht)._m_(function() {
                            try {
                                where = ae + "@" + Ht
                            } catch (t) {}
                            try {
                                params = se + "@" + Ht
                            } catch (t) {}
                            css = {
                                display: pe,
                                height: Gt,
                                width: te,
                                color: Ut,
                                fontSize: qt,
                                hoverBgColor: Jt,
                                borderRadius: Yt,
                                border: Wt,
                                background: Pt,
                                padding: Vt,
                                marginTop: ce + "_" + Ht,
                                marginLeft: ue + "_" + Ht,
                                widthTable: ee + "_" + Ht,
                                heightTable: ie + "_" + Ht
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
                                    for (var l in pims.table = t, pims.ci = i, d) {
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
                    if ("TABLE" == b.slice(1, 2) && (pims.element = e[t], _potatoTableId = 0, X.prototype.reloadTable()), "TABLE1" == b.slice(1, 2) && (pims.element1 = e[t], _potatoTableId = 1, window.onload = function() {
                            X.prototype.reloadTable(1)
                        }), "TABLE2" == b.slice(1, 2) && (pims.element2 = e[t], _potatoTableId = 2, window.onload = function() {
                            X.prototype.reloadTable(2)
                        }), "TABLE3" == b.slice(1, 2) && (pims.element3 = e[t], _potatoTableId = 3, window.onload = function() {
                            X.prototype.reloadTable(3)
                        }), "TABLE4" == b.slice(1, 2) && (pims.element4 = e[t], _potatoTableId = 4, window.onload = function() {
                            X.prototype.reloadTable(4)
                        }), "TABLE5" == b.slice(1, 2) && (pims.element5 = e[t], _potatoTableId = 5, window.onload = function() {
                            X.prototype.reloadTable(5)
                        }), "TABLE6" == b.slice(1, 2) && (pims.element6 = e[t], _potatoTableId = 6, window.onload = function() {
                            X.prototype.reloadTable(6)
                        }), "TABLE7" == b.slice(1, 2) && (pims.element7 = e[t], _potatoTableId = 7, window.onload = function() {
                            X.prototype.reloadTable(7)
                        }), "TABLE8" == b.slice(1, 2) && (pims.element8 = e[t], _potatoTableId = 8, window.onload = function() {
                            X.prototype.reloadTable(8)
                        }), "TABLE9" == b.slice(1, 2) && (pims.element9 = e[t], _potatoTableId = 9, window.onload = function() {
                            X.prototype.reloadTable(9)
                        }), "TEXT" == b.slice(1, 2)) {
                        var he = e[t].getAttribute("background");
                        null == he && (he = "#ffffff");
                        var ge = e[t].getAttribute("border");
                        null == ge && (ge = "1px solid black");
                        var me = e[t].getAttribute("borderRadius");
                        null == me && (me = 7);
                        var fe = e[t].getAttribute("color");
                        null == fe && (fe = "black");
                        var be = e[t].getAttribute("cursor");
                        null == be && (be = "default");
                        var ye = e[t].getAttribute("display");
                        null == ye && (ye = "block");
                        var ve = e[t].getAttribute("disabled"),
                            xe = e[t].getAttribute("fontSize");
                        null == xe && (xe = 15);
                        var we = e[t].getAttribute("height");
                        null == we && (we = 30);
                        var Ae = e[t].getAttribute("hoverBgColor");
                        null == Ae && (Ae = "yellow");
                        var ke = e[t].getAttribute("hoverText");
                        null == ke && (ke = "");
                        var Se = e[t].getAttribute("value");
                        null == Se && (Se = "0");
                        var _e = e[t].getAttribute("width");
                        null == _e && (_e = 100);
                        var Ce = e[t].getAttribute("id");
                        null == Ce && (Ce = b.slice(2, 3));
                        var Ie, Te, Ee = e[t].getAttribute("class");
                        if (null == Ee && (Ee = "getFIELD"), $(e[t].localName).addClass(Ee), null != (Ie = e[t].getAttribute("click"))) {
                            h = e[t].localName;
                            r[String(h)] = new Function(Ie)
                        }
                        if (null != (Te = e[t].getAttribute("change"))) {
                            h = e[t].localName;
                            a[String(h)] = new Function(Te)
                        }
                        var Be = e[t].getAttribute("keyup");
                        if (null != Be) {
                            h = e[t].localName;
                            o[String(h)] = new Function(Be)
                        }
                        pims(e[t].localName)._tx_(function() {
                            css = {
                                height: we,
                                width: _e,
                                fontSize: xe,
                                hoverBgColor: Ae,
                                border: ge,
                                borderRadius: me,
                                background: he,
                                display: ye,
                                color: fe,
                                cursor: be
                            }, attr = {
                                disabled: ve,
                                value: Se,
                                hoverText: ke,
                                id: Ce
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
                    if ("BAR" == b.slice(1, 2)) pims.elementbar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(0) : X.prototype.reloadBar(0, "false");
                    if ("BAR1" == b.slice(1, 2)) pims.element1bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(1) : X.prototype.reloadBar(1, "false");
                    if ("BAR2" == b.slice(1, 2)) pims.element2bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(2) : X.prototype.reloadBar(2, "false");
                    if ("BAR3" == b.slice(1, 2)) pims.element3bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(3) : X.prototype.reloadBar(3, "false");
                    if ("BAR4" == b.slice(1, 2)) pims.element4bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(4) : X.prototype.reloadBar(4, "false");
                    if ("BAR5" == b.slice(1, 2)) pims.element5bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(5) : X.prototype.reloadBar(5, "false");
                    if ("BAR6" == b.slice(1, 2)) pims.element6bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(6) : X.prototype.reloadBar(6, "false");
                    if ("BAR7" == b.slice(1, 2)) pims.element7bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(7) : X.prototype.reloadBar(7, "false");
                    if ("BAR8" == b.slice(1, 2)) pims.element8bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(8) : X.prototype.reloadBar(8, "false");
                    if ("BAR9" == b.slice(1, 2)) pims.element9bar = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadBar(9) : X.prototype.reloadBar(9, "false");
                    if ("DOUGHNUT" == b.slice(1, 2)) pims.elementdoughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(0) : X.prototype.reloadDoughnut(0, "false");
                    if ("DOUGHNUT1" == b.slice(1, 2)) pims.element1doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(1) : X.prototype.reloadDoughnut(1, "false");
                    if ("DOUGHNUT2" == b.slice(1, 2)) pims.element2doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(2) : X.prototype.reloadDoughnut(2, "false");
                    if ("DOUGHNUT3" == b.slice(1, 2)) pims.element3doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(3) : X.prototype.reloadDoughnut(3, "false");
                    if ("DOUGHNUT4" == b.slice(1, 2)) pims.element4doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(4) : X.prototype.reloadDoughnut(4, "false");
                    if ("DOUGHNUT5" == b.slice(1, 2)) pims.element5doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(5) : X.prototype.reloadDoughnut(5, "false");
                    if ("DOUGHNUT6" == b.slice(1, 2)) pims.element6doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(6) : X.prototype.reloadDoughnut(6, "false");
                    if ("DOUGHNUT7" == b.slice(1, 2)) pims.element7doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(7) : X.prototype.reloadDoughnut(7, "false");
                    if ("DOUGHNUT8" == b.slice(1, 2)) pims.element8doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(8) : X.prototype.reloadDoughnut(8, "false");
                    if ("DOUGHNUT9" == b.slice(1, 2)) pims.element9doughnut = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadDoughnut(9) : X.prototype.reloadDoughnut(9, "false");
                    if ("RADAR" == b.slice(1, 2)) pims.elementradar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(0) : X.prototype.reloadRadar(0, "false");
                    if ("RADAR1" == b.slice(1, 2)) pims.element1radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(1) : X.prototype.reloadRadar(1, "false");
                    if ("RADAR2" == b.slice(1, 2)) pims.element2radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(2) : X.prototype.reloadRadar(2, "false");
                    if ("RADAR3" == b.slice(1, 2)) pims.element3radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(3) : X.prototype.reloadRadar(3, "false");
                    if ("RADAR4" == b.slice(1, 2)) pims.element4radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(4) : X.prototype.reloadRadar(4, "false");
                    if ("RADAR5" == b.slice(1, 2)) pims.element5radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(5) : X.prototype.reloadRadar(5, "false");
                    if ("RADAR6" == b.slice(1, 2)) pims.element6radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(6) : X.prototype.reloadRadar(6, "false");
                    if ("RADAR7" == b.slice(1, 2)) pims.element7radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(7) : X.prototype.reloadRadar(7, "false");
                    if ("RADAR8" == b.slice(1, 2)) pims.element8radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(8) : X.prototype.reloadRadar(8, "false");
                    if ("RADAR9" == b.slice(1, 2)) pims.element9radar = e[t], null == (f = e[t].getAttribute("onload")) && (f = "true"), "true" == f ? X.prototype.reloadRadar(9) : X.prototype.reloadRadar(9, "false")
                }
            }
            _potatoArray.sort(function(t, e) {
                var i = t.id,
                    l = e.id,
                    n = 0;
                return l < i ? n = 1 : i < l && (n = -1), n
            });
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
                for (var r = X.prototype.getIdClass(t), o = (t = [], 0); o < r.length; o++) "length" != r[o].name && (t[r[o].name] = pims(r[o].is).value());
            this._re_(n, t, function(t) {
                try {
                    i.callback()
                } catch (t) {}
            })
        },
        Table: function(t, e) {
            var d = this._p_(e),
                c = this.x,
                i = c + ".php";
            if (null != d.model && (i = d.model + ".php"), d.id = c, "string" == typeof t)
                for (var l = X.prototype.getIdClass(t), n = (t = [], 0); n < l.length; n++) "length" != l[n].name && (t[l[n].name] = pims(l[n].is).value());
            this._rp_(i, t, function(t) {
                "tableId" == d.tableId && (d.tableId = "table_" + c);
                var e = JSON.parse(t),
                    i = "<table id=" + d.tableId + " class=" + d.cls + ">";
                if (null != d.data.d0) {
                    var l, n = (new Array, 0);
                    for (l in i += "<tr>", d.data) i += "<th>" + d.data["d" + n] + "</th>", n += 1;
                    for (var r in i += "</tr>", e)
                        if ("undefined" != e[r].d0 && null != e[r].d0) {
                            i += "<tr>";
                            for (var o = 0; o < n; o++) i += "<td>" + e[r]["d" + o] + "</td>";
                            i += "</tr>"
                        }
                } else {
                    n = 0;
                    for (l in i += "<tr>", e[0]) "" != e[0][l] ? i += "<th>" + e[0][l] + "</th>" : i += "<th style='display:none'>" + e[0][l] + "</th>", n++;
                    for (var r in i += "</tr>", e)
                        if ("undefined" != e[r][0] && null != e[r][0] && 0 < r) {
                            i += "<tr>";
                            for (o = 0; o < n; o++) "" != e[0][o] ? i += "<td>" + e[r][o] + "</td>" : i += "<td style='display:none'>" + e[r][o] + "</td>";
                            i += "</tr>"
                        }
                }
                i += "</table>", $("#" + c).html(i).show().css({
                    overflow: "auto",
                    width: d.width + "px",
                    height: d.height + "px",
                    background: d.background,
                    display: d.display,
                    border: d.border,
                    position: d.position,
                    left: d.left + "px",
                    top: d.top + "px",
                    borderRadius: d.borderRadius + "px"
                });
                var a = document.getElementById(d.tableId),
                    s = $("#" + d.tableId + " tbody").on("click", "tr", function() {
                        X.prototype.tableHighlight($(this)[0].rowIndex, d.tableId)
                    });
                $(document).keydown(function(t) {
                    if (s.find(".highlight").length)
                        if (40 == t.which) {
                            var e = s.find(".highlight").next();
                            X.prototype.tableHighlight(e[0].rowIndex, d.tableId)
                        } else if (38 == t.which) {
                        var i = s.find(".highlight").prev();
                        X.prototype.tableHighlight(i[0].rowIndex, d.tableId)
                    }
                });
                try {
                    d.callback(a, d.tableId)
                } catch (t) {}
                $("#" + d.tableId + " td").click(function() {
                    try {
                        $("table tbody tr").removeClass("highlight");
                        for (var t = 0; t < n; t++) a.rows[ri].cells[t].style.background = "#dfdfdf"
                    } catch (t) {}
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (t = 0; t < n; t++) a.rows[ri].cells[t].style.background = "yellow";
                    d.click(a.rows[ri], ri, ci)
                })
            })
        },
        _tb_: function(t, i) {
            for (var d = this._p_(i), l = this.getHTMLElement(), n = this.x, r = [], c = d.id, u = String(d.header).split(","), o = 0, a = 0; a < _potatoArray.length; a++) c == String(_potatoArray[a].bind) && (r[o] = _potatoArray[a].field + "&" + _potatoArray[a].value, o++);
            l.createdCallback = function() {
                this.innerHTML = '<div id="div-' + c + '" ></div> '
            }, this._rp_(d.model, r, function(t) {
                var i = JSON.parse(t);
                "tableId" == d.tableId && (d.tableId = "table-" + c);
                var l = "<table id=" + d.tableId + " style='border-collapse:collapse;width:99%'>";
                if (null != u && 0 < u.length) {
                    var n = 0;
                    for (e in l += "<tr>", u) "" != u[e] ? l += "<th style='border:1px solid black'>" + u[e] + "</th>" : l += "<th style='display:none'>" + u[e] + "</th>", n++;
                    for (var r in l += "</tr>", i)
                        if ("undefined" != i[r][0] && null != i[r][0] && 0 <= r) {
                            l += "<tr>";
                            for (var o = 0; o < n; o++) "" != u[o] && null != u[o] ? l += "<td style='border:1px solid black;padding-left:5px'>" + i[r][o] + "</td>" : l += "<td style='display:none'>" + i[r][o] + "</td>";
                            l += "</tr>"
                        }
                } else {
                    n = 0;
                    for (e in l += "<tr>", i[0]) "" != i[0][e] ? l += "<th style='border:1px solid black'>" + i[0][e] + "</th>" : l += "<th style='display:none'>" + i[0][e] + "</th>", n++;
                    for (var r in l += "</tr>", i)
                        if ("undefined" != i[r][0] && null != i[r][0] && 0 < r) {
                            l += "<tr>";
                            for (o = 0; o < n; o++) "" != i[0][o] && null != i[0][o] && "undefined" != i[0][o] ? l += "<td style='border:1px solid black'>" + i[r][o] + "</td>" : l += "<td style='display:none'>" + i[r][o] + "</td>";
                            l += "</tr>"
                        }
                }
                l += "</table>", $("#div-" + c).html(l).show().css({
                    overflow: "auto",
                    width: d.width + "px",
                    height: d.height + "px",
                    background: d.background,
                    display: d.display,
                    border: d.border,
                    position: d.position,
                    left: d.left + "px",
                    top: d.top + "px",
                    borderRadius: d.borderRadius + "px"
                });
                var a = document.getElementById(d.tableId),
                    s = $("#" + d.tableId + " tbody");
                $(document).keydown(function(t) {
                    if (s.find(".highlight").length)
                        if (40 == t.which) {
                            var e = s.find(".highlight").next();
                            X.prototype.tableHighlight(e[0].rowIndex, d.tableId)
                        } else if (38 == t.which) {
                        var i = s.find(".highlight").prev();
                        X.prototype.tableHighlight(i[0].rowIndex, d.tableId)
                    }
                });
                try {
                    a = document.getElementById(d.tableId);
                    d.callback(a, d.tableId)
                } catch (t) {}
                $("#" + d.tableId + " td").click(function() {
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (var t = 0; t < n; t++) 0;
                    d.click(a.rows[ri], ri, ci, d.tableId)
                })
            });
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: l
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
        tableHighlight: function(t, e) {
            t + 1 > $("#" + e + " tbody tr").length && (t = 0), 0 < $("#" + e + " tbody tr:eq(" + t + ")").length && ($("#" + e + " tbody tr").removeClass("highlight"), $("#" + e + " tbody tr:eq(" + t + ")").addClass("highlight"))
        },
        Text: function(t) {
            var e = this.getHTMLElement(),
                n = this.x,
                r = this._p_(t);
            r.id = n, e.createdCallback = function() {
                for (var t = (n.match(/-/g) || []).length, e = n.split("-"), i = e.slice(2, 3), l = 3; l <= t; l++) i = i + "_" + e.slice(l, l + 1);
                this.name = i, this.is = n, this.innerHTML = '<input type="text" id="' + n + '" class="' + r.className + '"> ', $("#" + n).css({
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
                    borderRadius: r.borderRadius + "px",
                    textTransform: r.textTransform,
                    cursor: r.cursor
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
            };
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: e,
                    extends: "div"
                })
            } catch (t) {}
        },
        _tx_: function(t) {
            var l = this._p_(t),
                e = this.getHTMLElement(),
                n = this.x,
                r = l.id;
            e.createdCallback = function() {
                this.id = r + "_", X.prototype.getAttribute(this, n).index, X.prototype.getAttribute(this, n).field, this.pims = n, this.innerHTML = '<input type="text" id="' + r + '" class="' + l.className + '"> ', $("#" + r).css({
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
                    disabled: l.disabled,
                    type: l.type
                }).mousemove(function() {
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
                }).keyup(function(t) {
                    for (var e = 0; e < _potatoId.length; e++)
                        if (r == String(_potatoId[e])) {
                            var i = String(_potatoBindId[e]);
                            document.getElementById(i).innerText = document.getElementById(r).value
                        }
                    try {
                        l.keyup(n, t)
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
                        l.click(n)
                    } catch (t) {}
                })
            };
            try {
                pimsElement = document.registerPotato(n, {
                    prototype: e
                })
            } catch (t) {
                try {
                    pimsElement = document.registerPotato(n, {
                        prototype: e,
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
            return 12 <= e && "pm", i < 10 && (i = "0" + i), l < 10 && (l = "0" + l), e + ":" + i + ":" + l
        },
        Timepad: function(t) {
            var e = this.getHTMLElement(),
                r = this.x,
                o = this._p_(t);
            o.id = r, e.createdCallback = function() {
                for (var t = (r.match(/-/g) || []).length, e = r.split("-"), i = e.slice(2, 3), l = 3; l <= t; l++) i = i + "_" + e.slice(l, l + 1);
                this.name = i;
                var n = '<div id="div_' + (this.is = r) + '"> ';
                n += '<input type="text" id="' + r + '"> ', n += '<div class="keypad" id="keypad-' + r + '"></div> ', n += "</div> ", this.innerHTML = n, _fieldtime = document.getElementById("input-" + r), $("#div_" + r).css({
                    display: o.display,
                    position: o.position,
                    left: o.left + "px",
                    top: o.top + "px"
                }), $("#" + r).css({
                    width: o.width + "px",
                    height: o.height + "px",
                    color: o.color,
                    display: o.display,
                    background: o.background,
                    boxShadow: o.boxShadow,
                    fontFamily: o.fontFamily,
                    fontWeight: o.fontWeight,
                    fontSize: o.fontSize + "px",
                    textAlign: o.textAlign,
                    padding: o.padding,
                    border: o.border,
                    borderRadius: o.borderRadius + "px",
                    cursor: "pointer"
                }).attr("value", o.value).mousemove(function() {
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
                }).click(function() {
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + r, $(".keypad").hide(), $("#keypad-" + r).show().css({
                        position: "absolute",
                        top: event.clientY + 20 + o.topKey,
                        left: event.clientX + o.leftKey
                    }), $("#TimePad").show(), _fieldtime = document.getElementById(r)
                }), $("#keypad-" + r).load("config/timepad.htm").css({
                    width: "200px",
                    height: "150px",
                    margin: o.marginKey,
                    display: o.displayKey
                })
            };
            try {
                pimsElement = document.registerPotato(r, {
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
    (self.oRange = e).getBookmark();
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
! function(o) {
    o.fn.extend({
        box: function(t, e, i, l) {
            var n = o(this).attr("id");
            l ? "free" == l ? (_ = new PIMS, _.$ListFree(n, t, e, i)) : (_ = new PIMS, _.$ListFix(n, t, e, i)) : (_ = new PIMS, _.$ListFree(n, t, e, i))
        },
        excel: function(t, e) {
            _ = new PIMS, _.$_el_(o(this).attr("id"), t, e)
        },
        keyboard: function(t, e) {
            _ = new PIMS, _.$Keyboard(o(this).attr("id"), t, e), o(".tool_key_cls_o,.tool_key_cls_n").show()
        },
        keypad: function(t, e) {
            _ = new PIMS, _.$Keypad(o(this).attr("id"), t, e), o(".tool_key_cls_o,.tool_key_cls_n").show()
        },
        timepad: function(t, e) {
            _ = new PIMS, _.$Timepad(o(this).attr("id"), t, e)
        },
        multiselect: function(t, e, i, l) {
            _ = new PIMS, _.$MultipleSelect(t, o(this).attr("id"), e, i, l)
        },
        obj: function() {
            return document.getElementById(o(this).attr("id"))
        },
        pop: function(t) {
            var e = o(this).attr("id");
            _ = new PIMS, _.$Pop(t, e)
        },
        scrollx: function(t, e, i) {
            for (var l = o(this).attr("id"), n = document.getElementsByClassName(t), r = 0; r < n.length; r++) parseFloat(document.getElementById(l).scrollLeft) > e ? n[r].style.left = i ? parseFloat(document.getElementById(l).scrollLeft) + parseFloat(i) + "px" : document.getElementById(l).scrollLeft + "px" : n[r].style.left = "0px"
        },
        scrolly: function(t, e, i) {
            for (var l = o(this).attr("id"), n = document.getElementsByClassName(t), r = 0; r < n.length; r++) parseFloat(document.getElementById(l).scrollTop) > e ? n[r].style.top = i ? parseFloat(document.getElementById(l).scrollTop) + parseFloat(i) + "px" : document.getElementById(l).scrollTop + "px" : n[r].style.top = "0px"
        }
    }), o.extend({
        collapse: function(t, e, i) {
            var l = 1440,
                n = setInterval(function() {
                    0 != l ? (l -= 40, o(".link", t).stop().animate({
                        rotate: "+=40deg"
                    }, 0)) : clearInterval(n)
                }, 10);
            t.stop().animate({
                width: e + "px",
                height: i + "px"
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
        expand: function(t, e, i) {
            var l = 0,
                n = setInterval(function() {
                    1440 != l ? (l += 40, o(".link", t).stop().animate({
                        rotate: "+=-40deg"
                    }, 0)) : clearInterval(n)
                }, 10);
            t.stop().animate({
                width: e + "px",
                height: i + "px"
            }, 500).find(".item_content").fadeIn(400, function() {
                o(this).find("p").stop(!0, !0).fadeIn(600)
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
            e = e || "-", "today" == t && (t = this.year() + "-" + this.month() + "-" + this.day());
            var l = t.split(e),
                n = new Date(l[0] + "/" + l[1] + "/" + l[2]);
            n.setDate(n.getDate() + i);
            var r = n.getFullYear(),
                o = n.getMonth() + 1;
            o = parseInt(o) < 10 ? "0" + o : o;
            var a = n.getDate();
            return r + e + o + e + (a = parseInt(a) < 10 ? "0" + a : a)
        },
        load: function(t, e, i) {
            document.name = t;
            var l = document.registerElement("pims-loading");
            document.body.appendChild(new l), o("pims-loading").html('Loading...<img src="lib/images/img-loading.gif" style="width:35px;height:35px"/>').show().css({
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
                    0 == --n && (o("#body").show(), o("#PIMS").html("").hide(), i(), o("body").css("background", e), clearInterval(r))
                }, 1e3)
        },
        pop: function(t, e, i, l) {
            newwindow = this.getWindow(t, e, i, l), window.focus && newwindow.focus()
        }
    })
}($), PIMS();
