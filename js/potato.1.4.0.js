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

NOTE:
This library was created based on the following concept:
#Namespaces
#this is a function: function a(){...}
#this is an expression: var a = function(){...}
#IIFE Immediately Invoked Function Expression:
 Creating the function, then immediately calling it.
 In JavaScript all we have to work with for scoping is functions,
 and so if we want to create scope, we use a function.
 By executing code inside of the IIFE we are scoping all variables and
 functions inside of the IIFE and so we aren't polluting the global namespace.
 Here the global namespace is POTATO.
 Potato attribute was part of the W3C Draft spec for creating custom-HTML elements with custom behaviour.
 Used when extending a built-in element like <input>,<div>,<button>
 For example, you could have a plastic-button element that extends <button> to provide some
 fancy animation when clicked
 Before you do this, you need to register plastic-button as a custom HTML element like this:
 customeElements.define("plastic-button",PlasticButton,{extends:"button"});
#Modules are commonly used as singleton style objects where only one instance exists.
 Anonymous closures are just functions that wrap our code and create an enclosed scope around it.
 Closures help keep any state or privacy within that function.
 Closures are one of the best and most powerful features of JavaScript.
 Because JavaScript does not have a private keyword its common to prefix private properties with an underscore.
#The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
 With strict mode, you can not, for example, use undeclared variables.

version 1.1.0 - enable the static data for OList, OTable and OChart 08th Nov 2019
version 1.1.1 - improve and add additional attribute to OList. OList now can use the
                     header like OTable to create the header data (revised on 14th Dec 2019)
version 1.2.0 - add the drag and drop function to the OTable  (revised on 17th Dec 2019)
version 1.2.1 - some other minor improvement on the code (revised on 18th Dec 2019)
version 1.2.2 - improvement on dragdrop and add additional attribute "split" to
                split the dragdrop data inside same cell of table and
                some other minor improvement on the code (revised on 20th Dec 2019)
