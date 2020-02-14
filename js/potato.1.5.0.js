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
version 1.4.0 - add the tab menu feature into the library (revised on 15th JAN 2020)
version 1.4.1 - improve OTab the tab menu feature and OTable (revised on 21st JAN 2020)
version 1.4.2 - improve on OChart feature to load data from database with x as xLabelData (revised on 24th JAN 2020)
                OChart y2Axes = false or true setting and stacked=false or true to set the data label position
version 1.5.0 - improve on OChart
                $data["line"]=$line; ---> to draw a line in the chart
                $data["color"]="lightpink"; ---> set the dataLabel bgcolor
                array_push($datalist,$data);
                if(stacked==false){
                  .....
                  qty +=data[i]["line"]; ---> set the value for the line in condition of stacked attr == false
                  cc[c].push(data[i]["color"]);
                }

                potato.hide() --> $("potato").hide();
                potato.show() --> $("potato").show();
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
                a = t.getMonth() + 1,
                n = t.getSeconds(),
                o = t.getFullYear();
            $O$P.day = parseInt(e) < 10 ? "0" + e : e, $O$P.hour = parseInt(i) < 10 ? "0" + i : i, $O$P.minute = parseInt(l) < 10 ? "0" + l : l, $O$P.month = parseInt(a) < 10 ? "0" + a : a, $O$P.second = parseInt(n) < 10 ? "0" + n : n, $O$P.year = o, $O$P.now = $O$P.hour + ":" + $O$P.minute, Oget.today = o + "-" + Oget.month + "-" + Oget.day, pims = $O$X, POTATO = $O$X, $O$L.init()
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

        function a(t, e) {
            for (var i = 0, l = t.length; i < l; i++) u(t[i], e)
        }

        function n(t) {
            return function(e) {
                tt(e) && (u(e, t), a(e.querySelectorAll(R), t))
            }
        }

        function o(t) {
            var e = t.getAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111)),
                i = t.nodeName.toUpperCase(),
                l = N.call(M, e ? _ + e.toUpperCase() : T + i);
            return e && -1 < l && !r(i, e) ? -1 : l
        }

        function r(t, e) {
            return -1 < R.indexOf(t + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + e + '"]')
        }

        function s(t) {
            var e = t.currentTarget,
                i = t.attrChange,
                l = t.attrName,
                a = t.target;
            ht && (!a || a === e) && e.attributeChangedCallback && "style" !== l && e.attributeChangedCallback(l, i === t[k] ? null : t.prevValue, i === t[$] ? null : t.newValue)
        }

        function d(t) {
            var e = n(t);
            return function(t) {
                g.push(e, t.target)
            }
        }

        function c(t) {
            pt && (pt = !1, t.currentTarget.removeEventListener(E, c)), a((t.target || e).querySelectorAll(R), t.detail === w ? w : A), q && function() {
                for (var t, e = 0, i = et.length; e < i; e++) t = et[e], H.contains(t) || (et.splice(e, 1), u(t, w))
            }()
        }

        function p(t, e) {
            var i = this;
            lt.call(i, t, e), f.call(i, {
                target: i
            })
        }

        function h(t, e) {
            j(t, e), b ? b.observe(t, ot) : (ct && (t.setAttribute = p, t[x] = y(t), t.addEventListener(B, f)), t.addEventListener(I, s)), t.createdCallback && ht && (t.created = !0, t.createdCallback(), t.created = !1)
        }

        function u(t, e) {
            var i, l = o(t); - 1 < l && (v(t, L[l]), l = 0, e !== A || t[A] ? e === w && !t[w] && (t[A] = !1, t[w] = !0, l = 1) : (t[w] = !1, t[A] = !0, l = 1, q && N.call(et, t) < 0 && et.push(t)), l && (i = t[e + "Callback"]) && i.call(t))
        }
        if (!(l in e)) {
            var g, f, m, y, b, v, O, x = "__" + l + (1e5 * Math.random() >> 0),
                A = "attached",
                w = "detached",
                S = "extends",
                k = "ADDITION",
                C = "MODIFICATION",
                $ = "REMOVAL",
                I = "DOMAttrModified",
                E = "DOMContentLoaded",
                B = "DOMSubtreeModified",
                T = "<",
                _ = "=",
                F = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
                D = ["ANNOTATION-XML", "COLOR-PROFILE", "FONT-FACE", "FONT-FACE-SRC", "FONT-FACE-URI", "FONT-FACE-FORMAT", "FONT-FACE-NAME", "MISSING-GLYPH"],
                M = [],
                L = [],
                R = "",
                H = e.documentElement,
                N = M.indexOf || function(t) {
                    for (var e = this.length; e-- && this[e] !== t;);
                    return e
                },
                K = i.prototype,
                Q = K.hasOwnProperty,
                z = K.isPrototypeOf,
                P = i.defineProperty,
                G = i.getOwnPropertyDescriptor,
                W = i.getOwnPropertyNames,
                Y = i.getPrototypeOf,
                U = i.setPrototypeOf,
                V = !!i.$O$Sroto__,
                X = i.create || function t(e) {
                    return e ? (t.prototype = e, new t) : this
                },
                j = U || (V ? function(t, e) {
                    return t.$O$Sroto__ = e, t
                } : W && G ? function() {
                    function t(t, e) {
                        for (var i, l = W(e), a = 0, n = l.length; a < n; a++) i = l[a], Q.call(t, i) || P(t, i, G(e, i))
                    }
                    return function(e, i) {
                        do {
                            t(e, i)
                        } while ((i = Y(i)) && !z.call(i, e));
                        return e
                    }
                }() : function(t, e) {
                    for (var i in e) t[i] = e[i];
                    return t
                }),
                J = t.MutationObserver || t.WebKitMutationObserver,
                Z = (t.HTMLElement || t.Element || t.Node).prototype,
                q = !z.call(Z, H),
                tt = q ? function(t) {
                    return 1 === t.nodeType
                } : function(t) {
                    return z.call(Z, t)
                },
                et = q && [],
                it = Z.cloneNode,
                lt = Z.setAttribute,
                at = Z.removeAttribute,
                nt = e.createElement,
                ot = J && {
                    attributes: !0,
                    characterData: !0,
                    attributeOldValue: !0
                },
                rt = J || function(t) {
                    ct = !1, H.removeEventListener(I, rt)
                },
                st = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || function(t) {
                    setTimeout(t, 10)
                },
                dt = !1,
                ct = !0,
                pt = !0,
                ht = !0;
            U || V ? (v = function(t, e) {
                z.call(e, t) || h(t, e)
            }, O = h) : O = v = function(t, e) {
                t[x] || (t[x] = i(!0), h(t, e))
            }, q ? (ct = !1, function() {
                var t = G(Z, "addEventListener"),
                    e = t.value,
                    i = function(t) {
                        var e = new CustomEvent(I, {
                            bubbles: !0
                        });
                        e.attrName = t, e.prevValue = this.getAttribute(t), e.newValue = null, e[$] = e.attrChange = 2, at.call(this, t), this.dispatchEvent(e)
                    },
                    l = function(t, e) {
                        var i = this.hasAttribute(t),
                            l = i && this.getAttribute(t),
                            a = new CustomEvent(I, {
                                bubbles: !0
                            });
                        lt.call(this, t, e), a.attrName = t, a.prevValue = i ? l : null, a.newValue = e, i ? a[C] = a.attrChange = 1 : a[k] = a.attrChange = 0, this.dispatchEvent(a)
                    },
                    a = function(t) {
                        var e, i = t.currentTarget,
                            l = i[x],
                            a = t.propertyName;
                        l.hasOwnProperty(a) && (l = l[a], (e = new CustomEvent(I, {
                            bubbles: !0
                        })).attrName = l.name, e.prevValue = l.value || null, e.newValue = l.value = i[a] || null, null == e.prevValue ? e[k] = e.attrChange = 0 : e[C] = e.attrChange = 1, i.dispatchEvent(e))
                    };
                t.value = function(t, n, o) {
                    t === I && this.attributeChangedCallback && this.setAttribute !== l && (this[x] = {
                        className: {
                            name: "class",
                            value: this.className
                        }
                    }, this.setAttribute = l, this.removeAttribute = i, e.call(this, "propertychange", a)), e.call(this, t, n, o)
                }, P(Z, "addEventListener", t)
            }()) : J || (H.addEventListener(I, rt), H.setAttribute(x, 1), H.removeAttribute(x), ct && (f = function(t) {
                var e, i, l, a = this;
                if (a === t.target) {
                    for (l in e = a[x], a[x] = i = y(a), i) {
                        if (!(l in e)) return m(0, a, l, e[l], i[l], k);
                        if (i[l] !== e[l]) return m(1, a, l, e[l], i[l], C)
                    }
                    for (l in e)
                        if (!(l in i)) return m(2, a, l, e[l], i[l], $)
                }
            }, m = function(t, e, i, l, a, n) {
                var o = {
                    attrChange: t,
                    currentTarget: e,
                    attrName: i,
                    prevValue: l,
                    newValue: a
                };
                o[n] = t, s(o)
            }, y = function(t) {
                for (var e, i, l = {}, a = t.attributes, n = 0, o = a.length; n < o; n++) "setAttribute" !== (i = (e = a[n]).name) && (l[i] = e.value);
                return l
            })), e[l] = function(t, i) {
                if (l = t.toUpperCase(), dt || (dt = !0, J ? (b = function(t, e) {
                        function i(t, e) {
                            for (var i = 0, l = t.length; i < l; e(t[i++]));
                        }
                        return new J(function(l) {
                            for (var a, n, o = 0, r = l.length; o < r; o++) "childList" === (a = l[o]).type ? (i(a.addedNodes, t), i(a.removedNodes, e)) : (n = a.target, ht && n.attributeChangedCallback && "style" !== a.attributeName && n.attributeChangedCallback(a.attributeName, a.oldValue, n.getAttribute(a.attributeName)))
                        })
                    }(n(A), n(w))).observe(e, {
                        childList: !0,
                        subtree: !0
                    }) : (g = [], st(function t() {
                        for (; g.length;) g.shift().call(null, g.shift());
                        st(t)
                    }), e.addEventListener("DOMNodeInserted", d(A)), e.addEventListener("DOMNodeRemoved", d(w))), e.addEventListener(E, c), e.addEventListener("readystatechange", c), e.createElement = function(t, i) {
                        var l = nt.apply(e, arguments),
                            a = "" + t,
                            n = N.call(M, (i ? _ : T) + (i || a).toUpperCase()),
                            o = -1 < n;
                        return i && (l.setAttribute(String.fromCharCode(112, 111, 116, 97, 116, 111), i = i.toLowerCase()), o && (o = r(a.toUpperCase(), i))), ht = !e.createElement.innerHTMLHelper, o && O(l, L[n]), l
                    }, Z.cloneNode = function(t) {
                        var e = it.call(this, !!t),
                            i = o(e);
                        return -1 < i && O(e, L[i]), t && function(t) {
                            for (var e, i = 0, l = t.length; i < l; i++) e = t[i], O(e, L[o(e)])
                        }(e.querySelectorAll(R)), e
                    }), -2 < N.call(M, _ + l) + N.call(M, T + l)) throw new Error("A " + t + " type pims already registered");
                if (!F.test(l) || -1 < N.call(D, l)) throw new Error("The type " + t + " pims invalid");
                var l, s = function() {
                        return h ? e.createElement(u, l) : e.createElement(u)
                    },
                    p = i || K,
                    h = Q.call(p, S),
                    u = h ? i[S].toUpperCase() : l,
                    f = M.push((h ? _ : T) + l) - 1;
                return R = R.concat(R.length ? "," : "", h ? u + "[" + String.fromCharCode(112, 111, 116, 97, 116, 111) + '="' + t.toLowerCase() + '"]' : u), s.prototype = L[f] = Q.call(p, "prototype") ? p.prototype : X(Z), a(e.querySelectorAll(R), A), s
            }
        }
    }(window, document, Object, $O$S.prototype.l($O$V().r)),
    $O$X = function() {
        var $O$P = function(t, e, i, l, a) {
            var n = $O$S.prototype.l($O$V().lp);
            if (this.data = [], this.array1 = [], this.array2 = [], this.where = [], this.field = [], this.whereOther = [], this.fieldOther = [], this.Query = 0, this.Submit = 0, -1 != String(t).indexOf($O$S.prototype.l($O$V().h)) && (n = String(t).split($O$S.prototype.l($O$V().h)).slice(1, 2)), !a) {
                if (t && n == $O$S.prototype.l($O$V().lp)) return window === this ? new $O$P(t) : (this.Day = this.day(), this.e = document.getElementById(t), this.Hour = this.hour(), this.id = t, this.Minute = this.minute(), this.Month = this.month(), this.obj = document.getElementById(t), this.Patent = this.getPatent(), this.Second = this.second(), this.x = t, this.Year = this.year(), this.table, this.ci, this.ri, this.title, this.value, this.oldValue, this.dataID, this.trigger, this.chartLabel, this.chartYvalue, this.chartXvalue, this.element, this.element1, this.element2, this.element3, this.element4, this.element5, this.element6, this.element7, this.element8, this.element9, this.elementbar, this.element1bar, this.element2bar, this.element3bar, this.element4bar, this.element5bar, this.element6bar, this.element7bar, this.element8bar, this.element9bar, this.elementdoughnut, this.element1doughnut, this.element2doughnut, this.element3doughnut, this.element4doughnut, this.element5doughnut, this.element6doughnut, this.element7doughnut, this.element8doughnut, this.element9doughnut, this.elementradar, this.element1radar, this.element2radar, this.element3radar, this.element4radar, this.element5radar, this.element6radar, this.element7radar, this.element8radar, this.element9radar, this);
                if (t && n != $O$S.prototype.l($O$V().lp)) {
                    var o = String(n).toLowerCase();
                    return document.getElementById(o)
                }
                return window === this ? new $O$P($O$S.prototype.l($O$V().up)) : (this.x = $O$S.prototype.l($O$V().up), this.e = document.getElementById($O$S.prototype.l($O$V().up)), this)
            }
            this.x = t, this.y = e, this.dx = i, this.dy = l, this.radius = a
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
            console: "",
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
                    a = t.getAttribute(O.id);
                null == a && (a = String(i.slice(2, 3)).toLowerCase());
                var n = this._se_a(e, t, O.hid, O.pht),
                    o = this._se_a(e, t, O.htx, ""),
                    r = this._se_a(e, t, O.csr, O.dft);
                return {
                    disabled: l,
                    value: this._se_a(e, t, O.val, "0"),
                    hoverText: o,
                    hoverId: n,
                    cursor: r,
                    id: a,
                    name: a
                }
            },
            _b_: function(t) {
                var e = this._p_(t);
                "potato.title" == e.title && (e.title = potato.title), null != e.model && (e.model = "potato.model") && (e.model = potato.model);
                e.model;
                var i = param[O.dat],
                    l = attr.y2Axes,
                    a = attr.dataValue,
                    n = attr.data2Value; - 1 != String(i).indexOf(".php") && (e.model = i);
                var o = this.getHTMLElement(),
                    r = this.x,
                    s = r.split("-"),
                    d = s.slice(2, 3),
                    c = (s.slice(2, 3), !1);
                e.stacked != O.tue && 1 != e.stacked || (c = !0);
                var p = !0;
                if (e.tooltips != O.fls && 0 != e.tooltips || (p = !1), String(e.params).split("@").slice(1, 2) == r) var h = String(e.params).split("@").slice(0, 1);
                var u = [];
                if (null != [] && "null" != h)
                    for (var g = (String(h).match(/,/g) || []).length, f = String(h).split(","), m = 0; m <= g; m++) {
                        var y = String(f.slice(m, m + 1)).split(":"),
                            b = String(y.slice(1, 2));
                        if (-1 != b.indexOf(",") && (b = String(String(y).split(",")).slice(0, 1)), "null" != String(y.slice(0, 1)).replace(/\s+/g, "") && "" != String(y.slice(0, 1)).replace(/\s+/g, ""))
                            if (-1 != b.indexOf("return")) {
                                var v = new Function(b);
                                u[String(y.slice(0, 1)).replace(/\s+/g, "")] = v()
                            } else u[String(y.slice(0, 1)).replace(/\s+/g, "")] = String(b).replace(/\s+/g, "")
                    }
                null != e.model ? (o.createdCallback = function() {
                    var t = '<div class="chartWrapper" style="position:relative">';
                    t += '<div id="div-' + d + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="chart-' + d + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + d + '" style="background:' + e.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(e.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t
                }, this.Post(e.model, u, function(t) {
                    potato.data = t;
                    var i = new Array,
                        o = new Array,
                        s = new Array;
                    i[0] = new Array, o[0] = new Array, s[0] = new Array;
                    new Array;
                    var h = String(String(e.dataLabel).replace(/\s+/g, "")).split(","),
                        u = String(String(e.data2Label).replace(/\s+/g, "")).split(",");
                    if ("bar" == e.chartType) {
                        for (var g = 1, f = 0; f <= h.length + 1; f++) h[f] != O.dat && (i[g] = new Array, s[g] = new Array, g++);
                        if (u[0] != O.dat)
                            for (g = 0, f = 0; f <= u.length; f++) o[g] = new Array, g++
                    }
                    var m = new Array,
                        y = new Array,
                        b = new Array,
                        v = (new Array, "");
                    if (null != param.xLabelData) {
                        var x = param.xLabelData.split(",");
                        for (f = 0; f < x.length; f++) m[f] = x[f]
                    } else
                        for (f = 0; f < t.length; f++)
                            if ("-" != t[f].x)
                                if (e.showDay == O.tue) {
                                    var A = String(t[f].x).split("-"),
                                        w = A.slice(0, 1),
                                        S = A.slice(1, 2),
                                        k = A.slice(2, 3),
                                        C = new Date(w + "/" + S + "/" + k);
                                    if (0 == C.getDay()) v = "日";
                                    if (1 == C.getDay()) v = "月";
                                    if (2 == C.getDay()) v = "火";
                                    if (3 == C.getDay()) v = "水";
                                    if (4 == C.getDay()) v = "木";
                                    if (5 == C.getDay()) v = "金";
                                    if (6 == C.getDay()) v = "土";
                                    m[f] = "" != v ? t[f].x + " (" + v + ")" : t[f].x
                                } else m[f] = t[f].x;
                    else m[f] = "";
                    for (f = 0; f < t.length; f++)
                        if ("bar" == e.chartType) {
                            var I = 0,
                                E = 0,
                                B = [];
                            B[0] = 0;
                            var T = 0;
                            for (g = 0; g < h.length; g++) try {
                                h[g] != O.dat && (i[T].push(t[f][g]), 1 == c ? I += parseFloat(t[f][g]) : (B[g] = 0, parseFloat(t[f][g]) > 0 && t[f][g] != O.udf && (B[g] = parseFloat(t[f][g])), I += t[f].line, E += t[f].line2, s[T].push(t[f].color)), T++)
                            } catch (t) {}
                            if (i[T].push(I), i[T + 1].push(E), y[f] = 1 == c ? I : maxArray(B), u[0] != O.dat) {
                                E = 0;
                                var _ = [];
                                _[0] = 0;
                                var F = 0;
                                for (g = 0; g < u.length; g++)
                                    if (null != t[f][u[g]] && t[f][u[g]] > 0) try {
                                        o[F].push(t[f][u[g]]), 1 == c ? E += parseFloat(t[f][u[g]]) : (E[g] = 0, parseFloat(t[f][u[g]]) > 0 && (_[g] = parseFloat(t[f][u[g]]))), F++
                                    } catch (t) {}
                                    b[f] = 1 == c ? E : maxArray(_)
                            }
                            I
                        } else i[0].push(t[f][1]), y[f] = t[f][1], t[f][1];
                    var D = new Array,
                        M = (new Array, g = 0, !1);
                    if ("bar" == e.chartType) {
                        if ("true" == l)
                            for (f = 0; f < u.length; f++) D[g] = {
                                type: "line",
                                label: u[f],
                                radius: e.pointRadius[f],
                                backgroundColor: e.pointColorIndex[f],
                                pointStyle: e.pointStyle[f],
                                borderDash: [e.pointBorderDash[f]],
                                borderColor: e.pointBorderColorIndex[f],
                                borderWidth: e.pointBorderWidth[f],
                                yAxisID: "y-axis-2",
                                fill: !1,
                                data: o[f]
                            }, M = !0, g++;
                        if (1 == c ? D[g] = {
                                type: "line",
                                label: "",
                                borderColor: "#fff",
                                backgroundColor: "transparent",
                                borderWidth: 0,
                                borderColor: "transparent",
                                yAxisID: "y-axis-1",
                                fill: !1,
                                data: i[T]
                            } : (D[g] = {
                                type: "line",
                                label: "",
                                borderColor: "red",
                                backgroundColor: "transparent",
                                borderWidth: 0,
                                pointStyle: "dash",
                                borderDash: [5],
                                borderWidth: 1.5,
                                yAxisID: "y-axis-1",
                                fill: !1,
                                data: i[T]
                            }, D[++g] = {
                                type: "line",
                                label: "",
                                borderColor: "blue",
                                backgroundColor: "transparent",
                                borderWidth: 0,
                                pointStyle: "dash",
                                borderDash: [5],
                                borderWidth: 1.5,
                                yAxisID: "y-axis-1",
                                fill: !1,
                                data: i[T + 1]
                            }), g++, "null" != e.colorIndex[0])
                            for (f = 0; f < h.length; f++) D[g] = {
                                type: "bar",
                                label: h[f],
                                backgroundColor: e.colorIndex[f],
                                borderColor: "#444",
                                borderWidth: 1,
                                data: i[f]
                            }, g++;
                        else
                            for (f = 0; f < h.length; f++) D[g] = {
                                type: "bar",
                                label: h[f],
                                backgroundColor: s[f],
                                borderColor: "#444",
                                borderWidth: 1,
                                data: i[f]
                            }, g++
                    }
                    if (e.legendDisplay == O.tue) {
                        var L = "bottom";
                        null != e.legendPosition && (L = e.legendPosition);
                        var R = {
                            position: L,
                            display: !0,
                            labels: {
                                usePointStyle: !0
                            }
                        }
                    } else R = {
                        position: "bottom",
                        display: !1
                    };
                    if ("bar" == e.chartType) {
                        var H = 1.2;
                        "" != e.label2String && (H = 2);
                        var N = [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-1",
                                stacked: c,
                                ticks: {
                                    callback: function(t, e, i) {
                                        return parseFloat(t) > 999 || parseFloat(t) < -999 ? pims().Comma(String(parseInt(t) / 1e3)) + "t" : pims().Comma(t)
                                    },
                                    beginAtZero: !0,
                                    max: maxArray(y) * H,
                                    min: 0,
                                    fontSize: e.yAxesFontSize
                                },
                                scaleLabel: {
                                    display: !0,
                                    labelString: e.labelString,
                                    fontSize: e.labelFontSize
                                }
                            }, {
                                display: M,
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
                                    min: -maxArray(b)
                                },
                                scaleLabel: {
                                    display: !0,
                                    labelString: e.label2String,
                                    fontSize: e.label2FontSize
                                }
                            }],
                            K = {
                                duration: 500,
                                easing: "easeOutQuart",
                                onComplete: function() {
                                    var i = this.chart.ctx,
                                        l = this.scales["y-axis-1"].width - 10,
                                        o = this.scales["y-axis-1"].height + this.scales["y-axis-1"].top + 10,
                                        r = document.getElementById("yAxis_" + d).getContext("2d");
                                    r.canvas.width = l, r.drawImage(this.chart.canvas, 0, 0, l, o, 0, 0, l, o), i.textAlign = "center", i.textBaseline = "bottom";
                                    var s = 0;
                                    this.data.datasets.forEach(function(l) {
                                        for (var o = 0; o < l.data.length; o++) {
                                            i.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial");
                                            var r = l._meta[Object.keys(l._meta)[0]].data[o]._model,
                                                d = l._meta[Object.keys(l._meta)[0]].data[o]._yScale.maxHeight;
                                            i.fillStyle = "black";
                                            var c = r.y - 5;
                                            if ("false" == e.stacked && (c = r.y - 25), (d - r.y) / d >= .93 && (c = r.y + 14), "bar" == l.type && s != p && (c += 20), t.length < 31) {
                                                var p;
                                                if ("true" == a)
                                                    if ("bar" == l.type || "true" == e.stacked)
                                                        if (parseFloat(l.data[o]) > 0)(p = parseFloat(l.data[o])) > 1e6 ? (p = Math.ceil(p / 1e3), i.fillText(pims().Comma(p) + "t", r.x, c)) : i.fillText(pims().Comma(p), r.x, c);
                                                if ("true" == n)
                                                    if ("line" == l.type && "y-axis-2" == l.yAxisID)
                                                        if (parseFloat(l.data[o]) > 0) i.fillStyle = "red", i.font = Chart.helpers.fontString(e.dataFontSize, "bold", "Arial"), (p = parseFloat(l.data[o])) > 1e6 ? (p = Math.ceil(p / 1e3), i.fillText(pims().Comma(p) + "t", r.x, r.y + 20)) : i.fillText(pims().Comma(p), r.x, r.y + 20)
                                            }
                                        }
                                        s++
                                    })
                                }
                            }
                    } else N = [], K = {
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
                    var Q = {
                            hover: {
                                animationDuration: 1,
                                onHover: function(t, i) {
                                    var l = this.getElementAtEvent(t);
                                    if (l.length) {
                                        t.target.style.cursor = "pointer";
                                        try {
                                            var a = l[0]._chart.data,
                                                n = l[0]._datasetIndex,
                                                o = a.datasets[n].label,
                                                s = a.datasets[n].data[l[0]._index];
                                            t = i[0];
                                            var d = this.data.labels[t._index];
                                            e.hover(r, o, s, d)
                                        } catch (t) {
                                            e.hover(r, "-")
                                        }
                                    } else t.target.style.cursor = "default", e.hover(r, "-")
                                }
                            },
                            onClick: function(t, i) {
                                var l = this.getElementAtEvent(t);
                                if (l.length) try {
                                    var a = l[0]._chart.data,
                                        n = l[0]._datasetIndex,
                                        o = a.datasets[n].label,
                                        s = a.datasets[n].data[l[0]._index];
                                    t = i[0];
                                    var d = this.data.labels[t._index];
                                    e.click(r, o, s, d)
                                } catch (t) {
                                    e.click(r, "-")
                                } else e.click(r, "-")
                            },
                            title: {
                                display: e.display,
                                text: e.title,
                                fontSize: e.titleFontSize
                            },
                            legend: R,
                            scales: {
                                xAxes: [{
                                    stacked: c,
                                    ticks: {
                                        autoSkip: !1,
                                        fontSize: e.xAxesFontSize,
                                        maxRotation: e.xLabelAngle,
                                        minRotation: e.xLabelAngle
                                    }
                                }],
                                yAxes: N
                            },
                            tooltips: {
                                enabled: p
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            animation: K
                        },
                        z = "<canvas id='canvas-" + d + "' style='background:" + e.background + "'></canvas>",
                        P = document.getElementById("chart-" + d);
                    P.innerHTML = "", $("#div-" + d).show().css({
                        width: e.width,
                        height: e.height,
                        border: e.border
                    });
                    var G = "100%";
                    t.length > 50 && (G = "130%"), t.length > 100 && (G = "150%"), t.length > 150 && (G = "180%"), t.length > 200 && (G = "250%"), t.length > 250 && (G = "300%"), t.length > 300 && (G = "350%"), t.length > 350 && (G = "400%"), t.length > 400 && (G = "500%"), $("#chart-" + d).html(z).css({
                        width: G
                    });
                    var W = document.getElementById("canvas-" + d);
                    try {
                        var Y = e.name;
                        null == Y && (Y = "");
                        var U = document.createElement("span");
                        U.innerText = Y, U.style.fontSize = e.nameFontSize, P.appendChild(U), $("#div_" + d + " span").css({
                            position: "absolute",
                            left: e.width / 6 + "px",
                            top: 2 * -e.fontSize + "px",
                            fontSize: e.nameFontSize + "px",
                            textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                        })
                    } catch (t) {}
                    if ("bar" == e.chartType) new Chart(W, {
                        type: e.chartType,
                        options: Q,
                        data: {
                            labels: m,
                            datasets: D
                        }
                    });
                    else new Chart(W, {
                        type: "horizontalBar",
                        options: Q,
                        data: {
                            labels: m,
                            datasets: [{
                                label: h[0],
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
                })) : o.createdCallback = function() {
                    var t = '<div class="chartWrapper" style="position:relative">';
                    t += '<div id="div_' + d + '" class="chartAreaWrapper" style="overflow-y:hidden;-x:scroll;position:relative;">', t += '<div id="div_chart_' + d + '" style="position:relative;height:100%" class="chartAreaWrapper2" ></div> ', t += "</div>", t += '<canvas id="yAxis_' + d + '" style="background:' + e.background + ';position:absolute;left:0;top:0;pointer-events:none" height="' + String(parseFloat(e.height) - 20) + '" width="0"></canvas>', t += "</div>", this.innerHTML = t;
                    var l = new Array,
                        a = new Array;
                    l[0] = new Array, a[0] = new Array;
                    new Array;
                    var n = String(e.dataLabel).split(","),
                        o = String(e.data2Label).split(",");
                    if ("bar" == e.chartType) {
                        for (var s = 1, h = 0; h <= n.length + 1; h++) n[h] != O.dat && (l[s] = new Array, s++);
                        if (o[0] != O.dat)
                            for (s = 0, h = 0; h <= o.length; h++) a[s] = new Array, s++
                    }
                    var u = new Array,
                        g = new Array,
                        f = new Array,
                        m = (new Array, "");
                    i = O.parse(i);
                    for (h = 0; h < i.length; h++) {
                        if (u[h] = i[h][0], e.showDay == O.tue) {
                            var y = String(i[h][0]).split("-"),
                                b = "20" + y.slice(0, 1),
                                v = y.slice(1, 2),
                                x = y.slice(2, 3),
                                A = new Date(b + "/" + v + "/" + x);
                            if (0 == A.getDay()) m = "日";
                            if (1 == A.getDay()) m = "月";
                            if (2 == A.getDay()) m = "火";
                            if (3 == A.getDay()) m = "水";
                            if (4 == A.getDay()) m = "木";
                            if (5 == A.getDay()) m = "金";
                            if (6 == A.getDay()) m = "土";
                            u[h] = i[h].x + " (" + m + ")"
                        }
                        if ("bar" == e.chartType) {
                            var w = 0,
                                S = [];
                            S[0] = 0;
                            var k = 0;
                            for (s = 1; s <= n.length; s++) try {
                                n[s] != O.dat && (l[k].push(i[h][s]), 1 == c ? w += parseFloat(i[h][s]) : (S[s] = 0, parseFloat(i[h][s]) > 0 && i[h][s] != O.udf && (S[s] = parseFloat(i[h][s]))), k++)
                            } catch (t) {}
                            if (l[k].push(w), g[h] = 1 == c ? w : maxArray(S), o[0] != O.dat) {
                                var C = 0,
                                    I = [];
                                I[0] = 0;
                                var E = 0;
                                for (s = 0; s < o.length; s++)
                                    if (i[h][o[s]] != O.udf && null != i[h][o[s]]) try {
                                        a[E].push(i[h][o[s]]), 1 == c ? C += parseFloat(i[h][o[s]]) : (C[s] = 0, parseFloat(i[h][o[s]]) > 0 && (I[s] = parseFloat(i[h][o[s]]))), E++
                                    } catch (t) {}
                                    f[h] = 1 == c ? C : maxArray(I)
                            }
                            w
                        } else l[0].push(i[h][1]), g[h] = i[h][1], i[h][1]
                    }
                    var B = new Array,
                        T = (s = 0, !1);
                    if ("bar" == e.chartType) {
                        if (o[0] != O.dat)
                            for (h = 0; h < o.length; h++) B[s] = {
                                type: "line",
                                label: o[h],
                                radius: e.pointRadius[h],
                                backgroundColor: e.pointColorIndex[h],
                                pointStyle: e.pointStyle[h],
                                borderDash: [e.pointBorderDash[h]],
                                borderColor: e.pointBorderColorIndex[h],
                                borderWidth: e.pointBorderWidth[h],
                                yAxisID: "y-axis-2",
                                fill: !1,
                                data: a[h]
                            }, T = !0, s++;
                        for (h = 0; h < n.length; h++) n[h] != O.dat && (B[s] = {
                            type: "bar",
                            label: n[h],
                            backgroundColor: e.colorIndex[h],
                            borderColor: "#444",
                            borderWidth: 1,
                            data: l[h]
                        }, s++);
                        B[s] = {
                            type: "line",
                            label: "",
                            borderColor: "#fff",
                            backgroundColor: "transparent",
                            borderWidth: 0,
                            borderColor: "transparent",
                            fill: !1,
                            data: l[k]
                        }
                    }
                    if (e.legendDisplay == O.tue) {
                        var _ = "bottom";
                        null != e.legendPosition && (_ = e.legendPosition);
                        var F = {
                            position: _,
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
                        var M = [{
                                type: "linear",
                                position: "left",
                                id: "y-axis-1",
                                stacked: c,
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
                                    min: -maxArray(f)
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
                                    var t = this.chart.ctx,
                                        l = this.scales["y-axis-1"].width - 10,
                                        a = this.scales["y-axis-1"].height + this.scales["y-axis-1"].top + 10,
                                        n = document.getElementById("yAxis_" + d).getContext("2d");
                                    n.canvas.width = l, n.drawImage(this.chart.canvas, 0, 0, l, a, 0, 0, l, a), t.font = Chart.helpers.fontString(e.dataFontSize, "normal", "Arial"), t.textAlign = "center", t.textBaseline = "bottom";
                                    var o = 0;
                                    this.data.datasets.forEach(function(e) {
                                        for (var l = 0; l < e.data.length; l++) {
                                            var a = e._meta[Object.keys(e._meta)[0]].data[l]._model,
                                                n = e._meta[Object.keys(e._meta)[0]].data[l]._yScale.maxHeight;
                                            t.fillStyle = "#444";
                                            var r = a.y - 5;
                                            (n - a.y) / n >= .93 && (r = a.y + 14), "bar" == e.type && o != s && (r += 20), i.length < 31 && t.fillText(pims().Comma(parseFloat(e.data[l])), a.x, r)
                                        }
                                        o++
                                    })
                                }
                            }
                    } else M = [], L = {
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
                    var R = {
                            hover: {
                                animationDuration: 1,
                                onHover: function(t, i) {
                                    var l = this.getElementAtEvent(t);
                                    if (l.length) {
                                        t.target.style.cursor = "pointer";
                                        try {
                                            var a = l[0]._chart.data,
                                                n = l[0]._datasetIndex,
                                                o = a.datasets[n].label,
                                                s = a.datasets[n].data[l[0]._index];
                                            t = i[0];
                                            var d = this.data.labels[t._index];
                                            e.hover(r, o, s, d)
                                        } catch (t) {
                                            e.hover(r, "-")
                                        }
                                    } else t.target.style.cursor = "default", e.hover(r, "-")
                                }
                            },
                            onClick: function(t, i) {
                                var l = this.getElementAtEvent(t);
                                if (l.length) try {
                                    var a = l[0]._chart.data,
                                        n = l[0]._datasetIndex,
                                        o = a.datasets[n].label,
                                        s = a.datasets[n].data[l[0]._index];
                                    t = i[0];
                                    var d = this.data.labels[t._index];
                                    e.click(r, o, s, d)
                                } catch (t) {
                                    e.click(r, "-")
                                } else e.click(r, "-")
                            },
                            title: {
                                display: e.display,
                                text: e.title,
                                fontSize: e.titleFontSize
                            },
                            legend: F,
                            scales: {
                                xAxes: [{
                                    stacked: c,
                                    ticks: {
                                        autoSkip: !1,
                                        fontSize: e.xAxesFontSize,
                                        maxRotation: e.xLabelAngle,
                                        minRotation: e.xLabelAngle
                                    }
                                }],
                                yAxes: M
                            },
                            tooltips: {
                                enabled: p
                            },
                            responsive: !0,
                            maintainAspectRatio: !1,
                            animation: L
                        },
                        H = (t = "<canvas id='canvas-" + d + "' style='background:" + e.background + "'></canvas>", document.getElementById("div_chart_" + d));
                    H.innerHTML = "", $("#div_" + d).show().css({
                        width: e.width,
                        height: e.height,
                        border: e.border
                    });
                    var N = "100%";
                    i.length > 50 && (N = "130%"), i.length > 100 && (N = "150%"), i.length > 150 && (N = "180%"), i.length > 200 && (N = "250%"), i.length > 250 && (N = "300%"), i.length > 300 && (N = "350%"), i.length > 350 && (N = "400%"), i.length > 400 && (N = "500%"), $("#div_chart_" + d).html(t).css({
                        width: N
                    });
                    var K = document.getElementById("canvas-" + d);
                    try {
                        var Q = e.name;
                        null == Q && (Q = "");
                        var z = document.createElement("span");
                        z.innerText = Q, z.style.fontSize = e.nameFontSize, H.appendChild(z), $("#div_" + d + " span").css({
                            position: "absolute",
                            left: e.width / 6 + "px",
                            top: 2 * -e.fontSize + "px",
                            fontSize: e.nameFontSize + "px",
                            textShadow: "-1px -1px 1px #fff, 1px 1px 1px grey"
                        })
                    } catch (t) {}
                    if ("bar" == e.chartType) new Chart(K, {
                        type: e.chartType,
                        options: R,
                        data: {
                            labels: u,
                            datasets: B
                        }
                    });
                    else new Chart(K, {
                        type: "horizontalBar",
                        options: R,
                        data: {
                            labels: u,
                            datasets: [{
                                label: n[0],
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
                }, this._p_e(r, o)
            },
            _bt_: function(t) {
                var e = this,
                    i = O.is(this),
                    l = this.x,
                    a = this._p_(t),
                    n = (l.split("-"), attr[O.id]),
                    o = param[O.tgg];
                e.toggle[n] = "off";
                var r = [];
                if (String(a.field).split("@").slice(1, 2) == l) var s = String(a.field).split("@").slice(0, 1);
                if (String(a.fieldOther).split("@").slice(1, 2) == l) var d = String(a.fieldOther).split("@").slice(0, 1);
                if (String(a.params).split("@").slice(1, 2) == l) var c = String(a.params).split("@").slice(0, 1);
                if (String(a.where).split("@").slice(1, 2) == l) var p = String(a.where).split("@").slice(0, 1);
                i.createdCallback = function() {
                    if (this.id = n + "_", this.pims = l, a.disabled == O.tue) var t = '<button disabled id="' + n + '" class="pimsButton"><table><tr>';
                    if (a.disabled == O.fls) t = '<button id="' + n + '" class="pimsButton"><table><tr>';
                    "nil 0 0" != a.image ? (t += '<td><img id="img_' + n + '" src="' + String(a.image).split(" ").slice(0, 1) + '" style="width:' + String(a.image).split(" ").slice(1, 2) + "px;height:" + String(a.image).split(" ").slice(2, 3) + 'px"/></td>', t += '<td style="vertical-align:middle;text-align:center">' + a.value + "</td>") : t += '<td style="vertical-align:middle;text-align:center">' + a.value + "</td>", t += "</tr></table></button>", this.innerHTML = "<br>" + t, document.onmousedown = $O$X.prototype.doDown, document.onmouseup = $O$X.prototype.doUp, e._css_id(a, n), $("#" + n).css({
                        borderLeft: "1px solid buttonshadow",
                        borderRight: "2px solid black",
                        borderTop: "1px solid buttonshadow",
                        borderBottom: "2px solid black"
                    }).mousemove(function() {
                        "null" != a.hoverBgColor && $(this).css(O.bkg, a.hoverBgColor), $(this).css(O.co, a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
                            fontSize: "15px",
                            fontFamily: "Arial",
                            padding: "3px 3px 3px 3px",
                            height: a.hoverHeight + "px",
                            width: a.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            borderRadius: "3px"
                        })
                    }).mouseout(function() {
                        "null" != a.hoverBgColor && $(this).css(O.bkg, a.background), $(this).css(O.co, a.color), $("#" + a.hoverId).hide().html("")
                    }).mousedown(function() {
                        var t = document;
                        null != o || o == O.tue ? "off" == e.toggle[n] ? (t.onmousedown = $O$X.prototype.doDown, t.onmouseup = $O$X.prototype.doDown, e.toggle[n] = "on") : (t.onmousedown = $O$X.prototype.doUp, t.onmouseup = $O$X.prototype.doUp, e.toggle[n] = "off") : (t.onmousedown = $O$X.prototype.doDown, t.onmouseup = $O$X.prototype.doUp, e.toggle[n] = "off")
                    }).click(function() {
                        e.Query = 100, e.Submit = 100;
                        for (var t = 0; t < $O$Id.length; t++)
                            if (n == String($O$Id[t])) {
                                var i = String($O$BindId[t]);
                                document.getElementById(i).innerText = a.value
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
                            a.click()
                        } catch (t) {}
                        try {
                            o()
                        } catch (t) {}
                        if (null == s || "null" == s || 1 != e.Query && 1 != e.Submit) {
                            if ("null" == s && (1 == e.Query || 1 == e.Submit)) {
                                h = l + O.php, u = [];
                                if (null != r && "null" != c)
                                    for (v = (String(c).match(/AND/g) || []).length, x = String(c).split("AND"), A = 0; A <= v; A++) {
                                        w = String(x.slice(A, A + 1)).split(":"), S = new Function(w.slice(1, 2));
                                        "null" != String(w.slice(0, 1)).replace(/\s+/g, "") && (u[String(w.slice(0, 1)).replace(/\s+/g, "")] = S())
                                    }
                                pimsData = [], $O$P.prototype._rp_(h, u, function(t) {
                                    e.data = O.parse(t), a.callback()
                                })
                            }
                        } else {
                            e.Query = 0, e.Submit = 0;
                            var h = n + O.php,
                                u = [];
                            if (null != p && "null" != p) {
                                var g = $O$X.prototype.getIdClass(String(p));
                                try {
                                    this.index = g.getAttribute("index"), null == this.index && (this.index = 9999999)
                                } catch (t) {
                                    this.index = 9999999
                                }
                                try {
                                    this.field = g.getAttribute("field"), null == this.field && (this.field = 9999999)
                                } catch (t) {
                                    this.field = 9999999
                                }
                                for (var f = 0; f < g.length; f++) {
                                    var m = String(g[f].id).split("-").slice(2, 3);
                                    u[g[f].field] = pims(m).value()
                                }
                            }
                            var y = "",
                                b = "";
                            if (null != s && "null" != s) {
                                g = $O$X.prototype.getIdClass(String(s));
                                try {
                                    this.index = g.getAttribute("index"), null == this.index && (this.index = 9999999)
                                } catch (t) {
                                    this.index = 9999999
                                }
                                try {
                                    this.field = g.getAttribute("field"), null == this.field && (this.field = 9999999)
                                } catch (t) {
                                    this.field = 9999999
                                }
                                for (f = 0; f < g.length; f++) {
                                    m = String(g[f].id).split("-").slice(2, 3);
                                    f + 1 < g.length ? (y += String(g[f].field).replace(/\s+/g, "") + ",", b += "'" + pims(m).value() + "',") : (y += String(g[f].field).replace(/\s+/g, ""), b += "'" + pims(m).value() + "'")
                                }
                            }
                            if ("null" != d)
                                for (var v = (String(d).match(/AND/g) || []).length, x = String(d).split("AND"), A = 0; A <= v; A++) {
                                    var w = String(x.slice(A, A + 1)).split(":"),
                                        S = new Function(w.slice(1, 2));
                                    "null" != String(w.slice(0, 1)).replace(/\s+/g, "") && (A < v ? 0 == A ? (y += "," + String(w.slice(0, 1)).replace(/\s+/g, "") + ",", b += ",'" + S() + "',") : (y += String(w.slice(0, 1)).replace(/\s+/g, "") + ",", b += "'" + S() + "',") : 0 == v ? (y += String(w.slice(0, 1)).replace(/\s+/g, "") + ",", b += "'" + S() + "',") : (y += String(w.slice(0, 1)).replace(/\s+/g, ""), b += "'" + S() + "'"))
                                }
                            if (u.fields = y, u.fieldsValue = b, "null" != c && null != r)
                                for (var v = (String(c).match(/AND/g) || []).length, x = String(c).split("AND"), A = 0; A <= v; A++) {
                                    var w = String(x.slice(A, A + 1)).split(":"),
                                        S = new Function(w.slice(1, 2));
                                    "null" != String(w.slice(0, 1)).replace(/\s+/g, "") && (u[String(w.slice(0, 1)).replace(/\s+/g, "")] = S())
                                }
                            e.data = [], $O$P.prototype._rp_(h, u, function(t) {
                                e.data = O.parse(t);
                                try {
                                    a.callback()
                                } catch (t) {}
                            })
                        }
                    }), "null" != a.float && $("#" + n + "_").css("float", a.float)
                }, this._p_e(l, i)
            },
            _ci_: function(t) {
                return $(t).parent().children().index(t)
            },
            _css_: function(t, e, i) {
                var l = this._se_a(e, t, O.bkg, "#ffffff"),
                    a = this._se_a(e, t, O.bdr, O.bdr1),
                    n = this._se_a(e, t, O.bdrr, "5px"),
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
                    b = this._se_a(e, t, "listTop", "0px"),
                    v = this._se_a(e, t, "listWidth", "300px"),
                    x = this._se_a(e, t, "margin", "2px 2px 2px 2px"),
                    A = this._se_a(e, t, "marginBottom", "2px"),
                    w = this._se_a(e, t, "marginLeft", "2px"),
                    S = this._se_a(e, t, "marginRight", "2px"),
                    k = this._se_a(e, t, "marginTop", "-10px"),
                    C = this._se_a(e, t, "padding", "5px 0px 5px 5px"),
                    $ = this._se_a(e, t, "paddingBottom", "1px"),
                    I = this._se_a(e, t, "paddingLeft", "1px"),
                    E = this._se_a(e, t, "paddingRight", "1px"),
                    B = this._se_a(e, t, "paddingTop", "1px"),
                    T = this._se_a(e, t, "textAlign", "center"),
                    _ = this._se_a(e, t, O.wit, "100px"),
                    F = this._se_a(e, t, O.lft, "0px"),
                    D = this._se_a(e, t, O.tp, "0px");
                return {
                    background: l,
                    border: a,
                    borderRadius: n,
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
                    listTop: b + "_" + i,
                    listWidth: v + "_" + i,
                    margin: x,
                    marginBottom: A,
                    marginLeft: w,
                    marginRight: S,
                    marginTop: k,
                    padding: C,
                    paddingBottom: $,
                    paddingLeft: I,
                    paddingRight: E,
                    paddingTop: B,
                    position: this._se_a(e, t, O.pst, "static"),
                    textAlign: T,
                    top: D,
                    width: _
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
                    a = this._p_(t);
                String(a.value).indexOf("GetDate") && (a.value = new Function(a.value)), "potato.today()" == a.value && (a.value = e.today()), "potato.now()" == a.value && (a.value = e.now());
                var n = a.id;
                i.createdCallback = function() {
                    this.id = n + "_", $O$X.prototype.getAttribute(this, l).index, $O$X.prototype.getAttribute(this, l).field, this.pims = l, a.disabled == O.fls && (this.innerHTML = '<br><input type="text" id="' + n + '"> '), a.disabled != O.tue && "" != a.disabled || (this.innerHTML = '<br><input disabled type="text" id="' + n + '"> '), e._css_id(a, n), "null" != a.float && $("#" + n + "_").css("float", a.float), $("#" + n).attr(O.val, a.value).mousemove(function() {
                        "null" != a.hoverBgColor && $(this).css(O.bkg, a.hoverBgColor), $(this).css(O.co, a.hoverColor), "" != a.hoverText && $("#" + a.hoverId).html(a.hoverText).show().css({
                            padding: a.padding,
                            height: a.hoverHeight + "px",
                            width: a.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 20,
                            fontSize: "15px",
                            fontFamily: "Arial"
                        })
                    }).mouseout(function() {
                        "null" != a.hoverBgColor && $(this).css(O.bkg, a.background), $(this).css(O.co, a.i), $("#" + a.hoverId).hide().html("")
                    }).change(function() {
                        for (var t = 0; t < $O$Id.length; t++)
                            if (n == String($O$Id[t])) {
                                var e = String($O$BindId[t]);
                                document.getElementById(e).innerText = document.getElementById(n).value
                            }
                        try {
                            a.change(l)
                        } catch (t) {}
                    }).click(function() {
                        try {
                            potatoListObject.style.display = "none"
                        } catch (t) {}
                        try {
                            a.click()
                        } catch (t) {}
                    }).datepicker({
                        dateFormat: a.format,
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
                    a = e.model,
                    n = this.x,
                    o = l.split("-"),
                    r = o.slice(2, 3);
                o.slice(2, 3);
                if (String(e.params).split("@").slice(1, 2) == l) var s = String(e.params).split("@").slice(0, 1);
                i.createdCallback = function() {
                    this.innerHTML = '<div id="' + n + '"></div> '
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
                this.Post(a, d, function(t) {
                    var i = new Array;
                    i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                    for (var a = 0; a < t.length; a++)
                        for (var o = 0; o < i.length; o++) i[o][a] = t[a][o];
                    var s = document.getElementById(n);
                    s.innerHTML = "", $("#" + n).append('<canvas id="canvas-' + r + '" >読み込み中．．．</canvas>');
                    var d = document.getElementById("canvas-" + r);
                    if ($("#" + n).css({
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
                                        var a = e._meta[Object.keys(e._meta)[0]],
                                            n = a.data[l]._model,
                                            o = a.total,
                                            r = n.innerRadius + (n.outerRadius - n.innerRadius) / 2,
                                            s = n.startAngle,
                                            d = s + (n.endAngle - s) / 2,
                                            c = r * Math.cos(d),
                                            p = r * Math.sin(d);
                                        i.fillStyle = "#000";
                                        var h = String(Math.round(e.data[l] / o * 100)) + "%";
                                        if (l < e.data.length - 1) {
                                            var u = n.x + c + 70;
                                            p > 0 && c < 0 && (u = n.x + c - 50), i.fillText(t[l][0] + ": " + t[l][1] + ", " + h, u, n.y + p + 8)
                                        }
                                    }
                                    h = String(Math.round(e.data[e.data.length - 1] / o * 100)) + "%";
                                    i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + h, n.x + c, n.y + 2 * p)
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
                                            a = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                        else a = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                        document.getElementById("img-doughnut-" + r).src = a, document.getElementById("img-doughnut-" + r).style.display = "block", document.getElementById("img-doughnut-" + r).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                    }
                                } else if ("null" != e.imageDir) {
                                    i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                    if ($("#note-doughnut-" + r).show().html(i).css(O.bdr, "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) l = String(this._data.labels[e.targetIndex]).split("-"), a = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                    else a = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                    document.getElementById("img-doughnut-" + r).src = a, document.getElementById("img-doughnut-" + r).style.display = "block", document.getElementById("img-doughnut-" + r).style.border = "5px solid " + e.targetColor
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
                var a = paramE[O.wit],
                    n = paramE[O.idc],
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
                            f.replaceChild(m, f.firstChild), g = 1, $("#keypadtable").hide(), potato.trigger = 0, $O$P.nodevalue = f.firstChild.nodeValue, null != c && "" != t.rows[potato.clickRow].cells[potato.clickCol].innerText && (t.rows[potato.clickRow].cells[potato.clickCol].innerHTML = "<div class='" + O.dgdp + "-" + h + "'>" + t.rows[potato.clickRow].cells[potato.clickCol].innerText, O._t_d(h), O.dragdropClass = null, O.dragdropId = null), l.callback($O$P.nodevalue, potato.oldValue, t.rows[potato.ri].cells[n].innerText, potato.ci)
                        }
                        if (1 != g && O.ipt != f.firstChild.nodeName && "IMG" != f.firstChild.nodeName) {
                            O.dragdropClass = c, O.dragdropId = h, e = potato.clickRow, i = potato.clickCol, potato.edit = "on";
                            var y = document.createElement("input");
                            if (y.select(), y.value = t.rows[potato.ri].cells[potato.ci].innerText, y.setAttribute(O.atc, "off"), y.style.width = a, y.style.height = "25px", y.style.fontSize = "15px", y.style.fontWeight = "bold", y.style.background = "rgb(255,244,255)", O.udf != f.firstChild.nodeValue && (f.replaceChild(y, f.firstChild), f.firstChild.select(), f.firstChild.focus()), o != O.udf) {
                                var b = document.createElement("div");
                                if (b.innerHTML = '<div id="keypadtable" class="keypad"></div>', document.body.appendChild(b), $(".keypad").hide(), keyID = "keypadtable", -1 != String(o).indexOf(".htm")) $("#keypadtable").load(o);
                                else if (o == O.dft) {
                                    var v = "height:60px;width:80px;font-size:27px;background:#CED8F6;cursor: pointer;";
                                    v += "border-radius:10px;border:1px solid black;", css_c = "width:170px;";
                                    var x = "<table>";
                                    x += "<tr>", x += "<td><input type='button' style='" + v + "' value='7' onclick='potato.getKey(\"7\")'></td>", x += "<td><input type='button' style='" + v + "' value='8' onclick='potato.getKey(\"8\")'></td>", x += "<td><input type='button' style='" + v + "' value='9' onclick='potato.getKey(\"9\")'></td>", x += "</tr>", x += "<tr>", x += "<td><input type='button' style='" + v + "' value='4' onclick='potato.getKey(\"4\")'></td>", x += "<td><input type='button' style='" + v + "' value='5' onclick='potato.getKey(\"5\")'></td>", x += "<td><input type='button' style='" + v + "' value='6' onclick='potato.getKey(\"6\")'></td>", x += "</tr>", x += "<tr>", x += "<td><input type='button' style='" + v + "' value='1' onclick='potato.getKey(\"1\")'></td>", x += "<td><input type='button' style='" + v + "' value='2' onclick='potato.getKey(\"2\")'></td>", x += "<td><input type='button' style='" + v + "' value='3' onclick='potato.getKey(\"3\")'></td>", x += "</tr>", x += "<tr>", x += "<td><input type='button' style='" + v + "background:#F6CECE;' value='CE' onclick='potato.getKey(\"CE\")'></td>", x += "<td><input type='button' style='" + v + "' value='0' onclick='potato.getKey(\"0\")'></td>", x += "<td><input type='button' style='" + v + "' value='.' onclick='potato.getKey(\".\")'></td>", x += "</tr>", x += "<tr>", x += "<td colspan=2><input type='button' style='" + v + css_c + "background:#D8D8D8;' value='CLOSE' onclick='potato.closeEditCell()'/></td>", x += "<td><input type='button' style='" + v + "background:#CEF6CE;' value='⇦' onclick='potato.getKey(\"<-\")'></td>", x += "</tr>", x += "</table>", $("#keypadtable").html(x)
                                } else $("#keypadtable").html(o);
                                var A = document.documentElement,
                                    w = (window.pageXOffset || A.scrollLeft) - (A.clientLeft || 0),
                                    S = (window.pageYOffset || A.scrollTop) - (A.clientTop || 0),
                                    k = parseFloat(event.clientY) + 20 + parseFloat(S),
                                    C = parseFloat(event.clientX) - parseFloat(w);
                                null != s && (k = parseFloat(event.clientY) + 20 + parseFloat(s) + parseFloat(S)) > 300 && (k = event.clientY - 220), null != d && (C = parseFloat(event.clientX) + parseFloat(d) - parseFloat(w)) > 900 && (C = event.clientX - 100), $("#keypadtable").css({
                                    width: "200px",
                                    height: "150px",
                                    margin: l.marginKey,
                                    display: "block",
                                    position: "absolute",
                                    top: k + "px",
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
                    a = new Array;

                function n() {
                    var t = "-";
                    try {
                        t = l.rows[$O$P.rowId].cells[e.matchCol].innerText
                    } catch (t) {}
                    try {
                        if (!("-" != e.matchCol && t != e.matchValue || O._ci_(this) != a && -1 == a.indexOf(O._ci_(this)) && "any" != a)) {
                            var i = 0,
                                n = this;
                            try {
                                n.firstChild.value
                            } catch (t) {
                                n.innerText = " "
                            }
                            if ($O$T = this, O.ipt == n.firstChild.nodeName) {
                                n = this;
                                o = document.createTextNode(n.firstChild.value), n.replaceChild(o, n.firstChild), i = 1, $("#keypadtable").hide()
                            }
                            if (1 != i && O.ipt != n.firstChild.nodeName && "IMG" != n.firstChild.nodeName) {
                                var r = document.createElement("input");
                                r.select();
                                var s = n.firstChild.nodeValue;
                                "null" != s && s != O.udf && null != s && null != s || (s = n.firstChild.innerText), r.value = s, r.setAttribute(O.atc, "off"), r.style.width = e.editWidth + "px", r.style.height = "25px", r.style.fontSize = "15px", r.style.fontWeight = "bold", r.style.background = "rgb(255,244,255)", O.udf != n.firstChild.nodeValue && (n.replaceChild(r, n.firstChild), n.firstChild.select(), n.firstChild.focus());
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
                a = e.targetCol;
                for (var o = document.getElementById(i), r = o.getElementsByTagName("td"), s = 0; s < r.length; s++) r[s].onkeyup = function(t) {}, "dblclick" == e.trigger ? r[s].ondblclick = n : e.trigger == O.clk ? r[s].onclick = n : r[s].ondblclick = n, r[s].onmousemove = function() {}
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
                    a = l.id;
                e.createdCallback = function() {
                    this.id = a + "_", $O$X.prototype.getAttribute(this, a).index, $O$X.prototype.getAttribute(this, a).field, this.pims = a;
                    var t = '<div id="div-' + a + '"> ';
                    t += '<input type="text" id="' + a + '"> ', t += '<div class="keypad" id="keypad-' + a + '"></div> ', t += "</div> ", this.innerHTML = t, $O$U = document.getElementById(a), pims("#div-" + a).style.display = l.display, pims("#div-" + a).style.position = l.position, pims("#div-" + a).style.left = l.left + "px", pims("#div-" + a).style.top = l.top + "px", POTATO("#" + a).style.top = l.top + "px", $("#div-" + a).css({
                        display: l.display,
                        position: l.position,
                        left: l.left + "px",
                        top: l.top + "px"
                    }), $("#" + a).css({
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
                        keyID = "keypad-" + a, $(".keypad").hide(), $(O.kp + a).show(), $("#KeyBoard").show();
                        var i = document.documentElement,
                            n = (window.pageXOffset || i.scrollLeft) - (i.clientLeft || 0),
                            o = (window.pageYOffset || i.scrollTop) - (i.clientTop || 0);
                        $(O.kp + a).css({
                            position: "absolute",
                            top: parseFloat(event.clientY) + 20 + parseFloat(l.topKey) + parseFloat(o) + "px",
                            left: parseFloat(event.clientX) + parseFloat(l.leftKey) - parseFloat(n) + "px"
                        }), $O$B = document.getElementById(a);
                        try {
                            l.click()
                        } catch (t) {}
                    }), $(O.kp + a).load(l.htm).click(function() {
                        try {
                            l.change(a)
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
                    a = l.id,
                    n = this.x,
                    o = param.ngmodel,
                    r = param[O.tl];
                i.createdCallback = function() {
                    if (this.id = l.id + "_", $O$X.prototype.getAttribute(this, a).index, $O$X.prototype.getAttribute(this, a).field, this.pims = a, l.disabled == O.tue || "" == l.disabled) {
                        var t = '<div disabled id="div-' + a + '"> ';
                        "none" == l.display ? t += null == o ? '<input disabled type="text" id="' + a + '" class="' + l.className + '"> ' : '<input disabled ng-model="' + o + '" type="text" id="' + a + '" class="' + l.className + '"> ' : t += null == o ? '<br><input disabled type="text" id="' + a + '"  class="' + l.className + '" > ' : '<br><input disabled ng-model="' + o + '" type="text" id="' + a + '"  class="' + l.className + '" > '
                    }
                    if (l.disabled == O.fls) {
                        t = '<div id="div-' + a + '"> ';
                        "none" == l.display ? t += null == o ? '<input type="text" id="' + a + '" class="' + l.className + '"> ' : '<input ng-model="' + o + '" type="text" id="' + a + '" class="' + l.className + '"> ' : t += null == o ? '<br><input type="text" id="' + a + '"  class="' + l.className + '" > ' : '<br><input ng-model="' + o + '" type="text" id="' + a + '"  class="' + l.className + '" > '
                    }
                    t += '<div class="keypad" id="keypad-' + a + '" class="keypad"></div> ', t += "</div> ", this.innerHTML = "<br>" + t, $O$U = document.getElementById(a), "potato.now" == l.value && (l.value = e.now), "potato.today()" == l.value && (l.value = e.today()), "potato.now()" == l.value && (l.value = e.now()), "null" != l.float && $("#" + a + "_").css("float", l.float), $("#div-" + a).css({
                        display: l.display,
                        position: l.position,
                        left: l.left,
                        top: l.top,
                        marginTop: l.marginTop
                    }), e._css_id(l, a), $("#" + a).attr(O.val, l.value).mousemove(function() {
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
                        if ($(".keypad").hide(), null != r) - 1 != r.indexOf("htm") || -1 != r.indexOf("html") ? $(O.kp + a).load(r) : $(O.kp + a).html(r);
                        else {
                            var t = "height:60px;width:80px;font-size:27px;background:#CED8F6;cursor: pointer;";
                            t += "border-radius:10px;border:1px solid black;", css_c = "width:170px;", r = "<table>", r += "<tr>", r += "<td><input type='button' style='" + t + "' value='7' onclick='potato.getKey(\"7\")'></td>", r += "<td><input type='button' style='" + t + "' value='8' onclick='potato.getKey(\"8\")'></td>", r += "<td><input type='button' style='" + t + "' value='9' onclick='potato.getKey(\"9\")'></td>", r += "</tr>", r += "<tr>", r += "<td><input type='button' style='" + t + "' value='4' onclick='potato.getKey(\"4\")'></td>", r += "<td><input type='button' style='" + t + "' value='5' onclick='potato.getKey(\"5\")'></td>", r += "<td><input type='button' style='" + t + "' value='6' onclick='potato.getKey(\"6\")'></td>", r += "</tr>", r += "<tr>", r += "<td><input type='button' style='" + t + "' value='1' onclick='potato.getKey(\"1\")'></td>", r += "<td><input type='button' style='" + t + "' value='2' onclick='potato.getKey(\"2\")'></td>", r += "<td><input type='button' style='" + t + "' value='3' onclick='potato.getKey(\"3\")'></td>", r += "</tr>", r += "<tr>", r += "<td><input type='button' style='" + t + "background:#F6CECE;' value='CE' onclick='potato.getKey(\"CE\")'></td>", r += "<td><input type='button' style='" + t + "' value='0' onclick='potato.getKey(\"0\")'></td>", r += "<td><input type='button' style='" + t + "' value='.' onclick='potato.getKey(\".\")'></td>", r += "</tr>", r += "<tr>", r += "<td colspan=2><input type='button' style='" + t + css_c + "background:#D8D8D8;' value='CLOSE' onclick='potato.closePad()'/></td>", r += "<td><input type='button' style='" + t + "background:#CEF6CE;' value='⇦' onclick='potato.getKey(\"<-\")'></td>", r += "</tr>", r += "</table>", $(O.kp + a).html(r)
                        }
                        try {
                            for (var e = document.getElementsByClassName("pims-list"), i = 0; i < e.length; i++) e[i].style.display = "none"
                        } catch (t) {}
                        keyID = "keypad-" + a, $(".keypad").hide(), $(O.kp + a).show(), $("#KeyPad").show();
                        var n = document.documentElement,
                            o = (window.pageXOffset || n.scrollLeft) - (n.clientLeft || 0),
                            s = (window.pageYOffset || n.scrollTop) - (n.clientTop || 0),
                            d = parseFloat(event.clientY) + 20 + parseFloat(l.top) + parseFloat(s),
                            c = parseFloat(event.clientX) + parseFloat(l.left) - parseFloat(o);
                        $(O.kp + a).css({
                            zIndex: "2000",
                            position: "absolute",
                            top: d + "px",
                            left: c + "px"
                        }), $O$U = document.getElementById(a);
                        try {
                            l.click()
                        } catch (t) {}
                    }).keyup(function(t) {
                        for (var e = 0; e < $O$Id.length; e++)
                            if (a == String($O$Id[e])) {
                                var i = String($O$BindId[e]);
                                document.getElementById(i).innerText = document.getElementById(a).value
                            }
                    }), $(O.kp + a).click(function() {
                        for (var t = 0; t < $O$Id.length; t++)
                            if (a == String($O$Id[t])) {
                                var e = String($O$BindId[t]);
                                document.getElementById(e).innerText = document.getElementById(a).value
                            }
                        try {
                            l.change(a)
                        } catch (t) {}
                        try {
                            l.click(a)
                        } catch (t) {}
                    }).css({
                        width: "200px",
                        height: "150px",
                        display: l.displayKey
                    })
                }, this._p_e(n, i)
            },
            _lt_: function(t) {
                var i = this,
                    l = O.is(this),
                    a = this.x,
                    o = this._p_(t),
                    r = o.id,
                    s = param.ngmodel;
                "potato.today()" == o.value && (o.value = i.today()), "potato.now()" == o.value && (o.value = i.now()), l.createdCallback = function() {
                    this.id = r + "_", $O$X.prototype.getAttribute(this, r).index, $O$X.prototype.getAttribute(this, r).field, this.pims = r;
                    var l = css.position;
                    null == l && (l = "absolute");
                    var d = '<br><div id="potato-' + r + '" >';
                    if (d += null == s ? '<input type="text" id="' + r + '"  class="' + o.className + '" > ' : '<input ng-model="' + s + '" type="text" id="' + r + '"  class="' + o.className + '" > ', d += '<div id="div-' + r + '" onscroll="pims(\'div-' + r + "').scrolly('locked_top',0,0)\" class=\"pims-list\"> ", d += "</div></div>", this.innerHTML = d, i._css_id(o, r), $("#" + r).attr({
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
                        }), String(o.listWidth).split("_").slice(1, 2) == a) var c = String(o.listWidth).split("_").slice(0, 1);
                    if (String(o.listHeight).split("_").slice(1, 2) == a) var p = String(o.listHeight).split("_").slice(0, 1);
                    if (String(o.listTop).split("_").slice(1, 2) == a) var h = String(o.listTop).split("_").slice(0, 1);
                    if (String(o.listLeft).split("_").slice(1, 2) == a) var u = String(o.listLeft).split("_").slice(0, 1);
                    if (String(o.params).split("@").slice(1, 2) == a) var g = String(o.params).split("@").slice(0, 1);
                    if (String(o.where).split("@").slice(1, 2) == a) var f = String(o.where).split("@").slice(0, 1);
                    document.getElementById(r).onclick = function(l) {
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
                        var o = $O$P.prototype._p_(t),
                            s = g;
                        if ("block" != document.getElementById("div-" + r).style.display && $(".pims-list").css({
                                display: "none",
                                height: "0px"
                            }), document.getElementById("div-" + r).style.height == o.listHeight) document.getElementById("div-" + r).style.height = "0px";
                        else {
                            try {
                                potatoListObject.style.display = "none"
                            } catch (t) {}
                            $("#div-" + r).css(O.dpy, "block");
                            var d = param.model;
                            null == d && -1 != String(param.data).indexOf(".php") && (d = param.data);
                            var m = [];
                            if (null != f) {
                                var y = $O$X.prototype.getIdClass(String(f));
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
                                    m[y[b].field] = pims(v).value()
                                }
                            }
                            if (null != s && "null" != g)
                                for (var x = (String(g).match(/AND/g) || []).length, A = String(g).split("AND"), w = 0; w <= x; w++) {
                                    var S = String(A.slice(w, w + 1)).split(":"),
                                        k = new Function(S.slice(1, 2));
                                    "null" != String(S.slice(0, 1)).replace(/\s+/g, "") && (m[String(S.slice(0, 1)).replace(/\s+/g, "")] = k())
                                }
                            var C = i.getAttr(a, O.hdr),
                                I = i.getAttr(a, "listTextAlign");
                            null == I && (I = "center");
                            var E = i.getAttr(a, "listFontSizeTH");
                            null == E && (E = "18px");
                            var B = i.getAttr(a, "listFontSizeTD");
                            null == B && (B = "18px");
                            var T = i.getAttr(a, "listFontFamilyTD");
                            null == T && (T = "Tempus Sans ITC");
                            var _ = i.getAttr(a, "listFontFamilyTH");
                            null == _ && (_ = "Tempus Sans ITC");
                            var F = i.getAttr(a, "listFontColorTH");
                            null == F && (F = "Black");
                            var D = i.getAttr(a, "listFontColorTD");
                            null == D && (D = "Black");
                            var M = i.getAttr(a, "listFontWeightTD");
                            null == M && (M = "normal");
                            var L = i.getAttr(a, "listFontWeightTH");
                            null == L && (L = "normal");
                            var R = "<table class='potato-list-table' id='list-" + r + "' >";
                            if (null != d) $O$P.prototype._rp_(d, m, function(t) {
                                var l = i.getAttr(a, O.hdr),
                                    s = O.parse(t);
                                if (null == l) {
                                    var d = 0;
                                    for (e in R += "<tr>", s[0]) "-" != s[0][e] && "" != s[0][e] ? R += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + s[0][e] + "</th>" : R += "<th style='display:none'>" + s[0][e] + "</th>", d++;
                                    for (n in R += "</tr>", s)
                                        if (O.udf != s[n][0] && null != s[n][0] && n > 0) {
                                            R += "<tr>";
                                            for (var g = 0; g < d; g++) "-" != s[0][g] ? R += "<td>" + s[n][g] + "</td>" : R += "<td style='display:none'>" + s[n][g] + "</td>";
                                            R += "</tr>"
                                        }
                                } else {
                                    l = String(l).split(",");
                                    for (e in R += "<tr>", l) "-" != l[e] ? R += "<th style='border:1px solid black;font-size:" + E + ";color:" + F + ";text-align:" + I + ";font-weight:" + L + ";font-family:" + _ + "'>" + l[e] + "</th>" : R += "<th style='display:none'>" + l[e] + "</th>";
                                    for (n in R += "</tr>", s) {
                                        for (e in R += "<tr>", l) "-" != l[e] ? R += "<td>" + s[n][e] + "</td>" : R += "<td style='display:none'>" + s[n][e] + "</td>";
                                        R += "</tr>"
                                    }
                                }
                                R += "</table>", document.getElementById("div-" + r).style.height = "0px";
                                var f = String(h).split("px"),
                                    m = String(u).split("px");
                                potatoListObject = document.getElementById("div-" + r);
                                var y = document.getElementById(r).getBoundingClientRect(),
                                    b = String(document.getElementById(r).style.height).split("px"),
                                    v = parseFloat(b.slice(0, 1));
                                $("#div-" + r).html(R).css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: y.left + parseFloat(m.slice(0, 1)) + "px",
                                    top: y.bottom + v + parseFloat(f.slice(0, 1)) + "px",
                                    height: p,
                                    width: c,
                                    overflow: "auto",
                                    border: O.bdr0,
                                    borderRadius: 0,
                                    background: "transparent",
                                    zIndex: 1e4
                                }), $("#list-" + r + " td").css({
                                    fontFamily: o.fontFamily,
                                    fontWeight: o.fontWeight,
                                    fontSize: o.fontSize + "px"
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
                                        o.click(t.rows[e], a, i), $("#div-" + r).html("")
                                    } catch (t) {}
                                    document.getElementById("div-" + r).style.height = "0px"
                                }), $("#list-" + r + " th").css(O.csr, "pointer").click(function() {
                                    var t = document.getElementById("list-" + r),
                                        e = O._ri_(this);
                                    ci = O._ci_(this), $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), $("#div-" + r).hide().html(""), document.getElementById(r).style.background = o.background;
                                    try {
                                        o.click(t.rows[e], a, ci)
                                    } catch (t) {}
                                    document.getElementById("div-" + r).style.height = "0px"
                                });
                                try {
                                    o.callback(a)
                                } catch (t) {}
                            });
                            else {
                                var H = i.getAttr(a, O.dat),
                                    N = (b = O.parse(H), 0);
                                if (null == C) {
                                    for (e in R += "<tr>", b[0]) "" != b[0][e] ? R += "<th class='locked_top' style='border:1px solid black;top:0px;position:relative'>" + b[0][e] + "</th>" : R += "<th style='display:none'>" + b[0][e] + "</th>", N++;
                                    for (n in R += "</tr>", b)
                                        if (O.udf != b[n][0] && null != b[n][0] && n > 0) {
                                            R += "<tr>";
                                            for (var K = 0; K < N; K++) "" != b[0][K] ? R += "<td style='text-align:" + I + "'>" + b[n][K] + "</td>" : R += "<td style='display:none'>" + b[n][K] + "</td>";
                                            R += "</tr>"
                                        }
                                } else {
                                    C = String(C).split(",");
                                    for (e in R += "<tr>", C) "-" != C[e] ? R += "<th style='border:1px solid black;font-size:" + E + ";color:" + F + ";text-align:" + I + ";font-weight:" + L + ";font-family:" + _ + "'>" + C[e] + "</th>" : R += "<th style='display:none'>" + C[e] + "</th>", N++;
                                    for (n in R += "</tr>", b)
                                        if (O.udf != b[n][0] && null != b[n][0] && n >= 0) {
                                            R += "<tr>";
                                            for (K = 0; K < N; K++) "-" != C[K] ? R += "<td style='font-size:" + B + ";color:" + D + ";text-align:" + I + ";font-weight:" + M + ";font-family:" + T + "'>" + b[n][K] + "</td>" : R += "<td style='display:none'>" + b[n][K] + "</td>";
                                            R += "</tr>"
                                        }
                                }
                                R += "</table>", document.getElementById("div-" + r).style.height = "0px";
                                var Q = String(h).split("px"),
                                    z = String(u).split("px");
                                potatoListObject = document.getElementById("div-" + r), $("#div-" + r).html(R).css({
                                    transition: "height 0.1s linear",
                                    position: "absolute",
                                    left: events.clientLeft + parseFloat(z.slice(0, 1)) + "px",
                                    top: events.clientTop + parseFloat(Q.slice(0, 1)) + "px",
                                    height: p,
                                    width: c,
                                    overflow: "auto",
                                    border: O.bdr0,
                                    borderRadius: 0,
                                    background: "transparent",
                                    zIndex: 1e4
                                }), $("#list-" + r + " td").css({
                                    fontFamily: o.fontFamily,
                                    fontWeight: o.fontWeight,
                                    fontSize: o.fontSize + "px"
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
                                        o.click(t.rows[e], a, i), $("#div-" + r).html("")
                                    } catch (t) {}
                                    document.getElementById("div-" + r).style.height = "0px"
                                }), $("#list-" + r + " th").css(O.csr, "pointer").click(function() {
                                    var t = document.getElementById("list-" + r),
                                        e = O._ri_(this);
                                    ci = O._ci_(this), $(".pims-list").css({
                                        display: "none",
                                        height: "0px"
                                    }), $("#div-" + r).hide().html(""), document.getElementById(r).style.background = o.background;
                                    try {
                                        o.click(t.rows[e], a, ci)
                                    } catch (t) {}
                                    document.getElementById("div-" + r).style.height = "0px"
                                });
                                try {
                                    o.callback(a)
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
                                    var b = String(m[y].id).split("-").slice(2, 3);
                                    f[m[y].field] = pims(b).value()
                                }
                            }
                            if (null != r && "null" != u)
                                for (var v = (String(u).match(/AND/g) || []).length, x = String(u).split("AND"), A = 0; A <= v; A++) {
                                    var w = String(x.slice(A, A + 1)).split(":"),
                                        S = new Function(w.slice(1, 2));
                                    "null" != String(w.slice(0, 1)).replace(/\s+/g, "") && (f[String(w.slice(0, 1)).replace(/\s+/g, "")] = S())
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
                var e, i, l, a, n, o, r, s, d, c, p, h, u, g, f, m, y, b, v, x, A, w, S, k, C, $, I, E, B, T, _, F, D, M, L, R, H, N, K, Q, z, P, G, W, Y, U, V, X, j, J, Z, q, tt, et, it, lt, at, nt, ot, rt, st, dt, ct, pt, ht, ut, gt, ft, mt, yt, bt, vt, Ot, xt, At, wt, St, kt, Ct, $t, It, Et, Bt, Tt, _t, Ft, Dt, Mt, Lt, Rt, Ht, Nt, Kt, Qt, zt, Pt, Gt, Wt, Yt, Ut, Vt, Xt, jt, Jt, Zt, qt, te, ee, ie, le, ae, ne, oe, re, se, de, ce, pe, he, ue, ge, fe = new Array;
                return this.clearArrays(), t(), null == (Jt = css.textTransform) && (Jt = "none"), e = css[O.bkg], i = css[O.bdr], l = css[O.bdrr], a = css[O.bxsd], null == (n = events[O.cbk]) && (n = this.dummy()), null == (o = attr.canvas) && (o = "chart"), null == (r = param.cell) && (r = "0"), null == (d = attr.chartType) && (d = "pie"), null == (c = attr.chartId) && (c = "chart1Id"), null == (g = param.col) && (g = 1e3), null == (m = css.colorIndex) && (m = ["#c5ffb3"]), null == (s = events.change) && (s = this.dummy()), null == (p = attr.className) && (p = "pimsClassName"), null == (h = events[O.clk]) && (h = this.dummy()), null == (u = attr.cls) && (u = ""), null == (y = attr.container) && (y = "container"), f = css[O.co], null == (b = css[O.csr]) && (b = O.dft), null != (v = css.dataFontSize) && -1 != String(v).indexOf("px") && (v = String(v).split("px").slice(0, 1)), null == v && (v = 12), null == (x = attr.dataLabel) && (x = O.dat), null == (A = attr.data2Label) && (A = O.dat), null == (w = attr[O.dsa]) && (w = !1), S = css[O.dpy], null == (k = css.displayKey) && (k = "none"), C = events[O.dgdp], null == ($ = param.editWidth) && ($ = 100), null == (I = param.fieldClass) && (I = 0), H = css.float, E = css.fontColorTD, B = css.fontColorTH, T = css.fontFamily, _ = css.fontFamilyTD, F = css.fontFamilyTH, D = css.fontSize, M = css.fontSizeTD, L = css.fontSizeTH, N = css.fontWeight, null == (R = attr.format) && (R = "yy-mm-dd"), null == (K = param.header) && (K = "0"), Q = css.height, null == (z = css.heightTable) && (z = 450), null == (P = events.hover) && (P = this.dummy()), G = css.hoverColor, null == (W = css.hoverBgColor) && (W = "null"), Y = attr[O.hid], null == (U = attr[O.htx]) && (U = ""), null != (X = css.hoverHeight) && -1 != String(X).indexOf("px") && (X = String(X).split("px").slice(0, 1)), null == X && (X = 30), null == (V = css.hoverWidth) && (V = ""), null == (j = param.htm) && (j = "config/keypad.htm"), J = attr.id, null == (Z = param.idCol) && (Z = 0), image = attr.image, null == image && (image = "nil 0 0"), q = attr.imageDir, null == (tt = css.imgWidth) && (tt = 45), null == (et = css.imgHeight) && (et = 45), null == (it = events.keyup) && (it = this.dummy()), null != (nt = css.labelFontSize) && -1 != String(nt).indexOf("px") && (nt = String(nt).split("px").slice(0, 1)), null == nt && (nt = 12), null != (ot = css.label2FontSize) && -1 != String(ot).indexOf("px") && (ot = String(ot).split("px").slice(0, 1)), null == ot && (ot = 12), null == (lt = attr.labelString) && (lt = ""), null == (at = attr.label2String) && (at = ""), dt = css[O.lft], null == (ct = css.leftKey) && (ct = 0), null == (rt = css.legendDisplay) && (rt = !1), null == (st = css.legendPosition) && (st = "bottom"), null == (pt = events.listClick) && (pt = this.dummy()), ht = css.listHeight, ut = css.listLeft, ft = css.listWidth, gt = css.listTop, mt = css.margin, yt = css.marginBottom, Ct = css.marginLeft, bt = css.marginRight, $t = css.marginTop, null == (xt = param.markSymbol) && (xt = ""), null == (vt = param.matchCol) && (vt = "-"), null == (Ot = param.matchValue) && (Ot = "-"), null == (kt = css.marginKey) && (kt = "0px 0px 0px 0px"), null == (At = param.menuModel) && (At = "null"), null == (wt = param.menuTitle) && (wt = "null"), It = param.model, null == (St = attr.multiple) && (St = !1), Et = attr.name, null == (Bt = attr.onscroll) && (Bt = this.dummy()), Tt = css.padding, css.paddingBottom, _t = css.paddingLeft, css.paddingRight, Ft = css.paddingTop, null == (Dt = css.pointBorderColorIndex) && (Dt = ["#000000"]), null == (Mt = css.pointBorderDash) && (Mt = [0]), null == (Lt = css.pointBorderWidth) && (Lt = [1]), null == (Rt = css.pointColorIndex) && (Rt = ["#c5ffb3"]), null == (Ht = css.pointRadius) && (Ht = ["5"]), null == (Nt = css.pointStyle) && (Nt = ["triangle"]), Kt = css[O.pst], null == (Qt = param.row) && (Qt = "0"), null == (zt = param.selectCol) && (zt = ""), null == (Pt = param.selectColumn) && (Pt = ""), null == (Gt = css.showDay) && (Gt = !1), null == (Wt = attr.stacked) && (Wt = !1), null == (Yt = attr.tableId) && (Yt = "tableId"), null == (Vt = param.targetId) && (Vt = 0), null == (Xt = attr.targetIndex) && (Xt = 0), null == (Ut = param.targetColumn) && (Ut = ""), null == (fe = param.targetCol) && (fe = ""), null == (jt = attr.targetColor) && (jt = "WHITE"), Zt = css.textAlign, null == (qt = attr.title) && (qt = ""), null != (te = css.titleFontSize) && -1 != String(te).indexOf("px") && (te = String(te).split("px").slice(0, 1)), null == te && (te = 25), null == (ee = attr.tooltips) && (ee = !0), ie = css[O.tp], null == (le = css.topKey) && (le = 0), null == (ae = events[O.trg]) && (ae = "ondblclick"), null == (ne = attr.type) && (ne = "text"), null == (oe = attr[O.val]) && (oe = ""), null == (de = param.whereClass) && (de = 0), re = css[O.wit], null == (se = css.widthTable) && (se = 130), null != (ce = css.xAxesFontSize) && -1 != String(ce).indexOf("px") && (ce = String(ce).split("px").slice(0, 1)), null == ce && (ce = 12), null == (pe = css.xLabelAngle) && (pe = 0), null != (he = css.yAxesFontSize) && -1 != String(he).indexOf("px") && (he = String(he).split("px").slice(0, 1)), null == he && (he = 12), null != (ue = css.y2AxesFontSize) && -1 != String(ue).indexOf("px") && (ue = String(ue).split("px").slice(0, 1)), null == ue && (ue = 12), null == (ge = attr.y2AxesType) && (ge = ""), {
                    background: e,
                    border: i,
                    borderRadius: l,
                    boxShadow: a,
                    canvas: o,
                    change: s,
                    callback: n,
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
                    cursor: b,
                    data: data,
                    dataFontSize: v,
                    dataLabel: x,
                    data2Label: A,
                    disabled: w,
                    display: S,
                    displayKey: k,
                    dragdrop: C,
                    editWidth: $,
                    field: field,
                    fieldClass: I,
                    fieldOther: fieldOther,
                    float: H,
                    fontColorTD: E,
                    fontColorTH: B,
                    fontFamilyTD: _,
                    fontFamilyTH: F,
                    fontFamily: T,
                    fontSize: D,
                    fontSizeTD: M,
                    fontSizeTH: L,
                    fontWeight: N,
                    format: R,
                    header: K,
                    height: Q,
                    heightTable: z,
                    hover: P,
                    hoverBgColor: W,
                    hoverColor: G,
                    hoverHeight: X,
                    hoverId: Y,
                    hoverText: U,
                    hoverWidth: V,
                    htm: j,
                    id: J,
                    idCol: Z,
                    image: image,
                    imageDir: q,
                    imgHeight: et,
                    imgWidth: tt,
                    keyup: it,
                    labelString: lt,
                    label2String: at,
                    labelFontSize: nt,
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
                    marginLeft: Ct,
                    marginRight: bt,
                    marginTop: $t,
                    matchCol: vt,
                    matchValue: Ot,
                    menuModel: At,
                    menuTitle: wt,
                    model: It,
                    multiple: St,
                    name: Et,
                    onscroll: Bt,
                    padding: Tt,
                    paddingLeft: _t,
                    paddingTop: Ft,
                    params: params,
                    pointBorderColorIndex: Dt,
                    pointBorderDash: Mt,
                    pointBorderWidth: Lt,
                    pointColorIndex: Rt,
                    pointRadius: Ht,
                    pointStyle: Nt,
                    position: Kt,
                    row: Qt,
                    selectCol: zt,
                    selectColumn: Pt,
                    showDay: Gt,
                    stacked: Wt,
                    tableId: Yt,
                    targetIndex: Xt,
                    targetColor: jt,
                    targetColumn: Ut,
                    targetCol: fe,
                    targetId: Vt,
                    textAlign: Zt,
                    textTransform: Jt,
                    title: qt,
                    titleFontSize: te,
                    tooltips: ee,
                    top: ie,
                    topKey: le,
                    trigger: ae,
                    type: ne,
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
                    a = this._p_(e),
                    n = l.split("-");
                return {
                    potato: this,
                    x: i,
                    m: l,
                    _: a,
                    q: n,
                    id: a.id
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
                    a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                a.open("POST", t);
                return a.onreadystatechange = function() {
                    a.readyState > 3 && 200 == a.status && (potato.response = a.responseText, i(a.responseText))
                }, a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.setRequestHeader("Chartset", "UTF-8"), a.send(l), a
            },
            _re_: function(t, e, i) {
                var l = "string" == typeof e ? e : Object.keys(e).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
                }).join("&");
                l += "& model=" + $O$D().POTATOModelDir + t;
                var a = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                return a.open("POST", "config/excel.php"), a.onreadystatechange = function() {
                    a.readyState > 3 && 200 == a.status && i(a.responseText)
                }, a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.setRequestHeader("Chartset", "UTF-8"), a.setRequestHeader("Content-length", l.length), a.setRequestHeader("Connection", "close"), a.send(l), a
            },
            _ri_: function(t) {
                return $(t).parent().parent().children().index(t.parentNode)
            },
            _rx_: function(t, e, i, l) {
                var a = "string" == typeof i ? i : Object.keys(i).map(function(t) {
                    return encodeURIComponent(t) + "=" + encodeURIComponent(i[t])
                }).join("&");
                a += "& model=../apps/" + String(String(window.location.href).split("=").slice(1, 2)).split("-").slice(0, 1) + "/Models/" + e;
                var n = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                return n.open("POST", "config/xml.php"), n.onreadystatechange = function() {
                    n.readyState > 3 && 200 == n.status && (pims_console = n.responseText, l(t, n.responseText))
                }, n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), n.setRequestHeader("Chartset", "UTF-8"), n.setRequestHeader("Content-length", a.length), n.setRequestHeader("Connection", "close"), n.send(a), n
            },
            _se_a: function(t, e, i, l) {
                var a = e.getAttribute(i);
                if (null == a)
                    if (null != t)
                        if (-1 == t.indexOf(i)) a = l;
                        else {
                            var n = t.split(i);
                            v2 = String(n.slice(1, 2)).split(":"), -1 != String(v2.slice(1, 2)).indexOf(";") ? (v3 = String(v2.slice(1, 2)).split(";"), a = v3.slice(0, 1)) : a = v2.slice(1, 2)
                        } else a = l;
                return a
            },
            _se_: function() {
                var t, e = (u = this.tag)("*"),
                    i = [],
                    l = [],
                    a = [],
                    n = [],
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
                                b = O.tue;
                            "" == (b = this._se_a(y, e[t], O.dsa, O.fls)) && (b = O.tue);
                            var v = this.attr(e[t], O.id);
                            null == v && (v = String(m.slice(2, 3)).toLowerCase());
                            var x, A, w = this._se_a(y, e[t], O.hid, O.pht),
                                S = this._se_a(y, e[t], O.htx, ""),
                                k = (this._se_a(y, e[t], O.lft, "0px"), this._se_a(y, e[t], O.tp, "0px"), this._se_a(y, e[t], O.pst, "static"), this._se_a(y, e[t], O.val, "")),
                                C = this.attr(e[t], "submit"),
                                I = this.attr(e[t], "fieldOther"),
                                E = this.attr(e[t], "params"),
                                B = this.attr(e[t], "whereClass"),
                                T = this.attr(e[t], "toggle");
                            null != T && (T = new Function(this.attr(e[t], "toggle")));
                            var _ = this._css_(e[t], y);
                            pims(e[t].localName)._bt_(function() {
                                if (where = B + "@" + e[t].localName, field = C + "@" + e[t].localName, fieldOther = I + "@" + e[t].localName, params = E + "@" + e[t].localName, param = {
                                        toggle: T
                                    }, css = _, null != O.attr(e[t], "value") && null != O.attr(e[t], "image") ? attr = {
                                        disabled: b,
                                        value: k,
                                        image: O.attr(e[t], "image"),
                                        hoverText: S,
                                        hoverId: w,
                                        id: v
                                    } : null != O.attr(e[t], "value") && null == O.attr(e[t], "image") ? attr = {
                                        disabled: b,
                                        value: O.attr(e[t], "value"),
                                        hoverText: S,
                                        hoverId: w,
                                        id: v
                                    } : null == O.attr(e[t], "value") && null != O.attr(e[t], "image") ? attr = {
                                        disabled: b,
                                        image: O.attr(e[t], "image"),
                                        hoverText: S,
                                        hoverId: w,
                                        id: v
                                    } : null == O.attr(e[t], "value") && null == O.attr(e[t], "image") && (attr = {
                                        disabled: b,
                                        hoverText: S,
                                        hoverId: w,
                                        id: v
                                    }), null != O.attr(e[t], "click")) try {
                                    x = new Function(O.attr(e[t], "click")), null != O.attr(e[t], "callback") && (A = new Function(O.attr(e[t], "callback"))), events = {
                                        click: x,
                                        callback: A
                                    }
                                } catch (t) {} else try {
                                    try {
                                        x = new Function("$O$." + String(m.slice(2, 3)).toLowerCase() + "()")
                                    } catch (t) {
                                        x = new Function(v + "()")
                                    }
                                    null != O.attr(e[t], "callback") && (A = new Function(O.attr(e[t], "callback"))), events = {
                                        click: x,
                                        callback: A
                                    }
                                } catch (t) {}
                            })
                        }
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().c)) {
                            y = O.attr(e[t], "style");
                            var F = O.attr(e[t], "class");
                            if (null == F && (F = "getFIELD"), $(e[t].localName).addClass(F), null != (dt = O.attr(e[t], "change"))) {
                                u = e[t].localName;
                                a[String(u)] = new Function(dt)
                            }
                            _ = this._css_(e[t], y);
                            var D = this._attr_(e[t], y, m);
                            pims(e[t].localName)._d_(function() {
                                css = _, attr = D, null != dt && (events = {
                                    change: function(t) {
                                        for (var e in a) {
                                            String(e) == t && a[e]()
                                        }
                                    }
                                })
                            })
                        }
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().k)) {
                            y = O.attr(e[t], "style");
                            var M = O.attr(e[t], "tool"),
                                L = O.attr(e[t], "ng-model"),
                                R = O.attr(e[t], "class");
                            null == R && (R = "getFIELD"), $(e[t].localName).addClass(R);
                            var H = new Function(O.attr(e[t], "change")),
                                N = new Function(O.attr(e[t], "click"));
                            _ = this._css_(e[t], y), D = this._attr_(e[t], y, m);
                            pims(e[t].localName)._kp_(function() {
                                param = {
                                    tool: M,
                                    ngmodel: L
                                }, css = _, attr = D, events = {
                                    change: H,
                                    click: N
                                }
                            })
                        }
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().l)) {
                            y = O.attr(e[t], "style");
                            var K = O.attr(e[t], O.id);
                            null == K && (K = String(m.slice(2, 3)).toLowerCase());
                            var Q = this._se_a(y, e[t], O.val, "0"),
                                z = this._se_a(y, e[t], O.htx, "potato"),
                                P = O.attr(e[t], O.mdl),
                                G = O.attr(e[t], O.dat),
                                W = (L = O.attr(e[t], "ng-model"), O.attr(e[t], "class"));
                            null == W && (W = "getFIELD"), $(e[t].localName).addClass(W);
                            var Y = O.attr(e[t], "whereClass"),
                                U = O.attr(e[t], "params"),
                                V = O.attr(e[t], "onscroll");
                            if (null != (Dt = O.attr(e[t], "listClick"))) {
                                u = e[t].localName;
                                l[String(u)] = new Function(Dt)
                            } else try {
                                u = e[t].localName;
                                l[String(u)] = new Function(String(m.slice(2, 3)).toLowerCase() + "()")
                            } catch (t) {}
                            if (null != (Mt = O.attr(e[t], "callback"))) {
                                u = e[t].localName;
                                i[String(u)] = new Function(Mt)
                            }
                            O.attr(e[t], "listTop"), O.attr(e[t], "listLeft"), O.attr(e[t], "display");
                            var X = String(e[t].localName);
                            _ = this._css_(e[t], y, X);
                            pims(X)._lt_(function() {
                                try {
                                    where = Y + "@" + X
                                } catch (t) {}
                                try {
                                    params = U + "@" + X
                                } catch (t) {}
                                css = _, param = {
                                    model: P,
                                    data: G,
                                    ngmodel: L
                                }, attr = {
                                    onscroll: V,
                                    value: Q,
                                    hoverText: z,
                                    id: K
                                }, events = {
                                    click: function(t, e, i) {
                                        for (var a in potato.table = t, potato.ci = i, l) {
                                            String(a) == e && l[a]()
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
                            var j = O.attr(e[t], O.mdl),
                                J = O.attr(e[t], O.dat);
                            L = O.attr(e[t], "ng-model");
                            null == (mt = O.attr(e[t], "menuTitle")) && (mt = "null");
                            var Z = O.attr(e[t], "padding");
                            null == (yt = O.attr(e[t], "color")) && (yt = "BLUE"), null == (bt = O.attr(e[t], "borderRadius")) && (bt = 7), null == (vt = O.attr(e[t], "fontSize")) && (vt = 15), null == (At = O.attr(e[t], "height")) && (At = 30), null == (Ot = O.attr(e[t], "hoverBgColor")) && (Ot = "yellow"), null == (xt = O.attr(e[t], "hoverText")) && (xt = ""), null == (wt = O.attr(e[t], "value")) && (wt = "0"), null == (St = O.attr(e[t], "width")) && (St = document.innerWidth + "px");
                            var q = O.attr(e[t], "widthMenu");
                            null == q && (q = 550);
                            var tt = O.attr(e[t], "heightTable");
                            null == tt && (tt = 450), null == (Bt = O.attr(e[t], O.id)) && (Bt = String(m.slice(2, 3)).toLowerCase()), null == (Tt = O.attr(e[t], O.mdl)) && (Tt = String(m.slice(2, 3)).toLowerCase() + O.php), null == (_t = O.attr(e[t], "class")) && (_t = "getFIELD"), $(e[t].localName).addClass(_t);
                            var et = O.attr(e[t], "whereClass"),
                                it = O.attr(e[t], "params"),
                                lt = O.attr(e[t], "onscroll");
                            if (null != (Dt = O.attr(e[t], "click"))) {
                                u = e[t].localName;
                                d[String(u)] = new Function(Dt)
                            } else try {
                                u = e[t].localName;
                                d[String(u)] = new Function(String(m.slice(2, 3)).toLowerCase() + "()")
                            } catch (t) {}
                            if (null != (Mt = O.attr(e[t], "callback"))) {
                                u = e[t].localName;
                                s[String(u)] = new Function(Mt)
                            }
                            var at = O.attr(e[t], "topTable"),
                                nt = O.attr(e[t], "leftTable"),
                                ot = O.attr(e[t], "display");
                            X = String(e[t].localName);
                            pims(X)._m_(function() {
                                try {
                                    where = et + "@" + X
                                } catch (t) {}
                                try {
                                    params = it + "@" + X
                                } catch (t) {}
                                css = {
                                    display: ot,
                                    height: At,
                                    width: St,
                                    color: yt,
                                    fontSize: vt,
                                    hoverBgColor: Ot,
                                    borderRadius: bt,
                                    border: ut,
                                    background: ht,
                                    padding: Z,
                                    marginTop: at + "_" + X,
                                    marginLeft: nt + "_" + X,
                                    widthTable: q + "_" + X,
                                    heightTable: tt + "_" + X
                                }, param = {
                                    model: Tt,
                                    menuTitle: mt,
                                    menuModel: j,
                                    data: J,
                                    ngmodel: L
                                }, attr = {
                                    onscroll: lt,
                                    value: wt,
                                    hoverText: xt,
                                    id: Bt
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
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().ct)) POTATO.elementbar = e[t], $O$Element[m.slice(2, 3)] = e[t], null == (rt = O.attr(e[t], "onload")) && (rt = O.tue), rt == O.tue ? $O$X.prototype.reloadChart(m.slice(2, 3), O.tue) : $O$X.prototype.reloadChart(m.slice(2, 3), O.fls);
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().tb)) {
                            POTATO.element = e[t], $O$Element[m.slice(2, 3)] = e[t];
                            var rt, st = O.attr(e[t], O.id);
                            null == st && (st = String(m.slice(2, 3)).toLowerCase()), null == (rt = O.attr(e[t], "onload")) && (rt = O.tue), rt == O.tue || 1 == rt ? $O$X.prototype.reloadTable(st, O.tue) : $O$X.prototype.reloadTable(st, O.fls)
                        }
                        if (m.slice(1, 2) == $O$S.prototype.l($O$V().tx)) {
                            y = O.attr(e[t], "style"), _ = this._css_(e[t], y), D = this._attr_(e[t], y, m);
                            var dt, ct = O.attr(e[t], "class");
                            if (null == ct && (ct = "getFIELD"), $(e[t].localName).addClass(ct), null != (Dt = O.attr(e[t], "click"))) {
                                u = e[t].localName;
                                n[String(u)] = new Function(Dt)
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
                            L = O.attr(e[t], "ng-model");
                            pims(e[t].localName)._tx_(function() {
                                css = _, attr = D, param = {
                                    ngmodel: L
                                }, events = {
                                    click: function(t) {
                                        for (var e in n) {
                                            String(e) == t && n[e]()
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
                            j = O.attr(e[t], O.mdl), J = O.attr(e[t], O.dat), L = O.attr(e[t], "ng-model");
                            null == (mt = O.attr(e[t], "menuTitle")) && (mt = "null");
                            var yt, bt, vt, Ot, xt;
                            Z = O.attr(e[t], "padding");
                            null == (yt = O.attr(e[t], "color")) && (yt = "BLUE"), null == (bt = O.attr(e[t], "borderRadius")) && (bt = 7), null == (vt = O.attr(e[t], "fontSize")) && (vt = 15), null == (Ot = O.attr(e[t], "hoverBgColor")) && (Ot = "yellow"), null == (xt = O.attr(e[t], "hoverText")) && (xt = "");
                            var At, wt, St, kt = O.attr(e[t], O.mt);
                            if (null == kt && (kt = "10px"), null == (At = O.attr(e[t], "height"))) {
                                var Ct = kt.split("px"),
                                    $t = parseFloat(Ct.slice(0, 1));
                                At = window.innerHeight - 90 - $t + "px"
                            }
                            null == (wt = O.attr(e[t], "value")) && (wt = "0"), null == (St = O.attr(e[t], "width")) && (St = window.innerWidth - 50 + "px");
                            var It = O.attr(e[t], O.sp);
                            null == It && (It = "500");
                            var Et = O.attr(e[t], "tabHeight");
                            null == Et && (Et = "20px");
                            var Bt, Tt, _t, Ft = O.attr(e[t], "tabWidth");
                            null == Ft && (Ft = "100px"), null == (Bt = O.attr(e[t], O.id)) && (Bt = String(m.slice(2, 3)).toLowerCase()), null == (Tt = O.attr(e[t], O.mdl)) && (Tt = String(m.slice(2, 3)).toLowerCase() + O.php), null == (_t = O.attr(e[t], "class")) && (_t = "getFIELD"), $(e[t].localName).addClass(_t);
                            var Dt, Mt;
                            et = O.attr(e[t], "whereClass"), it = O.attr(e[t], "params"), lt = O.attr(e[t], "onscroll");
                            if (null != (Dt = O.attr(e[t], "click"))) {
                                u = e[t].localName;
                                d[String(u)] = new Function(Dt)
                            } else try {
                                u = e[t].localName;
                                d[String(u)] = new Function(String(m.slice(2, 3)).toLowerCase() + "()")
                            } catch (t) {}
                            if (null != (Mt = O.attr(e[t], "callback"))) {
                                u = e[t].localName;
                                s[String(u)] = new Function(Mt)
                            }
                            at = O.attr(e[t], "topTable"), nt = O.attr(e[t], "leftTable"), ot = O.attr(e[t], "display"), X = String(e[t].localName);
                            pims(X)._ta_(function() {
                                try {
                                    where = et + "@" + X
                                } catch (t) {}
                                try {
                                    params = it + "@" + X
                                } catch (t) {}
                                css = {
                                    display: ot,
                                    height: At,
                                    width: St,
                                    tabWidth: Ft,
                                    tabHeight: Et,
                                    color: yt,
                                    fontSize: vt,
                                    hoverBgColor: Ot,
                                    borderRadius: bt,
                                    border: ut,
                                    background: ht,
                                    padding: Z,
                                    marginTop: kt
                                }, param = {
                                    header: gt,
                                    body: ft,
                                    model: Tt,
                                    menuTitle: mt,
                                    menuModel: j,
                                    data: J,
                                    ngmodel: L,
                                    speed: It
                                }, attr = {
                                    onscroll: lt,
                                    value: wt,
                                    hoverText: xt,
                                    id: Bt
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
                    a = css[O.bdr],
                    n = css[O.bkg],
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
                    b = String(param[O.bd]).split("||");
                e.createdCallback = function() {
                    this.id = l + "_", this.pims = l;
                    var t = '<div id="menu-' + l + '" style="margin-top:' + m + '" >';
                    t += '<ul class="OTabs" >', t += '<li style="display:inline;">', y.length > 1 ? t += '<a id="header-' + y[0] + '" class="OCurrent" onclick="O.tab_hrefSelector=this.innerText;"  >' + y[0] + "</a></li>" : t += '<a class="OCurrent" onclick="O.tab_hrefSelector=this.innerText;"  >OTab</a></li>';
                    for (var e = 1; e < y.length; e++) t += '<li style="display:inline;">', t += '<a id="header-' + y[e] + '" onclick="O.tab_hrefSelector=this.innerText;"  >' + y[e] + "</a></li>";
                    t += "</ul>", t += '<div class="OBox">', t += '<div id="OTab-' + (i = y[0].split(" ").join("")) + '" class="OTabBody" >', t += '<div id="' + i + '" class="OCol"  >', b.length > 1 && (t += b[0]), t += "</div>", t += "</div>";
                    for (e = 1; e < y.length; e++) {
                        var i;
                        t += '<div id="OTab-' + (i = y[e].split(" ").join("")) + '" class="OTabBody"  >', t += '<div id="' + i + '" class="OCol"  >', b.length > 1 && (t += b[e]), t += "</div>", t += "</div>"
                    }
                    t += "</div>", t += "</div>", this.innerHTML = t, $("#" + y[0].split(" ").join("")).addClass("OTabBody"), $(".OTabs").css({
                        "list-style": "none",
                        overflow: "hidden",
                        "padding-left": "1px",
                        "margin-left": "2px"
                    }), $(".OBox").css({
                        display: "block",
                        background: n,
                        border: a,
                        "border-radius": "10px",
                        "border-top-left-radius": "2px",
                        "border-top-right-radius": "2px",
                        "margin-top": "-1px",
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
                        background: n,
                        border: "1px solid black",
                        top: "1px",
                        "border-bottom": "0px",
                        position: "relative",
                        "z-index": "2",
                        opacity: "1"
                    }), $(".OTabs li:first-child a, .OTabBody:first").addClass("OCurrent"), $(".box-wrraper .OCurrent .OCol").css("top", 0), O._ta_attr(l, f, u, h, g, n);
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
            _ta_attr: function(t, e, i, l, a, n) {
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
                        fontSize: a,
                        "text-align": "center",
                        cursor: "pointer",
                        padding: "3px 3px 3px 3px",
                        "border-top-left-radius": "10px",
                        "border-top-right-radius": "10px",
                        opacity: "0.5"
                    }), O.tab_el.addClass("OCurrent"), $(".OTabs li a.OCurrent").css({
                        background: n,
                        border: "1px solid black",
                        top: "1px",
                        "border-bottom": "0px",
                        position: "relative",
                        "z-index": "2",
                        opacity: "1"
                    }), O.tab_col = $(".OBox .OCurrent .OCol"), O.tab_col.animate({
                        top: 10 * -O.tab_col.height()
                    }, O.tab_speed), $(".OTabBody").removeClass("OCurrent"), $("#OTab-" + O.tab_hrefSelector.split(" ").join("")).addClass("OCurrent"), $(".OBox .OCurrent .OCol").animate({
                        top: 0
                    }, O.tab_speed, function() {}))
                })
            },
            _tb_attr: function(t) {
                var e = [],
                    i = String(t[0]).replace(/\s+/g, "");
                if (-1 != String(i).indexOf(";"))
                    for (var l = String(t[0]), a = (String(l).match(/;/g) || []).length, n = String(l).split(";"), o = 0; o < a; o++)
                        if (-1 != String(n.slice(o, o + 1)).indexOf(":")) {
                            var r = String(n.slice(o, o + 1)).split(":");
                            if (String(r.slice(0, 1)).replace(/\s+/g, "") != O.tl && String(r.slice(0, 1)).replace(/\s+/g, "") != O.cbk && (e[String(r.slice(0, 1)).replace(/\s+/g, "")] = String(r.slice(1, 2)).replace(/\s+/g, "")), String(r.slice(0, 1)).replace(/\s+/g, "") == O.tl && (e[String(r.slice(0, 1)).replace(/\s+/g, "")] = r.slice(1, 2)), String(r.slice(0, 1)).replace(/\s+/g, "") == O.cbk) {
                                l = String(t[0]).split(O.cbk), n = String(l.slice(1, 2));
                                e[O.cbk] = "function" + String(n.substr(1)).split("function").slice(1, 2)
                            }
                        }
                return e
            },
            _tb_: function(t, e) {
                for (var i = this._p_(e), l = this.getHTMLElement(), a = this.x, n = [
                        []
                    ], o = i.id, r = param[O.dat], s = String(o).toUpperCase(), d = this.attr($O$Element[s], O.dgdp), c = this.attr($O$Element[s], "params"), p = String(i.header).split(","), h = 0; h < $O$Array.length; h++) o == String($O$Array[h].bind) && (n[$O$Array[h].id] = $O$Array[h].value, 0);
                var u = "<table class='potatoTableCss' id='" + i.id + "' style='border-collapse:collapse;width:99%'>";
                if (-1 != String(r).indexOf(O.php) && (i.model = r), null != i.model) {
                    l.createdCallback = function() {
                        this.innerHTML = '<div id="div-' + o + '" ></div> '
                    };
                    var g = [];
                    if (null != c && "null" != c)
                        for (var f = (String(c).match(/,/g) || []).length, m = String(c).split(","), y = 0; y <= f; y++) {
                            var b = String(m.slice(y, y + 1)).split(":"),
                                v = String(b.slice(1, 2));
                            if (-1 != v.indexOf(",") && (v = String(String(b).split(",")).slice(0, 1)), "null" != String(b.slice(0, 1)).replace(/\s+/g, "") && "" != String(b.slice(0, 1)).replace(/\s+/g, ""))
                                if (-1 != v.indexOf("return")) {
                                    var x = new Function(v);
                                    g[String(b.slice(0, 1)).replace(/\s+/g, "")] = x()
                                } else g[String(b.slice(0, 1)).replace(/\s+/g, "")] = String(v).replace(/\s+/g, "")
                        }
                    this._rp_(i.model, g, function(t) {
                        var e = O.parse(t);
                        if (null != p && p.length > 0 && "" != p[0]) {
                            var l = 0;
                            for (s in u += "<tr>", p) "" != p[s] && "-" != p[s] ? u += "<th style='border:1px solid black;font-size:" + i.fontSizeTH + ";color:" + i.fontColorTH + ";font-family:" + i.fontFamilyTH + "'>" + p[s] + "</th>" : u += "<th style='display:none'>" + p[s] + "</th>", l++;
                            u += "</tr>";
                            var n = potato.getAttr(a, "split");
                            for (var r in null == n && (n = "#"), e)
                                if (O.udf != e[r][0] && null != e[r][0] && r >= 0) {
                                    u += "<tr>";
                                    for (var c = 0; c < l; c++)
                                        if ("" != p[c] && "-" != p[c] && null != p[c])
                                            if (null != d && "" != String(e[r][c]).replace(/\s+/g, ""))
                                                if (-1 != String(e[r][c]).indexOf(n)) {
                                                    var h = String(e[r][c]).split(n);
                                                    u += "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>";
                                                    for (var g = 0; g < h.length - 1; g++) "" != String(h[g]).replace(/\s+/g, "") && (u += "<div class='" + O.dgdp + "-" + o + "'>" + h[g] + "</div>");
                                                    u += "</td>"
                                                } else u += "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'><div class='" + O.dgdp + "-" + o + "'>" + e[r][c] + "</div></td>";
                                    else u += "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>" + e[r][c] + "</td>";
                                    else u += "<td style='display:none'>" + e[r][c] + "</td>";
                                    u += "</tr>"
                                }
                        } else {
                            l = 0;
                            for (s in u += "<tr>", e[0]) "" != e[0][s] && "-" != e[0][s] ? u += "<th style='border:1px solid black;font-size:" + i.fontSizeTH + ";color:" + i.fontColorTH + ";font-family:" + i.fontFamilyTH + "'>" + e[0][s] + "</th>" : u += "<th style='display:none'>" + e[0][s] + "</th>", l++;
                            for (var r in u += "</tr>", e)
                                if (O.udf != e[r][0] && null != e[r][0] && r > 0) {
                                    u += "<tr>";
                                    for (c = 0; l > c; c++) "-" != e[0][c] && null != e[0][c] && e[0][c] != O.udf ? null != d && "" != e[r][c] ? u += "<td style='border:1px solid black;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'><div class='" + d + "'>" + e[r][c] + "</div></td>" : u += "<td style='border:1px solid black;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>" + e[r][c] + "</td>" : u += "<td style='display:none'>" + e[r][c] + "</td>";
                                    u += "</tr>"
                                }
                        }
                        u += "</table>", $("#div-" + o).html(u).show().css({
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
                            if (potato.table = f, i.callback(f, i.id), String(editCell).split("@").slice(1, 2) == a) {
                                var y = String(editCell).split("@").slice(0, 1),
                                    b = [];
                                if (null != y[0] && "null" != y[0]) b = potato._tb_attr(y);
                                potato._ec_(function() {
                                    attr = {
                                        id: i.id,
                                        dragdrop: d
                                    }, paramE = b;
                                    var t = new Function("return " + String(b[O.cbk]));
                                    events = {
                                        callback: t()
                                    }
                                })
                            }
                            if (String(multipleSelect).split("@").slice(1, 2) == a) {
                                if (null != (y = String(multipleSelect).split("@").slice(0, 1))[0] && "null" != y[0]) b = potato._tb_attr(y);
                                potato.MultipleSelect(function() {
                                    attr = {
                                        id: i.id
                                    }, paramM = b;
                                    var t = new Function("return " + String(b[O.cbk]));
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
                    })
                } else l.createdCallback = function() {
                    this.innerHTML = '<div id="div-' + o + '" ></div> ';
                    var t = O.parse(r),
                        e = 0;
                    for (s in u += "<tr>", p) "" != p[s] && "-" != p[s] ? u += "<th style='border:1px solid black;font-size:" + i.fontSizeTH + ";color:" + i.fontColorTH + ";font-family:" + i.fontFamilyTH + "'>" + p[s] + "</th>" : u += "<th style='display:none'>" + p[s] + "</th>", e++;
                    for (var l in u += "</tr>", t)
                        if (O.udf != t[l][0] && null != t[l][0] && l >= 0) {
                            u += "<tr>";
                            for (var n = 0; n < e; n++) "" != p[n] && "-" != p[n] && null != p[n] ? null != d && "" != t[l][n] ? u += "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'><div class='" + O.dgdp + "-" + o + "'>" + t[l][n] + "</div></td>" : u += "<td style='border:1px solid black;padding-left:5px;font-size:" + i.fontSizeTD + ";color:" + i.fontColorTD + ";font-family:" + i.fontFamilyTD + "'>" + t[l][n] + "</td>" : u += "<td style='display:none'>" + t[l][n] + "</td>";
                            u += "</tr>"
                        }
                    u += "</table>", $("#div-" + o).html(u).show().css({
                        overflow: "auto",
                        display: i.display,
                        width: i.width,
                        height: css[O.h],
                        background: i.background,
                        border: i.border,
                        position: i.position,
                        left: i.left,
                        top: i.top,
                        borderRadius: i.borderRadius
                    }), potato._t_dnd(d, i.id, i);
                    var c = document.getElementById(i.id),
                        h = $("#" + i.id + " tbody");
                    $(document).keydown(function(t) {
                        if (h.find(".highlight").length)
                            if (40 == t.which) {
                                var e = h.find(".highlight").next();
                                $O$X.prototype.tableHighlight(e[0].rowIndex, i.tableId)
                            } else if (38 == t.which) {
                            var l = h.find(".highlight").prev();
                            $O$X.prototype.tableHighlight(l[0].rowIndex, i.tableId)
                        }
                    });
                    try {
                        if (potato.table = c, i.callback(c, i.id), String(editCell).split("@").slice(1, 2) == a) {
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
                        if (String(multipleSelect).split("@").slice(1, 2) == a) {
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
                        i.click(c.rows[ri], ri, ci, i.id)
                    })
                };
                this._p_e(a, l)
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
                    a = this.x,
                    n = i.id;
                "potato.now" == i.value && (i.value = e.now), "potato.today()" == i.value && (i.value = e.today()), "potato.now()" == i.value && (i.value = e.now());
                var o = param.ngmodel;
                l.createdCallback = function() {
                    this.id = n + "_", $O$X.prototype.getAttribute(this, a).index, $O$X.prototype.getAttribute(this, a).field, this.pims = a, "none" == i.display ? this.innerHTML = null == o ? '<input type="text" id="' + n + '" class="' + i.className + '"> ' : '<input ng-model="' + o + '" type="text" id="' + n + '" class="' + i.className + '"> ' : this.innerHTML = null == o ? '<br><input type="text" id="' + n + '"  class="' + i.className + '" > ' : '<br><input ng-model="' + o + '" type="text" id="' + n + '"  class="' + i.className + '" > ', e._css_id(i, n), $("#" + n).css({
                        textTransform: i.textTransform
                    }), "null" != i.float && $("#" + n + "_").css("float", i.float), i.disabled == O.fls && $("#" + n).attr({
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
                            if (String(n).toLowerCase() == String($O$Id[e]).toLowerCase()) {
                                var l = String($O$BindId[e]);
                                document.getElementById(l).value = document.getElementById(n).value
                            }
                        try {
                            i.keyup(a, t)
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
                            i.click(a)
                        } catch (t) {}
                    }), i.disabled != O.tue && "" != i.disabled || $("#" + n).attr({
                        value: i.value,
                        type: i.type,
                        disabled: !0
                    })
                }, this._p_e(a, l)
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
                        var a = t.indexOf(e[i]),
                            n = "='" + l + "'";
                        t = t.substring(0, a) + n + t.substring(a + e[i].length)
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
                        for (var i = String(e).split(" "), l = (n = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), a = 0; a < l.length; a++) l[a].onchange = t;
                    else(r = document.getElementById(String(e).split("#").slice(1, 2))).onchange = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var n = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < n.length; o++)
                            for (l = n[o].getElementsByTagName("td"), a = 0; a < l.length; a++) l[a].onchange = t
                    } else {
                        var r = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (o = 0; o < r.length; o++) r[o].onchange = t
                    }
            },
            CLICK: function(t) {
                var e = this.x;
                if (-1 != e.indexOf("#"))
                    if (-1 != e.indexOf(" td"))
                        for (var i = String(e).split(" "), l = (n = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), a = 0; a < l.length; a++) l[a].onclick = t;
                    else(r = document.getElementById(String(e).split("#").slice(1, 2))).onclick = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var n = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < n.length; o++)
                            for (l = n[o].getElementsByTagName("td"), a = 0; a < l.length; a++) l[a].onclick = t
                    } else {
                        var r = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (o = 0; o < r.length; o++) r[o].onclick = t
                    }
            },
            closeEditCell: function(e, i) {
                var l = $O$T;
                potato.edit = "off";
                var a = document.createTextNode(l.firstChild.value);
                l.replaceChild(a, l.firstChild), t = 1, $("#keypadtable").hide(), potato.trigger = 0, $O$P.nodevalue = l.firstChild.nodeValue;
                var n = potato.table;
                null != O.dragdropClass && "undefined" != O.dragdropClass && null != O.dragdropClass && null != O.dragdropClass && (null != e ? "" != String(document.getElementById(O.dragdropId).rows[e].cells[i].innerText).replace(/\s+/g, "") ? document.getElementById(O.dragdropId).rows[e].cells[i].innerHTML = "<div class='" + O.dgdp + "-" + O.dragdropId + "'>" + document.getElementById(O.dragdropId).rows[e].cells[i].innerText + "</div>" : document.getElementById(O.dragdropId).rows[e].cells[i].innerText = "" : "" != String(document.getElementById(O.dragdropId).rows[potato.clickRow].cells[potato.clickCol].innerText).replace(/\s+/g, "") ? document.getElementById(O.dragdropId).rows[potato.clickRow].cells[potato.clickCol].innerHTML = "<div class='" + O.dgdp + "-" + O.dragdropId + "'>" + document.getElementById(O.dragdropId).rows[potato.clickRow].cells[potato.clickCol].innerText + "</div>" : document.getElementById(O.dragdropId).rows[potato.clickRow].cells[potato.clickCol].innerText = "", O._t_d(O.dragdropId), O.dragdropClass = null, O.dragdropId = null), potato._.callback($O$P.nodevalue, potato.oldValue, n.cells[potato._.targetId].innerText, potato.ci);
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
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), a = e.slice(2, 3), n = 3; n <= t; n++) a = a + "_" + e.slice(n, n + 1);
                    this.name = a, this.is = i, this.innerHTML = '<input type="text" id="' + i + '"> ', $("#" + i).css({
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
                    var a = i.cToggle;
                    toggle_disabled = null != a, a && i.value ? ($O$X.prototype.makePressed(i), $O$X.prototype.makeGray(i, !0)) : "pimsButton" != i.className || l || ($O$X.prototype.makeFlat(i), $O$X.prototype.makeGray(i, !0))
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
                var i, l, a, n = [];
                for (i = (e = e || document).getElementsByTagName("*"), l = 0; l < i.length; l++)
                    if (null != (a = i[l].getAttribute("class")))
                        for (a = a.split(" "), j = 0; j < a.length; j++)
                            if (a[j] === t) {
                                n.push(i[l]);
                                break
                            }
                return n
            },
            getIdType: function(t, e) {
                var i, l, a, n = [];
                for (i = (e = e || document).getElementsByTagName("*"), l = 0; l < i.length; l++)
                    if (null != (a = i[l].getAttribute("type")))
                        for (a = a.split(" "), j = 0; j < a.length; j++)
                            if (a[j] === t) {
                                n.push(i[l]);
                                break
                            }
                return n
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
                    a = new Date(l[0] + "/" + l[1] + "/" + l[2]);
                a.setDate(a.getDate() + i);
                var n = a.getFullYear(),
                    o = a.getMonth() + 1;
                o = parseInt(o) < 10 ? "0" + o : o;
                var r = a.getDate();
                return n + e + o + e + (r = parseInt(r) < 10 ? "0" + r : r)
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
                $("potato").hide()
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
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), a = e.slice(2, 3), n = 3; n <= t; n++) a = a + "_" + e.slice(n, n + 1);
                    this.name = a, this.is = i;
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
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), a = e.slice(2, 3), n = 3; n <= t; n++) a = a + "_" + e.slice(n, n + 1);
                    this.name = a, this.is = i;
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
                var l = document.createElement("potato");
                $(document).ready(function() {
                    document.body.appendChild(l);
                    $("potato").html('Loading...<img src="data:image/gif;base64,R0lGODlhMgAlAPfaAIw5EIxCEIxKIZRCEJRCGJRKEJRKGJRKIZRSIZRSKZRaKZxCEJxKEJxKGJxSIZxSKZxaKZxaMZxjOZxrQpxzSqVCEKVKEKVKGKVaMaVjOaVrQq1KEK1KGK1SGK1aIa1zSq17Uq2EWq2Ma7VKELVSELVSGLVaGLVaIbVaKbVjKbVjMbVjObVrMbVrObVrQrV7UrWMY71SEL1SGL1aGL1aIb1aKb1jIb1jKb1jMb1rMb1rOb1zOb1zSr2EWr2Ua72Uc72chL2lhL2tjL21nMZSEMZaEMZaGMZjIcZjKcZrKcZrMcZzOcZ7QsZ7UsaMY8aUa8acc8achMalhMa1nMa9nMa9pcbGvc5aEM5aGM5jGM5jIc5jKc5rKc6ESs6EWs6le87Gtc7GxtZaENZjENZjGNZrGNZrIdZrMdZ7QtaMUtaMY9aca9acc9athNatlNa1lNa9nNbOtd5jEN5jGN5rGN5zKd5zMd6EOd6ESt6UWt6la96le961jN61lN69lN69nN7GnN7Gpd7Grd7Ord7WvedjEOdjGOdrEOdrGOdrIedzIedzKed7MeeEOeeMUuecY+etc+ethOe1e+e1hOe1lOe9lOe9nOfGlOfGnOfGpefWte9rGO9zGO9zIe9zKe97Ie97Ke+EMe+EOe+MOe+MQu+USu+UUu+la++9lO/GlO/GnO/ezvdzGPdzIfd7Ifd7Kfd7MfeEKfeEMfeEQveMQveMSveUSveUUveUWvecUvecWvecY/elWvelY/ela/etY/eta/etc/e1c/e1e/e1hPe9hPe9jPfGnPfGpf97If+MQv+UOf+cUv+cWv+lY/+la/+tY/+ta/+1a/+1e/+1hP+9hP/GhP/Wpf/Wvf/v1r20mwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL20myH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCgDaACwAAAAAMgAlAAAI/gC1CRxIsKDBgwgTKlzIsKHDhxAjSlzYp42fiRgNPgLlqqOoPhkzkjJEElEnV7H+hJRYi4yMGDFkkBFFq9dKiG1EadnAkwQWRa9E3XxoysyGBQMWbJBhqJPQoQ3vkNgQoOqGGFgQ6YLakAmJBVUDKJWBiA9Xhl82DAgbwEKMNWcb8gALwUAAA0/iOkSEBQuND3odmuroildghn8cIULkitbTwwf3kDIzlQQZXrYiQT5ohgyJAW7JdHpFbHPBHyQQLZLB2qSrPaYJwhgxhxMi1mQ4uVIZW+CprIhcysgq6s0XYmZNM5oT3IgR5p0QmaEz51Ul0zEskJDhvDatEgFAlmOBvbmB2KskYpB51YlHBAeATf+o2oDDggUWyJrqPfCHAAIXOFDVADF0chF/2jQR1gtqWaAIggKpQVUAbCAyggyPQKgNHmCRoAgZRiyioTaLWOaKESSYMeIpMXDSSSdkaMEbgsTYEIARGxjxylYIXtKIEQPeZwQtlyBYx4Rh3aeILtf1dsKABjiAgQoBjIBIaSNmGVhAAAAh+QQJCgDaACwAAAAAMgAlAAAI/gC1CRxIsKDBgwgTKlzIsKHDhxAjSpxIkaKeXrl6RarIUZIiTpw6uXLVi+PEU3OwqCSDyNWrYCYh8uFkZITNGGRE0SIV82EjUxwWWFgwwgiiTqJ6Ngw0R8aGAAEWbMCJKKlShkY2LIAaNYZRYFcZzrAwgKvUGGfCMmyyNYABAgEsnGijlmEGqHADYKjrEIiBBSp+8HXYB1SnkoMTmqpFqtQika7AJjZ4B4uRoRZkcAImys9kgpCMpjmw1QIZXbmGfRaoh46RRtoYzYmBZU4oUaq1nTLVhy8kVyKRYctlhoQMMpxcEdNGKsscW3zNHH+VbRcaEhtIIBclitGIARtgrNfdGoPUn0QySkzFgoiUqKcG9vL94IGHNiizN0w1QmYOpzyrDbRGVlLJIINxiPwRoEB7jADVBiPoR0YpCw7UgVsLDLBADJx4VuF9XJVAAglWfajNCQOYgQgZZkhmohIkIKJSJ7Fs9CEkdFjg4AA4ucLLasDoYkodRrSlgQIB8LgITInVQQciiDgI1QcCiRDBABxUMlkDC0g1YgAgmKgNEBJg0EADOKgg5poLBgQAIfkECQoA2gAsAAAAADIAJQAACP4AtQkcSLCgwYMIEypcyLChw4cQI0pU2CdPnj0TMxbkI6pTJ1euRF3SmFESIixYyBhC5CpWIJIR+XAyMqKmDDK1RA2DCZFUKRIWNmwggYUlL54O28wxsmFBgAUjZBji5AtpwydMnQYIsCFGUUhWGTqJsWHr1qFGQIVtSEIrgacbjLRZy5DHgK0etp4AQrchCLMGKPRVeIpRqFOo6hTFOBghHiMxopJh6SpXY4OQRBmKoQPCgg0jyLxyFUzgH1K2+NBtQyokqCcCZWywEKMTLVECSXk1RdeMEU6xSmv7gwhyUVquBk0yMmBBHrpN0w7UVUqGdUQfT9FZ0OBD3xAKVM8QFIWGBAkZ2F1xwqLjcsFTuWhuQI/oFai57gmCwjNiKHpDc4jyUn4DbSbUeWREhgh+BGpjhAUBBEXWU2Qw1uAOdw2wgQ4+dGABHWA1qA0MZg0g0BMjYKGLiNpAMcIAJDggUBtGkBGLKDhOkt8j5mHRg0CmkDGHIWSkxNtlk7hihBElDDQDVG0t0MEffbXRRiSmdEKGDEbAMNAPE4DwwQ+D+QFKJ6BwQgYJQ73AojZsoIWFERyowNeb2hwQwAhGfDQgntpIcEEHSDgC6KFvBgQAIfkECQoA2gAsAAAAADIAJQAACP4AtQkcSLCgwYMIEypcyLChw4cQI0qcSLGiNj69bInSFclixV2IEHHi1MnVI48SRc0xEsMIFjKvYvFB+fCRKDMbco4wskhUL5oOOZ3ZYGHAgA0xyHDSBbQhmRgbAkhdsBNRsKYMjWxYIFXqBhlzsDKkEbVrAAsk1og9mCeXqT5PSHAVYEDqi7UCJ0WalKeOEZZmRCEyUmLDAQUw8GrLg4WTK05YTmAgYAELIleuYgmpMsQRqatN45xYgKUTJ7XafIywEONyLDj/9GCJoWgQ1gwBOGA5OVDGiBiGOtGKNASPhQBK1mrQ8IOgqTlkEAUXBQzYDAsqFBespAjL39KZFd1l8aK9YC1TMmIkLflyUnmCfl4NRWrosgPU7wVCIjMip4zoxORXkCMy6GQZKQIWlMYIC6BliCuQJEiQGkWdhYUouUg4EBplBbABGaHQEghBk5yiXSRmDGDWAq3RkolAfCRiiIlr9aFIWTD4gEAAA4ywCI28/PeTWHokMoJUHwyEm4eLkJKLIv911NQpgqk3QJIEiSBBAAsYIRIZiwAFSSixIAKVBScAkdABAew0I1A6xAAdB02ouVATCwxwRFNODFAaLw/50INYHZSASCy2aUiQExbMwEgcikYqqTYBAQAh+QQJCgDaACwAAAAAMgAlAAAI/gC1CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzFvxzSpeuU5g0RnTEiVMnV65eDRPp0JQhLFiMGEIUKxYflgv5gDpDYgSJGGRIidKFU+GuLCc2LLCwwQgiV7SKJnQkY8OAAAEsAEWUSypCNSM2YA0woKkhSF4RlliAlUCADSTQpB2ohxSoRo8WxbjaAauLtJBImaplxEiMBTIUdUo0xwyOH2nbYCEjqhOWHT8gLCBBBuqrTAL5PJqE08mCDYg6tREIZcTpOcBcDRK4CAuoPSyhBGgwI9LAPWRIyLTl6o82UyQWGMHN0seHgqQSOaXpKhMxLBsMNJkrMJItJDKc1KKkpWgED+4DTS3yGeOpqzmKVqMXiKjqhhhzOnVqMX8gHzJhNYUIJ8H0N5APVZ1GBieiGDgQDMkFoFwnpDg4EAdjWWAEKbVYqA0OV2E1ITAWcsHWWAMYEYokBkJiBlYQaPMAWViIAppUwOgCyTCniEJHDFhBpg0GZGXxSiVF7YFFaoiQgUUMJAwgAkE/DJAiKZO0QUwwvZB20RcLjDAHFmw1oIOQBUmY3yv6IfJKRi0ox8kiDG1ggQwAxjDCGRqhYAESpjCk2wIdYAACCB4OFEeiEwUEACH5BAkKANoALAAAAAAyACUAAAj+ALUJHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDMW7JMHWB6NE2txckUy1imQD0ORwULG0EhXxFAyfBQqxggSMsiIyiVK5sJEZzgsWLDBCKJXrgb5TCiDxIIAARbEIDMy0NKDcWZseBpgQFFDoa4i9LJhANQAFkhggSQW4QmuUDeoaTtQUi5TkzCRQiSjxAgVPugKPJUIUYyciDq9itVTsLZHiMjUgQDVggxQwGw5bsSJEyiBJBosIIEoVyzBpKjGYquNFJYYRknG0bZrkStgPksEiMGJz+NeMmTEdqVpGJkNMUj5VNEVj0BRjnAOd03CwgUoS30E1sZnTowNI2S5JHZlpIOGF471YNnAXryrRo4JrnHqVYahWJLiD0wzAirRGIvQkp9+T3BlwAADjICIKX/op00DUBlw1gaL4KbfF2YFYEAPFmyAhWZitUHMFwP1IYNZGWiTglSmtLVIIq6IoosurxixQQAwaOOFVLy01SEZnXQyhxFDHSBQFx6ydtUHXcUwxwgHajAQI0YoYopvYsEQwAZzdILdQHsoMh5StjS4FAgNHOFIQWqwR0IMJJCByCQO1ulTQAAAIfkECQoA2gAsAAAAADIAJQAACP4AtQkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsEI/GiJarXH4wTTSHixMmVq1jEQELchcgIFixkOsWKFUhlQz+K7GzYQCIGmVyxhtlk+IhMjA0DdmJB5ErX0IVrjg4IEGCDT069nir8MmID1QALNhgx1EarwhNTAxAIYIEEHrMLO1A9EGBAE7hQjZTwoAGvQj67Xpmc5NegKVKN7MxZapJXYYKnEJFZMCBsDERAHw/kpAhUhgVtl9JyVfMxS1K9hiGSIYOxq0GPIyVCxBEUFtYymL7SbIeEDEWdjHQdkbvTq1O0QmWFS6KqDBJhd+bmhAiLERmgYJv90GBFjwsbLKlsGIGlpNcBA94+boLUuaFYqLT18KFZ2xevdS3EWHSqPsELX9UVAymR+CcQFGnVtQEduRgokAxTDSDDBliI8hgkBWrDhilGTLUAFmKZUlgjTM3UyQhpdWEEhRnCFUdXRpBx2wAQQCCFKT3d8VgIbMWIwQ/aWIEMJ1jMQcowkhTGxABGuAKFFQKxQUZMnXASCzCFeVCCHdqEIRAPC3TVFhmPOHhQHGZeFBAAACH5BAkKANoALAAAAAAyACUAAAj+ALUJHEiwoMGDCBMqXMiwocOHDAP9GQSxIsNTolxptNXHoseCpMiIRMTJ1as/Hz+GjDFCRgwyoGzlSmkRUiMtGyxs4CADUaxYNCs2MrNhQ4AAG14ichUn6EMzJDYMOLqgpaFaTh/qGLHg6NENJMhEyuqQjQWvBgIs2OCE7MMPaAMYaOv2oY8BCBCEqFsxFydifCH2AqUxFp/ADP+YQmRkjsaZiBPiUSRjRAkynGy9ahrZ4J4RRhaQaIwolyuKnQvqiMGJDBYZPTWiTj1wCZlOnebARtRJFO2CebBwQuTaCCJEwH4TLEVGxpzj0PUoH3hkgIUYpDshEnV4Og+5FkCSd3JlRBHk6RGODiDRiVOAEZCmD9QwdcN2GEDkEyxhYQEZ3/oNVAkWI2xghCuBBNiGI2a0BFYnbSjXRymN2BHaUQXat4dyZszBiVEGQCABFFEh0h1tKFhAhgU+EHQCe7Ol9sQGWKBR0A4ydJJJGxum5gONeRT0xFIavSIKSp11UAITBfEwwmsx9BRhgAZxRmVKAQEAIfkECQoA2gAsAAAAADIAJQAACP4AtQkcSLCgwYMD95w61Qahw4cQDU4CxalTJ1e5ImrcOBASIiNYsJDh5KoXx5MO/3AyMmIDCRmIgLkKhLImQVOmOCxYsCHGnIt7bAo1Y2RDgAALSGBB5Kqh0JosFxwNsAEmp6c2ZWwYMNUlllJYa3axMBXpBhphbXY46uDoibRCEQQggGACXKGOzNwVCsmVX1N7UUbiNIepK2KBOYrCEsNIp1iAE0fkM0eGjKW8REmOCMqI5aWuNG92aErLCMtkLtoa7dAOCQ4yjBiy5WoYa4R2iipl+ur2wUBGSGzYMAJLJ1q+D8YYvtMCFtHJCXYZIfXohlPRC0KhPjdAk+wGSW4MqDoHGPiCwrGQhHSeoHAyrjr9aS8w0ntX2M/3yWPHTPqM7WXBVVIbkGHbeTBU98AJBR54XnWBLLEBFoi1Z1QAceBhBCi28GKKLpJkN8JRbihBAiKdIJIIIr1Fh8IADqzCA1UW8GTBEfTlOFpAAAAh+QQJCgDaACwAAAAAMgAlAAAI/gC1CRxIsKDBgwgTKlzIsKHDhwrXBFvzB6LFhac4derkytWpiyALmiKDpSSijpBChmwDisQGEiSwcOoVSyVIU4w2LFiwQQYijhVtQlQSY0OAAAtGYDkZVKhDJSMWHA3Q09ArpxCdbBgwdUHMj1gfXjh6gADVJWEhAkkw1cCLtBd//AAC96IuWqbqQmTJqSMtvQ35kGpkhIwoV3sAJ2SzYw4vJhZkcNSjGKGRAFhAxYhBhmPiygYtcFBkRoYMLB3bgC64BxEiXiU2k3nlqs9qgqRcN9rwUsacTqRMmbINOpARLGRm8JZhwauZOXT+rt5QQoZOEmSkBjgxYISi2zBaeVi3QAIRV6QBGrC5LbBJVBJzpl5gX5BEUkRHFyCKQ3/giQ0jdGKEV6D0N1AOSnXCCQkxpGSgNkpsgBoiMqjxoEBIbNCZEV1cqI0eRmi4iA8easNIUmR8duEkc8Twmy4eBtMRRx2JgsmDx2Fx2hxLAXOhD3L9UGJdAQEAIfkECQoA2gAsAAAAADIAJQAACP4AtQkcSLCgwYMIEypcyLChw4cQI0qcSLGixYsCTdEKResUxonEFCHi1MmVK1sfIf5RZMQIFjKIXMXqldJhKVIjNmyIQQYUrVg1G2qRsWHAghFGEJUMFHQh0QUBAmwggSVm04U5ikYdsEGGoVJXFULZEJVAAAsbzIRd6CQqhAADMKxtiMNIIihzGfIR5eoVn7wHoWTwYmpRp5JAAROERJYEKFJGyJByRUzxwBIBMHDJdWQqKFHALGuzs4DAKlGPZJDYgMVVaIFf/oYlRSKAhmOk0MSQwdOVri+TatHpZCpsiQEBLoBKPWK3kTmG5mCJ0bVTnKsNoqrghIfo7g0WLKAMGH8Wz1oQP7QhKjECKRayARxoo/Dhg2KiHGIY4jQiagbRAs0AHgmcuGIBXF8AqM0TZI0QExYc3KGgQDwssAAZrnCCxIQDcbBTJ6FwOFBWJHSSi4jaBELGAiQgEkswHEIiynsxYNHaMKIBk4sonZAhgwx2HDCAEbFcB5gdI3Uyh0ucBBKEBAOgYRkHC2wwAgkyzGEdGBP+4OVATKFYU0AAACH5BAkKANoALAAAAAAyACUAAAj+ALUJHEiwoMGDCBMqXMiwocOHECNKnEixosWLA0/ZspUrEsaJkxRx4tTJlStdHyHyUYTFCBZDiF65CpbS4R00I3LGICOKFqmaDckY2bDAwggjiEzGAbpw6IIAATbsRBSL6cIYG6AGWLDBiKFdVhXysACVQAALJJSEXYgBqoqzKtYyfNGAg5EuchGm+SBwEKiSkPIW1PM2QINGokq6qipYW6lXc8gIkLChEyIyc2R6FOjHkSlTQPPEMDLnhEBSiIbGWERrmEBIjIwYecWnJoqzDgaKuiMjxs5Ow9qQIjFiwYI5QGEo0DBwT64kMmRgwSIzkRHDAQysyVvKVAwSO2PM9CaxA4g284JF4cEaA4uMAR3QN9YWSZQR30bIkCFhpvZ8badgsQEJSLUkwxy0/KeNGliRQEYnWAwQVSd/KLjBABuQ4UobQFiwAB3+zdeDBRtg4Yof2uSwwRwhzjdCV53soQ0TFiDSyymN0DJJY0OREKM2j8SAiGVzcAJaXo8YsQAJiFSIB1pYjcBFG0xNIgopwJgSSyckbDBCGgJ9IWEGL/gQFhJYDHnZfRvAoKA2HmAoXn6NvKkNGNpEEMAAR3HSh50F/aANioCGFRAAACH5BAkKANoALAAAAAAyACUAAAj+ALUJHEiwoMGDCBMqXMiwocOHDQf9GQSxIkNJtFxptGWxo0FScwwhMsTJlSiPKE0hkjFCRgwyr2j1QmkxECg0G3JuMMIp1EmaECGRObEhwIANLzu5AgpxjYwNCwIEWEDCCKJaTB+yiVFU6lEZZPZkfVgiqtSpG9CMffikgVQDUpmshfgjQgIFEnzMXdiGh16Bqg5WqrRXG54mIXQMkLrjUUZahAeSIsPp1FxGRhTNGHBAwQZEnBAhchVr4CMsFmL8HLtggZEsPAQ6QkTG5ZxXerRJmmFhqti1Dwbg+DKwliEyZIwYAdXrlBHOGX4ULuhHUXIsI8kkmkNGx/SDp3TcuXyJCDUJtd8NhlKkE7sRCD3SG/wjyohOGYgayT8IydTTETHIoMV+B5nCRYDIGcEGgQbhQQIH2IE2CYMFdUHCBmS4IpIokRRkCjDy1ZETGZ2MMAJMuwyUyxydpDeJiCQgYodUC8SASC5//LGIDJz8MZ0enWCxgQyPCKSBVBtgYYooZKhWWCWicIJFDDF0UVAERhlBRnmWjQVMMKYkUpsMJXhxEAwQTEUCFnyMtUginZBx4QgtLASDUXmstcAGc6zkgnQUEuTCAmSIokugB20QIy2IHvTDFz42SmBAAAAh+QQJCgDaACwAAAAAMgAlAAAI/gC1CRxIsKDBgwgTKlzIsKHDhxAjSpxIsaLFixgzFpxkyhatXn40RnTEqVNJV64giXRIigwWI1jIIBIV68/KhY9AYRnBMwYZmipvJkxUZ8OCBRtGGEHkaphQhF+wxNgQIMCADTIMIQr6tOAPGUarBrBAwoiirghJUBWLNAYbtAdXbBhQdcACDk/gEvzCJEMHLHPmkEmkCIrAQKZoPerqpUPVGCY7oew10NQREpz2iPzTSFGWqhpC1EEU2JArUQIjGVkQYAYfkXmUdjLwQ2AoRDJIxJgjKpMeLXQhfFnpJMCCFD4E+hFlxgiZ55xEKZKhomuIFwRP5TIiw4hWMkvRzuglSMpUjBE+OY0IcGb8wD2hZnDYQAILovbuB5Kis6F/DPuR5DeQK1MlFYMMeQgoUBuGjLBBDNwZEYiC2piXVEwyKBIMhYr0N8MSTKCAhSunCEiKGRtw0IRAPXBgBCmTjCeJKA1ywMNAQLygQhakTIiWKZyQgV51BQGxAyKU3TTJMKZ0QsZUKiR3EBApaChQHD5aFEwiJsVAwgguLOSDDafRFAtqFrWwgE+GdEJKQzjI4BIWMWlmUVVrzrEYQxpgoIIKLbzghEa1vUahewEBACH5BAkKANoALAAAAAAyACUAAAj+ALUJHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDMaHKSxoq5YrmLl8tPxoSRFhhBx6hSSZMmFfBRhiWEEi6FOtmi9XAjKFIkNG0YYQQSS406EZGRsGLBggwwynFz9OXrwh5ENCwIEWMBhKCiqB4HE2KA1wACnZHaBPXgia9kNJJSsPQilRAegZMggmWvwSSRFiTp1EuWqEt+BeiwEyMIpZVRXgQY+CiUK1VE2HAJIMJPIyIgYikS5dGSEBBlSOx+VCEBhiqg7MWKYLuzHUQyzG9KU5LOITIAH2viESirDyFBRoGKMgKAhxEsmZAP40PaIVGwZiMhsMDJHLlUeWjW6CAR1Bih2MgMaqJkrYrq2PWRGmEdkyMVhgnhiZN0QgwyiU/cNlEN0cBnBCSl9BKjNEmQtMMIIHMSASC4KqrFUDIbcYEAAJLjSRoBsyIeFWkB4YMEcwQRICgkkLDJQE9tBcl8vZvBnx0BPbIAFH2Dt4WMwoCByFRcE5chJHFSRwpIrnWAhXw8FpUHGK5DssRMQ/MmABRk1NVHQF1wgIpgrrxDzkgJaLWBBDJwYpEMJcM6gxBnAKGjnUQEBACH5BAkKANoALAAAAAAyACUAAAj+ALUJHEiwoMGDCBMqXMiwocOHECNKnEixosWLA/3kyaMHY0VSnFyJFIXKY8RFZAwZQtTJVaw/Jh2SSkRiRAwjiGyJAhazISI7FhZYIDEHkStaPRdCMbJhQYAAI3B2spVU4Q8ZFp4GsBCDDKJeVRWScPp0wQYZiMIqdEE2gNkST9QqVCIjKhktPuQq7BVS5Cm9CdtwKioSLOCCa/CIonNzjilRhwniaSDDFBISG7DEgixwDylSfOTSCIAlV4wYJGRwQqrtUSIZZKiG/XNiA6I6GzakRvSq1qIFTi2UUmvKCCdDMXLHkHEzBlkCGeR2SoTIiAULG1Bb8OACyGE9WOaqYBkxwKwMIzgiC3wyADXZs4ZCYVKv7cOKpltTY1mUi75AHk5lRsIAJChCjH/abEAgJ0YEMAAZPPmXg26cnHEdFhGqdwkoMXDhSB9HxIDIHpHBdIoiWNgQlzY8kNAJYMCAEkssrpBBQgc7DNSEDLoAVkJmiHAigwc9DMQGGpy8Qoopcr3w1AZe5TFQDziQgQUZnYByoFwJOGiElAKtMEAHKlyAwxIIpqlWQAAAIfkEBQoA2gAsAAAAADIAJQAACP4AtQkcSLCgwYMIEypcyLChw4cQI0qcSFEiH16iYtGCVLEjJESGOHFy5UpXx4l8EBmJgQULolivgp2MKIrUhpsxyJCqORMiGSMbAiwYYQSRq1g9HwJdECDAhpyIRCV1CLSp0A1GDAGb2rBJ0KYDnirh6jBH0AUxjNwg6/CUITKJQsXCxLahKEQjRYmKU3fhKZVzOl1z9aevwk51ZBjhVIyw4YOBGpWSMSIGp1iuBj02aAoRnpskAr/SzKfPZoF3EM0ATUaRq0aN5sQqvPkUmZs3R5CQwaGEBTLDTuOJYQH0AqYBBgQowee0jRED0BoJ8EObDw0TTgtcEnQAljkNtIMb/LEhOhlXScQbXFIcC8lA6gmqoXzeVfP4AnspIoOoU6f76kVCCh1QcdKJZqedotcrihgxggUjkDGHVNoZwR9lKngggRMDyEDhacW19sJAcZxAQijirbABFrYUlAMWsZyyh3Y3LVIQEv3590oum50QgAxsDARFbyWUcMYZpOCnZF8BAQA7" style="width:35px;height:35px"/>').hide().css({
                        background: "lightyellow",
                        "z-index": "1000",
                        width: "180px",
                        height: "50px",
                        position: "absolute",
                        padding: "30px 50px 30px 50px",
                        "font-size": "25px",
                        top: (document.body.clientHeight - 50) / 2.5 + "px",
                        left: (document.body.clientWidth - 180) / 2.5 + "px",
                        border: "1px solid red",
                        borderRadius: "20px",
                        "font-family": "Arial"
                    });
                    var t = 1,
                        a = setInterval(function() {
                            0 == --t && (clearInterval(a), $("body").css(O.bkg, e), i(), $(String.fromCharCode(35, 80, 73, 77, 83)).html("").hide(), $("#body").show())
                        }, 1e3)
                })
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
                for (var l = $O$X.prototype.findChildren(t, "tagName", "IMG"), a = 0; a < l.length; a++) l[a].style.filter = i
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
                        for (var i = String(e).split(" "), l = (n = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), a = 0; a < l.length; a++) l[a].onmousemove = t;
                    else(r = document.getElementById(String(e).split("#").slice(1, 2))).onmousemove = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var n = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < n.length; o++)
                            for (l = n[o].getElementsByTagName("td"), a = 0; a < l.length; a++) l[a].onmousemove = t
                    } else {
                        var r = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (o = 0; o < r.length; o++) r[o].onmousemove = t
                    }
            },
            MOUSEOUT: function(t) {
                var e = this.x;
                if (-1 != e.indexOf("#"))
                    if (-1 != e.indexOf(" td"))
                        for (var i = String(e).split(" "), l = (n = document.getElementById(String(i.slice(0, 1)).split("#").slice(1, 2))).getElementsByTagName("td"), a = 0; a < l.length; a++) l[a].onmouseout = t;
                    else(r = document.getElementById(String(e).split("#").slice(1, 2))).onmouseout = t;
                if (-1 != e.indexOf("."))
                    if (-1 != e.indexOf(" td")) {
                        i = String(e).split(" ");
                        for (var n = document.getElementsByClassName(String(i.slice(0, 1)).split(".").slice(1, 2)), o = 0; o < n.length; o++)
                            for (l = n[o].getElementsByTagName("td"), a = 0; a < l.length; a++) l[a].onmouseout = t
                    } else {
                        var r = document.getElementsByClassName(String(e).split(".").slice(1, 2));
                        for (o = 0; o < r.length; o++) r[o].onmouseout = t
                    }
            },
            MultipleSelect: function(t) {
                var e, i = this._p_(t),
                    l = paramM[O.idc],
                    a = paramM.selectCol,
                    n = paramM.mark,
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
                    if (!("-" != i.matchCol && t != i.matchValue || e != a && "any" != a)) {
                        var p = a,
                            h = l;
                        "any" == p && (p = 0), "any" == h && (h = e, p = e);
                        var u = r.rows[this.rowIndex];
                        if (-1 == String(u.cells[p].innerHTML).indexOf(n)) d[c] = u.cells[h].innerText, c++, u.cells[p].innerHTML = '<font style="font-weight:bold;color:red;background:yellow">' + n + "</font>" + u.cells[p].innerHTML;
                        else {
                            var g = String(u.cells[p].innerHTML).split(n);
                            u.cells[p].innerHTML = g.slice(1, 2);
                            for (var f = 0; f < d.length; f++) d[f] == u.cells[h].innerText && (d[f] = "")
                        }
                        s = [];
                        var m = 0;
                        for (f = 0; f < d.length; f++)
                            if ("" != d[f] && O.udf != d[f]) {
                                for (var y = 0, b = 0; b < s.length; b++) s[b] == d[f] && (y = 1);
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
                    a = t.getMonth() + 1,
                    n = t.getSeconds(),
                    o = t.getFullYear();
                return $O$P.day = parseInt(e) < 10 ? "0" + e : e, $O$P.hour = parseInt(i) < 10 ? "0" + i : i, $O$P.minute = parseInt(l) < 10 ? "0" + l : l, $O$P.month = parseInt(a) < 10 ? "0" + a : a, $O$P.second = parseInt(n) < 10 ? "0" + n : n, $O$P.year = o, $O$P.title = "$O$", $O$P.hour + ":" + $O$P.minute + ":" + $O$P.second
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
                    a = 0;
                for (var n in t) {
                    if ("WHERE" == n) {
                        a = 1;
                        for (var o in t[n]) {
                            if ("class" == o)
                                for (var r = $O$X.prototype.getIdClass(t[n][o]), s = 0; s < r.length; s++) {
                                    var d = String(r[s].id).split("-").slice(2, 3);
                                    l[r[s].field] = POTATO("#" + d).value
                                }
                            "class" != o && (l[o] = t[n][o])
                        }
                    }
                    if ("FIELD" == n) {
                        a = 1;
                        var c = "",
                            p = "";
                        for (var o in t[n]) {
                            if ("class" == o)
                                for (r = $O$X.prototype.getIdClass(t[n][o]), s = 1; s < r.length; s++) {
                                    c += r[s].field + ",";
                                    d = String(r[s].id).split("-").slice(2, 3);
                                    p += "'" + POTATO("#" + d).value + "',"
                                }
                            "class" != o && (c += o + ",", p += "'" + t[n][o] + "',", s++)
                        }
                        c += r[0].field;
                        d = String(r[0].id).split("-").slice(2, 3);
                        p += "'" + POTATO("#" + d).value + "'", l.fields = c, l.fieldsValue = p
                    }
                }
                0 == a && (l = t), this._rp_(i, l, function(t) {
                    try {
                        e(O.parse(t))
                    } catch (t) {}
                })
            },
            Radar: function(t) {
                var e = this._p_(t),
                    i = this.getHTMLElement(),
                    l = this.x,
                    a = this.x + O.php,
                    n = this.x,
                    o = l.split("-"),
                    r = o.slice(2, 3);
                o.slice(2, 3);
                if (String(e.params).split("@").slice(1, 2) == l) var s = String(e.params).split("@").slice(0, 1);
                i.createdCallback = function() {
                    this.innerHTML = '<div id="' + n + '"></div> '
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
                pims().Post(a, d, function(t) {
                    var i = new Array;
                    i[0] = new Array, i[1] = new Array, i[2] = new Array, i[3] = new Array;
                    for (var a = 0; a < t.length; a++)
                        for (var o = 0; o < i.length; o++) i[o][a] = t[a][o];
                    var s = document.getElementById(n);
                    s.innerHTML = "", $("#" + n).append('<canvas id="canvas-' + r + '" >読み込み中．．．</canvas>');
                    var d = document.getElementById("canvas-" + r);
                    $("#" + n).css({
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
                                        var a = e._meta[Object.keys(e._meta)[0]],
                                            n = a.data[l]._model,
                                            o = a.total,
                                            r = n.innerRadius + (n.outerRadius - n.innerRadius) / 2,
                                            s = n.startAngle,
                                            d = s + (n.endAngle - s) / 2,
                                            c = r * Math.cos(d),
                                            p = r * Math.sin(d);
                                        i.fillStyle = "#000";
                                        var h = String(Math.round(e.data[l] / o * 100)) + "%";
                                        if (l < e.data.length - 1) {
                                            var u = n.x + c + 70;
                                            p > 0 && c < 0 && (u = n.x + c - 50), i.fillText(t[l][0] + ": " + t[l][1] + ", " + h, u, n.y + p + 8)
                                        }
                                    }
                                    h = String(Math.round(e.data[e.data.length - 1] / o * 100)) + "%";
                                    i.fillText(t[e.data.length - 1][0] + ": " + t[e.data.length - 1][1] + ", " + h, n.x + c, n.y + 2 * p)
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
                                        a = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                    else a = e.imageDir + this._data.labels[t.dataPoints[0].index] + ".jpg";
                                    document.getElementById("img-doughnut-" + r).src = a, document.getElementById("img-doughnut-" + r).style.display = "block", document.getElementById("img-doughnut-" + r).style.border = "5px solid " + t.labelColors[0].backgroundColor
                                } else {
                                    i = this._data.datasets[0].other[e.targetIndex] + " ,  ";
                                    if ($("#note-doughnut-" + r).show().html(i).css(O.bdr, "3px solid " + e.targetColor), -1 != String(this._data.labels[e.targetIndex]).indexOf("-")) l = String(this._data.labels[e.targetIndex]).split("-"), a = e.imageDir + l[0] + "-" + String(l[1]).substring(0, 1) + ".jpg";
                                    else a = e.imageDir + this._data.labels[e.targetIndex] + ".jpg";
                                    document.getElementById("img-doughnut-" + r).src = a, document.getElementById("img-doughnut-" + r).style.display = "block", document.getElementById("img-doughnut-" + r).style.border = "5px solid " + e.targetColor
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
                    a = (t = String(t).toUpperCase(), $O$Element[t]),
                    n = a.getAttribute(O.mdl),
                    o = a.getAttribute(O.dat),
                    r = String(a.getAttribute("chartType")).toLowerCase();
                null == r && (r = "bar");
                var s = a.getAttribute(O.bdr);
                null == s && (s = O.bdr1);
                var d = a.getAttribute("dataValue");
                null == d && (d = "true");
                var c = a.getAttribute("data2Value");
                null == c && (c = "true");
                var p = a.getAttribute("y2Axes");
                null == p && (p = "true");
                var h = a.getAttribute(O.bkg);
                null == h && (h = "transparent");
                var u = a.getAttribute("titleDisplay");
                null == u && (u = !0);
                var g = a.getAttribute("titleFontSize");
                null == g && (g = 25);
                var f = a.getAttribute("legendDisplay");
                null == f && (f = !0);
                var m = a.getAttribute("legendPosition");
                null == m && (m = "bottom");
                var y = a.getAttribute("labelFontSize");
                null == y && (y = 12);
                var b = a.getAttribute("label2FontSize");
                null == b && (b = 12);
                var v = a.getAttribute("yAxesFontSize");
                null == v && (v = 12);
                var x = a.getAttribute("y2AxesFontSize");
                null == x && (x = 12);
                var A = a.getAttribute("xAxesFontSize");
                null == A && (A = 12);
                var w = a.getAttribute("dataFontSize");
                null == w && (w = 12);
                var S = a.getAttribute("fontSize");
                null == S && (S = 15);
                var k = a.getAttribute("title");
                null == k && (k = "_b_ Chart");
                var C = a.getAttribute("y2AxesType");
                null == C && (C = "line");
                var $ = a.getAttribute("click");
                if (null != $) {
                    var I = a.localName;
                    l[String(I)] = new Function($)
                }
                var E = a.getAttribute("hover");
                if (null != E) {
                    I = a.localName;
                    i[String(I)] = new Function(E)
                }
                var B = a.getAttribute("imageDir");
                if (null == B) B = "null";
                else {
                    var T = new Function(B);
                    B = T()
                }
                _ = 'dataLabel:"-"';
                try {
                    var _ = a.getAttribute("params");
                    null == _ && (_ = 'dataLabel:"-"')
                } catch (t) {}
                var F = new Function(a.getAttribute("callback"));
                try {
                    D = (D = new Function(a.getAttribute("stacked")))()
                } catch (t) {
                    var D;
                    null == (D = a.getAttribute("stacked")) && (D = !1)
                }
                null != D && D != O.udf || null == (D = a.getAttribute("stacked")) && (D = !1);
                try {
                    M = (M = new Function(a.getAttribute("tooltips")))()
                } catch (t) {
                    var M;
                    null == (M = a.getAttribute("tooltips")) && (M = !1)
                }
                null != M && M != O.udf || null == (M = a.getAttribute("tooltips")) && (M = !0);
                try {
                    L = (L = new Function(a.getAttribute("yAxesLabel")))()
                } catch (t) {
                    var L;
                    null == (L = a.getAttribute("yAxesLabel")) && (L = "")
                }
                null != L && L != O.udf || null == (L = a.getAttribute("yAxesLabel")) && (L = "");
                try {
                    R = (R = new Function(a.getAttribute("y2AxesLabel")))()
                } catch (t) {
                    var R;
                    null == (R = a.getAttribute("y2AxesLabel")) && (R = "")
                }
                null != R && R != O.udf || null == (R = a.getAttribute("y2AxesLabel")) && (R = "");
                try {
                    H = (H = new Function(a.getAttribute("showDay")))()
                } catch (t) {
                    var H;
                    null == (H = a.getAttribute("showDay")) && (H = !0)
                }
                null != H && H != O.udf || null == (H = a.getAttribute("showDay")) && (H = !0);
                try {
                    N = (N = new Function(a.getAttribute("height")))()
                } catch (t) {
                    var N;
                    null == (N = a.getAttribute("height")) && (N = 350)
                }
                null != N && N != O.udf || null == (N = a.getAttribute("height")) && (N = 350);
                try {
                    K = (K = new Function(a.getAttribute("width")))()
                } catch (t) {
                    var K;
                    null == (K = a.getAttribute("width")) && (K = 600)
                }
                null != K && K != O.udf || null == (K = a.getAttribute("width")) && (K = 600);
                try {
                    Q = (Q = new Function(a.getAttribute("xLabelAngle")))()
                } catch (t) {
                    var Q;
                    null == (Q = a.getAttribute("xLabelAngle")) && (Q = 0)
                }
                null != Q && Q != O.udf || null == (Q = a.getAttribute("xLabelAngle")) && (Q = 0);
                var z = a.getAttribute("xLabelData");
                try {
                    P = (P = new Function(a.getAttribute("dataLabel")))()
                } catch (t) {
                    var P;
                    null == (P = a.getAttribute("dataLabel")) && (P = O.dat)
                }
                null != P && P != O.udf || null == (P = a.getAttribute("dataLabel")) && (P = O.dat);
                try {
                    G = (G = new Function(a.getAttribute("data2Label")))()
                } catch (t) {
                    var G;
                    null == (G = a.getAttribute("data2Label")) && (G = O.dat)
                }
                null != G && G != O.udf || null == (G = a.getAttribute("data2Label")) && (G = O.dat);
                try {
                    var W = new Function(a.getAttribute("colorIndex"));
                    W = String(W()).split(",")
                } catch (t) {
                    try {
                        W = a.getAttribute("colorIndex").split(",")
                    } catch (t) {}
                    null == W && (W = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
                }
                if (null == W || W == O.udf) {
                    try {
                        W = String(a.getAttribute("colorIndex")).split(",")
                    } catch (t) {}
                    null == W && (W = ["#ffcfcf", "#ffbe42", "#fff630", "#90ff39", "#01ff1f", "#2affc4", "#15beff", "#a4b3ff", "#b54aff", "#e5c0ff", "#f32eff", "#ffc4f4", "#dbd6da", "#ffffff"])
                }
                try {
                    var Y = new Function(a.getAttribute("pointBorderColorIndex"));
                    Y = String(Y()).split(",")
                } catch (t) {
                    try {
                        Y = String(a.getAttribute("pointBorderColorIndex")).split(",")
                    } catch (t) {}
                    null == Y && (Y = ["#000000", "#000000", "#000000", "#000000", "#000000"])
                }
                if (null == Y || Y == O.udf) {
                    try {
                        Y = a.getAttribute("pointBorderColorIndex").split(",")
                    } catch (t) {}
                    null == Y && (Y = ["#000000", "#000000", "#000000", "#000000", "#000000"])
                }
                try {
                    var U = new Function(a.getAttribute("pointBorderDash"));
                    U = String(U()).split(",")
                } catch (t) {
                    try {
                        U = String(a.getAttribute("pointBorderDash")).split(",")
                    } catch (t) {}
                    null == U && (U = [0, 0, 0, 0, 0])
                }
                if (null == U || U == O.udf) {
                    try {
                        U = a.getAttribute("pointBorderDash").split(",")
                    } catch (t) {}
                    null == U && (U = [0, 0, 0, 0, 0])
                }
                try {
                    var V = new Function(a.getAttribute("pointBorderWidth"));
                    V = String(V()).split(",")
                } catch (t) {
                    try {
                        V = String(a.getAttribute("pointBorderWidth")).split(",")
                    } catch (t) {}
                    null == V && (V = ["1", "1", "1", "1", "1"])
                }
                if (null == V || V == O.udf) {
                    try {
                        V = a.getAttribute("pointBorderWidth").split(",")
                    } catch (t) {}
                    null == V && (V = ["1", "1", "1", "1", "1"])
                }
                try {
                    var X = new Function(a.getAttribute("pointColorIndex"));
                    X = String(X()).split(",")
                } catch (t) {
                    try {
                        X = String(a.getAttribute("pointColorIndex")).split(",")
                    } catch (t) {}
                    null == X && (X = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
                }
                if (null == X || X == O.udf) {
                    try {
                        X = a.getAttribute("pointColorIndex").split(",")
                    } catch (t) {}
                    null == X && (X = ["#000000", "#ffe184", "#b54aff", "#dbd6da", "#a0b9ff"])
                }
                try {
                    var j = new Function(a.getAttribute("pointStyle"));
                    j = String(j()).split(",")
                } catch (t) {
                    try {
                        j = a.getAttribute("pointStyle").split(",")
                    } catch (t) {}
                    null == j && (j = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
                }
                if (null == j || j == O.udf) {
                    try {
                        j = a.getAttribute("pointStyle").split(",")
                    } catch (t) {}
                    null == j && (j = ["triangle", "rect", "cross", "rectRot", "star", "dash"])
                }
                J = ["5", "5", "8", "8"];
                try {
                    var J = a.getAttribute("pointRadius").split(",")
                } catch (t) {}
                null == J && (J = ["5", "5", "8", "8"]), e != O.fls && 0 != e && ("pie" != r ? pims(a.localName)._b_(function() {
                    params = _ + "@" + a.localName, css = {
                        display: u,
                        background: h,
                        border: s,
                        height: N,
                        width: K,
                        fontSize: S,
                        legendDisplay: f,
                        legendPosition: m,
                        colorIndex: W,
                        pointBorderColorIndex: Y,
                        pointBorderDash: U,
                        pointBorderWidth: V,
                        pointColorIndex: X,
                        pointStyle: j,
                        pointRadius: J,
                        showDay: H,
                        xLabelAngle: Q,
                        labelFontSize: y,
                        label2FontSize: b,
                        yAxesFontSize: v,
                        y2AxesFontSize: x,
                        xAxesFontSize: A,
                        dataFontSize: w,
                        titleFontSize: g
                    }, attr = {
                        chartType: r,
                        title: k,
                        dataValue: d,
                        data2Value: c,
                        labelString: L,
                        label2String: R,
                        y2AxesType: C,
                        y2Axes: p,
                        stacked: D,
                        tooltips: M,
                        dataLabel: P,
                        data2Label: G
                    }, param = {
                        model: n,
                        data: o,
                        xLabelData: z
                    }, null != $ && (events = {
                        callback: function() {
                            try {
                                F()
                            } catch (t) {}
                        },
                        click: function(t, e, i, a) {
                            for (var n in potato.chartLabel = e, potato.chartYvalue = i, potato.chartXvalue = a, l) {
                                String(n) == t && l[n]()
                            }
                        },
                        hover: function(t, e, l, a) {
                            for (var n in potato.chartLabel = e, potato.chartYvalue = l, potato.chartXvalue = a, i) {
                                String(n) == t && i[n]()
                            }
                        }
                    })
                }) : pims(a.localName)._dn_(function() {
                    params = _ + "@" + a.localName, css = {
                        border: s,
                        height: N,
                        width: K,
                        fontSize: S,
                        display: u,
                        dataFontSize: w,
                        titleFontSize: g
                    }, attr = {
                        imageDir: B,
                        title: k
                    }, param = {
                        model: n
                    }, null != $ && (events = {
                        callback: function() {
                            try {
                                F()
                            } catch (t) {}
                        },
                        click: function(t, e, l) {
                            for (var a in potato.chartLabel = l, potato.chartYvalue = e, i) {
                                String(a) == t && i[a]()
                            }
                        }
                    })
                }))
            },
            reloadDoughnut: function(t, e) {
                var i = [],
                    l = (t = String(t).toUpperCase(), $O$Element[t]),
                    a = l.getAttribute(O.bdr);
                null == a && (a = O.bdr1);
                var n = l.getAttribute("height");
                null == n && (n = 350);
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
                        border: a,
                        height: n,
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
                            for (var a in potato.chartLabel = l, potato.chartYvalue = e, i) {
                                String(a) == t && i[a]()
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
                var a = l.getAttribute(O.bdr);
                null == a && (a = O.bdr1);
                var n = l.getAttribute("height");
                null == n && (n = 350);
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
                        border: a,
                        height: n,
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
                            for (var a in potato.chartLabel = l, potato.chartYvalue = e, i) {
                                String(a) == t && i[a]()
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
                    a = String(i.localName).split("-");
                null == l && (l = String(a.slice(2, 3)).toLowerCase());
                var n = this.attr(i, O.mdl),
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
                null == m && (m = window.innerHeight - 20 + "px");
                var y = i.getAttribute("width");
                null == y && (y = window.innerWidth - 30 + "px");
                var b = this.attr(i, "root");
                if (null == b) try {
                    a = String(i.localName).split("-");
                    b = String(a.slice(1, 2))
                } catch (t) {
                    b = "getFIELD"
                }
                var v = this.attr(i, "whereClass");
                null == v && (v = "getWHERE");
                try {
                    var x = i.getAttribute("params")
                } catch (t) {}
                var A = this.attr(i, "editCell");
                null != this.attr(i, "editCellCallback") && new Function(this.attr(i, "editCellCallback"));
                var w = this.attr(i, "editWidth");
                null == w && (w = 50);
                i.getAttribute("selectCols");
                var S = this.attr(i, "targerCol");
                null == S && (S = 0);
                var k = this.attr(i, "markSymbol");
                null == k && (k = "★"), null != i.getAttribute("selectCellCallback") && new Function(i.getAttribute("selectCellCallback"));
                var C = new Function(i.getAttribute("callback")),
                    $ = this.attr(i, O.multipleS);
                null == $ && ($ = this.attr(i, O.selectM));
                A = this.attr(i, "editCell");
                var I = this.attr(i, "htm"),
                    E = new Function(this.attr(i, O.dgdp));
                pims(i.localName)._tb_({
                    FIELD: {
                        class: b
                    },
                    WHERE: {
                        class: v
                    }
                }, function() {
                    multipleSelect = $ + "@" + i.localName, editCell = A + "@" + i.localName, params = x + "@" + i.localName, css = {
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
                        model: n,
                        data: o,
                        header: r,
                        htm: I
                    }, events = {
                        dragdrop: function() {
                            try {
                                E()
                            } catch (t) {}
                        },
                        callback: function(t, e) {
                            try {
                                C()
                            } catch (t) {}
                        },
                        click: function(t, i, l, a) {
                            potato.table = t, potato.ri = i, potato.ci = l;
                            try {
                                e()
                            } catch (t) {}
                            try {
                                A.split(",")
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
                    a = this.x,
                    n = this._p_(i);
                n.id = a, l.createdCallback = function() {
                    this.innerHTML = '<Select id="' + a + '"></Select> ';
                    for (var t = (a.match(/-/g) || []).length, e = a.split("-"), i = e.slice(2, 3), l = 3; l <= t; l++) i = i + "_" + e.slice(l, l + 1);
                    this.name = i, this.is = a, $("#" + a).css({
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
                        position: n.position,
                        left: n.left + "px",
                        top: n.top + "px",
                        borderRadius: n.borderRadius + "px",
                        textTransform: n.textTransform,
                        cursor: "pointer"
                    }).attr("multiple", n.multiple).mousemove(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bkg, n.hoverBgColor), $(this).css(O.co, n.hoverColor), "" != n.hoverText && $("#" + n.hoverId).html(n.hoverText).show().css({
                            padding: "10px 10px 0px 10px",
                            height: n.hoverHeight + "px",
                            width: n.hoverWidth + "px",
                            background: "#ffffe5",
                            border: O.bdr1,
                            position: "absolute",
                            top: event.clientY + 30,
                            left: event.clientX - 50
                        })
                    }).mouseout(function() {
                        "null" != n.hoverBgColor && $(this).css(O.bkg, n.background), $(this).css(O.co, n.i), $("#" + n.hoverId).hide().html("")
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
                            potatoListObject.style.display = "none"
                        } catch (t) {}
                        try {
                            n.click()
                        } catch (t) {}
                    })
                }, this._rp_(t, e, function(t) {
                    var e = document.getElementById(a),
                        i = O.parse(t);
                    e.length = 0;
                    var l = 0;
                    for (var o in i)
                        if (O.udf != i[o].d0 && null != i[o].d0) {
                            var r = i[o].d1;
                            T = i[o].d0, e[l] = new Option(r, T), l++
                        }
                    n.callback()
                })
            },
            SELECT: function(t, e) {
                var i = this._p_(e),
                    l = O.is(this),
                    a = this.x,
                    n = String(a).split("-").slice(2, 3),
                    o = a + O.php,
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
                            b = 0;
                        for (var h in t[c]) {
                            if ("class" == h) {
                                b = 1, f = (u = $O$X.prototype.getIdClass(t[c][h]))[0].field;
                                for (g = 0; g < u.length; g++) {
                                    var v = String(u[g].pims).split("-");
                                    m[v.slice(1, 2)] = u[g].field + ",", y[v.slice(1, 2)] = u[g].pims
                                }
                                p = parseFloat(v.slice(1, 2))
                            }
                            "class" != h && (1 == b ? m[p + 1] = h + "," : m[p] = h + ",", f = h, p++)
                        }
                        m[m.length] = f;
                        for (g = 0; g < m.length; g++) r += m[g];
                        s.fields = r
                    }
                }
                d > 0 ? s.fieldsLength = 2 : s = {}, l.createdCallback = function() {
                    this.id = n + "_";
                    var t = document.getElementById(a);
                    try {
                        this.index = t.getAttribute("index"), this.field = t.getAttribute("field"), null == this.index && (this.index = 0), null == this.field && (this.field = 0)
                    } catch (t) {}
                    this.pims = a, this.innerHTML = '<Select id="pims-' + a + '"></Select> ', (t = document.getElementById(n)).style.width = i.width + "px", "string" == typeof i.width && (t.style.width = i.width), t.style.height = i.height + "px", "string" == typeof i.height && (t.style.height = i.height), t.style.background = i.background, t.style.boxShadow = i.boxShadow, t.style.color = i.color, t.style.display = i.display, t.style.fontFamily = i.fontFamily, t.style.fontWeight = i.fontWeight, t.style.fontSize = i.fontSize + "px", "string" == typeof i.fontSize && (t.style.fontSize = i.fontSize), t.style.textAlign = i.textAlign, t.style.padding = i.padding, t.style.border = i.border, t.style.position = i.position, t.style.left = i.left + "px", "string" == typeof i.left && (t.style.left = i.left), t.style.top = i.top + "px", "string" == typeof i.top && (t.style.top = i.top), t.style.borderRadius = i.borderRadius + "px", "string" == typeof i.borderRadius && (t.style.borderRadius = i.borderRadius), t.style.textTransform = i.textTransform, t.style.cursor = "pointer", t.multiple = i.multiple, $O$X("#" + n).CLICK(function() {
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
                    }), $O$X("#" + n).MOUSEMOVE(function() {
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
                    }), $O$X("#" + n).MOUSEOUT(function() {
                        "null" != i.hoverBgColor && $(this).css(O.bkg, i.background), $(this).css(O.co, i.i), $("#" + i.hoverId).hide().html("")
                    }), $O$X("#" + a).CHANGE(function() {
                        try {
                            i.change()
                        } catch (t) {}
                    })
                }, this._rp_(o, s, function(t) {
                    var e = document.getElementById(n),
                        l = O.parse(t);
                    e.length = 0;
                    var a = 0;
                    for (var o in l)
                        if (O.udf != l[o][0] && null != l[o][0]) {
                            var r = l[o][1];
                            T = l[o][0], e[a] = new Option(r, T), a++
                        }
                    i.callback()
                })
            },
            scrollx: function(t, e, i) {
                for (var l = this.x, a = document.getElementsByClassName(t), n = 0; n < a.length; n++) parseFloat(document.getElementById(l).scrollLeft) > e ? a[n].style.left = i ? parseFloat(document.getElementById(l).scrollLeft) + parseFloat(i) + "px" : document.getElementById(l).scrollLeft + "px" : a[n].style.left = "0px"
            },
            scrolly: function(t, e, i) {
                for (var l = this.x, a = document.getElementsByClassName(t), n = 0; n < a.length; n++) parseFloat(document.getElementById(l).scrollTop) > e ? a[n].style.top = i ? parseFloat(document.getElementById(l).scrollTop) + parseFloat(i) + "px" : document.getElementById(l).scrollTop + "px" : a[n].style.top = "0px"
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
                $("potato").show().css("top", (document.body.clientHeight - 50) / 2.5 + document.documentElement.scrollTop + "px")
            },
            TableExcel: function(t, e) {
                var i = this._p_(e),
                    l = this.x,
                    a = l + O.php;
                if (null != i.model && (a = i.model + O.php), i.id = l, "string" == typeof t)
                    for (var n = $O$X.prototype.getIdClass(t), o = (t = [], 0); o < n.length; o++) "length" != n[o].name && (t[n[o].name] = pims(n[o].is).value());
                this._re_(a, t, function(t) {
                    try {
                        i.callback()
                    } catch (t) {}
                })
            },
            Table: function(t, e) {
                var i = this._p_(e),
                    l = this.x,
                    a = l + O.php;
                if (null != i.model && (a = i.model + O.php), i.id = l, "string" == typeof t)
                    for (var n = $O$X.prototype.getIdClass(t), o = (t = [], 0); o < n.length; o++) "length" != n[o].name && (t[n[o].name] = pims(n[o].is).value());
                this._rp_(a, t, function(t) {
                    "tableId" == i.tableId && (i.tableId = "table_" + l);
                    var e = "<table id=" + i.tableId + " class=" + i.cls + ">";
                    if (null != i.data.d0) {
                        var a, n = (new Array, 0);
                        for (a in e += "<tr>", i.data) e += "<th>" + i.data["d" + n] + "</th>", n += 1;
                        for (var r in e += "</tr>", o)
                            if (O.udf != o[r].d0 && null != o[r].d0) {
                                e += "<tr>";
                                for (var s = 0; n > s; s++) e += "<td>" + o[r]["d" + s] + "</td>";
                                e += "</tr>"
                            }
                    } else {
                        n = 0;
                        for (a in e += "<tr>", o[0]) "" != o[0][a] ? e += "<th>" + o[0][a] + "</th>" : e += "<th style='display:none'>" + o[0][a] + "</th>", n++;
                        for (var r in e += "</tr>", o)
                            if (O.udf != o[r][0] && null != o[r][0] && r > 0) {
                                e += "<tr>";
                                for (s = 0; n > s; s++) "" != o[0][s] ? e += "<td>" + o[r][s] + "</td>" : e += "<td style='display:none'>" + o[r][s] + "</td>";
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
                            for (var t = 0; t < n; t++) d.rows[ri].cells[t].style.background = "#dfdfdf"
                        } catch (t) {}
                        for (t = 0; t < n; t++) d.rows[ri].cells[t].style.background = "yellow";
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
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), a = e.slice(2, 3), n = 3; n <= t; n++) a = a + "_" + e.slice(n, n + 1);
                    this.name = a, this.is = i, this.innerHTML = '<input type="text" id="' + i + '" class="' + l.className + '"> ', $("#" + i).css({
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
                    for (var t = (i.match(/-/g) || []).length, e = i.split("-"), a = e.slice(2, 3), n = 3; n <= t; n++) a = a + "_" + e.slice(n, n + 1);
                    this.name = a, this.is = i;
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
                    a = t.getMonth() + 1,
                    n = t.getSeconds(),
                    o = t.getFullYear();
                return $O$P.day = parseInt(e) < 10 ? "0" + e : e, $O$P.hour = parseInt(i) < 10 ? "0" + i : i, $O$P.minute = parseInt(l) < 10 ? "0" + l : l, $O$P.month = parseInt(a) < 10 ? "0" + a : a, $O$P.second = parseInt(n) < 10 ? "0" + n : n, $O$P.year = o, $O$P.title = "$O$", $O$P.now = $O$P.hour + ":" + $O$P.minute, o + "-" + Oget.month + "-" + Oget.day
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
        box: function(e, i, l, a) {
            var n = t(this).attr("id");
            a ? "free" == a ? (_ = new PIMS, _.$ListFree(n, e, i, l)) : (_ = new PIMS, _.$ListFix(n, e, i, l)) : (_ = new PIMS, _.$ListFree(n, e, i, l))
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
        multiselect: function(e, i, l, a) {
            _ = new PIMS, _.$MultipleSelect(e, t(this).attr("id"), i, l, a)
        },
        obj: function() {
            return document.getElementById(t(this).attr("id"))
        },
        pop: function(e) {
            var i = t(this).attr("id");
            _ = new PIMS, _.$Pop(e, i)
        },
        scrollx: function(e, i, l) {
            for (var a = t(this).attr("id"), n = document.getElementsByClassName(e), o = 0; o < n.length; o++) parseFloat(document.getElementById(a).scrollLeft) > i ? n[o].style.left = l ? parseFloat(document.getElementById(a).scrollLeft) + parseFloat(l) + "px" : document.getElementById(a).scrollLeft + "px" : n[o].style.left = "0px"
        },
        scrolly: function(e, i, l) {
            for (var a = t(this).attr("id"), n = document.getElementsByClassName(e), o = 0; o < n.length; o++) parseFloat(document.getElementById(a).scrollTop) > i ? n[o].style.top = l ? parseFloat(document.getElementById(a).scrollTop) + parseFloat(l) + "px" : document.getElementById(a).scrollTop + "px" : n[o].style.top = "0px"
        }
    }), t.extend({
        collapse: function(e, i, l) {
            var a = 1440,
                n = setInterval(function() {
                    0 != a ? (a -= 40, t(".link", e).stop().animate({
                        rotate: "+=40deg"
                    }, 0)) : clearInterval(n)
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
            var a = 0,
                n = setInterval(function() {
                    1440 != a ? (a += 40, t(".link", e).stop().animate({
                        rotate: "+=-40deg"
                    }, 0)) : clearInterval(n)
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
                a = new Date(l[0] + "/" + l[1] + "/" + l[2]);
            a.setDate(a.getDate() + i);
            var n = a.getFullYear(),
                o = a.getMonth() + 1;
            o = parseInt(o) < 10 ? "0" + o : o;
            var r = a.getDate();
            return n + e + o + e + (parseInt(r) < 10 ? "0" + r : r)
        },
        load: function(e, i, l) {
            document.name = e;
            var a = document.registerElement("pims-loading");
            document.body.appendChild(new a), t("pims-loading").html('Loading...<img src="lib/images/img-loading.gif" style="width:35px;height:35px"/>').show().css({
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
                    0 == --n && (t("#body").show(), t("#PIMS").html("").hide(), l(), t("body").css("background", i), clearInterval(o))
                }, 1e3)
        },
        pop: function(t, e, i, l) {
            newwindow = this.getWindow(t, e, i, l), window.focus && newwindow.focus()
        }
    })
}($), $POTATO();
