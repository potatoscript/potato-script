/*
    Copyright (C) 2019  LIM KIAN SENG
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
            for (var i = 0, n = t.length; i < n; i++) h(t[i], e)
        }

        function a(t) {
            return function(e) {
                tt(e) && (h(e, t), l(e.querySelectorAll(D), t))
            }
        }

        function r(t) {
            var e = t.getAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111)),
                i = t.nodeName.toUpperCase(),
                n = z.call(N, e ? B + e.toUpperCase() : E + i);
            return e && -1 < n && !o(i, e) ? -1 : n
        }

        function o(t, e) {
            return -1 < D.indexOf(t + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + e + '"]')
        }

        function s(t) {
            var e = t.currentTarget,
                i = t.attrChange,
                n = t.attrName,
                l = t.target;
            pt && (!l || l === e) && e.attributeChangedCallback && "style" !== n && e.attributeChangedCallback(n, i === t[A] ? null : t.prevValue, i === t[T] ? null : t.newValue)
        }

        function d(t) {
            var e = a(t);
            return function(t) {
                g.push(e, t.target)
            }
        }

        function c(t) {
            ut && (ut = !1, t.currentTarget.removeEventListener(C, c)), l((t.target || e).querySelectorAll(D), t.detail === S ? S : k), Z && function() {
                for (var t, e = 0, i = et.length; e < i; e++) t = et[e], H.contains(t) || (et.splice(e, 1), h(t, S))
            }()
        }

        function u(t, e) {
            var i = this;
            nt.call(i, t, e), m.call(i, {
                target: i
            })
        }

        function p(t, e) {
            J(t, e), b ? b.observe(t, rt) : (ct && (t.setAttribute = u, t[$] = y(t), t.addEventListener(I, m)), t.addEventListener(_, s)), t.createdCallback && pt && (t.created = !0, t.createdCallback(), t.created = !1)
        }

        function h(t, e) {
            var i, n = r(t); - 1 < n && (v(t, P[n]), n = 0, e !== k || t[k] ? e === S && !t[S] && (t[k] = !1, t[S] = !0, n = 1) : (t[S] = !1, t[k] = !0, n = 1, Z && z.call(et, t) < 0 && et.push(t)), n && (i = t[e + "Callback"]) && i.call(t))
        }
        if (!(n in e)) {
            var g, m, f, y, b, v, x, $ = "__" + n + (1e5 * Math.random() >> 0),
                k = "attached",
                S = "detached",
                w = "extends",
                A = "ADDITION",
                O = "MODIFICATION",
                T = "REMOVAL",
                _ = "DOMAttrModified",
                C = "DOMContentLoaded",
                I = "DOMSubtreeModified",
                E = "<",
                B = "=",
                F = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
                L = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
                N = [],
                P = [],
                D = "",
                H = e.documentElement,
                z = N.indexOf || function(t) {
                    for (var e = this.length; e-- && this[e] !== t;);
                    return e
                },
                M = i.prototype,
                R = M.hasOwnProperty,
                X = M.isPrototypeOf,
                W = i.defineProperty,
                K = i.getOwnPropertyDescriptor,
                j = i.getOwnPropertyNames,
                V = i.getPrototypeOf,
                U = i.setPrototypeOf,
                Y = !!i.$O$Sroto__,
                q = i.create || function t(e) {
                    return e ? (t.prototype = e, new t) : this
                },
                J = U || (Y ? function(t, e) {
                    return t.$O$Sroto__ = e, t
                } : j && K ? function() {
                    function t(t, e) {
                        for (var i, n = j(e), l = 0, a = n.length; l < a; l++) i = n[l], R.call(t, i) || W(t, i, K(e, i))
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
                G = t.MutationObserver || t.WebKitMutationObserver,
                Q = (t.HTMLElement || t.Element || t.Node).prototype,
                Z = !X.call(Q, H),
                tt = Z ? function(t) {
                    return 1 === t.nodeType
                } : function(t) {
                    return X.call(Q, t)
                },
                et = Z && [],
                it = Q.cloneNode,
                nt = Q.setAttribute,
                lt = Q.removeAttribute,
                at = e.createElement,
                rt = G && {
                    attributes: !0,
                    characterData: !0,
                    attributeOldValue: !0
                },
                ot = G || function(t) {
                    ct = !1, H.removeEventListener(_, ot)
                },
                st = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                    setTimeout(t, 10)
                },
                dt = !1,
                ct = !0,
                ut = !0,
                pt = !0;
            U || Y ? (v = function(t, e) {
                X.call(e, t) || p(t, e)
            }, x = p) : x = v = function(t, e) {
                t[$] || (t[$] = i(!0), p(t, e))
            }, Z ? (ct = !1, function() {
                var t = K(Q, "addEventListener"),
                    e = t.value,
                    i = function(t) {
                        var e = new CustomEvent(_, {
                            bubbles: !0
                        });
                        e.attrName = t, e.prevValue = this.getAttribute(t), e.newValue = null, e[T] = e.attrChange = 2, lt.call(this, t), this.dispatchEvent(e)
                    },
                    n = function(t, e) {
                        var i = this.hasAttribute(t),
                            n = i && this.getAttribute(t),
                            l = new CustomEvent(_, {
                                bubbles: !0
                            });
                        nt.call(this, t, e), l.attrName = t, l.prevValue = i ? n : null, l.newValue = e, i ? l[O] = l.attrChange = 1 : l[A] = l.attrChange = 0, this.dispatchEvent(l)
                    },
                    l = function(t) {
                        var e, i = t.currentTarget,
                            n = i[$],
                            l = t.propertyName;
                        n.hasOwnProperty(l) && (n = n[l], (e = new CustomEvent(_, {
                            bubbles: !0
                        })).attrName = n.name, e.prevValue = n.value || null, e.newValue = n.value = i[l] || null, null == e.prevValue ? e[A] = e.attrChange = 0 : e[O] = e.attrChange = 1, i.dispatchEvent(e))
                    };
                t.value = function(t, a, r) {
                    t === _ && this.attributeChangedCallback && this.setAttribute !== n && (this[$] = {
                        className: {
                            name: "class",
                            value: this.className
                        }
                    }, this.setAttribute = n, this.removeAttribute = i, e.call(this, "propertychange", l)), e.call(this, t, a, r)
                }, W(Q, "addEventListener", t)
            }()) : G || (H.addEventListener(_, ot), H.setAttribute($, 1), H.removeAttribute($), ct && (m = function(t) {
                var e, i, n, l = this;
                if (l === t.target) {
                    for (n in e = l[$], l[$] = i = y(l), i) {
                        if (!(n in e)) return f(0, l, n, e[n], i[n], A);
                        if (i[n] !== e[n]) return f(1, l, n, e[n], i[n], O)
                    }
                    for (n in e)
                        if (!(n in i)) return f(2, l, n, e[n], i[n], T)
                }
            }, f = function(t, e, i, n, l, a) {
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
                if (n = t.toUpperCase(), dt || (dt = !0, G ? (b = function(t, e) {
                        function i(t, e) {
                            for (var i = 0, n = t.length; i < n; e(t[i++]));
                        }
                        return new G(function(n) {
                            for (var l, a, r = 0, o = n.length; r < o; r++) "childList" === (l = n[r]).type ? (i(l.addedNodes, t), i(l.removedNodes, e)) : (a = l.target, pt && a.attributeChangedCallback && "style" !== l.attributeName && a.attributeChangedCallback(l.attributeName, l.oldValue, a.getAttribute(l.attributeName)))
                        })
                    }(a(k), a(S))).observe(e, {
                        childList: !0,
                        subtree: !0
                    }) : (g = [], st(function t() {
                        for (; g.length;) g.shift().call(null, g.shift());
                        st(t)
                    }), e.addEventListener("DOMNodeInserted", d(k)), e.addEventListener("DOMNodeRemoved", d(S))), e.addEventListener(C, c), e.addEventListener("readystatechange", c), e.createElement = function(t, i) {
                        var n = at.apply(e, arguments),
                            l = "" + t,
                            a = z.call(N, (i ? B : E) + (i || l).toUpperCase()),
                            r = -1 < a;
                        return i && (n.setAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111), i = i.toLowerCase()), r && (r = o(l.toUpperCase(), i))), pt = !e.createElement.innerHTMLHelper, r && x(n, P[a]), n
                    }, Q.cloneNode = function(t) {
                        var e = it.call(this, !!t),
                            i = r(e);
                        return -1 < i && x(e, P[i]), t && function(t) {
                            for (var e, i = 0, n = t.length; i < n; i++) e = t[i], x(e, P[r(e)])
                        }(e.querySelectorAll(D)), e
                    }), -2 < z.call(N, B + n) + z.call(N, E + n)) throw new Error("A " + t + " type pims already registered");
                if (!F.test(n) || -1 < z.call(L, n)) throw new Error("The type " + t + " pims invalid");
                var n, s = function() {
                        return p ? e.createElement(h, n) : e.createElement(h)
                    },
                    u = i || M,
                    p = R.call(u, w),
                    h = p ? i[w].toUpperCase() : n,
                    m = N.push((p ? B : E) + n) - 1;
                return D = D.concat(D.length ? "," : "", p ? h + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + t.toLowerCase() + '"]' : h), s.prototype = P[m] = R.call(u, "prototype") ? u.prototype : q(Q), l(e.querySelectorAll(D), k), s
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
            ci: "",
            chartLabel: "",
            chartYvalue: "",
            chartXvalue: "",
            edit: "off",
            log: "",
            model: "POTATO.php",
            response: "",
            ri: "",
            table: "",
            title: "POTATO",
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
            background: function(t) {
                return this.e.style.background = t, this
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
                var u = 0,
                    p = [];
                if (null != [] && "null" != c)
                    for (var h = (String(c).match(/,/g) || []).length, g = String(c).split(","), m = 0; m <= h; m++) {
                        var f = String(g.slice(m, m + 1)).split(":"),
                            y = new Function(f.slice(1, 2));
                        if ("null" != String(f.slice(0, 1)).replace(/\s+/g, "")) try {
                            p[String(f.slice(0, 1)).replace(/\s+/g, "")] = String(y()).split(",")
                        } catch (t) {
                            u = 1, p[String(f.slice(0, 1)).replace(/\s+/g, "")] = ""
                        }
                    }
                null != e.model ? (l.createdCallback = function() {
                    var t = '<div class="chartWrapper" style="position:relative">';
                    t += '<div id="div_' + o + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="div_chart_' + o + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + o + '" style="background:' + e.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(e.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t
                }, 0 == u && this.Post(i, p, function(t) {
                    var i = new Array,
                        n = new Array;
                    i[0] = new Array, n[0] = new Array;
                    new Array;
                    var l = String(e.dataLabel).split(","),
                        r = String(e.dataLabel2).split(",");
                    if ("bar" == e.chartType) {
                        for (var c = 1, u = 0; u <= l.length + 1; u++) "data" != l[u] && (i[c] = new Array, c++);
                        if ("data" != r[0])
                            for (c = 0, u = 0; u <= r.length; u++) n[c] = new Array, c++
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
                            var k = 0,
                                S = [];
                            S[0] = 0;
                            var w = 0;
                            for (c = 1; c <= l.length; c++) try {
                                "data" != l[c] && (i[w].push(t[u][c]), 1 == s ? k += parseFloat(t[u][c]) : (S[c] = 0, parseFloat(t[u][c]) > 0 && "undefined" != t[u][c] && (S[c] = parseFloat(t[u][c]))), w++)
                            } catch (t) {}
                            if (i[w].push(k), h[u] = 1 == s ? k : maxArray(S), "data" != r[0]) {
                                var A = 0,
                                    O = [];
                                O[0] = 0;
                                var T = 0;
                                for (c = 0; c < r.length; c++)
                                    if ("undefined" != t[u][r[c]] && null != t[u][r[c]]) try {
                                        n[T].push(t[u][r[c]]), 1 == s ? A += parseFloat(t[u][r[c]]) : (A[c] = 0, parseFloat(t[u][r[c]]) > 0 && (O[c] = parseFloat(t[u][r[c]]))), T++
                                    } catch (t) {}
                                    g[u] = 1 == s ? A : maxArray(O)
                            }
                            k
                        } else i[0].push(t[u][1]), h[u] = t[u][1], t[u][1]
                    }
                    var _ = new Array,
                        C = (c = 0, !1);
                    if ("bar" == e.chartType) {
                        if ("data" != r[0])
                            for (u = 0; u < r.length; u++) _[c] = {
                                type: "line",
                                label: r[u],
                                radius: e.pointRadius[u],
                                backgroundColor: e.pointColorIndex[u],
                                pointStyle: e.pointStyle[u],
                                borderDash: [e.pointBorderDash[u]],
                                borderColor: e.pointBorderColorIndex[u],
                                borderWidth: e.pointBorderWidth[u],
                                yAxisID: "y-axis-2",
                                fill: !1,
                                data: n[u]
                            }, C = !0, c++;
                        for (u = 0; u < l.length; u++) "data" != l[u] && (_[c] = {
                            type: "bar",
                            label: l[u],
                            backgroundColor: e.colorIndex[u],
                            borderColor: "#444",
                            borderWidth: 1,
                            data: i[u]
                        }, c++);
                        _[c] = {
                            type: "line",
                            label: "",
                            borderColor: "#fff",
                            backgroundColor: "transparent",
                            borderWidth: 0,
                            borderColor: "transparent",
                            fill: !1,
                            data: i[w]
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
                                display: C,
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
                            L = {
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
                    } else F = [], L = {
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
                            animation: L
                        },
                        P = "<canvas id='canvas-" + o + "' style='background:" + e.background + "'></canvas>",
                        D = document.getElementById("div_chart_" + o);
                    D.innerHTML = "", $("#div_" + o).show().css({
                        width: e.width + "px",
                        height: e.height + "px",
                        border: e.border
                    });
                    var H = "100%";
                    t.length > 50 && (H = "130%"), t.length > 100 && (H = "150%"), t.length > 150 && (H = "180%"), t.length > 200 && (H = "250%"), t.length > 250 && (H = "300%"), t.length > 300 && (H = "350%"), t.length > 350 && (H = "400%"), t.length > 400 && (H = "500%"), $("#div_chart_" + o).html(P).css({
                        width: H
                    });
                    var z = document.getElementById("canvas-" + o);
                    try {
                        var M = e.name;
                        null == M && (M = "");
                        var R = document.createElement("span");
                        R.innerText = M, R.style.fontSize = e.nameFontSize, D.appendChild(R), $("#div_" + o + " span").css({
                            position: "absolute",
                            left: e.width / 6 + "px",
                            top: 2 * -e.fontSize + "px",
                            fontSize: e.nameFontSize + "px",
                            textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                        })
                    } catch (t) {}
                    if ("bar" == e.chartType) new Chart(z, {
                        type: e.chartType,
                        options: N,
                        data: {
                            labels: p,
                            datasets: _
                        }
                    });
                    else new Chart(z, {
                        type: "horizontalBar",
                        options: N,
                        data: {
                            labels: p,
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
                        for (var u = 1, p = 0; p <= r.length + 1; p++) "data" != r[p] && (i[u] = new Array, u++);
                        if ("data" != c[0])
                            for (u = 0, p = 0; p <= c.length; p++) l[u] = new Array, u++
                    }
                    var h = new Array,
                        g = new Array,
                        m = new Array,
                        f = (new Array, "");
                    n = JSON.parse(n);
                    for (p = 0; p < n.length; p++) {
                        if (h[p] = n[p][0], "true" == e.showDay) {
                            var y = String(n[p][0]).split("-"),
                                b = "20" + y.slice(0, 1),
                                v = y.slice(1, 2),
                                x = y.slice(2, 3),
                                k = new Date(b + "/" + v + "/" + x);
                            if (0 == k.getDay()) f = "日";
                            if (1 == k.getDay()) f = "月";
                            if (2 == k.getDay()) f = "火";
                            if (3 == k.getDay()) f = "水";
                            if (4 == k.getDay()) f = "木";
                            if (5 == k.getDay()) f = "金";
                            if (6 == k.getDay()) f = "土";
                            h[p] = n[p][0] + " (" + f + ")"
                        }
                        if ("bar" == e.chartType) {
                            var S = 0,
                                w = [];
                            w[0] = 0;
                            var A = 0;
                            for (u = 1; u <= r.length; u++) try {
                                "data" != r[u] && (i[A].push(n[p][u]), 1 == s ? S += parseFloat(n[p][u]) : (w[u] = 0, parseFloat(n[p][u]) > 0 && "undefined" != n[p][u] && (w[u] = parseFloat(n[p][u]))), A++)
                            } catch (t) {}
                            if (i[A].push(S), g[p] = 1 == s ? S : maxArray(w), "data" != c[0]) {
                                var O = 0,
                                    T = [];
                                T[0] = 0;
                                var _ = 0;
                                for (u = 0; u < c.length; u++)
                                    if ("undefined" != n[p][c[u]] && null != n[p][c[u]]) try {
                                        l[_].push(n[p][c[u]]), 1 == s ? O += parseFloat(n[p][c[u]]) : (O[u] = 0, parseFloat(n[p][c[u]]) > 0 && (T[u] = parseFloat(n[p][c[u]]))), _++
                                    } catch (t) {}
                                    m[p] = 1 == s ? O : maxArray(T)
                            }
                            S
                        } else i[0].push(n[p][1]), g[p] = n[p][1], n[p][1]
                    }
                    var C = new Array,
                        I = (u = 0, !1);
                    if ("bar" == e.chartType) {
                        if ("data" != c[0])
                            for (p = 0; p < c.length; p++) C[u] = {
                                type: "line",
                                label: c[p],
                                radius: e.pointRadius[p],
                                backgroundColor: e.pointColorIndex[p],
                                pointStyle: e.pointStyle[p],
                                borderDash: [e.pointBorderDash[p]],
                                borderColor: e.pointBorderColorIndex[p],
                                borderWidth: e.pointBorderWidth[p],
                                yAxisID: "y-axis-2",
                                fill: !1,
                                data: l[p]
                            }, I = !0, u++;
                        for (p = 0; p < r.length; p++) "data" != r[p] && (C[u] = {
                            type: "bar",
                            label: r[p],
                            backgroundColor: e.colorIndex[p],
                            borderColor: "#444",
                            borderWidth: 1,
                            data: i[p]
                        }, u++);
                        C[u] = {
                            type: "line",
                            label: "",
                            borderColor: "#fff",
                            backgroundColor: "transparent",
                            borderWidth: 0,
                            borderColor: "transparent",
                            fill: !1,
                            data: i[A]
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
                                stacked: s,
                                ticks: {
                                    callback: function(t, e, i) {
                                        return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                    },
                                    beginAtZero: !0,
                                    max: maxArray(g) * F,
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
                                    min: -maxArray(m)
                                },
                                scaleLabel: {
                                    display: !0,
                                    labelString: e.label2String,
                                    fontSize: e.label2FontSize
                                }
                            }],
                            N = {
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
                                            (a - l.y) / a >= .93 && (o = l.y + 14), "bar" == e.type && r != u && (o += 20), n.length < 31 && t.fillText(pims().Comma(parseFloat(e.data[i])), l.x, o)
                                        }
                                        r++
                                    })
                                }
                            }
                    } else L = [], N = {
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
                    var P = {
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
                            legend: B,
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
                            animation: N
                        },
                        D = (t = "<canvas id='canvas-" + o + "' style='background:" + e.background + "'></canvas>", document.getElementById("div_chart_" + o));
                    D.innerHTML = "", $("#div_" + o).show().css({
                        width: e.width + "px",
                        height: e.height + "px",
                        border: e.border
                    });
                    var H = "100%";
                    n.length > 50 && (H = "130%"), n.length > 100 && (H = "150%"), n.length > 150 && (H = "180%"), n.length > 200 && (H = "250%"), n.length > 250 && (H = "300%"), n.length > 300 && (H = "350%"), n.length > 350 && (H = "400%"), n.length > 400 && (H = "500%"), $("#div_chart_" + o).html(t).css({
                        width: H
                    });
                    var z = document.getElementById("canvas-" + o);
                    try {
                        var M = e.name;
                        null == M && (M = "");
                        var R = document.createElement("span");
                        R.innerText = M, R.style.fontSize = e.nameFontSize, D.appendChild(R), $("#div_" + o + " span").css({
                            position: "absolute",
                            left: e.width / 6 + "px",
                            top: 2 * -e.fontSize + "px",
                            fontSize: e.nameFontSize + "px",
                            textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                        })
                    } catch (t) {}
                    if ("bar" == e.chartType) new Chart(z, {
                        type: e.chartType,
                        options: P,
                        data: {
                            labels: h,
                            datasets: C
                        }
                    });
                    else new Chart(z, {
                        type: "horizontalBar",
                        options: P,
                        data: {
                            labels: h,
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
            _potato_: function(t, e) {
                var i = this.getHTMLElement(),
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
            _bt_: function(t) {
                var e = this,
                    i = this.getHTMLElement(),
                    n = this.x,
                    l = this._p_(t),
                    a = (n.split("-"), l.id),
                    r = param.toggle;
                e.toggle[a] = "off";
                var o = [];
                if (String(l.field).split("@").slice(1, 2) == n) var s = String(l.field).split("@").slice(0, 1);
                if (String(l.fieldOther).split("@").slice(1, 2) == n) var d = String(l.fieldOther).split("@").slice(0, 1);
                if (String(l.params).split("@").slice(1, 2) == n) var c = String(l.params).split("@").slice(0, 1);
                if (String(l.where).split("@").slice(1, 2) == n) var u = String(l.where).split("@").slice(0, 1);
                i.createdCallback = function() {
                    if (this.id = a + "_", this.pims = n, "true" == l.disabled) var t = '<button disabled id="' + a + '" class="pimsButton"><table><tr>';
                    if ("false" == l.disabled) t = '<button id="' + a + '" class="pimsButton"><table><tr>';
                    "nil 0 0" != l.image ? (t += '<td><img id="img_' + a + '" src="' + String(l.image).split(" ").slice(0, 1) + '" style="width:' + String(l.image).split(" ").slice(1, 2) + "px;height:" + String(l.image).split(" ").slice(2, 3) + 'px"/></td>', t += '<td style="vertical-align:middle;text-align:center">' + l.value + "</td>") : t += '<td style="vertical-align:middle;text-align:center">' + l.value + "</td>", t += "</tr></table></button>", this.innerHTML = "<br>" + t, document.onmousedown = $O$X.prototype.doDown, document.onmouseup = $O$X.prototype.doUp, e._css_id(l, a), $("#" + a).css({
                        borderLeft: "1px solid buttonshadow",
                        borderRight: "2px solid black",
                        borderTop: "1px solid buttonshadow",
                        borderBottom: "2px solid black"
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
                        "null" != l.hoverBgColor && $(this).css("background", l.background), $(this).css("color", l.color), $("#" + l.hoverId).hide().html("")
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
                                i = n + ".php", p = [];
                                if (null != o && "null" != c)
                                    for (b = (String(c).match(/AND/g) || []).length, v = String(c).split("AND"), x = 0; x <= b; x++) {
                                        $ = String(v.slice(x, x + 1)).split(":"), k = new Function($.slice(1, 2));
                                        "null" != String($.slice(0, 1)).replace(/\s+/g, "") && (p[String($.slice(0, 1)).replace(/\s+/g, "")] = k())
                                    }
                                pimsData = [], $O$P.prototype._rp_(i, p, function(t) {
                                    POTATO.data = JSON.parse(t), l.callback()
                                })
                            }
                        } else {
                            POTATO.Query = 0, POTATO.Submit = 0;
                            var i = a + ".php",
                                p = [];
                            if (null != u && "null" != u) {
                                var h = $O$X.prototype.getIdClass(String(u));
                                try {
                                    this.index = h.getAttribute("index"), null == this.index && (this.index = 9999999)
                                } catch (t) {
                                    this.index = 9999999
                                }
                                try {
                                    this.field = h.getAttribute("field"), null == this.field && (this.field = 9999999)
                                } catch (t) {
                                    this.field = 9999999
                                }
                                for (var g = 0; g < h.length; g++) {
                                    var m = String(h[g].id).split("-").slice(2, 3);
                                    p[h[g].field] = pims(m).value()
                                }
                            }
                            var f = "",
                                y = "";
                            if (null != s && "null" != s) {
                                h = $O$X.prototype.getIdClass(String(s));
                                try {
                                    this.index = h.getAttribute("index"), null == this.index && (this.index = 9999999)
                                } catch (t) {
                                    this.index = 9999999
                                }
                                try {
                                    this.field = h.getAttribute("field"), null == this.field && (this.field = 9999999)
                                } catch (t) {
                                    this.field = 9999999
                                }
                                for (g = 0; g < h.length; g++) {
                                    m = String(h[g].id).split("-").slice(2, 3);
                                    g + 1 < h.length ? (f += String(h[g].field).replace(/\s+/g, "") + ",", y += "'" + pims(m).value() + "',") : (f += String(h[g].field).replace(/\s+/g, ""), y += "'" + pims(m).value() + "'")
                                }
                            }
                            if ("null" != d)
                                for (var b = (String(d).match(/AND/g) || []).length, v = String(d).split("AND"), x = 0; x <= b; x++) {
                                    var $ = String(v.slice(x, x + 1)).split(":"),
                                        k = new Function($.slice(1, 2));
                                    "null" != String($.slice(0, 1)).replace(/\s+/g, "") && (x < b ? 0 == x ? (f += "," + String($.slice(0, 1)).replace(/\s+/g, "") + ",", y += ",'" + k() + "',") : (f += String($.slice(0, 1)).replace(/\s+/g, "") + ",", y += "'" + k() + "',") : 0 == b ? (f += String($.slice(0, 1)).replace(/\s+/g, "") + ",", y += "'" + k() + "',") : (f += String($.slice(0, 1)).replace(/\s+/g, ""), y += "'" + k() + "'"))
                                }
                            if (p.fields = f, p.fieldsValue = y, "null" != c && null != o)
                                for (var b = (String(c).match(/AND/g) || []).length, v = String(c).split("AND"), x = 0; x <= b; x++) {
                                    var $ = String(v.slice(x, x + 1)).split(":"),
                                        k = new Function($.slice(1, 2));
                                    "null" != String($.slice(0, 1)).replace(/\s+/g, "") && (p[String($.slice(0, 1)).replace(/\s+/g, "")] = k())
                                }
                            POTATO.data = [], $O$P.prototype._rp_(i, p, function(t) {
                                POTATO.data = JSON.parse(t);
                                try {
                                    l.callback()
                                } catch (t) {}
                            })
                        }
                    }), "null" != l.float && $("#" + a + "_").css("float", l.float)
                }, this._p_e(n, i)
            },
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
                var e = this,
                    i = this.getHTMLElement(),
                    n = this.x,
                    l = this._p_(t);
                "potato.today()" == l.value && (l.value = e.today()), "potato.now()" == l.value && (l.value = e.now());
                var a = l.id;
                i.createdCallback = function() {
                    this.id = a + "_", $O$X.prototype.getAttribute(this, n).index, $O$X.prototype.getAttribute(this, n).field, this.pims = n, "false" == l.disabled && (this.innerHTML = '<br><input type="text" id="' + a + '"> '), "true" != l.disabled && "" != l.disabled || (this.innerHTML = '<br><input disabled type="text" id="' + a + '"> '), e._css_id(l, a), "null" != l.float && $("#" + a + "_").css("float", l.float), $("#" + a).attr("value", l.value).mousemove(function() {
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
                        c.setAttribute("id", "note-doughnut-" + o), s.appendChild(c), $("#note-doughnut-" + o).css({
                            fontSize: e.fontSize + "px",
                            position: "relative",
                            left: e.width / 10 + "px",
                            width: .8 * e.width + "px",
                            padding: "5px 5px 5px 5px",
                            textAlign: "center"
                        });
                        var u = document.createElement("img");
                        u.setAttribute("id", "img-doughnut-" + o), u.setAttribute("onerror", "this.style.display='none'"), s.appendChild(u), $("#img-doughnut-" + o).css({
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
                        if ($("#note-doughnut-" + o).show().html(p).css("border", "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var h = String(i[0][0]).split("-"),
                            g = e.imageDir + h[0] + "-" + String(h[1]).substring(0, 1) + ".jpg";
                        else g = e.imageDir + i[0][0] + ".jpg";
                        document.getElementById("img-doughnut-" + o).src = g, document.getElementById("img-doughnut-" + o).style.border = "5px solid " + i[2][0]
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
                                            a = l.data[n]._model,
                                            r = l.total,
                                            o = a.innerRadius + (a.outerRadius - a.innerRadius) / 2,
                                            s = a.startAngle,
                                            d = s + (a.endAngle - s) / 2,
                                            c = o * Math.cos(d),
                                            u = o * Math.sin(d);
                                        i.fillStyle = "#000";
                                        var p = String(Math.round(e.data[n] / r * 100)) + "%";
                                        if (n < e.data.length - 1) {
                                            var h = a.x + c + 70;
                                            u > 0 && c < 0 && (h = a.x + c - 50), i.fillText(t[n][0] + ": " + t[n][1] + ", " + p, h, a.y + u + 8)
                                        }
                                    }
                                    p = String(Math.round(e.data[e.data.length - 1] / r * 100)) + "%";
                                    i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + p, a.x + c, a.y + 2 * u)
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
                                        if ($("#note-doughnut-" + o).show().html(i).css("border", "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var n = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                            l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                        else l = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                        document.getElementById("img-doughnut-" + o).src = l, document.getElementById("img-doughnut-" + o).style.display = "block", document.getElementById("img-doughnut-" + o).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                    }
                                } else if ("null" != e.imageDir) {
                                    i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                    if ($("#note-doughnut-" + o).show().html(i).css("border", "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) n = String(this._data.labels[e.targetIndex]).split("-"), l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
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
                var i = paramE.width,
                    n = paramE.indexCol,
                    l = paramE.tool,
                    a = paramE.trigger,
                    r = paramE.top,
                    o = paramE.left;
                e.id;
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
                            u = this;
                        try {
                            u.firstChild.value
                        } catch (t) {
                            u.innerText = " "
                        }
                        if ($O$T = this, "INPUT" == u.firstChild.nodeName) {
                            potato.edit = "off";
                            u = this;
                            var p = document.createTextNode(u.firstChild.value);
                            u.replaceChild(p, u.firstChild), c = 1, $("#keypadtable").hide(), potato.trigger = 0, $O$P.nodevalue = u.firstChild.nodeValue, e.callback(u.firstChild.nodeValue, potato.oldValue, t.rows[potato.ri].cells[n].innerText, potato.ci)
                        }
                        if (1 != c && "INPUT" != u.firstChild.nodeName && "IMG" != u.firstChild.nodeName) {
                            potato.edit = "on";
                            var h = document.createElement("input");
                            if (h.select(), h.value = t.rows[potato.ri].cells[potato.ci].innerText, h.setAttribute("autocomplete", "off"), h.style.width = i, h.style.height = "25px", h.style.fontSize = "15px", h.style.fontWeight = "bold", h.style.background = "rgb(255,244,255)", "undefined" != u.firstChild.nodeValue && (u.replaceChild(h, u.firstChild), u.firstChild.select(), u.firstChild.focus()), "undefined" != l) {
                                var g = document.createElement("div");
                                if (g.innerHTML = '<div id="keypadtable" class="keypad"></div>', document.body.appendChild(g), $(".keypad").hide(), keyID = "keypadtable", -1 != String(l).indexOf(".htm")) $("#keypadtable").load(l);
                                else if ("default" == l) {
                                    var m = "height:60px;width:80px;font-size:27px;background:#CED8F6;cursor: pointer;";
                                    m += "border-radius:10px;border:1px solid black;", css_c = "width:170px;";
                                    var f = "<table>";
                                    f += "<tr>", f += "<td><input type='button' style='" + m + "' value='7' onclick='potato.getKey(\"7\")'></td>", f += "<td><input type='button' style='" + m + "' value='8' onclick='potato.getKey(\"8\")'></td>", f += "<td><input type='button' style='" + m + "' value='9' onclick='potato.getKey(\"9\")'></td>", f += "</tr>", f += "<tr>", f += "<td><input type='button' style='" + m + "' value='4' onclick='potato.getKey(\"4\")'></td>", f += "<td><input type='button' style='" + m + "' value='5' onclick='potato.getKey(\"5\")'></td>", f += "<td><input type='button' style='" + m + "' value='6' onclick='potato.getKey(\"6\")'></td>", f += "</tr>", f += "<tr>", f += "<td><input type='button' style='" + m + "' value='1' onclick='potato.getKey(\"1\")'></td>", f += "<td><input type='button' style='" + m + "' value='2' onclick='potato.getKey(\"2\")'></td>", f += "<td><input type='button' style='" + m + "' value='3' onclick='potato.getKey(\"3\")'></td>", f += "</tr>", f += "<tr>", f += "<td><input type='button' style='" + m + "background:#F6CECE;' value='CE' onclick='potato.getKey(\"CE\")'></td>", f += "<td><input type='button' style='" + m + "' value='0' onclick='potato.getKey(\"0\")'></td>", f += "<td><input type='button' style='" + m + "' value='.' onclick='potato.getKey(\".\")'></td>", f += "</tr>", f += "<tr>", f += "<td colspan=2><input type='button' style='" + m + css_c + "background:#D8D8D8;' value='CLOSE' onclick='potato.closeEditCell()'/></td>", f += "<td><input type='button' style='" + m + "background:#CEF6CE;' value='⇦' onclick='potato.getKey(\"<-\")'></td>", f += "</tr>", f += "</table>", $("#keypadtable").html(f)
                                } else $("#keypadtable").html(l);
                                var y = document.documentElement,
                                    b = (window.pageXOffset || y.scrollLeft) - (y.clientLeft || 0),
                                    v = (window.pageYOffset || y.scrollTop) - (y.clientTop || 0),
                                    x = parseFloat(event.clientY) + 20 + parseFloat(v),
                                    k = parseFloat(event.clientX) - parseFloat(b);
                                null != r && (x = parseFloat(event.clientY) + 20 + parseFloat(r) + parseFloat(v)) > 300 && (x = event.clientY - 220), null != o && (k = parseFloat(event.clientX) + parseFloat(o) - parseFloat(b)) > 900 && (k = event.clientX - 100), $("#keypadtable").css({
                                    width: "200px",
                                    height: "150px",
                                    margin: e.marginKey,
                                    display: "block",
                                    position: "absolute",
                                    top: x + "px",
                                    left: k + "px",
                                    zIndex: 2e3
                                })
                            }
                            $O$U = h
                        }
                    }
                }
                $("#" + e.id + " td").click(function() {
                    if (potato.ci = $(this).parent().children().index(this), potato.ri = $(this).parent().parent().children().index(this.parentNode), 1 != potato.trigger) {
                        var t = document.getElementById(e.id);
                        potato.oldValue = t.rows[potato.ri].cells[potato.ci].innerText, potato.trigger = 1
                    }
                });
                for (var c = document.getElementById(e.id).getElementsByTagName("td"), u = 0; u < c.length; u++) c[u].onkeyup = function(t) {}, "dblclick" == a ? c[u].ondblclick = d : "click" == a ? c[u].onclick = d : c[u].ondblclick = d, c[u].onmousemove = function() {}
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
                                }), $O$U = o
                            }
                        }
                    } catch (t) {}
                }
                l = e.targetCol;
                for (var r = document.getElementById(i), o = r.getElementsByTagName("td"), s = 0; s < o.length; s++) o[s].onkeyup = function(t) {}, "dblclick" == e.trigger ? o[s].ondblclick = a : "click" == e.trigger ? o[s].onclick = a : o[s].ondblclick = a, o[s].onmousemove = function() {}
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
                return t = t == $O$I.settings.tabName1 ? 1 : t == $O$I.settings.tabName2 ? 1 : -1
            },
            Keyboard: function(t) {
                var e = this.getHTMLElement(),
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
                        }), $O$B = document.getElementById(i)
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
                            a = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                            r = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                        $("#keypad-" + l).css({
                            position: "absolute",
                            top: parseFloat(event.clientY) + 20 + parseFloat(n.topKey) + parseFloat(r) + "px",
                            left: parseFloat(event.clientX) + parseFloat(n.leftKey) - parseFloat(a) + "px"
                        }), $O$B = document.getElementById(l);
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
                        }), $O$U = document.getElementById(i)
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
                var e = this,
                    i = this.getHTMLElement(),
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
                    }), e._css_id(n, l), $("#" + l).attr("value", n.value).mousemove(function() {
                        "null" != n.hoverBgColor && "false" != n.hoverBgColor && ($(this).css("background", n.hoverBgColor), $(this).css("color", n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: "1px solid black",
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        }))
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && "false" != n.hoverBgColor && $(this).css("background", n.background), $(this).css("color", n.i), $("#" + n.hoverId).hide().html("")
                    }).click(function() {
                        if ($(".keypad").hide(), null != o) - 1 != o.indexOf("htm") || -1 != o.indexOf("html") ? $("#keypad-" + l).load(o) : $("#keypad-" + l).html(o);
                        else {
                            var t = "height:60px;width:80px;font-size:27px;background:#CED8F6;cursor: pointer;";
                            t += "border-radius:10px;border:1px solid black;", css_c = "width:170px;", o = "<table>", o += "<tr>", o += "<td><input type='button' style='" + t + "' value='7' onclick='potato.getKey(\"7\")'></td>", o += "<td><input type='button' style='" + t + "' value='8' onclick='potato.getKey(\"8\")'></td>", o += "<td><input type='button' style='" + t + "' value='9' onclick='potato.getKey(\"9\")'></td>", o += "</tr>", o += "<tr>", o += "<td><input type='button' style='" + t + "' value='4' onclick='potato.getKey(\"4\")'></td>", o += "<td><input type='button' style='" + t + "' value='5' onclick='potato.getKey(\"5\")'></td>", o += "<td><input type='button' style='" + t + "' value='6' onclick='potato.getKey(\"6\")'></td>", o += "</tr>", o += "<tr>", o += "<td><input type='button' style='" + t + "' value='1' onclick='potato.getKey(\"1\")'></td>", o += "<td><input type='button' style='" + t + "' value='2' onclick='potato.getKey(\"2\")'></td>", o += "<td><input type='button' style='" + t + "' value='3' onclick='potato.getKey(\"3\")'></td>", o += "</tr>", o += "<tr>", o += "<td><input type='button' style='" + t + "background:#F6CECE;' value='CE' onclick='potato.getKey(\"CE\")'></td>", o += "<td><input type='button' style='" + t + "' value='0' onclick='potato.getKey(\"0\")'></td>", o += "<td><input type='button' style='" + t + "' value='.' onclick='potato.getKey(\".\")'></td>", o += "</tr>", o += "<tr>", o += "<td colspan=2><input type='button' style='" + t + css_c + "background:#D8D8D8;' value='CLOSE' onclick='potato.closePad()'/></td>", o += "<td><input type='button' style='" + t + "background:#CEF6CE;' value='⇦' onclick='potato.getKey(\"<-\")'></td>", o += "</tr>", o += "</table>", $("#keypad-" + l).html(o)
                        }
                        try {
                            for (var e = document.getElementsByClassName("pims-list"), i = 0; i < e.length; i++) e[i].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + l, $(".keypad").hide(), $("#keypad-" + l).show(), $("#KeyPad").show();
                        var a = document.documentElement,
                            r = (window.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
                            s = (window.pageYOffset || a.scrollTop) - (a.clientTop || 0),
                            d = parseFloat(event.clientY) + 20 + parseFloat(n.top) + parseFloat(s),
                            c = parseFloat(event.clientX) + parseFloat(n.left) - parseFloat(r);
                        $("#keypad-" + l).css({
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
                    }), $("#keypad-" + l).click(function() {
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
            List: function(t) {
                var i = this.getHTMLElement(),
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
                            $("#pims-list-" + l).css("display", "block"), $O$P.prototype._rp_(r.model, r, function(t) {
                                var r = JSON.parse(t),
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
                                var u = i.clientX - a.width / 2 + "px";
                                0 != a.left && (u = a.left + 5 + "px"), pimsListObject = document.getElementById("pims-list-" + l), $("#pims-list-" + l).html(o).show().css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: u,
                                    top: c,
                                    height: a.heightTable + "px",
                                    width: a.widthTable + "px",
                                    overflow: "auto",
                                    border: "0px solid black",
                                    borderRadius: 0,
                                    background: "transparent"
                                }), $("#potato-list-table-" + l + " td").css({
                                    fontFamily: a.fontFamily,
                                    fontWeight: a.fontWeight,
                                    fontSize: a.fontSize + "px"
                                }).click(function() {
                                    var t = document.getElementById("potato-list-table-" + l),
                                        e = $(this).parent().parent().children().index(this.parentNode);
                                    "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(l).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    });
                                    try {
                                        a.click(t.rows[e])
                                    } catch (t) {}
                                    document.getElementById("pims-list-" + l).style.height = "0px"
                                }), $("#potato-list-table-" + l + " th").css("cursor", "pointer").click(function() {
                                    var t = document.getElementById("potato-list-table-" + l),
                                        e = $(this).parent().parent().children().index(this.parentNode);
                                    "閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText ? pims(l).value(t.rows[e].cells[0].innerText) : $(".pims-list").css({
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
            _lt_: function(t) {
                var i = this,
                    l = this.getHTMLElement(),
                    a = this.x,
                    r = this._p_(t),
                    o = r.id,
                    s = param.ngmodel;
                "potato.today()" == r.value && (r.value = i.today()), "potato.now()" == r.value && (r.value = i.now()), l.createdCallback = function() {
                    if (this.id = o + "_", $O$X.prototype.getAttribute(this, o).index, $O$X.prototype.getAttribute(this, o).field, this.pims = o, "none" == r.display ? this.innerHTML = null == s ? '<input type="text" id="' + o + '" class="' + r.className + '"> ' : '<input ng-model="' + s + '" type="text" id="' + o + '" class="' + r.className + '"> ' : this.innerHTML = null == s ? '<br><input type="text" id="' + o + '"  class="' + r.className + '" > ' : '<br><input ng-model="' + s + '" type="text" id="' + o + '"  class="' + r.className + '" > ', this.innerHTML += '<div id="div-' + o + '" onscroll="pims(\'div-' + o + "').scrolly('locked_top',0,0)\" class=\"pims-list\"> ", i._css_id(r, o), $("#" + o).attr({
                            value: r.value,
                            type: r.type
                        }).mousemove(function() {
                            "null" != r.hoverBgColor && $(this).css("background", r.hoverBgColor), $(this).css("color", r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                                fontSize: "15px",
                                fontFamily: "Arial",
                                padding: "3px 3px 3px 3px",
                                height: r.hoverHeight,
                                width: r.hoverWidth,
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
                    if (String(r.listLeft).split("_").slice(1, 2) == a) var u = String(r.listLeft).split("_").slice(0, 1);
                    if (String(r.params).split("@").slice(1, 2) == a) var p = String(r.params).split("@").slice(0, 1);
                    if (String(r.where).split("@").slice(1, 2) == a) var h = String(r.where).split("@").slice(0, 1);
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
                            g = p;
                        if ("block" != document.getElementById("div-" + o).style.display && $(".pims-list").css({
                                display: "none",
                                height: "0px"
                            }), document.getElementById("div-" + o).style.height == s.listHeight) document.getElementById("div-" + o).style.height = "0px";
                        else {
                            try {
                                pimsListObject.style.display = "none"
                            } catch (t) {}
                            $("#div-" + o).css("display", "block");
                            var m = s.model,
                                f = [];
                            if (null != h) {
                                var y = $O$X.prototype.getIdClass(String(h));
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
                                for (var b = 0; b < y.length; b++) {
                                    var v = String(y[b].id).split("-").slice(2, 3);
                                    f[y[b].field] = pims(v).value()
                                }
                            }
                            if (null != g && "null" != p)
                                for (var x = (String(p).match(/AND/g) || []).length, k = String(p).split("AND"), S = 0; S <= x; S++) {
                                    var w = String(k.slice(S, S + 1)).split(":"),
                                        A = new Function(w.slice(1, 2));
                                    "null" != String(w.slice(0, 1)).replace(/\s+/g, "") && (f[String(w.slice(0, 1)).replace(/\s+/g, "")] = A())
                                }
                            if (-1 != String(T).indexOf(".php") && (m = document.getElementsByTagName(a)[0].getAttribute("data")), null != m) $O$P.prototype._rp_(m, f, function(t) {
                                var i = JSON.parse(t),
                                    r = "<table class='potato-list-table' id='list-" + o + "' >",
                                    p = 0;
                                for (e in r += "<tr>", i[0]) "" != i[0][e] ? r += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + i[0][e] + "</th>" : r += "<th style='display:none'>" + i[0][e] + "</th>", p++;
                                for (n in r += "</tr>", i)
                                    if ("undefined" != i[n][0] && null != i[n][0] && n > 0) {
                                        r += "<tr>";
                                        for (var h = 0; h < p; h++) "" != i[0][h] ? r += "<td>" + i[n][h] + "</td>" : r += "<td style='display:none'>" + i[n][h] + "</td>";
                                        r += "</tr>"
                                    }
                                r += "</table>", document.getElementById("div-" + o).style.height = "0px";
                                var g = String(c).split("px"),
                                    m = String(u).split("px");
                                pimsListObject = document.getElementById("div-" + o), $("#div-" + o).html(r).css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: events.clientLeft + parseFloat(m.slice(0, 1)) + "px",
                                    top: events.clientTop + parseFloat(g.slice(0, 1)) + "px",
                                    height: d,
                                    width: l,
                                    overflow: "auto",
                                    border: "0px solid black",
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
                                    if ("閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText) {
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
                                }), $("#list-" + o + " th").css("cursor", "pointer").click(function() {
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
                                var O = i.getAttr(a, "header"),
                                    T = i.getAttr(a, "data"),
                                    _ = i.getAttr(a, "listTextAlign");
                                null == _ && (_ = "center");
                                var C = i.getAttr(a, "listFontSizeTH");
                                null == C && (C = "18px");
                                var I = i.getAttr(a, "listFontSizeTD");
                                null == I && (I = "18px");
                                var E = i.getAttr(a, "listFontFamilyTD");
                                null == E && (E = "Tempus Sans ITC");
                                var B = i.getAttr(a, "listFontFamilyTH");
                                null == B && (B = "Tempus Sans ITC");
                                var F = i.getAttr(a, "listFontColorTH");
                                null == F && (F = "Black");
                                var L = i.getAttr(a, "listFontColorTD");
                                null == L && (L = "Black");
                                var N = i.getAttr(a, "listFontWeightTD");
                                null == N && (N = "normal");
                                var P = i.getAttr(a, "listFontWeightTH");
                                null == P && (P = "normal");
                                b = JSON.parse(T);
                                var D = "<table class='potato-list-table' id='list-" + o + "' >",
                                    H = 0;
                                if (null == O) {
                                    for (e in D += "<tr>", b[0]) "" != b[0][e] ? D += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + b[0][e] + "</th>" : D += "<th style='display:none'>" + b[0][e] + "</th>", H++;
                                    for (n in D += "</tr>", b)
                                        if ("undefined" != b[n][0] && null != b[n][0] && n > 0) {
                                            D += "<tr>";
                                            for (var z = 0; z < H; z++) "" != b[0][z] ? D += "<td style='text-align:" + _ + "'>" + b[n][z] + "</td>" : D += "<td style='display:none'>" + b[n][z] + "</td>";
                                            D += "</tr>"
                                        }
                                } else {
                                    O = String(O).split(",");
                                    for (e in D += "<tr>", O) "-" != O[e] ? D += "<th style='border:1px solid black;font-size:" + C + ";color:" + F + ";text-align:" + _ + ";font-weight:" + P + ";font-family:" + B + "'>" + O[e] + "</th>" : D += "<th style='display:none'>" + O[e] + "</th>", H++;
                                    for (n in D += "</tr>", b)
                                        if ("undefined" != b[n][0] && null != b[n][0] && n >= 0) {
                                            D += "<tr>";
                                            for (z = 0; z < H; z++) "-" != O[z] ? D += "<td style='font-size:" + I + ";color:" + L + ";text-align:" + _ + ";font-weight:" + N + ";font-family:" + E + "'>" + b[n][z] + "</td>" : D += "<td style='display:none'>" + b[n][z] + "</td>";
                                            D += "</tr>"
                                        }
                                }
                                D += "</table>", document.getElementById("div-" + o).style.height = "0px";
                                var M = String(c).split("px"),
                                    R = String(u).split("px");
                                pimsListObject = document.getElementById("div-" + o), $("#div-" + o).html(D).css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: events.clientLeft + parseFloat(R.slice(0, 1)) + "px",
                                    top: events.clientTop + parseFloat(M.slice(0, 1)) + "px",
                                    height: d,
                                    width: l,
                                    overflow: "auto",
                                    border: "0px solid black",
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
                                    if ("閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText) {
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
                                }), $("#list-" + o + " th").css("cursor", "pointer").click(function() {
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
                        0 == --l && (clearInterval(a), $("body").css("background", e), i(), $(String.fromCharCode(35, 80, 73, 77, 83)).html("").hide(), $("#body").show())
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
            _m_: function(t) {
                var i = this.getHTMLElement(),
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
                        "null" != a.hoverBgColor && $(this).css("background", a.hoverBgColor), $(this).css("color", a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: a.hoverHeight,
                            width: a.hoverWidth,
                            background: "#ffffe5",
                            border: "1px solid black",
                            position: "absolute",
                            top: event.clientY + 30 + "px",
                            left: event.clientX - 20 + "px",
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != a.hoverBgColor && $(this).css("background", a.background), $(this).css("color", a.i), $("#" + a.hoverId).hide().html("")
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
                    if (String(a.marginTop).split("_").slice(1, 2) == l) var u = String(a.marginTop).split("_").slice(0, 1);
                    if (String(a.marginLeft).split("_").slice(1, 2) == l) var p = String(a.marginLeft).split("_").slice(0, 1);
                    if (String(a.params).split("@").slice(1, 2) == l) var h = String(a.params).split("@").slice(0, 1);
                    if (String(a.where).split("@").slice(1, 2) == l) var g = String(a.where).split("@").slice(0, 1);
                    $("." + r).mouseenter(function(i) {
                        $O$Menu = 1;
                        var a = $O$P.prototype._p_(t),
                            o = h;
                        if ("block" != document.getElementById("div-" + r).style.display && $(".pims-list").css({
                                display: "none",
                                height: "0px"
                            }), document.getElementById("div-" + r).style.height == a.heightTable + "px") document.getElementById("div-" + r).style.height = "0px";
                        else {
                            $("#div-" + r).css("marginTop", "-2px");
                            var s = this.name,
                                m = [];
                            if (null != g) {
                                var f = $O$X.prototype.getIdClass(String(g));
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
                            if (null != o && "null" != h)
                                for (var v = (String(h).match(/AND/g) || []).length, x = String(h).split("AND"), k = 0; k <= v; k++) {
                                    var S = String(x.slice(k, k + 1)).split(":"),
                                        w = new Function(S.slice(1, 2));
                                    "null" != String(S.slice(0, 1)).replace(/\s+/g, "") && (m[String(S.slice(0, 1)).replace(/\s+/g, "")] = w())
                                }
                            $O$P.prototype._rp_(s, m, function(t) {
                                var i = JSON.parse(t);
                                check_model = 1;
                                var o = "<table class='potato-menu-table' id='" + r + "' >",
                                    s = 0;
                                for (e in o += "<tr>", i[0]) "" != i[0][e] ? o += "<th>" + i[0][e] + "</th>" : o += "<th style='display:none'>" + i[0][e] + "</th>", s++;
                                for (n in o += "</tr>", i)
                                    if ("undefined" != i[n][0] && null != i[n][0] && n > 0) {
                                        o += "<tr>";
                                        for (var h = 0; h < s; h++) "" != i[0][h] ? o += "<td>" + i[n][h] + "</td>" : o += "<td style='display:none'>" + i[n][h] + "</td>";
                                        o += "</tr>"
                                    }
                                o += "</table>", document.getElementById("div-" + r).style.height = "0px";
                                var g = parseFloat(u) + "px",
                                    m = parseFloat(p) + "px";
                                pimsListObject = document.getElementById("div-" + r), document.getElementById("div-" + r).style.display = "block", $("#div-" + r).html(o).css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: m,
                                    top: g,
                                    height: c + "px",
                                    width: d + "px",
                                    overflow: "auto",
                                    border: "0px solid black",
                                    borderRadius: 0,
                                    display: a.display,
                                    background: "transparent",
                                    zIndex: 1e4
                                }), $("#" + r + " td").css({
                                    textAlign: "left",
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
                                }), $("#" + r + " th").css("cursor", "pointer").click(function() {
                                    $("#div-" + r).css("display", "none")
                                });
                                try {
                                    a.callback(l)
                                } catch (t) {}
                            })
                        }
                    }), $("." + r).mouseleave(function(t) {
                        $O$Menu = 0
                    }), $(document).mouseover(function(t) {
                        0 == $O$Menu && $("#div-" + r).css("display", "none")
                    })
                }, this._p_e(l, i)
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
                for (var u = 1; u < o.rows.length; u++) o.rows[u].onclick = function() {
                    var t = "-";
                    try {
                        t = o.rows[p].cells[i.matchCol].innerText
                    } catch (t) {}
                    if (!("-" != i.matchCol && t != i.matchValue || e != l && "any" != l)) {
                        var u = l,
                            p = n;
                        "any" == u && (u = 0), "any" == p && (p = e, u = e);
                        var h = o.rows[this.rowIndex];
                        if (-1 == String(h.cells[u].innerHTML).indexOf(a)) d[c] = h.cells[p].innerText, c++, h.cells[u].innerHTML = '<font style="font-weight:bold;color:red;background:yellow">' + a + "</font>" + h.cells[u].innerHTML;
                        else {
                            var g = String(h.cells[u].innerHTML).split(a);
                            h.cells[u].innerHTML = g.slice(1, 2);
                            for (var m = 0; m < d.length; m++) d[m] == h.cells[p].innerText && (d[m] = "")
                        }
                        s = [];
                        var f = 0;
                        for (m = 0; m < d.length; m++)
                            if ("" != d[m] && "undefined" != d[m]) {
                                for (var y = 0, b = 0; b < s.length; b++) s[b] == d[m] && (y = 1);
                                0 == y && (s[f] = d[m], f++)
                            }
                        i.callback(s, r)
                    }
                }
            },
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
            obj: function(t) {
                t = String(t).toLowerCase();
                return document.getElementById(t)
            },
            optionText: function() {
                return document.getElementById(this.x).options[document.getElementById(this.x).selectedIndex].text
            },
            _p_: function(t) {
                var e, i, n, l, a, r, o, s, d, c, u, p, h, g, m, f, y, b, v, x, $, k, S, w, A, O, T, _, C, I, E, B, F, L, N, P, D, H, z, M, R, X, W, K, j, V, U, Y, q, J, G, Q, Z, tt, et, it, nt, lt, at, rt, ot, st, dt, ct, ut, pt, ht, gt, mt, ft, yt, bt, vt, xt, $t, kt, St, wt, At, Ot, Tt, _t, Ct, It, Et, Bt, Ft, Lt, Nt, Pt, Dt, Ht, zt, Mt, Rt, Xt, Wt, Kt, jt, Vt, Ut, Yt, qt, Jt, Gt, Qt, Zt, te, ee, ie, ne, le, ae, re, oe, se, de, ce, ue, pe, he = new Array;
                return this.clearArrays(), t(), null == (qt = css.textTransform) && (qt = "none"), e = css.background, i = css.border, n = css.borderRadius, l = css.boxShadow, null == (a = events.callback) && (a = this.dummy()), null == (r = attr.canvas) && (r = "chart"), null == (o = param.cell) && (o = "0"), null == (d = attr.chartType) && (d = "pie"), null == (c = attr.chartId) && (c = "chart1Id"), null == (g = param.col) && (g = 1e3), null == (f = css.colorIndex) && (f = ["#c5ffb3"]), null == (s = events.change) && (s = this.dummy()), null == (u = attr.className) && (u = "pimsClassName"), null == (p = events.click) && (p = this.dummy()), null == (h = attr.cls) && (h = ""), null == (y = attr.container) && (y = "container"), m = css.color, null == (b = css.cursor) && (b = "default"), null == (v = css.dataFontSize) && (v = 12), null == (x = attr.dataLabel) && (x = "data"), null == ($ = attr.dataLabel2) && ($ = "data"), null == (k = attr.disabled) && (k = !1), S = css.display, null == (w = css.displayKey) && (w = "none"), null == (A = param.editWidth) && (A = 100), null == (O = param.fieldClass) && (O = 0), P = css.float, T = css.fontColorTD, _ = css.fontColorTH, C = css.fontFamily, I = css.fontFamilyTD, E = css.fontFamilyTH, B = css.fontSize, F = css.fontSizeTD, L = css.fontSizeTH, D = css.fontWeight, null == (N = attr.format) && (N = "yy-mm-dd"), null == (H = param.header) && (H = "0"), z = css.height, null == (M = css.heightTable) && (M = 450), null == (R = events.hover) && (R = this.dummy()), X = css.hoverColor, null == (W = css.hoverBgColor) && (W = "null"), K = attr.hoverId, null == (j = attr.hoverText) && (j = ""), null == (U = css.hoverHeight) && (U = 30), null == (V = css.hoverWidth) && (V = ""), null == (Y = param.htm) && (Y = "config/keypad.htm"), q = attr.id, null == (J = param.idCol) && (J = 0), image = attr.image, null == image && (image = "nil 0 0"), G = attr.imageDir, null == (Q = css.imgWidth) && (Q = 45), null == (Z = css.imgHeight) && (Z = 45), null == (tt = events.keyup) && (tt = this.dummy()), null == (nt = css.labelFontSize) && (nt = 12), null == (lt = css.label2FontSize) && (lt = 12), null == (et = attr.labelString) && (et = ""), null == (it = attr.label2String) && (it = ""), ot = css.left, null == (st = css.leftKey) && (st = 0), null == (at = css.legendDisplay) && (at = !1), null == (rt = css.legendPosition) && (rt = "bottom"), null == (dt = events.listClick) && (dt = this.dummy()), ct = css.listHeight, ut = css.listLeft, ht = css.listWidth, pt = css.listTop, gt = css.margin, mt = css.marginBottom, wt = css.marginLeft, ft = css.marginRight, At = css.marginTop, null == (vt = param.markSymbol) && (vt = ""), null == (yt = param.matchCol) && (yt = "-"), null == (bt = param.matchValue) && (bt = "-"), null == (St = css.marginKey) && (St = "0px 0px 0px 0px"), null == (xt = param.menuModel) && (xt = "null"), null == ($t = param.menuTitle) && ($t = "null"), Ot = param.model, null == (kt = attr.multiple) && (kt = !1), Tt = attr.name, null == (_t = attr.onscroll) && (_t = this.dummy()), Ct = css.padding, css.paddingBottom, It = css.paddingLeft, css.paddingRight, Et = css.paddingTop, null == (Bt = css.pointBorderColorIndex) && (Bt = ["#000000"]), null == (Ft = css.pointBorderDash) && (Ft = [0]), null == (Lt = css.pointBorderWidth) && (Lt = [1]), null == (Nt = css.pointColorIndex) && (Nt = ["#c5ffb3"]), null == (Pt = css.pointRadius) && (Pt = ["5"]), null == (Dt = css.pointStyle) && (Dt = ["triangle"]), Ht = css.position, null == (zt = param.row) && (zt = "0"), null == (Mt = param.selectCol) && (Mt = ""), null == (Rt = param.selectColumn) && (Rt = ""), null == (Xt = css.showDay) && (Xt = !1), null == (Wt = attr.stacked) && (Wt = !1), null == (Kt = attr.tableId) && (Kt = "tableId"), null == (Vt = param.targetId) && (Vt = 0), null == (Ut = attr.targetIndex) && (Ut = 0), null == (jt = param.targetColumn) && (jt = ""), null == (he = param.targetCol) && (he = ""), null == (Yt = attr.targetColor) && (Yt = "WHITE"), Jt = css.textAlign, null == (Gt = attr.title) && (Gt = ""), null == (Qt = css.titleFontSize) && (Qt = 25), null == (Zt = attr.tooltips) && (Zt = !0), te = css.top, null == (ee = css.topKey) && (ee = 0), null == (ie = events.trigger) && (ie = "ondblclick"), null == (ne = attr.type) && (ne = "text"), null == (le = attr.value) && (le = ""), null == (oe = param.whereClass) && (oe = 0), ae = css.width, null == (re = css.widthTable) && (re = 130), null == (se = css.xAxesFontSize) && (se = 12), null == (de = css.xlabelAngle) && (de = 0), null == (ce = css.yAxesFontSize) && (ce = 12), null == (ue = css.y2AxesFontSize) && (ue = 12), null == (pe = attr.y2AxesType) && (pe = ""), {
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
                    dataLabel2: $,
                    disabled: k,
                    display: S,
                    displayKey: w,
                    editWidth: A,
                    field: field,
                    fieldClass: O,
                    fieldOther: fieldOther,
                    float: P,
                    fontColorTD: T,
                    fontColorTH: _,
                    fontFamilyTD: I,
                    fontFamilyTH: E,
                    fontFamily: C,
                    fontSize: B,
                    fontSizeTD: F,
                    fontSizeTH: L,
                    fontWeight: D,
                    format: N,
                    header: H,
                    height: z,
                    heightTable: M,
                    hover: R,
                    hoverBgColor: W,
                    hoverColor: X,
                    hoverHeight: U,
                    hoverId: K,
                    hoverText: j,
                    hoverWidth: V,
                    htm: Y,
                    id: q,
                    idCol: J,
                    image: image,
                    imageDir: G,
                    imgHeight: Z,
                    imgWidth: Q,
                    keyup: tt,
                    labelString: et,
                    label2String: it,
                    labelFontSize: nt,
                    label2FontSize: lt,
                    left: ot,
                    leftKey: st,
                    legendDisplay: at,
                    legendPosition: rt,
                    listClick: dt,
                    listHeight: ct,
                    listLeft: ut,
                    listWidth: ht,
                    listTop: pt,
                    marginKey: St,
                    markSymbol: vt,
                    margin: gt,
                    marginBottom: mt,
                    marginLeft: wt,
                    marginRight: ft,
                    marginTop: At,
                    matchCol: yt,
                    matchValue: bt,
                    menuModel: xt,
                    menuTitle: $t,
                    model: Ot,
                    multiple: kt,
                    name: Tt,
                    onscroll: _t,
                    padding: Ct,
                    paddingLeft: It,
                    paddingTop: Et,
                    params: params,
                    pointBorderColorIndex: Bt,
                    pointBorderDash: Ft,
                    pointBorderWidth: Lt,
                    pointColorIndex: Nt,
                    pointRadius: Pt,
                    pointStyle: Dt,
                    position: Ht,
                    row: zt,
                    selectCol: Mt,
                    selectColumn: Rt,
                    showDay: Xt,
                    stacked: Wt,
                    tableId: Kt,
                    targetIndex: Ut,
                    targetColor: Yt,
                    targetColumn: jt,
                    targetCol: he,
                    targetId: Vt,
                    textAlign: Jt,
                    textTransform: qt,
                    title: Gt,
                    titleFontSize: Qt,
                    tooltips: Zt,
                    top: te,
                    topKey: ee,
                    trigger: ie,
                    type: ne,
                    value: le,
                    where: where,
                    whereClass: oe,
                    width: ae,
                    widthTable: re,
                    xAxesFontSize: se,
                    xlabelAngle: de,
                    yAxesFontSize: ce,
                    y2AxesFontSize: ue,
                    y2AxesType: pe
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
            Post: function(t, e, i) {
                this._rp_(t, e, function(t) {
                    i(JSON.parse(t))
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
                            u = "";
                        for (var r in t[a]) {
                            if ("class" == r)
                                for (o = $O$X.prototype.getIdClass(t[a][r]), s = 1; s < o.length; s++) {
                                    c += o[s].field + ",";
                                    d = String(o[s].id).split("-").slice(2, 3);
                                    u += "'" + POTATO("#" + d).value + "',"
                                }
                            "class" != r && (c += r + ",", u += "'" + t[a][r] + "',", s++)
                        }
                        c += o[0].field;
                        d = String(o[0].id).split("-").slice(2, 3);
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
                    for (var c = (String(s).match(/AND/g) || []).length, u = String(s).split("AND"), p = 0; p <= c; p++) {
                        var h = String(u.slice(p, p + 1)).split(":"),
                            g = new Function(h.slice(1, 2));
                        "null" != String(h.slice(0, 1)).replace(/\s+/g, "") && (d[String(h.slice(0, 1)).replace(/\s+/g, "")] = String(g()).split(","))
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
                    c.setAttribute("id", "note-doughnut-" + o), s.appendChild(c), $("#note-doughnut-" + o).css({
                        fontSize: e.fontSize + "px",
                        position: "relative",
                        left: e.width / 10 + "px",
                        width: .8 * e.width + "px",
                        padding: "5px 5px 5px 5px",
                        textAlign: "center"
                    });
                    var u = document.createElement("img");
                    u.setAttribute("id", "img-doughnut-" + o), u.setAttribute("onerror", "this.style.display='none'"), s.appendChild(u), $("#img-doughnut-" + o).css({
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
                    if ($("#note-doughnut-" + o).show().html(p).css("border", "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var h = String(i[0][0]).split("-"),
                        g = e.imageDir + h[0] + "-" + String(h[1]).substring(0, 1) + ".jpg";
                    else g = e.imageDir + i[0][0] + ".jpg";
                    document.getElementById("img-doughnut-" + o).src = g, document.getElementById("img-doughnut-" + o).style.border = "5px solid " + i[2][0], e.targetIndex = 0, e.targetColor = i[2][0];
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
                                            a = l.data[n]._model,
                                            r = l.total,
                                            o = a.innerRadius + (a.outerRadius - a.innerRadius) / 2,
                                            s = a.startAngle,
                                            d = s + (a.endAngle - s) / 2,
                                            c = o * Math.cos(d),
                                            u = o * Math.sin(d);
                                        i.fillStyle = "#000";
                                        var p = String(Math.round(e.data[n] / r * 100)) + "%";
                                        if (n < e.data.length - 1) {
                                            var h = a.x + c + 70;
                                            u > 0 && c < 0 && (h = a.x + c - 50), i.fillText(t[n][0] + ": " + t[n][1] + ", " + p, h, a.y + u + 8)
                                        }
                                    }
                                    p = String(Math.round(e.data[e.data.length - 1] / r * 100)) + "%";
                                    i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + p, a.x + c, a.y + 2 * u)
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
                                    if ($("#note-doughnut-" + o).show().html(i).css("border", "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var n = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                        l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
                                    else l = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                    document.getElementById("img-doughnut-" + o).src = l, document.getElementById("img-doughnut-" + o).style.display = "block", document.getElementById("img-doughnut-" + o).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                } else {
                                    i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                    if ($("#note-doughnut-" + o).show().html(i).css("border", "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) n = String(this._data.labels[e.targetIndex]).split("-"), l = e.imageDir + n[0] + "-" + String(n[1]).substring(0, 1) + ".jpg";
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
                    l = (t = String(t).toUpperCase(), $O$Element[t]),
                    a = l.getAttribute("model"),
                    r = l.getAttribute("data"),
                    o = String(l.getAttribute("chartType")).toLowerCase();
                null == o && (o = "bar");
                var s = l.getAttribute("border");
                null == s && (s = "1px solid black");
                var d = l.getAttribute("background");
                null == d && (d = "transparent");
                var c = l.getAttribute("titleDisplay");
                null == c && (c = !0);
                var u = l.getAttribute("titleFontSize");
                null == u && (u = 25);
                var p = l.getAttribute("legendDisplay");
                null == p && (p = !0);
                var h = l.getAttribute("legendPosition");
                null == h && (h = "bottom");
                var g = l.getAttribute("labelFontSize");
                null == g && (g = 12);
                var m = l.getAttribute("label2FontSize");
                null == m && (m = 12);
                var f = l.getAttribute("yAxesFontSize");
                null == f && (f = 12);
                var y = l.getAttribute("y2AxesFontSize");
                null == y && (y = 12);
                var b = l.getAttribute("xAxesFontSize");
                null == b && (b = 12);
                var v = l.getAttribute("dataFontSize");
                null == v && (v = 12);
                var x = l.getAttribute("fontSize");
                null == x && (x = 15);
                var $ = l.getAttribute("title");
                null == $ && ($ = "_b_ Chart");
                var k = l.getAttribute("y2AxesType");
                null == k && (k = "line");
                var S = l.getAttribute("click");
                if (null != S) {
                    var w = l.localName;
                    n[String(w)] = new Function(S)
                }
                var A = l.getAttribute("hover");
                if (null != A) {
                    w = l.localName;
                    i[String(w)] = new Function(A)
                }
                var O = l.getAttribute("imageDir");
                if (null == O) O = "null";
                else {
                    var T = new Function(O);
                    O = T()
                }
                _ = 'dataLabel:"-"';
                try {
                    var _ = l.getAttribute("params");
                    null == _ && (_ = 'dataLabel:"-"')
                } catch (t) {}
                var C = new Function(l.getAttribute("callback"));
                try {
                    I = (I = new Function(l.getAttribute("stacked")))()
                } catch (t) {
                    var I;
                    null == (I = l.getAttribute("stacked")) && (I = !1)
                }
                null != I && "undefined" != I || null == (I = l.getAttribute("stacked")) && (I = !1);
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
                    L = (L = new Function(l.getAttribute("showDay")))()
                } catch (t) {
                    var L;
                    null == (L = l.getAttribute("showDay")) && (L = !0)
                }
                null != L && "undefined" != L || null == (L = l.getAttribute("showDay")) && (L = !0);
                try {
                    N = (N = new Function(l.getAttribute("height")))()
                } catch (t) {
                    var N;
                    null == (N = l.getAttribute("height")) && (N = 350)
                }
                null != N && "undefined" != N || null == (N = l.getAttribute("height")) && (N = 350);
                try {
                    P = (P = new Function(l.getAttribute("width")))()
                } catch (t) {
                    var P;
                    null == (P = l.getAttribute("width")) && (P = 600)
                }
                null != P && "undefined" != P || null == (P = l.getAttribute("width")) && (P = 600);
                try {
                    D = (D = new Function(l.getAttribute("xlabelAngle")))()
                } catch (t) {
                    var D;
                    null == (D = l.getAttribute("xlabelAngle")) && (D = 0)
                }
                null != D && "undefined" != D || null == (D = l.getAttribute("xlabelAngle")) && (D = 0);
                try {
                    H = (H = new Function(l.getAttribute("dataLabel")))()
                } catch (t) {
                    var H;
                    null == (H = l.getAttribute("dataLabel")) && (H = "data")
                }
                null != H && "undefined" != H || null == (H = l.getAttribute("dataLabel")) && (H = "data");
                try {
                    z = (z = new Function(l.getAttribute("dataLabel2")))()
                } catch (t) {
                    var z;
                    null == (z = l.getAttribute("dataLabel2")) && (z = "data")
                }
                null != z && "undefined" != z || null == (z = l.getAttribute("dataLabel2")) && (z = "data");
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
                    var R = new Function(l.getAttribute("pointBorderColorIndex"));
                    R = String(R()).split(",")
                } catch (t) {
                    try {
                        R = String(l.getAttribute("pointBorderColorIndex")).split(",")
                    } catch (t) {}
                    null == R && (R = ["#000000", "#000000", "#000000", "#000000", "#000000"])
                }
                if (null == R || "undefined" == R) {
                    try {
                        R = l.getAttribute("pointBorderColorIndex").split(",")
                    } catch (t) {}
                    null == R && (R = ["#000000", "#000000", "#000000", "#000000", "#000000"])
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
                    var W = new Function(l.getAttribute("pointBorderWidth"));
                    W = String(W()).split(",")
                } catch (t) {
                    try {
                        W = String(l.getAttribute("pointBorderWidth")).split(",")
                    } catch (t) {}
                    null == W && (W = ["1", "1", "1", "1", "1"])
                }
                if (null == W || "undefined" == W) {
                    try {
                        W = l.getAttribute("pointBorderWidth").split(",")
                    } catch (t) {}
                    null == W && (W = ["1", "1", "1", "1", "1"])
                }
                try {
                    var K = new Function(l.getAttribute("pointColorIndex"));
                    K = String(K()).split(",")
                } catch (t) {
                    try {
                        K = String(l.getAttribute("pointColorIndex")).split(",")
                    } catch (t) {}
                    null == K && (K = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
                }
                if (null == K || "undefined" == K) {
                    try {
                        K = l.getAttribute("pointColorIndex").split(",")
                    } catch (t) {}
                    null == K && (K = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
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
                V = ["5", "5", "8", "8"];
                try {
                    var V = l.getAttribute("pointRadius").split(",")
                } catch (t) {}
                null == V && (V = ["5", "5", "8", "8"]), "false" != e && 0 != e && ("pie" != o ? pims(l.localName)._b_(function() {
                    params = _ + "@" + l.localName, css = {
                        display: c,
                        background: d,
                        border: s,
                        height: N,
                        width: P,
                        fontSize: x,
                        legendDisplay: p,
                        legendPosition: h,
                        colorIndex: M,
                        pointBorderColorIndex: R,
                        pointBorderDash: X,
                        pointBorderWidth: W,
                        pointColorIndex: K,
                        pointStyle: j,
                        pointRadius: V,
                        showDay: L,
                        xlabelAngle: D,
                        labelFontSize: g,
                        label2FontSize: m,
                        yAxesFontSize: f,
                        y2AxesFontSize: y,
                        xAxesFontSize: b,
                        dataFontSize: v,
                        titleFontSize: u
                    }, attr = {
                        chartType: o,
                        title: $,
                        labelString: B,
                        label2String: F,
                        y2AxesType: k,
                        stacked: I,
                        tooltips: E,
                        dataLabel: H,
                        dataLabel2: z
                    }, param = {
                        model: a,
                        data: r
                    }, null != S && (events = {
                        callback: function() {
                            try {
                                C()
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
                    params = _ + "@" + l.localName, css = {
                        border: s,
                        height: N,
                        width: P,
                        fontSize: x,
                        display: c,
                        dataFontSize: v,
                        titleFontSize: u
                    }, attr = {
                        imageDir: O,
                        title: $
                    }, param = {
                        model: a
                    }, null != S && (events = {
                        callback: function() {
                            try {
                                C()
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
                    l = n.getAttribute("border");
                null == l && (l = "1px solid black");
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
                        height: a,
                        width: r,
                        fontSize: s,
                        display: u,
                        dataFontSize: o,
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
                        height: a,
                        width: r,
                        fontSize: s,
                        display: d,
                        dataFontSize: o,
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
                var e, i = $O$Element[t],
                    n = i.getAttribute("id"),
                    l = String(i.localName).split("-");
                null == n && (n = String(l.slice(2, 3)).toLowerCase());
                var a = i.getAttribute("model"),
                    r = i.getAttribute("data"),
                    o = i.getAttribute("header");
                null == o && (o = "");
                var s = i.getAttribute("border");
                null == s && (s = "0px solid black");
                var d = i.getAttribute("borderRadius");
                null == d && (d = 0);
                var c = i.getAttribute("fontColorTD"),
                    u = i.getAttribute("fontColorTH"),
                    p = i.getAttribute("fontFamilyTD"),
                    h = i.getAttribute("fontFamilyTH"),
                    g = i.getAttribute("fontSizeTD"),
                    m = i.getAttribute("fontSizeTH");
                null != i.getAttribute("click") && (e = new Function(i.getAttribute("click")));
                var f = i.getAttribute("height");
                null == f && (f = window.innerHeight - 200 + "px");
                var y = i.getAttribute("width");
                null == y && (y = window.innerWidth - 30 + "px");
                var b = i.getAttribute("root");
                if (null == b) try {
                    l = String(i.localName).split("-");
                    b = String(l.slice(1, 2))
                } catch (t) {
                    b = "getFIELD"
                }
                var v = i.getAttribute("whereClass");
                null == v && (v = "getWHERE");
                try {
                    var x = i.getAttribute("params")
                } catch (t) {}
                var $ = i.getAttribute("editCell");
                null != i.getAttribute("editCellCallback") && new Function(i.getAttribute("editCellCallback"));
                var k = i.getAttribute("editWidth");
                null == k && (k = 50);
                i.getAttribute("selectCols");
                var S = i.getAttribute("targetCol");
                null == S && (S = 0);
                var w = i.getAttribute("markSymbol");
                null == w && (w = "★"), null != i.getAttribute("selectCellCallback") && new Function(i.getAttribute("selectCellCallback"));
                var A = new Function(i.getAttribute("callback")),
                    O = i.getAttribute("multipleSelect");
                null == O && (O = i.getAttribute("selectMultiple"));
                $ = i.getAttribute("editCell");
                var T = i.getAttribute("htm");
                pims(i.localName)._tb_({
                    FIELD: {
                        class: b
                    },
                    WHERE: {
                        class: v
                    }
                }, function() {
                    multipleSelect = O + "@" + i.localName, editCell = $ + "@" + i.localName, params = x + "@" + i.localName, css = {
                        border: s,
                        borderRadius: d,
                        height: f,
                        width: y,
                        fontFamilyTD: p,
                        fontFamilyTH: h,
                        fontColorTD: c,
                        fontColorTH: u,
                        fontSizeTD: g,
                        fontSizeTH: m
                    }, attr = {
                        id: n
                    }, param = {
                        model: a,
                        data: r,
                        header: o,
                        htm: T
                    }, events = {
                        callback: function(t, e) {
                            try {
                                A()
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
            second: function() {
                var t = (new Date).getSeconds();
                return t = parseInt(t) < 10 ? "0" + t : t
            },
            Select: function(t, e, i) {
                var n = this.getHTMLElement(),
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
                    var e = document.getElementById(l),
                        i = JSON.parse(t);
                    e.length = 0;
                    var n = 0;
                    for (var r in i)
                        if ("undefined" != i[r].d0 && null != i[r].d0) {
                            var o = i[r].d1;
                            T = i[r].d0, e[n] = new Option(o, T), n++
                        }
                    a.callback()
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
                            extends: $O$S.prototype.l($O$V().lp)
                        })
                    } catch (t) {}
                }
            },
            SELECT: function(t, e) {
                var i = this._p_(e),
                    n = this.getHTMLElement(),
                    l = this.x,
                    a = String(l).split("-").slice(2, 3),
                    r = l + ".php",
                    o = "",
                    s = [],
                    d = 0;
                for (var c in t) {
                    if (d++, "WHERE" == c) {
                        var u = 0;
                        for (var p in t[c]) {
                            if ("class" == p)
                                for (var h = $O$X.prototype.getIdClass(t[c][p]), g = 0; g < h.length; g++) s[h[g].field] = pims(h[g].is).value();
                            "class" != p && (s[p] = t[c][p])
                        }
                    }
                    if ("FIELD" == c) {
                        u = 0, o = "";
                        var m, f = [],
                            y = [],
                            b = 0;
                        for (var p in t[c]) {
                            if ("class" == p) {
                                b = 1, m = (h = $O$X.prototype.getIdClass(t[c][p]))[0].field;
                                for (g = 0; g < h.length; g++) {
                                    var v = String(h[g].pims).split("-");
                                    f[v.slice(1, 2)] = h[g].field + ",", y[v.slice(1, 2)] = h[g].pims
                                }
                                u = parseFloat(v.slice(1, 2))
                            }
                            "class" != p && (1 == b ? f[u + 1] = p + "," : f[u] = p + ",", m = p, u++)
                        }
                        f[f.length] = m;
                        for (g = 0; g < f.length; g++) o += f[g];
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
                    }), $O$X("#" + a).MOUSEOUT(function() {
                        "null" != i.hoverBgColor && $(this).css("background", i.background), $(this).css("color", i.i), $("#" + i.hoverId).hide().html("")
                    }), $O$X("#" + l).CHANGE(function() {
                        try {
                            i.change()
                        } catch (t) {}
                    })
                }, this._rp_(r, s, function(t) {
                    var e = document.getElementById(a),
                        n = JSON.parse(t);
                    e.length = 0;
                    var l = 0;
                    for (var r in n)
                        if ("undefined" != n[r][0] && null != n[r][0]) {
                            var o = n[r][1];
                            T = n[r][0], e[l] = new Option(o, T), l++
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
                            var n = String(t[e].getAttribute("id")).split("_").slice(0, 1);
                            null == field && (field = n), $O$Array.push({
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
                            var a = t.split(i);
                            v2 = String(a.slice(1, 2)).split(":"), -1 != String(v2.slice(1, 2)).indexOf(";") ? (v3 = String(v2.slice(1, 2)).split(";"), l = v3.slice(0, 1)) : l = v2.slice(1, 2)
                        } else l = n;
                return l
            },
            _attr_: function(t, e, i) {
                var n = this._se_a(e, t, "disabled", "false"),
                    l = t.getAttribute("id");
                null == l && (l = String(i.slice(2, 3)).toLowerCase());
                var a = this._se_a(e, t, "hoverId", "potatoHoverText"),
                    r = this._se_a(e, t, "hoverText", ""),
                    o = this._se_a(e, t, "cursor", "default");
                return {
                    disabled: n,
                    value: this._se_a(e, t, "value", "0"),
                    hoverText: r,
                    hoverId: a,
                    cursor: o,
                    id: l,
                    name: l
                }
            },
            _css_: function(t, e, i) {
                var n = this._se_a(e, t, "background", "#ffffff"),
                    l = this._se_a(e, t, "border", "1px solid black"),
                    a = this._se_a(e, t, "borderRadius", "5px"),
                    r = this._se_a(e, t, "boxShadow", "0 0 0px rgba(0,0,0,0)"),
                    o = this._se_a(e, t, "color", "black"),
                    s = this._se_a(e, t, "cursor", "pointer"),
                    d = this._se_a(e, t, "display", "block"),
                    c = this._se_a(e, t, "fontFamily", "Tempus Sans ITC"),
                    u = this._se_a(e, t, "float", "null"),
                    p = this._se_a(e, t, "fontSize", "15px"),
                    h = this._se_a(e, t, "fontWeight", "normal"),
                    g = this._se_a(e, t, "height", "30px"),
                    m = this._se_a(e, t, "hoverBgColor", "yellow"),
                    f = this._se_a(e, t, "listHeight", "350px"),
                    y = this._se_a(e, t, "listLeft", "0px"),
                    b = this._se_a(e, t, "listTop", "0px"),
                    v = this._se_a(e, t, "listWidth", "300px"),
                    x = this._se_a(e, t, "margin", "2px 2px 2px 2px"),
                    $ = this._se_a(e, t, "marginBottom", "2px"),
                    k = this._se_a(e, t, "marginLeft", "2px"),
                    S = this._se_a(e, t, "marginRight", "2px"),
                    w = this._se_a(e, t, "marginTop", "-10px"),
                    A = this._se_a(e, t, "padding", "5px 0px 5px 5px"),
                    O = this._se_a(e, t, "paddingBottom", "1px"),
                    T = this._se_a(e, t, "paddingLeft", "1px"),
                    _ = this._se_a(e, t, "paddingRight", "1px"),
                    C = this._se_a(e, t, "paddingTop", "1px"),
                    I = this._se_a(e, t, "textAlign", "center"),
                    E = this._se_a(e, t, "width", "100px"),
                    B = this._se_a(e, t, "left", "0px"),
                    F = this._se_a(e, t, "top", "0px");
                return {
                    background: n,
                    border: l,
                    borderRadius: a,
                    boxShadow: r,
                    color: o,
                    cursor: s,
                    display: d,
                    float: u,
                    fontFamily: c,
                    fontSize: p,
                    fontWeight: h,
                    height: g,
                    hoverBgColor: m,
                    left: B,
                    listHeight: f + "_" + i,
                    listLeft: y + "_" + i,
                    listTop: b + "_" + i,
                    listWidth: v + "_" + i,
                    margin: x,
                    marginBottom: $,
                    marginLeft: k,
                    marginRight: S,
                    marginTop: w,
                    padding: A,
                    paddingBottom: O,
                    paddingLeft: T,
                    paddingRight: _,
                    paddingTop: C,
                    position: this._se_a(e, t, "position", "static"),
                    textAlign: I,
                    top: F,
                    width: E
                }
            },
            _se_: function() {
                var t, e = document.getElementsByTagName("*"),
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
                    var u = e[t].getAttribute("bind");
                    if (null != u) {
                        if ($O$Id[c] = u, null != e[t].getAttribute("id")) $O$BindId[c] = e[t].getAttribute("id");
                        else {
                            var p = String(e[t].tagName).split("-");
                            $O$BindId[c] = String(p.slice(2, 3)).toLowerCase()
                        }
                        c++
                    }
                    var h = String(e[t].tagName).split("-");
                    if (-1 != this.If(h.slice(0, 1))) {
                        var g, m, f = String(e[t].tagName).split("-");
                        if (f.slice(1, 2) == $O$V().b) {
                            var y = e[t].getAttribute("style"),
                                b = "true";
                            "" == (b = this._se_a(y, e[t], "disabled", "false")) && (b = "true");
                            var v = e[t].getAttribute("id");
                            null == v && (v = String(f.slice(2, 3)).toLowerCase());
                            var x, k, S = this._se_a(y, e[t], "hoverId", "potatoHoverText"),
                                w = this._se_a(y, e[t], "hoverText", ""),
                                A = (this._se_a(y, e[t], "left", "0px"), this._se_a(y, e[t], "top", "0px"), this._se_a(y, e[t], "position", "static"), this._se_a(y, e[t], "value", "")),
                                O = e[t].getAttribute("submit"),
                                T = e[t].getAttribute("fieldOther"),
                                _ = e[t].getAttribute("params"),
                                C = e[t].getAttribute("whereClass"),
                                I = e[t].getAttribute("toggle");
                            null != I && (I = new Function(e[t].getAttribute("toggle")));
                            var E = this._css_(e[t], y);
                            pims(e[t].localName)._bt_(function() {
                                if (where = C + "@" + e[t].localName, field = O + "@" + e[t].localName, fieldOther = T + "@" + e[t].localName, params = _ + "@" + e[t].localName, param = {
                                        toggle: I
                                    }, css = E, null != e[t].getAttribute("value") && null != e[t].getAttribute("image") ? attr = {
                                        disabled: b,
                                        value: A,
                                        image: e[t].getAttribute("image"),
                                        hoverText: w,
                                        hoverId: S,
                                        id: v
                                    } : null != e[t].getAttribute("value") && null == e[t].getAttribute("image") ? attr = {
                                        disabled: b,
                                        value: e[t].getAttribute("value"),
                                        hoverText: w,
                                        hoverId: S,
                                        id: v
                                    } : null == e[t].getAttribute("value") && null != e[t].getAttribute("image") && (attr = {
                                        disabled: b,
                                        image: e[t].getAttribute("image"),
                                        hoverText: w,
                                        hoverId: S,
                                        id: v
                                    }), null != e[t].getAttribute("click")) try {
                                    x = new Function(e[t].getAttribute("click")), null != e[t].getAttribute("callback") && (k = new Function(e[t].getAttribute("callback"))), events = {
                                        click: x,
                                        callback: k
                                    }
                                } catch (t) {} else try {
                                    try {
                                        x = new Function("$O$." + String(f.slice(2, 3)).toLowerCase() + "()")
                                    } catch (t) {
                                        x = new Function(v + "()")
                                    }
                                    null != e[t].getAttribute("callback") && (k = new Function(e[t].getAttribute("callback"))), events = {
                                        click: x,
                                        callback: k
                                    }
                                } catch (t) {}
                            })
                        }
                        if (f.slice(1, 2) == $O$V().c) {
                            y = e[t].getAttribute("style");
                            var B = e[t].getAttribute("class");
                            if (null == B && (B = "getFIELD"), $(e[t].localName).addClass(B), null != (wt = e[t].getAttribute("change"))) {
                                h = e[t].localName;
                                l[String(h)] = new Function(wt)
                            }
                            E = this._css_(e[t], y);
                            var F = this._attr_(e[t], y, f);
                            pims(e[t].localName)._d_(function() {
                                css = E, attr = F, null != wt && (events = {
                                    change: function(t) {
                                        for (var e in l) {
                                            String(e) == t && l[e]()
                                        }
                                    }
                                })
                            })
                        }
                        if (f.slice(1, 2) == $O$V().k) {
                            y = e[t].getAttribute("style");
                            var L = e[t].getAttribute("tool"),
                                N = e[t].getAttribute("ng-model"),
                                P = e[t].getAttribute("class");
                            null == P && (P = "getFIELD"), $(e[t].localName).addClass(P);
                            var D = new Function(e[t].getAttribute("change")),
                                H = new Function(e[t].getAttribute("click"));
                            E = this._css_(e[t], y), F = this._attr_(e[t], y, f);
                            pims(e[t].localName)._kp_(function() {
                                param = {
                                    tool: L,
                                    ngmodel: N
                                }, css = E, attr = F, events = {
                                    change: D,
                                    click: H
                                }
                            })
                        }
                        if (f.slice(1, 2) == $O$V().l) {
                            y = e[t].getAttribute("style");
                            var z = e[t].getAttribute("id");
                            null == z && (z = String(f.slice(2, 3)).toLowerCase());
                            var M = this._se_a(y, e[t], "value", "0"),
                                R = this._se_a(y, e[t], "hoverText", "potato"),
                                X = e[t].getAttribute("model"),
                                W = e[t].getAttribute("data"),
                                K = (N = e[t].getAttribute("ng-model"), e[t].getAttribute("class"));
                            null == K && (K = "getFIELD"), $(e[t].localName).addClass(K);
                            var j = e[t].getAttribute("whereClass"),
                                V = e[t].getAttribute("params"),
                                U = e[t].getAttribute("onscroll");
                            if (null != (St = e[t].getAttribute("listClick"))) {
                                h = e[t].localName;
                                n[String(h)] = new Function(St)
                            } else try {
                                h = e[t].localName;
                                n[String(h)] = new Function(String(f.slice(2, 3)).toLowerCase() + "()")
                            } catch (t) {}
                            if (null != (gt = e[t].getAttribute("callback"))) {
                                h = e[t].localName;
                                i[String(h)] = new Function(gt)
                            }
                            e[t].getAttribute("listTop"), e[t].getAttribute("listLeft"), e[t].getAttribute("display");
                            var Y = String(e[t].localName);
                            E = this._css_(e[t], y, Y);
                            pims(Y)._lt_(function() {
                                try {
                                    where = j + "@" + Y
                                } catch (t) {}
                                try {
                                    params = V + "@" + Y
                                } catch (t) {}
                                css = E, param = {
                                    model: X,
                                    data: W,
                                    ngmodel: N
                                }, attr = {
                                    onscroll: U,
                                    value: M,
                                    hoverText: R,
                                    id: z
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
                        if (f.slice(1, 2) == $O$V().m) {
                            var q = e[t].getAttribute("background");
                            null == q && (q = "#ffffff");
                            var J = e[t].getAttribute("border");
                            null == J && (J = "0px");
                            var G = e[t].getAttribute("model"),
                                Q = e[t].getAttribute("data"),
                                Z = (N = e[t].getAttribute("ng-model"), e[t].getAttribute("menuTitle"));
                            null == Z && (Z = "null");
                            var tt = e[t].getAttribute("padding"),
                                et = e[t].getAttribute("color");
                            null == et && (et = "BLUE");
                            var it = e[t].getAttribute("borderRadius");
                            null == it && (it = 7);
                            var nt = e[t].getAttribute("fontSize");
                            null == nt && (nt = 15);
                            var lt = e[t].getAttribute("height");
                            null == lt && (lt = 30);
                            var at = e[t].getAttribute("hoverBgColor");
                            null == at && (at = "yellow");
                            var rt = e[t].getAttribute("hoverText");
                            null == rt && (rt = "");
                            var ot = e[t].getAttribute("value");
                            null == ot && (ot = "0");
                            var st = e[t].getAttribute("width");
                            null == st && (st = document.innerWidth + "px");
                            var dt = e[t].getAttribute("widthMenu");
                            null == dt && (dt = 550);
                            var ct = e[t].getAttribute("heightTable");
                            null == ct && (ct = 450);
                            var ut = e[t].getAttribute("id");
                            null == ut && (ut = String(f.slice(2, 3)).toLowerCase());
                            var pt = e[t].getAttribute("model");
                            null == pt && (pt = String(f.slice(2, 3)).toLowerCase() + ".php");
                            var ht = e[t].getAttribute("class");
                            null == ht && (ht = "getFIELD"), $(e[t].localName).addClass(ht);
                            var gt, mt = e[t].getAttribute("whereClass"),
                                ft = e[t].getAttribute("params"),
                                yt = e[t].getAttribute("onscroll");
                            if (null != (St = e[t].getAttribute("click"))) {
                                h = e[t].localName;
                                d[String(h)] = new Function(St)
                            } else try {
                                h = e[t].localName;
                                d[String(h)] = new Function(String(f.slice(2, 3)).toLowerCase() + "()")
                            } catch (t) {}
                            if (null != (gt = e[t].getAttribute("callback"))) {
                                h = e[t].localName;
                                s[String(h)] = new Function(gt)
                            }
                            var bt = e[t].getAttribute("topTable"),
                                vt = e[t].getAttribute("leftTable"),
                                xt = e[t].getAttribute("display");
                            Y = String(e[t].localName);
                            pims(Y)._m_(function() {
                                try {
                                    where = mt + "@" + Y
                                } catch (t) {}
                                try {
                                    params = ft + "@" + Y
                                } catch (t) {}
                                css = {
                                    display: xt,
                                    height: lt,
                                    width: st,
                                    color: et,
                                    fontSize: nt,
                                    hoverBgColor: at,
                                    borderRadius: it,
                                    border: J,
                                    background: q,
                                    padding: tt,
                                    marginTop: bt + "_" + Y,
                                    marginLeft: vt + "_" + Y,
                                    widthTable: dt + "_" + Y,
                                    heightTable: ct + "_" + Y
                                }, param = {
                                    model: pt,
                                    menuTitle: Z,
                                    menuModel: G,
                                    data: Q,
                                    ngmodel: N
                                }, attr = {
                                    onscroll: yt,
                                    value: ot,
                                    hoverText: rt,
                                    id: ut
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
                        if ("CHART" == f.slice(1, 2)) POTATO.elementbar = e[t], $O$Element[f.slice(2, 3)] = e[t], null == ($t = e[t].getAttribute("onload")) && ($t = "true"), "true" == $t ? $O$X.prototype.reloadChart(f.slice(2, 3)) : $O$X.prototype.reloadChart(f.slice(2, 3), "false");
                        if (f.slice(1, 2) == $O$V().tb) {
                            POTATO.element = e[t], $O$Element[f.slice(2, 3)] = e[t];
                            var $t, kt = e[t].getAttribute("id");
                            null == kt && (kt = String(f.slice(2, 3)).toLowerCase()), null == ($t = e[t].getAttribute("onload")) && ($t = "true"), "true" == $t || 1 == $t ? $O$X.prototype.reloadTable(kt, "true") : $O$X.prototype.reloadTable(kt, "false")
                        }
                        if (f.slice(1, 2) == $O$V().tx) {
                            y = e[t].getAttribute("style"), E = this._css_(e[t], y), F = this._attr_(e[t], y, f);
                            var St, wt, At = e[t].getAttribute("class");
                            if (null == At && (At = "getFIELD"), $(e[t].localName).addClass(At), null != (St = e[t].getAttribute("click"))) {
                                h = e[t].localName;
                                a[String(h)] = new Function(St)
                            }
                            if (null != (wt = e[t].getAttribute("change"))) {
                                h = e[t].localName;
                                o[String(h)] = new Function(wt)
                            }
                            var Ot = e[t].getAttribute("keyup");
                            if (null != Ot) {
                                h = e[t].localName;
                                r[String(h)] = new Function(Ot)
                            }
                            N = e[t].getAttribute("ng-model");
                            pims(e[t].localName)._tx_(function() {
                                css = E, attr = F, param = {
                                    ngmodel: N
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
                        if ("D" == f.slice(1, 2)) POTATO.elementdoughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? $O$X.prototype.reloadDoughnut(0) : $O$X.prototype.reloadDoughnut(0, "false");
                        if ("D1" == f.slice(1, 2)) POTATO.element1doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? $O$X.prototype.reloadDoughnut(1) : $O$X.prototype.reloadDoughnut(1, "false");
                        if ("D2" == f.slice(1, 2)) POTATO.element2doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? $O$X.prototype.reloadDoughnut(2) : $O$X.prototype.reloadDoughnut(2, "false");
                        if ("R" == f.slice(1, 2)) POTATO.elementradar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? $O$X.prototype.reloadRadar(0) : $O$X.prototype.reloadRadar(0, "false");
                        if ("R1" == f.slice(1, 2)) POTATO.element1radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? $O$X.prototype.reloadRadar(1) : $O$X.prototype.reloadRadar(1, "false")
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
                    l = n + ".php";
                if (null != i.model && (l = i.model + ".php"), i.id = n, "string" == typeof t)
                    for (var a = $O$X.prototype.getIdClass(t), r = (t = [], 0); r < a.length; r++) "length" != a[r].name && (t[a[r].name] = pims(a[r].is).value());
                this._rp_(l, t, function(t) {
                    "tableId" == i.tableId && (i.tableId = "table_" + n);
                    var e = JSON.parse(t),
                        l = "<table id=" + i.tableId + " class=" + i.cls + ">";
                    if (null != i.data.d0) {
                        var a, r = (new Array, 0);
                        for (a in l += "<tr>", i.data) l += "<th>" + i.data["d" + r] + "</th>", r += 1;
                        for (var o in l += "</tr>", e)
                            if ("undefined" != e[o].d0 && null != e[o].d0) {
                                l += "<tr>";
                                for (var s = 0; r > s; s++) l += "<td>" + e[o]["d" + s] + "</td>";
                                l += "</tr>"
                            }
                    } else {
                        r = 0;
                        for (a in l += "<tr>", e[0]) "" != e[0][a] ? l += "<th>" + e[0][a] + "</th>" : l += "<th style='display:none'>" + e[0][a] + "</th>", r++;
                        for (var o in l += "</tr>", e)
                            if ("undefined" != e[o][0] && null != e[o][0] && o > 0) {
                                l += "<tr>";
                                for (s = 0; r > s; s++) "" != e[0][s] ? l += "<td>" + e[o][s] + "</td>" : l += "<td style='display:none'>" + e[o][s] + "</td>";
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
                            for (var t = 0; t < r; t++) d.rows[ri].cells[t].style.background = "#dfdfdf"
                        } catch (t) {}
                        ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                        for (t = 0; t < r; t++) d.rows[ri].cells[t].style.background = "yellow";
                        i.click(d.rows[ri], ri, ci)
                    })
                })
            },
            _tb_attr: function(t) {
                var e = [],
                    i = String(t[0]).replace(/\s+/g, "");
                if (-1 != String(i).indexOf(";"))
                    for (var n = String(t[0]), l = (String(n).match(/;/g) || []).length, a = String(n).split(";"), r = 0; r < l; r++)
                        if (-1 != String(a.slice(r, r + 1)).indexOf(":")) {
                            var o = String(a.slice(r, r + 1)).split(":");
                            if ("tool" != String(o.slice(0, 1)).replace(/\s+/g, "") && "callback" != String(o.slice(0, 1)).replace(/\s+/g, "") && (e[String(o.slice(0, 1)).replace(/\s+/g, "")] = String(o.slice(1, 2)).replace(/\s+/g, "")), "tool" == String(o.slice(0, 1)).replace(/\s+/g, "") && (e[String(o.slice(0, 1)).replace(/\s+/g, "")] = o.slice(1, 2)), "callback" == String(o.slice(0, 1)).replace(/\s+/g, "")) {
                                n = String(t[0]).split("callback"), a = String(n.slice(1, 2));
                                e.callback = "function" + String(a.substr(1)).split("function").slice(1, 2)
                            }
                        }
                return e
            },
            _tb_: function(t, i) {
                for (var n = this._p_(i), l = this.getHTMLElement(), a = this.x, r = [
                        []
                    ], o = n.id, s = param.data, d = String(n.header).split(","), c = 0; c < $O$Array.length; c++) o == String($O$Array[c].bind) && (r[$O$Array[c].id] = $O$Array[c].value, 0);
                var u = "<table class='potatoTableCss' id='" + n.id + "' style='border-collapse:collapse;width:99%'>"; - 1 != String(s).indexOf(".php") && (n.model = s), null != n.model ? (l.createdCallback = function() {
                    this.innerHTML = '<div id="div-' + o + '" ></div> '
                }, this._rp_(n.model, r, function(t) {
                    var i = JSON.parse(t);
                    if (null != d && d.length > 0) {
                        var l = 0;
                        for (e in u += "<tr>", d) "" != d[e] ? u += "<th style='border:1px solid black;font-size:" + n.fontSizeTH + ";color:" + n.fontColorTH + ";font-family:" + n.fontFamilyTH + "'>" + d[e] + "</th>" : u += "<th style='display:none'>" + d[e] + "</th>", l++;
                        for (var r in u += "</tr>", i)
                            if ("undefined" != i[r][0] && null != i[r][0] && r >= 0) {
                                u += "<tr>";
                                for (var s = 0; s < l; s++) "" != d[s] && null != d[s] ? u += "<td style='border:1px solid black;padding-left:5px;font-size:" + n.fontSizeTD + ";color:" + n.fontColorTD + ";font-family:" + n.fontFamilyTD + "'>" + i[r][s] + "</td>" : u += "<td style='display:none'>" + i[r][s] + "</td>";
                                u += "</tr>"
                            }
                    } else {
                        l = 0;
                        for (e in u += "<tr>", i[0]) "" != i[0][e] ? u += "<th style='border:1px solid black;font-size:" + n.fontSizeTH + ";color:" + n.fontColorTH + ";font-family:" + n.fontFamilyTH + "'>" + i[0][e] + "</th>" : u += "<th style='display:none'>" + i[0][e] + "</th>", l++;
                        for (var r in u += "</tr>", i)
                            if ("undefined" != i[r][0] && null != i[r][0] && r > 0) {
                                u += "<tr>";
                                for (s = 0; l > s; s++) "" != i[0][s] && null != i[0][s] && "undefined" != i[0][s] ? u += "<td style='border:1px solid black;font-size:" + n.fontSizeTD + ";color:" + n.fontColorTD + ";font-family:" + n.fontFamilyTD + "'>" + i[r][s] + "</td>" : u += "<td style='display:none'>" + i[r][s] + "</td>";
                                u += "</tr>"
                            }
                    }
                    u += "</table>", $("#div-" + o).html(u).show().css({
                        overflow: "auto",
                        width: n.width,
                        height: n.height,
                        background: n.background,
                        display: n.display,
                        border: n.border,
                        position: n.position,
                        left: n.left,
                        top: n.top,
                        borderRadius: n.borderRadius
                    });
                    var c = document.getElementById(n.id),
                        p = $("#" + n.id + " tbody");
                    $(document).keydown(function(t) {
                        if (p.find(".highlight").length)
                            if (40 == t.which) {
                                var e = p.find(".highlight").next();
                                $O$X.prototype.tableHighlight(e[0].rowIndex, n.tableId)
                            } else if (38 == t.which) {
                            var i = p.find(".highlight").prev();
                            $O$X.prototype.tableHighlight(i[0].rowIndex, n.tableId)
                        }
                    });
                    try {
                        if (potato.table = c, n.callback(c, n.id), String(editCell).split("@").slice(1, 2) == a) {
                            var h = String(editCell).split("@").slice(0, 1),
                                g = [];
                            if (null != h[0] && "null" != h[0]) g = potato._tb_attr(h);
                            potato._ec_(function() {
                                attr = {
                                    id: n.id
                                }, paramE = g;
                                var t = new Function("return " + String(g.callback));
                                events = {
                                    callback: t()
                                }
                            })
                        }
                        if (String(multipleSelect).split("@").slice(1, 2) == a) {
                            if (null != (h = String(multipleSelect).split("@").slice(0, 1))[0] && "null" != h[0]) g = potato._tb_attr(h);
                            potato.MultipleSelect(function() {
                                attr = {
                                    id: n.id
                                }, paramM = g;
                                var t = new Function("return " + String(g.callback));
                                events = {
                                    callback: t()
                                }
                            })
                        }
                    } catch (t) {}
                    $("#" + n.id + " td").click(function() {
                        ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                        for (var t = 0; t < l; t++) 0;
                        n.click(c.rows[ri], ri, ci, n.id)
                    })
                })) : l.createdCallback = function() {
                    this.innerHTML = '<div id="div-' + o + '" ></div> ';
                    var t = JSON.parse(s),
                        i = 0;
                    for (e in u += "<tr>", d) "" != d[e] ? u += "<th style='border:1px solid black;font-size:" + n.fontSizeTH + ";color:" + n.fontColorTH + ";font-family:" + n.fontFamilyTH + "'>" + d[e] + "</th>" : u += "<th style='display:none'>" + d[e] + "</th>", i++;
                    for (var l in u += "</tr>", t)
                        if ("undefined" != t[l][0] && null != t[l][0] && l >= 0) {
                            u += "<tr>";
                            for (var r = 0; r < i; r++) "" != d[r] && null != d[r] ? u += "<td style='border:1px solid black;padding-left:5px;font-size:" + n.fontSizeTD + ";color:" + n.fontColorTD + ";font-family:" + n.fontFamilyTD + "'>" + t[l][r] + "</td>" : u += "<td style='display:none'>" + t[l][r] + "</td>";
                            u += "</tr>"
                        }
                    u += "</table>", $("#div-" + o).html(u).show().css({
                        overflow: "auto",
                        width: n.width,
                        height: n.height,
                        background: n.background,
                        display: n.display,
                        border: n.border,
                        position: n.position,
                        left: n.left,
                        top: n.top,
                        borderRadius: n.borderRadius
                    });
                    var c = document.getElementById(n.id),
                        p = $("#" + n.id + " tbody");
                    $(document).keydown(function(t) {
                        if (p.find(".highlight").length)
                            if (40 == t.which) {
                                var e = p.find(".highlight").next();
                                $O$X.prototype.tableHighlight(e[0].rowIndex, n.tableId)
                            } else if (38 == t.which) {
                            var i = p.find(".highlight").prev();
                            $O$X.prototype.tableHighlight(i[0].rowIndex, n.tableId)
                        }
                    });
                    try {
                        if (potato.table = c, n.callback(c, n.id), String(editCell).split("@").slice(1, 2) == a) {
                            var h = String(editCell).split("@").slice(0, 1),
                                g = [];
                            if (null != h[0] && "null" != h[0]) g = potato._tb_attr(h);
                            potato._ec_(function() {
                                attr = {
                                    id: n.id
                                }, paramE = g;
                                var t = new Function("return " + String(g.callback));
                                events = {
                                    callback: t()
                                }
                            })
                        }
                        if (String(multipleSelect).split("@").slice(1, 2) == a) {
                            if (null != (h = String(multipleSelect).split("@").slice(0, 1))[0] && "null" != h[0]) g = potato._tb_attr(h);
                            potato.MultipleSelect(function() {
                                attr = {
                                    id: n.id
                                }, paramM = g;
                                var t = new Function("return " + String(g.callback));
                                events = {
                                    callback: t()
                                }
                            })
                        }
                    } catch (t) {}
                    $("#" + n.id + " td").click(function() {
                        ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                        for (var t = 0; t < i; t++) 0;
                        n.click(c.rows[ri], ri, ci, n.id)
                    })
                }, this._p_e(a, l)
            },
            tableHighlight: function(t, e) {
                t + 1 > $("#" + e + " tbody tr").length && (t = 0), $("#" + e + " tbody tr:eq(" + t + ")").length > 0 && ($("#" + e + " tbody tr").removeClass("highlight"), $("#" + e + " tbody tr:eq(" + t + ")").addClass("highlight"))
            },
            Text: function(t) {
                var e = this.getHTMLElement(),
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
                var e = this,
                    i = this._p_(t),
                    n = this.getHTMLElement(),
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
                        "null" != i.hoverBgColor && $(this).css("background", i.hoverBgColor), $(this).css("color", i.hoverColor), "" != i.hoverText && $("#" + i.hoverId).html(i.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: i.hoverHeight + "px",
                            width: i.hoverWidth + "px",
                            background: "#ffffe5",
                            border: "1px solid black",
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != i.hoverBgColor && $(this).css("background", i.background), $(this).css("color", i.i), $("#" + i.hoverId).hide().html("")
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
            toggle: new Array,
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
                        }), $("#TimePad").show(), $O$F = document.getElementById(i)
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
                    a = t.getSeconds(),
                    r = t.getFullYear();
                return $O$P.day = parseInt(e) < 10 ? "0" + e : e, $O$P.hour = parseInt(i) < 10 ? "0" + i : i, $O$P.minute = parseInt(n) < 10 ? "0" + n : n, $O$P.month = parseInt(l) < 10 ? "0" + l : l, $O$P.second = parseInt(a) < 10 ? "0" + a : a, $O$P.year = r, $O$P.title = "$O$", $O$P.now = $O$P.hour + ":" + $O$P.minute, r + "-" + Oget.month + "-" + Oget.day
            },
            value: function(t) {
                return t ? (this.e.value = t, this) : this.e.value
            },
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
