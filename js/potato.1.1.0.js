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
*/
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
                a = t.getFullYear();
            _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(n) < 10 ? "0" + n : n, _pimS.month = parseInt(l) < 10 ? "0" + l : l, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.year = a, _pimS.now = _pimS.hour + ":" + _pimS.minute, Oget.today = a + "-" + Oget.month + "-" + Oget.day, pims = X, POTATO = X, _$.init(), document.onmouseover = X.prototype.doOver, document.onmouseout = X.prototype.doOut, document.onmousedown = X.prototype.doDown, document.onmouseup = X.prototype.doUp
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
        for (var i = 0, n = t.length; i < n; i++) p(t[i], e)
    }

    function r(t) {
        return function(e) {
            tt(e) && (p(e, t), l(e.querySelectorAll(N), t))
        }
    }

    function a(t) {
        var e = t.getAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111)),
            i = t.nodeName.toUpperCase(),
            n = H.call(L, e ? $ + e.toUpperCase() : B + i);
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
        ht && (!l || l === e) && e.attributeChangedCallback && "style" !== n && e.attributeChangedCallback(n, i === t[w] ? null : t.prevValue, i === t[C] ? null : t.newValue)
    }

    function d(t) {
        var e = r(t);
        return function(t) {
            g.push(e, t.target)
        }
    }

    function c(t) {
        ut && (ut = !1, t.currentTarget.removeEventListener(O, c)), l((t.target || e).querySelectorAll(N), t.detail === A ? A : T), Z && function() {
            for (var t, e = 0, i = et.length; e < i; e++) t = et[e], R.contains(t) || (et.splice(e, 1), p(t, A))
        }()
    }

    function u(t, e) {
        var i = this;
        nt.call(i, t, e), m.call(i, {
            target: i
        })
    }

    function h(t, e) {
        G(t, e), b ? b.observe(t, at) : (ct && (t.setAttribute = u, t[_] = y(t), t.addEventListener(E, m)), t.addEventListener(I, s)), t.createdCallback && ht && (t.created = !0, t.createdCallback(), t.created = !1)
    }

    function p(t, e) {
        var i, n = a(t); - 1 < n && (v(t, D[n]), n = 0, e !== T || t[T] ? e === A && !t[A] && (t[T] = !1, t[A] = !0, n = 1) : (t[A] = !1, t[T] = !0, n = 1, Z && H.call(et, t) < 0 && et.push(t)), n && (i = t[e + "Callback"]) && i.call(t))
    }
    if (!(n in e)) {
        var g, m, f, y, b, v, x, _ = "__" + n + (1e5 * Math.random() >> 0),
            T = "attached",
            A = "detached",
            S = "extends",
            w = "ADDITION",
            k = "MODIFICATION",
            C = "REMOVAL",
            I = "DOMAttrModified",
            O = "DOMContentLoaded",
            E = "DOMSubtreeModified",
            B = "<",
            $ = "=",
            F = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
            P = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
            L = [],
            D = [],
            N = "",
            R = e.documentElement,
            H = L.indexOf || function(t) {
                for (var e = this.length; e-- && this[e] !== t;);
                return e
            },
            X = i.prototype,
            M = X.hasOwnProperty,
            z = X.isPrototypeOf,
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
                    for (var i, n = K(e), l = 0, r = n.length; l < r; l++) i = n[l], M.call(t, i) || W(t, i, j(e, i))
                }
                return function(e, i) {
                    do {
                        t(e, i)
                    } while ((i = U(i)) && !z.call(i, e));
                    return e
                }
            }() : function(t, e) {
                for (var i in e) t[i] = e[i];
                return t
            }),
            J = t.MutationObserver || t.WebKitMutationObserver,
            Q = (t.HTMLElement || t.Element || t.Node).prototype,
            Z = !z.call(Q, R),
            tt = Z ? function(t) {
                return 1 === t.nodeType
            } : function(t) {
                return z.call(Q, t)
            },
            et = Z && [],
            it = Q.cloneNode,
            nt = Q.setAttribute,
            lt = Q.removeAttribute,
            rt = e.createElement,
            at = J && {
                attributes: !0,
                characterData: !0,
                attributeOldValue: !0
            },
            ot = J || function(t) {
                ct = !1, R.removeEventListener(I, ot)
            },
            st = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                setTimeout(t, 10)
            },
            dt = !1,
            ct = !0,
            ut = !0,
            ht = !0;
        V || Y ? (v = function(t, e) {
            z.call(e, t) || h(t, e)
        }, x = h) : x = v = function(t, e) {
            t[_] || (t[_] = i(!0), h(t, e))
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
                        n = i[_],
                        l = t.propertyName;
                    n.hasOwnProperty(l) && (n = n[l], (e = new CustomEvent(I, {
                        bubbles: !0
                    })).attrName = n.name, e.prevValue = n.value || null, e.newValue = n.value = i[l] || null, null == e.prevValue ? e[w] = e.attrChange = 0 : e[k] = e.attrChange = 1, i.dispatchEvent(e))
                };
            t.value = function(t, r, a) {
                t === I && this.attributeChangedCallback && this.setAttribute !== n && (this[_] = {
                    className: {
                        name: "class",
                        value: this.className
                    }
                }, this.setAttribute = n, this.removeAttribute = i, e.call(this, "propertychange", l)), e.call(this, t, r, a)
            }, W(Q, "addEventListener", t)
        }()) : J || (R.addEventListener(I, ot), R.setAttribute(_, 1), R.removeAttribute(_), ct && (m = function(t) {
            var e, i, n, l = this;
            if (l === t.target) {
                for (n in e = l[_], l[_] = i = y(l), i) {
                    if (!(n in e)) return f(0, l, n, e[n], i[n], w);
                    if (i[n] !== e[n]) return f(1, l, n, e[n], i[n], k)
                }
                for (n in e)
                    if (!(n in i)) return f(2, l, n, e[n], i[n], C)
            }
        }, f = function(t, e, i, n, l, r) {
            var a = {
                attrChange: t,
                currentTarget: e,
                attrName: i,
                prevValue: n,
                newValue: l
            };
            a[r] = t, s(a)
        }, y = function(t) {
            for (var e, i, n = {}, l = t.attributes, r = 0, a = l.length; r < a; r++) "setAttribute" !== (i = (e = l[r]).name) && (n[i] = e.value);
            return n
        })), e[n] = function(t, i) {
            if (n = t.toUpperCase(), dt || (dt = !0, J ? (b = function(t, e) {
                    function i(t, e) {
                        for (var i = 0, n = t.length; i < n; e(t[i++]));
                    }
                    return new J(function(n) {
                        for (var l, r, a = 0, o = n.length; a < o; a++) "childList" === (l = n[a]).type ? (i(l.addedNodes, t), i(l.removedNodes, e)) : (r = l.target, ht && r.attributeChangedCallback && "style" !== l.attributeName && r.attributeChangedCallback(l.attributeName, l.oldValue, r.getAttribute(l.attributeName)))
                    })
                }(r(T), r(A))).observe(e, {
                    childList: !0,
                    subtree: !0
                }) : (g = [], st(function t() {
                    for (; g.length;) g.shift().call(null, g.shift());
                    st(t)
                }), e.addEventListener("DOMNodeInserted", d(T)), e.addEventListener("DOMNodeRemoved", d(A))), e.addEventListener(O, c), e.addEventListener("readystatechange", c), e.createElement = function(t, i) {
                    var n = rt.apply(e, arguments),
                        l = "" + t,
                        r = H.call(L, (i ? $ : B) + (i || l).toUpperCase()),
                        a = -1 < r;
                    return i && (n.setAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111), i = i.toLowerCase()), a && (a = o(l.toUpperCase(), i))), ht = !e.createElement.innerHTMLHelper, a && x(n, D[r]), n
                }, Q.cloneNode = function(t) {
                    var e = it.call(this, !!t),
                        i = a(e);
                    return -1 < i && x(e, D[i]), t && function(t) {
                        for (var e, i = 0, n = t.length; i < n; i++) e = t[i], x(e, D[a(e)])
                    }(e.querySelectorAll(N)), e
                }), -2 < H.call(L, $ + n) + H.call(L, B + n)) throw new Error("A " + t + " type pims already registered");
            if (!F.test(n) || -1 < H.call(P, n)) throw new Error("The type " + t + " pims invalid");
            var n, s = function() {
                    return h ? e.createElement(p, n) : e.createElement(p)
                },
                u = i || X,
                h = M.call(u, S),
                p = h ? i[S].toUpperCase() : n,
                m = L.push((h ? $ : B) + n) - 1;
            return N = N.concat(N.length ? "," : "", h ? p + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + t.toLowerCase() + '"]' : p), s.prototype = D[m] = M.call(u, "prototype") ? u.prototype : q(Q), l(e.querySelectorAll(N), T), s
        }
    }
}(window, document, Object, __p.prototype.l(_pcnst().r));
var X = function() {
    var _pimS = function(t, e, i, n, l) {
        var r = __p.prototype.l(_pcnst().lp);
        if (this.data = [], this.array1 = [], this.array2 = [], this.where = [], this.field = [], this.whereOther = [], this.fieldOther = [], this.Query = 0, this.Submit = 0, -1 != String(t).indexOf(__p.prototype.l(_pcnst().h)) && (r = String(t).split(__p.prototype.l(_pcnst().h)).slice(1, 2)), !l) {
            if (t && r == __p.prototype.l(_pcnst().lp)) return window === this ? new _pimS(t) : (this.Day = this.day(), this.e = document.getElementById(t), this.Hour = this.hour(), this.id = t, this.Minute = this.minute(), this.Month = this.month(), this.obj = document.getElementById(t), this.Patent = this.getPatent(), this.Second = this.second(), this.x = t, this.Year = this.year(), this.table, this.ci, this.ri, this.title, this.value, this.oldValue, this.dataID, this.trigger, this.chartLabel, this.chartYvalue, this.chartXvalue, this.element, this.element1, this.element2, this.element3, this.element4, this.element5, this.element6, this.element7, this.element8, this.element9, this.elementbar, this.element1bar, this.element2bar, this.element3bar, this.element4bar, this.element5bar, this.element6bar, this.element7bar, this.element8bar, this.element9bar, this.elementdoughnut, this.element1doughnut, this.element2doughnut, this.element3doughnut, this.element4doughnut, this.element5doughnut, this.element6doughnut, this.element7doughnut, this.element8doughnut, this.element9doughnut, this.elementradar, this.element1radar, this.element2radar, this.element3radar, this.element4radar, this.element5radar, this.element6radar, this.element7radar, this.element8radar, this.element9radar, this);
            if (t && r != __p.prototype.l(_pcnst().lp)) {
                var a = String(r).toLowerCase();
                return document.getElementById(a)
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
            (e.title = "potato.title") && (e.title = potato.title), (e.model = "potato.model") && (e.model = potato.model);
            var i = this.getHTMLElement(),
                n = this.x,
                l = e.model,
                r = n.split("-"),
                a = r.slice(2, 3),
                o = (r.slice(2, 3), !1);
            "true" != e.stacked && 1 != e.stacked || (o = !0);
            var s = !0;
            if ("false" != e.tooltips && 0 != e.tooltips || (s = !1), String(e.params).split("@").slice(1, 2) == n) var d = String(e.params).split("@").slice(0, 1);
            i.createdCallback = function() {
                var t = '<div class="chartWrapper" style="position:relative">';
                t += '<div id="div_' + a + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="div_chart_' + a + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + a + '" style="background:' + e.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(e.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t
            };
            var c = 0,
                u = [];
            if (null != [] && "null" != d)
                for (var h = (String(d).match(/,/g) || []).length, p = String(d).split(","), g = 0; g <= h; g++) {
                    var m = String(p.slice(g, g + 1)).split(":"),
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
                var h = new Array,
                    p = new Array,
                    g = new Array,
                    m = (new Array, "");
                for (u = 0; u < t.length; u++) {
                    if (h[u] = t[u][0], "true" == e.showDay) {
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
                        h[u] = t[u][0] + " (" + m + ")"
                    }
                    if ("bar" == e.chartType) {
                        var _ = 0,
                            T = [];
                        T[0] = 0;
                        var A = 0;
                        for (c = 1; c <= r.length; c++) try {
                            "data" != r[c] && (i[A].push(t[u][c]), 1 == o ? _ += parseFloat(t[u][c]) : (T[c] = 0, parseFloat(t[u][c]) > 0 && "undefined" != t[u][c] && (T[c] = parseFloat(t[u][c]))), A++)
                        } catch (t) {}
                        if (i[A].push(_), p[u] = 1 == o ? _ : maxArray(T), "data" != d[0]) {
                            var S = 0,
                                w = [];
                            w[0] = 0;
                            var k = 0;
                            for (c = 0; c < d.length; c++)
                                if ("undefined" != t[u][d[c]] && null != t[u][d[c]]) try {
                                    l[k].push(t[u][d[c]]), 1 == o ? S += parseFloat(t[u][d[c]]) : (S[c] = 0, parseFloat(t[u][d[c]]) > 0 && (w[c] = parseFloat(t[u][d[c]]))), k++
                                } catch (t) {}
                                g[u] = 1 == o ? S : maxArray(w)
                        }
                        _
                    } else i[0].push(t[u][1]), p[u] = t[u][1], t[u][1]
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
                        data: i[A]
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
                            stacked: o,
                            ticks: {
                                callback: function(t, e, i) {
                                    return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                },
                                beginAtZero: !0,
                                max: maxArray(p) * B,
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
                                    r = document.getElementById("yAxis_" + a).getContext("2d");
                                r.canvas.width = n, r.drawImage(this.chart.canvas, 0, 0, n, l, 0, 0, n, l), i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom";
                                var o = 0;
                                this.data.datasets.forEach(function(e) {
                                    for (var n = 0; n < e.data.length; n++) {
                                        var l = e._meta[Object.keys(e._meta)[0]].data[n]._model,
                                            r = e._meta[Object.keys(e._meta)[0]].data[n]._yScale.maxHeight;
                                        i.fillStyle = "#444";
                                        var a = l.y - 5;
                                        (r - l.y) / r >= .93 && (a = l.y + 14), "bar" == e.type && o != c && (a += 20), t.length < 31 && i.fillText(pims().Comma(parseFloat(e.data[n])), l.x, a)
                                    }
                                    o++
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
                                            a = l[0]._datasetIndex,
                                            o = r.datasets[a].label,
                                            s = r.datasets[a].data[l[0]._index];
                                        t = i[0];
                                        var d = this.data.labels[t._index];
                                        e.hover(n, o, s, d)
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
                                    a = l[0]._datasetIndex,
                                    o = r.datasets[a].label,
                                    s = r.datasets[a].data[l[0]._index];
                                t = i[0];
                                var d = this.data.labels[t._index];
                                e.click(n, o, s, d)
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
                                stacked: o,
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
                    D = "<canvas id='canvas-" + a + "' style='background:" + e.background + "'></canvas>",
                    N = document.getElementById("div_chart_" + a);
                N.innerHTML = "", $("#div_" + a).show().css({
                    width: e.width + "px",
                    height: e.height + "px",
                    border: e.border
                });
                var R = "100%";
                t.length > 50 && (R = "130%"), t.length > 100 && (R = "150%"), t.length > 150 && (R = "180%"), t.length > 200 && (R = "250%"), t.length > 250 && (R = "300%"), t.length > 300 && (R = "350%"), t.length > 350 && (R = "400%"), t.length > 400 && (R = "500%"), $("#div_chart_" + a).html(D).css({
                    width: R
                });
                var H = document.getElementById("canvas-" + a);
                try {
                    var X = e.name;
                    null == X && (X = "");
                    var M = document.createElement("span");
                    M.innerText = X, M.style.fontSize = e.nameFontSize, N.appendChild(M), $("#div_" + a + " span").css({
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
        _potato_: function(t, e) {
            var i = this.getHTMLElement(),
                n = t.x,
                l = this._p_(e),
                r = n.split("-");
            return {
                potato: this,
                x: i,
                m: n,
                _: l,
                q: r,
                id: l.id
            }
        },
        _bt_: function(t) {
            var e = this,
                i = this.getHTMLElement(),
                n = this.x,
                l = this._p_(t),
                r = (n.split("-"), l.id),
                a = [];
            if (String(l.field).split("@").slice(1, 2) == n) var o = String(l.field).split("@").slice(0, 1);
            if (String(l.fieldOther).split("@").slice(1, 2) == n) var s = String(l.fieldOther).split("@").slice(0, 1);
            if (String(l.params).split("@").slice(1, 2) == n) var d = String(l.params).split("@").slice(0, 1);
            if (String(l.where).split("@").slice(1, 2) == n) var c = String(l.where).split("@").slice(0, 1);
            i.createdCallback = function() {
                this.id = r + "_", this.pims = n;
                var t = '<button type="button" id="' + r + '"><table><tr>';
                "true" == l.disabled && (t = '<button type="button" disabled id="' + r + '"><table><tr>'), "nil 0 0" != l.image ? (t += '<td><img id="img_' + r + '" src="' + String(l.image).split(" ").slice(0, 1) + '" style="width:' + String(l.image).split(" ").slice(1, 2) + "px;height:" + String(l.image).split(" ").slice(2, 3) + 'px"/></td>', t += '<td style="vertical-align:middle;text-align:center">' + l.value + "</td>") : t += '<td style="vertical-align:middle;text-align:center">' + l.value + "</td>", t += "</tr></table></button>", this.innerHTML = "<br>" + t, e._css_id(l, r), $("#" + r).css({
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
                }).click(function() {
                    POTATO.Query = 100, POTATO.Submit = 100;
                    for (var t = 0; t < _POTATOId.length; t++)
                        if (r == String(_POTATOId[t])) {
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
                            i = n + ".php", u = [];
                            if (null != a && "null" != d)
                                for (y = (String(d).match(/AND/g) || []).length, b = String(d).split("AND"), v = 0; v <= y; v++) {
                                    x = String(b.slice(v, v + 1)).split(":"), _ = new Function(x.slice(1, 2));
                                    "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (u[String(x.slice(0, 1)).replace(/\s+/g, "")] = _())
                                }
                            pimsData = [], _pimS.prototype._rp_(i, u, function(t) {
                                POTATO.data = JSON.parse(t), l.callback()
                            })
                        }
                    } else {
                        POTATO.Query = 0, POTATO.Submit = 0;
                        var i = r + ".php",
                            u = [];
                        if (null != c && "null" != c) {
                            var h = X.prototype.getIdClass(String(c));
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
                            for (var p = 0; p < h.length; p++) {
                                var g = String(h[p].id).split("-").slice(2, 3);
                                u[h[p].field] = pims(g).value()
                            }
                        }
                        var m = "",
                            f = "";
                        if (null != o && "null" != o) {
                            h = X.prototype.getIdClass(String(o));
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
                            for (p = 0; p < h.length; p++) {
                                g = String(h[p].id).split("-").slice(2, 3);
                                p + 1 < h.length ? (m += String(h[p].field).replace(/\s+/g, "") + ",", f += "'" + pims(g).value() + "',") : (m += String(h[p].field).replace(/\s+/g, ""), f += "'" + pims(g).value() + "'")
                            }
                        }
                        if ("null" != s)
                            for (var y = (String(s).match(/AND/g) || []).length, b = String(s).split("AND"), v = 0; v <= y; v++) {
                                var x = String(b.slice(v, v + 1)).split(":"),
                                    _ = new Function(x.slice(1, 2));
                                "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (v < y ? 0 == v ? (m += "," + String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += ",'" + _() + "',") : (m += String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += "'" + _() + "',") : 0 == y ? (m += String(x.slice(0, 1)).replace(/\s+/g, "") + ",", f += "'" + _() + "',") : (m += String(x.slice(0, 1)).replace(/\s+/g, ""), f += "'" + _() + "'"))
                            }
                        if (u.fields = m, u.fieldsValue = f, "null" != d && null != a)
                            for (var y = (String(d).match(/AND/g) || []).length, b = String(d).split("AND"), v = 0; v <= y; v++) {
                                var x = String(b.slice(v, v + 1)).split(":"),
                                    _ = new Function(x.slice(1, 2));
                                "null" != String(x.slice(0, 1)).replace(/\s+/g, "") && (u[String(x.slice(0, 1)).replace(/\s+/g, "")] = _())
                            }
                        POTATO.data = [], _pimS.prototype._rp_(i, u, function(t) {
                            POTATO.data = JSON.parse(t);
                            try {
                                l.callback()
                            } catch (t) {}
                        })
                    }
                }), "null" != l.float && $("#" + r + "_").css("float", l.float)
            }, this._p_e(n, i)
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
                else(o = document.getElementById(String(e).split("#").slice(1, 2))).onchange = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), a = 0; a < r.length; a++)
                        for (n = r[a].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onchange = t
                } else {
                    var o = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (a = 0; a < o.length; a++) o[a].onchange = t
                }
        },
        CLICK: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), n = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onclick = t;
                else(o = document.getElementById(String(e).split("#").slice(1, 2))).onclick = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), a = 0; a < r.length; a++)
                        for (n = r[a].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onclick = t
                } else {
                    var o = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (a = 0; a < o.length; a++) o[a].onclick = t
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
            var e = this,
                i = this.getHTMLElement(),
                n = this.x,
                l = this._p_(t);
            "potato.today()" == l.value && (l.value = e.today()), "potato.now()" == l.value && (l.value = e.now());
            var r = l.id;
            i.createdCallback = function() {
                this.id = r + "_", X.prototype.getAttribute(this, n).index, X.prototype.getAttribute(this, n).field, this.pims = n, "false" == l.disabled && (this.innerHTML = '<br><input type="text" id="' + r + '"> '), "true" != l.disabled && "" != l.disabled || (this.innerHTML = '<br><input disabled type="text" id="' + r + '"> '), e._css_id(l, r), $("#" + r).attr("value", l.value).mousemove(function() {
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
                        if (r == String(_POTATOId[t])) {
                            var e = String(_POTATOBindId[t]);
                            document.getElementById(e).innerText = document.getElementById(r).value
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
                a = n.split("-"),
                o = a.slice(2, 3);
            a.slice(2, 3);
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
                for (var c = (String(s).match(/,/g) || []).length, u = String(s).split(","), h = 0; h <= c; h++) {
                    var p = String(u.slice(h, h + 1)).split(":"),
                        g = new Function(p.slice(1, 2));
                    if ("null" != String(p.slice(0, 1)).replace(/\s+/g, "")) try {
                        d[String(p.slice(0, 1)).replace(/\s+/g, "")] = String(g()).split(",")
                    } catch (t) {
                        check_error = 1, d[String(p.slice(0, 1)).replace(/\s+/g, "")] = ""
                    }
                }
            this.Post(l, d, function(t) {
                var i = new Array;
                i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                for (var l = 0; l < t.length; l++)
                    for (var a = 0; a < i.length; a++) i[a][l] = t[l][a];
                var s = document.getElementById(r);
                s.innerHTML = "", $("#" + r).append('<canvas id="canvas-' + o + '" >読み込み中．．．</canvas>');
                var d = document.getElementById("canvas-" + o);
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
                    var h = i[3][0];
                    if ($("#note-doughnut-" + o).show().html(h).css("border", "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var p = String(i[0][0]).split("-"),
                        g = e.imageDir + p[0] + "-" + String(p[1]).substring(0, 1) + ".jpg";
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
                                        r = l.data[n]._model,
                                        a = l.total,
                                        o = r.innerRadius + (r.outerRadius - r.innerRadius) / 2,
                                        s = r.startAngle,
                                        d = s + (r.endAngle - s) / 2,
                                        c = o * Math.cos(d),
                                        u = o * Math.sin(d);
                                    i.fillStyle = "#000";
                                    var h = String(Math.round(e.data[n] / a * 100)) + "%";
                                    if (n < e.data.length - 1) {
                                        var p = r.x + c + 70;
                                        u > 0 && c < 0 && (p = r.x + c - 50), i.fillText(t[n][0] + ": " + t[n][1] + ", " + h, p, r.y + u + 8)
                                    }
                                }
                                h = String(Math.round(e.data[e.data.length - 1] / a * 100)) + "%";
                                i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + h, r.x + c, r.y + 2 * u)
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
                    var a = 0,
                        o = this;
                    try {
                        o.firstChild.value
                    } catch (t) {
                        o.innerText = " "
                    }
                    if (_potatoThis = this, "INPUT" == o.firstChild.nodeName) {
                        o = this;
                        var s = document.createTextNode(o.firstChild.value);
                        o.replaceChild(s, o.firstChild), a = 1, $("#keypadtable").hide(), potato.trigger = 0, _pimS.nodevalue = o.firstChild.nodeValue, e.callback(o.firstChild.nodeValue, potato.oldValue, t.rows[potato.ri].cells[e.targetId].innerText, potato.ci)
                    }
                    if (1 != a && "INPUT" != o.firstChild.nodeName && "IMG" != o.firstChild.nodeName) {
                        var d = document.createElement("input");
                        d.select(), d.value = o.firstChild.nodeValue, d.setAttribute("autocomplete", "off"), d.style.width = i + "px", d.style.height = "25px", d.style.fontSize = "15px", d.style.fontWeight = "bold", d.style.background = "rgb(255,244,255)", "undefined" != o.firstChild.nodeValue && (o.replaceChild(d, o.firstChild), o.firstChild.select(), o.firstChild.focus());
                        var c = document.createElement("div");
                        c.innerHTML = '<div id="keypadtable"></div>', document.body.appendChild(c);
                        var u = event.clientY + 20;
                        u > 300 && (u = event.clientY - 220);
                        var h = event.clientX;
                        h > 900 && (h = event.clientX - 100), keyID = "keypadtable", $("#keypadtable").load(e.htm).css({
                            width: "200px",
                            height: "150px",
                            margin: e.marginKey,
                            display: "block",
                            position: "absolute",
                            top: u,
                            left: h,
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
            for (var r = document.getElementById(e.id).getElementsByTagName("td"), a = 0; a < r.length; a++) r[a].onkeyup = function(t) {}, "dblclick" == e.trigger ? r[a].ondblclick = l : "click" == e.trigger ? r[a].onclick = l : r[a].ondblclick = l, r[a].onmousemove = function() {}
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
                            a = document.createTextNode(r.firstChild.value), r.replaceChild(a, r.firstChild), i = 1, $("#keypadtable").hide()
                        }
                        if (1 != i && "INPUT" != r.firstChild.nodeName && "IMG" != r.firstChild.nodeName) {
                            var o = document.createElement("input");
                            o.select();
                            var s = r.firstChild.nodeValue;
                            "null" != s && "undefined" != s && null != s && null != s || (s = r.firstChild.innerText), o.value = s, o.setAttribute("autocomplete", "off"), o.style.width = e.editWidth + "px", o.style.height = "25px", o.style.fontSize = "15px", o.style.fontWeight = "bold", o.style.background = "rgb(255,244,255)", "undefined" != r.firstChild.nodeValue && (r.replaceChild(o, r.firstChild), r.firstChild.select(), r.firstChild.focus());
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
                            }), _value = o
                        }
                    }
                } catch (t) {}
            }
            l = e.targetCol;
            for (var a = document.getElementById(i), o = a.getElementsByTagName("td"), s = 0; s < o.length; s++) o[s].onkeyup = function(t) {}, "dblclick" == e.trigger ? o[s].ondblclick = r : "click" == e.trigger ? o[s].onclick = r : o[s].ondblclick = r, o[s].onmousemove = function() {}
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
                a = l.getMonth() + 1;
            a = parseInt(a) < 10 ? "0" + a : a;
            var o = l.getDate();
            return r + e + a + e + (o = parseInt(o) < 10 ? "0" + o : o)
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
                var a = '<div id="div_' + i + '"> ';
                a += '<input type="text" id="' + i + '"> ', a += '<div class="keypad" id="keypad-' + i + '"></div> ', a += "</div> ", this.innerHTML = a, _fieldboard = document.getElementById(i), $("#div_" + i).css({
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
                        a = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                    $("#keypad-" + l).css({
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(n.topKey) + parseFloat(a) + "px",
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
                var a = '<div id="div_' + i + '"> ';
                a += '<input type="text" id="' + i + '"> ', a += '<div class="keypad" id="keypad-' + i + '"></div> ', a += "</div> ", this.innerHTML = a, _value = document.getElementById(i), $("#div_" + i).css({
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
            var e = this,
                i = this.getHTMLElement(),
                n = this._p_(t),
                l = n.id,
                r = this.x;
            i.createdCallback = function() {
                if (this.id = n.id + "_", X.prototype.getAttribute(this, l).index, X.prototype.getAttribute(this, l).field, this.pims = l, "true" == n.disabled || "" == n.disabled) {
                    var t = '<div disabled id="div-' + l + '"> ';
                    t += '<input disabled type="text" id="' + l + '"> '
                }
                if ("false" == n.disabled) {
                    t = '<div id="div-' + l + '"> ';
                    t += '<input type="text" id="' + l + '"> '
                }
                t += '<div class="keypad" id="keypad-' + l + '"></div> ', t += "</div> ", this.innerHTML = "<br>" + t, _value = document.getElementById(l), "potato.now" == n.value && (n.value = e.now), "potato.today()" == n.value && (n.value = e.today()), "potato.now()" == n.value && (n.value = e.now()), $("#div-" + l).css({
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
                    try {
                        for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                    } catch (t) {}
                    keyID = "keypad-" + l, $(".keypad").hide(), $("#keypad-" + l).show(), $("#KeyPad").show();
                    var i = document.documentElement,
                        r = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                        a = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                    if (parseFloat(n.topKey) >= 0) $("#keypad-" + l).css({
                        zIndex: "2000",
                        position: "absolute",
                        top: parseFloat(event.clientY) + 20 + parseFloat(n.topKey) + parseFloat(a) + "px",
                        left: parseFloat(event.clientX) + parseFloat(n.leftKey) - parseFloat(r) + "px"
                    });
                    else {
                        var o = document.getElementById("keypad-" + l).offsetTop;
                        $("#keypad-" + l).css({
                            position: "absolute",
                            top: parseFloat(o) + "px"
                        })
                    }
                    _value = document.getElementById(l);
                    try {
                        n.click()
                    } catch (t) {}
                }).keyup(function(t) {
                    for (var e = 0; e < _POTATOId.length; e++)
                        if (l == String(_POTATOId[e])) {
                            var i = String(_POTATOBindId[e]);
                            document.getElementById(i).innerText = document.getElementById(l).value
                        }
                }), $("#keypad-" + l).load(n.htm).click(function() {
                    for (var t = 0; t < _POTATOId.length; t++)
                        if (l == String(_POTATOId[t])) {
                            var e = String(_POTATOBindId[t]);
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
            }, this._p_e(r, i)
        },
        List: function(t) {
            var i = this.getHTMLElement(),
                l = this.x,
                r = this._p_(t);
            r.id = l, i.createdCallback = function() {
                for (var i = (l.match(/-/g) || []).length, a = l.split("-"), o = a.slice(2, 3), s = 3; s <= i; s++) o = o + "_" + a.slice(s, s + 1);
                this.name = o, this.is = l, this.innerHTML = '<input type="text" id="' + l + '" class="' + r.className + '" > ', this.innerHTML += '<div id="pims-list-' + l + '" class="pims-list"> ', $("#" + l).css({
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
                        a = r.params;
                    if ("block" != document.getElementById("pims-list-" + l).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("pims-list-" + l).style.height == r.heightTable + "px") document.getElementById("pims-list-" + l).style.height = "0px";
                    else {
                        try {
                            pimsListObject.style.display = "none"
                        } catch (t) {}
                        $("#pims-list-" + l).css("display", "block"), _pimS.prototype._rp_(a.model, a, function(t) {
                            var a = JSON.parse(t),
                                o = "<table class='potato-list-table' id='potato-list-table-" + l + "' >",
                                s = 0;
                            for (e in o += "<tr>", a[0]) "" != a[0][e] ? o += "<th>" + a[0][e] + "</th>" : o += "<th style='display:none'>" + a[0][e] + "</th>", s++;
                            for (n in o += "</tr>", a)
                                if ("undefined" != a[n][0] && null != a[n][0] && n > 0) {
                                    o += "<tr>";
                                    for (var d = 0; d < s; d++) "" != a[0][d] ? o += "<td>" + a[n][d] + "</td>" : o += "<td style='display:none'>" + a[n][d] + "</td>";
                                    o += "</tr>"
                                }
                            o += "</table>", document.getElementById("pims-list-" + l).style.height = "0px";
                            var c = i.clientY - r.height - 10 + "px";
                            0 != r.top && (c = r.top + r.height + 10 + "px");
                            var u = i.clientX - r.width / 2 + "px";
                            0 != r.left && (u = r.left + 5 + "px"), pimsListObject = document.getElementById("pims-list-" + l), $("#pims-list-" + l).html(o).show().css({
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
            var i = this,
                l = this.getHTMLElement(),
                r = this.x,
                a = this._p_(t),
                o = a.id;
            "potato.today()" == a.value && (a.value = i.today()), "potato.now()" == a.value && (a.value = i.now()), l.createdCallback = function() {
                if (this.id = o + "_", X.prototype.getAttribute(this, o).index, X.prototype.getAttribute(this, o).field, this.pims = o, this.innerHTML = '<br><input type="text" id="' + o + '"  class="' + a.className + '" > ', this.innerHTML += '<div id="div-' + o + '" onscroll="pims(\'div-' + o + "').scrolly('locked_top',0,0)\" class=\"pims-list\"> ", i._css_id(a, o), $("#" + o).attr({
                        value: a.value,
                        type: a.type
                    }).mousemove(function() {
                        "null" != a.hoverBgColor && $(this).css("background", a.hoverBgColor), $(this).css("color", a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: a.hoverHeight,
                            width: a.hoverWidth,
                            background: "#ffffe5",
                            border: "1px solid black",
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != a.hoverBgColor && $(this).css("background", a.background), $(this).css("color", a.i), $("#" + a.hoverId).hide().html("")
                    }).keyup(function(t) {
                        for (var e = 0; e < _POTATOId.length; e++)
                            if (o == String(_POTATOId[e])) {
                                var i = String(_POTATOBindId[e]);
                                document.getElementById(i).innerText = document.getElementById(o).value
                            }
                        try {
                            a.keyup(t)
                        } catch (t) {}
                    }).change(function() {
                        try {
                            a.change()
                        } catch (t) {}
                    }), String(a.listWidth).split("_").slice(1, 2) == r) var l = String(a.listWidth).split("_").slice(0, 1);
                if (String(a.listHeight).split("_").slice(1, 2) == r) var s = String(a.listHeight).split("_").slice(0, 1);
                if (String(a.listTop).split("_").slice(1, 2) == r) var d = String(a.listTop).split("_").slice(0, 1);
                if (String(a.listLeft).split("_").slice(1, 2) == r) var c = String(a.listLeft).split("_").slice(0, 1);
                if (String(a.params).split("@").slice(1, 2) == r) var u = String(a.params).split("@").slice(0, 1);
                if (String(a.where).split("@").slice(1, 2) == r) var h = String(a.where).split("@").slice(0, 1);
                document.getElementById(o).onclick = function(i) {
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
                    var a = _pimS.prototype._p_(t),
                        p = u;
                    if ("block" != document.getElementById("div-" + o).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("div-" + o).style.height == a.listHeight) document.getElementById("div-" + o).style.height = "0px";
                    else {
                        try {
                            pimsListObject.style.display = "none"
                        } catch (t) {}
                        $("#div-" + o).css("display", "block");
                        var g = a.model,
                            m = [];
                        if (null != h) {
                            var f = X.prototype.getIdClass(String(h));
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
                        if (null != p && "null" != u)
                            for (var v = (String(u).match(/AND/g) || []).length, x = String(u).split("AND"), _ = 0; _ <= v; _++) {
                                var T = String(x.slice(_, _ + 1)).split(":"),
                                    A = new Function(T.slice(1, 2));
                                "null" != String(T.slice(0, 1)).replace(/\s+/g, "") && (m[String(T.slice(0, 1)).replace(/\s+/g, "")] = A())
                            }
                        _pimS.prototype._rp_(g, m, function(t) {
                            var i = JSON.parse(t),
                                u = "<table class='potato-list-table' id='list-" + o + "' >",
                                h = 0;
                            for (e in u += "<tr>", i[0]) "" != i[0][e] ? u += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + i[0][e] + "</th>" : u += "<th style='display:none'>" + i[0][e] + "</th>", h++;
                            for (n in u += "</tr>", i)
                                if ("undefined" != i[n][0] && null != i[n][0] && n > 0) {
                                    u += "<tr>";
                                    for (var p = 0; p < h; p++) "" != i[0][p] ? u += "<td>" + i[n][p] + "</td>" : u += "<td style='display:none'>" + i[n][p] + "</td>";
                                    u += "</tr>"
                                }
                            u += "</table>", document.getElementById("div-" + o).style.height = "0px";
                            var g = String(d).split("px"),
                                m = String(c).split("px");
                            pimsListObject = document.getElementById("div-" + o), $("#div-" + o).html(u).css({
                                transition: "height 0.1s linear",
                                position: "absolute",
                                left: events.clientLeft + parseFloat(m.slice(0, 1)) + "px",
                                top: events.clientTop + parseFloat(g.slice(0, 1)) + "px",
                                height: s,
                                width: l,
                                overflow: "auto",
                                border: "0px solid black",
                                borderRadius: 0,
                                background: "transparent",
                                zIndex: 1e4
                            }), $("#list-" + o + " td").css({
                                fontFamily: a.fontFamily,
                                fontWeight: a.fontWeight,
                                fontSize: a.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById("list-" + o),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                if ("閉じる" != t.rows[e].cells[0].innerText && "CLOSE" != t.rows[e].cells[0].innerText) {
                                    POTATO(o).value(t.rows[e].cells[0].innerText);
                                    for (var n = 0; n < _POTATOId.length; n++)
                                        if (o == String(_POTATOId[n])) {
                                            var l = String(_POTATOBindId[n]);
                                            document.getElementById(l).innerText = document.getElementById(o).value
                                        }
                                } else $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), $("#div-" + o).html("");
                                try {
                                    a.click(t.rows[e], r, i), $("#div-" + o).html("")
                                } catch (t) {}
                                document.getElementById("div-" + o).style.height = "0px"
                            }), $("#list-" + o + " th").css("cursor", "pointer").click(function() {
                                var t = document.getElementById("list-" + o),
                                    e = $(this).parent().parent().children().index(this.parentNode);
                                ci = $(this).parent().children().index(this), $(".pims-list").css({
                                    display: "none",
                                    height: "0px"
                                }), $("#div-" + o).hide().html(""), document.getElementById(o).style.background = a.background;
                                try {
                                    a.click(t.rows[e], r, ci)
                                } catch (t) {}
                                document.getElementById("div-" + o).style.height = "0px"
                            });
                            try {
                                a.callback(r)
                            } catch (t) {}
                        })
                    }
                }
            }, this._p_e(r, l)
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
                a = r.id;
            i.createdCallback = function() {
                this.id = a + "_", this.pims = a;
                var i = r.menuTitle.split(","),
                    o = r.menuModel.split(",");
                this.innerHTML = "<table><tr>";
                for (var s = 0; s < i.length; s++) this.innerHTML += '<td><a id="' + a + "-" + i[s] + '" name="' + o[s] + '" class="' + r.id + '" >' + i[s] + "</a></td>", $("#" + a + "-" + i[s]).css({
                    width: r.width,
                    height: r.height,
                    color: r.color,
                    background: r.background,
                    boxShadow: r.boxShadow,
                    fontFamily: r.fontFamily,
                    fontWeight: r.fontWeight,
                    fontSize: r.fontSize,
                    textAlign: r.textAlign,
                    padding: r.padding,
                    margin: r.margin,
                    border: r.border,
                    textDecoration: "underline",
                    borderRadius: r.borderRadius,
                    textTransform: r.textTransform,
                    position: r.position,
                    left: r.left,
                    top: r.top,
                    float: r.float,
                    cursor: "pointer"
                }).mouseover(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.hoverBgColor), $(this).css("color", r.hoverColor), "" != r.hoverText && $("#" + r.hoverId).html(r.hoverText).show().css({
                        fontSize: "15px",
                        fontFamily: "Arial",
                        padding: "3px 3px 3px 3px",
                        height: r.hoverHeight,
                        width: r.hoverWidth,
                        background: "#ffffe5",
                        border: "1px solid black",
                        position: "absolute",
                        top: event.clientY + 30 + "px",
                        left: event.clientX - 20 + "px",
                        borderRadius: "3px"
                    })
                }).mouseout(function() {
                    "null" != r.hoverBgColor && $(this).css("background", r.background), $(this).css("color", r.i), $("#" + r.hoverId).hide().html("")
                }).keyup(function(t) {
                    for (var e = 0; e < _POTATOId.length; e++)
                        if (a == String(_POTATOId[e])) {
                            var i = String(_POTATOBindId[e]);
                            document.getElementById(i).innerText = document.getElementById(a).value
                        }
                    try {
                        r.keyup(t)
                    } catch (t) {}
                }).change(function() {
                    try {
                        r.change()
                    } catch (t) {}
                });
                if (this.innerHTML += "</tr></table>", this.innerHTML += '<div id="div-' + a + '" onscroll="pims(\'div-' + a + "').scrolly('locked_top',0,0)\" class=\"" + r.id + '"> ', String(r.widthTable).split("_").slice(1, 2) == l) var d = String(r.widthTable).split("_").slice(0, 1);
                if (String(r.heightTable).split("_").slice(1, 2) == l) var c = String(r.heightTable).split("_").slice(0, 1);
                if (String(r.marginTop).split("_").slice(1, 2) == l) var u = String(r.marginTop).split("_").slice(0, 1);
                if (String(r.marginLeft).split("_").slice(1, 2) == l) var h = String(r.marginLeft).split("_").slice(0, 1);
                if (String(r.params).split("@").slice(1, 2) == l) var p = String(r.params).split("@").slice(0, 1);
                if (String(r.where).split("@").slice(1, 2) == l) var g = String(r.where).split("@").slice(0, 1);
                $("." + a).mouseenter(function(i) {
                    _POTATOMenu = 1;
                    var r = _pimS.prototype._p_(t),
                        o = p;
                    if ("block" != document.getElementById("div-" + a).style.display && $(".pims-list").css({
                            display: "none",
                            height: "0px"
                        }), document.getElementById("div-" + a).style.height == r.heightTable + "px") document.getElementById("div-" + a).style.height = "0px";
                    else {
                        $("#div-" + a).css("marginTop", "-2px");
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
                        if (null != o && "null" != p)
                            for (var v = (String(p).match(/AND/g) || []).length, x = String(p).split("AND"), _ = 0; _ <= v; _++) {
                                var T = String(x.slice(_, _ + 1)).split(":"),
                                    A = new Function(T.slice(1, 2));
                                "null" != String(T.slice(0, 1)).replace(/\s+/g, "") && (m[String(T.slice(0, 1)).replace(/\s+/g, "")] = A())
                            }
                        _pimS.prototype._rp_(s, m, function(t) {
                            var i = JSON.parse(t);
                            check_model = 1;
                            var o = "<table class='potato-menu-table' id='" + a + "' >",
                                s = 0;
                            for (e in o += "<tr>", i[0]) "" != i[0][e] ? o += "<th>" + i[0][e] + "</th>" : o += "<th style='display:none'>" + i[0][e] + "</th>", s++;
                            for (n in o += "</tr>", i)
                                if ("undefined" != i[n][0] && null != i[n][0] && n > 0) {
                                    o += "<tr>";
                                    for (var p = 0; p < s; p++) "" != i[0][p] ? o += "<td>" + i[n][p] + "</td>" : o += "<td style='display:none'>" + i[n][p] + "</td>";
                                    o += "</tr>"
                                }
                            o += "</table>", document.getElementById("div-" + a).style.height = "0px";
                            var g = parseFloat(u) + "px",
                                m = parseFloat(h) + "px";
                            pimsListObject = document.getElementById("div-" + a), document.getElementById("div-" + a).style.display = "block", $("#div-" + a).html(o).css({
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
                            }), $("#" + a + " td").css({
                                textAlign: "left",
                                fontFamily: r.fontFamily,
                                fontWeight: r.fontWeight,
                                fontSize: r.fontSize + "px"
                            }).click(function() {
                                var t = document.getElementById(a),
                                    e = $(this).parent().parent().children().index(this.parentNode),
                                    i = $(this).parent().children().index(this);
                                potato.table = t.rows[e], potato.ci = i;
                                try {
                                    r.click(t.rows[e], l, i), $("#div-" + a).html("")
                                } catch (t) {}
                                document.getElementById("div-" + a).style.height = "0px"
                            }), $("#" + a + " th").css("cursor", "pointer").click(function() {
                                $("#div-" + a).css("display", "none")
                            });
                            try {
                                r.callback(l)
                            } catch (t) {}
                        })
                    }
                }), $("." + a).mouseleave(function(t) {
                    _POTATOMenu = 0
                }), $(document).mouseover(function(t) {
                    0 == _POTATOMenu && $("#div-" + a).css("display", "none")
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
                else(o = document.getElementById(String(e).split("#").slice(1, 2))).onmousemove = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), a = 0; a < r.length; a++)
                        for (n = r[a].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmousemove = t
                } else {
                    var o = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (a = 0; a < o.length; a++) o[a].onmousemove = t
                }
        },
        MOUSEOUT: function(t) {
            var e = this.x;
            if (-1 != e.indexOf("#"))
                if (-1 != e.indexOf(" td"))
                    for (var i = String(e).split(" "), n = (r = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmouseout = t;
                else(o = document.getElementById(String(e).split("#").slice(1, 2))).onmouseout = t;
            if (-1 != e.indexOf("."))
                if (-1 != e.indexOf(" td")) {
                    i = String(e).split(" ");
                    for (var r = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), a = 0; a < r.length; a++)
                        for (n = r[a].getElementsByTagName("td"), l = 0; l < n.length; l++) n[l].onmouseout = t
                } else {
                    var o = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                    for (a = 0; a < o.length; a++) o[a].onmouseout = t
                }
        },
        MultipleSelect: function(t) {
            var e, i = this._p_(t),
                n = i.id,
                l = document.getElementById(n),
                r = [],
                a = [],
                o = 0;
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
                    if (-1 == String(c.cells[s].innerHTML).indexOf(i.markSymbol)) a[o] = c.cells[d].innerText, o++, c.cells[s].innerHTML = '<font style="font-weight:bold;color:red;background:yellow">' + i.markSymbol + "</font>" + c.cells[s].innerHTML;
                    else {
                        var u = String(c.cells[s].innerHTML).split(i.markSymbol);
                        c.cells[s].innerHTML = u.slice(1, 2);
                        for (var h = 0; h < a.length; h++) a[h] == c.cells[d].innerText && (a[h] = "")
                    }
                    r = [];
                    var p = 0;
                    for (h = 0; h < a.length; h++)
                        if ("" != a[h] && "undefined" != a[h]) {
                            for (var g = 0, m = 0; m < r.length; m++) r[m] == a[h] && (g = 1);
                            0 == g && (r[p] = a[h], p++)
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
                a = t.getFullYear();
            return _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(n) < 10 ? "0" + n : n, _pimS.month = parseInt(l) < 10 ? "0" + l : l, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.year = a, _pimS.title = "_POTATO", _pimS.hour + ":" + _pimS.minute + ":" + _pimS.second
        },
        obj: function(t) {
            t = String(t).toLowerCase();
            return document.getElementById(t)
        },
        optionText: function() {
            return document.getElementById(this.x).options[document.getElementById(this.x).selectedIndex].text
        },
        _p_: function(t) {
            var e, i, n, l, r, a, o, s, d, c, u, h, p, g, m, f, y, b, v, x, _, T, A, S, w, k, C, I, O, E, B, $, F, P, L, D, N, R, H, X, M, z, W, j, K, U, V, Y, q, G, J, Q, Z, tt, et, it, nt, lt, rt, at, ot, st, dt, ct, ut, ht, pt, gt, mt, ft, yt, bt, vt, xt, _t, Tt, At, St, wt, kt, Ct, It, Ot, Et, Bt, $t, Ft, Pt, Lt, Dt, Nt, Rt, Ht, Xt, Mt, zt, Wt, jt, Kt, Ut, Vt, Yt, qt, Gt, Jt, Qt, Zt, te, ee, ie, ne, le, re, ae, oe, se, de, ce, ue, he, pe = new Array;
            return this.clearArrays(), t(), null == (qt = css.textTransform) && (qt = "none"), e = css.background, i = css.border, n = css.borderRadius, l = css.boxShadow, null == (r = events.callback) && (r = this.dummy()), null == (a = attr.canvas) && (a = "chart"), null == (o = param.cell) && (o = "0"), null == (d = attr.chartType) && (d = "pie"), null == (c = attr.chartId) && (c = "chart1Id"), null == (g = param.col) && (g = 1e3), null == (f = css.colorIndex) && (f = ["#c5ffb3"]), null == (s = events.change) && (s = this.dummy()), null == (u = attr.className) && (u = "pimsClassName"), null == (h = events.click) && (h = this.dummy()), null == (p = attr.cls) && (p = ""), null == (y = attr.container) && (y = "container"), m = css.color, null == (b = css.cursor) && (b = "default"), null == (v = css.dataFontSize) && (v = 12), null == (x = attr.dataLabel) && (x = "data"), null == (_ = attr.dataLabel2) && (_ = "data"), null == (T = attr.disabled) && (T = !1), A = css.display, null == (S = css.displayKey) && (S = "none"), null == (w = param.editWidth) && (w = 100), null == (k = param.fieldClass) && (k = 0), D = css.float, C = css.fontColorTD, I = css.fontColorTH, O = css.fontFamily, E = css.fontFamilyTD, B = css.fontFamilyTH, $ = css.fontSize, F = css.fontSizeTD, P = css.fontSizeTH, N = css.fontWeight, null == (L = attr.format) && (L = "yy-mm-dd"), null == (R = param.header) && (R = "0"), H = css.height, null == (X = css.heightTable) && (X = 450), null == (M = events.hover) && (M = this.dummy()), z = css.hoverColor, null == (W = css.hoverBgColor) && (W = "null"), j = attr.hoverId, null == (K = attr.hoverText) && (K = ""), null == (V = css.hoverHeight) && (V = 30), null == (U = css.hoverWidth) && (U = ""), null == (Y = param.htm) && (Y = "config/keypad.htm"), q = attr.id, null == (G = param.idCol) && (G = 0), image = attr.image, null == image && (image = "nil 0 0"), J = attr.imageDir, null == (Q = css.imgWidth) && (Q = 45), null == (Z = css.imgHeight) && (Z = 45), null == (tt = events.keyup) && (tt = this.dummy()), null == (nt = css.labelFontSize) && (nt = 12), null == (lt = css.label2FontSize) && (lt = 12), null == (et = attr.labelString) && (et = ""), null == (it = attr.label2String) && (it = ""), ot = css.left, null == (st = css.leftKey) && (st = 0), null == (rt = css.legendDisplay) && (rt = !1), null == (at = css.legendPosition) && (at = "bottom"), null == (dt = events.listClick) && (dt = this.dummy()), ct = css.listHeight, ut = css.listLeft, pt = css.listWidth, ht = css.listTop, gt = css.margin, mt = css.marginBottom, St = css.marginLeft, ft = css.marginRight, wt = css.marginTop, null == (vt = param.markSymbol) && (vt = ""), null == (yt = param.matchCol) && (yt = "-"), null == (bt = param.matchValue) && (bt = "-"), null == (At = css.marginKey) && (At = "0px 0px 0px 0px"), null == (xt = param.menuModel) && (xt = "null"), null == (_t = param.menuTitle) && (_t = "null"), kt = param.model, null == (Tt = attr.multiple) && (Tt = !1), Ct = attr.name, null == (It = attr.onscroll) && (It = this.dummy()), Ot = css.padding, css.paddingBottom, Et = css.paddingLeft, css.paddingRight, Bt = css.paddingTop, null == ($t = css.pointBorderColorIndex) && ($t = ["#000000"]), null == (Ft = css.pointBorderDash) && (Ft = [0]), null == (Pt = css.pointBorderWidth) && (Pt = [1]), null == (Lt = css.pointColorIndex) && (Lt = ["#c5ffb3"]), null == (Dt = css.pointRadius) && (Dt = ["5"]), null == (Nt = css.pointStyle) && (Nt = ["triangle"]), Rt = css.position, null == (Ht = param.row) && (Ht = "0"), null == (Xt = param.selectCol) && (Xt = ""), null == (Mt = param.selectColumn) && (Mt = ""), null == (zt = css.showDay) && (zt = !1), null == (Wt = attr.stacked) && (Wt = !1), null == (jt = attr.tableId) && (jt = "tableId"), null == (Ut = param.targetId) && (Ut = 0), null == (Vt = attr.targetIndex) && (Vt = 0), null == (Kt = param.targetColumn) && (Kt = ""), null == (pe = param.targetCol) && (pe = ""), null == (Yt = attr.targetColor) && (Yt = "WHITE"), Gt = css.textAlign, null == (Jt = attr.title) && (Jt = ""), null == (Qt = css.titleFontSize) && (Qt = 25), null == (Zt = attr.tooltips) && (Zt = !0), te = css.top, null == (ee = css.topKey) && (ee = 0), null == (ie = events.trigger) && (ie = "ondblclick"), null == (ne = attr.type) && (ne = "text"), null == (le = attr.value) && (le = ""), null == (oe = param.whereClass) && (oe = 0), re = css.width, null == (ae = css.widthTable) && (ae = 130), null == (se = css.xAxesFontSize) && (se = 12), null == (de = css.xlabelAngle) && (de = 0), null == (ce = css.yAxesFontSize) && (ce = 12), null == (ue = css.y2AxesFontSize) && (ue = 12), null == (he = attr.y2AxesType) && (he = ""), {
                background: e,
                border: i,
                borderRadius: n,
                boxShadow: l,
                canvas: a,
                change: s,
                callback: r,
                cell: o,
                chartId: c,
                chartType: d,
                className: u,
                click: h,
                cls: p,
                col: g,
                color: m,
                colorIndex: f,
                container: y,
                cursor: b,
                data: data,
                dataFontSize: v,
                dataLabel: x,
                dataLabel2: _,
                disabled: T,
                display: A,
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
                fontSize: $,
                fontSizeTD: F,
                fontSizeTH: P,
                fontWeight: N,
                format: L,
                header: R,
                height: H,
                heightTable: X,
                hover: M,
                hoverBgColor: W,
                hoverColor: z,
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
                left: ot,
                leftKey: st,
                legendDisplay: rt,
                legendPosition: at,
                listClick: dt,
                listHeight: ct,
                listLeft: ut,
                listWidth: pt,
                listTop: ht,
                marginKey: At,
                markSymbol: vt,
                margin: gt,
                marginBottom: mt,
                marginLeft: St,
                marginRight: ft,
                marginTop: wt,
                matchCol: yt,
                matchValue: bt,
                menuModel: xt,
                menuTitle: _t,
                model: kt,
                multiple: Tt,
                name: Ct,
                onscroll: It,
                padding: Ot,
                paddingLeft: Et,
                paddingTop: Bt,
                params: params,
                pointBorderColorIndex: $t,
                pointBorderDash: Ft,
                pointBorderWidth: Pt,
                pointColorIndex: Lt,
                pointRadius: Dt,
                pointStyle: Nt,
                position: Rt,
                row: Ht,
                selectCol: Xt,
                selectColumn: Mt,
                showDay: zt,
                stacked: Wt,
                tableId: jt,
                targetIndex: Vt,
                targetColor: Yt,
                targetColumn: Kt,
                targetCol: pe,
                targetId: Ut,
                textAlign: Gt,
                textTransform: qt,
                title: Jt,
                titleFontSize: Qt,
                tooltips: Zt,
                top: te,
                topKey: ee,
                trigger: ie,
                type: ne,
                value: le,
                where: where,
                whereClass: oe,
                width: re,
                widthTable: ae,
                xAxesFontSize: se,
                xlabelAngle: de,
                yAxesFontSize: ce,
                y2AxesFontSize: ue,
                y2AxesType: he
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
                        extends: __p.prototype.l(_pcnst().lp)
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
            for (var r in t) {
                if ("WHERE" == r) {
                    l = 1;
                    for (var a in t[r]) {
                        if ("class" == a)
                            for (var o = X.prototype.getIdClass(t[r][a]), s = 0; s < o.length; s++) {
                                var d = String(o[s].id).split("-").slice(2, 3);
                                n[o[s].field] = POTATO("#" + d).value
                            }
                        "class" != a && (n[a] = t[r][a])
                    }
                }
                if ("FIELD" == r) {
                    l = 1;
                    var c = "",
                        u = "";
                    for (var a in t[r]) {
                        if ("class" == a)
                            for (o = X.prototype.getIdClass(t[r][a]), s = 1; s < o.length; s++) {
                                c += o[s].field + ",";
                                d = String(o[s].id).split("-").slice(2, 3);
                                u += "'" + POTATO("#" + d).value + "',"
                            }
                        "class" != a && (c += a + ",", u += "'" + t[r][a] + "',", s++)
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
                r = this.x,
                a = n.split("-"),
                o = a.slice(2, 3);
            a.slice(2, 3);
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
                for (var c = (String(s).match(/AND/g) || []).length, u = String(s).split("AND"), h = 0; h <= c; h++) {
                    var p = String(u.slice(h, h + 1)).split(":"),
                        g = new Function(p.slice(1, 2));
                    "null" != String(p.slice(0, 1)).replace(/\s+/g, "") && (d[String(p.slice(0, 1)).replace(/\s+/g, "")] = String(g()).split(","))
                }
            pims().Post(l, d, function(t) {
                var i = new Array;
                i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                for (var l = 0; l < t.length; l++)
                    for (var a = 0; a < i.length; a++) i[a][l] = t[l][a];
                var s = document.getElementById(r);
                s.innerHTML = "", $("#" + r).append('<canvas id="canvas-' + o + '" >読み込み中．．．</canvas>');
                var d = document.getElementById("canvas-" + o);
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
                var h = i[3][0];
                if ($("#note-doughnut-" + o).show().html(h).css("border", "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var p = String(i[0][0]).split("-"),
                    g = e.imageDir + p[0] + "-" + String(p[1]).substring(0, 1) + ".jpg";
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
                                        r = l.data[n]._model,
                                        a = l.total,
                                        o = r.innerRadius + (r.outerRadius - r.innerRadius) / 2,
                                        s = r.startAngle,
                                        d = s + (r.endAngle - s) / 2,
                                        c = o * Math.cos(d),
                                        u = o * Math.sin(d);
                                    i.fillStyle = "#000";
                                    var h = String(Math.round(e.data[n] / a * 100)) + "%";
                                    if (n < e.data.length - 1) {
                                        var p = r.x + c + 70;
                                        u > 0 && c < 0 && (p = r.x + c - 50), i.fillText(t[n][0] + ": " + t[n][1] + ", " + h, p, r.y + u + 8)
                                    }
                                }
                                h = String(Math.round(e.data[e.data.length - 1] / a * 100)) + "%";
                                i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + h, r.x + c, r.y + 2 * u)
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
                l = (t = String(t).toUpperCase(), _POTATOElement[t]),
                r = l.getAttribute("model"),
                a = String(l.getAttribute("chartType")).toLowerCase();
            null == a && (a = "bar");
            var o = l.getAttribute("border");
            null == o && (o = "1px solid black");
            var s = l.getAttribute("background");
            null == s && (s = "transparent");
            var d = l.getAttribute("titleDisplay");
            null == d && (d = !0);
            var c = l.getAttribute("titleFontSize");
            null == c && (c = 25);
            var u = l.getAttribute("legendDisplay");
            null == u && (u = !0);
            var h = l.getAttribute("legendPosition");
            null == h && (h = "bottom");
            var p = l.getAttribute("labelFontSize");
            null == p && (p = 12);
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
            var _ = l.getAttribute("y2AxesType");
            null == _ && (_ = "line");
            var T = l.getAttribute("click");
            if (null != T) {
                var A = l.localName;
                n[String(A)] = new Function(T)
            }
            var S = l.getAttribute("hover");
            if (null != S) {
                A = l.localName;
                i[String(A)] = new Function(S)
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
                $ = ($ = new Function(l.getAttribute("y2AxesTitle")))()
            } catch (t) {
                var $;
                null == ($ = l.getAttribute("y2AxesTitle")) && ($ = "")
            }
            null != $ && "undefined" != $ || null == ($ = l.getAttribute("y2AxesTitle")) && ($ = "");
            try {
                F = (F = new Function(l.getAttribute("showDay")))()
            } catch (t) {
                var F;
                null == (F = l.getAttribute("showDay")) && (F = !0)
            }
            null != F && "undefined" != F || null == (F = l.getAttribute("showDay")) && (F = !0);
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
                N = (N = new Function(l.getAttribute("dataLabel")))()
            } catch (t) {
                var N;
                null == (N = l.getAttribute("dataLabel")) && (N = "data")
            }
            null != N && "undefined" != N || null == (N = l.getAttribute("dataLabel")) && (N = "data");
            try {
                R = (R = new Function(l.getAttribute("dataLabel2")))()
            } catch (t) {
                var R;
                null == (R = l.getAttribute("dataLabel2")) && (R = "data")
            }
            null != R && "undefined" != R || null == (R = l.getAttribute("dataLabel2")) && (R = "data");
            try {
                var H = new Function(l.getAttribute("colorIndex"));
                H = String(H()).split(",")
            } catch (t) {
                try {
                    H = l.getAttribute("colorIndex").split(",")
                } catch (t) {}
                null == H && (H = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
            }
            if (null == H || "undefined" == H) {
                try {
                    H = String(l.getAttribute("colorIndex")).split(",")
                } catch (t) {}
                null == H && (H = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
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
                var M = new Function(l.getAttribute("pointBorderDash"));
                M = String(M()).split(",")
            } catch (t) {
                try {
                    M = String(l.getAttribute("pointBorderDash")).split(",")
                } catch (t) {}
                null == M && (M = [0, 0, 0, 0, 0])
            }
            if (null == M || "undefined" == M) {
                try {
                    M = l.getAttribute("pointBorderDash").split(",")
                } catch (t) {}
                null == M && (M = [0, 0, 0, 0, 0])
            }
            try {
                var z = new Function(l.getAttribute("pointBorderWidth"));
                z = String(z()).split(",")
            } catch (t) {
                try {
                    z = String(l.getAttribute("pointBorderWidth")).split(",")
                } catch (t) {}
                null == z && (z = ["1", "1", "1", "1", "1"])
            }
            if (null == z || "undefined" == z) {
                try {
                    z = l.getAttribute("pointBorderWidth").split(",")
                } catch (t) {}
                null == z && (z = ["1", "1", "1", "1", "1"])
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
            null == K && (K = ["5", "5", "8", "8"]), "false" != e && 0 != e && ("pie" != a ? pims(l.localName)._b_(function() {
                params = C + "@" + l.localName, css = {
                    display: d,
                    background: s,
                    border: o,
                    height: P,
                    width: L,
                    fontSize: v,
                    legendDisplay: u,
                    legendPosition: h,
                    colorIndex: H,
                    pointBorderColorIndex: X,
                    pointBorderDash: M,
                    pointBorderWidth: z,
                    pointColorIndex: W,
                    pointStyle: j,
                    pointRadius: K,
                    showDay: F,
                    xlabelAngle: D,
                    labelFontSize: p,
                    label2FontSize: g,
                    yAxesFontSize: m,
                    y2AxesFontSize: f,
                    xAxesFontSize: y,
                    dataFontSize: b,
                    titleFontSize: c
                }, attr = {
                    chartType: a,
                    title: x,
                    labelString: B,
                    label2String: $,
                    y2AxesType: _,
                    stacked: O,
                    tooltips: E,
                    dataLabel: N,
                    dataLabel2: R
                }, param = {
                    model: r
                }, null != T && (events = {
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
                    border: o,
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
                }, null != T && (events = {
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
            var a = n.getAttribute("width");
            null == a && (a = 600);
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
            var h = n.getAttribute("titleFontSize");
            null == h && (h = 25);
            var p = n.getAttribute("title");
            null == p && (p = "_dn_ Chart");
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
                    width: a,
                    fontSize: s,
                    display: u,
                    dataFontSize: o,
                    titleFontSize: h
                }, attr = {
                    imageDir: d,
                    title: p
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
            var a = n.getAttribute("width");
            null == a && (a = 600);
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
            var h = n.getAttribute("click");
            if (null != h) {
                var p = n.localName;
                i[String(p)] = new Function(h)
            }
            var g = new Function(n.getAttribute("callback")),
                m = n.getAttribute("params");
            "false" != e && pims(n.localName).Radar(function() {
                params = m + "@" + n.localName, css = {
                    border: l,
                    height: r,
                    width: a,
                    fontSize: s,
                    display: d,
                    dataFontSize: o,
                    titleFontSize: c
                }, attr = {
                    title: u
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
            var e, i = _POTATOElement[t],
                n = i.getAttribute("id"),
                l = String(i.localName).split("-");
            null == n && (n = String(l.slice(2, 3)).toLowerCase());
            var r = i.getAttribute("model");
            null == r && (r = String(l.slice(2, 3)).toLowerCase() + ".php");
            var a = i.getAttribute("header");
            null == a && (a = "");
            var o = i.getAttribute("border");
            null == o && (o = "0px solid black");
            var s = i.getAttribute("borderRadius");
            null == s && (s = 0);
            var d = i.getAttribute("fontColorTD"),
                c = i.getAttribute("fontColorTH"),
                u = i.getAttribute("fontFamilyTD"),
                h = i.getAttribute("fontFamilyTH"),
                p = i.getAttribute("fontSizeTD"),
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
            var _ = i.getAttribute("editWidth");
            null == _ && (_ = 50);
            i.getAttribute("selectCols");
            var T = i.getAttribute("targetCol");
            null == T && (T = 0);
            var A = i.getAttribute("markSymbol");
            null == A && (A = "★"), null != i.getAttribute("selectCellCallback") && new Function(i.getAttribute("selectCellCallback"));
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
                    border: o,
                    borderRadius: s,
                    height: m,
                    width: f,
                    fontFamilyTD: u,
                    fontFamilyTH: h,
                    fontColorTD: d,
                    fontColorTH: c,
                    fontSizeTD: p,
                    fontSizeTH: g
                }, attr = {
                    id: n
                }, param = {
                    model: r,
                    header: a,
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
                for (var a in i)
                    if ("undefined" != i[a].d0 && null != i[a].d0) {
                        var o = i[a].d1;
                        T = i[a].d0, e[n] = new Option(o, T), n++
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
                a = l + ".php",
                o = "",
                s = [],
                d = 0;
            for (var c in t) {
                if (d++, "WHERE" == c) {
                    var u = 0;
                    for (var h in t[c]) {
                        if ("class" == h)
                            for (var p = X.prototype.getIdClass(t[c][h]), g = 0; g < p.length; g++) s[p[g].field] = pims(p[g].is).value();
                        "class" != h && (s[h] = t[c][h])
                    }
                }
                if ("FIELD" == c) {
                    u = 0, o = "";
                    var m, f = [],
                        y = [],
                        b = 0;
                    for (var h in t[c]) {
                        if ("class" == h) {
                            b = 1, m = (p = X.prototype.getIdClass(t[c][h]))[0].field;
                            for (g = 0; g < p.length; g++) {
                                var v = String(p[g].pims).split("-");
                                f[v.slice(1, 2)] = p[g].field + ",", y[v.slice(1, 2)] = p[g].pims
                            }
                            u = parseFloat(v.slice(1, 2))
                        }
                        "class" != h && (1 == b ? f[u + 1] = h + "," : f[u] = h + ",", m = h, u++)
                    }
                    f[f.length] = m;
                    for (g = 0; g < f.length; g++) o += f[g];
                    s.fields = o
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
            }, this._rp_(a, s, function(t) {
                var e = document.getElementById(r),
                    n = JSON.parse(t);
                e.length = 0;
                var l = 0;
                for (var a in n)
                    if ("undefined" != n[a][0] && null != n[a][0]) {
                        var o = n[a][1];
                        T = n[a][0], e[l] = new Option(o, T), l++
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
        _attr_: function(t, e, i) {
            var n = this._se_a(e, t, "disabled", "false"),
                l = t.getAttribute("id");
            null == l && (l = String(i.slice(2, 3)).toLowerCase());
            var r = this._se_a(e, t, "hoverId", "potatoHoverText"),
                a = this._se_a(e, t, "hoverText", ""),
                o = this._se_a(e, t, "cursor", "default");
            return {
                disabled: n,
                value: this._se_a(e, t, "value", "0"),
                hoverText: a,
                hoverId: r,
                cursor: o,
                id: l,
                name: l
            }
        },
        _css_: function(t, e, i) {
            var n = this._se_a(e, t, "background", "#ffffff"),
                l = this._se_a(e, t, "border", "1px solid black"),
                r = this._se_a(e, t, "borderRadius", "5px"),
                a = this._se_a(e, t, "boxShadow", "0 0 0px rgba(0,0,0,0)"),
                o = this._se_a(e, t, "color", "black"),
                s = this._se_a(e, t, "cursor", "pointer"),
                d = this._se_a(e, t, "display", "block"),
                c = this._se_a(e, t, "fontFamily", "Tempus Sans ITC"),
                u = this._se_a(e, t, "float", "null"),
                h = this._se_a(e, t, "fontSize", "15px"),
                p = this._se_a(e, t, "fontWeight", "normal"),
                g = this._se_a(e, t, "height", "30px"),
                m = this._se_a(e, t, "hoverBgColor", "yellow"),
                f = this._se_a(e, t, "listHeight", "350px"),
                y = this._se_a(e, t, "listLeft", "0px"),
                b = this._se_a(e, t, "listTop", "0px"),
                v = this._se_a(e, t, "listWidth", "300px"),
                x = this._se_a(e, t, "margin", "2px 2px 2px 2px"),
                _ = this._se_a(e, t, "marginBottom", "2px"),
                T = this._se_a(e, t, "marginLeft", "2px"),
                A = this._se_a(e, t, "marginRight", "2px"),
                S = this._se_a(e, t, "marginTop", "-10px"),
                w = this._se_a(e, t, "padding", "5px 0px 5px 5px"),
                k = this._se_a(e, t, "paddingBottom", "1px"),
                C = this._se_a(e, t, "paddingLeft", "1px"),
                I = this._se_a(e, t, "paddingRight", "1px"),
                O = this._se_a(e, t, "paddingTop", "1px"),
                E = this._se_a(e, t, "textAlign", "center"),
                B = this._se_a(e, t, "width", "100px"),
                $ = this._se_a(e, t, "left", "0px"),
                F = this._se_a(e, t, "top", "0px");
            return {
                background: n,
                border: l,
                borderRadius: r,
                boxShadow: a,
                color: o,
                cursor: s,
                display: d,
                float: u,
                fontFamily: c,
                fontSize: h,
                fontWeight: p,
                height: g,
                hoverBgColor: m,
                left: $,
                listHeight: f + "_" + i,
                listLeft: y + "_" + i,
                listTop: b + "_" + i,
                listWidth: v + "_" + i,
                margin: x,
                marginBottom: _,
                marginLeft: T,
                marginRight: A,
                marginTop: S,
                padding: w,
                paddingBottom: k,
                paddingLeft: C,
                paddingRight: I,
                paddingTop: O,
                position: this._se_a(e, t, "position", "static"),
                textAlign: E,
                top: F,
                width: B
            }
        },
        _se_: function() {
            var t, e = document.getElementsByTagName("*"),
                i = [],
                n = [],
                l = [],
                r = [],
                a = [],
                o = [],
                s = [],
                d = [],
                c = 0;
            for (t = 0; t < e.length; t++) {
                var u = e[t].getAttribute("bind");
                if (null != u) {
                    if (_POTATOId[c] = u, null != e[t].getAttribute("id")) _POTATOBindId[c] = e[t].getAttribute("id");
                    else {
                        var h = String(e[t].tagName).split("-");
                        _POTATOBindId[c] = String(h.slice(2, 3)).toLowerCase()
                    }
                    c++
                }
                var p = String(e[t].tagName).split("-");
                if (-1 != this.If(p.slice(0, 1))) {
                    var g, m, f = String(e[t].tagName).split("-");
                    if ("BUTTON" == f.slice(1, 2)) {
                        var y = e[t].getAttribute("style"),
                            b = "true";
                        "" == (b = this._se_a(y, e[t], "disabled", "false")) && (b = "true");
                        var v = e[t].getAttribute("id");
                        null == v && (v = String(f.slice(2, 3)).toLowerCase());
                        var x, _, T = this._se_a(y, e[t], "hoverId", "potatoHoverText"),
                            A = this._se_a(y, e[t], "hoverText", ""),
                            S = (this._se_a(y, e[t], "left", "0px"), this._se_a(y, e[t], "top", "0px"), this._se_a(y, e[t], "position", "static"), this._se_a(y, e[t], "value", "")),
                            w = e[t].getAttribute("submit"),
                            k = e[t].getAttribute("fieldOther"),
                            C = e[t].getAttribute("params"),
                            I = e[t].getAttribute("whereClass"),
                            O = this._css_(e[t], y);
                        pims(e[t].localName)._bt_(function() {
                            if (where = I + "@" + e[t].localName, field = w + "@" + e[t].localName, fieldOther = k + "@" + e[t].localName, params = C + "@" + e[t].localName, css = O, null != e[t].getAttribute("value") && null != e[t].getAttribute("image") ? attr = {
                                    disabled: b,
                                    value: S,
                                    image: e[t].getAttribute("image"),
                                    hoverText: A,
                                    hoverId: T,
                                    id: v
                                } : null != e[t].getAttribute("value") && null == e[t].getAttribute("image") ? attr = {
                                    disabled: b,
                                    value: e[t].getAttribute("value"),
                                    hoverText: A,
                                    hoverId: T,
                                    id: v
                                } : null == e[t].getAttribute("value") && null != e[t].getAttribute("image") && (attr = {
                                    disabled: b,
                                    image: e[t].getAttribute("image"),
                                    hoverText: A,
                                    hoverId: T,
                                    id: v
                                }), null != e[t].getAttribute("click")) try {
                                x = new Function(e[t].getAttribute("click")), null != e[t].getAttribute("callback") && (_ = new Function(e[t].getAttribute("callback"))), events = {
                                    click: x,
                                    callback: _
                                }
                            } catch (t) {} else try {
                                try {
                                    x = new Function("_POTATO." + String(f.slice(2, 3)).toLowerCase() + "()")
                                } catch (t) {
                                    x = new Function(v + "()")
                                }
                                null != e[t].getAttribute("callback") && (_ = new Function(e[t].getAttribute("callback"))), events = {
                                    click: x,
                                    callback: _
                                }
                            } catch (t) {}
                        })
                    }
                    if ("CALENDAR" == f.slice(1, 2)) {
                        y = e[t].getAttribute("style");
                        var E = e[t].getAttribute("class");
                        if (null == E && (E = "getFIELD"), $(e[t].localName).addClass(E), null != (Tt = e[t].getAttribute("change"))) {
                            p = e[t].localName;
                            l[String(p)] = new Function(Tt)
                        }
                        O = this._css_(e[t], y);
                        var B = this._attr_(e[t], y, f);
                        pims(e[t].localName)._d_(function() {
                            css = O, attr = B, null != Tt && (events = {
                                change: function(t) {
                                    for (var e in l) {
                                        String(e) == t && l[e]()
                                    }
                                }
                            })
                        })
                    }
                    if ("KEYPAD" == f.slice(1, 2)) {
                        y = e[t].getAttribute("style");
                        var F = e[t].getAttribute("htm");
                        null == F && (F = "config/keypad.htm");
                        var P = e[t].getAttribute("class");
                        null == P && (P = "getFIELD"), $(e[t].localName).addClass(P);
                        var L = new Function(e[t].getAttribute("change")),
                            D = new Function(e[t].getAttribute("click"));
                        O = this._css_(e[t], y), B = this._attr_(e[t], y, f);
                        pims(e[t].localName)._kp_(function() {
                            param = {
                                htm: F
                            }, css = O, attr = B, events = {
                                change: L,
                                click: D
                            }
                        })
                    }
                    if ("LIST" == f.slice(1, 2)) {
                        y = e[t].getAttribute("style");
                        var N = e[t].getAttribute("id");
                        null == N && (N = String(f.slice(2, 3)).toLowerCase());
                        var R = this._se_a(y, e[t], "value", "0"),
                            H = this._se_a(y, e[t], "hoverText", "potato"),
                            M = this._se_a(y, e[t], "hoverId", "potatoHoverText"),
                            z = e[t].getAttribute("model");
                        null == z && (z = String(f.slice(2, 3)).toLowerCase() + ".php");
                        var W = e[t].getAttribute("class");
                        null == W && (W = "getFIELD"), $(e[t].localName).addClass(W);
                        var j = e[t].getAttribute("whereClass"),
                            K = e[t].getAttribute("params"),
                            U = e[t].getAttribute("onscroll");
                        if (null != (_t = e[t].getAttribute("listClick"))) {
                            p = e[t].localName;
                            n[String(p)] = new Function(_t)
                        } else try {
                            p = e[t].localName;
                            n[String(p)] = new Function(String(f.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (ht = e[t].getAttribute("callback"))) {
                            p = e[t].localName;
                            i[String(p)] = new Function(ht)
                        }
                        e[t].getAttribute("listTop"), e[t].getAttribute("listLeft"), e[t].getAttribute("display");
                        var V = String(e[t].localName);
                        O = this._css_(e[t], y, V);
                        pims(V)._lt_(function() {
                            try {
                                where = j + "@" + V
                            } catch (t) {}
                            try {
                                params = K + "@" + V
                            } catch (t) {}
                            css = O, param = {
                                model: z
                            }, attr = {
                                onscroll: U,
                                value: R,
                                hoverText: H,
                                hoverId: M,
                                id: N
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
                    if ("MENU" == f.slice(1, 2)) {
                        var Y = e[t].getAttribute("background");
                        null == Y && (Y = "#ffffff");
                        var q = e[t].getAttribute("border");
                        null == q && (q = "0px");
                        var G = e[t].getAttribute("menuModel");
                        null == G && (G = "null");
                        var J = e[t].getAttribute("menuTitle");
                        null == J && (J = "null");
                        var Q = e[t].getAttribute("padding"),
                            Z = e[t].getAttribute("color");
                        null == Z && (Z = "BLUE");
                        var tt = e[t].getAttribute("borderRadius");
                        null == tt && (tt = 7);
                        var et = e[t].getAttribute("fontSize");
                        null == et && (et = 15);
                        var it = e[t].getAttribute("height");
                        null == it && (it = 30);
                        var nt = e[t].getAttribute("hoverBgColor");
                        null == nt && (nt = "yellow");
                        var lt = e[t].getAttribute("hoverText");
                        null == lt && (lt = "");
                        var rt = e[t].getAttribute("value");
                        null == rt && (rt = "0");
                        var at = e[t].getAttribute("width");
                        null == at && (at = document.innerWidth + "px");
                        var ot = e[t].getAttribute("widthMenu");
                        null == ot && (ot = 550);
                        var st = e[t].getAttribute("heightTable");
                        null == st && (st = 450);
                        var dt = e[t].getAttribute("id");
                        null == dt && (dt = String(f.slice(2, 3)).toLowerCase());
                        var ct = e[t].getAttribute("model");
                        null == ct && (ct = String(f.slice(2, 3)).toLowerCase() + ".php");
                        var ut = e[t].getAttribute("class");
                        null == ut && (ut = "getFIELD"), $(e[t].localName).addClass(ut);
                        var ht, pt = e[t].getAttribute("whereClass"),
                            gt = e[t].getAttribute("params"),
                            mt = e[t].getAttribute("onscroll");
                        if (null != (_t = e[t].getAttribute("click"))) {
                            p = e[t].localName;
                            d[String(p)] = new Function(_t)
                        } else try {
                            p = e[t].localName;
                            d[String(p)] = new Function(String(f.slice(2, 3)).toLowerCase() + "()")
                        } catch (t) {}
                        if (null != (ht = e[t].getAttribute("callback"))) {
                            p = e[t].localName;
                            s[String(p)] = new Function(ht)
                        }
                        var ft = e[t].getAttribute("topTable"),
                            yt = e[t].getAttribute("leftTable"),
                            bt = e[t].getAttribute("display");
                        V = String(e[t].localName);
                        pims(V)._m_(function() {
                            try {
                                where = pt + "@" + V
                            } catch (t) {}
                            try {
                                params = gt + "@" + V
                            } catch (t) {}
                            css = {
                                display: bt,
                                height: it,
                                width: at,
                                color: Z,
                                fontSize: et,
                                hoverBgColor: nt,
                                borderRadius: tt,
                                border: q,
                                background: Y,
                                padding: Q,
                                marginTop: ft + "_" + V,
                                marginLeft: yt + "_" + V,
                                widthTable: ot + "_" + V,
                                heightTable: st + "_" + V
                            }, param = {
                                model: ct,
                                menuTitle: J,
                                menuModel: G
                            }, attr = {
                                onscroll: mt,
                                value: rt,
                                hoverText: lt,
                                id: dt
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
                    if ("CHART" == f.slice(1, 2)) POTATO.elementbar = e[t], _POTATOElement[f.slice(2, 3)] = e[t], null == (vt = e[t].getAttribute("onload")) && (vt = "true"), "true" == vt ? X.prototype.reloadChart(f.slice(2, 3)) : X.prototype.reloadChart(f.slice(2, 3), "false");
                    if ("TABLE" == f.slice(1, 2)) {
                        POTATO.element = e[t], _POTATOElement[f.slice(2, 3)] = e[t];
                        var vt, xt = e[t].getAttribute("id");
                        null == xt && (xt = String(f.slice(2, 3)).toLowerCase()), null == (vt = e[t].getAttribute("onload")) && (vt = "true"), "true" == vt ? X.prototype.reloadTable(xt) : X.prototype.reloadTable(xt, "false")
                    }
                    if ("TEXT" == f.slice(1, 2)) {
                        y = e[t].getAttribute("style"), O = this._css_(e[t], y), B = this._attr_(e[t], y, f);
                        var _t, Tt, At = e[t].getAttribute("class");
                        if (null == At && (At = "getFIELD"), $(e[t].localName).addClass(At), null != (_t = e[t].getAttribute("click"))) {
                            p = e[t].localName;
                            r[String(p)] = new Function(_t)
                        }
                        if (null != (Tt = e[t].getAttribute("change"))) {
                            p = e[t].localName;
                            o[String(p)] = new Function(Tt)
                        }
                        var St = e[t].getAttribute("keyup");
                        if (null != St) {
                            p = e[t].localName;
                            a[String(p)] = new Function(St)
                        }
                        pims(e[t].localName)._tx_(function() {
                            css = O, attr = B, events = {
                                click: function(t) {
                                    for (var e in r) {
                                        String(e) == t && r[e]()
                                    }
                                },
                                change: function(t) {
                                    for (var e in o) {
                                        String(e) == t && o[e]()
                                    }
                                },
                                keyup: function(t, e) {
                                    for (var i in a) {
                                        String(i) == t && a[i]()
                                    }
                                }
                            }
                        })
                    }
                    if ("DOUGHNUT" == f.slice(1, 2)) POTATO.elementdoughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(0) : X.prototype.reloadDoughnut(0, "false");
                    if ("DOUGHNUT1" == f.slice(1, 2)) POTATO.element1doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(1) : X.prototype.reloadDoughnut(1, "false");
                    if ("DOUGHNUT2" == f.slice(1, 2)) POTATO.element2doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(2) : X.prototype.reloadDoughnut(2, "false");
                    if ("DOUGHNUT3" == f.slice(1, 2)) POTATO.element3doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(3) : X.prototype.reloadDoughnut(3, "false");
                    if ("DOUGHNUT4" == f.slice(1, 2)) POTATO.element4doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(4) : X.prototype.reloadDoughnut(4, "false");
                    if ("DOUGHNUT5" == f.slice(1, 2)) POTATO.element5doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(5) : X.prototype.reloadDoughnut(5, "false");
                    if ("DOUGHNUT6" == f.slice(1, 2)) POTATO.element6doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(6) : X.prototype.reloadDoughnut(6, "false");
                    if ("DOUGHNUT7" == f.slice(1, 2)) POTATO.element7doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(7) : X.prototype.reloadDoughnut(7, "false");
                    if ("DOUGHNUT8" == f.slice(1, 2)) POTATO.element8doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(8) : X.prototype.reloadDoughnut(8, "false");
                    if ("DOUGHNUT9" == f.slice(1, 2)) POTATO.element9doughnut = e[t], null == (g = e[t].getAttribute("onload")) && (g = "true"), "true" == g ? X.prototype.reloadDoughnut(9) : X.prototype.reloadDoughnut(9, "false");
                    if ("RADAR" == f.slice(1, 2)) POTATO.elementradar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(0) : X.prototype.reloadRadar(0, "false");
                    if ("RADAR1" == f.slice(1, 2)) POTATO.element1radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(1) : X.prototype.reloadRadar(1, "false");
                    if ("RADAR2" == f.slice(1, 2)) POTATO.element2radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(2) : X.prototype.reloadRadar(2, "false");
                    if ("RADAR3" == f.slice(1, 2)) POTATO.element3radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(3) : X.prototype.reloadRadar(3, "false");
                    if ("RADAR4" == f.slice(1, 2)) POTATO.element4radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(4) : X.prototype.reloadRadar(4, "false");
                    if ("RADAR5" == f.slice(1, 2)) POTATO.element5radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(5) : X.prototype.reloadRadar(5, "false");
                    if ("RADAR6" == f.slice(1, 2)) POTATO.element6radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(6) : X.prototype.reloadRadar(6, "false");
                    if ("RADAR7" == f.slice(1, 2)) POTATO.element7radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(7) : X.prototype.reloadRadar(7, "false");
                    if ("RADAR8" == f.slice(1, 2)) POTATO.element8radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(8) : X.prototype.reloadRadar(8, "false");
                    if ("RADAR9" == f.slice(1, 2)) POTATO.element9radar = e[t], null == (m = e[t].getAttribute("onload")) && (m = "true"), "true" == m ? X.prototype.reloadRadar(9) : X.prototype.reloadRadar(9, "false")
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
                for (var r = X.prototype.getIdClass(t), a = (t = [], 0); a < r.length; a++) "length" != r[a].name && (t[r[a].name] = pims(r[a].is).value());
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
                for (var r = X.prototype.getIdClass(t), a = (t = [], 0); a < r.length; a++) "length" != r[a].name && (t[r[a].name] = pims(r[a].is).value());
            this._rp_(l, t, function(t) {
                "tableId" == i.tableId && (i.tableId = "table_" + n);
                var e = JSON.parse(t),
                    l = "<table id=" + i.tableId + " class=" + i.cls + ">";
                if (null != i.data.d0) {
                    var r, a = (new Array, 0);
                    for (r in l += "<tr>", i.data) l += "<th>" + i.data["d" + a] + "</th>", a += 1;
                    for (var o in l += "</tr>", e)
                        if ("undefined" != e[o].d0 && null != e[o].d0) {
                            l += "<tr>";
                            for (var s = 0; a > s; s++) l += "<td>" + e[o]["d" + s] + "</td>";
                            l += "</tr>"
                        }
                } else {
                    a = 0;
                    for (r in l += "<tr>", e[0]) "" != e[0][r] ? l += "<th>" + e[0][r] + "</th>" : l += "<th style='display:none'>" + e[0][r] + "</th>", a++;
                    for (var o in l += "</tr>", e)
                        if ("undefined" != e[o][0] && null != e[o][0] && o > 0) {
                            l += "<tr>";
                            for (s = 0; a > s; s++) "" != e[0][s] ? l += "<td>" + e[o][s] + "</td>" : l += "<td style='display:none'>" + e[o][s] + "</td>";
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
                        for (var t = 0; t < a; t++) d.rows[ri].cells[t].style.background = "#dfdfdf"
                    } catch (t) {}
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (t = 0; t < a; t++) d.rows[ri].cells[t].style.background = "yellow";
                    i.click(d.rows[ri], ri, ci)
                })
            })
        },
        _tb_: function(t, i) {
            for (var n = this._p_(i), l = this.getHTMLElement(), r = this.x, a = [
                    []
                ], o = n.id, s = String(n.header).split(","), d = 0; d < _POTATOArray.length; d++) o == String(_POTATOArray[d].bind) && (a[_POTATOArray[d].id] = _POTATOArray[d].value, 0);
            l.createdCallback = function() {
                this.innerHTML = '<div id="div-' + o + '" ></div> '
            }, this._rp_(n.model, a, function(t) {
                var i = JSON.parse(t),
                    l = "<table id=" + n.id + " style='border-collapse:collapse;width:99%'>";
                if (null != s && s.length > 0) {
                    var a = 0;
                    for (e in l += "<tr>", s) "" != s[e] ? l += "<th style='border:1px solid black;font-size:" + n.fontSizeTH + ";color:" + n.fontColorTH + ";font-family:" + n.fontFamilyTH + "'>" + s[e] + "</th>" : l += "<th style='display:none'>" + s[e] + "</th>", a++;
                    for (var d in l += "</tr>", i)
                        if ("undefined" != i[d][0] && null != i[d][0] && d >= 0) {
                            l += "<tr>";
                            for (var c = 0; c < a; c++) "" != s[c] && null != s[c] ? l += "<td style='border:1px solid black;padding-left:5px;font-size:" + n.fontSizeTD + ";color:" + n.fontColorTD + ";font-family:" + n.fontFamilyTD + "'>" + i[d][c] + "</td>" : l += "<td style='display:none'>" + i[d][c] + "</td>";
                            l += "</tr>"
                        }
                } else {
                    a = 0;
                    for (e in l += "<tr>", i[0]) "" != i[0][e] ? l += "<th style='border:1px solid black;font-size:" + n.fontSizeTH + ";color:" + n.fontColorTH + ";font-family:" + n.fontFamilyTH + "'>" + i[0][e] + "</th>" : l += "<th style='display:none'>" + i[0][e] + "</th>", a++;
                    for (var d in l += "</tr>", i)
                        if ("undefined" != i[d][0] && null != i[d][0] && d > 0) {
                            l += "<tr>";
                            for (c = 0; a > c; c++) "" != i[0][c] && null != i[0][c] && "undefined" != i[0][c] ? l += "<td style='border:1px solid black;font-size:" + n.fontSizeTD + ";color:" + n.fontColorTD + ";font-family:" + n.fontFamilyTD + "'>" + i[d][c] + "</td>" : l += "<td style='display:none'>" + i[d][c] + "</td>";
                            l += "</tr>"
                        }
                }
                l += "</table>", $("#div-" + o).html(l).show().css({
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
                var u = document.getElementById(n.id),
                    h = $("#" + n.id + " tbody");
                $(document).keydown(function(t) {
                    if (h.find(".highlight").length)
                        if (40 == t.which) {
                            var e = h.find(".highlight").next();
                            X.prototype.tableHighlight(e[0].rowIndex, n.tableId)
                        } else if (38 == t.which) {
                        var i = h.find(".highlight").prev();
                        X.prototype.tableHighlight(i[0].rowIndex, n.tableId)
                    }
                });
                try {
                    if (potato.table = u, n.callback(u, n.id), String(editCell).split("@").slice(1, 2) == r) {
                        var p = String(editCell).split("@").slice(0, 1),
                            g = [];
                        if (null != p[0] && "null" != p[0]) {
                            for (var m = String(p[0]).replace(/\s+/g, "").split("callback").slice(0, 1), f = (String(m).match(/,/g) || []).length, y = String(p[0]).split(","), b = 0; b < f; b++) {
                                var v = String(y.slice(b, b + 1)).split(":");
                                g[String(v.slice(0, 1)).replace(/\s+/g, "")] = v.slice(1, 2)
                            }
                            v = String(y.slice(b, b + 1)).split(":");
                            var x = String(String(p[0]).split("callback").slice(1, 2)).split(":");
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
                        var _ = String(multipleSelect).split("@").slice(0, 1),
                            T = [];
                        if (null != _[0] && "null" != _[0])
                            for (f = (String(_[0]).match(/,/g) || []).length, y = String(_[0]).split(","), b = 0; b <= f; b++) {
                                v = String(y.slice(b, b + 1)).split(":");
                                T[String(v.slice(0, 1)).replace(/\s+/g, "")] = v.slice(1, 2)
                            }
                        potato.MultipleSelect(function() {
                            attr = {
                                id: n.id
                            }, param = T;
                            var t = new Function("return " + String(T.callback));
                            events = {
                                callback: t()
                            }
                        })
                    }
                } catch (t) {}
                $("#" + n.id + " td").click(function() {
                    ci = $(this).parent().children().index(this), ri = $(this).parent().parent().children().index(this.parentNode);
                    for (var t = 0; t < a; t++) 0;
                    n.click(u.rows[ri], ri, ci, n.id)
                })
            }), this._p_e(r, l)
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
            var e = this,
                i = this._p_(t),
                n = this.getHTMLElement(),
                l = this.x,
                r = i.id;
            "potato.now" == i.value && (i.value = e.now), "potato.today()" == i.value && (i.value = e.today()), "potato.now()" == i.value && (i.value = e.now()), n.createdCallback = function() {
                this.id = r + "_", X.prototype.getAttribute(this, l).index, X.prototype.getAttribute(this, l).field, this.pims = l, this.innerHTML = '<br><input type="text" id="' + r + '" class="' + i.className + '"> ', e._css_id(i, r), $("#" + r).css({
                    textTransform: i.textTransform
                }), "null" != i.float && $("#" + r + "_").css("float", i.float), "false" == i.disabled && $("#" + r).attr({
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
                    for (var e = 0; e < _POTATOId.length; e++)
                        if (String(r).toLowerCase() == String(_POTATOId[e]).toLowerCase()) {
                            var n = String(_POTATOBindId[e]);
                            document.getElementById(n).value = document.getElementById(r).value
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
                }), "true" != i.disabled && "" != i.disabled || $("#" + r).attr({
                    value: i.value,
                    type: i.type,
                    disabled: !0
                })
            }, this._p_e(l, n)
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
                var a = '<div id="div_' + i + '"> ';
                a += '<input type="text" id="' + i + '"> ', a += '<div class="keypad" id="keypad-' + i + '"></div> ', a += "</div> ", this.innerHTML = a, _fieldtime = document.getElementById("input-" + i), $("#div_" + i).css({
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
                a = t.getFullYear();
            return _pimS.day = parseInt(e) < 10 ? "0" + e : e, _pimS.hour = parseInt(i) < 10 ? "0" + i : i, _pimS.minute = parseInt(n) < 10 ? "0" + n : n, _pimS.month = parseInt(l) < 10 ? "0" + l : l, _pimS.second = parseInt(r) < 10 ? "0" + r : r, _pimS.year = a, _pimS.title = "_POTATO", _pimS.now = _pimS.hour + ":" + _pimS.minute, a + "-" + Oget.month + "-" + Oget.day
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

