/*
    Copyright (C) 2019  LIM KIAN SENG
    potato.js is licensed under the GNU General Public License v3.0
    This library is free: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    This library is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
    
    version 1.1.0 - enable the static data for OList, OTable and OChart 08th Nov 2019
    version 1.1.1 - improve and add additional attribute to OList. OList now can use the
                    header like OTable to create the header data (revised on 14th Dec 2019)
    version 1.2.0 - add the drag and drop function to the OTable and some other minor improvement on the code (revised on 17th Dec 2019)                
*/
var $POTATO = function() {
        return $O$I.init()
    },
    $O$Array = [
        []
    ],
    $O$B, $O$BindId = new Array,
    $O$BindIndex = new Array,
    $O$BindIndexId = new Array,
    $O$Element = new Array,
    $O$F, $O$I = {
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
            $O$T: new Object,
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
            $O$P = this.settings, Oget = this.settings, $O$ = this.settings;
            var t = new Date,
                e = t.getDate(),
                i = t.getHours(),
                n = t.getMinutes(),
                l = t.getMonth() + 1,
                a = t.getSeconds(),
                r = t.getFullYear();
            $O$P.day = parseInt(e) < 10 ? "0" + e : e, $O$P.hour = parseInt(i) < 10 ? "0" + i : i, $O$P.minute = parseInt(n) < 10 ? "0" + n : n, $O$P.month = parseInt(l) < 10 ? "0" + l : l, $O$P.second = parseInt(a) < 10 ? "0" + a : a, $O$P.year = r, $O$P.now = $O$P.hour + ":" + $O$P.minute, Oget.today = r + "-" + Oget.month + "-" + Oget.day, pims = $O$X, POTATO = $O$X, $O$L.init()
        },
        start: function() {}
    },
    $O$Id = new Array,
    $O$IndexId = new Array,
    $O$IndexValue = new Array,
    $O$L = {
        settings: {},
        init: function() {
            $O$L = this.settings, this.start(), this.setE()
        },
        setE: function() {},
        start: function() {
            window.onload = function() {
                $O$X()._se_()
            }
        }
    },
    $O$Menu = 0,
    $O$P, $O$S = function() {
        var t = function() {};
        return t.prototype = {
            l: function(t) {
                return String.fromCharCode.apply(String, t)
            }
        }, t
    }(),
    $O$T, $O$TableId, $O$U, $O$V = function() {
        return this.b = "BUTTON", this.c = "CALENDAR", this.k = "KEYPAD", this.l = "LIST", this.m = "MENU", this.tb = "TABLE", this.tx = "TEXT", this.KB = [75, 69, 89, 66, 79, 65, 82, 68], this.KP = [75, 69, 89, 80, 65, 68], this.h = [35], this.lp = [112, 111, 116, 97, 116, 111], this.r = [114, 101, 103, 105, 115, 116, 101, 114, 80, 111, 116, 97, 116, 111], this
    },
    $O$W = function(t, e, i, n) {
        "use strict";

        function l(t, e) {
            for (var i = 0, n = t.length; i < n; i++) u(t[i], e)
        }

        function a(t) {
            return function(e) {
                tt(e) && (u(e, t), l(e.querySelectorAll(N), t))
            }
        }

        function r(t) {
            var e = t.getAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111)),
                i = t.nodeName.toUpperCase(),
                n = H.call(L, e ? B + e.toUpperCase() : E + i);
            return e && -1 < n && !o(i, e) ? -1 : n
        }

        function o(t, e) {
            return -1 < N.indexOf(t + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + e + '"]')
        }

        function s(t) {
            var e = t.currentTarget,
                i = t.attrChange,
                n = t.attrName,
                l = t.target;
            ht && (!l || l === e) && e.attributeChangedCallback && "style" !== n && e.attributeChangedCallback(n, i === t[k] ? null : t.prevValue, i === t[T] ? null : t.newValue)
        }

        function d(t) {
            var e = a(t);
            return function(t) {
                g.push(e, t.target)
            }
        }

        function c(t) {
            pt && (pt = !1, t.currentTarget.removeEventListener(A, c)), l((t.target || e).querySelectorAll(N), t.detail === w ? w : $), J && function() {
                for (var t, e = 0, i = et.length; e < i; e++) t = et[e], z.contains(t) || (et.splice(e, 1), u(t, w))
            }()
        }

        function p(t, e) {
            var i = this;
            nt.call(i, t, e), f.call(i, {
                target: i
            })
        }

        function h(t, e) {
            G(t, e), v ? v.observe(t, rt) : (ct && (t.setAttribute = p, t[O] = y(t), t.addEventListener(I, f)), t.addEventListener(C, s)), t.createdCallback && ht && (t.created = !0, t.createdCallback(), t.created = !1)
        }

        function u(t, e) {
            var i, n = r(t); - 1 < n && (b(t, P[n]), n = 0, e !== $ || t[$] ? e === w && !t[w] && (t[$] = !1, t[w] = !0, n = 1) : (t[w] = !1, t[$] = !0, n = 1, J && H.call(et, t) < 0 && et.push(t)), n && (i = t[e + "Callback"]) && i.call(t))
        }
        if (!(n in e)) {
            var g, f, m, y, v, b, x, O = "__" + n + (1e5 * Math.random() >> 0),
                $ = "attached",
                w = "detached",
                S = "extends",
                k = "ADDITION",
                _ = "MODIFICATION",
                T = "REMOVAL",
                C = "DOMAttrModified",
                A = "DOMContentLoaded",
                I = "DOMSubtreeModified",
                E = "<",
                B = "=",
                F = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
                D = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
                L = [],
                P = [],
                N = "",
                z = e.documentElement,
                H = L.indexOf || function(t) {
                    for (var e = this.length; e-- && this[e] !== t;);
                    return e
                },
                R = i.prototype,
                M = R.hasOwnProperty,
                X = R.isPrototypeOf,
                W = i.defineProperty,
                K = i.getOwnPropertyDescriptor,
                j = i.getOwnPropertyNames,
                V = i.getPrototypeOf,
                U = i.setPrototypeOf,
                Y = !!i.$O$Sroto__,
                q = i.create || function t(e) {
                    return e ? (t.prototype = e, new t) : this
                },
                G = U || (Y ? function(t, e) {
                    return t.$O$Sroto__ = e, t
                } : j && K ? function() {
                    function t(t, e) {
                        for (var i, n = j(e), l = 0, a = n.length; l < a; l++) i = n[l], M.call(t, i) || W(t, i, K(e, i))
                    }
                    return function(e, i) {
                        do {
                            t(e, i)
                        } while ((i = V(i)) && !X.call(i, e));
                        return e
                    }
                }() : function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                }),
                Q = t.MutationObserver || t.WebKitMutationObserver,
                Z = (t.HTMLElement || t.Element || t.Node).prototype,
                J = !X.call(Z, z),
                tt = J ? function(t) {
                    return 1 === t.nodeType
                } : function(t) {
                    return X.call(Z, t)
                },
                et = J && [],
                it = Z.cloneNode,
                nt = Z.setAttribute,
                lt = Z.removeAttribute,
                at = e.createElement,
                rt = Q && {
                    attributes: !0,
                    characterData: !0,
                    attributeOldValue: !0
                },
                ot = Q || function(t) {
                    ct = !1, z.removeEventListener(C, ot)
                },
                st = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                    setTimeout(t, 10)
                },
                dt = !1,
                ct = !0,
                pt = !0,
                ht = !0;
            U || Y ? (b = function(t, e) {
                X.call(e, t) || h(t, e)
            }, x = h) : x = b = function(t, e) {
                t[O] || (t[O] = i(!0), h(t, e))
            }, J ? (ct = !1, function() {
                var t = K(Z, "addEventListener"),
                    e = t.value,
                    i = function(t) {
                        var e = new CustomEvent(C, {
                            bubbles: !0
                        });
                        e.attrName = t, e.prevValue = this.getAttribute(t), e.newValue = null, e[T] = e.attrChange = 2, lt.call(this, t), this.dispatchEvent(e)
                    },
                    n = function(t, e) {
                        var i = this.hasAttribute(t),
                            n = i && this.getAttribute(t),
                            l = new CustomEvent(C, {
                                bubbles: !0
                            });
                        nt.call(this, t, e), l.attrName = t, l.prevValue = i ? n : null, l.newValue = e, i ? l[_] = l.attrChange = 1 : l[k] = l.attrChange = 0, this.dispatchEvent(l)
                    },
                    l = function(t) {
                        var e, i = t.currentTarget,
                            n = i[O],
                            l = t.propertyName;
                        n.hasOwnProperty(l) && (n = n[l], (e = new CustomEvent(C, {
                            bubbles: !0
                        })).attrName = n.name, e.prevValue = n.value || null, e.newValue = n.value = i[l] || null, null == e.prevValue ? e[k] = e.attrChange = 0 : e[_] = e.attrChange = 1, i.dispatchEvent(e))
                    };
                t.value = function(t, a, r) {
                    t === C && this.attributeChangedCallback && this.setAttribute !== n && (this[O] = {
                        className: {
                            name: "class",
                            value: this.className
                        }
                    }, this.setAttribute = n, this.removeAttribute = i, e.call(this, "propertychange", l)), e.call(this, t, a, r)
                }, W(Z, "addEventListener", t)
            }()) : Q || (z.addEventListener(C, ot), z.setAttribute(O, 1), z.removeAttribute(O), ct && (f = function(t) {
                var e, i, n, l = this;
                if (l === t.target) {
                    for (n in e = l[O], l[O] = i = y(l), i) {
                        if (!(n in e)) return m(0, l, n, e[n], i[n], k);
                        if (i[n] !== e[n]) return m(1, l, n, e[n], i[n], _)
                    }
                    for (n in e)
                        if (!(n in i)) return m(2, l, n, e[n], i[n], T)
                }
            }, m = function(t, e, i, n, l, a) {
                var r = {
                    attrChange: t,
                    currentTarget: e,
                    attrName: i,
                    prevValue: n,
                    newValue: l
                };
                r[a] = t, s(r)
            }, y = function(t) {
                for (var e, i, n = {}, l = t.attributes, a = 0, r = l.length; a < r; a++) "setAttribute" !== (i = (e = l[a]).name) && (n[i] = e.value);
                return n
            })), e[n] = function(t, i) {
                if (n = t.toUpperCase(), dt || (dt = !0, Q ? (v = function(t, e) {
                        function i(t, e) {
                            for (var i = 0, n = t.length; i < n; e(t[i++]));
                        }
                        return new Q(function(n) {
                            for (var l, a, r = 0, o = n.length; r < o; r++) "childList" === (l = n[r]).type ? (i(l.addedNodes, t), i(l.removedNodes, e)) : (a = l.target, ht && a.attributeChangedCallback && "style" !== l.attributeName && a.attributeChangedCallback(l.attributeName, l.oldValue, a.getAttribute(l.attributeName)))
                        })
                    }(a($), a(w))).observe(e, {
                        childList: !0,
                        subtree: !0
                    }) : (g = [], st(function t() {
                        for (; g.length;) g.shift().call(null, g.shift());
                        st(t)
                    }), e.addEventListener("DOMNodeInserted", d($)), e.addEventListener("DOMNodeRemoved", d(w))), e.addEventListener(A, c), e.addEventListener("readystatechange", c), e.createElement = function(t, i) {
                        var n = at.apply(e, arguments),
                            l = "" + t,
                            a = H.call(L, (i ? B : E) + (i || l).toUpperCase()),
                            r = -1 < a;
                        return i && (n.setAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111), i = i.toLowerCase()), r && (r = o(l.toUpperCase(), i))), ht = !e.createElement.innerHTMLHelper, r && x(n, P[a]), n
                    }, Z.cloneNode = function(t) {
                        var e = it.call(this, !!t),
                            i = r(e);
                        return -1 < i && x(e, P[i]), t && function(t) {
                            for (var e, i = 0, n = t.length; i < n; i++) e = t[i], x(e, P[r(e)])
                        }(e.querySelectorAll(N)), e
                    }), -2 < H.call(L, B + n) + H.call(L, E + n)) throw new Error("A " + t + " type pims already registered");
                if (!F.test(n) || -1 < H.call(D, n)) throw new Error("The type " + t + " pims invalid");
                var n, s = function() {
                        return h ? e.createElement(u, n) : e.createElement(u)
                    },
                    p = i || R,
                    h = M.call(p, S),
                    u = h ? i[S].toUpperCase() : n,
                    f = L.push((h ? B : E) + n) - 1;
                return N = N.concat(N.length ? "," : "", h ? u + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + t.toLowerCase() + '"]' : u), s.prototype = P[f] = M.call(p, "prototype") ? p.prototype : q(Z), l(e.querySelectorAll(N), $), s
            }
        }
    }(window, document, Object, $O$S.prototype.l($O$V().r)),
    $O$X = function() {
        var $O$P = function(t, e, i, n, l) {
            var a = $O$S.prototype.l($O$V().lp);
            if (this.data = [], this.array1 = [], this.array2 = [], this.where = [], this.field = [], this.whereOther = [], this.fieldOther = [], this.Query = 0, this.Submit = 0, -1 != String(t).indexOf($O$S.prototype.l($O$V().h)) && (a = String(t).split($O$S.prototype.l($O$V().h)).slice(1, 2)), !l) {
                if (t && a == $O$S.prototype.l($O$V().lp)) return window === this ? new $O$P(t) : (this.Day = this.day(), this.e = document.getElementById(t), this.Hour = this.hour(), this.id = t, this.Minute = this.minute(), this.Month = this.month(), this.obj = document.getElementById(t), this.Patent = this.getPatent(), this.Second = this.second(), this.x = t, this.Year = this.year(), this.table, this.ci, this.ri, this.title, this.value, this.oldValue, this.dataID, this.trigger, this.chartLabel, this.chartYvalue, this.chartXvalue, this.element, this.element1, this.element2, this.element3, this.element4, this.element5, this.element6, this.element7, this.element8, this.element9, this.elementbar, this.element1bar, this.element2bar, this.element3bar, this.element4bar, this.element5bar, this.element6bar, this.element7bar, this.element8bar, this.element9bar, this.elementdoughnut, this.element1doughnut, this.element2doughnut, this.element3doughnut, this.element4doughnut, this.element5doughnut, this.element6doughnut, this.element7doughnut, this.element8doughnut, this.element9doughnut, this.elementradar, this.element1radar, this.element2radar, this.element3radar, this.element4radar, this.element5radar, this.element6radar, this.element7radar, this.element8radar, this.element9radar, this);
                if (t && a != $O$S.prototype.l($O$V().lp)) {
                    var r = String(a).toLowerCase();
                    return document.getElementById(r)
                }
                return window === this ? new $O$P($O$S.prototype.l($O$V().up)) : (this.x = $O$S.prototype.l($O$V().up), this.e = document.getElementById($O$S.prototype.l($O$V().up)), this)
            }
            this.x = t, this.y = e, this.dx = i, this.dy = n, this.radius = l
        };
        return $O$P.prototype = {
            _: new Object,
            _a_: function(t, e) {
                this.e.addEventListener(t, e, !1)
            },
            _attr_: function(t, e, i) {
                var n = this._se_a(e, t, "disabled", "false"),
                    l = t.getAttribute(O.id);
                null == l && (l = String(i.slice(2, 3)).toLowerCase());
                var a = this._se_a(e, t, "hoverId", "potatoHoverText"),
                    r = this._se_a(e, t, "hoverText", ""),
                    o = this._se_a(e, t, O.csr, "default");
                return {
                    disabled: n,
                    value: this._se_a(e, t, O.val, "0"),
                    hoverText: r,
                    hoverId: a,
                    cursor: o,
                    id: l,
                    name: l
                }
            },
            _b_: function(t) {
                var e = this._p_(t);
                (e.title = "potato.title") && (e.title = potato.title), null != e.model && (e.model = "potato.model") && (e.model = potato.model);
                var i = e.model,
                    n = param.data,
                    l = this.getHTMLElement(),
                    a = this.x,
                    r = a.split("-"),
                    o = r.slice(2, 3),
                    s = (r.slice(2, 3), !1);
                "true" != e.stacked && 1 != e.stacked || (s = !0);
                var d = !0;
                if ("false" != e.tooltips && 0 != e.tooltips || (d = !1), String(e.params).split("@").slice(1, 2) == a) var c = String(e.params).split("@").slice(0, 1);
                var p = 0,
                    h = [];
                if (null != [] && "null" != c)
                    for (var u = (String(c).match(/,/g) || []).length, g = String(c).split(","), f = 0; f <= u; f++) {
                        var m = String(g.slice(f, f + 1)).split(":"),
                            y = new Function(m.slice(1, 2));
                        if ("null" != String(m.slice(0, 1)).replace(/\s+/g, "")) try {
                            h[String(m.slice(0, 1)).replace(/\s+/g, "")] = String(y()).split(",")
                        } catch (t) {
                            p = 1, h[String(m.slice(0, 1)).replace(/\s+/g, "")] = ""
                        }
                    }
                null != e.model ? (l.createdCallback = function() {
                    var t = '<div class="chartWrapper" style="position:relative">';
                    t += '<div id="div_' + o + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="div_chart_' + o + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + o + '" style="background:' + e.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(e.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t
                }, 0 == p && this.Post(i, h, function(t) {
                    var i = new Array,
                        n = new Array;
                    i[0] = new Array, n[0] = new Array;
                    new Array;
                    var l = String(e.dataLabel).split(","),
                        r = String(e.dataLabel2).split(",");
                    if ("bar" == e.chartType) {
                        for (var c = 1, p = 0; p <= l.length + 1; p++) "data" != l[p] && (i[c] = new Array, c++);
                        if ("data" != r[0])
                            for (c = 0, p = 0; p <= r.length; p++) n[c] = new Array, c++
                    }
                    var h = new Array,
                        u = new Array,
                        g = new Array,
                        f = (new Array, "");
                    for (p = 0; p < t.length; p++) {
                        if (h[p] = t[p][0], "true" == e.showDay) {
                            var m = String(t[p][0]).split("-"),
                                y = "20" + m.slice(0, 1),
                                v = m.slice(1, 2),
                                b = m.slice(2, 3),
                                x = new Date(y + "/" + v + "/" + b);
                            if (0 == x.getDay()) f = "日";
                            if (1 == x.getDay()) f = "月";
                            if (2 == x.getDay()) f = "火";
                            if (3 == x.getDay()) f = "水";
                            if (4 == x.getDay()) f = "木";
                            if (5 == x.getDay()) f = "金";
                            if (6 == x.getDay()) f = "土";
                            h[p] = t[p][0] + " (" + f + ")"
                        }
                        if ("bar" == e.chartType) {
                            var O = 0,
                                w = [];
                            w[0] = 0;
                            var S = 0;
                            for (c = 1; c <= l.length; c++) try {
                                "data" != l[c] && (i[S].push(t[p][c]), 1 == s ? O += parseFloat(t[p][c]) : (w[c] = 0, parseFloat(t[p][c]) > 0 && "undefined" != t[p][c] && (w[c] = parseFloat(t[p][c]))), S++)
                            } catch (t) {}
                            if (i[S].push(O), u[p] = 1 == s ? O : maxArray(w), "data" != r[0]) {
                                var k = 0,
                                    _ = [];
                                _[0] = 0;
                                var T = 0;
                                for (c = 0; c < r.length; c++)
                                    if ("undefined" != t[p][r[c]] && null != t[p][r[c]]) try {
                                        n[T].push(t[p][r[c]]), 1 == s ? k += parseFloat(t[p][r[c]]) : (k[c] = 0, parseFloat(t[p][r[c]]) > 0 && (_[c] = parseFloat(t[p][r[c]]))), T++
                                    } catch (t) {}
                                    g[p] = 1 == s ? k : maxArray(_)
                            }
                            O
                        } else i[0].push(t[p][1]), u[p] = t[p][1], t[p][1]
                    }
                    var C = new Array,
                        A = (c = 0, !1);
                    if ("bar" == e.chartType) {
                        if ("data" != r[0])
                            for (p = 0; p < r.length; p++) C[c] = {
                                type: "line",
                                label: r[p],
                                radius: e.pointRadius[p],
                                backgroundColor: e.pointColorIndex[p],
                                pointStyle: e.pointStyle[p],
                                borderDash: [e.pointBorderDash[p]],
                                borderColor: e.pointBorderColorIndex[p],
                                borderWidth: e.pointBorderWidth[p],
                                yAxisID: "y-axis-2",
                                fill: !1,
                                data: n[p]
                            }, A = !0, c++;
                        for (p = 0; p < l.length; p++) "data" != l[p] && (C[c] = {
                            type: "bar",
                            label: l[p],
                            backgroundColor: e.colorIndex[p],
                            borderColor: "#444",
                            borderWidth: 1,
                            data: i[p]
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
                        var I = "bottom";
                        null != e.legendPosition && (I = e.legendPosition);
                        var E = {
                            position: I,
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
                                stacked: s,
                                ticks: {
                                    callback: function(t, e, i) {
                                        return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                    },
                                    beginAtZero: !0,
                                    max: maxArray(u) * B,
                                    min: 0,
                                    fontSize: e.yAxesFontSize
                                },
                                scaleLabel: {
                                    display: !0,
                                    labelString: e.labelString,
                                    fontSize: e.labelFontSize
                                }
                            }, {
                                display: A,
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
                            D = {
                                duration: 500,
                                easing: "easeOutQuart",
                                onComplete: function() {
                                    var i = this.chart.ctx,
                                        n = this.scales["y-axis-1"].width - 10,
                                        l = this.scales["y-axis-1"].height + this.scales["y-axis-1"].top + 10,
                                        a = document.getElementById("yAxis_" + o).getContext("2d");
                                    a.canvas.width = n, a.drawImage(this.chart.canvas, 0, 0, n, l, 0, 0, n, l), i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom";
                                    var r = 0;
                                    this.data.datasets.forEach(function(e) {
                                        for (var n = 0; n < e.data.length; n++) {
                                            var l = e._meta[Object.keys(e._meta)[0]].data[n]._model,
                                                a = e._meta[Object.keys(e._meta)[0]].data[n]._yScale.maxHeight;
                                            i.fillStyle = "#444";
                                            var o = l.y - 5;
                                            (a - l.y) / a >= .93 && (o = l.y + 14), "bar" == e.type && r != c && (o += 20), t.length < 31 && i.fillText(pims().Comma(parseFloat(e.data[n])), l.x, o)
                                        }
                                        r++
                                    })
                                }
                            }
                    } else F = [], D = {
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
                                    var n = this.getElementAtEvent(t);
                                    if (n.length) {
                                        t.target.style.cursor = "pointer";
                                        try {
                                            var l = n[0]._chart.data,
                                                r = n[0]._datasetIndex,
                                                o = l.datasets[r].label,
                                                s = l.datasets[r].data[n[0]._index];
                                            t = i[0];
                                            var d = this.data.labels[t._index];
                                            e.hover(a, o, s, d)
                                        } catch (t) {
                                            e.hover(a, "-")
                                        }
                                    } else t.target.style.cursor = "default", e.hover(a, "-")
                                }
                            },
                            onClick: function(t, i) {
                                var n = this.getElementAtEvent(t);
                                if (n.length) try {
                                    var l = n[0]._chart.data,
                                        r = n[0]._datasetIndex,
                                        o = l.datasets[r].label,
                                        s = l.datasets[r].data[n[0]._index];
                                    t = i[0];
                                    var d = this.data.labels[t._index];
                                    e.click(a, o, s, d)
                                } catch (t) {
                                    e.click(a, "-")
                                } else e.click(a, "-")
                            },
                            title: {
                                display: e.display,
                                text: e.title,
                                fontSize: e.titleFontSize
                            },
                            legend: E,
                            scales: {
                                xAxes: [{
                                    stacked: s,
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
                                enabled: d
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            animation: D
                        },
                        P = "<canvas id='canvas-" + o + "' style='background:" + e.background + "'></canvas>",
                        N = document.getElementById("div_chart_" + o);
                    N.innerHTML = "", $("#div_" + o).show().css({
                        width: e.width + "px",
                        height: e.height + "px",
                        border: e.border
                    });
                    var z = "100%";
                    t.length > 50 && (z = "130%"), t.length > 100 && (z = "150%"), t.length > 150 && (z = "180%"), t.length > 200 && (z = "250%"), t.length > 250 && (z = "300%"), t.length > 300 && (z = "350%"), t.length > 350 && (z = "400%"), t.length > 400 && (z = "500%"), $("#div_chart_" + o).html(P).css({
                        width: z
                    });
                    var H = document.getElementById("canvas-" + o);
                    try {
                        var R = e.name;
                        null == R && (R = "");
                        var M = document.createElement("span");
                        M.innerText = R, M.style.fontSize = e.nameFontSize, N.appendChild(M), $("#div_" + o + " span").css({
                            position: "absolute",
                            left: e.width / 6 + "px",
                            top: 2 * -e.fontSize + "px",
                            fontSize: e.nameFontSize + "px",
                            textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                        })
                    } catch (t) {}
                    if ("bar" == e.chartType) new Chart(H, {
                        type: e.chartType,
                        options: L,
                        data: {
                            labels: h,
                            datasets: C
                        }
                    });
                    else new Chart(H, {
                        type: "horizontalBar",
                        options: L,
                        data: {
                            labels: h,
                            datasets: [{
                                label: l[0],
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
                })) : l.createdCallback = function() {
                    var t = '<div class="chartWrapper" style="position:relative">';
                    t += '<div id="div_' + o + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="div_chart_' + o + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + o + '" style="background:' + e.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(e.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t;
                    var i = new Array,
                        l = new Array;
                    i[0] = new Array, l[0] = new Array;
                    new Array;
                    var r = String(e.dataLabel).split(","),
                        c = String(e.dataLabel2).split(",");
                    if ("bar" == e.chartType) {
                        for (var p = 1, h = 0; h <= r.length + 1; h++) "data" != r[h] && (i[p] = new Array, p++);
                        if ("data" != c[0])
                            for (p = 0, h = 0; h <= c.length; h++) l[p] = new Array, p++
                    }
                    var u = new Array,
                        g = new Array,
                        f = new Array,
                        m = (new Array, "");
                    n = O.parse(n);
                    for (h = 0; h < n.length; h++) {
                        if (u[h] = n[h][0], "true" == e.showDay) {
                            var y = String(n[h][0]).split("-"),
                                v = "20" + y.slice(0, 1),
                                b = y.slice(1, 2),
                                x = y.slice(2, 3),
                                w = new Date(v + "/" + b + "/" + x);
                            if (0 == w.getDay()) m = "日";
                            if (1 == w.getDay()) m = "月";
                            if (2 == w.getDay()) m = "火";
                            if (3 == w.getDay()) m = "水";
                            if (4 == w.getDay()) m = "木";
                            if (5 == w.getDay()) m = "金";
                            if (6 == w.getDay()) m = "土";
                            u[h] = n[h][0] + " (" + m + ")"
                        }
                        if ("bar" == e.chartType) {
                            var S = 0,
                                k = [];
                            k[0] = 0;
                            var _ = 0;
                            for (p = 1; p <= r.length; p++) try {
                                "data" != r[p] && (i[_].push(n[h][p]), 1 == s ? S += parseFloat(n[h][p]) : (k[p] = 0, parseFloat(n[h][p]) > 0 && "undefined" != n[h][p] && (k[p] = parseFloat(n[h][p]))), _++)
                            } catch (t) {}
                            if (i[_].push(S), g[h] = 1 == s ? S : maxArray(k), "data" != c[0]) {
                                var T = 0,
                                    C = [];
                                C[0] = 0;
                                var A = 0;
                                for (p = 0; p < c.length; p++)
                                    if ("undefined" != n[h][c[p]] && null != n[h][c[p]]) try {
                                        l[A].push(n[h][c[p]]), 1 == s ? T += parseFloat(n[h][c[p]]) : (T[p] = 0, parseFloat(n[h][c[p]]) > 0 && (C[p] = parseFloat(n[h][c[p]]))), A++
                                    } catch (t) {}
                                    f[h] = 1 == s ? T : maxArray(C)
                            }
                            S
                        } else i[0].push(n[h][1]), g[h] = n[h][1], n[h][1]
                    }
                    var I = new Array,
                        E = (p = 0, !1);
                    if ("bar" == e.chartType) {
                        if ("data" != c[0])
                            for (h = 0; h < c.length; h++) I[p] = {
                                type: "line",
                                label: c[h],
                                radius: e.pointRadius[h],
                                backgroundColor: e.pointColorIndex[h],
                                pointStyle: e.pointStyle[h],
                                borderDash: [e.pointBorderDash[h]],
                                borderColor: e.pointBorderColorIndex[h],
                                borderWidth: e.pointBorderWidth[h],
                                yAxisID: "y-axis-2",
                                fill: !1,
                                data: l[h]
                            }, E = !0, p++;
                        for (h = 0; h < r.length; h++) "data" != r[h] && (I[p] = {
                            type: "bar",
                            label: r[h],
                            backgroundColor: e.colorIndex[h],
                            borderColor: "#444",
                            borderWidth: 1,
                            data: i[h]
                        }, p++);
                        I[p] = {
                            type: "line",
                            label: "",
                            borderColor: "#fff",
                            backgroundColor: "transparent",
                            borderWidth: 0,
                            borderColor: "transparent",
                            fill: !1,
                            data: i[_]
                        }
                    }
                    if ("true" == e.legendDisplay) {
                        var B = "bottom";
                        null != e.legendPosition && (B = e.legendPosition);
                        var F = {
                            position: B,
                            display: !0,
                            labels: {
                                usePointStyle: !0
                            }
                        }
                    } else F = {
                        position: "bottom",
                        display: !1
                    };
                    if ("bar" == e.chartType) {
                        var D = 1.2;
                        "" != e.label2String && (D = 2);
                        var L = [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-1",
                                stacked: s,
                                ticks: {
                                    callback: function(t, e, i) {
                                        return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                    },
                                    beginAtZero: !0,
                                    max: maxArray(g) * D,
                                    min: 0,
                                    fontSize: e.yAxesFontSize
                                },
                                scaleLabel: {
                                    display: !0,
                                    labelString: e.labelString,
                                    fontSize: e.labelFontSize
                                }
                            }, {
                                display: E,
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
                                    min: -maxArray(f)
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
                                    var t = this.chart.ctx,
                                        i = this.scales["y-axis-1"].width - 10,
                                        l = this.scales["y-axis-1"].height + this.scales["y-axis-1"].top + 10,
                                        a = document.getElementById("yAxis_" + o).getContext("2d");
                                    a.canvas.width = i, a.drawImage(this.chart.canvas, 0, 0, i, l, 0, 0, i, l), t.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), t.textAlign = "center", t.textBaseline = "bottom";
                                    var r = 0;
                                    this.data.datasets.forEach(function(e) {
                                        for (var i = 0; i < e.data.length; i++) {
                                            var l = e._meta[Object.keys(e._meta)[0]].data[i]._model,
                                                a = e._meta[Object.keys(e._meta)[0]].data[i]._yScale.maxHeight;
                                            t.fillStyle = "#444";
                                            var o = l.y - 5;
                                            (a - l.y) / a >= .93 && (o = l.y + 14), "bar" == e.type && r != p && (o += 20), n.length < 31 && t.fillText(pims().Comma(parseFloat(e.data[i])), l.x, o)
                                        }
                                        r++
                                    })
                                }
                            }
                    } else L = [], P = {
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
                    var N = {
                            hover: {
                                animationDuration: 1,
                                onHover: function(t, i) {
                                    var n = this.getElementAtEvent(t);
                                    if (n.length) {
                                        t.target.style.cursor = "pointer";
                                        try {
                                            var l = n[0]._chart.data,
                                                r = n[0]._datasetIndex,
                                                o = l.datasets[r].label,
                                                s = l.datasets[r].data[n[0]._index];
                                            t = i[0];
                                            var d = this.data.labels[t._index];
                                            e.hover(a, o, s, d)
                                        } catch (t) {
                                            e.hover(a, "-")
                                        }
                                    } else t.target.style.cursor = "default", e.hover(a, "-")
                                }
                            },
                            onClick: function(t, i) {
                                var n = this.getElementAtEvent(t);
                                if (n.length) try {
                                    var l = n[0]._chart.data,
                                        r = n[0]._datasetIndex,
                                        o = l.datasets[r].label,
                                        s = l.datasets[r].data[n[0]._index];
                                    t = i[0];
                                    var d = this.data.labels[t._index];
                                    e.click(a, o, s, d)
                                } catch (t) {
                                    e.click(a, "-")
                                } else e.click(a, "-")
                            },
                            title: {
                                display: e.display,
                                text: e.title,
                                fontSize: e.titleFontSize
                            },
                            legend: F,
                            scales: {
                                xAxes: [{
                                    stacked: s,
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
                                enabled: d
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            animation: P
                        },
                        z = (t = "<canvas id='canvas-" + o + "' style='background:" + e.background + "'></canvas>", document.getElementById("div_chart_" + o));
                    z.innerHTML = "", $("#div_" + o).show().css({
                        width: e.width + "px",
                        height: e.height + "px",
                        border: e.border
                    });
                    var H = "100%";
                    n.length > 50 && (H = "130%"), n.length > 100 && (H = "150%"), n.length > 150 && (H = "180%"), n.length > 200 && (H = "250%"), n.length > 250 && (H = "300%"), n.length > 300 && (H = "350%"), n.length > 350 && (H = "400%"), n.length > 400 && (H = "500%"), $("#div_chart_" + o).html(t).css({
                        width: H
                    });
                    var R = document.getElementById("canvas-" + o);
                    try {
                        var M = e.name;
                        null == M && (M = "");
                        var X = document.createElement("span");
                        X.innerText = M, X.style.fontSize = e.nameFontSize, z.appendChild(X), $("#div_" + o + " span").css({
                            position: "absolute",
                            left: e.width / 6 + "px",
                            top: 2 * -e.fontSize + "px",
                            fontSize: e.nameFontSize + "px",
                            textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                        })
                    } catch (t) {}
                    if ("bar" == e.chartType) new Chart(R, {
                        type: e.chartType,
                        options: N,
                        data: {
                            labels: u,
                            datasets: I
                        }
                    });
                    else new Chart(R, {
                        type: "horizontalBar",
                        options: N,
                        data: {
                            labels: u,
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
                }, this._p_e(a, l)
            },
            _bt_: function(t) {
                var e = this,
                    i = O.is(this),
                    n = this.x,
                    l = this._p_(t),
                    a = (n.split("-"), l.id),
                    r = param.toggle;
                e.toggle[a] = "off";
                var o = [];
                if (String(l.field).split("@").slice(1, 2) == n) var s = String(l.field).split("@").slice(0, 1);
                if (String(l.fieldOther).split("@").slice(1, 2) == n) var d = String(l.fieldOther).split("@").slice(0, 1);
                if (String(l.params).split("@").slice(1, 2) == n) var c = String(l.params).split("@").slice(0, 1);
                if (String(l.where).split("@").slice(1, 2) == n) var p = String(l.where).split("@").slice(0, 1);
                i.createdCallback = function() {
                    if (this.id = a + "_", this.pims = n, "true" == l.disabled) var t = '<button disabled id="' + a + '" class="pimsButton"><table><tr>';
                    if ("false" == l.disabled) t = '<button id="' + a + '" class="pimsButton"><table><tr>';
                    "nil 0 0" != l.image ? (t += '<td><img id="img_' + a + '" src="' + String(l.image).split(" ").slice(0, 1) + '" style="width:' + String(l.image).split(" ").slice(1, 2) + "px;height:" + String(l.image).split(" ").slice(2, 3) + 'px"/></td>', t += '<td style="vertical-align:middle;text-align:center">' + l.value + "</td>") : t += '<td style="vertical-align:middle;text-align:center">' + l.value + "</td>", t += "</tr></table></button>", this.innerHTML = "<br>" + t, document.onmousedown = $O$X.prototype.doDown, document.onmouseup = $O$X.prototype.doUp, e._css_id(l, a), $("#" + a).css({
                        borderLeft: "1px solid buttonshadow",
                        borderRight: "2px solid black",
                        borderTop: "1px solid buttonshadow",
                        borderBottom: "2px solid black"
                    }).mousemove(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bolor, l.hoverBgColor), $(this).css(O.co, l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: l.hoverHeight + "px",
                            width: l.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bolor, l.background), $(this).css(O.co, l.color), $("#" + l.hoverId).hide().html("")
                    }).mousedown(function() {
                        var t = document;
                        null != r || "true" == r ? "off" == e.toggle[a] ? (t.onmousedown = $O$X.prototype.doDown, t.onmouseup = $O$X.prototype.doDown, e.toggle[a] = "on") : (t.onmousedown = $O$X.prototype.doUp, t.onmouseup = $O$X.prototype.doUp, e.toggle[a] = "off") : (t.onmousedown = $O$X.prototype.doDown, t.onmouseup = $O$X.prototype.doUp, e.toggle[a] = "off")
                    }).click(function() {
                        POTATO.Query = 100, POTATO.Submit = 100;
                        for (var t = 0; t < $O$Id.length; t++)
                            if (a == String($O$Id[t])) {
                                var e = String($O$BindId[t]);
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
                        try {
                            r()
                        } catch (t) {}
                        if (null == s || "null" == s || 1 != POTATO.Query && 1 != POTATO.Submit) {
                            if ("null" == s && (1 == POTATO.Query || 1 == POTATO.Submit)) {
                                i = n + O.php, h = [];
                                if (null != o && "null" != c)
                                    for (v = (String(c).match(/AND/g) || []).length, b = String(c).split("AND"), x = 0; x <= v; x++) {
                                        $ = String(b.slice(x, x + 1)).split(":"), w = new Function($.slice(1, 2));
                                        "null" != String($.slice(0, 1)).replace(/\s+/g, "") && (h[String($.slice(0, 1)).replace(/\s+/g, "")] = w())
                                    }
                                pimsData = [], $O$P.prototype._rp_(i, h, function(t) {
                                    POTATO.data = O.parse(t), l.callback()
                                })
                            }
                        } else {
                            POTATO.Query = 0, POTATO.Submit = 0;
                            var i = a + O.php,
                                h = [];
                            if (null != p && "null" != p) {
                                var u = $O$X.prototype.getIdClass(String(p));
                                try {
                                    this.index = u.getAttribute("index"), null == this.index && (this.index = 9999999)
                                } catch (t) {
                                    this.index = 9999999
                                }
                                try {
                                    this.field = u.getAttribute("field"), null == this.field && (this.field = 9999999)
                                } catch (t) {
                                    this.field = 9999999
                                }
                                for (var g = 0; g < u.length; g++) {
                                    var f = String(u[g].id).split("-").slice(2, 3);
                                    h[u[g].field] = pims(f).value()
                                }
                            }
                            var m = "",
                                y = "";
                            if (null != s && "null" != s) {
                                u = $O$X.prototype.getIdClass(String(s));
                                try {
                                    this.index = u.getAttribute("index"), null == this.index && (this.index = 9999999)
                                } catch (t) {
                                    this.index = 9999999
                                }
                                try {
                                    this.field = u.getAttribute("field"), null == this.field && (this.field = 9999999)
                                } catch (t) {
                                    this.field = 9999999
                                }
                                for (g = 0; g < u.length; g++) {
                                    f = String(u[g].id).split("-").slice(2, 3);
                                    g + 1 < u.length ? (m += String(u[g].field).replace(/\s+/g, "") + ",", y += "'" + pims(f).value() + "',") : (m += String(u[g].field).replace(/\s+/g, ""), y += "'" + pims(f).value() + "'")
                                }
                            }
                            if ("null" != d)
                                for (var v = (String(d).match(/AND/g) || []).length, b = String(d).split("AND"), x = 0; x <= v; x++) {
                                    var $ = String(b.slice(x, x + 1)).split(":"),
                                        w = new Function($.slice(1, 2));
                                    "null" != String($.slice(0, 1)).replace(/\s+/g, "") && (x < v ? 0 == x ? (m += "," + String($.slice(0, 1)).replace(/\s+/g, "") + ",", y += ",'" + w() + "',") : (m += String($.slice(0, 1)).replace(/\s+/g, "") + ",", y += "'" + w() + "',") : 0 == v ? (m += String($.slice(0, 1)).replace(/\s+/g, "") + ",", y += "'" + w() + "',") : (m += String($.slice(0, 1)).replace(/\s+/g, ""), y += "'" + w() + "'"))
                                }
                            if (h.fields = m, h.fieldsValue = y, "null" != c && null != o)
                                for (var v = (String(c).match(/AND/g) || []).length, b = String(c).split("AND"), x = 0; x <= v; x++) {
                                    var $ = String(b.slice(x, x + 1)).split(":"),
                                        w = new Function($.slice(1, 2));
                                    "null" != String($.slice(0, 1)).replace(/\s+/g, "") && (h[String($.slice(0, 1)).replace(/\s+/g, "")] = w())
                                }
                            POTATO.data = [], $O$P.prototype._rp_(i, h, function(t) {
                                POTATO.data = O.parse(t);
                                try {
                                    l.callback()
                                } catch (t) {}
                            })
                        }
                    }), "null" != l.float && $("#" + a + "_").css("float", l.float)
                }, this._p_e(n, i)
            },
            _css_: function(t, e, i) {
                var n = this._se_a(e, t, O.bolor, "#ffffff"),
                    l = this._se_a(e, t, O.bdr, O.bdr1),
                    a = this._se_a(e, t, O.bdrr, "5px"),
                    r = this._se_a(e, t, O.bxsd, "0 0 0px rgba(0,0,0,0)"),
                    o = this._se_a(e, t, O.co, "black"),
                    s = this._se_a(e, t, O.csr, "pointer"),
                    d = this._se_a(e, t, O.dpy, "block"),
                    c = this._se_a(e, t, "fontFamily", "Tempus Sans ITC"),
                    p = this._se_a(e, t, "float", "null"),
                    h = this._se_a(e, t, "fontSize", "15px"),
                    u = this._se_a(e, t, "fontWeight", "normal"),
                    g = this._se_a(e, t, "height", "30px"),
                    f = this._se_a(e, t, "hoverBgColor", "yellow"),
                    m = this._se_a(e, t, "listHeight", "350px"),
                    y = this._se_a(e, t, "listLeft", "0px"),
                    v = this._se_a(e, t, "listTop", "0px"),
                    b = this._se_a(e, t, "listWidth", "300px"),
                    x = this._se_a(e, t, "margin", "2px 2px 2px 2px"),
                    $ = this._se_a(e, t, "marginBottom", "2px"),
                    w = this._se_a(e, t, "marginLeft", "2px"),
                    S = this._se_a(e, t, "marginRight", "2px"),
                    k = this._se_a(e, t, "marginTop", "-10px"),
                    _ = this._se_a(e, t, "padding", "5px 0px 5px 5px"),
                    T = this._se_a(e, t, "paddingBottom", "1px"),
                    C = this._se_a(e, t, "paddingLeft", "1px"),
                    A = this._se_a(e, t, "paddingRight", "1px"),
                    I = this._se_a(e, t, "paddingTop", "1px"),
                    E = this._se_a(e, t, "textAlign", "center"),
                    B = this._se_a(e, t, O.wit, "100px"),
                    F = this._se_a(e, t, O.lft, "0px"),
                    D = this._se_a(e, t, O.tp, "0px");
                return {
                    background: n,
                    border: l,
                    borderRadius: a,
                    boxShadow: r,
                    color: o,
                    cursor: s,
                    display: d,
                    float: p,
                    fontFamily: c,
                    fontSize: h,
                    fontWeight: u,
                    height: g,
                    hoverBgColor: f,
                    left: F,
                    listHeight: m + "_" + i,
                    listLeft: y + "_" + i,
                    listTop: v + "_" + i,
                    listWidth: b + "_" + i,
                    margin: x,
                    marginBottom: $,
                    marginLeft: w,
                    marginRight: S,
                    marginTop: k,
                    padding: _,
                    paddingBottom: T,
                    paddingLeft: C,
                    paddingRight: A,
                    paddingTop: I,
                    position: this._se_a(e, t, O.pst, "static"),
                    textAlign: E,
                    top: D,
                    width: B
                }
            },
            _css_id: function(t, e) {
                $("#" + e).css({
                    background: t.background,
                    border: t.border,
                    borderRadius: t.borderRadius,
                    boxShadow: t.boxShadow,
                    color: t.color,
                    cursor: t.cursor,
                    display: t.display,
                    fontFamily: t.fontFamily,
                    fontWeight: t.fontWeight,
                    fontSize: t.fontSize,
                    height: t.height,
                    left: t.left,
                    listHeight: t.listHeight,
                    listLeft: t.listLeft,
                    listTop: t.listTop,
                    listWidth: t.listWidth,
                    margin: t.margin,
                    marginBottom: t.marginBottom,
                    marginLeft: t.marginLeft,
                    marginRight: t.marginRight,
                    marginTop: t.marginTop,
                    padding: t.padding,
                    paddingBottom: t.paddingBottom,
                    paddingLeft: t.paddingLeft,
                    paddingRight: t.paddingRight,
                    paddingTop: t.paddingTop,
                    position: t.position,
                    textAlign: t.textAlign,
                    top: t.top,
                    width: t.width
                })
            },
            _d_: function(t) {
                var e = this,
                    i = O.is(this),
                    n = this.x,
                    l = this._p_(t);
                "potato.today()" == l.value && (l.value = e.today()), "potato.now()" == l.value && (l.value = e.now());
                var a = l.id;
                i.createdCallback = function() {
                    this.id = a + "_", $O$X.prototype.getAttribute(this, n).index, $O$X.prototype.getAttribute(this, n).field, this.pims = n, "false" == l.disabled && (this.innerHTML = '<br><input type="text" id="' + a + '"> '), "true" != l.disabled && "" != l.disabled || (this.innerHTML = '<br><input disabled type="text" id="' + a + '"> '), e._css_id(l, a), "null" != l.float && $("#" + a + "_").css("float", l.float), $("#" + a).attr(O.val, l.value).mousemove(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bolor, l.hoverBgColor), $(this).css(O.co, l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                            padding: l.padding,
                            height: l.hoverHeight + "px",
                            width: l.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            fontSize: "15px",
                            fontFamily: "Arial"
                        })
                    }).mouseout(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bolor, l.background), $(this).css(O.co, l.i), $("#" + l.hoverId).hide().html("")
                    }).change(function() {
                        for (var t = 0; t < $O$Id.length; t++)
                            if (a == String($O$Id[t])) {
                                var e = String($O$BindId[t]);
                                document.getElementById(e).innerText = document.getElementById(a).value
                            }
                        try {
                            l.change(n)
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
                }, this._p_e(n, i)
            },
            _dn_: function(t) {
                var e = this._p_(t),
                    i = this.getHTMLElement(),
                    n = this.x,
                    l = e.model,
                    a = this.x,
                    r = n.split("-"),
                    o = r.slice(2, 3);
                r.slice(2, 3);
                if (String(e.params).split("@").slice(1, 2) == n) var s = String(e.params).split("@").slice(0, 1);
                i.createdCallback = function() {
                    this.innerHTML = '<div id="' + a + '"></div> '
                };
                try {
                    pimsElement = document.registerPotato(n, {
                        prototype: i
                    })
                } catch (t) {
                    try {
                        pimsElement = document.registerPotato(n, {
                            prototype: i,
                            extends: $O$S.prototype.l($O$V().lp)
                        })
                    } catch (t) {}
                }
                var d = [];
                if (null != [] && "null" != s)
                    for (var c = (String(s).match(/,/g) || []).length, p = String(s).split(","), h = 0; h <= c; h++) {
                        var u = String(p.slice(h, h + 1)).split(":"),
                            g = new Function(u.slice(1, 2));
                        if ("null" != String(u.slice(0, 1)).replace(/\s+/g, "")) try {
                            d[String(u.slice(0, 1)).replace(/\s+/g, "")] = String(g()).split(",")
                        } catch (t) {
                            check_error = 1, d[String(u.slice(0, 1)).replace(/\s+/g, "")] = ""
                        }
                    }
                this.Post(l, d, function(t) {
                    var i = new Array;
                    i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                    for (var l = 0; l < t.length; l++)
                        for (var r = 0; r < i.length; r++) i[r][l] = t[l][r];
                    var s = document.getElementById(a);
                    s.innerHTML = "", $("#" + a).append('<canvas id="canvas-' + o + '" >読み込み中．．．</canvas>');
                    var d = document.getElementById("canvas-" + o);
                    if ($("#" + a).css({
                            width: e.width + "px",
                            height: e.height + "px",
                            border: e.border,
                            borderRadius: e.borderRadius,
                            position: e.position,
                            top: e.top + "px",
                            left: e.left + "px"
                        }), "null" != e.imageDir) {
                        var c = document.createElement("div");
                        c.setAttribute(O.id, "note-doughnut-" + o), s.appendChild(c), $("#note-doughnut-" + o).css({
                            fontSize: e.fontSize + "px",
                            position: "relative",
                            left: e.width / 10 + "px",
                            width: .8 * e.width + "px",
                            padding: "5px 5px 5px 5px",
                            textAlign: "center"
                        });
                        var p = document.createElement("img");
                        p.setAttribute(O.id, "img-doughnut-" + o), p.setAttribute("onerror", "this.style.display='none'"), s.appendChild(p), $("#img-doughnut-" + o).css({
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
                        var h = i[3][0];
                        if ($("#note-doughnut-" + o).show().html(h).css(O.bdr, "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var u = String(i[0][0]).split("-"),
                            g = e.imageDir + u[0] + "-" + String(u[1]).substring(0, 1) + ".jpg";
                        else g = e.imageDir + i[0][0] + ".jpg";
                        document.getElementById("img-doughnut-" + o).src = g, document.getElementById("img-doughnut-" + o).style.border = "5px solid " + i[2][0]
                    }
                    e.targetIndex = 0, e.targetColor = i[2][0];
                    var f = {
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
                                            a = l.data[n]._model,
                                            r = l.total,
                                            o = a.innerRadius + (a.outerRadius - a.innerRadius) / 2,
                                            s = a.startAngle,
                                            d = s + (a.endAngle - s) / 2,
                                            c = o * Math.cos(d),
                                            p = o * Math.sin(d);
                                        i.fillStyle = "#000";
                                        var h = String(Math.round(e.data[n] / r * 100)) + "%";
                                        if (n < e.data.length - 1) {
                                            var u = a.x + c + 70;
                                            p > 0 && c < 0 && (u = a.x + c - 50), i.fillText(t[n][0] + ": " + t[n][1] + ", " + h, u, a.y + p + 8)
                                        }
                                    }
                                    h = String(Math.round(e.data[e.data.length - 1] / r * 100)) + "%";
                                    i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + h, a.x + c, a.y + 2 * p)
                                })
                            }
                        },
                        hover: {
                            onHover: function(t) {
                                this.getElementAtEvent(t).length ? t.target.style.cursor = "pointer" : t.target.style.cursor = "default", "null" != e.imageDir && (pims("#img-doughnut-" + o).style.display = "block")
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
                                        if ($("#note-doughnut-" + o).show().html(i).css(O.bdr, "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var n = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                            l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                        else l = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                        document.getElementById("img-doughnut-" + o).src = l, document.getElementById("img-doughnut-" + o).style.display = "block", document.getElementById("img-doughnut-" + o).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                    }
                                } else if ("null" != e.imageDir) {
                                    i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                    if ($("#note-doughnut-" + o).show().html(i).css(O.bdr, "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) n = String(this._data.labels[e.targetIndex]).split("-"), l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                    else l = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                    document.getElementById("img-doughnut-" + o).src = l, document.getElementById("img-doughnut-" + o).style.display = "block", document.getElementById("img-doughnut-" + o).style.border = "5px solid " + e.targetColor
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
                        options: f
                    });
                    try {
                        e.callback()
                    } catch (t) {}
                })
            },
            _ec_: function(t) {
                var e = this._p_(t);
                potato._ = this._p_(t);
                var i = paramE[O.wit],
                    n = paramE.indexCol,
                    l = paramE.tool,
                    a = paramE.trigger,
                    r = paramE[O.tp],
                    o = paramE[O.lft];
                attr.dragdrop, e.id;
                potato.table = document.getElementById(e.id);
                document.getElementById(e.id);
                var s = new Array;
                s = paramE.editCol;
                e.id;

                function d() {
                    var t = document.getElementById(e.id);
                    $O$P.nodevalue = $O$S.prototype.l($O$V().lp);
                    var a = "-";
                    try {
                        a = t.rows[potato.ri].cells[e.matchCol].innerText
                    } catch (t) {}
                    var d = -1;
                    try {
                        d = s.indexOf($(this).parent().children().index(this))
                    } catch (t) {}
                    if ("off" != potato.edit && $O$T != this && potato.closeEditCell(), !("-" != e.matchCol && a != e.matchValue || $(this).parent().children().index(this) != s && -1 == d && "any" != s)) {
                        var c = 0,
                            p = this;
                        try {
                            p.firstChild.value
                        } catch (t) {
                            p.innerText = " "
                        }
                        if ($O$T = this, "INPUT" == p.firstChild.nodeName) {
                            potato.edit = "off";
                            p = this;
                            var h = document.createTextNode(p.firstChild.value);
                            p.replaceChild(h, p.firstChild), c = 1, $("#keypadtable").hide(), potato.trigger = 0, $O$P.nodevalue = p.firstChild.nodeValue, e.callback(p.firstChild.nodeValue, potato.oldValue, t.rows[potato.ri].cells[n].innerText, potato.ci)
                        }
                        if (1 != c && "INPUT" != p.firstChild.nodeName && "IMG" != p.firstChild.nodeName) {
                            potato.edit = "on";
                            var u = document.createElement("input");
                            if (u.select(), u.value = t.rows[potato.ri].cells[potato.ci].innerText, u.setAttribute("autocomplete", "off"), u.style.width = i, u.style.height = "25px", u.style.fontSize = "15px", u.style.fontWeight = "bold", u.style.background = "rgb(255,244,255)", "undefined" != p.firstChild.nodeValue && (p.replaceChild(u, p.firstChild), p.firstChild.select(), p.firstChild.focus()), "undefined" != l) {
                                var g = document.createElement("div");
                                if (g.innerHTML = '<div id="keypadtable" class="keypad"></div>', document.body.appendChild(g), $(".keypad").hide(), keyID = "keypadtable", -1 != String(l).indexOf(".htm")) $("#keypadtable").load(l);
                                else if ("default" == l) {
                                    var f = "height:60px;width:80px;font-size:27px;background:#CED8F6;cursor: pointer;";
                                    f += "border-radius:10px;border:1px solid black;", css_c = "width:170px;";
                                    var m = "<table>";
                                    m += "<tr>", m += "<td><input type='button' style='" + f + "' value='7' onclick='potato.getKey(\"7\")'></td>", m += "<td><input type='button' style='" + f + "' value='8' onclick='potato.getKey(\"8\")'></td>", m += "<td><input type='button' style='" + f + "' value='9' onclick='potato.getKey(\"9\")'></td>", m += "</tr>", m += "<tr>", m += "<td><input type='button' style='" + f + "' value='4' onclick='potato.getKey(\"4\")'></td>", m += "<td><input type='button' style='" + f + "' value='5' onclick='potato.getKey(\"5\")'></td>", m += "<td><input type='button' style='" + f + "' value='6' onclick='potato.getKey(\"6\")'></td>", m += "</tr>", m += "<tr>", m += "<td><input type='button' style='" + f + "' value='1' onclick='potato.getKey(\"1\")'></td>", m += "<td><input type='button' style='" + f + "' value='2' onclick='potato.getKey(\"2\")'></td>", m += "<td><input type='button' style='" + f + "' value='3' onclick='potato.getKey(\"3\")'></td>", m += "</tr>", m += "<tr>", m += "<td><input type='button' style='" + f + "background:#F6CECE;' value='CE' onclick='potato.getKey(\"CE\")'></td>", m += "<td><input type='button' style='" + f + "' value='0' onclick='potato.getKey(\"0\")'></td>", m += "<td><input type='button' style='" + f + "' value='.' onclick='potato.getKey(\".\")'></td>", m += "</tr>", m += "<tr>", m += "<td colspan=2><input type='button' style='" + f + css_c + "background:#D8D8D8;' value='CLOSE' onclick='potato.closeEditCell()'/></td>", m += "<td><input type='button' style='" + f + "background:#CEF6CE;' value='⇦' onclick='potato.getKey(\"<-\")'></td>", m += "</tr>", m += "</table>", $("#keypadtable").html(m)
                                } else $("#keypadtable").html(l);
                                var y = document.documentElement,
                                    v = (window.pageXOffset || y.scrollLeft) - (y.clientLeft || 0),
                                    b = (window.pageYOffset || y.scrollTop) - (y.clientTop || 0),
                                    x = parseFloat(event.clientY) + 20 + parseFloat(b),
                                    O = parseFloat(event.clientX) - parseFloat(v);
                                null != r && (x = parseFloat(event.clientY) + 20 + parseFloat(r) + parseFloat(b)) > 300 && (x = event.clientY - 220), null != o && (O = parseFloat(event.clientX) + parseFloat(o) - parseFloat(v)) > 900 && (O = event.clientX - 100), $("#keypadtable").css({
                                    width: "200px",
                                    height: "150px",
                                    margin: e.marginKey,
                                    display: "block",
                                    position: "absolute",
                                    top: x + "px",
                                    left: O + "px",
                                    zIndex: 2e3
                                })
                            }
                            $O$U = u
                        }
                    }
                }
                $("#" + e.id + " td").click(function() {
                    if (potato.ci = $(this).parent().children().index(this), potato.ri = $(this).parent().parent().children().index(this.parentNode), 1 != potato.trigger) {
                        var t = document.getElementById(e.id);
                        potato.oldValue = t.rows[potato.ri].cells[potato.ci].innerText, potato.trigger = 1
                    }
                });
                for (var c = document.getElementById(e.id).getElementsByTagName("td"), p = 0; p < c.length; p++) c[p].onkeyup = function(t) {}, "dblclick" == a ? c[p].ondblclick = d : a == O.clk ? c[p].onclick = d : c[p].ondblclick = d, c[p].onmousemove = function() {}
            },
            _ect_: function(t) {
                var e = this._p_(t);
                pimsParameters = e;
                var i = e.id,
                    n = document.getElementById(e.id),
                    l = new Array;

                function a() {
                    var t = "-";
                    try {
                        t = n.rows[$O$P.rowId].cells[e.matchCol].innerText
                    } catch (t) {}
                    try {
                        if (!("-" != e.matchCol && t != e.matchValue || $(this).parent().children().index(this) != l && -1 == l.indexOf($(this).parent().children().index(this)) && "any" != l)) {
                            var i = 0,
                                a = this;
                            try {
                                a.firstChild.value
                            } catch (t) {
                                a.innerText = " "
                            }
                            if ($O$T = this, "INPUT" == a.firstChild.nodeName) {
                                a = this;
                                r = document.createTextNode(a.firstChild.value), a.replaceChild(r, a.firstChild), i = 1, $("#keypadtable").hide()
                            }
                            if (1 != i && "INPUT" != a.firstChild.nodeName && "IMG" != a.firstChild.nodeName) {
                                var o = document.createElement("input");
                                o.select();
                                var s = a.firstChild.nodeValue;
                                "null" != s && "undefined" != s && null != s && null != s || (s = a.firstChild.innerText), o.value = s, o.setAttribute("autocomplete", "off"), o.style.width = e.editWidth + "px", o.style.height = "25px", o.style.fontSize = "15px", o.style.fontWeight = "bold", o.style.background = "rgb(255,244,255)", "undefined" != a.firstChild.nodeValue && (a.replaceChild(o, a.firstChild), a.firstChild.select(), a.firstChild.focus());
                                var d = document.createElement("div");
                                d.innerHTML = '<div id="keypadtable"></div>', document.body.appendChild(d);
                                var c = event.clientY + 20;
                                c > 300 && (c = event.clientY - 220);
                                var p = event.clientX;
                                p > 900 && (p = event.clientX - 100), $("#keypadtable").load(e.htm).css({
                                    width: "200px",
                                    height: "150px",
                                    margin: e.marginKey,
                                    display: "block",
                                    position: "absolute",
                                    top: c,
                                    left: p,
                                    zIndex: 2e3
                                }), $O$U = o
                            }
                        }
                    } catch (t) {}
                }
                l = e.targetCol;
                for (var r = document.getElementById(i), o = r.getElementsByTagName("td"), s = 0; s < o.length; s++) o[s].onkeyup = function(t) {}, "dblclick" == e.trigger ? o[s].ondblclick = a : e.trigger == O.clk ? o[s].onclick = a : o[s].ondblclick = a, o[s].onmousemove = function() {}
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
                        s.FolderExists("C:\\$POTATO") || s.CreateFolder("C:\\$POTATO"), a = r.Workbooks.Open(o.slice(0, 1) + e)
                    } else a = r.Workbooks.Add;
                    a.Worksheets(1).Paste
                }
                window.clipboardData.clearData()
            },
            _kb_: function(t) {
                var e = O.is(this),
                    i = this.x,
                    n = this._p_(t),
                    l = n.id;
                e.createdCallback = function() {
                    this.id = l + "_", $O$X.prototype.getAttribute(this, l).index, $O$X.prototype.getAttribute(this, l).field, this.pims = l;
                    var t = '<div id="div-' + l + '"> ';
                    t += '<input type="text" id="' + l + '"> ', t += '<div class="keypad" id="keypad-' + l + '"></div> ', t += "</div> ", this.innerHTML = t, $O$U = document.getElementById(l), pims("#div-" + l).style.display = n.display, pims("#div-" + l).style.position = n.position, pims("#div-" + l).style.left = n.left + "px", pims("#div-" + l).style.top = n.top + "px", POTATO("#" + l).style.top = n.top + "px", $("#div-" + l).css({
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
                    }).attr(O.val, n.value).mousemove(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.hoverBgColor), $(this).css(O.co, n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.background), $(this).css(O.co, n.i), $("#" + n.hoverId).hide().html("")
                    }).click(function() {
                        try {
                            for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + l, $(".keypad").hide(), $(O.kp + l).show(), $("#KeyBoard").show();
                        var i = document.documentElement,
                            a = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                            r = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                        $(O.kp + l).css({
                            position: "absolute",
                            top: parseFloat(event.clientY) + 20 + parseFloat(n.topKey) + parseFloat(r) + "px",
                            left: parseFloat(event.clientX) + parseFloat(n.leftKey) - parseFloat(a) + "px"
                        }), $O$B = document.getElementById(l);
                        try {
                            n.click()
                        } catch (t) {}
                    }), $(O.kp + l).load(n.htm).click(function() {
                        try {
                            n.change(l)
                        } catch (t) {}
                    }).css({
                        width: "200px",
                        height: "150px",
                        display: n.displayKey
                    })
                }, this._p_e(i, e)
            },
            _kp_: function(t) {
                var e = this,
                    i = O.is(this),
                    n = this._p_(t),
                    l = n.id,
                    a = this.x,
                    r = param.ngmodel,
                    o = param.tool;
                i.createdCallback = function() {
                    if (this.id = n.id + "_", $O$X.prototype.getAttribute(this, l).index, $O$X.prototype.getAttribute(this, l).field, this.pims = l, "true" == n.disabled || "" == n.disabled) {
                        var t = '<div disabled id="div-' + l + '"> ';
                        "none" == n.display ? t += null == r ? '<input disabled type="text" id="' + l + '" class="' + n.className + '"> ' : '<input disabled ng-model="' + r + '" type="text" id="' + l + '" class="' + n.className + '"> ' : t += null == r ? '<br><input disabled type="text" id="' + l + '"  class="' + n.className + '" > ' : '<br><input disabled ng-model="' + r + '" type="text" id="' + l + '"  class="' + n.className + '" > '
                    }
                    if ("false" == n.disabled) {
                        t = '<div id="div-' + l + '"> ';
                        "none" == n.display ? t += null == r ? '<input type="text" id="' + l + '" class="' + n.className + '"> ' : '<input ng-model="' + r + '" type="text" id="' + l + '" class="' + n.className + '"> ' : t += null == r ? '<br><input type="text" id="' + l + '"  class="' + n.className + '" > ' : '<br><input ng-model="' + r + '" type="text" id="' + l + '"  class="' + n.className + '" > '
                    }
                    t += '<div class="keypad" id="keypad-' + l + '" class="keypad"></div> ', t += "</div> ", this.innerHTML = "<br>" + t, $O$U = document.getElementById(l), "potato.now" == n.value && (n.value = e.now), "potato.today()" == n.value && (n.value = e.today()), "potato.now()" == n.value && (n.value = e.now()), "null" != n.float && $("#" + l + "_").css("float", n.float), $("#div-" + l).css({
                        display: n.display,
                        position: n.position,
                        left: n.left,
                        top: n.top,
                        marginTop: n.marginTop
                    }), e._css_id(n, l), $("#" + l).attr(O.val, n.value).mousemove(function() {
                        "null" != n.hoverBgColor && "false" != n.hoverBgColor && ($(this).css(O.bolor, n.hoverBgColor), $(this).css(O.co, n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        }))
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && "false" != n.hoverBgColor && $(this).css(O.bolor, n.background), $(this).css(O.co, n.i), $("#" + n.hoverId).hide().html("")
                    }).click(function() {
                        if ($(".keypad").hide(), null != o) - 1 != o.indexOf("htm") || -1 != o.indexOf("html") ? $(O.kp + l).load(o) : $(O.kp + l).html(o);
                        else {
                            var t = "height:60px;width:80px;font-size:27px;background:#CED8F6;cursor: pointer;";
                            t += "border-radius:10px;border:1px solid black;", css_c = "width:170px;", o = "<table>", o += "<tr>", o += "<td><input type='button' style='" + t + "' value='7' onclick='potato.getKey(\"7\")'></td>", o += "<td><input type='button' style='" + t + "' value='8' onclick='potato.getKey(\"8\")'></td>", o += "<td><input type='button' style='" + t + "' value='9' onclick='potato.getKey(\"9\")'></td>", o += "</tr>", o += "<tr>", o += "<td><input type='button' style='" + t + "' value='4' onclick='potato.getKey(\"4\")'></td>", o += "<td><input type='button' style='" + t + "' value='5' onclick='potato.getKey(\"5\")'></td>", o += "<td><input type='button' style='" + t + "' value='6' onclick='potato.getKey(\"6\")'></td>", o += "</tr>", o += "<tr>", o += "<td><input type='button' style='" + t + "' value='1' onclick='potato.getKey(\"1\")'></td>", o += "<td><input type='button' style='" + t + "' value='2' onclick='potato.getKey(\"2\")'></td>", o += "<td><input type='button' style='" + t + "' value='3' onclick='potato.getKey(\"3\")'></td>", o += "</tr>", o += "<tr>", o += "<td><input type='button' style='" + t + "background:#F6CECE;' value='CE' onclick='potato.getKey(\"CE\")'></td>", o += "<td><input type='button' style='" + t + "' value='0' onclick='potato.getKey(\"0\")'></td>", o += "<td><input type='button' style='" + t + "' value='.' onclick='potato.getKey(\".\")'></td>", o += "</tr>", o += "<tr>", o += "<td colspan=2><input type='button' style='" + t + css_c + "background:#D8D8D8;' value='CLOSE' onclick='potato.closePad()'/></td>", o += "<td><input type='button' style='" + t + "background:#CEF6CE;' value='⇦' onclick='potato.getKey(\"<-\")'></td>", o += "</tr>", o += "</table>", $(O.kp + l).html(o)
                        }
                        try {
                            for (var e = document.getElementsByClassName("pims-list"), i = 0; i < e.length; i++) e[i].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + l, $(".keypad").hide(), $(O.kp + l).show(), $("#KeyPad").show();
                        var a = document.documentElement,
                            r = (window.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
                            s = (window.pageYOffset || a.scrollTop) - (a.clientTop || 0),
                            d = parseFloat(event.clientY) + 20 + parseFloat(n.top) + parseFloat(s),
                            c = parseFloat(event.clientX) + parseFloat(n.left) - parseFloat(r);
                        $(O.kp + l).css({
                            zIndex: "2000",
                            position: "absolute",
                            top: d + "px",
                            left: c + "px"
                        }), $O$U = document.getElementById(l);
                        try {
                            n.click()
                        } catch (t) {}
                    }).keyup(function(t) {
                        for (var e = 0; e < $O$Id.length; e++)
                            if (l == String($O$Id[e])) {
                                var i = String($O$BindId[e]);
                                document.getElementById(i).innerText = document.getElementById(l).value
                            }
                    }), $(O.kp + l).click(function() {
                        for (var t = 0; t < $O$Id.length; t++)
                            if (l == String($O$Id[t])) {
                                var e = String($O$BindId[t]);
                                document.getElementById(e).innerText = document.getElementById(l).value
                            }
                        try {
                            n.change(l)
                        } catch (t) {}
                        try {
                            n.click(l)
                        } catch (t) {}
                    }).css({
                        width: "200px",
                        height: "150px",
                        display: n.displayKey
                    })
                }, this._p_e(a, i)
            },
            _lt_: function(t) {
                var i = this,
                    l = O.is(this),
                    a = this.x,
                    r = this._p_(t),
                    o = r.id,
                    s = param.ngmodel;
                "potato.today()" == r.value && (r.value = i.today()), "potato.now()" == r.value && (r.value = i.now()), l.createdCallback = function() {
                    if (this.id = o + "_", $O$X.prototype.getAttribute(this, o).index, $O$X.prototype.getAttribute(this, o).field, this.pims = o, "none" == r.display ? this.innerHTML = null == s ? '<input type="text" id="' + o + '" class="' + r.className + '"> ' : '<input ng-model="' + s + '" type="text" id="' + o + '" class="' + r.className + '"> ' : this.innerHTML = null == s ? '<br><input type="text" id="' + o + '"  class="' + r.className + '" > ' : '<br><input ng-model="' + s + '" type="text" id="' + o + '"  class="' + r.className + '" > ', this.innerHTML += '<div id="div-' + o + '" onscroll="pims(\'div-' + o + "').scrolly('locked_top',0,0)\" class=\"pims-list\"> ", i._css_id(r, o), $("#" + o).attr({
                            value: r.value,
                            type: r.type
                        }).mousemove(function() {
                            "null" != r.hoverBgColor && $(this).css(O.bolor, r.hoverBgColor), $(this).css(O.co, r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                                fontSize: "15px",
                                fontFamily: "Arial",
                                padding: "3px 3px 3px 3px",
                                height: r.hoverHeight,
                                width: r.hoverWidth,
                                background: "#ffffe5",
                                border: O.bdr1,
                                position: "absolute",
                                top: event.clientY + 30,
                                left: event.clientX - 20,
                                borderRadius: "3px"
                            })
                        }).mouseout(function() {
                            "null" != r.hoverBgColor && $(this).css(O.bolor, r.background), $(this).css(O.co, r.i), $("#" + r.hoverId).hide().html("")
                        }).keyup(function(t) {
                            for (var e = 0; e < $O$Id.length; e++)
                                if (o == String($O$Id[e])) {
                                    var i = String($O$BindId[e]);
                                    document.getElementById(i).innerText = document.getElementById(o).value
                                }
                            try {
                                r.keyup(t)
                            } catch (t) {}
                        }).change(function() {
                            try {
                                r.change()
                            } catch (t) {}
                        }), String(r.listWidth).split("_").slice(1, 2) == a) var l = String(r.listWidth).split("_").slice(0, 1);
                    if (String(r.listHeight).split("_").slice(1, 2) == a) var d = String(r.listHeight).split("_").slice(0, 1);
                    if (String(r.listTop).split("_").slice(1, 2) == a) var c = String(r.listTop).split("_").slice(0, 1);
                    if (String(r.listLeft).split("_").slice(1, 2) == a) var p = String(r.listLeft).split("_").slice(0, 1);
                    if (String(r.params).split("@").slice(1, 2) == a) var h = String(r.params).split("@").slice(0, 1);
                    if (String(r.where).split("@").slice(1, 2) == a) var u = String(r.where).split("@").slice(0, 1);
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
                        var s = $O$P.prototype._p_(t),
                            g = h;
                        if ("block" != document.getElementById("div-" + o).style.display && $(".pims-list").css({
                                display: "none",
                                height: "0px"
                            }), document.getElementById("div-" + o).style.height == s.listHeight) document.getElementById("div-" + o).style.height = "0px";
                        else {
                            try {
                                pimsListObject.style.display = "none"
                            } catch (t) {}
                            $("#div-" + o).css(O.dpy, "block");
                            var f = s.model,
                                m = [];
                            if (null != u) {
                                var y = $O$X.prototype.getIdClass(String(u));
                                try {
                                    this.index = y.getAttribute("index"), null == this.index && (this.index = 9999999)
                                } catch (t) {
                                    this.index = 9999999
                                }
                                try {
                                    this.field = y.getAttribute("field"), null == this.field && (this.field = 9999999)
                                } catch (t) {
                                    this.field = 9999999
                                }
                                for (var v = 0; v < y.length; v++) {
                                    var b = String(y[v].id).split("-").slice(2, 3);
                                    m[y[v].field] = pims(b).value()
                                }
                            }
                            if (null != g && "null" != h)
                                for (var x = (String(h).match(/AND/g) || []).length, w = String(h).split("AND"), S = 0; S <= x; S++) {
                                    var k = String(w.slice(S, S + 1)).split(":"),
                                        _ = new Function(k.slice(1, 2));
                                    "null" != String(k.slice(0, 1)).replace(/\s+/g, "") && (m[String(k.slice(0, 1)).replace(/\s+/g, "")] = _())
                                }
                            if (-1 != String(C).indexOf(O.php) && (f = document.getElementsByTagName(a)[0].getAttribute("data")), null != f) $O$P.prototype._rp_(f, m, function(t) {
                                var i = O.parse(t),
                                    r = "<table class='potato-list-table' id='list-" + o + "' >",
                                    h = 0;
                                for (e in r += "<tr>", i[0]) "" != i[0][e] ? r += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + i[0][e] + "</th>" : r += "<th style='display:none'>" + i[0][e] + "</th>", h++;
                                for (n in r += "</tr>", i)
                                    if ("undefined" != i[n][0] && null != i[n][0] && n > 0) {
                                        r += "<tr>";
                                        for (var u = 0; u < h; u++) "" != i[0][u] ? r += "<td>" + i[n][u] + "</td>" : r += "<td style='display:none'>" + i[n][u] + "</td>";
                                        r += "</tr>"
                                    }
                                r += "</table>", document.getElementById("div-" + o).style.height = "0px";
                                var g = String(c).split("px"),
                                    f = String(p).split("px");
                                pimsListObject = document.getElementById("div-" + o), $("#div-" + o).html(r).css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: events.clientLeft + parseFloat(f.slice(0, 1)) + "px",
                                    top: events.clientTop + parseFloat(g.slice(0, 1)) + "px",
                                    height: d,
                                    width: l,
                                    overflow: "auto",
                                    border: O.bdr0,
                                    borderRadius: 0,
                                    background: "transparent",
                                    zIndex: 1e4
                                }), $("#list-" + o + " td").css({
                                    fontFamily: s.fontFamily,
                                    fontWeight: s.fontWeight,
                                    fontSize: s.fontSize + "px"
                                }).click(function() {
                                    var t = document.getElementById("list-" + o),
                                        e = $(this).parent().parent().children().index(this.parentNode),
                                        i = $(this).parent().children().index(this);
                                    if (t.rows[e].cells[0].innerText != O.close && "CLOSE" != t.rows[e].cells[0].innerText) {
                                        POTATO(o).value(t.rows[e].cells[0].innerText);
                                        for (var n = 0; n < $O$Id.length; n++)
                                            if (o == String($O$Id[n])) {
                                                var l = String($O$BindId[n]);
                                                document.getElementById(l).innerText = document.getElementById(o).value
                                            }
                                    } else $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), $("#div-" + o).html("");
                                    try {
                                        s.click(t.rows[e], a, i), $("#div-" + o).html("")
                                    } catch (t) {}
                                    document.getElementById("div-" + o).style.height = "0px"
                                }), $("#list-" + o + " th").css(O.csr, "pointer").click(function() {
                                    var t = document.getElementById("list-" + o),
                                        e = $(this).parent().parent().children().index(this.parentNode);
                                    ci = $(this).parent().children().index(this), $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), $("#div-" + o).hide().html(""), document.getElementById(o).style.background = s.background;
                                    try {
                                        s.click(t.rows[e], a, ci)
                                    } catch (t) {}
                                    document.getElementById("div-" + o).style.height = "0px"
                                });
                                try {
                                    s.callback(a)
                                } catch (t) {}
                            });
                            else {
                                var T = i.getAttr(a, O.hdr),
                                    C = i.getAttr(a, O.dat),
                                    A = i.getAttr(a, "listTextAlign");
                                null == A && (A = "center");
                                var I = i.getAttr(a, "listFontSizeTH");
                                null == I && (I = "18px");
                                var E = i.getAttr(a, "listFontSizeTD");
                                null == E && (E = "18px");
                                var B = i.getAttr(a, "listFontFamilyTD");
                                null == B && (B = "Tempus Sans ITC");
                                var F = i.getAttr(a, "listFontFamilyTH");
                                null == F && (F = "Tempus Sans ITC");
                                var D = i.getAttr(a, "listFontColorTH");
                                null == D && (D = "Black");
                                var L = i.getAttr(a, "listFontColorTD");
                                null == L && (L = "Black");
                                var P = i.getAttr(a, "listFontWeightTD");
                                null == P && (P = "normal");
                                var N = i.getAttr(a, "listFontWeightTH");
                                null == N && (N = "normal");
                                v = O.parse(C);
                                var z = "<table class='potato-list-table' id='list-" + o + "' >",
                                    H = 0;
                                if (null == T) {
                                    for (e in z += "<tr>", v[0]) "" != v[0][e] ? z += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + v[0][e] + "</th>" : z += "<th style='display:none'>" + v[0][e] + "</th>", H++;
                                    for (n in z += "</tr>", v)
                                        if ("undefined" != v[n][0] && null != v[n][0] && n > 0) {
                                            z += "<tr>";
                                            for (var R = 0; R < H; R++) "" != v[0][R] ? z += "<td style='text-align:" + A + "'>" + v[n][R] + "</td>" : z += "<td style='display:none'>" + v[n][R] + "</td>";
                                            z += "</tr>"
                                        }
                                } else {
                                    T = String(T).split(",");
                                    for (e in z += "<tr>", T) "-" != T[e] ? z += "<th style='border:1px solid black;font-size:" + I + ";color:" + D + ";text-align:" + A + ";font-weight:" + N + ";font-family:" + F + "'>" + T[e] + "</th>" : z += "<th style='display:none'>" + T[e] + "</th>", H++;
                                    for (n in z += "</tr>", v)
                                        if ("undefined" != v[n][0] && null != v[n][0] && n >= 0) {
                                            z += "<tr>";
                                            for (R = 0; R < H; R++) "-" != T[R] ? z += "<td style='font-size:" + E + ";color:" + L + ";text-align:" + A + ";font-weight:" + P + ";font-family:" + B + "'>" + v[n][R] + "</td>" : z += "<td style='display:none'>" + v[n][R] + "</td>";
                                            z += "</tr>"
                                        }
                                }
                                z += "</table>", document.getElementById("div-" + o).style.height = "0px";
                                var M = String(c).split("px"),
                                    X = String(p).split("px");
                                pimsListObject = document.getElementById("div-" + o), $("#div-" + o).html(z).css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: events.clientLeft + parseFloat(X.slice(0, 1)) + "px",
                                    top: events.clientTop + parseFloat(M.slice(0, 1)) + "px",
                                    height: d,
                                    width: l,
                                    overflow: "auto",
                                    border: O.bdr0,
                                    borderRadius: 0,
                                    background: "transparent",
                                    zIndex: 1e4
                                }), $("#list-" + o + " td").css({
                                    fontFamily: s.fontFamily,
                                    fontWeight: s.fontWeight,
                                    fontSize: s.fontSize + "px"
                                }).click(function() {
                                    var t = document.getElementById("list-" + o),
                                        e = $(this).parent().parent().children().index(this.parentNode),
                                        i = $(this).parent().children().index(this);
                                    if (t.rows[e].cells[0].innerText != O.close && "CLOSE" != t.rows[e].cells[0].innerText) {
                                        POTATO(o).value(t.rows[e].cells[0].innerText), $(document.getElementById(o)).trigger("change");
                                        for (var n = 0; n < $O$Id.length; n++)
                                            if (o == String($O$Id[n])) {
                                                var l = String($O$BindId[n]);
                                                document.getElementById(l).innerText = document.getElementById(o).value
                                            }
                                    } else $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), $("#div-" + o).html("");
                                    try {
                                        s.click(t.rows[e], a, i), $("#div-" + o).html("")
                                    } catch (t) {}
                                    document.getElementById("div-" + o).style.height = "0px"
                                }), $("#list-" + o + " th").css(O.csr, "pointer").click(function() {
                                    var t = document.getElementById("list-" + o),
                                        e = $(this).parent().parent().children().index(this.parentNode);
                                    ci = $(this).parent().children().index(this), $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), $("#div-" + o).hide().html(""), document.getElementById(o).style.background = s.background;
                                    try {
                                        s.click(t.rows[e], a, ci)
                                    } catch (t) {}
                                    document.getElementById("div-" + o).style.height = "0px"
                                });
                                try {
                                    s.callback(a)
                                } catch (t) {}
                            }
                        }
                    }
                }, this._p_e(a, l)
            },
            _m_: function(t) {
                var i = O.is(this),
                    l = this.x,
                    a = this._p_(t),
                    r = a.id;
                i.createdCallback = function() {
                    this.id = r + "_", this.pims = r;
                    var i = a.menuTitle.split(","),
                        o = a.menuModel.split(",");
                    this.innerHTML = "<table><tr>";
                    for (var s = 0; s < i.length; s++) this.innerHTML += '<td><a id="' + r + "-" + i[s] + '" name="' + o[s] + '" class="' + a.id + '" >' + i[s] + "</a></td>", $("#" + r + "-" + i[s]).css({
                        width: a.width,
                        height: a.height,
                        color: a.color,
                        background: a.background,
                        boxShadow: a.boxShadow,
                        fontFamily: a.fontFamily,
                        fontWeight: a.fontWeight,
                        fontSize: a.fontSize,
                        textAlign: a.textAlign,
                        padding: a.padding,
                        margin: a.margin,
                        border: a.border,
                        textDecoration: "underline",
                        borderRadius: a.borderRadius,
                        textTransform: a.textTransform,
                        position: a.position,
                        left: a.left,
                        top: a.top,
                        float: a.float,
                        cursor: "pointer"
                    }).mouseover(function() {
                        "null" != a.hoverBgColor && $(this).css(O.bolor, a.hoverBgColor), $(this).css(O.co, a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: a.hoverHeight,
                            width: a.hoverWidth,
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30 + "px",
                            left: event.clientX - 20 + "px",
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != a.hoverBgColor && $(this).css(O.bolor, a.background), $(this).css(O.co, a.i), $("#" + a.hoverId).hide().html("")
                    }).keyup(function(t) {
                        for (var e = 0; e < $O$Id.length; e++)
                            if (r == String($O$Id[e])) {
                                var i = String($O$BindId[e]);
                                document.getElementById(i).innerText = document.getElementById(r).value
                            }
                        try {
                            a.keyup(t)
                        } catch (t) {}
                    }).change(function() {
                        try {
                            a.change()
                        } catch (t) {}
                    });
                    if (this.innerHTML += "</tr></table>", this.innerHTML += '<div id="div-' + r + '" onscroll="pims(\'div-' + r + "').scrolly('locked_top',0,0)\" class=\"" + a.id + '"> ', String(a.widthTable).split("_").slice(1, 2) == l) var d = String(a.widthTable).split("_").slice(0, 1);
                    if (String(a.heightTable).split("_").slice(1, 2) == l) var c = String(a.heightTable).split("_").slice(0, 1);
                    if (String(a.marginTop).split("_").slice(1, 2) == l) var p = String(a.marginTop).split("_").slice(0, 1);
                    if (String(a.marginLeft).split("_").slice(1, 2) == l) var h = String(a.marginLeft).split("_").slice(0, 1);
                    if (String(a.params).split("@").slice(1, 2) == l) var u = String(a.params).split("@").slice(0, 1);
                    if (String(a.where).split("@").slice(1, 2) == l) var g = String(a.where).split("@").slice(0, 1);
                    $("." + r).mouseenter(function(i) {
                        $O$Menu = 1;
                        var a = $O$P.prototype._p_(t),
                            o = u;
                        if ("block" != document.getElementById("div-" + r).style.display && $(".pims-list").css({
                                display: "none",
                                height: "0px"
                            }), document.getElementById("div-" + r).style.height == a.heightTable + "px") document.getElementById("div-" + r).style.height = "0px";
                        else {
                            $("#div-" + r).css("marginTop", "-2px");
                            var s = this.name,
                                f = [];
                            if (null != g) {
                                var m = $O$X.prototype.getIdClass(String(g));
                                try {
                                    this.index = m.getAttribute("index"), null == this.index && (this.index = 9999999)
                                } catch (t) {
                                    this.index = 9999999
                                }
                                try {
                                    this.field = m.getAttribute("field"), null == this.field && (this.field = 9999999)
                                } catch (t) {
                                    this.field = 9999999
                                }
                                for (var y = 0; y < m.length; y++) {
                                    var v = String(m[y].id).split("-").slice(2, 3);
                                    f[m[y].field] = pims(v).value()
                                }
                            }
                            if (null != o && "null" != u)
                                for (var b = (String(u).match(/AND/g) || []).length, x = String(u).split("AND"), w = 0; w <= b; w++) {
                                    var S = String(x.slice(w, w + 1)).split(":"),
                                        k = new Function(S.slice(1, 2));
                                    "null" != String(S.slice(0, 1)).replace(/\s+/g, "") && (f[String(S.slice(0, 1)).replace(/\s+/g, "")] = k())
                                }
                            $O$P.prototype._rp_(s, f, function(t) {
                                var i = O.parse(t);
                                check_model = 1;
                                var o = "<table class='potato-menu-table' id='" + r + "' >",
                                    s = 0;
                                for (e in o += "<tr>", i[0]) "" != i[0][e] ? o += "<th>" + i[0][e] + "</th>" : o += "<th style='display:none'>" + i[0][e] + "</th>", s++;
                                for (n in o += "</tr>", i)
                                    if ("undefined" != i[n][0] && null != i[n][0] && n > 0) {
                                        o += "<tr>";
                                        for (var u = 0; u < s; u++) "" != i[0][u] ? o += "<td>" + i[n][u] + "</td>" : o += "<td style='display:none'>" + i[n][u] + "</td>";
                                        o += "</tr>"
                                    }
                                o += "</table>", document.getElementById("div-" + r).style.height = "0px";
                                var g = parseFloat(p) + "px",
                                    f = parseFloat(h) + "px";
                                pimsListObject = document.getElementById("div-" + r), document.getElementById("div-" + r).style.display = "block", $("#div-" + r).html(o).css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: f,
                                    top: g,
                                    height: c + "px",
                                    width: d + "px",
                                    overflow: "auto",
                                    border: O.bdr0,
                                    borderRadius: 0,
                                    display: a.display,
                                    background: "transparent",
                                    zIndex: 1e4
                                }), $("#" + r + " td").css({
                                    textAlign: O.lft,
                                    fontFamily: a.fontFamily,
                                    fontWeight: a.fontWeight,
                                    fontSize: a.fontSize + "px"
                                }).click(function() {
                                    var t = document.getElementById(r),
                                        e = $(this).parent().parent().children().index(this.parentNode),
                                        i = $(this).parent().children().index(this);
                                    potato.table = t.rows[e], potato.ci = i;
                                    try {
                                        a.click(t.rows[e], l, i), $("#div-" + r).html("")
                                    } catch (t) {}
                                    document.getElementById("div-" + r).style.height = "0px"
                                }), $("#" + r + " th").css(O.csr, "pointer").click(function() {
                                    $("#div-" + r).css(O.dpy, "none")
                                });
                                try {
                                    a.callback(l)
                                } catch (t) {}
                            })
                        }
                    }), $("." + r).mouseleave(function(t) {
                        $O$Menu = 0
                    }), $(document).mouseover(function(t) {
                        0 == $O$Menu && $("#div-" + r).css(O.dpy, "none")
                    })
                }, this._p_e(l, i)
            },
            _p_: function(t) {
                var e, i, n, l, a, r, o, s, d, c, p, h, u, g, f, m, y, v, b, x, $, w, S, k, _, T, C, A, I, E, B, F, D, L, P, N, z, H, R, M, X, W, K, j, V, U, Y, q, G, Q, Z, J, tt, et, it, nt, lt, at, rt, ot, st, dt, ct, pt, ht, ut, gt, ft, mt, yt, vt, bt, xt, Ot, $t, wt, St, kt, _t, Tt, Ct, At, It, Et, Bt, Ft, Dt, Lt, Pt, Nt, zt, Ht, Rt, Mt, Xt, Wt, Kt, jt, Vt, Ut, Yt, qt, Gt, Qt, Zt, Jt, te, ee, ie, ne, le, ae, re, oe, se, de, ce, pe, he, ue, ge, fe = new Array;
                return this.clearArrays(), t(), null == (Qt = css.textTransform) && (Qt = "none"), e = css[O.bolor], i = css[O.bdr], n = css[O.bdrr], l = css[O.bxsd], null == (a = events[O.cbk]) && (a = this.dummy()), null == (r = attr.canvas) && (r = "chart"), null == (o = param.cell) && (o = "0"), null == (d = attr.chartType) && (d = "pie"), null == (c = attr.chartId) && (c = "chart1Id"), null == (g = param.col) && (g = 1e3), null == (m = css.colorIndex) && (m = ["#c5ffb3"]), null == (s = events.change) && (s = this.dummy()), null == (p = attr.className) && (p = "pimsClassName"), null == (h = events[O.clk]) && (h = this.dummy()), null == (u = attr.cls) && (u = ""), null == (y = attr.container) && (y = "container"), f = css[O.co], null == (v = css[O.csr]) && (v = "default"), null == (b = css.dataFontSize) && (b = 12), null == (x = attr.dataLabel) && (x = "data"), null == ($ = attr.dataLabel2) && ($ = "data"), null == (w = attr.disabled) && (w = !1), S = css[O.dpy], null == (k = css.displayKey) && (k = "none"), _ = events.dragdrop, null == (T = param.editWidth) && (T = 100), null == (C = param.fieldClass) && (C = 0), z = css.float, A = css.fontColorTD, I = css.fontColorTH, E = css.fontFamily, B = css.fontFamilyTD, F = css.fontFamilyTH, D = css.fontSize, L = css.fontSizeTD, P = css.fontSizeTH, H = css.fontWeight, null == (N = attr.format) && (N = "yy-mm-dd"), null == (R = param.header) && (R = "0"), M = css.height, null == (X = css.heightTable) && (X = 450), null == (W = events.hover) && (W = this.dummy()), K = css.hoverColor, null == (j = css.hoverBgColor) && (j = "null"), V = attr.hoverId, null == (U = attr.hoverText) && (U = ""), null == (q = css.hoverHeight) && (q = 30), null == (Y = css.hoverWidth) && (Y = ""), null == (G = param.htm) && (G = "config/keypad.htm"), Q = attr.id, null == (Z = param.idCol) && (Z = 0), image = attr.image, null == image && (image = "nil 0 0"), J = attr.imageDir, null == (tt = css.imgWidth) && (tt = 45), null == (et = css.imgHeight) && (et = 45), null == (it = events.keyup) && (it = this.dummy()), null == (at = css.labelFontSize) && (at = 12), null == (rt = css.label2FontSize) && (rt = 12), null == (nt = attr.labelString) && (nt = ""), null == (lt = attr.label2String) && (lt = ""), dt = css[O.lft], null == (ct = css.leftKey) && (ct = 0), null == (ot = css.legendDisplay) && (ot = !1), null == (st = css.legendPosition) && (st = "bottom"), null == (pt = events.listClick) && (pt = this.dummy()), ht = css.listHeight, ut = css.listLeft, ft = css.listWidth, gt = css.listTop, mt = css.margin, yt = css.marginBottom, _t = css.marginLeft, vt = css.marginRight, Tt = css.marginTop, null == (Ot = param.markSymbol) && (Ot = ""), null == (bt = param.matchCol) && (bt = "-"), null == (xt = param.matchValue) && (xt = "-"), null == (kt = css.marginKey) && (kt = "0px 0px 0px 0px"), null == ($t = param.menuModel) && ($t = "null"), null == (wt = param.menuTitle) && (wt = "null"), Ct = param.model, null == (St = attr.multiple) && (St = !1), At = attr.name, null == (It = attr.onscroll) && (It = this.dummy()), Et = css.padding, css.paddingBottom, Bt = css.paddingLeft, css.paddingRight, Ft = css.paddingTop, null == (Dt = css.pointBorderColorIndex) && (Dt = ["#000000"]), null == (Lt = css.pointBorderDash) && (Lt = [0]), null == (Pt = css.pointBorderWidth) && (Pt = [1]), null == (Nt = css.pointColorIndex) && (Nt = ["#c5ffb3"]), null == (zt = css.pointRadius) && (zt = ["5"]), null == (Ht = css.pointStyle) && (Ht = ["triangle"]), Rt = css[O.pst], null == (Mt = param.row) && (Mt = "0"), null == (Xt = param.selectCol) && (Xt = ""), null == (Wt = param.selectColumn) && (Wt = ""), null == (Kt = css.showDay) && (Kt = !1), null == (jt = attr.stacked) && (jt = !1), null == (Vt = attr.tableId) && (Vt = "tableId"), null == (Yt = param.targetId) && (Yt = 0), null == (qt = attr.targetIndex) && (qt = 0), null == (Ut = param.targetColumn) && (Ut = ""), null == (fe = param.targetCol) && (fe = ""), null == (Gt = attr.targetColor) && (Gt = "WHITE"), Zt = css.textAlign, null == (Jt = attr.title) && (Jt = ""), null == (te = css.titleFontSize) && (te = 25), null == (ee = attr.tooltips) && (ee = !0), ie = css[O.tp], null == (ne = css.topKey) && (ne = 0), null == (le = events.trigger) && (le = "ondblclick"), null == (ae = attr.type) && (ae = "text"), null == (re = attr[O.val]) && (re = ""), null == (de = param.whereClass) && (de = 0), oe = css[O.wit], null == (se = css.widthTable) && (se = 130), null == (ce = css.xAxesFontSize) && (ce = 12), null == (pe = css.xlabelAngle) && (pe = 0), null == (he = css.yAxesFontSize) && (he = 12), null == (ue = css.y2AxesFontSize) && (ue = 12), null == (ge = attr.y2AxesType) && (ge = ""), {
                    background: e,
                    border: i,
                    borderRadius: n,
                    boxShadow: l,
                    canvas: r,
                    change: s,
                    callback: a,
                    cell: o,
                    chartId: c,
                    chartType: d,
                    className: p,
                    click: h,
                    cls: u,
                    col: g,
                    color: f,
                    colorIndex: m,
                    container: y,
                    cursor: v,
                    data: data,
                    dataFontSize: b,
                    dataLabel: x,
                    dataLabel2: $,
                    disabled: w,
                    display: S,
                    displayKey: k,
                    dragdrop: _,
                    editWidth: T,
                    field: field,
                    fieldClass: C,
                    fieldOther: fieldOther,
                    float: z,
                    fontColorTD: A,
                    fontColorTH: I,
                    fontFamilyTD: B,
                    fontFamilyTH: F,
                    fontFamily: E,
                    fontSize: D,
                    fontSizeTD: L,
                    fontSizeTH: P,
                    fontWeight: H,
                    format: N,
                    header: R,
                    height: M,
                    heightTable: X,
                    hover: W,
                    hoverBgColor: j,
                    hoverColor: K,
                    hoverHeight: q,
                    hoverId: V,
                    hoverText: U,
                    hoverWidth: Y,
                    htm: G,
                    id: Q,
                    idCol: Z,
                    image: image,
                    imageDir: J,
                    imgHeight: et,
                    imgWidth: tt,
                    keyup: it,
                    labelString: nt,
                    label2String: lt,
                    labelFontSize: at,
                    label2FontSize: rt,
                    left: dt,
                    leftKey: ct,
                    legendDisplay: ot,
                    legendPosition: st,
                    listClick: pt,
                    listHeight: ht,
                    listLeft: ut,
                    listWidth: ft,
                    listTop: gt,
                    marginKey: kt,
                    markSymbol: Ot,
                    margin: mt,
                    marginBottom: yt,
                    marginLeft: _t,
                    marginRight: vt,
                    marginTop: Tt,
                    matchCol: bt,
                    matchValue: xt,
                    menuModel: $t,
                    menuTitle: wt,
                    model: Ct,
                    multiple: St,
                    name: At,
                    onscroll: It,
                    padding: Et,
                    paddingLeft: Bt,
                    paddingTop: Ft,
                    params: params,
                    pointBorderColorIndex: Dt,
                    pointBorderDash: Lt,
                    pointBorderWidth: Pt,
                    pointColorIndex: Nt,
                    pointRadius: zt,
                    pointStyle: Ht,
                    position: Rt,
                    row: Mt,
                    selectCol: Xt,
                    selectColumn: Wt,
                    showDay: Kt,
                    stacked: jt,
                    tableId: Vt,
                    targetIndex: qt,
                    targetColor: Gt,
                    targetColumn: Ut,
                    targetCol: fe,
                    targetId: Yt,
                    textAlign: Zt,
                    textTransform: Qt,
                    title: Jt,
                    titleFontSize: te,
                    tooltips: ee,
                    top: ie,
                    topKey: ne,
                    trigger: le,
                    type: ae,
                    value: re,
                    where: where,
                    whereClass: de,
                    width: oe,
                    widthTable: se,
                    xAxesFontSize: ce,
                    xlabelAngle: pe,
                    yAxesFontSize: he,
                    y2AxesFontSize: ue,
                    y2AxesType: ge
                }
            },
            _p_e: function(t, e) {
                try {
                    pimsElement = document.registerPotato(t, {
                        prototype: e
                    })
                } catch (i) {
                    try {
                        pimsElement = document.registerPotato(t, {
                            prototype: e,
                            extends: $O$S.prototype.l($O$V().lp)
                        })
                    } catch (t) {}
                }
                return pimsElement
            },
            _potato_: function(t, e) {
                var i = O.is(this),
                    n = t.x,
                    l = this._p_(e),
                    a = n.split("-");
                return {
                    potato: this,
                    x: i,
                    m: n,
                    _: l,
                    q: a,
                    id: l.id
                }
            },
            _rg_: function(t, e) {
                var i = new XMLHttpRequest;
                i.open("GET", $O$D().POTATOModelDir2 + t), i.onload = function() {
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
                    l.readyState > 3 && 200 == l.status && (potato.response = l.responseText, i(l.responseText))
                }, l.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), l.setRequestHeader("Chartset", "UTF-8"), l.send(n), l
            },
            _re_: function(t, e, i) {
                var n = "string" == typeof e ? e : Object.keys(e).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&");
                n += "& model=" + $O$D().POTATOModelDir + t;
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
                var a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                return a.open("POST", "config/xml.php"), a.onreadystatechange = function() {
                    a.readyState > 3 && 200 == a.status && (pims_console = a.responseText, n(t, a.responseText))
                }, a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.setRequestHeader("Chartset", "UTF-8"), a.setRequestHeader("Content-length", l.length), a.setRequestHeader("Connection", "close"), a.send(l), a
            },
            _se_a: function(t, e, i, n) {
                var l = e.getAttribute(i);
                if (null == l)
                    if (null != t)
                        if (-1 == t.indexOf(i)) l = n;
                        else {
                            var a = t.split(i);
                            v2 = String(a.slice(1, 2)).split(":"), -1 != String(v2.slice(1, 2)).indexOf(";") ? (v3 = String(v2.slice(1, 2)).split(";"), l = v3.slice(0, 1)) : l = v2.slice(1, 2)
                        } else l = n;
                return l
            },
            _se_: function() {
                var t, e = (u = this.tag)("*"),
                    i = [],
                    n = [],
                    l = [],
                    a = [],
                    r = [],
                    o = [],
                    s = [],
                    d = [],
                    c = 0;
                for (t = 0; t < e.length; t++) {
                    var p = this.attr(e[t], "bind");
                    if (null != p) {
                        if ($O$Id[c] = p, null != O.attr(e[t], O.id)) $O$BindId[c] = O.attr(e[t], O.id);
                        else {
                            var h = String(e[t].tagName).split("-");
                            $O$BindId[c] = String(h.slice(2, 3)).toLowerCase()
                        }
                        c++
                    }
                    var u = String(e[t].tagName).split("-");
                    if (-1 != this.If(u.slice(0, 1))) {
                        var g, f, m = String(e[t].tagName).split("-");
                        if (m.slice(1, 2) == $O$V().b) {
                            var y = this.attr(e[t], "style"),
                                v = "true";
                            "" == (v = this._se_a(y, e[t], "disabled", "false")) && (v = "true");
                            var b = this.attr(e[t], O.id);
                            null == b && (b = String(m.slice(2, 3)).toLowerCase());
                            var x, w, S = this._se_a(y, e[t], "hoverId", "potatoHoverText"),
                                k = this._se_a(y, e[t], "hoverText", ""),
                                _ = (this._se_a(y, e[t], O.lft, "0px"), this._se_a(y, e[t], O.tp, "0px"), this._se_a(y, e[t], O.pst, "static"), this._se_a(y, e[t], O.val, "")),
                                T = this.attr(e[t], "submit"),
                                C = this.attr(e[t], "fieldOther"),
                                A = this.attr(e[t], "params"),
                                I = this.attr(e[t], "whereClass"),
                                E = this.attr(e[t], "toggle");
                            null != E && (E = new Function(this.attr(e[t], "toggle")));
                            var B = this._css_(e[t], y);
                            pims(e[t].localName)._bt_(function() {
                                if (where = I + "@" + e[t].localName, field = T + "@" + e[t].localName, fieldOther = C + "@" + e[t].localName, params = A + "@" + e[t].localName, param = {
                                        toggle: E
                                    }, css = B, null != O.attr(e[t], "value") && null != O.attr(e[t], "image") ? attr = {
                                        disabled: v,
                                        value: _,
                                        image: O.attr(e[t], "image"),
                                        hoverText: k,
                                        hoverId: S,
                                        id: b
                                    } : null != O.attr(e[t], "value") && null == O.attr(e[t], "image") ? attr = {
                                        disabled: v,
                                        value: O.attr(e[t], "value"),
                                        hoverText: k,
                                        hoverId: S,
                                        id: b
                                    } : null == O.attr(e[t], "value") && null != O.attr(e[t], "image") && (attr = {
                                        disabled: v,
                                        image: O.attr(e[t], "image"),
                                        hoverText: k,
                                        hoverId: S,
                                        id: b
                                    }), null != O.attr(e[t], "click")) try {
                                    x = new Function(O.attr(e[t], "click")), null != O.attr(e[t], "callback") && (w = new Function(O.attr(e[t], "callback"))), events = {
                                        click: x,
                                        callback: w
                                    }
                                } catch (t) {} else try {
                                    try {
                                        x = new Function("$O$." + String(m.slice(2, 3)).toLowerCase() + "()")
                                    } catch (t) {
                                        x = new Function(b + "()")
                                    }
                                    null != O.attr(e[t], "callback") && (w = new Function(O.attr(e[t], "callback"))), events = {
                                        click: x,
                                        callback: w
                                    }
                                } catch (t) {}
                            })
                        }
                        if (m.slice(1, 2) == $O$V().c) {
                            y = O.attr(e[t], "style");
                            var F = O.attr(e[t], "class");
                            if (null == F && (F = "getFIELD"), $(e[t].localName).addClass(F), null != (kt = O.attr(e[t], "change"))) {
                                u = e[t].localName;
                                l[String(u)] = new Function(kt)
                            }
                            B = this._css_(e[t], y);
                            var D = this._attr_(e[t], y, m);
                            pims(e[t].localName)._d_(function() {
                                css = B, attr = D, null != kt && (events = {
                                    change: function(t) {
                                        for (var e in l) {
                                            String(e) == t && l[e]()
                                        }
                                    }
                                })
                            })
                        }
                        if (m.slice(1, 2) == $O$V().k) {
                            y = O.attr(e[t], "style");
                            var L = O.attr(e[t], "tool"),
                                P = O.attr(e[t], "ng-model"),
                                N = O.attr(e[t], "class");
                            null == N && (N = "getFIELD"), $(e[t].localName).addClass(N);
                            var z = new Function(O.attr(e[t], "change")),
                                H = new Function(O.attr(e[t], "click"));
                            B = this._css_(e[t], y), D = this._attr_(e[t], y, m);
                            pims(e[t].localName)._kp_(function() {
                                param = {
                                    tool: L,
                                    ngmodel: P
                                }, css = B, attr = D, events = {
                                    change: z,
                                    click: H
                                }
                            })
                        }
                        if (m.slice(1, 2) == $O$V().l) {
                            y = O.attr(e[t], "style");
                            var R = O.attr(e[t], O.id);
                            null == R && (R = String(m.slice(2, 3)).toLowerCase());
                            var M = this._se_a(y, e[t], O.val, "0"),
                                X = this._se_a(y, e[t], "hoverText", "potato"),
                                W = O.attr(e[t], O.mdl),
                                K = O.attr(e[t], O.dat),
                                j = (P = O.attr(e[t], "ng-model"), O.attr(e[t], "class"));
                            null == j && (j = "getFIELD"), $(e[t].localName).addClass(j);
                            var V = O.attr(e[t], "whereClass"),
                                U = O.attr(e[t], "params"),
                                Y = O.attr(e[t], "onscroll");
                            if (null != (St = O.attr(e[t], "listClick"))) {
                                u = e[t].localName;
                                n[String(u)] = new Function(St)
                            } else try {
                                u = e[t].localName;
                                n[String(u)] = new Function(String(m.slice(2, 3)).toLowerCase() + "()")
                            } catch (t) {}
                            if (null != (ft = O.attr(e[t], "callback"))) {
                                u = e[t].localName;
                                i[String(u)] = new Function(ft)
                            }
                            O.attr(e[t], "listTop"), O.attr(e[t], "listLeft"), O.attr(e[t], "display");
                            var q = String(e[t].localName);
                            B = this._css_(e[t], y, q);
                            pims(q)._lt_(function() {
                                try {
                                    where = V + "@" + q
                                } catch (t) {}
                                try {
                                    params = U + "@" + q
                                } catch (t) {}
                                css = B, param = {
                                    model: W,
                                    data: K,
                                    ngmodel: P
                                }, attr = {
                                    onscroll: Y,
                                    value: M,
                                    hoverText: X,
                                    id: R
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
                        if (m.slice(1, 2) == $O$V().m) {
                            var G = O.attr(e[t], O.bolor);
                            null == G && (G = "#ffffff");
                            var Q = O.attr(e[t], O.bdr);
                            null == Q && (Q = "0px");
                            var Z = O.attr(e[t], O.mdl),
                                J = O.attr(e[t], O.dat),
                                tt = (P = O.attr(e[t], "ng-model"), O.attr(e[t], "menuTitle"));
                            null == tt && (tt = "null");
                            var et = O.attr(e[t], "padding"),
                                it = O.attr(e[t], "color");
                            null == it && (it = "BLUE");
                            var nt = O.attr(e[t], "borderRadius");
                            null == nt && (nt = 7);
                            var lt = O.attr(e[t], "fontSize");
                            null == lt && (lt = 15);
                            var at = O.attr(e[t], "height");
                            null == at && (at = 30);
                            var rt = O.attr(e[t], "hoverBgColor");
                            null == rt && (rt = "yellow");
                            var ot = O.attr(e[t], "hoverText");
                            null == ot && (ot = "");
                            var st = O.attr(e[t], "value");
                            null == st && (st = "0");
                            var dt = O.attr(e[t], "width");
                            null == dt && (dt = document.innerWidth + "px");
                            var ct = O.attr(e[t], "widthMenu");
                            null == ct && (ct = 550);
                            var pt = O.attr(e[t], "heightTable");
                            null == pt && (pt = 450);
                            var ht = O.attr(e[t], O.id);
                            null == ht && (ht = String(m.slice(2, 3)).toLowerCase());
                            var ut = O.attr(e[t], O.mdl);
                            null == ut && (ut = String(m.slice(2, 3)).toLowerCase() + O.php);
                            var gt = O.attr(e[t], "class");
                            null == gt && (gt = "getFIELD"), $(e[t].localName).addClass(gt);
                            var ft, mt = O.attr(e[t], "whereClass"),
                                yt = O.attr(e[t], "params"),
                                vt = O.attr(e[t], "onscroll");
                            if (null != (St = O.attr(e[t], "click"))) {
                                u = e[t].localName;
                                d[String(u)] = new Function(St)
                            } else try {
                                u = e[t].localName;
                                d[String(u)] = new Function(String(m.slice(2, 3)).toLowerCase() + "()")
                            } catch (t) {}
                            if (null != (ft = O.attr(e[t], "callback"))) {
                                u = e[t].localName;
                                s[String(u)] = new Function(ft)
                            }
                            var bt = O.attr(e[t], "topTable"),
                                xt = O.attr(e[t], "leftTable"),
                                Ot = O.attr(e[t], "display");
                            q = String(e[t].localName);
                            pims(q)._m_(function() {
                                try {
                                    where = mt + "@" + q
                                } catch (t) {}
                                try {
                                    params = yt + "@" + q
                                } catch (t) {}
                                css = {
                                    display: Ot,
                                    height: at,
                                    width: dt,
                                    color: it,
                                    fontSize: lt,
                                    hoverBgColor: rt,
                                    borderRadius: nt,
                                    border: Q,
                                    background: G,
                                    padding: et,
                                    marginTop: bt + "_" + q,
                                    marginLeft: xt + "_" + q,
                                    widthTable: ct + "_" + q,
                                    heightTable: pt + "_" + q
                                }, param = {
                                    model: ut,
                                    menuTitle: tt,
                                    menuModel: Z,
                                    data: J,
                                    ngmodel: P
                                }, attr = {
                                    onscroll: vt,
                                    value: st,
                                    hoverText: ot,
                                    id: ht
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
                        if ("CHART" == m.slice(1, 2)) POTATO.elementbar = e[t], $O$Element[m.slice(2, 3)] = e[t], null == ($t = O.attr(e[t], "onload")) && ($t = "true"), "true" == $t ? $O$X.prototype.reloadChart(m.slice(2, 3)) : $O$X.prototype.reloadChart(m.slice(2, 3), "false");
                        if (m.slice(1, 2) == $O$V().tb) {
                            POTATO.element = e[t], $O$Element[m.slice(2, 3)] = e[t];
                            var $t, wt = O.attr(e[t], O.id);
                            null == wt && (wt = String(m.slice(2, 3)).toLowerCase()), null == ($t = O.attr(e[t], "onload")) && ($t = "true"), "true" == $t || 1 == $t ? $O$X.prototype.reloadTable(wt, "true") : $O$X.prototype.reloadTable(wt, "false")
                        }
                        if (m.slice(1, 2) == $O$V().tx) {
                            y = O.attr(e[t], "style"), B = this._css_(e[t], y), D = this._attr_(e[t], y, m);
                            var St, kt, _t = O.attr(e[t], "class");
                            if (null == _t && (_t = "getFIELD"), $(e[t].localName).addClass(_t), null != (St = O.attr(e[t], "click"))) {
                                u = e[t].localName;
                                a[String(u)] = new Function(St)
                            }
                            if (null != (kt = O.attr(e[t], "change"))) {
                                u = e[t].localName;
                                o[String(u)] = new Function(kt)
                            }
                            var Tt = O.attr(e[t], "keyup");
                            if (null != Tt) {
                                u = e[t].localName;
                                r[String(u)] = new Function(Tt)
                            }
                            P = O.attr(e[t], "ng-model");
                            pims(e[t].localName)._tx_(function() {
                                css = B, attr = D, param = {
                                    ngmodel: P
                                }, events = {
                                    click: function(t) {
                                        for (var e in a) {
                                            String(e) == t && a[e]()
                                        }
                                    },
                                    change: function(t) {
                                        for (var e in o) {
                                            String(e) == t && o[e]()
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
                        if ("D" == m.slice(1, 2)) POTATO.elementdoughnut = e[t], null == (g = O.attr(e[t], "onload")) && (g = "true"), "true" == g ? $O$X.prototype.reloadDoughnut(0) : $O$X.prototype.reloadDoughnut(0, "false");
                        if ("D1" == m.slice(1, 2)) POTATO.element1doughnut = e[t], null == (g = O.attr(e[t], "onload")) && (g = "true"), "true" == g ? $O$X.prototype.reloadDoughnut(1) : $O$X.prototype.reloadDoughnut(1, "false");
                        if ("D2" == m.slice(1, 2)) POTATO.element2doughnut = e[t], null == (g = O.attr(e[t], "onload")) && (g = "true"), "true" == g ? $O$X.prototype.reloadDoughnut(2) : $O$X.prototype.reloadDoughnut(2, "false");
                        if ("R" == m.slice(1, 2)) POTATO.elementradar = e[t], null == (f = O.attr(e[t], "onload")) && (f = "true"), "true" == f ? $O$X.prototype.reloadRadar(0) : $O$X.prototype.reloadRadar(0, "false");
                        if ("R1" == m.slice(1, 2)) POTATO.element1radar = e[t], null == (f = O.attr(e[t], "onload")) && (f = "true"), "true" == f ? $O$X.prototype.reloadRadar(1) : $O$X.prototype.reloadRadar(1, "false")
                    }
                }
            },
            _tb_attr: function(t) {
                var e = [],
                    i = String(t[0]).replace(/\s+/g, "");
                if (-1 != String(i).indexOf(";"))
                    for (var n = String(t[0]), l = (String(n).match(/;/g) || []).length, a = String(n).split(";"), r = 0; r < l; r++)
                        if (-1 != String(a.slice(r, r + 1)).indexOf(":")) {
                            var o = String(a.slice(r, r + 1)).split(":");
                            if ("tool" != String(o.slice(0, 1)).replace(/\s+/g, "") && String(o.slice(0, 1)).replace(/\s+/g, "") != O.cbk && (e[String(o.slice(0, 1)).replace(/\s+/g, "")] = String(o.slice(1, 2)).replace(/\s+/g, "")), "tool" == String(o.slice(0, 1)).replace(/\s+/g, "") && (e[String(o.slice(0, 1)).replace(/\s+/g, "")] = o.slice(1, 2)), String(o.slice(0, 1)).replace(/\s+/g, "") == O.cbk) {
                                n = String(t[0]).split(O.cbk), a = String(n.slice(1, 2));
                                e[O.cbk] = "function" + String(a.substr(1)).split("function").slice(1, 2)
                            }
                        }
                return e
            },
            _tb_: function(t, e) {
                for (var i = this._p_(e), n = this.getHTMLElement(), l = this.x, a = [
                        []
                    ], r = i.id, o = param.data, s = String(r).toUpperCase(), d = this.attr($O$Element[s], "dragdrop"), c = String(i.header).split(","), p = 0; p < $O$Array.length; p++) r == String($O$Array[p].bind) && (a[$O$Array[p].id] = $O$Array[p].value, 0);
                var h = "<table class='potatoTableCss' id='" + i.id + "' style='border-collapse:collapse;width:99%'>"; - 1 != String(o).indexOf(O.php) && (i.model = o), null != i.model ? (n.createdCallback = function() {
                    this.innerHTML = '<div id="div-' + r + '" ></div> '
                }, this._rp_(i.model, a, function(t) {
                    var e = O.parse(t);
                    if (null != c && c.length > 0) {
                        var n = 0;
                        for (s in h += "<tr>", c) "" != c[s] && "-" != c[s] ? h += "<th style='border:1px solid black;font-size:" + i.fontSizeTH + ";color:" + i.fontColorTH + ";font-family:" + i.fontFamilyTH + "'>" + c[s] + "</th>" : h += "<th style='display:none'>" + c[s] + "</th>", n++;
                        for (var a in h += "</tr>", e)
                            if ("undefined" != e[a][0] && null != e[a][0] && a >= 0) {
                                h += "<tr>";
                                for (var o = 0; o < n; o++) "" != c[o] && "-" != c[o] && null != c[o] ? h += null != d ? "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'><div class='" + O.dgdp + r + "'>" + e[a][o] + "</div></td>" : "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>" + e[a][o] + "</td>" : h += "<td style='display:none'>" + e[a][o] + "</td>";
                                h += "</tr>"
                            }
                    } else {
                        n = 0;
                        for (s in h += "<tr>", e[0]) "" != e[0][s] && "-" != e[0][s] ? h += "<th style='border:1px solid black;font-size:" + i.fontSizeTH + ";color:" + i.fontColorTH + ";font-family:" + i.fontFamilyTH + "'>" + e[0][s] + "</th>" : h += "<th style='display:none'>" + e[0][s] + "</th>", n++;
                        for (var a in h += "</tr>", e)
                            if ("undefined" != e[a][0] && null != e[a][0] && a > 0) {
                                h += "<tr>";
                                for (o = 0; n > o; o++) "" != e[0][o] && "-" != e[0][o] && null != e[0][o] && "undefined" != e[0][o] ? h += null != d ? "<td style='border:1px solid black;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'><div class='" + d + "'>" + e[a][o] + "</div></td>" : "<td style='border:1px solid black;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>" + e[a][o] + "</td>" : h += "<td style='display:none'>" + e[a][o] + "</td>";
                                h += "</tr>"
                            }
                    }
                    h += "</table>", $("#div-" + r).html(h).show().css({
                        overflow: "auto",
                        width: i.width,
                        height: i.height,
                        background: i.background,
                        display: i.display,
                        border: i.border,
                        position: i.position,
                        left: i.left,
                        top: i.top,
                        borderRadius: i.borderRadius
                    }), potato._t_dnd(d, i.id, i);
                    var p = document.getElementById(i.id),
                        u = $("#" + i.id + " tbody");
                    $(document).keydown(function(t) {
                        if (u.find(".highlight").length)
                            if (40 == t.which) {
                                var e = u.find(".highlight").next();
                                $O$X.prototype.tableHighlight(e[0].rowIndex, i.tableId)
                            } else if (38 == t.which) {
                            var n = u.find(".highlight").prev();
                            $O$X.prototype.tableHighlight(n[0].rowIndex, i.tableId)
                        }
                    });
                    try {
                        if (potato.table = p, i.callback(p, i.id), String(editCell).split("@").slice(1, 2) == l) {
                            var g = String(editCell).split("@").slice(0, 1),
                                f = [];
                            if (null != g[0] && "null" != g[0]) f = potato._tb_attr(g);
                            potato._ec_(function() {
                                attr = {
                                    id: i.id,
                                    dragdrop: d
                                }, paramE = f;
                                var t = new Function("return " + String(f[O.cbk]));
                                events = {
                                    callback: t()
                                }
                            })
                        }
                        if (String(multipleSelect).split("@").slice(1, 2) == l) {
                            if (null != (g = String(multipleSelect).split("@").slice(0, 1))[0] && "null" != g[0]) f = potato._tb_attr(g);
                            potato.MultipleSelect(function() {
                                attr = {
                                    id: i.id
                                }, paramM = f;
                                var t = new Function("return " + String(f[O.cbk]));
                                events = {
                                    callback: t()
                                }
                            })
                        }
                    } catch (t) {}
                    $("#" + i.id + " td").click(function() {
                        ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                        for (var t = 0; t < n; t++) 0;
                        i.click(p.rows[ri], ri, ci, i.id)
                    })
                })) : n.createdCallback = function() {
                    this.innerHTML = '<div id="div-' + r + '" ></div> ';
                    var t = O.parse(o),
                        e = 0;
                    for (s in h += "<tr>", c) "" != c[s] && "-" != c[s] ? h += "<th style='border:1px solid black;font-size:" + i.fontSizeTH + ";color:" + i.fontColorTH + ";font-family:" + i.fontFamilyTH + "'>" + c[s] + "</th>" : h += "<th style='display:none'>" + c[s] + "</th>", e++;
                    for (var n in h += "</tr>", t)
                        if ("undefined" != t[n][0] && null != t[n][0] && n >= 0) {
                            h += "<tr>";
                            for (var a = 0; a < e; a++) "" != c[a] && "-" != c[a] && null != c[a] ? h += null != d ? "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'><div class='" + O.dgdp + r + "'>" + t[n][a] + "</div></td>" : "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>" + t[n][a] + "</td>" : h += "<td style='display:none'>" + t[n][a] + "</td>";
                            h += "</tr>"
                        }
                    h += "</table>", $("#div-" + r).html(h).show().css({
                        overflow: "auto",
                        width: i.width,
                        height: i.height,
                        background: i.background,
                        display: i.display,
                        border: i.border,
                        position: i.position,
                        left: i.left,
                        top: i.top,
                        borderRadius: i.borderRadius
                    }), potato._t_dnd(d, i.id, i);
                    var p = document.getElementById(i.id),
                        u = $("#" + i.id + " tbody");
                    $(document).keydown(function(t) {
                        if (u.find(".highlight").length)
                            if (40 == t.which) {
                                var e = u.find(".highlight").next();
                                $O$X.prototype.tableHighlight(e[0].rowIndex, i.tableId)
                            } else if (38 == t.which) {
                            var n = u.find(".highlight").prev();
                            $O$X.prototype.tableHighlight(n[0].rowIndex, i.tableId)
                        }
                    });
                    try {
                        if (potato.table = p, i.callback(p, i.id), String(editCell).split("@").slice(1, 2) == l) {
                            var g = String(editCell).split("@").slice(0, 1),
                                f = [];
                            if (null != g[0] && "null" != g[0]) f = potato._tb_attr(g);
                            potato._ec_(function() {
                                attr = {
                                    id: i.id,
                                    dragdrop: d
                                }, paramE = f;
                                var t = new Function("return " + String(f[O.cbk]));
                                events = {
                                    callback: t()
                                }
                            })
                        }
                        if (String(multipleSelect).split("@").slice(1, 2) == l) {
                            if (null != (g = String(multipleSelect).split("@").slice(0, 1))[0] && "null" != g[0]) f = potato._tb_attr(g);
                            potato.MultipleSelect(function() {
                                attr = {
                                    id: i.id
                                }, paramM = f;
                                var t = new Function("return " + String(f[O.cbk]));
                                events = {
                                    callback: t()
                                }
                            })
                        }
                    } catch (t) {}
                    $("#" + i.id + " td").click(function() {
                        ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                        for (var t = 0; t < e; t++) 0;
                        i.click(p.rows[ri], ri, ci, i.id)
                    })
                }, this._p_e(l, n)
            },
            _t_dnd: function(t, e, i) {
                null != t && ($("#" + e + " td").droppable({
                    accept: "." + O.dgdp + e,
                    drop: function(t, n) {
                        O.dropCol = $(this).parent().children().index(this), O.dropRow = $(this).parent().parent().children().index(this.parentNode), $(n.draggable).remove(), document.getElementById(e).rows[O.dropRow].cells[O.dropCol].innerHTML += "<div class='" + O.dgdp + e + "' style='margin-top:5px;color:black;'>" + n.draggable[0].innerHTML + "</div>", $("." + O.dgdp + e).draggable({
                            revert: !0,
                            start: function(t) {
                                t.target.style.zIndex = 10
                            }
                        }), i.dragdrop()
                    }
                }), $(".dragdrop-" + e).draggable({
                    revert: !0,
                    start: function(t) {
                        t.target.style.zIndex = 100
                    }
                }))
            },
            _tx_: function(t) {
                var e = this,
                    i = this._p_(t),
                    n = O.is(this),
                    l = this.x,
                    a = i.id;
                "potato.now" == i.value && (i.value = e.now), "potato.today()" == i.value && (i.value = e.today()), "potato.now()" == i.value && (i.value = e.now());
                var r = param.ngmodel;
                n.createdCallback = function() {
                    this.id = a + "_", $O$X.prototype.getAttribute(this, l).index, $O$X.prototype.getAttribute(this, l).field, this.pims = l, "none" == i.display ? this.innerHTML = null == r ? '<input type="text" id="' + a + '" class="' + i.className + '"> ' : '<input ng-model="' + r + '" type="text" id="' + a + '" class="' + i.className + '"> ' : this.innerHTML = null == r ? '<br><input type="text" id="' + a + '"  class="' + i.className + '" > ' : '<br><input ng-model="' + r + '" type="text" id="' + a + '"  class="' + i.className + '" > ', e._css_id(i, a), $("#" + a).css({
                        textTransform: i.textTransform
                    }), "null" != i.float && $("#" + a + "_").css("float", i.float), "false" == i.disabled && $("#" + a).attr({
                        value: i.value,
                        type: i.type,
                        disabled: !1
                    }).mousemove(function() {
                        "null" != i.hoverBgColor && $(this).css(O.bolor, i.hoverBgColor), $(this).css(O.co, i.hoverColor), "" != i.hoverText && $("#" + i.hoverId).html(i.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: i.hoverHeight + "px",
                            width: i.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != i.hoverBgColor && $(this).css(O.bolor, i.background), $(this).css(O.co, i.i), $("#" + i.hoverId).hide().html("")
                    }).keyup(function(t) {
                        for (var e = 0; e < $O$Id.length; e++)
                            if (String(a).toLowerCase() == String($O$Id[e]).toLowerCase()) {
                                var n = String($O$BindId[e]);
                                document.getElementById(n).value = document.getElementById(a).value
                            }
                        try {
                            i.keyup(l, t)
                        } catch (t) {}
                    }).change(function() {
                        try {
                            i.change()
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
                            i.click(l)
                        } catch (t) {}
                    }), "true" != i.disabled && "" != i.disabled || $("#" + a).attr({
                        value: i.value,
                        type: i.type,
                        disabled: !0
                    })
                }, this._p_e(l, n)
            },
            attr: function(t, e) {
                return t.getAttribute(e)
            },
            attrm: function(t, e) {
                return document.getElementsByTagName(t)[0].getAttribute(e)
            },
            background: function(t) {
                return this.e.style.background = t, this
            },
            bdr: "border",
            bdrd0: "0px solid black",
            bdrd1: "1px solid black",
            bdrr: "borderRadius",
            bxsd: "boxShadow",
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
            bolor: "background",
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
            cbk: "callback",
            chartEncode: function(t) {
                var e = t.match(/=\s*\".*?\"/g);
                if (e)
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i].replace(/^=\s*\"|\"$/g, "");
                        n = n.replace(/\'/g, "%26apos;");
                        var l = t.indexOf(e[i]),
                            a = "='" + n + "'";
                        t = t.substring(0, l) + a + t.substring(l + e[i].length)
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
            ci: "",
            chartLabel: "",
            chartYvalue: "",
            chartXvalue: "",
            clearArrays: function() {
                attr = [], css = [], events = [], param = [], params = [], object = [], data = [], callback = []
            },
            clk: "click",
            click: function(t) {
                this._a_("click", t)
            },
            Clear: function(t, e) {
                var i = this._p_(e);
                clearTimeout(b__[t]), clearTimeout(b___[t]), document.getElementById(i.tableId).rows[i.row].cells[i.cell].style.backgroundColor = "white"
            },
            close: "閉じる",
            Chart: function(t, e, i) {
                var n = this._p_(i);
                this.attributes = new Array, this.params = new Object, this.variables = new Object, this.chartAttribute("s", "lib/charts/" + n.chartType + ".swf"), this.chartAttribute("w", n.width), this.chartAttribute("h", n.height), this.chartAttribute(O.id, n.chartId), this.chartParam("bgcolor", n.background), this.chartParam("quality", "high"), this.chartVariable("chartWidth", n.width), this.chartVariable("chartHeight", n.height);
                var l = O.is(this);
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
                            extends: $O$S.prototype.l($O$V().lp)
                        })
                    } catch (t) {}
                }
            },
            CHANGE: function(t) {
                var e = this.x;
                if (-1 != e.indexOf("#"))
                    if (-1 != e.indexOf(" td"))
                        for (var i = String(e).split(" "), n = (a = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onchange = t;
                    else(o = document.getElementById(String(e).split("#").slice(1, 2))).onchange = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var a = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), r = 0; r < a.length; r++)
                            for (n = a[r].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onchange = t
                    } else {
                        var o = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (r = 0; r < o.length; r++) o[r].onchange = t
                    }
            },
            CLICK: function(t) {
                var e = this.x;
                if (-1 != e.indexOf("#"))
                    if (-1 != e.indexOf(" td"))
                        for (var i = String(e).split(" "), n = (a = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onclick = t;
                    else(o = document.getElementById(String(e).split("#").slice(1, 2))).onclick = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var a = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), r = 0; r < a.length; r++)
                            for (n = a[r].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onclick = t
                    } else {
                        var o = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (r = 0; r < o.length; r++) o[r].onclick = t
                    }
            },
            closeEditCell: function() {
                var e = $O$T;
                potato.edit = "off";
                var i = document.createTextNode(e.firstChild.value);
                e.replaceChild(i, e.firstChild), t = 1, $("#keypadtable").hide(), potato.trigger = 0, $O$P.nodevalue = e.firstChild.nodeValue;
                var n = potato.table;
                potato._.callback(e.firstChild.nodeValue, potato.oldValue, n.cells[potato._.targetId].innerText, potato.ci);
                try {
                    document.getElementById(keyID).style.display = "none"
                } catch (t) {}
            },
            closePad_backup: function(t, e) {
                e = $O$U;
                if ("" == t && (e.value = ""), "Close" != t && "Now" != t && "CE" != t) "-" != e.value && "" != e.value || (e.value = t), e.value = t + ":" + e.value.split(":").slice(1, 2), $("._min_cls").attr("disabled", !1);
                else if ($("._min_cls").attr("disabled", !0), "Now" == t && (e.value = $O$X.prototype.setHour() + ":" + $O$X.prototype.setMinute()), "CE" == t && (e.value = "0", $("._min_cls").attr("disabled", !0)), "Close" == t)
                    if ("undefined" != POTATO.value && null != POTATO.value && "0" != POTATO.value && 0 != e.value) {
                        try {
                            document.getElementById(keyID).style.display = "none", $("._min_cls").attr("disabled", !0), POTATO.value = e.value
                        } catch (t) {}
                        try {
                            document.getElementById("keypadtable").style.display = "none", $O$X.prototype.closeEditCell()
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
                    document.getElementById("keypadtable").style.display = "none", $O$X.prototype.closeEditCell()
                } catch (t) {}
            },
            closePad: function() {
                document.getElementById(keyID).style.display = "none"
            },
            co: "color",
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
            csr: "cursor",
            day: function() {
                var t = (new Date).getDate();
                return t = parseInt(t) < 10 ? "0" + t : t
            },
            Date: function(t) {
                var e = O.is(this),
                    i = this.x,
                    n = this._p_(t);
                n.id = i, e.createdCallback = function() {
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), a = 3; a <= t; a++) l = l + "_" + e.slice(a, a + 1);
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
                    }).attr(O.val, n.value).mousemove(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.hoverBgColor), $(this).css(O.co, n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.background), $(this).css(O.co, n.i), $("#" + n.hoverId).hide().html("")
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
                }
            },
            dat: "data",
            dpy: "display",
            doOver: function() {
                var t = $O$X.prototype.getReal(window.event.toElement, "className", "pimsButton");
                if (t != $O$X.prototype.getReal(window.event.fromElement, "className", "pimsButton")) {
                    var e = t,
                        i = e.cDisabled;
                    i = null != i, "pimsButton" == e.className && (e.onselectstart = new Function("return false")), "pimsButton" != e.className || i || ($O$X.prototype.makeRaised(e), $O$X.prototype.makeGray(e, !1))
                }
            },
            doOut: function() {
                var t = $O$X.prototype.getReal(window.event.toElement, "className", "pimsButton"),
                    e = $O$X.prototype.getReal(window.event.fromElement, "className", "pimsButton");
                if (t != e) {
                    var i = e,
                        n = i.cDisabled;
                    n = null != n;
                    var l = i.cToggle;
                    toggle_disabled = null != l, l && i.value ? ($O$X.prototype.makePressed(i), $O$X.prototype.makeGray(i, !0)) : "pimsButton" != i.className || n || ($O$X.prototype.makeFlat(i), $O$X.prototype.makeGray(i, !0))
                }
            },
            doDown: function() {
                el = $O$X.prototype.getReal(window.event.srcElement, "className", "pimsButton");
                var t = el.cDisabled;
                t = null != t, "pimsButton" != el.className || t || $O$X.prototype.makePressed(el)
            },
            doUp: function() {
                el = $O$X.prototype.getReal(window.event.srcElement, "className", "pimsButton");
                var t = el.cDisabled;
                t = null != t, "pimsButton" != el.className || t || $O$X.prototype.makeRaised(el)
            },
            dgdp: "dragdrop-",
            dragCol: 0,
            dragRow: 0,
            dropCol: 0,
            dropRow: 0,
            dummy: function() {
                return null
            },
            edit: "off",
            findChildren: function(el, type, value) {
                for (var children = el.children, tmp = new Array, j = 0, i = 0; i < children.length; i++) eval("children[i]." + type + '=="' + value + '"') && (tmp[tmp.length] = children[i]), tmp = tmp.concat($O$X.prototype.findChildren(children[i], type, value));
                return tmp
            },
            fcc: function(t) {
                return String.fromCharCode.apply(String, t)
            },
            fccs: function(t) {
                return String.fromCharCode(t)
            },
            getIdClass: function(t, e) {
                var i, n, l, a = [];
                for (i = (e = e || document).getElementsByTagName("*"), n = 0; n < i.length; n++)
                    if (null != (l = i[n].getAttribute("class")))
                        for (l = l.split(" "), j = 0; j < l.length; j++)
                            if (l[j] === t) {
                                a.push(i[n]);
                                break
                            }
                return a
            },
            getIdType: function(t, e) {
                var i, n, l, a = [];
                for (i = (e = e || document).getElementsByTagName("*"), n = 0; n < i.length; n++)
                    if (null != (l = i[n].getAttribute("type")))
                        for (l = l.split(" "), j = 0; j < l.length; j++)
                            if (l[j] === t) {
                                a.push(i[n]);
                                break
                            }
                return a
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
                var a = l.getFullYear(),
                    r = l.getMonth() + 1;
                r = parseInt(r) < 10 ? "0" + r : r;
                var o = l.getDate();
                return a + e + r + e + (o = parseInt(o) < 10 ? "0" + o : o)
            },
            getAttr: function(t, e) {
                return document.getElementsByTagName(t)[0].getAttribute(e)
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
                t = '<object id="' + this.getChartAttribute(O.id) + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + this.getChartAttribute("w") + '" height="' + this.getChartAttribute("h") + '">', t += '<param name="movie" value="' + this.getChartAttribute("s") + '" />';
                var e = this.getChartParams();
                for (var i in e) t += '<param name="' + i + '" value="' + e[i] + '" />';
                var n = this.getChartVariablePairs().join("&");
                return n.length > 0 && (t += '<param name="flashvars" value="' + n + '" />'), t += "</object>"
            },
            getChart: function(t) {
                return 1 == this.detectFlashVersion && this.installedVer.major < 6 ? 1 == this.autoInstallRedirect && (!!window.confirm("You need Adobe Flash Player 6 (or above) to view the charts. It is a free and lightweight installation from Adobe.com. Please click on Ok to install the same.") && void(window.location = "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash")) : (("string" == typeof t ? document.getElementById(t) : t).innerHTML = this.getChartHtml(), document.embeds[this.getChartAttribute(O.id)] || window[this.getChartAttribute(O.id)] || (window[this.getChartAttribute(O.id)] = document.getElementById(this.getChartAttribute(O.id))), !0)
            },
            getHTMLElement: function() {
                return Object.create(HTMLElement.prototype)
            },
            getHour: function(t) {
                var e = $O$U;
                if ("" == t && (e.value = ""), "Close" != t && "Now" != t && "CE" != t) "-" != e.value && "" != e.value || (e.value = t), e.value = t + ":" + e.value.split(":").slice(1, 2), $("._min_cls").attr("disabled", !1);
                else if ($("._min_cls").attr("disabled", !0), "Now" == t && (e.value = $O$X.prototype.setHour() + ":" + $O$X.prototype.setMinute()), "CE" == t && (e.value = "0", $("._min_cls").attr("disabled", !0)), "Close" == t) {
                    try {
                        document.getElementById(keyID).style.display = "none", $("._min_cls").attr("disabled", !0)
                    } catch (t) {}
                    try {
                        document.getElementById("keypadtable").style.display = "none", $O$X.prototype.closeEditCell()
                    } catch (t) {}
                }
                try {
                    "" == e.value && (e.value = "-")
                } catch (t) {}
            },
            getKey: function(t) {
                var e = $O$U;
                "" == t && (e.value = ""), "<-" == t && (e.value = e.value.substring(0, parseFloat(e.value.length) - 1)), "<-" != t && "" != t && (e.value += t), e.value != "0" + t && e.value != "" + t && e.value != "Keypad" + t && e.value != "Keyboard" + t && e.value != "Timepad" + t || (e.value = t), "." == t && "." == e.value && (e.value = "0."), "" == e.value && (e.value = "0"), "CE" == t && (e.value = "0"), pimsTargetId = e.value, POTATO.value = e.value, $(e).trigger("change")
            },
            getMinute: function(t) {
                var e = $O$U;
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
            hdr: "header",
            height: 30,
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
            id: "id",
            If: function(t) {
                return t = t == $O$I.settings.tabName1 ? 1 : t == $O$I.settings.tabName2 ? 1 : -1
            },
            is: function(t) {
                return t.getHTMLElement()
            },
            kp: "#keypad-",
            Keyboard: function(t) {
                var e = O.is(this),
                    i = this.x,
                    n = this._p_(t);
                n.id = i, e.createdCallback = function() {
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), a = 3; a <= t; a++) l = l + "_" + e.slice(a, a + 1);
                    this.name = l, this.is = i;
                    var r = '<div id="div_' + i + '"> ';
                    r += '<input type="text" id="' + i + '"> ', r += '<div class="keypad" id="keypad-' + i + '"></div> ', r += "</div> ", this.innerHTML = r, $O$B = document.getElementById(i), $("#div_" + i).css({
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
                    }).attr(O.val, n.value).mousemove(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.hoverBgColor), $(this).css(O.co, n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.background), $(this).css(O.co, n.i), $("#" + n.hoverId).hide().html("")
                    }).click(function() {
                        try {
                            for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + i, $(".keypad").hide(), $(O.kp + i).show(), $("#KeyBoard").show(), $(O.kp + i).css({
                            position: "absolute",
                            top: event.clientY + 20 + n.topKey,
                            left: event.clientX + n.leftKey
                        }), $O$B = document.getElementById(i)
                    }), $(O.kp + i).load("config/keyboard.htm").css({
                        width: "200px",
                        height: "150px",
                        margin: n.marginKey,
                        display: n.displayKey
                    })
                }
            },
            Keypad: function(t) {
                var e = O.is(this),
                    i = this.x,
                    n = this._p_(t);
                n.id = i, e.createdCallback = function() {
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), a = 3; a <= t; a++) l = l + "_" + e.slice(a, a + 1);
                    this.name = l, this.is = i;
                    var r = '<div id="div_' + i + '"> ';
                    r += '<input type="text" id="' + i + '"> ', r += '<div class="keypad" id="keypad-' + i + '"></div> ', r += "</div> ", this.innerHTML = r, $O$U = document.getElementById(i), $("#div_" + i).css({
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
                    }).attr(O.val, n.value).mousemove(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.hoverBgColor), $(this).css(O.co, n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.background), $(this).css(O.co, n.i), $("#" + n.hoverId).hide().html("")
                    }).click(function() {
                        try {
                            for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + i, $(".keypad").hide(), $(O.kp + i).show(), $("#KeyPad").show(), $(O.kp + i).css({
                            position: "absolute",
                            top: event.clientY + 20 + n.topKey,
                            left: event.clientX + n.leftKey
                        }), $O$U = document.getElementById(i)
                    }), $(O.kp + i).load("config/keypad.htm").css({
                        width: "200px",
                        height: "150px",
                        margin: n.marginKey,
                        display: n.displayKey
                    })
                }
            },
            lft: "left",
            List: function(t) {
                var i = O.is(this),
                    l = this.x,
                    a = this._p_(t);
                a.id = l, i.createdCallback = function() {
                    for (var i = (l.match(/-/g) || []).length, r = l.split("-"), o = r.slice(2, 3), s = 3; s <= i; s++) o = o + "_" + r.slice(s, s + 1);
                    this.name = o, this.is = l, this.innerHTML = '<input type="text" id="' + l + '" class="' + a.className + '" > ', this.innerHTML += '<div id="pims-list-' + l + '" class="pims-list"> ', $("#" + l).css({
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
                        "null" != a.hoverBgColor && $(this).css(O.bolor, a.hoverBgColor), $(this).css(O.co, a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: a.hoverHeight + "px",
                            width: a.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != a.hoverBgColor && $(this).css(O.bolor, a.background), $(this).css(O.co, a.i), $("#" + a.hoverId).hide().html("")
                    }).keyup(function(t) {
                        try {
                            a.keyup(t)
                        } catch (t) {}
                    }).change(function() {
                        try {
                            a.change()
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
                        var a = $O$P.prototype._p_(t),
                            r = a.params;
                        if ("block" != document.getElementById("pims-list-" + l).style.display && $(".pims-list").css({
                                display: "none",
                                height: "0px"
                            }), document.getElementById("pims-list-" + l).style.height == a.heightTable + "px") document.getElementById("pims-list-" + l).style.height = "0px";
                        else {
                            try {
                                pimsListObject.style.display = "none"
                            } catch (t) {}
                            $("#pims-list-" + l).css(O.dpy, "block"), $O$P.prototype._rp_(r.model, r, function(t) {
                                var r = O.parse(t),
                                    o = "<table class='potato-list-table' id='potato-list-table-" + l + "' >",
                                    s = 0;
                                for (e in o += "<tr>", r[0]) "" != r[0][e] ? o += "<th>" + r[0][e] + "</th>" : o += "<th style='display:none'>" + r[0][e] + "</th>", s++;
                                for (n in o += "</tr>", r)
                                    if ("undefined" != r[n][0] && null != r[n][0] && n > 0) {
                                        o += "<tr>";
                                        for (var d = 0; d < s; d++) "" != r[0][d] ? o += "<td>" + r[n][d] + "</td>" : o += "<td style='display:none'>" + r[n][d] + "</td>";
                                        o += "</tr>"
                                    }
                                o += "</table>", document.getElementById("pims-list-" + l).style.height = "0px";
                                var c = i.clientY - a.height - 10 + "px";
                                0 != a.top && (c = a.top + a.height + 10 + "px");
                                var p = i.clientX - a.width / 2 + "px";
                                0 != a.left && (p = a.left + 5 + "px"), pimsListObject = document.getElementById("pims-list-" + l), $("#pims-list-" + l).html(o).show().css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: p,
                                    top: c,
                                    height: a.heightTable + "px",
                                    width: a.widthTable + "px",
                                    overflow: "auto",
                                    border: O.bdr0,
                                    borderRadius: 0,
                                    background: "transparent"
                                }), $("#potato-list-table-" + l + " td").css({
                                    fontFamily: a.fontFamily,
                                    fontWeight: a.fontWeight,
                                    fontSize: a.fontSize + "px"
                                }).click(function() {
                                    var t = document.getElementById("potato-list-table-" + l),
                                        e = $(this).parent().parent().children().index(this.parentNode);
                                    t.rows[e].cells[0].innerText != O.close && "CLOSE" != t.rows[e].cells[0].innerText ? pims(l).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    });
                                    try {
                                        a.click(t.rows[e])
                                    } catch (t) {}
                                    document.getElementById("pims-list-" + l).style.height = "0px"
                                }), $("#potato-list-table-" + l + " th").css(O.csr, "pointer").click(function() {
                                    var t = document.getElementById("potato-list-table-" + l),
                                        e = $(this).parent().parent().children().index(this.parentNode);
                                    t.rows[e].cells[0].innerText != O.close && "CLOSE" != t.rows[e].cells[0].innerText ? pims(l).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), document.getElementById(l).style.background = a.background;
                                    try {
                                        a.click(t.rows[e])
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
            log: "",
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
                    a = setInterval(function() {
                        0 == --l && (clearInterval(a), $("body").css(O.bolor, e), i(), $(String.fromCharCode(35, 80, 73, 77, 83)).html("").hide(), $("#body").show())
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
                for (var n = $O$X.prototype.findChildren(t, "tagName", "IMG"), l = 0; l < n.length; l++) n[l].style.filter = i
            },
            model: "POTATO.php",
            menuTitle: "",
            menuModel: "",
            minute: function() {
                var t = (new Date).getMinutes();
                return t = parseInt(t) < 10 ? "0" + t : t
            },
            mdl: "model",
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
                        for (var i = String(e).split(" "), n = (a = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmousemove = t;
                    else(o = document.getElementById(String(e).split("#").slice(1, 2))).onmousemove = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var a = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), r = 0; r < a.length; r++)
                            for (n = a[r].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmousemove = t
                    } else {
                        var o = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (r = 0; r < o.length; r++) o[r].onmousemove = t
                    }
            },
            MOUSEOUT: function(t) {
                var e = this.x;
                if (-1 != e.indexOf("#"))
                    if (-1 != e.indexOf(" td"))
                        for (var i = String(e).split(" "), n = (a = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmouseout = t;
                    else(o = document.getElementById(String(e).split("#").slice(1, 2))).onmouseout = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var a = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), r = 0; r < a.length; r++)
                            for (n = a[r].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmouseout = t
                    } else {
                        var o = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (r = 0; r < o.length; r++) o[r].onmouseout = t
                    }
            },
            MultipleSelect: function(t) {
                var e, i = this._p_(t),
                    n = paramM.indexCol,
                    l = paramM.selectCol,
                    a = paramM.mark,
                    r = i.id,
                    o = document.getElementById(r),
                    s = [],
                    d = [],
                    c = 0;
                $("#" + r + " td").click(function() {
                    e = $(this).parent().children().index(this), $(this).parent().parent().children().index(this.parentNode)
                });
                for (var p = 1; p < o.rows.length; p++) o.rows[p].onclick = function() {
                    var t = "-";
                    try {
                        t = o.rows[h].cells[i.matchCol].innerText
                    } catch (t) {}
                    if (!("-" != i.matchCol && t != i.matchValue || e != l && "any" != l)) {
                        var p = l,
                            h = n;
                        "any" == p && (p = 0), "any" == h && (h = e, p = e);
                        var u = o.rows[this.rowIndex];
                        if (-1 == String(u.cells[p].innerHTML).indexOf(a)) d[c] = u.cells[h].innerText, c++, u.cells[p].innerHTML = '<font style="font-weight:bold;color:red;background:yellow">' + a + "</font>" + u.cells[p].innerHTML;
                        else {
                            var g = String(u.cells[p].innerHTML).split(a);
                            u.cells[p].innerHTML = g.slice(1, 2);
                            for (var f = 0; f < d.length; f++) d[f] == u.cells[h].innerText && (d[f] = "")
                        }
                        s = [];
                        var m = 0;
                        for (f = 0; f < d.length; f++)
                            if ("" != d[f] && "undefined" != d[f]) {
                                for (var y = 0, v = 0; v < s.length; v++) s[v] == d[f] && (y = 1);
                                0 == y && (s[m] = d[f], m++)
                            }
                        i.callback(s, r)
                    }
                }
            },
            multipleS: "multipleSelect",
            now: function() {
                var t = new Date,
                    e = t.getDate(),
                    i = t.getHours(),
                    n = t.getMinutes(),
                    l = t.getMonth() + 1,
                    a = t.getSeconds(),
                    r = t.getFullYear();
                return $O$P.day = parseInt(e) < 10 ? "0" + e : e, $O$P.hour = parseInt(i) < 10 ? "0" + i : i, $O$P.minute = parseInt(n) < 10 ? "0" + n : n, $O$P.month = parseInt(l) < 10 ? "0" + l : l, $O$P.second = parseInt(a) < 10 ? "0" + a : a, $O$P.year = r, $O$P.title = "$O$", $O$P.hour + ":" + $O$P.minute + ":" + $O$P.second
            },
            oldValue: "",
            obj: function(t) {
                t = String(t).toLowerCase();
                return document.getElementById(t)
            },
            optionText: function() {
                return document.getElementById(this.x).options[document.getElementById(this.x).selectedIndex].text
            },
            parse: function(t) {
                return JSON.parse(t)
            },
            php: ".php",
            Post: function(t, e, i) {
                this._rp_(t, e, function(t) {
                    i(O.parse(t))
                })
            },
            POST: function(t, e) {
                var i = this.x,
                    n = [],
                    l = 0;
                for (var a in t) {
                    if ("WHERE" == a) {
                        l = 1;
                        for (var r in t[a]) {
                            if ("class" == r)
                                for (var o = $O$X.prototype.getIdClass(t[a][r]), s = 0; s < o.length; s++) {
                                    var d = String(o[s].id).split("-").slice(2, 3);
                                    n[o[s].field] = POTATO("#" + d).value
                                }
                            "class" != r && (n[r] = t[a][r])
                        }
                    }
                    if ("FIELD" == a) {
                        l = 1;
                        var c = "",
                            p = "";
                        for (var r in t[a]) {
                            if ("class" == r)
                                for (o = $O$X.prototype.getIdClass(t[a][r]), s = 1; s < o.length; s++) {
                                    c += o[s].field + ",";
                                    d = String(o[s].id).split("-").slice(2, 3);
                                    p += "'" + POTATO("#" + d).value + "',"
                                }
                            "class" != r && (c += r + ",", p += "'" + t[a][r] + "',", s++)
                        }
                        c += o[0].field;
                        d = String(o[0].id).split("-").slice(2, 3);
                        p += "'" + POTATO("#" + d).value + "'", n.fields = c, n.fieldsValue = p
                    }
                }
                0 == l && (n = t), this._rp_(i, n, function(t) {
                    try {
                        e(O.parse(t))
                    } catch (t) {}
                })
            },
            pst: "position",
            Radar: function(t) {
                var e = this._p_(t),
                    i = this.getHTMLElement(),
                    n = this.x,
                    l = this.x + O.php,
                    a = this.x,
                    r = n.split("-"),
                    o = r.slice(2, 3);
                r.slice(2, 3);
                if (String(e.params).split("@").slice(1, 2) == n) var s = String(e.params).split("@").slice(0, 1);
                i.createdCallback = function() {
                    this.innerHTML = '<div id="' + a + '"></div> '
                };
                try {
                    pimsElement = document.registerPotato(n, {
                        prototype: i
                    })
                } catch (t) {
                    try {
                        pimsElement = document.registerPotato(n, {
                            prototype: i,
                            extends: $O$S.prototype.l($O$V().lp)
                        })
                    } catch (t) {}
                }
                var d = [];
                if (null != [] && "null" != s)
                    for (var c = (String(s).match(/AND/g) || []).length, p = String(s).split("AND"), h = 0; h <= c; h++) {
                        var u = String(p.slice(h, h + 1)).split(":"),
                            g = new Function(u.slice(1, 2));
                        "null" != String(u.slice(0, 1)).replace(/\s+/g, "") && (d[String(u.slice(0, 1)).replace(/\s+/g, "")] = String(g()).split(","))
                    }
                pims().Post(l, d, function(t) {
                    var i = new Array;
                    i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                    for (var l = 0; l < t.length; l++)
                        for (var r = 0; r < i.length; r++) i[r][l] = t[l][r];
                    var s = document.getElementById(a);
                    s.innerHTML = "", $("#" + a).append('<canvas id="canvas-' + o + '" >読み込み中．．．</canvas>');
                    var d = document.getElementById("canvas-" + o);
                    $("#" + a).css({
                        width: e.width + "px",
                        height: e.height + "px",
                        border: e.border,
                        borderRadius: e.borderRadius,
                        position: e.position,
                        top: e.top + "px",
                        left: e.left + "px"
                    });
                    var c = document.createElement("div");
                    c.setAttribute(O.id, "note-doughnut-" + o), s.appendChild(c), $("#note-doughnut-" + o).css({
                        fontSize: e.fontSize + "px",
                        position: "relative",
                        left: e.width / 10 + "px",
                        width: .8 * e.width + "px",
                        padding: "5px 5px 5px 5px",
                        textAlign: "center"
                    });
                    var p = document.createElement("img");
                    p.setAttribute(O.id, "img-doughnut-" + o), p.setAttribute("onerror", "this.style.display='none'"), s.appendChild(p), $("#img-doughnut-" + o).css({
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
                    var h = i[3][0];
                    if ($("#note-doughnut-" + o).show().html(h).css(O.bdr, "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var u = String(i[0][0]).split("-"),
                        g = e.imageDir + u[0] + "-" + String(u[1]).substring(0, 1) + ".jpg";
                    else g = e.imageDir + i[0][0] + ".jpg";
                    document.getElementById("img-doughnut-" + o).src = g, document.getElementById("img-doughnut-" + o).style.border = "5px solid " + i[2][0], e.targetIndex = 0, e.targetColor = i[2][0];
                    var f = {
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
                                            a = l.data[n]._model,
                                            r = l.total,
                                            o = a.innerRadius + (a.outerRadius - a.innerRadius) / 2,
                                            s = a.startAngle,
                                            d = s + (a.endAngle - s) / 2,
                                            c = o * Math.cos(d),
                                            p = o * Math.sin(d);
                                        i.fillStyle = "#000";
                                        var h = String(Math.round(e.data[n] / r * 100)) + "%";
                                        if (n < e.data.length - 1) {
                                            var u = a.x + c + 70;
                                            p > 0 && c < 0 && (u = a.x + c - 50), i.fillText(t[n][0] + ": " + t[n][1] + ", " + h, u, a.y + p + 8)
                                        }
                                    }
                                    h = String(Math.round(e.data[e.data.length - 1] / r * 100)) + "%";
                                    i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + h, a.x + c, a.y + 2 * p)
                                })
                            }
                        },
                        hover: {
                            onHover: function(t) {
                                this.getElementAtEvent(t).length ? t.target.style.cursor = "pointer" : t.target.style.cursor = "default", pims("#img-doughnut-" + o).style.display = "block"
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
                                    if ($("#note-doughnut-" + o).show().html(i).css(O.bdr, "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var n = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                        l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                    else l = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                    document.getElementById("img-doughnut-" + o).src = l, document.getElementById("img-doughnut-" + o).style.display = "block", document.getElementById("img-doughnut-" + o).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                } else {
                                    i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                    if ($("#note-doughnut-" + o).show().html(i).css(O.bdr, "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) n = String(this._data.labels[e.targetIndex]).split("-"), l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                    else l = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                    document.getElementById("img-doughnut-" + o).src = l, document.getElementById("img-doughnut-" + o).style.display = "block", document.getElementById("img-doughnut-" + o).style.border = "5px solid " + e.targetColor
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
                        options: f
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
                    l = (t = String(t).toUpperCase(), $O$Element[t]),
                    a = l.getAttribute(O.mdl),
                    r = l.getAttribute(O.dat),
                    o = String(l.getAttribute("chartType")).toLowerCase();
                null == o && (o = "bar");
                var s = l.getAttribute(O.bdr);
                null == s && (s = O.bdr1);
                var d = l.getAttribute(O.bolor);
                null == d && (d = "transparent");
                var c = l.getAttribute("titleDisplay");
                null == c && (c = !0);
                var p = l.getAttribute("titleFontSize");
                null == p && (p = 25);
                var h = l.getAttribute("legendDisplay");
                null == h && (h = !0);
                var u = l.getAttribute("legendPosition");
                null == u && (u = "bottom");
                var g = l.getAttribute("labelFontSize");
                null == g && (g = 12);
                var f = l.getAttribute("label2FontSize");
                null == f && (f = 12);
                var m = l.getAttribute("yAxesFontSize");
                null == m && (m = 12);
                var y = l.getAttribute("y2AxesFontSize");
                null == y && (y = 12);
                var v = l.getAttribute("xAxesFontSize");
                null == v && (v = 12);
                var b = l.getAttribute("dataFontSize");
                null == b && (b = 12);
                var x = l.getAttribute("fontSize");
                null == x && (x = 15);
                var $ = l.getAttribute("title");
                null == $ && ($ = "_b_ Chart");
                var w = l.getAttribute("y2AxesType");
                null == w && (w = "line");
                var S = l.getAttribute("click");
                if (null != S) {
                    var k = l.localName;
                    n[String(k)] = new Function(S)
                }
                var _ = l.getAttribute("hover");
                if (null != _) {
                    k = l.localName;
                    i[String(k)] = new Function(_)
                }
                var T = l.getAttribute("imageDir");
                if (null == T) T = "null";
                else {
                    var C = new Function(T);
                    T = C()
                }
                A = 'dataLabel:"-"';
                try {
                    var A = l.getAttribute("params");
                    null == A && (A = 'dataLabel:"-"')
                } catch (t) {}
                var I = new Function(l.getAttribute("callback"));
                try {
                    E = (E = new Function(l.getAttribute("stacked")))()
                } catch (t) {
                    var E;
                    null == (E = l.getAttribute("stacked")) && (E = !1)
                }
                null != E && "undefined" != E || null == (E = l.getAttribute("stacked")) && (E = !1);
                try {
                    B = (B = new Function(l.getAttribute("tooltips")))()
                } catch (t) {
                    var B;
                    null == (B = l.getAttribute("tooltips")) && (B = !1)
                }
                null != B && "undefined" != B || null == (B = l.getAttribute("tooltips")) && (B = !0);
                try {
                    F = (F = new Function(l.getAttribute("yAxesTitle")))()
                } catch (t) {
                    var F;
                    null == (F = l.getAttribute("yAxesTitle")) && (F = "")
                }
                null != F && "undefined" != F || null == (F = l.getAttribute("yAxesTitle")) && (F = "");
                try {
                    D = (D = new Function(l.getAttribute("y2AxesTitle")))()
                } catch (t) {
                    var D;
                    null == (D = l.getAttribute("y2AxesTitle")) && (D = "")
                }
                null != D && "undefined" != D || null == (D = l.getAttribute("y2AxesTitle")) && (D = "");
                try {
                    L = (L = new Function(l.getAttribute("showDay")))()
                } catch (t) {
                    var L;
                    null == (L = l.getAttribute("showDay")) && (L = !0)
                }
                null != L && "undefined" != L || null == (L = l.getAttribute("showDay")) && (L = !0);
                try {
                    P = (P = new Function(l.getAttribute("height")))()
                } catch (t) {
                    var P;
                    null == (P = l.getAttribute("height")) && (P = 350)
                }
                null != P && "undefined" != P || null == (P = l.getAttribute("height")) && (P = 350);
                try {
                    N = (N = new Function(l.getAttribute("width")))()
                } catch (t) {
                    var N;
                    null == (N = l.getAttribute("width")) && (N = 600)
                }
                null != N && "undefined" != N || null == (N = l.getAttribute("width")) && (N = 600);
                try {
                    z = (z = new Function(l.getAttribute("xlabelAngle")))()
                } catch (t) {
                    var z;
                    null == (z = l.getAttribute("xlabelAngle")) && (z = 0)
                }
                null != z && "undefined" != z || null == (z = l.getAttribute("xlabelAngle")) && (z = 0);
                try {
                    H = (H = new Function(l.getAttribute("dataLabel")))()
                } catch (t) {
                    var H;
                    null == (H = l.getAttribute("dataLabel")) && (H = "data")
                }
                null != H && "undefined" != H || null == (H = l.getAttribute("dataLabel")) && (H = "data");
                try {
                    R = (R = new Function(l.getAttribute("dataLabel2")))()
                } catch (t) {
                    var R;
                    null == (R = l.getAttribute("dataLabel2")) && (R = "data")
                }
                null != R && "undefined" != R || null == (R = l.getAttribute("dataLabel2")) && (R = "data");
                try {
                    var M = new Function(l.getAttribute("colorIndex"));
                    M = String(M()).split(",")
                } catch (t) {
                    try {
                        M = l.getAttribute("colorIndex").split(",")
                    } catch (t) {}
                    null == M && (M = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
                }
                if (null == M || "undefined" == M) {
                    try {
                        M = String(l.getAttribute("colorIndex")).split(",")
                    } catch (t) {}
                    null == M && (M = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
                }
                try {
                    var X = new Function(l.getAttribute("pointBorderColorIndex"));
                    X = String(X()).split(",")
                } catch (t) {
                    try {
                        X = String(l.getAttribute("pointBorderColorIndex")).split(",")
                    } catch (t) {}
                    null == X && (X = ["#000000", "#000000", "#000000", "#000000", "#000000"])
                }
                if (null == X || "undefined" == X) {
                    try {
                        X = l.getAttribute("pointBorderColorIndex").split(",")
                    } catch (t) {}
                    null == X && (X = ["#000000", "#000000", "#000000", "#000000", "#000000"])
                }
                try {
                    var W = new Function(l.getAttribute("pointBorderDash"));
                    W = String(W()).split(",")
                } catch (t) {
                    try {
                        W = String(l.getAttribute("pointBorderDash")).split(",")
                    } catch (t) {}
                    null == W && (W = [0, 0, 0, 0, 0])
                }
                if (null == W || "undefined" == W) {
                    try {
                        W = l.getAttribute("pointBorderDash").split(",")
                    } catch (t) {}
                    null == W && (W = [0, 0, 0, 0, 0])
                }
                try {
                    var K = new Function(l.getAttribute("pointBorderWidth"));
                    K = String(K()).split(",")
                } catch (t) {
                    try {
                        K = String(l.getAttribute("pointBorderWidth")).split(",")
                    } catch (t) {}
                    null == K && (K = ["1", "1", "1", "1", "1"])
                }
                if (null == K || "undefined" == K) {
                    try {
                        K = l.getAttribute("pointBorderWidth").split(",")
                    } catch (t) {}
                    null == K && (K = ["1", "1", "1", "1", "1"])
                }
                try {
                    var j = new Function(l.getAttribute("pointColorIndex"));
                    j = String(j()).split(",")
                } catch (t) {
                    try {
                        j = String(l.getAttribute("pointColorIndex")).split(",")
                    } catch (t) {}
                    null == j && (j = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
                }
                if (null == j || "undefined" == j) {
                    try {
                        j = l.getAttribute("pointColorIndex").split(",")
                    } catch (t) {}
                    null == j && (j = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
                }
                try {
                    var V = new Function(l.getAttribute("pointStyle"));
                    V = String(V()).split(",")
                } catch (t) {
                    try {
                        V = l.getAttribute("pointStyle").split(",")
                    } catch (t) {}
                    null == V && (V = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
                }
                if (null == V || "undefined" == V) {
                    try {
                        V = l.getAttribute("pointStyle").split(",")
                    } catch (t) {}
                    null == V && (V = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
                }
                U = ["5", "5", "8", "8"];
                try {
                    var U = l.getAttribute("pointRadius").split(",")
                } catch (t) {}
                null == U && (U = ["5", "5", "8", "8"]), "false" != e && 0 != e && ("pie" != o ? pims(l.localName)._b_(function() {
                    params = A + "@" + l.localName, css = {
                        display: c,
                        background: d,
                        border: s,
                        height: P,
                        width: N,
                        fontSize: x,
                        legendDisplay: h,
                        legendPosition: u,
                        colorIndex: M,
                        pointBorderColorIndex: X,
                        pointBorderDash: W,
                        pointBorderWidth: K,
                        pointColorIndex: j,
                        pointStyle: V,
                        pointRadius: U,
                        showDay: L,
                        xlabelAngle: z,
                        labelFontSize: g,
                        label2FontSize: f,
                        yAxesFontSize: m,
                        y2AxesFontSize: y,
                        xAxesFontSize: v,
                        dataFontSize: b,
                        titleFontSize: p
                    }, attr = {
                        chartType: o,
                        title: $,
                        labelString: F,
                        label2String: D,
                        y2AxesType: w,
                        stacked: E,
                        tooltips: B,
                        dataLabel: H,
                        dataLabel2: R
                    }, param = {
                        model: a,
                        data: r
                    }, null != S && (events = {
                        callback: function() {
                            try {
                                I()
                            } catch (t) {}
                        },
                        click: function(t, e, i, l) {
                            for (var a in potato.chartLabel = e, potato.chartYvalue = i, potato.chartXvalue = l, n) {
                                String(a) == t && n[a]()
                            }
                        },
                        hover: function(t, e, n, l) {
                            for (var a in potato.chartLabel = e, potato.chartYvalue = n, potato.chartXvalue = l, i) {
                                String(a) == t && i[a]()
                            }
                        }
                    })
                }) : pims(l.localName)._dn_(function() {
                    params = A + "@" + l.localName, css = {
                        border: s,
                        height: P,
                        width: N,
                        fontSize: x,
                        display: c,
                        dataFontSize: b,
                        titleFontSize: p
                    }, attr = {
                        imageDir: T,
                        title: $
                    }, param = {
                        model: a
                    }, null != S && (events = {
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
                    n = (t = String(t).toUpperCase(), $O$Element[t]),
                    l = n.getAttribute(O.bdr);
                null == l && (l = O.bdr1);
                var a = n.getAttribute("height");
                null == a && (a = 350);
                var r = n.getAttribute("width");
                null == r && (r = 600);
                var o = n.getAttribute("dataFontSize");
                null == o && (o = 12);
                var s = n.getAttribute("fontSize");
                null == s && (s = 15);
                var d = n.getAttribute("imageDir");
                if (null == d) d = "null";
                else {
                    var c = new Function(d);
                    d = c()
                }
                var p = n.getAttribute("titleDisplay");
                null == p && (p = !1);
                var h = n.getAttribute("titleFontSize");
                null == h && (h = 25);
                var u = n.getAttribute("title");
                null == u && (u = "_dn_ Chart");
                var g = n.getAttribute("click");
                if (null != g) {
                    var f = n.localName;
                    i[String(f)] = new Function(g)
                }
                var m = new Function(n.getAttribute("callback")),
                    y = n.getAttribute("params");
                "false" != e && pims(n.localName)._dn_(function() {
                    params = y + "@" + n.localName, css = {
                        border: l,
                        height: a,
                        width: r,
                        fontSize: s,
                        display: p,
                        dataFontSize: o,
                        titleFontSize: h
                    }, attr = {
                        imageDir: d,
                        title: u
                    }, null != g && (events = {
                        callback: function() {
                            try {
                                m()
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
                var l = n.getAttribute(O.bdr);
                null == l && (l = O.bdr1);
                var a = n.getAttribute("height");
                null == a && (a = 350);
                var r = n.getAttribute("width");
                null == r && (r = 600);
                var o = n.getAttribute("dataFontSize");
                null == o && (o = 12);
                var s = n.getAttribute("fontSize");
                null == s && (s = 15);
                var d = n.getAttribute("titleDisplay");
                null == d && (d = !1);
                var c = n.getAttribute("titleFontSize");
                null == c && (c = 25);
                var p = n.getAttribute("title");
                null == p && (p = "_dn_ Chart");
                var h = n.getAttribute("click");
                if (null != h) {
                    var u = n.localName;
                    i[String(u)] = new Function(h)
                }
                var g = new Function(n.getAttribute("callback")),
                    f = n.getAttribute("params");
                "false" != e && pims(n.localName).Radar(function() {
                    params = f + "@" + n.localName, css = {
                        border: l,
                        height: a,
                        width: r,
                        fontSize: s,
                        display: d,
                        dataFontSize: o,
                        titleFontSize: c
                    }, attr = {
                        title: p
                    }, null != h && (events = {
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
                var e, i = $O$Element[t],
                    n = this.attr(i, O.id),
                    l = String(i.localName).split("-");
                null == n && (n = String(l.slice(2, 3)).toLowerCase());
                var a = this.attr(i, O.mdl),
                    r = this.attr(i, O.dat),
                    o = this.attr(i, O.hdr);
                null == o && (o = "");
                var s = this.attr(i, O.bdr);
                null == s && (s = O.bdr0);
                var d = this.attr(i, "borderRadius");
                null == d && (d = 0);
                var c = this.attr(i, "fontColorTD"),
                    p = this.attr(i, "fontColorTH"),
                    h = this.attr(i, "fontFamilyTD"),
                    u = this.attr(i, "fontFamilyTH"),
                    g = this.attr(i, "fontSizeTD"),
                    f = this.attr(i, "fontSizeTH");
                null != i.getAttribute("click") && (e = new Function(this.attr(i, "click")));
                var m = i.getAttribute("height");
                null == m && (m = window.innerHeight - 200 + "px");
                var y = i.getAttribute("width");
                null == y && (y = window.innerWidth - 30 + "px");
                var v = this.attr(i, "root");
                if (null == v) try {
                    l = String(i.localName).split("-");
                    v = String(l.slice(1, 2))
                } catch (t) {
                    v = "getFIELD"
                }
                var b = this.attr(i, "whereClass");
                null == b && (b = "getWHERE");
                try {
                    var x = i.getAttribute("params")
                } catch (t) {}
                var $ = this.attr(i, "editCell");
                null != this.attr(i, "editCellCallback") && new Function(this.attr(i, "editCellCallback"));
                var w = this.attr(i, "editWidth");
                null == w && (w = 50);
                i.getAttribute("selectCols");
                var S = this.attr(i, "targerCol");
                null == S && (S = 0);
                var k = this.attr(i, "markSymbol");
                null == k && (k = "★"), null != i.getAttribute("selectCellCallback") && new Function(i.getAttribute("selectCellCallback"));
                var _ = new Function(i.getAttribute("callback")),
                    T = this.attr(i, O.multipleS);
                null == T && (T = this.attr(i, O.selectM));
                $ = this.attr(i, "editCell");
                var C = this.attr(i, "htm"),
                    A = new Function(this.attr(i, "dragdrop"));
                pims(i.localName)._tb_({
                    FIELD: {
                        class: v
                    },
                    WHERE: {
                        class: b
                    }
                }, function() {
                    multipleSelect = T + "@" + i.localName, editCell = $ + "@" + i.localName, params = x + "@" + i.localName, css = {
                        border: s,
                        borderRadius: d,
                        height: m,
                        width: y,
                        fontFamilyTD: h,
                        fontFamilyTH: u,
                        fontColorTD: c,
                        fontColorTH: p,
                        fontSizeTD: g,
                        fontSizeTH: f
                    }, attr = {
                        id: n
                    }, param = {
                        model: a,
                        data: r,
                        header: o,
                        htm: C
                    }, events = {
                        dragdrop: function() {
                            try {
                                A()
                            } catch (t) {}
                        },
                        callback: function(t, e) {
                            try {
                                _()
                            } catch (t) {}
                        },
                        click: function(t, i, n, l) {
                            potato.table = t, potato.ri = i, potato.ci = n;
                            try {
                                e()
                            } catch (t) {}
                            try {
                                $.split(",")
                            } catch (t) {}
                        }
                    }
                })
            },
            response: "",
            ri: "",
            second: function() {
                var t = (new Date).getSeconds();
                return t = parseInt(t) < 10 ? "0" + t : t
            },
            Select: function(t, e, i) {
                var n = O.is(this),
                    l = this.x,
                    a = this._p_(i);
                a.id = l, n.createdCallback = function() {
                    this.innerHTML = '<Select id="' + l + '"></Select> ';
                    for (var t = (l.match(/-/g) || []).length, e = l.split("-"), i = e.slice(2, 3), n = 3; n <= t; n++) i = i + "_" + e.slice(n, n + 1);
                    this.name = i, this.is = l, $("#" + l).css({
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
                        "null" != a.hoverBgColor && $(this).css(O.bolor, a.hoverBgColor), $(this).css(O.co, a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: a.hoverHeight + "px",
                            width: a.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 50
                        })
                    }).mouseout(function() {
                        "null" != a.hoverBgColor && $(this).css(O.bolor, a.background), $(this).css(O.co, a.i), $("#" + a.hoverId).hide().html("")
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
                    var e = document.getElementById(l),
                        i = O.parse(t);
                    e.length = 0;
                    var n = 0;
                    for (var r in i)
                        if ("undefined" != i[r].d0 && null != i[r].d0) {
                            var o = i[r].d1;
                            T = i[r].d0, e[n] = new Option(o, T), n++
                        }
                    a.callback()
                })
            },
            SELECT: function(t, e) {
                var i = this._p_(e),
                    n = O.is(this),
                    l = this.x,
                    a = String(l).split("-").slice(2, 3),
                    r = l + O.php,
                    o = "",
                    s = [],
                    d = 0;
                for (var c in t) {
                    if (d++, "WHERE" == c) {
                        var p = 0;
                        for (var h in t[c]) {
                            if ("class" == h)
                                for (var u = $O$X.prototype.getIdClass(t[c][h]), g = 0; g < u.length; g++) s[u[g].field] = pims(u[g].is).value();
                            "class" != h && (s[h] = t[c][h])
                        }
                    }
                    if ("FIELD" == c) {
                        p = 0, o = "";
                        var f, m = [],
                            y = [],
                            v = 0;
                        for (var h in t[c]) {
                            if ("class" == h) {
                                v = 1, f = (u = $O$X.prototype.getIdClass(t[c][h]))[0].field;
                                for (g = 0; g < u.length; g++) {
                                    var b = String(u[g].pims).split("-");
                                    m[b.slice(1, 2)] = u[g].field + ",", y[b.slice(1, 2)] = u[g].pims
                                }
                                p = parseFloat(b.slice(1, 2))
                            }
                            "class" != h && (1 == v ? m[p + 1] = h + "," : m[p] = h + ",", f = h, p++)
                        }
                        m[m.length] = f;
                        for (g = 0; g < m.length; g++) o += m[g];
                        s.fields = o
                    }
                }
                d > 0 ? s.fieldsLength = 2 : s = {}, n.createdCallback = function() {
                    this.id = a + "_";
                    var t = document.getElementById(l);
                    try {
                        this.index = t.getAttribute("index"), this.field = t.getAttribute("field"), null == this.index && (this.index = 0), null == this.field && (this.field = 0)
                    } catch (t) {}
                    this.pims = l, this.innerHTML = '<Select id="pims-' + l + '"></Select> ', (t = document.getElementById(a)).style.width = i.width + "px", "string" == typeof i.width && (t.style.width = i.width), t.style.height = i.height + "px", "string" == typeof i.height && (t.style.height = i.height), t.style.background = i.background, t.style.boxShadow = i.boxShadow, t.style.color = i.color, t.style.display = i.display, t.style.fontFamily = i.fontFamily, t.style.fontWeight = i.fontWeight, t.style.fontSize = i.fontSize + "px", "string" == typeof i.fontSize && (t.style.fontSize = i.fontSize), t.style.textAlign = i.textAlign, t.style.padding = i.padding, t.style.border = i.border, t.style.position = i.position, t.style.left = i.left + "px", "string" == typeof i.left && (t.style.left = i.left), t.style.top = i.top + "px", "string" == typeof i.top && (t.style.top = i.top), t.style.borderRadius = i.borderRadius + "px", "string" == typeof i.borderRadius && (t.style.borderRadius = i.borderRadius), t.style.textTransform = i.textTransform, t.style.cursor = "pointer", t.multiple = i.multiple, $O$X("#" + a).CLICK(function() {
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
                    }), $O$X("#" + a).MOUSEMOVE(function() {
                        "null" != i.hoverBgColor && $(this).css(O.bolor, i.hoverBgColor), $(this).css(O.co, i.hoverColor), "" != i.hoverText && $("#" + i.hoverId).html(i.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: i.hoverHeight + "px",
                            width: i.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 50
                        })
                    }), $O$X("#" + a).MOUSEOUT(function() {
                        "null" != i.hoverBgColor && $(this).css(O.bolor, i.background), $(this).css(O.co, i.i), $("#" + i.hoverId).hide().html("")
                    }), $O$X("#" + l).CHANGE(function() {
                        try {
                            i.change()
                        } catch (t) {}
                    })
                }, this._rp_(r, s, function(t) {
                    var e = document.getElementById(a),
                        n = O.parse(t);
                    e.length = 0;
                    var l = 0;
                    for (var r in n)
                        if ("undefined" != n[r][0] && null != n[r][0]) {
                            var o = n[r][1];
                            T = n[r][0], e[l] = new Option(o, T), l++
                        }
                    i.callback()
                })
            },
            selectM: "selectMultiple",
            scrollx: function(t, e, i) {
                for (var n = this.x, l = document.getElementsByClassName(t), a = 0; a < l.length; a++) parseFloat(document.getElementById(n).scrollLeft) > e ? l[a].style.left = i ? parseFloat(document.getElementById(n).scrollLeft) + parseFloat(i) + "px" : document.getElementById(n).scrollLeft + "px" : l[a].style.left = "0px"
            },
            scrolly: function(t, e, i) {
                for (var n = this.x, l = document.getElementsByClassName(t), a = 0; a < l.length; a++) parseFloat(document.getElementById(n).scrollTop) > e ? l[a].style.top = i ? parseFloat(document.getElementById(n).scrollTop) + parseFloat(i) + "px" : document.getElementById(n).scrollTop + "px" : l[a].style.top = "0px"
            },
            setBindTableElements: function() {
                $O$Array = [];
                for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e++) {
                    var i = t[e].getAttribute("bind");
                    try {
                        if (null != i) {
                            var n = String(t[e].getAttribute(O.id)).split("_").slice(0, 1);
                            null == field && (field = n), $O$Array.push({
                                id: n,
                                value: document.getElementById(n).value,
                                bind: i
                            })
                        }
                    } catch (t) {}
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
            table: "",
            title: "POTATO",
            tp: "top",
            trigger: 0,
            TableExcel: function(t, e) {
                var i = this._p_(e),
                    n = this.x,
                    l = n + O.php;
                if (null != i.model && (l = i.model + O.php), i.id = n, "string" == typeof t)
                    for (var a = $O$X.prototype.getIdClass(t), r = (t = [], 0); r < a.length; r++) "length" != a[r].name && (t[a[r].name] = pims(a[r].is).value());
                this._re_(l, t, function(t) {
                    try {
                        i.callback()
                    } catch (t) {}
                })
            },
            Table: function(t, e) {
                var i = this._p_(e),
                    n = this.x,
                    l = n + O.php;
                if (null != i.model && (l = i.model + O.php), i.id = n, "string" == typeof t)
                    for (var a = $O$X.prototype.getIdClass(t), r = (t = [], 0); r < a.length; r++) "length" != a[r].name && (t[a[r].name] = pims(a[r].is).value());
                this._rp_(l, t, function(t) {
                    "tableId" == i.tableId && (i.tableId = "table_" + n);
                    var e = "<table id=" + i.tableId + " class=" + i.cls + ">";
                    if (null != i.data.d0) {
                        var l, a = (new Array, 0);
                        for (l in e += "<tr>", i.data) e += "<th>" + i.data["d" + a] + "</th>", a += 1;
                        for (var o in e += "</tr>", r)
                            if ("undefined" != r[o].d0 && null != r[o].d0) {
                                e += "<tr>";
                                for (var s = 0; a > s; s++) e += "<td>" + r[o]["d" + s] + "</td>";
                                e += "</tr>"
                            }
                    } else {
                        a = 0;
                        for (l in e += "<tr>", r[0]) "" != r[0][l] ? e += "<th>" + r[0][l] + "</th>" : e += "<th style='display:none'>" + r[0][l] + "</th>", a++;
                        for (var o in e += "</tr>", r)
                            if ("undefined" != r[o][0] && null != r[o][0] && o > 0) {
                                e += "<tr>";
                                for (s = 0; a > s; s++) "" != r[0][s] ? e += "<td>" + r[o][s] + "</td>" : e += "<td style='display:none'>" + r[o][s] + "</td>";
                                e += "</tr>"
                            }
                    }
                    e += "</table>", $("#" + n).html(e).show().css({
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
                            $O$X.prototype.tableHighlight($(this)[0].rowIndex, i.tableId)
                        });
                    $(document).keydown(function(t) {
                        if (c.find(".highlight").length)
                            if (40 == t.which) {
                                var e = c.find(".highlight").next();
                                $O$X.prototype.tableHighlight(e[0].rowIndex, i.tableId)
                            } else if (38 == t.which) {
                            var n = c.find(".highlight").prev();
                            $O$X.prototype.tableHighlight(n[0].rowIndex, i.tableId)
                        }
                    });
                    try {
                        i.callback(d, i.tableId)
                    } catch (t) {}
                    $("#" + i.tableId + " td").click(function() {
                        try {
                            $("table tbody tr").removeClass("highlight");
                            for (var t = 0; t < a; t++) d.rows[ri].cells[t].style.background = "#dfdfdf"
                        } catch (t) {}
                        for (t = 0; t < a; t++) d.rows[ri].cells[t].style.background = "yellow";
                        i.click(d.rows[ri], ri, ci)
                    })
                })
            },
            tableHighlight: function(t, e) {
                t + 1 > $("#" + e + " tbody tr").length && (t = 0), $("#" + e + " tbody tr:eq(" + t + ")").length > 0 && ($("#" + e + " tbody tr").removeClass("highlight"), $("#" + e + " tbody tr:eq(" + t + ")").addClass("highlight"))
            },
            tag: function(t) {
                return document.getElementsByTagName(t)
            },
            Text: function(t) {
                var e = O.is(this),
                    i = this.x,
                    n = this._p_(t);
                n.id = i, e.createdCallback = function() {
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), a = 3; a <= t; a++) l = l + "_" + e.slice(a, a + 1);
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
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.hoverBgColor), $(this).css(O.co, n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.background), $(this).css(O.co, n.i), $("#" + n.hoverId).hide().html("")
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
                }
            },
            toggle: new Array,
            timeNow: function() {
                var t = new Date,
                    e = t.getHours(),
                    i = t.getMinutes(),
                    n = t.getSeconds();
                return e >= 12 && "pm", i < 10 && (i = "0" + i), n < 10 && (n = "0" + n), e + ":" + i + ":" + n
            },
            Timepad: function(t) {
                var e = O.is(this),
                    i = this.x,
                    n = this._p_(t);
                n.id = i, e.createdCallback = function() {
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), l = e.slice(2, 3), a = 3; a <= t; a++) l = l + "_" + e.slice(a, a + 1);
                    this.name = l, this.is = i;
                    var r = '<div id="div_' + i + '"> ';
                    r += '<input type="text" id="' + i + '"> ', r += '<div class="keypad" id="keypad-' + i + '"></div> ', r += "</div> ", this.innerHTML = r, $O$F = document.getElementById("input-" + i), $("#div_" + i).css({
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
                    }).attr(O.val, n.value).mousemove(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.hoverBgColor), $(this).css(O.co, n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bolor, n.background), $(this).css(O.co, n.i), $("#" + n.hoverId).hide().html("")
                    }).click(function() {
                        try {
                            for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + i, $(".keypad").hide(), $(O.kp + i).show().css({
                            position: "absolute",
                            top: event.clientY + 20 + n.topKey,
                            left: event.clientX + n.leftKey
                        }), $("#TimePad").show(), $O$F = document.getElementById(i)
                    }), $(O.kp + i).load("config/timepad.htm").css({
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
                    a = t.getSeconds(),
                    r = t.getFullYear();
                return $O$P.day = parseInt(e) < 10 ? "0" + e : e, $O$P.hour = parseInt(i) < 10 ? "0" + i : i, $O$P.minute = parseInt(n) < 10 ? "0" + n : n, $O$P.month = parseInt(l) < 10 ? "0" + l : l, $O$P.second = parseInt(a) < 10 ? "0" + a : a, $O$P.year = r, $O$P.title = "$O$", $O$P.now = $O$P.hour + ":" + $O$P.minute, r + "-" + Oget.month + "-" + Oget.day
            },
            val: "value",
            value: function(t) {
                return t ? (this.e.value = t, this) : this.e.value
            },
            wit: "width",
            width: 100,
            year: function() {
                return (new Date).getFullYear()
            }
        }, $O$P
    }(),
    potato = new $O$X,
    O = new $O$X;

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
$POTATO();
