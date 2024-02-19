var An = Object.defineProperty;
var Dn = (n, e, l) =>
  e in n
    ? An(n, e, { enumerable: !0, configurable: !0, writable: !0, value: l })
    : (n[e] = l);
var Lt = (n, e, l) => (Dn(n, typeof e != "symbol" ? e + "" : e, l), l);
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) t(r);
  new MutationObserver((r) => {
    for (const o of r)
      if (o.type === "childList")
        for (const a of o.addedNodes)
          a.tagName === "LINK" && a.rel === "modulepreload" && t(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function l(r) {
    const o = {};
    return (
      r.integrity && (o.integrity = r.integrity),
      r.referrerPolicy && (o.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : r.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function t(r) {
    if (r.ep) return;
    r.ep = !0;
    const o = l(r);
    fetch(r.href, o);
  }
})();
function M() {}
const Sn = (n) => n;
function Ln(n, e) {
  for (const l in e) n[l] = e[l];
  return n;
}
function sn(n) {
  return n();
}
function rl() {
  return Object.create(null);
}
function ie(n) {
  n.forEach(sn);
}
function kt(n) {
  return typeof n == "function";
}
function z(n, e) {
  return n != n
    ? e == e
    : n !== e || (n && typeof n == "object") || typeof n == "function";
}
function Pn(n) {
  return Object.keys(n).length === 0;
}
function Cn(n, ...e) {
  if (n == null) {
    for (const t of e) t(void 0);
    return M;
  }
  const l = n.subscribe(...e);
  return l.unsubscribe ? () => l.unsubscribe() : l;
}
function N(n, e, l) {
  n.$$.on_destroy.push(Cn(e, l));
}
function fn(n, e, l, t) {
  if (n) {
    const r = cn(n, e, l, t);
    return n[0](r);
  }
}
function cn(n, e, l, t) {
  return n[1] && t ? Ln(l.ctx.slice(), n[1](t(e))) : l.ctx;
}
function un(n, e, l, t) {
  if (n[2] && t) {
    const r = n[2](t(l));
    if (e.dirty === void 0) return r;
    if (typeof r == "object") {
      const o = [],
        a = Math.max(e.dirty.length, r.length);
      for (let s = 0; s < a; s += 1) o[s] = e.dirty[s] | r[s];
      return o;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function dn(n, e, l, t, r, o) {
  if (r) {
    const a = cn(e, l, t, o);
    n.p(a, r);
  }
}
function pn(n) {
  if (n.ctx.length > 32) {
    const e = [],
      l = n.ctx.length / 32;
    for (let t = 0; t < l; t++) e[t] = -1;
    return e;
  }
  return -1;
}
function ue(n, e, l) {
  return n.set(l), e;
}
function al(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [n, "px"];
}
const hn = typeof window < "u";
let Tn = hn ? () => window.performance.now() : () => Date.now(),
  Wt = hn ? (n) => requestAnimationFrame(n) : M;
const Ye = new Set();
function bn(n) {
  Ye.forEach((e) => {
    e.c(n) || (Ye.delete(e), e.f());
  }),
    Ye.size !== 0 && Wt(bn);
}
function Mn(n) {
  let e;
  return (
    Ye.size === 0 && Wt(bn),
    {
      promise: new Promise((l) => {
        Ye.add((e = { c: n, f: l }));
      }),
      abort() {
        Ye.delete(e);
      },
    }
  );
}
function u(n, e) {
  n.appendChild(e);
}
function _n(n) {
  if (!n) return document;
  const e = n.getRootNode ? n.getRootNode() : n.ownerDocument;
  return e && e.host ? e : n.ownerDocument;
}
function Nn(n) {
  const e = b("style");
  return (e.textContent = "/* empty */"), In(_n(n), e), e.sheet;
}
function In(n, e) {
  return u(n.head || n, e), e.sheet;
}
function E(n, e, l) {
  n.insertBefore(e, l || null);
}
function $(n) {
  n.parentNode && n.parentNode.removeChild(n);
}
function se(n, e) {
  for (let l = 0; l < n.length; l += 1) n[l] && n[l].d(e);
}
function b(n) {
  return document.createElement(n);
}
function S(n) {
  return document.createTextNode(n);
}
function A() {
  return S(" ");
}
function Z() {
  return S("");
}
function T(n, e, l, t) {
  return n.addEventListener(e, l, t), () => n.removeEventListener(e, l, t);
}
function h(n, e, l) {
  l == null
    ? n.removeAttribute(e)
    : n.getAttribute(e) !== l && n.setAttribute(e, l);
}
function Rn(n) {
  return Array.from(n.childNodes);
}
function C(n, e) {
  (e = "" + e), n.data !== e && (n.data = e);
}
function De(n, e) {
  n.value = e ?? "";
}
function dt(n, e, l) {
  n.classList.toggle(e, !!l);
}
function Bn(n, e, { bubbles: l = !1, cancelable: t = !1 } = {}) {
  return new CustomEvent(n, { detail: e, bubbles: l, cancelable: t });
}
const mt = new Map();
let vt = 0;
function jn(n) {
  let e = 5381,
    l = n.length;
  for (; l--; ) e = ((e << 5) - e) ^ n.charCodeAt(l);
  return e >>> 0;
}
function On(n, e) {
  const l = { stylesheet: Nn(e), rules: {} };
  return mt.set(n, l), l;
}
function ol(n, e, l, t, r, o, a, s = 0) {
  const i = 16.666 / t;
  let f = `{
`;
  for (let _ = 0; _ <= 1; _ += i) {
    const v = e + (l - e) * o(_);
    f +=
      _ * 100 +
      `%{${a(v, 1 - v)}}
`;
  }
  const c =
      f +
      `100% {${a(l, 1 - l)}}
}`,
    d = `__svelte_${jn(c)}_${s}`,
    m = _n(n),
    { stylesheet: g, rules: p } = mt.get(m) || On(m, n);
  p[d] ||
    ((p[d] = !0), g.insertRule(`@keyframes ${d} ${c}`, g.cssRules.length));
  const y = n.style.animation || "";
  return (
    (n.style.animation = `${
      y ? `${y}, ` : ""
    }${d} ${t}ms linear ${r}ms 1 both`),
    (vt += 1),
    d
  );
}
function Vn(n, e) {
  const l = (n.style.animation || "").split(", "),
    t = l.filter(
      e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf("__svelte") === -1
    ),
    r = l.length - t.length;
  r && ((n.style.animation = t.join(", ")), (vt -= r), vt || Hn());
}
function Hn() {
  Wt(() => {
    vt ||
      (mt.forEach((n) => {
        const { ownerNode: e } = n.stylesheet;
        e && $(e);
      }),
      mt.clear());
  });
}
let tt;
function xe(n) {
  tt = n;
}
function mn() {
  if (!tt) throw new Error("Function called outside component initialization");
  return tt;
}
function Re(n) {
  mn().$$.on_mount.push(n);
}
function Fn(n) {
  mn().$$.on_destroy.push(n);
}
const Ue = [],
  il = [];
let We = [];
const sl = [],
  Un = Promise.resolve();
let Tt = !1;
function zn() {
  Tt || ((Tt = !0), Un.then(vn));
}
function ke(n) {
  We.push(n);
}
const Pt = new Set();
let He = 0;
function vn() {
  if (He !== 0) return;
  const n = tt;
  do {
    try {
      for (; He < Ue.length; ) {
        const e = Ue[He];
        He++, xe(e), Yn(e.$$);
      }
    } catch (e) {
      throw ((Ue.length = 0), (He = 0), e);
    }
    for (xe(null), Ue.length = 0, He = 0; il.length; ) il.pop()();
    for (let e = 0; e < We.length; e += 1) {
      const l = We[e];
      Pt.has(l) || (Pt.add(l), l());
    }
    We.length = 0;
  } while (Ue.length);
  for (; sl.length; ) sl.pop()();
  (Tt = !1), Pt.clear(), xe(n);
}
function Yn(n) {
  if (n.fragment !== null) {
    n.update(), ie(n.before_update);
    const e = n.dirty;
    (n.dirty = [-1]),
      n.fragment && n.fragment.p(n.ctx, e),
      n.after_update.forEach(ke);
  }
}
function Wn(n) {
  const e = [],
    l = [];
  We.forEach((t) => (n.indexOf(t) === -1 ? e.push(t) : l.push(t))),
    l.forEach((t) => t()),
    (We = e);
}
let Ze;
function Gn() {
  return (
    Ze ||
      ((Ze = Promise.resolve()),
      Ze.then(() => {
        Ze = null;
      })),
    Ze
  );
}
function Ct(n, e, l) {
  n.dispatchEvent(Bn(`${e ? "intro" : "outro"}${l}`));
}
const bt = new Set();
let we;
function J() {
  we = { r: 0, c: [], p: we };
}
function K() {
  we.r || ie(we.c), (we = we.p);
}
function k(n, e) {
  n && n.i && (bt.delete(n), n.i(e));
}
function D(n, e, l, t) {
  if (n && n.o) {
    if (bt.has(n)) return;
    bt.add(n),
      we.c.push(() => {
        bt.delete(n), t && (l && n.d(1), t());
      }),
      n.o(e);
  } else t && t();
}
const Jn = { duration: 0 };
function me(n, e, l, t) {
  let o = e(n, l, { direction: "both" }),
    a = t ? 0 : 1,
    s = null,
    i = null,
    f = null,
    c;
  function d() {
    f && Vn(n, f);
  }
  function m(p, y) {
    const _ = p.b - a;
    return (
      (y *= Math.abs(_)),
      {
        a,
        b: p.b,
        d: _,
        duration: y,
        start: p.start,
        end: p.start + y,
        group: p.group,
      }
    );
  }
  function g(p) {
    const {
        delay: y = 0,
        duration: _ = 300,
        easing: v = Sn,
        tick: w = M,
        css: P,
      } = o || Jn,
      q = { start: Tn() + y, b: p };
    p || ((q.group = we), (we.r += 1)),
      "inert" in n &&
        (p ? c !== void 0 && (n.inert = c) : ((c = n.inert), (n.inert = !0))),
      s || i
        ? (i = q)
        : (P && (d(), (f = ol(n, a, p, _, y, v, P))),
          p && w(0, 1),
          (s = m(q, _)),
          ke(() => Ct(n, p, "start")),
          Mn((U) => {
            if (
              (i &&
                U > i.start &&
                ((s = m(i, _)),
                (i = null),
                Ct(n, s.b, "start"),
                P && (d(), (f = ol(n, a, s.b, s.duration, 0, v, o.css)))),
              s)
            ) {
              if (U >= s.end)
                w((a = s.b), 1 - a),
                  Ct(n, s.b, "end"),
                  i || (s.b ? d() : --s.group.r || ie(s.group.c)),
                  (s = null);
              else if (U >= s.start) {
                const F = U - s.start;
                (a = s.a + s.d * v(F / s.duration)), w(a, 1 - a);
              }
            }
            return !!(s || i);
          }));
  }
  return {
    run(p) {
      kt(o)
        ? Gn().then(() => {
            (o = o({ direction: p ? "in" : "out" })), g(p);
          })
        : g(p);
    },
    end() {
      d(), (s = i = null);
    },
  };
}
function H(n) {
  return (n == null ? void 0 : n.length) !== void 0 ? n : Array.from(n);
}
function j(n) {
  n && n.c();
}
function R(n, e, l) {
  const { fragment: t, after_update: r } = n.$$;
  t && t.m(e, l),
    ke(() => {
      const o = n.$$.on_mount.map(sn).filter(kt);
      n.$$.on_destroy ? n.$$.on_destroy.push(...o) : ie(o),
        (n.$$.on_mount = []);
    }),
    r.forEach(ke);
}
function B(n, e) {
  const l = n.$$;
  l.fragment !== null &&
    (Wn(l.after_update),
    ie(l.on_destroy),
    l.fragment && l.fragment.d(e),
    (l.on_destroy = l.fragment = null),
    (l.ctx = []));
}
function Kn(n, e) {
  n.$$.dirty[0] === -1 && (Ue.push(n), zn(), n.$$.dirty.fill(0)),
    (n.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function Y(n, e, l, t, r, o, a, s = [-1]) {
  const i = tt;
  xe(n);
  const f = (n.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: M,
    not_equal: r,
    bound: rl(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    callbacks: rl(),
    dirty: s,
    skip_bound: !1,
    root: e.target || i.$$.root,
  });
  a && a(f.root);
  let c = !1;
  if (
    ((f.ctx = l
      ? l(n, e.props || {}, (d, m, ...g) => {
          const p = g.length ? g[0] : m;
          return (
            f.ctx &&
              r(f.ctx[d], (f.ctx[d] = p)) &&
              (!f.skip_bound && f.bound[d] && f.bound[d](p), c && Kn(n, d)),
            m
          );
        })
      : []),
    f.update(),
    (c = !0),
    ie(f.before_update),
    (f.fragment = t ? t(f.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      const d = Rn(e.target);
      f.fragment && f.fragment.l(d), d.forEach($);
    } else f.fragment && f.fragment.c();
    e.intro && k(n.$$.fragment), R(n, e.target, e.anchor), vn();
  }
  xe(i);
}
class W {
  constructor() {
    Lt(this, "$$");
    Lt(this, "$$set");
  }
  $destroy() {
    B(this, 1), (this.$destroy = M);
  }
  $on(e, l) {
    if (!kt(l)) return M;
    const t = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      t.push(l),
      () => {
        const r = t.indexOf(l);
        r !== -1 && t.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !Pn(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
const qn = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(qn);
function Ae(n, e) {
  const l = (t) => {
    const { action: r, data: o } = t.data;
    r === n && e(o);
  };
  Re(() => window.addEventListener("message", l)),
    Fn(() => window.removeEventListener("message", l));
}
const Fe = [];
function Q(n, e = M) {
  let l;
  const t = new Set();
  function r(s) {
    if (z(n, s) && ((n = s), l)) {
      const i = !Fe.length;
      for (const f of t) f[1](), Fe.push(f, n);
      if (i) {
        for (let f = 0; f < Fe.length; f += 2) Fe[f][0](Fe[f + 1]);
        Fe.length = 0;
      }
    }
  }
  function o(s) {
    r(s(n));
  }
  function a(s, i = M) {
    const f = [s, i];
    return (
      t.add(f),
      t.size === 1 && (l = e(r, o) || M),
      s(n),
      () => {
        t.delete(f), t.size === 0 && l && (l(), (l = null));
      }
    );
  }
  return { set: r, update: o, subscribe: a };
}
const pt = Q(!1),
  gt = Q(!1),
  Mt = Q(""),
  fl = Q(!1),
  $e = Q(!1),
  Nt = Q("Actions"),
  cl = Q("");
let It = !1;
gt.subscribe((n) => {
  It = n;
});
let gn = "";
Mt.subscribe((n) => {
  gn = n;
});
async function oe(n, e = {}, l) {
  if ((It == !0 && l) || It == !0) return Promise.resolve(l || {});
  const t = {
      method: "post",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(e),
    },
    r = window.GetParentResourceName ? window.GetParentResourceName() : gn;
  return await (await fetch(`https://${r}/${n}`, t)).json();
}
function ul(n) {
  let e, l, t;
  const r = n[3].default,
    o = fn(r, n, n[2], null);
  return {
    c() {
      (e = b("main")),
        o && o.c(),
        h(
          e,
          "class",
          (l =
            "w-screen h-screen flex justify-end items-center " +
            (n[1] ? "justify-center" : " ") +
            " svelte-1afztrv")
        );
    },
    m(a, s) {
      E(a, e, s), o && o.m(e, null), (t = !0);
    },
    p(a, s) {
      o &&
        o.p &&
        (!t || s & 4) &&
        dn(o, r, a, a[2], t ? un(r, a[2], s, null) : pn(a[2]), null),
        (!t ||
          (s & 2 &&
            l !==
              (l =
                "w-screen h-screen flex justify-end items-center " +
                (a[1] ? "justify-center" : " ") +
                " svelte-1afztrv"))) &&
          h(e, "class", l);
    },
    i(a) {
      t || (k(o, a), (t = !0));
    },
    o(a) {
      D(o, a), (t = !1);
    },
    d(a) {
      a && $(e), o && o.d(a);
    },
  };
}
function Qn(n) {
  let e,
    l,
    t = n[0] && ul(n);
  return {
    c() {
      t && t.c(), (e = Z());
    },
    m(r, o) {
      t && t.m(r, o), E(r, e, o), (l = !0);
    },
    p(r, [o]) {
      r[0]
        ? t
          ? (t.p(r, o), o & 1 && k(t, 1))
          : ((t = ul(r)), t.c(), k(t, 1), t.m(e.parentNode, e))
        : t &&
          (J(),
          D(t, 1, 1, () => {
            t = null;
          }),
          K());
    },
    i(r) {
      l || (k(t), (l = !0));
    },
    o(r) {
      D(t), (l = !1);
    },
    d(r) {
      r && $(e), t && t.d(r);
    },
  };
}
function Xn(n, e, l) {
  let t;
  N(n, $e, (i) => l(1, (t = i)));
  let { $$slots: r = {}, $$scope: o } = e,
    a,
    s;
  return (
    gt.subscribe((i) => {
      s = i;
    }),
    pt.subscribe((i) => {
      l(0, (a = i));
    }),
    Ae("setVisible", (i) => {
      pt.set(i);
    }),
    Ae("setBrowserMode", (i) => {
      gt.set(i), console.log("browser mode enabled");
    }),
    Re(() => {
      const i = (f) => {
        a && ["Escape"].includes(f.code) && (oe("hideUI"), pt.set(!1)),
          !a && ["Escape"].includes(f.code) && s === !0 && pt.set(!0);
      };
      return (
        window.addEventListener("keydown", i),
        () => window.removeEventListener("keydown", i)
      );
    }),
    (n.$$set = (i) => {
      "$$scope" in i && l(2, (o = i.$$scope));
    }),
    [a, t, o, r]
  );
}
class Zn extends W {
  constructor(e) {
    super(), Y(this, e, Xn, Qn, z, {});
  }
}
const xn = () => !window.invokeNative,
  ze = (n, e = 0) => {
    if (xn())
      for (const l of n)
        setTimeout(() => {
          window.dispatchEvent(
            new MessageEvent("message", {
              data: { action: l.action, data: l.data },
            })
          );
        }, e);
  };
function dl(n, e, l) {
  const t = n.slice();
  return (t[7] = e[l]), t;
}
function pl(n, e, l) {
  const t = n.slice();
  return (t[10] = e[l]), t;
}
function hl(n) {
  let e,
    l = H(n[1]),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = _l(dl(n, l, r));
  return {
    c() {
      e = b("div");
      for (let r = 0; r < t.length; r += 1) t[r].c();
      h(e, "class", "w-fit h-fit bg-neutral-800 p-2 ");
    },
    m(r, o) {
      E(r, e, o);
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(e, null);
    },
    p(r, o) {
      if (o & 2) {
        l = H(r[1]);
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = dl(r, l, a);
          t[a] ? t[a].p(s, o) : ((t[a] = _l(s)), t[a].c(), t[a].m(e, null));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && $(e), se(t, r);
    },
  };
}
function bl(n) {
  let e, l, t;
  function r() {
    return n[3](n[10]);
  }
  return {
    c() {
      (e = b("button")),
        (e.textContent = `${n[10].name}`),
        h(e, "class", "bg-neutral-600 p-2");
    },
    m(o, a) {
      E(o, e, a), l || ((t = T(e, "click", r)), (l = !0));
    },
    p(o, a) {
      n = o;
    },
    d(o) {
      o && $(e), (l = !1), t();
    },
  };
}
function _l(n) {
  let e,
    l,
    t,
    r,
    o = H(n[7].actions),
    a = [];
  for (let s = 0; s < o.length; s += 1) a[s] = bl(pl(n, o, s));
  return {
    c() {
      (e = b("div")),
        (l = b("p")),
        (l.textContent = `${n[7].component}`),
        (t = A());
      for (let s = 0; s < a.length; s += 1) a[s].c();
      (r = A()),
        h(l, "class", "h-full w-full mr-2"),
        h(e, "class", "flex flex-row gap-2 items-center m-1");
    },
    m(s, i) {
      E(s, e, i), u(e, l), u(e, t);
      for (let f = 0; f < a.length; f += 1) a[f] && a[f].m(e, null);
      u(e, r);
    },
    p(s, i) {
      if (i & 2) {
        o = H(s[7].actions);
        let f;
        for (f = 0; f < o.length; f += 1) {
          const c = pl(s, o, f);
          a[f] ? a[f].p(c, i) : ((a[f] = bl(c)), a[f].c(), a[f].m(e, r));
        }
        for (; f < a.length; f += 1) a[f].d(1);
        a.length = o.length;
      }
    },
    d(s) {
      s && $(e), se(a, s);
    },
  };
}
function er(n) {
  let e,
    l,
    t,
    r,
    o,
    a = n[0] && hl(n);
  return {
    c() {
      (e = b("div")),
        (l = b("button")),
        (l.textContent = "Show"),
        (t = A()),
        a && a.c(),
        h(l, "class", "bg-neutral-800 p-3 3 font-medium uppercase"),
        h(e, "class", "absolute top-0 z-[1000] font-medium uppercase m-4");
    },
    m(s, i) {
      E(s, e, i),
        u(e, l),
        u(e, t),
        a && a.m(e, null),
        r || ((o = T(l, "click", n[2])), (r = !0));
    },
    p(s, [i]) {
      s[0]
        ? a
          ? a.p(s, i)
          : ((a = hl(s)), a.c(), a.m(e, null))
        : a && (a.d(1), (a = null));
    },
    i: M,
    o: M,
    d(s) {
      s && $(e), a && a.d(), (r = !1), o();
    },
  };
}
function tr(n, e, l) {
  let t = !1;
  const r = [
      {
        id: "admin_car",
        label: "Admin Car",
        type: "client",
        perms: "admin",
        event: "hw_devmenumenu:client:admincar",
      },
      {
        id: "ban_player",
        label: "Ban Player",
        type: "client",
        perms: "admin",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "hw_devmenumenu:client:banplayer",
          },
        ],
      },
      {
        id: "noclip",
        label: "Noclip",
        type: "client",
        perms: "admin",
        event: "hw_devmenumenu:client:noclip",
      },
      {
        id: "invisible",
        label: "Invisible",
        type: "client",
        perms: "admin",
        event: "hw_devmenumenu:client:invisible",
      },
      {
        id: "kick_player",
        label: "Kick Player",
        type: "client",
        perms: "admin",
        event: "hw_devmenumenu:client:kickplayer",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "hw_devmenumenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "admin",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "hw_devmenumenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "admin",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "hw_devmenumenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "admin",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "hw_devmenumenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "admin",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "hw_devmenumenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "admin",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "hw_devmenumenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "admin",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "hw_devmenumenu:client:banplayer",
          },
        ],
      },
      {
        id: "spawn_vehicle",
        label: "Spawn Vehicle",
        type: "client",
        perms: "admin",
        dropdown: [
          { label: "Player", option: "dropdown", data: "players" },
          { label: "Reason", option: "text" },
          {
            label: "Time",
            option: "dropdown",
            data: [
              { label: "1 time", value: "1000" },
              { label: "2 time", value: "2000" },
              { label: "3 time", value: "3000" },
            ],
          },
          {
            label: "Ban",
            type: "server",
            option: "button",
            event: "hw_devmenumenu:client:banplayer",
          },
        ],
      },
    ],
    o = [
      { name: "hw_devmenumenu", resourceState: "started" },
      {
        name: "ps-mdt",
        version: "1.0.0",
        description: "A cool mdt",
        author: "Project Sloth",
        resourceState: "started",
      },
      {
        name: "ps-dispatch",
        version: "1.0.0",
        description: "A cool dispatch",
        author: "Project Sloth",
        resourceState: "started",
      },
      {
        name: "ps-hosuing",
        version: "1.0.0",
        description: "A cool house",
        author: "Project Sloth",
        resourceState: "started",
      },
      {
        name: "ps-camera",
        version: "1.0.0",
        description: "A cool camera",
        author: "Project Sloth and ok1ez ok1ez",
        resourceState: "started",
      },
      {
        name: "ps-hud",
        version: "1.0.0",
        description: "A cool hud",
        author: "Project Sloth",
        resourceState: "stopped",
      },
      {
        name: "ps-fuel",
        version: "1.0.0",
        description: "A cool gas pump",
        author: "Project Sloth",
        resourceState: "stopped",
      },
      {
        name: "ps-liveries",
        version: "1.0.0",
        description: "A cool liverie",
        author: "Project Sloth",
        resourceState: "stopped",
      },
      {
        name: "ps-ui",
        version: "1.0.0",
        description: "A cool ui",
        author: "Project Sloth",
        resourceState: "stopped",
      },
    ],
    a = [
      {
        id: "1",
        citizenid: "ERP95808",
        name: "John Doe",
        job: "Police Officer",
        phone: "555-555-5555",
        discord: "discord:917110675220865025",
        dateofbirth: "01/12/2001",
        bank: "10022",
        cash: "2022",
        license: "license:9e9df5e3b52641da00f5b2aba25edc45317689b2",
      },
      {
        id: "2",
        citizenid: "ERP87521",
        name: "Jane Smith",
        job: "Paramedic",
        phone: "555-555-1234",
        discord: "discord:732198415678290144",
        dateofbirth: "05/18/1990",
        bank: "8000",
        cash: "150",
        license: "license:5a0f4e86c7d283b3cde6acba9821d4a5913076d8",
      },
      {
        id: "3",
        citizenid: "ERP35267",
        name: "Michael Johnson",
        job: "Mechanic",
        phone: "555-555-9876",
        discord: "discord:609827518329704632",
        dateofbirth: "11/03/1985",
        bank: "500",
        cash: "3500",
        license: "license:c5f2b76a8e1e0d4c7892a3d1b74cf561b89e25e7",
      },
      {
        id: "4",
        citizenid: "ERP70125",
        name: "Emily Davis",
        job: "Lawyer",
        phone: "555-555-2222",
        discord: "discord:815369027403189267",
        dateofbirth: "09/21/1988",
        bank: "22000",
        cash: "500",
        license: "license:3d4e6f7aa1b9e8c5d2fbc0439e1a865b470192f4",
      },
      {
        id: "5",
        citizenid: "ERP48039",
        name: "Robert Wilson",
        job: "Taxi Driver",
        phone: "555-555-7777",
        discord: "discord:518942015678302479",
        dateofbirth: "07/08/1977",
        bank: "1200",
        cash: "780",
        license: "license:98e7c6d5a2b3f1e4d0c9876a5432109bfedc8a76",
      },
      {
        id: "6",
        citizenid: "ERP91726",
        name: "Amanda Lee",
        job: "Chef",
        phone: "555-555-3333",
        discord: "discord:725048390162871590",
        dateofbirth: "03/15/1995",
        bank: "4000",
        cash: "200",
        license: "license:4a5b6c7d8e9f01234567890abcdef1234567890",
      },
      {
        id: "7",
        citizenid: "ERP24680",
        name: "Christopher Martinez",
        job: "Firefighter",
        phone: "555-555-8888",
        discord: "discord:926371058274690831",
        dateofbirth: "12/30/1982",
        bank: "7500",
        cash: "1000",
        license: "license:7890123456abcdef0123456789a5b4c3d2e1f0",
      },
    ];
  return (
    ze([{ action: "setActionData", data: r }]),
    ze([{ action: "setResourceData", data: o }]),
    ze([{ action: "setPlayersData", data: a }]),
    [
      t,
      [
        {
          component: "Show",
          actions: [
            { name: "show", action: "setVisible", data: !0 },
            { name: "hide", action: "setVisible", data: !1 },
          ],
        },
        {
          component: "Actions Data",
          actions: [{ name: "Set Data", action: "setActionData", data: r }],
        },
        {
          component: "Resource Data",
          actions: [{ name: "Set Data", action: "setResourceData", data: o }],
        },
        {
          component: "Player Data",
          actions: [{ name: "Set Data", action: "setPlayersData", data: a }],
        },
      ],
      () => {
        l(0, (t = !t));
      },
      (c) => {
        if (c.custom == !0) {
          c.customFunction();
          return;
        }
        ze([{ action: c.action, data: c.data }]);
      },
    ]
  );
}
class lr extends W {
  constructor(e) {
    super(), Y(this, e, tr, er, z, {});
  }
}
const _t = Q(!0),
  Rt = Q(null),
  Bt = Q(null),
  jt = Q(null),
  Ot = Q(null),
  Vt = Q(null),
  Ht = Q(null),
  Ft = Q(null),
  Ut = Q(null),
  Ie = Q(null),
  nr = Q(null),
  et = Q(null),
  yt = Q(null),
  zt = Q(null),
  yn = Q(null);
function rr(n, e, l) {
  let t, r, o, a, s, i, f, c, d, m, g;
  return (
    N(n, zt, (p) => l(0, (t = p))),
    N(n, yt, (p) => l(1, (r = p))),
    N(n, Ht, (p) => l(2, (o = p))),
    N(n, Vt, (p) => l(3, (a = p))),
    N(n, Ot, (p) => l(4, (s = p))),
    N(n, jt, (p) => l(5, (i = p))),
    N(n, Bt, (p) => l(6, (f = p))),
    N(n, Ie, (p) => l(7, (c = p))),
    N(n, et, (p) => l(8, (d = p))),
    N(n, Ft, (p) => l(9, (m = p))),
    N(n, Rt, (p) => l(10, (g = p))),
    ze([{ action: "setVisible", data: !0 }]),
    ze([{ action: "setBrowserMode", data: !0 }]),
    Ae("setupUI", (p) => {
      ue(Rt, (g = p.actions), g),
        ue(et, (d = p.resources), d),
        ue(Ft, (m = p.playerData), m);
    }),
    Ae("setResourceData", (p) => {
      ue(et, (d = p), d);
    }),
    Ae("setPlayersData", (p) => {
      ue(Ie, (c = p), c);
    }),
    Ae("data", (p) => {
      ue(Bt, (f = p.vehicles), f),
        ue(jt, (i = p.items), i),
        ue(Ot, (s = p.jobs), s),
        ue(Vt, (a = p.gangs), a),
        ue(Ht, (o = p.locations), o);
    }),
    Ae("showVehicleMenu", (p) => {
      ue(yt, (r = p), r);
    }),
    Ae("setMessages", (p) => {
      zt.set(p), yn.set(t[0]);
    }),
    []
  );
}
class ar extends W {
  constructor(e) {
    super(), Y(this, e, rr, null, z, {});
  }
}
function wn(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function wt(
  n,
  {
    delay: e = 0,
    duration: l = 400,
    easing: t = wn,
    x: r = 0,
    y: o = 0,
    opacity: a = 0,
  } = {}
) {
  const s = getComputedStyle(n),
    i = +s.opacity,
    f = s.transform === "none" ? "" : s.transform,
    c = i * (1 - a),
    [d, m] = al(r),
    [g, p] = al(o);
  return {
    delay: e,
    duration: l,
    easing: t,
    css: (y, _) => `
			transform: ${f} translate(${(1 - y) * d}${m}, ${(1 - y) * g}${p});
			opacity: ${i - c * _}`,
  };
}
function Ge(
  n,
  { delay: e = 0, duration: l = 400, easing: t = wn, axis: r = "y" } = {}
) {
  const o = getComputedStyle(n),
    a = +o.opacity,
    s = r === "y" ? "height" : "width",
    i = parseFloat(o[s]),
    f = r === "y" ? ["top", "bottom"] : ["left", "right"],
    c = f.map((v) => `${v[0].toUpperCase()}${v.slice(1)}`),
    d = parseFloat(o[`padding${c[0]}`]),
    m = parseFloat(o[`padding${c[1]}`]),
    g = parseFloat(o[`margin${c[0]}`]),
    p = parseFloat(o[`margin${c[1]}`]),
    y = parseFloat(o[`border${c[0]}Width`]),
    _ = parseFloat(o[`border${c[1]}Width`]);
  return {
    delay: e,
    duration: l,
    easing: t,
    css: (v) =>
      `overflow: hidden;opacity: ${Math.min(v * 20, 1) * a};${s}: ${
        v * i
      }px;padding-${f[0]}: ${v * d}px;padding-${f[1]}: ${v * m}px;margin-${
        f[0]
      }: ${v * g}px;margin-${f[1]}: ${v * p}px;border-${f[0]}-width: ${
        v * y
      }px;border-${f[1]}-width: ${v * _}px;`,
  };
}
function or(n) {
  let e, l, t, r, o;
  return {
    c() {
      (e = b("button")),
        (l = b("i")),
        h(l, "class", n[0]),
        h(e, "title", n[2]),
        h(
          e,
          "class",
          (t =
            "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
            (n[3] == n[1] ? "bg-tertiary" : "") +
            " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100")
        ),
        h(e, "data-tip", n[2]);
    },
    m(a, s) {
      E(a, e, s), u(e, l), r || ((o = T(e, "click", n[4])), (r = !0));
    },
    p(a, [s]) {
      s & 1 && h(l, "class", a[0]),
        s & 4 && h(e, "title", a[2]),
        s & 10 &&
          t !==
            (t =
              "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
              (a[3] == a[1] ? "bg-tertiary" : "") +
              " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100") &&
          h(e, "class", t),
        s & 4 && h(e, "data-tip", a[2]);
    },
    i: M,
    o: M,
    d(a) {
      a && $(e), (r = !1), o();
    },
  };
}
function ir(n, e, l) {
  let t;
  N(n, Nt, (i) => l(3, (t = i)));
  let { icon: r } = e,
    { value: o } = e,
    { tooltiptext: a } = e;
  const s = () => {
    Nt.set(o);
  };
  return (
    (n.$$set = (i) => {
      "icon" in i && l(0, (r = i.icon)),
        "value" in i && l(1, (o = i.value)),
        "tooltiptext" in i && l(2, (a = i.tooltiptext));
    }),
    [r, o, a, t, s]
  );
}
let sr = class extends W {
  constructor(e) {
    super(), Y(this, e, ir, or, z, { icon: 0, value: 1, tooltiptext: 2 });
  }
};
function ml(n, e, l) {
  const t = n.slice();
  return (t[5] = e[l]), t;
}
function vl(n) {
  let e, l;
  return (
    (e = new sr({
      props: { tooltiptext: n[5].value, icon: n[5].icon, value: n[5].value },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p: M,
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function fr(n) {
  let e,
    l,
    t,
    r,
    o,
    a,
    s,
    i,
    f,
    c,
    d,
    m,
    g = H(n[2]),
    p = [];
  for (let _ = 0; _ < g.length; _ += 1) p[_] = vl(ml(n, g, _));
  const y = (_) =>
    D(p[_], 1, 1, () => {
      p[_] = null;
    });
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("button")),
        (r = b("i")),
        (o = A());
      for (let _ = 0; _ < p.length; _ += 1) p[_].c();
      (a = A()),
        (s = b("button")),
        (i = b("i")),
        h(r, "class", "fas"),
        dt(r, "fa-angle-right", n[0]),
        dt(r, "fa-angle-left", !n[0]),
        h(t, "class", "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary"),
        h(l, "class", "mb-auto"),
        h(i, "class", "fas fa-code"),
        h(
          s,
          "class",
          (f =
            "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
            (n[1] ? "text-accent" : "") +
            " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100")
        ),
        h(s, "data-tip", "Dev Mode"),
        h(
          e,
          "class",
          "w-[7vh] h-full flex flex-col gap-y-[1vh] items-center py-[1.4vh] border-r-[0.2vh] border-tertiary"
        );
    },
    m(_, v) {
      E(_, e, v), u(e, l), u(l, t), u(t, r), u(e, o);
      for (let w = 0; w < p.length; w += 1) p[w] && p[w].m(e, null);
      u(e, a),
        u(e, s),
        u(s, i),
        (c = !0),
        d || ((m = [T(t, "click", n[3]), T(s, "click", n[4])]), (d = !0));
    },
    p(_, [v]) {
      if (
        ((!c || v & 1) && dt(r, "fa-angle-right", _[0]),
        (!c || v & 1) && dt(r, "fa-angle-left", !_[0]),
        v & 4)
      ) {
        g = H(_[2]);
        let w;
        for (w = 0; w < g.length; w += 1) {
          const P = ml(_, g, w);
          p[w]
            ? (p[w].p(P, v), k(p[w], 1))
            : ((p[w] = vl(P)), p[w].c(), k(p[w], 1), p[w].m(e, a));
        }
        for (J(), w = g.length; w < p.length; w += 1) y(w);
        K();
      }
      (!c ||
        (v & 2 &&
          f !==
            (f =
              "w-[4vh] h-[4vh] rounded-[0.5vh] hover:bg-tertiary " +
              (_[1] ? "text-accent" : "") +
              " relative before:content-[attr(data-tip)] before:absolute before:-right-3 before:top-1/2 before:w-max before:max-w-xs before:-translate-x-full before:-translate-y-1/2 before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:-right-3 after:top-1/2 after:-translate-x-0 after:-translate-y-1/2 after:h-0 after:w-0 after:border-t-transparent after:border-l-transparent after:border-b-transparent after:border-r-tertiary after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100"))) &&
        h(s, "class", f);
    },
    i(_) {
      if (!c) {
        for (let v = 0; v < g.length; v += 1) k(p[v]);
        c = !0;
      }
    },
    o(_) {
      p = p.filter(Boolean);
      for (let v = 0; v < p.length; v += 1) D(p[v]);
      c = !1;
    },
    d(_) {
      _ && $(e), se(p, _), (d = !1), ie(m);
    },
  };
}
function cr(n, e, l) {
  let t, r;
  return (
    N(n, $e, (i) => l(0, (t = i))),
    N(n, fl, (i) => l(1, (r = i))),
    [
      t,
      r,
      [
        { value: "Staffchat", icon: "fas fa-message" },
        { value: "Players", icon: "fas fa-users" },
        { value: "Server", icon: "fas fa-server" },
        { value: "Actions", icon: "fas fa-wand-magic-sparkles" },
      ],
      () => $e.update((i) => !i),
      () => fl.update((i) => !i),
    ]
  );
}
class ur extends W {
  constructor(e) {
    super(), Y(this, e, cr, fr, z, {});
  }
}
function gl(n) {
  let e, l, t, r, o, a, s;
  return {
    c() {
      (e = b("div")),
        (l = b("i")),
        (t = A()),
        (r = b("input")),
        h(l, "class", "fas fa-magnifying-glass text-[1.5vh]"),
        h(r, "type", "text"),
        h(r, "placeholder", "Search"),
        h(
          r,
          "class",
          (o =
            "h-full px-[1vh] bg-transparent text-[1.7vh] " +
            (n[3] && n[5] ? "w-[94%]" : "w-[80%]"))
        ),
        h(
          e,
          "class",
          "w-full h-[4.5vh] rounded-[0.5vh] flex items-center justify-center gap-[1vh] bg-tertiary"
        );
    },
    m(i, f) {
      E(i, e, f),
        u(e, l),
        u(e, t),
        u(e, r),
        De(r, n[0]),
        a ||
          ((s = [
            T(r, "input", function () {
              kt(n[4]) && n[4].apply(this, arguments);
            }),
            T(r, "input", n[6]),
          ]),
          (a = !0));
    },
    p(i, f) {
      (n = i),
        f & 40 &&
          o !==
            (o =
              "h-full px-[1vh] bg-transparent text-[1.7vh] " +
              (n[3] && n[5] ? "w-[94%]" : "w-[80%]")) &&
          h(r, "class", o),
        f & 1 && r.value !== n[0] && De(r, n[0]);
    },
    d(i) {
      i && $(e), (a = !1), ie(s);
    },
  };
}
function dr(n) {
  let e,
    l,
    t,
    r,
    o = n[2] && gl(n);
  return {
    c() {
      (e = b("p")),
        (l = S(n[1])),
        (t = A()),
        o && o.c(),
        (r = Z()),
        h(e, "class", "my-[2vh] font-medium text-[2vh]");
    },
    m(a, s) {
      E(a, e, s), u(e, l), E(a, t, s), o && o.m(a, s), E(a, r, s);
    },
    p(a, [s]) {
      s & 2 && C(l, a[1]),
        a[2]
          ? o
            ? o.p(a, s)
            : ((o = gl(a)), o.c(), o.m(r.parentNode, r))
          : o && (o.d(1), (o = null));
    },
    i: M,
    o: M,
    d(a) {
      a && ($(e), $(t), $(r)), o && o.d(a);
    },
  };
}
function pr(n, e, l) {
  let t;
  N(n, $e, (c) => l(5, (t = c)));
  let { title: r } = e,
    { hasSearch: o = !1 } = e,
    { hasLargeMenu: a = !1 } = e,
    { onSearchInput: s = null } = e,
    { search: i = null } = e;
  function f() {
    (i = this.value), l(0, i);
  }
  return (
    (n.$$set = (c) => {
      "title" in c && l(1, (r = c.title)),
        "hasSearch" in c && l(2, (o = c.hasSearch)),
        "hasLargeMenu" in c && l(3, (a = c.hasLargeMenu)),
        "onSearchInput" in c && l(4, (s = c.onSearchInput)),
        "search" in c && l(0, (i = c.search));
    }),
    [i, r, o, a, s, t, f]
  );
}
class lt extends W {
  constructor(e) {
    super(),
      Y(this, e, pr, dr, z, {
        title: 1,
        hasSearch: 2,
        hasLargeMenu: 3,
        onSearchInput: 4,
        search: 0,
      });
  }
}
function hr(n) {
  let e, l, t, r, o, a, s, i, f, c;
  return {
    c() {
      (e = b("div")),
        (l = b("button")),
        (t = S("All Actions")),
        (o = A()),
        (a = b("button")),
        (s = S("Favorites")),
        h(
          l,
          "class",
          (r =
            "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
            (n[0] ? "bg-tertiary" : " "))
        ),
        h(
          a,
          "class",
          (i =
            "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
            (n[0] ? " " : "bg-tertiary"))
        ),
        h(e, "class", "mt-[1vh] w-full h-[4.5vh] flex gap-[1vh] font-medium");
    },
    m(d, m) {
      E(d, e, m),
        u(e, l),
        u(l, t),
        u(e, o),
        u(e, a),
        u(a, s),
        f || ((c = [T(l, "click", n[1]), T(a, "click", n[2])]), (f = !0));
    },
    p(d, [m]) {
      m & 1 &&
        r !==
          (r =
            "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
            (d[0] ? "bg-tertiary" : " ")) &&
        h(l, "class", r),
        m & 1 &&
          i !==
            (i =
              "w-full h-full hover:bg-tertiary rounded-[0.5vh] border-[0.2vh] border-tertiary " +
              (d[0] ? " " : "bg-tertiary")) &&
          h(a, "class", i);
    },
    i: M,
    o: M,
    d(d) {
      d && $(e), (f = !1), ie(c);
    },
  };
}
function br(n, e, l) {
  let t;
  return (
    N(n, _t, (a) => l(0, (t = a))),
    [
      t,
      () => {
        _t.set(!0);
      },
      () => {
        _t.set(!1);
      },
    ]
  );
}
class _r extends W {
  constructor(e) {
    super(), Y(this, e, br, hr, z, {});
  }
}
function mr(n) {
  let e, l, t, r;
  return {
    c() {
      (e = b("button")),
        h(e, "class", (l = (n[0] ? "fas" : "far") + " fa-star"));
    },
    m(o, a) {
      E(o, e, a), t || ((r = T(e, "click", n[1])), (t = !0));
    },
    p(o, [a]) {
      a & 1 &&
        l !== (l = (o[0] ? "fas" : "far") + " fa-star") &&
        h(e, "class", l);
    },
    i: M,
    o: M,
    d(o) {
      o && $(e), (t = !1), r();
    },
  };
}
function vr(n, e, l) {
  let { data: t } = e,
    r = localStorage.getItem(`favorite-${t}`) === "true";
  const o = () => {
    event.stopPropagation(),
      l(0, (r = !r)),
      localStorage.setItem(`favorite-${t}`, r);
  };
  return (
    Re(() => {}),
    (n.$$set = (a) => {
      "data" in a && l(2, (t = a.data));
    }),
    [r, o, t]
  );
}
class kn extends W {
  constructor(e) {
    super(), Y(this, e, vr, mr, z, { data: 2 });
  }
}
function gr(n) {
  let e,
    l,
    t,
    r,
    o,
    a = n[0].label + "",
    s,
    i,
    f,
    c;
  return (
    (t = new kn({ props: { data: n[1] } })),
    {
      c() {
        (e = b("button")),
          (l = b("div")),
          j(t.$$.fragment),
          (r = A()),
          (o = b("p")),
          (s = S(a)),
          h(l, "class", "flex items-center gap-[1vh]"),
          h(
            e,
            "class",
            "min-h-[4.5vh] w-full flex items-center px-[1.5vh] rounded-[0.5vh] bg-tertiary hover:bg-opacity-90"
          );
      },
      m(d, m) {
        E(d, e, m),
          u(e, l),
          R(t, l, null),
          u(l, r),
          u(l, o),
          u(o, s),
          (i = !0),
          f || ((c = T(e, "click", n[2])), (f = !0));
      },
      p(d, [m]) {
        const g = {};
        m & 2 && (g.data = d[1]),
          t.$set(g),
          (!i || m & 1) && a !== (a = d[0].label + "") && C(s, a);
      },
      i(d) {
        i || (k(t.$$.fragment, d), (i = !0));
      },
      o(d) {
        D(t.$$.fragment, d), (i = !1);
      },
      d(d) {
        d && $(e), B(t), (f = !1), c();
      },
    }
  );
}
function yr(n, e, l) {
  let { data: t } = e,
    { id: r } = e;
  Re(() => {});
  const o = () => {
    console.log(t.event), oe("clickButton", { data: t });
  };
  return (
    (n.$$set = (a) => {
      "data" in a && l(0, (t = a.data)), "id" in a && l(1, (r = a.id));
    }),
    [t, r, o]
  );
}
let wr = class extends W {
  constructor(e) {
    super(), Y(this, e, yr, gr, z, { data: 0, id: 1 });
  }
};
function yl(n, e, l) {
  const t = n.slice();
  return (t[34] = e[l]), t;
}
function wl(n, e, l) {
  const t = n.slice();
  return (t[34] = e[l]), t;
}
function kl(n, e, l) {
  const t = n.slice();
  return (t[34] = e[l]), t;
}
function $l(n, e, l) {
  const t = n.slice();
  return (t[34] = e[l]), t;
}
function El(n, e, l) {
  const t = n.slice();
  return (t[34] = e[l]), t;
}
function Al(n, e, l) {
  const t = n.slice();
  return (t[34] = e[l]), t;
}
function Dl(n, e, l) {
  const t = n.slice();
  return (t[34] = e[l]), t;
}
function Sl(n) {
  let e, l, t, r, o;
  function a(f, c) {
    return f[1] === "players"
      ? Lr
      : f[1] === "vehicles"
      ? Sr
      : f[1] === "items"
      ? Dr
      : f[1] === "jobs"
      ? Ar
      : f[1] === "gangs"
      ? Er
      : f[1] === "locations"
      ? $r
      : kr;
  }
  let s = a(n),
    i = s(n);
  return {
    c() {
      (e = b("button")),
        i.c(),
        h(
          e,
          "class",
          "w-full rounded-b-[0.5vh] flex flex-col max-h-[15vh] overflow-y-auto border-t border-primary scroll-visible"
        );
    },
    m(f, c) {
      E(f, e, c),
        i.m(e, null),
        (t = !0),
        r || ((o = [T(e, "mouseenter", n[31]), T(e, "blur", n[32])]), (r = !0));
    },
    p(f, c) {
      s === (s = a(f)) && i
        ? i.p(f, c)
        : (i.d(1), (i = s(f)), i && (i.c(), i.m(e, null)));
    },
    i(f) {
      t ||
        (f &&
          ke(() => {
            t && (l || (l = me(e, Ge, { duration: 150 }, !0)), l.run(1));
          }),
        (t = !0));
    },
    o(f) {
      f && (l || (l = me(e, Ge, { duration: 150 }, !1)), l.run(0)), (t = !1);
    },
    d(f) {
      f && $(e), i.d(), f && l && l.end(), (r = !1), ie(o);
    },
  };
}
function kr(n) {
  let e,
    l = H(n[1].filter(n[29])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Ll(yl(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = Z();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      E(r, e, o);
    },
    p(r, o) {
      if (o[0] & 2054) {
        l = H(r[1].filter(r[29]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = yl(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Ll(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && $(e), se(t, r);
    },
  };
}
function $r(n) {
  let e,
    l = H(n[10].filter(n[27])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Pl(wl(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = Z();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      E(r, e, o);
    },
    p(r, o) {
      if (o[0] & 3076) {
        l = H(r[10].filter(r[27]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = wl(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Pl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && $(e), se(t, r);
    },
  };
}
function Er(n) {
  let e,
    l = H(n[9].filter(n[25])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Cl(kl(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = Z();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      E(r, e, o);
    },
    p(r, o) {
      if (o[0] & 2564) {
        l = H(r[9].filter(r[25]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = kl(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Cl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && $(e), se(t, r);
    },
  };
}
function Ar(n) {
  let e,
    l = H(n[8].filter(n[23])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Tl($l(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = Z();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      E(r, e, o);
    },
    p(r, o) {
      if (o[0] & 2308) {
        l = H(r[8].filter(r[23]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = $l(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Tl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && $(e), se(t, r);
    },
  };
}
function Dr(n) {
  let e,
    l = H(n[7].filter(n[21])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Ml(El(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = Z();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      E(r, e, o);
    },
    p(r, o) {
      if (o[0] & 2180) {
        l = H(r[7].filter(r[21]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = El(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Ml(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && $(e), se(t, r);
    },
  };
}
function Sr(n) {
  let e,
    l = H(n[6].filter(n[19])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Nl(Al(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = Z();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      E(r, e, o);
    },
    p(r, o) {
      if (o[0] & 2116) {
        l = H(r[6].filter(r[19]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = Al(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Nl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && $(e), se(t, r);
    },
  };
}
function Lr(n) {
  let e,
    l = H(n[5].filter(n[17])),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Il(Dl(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = Z();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      E(r, e, o);
    },
    p(r, o) {
      if (o[0] & 2084) {
        l = H(r[5].filter(r[17]));
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = Dl(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Il(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && $(e), se(t, r);
    },
  };
}
function Ll(n) {
  let e,
    l,
    t = n[34].label + "",
    r,
    o,
    a,
    s;
  function i() {
    return n[30](n[34]);
  }
  return {
    c() {
      (e = b("button")),
        (l = b("p")),
        (r = S(t)),
        (o = A()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(f, c) {
      E(f, e, c),
        u(e, l),
        u(l, r),
        u(e, o),
        a || ((s = T(e, "click", i)), (a = !0));
    },
    p(f, c) {
      (n = f), c[0] & 6 && t !== (t = n[34].label + "") && C(r, t);
    },
    d(f) {
      f && $(e), (a = !1), s();
    },
  };
}
function Pl(n) {
  let e,
    l,
    t = n[34].label + "",
    r,
    o,
    a,
    s,
    i = n[34].value + "",
    f,
    c,
    d,
    m,
    g;
  function p() {
    return n[28](n[34]);
  }
  return {
    c() {
      (e = b("button")),
        (l = b("p")),
        (r = S(t)),
        (o = A()),
        (a = b("p")),
        (s = S("(")),
        (f = S(i)),
        (c = S(")")),
        (d = A()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(y, _) {
      E(y, e, _),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        m || ((g = T(e, "click", p)), (m = !0));
    },
    p(y, _) {
      (n = y),
        _[0] & 1028 && t !== (t = n[34].label + "") && C(r, t),
        _[0] & 1028 && i !== (i = n[34].value + "") && C(f, i);
    },
    d(y) {
      y && $(e), (m = !1), g();
    },
  };
}
function Cl(n) {
  let e,
    l,
    t = n[34].label + "",
    r,
    o,
    a,
    s,
    i = n[34].value + "",
    f,
    c,
    d,
    m,
    g;
  function p() {
    return n[26](n[34]);
  }
  return {
    c() {
      (e = b("button")),
        (l = b("p")),
        (r = S(t)),
        (o = A()),
        (a = b("p")),
        (s = S("(")),
        (f = S(i)),
        (c = S(")")),
        (d = A()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(y, _) {
      E(y, e, _),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        m || ((g = T(e, "click", p)), (m = !0));
    },
    p(y, _) {
      (n = y),
        _[0] & 516 && t !== (t = n[34].label + "") && C(r, t),
        _[0] & 516 && i !== (i = n[34].value + "") && C(f, i);
    },
    d(y) {
      y && $(e), (m = !1), g();
    },
  };
}
function Tl(n) {
  let e,
    l,
    t = n[34].label + "",
    r,
    o,
    a,
    s,
    i = n[34].value + "",
    f,
    c,
    d,
    m,
    g;
  function p() {
    return n[24](n[34]);
  }
  return {
    c() {
      (e = b("button")),
        (l = b("p")),
        (r = S(t)),
        (o = A()),
        (a = b("p")),
        (s = S("(")),
        (f = S(i)),
        (c = S(")")),
        (d = A()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(y, _) {
      E(y, e, _),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        m || ((g = T(e, "click", p)), (m = !0));
    },
    p(y, _) {
      (n = y),
        _[0] & 260 && t !== (t = n[34].label + "") && C(r, t),
        _[0] & 260 && i !== (i = n[34].value + "") && C(f, i);
    },
    d(y) {
      y && $(e), (m = !1), g();
    },
  };
}
function Ml(n) {
  let e,
    l,
    t = n[34].label + "",
    r,
    o,
    a,
    s,
    i = n[34].value + "",
    f,
    c,
    d,
    m,
    g;
  function p() {
    return n[22](n[34]);
  }
  return {
    c() {
      (e = b("button")),
        (l = b("p")),
        (r = S(t)),
        (o = A()),
        (a = b("p")),
        (s = S("(")),
        (f = S(i)),
        (c = S(")")),
        (d = A()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(y, _) {
      E(y, e, _),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        m || ((g = T(e, "click", p)), (m = !0));
    },
    p(y, _) {
      (n = y),
        _[0] & 132 && t !== (t = n[34].label + "") && C(r, t),
        _[0] & 132 && i !== (i = n[34].value + "") && C(f, i);
    },
    d(y) {
      y && $(e), (m = !1), g();
    },
  };
}
function Nl(n) {
  let e,
    l,
    t = n[34].label + "",
    r,
    o,
    a,
    s,
    i = n[34].value + "",
    f,
    c,
    d,
    m,
    g;
  function p() {
    return n[20](n[34]);
  }
  return {
    c() {
      (e = b("button")),
        (l = b("p")),
        (r = S(t)),
        (o = A()),
        (a = b("p")),
        (s = S("(")),
        (f = S(i)),
        (c = S(")")),
        (d = A()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(y, _) {
      E(y, e, _),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        m || ((g = T(e, "click", p)), (m = !0));
    },
    p(y, _) {
      (n = y),
        _[0] & 68 && t !== (t = n[34].label + "") && C(r, t),
        _[0] & 68 && i !== (i = n[34].value + "") && C(f, i);
    },
    d(y) {
      y && $(e), (m = !1), g();
    },
  };
}
function Il(n) {
  let e,
    l,
    t = n[34].name + "",
    r,
    o,
    a,
    s,
    i = n[34].id + "",
    f,
    c,
    d,
    m,
    g;
  function p() {
    return n[18](n[34]);
  }
  return {
    c() {
      (e = b("button")),
        (l = b("p")),
        (r = S(t)),
        (o = A()),
        (a = b("p")),
        (s = S("(")),
        (f = S(i)),
        (c = S(")")),
        (d = A()),
        h(
          e,
          "class",
          "w-full p-[0.5vh] flex justify-start text-start px-[1vh] gap-[0.5vh] hover:bg-tertiary"
        );
    },
    m(y, _) {
      E(y, e, _),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, s),
        u(a, f),
        u(a, c),
        u(e, d),
        m || ((g = T(e, "click", p)), (m = !0));
    },
    p(y, _) {
      (n = y),
        _[0] & 36 && t !== (t = n[34].name + "") && C(r, t),
        _[0] & 36 && i !== (i = n[34].id + "") && C(f, i);
    },
    d(y) {
      y && $(e), (m = !1), g();
    },
  };
}
function Pr(n) {
  let e,
    l,
    t,
    r,
    o,
    a,
    s,
    i,
    f,
    c = n[4] && Sl(n);
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("input")),
        (r = A()),
        (o = b("i")),
        (s = A()),
        c && c.c(),
        h(t, "type", "text"),
        h(t, "placeholder", n[0]),
        h(t, "class", "h-full w-[90%] bg-transparent"),
        h(
          o,
          "class",
          (a = "fas fa-angle-" + (n[4] ? "down" : "right") + " text-[1.2vh]")
        ),
        h(
          l,
          "class",
          "w-full h-[3.8vh] px-[1vh] flex justify-between items-center"
        ),
        h(
          e,
          "class",
          "w-[22vh] flex flex-col bg-secondary rounded-[0.5vh] border-[0.1vh] border-primary"
        );
    },
    m(d, m) {
      E(d, e, m),
        u(e, l),
        u(l, t),
        De(t, n[2]),
        u(l, r),
        u(l, o),
        u(e, s),
        c && c.m(e, null),
        i ||
          ((f = [
            T(t, "focus", n[12]),
            T(t, "blur", n[13]),
            T(t, "input", n[16]),
          ]),
          (i = !0));
    },
    p(d, m) {
      m[0] & 1 && h(t, "placeholder", d[0]),
        m[0] & 4 && t.value !== d[2] && De(t, d[2]),
        m[0] & 16 &&
          a !==
            (a =
              "fas fa-angle-" + (d[4] ? "down" : "right") + " text-[1.2vh]") &&
          h(o, "class", a),
        d[4]
          ? c
            ? (c.p(d, m), m[0] & 16 && k(c, 1))
            : ((c = Sl(d)), c.c(), k(c, 1), c.m(e, null))
          : c &&
            (J(),
            D(c, 1, 1, () => {
              c = null;
            }),
            K());
    },
    i(d) {
      k(c);
    },
    o(d) {
      D(c);
    },
    d(d) {
      d && $(e), c && c.d(), (i = !1), ie(f);
    },
  };
}
function Cr(n, e, l) {
  let t, r, o, a, s, i;
  N(n, Ie, (L) => l(5, (t = L))),
    N(n, Bt, (L) => l(6, (r = L))),
    N(n, jt, (L) => l(7, (o = L))),
    N(n, Ot, (L) => l(8, (a = L))),
    N(n, Vt, (L) => l(9, (s = L))),
    N(n, Ht, (L) => l(10, (i = L)));
  let { action: f } = e,
    { label_title: c } = e,
    { data: d } = e,
    { selectedData: m } = e,
    g = "",
    p = !1,
    y = !1;
  function _(L, de) {
    l(2, (g = L)), l(4, (y = !1)), m({ label: L, value: de, id: c });
  }
  function v() {
    l(3, (p = !0)), l(4, (y = !0)), l(2, (g = ""));
  }
  function w() {
    p || l(4, (y = !1)), l(3, (p = !1));
  }
  async function P() {
    const L = await oe("getPlayers");
    Ie.set(L);
  }
  Re(() => {
    d === "players" && P();
  });
  function q() {
    (g = this.value), l(2, g);
  }
  const U = (L) => L.name.toLowerCase().includes(g.toLowerCase()),
    F = (L) => _(L.name, L.id),
    ee = (L) =>
      L.label.toLowerCase().includes(g.toLowerCase()) ||
      L.value.toLowerCase().includes(g.toLowerCase()),
    te = (L) => _(L.label, L.value),
    G = (L) =>
      L.label.toLowerCase().includes(g.toLowerCase()) ||
      L.value.toLowerCase().includes(g.toLowerCase()),
    O = (L) => _(L.label, L.value),
    I = (L) =>
      L.label.toLowerCase().includes(g.toLowerCase()) ||
      L.value.toLowerCase().includes(g.toLowerCase()),
    X = (L) => _(L.label, L.value),
    ve = (L) =>
      L.label.toLowerCase().includes(g.toLowerCase()) ||
      L.value.toLowerCase().includes(g.toLowerCase()),
    ge = (L) => _(L.label, L.value),
    he = (L) =>
      L.label.toLowerCase().includes(g.toLowerCase()) ||
      L.value.toLowerCase().includes(g.toLowerCase()),
    Se = (L) => _(L.label, L.value),
    be = (L) =>
      L.label.toLowerCase().includes(g.toLowerCase()) ||
      L.value.toLowerCase().includes(g.toLowerCase()),
    _e = (L) => _(L.label, L.value),
    Ee = () => {
      l(3, (p = !0));
    },
    ye = () => {
      l(3, (p = !1));
    };
  return (
    (n.$$set = (L) => {
      "action" in L && l(14, (f = L.action)),
        "label_title" in L && l(0, (c = L.label_title)),
        "data" in L && l(1, (d = L.data)),
        "selectedData" in L && l(15, (m = L.selectedData));
    }),
    [
      c,
      d,
      g,
      p,
      y,
      t,
      r,
      o,
      a,
      s,
      i,
      _,
      v,
      w,
      f,
      m,
      q,
      U,
      F,
      ee,
      te,
      G,
      O,
      I,
      X,
      ve,
      ge,
      he,
      Se,
      be,
      _e,
      Ee,
      ye,
    ]
  );
}
class $n extends W {
  constructor(e) {
    super(),
      Y(
        this,
        e,
        Cr,
        Pr,
        z,
        { action: 14, label_title: 0, data: 1, selectedData: 15 },
        null,
        [-1, -1]
      );
  }
}
function Tr(n) {
  let e, l, t, r, o, a;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("input")),
        h(t, "type", "text"),
        h(t, "placeholder", (r = n[0].label)),
        h(t, "class", "h-full w-[90%] bg-transparent"),
        h(l, "class", "w-full h-[3.8vh] pl-[1vh] flex justify-between"),
        h(
          e,
          "class",
          "w-[22vh] flex flex-col bg-secondary rounded-[0.5vh] border-[0.1vh] border-primary"
        );
    },
    m(s, i) {
      E(s, e, i),
        u(e, l),
        u(l, t),
        De(t, n[1]),
        o ||
          ((a = [
            T(t, "input", n[4]),
            T(t, "input", n[5]),
            T(t, "blur", n[6]),
            T(t, "click", n[7]),
          ]),
          (o = !0));
    },
    p(s, [i]) {
      i & 1 && r !== (r = s[0].label) && h(t, "placeholder", r),
        i & 2 && t.value !== s[1] && De(t, s[1]);
    },
    i: M,
    o: M,
    d(s) {
      s && $(e), (o = !1), ie(a);
    },
  };
}
function Mr(n, e, l) {
  let { data: t } = e,
    { selectedData: r } = e;
  function o(d, m) {
    r({ label: d, value: m, id: d });
  }
  let a = "";
  function s() {
    (a = this.value), l(1, a);
  }
  const i = (d) => l(1, (a = d.target.value)),
    f = () => o(t.label, a),
    c = () => o(t.label, a);
  return (
    (n.$$set = (d) => {
      "data" in d && l(0, (t = d.data)),
        "selectedData" in d && l(3, (r = d.selectedData));
    }),
    [t, a, o, r, s, i, f, c]
  );
}
class Gt extends W {
  constructor(e) {
    super(), Y(this, e, Mr, Tr, z, { data: 0, selectedData: 3 });
  }
}
function Rl(n, e, l) {
  const t = n.slice();
  return (t[8] = e[l]), t;
}
function Bl(n) {
  let e,
    l,
    t,
    r = n[0].dropdown && jl(n);
  return {
    c() {
      (e = b("div")),
        r && r.c(),
        h(
          e,
          "class",
          "w-full rounded-b-[1vh] p-[1.5vh] flex flex-col gap-[1vh] justify-start items-start"
        );
    },
    m(o, a) {
      E(o, e, a), r && r.m(e, null), (t = !0);
    },
    p(o, a) {
      o[0].dropdown
        ? r
          ? (r.p(o, a), a & 1 && k(r, 1))
          : ((r = jl(o)), r.c(), k(r, 1), r.m(e, null))
        : r &&
          (J(),
          D(r, 1, 1, () => {
            r = null;
          }),
          K());
    },
    i(o) {
      t ||
        (k(r),
        o &&
          ke(() => {
            t && (l || (l = me(e, Ge, { duration: 150 }, !0)), l.run(1));
          }),
        (t = !0));
    },
    o(o) {
      D(r),
        o && (l || (l = me(e, Ge, { duration: 150 }, !1)), l.run(0)),
        (t = !1);
    },
    d(o) {
      o && $(e), r && r.d(), o && l && l.end();
    },
  };
}
function jl(n) {
  let e,
    l,
    t = H(n[0].dropdown),
    r = [];
  for (let a = 0; a < t.length; a += 1) r[a] = Ol(Rl(n, t, a));
  const o = (a) =>
    D(r[a], 1, 1, () => {
      r[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1) r[a].c();
      e = Z();
    },
    m(a, s) {
      for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(a, s);
      E(a, e, s), (l = !0);
    },
    p(a, s) {
      if (s & 25) {
        t = H(a[0].dropdown);
        let i;
        for (i = 0; i < t.length; i += 1) {
          const f = Rl(a, t, i);
          r[i]
            ? (r[i].p(f, s), k(r[i], 1))
            : ((r[i] = Ol(f)), r[i].c(), k(r[i], 1), r[i].m(e.parentNode, e));
        }
        for (J(), i = t.length; i < r.length; i += 1) o(i);
        K();
      }
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) k(r[s]);
        l = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1) D(r[s]);
      l = !1;
    },
    d(a) {
      a && $(e), se(r, a);
    },
  };
}
function Nr(n) {
  let e,
    l,
    t = n[8].label + "",
    r,
    o,
    a,
    s;
  function i() {
    return n[6](n[8]);
  }
  return {
    c() {
      (e = b("button")),
        (l = b("p")),
        (r = S(t)),
        (o = A()),
        h(
          e,
          "class",
          "h-[3.8vh] px-[1.5vh] rounded-[0.5vh] bg-secondary hover:bg-opacity-90 border-[0.1vh] border-primary"
        );
    },
    m(f, c) {
      E(f, e, c),
        u(e, l),
        u(l, r),
        u(e, o),
        a || ((s = T(e, "click", i)), (a = !0));
    },
    p(f, c) {
      (n = f), c & 1 && t !== (t = n[8].label + "") && C(r, t);
    },
    i: M,
    o: M,
    d(f) {
      f && $(e), (a = !1), s();
    },
  };
}
function Ir(n) {
  let e, l;
  return (
    (e = new $n({
      props: {
        action: n[8],
        label_title: n[8].label,
        data: n[8].data,
        selectedData: n[3],
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1 && (o.action = t[8]),
          r & 1 && (o.label_title = t[8].label),
          r & 1 && (o.data = t[8].data),
          e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Rr(n) {
  let e, l;
  return (
    (e = new Gt({ props: { data: n[8], selectedData: n[3] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1 && (o.data = t[8]), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Ol(n) {
  let e, l, t, r;
  const o = [Rr, Ir, Nr],
    a = [];
  function s(i, f) {
    return i[8].option === "text"
      ? 0
      : i[8].option === "dropdown"
      ? 1
      : i[8].option === "button"
      ? 2
      : -1;
  }
  return (
    ~(e = s(n)) && (l = a[e] = o[e](n)),
    {
      c() {
        l && l.c(), (t = Z());
      },
      m(i, f) {
        ~e && a[e].m(i, f), E(i, t, f), (r = !0);
      },
      p(i, f) {
        let c = e;
        (e = s(i)),
          e === c
            ? ~e && a[e].p(i, f)
            : (l &&
                (J(),
                D(a[c], 1, 1, () => {
                  a[c] = null;
                }),
                K()),
              ~e
                ? ((l = a[e]),
                  l ? l.p(i, f) : ((l = a[e] = o[e](i)), l.c()),
                  k(l, 1),
                  l.m(t.parentNode, t))
                : (l = null));
      },
      i(i) {
        r || (k(l), (r = !0));
      },
      o(i) {
        D(l), (r = !1);
      },
      d(i) {
        i && $(t), ~e && a[e].d(i);
      },
    }
  );
}
function Br(n) {
  let e,
    l,
    t,
    r,
    o,
    a,
    s = n[0].label + "",
    i,
    f,
    c,
    d,
    m,
    g,
    p,
    y,
    _;
  r = new kn({ props: { data: n[1] } });
  let v = n[2] && Bl(n);
  return {
    c() {
      (e = b("div")),
        (l = b("button")),
        (t = b("div")),
        j(r.$$.fragment),
        (o = A()),
        (a = b("p")),
        (i = S(s)),
        (f = A()),
        (c = b("i")),
        (m = A()),
        v && v.c(),
        h(t, "class", "flex items-center gap-[1vh]"),
        h(c, "class", (d = "fas fa-angle-" + (n[2] ? "down" : "right"))),
        h(
          l,
          "class",
          "w-full h-[4.5vh] flex items-center justify-between px-[1.5vh]"
        ),
        h(
          e,
          "class",
          (g =
            "bg-tertiary rounded-[0.5vh] " +
            (n[2] ? "" : "hover:bg-opacity-90"))
        );
    },
    m(w, P) {
      E(w, e, P),
        u(e, l),
        u(l, t),
        R(r, t, null),
        u(t, o),
        u(t, a),
        u(a, i),
        u(l, f),
        u(l, c),
        u(e, m),
        v && v.m(e, null),
        (p = !0),
        y || ((_ = T(l, "click", n[5])), (y = !0));
    },
    p(w, [P]) {
      const q = {};
      P & 2 && (q.data = w[1]),
        r.$set(q),
        (!p || P & 1) && s !== (s = w[0].label + "") && C(i, s),
        (!p ||
          (P & 4 && d !== (d = "fas fa-angle-" + (w[2] ? "down" : "right")))) &&
          h(c, "class", d),
        w[2]
          ? v
            ? (v.p(w, P), P & 4 && k(v, 1))
            : ((v = Bl(w)), v.c(), k(v, 1), v.m(e, null))
          : v &&
            (J(),
            D(v, 1, 1, () => {
              v = null;
            }),
            K()),
        (!p ||
          (P & 4 &&
            g !==
              (g =
                "bg-tertiary rounded-[0.5vh] " +
                (w[2] ? "" : "hover:bg-opacity-90")))) &&
          h(e, "class", g);
    },
    i(w) {
      p || (k(r.$$.fragment, w), k(v), (p = !0));
    },
    o(w) {
      D(r.$$.fragment, w), D(v), (p = !1);
    },
    d(w) {
      w && $(e), B(r), v && v.d(), (y = !1), _();
    },
  };
}
function jr(n, e, l) {
  let { data: t } = e,
    { id: r } = e,
    o,
    a = {};
  function s(d) {
    console.log("selected", d), (a[d.id] = d);
  }
  function i(d, m) {
    d && (l(0, (t.event = d), t), l(0, (t.type = m), t)),
      console.log("data", t),
      console.log("event", t.event),
      console.log("type", t.type),
      oe("clickButton", { data: t, selectedData: a }),
      console.log(a);
  }
  const f = () => l(2, (o = !o)),
    c = (d) => {
      i(d.event, d.type);
    };
  return (
    (n.$$set = (d) => {
      "data" in d && l(0, (t = d.data)), "id" in d && l(1, (r = d.id));
    }),
    [t, r, o, s, i, f, c]
  );
}
class Or extends W {
  constructor(e) {
    super(), Y(this, e, jr, Br, z, { data: 0, id: 1 });
  }
}
function Vr(n) {
  let e, l, t, r;
  return {
    c() {
      (e = b("button")),
        (l = b("i")),
        h(l, "class", n[0]),
        h(
          e,
          "class",
          "w-[3vh] h-[3vh] rounded-[0.5vh] bg-secondary hover:bg-primary"
        );
    },
    m(o, a) {
      E(o, e, a), u(e, l), t || ((r = T(e, "click", n[1])), (t = !0));
    },
    p(o, [a]) {
      a & 1 && h(l, "class", o[0]);
    },
    i: M,
    o: M,
    d(o) {
      o && $(e), (t = !1), r();
    },
  };
}
function Hr(n, e, l) {
  let { resource: t } = e,
    { icon: r } = e,
    { state: o } = e;
  async function a() {
    event.stopPropagation();
    const s = await oe("setResourceState", { name: t, state: o });
    et.set(s);
  }
  return (
    (n.$$set = (s) => {
      "resource" in s && l(2, (t = s.resource)),
        "icon" in s && l(0, (r = s.icon)),
        "state" in s && l(3, (o = s.state));
    }),
    [r, a, t, o]
  );
}
class Yt extends W {
  constructor(e) {
    super(), Y(this, e, Hr, Vr, z, { resource: 2, icon: 0, state: 3 });
  }
}
function Vl(n, e, l) {
  const t = n.slice();
  return (t[5] = e[l][0]), (t[6] = e[l][1]), t;
}
function Hl(n) {
  let e,
    l,
    t = H(Object.entries(n[1]).filter(n[4]).sort(Ul)),
    r = [];
  for (let a = 0; a < t.length; a += 1) r[a] = Fl(Vl(n, t, a));
  const o = (a) =>
    D(r[a], 1, 1, () => {
      r[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1) r[a].c();
      e = Z();
    },
    m(a, s) {
      for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(a, s);
      E(a, e, s), (l = !0);
    },
    p(a, s) {
      if (s & 7) {
        t = H(Object.entries(a[1]).filter(a[4]).sort(Ul));
        let i;
        for (i = 0; i < t.length; i += 1) {
          const f = Vl(a, t, i);
          r[i]
            ? (r[i].p(f, s), k(r[i], 1))
            : ((r[i] = Fl(f)), r[i].c(), k(r[i], 1), r[i].m(e.parentNode, e));
        }
        for (J(), i = t.length; i < r.length; i += 1) o(i);
        K();
      }
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) k(r[s]);
        l = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1) D(r[s]);
      l = !1;
    },
    d(a) {
      a && $(e), se(r, a);
    },
  };
}
function Fr(n) {
  let e, l;
  return (
    (e = new wr({ props: { data: n[6], id: n[5] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 7 && (o.data = t[6]), r & 7 && (o.id = t[5]), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Ur(n) {
  let e, l;
  return (
    (e = new Or({ props: { data: n[6], id: n[5] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 7 && (o.data = t[6]), r & 7 && (o.id = t[5]), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Fl(n) {
  let e, l, t, r;
  const o = [Ur, Fr],
    a = [];
  function s(i, f) {
    return i[6].dropdown ? 0 : 1;
  }
  return (
    (e = s(n)),
    (l = a[e] = o[e](n)),
    {
      c() {
        l.c(), (t = Z());
      },
      m(i, f) {
        a[e].m(i, f), E(i, t, f), (r = !0);
      },
      p(i, f) {
        let c = e;
        (e = s(i)),
          e === c
            ? a[e].p(i, f)
            : (J(),
              D(a[c], 1, 1, () => {
                a[c] = null;
              }),
              K(),
              (l = a[e]),
              l ? l.p(i, f) : ((l = a[e] = o[e](i)), l.c()),
              k(l, 1),
              l.m(t.parentNode, t));
      },
      i(i) {
        r || (k(l), (r = !0));
      },
      o(i) {
        D(l), (r = !1);
      },
      d(i) {
        i && $(t), a[e].d(i);
      },
    }
  );
}
function zr(n) {
  let e, l, t, r, o, a, s;
  (l = new lt({
    props: {
      title: "Actions",
      hasSearch: !0,
      hasLargeMenu: !0,
      onSearchInput: n[3],
      search: n[0],
    },
  })),
    (r = new _r({}));
  let i = n[1] && Hl(n);
  return {
    c() {
      (e = b("div")),
        j(l.$$.fragment),
        (t = A()),
        j(r.$$.fragment),
        (o = A()),
        (a = b("div")),
        i && i.c(),
        h(
          a,
          "class",
          "w-full h-[77%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto scroll-visble"
        ),
        h(e, "class", "h-full w-[99vh] px-[2vh]");
    },
    m(f, c) {
      E(f, e, c),
        R(l, e, null),
        u(e, t),
        R(r, e, null),
        u(e, o),
        u(e, a),
        i && i.m(a, null),
        (s = !0);
    },
    p(f, [c]) {
      const d = {};
      c & 1 && (d.onSearchInput = f[3]),
        c & 1 && (d.search = f[0]),
        l.$set(d),
        f[1]
          ? i
            ? (i.p(f, c), c & 2 && k(i, 1))
            : ((i = Hl(f)), i.c(), k(i, 1), i.m(a, null))
          : i &&
            (J(),
            D(i, 1, 1, () => {
              i = null;
            }),
            K());
    },
    i(f) {
      s || (k(l.$$.fragment, f), k(r.$$.fragment, f), k(i), (s = !0));
    },
    o(f) {
      D(l.$$.fragment, f), D(r.$$.fragment, f), D(i), (s = !1);
    },
    d(f) {
      f && $(e), B(l), B(r), i && i.d();
    },
  };
}
const Ul = ([n, e], [l, t]) => e.label.localeCompare(t.label);
function Yr(n, e, l) {
  let t, r, o;
  return (
    N(n, cl, (i) => l(0, (t = i))),
    N(n, Rt, (i) => l(1, (r = i))),
    N(n, _t, (i) => l(2, (o = i))),
    [
      t,
      r,
      o,
      (i) => ue(cl, (t = i.target.value), t),
      ([i, f]) =>
        o
          ? f.label.toLowerCase().includes(t.toLowerCase())
          : localStorage.getItem(`favorite-${i}`) === "true",
    ]
  );
}
class Wr extends W {
  constructor(e) {
    super(), Y(this, e, Yr, zr, z, {});
  }
}
function zl(n) {
  let e,
    l,
    t = (n[3] ? n[3] : "") + "",
    r,
    o,
    a;
  return {
    c() {
      (e = b("div")), (l = b("p")), (r = S(t)), h(l, "class", "text-gray-400");
    },
    m(s, i) {
      E(s, e, i), u(e, l), u(l, r), (a = !0);
    },
    p(s, i) {
      (!a || i & 8) && t !== (t = (s[3] ? s[3] : "") + "") && C(r, t);
    },
    i(s) {
      a ||
        (s &&
          ke(() => {
            a && (o || (o = me(e, Ge, { duration: 150 }, !0)), o.run(1));
          }),
        (a = !0));
    },
    o(s) {
      s && (o || (o = me(e, Ge, { duration: 150 }, !1)), o.run(0)), (a = !1);
    },
    d(s) {
      s && $(e), s && o && o.end();
    },
  };
}
function Gr(n) {
  let e, l;
  return (
    (e = new Yt({
      props: { icon: "fas fa-play", resource: n[0], state: "start" },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1 && (o.resource = t[0]), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Jr(n) {
  let e, l, t, r;
  return (
    (e = new Yt({
      props: { icon: "fas fa-stop", resource: n[0], state: "stop" },
    })),
    (t = new Yt({
      props: { icon: "fas fa-arrows-rotate", resource: n[0], state: "restart" },
    })),
    {
      c() {
        j(e.$$.fragment), (l = A()), j(t.$$.fragment);
      },
      m(o, a) {
        R(e, o, a), E(o, l, a), R(t, o, a), (r = !0);
      },
      p(o, a) {
        const s = {};
        a & 1 && (s.resource = o[0]), e.$set(s);
        const i = {};
        a & 1 && (i.resource = o[0]), t.$set(i);
      },
      i(o) {
        r || (k(e.$$.fragment, o), k(t.$$.fragment, o), (r = !0));
      },
      o(o) {
        D(e.$$.fragment, o), D(t.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && $(l), B(e, o), B(t, o);
      },
    }
  );
}
function Kr(n) {
  let e,
    l,
    t,
    r = (n[0] ? n[0] : "") + "",
    o,
    a,
    s,
    i = n[1] ? "Version: " + n[1] : "",
    f,
    c,
    d,
    m = n[2] ? "Author: " + n[2] : "",
    g,
    p,
    y,
    _,
    v,
    w,
    P,
    q,
    U,
    F = n[5] && zl(n);
  const ee = [Jr, Gr],
    te = [];
  function G(O, I) {
    return O[4] == "started" ? 0 : 1;
  }
  return (
    (v = G(n)),
    (w = te[v] = ee[v](n)),
    {
      c() {
        (e = b("button")),
          (l = b("div")),
          (t = b("p")),
          (o = S(r)),
          (a = A()),
          (s = b("p")),
          (f = S(i)),
          (c = A()),
          (d = b("p")),
          (g = S(m)),
          (p = A()),
          F && F.c(),
          (y = A()),
          (_ = b("div")),
          w.c(),
          h(t, "class", "text-[1.8vh] font-medium"),
          h(s, "class", "text-gray-400"),
          h(d, "class", "text-gray-400"),
          h(
            l,
            "class",
            "h-full p-[2vh] -mr-[8vh] flex flex-col items-start text-start"
          ),
          h(_, "class", "flex gap-[1vh] h-full py-[1.8vh] pr-[1.8vh]"),
          h(
            e,
            "class",
            "w-full flex justify-between rounded-[0.5vh] bg-tertiary items-center"
          );
      },
      m(O, I) {
        E(O, e, I),
          u(e, l),
          u(l, t),
          u(t, o),
          u(l, a),
          u(l, s),
          u(s, f),
          u(l, c),
          u(l, d),
          u(d, g),
          u(l, p),
          F && F.m(l, null),
          u(e, y),
          u(e, _),
          te[v].m(_, null),
          (P = !0),
          q || ((U = T(e, "click", n[6])), (q = !0));
      },
      p(O, [I]) {
        (!P || I & 1) && r !== (r = (O[0] ? O[0] : "") + "") && C(o, r),
          (!P || I & 2) &&
            i !== (i = O[1] ? "Version: " + O[1] : "") &&
            C(f, i),
          (!P || I & 4) && m !== (m = O[2] ? "Author: " + O[2] : "") && C(g, m),
          O[5]
            ? F
              ? (F.p(O, I), I & 32 && k(F, 1))
              : ((F = zl(O)), F.c(), k(F, 1), F.m(l, null))
            : F &&
              (J(),
              D(F, 1, 1, () => {
                F = null;
              }),
              K());
        let X = v;
        (v = G(O)),
          v === X
            ? te[v].p(O, I)
            : (J(),
              D(te[X], 1, 1, () => {
                te[X] = null;
              }),
              K(),
              (w = te[v]),
              w ? w.p(O, I) : ((w = te[v] = ee[v](O)), w.c()),
              k(w, 1),
              w.m(_, null));
      },
      i(O) {
        P || (k(F), k(w), (P = !0));
      },
      o(O) {
        D(F), D(w), (P = !1);
      },
      d(O) {
        O && $(e), F && F.d(), te[v].d(), (q = !1), U();
      },
    }
  );
}
function qr(n, e, l) {
  let { label: t } = e,
    { version: r } = e,
    { author: o } = e,
    { description: a } = e,
    { state: s } = e,
    i;
  const f = () => l(5, (i = !i));
  return (
    (n.$$set = (c) => {
      "label" in c && l(0, (t = c.label)),
        "version" in c && l(1, (r = c.version)),
        "author" in c && l(2, (o = c.author)),
        "description" in c && l(3, (a = c.description)),
        "state" in c && l(4, (s = c.state));
    }),
    [t, r, o, a, s, i, f]
  );
}
class Qr extends W {
  constructor(e) {
    super(),
      Y(this, e, qr, Kr, z, {
        label: 0,
        version: 1,
        author: 2,
        description: 3,
        state: 4,
      });
  }
}
function Yl(n, e, l) {
  const t = n.slice();
  return (t[7] = e[l]), t;
}
function Wl(n) {
  let e, l, t, r, o;
  const a = [Zr, Xr],
    s = [];
  function i(f, c) {
    return (
      c & 3 && (e = null),
      e == null && (e = !!(f[1] && f[1].filter(f[4]).length === 0)),
      e ? 0 : 1
    );
  }
  return (
    (l = i(n, -1)),
    (t = s[l] = a[l](n)),
    {
      c() {
        t.c(), (r = Z());
      },
      m(f, c) {
        s[l].m(f, c), E(f, r, c), (o = !0);
      },
      p(f, c) {
        let d = l;
        (l = i(f, c)),
          l === d
            ? s[l].p(f, c)
            : (J(),
              D(s[d], 1, 1, () => {
                s[d] = null;
              }),
              K(),
              (t = s[l]),
              t ? t.p(f, c) : ((t = s[l] = a[l](f)), t.c()),
              k(t, 1),
              t.m(r.parentNode, r));
      },
      i(f) {
        o || (k(t), (o = !0));
      },
      o(f) {
        D(t), (o = !1);
      },
      d(f) {
        f && $(r), s[l].d(f);
      },
    }
  );
}
function Xr(n) {
  let e,
    l,
    t = H(n[3].filter(n[6])),
    r = [];
  for (let a = 0; a < t.length; a += 1) r[a] = Gl(Yl(n, t, a));
  const o = (a) =>
    D(r[a], 1, 1, () => {
      r[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1) r[a].c();
      e = Z();
    },
    m(a, s) {
      for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(a, s);
      E(a, e, s), (l = !0);
    },
    p(a, s) {
      if (s & 9) {
        t = H(a[3].filter(a[6]));
        let i;
        for (i = 0; i < t.length; i += 1) {
          const f = Yl(a, t, i);
          r[i]
            ? (r[i].p(f, s), k(r[i], 1))
            : ((r[i] = Gl(f)), r[i].c(), k(r[i], 1), r[i].m(e.parentNode, e));
        }
        for (J(), i = t.length; i < r.length; i += 1) o(i);
        K();
      }
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) k(r[s]);
        l = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1) D(r[s]);
      l = !1;
    },
    d(a) {
      a && $(e), se(r, a);
    },
  };
}
function Zr(n) {
  let e;
  return {
    c() {
      (e = b("div")),
        (e.textContent = "No Resource Found."),
        h(
          e,
          "class",
          "text-tertiary text-center text-[1.7vh] font-medium mt-[1vh]"
        );
    },
    m(l, t) {
      E(l, e, t);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && $(e);
    },
  };
}
function Gl(n) {
  let e, l;
  return (
    (e = new Qr({
      props: {
        label: n[7].name,
        version: n[7].version,
        author: n[7].author,
        description: n[7].description,
        state: n[7].resourceState,
      },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1 && (o.label = t[7].name),
          r & 1 && (o.version = t[7].version),
          r & 1 && (o.author = t[7].author),
          r & 1 && (o.description = t[7].description),
          r & 1 && (o.state = t[7].resourceState),
          e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Jl(n) {
  let e, l, t;
  return (
    (l = new lt({ props: { title: "Dashboard" } })),
    {
      c() {
        (e = b("div")),
          j(l.$$.fragment),
          h(
            e,
            "class",
            "h-full w-[66vh] border-l-[0.2vh] border-tertiary px-[2vh]"
          );
      },
      m(r, o) {
        E(r, e, o), R(l, e, null), (t = !0);
      },
      i(r) {
        t || (k(l.$$.fragment, r), (t = !0));
      },
      o(r) {
        D(l.$$.fragment, r), (t = !1);
      },
      d(r) {
        r && $(e), B(l);
      },
    }
  );
}
function xr(n) {
  let e, l, t, r, o, a, s;
  l = new lt({
    props: { title: "Server", hasSearch: !0, onSearchInput: n[5] },
  });
  let i = n[1] && Wl(n),
    f = n[2] && Jl();
  return {
    c() {
      (e = b("div")),
        j(l.$$.fragment),
        (t = A()),
        (r = b("div")),
        i && i.c(),
        (o = A()),
        f && f.c(),
        (a = Z()),
        h(
          r,
          "class",
          "w-full h-[84%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto"
        ),
        h(e, "class", "h-full w-[33vh] px-[2vh]");
    },
    m(c, d) {
      E(c, e, d),
        R(l, e, null),
        u(e, t),
        u(e, r),
        i && i.m(r, null),
        E(c, o, d),
        f && f.m(c, d),
        E(c, a, d),
        (s = !0);
    },
    p(c, [d]) {
      const m = {};
      d & 1 && (m.onSearchInput = c[5]),
        l.$set(m),
        c[1]
          ? i
            ? (i.p(c, d), d & 2 && k(i, 1))
            : ((i = Wl(c)), i.c(), k(i, 1), i.m(r, null))
          : i &&
            (J(),
            D(i, 1, 1, () => {
              i = null;
            }),
            K()),
        c[2]
          ? f
            ? d & 4 && k(f, 1)
            : ((f = Jl()), f.c(), k(f, 1), f.m(a.parentNode, a))
          : f &&
            (J(),
            D(f, 1, 1, () => {
              f = null;
            }),
            K());
    },
    i(c) {
      s || (k(l.$$.fragment, c), k(i), k(f), (s = !0));
    },
    o(c) {
      D(l.$$.fragment, c), D(i), D(f), (s = !1);
    },
    d(c) {
      c && ($(e), $(o), $(a)), B(l), i && i.d(), f && f.d(c);
    },
  };
}
function ea(n, e, l) {
  let t, r;
  N(n, et, (c) => l(1, (t = c))), N(n, $e, (c) => l(2, (r = c)));
  let o = "",
    a = t ? t.slice().sort((c, d) => c.name.localeCompare(d.name)) : [];
  return [
    o,
    t,
    r,
    a,
    (c) => c.name.toLowerCase().includes(o.toLowerCase()),
    (c) => l(0, (o = c.target.value)),
    (c) => c.name.toLowerCase().includes(o.toLowerCase()),
  ];
}
class ta extends W {
  constructor(e) {
    super(), Y(this, e, ea, xr, z, {});
  }
}
function la(n) {
  let e, l, t, r, o, a, s;
  return {
    c() {
      (e = b("div")),
        (l = b("input")),
        (r = A()),
        (o = b("button")),
        (o.innerHTML = '<i class="fas fa-paper-plane text-[1.5vh]"></i>'),
        h(l, "type", "text"),
        h(l, "placeholder", "Your message here"),
        h(
          l,
          "class",
          (t =
            "h-full px-[1vh] bg-transparent text-[1.7vh] " +
            (n[1] ? "w-[94%]" : "w-[80%]"))
        ),
        h(o, "class", "h-full w-[5vh] rounded-r-[0.5vh] hover:bg-secondary"),
        h(
          e,
          "class",
          "mt-auto w-full h-[4.5vh] rounded-[0.5vh] flex items-center justify-center gap-[1vh] bg-tertiary"
        );
    },
    m(i, f) {
      E(i, e, f),
        u(e, l),
        De(l, n[0]),
        u(e, r),
        u(e, o),
        a ||
          ((s = [
            T(l, "keydown", n[3]),
            T(l, "input", n[4]),
            T(o, "click", n[2]),
          ]),
          (a = !0));
    },
    p(i, [f]) {
      f & 2 &&
        t !==
          (t =
            "h-full px-[1vh] bg-transparent text-[1.7vh] " +
            (i[1] ? "w-[94%]" : "w-[80%]")) &&
        h(l, "class", t),
        f & 1 && l.value !== i[0] && De(l, i[0]);
    },
    i: M,
    o: M,
    d(i) {
      i && $(e), (a = !1), ie(s);
    },
  };
}
function na(n, e, l) {
  let t;
  N(n, $e, (i) => l(1, (t = i)));
  let r = "";
  function o() {
    r.trim() &&
      (oe("SendMessage", { message: r }),
      console.log("Message sent", r),
      l(0, (r = "")));
  }
  const a = (i) => {
    i.key === "Enter" && o();
  };
  function s() {
    (r = this.value), l(0, r);
  }
  return [r, t, o, a, s];
}
class ra extends W {
  constructor(e) {
    super(), Y(this, e, na, la, z, {});
  }
}
const aa = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
function ht(n, e = !1, l = !1) {
  const t = n.getDate(),
    r = aa[n.getMonth()],
    o = n.getFullYear(),
    a = n.getHours();
  let s = n.getMinutes();
  return (
    s < 10 && (s = `0${s}`),
    e
      ? `${e} at ${a}:${s}`
      : l
      ? `${t}. ${r} at ${a}:${s}`
      : `${t}. ${r} ${o}. at ${a}:${s}`
  );
}
function Kl(n) {
  if (!n) return "Unknown";
  let e;
  try {
    e = typeof n == "object" ? n : new Date(n);
  } catch {
    return "Invalid date";
  }
  if (isNaN(e)) return "Invalid date";
  const l = 864e5,
    t = new Date(),
    r = new Date(t - l),
    o = Math.round((t - e) / 1e3),
    a = Math.round(o / 60),
    s = t.toDateString() === e.toDateString(),
    i = r.toDateString() === e.toDateString(),
    f = t.getFullYear() === e.getFullYear();
  return o < 5
    ? "Just Now"
    : o < 60
    ? `${o} Seconds ago`
    : o < 90
    ? "A minute ago"
    : a < 60
    ? `${a} Minutes ago`
    : s
    ? ht(e, "Today")
    : i
    ? ht(e, "Yesterday")
    : f
    ? ht(e, !1, !0)
    : ht(e);
}
function ql(n, e, l) {
  const t = n.slice();
  return (t[5] = e[l]), t;
}
function Ql(n) {
  let e,
    l = H(n[0].slice().reverse()),
    t = [];
  for (let r = 0; r < l.length; r += 1) t[r] = Xl(ql(n, l, r));
  return {
    c() {
      for (let r = 0; r < t.length; r += 1) t[r].c();
      e = Z();
    },
    m(r, o) {
      for (let a = 0; a < t.length; a += 1) t[a] && t[a].m(r, o);
      E(r, e, o);
    },
    p(r, o) {
      if (o & 13) {
        l = H(r[0].slice().reverse());
        let a;
        for (a = 0; a < l.length; a += 1) {
          const s = ql(r, l, a);
          t[a]
            ? t[a].p(s, o)
            : ((t[a] = Xl(s)), t[a].c(), t[a].m(e.parentNode, e));
        }
        for (; a < t.length; a += 1) t[a].d(1);
        t.length = l.length;
      }
    },
    d(r) {
      r && $(e), se(t, r);
    },
  };
}
function Xl(n) {
  let e,
    l,
    t = n[5].fullname + "",
    r,
    o,
    a,
    s = Kl(Number(n[5].time)) + "",
    i,
    f,
    c,
    d,
    m = n[5].message + "",
    g,
    p,
    y;
  return {
    c() {
      (e = b("div")),
        (l = b("p")),
        (r = S(t)),
        (o = A()),
        (a = b("p")),
        (i = S(s)),
        (f = A()),
        (c = b("div")),
        (d = b("p")),
        (g = S(m)),
        (y = A()),
        h(l, "class", "text-[1.2vh]"),
        h(a, "class", "text-[1vh] ml-[0.5vh]"),
        h(
          e,
          "class",
          "w-[45%] flex justify-between items-center text-gray-400 font-medium -mb-[0.5vh]"
        ),
        h(
          c,
          "class",
          (p =
            "w-[45%] max-w-[45%] mt-[0.5vh] p-[1vh] break-words text-start rounded-lg " +
            (n[2] && n[3].cid === n[5].citizenid ? "bg-accent" : "bg-tertiary"))
        );
    },
    m(_, v) {
      E(_, e, v),
        u(e, l),
        u(l, r),
        u(e, o),
        u(e, a),
        u(a, i),
        E(_, f, v),
        E(_, c, v),
        u(c, d),
        u(d, g),
        E(_, y, v);
    },
    p(_, v) {
      v & 1 && t !== (t = _[5].fullname + "") && C(r, t),
        v & 1 && s !== (s = Kl(Number(_[5].time)) + "") && C(i, s),
        v & 1 && m !== (m = _[5].message + "") && C(g, m),
        v & 13 &&
          p !==
            (p =
              "w-[45%] max-w-[45%] mt-[0.5vh] p-[1vh] break-words text-start rounded-lg " +
              (_[2] && _[3].cid === _[5].citizenid
                ? "bg-accent"
                : "bg-tertiary")) &&
          h(c, "class", p);
    },
    d(_) {
      _ && ($(e), $(f), $(c), $(y));
    },
  };
}
function oa(n) {
  let e,
    l,
    t = n[0] && n[1] && Ql(n);
  return {
    c() {
      (e = b("div")), (l = b("div")), t && t.c();
    },
    m(r, o) {
      E(r, e, o), u(e, l), t && t.m(l, null);
    },
    p(r, [o]) {
      r[0] && r[1]
        ? t
          ? t.p(r, o)
          : ((t = Ql(r)), t.c(), t.m(l, null))
        : t && (t.d(1), (t = null));
    },
    i: M,
    o: M,
    d(r) {
      r && $(e), t && t.d();
    },
  };
}
function ia(n, e, l) {
  let t, r, o, a;
  N(n, zt, (i) => l(0, (t = i))),
    N(n, yn, (i) => l(1, (r = i))),
    N(n, Ie, (i) => l(2, (o = i))),
    N(n, Ft, (i) => l(3, (a = i)));
  function s() {
    oe("GetMessages");
  }
  return (
    Re(() => {
      const i = setInterval(() => {
        s();
      }, 1e3);
      return () => clearInterval(i);
    }),
    [t, r, o, a]
  );
}
class sa extends W {
  constructor(e) {
    super(), Y(this, e, ia, oa, z, {});
  }
}
function fa(n) {
  let e, l, t, r, o, a, s, i, f;
  return (
    (l = new lt({ props: { title: "Staff Chat" } })),
    (a = new sa({})),
    (i = new ra({})),
    {
      c() {
        (e = b("div")),
          j(l.$$.fragment),
          (t = A()),
          (r = b("div")),
          (r.innerHTML = ""),
          (o = A()),
          j(a.$$.fragment),
          (s = A()),
          j(i.$$.fragment),
          h(r, "class", "w-full h-[84%]"),
          h(e, "class", "h-full w-full px-[2vh] pb-[2vh] flex flex-col");
      },
      m(c, d) {
        E(c, e, d),
          R(l, e, null),
          u(e, t),
          u(e, r),
          u(e, o),
          R(a, e, null),
          u(e, s),
          R(i, e, null),
          (f = !0);
      },
      p: M,
      i(c) {
        f ||
          (k(l.$$.fragment, c),
          k(a.$$.fragment, c),
          k(i.$$.fragment, c),
          (f = !0));
      },
      o(c) {
        D(l.$$.fragment, c), D(a.$$.fragment, c), D(i.$$.fragment, c), (f = !1);
      },
      d(c) {
        c && $(e), B(l), B(a), B(i);
      },
    }
  );
}
class ca extends W {
  constructor(e) {
    super(), Y(this, e, null, fa, z, {});
  }
}
function ua(n) {
  let e,
    l,
    t,
    r = n[0].id + "",
    o,
    a,
    s = n[0].name + "",
    i,
    f,
    c,
    d,
    m;
  return {
    c() {
      (e = b("button")),
        (l = b("div")),
        (t = b("p")),
        (o = S(r)),
        (a = S(" - ")),
        (i = S(s)),
        (f = A()),
        (c = b("i")),
        h(c, "class", "fas fa-angle-right"),
        h(l, "class", "w-full flex items-center justify-between gap-[1vh]"),
        h(
          e,
          "class",
          "h-[4.5vh] w-full flex items-center px-[1.5vh] rounded-[0.5vh] bg-tertiary hover:bg-opacity-90"
        );
    },
    m(g, p) {
      E(g, e, p),
        u(e, l),
        u(l, t),
        u(t, o),
        u(t, a),
        u(t, i),
        u(l, f),
        u(l, c),
        d || ((m = T(e, "click", n[2])), (d = !0));
    },
    p(g, [p]) {
      p & 1 && r !== (r = g[0].id + "") && C(o, r),
        p & 1 && s !== (s = g[0].name + "") && C(i, s);
    },
    i: M,
    o: M,
    d(g) {
      g && $(e), (d = !1), m();
    },
  };
}
function da(n, e, l) {
  let t;
  N(n, Ut, (s) => l(3, (t = s)));
  let { player: r } = e;
  async function o(s) {
    Ut.set(s), $e.set(!0);
    const i = await oe("getVehicle", { cid: t.cid });
    nr.set(i);
  }
  const a = () => {
    o(r);
  };
  return (
    (n.$$set = (s) => {
      "player" in s && l(0, (r = s.player));
    }),
    [r, o, a]
  );
}
class pa extends W {
  constructor(e) {
    super(), Y(this, e, da, ua, z, { player: 0 });
  }
}
function ha(n) {
  let e;
  return {
    c() {
      (e = b("div")),
        (e.innerHTML =
          '<div class="inline-block h-[10rem] w-[10rem] animate-spin rounded-full border-8 border-solid border-secondary border-r-tertiary align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" role="status"></div>'),
        h(
          e,
          "class",
          "w-full h-full flex justify-center items-center opacity-50"
        );
    },
    m(l, t) {
      E(l, e, t);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && $(e);
    },
  };
}
class ba extends W {
  constructor(e) {
    super(), Y(this, e, null, ha, z, {});
  }
}
function _a(n) {
  let e, l, t;
  const r = n[1].default,
    o = fn(r, n, n[0], null);
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        o && o.c(),
        h(
          l,
          "class",
          "bg-tertiary rounded-[0.5vh] flex flex-col px-[2vh] py-[1.5vh] gap-[0.8vh]"
        ),
        h(
          e,
          "class",
          "fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-black bg-opacity-75"
        );
    },
    m(a, s) {
      E(a, e, s), u(e, l), o && o.m(l, null), (t = !0);
    },
    p(a, [s]) {
      o &&
        o.p &&
        (!t || s & 1) &&
        dn(o, r, a, a[0], t ? un(r, a[0], s, null) : pn(a[0]), null);
    },
    i(a) {
      t || (k(o, a), (t = !0));
    },
    o(a) {
      D(o, a), (t = !1);
    },
    d(a) {
      a && $(e), o && o.d(a);
    },
  };
}
function ma(n, e, l) {
  let { $$slots: t = {}, $$scope: r } = e;
  return (
    (n.$$set = (o) => {
      "$$scope" in o && l(0, (r = o.$$scope));
    }),
    [r, t]
  );
}
class En extends W {
  constructor(e) {
    super(), Y(this, e, ma, _a, z, {});
  }
}
function Zl(n, e, l) {
  const t = n.slice();
  return (t[24] = e[l]), t;
}
function xl(n, e, l) {
  const t = n.slice();
  return (t[27] = e[l]), t;
}
function va(n) {
  let e, l, t, r, o;
  const a = [wa, ya],
    s = [];
  function i(f, c) {
    return (
      c & 33 && (e = null),
      e == null && (e = !!(f[5] && f[5].filter(f[10]).length === 0)),
      e ? 0 : 1
    );
  }
  return (
    (l = i(n, -1)),
    (t = s[l] = a[l](n)),
    {
      c() {
        t.c(), (r = Z());
      },
      m(f, c) {
        s[l].m(f, c), E(f, r, c), (o = !0);
      },
      p(f, c) {
        let d = l;
        (l = i(f, c)),
          l === d
            ? s[l].p(f, c)
            : (J(),
              D(s[d], 1, 1, () => {
                s[d] = null;
              }),
              K(),
              (t = s[l]),
              t ? t.p(f, c) : ((t = s[l] = a[l](f)), t.c()),
              k(t, 1),
              t.m(r.parentNode, r));
      },
      i(f) {
        o || (k(t), (o = !0));
      },
      o(f) {
        D(t), (o = !1);
      },
      d(f) {
        f && $(r), s[l].d(f);
      },
    }
  );
}
function ga(n) {
  let e, l;
  return (
    (e = new ba({})),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p: M,
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function ya(n) {
  let e,
    l,
    t = H(n[5].filter(n[12])),
    r = [];
  for (let a = 0; a < t.length; a += 1) r[a] = en(xl(n, t, a));
  const o = (a) =>
    D(r[a], 1, 1, () => {
      r[a] = null;
    });
  return {
    c() {
      for (let a = 0; a < r.length; a += 1) r[a].c();
      e = Z();
    },
    m(a, s) {
      for (let i = 0; i < r.length; i += 1) r[i] && r[i].m(a, s);
      E(a, e, s), (l = !0);
    },
    p(a, s) {
      if (s & 33) {
        t = H(a[5].filter(a[12]));
        let i;
        for (i = 0; i < t.length; i += 1) {
          const f = xl(a, t, i);
          r[i]
            ? (r[i].p(f, s), k(r[i], 1))
            : ((r[i] = en(f)), r[i].c(), k(r[i], 1), r[i].m(e.parentNode, e));
        }
        for (J(), i = t.length; i < r.length; i += 1) o(i);
        K();
      }
    },
    i(a) {
      if (!l) {
        for (let s = 0; s < t.length; s += 1) k(r[s]);
        l = !0;
      }
    },
    o(a) {
      r = r.filter(Boolean);
      for (let s = 0; s < r.length; s += 1) D(r[s]);
      l = !1;
    },
    d(a) {
      a && $(e), se(r, a);
    },
  };
}
function wa(n) {
  let e;
  return {
    c() {
      (e = b("div")),
        (e.textContent = "No Player Found."),
        h(
          e,
          "class",
          "text-tertiary text-center text-[1.7vh] font-medium mt-[1vh]"
        );
    },
    m(l, t) {
      E(l, e, t);
    },
    p: M,
    i: M,
    o: M,
    d(l) {
      l && $(e);
    },
  };
}
function en(n) {
  let e, l;
  return (
    (e = new pa({ props: { player: n[27] } })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 33 && (o.player = t[27]), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function tn(n) {
  let e;
  function l(o, a) {
    return o[7] ? ka : $a;
  }
  let t = l(n),
    r = t(n);
  return {
    c() {
      (e = b("div")),
        r.c(),
        h(
          e,
          "class",
          "h-full w-[66vh] border-l-[0.2vh] border-tertiary p-[2vh] "
        );
    },
    m(o, a) {
      E(o, e, a), r.m(e, null);
    },
    p(o, a) {
      t === (t = l(o)) && r
        ? r.p(o, a)
        : (r.d(1), (r = t(o)), r && (r.c(), r.m(e, null)));
    },
    d(o) {
      o && $(e), r.d();
    },
  };
}
function ka(n) {
  let e,
    l,
    t = n[7].id + "",
    r,
    o,
    a = n[7].name + "",
    s,
    i,
    f,
    c,
    d,
    m,
    g,
    p,
    y,
    _,
    v,
    w,
    P,
    q,
    U,
    F,
    ee,
    te,
    G,
    O,
    I,
    X,
    ve,
    ge = n[7].discord.replace("discord:", "Discord: ") + "",
    he,
    Se,
    be,
    _e = n[7].license.replace("license:", "License: ") + "",
    Ee,
    ye,
    L,
    de = (n[7].fivem ? n[7].fivem : "") + "",
    Le,
    pe,
    ae,
    Pe = (n[7].steam ? n[7].steam : "") + "",
    Be,
    Je,
    Ce,
    Ke,
    ne,
    Te,
    x,
    ce = n[7].cid + "",
    je,
    qe,
    Me,
    Qe,
    Ne = n[7].name + "",
    Oe,
    Xe,
    nt,
    Jt,
    rt = n[7].job + "",
    $t,
    Kt,
    at,
    qt,
    ot = n[7].cash + "",
    Et,
    Qt,
    it,
    Xt,
    st = n[7].bank + "",
    At,
    Zt,
    ft,
    xt,
    ct = n[7].phone + "",
    Dt,
    el,
    ut,
    tl,
    St,
    ll,
    Ve = H(n[7].vehicles),
    fe = [];
  for (let V = 0; V < Ve.length; V += 1) fe[V] = ln(Zl(n, Ve, V));
  return {
    c() {
      (e = b("p")),
        (l = S("ID: ")),
        (r = S(t)),
        (o = S(" - ")),
        (s = S(a)),
        (i = A()),
        (f = b("div")),
        (c = b("p")),
        (c.textContent = "Quick Actions"),
        (d = A()),
        (m = b("div")),
        (g = b("button")),
        (g.innerHTML = '<i class="fas fa-user-minus"></i>'),
        (p = A()),
        (y = b("button")),
        (y.innerHTML = '<i class="fas fa-ban"></i>'),
        (_ = A()),
        (v = b("button")),
        (v.innerHTML = '<i class="fas fa-person-walking-arrow-right"></i>'),
        (w = A()),
        (P = b("button")),
        (P.innerHTML = '<i class="fas fa-person-walking-arrow-loop-left"></i>'),
        (q = A()),
        (U = b("button")),
        (U.innerHTML = '<i class="fas fa-heart-pulse"></i>'),
        (F = A()),
        (ee = b("button")),
        (ee.innerHTML = '<i class="fas fa-eye"></i>'),
        (te = A()),
        (G = b("div")),
        (O = b("p")),
        (O.textContent = "Licenses"),
        (I = A()),
        (X = b("div")),
        (ve = b("p")),
        (he = S(ge)),
        (Se = A()),
        (be = b("p")),
        (Ee = S(_e)),
        (ye = A()),
        (L = b("p")),
        (Le = S(de)),
        (pe = A()),
        (ae = b("p")),
        (Be = S(Pe)),
        (Je = A()),
        (Ce = b("p")),
        (Ce.textContent = "Information"),
        (Ke = A()),
        (ne = b("div")),
        (Te = b("p")),
        (x = S("CID: ")),
        (je = S(ce)),
        (qe = A()),
        (Me = b("p")),
        (Qe = S("Name: ")),
        (Oe = S(Ne)),
        (Xe = A()),
        (nt = b("p")),
        (Jt = S("Job: ")),
        ($t = S(rt)),
        (Kt = A()),
        (at = b("p")),
        (qt = S("Cash: $")),
        (Et = S(ot)),
        (Qt = A()),
        (it = b("p")),
        (Xt = S("Bank: $")),
        (At = S(st)),
        (Zt = A()),
        (ft = b("p")),
        (xt = S("Phone: ")),
        (Dt = S(ct)),
        (el = A()),
        (ut = b("p")),
        (ut.textContent = "Vehicles"),
        (tl = A());
      for (let V = 0; V < fe.length; V += 1) fe[V].c();
      h(e, "class", "text-[2vh] font-medium"),
        h(c, "class", "font-medium text-[1.7vh]"),
        h(g, "title", "Kick Player"),
        h(
          g,
          "class",
          "h-[4.5vh] w-full rounded-l-[0.5vh] hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(g, "data-tip", "Kick Player"),
        h(y, "title", "Ban Player"),
        h(
          y,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(y, "data-tip", "Ban Player"),
        h(v, "title", "Teleport To Player"),
        h(
          v,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(v, "data-tip", "Teleport To Player"),
        h(P, "title", "Bring Player"),
        h(
          P,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(P, "data-tip", "Bring Player"),
        h(U, "title", "Revive Player"),
        h(
          U,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(U, "data-tip", "Revive Player"),
        h(ee, "title", "Spectate Player"),
        h(
          ee,
          "class",
          "h-[4.5vh] w-full hover:bg-secondary relative before:content-[attr(data-tip)] before:absolute before:px-3 before:py-2 before:left-1/2 before:-top-3 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:text-white before:rounded-md before:opacity-0 before:translate-all after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all hover:before:opacity-100 hover:after:opacity-100 "
        ),
        h(ee, "data-tip", "Spectate Player"),
        h(m, "class", "w-full bg-tertiary flex rounded-[0.5vh]"),
        h(O, "class", "font-medium text-[1.7vh]"),
        h(
          X,
          "class",
          "w-full bg-tertiary rounded-[0.5vh] p-[1.5vh] text-[1.5vh]"
        ),
        h(Ce, "class", "font-medium text-[1.7vh]"),
        h(
          ne,
          "class",
          "w-full bg-tertiary rounded-[0.5vh] p-[1.5vh] text-[1.5vh]"
        ),
        h(ut, "class", "font-medium text-[1.7vh]"),
        h(
          G,
          "class",
          "h-[90%] overflow-auto flex flex-col gap-[1vh] select-text"
        ),
        h(f, "class", "w-full h-[96.5%] pt-[2vh] flex flex-col gap-[1vh]");
    },
    m(V, le) {
      E(V, e, le),
        u(e, l),
        u(e, r),
        u(e, o),
        u(e, s),
        E(V, i, le),
        E(V, f, le),
        u(f, c),
        u(f, d),
        u(f, m),
        u(m, g),
        u(m, p),
        u(m, y),
        u(m, _),
        u(m, v),
        u(m, w),
        u(m, P),
        u(m, q),
        u(m, U),
        u(m, F),
        u(m, ee),
        u(f, te),
        u(f, G),
        u(G, O),
        u(G, I),
        u(G, X),
        u(X, ve),
        u(ve, he),
        u(X, Se),
        u(X, be),
        u(be, Ee),
        u(X, ye),
        u(X, L),
        u(L, Le),
        u(X, pe),
        u(X, ae),
        u(ae, Be),
        u(G, Je),
        u(G, Ce),
        u(G, Ke),
        u(G, ne),
        u(ne, Te),
        u(Te, x),
        u(Te, je),
        u(ne, qe),
        u(ne, Me),
        u(Me, Qe),
        u(Me, Oe),
        u(ne, Xe),
        u(ne, nt),
        u(nt, Jt),
        u(nt, $t),
        u(ne, Kt),
        u(ne, at),
        u(at, qt),
        u(at, Et),
        u(ne, Qt),
        u(ne, it),
        u(it, Xt),
        u(it, At),
        u(ne, Zt),
        u(ne, ft),
        u(ft, xt),
        u(ft, Dt),
        u(G, el),
        u(G, ut),
        u(G, tl);
      for (let re = 0; re < fe.length; re += 1) fe[re] && fe[re].m(G, null);
      St ||
        ((ll = [
          T(g, "click", n[13]),
          T(y, "click", n[14]),
          T(v, "click", n[15]),
          T(P, "click", n[16]),
          T(U, "click", n[17]),
          T(ee, "click", n[18]),
        ]),
        (St = !0));
    },
    p(V, le) {
      if (
        (le & 128 && t !== (t = V[7].id + "") && C(r, t),
        le & 128 && a !== (a = V[7].name + "") && C(s, a),
        le & 128 &&
          ge !== (ge = V[7].discord.replace("discord:", "Discord: ") + "") &&
          C(he, ge),
        le & 128 &&
          _e !== (_e = V[7].license.replace("license:", "License: ") + "") &&
          C(Ee, _e),
        le & 128 &&
          de !== (de = (V[7].fivem ? V[7].fivem : "") + "") &&
          C(Le, de),
        le & 128 &&
          Pe !== (Pe = (V[7].steam ? V[7].steam : "") + "") &&
          C(Be, Pe),
        le & 128 && ce !== (ce = V[7].cid + "") && C(je, ce),
        le & 128 && Ne !== (Ne = V[7].name + "") && C(Oe, Ne),
        le & 128 && rt !== (rt = V[7].job + "") && C($t, rt),
        le & 128 && ot !== (ot = V[7].cash + "") && C(Et, ot),
        le & 128 && st !== (st = V[7].bank + "") && C(At, st),
        le & 128 && ct !== (ct = V[7].phone + "") && C(Dt, ct),
        le & 128)
      ) {
        Ve = H(V[7].vehicles);
        let re;
        for (re = 0; re < Ve.length; re += 1) {
          const nl = Zl(V, Ve, re);
          fe[re]
            ? fe[re].p(nl, le)
            : ((fe[re] = ln(nl)), fe[re].c(), fe[re].m(G, null));
        }
        for (; re < fe.length; re += 1) fe[re].d(1);
        fe.length = Ve.length;
      }
    },
    d(V) {
      V && ($(e), $(i), $(f)), se(fe, V), (St = !1), ie(ll);
    },
  };
}
function $a(n) {
  let e;
  return {
    c() {
      (e = b("div")),
        (e.innerHTML =
          '<div class="text-4xl text-tertiary">No Player Selected.</div>'),
        h(
          e,
          "class",
          "h-full w-full flex flex-col items-center justify-center"
        );
    },
    m(l, t) {
      E(l, e, t);
    },
    p: M,
    d(l) {
      l && $(e);
    },
  };
}
function ln(n) {
  let e,
    l,
    t,
    r = n[24].label + "",
    o,
    a,
    s,
    i,
    f = n[24].plate + "",
    c,
    d,
    m,
    g,
    p,
    y,
    _;
  function v() {
    return n[19](n[24]);
  }
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("p")),
        (o = S(r)),
        (a = A()),
        (s = b("p")),
        (i = S("Plate: ")),
        (c = S(f)),
        (d = A()),
        (m = b("div")),
        (g = b("button")),
        (g.textContent = "Spawn"),
        (p = A()),
        h(t, "class", "font-medium text-[1.7vh]"),
        h(
          g,
          "class",
          "bg-secondary px-[1vh] py-[0.5vh] rounded-[0.5vh] border border-primary"
        ),
        h(m, "class", "ml-auto h-full flex items-center"),
        h(
          e,
          "class",
          "w-full bg-tertiary flex flex-row rounded-[0.5vh] p-[1.5vh] text-[1.5vh]"
        );
    },
    m(w, P) {
      E(w, e, P),
        u(e, l),
        u(l, t),
        u(t, o),
        u(l, a),
        u(l, s),
        u(s, i),
        u(s, c),
        u(e, d),
        u(e, m),
        u(m, g),
        u(e, p),
        y || ((_ = T(g, "click", v)), (y = !0));
    },
    p(w, P) {
      (n = w),
        P & 128 && r !== (r = n[24].label + "") && C(o, r),
        P & 128 && f !== (f = n[24].plate + "") && C(c, f);
    },
    d(w) {
      w && $(e), (y = !1), _();
    },
  };
}
function nn(n) {
  let e, l;
  return (
    (e = new En({
      props: { $$slots: { default: [Ea] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1073741972 && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Ea(n) {
  let e,
    l,
    t,
    r = n[7].name + "",
    o,
    a,
    s,
    i,
    f,
    c,
    d,
    m,
    g,
    p,
    y,
    _;
  return (
    (f = new Gt({
      props: {
        data: { label: "Reason", value: "reason", id: "reason" },
        selectedData: n[8],
      },
    })),
    (d = new $n({
      props: {
        action: { label: "Duration", value: "duration", id: "duration" },
        label_title: "Duration",
        data: n[9],
        selectedData: n[8],
      },
    })),
    {
      c() {
        (e = b("div")),
          (l = b("p")),
          (t = S("Ban ")),
          (o = S(r)),
          (a = A()),
          (s = b("button")),
          (s.innerHTML = '<i class="fas fa-xmark"></i>'),
          (i = A()),
          j(f.$$.fragment),
          (c = A()),
          j(d.$$.fragment),
          (m = A()),
          (g = b("button")),
          (g.innerHTML = "<p>Ban</p>"),
          h(l, "class", "font-medium text-[1.8vh]"),
          h(s, "class", "hover:text-accent"),
          h(e, "class", "flex justify-between"),
          h(
            g,
            "class",
            "h-[3.8vh] px-[1.5vh] rounded-[0.5vh] bg-secondary hover:bg-opacity-90 border-[0.1vh] border-primary"
          );
      },
      m(v, w) {
        E(v, e, w),
          u(e, l),
          u(l, t),
          u(l, o),
          u(e, a),
          u(e, s),
          E(v, i, w),
          R(f, v, w),
          E(v, c, w),
          R(d, v, w),
          E(v, m, w),
          E(v, g, w),
          (p = !0),
          y || ((_ = [T(s, "click", n[20]), T(g, "click", n[21])]), (y = !0));
      },
      p(v, w) {
        (!p || w & 128) && r !== (r = v[7].name + "") && C(o, r);
      },
      i(v) {
        p || (k(f.$$.fragment, v), k(d.$$.fragment, v), (p = !0));
      },
      o(v) {
        D(f.$$.fragment, v), D(d.$$.fragment, v), (p = !1);
      },
      d(v) {
        v && ($(e), $(i), $(c), $(m), $(g)), B(f, v), B(d, v), (y = !1), ie(_);
      },
    }
  );
}
function rn(n) {
  let e, l;
  return (
    (e = new En({
      props: { $$slots: { default: [Aa] }, $$scope: { ctx: n } },
    })),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      p(t, r) {
        const o = {};
        r & 1073741960 && (o.$$scope = { dirty: r, ctx: t }), e.$set(o);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Aa(n) {
  let e,
    l,
    t,
    r = n[7].name + "",
    o,
    a,
    s,
    i,
    f,
    c,
    d,
    m,
    g,
    p;
  return (
    (f = new Gt({
      props: {
        data: { label: "Reason", value: "reason", id: "reason" },
        selectedData: n[8],
      },
    })),
    {
      c() {
        (e = b("div")),
          (l = b("p")),
          (t = S("Kick ")),
          (o = S(r)),
          (a = A()),
          (s = b("button")),
          (s.innerHTML = '<i class="fas fa-xmark"></i>'),
          (i = A()),
          j(f.$$.fragment),
          (c = A()),
          (d = b("button")),
          (d.innerHTML = "<p>Kick</p>"),
          h(l, "class", "font-medium text-[1.8vh]"),
          h(s, "class", "hover:text-accent"),
          h(e, "class", "flex justify-between"),
          h(
            d,
            "class",
            "h-[3.8vh] px-[1.5vh] rounded-[0.5vh] bg-secondary hover:bg-opacity-90 border-[0.1vh] border-primary"
          );
      },
      m(y, _) {
        E(y, e, _),
          u(e, l),
          u(l, t),
          u(l, o),
          u(e, a),
          u(e, s),
          E(y, i, _),
          R(f, y, _),
          E(y, c, _),
          E(y, d, _),
          (m = !0),
          g || ((p = [T(s, "click", n[22]), T(d, "click", n[23])]), (g = !0));
      },
      p(y, _) {
        (!m || _ & 128) && r !== (r = y[7].name + "") && C(o, r);
      },
      i(y) {
        m || (k(f.$$.fragment, y), (m = !0));
      },
      o(y) {
        D(f.$$.fragment, y), (m = !1);
      },
      d(y) {
        y && ($(e), $(i), $(c), $(d)), B(f, y), (g = !1), ie(p);
      },
    }
  );
}
function Da(n) {
  let e, l, t, r, o, a, s, i, f, c, d;
  l = new lt({
    props: { title: "Players", hasSearch: !0, onSearchInput: n[11] },
  });
  const m = [ga, va],
    g = [];
  function p(w, P) {
    return w[1] ? 0 : w[5] ? 1 : -1;
  }
  ~(o = p(n)) && (a = g[o] = m[o](n));
  let y = n[6] && tn(n),
    _ = n[2] && nn(n),
    v = n[3] && rn(n);
  return {
    c() {
      (e = b("div")),
        j(l.$$.fragment),
        (t = A()),
        (r = b("div")),
        a && a.c(),
        (s = A()),
        y && y.c(),
        (i = A()),
        _ && _.c(),
        (f = A()),
        v && v.c(),
        (c = Z()),
        h(
          r,
          "class",
          "w-full h-[84%] flex flex-col gap-[1vh] mt-[1vh] overflow-auto"
        ),
        h(e, "class", "h-full w-[33vh] px-[2vh]");
    },
    m(w, P) {
      E(w, e, P),
        R(l, e, null),
        u(e, t),
        u(e, r),
        ~o && g[o].m(r, null),
        E(w, s, P),
        y && y.m(w, P),
        E(w, i, P),
        _ && _.m(w, P),
        E(w, f, P),
        v && v.m(w, P),
        E(w, c, P),
        (d = !0);
    },
    p(w, [P]) {
      const q = {};
      P & 1 && (q.onSearchInput = w[11]), l.$set(q);
      let U = o;
      (o = p(w)),
        o === U
          ? ~o && g[o].p(w, P)
          : (a &&
              (J(),
              D(g[U], 1, 1, () => {
                g[U] = null;
              }),
              K()),
            ~o
              ? ((a = g[o]),
                a ? a.p(w, P) : ((a = g[o] = m[o](w)), a.c()),
                k(a, 1),
                a.m(r, null))
              : (a = null)),
        w[6]
          ? y
            ? y.p(w, P)
            : ((y = tn(w)), y.c(), y.m(i.parentNode, i))
          : y && (y.d(1), (y = null)),
        w[2]
          ? _
            ? (_.p(w, P), P & 4 && k(_, 1))
            : ((_ = nn(w)), _.c(), k(_, 1), _.m(f.parentNode, f))
          : _ &&
            (J(),
            D(_, 1, 1, () => {
              _ = null;
            }),
            K()),
        w[3]
          ? v
            ? (v.p(w, P), P & 8 && k(v, 1))
            : ((v = rn(w)), v.c(), k(v, 1), v.m(c.parentNode, c))
          : v &&
            (J(),
            D(v, 1, 1, () => {
              v = null;
            }),
            K());
    },
    i(w) {
      d || (k(l.$$.fragment, w), k(a), k(_), k(v), (d = !0));
    },
    o(w) {
      D(l.$$.fragment, w), D(a), D(_), D(v), (d = !1);
    },
    d(w) {
      w && ($(e), $(s), $(i), $(f), $(c)),
        B(l),
        ~o && g[o].d(),
        y && y.d(w),
        _ && _.d(w),
        v && v.d(w);
    },
  };
}
function Sa(n, e, l) {
  let t, r, o;
  N(n, Ie, (I) => l(5, (t = I))),
    N(n, $e, (I) => l(6, (r = I))),
    N(n, Ut, (I) => l(7, (o = I)));
  let a = "",
    s = !1,
    i = !1,
    f = !1;
  Re(async () => {
    l(1, (s = !0));
    const I = await oe("getPlayers");
    Ie.set(I), l(1, (s = !1));
  });
  let c = {};
  function d(I) {
    console.log("selected", I),
      l(4, (c[I.id] = I), c),
      console.log("selectedDataArray", c);
  }
  return [
    a,
    s,
    i,
    f,
    c,
    t,
    r,
    o,
    d,
    [
      { label: "Permanent", value: "2147483647" },
      { label: "10 Minutes", value: "600" },
      { label: "30 Minutes", value: "1800" },
      { label: "1 Hour", value: "3600" },
      { label: "6 Hours", value: "21600" },
      { label: "12 Hours", value: "43200" },
      { label: "1 Day", value: "86400" },
      { label: "3 Days", value: "259200" },
      { label: "1 Week", value: "604800" },
      { label: "3 Weeks", value: "1814400" },
    ],
    (I) => I.name.toLowerCase().includes(a.toLowerCase()),
    (I) => l(0, (a = I.target.value)),
    (I) => I.name.toLowerCase().includes(a.toLowerCase()),
    () => l(3, (f = !0)),
    () => l(2, (i = !0)),
    () =>
      oe("clickButton", {
        data: {
          label: "Teleport To Player",
          event: "hw_devmenumenu:server:TeleportToPlayer",
          type: "server",
          perms: "admin",
        },
        selectedData: { Player: { value: o.id } },
      }),
    () =>
      oe("clickButton", {
        data: {
          label: "Bring Player",
          event: "hw_devmenumenu:server:BringPlayer",
          type: "server",
          perms: "admin",
        },
        selectedData: { Player: { value: o.id } },
      }),
    () =>
      oe("clickButton", {
        data: {
          label: "Revive Player",
          event: "hw_devmenumenu:server:Revive",
          type: "server",
          perms: "admin",
        },
        selectedData: { Player: { value: o.id } },
      }),
    () =>
      oe("clickButton", {
        data: {
          label: "Spectate Player",
          event: "hw_devmenumenu:server:SpectateTarget",
          type: "server",
          perms: "admin",
        },
        selectedData: { Player: { value: o.id } },
      }),
    (I) =>
      oe("clickButton", {
        data: {
          label: "Spawn Personal Vehicle",
          event: "hw_devmenumenu:client:SpawnPersonalvehicle",
          type: "client",
          perms: "admin",
        },
        selectedData: { VehiclePlate: { value: I.plate } },
      }),
    () => l(2, (i = !1)),
    () => {
      console.log("Time: ", c.Duration.value),
        console.log("reason: ", c.Reason.value),
        oe("clickButton", {
          data: {
            label: "Ban Player",
            event: "hw_devmenumenu:server:BanPlayer",
            type: "server",
            perms: "admin",
          },
          selectedData: {
            Player: { value: o.id },
            Duration: { value: c.Duration.value },
            Reason: { value: o.id },
          },
        });
    },
    () => l(3, (f = !1)),
    () => {
      oe("clickButton", {
        data: {
          label: "Kick Player",
          event: "hw_devmenumenu:server:KickPlayer",
          type: "server",
          perms: "admin",
        },
        selectedData: { Player: { value: o.id }, Reason: { value: o.id } },
      });
    },
  ];
}
class La extends W {
  constructor(e) {
    super(), Y(this, e, Sa, Da, z, {});
  }
}
function Pa(n) {
  let e, l;
  return (
    (e = new La({})),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Ca(n) {
  let e, l;
  return (
    (e = new ca({})),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Ta(n) {
  let e, l;
  return (
    (e = new ta({})),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Ma(n) {
  let e, l;
  return (
    (e = new Wr({})),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function Na(n) {
  let e, l, t, r, o, a, s, i, f, c;
  l = new ur({});
  const d = [Ma, Ta, Ca, Pa],
    m = [];
  function g(p, y) {
    return p[1] == "Actions"
      ? 0
      : p[1] == "Server"
      ? 1
      : p[1] == "Staffchat"
      ? 2
      : p[1] == "Players"
      ? 3
      : -1;
  }
  return (
    ~(o = g(n)) && (a = m[o] = d[o](n)),
    {
      c() {
        (e = b("div")),
          j(l.$$.fragment),
          (t = A()),
          (r = b("div")),
          a && a.c(),
          h(
            r,
            "class",
            (s = "h-full flex " + (n[0] ? "w-[99vh]" : "w-[33vh]"))
          ),
          h(
            e,
            "class",
            (i =
              "h-[85vh] flex rounded-[0.5vh] bg-primary " +
              (n[0] ? "w-[106vh]" : "w-[40vh] mr-[5vh] "))
          );
      },
      m(p, y) {
        E(p, e, y),
          R(l, e, null),
          u(e, t),
          u(e, r),
          ~o && m[o].m(r, null),
          (c = !0);
      },
      p(p, [y]) {
        let _ = o;
        (o = g(p)),
          o !== _ &&
            (a &&
              (J(),
              D(m[_], 1, 1, () => {
                m[_] = null;
              }),
              K()),
            ~o
              ? ((a = m[o]),
                a || ((a = m[o] = d[o](p)), a.c()),
                k(a, 1),
                a.m(r, null))
              : (a = null)),
          (!c ||
            (y & 1 &&
              s !== (s = "h-full flex " + (p[0] ? "w-[99vh]" : "w-[33vh]")))) &&
            h(r, "class", s),
          (!c ||
            (y & 1 &&
              i !==
                (i =
                  "h-[85vh] flex rounded-[0.5vh] bg-primary " +
                  (p[0] ? "w-[106vh]" : "w-[40vh] mr-[5vh] ")))) &&
            h(e, "class", i);
      },
      i(p) {
        c ||
          (k(l.$$.fragment, p),
          k(a),
          p &&
            ke(() => {
              c && (f || (f = me(e, wt, { x: 100 }, !0)), f.run(1));
            }),
          (c = !0));
      },
      o(p) {
        D(l.$$.fragment, p),
          D(a),
          p && (f || (f = me(e, wt, { x: 100 }, !1)), f.run(0)),
          (c = !1);
      },
      d(p) {
        p && $(e), B(l), ~o && m[o].d(), p && f && f.end();
      },
    }
  );
}
function Ia(n, e, l) {
  let t, r;
  return N(n, $e, (o) => l(0, (t = o))), N(n, Nt, (o) => l(1, (r = o))), [t, r];
}
class Ra extends W {
  constructor(e) {
    super(), Y(this, e, Ia, Na, z, {});
  }
}
function Ba(n) {
  var Pe, Be, Je, Ce, Ke, ne, Te;
  let e,
    l,
    t,
    r,
    o,
    a,
    s,
    i = ((Pe = n[0]) == null ? void 0 : Pe.name) + "",
    f,
    c,
    d,
    m,
    g = ((Be = n[0]) == null ? void 0 : Be.model) + "",
    p,
    y,
    _,
    v,
    w = ((Je = n[0]) == null ? void 0 : Je.netID) + "",
    P,
    q,
    U,
    F,
    ee = ((Ce = n[0]) == null ? void 0 : Ce.plate) + "",
    te,
    G,
    O,
    I,
    X = ((Ke = n[0]) == null ? void 0 : Ke.fuel) + "",
    ve,
    ge,
    he,
    Se,
    be = ((ne = n[0]) == null ? void 0 : ne.engine_health) + "",
    _e,
    Ee,
    ye,
    L,
    de = ((Te = n[0]) == null ? void 0 : Te.body_health) + "",
    Le,
    pe,
    ae;
  return {
    c() {
      (e = b("div")),
        (l = b("div")),
        (t = b("div")),
        (t.innerHTML =
          '<i class="fas fa-code"></i> <p>Vehicle Information</p>'),
        (r = A()),
        (o = b("div")),
        (a = b("p")),
        (s = S("Model: ")),
        (f = S(i)),
        (c = A()),
        (d = b("p")),
        (m = S("Hash: ")),
        (p = S(g)),
        (y = A()),
        (_ = b("p")),
        (v = S("NetID: ")),
        (P = S(w)),
        (q = A()),
        (U = b("p")),
        (F = S("Plate: ")),
        (te = S(ee)),
        (G = A()),
        (O = b("p")),
        (I = S("Fuel: ")),
        (ve = S(X)),
        (ge = A()),
        (he = b("p")),
        (Se = S("Engine: ")),
        (_e = S(be)),
        (Ee = A()),
        (ye = b("p")),
        (L = S("Body: ")),
        (Le = S(de)),
        h(
          t,
          "class",
          "h-[2vh] w-full flex items-center gap-[1vh] text-[1.5vh]"
        ),
        h(
          l,
          "class",
          "w-[25vh] bg-primary flex flex-col gap-[2vh] rounded-[0.5vh] p-[2vh] ml-[2vh] font-medium"
        ),
        h(e, "class", "w-screen h-screen flex items-center");
    },
    m(x, ce) {
      E(x, e, ce),
        u(e, l),
        u(l, t),
        u(l, r),
        u(l, o),
        u(o, a),
        u(a, s),
        u(a, f),
        u(o, c),
        u(o, d),
        u(d, m),
        u(d, p),
        u(o, y),
        u(o, _),
        u(_, v),
        u(_, P),
        u(o, q),
        u(o, U),
        u(U, F),
        u(U, te),
        u(o, G),
        u(o, O),
        u(O, I),
        u(O, ve),
        u(o, ge),
        u(o, he),
        u(he, Se),
        u(he, _e),
        u(o, Ee),
        u(o, ye),
        u(ye, L),
        u(ye, Le),
        (ae = !0);
    },
    p(x, [ce]) {
      var je, qe, Me, Qe, Ne, Oe, Xe;
      (!ae || ce & 1) &&
        i !== (i = ((je = x[0]) == null ? void 0 : je.name) + "") &&
        C(f, i),
        (!ae || ce & 1) &&
          g !== (g = ((qe = x[0]) == null ? void 0 : qe.model) + "") &&
          C(p, g),
        (!ae || ce & 1) &&
          w !== (w = ((Me = x[0]) == null ? void 0 : Me.netID) + "") &&
          C(P, w),
        (!ae || ce & 1) &&
          ee !== (ee = ((Qe = x[0]) == null ? void 0 : Qe.plate) + "") &&
          C(te, ee),
        (!ae || ce & 1) &&
          X !== (X = ((Ne = x[0]) == null ? void 0 : Ne.fuel) + "") &&
          C(ve, X),
        (!ae || ce & 1) &&
          be !==
            (be = ((Oe = x[0]) == null ? void 0 : Oe.engine_health) + "") &&
          C(_e, be),
        (!ae || ce & 1) &&
          de !== (de = ((Xe = x[0]) == null ? void 0 : Xe.body_health) + "") &&
          C(Le, de);
    },
    i(x) {
      ae ||
        (x &&
          ke(() => {
            ae && (pe || (pe = me(l, wt, { x: -100 }, !0)), pe.run(1));
          }),
        (ae = !0));
    },
    o(x) {
      x && (pe || (pe = me(l, wt, { x: -100 }, !1)), pe.run(0)), (ae = !1);
    },
    d(x) {
      x && $(e), x && pe && pe.end();
    },
  };
}
function ja(n, e, l) {
  let t;
  return N(n, yt, (r) => l(0, (t = r))), [t];
}
class Oa extends W {
  constructor(e) {
    super(), Y(this, e, ja, Ba, z, {});
  }
}
function Va(n) {
  let e, l;
  return (
    (e = new Ra({})),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function an(n) {
  let e, l;
  return (
    (e = new Oa({})),
    {
      c() {
        j(e.$$.fragment);
      },
      m(t, r) {
        R(e, t, r), (l = !0);
      },
      i(t) {
        l || (k(e.$$.fragment, t), (l = !0));
      },
      o(t) {
        D(e.$$.fragment, t), (l = !1);
      },
      d(t) {
        B(e, t);
      },
    }
  );
}
function on(n) {
  let e, l, t, r;
  return (
    (e = new lr({})),
    {
      c() {
        j(e.$$.fragment),
          (l = A()),
          (t = b("div")),
          h(t, "class", "absolute w-screen h-screen bg-neutral-800");
      },
      m(o, a) {
        R(e, o, a), E(o, l, a), E(o, t, a), (r = !0);
      },
      i(o) {
        r || (k(e.$$.fragment, o), (r = !0));
      },
      o(o) {
        D(e.$$.fragment, o), (r = !1);
      },
      d(o) {
        o && ($(l), $(t)), B(e, o);
      },
    }
  );
}
function Ha(n) {
  var c;
  let e, l, t, r, o, a, s;
  e = new Zn({ props: { $$slots: { default: [Va] }, $$scope: { ctx: n } } });
  let i = ((c = n[0]) == null ? void 0 : c.show) && an();
  r = new ar({});
  let f = n[1] && on();
  return {
    c() {
      j(e.$$.fragment),
        (l = A()),
        i && i.c(),
        (t = A()),
        j(r.$$.fragment),
        (o = A()),
        f && f.c(),
        (a = Z());
    },
    m(d, m) {
      R(e, d, m),
        E(d, l, m),
        i && i.m(d, m),
        E(d, t, m),
        R(r, d, m),
        E(d, o, m),
        f && f.m(d, m),
        E(d, a, m),
        (s = !0);
    },
    p(d, [m]) {
      var p;
      const g = {};
      m & 8 && (g.$$scope = { dirty: m, ctx: d }),
        e.$set(g),
        (p = d[0]) != null && p.show
          ? i
            ? m & 1 && k(i, 1)
            : ((i = an()), i.c(), k(i, 1), i.m(t.parentNode, t))
          : i &&
            (J(),
            D(i, 1, 1, () => {
              i = null;
            }),
            K()),
        d[1]
          ? f
            ? m & 2 && k(f, 1)
            : ((f = on()), f.c(), k(f, 1), f.m(a.parentNode, a))
          : f &&
            (J(),
            D(f, 1, 1, () => {
              f = null;
            }),
            K());
    },
    i(d) {
      s || (k(e.$$.fragment, d), k(i), k(r.$$.fragment, d), k(f), (s = !0));
    },
    o(d) {
      D(e.$$.fragment, d), D(i), D(r.$$.fragment, d), D(f), (s = !1);
    },
    d(d) {
      d && ($(l), $(t), $(o), $(a)), B(e, d), i && i.d(d), B(r, d), f && f.d(d);
    },
  };
}
function Fa(n, e, l) {
  let t, r, o;
  return (
    N(n, Mt, (a) => l(2, (t = a))),
    N(n, yt, (a) => l(0, (r = a))),
    N(n, gt, (a) => l(1, (o = a))),
    ue(Mt, (t = "hw_devmenumenu"), t),
    [r, o]
  );
}
class Ua extends W {
  constructor(e) {
    super(), Y(this, e, Fa, Ha, z, {});
  }
}
new Ua({ target: document.getElementById("app") });