version 1.3.0 - add the bar chart feature into the library (revised on 22nd Dec 2019)
version 1.4.0 - add the menu tab feature into the library (revised on 15th Jan 2020)
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
        potato: {
            a: [65, 76, 76, 32, 82, 73, 71, 72, 84, 83],
            b: ["BUTTON", "TEXT", "CHART", "TABLE", "LIST", "CALENDAR"],
            c: ["color", "height", "width", "left", "top", "background"],
            colId: 0,
            d: ["data", "model"],
            data: new Array,
            day: "20",
            e: ["element"],
            f: [102, 105, 101, 108, 100],
            field: [],
            fieldOther: [],
            g: [103, 101, 116],
            h: [104, 111, 118, 101, 114],
            hour: "08",
            i: [],
            j: [106],
            k: [107, 101, 121],
            keyID: "potato",
            l: [108, 111, 99, 97, 116, 105, 111, 110],
            m: [109, 111, 110, 116, 104],
            minute: "00",
            month: "06",
            n: [],
            newP: new Array,
            nodevalue: "potato",
            now: "",
            o: [75, 73, 65, 78],
            p: [76, 73, 77],
            pimsParameters: "potato",
            pimsReloadTime: "potato",
            pimsTargetId: "potato",
            potatoListObject: new Object,
            q: [113, 117, 101, 114, 121],
            r: [],
            rowId: 0,
            rsd: "",
            s: [83, 69, 84],
            second: "00",
            t: [83, 69, 78, 71],
            to: [82, 69, 83, 69, 82, 86, 69, 68],
            today: "",
            u: [],
            v: [80, 79, 84, 65, 84, 79],
            w: [],
            where: [],
            whereOther: [],
            x: [],
            X_authorization: 0,
            y: [89],
            year: "2019",
            z: [79],
            $O$T: new Object
        },
        init: function() {
            $O$P = this.potato, Oget = this.potato, $O$ = this.potato;
            var t = new Date,
                e = t.getDate(),
                i = t.getHours(),
                l = t.getMinutes(),
                n = t.getMonth() + 1,
                a = t.getSeconds(),
                o = t.getFullYear();
            $O$P.day = parseInt(e) < 10 ? "0" + e : e, $O$P.hour = parseInt(i) < 10 ? "0" + i : i, $O$P.minute = parseInt(l) < 10 ? "0" + l : l, $O$P.month = parseInt(n) < 10 ? "0" + n : n, $O$P.second = parseInt(a) < 10 ? "0" + a : a, $O$P.year = o, $O$P.now = $O$P.hour + ":" + $O$P.minute, Oget.today = o + "-" + Oget.month + "-" + Oget.day, pims = $O$X, POTATO = $O$X, $O$L.init()
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
        return this.b = [66, 85, 84, 84, 79, 78], this.c = [67, 65, 76, 69, 78, 68, 65, 82], this.ct = [67, 72, 65, 82, 84], this.k = [75, 69, 89, 80, 65, 68], this.l = [76, 73, 83, 84], this.m = [77, 69, 78, 85], this.ta = [84, 65, 66], this.tb = [84, 65, 66, 76, 69], this.tx = [84, 69, 88, 84], this.KB = [75, 69, 89, 66, 79, 65, 82, 68], this.KP = [75, 69, 89, 80, 65, 68], this.h = [35], this.lp = [112, 111, 116, 97, 116, 111], this.r = [114, 101, 103, 105, 115, 116, 101, 114, 80, 111, 116, 97, 116, 111], this
    },
    $O$W = function(t, e, i, l) {
        "use strict";

        function n(t, e) {
            for (var i = 0, l = t.length; i < l; i++) u(t[i], e)
        }

        function a(t) {
            return function(e) {
                tt(e) && (u(e, t), n(e.querySelectorAll(z), t))
            }
        }

        function o(t) {
            var e = t.getAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111)),
                i = t.nodeName.toUpperCase(),
                l = H.call(D, e ? B + e.toUpperCase() : E + i);
            return e && -1 < l && !r(i, e) ? -1 : l
        }

        function r(t, e) {
            return -1 < z.indexOf(t + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + e + '"]')
        }

        function s(t) {
            var e = t.currentTarget,
                i = t.attrChange,
                l = t.attrName,
                n = t.target;
            ht && (!n || n === e) && e.attributeChangedCallback && "style" !== l && e.attributeChangedCallback(l, i === t[k] ? null : t.prevValue, i === t[C] ? null : t.newValue)
        }

        function d(t) {
            var e = a(t);
            return function(t) {
                g.push(e, t.target)
            }
        }

        function c(t) {
            pt && (pt = !1, t.currentTarget.removeEventListener(I, c)), n((t.target || e).querySelectorAll(z), t.detail === w ? w : $), J && function() {
                for (var t, e = 0, i = et.length; e < i; e++) t = et[e], N.contains(t) || (et.splice(e, 1), u(t, w))
            }()
        }

        function p(t, e) {
            var i = this;
            lt.call(i, t, e), f.call(i, {
                target: i
            })
        }

        function h(t, e) {
            G(t, e), v ? v.observe(t, ot) : (ct && (t.setAttribute = p, t[x] = y(t), t.addEventListener(A, f)), t.addEventListener(T, s)), t.createdCallback && ht && (t.created = !0, t.createdCallback(), t.created = !1)
        }

        function u(t, e) {
            var i, l = o(t); - 1 < l && (b(t, P[l]), l = 0, e !== $ || t[$] ? e === w && !t[w] && (t[$] = !1, t[w] = !0, l = 1) : (t[w] = !1, t[$] = !0, l = 1, J && H.call(et, t) < 0 && et.push(t)), l && (i = t[e + "Callback"]) && i.call(t))
        }
        if (!(l in e)) {
            var g, f, m, y, v, b, O, x = "__" + l + (1e5 * Math.random() >> 0),
                $ = "attached",
                w = "detached",
                S = "extends",
                k = "ADDITION",
                _ = "MODIFICATION",
                C = "REMOVAL",
                T = "DOMAttrModified",
                I = "DOMContentLoaded",
                A = "DOMSubtreeModified",
                E = "<",
                B = "=",
                F = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
                L = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
                D = [],
                P = [],
                z = "",
                N = e.documentElement,
                H = D.indexOf || function(t) {
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
                Y = i.setPrototypeOf,
                U = !!i.$O$Sroto__,
                q = i.create || function t(e) {
                    return e ? (t.prototype = e, new t) : this
                },
                G = Y || (U ? function(t, e) {
                    return t.$O$Sroto__ = e, t
                } : j && K ? function() {
                    function t(t, e) {
                        for (var i, l = j(e), n = 0, a = l.length; n < a; n++) i = l[n], M.call(t, i) || W(t, i, K(e, i))
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
                J = !X.call(Z, N),
                tt = J ? function(t) {
                    return 1 === t.nodeType
                } : function(t) {
                    return X.call(Z, t)
                },
                et = J && [],
                it = Z.cloneNode,
                lt = Z.setAttribute,
                nt = Z.removeAttribute,
                at = e.createElement,
                ot = Q && {
                    attributes: !0,
                    characterData: !0,
                    attributeOldValue: !0
                },
                rt = Q || function(t) {
                    ct = !1, N.removeEventListener(T, rt)
                },
                st = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                    setTimeout(t, 10)
                },
                dt = !1,
                ct = !0,
                pt = !0,
                ht = !0;
            Y || U ? (b = function(t, e) {
                X.call(e, t) || h(t, e)
            }, O = h) : O = b = function(t, e) {
                t[x] || (t[x] = i(!0), h(t, e))
            }, J ? (ct = !1, function() {
                var t = K(Z, "addEventListener"),
                    e = t.value,
                    i = function(t) {
                        var e = new CustomEvent(T, {
                            bubbles: !0
                        });
                        e.attrName = t, e.prevValue = this.getAttribute(t), e.newValue = null, e[C] = e.attrChange = 2, nt.call(this, t), this.dispatchEvent(e)
                    },
                    l = function(t, e) {
                        var i = this.hasAttribute(t),
                            l = i && this.getAttribute(t),
                            n = new CustomEvent(T, {
                                bubbles: !0
                            });
                        lt.call(this, t, e), n.attrName = t, n.prevValue = i ? l : null, n.newValue = e, i ? n[_] = n.attrChange = 1 : n[k] = n.attrChange = 0, this.dispatchEvent(n)
                    },
                    n = function(t) {
                        var e, i = t.currentTarget,
                            l = i[x],
                            n = t.propertyName;
                        l.hasOwnProperty(n) && (l = l[n], (e = new CustomEvent(T, {
                            bubbles: !0
                        })).attrName = l.name, e.prevValue = l.value || null, e.newValue = l.value = i[n] || null, null == e.prevValue ? e[k] = e.attrChange = 0 : e[_] = e.attrChange = 1, i.dispatchEvent(e))
                    };
                t.value = function(t, a, o) {
                    t === T && this.attributeChangedCallback && this.setAttribute !== l && (this[x] = {
                        className: {
                            name: "class",
                            value: this.className
                        }
                    }, this.setAttribute = l, this.removeAttribute = i, e.call(this, "propertychange", n)), e.call(this, t, a, o)
                }, W(Z, "addEventListener", t)
            }()) : Q || (N.addEventListener(T, rt), N.setAttribute(x, 1), N.removeAttribute(x), ct && (f = function(t) {
                var e, i, l, n = this;
                if (n === t.target) {
                    for (l in e = n[x], n[x] = i = y(n), i) {
                        if (!(l in e)) return m(0, n, l, e[l], i[l], k);
                        if (i[l] !== e[l]) return m(1, n, l, e[l], i[l], _)
                    }
                    for (l in e)
                        if (!(l in i)) return m(2, n, l, e[l], i[l], C)
                }
            }, m = function(t, e, i, l, n, a) {
                var o = {
                    attrChange: t,
                    currentTarget: e,
                    attrName: i,
                    prevValue: l,
                    newValue: n
                };
                o[a] = t, s(o)
            }, y = function(t) {
                for (var e, i, l = {}, n = t.attributes, a = 0, o = n.length; a < o; a++) "setAttribute" !== (i = (e = n[a]).name) && (l[i] = e.value);
                return l
            })), e[l] = function(t, i) {
                if (l = t.toUpperCase(), dt || (dt = !0, Q ? (v = function(t, e) {
                        function i(t, e) {
                            for (var i = 0, l = t.length; i < l; e(t[i++]));
                        }
                        return new Q(function(l) {
                            for (var n, a, o = 0, r = l.length; o < r; o++) "childList" === (n = l[o]).type ? (i(n.addedNodes, t), i(n.removedNodes, e)) : (a = n.target, ht && a.attributeChangedCallback && "style" !== n.attributeName && a.attributeChangedCallback(n.attributeName, n.oldValue, a.getAttribute(n.attributeName)))
                        })
                    }(a($), a(w))).observe(e, {
                        childList: !0,
                        subtree: !0
                    }) : (g = [], st(function t() {
                        for (; g.length;) g.shift().call(null, g.shift());
                        st(t)
                    }), e.addEventListener("DOMNodeInserted", d($)), e.addEventListener("DOMNodeRemoved", d(w))), e.addEventListener(I, c), e.addEventListener("readystatechange", c), e.createElement = function(t, i) {
                        var l = at.apply(e, arguments),
                            n = "" + t,
                            a = H.call(D, (i ? B : E) + (i || n).toUpperCase()),
                            o = -1 < a;
                        return i && (l.setAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111), i = i.toLowerCase()), o && (o = r(n.toUpperCase(), i))), ht = !e.createElement.innerHTMLHelper, o && O(l, P[a]), l
                    }, Z.cloneNode = function(t) {
                        var e = it.call(this, !!t),
                            i = o(e);
                        return -1 < i && O(e, P[i]), t && function(t) {
                            for (var e, i = 0, l = t.length; i < l; i++) e = t[i], O(e, P[o(e)])
                        }(e.querySelectorAll(z)), e
                    }), -2 < H.call(D, B + l) + H.call(D, E + l)) throw new Error("A " + t + " type pims already registered");
                if (!F.test(l) || -1 < H.call(L, l)) throw new Error("The type " + t + " pims invalid");
                var l, s = function() {
                        return h ? e.createElement(u, l) : e.createElement(u)
                    },
                    p = i || R,
                    h = M.call(p, S),
                    u = h ? i[S].toUpperCase() : l,
                    f = D.push((h ? B : E) + l) - 1;
                return z = z.concat(z.length ? "," : "", h ? u + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + t.toLowerCase() + '"]' : u), s.prototype = P[f] = M.call(p, "prototype") ? p.prototype : q(Z), n(e.querySelectorAll(z), $), s
            }
        }
    }(window, document, Object, $O$S.prototype.l($O$V().r)),
    $O$X = function() {
        var $O$P = function(t, e, i, l, n) {
            var a = $O$S.prototype.l($O$V().lp);
            if (this.data = [], this.array1 = [], this.array2 = [], this.where = [], this.field = [], this.whereOther = [], this.fieldOther = [], this.Query = 0, this.Submit = 0, -1 != String(t).indexOf($O$S.prototype.l($O$V().h)) && (a = String(t).split($O$S.prototype.l($O$V().h)).slice(1, 2)), !n) {
                if (t && a == $O$S.prototype.l($O$V().lp)) return window === this ? new $O$P(t) : (this.Day = this.day(), this.e = document.getElementById(t), this.Hour = this.hour(), this.id = t, this.Minute = this.minute(), this.Month = this.month(), this.obj = document.getElementById(t), this.Patent = this.getPatent(), this.Second = this.second(), this.x = t, this.Year = this.year(), this.table, this.ci, this.ri, this.title, this.value, this.oldValue, this.dataID, this.trigger, this.chartLabel, this.chartYvalue, this.chartXvalue, this.element, this.element1, this.element2, this.element3, this.element4, this.element5, this.element6, this.element7, this.element8, this.element9, this.elementbar, this.element1bar, this.element2bar, this.element3bar, this.element4bar, this.element5bar, this.element6bar, this.element7bar, this.element8bar, this.element9bar, this.elementdoughnut, this.element1doughnut, this.element2doughnut, this.element3doughnut, this.element4doughnut, this.element5doughnut, this.element6doughnut, this.element7doughnut, this.element8doughnut, this.element9doughnut, this.elementradar, this.element1radar, this.element2radar, this.element3radar, this.element4radar, this.element5radar, this.element6radar, this.element7radar, this.element8radar, this.element9radar, this);
                if (t && a != $O$S.prototype.l($O$V().lp)) {
                    var o = String(a).toLowerCase();
                    return document.getElementById(o)
                }
                return window === this ? new $O$P($O$S.prototype.l($O$V().up)) : (this.x = $O$S.prototype.l($O$V().up), this.e = document.getElementById($O$S.prototype.l($O$V().up)), this)
            }
            this.x = t, this.y = e, this.dx = i, this.dy = l, this.radius = n
        };
        return $O$P.prototype = {
            _: new Object,
            atc: "autocomplete",
            bdr: "border",
            bdrd0: "0px solid black",
            bdrd1: "1px solid black",
            bdrr: "borderRadius",
            bd: "body",
            bi: "bind",
            bxsd: "boxShadow",
            bkg: "background",
            cbk: "callback",
            ci: "",
            chartLabel: "",
            chartYvalue: "",
            chartXvalue: "",
            clickCol: 0,
            clickRow: 0,
            clk: "click",
            close: "閉じる",
            co: "color",
            csr: "cursor",
            dat: "data",
            dft: "default",
            dsa: "disabled",
            dpy: "display",
            dgdp: "dragdrop",
            dragdropClass: "null",
            dragdropId: "null",
            dragCol: 0,
            dragRow: 0,
            dragVal: 0,
            dropVal: 0,
            dropCol: 0,
            dropRow: 0,
            ec: "editCol",
            edit: "off",
            fls: "false",
            fz: "fontSize",
            h: "height",
            hdr: "header",
            height: 30,
            hid: "hoverId",
            htx: "hoverText",
            id: "id",
            idc: "indexCol",
            ipt: "INPUT",
            kp: "#keypad-",
            lft: "left",
            model: "POTATO.php",
            menuTitle: "",
            menuModel: "",
            mdl: "model",
            mt: "marginTop",
            multipleS: "multipleSelect",
            newValue: "",
            oldValue: "",
            php: ".php",
            pht: "potatoHoverText",
            pst: "position",
            response: "",
            ri: "",
            selectM: "selectMultiple",
            sp: "speed",
            tab_allContentBoxes: $(".OTabBody"),
            tab_allTabs: $(".OTabs li a"),
            tab_col: $(".OBox .OCurrent .OCol"),
            tab_columnReadyCounter: 0,
            tab_el: "",
            tab_hrefSelector: "one",
            tab_speed: 1e3,
            tab_target: 1,
            table: "",
            th: "tabHeight",
            title: "POTATO",
            tgg: "toggle",
            tl: "tool",
            tp: "top",
            trg: "trigger",
            trigger: 0,
            tue: "true",
            tw: "tabWidth",
            udf: "undefined",
            val: "value",
            w: "width",
            wit: "width",
            width: 100,
            _a_: function(t, e) {
                this.e.addEventListener(t, e, !1)
            },
            _attr_: function(t, e, i) {
                var l = this._se_a(e, t, O.dsa, O.fls),
                    n = t.getAttribute(O.id);
                null == n && (n = String(i.slice(2, 3)).toLowerCase());
                var a = this._se_a(e, t, O.hid, O.pht),
                    o = this._se_a(e, t, O.htx, ""),
                    r = this._se_a(e, t, O.csr, O.dft);
                return {
                    disabled: l,
                    value: this._se_a(e, t, O.val, "0"),
                    hoverText: o,
                    hoverId: a,
                    cursor: r,
                    id: n,
                    name: n
                }
            },
            _b_: function(t) {
                var e = this._p_(t);
                "potato.title" == e.title && (e.title = potato.title), null != e.model && (e.model = "potato.model") && (e.model = potato.model);
                e.model;
                var i = param[O.dat]; - 1 != String(i).indexOf(".php") && (e.model = i);
                var l = this.getHTMLElement(),
                    n = this.x,
                    a = n.split("-"),
                    o = a.slice(2, 3),
                    r = (a.slice(2, 3), !1);
                e.stacked != O.tue && 1 != e.stacked || (r = !0);
                var s = !0;
                if (e.tooltips != O.fls && 0 != e.tooltips || (s = !1), String(e.params).split("@").slice(1, 2) == n) var d = String(e.params).split("@").slice(0, 1);
                var c = 0,
                    p = [];
                if (null != [] && "null" != d)
                    for (var h = (String(d).match(/,/g) || []).length, u = String(d).split(","), g = 0; g <= h; g++) {
                        var f = String(u.slice(g, g + 1)).split(":"),
                            m = new Function(f.slice(1, 2));
                        if ("null" != String(f.slice(0, 1)).replace(/\s+/g, "")) try {
                            p[String(f.slice(0, 1)).replace(/\s+/g, "")] = String(m()).split(",")
                        } catch (t) {
                            c = 1, p[String(f.slice(0, 1)).replace(/\s+/g, "")] = ""
                        }
                    }
                null != e.model ? (l.createdCallback = function() {
                    var t = '<div class="chartWrapper" style="position:relative">';
                    t += '<div id="div_' + o + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="div_chart_' + o + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + o + '" style="background:' + e.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(e.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t
                }, 0 == c && this.Post(e.model, p, function(t) {
                    var i = new Array,
                        l = new Array;
                    i[0] = new Array, l[0] = new Array;
                    new Array;
                    var a = String(String(e.dataLabel).replace(/\s+/g, "")).split(","),
                        d = String(String(e.data2Label).replace(/\s+/g, "")).split(",");
                    if ("bar" == e.chartType) {
                        for (var c = 1, p = 0; p <= a.length + 1; p++) a[p] != O.dat && (i[c] = new Array, c++);
                        if (d[0] != O.dat)
                            for (c = 0, p = 0; p <= d.length; p++) l[c] = new Array, c++
                    }
                    var h = new Array,
                        u = new Array,
                        g = new Array,
                        f = (new Array, ""),
                        m = param.xLabelData.split(",");
                    for (p = 0; p < m.length; p++) h[p] = m[p];
                    for (p = 0; p < t.length; p++) {
                        if (e.showDay == O.tue) {
                            var y = String(t[p][0]).split("-"),
                                v = "20" + y.slice(0, 1),
                                b = y.slice(1, 2),
                                x = y.slice(2, 3),
                                w = new Date(v + "/" + b + "/" + x);
                            if (0 == w.getDay()) f = "日";
                            if (1 == w.getDay()) f = "月";
                            if (2 == w.getDay()) f = "火";
                            if (3 == w.getDay()) f = "水";
                            if (4 == w.getDay()) f = "木";
                            if (5 == w.getDay()) f = "金";
                            if (6 == w.getDay()) f = "土";
                            h[p] = t[p][0] + " (" + f + ")"
                        }
                        if ("bar" == e.chartType) {
                            var S = 0,
                                k = [];
                            k[0] = 0;
                            var _ = 0;
                            for (c = 0; c < a.length; c++) try {
                                a[c] != O.dat && (i[_].push(t[p][c]), 1 == r ? S += parseFloat(t[p][c]) : (k[c] = 0, parseFloat(t[p][c]) > 0 && t[p][c] != O.udf && (k[c] = parseFloat(t[p][c]))), _++)
                            } catch (t) {}
                            if (i[_].push(S), u[p] = 1 == r ? S : maxArray(k), d[0] != O.dat) {
                                var C = 0,
                                    T = [];
                                T[0] = 0;
                                var I = 0;
                                for (c = 0; c < d.length; c++)
                                    if (null != t[p][d[c]]) try {
                                        l[I].push(t[p][d[c]]), 1 == r ? C += parseFloat(t[p][d[c]]) : (C[c] = 0, parseFloat(t[p][d[c]]) > 0 && (T[c] = parseFloat(t[p][d[c]]))), I++
                                    } catch (t) {}
                                    g[p] = 1 == r ? C : maxArray(T)
                            }
                            S
                        } else i[0].push(t[p][1]), u[p] = t[p][1], t[p][1]
                    }
                    var A = new Array,
                        E = (c = 0, !1);
                    if ("bar" == e.chartType) {
                        for (p = 0; p < d.length; p++) A[c] = {
                            type: "line",
                            label: d[p],
                            radius: e.pointRadius[p],
                            backgroundColor: e.pointColorIndex[p],
                            pointStyle: e.pointStyle[p],
                            borderDash: [e.pointBorderDash[p]],
                            borderColor: e.pointBorderColorIndex[p],
                            borderWidth: e.pointBorderWidth[p],
                            yAxisID: "y-axis-2",
                            fill: !1,
                            data: l[p]
                        }, E = !0, c++;
                        for (p = 0; p < a.length; p++) A[c] = {
                            type: "bar",
                            label: a[p],
                            backgroundColor: e.colorIndex[p],
                            borderColor: "#444",
                            borderWidth: 1,
                            data: i[p]
                        }, c++;
                        A[c] = {
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
                    if (e.legendDisplay == O.tue) {
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
                        var L = 1.2;
                        "" != e.label2String && (L = 2);
                        var D = [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-1",
                                stacked: r,
                                ticks: {
                                    callback: function(t, e, i) {
                                        return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                    },
                                    beginAtZero: !0,
                                    max: maxArray(u) * L,
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
                                        a = document.getElementById("yAxis_" + o).getContext("2d");
                                    a.canvas.width = l, a.drawImage(this.chart.canvas, 0, 0, l, n, 0, 0, l, n), i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), i.textAlign = "center", i.textBaseline = "bottom";
                                    var r = 0;
                                    this.data.datasets.forEach(function(e) {
                                        for (var l = 0; l < e.data.length; l++) {
                                            var n = e._meta[Object.keys(e._meta)[0]].data[l]._model,
                                                a = e._meta[Object.keys(e._meta)[0]].data[l]._yScale.maxHeight;
                                            i.fillStyle = "#444";
                                            var o = n.y - 5;
                                            (a - n.y) / a >= .93 && (o = n.y + 14), "bar" == e.type && r != c && (o += 20), t.length < 31 && i.fillText(pims().Comma(parseFloat(e.data[l])), n.x, o)
                                        }
                                        r++
                                    })
                                }
                            }
                    } else D = [], P = {
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
                    e.display == O.tue ? e.display = !0 : e.display = !1;
                    var z = {
                            hover: {
                                animationDuration: 1,
                                onHover: function(t, i) {
                                    var l = this.getElementAtEvent(t);
                                    if (l.length) {
                                        t.target.style.cursor = "pointer";
                                        try {
                                            var a = l[0]._chart.data,
                                                o = l[0]._datasetIndex,
                                                r = a.datasets[o].label,
                                                s = a.datasets[o].data[l[0]._index];
                                            t = i[0];
                                            var d = this.data.labels[t._index];
                                            e.hover(n, r, s, d)
                                        } catch (t) {
                                            e.hover(n, "-")
                                        }
                                    } else t.target.style.cursor = "default", e.hover(n, "-")
                                }
                            },
                            onClick: function(t, i) {
                                var l = this.getElementAtEvent(t);
                                if (l.length) try {
                                    var a = l[0]._chart.data,
                                        o = l[0]._datasetIndex,
                                        r = a.datasets[o].label,
                                        s = a.datasets[o].data[l[0]._index];
                                    t = i[0];
                                    var d = this.data.labels[t._index];
                                    e.click(n, r, s, d)
                                } catch (t) {
                                    e.click(n, "-")
                                } else e.click(n, "-")
                            },
                            title: {
                                display: e.display,
                                text: e.title,
                                fontSize: e.titleFontSize
                            },
                            legend: F,
                            scales: {
                                xAxes: [{
                                    stacked: r,
                                    ticks: {
                                        autoSkip: !1,
                                        fontSize: e.xAxesFontSize,
                                        maxRotation: e.xLabelAngle,
                                        minRotation: e.xLabelAngle
                                    }
                                }],
                                yAxes: D
                            },
                            tooltips: {
                                enabled: s
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            animation: P
                        },
                        N = "<canvas id='canvas-" + o + "' style='background:" + e.background + "'></canvas>",
                        H = document.getElementById("div_chart_" + o);
                    H.innerHTML = "", $("#div_" + o).show().css({
                        width: e.width,
                        height: e.height,
                        border: e.border
                    });
                    var R = "100%";
                    t.length > 50 && (R = "130%"), t.length > 100 && (R = "150%"), t.length > 150 && (R = "180%"), t.length > 200 && (R = "250%"), t.length > 250 && (R = "300%"), t.length > 300 && (R = "350%"), t.length > 350 && (R = "400%"), t.length > 400 && (R = "500%"), $("#div_chart_" + o).html(N).css({
                        width: R
                    });
                    var M = document.getElementById("canvas-" + o);
                    try {
                        var X = e.name;
                        null == X && (X = "");
                        var W = document.createElement("span");
                        W.innerText = X, W.style.fontSize = e.nameFontSize, H.appendChild(W), $("#div_" + o + " span").css({
                            position: "absolute",
                            left: e.width / 6 + "px",
                            top: 2 * -e.fontSize + "px",
                            fontSize: e.nameFontSize + "px",
                            textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                        })
                    } catch (t) {}
                    if ("bar" == e.chartType) new Chart(M, {
                        type: e.chartType,
                        options: z,
                        data: {
                            labels: h,
                            datasets: A
                        }
                    });
                    else new Chart(M, {
                        type: "horizontalBar",
                        options: z,
                        data: {
                            labels: h,
                            datasets: [{
                                label: a[0],
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
                    var l = new Array,
                        a = new Array;
                    l[0] = new Array, a[0] = new Array;
                    new Array;
                    var d = String(e.dataLabel).split(","),
                        c = String(e.data2Label).split(",");
                    if ("bar" == e.chartType) {
                        for (var p = 1, h = 0; h <= d.length + 1; h++) d[h] != O.dat && (l[p] = new Array, p++);
                        if (c[0] != O.dat)
                            for (p = 0, h = 0; h <= c.length; h++) a[p] = new Array, p++
                    }
                    var u = new Array,
                        g = new Array,
                        f = new Array,
                        m = (new Array, "");
                    i = O.parse(i);
                    for (h = 0; h < i.length; h++) {
                        if (u[h] = i[h][0], e.showDay == O.tue) {
                            var y = String(i[h][0]).split("-"),
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
                            u[h] = i[h][0] + " (" + m + ")"
                        }
                        if ("bar" == e.chartType) {
                            var S = 0,
                                k = [];
                            k[0] = 0;
                            var _ = 0;
                            for (p = 1; p <= d.length; p++) try {
                                d[p] != O.dat && (l[_].push(i[h][p]), 1 == r ? S += parseFloat(i[h][p]) : (k[p] = 0, parseFloat(i[h][p]) > 0 && i[h][p] != O.udf && (k[p] = parseFloat(i[h][p]))), _++)
                            } catch (t) {}
                            if (l[_].push(S), g[h] = 1 == r ? S : maxArray(k), c[0] != O.dat) {
                                var C = 0,
                                    T = [];
                                T[0] = 0;
                                var I = 0;
                                for (p = 0; p < c.length; p++)
                                    if (i[h][c[p]] != O.udf && null != i[h][c[p]]) try {
                                        a[I].push(i[h][c[p]]), 1 == r ? C += parseFloat(i[h][c[p]]) : (C[p] = 0, parseFloat(i[h][c[p]]) > 0 && (T[p] = parseFloat(i[h][c[p]]))), I++
                                    } catch (t) {}
                                    f[h] = 1 == r ? C : maxArray(T)
                            }
                            S
                        } else l[0].push(i[h][1]), g[h] = i[h][1], i[h][1]
                    }
                    var A = new Array,
                        E = (p = 0, !1);
                    if ("bar" == e.chartType) {
                        if (c[0] != O.dat)
                            for (h = 0; h < c.length; h++) A[p] = {
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
                                data: a[h]
                            }, E = !0, p++;
                        for (h = 0; h < d.length; h++) d[h] != O.dat && (A[p] = {
                            type: "bar",
                            label: d[h],
                            backgroundColor: e.colorIndex[h],
                            borderColor: "#444",
                            borderWidth: 1,
                            data: l[h]
                        }, p++);
                        A[p] = {
                            type: "line",
                            label: "",
                            borderColor: "#fff",
                            backgroundColor: "transparent",
                            borderWidth: 0,
                            borderColor: "transparent",
                            fill: !1,
                            data: l[_]
                        }
                    }
                    if (e.legendDisplay == O.tue) {
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
                        var L = 1.2;
                        "" != e.label2String && (L = 2);
                        var D = [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-1",
                                stacked: r,
                                ticks: {
                                    callback: function(t, e, i) {
                                        return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                    },
                                    beginAtZero: !0,
                                    max: maxArray(g) * L,
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
                                        l = this.scales["y-axis-1"].width - 10,
                                        n = this.scales["y-axis-1"].height + this.scales["y-axis-1"].top + 10,
                                        a = document.getElementById("yAxis_" + o).getContext("2d");
                                    a.canvas.width = l, a.drawImage(this.chart.canvas, 0, 0, l, n, 0, 0, l, n), t.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), t.textAlign = "center", t.textBaseline = "bottom";
                                    var r = 0;
                                    this.data.datasets.forEach(function(e) {
                                        for (var l = 0; l < e.data.length; l++) {
                                            var n = e._meta[Object.keys(e._meta)[0]].data[l]._model,
                                                a = e._meta[Object.keys(e._meta)[0]].data[l]._yScale.maxHeight;
                                            t.fillStyle = "#444";
                                            var o = n.y - 5;
                                            (a - n.y) / a >= .93 && (o = n.y + 14), "bar" == e.type && r != p && (o += 20), i.length < 31 && t.fillText(pims().Comma(parseFloat(e.data[l])), n.x, o)
                                        }
                                        r++
                                    })
                                }
                            }
                    } else D = [], P = {
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
                    e.display == O.tue ? e.display = !0 : e.display = !1;
                    var z = {
                            hover: {
                                animationDuration: 1,
                                onHover: function(t, i) {
                                    var l = this.getElementAtEvent(t);
                                    if (l.length) {
                                        t.target.style.cursor = "pointer";
                                        try {
                                            var a = l[0]._chart.data,
                                                o = l[0]._datasetIndex,
                                                r = a.datasets[o].label,
                                                s = a.datasets[o].data[l[0]._index];
                                            t = i[0];
                                            var d = this.data.labels[t._index];
                                            e.hover(n, r, s, d)
                                        } catch (t) {
                                            e.hover(n, "-")
                                        }
                                    } else t.target.style.cursor = "default", e.hover(n, "-")
                                }
                            },
                            onClick: function(t, i) {
                                var l = this.getElementAtEvent(t);
                                if (l.length) try {
                                    var a = l[0]._chart.data,
                                        o = l[0]._datasetIndex,
                                        r = a.datasets[o].label,
                                        s = a.datasets[o].data[l[0]._index];
                                    t = i[0];
                                    var d = this.data.labels[t._index];
                                    e.click(n, r, s, d)
                                } catch (t) {
                                    e.click(n, "-")
                                } else e.click(n, "-")
                            },
                            title: {
                                display: e.display,
                                text: e.title,
                                fontSize: e.titleFontSize
                            },
                            legend: F,
                            scales: {
                                xAxes: [{
                                    stacked: r,
                                    ticks: {
                                        autoSkip: !1,
                                        fontSize: e.xAxesFontSize,
                                        maxRotation: e.xLabelAngle,
                                        minRotation: e.xLabelAngle
                                    }
                                }],
                                yAxes: D
                            },
                            tooltips: {
                                enabled: s
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            animation: P
                        },
                        N = (t = "<canvas id='canvas-" + o + "' style='background:" + e.background + "'></canvas>", document.getElementById("div_chart_" + o));
                    N.innerHTML = "", $("#div_" + o).show().css({
                        width: e.width,
                        height: e.height,
                        border: e.border
                    });
                    var H = "100%";
                    i.length > 50 && (H = "130%"), i.length > 100 && (H = "150%"), i.length > 150 && (H = "180%"), i.length > 200 && (H = "250%"), i.length > 250 && (H = "300%"), i.length > 300 && (H = "350%"), i.length > 350 && (H = "400%"), i.length > 400 && (H = "500%"), $("#div_chart_" + o).html(t).css({
                        width: H
                    });
                    var R = document.getElementById("canvas-" + o);
                    try {
                        var M = e.name;
                        null == M && (M = "");
                        var X = document.createElement("span");
                        X.innerText = M, X.style.fontSize = e.nameFontSize, N.appendChild(X), $("#div_" + o + " span").css({
                            position: "absolute",
                            left: e.width / 6 + "px",
                            top: 2 * -e.fontSize + "px",
                            fontSize: e.nameFontSize + "px",
                            textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                        })
                    } catch (t) {}
                    if ("bar" == e.chartType) new Chart(R, {
                        type: e.chartType,
                        options: z,
                        data: {
                            labels: u,
                            datasets: A
                        }
                    });
                    else new Chart(R, {
                        type: "horizontalBar",
                        options: z,
                        data: {
                            labels: u,
                            datasets: [{
                                label: d[0],
                                backgroundColor: e.colorIndex[0],
                                borderColor: "black",
                                borderWidth: .8,
                                data: l[0]
                            }]
                        }
                    });
                    try {
                        e.callback()
                    } catch (t) {}
                }, this._p_e(n, l)
            },
            _bt_: function(t) {
                var e = this,
                    i = O.is(this),
                    l = this.x,
                    n = this._p_(t),
                    a = (l.split("-"), attr[O.id]),
                    o = param[O.tgg];
                e.toggle[a] = "off";
                var r = [];
                if (String(n.field).split("@").slice(1, 2) == l) var s = String(n.field).split("@").slice(0, 1);
                if (String(n.fieldOther).split("@").slice(1, 2) == l) var d = String(n.fieldOther).split("@").slice(0, 1);
                if (String(n.params).split("@").slice(1, 2) == l) var c = String(n.params).split("@").slice(0, 1);
                if (String(n.where).split("@").slice(1, 2) == l) var p = String(n.where).split("@").slice(0, 1);
                i.createdCallback = function() {
                    if (this.id = a + "_", this.pims = l, n.disabled == O.tue) var t = '<button disabled id="' + a + '" class="pimsButton"><table><tr>';
                    if (n.disabled == O.fls) t = '<button id="' + a + '" class="pimsButton"><table><tr>';
                    "nil 0 0" != n.image ? (t += '<td><img id="img_' + a + '" src="' + String(n.image).split(" ").slice(0, 1) + '" style="width:' + String(n.image).split(" ").slice(1, 2) + "px;height:" + String(n.image).split(" ").slice(2, 3) + 'px"/></td>', t += '<td style="vertical-align:middle;text-align:center">' + n.value + "</td>") : t += '<td style="vertical-align:middle;text-align:center">' + n.value + "</td>", t += "</tr></table></button>", this.innerHTML = "<br>" + t, document.onmousedown = $O$X.prototype.doDown, document.onmouseup = $O$X.prototype.doUp, e._css_id(n, a), $("#" + a).css({
                        borderLeft: "1px solid buttonshadow",
                        borderRight: "2px solid black",
                        borderTop: "1px solid buttonshadow",
                        borderBottom: "2px solid black"
                    }).mousemove(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bkg, n.hoverBgColor), $(this).css(O.co, n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bkg, n.background), $(this).css(O.co, n.color), $("#" + n.hoverId).hide().html("")
                    }).mousedown(function() {
                        var t = document;
                        null != o || o == O.tue ? "off" == e.toggle[a] ? (t.onmousedown = $O$X.prototype.doDown, t.onmouseup = $O$X.prototype.doDown, e.toggle[a] = "on") : (t.onmousedown = $O$X.prototype.doUp, t.onmouseup = $O$X.prototype.doUp, e.toggle[a] = "off") : (t.onmousedown = $O$X.prototype.doDown, t.onmouseup = $O$X.prototype.doUp, e.toggle[a] = "off")
                    }).click(function() {
                        POTATO.Query = 100, POTATO.Submit = 100;
                        for (var t = 0; t < $O$Id.length; t++)
                            if (a == String($O$Id[t])) {
                                var e = String($O$BindId[t]);
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
                        try {
                            o()
                        } catch (t) {}
                        if (null == s || "null" == s || 1 != POTATO.Query && 1 != POTATO.Submit) {
                            if ("null" == s && (1 == POTATO.Query || 1 == POTATO.Submit)) {
                                i = l + O.php, h = [];
                                if (null != r && "null" != c)
                                    for (v = (String(c).match(/AND/g) || []).length, b = String(c).split("AND"), x = 0; x <= v; x++) {
                                        $ = String(b.slice(x, x + 1)).split(":"), w = new Function($.slice(1, 2));
                                        "null" != String($.slice(0, 1)).replace(/\s+/g, "") && (h[String($.slice(0, 1)).replace(/\s+/g, "")] = w())
                                    }
                                pimsData = [], $O$P.prototype._rp_(i, h, function(t) {
                                    POTATO.data = O.parse(t), n.callback()
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
                            if (h.fields = m, h.fieldsValue = y, "null" != c && null != r)
                                for (var v = (String(c).match(/AND/g) || []).length, b = String(c).split("AND"), x = 0; x <= v; x++) {
                                    var $ = String(b.slice(x, x + 1)).split(":"),
                                        w = new Function($.slice(1, 2));
                                    "null" != String($.slice(0, 1)).replace(/\s+/g, "") && (h[String($.slice(0, 1)).replace(/\s+/g, "")] = w())
                                }
                            POTATO.data = [], $O$P.prototype._rp_(i, h, function(t) {
                                POTATO.data = O.parse(t);
                                try {
                                    n.callback()
                                } catch (t) {}
                            })
                        }
                    }), "null" != n.float && $("#" + a + "_").css("float", n.float)
                }, this._p_e(l, i)
            },
            _ci_: function(t) {
                return $(t).parent().children().index(t)
            },
            _css_: function(t, e, i) {
                var l = this._se_a(e, t, O.bkg, "#ffffff"),
                    n = this._se_a(e, t, O.bdr, O.bdr1),
                    a = this._se_a(e, t, O.bdrr, "5px"),
                    o = this._se_a(e, t, O.bxsd, "0 0 0px rgba(0,0,0,0)"),
                    r = this._se_a(e, t, O.co, "black"),
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
                    C = this._se_a(e, t, "paddingBottom", "1px"),
                    T = this._se_a(e, t, "paddingLeft", "1px"),
                    I = this._se_a(e, t, "paddingRight", "1px"),
                    A = this._se_a(e, t, "paddingTop", "1px"),
                    E = this._se_a(e, t, "textAlign", "center"),
                    B = this._se_a(e, t, O.wit, "100px"),
                    F = this._se_a(e, t, O.lft, "0px"),
                    L = this._se_a(e, t, O.tp, "0px");
                return {
                    background: l,
                    border: n,
                    borderRadius: a,
                    boxShadow: o,
                    color: r,
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
                    paddingBottom: C,
                    paddingLeft: T,
                    paddingRight: I,
                    paddingTop: A,
                    position: this._se_a(e, t, O.pst, "static"),
                    textAlign: E,
                    top: L,
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
                    l = this.x,
                    n = this._p_(t);
                "potato.today()" == n.value && (n.value = e.today()), "potato.now()" == n.value && (n.value = e.now());
                var a = n.id;
                i.createdCallback = function() {
                    this.id = a + "_", $O$X.prototype.getAttribute(this, l).index, $O$X.prototype.getAttribute(this, l).field, this.pims = l, n.disabled == O.fls && (this.innerHTML = '<br><input type="text" id="' + a + '"> '), n.disabled != O.tue && "" != n.disabled || (this.innerHTML = '<br><input disabled type="text" id="' + a + '"> '), e._css_id(n, a), "null" != n.float && $("#" + a + "_").css("float", n.float), $("#" + a).attr(O.val, n.value).mousemove(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bkg, n.hoverBgColor), $(this).css(O.co, n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            padding: n.padding,
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            fontSize: "15px",
                            fontFamily: "Arial"
                        })
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bkg, n.background), $(this).css(O.co, n.i), $("#" + n.hoverId).hide().html("")
                    }).change(function() {
                        for (var t = 0; t < $O$Id.length; t++)
                            if (a == String($O$Id[t])) {
                                var e = String($O$BindId[t]);
                                document.getElementById(e).innerText = document.getElementById(a).value
                            }
                        try {
                            n.change(l)
                        } catch (t) {}
                    }).click(function() {
                        try {
                            potatoListObject.style.display = "none"
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
                }, this._p_e(l, i)
            },
            _dn_: function(t) {
                var e = this._p_(t),
                    i = this.getHTMLElement(),
                    l = this.x,
                    n = e.model,
                    a = this.x,
                    o = l.split("-"),
                    r = o.slice(2, 3);
                o.slice(2, 3);
                if (String(e.params).split("@").slice(1, 2) == l) var s = String(e.params).split("@").slice(0, 1);
                i.createdCallback = function() {
                    this.innerHTML = '<div id="' + a + '"></div> '
                };
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: i
                    })
                } catch (t) {
                    try {
                        pimsElement = document.registerPotato(l, {
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
                this.Post(n, d, function(t) {
                    var i = new Array;
                    i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                    for (var n = 0; n < t.length; n++)
                        for (var o = 0; o < i.length; o++) i[o][n] = t[n][o];
                    var s = document.getElementById(a);
                    s.innerHTML = "", $("#" + a).append('<canvas id="canvas-' + r + '" >読み込み中．．．</canvas>');
                    var d = document.getElementById("canvas-" + r);
                    if ($("#" + a).css({
                            width: e.width,
                            height: e.height,
                            border: e.border,
                            borderRadius: e.borderRadius,
                            position: e.position,
                            top: e.top,
                            left: e.left
                        }), "null" != e.imageDir) {
                        var c = document.createElement("div");
                        c.setAttribute(O.id, "note-doughnut-" + r), s.appendChild(c), $("#note-doughnut-" + r).css({
                            fontSize: e.fontSize + "px",
                            position: "relative",
                            left: e.width / 10 + "px",
                            width: .8 * e.width + "px",
                            padding: "5px 5px 5px 5px",
                            textAlign: "center"
                        });
                        var p = document.createElement("img");
                        p.setAttribute(O.id, "img-doughnut-" + r), p.setAttribute("onerror", "this.style.display='none'"), s.appendChild(p), $("#img-doughnut-" + r).css({
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
                        if ($("#note-doughnut-" + r).show().html(h).css(O.bdr, "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var u = String(i[0][0]).split("-"),
                            g = e.imageDir + u[0] + "-" + String(u[1]).substring(0, 1) + ".jpg";
                        else g = e.imageDir + i[0][0] + ".jpg";
                        document.getElementById("img-doughnut-" + r).src = g, document.getElementById("img-doughnut-" + r).style.border = "5px solid " + i[2][0]
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
                                    for (var l = 0; l < e.data.length; l++) {
                                        var n = e._meta[Object.keys(e._meta)[0]],
                                            a = n.data[l]._model,
                                            o = n.total,
                                            r = a.innerRadius + (a.outerRadius - a.innerRadius) / 2,
                                            s = a.startAngle,
                                            d = s + (a.endAngle - s) / 2,
                                            c = r * Math.cos(d),
                                            p = r * Math.sin(d);
                                        i.fillStyle = "#000";
                                        var h = String(Math.round(e.data[l] / o * 100)) + "%";
                                        if (l < e.data.length - 1) {
                                            var u = a.x + c + 70;
                                            p > 0 && c < 0 && (u = a.x + c - 50), i.fillText(t[l][0] + ": " + t[l][1] + ", " + h, u, a.y + p + 8)
                                        }
                                    }
                                    h = String(Math.round(e.data[e.data.length - 1] / o * 100)) + "%";
                                    i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + h, a.x + c, a.y + 2 * p)
                                })
                            }
                        },
                        hover: {
                            onHover: function(t) {
                                this.getElementAtEvent(t).length ? t.target.style.cursor = "pointer" : t.target.style.cursor = "default", "null" != e.imageDir && (pims("#img-doughnut-" + r).style.display = "block")
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
                                        if ($("#note-doughnut-" + r).show().html(i).css(O.bdr, "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var l = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                            n = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                        else n = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                        document.getElementById("img-doughnut-" + r).src = n, document.getElementById("img-doughnut-" + r).style.display = "block", document.getElementById("img-doughnut-" + r).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                    }
                                } else if ("null" != e.imageDir) {
                                    i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                    if ($("#note-doughnut-" + r).show().html(i).css(O.bdr, "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) l = String(this._data.labels[e.targetIndex]).split("-"), n = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                    else n = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                    document.getElementById("img-doughnut-" + r).src = n, document.getElementById("img-doughnut-" + r).style.display = "block", document.getElementById("img-doughnut-" + r).style.border = "5px solid " + e.targetColor
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
                var e, i, l = this._p_(t);
                potato._ = this._p_(t);
                var n = paramE[O.wit],
                    a = paramE[O.idc],
                    o = paramE[O.tl],
                    r = paramE[O.trg],
                    s = paramE[O.tp],
                    d = paramE[O.lft],
                    c = attr[O.dgdp];
                l.id;
                potato.table = document.getElementById(l.id);
                document.getElementById(l.id);
                var p = new Array;
                p = paramE[O.ec];
                var h = l.id;

                function u() {
                    var t = document.getElementById(l.id);
                    $O$P.nodevalue = $O$S.prototype.l($O$V().lp);
                    var r = "-";
                    try {
                        r = t.rows[potato.ri].cells[l.matchCol].innerText
                    } catch (t) {}
                    var u = -1;
                    try {
                        u = p.indexOf(O._ci_(this))
                    } catch (t) {}
                    if ("off" != potato.edit && $O$T != this && potato.closeEditCell(e, i), !("-" != l.matchCol && r != l.matchValue || O._ci_(this) != p && -1 == u && "any" != p)) {
                        var g = 0,
                            f = this;
                        try {
                            f.firstChild.value
                        } catch (t) {
                            f.innerText = " "
                        }
                        if ($O$T = this, O.ipt == f.firstChild.nodeName) {
                            potato.edit = "off";
                            f = this;
                            var m = document.createTextNode(f.firstChild.value);
                            f.replaceChild(m, f.firstChild), g = 1, $("#keypadtable").hide(), potato.trigger = 0, $O$P.nodevalue = f.firstChild.nodeValue, null != c && "" != t.rows[potato.clickRow].cells[potato.clickCol].innerText && (t.rows[potato.clickRow].cells[potato.clickCol].innerHTML = "<div class='" + O.dgdp + "-" + h + "'>" + t.rows[potato.clickRow].cells[potato.clickCol].innerText, O._t_d(h), O.dragdropClass = null, O.dragdropId = null), l.callback($O$P.nodevalue, potato.oldValue, t.rows[potato.ri].cells[a].innerText, potato.ci)
                        }
                        if (1 != g && O.ipt != f.firstChild.nodeName && "IMG" != f.firstChild.nodeName) {
                            O.dragdropClass = c, O.dragdropId = h, e = potato.clickRow, i = potato.clickCol, potato.edit = "on";
                            var y = document.createElement("input");
                            if (y.select(), y.value = t.rows[potato.ri].cells[potato.ci].innerText, y.setAttribute(O.atc, "off"), y.style.width = n, y.style.height = "25px", y.style.fontSize = "15px", y.style.fontWeight = "bold", y.style.background = "rgb(255,244,255)", O.udf != f.firstChild.nodeValue && (f.replaceChild(y, f.firstChild), f.firstChild.select(), f.firstChild.focus()), o != O.udf) {
                                var v = document.createElement("div");
                                if (v.innerHTML = '<div id="keypadtable" class="keypad"></div>', document.body.appendChild(v), $(".keypad").hide(), keyID = "keypadtable", -1 != String(o).indexOf(".htm")) $("#keypadtable").load(o);
                                else if (o == O.dft) {
                                    var b = "height:60px;width:80px;font-size:27px;background:#CED8F6;cursor: pointer;";
                                    b += "border-radius:10px;border:1px solid black;", css_c = "width:170px;";
                                    var x = "<table>";
                                    x += "<tr>", x += "<td><input type='button' style='" + b + "' value='7' onclick='potato.getKey(\"7\")'></td>", x += "<td><input type='button' style='" + b + "' value='8' onclick='potato.getKey(\"8\")'></td>", x += "<td><input type='button' style='" + b + "' value='9' onclick='potato.getKey(\"9\")'></td>", x += "</tr>", x += "<tr>", x += "<td><input type='button' style='" + b + "' value='4' onclick='potato.getKey(\"4\")'></td>", x += "<td><input type='button' style='" + b + "' value='5' onclick='potato.getKey(\"5\")'></td>", x += "<td><input type='button' style='" + b + "' value='6' onclick='potato.getKey(\"6\")'></td>", x += "</tr>", x += "<tr>", x += "<td><input type='button' style='" + b + "' value='1' onclick='potato.getKey(\"1\")'></td>", x += "<td><input type='button' style='" + b + "' value='2' onclick='potato.getKey(\"2\")'></td>", x += "<td><input type='button' style='" + b + "' value='3' onclick='potato.getKey(\"3\")'></td>", x += "</tr>", x += "<tr>", x += "<td><input type='button' style='" + b + "background:#F6CECE;' value='CE' onclick='potato.getKey(\"CE\")'></td>", x += "<td><input type='button' style='" + b + "' value='0' onclick='potato.getKey(\"0\")'></td>", x += "<td><input type='button' style='" + b + "' value='.' onclick='potato.getKey(\".\")'></td>", x += "</tr>", x += "<tr>", x += "<td colspan=2><input type='button' style='" + b + css_c + "background:#D8D8D8;' value='CLOSE' onclick='potato.closeEditCell()'/></td>", x += "<td><input type='button' style='" + b + "background:#CEF6CE;' value='⇦' onclick='potato.getKey(\"<-\")'></td>", x += "</tr>", x += "</table>", $("#keypadtable").html(x)
                                } else $("#keypadtable").html(o);
                                var w = document.documentElement,
                                    S = (window.pageXOffset || w.scrollLeft) - (w.clientLeft || 0),
                                    k = (window.pageYOffset || w.scrollTop) - (w.clientTop || 0),
                                    _ = parseFloat(event.clientY) + 20 + parseFloat(k),
                                    C = parseFloat(event.clientX) - parseFloat(S);
                                null != s && (_ = parseFloat(event.clientY) + 20 + parseFloat(s) + parseFloat(k)) > 300 && (_ = event.clientY - 220), null != d && (C = parseFloat(event.clientX) + parseFloat(d) - parseFloat(S)) > 900 && (C = event.clientX - 100), $("#keypadtable").css({
                                    width: "200px",
                                    height: "150px",
                                    margin: l.marginKey,
                                    display: "block",
                                    position: "absolute",
                                    top: _ + "px",
                                    left: C + "px",
                                    zIndex: 2e3
                                })
                            }
                            $O$U = y
                        }
                    }
                }
                $("#" + l.id + " td").click(function() {
                    if (potato.ci = O._ci_(this), potato.ri = O._ri_(this), 1 != potato.trigger) {
                        var t = document.getElementById(l.id);
                        potato.oldValue = t.rows[potato.ri].cells[potato.ci].innerText, potato.trigger = 1
                    }
                });
                for (var g = document.getElementById(l.id).getElementsByTagName("td"), f = 0; f < g.length; f++) g[f].onkeyup = function(t) {}, "dblclick" == r ? g[f].ondblclick = u : r == O.clk ? g[f].onclick = u : g[f].ondblclick = u, g[f].onmousemove = function() {}
            },
            _ect_: function(t) {
                var e = this._p_(t);
                pimsParameters = e;
                var i = e.id,
                    l = document.getElementById(e.id),
                    n = new Array;

                function a() {
                    var t = "-";
                    try {
                        t = l.rows[$O$P.rowId].cells[e.matchCol].innerText
                    } catch (t) {}
                    try {
                        if (!("-" != e.matchCol && t != e.matchValue || O._ci_(this) != n && -1 == n.indexOf(O._ci_(this)) && "any" != n)) {
                            var i = 0,
                                a = this;
                            try {
                                a.firstChild.value
                            } catch (t) {
                                a.innerText = " "
                            }
                            if ($O$T = this, O.ipt == a.firstChild.nodeName) {
                                a = this;
                                o = document.createTextNode(a.firstChild.value), a.replaceChild(o, a.firstChild), i = 1, $("#keypadtable").hide()
                            }
                            if (1 != i && O.ipt != a.firstChild.nodeName && "IMG" != a.firstChild.nodeName) {
                                var r = document.createElement("input");
                                r.select();
                                var s = a.firstChild.nodeValue;
                                "null" != s && s != O.udf && null != s && null != s || (s = a.firstChild.innerText), r.value = s, r.setAttribute(O.atc, "off"), r.style.width = e.editWidth + "px", r.style.height = "25px", r.style.fontSize = "15px", r.style.fontWeight = "bold", r.style.background = "rgb(255,244,255)", O.udf != a.firstChild.nodeValue && (a.replaceChild(r, a.firstChild), a.firstChild.select(), a.firstChild.focus());
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
                                }), $O$U = r
                            }
                        }
                    } catch (t) {}
                }
                n = e.targetCol;
                for (var o = document.getElementById(i), r = o.getElementsByTagName("td"), s = 0; s < r.length; s++) r[s].onkeyup = function(t) {}, "dblclick" == e.trigger ? r[s].ondblclick = a : e.trigger == O.clk ? r[s].onclick = a : r[s].ondblclick = a, r[s].onmousemove = function() {}
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
                        s.FolderExists("C:\\$POTATO") || s.CreateFolder("C:\\$POTATO"), a = o.Workbooks.Open(r.slice(0, 1) + e)
                    } else a = o.Workbooks.Add;
                    a.Worksheets(1).Paste
                }
                window.clipboardData.clearData()
            },
            _kb_: function(t) {
                var e = O.is(this),
                    i = this.x,
                    l = this._p_(t),
                    n = l.id;
                e.createdCallback = function() {
                    this.id = n + "_", $O$X.prototype.getAttribute(this, n).index, $O$X.prototype.getAttribute(this, n).field, this.pims = n;
                    var t = '<div id="div-' + n + '"> ';
                    t += '<input type="text" id="' + n + '"> ', t += '<div class="keypad" id="keypad-' + n + '"></div> ', t += "</div> ", this.innerHTML = t, $O$U = document.getElementById(n), pims("#div-" + n).style.display = l.display, pims("#div-" + n).style.position = l.position, pims("#div-" + n).style.left = l.left + "px", pims("#div-" + n).style.top = l.top + "px", POTATO("#" + n).style.top = l.top + "px", $("#div-" + n).css({
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
                    }).attr(O.val, l.value).mousemove(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.hoverBgColor), $(this).css(O.co, l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: l.hoverHeight + "px",
                            width: l.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.background), $(this).css(O.co, l.i), $("#" + l.hoverId).hide().html("")
                    }).click(function() {
                        try {
                            for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + n, $(".keypad").hide(), $(O.kp + n).show(), $("#KeyBoard").show();
                        var i = document.documentElement,
                            a = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                            o = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                        $(O.kp + n).css({
                            position: "absolute",
                            top: parseFloat(event.clientY) + 20 + parseFloat(l.topKey) + parseFloat(o) + "px",
                            left: parseFloat(event.clientX) + parseFloat(l.leftKey) - parseFloat(a) + "px"
                        }), $O$B = document.getElementById(n);
                        try {
                            l.click()
                        } catch (t) {}
                    }), $(O.kp + n).load(l.htm).click(function() {
                        try {
                            l.change(n)
                        } catch (t) {}
                    }).css({
                        width: "200px",
                        height: "150px",
                        display: l.displayKey
                    })
                }, this._p_e(i, e)
            },
            _kp_: function(t) {
                var e = this,
                    i = O.is(this),
                    l = this._p_(t),
                    n = l.id,
                    a = this.x,
                    o = param.ngmodel,
                    r = param[O.tl];
                i.createdCallback = function() {
                    if (this.id = l.id + "_", $O$X.prototype.getAttribute(this, n).index, $O$X.prototype.getAttribute(this, n).field, this.pims = n, l.disabled == O.tue || "" == l.disabled) {
                        var t = '<div disabled id="div-' + n + '"> ';
                        "none" == l.display ? t += null == o ? '<input disabled type="text" id="' + n + '" class="' + l.className + '"> ' : '<input disabled ng-model="' + o + '" type="text" id="' + n + '" class="' + l.className + '"> ' : t += null == o ? '<br><input disabled type="text" id="' + n + '"  class="' + l.className + '" > ' : '<br><input disabled ng-model="' + o + '" type="text" id="' + n + '"  class="' + l.className + '" > '
                    }
                    if (l.disabled == O.fls) {
                        t = '<div id="div-' + n + '"> ';
                        "none" == l.display ? t += null == o ? '<input type="text" id="' + n + '" class="' + l.className + '"> ' : '<input ng-model="' + o + '" type="text" id="' + n + '" class="' + l.className + '"> ' : t += null == o ? '<br><input type="text" id="' + n + '"  class="' + l.className + '" > ' : '<br><input ng-model="' + o + '" type="text" id="' + n + '"  class="' + l.className + '" > '
                    }
                    t += '<div class="keypad" id="keypad-' + n + '" class="keypad"></div> ', t += "</div> ", this.innerHTML = "<br>" + t, $O$U = document.getElementById(n), "potato.now" == l.value && (l.value = e.now), "potato.today()" == l.value && (l.value = e.today()), "potato.now()" == l.value && (l.value = e.now()), "null" != l.float && $("#" + n + "_").css("float", l.float), $("#div-" + n).css({
                        display: l.display,
                        position: l.position,
                        left: l.left,
                        top: l.top,
                        marginTop: l.marginTop
                    }), e._css_id(l, n), $("#" + n).attr(O.val, l.value).mousemove(function() {
                        "null" != l.hoverBgColor && l.hoverBgColor != O.fls && ($(this).css(O.bkg, l.hoverBgColor), $(this).css(O.co, l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: l.hoverHeight + "px",
                            width: l.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        }))
                    }).mouseout(function() {
                        "null" != l.hoverBgColor && l.hoverBgColor != O.fls && $(this).css(O.bkg, l.background), $(this).css(O.co, l.i), $("#" + l.hoverId).hide().html("")
                    }).click(function() {
                        if ($(".keypad").hide(), null != r) - 1 != r.indexOf("htm") || -1 != r.indexOf("html") ? $(O.kp + n).load(r) : $(O.kp + n).html(r);
                        else {
                            var t = "height:60px;width:80px;font-size:27px;background:#CED8F6;cursor: pointer;";
                            t += "border-radius:10px;border:1px solid black;", css_c = "width:170px;", r = "<table>", r += "<tr>", r += "<td><input type='button' style='" + t + "' value='7' onclick='potato.getKey(\"7\")'></td>", r += "<td><input type='button' style='" + t + "' value='8' onclick='potato.getKey(\"8\")'></td>", r += "<td><input type='button' style='" + t + "' value='9' onclick='potato.getKey(\"9\")'></td>", r += "</tr>", r += "<tr>", r += "<td><input type='button' style='" + t + "' value='4' onclick='potato.getKey(\"4\")'></td>", r += "<td><input type='button' style='" + t + "' value='5' onclick='potato.getKey(\"5\")'></td>", r += "<td><input type='button' style='" + t + "' value='6' onclick='potato.getKey(\"6\")'></td>", r += "</tr>", r += "<tr>", r += "<td><input type='button' style='" + t + "' value='1' onclick='potato.getKey(\"1\")'></td>", r += "<td><input type='button' style='" + t + "' value='2' onclick='potato.getKey(\"2\")'></td>", r += "<td><input type='button' style='" + t + "' value='3' onclick='potato.getKey(\"3\")'></td>", r += "</tr>", r += "<tr>", r += "<td><input type='button' style='" + t + "background:#F6CECE;' value='CE' onclick='potato.getKey(\"CE\")'></td>", r += "<td><input type='button' style='" + t + "' value='0' onclick='potato.getKey(\"0\")'></td>", r += "<td><input type='button' style='" + t + "' value='.' onclick='potato.getKey(\".\")'></td>", r += "</tr>", r += "<tr>", r += "<td colspan=2><input type='button' style='" + t + css_c + "background:#D8D8D8;' value='CLOSE' onclick='potato.closePad()'/></td>", r += "<td><input type='button' style='" + t + "background:#CEF6CE;' value='⇦' onclick='potato.getKey(\"<-\")'></td>", r += "</tr>", r += "</table>", $(O.kp + n).html(r)
                        }
                        try {
                            for (var e = document.getElementsByClassName("pims-list"), i = 0; i < e.length; i++) e[i].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + n, $(".keypad").hide(), $(O.kp + n).show(), $("#KeyPad").show();
                        var a = document.documentElement,
                            o = (window.pageXOffset || a.scrollLeft) - (a.clientLeft || 0),
                            s = (window.pageYOffset || a.scrollTop) - (a.clientTop || 0),
                            d = parseFloat(event.clientY) + 20 + parseFloat(l.top) + parseFloat(s),
                            c = parseFloat(event.clientX) + parseFloat(l.left) - parseFloat(o);
                        $(O.kp + n).css({
                            zIndex: "2000",
                            position: "absolute",
                            top: d + "px",
                            left: c + "px"
                        }), $O$U = document.getElementById(n);
                        try {
                            l.click()
                        } catch (t) {}
                    }).keyup(function(t) {
                        for (var e = 0; e < $O$Id.length; e++)
                            if (n == String($O$Id[e])) {
                                var i = String($O$BindId[e]);
                                document.getElementById(i).innerText = document.getElementById(n).value
                            }
                    }), $(O.kp + n).click(function() {
                        for (var t = 0; t < $O$Id.length; t++)
                            if (n == String($O$Id[t])) {
                                var e = String($O$BindId[t]);
                                document.getElementById(e).innerText = document.getElementById(n).value
                            }
                        try {
                            l.change(n)
                        } catch (t) {}
                        try {
                            l.click(n)
                        } catch (t) {}
                    }).css({
                        width: "200px",
                        height: "150px",
                        display: l.displayKey
                    })
                }, this._p_e(a, i)
            },
            _lt_: function(t) {
                var i = this,
                    l = O.is(this),
                    a = this.x,
                    o = this._p_(t),
                    r = o.id,
                    s = param.ngmodel;
                "potato.today()" == o.value && (o.value = i.today()), "potato.now()" == o.value && (o.value = i.now()), l.createdCallback = function() {
                    if (this.id = r + "_", $O$X.prototype.getAttribute(this, r).index, $O$X.prototype.getAttribute(this, r).field, this.pims = r, "none" == o.display ? this.innerHTML = null == s ? '<input type="text" id="' + r + '" class="' + o.className + '"> ' : '<input ng-model="' + s + '" type="text" id="' + r + '" class="' + o.className + '"> ' : this.innerHTML = null == s ? '<br><input type="text" id="' + r + '"  class="' + o.className + '" > ' : '<br><input ng-model="' + s + '" type="text" id="' + r + '"  class="' + o.className + '" > ', this.innerHTML += '<div id="div-' + r + '" onscroll="pims(\'div-' + r + "').scrolly('locked_top',0,0)\" class=\"pims-list\"> ", i._css_id(o, r), $("#" + r).attr({
                            value: o.value,
                            type: o.type
                        }).mousemove(function() {
                            "null" != o.hoverBgColor && $(this).css(O.bkg, o.hoverBgColor), $(this).css(O.co, o.hoverColor), "" != o.hoverText && $("#" + o.hoverId).html(o.hoverText).show().css({
                                fontSize: "15px",
                                fontFamily: "Arial",
                                padding: "3px 3px 3px 3px",
                                height: o.hoverHeight,
                                width: o.hoverWidth,
                                background: "#ffffe5",
                                border: O.bdr1,
                                position: "absolute",
                                top: event.clientY + 30,
                                left: event.clientX - 20,
                                borderRadius: "3px"
                            })
                        }).mouseout(function() {
                            "null" != o.hoverBgColor && $(this).css(O.bkg, o.background), $(this).css(O.co, o.i), $("#" + o.hoverId).hide().html("")
                        }).keyup(function(t) {
                            for (var e = 0; e < $O$Id.length; e++)
                                if (r == String($O$Id[e])) {
                                    var i = String($O$BindId[e]);
                                    document.getElementById(i).innerText = document.getElementById(r).value
                                }
                            try {
                                o.keyup(t)
                            } catch (t) {}
                        }).change(function() {
                            try {
                                o.change()
                            } catch (t) {}
                        }), String(o.listWidth).split("_").slice(1, 2) == a) var l = String(o.listWidth).split("_").slice(0, 1);
                    if (String(o.listHeight).split("_").slice(1, 2) == a) var d = String(o.listHeight).split("_").slice(0, 1);
                    if (String(o.listTop).split("_").slice(1, 2) == a) var c = String(o.listTop).split("_").slice(0, 1);
                    if (String(o.listLeft).split("_").slice(1, 2) == a) var p = String(o.listLeft).split("_").slice(0, 1);
                    if (String(o.params).split("@").slice(1, 2) == a) var h = String(o.params).split("@").slice(0, 1);
                    if (String(o.where).split("@").slice(1, 2) == a) var u = String(o.where).split("@").slice(0, 1);
                    document.getElementById(r).onclick = function(o) {
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
                        if ("block" != document.getElementById("div-" + r).style.display && $(".pims-list").css({
                                display: "none",
                                height: "0px"
                            }), document.getElementById("div-" + r).style.height == s.listHeight) document.getElementById("div-" + r).style.height = "0px";
                        else {
                            try {
                                potatoListObject.style.display = "none"
                            } catch (t) {}
                            $("#div-" + r).css(O.dpy, "block");
                            var f = param.model;
                            null == f && -1 != String(param.data).indexOf(".php") && (f = param.data);
                            var m = [];
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
                            var C = i.getAttr(a, O.hdr),
                                T = i.getAttr(a, "listTextAlign");
                            null == T && (T = "center");
                            var I = i.getAttr(a, "listFontSizeTH");
                            null == I && (I = "18px");
                            var A = i.getAttr(a, "listFontSizeTD");
                            null == A && (A = "18px");
                            var E = i.getAttr(a, "listFontFamilyTD");
                            null == E && (E = "Tempus Sans ITC");
                            var B = i.getAttr(a, "listFontFamilyTH");
                            null == B && (B = "Tempus Sans ITC");
                            var F = i.getAttr(a, "listFontColorTH");
                            null == F && (F = "Black");
                            var L = i.getAttr(a, "listFontColorTD");
                            null == L && (L = "Black");
                            var D = i.getAttr(a, "listFontWeightTD");
                            null == D && (D = "normal");
                            var P = i.getAttr(a, "listFontWeightTH");
                            null == P && (P = "normal");
                            var z = "<table class='potato-list-table' id='list-" + r + "' >";
                            if (null != f) $O$P.prototype._rp_(f, m, function(t) {
                                var o = i.getAttr(a, O.hdr),
                                    h = O.parse(t);
                                if (null == o) {
                                    var u = 0;
                                    for (e in z += "<tr>", h[0]) "-" != h[0][e] ? z += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + h[0][e] + "</th>" : z += "<th style='display:none'>" + h[0][e] + "</th>", u++;
                                    for (n in z += "</tr>", h)
                                        if (O.udf != h[n][0] && null != h[n][0] && n > 0) {
                                            z += "<tr>";
                                            for (var g = 0; g < u; g++) "-" != h[0][g] ? z += "<td>" + h[n][g] + "</td>" : z += "<td style='display:none'>" + h[n][g] + "</td>";
                                            z += "</tr>"
                                        }
                                } else {
                                    o = String(o).split(",");
                                    for (e in z += "<tr>", o) "-" != o[e] ? z += "<th style='border:1px solid black;font-size:" + I + ";color:" + F + ";text-align:" + T + ";font-weight:" + P + ";font-family:" + B + "'>" + o[e] + "</th>" : z += "<th style='display:none'>" + o[e] + "</th>";
                                    for (n in z += "</tr>", h) {
                                        for (e in z += "<tr>", o) "-" != o[e] ? z += "<td>" + h[n][e] + "</td>" : z += "<td style='display:none'>" + h[n][e] + "</td>";
                                        z += "</tr>"
                                    }
                                }
                                z += "</table>", document.getElementById("div-" + r).style.height = "0px";
                                var f = String(c).split("px"),
                                    m = String(p).split("px");
                                potatoListObject = document.getElementById("div-" + r), $("#div-" + r).html(z).css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: events.clientLeft + parseFloat(m.slice(0, 1)) + "px",
                                    top: events.clientTop + parseFloat(f.slice(0, 1)) + "px",
                                    height: d,
                                    width: l,
                                    overflow: "auto",
                                    border: O.bdr0,
                                    borderRadius: 0,
                                    background: "transparent",
                                    zIndex: 1e4
                                }), $("#list-" + r + " td").css({
                                    fontFamily: s.fontFamily,
                                    fontWeight: s.fontWeight,
                                    fontSize: s.fontSize + "px"
                                }).click(function() {
                                    var t = document.getElementById("list-" + r),
                                        e = O._ri_(this),
                                        i = O._ci_(this);
                                    if (t.rows[e].cells[0].innerText != O.close && "CLOSE" != t.rows[e].cells[0].innerText) {
                                        POTATO(r).value(t.rows[e].cells[0].innerText);
                                        for (var l = 0; l < $O$Id.length; l++)
                                            if (r == String($O$Id[l])) {
                                                var n = String($O$BindId[l]);
                                                document.getElementById(n).innerText = document.getElementById(r).value
                                            }
                                    } else $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), $("#div-" + r).html("");
                                    try {
                                        s.click(t.rows[e], a, i), $("#div-" + r).html("")
                                    } catch (t) {}
                                    document.getElementById("div-" + r).style.height = "0px"
                                }), $("#list-" + r + " th").css(O.csr, "pointer").click(function() {
                                    var t = document.getElementById("list-" + r),
                                        e = O._ri_(this);
                                    ci = O._ci_(this), $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), $("#div-" + r).hide().html(""), document.getElementById(r).style.background = s.background;
                                    try {
                                        s.click(t.rows[e], a, ci)
                                    } catch (t) {}
                                    document.getElementById("div-" + r).style.height = "0px"
                                });
                                try {
                                    s.callback(a)
                                } catch (t) {}
                            });
                            else {
                                var N = i.getAttr(a, O.dat),
                                    H = (v = O.parse(N), 0);
                                if (null == C) {
                                    for (e in z += "<tr>", v[0]) "" != v[0][e] ? z += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + v[0][e] + "</th>" : z += "<th style='display:none'>" + v[0][e] + "</th>", H++;
                                    for (n in z += "</tr>", v)
                                        if (O.udf != v[n][0] && null != v[n][0] && n > 0) {
                                            z += "<tr>";
                                            for (var R = 0; R < H; R++) "" != v[0][R] ? z += "<td style='text-align:" + T + "'>" + v[n][R] + "</td>" : z += "<td style='display:none'>" + v[n][R] + "</td>";
                                            z += "</tr>"
                                        }
                                } else {
                                    C = String(C).split(",");
                                    for (e in z += "<tr>", C) "-" != C[e] ? z += "<th style='border:1px solid black;font-size:" + I + ";color:" + F + ";text-align:" + T + ";font-weight:" + P + ";font-family:" + B + "'>" + C[e] + "</th>" : z += "<th style='display:none'>" + C[e] + "</th>", H++;
                                    for (n in z += "</tr>", v)
                                        if (O.udf != v[n][0] && null != v[n][0] && n >= 0) {
                                            z += "<tr>";
                                            for (R = 0; R < H; R++) "-" != C[R] ? z += "<td style='font-size:" + A + ";color:" + L + ";text-align:" + T + ";font-weight:" + D + ";font-family:" + E + "'>" + v[n][R] + "</td>" : z += "<td style='display:none'>" + v[n][R] + "</td>";
                                            z += "</tr>"
                                        }
                                }
                                z += "</table>", document.getElementById("div-" + r).style.height = "0px";
                                var M = String(c).split("px"),
                                    X = String(p).split("px");
                                potatoListObject = document.getElementById("div-" + r), $("#div-" + r).html(z).css({
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
                                }), $("#list-" + r + " td").css({
                                    fontFamily: s.fontFamily,
                                    fontWeight: s.fontWeight,
                                    fontSize: s.fontSize + "px"
                                }).click(function() {
                                    var t = document.getElementById("list-" + r),
                                        e = O._ri_(this),
                                        i = O._ci_(this);
                                    if (t.rows[e].cells[0].innerText != O.close && "CLOSE" != t.rows[e].cells[0].innerText) {
                                        POTATO(r).value(t.rows[e].cells[0].innerText), $(document.getElementById(r)).trigger("change");
                                        for (var l = 0; l < $O$Id.length; l++)
                                            if (r == String($O$Id[l])) {
                                                var n = String($O$BindId[l]);
                                                document.getElementById(n).innerText = document.getElementById(r).value
                                            }
                                    } else $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), $("#div-" + r).html("");
                                    try {
                                        s.click(t.rows[e], a, i), $("#div-" + r).html("")
                                    } catch (t) {}
                                    document.getElementById("div-" + r).style.height = "0px"
                                }), $("#list-" + r + " th").css(O.csr, "pointer").click(function() {
                                    var t = document.getElementById("list-" + r),
                                        e = O._ri_(this);
                                    ci = O._ci_(this), $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), $("#div-" + r).hide().html(""), document.getElementById(r).style.background = s.background;
                                    try {
                                        s.click(t.rows[e], a, ci)
                                    } catch (t) {}
                                    document.getElementById("div-" + r).style.height = "0px"
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
                    o = a.id;
                i.createdCallback = function() {
                    this.id = o + "_", this.pims = o;
                    var i = a.menuTitle.split(","),
                        r = a.menuModel.split(",");
                    this.innerHTML = "<table><tr>";
                    for (var s = 0; s < i.length; s++) this.innerHTML += '<td><a id="' + o + "-" + i[s] + '" name="' + r[s] + '" class="' + a.id + '" >' + i[s] + "</a></td>", $("#" + o + "-" + i[s]).css({
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
                        "null" != a.hoverBgColor && $(this).css(O.bkg, a.hoverBgColor), $(this).css(O.co, a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
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
                        "null" != a.hoverBgColor && $(this).css(O.bkg, a.background), $(this).css(O.co, a.i), $("#" + a.hoverId).hide().html("")
                    }).keyup(function(t) {
                        for (var e = 0; e < $O$Id.length; e++)
                            if (o == String($O$Id[e])) {
                                var i = String($O$BindId[e]);
                                document.getElementById(i).innerText = document.getElementById(o).value
                            }
                        try {
                            a.keyup(t)
                        } catch (t) {}
                    }).change(function() {
                        try {
                            a.change()
                        } catch (t) {}
                    });
                    if (this.innerHTML += "</tr></table>", this.innerHTML += '<div id="div-' + o + '" onscroll="pims(\'div-' + o + "').scrolly('locked_top',0,0)\" class=\"" + a.id + '"> ', String(a.widthTable).split("_").slice(1, 2) == l) var d = String(a.widthTable).split("_").slice(0, 1);
                    if (String(a.heightTable).split("_").slice(1, 2) == l) var c = String(a.heightTable).split("_").slice(0, 1);
                    if (String(a.marginTop).split("_").slice(1, 2) == l) var p = String(a.marginTop).split("_").slice(0, 1);
                    if (String(a.marginLeft).split("_").slice(1, 2) == l) var h = String(a.marginLeft).split("_").slice(0, 1);
                    if (String(a.params).split("@").slice(1, 2) == l) var u = String(a.params).split("@").slice(0, 1);
                    if (String(a.where).split("@").slice(1, 2) == l) var g = String(a.where).split("@").slice(0, 1);
                    $("." + o).mouseenter(function(i) {
                        $O$Menu = 1;
                        var a = $O$P.prototype._p_(t),
                            r = u;
                        if ("block" != document.getElementById("div-" + o).style.display && $(".pims-list").css({
                                display: "none",
                                height: "0px"
                            }), document.getElementById("div-" + o).style.height == a.heightTable + "px") document.getElementById("div-" + o).style.height = "0px";
                        else {
                            $("#div-" + o).css("marginTop", "-2px");
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
                            if (null != r && "null" != u)
                                for (var b = (String(u).match(/AND/g) || []).length, x = String(u).split("AND"), w = 0; w <= b; w++) {
                                    var S = String(x.slice(w, w + 1)).split(":"),
                                        k = new Function(S.slice(1, 2));
                                    "null" != String(S.slice(0, 1)).replace(/\s+/g, "") && (f[String(S.slice(0, 1)).replace(/\s+/g, "")] = k())
                                }
                            $O$P.prototype._rp_(s, f, function(t) {
                                var i = O.parse(t);
                                check_model = 1;
                                var r = "<table class='potato-menu-table' id='" + o + "' >",
                                    s = 0;
                                for (e in r += "<tr>", i[0]) "" != i[0][e] ? r += "<th>" + i[0][e] + "</th>" : r += "<th style='display:none'>" + i[0][e] + "</th>", s++;
                                for (n in r += "</tr>", i)
                                    if (O.udf != i[n][0] && null != i[n][0] && n > 0) {
                                        r += "<tr>";
                                        for (var u = 0; u < s; u++) "" != i[0][u] ? r += "<td>" + i[n][u] + "</td>" : r += "<td style='display:none'>" + i[n][u] + "</td>";
                                        r += "</tr>"
                                    }
                                r += "</table>", document.getElementById("div-" + o).style.height = "0px";
                                var g = parseFloat(p) + "px",
                                    f = parseFloat(h) + "px";
                                potatoListObject = document.getElementById("div-" + o), document.getElementById("div-" + o).style.display = "block", $("#div-" + o).html(r).css({
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
                                }), $("#" + o + " td").css({
                                    textAlign: O.lft,
                                    fontFamily: a.fontFamily,
                                    fontWeight: a.fontWeight,
                                    fontSize: a.fontSize + "px"
                                }).click(function() {
                                    var t = document.getElementById(o),
                                        e = O._ri_(this),
                                        i = O._ci_(this);
                                    potato.table = t.rows[e], potato.ci = i;
                                    try {
                                        a.click(t.rows[e], l, i), $("#div-" + o).html("")
                                    } catch (t) {}
                                    document.getElementById("div-" + o).style.height = "0px"
                                }), $("#" + o + " th").css(O.csr, "pointer").click(function() {
                                    $("#div-" + o).css(O.dpy, "none")
                                });
                                try {
                                    a.callback(l)
                                } catch (t) {}
                            })
                        }
                    }), $("." + o).mouseleave(function(t) {
                        $O$Menu = 0
                    }), $(document).mouseover(function(t) {
                        0 == $O$Menu && $("#div-" + o).css(O.dpy, "none")
                    })
                }, this._p_e(l, i)
            },
            _p_: function(t) {
                var e, i, l, n, a, o, r, s, d, c, p, h, u, g, f, m, y, v, b, x, $, w, S, k, _, C, T, I, A, E, B, F, L, D, P, z, N, H, R, M, X, W, K, j, V, Y, U, q, G, Q, Z, J, tt, et, it, lt, nt, at, ot, rt, st, dt, ct, pt, ht, ut, gt, ft, mt, yt, vt, bt, Ot, xt, $t, wt, St, kt, _t, Ct, Tt, It, At, Et, Bt, Ft, Lt, Dt, Pt, zt, Nt, Ht, Rt, Mt, Xt, Wt, Kt, jt, Vt, Yt, Ut, qt, Gt, Qt, Zt, Jt, te, ee, ie, le, ne, ae, oe, re, se, de, ce, pe, he, ue, ge, fe = new Array;
                return this.clearArrays(), t(), null == (Qt = css.textTransform) && (Qt = "none"), e = css[O.bkg], i = css[O.bdr], l = css[O.bdrr], n = css[O.bxsd], null == (a = events[O.cbk]) && (a = this.dummy()), null == (o = attr.canvas) && (o = "chart"), null == (r = param.cell) && (r = "0"), null == (d = attr.chartType) && (d = "pie"), null == (c = attr.chartId) && (c = "chart1Id"), null == (g = param.col) && (g = 1e3), null == (m = css.colorIndex) && (m = ["#c5ffb3"]), null == (s = events.change) && (s = this.dummy()), null == (p = attr.className) && (p = "pimsClassName"), null == (h = events[O.clk]) && (h = this.dummy()), null == (u = attr.cls) && (u = ""), null == (y = attr.container) && (y = "container"), f = css[O.co], null == (v = css[O.csr]) && (v = O.dft), null != (b = css.dataFontSize) && -1 != String(b).indexOf("px") && (b = String(b).split("px").slice(0, 1)), null == b && (b = 12), null == (x = attr.dataLabel) && (x = O.dat), null == ($ = attr.data2Label) && ($ = O.dat), null == (w = attr[O.dsa]) && (w = !1), S = css[O.dpy], null == (k = css.displayKey) && (k = "none"), _ = events[O.dgdp], null == (C = param.editWidth) && (C = 100), null == (T = param.fieldClass) && (T = 0), N = css.float, I = css.fontColorTD, A = css.fontColorTH, E = css.fontFamily, B = css.fontFamilyTD, F = css.fontFamilyTH, L = css.fontSize, D = css.fontSizeTD, P = css.fontSizeTH, H = css.fontWeight, null == (z = attr.format) && (z = "yy-mm-dd"), null == (R = param.header) && (R = "0"), M = css.height, null == (X = css.heightTable) && (X = 450), null == (W = events.hover) && (W = this.dummy()), K = css.hoverColor, null == (j = css.hoverBgColor) && (j = "null"), V = attr[O.hid], null == (Y = attr[O.htx]) && (Y = ""), null != (q = css.hoverHeight) && -1 != String(q).indexOf("px") && (q = String(q).split("px").slice(0, 1)), null == q && (q = 30), null == (U = css.hoverWidth) && (U = ""), null == (G = param.htm) && (G = "config/keypad.htm"), Q = attr.id, null == (Z = param.idCol) && (Z = 0), image = attr.image, null == image && (image = "nil 0 0"), J = attr.imageDir, null == (tt = css.imgWidth) && (tt = 45), null == (et = css.imgHeight) && (et = 45), null == (it = events.keyup) && (it = this.dummy()), null != (at = css.labelFontSize) && -1 != String(at).indexOf("px") && (at = String(at).split("px").slice(0, 1)), null == at && (at = 12), null != (ot = css.label2FontSize) && -1 != String(ot).indexOf("px") && (ot = String(ot).split("px").slice(0, 1)), null == ot && (ot = 12), null == (lt = attr.labelString) && (lt = ""), null == (nt = attr.label2String) && (nt = ""), dt = css[O.lft], null == (ct = css.leftKey) && (ct = 0), null == (rt = css.legendDisplay) && (rt = !1), null == (st = css.legendPosition) && (st = "bottom"), null == (pt = events.listClick) && (pt = this.dummy()), ht = css.listHeight, ut = css.listLeft, ft = css.listWidth, gt = css.listTop, mt = css.margin, yt = css.marginBottom, _t = css.marginLeft, vt = css.marginRight, Ct = css.marginTop, null == (xt = param.markSymbol) && (xt = ""), null == (bt = param.matchCol) && (bt = "-"), null == (Ot = param.matchValue) && (Ot = "-"), null == (kt = css.marginKey) && (kt = "0px 0px 0px 0px"), null == ($t = param.menuModel) && ($t = "null"), null == (wt = param.menuTitle) && (wt = "null"), Tt = param.model, null == (St = attr.multiple) && (St = !1), It = attr.name, null == (At = attr.onscroll) && (At = this.dummy()), Et = css.padding, css.paddingBottom, Bt = css.paddingLeft, css.paddingRight, Ft = css.paddingTop, null == (Lt = css.pointBorderColorIndex) && (Lt = ["#000000"]), null == (Dt = css.pointBorderDash) && (Dt = [0]), null == (Pt = css.pointBorderWidth) && (Pt = [1]), null == (zt = css.pointColorIndex) && (zt = ["#c5ffb3"]), null == (Nt = css.pointRadius) && (Nt = ["5"]), null == (Ht = css.pointStyle) && (Ht = ["triangle"]), Rt = css[O.pst], null == (Mt = param.row) && (Mt = "0"), null == (Xt = param.selectCol) && (Xt = ""), null == (Wt = param.selectColumn) && (Wt = ""), null == (Kt = css.showDay) && (Kt = !1), null == (jt = attr.stacked) && (jt = !1), null == (Vt = attr.tableId) && (Vt = "tableId"), null == (Ut = param.targetId) && (Ut = 0), null == (qt = attr.targetIndex) && (qt = 0), null == (Yt = param.targetColumn) && (Yt = ""), null == (fe = param.targetCol) && (fe = ""), null == (Gt = attr.targetColor) && (Gt = "WHITE"), Zt = css.textAlign, null == (Jt = attr.title) && (Jt = ""), null != (te = css.titleFontSize) && -1 != String(te).indexOf("px") && (te = String(te).split("px").slice(0, 1)), null == te && (te = 25), null == (ee = attr.tooltips) && (ee = !0), ie = css[O.tp], null == (le = css.topKey) && (le = 0), null == (ne = events[O.trg]) && (ne = "ondblclick"), null == (ae = attr.type) && (ae = "text"), null == (oe = attr[O.val]) && (oe = ""), null == (de = param.whereClass) && (de = 0), re = css[O.wit], null == (se = css.widthTable) && (se = 130), null != (ce = css.xAxesFontSize) && -1 != String(ce).indexOf("px") && (ce = String(ce).split("px").slice(0, 1)), null == ce && (ce = 12), null == (pe = css.xLabelAngle) && (pe = 0), null != (he = css.yAxesFontSize) && -1 != String(he).indexOf("px") && (he = String(he).split("px").slice(0, 1)), null == he && (he = 12), null != (ue = css.y2AxesFontSize) && -1 != String(ue).indexOf("px") && (ue = String(ue).split("px").slice(0, 1)), null == ue && (ue = 12), null == (ge = attr.y2AxesType) && (ge = ""), {
                    background: e,
                    border: i,
                    borderRadius: l,
                    boxShadow: n,
                    canvas: o,
                    change: s,
                    callback: a,
                    cell: r,
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
                    data2Label: $,
                    disabled: w,
                    display: S,
                    displayKey: k,
                    dragdrop: _,
                    editWidth: C,
                    field: field,
                    fieldClass: T,
                    fieldOther: fieldOther,
                    float: N,
                    fontColorTD: I,
                    fontColorTH: A,
                    fontFamilyTD: B,
                    fontFamilyTH: F,
                    fontFamily: E,
                    fontSize: L,
                    fontSizeTD: D,
                    fontSizeTH: P,
                    fontWeight: H,
                    format: z,
                    header: R,
                    height: M,
                    heightTable: X,
                    hover: W,
                    hoverBgColor: j,
                    hoverColor: K,
                    hoverHeight: q,
                    hoverId: V,
                    hoverText: Y,
                    hoverWidth: U,
                    htm: G,
                    id: Q,
                    idCol: Z,
                    image: image,
                    imageDir: J,
                    imgHeight: et,
                    imgWidth: tt,
                    keyup: it,
                    labelString: lt,
                    label2String: nt,
                    labelFontSize: at,
                    label2FontSize: ot,
                    left: dt,
                    leftKey: ct,
                    legendDisplay: rt,
                    legendPosition: st,
                    listClick: pt,
                    listHeight: ht,
                    listLeft: ut,
                    listWidth: ft,
                    listTop: gt,
                    marginKey: kt,
                    markSymbol: xt,
                    margin: mt,
                    marginBottom: yt,
                    marginLeft: _t,
                    marginRight: vt,
                    marginTop: Ct,
                    matchCol: bt,
                    matchValue: Ot,
                    menuModel: $t,
                    menuTitle: wt,
                    model: Tt,
                    multiple: St,
                    name: It,
                    onscroll: At,
                    padding: Et,
                    paddingLeft: Bt,
                    paddingTop: Ft,
                    params: params,
                    pointBorderColorIndex: Lt,
                    pointBorderDash: Dt,
                    pointBorderWidth: Pt,
                    pointColorIndex: zt,
                    pointRadius: Nt,
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
                    targetColumn: Yt,
                    targetCol: fe,
                    targetId: Ut,
                    textAlign: Zt,
                    textTransform: Qt,
                    title: Jt,
                    titleFontSize: te,
                    tooltips: ee,
                    top: ie,
                    topKey: le,
                    trigger: ne,
                    type: ae,
                    value: oe,
                    where: where,
                    whereClass: de,
                    width: re,
                    widthTable: se,
                    xAxesFontSize: ce,
                    xLabelAngle: pe,
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
                    l = t.x,
                    n = this._p_(e),
                    a = l.split("-");
                return {
                    potato: this,
                    x: i,
                    m: l,
                    _: n,
                    q: a,
                    id: n.id
                }
            },
            _rg_: function(t, e) {
                var i = new XMLHttpRequest;
                i.open("GET", $O$D().POTATOModelDir2 + t), i.onload = function() {
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
                    n.readyState > 3 && 200 == n.status && (potato.response = n.responseText, i(n.responseText))
                }, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.setRequestHeader("Chartset", "UTF-8"), n.send(l), n
            },
            _re_: function(t, e, i) {
                var l = "string" == typeof e ? e : Object.keys(e).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&");
                l += "& model=" + $O$D().POTATOModelDir + t;
                var n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                return n.open("POST", "config/excel.php"), n.onreadystatechange = function() {
                    n.readyState > 3 && 200 == n.status && (pims_console = n.responseText, i(n.responseText))
                }, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.setRequestHeader("Chartset", "UTF-8"), n.setRequestHeader("Content-length", l.length), n.setRequestHeader("Connection", "close"), n.send(l), n
            },
            _ri_: function(t) {
                return $(t).parent().parent().children().index(t.parentNode)
            },
            _rx_: function(t, e, i, l) {
                var n = "string" == typeof i ? i : Object.keys(i).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(i[t])
                }).join("&");
                n += "& model=../apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/" + e;
                var a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                return a.open("POST", "config/xml.php"), a.onreadystatechange = function() {
                    a.readyState > 3 && 200 == a.status && (pims_console = a.responseText, l(t, a.responseText))
                }, a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.setRequestHeader("Chartset", "UTF-8"), a.setRequestHeader("Content-length", n.length), a.setRequestHeader("Connection", "close"), a.send(n), a
            },
            _se_a: function(t, e, i, l) {
                var n = e.getAttribute(i);
                if (null == n)
                    if (null != t)
                        if (-1 == t.indexOf(i)) n = l;
                        else {
                            var a = t.split(i);
                            v2 = String(a.slice(1, 2)).split(":"), -1 != String(v2.slice(1, 2)).indexOf(";") ? (v3 = String(v2.slice(1, 2)).split(";"), n = v3.slice(0, 1)) : n = v2.slice(1, 2)
                        } else n = l;
                return n
            },
            _se_: function() {
                var t, e = (u = this.tag)("*"),
                    i = [],
                    l = [],
                    n = [],
                    a = [],
                    o = [],
                    r = [],
                    s = [],
                    d = [],
                    c = 0;
                for (t = 0; t < e.length; t++) {
                    var p = this.attr(e[t], O.bi);
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
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().b)) {
                            var y = this.attr(e[t], "style"),
                                v = O.tue;
                            "" == (v = this._se_a(y, e[t], O.dsa, O.fls)) && (v = O.tue);
                            var b = this.attr(e[t], O.id);
                            null == b && (b = String(m.slice(2, 3)).toLowerCase());
                            var x, w, S = this._se_a(y, e[t], O.hid, O.pht),
                                k = this._se_a(y, e[t], O.htx, ""),
                                _ = (this._se_a(y, e[t], O.lft, "0px"), this._se_a(y, e[t], O.tp, "0px"), this._se_a(y, e[t], O.pst, "static"), this._se_a(y, e[t], O.val, "")),
                                C = this.attr(e[t], "submit"),
                                T = this.attr(e[t], "fieldOther"),
                                I = this.attr(e[t], "params"),
                                A = this.attr(e[t], "whereClass"),
                                E = this.attr(e[t], "toggle");
                            null != E && (E = new Function(this.attr(e[t], "toggle")));
                            var B = this._css_(e[t], y);
                            pims(e[t].localName)._bt_(function() {
                                if (where = A + "@" + e[t].localName, field = C + "@" + e[t].localName, fieldOther = T + "@" + e[t].localName, params = I + "@" + e[t].localName, param = {
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
                                    } : null == O.attr(e[t], "value") && null != O.attr(e[t], "image") ? attr = {
                                        disabled: v,
                                        image: O.attr(e[t], "image"),
                                        hoverText: k,
                                        hoverId: S,
                                        id: b
                                    } : null == O.attr(e[t], "value") && null == O.attr(e[t], "image") && (attr = {
                                        disabled: v,
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
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().c)) {
                            y = O.attr(e[t], "style");
                            var F = O.attr(e[t], "class");
                            if (null == F && (F = "getFIELD"), $(e[t].localName).addClass(F), null != (dt = O.attr(e[t], "change"))) {
                                u = e[t].localName;
                                n[String(u)] = new Function(dt)
                            }
                            B = this._css_(e[t], y);
                            var L = this._attr_(e[t], y, m);
                            pims(e[t].localName)._d_(function() {
                                css = B, attr = L, null != dt && (events = {
                                    change: function(t) {
                                        for (var e in n) {
                                            String(e) == t && n[e]()
                                        }
                                    }
                                })
                            })
                        }
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().k)) {
                            y = O.attr(e[t], "style");
                            var D = O.attr(e[t], "tool"),
                                P = O.attr(e[t], "ng-model"),
                                z = O.attr(e[t], "class");
                            null == z && (z = "getFIELD"), $(e[t].localName).addClass(z);
                            var N = new Function(O.attr(e[t], "change")),
                                H = new Function(O.attr(e[t], "click"));
                            B = this._css_(e[t], y), L = this._attr_(e[t], y, m);
                            pims(e[t].localName)._kp_(function() {
                                param = {
                                    tool: D,
                                    ngmodel: P
                                }, css = B, attr = L, events = {
                                    change: N,
                                    click: H
                                }
                            })
                        }
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().l)) {
                            y = O.attr(e[t], "style");
                            var R = O.attr(e[t], O.id);
                            null == R && (R = String(m.slice(2, 3)).toLowerCase());
                            var M = this._se_a(y, e[t], O.val, "0"),
                                X = this._se_a(y, e[t], O.htx, "potato"),
                                W = O.attr(e[t], O.mdl),
                                K = O.attr(e[t], O.dat),
                                j = (P = O.attr(e[t], "ng-model"), O.attr(e[t], "class"));
                            null == j && (j = "getFIELD"), $(e[t].localName).addClass(j);
                            var V = O.attr(e[t], "whereClass"),
                                Y = O.attr(e[t], "params"),
                                U = O.attr(e[t], "onscroll");
                            if (null != (Lt = O.attr(e[t], "listClick"))) {
                                u = e[t].localName;
                                l[String(u)] = new Function(Lt)
                            } else try {
                                u = e[t].localName;
                                l[String(u)] = new Function(String(m.slice(2, 3)).toLowerCase() + "()")
                            } catch (t) {}
                            if (null != (Dt = O.attr(e[t], "callback"))) {
                                u = e[t].localName;
                                i[String(u)] = new Function(Dt)
                            }
                            O.attr(e[t], "listTop"), O.attr(e[t], "listLeft"), O.attr(e[t], "display");
                            var q = String(e[t].localName);
                            B = this._css_(e[t], y, q);
                            pims(q)._lt_(function() {
                                try {
                                    where = V + "@" + q
                                } catch (t) {}
                                try {
                                    params = Y + "@" + q
                                } catch (t) {}
                                css = B, param = {
                                    model: W,
                                    data: K,
                                    ngmodel: P
                                }, attr = {
                                    onscroll: U,
                                    value: M,
                                    hoverText: X,
                                    id: R
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
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().m)) {
                            null == (ht = O.attr(e[t], O.bkg)) && (ht = "#ffffff"), null == (ut = O.attr(e[t], O.bdr)) && (ut = "0px");
                            var G = O.attr(e[t], O.mdl),
                                Q = O.attr(e[t], O.dat);
                            P = O.attr(e[t], "ng-model");
                            null == (mt = O.attr(e[t], "menuTitle")) && (mt = "null");
                            var Z = O.attr(e[t], "padding");
                            null == (yt = O.attr(e[t], "color")) && (yt = "BLUE"), null == (vt = O.attr(e[t], "borderRadius")) && (vt = 7), null == (bt = O.attr(e[t], "fontSize")) && (bt = 15), null == ($t = O.attr(e[t], "height")) && ($t = 30), null == (Ot = O.attr(e[t], "hoverBgColor")) && (Ot = "yellow"), null == (xt = O.attr(e[t], "hoverText")) && (xt = ""), null == (wt = O.attr(e[t], "value")) && (wt = "0"), null == (St = O.attr(e[t], "width")) && (St = document.innerWidth + "px");
                            var J = O.attr(e[t], "widthMenu");
                            null == J && (J = 550);
                            var tt = O.attr(e[t], "heightTable");
                            null == tt && (tt = 450), null == (At = O.attr(e[t], O.id)) && (At = String(m.slice(2, 3)).toLowerCase()), null == (Et = O.attr(e[t], O.mdl)) && (Et = String(m.slice(2, 3)).toLowerCase() + O.php), null == (Bt = O.attr(e[t], "class")) && (Bt = "getFIELD"), $(e[t].localName).addClass(Bt);
                            var et = O.attr(e[t], "whereClass"),
                                it = O.attr(e[t], "params"),
                                lt = O.attr(e[t], "onscroll");
                            if (null != (Lt = O.attr(e[t], "click"))) {
                                u = e[t].localName;
                                d[String(u)] = new Function(Lt)
                            } else try {
                                u = e[t].localName;
                                d[String(u)] = new Function(String(m.slice(2, 3)).toLowerCase() + "()")
                            } catch (t) {}
                            if (null != (Dt = O.attr(e[t], "callback"))) {
                                u = e[t].localName;
                                s[String(u)] = new Function(Dt)
                            }
                            var nt = O.attr(e[t], "topTable"),
                                at = O.attr(e[t], "leftTable"),
                                ot = O.attr(e[t], "display");
                            q = String(e[t].localName);
                            pims(q)._m_(function() {
                                try {
                                    where = et + "@" + q
                                } catch (t) {}
                                try {
                                    params = it + "@" + q
                                } catch (t) {}
                                css = {
                                    display: ot,
                                    height: $t,
                                    width: St,
                                    color: yt,
                                    fontSize: bt,
                                    hoverBgColor: Ot,
                                    borderRadius: vt,
                                    border: ut,
                                    background: ht,
                                    padding: Z,
                                    marginTop: nt + "_" + q,
                                    marginLeft: at + "_" + q,
                                    widthTable: J + "_" + q,
                                    heightTable: tt + "_" + q
                                }, param = {
                                    model: Et,
                                    menuTitle: mt,
                                    menuModel: G,
                                    data: Q,
                                    ngmodel: P
                                }, attr = {
                                    onscroll: lt,
                                    value: wt,
                                    hoverText: xt,
                                    id: At
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
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().ct)) POTATO.elementbar = e[t], $O$Element[m.slice(2, 3)] = e[t], null == (rt = O.attr(e[t], "onload")) && (rt = O.tue), rt == O.tue ? $O$X.prototype.reloadChart(m.slice(2, 3)) : $O$X.prototype.reloadChart(m.slice(2, 3), O.fls);
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().tb)) {
                            POTATO.element = e[t], $O$Element[m.slice(2, 3)] = e[t];
                            var rt, st = O.attr(e[t], O.id);
                            null == st && (st = String(m.slice(2, 3)).toLowerCase()), null == (rt = O.attr(e[t], "onload")) && (rt = O.tue), rt == O.tue || 1 == rt ? $O$X.prototype.reloadTable(st, O.tue) : $O$X.prototype.reloadTable(st, O.fls)
                        }
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().tx)) {
                            y = O.attr(e[t], "style"), B = this._css_(e[t], y), L = this._attr_(e[t], y, m);
                            var dt, ct = O.attr(e[t], "class");
                            if (null == ct && (ct = "getFIELD"), $(e[t].localName).addClass(ct), null != (Lt = O.attr(e[t], "click"))) {
                                u = e[t].localName;
                                a[String(u)] = new Function(Lt)
                            }
                            if (null != (dt = O.attr(e[t], "change"))) {
                                u = e[t].localName;
                                r[String(u)] = new Function(dt)
                            }
                            var pt = O.attr(e[t], "keyup");
                            if (null != pt) {
                                u = e[t].localName;
                                o[String(u)] = new Function(pt)
                            }
                            P = O.attr(e[t], "ng-model");
                            pims(e[t].localName)._tx_(function() {
                                css = B, attr = L, param = {
                                    ngmodel: P
                                }, events = {
                                    click: function(t) {
                                        for (var e in a) {
                                            String(e) == t && a[e]()
                                        }
                                    },
                                    change: function(t) {
                                        for (var e in r) {
                                            String(e) == t && r[e]()
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
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().ta)) {
                            var ht, ut, gt = O.attr(e[t], O.hdr),
                                ft = O.attr(e[t], "body");
                            null == (ht = O.attr(e[t], O.bkg)) && (ht = "#ffffff"), null == (ut = O.attr(e[t], O.bdr)) && (ut = "1px solid black");
                            var mt;
                            G = O.attr(e[t], O.mdl), Q = O.attr(e[t], O.dat), P = O.attr(e[t], "ng-model");
                            null == (mt = O.attr(e[t], "menuTitle")) && (mt = "null");
                            var yt, vt, bt, Ot, xt;
                            Z = O.attr(e[t], "padding");
                            null == (yt = O.attr(e[t], "color")) && (yt = "BLUE"), null == (vt = O.attr(e[t], "borderRadius")) && (vt = 7), null == (bt = O.attr(e[t], "fontSize")) && (bt = 15), null == (Ot = O.attr(e[t], "hoverBgColor")) && (Ot = "yellow"), null == (xt = O.attr(e[t], "hoverText")) && (xt = "");
                            var $t, wt, St, kt = O.attr(e[t], O.mt);
                            if (null == kt && (kt = "10px"), null == ($t = O.attr(e[t], "height"))) {
                                var _t = kt.split("px"),
                                    Ct = parseFloat(_t.slice(0, 1));
                                $t = window.innerHeight - 50 - Ct + "px"
                            }
                            null == (wt = O.attr(e[t], "value")) && (wt = "0"), null == (St = O.attr(e[t], "width")) && (St = window.innerWidth - 50 + "px");
                            var Tt = O.attr(e[t], O.sp);
                            null == Tt && (Tt = "500");
                            var It = O.attr(e[t], "tabHeight");
                            null == It && (It = "20px");
                            var At, Et, Bt, Ft = O.attr(e[t], "tabWidth");
                            null == Ft && (Ft = "100px"), null == (At = O.attr(e[t], O.id)) && (At = String(m.slice(2, 3)).toLowerCase()), null == (Et = O.attr(e[t], O.mdl)) && (Et = String(m.slice(2, 3)).toLowerCase() + O.php), null == (Bt = O.attr(e[t], "class")) && (Bt = "getFIELD"), $(e[t].localName).addClass(Bt);
                            var Lt, Dt;
                            et = O.attr(e[t], "whereClass"), it = O.attr(e[t], "params"), lt = O.attr(e[t], "onscroll");
                            if (null != (Lt = O.attr(e[t], "click"))) {
                                u = e[t].localName;
                                d[String(u)] = new Function(Lt)
                            } else try {
                                u = e[t].localName;
                                d[String(u)] = new Function(String(m.slice(2, 3)).toLowerCase() + "()")
                            } catch (t) {}
                            if (null != (Dt = O.attr(e[t], "callback"))) {
                                u = e[t].localName;
                                s[String(u)] = new Function(Dt)
                            }
                            nt = O.attr(e[t], "topTable"), at = O.attr(e[t], "leftTable"), ot = O.attr(e[t], "display"), q = String(e[t].localName);
                            pims(q)._ta_(function() {
                                try {
                                    where = et + "@" + q
                                } catch (t) {}
                                try {
                                    params = it + "@" + q
                                } catch (t) {}
                                css = {
                                    display: ot,
                                    height: $t,
                                    width: St,
                                    tabWidth: Ft,
                                    tabHeight: It,
                                    color: yt,
                                    fontSize: bt,
                                    hoverBgColor: Ot,
                                    borderRadius: vt,
                                    border: ut,
                                    background: ht,
                                    padding: Z,
                                    marginTop: kt
                                }, param = {
                                    header: gt,
                                    body: ft,
                                    model: Et,
                                    menuTitle: mt,
                                    menuModel: G,
                                    data: Q,
                                    ngmodel: P,
                                    speed: Tt
                                }, attr = {
                                    onscroll: lt,
                                    value: wt,
                                    hoverText: xt,
                                    id: At
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
                        if ("D" == m.slice(1, 2)) POTATO.elementdoughnut = e[t], null == (g = O.attr(e[t], "onload")) && (g = O.tue), g == O.tue ? $O$X.prototype.reloadDoughnut(0) : $O$X.prototype.reloadDoughnut(0, O.fls);
                        if ("D1" == m.slice(1, 2)) POTATO.element1doughnut = e[t], null == (g = O.attr(e[t], "onload")) && (g = O.tue), g == O.tue ? $O$X.prototype.reloadDoughnut(1) : $O$X.prototype.reloadDoughnut(1, O.fls);
                        if ("D2" == m.slice(1, 2)) POTATO.element2doughnut = e[t], null == (g = O.attr(e[t], "onload")) && (g = O.tue), g == O.tue ? $O$X.prototype.reloadDoughnut(2) : $O$X.prototype.reloadDoughnut(2, O.fls);
                        if ("R" == m.slice(1, 2)) POTATO.elementradar = e[t], null == (f = O.attr(e[t], "onload")) && (f = O.tue), f == O.tue ? $O$X.prototype.reloadRadar(0) : $O$X.prototype.reloadRadar(0, O.fls);
                        if ("R1" == m.slice(1, 2)) POTATO.element1radar = e[t], null == (f = O.attr(e[t], "onload")) && (f = O.tue), f == O.tue ? $O$X.prototype.reloadRadar(1) : $O$X.prototype.reloadRadar(1, O.fls)
                    }
                }
            },
            _ta_: function(t) {
                var e = O.is(this),
                    i = this.x,
                    l = this._p_(t).id,
                    n = css[O.bdr],
                    a = css[O.bkg],
                    o = css[O.h],
                    r = css[O.w],
                    s = o.split("px"),
                    d = parseFloat(s.slice(0, 1)) + 10 + "px",
                    c = r.split("px"),
                    p = parseFloat(c.slice(0, 1)) + 10 + "px",
                    h = css[O.th],
                    u = css[O.tw],
                    g = css[O.fz],
                    f = css[O.co],
                    m = css[O.mt];
                O.tab_speed = parseFloat(param[O.sp]);
                var y = String(param[O.hdr]).split("||"),
                    v = String(param[O.bd]).split("||");
                e.createdCallback = function() {
                    this.id = l + "_", this.pims = l;
                    var t = '<div id="menu-' + l + '" style="margin-top:' + m + '" >';
                    t += '<ul class="OTabs" >', t += '<li style="display:inline;">', t += '<a class="OCurrent" onclick="O.tab_hrefSelector=this.innerText;"  >' + y[0] + "</a></li>";
                    for (var e = 1; e < y.length; e++) t += '<li style="display:inline;">', t += '<a onclick="O.tab_hrefSelector=this.innerText;"  >' + y[e] + "</a></li>";
                    t += "</ul>", t += '<div class="OBox">', t += '<div id="OTab-' + (i = y[0].split(" ").join("")) + '" class="OTabBody" >', t += '<div id="' + i + '" class="OCol"  >', t += v[0], t += "</div>", t += "</div>";
                    for (e = 1; e < y.length; e++) {
                        var i;
                        t += '<div id="OTab-' + (i = y[e].split(" ").join("")) + '" class="OTabBody"  >', t += '<div id="' + i + '" class="OCol"  >', t += v[e], t += "</div>", t += "</div>"
                    }
                    t += "</div>", t += "</div>", this.innerHTML = t, $("#" + y[0].split(" ").join("")).addClass("OTabBody"), $(".OTabs").css({
                        "list-style": "none",
                        overflow: "hidden",
                        "padding-left": "1px",
                        "margin-left": "2px"
                    }), $(".OBox").css({
                        display: "block",
                        background: a,
                        border: n,
                        "border-radius": "10px",
                        "border-top-left-radius": "2px",
                        "border-top-right-radius": "2px",
                        margin: "-1px",
                        "box-shadow": "0 0 10px rgba(0,0,0,.5)",
                        "margin-left": "10px",
                        position: "relative",
                        width: p,
                        height: d
                    }), $(".OTabs li a").css({
                        display: "block",
                        float: "left",
                        color: f,
                        border: "1px dashed black",
                        background: "#f8f8f8",
                        margin: "0 0 0 -1px",
                        "margin-left": "10px",
                        "font-size": "13px",
                        width: u,
                        height: h,
                        fontSize: g,
                        "text-align": "center",
                        cursor: "pointer",
                        padding: "3px 3px 3px 3px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        opacity: "0.5"
                    }), $(".OTabs li a.OCurrent").css({
                        background: a,
                        border: "1px solid black",
                        top: "1px",
                        "border-bottom": "0px",
                        position: "relative",
                        "z-index": "2",
                        opacity: "1"
                    }), $(".OTabs li:first-child a, .OTabBody:first").addClass("OCurrent"), $(".box-wrraper .OCurrent .OCol").css("top", 0), O._ta_attr(l, f, u, h, g, a);
                    var s = o.split("px");
                    $(".OCol").css({
                        top: -2 * parseFloat(s.slice(0, 1)),
                        float: "left",
                        position: "absolute",
                        "padding-top": "5px",
                        "padding-left": "5px",
                        "z-index": 200,
                        width: r,
                        height: o
                    }), $(".OBox .OCurrent .OCol").css("top", 0), $(".OBox").css({
                        overflow: "auto",
                        width: p,
                        height: d
                    }), $(".OTabBody").css({
                        position: "absolute",
                        top: "1px",
                        left: "1px",
                        width: r,
                        height: o
                    })
                }, this._p_e(i, e)
            },
            _ta_attr: function(t, e, i, l, n, a) {
                $("#menu-" + t).delegate(".OTabs a", "click", function() {
                    O.tab_hrefSelector = O.tab_hrefSelector.split(" ").join(""), O.tab_el = $(this), O.tab_el.hasClass("OCurrent") || 0 != $(":animated").length || ($(".OTabs li a").removeClass("OCurrent"), $(".OTabs li a").css({
                        display: "block",
                        float: "left",
                        color: e,
                        border: "1px dashed black",
                        background: "#f8f8f8",
                        margin: "0 0 0 -1px",
                        "margin-left": "10px",
                        "font-size": "13px",
                        width: i,
                        height: l,
                        fontSize: n,
                        "text-align": "center",
                        cursor: "pointer",
                        padding: "3px 3px 3px 3px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        opacity: "0.5"
                    }), O.tab_el.addClass("OCurrent"), $(".OTabs li a.OCurrent").css({
                        background: a,
                        border: "1px solid black",
                        top: "1px",
                        "border-bottom": "0px",
                        position: "relative",
                        "z-index": "2",
                        opacity: "1"
                    }), O.tab_col = $(".OBox .OCurrent .OCol"), O.tab_col.animate({
                        top: -O.tab_col.height() - 20
                    }, O.tab_speed), $(".OTabBody").removeClass("OCurrent"), $("#OTab-" + O.tab_hrefSelector.split(" ").join("")).addClass("OCurrent"), $(".OBox .OCurrent .OCol").animate({
                        top: 0
                    }, O.tab_speed, function() {}))
                })
            },
            _tb_attr: function(t) {
                var e = [],
                    i = String(t[0]).replace(/\s+/g, "");
                if (-1 != String(i).indexOf(";"))
                    for (var l = String(t[0]), n = (String(l).match(/;/g) || []).length, a = String(l).split(";"), o = 0; o < n; o++)
                        if (-1 != String(a.slice(o, o + 1)).indexOf(":")) {
                            var r = String(a.slice(o, o + 1)).split(":");
                            if (String(r.slice(0, 1)).replace(/\s+/g, "") != O.tl && String(r.slice(0, 1)).replace(/\s+/g, "") != O.cbk && (e[String(r.slice(0, 1)).replace(/\s+/g, "")] = String(r.slice(1, 2)).replace(/\s+/g, "")), String(r.slice(0, 1)).replace(/\s+/g, "") == O.tl && (e[String(r.slice(0, 1)).replace(/\s+/g, "")] = r.slice(1, 2)), String(r.slice(0, 1)).replace(/\s+/g, "") == O.cbk) {
                                l = String(t[0]).split(O.cbk), a = String(l.slice(1, 2));
                                e[O.cbk] = "function" + String(a.substr(1)).split("function").slice(1, 2)
                            }
                        }
                return e
            },
            _tb_: function(t, e) {
                for (var i = this._p_(e), l = this.getHTMLElement(), n = this.x, a = [
                        []
                    ], o = i.id, r = param[O.dat], s = String(o).toUpperCase(), d = this.attr($O$Element[s], O.dgdp), c = String(i.header).split(","), p = 0; p < $O$Array.length; p++) o == String($O$Array[p].bind) && (a[$O$Array[p].id] = $O$Array[p].value, 0);
                var h = "<table class='potatoTableCss' id='" + i.id + "' style='border-collapse:collapse;width:99%'>"; - 1 != String(r).indexOf(O.php) && (i.model = r), null != i.model ? (l.createdCallback = function() {
                    this.innerHTML = '<div id="div-' + o + '" ></div> '
                }, this._rp_(i.model, a, function(t) {
                    var e = O.parse(t);
                    if (null != c && c.length > 0) {
                        var l = 0;
                        for (s in h += "<tr>", c) "" != c[s] && "-" != c[s] ? h += "<th style='border:1px solid black;font-size:" + i.fontSizeTH + ";color:" + i.fontColorTH + ";font-family:" + i.fontFamilyTH + "'>" + c[s] + "</th>" : h += "<th style='display:none'>" + c[s] + "</th>", l++;
                        h += "</tr>";
                        var a = potato.getAttr(n, "split");
                        for (var r in null == a && (a = "#"), e)
                            if (O.udf != e[r][0] && null != e[r][0] && r >= 0) {
                                h += "<tr>";
                                for (var p = 0; p < l; p++)
                                    if ("" != c[p] && "-" != c[p] && null != c[p])
                                        if (null != d && "" != String(e[r][p]).replace(/\s+/g, ""))
                                            if (-1 != String(e[r][p]).indexOf(a)) {
                                                var u = String(e[r][p]).split(a);
                                                h += "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>";
                                                for (var g = 0; g < u.length - 1; g++) "" != String(u[g]).replace(/\s+/g, "") && (h += "<div class='" + O.dgdp + "-" + o + "'>" + u[g] + "</div>");
                                                h += "</td>"
                                            } else h += "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'><div class='" + O.dgdp + "-" + o + "'>" + e[r][p] + "</div></td>";
                                else h += "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>" + e[r][p] + "</td>";
                                else h += "<td style='display:none'>" + e[r][p] + "</td>";
                                h += "</tr>"
                            }
                    } else {
                        l = 0;
                        for (s in h += "<tr>", e[0]) "" != e[0][s] && "-" != e[0][s] ? h += "<th style='border:1px solid black;font-size:" + i.fontSizeTH + ";color:" + i.fontColorTH + ";font-family:" + i.fontFamilyTH + "'>" + e[0][s] + "</th>" : h += "<th style='display:none'>" + e[0][s] + "</th>", l++;
                        for (var r in h += "</tr>", e)
                            if (O.udf != e[r][0] && null != e[r][0] && r > 0) {
                                h += "<tr>";
                                for (p = 0; l > p; p++) "" != e[0][p] && "-" != e[0][p] && null != e[0][p] && e[0][p] != O.udf ? null != d && "" != e[r][p] ? h += "<td style='border:1px solid black;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'><div class='" + d + "'>" + e[r][p] + "</div></td>" : h += "<td style='border:1px solid black;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>" + e[r][p] + "</td>" : h += "<td style='display:none'>" + e[r][p] + "</td>";
                                h += "</tr>"
                            }
                    }
                    h += "</table>", $("#div-" + o).html(h).show().css({
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
                    var f = document.getElementById(i.id),
                        m = $("#" + i.id + " tbody");
                    $(document).keydown(function(t) {
                        if (m.find(".highlight").length)
                            if (40 == t.which) {
                                var e = m.find(".highlight").next();
                                $O$X.prototype.tableHighlight(e[0].rowIndex, i.tableId)
                            } else if (38 == t.which) {
                            var l = m.find(".highlight").prev();
                            $O$X.prototype.tableHighlight(l[0].rowIndex, i.tableId)
                        }
                    });
                    try {
                        if (potato.table = f, i.callback(f, i.id), String(editCell).split("@").slice(1, 2) == n) {
                            var y = String(editCell).split("@").slice(0, 1),
                                v = [];
                            if (null != y[0] && "null" != y[0]) v = potato._tb_attr(y);
                            potato._ec_(function() {
                                attr = {
                                    id: i.id,
                                    dragdrop: d
                                }, paramE = v;
                                var t = new Function("return " + String(v[O.cbk]));
                                events = {
                                    callback: t()
                                }
                            })
                        }
                        if (String(multipleSelect).split("@").slice(1, 2) == n) {
                            if (null != (y = String(multipleSelect).split("@").slice(0, 1))[0] && "null" != y[0]) v = potato._tb_attr(y);
                            potato.MultipleSelect(function() {
                                attr = {
                                    id: i.id
                                }, paramM = v;
                                var t = new Function("return " + String(v[O.cbk]));
                                events = {
                                    callback: t()
                                }
                            })
                        }
                    } catch (t) {}
                    $("#" + i.id + " td").click(function() {
                        ci = O._ci_(this), ri = O._ri_(this);
                        for (var t = 0; t < l; t++) 0;
                        i.click(f.rows[ri], ri, ci, i.id)
                    }).mousedown(function() {
                        potato.clickCol = O._ci_(this), potato.clickRow = O._ri_(this)
                    })
                })) : l.createdCallback = function() {
                    this.innerHTML = '<div id="div-' + o + '" ></div> ';
                    var t = O.parse(r),
                        e = 0;
                    for (s in h += "<tr>", c) "" != c[s] && "-" != c[s] ? h += "<th style='border:1px solid black;font-size:" + i.fontSizeTH + ";color:" + i.fontColorTH + ";font-family:" + i.fontFamilyTH + "'>" + c[s] + "</th>" : h += "<th style='display:none'>" + c[s] + "</th>", e++;
                    for (var l in h += "</tr>", t)
                        if (O.udf != t[l][0] && null != t[l][0] && l >= 0) {
                            h += "<tr>";
                            for (var a = 0; a < e; a++) "" != c[a] && "-" != c[a] && null != c[a] ? null != d && "" != t[l][a] ? h += "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'><div class='" + O.dgdp + "-" + o + "'>" + t[l][a] + "</div></td>" : h += "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>" + t[l][a] + "</td>" : h += "<td style='display:none'>" + t[l][a] + "</td>";
                            h += "</tr>"
                        }
                    h += "</table>", $("#div-" + o).html(h).show().css({
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
                            var l = u.find(".highlight").prev();
                            $O$X.prototype.tableHighlight(l[0].rowIndex, i.tableId)
                        }
                    });
                    try {
                        if (potato.table = p, i.callback(p, i.id), String(editCell).split("@").slice(1, 2) == n) {
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
                        if (String(multipleSelect).split("@").slice(1, 2) == n) {
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
                    $("#" + i.id + " td").mousedown(function() {
                        potato.clickCol = O._ci_(this), potato.clickRow = O._ri_(this)
                    }).click(function() {
                        ci = O._ci_(this), ri = O._ri_(this);
                        for (var t = 0; t < e; t++) 0;
                        i.click(p.rows[ri], ri, ci, i.id)
                    })
                }, this._p_e(n, l)
            },
            _t_d: function(t) {
                $("." + O.dgdp + "-" + t).draggable({
                    revert: !0,
                    start: function(t) {
                        potato.dragVal = t.target.innerText, t.target.style.zIndex = 100
                    }
                })
            },
            _t_dnd: function(t, e, i) {
                null != t && ($("#" + e + " td").droppable({
                    accept: "." + O.dgdp + "-" + e,
                    drop: function(t, l) {
                        potato.dropCol = O._ci_(this), potato.dropRow = O._ri_(this), $(l.draggable).remove(), "" != l.draggable[0].innerText ? document.getElementById(e).rows[potato.dropRow].cells[potato.dropCol].innerHTML += "<div class='" + O.dgdp + "-" + e + "' style='margin-top:5px;color:black;'>" + l.draggable[0].innerText + "</div>" : document.getElementById(e).rows[potato.dropRow].cells[potato.dropCol].innerHTML += "", O._t_d(e), i.dragdrop()
                    }
                }), this._t_d(e))
            },
            _tx_: function(t) {
                var e = this,
                    i = this._p_(t),
                    l = O.is(this),
                    n = this.x,
                    a = i.id;
                "potato.now" == i.value && (i.value = e.now), "potato.today()" == i.value && (i.value = e.today()), "potato.now()" == i.value && (i.value = e.now());
                var o = param.ngmodel;
                l.createdCallback = function() {
                    this.id = a + "_", $O$X.prototype.getAttribute(this, n).index, $O$X.prototype.getAttribute(this, n).field, this.pims = n, "none" == i.display ? this.innerHTML = null == o ? '<input type="text" id="' + a + '" class="' + i.className + '"> ' : '<input ng-model="' + o + '" type="text" id="' + a + '" class="' + i.className + '"> ' : this.innerHTML = null == o ? '<br><input type="text" id="' + a + '"  class="' + i.className + '" > ' : '<br><input ng-model="' + o + '" type="text" id="' + a + '"  class="' + i.className + '" > ', e._css_id(i, a), $("#" + a).css({
                        textTransform: i.textTransform
                    }), "null" != i.float && $("#" + a + "_").css("float", i.float), i.disabled == O.fls && $("#" + a).attr({
                        value: i.value,
                        type: i.type,
                        disabled: !1
                    }).mousemove(function() {
                        "null" != i.hoverBgColor && $(this).css(O.bkg, i.hoverBgColor), $(this).css(O.co, i.hoverColor), "" != i.hoverText && $("#" + i.hoverId).html(i.hoverText).show().css({
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
                        "null" != i.hoverBgColor && $(this).css(O.bkg, i.background), $(this).css(O.co, i.i), $("#" + i.hoverId).hide().html("")
                    }).keyup(function(t) {
                        for (var e = 0; e < $O$Id.length; e++)
                            if (String(a).toLowerCase() == String($O$Id[e]).toLowerCase()) {
                                var l = String($O$BindId[e]);
                                document.getElementById(l).value = document.getElementById(a).value
                            }
                        try {
                            i.keyup(n, t)
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
                            potatoListObject.style.display = "none"
                        } catch (t) {}
                        try {
                            i.click(n)
                        } catch (t) {}
                    }), i.disabled != O.tue && "" != i.disabled || $("#" + a).attr({
                        value: i.value,
                        type: i.type,
                        disabled: !0
                    })
                }, this._p_e(n, l)
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
            chartEncode: function(t) {
                var e = t.match(/=\s*\".*?\"/g);
                if (e)
                    for (var i = 0; i < e.length; i++) {
                        var l = e[i].replace(/^=\s*\"|\"$/g, "");
                        l = l.replace(/\'/g, "%26apos;");
                        var n = t.indexOf(e[i]),
                            a = "='" + l + "'";
                        t = t.substring(0, n) + a + t.substring(n + e[i].length)
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
                this.attributes = new Array, this.params = new Object, this.variables = new Object, this.chartAttribute("s", "lib/charts/" + l.chartType + ".swf"), this.chartAttribute("w", l.width), this.chartAttribute("h", l.height), this.chartAttribute(O.id, l.chartId), this.chartParam("bgcolor", l.background), this.chartParam("quality", "high"), this.chartVariable("chartWidth", l.width), this.chartVariable("chartHeight", l.height);
                O.is(this);
                this._rx_(this, t, e, function(t, e) {
                    t.chartXML(e), t.chartParam("WMode", "transparent"), t.getChart(t.x), l.callback(e)
                })
            },
            CHANGE: function(t) {
                var e = this.x;
                if (-1 != e.indexOf("#"))
                    if (-1 != e.indexOf(" td"))
                        for (var i = String(e).split(" "), l = (a = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onchange = t;
                    else(r = document.getElementById(String(e).split("#").slice(1, 2))).onchange = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var a = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < a.length; o++)
                            for (l = a[o].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onchange = t
                    } else {
                        var r = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (o = 0; o < r.length; o++) r[o].onchange = t
                    }
            },
            CLICK: function(t) {
                var e = this.x;
                if (-1 != e.indexOf("#"))
                    if (-1 != e.indexOf(" td"))
                        for (var i = String(e).split(" "), l = (a = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onclick = t;
                    else(r = document.getElementById(String(e).split("#").slice(1, 2))).onclick = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var a = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < a.length; o++)
                            for (l = a[o].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onclick = t
                    } else {
                        var r = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (o = 0; o < r.length; o++) r[o].onclick = t
                    }
            },
            closeEditCell: function(e, i) {
                var l = $O$T;
                potato.edit = "off";
                var n = document.createTextNode(l.firstChild.value);
                l.replaceChild(n, l.firstChild), t = 1, $("#keypadtable").hide(), potato.trigger = 0, $O$P.nodevalue = l.firstChild.nodeValue;
                var a = potato.table;
                null != O.dragdropClass && "undefined" != O.dragdropClass && null != O.dragdropClass && null != O.dragdropClass && (null != e ? "" != String(document.getElementById(O.dragdropId).rows[e].cells[i].innerText).replace(/\s+/g, "") ? document.getElementById(O.dragdropId).rows[e].cells[i].innerHTML = "<div class='" + O.dgdp + "-" + O.dragdropId + "'>" + document.getElementById(O.dragdropId).rows[e].cells[i].innerText + "</div>" : document.getElementById(O.dragdropId).rows[e].cells[i].innerText = "" : "" != String(document.getElementById(O.dragdropId).rows[potato.clickRow].cells[potato.clickCol].innerText).replace(/\s+/g, "") ? document.getElementById(O.dragdropId).rows[potato.clickRow].cells[potato.clickCol].innerHTML = "<div class='" + O.dgdp + "-" + O.dragdropId + "'>" + document.getElementById(O.dragdropId).rows[potato.clickRow].cells[potato.clickCol].innerText + "</div>" : document.getElementById(O.dragdropId).rows[potato.clickRow].cells[potato.clickCol].innerText = "", O._t_d(O.dragdropId), O.dragdropClass = null, O.dragdropId = null), potato._.callback($O$P.nodevalue, potato.oldValue, a.cells[potato._.targetId].innerText, potato.ci);
                try {
                    document.getElementById(keyID).style.display = "none"
                } catch (t) {}
            },
            closePad_backup: function(t, e) {
                e = $O$U;
                if ("" == t && (e.value = ""), "Close" != t && "Now" != t && "CE" != t) "-" != e.value && "" != e.value || (e.value = t), e.value = t + ":" + e.value.split(":").slice(1, 2), $("._min_cls").attr(O.dsa, !1);
                else if ($("._min_cls").attr(O.dsa, !0), "Now" == t && (e.value = $O$X.prototype.setHour() + ":" + $O$X.prototype.setMinute()), "CE" == t && (e.value = "0", $("._min_cls").attr(O.dsa, !0)), "Close" == t)
                    if (POTATO.value != O.udf && null != POTATO.value && "0" != POTATO.value && 0 != e.value) {
                        try {
                            document.getElementById(keyID).style.display = "none", $("._min_cls").attr(O.dsa, !0), POTATO.value = e.value
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
                var e = O.is(this),
                    i = this.x,
                    l = this._p_(t);
                l.id = i, e.createdCallback = function() {
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), a = 3; a <= t; a++) n = n + "_" + e.slice(a, a + 1);
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
                    }).attr(O.val, l.value).mousemove(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.hoverBgColor), $(this).css(O.co, l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: l.hoverHeight + "px",
                            width: l.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.background), $(this).css(O.co, l.i), $("#" + l.hoverId).hide().html("")
                    }).change(function() {
                        try {
                            l.change()
                        } catch (t) {}
                    }).click(function() {
                        try {
                            potatoListObject.style.display = "none"
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
                }
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
                        l = i.cDisabled;
                    l = null != l;
                    var n = i.cToggle;
                    toggle_disabled = null != n, n && i.value ? ($O$X.prototype.makePressed(i), $O$X.prototype.makeGray(i, !0)) : "pimsButton" != i.className || l || ($O$X.prototype.makeFlat(i), $O$X.prototype.makeGray(i, !0))
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
            dummy: function() {
                return null
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
                var i, l, n, a = [];
                for (i = (e = e || document).getElementsByTagName("*"), l = 0; l < i.length; l++)
                    if (null != (n = i[l].getAttribute("class")))
                        for (n = n.split(" "), j = 0; j < n.length; j++)
                            if (n[j] === t) {
                                a.push(i[l]);
                                break
                            }
                return a
            },
            getIdType: function(t, e) {
                var i, l, n, a = [];
                for (i = (e = e || document).getElementsByTagName("*"), l = 0; l < i.length; l++)
                    if (null != (n = i[l].getAttribute("type")))
                        for (n = n.split(" "), j = 0; j < n.length; j++)
                            if (n[j] === t) {
                                a.push(i[l]);
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
                var l = t.split(e),
                    n = new Date(l[0] + "/" + l[1] + "/" + l[2]);
                n.setDate(n.getDate() + i);
                var a = n.getFullYear(),
                    o = n.getMonth() + 1;
                o = parseInt(o) < 10 ? "0" + o : o;
                var r = n.getDate();
                return a + e + o + e + (r = parseInt(r) < 10 ? "0" + r : r)
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
                var l = this.getChartVariablePairs().join("&");
                return l.length > 0 && (t += '<param name="flashvars" value="' + l + '" />'), t += "</object>"
            },
            getChart: function(t) {
                return 1 == this.detectFlashVersion && this.installedVer.major < 6 ? 1 == this.autoInstallRedirect && (!!window.potatoirm("You need Adobe Flash Player 6 (or above) to view the charts. It is a free and lightweight installation from Adobe.com. Please click on Ok to install the same.") && void(window.location = "http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash")) : (("string" == typeof t ? document.getElementById(t) : t).innerHTML = this.getChartHtml(), document.embeds[this.getChartAttribute(O.id)] || window[this.getChartAttribute(O.id)] || (window[this.getChartAttribute(O.id)] = document.getElementById(this.getChartAttribute(O.id))), !0)
            },
            getHTMLElement: function() {
                return Object.create(HTMLElement.prototype)
            },
            getHour: function(t) {
                var e = $O$U;
                if ("" == t && (e.value = ""), "Close" != t && "Now" != t && "CE" != t) "-" != e.value && "" != e.value || (e.value = t), e.value = t + ":" + e.value.split(":").slice(1, 2), $("._min_cls").attr(O.dsa, !1);
                else if ($("._min_cls").attr(O.dsa, !0), "Now" == t && (e.value = $O$X.prototype.setHour() + ":" + $O$X.prototype.setMinute()), "CE" == t && (e.value = "0", $("._min_cls").attr(O.dsa, !0)), "Close" == t) {
                    try {
                        document.getElementById(keyID).style.display = "none", $("._min_cls").attr(O.dsa, !0)
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
                var e = potato.vl($O$I.potato.v),
                    i = potato.vl($O$I.potato.z);
                return t = t == e ? 1 : t == i ? 1 : -1
            },
            is: function(t) {
                return t.getHTMLElement()
            },
            Keyboard: function(t) {
                var e = O.is(this),
                    i = this.x,
                    l = this._p_(t);
                l.id = i, e.createdCallback = function() {
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), a = 3; a <= t; a++) n = n + "_" + e.slice(a, a + 1);
                    this.name = n, this.is = i;
                    var o = '<div id="div_' + i + '"> ';
                    o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, $O$B = document.getElementById(i), $("#div_" + i).css({
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
                    }).attr(O.val, l.value).mousemove(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.hoverBgColor), $(this).css(O.co, l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: l.hoverHeight + "px",
                            width: l.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.background), $(this).css(O.co, l.i), $("#" + l.hoverId).hide().html("")
                    }).click(function() {
                        try {
                            for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + i, $(".keypad").hide(), $(O.kp + i).show(), $("#KeyBoard").show(), $(O.kp + i).css({
                            position: "absolute",
                            top: event.clientY + 20 + l.topKey,
                            left: event.clientX + l.leftKey
                        }), $O$B = document.getElementById(i)
                    }), $(O.kp + i).load("config/keyboard.htm").css({
                        width: "200px",
                        height: "150px",
                        margin: l.marginKey,
                        display: l.displayKey
                    })
                }
            },
            Keypad: function(t) {
                var e = O.is(this),
                    i = this.x,
                    l = this._p_(t);
                l.id = i, e.createdCallback = function() {
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), a = 3; a <= t; a++) n = n + "_" + e.slice(a, a + 1);
                    this.name = n, this.is = i;
                    var o = '<div id="div_' + i + '"> ';
                    o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, $O$U = document.getElementById(i), $("#div_" + i).css({
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
                    }).attr(O.val, l.value).mousemove(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.hoverBgColor), $(this).css(O.co, l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: l.hoverHeight + "px",
                            width: l.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.background), $(this).css(O.co, l.i), $("#" + l.hoverId).hide().html("")
                    }).click(function() {
                        try {
                            for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + i, $(".keypad").hide(), $(O.kp + i).show(), $("#KeyPad").show(), $(O.kp + i).css({
                            position: "absolute",
                            top: event.clientY + 20 + l.topKey,
                            left: event.clientX + l.leftKey
                        }), $O$U = document.getElementById(i)
                    }), $(O.kp + i).load("config/keypad.htm").css({
                        width: "200px",
                        height: "150px",
                        margin: l.marginKey,
                        display: l.displayKey
                    })
                }
            },
            List: function(t) {
                var i = O.is(this),
                    l = this.x,
                    a = this._p_(t);
                a.id = l, i.createdCallback = function() {
                    for (var i = (l.match(/-/g) || []).length, o = l.split("-"), r = o.slice(2, 3), s = 3; s <= i; s++) r = r + "_" + o.slice(s, s + 1);
                    this.name = r, this.is = l, this.innerHTML = '<input type="text" id="' + l + '" class="' + a.className + '" > ', this.innerHTML += '<div id="pims-list-' + l + '" class="pims-list"> ', $("#" + l).css({
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
                        "null" != a.hoverBgColor && $(this).css(O.bkg, a.hoverBgColor), $(this).css(O.co, a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
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
                        "null" != a.hoverBgColor && $(this).css(O.bkg, a.background), $(this).css(O.co, a.i), $("#" + a.hoverId).hide().html("")
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
                            o = a.params;
                        if ("block" != document.getElementById("pims-list-" + l).style.display && $(".pims-list").css({
                                display: "none",
                                height: "0px"
                            }), document.getElementById("pims-list-" + l).style.height == a.heightTable + "px") document.getElementById("pims-list-" + l).style.height = "0px";
                        else {
                            try {
                                potatoListObject.style.display = "none"
                            } catch (t) {}
                            $("#pims-list-" + l).css(O.dpy, "block"), $O$P.prototype._rp_(o.model, o, function(t) {
                                var o = O.parse(t),
                                    r = "<table class='potato-list-table' id='potato-list-table-" + l + "' >",
                                    s = 0;
                                for (e in r += "<tr>", o[0]) "" != o[0][e] ? r += "<th>" + o[0][e] + "</th>" : r += "<th style='display:none'>" + o[0][e] + "</th>", s++;
                                for (n in r += "</tr>", o)
                                    if (O.udf != o[n][0] && null != o[n][0] && n > 0) {
                                        r += "<tr>";
                                        for (var d = 0; d < s; d++) "" != o[0][d] ? r += "<td>" + o[n][d] + "</td>" : r += "<td style='display:none'>" + o[n][d] + "</td>";
                                        r += "</tr>"
                                    }
                                r += "</table>", document.getElementById("pims-list-" + l).style.height = "0px";
                                var c = i.clientY - a.height - 10 + "px";
                                0 != a.top && (c = a.top + a.height + 10 + "px");
                                var p = i.clientX - a.width / 2 + "px";
                                0 != a.left && (p = a.left + 5 + "px"), potatoListObject = document.getElementById("pims-list-" + l), $("#pims-list-" + l).html(r).show().css({
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
                                        e = O._ri_(this);
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
                                        e = O._ri_(this);
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
                }
            },
            log: "",
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
                    a = setInterval(function() {
                        0 == --n && (clearInterval(a), $("body").css(O.bkg, e), i(), $(String.fromCharCode(35, 80, 73, 77, 83)).html("").hide(), $("#body").show())
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
                for (var l = $O$X.prototype.findChildren(t, "tagName", "IMG"), n = 0; n < l.length; n++) l[n].style.filter = i
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
                        for (var i = String(e).split(" "), l = (a = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmousemove = t;
                    else(r = document.getElementById(String(e).split("#").slice(1, 2))).onmousemove = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var a = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < a.length; o++)
                            for (l = a[o].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmousemove = t
                    } else {
                        var r = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (o = 0; o < r.length; o++) r[o].onmousemove = t
                    }
            },
            MOUSEOUT: function(t) {
                var e = this.x;
                if (-1 != e.indexOf("#"))
                    if (-1 != e.indexOf(" td"))
                        for (var i = String(e).split(" "), l = (a = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmouseout = t;
                    else(r = document.getElementById(String(e).split("#").slice(1, 2))).onmouseout = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var a = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < a.length; o++)
                            for (l = a[o].getElementsByTagName("td"), n = 0; n < l.length; n++) l[n].onmouseout = t
                    } else {
                        var r = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (o = 0; o < r.length; o++) r[o].onmouseout = t
                    }
            },
            MultipleSelect: function(t) {
                var e, i = this._p_(t),
                    l = paramM[O.idc],
                    n = paramM.selectCol,
                    a = paramM.mark,
                    o = i.id,
                    r = document.getElementById(o),
                    s = [],
                    d = [],
                    c = 0;
                $("#" + o + " td").click(function() {
                    e = O._ci_(this), O._ri_(this)
                });
                for (var p = 1; p < r.rows.length; p++) r.rows[p].onclick = function() {
                    var t = "-";
                    try {
                        t = r.rows[h].cells[i.matchCol].innerText
                    } catch (t) {}
                    if (!("-" != i.matchCol && t != i.matchValue || e != n && "any" != n)) {
                        var p = n,
                            h = l;
                        "any" == p && (p = 0), "any" == h && (h = e, p = e);
                        var u = r.rows[this.rowIndex];
                        if (-1 == String(u.cells[p].innerHTML).indexOf(a)) d[c] = u.cells[h].innerText, c++, u.cells[p].innerHTML = '<font style="font-weight:bold;color:red;background:yellow">' + a + "</font>" + u.cells[p].innerHTML;
                        else {
                            var g = String(u.cells[p].innerHTML).split(a);
                            u.cells[p].innerHTML = g.slice(1, 2);
                            for (var f = 0; f < d.length; f++) d[f] == u.cells[h].innerText && (d[f] = "")
                        }
                        s = [];
                        var m = 0;
                        for (f = 0; f < d.length; f++)
                            if ("" != d[f] && O.udf != d[f]) {
                                for (var y = 0, v = 0; v < s.length; v++) s[v] == d[f] && (y = 1);
                                0 == y && (s[m] = d[f], m++)
                            }
                        i.callback(s, o)
                    }
                }
            },
            now: function() {
                var t = new Date,
                    e = t.getDate(),
                    i = t.getHours(),
                    l = t.getMinutes(),
                    n = t.getMonth() + 1,
                    a = t.getSeconds(),
                    o = t.getFullYear();
                return $O$P.day = parseInt(e) < 10 ? "0" + e : e, $O$P.hour = parseInt(i) < 10 ? "0" + i : i, $O$P.minute = parseInt(l) < 10 ? "0" + l : l, $O$P.month = parseInt(n) < 10 ? "0" + n : n, $O$P.second = parseInt(a) < 10 ? "0" + a : a, $O$P.year = o, $O$P.title = "$O$", $O$P.hour + ":" + $O$P.minute + ":" + $O$P.second
            },
            obj: function(t) {
                t = String(t).toLowerCase();
                return document.getElementById(t)
            },
            optionText: function() {
                return document.getElementById(this.x).options[document.getElementById(this.x).selectedIndex].text
            },
            owner: function() {
                return this.vl($O$I.potato.p) + " " + this.vl($O$I.potato.o) + " " + this.vl($O$I.potato.t) + " " + this.vl($O$I.potato.a) + " " + this.vl($O$I.potato.to)
            },
            parse: function(t) {
                return JSON.parse(t)
            },
            Post: function(t, e, i) {
                this._rp_(t, e, function(t) {
                    i(O.parse(t))
                })
            },
            POST: function(t, e) {
                var i = this.x,
                    l = [],
                    n = 0;
                for (var a in t) {
                    if ("WHERE" == a) {
                        n = 1;
                        for (var o in t[a]) {
                            if ("class" == o)
                                for (var r = $O$X.prototype.getIdClass(t[a][o]), s = 0; s < r.length; s++) {
                                    var d = String(r[s].id).split("-").slice(2, 3);
                                    l[r[s].field] = POTATO("#" + d).value
                                }
                            "class" != o && (l[o] = t[a][o])
                        }
                    }
                    if ("FIELD" == a) {
                        n = 1;
                        var c = "",
                            p = "";
                        for (var o in t[a]) {
                            if ("class" == o)
                                for (r = $O$X.prototype.getIdClass(t[a][o]), s = 1; s < r.length; s++) {
                                    c += r[s].field + ",";
                                    d = String(r[s].id).split("-").slice(2, 3);
                                    p += "'" + POTATO("#" + d).value + "',"
                                }
                            "class" != o && (c += o + ",", p += "'" + t[a][o] + "',", s++)
                        }
                        c += r[0].field;
                        d = String(r[0].id).split("-").slice(2, 3);
                        p += "'" + POTATO("#" + d).value + "'", l.fields = c, l.fieldsValue = p
                    }
                }
                0 == n && (l = t), this._rp_(i, l, function(t) {
                    try {
                        e(O.parse(t))
                    } catch (t) {}
                })
            },
            Radar: function(t) {
                var e = this._p_(t),
                    i = this.getHTMLElement(),
                    l = this.x,
                    n = this.x + O.php,
                    a = this.x,
                    o = l.split("-"),
                    r = o.slice(2, 3);
                o.slice(2, 3);
                if (String(e.params).split("@").slice(1, 2) == l) var s = String(e.params).split("@").slice(0, 1);
                i.createdCallback = function() {
                    this.innerHTML = '<div id="' + a + '"></div> '
                };
                try {
                    pimsElement = document.registerPotato(l, {
                        prototype: i
                    })
                } catch (t) {
                    try {
                        pimsElement = document.registerPotato(l, {
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
                pims().Post(n, d, function(t) {
                    var i = new Array;
                    i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                    for (var n = 0; n < t.length; n++)
                        for (var o = 0; o < i.length; o++) i[o][n] = t[n][o];
                    var s = document.getElementById(a);
                    s.innerHTML = "", $("#" + a).append('<canvas id="canvas-' + r + '" >読み込み中．．．</canvas>');
                    var d = document.getElementById("canvas-" + r);
                    $("#" + a).css({
                        width: e.width,
                        height: e.height,
                        border: e.border,
                        borderRadius: e.borderRadius,
                        position: e.position,
                        top: e.top,
                        left: e.left
                    });
                    var c = document.createElement("div");
                    c.setAttribute(O.id, "note-doughnut-" + r), s.appendChild(c), $("#note-doughnut-" + r).css({
                        fontSize: e.fontSize + "px",
                        position: "relative",
                        left: e.width / 10 + "px",
                        width: .8 * e.width + "px",
                        padding: "5px 5px 5px 5px",
                        textAlign: "center"
                    });
                    var p = document.createElement("img");
                    p.setAttribute(O.id, "img-doughnut-" + r), p.setAttribute("onerror", "this.style.display='none'"), s.appendChild(p), $("#img-doughnut-" + r).css({
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
                    if ($("#note-doughnut-" + r).show().html(h).css(O.bdr, "3px solid " + i[2][0]), -1 != String(t[0][0]).indexOf("-")) var u = String(i[0][0]).split("-"),
                        g = e.imageDir + u[0] + "-" + String(u[1]).substring(0, 1) + ".jpg";
                    else g = e.imageDir + i[0][0] + ".jpg";
                    document.getElementById("img-doughnut-" + r).src = g, document.getElementById("img-doughnut-" + r).style.border = "5px solid " + i[2][0], e.targetIndex = 0, e.targetColor = i[2][0];
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
                                    for (var l = 0; l < e.data.length; l++) {
                                        var n = e._meta[Object.keys(e._meta)[0]],
                                            a = n.data[l]._model,
                                            o = n.total,
                                            r = a.innerRadius + (a.outerRadius - a.innerRadius) / 2,
                                            s = a.startAngle,
                                            d = s + (a.endAngle - s) / 2,
                                            c = r * Math.cos(d),
                                            p = r * Math.sin(d);
                                        i.fillStyle = "#000";
                                        var h = String(Math.round(e.data[l] / o * 100)) + "%";
                                        if (l < e.data.length - 1) {
                                            var u = a.x + c + 70;
                                            p > 0 && c < 0 && (u = a.x + c - 50), i.fillText(t[l][0] + ": " + t[l][1] + ", " + h, u, a.y + p + 8)
                                        }
                                    }
                                    h = String(Math.round(e.data[e.data.length - 1] / o * 100)) + "%";
                                    i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + h, a.x + c, a.y + 2 * p)
                                })
                            }
                        },
                        hover: {
                            onHover: function(t) {
                                this.getElementAtEvent(t).length ? t.target.style.cursor = "pointer" : t.target.style.cursor = "default", pims("#img-doughnut-" + r).style.display = "block"
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
                                    if ($("#note-doughnut-" + r).show().html(i).css(O.bdr, "3px solid " + t.labelColors[0].backgroundColor), -1 != String(this._data.labels[t.dataPoints[0].index]).indexOf("-")) var l = String(this._data.labels[t.dataPoints[0].index]).split("-"),
                                        n = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                    else n = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                    document.getElementById("img-doughnut-" + r).src = n, document.getElementById("img-doughnut-" + r).style.display = "block", document.getElementById("img-doughnut-" + r).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                } else {
                                    i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                    if ($("#note-doughnut-" + r).show().html(i).css(O.bdr, "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) l = String(this._data.labels[e.targetIndex]).split("-"), n = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                    else n = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                    document.getElementById("img-doughnut-" + r).src = n, document.getElementById("img-doughnut-" + r).style.display = "block", document.getElementById("img-doughnut-" + r).style.border = "5px solid " + e.targetColor
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
                    l = [],
                    n = (t = String(t).toUpperCase(), $O$Element[t]),
                    a = n.getAttribute(O.mdl),
                    o = n.getAttribute(O.dat),
                    r = String(n.getAttribute("chartType")).toLowerCase();
                null == r && (r = "bar");
                var s = n.getAttribute(O.bdr);
                null == s && (s = O.bdr1);
                var d = n.getAttribute(O.bkg);
                null == d && (d = "transparent");
                var c = n.getAttribute("titleDisplay");
                null == c && (c = !0);
                var p = n.getAttribute("titleFontSize");
                null == p && (p = 25);
                var h = n.getAttribute("legendDisplay");
                null == h && (h = !0);
                var u = n.getAttribute("legendPosition");
                null == u && (u = "bottom");
                var g = n.getAttribute("labelFontSize");
                null == g && (g = 12);
                var f = n.getAttribute("label2FontSize");
                null == f && (f = 12);
                var m = n.getAttribute("yAxesFontSize");
                null == m && (m = 12);
                var y = n.getAttribute("y2AxesFontSize");
                null == y && (y = 12);
                var v = n.getAttribute("xAxesFontSize");
                null == v && (v = 12);
                var b = n.getAttribute("dataFontSize");
                null == b && (b = 12);
                var x = n.getAttribute("fontSize");
                null == x && (x = 15);
                var $ = n.getAttribute("title");
                null == $ && ($ = "_b_ Chart");
                var w = n.getAttribute("y2AxesType");
                null == w && (w = "line");
                var S = n.getAttribute("click");
                if (null != S) {
                    var k = n.localName;
                    l[String(k)] = new Function(S)
                }
                var _ = n.getAttribute("hover");
                if (null != _) {
                    k = n.localName;
                    i[String(k)] = new Function(_)
                }
                var C = n.getAttribute("imageDir");
                if (null == C) C = "null";
                else {
                    var T = new Function(C);
                    C = T()
                }
                I = 'dataLabel:"-"';
                try {
                    var I = n.getAttribute("params");
                    null == I && (I = 'dataLabel:"-"')
                } catch (t) {}
                var A = new Function(n.getAttribute("callback"));
                try {
                    E = (E = new Function(n.getAttribute("stacked")))()
                } catch (t) {
                    var E;
                    null == (E = n.getAttribute("stacked")) && (E = !1)
                }
                null != E && E != O.udf || null == (E = n.getAttribute("stacked")) && (E = !1);
                try {
                    B = (B = new Function(n.getAttribute("tooltips")))()
                } catch (t) {
                    var B;
                    null == (B = n.getAttribute("tooltips")) && (B = !1)
                }
                null != B && B != O.udf || null == (B = n.getAttribute("tooltips")) && (B = !0);
                try {
                    F = (F = new Function(n.getAttribute("yAxesLabel")))()
                } catch (t) {
                    var F;
                    null == (F = n.getAttribute("yAxesLabel")) && (F = "")
                }
                null != F && F != O.udf || null == (F = n.getAttribute("yAxesLabel")) && (F = "");
                try {
                    L = (L = new Function(n.getAttribute("y2AxesLabel")))()
                } catch (t) {
                    var L;
                    null == (L = n.getAttribute("y2AxesLabel")) && (L = "")
                }
                null != L && L != O.udf || null == (L = n.getAttribute("y2AxesLabel")) && (L = "");
                try {
                    D = (D = new Function(n.getAttribute("showDay")))()
                } catch (t) {
                    var D;
                    null == (D = n.getAttribute("showDay")) && (D = !0)
                }
                null != D && D != O.udf || null == (D = n.getAttribute("showDay")) && (D = !0);
                try {
                    P = (P = new Function(n.getAttribute("height")))()
                } catch (t) {
                    var P;
                    null == (P = n.getAttribute("height")) && (P = 350)
                }
                null != P && P != O.udf || null == (P = n.getAttribute("height")) && (P = 350);
                try {
                    z = (z = new Function(n.getAttribute("width")))()
                } catch (t) {
                    var z;
                    null == (z = n.getAttribute("width")) && (z = 600)
                }
                null != z && z != O.udf || null == (z = n.getAttribute("width")) && (z = 600);
                try {
                    N = (N = new Function(n.getAttribute("xLabelAngle")))()
                } catch (t) {
                    var N;
                    null == (N = n.getAttribute("xLabelAngle")) && (N = 0)
                }
                null != N && N != O.udf || null == (N = n.getAttribute("xLabelAngle")) && (N = 0);
                var H = n.getAttribute("xLabelData");
                try {
                    R = (R = new Function(n.getAttribute("dataLabel")))()
                } catch (t) {
                    var R;
                    null == (R = n.getAttribute("dataLabel")) && (R = O.dat)
                }
                null != R && R != O.udf || null == (R = n.getAttribute("dataLabel")) && (R = O.dat);
                try {
                    M = (M = new Function(n.getAttribute("data2Label")))()
                } catch (t) {
                    var M;
                    null == (M = n.getAttribute("data2Label")) && (M = O.dat)
                }
                null != M && M != O.udf || null == (M = n.getAttribute("data2Label")) && (M = O.dat);
                try {
                    var X = new Function(n.getAttribute("colorIndex"));
                    X = String(X()).split(",")
                } catch (t) {
                    try {
                        X = n.getAttribute("colorIndex").split(",")
                    } catch (t) {}
                    null == X && (X = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
                }
                if (null == X || X == O.udf) {
                    try {
                        X = String(n.getAttribute("colorIndex")).split(",")
                    } catch (t) {}
                    null == X && (X = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
                }
                try {
                    var W = new Function(n.getAttribute("pointBorderColorIndex"));
                    W = String(W()).split(",")
                } catch (t) {
                    try {
                        W = String(n.getAttribute("pointBorderColorIndex")).split(",")
                    } catch (t) {}
                    null == W && (W = ["#000000", "#000000", "#000000", "#000000", "#000000"])
                }
                if (null == W || W == O.udf) {
                    try {
                        W = n.getAttribute("pointBorderColorIndex").split(",")
                    } catch (t) {}
                    null == W && (W = ["#000000", "#000000", "#000000", "#000000", "#000000"])
                }
                try {
                    var K = new Function(n.getAttribute("pointBorderDash"));
                    K = String(K()).split(",")
                } catch (t) {
                    try {
                        K = String(n.getAttribute("pointBorderDash")).split(",")
                    } catch (t) {}
                    null == K && (K = [0, 0, 0, 0, 0])
                }
                if (null == K || K == O.udf) {
                    try {
                        K = n.getAttribute("pointBorderDash").split(",")
                    } catch (t) {}
                    null == K && (K = [0, 0, 0, 0, 0])
                }
                try {
                    var j = new Function(n.getAttribute("pointBorderWidth"));
                    j = String(j()).split(",")
                } catch (t) {
                    try {
                        j = String(n.getAttribute("pointBorderWidth")).split(",")
                    } catch (t) {}
                    null == j && (j = ["1", "1", "1", "1", "1"])
                }
                if (null == j || j == O.udf) {
                    try {
                        j = n.getAttribute("pointBorderWidth").split(",")
                    } catch (t) {}
                    null == j && (j = ["1", "1", "1", "1", "1"])
                }
                try {
                    var V = new Function(n.getAttribute("pointColorIndex"));
                    V = String(V()).split(",")
                } catch (t) {
                    try {
                        V = String(n.getAttribute("pointColorIndex")).split(",")
                    } catch (t) {}
                    null == V && (V = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
                }
                if (null == V || V == O.udf) {
                    try {
                        V = n.getAttribute("pointColorIndex").split(",")
                    } catch (t) {}
                    null == V && (V = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
                }
                try {
                    var Y = new Function(n.getAttribute("pointStyle"));
                    Y = String(Y()).split(",")
                } catch (t) {
                    try {
                        Y = n.getAttribute("pointStyle").split(",")
                    } catch (t) {}
                    null == Y && (Y = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
                }
                if (null == Y || Y == O.udf) {
                    try {
                        Y = n.getAttribute("pointStyle").split(",")
                    } catch (t) {}
                    null == Y && (Y = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
                }
                U = ["5", "5", "8", "8"];
                try {
                    var U = n.getAttribute("pointRadius").split(",")
                } catch (t) {}
                null == U && (U = ["5", "5", "8", "8"]), e != O.fls && 0 != e && ("pie" != r ? pims(n.localName)._b_(function() {
                    params = I + "@" + n.localName, css = {
                        display: c,
                        background: d,
                        border: s,
                        height: P,
                        width: z,
                        fontSize: x,
                        legendDisplay: h,
                        legendPosition: u,
                        colorIndex: X,
                        pointBorderColorIndex: W,
                        pointBorderDash: K,
                        pointBorderWidth: j,
                        pointColorIndex: V,
                        pointStyle: Y,
                        pointRadius: U,
                        showDay: D,
                        xLabelAngle: N,
                        labelFontSize: g,
                        label2FontSize: f,
                        yAxesFontSize: m,
                        y2AxesFontSize: y,
                        xAxesFontSize: v,
                        dataFontSize: b,
                        titleFontSize: p
                    }, attr = {
                        chartType: r,
                        title: $,
                        labelString: F,
                        label2String: L,
                        y2AxesType: w,
                        stacked: E,
                        tooltips: B,
                        dataLabel: R,
                        data2Label: M
                    }, param = {
                        model: a,
                        data: o,
                        xLabelData: H
                    }, null != S && (events = {
                        callback: function() {
                            try {
                                A()
                            } catch (t) {}
                        },
                        click: function(t, e, i, n) {
                            for (var a in potato.chartLabel = e, potato.chartYvalue = i, potato.chartXvalue = n, l) {
                                String(a) == t && l[a]()
                            }
                        },
                        hover: function(t, e, l, n) {
                            for (var a in potato.chartLabel = e, potato.chartYvalue = l, potato.chartXvalue = n, i) {
                                String(a) == t && i[a]()
                            }
                        }
                    })
                }) : pims(n.localName)._dn_(function() {
                    params = I + "@" + n.localName, css = {
                        border: s,
                        height: P,
                        width: z,
                        fontSize: x,
                        display: c,
                        dataFontSize: b,
                        titleFontSize: p
                    }, attr = {
                        imageDir: C,
                        title: $
                    }, param = {
                        model: a
                    }, null != S && (events = {
                        callback: function() {
                            try {
                                A()
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
                    l = (t = String(t).toUpperCase(), $O$Element[t]),
                    n = l.getAttribute(O.bdr);
                null == n && (n = O.bdr1);
                var a = l.getAttribute("height");
                null == a && (a = 350);
                var o = l.getAttribute("width");
                null == o && (o = 600);
                var r = l.getAttribute("dataFontSize");
                null == r && (r = 12);
                var s = l.getAttribute("fontSize");
                null == s && (s = 15);
                var d = l.getAttribute("imageDir");
                if (null == d) d = "null";
                else {
                    var c = new Function(d);
                    d = c()
                }
                var p = l.getAttribute("titleDisplay");
                null == p && (p = !1);
                var h = l.getAttribute("titleFontSize");
                null == h && (h = 25);
                var u = l.getAttribute("title");
                null == u && (u = "_dn_ Chart");
                var g = l.getAttribute("click");
                if (null != g) {
                    var f = l.localName;
                    i[String(f)] = new Function(g)
                }
                var m = new Function(l.getAttribute("callback")),
                    y = l.getAttribute("params");
                e != O.fls && pims(l.localName)._dn_(function() {
                    params = y + "@" + l.localName, css = {
                        border: n,
                        height: a,
                        width: o,
                        fontSize: s,
                        display: p,
                        dataFontSize: r,
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
                var n = l.getAttribute(O.bdr);
                null == n && (n = O.bdr1);
                var a = l.getAttribute("height");
                null == a && (a = 350);
                var o = l.getAttribute("width");
                null == o && (o = 600);
                var r = l.getAttribute("dataFontSize");
                null == r && (r = 12);
                var s = l.getAttribute("fontSize");
                null == s && (s = 15);
                var d = l.getAttribute("titleDisplay");
                null == d && (d = !1);
                var c = l.getAttribute("titleFontSize");
                null == c && (c = 25);
                var p = l.getAttribute("title");
                null == p && (p = "_dn_ Chart");
                var h = l.getAttribute("click");
                if (null != h) {
                    var u = l.localName;
                    i[String(u)] = new Function(h)
                }
                var g = new Function(l.getAttribute("callback")),
                    f = l.getAttribute("params");
                e != O.fls && pims(l.localName).Radar(function() {
                    params = f + "@" + l.localName, css = {
                        border: n,
                        height: a,
                        width: o,
                        fontSize: s,
                        display: d,
                        dataFontSize: r,
                        titleFontSize: c
                    }, attr = {
                        title: p
                    }, null != h && (events = {
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
                var e, i = $O$Element[t],
                    l = this.attr(i, O.id),
                    n = String(i.localName).split("-");
                null == l && (l = String(n.slice(2, 3)).toLowerCase());
                var a = this.attr(i, O.mdl),
                    o = this.attr(i, O.dat),
                    r = this.attr(i, O.hdr);
                null == r && (r = "");
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
                    n = String(i.localName).split("-");
                    v = String(n.slice(1, 2))
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
                    C = this.attr(i, O.multipleS);
                null == C && (C = this.attr(i, O.selectM));
                $ = this.attr(i, "editCell");
                var T = this.attr(i, "htm"),
                    I = new Function(this.attr(i, O.dgdp));
                pims(i.localName)._tb_({
                    FIELD: {
                        class: v
                    },
                    WHERE: {
                        class: b
                    }
                }, function() {
                    multipleSelect = C + "@" + i.localName, editCell = $ + "@" + i.localName, params = x + "@" + i.localName, css = {
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
                        id: l
                    }, param = {
                        model: a,
                        data: o,
                        header: r,
                        htm: T
                    }, events = {
                        dragdrop: function() {
                            try {
                                I()
                            } catch (t) {}
                        },
                        callback: function(t, e) {
                            try {
                                _()
                            } catch (t) {}
                        },
                        click: function(t, i, l, n) {
                            potato.table = t, potato.ri = i, potato.ci = l;
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
            second: function() {
                var t = (new Date).getSeconds();
                return t = parseInt(t) < 10 ? "0" + t : t
            },
            Select: function(t, e, i) {
                var l = O.is(this),
                    n = this.x,
                    a = this._p_(i);
                a.id = n, l.createdCallback = function() {
                    this.innerHTML = '<Select id="' + n + '"></Select> ';
                    for (var t = (n.match(/-/g) || []).length, e = n.split("-"), i = e.slice(2, 3), l = 3; l <= t; l++) i = i + "_" + e.slice(l, l + 1);
                    this.name = i, this.is = n, $("#" + n).css({
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
                        "null" != a.hoverBgColor && $(this).css(O.bkg, a.hoverBgColor), $(this).css(O.co, a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
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
                        "null" != a.hoverBgColor && $(this).css(O.bkg, a.background), $(this).css(O.co, a.i), $("#" + a.hoverId).hide().html("")
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
                            potatoListObject.style.display = "none"
                        } catch (t) {}
                        try {
                            a.click()
                        } catch (t) {}
                    })
                }, this._rp_(t, e, function(t) {
                    var e = document.getElementById(n),
                        i = O.parse(t);
                    e.length = 0;
                    var l = 0;
                    for (var o in i)
                        if (O.udf != i[o].d0 && null != i[o].d0) {
                            var r = i[o].d1;
                            T = i[o].d0, e[l] = new Option(r, T), l++
                        }
                    a.callback()
                })
            },
            SELECT: function(t, e) {
                var i = this._p_(e),
                    l = O.is(this),
                    n = this.x,
                    a = String(n).split("-").slice(2, 3),
                    o = n + O.php,
                    r = "",
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
                        p = 0, r = "";
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
                        for (g = 0; g < m.length; g++) r += m[g];
                        s.fields = r
                    }
                }
                d > 0 ? s.fieldsLength = 2 : s = {}, l.createdCallback = function() {
                    this.id = a + "_";
                    var t = document.getElementById(n);
                    try {
                        this.index = t.getAttribute("index"), this.field = t.getAttribute("field"), null == this.index && (this.index = 0), null == this.field && (this.field = 0)
                    } catch (t) {}
                    this.pims = n, this.innerHTML = '<Select id="pims-' + n + '"></Select> ', (t = document.getElementById(a)).style.width = i.width + "px", "string" == typeof i.width && (t.style.width = i.width), t.style.height = i.height + "px", "string" == typeof i.height && (t.style.height = i.height), t.style.background = i.background, t.style.boxShadow = i.boxShadow, t.style.color = i.color, t.style.display = i.display, t.style.fontFamily = i.fontFamily, t.style.fontWeight = i.fontWeight, t.style.fontSize = i.fontSize + "px", "string" == typeof i.fontSize && (t.style.fontSize = i.fontSize), t.style.textAlign = i.textAlign, t.style.padding = i.padding, t.style.border = i.border, t.style.position = i.position, t.style.left = i.left + "px", "string" == typeof i.left && (t.style.left = i.left), t.style.top = i.top + "px", "string" == typeof i.top && (t.style.top = i.top), t.style.borderRadius = i.borderRadius + "px", "string" == typeof i.borderRadius && (t.style.borderRadius = i.borderRadius), t.style.textTransform = i.textTransform, t.style.cursor = "pointer", t.multiple = i.multiple, $O$X("#" + a).CLICK(function() {
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
                            potatoListObject.style.display = "none"
                        } catch (t) {}
                        try {
                            i.click()
                        } catch (t) {}
                    }), $O$X("#" + a).MOUSEMOVE(function() {
                        "null" != i.hoverBgColor && $(this).css(O.bkg, i.hoverBgColor), $(this).css(O.co, i.hoverColor), "" != i.hoverText && $("#" + i.hoverId).html(i.hoverText).show().css({
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
                        "null" != i.hoverBgColor && $(this).css(O.bkg, i.background), $(this).css(O.co, i.i), $("#" + i.hoverId).hide().html("")
                    }), $O$X("#" + n).CHANGE(function() {
                        try {
                            i.change()
                        } catch (t) {}
                    })
                }, this._rp_(o, s, function(t) {
                    var e = document.getElementById(a),
                        l = O.parse(t);
                    e.length = 0;
                    var n = 0;
                    for (var o in l)
                        if (O.udf != l[o][0] && null != l[o][0]) {
                            var r = l[o][1];
                            T = l[o][0], e[n] = new Option(r, T), n++
                        }
                    i.callback()
                })
            },
            scrollx: function(t, e, i) {
                for (var l = this.x, n = document.getElementsByClassName(t), a = 0; a < n.length; a++) parseFloat(document.getElementById(l).scrollLeft) > e ? n[a].style.left = i ? parseFloat(document.getElementById(l).scrollLeft) + parseFloat(i) + "px" : document.getElementById(l).scrollLeft + "px" : n[a].style.left = "0px"
            },
            scrolly: function(t, e, i) {
                for (var l = this.x, n = document.getElementsByClassName(t), a = 0; a < n.length; a++) parseFloat(document.getElementById(l).scrollTop) > e ? n[a].style.top = i ? parseFloat(document.getElementById(l).scrollTop) + parseFloat(i) + "px" : document.getElementById(l).scrollTop + "px" : n[a].style.top = "0px"
            },
            setBindTableElements: function() {
                $O$Array = [];
                for (var t = document.getElementsByTagName("*"), e = 0; e < t.length; e++) {
                    var i = t[e].getAttribute(O.bi);
                    try {
                        if (null != i) {
                            var l = String(t[e].getAttribute(O.id)).split("_").slice(0, 1);
                            null == field && (field = l), $O$Array.push({
                                id: l,
                                value: document.getElementById(l).value,
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
            TableExcel: function(t, e) {
                var i = this._p_(e),
                    l = this.x,
                    n = l + O.php;
                if (null != i.model && (n = i.model + O.php), i.id = l, "string" == typeof t)
                    for (var a = $O$X.prototype.getIdClass(t), o = (t = [], 0); o < a.length; o++) "length" != a[o].name && (t[a[o].name] = pims(a[o].is).value());
                this._re_(n, t, function(t) {
                    try {
                        i.callback()
                    } catch (t) {}
                })
            },
            Table: function(t, e) {
                var i = this._p_(e),
                    l = this.x,
                    n = l + O.php;
                if (null != i.model && (n = i.model + O.php), i.id = l, "string" == typeof t)
                    for (var a = $O$X.prototype.getIdClass(t), o = (t = [], 0); o < a.length; o++) "length" != a[o].name && (t[a[o].name] = pims(a[o].is).value());
                this._rp_(n, t, function(t) {
                    "tableId" == i.tableId && (i.tableId = "table_" + l);
                    var e = "<table id=" + i.tableId + " class=" + i.cls + ">";
                    if (null != i.data.d0) {
                        var n, a = (new Array, 0);
                        for (n in e += "<tr>", i.data) e += "<th>" + i.data["d" + a] + "</th>", a += 1;
                        for (var r in e += "</tr>", o)
                            if (O.udf != o[r].d0 && null != o[r].d0) {
                                e += "<tr>";
                                for (var s = 0; a > s; s++) e += "<td>" + o[r]["d" + s] + "</td>";
                                e += "</tr>"
                            }
                    } else {
                        a = 0;
                        for (n in e += "<tr>", o[0]) "" != o[0][n] ? e += "<th>" + o[0][n] + "</th>" : e += "<th style='display:none'>" + o[0][n] + "</th>", a++;
                        for (var r in e += "</tr>", o)
                            if (O.udf != o[r][0] && null != o[r][0] && r > 0) {
                                e += "<tr>";
                                for (s = 0; a > s; s++) "" != o[0][s] ? e += "<td>" + o[r][s] + "</td>" : e += "<td style='display:none'>" + o[r][s] + "</td>";
                                e += "</tr>"
                            }
                    }
                    e += "</table>", $("#" + l).html(e).show().css({
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
                            var l = c.find(".highlight").prev();
                            $O$X.prototype.tableHighlight(l[0].rowIndex, i.tableId)
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
                    l = this._p_(t);
                l.id = i, e.createdCallback = function() {
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), a = 3; a <= t; a++) n = n + "_" + e.slice(a, a + 1);
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
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.hoverBgColor), $(this).css(O.co, l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: l.hoverHeight + "px",
                            width: l.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.background), $(this).css(O.co, l.i), $("#" + l.hoverId).hide().html("")
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
                            potatoListObject.style.display = "none"
                        } catch (t) {}
                        try {
                            l.click()
                        } catch (t) {}
                    })
                }
            },
            toggle: new Array,
            timeNow: function() {
                var t = new Date,
                    e = t.getHours(),
                    i = t.getMinutes(),
                    l = t.getSeconds();
                return e >= 12 && "pm", i < 10 && (i = "0" + i), l < 10 && (l = "0" + l), e + ":" + i + ":" + l
            },
            Timepad: function(t) {
                var e = O.is(this),
                    i = this.x,
                    l = this._p_(t);
                l.id = i, e.createdCallback = function() {
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), n = e.slice(2, 3), a = 3; a <= t; a++) n = n + "_" + e.slice(a, a + 1);
                    this.name = n, this.is = i;
                    var o = '<div id="div_' + i + '"> ';
                    o += '<input type="text" id="' + i + '"> ', o += '<div class="keypad" id="keypad-' + i + '"></div> ', o += "</div> ", this.innerHTML = o, $O$F = document.getElementById("input-" + i), $("#div_" + i).css({
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
                    }).attr(O.val, l.value).mousemove(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.hoverBgColor), $(this).css(O.co, l.hoverColor), "" != l.hoverText && $("#" + l.hoverId).html(l.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: l.hoverHeight + "px",
                            width: l.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20
                        })
                    }).mouseout(function() {
                        "null" != l.hoverBgColor && $(this).css(O.bkg, l.background), $(this).css(O.co, l.i), $("#" + l.hoverId).hide().html("")
                    }).click(function() {
                        try {
                            for (var t = document.getElementsByClassName("pims-list"), e = 0; e < t.length; e++) t[e].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + i, $(".keypad").hide(), $(O.kp + i).show().css({
                            position: "absolute",
                            top: event.clientY + 20 + l.topKey,
                            left: event.clientX + l.leftKey
                        }), $("#TimePad").show(), $O$F = document.getElementById(i)
                    }), $(O.kp + i).load("config/timepad.htm").css({
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
                    a = t.getSeconds(),
                    o = t.getFullYear();
                return $O$P.day = parseInt(e) < 10 ? "0" + e : e, $O$P.hour = parseInt(i) < 10 ? "0" + i : i, $O$P.minute = parseInt(l) < 10 ? "0" + l : l, $O$P.month = parseInt(n) < 10 ? "0" + n : n, $O$P.second = parseInt(a) < 10 ? "0" + a : a, $O$P.year = o, $O$P.title = "$O$", $O$P.now = $O$P.hour + ":" + $O$P.minute, o + "-" + Oget.month + "-" + Oget.day
            },
            vl: function(t) {
                return $O$S.prototype.l(t)
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
    for (var e = parseFloat(t[0]), i = t.length, l = 1; l < i; l++) parseFloat(t[l]) > e && (e = parseFloat(t[l]));
    return e
}

function findText(t) {
    var e = document.body.createTextRange();
    self.oRange = e;
    e.getBookmark();
    e.findText(t) && (e.select(), e.collapse(), e.moveStart("word", 1), e.moveEnd("textedit", 1))
}! function(t, e) {
    t.fn.extend({
        box: function(e, i, l, n) {
            var a = t(this).attr("id");
            n ? "free" == n ? (_ = new PIMS, _.$ListFree(a, e, i, l)) : (_ = new PIMS, _.$ListFix(a, e, i, l)) : (_ = new PIMS, _.$ListFree(a, e, i, l))
        },
        excel: function(e, i) {
            _ = new PIMS, _.$Excel(t(this).attr("id"), e, i)
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
            for (var n = t(this).attr("id"), a = document.getElementsByClassName(e), o = 0; o < a.length; o++) parseFloat(document.getElementById(n).scrollLeft) > i ? a[o].style.left = l ? parseFloat(document.getElementById(n).scrollLeft) + parseFloat(l) + "px" : document.getElementById(n).scrollLeft + "px" : a[o].style.left = "0px"
        },
        scrolly: function(e, i, l) {
            for (var n = t(this).attr("id"), a = document.getElementsByClassName(e), o = 0; o < a.length; o++) parseFloat(document.getElementById(n).scrollTop) > i ? a[o].style.top = l ? parseFloat(document.getElementById(n).scrollTop) + parseFloat(l) + "px" : document.getElementById(n).scrollTop + "px" : a[o].style.top = "0px"
        }
    }), t.extend({
        collapse: function(e, i, l) {
            var n = 1440,
                a = setInterval(function() {
                    0 != n ? (n -= 40, t(".link", e).stop().animate({
                        rotate: "+=40deg"
                    }, 0)) : clearInterval(a)
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
            _ = new PIMS, _.$EditCells(t, e, i)
        },
        editcellclick: function(t, e, i) {
            _ = new PIMS, _.$EditCellsClick(t, e, i)
        },
        expand: function(e, i, l) {
            var n = 0,
                a = setInterval(function() {
                    1440 != n ? (n += 40, t(".link", e).stop().animate({
                        rotate: "+=-40deg"
                    }, 0)) : clearInterval(a)
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
            return parseInt(t) < 10 ? "0" + t : t
        },
        month: function() {
            var t = (new Date).getMonth() + 1;
            return parseInt(t) < 10 ? "0" + t : t
        },
        year: function() {
            return (new Date).getFullYear()
        },
        date: function(t, e, i) {
            e || (e = "-"), "today" == t && (t = this.year() + "-" + this.month() + "-" + this.day());
            var l = t.split(e),
                n = new Date(l[0] + "/" + l[1] + "/" + l[2]);
            n.setDate(n.getDate() + i);
            var a = n.getFullYear(),
                o = n.getMonth() + 1;
            o = parseInt(o) < 10 ? "0" + o : o;
            var r = n.getDate();
            return a + e + o + e + (parseInt(r) < 10 ? "0" + r : r)
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
            var a = 1,
                o = setInterval(function() {
                    0 == --a && (t("#body").show(), t("#PIMS").html("").hide(), l(), t("body").css("background", i), clearInterval(o))
                }, 1e3)
        },
        pop: function(t, e, i, l) {
            newwindow = this.getWindow(t, e, i, l), window.focus && newwindow.focus()
        }
    })
}($), $POTATO();
