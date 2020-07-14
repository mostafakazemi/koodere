function _hasAncestor(t, e) {
    for (; (t = t.parentElement) && !t.classList.contains(e);) ;
    return t
}

function latlngDistance(t, e) {
    lat1 = t.lat, lng1 = t.lng, lat2 = e.lat, lng2 = e.lng;
    var i = Math.PI * parseFloat(lat1) / 180, n = Math.PI * parseFloat(lat2) / 180, o = lng1 - lng2,
        s = Math.PI * o / 180, a = Math.sin(i) * Math.sin(n) + Math.cos(i) * Math.cos(n) * Math.cos(s);
    return a = 60 * (a = 180 * (a = Math.acos(a)) / Math.PI) * 1.1515, (a *= 1.609344).toFixed(1)
}

function latlngToDms(t) {
    var e = Math.floor(t), i = 60 * (t - e), n = Math.floor(i), o = 60 * (i - n), s = Math.round(o);
    return 60 == s && (n++, s = 0), 60 == n && (e++, n = 0), {degree: e, minute: n, second: s}
}

!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.L = {})
}(this, function (t) {
    "use strict";

    function e(t) {
        var e, i, n, o;
        for (i = 1, n = arguments.length; i < n; i++) for (e in o = arguments[i]) t[e] = o[e];
        return t
    }

    function i(t, e) {
        var i = Array.prototype.slice;
        if (t.bind) return t.bind.apply(t, i.call(arguments, 1));
        var n = i.call(arguments, 2);
        return function () {
            return t.apply(e, n.length ? n.concat(i.call(arguments)) : arguments)
        }
    }

    function n(t) {
        return t._leaflet_id = t._leaflet_id || ++jt, t._leaflet_id
    }

    function o(t, e, i) {
        var n, o, s, a;
        return a = function () {
            n = !1, o && (s.apply(i, o), o = !1)
        }, s = function () {
            n ? o = arguments : (t.apply(i, arguments), setTimeout(a, e), n = !0)
        }
    }

    function s(t, e, i) {
        var n = e[1], o = e[0], s = n - o;
        return t === n && i ? t : ((t - o) % s + s) % s + o
    }

    function a() {
        return !1
    }

    function r(t, e) {
        var i = Math.pow(10, e || 5);
        return Math.round(t * i) / i
    }

    function l(t) {
        return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
    }

    function c(t) {
        return l(t).split(/\s+/)
    }

    function d(t, e) {
        for (var i in t.hasOwnProperty("options") || (t.options = t.options ? Ht(t.options) : {}), e) t.options[i] = e[i];
        return t.options
    }

    function u(t, e, i) {
        var n = [];
        for (var o in t) n.push(encodeURIComponent(i ? o.toUpperCase() : o) + "=" + encodeURIComponent(t[o]));
        return (e && -1 !== e.indexOf("?") ? "&" : "?") + n.join("&")
    }

    function h(t, e) {
        return t.replace(Ft, function (t, i) {
            var n = e[i];
            if (void 0 === n) throw new Error("No value provided for variable " + t);
            return "function" == typeof n && (n = n(e)), n
        })
    }

    function p(t, e) {
        for (var i = 0; i < t.length; i++) if (t[i] === e) return i;
        return -1
    }

    function m(t) {
        return window["webkit" + t] || window["moz" + t] || window["ms" + t]
    }

    function f(t) {
        var e = +new Date, i = Math.max(0, 16 - (e - Vt));
        return Vt = e + i, window.setTimeout(t, i)
    }

    function _(t, e, n) {
        if (!n || qt !== f) return qt.call(window, i(t, e));
        t.call(e)
    }

    function g(t) {
        t && Yt.call(window, t)
    }

    function v() {
    }

    function y(t, e, i) {
        this.x = i ? Math.round(t) : t, this.y = i ? Math.round(e) : e
    }

    function b(t, e, i) {
        return t instanceof y ? t : Ut(t) ? new y(t[0], t[1]) : null == t ? t : "object" == typeof t && "x" in t && "y" in t ? new y(t.x, t.y) : new y(t, e, i)
    }

    function w(t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }

    function M(t, e) {
        return !t || t instanceof w ? t : new w(t, e)
    }

    function x(t, e) {
        if (t) for (var i = e ? [t, e] : t, n = 0, o = i.length; n < o; n++) this.extend(i[n])
    }

    function k(t, e) {
        return t instanceof x ? t : new x(t, e)
    }

    function $(t, e, i) {
        if (isNaN(t) || isNaN(e)) throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
        this.lat = +t, this.lng = +e, void 0 !== i && (this.alt = +i)
    }

    function C(t, e, i) {
        return t instanceof $ ? t : Ut(t) && "object" != typeof t[0] ? 3 === t.length ? new $(t[0], t[1], t[2]) : 2 === t.length ? new $(t[0], t[1]) : null : null == t ? t : "object" == typeof t && "lat" in t ? new $(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : void 0 === e ? null : new $(t, e, i)
    }

    function T(t, e, i, n) {
        if (Ut(t)) return this._a = t[0], this._b = t[1], this._c = t[2], void (this._d = t[3]);
        this._a = t, this._b = e, this._c = i, this._d = n
    }

    function P(t, e, i, n) {
        return new T(t, e, i, n)
    }

    function E(t) {
        return document.createElementNS("http://www.w3.org/2000/svg", t)
    }

    function S(t, e) {
        var i, n, o, s, a, r, l = "";
        for (i = 0, o = t.length; i < o; i++) {
            for (n = 0, s = (a = t[i]).length; n < s; n++) l += (n ? "L" : "M") + (r = a[n]).x + " " + r.y;
            l += e ? Re ? "z" : "x" : ""
        }
        return l || "M0 0"
    }

    function z(t) {
        return navigator.userAgent.toLowerCase().indexOf(t) >= 0
    }

    function O(t, e, n, o) {
        return "touchstart" === e ? (u = t, h = n, p = o, m = i(function (t) {
            if ("mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && t.pointerType !== t.MSPOINTER_TYPE_MOUSE) {
                if (!(Ue.indexOf(t.target.tagName) < 0)) return;
                V(t)
            }
            B(t, h)
        }), u["_leaflet_touchstart" + p] = m, u.addEventListener(Ne, m, !1), Ve || (document.documentElement.addEventListener(Ne, D, !0), document.documentElement.addEventListener(He, I, !0), document.documentElement.addEventListener(je, A, !0), document.documentElement.addEventListener(Fe, A, !0), Ve = !0)) : "touchmove" === e ? (c = n, d = function (t) {
            (t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && B(t, c)
        }, (l = t)["_leaflet_touchmove" + o] = d, l.addEventListener(He, d, !1)) : "touchend" === e && (a = n, r = function (t) {
            B(t, a)
        }, (s = t)["_leaflet_touchend" + o] = r, s.addEventListener(je, r, !1), s.addEventListener(Fe, r, !1)), this;
        var s, a, r, l, c, d, u, h, p, m
    }

    function D(t) {
        We[t.pointerId] = t, qe++
    }

    function I(t) {
        We[t.pointerId] && (We[t.pointerId] = t)
    }

    function A(t) {
        delete We[t.pointerId], qe--
    }

    function B(t, e) {
        for (var i in t.touches = [], We) t.touches.push(We[i]);
        t.changedTouches = [t], e(t)
    }

    function R(t, e, i) {
        function n(t) {
            var e;
            if (ze) {
                if (!pe || "mouse" === t.pointerType) return;
                e = qe
            } else e = t.touches.length;
            if (!(e > 1)) {
                var i = Date.now(), n = i - (s || i);
                a = t.touches ? t.touches[0] : t, r = n > 0 && n <= l, s = i
            }
        }

        function o(t) {
            if (r && !a.cancelBubble) {
                if (ze) {
                    if (!pe || "mouse" === t.pointerType) return;
                    var i, n, o = {};
                    for (n in a) i = a[n], o[n] = i && i.bind ? i.bind(a) : i;
                    a = o
                }
                a.type = "dblclick", e(a), s = null
            }
        }

        var s, a, r = !1, l = 250;
        return t[Je + Ye + i] = n, t[Je + Xe + i] = o, t[Je + "dblclick" + i] = e, t.addEventListener(Ye, n, !1), t.addEventListener(Xe, o, !1), t.addEventListener("dblclick", e, !1), this
    }

    function Z(t, e) {
        var i = t[Je + Ye + e], n = t[Je + Xe + e], o = t[Je + "dblclick" + e];
        return t.removeEventListener(Ye, i, !1), t.removeEventListener(Xe, n, !1), pe || t.removeEventListener("dblclick", o, !1), this
    }

    function G(t, e, i, n) {
        if ("object" == typeof e) for (var o in e) H(t, o, e[o], i); else for (var s = 0, a = (e = c(e)).length; s < a; s++) H(t, e[s], i, n);
        return this
    }

    function N(t, e, i, n) {
        if ("object" == typeof e) for (var o in e) j(t, o, e[o], i); else if (e) for (var s = 0, a = (e = c(e)).length; s < a; s++) j(t, e[s], i, n); else {
            for (var r in t[Ke]) j(t, r, t[Ke][r]);
            delete t[Ke]
        }
        return this
    }

    function H(t, e, i, o) {
        var s = e + n(i) + (o ? "_" + n(o) : "");
        if (t[Ke] && t[Ke][s]) return this;
        var a = function (e) {
            return i.call(o || t, e || window.event)
        }, r = a;
        ze && 0 === e.indexOf("touch") ? O(t, e, a, s) : !Oe || "dblclick" !== e || !R || ze && ve ? "addEventListener" in t ? "mousewheel" === e ? t.addEventListener("onwheel" in t ? "wheel" : "mousewheel", a, !1) : "mouseenter" === e || "mouseleave" === e ? (a = function (e) {
            e = e || window.event, Q(t, e) && r(e)
        }, t.addEventListener("mouseenter" === e ? "mouseover" : "mouseout", a, !1)) : ("click" === e && fe && (a = function (t) {
            var e, i, n, o;
            i = r, n = (e = t).timeStamp || e.originalEvent && e.originalEvent.timeStamp, (o = ne && n - ne) && o > 100 && o < 500 || e.target._simulatedClick && !e._simulated ? q(e) : (ne = n, i(e))
        }), t.addEventListener(e, a, !1)) : "attachEvent" in t && t.attachEvent("on" + e, a) : R(t, a, s), t[Ke] = t[Ke] || {}, t[Ke][s] = a
    }

    function j(t, e, i, o) {
        var s = e + n(i) + (o ? "_" + n(o) : ""), a = t[Ke] && t[Ke][s];
        if (!a) return this;
        ze && 0 === e.indexOf("touch") ? (r = t, l = e, c = s, d = r["_leaflet_" + l + c], "touchstart" === l ? r.removeEventListener(Ne, d, !1) : "touchmove" === l ? r.removeEventListener(He, d, !1) : "touchend" === l && (r.removeEventListener(je, d, !1), r.removeEventListener(Fe, d, !1))) : Oe && "dblclick" === e && Z ? Z(t, s) : "removeEventListener" in t ? "mousewheel" === e ? t.removeEventListener("onwheel" in t ? "wheel" : "mousewheel", a, !1) : t.removeEventListener("mouseenter" === e ? "mouseover" : "mouseleave" === e ? "mouseout" : e, a, !1) : "detachEvent" in t && t.detachEvent("on" + e, a), t[Ke][s] = null;
        var r, l, c, d
    }

    function F(t) {
        return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, K(t), this
    }

    function U(t) {
        return H(t, "mousewheel", F), this
    }

    function W(t) {
        return G(t, "mousedown touchstart dblclick", F), H(t, "click", J), this
    }

    function V(t) {
        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
    }

    function q(t) {
        return V(t), F(t), this
    }

    function Y(t, e) {
        if (!e) return new y(t.clientX, t.clientY);
        var i = e.getBoundingClientRect();
        return new y(t.clientX - i.left - e.clientLeft, t.clientY - i.top - e.clientTop)
    }

    function X(t) {
        return pe ? t.wheelDeltaY / 2 : t.deltaY && 0 === t.deltaMode ? -t.deltaY / Qe : t.deltaY && 1 === t.deltaMode ? 20 * -t.deltaY : t.deltaY && 2 === t.deltaMode ? 60 * -t.deltaY : t.deltaX || t.deltaZ ? 0 : t.wheelDelta ? (t.wheelDeltaY || t.wheelDelta) / 2 : t.detail && Math.abs(t.detail) < 32765 ? 20 * -t.detail : t.detail ? t.detail / -32765 * 60 : 0
    }

    function J(t) {
        ti[t.type] = !0
    }

    function K(t) {
        var e = ti[t.type];
        return ti[t.type] = !1, e
    }

    function Q(t, e) {
        var i = e.relatedTarget;
        if (!i) return !0;
        try {
            for (; i && i !== t;) i = i.parentNode
        } catch (t) {
            return !1
        }
        return i !== t
    }

    function tt(t) {
        return "string" == typeof t ? document.getElementById(t) : t
    }

    function et(t, e) {
        var i = t.style[e] || t.currentStyle && t.currentStyle[e];
        if ((!i || "auto" === i) && document.defaultView) {
            var n = document.defaultView.getComputedStyle(t, null);
            i = n ? n[e] : null
        }
        return "auto" === i ? null : i
    }

    function it(t, e, i) {
        var n = document.createElement(t);
        return n.className = e || "", i && i.appendChild(n), n
    }

    function nt(t) {
        var e = t.parentNode;
        e && e.removeChild(t)
    }

    function ot(t) {
        for (; t.firstChild;) t.removeChild(t.firstChild)
    }

    function st(t) {
        var e = t.parentNode;
        e.lastChild !== t && e.appendChild(t)
    }

    function at(t) {
        var e = t.parentNode;
        e.firstChild !== t && e.insertBefore(t, e.firstChild)
    }

    function rt(t, e) {
        if (void 0 !== t.classList) return t.classList.contains(e);
        var i = ut(t);
        return i.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(i)
    }

    function lt(t, e) {
        if (void 0 !== t.classList) for (var i = c(e), n = 0, o = i.length; n < o; n++) t.classList.add(i[n]); else if (!rt(t, e)) {
            var s = ut(t);
            dt(t, (s ? s + " " : "") + e)
        }
    }

    function ct(t, e) {
        void 0 !== t.classList ? t.classList.remove(e) : dt(t, l((" " + ut(t) + " ").replace(" " + e + " ", " ")))
    }

    function dt(t, e) {
        void 0 === t.className.baseVal ? t.className = e : t.className.baseVal = e
    }

    function ut(t) {
        return void 0 === t.className.baseVal ? t.className : t.className.baseVal
    }

    function ht(t, e) {
        "opacity" in t.style ? t.style.opacity = e : "filter" in t.style && function (t, e) {
            var i = !1, n = "DXImageTransform.Microsoft.Alpha";
            try {
                i = t.filters.item(n)
            } catch (t) {
                if (1 === e) return
            }
            e = Math.round(100 * e), i ? (i.Enabled = 100 !== e, i.Opacity = e) : t.style.filter += " progid:" + n + "(opacity=" + e + ")"
        }(t, e)
    }

    function pt(t) {
        for (var e = document.documentElement.style, i = 0; i < t.length; i++) if (t[i] in e) return t[i];
        return !1
    }

    function mt(t, e, i) {
        var n = e || new y(0, 0);
        t.style[ii] = (xe ? "translate(" + n.x + "px," + n.y + "px)" : "translate3d(" + n.x + "px," + n.y + "px,0)") + (i ? " scale(" + i + ")" : "")
    }

    function ft(t, e) {
        t._leaflet_pos = e, Ce ? mt(t, e) : (t.style.left = e.x + "px", t.style.top = e.y + "px")
    }

    function _t(t) {
        return t._leaflet_pos || new y(0, 0)
    }

    function gt() {
        G(window, "dragstart", V)
    }

    function vt() {
        N(window, "dragstart", V)
    }

    function yt(t) {
        for (; -1 === t.tabIndex;) t = t.parentNode;
        t.style && (bt(), ai = t, ri = t.style.outline, t.style.outline = "none", G(window, "keydown", bt))
    }

    function bt() {
        ai && (ai.style.outline = ri, ai = void 0, ri = void 0, N(window, "keydown", bt))
    }

    function Lt(t, e) {
        if (!e || !t.length) return t.slice();
        var i = e * e;
        return function (t, e) {
            var i = t.length, n = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(i);
            n[0] = n[i - 1] = 1, function t(e, i, n, o, s) {
                var a, r, l, c = 0;
                for (r = o + 1; r <= s - 1; r++) (l = $t(e[r], e[o], e[s], !0)) > c && (a = r, c = l);
                c > n && (i[a] = 1, t(e, i, n, o, a), t(e, i, n, a, s))
            }(t, n, e, 0, i - 1);
            var o, s = [];
            for (o = 0; o < i; o++) n[o] && s.push(t[o]);
            return s
        }(t = function (t, e) {
            for (var i = [t[0]], n = 1, o = 0, s = t.length; n < s; n++) a = t[n], r = t[o], void 0, void 0, l = r.x - a.x, c = r.y - a.y, l * l + c * c > e && (i.push(t[n]), o = n);
            var a, r, l, c;
            return o < s - 1 && i.push(t[s - 1]), i
        }(t, i), i)
    }

    function wt(t, e, i) {
        return Math.sqrt($t(t, e, i, !0))
    }

    function Mt(t, e, i, n, o) {
        var s, a, r, l = n ? gi : kt(t, i), c = kt(e, i);
        for (gi = c; ;) {
            if (!(l | c)) return [t, e];
            if (l & c) return !1;
            r = kt(a = xt(t, e, s = l || c, i, o), i), s === l ? (t = a, l = r) : (e = a, c = r)
        }
    }

    function xt(t, e, i, n, o) {
        var s, a, r = e.x - t.x, l = e.y - t.y, c = n.min, d = n.max;
        return 8 & i ? (s = t.x + r * (d.y - t.y) / l, a = d.y) : 4 & i ? (s = t.x + r * (c.y - t.y) / l, a = c.y) : 2 & i ? (s = d.x, a = t.y + l * (d.x - t.x) / r) : 1 & i && (s = c.x, a = t.y + l * (c.x - t.x) / r), new y(s, a, o)
    }

    function kt(t, e) {
        var i = 0;
        return t.x < e.min.x ? i |= 1 : t.x > e.max.x && (i |= 2), t.y < e.min.y ? i |= 4 : t.y > e.max.y && (i |= 8), i
    }

    function $t(t, e, i, n) {
        var o, s = e.x, a = e.y, r = i.x - s, l = i.y - a, c = r * r + l * l;
        return c > 0 && ((o = ((t.x - s) * r + (t.y - a) * l) / c) > 1 ? (s = i.x, a = i.y) : o > 0 && (s += r * o, a += l * o)), r = t.x - s, l = t.y - a, n ? r * r + l * l : new y(s, a)
    }

    function Ct(t) {
        return !Ut(t[0]) || "object" != typeof t[0][0] && void 0 !== t[0][0]
    }

    function Tt(t) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Ct(t)
    }

    function Pt(t, e, i) {
        var n, o, s, a, r, l, c, d, u, h = [1, 4, 2, 8];
        for (o = 0, c = t.length; o < c; o++) t[o]._code = kt(t[o], e);
        for (a = 0; a < 4; a++) {
            for (d = h[a], n = [], o = 0, s = (c = t.length) - 1; o < c; s = o++) r = t[o], l = t[s], r._code & d ? l._code & d || ((u = xt(l, r, d, e, i))._code = kt(u, e), n.push(u)) : (l._code & d && ((u = xt(l, r, d, e, i))._code = kt(u, e), n.push(u)), n.push(r));
            t = n
        }
        return t
    }

    function Et(t, e) {
        var i, n, o, s, a = "Feature" === t.type ? t.geometry : t, r = a ? a.coordinates : null, l = [],
            c = e && e.pointToLayer, d = e && e.coordsToLatLng || St;
        if (!r && !a) return null;
        switch (a.type) {
            case"Point":
                return i = d(r), c ? c(t, i) : new Zi(i);
            case"MultiPoint":
                for (o = 0, s = r.length; o < s; o++) i = d(r[o]), l.push(c ? c(t, i) : new Zi(i));
                return new Ii(l);
            case"LineString":
            case"MultiLineString":
                return n = zt(r, "LineString" === a.type ? 0 : 1, d), new ji(n, e);
            case"Polygon":
            case"MultiPolygon":
                return n = zt(r, "Polygon" === a.type ? 1 : 2, d), new Fi(n, e);
            case"GeometryCollection":
                for (o = 0, s = a.geometries.length; o < s; o++) {
                    var u = Et({geometry: a.geometries[o], type: "Feature", properties: t.properties}, e);
                    u && l.push(u)
                }
                return new Ii(l);
            default:
                throw new Error("Invalid GeoJSON object.")
        }
    }

    function St(t) {
        return new $(t[1], t[0], t[2])
    }

    function zt(t, e, i) {
        for (var n, o = [], s = 0, a = t.length; s < a; s++) n = e ? zt(t[s], e - 1, i) : (i || St)(t[s]), o.push(n);
        return o
    }

    function Ot(t, e) {
        return e = "number" == typeof e ? e : 6, void 0 !== t.alt ? [r(t.lng, e), r(t.lat, e), r(t.alt, e)] : [r(t.lng, e), r(t.lat, e)]
    }

    function Dt(t, e, i, n) {
        for (var o = [], s = 0, a = t.length; s < a; s++) o.push(e ? Dt(t[s], e - 1, i, n) : Ot(t[s], n));
        return !e && i && o.push(o[0]), o
    }

    function It(t, i) {
        return t.feature ? e({}, t.feature, {geometry: i}) : At(i)
    }

    function At(t) {
        return "Feature" === t.type || "FeatureCollection" === t.type ? t : {
            type: "Feature",
            properties: {},
            geometry: t
        }
    }

    function Bt(t, e) {
        return new Ui(t, e)
    }

    function Rt(t, e) {
        return new en(t, e)
    }

    function Zt(t) {
        return Be ? new sn(t) : null
    }

    function Gt(t) {
        return Re || Ze ? new cn(t) : null
    }

    var Nt = Object.freeze;
    Object.freeze = function (t) {
        return t
    };
    var Ht = Object.create || function () {
            function t() {
            }

            return function (e) {
                return t.prototype = e, new t
            }
        }(), jt = 0, Ft = /\{ *([\w_\-]+) *\}/g, Ut = Array.isArray || function (t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }, Wt = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", Vt = 0,
        qt = window.requestAnimationFrame || m("RequestAnimationFrame") || f,
        Yt = window.cancelAnimationFrame || m("CancelAnimationFrame") || m("CancelRequestAnimationFrame") || function (t) {
            window.clearTimeout(t)
        }, Xt = (Object.freeze || Object)({
            freeze: Nt,
            extend: e,
            create: Ht,
            bind: i,
            lastId: jt,
            stamp: n,
            throttle: o,
            wrapNum: s,
            falseFn: a,
            formatNum: r,
            trim: l,
            splitWords: c,
            setOptions: d,
            getParamString: u,
            template: h,
            isArray: Ut,
            indexOf: p,
            emptyImageUrl: Wt,
            requestFn: qt,
            cancelFn: Yt,
            requestAnimFrame: _,
            cancelAnimFrame: g
        });
    v.extend = function (t) {
        var i = function () {
            this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
        }, n = i.__super__ = this.prototype, o = Ht(n);
        for (var s in o.constructor = i, i.prototype = o, this) this.hasOwnProperty(s) && "prototype" !== s && "__super__" !== s && (i[s] = this[s]);
        return t.statics && (e(i, t.statics), delete t.statics), t.includes && (function (t) {
            if (L && L.Mixin) {
                t = Ut(t) ? t : [t];
                for (var e = 0; e < t.length; e++) t[e] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", (new Error).stack)
            }
        }(t.includes), e.apply(null, [o].concat(t.includes)), delete t.includes), o.options && (t.options = e(Ht(o.options), t.options)), e(o, t), o._initHooks = [], o.callInitHooks = function () {
            if (!this._initHooksCalled) {
                n.callInitHooks && n.callInitHooks.call(this), this._initHooksCalled = !0;
                for (var t = 0, e = o._initHooks.length; t < e; t++) o._initHooks[t].call(this)
            }
        }, i
    }, v.include = function (t) {
        return e(this.prototype, t), this
    }, v.mergeOptions = function (t) {
        return e(this.prototype.options, t), this
    }, v.addInitHook = function (t) {
        var e = Array.prototype.slice.call(arguments, 1), i = "function" == typeof t ? t : function () {
            this[t].apply(this, e)
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(i), this
    };
    var Jt = {
        on: function (t, e, i) {
            if ("object" == typeof t) for (var n in t) this._on(n, t[n], e); else for (var o = 0, s = (t = c(t)).length; o < s; o++) this._on(t[o], e, i);
            return this
        }, off: function (t, e, i) {
            if (t) if ("object" == typeof t) for (var n in t) this._off(n, t[n], e); else for (var o = 0, s = (t = c(t)).length; o < s; o++) this._off(t[o], e, i); else delete this._events;
            return this
        }, _on: function (t, e, i) {
            this._events = this._events || {};
            var n = this._events[t];
            n || (n = [], this._events[t] = n), i === this && (i = void 0);
            for (var o = {
                fn: e,
                ctx: i
            }, s = n, a = 0, r = s.length; a < r; a++) if (s[a].fn === e && s[a].ctx === i) return;
            s.push(o)
        }, _off: function (t, e, i) {
            var n, o, s;
            if (this._events && (n = this._events[t])) if (e) {
                if (i === this && (i = void 0), n) for (o = 0, s = n.length; o < s; o++) {
                    var r = n[o];
                    if (r.ctx === i && r.fn === e) return r.fn = a, this._firingCount && (this._events[t] = n = n.slice()), void n.splice(o, 1)
                }
            } else {
                for (o = 0, s = n.length; o < s; o++) n[o].fn = a;
                delete this._events[t]
            }
        }, fire: function (t, i, n) {
            if (!this.listens(t, n)) return this;
            var o = e({}, i, {type: t, target: this});
            if (this._events) {
                var s = this._events[t];
                if (s) {
                    this._firingCount = this._firingCount + 1 || 1;
                    for (var a = 0, r = s.length; a < r; a++) {
                        var l = s[a];
                        l.fn.call(l.ctx || this, o)
                    }
                    this._firingCount--
                }
            }
            return n && this._propagateEvent(o), this
        }, listens: function (t, e) {
            var i = this._events && this._events[t];
            if (i && i.length) return !0;
            if (e) for (var n in this._eventParents) if (this._eventParents[n].listens(t, e)) return !0;
            return !1
        }, once: function (t, e, n) {
            if ("object" == typeof t) {
                for (var o in t) this.once(o, t[o], e);
                return this
            }
            var s = i(function () {
                this.off(t, e, n).off(t, s, n)
            }, this);
            return this.on(t, e, n).on(t, s, n)
        }, addEventParent: function (t) {
            return this._eventParents = this._eventParents || {}, this._eventParents[n(t)] = t, this
        }, removeEventParent: function (t) {
            return this._eventParents && delete this._eventParents[n(t)], this
        }, _propagateEvent: function (t) {
            for (var i in this._eventParents) this._eventParents[i].fire(t.type, e({layer: t.target}, t), !0)
        }
    };
    Jt.addEventListener = Jt.on, Jt.removeEventListener = Jt.clearAllEventListeners = Jt.off, Jt.addOneTimeEventListener = Jt.once, Jt.fireEvent = Jt.fire, Jt.hasEventListeners = Jt.listens;
    var Kt = v.extend(Jt);
    y.prototype = {
        clone: function () {
            return new y(this.x, this.y)
        }, add: function (t) {
            return this.clone()._add(b(t))
        }, _add: function (t) {
            return this.x += t.x, this.y += t.y, this
        }, subtract: function (t) {
            return this.clone()._subtract(b(t))
        }, _subtract: function (t) {
            return this.x -= t.x, this.y -= t.y, this
        }, divideBy: function (t) {
            return this.clone()._divideBy(t)
        }, _divideBy: function (t) {
            return this.x /= t, this.y /= t, this
        }, multiplyBy: function (t) {
            return this.clone()._multiplyBy(t)
        }, _multiplyBy: function (t) {
            return this.x *= t, this.y *= t, this
        }, scaleBy: function (t) {
            return new y(this.x * t.x, this.y * t.y)
        }, unscaleBy: function (t) {
            return new y(this.x / t.x, this.y / t.y)
        }, round: function () {
            return this.clone()._round()
        }, _round: function () {
            return this.x = Math.round(this.x), this.y = Math.round(this.y), this
        }, floor: function () {
            return this.clone()._floor()
        }, _floor: function () {
            return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
        }, ceil: function () {
            return this.clone()._ceil()
        }, _ceil: function () {
            return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
        }, distanceTo: function (t) {
            var e = (t = b(t)).x - this.x, i = t.y - this.y;
            return Math.sqrt(e * e + i * i)
        }, equals: function (t) {
            return (t = b(t)).x === this.x && t.y === this.y
        }, contains: function (t) {
            return t = b(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
        }, toString: function () {
            return "Point(" + r(this.x) + ", " + r(this.y) + ")"
        }
    }, w.prototype = {
        extend: function (t) {
            return t = b(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
        }, getCenter: function (t) {
            return new y((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
        }, getBottomLeft: function () {
            return new y(this.min.x, this.max.y)
        }, getTopRight: function () {
            return new y(this.max.x, this.min.y)
        }, getTopLeft: function () {
            return this.min
        }, getBottomRight: function () {
            return this.max
        }, getSize: function () {
            return this.max.subtract(this.min)
        }, contains: function (t) {
            var e, i;
            return (t = "number" == typeof t[0] || t instanceof y ? b(t) : M(t)) instanceof w ? (e = t.min, i = t.max) : e = i = t, e.x >= this.min.x && i.x <= this.max.x && e.y >= this.min.y && i.y <= this.max.y
        }, intersects: function (t) {
            t = M(t);
            var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x >= e.x && n.x <= i.x,
                a = o.y >= e.y && n.y <= i.y;
            return s && a
        }, overlaps: function (t) {
            t = M(t);
            var e = this.min, i = this.max, n = t.min, o = t.max, s = o.x > e.x && n.x < i.x,
                a = o.y > e.y && n.y < i.y;
            return s && a
        }, isValid: function () {
            return !(!this.min || !this.max)
        }
    }, x.prototype = {
        extend: function (t) {
            var e, i, n = this._southWest, o = this._northEast;
            if (t instanceof $) e = t, i = t; else {
                if (!(t instanceof x)) return t ? this.extend(C(t) || k(t)) : this;
                if (e = t._southWest, i = t._northEast, !e || !i) return this
            }
            return n || o ? (n.lat = Math.min(e.lat, n.lat), n.lng = Math.min(e.lng, n.lng), o.lat = Math.max(i.lat, o.lat), o.lng = Math.max(i.lng, o.lng)) : (this._southWest = new $(e.lat, e.lng), this._northEast = new $(i.lat, i.lng)), this
        }, pad: function (t) {
            var e = this._southWest, i = this._northEast, n = Math.abs(e.lat - i.lat) * t,
                o = Math.abs(e.lng - i.lng) * t;
            return new x(new $(e.lat - n, e.lng - o), new $(i.lat + n, i.lng + o))
        }, getCenter: function () {
            return new $((this._southWest.lat + this._northEast.lat) / 2, (this._southWest.lng + this._northEast.lng) / 2)
        }, getSouthWest: function () {
            return this._southWest
        }, getNorthEast: function () {
            return this._northEast
        }, getNorthWest: function () {
            return new $(this.getNorth(), this.getWest())
        }, getSouthEast: function () {
            return new $(this.getSouth(), this.getEast())
        }, getWest: function () {
            return this._southWest.lng
        }, getSouth: function () {
            return this._southWest.lat
        }, getEast: function () {
            return this._northEast.lng
        }, getNorth: function () {
            return this._northEast.lat
        }, contains: function (t) {
            t = "number" == typeof t[0] || t instanceof $ || "lat" in t ? C(t) : k(t);
            var e, i, n = this._southWest, o = this._northEast;
            return t instanceof x ? (e = t.getSouthWest(), i = t.getNorthEast()) : e = i = t, e.lat >= n.lat && i.lat <= o.lat && e.lng >= n.lng && i.lng <= o.lng
        }, intersects: function (t) {
            t = k(t);
            var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(),
                s = o.lat >= e.lat && n.lat <= i.lat, a = o.lng >= e.lng && n.lng <= i.lng;
            return s && a
        }, overlaps: function (t) {
            t = k(t);
            var e = this._southWest, i = this._northEast, n = t.getSouthWest(), o = t.getNorthEast(),
                s = o.lat > e.lat && n.lat < i.lat, a = o.lng > e.lng && n.lng < i.lng;
            return s && a
        }, toBBoxString: function () {
            return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
        }, equals: function (t, e) {
            return !!t && (t = k(t), this._southWest.equals(t.getSouthWest(), e) && this._northEast.equals(t.getNorthEast(), e))
        }, isValid: function () {
            return !(!this._southWest || !this._northEast)
        }
    }, $.prototype = {
        equals: function (t, e) {
            return !!t && (t = C(t), Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng)) <= (void 0 === e ? 1e-9 : e))
        }, toString: function (t) {
            return "LatLng(" + r(this.lat, t) + ", " + r(this.lng, t) + ")"
        }, distanceTo: function (t) {
            return ee.distance(this, C(t))
        }, wrap: function () {
            return ee.wrapLatLng(this)
        }, toBounds: function (t) {
            var e = 180 * t / 40075017, i = e / Math.cos(Math.PI / 180 * this.lat);
            return k([this.lat - e, this.lng - i], [this.lat + e, this.lng + i])
        }, clone: function () {
            return new $(this.lat, this.lng, this.alt)
        }
    };
    var Qt, te = {
        latLngToPoint: function (t, e) {
            var i = this.projection.project(t), n = this.scale(e);
            return this.transformation._transform(i, n)
        }, pointToLatLng: function (t, e) {
            var i = this.scale(e), n = this.transformation.untransform(t, i);
            return this.projection.unproject(n)
        }, project: function (t) {
            return this.projection.project(t)
        }, unproject: function (t) {
            return this.projection.unproject(t)
        }, scale: function (t) {
            return 256 * Math.pow(2, t)
        }, zoom: function (t) {
            return Math.log(t / 256) / Math.LN2
        }, getProjectedBounds: function (t) {
            if (this.infinite) return null;
            var e = this.projection.bounds, i = this.scale(t);
            return new w(this.transformation.transform(e.min, i), this.transformation.transform(e.max, i))
        }, infinite: !1, wrapLatLng: function (t) {
            var e = this.wrapLng ? s(t.lng, this.wrapLng, !0) : t.lng;
            return new $(this.wrapLat ? s(t.lat, this.wrapLat, !0) : t.lat, e, t.alt)
        }, wrapLatLngBounds: function (t) {
            var e = t.getCenter(), i = this.wrapLatLng(e), n = e.lat - i.lat, o = e.lng - i.lng;
            if (0 === n && 0 === o) return t;
            var s = t.getSouthWest(), a = t.getNorthEast();
            return new x(new $(s.lat - n, s.lng - o), new $(a.lat - n, a.lng - o))
        }
    }, ee = e({}, te, {
        wrapLng: [-180, 180], R: 6371e3, distance: function (t, e) {
            var i = Math.PI / 180, n = t.lat * i, o = e.lat * i,
                s = Math.sin(n) * Math.sin(o) + Math.cos(n) * Math.cos(o) * Math.cos((e.lng - t.lng) * i);
            return this.R * Math.acos(Math.min(s, 1))
        }
    }), ie = {
        R: 6378137, MAX_LATITUDE: 85.0511287798, project: function (t) {
            var e = Math.PI / 180, i = this.MAX_LATITUDE, n = Math.max(Math.min(i, t.lat), -i), o = Math.sin(n * e);
            return new y(this.R * t.lng * e, this.R * Math.log((1 + o) / (1 - o)) / 2)
        }, unproject: function (t) {
            var e = 180 / Math.PI;
            return new $((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e, t.x * e / this.R)
        }, bounds: (Qt = 6378137 * Math.PI, new w([-Qt, -Qt], [Qt, Qt]))
    };
    T.prototype = {
        transform: function (t, e) {
            return this._transform(t.clone(), e)
        }, _transform: function (t, e) {
            return e = e || 1, t.x = e * (this._a * t.x + this._b), t.y = e * (this._c * t.y + this._d), t
        }, untransform: function (t, e) {
            return e = e || 1, new y((t.x / e - this._b) / this._a, (t.y / e - this._d) / this._c)
        }
    };
    var ne, oe, se, ae, re, le = e({}, ee, {
            code: "EPSG:3857",
            projection: ie,
            transformation: (re = .5 / (Math.PI * ie.R), P(re, .5, -re, .5))
        }), ce = e({}, le, {code: "EPSG:900913"}), de = document.documentElement.style, ue = "ActiveXObject" in window,
        he = ue && !document.addEventListener, pe = "msLaunchUri" in navigator && !("documentMode" in document),
        me = z("webkit"), fe = z("android"), _e = z("android 2") || z("android 3"), ge = !!window.opera,
        ve = z("chrome"), ye = z("gecko") && !me && !ge && !ue, be = !ve && z("safari"), Le = z("phantom"),
        we = "OTransition" in de, Me = 0 === navigator.platform.indexOf("Win"), xe = ue && "transition" in de,
        ke = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !_e, $e = "MozPerspective" in de,
        Ce = !window.L_DISABLE_3D && (xe || ke || $e) && !we && !Le,
        Te = "undefined" != typeof orientation || z("mobile"), Pe = Te && me, Ee = Te && ke,
        Se = !window.PointerEvent && window.MSPointerEvent, ze = !(!window.PointerEvent && !Se),
        Oe = !window.L_NO_TOUCH && (ze || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        De = Te && ge, Ie = Te && ye,
        Ae = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
        Be = !!document.createElement("canvas").getContext,
        Re = !(!document.createElementNS || !E("svg").createSVGRect), Ze = !Re && function () {
            try {
                var t = document.createElement("div");
                t.innerHTML = '<v:shape adj="1"/>';
                var e = t.firstChild;
                return e.style.behavior = "url(#default#VML)", e && "object" == typeof e.adj
            } catch (t) {
                return !1
            }
        }(), Ge = (Object.freeze || Object)({
            ie: ue,
            ielt9: he,
            edge: pe,
            webkit: me,
            android: fe,
            android23: _e,
            opera: ge,
            chrome: ve,
            gecko: ye,
            safari: be,
            phantom: Le,
            opera12: we,
            win: Me,
            ie3d: xe,
            webkit3d: ke,
            gecko3d: $e,
            any3d: Ce,
            mobile: Te,
            mobileWebkit: Pe,
            mobileWebkit3d: Ee,
            msPointer: Se,
            pointer: ze,
            touch: Oe,
            mobileOpera: De,
            mobileGecko: Ie,
            retina: Ae,
            canvas: Be,
            svg: Re,
            vml: Ze
        }), Ne = Se ? "MSPointerDown" : "pointerdown", He = Se ? "MSPointerMove" : "pointermove",
        je = Se ? "MSPointerUp" : "pointerup", Fe = Se ? "MSPointerCancel" : "pointercancel",
        Ue = ["INPUT", "SELECT", "OPTION"], We = {}, Ve = !1, qe = 0,
        Ye = Se ? "MSPointerDown" : ze ? "pointerdown" : "touchstart",
        Xe = Se ? "MSPointerUp" : ze ? "pointerup" : "touchend", Je = "_leaflet_", Ke = "_leaflet_events",
        Qe = Me && ve ? 2 * window.devicePixelRatio : ye ? window.devicePixelRatio : 1, ti = {},
        ei = (Object.freeze || Object)({
            on: G,
            off: N,
            stopPropagation: F,
            disableScrollPropagation: U,
            disableClickPropagation: W,
            preventDefault: V,
            stop: q,
            getMousePosition: Y,
            getWheelDelta: X,
            fakeStop: J,
            skipped: K,
            isExternalTarget: Q,
            addListener: G,
            removeListener: N
        }), ii = pt(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]),
        ni = pt(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]),
        oi = "webkitTransition" === ni || "OTransition" === ni ? ni + "End" : "transitionend";
    if ("onselectstart" in document) oe = function () {
        G(window, "selectstart", V)
    }, se = function () {
        N(window, "selectstart", V)
    }; else {
        var si = pt(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
        oe = function () {
            if (si) {
                var t = document.documentElement.style;
                ae = t[si], t[si] = "none"
            }
        }, se = function () {
            si && (document.documentElement.style[si] = ae, ae = void 0)
        }
    }
    var ai, ri, li = (Object.freeze || Object)({
        TRANSFORM: ii,
        TRANSITION: ni,
        TRANSITION_END: oi,
        get: tt,
        getStyle: et,
        create: it,
        remove: nt,
        empty: ot,
        toFront: st,
        toBack: at,
        hasClass: rt,
        addClass: lt,
        removeClass: ct,
        setClass: dt,
        getClass: ut,
        setOpacity: ht,
        testProp: pt,
        setTransform: mt,
        setPosition: ft,
        getPosition: _t,
        disableTextSelection: oe,
        enableTextSelection: se,
        disableImageDrag: gt,
        enableImageDrag: vt,
        preventOutline: yt,
        restoreOutline: bt
    }), ci = Kt.extend({
        run: function (t, e, i, n) {
            this.stop(), this._el = t, this._inProgress = !0, this._duration = i || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = _t(t), this._offset = e.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
        }, stop: function () {
            this._inProgress && (this._step(!0), this._complete())
        }, _animate: function () {
            this._animId = _(this._animate, this), this._step()
        }, _step: function (t) {
            var e = +new Date - this._startTime, i = 1e3 * this._duration;
            e < i ? this._runFrame(this._easeOut(e / i), t) : (this._runFrame(1), this._complete())
        }, _runFrame: function (t, e) {
            var i = this._startPos.add(this._offset.multiplyBy(t));
            e && i._round(), ft(this._el, i), this.fire("step")
        }, _complete: function () {
            g(this._animId), this._inProgress = !1, this.fire("end")
        }, _easeOut: function (t) {
            return 1 - Math.pow(1 - t, this._easeOutPower)
        }
    }), di = Kt.extend({
        options: {
            crs: le,
            center: void 0,
            zoom: void 0,
            minZoom: void 0,
            maxZoom: void 0,
            layers: [],
            maxBounds: void 0,
            renderer: void 0,
            zoomAnimation: !0,
            zoomAnimationThreshold: 4,
            fadeAnimation: !0,
            markerZoomAnimation: !0,
            transform3DLimit: 8388608,
            zoomSnap: 1,
            zoomDelta: 1,
            trackResize: !0
        },
        initialize: function (t, e) {
            e = d(this, e), this._initContainer(t), this._initLayout(), this._onResize = i(this._onResize, this), this._initEvents(), e.maxBounds && this.setMaxBounds(e.maxBounds), void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)), e.center && void 0 !== e.zoom && this.setView(C(e.center), e.zoom, {reset: !0}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._zoomAnimated = ni && Ce && !De && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), G(this._proxy, oi, this._catchTransitionEnd, this)), this._addLayers(this.options.layers)
        },
        setView: function (t, i, n) {
            return i = void 0 === i ? this._zoom : this._limitZoom(i), t = this._limitCenter(C(t), i, this.options.maxBounds), n = n || {}, this._stop(), this._loaded && !n.reset && !0 !== n && (void 0 !== n.animate && (n.zoom = e({animate: n.animate}, n.zoom), n.pan = e({
                animate: n.animate,
                duration: n.duration
            }, n.pan)), this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, n.zoom) : this._tryAnimatedPan(t, n.pan)) ? (clearTimeout(this._sizeTimer), this) : (this._resetView(t, i), this)
        },
        setZoom: function (t, e) {
            return this._loaded ? this.setView(this.getCenter(), t, {zoom: e}) : (this._zoom = t, this)
        },
        zoomIn: function (t, e) {
            return t = t || (Ce ? this.options.zoomDelta : 1), this.setZoom(this._zoom + t, e)
        },
        zoomOut: function (t, e) {
            return t = t || (Ce ? this.options.zoomDelta : 1), this.setZoom(this._zoom - t, e)
        },
        setZoomAround: function (t, e, i) {
            var n = this.getZoomScale(e), o = this.getSize().divideBy(2),
                s = (t instanceof y ? t : this.latLngToContainerPoint(t)).subtract(o).multiplyBy(1 - 1 / n),
                a = this.containerPointToLatLng(o.add(s));
            return this.setView(a, e, {zoom: i})
        },
        _getBoundsCenterZoom: function (t, e) {
            e = e || {}, t = t.getBounds ? t.getBounds() : k(t);
            var i = b(e.paddingTopLeft || e.padding || [0, 0]), n = b(e.paddingBottomRight || e.padding || [0, 0]),
                o = this.getBoundsZoom(t, !1, i.add(n));
            if ((o = "number" == typeof e.maxZoom ? Math.min(e.maxZoom, o) : o) === 1 / 0) return {
                center: t.getCenter(),
                zoom: o
            };
            var s = n.subtract(i).divideBy(2), a = this.project(t.getSouthWest(), o),
                r = this.project(t.getNorthEast(), o);
            return {center: this.unproject(a.add(r).divideBy(2).add(s), o), zoom: o}
        },
        fitBounds: function (t, e) {
            if (!(t = k(t)).isValid()) throw new Error("Bounds are not valid.");
            var i = this._getBoundsCenterZoom(t, e);
            return this.setView(i.center, i.zoom, e)
        },
        fitWorld: function (t) {
            return this.fitBounds([[-90, -180], [90, 180]], t)
        },
        panTo: function (t, e) {
            return this.setView(t, this._zoom, {pan: e})
        },
        panBy: function (t, e) {
            if (e = e || {}, !(t = b(t).round()).x && !t.y) return this.fire("moveend");
            if (!0 !== e.animate && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
            if (this._panAnim || (this._panAnim = new ci, this._panAnim.on({
                step: this._onPanTransitionStep,
                end: this._onPanTransitionEnd
            }, this)), e.noMoveStart || this.fire("movestart"), !1 !== e.animate) {
                lt(this._mapPane, "leaflet-pan-anim");
                var i = this._getMapPanePos().subtract(t).round();
                this._panAnim.run(this._mapPane, i, e.duration || .25, e.easeLinearity)
            } else this._rawPanBy(t), this.fire("move").fire("moveend");
            return this
        },
        flyTo: function (t, e, i) {
            function n(t) {
                var e = (h * h - u * u + (t ? -1 : 1) * f * f * p * p) / (2 * (t ? h : u) * f * p),
                    i = Math.sqrt(e * e + 1) - e;
                return i < 1e-9 ? -18 : Math.log(i)
            }

            function o(t) {
                return (Math.exp(t) - Math.exp(-t)) / 2
            }

            function s(t) {
                return (Math.exp(t) + Math.exp(-t)) / 2
            }

            function a(t) {
                return u * (s(g) * (o(e = g + m * t) / s(e)) - o(g)) / f;
                var e
            }

            if (!1 === (i = i || {}).animate || !Ce) return this.setView(t, e, i);
            this._stop();
            var r = this.project(this.getCenter()), l = this.project(t), c = this.getSize(), d = this._zoom;
            t = C(t), e = void 0 === e ? d : e;
            var u = Math.max(c.x, c.y), h = u * this.getZoomScale(d, e), p = l.distanceTo(r) || 1, m = 1.42, f = m * m,
                g = n(0), v = Date.now(), y = (n(1) - g) / m, b = i.duration ? 1e3 * i.duration : 1e3 * y * .8;
            return this._moveStart(!0), function i() {
                var n, o, c = (Date.now() - v) / b, h = (n = c, (1 - Math.pow(1 - n, 1.5)) * y);
                c <= 1 ? (this._flyToFrame = _(i, this), this._move(this.unproject(r.add(l.subtract(r).multiplyBy(a(h) / p)), d), this.getScaleZoom(u / (o = h, u * (s(g) / s(g + m * o))), d), {flyTo: !0})) : this._move(t, e)._moveEnd(!0)
            }.call(this), this
        },
        flyToBounds: function (t, e) {
            var i = this._getBoundsCenterZoom(t, e);
            return this.flyTo(i.center, i.zoom, e)
        },
        setMaxBounds: function (t) {
            return (t = k(t)).isValid() ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this.options.maxBounds = t, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this.off("moveend", this._panInsideMaxBounds))
        },
        setMinZoom: function (t) {
            return this.options.minZoom = t, this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) : this
        },
        setMaxZoom: function (t) {
            return this.options.maxZoom = t, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(t) : this
        },
        panInsideBounds: function (t, e) {
            this._enforcingBounds = !0;
            var i = this.getCenter(), n = this._limitCenter(i, this._zoom, k(t));
            return i.equals(n) || this.panTo(n, e), this._enforcingBounds = !1, this
        },
        invalidateSize: function (t) {
            if (!this._loaded) return this;
            t = e({animate: !1, pan: !0}, !0 === t ? {animate: !0} : t);
            var n = this.getSize();
            this._sizeChanged = !0, this._lastCenter = null;
            var o = this.getSize(), s = n.divideBy(2).round(), a = o.divideBy(2).round(), r = s.subtract(a);
            return r.x || r.y ? (t.animate && t.pan ? this.panBy(r) : (t.pan && this._rawPanBy(r), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(i(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
                oldSize: n,
                newSize: o
            })) : this
        },
        stop: function () {
            return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop()
        },
        locate: function (t) {
            if (t = this._locateOptions = e({
                timeout: 1e4,
                watch: !1
            }, t), !("geolocation" in navigator)) return this._handleGeolocationError({
                code: 0,
                message: "Geolocation not supported."
            }), this;
            var n = i(this._handleGeolocationResponse, this), o = i(this._handleGeolocationError, this);
            return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, o, t) : navigator.geolocation.getCurrentPosition(n, o, t), this
        },
        stopLocate: function () {
            return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
        },
        _handleGeolocationError: function (t) {
            var e = t.code,
                i = t.message || (1 === e ? "permission denied" : 2 === e ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
                code: e,
                message: "Geolocation error: " + i + "."
            })
        },
        _handleGeolocationResponse: function (t) {
            var e = new $(t.coords.latitude, t.coords.longitude), i = e.toBounds(t.coords.accuracy),
                n = this._locateOptions;
            if (n.setView) {
                var o = this.getBoundsZoom(i);
                this.setView(e, n.maxZoom ? Math.min(o, n.maxZoom) : o)
            }
            var s = {latlng: e, bounds: i, timestamp: t.timestamp};
            for (var a in t.coords) "number" == typeof t.coords[a] && (s[a] = t.coords[a]);
            this.fire("locationfound", s)
        },
        addHandler: function (t, e) {
            if (!e) return this;
            var i = this[t] = new e(this);
            return this._handlers.push(i), this.options[t] && i.enable(), this
        },
        remove: function () {
            if (this._initEvents(!0), this._containerId !== this._container._leaflet_id) throw new Error("Map container is being reused by another instance");
            try {
                delete this._container._leaflet_id, delete this._containerId
            } catch (t) {
                this._container._leaflet_id = void 0, this._containerId = void 0
            }
            var t;
            for (t in nt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload"), this._layers) this._layers[t].remove();
            for (t in this._panes) nt(this._panes[t]);
            return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this
        },
        createPane: function (t, e) {
            var i = it("div", "leaflet-pane" + (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""), e || this._mapPane);
            return t && (this._panes[t] = i), i
        },
        getCenter: function () {
            return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
        },
        getZoom: function () {
            return this._zoom
        },
        getBounds: function () {
            var t = this.getPixelBounds();
            return new x(this.unproject(t.getBottomLeft()), this.unproject(t.getTopRight()))
        },
        getMinZoom: function () {
            return void 0 === this.options.minZoom ? this._layersMinZoom || 0 : this.options.minZoom
        },
        getMaxZoom: function () {
            return void 0 === this.options.maxZoom ? void 0 === this._layersMaxZoom ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
        },
        getBoundsZoom: function (t, e, i) {
            t = k(t), i = b(i || [0, 0]);
            var n = this.getZoom() || 0, o = this.getMinZoom(), s = this.getMaxZoom(), a = t.getNorthWest(),
                r = t.getSouthEast(), l = this.getSize().subtract(i),
                c = M(this.project(r, n), this.project(a, n)).getSize(), d = Ce ? this.options.zoomSnap : 1,
                u = l.x / c.x, h = l.y / c.y, p = e ? Math.max(u, h) : Math.min(u, h);
            return n = this.getScaleZoom(p, n), d && (n = Math.round(n / (d / 100)) * (d / 100), n = e ? Math.ceil(n / d) * d : Math.floor(n / d) * d), Math.max(o, Math.min(s, n))
        },
        getSize: function () {
            return this._size && !this._sizeChanged || (this._size = new y(this._container.clientWidth || 0, this._container.clientHeight || 0), this._sizeChanged = !1), this._size.clone()
        },
        getPixelBounds: function (t, e) {
            var i = this._getTopLeftPoint(t, e);
            return new w(i, i.add(this.getSize()))
        },
        getPixelOrigin: function () {
            return this._checkIfLoaded(), this._pixelOrigin
        },
        getPixelWorldBounds: function (t) {
            return this.options.crs.getProjectedBounds(void 0 === t ? this.getZoom() : t)
        },
        getPane: function (t) {
            return "string" == typeof t ? this._panes[t] : t
        },
        getPanes: function () {
            return this._panes
        },
        getContainer: function () {
            return this._container
        },
        getZoomScale: function (t, e) {
            var i = this.options.crs;
            return e = void 0 === e ? this._zoom : e, i.scale(t) / i.scale(e)
        },
        getScaleZoom: function (t, e) {
            var i = this.options.crs;
            e = void 0 === e ? this._zoom : e;
            var n = i.zoom(t * i.scale(e));
            return isNaN(n) ? 1 / 0 : n
        },
        project: function (t, e) {
            return e = void 0 === e ? this._zoom : e, this.options.crs.latLngToPoint(C(t), e)
        },
        unproject: function (t, e) {
            return e = void 0 === e ? this._zoom : e, this.options.crs.pointToLatLng(b(t), e)
        },
        layerPointToLatLng: function (t) {
            var e = b(t).add(this.getPixelOrigin());
            return this.unproject(e)
        },
        latLngToLayerPoint: function (t) {
            return this.project(C(t))._round()._subtract(this.getPixelOrigin())
        },
        wrapLatLng: function (t) {
            return this.options.crs.wrapLatLng(C(t))
        },
        wrapLatLngBounds: function (t) {
            return this.options.crs.wrapLatLngBounds(k(t))
        },
        distance: function (t, e) {
            return this.options.crs.distance(C(t), C(e))
        },
        containerPointToLayerPoint: function (t) {
            return b(t).subtract(this._getMapPanePos())
        },
        layerPointToContainerPoint: function (t) {
            return b(t).add(this._getMapPanePos())
        },
        containerPointToLatLng: function (t) {
            var e = this.containerPointToLayerPoint(b(t));
            return this.layerPointToLatLng(e)
        },
        latLngToContainerPoint: function (t) {
            return this.layerPointToContainerPoint(this.latLngToLayerPoint(C(t)))
        },
        mouseEventToContainerPoint: function (t) {
            return Y(t, this._container)
        },
        mouseEventToLayerPoint: function (t) {
            return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
        },
        mouseEventToLatLng: function (t) {
            return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
        },
        _initContainer: function (t) {
            var e = this._container = tt(t);
            if (!e) throw new Error("Map container not found.");
            if (e._leaflet_id) throw new Error("Map container is already initialized.");
            G(e, "scroll", this._onScroll, this), this._containerId = n(e)
        },
        _initLayout: function () {
            var t = this._container;
            this._fadeAnimated = this.options.fadeAnimation && Ce, lt(t, "leaflet-container" + (Oe ? " leaflet-touch" : "") + (Ae ? " leaflet-retina" : "") + (he ? " leaflet-oldie" : "") + (be ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
            var e = et(t, "position");
            "absolute" !== e && "relative" !== e && "fixed" !== e && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
        },
        _initPanes: function () {
            var t = this._panes = {};
            this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), ft(this._mapPane, new y(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (lt(t.markerPane, "leaflet-zoom-hide"), lt(t.shadowPane, "leaflet-zoom-hide"))
        },
        _resetView: function (t, e) {
            ft(this._mapPane, new y(0, 0));
            var i = !this._loaded;
            this._loaded = !0, e = this._limitZoom(e), this.fire("viewprereset");
            var n = this._zoom !== e;
            this._moveStart(n)._move(t, e)._moveEnd(n), this.fire("viewreset"), i && this.fire("load")
        },
        _moveStart: function (t) {
            return t && this.fire("zoomstart"), this.fire("movestart")
        },
        _move: function (t, e, i) {
            void 0 === e && (e = this._zoom);
            var n = this._zoom !== e;
            return this._zoom = e, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), (n || i && i.pinch) && this.fire("zoom", i), this.fire("move", i)
        },
        _moveEnd: function (t) {
            return t && this.fire("zoomend"), this.fire("moveend")
        },
        _stop: function () {
            return g(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
        },
        _rawPanBy: function (t) {
            ft(this._mapPane, this._getMapPanePos().subtract(t))
        },
        _getZoomSpan: function () {
            return this.getMaxZoom() - this.getMinZoom()
        },
        _panInsideMaxBounds: function () {
            this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
        },
        _checkIfLoaded: function () {
            if (!this._loaded) throw new Error("Set map center and zoom first.")
        },
        _initEvents: function (t) {
            this._targets = {}, this._targets[n(this._container)] = this;
            var e = t ? N : G;
            e(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && e(window, "resize", this._onResize, this), Ce && this.options.transform3DLimit && (t ? this.off : this.on).call(this, "moveend", this._onMoveEnd)
        },
        _onResize: function () {
            g(this._resizeRequest), this._resizeRequest = _(function () {
                this.invalidateSize({debounceMoveend: !0})
            }, this)
        },
        _onScroll: function () {
            this._container.scrollTop = 0, this._container.scrollLeft = 0
        },
        _onMoveEnd: function () {
            var t = this._getMapPanePos();
            Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
        },
        _findEventTargets: function (t, e) {
            for (var i, o = [], s = "mouseout" === e || "mouseover" === e, a = t.target || t.srcElement, r = !1; a;) {
                if ((i = this._targets[n(a)]) && ("click" === e || "preclick" === e) && !t._simulated && this._draggableMoved(i)) {
                    r = !0;
                    break
                }
                if (i && i.listens(e, !0)) {
                    if (s && !Q(a, t)) break;
                    if (o.push(i), s) break
                }
                if (a === this._container) break;
                a = a.parentNode
            }
            return o.length || r || s || !Q(a, t) || (o = [this]), o
        },
        _handleDOMEvent: function (t) {
            if (this._loaded && !K(t)) {
                var e = t.type;
                "mousedown" !== e && "keypress" !== e || yt(t.target || t.srcElement), this._fireDOMEvent(t, e)
            }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function (t, i, n) {
            if ("click" === t.type) {
                var o = e({}, t);
                o.type = "preclick", this._fireDOMEvent(o, o.type, n)
            }
            if (!t._stopped && (n = (n || []).concat(this._findEventTargets(t, i))).length) {
                var s = n[0];
                "contextmenu" === i && s.listens(i, !0) && V(t);
                var a = {originalEvent: t};
                if ("keypress" !== t.type) {
                    var r = s.options && "icon" in s.options;
                    a.containerPoint = r ? this.latLngToContainerPoint(s.getLatLng()) : this.mouseEventToContainerPoint(t), a.layerPoint = this.containerPointToLayerPoint(a.containerPoint), a.latlng = r ? s.getLatLng() : this.layerPointToLatLng(a.layerPoint)
                }
                for (var l = 0; l < n.length; l++) if (n[l].fire(i, a, !0), a.originalEvent._stopped || !1 === n[l].options.bubblingMouseEvents && -1 !== p(this._mouseEvents, i)) return
            }
        },
        _draggableMoved: function (t) {
            return (t = t.dragging && t.dragging.enabled() ? t : this).dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
        },
        _clearHandlers: function () {
            for (var t = 0, e = this._handlers.length; t < e; t++) this._handlers[t].disable()
        },
        whenReady: function (t, e) {
            return this._loaded ? t.call(e || this, {target: this}) : this.on("load", t, e), this
        },
        _getMapPanePos: function () {
            return _t(this._mapPane) || new y(0, 0)
        },
        _moved: function () {
            var t = this._getMapPanePos();
            return t && !t.equals([0, 0])
        },
        _getTopLeftPoint: function (t, e) {
            return (t && void 0 !== e ? this._getNewPixelOrigin(t, e) : this.getPixelOrigin()).subtract(this._getMapPanePos())
        },
        _getNewPixelOrigin: function (t, e) {
            var i = this.getSize()._divideBy(2);
            return this.project(t, e)._subtract(i)._add(this._getMapPanePos())._round()
        },
        _latLngToNewLayerPoint: function (t, e, i) {
            var n = this._getNewPixelOrigin(i, e);
            return this.project(t, e)._subtract(n)
        },
        _latLngBoundsToNewLayerBounds: function (t, e, i) {
            var n = this._getNewPixelOrigin(i, e);
            return M([this.project(t.getSouthWest(), e)._subtract(n), this.project(t.getNorthWest(), e)._subtract(n), this.project(t.getSouthEast(), e)._subtract(n), this.project(t.getNorthEast(), e)._subtract(n)])
        },
        _getCenterLayerPoint: function () {
            return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
        },
        _getCenterOffset: function (t) {
            return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
        },
        _limitCenter: function (t, e, i) {
            if (!i) return t;
            var n = this.project(t, e), o = this.getSize().divideBy(2), s = new w(n.subtract(o), n.add(o)),
                a = this._getBoundsOffset(s, i, e);
            return a.round().equals([0, 0]) ? t : this.unproject(n.add(a), e)
        },
        _limitOffset: function (t, e) {
            if (!e) return t;
            var i = this.getPixelBounds(), n = new w(i.min.add(t), i.max.add(t));
            return t.add(this._getBoundsOffset(n, e))
        },
        _getBoundsOffset: function (t, e, i) {
            var n = M(this.project(e.getNorthEast(), i), this.project(e.getSouthWest(), i)), o = n.min.subtract(t.min),
                s = n.max.subtract(t.max);
            return new y(this._rebound(o.x, -s.x), this._rebound(o.y, -s.y))
        },
        _rebound: function (t, e) {
            return t + e > 0 ? Math.round(t - e) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e))
        },
        _limitZoom: function (t) {
            var e = this.getMinZoom(), i = this.getMaxZoom(), n = Ce ? this.options.zoomSnap : 1;
            return n && (t = Math.round(t / n) * n), Math.max(e, Math.min(i, t))
        },
        _onPanTransitionStep: function () {
            this.fire("move")
        },
        _onPanTransitionEnd: function () {
            ct(this._mapPane, "leaflet-pan-anim"), this.fire("moveend")
        },
        _tryAnimatedPan: function (t, e) {
            var i = this._getCenterOffset(t)._floor();
            return !(!0 !== (e && e.animate) && !this.getSize().contains(i) || (this.panBy(i, e), 0))
        },
        _createAnimProxy: function () {
            var t = this._proxy = it("div", "leaflet-proxy leaflet-zoom-animated");
            this._panes.mapPane.appendChild(t), this.on("zoomanim", function (t) {
                var e = ii, i = this._proxy.style[e];
                mt(this._proxy, this.project(t.center, t.zoom), this.getZoomScale(t.zoom, 1)), i === this._proxy.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
            }, this), this.on("load moveend", function () {
                var t = this.getCenter(), e = this.getZoom();
                mt(this._proxy, this.project(t, e), this.getZoomScale(e, 1))
            }, this), this._on("unload", this._destroyAnimProxy, this)
        },
        _destroyAnimProxy: function () {
            nt(this._proxy), delete this._proxy
        },
        _catchTransitionEnd: function (t) {
            this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
        },
        _nothingToAnimate: function () {
            return !this._container.getElementsByClassName("leaflet-zoom-animated").length
        },
        _tryAnimatedZoom: function (t, e, i) {
            if (this._animatingZoom) return !0;
            if (i = i || {}, !this._zoomAnimated || !1 === i.animate || this._nothingToAnimate() || Math.abs(e - this._zoom) > this.options.zoomAnimationThreshold) return !1;
            var n = this.getZoomScale(e), o = this._getCenterOffset(t)._divideBy(1 - 1 / n);
            return !(!0 !== i.animate && !this.getSize().contains(o) || (_(function () {
                this._moveStart(!0)._animateZoom(t, e, !0)
            }, this), 0))
        },
        _animateZoom: function (t, e, n, o) {
            n && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = e, lt(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
                center: t,
                zoom: e,
                noUpdate: o
            }), setTimeout(i(this._onZoomTransitionEnd, this), 250)
        },
        _onZoomTransitionEnd: function () {
            this._animatingZoom && (ct(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom), _(function () {
                this._moveEnd(!0)
            }, this))
        }
    }), ui = v.extend({
        options: {position: "topright"}, initialize: function (t) {
            d(this, t)
        }, getPosition: function () {
            return this.options.position
        }, setPosition: function (t) {
            var e = this._map;
            return e && e.removeControl(this), this.options.position = t, e && e.addControl(this), this
        }, getContainer: function () {
            return this._container
        }, addTo: function (t) {
            this.remove(), this._map = t;
            var e = this._container = this.onAdd(t), i = this.getPosition(), n = t._controlCorners[i];
            return lt(e, "leaflet-control"), -1 !== i.indexOf("bottom") ? n.insertBefore(e, n.firstChild) : n.appendChild(e), this
        }, remove: function () {
            return this._map ? (nt(this._container), this.onRemove && this.onRemove(this._map), this._map = null, this) : this
        }, _refocusOnMap: function (t) {
            this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
        }
    }), hi = function (t) {
        return new ui(t)
    };
    di.include({
        addControl: function (t) {
            return t.addTo(this), this
        }, removeControl: function (t) {
            return t.remove(), this
        }, _initControlPos: function () {
            function t(t, o) {
                var s = i + t + " " + i + o;
                e[t + o] = it("div", s, n)
            }

            var e = this._controlCorners = {}, i = "leaflet-",
                n = this._controlContainer = it("div", i + "control-container", this._container);
            t("top", "left"), t("top", "right"), t("bottom", "left"), t("bottom", "right")
        }, _clearControlPos: function () {
            for (var t in this._controlCorners) nt(this._controlCorners[t]);
            nt(this._controlContainer), delete this._controlCorners, delete this._controlContainer
        }
    });
    var pi = ui.extend({
        options: {
            collapsed: !0,
            position: "topright",
            autoZIndex: !0,
            hideSingleBase: !1,
            sortLayers: !1,
            sortFunction: function (t, e, i, n) {
                return i < n ? -1 : n < i ? 1 : 0
            }
        }, initialize: function (t, e, i) {
            for (var n in d(this, i), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, t) this._addLayer(t[n], n);
            for (n in e) this._addLayer(e[n], n, !0)
        }, onAdd: function (t) {
            this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this);
            for (var e = 0; e < this._layers.length; e++) this._layers[e].layer.on("add remove", this._onLayerChange, this);
            return this._container
        }, addTo: function (t) {
            return ui.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
        }, onRemove: function () {
            this._map.off("zoomend", this._checkDisabledLayers, this);
            for (var t = 0; t < this._layers.length; t++) this._layers[t].layer.off("add remove", this._onLayerChange, this)
        }, addBaseLayer: function (t, e) {
            return this._addLayer(t, e), this._map ? this._update() : this
        }, addOverlay: function (t, e) {
            return this._addLayer(t, e, !0), this._map ? this._update() : this
        }, removeLayer: function (t) {
            t.off("add remove", this._onLayerChange, this);
            var e = this._getLayer(n(t));
            return e && this._layers.splice(this._layers.indexOf(e), 1), this._map ? this._update() : this
        }, expand: function () {
            lt(this._container, "leaflet-control-layers-expanded"), this._form.style.height = null;
            var t = this._map.getSize().y - (this._container.offsetTop + 50);
            return t < this._form.clientHeight ? (lt(this._form, "leaflet-control-layers-scrollbar"), this._form.style.height = t + "px") : ct(this._form, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this
        }, collapse: function () {
            return ct(this._container, "leaflet-control-layers-expanded"), this
        }, _initLayout: function () {
            var t = "leaflet-control-layers", e = this._container = it("div", t), i = this.options.collapsed;
            e.setAttribute("aria-haspopup", !0), W(e), U(e);
            var n = this._form = it("form", t + "-list");
            i && (this._map.on("click", this.collapse, this), fe || G(e, {
                mouseenter: this.expand,
                mouseleave: this.collapse
            }, this));
            var o = this._layersLink = it("a", t + "-toggle", e);
            o.href = "#", o.title = "Layers", Oe ? (G(o, "click", q), G(o, "click", this.expand, this)) : G(o, "focus", this.expand, this), i || this.expand(), this._baseLayersList = it("div", t + "-base", n), this._separator = it("div", t + "-separator", n), this._overlaysList = it("div", t + "-overlays", n), e.appendChild(n)
        }, _getLayer: function (t) {
            for (var e = 0; e < this._layers.length; e++) if (this._layers[e] && n(this._layers[e].layer) === t) return this._layers[e]
        }, _addLayer: function (t, e, n) {
            this._map && t.on("add remove", this._onLayerChange, this), this._layers.push({
                layer: t,
                name: e,
                overlay: n
            }), this.options.sortLayers && this._layers.sort(i(function (t, e) {
                return this.options.sortFunction(t.layer, e.layer, t.name, e.name)
            }, this)), this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed()
        }, _update: function () {
            if (!this._container) return this;
            ot(this._baseLayersList), ot(this._overlaysList), this._layerControlInputs = [];
            var t, e, i, n, o = 0;
            for (i = 0; i < this._layers.length; i++) n = this._layers[i], this._addItem(n), e = e || n.overlay, t = t || !n.overlay, o += n.overlay ? 0 : 1;
            return this.options.hideSingleBase && (t = t && o > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = e && t ? "" : "none", this
        }, _onLayerChange: function (t) {
            this._handlingClick || this._update();
            var e = this._getLayer(n(t.target)),
                i = e.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
            i && this._map.fire(i, e)
        }, _createRadioElement: function (t, e) {
            var i = '<input type="radio" class="leaflet-control-layers-selector" name="' + t + '"' + (e ? ' checked="checked"' : "") + "/>",
                n = document.createElement("div");
            return n.innerHTML = i, n.firstChild
        }, _addItem: function (t) {
            var e, i = document.createElement("label"), o = this._map.hasLayer(t.layer);
            t.overlay ? ((e = document.createElement("input")).type = "checkbox", e.className = "leaflet-control-layers-selector", e.defaultChecked = o) : e = this._createRadioElement("leaflet-base-layers", o), this._layerControlInputs.push(e), e.layerId = n(t.layer), G(e, "click", this._onInputClick, this);
            var s = document.createElement("span");
            s.innerHTML = " " + t.name;
            var a = document.createElement("div");
            return i.appendChild(a), a.appendChild(e), a.appendChild(s), (t.overlay ? this._overlaysList : this._baseLayersList).appendChild(i), this._checkDisabledLayers(), i
        }, _onInputClick: function () {
            var t, e, i = this._layerControlInputs, n = [], o = [];
            this._handlingClick = !0;
            for (var s = i.length - 1; s >= 0; s--) t = i[s], e = this._getLayer(t.layerId).layer, t.checked ? n.push(e) : t.checked || o.push(e);
            for (s = 0; s < o.length; s++) this._map.hasLayer(o[s]) && this._map.removeLayer(o[s]);
            for (s = 0; s < n.length; s++) this._map.hasLayer(n[s]) || this._map.addLayer(n[s]);
            this._handlingClick = !1, this._refocusOnMap()
        }, _checkDisabledLayers: function () {
            for (var t, e, i = this._layerControlInputs, n = this._map.getZoom(), o = i.length - 1; o >= 0; o--) t = i[o], e = this._getLayer(t.layerId).layer, t.disabled = void 0 !== e.options.minZoom && n < e.options.minZoom || void 0 !== e.options.maxZoom && n > e.options.maxZoom
        }, _expandIfNotCollapsed: function () {
            return this._map && !this.options.collapsed && this.expand(), this
        }, _expand: function () {
            return this.expand()
        }, _collapse: function () {
            return this.collapse()
        }
    }), mi = ui.extend({
        options: {
            position: "topleft",
            zoomInText: "+",
            zoomInTitle: "Zoom in",
            zoomOutText: "&#x2212;",
            zoomOutTitle: "Zoom out"
        }, onAdd: function (t) {
            var e = "leaflet-control-zoom", i = it("div", e + " leaflet-bar"), n = this.options;
            return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, e + "-in", i, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, e + "-out", i, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), i
        }, onRemove: function (t) {
            t.off("zoomend zoomlevelschange", this._updateDisabled, this)
        }, disable: function () {
            return this._disabled = !0, this._updateDisabled(), this
        }, enable: function () {
            return this._disabled = !1, this._updateDisabled(), this
        }, _zoomIn: function (t) {
            !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        }, _zoomOut: function (t) {
            !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (t.shiftKey ? 3 : 1))
        }, _createButton: function (t, e, i, n, o) {
            var s = it("a", i, n);
            return s.innerHTML = t, s.href = "#", s.title = e, s.setAttribute("role", "button"), s.setAttribute("aria-label", e), W(s), G(s, "click", q), G(s, "click", o, this), G(s, "click", this._refocusOnMap, this), s
        }, _updateDisabled: function () {
            var t = this._map, e = "leaflet-disabled";
            ct(this._zoomInButton, e), ct(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMinZoom()) && lt(this._zoomOutButton, e), (this._disabled || t._zoom === t.getMaxZoom()) && lt(this._zoomInButton, e)
        }
    });
    di.mergeOptions({zoomControl: !0}), di.addInitHook(function () {
        this.options.zoomControl && (this.zoomControl = new mi, this.addControl(this.zoomControl))
    });
    var fi = ui.extend({
        options: {position: "bottomleft", maxWidth: 100, metric: !0, imperial: !0}, onAdd: function (t) {
            var e = it("div", "leaflet-control-scale"), i = this.options;
            return this._addScales(i, "leaflet-control-scale-line", e), t.on(i.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
        }, onRemove: function (t) {
            t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
        }, _addScales: function (t, e, i) {
            t.metric && (this._mScale = it("div", e, i)), t.imperial && (this._iScale = it("div", e, i))
        }, _update: function () {
            var t = this._map, e = t.getSize().y / 2,
                i = t.distance(t.containerPointToLatLng([0, e]), t.containerPointToLatLng([this.options.maxWidth, e]));
            this._updateScales(i)
        }, _updateScales: function (t) {
            this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
        }, _updateMetric: function (t) {
            var e = this._getRoundNum(t), i = e < 1e3 ? e + " m" : e / 1e3 + " km";
            this._updateScale(this._mScale, i, e / t)
        }, _updateImperial: function (t) {
            var e, i, n, o = 3.2808399 * t;
            o > 5280 ? (e = o / 5280, i = this._getRoundNum(e), this._updateScale(this._iScale, i + " mi", i / e)) : (n = this._getRoundNum(o), this._updateScale(this._iScale, n + " ft", n / o))
        }, _updateScale: function (t, e, i) {
            t.style.width = Math.round(this.options.maxWidth * i) + "px", t.innerHTML = e
        }, _getRoundNum: function (t) {
            var e = Math.pow(10, (Math.floor(t) + "").length - 1), i = t / e;
            return e * (i = i >= 10 ? 10 : i >= 5 ? 5 : i >= 3 ? 3 : i >= 2 ? 2 : 1)
        }
    }), _i = ui.extend({
        options: {
            position: "bottomright",
            prefix: '<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'
        }, initialize: function (t) {
            d(this, t), this._attributions = {}
        }, onAdd: function (t) {
            for (var e in t.attributionControl = this, this._container = it("div", "leaflet-control-attribution"), W(this._container), t._layers) t._layers[e].getAttribution && this.addAttribution(t._layers[e].getAttribution());
            return this._update(), this._container
        }, setPrefix: function (t) {
            return this.options.prefix = t, this._update(), this
        }, addAttribution: function (t) {
            return t ? (this._attributions[t] || (this._attributions[t] = 0), this._attributions[t]++, this._update(), this) : this
        }, removeAttribution: function (t) {
            return t ? (this._attributions[t] && (this._attributions[t]--, this._update()), this) : this
        }, _update: function () {
            if (this._map) {
                var t = [];
                for (var e in this._attributions) this._attributions[e] && t.push(e);
                var i = [];
                this.options.prefix && i.push(this.options.prefix), t.length && i.push(t.join(", ")), this._container.innerHTML = i.join(" | ")
            }
        }
    });
    di.mergeOptions({attributionControl: !0}), di.addInitHook(function () {
        this.options.attributionControl && (new _i).addTo(this)
    }), ui.Layers = pi, ui.Zoom = mi, ui.Scale = fi, ui.Attribution = _i, hi.layers = function (t, e, i) {
        return new pi(t, e, i)
    }, hi.zoom = function (t) {
        return new mi(t)
    }, hi.scale = function (t) {
        return new fi(t)
    }, hi.attribution = function (t) {
        return new _i(t)
    };
    var gi, vi, yi = v.extend({
            initialize: function (t) {
                this._map = t
            }, enable: function () {
                return this._enabled ? this : (this._enabled = !0, this.addHooks(), this)
            }, disable: function () {
                return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this
            }, enabled: function () {
                return !!this._enabled
            }
        }), bi = {Events: Jt}, Li = Oe ? "touchstart mousedown" : "mousedown",
        wi = {mousedown: "mouseup", touchstart: "touchend", pointerdown: "touchend", MSPointerDown: "touchend"},
        Mi = {mousedown: "mousemove", touchstart: "touchmove", pointerdown: "touchmove", MSPointerDown: "touchmove"},
        xi = Kt.extend({
            options: {clickTolerance: 3}, initialize: function (t, e, i, n) {
                d(this, n), this._element = t, this._dragStartTarget = e || t, this._preventOutline = i
            }, enable: function () {
                this._enabled || (G(this._dragStartTarget, Li, this._onDown, this), this._enabled = !0)
            }, disable: function () {
                this._enabled && (xi._dragging === this && this.finishDrag(), N(this._dragStartTarget, Li, this._onDown, this), this._enabled = !1, this._moved = !1)
            }, _onDown: function (t) {
                if (!t._simulated && this._enabled && (this._moved = !1, !rt(this._element, "leaflet-zoom-anim") && !(xi._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches || (xi._dragging = this, this._preventOutline && yt(this._element), gt(), oe(), this._moving)))) {
                    this.fire("down");
                    var e = t.touches ? t.touches[0] : t;
                    this._startPoint = new y(e.clientX, e.clientY), G(document, Mi[t.type], this._onMove, this), G(document, wi[t.type], this._onUp, this)
                }
            }, _onMove: function (t) {
                if (!t._simulated && this._enabled) if (t.touches && t.touches.length > 1) this._moved = !0; else {
                    var e = t.touches && 1 === t.touches.length ? t.touches[0] : t,
                        i = new y(e.clientX, e.clientY).subtract(this._startPoint);
                    (i.x || i.y) && (Math.abs(i.x) + Math.abs(i.y) < this.options.clickTolerance || (V(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = _t(this._element).subtract(i), lt(document.body, "leaflet-dragging"), this._lastTarget = t.target || t.srcElement, window.SVGElementInstance && this._lastTarget instanceof SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), lt(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(i), this._moving = !0, g(this._animRequest), this._lastEvent = t, this._animRequest = _(this._updatePosition, this, !0)))
                }
            }, _updatePosition: function () {
                var t = {originalEvent: this._lastEvent};
                this.fire("predrag", t), ft(this._element, this._newPos), this.fire("drag", t)
            }, _onUp: function (t) {
                !t._simulated && this._enabled && this.finishDrag()
            }, finishDrag: function () {
                for (var t in ct(document.body, "leaflet-dragging"), this._lastTarget && (ct(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Mi) N(document, Mi[t], this._onMove, this), N(document, wi[t], this._onUp, this);
                vt(), se(), this._moved && this._moving && (g(this._animRequest), this.fire("dragend", {distance: this._newPos.distanceTo(this._startPos)})), this._moving = !1, xi._dragging = !1
            }
        }), ki = (Object.freeze || Object)({
            simplify: Lt,
            pointToSegmentDistance: wt,
            closestPointOnSegment: function (t, e, i) {
                return $t(t, e, i)
            },
            clipSegment: Mt,
            _getEdgeIntersection: xt,
            _getBitCode: kt,
            _sqClosestPointOnSegment: $t,
            isFlat: Ct,
            _flat: Tt
        }), $i = (Object.freeze || Object)({clipPolygon: Pt}), Ci = {
            project: function (t) {
                return new y(t.lng, t.lat)
            }, unproject: function (t) {
                return new $(t.y, t.x)
            }, bounds: new w([-180, -90], [180, 90])
        }, Ti = {
            R: 6378137,
            R_MINOR: 6356752.314245179,
            bounds: new w([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
            project: function (t) {
                var e = Math.PI / 180, i = this.R, n = t.lat * e, o = this.R_MINOR / i, s = Math.sqrt(1 - o * o),
                    a = s * Math.sin(n), r = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - a) / (1 + a), s / 2);
                return n = -i * Math.log(Math.max(r, 1e-10)), new y(t.lng * e * i, n)
            },
            unproject: function (t) {
                for (var e, i = 180 / Math.PI, n = this.R, o = this.R_MINOR / n, s = Math.sqrt(1 - o * o), a = Math.exp(-t.y / n), r = Math.PI / 2 - 2 * Math.atan(a), l = 0, c = .1; l < 15 && Math.abs(c) > 1e-7; l++) e = s * Math.sin(r), e = Math.pow((1 - e) / (1 + e), s / 2), r += c = Math.PI / 2 - 2 * Math.atan(a * e) - r;
                return new $(r * i, t.x * i / n)
            }
        }, Pi = (Object.freeze || Object)({LonLat: Ci, Mercator: Ti, SphericalMercator: ie}), Ei = e({}, ee, {
            code: "EPSG:3395",
            projection: Ti,
            transformation: (vi = .5 / (Math.PI * Ti.R), P(vi, .5, -vi, .5))
        }), Si = e({}, ee, {code: "EPSG:4326", projection: Ci, transformation: P(1 / 180, 1, -1 / 180, .5)}),
        zi = e({}, te, {
            projection: Ci, transformation: P(1, 0, -1, 0), scale: function (t) {
                return Math.pow(2, t)
            }, zoom: function (t) {
                return Math.log(t) / Math.LN2
            }, distance: function (t, e) {
                var i = e.lng - t.lng, n = e.lat - t.lat;
                return Math.sqrt(i * i + n * n)
            }, infinite: !0
        });
    te.Earth = ee, te.EPSG3395 = Ei, te.EPSG3857 = le, te.EPSG900913 = ce, te.EPSG4326 = Si, te.Simple = zi;
    var Oi = Kt.extend({
        options: {pane: "overlayPane", attribution: null, bubblingMouseEvents: !0},
        addTo: function (t) {
            return t.addLayer(this), this
        },
        remove: function () {
            return this.removeFrom(this._map || this._mapToAdd)
        },
        removeFrom: function (t) {
            return t && t.removeLayer(this), this
        },
        getPane: function (t) {
            return this._map.getPane(t ? this.options[t] || t : this.options.pane)
        },
        addInteractiveTarget: function (t) {
            return this._map._targets[n(t)] = this, this
        },
        removeInteractiveTarget: function (t) {
            return delete this._map._targets[n(t)], this
        },
        getAttribution: function () {
            return this.options.attribution
        },
        _layerAdd: function (t) {
            var e = t.target;
            if (e.hasLayer(this)) {
                if (this._map = e, this._zoomAnimated = e._zoomAnimated, this.getEvents) {
                    var i = this.getEvents();
                    e.on(i, this), this.once("remove", function () {
                        e.off(i, this)
                    }, this)
                }
                this.onAdd(e), this.getAttribution && e.attributionControl && e.attributionControl.addAttribution(this.getAttribution()), this.fire("add"), e.fire("layeradd", {layer: this})
            }
        }
    });
    di.include({
        addLayer: function (t) {
            if (!t._layerAdd) throw new Error("The provided object is not a Layer.");
            var e = n(t);
            return this._layers[e] ? this : (this._layers[e] = t, t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
        }, removeLayer: function (t) {
            var e = n(t);
            return this._layers[e] ? (this._loaded && t.onRemove(this), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), delete this._layers[e], this._loaded && (this.fire("layerremove", {layer: t}), t.fire("remove")), t._map = t._mapToAdd = null, this) : this
        }, hasLayer: function (t) {
            return !!t && n(t) in this._layers
        }, eachLayer: function (t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this
        }, _addLayers: function (t) {
            for (var e = 0, i = (t = t ? Ut(t) ? t : [t] : []).length; e < i; e++) this.addLayer(t[e])
        }, _addZoomLimit: function (t) {
            !isNaN(t.options.maxZoom) && isNaN(t.options.minZoom) || (this._zoomBoundLayers[n(t)] = t, this._updateZoomLevels())
        }, _removeZoomLimit: function (t) {
            var e = n(t);
            this._zoomBoundLayers[e] && (delete this._zoomBoundLayers[e], this._updateZoomLevels())
        }, _updateZoomLevels: function () {
            var t = 1 / 0, e = -1 / 0, i = this._getZoomSpan();
            for (var n in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[n].options;
                t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom), e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom)
            }
            this._layersMaxZoom = e === -1 / 0 ? void 0 : e, this._layersMinZoom = t === 1 / 0 ? void 0 : t, i !== this._getZoomSpan() && this.fire("zoomlevelschange"), void 0 === this.options.maxZoom && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), void 0 === this.options.minZoom && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom)
        }
    });
    var Di = Oi.extend({
        initialize: function (t) {
            var e, i;
            if (this._layers = {}, t) for (e = 0, i = t.length; e < i; e++) this.addLayer(t[e])
        }, addLayer: function (t) {
            var e = this.getLayerId(t);
            return this._layers[e] = t, this._map && this._map.addLayer(t), this
        }, removeLayer: function (t) {
            var e = t in this._layers ? t : this.getLayerId(t);
            return this._map && this._layers[e] && this._map.removeLayer(this._layers[e]), delete this._layers[e], this
        }, hasLayer: function (t) {
            return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
        }, clearLayers: function () {
            for (var t in this._layers) this.removeLayer(this._layers[t]);
            return this
        }, invoke: function (t) {
            var e, i, n = Array.prototype.slice.call(arguments, 1);
            for (e in this._layers) (i = this._layers[e])[t] && i[t].apply(i, n);
            return this
        }, onAdd: function (t) {
            for (var e in this._layers) t.addLayer(this._layers[e])
        }, onRemove: function (t) {
            for (var e in this._layers) t.removeLayer(this._layers[e])
        }, eachLayer: function (t, e) {
            for (var i in this._layers) t.call(e, this._layers[i]);
            return this
        }, getLayer: function (t) {
            return this._layers[t]
        }, getLayers: function () {
            var t = [];
            for (var e in this._layers) t.push(this._layers[e]);
            return t
        }, setZIndex: function (t) {
            return this.invoke("setZIndex", t)
        }, getLayerId: function (t) {
            return n(t)
        }
    }), Ii = Di.extend({
        addLayer: function (t) {
            return this.hasLayer(t) ? this : (t.addEventParent(this), Di.prototype.addLayer.call(this, t), this.fire("layeradd", {layer: t}))
        }, removeLayer: function (t) {
            return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), Di.prototype.removeLayer.call(this, t), this.fire("layerremove", {layer: t})) : this
        }, setStyle: function (t) {
            return this.invoke("setStyle", t)
        }, bringToFront: function () {
            return this.invoke("bringToFront")
        }, bringToBack: function () {
            return this.invoke("bringToBack")
        }, getBounds: function () {
            var t = new x;
            for (var e in this._layers) {
                var i = this._layers[e];
                t.extend(i.getBounds ? i.getBounds() : i.getLatLng())
            }
            return t
        }
    }), Ai = v.extend({
        initialize: function (t) {
            d(this, t)
        }, createIcon: function (t) {
            return this._createIcon("icon", t)
        }, createShadow: function (t) {
            return this._createIcon("shadow", t)
        }, _createIcon: function (t, e) {
            var i = this._getIconUrl(t);
            if (!i) {
                if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
                return null
            }
            var n = this._createImg(i, e && "IMG" === e.tagName ? e : null);
            return this._setIconStyles(n, t), n
        }, _setIconStyles: function (t, e) {
            var i = this.options, n = i[e + "Size"];
            "number" == typeof n && (n = [n, n]);
            var o = b(n), s = b("shadow" === e && i.shadowAnchor || i.iconAnchor || o && o.divideBy(2, !0));
            t.className = "leaflet-marker-" + e + " " + (i.className || ""), s && (t.style.marginLeft = -s.x + "px", t.style.marginTop = -s.y + "px"), o && (t.style.width = o.x + "px", t.style.height = o.y + "px")
        }, _createImg: function (t, e) {
            return (e = e || document.createElement("img")).src = t, e
        }, _getIconUrl: function (t) {
            return Ae && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
        }
    }), Bi = Ai.extend({
        options: {
            iconUrl: "marker-icon.png",
            iconRetinaUrl: "marker-icon-2x.png",
            shadowUrl: "marker-shadow.png",
            iconSize: [25, 41],
            iconAnchor: [12, 41],
            popupAnchor: [1, -34],
            tooltipAnchor: [16, -28],
            shadowSize: [41, 41]
        }, _getIconUrl: function (t) {
            return Bi.imagePath || (Bi.imagePath = this._detectIconPath()), (this.options.imagePath || Bi.imagePath) + Ai.prototype._getIconUrl.call(this, t)
        }, _detectIconPath: function () {
            var t = it("div", "leaflet-default-icon-path", document.body),
                e = et(t, "background-image") || et(t, "backgroundImage");
            return document.body.removeChild(t), null === e || 0 !== e.indexOf("url") ? "" : e.replace(/^url\([\"\']?/, "").replace(/marker-icon\.png[\"\']?\)$/, "")
        }
    }), Ri = yi.extend({
        initialize: function (t) {
            this._marker = t
        }, addHooks: function () {
            var t = this._marker._icon;
            this._draggable || (this._draggable = new xi(t, t, !0)), this._draggable.on({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).enable(), lt(t, "leaflet-marker-draggable")
        }, removeHooks: function () {
            this._draggable.off({
                dragstart: this._onDragStart,
                drag: this._onDrag,
                dragend: this._onDragEnd
            }, this).disable(), this._marker._icon && ct(this._marker._icon, "leaflet-marker-draggable")
        }, moved: function () {
            return this._draggable && this._draggable._moved
        }, _onDragStart: function () {
            this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup().fire("movestart").fire("dragstart")
        }, _onDrag: function (t) {
            var e = this._marker, i = e._shadow, n = _t(e._icon), o = e._map.layerPointToLatLng(n);
            i && ft(i, n), e._latlng = o, t.latlng = o, t.oldLatLng = this._oldLatLng, e.fire("move", t).fire("drag", t)
        }, _onDragEnd: function (t) {
            delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", t)
        }
    }), Zi = Oi.extend({
        options: {
            icon: new Bi,
            interactive: !0,
            draggable: !1,
            keyboard: !0,
            title: "",
            alt: "",
            zIndexOffset: 0,
            opacity: 1,
            riseOnHover: !1,
            riseOffset: 250,
            pane: "markerPane",
            bubblingMouseEvents: !1
        }, initialize: function (t, e) {
            d(this, e), this._latlng = C(t)
        }, onAdd: function (t) {
            this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._zoomAnimated && t.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update()
        }, onRemove: function (t) {
            this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && t.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow()
        }, getEvents: function () {
            return {zoom: this.update, viewreset: this.update}
        }, getLatLng: function () {
            return this._latlng
        }, setLatLng: function (t) {
            var e = this._latlng;
            return this._latlng = C(t), this.update(), this.fire("move", {oldLatLng: e, latlng: this._latlng})
        }, setZIndexOffset: function (t) {
            return this.options.zIndexOffset = t, this.update()
        }, setIcon: function (t) {
            return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
        }, getElement: function () {
            return this._icon
        }, update: function () {
            if (this._icon) {
                var t = this._map.latLngToLayerPoint(this._latlng).round();
                this._setPos(t)
            }
            return this
        }, _initIcon: function () {
            var t = this.options, e = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"),
                i = t.icon.createIcon(this._icon), n = !1;
            i !== this._icon && (this._icon && this._removeIcon(), n = !0, t.title && (i.title = t.title), t.alt && (i.alt = t.alt)), lt(i, e), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            });
            var o = t.icon.createShadow(this._shadow), s = !1;
            o !== this._shadow && (this._removeShadow(), s = !0), o && (lt(o, e), o.alt = ""), this._shadow = o, t.opacity < 1 && this._updateOpacity(), n && this.getPane().appendChild(this._icon), this._initInteraction(), o && s && this.getPane("shadowPane").appendChild(this._shadow)
        }, _removeIcon: function () {
            this.options.riseOnHover && this.off({
                mouseover: this._bringToFront,
                mouseout: this._resetZIndex
            }), nt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null
        }, _removeShadow: function () {
            this._shadow && nt(this._shadow), this._shadow = null
        }, _setPos: function (t) {
            ft(this._icon, t), this._shadow && ft(this._shadow, t), this._zIndex = t.y + this.options.zIndexOffset, this._resetZIndex()
        }, _updateZIndex: function (t) {
            this._icon.style.zIndex = this._zIndex + t
        }, _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            this._setPos(e)
        }, _initInteraction: function () {
            if (this.options.interactive && (lt(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ri)) {
                var t = this.options.draggable;
                this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ri(this), t && this.dragging.enable()
            }
        }, setOpacity: function (t) {
            return this.options.opacity = t, this._map && this._updateOpacity(), this
        }, _updateOpacity: function () {
            var t = this.options.opacity;
            ht(this._icon, t), this._shadow && ht(this._shadow, t)
        }, _bringToFront: function () {
            this._updateZIndex(this.options.riseOffset)
        }, _resetZIndex: function () {
            this._updateZIndex(0)
        }, _getPopupAnchor: function () {
            return this.options.icon.options.popupAnchor || [0, 0]
        }, _getTooltipAnchor: function () {
            return this.options.icon.options.tooltipAnchor || [0, 0]
        }
    }), Gi = Oi.extend({
        options: {
            stroke: !0,
            color: "#3388ff",
            weight: 3,
            opacity: 1,
            lineCap: "round",
            lineJoin: "round",
            dashArray: null,
            dashOffset: null,
            fill: !1,
            fillColor: null,
            fillOpacity: .2,
            fillRule: "evenodd",
            interactive: !0,
            bubblingMouseEvents: !0
        }, beforeAdd: function (t) {
            this._renderer = t.getRenderer(this)
        }, onAdd: function () {
            this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
        }, onRemove: function () {
            this._renderer._removePath(this)
        }, redraw: function () {
            return this._map && this._renderer._updatePath(this), this
        }, setStyle: function (t) {
            return d(this, t), this._renderer && this._renderer._updateStyle(this), this
        }, bringToFront: function () {
            return this._renderer && this._renderer._bringToFront(this), this
        }, bringToBack: function () {
            return this._renderer && this._renderer._bringToBack(this), this
        }, getElement: function () {
            return this._path
        }, _reset: function () {
            this._project(), this._update()
        }, _clickTolerance: function () {
            return (this.options.stroke ? this.options.weight / 2 : 0) + (Oe ? 10 : 0)
        }
    }), Ni = Gi.extend({
        options: {fill: !0, radius: 10}, initialize: function (t, e) {
            d(this, e), this._latlng = C(t), this._radius = this.options.radius
        }, setLatLng: function (t) {
            return this._latlng = C(t), this.redraw(), this.fire("move", {latlng: this._latlng})
        }, getLatLng: function () {
            return this._latlng
        }, setRadius: function (t) {
            return this.options.radius = this._radius = t, this.redraw()
        }, getRadius: function () {
            return this._radius
        }, setStyle: function (t) {
            var e = t && t.radius || this._radius;
            return Gi.prototype.setStyle.call(this, t), this.setRadius(e), this
        }, _project: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
        }, _updateBounds: function () {
            var t = this._radius, e = this._radiusY || t, i = this._clickTolerance(), n = [t + i, e + i];
            this._pxBounds = new w(this._point.subtract(n), this._point.add(n))
        }, _update: function () {
            this._map && this._updatePath()
        }, _updatePath: function () {
            this._renderer._updateCircle(this)
        }, _empty: function () {
            return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
        }, _containsPoint: function (t) {
            return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
        }
    }), Hi = Ni.extend({
        initialize: function (t, i, n) {
            if ("number" == typeof i && (i = e({}, n, {radius: i})), d(this, i), this._latlng = C(t), isNaN(this.options.radius)) throw new Error("Circle radius cannot be NaN");
            this._mRadius = this.options.radius
        }, setRadius: function (t) {
            return this._mRadius = t, this.redraw()
        }, getRadius: function () {
            return this._mRadius
        }, getBounds: function () {
            var t = [this._radius, this._radiusY || this._radius];
            return new x(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
        }, setStyle: Gi.prototype.setStyle, _project: function () {
            var t = this._latlng.lng, e = this._latlng.lat, i = this._map, n = i.options.crs;
            if (n.distance === ee.distance) {
                var o = Math.PI / 180, s = this._mRadius / ee.R / o, a = i.project([e + s, t]),
                    r = i.project([e - s, t]), l = a.add(r).divideBy(2), c = i.unproject(l).lat,
                    d = Math.acos((Math.cos(s * o) - Math.sin(e * o) * Math.sin(c * o)) / (Math.cos(e * o) * Math.cos(c * o))) / o;
                (isNaN(d) || 0 === d) && (d = s / Math.cos(Math.PI / 180 * e)), this._point = l.subtract(i.getPixelOrigin()), this._radius = isNaN(d) ? 0 : Math.max(Math.round(l.x - i.project([c, t - d]).x), 1), this._radiusY = Math.max(Math.round(l.y - a.y), 1)
            } else {
                var u = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
                this._point = i.latLngToLayerPoint(this._latlng), this._radius = this._point.x - i.latLngToLayerPoint(u).x
            }
            this._updateBounds()
        }
    }), ji = Gi.extend({
        options: {smoothFactor: 1, noClip: !1}, initialize: function (t, e) {
            d(this, e), this._setLatLngs(t)
        }, getLatLngs: function () {
            return this._latlngs
        }, setLatLngs: function (t) {
            return this._setLatLngs(t), this.redraw()
        }, isEmpty: function () {
            return !this._latlngs.length
        }, closestLayerPoint: function (t) {
            for (var e, i, n = 1 / 0, o = null, s = $t, a = 0, r = this._parts.length; a < r; a++) for (var l = this._parts[a], c = 1, d = l.length; c < d; c++) {
                var u = s(t, e = l[c - 1], i = l[c], !0);
                u < n && (n = u, o = s(t, e, i))
            }
            return o && (o.distance = Math.sqrt(n)), o
        }, getCenter: function () {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, n, o, s, a, r = this._rings[0], l = r.length;
            if (!l) return null;
            for (t = 0, e = 0; t < l - 1; t++) e += r[t].distanceTo(r[t + 1]) / 2;
            if (0 === e) return this._map.layerPointToLatLng(r[0]);
            for (t = 0, n = 0; t < l - 1; t++) if (o = r[t], s = r[t + 1], (n += i = o.distanceTo(s)) > e) return a = (n - e) / i, this._map.layerPointToLatLng([s.x - a * (s.x - o.x), s.y - a * (s.y - o.y)])
        }, getBounds: function () {
            return this._bounds
        }, addLatLng: function (t, e) {
            return e = e || this._defaultShape(), t = C(t), e.push(t), this._bounds.extend(t), this.redraw()
        }, _setLatLngs: function (t) {
            this._bounds = new x, this._latlngs = this._convertLatLngs(t)
        }, _defaultShape: function () {
            return Ct(this._latlngs) ? this._latlngs : this._latlngs[0]
        }, _convertLatLngs: function (t) {
            for (var e = [], i = Ct(t), n = 0, o = t.length; n < o; n++) i ? (e[n] = C(t[n]), this._bounds.extend(e[n])) : e[n] = this._convertLatLngs(t[n]);
            return e
        }, _project: function () {
            var t = new w;
            this._rings = [], this._projectLatlngs(this._latlngs, this._rings, t);
            var e = this._clickTolerance(), i = new y(e, e);
            this._bounds.isValid() && t.isValid() && (t.min._subtract(i), t.max._add(i), this._pxBounds = t)
        }, _projectLatlngs: function (t, e, i) {
            var n, o, s = t[0] instanceof $, a = t.length;
            if (s) {
                for (o = [], n = 0; n < a; n++) o[n] = this._map.latLngToLayerPoint(t[n]), i.extend(o[n]);
                e.push(o)
            } else for (n = 0; n < a; n++) this._projectLatlngs(t[n], e, i)
        }, _clipPoints: function () {
            var t = this._renderer._bounds;
            if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings; else {
                var e, i, n, o, s, a, r, l = this._parts;
                for (e = 0, n = 0, o = this._rings.length; e < o; e++) for (i = 0, s = (r = this._rings[e]).length; i < s - 1; i++) (a = Mt(r[i], r[i + 1], t, i, !0)) && (l[n] = l[n] || [], l[n].push(a[0]), a[1] === r[i + 1] && i !== s - 2 || (l[n].push(a[1]), n++))
            }
        }, _simplifyPoints: function () {
            for (var t = this._parts, e = this.options.smoothFactor, i = 0, n = t.length; i < n; i++) t[i] = Lt(t[i], e)
        }, _update: function () {
            this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
        }, _updatePath: function () {
            this._renderer._updatePoly(this)
        }, _containsPoint: function (t, e) {
            var i, n, o, s, a, r, l = this._clickTolerance();
            if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
            for (i = 0, s = this._parts.length; i < s; i++) for (n = 0, o = (a = (r = this._parts[i]).length) - 1; n < a; o = n++) if ((e || 0 !== n) && wt(t, r[o], r[n]) <= l) return !0;
            return !1
        }
    });
    ji._flat = Tt;
    var Fi = ji.extend({
        options: {fill: !0}, isEmpty: function () {
            return !this._latlngs.length || !this._latlngs[0].length
        }, getCenter: function () {
            if (!this._map) throw new Error("Must add layer to map before using getCenter()");
            var t, e, i, n, o, s, a, r, l, c = this._rings[0], d = c.length;
            if (!d) return null;
            for (s = a = r = 0, t = 0, e = d - 1; t < d; e = t++) i = c[t], n = c[e], o = i.y * n.x - n.y * i.x, a += (i.x + n.x) * o, r += (i.y + n.y) * o, s += 3 * o;
            return l = 0 === s ? c[0] : [a / s, r / s], this._map.layerPointToLatLng(l)
        }, _convertLatLngs: function (t) {
            var e = ji.prototype._convertLatLngs.call(this, t), i = e.length;
            return i >= 2 && e[0] instanceof $ && e[0].equals(e[i - 1]) && e.pop(), e
        }, _setLatLngs: function (t) {
            ji.prototype._setLatLngs.call(this, t), Ct(this._latlngs) && (this._latlngs = [this._latlngs])
        }, _defaultShape: function () {
            return Ct(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
        }, _clipPoints: function () {
            var t = this._renderer._bounds, e = this.options.weight, i = new y(e, e);
            if (t = new w(t.min.subtract(i), t.max.add(i)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) if (this.options.noClip) this._parts = this._rings; else for (var n, o = 0, s = this._rings.length; o < s; o++) (n = Pt(this._rings[o], t, !0)).length && this._parts.push(n)
        }, _updatePath: function () {
            this._renderer._updatePoly(this, !0)
        }, _containsPoint: function (t) {
            var e, i, n, o, s, a, r, l, c = !1;
            if (!this._pxBounds.contains(t)) return !1;
            for (o = 0, r = this._parts.length; o < r; o++) for (s = 0, a = (l = (e = this._parts[o]).length) - 1; s < l; a = s++) i = e[s], n = e[a], i.y > t.y != n.y > t.y && t.x < (n.x - i.x) * (t.y - i.y) / (n.y - i.y) + i.x && (c = !c);
            return c || ji.prototype._containsPoint.call(this, t, !0)
        }
    }), Ui = Ii.extend({
        initialize: function (t, e) {
            d(this, e), this._layers = {}, t && this.addData(t)
        }, addData: function (t) {
            var e, i, n, o = Ut(t) ? t : t.features;
            if (o) {
                for (e = 0, i = o.length; e < i; e++) ((n = o[e]).geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
                return this
            }
            var s = this.options;
            if (s.filter && !s.filter(t)) return this;
            var a = Et(t, s);
            return a ? (a.feature = At(t), a.defaultOptions = a.options, this.resetStyle(a), s.onEachFeature && s.onEachFeature(t, a), this.addLayer(a)) : this
        }, resetStyle: function (t) {
            return t.options = e({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
        }, setStyle: function (t) {
            return this.eachLayer(function (e) {
                this._setLayerStyle(e, t)
            }, this)
        }, _setLayerStyle: function (t, e) {
            "function" == typeof e && (e = e(t.feature)), t.setStyle && t.setStyle(e)
        }
    }), Wi = {
        toGeoJSON: function (t) {
            return It(this, {type: "Point", coordinates: Ot(this.getLatLng(), t)})
        }
    };
    Zi.include(Wi), Hi.include(Wi), Ni.include(Wi), ji.include({
        toGeoJSON: function (t) {
            var e = !Ct(this._latlngs);
            return It(this, {type: (e ? "Multi" : "") + "LineString", coordinates: Dt(this._latlngs, e ? 1 : 0, !1, t)})
        }
    }), Fi.include({
        toGeoJSON: function (t) {
            var e = !Ct(this._latlngs), i = e && !Ct(this._latlngs[0]), n = Dt(this._latlngs, i ? 2 : e ? 1 : 0, !0, t);
            return e || (n = [n]), It(this, {type: (i ? "Multi" : "") + "Polygon", coordinates: n})
        }
    }), Di.include({
        toMultiPoint: function (t) {
            var e = [];
            return this.eachLayer(function (i) {
                e.push(i.toGeoJSON(t).geometry.coordinates)
            }), It(this, {type: "MultiPoint", coordinates: e})
        }, toGeoJSON: function (t) {
            var e = this.feature && this.feature.geometry && this.feature.geometry.type;
            if ("MultiPoint" === e) return this.toMultiPoint(t);
            var i = "GeometryCollection" === e, n = [];
            return this.eachLayer(function (e) {
                if (e.toGeoJSON) {
                    var o = e.toGeoJSON(t);
                    if (i) n.push(o.geometry); else {
                        var s = At(o);
                        "FeatureCollection" === s.type ? n.push.apply(n, s.features) : n.push(s)
                    }
                }
            }), i ? It(this, {geometries: n, type: "GeometryCollection"}) : {type: "FeatureCollection", features: n}
        }
    });
    var Vi = Bt, qi = Oi.extend({
        options: {opacity: 1, alt: "", interactive: !1, crossOrigin: !1, errorOverlayUrl: "", zIndex: 1, className: ""},
        initialize: function (t, e, i) {
            this._url = t, this._bounds = k(e), d(this, i)
        },
        onAdd: function () {
            this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (lt(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
        },
        onRemove: function () {
            nt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
        },
        setOpacity: function (t) {
            return this.options.opacity = t, this._image && this._updateOpacity(), this
        },
        setStyle: function (t) {
            return t.opacity && this.setOpacity(t.opacity), this
        },
        bringToFront: function () {
            return this._map && st(this._image), this
        },
        bringToBack: function () {
            return this._map && at(this._image), this
        },
        setUrl: function (t) {
            return this._url = t, this._image && (this._image.src = t), this
        },
        setBounds: function (t) {
            return this._bounds = k(t), this._map && this._reset(), this
        },
        getEvents: function () {
            var t = {zoom: this._reset, viewreset: this._reset};
            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        },
        setZIndex: function (t) {
            return this.options.zIndex = t, this._updateZIndex(), this
        },
        getBounds: function () {
            return this._bounds
        },
        getElement: function () {
            return this._image
        },
        _initImage: function () {
            var t = this._image = it("img", "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : "") + (this.options.className || ""));
            t.onselectstart = a, t.onmousemove = a, t.onload = i(this.fire, this, "load"), t.onerror = i(this._overlayOnError, this, "error"), this.options.crossOrigin && (t.crossOrigin = ""), this.options.zIndex && this._updateZIndex(), t.src = this._url, t.alt = this.options.alt
        },
        _animateZoom: function (t) {
            var e = this._map.getZoomScale(t.zoom),
                i = this._map._latLngBoundsToNewLayerBounds(this._bounds, t.zoom, t.center).min;
            mt(this._image, i, e)
        },
        _reset: function () {
            var t = this._image,
                e = new w(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
                i = e.getSize();
            ft(t, e.min), t.style.width = i.x + "px", t.style.height = i.y + "px"
        },
        _updateOpacity: function () {
            ht(this._image, this.options.opacity)
        },
        _updateZIndex: function () {
            this._image && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._image.style.zIndex = this.options.zIndex)
        },
        _overlayOnError: function () {
            this.fire("error");
            var t = this.options.errorOverlayUrl;
            t && this._url !== t && (this._url = t, this._image.src = t)
        }
    }), Yi = qi.extend({
        options: {autoplay: !0, loop: !0}, _initImage: function () {
            var t = "VIDEO" === this._url.tagName, e = this._image = t ? this._url : it("video");
            if (e.class = e.class || "", e.class += "leaflet-image-layer " + (this._zoomAnimated ? "leaflet-zoom-animated" : ""), e.onselectstart = a, e.onmousemove = a, e.onloadeddata = i(this.fire, this, "load"), !t) {
                Ut(this._url) || (this._url = [this._url]), e.autoplay = !!this.options.autoplay, e.loop = !!this.options.loop;
                for (var n = 0; n < this._url.length; n++) {
                    var o = it("source");
                    o.src = this._url[n], e.appendChild(o)
                }
            }
        }
    }), Xi = Oi.extend({
        options: {offset: [0, 7], className: "", pane: "popupPane"}, initialize: function (t, e) {
            d(this, t), this._source = e
        }, onAdd: function (t) {
            this._zoomAnimated = t._zoomAnimated, this._container || this._initLayout(), t._fadeAnimated && ht(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && ht(this._container, 1), this.bringToFront()
        }, onRemove: function (t) {
            t._fadeAnimated ? (ht(this._container, 0), this._removeTimeout = setTimeout(i(nt, void 0, this._container), 200)) : nt(this._container)
        }, getLatLng: function () {
            return this._latlng
        }, setLatLng: function (t) {
            return this._latlng = C(t), this._map && (this._updatePosition(), this._adjustPan()), this
        }, getContent: function () {
            return this._content
        }, setContent: function (t) {
            return this._content = t, this.update(), this
        }, getElement: function () {
            return this._container
        }, update: function () {
            this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
        }, getEvents: function () {
            var t = {zoom: this._updatePosition, viewreset: this._updatePosition};
            return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        }, isOpen: function () {
            return !!this._map && this._map.hasLayer(this)
        }, bringToFront: function () {
            return this._map && st(this._container), this
        }, bringToBack: function () {
            return this._map && at(this._container), this
        }, _updateContent: function () {
            if (this._content) {
                var t = this._contentNode,
                    e = "function" == typeof this._content ? this._content(this._source || this) : this._content;
                if ("string" == typeof e) t.innerHTML = e; else {
                    for (; t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.appendChild(e)
                }
                this.fire("contentupdate")
            }
        }, _updatePosition: function () {
            if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng), e = b(this.options.offset), i = this._getAnchor();
                this._zoomAnimated ? ft(this._container, t.add(i)) : e = e.add(t).add(i);
                var n = this._containerBottom = -e.y,
                    o = this._containerLeft = -Math.round(this._containerWidth / 2) + e.x;
                this._container.style.bottom = n + "px", this._container.style.left = o + "px"
            }
        }, _getAnchor: function () {
            return [0, 0]
        }
    }), Ji = Xi.extend({
        options: {
            maxWidth: 300,
            minWidth: 50,
            maxHeight: null,
            autoPan: !0,
            autoPanPaddingTopLeft: null,
            autoPanPaddingBottomRight: null,
            autoPanPadding: [5, 5],
            keepInView: !1,
            closeButton: !0,
            autoClose: !0,
            className: ""
        }, openOn: function (t) {
            return t.openPopup(this), this
        }, onAdd: function (t) {
            Xi.prototype.onAdd.call(this, t), t.fire("popupopen", {popup: this}), this._source && (this._source.fire("popupopen", {popup: this}, !0), this._source instanceof Gi || this._source.on("preclick", F))
        }, onRemove: function (t) {
            Xi.prototype.onRemove.call(this, t), t.fire("popupclose", {popup: this}), this._source && (this._source.fire("popupclose", {popup: this}, !0), this._source instanceof Gi || this._source.off("preclick", F))
        }, getEvents: function () {
            var t = Xi.prototype.getEvents.call(this);
            return (void 0 !== this.options.closeOnClick ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
        }, _close: function () {
            this._map && this._map.closePopup(this)
        }, _initLayout: function () {
            var t = "leaflet-popup",
                e = this._container = it("div", t + " " + (this.options.className || "") + " leaflet-zoom-animated"),
                i = this._wrapper = it("div", t + "-content-wrapper", e);
            if (this._contentNode = it("div", t + "-content", i), W(i), U(this._contentNode), G(i, "contextmenu", F), this._tipContainer = it("div", t + "-tip-container", e), this._tip = it("div", t + "-tip", this._tipContainer), this.options.closeButton) {
                var n = this._closeButton = it("a", t + "-close-button", e);
                n.href = "#close", n.innerHTML = "&#215;", G(n, "click", this._onCloseButtonClick, this)
            }
        }, _updateLayout: function () {
            var t = this._contentNode, e = t.style;
            e.width = "", e.whiteSpace = "nowrap";
            var i = t.offsetWidth;
            i = Math.min(i, this.options.maxWidth), i = Math.max(i, this.options.minWidth), e.width = i + 1 + "px", e.whiteSpace = "", e.height = "";
            var n = t.offsetHeight, o = this.options.maxHeight;
            o && n > o ? (e.height = o + "px", lt(t, "leaflet-popup-scrolled")) : ct(t, "leaflet-popup-scrolled"), this._containerWidth = this._container.offsetWidth
        }, _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center), i = this._getAnchor();
            ft(this._container, e.add(i))
        }, _adjustPan: function () {
            if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
                var t = this._map, e = parseInt(et(this._container, "marginBottom"), 10) || 0,
                    i = this._container.offsetHeight + e, n = this._containerWidth,
                    o = new y(this._containerLeft, -i - this._containerBottom);
                o._add(_t(this._container));
                var s = t.layerPointToContainerPoint(o), a = b(this.options.autoPanPadding),
                    r = b(this.options.autoPanPaddingTopLeft || a), l = b(this.options.autoPanPaddingBottomRight || a),
                    c = t.getSize(), d = 0, u = 0;
                s.x + n + l.x > c.x && (d = s.x + n - c.x + l.x), s.x - d - r.x < 0 && (d = s.x - r.x), s.y + i + l.y > c.y && (u = s.y + i - c.y + l.y), s.y - u - r.y < 0 && (u = s.y - r.y), (d || u) && t.fire("autopanstart").panBy([d, u])
            }
        }, _onCloseButtonClick: function (t) {
            this._close(), q(t)
        }, _getAnchor: function () {
            return b(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0])
        }
    });
    di.mergeOptions({closePopupOnClick: !0}), di.include({
        openPopup: function (t, e, i) {
            return t instanceof Ji || (t = new Ji(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && this.closePopup(), this._popup = t, this.addLayer(t))
        }, closePopup: function (t) {
            return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
        }
    }), Oi.include({
        bindPopup: function (t, e) {
            return t instanceof Ji ? (d(t, e), this._popup = t, t._source = this) : (this._popup && !e || (this._popup = new Ji(e, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !0), this
        }, unbindPopup: function () {
            return this._popup && (this.off({
                click: this._openPopup,
                keypress: this._onKeyPress,
                remove: this.closePopup,
                move: this._movePopup
            }), this._popupHandlersAdded = !1, this._popup = null), this
        }, openPopup: function (t, e) {
            if (t instanceof Oi || (e = t, t = this), t instanceof Ii) for (var i in this._layers) {
                t = this._layers[i];
                break
            }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, e)), this
        }, closePopup: function () {
            return this._popup && this._popup._close(), this
        }, togglePopup: function (t) {
            return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
        }, isPopupOpen: function () {
            return !!this._popup && this._popup.isOpen()
        }, setPopupContent: function (t) {
            return this._popup && this._popup.setContent(t), this
        }, getPopup: function () {
            return this._popup
        }, _openPopup: function (t) {
            var e = t.layer || t.target;
            this._popup && this._map && (q(t), e instanceof Gi ? this.openPopup(t.layer || t.target, t.latlng) : this._map.hasLayer(this._popup) && this._popup._source === e ? this.closePopup() : this.openPopup(e, t.latlng))
        }, _movePopup: function (t) {
            this._popup.setLatLng(t.latlng)
        }, _onKeyPress: function (t) {
            13 === t.originalEvent.keyCode && this._openPopup(t)
        }
    });
    var Ki = Xi.extend({
        options: {
            pane: "tooltipPane",
            offset: [0, 0],
            direction: "auto",
            permanent: !1,
            sticky: !1,
            interactive: !1,
            opacity: .9
        }, onAdd: function (t) {
            Xi.prototype.onAdd.call(this, t), this.setOpacity(this.options.opacity), t.fire("tooltipopen", {tooltip: this}), this._source && this._source.fire("tooltipopen", {tooltip: this}, !0)
        }, onRemove: function (t) {
            Xi.prototype.onRemove.call(this, t), t.fire("tooltipclose", {tooltip: this}), this._source && this._source.fire("tooltipclose", {tooltip: this}, !0)
        }, getEvents: function () {
            var t = Xi.prototype.getEvents.call(this);
            return Oe && !this.options.permanent && (t.preclick = this._close), t
        }, _close: function () {
            this._map && this._map.closeTooltip(this)
        }, _initLayout: function () {
            var t = "leaflet-tooltip " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
            this._contentNode = this._container = it("div", t)
        }, _updateLayout: function () {
        }, _adjustPan: function () {
        }, _setPosition: function (t) {
            var e = this._map, i = this._container, n = e.latLngToContainerPoint(e.getCenter()),
                o = e.layerPointToContainerPoint(t), s = this.options.direction, a = i.offsetWidth, r = i.offsetHeight,
                l = b(this.options.offset), c = this._getAnchor();
            "top" === s ? t = t.add(b(-a / 2 + l.x, -r + l.y + c.y, !0)) : "bottom" === s ? t = t.subtract(b(a / 2 - l.x, -l.y, !0)) : "center" === s ? t = t.subtract(b(a / 2 + l.x, r / 2 - c.y + l.y, !0)) : "right" === s || "auto" === s && o.x < n.x ? (s = "right", t = t.add(b(l.x + c.x, c.y - r / 2 + l.y, !0))) : (s = "left", t = t.subtract(b(a + c.x - l.x, r / 2 - c.y - l.y, !0))), ct(i, "leaflet-tooltip-right"), ct(i, "leaflet-tooltip-left"), ct(i, "leaflet-tooltip-top"), ct(i, "leaflet-tooltip-bottom"), lt(i, "leaflet-tooltip-" + s), ft(i, t)
        }, _updatePosition: function () {
            var t = this._map.latLngToLayerPoint(this._latlng);
            this._setPosition(t)
        }, setOpacity: function (t) {
            this.options.opacity = t, this._container && ht(this._container, t)
        }, _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
            this._setPosition(e)
        }, _getAnchor: function () {
            return b(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0])
        }
    });
    di.include({
        openTooltip: function (t, e, i) {
            return t instanceof Ki || (t = new Ki(i).setContent(t)), e && t.setLatLng(e), this.hasLayer(t) ? this : this.addLayer(t)
        }, closeTooltip: function (t) {
            return t && this.removeLayer(t), this
        }
    }), Oi.include({
        bindTooltip: function (t, e) {
            return t instanceof Ki ? (d(t, e), this._tooltip = t, t._source = this) : (this._tooltip && !e || (this._tooltip = new Ki(e, this)), this._tooltip.setContent(t)), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this
        }, unbindTooltip: function () {
            return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this
        }, _initTooltipInteractions: function (t) {
            if (t || !this._tooltipHandlersAdded) {
                var e = t ? "off" : "on", i = {remove: this.closeTooltip, move: this._moveTooltip};
                this._tooltip.options.permanent ? i.add = this._openTooltip : (i.mouseover = this._openTooltip, i.mouseout = this.closeTooltip, this._tooltip.options.sticky && (i.mousemove = this._moveTooltip), Oe && (i.click = this._openTooltip)), this[e](i), this._tooltipHandlersAdded = !t
            }
        }, openTooltip: function (t, e) {
            if (t instanceof Oi || (e = t, t = this), t instanceof Ii) for (var i in this._layers) {
                t = this._layers[i];
                break
            }
            return e || (e = t.getCenter ? t.getCenter() : t.getLatLng()), this._tooltip && this._map && (this._tooltip._source = t, this._tooltip.update(), this._map.openTooltip(this._tooltip, e), this._tooltip.options.interactive && this._tooltip._container && (lt(this._tooltip._container, "leaflet-clickable"), this.addInteractiveTarget(this._tooltip._container))), this
        }, closeTooltip: function () {
            return this._tooltip && (this._tooltip._close(), this._tooltip.options.interactive && this._tooltip._container && (ct(this._tooltip._container, "leaflet-clickable"), this.removeInteractiveTarget(this._tooltip._container))), this
        }, toggleTooltip: function (t) {
            return this._tooltip && (this._tooltip._map ? this.closeTooltip() : this.openTooltip(t)), this
        }, isTooltipOpen: function () {
            return this._tooltip.isOpen()
        }, setTooltipContent: function (t) {
            return this._tooltip && this._tooltip.setContent(t), this
        }, getTooltip: function () {
            return this._tooltip
        }, _openTooltip: function (t) {
            var e = t.layer || t.target;
            this._tooltip && this._map && this.openTooltip(e, this._tooltip.options.sticky ? t.latlng : void 0)
        }, _moveTooltip: function (t) {
            var e, i, n = t.latlng;
            this._tooltip.options.sticky && t.originalEvent && (e = this._map.mouseEventToContainerPoint(t.originalEvent), i = this._map.containerPointToLayerPoint(e), n = this._map.layerPointToLatLng(i)), this._tooltip.setLatLng(n)
        }
    });
    var Qi = Ai.extend({
        options: {iconSize: [12, 12], html: !1, bgPos: null, className: "leaflet-div-icon"},
        createIcon: function (t) {
            var e = t && "DIV" === t.tagName ? t : document.createElement("div"), i = this.options;
            if (e.innerHTML = !1 !== i.html ? i.html : "", i.bgPos) {
                var n = b(i.bgPos);
                e.style.backgroundPosition = -n.x + "px " + -n.y + "px"
            }
            return this._setIconStyles(e, "icon"), e
        },
        createShadow: function () {
            return null
        }
    });
    Ai.Default = Bi;
    var tn = Oi.extend({
        options: {
            tileSize: 256,
            opacity: 1,
            updateWhenIdle: Te,
            updateWhenZooming: !0,
            updateInterval: 200,
            zIndex: 1,
            bounds: null,
            minZoom: 0,
            maxZoom: void 0,
            maxNativeZoom: void 0,
            minNativeZoom: void 0,
            noWrap: !1,
            pane: "tilePane",
            className: "",
            keepBuffer: 2
        }, initialize: function (t) {
            d(this, t)
        }, onAdd: function () {
            this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
        }, beforeAdd: function (t) {
            t._addZoomLimit(this)
        }, onRemove: function (t) {
            this._removeAllTiles(), nt(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null
        }, bringToFront: function () {
            return this._map && (st(this._container), this._setAutoZIndex(Math.max)), this
        }, bringToBack: function () {
            return this._map && (at(this._container), this._setAutoZIndex(Math.min)), this
        }, getContainer: function () {
            return this._container
        }, setOpacity: function (t) {
            return this.options.opacity = t, this._updateOpacity(), this
        }, setZIndex: function (t) {
            return this.options.zIndex = t, this._updateZIndex(), this
        }, isLoading: function () {
            return this._loading
        }, redraw: function () {
            return this._map && (this._removeAllTiles(), this._update()), this
        }, getEvents: function () {
            var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd
            };
            return this.options.updateWhenIdle || (this._onMove || (this._onMove = o(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
        }, createTile: function () {
            return document.createElement("div")
        }, getTileSize: function () {
            var t = this.options.tileSize;
            return t instanceof y ? t : new y(t, t)
        }, _updateZIndex: function () {
            this._container && void 0 !== this.options.zIndex && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
        }, _setAutoZIndex: function (t) {
            for (var e, i = this.getPane().children, n = -t(-1 / 0, 1 / 0), o = 0, s = i.length; o < s; o++) e = i[o].style.zIndex, i[o] !== this._container && e && (n = t(n, +e));
            isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
        }, _updateOpacity: function () {
            if (this._map && !he) {
                ht(this._container, this.options.opacity);
                var t = +new Date, e = !1, i = !1;
                for (var n in this._tiles) {
                    var o = this._tiles[n];
                    if (o.current && o.loaded) {
                        var s = Math.min(1, (t - o.loaded) / 200);
                        ht(o.el, s), s < 1 ? e = !0 : (o.active ? i = !0 : this._onOpaqueTile(o), o.active = !0)
                    }
                }
                i && !this._noPrune && this._pruneTiles(), e && (g(this._fadeFrame), this._fadeFrame = _(this._updateOpacity, this))
            }
        }, _onOpaqueTile: a, _initContainer: function () {
            this._container || (this._container = it("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container))
        }, _updateLevels: function () {
            var t = this._tileZoom, e = this.options.maxZoom;
            if (void 0 !== t) {
                for (var i in this._levels) this._levels[i].el.children.length || i === t ? (this._levels[i].el.style.zIndex = e - Math.abs(t - i), this._onUpdateLevel(i)) : (nt(this._levels[i].el), this._removeTilesAtZoom(i), this._onRemoveLevel(i), delete this._levels[i]);
                var n = this._levels[t], o = this._map;
                return n || ((n = this._levels[t] = {}).el = it("div", "leaflet-tile-container leaflet-zoom-animated", this._container), n.el.style.zIndex = e, n.origin = o.project(o.unproject(o.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, o.getCenter(), o.getZoom()), n.el.offsetWidth, this._onCreateLevel(n)), this._level = n, n
            }
        }, _onUpdateLevel: a, _onRemoveLevel: a, _onCreateLevel: a, _pruneTiles: function () {
            if (this._map) {
                var t, e, i = this._map.getZoom();
                if (i > this.options.maxZoom || i < this.options.minZoom) this._removeAllTiles(); else {
                    for (t in this._tiles) (e = this._tiles[t]).retain = e.current;
                    for (t in this._tiles) if ((e = this._tiles[t]).current && !e.active) {
                        var n = e.coords;
                        this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
                    }
                    for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
                }
            }
        }, _removeTilesAtZoom: function (t) {
            for (var e in this._tiles) this._tiles[e].coords.z === t && this._removeTile(e)
        }, _removeAllTiles: function () {
            for (var t in this._tiles) this._removeTile(t)
        }, _invalidateAll: function () {
            for (var t in this._levels) nt(this._levels[t].el), this._onRemoveLevel(t), delete this._levels[t];
            this._removeAllTiles(), this._tileZoom = null
        }, _retainParent: function (t, e, i, n) {
            var o = Math.floor(t / 2), s = Math.floor(e / 2), a = i - 1, r = new y(+o, +s);
            r.z = +a;
            var l = this._tileCoordsToKey(r), c = this._tiles[l];
            return c && c.active ? (c.retain = !0, !0) : (c && c.loaded && (c.retain = !0), a > n && this._retainParent(o, s, a, n))
        }, _retainChildren: function (t, e, i, n) {
            for (var o = 2 * t; o < 2 * t + 2; o++) for (var s = 2 * e; s < 2 * e + 2; s++) {
                var a = new y(o, s);
                a.z = i + 1;
                var r = this._tileCoordsToKey(a), l = this._tiles[r];
                l && l.active ? l.retain = !0 : (l && l.loaded && (l.retain = !0), i + 1 < n && this._retainChildren(o, s, i + 1, n))
            }
        }, _resetView: function (t) {
            var e = t && (t.pinch || t.flyTo);
            this._setView(this._map.getCenter(), this._map.getZoom(), e, e)
        }, _animateZoom: function (t) {
            this._setView(t.center, t.zoom, !0, t.noUpdate)
        }, _clampZoom: function (t) {
            var e = this.options;
            return void 0 !== e.minNativeZoom && t < e.minNativeZoom ? e.minNativeZoom : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t ? e.maxNativeZoom : t
        }, _setView: function (t, e, i, n) {
            var o = this._clampZoom(Math.round(e));
            (void 0 !== this.options.maxZoom && o > this.options.maxZoom || void 0 !== this.options.minZoom && o < this.options.minZoom) && (o = void 0);
            var s = this.options.updateWhenZooming && o !== this._tileZoom;
            n && !s || (this._tileZoom = o, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), void 0 !== o && this._update(t), i || this._pruneTiles(), this._noPrune = !!i), this._setZoomTransforms(t, e)
        }, _setZoomTransforms: function (t, e) {
            for (var i in this._levels) this._setZoomTransform(this._levels[i], t, e)
        }, _setZoomTransform: function (t, e, i) {
            var n = this._map.getZoomScale(i, t.zoom),
                o = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e, i)).round();
            Ce ? mt(t.el, o, n) : ft(t.el, o)
        }, _resetGrid: function () {
            var t = this._map, e = t.options.crs, i = this._tileSize = this.getTileSize(), n = this._tileZoom,
                o = this._map.getPixelWorldBounds(this._tileZoom);
            o && (this._globalTileRange = this._pxBoundsToTileRange(o)), this._wrapX = e.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, e.wrapLng[0]], n).x / i.x), Math.ceil(t.project([0, e.wrapLng[1]], n).x / i.y)], this._wrapY = e.wrapLat && !this.options.noWrap && [Math.floor(t.project([e.wrapLat[0], 0], n).y / i.x), Math.ceil(t.project([e.wrapLat[1], 0], n).y / i.y)]
        }, _onMoveEnd: function () {
            this._map && !this._map._animatingZoom && this._update()
        }, _getTiledPixelBounds: function (t) {
            var e = this._map, i = e._animatingZoom ? Math.max(e._animateToZoom, e.getZoom()) : e.getZoom(),
                n = e.getZoomScale(i, this._tileZoom), o = e.project(t, this._tileZoom).floor(),
                s = e.getSize().divideBy(2 * n);
            return new w(o.subtract(s), o.add(s))
        }, _update: function (t) {
            var e = this._map;
            if (e) {
                var i = this._clampZoom(e.getZoom());
                if (void 0 === t && (t = e.getCenter()), void 0 !== this._tileZoom) {
                    var n = this._getTiledPixelBounds(t), o = this._pxBoundsToTileRange(n), s = o.getCenter(), a = [],
                        r = this.options.keepBuffer,
                        l = new w(o.getBottomLeft().subtract([r, -r]), o.getTopRight().add([r, -r]));
                    if (!(isFinite(o.min.x) && isFinite(o.min.y) && isFinite(o.max.x) && isFinite(o.max.y))) throw new Error("Attempted to load an infinite number of tiles");
                    for (var c in this._tiles) {
                        var d = this._tiles[c].coords;
                        d.z === this._tileZoom && l.contains(new y(d.x, d.y)) || (this._tiles[c].current = !1)
                    }
                    if (Math.abs(i - this._tileZoom) > 1) this._setView(t, i); else {
                        for (var u = o.min.y; u <= o.max.y; u++) for (var h = o.min.x; h <= o.max.x; h++) {
                            var p = new y(h, u);
                            p.z = this._tileZoom, this._isValidTile(p) && (this._tiles[this._tileCoordsToKey(p)] || a.push(p))
                        }
                        if (a.sort(function (t, e) {
                            return t.distanceTo(s) - e.distanceTo(s)
                        }), 0 !== a.length) {
                            this._loading || (this._loading = !0, this.fire("loading"));
                            var m = document.createDocumentFragment();
                            for (h = 0; h < a.length; h++) this._addTile(a[h], m);
                            this._level.el.appendChild(m)
                        }
                    }
                }
            }
        }, _isValidTile: function (t) {
            var e = this._map.options.crs;
            if (!e.infinite) {
                var i = this._globalTileRange;
                if (!e.wrapLng && (t.x < i.min.x || t.x > i.max.x) || !e.wrapLat && (t.y < i.min.y || t.y > i.max.y)) return !1
            }
            if (!this.options.bounds) return !0;
            var n = this._tileCoordsToBounds(t);
            return k(this.options.bounds).overlaps(n)
        }, _keyToBounds: function (t) {
            return this._tileCoordsToBounds(this._keyToTileCoords(t))
        }, _tileCoordsToBounds: function (t) {
            var e = this._map, i = this.getTileSize(), n = t.scaleBy(i), o = n.add(i),
                s = new x(e.unproject(n, t.z), e.unproject(o, t.z));
            return this.options.noWrap || e.wrapLatLngBounds(s), s
        }, _tileCoordsToKey: function (t) {
            return t.x + ":" + t.y + ":" + t.z
        }, _keyToTileCoords: function (t) {
            var e = t.split(":"), i = new y(+e[0], +e[1]);
            return i.z = +e[2], i
        }, _removeTile: function (t) {
            var e = this._tiles[t];
            e && (nt(e.el), delete this._tiles[t], this.fire("tileunload", {
                tile: e.el,
                coords: this._keyToTileCoords(t)
            }))
        }, _initTile: function (t) {
            lt(t, "leaflet-tile");
            var e = this.getTileSize();
            t.style.width = e.x + "px", t.style.height = e.y + "px", t.onselectstart = a, t.onmousemove = a, he && this.options.opacity < 1 && ht(t, this.options.opacity), fe && !_e && (t.style.WebkitBackfaceVisibility = "hidden")
        }, _addTile: function (t, e) {
            var n = this._getTilePos(t), o = this._tileCoordsToKey(t),
                s = this.createTile(this._wrapCoords(t), i(this._tileReady, this, t));
            this._initTile(s), this.createTile.length < 2 && _(i(this._tileReady, this, t, null, s)), ft(s, n), this._tiles[o] = {
                el: s,
                coords: t,
                current: !0
            }, e.appendChild(s), this.fire("tileloadstart", {tile: s, coords: t})
        }, _tileReady: function (t, e, n) {
            if (this._map) {
                e && this.fire("tileerror", {error: e, tile: n, coords: t});
                var o = this._tileCoordsToKey(t);
                (n = this._tiles[o]) && (n.loaded = +new Date, this._map._fadeAnimated ? (ht(n.el, 0), g(this._fadeFrame), this._fadeFrame = _(this._updateOpacity, this)) : (n.active = !0, this._pruneTiles()), e || (lt(n.el, "leaflet-tile-loaded"), this.fire("tileload", {
                    tile: n.el,
                    coords: t
                })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), he || !this._map._fadeAnimated ? _(this._pruneTiles, this) : setTimeout(i(this._pruneTiles, this), 250)))
            }
        }, _getTilePos: function (t) {
            return t.scaleBy(this.getTileSize()).subtract(this._level.origin)
        }, _wrapCoords: function (t) {
            var e = new y(this._wrapX ? s(t.x, this._wrapX) : t.x, this._wrapY ? s(t.y, this._wrapY) : t.y);
            return e.z = t.z, e
        }, _pxBoundsToTileRange: function (t) {
            var e = this.getTileSize();
            return new w(t.min.unscaleBy(e).floor(), t.max.unscaleBy(e).ceil().subtract([1, 1]))
        }, _noTilesToLoad: function () {
            for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
            return !0
        }
    }), en = tn.extend({
        options: {
            minZoom: 0,
            maxZoom: 18,
            subdomains: "abc",
            errorTileUrl: "",
            zoomOffset: 0,
            tms: !1,
            zoomReverse: !1,
            detectRetina: !1,
            crossOrigin: !1
        }, initialize: function (t, e) {
            this._url = t, (e = d(this, e)).detectRetina && Ae && e.maxZoom > 0 && (e.tileSize = Math.floor(e.tileSize / 2), e.zoomReverse ? (e.zoomOffset--, e.minZoom++) : (e.zoomOffset++, e.maxZoom--), e.minZoom = Math.max(0, e.minZoom)), "string" == typeof e.subdomains && (e.subdomains = e.subdomains.split("")), fe || this.on("tileunload", this._onTileRemove)
        }, setUrl: function (t, e) {
            return this._url = t, e || this.redraw(), this
        }, createTile: function (t, e) {
            var n = document.createElement("img");
            return G(n, "load", i(this._tileOnLoad, this, e, n)), G(n, "error", i(this._tileOnError, this, e, n)), this.options.crossOrigin && (n.crossOrigin = ""), n.alt = "", n.setAttribute("role", "presentation"), n.src = this.getTileUrl(t), n
        }, getTileUrl: function (t) {
            var i = {r: Ae ? "@2x" : "", s: this._getSubdomain(t), x: t.x, y: t.y, z: this._getZoomForUrl()};
            if (this._map && !this._map.options.crs.infinite) {
                var n = this._globalTileRange.max.y - t.y;
                this.options.tms && (i.y = n), i["-y"] = n
            }
            return h(this._url, e(i, this.options))
        }, _tileOnLoad: function (t, e) {
            he ? setTimeout(i(t, this, null, e), 0) : t(null, e)
        }, _tileOnError: function (t, e, i) {
            var n = this.options.errorTileUrl;
            n && e.src !== n && (e.src = n), t(i, e)
        }, _onTileRemove: function (t) {
            t.tile.onload = null
        }, _getZoomForUrl: function () {
            var t = this._tileZoom, e = this.options.maxZoom;
            return this.options.zoomReverse && (t = e - t), t + this.options.zoomOffset
        }, _getSubdomain: function (t) {
            var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
            return this.options.subdomains[e]
        }, _abortLoading: function () {
            var t, e;
            for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && ((e = this._tiles[t].el).onload = a, e.onerror = a, e.complete || (e.src = Wt, nt(e)))
        }
    }), nn = en.extend({
        defaultWmsParams: {
            service: "WMS",
            request: "GetMap",
            layers: "",
            styles: "",
            format: "image/jpeg",
            transparent: !1,
            version: "1.1.1"
        }, options: {crs: null, uppercase: !1}, initialize: function (t, i) {
            this._url = t;
            var n = e({}, this.defaultWmsParams);
            for (var o in i) o in this.options || (n[o] = i[o]);
            i = d(this, i), n.width = n.height = i.tileSize * (i.detectRetina && Ae ? 2 : 1), this.wmsParams = n
        }, onAdd: function (t) {
            this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
            var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
            this.wmsParams[e] = this._crs.code, en.prototype.onAdd.call(this, t)
        }, getTileUrl: function (t) {
            var e = this._tileCoordsToBounds(t), i = this._crs.project(e.getNorthWest()),
                n = this._crs.project(e.getSouthEast()),
                o = (this._wmsVersion >= 1.3 && this._crs === Si ? [n.y, i.x, i.y, n.x] : [i.x, n.y, n.x, i.y]).join(","),
                s = en.prototype.getTileUrl.call(this, t);
            return s + u(this.wmsParams, s, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + o
        }, setParams: function (t, i) {
            return e(this.wmsParams, t), i || this.redraw(), this
        }
    });
    en.WMS = nn, Rt.wms = function (t, e) {
        return new nn(t, e)
    };
    var on = Oi.extend({
        options: {padding: .1}, initialize: function (t) {
            d(this, t), n(this), this._layers = this._layers || {}
        }, onAdd: function () {
            this._container || (this._initContainer(), this._zoomAnimated && lt(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this)
        }, onRemove: function () {
            this.off("update", this._updatePaths, this), this._destroyContainer()
        }, getEvents: function () {
            var t = {viewreset: this._reset, zoom: this._onZoom, moveend: this._update, zoomend: this._onZoomEnd};
            return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
        }, _onAnimZoom: function (t) {
            this._updateTransform(t.center, t.zoom)
        }, _onZoom: function () {
            this._updateTransform(this._map.getCenter(), this._map.getZoom())
        }, _updateTransform: function (t, e) {
            var i = this._map.getZoomScale(e, this._zoom), n = _t(this._container),
                o = this._map.getSize().multiplyBy(.5 + this.options.padding), s = this._map.project(this._center, e),
                a = this._map.project(t, e).subtract(s), r = o.multiplyBy(-i).add(n).add(o).subtract(a);
            Ce ? mt(this._container, r, i) : ft(this._container, r)
        }, _reset: function () {
            for (var t in this._update(), this._updateTransform(this._center, this._zoom), this._layers) this._layers[t]._reset()
        }, _onZoomEnd: function () {
            for (var t in this._layers) this._layers[t]._project()
        }, _updatePaths: function () {
            for (var t in this._layers) this._layers[t]._update()
        }, _update: function () {
            var t = this.options.padding, e = this._map.getSize(),
                i = this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round();
            this._bounds = new w(i, i.add(e.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
        }
    }), sn = on.extend({
        getEvents: function () {
            var t = on.prototype.getEvents.call(this);
            return t.viewprereset = this._onViewPreReset, t
        }, _onViewPreReset: function () {
            this._postponeUpdatePaths = !0
        }, onAdd: function () {
            on.prototype.onAdd.call(this), this._draw()
        }, _initContainer: function () {
            var t = this._container = document.createElement("canvas");
            G(t, "mousemove", o(this._onMouseMove, 32, this), this), G(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this), G(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
        }, _destroyContainer: function () {
            delete this._ctx, nt(this._container), N(this._container), delete this._container
        }, _updatePaths: function () {
            if (!this._postponeUpdatePaths) {
                for (var t in this._redrawBounds = null, this._layers) this._layers[t]._update();
                this._redraw()
            }
        }, _update: function () {
            if (!this._map._animatingZoom || !this._bounds) {
                this._drawnLayers = {}, on.prototype._update.call(this);
                var t = this._bounds, e = this._container, i = t.getSize(), n = Ae ? 2 : 1;
                ft(e, t.min), e.width = n * i.x, e.height = n * i.y, e.style.width = i.x + "px", e.style.height = i.y + "px", Ae && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y), this.fire("update")
            }
        }, _reset: function () {
            on.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths())
        }, _initPath: function (t) {
            this._updateDashArray(t), this._layers[n(t)] = t;
            var e = t._order = {layer: t, prev: this._drawLast, next: null};
            this._drawLast && (this._drawLast.next = e), this._drawLast = e, this._drawFirst = this._drawFirst || this._drawLast
        }, _addPath: function (t) {
            this._requestRedraw(t)
        }, _removePath: function (t) {
            var e = t._order, i = e.next, n = e.prev;
            i ? i.prev = n : this._drawLast = n, n ? n.next = i : this._drawFirst = i, delete t._order, delete this._layers[L.stamp(t)], this._requestRedraw(t)
        }, _updatePath: function (t) {
            this._extendRedrawBounds(t), t._project(), t._update(), this._requestRedraw(t)
        }, _updateStyle: function (t) {
            this._updateDashArray(t), this._requestRedraw(t)
        }, _updateDashArray: function (t) {
            if (t.options.dashArray) {
                var e, i = t.options.dashArray.split(","), n = [];
                for (e = 0; e < i.length; e++) n.push(Number(i[e]));
                t.options._dashArray = n
            }
        }, _requestRedraw: function (t) {
            this._map && (this._extendRedrawBounds(t), this._redrawRequest = this._redrawRequest || _(this._redraw, this))
        }, _extendRedrawBounds: function (t) {
            if (t._pxBounds) {
                var e = (t.options.weight || 0) + 1;
                this._redrawBounds = this._redrawBounds || new w, this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])), this._redrawBounds.extend(t._pxBounds.max.add([e, e]))
            }
        }, _redraw: function () {
            this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null
        }, _clear: function () {
            var t = this._redrawBounds;
            if (t) {
                var e = t.getSize();
                this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y)
            } else this._ctx.clearRect(0, 0, this._container.width, this._container.height)
        }, _draw: function () {
            var t, e = this._redrawBounds;
            if (this._ctx.save(), e) {
                var i = e.getSize();
                this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, i.x, i.y), this._ctx.clip()
            }
            this._drawing = !0;
            for (var n = this._drawFirst; n; n = n.next) t = n.layer, (!e || t._pxBounds && t._pxBounds.intersects(e)) && t._updatePath();
            this._drawing = !1, this._ctx.restore()
        }, _updatePoly: function (t, e) {
            if (this._drawing) {
                var i, n, o, s, a = t._parts, r = a.length, l = this._ctx;
                if (r) {
                    for (this._drawnLayers[t._leaflet_id] = t, l.beginPath(), i = 0; i < r; i++) {
                        for (n = 0, o = a[i].length; n < o; n++) s = a[i][n], l[n ? "lineTo" : "moveTo"](s.x, s.y);
                        e && l.closePath()
                    }
                    this._fillStroke(l, t)
                }
            }
        }, _updateCircle: function (t) {
            if (this._drawing && !t._empty()) {
                var e = t._point, i = this._ctx, n = t._radius, o = (t._radiusY || n) / n;
                this._drawnLayers[t._leaflet_id] = t, 1 !== o && (i.save(), i.scale(1, o)), i.beginPath(), i.arc(e.x, e.y / o, n, 0, 2 * Math.PI, !1), 1 !== o && i.restore(), this._fillStroke(i, t)
            }
        }, _fillStroke: function (t, e) {
            var i = e.options;
            i.fill && (t.globalAlpha = i.fillOpacity, t.fillStyle = i.fillColor || i.color, t.fill(i.fillRule || "evenodd")), i.stroke && 0 !== i.weight && (t.setLineDash && t.setLineDash(e.options && e.options._dashArray || []), t.globalAlpha = i.opacity, t.lineWidth = i.weight, t.strokeStyle = i.color, t.lineCap = i.lineCap, t.lineJoin = i.lineJoin, t.stroke())
        }, _onClick: function (t) {
            for (var e, i, n = this._map.mouseEventToLayerPoint(t), o = this._drawFirst; o; o = o.next) (e = o.layer).options.interactive && e._containsPoint(n) && !this._map._draggableMoved(e) && (i = e);
            i && (J(t), this._fireEvent([i], t))
        }, _onMouseMove: function (t) {
            if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
                var e = this._map.mouseEventToLayerPoint(t);
                this._handleMouseHover(t, e)
            }
        }, _handleMouseOut: function (t) {
            var e = this._hoveredLayer;
            e && (ct(this._container, "leaflet-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null)
        }, _handleMouseHover: function (t, e) {
            for (var i, n, o = this._drawFirst; o; o = o.next) (i = o.layer).options.interactive && i._containsPoint(e) && (n = i);
            n !== this._hoveredLayer && (this._handleMouseOut(t), n && (lt(this._container, "leaflet-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n)), this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
        }, _fireEvent: function (t, e, i) {
            this._map._fireDOMEvent(e, i || e.type, t)
        }, _bringToFront: function (t) {
            var e = t._order, i = e.next, n = e.prev;
            i && (i.prev = n, n ? n.next = i : i && (this._drawFirst = i), e.prev = this._drawLast, this._drawLast.next = e, e.next = null, this._drawLast = e, this._requestRedraw(t))
        }, _bringToBack: function (t) {
            var e = t._order, i = e.next, n = e.prev;
            n && (n.next = i, i ? i.prev = n : n && (this._drawLast = n), e.prev = null, e.next = this._drawFirst, this._drawFirst.prev = e, this._drawFirst = e, this._requestRedraw(t))
        }
    }), an = function () {
        try {
            return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function (t) {
                return document.createElement("<lvml:" + t + ' class="lvml">')
            }
        } catch (t) {
            return function (t) {
                return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
            }
        }
    }(), rn = {
        _initContainer: function () {
            this._container = it("div", "leaflet-vml-container")
        }, _update: function () {
            this._map._animatingZoom || (on.prototype._update.call(this), this.fire("update"))
        }, _initPath: function (t) {
            var e = t._container = an("shape");
            lt(e, "leaflet-vml-shape " + (this.options.className || "")), e.coordsize = "1 1", t._path = an("path"), e.appendChild(t._path), this._updateStyle(t), this._layers[n(t)] = t
        }, _addPath: function (t) {
            var e = t._container;
            this._container.appendChild(e), t.options.interactive && t.addInteractiveTarget(e)
        }, _removePath: function (t) {
            var e = t._container;
            nt(e), t.removeInteractiveTarget(e), delete this._layers[n(t)]
        }, _updateStyle: function (t) {
            var e = t._stroke, i = t._fill, n = t.options, o = t._container;
            o.stroked = !!n.stroke, o.filled = !!n.fill, n.stroke ? (e || (e = t._stroke = an("stroke")), o.appendChild(e), e.weight = n.weight + "px", e.color = n.color, e.opacity = n.opacity, n.dashArray ? e.dashStyle = Ut(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : e.dashStyle = "", e.endcap = n.lineCap.replace("butt", "flat"), e.joinstyle = n.lineJoin) : e && (o.removeChild(e), t._stroke = null), n.fill ? (i || (i = t._fill = an("fill")), o.appendChild(i), i.color = n.fillColor || n.color, i.opacity = n.fillOpacity) : i && (o.removeChild(i), t._fill = null)
        }, _updateCircle: function (t) {
            var e = t._point.round(), i = Math.round(t._radius), n = Math.round(t._radiusY || i);
            this._setPath(t, t._empty() ? "M0 0" : "AL " + e.x + "," + e.y + " " + i + "," + n + " 0,23592600")
        }, _setPath: function (t, e) {
            t._path.v = e
        }, _bringToFront: function (t) {
            st(t._container)
        }, _bringToBack: function (t) {
            at(t._container)
        }
    }, ln = Ze ? an : E, cn = on.extend({
        getEvents: function () {
            var t = on.prototype.getEvents.call(this);
            return t.zoomstart = this._onZoomStart, t
        }, _initContainer: function () {
            this._container = ln("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = ln("g"), this._container.appendChild(this._rootGroup)
        }, _destroyContainer: function () {
            nt(this._container), N(this._container), delete this._container, delete this._rootGroup
        }, _onZoomStart: function () {
            this._update()
        }, _update: function () {
            if (!this._map._animatingZoom || !this._bounds) {
                on.prototype._update.call(this);
                var t = this._bounds, e = t.getSize(), i = this._container;
                this._svgSize && this._svgSize.equals(e) || (this._svgSize = e, i.setAttribute("width", e.x), i.setAttribute("height", e.y)), ft(i, t.min), i.setAttribute("viewBox", [t.min.x, t.min.y, e.x, e.y].join(" ")), this.fire("update")
            }
        }, _initPath: function (t) {
            var e = t._path = ln("path");
            t.options.className && lt(e, t.options.className), t.options.interactive && lt(e, "leaflet-interactive"), this._updateStyle(t), this._layers[n(t)] = t
        }, _addPath: function (t) {
            this._rootGroup || this._initContainer(), this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
        }, _removePath: function (t) {
            nt(t._path), t.removeInteractiveTarget(t._path), delete this._layers[n(t)]
        }, _updatePath: function (t) {
            t._project(), t._update()
        }, _updateStyle: function (t) {
            var e = t._path, i = t.options;
            e && (i.stroke ? (e.setAttribute("stroke", i.color), e.setAttribute("stroke-opacity", i.opacity), e.setAttribute("stroke-width", i.weight), e.setAttribute("stroke-linecap", i.lineCap), e.setAttribute("stroke-linejoin", i.lineJoin), i.dashArray ? e.setAttribute("stroke-dasharray", i.dashArray) : e.removeAttribute("stroke-dasharray"), i.dashOffset ? e.setAttribute("stroke-dashoffset", i.dashOffset) : e.removeAttribute("stroke-dashoffset")) : e.setAttribute("stroke", "none"), i.fill ? (e.setAttribute("fill", i.fillColor || i.color), e.setAttribute("fill-opacity", i.fillOpacity), e.setAttribute("fill-rule", i.fillRule || "evenodd")) : e.setAttribute("fill", "none"))
        }, _updatePoly: function (t, e) {
            this._setPath(t, S(t._parts, e))
        }, _updateCircle: function (t) {
            var e = t._point, i = t._radius, n = "a" + i + "," + (t._radiusY || i) + " 0 1,0 ",
                o = t._empty() ? "M0 0" : "M" + (e.x - i) + "," + e.y + n + 2 * i + ",0 " + n + 2 * -i + ",0 ";
            this._setPath(t, o)
        }, _setPath: function (t, e) {
            t._path.setAttribute("d", e)
        }, _bringToFront: function (t) {
            st(t._path)
        }, _bringToBack: function (t) {
            at(t._path)
        }
    });
    Ze && cn.include(rn), di.include({
        getRenderer: function (t) {
            var e = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
            return e || (e = this._renderer = this.options.preferCanvas && Zt() || Gt()), this.hasLayer(e) || this.addLayer(e), e
        }, _getPaneRenderer: function (t) {
            if ("overlayPane" === t || void 0 === t) return !1;
            var e = this._paneRenderers[t];
            return void 0 === e && (e = cn && Gt({pane: t}) || sn && Zt({pane: t}), this._paneRenderers[t] = e), e
        }
    });
    var dn = Fi.extend({
        initialize: function (t, e) {
            Fi.prototype.initialize.call(this, this._boundsToLatLngs(t), e)
        }, setBounds: function (t) {
            return this.setLatLngs(this._boundsToLatLngs(t))
        }, _boundsToLatLngs: function (t) {
            return [(t = k(t)).getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
        }
    });
    cn.create = ln, cn.pointsToPath = S, Ui.geometryToLayer = Et, Ui.coordsToLatLng = St, Ui.coordsToLatLngs = zt, Ui.latLngToCoords = Ot, Ui.latLngsToCoords = Dt, Ui.getFeature = It, Ui.asFeature = At, di.mergeOptions({boxZoom: !0});
    var un = yi.extend({
        initialize: function (t) {
            this._map = t, this._container = t._container, this._pane = t._panes.overlayPane, this._resetStateTimeout = 0, t.on("unload", this._destroy, this)
        }, addHooks: function () {
            G(this._container, "mousedown", this._onMouseDown, this)
        }, removeHooks: function () {
            N(this._container, "mousedown", this._onMouseDown, this)
        }, moved: function () {
            return this._moved
        }, _destroy: function () {
            nt(this._pane), delete this._pane
        }, _resetState: function () {
            this._resetStateTimeout = 0, this._moved = !1
        }, _clearDeferredResetState: function () {
            0 !== this._resetStateTimeout && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0)
        }, _onMouseDown: function (t) {
            if (!t.shiftKey || 1 !== t.which && 1 !== t.button) return !1;
            this._clearDeferredResetState(), this._resetState(), oe(), gt(), this._startPoint = this._map.mouseEventToContainerPoint(t), G(document, {
                contextmenu: q,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        }, _onMouseMove: function (t) {
            this._moved || (this._moved = !0, this._box = it("div", "leaflet-zoom-box", this._container), lt(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
            var e = new w(this._point, this._startPoint), i = e.getSize();
            ft(this._box, e.min), this._box.style.width = i.x + "px", this._box.style.height = i.y + "px"
        }, _finish: function () {
            this._moved && (nt(this._box), ct(this._container, "leaflet-crosshair")), se(), vt(), N(document, {
                contextmenu: q,
                mousemove: this._onMouseMove,
                mouseup: this._onMouseUp,
                keydown: this._onKeyDown
            }, this)
        }, _onMouseUp: function (t) {
            if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
                this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(i(this._resetState, this), 0);
                var e = new x(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
                this._map.fitBounds(e).fire("boxzoomend", {boxZoomBounds: e})
            }
        }, _onKeyDown: function (t) {
            27 === t.keyCode && this._finish()
        }
    });
    di.addInitHook("addHandler", "boxZoom", un), di.mergeOptions({doubleClickZoom: !0});
    var hn = yi.extend({
        addHooks: function () {
            this._map.on("dblclick", this._onDoubleClick, this)
        }, removeHooks: function () {
            this._map.off("dblclick", this._onDoubleClick, this)
        }, _onDoubleClick: function (t) {
            var e = this._map, i = e.getZoom(), n = e.options.zoomDelta, o = t.originalEvent.shiftKey ? i - n : i + n;
            "center" === e.options.doubleClickZoom ? e.setZoom(o) : e.setZoomAround(t.containerPoint, o)
        }
    });
    di.addInitHook("addHandler", "doubleClickZoom", hn), di.mergeOptions({
        dragging: !0,
        inertia: !_e,
        inertiaDeceleration: 3400,
        inertiaMaxSpeed: 1 / 0,
        easeLinearity: .2,
        worldCopyJump: !1,
        maxBoundsViscosity: 0
    });
    var pn = yi.extend({
        addHooks: function () {
            if (!this._draggable) {
                var t = this._map;
                this._draggable = new xi(t._mapPane, t._container), this._draggable.on({
                    dragstart: this._onDragStart,
                    drag: this._onDrag,
                    dragend: this._onDragEnd
                }, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
            }
            lt(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = []
        }, removeHooks: function () {
            ct(this._map._container, "leaflet-grab"), ct(this._map._container, "leaflet-touch-drag"), this._draggable.disable()
        }, moved: function () {
            return this._draggable && this._draggable._moved
        }, moving: function () {
            return this._draggable && this._draggable._moving
        }, _onDragStart: function () {
            var t = this._map;
            if (t._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
                var e = k(this._map.options.maxBounds);
                this._offsetLimit = M(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
            } else this._offsetLimit = null;
            t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
        }, _onDrag: function (t) {
            if (this._map.options.inertia) {
                var e = this._lastTime = +new Date,
                    i = this._lastPos = this._draggable._absPos || this._draggable._newPos;
                this._positions.push(i), this._times.push(e), e - this._times[0] > 50 && (this._positions.shift(), this._times.shift())
            }
            this._map.fire("move", t).fire("drag", t)
        }, _onZoomEnd: function () {
            var t = this._map.getSize().divideBy(2), e = this._map.latLngToLayerPoint([0, 0]);
            this._initialWorldOffset = e.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
        }, _viscousLimit: function (t, e) {
            return t - (t - e) * this._viscosity
        }, _onPreDragLimit: function () {
            if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(this._draggable._startPos), e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)), t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)), t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)), t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
            }
        }, _onPreDragWrap: function () {
            var t = this._worldWidth, e = Math.round(t / 2), i = this._initialWorldOffset,
                n = this._draggable._newPos.x, o = (n - e + i) % t + e - i, s = (n + e + i) % t - e - i,
                a = Math.abs(o + i) < Math.abs(s + i) ? o : s;
            this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = a
        }, _onDragEnd: function (t) {
            var e = this._map, i = e.options, n = !i.inertia || this._times.length < 2;
            if (e.fire("dragend", t), n) e.fire("moveend"); else {
                var o = this._lastPos.subtract(this._positions[0]), s = (this._lastTime - this._times[0]) / 1e3,
                    a = i.easeLinearity, r = o.multiplyBy(a / s), l = r.distanceTo([0, 0]),
                    c = Math.min(i.inertiaMaxSpeed, l), d = r.multiplyBy(c / l), u = c / (i.inertiaDeceleration * a),
                    h = d.multiplyBy(-u / 2).round();
                h.x || h.y ? (h = e._limitOffset(h, e.options.maxBounds), _(function () {
                    e.panBy(h, {duration: u, easeLinearity: a, noMoveStart: !0, animate: !0})
                })) : e.fire("moveend")
            }
        }
    });
    di.addInitHook("addHandler", "dragging", pn), di.mergeOptions({keyboard: !0, keyboardPanDelta: 80});
    var mn = yi.extend({
        keyCodes: {
            left: [37],
            right: [39],
            down: [40],
            up: [38],
            zoomIn: [187, 107, 61, 171],
            zoomOut: [189, 109, 54, 173]
        }, initialize: function (t) {
            this._map = t, this._setPanDelta(t.options.keyboardPanDelta), this._setZoomDelta(t.options.zoomDelta)
        }, addHooks: function () {
            var t = this._map._container;
            t.tabIndex <= 0 && (t.tabIndex = "0"), G(t, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.on({focus: this._addHooks, blur: this._removeHooks}, this)
        }, removeHooks: function () {
            this._removeHooks(), N(this._map._container, {
                focus: this._onFocus,
                blur: this._onBlur,
                mousedown: this._onMouseDown
            }, this), this._map.off({focus: this._addHooks, blur: this._removeHooks}, this)
        }, _onMouseDown: function () {
            if (!this._focused) {
                var t = document.body, e = document.documentElement, i = t.scrollTop || e.scrollTop,
                    n = t.scrollLeft || e.scrollLeft;
                this._map._container.focus(), window.scrollTo(n, i)
            }
        }, _onFocus: function () {
            this._focused = !0, this._map.fire("focus")
        }, _onBlur: function () {
            this._focused = !1, this._map.fire("blur")
        }, _setPanDelta: function (t) {
            var e, i, n = this._panKeys = {}, o = this.keyCodes;
            for (e = 0, i = o.left.length; e < i; e++) n[o.left[e]] = [-1 * t, 0];
            for (e = 0, i = o.right.length; e < i; e++) n[o.right[e]] = [t, 0];
            for (e = 0, i = o.down.length; e < i; e++) n[o.down[e]] = [0, t];
            for (e = 0, i = o.up.length; e < i; e++) n[o.up[e]] = [0, -1 * t]
        }, _setZoomDelta: function (t) {
            var e, i, n = this._zoomKeys = {}, o = this.keyCodes;
            for (e = 0, i = o.zoomIn.length; e < i; e++) n[o.zoomIn[e]] = t;
            for (e = 0, i = o.zoomOut.length; e < i; e++) n[o.zoomOut[e]] = -t
        }, _addHooks: function () {
            G(document, "keydown", this._onKeyDown, this)
        }, _removeHooks: function () {
            N(document, "keydown", this._onKeyDown, this)
        }, _onKeyDown: function (t) {
            if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e, i = t.keyCode, n = this._map;
                if (i in this._panKeys) {
                    if (n._panAnim && n._panAnim._inProgress) return;
                    e = this._panKeys[i], t.shiftKey && (e = b(e).multiplyBy(3)), n.panBy(e), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
                } else if (i in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[i]); else {
                    if (27 !== i || !n._popup) return;
                    n.closePopup()
                }
                q(t)
            }
        }
    });
    di.addInitHook("addHandler", "keyboard", mn), di.mergeOptions({
        scrollWheelZoom: !0,
        wheelDebounceTime: 40,
        wheelPxPerZoomLevel: 60
    });
    var fn = yi.extend({
        addHooks: function () {
            G(this._map._container, "mousewheel", this._onWheelScroll, this), this._delta = 0
        }, removeHooks: function () {
            N(this._map._container, "mousewheel", this._onWheelScroll, this)
        }, _onWheelScroll: function (t) {
            var e = X(t), n = this._map.options.wheelDebounceTime;
            this._delta += e, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
            var o = Math.max(n - (+new Date - this._startTime), 0);
            clearTimeout(this._timer), this._timer = setTimeout(i(this._performZoom, this), o), q(t)
        }, _performZoom: function () {
            var t = this._map, e = t.getZoom(), i = this._map.options.zoomSnap || 0;
            t._stop();
            var n = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(n)))) / Math.LN2, s = i ? Math.ceil(o / i) * i : o,
                a = t._limitZoom(e + (this._delta > 0 ? s : -s)) - e;
            this._delta = 0, this._startTime = null, a && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + a) : t.setZoomAround(this._lastMousePos, e + a))
        }
    });
    di.addInitHook("addHandler", "scrollWheelZoom", fn), di.mergeOptions({tap: !0, tapTolerance: 15});
    var _n = yi.extend({
        addHooks: function () {
            G(this._map._container, "touchstart", this._onDown, this)
        }, removeHooks: function () {
            N(this._map._container, "touchstart", this._onDown, this)
        }, _onDown: function (t) {
            if (t.touches) {
                if (V(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
                var e = t.touches[0], n = e.target;
                this._startPos = this._newPos = new y(e.clientX, e.clientY), n.tagName && "a" === n.tagName.toLowerCase() && lt(n, "leaflet-active"), this._holdTimeout = setTimeout(i(function () {
                    this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", e))
                }, this), 1e3), this._simulateEvent("mousedown", e), G(document, {
                    touchmove: this._onMove,
                    touchend: this._onUp
                }, this)
            }
        }, _onUp: function (t) {
            if (clearTimeout(this._holdTimeout), N(document, {
                touchmove: this._onMove,
                touchend: this._onUp
            }, this), this._fireClick && t && t.changedTouches) {
                var e = t.changedTouches[0], i = e.target;
                i && i.tagName && "a" === i.tagName.toLowerCase() && ct(i, "leaflet-active"), this._simulateEvent("mouseup", e), this._isTapValid() && this._simulateEvent("click", e)
            }
        }, _isTapValid: function () {
            return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
        }, _onMove: function (t) {
            var e = t.touches[0];
            this._newPos = new y(e.clientX, e.clientY), this._simulateEvent("mousemove", e)
        }, _simulateEvent: function (t, e) {
            var i = document.createEvent("MouseEvents");
            i._simulated = !0, e.target._simulatedClick = !0, i.initMouseEvent(t, !0, !0, window, 1, e.screenX, e.screenY, e.clientX, e.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(i)
        }
    });
    Oe && !ze && di.addInitHook("addHandler", "tap", _n), di.mergeOptions({
        touchZoom: Oe && !_e,
        bounceAtZoomLimits: !0
    });
    var gn = yi.extend({
        addHooks: function () {
            lt(this._map._container, "leaflet-touch-zoom"), G(this._map._container, "touchstart", this._onTouchStart, this)
        }, removeHooks: function () {
            ct(this._map._container, "leaflet-touch-zoom"), N(this._map._container, "touchstart", this._onTouchStart, this)
        }, _onTouchStart: function (t) {
            var e = this._map;
            if (t.touches && 2 === t.touches.length && !e._animatingZoom && !this._zooming) {
                var i = e.mouseEventToContainerPoint(t.touches[0]), n = e.mouseEventToContainerPoint(t.touches[1]);
                this._centerPoint = e.getSize()._divideBy(2), this._startLatLng = e.containerPointToLatLng(this._centerPoint), "center" !== e.options.touchZoom && (this._pinchStartLatLng = e.containerPointToLatLng(i.add(n)._divideBy(2))), this._startDist = i.distanceTo(n), this._startZoom = e.getZoom(), this._moved = !1, this._zooming = !0, e._stop(), G(document, "touchmove", this._onTouchMove, this), G(document, "touchend", this._onTouchEnd, this), V(t)
            }
        }, _onTouchMove: function (t) {
            if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map, n = e.mouseEventToContainerPoint(t.touches[0]),
                    o = e.mouseEventToContainerPoint(t.touches[1]), s = n.distanceTo(o) / this._startDist;
                if (this._zoom = e.getScaleZoom(s, this._startZoom), !e.options.bounceAtZoomLimits && (this._zoom < e.getMinZoom() && s < 1 || this._zoom > e.getMaxZoom() && s > 1) && (this._zoom = e._limitZoom(this._zoom)), "center" === e.options.touchZoom) {
                    if (this._center = this._startLatLng, 1 === s) return
                } else {
                    var a = n._add(o)._divideBy(2)._subtract(this._centerPoint);
                    if (1 === s && 0 === a.x && 0 === a.y) return;
                    this._center = e.unproject(e.project(this._pinchStartLatLng, this._zoom).subtract(a), this._zoom)
                }
                this._moved || (e._moveStart(!0), this._moved = !0), g(this._animRequest);
                var r = i(e._move, e, this._center, this._zoom, {pinch: !0, round: !1});
                this._animRequest = _(r, this, !0), V(t)
            }
        }, _onTouchEnd: function () {
            this._moved && this._zooming ? (this._zooming = !1, g(this._animRequest), N(document, "touchmove", this._onTouchMove), N(document, "touchend", this._onTouchEnd), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom))) : this._zooming = !1
        }
    });
    di.addInitHook("addHandler", "touchZoom", gn), di.BoxZoom = un, di.DoubleClickZoom = hn, di.Drag = pn, di.Keyboard = mn, di.ScrollWheelZoom = fn, di.Tap = _n, di.TouchZoom = gn;
    var vn = window.L;
    window.L = t, Object.freeze = Nt, t.version = "1.2.0+HEAD.1ac320b", t.noConflict = function () {
        return window.L = vn, this
    }, t.Control = ui, t.control = hi, t.Browser = Ge, t.Evented = Kt, t.Mixin = bi, t.Util = Xt, t.Class = v, t.Handler = yi, t.extend = e, t.bind = i, t.stamp = n, t.setOptions = d, t.DomEvent = ei, t.DomUtil = li, t.PosAnimation = ci, t.Draggable = xi, t.LineUtil = ki, t.PolyUtil = $i, t.Point = y, t.point = b, t.Bounds = w, t.bounds = M, t.Transformation = T, t.transformation = P, t.Projection = Pi, t.LatLng = $, t.latLng = C, t.LatLngBounds = x, t.latLngBounds = k, t.CRS = te, t.GeoJSON = Ui, t.geoJSON = Bt, t.geoJson = Vi, t.Layer = Oi, t.LayerGroup = Di, t.layerGroup = function (t) {
        return new Di(t)
    }, t.FeatureGroup = Ii, t.featureGroup = function (t) {
        return new Ii(t)
    }, t.ImageOverlay = qi, t.imageOverlay = function (t, e, i) {
        return new qi(t, e, i)
    }, t.VideoOverlay = Yi, t.videoOverlay = function (t, e, i) {
        return new Yi(t, e, i)
    }, t.DivOverlay = Xi, t.Popup = Ji, t.popup = function (t, e) {
        return new Ji(t, e)
    }, t.Tooltip = Ki, t.tooltip = function (t, e) {
        return new Ki(t, e)
    }, t.Icon = Ai, t.icon = function (t) {
        return new Ai(t)
    }, t.DivIcon = Qi, t.divIcon = function (t) {
        return new Qi(t)
    }, t.Marker = Zi, t.marker = function (t, e) {
        return new Zi(t, e)
    }, t.TileLayer = en, t.tileLayer = Rt, t.GridLayer = tn, t.gridLayer = function (t) {
        return new tn(t)
    }, t.SVG = cn, t.svg = Gt, t.Renderer = on, t.Canvas = sn, t.canvas = Zt, t.Path = Gi, t.CircleMarker = Ni, t.circleMarker = function (t, e) {
        return new Ni(t, e)
    }, t.Circle = Hi, t.circle = function (t, e, i) {
        return new Hi(t, e, i)
    }, t.Polyline = ji, t.polyline = function (t, e) {
        return new ji(t, e)
    }, t.Polygon = Fi, t.polygon = function (t, e) {
        return new Fi(t, e)
    }, t.Rectangle = dn, t.rectangle = function (t, e) {
        return new dn(t, e)
    }, t.Map = di, t.map = function (t, e) {
        return new di(t, e)
    }
}), L.drawVersion = "0.4.2", L.Draw = {}, L.drawLocal = {
    draw: {
        toolbar: {
            actions: {title: "Cancel drawing", text: "Cancel"},
            finish: {title: "Finish drawing", text: "Finish"},
            undo: {title: "Delete last point drawn", text: "Delete last point"},
            buttons: {
                polyline: "Draw a polyline",
                polygon: "Draw a polygon",
                rectangle: "Draw a rectangle",
                circle: "Draw a circle",
                marker: "Draw a marker",
                circlemarker: "Draw a circlemarker"
            }
        },
        handlers: {
            circle: {tooltip: {start: "Click and drag to draw circle."}, radius: "Radius"},
            circlemarker: {tooltip: {start: "Click map to place circle marker."}},
            marker: {tooltip: {start: "Click map to place marker."}},
            polygon: {
                tooltip: {
                    start: "Click to start drawing shape.",
                    cont: "Click to continue drawing shape.",
                    end: "Click first point to close this shape."
                }
            },
            polyline: {
                error: "<strong>Error:</strong> shape edges cannot cross!",
                tooltip: {
                    start: "Click to start drawing line.",
                    cont: "Click to continue drawing line.",
                    end: "Click last point to finish line."
                }
            },
            rectangle: {tooltip: {start: "Click and drag to draw rectangle."}},
            simpleshape: {tooltip: {end: "Release mouse to finish drawing."}}
        }
    },
    edit: {
        toolbar: {
            actions: {
                save: {title: "Save changes", text: "Save"},
                cancel: {title: "Cancel editing, discards all changes", text: "Cancel"},
                clearAll: {title: "Clear all layers", text: "Clear All"}
            },
            buttons: {
                edit: "Edit layers",
                editDisabled: "No layers to edit",
                remove: "Delete layers",
                removeDisabled: "No layers to delete"
            }
        },
        handlers: {
            edit: {
                tooltip: {
                    text: "Drag handles or markers to edit features.",
                    subtext: "Click cancel to undo changes."
                }
            }, remove: {tooltip: {text: "Click on a feature to remove."}}
        }
    }
}, L.Draw.Event = {}, L.Draw.Event.CREATED = "draw:created", L.Draw.Event.EDITED = "draw:edited", L.Draw.Event.DELETED = "draw:deleted", L.Draw.Event.DRAWSTART = "draw:drawstart", L.Draw.Event.DRAWSTOP = "draw:drawstop", L.Draw.Event.DRAWVERTEX = "draw:drawvertex", L.Draw.Event.EDITSTART = "draw:editstart", L.Draw.Event.EDITMOVE = "draw:editmove", L.Draw.Event.EDITRESIZE = "draw:editresize", L.Draw.Event.EDITVERTEX = "draw:editvertex", L.Draw.Event.EDITSTOP = "draw:editstop", L.Draw.Event.DELETESTART = "draw:deletestart", L.Draw.Event.DELETESTOP = "draw:deletestop", L.Draw.Event.TOOLBAROPENED = "draw:toolbaropened", L.Draw.Event.TOOLBARCLOSED = "draw:toolbarclosed", L.Toolbar = L.Class.extend({
    initialize: function (t) {
        L.setOptions(this, t), this._modes = {}, this._actionButtons = [], this._activeMode = null;
        var e = L.version.split(".");
        1 === parseInt(e[0], 10) && parseInt(e[1], 10) >= 2 ? L.Toolbar.include(L.Evented.prototype) : L.Toolbar.include(L.Mixin.Events)
    }, enabled: function () {
        return null !== this._activeMode
    }, disable: function () {
        this.enabled() && this._activeMode.handler.disable()
    }, addToolbar: function (t) {
        var e, i = L.DomUtil.create("div", "leaflet-draw-section"), n = 0, o = this._toolbarClass || "",
            s = this.getModeHandlers(t);
        for (this._toolbarContainer = L.DomUtil.create("div", "leaflet-draw-toolbar leaflet-bar"), this._map = t, e = 0; e < s.length; e++) s[e].enabled && this._initModeHandler(s[e].handler, this._toolbarContainer, n++, o, s[e].title);
        if (n) return this._lastButtonIndex = --n, this._actionsContainer = L.DomUtil.create("ul", "leaflet-draw-actions"), i.appendChild(this._toolbarContainer), i.appendChild(this._actionsContainer), i
    }, removeToolbar: function () {
        for (var t in this._modes) this._modes.hasOwnProperty(t) && (this._disposeButton(this._modes[t].button, this._modes[t].handler.enable, this._modes[t].handler), this._modes[t].handler.disable(), this._modes[t].handler.off("enabled", this._handlerActivated, this).off("disabled", this._handlerDeactivated, this));
        this._modes = {};
        for (var e = 0, i = this._actionButtons.length; e < i; e++) this._disposeButton(this._actionButtons[e].button, this._actionButtons[e].callback, this);
        this._actionButtons = [], this._actionsContainer = null
    }, _initModeHandler: function (t, e, i, n, o) {
        var s = t.type;
        this._modes[s] = {}, this._modes[s].handler = t, this._modes[s].button = this._createButton({
            type: s,
            title: o,
            className: n + "-" + s,
            container: e,
            callback: this._modes[s].handler.enable,
            context: this._modes[s].handler
        }), this._modes[s].buttonIndex = i, this._modes[s].handler.on("enabled", this._handlerActivated, this).on("disabled", this._handlerDeactivated, this)
    }, _detectIOS: function () {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream
    }, _createButton: function (t) {
        var e = L.DomUtil.create("a", t.className || "", t.container),
            i = L.DomUtil.create("span", "sr-only", t.container);
        e.href = "#", e.appendChild(i), t.title && (e.title = t.title, i.innerHTML = t.title), t.text && (e.innerHTML = t.text, i.innerHTML = t.text);
        var n = this._detectIOS() ? "touchstart" : "click";
        return L.DomEvent.on(e, "click", L.DomEvent.stopPropagation).on(e, "mousedown", L.DomEvent.stopPropagation).on(e, "dblclick", L.DomEvent.stopPropagation).on(e, "touchstart", L.DomEvent.stopPropagation).on(e, "click", L.DomEvent.preventDefault).on(e, n, t.callback, t.context), e
    }, _disposeButton: function (t, e) {
        var i = this._detectIOS() ? "touchstart" : "click";
        L.DomEvent.off(t, "click", L.DomEvent.stopPropagation).off(t, "mousedown", L.DomEvent.stopPropagation).off(t, "dblclick", L.DomEvent.stopPropagation).off(t, "touchstart", L.DomEvent.stopPropagation).off(t, "click", L.DomEvent.preventDefault).off(t, i, e)
    }, _handlerActivated: function (t) {
        this.disable(), this._activeMode = this._modes[t.handler], L.DomUtil.addClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._showActionsToolbar(), this.fire("enable")
    }, _handlerDeactivated: function () {
        this._hideActionsToolbar(), L.DomUtil.removeClass(this._activeMode.button, "leaflet-draw-toolbar-button-enabled"), this._activeMode = null, this.fire("disable")
    }, _createActions: function (t) {
        var e, i, n, o, s = this._actionsContainer, a = this.getActions(t), r = a.length;
        for (i = 0, n = this._actionButtons.length; i < n; i++) this._disposeButton(this._actionButtons[i].button, this._actionButtons[i].callback);
        for (this._actionButtons = []; s.firstChild;) s.removeChild(s.firstChild);
        for (var l = 0; l < r; l++) "enabled" in a[l] && !a[l].enabled || (e = L.DomUtil.create("li", "", s), o = this._createButton({
            title: a[l].title,
            text: a[l].text,
            container: e,
            callback: a[l].callback,
            context: a[l].context
        }), this._actionButtons.push({button: o, callback: a[l].callback}))
    }, _showActionsToolbar: function () {
        var t = this._activeMode.buttonIndex, e = this._lastButtonIndex, i = this._activeMode.button.offsetTop - 1;
        this._createActions(this._activeMode.handler), this._actionsContainer.style.top = i + "px", 0 === t && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-top")), t === e && (L.DomUtil.addClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.addClass(this._actionsContainer, "leaflet-draw-actions-bottom")), this._actionsContainer.style.display = "block", this._map.fire(L.Draw.Event.TOOLBAROPENED)
    }, _hideActionsToolbar: function () {
        this._actionsContainer.style.display = "none", L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-notop"), L.DomUtil.removeClass(this._toolbarContainer, "leaflet-draw-toolbar-nobottom"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-top"), L.DomUtil.removeClass(this._actionsContainer, "leaflet-draw-actions-bottom"), this._map.fire(L.Draw.Event.TOOLBARCLOSED)
    }
}), L.Draw = L.Draw || {}, L.Draw.Tooltip = L.Class.extend({
    initialize: function (t) {
        this._map = t, this._popupPane = t._panes.popupPane, this._visible = !1, this._container = t.options.drawControlTooltips ? L.DomUtil.create("div", "leaflet-draw-tooltip", this._popupPane) : null, this._singleLineLabel = !1, this._map.on("mouseout", this._onMouseOut, this)
    }, dispose: function () {
        this._map.off("mouseout", this._onMouseOut, this), this._container && (this._popupPane.removeChild(this._container), this._container = null)
    }, updateContent: function (t) {
        return this._container ? (t.subtext = t.subtext || "", 0 !== t.subtext.length || this._singleLineLabel ? t.subtext.length > 0 && this._singleLineLabel && (L.DomUtil.removeClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !1) : (L.DomUtil.addClass(this._container, "leaflet-draw-tooltip-single"), this._singleLineLabel = !0), this._container.innerHTML = (t.subtext.length > 0 ? '<span class="leaflet-draw-tooltip-subtext">' + t.subtext + "</span><br />" : "") + "<span>" + t.text + "</span>", t.text || t.subtext ? (this._visible = !0, this._container.style.visibility = "inherit") : (this._visible = !1, this._container.style.visibility = "hidden"), this) : this
    }, updatePosition: function (t) {
        var e = this._map.latLngToLayerPoint(t), i = this._container;
        return this._container && (this._visible && (i.style.visibility = "inherit"), L.DomUtil.setPosition(i, e)), this
    }, showAsError: function () {
        return this._container && L.DomUtil.addClass(this._container, "leaflet-error-draw-tooltip"), this
    }, removeError: function () {
        return this._container && L.DomUtil.removeClass(this._container, "leaflet-error-draw-tooltip"), this
    }, _onMouseOut: function () {
        this._container && (this._container.style.visibility = "hidden")
    }
}), function () {
    var t = {km: 2, ha: 2, m: 0, mi: 2, ac: 2, yd: 0, ft: 0, nm: 2};
    L.GeometryUtil = L.extend(L.GeometryUtil || {}, {
        geodesicArea: function (t) {
            var e, i, n = t.length, o = 0, s = Math.PI / 180;
            if (n > 2) {
                for (var a = 0; a < n; a++) e = t[a], o += ((i = t[(a + 1) % n]).lng - e.lng) * s * (2 + Math.sin(e.lat * s) + Math.sin(i.lat * s));
                o = 6378137 * o * 6378137 / 2
            }
            return Math.abs(o)
        }, formattedNumber: function (t, e) {
            var i = parseFloat(t).toFixed(e), n = L.drawLocal.format && L.drawLocal.format.numeric,
                o = n && n.delimiters, s = o && o.thousands, a = o && o.decimal;
            if (s || a) {
                var r = i.split(".");
                i = s ? r[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1" + s) : r[0], a = a || ".", r.length > 1 && (i = i + a + r[1])
            }
            return i
        }, readableArea: function (e, i, n) {
            var o, s;
            n = L.Util.extend({}, t, n);
            return i ? (s = ["ha", "m"], type = typeof i, "string" === type ? s = [i] : "boolean" !== type && (s = i), o = e >= 1e6 && -1 !== s.indexOf("km") ? L.GeometryUtil.formattedNumber(1e-6 * e, n.km) + " km²" : e >= 1e4 && -1 !== s.indexOf("ha") ? L.GeometryUtil.formattedNumber(1e-4 * e, n.ha) + " ha" : L.GeometryUtil.formattedNumber(e, n.m) + " m²") : o = (e /= .836127) >= 3097600 ? L.GeometryUtil.formattedNumber(e / 3097600, n.mi) + " mi²" : e >= 4840 ? L.GeometryUtil.formattedNumber(e / 4840, n.ac) + " acres" : L.GeometryUtil.formattedNumber(e, n.yd) + " yd²", o
        }, readableDistance: function (e, i, n, o, s) {
            var a;
            s = L.Util.extend({}, t, s);
            switch (i ? "string" == typeof i ? i : "metric" : n ? "feet" : o ? "nauticalMile" : "yards") {
                case"metric":
                    a = e > 1e3 ? L.GeometryUtil.formattedNumber(e / 1e3, s.km) + " km" : L.GeometryUtil.formattedNumber(e, s.m) + " m";
                    break;
                case"feet":
                    e *= 3.28083, a = L.GeometryUtil.formattedNumber(e, s.ft) + " ft";
                    break;
                case"nauticalMile":
                    e *= .53996, a = L.GeometryUtil.formattedNumber(e / 1e3, s.nm) + " nm";
                    break;
                case"yards":
                default:
                    a = (e *= 1.09361) > 1760 ? L.GeometryUtil.formattedNumber(e / 1760, s.mi) + " miles" : L.GeometryUtil.formattedNumber(e, s.yd) + " yd"
            }
            return a
        }, isVersion07x: function () {
            var t = L.version.split(".");
            return 0 === parseInt(t[0], 10) && 7 === parseInt(t[1], 10)
        }
    })
}(), L.LatLngUtil = {
    cloneLatLngs: function (t) {
        for (var e = [], i = 0, n = t.length; i < n; i++) Array.isArray(t[i]) ? e.push(L.LatLngUtil.cloneLatLngs(t[i])) : e.push(this.cloneLatLng(t[i]));
        return e
    }, cloneLatLng: function (t) {
        return L.latLng(t.lat, t.lng)
    }
}, L.Util.extend(L.LineUtil, {
    segmentsIntersect: function (t, e, i, n) {
        return this._checkCounterclockwise(t, i, n) !== this._checkCounterclockwise(e, i, n) && this._checkCounterclockwise(t, e, i) !== this._checkCounterclockwise(t, e, n)
    }, _checkCounterclockwise: function (t, e, i) {
        return (i.y - t.y) * (e.x - t.x) > (e.y - t.y) * (i.x - t.x)
    }
}), L.Polygon.include({
    intersects: function () {
        var t, e, i, n, o = this._getProjectedPoints();
        return !this._tooFewPointsForIntersection() && (!!L.Polyline.prototype.intersects.call(this) || (t = o.length, e = o[0], i = o[t - 1], n = t - 2, this._lineSegmentsIntersectsRange(i, e, n, 1)))
    }
}), L.Polyline.include({
    intersects: function () {
        var t, e, i, n = this._getProjectedPoints(), o = n ? n.length : 0;
        if (this._tooFewPointsForIntersection()) return !1;
        for (t = o - 1; t >= 3; t--) if (e = n[t - 1], i = n[t], this._lineSegmentsIntersectsRange(e, i, t - 2)) return !0;
        return !1
    }, newLatLngIntersects: function (t, e) {
        return !!this._map && this.newPointIntersects(this._map.latLngToLayerPoint(t), e)
    }, newPointIntersects: function (t, e) {
        var i = this._getProjectedPoints(), n = i ? i.length : 0, o = i ? i[n - 1] : null, s = n - 2;
        return !this._tooFewPointsForIntersection(1) && this._lineSegmentsIntersectsRange(o, t, s, e ? 1 : 0)
    }, _tooFewPointsForIntersection: function (t) {
        var e = this._getProjectedPoints(), i = e ? e.length : 0;
        return !e || (i += t || 0) <= 3
    }, _lineSegmentsIntersectsRange: function (t, e, i, n) {
        var o, s, a = this._getProjectedPoints();
        n = n || 0;
        for (var r = i; r > n; r--) if (o = a[r - 1], s = a[r], L.LineUtil.segmentsIntersect(t, e, o, s)) return !0;
        return !1
    }, _getProjectedPoints: function () {
        if (!this._defaultShape) return this._originalPoints;
        for (var t = [], e = this._defaultShape(), i = 0; i < e.length; i++) t.push(this._map.latLngToLayerPoint(e[i]));
        return t
    }
}), L.Map.mergeOptions({touchExtend: !0}), L.Map.TouchExtend = L.Handler.extend({
    initialize: function (t) {
        this._map = t, this._container = t._container, this._pane = t._panes.overlayPane
    }, addHooks: function () {
        L.DomEvent.on(this._container, "touchstart", this._onTouchStart, this), L.DomEvent.on(this._container, "touchend", this._onTouchEnd, this), L.DomEvent.on(this._container, "touchmove", this._onTouchMove, this), this._detectIE() ? (L.DomEvent.on(this._container, "MSPointerDown", this._onTouchStart, this), L.DomEvent.on(this._container, "MSPointerUp", this._onTouchEnd, this), L.DomEvent.on(this._container, "MSPointerMove", this._onTouchMove, this), L.DomEvent.on(this._container, "MSPointerCancel", this._onTouchCancel, this)) : (L.DomEvent.on(this._container, "touchcancel", this._onTouchCancel, this), L.DomEvent.on(this._container, "touchleave", this._onTouchLeave, this))
    }, removeHooks: function () {
        L.DomEvent.off(this._container, "touchstart", this._onTouchStart), L.DomEvent.off(this._container, "touchend", this._onTouchEnd), L.DomEvent.off(this._container, "touchmove", this._onTouchMove), this._detectIE() ? (L.DomEvent.off(this._container, "MSPointerDowm", this._onTouchStart), L.DomEvent.off(this._container, "MSPointerUp", this._onTouchEnd), L.DomEvent.off(this._container, "MSPointerMove", this._onTouchMove), L.DomEvent.off(this._container, "MSPointerCancel", this._onTouchCancel)) : (L.DomEvent.off(this._container, "touchcancel", this._onTouchCancel), L.DomEvent.off(this._container, "touchleave", this._onTouchLeave))
    }, _touchEvent: function (t, e) {
        var i = {};
        if (void 0 !== t.touches) {
            if (!t.touches.length) return;
            i = t.touches[0]
        } else {
            if ("touch" !== t.pointerType) return;
            if (i = t, !this._filterClick(t)) return
        }
        var n = this._map.mouseEventToContainerPoint(i), o = this._map.mouseEventToLayerPoint(i),
            s = this._map.layerPointToLatLng(o);
        this._map.fire(e, {
            latlng: s,
            layerPoint: o,
            containerPoint: n,
            pageX: i.pageX,
            pageY: i.pageY,
            originalEvent: t
        })
    }, _filterClick: function (t) {
        var e = t.timeStamp || t.originalEvent.timeStamp, i = L.DomEvent._lastClick && e - L.DomEvent._lastClick;
        return i && i > 100 && i < 500 || t.target._simulatedClick && !t._simulated ? (L.DomEvent.stop(t), !1) : (L.DomEvent._lastClick = e, !0)
    }, _onTouchStart: function (t) {
        if (this._map._loaded) {
            this._touchEvent(t, "touchstart")
        }
    }, _onTouchEnd: function (t) {
        if (this._map._loaded) {
            this._touchEvent(t, "touchend")
        }
    }, _onTouchCancel: function (t) {
        if (this._map._loaded) {
            var e = "touchcancel";
            this._detectIE() && (e = "pointercancel"), this._touchEvent(t, e)
        }
    }, _onTouchLeave: function (t) {
        if (this._map._loaded) {
            this._touchEvent(t, "touchleave")
        }
    }, _onTouchMove: function (t) {
        if (this._map._loaded) {
            this._touchEvent(t, "touchmove")
        }
    }, _detectIE: function () {
        var t = window.navigator.userAgent, e = t.indexOf("MSIE ");
        if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
        if (t.indexOf("Trident/") > 0) {
            var i = t.indexOf("rv:");
            return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
        }
        var n = t.indexOf("Edge/");
        return n > 0 && parseInt(t.substring(n + 5, t.indexOf(".", n)), 10)
    }
}), L.Map.addInitHook("addHandler", "touchExtend", L.Map.TouchExtend), L.Marker.Touch = L.Marker.extend({
    _initInteraction: function () {
        return this.addInteractiveTarget ? L.Marker.prototype._initInteraction.apply(this) : this._initInteractionLegacy()
    }, _initInteractionLegacy: function () {
        if (this.options.clickable) {
            var t = this._icon,
                e = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu", "touchstart", "touchend", "touchmove"];
            this._detectIE ? e.concat(["MSPointerDown", "MSPointerUp", "MSPointerMove", "MSPointerCancel"]) : e.concat(["touchcancel"]), L.DomUtil.addClass(t, "leaflet-clickable"), L.DomEvent.on(t, "click", this._onMouseClick, this), L.DomEvent.on(t, "keypress", this._onKeyPress, this);
            for (var i = 0; i < e.length; i++) L.DomEvent.on(t, e[i], this._fireMouseEvent, this);
            L.Handler.MarkerDrag && (this.dragging = new L.Handler.MarkerDrag(this), this.options.draggable && this.dragging.enable())
        }
    }, _detectIE: function () {
        var t = window.navigator.userAgent, e = t.indexOf("MSIE ");
        if (e > 0) return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
        if (t.indexOf("Trident/") > 0) {
            var i = t.indexOf("rv:");
            return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10)
        }
        var n = t.indexOf("Edge/");
        return n > 0 && parseInt(t.substring(n + 5, t.indexOf(".", n)), 10)
    }
}), L.DrawToolbar = L.Toolbar.extend({
    statics: {TYPE: "draw"},
    options: {polyline: {}, polygon: {}, rectangle: {}, circle: {}, marker: {}, circlemarker: {}},
    initialize: function (t) {
        for (var e in this.options) this.options.hasOwnProperty(e) && t[e] && (t[e] = L.extend({}, this.options[e], t[e]));
        this._toolbarClass = "leaflet-draw-draw", L.Toolbar.prototype.initialize.call(this, t)
    },
    getModeHandlers: function (t) {
        return [{
            enabled: this.options.polyline,
            handler: new L.Draw.Polyline(t, this.options.polyline),
            title: L.drawLocal.draw.toolbar.buttons.polyline
        }, {
            enabled: this.options.polygon,
            handler: new L.Draw.Polygon(t, this.options.polygon),
            title: L.drawLocal.draw.toolbar.buttons.polygon
        }, {
            enabled: this.options.rectangle,
            handler: new L.Draw.Rectangle(t, this.options.rectangle),
            title: L.drawLocal.draw.toolbar.buttons.rectangle
        }, {
            enabled: this.options.circle,
            handler: new L.Draw.Circle(t, this.options.circle),
            title: L.drawLocal.draw.toolbar.buttons.circle
        }, {
            enabled: this.options.marker,
            handler: new L.Draw.Marker(t, this.options.marker),
            title: L.drawLocal.draw.toolbar.buttons.marker
        }, {
            enabled: this.options.circlemarker,
            handler: new L.Draw.CircleMarker(t, this.options.circlemarker),
            title: L.drawLocal.draw.toolbar.buttons.circlemarker
        }]
    },
    getActions: function (t) {
        return [{
            enabled: t.completeShape,
            title: L.drawLocal.draw.toolbar.finish.title,
            text: L.drawLocal.draw.toolbar.finish.text,
            callback: t.completeShape,
            context: t
        }, {
            enabled: t.deleteLastVertex,
            title: L.drawLocal.draw.toolbar.undo.title,
            text: L.drawLocal.draw.toolbar.undo.text,
            callback: t.deleteLastVertex,
            context: t
        }, {
            title: L.drawLocal.draw.toolbar.actions.title,
            text: L.drawLocal.draw.toolbar.actions.text,
            callback: this.disable,
            context: this
        }]
    },
    setOptions: function (t) {
        for (var e in L.setOptions(this, t), this._modes) this._modes.hasOwnProperty(e) && t.hasOwnProperty(e) && this._modes[e].handler.setOptions(t[e])
    }
}), L.Draw = L.Draw || {}, L.Draw.Feature = L.Handler.extend({
    initialize: function (t, e) {
        this._map = t, this._container = t._container, this._overlayPane = t._panes.overlayPane, this._popupPane = t._panes.popupPane, e && e.shapeOptions && (e.shapeOptions = L.Util.extend({}, this.options.shapeOptions, e.shapeOptions)), L.setOptions(this, e);
        var i = L.version.split(".");
        1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.Draw.Feature.include(L.Evented.prototype) : L.Draw.Feature.include(L.Mixin.Events)
    }, enable: function () {
        this._enabled || (L.Handler.prototype.enable.call(this), this.fire("enabled", {handler: this.type}), this._map.fire(L.Draw.Event.DRAWSTART, {layerType: this.type}))
    }, disable: function () {
        this._enabled && (L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DRAWSTOP, {layerType: this.type}), this.fire("disabled", {handler: this.type}))
    }, addHooks: function () {
        var t = this._map;
        t && (L.DomUtil.disableTextSelection(), t.getContainer().focus(), this._tooltip = new L.Draw.Tooltip(this._map), L.DomEvent.on(this._container, "keyup", this._cancelDrawing, this))
    }, removeHooks: function () {
        this._map && (L.DomUtil.enableTextSelection(), this._tooltip.dispose(), this._tooltip = null, L.DomEvent.off(this._container, "keyup", this._cancelDrawing, this))
    }, setOptions: function (t) {
        L.setOptions(this, t)
    }, _fireCreatedEvent: function (t) {
        this._map.fire(L.Draw.Event.CREATED, {layer: t, layerType: this.type})
    }, _cancelDrawing: function (t) {
        27 === t.keyCode && (this._map.fire("draw:canceled", {layerType: this.type}), this.disable())
    }
}), L.SimpleShape = {}, L.Draw.SimpleShape = L.Draw.Feature.extend({
    options: {repeatMode: !1}, initialize: function (t, e) {
        this._endLabelText = L.drawLocal.draw.handlers.simpleshape.tooltip.end, L.Draw.Feature.prototype.initialize.call(this, t, e)
    }, addHooks: function () {
        L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._mapDraggable = this._map.dragging.enabled(), this._mapDraggable && this._map.dragging.disable(), this._container.style.cursor = "crosshair", this._tooltip.updateContent({text: this._initialLabelText}), this._map.on("mousedown", this._onMouseDown, this).on("mousemove", this._onMouseMove, this).on("touchstart", this._onMouseDown, this).on("touchmove", this._onMouseMove, this), document.addEventListener("touchstart", L.DomEvent.preventDefault, {passive: !1}))
    }, removeHooks: function () {
        L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._mapDraggable && this._map.dragging.enable(), this._container.style.cursor = "", this._map.off("mousedown", this._onMouseDown, this).off("mousemove", this._onMouseMove, this).off("touchstart", this._onMouseDown, this).off("touchmove", this._onMouseMove, this), L.DomEvent.off(document, "mouseup", this._onMouseUp, this), L.DomEvent.off(document, "touchend", this._onMouseUp, this), document.removeEventListener("touchstart", L.DomEvent.preventDefault), this._shape && (this._map.removeLayer(this._shape), delete this._shape)), this._isDrawing = !1
    }, _getTooltipText: function () {
        return {text: this._endLabelText}
    }, _onMouseDown: function (t) {
        this._isDrawing = !0, this._startLatLng = t.latlng, L.DomEvent.on(document, "mouseup", this._onMouseUp, this).on(document, "touchend", this._onMouseUp, this).preventDefault(t.originalEvent)
    }, _onMouseMove: function (t) {
        var e = t.latlng;
        this._tooltip.updatePosition(e), this._isDrawing && (this._tooltip.updateContent(this._getTooltipText()), this._drawShape(e))
    }, _onMouseUp: function () {
        this._shape && this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable()
    }
}), L.Draw.Polyline = L.Draw.Feature.extend({
    statics: {TYPE: "polyline"},
    Poly: L.Polyline,
    options: {
        allowIntersection: !0,
        repeatMode: !1,
        drawError: {color: "#b00b00", timeout: 2500},
        icon: new L.DivIcon({iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon"}),
        touchIcon: new L.DivIcon({
            iconSize: new L.Point(20, 20),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
        }),
        guidelineDistance: 20,
        maxGuideLineLength: 4e3,
        shapeOptions: {stroke: !0, color: "#3388ff", weight: 4, opacity: .5, fill: !1, clickable: !0},
        metric: !0,
        feet: !0,
        nautic: !1,
        showLength: !0,
        zIndexOffset: 2e3,
        factor: 1,
        maxPoints: 0
    },
    initialize: function (t, e) {
        L.Browser.touch && (this.options.icon = this.options.touchIcon), this.options.drawError.message = L.drawLocal.draw.handlers.polyline.error, e && e.drawError && (e.drawError = L.Util.extend({}, this.options.drawError, e.drawError)), this.type = L.Draw.Polyline.TYPE, L.Draw.Feature.prototype.initialize.call(this, t, e)
    },
    addHooks: function () {
        L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._markers = [], this._markerGroup = new L.LayerGroup, this._map.addLayer(this._markerGroup), this._poly = new L.Polyline([], this.options.shapeOptions), this._tooltip.updateContent(this._getTooltipText()), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
            icon: L.divIcon({
                className: "leaflet-mouse-marker",
                iconAnchor: [20, 20],
                iconSize: [40, 40]
            }), opacity: 0, zIndexOffset: this.options.zIndexOffset
        })), this._mouseMarker.on("mouseout", this._onMouseOut, this).on("mousemove", this._onMouseMove, this).on("mousedown", this._onMouseDown, this).on("mouseup", this._onMouseUp, this).addTo(this._map), this._map.on("mouseup", this._onMouseUp, this).on("mousemove", this._onMouseMove, this).on("zoomlevelschange", this._onZoomEnd, this).on("touchstart", this._onTouch, this).on("zoomend", this._onZoomEnd, this))
    },
    removeHooks: function () {
        L.Draw.Feature.prototype.removeHooks.call(this), this._clearHideErrorTimeout(), this._cleanUpShape(), this._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers, this._map.removeLayer(this._poly), delete this._poly, this._mouseMarker.off("mousedown", this._onMouseDown, this).off("mouseout", this._onMouseOut, this).off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._clearGuides(), this._map.off("mouseup", this._onMouseUp, this).off("mousemove", this._onMouseMove, this).off("zoomlevelschange", this._onZoomEnd, this).off("zoomend", this._onZoomEnd, this).off("touchstart", this._onTouch, this).off("click", this._onTouch, this)
    },
    deleteLastVertex: function () {
        if (!(this._markers.length <= 1)) {
            var t = this._markers.pop(), e = this._poly, i = e.getLatLngs(), n = i.splice(-1, 1)[0];
            this._poly.setLatLngs(i), this._markerGroup.removeLayer(t), e.getLatLngs().length < 2 && this._map.removeLayer(e), this._vertexChanged(n, !1)
        }
    },
    addVertex: function (t) {
        this._markers.length >= 2 && !this.options.allowIntersection && this._poly.newLatLngIntersects(t) ? this._showErrorTooltip() : (this._errorShown && this._hideErrorTooltip(), this._markers.push(this._createMarker(t)), this._poly.addLatLng(t), 2 === this._poly.getLatLngs().length && this._map.addLayer(this._poly), this._vertexChanged(t, !0))
    },
    completeShape: function () {
        this._markers.length <= 1 || (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable())
    },
    _finishShape: function () {
        var t = this._poly._defaultShape ? this._poly._defaultShape() : this._poly.getLatLngs(),
            e = this._poly.newLatLngIntersects(t[t.length - 1]);
        !this.options.allowIntersection && e || !this._shapeIsValid() ? this._showErrorTooltip() : (this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable())
    },
    _shapeIsValid: function () {
        return !0
    },
    _onZoomEnd: function () {
        null !== this._markers && this._updateGuide()
    },
    _onMouseMove: function (t) {
        var e = this._map.mouseEventToLayerPoint(t.originalEvent), i = this._map.layerPointToLatLng(e);
        this._currentLatLng = i, this._updateTooltip(i), this._updateGuide(e), this._mouseMarker.setLatLng(i), L.DomEvent.preventDefault(t.originalEvent)
    },
    _vertexChanged: function (t, e) {
        this._map.fire(L.Draw.Event.DRAWVERTEX, {layers: this._markerGroup}), this._updateFinishHandler(), this._updateRunningMeasure(t, e), this._clearGuides(), this._updateTooltip()
    },
    _onMouseDown: function (t) {
        if (!this._clickHandled && !this._touchHandled && !this._disableMarkers) {
            this._onMouseMove(t), this._clickHandled = !0, this._disableNewMarkers();
            var e = t.originalEvent, i = e.clientX, n = e.clientY;
            this._startPoint.call(this, i, n)
        }
    },
    _startPoint: function (t, e) {
        this._mouseDownOrigin = L.point(t, e)
    },
    _onMouseUp: function (t) {
        var e = t.originalEvent, i = e.clientX, n = e.clientY;
        this._endPoint.call(this, i, n, t), this._clickHandled = null
    },
    _endPoint: function (t, e, i) {
        if (this._mouseDownOrigin) {
            var n = L.point(t, e).distanceTo(this._mouseDownOrigin), o = this._calculateFinishDistance(i.latlng);
            this.options.maxPoints > 1 && this.options.maxPoints == this._markers.length + 1 ? (this.addVertex(i.latlng), this._finishShape()) : o < 10 && L.Browser.touch ? this._finishShape() : Math.abs(n) < 9 * (window.devicePixelRatio || 1) && this.addVertex(i.latlng), this._enableNewMarkers()
        }
        this._mouseDownOrigin = null
    },
    _onTouch: function (t) {
        var e, i, n = t.originalEvent;
        !n.touches || !n.touches[0] || this._clickHandled || this._touchHandled || this._disableMarkers || (e = n.touches[0].clientX, i = n.touches[0].clientY, this._disableNewMarkers(), this._touchHandled = !0, this._startPoint.call(this, e, i), this._endPoint.call(this, e, i, t), this._touchHandled = null), this._clickHandled = null
    },
    _onMouseOut: function () {
        this._tooltip && this._tooltip._onMouseOut.call(this._tooltip)
    },
    _calculateFinishDistance: function (t) {
        var e;
        if (this._markers.length > 0) {
            var i;
            if (this.type === L.Draw.Polyline.TYPE) i = this._markers[this._markers.length - 1]; else {
                if (this.type !== L.Draw.Polygon.TYPE) return 1 / 0;
                i = this._markers[0]
            }
            var n = this._map.latLngToContainerPoint(i.getLatLng()),
                o = new L.Marker(t, {icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset}),
                s = this._map.latLngToContainerPoint(o.getLatLng());
            e = n.distanceTo(s)
        } else e = 1 / 0;
        return e
    },
    _updateFinishHandler: function () {
        var t = this._markers.length;
        t > 1 && this._markers[t - 1].on("click", this._finishShape, this), t > 2 && this._markers[t - 2].off("click", this._finishShape, this)
    },
    _createMarker: function (t) {
        var e = new L.Marker(t, {icon: this.options.icon, zIndexOffset: 2 * this.options.zIndexOffset});
        return this._markerGroup.addLayer(e), e
    },
    _updateGuide: function (t) {
        var e = this._markers ? this._markers.length : 0;
        e > 0 && (t = t || this._map.latLngToLayerPoint(this._currentLatLng), this._clearGuides(), this._drawGuide(this._map.latLngToLayerPoint(this._markers[e - 1].getLatLng()), t))
    },
    _updateTooltip: function (t) {
        var e = this._getTooltipText();
        t && this._tooltip.updatePosition(t), this._errorShown || this._tooltip.updateContent(e)
    },
    _drawGuide: function (t, e) {
        var i, n, o, s = Math.floor(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))),
            a = this.options.guidelineDistance, r = this.options.maxGuideLineLength, l = s > r ? s - r : a;
        for (this._guidesContainer || (this._guidesContainer = L.DomUtil.create("div", "leaflet-draw-guides", this._overlayPane)); l < s; l += this.options.guidelineDistance) i = l / s, n = {
            x: Math.floor(t.x * (1 - i) + i * e.x),
            y: Math.floor(t.y * (1 - i) + i * e.y)
        }, (o = L.DomUtil.create("div", "leaflet-draw-guide-dash", this._guidesContainer)).style.backgroundColor = this._errorShown ? this.options.drawError.color : this.options.shapeOptions.color, L.DomUtil.setPosition(o, n)
    },
    _updateGuideColor: function (t) {
        if (this._guidesContainer) for (var e = 0, i = this._guidesContainer.childNodes.length; e < i; e++) this._guidesContainer.childNodes[e].style.backgroundColor = t
    },
    _clearGuides: function () {
        if (this._guidesContainer) for (; this._guidesContainer.firstChild;) this._guidesContainer.removeChild(this._guidesContainer.firstChild)
    },
    _getTooltipText: function () {
        var t, e, i = this.options.showLength;
        return L.Browser.touch && (i = !1), 0 === this._markers.length ? t = {text: L.drawLocal.draw.handlers.polyline.tooltip.start} : (e = i ? this._getMeasurementString() : "", t = 1 === this._markers.length ? {
            text: L.drawLocal.draw.handlers.polyline.tooltip.cont,
            subtext: e
        } : {text: L.drawLocal.draw.handlers.polyline.tooltip.end, subtext: e}), t
    },
    _updateRunningMeasure: function (t, e) {
        var i, n, o = this._markers.length;
        1 === this._markers.length ? this._measurementRunningTotal = 0 : (i = o - (e ? 2 : 1), n = L.GeometryUtil.isVersion07x() ? t.distanceTo(this._markers[i].getLatLng()) * (this.options.factor || 1) : this._map.distance(t, this._markers[i].getLatLng()) * (this.options.factor || 1), this._measurementRunningTotal += n * (e ? 1 : -1))
    },
    _getMeasurementString: function () {
        var t, e = this._currentLatLng, i = this._markers[this._markers.length - 1].getLatLng();
        return t = L.GeometryUtil.isVersion07x() ? i && e && e.distanceTo ? this._measurementRunningTotal + e.distanceTo(i) * (this.options.factor || 1) : this._measurementRunningTotal || 0 : i && e ? this._measurementRunningTotal + this._map.distance(e, i) * (this.options.factor || 1) : this._measurementRunningTotal || 0, L.GeometryUtil.readableDistance(t, this.options.metric, this.options.feet, this.options.nautic, this.options.precision)
    },
    _showErrorTooltip: function () {
        this._errorShown = !0, this._tooltip.showAsError().updateContent({text: this.options.drawError.message}), this._updateGuideColor(this.options.drawError.color), this._poly.setStyle({color: this.options.drawError.color}), this._clearHideErrorTimeout(), this._hideErrorTimeout = setTimeout(L.Util.bind(this._hideErrorTooltip, this), this.options.drawError.timeout)
    },
    _hideErrorTooltip: function () {
        this._errorShown = !1, this._clearHideErrorTimeout(), this._tooltip.removeError().updateContent(this._getTooltipText()), this._updateGuideColor(this.options.shapeOptions.color), this._poly.setStyle({color: this.options.shapeOptions.color})
    },
    _clearHideErrorTimeout: function () {
        this._hideErrorTimeout && (clearTimeout(this._hideErrorTimeout), this._hideErrorTimeout = null)
    },
    _disableNewMarkers: function () {
        this._disableMarkers = !0
    },
    _enableNewMarkers: function () {
        setTimeout(function () {
            this._disableMarkers = !1
        }.bind(this), 50)
    },
    _cleanUpShape: function () {
        this._markers.length > 1 && this._markers[this._markers.length - 1].off("click", this._finishShape, this)
    },
    _fireCreatedEvent: function () {
        var t = new this.Poly(this._poly.getLatLngs(), this.options.shapeOptions);
        L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
    }
}), L.Draw.Marker = L.Draw.Feature.extend({
    statics: {TYPE: "marker"},
    options: {icon: new L.Icon.Default, repeatMode: !1, zIndexOffset: 2e3},
    initialize: function (t, e) {
        this.type = L.Draw.Marker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.marker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, t, e)
    },
    addHooks: function () {
        L.Draw.Feature.prototype.addHooks.call(this), this._map && (this._tooltip.updateContent({text: this._initialLabelText}), this._mouseMarker || (this._mouseMarker = L.marker(this._map.getCenter(), {
            icon: L.divIcon({
                className: "leaflet-mouse-marker",
                iconAnchor: [20, 20],
                iconSize: [40, 40]
            }), opacity: 0, zIndexOffset: this.options.zIndexOffset
        })), this._mouseMarker.on("click", this._onClick, this).addTo(this._map), this._map.on("mousemove", this._onMouseMove, this), this._map.on("click", this._onTouch, this))
    },
    removeHooks: function () {
        L.Draw.Feature.prototype.removeHooks.call(this), this._map && (this._marker && (this._marker.off("click", this._onClick, this), this._map.off("click", this._onClick, this).off("click", this._onTouch, this).removeLayer(this._marker), delete this._marker), this._mouseMarker.off("click", this._onClick, this), this._map.removeLayer(this._mouseMarker), delete this._mouseMarker, this._map.off("mousemove", this._onMouseMove, this))
    },
    _onMouseMove: function (t) {
        var e = t.latlng;
        this._tooltip.updatePosition(e), this._mouseMarker.setLatLng(e), this._marker ? (e = this._mouseMarker.getLatLng(), this._marker.setLatLng(e)) : (this._marker = this._createMarker(e), this._marker.on("click", this._onClick, this), this._map.on("click", this._onClick, this).addLayer(this._marker))
    },
    _createMarker: function (t) {
        return new L.Marker(t, {icon: this.options.icon, zIndexOffset: this.options.zIndexOffset})
    },
    _onClick: function () {
        this._fireCreatedEvent(), this.disable(), this.options.repeatMode && this.enable()
    },
    _onTouch: function (t) {
        this._onMouseMove(t), this._onClick()
    },
    _fireCreatedEvent: function () {
        var t = new L.Marker.Touch(this._marker.getLatLng(), {icon: this.options.icon});
        L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
    }
}), L.Draw.Circle = L.Draw.SimpleShape.extend({
    statics: {TYPE: "circle"},
    options: {
        shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !0,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
        }, showRadius: !0, metric: !0, feet: !0, nautic: !1
    },
    initialize: function (t, e) {
        this.type = L.Draw.Circle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
    },
    _drawShape: function (t) {
        if (L.GeometryUtil.isVersion07x()) var e = this._startLatLng.distanceTo(t); else e = this._map.distance(this._startLatLng, t);
        this._shape ? this._shape.setRadius(e) : (this._shape = new L.Circle(this._startLatLng, e, this.options.shapeOptions), this._map.addLayer(this._shape))
    },
    _fireCreatedEvent: function () {
        var t = new L.Circle(this._startLatLng, this._shape.getRadius(), this.options.shapeOptions);
        L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
    },
    _onMouseMove: function (t) {
        var e, i = t.latlng, n = this.options.showRadius, o = this.options.metric;
        if (this._tooltip.updatePosition(i), this._isDrawing) {
            this._drawShape(i), e = this._shape.getRadius().toFixed(1);
            var s = "";
            n && (s = L.drawLocal.draw.handlers.circle.radius + ": " + L.GeometryUtil.readableDistance(e, o, this.options.feet, this.options.nautic)), this._tooltip.updateContent({
                text: this._endLabelText,
                subtext: s
            })
        }
    }
}), L.Draw.CircleMarker = L.Draw.Marker.extend({
    statics: {TYPE: "circlemarker"},
    options: {
        stroke: !0,
        color: "#3388ff",
        weight: 4,
        opacity: .5,
        fill: !0,
        fillColor: null,
        fillOpacity: .2,
        clickable: !0,
        zIndexOffset: 2e3
    },
    initialize: function (t, e) {
        this.type = L.Draw.CircleMarker.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.circlemarker.tooltip.start, L.Draw.Feature.prototype.initialize.call(this, t, e)
    },
    _fireCreatedEvent: function () {
        var t = new L.CircleMarker(this._marker.getLatLng(), this.options);
        L.Draw.Feature.prototype._fireCreatedEvent.call(this, t)
    },
    _createMarker: function (t) {
        return new L.CircleMarker(t, this.options)
    }
}), L.Draw.Polygon = L.Draw.Polyline.extend({
    statics: {TYPE: "polygon"},
    Poly: L.Polygon,
    options: {
        showArea: !1,
        showLength: !1,
        shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !0,
            fillColor: null,
            fillOpacity: .2,
            clickable: !0
        },
        metric: !0,
        feet: !0,
        nautic: !1,
        precision: {}
    },
    initialize: function (t, e) {
        L.Draw.Polyline.prototype.initialize.call(this, t, e), this.type = L.Draw.Polygon.TYPE
    },
    _updateFinishHandler: function () {
        var t = this._markers.length;
        1 === t && this._markers[0].on("click", this._finishShape, this), t > 2 && (this._markers[t - 1].on("dblclick", this._finishShape, this), t > 3 && this._markers[t - 2].off("dblclick", this._finishShape, this))
    },
    _getTooltipText: function () {
        var t, e;
        return 0 === this._markers.length ? t = L.drawLocal.draw.handlers.polygon.tooltip.start : this._markers.length < 3 ? (t = L.drawLocal.draw.handlers.polygon.tooltip.cont, e = this._getMeasurementString()) : (t = L.drawLocal.draw.handlers.polygon.tooltip.end, e = this._getMeasurementString()), {
            text: t,
            subtext: e
        }
    },
    _getMeasurementString: function () {
        var t = this._area, e = "";
        return t || this.options.showLength ? (this.options.showLength && (e = L.Draw.Polyline.prototype._getMeasurementString.call(this)), t && (e += "<br>" + L.GeometryUtil.readableArea(t, this.options.metric, this.options.precision)), e) : null
    },
    _shapeIsValid: function () {
        return this._markers.length >= 3
    },
    _vertexChanged: function (t, e) {
        var i;
        !this.options.allowIntersection && this.options.showArea && (i = this._poly.getLatLngs(), this._area = L.GeometryUtil.geodesicArea(i)), L.Draw.Polyline.prototype._vertexChanged.call(this, t, e)
    },
    _cleanUpShape: function () {
        var t = this._markers.length;
        t > 0 && (this._markers[0].off("click", this._finishShape, this), t > 2 && this._markers[t - 1].off("dblclick", this._finishShape, this))
    }
}), L.Draw.Rectangle = L.Draw.SimpleShape.extend({
    statics: {TYPE: "rectangle"},
    options: {
        shapeOptions: {
            stroke: !0,
            color: "#3388ff",
            weight: 4,
            opacity: .5,
            fill: !0,
            fillColor: null,
            fillOpacity: .2,
            showArea: !0,
            clickable: !0
        }, metric: !0
    },
    initialize: function (t, e) {
        this.type = L.Draw.Rectangle.TYPE, this._initialLabelText = L.drawLocal.draw.handlers.rectangle.tooltip.start, L.Draw.SimpleShape.prototype.initialize.call(this, t, e)
    },
    disable: function () {
        this._enabled && (this._isCurrentlyTwoClickDrawing = !1, L.Draw.SimpleShape.prototype.disable.call(this))
    },
    _onMouseUp: function (t) {
        this._shape || this._isCurrentlyTwoClickDrawing ? this._isCurrentlyTwoClickDrawing && !_hasAncestor(t.target, "leaflet-pane") || L.Draw.SimpleShape.prototype._onMouseUp.call(this) : this._isCurrentlyTwoClickDrawing = !0
    },
    _drawShape: function (t) {
        this._shape ? this._shape.setBounds(new L.LatLngBounds(this._startLatLng, t)) : (this._shape = new L.Rectangle(new L.LatLngBounds(this._startLatLng, t), this.options.shapeOptions), this._map.addLayer(this._shape))
    },
    _fireCreatedEvent: function () {
        var t = new L.Rectangle(this._shape.getBounds(), this.options.shapeOptions);
        L.Draw.SimpleShape.prototype._fireCreatedEvent.call(this, t)
    },
    _getTooltipText: function () {
        var t, e, i, n = L.Draw.SimpleShape.prototype._getTooltipText.call(this), o = this._shape,
            s = this.options.showArea;
        return o && (t = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), e = L.GeometryUtil.geodesicArea(t), i = s ? L.GeometryUtil.readableArea(e, this.options.metric) : ""), {
            text: n.text,
            subtext: i
        }
    }
}), L.EditToolbar = L.Toolbar.extend({
    statics: {TYPE: "edit"},
    options: {
        edit: {
            selectedPathOptions: {
                dashArray: "10, 10",
                fill: !0,
                fillColor: "#fe57a1",
                fillOpacity: .1,
                maintainColor: !1
            }
        }, remove: {}, poly: null, featureGroup: null
    },
    initialize: function (t) {
        t.edit && (void 0 === t.edit.selectedPathOptions && (t.edit.selectedPathOptions = this.options.edit.selectedPathOptions), t.edit.selectedPathOptions = L.extend({}, this.options.edit.selectedPathOptions, t.edit.selectedPathOptions)), t.remove && (t.remove = L.extend({}, this.options.remove, t.remove)), t.poly && (t.poly = L.extend({}, this.options.poly, t.poly)), this._toolbarClass = "leaflet-draw-edit", L.Toolbar.prototype.initialize.call(this, t), this._selectedFeatureCount = 0
    },
    getModeHandlers: function (t) {
        var e = this.options.featureGroup;
        return [{
            enabled: this.options.edit,
            handler: new L.EditToolbar.Edit(t, {
                featureGroup: e,
                selectedPathOptions: this.options.edit.selectedPathOptions,
                poly: this.options.poly
            }),
            title: L.drawLocal.edit.toolbar.buttons.edit
        }, {
            enabled: this.options.remove,
            handler: new L.EditToolbar.Delete(t, {featureGroup: e}),
            title: L.drawLocal.edit.toolbar.buttons.remove
        }]
    },
    getActions: function (t) {
        var e = [{
            title: L.drawLocal.edit.toolbar.actions.save.title,
            text: L.drawLocal.edit.toolbar.actions.save.text,
            callback: this._save,
            context: this
        }, {
            title: L.drawLocal.edit.toolbar.actions.cancel.title,
            text: L.drawLocal.edit.toolbar.actions.cancel.text,
            callback: this.disable,
            context: this
        }];
        return t.removeAllLayers && e.push({
            title: L.drawLocal.edit.toolbar.actions.clearAll.title,
            text: L.drawLocal.edit.toolbar.actions.clearAll.text,
            callback: this._clearAllLayers,
            context: this
        }), e
    },
    addToolbar: function (t) {
        var e = L.Toolbar.prototype.addToolbar.call(this, t);
        return this._checkDisabled(), this.options.featureGroup.on("layeradd layerremove", this._checkDisabled, this), e
    },
    removeToolbar: function () {
        this.options.featureGroup.off("layeradd layerremove", this._checkDisabled, this), L.Toolbar.prototype.removeToolbar.call(this)
    },
    disable: function () {
        this.enabled() && (this._activeMode.handler.revertLayers(), L.Toolbar.prototype.disable.call(this))
    },
    _save: function () {
        this._activeMode.handler.save(), this._activeMode && this._activeMode.handler.disable()
    },
    _clearAllLayers: function () {
        this._activeMode.handler.removeAllLayers(), this._activeMode && this._activeMode.handler.disable()
    },
    _checkDisabled: function () {
        var t, e = 0 !== this.options.featureGroup.getLayers().length;
        this.options.edit && (t = this._modes[L.EditToolbar.Edit.TYPE].button, e ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"), t.setAttribute("title", e ? L.drawLocal.edit.toolbar.buttons.edit : L.drawLocal.edit.toolbar.buttons.editDisabled)), this.options.remove && (t = this._modes[L.EditToolbar.Delete.TYPE].button, e ? L.DomUtil.removeClass(t, "leaflet-disabled") : L.DomUtil.addClass(t, "leaflet-disabled"), t.setAttribute("title", e ? L.drawLocal.edit.toolbar.buttons.remove : L.drawLocal.edit.toolbar.buttons.removeDisabled))
    }
}), L.EditToolbar.Edit = L.Handler.extend({
    statics: {TYPE: "edit"}, initialize: function (t, e) {
        if (L.Handler.prototype.initialize.call(this, t), L.setOptions(this, e), this._featureGroup = e.featureGroup, !(this._featureGroup instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
        this._uneditedLayerProps = {}, this.type = L.EditToolbar.Edit.TYPE;
        var i = L.version.split(".");
        1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.EditToolbar.Edit.include(L.Evented.prototype) : L.EditToolbar.Edit.include(L.Mixin.Events)
    }, enable: function () {
        !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {handler: this.type}), this._map.fire(L.Draw.Event.EDITSTART, {handler: this.type}), L.Handler.prototype.enable.call(this), this._featureGroup.on("layeradd", this._enableLayerEdit, this).on("layerremove", this._disableLayerEdit, this))
    }, disable: function () {
        this._enabled && (this._featureGroup.off("layeradd", this._enableLayerEdit, this).off("layerremove", this._disableLayerEdit, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.EDITSTOP, {handler: this.type}), this.fire("disabled", {handler: this.type}))
    }, addHooks: function () {
        var t = this._map;
        t && (t.getContainer().focus(), this._featureGroup.eachLayer(this._enableLayerEdit, this), this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({
            text: L.drawLocal.edit.handlers.edit.tooltip.text,
            subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
        }), t._editTooltip = this._tooltip, this._updateTooltip(), this._map.on("mousemove", this._onMouseMove, this).on("touchmove", this._onMouseMove, this).on("MSPointerMove", this._onMouseMove, this).on(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
    }, removeHooks: function () {
        this._map && (this._featureGroup.eachLayer(this._disableLayerEdit, this), this._uneditedLayerProps = {}, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this).off("touchmove", this._onMouseMove, this).off("MSPointerMove", this._onMouseMove, this).off(L.Draw.Event.EDITVERTEX, this._updateTooltip, this))
    }, revertLayers: function () {
        this._featureGroup.eachLayer(function (t) {
            this._revertLayer(t)
        }, this)
    }, save: function () {
        var t = new L.LayerGroup;
        this._featureGroup.eachLayer(function (e) {
            e.edited && (t.addLayer(e), e.edited = !1)
        }), this._map.fire(L.Draw.Event.EDITED, {layers: t})
    }, _backupLayer: function (t) {
        var e = L.Util.stamp(t);
        this._uneditedLayerProps[e] || (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? this._uneditedLayerProps[e] = {latlngs: L.LatLngUtil.cloneLatLngs(t.getLatLngs())} : t instanceof L.Circle ? this._uneditedLayerProps[e] = {
            latlng: L.LatLngUtil.cloneLatLng(t.getLatLng()),
            radius: t.getRadius()
        } : (t instanceof L.Marker || t instanceof L.CircleMarker) && (this._uneditedLayerProps[e] = {latlng: L.LatLngUtil.cloneLatLng(t.getLatLng())}))
    }, _getTooltipText: function () {
        return {
            text: L.drawLocal.edit.handlers.edit.tooltip.text,
            subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
        }
    }, _updateTooltip: function () {
        this._tooltip.updateContent(this._getTooltipText())
    }, _revertLayer: function (t) {
        var e = L.Util.stamp(t);
        t.edited = !1, this._uneditedLayerProps.hasOwnProperty(e) && (t instanceof L.Polyline || t instanceof L.Polygon || t instanceof L.Rectangle ? t.setLatLngs(this._uneditedLayerProps[e].latlngs) : t instanceof L.Circle ? (t.setLatLng(this._uneditedLayerProps[e].latlng), t.setRadius(this._uneditedLayerProps[e].radius)) : (t instanceof L.Marker || t instanceof L.CircleMarker) && t.setLatLng(this._uneditedLayerProps[e].latlng), t.fire("revert-edited", {layer: t}))
    }, _enableLayerEdit: function (t) {
        var e, i, n = t.layer || t.target || t;
        this._backupLayer(n), this.options.poly && (i = L.Util.extend({}, this.options.poly), n.options.poly = i), this.options.selectedPathOptions && ((e = L.Util.extend({}, this.options.selectedPathOptions)).maintainColor && (e.color = n.options.color, e.fillColor = n.options.fillColor), n.options.original = L.extend({}, n.options), n.options.editing = e), n instanceof L.Marker ? (n.editing && n.editing.enable(), n.dragging.enable(), n.on("dragend", this._onMarkerDragEnd).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onMarkerDragEnd, this).on("MSPointerUp", this._onMarkerDragEnd, this)) : n.editing.enable()
    }, _disableLayerEdit: function (t) {
        var e = t.layer || t.target || t;
        e.edited = !1, e.editing && e.editing.disable(), delete e.options.editing, delete e.options.original, this._selectedPathOptions && (e instanceof L.Marker ? this._toggleMarkerHighlight(e) : (e.setStyle(e.options.previousOptions), delete e.options.previousOptions)), e instanceof L.Marker ? (e.dragging.disable(), e.off("dragend", this._onMarkerDragEnd, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onMarkerDragEnd, this).off("MSPointerUp", this._onMarkerDragEnd, this)) : e.editing.disable()
    }, _onMouseMove: function (t) {
        this._tooltip.updatePosition(t.latlng)
    }, _onMarkerDragEnd: function (t) {
        var e = t.target;
        e.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, {layer: e})
    }, _onTouchMove: function (t) {
        var e = t.originalEvent.changedTouches[0], i = this._map.mouseEventToLayerPoint(e),
            n = this._map.layerPointToLatLng(i);
        t.target.setLatLng(n)
    }, _hasAvailableLayers: function () {
        return 0 !== this._featureGroup.getLayers().length
    }
}), L.EditToolbar.Delete = L.Handler.extend({
    statics: {TYPE: "remove"}, initialize: function (t, e) {
        if (L.Handler.prototype.initialize.call(this, t), L.Util.setOptions(this, e), this._deletableLayers = this.options.featureGroup, !(this._deletableLayers instanceof L.FeatureGroup)) throw new Error("options.featureGroup must be a L.FeatureGroup");
        this.type = L.EditToolbar.Delete.TYPE;
        var i = L.version.split(".");
        1 === parseInt(i[0], 10) && parseInt(i[1], 10) >= 2 ? L.EditToolbar.Delete.include(L.Evented.prototype) : L.EditToolbar.Delete.include(L.Mixin.Events)
    }, enable: function () {
        !this._enabled && this._hasAvailableLayers() && (this.fire("enabled", {handler: this.type}), this._map.fire(L.Draw.Event.DELETESTART, {handler: this.type}), L.Handler.prototype.enable.call(this), this._deletableLayers.on("layeradd", this._enableLayerDelete, this).on("layerremove", this._disableLayerDelete, this))
    }, disable: function () {
        this._enabled && (this._deletableLayers.off("layeradd", this._enableLayerDelete, this).off("layerremove", this._disableLayerDelete, this), L.Handler.prototype.disable.call(this), this._map.fire(L.Draw.Event.DELETESTOP, {handler: this.type}), this.fire("disabled", {handler: this.type}))
    }, addHooks: function () {
        var t = this._map;
        t && (t.getContainer().focus(), this._deletableLayers.eachLayer(this._enableLayerDelete, this), this._deletedLayers = new L.LayerGroup, this._tooltip = new L.Draw.Tooltip(this._map), this._tooltip.updateContent({text: L.drawLocal.edit.handlers.remove.tooltip.text}), this._map.on("mousemove", this._onMouseMove, this))
    }, removeHooks: function () {
        this._map && (this._deletableLayers.eachLayer(this._disableLayerDelete, this), this._deletedLayers = null, this._tooltip.dispose(), this._tooltip = null, this._map.off("mousemove", this._onMouseMove, this))
    }, revertLayers: function () {
        this._deletedLayers.eachLayer(function (t) {
            this._deletableLayers.addLayer(t), t.fire("revert-deleted", {layer: t})
        }, this)
    }, save: function () {
        this._map.fire(L.Draw.Event.DELETED, {layers: this._deletedLayers})
    }, removeAllLayers: function () {
        this._deletableLayers.eachLayer(function (t) {
            this._removeLayer({layer: t})
        }, this), this.save()
    }, _enableLayerDelete: function (t) {
        (t.layer || t.target || t).on("click", this._removeLayer, this)
    }, _disableLayerDelete: function (t) {
        var e = t.layer || t.target || t;
        e.off("click", this._removeLayer, this), this._deletedLayers.removeLayer(e)
    }, _removeLayer: function (t) {
        var e = t.layer || t.target || t;
        this._deletableLayers.removeLayer(e), this._deletedLayers.addLayer(e), e.fire("deleted")
    }, _onMouseMove: function (t) {
        this._tooltip.updatePosition(t.latlng)
    }, _hasAvailableLayers: function () {
        return 0 !== this._deletableLayers.getLayers().length
    }
}), L.Control.Draw = L.Control.extend({
    options: {position: "topleft", draw: {}, edit: !1}, initialize: function (t) {
        if (L.version < "0.7") throw new Error("Leaflet.draw 0.2.3+ requires Leaflet 0.7.0+. Download latest from https://github.com/Leaflet/Leaflet/");
        var e;
        L.Control.prototype.initialize.call(this, t), this._toolbars = {}, L.DrawToolbar && this.options.draw && (e = new L.DrawToolbar(this.options.draw), this._toolbars[L.DrawToolbar.TYPE] = e, this._toolbars[L.DrawToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.EditToolbar && this.options.edit && (e = new L.EditToolbar(this.options.edit), this._toolbars[L.EditToolbar.TYPE] = e, this._toolbars[L.EditToolbar.TYPE].on("enable", this._toolbarEnabled, this)), L.toolbar = this
    }, onAdd: function (t) {
        var e, i = L.DomUtil.create("div", "leaflet-draw"), n = !1, o = "leaflet-draw-toolbar-top";
        for (var s in this._toolbars) this._toolbars.hasOwnProperty(s) && (e = this._toolbars[s].addToolbar(t)) && (n || (L.DomUtil.hasClass(e, o) || L.DomUtil.addClass(e.childNodes[0], o), n = !0), i.appendChild(e));
        return i
    }, onRemove: function () {
        for (var t in this._toolbars) this._toolbars.hasOwnProperty(t) && this._toolbars[t].removeToolbar()
    }, setDrawingOptions: function (t) {
        for (var e in this._toolbars) this._toolbars[e] instanceof L.DrawToolbar && this._toolbars[e].setOptions(t)
    }, _toolbarEnabled: function (t) {
        var e = t.target;
        for (var i in this._toolbars) this._toolbars[i] !== e && this._toolbars[i].disable()
    }
}), L.Map.mergeOptions({drawControlTooltips: !0, drawControl: !1}), L.Map.addInitHook(function () {
    this.options.drawControl && (this.drawControl = new L.Control.Draw, this.addControl(this.drawControl))
}), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({
    initialize: function (t) {
        this.latlngs = [t._latlngs], t._holes && (this.latlngs = this.latlngs.concat(t._holes)), this._poly = t, this._poly.on("revert-edited", this._updateLatLngs, this)
    }, _defaultShape: function () {
        return L.Polyline._flat ? L.Polyline._flat(this._poly._latlngs) ? this._poly._latlngs : this._poly._latlngs[0] : this._poly._latlngs
    }, _eachVertexHandler: function (t) {
        for (var e = 0; e < this._verticesHandlers.length; e++) t(this._verticesHandlers[e])
    }, addHooks: function () {
        this._initHandlers(), this._eachVertexHandler(function (t) {
            t.addHooks()
        })
    }, removeHooks: function () {
        this._eachVertexHandler(function (t) {
            t.removeHooks()
        })
    }, updateMarkers: function () {
        this._eachVertexHandler(function (t) {
            t.updateMarkers()
        })
    }, _initHandlers: function () {
        this._verticesHandlers = [];
        for (var t = 0; t < this.latlngs.length; t++) this._verticesHandlers.push(new L.Edit.PolyVerticesEdit(this._poly, this.latlngs[t], this._poly.options.poly))
    }, _updateLatLngs: function (t) {
        this.latlngs = [t.layer._latlngs], t.layer._holes && (this.latlngs = this.latlngs.concat(t.layer._holes))
    }
}), L.Edit.PolyVerticesEdit = L.Handler.extend({
    options: {
        icon: new L.DivIcon({iconSize: new L.Point(8, 8), className: "leaflet-div-icon leaflet-editing-icon"}),
        touchIcon: new L.DivIcon({
            iconSize: new L.Point(20, 20),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-touch-icon"
        }),
        drawError: {color: "#b00b00", timeout: 1e3}
    }, initialize: function (t, e, i) {
        L.Browser.touch && (this.options.icon = this.options.touchIcon), this._poly = t, i && i.drawError && (i.drawError = L.Util.extend({}, this.options.drawError, i.drawError)), this._latlngs = e, L.setOptions(this, i)
    }, _defaultShape: function () {
        return L.Polyline._flat ? L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0] : this._latlngs
    }, addHooks: function () {
        var t = this._poly, e = t._path;
        t instanceof L.Polygon || (t.options.fill = !1, t.options.editing && (t.options.editing.fill = !1)), e && t.options.editing.className && (t.options.original.className && t.options.original.className.split(" ").forEach(function (t) {
            L.DomUtil.removeClass(e, t)
        }), t.options.editing.className.split(" ").forEach(function (t) {
            L.DomUtil.addClass(e, t)
        })), t.setStyle(t.options.editing), this._poly._map && (this._map = this._poly._map, this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup))
    }, removeHooks: function () {
        var t = this._poly, e = t._path;
        e && t.options.editing.className && (t.options.editing.className.split(" ").forEach(function (t) {
            L.DomUtil.removeClass(e, t)
        }), t.options.original.className && t.options.original.className.split(" ").forEach(function (t) {
            L.DomUtil.addClass(e, t)
        })), t.setStyle(t.options.original), t._map && (t._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers)
    }, updateMarkers: function () {
        this._markerGroup.clearLayers(), this._initMarkers()
    }, _initMarkers: function () {
        this._markerGroup || (this._markerGroup = new L.LayerGroup), this._markers = [];
        var t, e, i, n, o, s, a = this._defaultShape();
        for (t = 0, i = a.length; t < i; t++) (n = this._createMarker(a[t], t)).on("click", this._onMarkerClick, this), this._markers.push(n);
        for (t = 0, e = i - 1; t < i; e = t++) (0 !== t || L.Polygon && this._poly instanceof L.Polygon) && (o = this._markers[e], s = this._markers[t], this._createMiddleMarker(o, s), this._updatePrevNext(o, s))
    }, _createMarker: function (t, e) {
        var i = new L.Marker.Touch(t, {draggable: !0, icon: this.options.icon});
        return i._origLatLng = t, i._index = e, i.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._fireEdit, this).on("touchmove", this._onTouchMove, this).on("touchend", this._fireEdit, this).on("MSPointerMove", this._onTouchMove, this).on("MSPointerUp", this._fireEdit, this), this._markerGroup.addLayer(i), i
    }, _onMarkerDragStart: function () {
        this._poly.fire("editstart")
    }, _spliceLatLngs: function () {
        var t = this._defaultShape(), e = [].splice.apply(t, arguments);
        return this._poly._convertLatLngs(t, !0), this._poly.redraw(), e
    }, _removeMarker: function (t) {
        var e = t._index;
        this._markerGroup.removeLayer(t), this._markers.splice(e, 1), this._spliceLatLngs(e, 1), this._updateIndexes(e, -1), t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._fireEdit, this).off("touchmove", this._onMarkerDrag, this).off("touchend", this._fireEdit, this).off("click", this._onMarkerClick, this).off("MSPointerMove", this._onTouchMove, this).off("MSPointerUp", this._fireEdit, this)
    }, _fireEdit: function () {
        this._poly.edited = !0, this._poly.fire("edit"), this._poly._map.fire(L.Draw.Event.EDITVERTEX, {
            layers: this._markerGroup,
            poly: this._poly
        })
    }, _onMarkerDrag: function (t) {
        var e = t.target, i = this._poly;
        if (L.extend(e._origLatLng, e._latlng), e._middleLeft && e._middleLeft.setLatLng(this._getMiddleLatLng(e._prev, e)), e._middleRight && e._middleRight.setLatLng(this._getMiddleLatLng(e, e._next)), i.options.poly) {
            var n = i._map._editTooltip;
            if (!i.options.poly.allowIntersection && i.intersects()) {
                var o = i.options.color;
                i.setStyle({color: this.options.drawError.color}), 0 !== L.version.indexOf("0.7") && e.dragging._draggable._onUp(t), this._onMarkerClick(t), n && n.updateContent({text: L.drawLocal.draw.handlers.polyline.error}), setTimeout(function () {
                    i.setStyle({color: o}), n && n.updateContent({
                        text: L.drawLocal.edit.handlers.edit.tooltip.text,
                        subtext: L.drawLocal.edit.handlers.edit.tooltip.subtext
                    })
                }, 1e3)
            }
        }
        this._poly.redraw(), this._poly.fire("editdrag")
    }, _onMarkerClick: function (t) {
        var e = L.Polygon && this._poly instanceof L.Polygon ? 4 : 3, i = t.target;
        this._defaultShape().length < e || (this._removeMarker(i), this._updatePrevNext(i._prev, i._next), i._middleLeft && this._markerGroup.removeLayer(i._middleLeft), i._middleRight && this._markerGroup.removeLayer(i._middleRight), i._prev && i._next ? this._createMiddleMarker(i._prev, i._next) : i._prev ? i._next || (i._prev._middleRight = null) : i._next._middleLeft = null, this._fireEdit())
    }, _onTouchMove: function (t) {
        var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]), i = this._map.layerPointToLatLng(e),
            n = t.target;
        L.extend(n._origLatLng, i), n._middleLeft && n._middleLeft.setLatLng(this._getMiddleLatLng(n._prev, n)), n._middleRight && n._middleRight.setLatLng(this._getMiddleLatLng(n, n._next)), this._poly.redraw(), this.updateMarkers()
    }, _updateIndexes: function (t, e) {
        this._markerGroup.eachLayer(function (i) {
            i._index > t && (i._index += e)
        })
    }, _createMiddleMarker: function (t, e) {
        var i, n, o, s = this._getMiddleLatLng(t, e), a = this._createMarker(s);
        a.setOpacity(.6), t._middleRight = e._middleLeft = a, n = function () {
            a.off("touchmove", n, this);
            var o = e._index;
            a._index = o, a.off("click", i, this).on("click", this._onMarkerClick, this), s.lat = a.getLatLng().lat, s.lng = a.getLatLng().lng, this._spliceLatLngs(o, 0, s), this._markers.splice(o, 0, a), a.setOpacity(1), this._updateIndexes(o, 1), e._index++, this._updatePrevNext(t, a), this._updatePrevNext(a, e), this._poly.fire("editstart")
        }, o = function () {
            a.off("dragstart", n, this), a.off("dragend", o, this), a.off("touchmove", n, this), this._createMiddleMarker(t, a), this._createMiddleMarker(a, e)
        }, i = function () {
            n.call(this), o.call(this), this._fireEdit()
        }, a.on("click", i, this).on("dragstart", n, this).on("dragend", o, this).on("touchmove", n, this), this._markerGroup.addLayer(a)
    }, _updatePrevNext: function (t, e) {
        t && (t._next = e), e && (e._prev = t)
    }, _getMiddleLatLng: function (t, e) {
        var i = this._poly._map, n = i.project(t.getLatLng()), o = i.project(e.getLatLng());
        return i.unproject(n._add(o)._divideBy(2))
    }
}), L.Polyline.addInitHook(function () {
    this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this), this.options.editable && this.editing.enable()), this.on("add", function () {
        this.editing && this.editing.enabled() && this.editing.addHooks()
    }), this.on("remove", function () {
        this.editing && this.editing.enabled() && this.editing.removeHooks()
    }))
}), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({
    options: {
        moveIcon: new L.DivIcon({
            iconSize: new L.Point(8, 8),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move"
        }),
        resizeIcon: new L.DivIcon({
            iconSize: new L.Point(8, 8),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize"
        }),
        touchMoveIcon: new L.DivIcon({
            iconSize: new L.Point(20, 20),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon"
        }),
        touchResizeIcon: new L.DivIcon({
            iconSize: new L.Point(20, 20),
            className: "leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon"
        })
    }, initialize: function (t, e) {
        L.Browser.touch && (this.options.moveIcon = this.options.touchMoveIcon, this.options.resizeIcon = this.options.touchResizeIcon), this._shape = t, L.Util.setOptions(this, e)
    }, addHooks: function () {
        var t = this._shape;
        this._shape._map && (this._map = this._shape._map, t.setStyle(t.options.editing), t._map && (this._map = t._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup)))
    }, removeHooks: function () {
        var t = this._shape;
        if (t.setStyle(t.options.original), t._map) {
            this._unbindMarker(this._moveMarker);
            for (var e = 0, i = this._resizeMarkers.length; e < i; e++) this._unbindMarker(this._resizeMarkers[e]);
            this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup
        }
        this._map = null
    }, updateMarkers: function () {
        this._markerGroup.clearLayers(), this._initMarkers()
    }, _initMarkers: function () {
        this._markerGroup || (this._markerGroup = new L.LayerGroup), this._createMoveMarker(), this._createResizeMarker()
    }, _createMoveMarker: function () {
    }, _createResizeMarker: function () {
    }, _createMarker: function (t, e) {
        var i = new L.Marker.Touch(t, {draggable: !0, icon: e, zIndexOffset: 10});
        return this._bindMarker(i), this._markerGroup.addLayer(i), i
    }, _bindMarker: function (t) {
        t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this).on("touchstart", this._onTouchStart, this).on("touchmove", this._onTouchMove, this).on("MSPointerMove", this._onTouchMove, this).on("touchend", this._onTouchEnd, this).on("MSPointerUp", this._onTouchEnd, this)
    }, _unbindMarker: function (t) {
        t.off("dragstart", this._onMarkerDragStart, this).off("drag", this._onMarkerDrag, this).off("dragend", this._onMarkerDragEnd, this).off("touchstart", this._onTouchStart, this).off("touchmove", this._onTouchMove, this).off("MSPointerMove", this._onTouchMove, this).off("touchend", this._onTouchEnd, this).off("MSPointerUp", this._onTouchEnd, this)
    }, _onMarkerDragStart: function (t) {
        t.target.setOpacity(0), this._shape.fire("editstart")
    }, _fireEdit: function () {
        this._shape.edited = !0, this._shape.fire("edit")
    }, _onMarkerDrag: function (t) {
        var e = t.target, i = e.getLatLng();
        e === this._moveMarker ? this._move(i) : this._resize(i), this._shape.redraw(), this._shape.fire("editdrag")
    }, _onMarkerDragEnd: function (t) {
        t.target.setOpacity(1), this._fireEdit()
    }, _onTouchStart: function (t) {
        if (L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t), "function" == typeof this._getCorners) {
            var e = this._getCorners(), i = t.target, n = i._cornerIndex;
            i.setOpacity(0), this._oppositeCorner = e[(n + 2) % 4], this._toggleCornerMarkers(0, n)
        }
        this._shape.fire("editstart")
    }, _onTouchMove: function (t) {
        var e = this._map.mouseEventToLayerPoint(t.originalEvent.touches[0]), i = this._map.layerPointToLatLng(e);
        return t.target === this._moveMarker ? this._move(i) : this._resize(i), this._shape.redraw(), !1
    }, _onTouchEnd: function (t) {
        t.target.setOpacity(1), this.updateMarkers(), this._fireEdit()
    }, _move: function () {
    }, _resize: function () {
    }
}), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({
    _createMoveMarker: function () {
        var t = this._shape.getBounds().getCenter();
        this._moveMarker = this._createMarker(t, this.options.moveIcon)
    }, _createResizeMarker: function () {
        var t = this._getCorners();
        this._resizeMarkers = [];
        for (var e = 0, i = t.length; e < i; e++) this._resizeMarkers.push(this._createMarker(t[e], this.options.resizeIcon)), this._resizeMarkers[e]._cornerIndex = e
    }, _onMarkerDragStart: function (t) {
        L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
        var e = this._getCorners(), i = t.target._cornerIndex;
        this._oppositeCorner = e[(i + 2) % 4], this._toggleCornerMarkers(0, i)
    }, _onMarkerDragEnd: function (t) {
        var e, i = t.target;
        i === this._moveMarker && (e = this._shape.getBounds().getCenter(), i.setLatLng(e)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t)
    }, _move: function (t) {
        for (var e, i = this._shape._defaultShape ? this._shape._defaultShape() : this._shape.getLatLngs(), n = this._shape.getBounds().getCenter(), o = [], s = 0, a = i.length; s < a; s++) e = [i[s].lat - n.lat, i[s].lng - n.lng], o.push([t.lat + e[0], t.lng + e[1]]);
        this._shape.setLatLngs(o), this._repositionCornerMarkers(), this._map.fire(L.Draw.Event.EDITMOVE, {layer: this._shape})
    }, _resize: function (t) {
        var e;
        this._shape.setBounds(L.latLngBounds(t, this._oppositeCorner)), e = this._shape.getBounds(), this._moveMarker.setLatLng(e.getCenter()), this._map.fire(L.Draw.Event.EDITRESIZE, {layer: this._shape})
    }, _getCorners: function () {
        var t = this._shape.getBounds();
        return [t.getNorthWest(), t.getNorthEast(), t.getSouthEast(), t.getSouthWest()]
    }, _toggleCornerMarkers: function (t) {
        for (var e = 0, i = this._resizeMarkers.length; e < i; e++) this._resizeMarkers[e].setOpacity(t)
    }, _repositionCornerMarkers: function () {
        for (var t = this._getCorners(), e = 0, i = this._resizeMarkers.length; e < i; e++) this._resizeMarkers[e].setLatLng(t[e])
    }
}), L.Rectangle.addInitHook(function () {
    L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable())
}), L.Edit = L.Edit || {}, L.Edit.Marker = L.Handler.extend({
    initialize: function (t, e) {
        this._marker = t, L.setOptions(this, e)
    }, addHooks: function () {
        var t = this._marker;
        t.dragging.enable(), t.on("dragend", this._onDragEnd, t), this._toggleMarkerHighlight()
    }, removeHooks: function () {
        var t = this._marker;
        t.dragging.disable(), t.off("dragend", this._onDragEnd, t), this._toggleMarkerHighlight()
    }, _onDragEnd: function (t) {
        var e = t.target;
        e.edited = !0, this._map.fire(L.Draw.Event.EDITMOVE, {layer: e})
    }, _toggleMarkerHighlight: function () {
        var t = this._marker._icon;
        t && (t.style.display = "none", L.DomUtil.hasClass(t, "leaflet-edit-marker-selected") ? (L.DomUtil.removeClass(t, "leaflet-edit-marker-selected"), this._offsetMarker(t, -4)) : (L.DomUtil.addClass(t, "leaflet-edit-marker-selected"), this._offsetMarker(t, 4)), t.style.display = "")
    }, _offsetMarker: function (t, e) {
        var i = parseInt(t.style.marginTop, 10) - e, n = parseInt(t.style.marginLeft, 10) - e;
        t.style.marginTop = i + "px", t.style.marginLeft = n + "px"
    }
}), L.Marker.addInitHook(function () {
    L.Edit.Marker && (this.editing = new L.Edit.Marker(this), this.options.editable && this.editing.enable())
}), L.Edit = L.Edit || {}, L.Edit.CircleMarker = L.Edit.SimpleShape.extend({
    _createMoveMarker: function () {
        var t = this._shape.getLatLng();
        this._moveMarker = this._createMarker(t, this.options.moveIcon)
    }, _createResizeMarker: function () {
        this._resizeMarkers = []
    }, _move: function (t) {
        if (this._resizeMarkers.length) {
            var e = this._getResizeMarkerPoint(t);
            this._resizeMarkers[0].setLatLng(e)
        }
        this._shape.setLatLng(t), this._map.fire(L.Draw.Event.EDITMOVE, {layer: this._shape})
    }
}), L.CircleMarker.addInitHook(function () {
    L.Edit.CircleMarker && (this.editing = new L.Edit.CircleMarker(this), this.options.editable && this.editing.enable()), this.on("add", function () {
        this.editing && this.editing.enabled() && this.editing.addHooks()
    }), this.on("remove", function () {
        this.editing && this.editing.enabled() && this.editing.removeHooks()
    })
}), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.CircleMarker.extend({
    _createResizeMarker: function () {
        var t = this._shape.getLatLng(), e = this._getResizeMarkerPoint(t);
        this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(e, this.options.resizeIcon))
    }, _getResizeMarkerPoint: function (t) {
        var e = this._shape._radius * Math.cos(Math.PI / 4), i = this._map.project(t);
        return this._map.unproject([i.x + e, i.y - e])
    }, _resize: function (t) {
        var e = this._moveMarker.getLatLng();
        L.GeometryUtil.isVersion07x() ? radius = e.distanceTo(t) : radius = this._map.distance(e, t), this._map.fire(L.Draw.Event.EDITRESIZE, {layer: this._shape})
    }
}), L.Circle.addInitHook(function () {
    L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable()), this.on("add", function () {
        this.editing && this.editing.enabled() && this.editing.addHooks()
    }), this.on("remove", function () {
        this.editing && this.editing.enabled() && this.editing.removeHooks()
    })
}), function () {
    "use strict";
    L.Marker.Measurement = L[L.Layer ? "Layer" : "Class"].extend({
        options: {pane: "markerPane"}, initialize: function (t, e, i, n, o) {
            L.setOptions(this, o), this._latlng = t, this._measurement = e, this._title = i, this._rotation = n
        }, addTo: function (t) {
            return t.addLayer(this), this
        }, onAdd: function (t) {
            this._map = t;
            var e = this.getPane ? this.getPane() : t.getPanes().markerPane,
                i = this._element = L.DomUtil.create("div", "leaflet-zoom-animated leaflet-measure-path-measurement", e),
                n = L.DomUtil.create("div", "", i);
            n.title = this._title, n.innerHTML = this._measurement, t.on("zoomanim", this._animateZoom, this), this._setPosition()
        }, onRemove: function (t) {
            t.off("zoomanim", this._animateZoom, this), (this.getPane ? this.getPane() : t.getPanes().markerPane).removeChild(this._element), this._map = null
        }, _setPosition: function () {
            L.DomUtil.setPosition(this._element, this._map.latLngToLayerPoint(this._latlng)), this._element.style.transform += " rotate(" + this._rotation + "rad)"
        }, _animateZoom: function (t) {
            var e = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
            L.DomUtil.setPosition(this._element, e), this._element.style.transform += " rotate(" + this._rotation + "rad)"
        }
    }), L.marker.measurement = function (t, e, i, n, o) {
        return new L.Marker.Measurement(t, e, i, n, o)
    };
    var t = function (t) {
        var e;
        return this._measurementOptions.imperial ? t > 404.685642 ? (t /= 4046.85642, e = "ac") : (t /= .09290304, e = "ft²") : t > 1e6 ? (t /= 1e6, e = "km²") : e = "m²", t < 100 ? t.toFixed(1) + " " + e : Math.round(t) + " " + e
    }, e = 6378137, i = function (t, e, i) {
        return i ? function () {
            return e.apply(this, arguments), t.apply(this, arguments)
        } : function () {
            return t.apply(this, arguments), e.apply(this, arguments)
        }
    };
    L.Polyline.include({
        showMeasurements: function (t) {
            return !this._map || this._measurementLayer ? this : (this._measurementOptions = L.extend({
                showOnHover: !1,
                minPixelDistance: 30,
                showDistances: !0,
                showArea: !0,
                lang: {totalLength: "Total length", totalArea: "Total area", segmentLength: "Segment length"}
            }, t || {}), this._measurementLayer = L.layerGroup().addTo(this._map), this.updateMeasurements(), this._map.on("zoomend", this.updateMeasurements, this), this)
        }, hideMeasurements: function () {
            return this._map.off("zoomend", this.updateMeasurements, this), this._measurementLayer ? (this._map.removeLayer(this._measurementLayer), this._measurementLayer = null, this) : this
        }, onAdd: i(L.Polyline.prototype.onAdd, function () {
            this.options.showMeasurements && this.showMeasurements(this.options.measurementOptions)
        }), onRemove: i(L.Polyline.prototype.onRemove, function () {
            this.hideMeasurements()
        }, !0), setLatLngs: i(L.Polyline.prototype.setLatLngs, function () {
            return this.updateMeasurements()
        }), spliceLatLngs: i(L.Polyline.prototype.spliceLatLngs, function () {
            return this.updateMeasurements()
        }), formatDistance: function (t) {
            var e, i;
            return this._measurementOptions.imperial ? (i = t / .3048) > 3e3 ? (t /= 1609.344, e = "mi") : (t = i, e = "ft") : t > 1e3 ? (t /= 1e3, e = "km") : e = "m", t < 100 ? t.toFixed(1) + " " + e : Math.round(t) + " " + e
        }, formatArea: t, updateMeasurements: function () {
            if (!this._measurementLayer) return this;
            var t, i, n, o, s, a, r = this.getLatLngs(), l = this instanceof L.Polygon, c = this._measurementOptions,
                d = 0;
            if (r && r.length && L.Util.isArray(r[0]) && (r = r[0]), this._measurementLayer.clearLayers(), this._measurementOptions.showDistances && r.length > 1) {
                t = this._measurementOptions.formatDistance || L.bind(this.formatDistance, this);
                for (var u = 1, h = r.length; l && u <= h || u < h; u++) i = r[u - 1], n = r[u % h], d += a = i.distanceTo(n), o = this._map.latLngToLayerPoint(i), s = this._map.latLngToLayerPoint(n), o.distanceTo(s) >= c.minPixelDistance && L.marker.measurement(this._map.layerPointToLatLng([(o.x + s.x) / 2, (o.y + s.y) / 2]), t(a), c.lang.segmentLength, this._getRotation(i, n), c).addTo(this._measurementLayer);
                l || L.marker.measurement(n, t(d), c.lang.totalLength, 0, c).addTo(this._measurementLayer)
            }
            if (l && c.showArea && r.length > 2) {
                t = c.formatArea || L.bind(this.formatArea, this);
                var p = function (t) {
                    var i, n, o, s, a, r = function (t) {
                        return t * Math.PI / 180
                    }, l = 0, c = t.length;
                    if (c > 2) {
                        for (var d = 0; d < c; d++) d === c - 2 ? (o = c - 2, s = c - 1, a = 0) : d === c - 1 ? (o = c - 1, s = 0, a = 1) : (o = d, s = d + 1, a = d + 2), i = t[o], n = t[s], l += (r(t[a].lng) - r(i.lng)) * Math.sin(r(n.lat));
                        l = l * e * e / 2
                    }
                    return Math.abs(l)
                }(r);
                L.marker.measurement(this.getBounds().getCenter(), t(p), c.lang.totalArea, 0, c).addTo(this._measurementLayer)
            }
            return this
        }, _getRotation: function (t, e) {
            var i = this._map.project(t), n = this._map.project(e);
            return Math.atan((n.y - i.y) / (n.x - i.x))
        }
    }), L.Polyline.addInitHook(function () {
        this.options.showMeasurements && this.showMeasurements()
    }), L.Circle.include({
        showMeasurements: function (t) {
            return !this._map || this._measurementLayer ? this : (this._measurementOptions = L.extend({
                showOnHover: !1,
                showArea: !0,
                lang: {totalArea: "Total area"}
            }, t || {}), this._measurementLayer = L.layerGroup().addTo(this._map), this.updateMeasurements(), this._map.on("zoomend", this.updateMeasurements, this), this)
        }, hideMeasurements: function () {
            return this._map.on("zoomend", this.updateMeasurements, this), this._measurementLayer ? (this._map.removeLayer(this._measurementLayer), this._measurementLayer = null, this) : this
        }, onAdd: i(L.Circle.prototype.onAdd, function () {
            this.options.showMeasurements && this.showMeasurements(this.options.measurementOptions)
        }), onRemove: i(L.Circle.prototype.onRemove, function () {
            this.hideMeasurements()
        }, !0), setLatLng: i(L.Circle.prototype.setLatLng, function () {
            this.updateMeasurements()
        }), setRadius: i(L.Circle.prototype.setRadius, function () {
            this.updateMeasurements()
        }), formatArea: t, updateMeasurements: function () {
            if (this._measurementLayer) {
                var t, i, n = this.getLatLng(), o = this._measurementOptions,
                    s = o.formatArea || L.bind(this.formatArea, this);
                if (this._measurementLayer.clearLayers(), o.showArea) {
                    s = o.formatArea || L.bind(this.formatArea, this);
                    var a = (t = this.getRadius(), i = t / e, 2 * Math.PI * e * e * (1 - Math.cos(i)));
                    L.marker.measurement(n, s(a), o.lang.totalArea, 0, o).addTo(this._measurementLayer)
                }
            }
        }
    }), L.Circle.addInitHook(function () {
        this.options.showMeasurements && this.showMeasurements()
    })
}(), function (t, e, i) {
    L.MarkerClusterGroup = L.FeatureGroup.extend({
        options: {
            maxClusterRadius: 80,
            iconCreateFunction: null,
            clusterPane: L.Marker.prototype.options.pane,
            spiderfyOnMaxZoom: !0,
            showCoverageOnHover: !0,
            zoomToBoundsOnClick: !0,
            singleMarkerMode: !1,
            disableClusteringAtZoom: null,
            removeOutsideVisibleBounds: !0,
            animate: !0,
            animateAddingMarkers: !1,
            spiderfyDistanceMultiplier: 1,
            spiderLegPolylineOptions: {weight: 1.5, color: "#222", opacity: .5},
            chunkedLoading: !1,
            chunkInterval: 200,
            chunkDelay: 50,
            chunkProgress: null,
            polygonOptions: {}
        }, initialize: function (t) {
            L.Util.setOptions(this, t), this.options.iconCreateFunction || (this.options.iconCreateFunction = this._defaultIconCreateFunction), this._featureGroup = L.featureGroup(), this._featureGroup.addEventParent(this), this._nonPointGroup = L.featureGroup(), this._nonPointGroup.addEventParent(this), this._inZoomAnimation = 0, this._needsClustering = [], this._needsRemoving = [], this._currentShownBounds = null, this._queue = [], this._childMarkerEventHandlers = {
                dragstart: this._childMarkerDragStart,
                move: this._childMarkerMoved,
                dragend: this._childMarkerDragEnd
            };
            var e = L.DomUtil.TRANSITION && this.options.animate;
            L.extend(this, e ? this._withAnimation : this._noAnimation), this._markerCluster = e ? L.MarkerCluster : L.MarkerClusterNonAnimated
        }, addLayer: function (t) {
            if (t instanceof L.LayerGroup) return this.addLayers([t]);
            if (!t.getLatLng) return this._nonPointGroup.addLayer(t), this.fire("layeradd", {layer: t}), this;
            if (!this._map) return this._needsClustering.push(t), this.fire("layeradd", {layer: t}), this;
            if (this.hasLayer(t)) return this;
            this._unspiderfy && this._unspiderfy(), this._addLayer(t, this._maxZoom), this.fire("layeradd", {layer: t}), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons();
            var e = t, i = this._zoom;
            if (t.__parent) for (; e.__parent._zoom >= i;) e = e.__parent;
            return this._currentShownBounds.contains(e.getLatLng()) && (this.options.animateAddingMarkers ? this._animationAddLayer(t, e) : this._animationAddLayerNonAnimated(t, e)), this
        }, removeLayer: function (t) {
            return t instanceof L.LayerGroup ? this.removeLayers([t]) : t.getLatLng ? this._map ? t.__parent ? (this._unspiderfy && (this._unspiderfy(), this._unspiderfyLayer(t)), this._removeLayer(t, !0), this.fire("layerremove", {layer: t}), this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), t.off(this._childMarkerEventHandlers, this), this._featureGroup.hasLayer(t) && (this._featureGroup.removeLayer(t), t.clusterShow && t.clusterShow()), this) : this : (!this._arraySplice(this._needsClustering, t) && this.hasLayer(t) && this._needsRemoving.push({
                layer: t,
                latlng: t._latlng
            }), this.fire("layerremove", {layer: t}), this) : (this._nonPointGroup.removeLayer(t), this.fire("layerremove", {layer: t}), this)
        }, addLayers: function (t, e) {
            if (!L.Util.isArray(t)) return this.addLayer(t);
            var i, n = this._featureGroup, o = this._nonPointGroup, s = this.options.chunkedLoading,
                a = this.options.chunkInterval, r = this.options.chunkProgress, l = t.length, c = 0, d = !0;
            if (this._map) {
                var u = (new Date).getTime(), h = L.bind(function () {
                    for (var p = (new Date).getTime(); l > c; c++) {
                        if (s && 0 == c % 200) if ((new Date).getTime() - p > a) break;
                        if ((i = t[c]) instanceof L.LayerGroup) d && (t = t.slice(), d = !1), this._extractNonGroupLayers(i, t), l = t.length; else if (i.getLatLng) {
                            if (!this.hasLayer(i) && (this._addLayer(i, this._maxZoom), e || this.fire("layeradd", {layer: i}), i.__parent && 2 === i.__parent.getChildCount())) {
                                var m = i.__parent.getAllChildMarkers(), f = m[0] === i ? m[1] : m[0];
                                n.removeLayer(f)
                            }
                        } else o.addLayer(i), e || this.fire("layeradd", {layer: i})
                    }
                    r && r(c, l, (new Date).getTime() - u), c === l ? (this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds)) : setTimeout(h, this.options.chunkDelay)
                }, this);
                h()
            } else for (var p = this._needsClustering; l > c; c++) (i = t[c]) instanceof L.LayerGroup ? (d && (t = t.slice(), d = !1), this._extractNonGroupLayers(i, t), l = t.length) : i.getLatLng ? this.hasLayer(i) || p.push(i) : o.addLayer(i);
            return this
        }, removeLayers: function (t) {
            var e, i, n = t.length, o = this._featureGroup, s = this._nonPointGroup, a = !0;
            if (!this._map) {
                for (e = 0; n > e; e++) (i = t[e]) instanceof L.LayerGroup ? (a && (t = t.slice(), a = !1), this._extractNonGroupLayers(i, t), n = t.length) : (this._arraySplice(this._needsClustering, i), s.removeLayer(i), this.hasLayer(i) && this._needsRemoving.push({
                    layer: i,
                    latlng: i._latlng
                }), this.fire("layerremove", {layer: i}));
                return this
            }
            if (this._unspiderfy) {
                this._unspiderfy();
                var r = t.slice(), l = n;
                for (e = 0; l > e; e++) (i = r[e]) instanceof L.LayerGroup ? (this._extractNonGroupLayers(i, r), l = r.length) : this._unspiderfyLayer(i)
            }
            for (e = 0; n > e; e++) (i = t[e]) instanceof L.LayerGroup ? (a && (t = t.slice(), a = !1), this._extractNonGroupLayers(i, t), n = t.length) : i.__parent ? (this._removeLayer(i, !0, !0), this.fire("layerremove", {layer: i}), o.hasLayer(i) && (o.removeLayer(i), i.clusterShow && i.clusterShow())) : (s.removeLayer(i), this.fire("layerremove", {layer: i}));
            return this._topClusterLevel._recalculateBounds(), this._refreshClustersIcons(), this._topClusterLevel._recursivelyAddChildrenToMap(null, this._zoom, this._currentShownBounds), this
        }, clearLayers: function () {
            return this._map || (this._needsClustering = [], delete this._gridClusters, delete this._gridUnclustered), this._noanimationUnspiderfy && this._noanimationUnspiderfy(), this._featureGroup.clearLayers(), this._nonPointGroup.clearLayers(), this.eachLayer(function (t) {
                t.off(this._childMarkerEventHandlers, this), delete t.__parent
            }, this), this._map && this._generateInitialClusters(), this
        }, getBounds: function () {
            var t = new L.LatLngBounds;
            this._topClusterLevel && t.extend(this._topClusterLevel._bounds);
            for (var e = this._needsClustering.length - 1; e >= 0; e--) t.extend(this._needsClustering[e].getLatLng());
            return t.extend(this._nonPointGroup.getBounds()), t
        }, eachLayer: function (t, e) {
            var i, n, o, s = this._needsClustering.slice(), a = this._needsRemoving;
            for (this._topClusterLevel && this._topClusterLevel.getAllChildMarkers(s), n = s.length - 1; n >= 0; n--) {
                for (i = !0, o = a.length - 1; o >= 0; o--) if (a[o].layer === s[n]) {
                    i = !1;
                    break
                }
                i && t.call(e, s[n])
            }
            this._nonPointGroup.eachLayer(t, e)
        }, getLayers: function () {
            var t = [];
            return this.eachLayer(function (e) {
                t.push(e)
            }), t
        }, getLayer: function (t) {
            var e = null;
            return t = parseInt(t, 10), this.eachLayer(function (i) {
                L.stamp(i) === t && (e = i)
            }), e
        }, hasLayer: function (t) {
            if (!t) return !1;
            var e, i = this._needsClustering;
            for (e = i.length - 1; e >= 0; e--) if (i[e] === t) return !0;
            for (e = (i = this._needsRemoving).length - 1; e >= 0; e--) if (i[e].layer === t) return !1;
            return !(!t.__parent || t.__parent._group !== this) || this._nonPointGroup.hasLayer(t)
        }, zoomToShowLayer: function (t, e) {
            "function" != typeof e && (e = function () {
            });
            var i = function () {
                !t._icon && !t.__parent._icon || this._inZoomAnimation || (this._map.off("moveend", i, this), this.off("animationend", i, this), t._icon ? e() : t.__parent._icon && (this.once("spiderfied", e, this), t.__parent.spiderfy()))
            };
            t._icon && this._map.getBounds().contains(t.getLatLng()) ? e() : t.__parent._zoom < Math.round(this._map._zoom) ? (this._map.on("moveend", i, this), this._map.panTo(t.getLatLng())) : (this._map.on("moveend", i, this), this.on("animationend", i, this), t.__parent.zoomToBounds())
        }, onAdd: function (t) {
            var e, i, n;
            if (this._map = t, !isFinite(this._map.getMaxZoom())) throw"Map has no maxZoom specified";
            for (this._featureGroup.addTo(t), this._nonPointGroup.addTo(t), this._gridClusters || this._generateInitialClusters(), this._maxLat = t.options.crs.projection.MAX_LATITUDE, e = 0, i = this._needsRemoving.length; i > e; e++) (n = this._needsRemoving[e]).newlatlng = n.layer._latlng, n.layer._latlng = n.latlng;
            for (e = 0, i = this._needsRemoving.length; i > e; e++) n = this._needsRemoving[e], this._removeLayer(n.layer, !0), n.layer._latlng = n.newlatlng;
            this._needsRemoving = [], this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds(), this._map.on("zoomend", this._zoomEnd, this), this._map.on("moveend", this._moveEnd, this), this._spiderfierOnAdd && this._spiderfierOnAdd(), this._bindEvents(), i = this._needsClustering, this._needsClustering = [], this.addLayers(i, !0)
        }, onRemove: function (t) {
            t.off("zoomend", this._zoomEnd, this), t.off("moveend", this._moveEnd, this), this._unbindEvents(), this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", ""), this._spiderfierOnRemove && this._spiderfierOnRemove(), delete this._maxLat, this._hideCoverage(), this._featureGroup.remove(), this._nonPointGroup.remove(), this._featureGroup.clearLayers(), this._map = null
        }, getVisibleParent: function (t) {
            for (var e = t; e && !e._icon;) e = e.__parent;
            return e || null
        }, _arraySplice: function (t, e) {
            for (var i = t.length - 1; i >= 0; i--) if (t[i] === e) return t.splice(i, 1), !0
        }, _removeFromGridUnclustered: function (t, e) {
            for (var i = this._map, n = this._gridUnclustered, o = Math.floor(this._map.getMinZoom()); e >= o && n[e].removeObject(t, i.project(t.getLatLng(), e)); e--) ;
        }, _childMarkerDragStart: function (t) {
            t.target.__dragStart = t.target._latlng
        }, _childMarkerMoved: function (t) {
            if (!this._ignoreMove && !t.target.__dragStart) {
                var e = t.target._popup && t.target._popup.isOpen();
                this._moveChild(t.target, t.oldLatLng, t.latlng), e && t.target.openPopup()
            }
        }, _moveChild: function (t, e, i) {
            t._latlng = e, this.removeLayer(t), t._latlng = i, this.addLayer(t)
        }, _childMarkerDragEnd: function (t) {
            t.target.__dragStart && this._moveChild(t.target, t.target.__dragStart, t.target._latlng), delete t.target.__dragStart
        }, _removeLayer: function (t, e, i) {
            var n = this._gridClusters, o = this._gridUnclustered, s = this._featureGroup, a = this._map,
                r = Math.floor(this._map.getMinZoom());
            e && this._removeFromGridUnclustered(t, this._maxZoom);
            var l, c = t.__parent, d = c._markers;
            for (this._arraySplice(d, t); c && (c._childCount--, c._boundsNeedUpdate = !0, !(c._zoom < r));) e && c._childCount <= 1 ? (l = c._markers[0] === t ? c._markers[1] : c._markers[0], n[c._zoom].removeObject(c, a.project(c._cLatLng, c._zoom)), o[c._zoom].addObject(l, a.project(l.getLatLng(), c._zoom)), this._arraySplice(c.__parent._childClusters, c), c.__parent._markers.push(l), l.__parent = c.__parent, c._icon && (s.removeLayer(c), i || s.addLayer(l))) : c._iconNeedsUpdate = !0, c = c.__parent;
            delete t.__parent
        }, _isOrIsParent: function (t, e) {
            for (; e;) {
                if (t === e) return !0;
                e = e.parentNode
            }
            return !1
        }, fire: function (t, e, i) {
            if (e && e.layer instanceof L.MarkerCluster) {
                if (e.originalEvent && this._isOrIsParent(e.layer._icon, e.originalEvent.relatedTarget)) return;
                t = "cluster" + t
            }
            L.FeatureGroup.prototype.fire.call(this, t, e, i)
        }, listens: function (t, e) {
            return L.FeatureGroup.prototype.listens.call(this, t, e) || L.FeatureGroup.prototype.listens.call(this, "cluster" + t, e)
        }, _defaultIconCreateFunction: function (t) {
            var e = t.getChildCount(), i = " marker-cluster-";
            return i += 10 > e ? "small" : 100 > e ? "medium" : "large", new L.DivIcon({
                html: "<div><span>" + e + "</span></div>",
                className: "marker-cluster" + i,
                iconSize: new L.Point(40, 40)
            })
        }, _bindEvents: function () {
            var t = this._map, e = this.options.spiderfyOnMaxZoom, i = this.options.showCoverageOnHover,
                n = this.options.zoomToBoundsOnClick;
            (e || n) && this.on("clusterclick", this._zoomOrSpiderfy, this), i && (this.on("clustermouseover", this._showCoverage, this), this.on("clustermouseout", this._hideCoverage, this), t.on("zoomend", this._hideCoverage, this))
        }, _zoomOrSpiderfy: function (t) {
            for (var e = t.layer, i = e; 1 === i._childClusters.length;) i = i._childClusters[0];
            i._zoom === this._maxZoom && i._childCount === e._childCount && this.options.spiderfyOnMaxZoom ? e.spiderfy() : this.options.zoomToBoundsOnClick && e.zoomToBounds(), t.originalEvent && 13 === t.originalEvent.keyCode && this._map._container.focus()
        }, _showCoverage: function (t) {
            var e = this._map;
            this._inZoomAnimation || (this._shownPolygon && e.removeLayer(this._shownPolygon), t.layer.getChildCount() > 2 && t.layer !== this._spiderfied && (this._shownPolygon = new L.Polygon(t.layer.getConvexHull(), this.options.polygonOptions), e.addLayer(this._shownPolygon)))
        }, _hideCoverage: function () {
            this._shownPolygon && (this._map.removeLayer(this._shownPolygon), this._shownPolygon = null)
        }, _unbindEvents: function () {
            var t = this.options.spiderfyOnMaxZoom, e = this.options.showCoverageOnHover,
                i = this.options.zoomToBoundsOnClick, n = this._map;
            (t || i) && this.off("clusterclick", this._zoomOrSpiderfy, this), e && (this.off("clustermouseover", this._showCoverage, this), this.off("clustermouseout", this._hideCoverage, this), n.off("zoomend", this._hideCoverage, this))
        }, _zoomEnd: function () {
            this._map && (this._mergeSplitClusters(), this._zoom = Math.round(this._map._zoom), this._currentShownBounds = this._getExpandedVisibleBounds())
        }, _moveEnd: function () {
            if (!this._inZoomAnimation) {
                var t = this._getExpandedVisibleBounds();
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, t), this._topClusterLevel._recursivelyAddChildrenToMap(null, Math.round(this._map._zoom), t), this._currentShownBounds = t
            }
        }, _generateInitialClusters: function () {
            var t = Math.ceil(this._map.getMaxZoom()), e = Math.floor(this._map.getMinZoom()),
                i = this.options.maxClusterRadius, n = i;
            "function" != typeof i && (n = function () {
                return i
            }), null !== this.options.disableClusteringAtZoom && (t = this.options.disableClusteringAtZoom - 1), this._maxZoom = t, this._gridClusters = {}, this._gridUnclustered = {};
            for (var o = t; o >= e; o--) this._gridClusters[o] = new L.DistanceGrid(n(o)), this._gridUnclustered[o] = new L.DistanceGrid(n(o));
            this._topClusterLevel = new this._markerCluster(this, e - 1)
        }, _addLayer: function (t, e) {
            var i, n, o = this._gridClusters, s = this._gridUnclustered, a = Math.floor(this._map.getMinZoom());
            for (this.options.singleMarkerMode && this._overrideMarkerIcon(t), t.on(this._childMarkerEventHandlers, this); e >= a; e--) {
                i = this._map.project(t.getLatLng(), e);
                var r = o[e].getNearObject(i);
                if (r) return r._addChild(t), void (t.__parent = r);
                if (r = s[e].getNearObject(i)) {
                    var l = r.__parent;
                    l && this._removeLayer(r, !1);
                    var c = new this._markerCluster(this, e, r, t);
                    o[e].addObject(c, this._map.project(c._cLatLng, e)), r.__parent = c, t.__parent = c;
                    var d = c;
                    for (n = e - 1; n > l._zoom; n--) d = new this._markerCluster(this, n, d), o[n].addObject(d, this._map.project(r.getLatLng(), n));
                    return l._addChild(d), void this._removeFromGridUnclustered(r, e)
                }
                s[e].addObject(t, i)
            }
            this._topClusterLevel._addChild(t), t.__parent = this._topClusterLevel
        }, _refreshClustersIcons: function () {
            this._featureGroup.eachLayer(function (t) {
                t instanceof L.MarkerCluster && t._iconNeedsUpdate && t._updateIcon()
            })
        }, _enqueue: function (t) {
            this._queue.push(t), this._queueTimeout || (this._queueTimeout = setTimeout(L.bind(this._processQueue, this), 300))
        }, _processQueue: function () {
            for (var t = 0; t < this._queue.length; t++) this._queue[t].call(this);
            this._queue.length = 0, clearTimeout(this._queueTimeout), this._queueTimeout = null
        }, _mergeSplitClusters: function () {
            var t = Math.round(this._map._zoom);
            this._processQueue(), this._zoom < t && this._currentShownBounds.intersects(this._getExpandedVisibleBounds()) ? (this._animationStart(), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), this._zoom, this._getExpandedVisibleBounds()), this._animationZoomIn(this._zoom, t)) : this._zoom > t ? (this._animationStart(), this._animationZoomOut(this._zoom, t)) : this._moveEnd()
        }, _getExpandedVisibleBounds: function () {
            return this.options.removeOutsideVisibleBounds ? L.Browser.mobile ? this._checkBoundsMaxLat(this._map.getBounds()) : this._checkBoundsMaxLat(this._map.getBounds().pad(1)) : this._mapBoundsInfinite
        }, _checkBoundsMaxLat: function (t) {
            var e = this._maxLat;
            return void 0 !== e && (t.getNorth() >= e && (t._northEast.lat = 1 / 0), t.getSouth() <= -e && (t._southWest.lat = -1 / 0)), t
        }, _animationAddLayerNonAnimated: function (t, e) {
            if (e === t) this._featureGroup.addLayer(t); else if (2 === e._childCount) {
                e._addToMap();
                var i = e.getAllChildMarkers();
                this._featureGroup.removeLayer(i[0]), this._featureGroup.removeLayer(i[1])
            } else e._updateIcon()
        }, _extractNonGroupLayers: function (t, e) {
            var i, n = t.getLayers(), o = 0;
            for (e = e || []; o < n.length; o++) (i = n[o]) instanceof L.LayerGroup ? this._extractNonGroupLayers(i, e) : e.push(i);
            return e
        }, _overrideMarkerIcon: function (t) {
            return t.options.icon = this.options.iconCreateFunction({
                getChildCount: function () {
                    return 1
                }, getAllChildMarkers: function () {
                    return [t]
                }
            })
        }
    }), L.MarkerClusterGroup.include({_mapBoundsInfinite: new L.LatLngBounds(new L.LatLng(-1 / 0, -1 / 0), new L.LatLng(1 / 0, 1 / 0))}), L.MarkerClusterGroup.include({
        _noAnimation: {
            _animationStart: function () {
            }, _animationZoomIn: function (t, e) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this.fire("animationend")
            }, _animationZoomOut: function (t, e) {
                this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this.fire("animationend")
            }, _animationAddLayer: function (t, e) {
                this._animationAddLayerNonAnimated(t, e)
            }
        }, _withAnimation: {
            _animationStart: function () {
                this._map._mapPane.className += " leaflet-cluster-anim", this._inZoomAnimation++
            }, _animationZoomIn: function (t, e) {
                var i, n = this._getExpandedVisibleBounds(), o = this._featureGroup,
                    s = Math.floor(this._map.getMinZoom());
                this._ignoreMove = !0, this._topClusterLevel._recursively(n, t, s, function (s) {
                    var a, r = s._latlng, l = s._markers;
                    for (n.contains(r) || (r = null), s._isSingleParent() && t + 1 === e ? (o.removeLayer(s), s._recursivelyAddChildrenToMap(null, e, n)) : (s.clusterHide(), s._recursivelyAddChildrenToMap(r, e, n)), i = l.length - 1; i >= 0; i--) a = l[i], n.contains(a._latlng) || o.removeLayer(a)
                }), this._forceLayout(), this._topClusterLevel._recursivelyBecomeVisible(n, e), o.eachLayer(function (t) {
                    t instanceof L.MarkerCluster || !t._icon || t.clusterShow()
                }), this._topClusterLevel._recursively(n, t, e, function (t) {
                    t._recursivelyRestoreChildPositions(e)
                }), this._ignoreMove = !1, this._enqueue(function () {
                    this._topClusterLevel._recursively(n, t, s, function (t) {
                        o.removeLayer(t), t.clusterShow()
                    }), this._animationEnd()
                })
            }, _animationZoomOut: function (t, e) {
                this._animationZoomOutSingle(this._topClusterLevel, t - 1, e), this._topClusterLevel._recursivelyAddChildrenToMap(null, e, this._getExpandedVisibleBounds()), this._topClusterLevel._recursivelyRemoveChildrenFromMap(this._currentShownBounds, Math.floor(this._map.getMinZoom()), t, this._getExpandedVisibleBounds())
            }, _animationAddLayer: function (t, e) {
                var i = this, n = this._featureGroup;
                n.addLayer(t), e !== t && (e._childCount > 2 ? (e._updateIcon(), this._forceLayout(), this._animationStart(), t._setPos(this._map.latLngToLayerPoint(e.getLatLng())), t.clusterHide(), this._enqueue(function () {
                    n.removeLayer(t), t.clusterShow(), i._animationEnd()
                })) : (this._forceLayout(), i._animationStart(), i._animationZoomOutSingle(e, this._map.getMaxZoom(), this._zoom)))
            }
        }, _animationZoomOutSingle: function (t, e, i) {
            var n = this._getExpandedVisibleBounds(), o = Math.floor(this._map.getMinZoom());
            t._recursivelyAnimateChildrenInAndAddSelfToMap(n, o, e + 1, i);
            var s = this;
            this._forceLayout(), t._recursivelyBecomeVisible(n, i), this._enqueue(function () {
                if (1 === t._childCount) {
                    var a = t._markers[0];
                    this._ignoreMove = !0, a.setLatLng(a.getLatLng()), this._ignoreMove = !1, a.clusterShow && a.clusterShow()
                } else t._recursively(n, i, o, function (t) {
                    t._recursivelyRemoveChildrenFromMap(n, o, e + 1)
                });
                s._animationEnd()
            })
        }, _animationEnd: function () {
            this._map && (this._map._mapPane.className = this._map._mapPane.className.replace(" leaflet-cluster-anim", "")), this._inZoomAnimation--, this.fire("animationend")
        }, _forceLayout: function () {
            L.Util.falseFn(e.body.offsetWidth)
        }
    }), L.markerClusterGroup = function (t) {
        return new L.MarkerClusterGroup(t)
    }, L.MarkerCluster = L.Marker.extend({
        initialize: function (t, e, i, n) {
            L.Marker.prototype.initialize.call(this, i ? i._cLatLng || i.getLatLng() : new L.LatLng(0, 0), {
                icon: this,
                pane: t.options.clusterPane
            }), this._group = t, this._zoom = e, this._markers = [], this._childClusters = [], this._childCount = 0, this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._bounds = new L.LatLngBounds, i && this._addChild(i), n && this._addChild(n)
        }, getAllChildMarkers: function (t) {
            t = t || [];
            for (var e = this._childClusters.length - 1; e >= 0; e--) this._childClusters[e].getAllChildMarkers(t);
            for (var i = this._markers.length - 1; i >= 0; i--) t.push(this._markers[i]);
            return t
        }, getChildCount: function () {
            return this._childCount
        }, zoomToBounds: function (t) {
            for (var e, i = this._childClusters.slice(), n = this._group._map, o = n.getBoundsZoom(this._bounds), s = this._zoom + 1, a = n.getZoom(); i.length > 0 && o > s;) {
                s++;
                var r = [];
                for (e = 0; e < i.length; e++) r = r.concat(i[e]._childClusters);
                i = r
            }
            o > s ? this._group._map.setView(this._latlng, s) : a >= o ? this._group._map.setView(this._latlng, a + 1) : this._group._map.fitBounds(this._bounds, t)
        }, getBounds: function () {
            var t = new L.LatLngBounds;
            return t.extend(this._bounds), t
        }, _updateIcon: function () {
            this._iconNeedsUpdate = !0, this._icon && this.setIcon(this)
        }, createIcon: function () {
            return this._iconNeedsUpdate && (this._iconObj = this._group.options.iconCreateFunction(this), this._iconNeedsUpdate = !1), this._iconObj.createIcon()
        }, createShadow: function () {
            return this._iconObj.createShadow()
        }, _addChild: function (t, e) {
            this._iconNeedsUpdate = !0, this._boundsNeedUpdate = !0, this._setClusterCenter(t), t instanceof L.MarkerCluster ? (e || (this._childClusters.push(t), t.__parent = this), this._childCount += t._childCount) : (e || this._markers.push(t), this._childCount++), this.__parent && this.__parent._addChild(t, !0)
        }, _setClusterCenter: function (t) {
            this._cLatLng || (this._cLatLng = t._cLatLng || t._latlng)
        }, _resetBounds: function () {
            var t = this._bounds;
            t._southWest && (t._southWest.lat = 1 / 0, t._southWest.lng = 1 / 0), t._northEast && (t._northEast.lat = -1 / 0, t._northEast.lng = -1 / 0)
        }, _recalculateBounds: function () {
            var t, e, i, n, o = this._markers, s = this._childClusters, a = 0, r = 0, l = this._childCount;
            if (0 !== l) {
                for (this._resetBounds(), t = 0; t < o.length; t++) i = o[t]._latlng, this._bounds.extend(i), a += i.lat, r += i.lng;
                for (t = 0; t < s.length; t++) (e = s[t])._boundsNeedUpdate && e._recalculateBounds(), this._bounds.extend(e._bounds), i = e._wLatLng, n = e._childCount, a += i.lat * n, r += i.lng * n;
                this._latlng = this._wLatLng = new L.LatLng(a / l, r / l), this._boundsNeedUpdate = !1
            }
        }, _addToMap: function (t) {
            t && (this._backupLatlng = this._latlng, this.setLatLng(t)), this._group._featureGroup.addLayer(this)
        }, _recursivelyAnimateChildrenIn: function (t, e, i) {
            this._recursively(t, this._group._map.getMinZoom(), i - 1, function (t) {
                var i, n, o = t._markers;
                for (i = o.length - 1; i >= 0; i--) (n = o[i])._icon && (n._setPos(e), n.clusterHide())
            }, function (t) {
                var i, n, o = t._childClusters;
                for (i = o.length - 1; i >= 0; i--) (n = o[i])._icon && (n._setPos(e), n.clusterHide())
            })
        }, _recursivelyAnimateChildrenInAndAddSelfToMap: function (t, e, i, n) {
            this._recursively(t, n, e, function (o) {
                o._recursivelyAnimateChildrenIn(t, o._group._map.latLngToLayerPoint(o.getLatLng()).round(), i), o._isSingleParent() && i - 1 === n ? (o.clusterShow(), o._recursivelyRemoveChildrenFromMap(t, e, i)) : o.clusterHide(), o._addToMap()
            })
        }, _recursivelyBecomeVisible: function (t, e) {
            this._recursively(t, this._group._map.getMinZoom(), e, null, function (t) {
                t.clusterShow()
            })
        }, _recursivelyAddChildrenToMap: function (t, e, i) {
            this._recursively(i, this._group._map.getMinZoom() - 1, e, function (n) {
                if (e !== n._zoom) for (var o = n._markers.length - 1; o >= 0; o--) {
                    var s = n._markers[o];
                    i.contains(s._latlng) && (t && (s._backupLatlng = s.getLatLng(), s.setLatLng(t), s.clusterHide && s.clusterHide()), n._group._featureGroup.addLayer(s))
                }
            }, function (e) {
                e._addToMap(t)
            })
        }, _recursivelyRestoreChildPositions: function (t) {
            for (var e = this._markers.length - 1; e >= 0; e--) {
                var i = this._markers[e];
                i._backupLatlng && (i.setLatLng(i._backupLatlng), delete i._backupLatlng)
            }
            if (t - 1 === this._zoom) for (var n = this._childClusters.length - 1; n >= 0; n--) this._childClusters[n]._restorePosition(); else for (var o = this._childClusters.length - 1; o >= 0; o--) this._childClusters[o]._recursivelyRestoreChildPositions(t)
        }, _restorePosition: function () {
            this._backupLatlng && (this.setLatLng(this._backupLatlng), delete this._backupLatlng)
        }, _recursivelyRemoveChildrenFromMap: function (t, e, i, n) {
            var o, s;
            this._recursively(t, e - 1, i - 1, function (t) {
                for (s = t._markers.length - 1; s >= 0; s--) o = t._markers[s], n && n.contains(o._latlng) || (t._group._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow())
            }, function (t) {
                for (s = t._childClusters.length - 1; s >= 0; s--) o = t._childClusters[s], n && n.contains(o._latlng) || (t._group._featureGroup.removeLayer(o), o.clusterShow && o.clusterShow())
            })
        }, _recursively: function (t, e, i, n, o) {
            var s, a, r = this._childClusters, l = this._zoom;
            if (l >= e && (n && n(this), o && l === i && o(this)), e > l || i > l) for (s = r.length - 1; s >= 0; s--) a = r[s], t.intersects(a._bounds) && a._recursively(t, e, i, n, o)
        }, _isSingleParent: function () {
            return this._childClusters.length > 0 && this._childClusters[0]._childCount === this._childCount
        }
    }), L.Marker.include({
        clusterHide: function () {
            return this.options.opacityWhenUnclustered = this.options.opacity || 1, this.setOpacity(0)
        }, clusterShow: function () {
            var t = this.setOpacity(this.options.opacity || this.options.opacityWhenUnclustered);
            return delete this.options.opacityWhenUnclustered, t
        }
    }), L.DistanceGrid = function (t) {
        this._cellSize = t, this._sqCellSize = t * t, this._grid = {}, this._objectPoint = {}
    }, L.DistanceGrid.prototype = {
        addObject: function (t, e) {
            var i = this._getCoord(e.x), n = this._getCoord(e.y), o = this._grid, s = o[n] = o[n] || {},
                a = s[i] = s[i] || [], r = L.Util.stamp(t);
            this._objectPoint[r] = e, a.push(t)
        }, updateObject: function (t, e) {
            this.removeObject(t), this.addObject(t, e)
        }, removeObject: function (t, e) {
            var i, n, o = this._getCoord(e.x), s = this._getCoord(e.y), a = this._grid, r = a[s] = a[s] || {},
                l = r[o] = r[o] || [];
            for (delete this._objectPoint[L.Util.stamp(t)], i = 0, n = l.length; n > i; i++) if (l[i] === t) return l.splice(i, 1), 1 === n && delete r[o], !0
        }, eachObject: function (t, e) {
            var i, n, o, s, a, r, l = this._grid;
            for (i in l) for (n in a = l[i]) for (o = 0, s = (r = a[n]).length; s > o; o++) t.call(e, r[o]) && (o--, s--)
        }, getNearObject: function (t) {
            var e, i, n, o, s, a, r, l, c = this._getCoord(t.x), d = this._getCoord(t.y), u = this._objectPoint,
                h = this._sqCellSize, p = null;
            for (e = d - 1; d + 1 >= e; e++) if (o = this._grid[e]) for (i = c - 1; c + 1 >= i; i++) if (s = o[i]) for (n = 0, a = s.length; a > n; n++) r = s[n], (h > (l = this._sqDist(u[L.Util.stamp(r)], t)) || h >= l && null === p) && (h = l, p = r);
            return p
        }, _getCoord: function (t) {
            var e = Math.floor(t / this._cellSize);
            return isFinite(e) ? e : t
        }, _sqDist: function (t, e) {
            var i = e.x - t.x, n = e.y - t.y;
            return i * i + n * n
        }
    }, L.QuickHull = {
        getDistant: function (t, e) {
            var i = e[1].lat - e[0].lat;
            return (e[0].lng - e[1].lng) * (t.lat - e[0].lat) + i * (t.lng - e[0].lng)
        }, findMostDistantPointFromBaseLine: function (t, e) {
            var i, n, o, s = 0, a = null, r = [];
            for (i = e.length - 1; i >= 0; i--) n = e[i], (o = this.getDistant(n, t)) > 0 && (r.push(n), o > s && (s = o, a = n));
            return {maxPoint: a, newPoints: r}
        }, buildConvexHull: function (t, e) {
            var i = [], n = this.findMostDistantPointFromBaseLine(t, e);
            return n.maxPoint ? i = (i = i.concat(this.buildConvexHull([t[0], n.maxPoint], n.newPoints))).concat(this.buildConvexHull([n.maxPoint, t[1]], n.newPoints)) : [t[0]]
        }, getConvexHull: function (t) {
            var e, i = !1, n = !1, o = !1, s = !1, a = null, r = null, l = null, c = null, d = null, u = null;
            for (e = t.length - 1; e >= 0; e--) {
                var h = t[e];
                (!1 === i || h.lat > i) && (a = h, i = h.lat), (!1 === n || h.lat < n) && (r = h, n = h.lat), (!1 === o || h.lng > o) && (l = h, o = h.lng), (!1 === s || h.lng < s) && (c = h, s = h.lng)
            }
            return n !== i ? (u = r, d = a) : (u = c, d = l), [].concat(this.buildConvexHull([u, d], t), this.buildConvexHull([d, u], t))
        }
    }, L.MarkerCluster.include({
        getConvexHull: function () {
            var t, e, i = this.getAllChildMarkers(), n = [];
            for (e = i.length - 1; e >= 0; e--) t = i[e].getLatLng(), n.push(t);
            return L.QuickHull.getConvexHull(n)
        }
    }), L.MarkerCluster.include({
        _2PI: 2 * Math.PI,
        _circleFootSeparation: 25,
        _circleStartAngle: Math.PI / 6,
        _spiralFootSeparation: 28,
        _spiralLengthStart: 11,
        _spiralLengthFactor: 5,
        _circleSpiralSwitchover: 9,
        spiderfy: function () {
            if (this._group._spiderfied !== this && !this._group._inZoomAnimation) {
                var t, e = this.getAllChildMarkers(), i = this._group._map.latLngToLayerPoint(this._latlng);
                this._group._unspiderfy(), this._group._spiderfied = this, e.length >= this._circleSpiralSwitchover ? t = this._generatePointsSpiral(e.length, i) : (i.y += 10, t = this._generatePointsCircle(e.length, i)), this._animationSpiderfy(e, t)
            }
        },
        unspiderfy: function (t) {
            this._group._inZoomAnimation || (this._animationUnspiderfy(t), this._group._spiderfied = null)
        },
        _generatePointsCircle: function (t, e) {
            var i, n,
                o = this._group.options.spiderfyDistanceMultiplier * this._circleFootSeparation * (2 + t) / this._2PI,
                s = this._2PI / t, a = [];
            for (a.length = t, i = t - 1; i >= 0; i--) n = this._circleStartAngle + i * s, a[i] = new L.Point(e.x + o * Math.cos(n), e.y + o * Math.sin(n))._round();
            return a
        },
        _generatePointsSpiral: function (t, e) {
            var i, n = this._group.options.spiderfyDistanceMultiplier, o = n * this._spiralLengthStart,
                s = n * this._spiralFootSeparation, a = n * this._spiralLengthFactor * this._2PI, r = 0, l = [];
            for (l.length = t, i = t - 1; i >= 0; i--) r += s / o + 5e-4 * i, l[i] = new L.Point(e.x + o * Math.cos(r), e.y + o * Math.sin(r))._round(), o += a / r;
            return l
        },
        _noanimationUnspiderfy: function () {
            var t, e, i = this._group, n = i._map, o = i._featureGroup, s = this.getAllChildMarkers();
            for (i._ignoreMove = !0, this.setOpacity(1), e = s.length - 1; e >= 0; e--) t = s[e], o.removeLayer(t), t._preSpiderfyLatlng && (t.setLatLng(t._preSpiderfyLatlng), delete t._preSpiderfyLatlng), t.setZIndexOffset && t.setZIndexOffset(0), t._spiderLeg && (n.removeLayer(t._spiderLeg), delete t._spiderLeg);
            i.fire("unspiderfied", {cluster: this, markers: s}), i._ignoreMove = !1, i._spiderfied = null
        }
    }), L.MarkerClusterNonAnimated = L.MarkerCluster.extend({
        _animationSpiderfy: function (t, e) {
            var i, n, o, s, a = this._group, r = a._map, l = a._featureGroup,
                c = this._group.options.spiderLegPolylineOptions;
            for (a._ignoreMove = !0, i = 0; i < t.length; i++) s = r.layerPointToLatLng(e[i]), n = t[i], o = new L.Polyline([this._latlng, s], c), r.addLayer(o), n._spiderLeg = o, n._preSpiderfyLatlng = n._latlng, n.setLatLng(s), n.setZIndexOffset && n.setZIndexOffset(1e6), l.addLayer(n);
            this.setOpacity(.3), a._ignoreMove = !1, a.fire("spiderfied", {cluster: this, markers: t})
        }, _animationUnspiderfy: function () {
            this._noanimationUnspiderfy()
        }
    }), L.MarkerCluster.include({
        _animationSpiderfy: function (t, e) {
            var i, n, o, s, a, r, l = this, c = this._group, d = c._map, u = c._featureGroup, h = this._latlng,
                p = d.latLngToLayerPoint(h), m = L.Path.SVG,
                f = L.extend({}, this._group.options.spiderLegPolylineOptions), _ = f.opacity;
            for (void 0 === _ && (_ = L.MarkerClusterGroup.prototype.options.spiderLegPolylineOptions.opacity), m ? (f.opacity = 0, f.className = (f.className || "") + " leaflet-cluster-spider-leg") : f.opacity = _, c._ignoreMove = !0, i = 0; i < t.length; i++) n = t[i], r = d.layerPointToLatLng(e[i]), o = new L.Polyline([h, r], f), d.addLayer(o), n._spiderLeg = o, m && (a = (s = o._path).getTotalLength() + .1, s.style.strokeDasharray = a, s.style.strokeDashoffset = a), n.setZIndexOffset && n.setZIndexOffset(1e6), n.clusterHide && n.clusterHide(), u.addLayer(n), n._setPos && n._setPos(p);
            for (c._forceLayout(), c._animationStart(), i = t.length - 1; i >= 0; i--) r = d.layerPointToLatLng(e[i]), (n = t[i])._preSpiderfyLatlng = n._latlng, n.setLatLng(r), n.clusterShow && n.clusterShow(), m && ((s = (o = n._spiderLeg)._path).style.strokeDashoffset = 0, o.setStyle({opacity: _}));
            this.setOpacity(.3), c._ignoreMove = !1, setTimeout(function () {
                c._animationEnd(), c.fire("spiderfied", {cluster: l, markers: t})
            }, 200)
        }, _animationUnspiderfy: function (t) {
            var e, i, n, o, s, a, r = this, l = this._group, c = l._map, d = l._featureGroup,
                u = t ? c._latLngToNewLayerPoint(this._latlng, t.zoom, t.center) : c.latLngToLayerPoint(this._latlng),
                h = this.getAllChildMarkers(), p = L.Path.SVG;
            for (l._ignoreMove = !0, l._animationStart(), this.setOpacity(1), i = h.length - 1; i >= 0; i--) (e = h[i])._preSpiderfyLatlng && (e.closePopup(), e.setLatLng(e._preSpiderfyLatlng), delete e._preSpiderfyLatlng, a = !0, e._setPos && (e._setPos(u), a = !1), e.clusterHide && (e.clusterHide(), a = !1), a && d.removeLayer(e), p && (s = (o = (n = e._spiderLeg)._path).getTotalLength() + .1, o.style.strokeDashoffset = s, n.setStyle({opacity: 0})));
            l._ignoreMove = !1, setTimeout(function () {
                var t = 0;
                for (i = h.length - 1; i >= 0; i--) (e = h[i])._spiderLeg && t++;
                for (i = h.length - 1; i >= 0; i--) (e = h[i])._spiderLeg && (e.clusterShow && e.clusterShow(), e.setZIndexOffset && e.setZIndexOffset(0), t > 1 && d.removeLayer(e), c.removeLayer(e._spiderLeg), delete e._spiderLeg);
                l._animationEnd(), l.fire("unspiderfied", {cluster: r, markers: h})
            }, 200)
        }
    }), L.MarkerClusterGroup.include({
        _spiderfied: null, unspiderfy: function () {
            this._unspiderfy.apply(this, arguments)
        }, _spiderfierOnAdd: function () {
            this._map.on("click", this._unspiderfyWrapper, this), this._map.options.zoomAnimation && this._map.on("zoomstart", this._unspiderfyZoomStart, this), this._map.on("zoomend", this._noanimationUnspiderfy, this), L.Browser.touch || this._map.getRenderer(this)
        }, _spiderfierOnRemove: function () {
            this._map.off("click", this._unspiderfyWrapper, this), this._map.off("zoomstart", this._unspiderfyZoomStart, this), this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._map.off("zoomend", this._noanimationUnspiderfy, this), this._noanimationUnspiderfy()
        }, _unspiderfyZoomStart: function () {
            this._map && this._map.on("zoomanim", this._unspiderfyZoomAnim, this)
        }, _unspiderfyZoomAnim: function (t) {
            L.DomUtil.hasClass(this._map._mapPane, "leaflet-touching") || (this._map.off("zoomanim", this._unspiderfyZoomAnim, this), this._unspiderfy(t))
        }, _unspiderfyWrapper: function () {
            this._unspiderfy()
        }, _unspiderfy: function (t) {
            this._spiderfied && this._spiderfied.unspiderfy(t)
        }, _noanimationUnspiderfy: function () {
            this._spiderfied && this._spiderfied._noanimationUnspiderfy()
        }, _unspiderfyLayer: function (t) {
            t._spiderLeg && (this._featureGroup.removeLayer(t), t.clusterShow && t.clusterShow(), t.setZIndexOffset && t.setZIndexOffset(0), this._map.removeLayer(t._spiderLeg), delete t._spiderLeg)
        }
    }), L.MarkerClusterGroup.include({
        refreshClusters: function (t) {
            return t ? t instanceof L.MarkerClusterGroup ? t = t._topClusterLevel.getAllChildMarkers() : t instanceof L.LayerGroup ? t = t._layers : t instanceof L.MarkerCluster ? t = t.getAllChildMarkers() : t instanceof L.Marker && (t = [t]) : t = this._topClusterLevel.getAllChildMarkers(), this._flagParentsIconsNeedUpdate(t), this._refreshClustersIcons(), this.options.singleMarkerMode && this._refreshSingleMarkerModeMarkers(t), this
        }, _flagParentsIconsNeedUpdate: function (t) {
            var e, i;
            for (e in t) for (i = t[e].__parent; i;) i._iconNeedsUpdate = !0, i = i.__parent
        }, _refreshSingleMarkerModeMarkers: function (t) {
            var e, i;
            for (e in t) i = t[e], this.hasLayer(i) && i.setIcon(this._overrideMarkerIcon(i))
        }
    }), L.Marker.include({
        refreshIconOptions: function (t, e) {
            var i = this.options.icon;
            return L.setOptions(i, t), this.setIcon(i), e && this.__parent && this.__parent._group.refreshClusters(this), this
        }
    })
}(window, document), function (t) {
    "use strict";
    var e, i, n = Array.prototype.slice;
    (i = function (e) {
        this.options = t.extend({}, i.defaults, e), this.parser = this.options.parser, this.locale = this.options.locale, this.messageStore = this.options.messageStore, this.languages = {}, this.init()
    }).prototype = {
        init: function () {
            var e = this;
            String.locale = e.locale, String.prototype.toLocaleString = function () {
                var i, n, o, s, a, r, l;
                for (o = this.valueOf(), s = e.locale, a = 0; s;) {
                    n = (i = s.split("-")).length;
                    do {
                        if (r = i.slice(0, n).join("-"), l = e.messageStore.get(r, o)) return l;
                        n--
                    } while (n);
                    if ("en" === s) break;
                    s = t.i18n.fallbacks[e.locale] && t.i18n.fallbacks[e.locale][a] || e.options.fallbackLocale, t.i18n.log("Trying fallback locale for " + e.locale + ": " + s + " (" + o + ")"), a++
                }
                return ""
            }
        }, destroy: function () {
            t.removeData(document, "i18n")
        }, load: function (e, i) {
            var n, o, s, a = {};
            if (e || i || (e = "i18n/" + t.i18n().locale + ".json", i = t.i18n().locale), "string" == typeof e && "json" !== e.split(".").pop()) {
                for (a[i] = e + "/" + i + ".json", n = (t.i18n.fallbacks[i] || []).concat(this.options.fallbackLocale), o = 0; o < n.length; o++) a[s = n[o]] = e + "/" + s + ".json";
                return this.load(a)
            }
            return this.messageStore.load(e, i)
        }, parse: function (e, i) {
            var n = e.toLocaleString();
            return this.parser.language = t.i18n.languages[t.i18n().locale] || t.i18n.languages.default, "" === n && (n = e), this.parser.parse(n, i)
        }
    }, t.i18n = function (e, o) {
        var s, a = t.data(document, "i18n"), r = "object" == typeof e && e;
        return r && r.locale && a && a.locale !== r.locale && (String.locale = a.locale = r.locale), a || (a = new i(r), t.data(document, "i18n", a)), "string" == typeof e ? (s = void 0 !== o ? n.call(arguments, 1) : [], a.parse(e, s)) : a
    }, t.fn.i18n = function () {
        var e = t.data(document, "i18n");
        return e || (e = new i, t.data(document, "i18n", e)), String.locale = e.locale, this.each(function () {
            var i, n, o, s, a = t(this), r = a.data("i18n");
            r ? (i = r.indexOf("["), n = r.indexOf("]"), -1 !== i && -1 !== n && i < n ? (o = r.slice(i + 1, n), s = r.slice(n + 1), "html" === o ? a.html(e.parse(s)) : a.attr(o, e.parse(s))) : a.text(e.parse(r))) : a.find("[data-i18n]").i18n()
        })
    }, String.locale = String.locale || t("html").attr("lang"), String.locale || (void 0 !== typeof window.navigator ? (e = window.navigator, String.locale = e.language || e.userLanguage || "") : String.locale = ""), t.i18n.languages = {}, t.i18n.messageStore = t.i18n.messageStore || {}, t.i18n.parser = {
        parse: function (t, e) {
            return t.replace(/\$(\d+)/g, function (t, i) {
                var n = parseInt(i, 10) - 1;
                return void 0 !== e[n] ? e[n] : "$" + i
            })
        }, emitter: {}
    }, t.i18n.fallbacks = {}, t.i18n.debug = !1, t.i18n.log = function () {
        window.console && t.i18n.debug && window.console.log.apply(window.console, arguments)
    }, i.defaults = {
        locale: String.locale,
        fallbackLocale: "en",
        parser: t.i18n.parser,
        messageStore: t.i18n.messageStore
    }, t.i18n.constructor = i
}(jQuery), function (t) {
    "use strict";
    var e = function () {
        this.messages = {}, this.sources = {}
    };
    e.prototype = {
        load: function (e, i) {
            var n, o, s = null, a = [], r = this;
            if ("string" == typeof e) return t.i18n.log("Loading messages from: " + e), (n = e, o = t.Deferred(), t.getJSON(n).done(o.resolve).fail(function (e, i, s) {
                t.i18n.log("Error in loading messages from " + n + " Exception: " + s), o.resolve()
            }), o.promise()).done(function (t) {
                r.set(i, t)
            }).promise();
            if (i) return r.set(i, e), t.Deferred().resolve();
            for (s in e) Object.prototype.hasOwnProperty.call(e, s) && (i = s, a.push(r.load(e[s], i)));
            return t.when.apply(t, a)
        }, set: function (e, i) {
            this.messages[e] ? this.messages[e] = t.extend(this.messages[e], i) : this.messages[e] = i
        }, get: function (t, e) {
            return this.messages[t] && this.messages[t][e]
        }
    }, t.extend(t.i18n.messageStore, new e)
}(jQuery), function (t) {
    "use strict";
    t.i18n = t.i18n || {}, t.extend(t.i18n.fallbacks, {
        ab: ["ru"],
        ace: ["id"],
        aln: ["sq"],
        als: ["gsw", "de"],
        an: ["es"],
        anp: ["hi"],
        arn: ["es"],
        arz: ["ar"],
        av: ["ru"],
        ay: ["es"],
        ba: ["ru"],
        bar: ["de"],
        "bat-smg": ["sgs", "lt"],
        bcc: ["fa"],
        "be-x-old": ["be-tarask"],
        bh: ["bho"],
        bjn: ["id"],
        bm: ["fr"],
        bpy: ["bn"],
        bqi: ["fa"],
        bug: ["id"],
        "cbk-zam": ["es"],
        ce: ["ru"],
        crh: ["crh-latn"],
        "crh-cyrl": ["ru"],
        csb: ["pl"],
        cv: ["ru"],
        "de-at": ["de"],
        "de-ch": ["de"],
        "de-formal": ["de"],
        dsb: ["de"],
        dtp: ["ms"],
        egl: ["it"],
        eml: ["it"],
        ff: ["fr"],
        fit: ["fi"],
        "fiu-vro": ["vro", "et"],
        frc: ["fr"],
        frp: ["fr"],
        frr: ["de"],
        fur: ["it"],
        gag: ["tr"],
        gan: ["gan-hant", "zh-hant", "zh-hans"],
        "gan-hans": ["zh-hans"],
        "gan-hant": ["zh-hant", "zh-hans"],
        gl: ["pt"],
        glk: ["fa"],
        gn: ["es"],
        gsw: ["de"],
        hif: ["hif-latn"],
        hsb: ["de"],
        ht: ["fr"],
        ii: ["zh-cn", "zh-hans"],
        inh: ["ru"],
        iu: ["ike-cans"],
        jut: ["da"],
        jv: ["id"],
        kaa: ["kk-latn", "kk-cyrl"],
        kbd: ["kbd-cyrl"],
        khw: ["ur"],
        kiu: ["tr"],
        kk: ["kk-cyrl"],
        "kk-arab": ["kk-cyrl"],
        "kk-latn": ["kk-cyrl"],
        "kk-cn": ["kk-arab", "kk-cyrl"],
        "kk-kz": ["kk-cyrl"],
        "kk-tr": ["kk-latn", "kk-cyrl"],
        kl: ["da"],
        "ko-kp": ["ko"],
        koi: ["ru"],
        krc: ["ru"],
        ks: ["ks-arab"],
        ksh: ["de"],
        ku: ["ku-latn"],
        "ku-arab": ["ckb"],
        kv: ["ru"],
        lad: ["es"],
        lb: ["de"],
        lbe: ["ru"],
        lez: ["ru"],
        li: ["nl"],
        lij: ["it"],
        liv: ["et"],
        lmo: ["it"],
        ln: ["fr"],
        ltg: ["lv"],
        lzz: ["tr"],
        mai: ["hi"],
        "map-bms": ["jv", "id"],
        mg: ["fr"],
        mhr: ["ru"],
        min: ["id"],
        mo: ["ro"],
        mrj: ["ru"],
        mwl: ["pt"],
        myv: ["ru"],
        mzn: ["fa"],
        nah: ["es"],
        nap: ["it"],
        nds: ["de"],
        "nds-nl": ["nl"],
        "nl-informal": ["nl"],
        no: ["nb"],
        os: ["ru"],
        pcd: ["fr"],
        pdc: ["de"],
        pdt: ["de"],
        pfl: ["de"],
        pms: ["it"],
        pt: ["pt-br"],
        "pt-br": ["pt"],
        qu: ["es"],
        qug: ["qu", "es"],
        rgn: ["it"],
        rmy: ["ro"],
        "roa-rup": ["rup"],
        rue: ["uk", "ru"],
        ruq: ["ruq-latn", "ro"],
        "ruq-cyrl": ["mk"],
        "ruq-latn": ["ro"],
        sa: ["hi"],
        sah: ["ru"],
        scn: ["it"],
        sg: ["fr"],
        sgs: ["lt"],
        sli: ["de"],
        sr: ["sr-ec"],
        srn: ["nl"],
        stq: ["de"],
        su: ["id"],
        szl: ["pl"],
        tcy: ["kn"],
        tg: ["tg-cyrl"],
        tt: ["tt-cyrl", "ru"],
        "tt-cyrl": ["ru"],
        ty: ["fr"],
        udm: ["ru"],
        ug: ["ug-arab"],
        uk: ["ru"],
        vec: ["it"],
        vep: ["et"],
        vls: ["nl"],
        vmf: ["de"],
        vot: ["fi"],
        vro: ["et"],
        wa: ["fr"],
        wo: ["fr"],
        wuu: ["zh-hans"],
        xal: ["ru"],
        xmf: ["ka"],
        yi: ["he"],
        za: ["zh-hans"],
        zea: ["nl"],
        zh: ["zh-hans"],
        "zh-classical": ["lzh"],
        "zh-cn": ["zh-hans"],
        "zh-hant": ["zh-hans"],
        "zh-hk": ["zh-hant", "zh-hans"],
        "zh-min-nan": ["nan"],
        "zh-mo": ["zh-hk", "zh-hant", "zh-hans"],
        "zh-my": ["zh-sg", "zh-hans"],
        "zh-sg": ["zh-hans"],
        "zh-tw": ["zh-hant", "zh-hans"],
        "zh-yue": ["yue"]
    })
}(jQuery), function (t) {
    "use strict";
    var e = function (e) {
        this.options = t.extend({}, t.i18n.parser.defaults, e), this.language = t.i18n.languages[String.locale] || t.i18n.languages.default, this.emitter = t.i18n.parser.emitter
    };
    e.prototype = {
        constructor: e, simpleParse: function (t, e) {
            return t.replace(/\$(\d+)/g, function (t, i) {
                var n = parseInt(i, 10) - 1;
                return void 0 !== e[n] ? e[n] : "$" + i
            })
        }, parse: function (e, i) {
            return e.indexOf("{{") < 0 ? this.simpleParse(e, i) : (this.emitter.language = t.i18n.languages[t.i18n().locale] || t.i18n.languages.default, this.emitter.emit(this.ast(e), i))
        }, ast: function (t) {
            var e, i, n, o, s, a, r, l, c, d, u, h, p, m, f, _, g, v, y, b, L = 0;

            function w(t) {
                return function () {
                    var e, i;
                    for (e = 0; e < t.length; e++) if (null !== (i = t[e]())) return i;
                    return null
                }
            }

            function M(t) {
                var e, i, n = L, o = [];
                for (e = 0; e < t.length; e++) {
                    if (null === (i = t[e]())) return L = n, null;
                    o.push(i)
                }
                return o
            }

            function x(t, e) {
                return function () {
                    for (var i = L, n = [], o = e(); null !== o;) n.push(o), o = e();
                    return n.length < t ? (L = i, null) : n
                }
            }

            function k(e) {
                var i = e.length;
                return function () {
                    var n = null;
                    return t.slice(L, L + i) === e && (n = e, L += i), n
                }
            }

            function $(e) {
                return function () {
                    var i = t.slice(L).match(e);
                    return null === i ? null : (L += i[0].length, i[0])
                }
            }

            function C() {
                var t = M([n, o]);
                return null === t ? null : t[1]
            }

            function T() {
                var t = M([s, a]);
                return null === t ? null : ["REPLACE", parseInt(t[1], 10) - 1]
            }

            function P() {
                var t, i = M([e, x(0, _)]);
                return null === i ? null : (t = i[1]).length > 1 ? ["CONCAT"].concat(t) : t[0]
            }

            function E() {
                var t = M([h, i, T]);
                return null === t ? null : [t[0], t[2]]
            }

            function S() {
                var t = M([h, i, _]);
                return null === t ? null : [t[0], t[2]]
            }

            function z() {
                var t = M([p, u, m]);
                return null === t ? null : t[1]
            }

            if (e = k("|"), i = k(":"), n = k("\\"), o = $(/^./), s = k("$"), a = $(/^\d+/), r = $(/^[^{}\[\]$\\]/), l = $(/^[^{}\[\]$\\|]/), w([C, $(/^[^{}\[\]$\s]/)]), c = w([C, l]), d = w([C, r]), v = $(/^[ !"$&'()*,.\/0-9;=?@A-Z\^_`a-z~\x80-\xFF+\-]+/), y = function (t) {
                return t.toString()
            }, h = function () {
                var t = v();
                return null === t ? null : y(t)
            }, u = w([function () {
                var t = M([w([E, S]), x(0, P)]);
                return null === t ? null : t[0].concat(t[1])
            }, function () {
                var t = M([h, x(0, P)]);
                return null === t ? null : [t[0]].concat(t[1])
            }]), p = k("{{"), m = k("}}"), f = w([z, T, function () {
                var t = x(1, d)();
                return null === t ? null : t.join("")
            }]), _ = w([z, T, function () {
                var t = x(1, c)();
                return null === t ? null : t.join("")
            }]), null === (g = null === (b = x(0, f)()) ? null : ["CONCAT"].concat(b)) || L !== t.length) throw new Error("Parse error at position " + L.toString() + " in input: " + t);
            return g
        }
    }, t.extend(t.i18n.parser, new e)
}(jQuery), function (t) {
    "use strict";
    var e = function () {
        this.language = t.i18n.languages[String.locale] || t.i18n.languages.default
    };
    e.prototype = {
        constructor: e, emit: function (e, i) {
            var n, o, s, a = this;
            switch (typeof e) {
                case"string":
                case"number":
                    n = e;
                    break;
                case"object":
                    if (o = t.map(e.slice(1), function (t) {
                        return a.emit(t, i)
                    }), s = e[0].toLowerCase(), "function" != typeof a[s]) throw new Error('unknown operation "' + s + '"');
                    n = a[s](o, i);
                    break;
                case"undefined":
                    n = "";
                    break;
                default:
                    throw new Error("unexpected type in AST: " + typeof e)
            }
            return n
        }, concat: function (e) {
            var i = "";
            return t.each(e, function (t, e) {
                i += e
            }), i
        }, replace: function (t, e) {
            var i = parseInt(t[0], 10);
            return i < e.length ? e[i] : "$" + (i + 1)
        }, plural: function (t) {
            var e = parseFloat(this.language.convertNumber(t[0], 10)), i = t.slice(1);
            return i.length ? this.language.convertPlural(e, i) : ""
        }, gender: function (t) {
            var e = t[0], i = t.slice(1);
            return this.language.gender(e, i)
        }, grammar: function (t) {
            var e = t[0], i = t[1];
            return i && e && this.language.convertGrammar(i, e)
        }
    }, t.extend(t.i18n.parser.emitter, new e)
}(jQuery), function (t) {
    "use strict";
    var e;
    e = new RegExp("(?:([A-Za-zªµºÀ-ÖØ-öø-ʸʻ-ˁːˑˠ-ˤˮͰ-ͳͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-҂Ҋ-ԯԱ-Ֆՙ-՟ա-և։ः-हऻऽ-ीॉ-ौॎ-ॐक़-ॡ।-ঀংঃঅ-ঌএঐও-নপ-রলশ-হঽ-ীেৈোৌৎৗড়ঢ়য়-ৡ০-ৱ৴-৺ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਾ-ੀਖ਼-ੜਫ਼੦-੯ੲ-ੴઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽ-ીૉોૌૐૠૡ૦-૰ૹଂଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽାୀେୈୋୌୗଡ଼ଢ଼ୟ-ୡ୦-୷ஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹாிுூெ-ைொ-ௌௐௗ௦-௲ఁ-ఃఅ-ఌఎ-ఐఒ-నప-హఽు-ౄౘ-ౚౠౡ౦-౯౿ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽ-ೄೆ-ೈೊೋೕೖೞೠೡ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ീെ-ൈൊ-ൌൎൗൟ-ൡ൦-൵൹-ൿංඃඅ-ඖක-නඳ-රලව-ෆා-ෑෘ-ෟ෦-෯ෲ-෴ก-ะาำเ-ๆ๏-๛ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆ໐-໙ໜ-ໟༀ-༗༚-༴༶༸༾-ཇཉ-ཬཿ྅ྈ-ྌ྾-࿅࿇-࿌࿎-࿚က-ာေးျြဿ-ၗၚ-ၝၡ-ၰၵ-ႁႃႄႇ-ႌႎ-ႜ႞-ჅჇჍა-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፠-፼ᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙿᚁ-ᚚᚠ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱ᜵᜶ᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳាើ-ៅះៈ។-៚ៜ០-៩᠐-᠙ᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᤣ-ᤦᤩ-ᤫᤰᤱᤳ-ᤸ᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧚ᨀ-ᨖᨙᨚ᨞-ᩕᩗᩡᩣᩤᩭ-ᩲ᪀-᪉᪐-᪙᪠-᪭ᬄ-ᬳᬵᬻᬽ-ᭁᭃ-ᭋ᭐-᭪᭴-᭼ᮂ-ᮡᮦᮧ᮪ᮮ-ᯥᯧᯪ-ᯬᯮ᯲᯳᯼-ᰫᰴᰵ᰻-᱉ᱍ-᱿᳀-᳇᳓᳡ᳩ-ᳬᳮ-ᳳᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‎ⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎ⅏Ⅰ-ↈ⌶-⍺⎕⒜-ⓩ⚬⠀-⣿Ⰰ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵰ⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〮〯〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎ㆐-ㆺㇰ-㈜㈠-㉏㉠-㉻㉿-㊰㋀-㋋㋐-㋾㌀-㍶㍻-㏝㏠-㏾㐀-䶵一-鿕ꀀ-ꒌꓐ-ꘌꘐ-ꘫꙀ-ꙮꚀ-ꚝꚠ-ꛯ꛲-꛷Ꜣ-ꞇ꞉-ꞭꞰ-ꞷꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠤꠧ꠰-꠷ꡀ-ꡳꢀ-ꣃ꣎-꣙ꣲ-ꣽ꤀-ꤥ꤮-ꥆꥒ꥓꥟-ꥼꦃ-ꦲꦴꦵꦺꦻꦽ-꧍ꧏ-꧙꧞-ꧤꧦ-ꧾꨀ-ꨨꨯꨰꨳꨴꩀ-ꩂꩄ-ꩋꩍ꩐-꩙꩜-ꩻꩽ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫫꫮ-ꫵꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭥꭰ-ꯤꯦꯧꯩ-꯬꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ-舘並-龎ﬀ-ﬆﬓ-ﬗＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]|\ud800[\udc00-\udc0b]|\ud800[\udc0d-\udc26]|\ud800[\udc28-\udc3a]|𐀼|𐀽|\ud800[\udc3f-\udc4d]|\ud800[\udc50-\udc5d]|\ud800[\udc80-\udcfa]|𐄀|𐄂|\ud800[\udd07-\udd33]|\ud800[\udd37-\udd3f]|\ud800[\uddd0-\uddfc]|\ud800[\ude80-\ude9c]|\ud800[\udea0-\uded0]|\ud800[\udf00-\udf23]|\ud800[\udf30-\udf4a]|\ud800[\udf50-\udf75]|\ud800[\udf80-\udf9d]|\ud800[\udf9f-\udfc3]|\ud800[\udfc8-\udfd5]|\ud801[\udc00-\udc9d]|\ud801[\udca0-\udca9]|\ud801[\udd00-\udd27]|\ud801[\udd30-\udd63]|𐕯|\ud801[\ude00-\udf36]|\ud801[\udf40-\udf55]|\ud801[\udf60-\udf67]|𑀀|\ud804[\udc02-\udc37]|\ud804[\udc47-\udc4d]|\ud804[\udc66-\udc6f]|\ud804[\udc82-\udcb2]|𑂷|𑂸|\ud804[\udcbb-\udcc1]|\ud804[\udcd0-\udce8]|\ud804[\udcf0-\udcf9]|\ud804[\udd03-\udd26]|𑄬|\ud804[\udd36-\udd43]|\ud804[\udd50-\udd72]|\ud804[\udd74-\udd76]|\ud804[\udd82-\uddb5]|\ud804[\uddbf-\uddc9]|𑇍|\ud804[\uddd0-\udddf]|\ud804[\udde1-\uddf4]|\ud804[\ude00-\ude11]|\ud804[\ude13-\ude2e]|𑈲|𑈳|𑈵|\ud804[\ude38-\ude3d]|\ud804[\ude80-\ude86]|𑊈|\ud804[\ude8a-\ude8d]|\ud804[\ude8f-\ude9d]|\ud804[\ude9f-\udea9]|\ud804[\udeb0-\udede]|\ud804[\udee0-\udee2]|\ud804[\udef0-\udef9]|𑌂|𑌃|\ud804[\udf05-\udf0c]|𑌏|𑌐|\ud804[\udf13-\udf28]|\ud804[\udf2a-\udf30]|𑌲|𑌳|\ud804[\udf35-\udf39]|\ud804[\udf3d-\udf3f]|\ud804[\udf41-\udf44]|𑍇|𑍈|\ud804[\udf4b-\udf4d]|𑍐|𑍗|\ud804[\udf5d-\udf63]|\ud805[\udc80-\udcb2]|𑒹|\ud805[\udcbb-\udcbe]|𑓁|\ud805[\udcc4-\udcc7]|\ud805[\udcd0-\udcd9]|\ud805[\udd80-\uddb1]|\ud805[\uddb8-\uddbb]|𑖾|\ud805[\uddc1-\udddb]|\ud805[\ude00-\ude32]|𑘻|𑘼|𑘾|\ud805[\ude41-\ude44]|\ud805[\ude50-\ude59]|\ud805[\ude80-\udeaa]|𑚬|𑚮|𑚯|𑚶|\ud805[\udec0-\udec9]|\ud805[\udf00-\udf19]|𑜠|𑜡|𑜦|\ud805[\udf30-\udf3f]|\ud806[\udca0-\udcf2]|𑣿|\ud806[\udec0-\udef8]|\ud808[\udc00-\udf99]|\ud809[\udc00-\udc6e]|\ud809[\udc70-\udc74]|\ud809[\udc80-\udd43]|\ud80c[\udc00-\udfff]|\ud80d[\udc00-\udc2e]|\ud811[\udc00-\ude46]|\ud81a[\udc00-\ude38]|\ud81a[\ude40-\ude5e]|\ud81a[\ude60-\ude69]|𖩮|𖩯|\ud81a[\uded0-\udeed]|𖫵|\ud81a[\udf00-\udf2f]|\ud81a[\udf37-\udf45]|\ud81a[\udf50-\udf59]|\ud81a[\udf5b-\udf61]|\ud81a[\udf63-\udf77]|\ud81a[\udf7d-\udf8f]|\ud81b[\udf00-\udf44]|\ud81b[\udf50-\udf7e]|\ud81b[\udf93-\udf9f]|𛀀|𛀁|\ud82f[\udc00-\udc6a]|\ud82f[\udc70-\udc7c]|\ud82f[\udc80-\udc88]|\ud82f[\udc90-\udc99]|𛲜|𛲟|\ud834[\udc00-\udcf5]|\ud834[\udd00-\udd26]|\ud834[\udd29-\udd66]|\ud834[\udd6a-\udd72]|𝆃|𝆄|\ud834[\udd8c-\udda9]|\ud834[\uddae-\udde8]|\ud834[\udf60-\udf71]|\ud835[\udc00-\udc54]|\ud835[\udc56-\udc9c]|𝒞|𝒟|𝒢|𝒥|𝒦|\ud835[\udca9-\udcac]|\ud835[\udcae-\udcb9]|𝒻|\ud835[\udcbd-\udcc3]|\ud835[\udcc5-\udd05]|\ud835[\udd07-\udd0a]|\ud835[\udd0d-\udd14]|\ud835[\udd16-\udd1c]|\ud835[\udd1e-\udd39]|\ud835[\udd3b-\udd3e]|\ud835[\udd40-\udd44]|𝕆|\ud835[\udd4a-\udd50]|\ud835[\udd52-\udea5]|\ud835[\udea8-\udeda]|\ud835[\udedc-\udf14]|\ud835[\udf16-\udf4e]|\ud835[\udf50-\udf88]|\ud835[\udf8a-\udfc2]|\ud835[\udfc4-\udfcb]|\ud836[\udc00-\uddff]|\ud836[\ude37-\ude3a]|\ud836[\ude6d-\ude74]|\ud836[\ude76-\ude83]|\ud836[\ude85-\ude8b]|\ud83c[\udd10-\udd2e]|\ud83c[\udd30-\udd69]|\ud83c[\udd70-\udd9a]|\ud83c[\udde6-\ude02]|\ud83c[\ude10-\ude3a]|\ud83c[\ude40-\ude48]|🉐|🉑|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6]|\ud869[\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34]|\ud86d[\udf40-\udfff]|\ud86e[\udc00-\udc1d]|\ud86e[\udc20-\udfff]|[\ud86f-\ud872][\udc00-\udfff]|\ud873[\udc00-\udea1]|\ud87e[\udc00-\ude1d]|[\udb80-\udbbe][\udc00-\udfff]|\udbbf[\udc00-\udffd]|[\udbc0-\udbfe][\udc00-\udfff]|\udbff[\udc00-\udffd])|([֐־׀׃׆׈-׿߀-ߪߴߵߺ-ࠕࠚࠤࠨ࠮-ࡘ࡜-࢟‏יִײַ-ﬨשׁ-ﭏ؈؋؍؛-ي٭-ٯٱ-ەۥۦۮۯۺ-ܐܒ-ܯ݋-ޥޱ-޿ࢠ-࣢ﭐ-ﴽ﵀-﷏ﷰ-﷼﷾﷿ﹰ-﻾]|\ud802[\udc00-\udd1e]|\ud802[\udd20-\ude00]|𐨄|\ud802[\ude07-\ude0b]|\ud802[\ude10-\ude37]|\ud802[\ude3b-\ude3e]|\ud802[\ude40-\udee4]|\ud802[\udee7-\udf38]|\ud802[\udf40-\udfff]|\ud803[\udc00-\ude5f]|\ud803[\ude7f-\udfff]|\ud83a[\udc00-\udccf]|\ud83a[\udcd7-\udfff]|\ud83b[\udc00-\uddff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\udf00-\udfff]|\ud83b[\ude00-\udeef]|\ud83b[\udef2-\udeff]))"), t.extend(t.i18n.parser.emitter, {
        bidi: function (t) {
            var i, n, o = (i = t[0], (n = i.match(e)) ? void 0 === n[2] ? "ltr" : "rtl" : null);
            return "ltr" === o ? "‪" + t[0] + "‬" : "rtl" === o ? "‫" + t[0] + "‬" : t[0]
        }
    })
}(jQuery), function (t) {
    "use strict";
    var e = {
        pluralRules: {
            af: {one: "n = 1"},
            ak: {one: "n = 0..1"},
            am: {one: "i = 0 or n = 1"},
            ar: {zero: "n = 0", one: "n = 1", two: "n = 2", few: "n % 100 = 3..10", many: "n % 100 = 11..99"},
            ars: {zero: "n = 0", one: "n = 1", two: "n = 2", few: "n % 100 = 3..10", many: "n % 100 = 11..99"},
            as: {one: "i = 0 or n = 1"},
            asa: {one: "n = 1"},
            ast: {one: "i = 1 and v = 0"},
            az: {one: "n = 1"},
            be: {
                one: "n % 10 = 1 and n % 100 != 11",
                few: "n % 10 = 2..4 and n % 100 != 12..14",
                many: "n % 10 = 0 or n % 10 = 5..9 or n % 100 = 11..14"
            },
            bem: {one: "n = 1"},
            bez: {one: "n = 1"},
            bg: {one: "n = 1"},
            bh: {one: "n = 0..1"},
            bm: {},
            bn: {one: "i = 0 or n = 1"},
            bo: {},
            br: {
                one: "n % 10 = 1 and n % 100 != 11,71,91",
                two: "n % 10 = 2 and n % 100 != 12,72,92",
                few: "n % 10 = 3..4,9 and n % 100 != 10..19,70..79,90..99",
                many: "n != 0 and n % 1000000 = 0"
            },
            brx: {one: "n = 1"},
            bs: {
                one: "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11",
                few: "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14"
            },
            ca: {one: "i = 1 and v = 0"},
            ce: {one: "n = 1"},
            cgg: {one: "n = 1"},
            chr: {one: "n = 1"},
            ckb: {one: "n = 1"},
            cs: {one: "i = 1 and v = 0", few: "i = 2..4 and v = 0", many: "v != 0"},
            cy: {zero: "n = 0", one: "n = 1", two: "n = 2", few: "n = 3", many: "n = 6"},
            da: {one: "n = 1 or t != 0 and i = 0,1"},
            de: {one: "i = 1 and v = 0"},
            dsb: {
                one: "v = 0 and i % 100 = 1 or f % 100 = 1",
                two: "v = 0 and i % 100 = 2 or f % 100 = 2",
                few: "v = 0 and i % 100 = 3..4 or f % 100 = 3..4"
            },
            dv: {one: "n = 1"},
            dz: {},
            ee: {one: "n = 1"},
            el: {one: "n = 1"},
            en: {one: "i = 1 and v = 0"},
            eo: {one: "n = 1"},
            es: {one: "n = 1"},
            et: {one: "i = 1 and v = 0"},
            eu: {one: "n = 1"},
            fa: {one: "i = 0 or n = 1"},
            ff: {one: "i = 0,1"},
            fi: {one: "i = 1 and v = 0"},
            fil: {one: "v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9"},
            fo: {one: "n = 1"},
            fr: {one: "i = 0,1"},
            fur: {one: "n = 1"},
            fy: {one: "i = 1 and v = 0"},
            ga: {one: "n = 1", two: "n = 2", few: "n = 3..6", many: "n = 7..10"},
            gd: {one: "n = 1,11", two: "n = 2,12", few: "n = 3..10,13..19"},
            gl: {one: "i = 1 and v = 0"},
            gsw: {one: "n = 1"},
            gu: {one: "i = 0 or n = 1"},
            guw: {one: "n = 0..1"},
            gv: {
                one: "v = 0 and i % 10 = 1",
                two: "v = 0 and i % 10 = 2",
                few: "v = 0 and i % 100 = 0,20,40,60,80",
                many: "v != 0"
            },
            ha: {one: "n = 1"},
            haw: {one: "n = 1"},
            he: {one: "i = 1 and v = 0", two: "i = 2 and v = 0", many: "v = 0 and n != 0..10 and n % 10 = 0"},
            hi: {one: "i = 0 or n = 1"},
            hr: {
                one: "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11",
                few: "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14"
            },
            hsb: {
                one: "v = 0 and i % 100 = 1 or f % 100 = 1",
                two: "v = 0 and i % 100 = 2 or f % 100 = 2",
                few: "v = 0 and i % 100 = 3..4 or f % 100 = 3..4"
            },
            hu: {one: "n = 1"},
            hy: {one: "i = 0,1"},
            id: {},
            ig: {},
            ii: {},
            in: {},
            is: {one: "t = 0 and i % 10 = 1 and i % 100 != 11 or t != 0"},
            it: {one: "i = 1 and v = 0"},
            iu: {one: "n = 1", two: "n = 2"},
            iw: {one: "i = 1 and v = 0", two: "i = 2 and v = 0", many: "v = 0 and n != 0..10 and n % 10 = 0"},
            ja: {},
            jbo: {},
            jgo: {one: "n = 1"},
            ji: {one: "i = 1 and v = 0"},
            jmc: {one: "n = 1"},
            jv: {},
            jw: {},
            ka: {one: "n = 1"},
            kab: {one: "i = 0,1"},
            kaj: {one: "n = 1"},
            kcg: {one: "n = 1"},
            kde: {},
            kea: {},
            kk: {one: "n = 1"},
            kkj: {one: "n = 1"},
            kl: {one: "n = 1"},
            km: {},
            kn: {one: "i = 0 or n = 1"},
            ko: {},
            ks: {one: "n = 1"},
            ksb: {one: "n = 1"},
            ksh: {zero: "n = 0", one: "n = 1"},
            ku: {one: "n = 1"},
            kw: {one: "n = 1", two: "n = 2"},
            ky: {one: "n = 1"},
            lag: {zero: "n = 0", one: "i = 0,1 and n != 0"},
            lb: {one: "n = 1"},
            lg: {one: "n = 1"},
            lkt: {},
            ln: {one: "n = 0..1"},
            lo: {},
            lt: {one: "n % 10 = 1 and n % 100 != 11..19", few: "n % 10 = 2..9 and n % 100 != 11..19", many: "f != 0"},
            lv: {
                zero: "n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19",
                one: "n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1"
            },
            mas: {one: "n = 1"},
            mg: {one: "n = 0..1"},
            mgo: {one: "n = 1"},
            mk: {one: "v = 0 and i % 10 = 1 or f % 10 = 1"},
            ml: {one: "n = 1"},
            mn: {one: "n = 1"},
            mo: {one: "i = 1 and v = 0", few: "v != 0 or n = 0 or n != 1 and n % 100 = 1..19"},
            mr: {one: "i = 0 or n = 1"},
            ms: {},
            mt: {one: "n = 1", few: "n = 0 or n % 100 = 2..10", many: "n % 100 = 11..19"},
            my: {},
            nah: {one: "n = 1"},
            naq: {one: "n = 1", two: "n = 2"},
            nb: {one: "n = 1"},
            nd: {one: "n = 1"},
            ne: {one: "n = 1"},
            nl: {one: "i = 1 and v = 0"},
            nn: {one: "n = 1"},
            nnh: {one: "n = 1"},
            no: {one: "n = 1"},
            nqo: {},
            nr: {one: "n = 1"},
            nso: {one: "n = 0..1"},
            ny: {one: "n = 1"},
            nyn: {one: "n = 1"},
            om: {one: "n = 1"},
            or: {one: "n = 1"},
            os: {one: "n = 1"},
            pa: {one: "n = 0..1"},
            pap: {one: "n = 1"},
            pl: {
                one: "i = 1 and v = 0",
                few: "v = 0 and i % 10 = 2..4 and i % 100 != 12..14",
                many: "v = 0 and i != 1 and i % 10 = 0..1 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 12..14"
            },
            prg: {
                zero: "n % 10 = 0 or n % 100 = 11..19 or v = 2 and f % 100 = 11..19",
                one: "n % 10 = 1 and n % 100 != 11 or v = 2 and f % 10 = 1 and f % 100 != 11 or v != 2 and f % 10 = 1"
            },
            ps: {one: "n = 1"},
            pt: {one: "n = 0..2 and n != 2"},
            "pt-PT": {one: "n = 1 and v = 0"},
            rm: {one: "n = 1"},
            ro: {one: "i = 1 and v = 0", few: "v != 0 or n = 0 or n != 1 and n % 100 = 1..19"},
            rof: {one: "n = 1"},
            root: {},
            ru: {
                one: "v = 0 and i % 10 = 1 and i % 100 != 11",
                few: "v = 0 and i % 10 = 2..4 and i % 100 != 12..14",
                many: "v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14"
            },
            rwk: {one: "n = 1"},
            sah: {},
            saq: {one: "n = 1"},
            sdh: {one: "n = 1"},
            se: {one: "n = 1", two: "n = 2"},
            seh: {one: "n = 1"},
            ses: {},
            sg: {},
            sh: {
                one: "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11",
                few: "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14"
            },
            shi: {one: "i = 0 or n = 1", few: "n = 2..10"},
            si: {one: "n = 0,1 or i = 0 and f = 1"},
            sk: {one: "i = 1 and v = 0", few: "i = 2..4 and v = 0", many: "v != 0"},
            sl: {one: "v = 0 and i % 100 = 1", two: "v = 0 and i % 100 = 2", few: "v = 0 and i % 100 = 3..4 or v != 0"},
            sma: {one: "n = 1", two: "n = 2"},
            smi: {one: "n = 1", two: "n = 2"},
            smj: {one: "n = 1", two: "n = 2"},
            smn: {one: "n = 1", two: "n = 2"},
            sms: {one: "n = 1", two: "n = 2"},
            sn: {one: "n = 1"},
            so: {one: "n = 1"},
            sq: {one: "n = 1"},
            sr: {
                one: "v = 0 and i % 10 = 1 and i % 100 != 11 or f % 10 = 1 and f % 100 != 11",
                few: "v = 0 and i % 10 = 2..4 and i % 100 != 12..14 or f % 10 = 2..4 and f % 100 != 12..14"
            },
            ss: {one: "n = 1"},
            ssy: {one: "n = 1"},
            st: {one: "n = 1"},
            sv: {one: "i = 1 and v = 0"},
            sw: {one: "i = 1 and v = 0"},
            syr: {one: "n = 1"},
            ta: {one: "n = 1"},
            te: {one: "n = 1"},
            teo: {one: "n = 1"},
            th: {},
            ti: {one: "n = 0..1"},
            tig: {one: "n = 1"},
            tk: {one: "n = 1"},
            tl: {one: "v = 0 and i = 1,2,3 or v = 0 and i % 10 != 4,6,9 or v != 0 and f % 10 != 4,6,9"},
            tn: {one: "n = 1"},
            to: {},
            tr: {one: "n = 1"},
            ts: {one: "n = 1"},
            tzm: {one: "n = 0..1 or n = 11..99"},
            ug: {one: "n = 1"},
            uk: {
                one: "v = 0 and i % 10 = 1 and i % 100 != 11",
                few: "v = 0 and i % 10 = 2..4 and i % 100 != 12..14",
                many: "v = 0 and i % 10 = 0 or v = 0 and i % 10 = 5..9 or v = 0 and i % 100 = 11..14"
            },
            ur: {one: "i = 1 and v = 0"},
            uz: {one: "n = 1"},
            ve: {one: "n = 1"},
            vi: {},
            vo: {one: "n = 1"},
            vun: {one: "n = 1"},
            wa: {one: "n = 0..1"},
            wae: {one: "n = 1"},
            wo: {},
            xh: {one: "n = 1"},
            xog: {one: "n = 1"},
            yi: {one: "i = 1 and v = 0"},
            yo: {},
            yue: {},
            zh: {},
            zu: {one: "i = 0 or n = 1"}
        }, convertPlural: function (e, i) {
            var n, o, s, a, r = new RegExp("\\d+=", "i");
            if (!i || 0 === i.length) return "";
            for (s = 0; s < i.length; s++) if (a = i[s], r.test(a)) {
                if (parseInt(a.slice(0, a.indexOf("=")), 10) === e) return a.slice(a.indexOf("=") + 1);
                i[s] = void 0
            }
            return i = t.map(i, function (t) {
                if (void 0 !== t) return t
            }), (n = this.pluralRules[t.i18n().locale]) ? (o = this.getPluralForm(e, n), i[o = Math.min(o, i.length - 1)]) : 1 === e ? i[0] : i[1]
        }, getPluralForm: function (t, e) {
            var i, n = ["zero", "one", "two", "few", "many", "other"], o = 0;
            for (i = 0; i < n.length; i++) if (e[n[i]]) {
                if (pluralRuleParser(e[n[i]], t)) return o;
                o++
            }
            return o
        }, convertNumber: function (e, i) {
            var n, o, s, a, r, l;
            if (a = this.digitTransformTable(t.i18n().locale), r = String(e), l = "", !a) return e;
            if (i) {
                if (parseFloat(e, 10) === e) return e;
                for (o in n = [], a) n[a[o]] = o;
                a = n
            }
            for (s = 0; s < r.length; s++) a[r[s]] ? l += a[r[s]] : l += r[s];
            return i ? parseFloat(l, 10) : l
        }, convertGrammar: function (t, e) {
            return t
        }, gender: function (t, e) {
            if (!e || 0 === e.length) return "";
            for (; e.length < 2;) e.push(e[e.length - 1]);
            return "male" === t ? e[0] : "female" === t ? e[1] : 3 === e.length ? e[2] : e[0]
        }, digitTransformTable: function (t) {
            var e = {
                ar: "٠١٢٣٤٥٦٧٨٩",
                fa: "۰۱۲۳۴۵۶۷۸۹",
                ml: "൦൧൨൩൪൫൬൭൮൯",
                kn: "೦೧೨೩೪೫೬೭೮೯",
                lo: "໐໑໒໓໔໕໖໗໘໙",
                or: "୦୧୨୩୪୫୬୭୮୯",
                kh: "០១២៣៤៥៦៧៨៩",
                pa: "੦੧੨੩੪੫੬੭੮੯",
                gu: "૦૧૨૩૪૫૬૭૮૯",
                hi: "०१२३४५६७८९",
                my: "၀၁၂၃၄၅၆၇၈၉",
                ta: "௦௧௨௩௪௫௬௭௮௯",
                te: "౦౧౨౩౪౫౬౭౮౯",
                th: "๐๑๒๓๔๕๖๗๘๙",
                bo: "༠༡༢༣༤༥༦༧༨༩"
            };
            return !!e[t] && e[t].split("")
        }
    };
    t.extend(t.i18n.languages, {default: e})
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? t(require("jquery")) : t(jQuery)
}(function (t) {
    "use strict";
    var e;
    t.support.htmlMenuitem = "HTMLMenuItemElement" in window, t.support.htmlCommand = "HTMLCommandElement" in window, t.support.eventSelectstart = "onselectstart" in document.documentElement, t.ui && t.widget || (t.cleanData = (e = t.cleanData, function (i) {
        var n, o, s;
        for (s = 0; null != i[s]; s++) {
            o = i[s];
            try {
                (n = t._data(o, "events")) && n.remove && t(o).triggerHandler("remove")
            } catch (t) {
            }
        }
        e(i)
    }));
    var i = null, n = !1, o = t(window), s = 0, a = {}, r = {}, l = {}, c = {
        selector: null,
        appendTo: null,
        trigger: "right",
        autoHide: !1,
        delay: 200,
        reposition: !0,
        hideOnSecondTrigger: !1,
        selectableSubMenu: !1,
        classNames: {
            hover: "context-menu-hover",
            disabled: "context-menu-disabled",
            visible: "context-menu-visible",
            notSelectable: "context-menu-not-selectable",
            icon: "context-menu-icon",
            iconEdit: "context-menu-icon-edit",
            iconCut: "context-menu-icon-cut",
            iconCopy: "context-menu-icon-copy",
            iconPaste: "context-menu-icon-paste",
            iconDelete: "context-menu-icon-delete",
            iconAdd: "context-menu-icon-add",
            iconQuit: "context-menu-icon-quit",
            iconLoadingClass: "context-menu-icon-loading"
        },
        determinePosition: function (e) {
            if (t.ui && t.ui.position) e.css("display", "block").position({
                my: "center top",
                at: "center bottom",
                of: this,
                offset: "0 5",
                collision: "fit"
            }).css("display", "none"); else {
                var i = this.offset();
                i.top += this.outerHeight(), i.left += this.outerWidth() / 2 - e.outerWidth() / 2, e.css(i)
            }
        },
        position: function (t, e, i) {
            var n;
            if (e || i) {
                if ("maintain" === e && "maintain" === i) n = t.$menu.position(); else {
                    var s = t.$menu.offsetParent().offset();
                    n = {top: i - s.top, left: e - s.left}
                }
                var a = o.scrollTop() + o.height(), r = o.scrollLeft() + o.width(), l = t.$menu.outerHeight(),
                    c = t.$menu.outerWidth();
                n.top + l > a && (n.top -= l), n.top < 0 && (n.top = 0), n.left + c > r && (n.left -= c), n.left < 0 && (n.left = 0), t.$menu.css(n)
            } else t.determinePosition.call(this, t.$menu)
        },
        positionSubmenu: function (e) {
            if (void 0 !== e) if (t.ui && t.ui.position) e.css("display", "block").position({
                my: "left top-5",
                at: "right top",
                of: this,
                collision: "flipfit fit"
            }).css("display", ""); else {
                var i = {top: -9, left: this.outerWidth() - 5};
                e.css(i)
            }
        },
        zIndex: 1,
        animation: {duration: 50, show: "slideDown", hide: "slideUp"},
        events: {show: t.noop, hide: t.noop, activated: t.noop},
        callback: null,
        items: {}
    }, d = {timer: null, pageX: null, pageY: null}, u = {
        abortevent: function (t) {
            t.preventDefault(), t.stopImmediatePropagation()
        }, contextmenu: function (e) {
            var n = t(this);
            if ("right" === e.data.trigger && (e.preventDefault(), e.stopImmediatePropagation()), !("right" !== e.data.trigger && "demand" !== e.data.trigger && e.originalEvent || !(void 0 === e.mouseButton || !e.data || "left" === e.data.trigger && 0 === e.mouseButton || "right" === e.data.trigger && 2 === e.mouseButton) || n.hasClass("context-menu-active") || n.hasClass("context-menu-disabled"))) {
                if (i = n, e.data.build) {
                    var o = e.data.build(i, e);
                    if (!1 === o) return;
                    if (e.data = t.extend(!0, {}, c, e.data, o || {}), !e.data.items || t.isEmptyObject(e.data.items)) throw window.console && (console.error || console.log).call(console, "No items specified to show in contextMenu"), new Error("No Items specified");
                    e.data.$trigger = i, h.create(e.data)
                }
                var s = !1;
                for (var a in e.data.items) {
                    if (e.data.items.hasOwnProperty(a)) (t.isFunction(e.data.items[a].visible) ? e.data.items[a].visible.call(t(e.currentTarget), a, e.data) : void 0 === e.data.items[a] || !e.data.items[a].visible || !0 === e.data.items[a].visible) && (s = !0)
                }
                s && h.show.call(n, e.data, e.pageX, e.pageY)
            }
        }, click: function (e) {
            e.preventDefault(), e.stopImmediatePropagation(), t(this).trigger(t.Event("contextmenu", {
                data: e.data,
                pageX: e.pageX,
                pageY: e.pageY
            }))
        }, mousedown: function (e) {
            var n = t(this);
            i && i.length && !i.is(n) && i.data("contextMenu").$menu.trigger("contextmenu:hide"), 2 === e.button && (i = n.data("contextMenuActive", !0))
        }, mouseup: function (e) {
            var n = t(this);
            n.data("contextMenuActive") && i && i.length && i.is(n) && !n.hasClass("context-menu-disabled") && (e.preventDefault(), e.stopImmediatePropagation(), i = n, n.trigger(t.Event("contextmenu", {
                data: e.data,
                pageX: e.pageX,
                pageY: e.pageY
            }))), n.removeData("contextMenuActive")
        }, mouseenter: function (e) {
            var n = t(this), o = t(e.relatedTarget), s = t(document);
            o.is(".context-menu-list") || o.closest(".context-menu-list").length || i && i.length || (d.pageX = e.pageX, d.pageY = e.pageY, d.data = e.data, s.on("mousemove.contextMenuShow", u.mousemove), d.timer = setTimeout(function () {
                d.timer = null, s.off("mousemove.contextMenuShow"), i = n, n.trigger(t.Event("contextmenu", {
                    data: d.data,
                    pageX: d.pageX,
                    pageY: d.pageY
                }))
            }, e.data.delay))
        }, mousemove: function (t) {
            d.pageX = t.pageX, d.pageY = t.pageY
        }, mouseleave: function (e) {
            var i = t(e.relatedTarget);
            if (!i.is(".context-menu-list") && !i.closest(".context-menu-list").length) {
                try {
                    clearTimeout(d.timer)
                } catch (e) {
                }
                d.timer = null
            }
        }, layerClick: function (e) {
            var i, n, s = t(this).data("contextMenuRoot"), a = e.button, r = e.pageX, l = e.pageY;
            e.preventDefault(), setTimeout(function () {
                var c, d = "left" === s.trigger && 0 === a || "right" === s.trigger && 2 === a;
                if (document.elementFromPoint && s.$layer) {
                    if (s.$layer.hide(), (i = document.elementFromPoint(r - o.scrollLeft(), l - o.scrollTop())).isContentEditable) {
                        var u = document.createRange(), h = window.getSelection();
                        u.selectNode(i), u.collapse(!0), h.removeAllRanges(), h.addRange(u)
                    }
                    t(i).trigger(e), s.$layer.show()
                }
                if (s.hideOnSecondTrigger && d && null !== s.$menu && void 0 !== s.$menu) s.$menu.trigger("contextmenu:hide"); else {
                    if (s.reposition && d) if (document.elementFromPoint) {
                        if (s.$trigger.is(i)) return void s.position.call(s.$trigger, s, r, l)
                    } else if (n = s.$trigger.offset(), c = t(window), n.top += c.scrollTop(), n.top <= e.pageY && (n.left += c.scrollLeft(), n.left <= e.pageX && (n.bottom = n.top + s.$trigger.outerHeight(), n.bottom >= e.pageY && (n.right = n.left + s.$trigger.outerWidth(), n.right >= e.pageX)))) return void s.position.call(s.$trigger, s, r, l);
                    i && d && s.$trigger.one("contextmenu:hidden", function () {
                        t(i).contextMenu({x: r, y: l, button: a})
                    }), null != s && null !== s.$menu && void 0 !== s.$menu && s.$menu.trigger("contextmenu:hide")
                }
            }, 50)
        }, keyStop: function (t, e) {
            e.isInput || t.preventDefault(), t.stopPropagation()
        }, key: function (t) {
            var e = {};
            i && (e = i.data("contextMenu") || {}), void 0 === e.zIndex && (e.zIndex = 0);
            var n = 0, o = function (t) {
                "" !== t.style.zIndex ? n = t.style.zIndex : null !== t.offsetParent && void 0 !== t.offsetParent ? o(t.offsetParent) : null !== t.parentElement && void 0 !== t.parentElement && o(t.parentElement)
            };
            if (o(t.target), !(e.$menu && parseInt(n, 10) > parseInt(e.$menu.css("zIndex"), 10))) {
                switch (t.keyCode) {
                    case 9:
                    case 38:
                        if (u.keyStop(t, e), e.isInput) {
                            if (9 === t.keyCode && t.shiftKey) return t.preventDefault(), e.$selected && e.$selected.find("input, textarea, select").blur(), void (null !== e.$menu && void 0 !== e.$menu && e.$menu.trigger("prevcommand"));
                            if (38 === t.keyCode && "checkbox" === e.$selected.find("input, textarea, select").prop("type")) return void t.preventDefault()
                        } else if (9 !== t.keyCode || t.shiftKey) return void (null !== e.$menu && void 0 !== e.$menu && e.$menu.trigger("prevcommand"));
                        break;
                    case 40:
                        if (u.keyStop(t, e), !e.isInput) return void (null !== e.$menu && void 0 !== e.$menu && e.$menu.trigger("nextcommand"));
                        if (9 === t.keyCode) return t.preventDefault(), e.$selected && e.$selected.find("input, textarea, select").blur(), void (null !== e.$menu && void 0 !== e.$menu && e.$menu.trigger("nextcommand"));
                        if (40 === t.keyCode && "checkbox" === e.$selected.find("input, textarea, select").prop("type")) return void t.preventDefault();
                        break;
                    case 37:
                        if (u.keyStop(t, e), e.isInput || !e.$selected || !e.$selected.length) break;
                        if (!e.$selected.parent().hasClass("context-menu-root")) {
                            var s = e.$selected.parent().parent();
                            return e.$selected.trigger("contextmenu:blur"), void (e.$selected = s)
                        }
                        break;
                    case 39:
                        if (u.keyStop(t, e), e.isInput || !e.$selected || !e.$selected.length) break;
                        var a = e.$selected.data("contextMenu") || {};
                        if (a.$menu && e.$selected.hasClass("context-menu-submenu")) return e.$selected = null, a.$selected = null, void a.$menu.trigger("nextcommand");
                        break;
                    case 35:
                    case 36:
                        return e.$selected && e.$selected.find("input, textarea, select").length ? void 0 : ((e.$selected && e.$selected.parent() || e.$menu).children(":not(." + e.classNames.disabled + ", ." + e.classNames.notSelectable + ")")[36 === t.keyCode ? "first" : "last"]().trigger("contextmenu:focus"), void t.preventDefault());
                    case 13:
                        if (u.keyStop(t, e), e.isInput) {
                            if (e.$selected && !e.$selected.is("textarea, select")) return void t.preventDefault();
                            break
                        }
                        return void (void 0 !== e.$selected && null !== e.$selected && e.$selected.trigger("mouseup"));
                    case 32:
                    case 33:
                    case 34:
                        return void u.keyStop(t, e);
                    case 27:
                        return u.keyStop(t, e), void (null !== e.$menu && void 0 !== e.$menu && e.$menu.trigger("contextmenu:hide"));
                    default:
                        var r = String.fromCharCode(t.keyCode).toUpperCase();
                        if (e.accesskeys && e.accesskeys[r]) return void e.accesskeys[r].$node.trigger(e.accesskeys[r].$menu ? "contextmenu:focus" : "mouseup")
                }
                t.stopPropagation(), void 0 !== e.$selected && null !== e.$selected && e.$selected.trigger(t)
            }
        }, prevItem: function (e) {
            e.stopPropagation();
            var i = t(this).data("contextMenu") || {}, n = t(this).data("contextMenuRoot") || {};
            if (i.$selected) {
                var o = i.$selected;
                (i = i.$selected.parent().data("contextMenu") || {}).$selected = o
            }
            for (var s = i.$menu.children(), a = i.$selected && i.$selected.prev().length ? i.$selected.prev() : s.last(), r = a; a.hasClass(n.classNames.disabled) || a.hasClass(n.classNames.notSelectable) || a.is(":hidden");) if ((a = a.prev().length ? a.prev() : s.last()).is(r)) return;
            i.$selected && u.itemMouseleave.call(i.$selected.get(0), e), u.itemMouseenter.call(a.get(0), e);
            var l = a.find("input, textarea, select");
            l.length && l.focus()
        }, nextItem: function (e) {
            e.stopPropagation();
            var i = t(this).data("contextMenu") || {}, n = t(this).data("contextMenuRoot") || {};
            if (i.$selected) {
                var o = i.$selected;
                (i = i.$selected.parent().data("contextMenu") || {}).$selected = o
            }
            for (var s = i.$menu.children(), a = i.$selected && i.$selected.next().length ? i.$selected.next() : s.first(), r = a; a.hasClass(n.classNames.disabled) || a.hasClass(n.classNames.notSelectable) || a.is(":hidden");) if ((a = a.next().length ? a.next() : s.first()).is(r)) return;
            i.$selected && u.itemMouseleave.call(i.$selected.get(0), e), u.itemMouseenter.call(a.get(0), e);
            var l = a.find("input, textarea, select");
            l.length && l.focus()
        }, focusInput: function () {
            var e = t(this).closest(".context-menu-item"), i = e.data(), n = i.contextMenu, o = i.contextMenuRoot;
            o.$selected = n.$selected = e, o.isInput = n.isInput = !0
        }, blurInput: function () {
            var e = t(this).closest(".context-menu-item").data(), i = e.contextMenu;
            e.contextMenuRoot.isInput = i.isInput = !1
        }, menuMouseenter: function () {
            t(this).data().contextMenuRoot.hovering = !0
        }, menuMouseleave: function (e) {
            var i = t(this).data().contextMenuRoot;
            i.$layer && i.$layer.is(e.relatedTarget) && (i.hovering = !1)
        }, itemMouseenter: function (e) {
            var i = t(this), n = i.data(), o = n.contextMenu, s = n.contextMenuRoot;
            s.hovering = !0, e && s.$layer && s.$layer.is(e.relatedTarget) && (e.preventDefault(), e.stopImmediatePropagation()), (o.$menu ? o : s).$menu.children("." + s.classNames.hover).trigger("contextmenu:blur").children(".hover").trigger("contextmenu:blur"), i.hasClass(s.classNames.disabled) || i.hasClass(s.classNames.notSelectable) ? o.$selected = null : i.trigger("contextmenu:focus")
        }, itemMouseleave: function (e) {
            var i = t(this), n = i.data(), o = n.contextMenu, s = n.contextMenuRoot;
            if (s !== o && s.$layer && s.$layer.is(e.relatedTarget)) return void 0 !== s.$selected && null !== s.$selected && s.$selected.trigger("contextmenu:blur"), e.preventDefault(), e.stopImmediatePropagation(), void (s.$selected = o.$selected = o.$node);
            o && o.$menu && o.$menu.hasClass("context-menu-visible") || i.trigger("contextmenu:blur")
        }, itemClick: function (e) {
            var i, n = t(this), o = n.data(), s = o.contextMenu, a = o.contextMenuRoot, r = o.contextMenuKey;
            if (!(!s.items[r] || n.is("." + a.classNames.disabled + ", .context-menu-separator, ." + a.classNames.notSelectable) || n.is(".context-menu-submenu") && !1 === a.selectableSubMenu)) {
                if (e.preventDefault(), e.stopImmediatePropagation(), t.isFunction(s.callbacks[r]) && Object.prototype.hasOwnProperty.call(s.callbacks, r)) i = s.callbacks[r]; else {
                    if (!t.isFunction(a.callback)) return;
                    i = a.callback
                }
                !1 !== i.call(a.$trigger, r, a, e) ? a.$menu.trigger("contextmenu:hide") : a.$menu.parent().length && h.update.call(a.$trigger, a)
            }
        }, inputClick: function (t) {
            t.stopImmediatePropagation()
        }, hideMenu: function (e, i) {
            var n = t(this).data("contextMenuRoot");
            h.hide.call(n.$trigger, n, i && i.force)
        }, focusItem: function (e) {
            e.stopPropagation();
            var i = t(this), n = i.data(), o = n.contextMenu, s = n.contextMenuRoot;
            i.hasClass(s.classNames.disabled) || i.hasClass(s.classNames.notSelectable) || (i.addClass([s.classNames.hover, s.classNames.visible].join(" ")).parent().find(".context-menu-item").not(i).removeClass(s.classNames.visible).filter("." + s.classNames.hover).trigger("contextmenu:blur"), o.$selected = s.$selected = i, o && o.$node && o.$node.hasClass("context-menu-submenu") && o.$node.addClass(s.classNames.hover), o.$node && s.positionSubmenu.call(o.$node, o.$menu))
        }, blurItem: function (e) {
            e.stopPropagation();
            var i = t(this), n = i.data(), o = n.contextMenu, s = n.contextMenuRoot;
            o.autoHide && i.removeClass(s.classNames.visible), i.removeClass(s.classNames.hover), o.$selected = null
        }
    }, h = {
        show: function (e, n, o) {
            var s = t(this), a = {};
            if (t("#context-menu-layer").trigger("mousedown"), e.$trigger = s, !1 !== e.events.show.call(s, e)) {
                if (h.update.call(s, e), e.position.call(s, e, n, o), e.zIndex) {
                    var r = e.zIndex;
                    "function" == typeof e.zIndex && (r = e.zIndex.call(s, e)), a.zIndex = function (t) {
                        for (var e = 0, i = t; e = Math.max(e, parseInt(i.css("z-index"), 10) || 0), (i = i.parent()) && i.length && !("html body".indexOf(i.prop("nodeName").toLowerCase()) > -1);) ;
                        return e
                    }(s) + r
                }
                h.layer.call(e.$menu, e, a.zIndex), e.$menu.find("ul").css("zIndex", a.zIndex + 1), e.$menu.css(a)[e.animation.show](e.animation.duration, function () {
                    s.trigger("contextmenu:visible"), h.activated(e), e.events.activated()
                }), s.data("contextMenu", e).addClass("context-menu-active"), t(document).off("keydown.contextMenu").on("keydown.contextMenu", u.key), e.autoHide && t(document).on("mousemove.contextMenuAutoHide", function (t) {
                    var i = s.offset();
                    i.right = i.left + s.outerWidth(), i.bottom = i.top + s.outerHeight(), !e.$layer || e.hovering || t.pageX >= i.left && t.pageX <= i.right && t.pageY >= i.top && t.pageY <= i.bottom || setTimeout(function () {
                        e.hovering || null === e.$menu || void 0 === e.$menu || e.$menu.trigger("contextmenu:hide")
                    }, 50)
                })
            } else i = null
        }, hide: function (e, n) {
            var o = t(this);
            if (e || (e = o.data("contextMenu") || {}), n || !e.events || !1 !== e.events.hide.call(o, e)) {
                if (o.removeData("contextMenu").removeClass("context-menu-active"), e.$layer) {
                    setTimeout((s = e.$layer, function () {
                        s.remove()
                    }), 10);
                    try {
                        delete e.$layer
                    } catch (t) {
                        e.$layer = null
                    }
                }
                var s;
                i = null, e.$menu.find("." + e.classNames.hover).trigger("contextmenu:blur"), e.$selected = null, e.$menu.find("." + e.classNames.visible).removeClass(e.classNames.visible), t(document).off(".contextMenuAutoHide").off("keydown.contextMenu"), e.$menu && e.$menu[e.animation.hide](e.animation.duration, function () {
                    e.build && (e.$menu.remove(), t.each(e, function (t) {
                        switch (t) {
                            case"ns":
                            case"selector":
                            case"build":
                            case"trigger":
                                return !0;
                            default:
                                e[t] = void 0;
                                try {
                                    delete e[t]
                                } catch (t) {
                                }
                                return !0
                        }
                    })), setTimeout(function () {
                        o.trigger("contextmenu:hidden")
                    }, 10)
                })
            }
        }, create: function (e, i) {
            function n(e) {
                var i = t("<span></span>");
                if (e._accesskey) e._beforeAccesskey && i.append(document.createTextNode(e._beforeAccesskey)), t("<span></span>").addClass("context-menu-accesskey").text(e._accesskey).appendTo(i), e._afterAccesskey && i.append(document.createTextNode(e._afterAccesskey)); else if (e.isHtmlName) {
                    if (void 0 !== e.accesskey) throw new Error("accesskeys are not compatible with HTML names and cannot be used together in the same item");
                    i.html(e.name)
                } else i.text(e.name);
                return i
            }

            void 0 === i && (i = e), e.$menu = t('<ul class="context-menu-list"></ul>').addClass(e.className || "").data({
                contextMenu: e,
                contextMenuRoot: i
            }), t.each(["callbacks", "commands", "inputs"], function (t, n) {
                e[n] = {}, i[n] || (i[n] = {})
            }), i.accesskeys || (i.accesskeys = {}), t.each(e.items, function (o, s) {
                var a = t('<li class="context-menu-item"></li>').addClass(s.className || ""), r = null, c = null;
                if (a.on("click", t.noop), "string" != typeof s && "cm_separator" !== s.type || (s = {type: "cm_seperator"}), s.$node = a.data({
                    contextMenu: e,
                    contextMenuRoot: i,
                    contextMenuKey: o
                }), void 0 !== s.accesskey) for (var d, p = function (t) {
                    for (var e, i = t.split(/\s+/), n = [], o = 0; e = i[o]; o++) e = e.charAt(0).toUpperCase(), n.push(e);
                    return n
                }(s.accesskey), m = 0; d = p[m]; m++) if (!i.accesskeys[d]) {
                    i.accesskeys[d] = s;
                    var f = s.name.match(new RegExp("^(.*?)(" + d + ")(.*)$", "i"));
                    f && (s._beforeAccesskey = f[1], s._accesskey = f[2], s._afterAccesskey = f[3]);
                    break
                }
                if (s.type && l[s.type]) l[s.type].call(a, s, e, i), t.each([e, i], function (i, n) {
                    n.commands[o] = s, !t.isFunction(s.callback) || void 0 !== n.callbacks[o] && void 0 !== e.type || (n.callbacks[o] = s.callback)
                }); else {
                    switch ("cm_seperator" === s.type ? a.addClass("context-menu-separator " + i.classNames.notSelectable) : "html" === s.type ? a.addClass("context-menu-html " + i.classNames.notSelectable) : "sub" === s.type || (s.type ? (r = t("<label></label>").appendTo(a), n(s).appendTo(r), a.addClass("context-menu-input"), e.hasTypes = !0, t.each([e, i], function (t, e) {
                        e.commands[o] = s, e.inputs[o] = s
                    })) : s.items && (s.type = "sub")), s.type) {
                        case"cm_seperator":
                            break;
                        case"text":
                            c = t('<input type="text" value="1" name="" />').attr("name", "context-menu-input-" + o).val(s.value || "").appendTo(r);
                            break;
                        case"textarea":
                            c = t('<textarea name=""></textarea>').attr("name", "context-menu-input-" + o).val(s.value || "").appendTo(r), s.height && c.height(s.height);
                            break;
                        case"checkbox":
                            c = t('<input type="checkbox" value="1" name="" />').attr("name", "context-menu-input-" + o).val(s.value || "").prop("checked", !!s.selected).prependTo(r);
                            break;
                        case"radio":
                            c = t('<input type="radio" value="1" name="" />').attr("name", "context-menu-input-" + s.radio).val(s.value || "").prop("checked", !!s.selected).prependTo(r);
                            break;
                        case"select":
                            c = t('<select name=""></select>').attr("name", "context-menu-input-" + o).appendTo(r), s.options && (t.each(s.options, function (e, i) {
                                t("<option></option>").val(e).text(i).appendTo(c)
                            }), c.val(s.selected));
                            break;
                        case"sub":
                            n(s).appendTo(a), s.appendTo = s.$node, a.data("contextMenu", s).addClass("context-menu-submenu"), s.callback = null, "function" == typeof s.items.then ? h.processPromises(s, i, s.items) : h.create(s, i);
                            break;
                        case"html":
                            t(s.html).appendTo(a);
                            break;
                        default:
                            t.each([e, i], function (i, n) {
                                n.commands[o] = s, !t.isFunction(s.callback) || void 0 !== n.callbacks[o] && void 0 !== e.type || (n.callbacks[o] = s.callback)
                            }), n(s).appendTo(a)
                    }
                    s.type && "sub" !== s.type && "html" !== s.type && "cm_seperator" !== s.type && (c.on("focus", u.focusInput).on("blur", u.blurInput), s.events && c.on(s.events, e)), s.icon && (t.isFunction(s.icon) ? s._icon = s.icon.call(this, this, a, o, s) : "string" == typeof s.icon && "fa-" === s.icon.substring(0, 3) ? s._icon = i.classNames.icon + " " + i.classNames.icon + "--fa fa " + s.icon : s._icon = i.classNames.icon + " " + i.classNames.icon + "-" + s.icon, a.addClass(s._icon))
                }
                s.$input = c, s.$label = r, a.appendTo(e.$menu), !e.hasTypes && t.support.eventSelectstart && a.on("selectstart.disableTextSelect", u.abortevent)
            }), e.$node || e.$menu.css("display", "none").addClass("context-menu-root"), e.$menu.appendTo(e.appendTo || document.body)
        }, resize: function (e, i) {
            var n;
            e.css({
                position: "absolute",
                display: "block"
            }), e.data("width", (n = e.get(0)).getBoundingClientRect ? Math.ceil(n.getBoundingClientRect().width) : e.outerWidth() + 1), e.css({
                position: "static",
                minWidth: "0px",
                maxWidth: "100000px"
            }), e.find("> li > ul").each(function () {
                h.resize(t(this), !0)
            }), i || e.find("ul").addBack().css({
                position: "",
                display: "",
                minWidth: "",
                maxWidth: ""
            }).outerWidth(function () {
                return t(this).data("width")
            })
        }, update: function (e, i) {
            var n = this;
            void 0 === i && (i = e, h.resize(e.$menu)), e.$menu.children().each(function () {
                var o = t(this), s = o.data("contextMenuKey"), a = e.items[s],
                    r = t.isFunction(a.disabled) && a.disabled.call(n, s, i) || !0 === a.disabled;
                if (o[(t.isFunction(a.visible) ? a.visible.call(n, s, i) : void 0 === a.visible || !0 === a.visible) ? "show" : "hide"](), o[r ? "addClass" : "removeClass"](i.classNames.disabled), t.isFunction(a.icon) && (o.removeClass(a._icon), a._icon = a.icon.call(this, n, o, s, a), o.addClass(a._icon)), a.type) switch (o.find("input, select, textarea").prop("disabled", r), a.type) {
                    case"text":
                    case"textarea":
                        a.$input.val(a.value || "");
                        break;
                    case"checkbox":
                    case"radio":
                        a.$input.val(a.value || "").prop("checked", !!a.selected);
                        break;
                    case"select":
                        a.$input.val((0 === a.selected ? "0" : a.selected) || "")
                }
                a.$menu && h.update.call(n, a, i)
            })
        }, layer: function (e, i) {
            var n = e.$layer = t('<div id="context-menu-layer"></div>').css({
                height: o.height(),
                width: o.width(),
                display: "block",
                position: "fixed",
                "z-index": i,
                top: 0,
                left: 0,
                opacity: 0,
                filter: "alpha(opacity=0)",
                "background-color": "#000"
            }).data("contextMenuRoot", e).insertBefore(this).on("contextmenu", u.abortevent).on("mousedown", u.layerClick);
            return void 0 === document.body.style.maxWidth && n.css({
                position: "absolute",
                height: t(document).height()
            }), n
        }, processPromises: function (t, e, i) {
            function n(t, e, i) {
                void 0 === i ? (i = {
                    error: {
                        name: "No items and no error item",
                        icon: "context-menu-icon context-menu-icon-quit"
                    }
                }, window.console && (console.error || console.log).call(console, 'When you reject a promise, provide an "items" object, equal to normal sub-menu items')) : "string" == typeof i && (i = {error: {name: i}}), o(t, e, i)
            }

            function o(t, e, i) {
                void 0 !== e.$menu && e.$menu.is(":visible") && (t.$node.removeClass(e.classNames.iconLoadingClass), t.items = i, h.create(t, e, !0), h.update(t, e), e.positionSubmenu.call(t.$node, t.$menu))
            }

            t.$node.addClass(e.classNames.iconLoadingClass), i.then(function (t, e, i) {
                void 0 === i && n(void 0), o(t, e, i)
            }.bind(this, t, e), n.bind(this, t, e))
        }, activated: function (e) {
            var i = e.$menu, n = i.offset(), o = t(window).height(), s = t(window).scrollTop(), a = i.height();
            a > o ? i.css({
                height: o + "px",
                "overflow-x": "hidden",
                "overflow-y": "auto",
                top: s + "px"
            }) : (n.top < s || n.top + a > s + o) && i.css({top: "0px"})
        }
    };

    function p(e) {
        return e.id && t('label[for="' + e.id + '"]').val() || e.name
    }

    t.fn.contextMenu = function (e) {
        var i = this, n = e;
        if (this.length > 0) if (void 0 === e) this.first().trigger("contextmenu"); else if (void 0 !== e.x && void 0 !== e.y) this.first().trigger(t.Event("contextmenu", {
            pageX: e.x,
            pageY: e.y,
            mouseButton: e.button
        })); else if ("hide" === e) {
            var o = this.first().data("contextMenu") ? this.first().data("contextMenu").$menu : null;
            o && o.trigger("contextmenu:hide")
        } else "destroy" === e ? t.contextMenu("destroy", {context: this}) : t.isPlainObject(e) ? (e.context = this, t.contextMenu("create", e)) : e ? this.removeClass("context-menu-disabled") : e || this.addClass("context-menu-disabled"); else t.each(r, function () {
            this.selector === i.selector && (n.data = this, t.extend(n.data, {trigger: "demand"}))
        }), u.contextmenu.call(n.target, n);
        return this
    }, t.contextMenu = function (e, i) {
        "string" != typeof e && (i = e, e = "create"), "string" == typeof i ? i = {selector: i} : void 0 === i && (i = {});
        var o = t.extend(!0, {}, c, i || {}), l = t(document), d = l, p = !1;
        switch (o.context && o.context.length ? (d = t(o.context).first(), o.context = d.get(0), p = !t(o.context).is(document)) : o.context = document, e) {
            case"update":
                if (p) h.update(d); else for (var m in r) r.hasOwnProperty(m) && h.update(r[m]);
                break;
            case"create":
                if (!o.selector) throw new Error("No selector specified");
                if (o.selector.match(/.context-menu-(list|item|input)($|\s)/)) throw new Error('Cannot bind to selector "' + o.selector + '" as it contains a reserved className');
                if (!o.build && (!o.items || t.isEmptyObject(o.items))) throw new Error("No Items specified");
                if (s++, o.ns = ".contextMenu" + s, p || (a[o.selector] = o.ns), r[o.ns] = o, o.trigger || (o.trigger = "right"), !n) {
                    var f = "click" === o.itemClickEvent ? "click.contextMenu" : "mouseup.contextMenu", _ = {
                        "contextmenu:focus.contextMenu": u.focusItem,
                        "contextmenu:blur.contextMenu": u.blurItem,
                        "contextmenu.contextMenu": u.abortevent,
                        "mouseenter.contextMenu": u.itemMouseenter,
                        "mouseleave.contextMenu": u.itemMouseleave
                    };
                    _[f] = u.itemClick, l.on({
                        "contextmenu:hide.contextMenu": u.hideMenu,
                        "prevcommand.contextMenu": u.prevItem,
                        "nextcommand.contextMenu": u.nextItem,
                        "contextmenu.contextMenu": u.abortevent,
                        "mouseenter.contextMenu": u.menuMouseenter,
                        "mouseleave.contextMenu": u.menuMouseleave
                    }, ".context-menu-list").on("mouseup.contextMenu", ".context-menu-input", u.inputClick).on(_, ".context-menu-item"), n = !0
                }
                switch (d.on("contextmenu" + o.ns, o.selector, o, u.contextmenu), p && d.on("remove" + o.ns, function () {
                    t(this).contextMenu("destroy")
                }), o.trigger) {
                    case"hover":
                        d.on("mouseenter" + o.ns, o.selector, o, u.mouseenter).on("mouseleave" + o.ns, o.selector, o, u.mouseleave);
                        break;
                    case"left":
                        d.on("click" + o.ns, o.selector, o, u.click);
                        break;
                    case"touchstart":
                        d.on("touchstart" + o.ns, o.selector, o, u.click)
                }
                o.build || h.create(o);
                break;
            case"destroy":
                var g;
                if (p) {
                    var v = o.context;
                    t.each(r, function (e, i) {
                        if (!i) return !0;
                        if (!t(v).is(i.selector)) return !0;
                        (g = t(".context-menu-list").filter(":visible")).length && g.data().contextMenuRoot.$trigger.is(t(i.context).find(i.selector)) && g.trigger("contextmenu:hide", {force: !0});
                        try {
                            r[i.ns].$menu && r[i.ns].$menu.remove(), delete r[i.ns]
                        } catch (t) {
                            r[i.ns] = null
                        }
                        return t(i.context).off(i.ns), !0
                    })
                } else if (o.selector) {
                    if (a[o.selector]) {
                        (g = t(".context-menu-list").filter(":visible")).length && g.data().contextMenuRoot.$trigger.is(o.selector) && g.trigger("contextmenu:hide", {force: !0});
                        try {
                            r[a[o.selector]].$menu && r[a[o.selector]].$menu.remove(), delete r[a[o.selector]]
                        } catch (t) {
                            r[a[o.selector]] = null
                        }
                        l.off(a[o.selector])
                    }
                } else l.off(".contextMenu .contextMenuAutoHide"), t.each(r, function (e, i) {
                    t(i.context).off(i.ns)
                }), a = {}, r = {}, s = 0, n = !1, t("#context-menu-layer, .context-menu-list").remove();
                break;
            case"html5":
                (!t.support.htmlCommand && !t.support.htmlMenuitem || "boolean" == typeof i && i) && t('menu[type="context"]').each(function () {
                    this.id && t.contextMenu({
                        selector: "[contextmenu=" + this.id + "]",
                        items: t.contextMenu.fromMenu(this)
                    })
                }).css("display", "none");
                break;
            default:
                throw new Error('Unknown operation "' + e + '"')
        }
        return this
    }, t.contextMenu.setInputValues = function (e, i) {
        void 0 === i && (i = {}), t.each(e.inputs, function (t, e) {
            switch (e.type) {
                case"text":
                case"textarea":
                    e.value = i[t] || "";
                    break;
                case"checkbox":
                    e.selected = !!i[t];
                    break;
                case"radio":
                    e.selected = (i[e.radio] || "") === e.value;
                    break;
                case"select":
                    e.selected = i[t] || ""
            }
        })
    }, t.contextMenu.getInputValues = function (e, i) {
        return void 0 === i && (i = {}), t.each(e.inputs, function (t, e) {
            switch (e.type) {
                case"text":
                case"textarea":
                case"select":
                    i[t] = e.$input.val();
                    break;
                case"checkbox":
                    i[t] = e.$input.prop("checked");
                    break;
                case"radio":
                    e.$input.prop("checked") && (i[e.radio] = e.value)
            }
        }), i
    }, t.contextMenu.fromMenu = function (e) {
        var i = {};
        return function e(i, n, o) {
            return o || (o = 0), n.each(function () {
                var n, s, a = t(this), r = this, l = this.nodeName.toLowerCase();
                switch ("label" === l && a.find("input, textarea, select").length && (n = a.text(), l = (r = (a = a.children().first()).get(0)).nodeName.toLowerCase()), l) {
                    case"menu":
                        s = {name: a.attr("label"), items: {}}, o = e(s.items, a.children(), o);
                        break;
                    case"a":
                    case"button":
                        s = {
                            name: a.text(), disabled: !!a.attr("disabled"), callback: function () {
                                a.get(0).click()
                            }
                        };
                        break;
                    case"menuitem":
                    case"command":
                        switch (a.attr("type")) {
                            case void 0:
                            case"command":
                            case"menuitem":
                                s = {
                                    name: a.attr("label"),
                                    disabled: !!a.attr("disabled"),
                                    icon: a.attr("icon"),
                                    callback: function () {
                                        a.get(0).click()
                                    }
                                };
                                break;
                            case"checkbox":
                                s = {
                                    type: "checkbox",
                                    disabled: !!a.attr("disabled"),
                                    name: a.attr("label"),
                                    selected: !!a.attr("checked")
                                };
                                break;
                            case"radio":
                                s = {
                                    type: "radio",
                                    disabled: !!a.attr("disabled"),
                                    name: a.attr("label"),
                                    radio: a.attr("radiogroup"),
                                    value: a.attr("id"),
                                    selected: !!a.attr("checked")
                                };
                                break;
                            default:
                                s = void 0
                        }
                        break;
                    case"hr":
                        s = "-------";
                        break;
                    case"input":
                        switch (a.attr("type")) {
                            case"text":
                                s = {type: "text", name: n || p(r), disabled: !!a.attr("disabled"), value: a.val()};
                                break;
                            case"checkbox":
                                s = {
                                    type: "checkbox",
                                    name: n || p(r),
                                    disabled: !!a.attr("disabled"),
                                    selected: !!a.attr("checked")
                                };
                                break;
                            case"radio":
                                s = {
                                    type: "radio",
                                    name: n || p(r),
                                    disabled: !!a.attr("disabled"),
                                    radio: !!a.attr("name"),
                                    value: a.val(),
                                    selected: !!a.attr("checked")
                                };
                                break;
                            default:
                                s = void 0
                        }
                        break;
                    case"select":
                        s = {
                            type: "select",
                            name: n || p(r),
                            disabled: !!a.attr("disabled"),
                            selected: a.val(),
                            options: {}
                        }, a.children().each(function () {
                            s.options[this.value] = t(this).text()
                        });
                        break;
                    case"textarea":
                        s = {type: "textarea", name: n || p(r), disabled: !!a.attr("disabled"), value: a.val()};
                        break;
                    case"label":
                        break;
                    default:
                        s = {type: "html", html: a.clone(!0)}
                }
                s && (i["key" + ++o] = s)
            }), o
        }(i, t(e).children()), i
    }, t.contextMenu.defaults = c, t.contextMenu.types = l, t.contextMenu.handle = u, t.contextMenu.op = h, t.contextMenu.menus = r
}), function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("Navigo", [], e) : "object" == typeof exports ? exports.Navigo = e() : t.Navigo = e()
}(this, function () {
    return function (t) {
        function e(n) {
            if (i[n]) return i[n].exports;
            var o = i[n] = {exports: {}, id: n, loaded: !1};
            return t[n].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
        }

        var i = {};
        return e.m = t, e.c = i, e.p = "", e(0)
    }([function (t, e) {
        "use strict";

        function i() {
            return !("undefined" == typeof window || !window.history || !window.history.pushState)
        }

        function n(t, e, n) {
            this.root = null, this._routes = [], this._useHash = e, this._hash = void 0 === n ? "#" : n, this._paused = !1, this._destroyed = !1, this._lastRouteResolved = null, this._notFoundHandler = null, this._defaultHandler = null, this._usePushState = !e && i(), this._onLocationChange = this._onLocationChange.bind(this), this._genericHooks = null, this._historyAPIUpdateMethod = "pushState", t ? this.root = e ? t.replace(/\/$/, "/" + this._hash) : t.replace(/\/$/, "") : e && (this.root = this._cLoc().split(this._hash)[0].replace(/\/$/, "/" + this._hash)), this._listen(), this.updatePageLinks()
        }

        function o(t) {
            return t instanceof RegExp ? t : t.replace(/\/+$/, "").replace(/^\/+/, "^/")
        }

        function s(t) {
            return t.replace(/\/$/, "").split("/").length
        }

        function a(t, e) {
            return s(e) - s(t)
        }

        function r(t) {
            return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).map(function (e) {
                var i, s, a, r, l = (a = o(e.route), r = [], {
                        regexp: a instanceof RegExp ? a : new RegExp(a.replace(n.PARAMETER_REGEXP, function (t, e, i) {
                            return r.push(i), n.REPLACE_VARIABLE_REGEXP
                        }).replace(n.WILDCARD_REGEXP, n.REPLACE_WILDCARD) + n.FOLLOWED_BY_SLASH_REGEXP, n.MATCH_REGEXP_FLAGS),
                        paramNames: r
                    }), c = l.regexp, d = l.paramNames, u = t.replace(/^\/+/, "/").match(c),
                    h = (i = u, 0 === (s = d).length ? null : i ? i.slice(1, i.length).reduce(function (t, e, i) {
                        return null === t && (t = {}), t[s[i]] = decodeURIComponent(e), t
                    }, null) : null);
                return !!u && {match: u, route: e, params: h}
            }).filter(function (t) {
                return t
            })
        }

        function l(t, e) {
            return r(t, e)[0] || !1
        }

        function c(t, e) {
            var i = e.map(function (e) {
                return "" === e.route || "*" === e.route ? t : t.split(new RegExp(e.route + "($|/)"))[0]
            }), n = o(t);
            return i.length > 1 ? i.reduce(function (t, e) {
                return t.length > e.length && (t = e), t
            }, i[0]) : 1 === i.length ? i[0] : n
        }

        function d(t, e, n) {
            var o, s = t, a = function (t) {
                return t.split(/\?(.*)?$/)[0]
            };
            return void 0 === n && (n = "#"), i() && !e ? s = a(t).split(n)[0] : s = a((o = t.split(n)).length > 1 ? o[1] : o[0]), s
        }

        function u(t, e, i) {
            return e && "object" === (void 0 === e ? "undefined" : h(e)) ? void (e.before ? e.before(function () {
                (!(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0]) && (t(), e.after && e.after(i))
            }, i) : e.after && (t(), e.after && e.after(i))) : void t()
        }

        Object.defineProperty(e, "__esModule", {value: !0});
        var h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
            return typeof t
        } : function (t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        n.prototype = {
            helpers: {match: l, root: c, clean: o, getOnlyURL: d}, navigate: function (t, e) {
                var i;
                return t = t || "", this._usePushState ? (i = (i = (e ? "" : this._getRoot() + "/") + t.replace(/^\/+/, "/")).replace(/([^:])(\/{2,})/g, "$1/"), history[this._historyAPIUpdateMethod]({}, "", i), this.resolve()) : "undefined" != typeof window && (t = t.replace(new RegExp("^" + this._hash), ""), window.location.href = window.location.href.replace(/#$/, "").replace(new RegExp(this._hash + ".*$"), "") + this._hash + t), this
            }, on: function () {
                for (var t = this, e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                if ("function" == typeof i[0]) this._defaultHandler = {
                    handler: i[0],
                    hooks: i[1]
                }; else if (i.length >= 2) if ("/" === i[0]) {
                    var o = i[1];
                    "object" === h(i[1]) && (o = i[1].uses), this._defaultHandler = {handler: o, hooks: i[2]}
                } else this._add(i[0], i[1], i[2]); else if ("object" === h(i[0])) {
                    Object.keys(i[0]).sort(a).forEach(function (e) {
                        t.on(e, i[0][e])
                    })
                }
                return this
            }, off: function (t) {
                return null !== this._defaultHandler && t === this._defaultHandler.handler ? this._defaultHandler = null : null !== this._notFoundHandler && t === this._notFoundHandler.handler && (this._notFoundHandler = null), this._routes = this._routes.reduce(function (e, i) {
                    return i.handler !== t && e.push(i), e
                }, []), this
            }, notFound: function (t, e) {
                return this._notFoundHandler = {handler: t, hooks: e}, this
            }, resolve: function (t) {
                var e, n, o = this, s = (t || this._cLoc()).replace(this._getRoot(), "");
                this._useHash && (s = s.replace(new RegExp("^/" + this._hash), "/"));
                var a = (t || this._cLoc()).split(/\?(.*)?$/).slice(1).join(""), r = d(s, this._useHash, this._hash);
                return !this._paused && (this._lastRouteResolved && r === this._lastRouteResolved.url && a === this._lastRouteResolved.query ? (this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.already && this._lastRouteResolved.hooks.already(this._lastRouteResolved.params), !1) : (n = l(r, this._routes)) ? (this._callLeave(), this._lastRouteResolved = {
                    url: r,
                    query: a,
                    hooks: n.route.hooks,
                    params: n.params,
                    name: n.route.name
                }, e = n.route.handler, u(function () {
                    u(function () {
                        n.route.route instanceof RegExp ? e.apply(void 0, function (t) {
                            if (Array.isArray(t)) {
                                for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
                                return i
                            }
                            return Array.from(t)
                        }(n.match.slice(1, n.match.length))) : e(n.params, a)
                    }, n.route.hooks, n.params, o._genericHooks)
                }, this._genericHooks, n.params), n) : this._defaultHandler && ("" === r || "/" === r || r === this._hash || function (t, e, n) {
                    if (i() && !e) return !1;
                    if (!t.match(n)) return !1;
                    var o = t.split(n);
                    return o.length < 2 || "" === o[1]
                }(r, this._useHash, this._hash)) ? (u(function () {
                    u(function () {
                        o._callLeave(), o._lastRouteResolved = {
                            url: r,
                            query: a,
                            hooks: o._defaultHandler.hooks
                        }, o._defaultHandler.handler(a)
                    }, o._defaultHandler.hooks)
                }, this._genericHooks), !0) : (this._notFoundHandler && u(function () {
                    u(function () {
                        o._callLeave(), o._lastRouteResolved = {
                            url: r,
                            query: a,
                            hooks: o._notFoundHandler.hooks
                        }, o._notFoundHandler.handler(a)
                    }, o._notFoundHandler.hooks)
                }, this._genericHooks), !1))
            }, destroy: function () {
                this._routes = [], this._destroyed = !0, clearTimeout(this._listeningInterval), "undefined" != typeof window && (window.removeEventListener("popstate", this._onLocationChange), window.removeEventListener("hashchange", this._onLocationChange))
            }, updatePageLinks: function () {
                var t = this;
                "undefined" != typeof document && this._findLinks().forEach(function (e) {
                    e.hasListenerAttached || (e.addEventListener("click", function (i) {
                        var n = t.getLinkPath(e);
                        t._destroyed || (i.preventDefault(), t.navigate(n.replace(/\/+$/, "").replace(/^\/+/, "/")))
                    }), e.hasListenerAttached = !0)
                })
            }, generate: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = this._routes.reduce(function (i, n) {
                        var o;
                        if (n.name === t) for (o in i = n.route, e) i = i.toString().replace(":" + o, e[o]);
                        return i
                    }, "");
                return this._useHash ? this._hash + i : i
            }, link: function (t) {
                return this._getRoot() + t
            }, pause: function () {
                var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                this._paused = t, this._historyAPIUpdateMethod = t ? "replaceState" : "pushState"
            }, resume: function () {
                this.pause(!1)
            }, historyAPIUpdateMethod: function (t) {
                return void 0 === t ? this._historyAPIUpdateMethod : (this._historyAPIUpdateMethod = t, t)
            }, disableIfAPINotAvailable: function () {
                i() || this.destroy()
            }, lastRouteResolved: function () {
                return this._lastRouteResolved
            }, getLinkPath: function (t) {
                return t.pathname || t.getAttribute("href")
            }, hooks: function (t) {
                this._genericHooks = t
            }, _add: function (t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                return "string" == typeof t && (t = encodeURI(t)), "object" === (void 0 === e ? "undefined" : h(e)) ? this._routes.push({
                    route: t,
                    handler: e.uses,
                    name: e.as,
                    hooks: i || e.hooks
                }) : this._routes.push({route: t, handler: e, hooks: i}), this._add
            }, _getRoot: function () {
                return null !== this.root ? this.root : (this.root = c(this._cLoc().split("?")[0], this._routes), this.root)
            }, _listen: function () {
                var t = this;
                if (this._usePushState) window.addEventListener("popstate", this._onLocationChange); else if ("undefined" != typeof window && "onhashchange" in window) window.addEventListener("hashchange", this._onLocationChange); else {
                    var e = this._cLoc(), i = void 0, n = void 0;
                    (n = function () {
                        i = t._cLoc(), e !== i && (e = i, t.resolve()), t._listeningInterval = setTimeout(n, 200)
                    })()
                }
            }, _cLoc: function () {
                return "undefined" != typeof window ? void 0 !== window.__NAVIGO_WINDOW_LOCATION_MOCK__ ? window.__NAVIGO_WINDOW_LOCATION_MOCK__ : o(window.location.href) : ""
            }, _findLinks: function () {
                return [].slice.call(document.querySelectorAll("[data-navigo]"))
            }, _onLocationChange: function () {
                this.resolve()
            }, _callLeave: function () {
                this._lastRouteResolved && this._lastRouteResolved.hooks && this._lastRouteResolved.hooks.leave && this._lastRouteResolved.hooks.leave()
            }
        }, n.PARAMETER_REGEXP = /([:*])(\w+)/g, n.WILDCARD_REGEXP = /\*/g, n.REPLACE_VARIABLE_REGEXP = "([^/]+)", n.REPLACE_WILDCARD = "(?:.*)", n.FOLLOWED_BY_SLASH_REGEXP = "(?:/$|$)", n.MATCH_REGEXP_FLAGS = "", e.default = n, t.exports = e.default
    }])
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["jquery"], function (t) {
        return e(t)
    }) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(0, function (t) {
    function e(t) {
        this.$container, this.constraints = null, this.__$tooltip, this.__init(t)
    }

    function i(e, i) {
        var n = !0;
        return t.each(e, function (t, o) {
            return void 0 === i[t] || e[t] !== i[t] ? (n = !1, !1) : void 0
        }), n
    }

    function n(e) {
        var i = e.attr("id"), n = i ? a.window.document.getElementById(i) : null;
        return n ? n === e[0] : t.contains(a.window.document.body, e[0])
    }

    var o = {
        animation: "fade",
        animationDuration: 350,
        content: null,
        contentAsHTML: !1,
        contentCloning: !1,
        debug: !0,
        delay: 300,
        delayTouch: [300, 500],
        functionInit: null,
        functionBefore: null,
        functionReady: null,
        functionAfter: null,
        functionFormat: null,
        IEmin: 6,
        interactive: !1,
        multiple: !1,
        parent: null,
        plugins: ["sideTip"],
        repositionOnScroll: !1,
        restoration: "none",
        selfDestruction: !0,
        theme: [],
        timer: 0,
        trackerInterval: 500,
        trackOrigin: !1,
        trackTooltip: !1,
        trigger: "hover",
        triggerClose: {click: !1, mouseleave: !1, originClick: !1, scroll: !1, tap: !1, touchleave: !1},
        triggerOpen: {click: !1, mouseenter: !1, tap: !1, touchstart: !1},
        updateAnimation: "rotate",
        zIndex: 9999999
    }, s = "undefined" != typeof window ? window : null, a = {
        hasTouchCapability: !(!s || !("ontouchstart" in s || s.DocumentTouch && s.document instanceof s.DocumentTouch || s.navigator.maxTouchPoints)),
        hasTransitions: function () {
            if (!s) return !1;
            var t = (s.document.body || s.document.documentElement).style, e = "transition",
                i = ["Moz", "Webkit", "Khtml", "O", "ms"];
            if ("string" == typeof t[e]) return !0;
            e = e.charAt(0).toUpperCase() + e.substr(1);
            for (var n = 0; n < i.length; n++) if ("string" == typeof t[i[n] + e]) return !0;
            return !1
        }(),
        IE: !1,
        semVer: "4.2.5",
        window: s
    }, r = function () {
        this.__$emitterPrivate = t({}), this.__$emitterPublic = t({}), this.__instancesLatestArr = [], this.__plugins = {}, this._env = a
    };
    r.prototype = {
        __bridge: function (e, i, n) {
            if (!i[n]) {
                var s = function () {
                };
                s.prototype = e;
                var a = new s;
                a.__init && a.__init(i), t.each(e, function (t, e) {
                    0 != t.indexOf("__") && (i[t] ? o.debug && console.log("The " + t + " method of the " + n + " plugin conflicts with another plugin or native methods") : (i[t] = function () {
                        return a[t].apply(a, Array.prototype.slice.apply(arguments))
                    }, i[t].bridged = a))
                }), i[n] = a
            }
            return this
        }, __setWindow: function (t) {
            return a.window = t, this
        }, _getRuler: function (t) {
            return new e(t)
        }, _off: function () {
            return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _on: function () {
            return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _one: function () {
            return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _plugin: function (e) {
            if ("string" == typeof e) {
                var i = e, n = null;
                return i.indexOf(".") > 0 ? n = this.__plugins[i] : t.each(this.__plugins, function (t, e) {
                    return e.name.substring(e.name.length - i.length - 1) == "." + i ? (n = e, !1) : void 0
                }), n
            }
            if (e.name.indexOf(".") < 0) throw new Error("Plugins must be namespaced");
            return this.__plugins[e.name] = e, e.core && this.__bridge(e.core, this, e.name), this
        }, _trigger: function () {
            var t = Array.prototype.slice.apply(arguments);
            return "string" == typeof t[0] && (t[0] = {type: t[0]}), this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, t), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, t), this
        }, instances: function (e) {
            var i = [];
            return t(e || ".tooltipstered").each(function () {
                var e = t(this), n = e.data("tooltipster-ns");
                n && t.each(n, function (t, n) {
                    i.push(e.data(n))
                })
            }), i
        }, instancesLatest: function () {
            return this.__instancesLatestArr
        }, off: function () {
            return this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, on: function () {
            return this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, one: function () {
            return this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, origins: function (e) {
            return t((e ? e + " " : "") + ".tooltipstered").toArray()
        }, setDefaults: function (e) {
            return t.extend(o, e), this
        }, triggerHandler: function () {
            return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }
    }, t.tooltipster = new r, t.Tooltipster = function (e, i) {
        this.__callbacks = {
            close: [],
            open: []
        }, this.__closingTime, this.__Content, this.__contentBcr, this.__destroyed = !1, this.__$emitterPrivate = t({}), this.__$emitterPublic = t({}), this.__enabled = !0, this.__garbageCollector, this.__Geometry, this.__lastPosition, this.__namespace = "tooltipster-" + Math.round(1e6 * Math.random()), this.__options, this.__$originParents, this.__pointerIsOverOrigin = !1, this.__previousThemes = [], this.__state = "closed", this.__timeouts = {
            close: [],
            open: null
        }, this.__touchEvents = [], this.__tracker = null, this._$origin, this._$tooltip, this.__init(e, i)
    }, t.Tooltipster.prototype = {
        __init: function (e, i) {
            var n = this;
            if (n._$origin = t(e), n.__options = t.extend(!0, {}, o, i), n.__optionsFormat(), !a.IE || a.IE >= n.__options.IEmin) {
                var s = null;
                if (void 0 === n._$origin.data("tooltipster-initialTitle") && (void 0 === (s = n._$origin.attr("title")) && (s = null), n._$origin.data("tooltipster-initialTitle", s)), null !== n.__options.content) n.__contentSet(n.__options.content); else {
                    var r, l = n._$origin.attr("data-tooltip-content");
                    l && (r = t(l)), r && r[0] ? n.__contentSet(r.first()) : n.__contentSet(s)
                }
                n._$origin.removeAttr("title").addClass("tooltipstered"), n.__prepareOrigin(), n.__prepareGC(), t.each(n.__options.plugins, function (t, e) {
                    n._plug(e)
                }), a.hasTouchCapability && t(a.window.document.body).on("touchmove." + n.__namespace + "-triggerOpen", function (t) {
                    n._touchRecordEvent(t)
                }), n._on("created", function () {
                    n.__prepareTooltip()
                })._on("repositioned", function (t) {
                    n.__lastPosition = t.position
                })
            } else n.__options.disabled = !0
        }, __contentInsert: function () {
            var t = this, e = t._$tooltip.find(".tooltipster-content"), i = t.__Content;
            return t._trigger({
                type: "format", content: t.__Content, format: function (t) {
                    i = t
                }
            }), t.__options.functionFormat && (i = t.__options.functionFormat.call(t, t, {origin: t._$origin[0]}, t.__Content)), "string" != typeof i || t.__options.contentAsHTML ? e.empty().append(i) : e.text(i), t
        }, __contentSet: function (e) {
            return e instanceof t && this.__options.contentCloning && (e = e.clone(!0)), this.__Content = e, this._trigger({
                type: "updated",
                content: e
            }), this
        }, __destroyError: function () {
            throw new Error("This tooltip has been destroyed and cannot execute your method call.")
        }, __geometry: function () {
            var e = this._$origin, i = this._$origin.is("area");
            if (i) {
                var n = this._$origin.parent().attr("name");
                e = t('img[usemap="#' + n + '"]')
            }
            var o = e[0].getBoundingClientRect(), s = t(a.window.document), r = t(a.window), l = e, c = {
                available: {document: null, window: null},
                document: {size: {height: s.height(), width: s.width()}},
                window: {
                    scroll: {
                        left: a.window.scrollX || a.window.document.documentElement.scrollLeft,
                        top: a.window.scrollY || a.window.document.documentElement.scrollTop
                    }, size: {height: r.height(), width: r.width()}
                },
                origin: {
                    fixedLineage: !1,
                    offset: {},
                    size: {height: o.bottom - o.top, width: o.right - o.left},
                    usemapImage: i ? e[0] : null,
                    windowOffset: {bottom: o.bottom, left: o.left, right: o.right, top: o.top}
                }
            };
            if (i) {
                var d = this._$origin.attr("shape"), u = this._$origin.attr("coords");
                if (u && (u = u.split(","), t.map(u, function (t, e) {
                    u[e] = parseInt(t)
                })), "default" != d) switch (d) {
                    case"circle":
                        var h = u[0], p = u[1], m = u[2], f = p - m, _ = h - m;
                        c.origin.size.height = 2 * m, c.origin.size.width = c.origin.size.height, c.origin.windowOffset.left += _, c.origin.windowOffset.top += f;
                        break;
                    case"rect":
                        var g = u[0], v = u[1], y = u[2], b = u[3];
                        c.origin.size.height = b - v, c.origin.size.width = y - g, c.origin.windowOffset.left += g, c.origin.windowOffset.top += v;
                        break;
                    case"poly":
                        for (var L = 0, w = 0, M = 0, x = 0, k = "even", $ = 0; $ < u.length; $++) {
                            var C = u[$];
                            "even" == k ? (C > M && (M = C, 0 === $ && (L = M)), L > C && (L = C), k = "odd") : (C > x && (x = C, 1 == $ && (w = x)), w > C && (w = C), k = "even")
                        }
                        c.origin.size.height = x - w, c.origin.size.width = M - L, c.origin.windowOffset.left += L, c.origin.windowOffset.top += w
                }
            }
            for (this._trigger({
                type: "geometry",
                edit: function (t) {
                    c.origin.size.height = t.height, c.origin.windowOffset.left = t.left, c.origin.windowOffset.top = t.top, c.origin.size.width = t.width
                },
                geometry: {
                    height: c.origin.size.height,
                    left: c.origin.windowOffset.left,
                    top: c.origin.windowOffset.top,
                    width: c.origin.size.width
                }
            }), c.origin.windowOffset.right = c.origin.windowOffset.left + c.origin.size.width, c.origin.windowOffset.bottom = c.origin.windowOffset.top + c.origin.size.height, c.origin.offset.left = c.origin.windowOffset.left + c.window.scroll.left, c.origin.offset.top = c.origin.windowOffset.top + c.window.scroll.top, c.origin.offset.bottom = c.origin.offset.top + c.origin.size.height, c.origin.offset.right = c.origin.offset.left + c.origin.size.width, c.available.document = {
                bottom: {
                    height: c.document.size.height - c.origin.offset.bottom,
                    width: c.document.size.width
                },
                left: {height: c.document.size.height, width: c.origin.offset.left},
                right: {height: c.document.size.height, width: c.document.size.width - c.origin.offset.right},
                top: {height: c.origin.offset.top, width: c.document.size.width}
            }, c.available.window = {
                bottom: {
                    height: Math.max(c.window.size.height - Math.max(c.origin.windowOffset.bottom, 0), 0),
                    width: c.window.size.width
                },
                left: {height: c.window.size.height, width: Math.max(c.origin.windowOffset.left, 0)},
                right: {
                    height: c.window.size.height,
                    width: Math.max(c.window.size.width - Math.max(c.origin.windowOffset.right, 0), 0)
                },
                top: {height: Math.max(c.origin.windowOffset.top, 0), width: c.window.size.width}
            }; "html" != l[0].tagName.toLowerCase();) {
                if ("fixed" == l.css("position")) {
                    c.origin.fixedLineage = !0;
                    break
                }
                l = l.parent()
            }
            return c
        }, __optionsFormat: function () {
            return "number" == typeof this.__options.animationDuration && (this.__options.animationDuration = [this.__options.animationDuration, this.__options.animationDuration]), "number" == typeof this.__options.delay && (this.__options.delay = [this.__options.delay, this.__options.delay]), "number" == typeof this.__options.delayTouch && (this.__options.delayTouch = [this.__options.delayTouch, this.__options.delayTouch]), "string" == typeof this.__options.theme && (this.__options.theme = [this.__options.theme]), null === this.__options.parent ? this.__options.parent = t(a.window.document.body) : "string" == typeof this.__options.parent && (this.__options.parent = t(this.__options.parent)), "hover" == this.__options.trigger ? (this.__options.triggerOpen = {
                mouseenter: !0,
                touchstart: !0
            }, this.__options.triggerClose = {
                mouseleave: !0,
                originClick: !0,
                touchleave: !0
            }) : "click" == this.__options.trigger && (this.__options.triggerOpen = {
                click: !0,
                tap: !0
            }, this.__options.triggerClose = {click: !0, tap: !0}), this._trigger("options"), this
        }, __prepareGC: function () {
            var e = this;
            return e.__options.selfDestruction ? e.__garbageCollector = setInterval(function () {
                var i = (new Date).getTime();
                e.__touchEvents = t.grep(e.__touchEvents, function (t, e) {
                    return i - t.time > 6e4
                }), n(e._$origin) || e.close(function () {
                    e.destroy()
                })
            }, 2e4) : clearInterval(e.__garbageCollector), e
        }, __prepareOrigin: function () {
            var t = this;
            if (t._$origin.off("." + t.__namespace + "-triggerOpen"), a.hasTouchCapability && t._$origin.on("touchstart." + t.__namespace + "-triggerOpen touchend." + t.__namespace + "-triggerOpen touchcancel." + t.__namespace + "-triggerOpen", function (e) {
                t._touchRecordEvent(e)
            }), t.__options.triggerOpen.click || t.__options.triggerOpen.tap && a.hasTouchCapability) {
                var e = "";
                t.__options.triggerOpen.click && (e += "click." + t.__namespace + "-triggerOpen "), t.__options.triggerOpen.tap && a.hasTouchCapability && (e += "touchend." + t.__namespace + "-triggerOpen"), t._$origin.on(e, function (e) {
                    t._touchIsMeaningfulEvent(e) && t._open(e)
                })
            }
            if (t.__options.triggerOpen.mouseenter || t.__options.triggerOpen.touchstart && a.hasTouchCapability) {
                e = "";
                t.__options.triggerOpen.mouseenter && (e += "mouseenter." + t.__namespace + "-triggerOpen "), t.__options.triggerOpen.touchstart && a.hasTouchCapability && (e += "touchstart." + t.__namespace + "-triggerOpen"), t._$origin.on(e, function (e) {
                    !t._touchIsTouchEvent(e) && t._touchIsEmulatedEvent(e) || (t.__pointerIsOverOrigin = !0, t._openShortly(e))
                })
            }
            if (t.__options.triggerClose.mouseleave || t.__options.triggerClose.touchleave && a.hasTouchCapability) {
                e = "";
                t.__options.triggerClose.mouseleave && (e += "mouseleave." + t.__namespace + "-triggerOpen "), t.__options.triggerClose.touchleave && a.hasTouchCapability && (e += "touchend." + t.__namespace + "-triggerOpen touchcancel." + t.__namespace + "-triggerOpen"), t._$origin.on(e, function (e) {
                    t._touchIsMeaningfulEvent(e) && (t.__pointerIsOverOrigin = !1)
                })
            }
            return t
        }, __prepareTooltip: function () {
            var e = this, i = e.__options.interactive ? "auto" : "";
            return e._$tooltip.attr("id", e.__namespace).css({
                "pointer-events": i,
                zIndex: e.__options.zIndex
            }), t.each(e.__previousThemes, function (t, i) {
                e._$tooltip.removeClass(i)
            }), t.each(e.__options.theme, function (t, i) {
                e._$tooltip.addClass(i)
            }), e.__previousThemes = t.merge([], e.__options.theme), e
        }, __scrollHandler: function (e) {
            var i = this;
            if (i.__options.triggerClose.scroll) i._close(e); else if (n(i._$origin) && n(i._$tooltip)) {
                var o = null;
                if (e.target === a.window.document) i.__Geometry.origin.fixedLineage || i.__options.repositionOnScroll && i.reposition(e); else {
                    o = i.__geometry();
                    var s = !1;
                    if ("fixed" != i._$origin.css("position") && i.__$originParents.each(function (e, i) {
                        var n = t(i), a = n.css("overflow-x"), r = n.css("overflow-y");
                        if ("visible" != a || "visible" != r) {
                            var l = i.getBoundingClientRect();
                            if ("visible" != a && (o.origin.windowOffset.left < l.left || o.origin.windowOffset.right > l.right)) return s = !0, !1;
                            if ("visible" != r && (o.origin.windowOffset.top < l.top || o.origin.windowOffset.bottom > l.bottom)) return s = !0, !1
                        }
                        return "fixed" != n.css("position") && void 0
                    }), s) i._$tooltip.css("visibility", "hidden"); else if (i._$tooltip.css("visibility", "visible"), i.__options.repositionOnScroll) i.reposition(e); else {
                        var r = o.origin.offset.left - i.__Geometry.origin.offset.left,
                            l = o.origin.offset.top - i.__Geometry.origin.offset.top;
                        i._$tooltip.css({left: i.__lastPosition.coord.left + r, top: i.__lastPosition.coord.top + l})
                    }
                }
                i._trigger({type: "scroll", event: e, geo: o})
            }
            return i
        }, __stateSet: function (t) {
            return this.__state = t, this._trigger({type: "state", state: t}), this
        }, __timeoutsClear: function () {
            return clearTimeout(this.__timeouts.open), this.__timeouts.open = null, t.each(this.__timeouts.close, function (t, e) {
                clearTimeout(e)
            }), this.__timeouts.close = [], this
        }, __trackerStart: function () {
            var t = this, e = t._$tooltip.find(".tooltipster-content");
            return t.__options.trackTooltip && (t.__contentBcr = e[0].getBoundingClientRect()), t.__tracker = setInterval(function () {
                if (n(t._$origin) && n(t._$tooltip)) {
                    if (t.__options.trackOrigin) {
                        var o = t.__geometry(), s = !1;
                        i(o.origin.size, t.__Geometry.origin.size) && (t.__Geometry.origin.fixedLineage ? i(o.origin.windowOffset, t.__Geometry.origin.windowOffset) && (s = !0) : i(o.origin.offset, t.__Geometry.origin.offset) && (s = !0)), s || (t.__options.triggerClose.mouseleave ? t._close() : t.reposition())
                    }
                    if (t.__options.trackTooltip) {
                        var a = e[0].getBoundingClientRect();
                        a.height === t.__contentBcr.height && a.width === t.__contentBcr.width || (t.reposition(), t.__contentBcr = a)
                    }
                } else t._close()
            }, t.__options.trackerInterval), t
        }, _close: function (e, i, n) {
            var o = this, s = !0;
            if (o._trigger({
                type: "close", event: e, stop: function () {
                    s = !1
                }
            }), s || n) {
                i && o.__callbacks.close.push(i), o.__callbacks.open = [], o.__timeoutsClear();
                var r = function () {
                    t.each(o.__callbacks.close, function (t, i) {
                        i.call(o, o, {event: e, origin: o._$origin[0]})
                    }), o.__callbacks.close = []
                };
                if ("closed" != o.__state) {
                    var l = !0, c = (new Date).getTime() + o.__options.animationDuration[1];
                    if ("disappearing" == o.__state && c > o.__closingTime && o.__options.animationDuration[1] > 0 && (l = !1), l) {
                        o.__closingTime = c, "disappearing" != o.__state && o.__stateSet("disappearing");
                        var d = function () {
                            clearInterval(o.__tracker), o._trigger({
                                type: "closing",
                                event: e
                            }), o._$tooltip.off("." + o.__namespace + "-triggerClose").removeClass("tooltipster-dying"), t(a.window).off("." + o.__namespace + "-triggerClose"), o.__$originParents.each(function (e, i) {
                                t(i).off("scroll." + o.__namespace + "-triggerClose")
                            }), o.__$originParents = null, t(a.window.document.body).off("." + o.__namespace + "-triggerClose"), o._$origin.off("." + o.__namespace + "-triggerClose"), o._off("dismissable"), o.__stateSet("closed"), o._trigger({
                                type: "after",
                                event: e
                            }), o.__options.functionAfter && o.__options.functionAfter.call(o, o, {
                                event: e,
                                origin: o._$origin[0]
                            }), r()
                        };
                        a.hasTransitions ? (o._$tooltip.css({
                            "-moz-animation-duration": o.__options.animationDuration[1] + "ms",
                            "-ms-animation-duration": o.__options.animationDuration[1] + "ms",
                            "-o-animation-duration": o.__options.animationDuration[1] + "ms",
                            "-webkit-animation-duration": o.__options.animationDuration[1] + "ms",
                            "animation-duration": o.__options.animationDuration[1] + "ms",
                            "transition-duration": o.__options.animationDuration[1] + "ms"
                        }), o._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"), o.__options.animationDuration[1] > 0 && o._$tooltip.delay(o.__options.animationDuration[1]), o._$tooltip.queue(d)) : o._$tooltip.stop().fadeOut(o.__options.animationDuration[1], d)
                    }
                } else r()
            }
            return o
        }, _off: function () {
            return this.__$emitterPrivate.off.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _on: function () {
            return this.__$emitterPrivate.on.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _one: function () {
            return this.__$emitterPrivate.one.apply(this.__$emitterPrivate, Array.prototype.slice.apply(arguments)), this
        }, _open: function (e, i) {
            var o = this;
            if (!o.__destroying && n(o._$origin) && o.__enabled) {
                var s = !0;
                if ("closed" == o.__state && (o._trigger({
                    type: "before", event: e, stop: function () {
                        s = !1
                    }
                }), s && o.__options.functionBefore && (s = o.__options.functionBefore.call(o, o, {
                    event: e,
                    origin: o._$origin[0]
                }))), !1 !== s && null !== o.__Content) {
                    i && o.__callbacks.open.push(i), o.__callbacks.close = [], o.__timeoutsClear();
                    var r, l = function () {
                        "stable" != o.__state && o.__stateSet("stable"), t.each(o.__callbacks.open, function (t, e) {
                            e.call(o, o, {origin: o._$origin[0], tooltip: o._$tooltip[0]})
                        }), o.__callbacks.open = []
                    };
                    if ("closed" !== o.__state) r = 0, "disappearing" === o.__state ? (o.__stateSet("appearing"), a.hasTransitions ? (o._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"), o.__options.animationDuration[0] > 0 && o._$tooltip.delay(o.__options.animationDuration[0]), o._$tooltip.queue(l)) : o._$tooltip.stop().fadeIn(l)) : "stable" == o.__state && l(); else {
                        if (o.__stateSet("appearing"), r = o.__options.animationDuration[0], o.__contentInsert(), o.reposition(e, !0), a.hasTransitions ? (o._$tooltip.addClass("tooltipster-" + o.__options.animation).addClass("tooltipster-initial").css({
                            "-moz-animation-duration": o.__options.animationDuration[0] + "ms",
                            "-ms-animation-duration": o.__options.animationDuration[0] + "ms",
                            "-o-animation-duration": o.__options.animationDuration[0] + "ms",
                            "-webkit-animation-duration": o.__options.animationDuration[0] + "ms",
                            "animation-duration": o.__options.animationDuration[0] + "ms",
                            "transition-duration": o.__options.animationDuration[0] + "ms"
                        }), setTimeout(function () {
                            "closed" != o.__state && (o._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"), o.__options.animationDuration[0] > 0 && o._$tooltip.delay(o.__options.animationDuration[0]), o._$tooltip.queue(l))
                        }, 0)) : o._$tooltip.css("display", "none").fadeIn(o.__options.animationDuration[0], l), o.__trackerStart(), t(a.window).on("resize." + o.__namespace + "-triggerClose", function (e) {
                            var i = t(document.activeElement);
                            (i.is("input") || i.is("textarea")) && t.contains(o._$tooltip[0], i[0]) || o.reposition(e)
                        }).on("scroll." + o.__namespace + "-triggerClose", function (t) {
                            o.__scrollHandler(t)
                        }), o.__$originParents = o._$origin.parents(), o.__$originParents.each(function (e, i) {
                            t(i).on("scroll." + o.__namespace + "-triggerClose", function (t) {
                                o.__scrollHandler(t)
                            })
                        }), o.__options.triggerClose.mouseleave || o.__options.triggerClose.touchleave && a.hasTouchCapability) {
                            o._on("dismissable", function (t) {
                                t.dismissable ? t.delay ? (h = setTimeout(function () {
                                    o._close(t.event)
                                }, t.delay), o.__timeouts.close.push(h)) : o._close(t) : clearTimeout(h)
                            });
                            var c = o._$origin, d = "", u = "", h = null;
                            o.__options.interactive && (c = c.add(o._$tooltip)), o.__options.triggerClose.mouseleave && (d += "mouseenter." + o.__namespace + "-triggerClose ", u += "mouseleave." + o.__namespace + "-triggerClose "), o.__options.triggerClose.touchleave && a.hasTouchCapability && (d += "touchstart." + o.__namespace + "-triggerClose", u += "touchend." + o.__namespace + "-triggerClose touchcancel." + o.__namespace + "-triggerClose"), c.on(u, function (t) {
                                if (o._touchIsTouchEvent(t) || !o._touchIsEmulatedEvent(t)) {
                                    var e = "mouseleave" == t.type ? o.__options.delay : o.__options.delayTouch;
                                    o._trigger({delay: e[1], dismissable: !0, event: t, type: "dismissable"})
                                }
                            }).on(d, function (t) {
                                !o._touchIsTouchEvent(t) && o._touchIsEmulatedEvent(t) || o._trigger({
                                    dismissable: !1,
                                    event: t,
                                    type: "dismissable"
                                })
                            })
                        }
                        o.__options.triggerClose.originClick && o._$origin.on("click." + o.__namespace + "-triggerClose", function (t) {
                            o._touchIsTouchEvent(t) || o._touchIsEmulatedEvent(t) || o._close(t)
                        }), (o.__options.triggerClose.click || o.__options.triggerClose.tap && a.hasTouchCapability) && setTimeout(function () {
                            if ("closed" != o.__state) {
                                var e = "", i = t(a.window.document.body);
                                o.__options.triggerClose.click && (e += "click." + o.__namespace + "-triggerClose "), o.__options.triggerClose.tap && a.hasTouchCapability && (e += "touchend." + o.__namespace + "-triggerClose"), i.on(e, function (e) {
                                    o._touchIsMeaningfulEvent(e) && (o._touchRecordEvent(e), o.__options.interactive && t.contains(o._$tooltip[0], e.target) || o._close(e))
                                }), o.__options.triggerClose.tap && a.hasTouchCapability && i.on("touchstart." + o.__namespace + "-triggerClose", function (t) {
                                    o._touchRecordEvent(t)
                                })
                            }
                        }, 0), o._trigger("ready"), o.__options.functionReady && o.__options.functionReady.call(o, o, {
                            origin: o._$origin[0],
                            tooltip: o._$tooltip[0]
                        })
                    }
                    if (o.__options.timer > 0) {
                        h = setTimeout(function () {
                            o._close()
                        }, o.__options.timer + r);
                        o.__timeouts.close.push(h)
                    }
                }
            }
            return o
        }, _openShortly: function (t) {
            var e = this, i = !0;
            if ("stable" != e.__state && "appearing" != e.__state && !e.__timeouts.open && (e._trigger({
                type: "start",
                event: t,
                stop: function () {
                    i = !1
                }
            }), i)) {
                var n = 0 == t.type.indexOf("touch") ? e.__options.delayTouch : e.__options.delay;
                n[0] ? e.__timeouts.open = setTimeout(function () {
                    e.__timeouts.open = null, e.__pointerIsOverOrigin && e._touchIsMeaningfulEvent(t) ? (e._trigger("startend"), e._open(t)) : e._trigger("startcancel")
                }, n[0]) : (e._trigger("startend"), e._open(t))
            }
            return e
        }, _optionsExtract: function (e, i) {
            var n = this, o = t.extend(!0, {}, i), s = n.__options[e];
            return s || (s = {}, t.each(i, function (t, e) {
                var i = n.__options[t];
                void 0 !== i && (s[t] = i)
            })), t.each(o, function (e, i) {
                void 0 !== s[e] && ("object" != typeof i || i instanceof Array || null == i || "object" != typeof s[e] || s[e] instanceof Array || null == s[e] ? o[e] = s[e] : t.extend(o[e], s[e]))
            }), o
        }, _plug: function (e) {
            var i = t.tooltipster._plugin(e);
            if (!i) throw new Error('The "' + e + '" plugin is not defined');
            return i.instance && t.tooltipster.__bridge(i.instance, this, i.name), this
        }, _touchIsEmulatedEvent: function (t) {
            for (var e = !1, i = (new Date).getTime(), n = this.__touchEvents.length - 1; n >= 0; n--) {
                var o = this.__touchEvents[n];
                if (!(i - o.time < 500)) break;
                o.target === t.target && (e = !0)
            }
            return e
        }, _touchIsMeaningfulEvent: function (t) {
            return this._touchIsTouchEvent(t) && !this._touchSwiped(t.target) || !this._touchIsTouchEvent(t) && !this._touchIsEmulatedEvent(t)
        }, _touchIsTouchEvent: function (t) {
            return 0 == t.type.indexOf("touch")
        }, _touchRecordEvent: function (t) {
            return this._touchIsTouchEvent(t) && (t.time = (new Date).getTime(), this.__touchEvents.push(t)), this
        }, _touchSwiped: function (t) {
            for (var e = !1, i = this.__touchEvents.length - 1; i >= 0; i--) {
                var n = this.__touchEvents[i];
                if ("touchmove" == n.type) {
                    e = !0;
                    break
                }
                if ("touchstart" == n.type && t === n.target) break
            }
            return e
        }, _trigger: function () {
            var e = Array.prototype.slice.apply(arguments);
            return "string" == typeof e[0] && (e[0] = {type: e[0]}), e[0].instance = this, e[0].origin = this._$origin ? this._$origin[0] : null, e[0].tooltip = this._$tooltip ? this._$tooltip[0] : null, this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate, e), t.tooltipster._trigger.apply(t.tooltipster, e), this.__$emitterPublic.trigger.apply(this.__$emitterPublic, e), this
        }, _unplug: function (e) {
            var i = this;
            if (i[e]) {
                var n = t.tooltipster._plugin(e);
                n.instance && t.each(n.instance, function (t, n) {
                    i[t] && i[t].bridged === i[e] && delete i[t]
                }), i[e].__destroy && i[e].__destroy(), delete i[e]
            }
            return i
        }, close: function (t) {
            return this.__destroyed ? this.__destroyError() : this._close(null, t), this
        }, content: function (t) {
            var e = this;
            if (void 0 === t) return e.__Content;
            if (e.__destroyed) e.__destroyError(); else if (e.__contentSet(t), null !== e.__Content) {
                if ("closed" !== e.__state && (e.__contentInsert(), e.reposition(), e.__options.updateAnimation)) if (a.hasTransitions) {
                    var i = e.__options.updateAnimation;
                    e._$tooltip.addClass("tooltipster-update-" + i), setTimeout(function () {
                        "closed" != e.__state && e._$tooltip.removeClass("tooltipster-update-" + i)
                    }, 1e3)
                } else e._$tooltip.fadeTo(200, .5, function () {
                    "closed" != e.__state && e._$tooltip.fadeTo(200, 1)
                })
            } else e._close();
            return e
        }, destroy: function () {
            var e = this;
            if (e.__destroyed) e.__destroyError(); else {
                "closed" != e.__state ? e.option("animationDuration", 0)._close(null, null, !0) : e.__timeoutsClear(), e._trigger("destroy"), e.__destroyed = !0, e._$origin.removeData(e.__namespace).off("." + e.__namespace + "-triggerOpen"), t(a.window.document.body).off("." + e.__namespace + "-triggerOpen");
                var i = e._$origin.data("tooltipster-ns");
                if (i) if (1 === i.length) {
                    var n = null;
                    "previous" == e.__options.restoration ? n = e._$origin.data("tooltipster-initialTitle") : "current" == e.__options.restoration && (n = "string" == typeof e.__Content ? e.__Content : t("<div></div>").append(e.__Content).html()), n && e._$origin.attr("title", n), e._$origin.removeClass("tooltipstered"), e._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")
                } else i = t.grep(i, function (t, i) {
                    return t !== e.__namespace
                }), e._$origin.data("tooltipster-ns", i);
                e._trigger("destroyed"), e._off(), e.off(), e.__Content = null, e.__$emitterPrivate = null, e.__$emitterPublic = null, e.__options.parent = null, e._$origin = null, e._$tooltip = null, t.tooltipster.__instancesLatestArr = t.grep(t.tooltipster.__instancesLatestArr, function (t, i) {
                    return e !== t
                }), clearInterval(e.__garbageCollector)
            }
            return e
        }, disable: function () {
            return this.__destroyed ? (this.__destroyError(), this) : (this._close(), this.__enabled = !1, this)
        }, elementOrigin: function () {
            return this.__destroyed ? void this.__destroyError() : this._$origin[0]
        }, elementTooltip: function () {
            return this._$tooltip ? this._$tooltip[0] : null
        }, enable: function () {
            return this.__enabled = !0, this
        }, hide: function (t) {
            return this.close(t)
        }, instance: function () {
            return this
        }, off: function () {
            return this.__destroyed || this.__$emitterPublic.off.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, on: function () {
            return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.on.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, one: function () {
            return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.one.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }, open: function (t) {
            return this.__destroyed ? this.__destroyError() : this._open(null, t), this
        }, option: function (e, i) {
            return void 0 === i ? this.__options[e] : (this.__destroyed ? this.__destroyError() : (this.__options[e] = i, this.__optionsFormat(), t.inArray(e, ["trigger", "triggerClose", "triggerOpen"]) >= 0 && this.__prepareOrigin(), "selfDestruction" === e && this.__prepareGC()), this)
        }, reposition: function (t, e) {
            var i = this;
            return i.__destroyed ? i.__destroyError() : "closed" != i.__state && n(i._$origin) && (e || n(i._$tooltip)) && (e || i._$tooltip.detach(), i.__Geometry = i.__geometry(), i._trigger({
                type: "reposition",
                event: t,
                helper: {geo: i.__Geometry}
            })), i
        }, show: function (t) {
            return this.open(t)
        }, status: function () {
            return {
                destroyed: this.__destroyed,
                enabled: this.__enabled,
                open: "closed" !== this.__state,
                state: this.__state
            }
        }, triggerHandler: function () {
            return this.__destroyed ? this.__destroyError() : this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic, Array.prototype.slice.apply(arguments)), this
        }
    }, t.fn.tooltipster = function () {
        var e = Array.prototype.slice.apply(arguments),
            i = "You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";
        if (0 === this.length) return this;
        if ("string" == typeof e[0]) {
            var n = "#*$~&";
            return this.each(function () {
                var o = t(this).data("tooltipster-ns"), s = o ? t(this).data(o[0]) : null;
                if (!s) throw new Error("You called Tooltipster's \"" + e[0] + '" method on an uninitialized element');
                if ("function" != typeof s[e[0]]) throw new Error('Unknown method "' + e[0] + '"');
                this.length > 1 && "content" == e[0] && (e[1] instanceof t || "object" == typeof e[1] && null != e[1] && e[1].tagName) && !s.__options.contentCloning && s.__options.debug && console.log(i);
                var a = s[e[0]](e[1], e[2]);
                return a !== s || "instance" === e[0] ? (n = a, !1) : void 0
            }), "#*$~&" !== n ? n : this
        }
        t.tooltipster.__instancesLatestArr = [];
        var s = e[0] && void 0 !== e[0].multiple, a = s && e[0].multiple || !s && o.multiple,
            r = e[0] && void 0 !== e[0].content, l = r && e[0].content || !r && o.content,
            c = e[0] && void 0 !== e[0].contentCloning, d = c && e[0].contentCloning || !c && o.contentCloning,
            u = e[0] && void 0 !== e[0].debug, h = u && e[0].debug || !u && o.debug;
        return this.length > 1 && (l instanceof t || "object" == typeof l && null != l && l.tagName) && !d && h && console.log(i), this.each(function () {
            var i = !1, n = t(this), o = n.data("tooltipster-ns"), s = null;
            o ? a ? i = !0 : h && (console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."), console.log(this)) : i = !0, i && (s = new t.Tooltipster(this, e[0]), o || (o = []), o.push(s.__namespace), n.data("tooltipster-ns", o), n.data(s.__namespace, s), s.__options.functionInit && s.__options.functionInit.call(s, s, {origin: this}), s._trigger("init")), t.tooltipster.__instancesLatestArr.push(s)
        }), this
    }, e.prototype = {
        __init: function (e) {
            this.__$tooltip = e, this.__$tooltip.css({
                left: 0,
                overflow: "hidden",
                position: "absolute",
                top: 0
            }).find(".tooltipster-content").css("overflow", "auto"), this.$container = t('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(a.window.document.body)
        }, __forceRedraw: function () {
            var t = this.__$tooltip.parent();
            this.__$tooltip.detach(), this.__$tooltip.appendTo(t)
        }, constrain: function (t, e) {
            return this.constraints = {width: t, height: e}, this.__$tooltip.css({
                display: "block",
                height: "",
                overflow: "auto",
                width: t
            }), this
        }, destroy: function () {
            this.__$tooltip.detach().find(".tooltipster-content").css({
                display: "",
                overflow: ""
            }), this.$container.remove()
        }, free: function () {
            return this.constraints = null, this.__$tooltip.css({
                display: "",
                height: "",
                overflow: "visible",
                width: ""
            }), this
        }, measure: function () {
            this.__forceRedraw();
            var t = this.__$tooltip[0].getBoundingClientRect(),
                e = {size: {height: t.height || t.bottom - t.top, width: t.width || t.right - t.left}};
            if (this.constraints) {
                var i = this.__$tooltip.find(".tooltipster-content"), n = this.__$tooltip.outerHeight(),
                    o = i[0].getBoundingClientRect(), s = {
                        height: n <= this.constraints.height,
                        width: t.width <= this.constraints.width && o.width >= i[0].scrollWidth - 1
                    };
                e.fits = s.height && s.width
            }
            return a.IE && a.IE <= 11 && e.size.width !== a.window.document.documentElement.clientWidth && (e.size.width = Math.ceil(e.size.width) + 1), e
        }
    };
    var l = navigator.userAgent.toLowerCase();
    -1 != l.indexOf("msie") ? a.IE = parseInt(l.split("msie")[1]) : -1 !== l.toLowerCase().indexOf("trident") && -1 !== l.indexOf(" rv:11") ? a.IE = 11 : -1 != l.toLowerCase().indexOf("edge/") && (a.IE = parseInt(l.toLowerCase().split("edge/")[1]));
    var c = "tooltipster.sideTip";
    return t.tooltipster._plugin({
        name: c, instance: {
            __defaults: function () {
                return {
                    arrow: !0,
                    distance: 6,
                    functionPosition: null,
                    maxWidth: null,
                    minIntersection: 16,
                    minWidth: 0,
                    position: null,
                    side: "top",
                    viewportAware: !0
                }
            }, __init: function (t) {
                var e = this;
                e.__instance = t, e.__namespace = "tooltipster-sideTip-" + Math.round(1e6 * Math.random()), e.__previousState = "closed", e.__options, e.__optionsFormat(), e.__instance._on("state." + e.__namespace, function (t) {
                    "closed" == t.state ? e.__close() : "appearing" == t.state && "closed" == e.__previousState && e.__create(), e.__previousState = t.state
                }), e.__instance._on("options." + e.__namespace, function () {
                    e.__optionsFormat()
                }), e.__instance._on("reposition." + e.__namespace, function (t) {
                    e.__reposition(t.event, t.helper)
                })
            }, __close: function () {
                this.__instance.content() instanceof t && this.__instance.content().detach(), this.__instance._$tooltip.remove(), this.__instance._$tooltip = null
            }, __create: function () {
                var e = t('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');
                this.__options.arrow || e.find(".tooltipster-box").css("margin", 0).end().find(".tooltipster-arrow").hide(), this.__options.minWidth && e.css("min-width", this.__options.minWidth + "px"), this.__options.maxWidth && e.css("max-width", this.__options.maxWidth + "px"), this.__instance._$tooltip = e, this.__instance._trigger("created")
            }, __destroy: function () {
                this.__instance._off("." + self.__namespace)
            }, __optionsFormat: function () {
                var e = this;
                if (e.__options = e.__instance._optionsExtract(c, e.__defaults()), e.__options.position && (e.__options.side = e.__options.position), "object" != typeof e.__options.distance && (e.__options.distance = [e.__options.distance]), e.__options.distance.length < 4 && (void 0 === e.__options.distance[1] && (e.__options.distance[1] = e.__options.distance[0]), void 0 === e.__options.distance[2] && (e.__options.distance[2] = e.__options.distance[0]), void 0 === e.__options.distance[3] && (e.__options.distance[3] = e.__options.distance[1]), e.__options.distance = {
                    top: e.__options.distance[0],
                    right: e.__options.distance[1],
                    bottom: e.__options.distance[2],
                    left: e.__options.distance[3]
                }), "string" == typeof e.__options.side) {
                    e.__options.side = [e.__options.side, {
                        top: "bottom",
                        right: "left",
                        bottom: "top",
                        left: "right"
                    }[e.__options.side]], "left" == e.__options.side[0] || "right" == e.__options.side[0] ? e.__options.side.push("top", "bottom") : e.__options.side.push("right", "left")
                }
                6 === t.tooltipster._env.IE && !0 !== e.__options.arrow && (e.__options.arrow = !1)
            }, __reposition: function (e, i) {
                var n, o = this, s = o.__targetFind(i), a = [];
                o.__instance._$tooltip.detach();
                var r = o.__instance._$tooltip.clone(), l = t.tooltipster._getRuler(r), c = !1,
                    d = o.__instance.option("animation");
                switch (d && r.removeClass("tooltipster-" + d), t.each(["window", "document"], function (n, d) {
                    var u = null;
                    if (o.__instance._trigger({
                        container: d, helper: i, satisfied: c, takeTest: function (t) {
                            u = t
                        }, results: a, type: "positionTest"
                    }), 1 == u || 0 != u && 0 == c && ("window" != d || o.__options.viewportAware)) for (n = 0; n < o.__options.side.length; n++) {
                        var h = {horizontal: 0, vertical: 0}, p = o.__options.side[n];
                        "top" == p || "bottom" == p ? h.vertical = o.__options.distance[p] : h.horizontal = o.__options.distance[p], o.__sideChange(r, p), t.each(["natural", "constrained"], function (t, n) {
                            if (u = null, o.__instance._trigger({
                                container: d,
                                event: e,
                                helper: i,
                                mode: n,
                                results: a,
                                satisfied: c,
                                side: p,
                                takeTest: function (t) {
                                    u = t
                                },
                                type: "positionTest"
                            }), 1 == u || 0 != u && 0 == c) {
                                var r = {
                                        container: d,
                                        distance: h,
                                        fits: null,
                                        mode: n,
                                        outerSize: null,
                                        side: p,
                                        size: null,
                                        target: s[p],
                                        whole: null
                                    },
                                    m = ("natural" == n ? l.free() : l.constrain(i.geo.available[d][p].width - h.horizontal, i.geo.available[d][p].height - h.vertical)).measure();
                                if (r.size = m.size, r.outerSize = {
                                    height: m.size.height + h.vertical,
                                    width: m.size.width + h.horizontal
                                }, "natural" == n ? i.geo.available[d][p].width >= r.outerSize.width && i.geo.available[d][p].height >= r.outerSize.height ? r.fits = !0 : r.fits = !1 : r.fits = m.fits, "window" == d && (r.fits ? r.whole = "top" == p || "bottom" == p ? i.geo.origin.windowOffset.right >= o.__options.minIntersection && i.geo.window.size.width - i.geo.origin.windowOffset.left >= o.__options.minIntersection : i.geo.origin.windowOffset.bottom >= o.__options.minIntersection && i.geo.window.size.height - i.geo.origin.windowOffset.top >= o.__options.minIntersection : r.whole = !1), a.push(r), r.whole) c = !0; else if ("natural" == r.mode && (r.fits || r.size.width <= i.geo.available[d][p].width)) return !1
                            }
                        })
                    }
                }), o.__instance._trigger({
                    edit: function (t) {
                        a = t
                    }, event: e, helper: i, results: a, type: "positionTested"
                }), a.sort(function (t, e) {
                    if (t.whole && !e.whole) return -1;
                    if (!t.whole && e.whole) return 1;
                    if (t.whole && e.whole) {
                        var i = o.__options.side.indexOf(t.side);
                        return (n = o.__options.side.indexOf(e.side)) > i ? -1 : i > n ? 1 : "natural" == t.mode ? -1 : 1
                    }
                    if (t.fits && !e.fits) return -1;
                    if (!t.fits && e.fits) return 1;
                    if (t.fits && e.fits) {
                        var n;
                        i = o.__options.side.indexOf(t.side);
                        return (n = o.__options.side.indexOf(e.side)) > i ? -1 : i > n ? 1 : "natural" == t.mode ? -1 : 1
                    }
                    return "document" == t.container && "bottom" == t.side && "natural" == t.mode ? -1 : 1
                }), (n = a[0]).coord = {}, n.side) {
                    case"left":
                    case"right":
                        n.coord.top = Math.floor(n.target - n.size.height / 2);
                        break;
                    case"bottom":
                    case"top":
                        n.coord.left = Math.floor(n.target - n.size.width / 2)
                }
                switch (n.side) {
                    case"left":
                        n.coord.left = i.geo.origin.windowOffset.left - n.outerSize.width;
                        break;
                    case"right":
                        n.coord.left = i.geo.origin.windowOffset.right + n.distance.horizontal;
                        break;
                    case"top":
                        n.coord.top = i.geo.origin.windowOffset.top - n.outerSize.height;
                        break;
                    case"bottom":
                        n.coord.top = i.geo.origin.windowOffset.bottom + n.distance.vertical
                }
                "window" == n.container ? "top" == n.side || "bottom" == n.side ? n.coord.left < 0 ? i.geo.origin.windowOffset.right - this.__options.minIntersection >= 0 ? n.coord.left = 0 : n.coord.left = i.geo.origin.windowOffset.right - this.__options.minIntersection - 1 : n.coord.left > i.geo.window.size.width - n.size.width && (i.geo.origin.windowOffset.left + this.__options.minIntersection <= i.geo.window.size.width ? n.coord.left = i.geo.window.size.width - n.size.width : n.coord.left = i.geo.origin.windowOffset.left + this.__options.minIntersection + 1 - n.size.width) : n.coord.top < 0 ? i.geo.origin.windowOffset.bottom - this.__options.minIntersection >= 0 ? n.coord.top = 0 : n.coord.top = i.geo.origin.windowOffset.bottom - this.__options.minIntersection - 1 : n.coord.top > i.geo.window.size.height - n.size.height && (i.geo.origin.windowOffset.top + this.__options.minIntersection <= i.geo.window.size.height ? n.coord.top = i.geo.window.size.height - n.size.height : n.coord.top = i.geo.origin.windowOffset.top + this.__options.minIntersection + 1 - n.size.height) : (n.coord.left > i.geo.window.size.width - n.size.width && (n.coord.left = i.geo.window.size.width - n.size.width), n.coord.left < 0 && (n.coord.left = 0)), o.__sideChange(r, n.side), i.tooltipClone = r[0], i.tooltipParent = o.__instance.option("parent").parent[0], i.mode = n.mode, i.whole = n.whole, i.origin = o.__instance._$origin[0], i.tooltip = o.__instance._$tooltip[0], delete n.container, delete n.fits, delete n.mode, delete n.outerSize, delete n.whole, n.distance = n.distance.horizontal || n.distance.vertical;
                var u, h, p, m = t.extend(!0, {}, n);
                if (o.__instance._trigger({
                    edit: function (t) {
                        n = t
                    }, event: e, helper: i, position: m, type: "position"
                }), o.__options.functionPosition) {
                    var f = o.__options.functionPosition.call(o, o.__instance, i, m);
                    f && (n = f)
                }
                l.destroy(), "top" == n.side || "bottom" == n.side ? (u = {
                    prop: "left",
                    val: n.target - n.coord.left
                }, h = n.size.width - this.__options.minIntersection) : (u = {
                    prop: "top",
                    val: n.target - n.coord.top
                }, h = n.size.height - this.__options.minIntersection), u.val < this.__options.minIntersection ? u.val = this.__options.minIntersection : u.val > h && (u.val = h), p = i.geo.origin.fixedLineage ? i.geo.origin.windowOffset : {
                    left: i.geo.origin.windowOffset.left + i.geo.window.scroll.left,
                    top: i.geo.origin.windowOffset.top + i.geo.window.scroll.top
                }, n.coord = {
                    left: p.left + (n.coord.left - i.geo.origin.windowOffset.left),
                    top: p.top + (n.coord.top - i.geo.origin.windowOffset.top)
                }, o.__sideChange(o.__instance._$tooltip, n.side), i.geo.origin.fixedLineage ? o.__instance._$tooltip.css("position", "fixed") : o.__instance._$tooltip.css("position", ""), o.__instance._$tooltip.css({
                    left: n.coord.left,
                    top: n.coord.top,
                    height: n.size.height,
                    width: n.size.width
                }).find(".tooltipster-arrow").css({
                    left: "",
                    top: ""
                }).css(u.prop, u.val), o.__instance._$tooltip.appendTo(o.__instance.option("parent")), o.__instance._trigger({
                    type: "repositioned",
                    event: e,
                    position: n
                })
            }, __sideChange: function (t, e) {
                t.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-" + e)
            }, __targetFind: function (t) {
                var e = {}, i = this.__instance._$origin[0].getClientRects();
                i.length > 1 && (1 == this.__instance._$origin.css("opacity") && (this.__instance._$origin.css("opacity", .99), i = this.__instance._$origin[0].getClientRects(), this.__instance._$origin.css("opacity", 1)));
                if (i.length < 2) e.top = Math.floor(t.geo.origin.windowOffset.left + t.geo.origin.size.width / 2), e.bottom = e.top, e.left = Math.floor(t.geo.origin.windowOffset.top + t.geo.origin.size.height / 2), e.right = e.left; else {
                    var n = i[0];
                    e.top = Math.floor(n.left + (n.right - n.left) / 2), n = i.length > 2 ? i[Math.ceil(i.length / 2) - 1] : i[0], e.right = Math.floor(n.top + (n.bottom - n.top) / 2), n = i[i.length - 1], e.bottom = Math.floor(n.left + (n.right - n.left) / 2), n = i.length > 2 ? i[Math.ceil((i.length + 1) / 2) - 1] : i[i.length - 1], e.left = Math.floor(n.top + (n.bottom - n.top) / 2)
                }
                return e
            }
        }
    }), t
}), ("function" == typeof define && define.amd ? define : function (t, e) {
    "undefined" != typeof module && module.exports ? module.exports = e(require("jquery")) : window.toastr = e(window.jQuery)
})(["jquery"], function (t) {
    return function () {
        function e(e, i) {
            return e || (e = s()), (r = t("#" + e.containerId)).length ? r : (i && (n = e, (r = t("<div/>").attr("id", n.containerId).addClass(n.positionClass)).appendTo(t(n.target)), r = r), r);
            var n
        }

        function i(e, i, n) {
            var o = !(!n || !n.force) && n.force;
            return !(!e || !o && 0 !== t(":focus", e).length || (e[i.hideMethod]({
                duration: i.hideDuration,
                easing: i.hideEasing,
                complete: function () {
                    a(e)
                }
            }), 0))
        }

        function n(t) {
            l && l(t)
        }

        function o(i) {
            function o(t) {
                return null == t && (t = ""), t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function l(e) {
                var i = e && !1 !== m.closeMethod ? m.closeMethod : m.hideMethod,
                    o = e && !1 !== m.closeDuration ? m.closeDuration : m.hideDuration,
                    s = e && !1 !== m.closeEasing ? m.closeEasing : m.hideEasing;
                if (!t(":focus", g).length || e) return clearTimeout(w.intervalId), g[i]({
                    duration: o,
                    easing: s,
                    complete: function () {
                        a(g), clearTimeout(_), m.onHidden && "hidden" !== M.state && m.onHidden(), M.state = "hidden", M.endTime = new Date, n(M)
                    }
                })
            }

            function u() {
                (m.timeOut > 0 || m.extendedTimeOut > 0) && (_ = setTimeout(l, m.extendedTimeOut), w.maxHideTime = parseFloat(m.extendedTimeOut), w.hideEta = (new Date).getTime() + w.maxHideTime)
            }

            function h() {
                clearTimeout(_), w.hideEta = 0, g.stop(!0, !0)[m.showMethod]({
                    duration: m.showDuration,
                    easing: m.showEasing
                })
            }

            function p() {
                var t = (w.hideEta - (new Date).getTime()) / w.maxHideTime * 100;
                b.width(t + "%")
            }

            var m = s(), f = i.iconClass || m.iconClass;
            if (void 0 !== i.optionsOverride && (m = t.extend(m, i.optionsOverride), f = i.optionsOverride.iconClass || f), !function (t, e) {
                if (t.preventDuplicates) {
                    if (e.message === c) return !0;
                    c = e.message
                }
                return !1
            }(m, i)) {
                d++, r = e(m, !0);
                var _ = null, g = t("<div/>"), v = t("<div/>"), y = t("<div/>"), b = t("<div/>"), L = t(m.closeHtml),
                    w = {intervalId: null, hideEta: null, maxHideTime: null},
                    M = {toastId: d, state: "visible", startTime: new Date, options: m, map: i};
                return i.iconClass && g.addClass(m.toastClass).addClass(f), function () {
                    if (i.title) {
                        var t = i.title;
                        m.escapeHtml && (t = o(i.title)), v.append(t).addClass(m.titleClass), g.append(v)
                    }
                }(), function () {
                    if (i.message) {
                        var t = i.message;
                        m.escapeHtml && (t = o(i.message)), y.append(t).addClass(m.messageClass), g.append(y)
                    }
                }(), m.closeButton && (L.addClass(m.closeClass).attr("role", "button"), g.prepend(L)), m.progressBar && (b.addClass(m.progressClass), g.prepend(b)), m.rtl && g.addClass("rtl"), m.newestOnTop ? r.prepend(g) : r.append(g), function () {
                    var t = "";
                    switch (i.iconClass) {
                        case"toast-success":
                        case"toast-info":
                            t = "polite";
                            break;
                        default:
                            t = "assertive"
                    }
                    g.attr("aria-live", t)
                }(), g.hide(), g[m.showMethod]({
                    duration: m.showDuration,
                    easing: m.showEasing,
                    complete: m.onShown
                }), m.timeOut > 0 && (_ = setTimeout(l, m.timeOut), w.maxHideTime = parseFloat(m.timeOut), w.hideEta = (new Date).getTime() + w.maxHideTime, m.progressBar && (w.intervalId = setInterval(p, 10))), m.closeOnHover && g.hover(h, u), !m.onclick && m.tapToDismiss && g.click(l), m.closeButton && L && L.click(function (t) {
                    t.stopPropagation ? t.stopPropagation() : void 0 !== t.cancelBubble && !0 !== t.cancelBubble && (t.cancelBubble = !0), m.onCloseClick && m.onCloseClick(t), l(!0)
                }), m.onclick && g.click(function (t) {
                    m.onclick(t), l()
                }), n(M), m.debug && console && console.log(M), g
            }
        }

        function s() {
            return t.extend({}, {
                tapToDismiss: !0,
                toastClass: "toast",
                containerId: "toast-container",
                debug: !1,
                showMethod: "fadeIn",
                showDuration: 300,
                showEasing: "swing",
                onShown: void 0,
                hideMethod: "fadeOut",
                hideDuration: 1e3,
                hideEasing: "swing",
                onHidden: void 0,
                closeMethod: !1,
                closeDuration: !1,
                closeEasing: !1,
                closeOnHover: !0,
                extendedTimeOut: 1e3,
                iconClasses: {
                    error: "toast-error",
                    info: "toast-info",
                    success: "toast-success",
                    warning: "toast-warning"
                },
                iconClass: "toast-info",
                positionClass: "toast-top-right",
                timeOut: 5e3,
                titleClass: "toast-title",
                messageClass: "toast-message",
                escapeHtml: !1,
                target: "body",
                closeHtml: '<button type="button">&times;</button>',
                closeClass: "toast-close-button",
                newestOnTop: !0,
                preventDuplicates: !1,
                progressBar: !1,
                progressClass: "toast-progress",
                rtl: !1
            }, h.options)
        }

        function a(t) {
            r || (r = e()), t.is(":visible") || (t.remove(), t = null, 0 === r.children().length && (r.remove(), c = void 0))
        }

        var r, l, c, d = 0, u = {error: "error", info: "info", success: "success", warning: "warning"}, h = {
            clear: function (n, o) {
                var a = s();
                r || e(a), i(n, a, o) || function (e) {
                    for (var n = r.children(), o = n.length - 1; o >= 0; o--) i(t(n[o]), e)
                }(a)
            }, remove: function (i) {
                var n = s();
                return r || e(n), i && 0 === t(":focus", i).length ? void a(i) : void (r.children().length && r.remove())
            }, error: function (t, e, i) {
                return o({
                    type: u.error,
                    iconClass: s().iconClasses.error,
                    message: t,
                    optionsOverride: i,
                    title: e
                })
            }, getContainer: e, info: function (t, e, i) {
                return o({type: u.info, iconClass: s().iconClasses.info, message: t, optionsOverride: i, title: e})
            }, options: {}, subscribe: function (t) {
                l = t
            }, success: function (t, e, i) {
                return o({
                    type: u.success,
                    iconClass: s().iconClasses.success,
                    message: t,
                    optionsOverride: i,
                    title: e
                })
            }, version: "2.1.3", warning: function (t, e, i) {
                return o({
                    type: u.warning,
                    iconClass: s().iconClasses.warning,
                    message: t,
                    optionsOverride: i,
                    title: e
                })
            }
        };
        return h
    }()
}), function (t) {
    t.fn.massToggleDisplay = function (e) {
        return this.each(function (e, i) {
            t(".mass-hide").not(this).removeClass("display-block").addClass("display-none"), t(this).toggleClass("display-block").toggleClass("display-none")
        })
    }
}(jQuery), function (t) {
    t.fn.toggleDisplay = function () {
        return this.each(function (e, i) {
            t(this).toggleClass("display-none").toggleClass("display-block")
        })
    }
}(jQuery), function (t) {
    t.fn.showDisplay = function () {
        return this.each(function (e, i) {
            t(this).removeClass("display-none").addClass("display-block")
        })
    }
}(jQuery), function (t) {
    t.fn.hideDisplay = function () {
        return this.each(function (e, i) {
            t(this).removeClass("display-block").addClass("display-none")
        })
    }
}(jQuery), function (t) {
    t.fn.massToggleVisibility = function (e) {
        return this.each(function () {
            t(".mass-hide").not(this).each(function () {
                t(this).hasClass("is-active") ? t(this).toggleClass("is-active") : t(this).removeClass("is-visible").addClass("is-invisible")
            }), t(this).toggleClass("is-visible")
        })
    }
}(jQuery), function (t) {
    t.fn.toggleVisibility = function () {
        return this.each(function (e, i) {
            t(this).toggleClass("is-invisible").toggleClass("is-visible")
        })
    }
}(jQuery), function (t) {
    t.fn.showVisibility = function () {
        return this.each(function (e, i) {
            t(this).removeClass("is-invisible").addClass("is-visible")
        })
    }
}(jQuery), function (t) {
    t.fn.hideVisibility = function () {
        return this.each(function (e, i) {
            t(this).removeClass("is-visible").addClass("is-invisible")
        })
    }
}(jQuery), function (t) {
    t.clearButton = {
        add: function () {
        }, check: function () {
        }, listen: function () {
        }
    }, t.clearButton.add = function (e) {
        var i = t.extend({selector: ".has-clear"}, e);
        t(i.selector).append('<div class="clear"></div>'), t(i.selector).each(function () {
            t.clearButton.check(), t.clearButton.listen()
        })
    }, t.clearButton.check = function (e) {
        var i = t.extend({selector: ".has-clear"}, e);
        t(i.selector).each(function () {
            var e = t(this).find(".clear");
            t(this).find("input").val().length > 0 ? e.css({display: "block"}) : e.css({display: "none"})
        })
    }, t.clearButton.listen = function (e) {
        var i = t.extend({selector: ".has-clear"}, e);
        t(i.selector).each(function () {
            var e = t(this).find(".clear"), i = t(this).find("input");
            i.on("keyup", function () {
                t.clearButton.check()
            }), e.on("click", function () {
                i.val(""), t.clearButton.check()
            })
        })
    }
}(jQuery), function (t) {
    t.toggleSelect = function (e) {
        var i, n = t.extend({
            before: function () {
            }, after: function () {
            }, change: function () {
            }, selector: ".toggle-select"
        }, e), o = t(n.selector), s = o.find("ul");
        n.before(), o.append('<div class="icon-toggle-select"></div>');
        var a = o.find(".icon-toggle-select");
        o.append('<ul class="open is-invisible"></ul>');
        var r = t(n.selector).find(".open");
        return r.html(s.html()), s.addClass("closed"), t(window).on("click", function () {
            r.hideVisibility()
        }), s.add(a).on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), r.toggleVisibility()
        }), r.find("li").on("click", function (e) {
            e.preventDefault(), e.stopPropagation();
            var o, a = t(this).attr("data-value");
            o = a, s.find("li").removeClass("is-active"), r.find("li").removeClass("is-active"), s.find("li").filter('[data-value="' + o + '"]').addClass("is-active"), r.find("li").filter('[data-value="' + o + '"]').addClass("is-active"), r.hideVisibility(), l(), n.change(i)
        }), l(), n.after(), i;

        function l() {
            i = s.find("li.is-active").attr("data-value")
        }
    }
}(jQuery), function (t) {
    var e = [];
    toastr.options = {
        closeButton: !1,
        debug: !1,
        newestOnTop: !1,
        progressBar: !1,
        positionClass: "toast-bottom-right",
        preventDuplicates: !0,
        onclick: null,
        showDuration: "1000",
        hideDuration: "1000",
        timeOut: "2000",
        extendedTimeOut: "2000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    }, t.inform = function (i) {
        var n = t.extend({
            before: function () {
            }, after: function () {
            }, appMode: "development", mode: "development", type: "log", message: ""
        }, i);
        e.push(n.message), n.appMode === n.mode && ("log" === n.type && console.log(n.message), "alert" === n.type && alert(n.message), "file" === n.type && function (t, e) {
            t || (t = {error: "internal error, no data"});
            e || (e = "console.json");
            t = JSON.stringify(t);
            var i = new Blob([t], {type: "text/json"}), n = document.createEvent("MouseEvents"),
                o = document.createElement("a");
            o.download = e, o.href = window.URL.createObjectURL(i), o.dataset.downloadurl = ["text/json", o.download, o.href].join(":"), n.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), o.dispatchEvent(n)
        }(e, "console.json"), "toast" === n.type && toastr.info(n.message, ""))
    }
}(jQuery), $(document).ready(function () {
    $.crs = function (t) {
        var e = $.extend({
            before: function () {
            },
            after: function () {
            },
            mode: "development",
            task: "",
            url: "",
            urlParams: "",
            type: "",
            data: {},
            dataType: "",
            headers: {},
            contentType: "application/json; charset=utf-8",
            processData: !0,
            beforeSend: function () {
            },
            complete: function () {
            },
            success: function () {
            },
            error: function () {
            }
        }, t), i = {};
        (function (t) {
            void 0 === i[t] && (i[t] = !1);
            return !0 === i[t]
        })(e.task) || (e.before(), $.ajax({
            url: "development" === e.mode ? "/test/" + e.url : e.url + e.urlParams,
            type: "development" === e.mode ? "GET" : e.type,
            data: e.data,
            dataType: e.dataType,
            headers: e.headers,
            contentType: e.contentType,
            processData: e.processData,
            beforeSend: function () {
                e.beforeSend()
            },
            complete: function () {
                e.complete()
            },
            success: function (t) {
                i[e.task] = !1, e.success(t)
            },
            error: function (t) {
                i[e.task] = !1, e.error(t)
            },
            statusCode: {
                100: function () {
                    $.inform({
                        appMode: e.mode,
                        mode: "production",
                        type: "log",
                        message: "Information_Code 100: Continue"
                    })
                }, 200: function () {
                    $.inform({appMode: e.mode, mode: "production", type: "log", message: "Success_Code 200: OK"})
                }, 400: function () {
                    $.inform({
                        appMode: e.mode,
                        mode: "production",
                        type: "log",
                        message: "Client_Error_Code 400: Bad Request"
                    })
                }
            }
        }), e.after())
    }
}), function (t, e, i) {
    function n(t, e) {
        return typeof t === e
    }

    function o() {
        return "function" != typeof e.createElement ? e.createElement(arguments[0]) : g ? e.createElementNS.call(e, "http://www.w3.org/2000/svg", arguments[0]) : e.createElement.apply(e, arguments)
    }

    function s(t) {
        return t.replace(/([a-z])-([a-z])/g, function (t, e, i) {
            return e + i.toUpperCase()
        }).replace(/^-/, "")
    }

    function a(t, e) {
        return function () {
            return t.apply(e, arguments)
        }
    }

    function r(t) {
        return t.replace(/([A-Z])/g, function (t, e) {
            return "-" + e.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function l(t, i, n, s) {
        var a, r, l, c, d, u = "modernizr", h = o("div"),
            p = ((d = e.body) || ((d = o(g ? "svg" : "body")).fake = !0), d);
        if (parseInt(n, 10)) for (; n--;) (l = o("div")).id = s ? s[n] : u + (n + 1), h.appendChild(l);
        return (a = o("style")).type = "text/css", a.id = "s" + u, (p.fake ? p : h).appendChild(a), p.appendChild(h), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(e.createTextNode(t)), h.id = u, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = _.style.overflow, _.style.overflow = "hidden", _.appendChild(p)), r = i(h, t), p.fake ? (p.parentNode.removeChild(p), _.style.overflow = c, _.offsetHeight) : h.parentNode.removeChild(h), !!r
    }

    function c(e, n) {
        var o = e.length;
        if ("CSS" in t && "supports" in t.CSS) {
            for (; o--;) if (t.CSS.supports(r(e[o]), n)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in t) {
            for (var s = []; o--;) s.push("(" + r(e[o]) + ":" + n + ")");
            return l("@supports (" + (s = s.join(" or ")) + ") { #modernizr { position: absolute; } }", function (e) {
                return "absolute" == function (e, i, n) {
                    var o;
                    if ("getComputedStyle" in t) {
                        o = getComputedStyle.call(t, e, i);
                        var s = t.console;
                        null !== o ? n && (o = o.getPropertyValue(n)) : s && s[s.error ? "error" : "log"].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                    } else o = !i && e.currentStyle && e.currentStyle[n];
                    return o
                }(e, null, "position")
            })
        }
        return i
    }

    function d(t, e, r, l, d) {
        var u = t.charAt(0).toUpperCase() + t.slice(1), h = (t + " " + w.join(u + " ") + u).split(" ");
        return n(e, "string") || n(e, "undefined") ? function (t, e, a, r) {
            function l() {
                u && (delete $.style, delete $.modElem)
            }

            if (r = !n(r, "undefined") && r, !n(a, "undefined")) {
                var d = c(t, a);
                if (!n(d, "undefined")) return d
            }
            for (var u, h, p, m, f, _ = ["modernizr", "tspan", "samp"]; !$.style && _.length;) u = !0, $.modElem = o(_.shift()), $.style = $.modElem.style;
            for (p = t.length, h = 0; p > h; h++) if (m = t[h], f = $.style[m], !!~("" + m).indexOf("-") && (m = s(m)), $.style[m] !== i) {
                if (r || n(a, "undefined")) return l(), "pfx" != e || m;
                try {
                    $.style[m] = a
                } catch (t) {
                }
                if ($.style[m] != f) return l(), "pfx" != e || m
            }
            return l(), !1
        }(h, e, l, d) : function (t, e, i) {
            var o;
            for (var s in t) if (t[s] in e) return !1 === i ? t[s] : n(o = e[t[s]], "function") ? a(o, i || e) : o;
            return !1
        }(h = (t + " " + x.join(u + " ") + u).split(" "), e, r)
    }

    function u(t, e, n) {
        return d(t, i, i, e, n)
    }

    var h = [], p = [], m = {
        _version: "3.6.0",
        _config: {classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0},
        _q: [],
        on: function (t, e) {
            var i = this;
            setTimeout(function () {
                e(i[t])
            }, 0)
        },
        addTest: function (t, e, i) {
            p.push({name: t, fn: e, options: i})
        },
        addAsyncTest: function (t) {
            p.push({name: null, fn: t})
        }
    }, f = function () {
    };
    f.prototype = m, (f = new f).addTest("geolocation", "geolocation" in navigator), f.addTest("history", function () {
        var e = navigator.userAgent;
        return (-1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") || "file:" === location.protocol) && (t.history && "pushState" in t.history)
    }), f.addTest("svg", !!e.createElementNS && !!e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), f.addTest("localstorage", function () {
        var t = "modernizr";
        try {
            return localStorage.setItem(t, t), localStorage.removeItem(t), !0
        } catch (t) {
            return !1
        }
    }), f.addTest("atobbtoa", "atob" in t && "btoa" in t, {aliases: ["atob-btoa"]});
    var _ = e.documentElement, g = "svg" === _.nodeName.toLowerCase();
    f.addTest("canvas", function () {
        var t = o("canvas");
        return !(!t.getContext || !t.getContext("2d"))
    }), f.addTest("webgl", function () {
        var e = o("canvas"), i = "probablySupportsContext" in e ? "probablySupportsContext" : "supportsContext";
        return i in e ? e[i]("webgl") || e[i]("experimental-webgl") : "WebGLRenderingContext" in t
    });
    var v = m._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
    m._prefixes = v;
    var y = "CSS" in t && "supports" in t.CSS, b = "supportsCSS" in t;
    f.addTest("supports", y || b);
    var L = "Moz O ms Webkit", w = m._config.usePrefixes ? L.split(" ") : [];
    m._cssomPrefixes = w;
    var M = function (e) {
        var n, o = v.length, s = t.CSSRule;
        if (void 0 === s) return i;
        if (!e) return !1;
        if ((n = (e = e.replace(/^@/, "")).replace(/-/g, "_").toUpperCase() + "_RULE") in s) return "@" + e;
        for (var a = 0; o > a; a++) {
            var r = v[a];
            if (r.toUpperCase() + "_" + n in s) return "@-" + r.toLowerCase() + "-" + e
        }
        return !1
    };
    m.atRule = M;
    var x = m._config.usePrefixes ? L.toLowerCase().split(" ") : [];
    m._domPrefixes = x;
    var k = {elem: o("modernizr")};
    f._q.push(function () {
        delete k.elem
    });
    var $ = {style: k.elem.style};
    f._q.unshift(function () {
        delete $.style
    }), m.testAllProps = d;
    var C = m.prefixed = function (t, e, i) {
        return 0 === t.indexOf("@") ? M(t) : (-1 != t.indexOf("-") && (t = s(t)), e ? d(t, e, i) : d(t, "pfx"))
    };
    f.addTest("fullscreen", !(!C("exitFullscreen", e, !1) && !C("cancelFullScreen", e, !1))), m.testAllProps = u, f.addTest("cssfilters", function () {
        if (f.supports) return u("filter", "blur(2px)");
        var t = o("a");
        return t.style.cssText = v.join("filter:blur(2px); "), !!t.style.length && (e.documentMode === i || e.documentMode > 9)
    }), f.addTest("cssmask", u("maskRepeat", "repeat-x", !0)), function () {
        var t, e, i, o, s, a;
        for (var r in p) if (p.hasOwnProperty(r)) {
            if (t = [], (e = p[r]).name && (t.push(e.name.toLowerCase()), e.options && e.options.aliases && e.options.aliases.length)) for (i = 0; i < e.options.aliases.length; i++) t.push(e.options.aliases[i].toLowerCase());
            for (o = n(e.fn, "function") ? e.fn() : e.fn, s = 0; s < t.length; s++) 1 === (a = t[s].split(".")).length ? f[a[0]] = o : (!f[a[0]] || f[a[0]] instanceof Boolean || (f[a[0]] = new Boolean(f[a[0]])), f[a[0]][a[1]] = o), h.push((o ? "" : "no-") + a.join("-"))
        }
    }(), function (t) {
        var e = _.className, i = f._config.classPrefix || "";
        if (g && (e = e.baseVal), f._config.enableJSClass) {
            var n = new RegExp("(^|\\s)" + i + "no-js(\\s|$)");
            e = e.replace(n, "$1" + i + "js$2")
        }
        f._config.enableClasses && (e += " " + i + t.join(" " + i), g ? _.className.baseVal = e : _.className = e)
    }(h), delete m.addTest, delete m.addAsyncTest;
    for (var T = 0; T < f._q.length; T++) f._q[T]();
    t.Modernizr = f
}(window, document);
var env, polyline = {};

function py2_round(t) {
    return Math.floor(Math.abs(t) + .5) * Math.sign(t)
}

function encode(t, e, i) {
    var n = (t = py2_round(t * i)) - (e = py2_round(e * i));
    n <<= 1, t - e < 0 && (n = ~n);
    for (var o = ""; n >= 32;) o += String.fromCharCode(63 + (32 | 31 & n)), n >>= 5;
    return o += String.fromCharCode(n + 63)
}

function flipped(t) {
    for (var e = [], i = 0; i < t.length; i++) e.push(t[i].slice().reverse());
    return e
}

polyline.decode = function (t, e) {
    for (var i, n = 0, o = 0, s = 0, a = [], r = 0, l = 0, c = null, d = Math.pow(10, e || 5); n < t.length;) {
        for (c = null, r = 0, l = 0; l |= (31 & (c = t.charCodeAt(n++) - 63)) << r, r += 5, c >= 32;) ;
        for (i = 1 & l ? ~(l >> 1) : l >> 1, r = l = 0; l |= (31 & (c = t.charCodeAt(n++) - 63)) << r, r += 5, c >= 32;) ;
        o += i, s += 1 & l ? ~(l >> 1) : l >> 1, a.push([o / d, s / d])
    }
    return a
}, polyline.encode = function (t, e) {
    if (!t.length) return "";
    for (var i = Math.pow(10, e || 5), n = encode(t[0][0], 0, i) + encode(t[0][1], 0, i), o = 1; o < t.length; o++) {
        var s = t[o], a = t[o - 1];
        n += encode(s[0], a[0], i), n += encode(s[1], a[1], i)
    }
    return n
}, polyline.fromGeoJSON = function (t, e) {
    if (t && "Feature" === t.type && (t = t.geometry), !t || "LineString" !== t.type) throw new Error("Input must be a GeoJSON LineString");
    return polyline.encode(flipped(t.coordinates), e)
}, polyline.toGeoJSON = function (t, e) {
    return {type: "LineString", coordinates: flipped(polyline.decode(t, e))}
}, "object" == typeof module && module.exports && (module.exports = polyline);
var map, settings, currentPanel, presets = Modernizr.localstorage ? {
        locale: localStorage.getItem("locale") || "fa",
        layers: {
            base: JSON.parse(localStorage.getItem("static-baselayer")),
            over: JSON.parse(localStorage.getItem("static-overlayers"))
        },
        search: {type: localStorage.getItem("searchType"), history: JSON.parse(localStorage.getItem("searchHistory"))}
    } : {locale: "fa", layers: {base: "", over: ""}, search: {type: "", history: ""}},
    states = {user: {}, current: {}, click: {}, contextmenu: {}, mouse: {}}, site = {
        settings: {
            directions: {
                direct: "fa" === presets.locale || "ar" === presets.locale ? "right" : "left",
                reverse: "fa" === presets.locale || "ar" === presets.locale ? "left" : "right"
            }
        },
        html: $("html"),
        body: $("body"),
        main: {},
        map: {},
        loader: {},
        anchors: {
            top1: {direct: {}, middle: {}, reverse: {}},
            top2: {direct: {}, middle: {}, reverse: {}},
            center: {direct: {}, middle: {}, reverse: {}},
            bottom1: {direct: {}, middle: {}, reverse: {}},
            bottom2: {direct: {}, middle: {}, reverse: {}}
        },
        panel: {footer: {element: {}, triggers: {left: {}, right: {}}}},
        overlay: {},
        search: {
            element: {},
            input: {},
            select: {},
            button: {},
            more: {},
            moreTrigger: {},
            wrapper: {},
            autocomplete: {},
            suggestions: {}
        },
        panels: {
            options: {element: {}, triggers: {open: {}, close: {}}, input: {}},
            routing: {element: {}, triggers: {open: {}, close: {}}, input: {}},
            layerManagement: {element: {}, triggers: {open: {}, close: {}}},
            inspect: {element: {}, triggers: {close: {}}},
            login: {element: {}, triggers: {open: {}, close: {}}, input: {}},
            forgetPassword: {element: {}, triggers: {open: {}, close: {}}, input: {}},
            logout: {element: {}, triggers: {open: {}, close: {}}, input: {}},
            signUp: {element: {}, triggers: {open: {}, close: {}}, input: {}},
            profile: {element: {}, triggers: {open: {}, close: {}}, input: {}},
            sms: {element: {}, triggers: {open: {}, close: {}}, input: {}},
            feedback: {element: {}, triggers: {open: {}, close: {}}, input: {}}
        },
        editor: {element: {}}
    }, popupOptions = {closeButton: !1, minWidth: 180, maxWidth: 180}, featureGroups = {map: {}, api: {}},
    drawControls = {map: {}, api: {}}, layers = {}, router = new Navigo(null, !0, "#");

function appendBasicElements() {
    $(settings.element).append('<main class="smap-main"><div id="site-map"></div><div id="top-1-direct" class="site-anchor top-1 position-direct direct item-set horizontal"></div><div id="top-1-middle" class="site-anchor top-1 position-middle direct item-set horizontal"></div><div id="top-1-reverse" class="site-anchor top-1 position-reverse direct item-set vertical"></div><div id="top-2-direct" class="site-anchor top-2 position-direct direct item-set horizontal"></div><div id="top-2-middle" class="site-anchor top-2 position-middle direct item-set horizontal"></div><div id="top-2-reverse" class="site-anchor top-2 position-reverse reverse item-set horizontal"></div><div id="center-direct" class="site-anchor center position-direct"></div><div id="center-middle" class="site-anchor center position-middle"></div><div id="center-reverse" class="site-anchor center position-reverse"></div><div id="bottom-1-direct" class="site-anchor bottom-1 position-direct direct item-set horizontal"></div><div id="bottom-1-middle" class="site-anchor bottom-1 position-middle direct item-set horizontal"><a class="site-sdk-logo" href="http://corp.map.ir"></a></div><div id="bottom-1-reverse" class="site-anchor bottom-1 position-reverse reverse item-set horizontal"></div><div id="bottom-2-direct" class="site-anchor bottom-2 position-direct direct item-set horizontal"></div><div id="bottom-2-middle" class="site-anchor bottom-2 position-middle direct item-set horizontal"></div><div id="bottom-2-reverse" class="site-anchor bottom-2 position-reverse reverse"></div><div class="panel-footer"><div class="item-set vertical centered triggers right"></div><div class="item-set vertical centered triggers left"></div><div class="contents"></div></div><div class="site-overlay is-invisible"></div></main><div class="site-loader is-visible"></div>'), site.main = $(".smap-main"), site.map = $("#site-map"), site.loader = $(".site-loader"), site.overlay = $(".site-overlay"), site.panel.footer.element = $(".panel-footer"), site.panel.footer.triggers.left = site.panel.footer.element.find(".triggers.left"), site.panel.footer.triggers.right = site.panel.footer.element.find(".triggers.right"), site.anchors.top1.direct = $("#top-1-direct"), site.anchors.top1.middle = $("#top-1-middle"), site.anchors.top1.reverse = $("#top-1-reverse"), site.anchors.top2.direct = $("#top-2-direct"), site.anchors.top2.middle = $("#top-2-middle"), site.anchors.top2.reverse = $("#top-2-reverse"), site.anchors.center.direct = $("#center-direct"), site.anchors.center.middle = $("#center-middle"), site.anchors.center.reverse = $("#center-reverse"), site.anchors.bottom1.direct = $("#bottom-1-direct"), site.anchors.bottom1.middle = $("#bottom-1-middle"), site.anchors.bottom1.reverse = $("#bottom-1-reverse"), site.anchors.bottom2.direct = $("#bottom-2-direct"), site.anchors.bottom2.middle = $("#bottom-2-middle"), site.anchors.bottom2.reverse = $("#bottom-2-reverse"), $(".smap-main").parent().css({
        overflow: "hidden",
        position: "relative"
    })
}

function loadApp(t) {
    var e = $.extend(!0, {
        before: function () {
        }, after: function () {
        }
    }, t);
    e.before(), map.on("zoomend", function () {
        updateStateCurrent()
    }), map.on("moveend", function () {
        updateStateCurrent()
    }), map.on("click", function (t) {
        updateStateClick(t.latlng)
    }), map.on("mousemove", function (t) {
        updateStateMouse(t.latlng)
    }), map.on("contextmenu", function (t) {
        updateStateContextmenu(t.latlng)
    }), updateStateCurrent(), updateStateClick(), updateStateMouse(), updateStateContextmenu(), map.on("popupopen", function (t) {
        var e = getFeatureInfoFromPopupOpen(t);
        "editor-point" !== e.featureGroup && "editor-polygon" !== e.featureGroup && "editor-polyline" !== e.featureGroup || $.sMap.editor.addListenersToToolbar({
            featureGroup: e.featureGroup,
            featureId: e.featureId
        }), "map-marker" === e.featureGroup && $.sMap.features.addListenersToToolbar(markersOptions[e.featureId]), e.popup.i18n(), applyTooltips()
    }), $.each($(".panel-aside"), function () {
        var t = '<div class="row"><div class="col-xs-6 padded-side"><a class="is-iconed is-large" target="_blank" href="' + env.url.downloads.apps.android + '"><span class="icon-background"><em class="icon icon-android"></em></span><span class="icon-title" data-i18n="site-app-android"></span></a></div><div class="col-xs-6 padded-side"><a class="is-iconed is-large" target="_blank" href="' + env.url.downloads.apps.ios + '"><span class="icon-background"><em class="icon icon-apple"></em></span><span class="icon-title" data-i18n="site-app-apple"></span></a></div></div>';
        $(this).find("footer").html(t)
    }), $.clearButton.add(), $(".form").find("input").on("focus", function () {
        $(this).parent(".form-group").addClass("is-active")
    }), $(".form").find("input").on("blur", function () {
        $(this).parent(".form-group").removeClass("is-active")
    }), site.overlay.on("click", function (t) {
        site.overlay.hideVisibility(), $.sMap.modal.wipe(), closePanels(t)
    }), e.after()
}

function setLocale(t) {
    var e = $.extend(!0, {
        before: function () {
        }, after: function () {
        }, locale: "fa"
    }, t);
    e.before(), replaceResource({
        before: function () {
            site.main.css("display", "none"), site.loader.showVisibility()
        }, after: function () {
            site.main.css("display", "block"), site.loader.hideVisibility()
        }, locale: e.locale
    }), Modernizr.localstorage && localStorage.setItem("locale", presets.locale = e.locale), $.i18n({locale: e.locale}), site.html.i18n(), site.html.attr("data-locale", e.locale), site.settings.directions.direct = "fa" === presets.locale || "ar" === presets.locale ? "right" : "left", site.settings.directions.reverse = "fa" === presets.locale || "ar" === presets.locale ? "left" : "right", e.after()
}

function applyTooltips(t) {
    $.extend(!0, {
        before: function () {
        }, after: function () {
        }
    }, t);
    $(".tooltip-bottom").not(".tooltipstered").tooltipster({
        theme: "tooltipster-shadow",
        animation: "fade",
        delay: 500,
        trigger: "hover",
        side: ["bottom", "top", site.settings.directions.direct, site.settings.directions.reverse]
    }), $(".tooltip-right").not(".tooltipstered").tooltipster({
        theme: "tooltipster-shadow",
        animation: "fade",
        delay: 500,
        trigger: "hover",
        side: [site.settings.directions.direct, site.settings.directions.reverse, "bottom", "top"]
    }), $(".tooltip-top").not(".tooltipstered").tooltipster({
        theme: "tooltipster-shadow",
        animation: "fade",
        delay: 500,
        trigger: "hover",
        side: ["top", "bottom", site.settings.directions.direct, site.settings.directions.reverse]
    }), $(".tooltip-left").not(".tooltipstered").tooltipster({
        theme: "tooltipster-shadow",
        animation: "fade",
        delay: 500,
        trigger: "hover",
        side: [site.settings.directions.reverse, site.settings.directions.direct, "bottom", "top"]
    })
}

function destroyTooltips(t) {
    $.extend(!0, {
        before: function () {
        }, after: function () {
        }
    }, t);
    $(".tooltipstered").tooltipster("destroy")
}

function replaceResource(t) {
    var e = $.extend(!0, {
        before: function () {
        }, after: function () {
        }, locale: "fa"
    }, t);
    e.before();
    var i = $("head"), n = $("link");
    $.each(n, function (t, n) {
        var o = $(this).attr("data-path"), s = $(this).attr("data-file");
        if (void 0 !== o && void 0 !== s) {
            $(this).remove();
            var a = '<link type="text' + (o + e.locale + "/" + s) + 'css" rel="stylesheet" href="/" data-path="' + o + '" data-file="' + s + '">';
            i.append(a)
        }
        e.after()
    })
}

function updateStateUser(t) {
    states.user.bounds = map.getBounds(), states.user.latlng = t || map.getCenter(), states.user.zoom = map.getZoom()
}

function updateStateCurrent() {
    states.current.bounds = map.getBounds(), states.current.latlng = map.getCenter(), states.current.zoom = map.getZoom()
}

function updateStateClick(t) {
    states.click.bounds = map.getBounds(), states.click.latlng = t || map.getCenter(), states.click.zoom = map.getZoom()
}

function updateStateMouse(t) {
    states.mouse.bounds = map.getBounds(), states.mouse.latlng = t || map.getCenter(), states.mouse.zoom = map.getZoom()
}

function updateStateContextmenu(t) {
    states.contextmenu.bounds = map.getBounds(), states.contextmenu.latlng = t || map.getCenter(), states.contextmenu.zoom = map.getZoom()
}

function addOptionTriggerWrapper() {
    site.anchors.top1.direct.append('<div class="triggers-wrapper margined-large desktop"><div class="item-set horizontal is-boxed triggers"></div></div>')
}

function openPanel(t) {
    var e = $.extend(!0, {event: {}, type: "", modal: !0}, t);
    $.sMap.modal.wipe(), closePanels(e.event), currentPanel = e.type, $(".panel-aside").hideVisibility(), site.panels[e.type].element.showVisibility(), site.main.addClass("is-active"), e.modal && site.overlay.showVisibility()
}

function closePanels(t) {
    t.preventDefault(), t.stopPropagation(), $(".panel-aside").hideVisibility(), site.main.removeClass("is-active")
}

function generateURL(t) {
    var e = $.extend(!0, {
        before: function () {
        }, after: function () {
        }, lat: 0, lng: 0, zoom: 6, domain: "none"
    }, t);
    e.before();
    var i = "/#/lat/" + e.lat.toFixed(5) + "/lng/" + e.lng.toFixed(5) + "/z/" + e.zoom;
    return "none" === e.domain && (i = i), "env" === e.domain && (i = env.url.domain + i), "href" === e.domain && (i = window.location.href.split("/#/")[0] + i), i = i.replace(/\/\/#/g, "/#"), e.after(), i
}

function generateLatlngHtml(t) {
    var e = $.extend(!0, {
        before: function () {
        }, after: function () {
        }, lat: 0, lng: 0, type: "inline"
    }, t);
    e.before();
    var i = "";
    return "comma" === e.type && (i = e.lat.toFixed(5) + ", " + e.lng.toFixed(5)), "inline" === e.type && (i = '<span class="latlng-string data-i18n="' + e.lat.toFixed(5) + ", " + e.lng.toFixed(5) + '"></span>'), "block" === e.type && (i = '<div class="latlng-string"><span data-i18n="site-lat"></span>: ' + e.lat.toFixed(5) + '<br /><span data-i18n="site-lng"></span>: ' + e.lng.toFixed(5) + "</div>"), e.after(), i
}

function generateDmsHtml(t) {
    var e = $.extend(!0, {
        before: function () {
        }, after: function () {
        }, lat: 0, lng: 0, type: "inline"
    }, t);
    e.before();
    var i = "", n = latlngToDms(e.lat), o = latlngToDms(e.lng), s = n.degree + "°" + n.minute + "'" + n.second + '"',
        a = o.degree + "°" + o.minute + "'" + o.second + '"';
    return "comma" === e.type && (i = s + ", " + a), "inline" === e.type && (i = '<span class="latlng-string data-i18n="' + s + ", " + a + '"></span>'), "block" === e.type && (i = '<div class="latlng-string"><span data-i18n="site-lat"></span>: ' + s + '<br /><span data-i18n="site-lng"></span>: ' + a + "</div>"), e.after(), i
}

function copyToClipboard(t) {
    var e = $("<input>");
    $("body").append(e), e.val(t).select(), document.execCommand("copy"), e.remove(), $.inform({
        type: "toast",
        message: $.i18n("site-clipboard")
    })
}

function isUserSignedIn() {
    return !0
}

function getFeatureInfoFromPopupOpen(t) {
    var e, i, n = t.popup._source;
    return {
        feature: n,
        featureGroup: e = void 0 !== n.options.featureGroup ? n.options.featureGroup : void 0 !== n.options.icon && void 0 !== n.options.icon.options.featureGroup ? n.options.icon.options.featureGroup : "unset",
        featureId: i = void 0 !== n.options.featureId ? n.options.featureId : void 0 !== n.options.icon && void 0 !== n.options.icon.options.featureId ? n.options.icon.options.featureId : "unset",
        popup: $('[data-feature-group="' + e + '"][data-feature-id="' + i + '"]')
    }
}

function getFeatureInfoFromMarkerClick(t) {
    var e = t.target,
        i = void 0 !== e.options.featureGroup ? e.options.featureGroup : e.options.icon.options.featureGroup,
        n = void 0 !== e.options.featureId ? e.options.featureId : e.options.icon.options.featureId;
    return {
        feature: e,
        featureGroup: i,
        featureId: n,
        popup: $('[data-feature-group="' + i + '"][data-feature-id="' + n + '"]')
    }
}

function pushToSearchHistory(t) {
    t.latlng.lat = parseFloat(t.latlng.lat), t.latlng.lng = parseFloat(t.latlng.lng), t.latlng.lat = t.latlng.lat.toFixed(3), t.latlng.lng = t.latlng.lng.toFixed(3), $.sMap.search.history = $.sMap.search.history.filter(function (e) {
        return JSON.stringify(e) !== JSON.stringify(t)
    }), $.sMap.search.history.push(t), Modernizr.localstorage && localStorage.setItem("searchHistory", JSON.stringify($.sMap.search.history))
}

function isActive(t) {
    return void 0 !== t && "object" === $.type(t) ? !($.isEmptyObject(t) || !t.status) : !!t
}

function reverseCoordinates(t) {
    var e = "array" === $.type(t[0][0]) ? t[0] : t;
    return $.each(e, function (t, e) {
        e.reverse()
    }), t
}

function generatePopupHtml(t) {
    var e = $.extend(!0, {
        title: {html: "", i18n: ""},
        description: {html: "", i18n: ""},
        class: "",
        featureGroup: "",
        featureId: ""
    }, t);
    return e.class = "" === e.class ? ' class="feature-popup"' : ' class="feature-popup feature-popup-' + e.class + '"', e.featureGroup = "" === e.featureGroup ? "" : ' data-feature-group="' + e.featureGroup + '"', e.featureId = "" === e.featureId ? "" : ' data-feature-id="' + e.featureId + '"', e.title.i18n = "" === e.title.i18n ? "" : ' data-i18n="' + e.title.i18n + '"', e.description.i18n = "" === e.description.i18n ? "" : ' data-i18n="' + e.description.i18n + '"', "<div" + e.class + e.featureGroup + e.featureId + '><header class="popup-header"' + e.title.i18n + ">" + e.title.html + '</header><div class="popup-contents"' + e.description.i18n + "><p>" + e.description.html + "</p></div></div>"
}

router.on("lat/:lat/lng/:lng/z/:z", function (t, e) {
    states.current.latlng = {lat: parseFloat(t.lat), lng: parseFloat(t.lng)}, states.current.zoom = t.z
}).resolve(), $(document).ready(function () {
    $.sMap = function (t) {
        return settings = $.extend(!0, {
            before: function () {
            },
            after: function () {
            },
            mode: "test",
            element: "#map",
            boxZoom: !1,
            minZoom: 1,
            maxZoom: 18,
            presets: {latlng: {lat: 32, lng: 52}, zoom: 6},
            renderer: "",
            i18n: {}
        }, t), (env = $.env({mode: settings.mode})).mode = settings.mode, states.current = Object.assign({}, $.extend(settings.presets, states.current)), states.mouse = Object.assign({}, $.extend(settings.presets, states.current)), states.click = Object.assign({}, $.extend(settings.presets, states.current)), states.contextmenu = Object.assign({}, $.extend(settings.presets, states.current)), appendBasicElements(), (map = L.map("site-map", {
            attributionControl: !1,
            boxZoom: settings.boxZoom,
            minZoom: settings.minZoom,
            maxZoom: settings.maxZoom,
            zoomControl: !1,
            worldCopyJump: !0,
            renderer: "svg" === settings.renderer ? L.svg() : "canvas" === settings.renderer ? L.canvas() : void 0
        })).setView(states.current.latlng, states.current.zoom), $.i18n().load(settings.i18n), $.i18n().load({
            fa: smapWd + "assets/languages/fa.json",
            en: smapWd + "assets/languages/en.json"
        }).done(function () {
            settings.before(), loadApp({
                before: function () {
                    $.i18n({locale: presets.locale})
                }, after: function () {
                    setLocale({
                        locale: presets.locale, after: function () {
                            applyTooltips()
                        }
                    })
                }
            }), settings.after()
        }), map
    }
}), $(document).ready(function () {
    var t;
    $.sMap.layers = $.sMap.layers || {}, $.sMap.layers.static = {
        base: {
            all: {},
            layers: {},
            keys: [],
            active: "",
            render: function () {
            },
            set: function () {
            },
            implement: function () {
            }
        }, over: {
            all: {}, layers: {}, keys: [], active: [], render: function () {
            }, set: function () {
            }, implement: function () {
            }
        }, set: function () {
        }, build: function () {
        }, implement: function () {
        }
    }, $.sMap.layers.static.base.render = function (t) {
        if (void 0 !== $.sMap.layers.dynamic && void 0 !== $.sMap.layers.dynamic.base.active[0] && "" !== $.sMap.layers.dynamic.base.active[0] && void 0 !== $.sMap.layers.dynamic.base.layers[$.sMap.layers.dynamic.base.active[0]] && "" !== $.sMap.layers.dynamic.base.layers[$.sMap.layers.dynamic.base.active[0]] && ($.sMap.layers.dynamic.base.layers[$.sMap.layers.dynamic.base.active[0]].removeFrom(map), delete $.sMap.layers.dynamic.base.layers[$.sMap.layers.dynamic.base.active[0]]), void 0 !== $.sMap.layers.static.base.layers[$.sMap.layers.static.base.active] && "" !== $.sMap.layers.static.base.layers[$.sMap.layers.static.base.active] && ($.sMap.layers.static.base.layers[$.sMap.layers.static.base.active].removeFrom(map), delete $.sMap.layers.static.base.layers[$.sMap.layers.static.base.active]), "vector" === $.sMap.layers.static.base.all[t].type) {
            var e = {rendererFactory: L.canvas.tile, vectorTileLayerStyles: vectorLayersStyles};
            $.sMap.layers.static.base.layers[t] = L.vectorGrid.protobuf($.sMap.layers.static.base.all[t].server, e).addTo(map)
        } else $.sMap.layers.static.base.layers[t] = L.tileLayer.wms($.sMap.layers.static.base.all[t].server, {
            layers: $.sMap.layers.static.base.all[t].layers,
            format: $.sMap.layers.static.base.all[t].format,
            minZoom: settings.minZoom,
            maxZoom: settings.maxZoom
        }).addTo(map);
        $.sMap.layers.static.base.active = Object.keys($.sMap.layers.static.base.layers), Modernizr.localstorage && localStorage.setItem("static-baselayer", JSON.stringify($.sMap.layers.static.base.active))
    }, $.sMap.layers.static.over.render = function (e) {
        void 0 === $.sMap.layers.static.over.layers[e] ? $.sMap.layers.static.over.layers[e] = L.tileLayer.wms(t.layers.over[e].server, {
            layers: t.layers.over[e].layers,
            format: t.layers.over[e].format,
            minZoom: settings.minZoom,
            maxZoom: settings.maxZoom,
            pane: e
        }).addTo(map) : ($.sMap.layers.static.over.layers[e].removeFrom(map), delete $.sMap.layers.static.over.layers[e]), $.sMap.layers.static.over.active = Object.keys($.sMap.layers.static.over.layers), Modernizr.localstorage && localStorage.setItem("static-overlayers", JSON.stringify($.sMap.layers.static.over.active))
    }, $.sMap.layers.static.base.set = function (e) {
        $.sMap.layers.static.base.all = "object" === $.type(t.layers.base) ? t.layers.base : {}, $.sMap.layers.static.base.keys = "object" === $.type(t.layers.base) ? Object.keys(t.layers.base) : [], $.sMap.layers.static.base.render(presets.layers.base || $.sMap.layers.static.base.keys[0])
    }, $.sMap.layers.static.over.set = function (e) {
        $.sMap.layers.static.over.all = "object" === $.type(t.layers.over) ? t.layers.over : {}, $.sMap.layers.static.over.keys = "object" === $.type(t.layers.over) ? Object.keys(t.layers.over) : [], $.each(t.layers.over, function (t, e) {
            map.createPane(t)
        }), $.each(presets.layers.over, function (t, e) {
            $.sMap.layers.static.over.render(e)
        })
    }, $.sMap.layers.static.set = function (t) {
        $.sMap.layers.static.base.set(), $.sMap.layers.static.over.set()
    }, $.sMap.layers.static.base.implement = function (t) {
        var e = $.extend(!0, {}, t), i = "", n = 0;
        $.each(e.layers, function (t, e) {
            n += 1, i += '<div class="col-xs-4 padded-side"><label class="round bullet small"><input type="radio" name="static-baselayer" value="' + t + '"><span data-i18n="' + e.i18n + '"></span></label></div>'
        }), i = '<div class="row">' + i + "</div>", n > 1 && ($("aside.options form").append('<div class="title has-icon small icon-baselayer" data-i18n="site-baselayers"></div>'), $("aside.options form").append(i));
        var o = presets.layers.base || $.sMap.layers.static.base.keys[0];
        $('input[name="static-baselayer"][value="' + o + '"]').prop("checked", !0), $('input[name="static-baselayer"]').on("change", function () {
            $.sMap.layers.static.base.render($(this).val())
        })
    }, $.sMap.layers.static.over.implement = function (t) {
        var e = $.extend(!0, {layers: {}}, t), i = "", n = 0;
        $.each(e.layers, function (t, e) {
            n += 1, i += '<div class="col-xs-4 padded-side"><label class="bullet small"><input type="checkbox" name="static-overlayer" value="' + t + '"><span data-i18n="' + e.i18n + '"></span></label></div>'
        }), i = '<div class="row">' + i + "</div>", n > 1 && ($("aside.options form").append('<div class="title has-icon small icon-overlayer" data-i18n="site-overlayers"></div>'), $("aside.options form").append(i)), $.each(presets.layers.over, function (t, e) {
            $('input[name="static-overlayer"][value="' + e + '"]').prop("checked", !0)
        }), $('input[name="static-overlayer"]').on("change", function () {
            $.sMap.layers.static.over.render($(this).val())
        })
    }, $.sMap.layers.static.implement = function (t) {
        var e = $.extend(!0, {
            layers: {
                base: {
                    default: {
                        server: env.url.defaultBaselayer,
                        layers: "Shiveh:ShivehGSLD256",
                        format: "image/png",
                        i18n: "site-default"
                    }
                }, over: {}
            }
        }, t);
        $.sMap.layers.static.base.implement({layers: e.layers.base}), $.sMap.layers.static.over.implement({layers: e.layers.over})
    }, $.sMap.layers.static.build = function (e) {
        t = $.extend(!0, {
            layers: {
                base: {
                    default: {
                        server: env.url.defaultBaselayer,
                        layers: "Shiveh:ShivehGSLD256",
                        format: "image/png",
                        i18n: "site-default"
                    }
                }, over: {}
            }
        }, e), $.sMap.layers.static.set(), $.sMap.layers.static.implement(t)
    }
}), $(document).ready(function () {
    $.sMap.features = function (t) {
        $.sMap.features.options = $.extend(!0, {renderer: "svg"}, t), "canvas" === $.sMap.features.options.renderer && ($.sMap.features.renderer = L.canvas()), "svg" === $.sMap.features.options.renderer && ($.sMap.features.renderer = L.svg())
    }, $.sMap.features.addListenersToToolbar = function (t) {
        $.each(t.toolbar, function (e, i) {
            $('[data-feature-group="map-marker"][data-feature-id="' + t.name + '"]').find("li." + i.class).on("click", function () {
                i.callback(this)
            })
        })
    }
});
var markers = {}, markersOptions = {};
$(document).ready(function () {
    $.sMap.features.marker = {}, $.sMap.features.marker.remove = function (t) {
        void 0 !== markers[t] && (markers[t].remove(), delete markers[t])
    }, $.sMap.features.marker.wipe = function () {
        void 0 !== $.sMap.features.marker.group && $.sMap.features.marker.group.remove()
    }, $.sMap.features.marker.create = function (t) {
        void 0 === $.sMap.features.marker.group && ($.sMap.features.marker.group = L.layerGroup().addTo(map));
        var e = $.extend(!0, {
            before: function () {
            },
            after: function () {
            },
            name: "temp",
            popup: !1,
            class: "default",
            latlng: {},
            icon: icons.default.blue,
            popupOptions: popupOptions,
            popupOpen: !0,
            pan: !1,
            draggable: !1,
            history: {},
            on: {
                click: function () {
                }, contextmenu: function () {
                }
            },
            addTo: $.sMap.features.marker.group,
            markerType: "marker",
            radius: 10
        }, t);
        e.toolbar = t.toolbar || [{
            i18n: "site-close", class: "icon-close", callback: function (t) {
                void 0 !== markers[e.name] && (markers[e.name].remove(), markers[e.name] = void 0)
            }
        }, {
            i18n: "site-share", class: "icon-share", callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id");
                copyToClipboard(generateURL({
                    lat: parseFloat(markersOptions[e].latlng.lat),
                    lng: parseFloat(markersOptions[e].latlng.lng),
                    zoom: states.current.zoom,
                    domain: "href"
                }))
            }
        }, {
            i18n: "site-copy", class: "icon-copy", callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id");
                copyToClipboard(generateLatlngHtml({
                    lat: parseFloat(markersOptions[e].latlng.lat),
                    lng: parseFloat(markersOptions[e].latlng.lng),
                    type: "comma"
                }))
            }
        }], e.before(), $.sMap.features.marker.remove(e.name);
        var i, n = "", o = "map-marker";
        ($.each(e.toolbar, function (t, e) {
            n += '<li data-i18n="[title]' + e.i18n + '" class="' + e.class + ' tooltip-bottom"></li>'
        }), markersOptions[e.name] = e, "marker" === e.markerType ? markers[e.name] = L.marker([e.latlng.lat, e.latlng.lng], {
            icon: L.icon(e.icon),
            draggable: e.draggable,
            featureGroup: o,
            featureId: e.name
        }).addTo(e.addTo) : "circle" === e.markerType ? markers[e.name] = L.circle([e.latlng.lat, e.latlng.lng], {
            style: styles.default.polygon,
            featureGroup: o,
            featureId: e.name,
            renderer: $.sMap.features.renderer,
            radius: e.radius
        }).addTo(e.addTo) : "circle-marker" === e.markerType && (markers[e.name] = L.circleMarker([e.latlng.lat, e.latlng.lng], {
            style: styles.default.polygon,
            featureGroup: o,
            featureId: e.name,
            renderer: $.sMap.features.renderer,
            radius: e.radius
        }).addTo(e.addTo)), !1 !== e.popup) && (i = e.popup.custom ? e.popup.custom : '<header class="popup-header" data-i18n="' + e.popup.title.i18n + '">' + e.popup.title.html + '</header><div class="popup-contents" data-i18n="' + e.popup.description.i18n + '">' + e.popup.description.html + '</div><ul class="popup-toolbar small">' + n + "</ul>", i = '<div class="feature-popup feature-popup-' + e.class + '" data-feature-group="' + o + '" data-feature-id="' + e.name + '">' + i + "</div>", markers[e.name].bindPopup(i, e.popupOptions), e.popupOpen && markers[e.name].openPopup());
        return e.pan && map.panTo(e.latlng), Object.keys(e.history).length && pushToSearchHistory(e.history), markers[e.name].on("click", e.on.click), markers[e.name].on("contextmenu", e.on.contextmenu), $.sMap.features.addListenersToToolbar(e), e.after(), markers[e.name]
    }
});
var polygons = {}, polygonsOptions = {};
$(document).ready(function () {
    $.sMap.features.polygon = {}, $.sMap.features.polygon.remove = function (t) {
        void 0 !== polygons[t] && (polygons[t].remove(), delete polygons[t])
    }, $.sMap.features.polygon.wipe = function () {
        void 0 !== $.sMap.features.polygon.group && $.sMap.features.polygon.group.remove()
    }, $.sMap.features.polygon.create = function (t) {
        void 0 === $.sMap.features.polygon.group && ($.sMap.features.polygon.group = L.layerGroup().addTo(map));
        var e = $.extend(!0, {
            before: function () {
            },
            after: function () {
            },
            name: "temp",
            popup: !1,
            class: "default",
            style: styles.default.polygon,
            coordinates: [],
            popupOptions: popupOptions,
            popupOpen: !0,
            pan: !1,
            measurement: !1,
            on: {
                click: function () {
                }, contextmenu: function () {
                }
            },
            addTo: $.sMap.features.polygon.group
        }, t);
        e.before(), $.sMap.features.polygon.remove(e.name);
        var i, n = "map-polygon", o = e.style;
        (o.featureGroup = n, o.featureId = e.name, o.renderer = $.sMap.features.renderer, polygonsOptions[e.name] = e, polygons[e.name] = L.polygon(e.coordinates, o).addTo(e.addTo), !1 !== e.popup) && (i = e.popup.custom ? e.popup.custom : '<header class="popup-header" data-i18n="' + e.popup.title.i18n + '">' + e.popup.title.html + '</header><div class="popup-contents" data-i18n="' + e.popup.description.i18n + '">' + e.popup.description.html + "</div>", i = '<div class="feature-popup feature-popup-' + e.class + '" data-feature-group="' + n + '" data-feature-id="' + e.name + '">' + i + "</div>", polygons[e.name].bindPopup(i, e.popupOptions), e.popupOpen && polygons[e.name].openPopup());
        return e.pan && map.fitBounds(polygons[e.name].getBounds), e.measurement && polygons[e.name].showMeasurements(), polygons[e.name].on("click", e.on.click), polygons[e.name].on("contextmenu", e.on.contextmenu), $.sMap.features.addListenersToToolbar(e), e.after(), polygons[e.name]
    }
});
var polylines = {}, polylinesOptions = {};

function updateUrl() {
    updateStateCurrent();
    var t = generateURL({
        lat: states.current.latlng.lat,
        lng: states.current.latlng.lng,
        zoom: states.current.zoom,
        domain: "href"
    });
    history.pushState("", "", t)
}

function getDataStores(t) {
    $.crs({
        mode: env.mode,
        task: "dataStore",
        url: env.url.layerManagement.dataStore[t],
        urlParams: "",
        type: "GET",
        data: {},
        dataType: "json",
        success: function (t) {
            $.each(t.value, function (t, e) {
                $.sMap.layers.dynamic.dataStores[e.id] = e, getDataStoreLayers(e)
            })
        }
    })
}

function getLayerGroups() {
    $.crs({
        mode: env.mode,
        task: "layerGroup",
        url: env.url.layerManagement.layerGroup.layerGroup,
        urlParams: "",
        type: "GET",
        data: {},
        dataType: "json",
        headers: {token: "erewer"},
        success: function (t) {
            $.each(t.value, function (t, e) {
                $.sMap.layers.dynamic.layerGroups[e.id] = e, getLayerGroupLayers(e)
            })
        }
    })
}

function getDataStoreLayers(t) {
    $.crs({
        mode: env.mode,
        task: "dataStoreLayer",
        url: env.url.layerManagement.dataStore.layer,
        urlParams: "/" + t.id + "/layers",
        type: "GET",
        data: {},
        dataType: "json",
        success: function (e) {
            var i = '<div class="title large ' + t.type + '">' + t.datastore_name + "</div>", n = "", o = "",
                s = {base: !1, over: !1};
            $.each(e.value, function (t, e) {
                e.is_base ? (s.base = !0, $.sMap.layers.dynamic.base.all[e.id] = e, n += '<li data-layer-id="' + e.id + '"><div class="option"><label class="bullet small"><input type="radio" name="dynamic-baselayer" value="' + e.id + '"><span>' + e.name + '</span></label><span class="' + (e.is_identify ? "identify-true" : "identify-false") + '"></span></div><ul class="sub-tree"></ul></li>') : (s.over = !0, $.sMap.layers.dynamic.over.all[e.id] = e, map.createPane(e.id), o += '<li data-layer-id="' + e.id + '"><div class="option"><label class="bullet small"><input type="checkbox" name="dynamic-overlayer" value="' + e.id + '"><span>' + e.name + '</span></label><span class="' + (e.is_identify ? "identify-true" : "identify-false") + '"></span></div><ul class="sub-tree"></ul></li>')
            }), n = '<ul class="tree">' + n + "</ul>", o = '<ul class="tree">' + o + "</ul>", (s.base || s.over) && ($("aside.layer-management form").append('<div class="option-group" data-store-id="' + t.id + '"></div>'), $("aside.layer-management form").find('.option-group[data-store-id="' + t.id + '"]').append(i)), s.base && ($("aside.layer-management form").find('.option-group[data-store-id="' + t.id + '"]').append('<div class="title has-icon small icon-baselayer" data-i18n="site-baselayers"></div>'), $("aside.layer-management form").find('.option-group[data-store-id="' + t.id + '"]').append(n)), s.over && ($("aside.layer-management form").find('.option-group[data-store-id="' + t.id + '"]').append('<div class="title has-icon small icon-overlayer" data-i18n="site-overlayers"></div>'), $("aside.layer-management form").find('.option-group[data-store-id="' + t.id + '"]').append(o)), $('input[name="dynamic-baselayer"]').on("change", function (t) {
                t.preventDefault(), t.stopPropagation(), $.sMap.layers.dynamic.base.render($(this).val())
            }), $('input[name="dynamic-overlayer"]').on("change", function (t) {
                t.preventDefault(), t.stopPropagation(), $.sMap.layers.dynamic.over.render($(this).val())
            }), site.panels.layerManagement.element.i18n()
        }
    })
}

function getLayerGroupLayers(t) {
    $.crs({
        mode: env.mode,
        task: "layerGroupLayer",
        url: env.url.layerManagement.layerGroup.layer,
        urlParams: "/" + t.id,
        type: "GET",
        data: {},
        dataType: "json",
        headers: {token: "erewer"},
        success: function (e) {
            var i = '<div class="title large ' + t.type + '">' + t.name + "</div>", n = "", o = "",
                s = {base: !1, over: !1};
            $.each(e, function (t, e) {
                e.is_base ? (s.base = !0, $.sMap.layers.dynamic.base.all[e.id] = e, n += '<li data-layer-id="' + e.id + '"><div class="option"><label class="bullet small"><input type="radio" name="dynamic-baselayer" value="' + e.id + '"><span>' + e.name + '</span></label><span class="' + (e.is_identify ? "identify-true" : "identify-false") + '"></span></div><ul class="sub-tree"></ul></li>') : (s.over = !0, $.sMap.layers.dynamic.over.all[e.id] = e, map.createPane(e.id), o += '<li data-layer-id="' + e.id + '"><div class="option"><label class="bullet small"><input type="checkbox" name="dynamic-overlayer" value="' + e.id + '"><span>' + e.name + '</span></label><span class="' + (e.is_identify ? "identify-true" : "identify-false") + '"></span></div><ul class="sub-tree"></ul></li>')
            }), n = '<ul class="tree">' + n + "</ul>", o = '<ul class="tree">' + o + "</ul>", (s.base || s.over) && ($("aside.layer-management form").append('<div class="option-group" data-store-id="' + t.id + '"></div>'), $("aside.layer-management form").find('.option-group[data-store-id="' + t.id + '"]').append(i)), s.base && ($("aside.layer-management form").find('.option-group[data-store-id="' + t.id + '"]').append('<div class="title has-icon small icon-baselayer" data-i18n="site-baselayers"></div>'), $("aside.layer-management form").find('.option-group[data-store-id="' + t.id + '"]').append(n)), s.over && ($("aside.layer-management form").find('.option-group[data-store-id="' + t.id + '"]').append('<div class="title has-icon small icon-overlayer" data-i18n="site-overlayers"></div>'), $("aside.layer-management form").find('.option-group[data-store-id="' + t.id + '"]').append(o)), $('input[name="dynamic-baselayer"]').on("change", function (t) {
                t.preventDefault(), t.stopPropagation(), $.sMap.layers.dynamic.base.render($(this).val())
            }), $('input[name="dynamic-overlayer"]').on("change", function (t) {
                t.preventDefault(), t.stopPropagation(), $.sMap.layers.dynamic.over.render($(this).val())
            }), site.panels.layerManagement.element.i18n()
        }
    })
}

function updatePoiSearch() {
    "" !== $.sMap.search.poi.last.query && "" !== $.sMap.search.poi.last.icon && $.sMap.search.look({
        query: $.sMap.search.poi.last.query,
        icon: $.sMap.search.poi.last.icon
    })
}

function switchSearchDropdown() {
    site.search.autocomplete.hideVisibility(), site.search.suggestions.hideVisibility(), $.clearButton.check(), isActive($.sMap.search.implement.options.history) && $.sMap.search.history.length > 0 && (site.search.autocomplete.showVisibility(), site.search.autocomplete.html(getAutocompleteHistory()), site.search.autocomplete.i18n(), site.search.autocomplete.find("li").on("click", function () {
        site.search.autocomplete.hideVisibility(), makeMarkerFromAutocomplete($(this))
    }))
}

function generateAutocompleteItem(t, e) {
    return t += '<li data-title="' + e.title + '" data-lat="' + e.latlng.lat + '" data-lng="' + e.latlng.lng + '" data-icon="' + e.icon + '"><div class="icon-background"><div class="icon ' + e.icon + '"></div></div><div class="value" data-i18n="' + e.i18n + '">' + e.title + "</div>" + e.description + "</li>"
}

function makeMarkerFromAutocomplete(t) {
    var e = {lat: t.attr("data-lat"), lng: t.attr("data-lng")};
    makeSearchMarker({
        title: {html: t.attr("data-title"), i18n: ""},
        i18n: t.find(".value").attr("data-i18n"),
        latlng: e,
        icon: t.attr("data-icon")
    })
}

function makeSearchMarker(t) {
    var e = $.extend(!0, {title: {}, i18n: {}, latlng: {}, icon: "icon-point"}, t);
    $.sMap.reverseGeocode.find({
        after: function (t) {
            $.sMap.features.marker.create({
                name: "search",
                popup: {title: e.title, description: {html: t.address_compact, i18n: ""}},
                latlng: e.latlng,
                icon: icons.default.blue,
                pan: !0,
                history: {title: e.title.html, description: "", i18n: e.i18n, icon: e.icon, latlng: e.latlng}
            })
        }, state: {latlng: e.latlng}
    })
}

function getAutocompleteHistory() {
    var t = "";
    return $.each($.sMap.search.history.reverse(), function (e, i) {
        e >= $.sMap.search.implement.options.counts.geocode || (t = generateAutocompleteItem(t, i))
    }), t = "<ul>" + t + "</ul>", $.sMap.search.history.reverse(), t
}

$(document).ready(function () {
    $.sMap.features.polyline = {}, $.sMap.features.polyline.remove = function (t) {
        void 0 !== polylines[t] && (polylines[t].remove(), delete polylines[t])
    }, $.sMap.features.polyline.wipe = function () {
        void 0 !== $.sMap.features.polyline.group && $.sMap.features.polyline.group.remove()
    }, $.sMap.features.polyline.create = function (t) {
        void 0 === $.sMap.features.polyline.group && ($.sMap.features.polyline.group = L.layerGroup().addTo(map));
        var e = $.extend(!0, {
            before: function () {
            },
            after: function () {
            },
            name: "temp",
            popup: !1,
            class: "default",
            style: styles.default.polyline,
            coordinates: [],
            popupOptions: popupOptions,
            popupOpen: !0,
            pan: !1,
            measurement: !1,
            on: {
                click: function () {
                }, contextmenu: function () {
                }
            },
            addTo: $.sMap.features.polyline.group
        }, t);
        e.before(), $.sMap.features.polyline.remove(e.name);
        var i, n = "map-polyline", o = e.style;
        (o.featureGroup = n, o.featureId = e.name, o.renderer = $.sMap.features.renderer, polylinesOptions[e.name] = e, polylines[e.name] = L.polyline(e.coordinates, o).addTo(e.addTo), !1 !== e.popup) && (i = e.popup.custom ? e.popup.custom : '<header class="popup-header" data-i18n="' + e.popup.title.i18n + '">' + e.popup.title.html + '</header><div class="popup-contents" data-i18n="' + e.popup.description.i18n + '">' + e.popup.description.html + "</div>", i = '<div class="feature-popup feature-popup-' + e.class + '" data-feature-group="' + n + '" data-feature-id="' + e.name + '">' + i + "</div>", polylines[e.name].bindPopup(i, e.popupOptions), e.popupOpen && polylines[e.name].openPopup());
        return e.pan && map.fitBounds(polylines[e.name].getBounds), e.measurement && polylines[e.name].showMeasurements(), polylines[e.name].on("click", e.on.click), polylines[e.name].on("contextmenu", e.on.contextmenu), $.sMap.features.addListenersToToolbar(e), e.after(), polylines[e.name]
    }
}), $(document).ready(function () {
    $.sMap.menu = {
        implement: function () {
        }
    }, $.sMap.menu.implement = function (t) {
        $.extend(!0, {}, t), site.anchors.top1.direct.find(".triggers-wrapper").length || addOptionTriggerWrapper();
        site.search.element.length ? site.search.wrapper.find(".first").after('<div class="icon-background"><a data-i18n="[title]tooltip-options" href="#" class="icon is-small icon-menu tooltip-bottom"></a></div><div class="spacer"></div>') : site.anchors.top1.direct.find(".triggers").append('<div class="icon-background is-lighter"><a data-i18n="[title]tooltip-options" href="#" class="icon is-large icon-menu desktop tooltip-bottom"></a></div>');
        site.overlay.before('<aside class="panel-aside options is-invisible"><header><div data-i18n="site-options"></div></header><section><form class="form"></form></section><footer></footer></aside>'), site.panels.options.triggers.open = $(".icon-menu"), site.panels.options.element = $(".panel-aside.options"), site.panels.options.triggers.open.on("click", function (t) {
            openPanel({event: t, type: "options", modal: !0})
        })
    }
}), $(document).ready(function () {
    $.sMap.fullscreen = {
        implement: function () {
        }
    }, $.sMap.fullscreen.implement = function (t) {
        if ($.extend(!0, {}, t), Modernizr.fullscreen) {
            site.anchors.top1.direct.find(".triggers-wrapper").length || addOptionTriggerWrapper();
            site.anchors.top1.direct.find(".triggers").append('<div class="icon-background is-lighter"><a data-i18n="[title]tooltip-fullscreen" href="#" class="icon is-large icon-fullscreen desktop tooltip-bottom"></a></div>'), $(".icon-fullscreen").on("click", function (t) {
                t.preventDefault(), t.stopPropagation();
                var e = document.querySelector(".smap-main");
                document.fullscreenEnabled && !document.fullscreenElement ? e.requestFullscreen() : document.exitFullscreen && document.exitFullscreen(), document.webkitFullscreenEnabled && !document.webkitFullscreenElement ? e.webkitRequestFullscreen() : document.webkitExitFullscreen && document.webkitExitFullscreen(), document.mozFullScreenEnabled && !document.mozFullScreenElement ? e.mozRequestFullScreen() : document.mozCancelFullScreen && document.mozCancelFullScreen(), document.msFullscreenEnabled && !document.msFullscreenElement ? e.msRequestFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
            })
        }
    }
}), $(document).ready(function () {
    $.sMap.logo = {
        implement: function () {
        }
    }, $.sMap.logo.implement = function (t) {
        var e = '<a href="#" id="site-logo" style="background-image: url(' + $.extend(!0, {url: smapWd + "assets/images/site-logo.png"}, t).url + ')" class="site-logo desktop tablet mobile"></a>';
        site.anchors.bottom1.middle.append(e), $("#site-logo").attr("href", env.url.domain)
    }
}), $(document).ready(function () {
    $.sMap.zoomControl = {
        implement: function () {
        }
    }, $.sMap.zoomControl.implement = function (t) {
        $.extend(!0, {}, t);
        site.panel.footer.triggers.left.append('<div class="icon-background is-lighter is-rounded is-boxed margined-small"><a data-i18n="[title]tooptip-zoom-in" href="#" class="icon is-small icon-zoom-in desktop tooltip-right"></a></div><div class="icon-background is-lighter is-rounded is-boxed margined-large"><a data-i18n="[title]tooptip-zoom-out" href="#" class="icon is-small icon-zoom-out desktop tooltip-right"></a></div>');
        var e = $(".icon-zoom-in"), i = $(".icon-zoom-out");
        e.on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), map.zoomIn()
        }), i.on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), map.zoomOut()
        })
    }
}), $(document).ready(function () {
    $.sMap.userLocation = {
        success: function () {
        }, error: function () {
        }, get: function () {
        }, implement: function () {
        }
    }, $.sMap.userLocation.success = function (t) {
        t.accuracy;
        map.setView(t.latlng, $.sMap.userLocation.implement.options.zoom), updateStateCurrent(), updateStateUser(t.latlng), $.sMap.features.marker.create({
            name: "user-location",
            popup: {
                title: {html: '<span data-i18n="site-my-location"></span>', i18n: ""},
                description: {
                    html: generateLatlngHtml({
                        lat: parseFloat(states.user.latlng.lat),
                        lng: parseFloat(states.user.latlng.lng),
                        type: "block"
                    }), i18n: ""
                }
            },
            latlng: states.user.latlng,
            pan: !0
        })
    }, $.sMap.userLocation.error = function (t) {
    }, $.sMap.userLocation.get = function (t) {
        map.locate({}), map.on("locationfound", $.sMap.userLocation.success), map.on("locationerror", $.sMap.userLocation.error)
    }, $.sMap.userLocation.implement = function (t) {
        $.sMap.userLocation.implement.options = $.extend(!0, {history: !1, onLoad: !1, zoom: 16}, t);
        site.panel.footer.triggers.right.append('<div class="icon-background is-lighter is-rounded is-boxed margined-small"><a data-i18n="[title]tooptip-user-location" href="#" class="icon is-large icon-geolocation tablet mobile tooltip-left"></a></div>'), site.panel.footer.triggers.left.append('<div class="icon-background is-lighter is-rounded is-boxed margined-large"><a data-i18n="[title]tooptip-user-location" href="#" class="icon is-large icon-geolocation desktop tooltip-right"></a></div>'), $(".icon-geolocation").on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), $.sMap.userLocation.get()
        }), $.sMap.userLocation.implement.options.onLoad && $.sMap.userLocation.get()
    }
}), $(document).ready(function () {
    $.sMap.reverseGeocode = {
        find: function () {
        }, mark: function () {
        }, show: function () {
        }
    }, $.sMap.reverseGeocode.find = function (t) {
        var e = $.extend(!0, {
            before: function () {
            }, after: function () {
            }, state: states.current
        }, t);
        e.before();
        var i = {lat: e.state.latlng.lat, lon: e.state.latlng.lng};
        $.crs({
            mode: env.mode,
            task: "reverseGeocode",
            url: env.url.search.reverse,
            urlParams: "",
            type: "GET",
            data: i,
            dataType: "json",
            success: function (t) {
                e.after(t)
            }
        })
    }, $.sMap.reverseGeocode.show = function (t) {
        var e = $.extend(!0, {state: states.current}, t);
        $.sMap.reverseGeocode.find({
            after: function (t) {
                var i = "bottom", n = $.i18n("site-reverse-geocode"),
                    o = t.address_compact + "<br/>" + generateLatlngHtml({
                        lat: e.state.latlng.lat,
                        lng: e.state.latlng.lng,
                        type: "block"
                    });
                $.sMap.modal.show({
                    before: function () {
                    },
                    after: function () {
                        $.sMap.modal.types[i].element.find(".trigger-copy").on("click", function (t) {
                            t.preventDefault(), t.stopPropagation(), copyToClipboard(generateLatlngHtml({
                                lat: e.state.latlng.lat,
                                lng: e.state.latlng.lng,
                                type: "comma"
                            }))
                        }), $.sMap.modal.types[i].element.find(".trigger-share").on("click", function (t) {
                            t.preventDefault(), t.stopPropagation(), copyToClipboard(generateURL({
                                lat: e.state.latlng.lat,
                                lng: e.state.latlng.lng,
                                zoom: e.state.zoom,
                                domain: "href"
                            }))
                        })
                    },
                    type: i,
                    parent: site.main,
                    html: {
                        header: n,
                        contents: o,
                        footer: '<div class="row"><div class="col-xs-6 padded-side trigger-share"><a class="is-iconed is-large" href="#"><span class="icon-background"><em class="icon icon-share"></em></span><span class="icon-title" data-i18n="site-share"></span></a></div><div class="col-xs-6 padded-side trigger-copy"><a class="is-iconed is-large" href="#"><span class="icon-background"><em class="icon icon-copy"></em></span><span class="icon-title" data-i18n="site-copy"></span></a></div></div>'
                    },
                    overlay: !1,
                    timeout: 5e3,
                    clickToHide: map,
                    class: "large"
                })
            }, state: e.state
        })
    }, $.sMap.reverseGeocode.mark = function (t) {
        var e = $.extend(!0, {
            state: states.current,
            popup: {title: {html: "", i18n: ""}, description: {html: "", i18n: ""}},
            icon: icons.default.blue
        }, t);
        $.sMap.reverseGeocode.find({
            after: function (t) {
                $.sMap.features.marker.create({
                    name: "reverse-geocode",
                    popup: {
                        title: {html: e.popup.title.html, i18n: e.popup.title.i18n},
                        description: {
                            html: e.popup.description.html || t.address_compact,
                            i18n: e.popup.description.i18n
                        }
                    },
                    icon: e.icon,
                    latlng: e.state.latlng,
                    pan: !0
                })
            }, state: e.state
        })
    }
}), $(document).ready(function () {
    $.sMap.staticMap = {
        get: function () {
        }, open: function () {
        }
    }, $.sMap.staticMap.get = function (t) {
        var e = $.extend(!0, {state: states.current, width: 600, height: 400, label: " ", color: "red"}, t);
        return env.url.static + "?width=" + e.width + "&height=" + e.height + "&zoom_level=" + e.state.zoom + "&markers=color:" + e.color + "|label:" + e.label + "|" + e.state.latlng.lng + "," + e.state.latlng.lat
    }, $.sMap.staticMap.open = function (t) {
        var e = $.extend(!0, {
            before: function () {
            }, after: function () {
            }, state: states.current, width: 600, height: 400, label: " ", color: "red"
        }, t);
        e.before();
        var i = $.sMap.staticMap.get({
            state: e.state,
            width: e.width,
            height: e.height,
            label: e.label,
            color: e.color
        });
        window.open(i, "_blank"), e.after()
    }
}), $(document).ready(function () {
    $.sMap.login = function (t) {
        $.extend(!0, {}, t);
        site.anchors.top1.reverse.append('<a href="#" class="stylish-link trigger-login is-boxed desktop" data-i18n="site-login"></a>');
        site.anchors.bottom1.reverse.append('<a href="#" class="stylish-link trigger-login is-boxed mobile tablet" data-i18n="site-login"></a>');
        site.overlay.before('<aside class="panel-aside login is-invisible"><header><div data-i18n="site-login"></div></header><section><form class="form"><div class="form-group"><input type="text" name="email" data-i18n="[placeholder]site-email"></div><div class="form-group"><input type="password" name="password" data-i18n="[placeholder]site-password"></div><div class="form-group"><button type="button" name="button" data-i18n="site-login-submit"></button></div></form></section><footer></footer></aside>'), site.panels.login.triggers.open = $(".trigger-login"), site.panels.login.element = $(".panel-aside.login"), site.panels.login.triggers.open.on("click", function (t) {
            openPanel({event: t, type: "login", modal: !0})
        })
    }
}), $(document).ready(function () {
    var t;
    $.sMap.dynamicLocation = {
        update: function () {
        }, implement: function () {
        }
    }, $.sMap.dynamicLocation.update = function (e) {
        var i = "Bad type...";
        "latlng" === t.format && (i = generateLatlngHtml({
            lat: e.lat,
            lng: e.lng,
            type: "comma"
        })), "dms" === t.format && (i = generateDmsHtml({
            lat: e.lat,
            lng: e.lng,
            type: "comma"
        })), $("#location input").val(i)
    }, $.sMap.dynamicLocation.implement = function (e) {
        t = $.extend(!0, {format: "dms", source: "center"}, e);
        site.anchors.bottom2.middle.append('<div class="site-location desktop tablet mobile" id="location"><div class="item-set horizontal is-boxed wrapper"><div class="icon-background is-secondary"><span data-i18n="[title]tooptip-copy" class="icon is-large icon-copy tooltip-right"></span></div><input readonly="readonly"></div></div>');
        var i = $("#location"), n = i.find("input");
        i.find(".icon-copy").on("click", function () {
            copyToClipboard(n.val())
        }), "center" === t.source && (map.on("zoomend", function () {
            updateStateCurrent(), $.sMap.dynamicLocation.update(states.current.latlng)
        }), map.on("moveend", function () {
            updateStateCurrent(), $.sMap.dynamicLocation.update(states.current.latlng)
        })), "mouse" === t.source && map.on("mousemove", function (t) {
            updateStateMouse(t.latlng), $.sMap.dynamicLocation.update(states.mouse.latlng)
        }), "click" === t.source && map.on("click", function (t) {
            updateStateClick(t.latlng), $.sMap.dynamicLocation.update(states.click.latlng)
        }), "contextmenu" === t.source && map.on("contextmenu", function (t) {
            updateStateContextmenu(t.latlng), $.sMap.dynamicLocation.update(states.contextmenu.latlng)
        }), updateStateCurrent(), $.sMap.dynamicLocation.update(states.current.latlng)
    }
}), $(document).ready(function () {
    var t;
    $.sMap.dynamicUrl = function (e) {
        t = $.extend(!0, {marker: !1}, e), map.on("zoomend", updateUrl), map.on("moveend", updateUrl), t.marker && $.sMap.features.marker.create({
            name: "dynamicUrl",
            popup: {
                title: {html: '<span data-i18n="site-dynamic-url-marker-title"></span>', i18n: ""},
                description: {
                    html: generateLatlngHtml({
                        lat: parseFloat(states.current.latlng.lat),
                        lng: parseFloat(states.current.latlng.lng),
                        type: "block"
                    }), i18n: ""
                }
            },
            latlng: states.current.latlng,
            popupOpen: !1
        })
    }
}), $(document).ready(function () {
    $.sMap.contextmenu = {
        build: function () {
        }
    }, $.sMap.contextmenu.build = function (t) {
        var e = $.extend(!0, {
            here: !1,
            start: !1,
            end: !1,
            tag: !1,
            bookmark: !1,
            ticket: !1,
            distance: !1,
            area: !1,
            copy: !1,
            share: !1,
            static: !1,
            print: !1
        }, t), i = {};
        e.here && (i.here = {
            name: '<div class="icon-background"><div class="icon icon-here"></div></div><em data-i18n="contextmenu-here"></em>',
            isHtmlName: !0,
            className: "has-line",
            icon: "none",
            callback: function (t, e) {
                map.panTo(states.contextmenu.latlng), $.sMap.reverseGeocode.show({state: states.contextmenu})
            }
        }), e.start && (i.start = {
            name: '<div class="icon-background"><div class="icon icon-start"></div></div><em data-i18n="contextmenu-start"></em>',
            isHtmlName: !0,
            callback: function (t, e) {
                $.sMap.routing.setStartPoint(states.contextmenu)
            }
        }), e.end && (i.end = {
            name: '<div class="icon-background"><div class="icon icon-end"></div></div><em data-i18n="contextmenu-end"></em>',
            isHtmlName: !0,
            className: "has-line",
            callback: function (t, e) {
                $.sMap.routing.setEndPoint(states.contextmenu)
            }
        }), e.tag && isUserSignedIn() && (i.tag = {
            name: '<div class="icon-background"><div class="icon icon-tag"></div></div><em data-i18n="contextmenu-tag"></em>',
            isHtmlName: !0,
            callback: function (t, e) {
            }
        }), e.bookmark && isUserSignedIn() && (i.bookmark = {
            name: '<div class="icon-background"><div class="icon icon-bookmark"></div></div><em data-i18n="contextmenu-bookmark"></em>',
            isHtmlName: !0,
            callback: function (t, e) {
            }
        }), e.ticket && (i.ticket = {
            name: '<div class="icon-background"><div class="icon icon-here"></div></div><em data-i18n="contextmenu-ticket"></em>',
            isHtmlName: !0,
            className: "has-line",
            icon: "ticket",
            callback: function (t, e) {
            }
        }), e.distance && (i.distance = {
            name: '<div class="icon-background"><div class="icon icon-distance"></div></div><em data-i18n="contextmenu-distance"></em>',
            isHtmlName: !0,
            callback: function (t, e) {
                var i = styles.measurement.polyline;
                i.featureGroup = "measurement-polyline", i.featureId = "not set", new L.Draw.Polyline(map, {shapeOptions: i}).enable()
            }
        }), e.area && (i.area = {
            name: '<div class="icon-background"><div class="icon icon-area"></div></div><em data-i18n="contextmenu-area"></em>',
            isHtmlName: !0,
            className: "has-line",
            callback: function (t, e) {
                var i = styles.measurement.polygon;
                i.featureGroup = "measurement-polygon", i.featureId = "not set", new L.Draw.Polygon(map, {shapeOptions: i}).enable()
            }
        }), e.copy && (i.copy = {
            name: '<div class="icon-background"><div class="icon icon-copy"></div></div><em data-i18n="contextmenu-copy"></em>',
            isHtmlName: !0,
            callback: function (t, e) {
                copyToClipboard(generateLatlngHtml({
                    lat: states.contextmenu.latlng.lat,
                    lng: states.contextmenu.latlng.lng,
                    type: "comma"
                }))
            }
        }), e.share && (i.share = {
            name: '<div class="icon-background"><div class="icon icon-share"></div></div><em data-i18n="contextmenu-share"></em>',
            isHtmlName: !0,
            callback: function (t, e) {
                copyToClipboard(generateURL({
                    lat: states.contextmenu.latlng.lat,
                    lng: states.contextmenu.latlng.lng,
                    zoom: states.contextmenu.zoom,
                    domain: "href"
                }))
            }
        }), e.static && (i.static = {
            name: '<div class="icon-background"><div class="icon icon-static-map"></div></div><em data-i18n="contextmenu-static-map"></em>',
            isHtmlName: !0,
            callback: function (t, e) {
                $.sMap.staticMap.open({state: states.contextmenu, width: 600, height: 400, color: "red"})
            }
        }), e.print && (i.print = {
            name: '<div class="icon-background"><div class="icon icon-print"></div></div><em data-i18n="contextmenu-print"></em>',
            isHtmlName: !0,
            callback: function (t, e) {
            }
        }), $.contextMenu({
            selector: "#site-map",
            animation: {duration: 300, show: "fadeIn", hide: "fadeOut"},
            items: i
        })
    }
}), $(document).ready(function () {
    $.sMap.measurement = function (t) {
        $.extend(!0, {}, t), featureGroups.map.measurement = (new L.FeatureGroup).addTo(map), drawControls.map.measurement = new L.Control.Draw({
            position: "top" + site.settings.directions.direct,
            draw: !0,
            edit: !0
        }), map.on("draw:created", function (t) {
            var e = t.layerType, i = t.layer,
                n = void 0 !== t.layer.options.featureGroup ? t.layer.options.featureGroup : t.layer.options.icon.options.featureGroup;
            "measurement-polyline" === n && "polyline" === e && $.sMap.features.polyline.create({
                before: function () {
                },
                after: function () {
                },
                name: "measurement-polyline",
                popup: {title: {html: "", i18n: ""}, description: {html: "", i18n: ""}},
                class: "default",
                styles: styles.measurement.polyline,
                coordinates: i._latlngs,
                popupOptions: popupOptions,
                popupOpen: !1,
                pan: !1,
                measurement: !0,
                on: {
                    click: function () {
                        polylines["measurement-polyline"].remove(), delete polylines["measurement-polyline"], delete polylinesOptions["measurement-polyline"]
                    }, contextmenu: function () {
                        console.log("cm")
                    }
                }
            }), "measurement-polygon" === n && "polygon" === e && $.sMap.features.polygon.create({
                before: function () {
                },
                after: function () {
                },
                name: "measurement-polygon",
                popup: {title: {html: "", i18n: ""}, description: {html: "", i18n: ""}},
                class: "default",
                styles: styles.measurement.polygon,
                coordinates: i._latlngs,
                popupOptions: popupOptions,
                popupOpen: !1,
                pan: !1,
                measurement: !0,
                on: {
                    click: function () {
                        polygons["measurement-polygon"].remove(), delete polygons["measurement-polygon"], delete polygonsOptions["measurement-polygon"]
                    }, contextmenu: function () {
                        console.log("cm")
                    }
                }
            })
        })
    }
}), $(document).ready(function () {
    var t, e = {fa: {i18n: "site-persian"}, en: {i18n: "site-english"}, ar: {i18n: "site-arabic"}};
    $.sMap.locale = {
        implement: function () {
        }
    }, $.sMap.locale.implement = function (i) {
        t = $.extend(!0, {locales: ["fa", "en", "ar"]}, i);
        var n = "";
        $.each(t.locales, function (t, i) {
            void 0 !== e[i] && (n += '<div class="col-xs-4 padded-side"><label class="round bullet small"><input type="radio" name="locale" value="' + i + '"><span class="checkmark" data-i18n="' + e[i].i18n + '"></span></label></div>')
        });
        n = '<div class="title has-icon small icon-locale" data-i18n="site-language"></div><div class="row">' + n + "</div>";
        $("aside.options form").append(n), $('input[name="locale"][value="' + presets.locale + '"]').prop("checked", !0), $('input[name="locale"]').on("change", function () {
            setLocale({
                locale: $(this).val(), before: function () {
                    destroyTooltips()
                }, after: function () {
                }
            })
        })
    }
}), $(document).ready(function () {
    $.sMap.media = function (t) {
        $.extend(!0, {}, t);
        site.panel.footer.triggers.right.append('<a href="#" class="trigger-media"><span class="icon"></span><span class="title" data-i18n="site-media"></span></a>'), $(".trigger-media").on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), site.panel.footer.element.toggleClass("is-active")
        })
    }
}), $(document).ready(function () {
    $.sMap.editor = {
        points: {settings: {features: {}, on: {}}, features: [], geometries: []},
        polylines: {settings: {features: {}, on: {}}, features: [], geometries: []},
        polygons: {settings: {features: {}, on: {}}, features: [], geometries: []}
    }, $.sMap.editor.options, $.sMap.editor.implement = function (t) {
        $.sMap.editor.options = $.extend(!0, {renderer: "svg"}, t), "canvas" === $.sMap.editor.options.renderer && ($.sMap.editor.renderer = L.canvas()), "svg" === $.sMap.editor.options.renderer && ($.sMap.editor.renderer = L.svg());
        site.anchors.center.reverse.append('<div class="triggers-wrapper site-editor"><div class="item-set vertical is-boxed triggers"></div></div>'), site.editor.element = $(".site-editor .triggers"), featureGroups.api.editor = (new L.FeatureGroup).addTo(map), drawControls.api.editor = new L.Control.Draw({
            position: "top" + site.settings.directions.direct,
            draw: !0,
            edit: !0
        }), map.on("draw:created", function (t) {
            var e = t.layerType,
                i = (t.layer, void 0 !== t.layer.options.featureGroup ? t.layer.options.featureGroup : t.layer.options.icon.options.featureGroup);
            "editor-point" === i && "marker" === e && ($.sMap.editor.points.add(t.layer.toGeoJSON()), $.sMap.editor.points.settings.on.create($.sMap.editor.points.geometries[$.sMap.editor.points.geometries.length - 1]), $.sMap.editor.points.settings.on.change()), "editor-polyline" === i && "polyline" === e && ($.sMap.editor.polylines.add(t.layer.toGeoJSON()), $.sMap.editor.polylines.settings.on.create($.sMap.editor.polylines.geometries[$.sMap.editor.polylines.geometries.length - 1]), $.sMap.editor.polylines.settings.on.change()), "editor-polygon" === i && "polygon" === e && ($.sMap.editor.polygons.add(t.layer.toGeoJSON()), $.sMap.editor.polygons.settings.on.create($.sMap.editor.polygons.geometries[$.sMap.editor.polygons.geometries.length - 1]), $.sMap.editor.polygons.settings.on.change())
        }), map.on("draw:editvertex", function (t) {
            console.log(t)
        })
    }, $.sMap.editor.addListenersToToolbar = function (t) {
        var e;
        "editor-point" === t.featureGroup && (e = "points"), "editor-polygon" === t.featureGroup && (e = "polygons"), "editor-polyline" === t.featureGroup && (e = "polylines"), $.each($.sMap.editor[e].settings.toolbar, function (e, i) {
            $('[data-feature-group="' + t.featureGroup + '"][data-feature-id="' + t.featureId + '"]').find("li." + i.class).on("click", function () {
                i.callback(this)
            })
        })
    }
}), $(document).ready(function () {
    $.sMap.editor.points.start = function (t) {
        return $.sMap.editor.points.settings = $.extend(!0, {
            geoJson: {type: "FeatureCollection", features: []},
            modules: {cluster: !1, create: !1, drag: !1, delete: !1, get: !1, editText: !1, editIcon: !1},
            on: {
                click: !1, contextmenu: !1, create: function () {
                }, drag: function () {
                }, delete: function () {
                }, get: function () {
                }, editText: function () {
                }, editIcon: function () {
                }
            },
            icons: [{name: "Blue", class: "marker-blue", url: smapWd + "assets/images/marker-default-blue.svg"}],
            type: "marker",
            radius: 10,
            popupOptions: popupOptions
        }, t), $.sMap.editor.points.cluster = L.markerClusterGroup(), $.sMap.editor.points.settings.toolbar = [], $.sMap.editor.points.settings.modules.get && $.sMap.editor.points.settings.toolbar.push({
            i18n: "site-get",
            class: "icon-get",
            callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id");
                $.sMap.editor.points.settings.on.get($.sMap.editor.points.geometries[e])
            }
        }), $.sMap.editor.points.settings.modules.delete && $.sMap.editor.points.settings.toolbar.push({
            i18n: "site-delete",
            class: "icon-delete",
            callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id"), i = $.sMap.editor.points.delete(e);
                $.sMap.editor.points.settings.on.delete(i), $.sMap.editor.points.settings.on.change()
            }
        }), $.sMap.editor.points.settings.modules.editText && $.sMap.editor.points.settings.toolbar.push({
            i18n: "site-edit",
            class: "icon-edit",
            callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id");
                $.sMap.editor.points.geometries[e].properties.title = $(t).closest(".feature-popup").find("header input").val(), $.sMap.editor.points.geometries[e].properties.description = $(t).closest(".feature-popup").find(".popup-contents textarea").val(), $.sMap.editor.points.settings.on.editText($.sMap.editor.points.geometries[e]), $.sMap.editor.points.settings.on.change()
            }
        }), $.sMap.editor.points.settings.modules.editIcon && $.sMap.editor.points.settings.toolbar.push({
            i18n: "site-icon", class: "icon-icon", callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id"), i = "";
                $.each($.sMap.editor.points.settings.icons, function (t, e) {
                    var n = $.sMap.editor.points.settings.icons[t].url ? "background-image:url(" + $.sMap.editor.points.settings.icons[t].url + ")" : "";
                    i += '<li title="' + $.sMap.editor.points.settings.icons[t].title + '" class="' + $.sMap.editor.points.settings.icons[t].class + '" data-url="' + $.sMap.editor.points.settings.icons[t].url + '" style="' + n + '"></li>'
                }), i = '<ul class="gallery-icons">' + i + "</ul>", $.sMap.modal.show({
                    before: function () {
                    },
                    after: function () {
                    },
                    type: "center",
                    parent: site.main,
                    html: {header: $.i18n("site-choose-icon"), contents: i, footer: ""},
                    overlay: !0,
                    timeout: !1,
                    class: "large"
                }), $(".gallery-icons li").on("click", function () {
                    $(t).closest(".feature-popup").find(".icon-url").val($(this).attr("data-url")), $.sMap.modal.hide({type: "center"}), $.sMap.editor.points.geometries[e].properties.icon = $(t).closest(".feature-popup").find(".icon-url").val(), $($.sMap.editor.points.features[e]._icon).attr("src", $.sMap.editor.points.geometries[e].properties.icon), $.sMap.editor.points.settings.on.editIcon($.sMap.editor.points.geometries[e]), $.sMap.editor.points.settings.on.change()
                })
            }
        }), $.sMap.editor.points.settings.modules.create && (site.editor.element.append('<div class="icon-background is-lighter"><a data-i18n="[title]tooltip-add-point" href="#" class="icon is-large icon-editor-create-point tooltip-right"></a></div>'), site.editor.element.i18n()), $(".icon-editor-create-point").on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var e = icons.editor.blue;
            e.featureGroup = "editor-point", e.featureId = $.sMap.editor.points.geometries.length, new L.Draw.Marker(map, {icon: L.icon(e)}).enable()
        }), $.each($.sMap.editor.points.settings.geoJson.features, function (t, e) {
            $.sMap.editor.points.settings.geoJson.features[t].properties.dms = {
                north: latlngToDms($.sMap.editor.points.settings.geoJson.features[t].geometry.coordinates[1]),
                west: latlngToDms($.sMap.editor.points.settings.geoJson.features[t].geometry.coordinates[0])
            }, $.sMap.editor.points.draw(t, e)
        }), $.sMap.editor.points.geometries = $.sMap.editor.points.settings.geoJson.features, $.sMap.editor.points.all()
    }, $.sMap.editor.points.all = function () {
        return $.sMap.editor.points.geometries
    }, $.sMap.editor.points.inView = function () {
        var t = [], e = map.getBounds();
        return $.each($.sMap.editor.points.geometries, function (i, n) {
            var o = {lat: n.geometry.coordinates[1], lng: n.geometry.coordinates[0]};
            e.contains(o) && t.push(n)
        }), t
    }, $.sMap.editor.points.get = function (t) {
        return $.sMap.editor.points.geometries[t]
    }, $.sMap.editor.points.delete = function (t) {
        var e = $.sMap.editor.points.geometries[t];
        return $.sMap.editor.points.features[t].remove(), delete $.sMap.editor.points.geometries[t], delete $.sMap.editor.points.features[t], e
    }, $.sMap.editor.points.add = function (t) {
        var e = $.sMap.editor.points.geometries.length;
        return t.properties = $.extend({
            title: "site-editor-new-title",
            description: "site-editor-new-description",
            icon: smapWd + "assets/images/marker-default-blue.svg"
        }, t.properties), $.sMap.editor.points.geometries[e] = t, $.sMap.editor.points.draw(e, t), e
    }, $.sMap.editor.points.draw = function (t, e) {
        var i = "", n = "editor-point";
        $.each($.sMap.editor.points.settings.toolbar, function (t, e) {
            i += '<li data-i18n="[title]' + e.i18n + '" class="' + e.class + ' tooltip-bottom"></li>'
        }), "marker" === $.sMap.editor.points.settings.type ? $.sMap.editor.points.features[t] = L.marker([e.geometry.coordinates[1], e.geometry.coordinates[0]], {
            icon: L.icon({
                iconUrl: e.properties.icon,
                iconSize: [40, 40],
                iconAnchor: [20, 40],
                popupAnchor: [0, -40],
                featureGroup: n,
                featureId: t
            }), draggable: $.sMap.editor.points.settings.modules.drag, title: e.title
        }) : "circle" === $.sMap.editor.points.settings.type ? $.sMap.editor.points.features[t] = L.circle([e.geometry.coordinates[1], e.geometry.coordinates[0]], {
            style: styles.editor.point,
            featureGroup: n,
            featureId: t,
            renderer: $.sMap.editor.renderer,
            draggable: $.sMap.editor.points.settings.modules.drag,
            radius: $.sMap.editor.points.settings.radius
        }) : "circle-marker" === $.sMap.editor.points.settings.type && ($.sMap.editor.points.features[t] = L.circleMarker([e.geometry.coordinates[1], e.geometry.coordinates[0]], {
            style: styles.editor.point,
            featureGroup: n,
            featureId: t,
            renderer: $.sMap.editor.renderer,
            draggable: $.sMap.editor.points.settings.modules.drag,
            radius: $.sMap.editor.points.settings.radius
        })), $.sMap.editor.points.settings.modules.cluster ? ($.sMap.editor.points.cluster.addLayer($.sMap.editor.points.features[t]), map.addLayer($.sMap.editor.points.cluster)) : $.sMap.editor.points.features[t].addTo(map);
        var o = "";
        void 0 !== e.properties.title && (o += '<header class="popup-header">' + ($.sMap.editor.points.settings.modules.editText ? '<input data-i18n="[value]' + e.properties.title + '">' : '<span data-i18n="">' + e.properties.title + "</span>") + "</header>");
        void 0 !== e.properties.description && (o += '<div class="popup-contents">' + ($.sMap.editor.points.settings.modules.editText ? '<textarea data-i18n="' + e.properties.description + '"></textarea>' : '<p data-i18n="">' + e.properties.description + "</p>") + '<input class="icon-url" type="hidden"></div>');
        o = '<div class="feature-popup feature-popup-custom" ' + ('data-feature-group="' + n + '" data-feature-id="' + t + '"') + ">" + o + '<ul class="popup-toolbar small">' + i + "</ul></div>", $.sMap.editor.points.features[t].bindPopup(o, $.sMap.editor.points.settings.popupOptions), $.sMap.editor.addListenersToToolbar({
            featureGroup: n,
            featureId: t
        }), $.sMap.editor.points.features[t].on("click", function (t) {
            t.originalEvent.stopPropagation();
            var e = getFeatureInfoFromMarkerClick(t);
            "function" === $.type($.sMap.editor.points.settings.on.click) && $.sMap.editor.points.settings.on.click(e)
        }), $.sMap.editor.points.features[t].on("contextmenu", function (t) {
            t.originalEvent.stopPropagation();
            var e = getFeatureInfoFromMarkerClick(t);
            "function" === $.type($.sMap.editor.points.settings.on.contextmenu) && $.sMap.editor.points.settings.on.contextmenu(e)
        }), $.sMap.editor.points.settings.modules.drag && $.sMap.editor.points.features[t].on("dragend", function (e) {
            var i = e.target;
            $.sMap.editor.points.features[t] = i, $.sMap.editor.points.geometries[t].geometry = i.toGeoJSON().geometry, $.sMap.editor.points.geometries[t].properties.dms = {
                north: latlngToDms(i.getLatLng().lat),
                west: latlngToDms(i.getLatLng().lng)
            }, $.sMap.editor.points.settings.on.drag($.sMap.editor.points.geometries[t]), $.sMap.editor.points.settings.on.change()
        })
    }
}), $(document).ready(function () {
    $.sMap.editor.polygons.start = function (t) {
        return $.sMap.editor.polygons.settings = $.extend(!0, {
            geoJson: {type: "FeatureCollection", features: []},
            modules: {create: !1, edit: !1, delete: !1, get: !1, editText: !1},
            on: {
                click: !1, contextmenu: !1, create: function () {
                }, edit: function () {
                }, delete: function () {
                }, get: function () {
                }, editText: function () {
                }
            },
            popupOptions: popupOptions,
            style: styles.editor.polygon
        }, t), $.sMap.editor.polygons.settings.toolbar = [], $.sMap.editor.polygons.settings.modules.get && $.sMap.editor.polygons.settings.toolbar.push({
            i18n: "site-get",
            class: "icon-get",
            callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id");
                $.sMap.editor.polygons.settings.on.get($.sMap.editor.polygons.geometries[e])
            }
        }), $.sMap.editor.polygons.settings.modules.delete && $.sMap.editor.polygons.settings.toolbar.push({
            i18n: "site-delete",
            class: "icon-delete",
            callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id"), i = $.sMap.editor.polygons.delete(e);
                $.sMap.editor.polygons.settings.on.delete(i), $.sMap.editor.polygons.settings.on.change()
            }
        }), $.sMap.editor.polygons.settings.modules.editText && $.sMap.editor.polygons.settings.toolbar.push({
            i18n: "site-edit",
            class: "icon-edit",
            callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id");
                $.sMap.editor.polygons.geometries[e].properties.title = $(t).closest(".feature-popup").find("header input").val(), $.sMap.editor.polygons.geometries[e].properties.description = $(t).closest(".feature-popup").find(".popup-contents textarea").val(), $.sMap.editor.polygons.settings.on.editText($.sMap.editor.polygons.geometries[e]), $.sMap.editor.polygons.settings.on.change()
            }
        }), $.sMap.editor.polygons.settings.modules.create && (site.editor.element.append('<div class="icon-background is-lighter"><a data-i18n="[title]tooltip-add-polygon" href="#" class="icon is-large icon-editor-create-polygon tooltip-right"></a></div>'), site.editor.element.i18n()), $(".icon-editor-create-polygon").on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var e = styles.editor.polygon;
            e.featureGroup = "editor-polygon", e.featureId = $.sMap.editor.polygons.geometries.length, new L.Draw.Polygon(map, {shapeOptions: e}).enable()
        }), $.each($.sMap.editor.polygons.settings.geoJson.features, function (t, e) {
            $.sMap.editor.polygons.draw(t, e)
        }), $.sMap.editor.polygons.geometries = $.sMap.editor.polygons.settings.geoJson.features, $.sMap.editor.polygons.all()
    }, $.sMap.editor.polygons.all = function () {
        return $.sMap.editor.polygons.geometries
    }, $.sMap.editor.polygons.get = function (t) {
        return $.sMap.editor.polygons.geometries[t]
    }, $.sMap.editor.polygons.delete = function (t) {
        var e = $.sMap.editor.polygons.geometries[t];
        return $.sMap.editor.polygons.features[t].remove(), delete $.sMap.editor.polygons.geometries[t], delete $.sMap.editor.polygons.features[t], e
    }, $.sMap.editor.polygons.add = function (t) {
        var e = $.sMap.editor.polygons.geometries.length;
        return t.properties = $.extend({
            title: "site-editor-new-title",
            description: "site-editor-new-description"
        }, t.properties), $.sMap.editor.polygons.geometries[e] = t, $.sMap.editor.polygons.draw(e, t), e
    }, $.sMap.editor.polygons.draw = function (t, e) {
        var i = "", n = "editor-polygon";
        $.each($.sMap.editor.polygons.settings.toolbar, function (t, e) {
            i += '<li data-i18n="[title]' + e.i18n + '" class="' + e.class + ' tooltip-bottom"></li>'
        }), $.sMap.editor.polygons.features[t] = L.geoJSON(e, {
            onEachFeature: function (t, e) {
            },
            style: $.sMap.editor.polygons.settings.style,
            featureGroup: n,
            featureId: t,
            renderer: $.sMap.editor.renderer
        }), featureGroups.api.editor.addLayer($.sMap.editor.polygons.features[t]);
        var o = "";
        void 0 !== e.properties.title && (o += '<header class="popup-header">' + ($.sMap.editor.polygons.settings.modules.editText ? '<input data-i18n="[value]' + e.properties.title + '">' : '<span data-i18n="">' + e.properties.title + "</span>") + "</header>");
        void 0 !== e.properties.description && (o += '<div class="popup-contents">' + ($.sMap.editor.polygons.settings.modules.editText ? '<textarea data-i18n="' + e.properties.description + '"></textarea>' : '<p data-i18n="">' + e.properties.description + "</p>") + '<input class="icon-url" type="hidden"></div>');
        o = '<div class="feature-popup feature-popup-custom" ' + ('data-feature-group="' + n + '" data-feature-id="' + t + '"') + ">" + o + '<ul class="popup-toolbar small">' + i + "</ul></div>", $.sMap.editor.polygons.features[t].bindPopup(o, $.sMap.editor.polygons.settings.popupOptions), $.sMap.editor.addListenersToToolbar({
            featureGroup: n,
            featureId: t
        }), $.sMap.editor.polygons.features[t].on("click", function (t) {
            t.originalEvent.stopPropagation();
            var e = getFeatureInfoFromMarkerClick(t);
            "function" === $.type($.sMap.editor.polygons.settings.on.click) && $.sMap.editor.polygons.settings.on.click(e)
        }), $.sMap.editor.polygons.features[t].on("contextmenu", function (t) {
            t.originalEvent.stopPropagation();
            var e = getFeatureInfoFromMarkerClick(t);
            void 0 === t.layer.options.editing && (t.layer.options.editing = {}), t.layer.editing._enabled ? t.layer.editing.disable() : t.layer.editing.enable(), "function" === $.type($.sMap.editor.polygons.settings.on.contextmenu) && $.sMap.editor.polygons.settings.on.contextmenu(e)
        })
    }
}), $(document).ready(function () {
    $.sMap.editor.polylines.start = function (t) {
        return $.sMap.editor.polylines.settings = $.extend(!0, {
            geoJson: {type: "FeatureCollection", features: []},
            modules: {create: !1, edit: !1, delete: !1, get: !1, editText: !1},
            on: {
                click: !1, contextmenu: !1, create: function () {
                }, edit: function () {
                }, delete: function () {
                }, get: function () {
                }, editText: function () {
                }
            },
            popupOptions: popupOptions,
            style: styles.editor.polyline
        }, t), $.sMap.editor.polylines.settings.toolbar = [], $.sMap.editor.polylines.settings.modules.get && $.sMap.editor.polylines.settings.toolbar.push({
            i18n: "site-get",
            class: "icon-get",
            callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id");
                $.sMap.editor.polylines.settings.on.get($.sMap.editor.polylines.geometries[e])
            }
        }), $.sMap.editor.polylines.settings.modules.delete && $.sMap.editor.polylines.settings.toolbar.push({
            i18n: "site-delete",
            class: "icon-delete",
            callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id"), i = $.sMap.editor.polylines.delete(e);
                $.sMap.editor.polylines.settings.on.delete(i), $.sMap.editor.polylines.settings.on.change()
            }
        }), $.sMap.editor.polylines.settings.modules.editText && $.sMap.editor.polylines.settings.toolbar.push({
            i18n: "site-edit",
            class: "icon-edit",
            callback: function (t) {
                var e = $(t).closest(".feature-popup").attr("data-feature-id");
                $.sMap.editor.polylines.geometries[e].properties.title = $(t).closest(".feature-popup").find("header input").val(), $.sMap.editor.polylines.geometries[e].properties.description = $(t).closest(".feature-popup").find(".popup-contents textarea").val(), $.sMap.editor.polylines.settings.on.editText($.sMap.editor.polylines.geometries[e]), $.sMap.editor.polylines.settings.on.change()
            }
        }), $.sMap.editor.polylines.settings.modules.create && (site.editor.element.append('<div class="icon-background is-lighter"><a data-i18n="[title]tooltip-add-polyline" href="#" class="icon is-large icon-editor-create-polyline tooltip-right"></a></div>'), site.editor.element.i18n()), $(".icon-editor-create-polyline").on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var e = styles.editor.polyline;
            e.featureGroup = "editor-polyline", e.featureId = $.sMap.editor.polylines.geometries.length, new L.Draw.Polyline(map, {shapeOptions: e}).enable()
        }), $.each($.sMap.editor.polylines.settings.geoJson.features, function (t, e) {
            $.sMap.editor.polylines.draw(t, e)
        }), $.sMap.editor.polylines.geometries = $.sMap.editor.polylines.settings.geoJson.features, $.sMap.editor.polylines.all()
    }, $.sMap.editor.polylines.all = function () {
        return $.sMap.editor.polylines.geometries
    }, $.sMap.editor.polylines.get = function (t) {
        return $.sMap.editor.polylines.geometries[t]
    }, $.sMap.editor.polylines.delete = function (t) {
        var e = $.sMap.editor.polylines.geometries[t];
        return $.sMap.editor.polylines.features[t].remove(), delete $.sMap.editor.polylines.geometries[t], delete $.sMap.editor.polylines.features[t], e
    }, $.sMap.editor.polylines.add = function (t) {
        var e = $.sMap.editor.polylines.geometries.length;
        return t.properties = $.extend({
            title: "site-editor-new-title",
            description: "site-editor-new-description"
        }, t.properties), $.sMap.editor.polylines.geometries[e] = t, $.sMap.editor.polylines.draw(e, t), e
    }, $.sMap.editor.polylines.draw = function (t, e) {
        var i = "", n = "editor-polyline";
        $.each($.sMap.editor.polylines.settings.toolbar, function (t, e) {
            i += '<li data-i18n="[title]' + e.i18n + '" class="' + e.class + ' tooltip-bottom"></li>'
        }), $.sMap.editor.polylines.features[t] = L.geoJSON(e, {
            onEachFeature: function (t, e) {
            },
            style: $.sMap.editor.polylines.settings.style,
            featureGroup: n,
            featureId: t,
            renderer: $.sMap.editor.renderer
        }), featureGroups.api.editor.addLayer($.sMap.editor.polylines.features[t]);
        var o = "";
        void 0 !== e.properties.title && (o += '<header class="popup-header">' + ($.sMap.editor.polylines.settings.modules.editText ? '<input data-i18n="[value]' + e.properties.title + '">' : '<span data-i18n="">' + e.properties.title + "</span>") + "</header>");
        void 0 !== e.properties.description && (o += '<div class="popup-contents">' + ($.sMap.editor.polylines.settings.modules.editText ? '<textarea data-i18n="' + e.properties.description + '"></textarea>' : '<p data-i18n="">' + e.properties.description + "</p>") + '<input class="icon-url" type="hidden"></div>');
        o = '<div class="feature-popup feature-popup-custom" ' + ('data-feature-group="' + n + '" data-feature-id="' + t + '"') + ">" + o + '<ul class="popup-toolbar small">' + i + "</ul></div>", $.sMap.editor.polylines.features[t].bindPopup(o, $.sMap.editor.polylines.settings.popupOptions), $.sMap.editor.addListenersToToolbar({
            featureGroup: n,
            featureId: t
        }), $.sMap.editor.polylines.features[t].on("click", function (t) {
            t.originalEvent.stopPropagation();
            var e = getFeatureInfoFromMarkerClick(t);
            "function" === $.type($.sMap.editor.polylines.settings.on.click) && $.sMap.editor.polylines.settings.on.click(e)
        }), $.sMap.editor.polylines.features[t].on("contextmenu", function (t) {
            t.originalEvent.stopPropagation();
            var e = getFeatureInfoFromMarkerClick(t);
            void 0 === t.layer.options.editing && (t.layer.options.editing = {}), t.layer.editing._enabled ? t.layer.editing.disable() : t.layer.editing.enable(), "function" === $.type($.sMap.editor.polylines.settings.on.contextmenu) && $.sMap.editor.polylines.settings.on.contextmenu(e)
        })
    }
}), $(document).ready(function () {
    var t;
    $.sMap.layers = $.sMap.layers || {}, $.sMap.layers.dynamic = {
        base: {
            all: {},
            layers: {},
            keys: [],
            active: [],
            render: function () {
            }
        }, over: {
            all: {}, layers: {}, keys: [], active: [], render: function () {
            }
        }, dataStores: {}, layerGroups: {}, build: function () {
        }
    }, $.sMap.layers.dynamic.base.render = function (e) {
        void 0 !== $.sMap.layers.dynamic.base.active[0] && "" !== $.sMap.layers.dynamic.base.active[0] && void 0 !== $.sMap.layers.dynamic.base.layers[$.sMap.layers.dynamic.base.active[0]] && "" !== $.sMap.layers.dynamic.base.layers[$.sMap.layers.dynamic.base.active[0]] && ($.sMap.layers.dynamic.base.layers[$.sMap.layers.dynamic.base.active[0]].removeFrom(map), delete $.sMap.layers.dynamic.base.layers[$.sMap.layers.dynamic.base.active[0]]), void 0 !== $.sMap.layers.static.base.active && "" !== $.sMap.layers.static.base.active && ($.sMap.layers.static.base.active.removeFrom(map), delete $.sMap.layers.static.base.active), $.sMap.layers.dynamic.base.layers = {}, $.sMap.layers.dynamic.base.layers[e] = L.tileLayer.wms(env.url.layerManagement.server, {
            layers: "Shiveh:" + $.sMap.layers.dynamic.base.all[e].geoserver_name,
            format: t.format,
            minZoom: settings.minZoom,
            maxZoom: settings.maxZoom,
            transparent: !0
        }).addTo(map), $.sMap.layers.dynamic.base.active = Object.keys($.sMap.layers.dynamic.base.layers), localStorage.setItem("dynamic-baselayer", JSON.stringify($.sMap.layers.dynamic.base.active))
    }, $.sMap.layers.dynamic.over.render = function (e) {
        void 0 === $.sMap.layers.dynamic.over.layers[e] ? $.sMap.layers.dynamic.over.layers[e] = L.tileLayer.wms(env.url.layerManagement.server, {
            layers: "Shiveh:" + $.sMap.layers.dynamic.over.all[e].geoserver_name,
            format: t.format,
            minZoom: settings.minZoom,
            maxZoom: settings.maxZoom,
            transparent: !0,
            pane: e
        }).addTo(map) : ($.sMap.layers.dynamic.over.layers[e].removeFrom(map), delete $.sMap.layers.dynamic.over.layers[e]), $.sMap.layers.dynamic.over.active = Object.keys($.sMap.layers.dynamic.over.layers), localStorage.setItem("dynamic-overlayers", JSON.stringify($.sMap.layers.dynamic.over.active))
    }, $.sMap.layers.dynamic.implement = function (e) {
        t = $.extend(!0, {format: "image/png"}, e);
        site.panel.footer.triggers.right.append('<div class="icon-background is-primary is-rounded is-boxed margined-small"><a data-i18n="[title]tooltip-layer-management" href="#" class="icon is-large icon-layer-management is-primary tooltip-left"></a></div>');
        site.overlay.before('<aside class="panel-aside layer-management is-invisible"><header><div data-i18n="site-layer-management"></div><div class="close"></div></header><section><form class="form"></form></section><footer></footer></aside>'), site.panels.layerManagement.triggers.open = $(".icon-layer-management"), site.panels.layerManagement.element = $(".panel-aside.layer-management"), site.panels.layerManagement.triggers.close = site.panels.layerManagement.element.find(".close"), site.panels.layerManagement.element.i18n(), site.panels.layerManagement.triggers.open.on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), void 0 !== $.sMap.layers.dynamic.inspect.active && ($.sMap.layers.dynamic.inspect.active = !0), site.map.addClass("crosshair"), openPanel({
                event: t,
                type: "layerManagement",
                modal: !1
            }), $.sMap.features.marker.wipe(), $.sMap.features.polygon.wipe(), $.sMap.features.polyline.wipe()
        }), site.panels.layerManagement.triggers.close.on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), void 0 !== $.sMap.layers.dynamic.inspect.active && ($.sMap.layers.dynamic.inspect.active = !1), site.map.removeClass("crosshair"), closePanels(t), $.sMap.features.marker.wipe(), $.sMap.features.polygon.wipe(), $.sMap.features.polyline.wipe()
        }), getDataStores("database"), getDataStores("shapeFile")
    }
}), $(document).ready(function () {
    var t;
    $.sMap.layers.dynamic.inspect = {
        active: !1, selected: "", build: function () {
        }, get: function () {
        }
    }, $.sMap.layers.dynamic.inspect.implement = function (e) {
        t = $.extend(!0, {
            popup: {
                before: function () {
                }, after: function () {
                }, html: function () {
                }
            }
        }, e);
        site.overlay.before('<aside class="panel-aside layer-management-inspect is-invisible"><header><div data-i18n="site-layer-management-inspect"></div><div class="close"></div></header><section></section><footer></footer></aside>'), site.panels.inspect.element = $(".panel-aside.layer-management-inspect"), site.panels.inspect.triggers.close = site.panels.inspect.element.find(".close"), site.panels.inspect.triggers.close.on("click", function (t) {
            $.sMap.layers.dynamic.inspect.active = !1, closePanels(t), $.sMap.features.marker.wipe(), $.sMap.features.polygon.wipe(), $.sMap.features.polyline.wipe()
        }), map.on("click", function (e) {
            if ($.sMap.layers.dynamic.inspect.active) {
                updateStateClick(e.latlng);
                var i = $.sMap.layers.dynamic.base.active || [], n = $.sMap.layers.dynamic.over.active || [], o = {
                    token: "", layers: [i.join(","), n.join(",")].filter(function (t) {
                        return "" != t.trim()
                    }).join(","), lat: states.click.latlng.lat, lon: states.click.latlng.lng, radius: 30
                };
                $.crs({
                    mode: env.mode,
                    task: "static",
                    url: env.url.layerManagement.identify,
                    urlParams: "",
                    type: "GET",
                    data: o,
                    dataType: "json",
                    success: function (e) {
                        var i, n = "";
                        $.each(e.value, function (e, o) {
                            i = "", $.each(o, function (e, n) {
                                i += '<li data-feature-group="' + n.geometry.type + '" data-feature-id="' + e + '" data-id="' + n.id + '"><div class="option">' + n.properties.name + "</div></li>", "Point" === n.geometry.type && $.sMap.features.marker.create({
                                    before: function () {
                                        t.popup.before()
                                    },
                                    after: function () {
                                        markers["layerManagement-" + n.geometry.type + "-" + e].on("popupopen", function () {
                                            t.popup.after()
                                        })
                                    },
                                    name: "layerManagement-" + n.geometry.type + "-" + e,
                                    popup: {
                                        title: {html: n.properties.name, i18n: ""},
                                        description: {html: t.popup.html() || n.properties.name, i18n: ""}
                                    },
                                    latlng: {lat: n.geometry.coordinates[1], lng: n.geometry.coordinates[0]},
                                    popupOpen: !1
                                }), "Polygon" === n.geometry.type && $.sMap.features.polygon.create({
                                    before: function () {
                                        t.popup.before()
                                    },
                                    after: function () {
                                        polygons["layerManagement-" + n.geometry.type + "-" + e].on("popupopen", function () {
                                            t.popup.after()
                                        })
                                    },
                                    name: "layerManagement-" + n.geometry.type + "-" + e,
                                    popup: {
                                        title: {html: n.properties.name, i18n: ""},
                                        description: {html: t.popup.html() || n.properties.name, i18n: ""}
                                    },
                                    class: "default",
                                    styles: styles.layerManagement.polygon,
                                    coordinates: reverseCoordinates(n.geometry.coordinates),
                                    popupOptions: popupOptions,
                                    popupOpen: !1,
                                    pan: !1
                                }), "LineString" !== n.geometry.type && "MultiLineString" !== n.geometry.type && "Polyline" !== n.geometry.type || $.sMap.features.polyline.create({
                                    before: function () {
                                        t.popup.before()
                                    },
                                    after: function () {
                                        polylines["layerManagement-" + n.geometry.type + "-" + e].on("popupopen", function () {
                                            t.popup.after()
                                        })
                                    },
                                    name: "layerManagement-" + n.geometry.type + "-" + e,
                                    popup: {
                                        title: {html: n.properties.name, i18n: ""},
                                        description: {html: t.popup.html() || n.properties.name, i18n: ""}
                                    },
                                    class: "default",
                                    styles: styles.layerManagement.polygon,
                                    coordinates: reverseCoordinates(n.geometry.coordinates),
                                    popupOptions: popupOptions,
                                    popupOpen: !1,
                                    pan: !1
                                })
                            });
                            var s = $.sMap.layers.dynamic.base.all[e] || $.sMap.layers.dynamic.over.all[e];
                            i = '<div class="option-group" data-layer-id="' + e + '"><div class="title has-icon small icon-baselayer">' + s.name + '</div><ul class="tree">' + i + "</ul></div>", n += i
                        }), site.panels.inspect.element.find("section").html(n), site.panels.inspect.element.find("ul.tree li").on("click", function (t) {
                            t.preventDefault(), t.stopPropagation(), $.sMap.layers.dynamic.inspect.selected = $(this).attr("data-id");
                            var e = "layerManagement-" + $(this).attr("data-feature-group") + "-" + $(this).attr("data-feature-id");
                            "Point" === $(this).attr("data-feature-group") && (markers[e].openPopup(), map.setView(markers[e].getLatLng(), 12)), "LineString" !== $(this).attr("data-feature-group") && "MultiLineString" !== $(this).attr("data-feature-group") && "Polyline" !== $(this).attr("data-feature-group") || (polylines[e].openPopup(), map.fitBounds(polylines[e].getBounds())), "Polygon" === $(this).attr("data-feature-group") && (polygons[e].openPopup(), map.fitBounds(polygons[e].getBounds()))
                        }), $.sMap.layers.dynamic.inspect.active = !1, site.map.removeClass("crosshair"), site.panels.layerManagement.element.hideVisibility(), site.panels.inspect.element.showVisibility()
                    }
                })
            }
        }), $.sMap.layers.dynamic.inspect.get = function () {
            return $.sMap.layers.dynamic.inspect.selected
        }
    }
}), $(document).ready(function () {
    $.sMap.search = {
        set: function () {
        }, get: function () {
        }, clear: function () {
        }, look: function () {
        }, implement: function () {
        }, poi: {last: {icon: "", query: ""}}, value: "", history: presets.search.history || []
    }, $.sMap.search.set = function (t) {
        var e = $.extend(!0, {
            before: function () {
            }, after: function () {
            }, value: ""
        }, t);
        e.before(), "" !== e.value ? ($.sMap.search.value = e.value, localStorage.setItem("searchType", $.sMap.search.value), e.after()) : console.log("Can not change value: Bad search type.")
    }, $.sMap.search.get = function () {
        return $.sMap.search.value
    }, $.sMap.search.clear = function (t) {
        site.search.input.val("");
        for (var e = 0; e < $.sMap.search.implement.options.counts.poi; e++) $.sMap.features.marker.remove("poi" + e);
        $.sMap.features.marker.remove("search")
    }, $.sMap.search.look = function (t) {
        var e = $.extend(!0, {
            before: function () {
            }, after: function () {
            }, query: "", icon: icons.default.blue, autocompleteParent: site.search.autocomplete
        }, t);
        e.before();
        var i = markers["poi-marker"] ? markers["poi-marker"].getLatLng() : states.current.latlng,
            n = {type: "Point", coordinates: [parseFloat(i.lng), parseFloat(i.lat)]}, o = {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "Polygon",
                    coordinates: [[[states.current.bounds._southWest.lng, states.current.bounds._southWest.lat], [states.current.bounds._southWest.lng, states.current.bounds._northEast.lat], [states.current.bounds._northEast.lng, states.current.bounds._northEast.lat], [states.current.bounds._northEast.lng, states.current.bounds._southWest.lat], [states.current.bounds._southWest.lng, states.current.bounds._southWest.lat]]]
                }
            }, s = void 0 !== polygons["poi-polygon"] ? polygons["poi-polygon"].toGeoJSON() : o;
        if ("address" === $.sMap.search.value && e.query.match(/(\d+) *[-{1}| {1}|,{1}] *(\d+)/)) {
            var a = e.query.replace(/ {1,}/, "-").replace(/,{1,}/, "-").replace(/-{1,}/, "-").split("-"),
                r = {lat: a[0], lng: a[1]};
            makeSearchMarker({
                title: {
                    html: generateLatlngHtml({
                        lat: parseFloat(r.lat),
                        lng: parseFloat(r.lng),
                        type: "comma"
                    }), i18n: ""
                }, latlng: r, icon: "icon-point"
            })
        } else if ("address" === $.sMap.search.value) {
            var l = {
                text: e.query,
                geom: {type: "Polygon", coordinates: s.geometry.coordinates[0]},
                location: n,
                type: "",
                $skip: 0,
                $top: $.sMap.search.implement.options.counts.geocode
            };
            $.crs({
                mode: env.mode,
                task: "search",
                url: env.url.search.geocode,
                urlParams: "",
                type: "POST",
                data: JSON.stringify(l),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                processData: !1,
                success: function (t) {
                    var i = "";
                    $.each(t.value, function (t, e) {
                        if (!(t >= $.sMap.search.implement.options.counts.geocode)) {
                            var n = [];
                            "" !== e.Text && n.push(e.Text);
                            var o = n.join($.i18n("site-comma") + " "), s = {
                                latlng: {lat: e.Coordinate.lat, lng: e.Coordinate.lon},
                                title: o,
                                i18n: "",
                                icon: "icon-" + e.Type,
                                description: ""
                            };
                            s.description = '<div class="description">' + e.City + "</div>", void 0 !== states.user.latlng && (s.description += '<div class="description">' + latlngDistance(states.user.latlng, s.latlng) + $.i18n("site-km") + "</div>"), i = generateAutocompleteItem(i, s)
                        }
                    }), i = "<ul>" + i + "</ul>", e.autocompleteParent.html(i).showVisibility(), e.autocompleteParent.find("li").on("click", function () {
                        site.search.autocomplete.hideVisibility(), makeMarkerFromAutocomplete($(this))
                    })
                }
            })
        } else if ("poi" === $.sMap.search.value) {
            l = {
                text: e.query,
                geom: {type: "Polygon", coordinates: s.geometry.coordinates[0]},
                location: n,
                type: "",
                $skip: 0,
                $top: $.sMap.search.implement.options.counts.poi
            };
            $.crs({
                mode: env.mode,
                task: "search",
                url: env.url.search.poi,
                urlParams: "",
                type: "POST",
                data: JSON.stringify(l),
                dataType: "json",
                contentType: "application/json; charset=utf-8",
                processData: !1,
                beforeSend: function (t) {
                },
                success: function (t) {
                    $.each(t.value, function (t, i) {
                        var n = {lat: i.Coordinate.lat, lng: i.Coordinate.lon}, o = i.Text;
                        $.sMap.features.marker.create({
                            name: "poi" + t,
                            popup: {
                                title: {html: '<span data-i18n="site-search"></span>', i18n: ""},
                                description: {html: o, i18n: ""}
                            },
                            latlng: n,
                            icon: e.icon,
                            popupOpen: !1
                        })
                    })
                }
            })
        }
        e.after()
    }, $.sMap.search.implement = function (t) {
        $.sMap.search.implement.options = $.extend(!0, {counts: {geocode: 5, poi: 10}, history: {status: !1}}, t);
        site.anchors.top1.direct.append('<div class="site-search is-boxed"><div class="wrapper item-set horizontal"><div class="first"></div><div class="has-clear"><input type="text" name="" data-i18n="[placeholder]site-search"></div><button class="" type="button" name="button" data-i18n="site-go"></button><div class="last"></div></div><div class="more display-none"><ul><li class="icon-background tooltip-bottom" data-i18n="[title]tooltip-search-options-area"><span class="icon is-small icon-polygon"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]tooltip-search-options-near"><span class="icon is-small icon-marker"></span></li></ul></div><div class="icon-background icon-background-more"><a data-i18n="[title]tooltip-search-more" href="#" class="icon icon-more tooltip-bottom"></a></div><div class="autocomplete is-invisible is-boxed"></div><div class="suggestions is-invisible is-boxed"><ul><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-restaurant" data-value="رستوران" data-icon="restaurant"><span class="icon is-large icon-restaurant"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-bank" data-value="بانک" data-icon="bank"><span class="icon is-large icon-bank"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-cafe" data-value="کافه" data-icon="cafe"><span class="icon is-large icon-cafe"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-library" data-value="کتابخانه" data-icon="library"><span class="icon is-large icon-library"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-hotel" data-value="هتل" data-icon="hotel"><span class="icon is-large icon-hotel"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-mosque" data-value="مسجد" data-icon="mosque"><span class="icon is-large icon-mosque"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-mall" data-value="فروشگاه" data-icon="mall"><span class="icon is-large icon-mall"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-hospital" data-value="بیمارستان" data-icon="hospital"><span class="icon is-large icon-hospital"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-metro" data-value="مترو" data-icon="metro"><span class="icon is-large icon-metro"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-drugstore" data-value="داروخانه" data-icon="drugstore"><span class="icon is-large icon-drugstore"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-parking" data-value="پارکینگ" data-icon="parking"><span class="icon is-large icon-parking"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-gas-station" data-value="پمپ بنزین" data-icon="gasStation"><span class="icon is-large icon-gas-station"></span></li><li class="icon-background tooltip-bottom" data-i18n="[title]site-poi-university" data-value="دانشگاه" data-icon="university"><span class="icon is-large icon-university"></span></li></ul></div></div>'), site.search.element = $(".site-search"), site.search.input = site.search.element.find("input"), site.search.button = site.search.element.find("button"), site.search.more = site.search.element.find(".more"), site.search.polygon = site.search.element.find(".icon-polygon"), site.search.marker = site.search.element.find(".icon-marker"), site.search.moreTrigger = site.search.element.find(".icon-more"), site.search.wrapper = site.search.element.find(".wrapper"), site.search.autocomplete = site.search.element.find(".autocomplete"), site.search.suggestions = site.search.element.find(".suggestions");
        presets.search.type;
        site.search.suggestions.showVisibility(), site.search.suggestions.find("li").on("click", function () {
            $.sMap.search.value = "poi", $.sMap.search.poi.last.query = $(this).attr("data-value"), $.sMap.search.poi.last.icon = icons.poi[$(this).attr("data-icon")], site.search.input.val($.sMap.search.poi.last.query), $.clearButton.check(), $(".site-search .clear").on("click", function () {
                $.sMap.search.clear()
            }), $.sMap.search.look({query: $.sMap.search.poi.last.query, icon: $.sMap.search.poi.last.icon})
        }), $(window).on("click", function () {
            site.search.autocomplete.hideVisibility(), site.search.suggestions.showVisibility(), $.sMap.features.marker.remove("search")
        }), site.search.element.on("click", function (t) {
            t.stopPropagation()
        }), site.search.input.on("focus", function (t) {
            t.stopPropagation()
        }), site.search.input.on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), "poi" === $.sMap.search.value && $.sMap.search.clear(), $.sMap.search.value = "address", switchSearchDropdown()
        }), site.search.moreTrigger.on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), site.search.more.toggleDisplay(), site.search.wrapper.toggleClass("is-active")
        }), site.search.button.on("click", function (t) {
            t.preventDefault(), t.stopPropagation(), "" !== site.search.input.val() && "address" === $.sMap.search.value && $.sMap.search.look({query: site.search.input.val()})
        }), site.search.input.on("keypress", function (t) {
            13 == t.keyCode && (t.preventDefault(), t.stopPropagation(), "" !== site.search.input.val() && "address" === $.sMap.search.value && $.sMap.search.look({query: site.search.input.val()}))
        }), featureGroups.map.poi = (new L.FeatureGroup).addTo(map), drawControls.map.poi = new L.Control.Draw({
            position: "top" + site.settings.directions.direct,
            draw: !0,
            edit: !0
        }), map.on("draw:created", function (t) {
            var e = t.layerType, i = t.layer,
                n = void 0 !== t.layer.options.featureGroup ? t.layer.options.featureGroup : t.layer.options.icon.options.featureGroup;
            "poi-marker" === n && "marker" === e && ($.sMap.features.marker.create({
                name: "poi-marker",
                popup: {
                    title: {html: '<span data-i18n="site-poi-marker-title"></span>', i18n: ""},
                    description: {html: "", i18n: ""}
                },
                latlng: i._latlng,
                icon: icons.poi.blue,
                pan: !1,
                draggable: !0
            }), updatePoiSearch(), markers["poi-marker"].on("dragend", function (t) {
                updatePoiSearch()
            })), "poi-polygon" === n && "polygon" === e && ($.sMap.features.polygon.create({
                before: function () {
                },
                after: function () {
                },
                name: "poi-polygon",
                popup: {title: {html: "", i18n: ""}, description: {html: "", i18n: ""}},
                class: "default",
                styles: styles.poi.polygon,
                coordinates: i._latlngs,
                popupOptions: popupOptions,
                popupOpen: !1,
                pan: !1,
                measurement: !1,
                on: {
                    click: function () {
                        polygons["poi-polygon"].remove(), delete polygons["poi-polygon"], delete polygonsOptions["poi-polygon"]
                    }, contextmenu: function () {
                        console.log("cm")
                    }
                }
            }), updatePoiSearch())
        }), site.search.polygon.on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var e = styles.poi.polygon;
            e.featureGroup = "poi-polygon", e.featureId = "not set", new L.Draw.Polygon(map, {shapeOptions: e}).enable()
        }), site.search.marker.on("click", function (t) {
            t.preventDefault(), t.stopPropagation();
            var e = icons.poi.blue;
            e.featureGroup = "poi-marker", e.featureId = "not set", new L.Draw.Marker(map, {icon: L.icon(e)}).enable()
        })
    }
}), $(document).ready(function () {
    var t;
    $.sMap.modal = {
        hide: function () {
        }, show: function () {
        }, wipe: function () {
        }, types: {center: {}, bottom: {}, corner: {}, cover: {}}
    }, $.sMap.modal.show = function (e) {
        var i = $.extend(!0, {
            before: function () {
            },
            after: function () {
            },
            type: "center",
            parent: $("body"),
            html: {header: "", contents: "", footer: ""},
            overlay: !1,
            timeout: !1,
            clickToHide: !1,
            class: "",
            closeButton: !0
        }, e);
        i.before(), $.sMap.modal.wipe();
        var n = "site-modal-" + i.type,
            o = '<div class="site-modal ' + n + " " + i.class + ' is-invisible" data-modal-type="' + i.type + '"><header></header><div class="contents"></div><footer></footer></div>';
        i.parent.append(o), $.sMap.modal.types[i.type].element = $("." + n), $.sMap.modal.types[i.type].header = $.sMap.modal.types[i.type].element.find("header").html(i.html.header), $.sMap.modal.types[i.type].contents = $.sMap.modal.types[i.type].element.find(".contents").html(i.html.contents), $.sMap.modal.types[i.type].footer = $.sMap.modal.types[i.type].element.find("footer").html(i.html.footer), $.sMap.modal.types[i.type].options = i, $.sMap.modal.types[i.type].element.i18n(), $.sMap.modal.types[i.type].element.showVisibility(), i.overlay && site.overlay.showVisibility(), i.closeButton && ($.sMap.modal.types[i.type].header.append('<div class="close"></div>'), $.sMap.modal.types[i.type].close = $.sMap.modal.types[i.type].header.find(".close"), $.sMap.modal.types[i.type].close.on("click", function (t) {
            t.stopPropagation(), $.sMap.modal.hide({type: $.sMap.modal.types[i.type].element.attr("data-modal-type")})
        })), !1 !== i.clickToHide && ($.sMap.modal.types[i.type].element.on("click", function (t) {
            t.stopPropagation()
        }), i.clickToHide.on("click", function (t) {
            void 0 === t.originalEvent ? t.stopPropagation() : t.originalEvent.stopPropagation(), $.sMap.modal.types[i.type].element.hideVisibility()
        })), !1 !== i.timeout && (t = setTimeout(function () {
            i.overlay && site.overlay.hideVisibility(), $.sMap.modal.types[i.type].element.hideVisibility()
        }, i.timeout)), i.after()
    }, $.sMap.modal.hide = function (e) {
        var i = $.extend(!0, {type: "center"}, e);
        site.overlay.hideVisibility(), clearTimeout(t), void 0 !== $.sMap.modal.types[i.type].element && ($.sMap.modal.types[i.type].element.remove(), $.sMap.modal.types[i.type].options = void 0)
    }, $.sMap.modal.wipe = function (t) {
        $.each($.sMap.modal.types, function (t, e) {
            $.sMap.modal.hide({type: t})
        })
    }
}), $(document).ready(function () {
    $.sMap.route = $.sMap.route || {}, $.sMap.route.remove = function (t) {
        $.extend(!0, {route: {}}, t).route.remove()
    }, $.sMap.route.draw = function (t) {
        var e = $.extend(!0, {
            map: {},
            start: [0, 0],
            end: [0, 0],
            mode: "route",
            styles: {core: {weight: 4, opacity: 1}, shadow: {weight: 12, opacity: .4}},
            colors: ["#F50202", "#1E4149"],
            pan: !0
        }, t), i = L.featureGroup();
        return "object" === $.type(e.start) && (e.start = [e.start.lat, e.start.lng]), "object" === $.type(e.end) && (e.end = [e.end.lat, e.end.lng]), $.ajax({
            url: env.url.route + "/" + e.mode + "/v1/driving/" + [e.start[1], e.start[0]].join(",") + ";" + [e.end[1], e.end[0]].join(","),
            type: "GET",
            data: {alternatives: !0, steps: !0, overview: "false", hints: ";"},
            dataType: "json",
            beforeSend: function () {
            },
            error: function () {
            },
            success: function (t) {
                if ("Ok" === t.code) {
                    L.marker(e.start, {icon: L.icon(icons.default.green)}).addTo(i), L.marker(e.end, {icon: L.icon(icons.default.green)}).addTo(i);
                    var n = i.getBounds();
                    $.each(t.routes, function (o, s) {
                        e.styles.core.color = e.colors[o], e.styles.shadow.color = e.colors[o], 0 !== o && (e.styles.core.dashArray = "10 10", e.styles.shadow.dashArray = "10 10"), void 0 !== t.waypoints && (L.polyline([[e.start[0], e.start[1]], [t.waypoints[0].location[1], t.waypoints[0].location[0]]], e.styles.shadow).addTo(i), L.polyline([[e.start[0], e.start[1]], [t.waypoints[0].location[1], t.waypoints[0].location[0]]], e.styles.core).addTo(i), L.polyline([[e.end[0], e.end[1]], [t.waypoints[1].location[1], t.waypoints[1].location[0]]], e.styles.shadow).addTo(i), L.polyline([[e.end[0], e.end[1]], [t.waypoints[1].location[1], t.waypoints[1].location[0]]], e.styles.core).addTo(i)), $.each(s.legs[0].steps, function (t, o) {
                            var s = o.name || "";
                            L.polyline(polyline.decode(o.geometry), e.styles.shadow).addTo(i), L.polyline(polyline.decode(o.geometry), e.styles.core).addTo(i), L.marker([o.maneuver.location[1], o.maneuver.location[0]], {icon: L.icon(icons.circle.white)}).addTo(i).bindPopup(s, {closeButton: !1}), n = i.getBounds()
                        }), i.addTo(e.map)
                    }), !0 === e.pan && e.map.fitBounds(n)
                }
            }
        }), i
    }
});