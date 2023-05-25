;(function (co) {
  typeof define == 'function' && define.amd ? define(co) : co()
})(function () {
  'use strict'
  const co = '',
    S = {}
  function Zt(e, t) {
    const r = Object.create(null),
      n = e.split(',')
    for (let o = 0; o < n.length; o++) r[n[o]] = !0
    return t ? (o) => !!r[o.toLowerCase()] : (o) => !!r[o]
  }
  const Ie = S !== 'production' ? Object.freeze({}) : {},
    wr = S !== 'production' ? Object.freeze([]) : [],
    Je = () => {},
    Ri = () => !1,
    Nl = /^on[^a-z]/,
    kr = (e) => Nl.test(e),
    fn = (e) => e.startsWith('onUpdate:'),
    be = Object.assign,
    uo = (e, t) => {
      const r = e.indexOf(t)
      r > -1 && e.splice(r, 1)
    },
    Pl = Object.prototype.hasOwnProperty,
    ye = (e, t) => Pl.call(e, t),
    se = Array.isArray,
    or = (e) => An(e) === '[object Map]',
    Di = (e) => An(e) === '[object Set]',
    Ae = (e) => typeof e == 'function',
    Ge = (e) => typeof e == 'string',
    Vo = (e) => typeof e == 'symbol',
    Te = (e) => e !== null && typeof e == 'object',
    fo = (e) => Te(e) && Ae(e.then) && Ae(e.catch),
    bi = Object.prototype.toString,
    An = (e) => bi.call(e),
    Ao = (e) => An(e).slice(8, -1),
    xi = (e) => An(e) === '[object Object]',
    po = (e) => Ge(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
    pn = Zt(
      ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
    ),
    Zl = Zt('bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo'),
    gn = (e) => {
      const t = Object.create(null)
      return (r) => t[r] || (t[r] = e(r))
    },
    Hl = /-(\w)/g,
    Mt = gn((e) => e.replace(Hl, (t, r) => (r ? r.toUpperCase() : ''))),
    Ul = /\B([A-Z])/g,
    Ht = gn((e) => e.replace(Ul, '-$1').toLowerCase()),
    ir = gn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
    ar = gn((e) => (e ? `on${ir(e)}` : '')),
    Nr = (e, t) => !Object.is(e, t),
    Ir = (e, t) => {
      for (let r = 0; r < e.length; r++) e[r](t)
    },
    hn = (e, t, r) => {
      Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: r })
    },
    go = (e) => {
      const t = parseFloat(e)
      return isNaN(t) ? e : t
    },
    jl = (e) => {
      const t = Ge(e) ? Number(e) : NaN
      return isNaN(t) ? e : t
    }
  let Bi
  const mn = () =>
    Bi ||
    (Bi =
      typeof globalThis < 'u'
        ? globalThis
        : typeof self < 'u'
        ? self
        : typeof window < 'u'
        ? window
        : typeof global < 'u'
        ? global
        : {})
  function ho(e) {
    if (se(e)) {
      const t = {}
      for (let r = 0; r < e.length; r++) {
        const n = e[r],
          o = Ge(n) ? _l(n) : ho(n)
        if (o) for (const i in o) t[i] = o[i]
      }
      return t
    } else {
      if (Ge(e)) return e
      if (Te(e)) return e
    }
  }
  const Jl = /;(?![^(]*\))/g,
    Kl = /:([^]+)/,
    zl = new RegExp('\\/\\*.*?\\*\\/', 'gs')
  function _l(e) {
    const t = {}
    return (
      e
        .replace(zl, '')
        .split(Jl)
        .forEach((r) => {
          if (r) {
            const n = r.split(Kl)
            n.length > 1 && (t[n[0].trim()] = n[1].trim())
          }
        }),
      t
    )
  }
  function xt(e) {
    let t = ''
    if (Ge(e)) t = e
    else if (se(e))
      for (let r = 0; r < e.length; r++) {
        const n = xt(e[r])
        n && (t += n + ' ')
      }
    else if (Te(e)) for (const r in e) e[r] && (t += r + ' ')
    return t.trim()
  }
  const Wl =
      'html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot',
    $l =
      'svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view',
    Xl = Zt(Wl),
    eq = Zt($l),
    tq = Zt('itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly')
  function Gi(e) {
    return !!e || e === ''
  }
  const st = (e) =>
      Ge(e)
        ? e
        : e == null
        ? ''
        : se(e) || (Te(e) && (e.toString === bi || !Ae(e.toString)))
        ? JSON.stringify(e, Fi, 2)
        : String(e),
    Fi = (e, t) =>
      t && t.__v_isRef
        ? Fi(e, t.value)
        : or(t)
        ? {
            [`Map(${t.size})`]: [...t.entries()].reduce((r, [n, o]) => ((r[`${n} =>`] = o), r), {})
          }
        : Di(t)
        ? { [`Set(${t.size})`]: [...t.values()] }
        : Te(t) && !se(t) && !xi(t)
        ? String(t)
        : t
  function mo(e, ...t) {
    console.warn(`[Vue warn] ${e}`, ...t)
  }
  let gt
  class rq {
    constructor(t = !1) {
      ;(this.detached = t),
        (this._active = !0),
        (this.effects = []),
        (this.cleanups = []),
        (this.parent = gt),
        !t && gt && (this.index = (gt.scopes || (gt.scopes = [])).push(this) - 1)
    }
    get active() {
      return this._active
    }
    run(t) {
      if (this._active) {
        const r = gt
        try {
          return (gt = this), t()
        } finally {
          gt = r
        }
      } else S !== 'production' && mo('cannot run an inactive effect scope.')
    }
    on() {
      gt = this
    }
    off() {
      gt = this.parent
    }
    stop(t) {
      if (this._active) {
        let r, n
        for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop()
        for (r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]()
        if (this.scopes) for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0)
        if (!this.detached && this.parent && !t) {
          const o = this.parent.scopes.pop()
          o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index))
        }
        ;(this.parent = void 0), (this._active = !1)
      }
    }
  }
  function nq(e, t = gt) {
    t && t.active && t.effects.push(e)
  }
  function oq() {
    return gt
  }
  const Pr = (e) => {
      const t = new Set(e)
      return (t.w = 0), (t.n = 0), t
    },
    Oi = (e) => (e.w & Ut) > 0,
    Qi = (e) => (e.n & Ut) > 0,
    iq = ({ deps: e }) => {
      if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= Ut
    },
    aq = (e) => {
      const { deps: t } = e
      if (t.length) {
        let r = 0
        for (let n = 0; n < t.length; n++) {
          const o = t[n]
          Oi(o) && !Qi(o) ? o.delete(e) : (t[r++] = o), (o.w &= ~Ut), (o.n &= ~Ut)
        }
        t.length = r
      }
    },
    vo = new WeakMap()
  let Zr = 0,
    Ut = 1
  const Co = 30
  let ot
  const sr = Symbol(S !== 'production' ? 'iterate' : ''),
    Mo = Symbol(S !== 'production' ? 'Map key iterate' : '')
  class yo {
    constructor(t, r = null, n) {
      ;(this.fn = t),
        (this.scheduler = r),
        (this.active = !0),
        (this.deps = []),
        (this.parent = void 0),
        nq(this, n)
    }
    run() {
      if (!this.active) return this.fn()
      let t = ot,
        r = jt
      for (; t; ) {
        if (t === this) return
        t = t.parent
      }
      try {
        return (
          (this.parent = ot),
          (ot = this),
          (jt = !0),
          (Ut = 1 << ++Zr),
          Zr <= Co ? iq(this) : Li(this),
          this.fn()
        )
      } finally {
        Zr <= Co && aq(this),
          (Ut = 1 << --Zr),
          (ot = this.parent),
          (jt = r),
          (this.parent = void 0),
          this.deferStop && this.stop()
      }
    }
    stop() {
      ot === this
        ? (this.deferStop = !0)
        : this.active && (Li(this), this.onStop && this.onStop(), (this.active = !1))
    }
  }
  function Li(e) {
    const { deps: t } = e
    if (t.length) {
      for (let r = 0; r < t.length; r++) t[r].delete(e)
      t.length = 0
    }
  }
  let jt = !0
  const Yi = []
  function lr() {
    Yi.push(jt), (jt = !1)
  }
  function qr() {
    const e = Yi.pop()
    jt = e === void 0 ? !0 : e
  }
  function Ke(e, t, r) {
    if (jt && ot) {
      let n = vo.get(e)
      n || vo.set(e, (n = new Map()))
      let o = n.get(r)
      o || n.set(r, (o = Pr())),
        So(o, S !== 'production' ? { effect: ot, target: e, type: t, key: r } : void 0)
    }
  }
  function So(e, t) {
    let r = !1
    Zr <= Co ? Qi(e) || ((e.n |= Ut), (r = !Oi(e))) : (r = !e.has(ot)),
      r &&
        (e.add(ot),
        ot.deps.push(e),
        S !== 'production' && ot.onTrack && ot.onTrack(be({ effect: ot }, t)))
  }
  function yt(e, t, r, n, o, i) {
    const a = vo.get(e)
    if (!a) return
    let l = []
    if (t === 'clear') l = [...a.values()]
    else if (r === 'length' && se(e)) {
      const s = Number(n)
      a.forEach((c, V) => {
        ;(V === 'length' || V >= s) && l.push(c)
      })
    } else
      switch ((r !== void 0 && l.push(a.get(r)), t)) {
        case 'add':
          se(e) ? po(r) && l.push(a.get('length')) : (l.push(a.get(sr)), or(e) && l.push(a.get(Mo)))
          break
        case 'delete':
          se(e) || (l.push(a.get(sr)), or(e) && l.push(a.get(Mo)))
          break
        case 'set':
          or(e) && l.push(a.get(sr))
          break
      }
    const q =
      S !== 'production'
        ? { target: e, type: t, key: r, newValue: n, oldValue: o, oldTarget: i }
        : void 0
    if (l.length === 1) l[0] && (S !== 'production' ? Rr(l[0], q) : Rr(l[0]))
    else {
      const s = []
      for (const c of l) c && s.push(...c)
      S !== 'production' ? Rr(Pr(s), q) : Rr(Pr(s))
    }
  }
  function Rr(e, t) {
    const r = se(e) ? e : [...e]
    for (const n of r) n.computed && ki(n, t)
    for (const n of r) n.computed || ki(n, t)
  }
  function ki(e, t) {
    ;(e !== ot || e.allowRecurse) &&
      (S !== 'production' && e.onTrigger && e.onTrigger(be({ effect: e }, t)),
      e.scheduler ? e.scheduler() : e.run())
  }
  const sq = Zt('__proto__,__v_isRef,__isVue'),
    Ni = new Set(
      Object.getOwnPropertyNames(Symbol)
        .filter((e) => e !== 'arguments' && e !== 'caller')
        .map((e) => Symbol[e])
        .filter(Vo)
    ),
    lq = vn(),
    qq = vn(!1, !0),
    cq = vn(!0),
    uq = vn(!0, !0),
    Pi = Vq()
  function Vq() {
    const e = {}
    return (
      ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
        e[t] = function (...r) {
          const n = Ce(this)
          for (let i = 0, a = this.length; i < a; i++) Ke(n, 'get', i + '')
          const o = n[t](...r)
          return o === -1 || o === !1 ? n[t](...r.map(Ce)) : o
        }
      }),
      ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
        e[t] = function (...r) {
          lr()
          const n = Ce(this)[t].apply(this, r)
          return qr(), n
        }
      }),
      e
    )
  }
  function dq(e) {
    const t = Ce(this)
    return Ke(t, 'has', e), t.hasOwnProperty(e)
  }
  function vn(e = !1, t = !1) {
    return function (n, o, i) {
      if (o === '__v_isReactive') return !e
      if (o === '__v_isReadonly') return e
      if (o === '__v_isShallow') return t
      if (o === '__v_raw' && i === (e ? (t ? ea : Xi) : t ? $i : Wi).get(n)) return n
      const a = se(n)
      if (!e) {
        if (a && ye(Pi, o)) return Reflect.get(Pi, o, i)
        if (o === 'hasOwnProperty') return dq
      }
      const l = Reflect.get(n, o, i)
      return (Vo(o) ? Ni.has(o) : sq(o)) || (e || Ke(n, 'get', o), t)
        ? l
        : Ye(l)
        ? a && po(o)
          ? l
          : l.value
        : Te(l)
        ? e
          ? ta(l)
          : To(l)
        : l
    }
  }
  const fq = Zi(),
    Aq = Zi(!0)
  function Zi(e = !1) {
    return function (r, n, o, i) {
      let a = r[n]
      if (Kt(a) && Ye(a) && !Ye(o)) return !1
      if (!e && (!Rn(o) && !Kt(o) && ((a = Ce(a)), (o = Ce(o))), !se(r) && Ye(a) && !Ye(o)))
        return (a.value = o), !0
      const l = se(r) && po(n) ? Number(n) < r.length : ye(r, n),
        q = Reflect.set(r, n, o, i)
      return r === Ce(i) && (l ? Nr(o, a) && yt(r, 'set', n, o, a) : yt(r, 'add', n, o)), q
    }
  }
  function pq(e, t) {
    const r = ye(e, t),
      n = e[t],
      o = Reflect.deleteProperty(e, t)
    return o && r && yt(e, 'delete', t, void 0, n), o
  }
  function gq(e, t) {
    const r = Reflect.has(e, t)
    return (!Vo(t) || !Ni.has(t)) && Ke(e, 'has', t), r
  }
  function hq(e) {
    return Ke(e, 'iterate', se(e) ? 'length' : sr), Reflect.ownKeys(e)
  }
  const Hi = { get: lq, set: fq, deleteProperty: pq, has: gq, ownKeys: hq },
    Ui = {
      get: cq,
      set(e, t) {
        return (
          S !== 'production' &&
            mo(`Set operation on key "${String(t)}" failed: target is readonly.`, e),
          !0
        )
      },
      deleteProperty(e, t) {
        return (
          S !== 'production' &&
            mo(`Delete operation on key "${String(t)}" failed: target is readonly.`, e),
          !0
        )
      }
    },
    mq = be({}, Hi, { get: qq, set: Aq }),
    vq = be({}, Ui, { get: uq }),
    Eo = (e) => e,
    Cn = (e) => Reflect.getPrototypeOf(e)
  function Mn(e, t, r = !1, n = !1) {
    e = e.__v_raw
    const o = Ce(e),
      i = Ce(t)
    r || (t !== i && Ke(o, 'get', t), Ke(o, 'get', i))
    const { has: a } = Cn(o),
      l = n ? Eo : r ? Io : Ur
    if (a.call(o, t)) return l(e.get(t))
    if (a.call(o, i)) return l(e.get(i))
    e !== o && e.get(t)
  }
  function yn(e, t = !1) {
    const r = this.__v_raw,
      n = Ce(r),
      o = Ce(e)
    return (
      t || (e !== o && Ke(n, 'has', e), Ke(n, 'has', o)), e === o ? r.has(e) : r.has(e) || r.has(o)
    )
  }
  function Sn(e, t = !1) {
    return (e = e.__v_raw), !t && Ke(Ce(e), 'iterate', sr), Reflect.get(e, 'size', e)
  }
  function ji(e) {
    e = Ce(e)
    const t = Ce(this)
    return Cn(t).has.call(t, e) || (t.add(e), yt(t, 'add', e, e)), this
  }
  function Ji(e, t) {
    t = Ce(t)
    const r = Ce(this),
      { has: n, get: o } = Cn(r)
    let i = n.call(r, e)
    i ? S !== 'production' && _i(r, n, e) : ((e = Ce(e)), (i = n.call(r, e)))
    const a = o.call(r, e)
    return r.set(e, t), i ? Nr(t, a) && yt(r, 'set', e, t, a) : yt(r, 'add', e, t), this
  }
  function Ki(e) {
    const t = Ce(this),
      { has: r, get: n } = Cn(t)
    let o = r.call(t, e)
    o ? S !== 'production' && _i(t, r, e) : ((e = Ce(e)), (o = r.call(t, e)))
    const i = n ? n.call(t, e) : void 0,
      a = t.delete(e)
    return o && yt(t, 'delete', e, void 0, i), a
  }
  function zi() {
    const e = Ce(this),
      t = e.size !== 0,
      r = S !== 'production' ? (or(e) ? new Map(e) : new Set(e)) : void 0,
      n = e.clear()
    return t && yt(e, 'clear', void 0, void 0, r), n
  }
  function En(e, t) {
    return function (n, o) {
      const i = this,
        a = i.__v_raw,
        l = Ce(a),
        q = t ? Eo : e ? Io : Ur
      return !e && Ke(l, 'iterate', sr), a.forEach((s, c) => n.call(o, q(s), q(c), i))
    }
  }
  function Tn(e, t, r) {
    return function (...n) {
      const o = this.__v_raw,
        i = Ce(o),
        a = or(i),
        l = e === 'entries' || (e === Symbol.iterator && a),
        q = e === 'keys' && a,
        s = o[e](...n),
        c = r ? Eo : t ? Io : Ur
      return (
        !t && Ke(i, 'iterate', q ? Mo : sr),
        {
          next() {
            const { value: V, done: A } = s.next()
            return A ? { value: V, done: A } : { value: l ? [c(V[0]), c(V[1])] : c(V), done: A }
          },
          [Symbol.iterator]() {
            return this
          }
        }
      )
    }
  }
  function Jt(e) {
    return function (...t) {
      if (S !== 'production') {
        const r = t[0] ? `on key "${t[0]}" ` : ''
        console.warn(`${ir(e)} operation ${r}failed: target is readonly.`, Ce(this))
      }
      return e === 'delete' ? !1 : this
    }
  }
  function Cq() {
    const e = {
        get(i) {
          return Mn(this, i)
        },
        get size() {
          return Sn(this)
        },
        has: yn,
        add: ji,
        set: Ji,
        delete: Ki,
        clear: zi,
        forEach: En(!1, !1)
      },
      t = {
        get(i) {
          return Mn(this, i, !1, !0)
        },
        get size() {
          return Sn(this)
        },
        has: yn,
        add: ji,
        set: Ji,
        delete: Ki,
        clear: zi,
        forEach: En(!1, !0)
      },
      r = {
        get(i) {
          return Mn(this, i, !0)
        },
        get size() {
          return Sn(this, !0)
        },
        has(i) {
          return yn.call(this, i, !0)
        },
        add: Jt('add'),
        set: Jt('set'),
        delete: Jt('delete'),
        clear: Jt('clear'),
        forEach: En(!0, !1)
      },
      n = {
        get(i) {
          return Mn(this, i, !0, !0)
        },
        get size() {
          return Sn(this, !0)
        },
        has(i) {
          return yn.call(this, i, !0)
        },
        add: Jt('add'),
        set: Jt('set'),
        delete: Jt('delete'),
        clear: Jt('clear'),
        forEach: En(!0, !0)
      }
    return (
      ['keys', 'values', 'entries', Symbol.iterator].forEach((i) => {
        ;(e[i] = Tn(i, !1, !1)),
          (r[i] = Tn(i, !0, !1)),
          (t[i] = Tn(i, !1, !0)),
          (n[i] = Tn(i, !0, !0))
      }),
      [e, r, t, n]
    )
  }
  const [Mq, yq, Sq, Eq] = Cq()
  function wn(e, t) {
    const r = t ? (e ? Eq : Sq) : e ? yq : Mq
    return (n, o, i) =>
      o === '__v_isReactive'
        ? !e
        : o === '__v_isReadonly'
        ? e
        : o === '__v_raw'
        ? n
        : Reflect.get(ye(r, o) && o in n ? r : n, o, i)
  }
  const Tq = { get: wn(!1, !1) },
    wq = { get: wn(!1, !0) },
    Iq = { get: wn(!0, !1) },
    Rq = { get: wn(!0, !0) }
  function _i(e, t, r) {
    const n = Ce(r)
    if (n !== r && t.call(e, n)) {
      const o = Ao(e)
      console.warn(
        `Reactive ${o} contains both the raw and reactive versions of the same object${
          o === 'Map' ? ' as keys' : ''
        }, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      )
    }
  }
  const Wi = new WeakMap(),
    $i = new WeakMap(),
    Xi = new WeakMap(),
    ea = new WeakMap()
  function Dq(e) {
    switch (e) {
      case 'Object':
      case 'Array':
        return 1
      case 'Map':
      case 'Set':
      case 'WeakMap':
      case 'WeakSet':
        return 2
      default:
        return 0
    }
  }
  function bq(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : Dq(Ao(e))
  }
  function To(e) {
    return Kt(e) ? e : In(e, !1, Hi, Tq, Wi)
  }
  function xq(e) {
    return In(e, !1, mq, wq, $i)
  }
  function ta(e) {
    return In(e, !0, Ui, Iq, Xi)
  }
  function Hr(e) {
    return In(e, !0, vq, Rq, ea)
  }
  function In(e, t, r, n, o) {
    if (!Te(e))
      return S !== 'production' && console.warn(`value cannot be made reactive: ${String(e)}`), e
    if (e.__v_raw && !(t && e.__v_isReactive)) return e
    const i = o.get(e)
    if (i) return i
    const a = bq(e)
    if (a === 0) return e
    const l = new Proxy(e, a === 2 ? n : r)
    return o.set(e, l), l
  }
  function cr(e) {
    return Kt(e) ? cr(e.__v_raw) : !!(e && e.__v_isReactive)
  }
  function Kt(e) {
    return !!(e && e.__v_isReadonly)
  }
  function Rn(e) {
    return !!(e && e.__v_isShallow)
  }
  function wo(e) {
    return cr(e) || Kt(e)
  }
  function Ce(e) {
    const t = e && e.__v_raw
    return t ? Ce(t) : e
  }
  function ra(e) {
    return hn(e, '__v_skip', !0), e
  }
  const Ur = (e) => (Te(e) ? To(e) : e),
    Io = (e) => (Te(e) ? ta(e) : e)
  function na(e) {
    jt &&
      ot &&
      ((e = Ce(e)),
      S !== 'production'
        ? So(e.dep || (e.dep = Pr()), { target: e, type: 'get', key: 'value' })
        : So(e.dep || (e.dep = Pr())))
  }
  function oa(e, t) {
    e = Ce(e)
    const r = e.dep
    r && (S !== 'production' ? Rr(r, { target: e, type: 'set', key: 'value', newValue: t }) : Rr(r))
  }
  function Ye(e) {
    return !!(e && e.__v_isRef === !0)
  }
  function ae(e) {
    return Bq(e, !1)
  }
  function Bq(e, t) {
    return Ye(e) ? e : new Gq(e, t)
  }
  class Gq {
    constructor(t, r) {
      ;(this.__v_isShallow = r),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this._rawValue = r ? t : Ce(t)),
        (this._value = r ? t : Ur(t))
    }
    get value() {
      return na(this), this._value
    }
    set value(t) {
      const r = this.__v_isShallow || Rn(t) || Kt(t)
      ;(t = r ? t : Ce(t)),
        Nr(t, this._rawValue) && ((this._rawValue = t), (this._value = r ? t : Ur(t)), oa(this, t))
    }
  }
  function M(e) {
    return Ye(e) ? e.value : e
  }
  const Fq = {
    get: (e, t, r) => M(Reflect.get(e, t, r)),
    set: (e, t, r, n) => {
      const o = e[t]
      return Ye(o) && !Ye(r) ? ((o.value = r), !0) : Reflect.set(e, t, r, n)
    }
  }
  function ia(e) {
    return cr(e) ? e : new Proxy(e, Fq)
  }
  class Oq {
    constructor(t, r, n, o) {
      ;(this._setter = r),
        (this.dep = void 0),
        (this.__v_isRef = !0),
        (this.__v_isReadonly = !1),
        (this._dirty = !0),
        (this.effect = new yo(t, () => {
          this._dirty || ((this._dirty = !0), oa(this))
        })),
        (this.effect.computed = this),
        (this.effect.active = this._cacheable = !o),
        (this.__v_isReadonly = n)
    }
    get value() {
      const t = Ce(this)
      return (
        na(t),
        (t._dirty || !t._cacheable) && ((t._dirty = !1), (t._value = t.effect.run())),
        t._value
      )
    }
    set value(t) {
      this._setter(t)
    }
  }
  function Qq(e, t, r = !1) {
    let n, o
    const i = Ae(e)
    i
      ? ((n = e),
        (o =
          S !== 'production'
            ? () => {
                console.warn('Write operation failed: computed value is readonly')
              }
            : Je))
      : ((n = e.get), (o = e.set))
    const a = new Oq(n, o, i || !o, r)
    return (
      S !== 'production' &&
        t &&
        !r &&
        ((a.effect.onTrack = t.onTrack), (a.effect.onTrigger = t.onTrigger)),
      a
    )
  }
  const ur = []
  function Dn(e) {
    ur.push(e)
  }
  function bn() {
    ur.pop()
  }
  function K(e, ...t) {
    if (!S !== 'production') return
    lr()
    const r = ur.length ? ur[ur.length - 1].component : null,
      n = r && r.appContext.config.warnHandler,
      o = Lq()
    if (n)
      Bt(n, r, 11, [
        e + t.join(''),
        r && r.proxy,
        o.map(({ vnode: i }) => `at <${Kn(r, i.type)}>`).join(`
`),
        o
      ])
    else {
      const i = [`[Vue warn]: ${e}`, ...t]
      o.length &&
        i.push(
          `
`,
          ...Yq(o)
        ),
        console.warn(...i)
    }
    qr()
  }
  function Lq() {
    let e = ur[ur.length - 1]
    if (!e) return []
    const t = []
    for (; e; ) {
      const r = t[0]
      r && r.vnode === e ? r.recurseCount++ : t.push({ vnode: e, recurseCount: 0 })
      const n = e.component && e.component.parent
      e = n && n.vnode
    }
    return t
  }
  function Yq(e) {
    const t = []
    return (
      e.forEach((r, n) => {
        t.push(
          ...(n === 0
            ? []
            : [
                `
`
              ]),
          ...kq(r)
        )
      }),
      t
    )
  }
  function kq({ vnode: e, recurseCount: t }) {
    const r = t > 0 ? `... (${t} recursive calls)` : '',
      n = e.component ? e.component.parent == null : !1,
      o = ` at <${Kn(e.component, e.type, n)}`,
      i = '>' + r
    return e.props ? [o, ...Nq(e.props), i] : [o + i]
  }
  function Nq(e) {
    const t = [],
      r = Object.keys(e)
    return (
      r.slice(0, 3).forEach((n) => {
        t.push(...aa(n, e[n]))
      }),
      r.length > 3 && t.push(' ...'),
      t
    )
  }
  function aa(e, t, r) {
    return Ge(t)
      ? ((t = JSON.stringify(t)), r ? t : [`${e}=${t}`])
      : typeof t == 'number' || typeof t == 'boolean' || t == null
      ? r
        ? t
        : [`${e}=${t}`]
      : Ye(t)
      ? ((t = aa(e, Ce(t.value), !0)), r ? t : [`${e}=Ref<`, t, '>'])
      : Ae(t)
      ? [`${e}=fn${t.name ? `<${t.name}>` : ''}`]
      : ((t = Ce(t)), r ? t : [`${e}=`, t])
  }
  function Pq(e, t) {
    !S === 'production' &&
      e !== void 0 &&
      (typeof e != 'number'
        ? K(`${t} is not a valid number - got ${JSON.stringify(e)}.`)
        : isNaN(e) && K(`${t} is NaN - the duration expression might be incorrect.`))
  }
  const Ro = {
    sp: 'serverPrefetch hook',
    bc: 'beforeCreate hook',
    c: 'created hook',
    bm: 'beforeMount hook',
    m: 'mounted hook',
    bu: 'beforeUpdate hook',
    u: 'updated',
    bum: 'beforeUnmount hook',
    um: 'unmounted hook',
    a: 'activated hook',
    da: 'deactivated hook',
    ec: 'errorCaptured hook',
    rtc: 'renderTracked hook',
    rtg: 'renderTriggered hook',
    [0]: 'setup function',
    [1]: 'render function',
    [2]: 'watcher getter',
    [3]: 'watcher callback',
    [4]: 'watcher cleanup function',
    [5]: 'native event handler',
    [6]: 'component event handler',
    [7]: 'vnode hook',
    [8]: 'directive hook',
    [9]: 'transition hook',
    [10]: 'app errorHandler',
    [11]: 'app warnHandler',
    [12]: 'ref function',
    [13]: 'async component loader',
    [14]: 'scheduler flush. This is likely a Vue internals bug. Please open an issue at https://new-issue.vuejs.org/?repo=vuejs/core'
  }
  function Bt(e, t, r, n) {
    let o
    try {
      o = n ? e(...n) : e()
    } catch (i) {
      xn(i, t, r)
    }
    return o
  }
  function Vt(e, t, r, n) {
    if (Ae(e)) {
      const i = Bt(e, t, r, n)
      return (
        i &&
          fo(i) &&
          i.catch((a) => {
            xn(a, t, r)
          }),
        i
      )
    }
    const o = []
    for (let i = 0; i < e.length; i++) o.push(Vt(e[i], t, r, n))
    return o
  }
  function xn(e, t, r, n = !0) {
    const o = t ? t.vnode : null
    if (t) {
      let i = t.parent
      const a = t.proxy,
        l = S !== 'production' ? Ro[r] : r
      for (; i; ) {
        const s = i.ec
        if (s) {
          for (let c = 0; c < s.length; c++) if (s[c](e, a, l) === !1) return
        }
        i = i.parent
      }
      const q = t.appContext.config.errorHandler
      if (q) {
        Bt(q, null, 10, [e, a, l])
        return
      }
    }
    Zq(e, r, o, n)
  }
  function Zq(e, t, r, n = !0) {
    if (S !== 'production') {
      const o = Ro[t]
      if ((r && Dn(r), K(`Unhandled error${o ? ` during execution of ${o}` : ''}`), r && bn(), n))
        throw e
      console.error(e)
    } else console.error(e)
  }
  let jr = !1,
    Do = !1
  const Xe = []
  let St = 0
  const Dr = []
  let Et = null,
    zt = 0
  const sa = Promise.resolve()
  let bo = null
  const Hq = 100
  function Uq(e) {
    const t = bo || sa
    return e ? t.then(this ? e.bind(this) : e) : t
  }
  function jq(e) {
    let t = St + 1,
      r = Xe.length
    for (; t < r; ) {
      const n = (t + r) >>> 1
      Jr(Xe[n]) < e ? (t = n + 1) : (r = n)
    }
    return t
  }
  function Bn(e) {
    ;(!Xe.length || !Xe.includes(e, jr && e.allowRecurse ? St + 1 : St)) &&
      (e.id == null ? Xe.push(e) : Xe.splice(jq(e.id), 0, e), la())
  }
  function la() {
    !jr && !Do && ((Do = !0), (bo = sa.then(Va)))
  }
  function Jq(e) {
    const t = Xe.indexOf(e)
    t > St && Xe.splice(t, 1)
  }
  function qa(e) {
    se(e) ? Dr.push(...e) : (!Et || !Et.includes(e, e.allowRecurse ? zt + 1 : zt)) && Dr.push(e),
      la()
  }
  function ca(e, t = jr ? St + 1 : 0) {
    for (S !== 'production' && (e = e || new Map()); t < Xe.length; t++) {
      const r = Xe[t]
      if (r && r.pre) {
        if (S !== 'production' && xo(e, r)) continue
        Xe.splice(t, 1), t--, r()
      }
    }
  }
  function ua(e) {
    if (Dr.length) {
      const t = [...new Set(Dr)]
      if (((Dr.length = 0), Et)) {
        Et.push(...t)
        return
      }
      for (
        Et = t,
          S !== 'production' && (e = e || new Map()),
          Et.sort((r, n) => Jr(r) - Jr(n)),
          zt = 0;
        zt < Et.length;
        zt++
      )
        (S !== 'production' && xo(e, Et[zt])) || Et[zt]()
      ;(Et = null), (zt = 0)
    }
  }
  const Jr = (e) => (e.id == null ? 1 / 0 : e.id),
    Kq = (e, t) => {
      const r = Jr(e) - Jr(t)
      if (r === 0) {
        if (e.pre && !t.pre) return -1
        if (t.pre && !e.pre) return 1
      }
      return r
    }
  function Va(e) {
    ;(Do = !1), (jr = !0), S !== 'production' && (e = e || new Map()), Xe.sort(Kq)
    const t = S !== 'production' ? (r) => xo(e, r) : Je
    try {
      for (St = 0; St < Xe.length; St++) {
        const r = Xe[St]
        if (r && r.active !== !1) {
          if (S !== 'production' && t(r)) continue
          Bt(r, null, 14)
        }
      }
    } finally {
      ;(St = 0), (Xe.length = 0), ua(e), (jr = !1), (bo = null), (Xe.length || Dr.length) && Va(e)
    }
  }
  function xo(e, t) {
    if (!e.has(t)) e.set(t, 1)
    else {
      const r = e.get(t)
      if (r > Hq) {
        const n = t.ownerInstance,
          o = n && oi(n.type)
        return (
          K(
            `Maximum recursive updates exceeded${
              o ? ` in component <${o}>` : ''
            }. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`
          ),
          !0
        )
      } else e.set(t, r + 1)
    }
  }
  let Vr = !1
  const br = new Set()
  S !== 'production' &&
    (mn().__VUE_HMR_RUNTIME__ = { createRecord: Bo(da), rerender: Bo(Wq), reload: Bo($q) })
  const dr = new Map()
  function zq(e) {
    const t = e.type.__hmrId
    let r = dr.get(t)
    r || (da(t, e.type), (r = dr.get(t))), r.instances.add(e)
  }
  function _q(e) {
    dr.get(e.type.__hmrId).instances.delete(e)
  }
  function da(e, t) {
    return dr.has(e) ? !1 : (dr.set(e, { initialDef: Kr(t), instances: new Set() }), !0)
  }
  function Kr(e) {
    return cs(e) ? e.__vccOpts : e
  }
  function Wq(e, t) {
    const r = dr.get(e)
    r &&
      ((r.initialDef.render = t),
      [...r.instances].forEach((n) => {
        t && ((n.render = t), (Kr(n.type).render = t)),
          (n.renderCache = []),
          (Vr = !0),
          n.update(),
          (Vr = !1)
      }))
  }
  function $q(e, t) {
    const r = dr.get(e)
    if (!r) return
    ;(t = Kr(t)), fa(r.initialDef, t)
    const n = [...r.instances]
    for (const o of n) {
      const i = Kr(o.type)
      br.has(i) || (i !== r.initialDef && fa(i, t), br.add(i)),
        o.appContext.propsCache.delete(o.type),
        o.appContext.emitsCache.delete(o.type),
        o.appContext.optionsCache.delete(o.type),
        o.ceReload
          ? (br.add(i), o.ceReload(t.styles), br.delete(i))
          : o.parent
          ? Bn(o.parent.update)
          : o.appContext.reload
          ? o.appContext.reload()
          : typeof window < 'u'
          ? window.location.reload()
          : console.warn('[HMR] Root or manually mounted instance modified. Full reload required.')
    }
    qa(() => {
      for (const o of n) br.delete(Kr(o.type))
    })
  }
  function fa(e, t) {
    be(e, t)
    for (const r in e) r !== '__file' && !(r in t) && delete e[r]
  }
  function Bo(e) {
    return (t, r) => {
      try {
        return e(t, r)
      } catch (n) {
        console.error(n),
          console.warn(
            '[HMR] Something went wrong during Vue component hot-reload. Full reload required.'
          )
      }
    }
  }
  let Tt,
    zr = [],
    Go = !1
  function _r(e, ...t) {
    Tt ? Tt.emit(e, ...t) : Go || zr.push({ event: e, args: t })
  }
  function Aa(e, t) {
    var r, n
    ;(Tt = e),
      Tt
        ? ((Tt.enabled = !0), zr.forEach(({ event: o, args: i }) => Tt.emit(o, ...i)), (zr = []))
        : typeof window < 'u' &&
          window.HTMLElement &&
          !(
            (n = (r = window.navigator) == null ? void 0 : r.userAgent) != null &&
            n.includes('jsdom')
          )
        ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
            Aa(i, t)
          }),
          setTimeout(() => {
            Tt || ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null), (Go = !0), (zr = []))
          }, 3e3))
        : ((Go = !0), (zr = []))
  }
  function Xq(e, t) {
    _r('app:init', e, t, { Fragment: Pe, Text: tn, Comment: Ze, Static: Hn })
  }
  function ec(e) {
    _r('app:unmount', e)
  }
  const tc = Fo('component:added'),
    pa = Fo('component:updated'),
    rc = Fo('component:removed'),
    nc = (e) => {
      Tt && typeof Tt.cleanupBuffer == 'function' && !Tt.cleanupBuffer(e) && rc(e)
    }
  function Fo(e) {
    return (t) => {
      _r(e, t.appContext.app, t.uid, t.parent ? t.parent.uid : void 0, t)
    }
  }
  const oc = ga('perf:start'),
    ic = ga('perf:end')
  function ga(e) {
    return (t, r, n) => {
      _r(e, t.appContext.app, t.uid, t, r, n)
    }
  }
  function ac(e, t, r) {
    _r('component:emit', e.appContext.app, e, t, r)
  }
  function sc(e, t, ...r) {
    if (e.isUnmounted) return
    const n = e.vnode.props || Ie
    if (S !== 'production') {
      const {
        emitsOptions: c,
        propsOptions: [V]
      } = e
      if (c)
        if (!(t in c))
          (!V || !(ar(t) in V)) &&
            K(
              `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ar(
                t
              )}" prop.`
            )
        else {
          const A = c[t]
          Ae(A) &&
            (A(...r) || K(`Invalid event arguments: event validation failed for event "${t}".`))
        }
    }
    let o = r
    const i = t.startsWith('update:'),
      a = i && t.slice(7)
    if (a && a in n) {
      const c = `${a === 'modelValue' ? 'model' : a}Modifiers`,
        { number: V, trim: A } = n[c] || Ie
      A && (o = r.map((C) => (Ge(C) ? C.trim() : C))), V && (o = r.map(go))
    }
    if ((S !== 'production' && ac(e, t, o), S !== 'production')) {
      const c = t.toLowerCase()
      c !== t &&
        n[ar(c)] &&
        K(
          `Event "${c}" is emitted in component ${Kn(
            e,
            e.type
          )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Ht(
            t
          )}" instead of "${t}".`
        )
    }
    let l,
      q = n[(l = ar(t))] || n[(l = ar(Mt(t)))]
    !q && i && (q = n[(l = ar(Ht(t)))]), q && Vt(q, e, 6, o)
    const s = n[l + 'Once']
    if (s) {
      if (!e.emitted) e.emitted = {}
      else if (e.emitted[l]) return
      ;(e.emitted[l] = !0), Vt(s, e, 6, o)
    }
  }
  function ha(e, t, r = !1) {
    const n = t.emitsCache,
      o = n.get(e)
    if (o !== void 0) return o
    const i = e.emits
    let a = {},
      l = !1
    if (!Ae(e)) {
      const q = (s) => {
        const c = ha(s, t, !0)
        c && ((l = !0), be(a, c))
      }
      !r && t.mixins.length && t.mixins.forEach(q),
        e.extends && q(e.extends),
        e.mixins && e.mixins.forEach(q)
    }
    return !i && !l
      ? (Te(e) && n.set(e, null), null)
      : (se(i) ? i.forEach((q) => (a[q] = null)) : be(a, i), Te(e) && n.set(e, a), a)
  }
  function Gn(e, t) {
    return !e || !kr(t)
      ? !1
      : ((t = t.slice(2).replace(/Once$/, '')),
        ye(e, t[0].toLowerCase() + t.slice(1)) || ye(e, Ht(t)) || ye(e, t))
  }
  let ke = null,
    ma = null
  function Fn(e) {
    const t = ke
    return (ke = e), (ma = (e && e.type.__scopeId) || null), t
  }
  function xr(e, t = ke, r) {
    if (!t || e._n) return e
    const n = (...o) => {
      n._d && Xa(-1)
      const i = Fn(t)
      let a
      try {
        a = e(...o)
      } finally {
        Fn(i), n._d && Xa(1)
      }
      return S !== 'production' && pa(t), a
    }
    return (n._n = !0), (n._c = !0), (n._d = !0), n
  }
  let Oo = !1
  function On() {
    Oo = !0
  }
  function Qo(e) {
    const {
      type: t,
      vnode: r,
      proxy: n,
      withProxy: o,
      props: i,
      propsOptions: [a],
      slots: l,
      attrs: q,
      emit: s,
      render: c,
      renderCache: V,
      data: A,
      setupState: C,
      ctx: y,
      inheritAttrs: w
    } = e
    let J, O
    const G = Fn(e)
    S !== 'production' && (Oo = !1)
    try {
      if (r.shapeFlag & 4) {
        const D = o || n
        ;(J = vt(c.call(D, D, V, i, C, A, y))), (O = q)
      } else {
        const D = t
        S !== 'production' && q === i && On(),
          (J = vt(
            D.length > 1
              ? D(
                  i,
                  S !== 'production'
                    ? {
                        get attrs() {
                          return On(), q
                        },
                        slots: l,
                        emit: s
                      }
                    : { attrs: q, slots: l, emit: s }
                )
              : D(i, null)
          )),
          (O = t.props ? q : qc(q))
      }
    } catch (D) {
      ;(rn.length = 0), xn(D, e, 1), (J = Se(Ze))
    }
    let Y = J,
      L
    if (
      (S !== 'production' && J.patchFlag > 0 && J.patchFlag & 2048 && ([Y, L] = lc(J)),
      O && w !== !1)
    ) {
      const D = Object.keys(O),
        { shapeFlag: qe } = Y
      if (D.length) {
        if (qe & 7) a && D.some(fn) && (O = cc(O, a)), (Y = mt(Y, O))
        else if (S !== 'production' && !Oo && Y.type !== Ze) {
          const Ve = Object.keys(q),
            $ = [],
            de = []
          for (let Q = 0, le = Ve.length; Q < le; Q++) {
            const z = Ve[Q]
            kr(z) ? fn(z) || $.push(z[2].toLowerCase() + z.slice(3)) : de.push(z)
          }
          de.length &&
            K(
              `Extraneous non-props attributes (${de.join(
                ', '
              )}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
            ),
            $.length &&
              K(
                `Extraneous non-emits event listeners (${$.join(
                  ', '
                )}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
              )
        }
      }
    }
    return (
      r.dirs &&
        (S !== 'production' &&
          !Ca(Y) &&
          K(
            'Runtime directive used on component with non-element root node. The directives will not function as intended.'
          ),
        (Y = mt(Y)),
        (Y.dirs = Y.dirs ? Y.dirs.concat(r.dirs) : r.dirs)),
      r.transition &&
        (S !== 'production' &&
          !Ca(Y) &&
          K('Component inside <Transition> renders non-element root node that cannot be animated.'),
        (Y.transition = r.transition)),
      S !== 'production' && L ? L(Y) : (J = Y),
      Fn(G),
      J
    )
  }
  const lc = (e) => {
    const t = e.children,
      r = e.dynamicChildren,
      n = va(t)
    if (!n) return [e, void 0]
    const o = t.indexOf(n),
      i = r ? r.indexOf(n) : -1,
      a = (l) => {
        ;(t[o] = l), r && (i > -1 ? (r[i] = l) : l.patchFlag > 0 && (e.dynamicChildren = [...r, l]))
      }
    return [vt(n), a]
  }
  function va(e) {
    let t
    for (let r = 0; r < e.length; r++) {
      const n = e[r]
      if (Br(n)) {
        if (n.type !== Ze || n.children === 'v-if') {
          if (t) return
          t = n
        }
      } else return
    }
    return t
  }
  const qc = (e) => {
      let t
      for (const r in e) (r === 'class' || r === 'style' || kr(r)) && ((t || (t = {}))[r] = e[r])
      return t
    },
    cc = (e, t) => {
      const r = {}
      for (const n in e) (!fn(n) || !(n.slice(9) in t)) && (r[n] = e[n])
      return r
    },
    Ca = (e) => e.shapeFlag & 7 || e.type === Ze
  function uc(e, t, r) {
    const { props: n, children: o, component: i } = e,
      { props: a, children: l, patchFlag: q } = t,
      s = i.emitsOptions
    if ((S !== 'production' && (o || l) && Vr) || t.dirs || t.transition) return !0
    if (r && q >= 0) {
      if (q & 1024) return !0
      if (q & 16) return n ? Ma(n, a, s) : !!a
      if (q & 8) {
        const c = t.dynamicProps
        for (let V = 0; V < c.length; V++) {
          const A = c[V]
          if (a[A] !== n[A] && !Gn(s, A)) return !0
        }
      }
    } else return (o || l) && (!l || !l.$stable) ? !0 : n === a ? !1 : n ? (a ? Ma(n, a, s) : !0) : !!a
    return !1
  }
  function Ma(e, t, r) {
    const n = Object.keys(t)
    if (n.length !== Object.keys(e).length) return !0
    for (let o = 0; o < n.length; o++) {
      const i = n[o]
      if (t[i] !== e[i] && !Gn(r, i)) return !0
    }
    return !1
  }
  function Vc({ vnode: e, parent: t }, r) {
    for (; t && t.subTree === e; ) ((e = t.vnode).el = r), (t = t.parent)
  }
  const dc = (e) => e.__isSuspense
  function fc(e, t) {
    t && t.pendingBranch ? (se(e) ? t.effects.push(...e) : t.effects.push(e)) : qa(e)
  }
  function et(e, t) {
    return Lo(e, null, t)
  }
  const Qn = {}
  function Gt(e, t, r) {
    return (
      S !== 'production' &&
        !Ae(t) &&
        K(
          '`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature.'
        ),
      Lo(e, t, r)
    )
  }
  function Lo(e, t, { immediate: r, deep: n, flush: o, onTrack: i, onTrigger: a } = Ie) {
    var l
    S !== 'production' &&
      !t &&
      (r !== void 0 &&
        K(
          'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
        ),
      n !== void 0 &&
        K(
          'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
        ))
    const q = (D) => {
        K(
          'Invalid watch source: ',
          D,
          'A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.'
        )
      },
      s = oq() === ((l = Ne) == null ? void 0 : l.scope) ? Ne : null
    let c,
      V = !1,
      A = !1
    if (
      (Ye(e)
        ? ((c = () => e.value), (V = Rn(e)))
        : cr(e)
        ? ((c = () => e), (n = !0))
        : se(e)
        ? ((A = !0),
          (V = e.some((D) => cr(D) || Rn(D))),
          (c = () =>
            e.map((D) => {
              if (Ye(D)) return D.value
              if (cr(D)) return fr(D)
              if (Ae(D)) return Bt(D, s, 2)
              S !== 'production' && q(D)
            })))
        : Ae(e)
        ? t
          ? (c = () => Bt(e, s, 2))
          : (c = () => {
              if (!(s && s.isUnmounted)) return C && C(), Vt(e, s, 3, [y])
            })
        : ((c = Je), S !== 'production' && q(e)),
      t && n)
    ) {
      const D = c
      c = () => fr(D())
    }
    let C,
      y = (D) => {
        C = Y.onStop = () => {
          Bt(D, s, 4)
        }
      },
      w
    if (on)
      if (((y = Je), t ? r && Vt(t, s, 3, [c(), A ? [] : void 0, y]) : c(), o === 'sync')) {
        const D = gu()
        w = D.__watcherHandles || (D.__watcherHandles = [])
      } else return Je
    let J = A ? new Array(e.length).fill(Qn) : Qn
    const O = () => {
      if (Y.active)
        if (t) {
          const D = Y.run()
          ;(n || V || (A ? D.some((qe, Ve) => Nr(qe, J[Ve])) : Nr(D, J))) &&
            (C && C(), Vt(t, s, 3, [D, J === Qn ? void 0 : A && J[0] === Qn ? [] : J, y]), (J = D))
        } else Y.run()
    }
    O.allowRecurse = !!t
    let G
    o === 'sync'
      ? (G = O)
      : o === 'post'
      ? (G = () => at(O, s && s.suspense))
      : ((O.pre = !0), s && (O.id = s.uid), (G = () => Bn(O)))
    const Y = new yo(c, G)
    S !== 'production' && ((Y.onTrack = i), (Y.onTrigger = a)),
      t ? (r ? O() : (J = Y.run())) : o === 'post' ? at(Y.run.bind(Y), s && s.suspense) : Y.run()
    const L = () => {
      Y.stop(), s && s.scope && uo(s.scope.effects, Y)
    }
    return w && w.push(L), L
  }
  function Ac(e, t, r) {
    const n = this.proxy,
      o = Ge(e) ? (e.includes('.') ? ya(n, e) : () => n[e]) : e.bind(n, n)
    let i
    Ae(t) ? (i = t) : ((i = t.handler), (r = t))
    const a = Ne
    Fr(this)
    const l = Lo(o, i.bind(n), r)
    return a ? Fr(a) : mr(), l
  }
  function ya(e, t) {
    const r = t.split('.')
    return () => {
      let n = e
      for (let o = 0; o < r.length && n; o++) n = n[r[o]]
      return n
    }
  }
  function fr(e, t) {
    if (!Te(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
    if ((t.add(e), Ye(e))) fr(e.value, t)
    else if (se(e)) for (let r = 0; r < e.length; r++) fr(e[r], t)
    else if (Di(e) || or(e))
      e.forEach((r) => {
        fr(r, t)
      })
    else if (xi(e)) for (const r in e) fr(e[r], t)
    return e
  }
  function Sa(e) {
    Zl(e) && K('Do not use built-in directive ids as custom directive id: ' + e)
  }
  function Oe(e, t) {
    const r = ke
    if (r === null)
      return S !== 'production' && K('withDirectives can only be used inside render functions.'), e
    const n = Jn(r) || r.proxy,
      o = e.dirs || (e.dirs = [])
    for (let i = 0; i < t.length; i++) {
      let [a, l, q, s = Ie] = t[i]
      a &&
        (Ae(a) && (a = { mounted: a, updated: a }),
        a.deep && fr(l),
        o.push({ dir: a, instance: n, value: l, oldValue: void 0, arg: q, modifiers: s }))
    }
    return e
  }
  function Ar(e, t, r, n) {
    const o = e.dirs,
      i = t && t.dirs
    for (let a = 0; a < o.length; a++) {
      const l = o[a]
      i && (l.oldValue = i[a].value)
      let q = l.dir[n]
      q && (lr(), Vt(q, r, 8, [e.el, l, e, t]), qr())
    }
  }
  function pc() {
    const e = { isMounted: !1, isLeaving: !1, isUnmounting: !1, leavingVNodes: new Map() }
    return (
      wt(() => {
        e.isMounted = !0
      }),
      Da(() => {
        e.isUnmounting = !0
      }),
      e
    )
  }
  const dt = [Function, Array],
    Ea = {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: dt,
      onEnter: dt,
      onAfterEnter: dt,
      onEnterCancelled: dt,
      onBeforeLeave: dt,
      onLeave: dt,
      onAfterLeave: dt,
      onLeaveCancelled: dt,
      onBeforeAppear: dt,
      onAppear: dt,
      onAfterAppear: dt,
      onAppearCancelled: dt
    },
    gc = {
      name: 'BaseTransition',
      props: Ea,
      setup(e, { slots: t }) {
        const r = lu(),
          n = pc()
        let o
        return () => {
          const i = t.default && Ia(t.default(), !0)
          if (!i || !i.length) return
          let a = i[0]
          if (i.length > 1) {
            let w = !1
            for (const J of i)
              if (J.type !== Ze) {
                if (S !== 'production' && w) {
                  K(
                    '<transition> can only be used on a single element or component. Use <transition-group> for lists.'
                  )
                  break
                }
                if (((a = J), (w = !0), !S !== 'production')) break
              }
          }
          const l = Ce(e),
            { mode: q } = l
          if (
            (S !== 'production' &&
              q &&
              q !== 'in-out' &&
              q !== 'out-in' &&
              q !== 'default' &&
              K(`invalid <transition> mode: ${q}`),
            n.isLeaving)
          )
            return ko(a)
          const s = wa(a)
          if (!s) return ko(a)
          const c = Yo(s, l, n, r)
          No(s, c)
          const V = r.subTree,
            A = V && wa(V)
          let C = !1
          const { getTransitionKey: y } = s.type
          if (y) {
            const w = y()
            o === void 0 ? (o = w) : w !== o && ((o = w), (C = !0))
          }
          if (A && A.type !== Ze && (!hr(s, A) || C)) {
            const w = Yo(A, l, n, r)
            if ((No(A, w), q === 'out-in'))
              return (
                (n.isLeaving = !0),
                (w.afterLeave = () => {
                  ;(n.isLeaving = !1), r.update.active !== !1 && r.update()
                }),
                ko(a)
              )
            q === 'in-out' &&
              s.type !== Ze &&
              (w.delayLeave = (J, O, G) => {
                const Y = Ta(n, A)
                ;(Y[String(A.key)] = A),
                  (J._leaveCb = () => {
                    O(), (J._leaveCb = void 0), delete c.delayedLeave
                  }),
                  (c.delayedLeave = G)
              })
          }
          return a
        }
      }
    }
  function Ta(e, t) {
    const { leavingVNodes: r } = e
    let n = r.get(t.type)
    return n || ((n = Object.create(null)), r.set(t.type, n)), n
  }
  function Yo(e, t, r, n) {
    const {
        appear: o,
        mode: i,
        persisted: a = !1,
        onBeforeEnter: l,
        onEnter: q,
        onAfterEnter: s,
        onEnterCancelled: c,
        onBeforeLeave: V,
        onLeave: A,
        onAfterLeave: C,
        onLeaveCancelled: y,
        onBeforeAppear: w,
        onAppear: J,
        onAfterAppear: O,
        onAppearCancelled: G
      } = t,
      Y = String(e.key),
      L = Ta(r, e),
      D = ($, de) => {
        $ && Vt($, n, 9, de)
      },
      qe = ($, de) => {
        const Q = de[1]
        D($, de), se($) ? $.every((le) => le.length <= 1) && Q() : $.length <= 1 && Q()
      },
      Ve = {
        mode: i,
        persisted: a,
        beforeEnter($) {
          let de = l
          if (!r.isMounted)
            if (o) de = w || l
            else return
          $._leaveCb && $._leaveCb(!0)
          const Q = L[Y]
          Q && hr(e, Q) && Q.el._leaveCb && Q.el._leaveCb(), D(de, [$])
        },
        enter($) {
          let de = q,
            Q = s,
            le = c
          if (!r.isMounted)
            if (o) (de = J || q), (Q = O || s), (le = G || c)
            else return
          let z = !1
          const Me = ($._enterCb = (he) => {
            z ||
              ((z = !0),
              he ? D(le, [$]) : D(Q, [$]),
              Ve.delayedLeave && Ve.delayedLeave(),
              ($._enterCb = void 0))
          })
          de ? qe(de, [$, Me]) : Me()
        },
        leave($, de) {
          const Q = String(e.key)
          if (($._enterCb && $._enterCb(!0), r.isUnmounting)) return de()
          D(V, [$])
          let le = !1
          const z = ($._leaveCb = (Me) => {
            le ||
              ((le = !0),
              de(),
              Me ? D(y, [$]) : D(C, [$]),
              ($._leaveCb = void 0),
              L[Q] === e && delete L[Q])
          })
          ;(L[Q] = e), A ? qe(A, [$, z]) : z()
        },
        clone($) {
          return Yo($, t, r, n)
        }
      }
    return Ve
  }
  function ko(e) {
    if ($r(e)) return (e = mt(e)), (e.children = null), e
  }
  function wa(e) {
    return $r(e) ? (e.children ? e.children[0] : void 0) : e
  }
  function No(e, t) {
    e.shapeFlag & 6 && e.component
      ? No(e.component.subTree, t)
      : e.shapeFlag & 128
      ? ((e.ssContent.transition = t.clone(e.ssContent)),
        (e.ssFallback.transition = t.clone(e.ssFallback)))
      : (e.transition = t)
  }
  function Ia(e, t = !1, r) {
    let n = [],
      o = 0
    for (let i = 0; i < e.length; i++) {
      let a = e[i]
      const l = r == null ? a.key : String(r) + String(a.key != null ? a.key : i)
      a.type === Pe
        ? (a.patchFlag & 128 && o++, (n = n.concat(Ia(a.children, t, l))))
        : (t || a.type !== Ze) && n.push(l != null ? mt(a, { key: l }) : a)
    }
    if (o > 1) for (let i = 0; i < n.length; i++) n[i].patchFlag = -2
    return n
  }
  function Re(e, t) {
    return Ae(e) ? (() => be({ name: e.name }, t, { setup: e }))() : e
  }
  const Wr = (e) => !!e.type.__asyncLoader,
    $r = (e) => e.type.__isKeepAlive
  function hc(e, t) {
    Ra(e, 'a', t)
  }
  function mc(e, t) {
    Ra(e, 'da', t)
  }
  function Ra(e, t, r = Ne) {
    const n =
      e.__wdc ||
      (e.__wdc = () => {
        let o = r
        for (; o; ) {
          if (o.isDeactivated) return
          o = o.parent
        }
        return e()
      })
    if ((Ln(t, n, r), r)) {
      let o = r.parent
      for (; o && o.parent; ) $r(o.parent.vnode) && vc(n, t, r, o), (o = o.parent)
    }
  }
  function vc(e, t, r, n) {
    const o = Ln(t, e, n, !0)
    It(() => {
      uo(n[t], o)
    }, r)
  }
  function Ln(e, t, r = Ne, n = !1) {
    if (r) {
      const o = r[e] || (r[e] = []),
        i =
          t.__weh ||
          (t.__weh = (...a) => {
            if (r.isUnmounted) return
            lr(), Fr(r)
            const l = Vt(t, r, e, a)
            return mr(), qr(), l
          })
      return n ? o.unshift(i) : o.push(i), i
    } else if (S !== 'production') {
      const o = ar(Ro[e].replace(/ hook$/, ''))
      K(
        `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
      )
    }
  }
  const Ft =
      (e) =>
      (t, r = Ne) =>
        (!on || e === 'sp') && Ln(e, (...n) => t(...n), r),
    Cc = Ft('bm'),
    wt = Ft('m'),
    Mc = Ft('bu'),
    yc = Ft('u'),
    Da = Ft('bum'),
    It = Ft('um'),
    Sc = Ft('sp'),
    Ec = Ft('rtg'),
    Tc = Ft('rtc')
  function wc(e, t = Ne) {
    Ln('ec', e, t)
  }
  const Po = 'components',
    ba = Symbol.for('v-ndc')
  function Zo(e) {
    return Ge(e) ? Ic(Po, e, !1) || e : e || ba
  }
  function Ic(e, t, r = !0, n = !1) {
    const o = ke || Ne
    if (o) {
      const i = o.type
      if (e === Po) {
        const l = oi(i, !1)
        if (l && (l === t || l === Mt(t) || l === ir(Mt(t)))) return i
      }
      const a = xa(o[e] || i[e], t) || xa(o.appContext[e], t)
      if (!a && n) return i
      if (S !== 'production' && r && !a) {
        const l =
          e === Po
            ? `
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`
            : ''
        K(`Failed to resolve ${e.slice(0, -1)}: ${t}${l}`)
      }
      return a
    } else S !== 'production' && K(`resolve${ir(e.slice(0, -1))} can only be used in render() or setup().`)
  }
  function xa(e, t) {
    return e && (e[t] || e[Mt(t)] || e[ir(Mt(t))])
  }
  function Ba(e, t, r, n) {
    let o
    const i = r && r[n]
    if (se(e) || Ge(e)) {
      o = new Array(e.length)
      for (let a = 0, l = e.length; a < l; a++) o[a] = t(e[a], a, void 0, i && i[a])
    } else if (typeof e == 'number') {
      S !== 'production' &&
        !Number.isInteger(e) &&
        K(`The v-for range expect an integer value but got ${e}.`),
        (o = new Array(e))
      for (let a = 0; a < e; a++) o[a] = t(a + 1, a, void 0, i && i[a])
    } else if (Te(e))
      if (e[Symbol.iterator]) o = Array.from(e, (a, l) => t(a, l, void 0, i && i[l]))
      else {
        const a = Object.keys(e)
        o = new Array(a.length)
        for (let l = 0, q = a.length; l < q; l++) {
          const s = a[l]
          o[l] = t(e[s], s, l, i && i[l])
        }
      }
    else o = []
    return r && (r[n] = o), o
  }
  function ze(e, t, r = {}, n, o) {
    if (ke.isCE || (ke.parent && Wr(ke.parent) && ke.parent.isCE))
      return t !== 'default' && (r.name = t), Se('slot', r, n && n())
    let i = e[t]
    S !== 'production' &&
      i &&
      i.length > 1 &&
      (K(
        'SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template.'
      ),
      (i = () => [])),
      i && i._c && (i._d = !1),
      B()
    const a = i && Ga(i(r)),
      l = Wt(
        Pe,
        { key: r.key || (a && a.key) || `_${t}` },
        a || (n ? n() : []),
        a && e._ === 1 ? 64 : -2
      )
    return !o && l.scopeId && (l.slotScopeIds = [l.scopeId + '-s']), i && i._c && (i._d = !0), l
  }
  function Ga(e) {
    return e.some((t) => (Br(t) ? !(t.type === Ze || (t.type === Pe && !Ga(t.children))) : !0))
      ? e
      : null
  }
  const Ho = (e) => (e ? (is(e) ? Jn(e) || e.proxy : Ho(e.parent)) : null),
    pr = be(Object.create(null), {
      $: (e) => e,
      $el: (e) => e.vnode.el,
      $data: (e) => e.data,
      $props: (e) => (S !== 'production' ? Hr(e.props) : e.props),
      $attrs: (e) => (S !== 'production' ? Hr(e.attrs) : e.attrs),
      $slots: (e) => (S !== 'production' ? Hr(e.slots) : e.slots),
      $refs: (e) => (S !== 'production' ? Hr(e.refs) : e.refs),
      $parent: (e) => Ho(e.parent),
      $root: (e) => Ho(e.root),
      $emit: (e) => e.emit,
      $options: (e) => Ko(e),
      $forceUpdate: (e) => e.f || (e.f = () => Bn(e.update)),
      $nextTick: (e) => e.n || (e.n = Uq.bind(e.proxy)),
      $watch: (e) => Ac.bind(e)
    }),
    Uo = (e) => e === '_' || e === '$',
    jo = (e, t) => e !== Ie && !e.__isScriptSetup && ye(e, t),
    Fa = {
      get({ _: e }, t) {
        const {
          ctx: r,
          setupState: n,
          data: o,
          props: i,
          accessCache: a,
          type: l,
          appContext: q
        } = e
        if (S !== 'production' && t === '__isVue') return !0
        let s
        if (t[0] !== '$') {
          const C = a[t]
          if (C !== void 0)
            switch (C) {
              case 1:
                return n[t]
              case 2:
                return o[t]
              case 4:
                return r[t]
              case 3:
                return i[t]
            }
          else {
            if (jo(n, t)) return (a[t] = 1), n[t]
            if (o !== Ie && ye(o, t)) return (a[t] = 2), o[t]
            if ((s = e.propsOptions[0]) && ye(s, t)) return (a[t] = 3), i[t]
            if (r !== Ie && ye(r, t)) return (a[t] = 4), r[t]
            Jo && (a[t] = 0)
          }
        }
        const c = pr[t]
        let V, A
        if (c)
          return (
            t === '$attrs'
              ? (Ke(e, 'get', t), S !== 'production' && On())
              : S !== 'production' && t === '$slots' && Ke(e, 'get', t),
            c(e)
          )
        if ((V = l.__cssModules) && (V = V[t])) return V
        if (r !== Ie && ye(r, t)) return (a[t] = 4), r[t]
        if (((A = q.config.globalProperties), ye(A, t))) return A[t]
        S !== 'production' &&
          ke &&
          (!Ge(t) || t.indexOf('__v') !== 0) &&
          (o !== Ie && Uo(t[0]) && ye(o, t)
            ? K(
                `Property ${JSON.stringify(
                  t
                )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
              )
            : e === ke &&
              K(
                `Property ${JSON.stringify(
                  t
                )} was accessed during render but is not defined on instance.`
              ))
      },
      set({ _: e }, t, r) {
        const { data: n, setupState: o, ctx: i } = e
        return jo(o, t)
          ? ((o[t] = r), !0)
          : S !== 'production' && o.__isScriptSetup && ye(o, t)
          ? (K(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1)
          : n !== Ie && ye(n, t)
          ? ((n[t] = r), !0)
          : ye(e.props, t)
          ? (S !== 'production' && K(`Attempting to mutate prop "${t}". Props are readonly.`), !1)
          : t[0] === '$' && t.slice(1) in e
          ? (S !== 'production' &&
              K(
                `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
              ),
            !1)
          : (S !== 'production' && t in e.appContext.config.globalProperties
              ? Object.defineProperty(i, t, { enumerable: !0, configurable: !0, value: r })
              : (i[t] = r),
            !0)
      },
      has(
        { _: { data: e, setupState: t, accessCache: r, ctx: n, appContext: o, propsOptions: i } },
        a
      ) {
        let l
        return (
          !!r[a] ||
          (e !== Ie && ye(e, a)) ||
          jo(t, a) ||
          ((l = i[0]) && ye(l, a)) ||
          ye(n, a) ||
          ye(pr, a) ||
          ye(o.config.globalProperties, a)
        )
      },
      defineProperty(e, t, r) {
        return (
          r.get != null
            ? (e._.accessCache[t] = 0)
            : ye(r, 'value') && this.set(e, t, r.value, null),
          Reflect.defineProperty(e, t, r)
        )
      }
    }
  S !== 'production' &&
    (Fa.ownKeys = (e) => (
      K(
        'Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.'
      ),
      Reflect.ownKeys(e)
    ))
  function Rc(e) {
    const t = {}
    return (
      Object.defineProperty(t, '_', { configurable: !0, enumerable: !1, get: () => e }),
      Object.keys(pr).forEach((r) => {
        Object.defineProperty(t, r, {
          configurable: !0,
          enumerable: !1,
          get: () => pr[r](e),
          set: Je
        })
      }),
      t
    )
  }
  function Dc(e) {
    const {
      ctx: t,
      propsOptions: [r]
    } = e
    r &&
      Object.keys(r).forEach((n) => {
        Object.defineProperty(t, n, {
          enumerable: !0,
          configurable: !0,
          get: () => e.props[n],
          set: Je
        })
      })
  }
  function bc(e) {
    const { ctx: t, setupState: r } = e
    Object.keys(Ce(r)).forEach((n) => {
      if (!r.__isScriptSetup) {
        if (Uo(n[0])) {
          K(
            `setup() return property ${JSON.stringify(
              n
            )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
          )
          return
        }
        Object.defineProperty(t, n, { enumerable: !0, configurable: !0, get: () => r[n], set: Je })
      }
    })
  }
  function Oa(e) {
    return se(e) ? e.reduce((t, r) => ((t[r] = null), t), {}) : e
  }
  function xc() {
    const e = Object.create(null)
    return (t, r) => {
      e[r] ? K(`${t} property "${r}" is already defined in ${e[r]}.`) : (e[r] = t)
    }
  }
  let Jo = !0
  function Bc(e) {
    const t = Ko(e),
      r = e.proxy,
      n = e.ctx
    ;(Jo = !1), t.beforeCreate && Qa(t.beforeCreate, e, 'bc')
    const {
        data: o,
        computed: i,
        methods: a,
        watch: l,
        provide: q,
        inject: s,
        created: c,
        beforeMount: V,
        mounted: A,
        beforeUpdate: C,
        updated: y,
        activated: w,
        deactivated: J,
        beforeDestroy: O,
        beforeUnmount: G,
        destroyed: Y,
        unmounted: L,
        render: D,
        renderTracked: qe,
        renderTriggered: Ve,
        errorCaptured: $,
        serverPrefetch: de,
        expose: Q,
        inheritAttrs: le,
        components: z,
        directives: Me,
        filters: he
      } = t,
      we = S !== 'production' ? xc() : null
    if (S !== 'production') {
      const [fe] = e.propsOptions
      if (fe) for (const ce in fe) we('Props', ce)
    }
    if ((s && Gc(s, n, we), a))
      for (const fe in a) {
        const ce = a[fe]
        Ae(ce)
          ? (S !== 'production'
              ? Object.defineProperty(n, fe, {
                  value: ce.bind(r),
                  configurable: !0,
                  enumerable: !0,
                  writable: !0
                })
              : (n[fe] = ce.bind(r)),
            S !== 'production' && we('Methods', fe))
          : S !== 'production' &&
            K(
              `Method "${fe}" has type "${typeof ce}" in the component definition. Did you reference the function correctly?`
            )
      }
    if (o) {
      S !== 'production' &&
        !Ae(o) &&
        K('The data option must be a function. Plain object usage is no longer supported.')
      const fe = o.call(r, r)
      if (
        (S !== 'production' &&
          fo(fe) &&
          K(
            'data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.'
          ),
        !Te(fe))
      )
        S !== 'production' && K('data() should return an object.')
      else if (((e.data = To(fe)), S !== 'production'))
        for (const ce in fe)
          we('Data', ce),
            Uo(ce[0]) ||
              Object.defineProperty(n, ce, {
                configurable: !0,
                enumerable: !0,
                get: () => fe[ce],
                set: Je
              })
    }
    if (((Jo = !0), i))
      for (const fe in i) {
        const ce = i[fe],
          $e = Ae(ce) ? ce.bind(r, r) : Ae(ce.get) ? ce.get.bind(r, r) : Je
        S !== 'production' && $e === Je && K(`Computed property "${fe}" has no getter.`)
        const Nt =
            !Ae(ce) && Ae(ce.set)
              ? ce.set.bind(r)
              : S !== 'production'
              ? () => {
                  K(`Write operation failed: computed property "${fe}" is readonly.`)
                }
              : Je,
          lt = ee({ get: $e, set: Nt })
        Object.defineProperty(n, fe, {
          enumerable: !0,
          configurable: !0,
          get: () => lt.value,
          set: (Ue) => (lt.value = Ue)
        }),
          S !== 'production' && we('Computed', fe)
      }
    if (l) for (const fe in l) La(l[fe], n, r, fe)
    if (q) {
      const fe = Ae(q) ? q.call(r) : q
      Reflect.ownKeys(fe).forEach((ce) => {
        Nn(ce, fe[ce])
      })
    }
    c && Qa(c, e, 'c')
    function De(fe, ce) {
      se(ce) ? ce.forEach(($e) => fe($e.bind(r))) : ce && fe(ce.bind(r))
    }
    if (
      (De(Cc, V),
      De(wt, A),
      De(Mc, C),
      De(yc, y),
      De(hc, w),
      De(mc, J),
      De(wc, $),
      De(Tc, qe),
      De(Ec, Ve),
      De(Da, G),
      De(It, L),
      De(Sc, de),
      se(Q))
    )
      if (Q.length) {
        const fe = e.exposed || (e.exposed = {})
        Q.forEach((ce) => {
          Object.defineProperty(fe, ce, { get: () => r[ce], set: ($e) => (r[ce] = $e) })
        })
      } else e.exposed || (e.exposed = {})
    D && e.render === Je && (e.render = D),
      le != null && (e.inheritAttrs = le),
      z && (e.components = z),
      Me && (e.directives = Me)
  }
  function Gc(e, t, r = Je) {
    se(e) && (e = zo(e))
    for (const n in e) {
      const o = e[n]
      let i
      Te(o)
        ? 'default' in o
          ? (i = re(o.from || n, o.default, !0))
          : (i = re(o.from || n))
        : (i = re(o)),
        Ye(i)
          ? Object.defineProperty(t, n, {
              enumerable: !0,
              configurable: !0,
              get: () => i.value,
              set: (a) => (i.value = a)
            })
          : (t[n] = i),
        S !== 'production' && r('Inject', n)
    }
  }
  function Qa(e, t, r) {
    Vt(se(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
  }
  function La(e, t, r, n) {
    const o = n.includes('.') ? ya(r, n) : () => r[n]
    if (Ge(e)) {
      const i = t[e]
      Ae(i) ? Gt(o, i) : S !== 'production' && K(`Invalid watch handler specified by key "${e}"`, i)
    } else if (Ae(e)) Gt(o, e.bind(r))
    else if (Te(e))
      if (se(e)) e.forEach((i) => La(i, t, r, n))
      else {
        const i = Ae(e.handler) ? e.handler.bind(r) : t[e.handler]
        Ae(i)
          ? Gt(o, i, e)
          : S !== 'production' && K(`Invalid watch handler specified by key "${e.handler}"`, i)
      }
    else S !== 'production' && K(`Invalid watch option: "${n}"`, e)
  }
  function Ko(e) {
    const t = e.type,
      { mixins: r, extends: n } = t,
      {
        mixins: o,
        optionsCache: i,
        config: { optionMergeStrategies: a }
      } = e.appContext,
      l = i.get(t)
    let q
    return (
      l
        ? (q = l)
        : !o.length && !r && !n
        ? (q = t)
        : ((q = {}), o.length && o.forEach((s) => Yn(q, s, a, !0)), Yn(q, t, a)),
      Te(t) && i.set(t, q),
      q
    )
  }
  function Yn(e, t, r, n = !1) {
    const { mixins: o, extends: i } = t
    i && Yn(e, i, r, !0), o && o.forEach((a) => Yn(e, a, r, !0))
    for (const a in t)
      if (n && a === 'expose')
        S !== 'production' &&
          K(
            '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
          )
      else {
        const l = Fc[a] || (r && r[a])
        e[a] = l ? l(e[a], t[a]) : t[a]
      }
    return e
  }
  const Fc = {
    data: Ya,
    props: ka,
    emits: ka,
    methods: Xr,
    computed: Xr,
    beforeCreate: it,
    created: it,
    beforeMount: it,
    mounted: it,
    beforeUpdate: it,
    updated: it,
    beforeDestroy: it,
    beforeUnmount: it,
    destroyed: it,
    unmounted: it,
    activated: it,
    deactivated: it,
    errorCaptured: it,
    serverPrefetch: it,
    components: Xr,
    directives: Xr,
    watch: Qc,
    provide: Ya,
    inject: Oc
  }
  function Ya(e, t) {
    return t
      ? e
        ? function () {
            return be(Ae(e) ? e.call(this, this) : e, Ae(t) ? t.call(this, this) : t)
          }
        : t
      : e
  }
  function Oc(e, t) {
    return Xr(zo(e), zo(t))
  }
  function zo(e) {
    if (se(e)) {
      const t = {}
      for (let r = 0; r < e.length; r++) t[e[r]] = e[r]
      return t
    }
    return e
  }
  function it(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
  }
  function Xr(e, t) {
    return e ? be(Object.create(null), e, t) : t
  }
  function ka(e, t) {
    return e
      ? se(e) && se(t)
        ? [...new Set([...e, ...t])]
        : be(Object.create(null), Oa(e), Oa(t ?? {}))
      : t
  }
  function Qc(e, t) {
    if (!e) return t
    if (!t) return e
    const r = be(Object.create(null), e)
    for (const n in t) r[n] = it(e[n], t[n])
    return r
  }
  function Na() {
    return {
      app: null,
      config: {
        isNativeTag: Ri,
        performance: !1,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: Object.create(null),
      optionsCache: new WeakMap(),
      propsCache: new WeakMap(),
      emitsCache: new WeakMap()
    }
  }
  let Lc = 0
  function Yc(e, t) {
    return function (n, o = null) {
      Ae(n) || (n = be({}, n)),
        o != null &&
          !Te(o) &&
          (S !== 'production' && K('root props passed to app.mount() must be an object.'),
          (o = null))
      const i = Na()
      S !== 'production' &&
        Object.defineProperty(i.config, 'unwrapInjectedRef', {
          get() {
            return !0
          },
          set() {
            K(
              'app.config.unwrapInjectedRef has been deprecated. 3.3 now alawys unwraps injected refs in Options API.'
            )
          }
        })
      const a = new Set()
      let l = !1
      const q = (i.app = {
        _uid: Lc++,
        _component: n,
        _props: o,
        _container: null,
        _context: i,
        _instance: null,
        version: us,
        get config() {
          return i.config
        },
        set config(s) {
          S !== 'production' &&
            K('app.config cannot be replaced. Modify individual options instead.')
        },
        use(s, ...c) {
          return (
            a.has(s)
              ? S !== 'production' && K('Plugin has already been applied to target app.')
              : s && Ae(s.install)
              ? (a.add(s), s.install(q, ...c))
              : Ae(s)
              ? (a.add(s), s(q, ...c))
              : S !== 'production' &&
                K('A plugin must either be a function or an object with an "install" function.'),
            q
          )
        },
        mixin(s) {
          return (
            i.mixins.includes(s)
              ? S !== 'production' &&
                K('Mixin has already been applied to target app' + (s.name ? `: ${s.name}` : ''))
              : i.mixins.push(s),
            q
          )
        },
        component(s, c) {
          return (
            S !== 'production' && ri(s, i.config),
            c
              ? (S !== 'production' &&
                  i.components[s] &&
                  K(`Component "${s}" has already been registered in target app.`),
                (i.components[s] = c),
                q)
              : i.components[s]
          )
        },
        directive(s, c) {
          return (
            S !== 'production' && Sa(s),
            c
              ? (S !== 'production' &&
                  i.directives[s] &&
                  K(`Directive "${s}" has already been registered in target app.`),
                (i.directives[s] = c),
                q)
              : i.directives[s]
          )
        },
        mount(s, c, V) {
          if (l)
            S !== 'production' &&
              K(
                'App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`'
              )
          else {
            S !== 'production' &&
              s.__vue_app__ &&
              K(
                'There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first.'
              )
            const A = Se(n, o)
            return (
              (A.appContext = i),
              S !== 'production' &&
                (i.reload = () => {
                  e(mt(A), s, V)
                }),
              c && t ? t(A, s) : e(A, s, V),
              (l = !0),
              (q._container = s),
              (s.__vue_app__ = q),
              S !== 'production' && ((q._instance = A.component), Xq(q, us)),
              Jn(A.component) || A.component.proxy
            )
          }
        },
        unmount() {
          l
            ? (e(null, q._container),
              S !== 'production' && ((q._instance = null), ec(q)),
              delete q._container.__vue_app__)
            : S !== 'production' && K('Cannot unmount an app that is not mounted.')
        },
        provide(s, c) {
          return (
            S !== 'production' &&
              s in i.provides &&
              K(
                `App already provides property with key "${String(
                  s
                )}". It will be overwritten with the new value.`
              ),
            (i.provides[s] = c),
            q
          )
        },
        runWithContext(s) {
          kn = q
          try {
            return s()
          } finally {
            kn = null
          }
        }
      })
      return q
    }
  }
  let kn = null
  function Nn(e, t) {
    if (!Ne) S !== 'production' && K('provide() can only be used inside setup().')
    else {
      let r = Ne.provides
      const n = Ne.parent && Ne.parent.provides
      n === r && (r = Ne.provides = Object.create(n)), (r[e] = t)
    }
  }
  function re(e, t, r = !1) {
    const n = Ne || ke
    if (n || kn) {
      const o = n
        ? n.parent == null
          ? n.vnode.appContext && n.vnode.appContext.provides
          : n.parent.provides
        : kn._context.provides
      if (o && e in o) return o[e]
      if (arguments.length > 1) return r && Ae(t) ? t.call(n && n.proxy) : t
      S !== 'production' && K(`injection "${String(e)}" not found.`)
    } else S !== 'production' && K('inject() can only be used inside setup() or functional components.')
  }
  function kc(e, t, r, n = !1) {
    const o = {},
      i = {}
    hn(i, Un, 1), (e.propsDefaults = Object.create(null)), Pa(e, t, o, i)
    for (const a in e.propsOptions[0]) a in o || (o[a] = void 0)
    S !== 'production' && Ja(t || {}, o, e),
      r ? (e.props = n ? o : xq(o)) : e.type.props ? (e.props = o) : (e.props = i),
      (e.attrs = i)
  }
  function Nc(e) {
    for (; e; ) {
      if (e.type.__hmrId) return !0
      e = e.parent
    }
  }
  function Pc(e, t, r, n) {
    const {
        props: o,
        attrs: i,
        vnode: { patchFlag: a }
      } = e,
      l = Ce(o),
      [q] = e.propsOptions
    let s = !1
    if (!(S !== 'production' && Nc(e)) && (n || a > 0) && !(a & 16)) {
      if (a & 8) {
        const c = e.vnode.dynamicProps
        for (let V = 0; V < c.length; V++) {
          let A = c[V]
          if (Gn(e.emitsOptions, A)) continue
          const C = t[A]
          if (q)
            if (ye(i, A)) C !== i[A] && ((i[A] = C), (s = !0))
            else {
              const y = Mt(A)
              o[y] = _o(q, l, y, C, e, !1)
            }
          else C !== i[A] && ((i[A] = C), (s = !0))
        }
      }
    } else {
      Pa(e, t, o, i) && (s = !0)
      let c
      for (const V in l)
        (!t || (!ye(t, V) && ((c = Ht(V)) === V || !ye(t, c)))) &&
          (q
            ? r && (r[V] !== void 0 || r[c] !== void 0) && (o[V] = _o(q, l, V, void 0, e, !0))
            : delete o[V])
      if (i !== l) for (const V in i) (!t || !ye(t, V)) && (delete i[V], (s = !0))
    }
    s && yt(e, 'set', '$attrs'), S !== 'production' && Ja(t || {}, o, e)
  }
  function Pa(e, t, r, n) {
    const [o, i] = e.propsOptions
    let a = !1,
      l
    if (t)
      for (let q in t) {
        if (pn(q)) continue
        const s = t[q]
        let c
        o && ye(o, (c = Mt(q)))
          ? !i || !i.includes(c)
            ? (r[c] = s)
            : ((l || (l = {}))[c] = s)
          : Gn(e.emitsOptions, q) || ((!(q in n) || s !== n[q]) && ((n[q] = s), (a = !0)))
      }
    if (i) {
      const q = Ce(r),
        s = l || Ie
      for (let c = 0; c < i.length; c++) {
        const V = i[c]
        r[V] = _o(o, q, V, s[V], e, !ye(s, V))
      }
    }
    return a
  }
  function _o(e, t, r, n, o, i) {
    const a = e[r]
    if (a != null) {
      const l = ye(a, 'default')
      if (l && n === void 0) {
        const q = a.default
        if (a.type !== Function && !a.skipFactory && Ae(q)) {
          const { propsDefaults: s } = o
          r in s ? (n = s[r]) : (Fr(o), (n = s[r] = q.call(null, t)), mr())
        } else n = q
      }
      a[0] && (i && !l ? (n = !1) : a[1] && (n === '' || n === Ht(r)) && (n = !0))
    }
    return n
  }
  function Za(e, t, r = !1) {
    const n = t.propsCache,
      o = n.get(e)
    if (o) return o
    const i = e.props,
      a = {},
      l = []
    let q = !1
    if (!Ae(e)) {
      const c = (V) => {
        q = !0
        const [A, C] = Za(V, t, !0)
        be(a, A), C && l.push(...C)
      }
      !r && t.mixins.length && t.mixins.forEach(c),
        e.extends && c(e.extends),
        e.mixins && e.mixins.forEach(c)
    }
    if (!i && !q) return Te(e) && n.set(e, wr), wr
    if (se(i))
      for (let c = 0; c < i.length; c++) {
        S !== 'production' && !Ge(i[c]) && K('props must be strings when using array syntax.', i[c])
        const V = Mt(i[c])
        Ha(V) && (a[V] = Ie)
      }
    else if (i) {
      S !== 'production' && !Te(i) && K('invalid props options', i)
      for (const c in i) {
        const V = Mt(c)
        if (Ha(V)) {
          const A = i[c],
            C = (a[V] = se(A) || Ae(A) ? { type: A } : be({}, A))
          if (C) {
            const y = ja(Boolean, C.type),
              w = ja(String, C.type)
            ;(C[0] = y > -1), (C[1] = w < 0 || y < w), (y > -1 || ye(C, 'default')) && l.push(V)
          }
        }
      }
    }
    const s = [a, l]
    return Te(e) && n.set(e, s), s
  }
  function Ha(e) {
    return e[0] !== '$'
      ? !0
      : (S !== 'production' && K(`Invalid prop name: "${e}" is a reserved property.`), !1)
  }
  function Wo(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/)
    return t ? t[2] : e === null ? 'null' : ''
  }
  function Ua(e, t) {
    return Wo(e) === Wo(t)
  }
  function ja(e, t) {
    return se(t) ? t.findIndex((r) => Ua(r, e)) : Ae(t) && Ua(t, e) ? 0 : -1
  }
  function Ja(e, t, r) {
    const n = Ce(t),
      o = r.propsOptions[0]
    for (const i in o) {
      let a = o[i]
      a != null && Zc(i, n[i], a, !ye(e, i) && !ye(e, Ht(i)))
    }
  }
  function Zc(e, t, r, n) {
    const { type: o, required: i, validator: a, skipCheck: l } = r
    if (i && n) {
      K('Missing required prop: "' + e + '"')
      return
    }
    if (!(t == null && !i)) {
      if (o != null && o !== !0 && !l) {
        let q = !1
        const s = se(o) ? o : [o],
          c = []
        for (let V = 0; V < s.length && !q; V++) {
          const { valid: A, expectedType: C } = Uc(t, s[V])
          c.push(C || ''), (q = A)
        }
        if (!q) {
          K(jc(e, t, c))
          return
        }
      }
      a && !a(t) && K('Invalid prop: custom validator check failed for prop "' + e + '".')
    }
  }
  const Hc = Zt('String,Number,Boolean,Function,Symbol,BigInt')
  function Uc(e, t) {
    let r
    const n = Wo(t)
    if (Hc(n)) {
      const o = typeof e
      ;(r = o === n.toLowerCase()), !r && o === 'object' && (r = e instanceof t)
    } else n === 'Object' ? (r = Te(e)) : n === 'Array' ? (r = se(e)) : n === 'null' ? (r = e === null) : (r = e instanceof t)
    return { valid: r, expectedType: n }
  }
  function jc(e, t, r) {
    let n = `Invalid prop: type check failed for prop "${e}". Expected ${r.map(ir).join(' | ')}`
    const o = r[0],
      i = Ao(t),
      a = Ka(t, o),
      l = Ka(t, i)
    return (
      r.length === 1 && za(o) && !Jc(o, i) && (n += ` with value ${a}`),
      (n += `, got ${i} `),
      za(i) && (n += `with value ${l}.`),
      n
    )
  }
  function Ka(e, t) {
    return t === 'String' ? `"${e}"` : t === 'Number' ? `${Number(e)}` : `${e}`
  }
  function za(e) {
    return ['string', 'number', 'boolean'].some((r) => e.toLowerCase() === r)
  }
  function Jc(...e) {
    return e.some((t) => t.toLowerCase() === 'boolean')
  }
  const _a = (e) => e[0] === '_' || e === '$stable',
    $o = (e) => (se(e) ? e.map(vt) : [vt(e)]),
    Kc = (e, t, r) => {
      if (t._n) return t
      const n = xr(
        (...o) => (
          S !== 'production' &&
            Ne &&
            K(
              `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
            ),
          $o(t(...o))
        ),
        r
      )
      return (n._c = !1), n
    },
    Wa = (e, t, r) => {
      const n = e._ctx
      for (const o in e) {
        if (_a(o)) continue
        const i = e[o]
        if (Ae(i)) t[o] = Kc(o, i, n)
        else if (i != null) {
          S !== 'production' &&
            K(
              `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
            )
          const a = $o(i)
          t[o] = () => a
        }
      }
    },
    $a = (e, t) => {
      S !== 'production' &&
        !$r(e.vnode) &&
        K(
          'Non-function value encountered for default slot. Prefer function slots for better performance.'
        )
      const r = $o(t)
      e.slots.default = () => r
    },
    zc = (e, t) => {
      if (e.vnode.shapeFlag & 32) {
        const r = t._
        r ? ((e.slots = Ce(t)), hn(t, '_', r)) : Wa(t, (e.slots = {}))
      } else (e.slots = {}), t && $a(e, t)
      hn(e.slots, Un, 1)
    },
    _c = (e, t, r) => {
      const { vnode: n, slots: o } = e
      let i = !0,
        a = Ie
      if (n.shapeFlag & 32) {
        const l = t._
        l
          ? S !== 'production' && Vr
            ? (be(o, t), yt(e, 'set', '$slots'))
            : r && l === 1
            ? (i = !1)
            : (be(o, t), !r && l === 1 && delete o._)
          : ((i = !t.$stable), Wa(t, o)),
          (a = t)
      } else t && ($a(e, t), (a = { default: 1 }))
      if (i) for (const l in o) !_a(l) && !(l in a) && delete o[l]
    }
  function Xo(e, t, r, n, o = !1) {
    if (se(e)) {
      e.forEach((A, C) => Xo(A, t && (se(t) ? t[C] : t), r, n, o))
      return
    }
    if (Wr(n) && !o) return
    const i = n.shapeFlag & 4 ? Jn(n.component) || n.component.proxy : n.el,
      a = o ? null : i,
      { i: l, r: q } = e
    if (S !== 'production' && !l) {
      K(
        'Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.'
      )
      return
    }
    const s = t && t.r,
      c = l.refs === Ie ? (l.refs = {}) : l.refs,
      V = l.setupState
    if (
      (s != null &&
        s !== q &&
        (Ge(s) ? ((c[s] = null), ye(V, s) && (V[s] = null)) : Ye(s) && (s.value = null)),
      Ae(q))
    )
      Bt(q, l, 12, [a, c])
    else {
      const A = Ge(q),
        C = Ye(q)
      if (A || C) {
        const y = () => {
          if (e.f) {
            const w = A ? (ye(V, q) ? V[q] : c[q]) : q.value
            o
              ? se(w) && uo(w, i)
              : se(w)
              ? w.includes(i) || w.push(i)
              : A
              ? ((c[q] = [i]), ye(V, q) && (V[q] = c[q]))
              : ((q.value = [i]), e.k && (c[e.k] = q.value))
          } else
            A
              ? ((c[q] = a), ye(V, q) && (V[q] = a))
              : C
              ? ((q.value = a), e.k && (c[e.k] = a))
              : S !== 'production' && K('Invalid template ref type:', q, `(${typeof q})`)
        }
        a ? ((y.id = -1), at(y, r)) : y()
      } else S !== 'production' && K('Invalid template ref type:', q, `(${typeof q})`)
    }
  }
  let en, _t
  function Ot(e, t) {
    e.appContext.config.performance && Pn() && _t.mark(`vue-${t}-${e.uid}`),
      S !== 'production' && oc(e, t, Pn() ? _t.now() : Date.now())
  }
  function Qt(e, t) {
    if (e.appContext.config.performance && Pn()) {
      const r = `vue-${t}-${e.uid}`,
        n = r + ':end'
      _t.mark(n), _t.measure(`<${Kn(e, e.type)}> ${t}`, r, n), _t.clearMarks(r), _t.clearMarks(n)
    }
    S !== 'production' && ic(e, t, Pn() ? _t.now() : Date.now())
  }
  function Pn() {
    return (
      en !== void 0 ||
        (typeof window < 'u' && window.performance
          ? ((en = !0), (_t = window.performance))
          : (en = !1)),
      en
    )
  }
  function Wc() {
    const e = []
    if (S !== 'production' && e.length) {
      const t = e.length > 1
      console.warn(`Feature flag${t ? 's' : ''} ${e.join(', ')} ${
        t ? 'are' : 'is'
      } not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`)
    }
  }
  const at = fc
  function $c(e) {
    return Xc(e)
  }
  function Xc(e, t) {
    Wc()
    const r = mn()
    ;(r.__VUE__ = !0), S !== 'production' && Aa(r.__VUE_DEVTOOLS_GLOBAL_HOOK__, r)
    const {
        insert: n,
        remove: o,
        patchProp: i,
        createElement: a,
        createText: l,
        createComment: q,
        setText: s,
        setElementText: c,
        parentNode: V,
        nextSibling: A,
        setScopeId: C = Je,
        insertStaticContent: y
      } = e,
      w = (
        h,
        E,
        R,
        N = null,
        k = null,
        Z = null,
        te = !1,
        U = null,
        W = S !== 'production' && Vr ? !1 : !!E.dynamicChildren
      ) => {
        if (h === E) return
        h && !hr(h, E) && ((N = ut(h)), nt(h, k, Z, !0), (h = null)),
          E.patchFlag === -2 && ((W = !1), (E.dynamicChildren = null))
        const { type: H, ref: ie, shapeFlag: d } = E
        switch (H) {
          case tn:
            J(h, E, R, N)
            break
          case Ze:
            O(h, E, R, N)
            break
          case Hn:
            h == null ? G(E, R, N, te) : S !== 'production' && Y(h, E, R, te)
            break
          case Pe:
            Me(h, E, R, N, k, Z, te, U, W)
            break
          default:
            d & 1
              ? qe(h, E, R, N, k, Z, te, U, W)
              : d & 6
              ? he(h, E, R, N, k, Z, te, U, W)
              : d & 64 || d & 128
              ? H.process(h, E, R, N, k, Z, te, U, W, je)
              : S !== 'production' && K('Invalid VNode type:', H, `(${typeof H})`)
        }
        ie != null && k && Xo(ie, h && h.ref, Z, E || h, !E)
      },
      J = (h, E, R, N) => {
        if (h == null) n((E.el = l(E.children)), R, N)
        else {
          const k = (E.el = h.el)
          E.children !== h.children && s(k, E.children)
        }
      },
      O = (h, E, R, N) => {
        h == null ? n((E.el = q(E.children || '')), R, N) : (E.el = h.el)
      },
      G = (h, E, R, N) => {
        ;[h.el, h.anchor] = y(h.children, E, R, N, h.el, h.anchor)
      },
      Y = (h, E, R, N) => {
        if (E.children !== h.children) {
          const k = A(h.anchor)
          D(h), ([E.el, E.anchor] = y(E.children, R, k, N))
        } else (E.el = h.el), (E.anchor = h.anchor)
      },
      L = ({ el: h, anchor: E }, R, N) => {
        let k
        for (; h && h !== E; ) (k = A(h)), n(h, R, N), (h = k)
        n(E, R, N)
      },
      D = ({ el: h, anchor: E }) => {
        let R
        for (; h && h !== E; ) (R = A(h)), o(h), (h = R)
        o(E)
      },
      qe = (h, E, R, N, k, Z, te, U, W) => {
        ;(te = te || E.type === 'svg'),
          h == null ? Ve(E, R, N, k, Z, te, U, W) : Q(h, E, k, Z, te, U, W)
      },
      Ve = (h, E, R, N, k, Z, te, U) => {
        let W, H
        const { type: ie, props: d, shapeFlag: p, transition: g, dirs: m } = h
        if (
          ((W = h.el = a(h.type, Z, d && d.is, d)),
          p & 8
            ? c(W, h.children)
            : p & 16 && de(h.children, W, null, N, k, Z && ie !== 'foreignObject', te, U),
          m && Ar(h, null, N, 'created'),
          $(W, h, h.scopeId, te, N),
          d)
        ) {
          for (const b in d) b !== 'value' && !pn(b) && i(W, b, null, d[b], Z, h.children, N, k, ct)
          'value' in d && i(W, 'value', null, d.value), (H = d.onVnodeBeforeMount) && Rt(H, N, h)
        }
        S !== 'production' &&
          (Object.defineProperty(W, '__vnode', { value: h, enumerable: !1 }),
          Object.defineProperty(W, '__vueParentComponent', { value: N, enumerable: !1 })),
          m && Ar(h, null, N, 'beforeMount')
        const f = (!k || (k && !k.pendingBranch)) && g && !g.persisted
        f && g.beforeEnter(W),
          n(W, E, R),
          ((H = d && d.onVnodeMounted) || f || m) &&
            at(() => {
              H && Rt(H, N, h), f && g.enter(W), m && Ar(h, null, N, 'mounted')
            }, k)
      },
      $ = (h, E, R, N, k) => {
        if ((R && C(h, R), N)) for (let Z = 0; Z < N.length; Z++) C(h, N[Z])
        if (k) {
          let Z = k.subTree
          if (
            (S !== 'production' &&
              Z.patchFlag > 0 &&
              Z.patchFlag & 2048 &&
              (Z = va(Z.children) || Z),
            E === Z)
          ) {
            const te = k.vnode
            $(h, te, te.scopeId, te.slotScopeIds, k.parent)
          }
        }
      },
      de = (h, E, R, N, k, Z, te, U, W = 0) => {
        for (let H = W; H < h.length; H++) {
          const ie = (h[H] = U ? $t(h[H]) : vt(h[H]))
          w(null, ie, E, R, N, k, Z, te, U)
        }
      },
      Q = (h, E, R, N, k, Z, te) => {
        const U = (E.el = h.el)
        let { patchFlag: W, dynamicChildren: H, dirs: ie } = E
        W |= h.patchFlag & 16
        const d = h.props || Ie,
          p = E.props || Ie
        let g
        R && gr(R, !1),
          (g = p.onVnodeBeforeUpdate) && Rt(g, R, E, h),
          ie && Ar(E, h, R, 'beforeUpdate'),
          R && gr(R, !0),
          S !== 'production' && Vr && ((W = 0), (te = !1), (H = null))
        const m = k && E.type !== 'foreignObject'
        if (
          (H
            ? (le(h.dynamicChildren, H, U, R, N, m, Z), S !== 'production' && Zn(h, E))
            : te || $e(h, E, U, null, R, N, m, Z, !1),
          W > 0)
        ) {
          if (W & 16) z(U, E, d, p, R, N, k)
          else if (
            (W & 2 && d.class !== p.class && i(U, 'class', null, p.class, k),
            W & 4 && i(U, 'style', d.style, p.style, k),
            W & 8)
          ) {
            const f = E.dynamicProps
            for (let b = 0; b < f.length; b++) {
              const v = f[b],
                x = d[v],
                I = p[v]
              ;(I !== x || v === 'value') && i(U, v, x, I, k, h.children, R, N, ct)
            }
          }
          W & 1 && h.children !== E.children && c(U, E.children)
        } else !te && H == null && z(U, E, d, p, R, N, k)
        ;((g = p.onVnodeUpdated) || ie) &&
          at(() => {
            g && Rt(g, R, E, h), ie && Ar(E, h, R, 'updated')
          }, N)
      },
      le = (h, E, R, N, k, Z, te) => {
        for (let U = 0; U < E.length; U++) {
          const W = h[U],
            H = E[U],
            ie = W.el && (W.type === Pe || !hr(W, H) || W.shapeFlag & 70) ? V(W.el) : R
          w(W, H, ie, null, N, k, Z, te, !0)
        }
      },
      z = (h, E, R, N, k, Z, te) => {
        if (R !== N) {
          if (R !== Ie)
            for (const U in R) !pn(U) && !(U in N) && i(h, U, R[U], null, te, E.children, k, Z, ct)
          for (const U in N) {
            if (pn(U)) continue
            const W = N[U],
              H = R[U]
            W !== H && U !== 'value' && i(h, U, H, W, te, E.children, k, Z, ct)
          }
          'value' in N && i(h, 'value', R.value, N.value)
        }
      },
      Me = (h, E, R, N, k, Z, te, U, W) => {
        const H = (E.el = h ? h.el : l('')),
          ie = (E.anchor = h ? h.anchor : l(''))
        let { patchFlag: d, dynamicChildren: p, slotScopeIds: g } = E
        S !== 'production' && (Vr || d & 2048) && ((d = 0), (W = !1), (p = null)),
          g && (U = U ? U.concat(g) : g),
          h == null
            ? (n(H, R, N), n(ie, R, N), de(E.children, R, ie, k, Z, te, U, W))
            : d > 0 && d & 64 && p && h.dynamicChildren
            ? (le(h.dynamicChildren, p, R, k, Z, te, U),
              S !== 'production'
                ? Zn(h, E)
                : (E.key != null || (k && E === k.subTree)) && Zn(h, E, !0))
            : $e(h, E, R, ie, k, Z, te, U, W)
      },
      he = (h, E, R, N, k, Z, te, U, W) => {
        ;(E.slotScopeIds = U),
          h == null
            ? E.shapeFlag & 512
              ? k.ctx.activate(E, R, N, te, W)
              : we(E, R, N, k, Z, te, W)
            : De(h, E, W)
      },
      we = (h, E, R, N, k, Z, te) => {
        const U = (h.component = su(h, N, k))
        if (
          (S !== 'production' && U.type.__hmrId && zq(U),
          S !== 'production' && (Dn(h), Ot(U, 'mount')),
          $r(h) && (U.ctx.renderer = je),
          S !== 'production' && Ot(U, 'init'),
          cu(U),
          S !== 'production' && Qt(U, 'init'),
          U.asyncDep)
        ) {
          if ((k && k.registerDep(U, fe), !h.el)) {
            const W = (U.subTree = Se(Ze))
            O(null, W, E, R)
          }
          return
        }
        fe(U, h, E, R, k, Z, te), S !== 'production' && (bn(), Qt(U, 'mount'))
      },
      De = (h, E, R) => {
        const N = (E.component = h.component)
        if (uc(h, E, R))
          if (N.asyncDep && !N.asyncResolved) {
            S !== 'production' && Dn(E), ce(N, E, R), S !== 'production' && bn()
            return
          } else (N.next = E), Jq(N.update), N.update()
        else (E.el = h.el), (N.vnode = E)
      },
      fe = (h, E, R, N, k, Z, te) => {
        const U = () => {
            if (h.isMounted) {
              let { next: ie, bu: d, u: p, parent: g, vnode: m } = h,
                f = ie,
                b
              S !== 'production' && Dn(ie || h.vnode),
                gr(h, !1),
                ie ? ((ie.el = m.el), ce(h, ie, te)) : (ie = m),
                d && Ir(d),
                (b = ie.props && ie.props.onVnodeBeforeUpdate) && Rt(b, g, ie, m),
                gr(h, !0),
                S !== 'production' && Ot(h, 'render')
              const v = Qo(h)
              S !== 'production' && Qt(h, 'render')
              const x = h.subTree
              ;(h.subTree = v),
                S !== 'production' && Ot(h, 'patch'),
                w(x, v, V(x.el), ut(x), h, k, Z),
                S !== 'production' && Qt(h, 'patch'),
                (ie.el = v.el),
                f === null && Vc(h, v.el),
                p && at(p, k),
                (b = ie.props && ie.props.onVnodeUpdated) && at(() => Rt(b, g, ie, m), k),
                S !== 'production' && pa(h),
                S !== 'production' && bn()
            } else {
              let ie
              const { el: d, props: p } = E,
                { bm: g, m, parent: f } = h,
                b = Wr(E)
              if (
                (gr(h, !1),
                g && Ir(g),
                !b && (ie = p && p.onVnodeBeforeMount) && Rt(ie, f, E),
                gr(h, !0),
                d && Lr)
              ) {
                const v = () => {
                  S !== 'production' && Ot(h, 'render'),
                    (h.subTree = Qo(h)),
                    S !== 'production' && Qt(h, 'render'),
                    S !== 'production' && Ot(h, 'hydrate'),
                    Lr(d, h.subTree, h, k, null),
                    S !== 'production' && Qt(h, 'hydrate')
                }
                b ? E.type.__asyncLoader().then(() => !h.isUnmounted && v()) : v()
              } else {
                S !== 'production' && Ot(h, 'render')
                const v = (h.subTree = Qo(h))
                S !== 'production' && Qt(h, 'render'),
                  S !== 'production' && Ot(h, 'patch'),
                  w(null, v, R, N, h, k, Z),
                  S !== 'production' && Qt(h, 'patch'),
                  (E.el = v.el)
              }
              if ((m && at(m, k), !b && (ie = p && p.onVnodeMounted))) {
                const v = E
                at(() => Rt(ie, f, v), k)
              }
              ;(E.shapeFlag & 256 || (f && Wr(f.vnode) && f.vnode.shapeFlag & 256)) &&
                h.a &&
                at(h.a, k),
                (h.isMounted = !0),
                S !== 'production' && tc(h),
                (E = R = N = null)
            }
          },
          W = (h.effect = new yo(U, () => Bn(H), h.scope)),
          H = (h.update = () => W.run())
        ;(H.id = h.uid),
          gr(h, !0),
          S !== 'production' &&
            ((W.onTrack = h.rtc ? (ie) => Ir(h.rtc, ie) : void 0),
            (W.onTrigger = h.rtg ? (ie) => Ir(h.rtg, ie) : void 0),
            (H.ownerInstance = h)),
          H()
      },
      ce = (h, E, R) => {
        E.component = h
        const N = h.vnode.props
        ;(h.vnode = E),
          (h.next = null),
          Pc(h, E.props, N, R),
          _c(h, E.children, R),
          lr(),
          ca(),
          qr()
      },
      $e = (h, E, R, N, k, Z, te, U, W = !1) => {
        const H = h && h.children,
          ie = h ? h.shapeFlag : 0,
          d = E.children,
          { patchFlag: p, shapeFlag: g } = E
        if (p > 0) {
          if (p & 128) {
            lt(H, d, R, N, k, Z, te, U, W)
            return
          } else if (p & 256) {
            Nt(H, d, R, N, k, Z, te, U, W)
            return
          }
        }
        g & 8
          ? (ie & 16 && ct(H, k, Z), d !== H && c(R, d))
          : ie & 16
          ? g & 16
            ? lt(H, d, R, N, k, Z, te, U, W)
            : ct(H, k, Z, !0)
          : (ie & 8 && c(R, ''), g & 16 && de(d, R, N, k, Z, te, U, W))
      },
      Nt = (h, E, R, N, k, Z, te, U, W) => {
        ;(h = h || wr), (E = E || wr)
        const H = h.length,
          ie = E.length,
          d = Math.min(H, ie)
        let p
        for (p = 0; p < d; p++) {
          const g = (E[p] = W ? $t(E[p]) : vt(E[p]))
          w(h[p], g, R, null, k, Z, te, U, W)
        }
        H > ie ? ct(h, k, Z, !0, !1, d) : de(E, R, N, k, Z, te, U, W, d)
      },
      lt = (h, E, R, N, k, Z, te, U, W) => {
        let H = 0
        const ie = E.length
        let d = h.length - 1,
          p = ie - 1
        for (; H <= d && H <= p; ) {
          const g = h[H],
            m = (E[H] = W ? $t(E[H]) : vt(E[H]))
          if (hr(g, m)) w(g, m, R, null, k, Z, te, U, W)
          else break
          H++
        }
        for (; H <= d && H <= p; ) {
          const g = h[d],
            m = (E[p] = W ? $t(E[p]) : vt(E[p]))
          if (hr(g, m)) w(g, m, R, null, k, Z, te, U, W)
          else break
          d--, p--
        }
        if (H > d) {
          if (H <= p) {
            const g = p + 1,
              m = g < ie ? E[g].el : N
            for (; H <= p; ) w(null, (E[H] = W ? $t(E[H]) : vt(E[H])), R, m, k, Z, te, U, W), H++
          }
        } else if (H > p) for (; H <= d; ) nt(h[H], k, Z, !0), H++
        else {
          const g = H,
            m = H,
            f = new Map()
          for (H = m; H <= p; H++) {
            const _ = (E[H] = W ? $t(E[H]) : vt(E[H]))
            _.key != null &&
              (S !== 'production' &&
                f.has(_.key) &&
                K(
                  'Duplicate keys found during update:',
                  JSON.stringify(_.key),
                  'Make sure keys are unique.'
                ),
              f.set(_.key, H))
          }
          let b,
            v = 0
          const x = p - m + 1
          let I = !1,
            X = 0
          const j = new Array(x)
          for (H = 0; H < x; H++) j[H] = 0
          for (H = g; H <= d; H++) {
            const _ = h[H]
            if (v >= x) {
              nt(_, k, Z, !0)
              continue
            }
            let Ee
            if (_.key != null) Ee = f.get(_.key)
            else
              for (b = m; b <= p; b++)
                if (j[b - m] === 0 && hr(_, E[b])) {
                  Ee = b
                  break
                }
            Ee === void 0
              ? nt(_, k, Z, !0)
              : ((j[Ee - m] = H + 1),
                Ee >= X ? (X = Ee) : (I = !0),
                w(_, E[Ee], R, null, k, Z, te, U, W),
                v++)
          }
          const ne = I ? eu(j) : wr
          for (b = ne.length - 1, H = x - 1; H >= 0; H--) {
            const _ = m + H,
              Ee = E[_],
              ge = _ + 1 < ie ? E[_ + 1].el : N
            j[H] === 0
              ? w(null, Ee, R, ge, k, Z, te, U, W)
              : I && (b < 0 || H !== ne[b] ? Ue(Ee, R, ge, 2) : b--)
          }
        }
      },
      Ue = (h, E, R, N, k = null) => {
        const { el: Z, type: te, transition: U, children: W, shapeFlag: H } = h
        if (H & 6) {
          Ue(h.component.subTree, E, R, N)
          return
        }
        if (H & 128) {
          h.suspense.move(E, R, N)
          return
        }
        if (H & 64) {
          te.move(h, E, R, je)
          return
        }
        if (te === Pe) {
          n(Z, E, R)
          for (let d = 0; d < W.length; d++) Ue(W[d], E, R, N)
          n(h.anchor, E, R)
          return
        }
        if (te === Hn) {
          L(h, E, R)
          return
        }
        if (N !== 2 && H & 1 && U)
          if (N === 0) U.beforeEnter(Z), n(Z, E, R), at(() => U.enter(Z), k)
          else {
            const { leave: d, delayLeave: p, afterLeave: g } = U,
              m = () => n(Z, E, R),
              f = () => {
                d(Z, () => {
                  m(), g && g()
                })
              }
            p ? p(Z, m, f) : f()
          }
        else n(Z, E, R)
      },
      nt = (h, E, R, N = !1, k = !1) => {
        const {
          type: Z,
          props: te,
          ref: U,
          children: W,
          dynamicChildren: H,
          shapeFlag: ie,
          patchFlag: d,
          dirs: p
        } = h
        if ((U != null && Xo(U, null, R, h, !0), ie & 256)) {
          E.ctx.deactivate(h)
          return
        }
        const g = ie & 1 && p,
          m = !Wr(h)
        let f
        if ((m && (f = te && te.onVnodeBeforeUnmount) && Rt(f, E, h), ie & 6)) Dt(h.component, R, N)
        else {
          if (ie & 128) {
            h.suspense.unmount(R, N)
            return
          }
          g && Ar(h, null, E, 'beforeUnmount'),
            ie & 64
              ? h.type.remove(h, E, R, k, je, N)
              : H && (Z !== Pe || (d > 0 && d & 64))
              ? ct(H, E, R, !1, !0)
              : ((Z === Pe && d & 384) || (!k && ie & 16)) && ct(W, E, R),
            N && qt(h)
        }
        ;((m && (f = te && te.onVnodeUnmounted)) || g) &&
          at(() => {
            f && Rt(f, E, h), g && Ar(h, null, E, 'unmounted')
          }, R)
      },
      qt = (h) => {
        const { type: E, el: R, anchor: N, transition: k } = h
        if (E === Pe) {
          S !== 'production' && h.patchFlag > 0 && h.patchFlag & 2048 && k && !k.persisted
            ? h.children.forEach((te) => {
                te.type === Ze ? o(te.el) : qt(te)
              })
            : Er(R, N)
          return
        }
        if (E === Hn) {
          D(h)
          return
        }
        const Z = () => {
          o(R), k && !k.persisted && k.afterLeave && k.afterLeave()
        }
        if (h.shapeFlag & 1 && k && !k.persisted) {
          const { leave: te, delayLeave: U } = k,
            W = () => te(R, Z)
          U ? U(h.el, Z, W) : W()
        } else Z()
      },
      Er = (h, E) => {
        let R
        for (; h !== E; ) (R = A(h)), o(h), (h = R)
        o(E)
      },
      Dt = (h, E, R) => {
        S !== 'production' && h.type.__hmrId && _q(h)
        const { bum: N, scope: k, update: Z, subTree: te, um: U } = h
        N && Ir(N),
          k.stop(),
          Z && ((Z.active = !1), nt(te, h, E, R)),
          U && at(U, E),
          at(() => {
            h.isUnmounted = !0
          }, E),
          E &&
            E.pendingBranch &&
            !E.isUnmounted &&
            h.asyncDep &&
            !h.asyncResolved &&
            h.suspenseId === E.pendingId &&
            (E.deps--, E.deps === 0 && E.resolve()),
          S !== 'production' && nc(h)
      },
      ct = (h, E, R, N = !1, k = !1, Z = 0) => {
        for (let te = Z; te < h.length; te++) nt(h[te], E, R, N, k)
      },
      ut = (h) =>
        h.shapeFlag & 6
          ? ut(h.component.subTree)
          : h.shapeFlag & 128
          ? h.suspense.next()
          : A(h.anchor || h.el),
      Fe = (h, E, R) => {
        h == null
          ? E._vnode && nt(E._vnode, null, null, !0)
          : w(E._vnode || null, h, E, null, null, null, R),
          ca(),
          ua(),
          (E._vnode = h)
      },
      je = { p: w, um: nt, m: Ue, r: qt, mt: we, mc: de, pc: $e, pbc: le, n: ut, o: e }
    let nr, Lr
    return t && ([nr, Lr] = t(je)), { render: Fe, hydrate: nr, createApp: Yc(Fe, nr) }
  }
  function gr({ effect: e, update: t }, r) {
    e.allowRecurse = t.allowRecurse = r
  }
  function Zn(e, t, r = !1) {
    const n = e.children,
      o = t.children
    if (se(n) && se(o))
      for (let i = 0; i < n.length; i++) {
        const a = n[i]
        let l = o[i]
        l.shapeFlag & 1 &&
          !l.dynamicChildren &&
          ((l.patchFlag <= 0 || l.patchFlag === 32) && ((l = o[i] = $t(o[i])), (l.el = a.el)),
          r || Zn(a, l)),
          l.type === tn && (l.el = a.el),
          S !== 'production' && l.type === Ze && !l.el && (l.el = a.el)
      }
  }
  function eu(e) {
    const t = e.slice(),
      r = [0]
    let n, o, i, a, l
    const q = e.length
    for (n = 0; n < q; n++) {
      const s = e[n]
      if (s !== 0) {
        if (((o = r[r.length - 1]), e[o] < s)) {
          ;(t[n] = o), r.push(n)
          continue
        }
        for (i = 0, a = r.length - 1; i < a; )
          (l = (i + a) >> 1), e[r[l]] < s ? (i = l + 1) : (a = l)
        s < e[r[i]] && (i > 0 && (t[n] = r[i - 1]), (r[i] = n))
      }
    }
    for (i = r.length, a = r[i - 1]; i-- > 0; ) (r[i] = a), (a = t[a])
    return r
  }
  const tu = (e) => e.__isTeleport,
    Pe = Symbol.for('v-fgt'),
    tn = Symbol.for('v-txt'),
    Ze = Symbol.for('v-cmt'),
    Hn = Symbol.for('v-stc'),
    rn = []
  let ht = null
  function B(e = !1) {
    rn.push((ht = e ? null : []))
  }
  function ru() {
    rn.pop(), (ht = rn[rn.length - 1] || null)
  }
  let nn = 1
  function Xa(e) {
    nn += e
  }
  function es(e) {
    return (e.dynamicChildren = nn > 0 ? ht || wr : null), ru(), nn > 0 && ht && ht.push(e), e
  }
  function F(e, t, r, n, o, i) {
    return es(T(e, t, r, n, o, i, !0))
  }
  function Wt(e, t, r, n, o) {
    return es(Se(e, t, r, n, o, !0))
  }
  function Br(e) {
    return e ? e.__v_isVNode === !0 : !1
  }
  function hr(e, t) {
    return S !== 'production' && t.shapeFlag & 6 && br.has(t.type)
      ? ((e.shapeFlag &= -257), (t.shapeFlag &= -513), !1)
      : e.type === t.type && e.key === t.key
  }
  const nu = (...e) => rs(...e),
    Un = '__vInternal',
    ts = ({ key: e }) => e ?? null,
    jn = ({ ref: e, ref_key: t, ref_for: r }) => (
      typeof e == 'number' && (e = '' + e),
      e != null ? (Ge(e) || Ye(e) || Ae(e) ? { i: ke, r: e, k: t, f: !!r } : e) : null
    )
  function T(e, t = null, r = null, n = 0, o = null, i = e === Pe ? 0 : 1, a = !1, l = !1) {
    const q = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e,
      props: t,
      key: t && ts(t),
      ref: t && jn(t),
      scopeId: ma,
      slotScopeIds: null,
      children: r,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag: i,
      patchFlag: n,
      dynamicProps: o,
      dynamicChildren: null,
      appContext: null,
      ctx: ke
    }
    return (
      l ? (ei(q, r), i & 128 && e.normalize(q)) : r && (q.shapeFlag |= Ge(r) ? 8 : 16),
      S !== 'production' &&
        q.key !== q.key &&
        K('VNode created with invalid key (NaN). VNode type:', q.type),
      nn > 0 && !a && ht && (q.patchFlag > 0 || i & 6) && q.patchFlag !== 32 && ht.push(q),
      q
    )
  }
  const Se = S !== 'production' ? nu : rs
  function rs(e, t = null, r = null, n = 0, o = null, i = !1) {
    if (
      ((!e || e === ba) &&
        (S !== 'production' && !e && K(`Invalid vnode type when creating vnode: ${e}.`), (e = Ze)),
      Br(e))
    ) {
      const l = mt(e, t, !0)
      return (
        r && ei(l, r),
        nn > 0 && !i && ht && (l.shapeFlag & 6 ? (ht[ht.indexOf(e)] = l) : ht.push(l)),
        (l.patchFlag |= -2),
        l
      )
    }
    if ((cs(e) && (e = e.__vccOpts), t)) {
      t = ou(t)
      let { class: l, style: q } = t
      l && !Ge(l) && (t.class = xt(l)),
        Te(q) && (wo(q) && !se(q) && (q = be({}, q)), (t.style = ho(q)))
    }
    const a = Ge(e) ? 1 : dc(e) ? 128 : tu(e) ? 64 : Te(e) ? 4 : Ae(e) ? 2 : 0
    return (
      S !== 'production' &&
        a & 4 &&
        wo(e) &&
        ((e = Ce(e)),
        K(
          'Vue received a Component which was made a reactive object. This can lead to unnecessary performance overhead, and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.',
          `
Component that was made reactive: `,
          e
        )),
      T(e, t, r, n, o, a, i, !0)
    )
  }
  function ou(e) {
    return e ? (wo(e) || Un in e ? be({}, e) : e) : null
  }
  function mt(e, t, r = !1) {
    const { props: n, ref: o, patchFlag: i, children: a } = e,
      l = t ? He(n || {}, t) : n
    return {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: l,
      key: l && ts(l),
      ref: t && t.ref ? (r && o ? (se(o) ? o.concat(jn(t)) : [o, jn(t)]) : jn(t)) : o,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: S !== 'production' && i === -1 && se(a) ? a.map(ns) : a,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Pe ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: e.transition,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && mt(e.ssContent),
      ssFallback: e.ssFallback && mt(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    }
  }
  function ns(e) {
    const t = mt(e)
    return se(e.children) && (t.children = e.children.map(ns)), t
  }
  function ft(e = ' ', t = 0) {
    return Se(tn, null, e, t)
  }
  function _e(e = '', t = !1) {
    return t ? (B(), Wt(Ze, null, e)) : Se(Ze, null, e)
  }
  function vt(e) {
    return e == null || typeof e == 'boolean'
      ? Se(Ze)
      : se(e)
      ? Se(Pe, null, e.slice())
      : typeof e == 'object'
      ? $t(e)
      : Se(tn, null, String(e))
  }
  function $t(e) {
    return (e.el === null && e.patchFlag !== -1) || e.memo ? e : mt(e)
  }
  function ei(e, t) {
    let r = 0
    const { shapeFlag: n } = e
    if (t == null) t = null
    else if (se(t)) r = 16
    else if (typeof t == 'object')
      if (n & 65) {
        const o = t.default
        o && (o._c && (o._d = !1), ei(e, o()), o._c && (o._d = !0))
        return
      } else {
        r = 32
        const o = t._
        !o && !(Un in t)
          ? (t._ctx = ke)
          : o === 3 && ke && (ke.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
      }
    else
      Ae(t)
        ? ((t = { default: t, _ctx: ke }), (r = 32))
        : ((t = String(t)), n & 64 ? ((r = 16), (t = [ft(t)])) : (r = 8))
    ;(e.children = t), (e.shapeFlag |= r)
  }
  function He(...e) {
    const t = {}
    for (let r = 0; r < e.length; r++) {
      const n = e[r]
      for (const o in n)
        if (o === 'class') t.class !== n.class && (t.class = xt([t.class, n.class]))
        else if (o === 'style') t.style = ho([t.style, n.style])
        else if (kr(o)) {
          const i = t[o],
            a = n[o]
          a && i !== a && !(se(i) && i.includes(a)) && (t[o] = i ? [].concat(i, a) : a)
        } else o !== '' && (t[o] = n[o])
    }
    return t
  }
  function Rt(e, t, r, n = null) {
    Vt(e, t, 7, [r, n])
  }
  const iu = Na()
  let au = 0
  function su(e, t, r) {
    const n = e.type,
      o = (t ? t.appContext : e.appContext) || iu,
      i = {
        uid: au++,
        vnode: e,
        type: n,
        parent: t,
        appContext: o,
        root: null,
        next: null,
        subTree: null,
        effect: null,
        update: null,
        scope: new rq(!0),
        render: null,
        proxy: null,
        exposed: null,
        exposeProxy: null,
        withProxy: null,
        provides: t ? t.provides : Object.create(o.provides),
        accessCache: null,
        renderCache: [],
        components: null,
        directives: null,
        propsOptions: Za(n, o),
        emitsOptions: ha(n, o),
        emit: null,
        emitted: null,
        propsDefaults: Ie,
        inheritAttrs: n.inheritAttrs,
        ctx: Ie,
        data: Ie,
        props: Ie,
        attrs: Ie,
        slots: Ie,
        refs: Ie,
        setupState: Ie,
        setupContext: null,
        attrsProxy: null,
        slotsProxy: null,
        suspense: r,
        suspenseId: r ? r.pendingId : 0,
        asyncDep: null,
        asyncResolved: !1,
        isMounted: !1,
        isUnmounted: !1,
        isDeactivated: !1,
        bc: null,
        c: null,
        bm: null,
        m: null,
        bu: null,
        u: null,
        um: null,
        bum: null,
        da: null,
        a: null,
        rtg: null,
        rtc: null,
        ec: null,
        sp: null
      }
    return (
      S !== 'production' ? (i.ctx = Rc(i)) : (i.ctx = { _: i }),
      (i.root = t ? t.root : i),
      (i.emit = sc.bind(null, i)),
      e.ce && e.ce(i),
      i
    )
  }
  let Ne = null
  const lu = () => Ne || ke
  let ti,
    Gr,
    os = '__VUE_INSTANCE_SETTERS__'
  ;(Gr = mn()[os]) || (Gr = mn()[os] = []),
    Gr.push((e) => (Ne = e)),
    (ti = (e) => {
      Gr.length > 1 ? Gr.forEach((t) => t(e)) : Gr[0](e)
    })
  const Fr = (e) => {
      ti(e), e.scope.on()
    },
    mr = () => {
      Ne && Ne.scope.off(), ti(null)
    },
    qu = Zt('slot,component')
  function ri(e, t) {
    const r = t.isNativeTag || Ri
    ;(qu(e) || r(e)) && K('Do not use built-in or reserved HTML elements as component id: ' + e)
  }
  function is(e) {
    return e.vnode.shapeFlag & 4
  }
  let on = !1
  function cu(e, t = !1) {
    on = t
    const { props: r, children: n } = e.vnode,
      o = is(e)
    kc(e, r, o, t), zc(e, n)
    const i = o ? uu(e, t) : void 0
    return (on = !1), i
  }
  function uu(e, t) {
    var r
    const n = e.type
    if (S !== 'production') {
      if ((n.name && ri(n.name, e.appContext.config), n.components)) {
        const i = Object.keys(n.components)
        for (let a = 0; a < i.length; a++) ri(i[a], e.appContext.config)
      }
      if (n.directives) {
        const i = Object.keys(n.directives)
        for (let a = 0; a < i.length; a++) Sa(i[a])
      }
      n.compilerOptions &&
        ss() &&
        K(
          '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
        )
    }
    ;(e.accessCache = Object.create(null)),
      (e.proxy = ra(new Proxy(e.ctx, Fa))),
      S !== 'production' && Dc(e)
    const { setup: o } = n
    if (o) {
      const i = (e.setupContext = o.length > 1 ? du(e) : null)
      Fr(e), lr()
      const a = Bt(o, e, 0, [S !== 'production' ? Hr(e.props) : e.props, i])
      if ((qr(), mr(), fo(a))) {
        if ((a.then(mr, mr), t))
          return a
            .then((l) => {
              as(e, l, t)
            })
            .catch((l) => {
              xn(l, e, 0)
            })
        if (((e.asyncDep = a), S !== 'production' && !e.suspense)) {
          const l = (r = n.name) != null ? r : 'Anonymous'
          K(
            `Component <${l}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
          )
        }
      } else as(e, a, t)
    } else ls(e, t)
  }
  function as(e, t, r) {
    Ae(t)
      ? e.type.__ssrInlineRender
        ? (e.ssrRender = t)
        : (e.render = t)
      : Te(t)
      ? (S !== 'production' &&
          Br(t) &&
          K('setup() should not return VNodes directly - return a render function instead.'),
        S !== 'production' && (e.devtoolsRawSetupState = t),
        (e.setupState = ia(t)),
        S !== 'production' && bc(e))
      : S !== 'production' &&
        t !== void 0 &&
        K(`setup() should return an object. Received: ${t === null ? 'null' : typeof t}`),
      ls(e, r)
  }
  let ni
  const ss = () => !ni
  function ls(e, t, r) {
    const n = e.type
    if (!e.render) {
      if (!t && ni && !n.render) {
        const o = n.template || Ko(e).template
        if (o) {
          S !== 'production' && Ot(e, 'compile')
          const { isCustomElement: i, compilerOptions: a } = e.appContext.config,
            { delimiters: l, compilerOptions: q } = n,
            s = be(be({ isCustomElement: i, delimiters: l }, a), q)
          ;(n.render = ni(o, s)), S !== 'production' && Qt(e, 'compile')
        }
      }
      e.render = n.render || Je
    }
    Fr(e),
      lr(),
      Bc(e),
      qr(),
      mr(),
      S !== 'production' &&
        !n.render &&
        e.render === Je &&
        !t &&
        (n.template
          ? K(
              'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
            )
          : K('Component is missing template or render function.'))
  }
  function qs(e) {
    return (
      e.attrsProxy ||
      (e.attrsProxy = new Proxy(
        e.attrs,
        S !== 'production'
          ? {
              get(t, r) {
                return On(), Ke(e, 'get', '$attrs'), t[r]
              },
              set() {
                return K('setupContext.attrs is readonly.'), !1
              },
              deleteProperty() {
                return K('setupContext.attrs is readonly.'), !1
              }
            }
          : {
              get(t, r) {
                return Ke(e, 'get', '$attrs'), t[r]
              }
            }
      ))
    )
  }
  function Vu(e) {
    return (
      e.slotsProxy ||
      (e.slotsProxy = new Proxy(e.slots, {
        get(t, r) {
          return Ke(e, 'get', '$slots'), t[r]
        }
      }))
    )
  }
  function du(e) {
    const t = (r) => {
      if (
        S !== 'production' &&
        (e.exposed && K('expose() should be called only once per setup().'), r != null)
      ) {
        let n = typeof r
        n === 'object' && (se(r) ? (n = 'array') : Ye(r) && (n = 'ref')),
          n !== 'object' && K(`expose() should be passed a plain object, received ${n}.`)
      }
      e.exposed = r || {}
    }
    return S !== 'production'
      ? Object.freeze({
          get attrs() {
            return qs(e)
          },
          get slots() {
            return Vu(e)
          },
          get emit() {
            return (r, ...n) => e.emit(r, ...n)
          },
          expose: t
        })
      : {
          get attrs() {
            return qs(e)
          },
          slots: e.slots,
          emit: e.emit,
          expose: t
        }
  }
  function Jn(e) {
    if (e.exposed)
      return (
        e.exposeProxy ||
        (e.exposeProxy = new Proxy(ia(ra(e.exposed)), {
          get(t, r) {
            if (r in t) return t[r]
            if (r in pr) return pr[r](e)
          },
          has(t, r) {
            return r in t || r in pr
          }
        }))
      )
  }
  const fu = /(?:^|[-_])(\w)/g,
    Au = (e) => e.replace(fu, (t) => t.toUpperCase()).replace(/[-_]/g, '')
  function oi(e, t = !0) {
    return Ae(e) ? e.displayName || e.name : e.name || (t && e.__name)
  }
  function Kn(e, t, r = !1) {
    let n = oi(t)
    if (!n && t.__file) {
      const o = t.__file.match(/([^/\\]+)\.\w+$/)
      o && (n = o[1])
    }
    if (!n && e && e.parent) {
      const o = (i) => {
        for (const a in i) if (i[a] === t) return a
      }
      n = o(e.components || e.parent.type.components) || o(e.appContext.components)
    }
    return n ? Au(n) : r ? 'App' : 'Anonymous'
  }
  function cs(e) {
    return Ae(e) && '__vccOpts' in e
  }
  const ee = (e, t) => Qq(e, t, on)
  function vr(e, t, r) {
    const n = arguments.length
    return n === 2
      ? Te(t) && !se(t)
        ? Br(t)
          ? Se(e, null, [t])
          : Se(e, t)
        : Se(e, null, t)
      : (n > 3 ? (r = Array.prototype.slice.call(arguments, 2)) : n === 3 && Br(r) && (r = [r]),
        Se(e, t, r))
  }
  const pu = Symbol.for('v-scx'),
    gu = () => {
      {
        const e = re(pu)
        return (
          e ||
            (S !== 'production' &&
              K(
                'Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.'
              )),
          e
        )
      }
    }
  function ii(e) {
    return !!(e && e.__v_isShallow)
  }
  function hu() {
    if (!S !== 'production' || typeof window > 'u') return
    const e = { style: 'color:#3ba776' },
      t = { style: 'color:#0b1bc9' },
      r = { style: 'color:#b62e24' },
      n = { style: 'color:#9d288c' },
      o = {
        header(V) {
          return Te(V)
            ? V.__isVue
              ? ['div', e, 'VueInstance']
              : Ye(V)
              ? ['div', {}, ['span', e, c(V)], '<', l(V.value), '>']
              : cr(V)
              ? [
                  'div',
                  {},
                  ['span', e, ii(V) ? 'ShallowReactive' : 'Reactive'],
                  '<',
                  l(V),
                  `>${Kt(V) ? ' (readonly)' : ''}`
                ]
              : Kt(V)
              ? ['div', {}, ['span', e, ii(V) ? 'ShallowReadonly' : 'Readonly'], '<', l(V), '>']
              : null
            : null
        },
        hasBody(V) {
          return V && V.__isVue
        },
        body(V) {
          if (V && V.__isVue) return ['div', {}, ...i(V.$)]
        }
      }
    function i(V) {
      const A = []
      V.type.props && V.props && A.push(a('props', Ce(V.props))),
        V.setupState !== Ie && A.push(a('setup', V.setupState)),
        V.data !== Ie && A.push(a('data', Ce(V.data)))
      const C = q(V, 'computed')
      C && A.push(a('computed', C))
      const y = q(V, 'inject')
      return (
        y && A.push(a('injected', y)),
        A.push([
          'div',
          {},
          ['span', { style: n.style + ';opacity:0.66' }, '$ (internal): '],
          ['object', { object: V }]
        ]),
        A
      )
    }
    function a(V, A) {
      return (
        (A = be({}, A)),
        Object.keys(A).length
          ? [
              'div',
              { style: 'line-height:1.25em;margin-bottom:0.6em' },
              ['div', { style: 'color:#476582' }, V],
              [
                'div',
                { style: 'padding-left:1.25em' },
                ...Object.keys(A).map((C) => ['div', {}, ['span', n, C + ': '], l(A[C], !1)])
              ]
            ]
          : ['span', {}]
      )
    }
    function l(V, A = !0) {
      return typeof V == 'number'
        ? ['span', t, V]
        : typeof V == 'string'
        ? ['span', r, JSON.stringify(V)]
        : typeof V == 'boolean'
        ? ['span', n, V]
        : Te(V)
        ? ['object', { object: A ? Ce(V) : V }]
        : ['span', r, String(V)]
    }
    function q(V, A) {
      const C = V.type
      if (Ae(C)) return
      const y = {}
      for (const w in V.ctx) s(C, w, A) && (y[w] = V.ctx[w])
      return y
    }
    function s(V, A, C) {
      const y = V[C]
      if (
        (se(y) && y.includes(A)) ||
        (Te(y) && A in y) ||
        (V.extends && s(V.extends, A, C)) ||
        (V.mixins && V.mixins.some((w) => s(w, A, C)))
      )
        return !0
    }
    function c(V) {
      return ii(V) ? 'ShallowRef' : V.effect ? 'ComputedRef' : 'Ref'
    }
    window.devtoolsFormatters
      ? window.devtoolsFormatters.push(o)
      : (window.devtoolsFormatters = [o])
  }
  const us = '3.3.2',
    mu = 'http://www.w3.org/2000/svg',
    Cr = typeof document < 'u' ? document : null,
    Vs = Cr && Cr.createElement('template'),
    vu = {
      insert: (e, t, r) => {
        t.insertBefore(e, r || null)
      },
      remove: (e) => {
        const t = e.parentNode
        t && t.removeChild(e)
      },
      createElement: (e, t, r, n) => {
        const o = t ? Cr.createElementNS(mu, e) : Cr.createElement(e, r ? { is: r } : void 0)
        return (
          e === 'select' && n && n.multiple != null && o.setAttribute('multiple', n.multiple), o
        )
      },
      createText: (e) => Cr.createTextNode(e),
      createComment: (e) => Cr.createComment(e),
      setText: (e, t) => {
        e.nodeValue = t
      },
      setElementText: (e, t) => {
        e.textContent = t
      },
      parentNode: (e) => e.parentNode,
      nextSibling: (e) => e.nextSibling,
      querySelector: (e) => Cr.querySelector(e),
      setScopeId(e, t) {
        e.setAttribute(t, '')
      },
      insertStaticContent(e, t, r, n, o, i) {
        const a = r ? r.previousSibling : t.lastChild
        if (o && (o === i || o.nextSibling))
          for (; t.insertBefore(o.cloneNode(!0), r), !(o === i || !(o = o.nextSibling)); );
        else {
          Vs.innerHTML = n ? `<svg>${e}</svg>` : e
          const l = Vs.content
          if (n) {
            const q = l.firstChild
            for (; q.firstChild; ) l.appendChild(q.firstChild)
            l.removeChild(q)
          }
          t.insertBefore(l, r)
        }
        return [a ? a.nextSibling : t.firstChild, r ? r.previousSibling : t.lastChild]
      }
    }
  function Cu(e, t, r) {
    const n = e._vtc
    n && (t = (t ? [t, ...n] : [...n]).join(' ')),
      t == null ? e.removeAttribute('class') : r ? e.setAttribute('class', t) : (e.className = t)
  }
  function Mu(e, t, r) {
    const n = e.style,
      o = Ge(r)
    if (r && !o) {
      if (t && !Ge(t)) for (const i in t) r[i] == null && ai(n, i, '')
      for (const i in r) ai(n, i, r[i])
    } else {
      const i = n.display
      o ? t !== r && (n.cssText = r) : t && e.removeAttribute('style'),
        '_vod' in e && (n.display = i)
    }
  }
  const yu = /[^\\];\s*$/,
    ds = /\s*!important$/
  function ai(e, t, r) {
    if (se(r)) r.forEach((n) => ai(e, t, n))
    else if (
      (r == null && (r = ''),
      S !== 'production' &&
        yu.test(r) &&
        K(`Unexpected semicolon at the end of '${t}' style value: '${r}'`),
      t.startsWith('--'))
    )
      e.setProperty(t, r)
    else {
      const n = Su(e, t)
      ds.test(r) ? e.setProperty(Ht(n), r.replace(ds, ''), 'important') : (e[n] = r)
    }
  }
  const fs = ['Webkit', 'Moz', 'ms'],
    si = {}
  function Su(e, t) {
    const r = si[t]
    if (r) return r
    let n = Mt(t)
    if (n !== 'filter' && n in e) return (si[t] = n)
    n = ir(n)
    for (let o = 0; o < fs.length; o++) {
      const i = fs[o] + n
      if (i in e) return (si[t] = i)
    }
    return t
  }
  const As = 'http://www.w3.org/1999/xlink'
  function Eu(e, t, r, n, o) {
    if (n && t.startsWith('xlink:'))
      r == null ? e.removeAttributeNS(As, t.slice(6, t.length)) : e.setAttributeNS(As, t, r)
    else {
      const i = tq(t)
      r == null || (i && !Gi(r)) ? e.removeAttribute(t) : e.setAttribute(t, i ? '' : r)
    }
  }
  function Tu(e, t, r, n, o, i, a) {
    if (t === 'innerHTML' || t === 'textContent') {
      n && a(n, o, i), (e[t] = r ?? '')
      return
    }
    const l = e.tagName
    if (t === 'value' && l !== 'PROGRESS' && !l.includes('-')) {
      e._value = r
      const s = l === 'OPTION' ? e.getAttribute('value') : e.value,
        c = r ?? ''
      s !== c && (e.value = c), r == null && e.removeAttribute(t)
      return
    }
    let q = !1
    if (r === '' || r == null) {
      const s = typeof e[t]
      s === 'boolean'
        ? (r = Gi(r))
        : r == null && s === 'string'
        ? ((r = ''), (q = !0))
        : s === 'number' && ((r = 0), (q = !0))
    }
    try {
      e[t] = r
    } catch (s) {
      S !== 'production' &&
        !q &&
        K(`Failed setting prop "${t}" on <${l.toLowerCase()}>: value ${r} is invalid.`, s)
    }
    q && e.removeAttribute(t)
  }
  function Or(e, t, r, n) {
    e.addEventListener(t, r, n)
  }
  function wu(e, t, r, n) {
    e.removeEventListener(t, r, n)
  }
  function Iu(e, t, r, n, o = null) {
    const i = e._vei || (e._vei = {}),
      a = i[t]
    if (n && a) a.value = n
    else {
      const [l, q] = Ru(t)
      if (n) {
        const s = (i[t] = xu(n, o))
        Or(e, l, s, q)
      } else a && (wu(e, l, a, q), (i[t] = void 0))
    }
  }
  const ps = /(?:Once|Passive|Capture)$/
  function Ru(e) {
    let t
    if (ps.test(e)) {
      t = {}
      let n
      for (; (n = e.match(ps)); )
        (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
    }
    return [e[2] === ':' ? e.slice(3) : Ht(e.slice(2)), t]
  }
  let li = 0
  const Du = Promise.resolve(),
    bu = () => li || (Du.then(() => (li = 0)), (li = Date.now()))
  function xu(e, t) {
    const r = (n) => {
      if (!n._vts) n._vts = Date.now()
      else if (n._vts <= r.attached) return
      Vt(Bu(n, r.value), t, 5, [n])
    }
    return (r.value = e), (r.attached = bu()), r
  }
  function Bu(e, t) {
    if (se(t)) {
      const r = e.stopImmediatePropagation
      return (
        (e.stopImmediatePropagation = () => {
          r.call(e), (e._stopped = !0)
        }),
        t.map((n) => (o) => !o._stopped && n && n(o))
      )
    } else return t
  }
  const gs = /^on[a-z]/,
    Gu = (e, t, r, n, o = !1, i, a, l, q) => {
      t === 'class'
        ? Cu(e, n, o)
        : t === 'style'
        ? Mu(e, r, n)
        : kr(t)
        ? fn(t) || Iu(e, t, r, n, a)
        : (
            t[0] === '.'
              ? ((t = t.slice(1)), !0)
              : t[0] === '^'
              ? ((t = t.slice(1)), !1)
              : Fu(e, t, n, o)
          )
        ? Tu(e, t, n, i, a, l, q)
        : (t === 'true-value' ? (e._trueValue = n) : t === 'false-value' && (e._falseValue = n),
          Eu(e, t, n, o))
    }
  function Fu(e, t, r, n) {
    return n
      ? !!(t === 'innerHTML' || t === 'textContent' || (t in e && gs.test(t) && Ae(r)))
      : t === 'spellcheck' ||
        t === 'draggable' ||
        t === 'translate' ||
        t === 'form' ||
        (t === 'list' && e.tagName === 'INPUT') ||
        (t === 'type' && e.tagName === 'TEXTAREA') ||
        (gs.test(t) && Ge(r))
      ? !1
      : t in e
  }
  const Xt = 'transition',
    an = 'animation',
    qi = (e, { slots: t }) => vr(gc, Ou(e), t)
  qi.displayName = 'Transition'
  const hs = {
    name: String,
    type: String,
    css: { type: Boolean, default: !0 },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  }
  qi.props = be({}, Ea, hs)
  const Mr = (e, t = []) => {
      se(e) ? e.forEach((r) => r(...t)) : e && e(...t)
    },
    ms = (e) => (e ? (se(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
  function Ou(e) {
    const t = {}
    for (const z in e) z in hs || (t[z] = e[z])
    if (e.css === !1) return t
    const {
        name: r = 'v',
        type: n,
        duration: o,
        enterFromClass: i = `${r}-enter-from`,
        enterActiveClass: a = `${r}-enter-active`,
        enterToClass: l = `${r}-enter-to`,
        appearFromClass: q = i,
        appearActiveClass: s = a,
        appearToClass: c = l,
        leaveFromClass: V = `${r}-leave-from`,
        leaveActiveClass: A = `${r}-leave-active`,
        leaveToClass: C = `${r}-leave-to`
      } = e,
      y = Qu(o),
      w = y && y[0],
      J = y && y[1],
      {
        onBeforeEnter: O,
        onEnter: G,
        onEnterCancelled: Y,
        onLeave: L,
        onLeaveCancelled: D,
        onBeforeAppear: qe = O,
        onAppear: Ve = G,
        onAppearCancelled: $ = Y
      } = t,
      de = (z, Me, he) => {
        yr(z, Me ? c : l), yr(z, Me ? s : a), he && he()
      },
      Q = (z, Me) => {
        ;(z._isLeaving = !1), yr(z, V), yr(z, C), yr(z, A), Me && Me()
      },
      le = (z) => (Me, he) => {
        const we = z ? Ve : G,
          De = () => de(Me, z, he)
        Mr(we, [Me, De]),
          vs(() => {
            yr(Me, z ? q : i), er(Me, z ? c : l), ms(we) || Cs(Me, n, w, De)
          })
      }
    return be(t, {
      onBeforeEnter(z) {
        Mr(O, [z]), er(z, i), er(z, a)
      },
      onBeforeAppear(z) {
        Mr(qe, [z]), er(z, q), er(z, s)
      },
      onEnter: le(!1),
      onAppear: le(!0),
      onLeave(z, Me) {
        z._isLeaving = !0
        const he = () => Q(z, Me)
        er(z, V),
          ku(),
          er(z, A),
          vs(() => {
            z._isLeaving && (yr(z, V), er(z, C), ms(L) || Cs(z, n, J, he))
          }),
          Mr(L, [z, he])
      },
      onEnterCancelled(z) {
        de(z, !1), Mr(Y, [z])
      },
      onAppearCancelled(z) {
        de(z, !0), Mr($, [z])
      },
      onLeaveCancelled(z) {
        Q(z), Mr(D, [z])
      }
    })
  }
  function Qu(e) {
    if (e == null) return null
    if (Te(e)) return [ci(e.enter), ci(e.leave)]
    {
      const t = ci(e)
      return [t, t]
    }
  }
  function ci(e) {
    const t = jl(e)
    return S !== 'production' && Pq(t, '<transition> explicit duration'), t
  }
  function er(e, t) {
    t.split(/\s+/).forEach((r) => r && e.classList.add(r)), (e._vtc || (e._vtc = new Set())).add(t)
  }
  function yr(e, t) {
    t.split(/\s+/).forEach((n) => n && e.classList.remove(n))
    const { _vtc: r } = e
    r && (r.delete(t), r.size || (e._vtc = void 0))
  }
  function vs(e) {
    requestAnimationFrame(() => {
      requestAnimationFrame(e)
    })
  }
  let Lu = 0
  function Cs(e, t, r, n) {
    const o = (e._endId = ++Lu),
      i = () => {
        o === e._endId && n()
      }
    if (r) return setTimeout(i, r)
    const { type: a, timeout: l, propCount: q } = Yu(e, t)
    if (!a) return n()
    const s = a + 'end'
    let c = 0
    const V = () => {
        e.removeEventListener(s, A), i()
      },
      A = (C) => {
        C.target === e && ++c >= q && V()
      }
    setTimeout(() => {
      c < q && V()
    }, l + 1),
      e.addEventListener(s, A)
  }
  function Yu(e, t) {
    const r = window.getComputedStyle(e),
      n = (y) => (r[y] || '').split(', '),
      o = n(`${Xt}Delay`),
      i = n(`${Xt}Duration`),
      a = Ms(o, i),
      l = n(`${an}Delay`),
      q = n(`${an}Duration`),
      s = Ms(l, q)
    let c = null,
      V = 0,
      A = 0
    t === Xt
      ? a > 0 && ((c = Xt), (V = a), (A = i.length))
      : t === an
      ? s > 0 && ((c = an), (V = s), (A = q.length))
      : ((V = Math.max(a, s)),
        (c = V > 0 ? (a > s ? Xt : an) : null),
        (A = c ? (c === Xt ? i.length : q.length) : 0))
    const C = c === Xt && /\b(transform|all)(,|$)/.test(n(`${Xt}Property`).toString())
    return { type: c, timeout: V, propCount: A, hasTransform: C }
  }
  function Ms(e, t) {
    for (; e.length < t.length; ) e = e.concat(e)
    return Math.max(...t.map((r, n) => ys(r) + ys(e[n])))
  }
  function ys(e) {
    return Number(e.slice(0, -1).replace(',', '.')) * 1e3
  }
  function ku() {
    return document.body.offsetHeight
  }
  const Ss = (e) => {
    const t = e.props['onUpdate:modelValue'] || !1
    return se(t) ? (r) => Ir(t, r) : t
  }
  function Nu(e) {
    e.target.composing = !0
  }
  function Es(e) {
    const t = e.target
    t.composing && ((t.composing = !1), t.dispatchEvent(new Event('input')))
  }
  const tr = {
      created(e, { modifiers: { lazy: t, trim: r, number: n } }, o) {
        e._assign = Ss(o)
        const i = n || (o.props && o.props.type === 'number')
        Or(e, t ? 'change' : 'input', (a) => {
          if (a.target.composing) return
          let l = e.value
          r && (l = l.trim()), i && (l = go(l)), e._assign(l)
        }),
          r &&
            Or(e, 'change', () => {
              e.value = e.value.trim()
            }),
          t || (Or(e, 'compositionstart', Nu), Or(e, 'compositionend', Es), Or(e, 'change', Es))
      },
      mounted(e, { value: t }) {
        e.value = t ?? ''
      },
      beforeUpdate(e, { value: t, modifiers: { lazy: r, trim: n, number: o } }, i) {
        if (
          ((e._assign = Ss(i)),
          e.composing ||
            (document.activeElement === e &&
              e.type !== 'range' &&
              (r ||
                (n && e.value.trim() === t) ||
                ((o || e.type === 'number') && go(e.value) === t))))
        )
          return
        const a = t ?? ''
        e.value !== a && (e.value = a)
      }
    },
    Pu = ['ctrl', 'shift', 'alt', 'meta'],
    Zu = {
      stop: (e) => e.stopPropagation(),
      prevent: (e) => e.preventDefault(),
      self: (e) => e.target !== e.currentTarget,
      ctrl: (e) => !e.ctrlKey,
      shift: (e) => !e.shiftKey,
      alt: (e) => !e.altKey,
      meta: (e) => !e.metaKey,
      left: (e) => 'button' in e && e.button !== 0,
      middle: (e) => 'button' in e && e.button !== 1,
      right: (e) => 'button' in e && e.button !== 2,
      exact: (e, t) => Pu.some((r) => e[`${r}Key`] && !t.includes(r))
    },
    Ts =
      (e, t) =>
      (r, ...n) => {
        for (let o = 0; o < t.length; o++) {
          const i = Zu[t[o]]
          if (i && i(r, t)) return
        }
        return e(r, ...n)
      },
    At = {
      beforeMount(e, { value: t }, { transition: r }) {
        ;(e._vod = e.style.display === 'none' ? '' : e.style.display),
          r && t ? r.beforeEnter(e) : sn(e, t)
      },
      mounted(e, { value: t }, { transition: r }) {
        r && t && r.enter(e)
      },
      updated(e, { value: t, oldValue: r }, { transition: n }) {
        !t != !r &&
          (n
            ? t
              ? (n.beforeEnter(e), sn(e, !0), n.enter(e))
              : n.leave(e, () => {
                  sn(e, !1)
                })
            : sn(e, t))
      },
      beforeUnmount(e, { value: t }) {
        sn(e, t)
      }
    }
  function sn(e, t) {
    e.style.display = t ? e._vod : 'none'
  }
  const Hu = be({ patchProp: Gu }, vu)
  let ws
  function Uu() {
    return ws || (ws = $c(Hu))
  }
  const ju = (...e) => {
    const t = Uu().createApp(...e)
    S !== 'production' && (Ju(t), Ku(t))
    const { mount: r } = t
    return (
      (t.mount = (n) => {
        const o = zu(n)
        if (!o) return
        const i = t._component
        !Ae(i) && !i.render && !i.template && (i.template = o.innerHTML), (o.innerHTML = '')
        const a = r(o, !1, o instanceof SVGElement)
        return (
          o instanceof Element && (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')),
          a
        )
      }),
      t
    )
  }
  function Ju(e) {
    Object.defineProperty(e.config, 'isNativeTag', { value: (t) => Xl(t) || eq(t), writable: !1 })
  }
  function Ku(e) {
    if (ss()) {
      const t = e.config.isCustomElement
      Object.defineProperty(e.config, 'isCustomElement', {
        get() {
          return t
        },
        set() {
          K(
            'The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead.'
          )
        }
      })
      const r = e.config.compilerOptions,
        n =
          'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc'
      Object.defineProperty(e.config, 'compilerOptions', {
        get() {
          return K(n), r
        },
        set() {
          K(n)
        }
      })
    }
  }
  function zu(e) {
    if (Ge(e)) {
      const t = document.querySelector(e)
      return (
        S !== 'production' &&
          !t &&
          K(`Failed to mount app: mount target selector "${e}" returned null.`),
        t
      )
    }
    return (
      S !== 'production' &&
        window.ShadowRoot &&
        e instanceof window.ShadowRoot &&
        e.mode === 'closed' &&
        K('mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'),
      e
    )
  }
  function _u() {
    hu()
  }
  S !== 'production' && _u()
  function Lt(e, t, ...r) {
    if (e in t) {
      let o = t[e]
      return typeof o == 'function' ? o(...r) : o
    }
    let n = new Error(
      `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
        t
      )
        .map((o) => `"${o}"`)
        .join(', ')}.`
    )
    throw (Error.captureStackTrace && Error.captureStackTrace(n, Lt), n)
  }
  var ui = ((e) => (
      (e[(e.None = 0)] = 'None'),
      (e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
      (e[(e.Static = 2)] = 'Static'),
      e
    ))(ui || {}),
    Wu = ((e) => ((e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden'), e))(Wu || {})
  function zn({ visible: e = !0, features: t = 0, ourProps: r, theirProps: n, ...o }) {
    var i
    let a = Rs(n, r),
      l = Object.assign(o, { props: a })
    if (e || (t & 2 && a.static)) return Vi(l)
    if (t & 1) {
      let q = (i = a.unmount) == null || i ? 0 : 1
      return Lt(q, {
        [0]() {
          return null
        },
        [1]() {
          return Vi({ ...o, props: { ...a, hidden: !0, style: { display: 'none' } } })
        }
      })
    }
    return Vi(l)
  }
  function Vi({ props: e, attrs: t, slots: r, slot: n, name: o }) {
    var i, a
    let { as: l, ...q } = $u(e, ['unmount', 'static']),
      s = (i = r.default) == null ? void 0 : i.call(r, n),
      c = {}
    if (n) {
      let V = !1,
        A = []
      for (let [C, y] of Object.entries(n)) typeof y == 'boolean' && (V = !0), y === !0 && A.push(C)
      V && (c['data-headlessui-state'] = A.join(' '))
    }
    if (l === 'template') {
      if (((s = Is(s ?? [])), Object.keys(q).length > 0 || Object.keys(t).length > 0)) {
        let [V, ...A] = s ?? []
        if (!Xu(V) || A.length > 0)
          throw new Error(
            [
              'Passing props on "template"!',
              '',
              `The current component <${o} /> is rendering a "template".`,
              'However we need to passthrough the following props:',
              Object.keys(q)
                .concat(Object.keys(t))
                .map((w) => w.trim())
                .filter((w, J, O) => O.indexOf(w) === J)
                .sort((w, J) => w.localeCompare(J))
                .map((w) => `  - ${w}`).join(`
`),
              '',
              'You can apply a few solutions:',
              [
                'Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',
                'Render a single element as the child so that we can forward the props onto that element.'
              ].map((w) => `  - ${w}`).join(`
`)
            ].join(`
`)
          )
        let C = Rs((a = V.props) != null ? a : {}, q),
          y = mt(V, C)
        for (let w in C) w.startsWith('on') && (y.props || (y.props = {}), (y.props[w] = C[w]))
        return y
      }
      return Array.isArray(s) && s.length === 1 ? s[0] : s
    }
    return vr(l, Object.assign({}, q, c), { default: () => s })
  }
  function Is(e) {
    return e.flatMap((t) => (t.type === Pe ? Is(t.children) : [t]))
  }
  function Rs(...e) {
    if (e.length === 0) return {}
    if (e.length === 1) return e[0]
    let t = {},
      r = {}
    for (let n of e)
      for (let o in n)
        o.startsWith('on') && typeof n[o] == 'function'
          ? (r[o] != null || (r[o] = []), r[o].push(n[o]))
          : (t[o] = n[o])
    if (t.disabled || t['aria-disabled'])
      return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])))
    for (let n in r)
      Object.assign(t, {
        [n](o, ...i) {
          let a = r[n]
          for (let l of a) {
            if (o instanceof Event && o.defaultPrevented) return
            l(o, ...i)
          }
        }
      })
    return t
  }
  function $u(e, t = []) {
    let r = Object.assign({}, e)
    for (let n of t) n in r && delete r[n]
    return r
  }
  function Xu(e) {
    return e == null
      ? !1
      : typeof e.type == 'string' || typeof e.type == 'object' || typeof e.type == 'function'
  }
  let eV = 0
  function tV() {
    return ++eV
  }
  function ln() {
    return tV()
  }
  var rr = ((e) => (
    (e.Space = ' '),
    (e.Enter = 'Enter'),
    (e.Escape = 'Escape'),
    (e.Backspace = 'Backspace'),
    (e.Delete = 'Delete'),
    (e.ArrowLeft = 'ArrowLeft'),
    (e.ArrowUp = 'ArrowUp'),
    (e.ArrowRight = 'ArrowRight'),
    (e.ArrowDown = 'ArrowDown'),
    (e.Home = 'Home'),
    (e.End = 'End'),
    (e.PageUp = 'PageUp'),
    (e.PageDown = 'PageDown'),
    (e.Tab = 'Tab'),
    e
  ))(rr || {})
  function pe(e) {
    var t
    return e == null || e.value == null ? null : (t = e.value.$el) != null ? t : e.value
  }
  let Ds = Symbol('Context')
  var qn = ((e) => (
    (e[(e.Open = 1)] = 'Open'),
    (e[(e.Closed = 2)] = 'Closed'),
    (e[(e.Closing = 4)] = 'Closing'),
    (e[(e.Opening = 8)] = 'Opening'),
    e
  ))(qn || {})
  function rV() {
    return re(Ds, null)
  }
  function nV(e) {
    Nn(Ds, e)
  }
  function bs(e, t) {
    if (e) return e
    let r = t ?? 'button'
    if (typeof r == 'string' && r.toLowerCase() === 'button') return 'button'
  }
  function oV(e, t) {
    let r = ae(bs(e.value.type, e.value.as))
    return (
      wt(() => {
        r.value = bs(e.value.type, e.value.as)
      }),
      et(() => {
        var n
        r.value ||
          (pe(t) &&
            pe(t) instanceof HTMLButtonElement &&
            !((n = pe(t)) != null && n.hasAttribute('type')) &&
            (r.value = 'button'))
      }),
      r
    )
  }
  var iV = Object.defineProperty,
    aV = (e, t, r) =>
      t in e ? iV(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
    xs = (e, t, r) => (aV(e, typeof t != 'symbol' ? t + '' : t, r), r)
  class sV {
    constructor() {
      xs(this, 'current', this.detect()), xs(this, 'currentId', 0)
    }
    set(t) {
      this.current !== t && ((this.currentId = 0), (this.current = t))
    }
    reset() {
      this.set(this.detect())
    }
    nextId() {
      return ++this.currentId
    }
    get isServer() {
      return this.current === 'server'
    }
    get isClient() {
      return this.current === 'client'
    }
    detect() {
      return typeof window > 'u' || typeof document > 'u' ? 'server' : 'client'
    }
  }
  let _n = new sV()
  function Wn(e) {
    if (_n.isServer) return null
    if (e instanceof Node) return e.ownerDocument
    if (e != null && e.hasOwnProperty('value')) {
      let t = pe(e)
      if (t) return t.ownerDocument
    }
    return document
  }
  let di = [
    '[contentEditable=true]',
    '[tabindex]',
    'a[href]',
    'area[href]',
    'button:not([disabled])',
    'iframe',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])'
  ]
    .map((e) => `${e}:not([tabindex='-1'])`)
    .join(',')
  var Yt = ((e) => (
      (e[(e.First = 1)] = 'First'),
      (e[(e.Previous = 2)] = 'Previous'),
      (e[(e.Next = 4)] = 'Next'),
      (e[(e.Last = 8)] = 'Last'),
      (e[(e.WrapAround = 16)] = 'WrapAround'),
      (e[(e.NoScroll = 32)] = 'NoScroll'),
      e
    ))(Yt || {}),
    $n = ((e) => (
      (e[(e.Error = 0)] = 'Error'),
      (e[(e.Overflow = 1)] = 'Overflow'),
      (e[(e.Success = 2)] = 'Success'),
      (e[(e.Underflow = 3)] = 'Underflow'),
      e
    ))($n || {}),
    lV = ((e) => ((e[(e.Previous = -1)] = 'Previous'), (e[(e.Next = 1)] = 'Next'), e))(lV || {})
  function Xn(e = document.body) {
    return e == null
      ? []
      : Array.from(e.querySelectorAll(di)).sort((t, r) =>
          Math.sign(
            (t.tabIndex || Number.MAX_SAFE_INTEGER) - (r.tabIndex || Number.MAX_SAFE_INTEGER)
          )
        )
  }
  var fi = ((e) => ((e[(e.Strict = 0)] = 'Strict'), (e[(e.Loose = 1)] = 'Loose'), e))(fi || {})
  function Bs(e, t = 0) {
    var r
    return e === ((r = Wn(e)) == null ? void 0 : r.body)
      ? !1
      : Lt(t, {
          [0]() {
            return e.matches(di)
          },
          [1]() {
            let n = e
            for (; n !== null; ) {
              if (n.matches(di)) return !0
              n = n.parentElement
            }
            return !1
          }
        })
  }
  var qV = ((e) => ((e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse'), e))(qV || {})
  typeof window < 'u' &&
    typeof document < 'u' &&
    (document.addEventListener(
      'keydown',
      (e) => {
        e.metaKey ||
          e.altKey ||
          e.ctrlKey ||
          (document.documentElement.dataset.headlessuiFocusVisible = '')
      },
      !0
    ),
    document.addEventListener(
      'click',
      (e) => {
        e.detail === 1
          ? delete document.documentElement.dataset.headlessuiFocusVisible
          : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = '')
      },
      !0
    ))
  let cV = ['textarea', 'input'].join(',')
  function uV(e) {
    var t, r
    return (r = (t = e?.matches) == null ? void 0 : t.call(e, cV)) != null ? r : !1
  }
  function VV(e, t = (r) => r) {
    return e.slice().sort((r, n) => {
      let o = t(r),
        i = t(n)
      if (o === null || i === null) return 0
      let a = o.compareDocumentPosition(i)
      return a & Node.DOCUMENT_POSITION_FOLLOWING
        ? -1
        : a & Node.DOCUMENT_POSITION_PRECEDING
        ? 1
        : 0
    })
  }
  function Sr(e, t, { sorted: r = !0, relativeTo: n = null, skipElements: o = [] } = {}) {
    var i
    let a =
        (i = Array.isArray(e)
          ? e.length > 0
            ? e[0].ownerDocument
            : document
          : e?.ownerDocument) != null
          ? i
          : document,
      l = Array.isArray(e) ? (r ? VV(e) : e) : Xn(e)
    o.length > 0 && l.length > 1 && (l = l.filter((y) => !o.includes(y))),
      (n = n ?? a.activeElement)
    let q = (() => {
        if (t & 5) return 1
        if (t & 10) return -1
        throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last')
      })(),
      s = (() => {
        if (t & 1) return 0
        if (t & 2) return Math.max(0, l.indexOf(n)) - 1
        if (t & 4) return Math.max(0, l.indexOf(n)) + 1
        if (t & 8) return l.length - 1
        throw new Error('Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last')
      })(),
      c = t & 32 ? { preventScroll: !0 } : {},
      V = 0,
      A = l.length,
      C
    do {
      if (V >= A || V + A <= 0) return 0
      let y = s + V
      if (t & 16) y = (y + A) % A
      else {
        if (y < 0) return 3
        if (y >= A) return 1
      }
      ;(C = l[y]), C?.focus(c), (V += q)
    } while (C !== a.activeElement)
    return t & 6 && uV(C) && C.select(), 2
  }
  function Ai(e, t, r) {
    _n.isServer ||
      et((n) => {
        document.addEventListener(e, t, r), n(() => document.removeEventListener(e, t, r))
      })
  }
  function dV(e, t, r = ee(() => !0)) {
    function n(i, a) {
      if (!r.value || i.defaultPrevented) return
      let l = a(i)
      if (l === null || !l.getRootNode().contains(l)) return
      let q = (function s(c) {
        return typeof c == 'function' ? s(c()) : Array.isArray(c) || c instanceof Set ? c : [c]
      })(e)
      for (let s of q) {
        if (s === null) continue
        let c = s instanceof HTMLElement ? s : pe(s)
        if ((c != null && c.contains(l)) || (i.composed && i.composedPath().includes(c))) return
      }
      return !Bs(l, fi.Loose) && l.tabIndex !== -1 && i.preventDefault(), t(i, l)
    }
    let o = ae(null)
    Ai(
      'mousedown',
      (i) => {
        var a, l
        r.value &&
          (o.value =
            ((l = (a = i.composedPath) == null ? void 0 : a.call(i)) == null ? void 0 : l[0]) ||
            i.target)
      },
      !0
    ),
      Ai(
        'click',
        (i) => {
          o.value && (n(i, () => o.value), (o.value = null))
        },
        !0
      ),
      Ai(
        'blur',
        (i) =>
          n(i, () =>
            window.document.activeElement instanceof HTMLIFrameElement
              ? window.document.activeElement
              : null
          ),
        !0
      )
  }
  var eo = ((e) => (
    (e[(e.None = 1)] = 'None'),
    (e[(e.Focusable = 2)] = 'Focusable'),
    (e[(e.Hidden = 4)] = 'Hidden'),
    e
  ))(eo || {})
  let pi = Re({
    name: 'Hidden',
    props: {
      as: { type: [Object, String], default: 'div' },
      features: { type: Number, default: 1 }
    },
    setup(e, { slots: t, attrs: r }) {
      return () => {
        let { features: n, ...o } = e,
          i = {
            'aria-hidden': (n & 2) === 2 ? !0 : void 0,
            style: {
              position: 'fixed',
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              borderWidth: '0',
              ...((n & 4) === 4 && (n & 2) !== 2 && { display: 'none' })
            }
          }
        return zn({ ourProps: i, theirProps: o, slot: {}, attrs: r, slots: t, name: 'Hidden' })
      }
    }
  })
  function fV(e, t, r) {
    _n.isServer ||
      et((n) => {
        window.addEventListener(e, t, r), n(() => window.removeEventListener(e, t, r))
      })
  }
  var kt = ((e) => ((e[(e.Forwards = 0)] = 'Forwards'), (e[(e.Backwards = 1)] = 'Backwards'), e))(
    kt || {}
  )
  function Gs() {
    let e = ae(0)
    return (
      fV('keydown', (t) => {
        t.key === 'Tab' && (e.value = t.shiftKey ? 1 : 0)
      }),
      e
    )
  }
  function AV(e, t, r, n) {
    _n.isServer ||
      et((o) => {
        ;(e = e ?? window), e.addEventListener(t, r, n), o(() => e.removeEventListener(t, r, n))
      })
  }
  var pV = ((e) => ((e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e))(pV || {})
  let Fs = Symbol('PopoverContext')
  function gi(e) {
    let t = re(Fs, null)
    if (t === null) {
      let r = new Error(`<${e} /> is missing a parent <${Ls.name} /> component.`)
      throw (Error.captureStackTrace && Error.captureStackTrace(r, gi), r)
    }
    return t
  }
  let gV = Symbol('PopoverGroupContext')
  function Os() {
    return re(gV, null)
  }
  let Qs = Symbol('PopoverPanelContext')
  function hV() {
    return re(Qs, null)
  }
  let Ls = Re({
      name: 'Popover',
      props: { as: { type: [Object, String], default: 'div' } },
      setup(e, { slots: t, attrs: r, expose: n }) {
        var o
        let i = ae(null)
        n({ el: i, $el: i })
        let a = ae(1),
          l = ae(null),
          q = ae(null),
          s = ae(null),
          c = ae(null),
          V = ee(() => Wn(i)),
          A = ee(() => {
            var G, Y
            if (!pe(l) || !pe(c)) return !1
            for (let Q of document.querySelectorAll('body > *'))
              if (Number(Q?.contains(pe(l))) ^ Number(Q?.contains(pe(c)))) return !0
            let L = Xn(),
              D = L.indexOf(pe(l)),
              qe = (D + L.length - 1) % L.length,
              Ve = (D + 1) % L.length,
              $ = L[qe],
              de = L[Ve]
            return (
              !((G = pe(c)) != null && G.contains($)) && !((Y = pe(c)) != null && Y.contains(de))
            )
          }),
          C = {
            popoverState: a,
            buttonId: ae(null),
            panelId: ae(null),
            panel: c,
            button: l,
            isPortalled: A,
            beforePanelSentinel: q,
            afterPanelSentinel: s,
            togglePopover() {
              a.value = Lt(a.value, { [0]: 1, [1]: 0 })
            },
            closePopover() {
              a.value !== 1 && (a.value = 1)
            },
            close(G) {
              C.closePopover()
              let Y = (() =>
                G
                  ? G instanceof HTMLElement
                    ? G
                    : G.value instanceof HTMLElement
                    ? pe(G)
                    : pe(C.button)
                  : pe(C.button))()
              Y?.focus()
            }
          }
        Nn(Fs, C), nV(ee(() => Lt(a.value, { [0]: qn.Open, [1]: qn.Closed })))
        let y = {
            buttonId: C.buttonId,
            panelId: C.panelId,
            close() {
              C.closePopover()
            }
          },
          w = Os(),
          J = w?.registerPopover
        function O() {
          var G, Y, L, D
          return (D = w?.isFocusWithinPopoverGroup()) != null
            ? D
            : ((G = V.value) == null ? void 0 : G.activeElement) &&
                (((Y = pe(l)) == null ? void 0 : Y.contains(V.value.activeElement)) ||
                  ((L = pe(c)) == null ? void 0 : L.contains(V.value.activeElement)))
        }
        return (
          et(() => J?.(y)),
          AV(
            (o = V.value) == null ? void 0 : o.defaultView,
            'focus',
            (G) => {
              var Y, L
              a.value === 0 &&
                (O() ||
                  (l &&
                    c &&
                    G.target !== window &&
                    (((Y = pe(C.beforePanelSentinel)) != null && Y.contains(G.target)) ||
                      ((L = pe(C.afterPanelSentinel)) != null && L.contains(G.target)) ||
                      C.closePopover())))
            },
            !0
          ),
          dV(
            [l, c],
            (G, Y) => {
              var L
              C.closePopover(),
                Bs(Y, fi.Loose) || (G.preventDefault(), (L = pe(l)) == null || L.focus())
            },
            ee(() => a.value === 0)
          ),
          () => {
            let G = { open: a.value === 0, close: C.close }
            return zn({
              theirProps: e,
              ourProps: { ref: i },
              slot: G,
              slots: t,
              attrs: r,
              name: 'Popover'
            })
          }
        )
      }
    }),
    Ys = Re({
      name: 'PopoverButton',
      props: {
        as: { type: [Object, String], default: 'button' },
        disabled: { type: [Boolean], default: !1 },
        id: { type: String, default: () => `headlessui-popover-button-${ln()}` }
      },
      inheritAttrs: !1,
      setup(e, { attrs: t, slots: r, expose: n }) {
        let o = gi('PopoverButton'),
          i = ee(() => Wn(o.button))
        n({ el: o.button, $el: o.button }),
          wt(() => {
            o.buttonId.value = e.id
          }),
          It(() => {
            o.buttonId.value = null
          })
        let a = Os(),
          l = a?.closeOthers,
          q = hV(),
          s = ee(() => (q === null ? !1 : q.value === o.panelId.value)),
          c = ae(null),
          V = `headlessui-focus-sentinel-${ln()}`
        s.value ||
          et(() => {
            o.button.value = c.value
          })
        let A = oV(
          ee(() => ({ as: e.as, type: t.type })),
          c
        )
        function C(O) {
          var G, Y, L, D, qe
          if (s.value) {
            if (o.popoverState.value === 1) return
            switch (O.key) {
              case rr.Space:
              case rr.Enter:
                O.preventDefault(),
                  (Y = (G = O.target).click) == null || Y.call(G),
                  o.closePopover(),
                  (L = pe(o.button)) == null || L.focus()
                break
            }
          } else
            switch (O.key) {
              case rr.Space:
              case rr.Enter:
                O.preventDefault(),
                  O.stopPropagation(),
                  o.popoverState.value === 1 && l?.(o.buttonId.value),
                  o.togglePopover()
                break
              case rr.Escape:
                if (o.popoverState.value !== 0) return l?.(o.buttonId.value)
                if (
                  !pe(o.button) ||
                  ((D = i.value) != null &&
                    D.activeElement &&
                    !((qe = pe(o.button)) != null && qe.contains(i.value.activeElement)))
                )
                  return
                O.preventDefault(), O.stopPropagation(), o.closePopover()
                break
            }
        }
        function y(O) {
          s.value || (O.key === rr.Space && O.preventDefault())
        }
        function w(O) {
          var G, Y
          e.disabled ||
            (s.value
              ? (o.closePopover(), (G = pe(o.button)) == null || G.focus())
              : (O.preventDefault(),
                O.stopPropagation(),
                o.popoverState.value === 1 && l?.(o.buttonId.value),
                o.togglePopover(),
                (Y = pe(o.button)) == null || Y.focus()))
        }
        function J(O) {
          O.preventDefault(), O.stopPropagation()
        }
        return () => {
          let O = o.popoverState.value === 0,
            G = { open: O },
            { id: Y, ...L } = e,
            D = s.value
              ? { ref: c, type: A.value, onKeydown: C, onClick: w }
              : {
                  ref: c,
                  id: Y,
                  type: A.value,
                  'aria-expanded': e.disabled ? void 0 : o.popoverState.value === 0,
                  'aria-controls': pe(o.panel) ? o.panelId.value : void 0,
                  disabled: e.disabled ? !0 : void 0,
                  onKeydown: C,
                  onKeyup: y,
                  onClick: w,
                  onMousedown: J
                },
            qe = Gs()
          function Ve() {
            let $ = pe(o.panel)
            if (!$) return
            function de() {
              Lt(qe.value, {
                [kt.Forwards]: () => Sr($, Yt.First),
                [kt.Backwards]: () => Sr($, Yt.Last)
              }) === $n.Error &&
                Sr(
                  Xn().filter((Q) => Q.dataset.headlessuiFocusGuard !== 'true'),
                  Lt(qe.value, { [kt.Forwards]: Yt.Next, [kt.Backwards]: Yt.Previous }),
                  { relativeTo: pe(o.button) }
                )
            }
            de()
          }
          return vr(Pe, [
            zn({
              ourProps: D,
              theirProps: { ...t, ...L },
              slot: G,
              attrs: t,
              slots: r,
              name: 'PopoverButton'
            }),
            O &&
              !s.value &&
              o.isPortalled.value &&
              vr(pi, {
                id: V,
                features: eo.Focusable,
                'data-headlessui-focus-guard': !0,
                as: 'button',
                type: 'button',
                onFocus: Ve
              })
          ])
        }
      }
    }),
    mV = Re({
      name: 'PopoverPanel',
      props: {
        as: { type: [Object, String], default: 'div' },
        static: { type: Boolean, default: !1 },
        unmount: { type: Boolean, default: !0 },
        focus: { type: Boolean, default: !1 },
        id: { type: String, default: () => `headlessui-popover-panel-${ln()}` }
      },
      inheritAttrs: !1,
      setup(e, { attrs: t, slots: r, expose: n }) {
        let { focus: o } = e,
          i = gi('PopoverPanel'),
          a = ee(() => Wn(i.panel)),
          l = `headlessui-focus-sentinel-before-${ln()}`,
          q = `headlessui-focus-sentinel-after-${ln()}`
        n({ el: i.panel, $el: i.panel }),
          wt(() => {
            i.panelId.value = e.id
          }),
          It(() => {
            i.panelId.value = null
          }),
          Nn(Qs, i.panelId),
          et(() => {
            var J, O
            if (!o || i.popoverState.value !== 0 || !i.panel) return
            let G = (J = a.value) == null ? void 0 : J.activeElement
            ;((O = pe(i.panel)) != null && O.contains(G)) || Sr(pe(i.panel), Yt.First)
          })
        let s = rV(),
          c = ee(() => (s !== null ? (s.value & qn.Open) === qn.Open : i.popoverState.value === 0))
        function V(J) {
          var O, G
          switch (J.key) {
            case rr.Escape:
              if (
                i.popoverState.value !== 0 ||
                !pe(i.panel) ||
                (a.value && !((O = pe(i.panel)) != null && O.contains(a.value.activeElement)))
              )
                return
              J.preventDefault(),
                J.stopPropagation(),
                i.closePopover(),
                (G = pe(i.button)) == null || G.focus()
              break
          }
        }
        function A(J) {
          var O, G, Y, L, D
          let qe = J.relatedTarget
          qe &&
            pe(i.panel) &&
            (((O = pe(i.panel)) != null && O.contains(qe)) ||
              (i.closePopover(),
              (((Y = (G = pe(i.beforePanelSentinel)) == null ? void 0 : G.contains) != null &&
                Y.call(G, qe)) ||
                ((D = (L = pe(i.afterPanelSentinel)) == null ? void 0 : L.contains) != null &&
                  D.call(L, qe))) &&
                qe.focus({ preventScroll: !0 })))
        }
        let C = Gs()
        function y() {
          let J = pe(i.panel)
          if (!J) return
          function O() {
            Lt(C.value, {
              [kt.Forwards]: () => {
                var G
                Sr(J, Yt.First) === $n.Error &&
                  ((G = pe(i.afterPanelSentinel)) == null || G.focus())
              },
              [kt.Backwards]: () => {
                var G
                ;(G = pe(i.button)) == null || G.focus({ preventScroll: !0 })
              }
            })
          }
          O()
        }
        function w() {
          let J = pe(i.panel)
          if (!J) return
          function O() {
            Lt(C.value, {
              [kt.Forwards]: () => {
                let G = pe(i.button),
                  Y = pe(i.panel)
                if (!G) return
                let L = Xn(),
                  D = L.indexOf(G),
                  qe = L.slice(0, D + 1),
                  Ve = [...L.slice(D + 1), ...qe]
                for (let $ of Ve.slice())
                  if ($.dataset.headlessuiFocusGuard === 'true' || (Y != null && Y.contains($))) {
                    let de = Ve.indexOf($)
                    de !== -1 && Ve.splice(de, 1)
                  }
                Sr(Ve, Yt.First, { sorted: !1 })
              },
              [kt.Backwards]: () => {
                var G
                Sr(J, Yt.Previous) === $n.Error && ((G = pe(i.button)) == null || G.focus())
              }
            })
          }
          O()
        }
        return () => {
          let J = { open: i.popoverState.value === 0, close: i.close },
            { id: O, focus: G, ...Y } = e,
            L = {
              ref: i.panel,
              id: O,
              onKeydown: V,
              onFocusout: o && i.popoverState.value === 0 ? A : void 0,
              tabIndex: -1
            }
          return zn({
            ourProps: L,
            theirProps: { ...t, ...Y },
            attrs: t,
            slot: J,
            slots: {
              ...r,
              default: (...D) => {
                var qe
                return [
                  vr(Pe, [
                    c.value &&
                      i.isPortalled.value &&
                      vr(pi, {
                        id: l,
                        ref: i.beforePanelSentinel,
                        features: eo.Focusable,
                        'data-headlessui-focus-guard': !0,
                        as: 'button',
                        type: 'button',
                        onFocus: y
                      }),
                    (qe = r.default) == null ? void 0 : qe.call(r, ...D),
                    c.value &&
                      i.isPortalled.value &&
                      vr(pi, {
                        id: q,
                        ref: i.afterPanelSentinel,
                        features: eo.Focusable,
                        'data-headlessui-focus-guard': !0,
                        as: 'button',
                        type: 'button',
                        onFocus: w
                      })
                  ])
                ]
              }
            },
            features: ui.RenderStrategy | ui.Static,
            visible: c.value,
            name: 'PopoverPanel'
          })
        }
      }
    })
  const vV = ['width', 'height', 'fill', 'transform'],
    CV = { key: 0 },
    MV = T(
      'path',
      {
        d: 'M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm52-84a12,12,0,0,1-12,12H117l11.52,11.51a12,12,0,0,1-17,17l-32-32a12,12,0,0,1,0-17l32-32a12,12,0,0,1,17,17L117,116h51A12,12,0,0,1,180,128Z'
      },
      null,
      -1
    ),
    yV = [MV],
    SV = { key: 1 },
    EV = T(
      'path',
      { d: 'M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z', opacity: '0.2' },
      null,
      -1
    ),
    TV = T(
      'path',
      {
        d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z'
      },
      null,
      -1
    ),
    wV = [EV, TV],
    IV = { key: 2 },
    RV = T(
      'path',
      {
        d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,112H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168a8,8,0,0,1,0,16Z'
      },
      null,
      -1
    ),
    DV = [RV],
    bV = { key: 3 },
    xV = T(
      'path',
      {
        d: 'M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm46-90a6,6,0,0,1-6,6H102.49l21.75,21.76a6,6,0,1,1-8.48,8.48l-32-32a6,6,0,0,1,0-8.48l32-32a6,6,0,0,1,8.48,8.48L102.49,122H168A6,6,0,0,1,174,128Z'
      },
      null,
      -1
    ),
    BV = [xV],
    GV = { key: 4 },
    FV = T(
      'path',
      {
        d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H107.31l18.35,18.34a8,8,0,0,1-11.32,11.32l-32-32a8,8,0,0,1,0-11.32l32-32a8,8,0,0,1,11.32,11.32L107.31,120H168A8,8,0,0,1,176,128Z'
      },
      null,
      -1
    ),
    OV = [FV],
    QV = { key: 5 },
    LV = T(
      'path',
      {
        d: 'M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm44-92a4,4,0,0,1-4,4H97.66l25.17,25.17a4,4,0,0,1-5.66,5.66l-32-32a4,4,0,0,1,0-5.66l32-32a4,4,0,0,1,5.66,5.66L97.66,124H168A4,4,0,0,1,172,128Z'
      },
      null,
      -1
    ),
    YV = [LV],
    kV = { name: 'PhArrowCircleLeft' },
    NV = Re({
      ...kV,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', CV, yV))
                : M(a) === 'duotone'
                ? (B(), F('g', SV, wV))
                : M(a) === 'fill'
                ? (B(), F('g', IV, DV))
                : M(a) === 'light'
                ? (B(), F('g', bV, BV))
                : M(a) === 'regular'
                ? (B(), F('g', GV, OV))
                : M(a) === 'thin'
                ? (B(), F('g', QV, YV))
                : _e('', !0)
            ],
            16,
            vV
          )
        )
      }
    }),
    PV = ['width', 'height', 'fill', 'transform'],
    ZV = { key: 0 },
    HV = T(
      'path',
      {
        d: 'M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212Zm48.49-92.49a12,12,0,0,1,0,17l-32,32a12,12,0,1,1-17-17L139,140H88a12,12,0,0,1,0-24h51l-11.52-11.51a12,12,0,1,1,17-17Z'
      },
      null,
      -1
    ),
    UV = [HV],
    jV = { key: 1 },
    JV = T(
      'path',
      { d: 'M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z', opacity: '0.2' },
      null,
      -1
    ),
    KV = T(
      'path',
      {
        d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z'
      },
      null,
      -1
    ),
    zV = [JV, KV],
    _V = { key: 2 },
    WV = T(
      'path',
      {
        d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,109.66-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32l32,32A8,8,0,0,1,173.66,133.66Z'
      },
      null,
      -1
    ),
    $V = [WV],
    XV = { key: 3 },
    e0 = T(
      'path',
      {
        d: 'M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218Zm44.24-94.24a6,6,0,0,1,0,8.48l-32,32a6,6,0,0,1-8.48-8.48L153.51,134H88a6,6,0,0,1,0-12h65.51l-21.75-21.76a6,6,0,0,1,8.48-8.48Z'
      },
      null,
      -1
    ),
    t0 = [e0],
    r0 = { key: 4 },
    n0 = T(
      'path',
      {
        d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm45.66-93.66a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L148.69,136H88a8,8,0,0,1,0-16h60.69l-18.35-18.34a8,8,0,0,1,11.32-11.32Z'
      },
      null,
      -1
    ),
    o0 = [n0],
    i0 = { key: 5 },
    a0 = T(
      'path',
      {
        d: 'M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220Zm42.83-94.83a4,4,0,0,1,0,5.66l-32,32a4,4,0,0,1-5.66-5.66L158.34,132H88a4,4,0,0,1,0-8h70.34L133.17,98.83a4,4,0,0,1,5.66-5.66Z'
      },
      null,
      -1
    ),
    s0 = [a0],
    l0 = { name: 'PhArrowCircleRight' },
    q0 = Re({
      ...l0,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', ZV, UV))
                : M(a) === 'duotone'
                ? (B(), F('g', jV, zV))
                : M(a) === 'fill'
                ? (B(), F('g', _V, $V))
                : M(a) === 'light'
                ? (B(), F('g', XV, t0))
                : M(a) === 'regular'
                ? (B(), F('g', r0, o0))
                : M(a) === 'thin'
                ? (B(), F('g', i0, s0))
                : _e('', !0)
            ],
            16,
            PV
          )
        )
      }
    }),
    c0 = ['width', 'height', 'fill', 'transform'],
    u0 = { key: 0 },
    V0 = T(
      'path',
      {
        d: 'M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z'
      },
      null,
      -1
    ),
    d0 = [V0],
    f0 = { key: 1 },
    A0 = T('path', { d: 'M112,56V200L40,128Z', opacity: '0.2' }, null, -1),
    p0 = T(
      'path',
      {
        d: 'M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z'
      },
      null,
      -1
    ),
    g0 = [A0, p0],
    h0 = { key: 2 },
    m0 = T(
      'path',
      {
        d: 'M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z'
      },
      null,
      -1
    ),
    v0 = [m0],
    C0 = { key: 3 },
    M0 = T(
      'path',
      {
        d: 'M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z'
      },
      null,
      -1
    ),
    y0 = [M0],
    S0 = { key: 4 },
    E0 = T(
      'path',
      {
        d: 'M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z'
      },
      null,
      -1
    ),
    T0 = [E0],
    w0 = { key: 5 },
    I0 = T(
      'path',
      {
        d: 'M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z'
      },
      null,
      -1
    ),
    R0 = [I0],
    D0 = { name: 'PhArrowLeft' },
    b0 = Re({
      ...D0,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', u0, d0))
                : M(a) === 'duotone'
                ? (B(), F('g', f0, g0))
                : M(a) === 'fill'
                ? (B(), F('g', h0, v0))
                : M(a) === 'light'
                ? (B(), F('g', C0, y0))
                : M(a) === 'regular'
                ? (B(), F('g', S0, T0))
                : M(a) === 'thin'
                ? (B(), F('g', w0, R0))
                : _e('', !0)
            ],
            16,
            c0
          )
        )
      }
    }),
    x0 = ['width', 'height', 'fill', 'transform'],
    B0 = { key: 0 },
    G0 = T(
      'path',
      {
        d: 'M180,140H164V116h16a40,40,0,1,0-40-40V92H116V76a40,40,0,1,0-40,40H92v24H76a40,40,0,1,0,40,40V164h24v16a40,40,0,1,0,40-40ZM164,76a16,16,0,1,1,16,16H164ZM60,76a16,16,0,0,1,32,0V92H76A16,16,0,0,1,60,76ZM92,180a16,16,0,1,1-16-16H92Zm24-64h24v24H116Zm64,80a16,16,0,0,1-16-16V164h16a16,16,0,0,1,0,32Z'
      },
      null,
      -1
    ),
    F0 = [G0],
    O0 = { key: 1 },
    Q0 = T(
      'path',
      {
        d: 'M208,76h0a28,28,0,0,1-28,28H152V76a28,28,0,0,1,28-28h0A28,28,0,0,1,208,76ZM76,48h0A28,28,0,0,0,48,76h0a28,28,0,0,0,28,28h28V76A28,28,0,0,0,76,48ZM180,152H152v28a28,28,0,0,0,28,28h0a28,28,0,0,0,28-28h0A28,28,0,0,0,180,152ZM48,180h0a28,28,0,0,0,28,28h0a28,28,0,0,0,28-28V152H76A28,28,0,0,0,48,180Z',
        opacity: '0.2'
      },
      null,
      -1
    ),
    L0 = T(
      'path',
      {
        d: 'M180,144H160V112h20a36,36,0,1,0-36-36V96H112V76a36,36,0,1,0-36,36H96v32H76a36,36,0,1,0,36,36V160h32v20a36,36,0,1,0,36-36ZM160,76a20,20,0,1,1,20,20H160ZM56,76a20,20,0,0,1,40,0V96H76A20,20,0,0,1,56,76ZM96,180a20,20,0,1,1-20-20H96Zm16-68h32v32H112Zm68,88a20,20,0,0,1-20-20V160h20a20,20,0,0,1,0,40Z'
      },
      null,
      -1
    ),
    Y0 = [Q0, L0],
    k0 = { key: 2 },
    N0 = T(
      'path',
      {
        d: 'M100,86.38V100H86.38A14.25,14.25,0,0,1,72,87,14,14,0,0,1,87,72,14.25,14.25,0,0,1,100,86.38ZM72,169a14,14,0,0,0,15,15,14.25,14.25,0,0,0,13-14.34V156H86.38A14.25,14.25,0,0,0,72,169ZM184,87a14,14,0,0,0-15-15,14.25,14.25,0,0,0-13,14.34V100h13.62A14.25,14.25,0,0,0,184,87Zm40-23V192a32,32,0,0,1-32,32H64a32,32,0,0,1-32-32V64A32,32,0,0,1,64,32H192A32,32,0,0,1,224,64Zm-68,76V116h13.38c16.39,0,30.21-12.88,30.61-29.25A30,30,0,0,0,169.25,56C152.88,56.41,140,70.23,140,86.62V100H116V86.62C116,70.23,103.12,56.41,86.75,56A30,30,0,0,0,56,86.75C56.41,103.12,70.23,116,86.62,116H100v24H86.62C70.23,140,56.41,152.88,56,169.25A30,30,0,0,0,86.75,200c16.37-.4,29.25-14.22,29.25-30.61V156h24v13.38c0,16.39,12.88,30.21,29.25,30.61A30,30,0,0,0,200,169.25c-.4-16.37-14.22-29.25-30.61-29.25Zm-40,0h24V116H116Zm40,30a14,14,0,1,0,14-14H156Z'
      },
      null,
      -1
    ),
    P0 = [N0],
    Z0 = { key: 3 },
    H0 = T(
      'path',
      {
        d: 'M180,146H158V110h22a34,34,0,1,0-34-34V98H110V76a34,34,0,1,0-34,34H98v36H76a34,34,0,1,0,34,34V158h36v22a34,34,0,1,0,34-34ZM158,76a22,22,0,1,1,22,22H158ZM54,76a22,22,0,0,1,44,0V98H76A22,22,0,0,1,54,76ZM98,180a22,22,0,1,1-22-22H98Zm12-70h36v36H110Zm70,92a22,22,0,0,1-22-22V158h22a22,22,0,0,1,0,44Z'
      },
      null,
      -1
    ),
    U0 = [H0],
    j0 = { key: 4 },
    J0 = T(
      'path',
      {
        d: 'M180,144H160V112h20a36,36,0,1,0-36-36V96H112V76a36,36,0,1,0-36,36H96v32H76a36,36,0,1,0,36,36V160h32v20a36,36,0,1,0,36-36ZM160,76a20,20,0,1,1,20,20H160ZM56,76a20,20,0,0,1,40,0V96H76A20,20,0,0,1,56,76ZM96,180a20,20,0,1,1-20-20H96Zm16-68h32v32H112Zm68,88a20,20,0,0,1-20-20V160h20a20,20,0,0,1,0,40Z'
      },
      null,
      -1
    ),
    K0 = [J0],
    z0 = { key: 5 },
    _0 = T(
      'path',
      {
        d: 'M180,148H156V108h24a32,32,0,1,0-32-32v24H108V76a32,32,0,1,0-32,32h24v40H76a32,32,0,1,0,32,32V156h40v24a32,32,0,1,0,32-32ZM156,76a24,24,0,1,1,24,24H156ZM52,76a24,24,0,0,1,48,0v24H76A24,24,0,0,1,52,76Zm48,104a24,24,0,1,1-24-24h24Zm8-72h40v40H108Zm72,96a24,24,0,0,1-24-24V156h24a24,24,0,0,1,0,48Z'
      },
      null,
      -1
    ),
    W0 = [_0],
    $0 = { name: 'PhCommand' },
    X0 = Re({
      ...$0,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', B0, F0))
                : M(a) === 'duotone'
                ? (B(), F('g', O0, Y0))
                : M(a) === 'fill'
                ? (B(), F('g', k0, P0))
                : M(a) === 'light'
                ? (B(), F('g', Z0, U0))
                : M(a) === 'regular'
                ? (B(), F('g', j0, K0))
                : M(a) === 'thin'
                ? (B(), F('g', z0, W0))
                : _e('', !0)
            ],
            16,
            x0
          )
        )
      }
    }),
    ed = ['width', 'height', 'fill', 'transform'],
    td = { key: 0 },
    rd = T(
      'path',
      { d: 'M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,40a8,8,0,1,1,8-8A8,8,0,0,1,128,136Z' },
      null,
      -1
    ),
    nd = [rd],
    od = { key: 1 },
    id = T(
      'path',
      { d: 'M152,128a24,24,0,1,1-24-24A24,24,0,0,1,152,128Z', opacity: '0.2' },
      null,
      -1
    ),
    ad = T(
      'path',
      {
        d: 'M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z'
      },
      null,
      -1
    ),
    sd = [id, ad],
    ld = { key: 2 },
    qd = T('path', { d: 'M156,128a28,28,0,1,1-28-28A28,28,0,0,1,156,128Z' }, null, -1),
    cd = [qd],
    ud = { key: 3 },
    Vd = T(
      'path',
      {
        d: 'M128,98a30,30,0,1,0,30,30A30,30,0,0,0,128,98Zm0,48a18,18,0,1,1,18-18A18,18,0,0,1,128,146Z'
      },
      null,
      -1
    ),
    dd = [Vd],
    fd = { key: 4 },
    Ad = T(
      'path',
      {
        d: 'M128,96a32,32,0,1,0,32,32A32,32,0,0,0,128,96Zm0,48a16,16,0,1,1,16-16A16,16,0,0,1,128,144Z'
      },
      null,
      -1
    ),
    pd = [Ad],
    gd = { key: 5 },
    hd = T(
      'path',
      {
        d: 'M128,100a28,28,0,1,0,28,28A28,28,0,0,0,128,100Zm0,48a20,20,0,1,1,20-20A20,20,0,0,1,128,148Z'
      },
      null,
      -1
    ),
    md = [hd],
    vd = { name: 'PhDotOutline' },
    ks = Re({
      ...vd,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', td, nd))
                : M(a) === 'duotone'
                ? (B(), F('g', od, sd))
                : M(a) === 'fill'
                ? (B(), F('g', ld, cd))
                : M(a) === 'light'
                ? (B(), F('g', ud, dd))
                : M(a) === 'regular'
                ? (B(), F('g', fd, pd))
                : M(a) === 'thin'
                ? (B(), F('g', gd, md))
                : _e('', !0)
            ],
            16,
            ed
          )
        )
      }
    }),
    Cd = ['width', 'height', 'fill', 'transform'],
    Md = { key: 0 },
    yd = T(
      'path',
      {
        d: 'M222.14,77.17,178.83,33.86A19.86,19.86,0,0,0,164.69,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V91.31A19.86,19.86,0,0,0,222.14,77.17ZM164,204H92V156h72Zm40,0H188V152a20,20,0,0,0-20-20H88a20,20,0,0,0-20,20v52H52V52H163l41,41ZM164,80a12,12,0,0,1-12,12H96a12,12,0,0,1,0-24h56A12,12,0,0,1,164,80Z'
      },
      null,
      -1
    ),
    Sd = [yd],
    Ed = { key: 1 },
    Td = T(
      'path',
      {
        d: 'M216,91.31V208a8,8,0,0,1-8,8H176V152a8,8,0,0,0-8-8H88a8,8,0,0,0-8,8v64H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.69a8,8,0,0,1,5.65,2.34l43.32,43.31A8,8,0,0,1,216,91.31Z',
        opacity: '0.2'
      },
      null,
      -1
    ),
    wd = T(
      'path',
      {
        d: 'M219.31,80,176,36.69A15.86,15.86,0,0,0,164.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.31A15.86,15.86,0,0,0,219.31,80ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.69L208,91.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z'
      },
      null,
      -1
    ),
    Id = [Td, wd],
    Rd = { key: 2 },
    Dd = T(
      'path',
      {
        d: 'M219.31,80,176,36.69A15.86,15.86,0,0,0,164.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.31A15.86,15.86,0,0,0,219.31,80ZM208,208H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.69L208,91.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z'
      },
      null,
      -1
    ),
    bd = [Dd],
    xd = { key: 3 },
    Bd = T(
      'path',
      {
        d: 'M217.9,81.42,174.58,38.1a13.9,13.9,0,0,0-9.89-4.1H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V91.31A13.9,13.9,0,0,0,217.9,81.42ZM170,210H86V152a2,2,0,0,1,2-2h80a2,2,0,0,1,2,2Zm40-2a2,2,0,0,1-2,2H182V152a14,14,0,0,0-14-14H88a14,14,0,0,0-14,14v58H48a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H164.69a2,2,0,0,1,1.41.58L209.42,89.9a2,2,0,0,1,.58,1.41ZM158,72a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h56A6,6,0,0,1,158,72Z'
      },
      null,
      -1
    ),
    Gd = [Bd],
    Fd = { key: 4 },
    Od = T(
      'path',
      {
        d: 'M219.31,80,176,36.69A15.86,15.86,0,0,0,164.69,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V91.31A15.86,15.86,0,0,0,219.31,80ZM168,208H88V152h80Zm40,0H184V152a16,16,0,0,0-16-16H88a16,16,0,0,0-16,16v56H48V48H164.69L208,91.31ZM160,72a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h56A8,8,0,0,1,160,72Z'
      },
      null,
      -1
    ),
    Qd = [Od],
    Ld = { key: 5 },
    Yd = T(
      'path',
      {
        d: 'M216.49,82.83,173.17,39.51A11.93,11.93,0,0,0,164.69,36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V91.31A11.93,11.93,0,0,0,216.49,82.83ZM172,212H84V152a4,4,0,0,1,4-4h80a4,4,0,0,1,4,4Zm40-4a4,4,0,0,1-4,4H180V152a12,12,0,0,0-12-12H88a12,12,0,0,0-12,12v60H48a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H164.69a4,4,0,0,1,2.82,1.17l43.32,43.32A4,4,0,0,1,212,91.31ZM156,72a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h56A4,4,0,0,1,156,72Z'
      },
      null,
      -1
    ),
    kd = [Yd],
    Nd = { name: 'PhFloppyDisk' },
    Pd = Re({
      ...Nd,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', Md, Sd))
                : M(a) === 'duotone'
                ? (B(), F('g', Ed, Id))
                : M(a) === 'fill'
                ? (B(), F('g', Rd, bd))
                : M(a) === 'light'
                ? (B(), F('g', xd, Gd))
                : M(a) === 'regular'
                ? (B(), F('g', Fd, Qd))
                : M(a) === 'thin'
                ? (B(), F('g', Ld, kd))
                : _e('', !0)
            ],
            16,
            Cd
          )
        )
      }
    }),
    Zd = ['width', 'height', 'fill', 'transform'],
    Hd = { key: 0 },
    Ud = T(
      'path',
      {
        d: 'M128,172a52.06,52.06,0,0,0,52-52V64A52,52,0,0,0,76,64v56A52.06,52.06,0,0,0,128,172ZM100,64a28,28,0,0,1,56,0v56a28,28,0,0,1-56,0Zm40,147.22V232a12,12,0,0,1-24,0V211.22A92.14,92.14,0,0,1,36,120a12,12,0,0,1,24,0,68,68,0,0,0,136,0,12,12,0,0,1,24,0A92.14,92.14,0,0,1,140,211.22Z'
      },
      null,
      -1
    ),
    jd = [Ud],
    Jd = { key: 1 },
    Kd = T(
      'path',
      {
        d: 'M168,64v64a40,40,0,0,1-40,40h0a40,40,0,0,1-40-40V64a40,40,0,0,1,40-40h0A40,40,0,0,1,168,64Z',
        opacity: '0.2'
      },
      null,
      -1
    ),
    zd = T(
      'path',
      {
        d: 'M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z'
      },
      null,
      -1
    ),
    _d = [Kd, zd],
    Wd = { key: 2 },
    $d = T(
      'path',
      {
        d: 'M80,128V64a48,48,0,0,1,96,0v64a48,48,0,0,1-96,0Zm128,0a8,8,0,0,0-16,0,64,64,0,0,1-128,0,8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V232a8,8,0,0,0,16,0V207.6A80.11,80.11,0,0,0,208,128Z'
      },
      null,
      -1
    ),
    Xd = [$d],
    ef = { key: 3 },
    tf = T(
      'path',
      {
        d: 'M128,174a46.06,46.06,0,0,0,46-46V64a46,46,0,0,0-92,0v64A46.06,46.06,0,0,0,128,174ZM94,64a34,34,0,0,1,68,0v64a34,34,0,0,1-68,0Zm40,141.75V232a6,6,0,0,1-12,0V205.75A78.09,78.09,0,0,1,50,128a6,6,0,0,1,12,0,66,66,0,0,0,132,0,6,6,0,0,1,12,0A78.09,78.09,0,0,1,134,205.75Z'
      },
      null,
      -1
    ),
    rf = [tf],
    nf = { key: 4 },
    of = T(
      'path',
      {
        d: 'M128,176a48.05,48.05,0,0,0,48-48V64a48,48,0,0,0-96,0v64A48.05,48.05,0,0,0,128,176ZM96,64a32,32,0,0,1,64,0v64a32,32,0,0,1-64,0Zm40,143.6V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,128,0,8,8,0,0,1,16,0A80.11,80.11,0,0,1,136,207.6Z'
      },
      null,
      -1
    ),
    af = [of],
    sf = { key: 5 },
    lf = T(
      'path',
      {
        d: 'M128,172a44.05,44.05,0,0,0,44-44V64a44,44,0,0,0-88,0v64A44.05,44.05,0,0,0,128,172ZM92,64a36,36,0,0,1,72,0v64a36,36,0,0,1-72,0Zm40,139.89V232a4,4,0,0,1-8,0V203.89A76.09,76.09,0,0,1,52,128a4,4,0,0,1,8,0,68,68,0,0,0,136,0,4,4,0,0,1,8,0A76.09,76.09,0,0,1,132,203.89Z'
      },
      null,
      -1
    ),
    qf = [lf],
    cf = { name: 'PhMicrophone' },
    uf = Re({
      ...cf,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', Hd, jd))
                : M(a) === 'duotone'
                ? (B(), F('g', Jd, _d))
                : M(a) === 'fill'
                ? (B(), F('g', Wd, Xd))
                : M(a) === 'light'
                ? (B(), F('g', ef, rf))
                : M(a) === 'regular'
                ? (B(), F('g', nf, af))
                : M(a) === 'thin'
                ? (B(), F('g', sf, qf))
                : _e('', !0)
            ],
            16,
            Zd
          )
        )
      }
    }),
    Vf = ['width', 'height', 'fill', 'transform'],
    df = { key: 0 },
    ff = T(
      'path',
      {
        d: 'M56.88,31.93A12,12,0,1,0,39.12,48.07L76,88.64V120a52,52,0,0,0,72.11,48l11.26,12.39A67.34,67.34,0,0,1,128,188a68.07,68.07,0,0,1-68-68,12,12,0,0,0-24,0,92.14,92.14,0,0,0,80,91.22V232a12,12,0,0,0,24,0V211.23a90.39,90.39,0,0,0,35.92-12.68l23.2,25.52a12,12,0,0,0,17.76-16.14ZM128,148a28,28,0,0,1-28-28v-5l29.9,32.89C129.27,148,128.64,148,128,148ZM90.67,45.27a12,12,0,0,1-.48-17A52,52,0,0,1,180,64v48.54a12,12,0,1,1-24,0V64a28,28,0,0,0-48.36-19.22A12,12,0,0,1,90.67,45.27ZM191,145.58A67.63,67.63,0,0,0,196,120a12,12,0,0,1,24,0,91.48,91.48,0,0,1-6.74,34.61,12,12,0,0,1-22.23-9Z'
      },
      null,
      -1
    ),
    Af = [ff],
    pf = { key: 1 },
    gf = T(
      'path',
      {
        d: 'M168,64v64a40,40,0,0,1-40,40h0a40,40,0,0,1-40-40V64a40,40,0,0,1,40-40h0A40,40,0,0,1,168,64Z',
        opacity: '0.2'
      },
      null,
      -1
    ),
    hf = T(
      'path',
      {
        d: 'M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L80,87.09V128a48,48,0,0,0,73.91,40.4l10.88,12A64,64,0,0,1,64,128a8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V232a8,8,0,0,0,16,0V207.59a79.74,79.74,0,0,0,39.62-15.31l26.46,29.1a8,8,0,1,0,11.84-10.76ZM128,160a32,32,0,0,1-32-32V104.69l46.92,51.62A32,32,0,0,1,128,160ZM87.16,38.78A48,48,0,0,1,176,64v60.43a8,8,0,0,1-16,0V64a32,32,0,0,0-59.24-16.81,8,8,0,1,1-13.6-8.41ZM187.64,151.27A63.71,63.71,0,0,0,192,128a8,8,0,0,1,16,0,79.62,79.62,0,0,1-5.46,29.09,8,8,0,1,1-14.9-5.82Z'
      },
      null,
      -1
    ),
    mf = [gf, hf],
    vf = { key: 2 },
    Cf = T(
      'path',
      {
        d: 'M213.38,221.92a8,8,0,0,1-11.3-.54l-26.46-29.1A79.74,79.74,0,0,1,136,207.59V232a8,8,0,0,1-16,0V207.6A80.11,80.11,0,0,1,48,128a8,8,0,0,1,16,0,64,64,0,0,0,100.79,52.36l-10.88-12A48,48,0,0,1,80,128V87.09L42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92Zm-51.3-92.11A8,8,0,0,0,176,124.43V64A48,48,0,0,0,87.16,38.78,8,8,0,0,0,88,48.37Zm30.1,31.83a8,8,0,0,0,10.36-4.55A79.62,79.62,0,0,0,208,128a8,8,0,0,0-16,0,63.71,63.71,0,0,1-4.36,23.27A8,8,0,0,0,192.18,161.64Z'
      },
      null,
      -1
    ),
    Mf = [Cf],
    yf = { key: 3 },
    Sf = T(
      'path',
      {
        d: 'M212.44,212,52.44,36A6,6,0,0,0,43.56,44L82,86.32V128a46,46,0,0,0,72.24,37.78l13.53,14.89A66,66,0,0,1,62,128a6,6,0,0,0-12,0,78.09,78.09,0,0,0,72,77.75V232a6,6,0,0,0,12,0V205.75a77.68,77.68,0,0,0,41.86-16.18L203.56,220a6,6,0,0,0,8.88-8.08ZM128,162a34,34,0,0,1-34-34V99.52l52.07,57.28A33.92,33.92,0,0,1,128,162ZM88.86,39.83A46,46,0,0,1,174,64v60.43a6,6,0,0,1-12,0V64A34,34,0,0,0,99.06,46.14a6,6,0,1,1-10.2-6.31ZM189.5,152a65.55,65.55,0,0,0,4.5-24,6,6,0,0,1,12,0,77.65,77.65,0,0,1-5.32,28.37,6,6,0,0,1-5.59,3.82A6,6,0,0,1,189.5,152Z'
      },
      null,
      -1
    ),
    Ef = [Sf],
    Tf = { key: 4 },
    wf = T(
      'path',
      {
        d: 'M213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L80,87.09V128a48,48,0,0,0,73.91,40.4l10.88,12A64,64,0,0,1,64,128a8,8,0,0,0-16,0,80.11,80.11,0,0,0,72,79.6V232a8,8,0,0,0,16,0V207.59a79.74,79.74,0,0,0,39.62-15.31l26.46,29.1a8,8,0,1,0,11.84-10.76ZM128,160a32,32,0,0,1-32-32V104.69l46.92,51.62A32,32,0,0,1,128,160ZM87.16,38.78A48,48,0,0,1,176,64v60.43a8,8,0,0,1-16,0V64a32,32,0,0,0-59.24-16.81,8,8,0,1,1-13.6-8.41ZM187.64,151.27A63.71,63.71,0,0,0,192,128a8,8,0,0,1,16,0,79.62,79.62,0,0,1-5.46,29.09,8,8,0,1,1-14.9-5.82Z'
      },
      null,
      -1
    ),
    If = [wf],
    Rf = { key: 5 },
    Df = T(
      'path',
      {
        d: 'M211,213.31,51,37.31A4,4,0,0,0,45,42.69L84,85.55V128a44,44,0,0,0,70.52,35.11l16.17,17.8A68,68,0,0,1,60,128a4,4,0,0,0-8,0,76.09,76.09,0,0,0,72,75.89V232a4,4,0,0,0,8,0V203.89a75.76,75.76,0,0,0,44.09-17L205,218.69a4,4,0,1,0,5.92-5.38ZM128,164a36,36,0,0,1-36-36V94.35l57.1,62.81A35.9,35.9,0,0,1,128,164ZM90.56,40.88A44,44,0,0,1,172,64v60.43a4,4,0,0,1-8,0V64A36,36,0,0,0,97.36,45.09a4,4,0,1,1-6.8-4.21ZM191.37,152.73A67.81,67.81,0,0,0,196,128a4,4,0,0,1,8,0,75.64,75.64,0,0,1-5.18,27.64,4,4,0,0,1-3.73,2.54,3.88,3.88,0,0,1-1.45-.27A4,4,0,0,1,191.37,152.73Z'
      },
      null,
      -1
    ),
    bf = [Df],
    xf = { name: 'PhMicrophoneSlash' },
    Bf = Re({
      ...xf,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', df, Af))
                : M(a) === 'duotone'
                ? (B(), F('g', pf, mf))
                : M(a) === 'fill'
                ? (B(), F('g', vf, Mf))
                : M(a) === 'light'
                ? (B(), F('g', yf, Ef))
                : M(a) === 'regular'
                ? (B(), F('g', Tf, If))
                : M(a) === 'thin'
                ? (B(), F('g', Rf, bf))
                : _e('', !0)
            ],
            16,
            Vf
          )
        )
      }
    }),
    Gf = ['width', 'height', 'fill', 'transform'],
    Ff = { key: 0 },
    Of = T(
      'path',
      {
        d: 'M108,108a12,12,0,0,1,12-12h56a12,12,0,0,1,0,24H120A12,12,0,0,1,108,108Zm68,28H120a12,12,0,0,0,0,24h56a12,12,0,0,0,0-24Zm52-88V208a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V48A20,20,0,0,1,48,28H208A20,20,0,0,1,228,48ZM52,204H68V52H52ZM204,52H92V204H204Z'
      },
      null,
      -1
    ),
    Qf = [Of],
    Lf = { key: 1 },
    Yf = T(
      'path',
      { d: 'M80,40V216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8Z', opacity: '0.2' },
      null,
      -1
    ),
    kf = T(
      'path',
      {
        d: 'M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z'
      },
      null,
      -1
    ),
    Nf = [Yf, kf],
    Pf = { key: 2 },
    Zf = T(
      'path',
      {
        d: 'M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,208H48V48H80Zm96-56H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H112a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z'
      },
      null,
      -1
    ),
    Hf = [Zf],
    Uf = { key: 3 },
    jf = T(
      'path',
      {
        d: 'M182,112a6,6,0,0,1-6,6H112a6,6,0,0,1,0-12h64A6,6,0,0,1,182,112Zm-6,26H112a6,6,0,0,0,0,12h64a6,6,0,0,0,0-12Zm46-90V208a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V48A14,14,0,0,1,48,34H208A14,14,0,0,1,222,48ZM48,210H74V46H48a2,2,0,0,0-2,2V208A2,2,0,0,0,48,210ZM210,48a2,2,0,0,0-2-2H86V210H208a2,2,0,0,0,2-2Z'
      },
      null,
      -1
    ),
    Jf = [jf],
    Kf = { key: 4 },
    zf = T(
      'path',
      {
        d: 'M184,112a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h64A8,8,0,0,1,184,112Zm-8,24H112a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Zm48-88V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM48,208H72V48H48Zm160,0V48H88V208H208Z'
      },
      null,
      -1
    ),
    _f = [zf],
    Wf = { key: 5 },
    $f = T(
      'path',
      {
        d: 'M180,112a4,4,0,0,1-4,4H112a4,4,0,0,1,0-8h64A4,4,0,0,1,180,112Zm-4,28H112a4,4,0,0,0,0,8h64a4,4,0,0,0,0-8Zm44-92V208a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V48A12,12,0,0,1,48,36H208A12,12,0,0,1,220,48ZM48,212H76V44H48a4,4,0,0,0-4,4V208A4,4,0,0,0,48,212ZM212,48a4,4,0,0,0-4-4H84V212H208a4,4,0,0,0,4-4Z'
      },
      null,
      -1
    ),
    Xf = [$f],
    eA = { name: 'PhNotebook' },
    tA = Re({
      ...eA,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', Ff, Qf))
                : M(a) === 'duotone'
                ? (B(), F('g', Lf, Nf))
                : M(a) === 'fill'
                ? (B(), F('g', Pf, Hf))
                : M(a) === 'light'
                ? (B(), F('g', Uf, Jf))
                : M(a) === 'regular'
                ? (B(), F('g', Kf, _f))
                : M(a) === 'thin'
                ? (B(), F('g', Wf, Xf))
                : _e('', !0)
            ],
            16,
            Gf
          )
        )
      }
    }),
    rA = ['width', 'height', 'fill', 'transform'],
    nA = { key: 0 },
    oA = T(
      'path',
      {
        d: 'M200,28H160a20,20,0,0,0-20,20V208a20,20,0,0,0,20,20h40a20,20,0,0,0,20-20V48A20,20,0,0,0,200,28Zm-4,176H164V52h32ZM96,28H56A20,20,0,0,0,36,48V208a20,20,0,0,0,20,20H96a20,20,0,0,0,20-20V48A20,20,0,0,0,96,28ZM92,204H60V52H92Z'
      },
      null,
      -1
    ),
    iA = [oA],
    aA = { key: 1 },
    sA = T(
      'path',
      {
        d: 'M208,48V208a8,8,0,0,1-8,8H160a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h40A8,8,0,0,1,208,48ZM96,40H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z',
        opacity: '0.2'
      },
      null,
      -1
    ),
    lA = T(
      'path',
      {
        d: 'M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z'
      },
      null,
      -1
    ),
    qA = [sA, lA],
    cA = { key: 2 },
    uA = T(
      'path',
      {
        d: 'M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z'
      },
      null,
      -1
    ),
    VA = [uA],
    dA = { key: 3 },
    fA = T(
      'path',
      {
        d: 'M200,34H160a14,14,0,0,0-14,14V208a14,14,0,0,0,14,14h40a14,14,0,0,0,14-14V48A14,14,0,0,0,200,34Zm2,174a2,2,0,0,1-2,2H160a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2h40a2,2,0,0,1,2,2ZM96,34H56A14,14,0,0,0,42,48V208a14,14,0,0,0,14,14H96a14,14,0,0,0,14-14V48A14,14,0,0,0,96,34Zm2,174a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V48a2,2,0,0,1,2-2H96a2,2,0,0,1,2,2Z'
      },
      null,
      -1
    ),
    AA = [fA],
    pA = { key: 4 },
    gA = T(
      'path',
      {
        d: 'M200,32H160a16,16,0,0,0-16,16V208a16,16,0,0,0,16,16h40a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H160V48h40ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Zm0,176H56V48H96Z'
      },
      null,
      -1
    ),
    hA = [gA],
    mA = { key: 5 },
    vA = T(
      'path',
      {
        d: 'M200,36H160a12,12,0,0,0-12,12V208a12,12,0,0,0,12,12h40a12,12,0,0,0,12-12V48A12,12,0,0,0,200,36Zm4,172a4,4,0,0,1-4,4H160a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4h40a4,4,0,0,1,4,4ZM96,36H56A12,12,0,0,0,44,48V208a12,12,0,0,0,12,12H96a12,12,0,0,0,12-12V48A12,12,0,0,0,96,36Zm4,172a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V48a4,4,0,0,1,4-4H96a4,4,0,0,1,4,4Z'
      },
      null,
      -1
    ),
    CA = [vA],
    MA = { name: 'PhPause' },
    yA = Re({
      ...MA,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', nA, iA))
                : M(a) === 'duotone'
                ? (B(), F('g', aA, qA))
                : M(a) === 'fill'
                ? (B(), F('g', cA, VA))
                : M(a) === 'light'
                ? (B(), F('g', dA, AA))
                : M(a) === 'regular'
                ? (B(), F('g', pA, hA))
                : M(a) === 'thin'
                ? (B(), F('g', mA, CA))
                : _e('', !0)
            ],
            16,
            rA
          )
        )
      }
    }),
    SA = ['width', 'height', 'fill', 'transform'],
    EA = { key: 0 },
    TA = T(
      'path',
      {
        d: 'M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z'
      },
      null,
      -1
    ),
    wA = [TA],
    IA = { key: 1 },
    RA = T(
      'path',
      {
        d: 'M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z',
        opacity: '0.2'
      },
      null,
      -1
    ),
    DA = T(
      'path',
      {
        d: 'M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z'
      },
      null,
      -1
    ),
    bA = [RA, DA],
    xA = { key: 2 },
    BA = T(
      'path',
      {
        d: 'M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z'
      },
      null,
      -1
    ),
    GA = [BA],
    FA = { key: 3 },
    OA = T(
      'path',
      {
        d: 'M221.59,160.3l-47.24-21.17a14,14,0,0,0-13.28,1.22,4.81,4.81,0,0,0-.56.42l-24.69,21a1.88,1.88,0,0,1-1.68.06c-15.87-7.66-32.31-24-40-39.65a1.91,1.91,0,0,1,0-1.68l21.07-25a6.13,6.13,0,0,0,.42-.58,14,14,0,0,0,1.12-13.27L95.73,34.49a14,14,0,0,0-14.56-8.38A54.24,54.24,0,0,0,34,80c0,78.3,63.7,142,142,142a54.25,54.25,0,0,0,53.89-47.17A14,14,0,0,0,221.59,160.3ZM176,210C104.32,210,46,151.68,46,80A42.23,42.23,0,0,1,82.67,38h.23a2,2,0,0,1,1.84,1.31l21.1,47.11a2,2,0,0,1,0,1.67L84.73,113.15a4.73,4.73,0,0,0-.43.57,14,14,0,0,0-.91,13.73c8.87,18.16,27.17,36.32,45.53,45.19a14,14,0,0,0,13.77-1c.19-.13.38-.27.56-.42l24.68-21a1.92,1.92,0,0,1,1.6-.1l47.25,21.17a2,2,0,0,1,1.21,2A42.24,42.24,0,0,1,176,210Z'
      },
      null,
      -1
    ),
    QA = [OA],
    LA = { key: 4 },
    YA = T(
      'path',
      {
        d: 'M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z'
      },
      null,
      -1
    ),
    kA = [YA],
    NA = { key: 5 },
    PA = T(
      'path',
      {
        d: 'M220.78,162.13,173.56,141A12,12,0,0,0,162.18,142a3.37,3.37,0,0,0-.38.28L137,163.42a3.93,3.93,0,0,1-3.7.21c-16.24-7.84-33.05-24.52-40.89-40.57a3.9,3.9,0,0,1,.18-3.69l21.2-25.21c.1-.12.19-.25.28-.38a12,12,0,0,0,1-11.36L93.9,35.28a12,12,0,0,0-12.48-7.19A52.25,52.25,0,0,0,36,80c0,77.2,62.8,140,140,140a52.25,52.25,0,0,0,51.91-45.42A12,12,0,0,0,220.78,162.13ZM220,173.58A44.23,44.23,0,0,1,176,212C103.22,212,44,152.78,44,80A44.23,44.23,0,0,1,82.42,36a3.87,3.87,0,0,1,.48,0,4,4,0,0,1,3.67,2.49l21.11,47.14a4,4,0,0,1-.23,3.6l-21.19,25.2c-.1.13-.2.25-.29.39a12,12,0,0,0-.78,11.75c8.69,17.79,26.61,35.58,44.6,44.27a12,12,0,0,0,11.79-.87l.37-.28,24.83-21.12a3.93,3.93,0,0,1,3.57-.27l47.21,21.16A4,4,0,0,1,220,173.58Z'
      },
      null,
      -1
    ),
    ZA = [PA],
    HA = { name: 'PhPhone' },
    UA = Re({
      ...HA,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', EA, wA))
                : M(a) === 'duotone'
                ? (B(), F('g', IA, bA))
                : M(a) === 'fill'
                ? (B(), F('g', xA, GA))
                : M(a) === 'light'
                ? (B(), F('g', FA, QA))
                : M(a) === 'regular'
                ? (B(), F('g', LA, kA))
                : M(a) === 'thin'
                ? (B(), F('g', NA, ZA))
                : _e('', !0)
            ],
            16,
            SA
          )
        )
      }
    }),
    jA = ['width', 'height', 'fill', 'transform'],
    JA = { key: 0 },
    KA = T(
      'path',
      {
        d: 'M148.41,36.9a12,12,0,0,1,14.69-8.49A90.12,90.12,0,0,1,227.59,92.9a12,12,0,1,1-23.18,6.2A66.42,66.42,0,0,0,156.9,51.59,12,12,0,0,1,148.41,36.9Zm87.44,138.68A60.27,60.27,0,0,1,176,228C94.39,228,28,161.61,28,80A60.27,60.27,0,0,1,80.42,20.15,20.05,20.05,0,0,1,101.2,32l21.11,47.13a1.42,1.42,0,0,0,.08.18,20,20,0,0,1-1.66,18.83,10.67,10.67,0,0,1-.85,1.15L100.82,122c7.06,12.84,20.5,26.16,33.49,33.21l22.31-19a13.08,13.08,0,0,1,1.12-.84,19.91,19.91,0,0,1,19-1.74l.18.08L224,154.8A20.06,20.06,0,0,1,235.85,175.58Zm-24.31-.06-42-18.81-22.43,19.07a11.63,11.63,0,0,1-1.11.85A20,20,0,0,1,126.31,178c-19.48-9.4-38.89-28.68-48.31-48a20,20,0,0,1,1.28-19.64,10.75,10.75,0,0,1,.86-1.15L99.3,86.49l-18.82-42A36.29,36.29,0,0,0,52,80,124.15,124.15,0,0,0,176,204,36.29,36.29,0,0,0,211.54,175.52ZM145.63,89.47a32,32,0,0,1,20.9,20.9,12,12,0,0,0,11.44,8.4,12.22,12.22,0,0,0,3.61-.55,12,12,0,0,0,7.84-15,56,56,0,0,0-36.59-36.59,12,12,0,1,0-7.2,22.89Z'
      },
      null,
      -1
    ),
    zA = [KA],
    _A = { key: 1 },
    WA = T(
      'path',
      {
        d: 'M223.94,174.08A48.33,48.33,0,0,1,176,216,136,136,0,0,1,40,80,48.33,48.33,0,0,1,81.92,32.06a8,8,0,0,1,8.3,4.8l21.13,47.2a8,8,0,0,1-.66,7.53L89.32,117a7.93,7.93,0,0,0-.54,7.81c8.27,16.93,25.77,34.22,42.75,42.41a7.92,7.92,0,0,0,7.83-.59l25-21.3a8,8,0,0,1,7.59-.69l47.16,21.13A8,8,0,0,1,223.94,174.08Z',
        opacity: '0.2'
      },
      null,
      -1
    ),
    $A = T(
      'path',
      {
        d: 'M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z'
      },
      null,
      -1
    ),
    XA = [WA, $A],
    e1 = { key: 2 },
    t1 = T(
      'path',
      {
        d: 'M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z'
      },
      null,
      -1
    ),
    r1 = [t1],
    n1 = { key: 3 },
    o1 = T(
      'path',
      {
        d: 'M154.2,38.45a6,6,0,0,1,7.35-4.25A84.24,84.24,0,0,1,221.8,94.45a6,6,0,0,1-4.25,7.35,5.94,5.94,0,0,1-1.55.2,6,6,0,0,1-5.8-4.45A72.34,72.34,0,0,0,158.45,45.8,6,6,0,0,1,154.2,38.45ZM150.45,77.8C165,81.68,174.32,91,178.2,105.55A6,6,0,0,0,184,110a5.94,5.94,0,0,0,1.55-.2,6,6,0,0,0,4.25-7.35c-5-18.71-17.54-31.25-36.25-36.25a6,6,0,1,0-3.1,11.6Zm79.44,97A54.25,54.25,0,0,1,176,222C97.7,222,34,158.3,34,80A54.25,54.25,0,0,1,81.17,26.11,14,14,0,0,1,95.73,34.5l21.1,47.1a14,14,0,0,1-1.12,13.28,6,6,0,0,1-.42.57L94.22,120.51a1.89,1.89,0,0,0,0,1.67c7.66,15.68,24.1,32,40,39.65a1.88,1.88,0,0,0,1.68-.06l24.69-21a4.81,4.81,0,0,1,.56-.42,14,14,0,0,1,13.28-1.22l47.24,21.17A14,14,0,0,1,229.89,174.83ZM218,173.32a2,2,0,0,0-1.21-2l-47.25-21.17a1.92,1.92,0,0,0-1.6.1l-24.68,21c-.18.15-.37.29-.56.42a14,14,0,0,1-13.77,1c-18.36-8.87-36.66-27-45.53-45.19a14,14,0,0,1,.91-13.73,4.73,4.73,0,0,1,.43-.57l21.06-25.06a2,2,0,0,0,0-1.67L84.74,39.31A2,2,0,0,0,82.9,38h-.23A42.24,42.24,0,0,0,46,80c0,71.68,58.32,130,130,130A42.24,42.24,0,0,0,218,173.32Z'
      },
      null,
      -1
    ),
    i1 = [o1],
    a1 = { key: 4 },
    s1 = T(
      'path',
      {
        d: 'M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.94,70.35,70.35,0,0,0-50.33-50.33A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.54,26.33,26.33A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm81.94,95.35A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Zm-15.88-2s-.07,0-.11,0h0l-47-21.05-24.35,20.71a8.44,8.44,0,0,1-.74.56,16,16,0,0,1-15.75,1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16,16,0,0,1,1-15.7,6.13,6.13,0,0,1,.57-.77L104,87.15l-21-47a.61.61,0,0,1,0-.12A40.2,40.2,0,0,0,48,80,128.14,128.14,0,0,0,176,208,40.21,40.21,0,0,0,216,173.07Z'
      },
      null,
      -1
    ),
    l1 = [s1],
    q1 = { key: 5 },
    c1 = T(
      'path',
      {
        d: 'M156.14,39A4,4,0,0,1,161,36.13,82.24,82.24,0,0,1,219.86,95,4,4,0,0,1,217,99.86a3.65,3.65,0,0,1-1,.14,4,4,0,0,1-3.86-3A74.35,74.35,0,0,0,159,43.86,4,4,0,0,1,156.14,39ZM151,75.86C166,79.89,176.11,90,180.14,105a4,4,0,0,0,3.86,3,3.65,3.65,0,0,0,1-.14,4,4,0,0,0,2.83-4.89c-4.8-18-16.85-30-34.83-34.84A4,4,0,0,0,151,75.86Zm76.94,98.72A52.25,52.25,0,0,1,176,220C98.8,220,36,157.2,36,80A52.25,52.25,0,0,1,81.42,28.09,12,12,0,0,1,93.9,35.28L115,82.42a12,12,0,0,1-1,11.36c-.09.13-.18.26-.28.38l-21.2,25.21a3.9,3.9,0,0,0-.18,3.69c7.84,16.05,24.65,32.73,40.89,40.57a3.93,3.93,0,0,0,3.7-.21L161.8,142.3l.38-.29a12,12,0,0,1,11.38-1l47.22,21.16A12,12,0,0,1,227.91,174.58Zm-10.35-5.12L170.35,148.3a3.93,3.93,0,0,0-3.57.27L142,169.69l-.37.28a12,12,0,0,1-11.79.87c-18-8.69-35.91-26.48-44.6-44.27A12,12,0,0,1,86,114.82c.09-.14.19-.26.29-.39l21.19-25.2a4,4,0,0,0,.23-3.6L86.57,38.49A4,4,0,0,0,82.9,36a3.87,3.87,0,0,0-.48,0A44.23,44.23,0,0,0,44,80c0,72.78,59.22,132,132,132a44.23,44.23,0,0,0,44-38.42A4,4,0,0,0,217.56,169.46Z'
      },
      null,
      -1
    ),
    u1 = [c1],
    V1 = { name: 'PhPhoneCall' },
    to = Re({
      ...V1,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', JA, zA))
                : M(a) === 'duotone'
                ? (B(), F('g', _A, XA))
                : M(a) === 'fill'
                ? (B(), F('g', e1, r1))
                : M(a) === 'light'
                ? (B(), F('g', n1, i1))
                : M(a) === 'regular'
                ? (B(), F('g', a1, l1))
                : M(a) === 'thin'
                ? (B(), F('g', q1, u1))
                : _e('', !0)
            ],
            16,
            jA
          )
        )
      }
    }),
    d1 = ['width', 'height', 'fill', 'transform'],
    f1 = { key: 0 },
    A1 = T(
      'path',
      {
        d: 'M234.39,87.29c-57.67-57.72-155.11-57.72-212.78,0-21.45,21.47-23.52,53.13-5,77a20,20,0,0,0,22.92,6.37L88.4,153.29l.45-.16A20,20,0,0,0,101,138.47l5.44-27.24a72.48,72.48,0,0,1,42.76-.09L155,138.62a20,20,0,0,0,12.14,14.49l.45.17,48.94,17.37a20,20,0,0,0,22.91-6.37C257.91,140.42,255.84,108.76,234.39,87.29Zm-12.23,59.9L178,131.5,172.24,104a20,20,0,0,0-13-14.8,96.49,96.49,0,0,0-62.94.14A20,20,0,0,0,83.4,104.24L78,131.53,33.84,147.19c-9.16-13.85-7.41-30.77,4.73-42.92C62.81,80,95.41,67.88,128,67.88S193.19,80,217.43,104.27C229.57,116.42,231.32,133.35,222.16,147.19ZM228,200a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,200Z'
      },
      null,
      -1
    ),
    p1 = [A1],
    g1 = { key: 1 },
    h1 = T(
      'path',
      {
        d: 'M230,157a8,8,0,0,1-9.26,2.47L171.58,142a8,8,0,0,1-4.86-5.8l-6.21-29.74a7.94,7.94,0,0,0-5.14-5.9,84.39,84.39,0,0,0-55.1.13,7.93,7.93,0,0,0-5.12,6l-5.9,29.51A8,8,0,0,1,84.38,142L35.29,159.42A8,8,0,0,1,26,157c-14.6-18.83-13.26-43.83,4-61.12,53.11-53.11,142.77-53.11,195.88,0C243.23,113.12,244.57,138.12,230,157Z',
        opacity: '0.2'
      },
      null,
      -1
    ),
    m1 = T(
      'path',
      {
        d: 'M231.59,90.13h0C175.44,34,80.56,34,24.41,90.13c-20,20-21.92,49.49-4.69,71.71A16,16,0,0,0,32.35,168a15.8,15.8,0,0,0,5.75-1.08l49-17.37.29-.11a16,16,0,0,0,9.75-11.73l5.9-29.52a76.52,76.52,0,0,1,49.68-.11h0l6.21,29.75a16,16,0,0,0,9.72,11.59l.29.11,49,17.39a16,16,0,0,0,18.38-5.06C253.51,139.62,251.58,110.13,231.59,90.13ZM223.67,152l-.3-.12-48.82-17.33-6.21-29.74A16,16,0,0,0,158,93a92.56,92.56,0,0,0-60.34.13,16,16,0,0,0-10.32,12l-5.9,29.51L32.63,151.86c-.1,0-.17.13-.27.17-12.33-15.91-11-36.23,3.36-50.58,25-25,58.65-37.53,92.28-37.53s67.27,12.51,92.28,37.53C234.61,115.8,236,136.12,223.67,152Zm.32,48a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,200Z'
      },
      null,
      -1
    ),
    v1 = [h1, m1],
    C1 = { key: 2 },
    M1 = T(
      'path',
      {
        d: 'M236.28,161.84a16,16,0,0,1-18.38,5.06l-49-17.39-.29-.11a16,16,0,0,1-9.72-11.59l-6.21-29.75h0a76.52,76.52,0,0,0-49.68.11l-5.9,29.52a16,16,0,0,1-9.75,11.73l-.29.11-49,17.37A15.8,15.8,0,0,1,32.35,168a16,16,0,0,1-12.63-6.14c-17.23-22.22-15.3-51.71,4.69-71.71,56.15-56.17,151-56.17,207.18,0h0C251.58,110.13,253.51,139.62,236.28,161.84ZM216,192H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z'
      },
      null,
      -1
    ),
    y1 = [M1],
    S1 = { key: 3 },
    E1 = T(
      'path',
      {
        d: 'M230.19,91.55h0c-55.39-55.4-149-55.4-204.38,0C6.56,110.82,4.7,139.22,21.29,160.61A14,14,0,0,0,37.39,165l49-17.38.22-.09a13.93,13.93,0,0,0,8.53-10.25l5.9-29.52a1.93,1.93,0,0,1,1.21-1.47,78.53,78.53,0,0,1,51.18-.11,1.93,1.93,0,0,1,1.22,1.45l6.21,29.75a14,14,0,0,0,8.5,10.14l.23.08,49,17.4a14,14,0,0,0,16.1-4.42C251.3,139.22,249.44,110.82,230.19,91.55Zm-5,61.71a2,2,0,0,1-2.29.58l-.22-.09-49-17.38A2,2,0,0,1,172.6,135l-6.22-29.74a14,14,0,0,0-9.06-10.35,90.53,90.53,0,0,0-59,.13,14,14,0,0,0-9,10.45L83.37,135a2,2,0,0,1-1.15,1.44L33.28,153.75l-.22.09a2,2,0,0,1-2.29-.58c-13-16.74-11.56-38.12,3.53-53.22,25.39-25.4,59.55-38.1,93.7-38.1s68.31,12.7,93.7,38.1C236.79,115.14,238.21,136.52,225.23,153.26ZM222,200a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,200Z'
      },
      null,
      -1
    ),
    T1 = [E1],
    w1 = { key: 4 },
    I1 = T(
      'path',
      {
        d: 'M231.59,90.13h0C175.44,34,80.56,34,24.41,90.13c-20,20-21.92,49.49-4.69,71.71A16,16,0,0,0,32.35,168a15.8,15.8,0,0,0,5.75-1.08l49-17.37.29-.11a16,16,0,0,0,9.75-11.73l5.9-29.52a76.52,76.52,0,0,1,49.68-.11h0l6.21,29.75a16,16,0,0,0,9.72,11.59l.29.11,49,17.39a16,16,0,0,0,18.38-5.06C253.51,139.62,251.58,110.13,231.59,90.13ZM223.67,152l-.3-.12-48.82-17.33-6.21-29.74A16,16,0,0,0,158,93a92.56,92.56,0,0,0-60.34.13,16,16,0,0,0-10.32,12l-5.9,29.51L32.63,151.86c-.1,0-.17.13-.27.17-12.33-15.91-11-36.23,3.36-50.58,25-25,58.65-37.53,92.28-37.53s67.27,12.51,92.28,37.53C234.61,115.8,236,136.12,223.67,152Zm.32,48a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,200Z'
      },
      null,
      -1
    ),
    R1 = [I1],
    D1 = { key: 5 },
    b1 = T(
      'path',
      {
        d: 'M228.79,93C174.15,38.34,81.85,38.34,27.21,93,8.69,111.5,6.9,138.81,22.85,159.39a12,12,0,0,0,13.83,3.77l49-17.39.15-.06a12,12,0,0,0,7.31-8.79l5.9-29.51a3.93,3.93,0,0,1,2.51-3,80.59,80.59,0,0,1,52.5-.12,3.94,3.94,0,0,1,2.52,2.94L162.81,137a12,12,0,0,0,7.29,8.69l.15.06,49.07,17.41a12,12,0,0,0,13.83-3.77C249.1,138.81,247.31,111.5,228.79,93Zm-2,61.51a4,4,0,0,1-4.61,1.21l-.15-.06L173,138.24a4,4,0,0,1-2.37-2.87l-6.21-29.75a12,12,0,0,0-7.75-8.87,88.63,88.63,0,0,0-57.74.14,12,12,0,0,0-7.72,9l-5.9,29.51A4,4,0,0,1,83,138.26l-49,17.38-.15.06a4,4,0,0,1-4.61-1.21c-13.42-17.3-11.9-40.26,3.69-55.85C58.65,72.85,93.33,60,128,60s69.35,12.89,95.13,38.68C238.71,114.23,240.24,137.19,226.82,154.49ZM220,200a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,200Z'
      },
      null,
      -1
    ),
    x1 = [b1],
    B1 = { name: 'PhPhoneDisconnect' },
    Ns = Re({
      ...B1,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', f1, p1))
                : M(a) === 'duotone'
                ? (B(), F('g', g1, v1))
                : M(a) === 'fill'
                ? (B(), F('g', C1, y1))
                : M(a) === 'light'
                ? (B(), F('g', S1, T1))
                : M(a) === 'regular'
                ? (B(), F('g', w1, R1))
                : M(a) === 'thin'
                ? (B(), F('g', D1, x1))
                : _e('', !0)
            ],
            16,
            d1
          )
        )
      }
    }),
    G1 = ['width', 'height', 'fill', 'transform'],
    F1 = { key: 0 },
    O1 = T(
      'path',
      {
        d: 'M144.49,136.49l-40,40a12,12,0,0,1-17-17L107,140H24a12,12,0,0,1,0-24h83L87.51,96.49a12,12,0,0,1,17-17l40,40A12,12,0,0,1,144.49,136.49ZM192,28H136a12,12,0,0,0,0,24h52V204H136a12,12,0,0,0,0,24h56a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28Z'
      },
      null,
      -1
    ),
    Q1 = [O1],
    L1 = { key: 1 },
    Y1 = T('path', { d: 'M136,128,96,168V88Z', opacity: '0.2' }, null, -1),
    k1 = T(
      'path',
      {
        d: 'M141.66,122.34l-40-40A8,8,0,0,0,88,88v32H24a8,8,0,0,0,0,16H88v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,141.66,122.34ZM104,148.69V107.31L124.69,128ZM208,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h56V48H136a8,8,0,0,1,0-16h56A16,16,0,0,1,208,48Z'
      },
      null,
      -1
    ),
    N1 = [Y1, k1],
    P1 = { key: 2 },
    Z1 = T(
      'path',
      {
        d: 'M141.66,133.66l-40,40A8,8,0,0,1,88,168V136H24a8,8,0,0,1,0-16H88V88a8,8,0,0,1,13.66-5.66l40,40A8,8,0,0,1,141.66,133.66ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z'
      },
      null,
      -1
    ),
    H1 = [Z1],
    U1 = { key: 3 },
    j1 = T(
      'path',
      {
        d: 'M140.24,132.24l-40,40a6,6,0,0,1-8.48-8.48L121.51,134H24a6,6,0,0,1,0-12h97.51L91.76,92.24a6,6,0,0,1,8.48-8.48l40,40A6,6,0,0,1,140.24,132.24ZM192,34H136a6,6,0,0,0,0,12h56a2,2,0,0,1,2,2V208a2,2,0,0,1-2,2H136a6,6,0,0,0,0,12h56a14,14,0,0,0,14-14V48A14,14,0,0,0,192,34Z'
      },
      null,
      -1
    ),
    J1 = [j1],
    K1 = { key: 4 },
    z1 = T(
      'path',
      {
        d: 'M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z'
      },
      null,
      -1
    ),
    _1 = [z1],
    W1 = { key: 5 },
    $1 = T(
      'path',
      {
        d: 'M138.83,130.83l-40,40a4,4,0,0,1-5.66-5.66L126.34,132H24a4,4,0,0,1,0-8H126.34L93.17,90.83a4,4,0,0,1,5.66-5.66l40,40A4,4,0,0,1,138.83,130.83ZM192,36H136a4,4,0,0,0,0,8h56a4,4,0,0,1,4,4V208a4,4,0,0,1-4,4H136a4,4,0,0,0,0,8h56a12,12,0,0,0,12-12V48A12,12,0,0,0,192,36Z'
      },
      null,
      -1
    ),
    X1 = [$1],
    ep = { name: 'PhSignIn' },
    tp = Re({
      ...ep,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', F1, Q1))
                : M(a) === 'duotone'
                ? (B(), F('g', L1, N1))
                : M(a) === 'fill'
                ? (B(), F('g', P1, H1))
                : M(a) === 'light'
                ? (B(), F('g', U1, J1))
                : M(a) === 'regular'
                ? (B(), F('g', K1, _1))
                : M(a) === 'thin'
                ? (B(), F('g', W1, X1))
                : _e('', !0)
            ],
            16,
            G1
          )
        )
      }
    }),
    rp = ['width', 'height', 'fill', 'transform'],
    np = { key: 0 },
    op = T(
      'path',
      {
        d: 'M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm33.25,62.75a12,12,0,0,0,8.49-3.52L204.37,68.6a12,12,0,0,0-17-17L164.77,74.26a12,12,0,0,0,8.48,20.49ZM224,116H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.26,48.77a12,12,0,1,0-17,17l22.63,22.63a12,12,0,0,0,17-17ZM128,180a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12,12,0,0,0,128,180ZM74.26,164.77,51.63,187.4a12,12,0,0,0,17,17l22.63-22.63a12,12,0,1,0-17-17ZM76,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12,12,0,0,0,76,128ZM68.6,51.63a12,12,0,1,0-17,17L74.26,91.23a12,12,0,0,0,17-17Z'
      },
      null,
      -1
    ),
    ip = [op],
    ap = { key: 1 },
    sp = T(
      'path',
      { d: 'M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z', opacity: '0.2' },
      null,
      -1
    ),
    lp = T(
      'path',
      {
        d: 'M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z'
      },
      null,
      -1
    ),
    qp = [sp, lp],
    cp = { key: 2 },
    up = T(
      'path',
      {
        d: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm33.94,58.75,17-17a8,8,0,0,1,11.32,11.32l-17,17a8,8,0,0,1-11.31-11.31ZM48,136a8,8,0,0,1,0-16H72a8,8,0,0,1,0,16Zm46.06,37.25-17,17a8,8,0,0,1-11.32-11.32l17-17a8,8,0,0,1,11.31,11.31Zm0-79.19a8,8,0,0,1-11.31,0l-17-17A8,8,0,0,1,77.09,65.77l17,17A8,8,0,0,1,94.06,94.06ZM136,208a8,8,0,0,1-16,0V184a8,8,0,0,1,16,0Zm0-136a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Zm54.23,118.23a8,8,0,0,1-11.32,0l-17-17a8,8,0,0,1,11.31-11.31l17,17A8,8,0,0,1,190.23,190.23ZM208,136H184a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z'
      },
      null,
      -1
    ),
    Vp = [up],
    dp = { key: 3 },
    fp = T(
      'path',
      {
        d: 'M134,32V64a6,6,0,0,1-12,0V32a6,6,0,0,1,12,0Zm39.25,56.75A6,6,0,0,0,177.5,87l22.62-22.63a6,6,0,0,0-8.48-8.48L169,78.5a6,6,0,0,0,4.24,10.25ZM224,122H192a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-46.5,47A6,6,0,0,0,169,177.5l22.63,22.62a6,6,0,0,0,8.48-8.48ZM128,186a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V192A6,6,0,0,0,128,186ZM78.5,169,55.88,191.64a6,6,0,1,0,8.48,8.48L87,177.5A6,6,0,1,0,78.5,169ZM70,128a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H64A6,6,0,0,0,70,128ZM64.36,55.88a6,6,0,0,0-8.48,8.48L78.5,87A6,6,0,1,0,87,78.5Z'
      },
      null,
      -1
    ),
    Ap = [fp],
    pp = { key: 4 },
    gp = T(
      'path',
      {
        d: 'M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z'
      },
      null,
      -1
    ),
    hp = [gp],
    mp = { key: 5 },
    vp = T(
      'path',
      {
        d: 'M132,32V64a4,4,0,0,1-8,0V32a4,4,0,0,1,8,0Zm41.25,54.75a4,4,0,0,0,2.83-1.18L198.71,63a4,4,0,0,0-5.66-5.66L170.43,79.92a4,4,0,0,0,2.82,6.83ZM224,124H192a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm-47.92,46.43a4,4,0,1,0-5.65,5.65l22.62,22.63a4,4,0,0,0,5.66-5.66ZM128,188a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V192A4,4,0,0,0,128,188ZM79.92,170.43,57.29,193.05A4,4,0,0,0,63,198.71l22.62-22.63a4,4,0,1,0-5.65-5.65ZM68,128a4,4,0,0,0-4-4H32a4,4,0,0,0,0,8H64A4,4,0,0,0,68,128ZM63,57.29A4,4,0,0,0,57.29,63L79.92,85.57a4,4,0,1,0,5.65-5.65Z'
      },
      null,
      -1
    ),
    Cp = [vp],
    Mp = { name: 'PhSpinner' },
    yp = Re({
      ...Mp,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', np, ip))
                : M(a) === 'duotone'
                ? (B(), F('g', ap, qp))
                : M(a) === 'fill'
                ? (B(), F('g', cp, Vp))
                : M(a) === 'light'
                ? (B(), F('g', dp, Ap))
                : M(a) === 'regular'
                ? (B(), F('g', pp, hp))
                : M(a) === 'thin'
                ? (B(), F('g', mp, Cp))
                : _e('', !0)
            ],
            16,
            rp
          )
        )
      }
    }),
    Sp = ['width', 'height', 'fill', 'transform'],
    Ep = { key: 0 },
    Tp = T(
      'path',
      {
        d: 'M234.38,210a123.36,123.36,0,0,0-60.78-53.23,76,76,0,1,0-91.2,0A123.36,123.36,0,0,0,21.62,210a12,12,0,1,0,20.77,12c18.12-31.32,50.12-50,85.61-50s67.49,18.69,85.61,50a12,12,0,0,0,20.77-12ZM76,96a52,52,0,1,1,52,52A52.06,52.06,0,0,1,76,96Z'
      },
      null,
      -1
    ),
    wp = [Tp],
    Ip = { key: 1 },
    Rp = T(
      'path',
      { d: 'M192,96a64,64,0,1,1-64-64A64,64,0,0,1,192,96Z', opacity: '0.2' },
      null,
      -1
    ),
    Dp = T(
      'path',
      {
        d: 'M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z'
      },
      null,
      -1
    ),
    bp = [Rp, Dp],
    xp = { key: 2 },
    Bp = T(
      'path',
      {
        d: 'M230.93,220a8,8,0,0,1-6.93,4H32a8,8,0,0,1-6.92-12c15.23-26.33,38.7-45.21,66.09-54.16a72,72,0,1,1,73.66,0c27.39,8.95,50.86,27.83,66.09,54.16A8,8,0,0,1,230.93,220Z'
      },
      null,
      -1
    ),
    Gp = [Bp],
    Fp = { key: 3 },
    Op = T(
      'path',
      {
        d: 'M229.19,213c-15.81-27.32-40.63-46.49-69.47-54.62a70,70,0,1,0-63.44,0C67.44,166.5,42.62,185.67,26.81,213a6,6,0,1,0,10.38,6C56.4,185.81,90.34,166,128,166s71.6,19.81,90.81,53a6,6,0,1,0,10.38-6ZM70,96a58,58,0,1,1,58,58A58.07,58.07,0,0,1,70,96Z'
      },
      null,
      -1
    ),
    Qp = [Op],
    Lp = { key: 4 },
    Yp = T(
      'path',
      {
        d: 'M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z'
      },
      null,
      -1
    ),
    kp = [Yp],
    Np = { key: 5 },
    Pp = T(
      'path',
      {
        d: 'M227.46,214c-16.52-28.56-43-48.06-73.68-55.09a68,68,0,1,0-51.56,0c-30.64,7-57.16,26.53-73.68,55.09a4,4,0,0,0,6.92,4C55,184.19,89.62,164,128,164s73,20.19,92.54,54a4,4,0,0,0,3.46,2,3.93,3.93,0,0,0,2-.54A4,4,0,0,0,227.46,214ZM68,96a60,60,0,1,1,60,60A60.07,60.07,0,0,1,68,96Z'
      },
      null,
      -1
    ),
    Zp = [Pp],
    Hp = { name: 'PhUser' },
    Up = Re({
      ...Hp,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', Ep, wp))
                : M(a) === 'duotone'
                ? (B(), F('g', Ip, bp))
                : M(a) === 'fill'
                ? (B(), F('g', xp, Gp))
                : M(a) === 'light'
                ? (B(), F('g', Fp, Qp))
                : M(a) === 'regular'
                ? (B(), F('g', Lp, kp))
                : M(a) === 'thin'
                ? (B(), F('g', Np, Zp))
                : _e('', !0)
            ],
            16,
            Sp
          )
        )
      }
    }),
    jp = ['width', 'height', 'fill', 'transform'],
    Jp = { key: 0 },
    Kp = T(
      'path',
      {
        d: 'M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z'
      },
      null,
      -1
    ),
    zp = [Kp],
    _p = { key: 1 },
    Wp = T(
      'path',
      {
        d: 'M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z',
        opacity: '0.2'
      },
      null,
      -1
    ),
    $p = T(
      'path',
      {
        d: 'M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'
      },
      null,
      -1
    ),
    Xp = [Wp, $p],
    eg = { key: 2 },
    tg = T(
      'path',
      {
        d: 'M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z'
      },
      null,
      -1
    ),
    rg = [tg],
    ng = { key: 3 },
    og = T(
      'path',
      {
        d: 'M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z'
      },
      null,
      -1
    ),
    ig = [og],
    ag = { key: 4 },
    sg = T(
      'path',
      {
        d: 'M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z'
      },
      null,
      -1
    ),
    lg = [sg],
    qg = { key: 5 },
    cg = T(
      'path',
      {
        d: 'M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z'
      },
      null,
      -1
    ),
    ug = [cg],
    Vg = { name: 'PhX' },
    dg = Re({
      ...Vg,
      props: {
        weight: { type: String },
        size: { type: [String, Number] },
        color: { type: String },
        mirrored: { type: Boolean }
      },
      setup(e) {
        const t = e,
          r = re('weight', 'regular'),
          n = re('size', '1em'),
          o = re('color', 'currentColor'),
          i = re('mirrored', !1),
          a = ee(() => t.weight ?? r),
          l = ee(() => t.size ?? n),
          q = ee(() => t.color ?? o),
          s = ee(() =>
            t.mirrored !== void 0
              ? t.mirrored
                ? 'scale(-1, 1)'
                : void 0
              : i
              ? 'scale(-1, 1)'
              : void 0
          )
        return (c, V) => (
          B(),
          F(
            'svg',
            He(
              {
                xmlns: 'http://www.w3.org/2000/svg',
                viewBox: '0 0 256 256',
                width: M(l),
                height: M(l),
                fill: M(q),
                transform: M(s)
              },
              c.$attrs
            ),
            [
              ze(c.$slots, 'default'),
              M(a) === 'bold'
                ? (B(), F('g', Jp, zp))
                : M(a) === 'duotone'
                ? (B(), F('g', _p, Xp))
                : M(a) === 'fill'
                ? (B(), F('g', eg, rg))
                : M(a) === 'light'
                ? (B(), F('g', ng, ig))
                : M(a) === 'regular'
                ? (B(), F('g', ag, lg))
                : M(a) === 'thin'
                ? (B(), F('g', qg, ug))
                : _e('', !0)
            ],
            16,
            jp
          )
        )
      }
    }),
    fg = Re({
      __name: 'CloseButton',
      setup(e) {
        return (t, r) => (
          B(),
          Wt(
            M(Ys),
            {
              title: 'Fechar popover',
              'aria-label': 'Fechar popover',
              class: 'top-5 right-5 absolute text-zinc-400 hover:text-zinc-100'
            },
            { default: xr(() => [Se(M(dg), { weight: 'bold', class: 'w-4 h-4' })]), _: 1 }
          )
        )
      }
    })
  function hi(e) {
    const t = Math.floor(e / 3600),
      r = Math.floor((e % 3600) / 60),
      n = e % 60,
      o = String(t).padStart(2, '0'),
      i = String(r).padStart(2, '0'),
      a = String(n).padStart(2, '0')
    return `${o}:${i}:${a}`
  }
  function Ag({ number: e, duration: t, date: r }) {
    let n
    const o = localStorage.getItem('@vcallwidget:callhistory')
    if (o) {
      const i = JSON.parse(o)
      Array.isArray(i)
        ? (n = [{ number: e, duration: t, date: r }, ...i.filter((a, l) => l <= 2e3)])
        : (n = [{ number: e, duration: t, date: r }]),
        localStorage.setItem('@vcallwidget:callhistory', JSON.stringify(n))
      return
    } else {
      ;(n = [{ number: e, duration: t, date: r }]),
        localStorage.setItem('@vcallwidget:callhistory', JSON.stringify(n))
      return
    }
  }
  function mi(e, t) {
    const r = localStorage.getItem('@vcallwidget:callhistory')
    if (!r) return { history: [], totalPages: 0 }
    const n = JSON.parse(r),
      o = (e - 1) * t,
      i = o + t,
      a = Array.isArray(n) ? n.slice(o, i) : [],
      l = Math.ceil(n.length / t)
    return { history: a, totalPages: l }
  }
  const pg = { class: 'p-2 my-2', id: 'callpage' },
    gg = T(
      'span',
      { class: 'text-xl leading-6 flex items-center gap-2 my-4' },
      ' Nova Chamada ',
      -1
    ),
    hg = ['onSubmit'],
    mg = { class: 'flex gap-2 mt-2' },
    vg = {
      type: 'submit',
      title: 'Ligar',
      'aria-labelledby': 'Ligar',
      class:
        'bg-zinc-800 rounded-lg py-1 w-24 flex flex-1 flex-row items-center justify-center gap-2 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear'
    },
    Cg = { id: 'outgoingcall' },
    Mg = { class: 'text-sm leading-6 flex items-center gap-2 my-4 italic text-zinc-300' },
    yg = { class: 'text-white' },
    Sg = { class: 'text-zinc-400' },
    Eg = { class: 'flex py-8 gap-2 w-full' },
    Tg = { class: 'flex flex-col' },
    wg = T('span', null, 'Discar', -1),
    Ig = T('span', null, 'Desligar', -1),
    Rg = { id: 'incomingcall' },
    Dg = { class: 'text-sm leading-6 flex items-center gap-2 my-4 italic text-zinc-300' },
    bg = { class: 'text-white' },
    xg = { class: 'flex py-8 gap-2 w-full' },
    Bg = T('span', null, 'Atender', -1),
    Gg = T('span', null, 'Desligar', -1),
    Fg = Re({
      __name: 'CallPage',
      props: {
        show: { type: Boolean },
        callDuration: {},
        agentStatus: {},
        inCallStatus: {},
        answer: { type: Function },
        hangup: { type: Function },
        sendDTMF: { type: Function },
        startCall: { type: Function },
        toggleHold: { type: Function },
        toggleMute: { type: Function }
      },
      setup(e) {
        const t = e,
          r = ae(''),
          n = ae(null),
          o = ae(''),
          i = ae(null),
          a = ae(null),
          l = ae(null),
          q = ae(null)
        function s() {
          t.startCall(r.value), (a.value = r.value), (l.value = new Date())
        }
        return (
          et(() => {
            t.callDuration && (i.value = t.callDuration)
          }),
          et(() => {
            t.inCallStatus.inCall &&
              t.inCallStatus.status?.callDirection === 'incoming' &&
              !a.value &&
              ((a.value = t.inCallStatus.status?.number),
              (l.value = new Date()),
              (i.value = t.callDuration))
          }),
          et(() => {
            !t.inCallStatus.inCall &&
              a.value &&
              i.value &&
              l.value &&
              (console.log('SETTING CALL HISTORY'),
              Ag({ number: a.value, date: l.value, duration: hi(i.value) }),
              (a.value = null),
              (l.value = null),
              (i.value = null))
          }),
          et(() => {
            t.show && n.value && (q.value = setTimeout(() => n.value?.focus()))
          }),
          It(() => {
            q.value && clearTimeout(q.value)
          }),
          (c, V) =>
            Oe(
              (B(),
              F(
                'div',
                pg,
                [
                  Oe(
                    T(
                      'div',
                      null,
                      [
                        gg,
                        T(
                          'form',
                          { class: 'my-4 w-full', onSubmit: Ts(s, ['prevent']) },
                          [
                            Oe(
                              T(
                                'input',
                                {
                                  type: 'text',
                                  ref_key: 'numberToCallInput',
                                  ref: n,
                                  placeholder: 'Digite um número',
                                  required: !0,
                                  'onUpdate:modelValue': V[0] || (V[0] = (A) => (r.value = A)),
                                  class:
                                    'md:min-w-[304px] w-full h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:ring-1 focus:outline-none'
                                },
                                null,
                                512
                              ),
                              [[tr, r.value]]
                            ),
                            T('footer', mg, [
                              T('button', vg, [Se(M(to), { size: 20 }), ft('Ligar ')])
                            ])
                          ],
                          40,
                          hg
                        )
                      ],
                      512
                    ),
                    [[At, !t.inCallStatus.inCall]]
                  ),
                  Oe(
                    T(
                      'div',
                      Cg,
                      [
                        T('span', Mg, [
                          Se(M(ks), { size: 32, color: 'green', weight: 'fill' }),
                          ft('Em chamada com '),
                          T('span', yg, st(t.inCallStatus.status?.number), 1),
                          ft(),
                          T('span', Sg, st(M(hi)(t.callDuration || 0)), 1)
                        ]),
                        T('div', Eg, [
                          T(
                            'button',
                            {
                              type: 'button',
                              class: xt([
                                'rounded-lg py-5 w-24 flex flex-1 flex-col justify-center items-center gap-2 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear',
                                {
                                  'bg-orange-500': t.inCallStatus.status?.onHold,
                                  'bg-zinc-800': !t.inCallStatus.status?.onHold
                                }
                              ]),
                              onClick: V[1] || (V[1] = (...A) => t.toggleHold && t.toggleHold(...A))
                            },
                            [
                              Se(M(yA), { size: 32 }),
                              T(
                                'span',
                                null,
                                st(t.inCallStatus.status?.onHold ? 'Em espera' : 'Espera'),
                                1
                              )
                            ],
                            2
                          ),
                          T(
                            'button',
                            {
                              type: 'button',
                              class: xt([
                                'rounded-lg py-5 w-28 flex flex-1 flex-col justify-center items-center gap-2 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear',
                                {
                                  'bg-orange-500': t.inCallStatus.status?.muted,
                                  'bg-zinc-800': !t.inCallStatus.status?.muted
                                }
                              ]),
                              onClick: V[2] || (V[2] = (...A) => t.toggleMute && t.toggleMute(...A))
                            },
                            [
                              (B(),
                              Wt(Zo(t.inCallStatus.status?.muted ? M(Bf) : M(uf)), { size: 32 })),
                              T(
                                'span',
                                null,
                                st(t.inCallStatus.status?.muted ? 'Mudo' : 'Mutar'),
                                1
                              )
                            ],
                            2
                          ),
                          T('div', Tg, [
                            Oe(
                              T(
                                'input',
                                {
                                  type: 'text',
                                  placeholder: '*2',
                                  class:
                                    'w-28 rounded-t-lg bg-zinc-700 p-2 shadow-inner shadow-zinc-900 h-15',
                                  'onUpdate:modelValue': V[3] || (V[3] = (A) => (o.value = A)),
                                  required: ''
                                },
                                null,
                                512
                              ),
                              [[tr, o.value]]
                            ),
                            T(
                              'button',
                              {
                                type: 'button',
                                class:
                                  'bg-zinc-800 rounded-b-lg py-2 w-28 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear',
                                onClick: V[4] || (V[4] = (A) => t.sendDTMF(o.value))
                              },
                              [Se(M(X0), { size: 32 }), wg]
                            )
                          ]),
                          T(
                            'button',
                            {
                              type: 'button',
                              class:
                                'bg-red-800 rounded-lg py-5 w-28 flex flex-1 flex-col justify-center items-center gap-2 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear',
                              onClick: V[5] || (V[5] = (...A) => t.hangup && t.hangup(...A))
                            },
                            [Se(M(Ns), { size: 32 }), Ig]
                          )
                        ])
                      ],
                      512
                    ),
                    [[At, t.inCallStatus.inCall && t.agentStatus === 'Em chamada']]
                  ),
                  Oe(
                    T(
                      'div',
                      Rg,
                      [
                        T('span', Dg, [
                          Se(M(ks), { size: 32, color: 'orange', weight: 'fill' }),
                          ft('Recebendo chamada de '),
                          T('span', bg, st(t.inCallStatus.status?.number), 1)
                        ]),
                        T('div', xg, [
                          T(
                            'button',
                            {
                              type: 'button',
                              class:
                                'bg-green-800 rounded-lg py-5 w-24 flex flex-1 flex-col justify-center items-center gap-2 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear',
                              onClick: V[6] || (V[6] = (...A) => t.answer && t.answer(...A))
                            },
                            [Se(M(to), { size: 32 }), Bg]
                          ),
                          T(
                            'button',
                            {
                              type: 'button',
                              class:
                                'bg-red-800 rounded-lg py-5 w-28 flex flex-1 flex-col justify-center items-center gap-2 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear',
                              onClick: V[7] || (V[7] = (...A) => t.hangup && t.hangup(...A))
                            },
                            [Se(M(Ns), { size: 32 }), Gg]
                          )
                        ])
                      ],
                      512
                    ),
                    [[At, t.inCallStatus.inCall && t.agentStatus === 'Recebendo chamada']]
                  )
                ],
                512
              )),
              [[At, t.show]]
            )
        )
      }
    })
  function vi(e) {
    const t = window.location.hostname
    let r = ''
    for (let n = 0; n < e.length; n++) {
      const o = e.charCodeAt(n),
        i = t.charCodeAt(n % t.length),
        a = String.fromCharCode(o ^ i)
      r += a
    }
    return r
  }
  function Ps(e) {
    return vi(e)
  }
  function Og({ authuser: e, secret: t, port: r, domain: n, transport: o, name: i }) {
    localStorage.setItem('@vcallwidget:authuser', e),
      localStorage.setItem('@vcallwidget:secret', vi(t)),
      localStorage.setItem('@vcallwidget:port', r.toString()),
      localStorage.setItem('@vcallwidget:domain', vi(n)),
      localStorage.setItem('@vcallwidget:transport', o),
      localStorage.setItem('@vcallwidget:name', i)
  }
  function ro() {
    const e = localStorage.getItem('@vcallwidget:authuser'),
      t = localStorage.getItem('@vcallwidget:name'),
      r = localStorage.getItem('@vcallwidget:secret'),
      n = parseInt(localStorage.getItem('@vcallwidget:port') || '5060'),
      o = localStorage.getItem('@vcallwidget:domain')
    let i = localStorage.getItem('@vcallwidget:transport')
    i !== 'udp' && i !== 'tcp' && (i = 'udp')
    let a = null,
      l = null
    return (
      r && (a = Ps(r)),
      o && (l = Ps(o)),
      { name: t, authuser: e, secret: a, port: n, domain: l, transport: i }
    )
  }
  const Qg = { class: 'border-zinc-700 p-2 my-2' },
    Lg = T(
      'span',
      { class: 'text-xl leading-6 flex items-center gap-2 my-4' },
      ' Dados do Login ',
      -1
    ),
    Yg = ['onSubmit'],
    kg = { class: 'flex gap-2 mt-2' },
    Ng = ['disabled'],
    Pg = Re({
      __name: 'LoginPage',
      props: {
        show: { type: Boolean },
        register: { type: Function },
        unregister: { type: Function }
      },
      setup(e) {
        const t = e,
          { authuser: r, domain: n, name: o, port: i, secret: a, transport: l } = ro(),
          q = ae(r || ''),
          s = ae(o || ''),
          c = ae(a || ''),
          V = ae(n || ''),
          A = ae(i),
          C = ae(!1),
          y = ae(null),
          w = ae(null)
        function J() {
          t.unregister(),
            (C.value = !0),
            Og({
              authuser: q.value,
              domain: V.value,
              name: s.value || o || q.value,
              port: A.value,
              secret: c.value,
              transport: l
            }),
            (w.value = setTimeout(() => {
              t.register({
                authuser: q.value,
                domain: V.value,
                name: s.value || o || q.value,
                port: A.value,
                secret: c.value,
                transport: l
              })
            }, 1e3)),
            (y.value = setTimeout(() => (C.value = !1), 1500))
        }
        return (
          It(() => {
            y.value && clearTimeout(y.value), w.value && clearTimeout(w.value)
          }),
          (O, G) =>
            Oe(
              (B(),
              F(
                'div',
                Qg,
                [
                  Lg,
                  T(
                    'form',
                    { class: 'my-4 w-full flex flex-col gap-2', onSubmit: Ts(J, ['prevent']) },
                    [
                      Oe(
                        T(
                          'input',
                          {
                            type: 'text',
                            placeholder: 'Nome',
                            'onUpdate:modelValue': G[0] || (G[0] = (Y) => (s.value = Y)),
                            class:
                              'md:min-w-[304px] w-full h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:ring-1 focus:outline-none'
                          },
                          null,
                          512
                        ),
                        [[tr, s.value]]
                      ),
                      Oe(
                        T(
                          'input',
                          {
                            type: 'text',
                            placeholder: 'Usuário ou Ramal',
                            required: !0,
                            'onUpdate:modelValue': G[1] || (G[1] = (Y) => (q.value = Y)),
                            class:
                              'md:min-w-[304px] w-full h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:ring-1 focus:outline-none'
                          },
                          null,
                          512
                        ),
                        [[tr, q.value]]
                      ),
                      Oe(
                        T(
                          'input',
                          {
                            type: 'password',
                            placeholder: 'Senha',
                            required: !0,
                            'onUpdate:modelValue': G[2] || (G[2] = (Y) => (c.value = Y)),
                            class:
                              'md:min-w-[304px] w-full h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:ring-1 focus:outline-none'
                          },
                          null,
                          512
                        ),
                        [[tr, c.value]]
                      ),
                      Oe(
                        T(
                          'input',
                          {
                            type: 'text',
                            placeholder: 'Domínio',
                            required: !0,
                            'onUpdate:modelValue': G[3] || (G[3] = (Y) => (V.value = Y)),
                            class:
                              'md:min-w-[304px] w-full h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:ring-1 focus:outline-none'
                          },
                          null,
                          512
                        ),
                        [[tr, V.value]]
                      ),
                      Oe(
                        T(
                          'input',
                          {
                            type: 'number',
                            placeholder: 'Porta',
                            required: !0,
                            'onUpdate:modelValue': G[4] || (G[4] = (Y) => (A.value = Y)),
                            class:
                              'md:min-w-[304px] w-full h-10 px-2 text-sm placeholder-zinc-400 text-zinc-100 border-zinc-800 bg-zinc-800 rounded-md focus:border-zinc-500 focus:ring-zinc-500 focus:ring-1 focus:outline-none'
                          },
                          null,
                          512
                        ),
                        [[tr, A.value]]
                      ),
                      T('footer', kg, [
                        T(
                          'button',
                          {
                            type: 'submit',
                            title: 'Salvar',
                            'aria-labelledby': 'Salvar',
                            class:
                              'bg-zinc-800 rounded-lg py-1 w-24 flex flex-1 flex-row items-center justify-center gap-2 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear disabled:opacity-50 disabled:border-2',
                            disabled: C.value
                          },
                          [
                            (B(),
                            Wt(
                              Zo(C.value ? M(yp) : M(Pd)),
                              { size: 20, class: xt({ 'animate-spin': C.value }) },
                              null,
                              8,
                              ['class']
                            )),
                            ft(st(C.value ? 'Registrando' : 'Salvar'), 1)
                          ],
                          8,
                          Ng
                        )
                      ])
                    ],
                    40,
                    Yg
                  )
                ],
                512
              )),
              [[At, t.show]]
            )
        )
      }
    }),
    Zg = { class: 'border-zinc-700 p-2 my-2' },
    Hg = T(
      'span',
      { class: 'text-xl leading-6 flex items-center gap-2 my-4' },
      ' Chamadas Recentes ',
      -1
    ),
    Ug = { class: 'w-full flex flex-row gap-1 min-w-[350px] justify-center items-center' },
    jg = ['value'],
    Jg = T('span', { class: 'text-xl font-bold' }, '/', -1),
    Kg = { class: 'my-4 w-full flex flex-col gap-2 min-w-[425px] rounded-lg' },
    zg = {
      class:
        'scroll-smooth text-zinc-200 p-4 max-h-[250px] overflow-scroll overflow-x-hidden scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
    },
    _g = { class: 'italic w-full text-center' },
    Wg = { class: 'flex flex-row justify-center items-center gap-1' },
    $g = { class: 'italic text-zinc-500' },
    Xg = { class: 'text-zinc-400' },
    eh = Re({
      __name: 'HistoryPage',
      props: { show: { type: Boolean } },
      setup(e) {
        const t = e,
          r = ae(null),
          n = ae(0),
          o = ae(1),
          i = ae(20)
        wt(() => {
          const { history: q, totalPages: s } = mi(o.value, i.value)
          ;(r.value = q), (n.value = s)
        }),
          Gt(t, () => {
            if (t.show) {
              const { history: q, totalPages: s } = mi(o.value, i.value)
              ;(r.value = q), (n.value = s)
            }
          })
        function a(q) {
          return new Date().toLocaleString().split(',')[0] ===
            new Date(q).toLocaleString().split(',')[0]
            ? `hoje ás ${new Date(q).toLocaleString().split(',')[1]}`
            : new Date(q).toLocaleString().replace(',', ' ás')
        }
        function l(q) {
          q.target.value === '' ||
            isNaN(parseInt(q.target.value)) ||
            parseInt(q.target.value) > n.value ||
            parseInt(q.target.value) <= 0 ||
            (o.value = q.target.value ? q.target.value : '1')
        }
        return (
          et(() => {
            if (o.value <= n.value && o.value > 0) {
              const { history: q, totalPages: s } = mi(o.value, i.value)
              ;(r.value = q), (n.value = s)
            }
          }),
          (q, s) =>
            Oe(
              (B(),
              F(
                'div',
                Zg,
                [
                  Hg,
                  Oe(
                    T(
                      'div',
                      Ug,
                      [
                        T(
                          'button',
                          {
                            type: 'button',
                            class:
                              'hover:outline-blue-500 hover:outline outline-none rounded-md active:bg-zinc-800 transition-colors',
                            onClick:
                              s[0] ||
                              (s[0] = () => (o.value = o.value <= 1 ? n.value : o.value - 1))
                          },
                          [Se(M(NV), { size: 24 })]
                        ),
                        T(
                          'input',
                          {
                            type: 'number',
                            class:
                              'w-[52px] hover:outline-blue-500 hover:outline outline-none rounded-md bg-zinc-800 text-center appearance-none',
                            placeholder: '1',
                            onKeyup: l,
                            value: o.value
                          },
                          null,
                          40,
                          jg
                        ),
                        Jg,
                        Oe(
                          T(
                            'input',
                            {
                              type: 'text',
                              class:
                                'w-[52px] font-bold hover:outline-blue-500 hover:outline outline-none rounded-md bg-zinc-800 text-center italic',
                              'onUpdate:modelValue': s[1] || (s[1] = (c) => (n.value = c)),
                              disabled: ''
                            },
                            null,
                            512
                          ),
                          [[tr, n.value]]
                        ),
                        T(
                          'button',
                          {
                            class:
                              'hover:outline-blue-500 hover:outline outline-none rounded-md active:bg-zinc-800 transition-colors',
                            type: 'button',
                            onClick:
                              s[2] ||
                              (s[2] = () => (o.value = o.value >= n.value ? 1 : o.value + 1))
                          },
                          [Se(M(q0), { size: 24 })]
                        )
                      ],
                      512
                    ),
                    [[At, r.value && r.value?.length > 0]]
                  ),
                  T('div', Kg, [
                    T('ul', zg, [
                      Oe(T('span', _g, ' Nenhuma chamada ', 512), [
                        [At, r.value && r.value.length <= 0]
                      ]),
                      (B(!0),
                      F(
                        Pe,
                        null,
                        Ba(
                          r.value,
                          (c) => (
                            B(),
                            F(
                              'li',
                              {
                                class:
                                  'w-full mb-1 flex flex-row justify-between items-center p-2 hover:outline-blue-500 hover:outline outline-none rounded-md bg-zinc-800',
                                key: c.date.toLocaleString()
                              },
                              [
                                T('span', Wg, [
                                  Se(M(to), { size: 20 }),
                                  ft(' ' + st(c.number) + ' ', 1),
                                  T('span', $g, st(c.duration), 1)
                                ]),
                                ft(),
                                T('span', Xg, st(a(c.date)), 1)
                              ]
                            )
                          )
                        ),
                        128
                      ))
                    ])
                  ])
                ],
                512
              )),
              [[At, t.show]]
            )
        )
      }
    }),
    bh = '',
    th = {
      class:
        'bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-md shadow-slate-800 w-[calc(100vw-2rem)] md:w-auto'
    },
    rh = { class: 'text-xl leading-6 flex flex-row justify-center items-center' },
    nh = { class: 'flex py-8 gap-2 w-full' },
    oh = ['title', 'onClick', 'disabled'],
    ih = { class: 'text-xs text-neutral-400 w-full text-center' },
    ah = T('b', { class: 'animate-pulse' }, '♥', -1),
    sh = T(
      'a',
      {
        href: 'https://vittelgroup.com.br/produtos',
        target: '_blank',
        class: 'underline underline-offset-2 hover:text-zinc-100 text-xs'
      },
      '@Vittel',
      -1
    ),
    lh = Re({
      __name: 'MenuPage',
      props: {
        agentStatus: {},
        callDuration: {},
        inCallStatus: {},
        answer: { type: Function },
        hangup: { type: Function },
        sendDTMF: { type: Function },
        startCall: { type: Function },
        toggleHold: { type: Function },
        toggleMute: { type: Function },
        register: { type: Function },
        unregister: { type: Function }
      },
      setup(e) {
        const t = e,
          r = ae(''),
          n = [
            { name: 'Call', label: 'Ligar', icon: to },
            { name: 'Login', label: 'Conectar', icon: tp },
            { name: 'History', label: 'Histórico', icon: tA }
          ],
          o = ae('Menu')
        function i(a) {
          o.value = a
        }
        return (
          wt(() => {
            const { authuser: a, name: l } = ro()
            r.value = l || a
          }),
          Gt(t, () => {
            if (t.agentStatus === 'Conectado') {
              const { authuser: a, name: l } = ro()
              r.value = l || a
            }
          }),
          et(() => {
            ;['Em chamada', 'Recebendo chamada'].includes(t.agentStatus) &&
              o.value !== 'Call' &&
              i('Call')
          }),
          (a, l) => (
            B(),
            F('div', th, [
              T('header', null, [
                Oe(
                  T(
                    'button',
                    {
                      type: 'button',
                      title: 'Voltar',
                      'aria-label': 'Voltar',
                      onClick: l[0] || (l[0] = (q) => i('Menu')),
                      className: 'top-5 left-5 absolute text-zinc-400 hover:text-zinc-100'
                    },
                    [Se(M(b0), { weight: 'bold' })],
                    512
                  ),
                  [
                    [
                      At,
                      o.value !== 'Menu' &&
                        ['Em chamada', 'Recebendo chamada'].includes(t.agentStatus) === !1
                    ]
                  ]
                ),
                T('span', rh, [
                  Se(M(Up), { class: 'mr-2' }),
                  ft(st(r.value || 'Conecte-se para ligar'), 1)
                ]),
                Se(fg)
              ]),
              Oe(
                T(
                  'div',
                  nh,
                  [
                    (B(),
                    F(
                      Pe,
                      null,
                      Ba(n, ({ icon: q, name: s, label: c }) =>
                        T(
                          'button',
                          {
                            key: s,
                            type: 'button',
                            title: s,
                            onClick: (V) => i(s),
                            class:
                              'bg-zinc-800 rounded-lg py-5 w-24 flex flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 transition-all duration-400 ease-linear disabled:border-0 disabled:opacity-50 disabled:cursor-not-allowed',
                            disabled:
                              ['Desconectado', 'Conectando...', 'Registro falhou'].includes(
                                t.agentStatus
                              ) && s !== 'Login'
                          },
                          [(B(), Wt(Zo(q), { size: 32 })), T('span', null, st(c), 1)],
                          8,
                          oh
                        )
                      ),
                      64
                    ))
                  ],
                  512
                ),
                [[At, o.value === 'Menu']]
              ),
              Se(
                Fg,
                {
                  show: o.value === 'Call',
                  answer: t.answer,
                  hangup: t.hangup,
                  sendDTMF: t.sendDTMF,
                  toggleHold: t.toggleHold,
                  toggleMute: t.toggleMute,
                  startCall: t.startCall,
                  inCallStatus: t.inCallStatus,
                  callDuration: a.callDuration,
                  agentStatus: t.agentStatus
                },
                null,
                8,
                [
                  'show',
                  'answer',
                  'hangup',
                  'sendDTMF',
                  'toggleHold',
                  'toggleMute',
                  'startCall',
                  'inCallStatus',
                  'callDuration',
                  'agentStatus'
                ]
              ),
              Se(
                Pg,
                { show: o.value === 'Login', register: t.register, unregister: t.unregister },
                null,
                8,
                ['show', 'register', 'unregister']
              ),
              Se(eh, { show: o.value === 'History' }, null, 8, ['show']),
              T('footer', ih, [
                T(
                  'div',
                  {
                    class: xt([
                      'w-full text-white border-t-2 text-center border-b-2 py-2 rounded-lg px-1 mb-2',
                      {
                        'border-green-700 bg-green-700': t.agentStatus === 'Conectado',
                        'border-red-700 bg-red-700': ['Registro falhou', 'Desconectado'].includes(
                          t.agentStatus
                        ),
                        'border-orange-700 bg-orange-700 animate-pulse': [
                          'Desconectando',
                          'Conectando...',
                          'Em chamada',
                          'Recebendo chamada'
                        ].includes(t.agentStatus)
                      }
                    ])
                  },
                  [T('span', null, st(t.agentStatus), 1)],
                  2
                ),
                ft(' Feito com '),
                ah,
                ft(' pela '),
                sh
              ])
            ])
          )
        )
      }
    })
  let Zs = !0,
    Hs = !0
  function cn(e, t, r) {
    const n = e.match(t)
    return n && n.length >= r && parseInt(n[r], 10)
  }
  function Qr(e, t, r) {
    if (!e.RTCPeerConnection) return
    const n = e.RTCPeerConnection.prototype,
      o = n.addEventListener
    n.addEventListener = function (a, l) {
      if (a !== t) return o.apply(this, arguments)
      const q = (s) => {
        const c = r(s)
        c && (l.handleEvent ? l.handleEvent(c) : l(c))
      }
      return (
        (this._eventMap = this._eventMap || {}),
        this._eventMap[t] || (this._eventMap[t] = new Map()),
        this._eventMap[t].set(l, q),
        o.apply(this, [a, q])
      )
    }
    const i = n.removeEventListener
    ;(n.removeEventListener = function (a, l) {
      if (a !== t || !this._eventMap || !this._eventMap[t]) return i.apply(this, arguments)
      if (!this._eventMap[t].has(l)) return i.apply(this, arguments)
      const q = this._eventMap[t].get(l)
      return (
        this._eventMap[t].delete(l),
        this._eventMap[t].size === 0 && delete this._eventMap[t],
        Object.keys(this._eventMap).length === 0 && delete this._eventMap,
        i.apply(this, [a, q])
      )
    }),
      Object.defineProperty(n, 'on' + t, {
        get() {
          return this['_on' + t]
        },
        set(a) {
          this['_on' + t] && (this.removeEventListener(t, this['_on' + t]), delete this['_on' + t]),
            a && this.addEventListener(t, (this['_on' + t] = a))
        },
        enumerable: !0,
        configurable: !0
      })
  }
  function qh(e) {
    return typeof e != 'boolean'
      ? new Error('Argument type: ' + typeof e + '. Please use a boolean.')
      : ((Zs = e), e ? 'adapter.js logging disabled' : 'adapter.js logging enabled')
  }
  function ch(e) {
    return typeof e != 'boolean'
      ? new Error('Argument type: ' + typeof e + '. Please use a boolean.')
      : ((Hs = !e), 'adapter.js deprecation warnings ' + (e ? 'disabled' : 'enabled'))
  }
  function Ci() {
    if (typeof window == 'object') {
      if (Zs) return
      typeof console < 'u' &&
        typeof console.log == 'function' &&
        console.log.apply(console, arguments)
    }
  }
  function no(e, t) {
    Hs && console.warn(e + ' is deprecated, please use ' + t + ' instead.')
  }
  function uh(e) {
    const t = { browser: null, version: null }
    if (typeof e > 'u' || !e.navigator) return (t.browser = 'Not a browser.'), t
    const { navigator: r } = e
    if (r.mozGetUserMedia)
      (t.browser = 'firefox'), (t.version = cn(r.userAgent, /Firefox\/(\d+)\./, 1))
    else if (
      r.webkitGetUserMedia ||
      (e.isSecureContext === !1 && e.webkitRTCPeerConnection && !e.RTCIceGatherer)
    )
      (t.browser = 'chrome'), (t.version = cn(r.userAgent, /Chrom(e|ium)\/(\d+)\./, 2))
    else if (r.mediaDevices && r.userAgent.match(/Edge\/(\d+).(\d+)$/))
      (t.browser = 'edge'), (t.version = cn(r.userAgent, /Edge\/(\d+).(\d+)$/, 2))
    else if (e.RTCPeerConnection && r.userAgent.match(/AppleWebKit\/(\d+)\./))
      (t.browser = 'safari'),
        (t.version = cn(r.userAgent, /AppleWebKit\/(\d+)\./, 1)),
        (t.supportsUnifiedPlan =
          e.RTCRtpTransceiver && 'currentDirection' in e.RTCRtpTransceiver.prototype)
    else return (t.browser = 'Not a supported browser.'), t
    return t
  }
  function Us(e) {
    return Object.prototype.toString.call(e) === '[object Object]'
  }
  function js(e) {
    return Us(e)
      ? Object.keys(e).reduce(function (t, r) {
          const n = Us(e[r]),
            o = n ? js(e[r]) : e[r],
            i = n && !Object.keys(o).length
          return o === void 0 || i ? t : Object.assign(t, { [r]: o })
        }, {})
      : e
  }
  function Mi(e, t, r) {
    !t ||
      r.has(t.id) ||
      (r.set(t.id, t),
      Object.keys(t).forEach((n) => {
        n.endsWith('Id')
          ? Mi(e, e.get(t[n]), r)
          : n.endsWith('Ids') &&
            t[n].forEach((o) => {
              Mi(e, e.get(o), r)
            })
      }))
  }
  function Js(e, t, r) {
    const n = r ? 'outbound-rtp' : 'inbound-rtp',
      o = new Map()
    if (t === null) return o
    const i = []
    return (
      e.forEach((a) => {
        a.type === 'track' && a.trackIdentifier === t.id && i.push(a)
      }),
      i.forEach((a) => {
        e.forEach((l) => {
          l.type === n && l.trackId === a.id && Mi(e, l, o)
        })
      }),
      o
    )
  }
  const Ks = Ci
  function zs(e, t) {
    const r = e && e.navigator
    if (!r.mediaDevices) return
    const n = function (l) {
        if (typeof l != 'object' || l.mandatory || l.optional) return l
        const q = {}
        return (
          Object.keys(l).forEach((s) => {
            if (s === 'require' || s === 'advanced' || s === 'mediaSource') return
            const c = typeof l[s] == 'object' ? l[s] : { ideal: l[s] }
            c.exact !== void 0 && typeof c.exact == 'number' && (c.min = c.max = c.exact)
            const V = function (A, C) {
              return A
                ? A + C.charAt(0).toUpperCase() + C.slice(1)
                : C === 'deviceId'
                ? 'sourceId'
                : C
            }
            if (c.ideal !== void 0) {
              q.optional = q.optional || []
              let A = {}
              typeof c.ideal == 'number'
                ? ((A[V('min', s)] = c.ideal),
                  q.optional.push(A),
                  (A = {}),
                  (A[V('max', s)] = c.ideal),
                  q.optional.push(A))
                : ((A[V('', s)] = c.ideal), q.optional.push(A))
            }
            c.exact !== void 0 && typeof c.exact != 'number'
              ? ((q.mandatory = q.mandatory || {}), (q.mandatory[V('', s)] = c.exact))
              : ['min', 'max'].forEach((A) => {
                  c[A] !== void 0 &&
                    ((q.mandatory = q.mandatory || {}), (q.mandatory[V(A, s)] = c[A]))
                })
          }),
          l.advanced && (q.optional = (q.optional || []).concat(l.advanced)),
          q
        )
      },
      o = function (l, q) {
        if (t.version >= 61) return q(l)
        if (((l = JSON.parse(JSON.stringify(l))), l && typeof l.audio == 'object')) {
          const s = function (c, V, A) {
            V in c && !(A in c) && ((c[A] = c[V]), delete c[V])
          }
          ;(l = JSON.parse(JSON.stringify(l))),
            s(l.audio, 'autoGainControl', 'googAutoGainControl'),
            s(l.audio, 'noiseSuppression', 'googNoiseSuppression'),
            (l.audio = n(l.audio))
        }
        if (l && typeof l.video == 'object') {
          let s = l.video.facingMode
          s = s && (typeof s == 'object' ? s : { ideal: s })
          const c = t.version < 66
          if (
            s &&
            (s.exact === 'user' ||
              s.exact === 'environment' ||
              s.ideal === 'user' ||
              s.ideal === 'environment') &&
            !(
              r.mediaDevices.getSupportedConstraints &&
              r.mediaDevices.getSupportedConstraints().facingMode &&
              !c
            )
          ) {
            delete l.video.facingMode
            let V
            if (
              (s.exact === 'environment' || s.ideal === 'environment'
                ? (V = ['back', 'rear'])
                : (s.exact === 'user' || s.ideal === 'user') && (V = ['front']),
              V)
            )
              return r.mediaDevices.enumerateDevices().then((A) => {
                A = A.filter((y) => y.kind === 'videoinput')
                let C = A.find((y) => V.some((w) => y.label.toLowerCase().includes(w)))
                return (
                  !C && A.length && V.includes('back') && (C = A[A.length - 1]),
                  C && (l.video.deviceId = s.exact ? { exact: C.deviceId } : { ideal: C.deviceId }),
                  (l.video = n(l.video)),
                  Ks('chrome: ' + JSON.stringify(l)),
                  q(l)
                )
              })
          }
          l.video = n(l.video)
        }
        return Ks('chrome: ' + JSON.stringify(l)), q(l)
      },
      i = function (l) {
        return t.version >= 64
          ? l
          : {
              name:
                {
                  PermissionDeniedError: 'NotAllowedError',
                  PermissionDismissedError: 'NotAllowedError',
                  InvalidStateError: 'NotAllowedError',
                  DevicesNotFoundError: 'NotFoundError',
                  ConstraintNotSatisfiedError: 'OverconstrainedError',
                  TrackStartError: 'NotReadableError',
                  MediaDeviceFailedDueToShutdown: 'NotAllowedError',
                  MediaDeviceKillSwitchOn: 'NotAllowedError',
                  TabCaptureError: 'AbortError',
                  ScreenCaptureError: 'AbortError',
                  DeviceCaptureError: 'AbortError'
                }[l.name] || l.name,
              message: l.message,
              constraint: l.constraint || l.constraintName,
              toString() {
                return this.name + (this.message && ': ') + this.message
              }
            }
      },
      a = function (l, q, s) {
        o(l, (c) => {
          r.webkitGetUserMedia(c, q, (V) => {
            s && s(i(V))
          })
        })
      }
    if (((r.getUserMedia = a.bind(r)), r.mediaDevices.getUserMedia)) {
      const l = r.mediaDevices.getUserMedia.bind(r.mediaDevices)
      r.mediaDevices.getUserMedia = function (q) {
        return o(q, (s) =>
          l(s).then(
            (c) => {
              if (
                (s.audio && !c.getAudioTracks().length) ||
                (s.video && !c.getVideoTracks().length)
              )
                throw (
                  (c.getTracks().forEach((V) => {
                    V.stop()
                  }),
                  new DOMException('', 'NotFoundError'))
                )
              return c
            },
            (c) => Promise.reject(i(c))
          )
        )
      }
    }
  }
  function Vh(e, t) {
    if (
      !(e.navigator.mediaDevices && 'getDisplayMedia' in e.navigator.mediaDevices) &&
      e.navigator.mediaDevices
    ) {
      if (typeof t != 'function') {
        console.error('shimGetDisplayMedia: getSourceId argument is not a function')
        return
      }
      e.navigator.mediaDevices.getDisplayMedia = function (n) {
        return t(n).then((o) => {
          const i = n.video && n.video.width,
            a = n.video && n.video.height,
            l = n.video && n.video.frameRate
          return (
            (n.video = {
              mandatory: {
                chromeMediaSource: 'desktop',
                chromeMediaSourceId: o,
                maxFrameRate: l || 3
              }
            }),
            i && (n.video.mandatory.maxWidth = i),
            a && (n.video.mandatory.maxHeight = a),
            e.navigator.mediaDevices.getUserMedia(n)
          )
        })
      }
    }
  }
  function _s(e) {
    e.MediaStream = e.MediaStream || e.webkitMediaStream
  }
  function Ws(e) {
    if (
      typeof e == 'object' &&
      e.RTCPeerConnection &&
      !('ontrack' in e.RTCPeerConnection.prototype)
    ) {
      Object.defineProperty(e.RTCPeerConnection.prototype, 'ontrack', {
        get() {
          return this._ontrack
        },
        set(r) {
          this._ontrack && this.removeEventListener('track', this._ontrack),
            this.addEventListener('track', (this._ontrack = r))
        },
        enumerable: !0,
        configurable: !0
      })
      const t = e.RTCPeerConnection.prototype.setRemoteDescription
      e.RTCPeerConnection.prototype.setRemoteDescription = function () {
        return (
          this._ontrackpoly ||
            ((this._ontrackpoly = (n) => {
              n.stream.addEventListener('addtrack', (o) => {
                let i
                e.RTCPeerConnection.prototype.getReceivers
                  ? (i = this.getReceivers().find((l) => l.track && l.track.id === o.track.id))
                  : (i = { track: o.track })
                const a = new Event('track')
                ;(a.track = o.track),
                  (a.receiver = i),
                  (a.transceiver = { receiver: i }),
                  (a.streams = [n.stream]),
                  this.dispatchEvent(a)
              }),
                n.stream.getTracks().forEach((o) => {
                  let i
                  e.RTCPeerConnection.prototype.getReceivers
                    ? (i = this.getReceivers().find((l) => l.track && l.track.id === o.id))
                    : (i = { track: o })
                  const a = new Event('track')
                  ;(a.track = o),
                    (a.receiver = i),
                    (a.transceiver = { receiver: i }),
                    (a.streams = [n.stream]),
                    this.dispatchEvent(a)
                })
            }),
            this.addEventListener('addstream', this._ontrackpoly)),
          t.apply(this, arguments)
        )
      }
    } else Qr(e, 'track', (t) => (t.transceiver || Object.defineProperty(t, 'transceiver', { value: { receiver: t.receiver } }), t))
  }
  function $s(e) {
    if (
      typeof e == 'object' &&
      e.RTCPeerConnection &&
      !('getSenders' in e.RTCPeerConnection.prototype) &&
      'createDTMFSender' in e.RTCPeerConnection.prototype
    ) {
      const t = function (o, i) {
        return {
          track: i,
          get dtmf() {
            return (
              this._dtmf === void 0 &&
                (i.kind === 'audio' ? (this._dtmf = o.createDTMFSender(i)) : (this._dtmf = null)),
              this._dtmf
            )
          },
          _pc: o
        }
      }
      if (!e.RTCPeerConnection.prototype.getSenders) {
        e.RTCPeerConnection.prototype.getSenders = function () {
          return (this._senders = this._senders || []), this._senders.slice()
        }
        const o = e.RTCPeerConnection.prototype.addTrack
        e.RTCPeerConnection.prototype.addTrack = function (l, q) {
          let s = o.apply(this, arguments)
          return s || ((s = t(this, l)), this._senders.push(s)), s
        }
        const i = e.RTCPeerConnection.prototype.removeTrack
        e.RTCPeerConnection.prototype.removeTrack = function (l) {
          i.apply(this, arguments)
          const q = this._senders.indexOf(l)
          q !== -1 && this._senders.splice(q, 1)
        }
      }
      const r = e.RTCPeerConnection.prototype.addStream
      e.RTCPeerConnection.prototype.addStream = function (i) {
        ;(this._senders = this._senders || []),
          r.apply(this, [i]),
          i.getTracks().forEach((a) => {
            this._senders.push(t(this, a))
          })
      }
      const n = e.RTCPeerConnection.prototype.removeStream
      e.RTCPeerConnection.prototype.removeStream = function (i) {
        ;(this._senders = this._senders || []),
          n.apply(this, [i]),
          i.getTracks().forEach((a) => {
            const l = this._senders.find((q) => q.track === a)
            l && this._senders.splice(this._senders.indexOf(l), 1)
          })
      }
    } else if (
      typeof e == 'object' &&
      e.RTCPeerConnection &&
      'getSenders' in e.RTCPeerConnection.prototype &&
      'createDTMFSender' in e.RTCPeerConnection.prototype &&
      e.RTCRtpSender &&
      !('dtmf' in e.RTCRtpSender.prototype)
    ) {
      const t = e.RTCPeerConnection.prototype.getSenders
      ;(e.RTCPeerConnection.prototype.getSenders = function () {
        const n = t.apply(this, [])
        return n.forEach((o) => (o._pc = this)), n
      }),
        Object.defineProperty(e.RTCRtpSender.prototype, 'dtmf', {
          get() {
            return (
              this._dtmf === void 0 &&
                (this.track.kind === 'audio'
                  ? (this._dtmf = this._pc.createDTMFSender(this.track))
                  : (this._dtmf = null)),
              this._dtmf
            )
          }
        })
    }
  }
  function Xs(e) {
    if (!e.RTCPeerConnection) return
    const t = e.RTCPeerConnection.prototype.getStats
    e.RTCPeerConnection.prototype.getStats = function () {
      const [n, o, i] = arguments
      if (arguments.length > 0 && typeof n == 'function') return t.apply(this, arguments)
      if (t.length === 0 && (arguments.length === 0 || typeof n != 'function'))
        return t.apply(this, [])
      const a = function (q) {
          const s = {}
          return (
            q.result().forEach((V) => {
              const A = {
                id: V.id,
                timestamp: V.timestamp,
                type:
                  { localcandidate: 'local-candidate', remotecandidate: 'remote-candidate' }[
                    V.type
                  ] || V.type
              }
              V.names().forEach((C) => {
                A[C] = V.stat(C)
              }),
                (s[A.id] = A)
            }),
            s
          )
        },
        l = function (q) {
          return new Map(Object.keys(q).map((s) => [s, q[s]]))
        }
      if (arguments.length >= 2) {
        const q = function (s) {
          o(l(a(s)))
        }
        return t.apply(this, [q, n])
      }
      return new Promise((q, s) => {
        t.apply(this, [
          function (c) {
            q(l(a(c)))
          },
          s
        ])
      }).then(o, i)
    }
  }
  function el(e) {
    if (!(typeof e == 'object' && e.RTCPeerConnection && e.RTCRtpSender && e.RTCRtpReceiver)) return
    if (!('getStats' in e.RTCRtpSender.prototype)) {
      const r = e.RTCPeerConnection.prototype.getSenders
      r &&
        (e.RTCPeerConnection.prototype.getSenders = function () {
          const i = r.apply(this, [])
          return i.forEach((a) => (a._pc = this)), i
        })
      const n = e.RTCPeerConnection.prototype.addTrack
      n &&
        (e.RTCPeerConnection.prototype.addTrack = function () {
          const i = n.apply(this, arguments)
          return (i._pc = this), i
        }),
        (e.RTCRtpSender.prototype.getStats = function () {
          const i = this
          return this._pc.getStats().then((a) => Js(a, i.track, !0))
        })
    }
    if (!('getStats' in e.RTCRtpReceiver.prototype)) {
      const r = e.RTCPeerConnection.prototype.getReceivers
      r &&
        (e.RTCPeerConnection.prototype.getReceivers = function () {
          const o = r.apply(this, [])
          return o.forEach((i) => (i._pc = this)), o
        }),
        Qr(e, 'track', (n) => ((n.receiver._pc = n.srcElement), n)),
        (e.RTCRtpReceiver.prototype.getStats = function () {
          const o = this
          return this._pc.getStats().then((i) => Js(i, o.track, !1))
        })
    }
    if (!('getStats' in e.RTCRtpSender.prototype && 'getStats' in e.RTCRtpReceiver.prototype))
      return
    const t = e.RTCPeerConnection.prototype.getStats
    e.RTCPeerConnection.prototype.getStats = function () {
      if (arguments.length > 0 && arguments[0] instanceof e.MediaStreamTrack) {
        const n = arguments[0]
        let o, i, a
        return (
          this.getSenders().forEach((l) => {
            l.track === n && (o ? (a = !0) : (o = l))
          }),
          this.getReceivers().forEach(
            (l) => (l.track === n && (i ? (a = !0) : (i = l)), l.track === n)
          ),
          a || (o && i)
            ? Promise.reject(
                new DOMException(
                  'There are more than one sender or receiver for the track.',
                  'InvalidAccessError'
                )
              )
            : o
            ? o.getStats()
            : i
            ? i.getStats()
            : Promise.reject(
                new DOMException(
                  'There is no sender or receiver for the track.',
                  'InvalidAccessError'
                )
              )
        )
      }
      return t.apply(this, arguments)
    }
  }
  function tl(e) {
    e.RTCPeerConnection.prototype.getLocalStreams = function () {
      return (
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        Object.keys(this._shimmedLocalStreams).map((a) => this._shimmedLocalStreams[a][0])
      )
    }
    const t = e.RTCPeerConnection.prototype.addTrack
    e.RTCPeerConnection.prototype.addTrack = function (a, l) {
      if (!l) return t.apply(this, arguments)
      this._shimmedLocalStreams = this._shimmedLocalStreams || {}
      const q = t.apply(this, arguments)
      return (
        this._shimmedLocalStreams[l.id]
          ? this._shimmedLocalStreams[l.id].indexOf(q) === -1 &&
            this._shimmedLocalStreams[l.id].push(q)
          : (this._shimmedLocalStreams[l.id] = [l, q]),
        q
      )
    }
    const r = e.RTCPeerConnection.prototype.addStream
    e.RTCPeerConnection.prototype.addStream = function (a) {
      ;(this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        a.getTracks().forEach((s) => {
          if (this.getSenders().find((V) => V.track === s))
            throw new DOMException('Track already exists.', 'InvalidAccessError')
        })
      const l = this.getSenders()
      r.apply(this, arguments)
      const q = this.getSenders().filter((s) => l.indexOf(s) === -1)
      this._shimmedLocalStreams[a.id] = [a].concat(q)
    }
    const n = e.RTCPeerConnection.prototype.removeStream
    e.RTCPeerConnection.prototype.removeStream = function (a) {
      return (
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        delete this._shimmedLocalStreams[a.id],
        n.apply(this, arguments)
      )
    }
    const o = e.RTCPeerConnection.prototype.removeTrack
    e.RTCPeerConnection.prototype.removeTrack = function (a) {
      return (
        (this._shimmedLocalStreams = this._shimmedLocalStreams || {}),
        a &&
          Object.keys(this._shimmedLocalStreams).forEach((l) => {
            const q = this._shimmedLocalStreams[l].indexOf(a)
            q !== -1 && this._shimmedLocalStreams[l].splice(q, 1),
              this._shimmedLocalStreams[l].length === 1 && delete this._shimmedLocalStreams[l]
          }),
        o.apply(this, arguments)
      )
    }
  }
  function rl(e, t) {
    if (!e.RTCPeerConnection) return
    if (e.RTCPeerConnection.prototype.addTrack && t.version >= 65) return tl(e)
    const r = e.RTCPeerConnection.prototype.getLocalStreams
    e.RTCPeerConnection.prototype.getLocalStreams = function () {
      const c = r.apply(this)
      return (
        (this._reverseStreams = this._reverseStreams || {}),
        c.map((V) => this._reverseStreams[V.id])
      )
    }
    const n = e.RTCPeerConnection.prototype.addStream
    e.RTCPeerConnection.prototype.addStream = function (c) {
      if (
        ((this._streams = this._streams || {}),
        (this._reverseStreams = this._reverseStreams || {}),
        c.getTracks().forEach((V) => {
          if (this.getSenders().find((C) => C.track === V))
            throw new DOMException('Track already exists.', 'InvalidAccessError')
        }),
        !this._reverseStreams[c.id])
      ) {
        const V = new e.MediaStream(c.getTracks())
        ;(this._streams[c.id] = V), (this._reverseStreams[V.id] = c), (c = V)
      }
      n.apply(this, [c])
    }
    const o = e.RTCPeerConnection.prototype.removeStream
    ;(e.RTCPeerConnection.prototype.removeStream = function (c) {
      ;(this._streams = this._streams || {}),
        (this._reverseStreams = this._reverseStreams || {}),
        o.apply(this, [this._streams[c.id] || c]),
        delete this._reverseStreams[this._streams[c.id] ? this._streams[c.id].id : c.id],
        delete this._streams[c.id]
    }),
      (e.RTCPeerConnection.prototype.addTrack = function (c, V) {
        if (this.signalingState === 'closed')
          throw new DOMException(
            "The RTCPeerConnection's signalingState is 'closed'.",
            'InvalidStateError'
          )
        const A = [].slice.call(arguments, 1)
        if (A.length !== 1 || !A[0].getTracks().find((w) => w === c))
          throw new DOMException(
            'The adapter.js addTrack polyfill only supports a single  stream which is associated with the specified track.',
            'NotSupportedError'
          )
        if (this.getSenders().find((w) => w.track === c))
          throw new DOMException('Track already exists.', 'InvalidAccessError')
        ;(this._streams = this._streams || {}), (this._reverseStreams = this._reverseStreams || {})
        const y = this._streams[V.id]
        if (y)
          y.addTrack(c),
            Promise.resolve().then(() => {
              this.dispatchEvent(new Event('negotiationneeded'))
            })
        else {
          const w = new e.MediaStream([c])
          ;(this._streams[V.id] = w), (this._reverseStreams[w.id] = V), this.addStream(w)
        }
        return this.getSenders().find((w) => w.track === c)
      })
    function i(s, c) {
      let V = c.sdp
      return (
        Object.keys(s._reverseStreams || []).forEach((A) => {
          const C = s._reverseStreams[A],
            y = s._streams[C.id]
          V = V.replace(new RegExp(y.id, 'g'), C.id)
        }),
        new RTCSessionDescription({ type: c.type, sdp: V })
      )
    }
    function a(s, c) {
      let V = c.sdp
      return (
        Object.keys(s._reverseStreams || []).forEach((A) => {
          const C = s._reverseStreams[A],
            y = s._streams[C.id]
          V = V.replace(new RegExp(C.id, 'g'), y.id)
        }),
        new RTCSessionDescription({ type: c.type, sdp: V })
      )
    }
    ;['createOffer', 'createAnswer'].forEach(function (s) {
      const c = e.RTCPeerConnection.prototype[s],
        V = {
          [s]() {
            const A = arguments
            return arguments.length && typeof arguments[0] == 'function'
              ? c.apply(this, [
                  (y) => {
                    const w = i(this, y)
                    A[0].apply(null, [w])
                  },
                  (y) => {
                    A[1] && A[1].apply(null, y)
                  },
                  arguments[2]
                ])
              : c.apply(this, arguments).then((y) => i(this, y))
          }
        }
      e.RTCPeerConnection.prototype[s] = V[s]
    })
    const l = e.RTCPeerConnection.prototype.setLocalDescription
    e.RTCPeerConnection.prototype.setLocalDescription = function () {
      return !arguments.length || !arguments[0].type
        ? l.apply(this, arguments)
        : ((arguments[0] = a(this, arguments[0])), l.apply(this, arguments))
    }
    const q = Object.getOwnPropertyDescriptor(e.RTCPeerConnection.prototype, 'localDescription')
    Object.defineProperty(e.RTCPeerConnection.prototype, 'localDescription', {
      get() {
        const s = q.get.apply(this)
        return s.type === '' ? s : i(this, s)
      }
    }),
      (e.RTCPeerConnection.prototype.removeTrack = function (c) {
        if (this.signalingState === 'closed')
          throw new DOMException(
            "The RTCPeerConnection's signalingState is 'closed'.",
            'InvalidStateError'
          )
        if (!c._pc)
          throw new DOMException(
            'Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.',
            'TypeError'
          )
        if (!(c._pc === this))
          throw new DOMException('Sender was not created by this connection.', 'InvalidAccessError')
        this._streams = this._streams || {}
        let A
        Object.keys(this._streams).forEach((C) => {
          this._streams[C].getTracks().find((w) => c.track === w) && (A = this._streams[C])
        }),
          A &&
            (A.getTracks().length === 1
              ? this.removeStream(this._reverseStreams[A.id])
              : A.removeTrack(c.track),
            this.dispatchEvent(new Event('negotiationneeded')))
      })
  }
  function yi(e, t) {
    !e.RTCPeerConnection &&
      e.webkitRTCPeerConnection &&
      (e.RTCPeerConnection = e.webkitRTCPeerConnection),
      e.RTCPeerConnection &&
        t.version < 53 &&
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (r) {
          const n = e.RTCPeerConnection.prototype[r],
            o = {
              [r]() {
                return (
                  (arguments[0] = new (
                    r === 'addIceCandidate' ? e.RTCIceCandidate : e.RTCSessionDescription
                  )(arguments[0])),
                  n.apply(this, arguments)
                )
              }
            }
          e.RTCPeerConnection.prototype[r] = o[r]
        })
  }
  function nl(e, t) {
    Qr(e, 'negotiationneeded', (r) => {
      const n = r.target
      if (
        !(
          (t.version < 72 ||
            (n.getConfiguration && n.getConfiguration().sdpSemantics === 'plan-b')) &&
          n.signalingState !== 'stable'
        )
      )
        return r
    })
  }
  const ol = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        fixNegotiationNeeded: nl,
        shimAddTrackRemoveTrack: rl,
        shimAddTrackRemoveTrackWithNative: tl,
        shimGetDisplayMedia: Vh,
        shimGetSendersWithDtmf: $s,
        shimGetStats: Xs,
        shimGetUserMedia: zs,
        shimMediaStream: _s,
        shimOnTrack: Ws,
        shimPeerConnection: yi,
        shimSenderReceiverGetStats: el
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
  function dh(e, t) {
    let r = !1
    return (
      (e = JSON.parse(JSON.stringify(e))),
      e.filter((n) => {
        if (n && (n.urls || n.url)) {
          let o = n.urls || n.url
          n.url && !n.urls && no('RTCIceServer.url', 'RTCIceServer.urls')
          const i = typeof o == 'string'
          return (
            i && (o = [o]),
            (o = o.filter((a) => {
              if (a.indexOf('stun:') === 0) return !1
              const l =
                a.startsWith('turn') && !a.startsWith('turn:[') && a.includes('transport=udp')
              return l && !r ? ((r = !0), !0) : l && !r
            })),
            delete n.url,
            (n.urls = i ? o[0] : o),
            !!o.length
          )
        }
      })
    )
  }
  function il(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e
  }
  var al = { exports: {} }
  ;(function (e) {
    var t = {}
    ;(t.generateIdentifier = function () {
      return Math.random().toString(36).substr(2, 10)
    }),
      (t.localCName = t.generateIdentifier()),
      (t.splitLines = function (r) {
        return r
          .trim()
          .split(
            `
`
          )
          .map(function (n) {
            return n.trim()
          })
      }),
      (t.splitSections = function (r) {
        var n = r.split(`
m=`)
        return n.map(function (o, i) {
          return (
            (i > 0 ? 'm=' + o : o).trim() +
            `\r
`
          )
        })
      }),
      (t.getDescription = function (r) {
        var n = t.splitSections(r)
        return n && n[0]
      }),
      (t.getMediaSections = function (r) {
        var n = t.splitSections(r)
        return n.shift(), n
      }),
      (t.matchPrefix = function (r, n) {
        return t.splitLines(r).filter(function (o) {
          return o.indexOf(n) === 0
        })
      }),
      (t.parseCandidate = function (r) {
        var n
        r.indexOf('a=candidate:') === 0
          ? (n = r.substring(12).split(' '))
          : (n = r.substring(10).split(' '))
        for (
          var o = {
              foundation: n[0],
              component: parseInt(n[1], 10),
              protocol: n[2].toLowerCase(),
              priority: parseInt(n[3], 10),
              ip: n[4],
              address: n[4],
              port: parseInt(n[5], 10),
              type: n[7]
            },
            i = 8;
          i < n.length;
          i += 2
        )
          switch (n[i]) {
            case 'raddr':
              o.relatedAddress = n[i + 1]
              break
            case 'rport':
              o.relatedPort = parseInt(n[i + 1], 10)
              break
            case 'tcptype':
              o.tcpType = n[i + 1]
              break
            case 'ufrag':
              ;(o.ufrag = n[i + 1]), (o.usernameFragment = n[i + 1])
              break
            default:
              o[n[i]] = n[i + 1]
              break
          }
        return o
      }),
      (t.writeCandidate = function (r) {
        var n = []
        n.push(r.foundation),
          n.push(r.component),
          n.push(r.protocol.toUpperCase()),
          n.push(r.priority),
          n.push(r.address || r.ip),
          n.push(r.port)
        var o = r.type
        return (
          n.push('typ'),
          n.push(o),
          o !== 'host' &&
            r.relatedAddress &&
            r.relatedPort &&
            (n.push('raddr'), n.push(r.relatedAddress), n.push('rport'), n.push(r.relatedPort)),
          r.tcpType && r.protocol.toLowerCase() === 'tcp' && (n.push('tcptype'), n.push(r.tcpType)),
          (r.usernameFragment || r.ufrag) &&
            (n.push('ufrag'), n.push(r.usernameFragment || r.ufrag)),
          'candidate:' + n.join(' ')
        )
      }),
      (t.parseIceOptions = function (r) {
        return r.substr(14).split(' ')
      }),
      (t.parseRtpMap = function (r) {
        var n = r.substr(9).split(' '),
          o = { payloadType: parseInt(n.shift(), 10) }
        return (
          (n = n[0].split('/')),
          (o.name = n[0]),
          (o.clockRate = parseInt(n[1], 10)),
          (o.channels = n.length === 3 ? parseInt(n[2], 10) : 1),
          (o.numChannels = o.channels),
          o
        )
      }),
      (t.writeRtpMap = function (r) {
        var n = r.payloadType
        r.preferredPayloadType !== void 0 && (n = r.preferredPayloadType)
        var o = r.channels || r.numChannels || 1
        return (
          'a=rtpmap:' +
          n +
          ' ' +
          r.name +
          '/' +
          r.clockRate +
          (o !== 1 ? '/' + o : '') +
          `\r
`
        )
      }),
      (t.parseExtmap = function (r) {
        var n = r.substr(9).split(' ')
        return {
          id: parseInt(n[0], 10),
          direction: n[0].indexOf('/') > 0 ? n[0].split('/')[1] : 'sendrecv',
          uri: n[1]
        }
      }),
      (t.writeExtmap = function (r) {
        return (
          'a=extmap:' +
          (r.id || r.preferredId) +
          (r.direction && r.direction !== 'sendrecv' ? '/' + r.direction : '') +
          ' ' +
          r.uri +
          `\r
`
        )
      }),
      (t.parseFmtp = function (r) {
        for (var n = {}, o, i = r.substr(r.indexOf(' ') + 1).split(';'), a = 0; a < i.length; a++)
          (o = i[a].trim().split('=')), (n[o[0].trim()] = o[1])
        return n
      }),
      (t.writeFmtp = function (r) {
        var n = '',
          o = r.payloadType
        if (
          (r.preferredPayloadType !== void 0 && (o = r.preferredPayloadType),
          r.parameters && Object.keys(r.parameters).length)
        ) {
          var i = []
          Object.keys(r.parameters).forEach(function (a) {
            r.parameters[a] ? i.push(a + '=' + r.parameters[a]) : i.push(a)
          }),
            (n +=
              'a=fmtp:' +
              o +
              ' ' +
              i.join(';') +
              `\r
`)
        }
        return n
      }),
      (t.parseRtcpFb = function (r) {
        var n = r.substr(r.indexOf(' ') + 1).split(' ')
        return { type: n.shift(), parameter: n.join(' ') }
      }),
      (t.writeRtcpFb = function (r) {
        var n = '',
          o = r.payloadType
        return (
          r.preferredPayloadType !== void 0 && (o = r.preferredPayloadType),
          r.rtcpFeedback &&
            r.rtcpFeedback.length &&
            r.rtcpFeedback.forEach(function (i) {
              n +=
                'a=rtcp-fb:' +
                o +
                ' ' +
                i.type +
                (i.parameter && i.parameter.length ? ' ' + i.parameter : '') +
                `\r
`
            }),
          n
        )
      }),
      (t.parseSsrcMedia = function (r) {
        var n = r.indexOf(' '),
          o = { ssrc: parseInt(r.substr(7, n - 7), 10) },
          i = r.indexOf(':', n)
        return (
          i > -1
            ? ((o.attribute = r.substr(n + 1, i - n - 1)), (o.value = r.substr(i + 1)))
            : (o.attribute = r.substr(n + 1)),
          o
        )
      }),
      (t.parseSsrcGroup = function (r) {
        var n = r.substr(13).split(' ')
        return {
          semantics: n.shift(),
          ssrcs: n.map(function (o) {
            return parseInt(o, 10)
          })
        }
      }),
      (t.getMid = function (r) {
        var n = t.matchPrefix(r, 'a=mid:')[0]
        if (n) return n.substr(6)
      }),
      (t.parseFingerprint = function (r) {
        var n = r.substr(14).split(' ')
        return { algorithm: n[0].toLowerCase(), value: n[1] }
      }),
      (t.getDtlsParameters = function (r, n) {
        var o = t.matchPrefix(r + n, 'a=fingerprint:')
        return { role: 'auto', fingerprints: o.map(t.parseFingerprint) }
      }),
      (t.writeDtlsParameters = function (r, n) {
        var o =
          'a=setup:' +
          n +
          `\r
`
        return (
          r.fingerprints.forEach(function (i) {
            o +=
              'a=fingerprint:' +
              i.algorithm +
              ' ' +
              i.value +
              `\r
`
          }),
          o
        )
      }),
      (t.parseCryptoLine = function (r) {
        var n = r.substr(9).split(' ')
        return {
          tag: parseInt(n[0], 10),
          cryptoSuite: n[1],
          keyParams: n[2],
          sessionParams: n.slice(3)
        }
      }),
      (t.writeCryptoLine = function (r) {
        return (
          'a=crypto:' +
          r.tag +
          ' ' +
          r.cryptoSuite +
          ' ' +
          (typeof r.keyParams == 'object' ? t.writeCryptoKeyParams(r.keyParams) : r.keyParams) +
          (r.sessionParams ? ' ' + r.sessionParams.join(' ') : '') +
          `\r
`
        )
      }),
      (t.parseCryptoKeyParams = function (r) {
        if (r.indexOf('inline:') !== 0) return null
        var n = r.substr(7).split('|')
        return {
          keyMethod: 'inline',
          keySalt: n[0],
          lifeTime: n[1],
          mkiValue: n[2] ? n[2].split(':')[0] : void 0,
          mkiLength: n[2] ? n[2].split(':')[1] : void 0
        }
      }),
      (t.writeCryptoKeyParams = function (r) {
        return (
          r.keyMethod +
          ':' +
          r.keySalt +
          (r.lifeTime ? '|' + r.lifeTime : '') +
          (r.mkiValue && r.mkiLength ? '|' + r.mkiValue + ':' + r.mkiLength : '')
        )
      }),
      (t.getCryptoParameters = function (r, n) {
        var o = t.matchPrefix(r + n, 'a=crypto:')
        return o.map(t.parseCryptoLine)
      }),
      (t.getIceParameters = function (r, n) {
        var o = t.matchPrefix(r + n, 'a=ice-ufrag:')[0],
          i = t.matchPrefix(r + n, 'a=ice-pwd:')[0]
        return o && i ? { usernameFragment: o.substr(12), password: i.substr(10) } : null
      }),
      (t.writeIceParameters = function (r) {
        return (
          'a=ice-ufrag:' +
          r.usernameFragment +
          `\r
a=ice-pwd:` +
          r.password +
          `\r
`
        )
      }),
      (t.parseRtpParameters = function (r) {
        for (
          var n = { codecs: [], headerExtensions: [], fecMechanisms: [], rtcp: [] },
            o = t.splitLines(r),
            i = o[0].split(' '),
            a = 3;
          a < i.length;
          a++
        ) {
          var l = i[a],
            q = t.matchPrefix(r, 'a=rtpmap:' + l + ' ')[0]
          if (q) {
            var s = t.parseRtpMap(q),
              c = t.matchPrefix(r, 'a=fmtp:' + l + ' ')
            switch (
              ((s.parameters = c.length ? t.parseFmtp(c[0]) : {}),
              (s.rtcpFeedback = t.matchPrefix(r, 'a=rtcp-fb:' + l + ' ').map(t.parseRtcpFb)),
              n.codecs.push(s),
              s.name.toUpperCase())
            ) {
              case 'RED':
              case 'ULPFEC':
                n.fecMechanisms.push(s.name.toUpperCase())
                break
            }
          }
        }
        return (
          t.matchPrefix(r, 'a=extmap:').forEach(function (V) {
            n.headerExtensions.push(t.parseExtmap(V))
          }),
          n
        )
      }),
      (t.writeRtpDescription = function (r, n) {
        var o = ''
        ;(o += 'm=' + r + ' '),
          (o += n.codecs.length > 0 ? '9' : '0'),
          (o += ' UDP/TLS/RTP/SAVPF '),
          (o +=
            n.codecs
              .map(function (a) {
                return a.preferredPayloadType !== void 0 ? a.preferredPayloadType : a.payloadType
              })
              .join(' ') +
            `\r
`),
          (o += `c=IN IP4 0.0.0.0\r
`),
          (o += `a=rtcp:9 IN IP4 0.0.0.0\r
`),
          n.codecs.forEach(function (a) {
            ;(o += t.writeRtpMap(a)), (o += t.writeFmtp(a)), (o += t.writeRtcpFb(a))
          })
        var i = 0
        return (
          n.codecs.forEach(function (a) {
            a.maxptime > i && (i = a.maxptime)
          }),
          i > 0 &&
            (o +=
              'a=maxptime:' +
              i +
              `\r
`),
          (o += `a=rtcp-mux\r
`),
          n.headerExtensions &&
            n.headerExtensions.forEach(function (a) {
              o += t.writeExtmap(a)
            }),
          o
        )
      }),
      (t.parseRtpEncodingParameters = function (r) {
        var n = [],
          o = t.parseRtpParameters(r),
          i = o.fecMechanisms.indexOf('RED') !== -1,
          a = o.fecMechanisms.indexOf('ULPFEC') !== -1,
          l = t
            .matchPrefix(r, 'a=ssrc:')
            .map(function (A) {
              return t.parseSsrcMedia(A)
            })
            .filter(function (A) {
              return A.attribute === 'cname'
            }),
          q = l.length > 0 && l[0].ssrc,
          s,
          c = t.matchPrefix(r, 'a=ssrc-group:FID').map(function (A) {
            var C = A.substr(17).split(' ')
            return C.map(function (y) {
              return parseInt(y, 10)
            })
          })
        c.length > 0 && c[0].length > 1 && c[0][0] === q && (s = c[0][1]),
          o.codecs.forEach(function (A) {
            if (A.name.toUpperCase() === 'RTX' && A.parameters.apt) {
              var C = { ssrc: q, codecPayloadType: parseInt(A.parameters.apt, 10) }
              q && s && (C.rtx = { ssrc: s }),
                n.push(C),
                i &&
                  ((C = JSON.parse(JSON.stringify(C))),
                  (C.fec = { ssrc: q, mechanism: a ? 'red+ulpfec' : 'red' }),
                  n.push(C))
            }
          }),
          n.length === 0 && q && n.push({ ssrc: q })
        var V = t.matchPrefix(r, 'b=')
        return (
          V.length &&
            (V[0].indexOf('b=TIAS:') === 0
              ? (V = parseInt(V[0].substr(7), 10))
              : V[0].indexOf('b=AS:') === 0
              ? (V = parseInt(V[0].substr(5), 10) * 1e3 * 0.95 - 50 * 40 * 8)
              : (V = void 0),
            n.forEach(function (A) {
              A.maxBitrate = V
            })),
          n
        )
      }),
      (t.parseRtcpParameters = function (r) {
        var n = {},
          o = t
            .matchPrefix(r, 'a=ssrc:')
            .map(function (l) {
              return t.parseSsrcMedia(l)
            })
            .filter(function (l) {
              return l.attribute === 'cname'
            })[0]
        o && ((n.cname = o.value), (n.ssrc = o.ssrc))
        var i = t.matchPrefix(r, 'a=rtcp-rsize')
        ;(n.reducedSize = i.length > 0), (n.compound = i.length === 0)
        var a = t.matchPrefix(r, 'a=rtcp-mux')
        return (n.mux = a.length > 0), n
      }),
      (t.parseMsid = function (r) {
        var n,
          o = t.matchPrefix(r, 'a=msid:')
        if (o.length === 1) return (n = o[0].substr(7).split(' ')), { stream: n[0], track: n[1] }
        var i = t
          .matchPrefix(r, 'a=ssrc:')
          .map(function (a) {
            return t.parseSsrcMedia(a)
          })
          .filter(function (a) {
            return a.attribute === 'msid'
          })
        if (i.length > 0) return (n = i[0].value.split(' ')), { stream: n[0], track: n[1] }
      }),
      (t.parseSctpDescription = function (r) {
        var n = t.parseMLine(r),
          o = t.matchPrefix(r, 'a=max-message-size:'),
          i
        o.length > 0 && (i = parseInt(o[0].substr(19), 10)), isNaN(i) && (i = 65536)
        var a = t.matchPrefix(r, 'a=sctp-port:')
        if (a.length > 0)
          return { port: parseInt(a[0].substr(12), 10), protocol: n.fmt, maxMessageSize: i }
        var l = t.matchPrefix(r, 'a=sctpmap:')
        if (l.length > 0) {
          var q = t.matchPrefix(r, 'a=sctpmap:')[0].substr(10).split(' ')
          return { port: parseInt(q[0], 10), protocol: q[1], maxMessageSize: i }
        }
      }),
      (t.writeSctpDescription = function (r, n) {
        var o = []
        return (
          r.protocol !== 'DTLS/SCTP'
            ? (o = [
                'm=' +
                  r.kind +
                  ' 9 ' +
                  r.protocol +
                  ' ' +
                  n.protocol +
                  `\r
`,
                `c=IN IP4 0.0.0.0\r
`,
                'a=sctp-port:' +
                  n.port +
                  `\r
`
              ])
            : (o = [
                'm=' +
                  r.kind +
                  ' 9 ' +
                  r.protocol +
                  ' ' +
                  n.port +
                  `\r
`,
                `c=IN IP4 0.0.0.0\r
`,
                'a=sctpmap:' +
                  n.port +
                  ' ' +
                  n.protocol +
                  ` 65535\r
`
              ]),
          n.maxMessageSize !== void 0 &&
            o.push(
              'a=max-message-size:' +
                n.maxMessageSize +
                `\r
`
            ),
          o.join('')
        )
      }),
      (t.generateSessionId = function () {
        return Math.random().toString().substr(2, 21)
      }),
      (t.writeSessionBoilerplate = function (r, n, o) {
        var i,
          a = n !== void 0 ? n : 2
        r ? (i = r) : (i = t.generateSessionId())
        var l = o || 'thisisadapterortc'
        return (
          `v=0\r
o=` +
          l +
          ' ' +
          i +
          ' ' +
          a +
          ` IN IP4 127.0.0.1\r
s=-\r
t=0 0\r
`
        )
      }),
      (t.writeMediaSection = function (r, n, o, i) {
        var a = t.writeRtpDescription(r.kind, n)
        if (
          ((a += t.writeIceParameters(r.iceGatherer.getLocalParameters())),
          (a += t.writeDtlsParameters(
            r.dtlsTransport.getLocalParameters(),
            o === 'offer' ? 'actpass' : 'active'
          )),
          (a +=
            'a=mid:' +
            r.mid +
            `\r
`),
          r.direction
            ? (a +=
                'a=' +
                r.direction +
                `\r
`)
            : r.rtpSender && r.rtpReceiver
            ? (a += `a=sendrecv\r
`)
            : r.rtpSender
            ? (a += `a=sendonly\r
`)
            : r.rtpReceiver
            ? (a += `a=recvonly\r
`)
            : (a += `a=inactive\r
`),
          r.rtpSender)
        ) {
          var l =
            'msid:' +
            i.id +
            ' ' +
            r.rtpSender.track.id +
            `\r
`
          ;(a += 'a=' + l),
            (a += 'a=ssrc:' + r.sendEncodingParameters[0].ssrc + ' ' + l),
            r.sendEncodingParameters[0].rtx &&
              ((a += 'a=ssrc:' + r.sendEncodingParameters[0].rtx.ssrc + ' ' + l),
              (a +=
                'a=ssrc-group:FID ' +
                r.sendEncodingParameters[0].ssrc +
                ' ' +
                r.sendEncodingParameters[0].rtx.ssrc +
                `\r
`))
        }
        return (
          (a +=
            'a=ssrc:' +
            r.sendEncodingParameters[0].ssrc +
            ' cname:' +
            t.localCName +
            `\r
`),
          r.rtpSender &&
            r.sendEncodingParameters[0].rtx &&
            (a +=
              'a=ssrc:' +
              r.sendEncodingParameters[0].rtx.ssrc +
              ' cname:' +
              t.localCName +
              `\r
`),
          a
        )
      }),
      (t.getDirection = function (r, n) {
        for (var o = t.splitLines(r), i = 0; i < o.length; i++)
          switch (o[i]) {
            case 'a=sendrecv':
            case 'a=sendonly':
            case 'a=recvonly':
            case 'a=inactive':
              return o[i].substr(2)
          }
        return n ? t.getDirection(n) : 'sendrecv'
      }),
      (t.getKind = function (r) {
        var n = t.splitLines(r),
          o = n[0].split(' ')
        return o[0].substr(2)
      }),
      (t.isRejected = function (r) {
        return r.split(' ', 2)[1] === '0'
      }),
      (t.parseMLine = function (r) {
        var n = t.splitLines(r),
          o = n[0].substr(2).split(' ')
        return { kind: o[0], port: parseInt(o[1], 10), protocol: o[2], fmt: o.slice(3).join(' ') }
      }),
      (t.parseOLine = function (r) {
        var n = t.matchPrefix(r, 'o=')[0],
          o = n.substr(2).split(' ')
        return {
          username: o[0],
          sessionId: o[1],
          sessionVersion: parseInt(o[2], 10),
          netType: o[3],
          addressType: o[4],
          address: o[5]
        }
      }),
      (t.isValidSDP = function (r) {
        if (typeof r != 'string' || r.length === 0) return !1
        for (var n = t.splitLines(r), o = 0; o < n.length; o++)
          if (n[o].length < 2 || n[o].charAt(1) !== '=') return !1
        return !0
      }),
      (e.exports = t)
  })(al)
  var sl = al.exports
  const oo = il(sl)
  var ue = sl
  function fh(e) {
    return (
      {
        inboundrtp: 'inbound-rtp',
        outboundrtp: 'outbound-rtp',
        candidatepair: 'candidate-pair',
        localcandidate: 'local-candidate',
        remotecandidate: 'remote-candidate'
      }[e.type] || e.type
    )
  }
  function ll(e, t, r, n, o) {
    var i = ue.writeRtpDescription(e.kind, t)
    if (
      ((i += ue.writeIceParameters(e.iceGatherer.getLocalParameters())),
      (i += ue.writeDtlsParameters(
        e.dtlsTransport.getLocalParameters(),
        r === 'offer' ? 'actpass' : o || 'active'
      )),
      (i +=
        'a=mid:' +
        e.mid +
        `\r
`),
      e.rtpSender && e.rtpReceiver
        ? (i += `a=sendrecv\r
`)
        : e.rtpSender
        ? (i += `a=sendonly\r
`)
        : e.rtpReceiver
        ? (i += `a=recvonly\r
`)
        : (i += `a=inactive\r
`),
      e.rtpSender)
    ) {
      var a = e.rtpSender._initialTrackId || e.rtpSender.track.id
      e.rtpSender._initialTrackId = a
      var l =
        'msid:' +
        (n ? n.id : '-') +
        ' ' +
        a +
        `\r
`
      ;(i += 'a=' + l),
        (i += 'a=ssrc:' + e.sendEncodingParameters[0].ssrc + ' ' + l),
        e.sendEncodingParameters[0].rtx &&
          ((i += 'a=ssrc:' + e.sendEncodingParameters[0].rtx.ssrc + ' ' + l),
          (i +=
            'a=ssrc-group:FID ' +
            e.sendEncodingParameters[0].ssrc +
            ' ' +
            e.sendEncodingParameters[0].rtx.ssrc +
            `\r
`))
    }
    return (
      (i +=
        'a=ssrc:' +
        e.sendEncodingParameters[0].ssrc +
        ' cname:' +
        ue.localCName +
        `\r
`),
      e.rtpSender &&
        e.sendEncodingParameters[0].rtx &&
        (i +=
          'a=ssrc:' +
          e.sendEncodingParameters[0].rtx.ssrc +
          ' cname:' +
          ue.localCName +
          `\r
`),
      i
    )
  }
  function Ah(e, t) {
    var r = !1
    return (
      (e = JSON.parse(JSON.stringify(e))),
      e.filter(function (n) {
        if (n && (n.urls || n.url)) {
          var o = n.urls || n.url
          n.url && !n.urls && console.warn('RTCIceServer.url is deprecated! Use urls instead.')
          var i = typeof o == 'string'
          return (
            i && (o = [o]),
            (o = o.filter(function (a) {
              var l =
                a.indexOf('turn:') === 0 &&
                a.indexOf('transport=udp') !== -1 &&
                a.indexOf('turn:[') === -1 &&
                !r
              return l
                ? ((r = !0), !0)
                : a.indexOf('stun:') === 0 && t >= 14393 && a.indexOf('?transport=udp') === -1
            })),
            delete n.url,
            (n.urls = i ? o[0] : o),
            !!o.length
          )
        }
      })
    )
  }
  function io(e, t) {
    var r = { codecs: [], headerExtensions: [], fecMechanisms: [] },
      n = function (i, a) {
        i = parseInt(i, 10)
        for (var l = 0; l < a.length; l++)
          if (a[l].payloadType === i || a[l].preferredPayloadType === i) return a[l]
      },
      o = function (i, a, l, q) {
        var s = n(i.parameters.apt, l),
          c = n(a.parameters.apt, q)
        return s && c && s.name.toLowerCase() === c.name.toLowerCase()
      }
    return (
      e.codecs.forEach(function (i) {
        for (var a = 0; a < t.codecs.length; a++) {
          var l = t.codecs[a]
          if (i.name.toLowerCase() === l.name.toLowerCase() && i.clockRate === l.clockRate) {
            if (
              i.name.toLowerCase() === 'rtx' &&
              i.parameters &&
              l.parameters.apt &&
              !o(i, l, e.codecs, t.codecs)
            )
              continue
            ;(l = JSON.parse(JSON.stringify(l))),
              (l.numChannels = Math.min(i.numChannels, l.numChannels)),
              r.codecs.push(l),
              (l.rtcpFeedback = l.rtcpFeedback.filter(function (q) {
                for (var s = 0; s < i.rtcpFeedback.length; s++)
                  if (
                    i.rtcpFeedback[s].type === q.type &&
                    i.rtcpFeedback[s].parameter === q.parameter
                  )
                    return !0
                return !1
              }))
            break
          }
        }
      }),
      e.headerExtensions.forEach(function (i) {
        for (var a = 0; a < t.headerExtensions.length; a++) {
          var l = t.headerExtensions[a]
          if (i.uri === l.uri) {
            r.headerExtensions.push(l)
            break
          }
        }
      }),
      r
    )
  }
  function ql(e, t, r) {
    return (
      {
        offer: {
          setLocalDescription: ['stable', 'have-local-offer'],
          setRemoteDescription: ['stable', 'have-remote-offer']
        },
        answer: {
          setLocalDescription: ['have-remote-offer', 'have-local-pranswer'],
          setRemoteDescription: ['have-local-offer', 'have-remote-pranswer']
        }
      }[t][e].indexOf(r) !== -1
    )
  }
  function Si(e, t) {
    var r = e.getRemoteCandidates().find(function (n) {
      return (
        t.foundation === n.foundation &&
        t.ip === n.ip &&
        t.port === n.port &&
        t.priority === n.priority &&
        t.protocol === n.protocol &&
        t.type === n.type
      )
    })
    return r || e.addRemoteCandidate(t), !r
  }
  function tt(e, t) {
    var r = new Error(t)
    return (
      (r.name = e),
      (r.code = {
        NotSupportedError: 9,
        InvalidStateError: 11,
        InvalidAccessError: 15,
        TypeError: void 0,
        OperationError: void 0
      }[e]),
      r
    )
  }
  var ph = function (e, t) {
    function r(q, s) {
      s.addTrack(q), s.dispatchEvent(new e.MediaStreamTrackEvent('addtrack', { track: q }))
    }
    function n(q, s) {
      s.removeTrack(q), s.dispatchEvent(new e.MediaStreamTrackEvent('removetrack', { track: q }))
    }
    function o(q, s, c, V) {
      var A = new Event('track')
      ;(A.track = s),
        (A.receiver = c),
        (A.transceiver = { receiver: c }),
        (A.streams = V),
        e.setTimeout(function () {
          q._dispatchEvent('track', A)
        })
    }
    var i = function (q) {
      var s = this,
        c = document.createDocumentFragment()
      if (
        (['addEventListener', 'removeEventListener', 'dispatchEvent'].forEach(function (A) {
          s[A] = c[A].bind(c)
        }),
        (this.canTrickleIceCandidates = null),
        (this.needNegotiation = !1),
        (this.localStreams = []),
        (this.remoteStreams = []),
        (this._localDescription = null),
        (this._remoteDescription = null),
        (this.signalingState = 'stable'),
        (this.iceConnectionState = 'new'),
        (this.connectionState = 'new'),
        (this.iceGatheringState = 'new'),
        (q = JSON.parse(JSON.stringify(q || {}))),
        (this.usingBundle = q.bundlePolicy === 'max-bundle'),
        q.rtcpMuxPolicy === 'negotiate')
      )
        throw tt('NotSupportedError', "rtcpMuxPolicy 'negotiate' is not supported")
      switch ((q.rtcpMuxPolicy || (q.rtcpMuxPolicy = 'require'), q.iceTransportPolicy)) {
        case 'all':
        case 'relay':
          break
        default:
          q.iceTransportPolicy = 'all'
          break
      }
      switch (q.bundlePolicy) {
        case 'balanced':
        case 'max-compat':
        case 'max-bundle':
          break
        default:
          q.bundlePolicy = 'balanced'
          break
      }
      if (
        ((q.iceServers = Ah(q.iceServers || [], t)),
        (this._iceGatherers = []),
        q.iceCandidatePoolSize)
      )
        for (var V = q.iceCandidatePoolSize; V > 0; V--)
          this._iceGatherers.push(
            new e.RTCIceGatherer({ iceServers: q.iceServers, gatherPolicy: q.iceTransportPolicy })
          )
      else q.iceCandidatePoolSize = 0
      ;(this._config = q),
        (this.transceivers = []),
        (this._sdpSessionId = ue.generateSessionId()),
        (this._sdpSessionVersion = 0),
        (this._dtlsRole = void 0),
        (this._isClosed = !1)
    }
    Object.defineProperty(i.prototype, 'localDescription', {
      configurable: !0,
      get: function () {
        return this._localDescription
      }
    }),
      Object.defineProperty(i.prototype, 'remoteDescription', {
        configurable: !0,
        get: function () {
          return this._remoteDescription
        }
      }),
      (i.prototype.onicecandidate = null),
      (i.prototype.onaddstream = null),
      (i.prototype.ontrack = null),
      (i.prototype.onremovestream = null),
      (i.prototype.onsignalingstatechange = null),
      (i.prototype.oniceconnectionstatechange = null),
      (i.prototype.onconnectionstatechange = null),
      (i.prototype.onicegatheringstatechange = null),
      (i.prototype.onnegotiationneeded = null),
      (i.prototype.ondatachannel = null),
      (i.prototype._dispatchEvent = function (q, s) {
        this._isClosed ||
          (this.dispatchEvent(s), typeof this['on' + q] == 'function' && this['on' + q](s))
      }),
      (i.prototype._emitGatheringStateChange = function () {
        var q = new Event('icegatheringstatechange')
        this._dispatchEvent('icegatheringstatechange', q)
      }),
      (i.prototype.getConfiguration = function () {
        return this._config
      }),
      (i.prototype.getLocalStreams = function () {
        return this.localStreams
      }),
      (i.prototype.getRemoteStreams = function () {
        return this.remoteStreams
      }),
      (i.prototype._createTransceiver = function (q, s) {
        var c = this.transceivers.length > 0,
          V = {
            track: null,
            iceGatherer: null,
            iceTransport: null,
            dtlsTransport: null,
            localCapabilities: null,
            remoteCapabilities: null,
            rtpSender: null,
            rtpReceiver: null,
            kind: q,
            mid: null,
            sendEncodingParameters: null,
            recvEncodingParameters: null,
            stream: null,
            associatedRemoteMediaStreams: [],
            wantReceive: !0
          }
        if (this.usingBundle && c)
          (V.iceTransport = this.transceivers[0].iceTransport),
            (V.dtlsTransport = this.transceivers[0].dtlsTransport)
        else {
          var A = this._createIceAndDtlsTransports()
          ;(V.iceTransport = A.iceTransport), (V.dtlsTransport = A.dtlsTransport)
        }
        return s || this.transceivers.push(V), V
      }),
      (i.prototype.addTrack = function (q, s) {
        if (this._isClosed)
          throw tt('InvalidStateError', 'Attempted to call addTrack on a closed peerconnection.')
        var c = this.transceivers.find(function (C) {
          return C.track === q
        })
        if (c) throw tt('InvalidAccessError', 'Track already exists.')
        for (var V, A = 0; A < this.transceivers.length; A++)
          !this.transceivers[A].track &&
            this.transceivers[A].kind === q.kind &&
            (V = this.transceivers[A])
        return (
          V || (V = this._createTransceiver(q.kind)),
          this._maybeFireNegotiationNeeded(),
          this.localStreams.indexOf(s) === -1 && this.localStreams.push(s),
          (V.track = q),
          (V.stream = s),
          (V.rtpSender = new e.RTCRtpSender(q, V.dtlsTransport)),
          V.rtpSender
        )
      }),
      (i.prototype.addStream = function (q) {
        var s = this
        if (t >= 15025)
          q.getTracks().forEach(function (V) {
            s.addTrack(V, q)
          })
        else {
          var c = q.clone()
          q.getTracks().forEach(function (V, A) {
            var C = c.getTracks()[A]
            V.addEventListener('enabled', function (y) {
              C.enabled = y.enabled
            })
          }),
            c.getTracks().forEach(function (V) {
              s.addTrack(V, c)
            })
        }
      }),
      (i.prototype.removeTrack = function (q) {
        if (this._isClosed)
          throw tt('InvalidStateError', 'Attempted to call removeTrack on a closed peerconnection.')
        if (!(q instanceof e.RTCRtpSender))
          throw new TypeError(
            'Argument 1 of RTCPeerConnection.removeTrack does not implement interface RTCRtpSender.'
          )
        var s = this.transceivers.find(function (A) {
          return A.rtpSender === q
        })
        if (!s) throw tt('InvalidAccessError', 'Sender was not created by this connection.')
        var c = s.stream
        s.rtpSender.stop(), (s.rtpSender = null), (s.track = null), (s.stream = null)
        var V = this.transceivers.map(function (A) {
          return A.stream
        })
        V.indexOf(c) === -1 &&
          this.localStreams.indexOf(c) > -1 &&
          this.localStreams.splice(this.localStreams.indexOf(c), 1),
          this._maybeFireNegotiationNeeded()
      }),
      (i.prototype.removeStream = function (q) {
        var s = this
        q.getTracks().forEach(function (c) {
          var V = s.getSenders().find(function (A) {
            return A.track === c
          })
          V && s.removeTrack(V)
        })
      }),
      (i.prototype.getSenders = function () {
        return this.transceivers
          .filter(function (q) {
            return !!q.rtpSender
          })
          .map(function (q) {
            return q.rtpSender
          })
      }),
      (i.prototype.getReceivers = function () {
        return this.transceivers
          .filter(function (q) {
            return !!q.rtpReceiver
          })
          .map(function (q) {
            return q.rtpReceiver
          })
      }),
      (i.prototype._createIceGatherer = function (q, s) {
        var c = this
        if (s && q > 0) return this.transceivers[0].iceGatherer
        if (this._iceGatherers.length) return this._iceGatherers.shift()
        var V = new e.RTCIceGatherer({
          iceServers: this._config.iceServers,
          gatherPolicy: this._config.iceTransportPolicy
        })
        return (
          Object.defineProperty(V, 'state', { value: 'new', writable: !0 }),
          (this.transceivers[q].bufferedCandidateEvents = []),
          (this.transceivers[q].bufferCandidates = function (A) {
            var C = !A.candidate || Object.keys(A.candidate).length === 0
            ;(V.state = C ? 'completed' : 'gathering'),
              c.transceivers[q].bufferedCandidateEvents !== null &&
                c.transceivers[q].bufferedCandidateEvents.push(A)
          }),
          V.addEventListener('localcandidate', this.transceivers[q].bufferCandidates),
          V
        )
      }),
      (i.prototype._gather = function (q, s) {
        var c = this,
          V = this.transceivers[s].iceGatherer
        if (!V.onlocalcandidate) {
          var A = this.transceivers[s].bufferedCandidateEvents
          ;(this.transceivers[s].bufferedCandidateEvents = null),
            V.removeEventListener('localcandidate', this.transceivers[s].bufferCandidates),
            (V.onlocalcandidate = function (C) {
              if (!(c.usingBundle && s > 0)) {
                var y = new Event('icecandidate')
                y.candidate = { sdpMid: q, sdpMLineIndex: s }
                var w = C.candidate,
                  J = !w || Object.keys(w).length === 0
                if (J) (V.state === 'new' || V.state === 'gathering') && (V.state = 'completed')
                else {
                  V.state === 'new' && (V.state = 'gathering'),
                    (w.component = 1),
                    (w.ufrag = V.getLocalParameters().usernameFragment)
                  var O = ue.writeCandidate(w)
                  ;(y.candidate = Object.assign(y.candidate, ue.parseCandidate(O))),
                    (y.candidate.candidate = O),
                    (y.candidate.toJSON = function () {
                      return {
                        candidate: y.candidate.candidate,
                        sdpMid: y.candidate.sdpMid,
                        sdpMLineIndex: y.candidate.sdpMLineIndex,
                        usernameFragment: y.candidate.usernameFragment
                      }
                    })
                }
                var G = ue.getMediaSections(c._localDescription.sdp)
                J
                  ? (G[y.candidate.sdpMLineIndex] += `a=end-of-candidates\r
`)
                  : (G[y.candidate.sdpMLineIndex] +=
                      'a=' +
                      y.candidate.candidate +
                      `\r
`),
                  (c._localDescription.sdp =
                    ue.getDescription(c._localDescription.sdp) + G.join(''))
                var Y = c.transceivers.every(function (L) {
                  return L.iceGatherer && L.iceGatherer.state === 'completed'
                })
                c.iceGatheringState !== 'gathering' &&
                  ((c.iceGatheringState = 'gathering'), c._emitGatheringStateChange()),
                  J || c._dispatchEvent('icecandidate', y),
                  Y &&
                    (c._dispatchEvent('icecandidate', new Event('icecandidate')),
                    (c.iceGatheringState = 'complete'),
                    c._emitGatheringStateChange())
              }
            }),
            e.setTimeout(function () {
              A.forEach(function (C) {
                V.onlocalcandidate(C)
              })
            }, 0)
        }
      }),
      (i.prototype._createIceAndDtlsTransports = function () {
        var q = this,
          s = new e.RTCIceTransport(null)
        s.onicestatechange = function () {
          q._updateIceConnectionState(), q._updateConnectionState()
        }
        var c = new e.RTCDtlsTransport(s)
        return (
          (c.ondtlsstatechange = function () {
            q._updateConnectionState()
          }),
          (c.onerror = function () {
            Object.defineProperty(c, 'state', { value: 'failed', writable: !0 }),
              q._updateConnectionState()
          }),
          { iceTransport: s, dtlsTransport: c }
        )
      }),
      (i.prototype._disposeIceAndDtlsTransports = function (q) {
        var s = this.transceivers[q].iceGatherer
        s && (delete s.onlocalcandidate, delete this.transceivers[q].iceGatherer)
        var c = this.transceivers[q].iceTransport
        c && (delete c.onicestatechange, delete this.transceivers[q].iceTransport)
        var V = this.transceivers[q].dtlsTransport
        V &&
          (delete V.ondtlsstatechange, delete V.onerror, delete this.transceivers[q].dtlsTransport)
      }),
      (i.prototype._transceive = function (q, s, c) {
        var V = io(q.localCapabilities, q.remoteCapabilities)
        s &&
          q.rtpSender &&
          ((V.encodings = q.sendEncodingParameters),
          (V.rtcp = { cname: ue.localCName, compound: q.rtcpParameters.compound }),
          q.recvEncodingParameters.length && (V.rtcp.ssrc = q.recvEncodingParameters[0].ssrc),
          q.rtpSender.send(V)),
          c &&
            q.rtpReceiver &&
            V.codecs.length > 0 &&
            (q.kind === 'video' &&
              q.recvEncodingParameters &&
              t < 15019 &&
              q.recvEncodingParameters.forEach(function (A) {
                delete A.rtx
              }),
            q.recvEncodingParameters.length
              ? (V.encodings = q.recvEncodingParameters)
              : (V.encodings = [{}]),
            (V.rtcp = { compound: q.rtcpParameters.compound }),
            q.rtcpParameters.cname && (V.rtcp.cname = q.rtcpParameters.cname),
            q.sendEncodingParameters.length && (V.rtcp.ssrc = q.sendEncodingParameters[0].ssrc),
            q.rtpReceiver.receive(V))
      }),
      (i.prototype.setLocalDescription = function (q) {
        var s = this
        if (['offer', 'answer'].indexOf(q.type) === -1)
          return Promise.reject(tt('TypeError', 'Unsupported type "' + q.type + '"'))
        if (!ql('setLocalDescription', q.type, s.signalingState) || s._isClosed)
          return Promise.reject(
            tt('InvalidStateError', 'Can not set local ' + q.type + ' in state ' + s.signalingState)
          )
        var c, V
        if (q.type === 'offer')
          (c = ue.splitSections(q.sdp)),
            (V = c.shift()),
            c.forEach(function (C, y) {
              var w = ue.parseRtpParameters(C)
              s.transceivers[y].localCapabilities = w
            }),
            s.transceivers.forEach(function (C, y) {
              s._gather(C.mid, y)
            })
        else if (q.type === 'answer') {
          ;(c = ue.splitSections(s._remoteDescription.sdp)), (V = c.shift())
          var A = ue.matchPrefix(V, 'a=ice-lite').length > 0
          c.forEach(function (C, y) {
            var w = s.transceivers[y],
              J = w.iceGatherer,
              O = w.iceTransport,
              G = w.dtlsTransport,
              Y = w.localCapabilities,
              L = w.remoteCapabilities,
              D = ue.isRejected(C) && ue.matchPrefix(C, 'a=bundle-only').length === 0
            if (!D && !w.rejected) {
              var qe = ue.getIceParameters(C, V),
                Ve = ue.getDtlsParameters(C, V)
              A && (Ve.role = 'server'),
                (!s.usingBundle || y === 0) &&
                  (s._gather(w.mid, y),
                  O.state === 'new' && O.start(J, qe, A ? 'controlling' : 'controlled'),
                  G.state === 'new' && G.start(Ve))
              var $ = io(Y, L)
              s._transceive(w, $.codecs.length > 0, !1)
            }
          })
        }
        return (
          (s._localDescription = { type: q.type, sdp: q.sdp }),
          q.type === 'offer'
            ? s._updateSignalingState('have-local-offer')
            : s._updateSignalingState('stable'),
          Promise.resolve()
        )
      }),
      (i.prototype.setRemoteDescription = function (q) {
        var s = this
        if (['offer', 'answer'].indexOf(q.type) === -1)
          return Promise.reject(tt('TypeError', 'Unsupported type "' + q.type + '"'))
        if (!ql('setRemoteDescription', q.type, s.signalingState) || s._isClosed)
          return Promise.reject(
            tt(
              'InvalidStateError',
              'Can not set remote ' + q.type + ' in state ' + s.signalingState
            )
          )
        var c = {}
        s.remoteStreams.forEach(function (O) {
          c[O.id] = O
        })
        var V = [],
          A = ue.splitSections(q.sdp),
          C = A.shift(),
          y = ue.matchPrefix(C, 'a=ice-lite').length > 0,
          w = ue.matchPrefix(C, 'a=group:BUNDLE ').length > 0
        s.usingBundle = w
        var J = ue.matchPrefix(C, 'a=ice-options:')[0]
        return (
          J
            ? (s.canTrickleIceCandidates = J.substr(14).split(' ').indexOf('trickle') >= 0)
            : (s.canTrickleIceCandidates = !1),
          A.forEach(function (O, G) {
            var Y = ue.splitLines(O),
              L = ue.getKind(O),
              D = ue.isRejected(O) && ue.matchPrefix(O, 'a=bundle-only').length === 0,
              qe = Y[0].substr(2).split(' ')[2],
              Ve = ue.getDirection(O, C),
              $ = ue.parseMsid(O),
              de = ue.getMid(O) || ue.generateIdentifier()
            if (D || (L === 'application' && (qe === 'DTLS/SCTP' || qe === 'UDP/DTLS/SCTP'))) {
              s.transceivers[G] = { mid: de, kind: L, protocol: qe, rejected: !0 }
              return
            }
            !D &&
              s.transceivers[G] &&
              s.transceivers[G].rejected &&
              (s.transceivers[G] = s._createTransceiver(L, !0))
            var Q,
              le,
              z,
              Me,
              he,
              we,
              De,
              fe,
              ce,
              $e = ue.parseRtpParameters(O),
              Nt,
              lt
            D ||
              ((Nt = ue.getIceParameters(O, C)),
              (lt = ue.getDtlsParameters(O, C)),
              (lt.role = 'client')),
              (De = ue.parseRtpEncodingParameters(O))
            var Ue = ue.parseRtcpParameters(O),
              nt = ue.matchPrefix(O, 'a=end-of-candidates', C).length > 0,
              qt = ue
                .matchPrefix(O, 'a=candidate:')
                .map(function (Fe) {
                  return ue.parseCandidate(Fe)
                })
                .filter(function (Fe) {
                  return Fe.component === 1
                })
            if (
              ((q.type === 'offer' || q.type === 'answer') &&
                !D &&
                w &&
                G > 0 &&
                s.transceivers[G] &&
                (s._disposeIceAndDtlsTransports(G),
                (s.transceivers[G].iceGatherer = s.transceivers[0].iceGatherer),
                (s.transceivers[G].iceTransport = s.transceivers[0].iceTransport),
                (s.transceivers[G].dtlsTransport = s.transceivers[0].dtlsTransport),
                s.transceivers[G].rtpSender &&
                  s.transceivers[G].rtpSender.setTransport(s.transceivers[0].dtlsTransport),
                s.transceivers[G].rtpReceiver &&
                  s.transceivers[G].rtpReceiver.setTransport(s.transceivers[0].dtlsTransport)),
              q.type === 'offer' && !D)
            ) {
              ;(Q = s.transceivers[G] || s._createTransceiver(L)),
                (Q.mid = de),
                Q.iceGatherer || (Q.iceGatherer = s._createIceGatherer(G, w)),
                qt.length &&
                  Q.iceTransport.state === 'new' &&
                  (nt && (!w || G === 0)
                    ? Q.iceTransport.setRemoteCandidates(qt)
                    : qt.forEach(function (Fe) {
                        Si(Q.iceTransport, Fe)
                      })),
                (fe = e.RTCRtpReceiver.getCapabilities(L)),
                t < 15019 &&
                  (fe.codecs = fe.codecs.filter(function (Fe) {
                    return Fe.name !== 'rtx'
                  })),
                (we = Q.sendEncodingParameters || [{ ssrc: (2 * G + 2) * 1001 }])
              var Er = !1
              if (Ve === 'sendrecv' || Ve === 'sendonly') {
                if (
                  ((Er = !Q.rtpReceiver),
                  (he = Q.rtpReceiver || new e.RTCRtpReceiver(Q.dtlsTransport, L)),
                  Er)
                ) {
                  var Dt
                  ;(ce = he.track),
                    ($ && $.stream === '-') ||
                      ($
                        ? (c[$.stream] ||
                            ((c[$.stream] = new e.MediaStream()),
                            Object.defineProperty(c[$.stream], 'id', {
                              get: function () {
                                return $.stream
                              }
                            })),
                          Object.defineProperty(ce, 'id', {
                            get: function () {
                              return $.track
                            }
                          }),
                          (Dt = c[$.stream]))
                        : (c.default || (c.default = new e.MediaStream()), (Dt = c.default))),
                    Dt && (r(ce, Dt), Q.associatedRemoteMediaStreams.push(Dt)),
                    V.push([ce, he, Dt])
                }
              } else
                Q.rtpReceiver &&
                  Q.rtpReceiver.track &&
                  (Q.associatedRemoteMediaStreams.forEach(function (Fe) {
                    var je = Fe.getTracks().find(function (nr) {
                      return nr.id === Q.rtpReceiver.track.id
                    })
                    je && n(je, Fe)
                  }),
                  (Q.associatedRemoteMediaStreams = []))
              ;(Q.localCapabilities = fe),
                (Q.remoteCapabilities = $e),
                (Q.rtpReceiver = he),
                (Q.rtcpParameters = Ue),
                (Q.sendEncodingParameters = we),
                (Q.recvEncodingParameters = De),
                s._transceive(s.transceivers[G], !1, Er)
            } else if (q.type === 'answer' && !D) {
              ;(Q = s.transceivers[G]),
                (le = Q.iceGatherer),
                (z = Q.iceTransport),
                (Me = Q.dtlsTransport),
                (he = Q.rtpReceiver),
                (we = Q.sendEncodingParameters),
                (fe = Q.localCapabilities),
                (s.transceivers[G].recvEncodingParameters = De),
                (s.transceivers[G].remoteCapabilities = $e),
                (s.transceivers[G].rtcpParameters = Ue),
                qt.length &&
                  z.state === 'new' &&
                  ((y || nt) && (!w || G === 0)
                    ? z.setRemoteCandidates(qt)
                    : qt.forEach(function (Fe) {
                        Si(Q.iceTransport, Fe)
                      })),
                (!w || G === 0) &&
                  (z.state === 'new' && z.start(le, Nt, 'controlling'),
                  Me.state === 'new' && Me.start(lt))
              var ct = io(Q.localCapabilities, Q.remoteCapabilities),
                ut = ct.codecs.filter(function (Fe) {
                  return Fe.name.toLowerCase() === 'rtx'
                }).length
              !ut && Q.sendEncodingParameters[0].rtx && delete Q.sendEncodingParameters[0].rtx,
                s._transceive(
                  Q,
                  Ve === 'sendrecv' || Ve === 'recvonly',
                  Ve === 'sendrecv' || Ve === 'sendonly'
                ),
                he && (Ve === 'sendrecv' || Ve === 'sendonly')
                  ? ((ce = he.track),
                    $
                      ? (c[$.stream] || (c[$.stream] = new e.MediaStream()),
                        r(ce, c[$.stream]),
                        V.push([ce, he, c[$.stream]]))
                      : (c.default || (c.default = new e.MediaStream()),
                        r(ce, c.default),
                        V.push([ce, he, c.default])))
                  : delete Q.rtpReceiver
            }
          }),
          s._dtlsRole === void 0 && (s._dtlsRole = q.type === 'offer' ? 'active' : 'passive'),
          (s._remoteDescription = { type: q.type, sdp: q.sdp }),
          q.type === 'offer'
            ? s._updateSignalingState('have-remote-offer')
            : s._updateSignalingState('stable'),
          Object.keys(c).forEach(function (O) {
            var G = c[O]
            if (G.getTracks().length) {
              if (s.remoteStreams.indexOf(G) === -1) {
                s.remoteStreams.push(G)
                var Y = new Event('addstream')
                ;(Y.stream = G),
                  e.setTimeout(function () {
                    s._dispatchEvent('addstream', Y)
                  })
              }
              V.forEach(function (L) {
                var D = L[0],
                  qe = L[1]
                G.id === L[2].id && o(s, D, qe, [G])
              })
            }
          }),
          V.forEach(function (O) {
            O[2] || o(s, O[0], O[1], [])
          }),
          e.setTimeout(function () {
            s &&
              s.transceivers &&
              s.transceivers.forEach(function (O) {
                O.iceTransport &&
                  O.iceTransport.state === 'new' &&
                  O.iceTransport.getRemoteCandidates().length > 0 &&
                  (console.warn(
                    'Timeout for addRemoteCandidate. Consider sending an end-of-candidates notification'
                  ),
                  O.iceTransport.addRemoteCandidate({}))
              })
          }, 4e3),
          Promise.resolve()
        )
      }),
      (i.prototype.close = function () {
        this.transceivers.forEach(function (q) {
          q.iceTransport && q.iceTransport.stop(),
            q.dtlsTransport && q.dtlsTransport.stop(),
            q.rtpSender && q.rtpSender.stop(),
            q.rtpReceiver && q.rtpReceiver.stop()
        }),
          (this._isClosed = !0),
          this._updateSignalingState('closed')
      }),
      (i.prototype._updateSignalingState = function (q) {
        this.signalingState = q
        var s = new Event('signalingstatechange')
        this._dispatchEvent('signalingstatechange', s)
      }),
      (i.prototype._maybeFireNegotiationNeeded = function () {
        var q = this
        this.signalingState !== 'stable' ||
          this.needNegotiation === !0 ||
          ((this.needNegotiation = !0),
          e.setTimeout(function () {
            if (q.needNegotiation) {
              q.needNegotiation = !1
              var s = new Event('negotiationneeded')
              q._dispatchEvent('negotiationneeded', s)
            }
          }, 0))
      }),
      (i.prototype._updateIceConnectionState = function () {
        var q,
          s = {
            new: 0,
            closed: 0,
            checking: 0,
            connected: 0,
            completed: 0,
            disconnected: 0,
            failed: 0
          }
        if (
          (this.transceivers.forEach(function (V) {
            V.iceTransport && !V.rejected && s[V.iceTransport.state]++
          }),
          (q = 'new'),
          s.failed > 0
            ? (q = 'failed')
            : s.checking > 0
            ? (q = 'checking')
            : s.disconnected > 0
            ? (q = 'disconnected')
            : s.new > 0
            ? (q = 'new')
            : s.connected > 0
            ? (q = 'connected')
            : s.completed > 0 && (q = 'completed'),
          q !== this.iceConnectionState)
        ) {
          this.iceConnectionState = q
          var c = new Event('iceconnectionstatechange')
          this._dispatchEvent('iceconnectionstatechange', c)
        }
      }),
      (i.prototype._updateConnectionState = function () {
        var q,
          s = {
            new: 0,
            closed: 0,
            connecting: 0,
            connected: 0,
            completed: 0,
            disconnected: 0,
            failed: 0
          }
        if (
          (this.transceivers.forEach(function (V) {
            V.iceTransport &&
              V.dtlsTransport &&
              !V.rejected &&
              (s[V.iceTransport.state]++, s[V.dtlsTransport.state]++)
          }),
          (s.connected += s.completed),
          (q = 'new'),
          s.failed > 0
            ? (q = 'failed')
            : s.connecting > 0
            ? (q = 'connecting')
            : s.disconnected > 0
            ? (q = 'disconnected')
            : s.new > 0
            ? (q = 'new')
            : s.connected > 0 && (q = 'connected'),
          q !== this.connectionState)
        ) {
          this.connectionState = q
          var c = new Event('connectionstatechange')
          this._dispatchEvent('connectionstatechange', c)
        }
      }),
      (i.prototype.createOffer = function () {
        var q = this
        if (q._isClosed)
          return Promise.reject(tt('InvalidStateError', 'Can not call createOffer after close'))
        var s = q.transceivers.filter(function (y) {
            return y.kind === 'audio'
          }).length,
          c = q.transceivers.filter(function (y) {
            return y.kind === 'video'
          }).length,
          V = arguments[0]
        if (V) {
          if (V.mandatory || V.optional)
            throw new TypeError('Legacy mandatory/optional constraints not supported.')
          V.offerToReceiveAudio !== void 0 &&
            (V.offerToReceiveAudio === !0
              ? (s = 1)
              : V.offerToReceiveAudio === !1
              ? (s = 0)
              : (s = V.offerToReceiveAudio)),
            V.offerToReceiveVideo !== void 0 &&
              (V.offerToReceiveVideo === !0
                ? (c = 1)
                : V.offerToReceiveVideo === !1
                ? (c = 0)
                : (c = V.offerToReceiveVideo))
        }
        for (
          q.transceivers.forEach(function (y) {
            y.kind === 'audio'
              ? (s--, s < 0 && (y.wantReceive = !1))
              : y.kind === 'video' && (c--, c < 0 && (y.wantReceive = !1))
          });
          s > 0 || c > 0;

        )
          s > 0 && (q._createTransceiver('audio'), s--),
            c > 0 && (q._createTransceiver('video'), c--)
        var A = ue.writeSessionBoilerplate(q._sdpSessionId, q._sdpSessionVersion++)
        q.transceivers.forEach(function (y, w) {
          var J = y.track,
            O = y.kind,
            G = y.mid || ue.generateIdentifier()
          ;(y.mid = G), y.iceGatherer || (y.iceGatherer = q._createIceGatherer(w, q.usingBundle))
          var Y = e.RTCRtpSender.getCapabilities(O)
          t < 15019 &&
            (Y.codecs = Y.codecs.filter(function (D) {
              return D.name !== 'rtx'
            })),
            Y.codecs.forEach(function (D) {
              D.name === 'H264' &&
                D.parameters['level-asymmetry-allowed'] === void 0 &&
                (D.parameters['level-asymmetry-allowed'] = '1'),
                y.remoteCapabilities &&
                  y.remoteCapabilities.codecs &&
                  y.remoteCapabilities.codecs.forEach(function (qe) {
                    D.name.toLowerCase() === qe.name.toLowerCase() &&
                      D.clockRate === qe.clockRate &&
                      (D.preferredPayloadType = qe.payloadType)
                  })
            }),
            Y.headerExtensions.forEach(function (D) {
              var qe = (y.remoteCapabilities && y.remoteCapabilities.headerExtensions) || []
              qe.forEach(function (Ve) {
                D.uri === Ve.uri && (D.id = Ve.id)
              })
            })
          var L = y.sendEncodingParameters || [{ ssrc: (2 * w + 1) * 1001 }]
          J && t >= 15019 && O === 'video' && !L[0].rtx && (L[0].rtx = { ssrc: L[0].ssrc + 1 }),
            y.wantReceive && (y.rtpReceiver = new e.RTCRtpReceiver(y.dtlsTransport, O)),
            (y.localCapabilities = Y),
            (y.sendEncodingParameters = L)
        }),
          q._config.bundlePolicy !== 'max-compat' &&
            (A +=
              'a=group:BUNDLE ' +
              q.transceivers
                .map(function (y) {
                  return y.mid
                })
                .join(' ') +
              `\r
`),
          (A += `a=ice-options:trickle\r
`),
          q.transceivers.forEach(function (y, w) {
            ;(A += ll(y, y.localCapabilities, 'offer', y.stream, q._dtlsRole)),
              (A += `a=rtcp-rsize\r
`),
              y.iceGatherer &&
                q.iceGatheringState !== 'new' &&
                (w === 0 || !q.usingBundle) &&
                (y.iceGatherer.getLocalCandidates().forEach(function (J) {
                  ;(J.component = 1),
                    (A +=
                      'a=' +
                      ue.writeCandidate(J) +
                      `\r
`)
                }),
                y.iceGatherer.state === 'completed' &&
                  (A += `a=end-of-candidates\r
`))
          })
        var C = new e.RTCSessionDescription({ type: 'offer', sdp: A })
        return Promise.resolve(C)
      }),
      (i.prototype.createAnswer = function () {
        var q = this
        if (q._isClosed)
          return Promise.reject(tt('InvalidStateError', 'Can not call createAnswer after close'))
        if (
          !(q.signalingState === 'have-remote-offer' || q.signalingState === 'have-local-pranswer')
        )
          return Promise.reject(
            tt(
              'InvalidStateError',
              'Can not call createAnswer in signalingState ' + q.signalingState
            )
          )
        var s = ue.writeSessionBoilerplate(q._sdpSessionId, q._sdpSessionVersion++)
        q.usingBundle &&
          (s +=
            'a=group:BUNDLE ' +
            q.transceivers
              .map(function (A) {
                return A.mid
              })
              .join(' ') +
            `\r
`),
          (s += `a=ice-options:trickle\r
`)
        var c = ue.getMediaSections(q._remoteDescription.sdp).length
        q.transceivers.forEach(function (A, C) {
          if (!(C + 1 > c)) {
            if (A.rejected) {
              A.kind === 'application'
                ? A.protocol === 'DTLS/SCTP'
                  ? (s += `m=application 0 DTLS/SCTP 5000\r
`)
                  : (s +=
                      'm=application 0 ' +
                      A.protocol +
                      ` webrtc-datachannel\r
`)
                : A.kind === 'audio'
                ? (s += `m=audio 0 UDP/TLS/RTP/SAVPF 0\r
a=rtpmap:0 PCMU/8000\r
`)
                : A.kind === 'video' &&
                  (s += `m=video 0 UDP/TLS/RTP/SAVPF 120\r
a=rtpmap:120 VP8/90000\r
`),
                (s +=
                  `c=IN IP4 0.0.0.0\r
a=inactive\r
a=mid:` +
                  A.mid +
                  `\r
`)
              return
            }
            if (A.stream) {
              var y
              A.kind === 'audio'
                ? (y = A.stream.getAudioTracks()[0])
                : A.kind === 'video' && (y = A.stream.getVideoTracks()[0]),
                y &&
                  t >= 15019 &&
                  A.kind === 'video' &&
                  !A.sendEncodingParameters[0].rtx &&
                  (A.sendEncodingParameters[0].rtx = { ssrc: A.sendEncodingParameters[0].ssrc + 1 })
            }
            var w = io(A.localCapabilities, A.remoteCapabilities),
              J = w.codecs.filter(function (O) {
                return O.name.toLowerCase() === 'rtx'
              }).length
            !J && A.sendEncodingParameters[0].rtx && delete A.sendEncodingParameters[0].rtx,
              (s += ll(A, w, 'answer', A.stream, q._dtlsRole)),
              A.rtcpParameters &&
                A.rtcpParameters.reducedSize &&
                (s += `a=rtcp-rsize\r
`)
          }
        })
        var V = new e.RTCSessionDescription({ type: 'answer', sdp: s })
        return Promise.resolve(V)
      }),
      (i.prototype.addIceCandidate = function (q) {
        var s = this,
          c
        return q && !(q.sdpMLineIndex !== void 0 || q.sdpMid)
          ? Promise.reject(new TypeError('sdpMLineIndex or sdpMid required'))
          : new Promise(function (V, A) {
              if (s._remoteDescription)
                if (!q || q.candidate === '')
                  for (
                    var C = 0;
                    C < s.transceivers.length &&
                    !(
                      !s.transceivers[C].rejected &&
                      (s.transceivers[C].iceTransport.addRemoteCandidate({}),
                      (c = ue.getMediaSections(s._remoteDescription.sdp)),
                      (c[C] += `a=end-of-candidates\r
`),
                      (s._remoteDescription.sdp =
                        ue.getDescription(s._remoteDescription.sdp) + c.join('')),
                      s.usingBundle)
                    );
                    C++
                  );
                else {
                  var y = q.sdpMLineIndex
                  if (q.sdpMid) {
                    for (var w = 0; w < s.transceivers.length; w++)
                      if (s.transceivers[w].mid === q.sdpMid) {
                        y = w
                        break
                      }
                  }
                  var J = s.transceivers[y]
                  if (J) {
                    if (J.rejected) return V()
                    var O =
                      Object.keys(q.candidate).length > 0 ? ue.parseCandidate(q.candidate) : {}
                    if (
                      (O.protocol === 'tcp' && (O.port === 0 || O.port === 9)) ||
                      (O.component && O.component !== 1)
                    )
                      return V()
                    if (
                      (y === 0 || (y > 0 && J.iceTransport !== s.transceivers[0].iceTransport)) &&
                      !Si(J.iceTransport, O)
                    )
                      return A(tt('OperationError', 'Can not add ICE candidate'))
                    var G = q.candidate.trim()
                    G.indexOf('a=') === 0 && (G = G.substr(2)),
                      (c = ue.getMediaSections(s._remoteDescription.sdp)),
                      (c[y] +=
                        'a=' +
                        (O.type ? G : 'end-of-candidates') +
                        `\r
`),
                      (s._remoteDescription.sdp =
                        ue.getDescription(s._remoteDescription.sdp) + c.join(''))
                  } else return A(tt('OperationError', 'Can not add ICE candidate'))
                }
              else
                return A(
                  tt('InvalidStateError', 'Can not add ICE candidate without a remote description')
                )
              V()
            })
      }),
      (i.prototype.getStats = function (q) {
        if (q && q instanceof e.MediaStreamTrack) {
          var s = null
          if (
            (this.transceivers.forEach(function (V) {
              V.rtpSender && V.rtpSender.track === q
                ? (s = V.rtpSender)
                : V.rtpReceiver && V.rtpReceiver.track === q && (s = V.rtpReceiver)
            }),
            !s)
          )
            throw tt('InvalidAccessError', 'Invalid selector.')
          return s.getStats()
        }
        var c = []
        return (
          this.transceivers.forEach(function (V) {
            ;['rtpSender', 'rtpReceiver', 'iceGatherer', 'iceTransport', 'dtlsTransport'].forEach(
              function (A) {
                V[A] && c.push(V[A].getStats())
              }
            )
          }),
          Promise.all(c).then(function (V) {
            var A = new Map()
            return (
              V.forEach(function (C) {
                C.forEach(function (y) {
                  A.set(y.id, y)
                })
              }),
              A
            )
          })
        )
      })
    var a = [
      'RTCRtpSender',
      'RTCRtpReceiver',
      'RTCIceGatherer',
      'RTCIceTransport',
      'RTCDtlsTransport'
    ]
    a.forEach(function (q) {
      var s = e[q]
      if (s && s.prototype && s.prototype.getStats) {
        var c = s.prototype.getStats
        s.prototype.getStats = function () {
          return c.apply(this).then(function (V) {
            var A = new Map()
            return (
              Object.keys(V).forEach(function (C) {
                ;(V[C].type = fh(V[C])), A.set(C, V[C])
              }),
              A
            )
          })
        }
      }
    })
    var l = ['createOffer', 'createAnswer']
    return (
      l.forEach(function (q) {
        var s = i.prototype[q]
        i.prototype[q] = function () {
          var c = arguments
          return typeof c[0] == 'function' || typeof c[1] == 'function'
            ? s.apply(this, [arguments[2]]).then(
                function (V) {
                  typeof c[0] == 'function' && c[0].apply(null, [V])
                },
                function (V) {
                  typeof c[1] == 'function' && c[1].apply(null, [V])
                }
              )
            : s.apply(this, arguments)
        }
      }),
      (l = ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate']),
      l.forEach(function (q) {
        var s = i.prototype[q]
        i.prototype[q] = function () {
          var c = arguments
          return typeof c[1] == 'function' || typeof c[2] == 'function'
            ? s.apply(this, arguments).then(
                function () {
                  typeof c[1] == 'function' && c[1].apply(null)
                },
                function (V) {
                  typeof c[2] == 'function' && c[2].apply(null, [V])
                }
              )
            : s.apply(this, arguments)
        }
      }),
      ['getStats'].forEach(function (q) {
        var s = i.prototype[q]
        i.prototype[q] = function () {
          var c = arguments
          return typeof c[1] == 'function'
            ? s.apply(this, arguments).then(function () {
                typeof c[1] == 'function' && c[1].apply(null)
              })
            : s.apply(this, arguments)
        }
      }),
      i
    )
  }
  const gh = il(ph)
  function cl(e) {
    const t = e && e.navigator,
      r = function (o) {
        return {
          name: { PermissionDeniedError: 'NotAllowedError' }[o.name] || o.name,
          message: o.message,
          constraint: o.constraint,
          toString() {
            return this.name
          }
        }
      },
      n = t.mediaDevices.getUserMedia.bind(t.mediaDevices)
    t.mediaDevices.getUserMedia = function (o) {
      return n(o).catch((i) => Promise.reject(r(i)))
    }
  }
  function ul(e) {
    'getDisplayMedia' in e.navigator &&
      e.navigator.mediaDevices &&
      ((e.navigator.mediaDevices && 'getDisplayMedia' in e.navigator.mediaDevices) ||
        (e.navigator.mediaDevices.getDisplayMedia = e.navigator.getDisplayMedia.bind(e.navigator)))
  }
  function Ei(e, t) {
    if (
      e.RTCIceGatherer &&
      (e.RTCIceCandidate ||
        (e.RTCIceCandidate = function (o) {
          return o
        }),
      e.RTCSessionDescription ||
        (e.RTCSessionDescription = function (o) {
          return o
        }),
      t.version < 15025)
    ) {
      const n = Object.getOwnPropertyDescriptor(e.MediaStreamTrack.prototype, 'enabled')
      Object.defineProperty(e.MediaStreamTrack.prototype, 'enabled', {
        set(o) {
          n.set.call(this, o)
          const i = new Event('enabled')
          ;(i.enabled = o), this.dispatchEvent(i)
        }
      })
    }
    e.RTCRtpSender &&
      !('dtmf' in e.RTCRtpSender.prototype) &&
      Object.defineProperty(e.RTCRtpSender.prototype, 'dtmf', {
        get() {
          return (
            this._dtmf === void 0 &&
              (this.track.kind === 'audio'
                ? (this._dtmf = new e.RTCDtmfSender(this))
                : this.track.kind === 'video' && (this._dtmf = null)),
            this._dtmf
          )
        }
      }),
      e.RTCDtmfSender && !e.RTCDTMFSender && (e.RTCDTMFSender = e.RTCDtmfSender)
    const r = gh(e, t.version)
    ;(e.RTCPeerConnection = function (o) {
      return (
        o &&
          o.iceServers &&
          ((o.iceServers = dh(o.iceServers, t.version)),
          Ci('ICE servers after filtering:', o.iceServers)),
        new r(o)
      )
    }),
      (e.RTCPeerConnection.prototype = r.prototype)
  }
  function Vl(e) {
    e.RTCRtpSender &&
      !('replaceTrack' in e.RTCRtpSender.prototype) &&
      (e.RTCRtpSender.prototype.replaceTrack = e.RTCRtpSender.prototype.setTrack)
  }
  const dl = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        shimGetDisplayMedia: ul,
        shimGetUserMedia: cl,
        shimPeerConnection: Ei,
        shimReplaceTrack: Vl
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
  function fl(e, t) {
    const r = e && e.navigator,
      n = e && e.MediaStreamTrack
    if (
      ((r.getUserMedia = function (o, i, a) {
        no('navigator.getUserMedia', 'navigator.mediaDevices.getUserMedia'),
          r.mediaDevices.getUserMedia(o).then(i, a)
      }),
      !(t.version > 55 && 'autoGainControl' in r.mediaDevices.getSupportedConstraints()))
    ) {
      const o = function (a, l, q) {
          l in a && !(q in a) && ((a[q] = a[l]), delete a[l])
        },
        i = r.mediaDevices.getUserMedia.bind(r.mediaDevices)
      if (
        ((r.mediaDevices.getUserMedia = function (a) {
          return (
            typeof a == 'object' &&
              typeof a.audio == 'object' &&
              ((a = JSON.parse(JSON.stringify(a))),
              o(a.audio, 'autoGainControl', 'mozAutoGainControl'),
              o(a.audio, 'noiseSuppression', 'mozNoiseSuppression')),
            i(a)
          )
        }),
        n && n.prototype.getSettings)
      ) {
        const a = n.prototype.getSettings
        n.prototype.getSettings = function () {
          const l = a.apply(this, arguments)
          return (
            o(l, 'mozAutoGainControl', 'autoGainControl'),
            o(l, 'mozNoiseSuppression', 'noiseSuppression'),
            l
          )
        }
      }
      if (n && n.prototype.applyConstraints) {
        const a = n.prototype.applyConstraints
        n.prototype.applyConstraints = function (l) {
          return (
            this.kind === 'audio' &&
              typeof l == 'object' &&
              ((l = JSON.parse(JSON.stringify(l))),
              o(l, 'autoGainControl', 'mozAutoGainControl'),
              o(l, 'noiseSuppression', 'mozNoiseSuppression')),
            a.apply(this, [l])
          )
        }
      }
    }
  }
  function hh(e, t) {
    ;(e.navigator.mediaDevices && 'getDisplayMedia' in e.navigator.mediaDevices) ||
      (e.navigator.mediaDevices &&
        (e.navigator.mediaDevices.getDisplayMedia = function (n) {
          if (!(n && n.video)) {
            const o = new DOMException('getDisplayMedia without video constraints is undefined')
            return (o.name = 'NotFoundError'), (o.code = 8), Promise.reject(o)
          }
          return (
            n.video === !0 ? (n.video = { mediaSource: t }) : (n.video.mediaSource = t),
            e.navigator.mediaDevices.getUserMedia(n)
          )
        }))
  }
  function Al(e) {
    typeof e == 'object' &&
      e.RTCTrackEvent &&
      'receiver' in e.RTCTrackEvent.prototype &&
      !('transceiver' in e.RTCTrackEvent.prototype) &&
      Object.defineProperty(e.RTCTrackEvent.prototype, 'transceiver', {
        get() {
          return { receiver: this.receiver }
        }
      })
  }
  function Ti(e, t) {
    if (typeof e != 'object' || !(e.RTCPeerConnection || e.mozRTCPeerConnection)) return
    !e.RTCPeerConnection &&
      e.mozRTCPeerConnection &&
      (e.RTCPeerConnection = e.mozRTCPeerConnection),
      t.version < 53 &&
        ['setLocalDescription', 'setRemoteDescription', 'addIceCandidate'].forEach(function (o) {
          const i = e.RTCPeerConnection.prototype[o],
            a = {
              [o]() {
                return (
                  (arguments[0] = new (
                    o === 'addIceCandidate' ? e.RTCIceCandidate : e.RTCSessionDescription
                  )(arguments[0])),
                  i.apply(this, arguments)
                )
              }
            }
          e.RTCPeerConnection.prototype[o] = a[o]
        })
    const r = {
        inboundrtp: 'inbound-rtp',
        outboundrtp: 'outbound-rtp',
        candidatepair: 'candidate-pair',
        localcandidate: 'local-candidate',
        remotecandidate: 'remote-candidate'
      },
      n = e.RTCPeerConnection.prototype.getStats
    e.RTCPeerConnection.prototype.getStats = function () {
      const [i, a, l] = arguments
      return n
        .apply(this, [i || null])
        .then((q) => {
          if (t.version < 53 && !a)
            try {
              q.forEach((s) => {
                s.type = r[s.type] || s.type
              })
            } catch (s) {
              if (s.name !== 'TypeError') throw s
              q.forEach((c, V) => {
                q.set(V, Object.assign({}, c, { type: r[c.type] || c.type }))
              })
            }
          return q
        })
        .then(a, l)
    }
  }
  function pl(e) {
    if (
      !(typeof e == 'object' && e.RTCPeerConnection && e.RTCRtpSender) ||
      (e.RTCRtpSender && 'getStats' in e.RTCRtpSender.prototype)
    )
      return
    const t = e.RTCPeerConnection.prototype.getSenders
    t &&
      (e.RTCPeerConnection.prototype.getSenders = function () {
        const o = t.apply(this, [])
        return o.forEach((i) => (i._pc = this)), o
      })
    const r = e.RTCPeerConnection.prototype.addTrack
    r &&
      (e.RTCPeerConnection.prototype.addTrack = function () {
        const o = r.apply(this, arguments)
        return (o._pc = this), o
      }),
      (e.RTCRtpSender.prototype.getStats = function () {
        return this.track ? this._pc.getStats(this.track) : Promise.resolve(new Map())
      })
  }
  function gl(e) {
    if (
      !(typeof e == 'object' && e.RTCPeerConnection && e.RTCRtpSender) ||
      (e.RTCRtpSender && 'getStats' in e.RTCRtpReceiver.prototype)
    )
      return
    const t = e.RTCPeerConnection.prototype.getReceivers
    t &&
      (e.RTCPeerConnection.prototype.getReceivers = function () {
        const n = t.apply(this, [])
        return n.forEach((o) => (o._pc = this)), n
      }),
      Qr(e, 'track', (r) => ((r.receiver._pc = r.srcElement), r)),
      (e.RTCRtpReceiver.prototype.getStats = function () {
        return this._pc.getStats(this.track)
      })
  }
  function hl(e) {
    !e.RTCPeerConnection ||
      'removeStream' in e.RTCPeerConnection.prototype ||
      (e.RTCPeerConnection.prototype.removeStream = function (r) {
        no('removeStream', 'removeTrack'),
          this.getSenders().forEach((n) => {
            n.track && r.getTracks().includes(n.track) && this.removeTrack(n)
          })
      })
  }
  function ml(e) {
    e.DataChannel && !e.RTCDataChannel && (e.RTCDataChannel = e.DataChannel)
  }
  function vl(e) {
    if (!(typeof e == 'object' && e.RTCPeerConnection)) return
    const t = e.RTCPeerConnection.prototype.addTransceiver
    t &&
      (e.RTCPeerConnection.prototype.addTransceiver = function () {
        this.setParametersPromises = []
        const n = arguments[1],
          o = n && 'sendEncodings' in n
        o &&
          n.sendEncodings.forEach((a) => {
            if ('rid' in a && !/^[a-z0-9]{0,16}$/i.test(a.rid))
              throw new TypeError('Invalid RID value provided.')
            if ('scaleResolutionDownBy' in a && !(parseFloat(a.scaleResolutionDownBy) >= 1))
              throw new RangeError('scale_resolution_down_by must be >= 1.0')
            if ('maxFramerate' in a && !(parseFloat(a.maxFramerate) >= 0))
              throw new RangeError('max_framerate must be >= 0.0')
          })
        const i = t.apply(this, arguments)
        if (o) {
          const { sender: a } = i,
            l = a.getParameters()
          ;(!('encodings' in l) ||
            (l.encodings.length === 1 && Object.keys(l.encodings[0]).length === 0)) &&
            ((l.encodings = n.sendEncodings),
            (a.sendEncodings = n.sendEncodings),
            this.setParametersPromises.push(
              a
                .setParameters(l)
                .then(() => {
                  delete a.sendEncodings
                })
                .catch(() => {
                  delete a.sendEncodings
                })
            ))
        }
        return i
      })
  }
  function Cl(e) {
    if (!(typeof e == 'object' && e.RTCRtpSender)) return
    const t = e.RTCRtpSender.prototype.getParameters
    t &&
      (e.RTCRtpSender.prototype.getParameters = function () {
        const n = t.apply(this, arguments)
        return 'encodings' in n || (n.encodings = [].concat(this.sendEncodings || [{}])), n
      })
  }
  function Ml(e) {
    if (!(typeof e == 'object' && e.RTCPeerConnection)) return
    const t = e.RTCPeerConnection.prototype.createOffer
    e.RTCPeerConnection.prototype.createOffer = function () {
      return this.setParametersPromises && this.setParametersPromises.length
        ? Promise.all(this.setParametersPromises)
            .then(() => t.apply(this, arguments))
            .finally(() => {
              this.setParametersPromises = []
            })
        : t.apply(this, arguments)
    }
  }
  function yl(e) {
    if (!(typeof e == 'object' && e.RTCPeerConnection)) return
    const t = e.RTCPeerConnection.prototype.createAnswer
    e.RTCPeerConnection.prototype.createAnswer = function () {
      return this.setParametersPromises && this.setParametersPromises.length
        ? Promise.all(this.setParametersPromises)
            .then(() => t.apply(this, arguments))
            .finally(() => {
              this.setParametersPromises = []
            })
        : t.apply(this, arguments)
    }
  }
  const Sl = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        shimAddTransceiver: vl,
        shimCreateAnswer: yl,
        shimCreateOffer: Ml,
        shimGetDisplayMedia: hh,
        shimGetParameters: Cl,
        shimGetUserMedia: fl,
        shimOnTrack: Al,
        shimPeerConnection: Ti,
        shimRTCDataChannel: ml,
        shimReceiverGetStats: gl,
        shimRemoveStream: hl,
        shimSenderGetStats: pl
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
  function El(e) {
    if (!(typeof e != 'object' || !e.RTCPeerConnection)) {
      if (
        ('getLocalStreams' in e.RTCPeerConnection.prototype ||
          (e.RTCPeerConnection.prototype.getLocalStreams = function () {
            return this._localStreams || (this._localStreams = []), this._localStreams
          }),
        !('addStream' in e.RTCPeerConnection.prototype))
      ) {
        const t = e.RTCPeerConnection.prototype.addTrack
        ;(e.RTCPeerConnection.prototype.addStream = function (n) {
          this._localStreams || (this._localStreams = []),
            this._localStreams.includes(n) || this._localStreams.push(n),
            n.getAudioTracks().forEach((o) => t.call(this, o, n)),
            n.getVideoTracks().forEach((o) => t.call(this, o, n))
        }),
          (e.RTCPeerConnection.prototype.addTrack = function (n, ...o) {
            return (
              o &&
                o.forEach((i) => {
                  this._localStreams
                    ? this._localStreams.includes(i) || this._localStreams.push(i)
                    : (this._localStreams = [i])
                }),
              t.apply(this, arguments)
            )
          })
      }
      'removeStream' in e.RTCPeerConnection.prototype ||
        (e.RTCPeerConnection.prototype.removeStream = function (r) {
          this._localStreams || (this._localStreams = [])
          const n = this._localStreams.indexOf(r)
          if (n === -1) return
          this._localStreams.splice(n, 1)
          const o = r.getTracks()
          this.getSenders().forEach((i) => {
            o.includes(i.track) && this.removeTrack(i)
          })
        })
    }
  }
  function Tl(e) {
    if (
      !(typeof e != 'object' || !e.RTCPeerConnection) &&
      ('getRemoteStreams' in e.RTCPeerConnection.prototype ||
        (e.RTCPeerConnection.prototype.getRemoteStreams = function () {
          return this._remoteStreams ? this._remoteStreams : []
        }),
      !('onaddstream' in e.RTCPeerConnection.prototype))
    ) {
      Object.defineProperty(e.RTCPeerConnection.prototype, 'onaddstream', {
        get() {
          return this._onaddstream
        },
        set(r) {
          this._onaddstream &&
            (this.removeEventListener('addstream', this._onaddstream),
            this.removeEventListener('track', this._onaddstreampoly)),
            this.addEventListener('addstream', (this._onaddstream = r)),
            this.addEventListener(
              'track',
              (this._onaddstreampoly = (n) => {
                n.streams.forEach((o) => {
                  if (
                    (this._remoteStreams || (this._remoteStreams = []),
                    this._remoteStreams.includes(o))
                  )
                    return
                  this._remoteStreams.push(o)
                  const i = new Event('addstream')
                  ;(i.stream = o), this.dispatchEvent(i)
                })
              })
            )
        }
      })
      const t = e.RTCPeerConnection.prototype.setRemoteDescription
      e.RTCPeerConnection.prototype.setRemoteDescription = function () {
        const n = this
        return (
          this._onaddstreampoly ||
            this.addEventListener(
              'track',
              (this._onaddstreampoly = function (o) {
                o.streams.forEach((i) => {
                  if (
                    (n._remoteStreams || (n._remoteStreams = []), n._remoteStreams.indexOf(i) >= 0)
                  )
                    return
                  n._remoteStreams.push(i)
                  const a = new Event('addstream')
                  ;(a.stream = i), n.dispatchEvent(a)
                })
              })
            ),
          t.apply(n, arguments)
        )
      }
    }
  }
  function wl(e) {
    if (typeof e != 'object' || !e.RTCPeerConnection) return
    const t = e.RTCPeerConnection.prototype,
      r = t.createOffer,
      n = t.createAnswer,
      o = t.setLocalDescription,
      i = t.setRemoteDescription,
      a = t.addIceCandidate
    ;(t.createOffer = function (s, c) {
      const V = arguments.length >= 2 ? arguments[2] : arguments[0],
        A = r.apply(this, [V])
      return c ? (A.then(s, c), Promise.resolve()) : A
    }),
      (t.createAnswer = function (s, c) {
        const V = arguments.length >= 2 ? arguments[2] : arguments[0],
          A = n.apply(this, [V])
        return c ? (A.then(s, c), Promise.resolve()) : A
      })
    let l = function (q, s, c) {
      const V = o.apply(this, [q])
      return c ? (V.then(s, c), Promise.resolve()) : V
    }
    ;(t.setLocalDescription = l),
      (l = function (q, s, c) {
        const V = i.apply(this, [q])
        return c ? (V.then(s, c), Promise.resolve()) : V
      }),
      (t.setRemoteDescription = l),
      (l = function (q, s, c) {
        const V = a.apply(this, [q])
        return c ? (V.then(s, c), Promise.resolve()) : V
      }),
      (t.addIceCandidate = l)
  }
  function Il(e) {
    const t = e && e.navigator
    if (t.mediaDevices && t.mediaDevices.getUserMedia) {
      const r = t.mediaDevices,
        n = r.getUserMedia.bind(r)
      t.mediaDevices.getUserMedia = (o) => n(Rl(o))
    }
    !t.getUserMedia &&
      t.mediaDevices &&
      t.mediaDevices.getUserMedia &&
      (t.getUserMedia = function (n, o, i) {
        t.mediaDevices.getUserMedia(n).then(o, i)
      }.bind(t))
  }
  function Rl(e) {
    return e && e.video !== void 0 ? Object.assign({}, e, { video: js(e.video) }) : e
  }
  function Dl(e) {
    if (!e.RTCPeerConnection) return
    const t = e.RTCPeerConnection
    ;(e.RTCPeerConnection = function (n, o) {
      if (n && n.iceServers) {
        const i = []
        for (let a = 0; a < n.iceServers.length; a++) {
          let l = n.iceServers[a]
          !l.hasOwnProperty('urls') && l.hasOwnProperty('url')
            ? (no('RTCIceServer.url', 'RTCIceServer.urls'),
              (l = JSON.parse(JSON.stringify(l))),
              (l.urls = l.url),
              delete l.url,
              i.push(l))
            : i.push(n.iceServers[a])
        }
        n.iceServers = i
      }
      return new t(n, o)
    }),
      (e.RTCPeerConnection.prototype = t.prototype),
      'generateCertificate' in t &&
        Object.defineProperty(e.RTCPeerConnection, 'generateCertificate', {
          get() {
            return t.generateCertificate
          }
        })
  }
  function bl(e) {
    typeof e == 'object' &&
      e.RTCTrackEvent &&
      'receiver' in e.RTCTrackEvent.prototype &&
      !('transceiver' in e.RTCTrackEvent.prototype) &&
      Object.defineProperty(e.RTCTrackEvent.prototype, 'transceiver', {
        get() {
          return { receiver: this.receiver }
        }
      })
  }
  function xl(e) {
    const t = e.RTCPeerConnection.prototype.createOffer
    e.RTCPeerConnection.prototype.createOffer = function (n) {
      if (n) {
        typeof n.offerToReceiveAudio < 'u' && (n.offerToReceiveAudio = !!n.offerToReceiveAudio)
        const o = this.getTransceivers().find((a) => a.receiver.track.kind === 'audio')
        n.offerToReceiveAudio === !1 && o
          ? o.direction === 'sendrecv'
            ? o.setDirection
              ? o.setDirection('sendonly')
              : (o.direction = 'sendonly')
            : o.direction === 'recvonly' &&
              (o.setDirection ? o.setDirection('inactive') : (o.direction = 'inactive'))
          : n.offerToReceiveAudio === !0 && !o && this.addTransceiver('audio'),
          typeof n.offerToReceiveVideo < 'u' && (n.offerToReceiveVideo = !!n.offerToReceiveVideo)
        const i = this.getTransceivers().find((a) => a.receiver.track.kind === 'video')
        n.offerToReceiveVideo === !1 && i
          ? i.direction === 'sendrecv'
            ? i.setDirection
              ? i.setDirection('sendonly')
              : (i.direction = 'sendonly')
            : i.direction === 'recvonly' &&
              (i.setDirection ? i.setDirection('inactive') : (i.direction = 'inactive'))
          : n.offerToReceiveVideo === !0 && !i && this.addTransceiver('video')
      }
      return t.apply(this, arguments)
    }
  }
  function Bl(e) {
    typeof e != 'object' || e.AudioContext || (e.AudioContext = e.webkitAudioContext)
  }
  const Gl = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        shimAudioContext: Bl,
        shimCallbacksAPI: wl,
        shimConstraints: Rl,
        shimCreateOfferLegacy: xl,
        shimGetUserMedia: Il,
        shimLocalStreamsAPI: El,
        shimRTCIceServerUrls: Dl,
        shimRemoteStreamsAPI: Tl,
        shimTrackEventTransceiver: bl
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
  function ao(e) {
    if (!e.RTCIceCandidate || (e.RTCIceCandidate && 'foundation' in e.RTCIceCandidate.prototype))
      return
    const t = e.RTCIceCandidate
    ;(e.RTCIceCandidate = function (n) {
      if (
        (typeof n == 'object' &&
          n.candidate &&
          n.candidate.indexOf('a=') === 0 &&
          ((n = JSON.parse(JSON.stringify(n))), (n.candidate = n.candidate.substr(2))),
        n.candidate && n.candidate.length)
      ) {
        const o = new t(n),
          i = oo.parseCandidate(n.candidate),
          a = Object.assign(o, i)
        return (
          (a.toJSON = function () {
            return {
              candidate: a.candidate,
              sdpMid: a.sdpMid,
              sdpMLineIndex: a.sdpMLineIndex,
              usernameFragment: a.usernameFragment
            }
          }),
          a
        )
      }
      return new t(n)
    }),
      (e.RTCIceCandidate.prototype = t.prototype),
      Qr(
        e,
        'icecandidate',
        (r) => (
          r.candidate &&
            Object.defineProperty(r, 'candidate', {
              value: new e.RTCIceCandidate(r.candidate),
              writable: 'false'
            }),
          r
        )
      )
  }
  function un(e, t) {
    if (!e.RTCPeerConnection) return
    'sctp' in e.RTCPeerConnection.prototype ||
      Object.defineProperty(e.RTCPeerConnection.prototype, 'sctp', {
        get() {
          return typeof this._sctp > 'u' ? null : this._sctp
        }
      })
    const r = function (l) {
        if (!l || !l.sdp) return !1
        const q = oo.splitSections(l.sdp)
        return (
          q.shift(),
          q.some((s) => {
            const c = oo.parseMLine(s)
            return c && c.kind === 'application' && c.protocol.indexOf('SCTP') !== -1
          })
        )
      },
      n = function (l) {
        const q = l.sdp.match(/mozilla...THIS_IS_SDPARTA-(\d+)/)
        if (q === null || q.length < 2) return -1
        const s = parseInt(q[1], 10)
        return s !== s ? -1 : s
      },
      o = function (l) {
        let q = 65536
        return (
          t.browser === 'firefox' &&
            (t.version < 57
              ? l === -1
                ? (q = 16384)
                : (q = 2147483637)
              : t.version < 60
              ? (q = t.version === 57 ? 65535 : 65536)
              : (q = 2147483637)),
          q
        )
      },
      i = function (l, q) {
        let s = 65536
        t.browser === 'firefox' && t.version === 57 && (s = 65535)
        const c = oo.matchPrefix(l.sdp, 'a=max-message-size:')
        return (
          c.length > 0
            ? (s = parseInt(c[0].substr(19), 10))
            : t.browser === 'firefox' && q !== -1 && (s = 2147483637),
          s
        )
      },
      a = e.RTCPeerConnection.prototype.setRemoteDescription
    e.RTCPeerConnection.prototype.setRemoteDescription = function () {
      if (((this._sctp = null), t.browser === 'chrome' && t.version >= 76)) {
        const { sdpSemantics: q } = this.getConfiguration()
        q === 'plan-b' &&
          Object.defineProperty(this, 'sctp', {
            get() {
              return typeof this._sctp > 'u' ? null : this._sctp
            },
            enumerable: !0,
            configurable: !0
          })
      }
      if (r(arguments[0])) {
        const q = n(arguments[0]),
          s = o(q),
          c = i(arguments[0], q)
        let V
        s === 0 && c === 0
          ? (V = Number.POSITIVE_INFINITY)
          : s === 0 || c === 0
          ? (V = Math.max(s, c))
          : (V = Math.min(s, c))
        const A = {}
        Object.defineProperty(A, 'maxMessageSize', {
          get() {
            return V
          }
        }),
          (this._sctp = A)
      }
      return a.apply(this, arguments)
    }
  }
  function Vn(e) {
    if (!(e.RTCPeerConnection && 'createDataChannel' in e.RTCPeerConnection.prototype)) return
    function t(n, o) {
      const i = n.send
      n.send = function () {
        const l = arguments[0],
          q = l.length || l.size || l.byteLength
        if (n.readyState === 'open' && o.sctp && q > o.sctp.maxMessageSize)
          throw new TypeError(
            'Message too large (can send a maximum of ' + o.sctp.maxMessageSize + ' bytes)'
          )
        return i.apply(n, arguments)
      }
    }
    const r = e.RTCPeerConnection.prototype.createDataChannel
    ;(e.RTCPeerConnection.prototype.createDataChannel = function () {
      const o = r.apply(this, arguments)
      return t(o, this), o
    }),
      Qr(e, 'datachannel', (n) => (t(n.channel, n.target), n))
  }
  function wi(e) {
    if (!e.RTCPeerConnection || 'connectionState' in e.RTCPeerConnection.prototype) return
    const t = e.RTCPeerConnection.prototype
    Object.defineProperty(t, 'connectionState', {
      get() {
        return (
          { completed: 'connected', checking: 'connecting' }[this.iceConnectionState] ||
          this.iceConnectionState
        )
      },
      enumerable: !0,
      configurable: !0
    }),
      Object.defineProperty(t, 'onconnectionstatechange', {
        get() {
          return this._onconnectionstatechange || null
        },
        set(r) {
          this._onconnectionstatechange &&
            (this.removeEventListener('connectionstatechange', this._onconnectionstatechange),
            delete this._onconnectionstatechange),
            r && this.addEventListener('connectionstatechange', (this._onconnectionstatechange = r))
        },
        enumerable: !0,
        configurable: !0
      }),
      ['setLocalDescription', 'setRemoteDescription'].forEach((r) => {
        const n = t[r]
        t[r] = function () {
          return (
            this._connectionstatechangepoly ||
              ((this._connectionstatechangepoly = (o) => {
                const i = o.target
                if (i._lastConnectionState !== i.connectionState) {
                  i._lastConnectionState = i.connectionState
                  const a = new Event('connectionstatechange', o)
                  i.dispatchEvent(a)
                }
                return o
              }),
              this.addEventListener('iceconnectionstatechange', this._connectionstatechangepoly)),
            n.apply(this, arguments)
          )
        }
      })
  }
  function Ii(e, t) {
    if (
      !e.RTCPeerConnection ||
      (t.browser === 'chrome' && t.version >= 71) ||
      (t.browser === 'safari' && t.version >= 605)
    )
      return
    const r = e.RTCPeerConnection.prototype.setRemoteDescription
    e.RTCPeerConnection.prototype.setRemoteDescription = function (o) {
      if (
        o &&
        o.sdp &&
        o.sdp.indexOf(`
a=extmap-allow-mixed`) !== -1
      ) {
        const i = o.sdp
          .split(
            `
`
          )
          .filter((a) => a.trim() !== 'a=extmap-allow-mixed').join(`
`)
        e.RTCSessionDescription && o instanceof e.RTCSessionDescription
          ? (arguments[0] = new e.RTCSessionDescription({ type: o.type, sdp: i }))
          : (o.sdp = i)
      }
      return r.apply(this, arguments)
    }
  }
  function so(e, t) {
    if (!(e.RTCPeerConnection && e.RTCPeerConnection.prototype)) return
    const r = e.RTCPeerConnection.prototype.addIceCandidate
    !r ||
      r.length === 0 ||
      (e.RTCPeerConnection.prototype.addIceCandidate = function () {
        return arguments[0]
          ? ((t.browser === 'chrome' && t.version < 78) ||
              (t.browser === 'firefox' && t.version < 68) ||
              t.browser === 'safari') &&
            arguments[0] &&
            arguments[0].candidate === ''
            ? Promise.resolve()
            : r.apply(this, arguments)
          : (arguments[1] && arguments[1].apply(null), Promise.resolve())
      })
  }
  const mh = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        removeExtmapAllowMixed: Ii,
        shimAddIceCandidateNullOrEmpty: so,
        shimConnectionState: wi,
        shimMaxMessageSize: un,
        shimRTCIceCandidate: ao,
        shimSendThrowTypeError: Vn
      },
      Symbol.toStringTag,
      { value: 'Module' }
    )
  )
  function vh(
    { window: e } = {},
    t = { shimChrome: !0, shimFirefox: !0, shimEdge: !0, shimSafari: !0 }
  ) {
    const r = Ci,
      n = uh(e),
      o = {
        browserDetails: n,
        commonShim: mh,
        extractVersion: cn,
        disableLog: qh,
        disableWarnings: ch
      }
    switch (n.browser) {
      case 'chrome':
        if (!ol || !yi || !t.shimChrome)
          return r('Chrome shim is not included in this adapter release.'), o
        if (n.version === null) return r('Chrome shim can not determine version, not shimming.'), o
        r('adapter.js shimming chrome.'),
          (o.browserShim = ol),
          so(e, n),
          zs(e, n),
          _s(e),
          yi(e, n),
          Ws(e),
          rl(e, n),
          $s(e),
          Xs(e),
          el(e),
          nl(e, n),
          ao(e),
          wi(e),
          un(e, n),
          Vn(e),
          Ii(e, n)
        break
      case 'firefox':
        if (!Sl || !Ti || !t.shimFirefox)
          return r('Firefox shim is not included in this adapter release.'), o
        r('adapter.js shimming firefox.'),
          (o.browserShim = Sl),
          so(e, n),
          fl(e, n),
          Ti(e, n),
          Al(e),
          hl(e),
          pl(e),
          gl(e),
          ml(e),
          vl(e),
          Cl(e),
          Ml(e),
          yl(e),
          ao(e),
          wi(e),
          un(e, n),
          Vn(e)
        break
      case 'edge':
        if (!dl || !Ei || !t.shimEdge)
          return r('MS edge shim is not included in this adapter release.'), o
        r('adapter.js shimming edge.'),
          (o.browserShim = dl),
          cl(e),
          ul(e),
          Ei(e, n),
          Vl(e),
          un(e, n),
          Vn(e)
        break
      case 'safari':
        if (!Gl || !t.shimSafari)
          return r('Safari shim is not included in this adapter release.'), o
        r('adapter.js shimming safari.'),
          (o.browserShim = Gl),
          so(e, n),
          Dl(e),
          xl(e),
          wl(e),
          El(e),
          Tl(e),
          bl(e),
          Il(e),
          Bl(e),
          ao(e),
          un(e, n),
          Vn(e),
          Ii(e, n)
        break
      default:
        r('Unsupported browser!')
        break
    }
    return o
  }
  const Fl = vh({ window: typeof window > 'u' ? void 0 : window })
  ;(u.sessions = {}),
    (u.isExtensionEnabled = function () {
      if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) return !0
      if (window.navigator.userAgent.match('Chrome')) {
        var e = parseInt(window.navigator.userAgent.match(/Chrome\/(.*) /)[1], 10),
          t = 33
        return (
          window.navigator.userAgent.match('Linux') && (t = 35),
          e >= 26 && e <= t ? !0 : u.extension.isInstalled()
        )
      } else return !0
    })
  var Ol = {
    extensionId: 'hapfgfdkleiggjjpfpenajgdnfckjpaj',
    isInstalled: function () {
      return document.querySelector('#janus-extension-installed') !== null
    },
    getScreen: function (e) {
      var t = window.setTimeout(function () {
        var r = new Error('NavigatorUserMediaError')
        return (
          (r.name =
            'The required Chrome extension is not installed: click <a href="#">here</a> to install it. (NOTE: this will need you to refresh the page)'),
          e(r)
        )
      }, 1e3)
      ;(this.cache[t] = e), window.postMessage({ type: 'janusGetScreen', id: t }, '*')
    },
    init: function () {
      var e = {}
      ;(this.cache = e),
        window.addEventListener('message', function (t) {
          if (t.origin == window.location.origin)
            if (t.data.type == 'janusGotScreen' && e[t.data.id]) {
              var r = e[t.data.id]
              if ((delete e[t.data.id], t.data.sourceId === '')) {
                var n = new Error('NavigatorUserMediaError')
                ;(n.name = 'You cancelled the request for permission, giving up...'), r(n)
              } else r(null, t.data.sourceId)
            } else
              t.data.type == 'janusGetScreenPending' &&
                (console.log('clearing ', t.data.id), window.clearTimeout(t.data.id))
        })
    }
  }
  ;(u.useDefaultDependencies = function (e) {
    var t = (e && e.fetch) || fetch,
      r = (e && e.Promise) || Promise,
      n = (e && e.WebSocket) || WebSocket
    return {
      newWebSocket: function (o, i) {
        return new n(o, i)
      },
      extension: (e && e.extension) || Ol,
      isArray: function (o) {
        return Array.isArray(o)
      },
      webRTCAdapter: (e && e.adapter) || Fl,
      httpAPICall: function (o, i) {
        var a = {
          method: i.verb,
          headers: { Accept: 'application/json, text/plain, */*' },
          cache: 'no-cache'
        }
        i.verb === 'POST' && (a.headers['Content-Type'] = 'application/json'),
          i.withCredentials !== void 0 &&
            (a.credentials =
              i.withCredentials === !0
                ? 'include'
                : i.withCredentials
                ? i.withCredentials
                : 'omit'),
          i.body && (a.body = JSON.stringify(i.body))
        var l = t(o, a).catch(function (s) {
          return r.reject({ message: 'Probably a network error, is the server down?', error: s })
        })
        if (i.timeout) {
          var q = new r(function (s, c) {
            var V = setTimeout(function () {
              return clearTimeout(V), c({ message: 'Request timed out', timeout: i.timeout })
            }, i.timeout)
          })
          l = r.race([l, q])
        }
        return (
          l
            .then(function (s) {
              if (s.ok) {
                if (typeof i.success == typeof u.noop)
                  return s.json().then(
                    function (c) {
                      try {
                        i.success(c)
                      } catch (V) {
                        u.error('Unhandled httpAPICall success callback error', V)
                      }
                    },
                    function (c) {
                      return r.reject({
                        message: 'Failed to parse response body',
                        error: c,
                        response: s
                      })
                    }
                  )
              } else return r.reject({ message: 'API call failed', response: s })
            })
            .catch(function (s) {
              typeof i.error == typeof u.noop && i.error(s.message || '<< internal error >>', s)
            }),
          l
        )
      }
    }
  }),
    (u.useOldDependencies = function (e) {
      var t = (e && e.jQuery) || jQuery,
        r = (e && e.WebSocket) || WebSocket
      return {
        newWebSocket: function (n, o) {
          return new r(n, o)
        },
        isArray: function (n) {
          return t.isArray(n)
        },
        extension: (e && e.extension) || Ol,
        webRTCAdapter: (e && e.adapter) || Fl,
        httpAPICall: function (n, o) {
          var i =
              o.body !== void 0
                ? { contentType: 'application/json', data: JSON.stringify(o.body) }
                : {},
            a =
              o.withCredentials !== void 0
                ? { xhrFields: { withCredentials: o.withCredentials } }
                : {}
          return t.ajax(
            t.extend(i, a, {
              url: n,
              type: o.verb,
              cache: !1,
              dataType: 'json',
              async: o.async,
              timeout: o.timeout,
              success: function (l) {
                typeof o.success == typeof u.noop && o.success(l)
              },
              error: function (l, q, s) {
                typeof o.error == typeof u.noop && o.error(q, s)
              }
            })
          )
        }
      }
    }),
    (u.noop = function () {}),
    (u.dataChanDefaultLabel = 'JanusDataChannel'),
    (u.endOfCandidates = null),
    (u.stopAllTracks = function (e) {
      try {
        var t = e.getTracks()
        for (var r of t) u.log(r), r && r.stop()
      } catch {}
    }),
    (u.init = function (e) {
      if (
        ((e = e || {}),
        (e.callback = typeof e.callback == 'function' ? e.callback : u.noop),
        u.initDone)
      )
        e.callback()
      else {
        if (
          (typeof console.log > 'u' && (console.log = function () {}),
          (u.trace = u.noop),
          (u.debug = u.noop),
          (u.vdebug = u.noop),
          (u.log = u.noop),
          (u.warn = u.noop),
          (u.error = u.noop),
          e.debug === !0 || e.debug === 'all')
        )
          (u.trace = console.trace.bind(console)),
            (u.debug = console.debug.bind(console)),
            (u.vdebug = console.debug.bind(console)),
            (u.log = console.log.bind(console)),
            (u.warn = console.warn.bind(console)),
            (u.error = console.error.bind(console))
        else if (Array.isArray(e.debug))
          for (var t of e.debug)
            switch (t) {
              case 'trace':
                u.trace = console.trace.bind(console)
                break
              case 'debug':
                u.debug = console.debug.bind(console)
                break
              case 'vdebug':
                u.vdebug = console.debug.bind(console)
                break
              case 'log':
                u.log = console.log.bind(console)
                break
              case 'warn':
                u.warn = console.warn.bind(console)
                break
              case 'error':
                u.error = console.error.bind(console)
                break
              default:
                console.error(
                  "Unknown debugging option '" +
                    t +
                    "' (supported: 'trace', 'debug', 'vdebug', 'log', warn', 'error')"
                )
                break
            }
        u.log('Initializing library')
        var r = e.dependencies || u.useDefaultDependencies()
        ;(u.isArray = r.isArray),
          (u.webRTCAdapter = r.webRTCAdapter),
          (u.httpAPICall = r.httpAPICall),
          (u.newWebSocket = r.newWebSocket),
          (u.extension = r.extension),
          u.extension.init(),
          (u.listDevices = function (s, c) {
            ;(s = typeof s == 'function' ? s : u.noop),
              c == null && (c = { audio: !0, video: !0 }),
              u.isGetUserMediaAvailable()
                ? navigator.mediaDevices
                    .getUserMedia(c)
                    .then(function (V) {
                      navigator.mediaDevices.enumerateDevices().then(function (A) {
                        u.debug(A), s(A), u.stopAllTracks(V)
                      })
                    })
                    .catch(function (V) {
                      u.error(V), s([])
                    })
                : (u.warn('navigator.mediaDevices unavailable'), s([]))
          }),
          (u.attachMediaStream = function (s, c) {
            try {
              s.srcObject = c
            } catch {
              try {
                s.src = URL.createObjectURL(c)
              } catch {
                u.error('Error attaching stream to element')
              }
            }
          }),
          (u.reattachMediaStream = function (s, c) {
            try {
              s.srcObject = c.srcObject
            } catch {
              try {
                s.src = c.src
              } catch {
                u.error('Error reattaching stream to element')
              }
            }
          })
        var n = ['iPad', 'iPhone', 'iPod'].indexOf(navigator.platform) >= 0,
          o = n ? 'pagehide' : 'beforeunload',
          i = window['on' + o]
        if (
          (window.addEventListener(o, function () {
            u.log('Closing window')
            for (var s in u.sessions)
              u.sessions[s] &&
                u.sessions[s].destroyOnUnload &&
                (u.log('Destroying session ' + s),
                u.sessions[s].destroy({ unload: !0, notifyDestroyed: !1 }))
            i && typeof i == 'function' && i()
          }),
          (u.safariVp8 = !1),
          u.webRTCAdapter.browserDetails.browser === 'safari' &&
            u.webRTCAdapter.browserDetails.version >= 605)
        )
          if (
            RTCRtpSender &&
            RTCRtpSender.getCapabilities &&
            RTCRtpSender.getCapabilities('video') &&
            RTCRtpSender.getCapabilities('video').codecs &&
            RTCRtpSender.getCapabilities('video').codecs.length
          ) {
            for (var a of RTCRtpSender.getCapabilities('video').codecs)
              if (a && a.mimeType && a.mimeType.toLowerCase() === 'video/vp8') {
                u.safariVp8 = !0
                break
              }
            u.safariVp8
              ? u.log('This version of Safari supports VP8')
              : u.warn(
                  "This version of Safari does NOT support VP8: if you're using a Technology Preview, try enabling the 'WebRTC VP8 codec' setting in the 'Experimental Features' Develop menu"
                )
          } else {
            var l = new RTCPeerConnection({})
            l.createOffer({ offerToReceiveVideo: !0 }).then(function (s) {
              ;(u.safariVp8 = s.sdp.indexOf('VP8') !== -1),
                u.safariVp8
                  ? u.log('This version of Safari supports VP8')
                  : u.warn(
                      "This version of Safari does NOT support VP8: if you're using a Technology Preview, try enabling the 'WebRTC VP8 codec' setting in the 'Experimental Features' Develop menu"
                    ),
                l.close(),
                (l = null)
            })
          }
        if (
          ((u.unifiedPlan = !1),
          u.webRTCAdapter.browserDetails.browser === 'firefox' &&
            u.webRTCAdapter.browserDetails.version >= 59)
        )
          u.unifiedPlan = !0
        else if (
          u.webRTCAdapter.browserDetails.browser === 'chrome' &&
          u.webRTCAdapter.browserDetails.version >= 72
        )
          u.unifiedPlan = !0
        else if (!window.RTCRtpTransceiver || !('currentDirection' in RTCRtpTransceiver.prototype))
          u.unifiedPlan = !1
        else {
          var q = new RTCPeerConnection()
          try {
            q.addTransceiver('audio'), (u.unifiedPlan = !0)
          } catch {}
          q.close()
        }
        ;(u.initDone = !0), e.callback()
      }
    }),
    (u.isWebrtcSupported = function () {
      return !!window.RTCPeerConnection
    }),
    (u.isGetUserMediaAvailable = function () {
      return navigator.mediaDevices && navigator.mediaDevices.getUserMedia
    }),
    (u.randomString = function (e) {
      for (
        var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', r = '', n = 0;
        n < e;
        n++
      ) {
        var o = Math.floor(Math.random() * t.length)
        r += t.substring(o, o + 1)
      }
      return r
    })
  function u(e) {
    if (
      ((e = e || {}),
      (e.success = typeof e.success == 'function' ? e.success : u.noop),
      (e.error = typeof e.error == 'function' ? e.error : u.noop),
      (e.destroyed = typeof e.destroyed == 'function' ? e.destroyed : u.noop),
      !u.initDone)
    )
      return e.error('Library not initialized'), {}
    if (!u.isWebrtcSupported()) return e.error('WebRTC not supported by this browser'), {}
    if ((u.log('Library initialized: ' + u.initDone), !e.server))
      return e.error('Invalid server url'), {}
    var t = !1,
      r = null,
      n = {},
      o = null,
      i = null,
      a = 0,
      l = e.server
    u.isArray(l)
      ? (u.log('Multiple servers provided (' + l.length + '), will use the first that works'),
        (l = null),
        (i = e.server),
        u.debug(i))
      : l.indexOf('ws') === 0
      ? ((t = !0), u.log('Using WebSockets to contact Janus: ' + l))
      : ((t = !1), u.log('Using REST API to contact Janus: ' + l))
    var q = e.iceServers || [{ urls: 'stun:stun.l.google.com:19302' }],
      s = e.iceTransportPolicy,
      c = e.bundlePolicy,
      V = e.ipv6 === !0,
      A = !1
    e.withCredentials !== void 0 && e.withCredentials !== null && (A = e.withCredentials === !0)
    var C = 10
    e.max_poll_events !== void 0 && e.max_poll_events !== null && (C = e.max_poll_events),
      C < 1 && (C = 1)
    var y = null
    e.token !== void 0 && e.token !== null && (y = e.token)
    var w = null
    e.apisecret !== void 0 && e.apisecret !== null && (w = e.apisecret),
      (this.destroyOnUnload = !0),
      e.destroyOnUnload !== void 0 &&
        e.destroyOnUnload !== null &&
        (this.destroyOnUnload = e.destroyOnUnload === !0)
    var J = 25e3
    e.keepAlivePeriod !== void 0 && e.keepAlivePeriod !== null && (J = e.keepAlivePeriod),
      isNaN(J) && (J = 25e3)
    var O = 6e4
    e.longPollTimeout !== void 0 && e.longPollTimeout !== null && (O = e.longPollTimeout),
      isNaN(O) && (O = 6e4)
    function G(d) {
      var p = { high: 9e5, medium: 3e5, low: 1e5 }
      return (
        d != null &&
          (d.high && (p.high = d.high),
          d.medium && (p.medium = d.medium),
          d.low && (p.low = d.low)),
        p
      )
    }
    var Y = !1,
      L = null,
      D = {},
      qe = this,
      Ve = 0,
      $ = {}
    z(e),
      (this.getServer = function () {
        return l
      }),
      (this.isConnected = function () {
        return Y
      }),
      (this.reconnect = function (d) {
        ;(d = d || {}),
          (d.success = typeof d.success == 'function' ? d.success : u.noop),
          (d.error = typeof d.error == 'function' ? d.error : u.noop),
          (d.reconnect = !0),
          z(d)
      }),
      (this.getSessionId = function () {
        return L
      }),
      (this.getInfo = function (d) {
        Me(d)
      }),
      (this.destroy = function (d) {
        he(d)
      }),
      (this.attach = function (d) {
        we(d)
      })
    function de() {
      if (L != null) {
        if ((u.debug('Long poll...'), !Y)) {
          u.warn('Is the server down? (connected=false)')
          return
        }
        var d = l + '/' + L + '?rid=' + new Date().getTime()
        C && (d = d + '&maxev=' + C),
          y && (d = d + '&token=' + encodeURIComponent(y)),
          w && (d = d + '&apisecret=' + encodeURIComponent(w)),
          u.httpAPICall(d, {
            verb: 'GET',
            withCredentials: A,
            success: Q,
            timeout: O,
            error: function (p, g) {
              if ((u.error(p + ':', g), Ve++, Ve > 3)) {
                ;(Y = !1), e.error('Lost connection to the server (is it down?)')
                return
              }
              de()
            }
          })
      }
    }
    function Q(d, p) {
      if (((Ve = 0), !t && L !== void 0 && L !== null && p !== !0 && de(), !t && u.isArray(d))) {
        for (var g = 0; g < d.length; g++) Q(d[g], !0)
        return
      }
      if (d.janus === 'keepalive') {
        u.vdebug('Got a keepalive on session ' + L)
        return
      } else if (d.janus === 'server_info') {
        u.debug('Got info on the Janus instance'), u.debug(d)
        const ne = d.transaction
        if (ne) {
          const _ = $[ne]
          _ && _(d), delete $[ne]
        }
        return
      } else if (d.janus === 'ack') {
        u.debug('Got an ack on session ' + L), u.debug(d)
        const ne = d.transaction
        if (ne) {
          const _ = $[ne]
          _ && _(d), delete $[ne]
        }
        return
      } else if (d.janus === 'success') {
        u.debug('Got a success on session ' + L), u.debug(d)
        const ne = d.transaction
        if (ne) {
          const _ = $[ne]
          _ && _(d), delete $[ne]
        }
        return
      } else if (d.janus === 'trickle') {
        const ne = d.sender
        if (!ne) {
          u.warn('Missing sender...')
          return
        }
        const _ = D[ne]
        if (!_) {
          u.debug('This handle is not attached to this session')
          return
        }
        var m = d.candidate
        u.debug('Got a trickled candidate on session ' + L), u.debug(m)
        var f = _.webrtcStuff
        f.pc && f.remoteSdp
          ? (u.debug('Adding remote candidate:', m),
            !m || m.completed === !0
              ? f.pc.addIceCandidate(u.endOfCandidates)
              : f.pc.addIceCandidate(m))
          : (u.debug(
              "We didn't do setRemoteDescription (trickle got here before the offer?), caching candidate"
            ),
            f.candidates || (f.candidates = []),
            f.candidates.push(m),
            u.debug(f.candidates))
      } else if (d.janus === 'webrtcup') {
        u.debug('Got a webrtcup event on session ' + L), u.debug(d)
        const ne = d.sender
        if (!ne) {
          u.warn('Missing sender...')
          return
        }
        const _ = D[ne]
        if (!_) {
          u.debug('This handle is not attached to this session')
          return
        }
        _.webrtcState(!0)
        return
      } else if (d.janus === 'hangup') {
        u.debug('Got a hangup event on session ' + L), u.debug(d)
        const ne = d.sender
        if (!ne) {
          u.warn('Missing sender...')
          return
        }
        const _ = D[ne]
        if (!_) {
          u.debug('This handle is not attached to this session')
          return
        }
        _.webrtcState(!1, d.reason), _.hangup()
      } else if (d.janus === 'detached') {
        u.debug('Got a detached event on session ' + L), u.debug(d)
        const ne = d.sender
        if (!ne) {
          u.warn('Missing sender...')
          return
        }
        const _ = D[ne]
        if (!_) return
        _.ondetached(), _.detach()
      } else if (d.janus === 'media') {
        u.debug('Got a media event on session ' + L), u.debug(d)
        const ne = d.sender
        if (!ne) {
          u.warn('Missing sender...')
          return
        }
        const _ = D[ne]
        if (!_) {
          u.debug('This handle is not attached to this session')
          return
        }
        _.mediaState(d.type, d.receiving)
      } else if (d.janus === 'slowlink') {
        u.debug('Got a slowlink event on session ' + L), u.debug(d)
        const ne = d.sender
        if (!ne) {
          u.warn('Missing sender...')
          return
        }
        const _ = D[ne]
        if (!_) {
          u.debug('This handle is not attached to this session')
          return
        }
        _.slowLink(d.uplink, d.lost)
      } else if (d.janus === 'error') {
        u.error('Ooops: ' + d.error.code + ' ' + d.error.reason), u.debug(d)
        var b = d.transaction
        if (b) {
          var v = $[b]
          v && v(d), delete $[b]
        }
        return
      } else if (d.janus === 'event') {
        u.debug('Got a plugin event on session ' + L), u.debug(d)
        const ne = d.sender
        if (!ne) {
          u.warn('Missing sender...')
          return
        }
        var x = d.plugindata
        if (!x) {
          u.warn('Missing plugindata...')
          return
        }
        u.debug('  -- Event is coming from ' + ne + ' (' + x.plugin + ')')
        var I = x.data
        u.debug(I)
        const _ = D[ne]
        if (!_) {
          u.warn('This handle is not attached to this session')
          return
        }
        var X = d.jsep
        X && (u.debug('Handling SDP as well...'), u.debug(X))
        var j = _.onmessage
        j
          ? (u.debug('Notifying application...'), j(I, X))
          : u.debug('No provided notification callback')
      } else if (d.janus === 'timeout') {
        u.error('Timeout on session ' + L), u.debug(d), t && r.close(3504, 'Gateway timeout')
        return
      } else u.warn("Unknown message/event  '" + d.janus + "' on session " + L), u.debug(d)
    }
    function le() {
      if (!(!l || !t || !Y)) {
        o = setTimeout(le, J)
        var d = { janus: 'keepalive', session_id: L, transaction: u.randomString(12) }
        y && (d.token = y), w && (d.apisecret = w), r.send(JSON.stringify(d))
      }
    }
    function z(d) {
      var p = u.randomString(12),
        g = { janus: 'create', transaction: p }
      if (
        (d.reconnect &&
          ((Y = !1),
          (g.janus = 'claim'),
          (g.session_id = L),
          r &&
            ((r.onopen = null),
            (r.onerror = null),
            (r.onclose = null),
            o && (clearTimeout(o), (o = null)))),
        y && (g.token = y),
        w && (g.apisecret = w),
        !l &&
          u.isArray(i) &&
          ((l = i[a]),
          l.indexOf('ws') === 0
            ? ((t = !0),
              u.log('Server #' + (a + 1) + ': trying WebSockets to contact Janus (' + l + ')'))
            : ((t = !1),
              u.log('Server #' + (a + 1) + ': trying REST API to contact Janus (' + l + ')'))),
        t)
      ) {
        ;(r = u.newWebSocket(l, 'janus-protocol')),
          (n = {
            error: function () {
              if (
                (u.error('Error connecting to the Janus WebSockets server... ' + l),
                u.isArray(i) && !d.reconnect)
              ) {
                if ((a++, a === i.length)) {
                  d.error(
                    'Error connecting to any of the provided Janus servers: Is the server down?'
                  )
                  return
                }
                ;(l = null),
                  setTimeout(function () {
                    z(d)
                  }, 200)
                return
              }
              d.error('Error connecting to the Janus WebSockets server: Is the server down?')
            },
            open: function () {
              ;($[p] = function (f) {
                if ((u.debug(f), f.janus !== 'success')) {
                  u.error('Ooops: ' + f.error.code + ' ' + f.error.reason), d.error(f.error.reason)
                  return
                }
                ;(o = setTimeout(le, J)),
                  (Y = !0),
                  (L = f.session_id ? f.session_id : f.data.id),
                  d.reconnect ? u.log('Claimed session: ' + L) : u.log('Created session: ' + L),
                  (u.sessions[L] = qe),
                  d.success()
              }),
                r.send(JSON.stringify(g))
            },
            message: function (f) {
              Q(JSON.parse(f.data))
            },
            close: function () {
              !l || !Y || ((Y = !1), e.error('Lost connection to the server (is it down?)'))
            }
          })
        for (var m in n) r.addEventListener(m, n[m])
        return
      }
      u.httpAPICall(l, {
        verb: 'POST',
        withCredentials: A,
        body: g,
        success: function (f) {
          if ((u.debug(f), f.janus !== 'success')) {
            u.error('Ooops: ' + f.error.code + ' ' + f.error.reason), d.error(f.error.reason)
            return
          }
          ;(Y = !0),
            (L = f.session_id ? f.session_id : f.data.id),
            d.reconnect ? u.log('Claimed session: ' + L) : u.log('Created session: ' + L),
            (u.sessions[L] = qe),
            de(),
            d.success()
        },
        error: function (f, b) {
          if ((u.error(f + ':', b), u.isArray(i) && !d.reconnect)) {
            if ((a++, a === i.length)) {
              d.error('Error connecting to any of the provided Janus servers: Is the server down?')
              return
            }
            ;(l = null),
              setTimeout(function () {
                z(d)
              }, 200)
            return
          }
          b === ''
            ? d.error(f + ': Is the server down?')
            : b && b.error
            ? d.error(f + ': ' + b.error.message)
            : d.error(f + ': ' + b)
        }
      })
    }
    function Me(d) {
      if (
        ((d = d || {}),
        (d.success = typeof d.success == 'function' ? d.success : u.noop),
        (d.error = typeof d.error == 'function' ? d.error : u.noop),
        u.log('Getting info on Janus instance'),
        !Y)
      ) {
        u.warn('Is the server down? (connected=false)'),
          d.error('Is the server down? (connected=false)')
        return
      }
      var p = u.randomString(12),
        g = { janus: 'info', transaction: p }
      if ((y && (g.token = y), w && (g.apisecret = w), t)) {
        ;($[p] = function (m) {
          u.log('Server info:'),
            u.debug(m),
            m.janus !== 'server_info' && u.error('Ooops: ' + m.error.code + ' ' + m.error.reason),
            d.success(m)
        }),
          r.send(JSON.stringify(g))
        return
      }
      u.httpAPICall(l, {
        verb: 'POST',
        withCredentials: A,
        body: g,
        success: function (m) {
          u.log('Server info:'),
            u.debug(m),
            m.janus !== 'server_info' && u.error('Ooops: ' + m.error.code + ' ' + m.error.reason),
            d.success(m)
        },
        error: function (m, f) {
          u.error(m + ':', f),
            f === '' ? d.error(m + ': Is the server down?') : d.error(m + ': ' + f)
        }
      })
    }
    function he(d) {
      ;(d = d || {}),
        (d.success = typeof d.success == 'function' ? d.success : u.noop),
        (d.error = typeof d.error == 'function' ? d.error : u.noop)
      var p = d.unload === !0,
        g = !0
      d.notifyDestroyed !== void 0 && d.notifyDestroyed !== null && (g = d.notifyDestroyed === !0)
      var m = d.cleanupHandles === !0
      if ((u.log('Destroying session ' + L + ' (unload=' + p + ')'), !L)) {
        u.warn('No session to destroy'), d.success(), g && e.destroyed()
        return
      }
      if (m) for (var f in D) lt(f, { noRequest: !0 })
      if (!Y) {
        u.warn('Is the server down? (connected=false)'), (L = null), d.success()
        return
      }
      var b = { janus: 'destroy', transaction: u.randomString(12) }
      if ((y && (b.token = y), w && (b.apisecret = w), p)) {
        t
          ? ((r.onclose = null), r.close(), (r = null))
          : navigator.sendBeacon(l + '/' + L, JSON.stringify(b)),
          u.log('Destroyed session:'),
          (L = null),
          (Y = !1),
          d.success(),
          g && e.destroyed()
        return
      }
      if (t) {
        b.session_id = L
        var v = function () {
            for (var X in n) r.removeEventListener(X, n[X])
            r.removeEventListener('message', x),
              r.removeEventListener('error', I),
              o && clearTimeout(o),
              r.close()
          },
          x = function (X) {
            var j = JSON.parse(X.data)
            j.session_id == b.session_id &&
              j.transaction == b.transaction &&
              (v(), d.success(), g && e.destroyed())
          },
          I = function () {
            v(), d.error('Failed to destroy the server: Is the server down?'), g && e.destroyed()
          }
        r.addEventListener('message', x),
          r.addEventListener('error', I),
          r.readyState === 1 ? r.send(JSON.stringify(b)) : I()
        return
      }
      u.httpAPICall(l + '/' + L, {
        verb: 'POST',
        withCredentials: A,
        body: b,
        success: function (X) {
          u.log('Destroyed session:'),
            u.debug(X),
            (L = null),
            (Y = !1),
            X.janus !== 'success' && u.error('Ooops: ' + X.error.code + ' ' + X.error.reason),
            d.success(),
            g && e.destroyed()
        },
        error: function (X, j) {
          u.error(X + ':', j), (L = null), (Y = !1), d.success(), g && e.destroyed()
        }
      })
    }
    function we(d) {
      if (
        ((d = d || {}),
        (d.success = typeof d.success == 'function' ? d.success : u.noop),
        (d.error = typeof d.error == 'function' ? d.error : u.noop),
        (d.dataChannelOptions = d.dataChannelOptions || { ordered: !0 }),
        (d.consentDialog = typeof d.consentDialog == 'function' ? d.consentDialog : u.noop),
        (d.iceState = typeof d.iceState == 'function' ? d.iceState : u.noop),
        (d.mediaState = typeof d.mediaState == 'function' ? d.mediaState : u.noop),
        (d.webrtcState = typeof d.webrtcState == 'function' ? d.webrtcState : u.noop),
        (d.slowLink = typeof d.slowLink == 'function' ? d.slowLink : u.noop),
        (d.onmessage = typeof d.onmessage == 'function' ? d.onmessage : u.noop),
        (d.onlocalstream = typeof d.onlocalstream == 'function' ? d.onlocalstream : u.noop),
        (d.onremotestream = typeof d.onremotestream == 'function' ? d.onremotestream : u.noop),
        (d.ondata = typeof d.ondata == 'function' ? d.ondata : u.noop),
        (d.ondataopen = typeof d.ondataopen == 'function' ? d.ondataopen : u.noop),
        (d.oncleanup = typeof d.oncleanup == 'function' ? d.oncleanup : u.noop),
        (d.ondetached = typeof d.ondetached == 'function' ? d.ondetached : u.noop),
        !Y)
      ) {
        u.warn('Is the server down? (connected=false)'),
          d.error('Is the server down? (connected=false)')
        return
      }
      var p = d.plugin
      if (!p) {
        u.error('Invalid plugin'), d.error('Invalid plugin')
        return
      }
      var g = d.opaqueId,
        m = d.loopIndex,
        f = d.token ? d.token : y,
        b = u.randomString(12),
        v = { janus: 'attach', plugin: p, opaque_id: g, loop_index: m, transaction: b }
      if ((f && (v.token = f), w && (v.apisecret = w), t)) {
        ;($[b] = function (x) {
          if ((u.debug(x), x.janus !== 'success')) {
            u.error('Ooops: ' + x.error.code + ' ' + x.error.reason),
              d.error('Ooops: ' + x.error.code + ' ' + x.error.reason)
            return
          }
          var I = x.data.id
          u.log('Created handle: ' + I)
          var X = {
            session: qe,
            plugin: p,
            id: I,
            token: f,
            detached: !1,
            webrtcStuff: {
              started: !1,
              myStream: null,
              streamExternal: !1,
              remoteStream: null,
              mySdp: null,
              mediaConstraints: null,
              pc: null,
              dataChannelOptions: d.dataChannelOptions,
              dataChannel: {},
              dtmfSender: null,
              trickle: !0,
              iceDone: !1,
              volume: { value: null, timer: null },
              bitrate: {
                value: null,
                bsnow: null,
                bsbefore: null,
                tsnow: null,
                tsbefore: null,
                timer: null
              }
            },
            getId: function () {
              return I
            },
            getPlugin: function () {
              return p
            },
            getVolume: function () {
              return ut(I, !0)
            },
            getRemoteVolume: function () {
              return ut(I, !0)
            },
            getLocalVolume: function () {
              return ut(I, !1)
            },
            isAudioMuted: function () {
              return Fe(I, !1)
            },
            muteAudio: function () {
              return je(I, !1, !0)
            },
            unmuteAudio: function () {
              return je(I, !1, !1)
            },
            isVideoMuted: function () {
              return Fe(I, !0)
            },
            muteVideo: function () {
              return je(I, !0, !0)
            },
            unmuteVideo: function () {
              return je(I, !0, !1)
            },
            getBitrate: function () {
              return nr(I)
            },
            send: function (j) {
              De(I, j)
            },
            data: function (j) {
              $e(I, j)
            },
            dtmf: function (j) {
              Nt(I, j)
            },
            consentDialog: d.consentDialog,
            iceState: d.iceState,
            mediaState: d.mediaState,
            webrtcState: d.webrtcState,
            slowLink: d.slowLink,
            onmessage: d.onmessage,
            createOffer: function (j) {
              nt(I, !0, j)
            },
            createAnswer: function (j) {
              nt(I, !1, j)
            },
            handleRemoteJsep: function (j) {
              qt(I, j)
            },
            onlocalstream: d.onlocalstream,
            onremotestream: d.onremotestream,
            ondata: d.ondata,
            ondataopen: d.ondataopen,
            oncleanup: d.oncleanup,
            ondetached: d.ondetached,
            hangup: function (j) {
              h(I, j === !0)
            },
            detach: function (j) {
              lt(I, j)
            }
          }
          ;(D[I] = X), d.success(X)
        }),
          (v.session_id = L),
          r.send(JSON.stringify(v))
        return
      }
      u.httpAPICall(l + '/' + L, {
        verb: 'POST',
        withCredentials: A,
        body: v,
        success: function (x) {
          if ((u.debug(x), x.janus !== 'success')) {
            u.error('Ooops: ' + x.error.code + ' ' + x.error.reason),
              d.error('Ooops: ' + x.error.code + ' ' + x.error.reason)
            return
          }
          var I = x.data.id
          u.log('Created handle: ' + I)
          var X = {
            session: qe,
            plugin: p,
            id: I,
            token: f,
            detached: !1,
            webrtcStuff: {
              started: !1,
              myStream: null,
              streamExternal: !1,
              remoteStream: null,
              mySdp: null,
              mediaConstraints: null,
              pc: null,
              dataChannelOptions: d.dataChannelOptions,
              dataChannel: {},
              dtmfSender: null,
              trickle: !0,
              iceDone: !1,
              volume: { value: null, timer: null },
              bitrate: {
                value: null,
                bsnow: null,
                bsbefore: null,
                tsnow: null,
                tsbefore: null,
                timer: null
              }
            },
            getId: function () {
              return I
            },
            getPlugin: function () {
              return p
            },
            getVolume: function () {
              return ut(I, !0)
            },
            getRemoteVolume: function () {
              return ut(I, !0)
            },
            getLocalVolume: function () {
              return ut(I, !1)
            },
            isAudioMuted: function () {
              return Fe(I, !1)
            },
            muteAudio: function () {
              return je(I, !1, !0)
            },
            unmuteAudio: function () {
              return je(I, !1, !1)
            },
            isVideoMuted: function () {
              return Fe(I, !0)
            },
            muteVideo: function () {
              return je(I, !0, !0)
            },
            unmuteVideo: function () {
              return je(I, !0, !1)
            },
            getBitrate: function () {
              return nr(I)
            },
            send: function (j) {
              De(I, j)
            },
            data: function (j) {
              $e(I, j)
            },
            dtmf: function (j) {
              Nt(I, j)
            },
            consentDialog: d.consentDialog,
            iceState: d.iceState,
            mediaState: d.mediaState,
            webrtcState: d.webrtcState,
            slowLink: d.slowLink,
            onmessage: d.onmessage,
            createOffer: function (j) {
              nt(I, !0, j)
            },
            createAnswer: function (j) {
              nt(I, !1, j)
            },
            handleRemoteJsep: function (j) {
              qt(I, j)
            },
            onlocalstream: d.onlocalstream,
            onremotestream: d.onremotestream,
            ondata: d.ondata,
            ondataopen: d.ondataopen,
            oncleanup: d.oncleanup,
            ondetached: d.ondetached,
            hangup: function (j) {
              h(I, j === !0)
            },
            detach: function (j) {
              lt(I, j)
            }
          }
          ;(D[I] = X), d.success(X)
        },
        error: function (x, I) {
          u.error(x + ':', I),
            I === '' ? d.error(x + ': Is the server down?') : d.error(x + ': ' + I)
        }
      })
    }
    function De(d, p) {
      if (
        ((p = p || {}),
        (p.success = typeof p.success == 'function' ? p.success : u.noop),
        (p.error = typeof p.error == 'function' ? p.error : u.noop),
        !Y)
      ) {
        u.warn('Is the server down? (connected=false)'),
          p.error('Is the server down? (connected=false)')
        return
      }
      var g = D[d]
      if (!g || !g.webrtcStuff) {
        u.warn('Invalid handle'), p.error('Invalid handle')
        return
      }
      var m = p.message,
        f = p.jsep,
        b = u.randomString(12),
        v = { janus: 'message', body: m, transaction: b }
      if (
        (g.token && (v.token = g.token),
        w && (v.apisecret = w),
        f &&
          ((v.jsep = { type: f.type, sdp: f.sdp }),
          f.e2ee && (v.jsep.e2ee = !0),
          (f.rid_order === 'hml' || f.rid_order === 'lmh') && (v.jsep.rid_order = f.rid_order),
          f.force_relay && (v.jsep.force_relay = !0)),
        u.debug('Sending message to plugin (handle=' + d + '):'),
        u.debug(v),
        t)
      ) {
        ;(v.session_id = L),
          (v.handle_id = d),
          ($[b] = function (x) {
            if ((u.debug('Message sent!'), u.debug(x), x.janus === 'success')) {
              var I = x.plugindata
              if (!I) {
                u.warn('Request succeeded, but missing plugindata...'), p.success()
                return
              }
              u.log('Synchronous transaction successful (' + I.plugin + ')')
              var X = I.data
              u.debug(X), p.success(X)
              return
            } else if (x.janus !== 'ack') {
              x.error
                ? (u.error('Ooops: ' + x.error.code + ' ' + x.error.reason),
                  p.error(x.error.code + ' ' + x.error.reason))
                : (u.error('Unknown error'), p.error('Unknown error'))
              return
            }
            p.success()
          }),
          r.send(JSON.stringify(v))
        return
      }
      u.httpAPICall(l + '/' + L + '/' + d, {
        verb: 'POST',
        withCredentials: A,
        body: v,
        success: function (x) {
          if ((u.debug('Message sent!'), u.debug(x), x.janus === 'success')) {
            var I = x.plugindata
            if (!I) {
              u.warn('Request succeeded, but missing plugindata...'), p.success()
              return
            }
            u.log('Synchronous transaction successful (' + I.plugin + ')')
            var X = I.data
            u.debug(X), p.success(X)
            return
          } else if (x.janus !== 'ack') {
            x.error
              ? (u.error('Ooops: ' + x.error.code + ' ' + x.error.reason),
                p.error(x.error.code + ' ' + x.error.reason))
              : (u.error('Unknown error'), p.error('Unknown error'))
            return
          }
          p.success()
        },
        error: function (x, I) {
          u.error(x + ':', I), p.error(x + ': ' + I)
        }
      })
    }
    function fe(d, p) {
      if (!Y) {
        u.warn('Is the server down? (connected=false)')
        return
      }
      var g = D[d]
      if (!g || !g.webrtcStuff) {
        u.warn('Invalid handle')
        return
      }
      var m = { janus: 'trickle', candidate: p, transaction: u.randomString(12) }
      if (
        (g.token && (m.token = g.token),
        w && (m.apisecret = w),
        u.vdebug('Sending trickle candidate (handle=' + d + '):'),
        u.vdebug(m),
        t)
      ) {
        ;(m.session_id = L), (m.handle_id = d), r.send(JSON.stringify(m))
        return
      }
      u.httpAPICall(l + '/' + L + '/' + d, {
        verb: 'POST',
        withCredentials: A,
        body: m,
        success: function (f) {
          if ((u.vdebug('Candidate sent!'), u.vdebug(f), f.janus !== 'ack')) {
            u.error('Ooops: ' + f.error.code + ' ' + f.error.reason)
            return
          }
        },
        error: function (f, b) {
          u.error(f + ':', b)
        }
      })
    }
    function ce(d, p, g, m, f) {
      var b = D[d]
      if (!b || !b.webrtcStuff) {
        u.warn('Invalid handle')
        return
      }
      var v = b.webrtcStuff
      if (!v.pc) {
        u.warn('Invalid PeerConnection')
        return
      }
      var x = function (ne) {
          u.log('Received message on data channel:', ne)
          var _ = ne.target.label
          b.ondata(ne.data, _)
        },
        I = function (ne) {
          u.log('Received state change on data channel:', ne)
          var _ = ne.target.label,
            Ee = ne.target.protocol,
            ge = v.dataChannel[_] ? v.dataChannel[_].readyState : 'null'
          if ((u.log('State change on <' + _ + '> data channel: ' + ge), ge === 'open')) {
            if (v.dataChannel[_].pending && v.dataChannel[_].pending.length > 0) {
              u.log('Sending pending messages on <' + _ + '>:', v.dataChannel[_].pending.length)
              for (var P of v.dataChannel[_].pending)
                u.log('Sending data on data channel <' + _ + '>'),
                  u.debug(P),
                  v.dataChannel[_].send(P)
              v.dataChannel[_].pending = []
            }
            b.ondataopen(_, Ee)
          }
        },
        X = function (ne) {
          u.error('Got error on data channel:', ne)
        }
      if (m) v.dataChannel[p] = m
      else {
        var j = v.dataChannelOptions
        g && (j.protocol = g), (v.dataChannel[p] = v.pc.createDataChannel(p, j))
      }
      ;(v.dataChannel[p].onmessage = x),
        (v.dataChannel[p].onopen = I),
        (v.dataChannel[p].onclose = I),
        (v.dataChannel[p].onerror = X),
        (v.dataChannel[p].pending = []),
        f && v.dataChannel[p].pending.push(f)
    }
    function $e(d, p) {
      ;(p = p || {}),
        (p.success = typeof p.success == 'function' ? p.success : u.noop),
        (p.error = typeof p.error == 'function' ? p.error : u.noop)
      var g = D[d]
      if (!g || !g.webrtcStuff) {
        u.warn('Invalid handle'), p.error('Invalid handle')
        return
      }
      var m = g.webrtcStuff,
        f = p.text || p.data
      if (!f) {
        u.warn('Invalid data'), p.error('Invalid data')
        return
      }
      var b = p.label ? p.label : u.dataChanDefaultLabel
      if (!m.dataChannel[b]) {
        ce(d, b, p.protocol, !1, f, p.protocol), p.success()
        return
      }
      if (m.dataChannel[b].readyState !== 'open') {
        m.dataChannel[b].pending.push(f), p.success()
        return
      }
      u.log('Sending data on data channel <' + b + '>'),
        u.debug(f),
        m.dataChannel[b].send(f),
        p.success()
    }
    function Nt(d, p) {
      ;(p = p || {}),
        (p.success = typeof p.success == 'function' ? p.success : u.noop),
        (p.error = typeof p.error == 'function' ? p.error : u.noop)
      var g = D[d]
      if (!g || !g.webrtcStuff) {
        u.warn('Invalid handle'), p.error('Invalid handle')
        return
      }
      var m = g.webrtcStuff
      if (!m.dtmfSender) {
        if (m.pc) {
          var f = m.pc.getSenders(),
            b = f.find(function (j) {
              return j.track && j.track.kind === 'audio'
            })
          if (!b) {
            u.warn('Invalid DTMF configuration (no audio track)'),
              p.error('Invalid DTMF configuration (no audio track)')
            return
          }
          ;(m.dtmfSender = b.dtmf),
            m.dtmfSender &&
              (u.log('Created DTMF Sender'),
              (m.dtmfSender.ontonechange = function (j) {
                u.debug('Sent DTMF tone: ' + j.tone)
              }))
        }
        if (!m.dtmfSender) {
          u.warn('Invalid DTMF configuration'), p.error('Invalid DTMF configuration')
          return
        }
      }
      var v = p.dtmf
      if (!v) {
        u.warn('Invalid DTMF parameters'), p.error('Invalid DTMF parameters')
        return
      }
      var x = v.tones
      if (!x) {
        u.warn('Invalid DTMF string'), p.error('Invalid DTMF string')
        return
      }
      var I = typeof v.duration == 'number' ? v.duration : 500,
        X = typeof v.gap == 'number' ? v.gap : 50
      u.debug('Sending DTMF string ' + x + ' (duration ' + I + 'ms, gap ' + X + 'ms)'),
        m.dtmfSender.insertDTMF(x, I, X),
        p.success()
    }
    function lt(d, p) {
      ;(p = p || {}),
        (p.success = typeof p.success == 'function' ? p.success : u.noop),
        (p.error = typeof p.error == 'function' ? p.error : u.noop)
      var g = p.noRequest === !0
      u.log('Destroying handle ' + d + ' (only-locally=' + g + ')'), h(d)
      var m = D[d]
      if (!m || m.detached) {
        delete D[d], p.success()
        return
      }
      if (((m.detached = !0), g)) {
        delete D[d], p.success()
        return
      }
      if (!Y) {
        u.warn('Is the server down? (connected=false)'),
          p.error('Is the server down? (connected=false)')
        return
      }
      var f = { janus: 'detach', transaction: u.randomString(12) }
      if ((m.token && (f.token = m.token), w && (f.apisecret = w), t)) {
        ;(f.session_id = L), (f.handle_id = d), r.send(JSON.stringify(f)), delete D[d], p.success()
        return
      }
      u.httpAPICall(l + '/' + L + '/' + d, {
        verb: 'POST',
        withCredentials: A,
        body: f,
        success: function (b) {
          u.log('Destroyed handle:'),
            u.debug(b),
            b.janus !== 'success' && u.error('Ooops: ' + b.error.code + ' ' + b.error.reason),
            delete D[d],
            p.success()
        },
        error: function (b, v) {
          u.error(b + ':', v), delete D[d], p.success()
        }
      })
    }
    function Ue(d, p, g, m, f) {
      var b = D[d]
      if (!b || !b.webrtcStuff) {
        u.warn('Invalid handle'), m.stream || u.stopAllTracks(f), m.error('Invalid handle')
        return
      }
      var v = b.webrtcStuff
      u.debug('streamsDone:', f),
        f &&
          (u.debug('  -- Audio tracks:', f.getAudioTracks()),
          u.debug('  -- Video tracks:', f.getVideoTracks()))
      var x = !1
      if (!v.myStream || !g.update || (v.streamExternal && !g.replaceAudio && !g.replaceVideo))
        (v.myStream = f), (x = !0)
      else {
        if (
          ((!g.update && R(g)) || (g.update && (g.addAudio || g.replaceAudio))) &&
          f.getAudioTracks() &&
          f.getAudioTracks().length
        )
          if ((v.myStream.addTrack(f.getAudioTracks()[0]), u.unifiedPlan)) {
            u.log(
              (g.replaceAudio ? 'Replacing' : 'Adding') + ' audio track:',
              f.getAudioTracks()[0]
            )
            var I = null
            const P = v.pc.getTransceivers()
            if (P && P.length > 0) {
              for (const oe of P)
                if (
                  (oe.sender && oe.sender.track && oe.sender.track.kind === 'audio') ||
                  (oe.receiver && oe.receiver.track && oe.receiver.track.kind === 'audio')
                ) {
                  I = oe
                  break
                }
            }
            I && I.sender
              ? I.sender.replaceTrack(f.getAudioTracks()[0])
              : v.pc.addTrack(f.getAudioTracks()[0], f)
          } else
            u.log(
              (g.replaceAudio ? 'Replacing' : 'Adding') + ' audio track:',
              f.getAudioTracks()[0]
            ),
              v.pc.addTrack(f.getAudioTracks()[0], f)
        if (
          ((!g.update && Z(g)) || (g.update && (g.addVideo || g.replaceVideo))) &&
          f.getVideoTracks() &&
          f.getVideoTracks().length
        )
          if ((v.myStream.addTrack(f.getVideoTracks()[0]), u.unifiedPlan)) {
            u.log(
              (g.replaceVideo ? 'Replacing' : 'Adding') + ' video track:',
              f.getVideoTracks()[0]
            )
            var X = null
            const P = v.pc.getTransceivers()
            if (P && P.length > 0) {
              for (const oe of P)
                if (
                  (oe.sender && oe.sender.track && oe.sender.track.kind === 'video') ||
                  (oe.receiver && oe.receiver.track && oe.receiver.track.kind === 'video')
                ) {
                  X = oe
                  break
                }
            }
            X && X.sender
              ? X.sender.replaceTrack(f.getVideoTracks()[0])
              : v.pc.addTrack(f.getVideoTracks()[0], f)
          } else
            u.log(
              (g.replaceVideo ? 'Replacing' : 'Adding') + ' video track:',
              f.getVideoTracks()[0]
            ),
              v.pc.addTrack(f.getVideoTracks()[0], f)
      }
      if (!v.pc) {
        var j = { iceServers: q, iceTransportPolicy: s, bundlePolicy: c }
        u.webRTCAdapter.browserDetails.browser === 'chrome' &&
          (j.sdpSemantics = u.webRTCAdapter.browserDetails.version < 72 ? 'plan-b' : 'unified-plan')
        var ne = { optional: [{ DtlsSrtpKeyAgreement: !0 }] }
        if (
          (V && ne.optional.push({ googIPv6: !0 }),
          m.rtcConstraints && typeof m.rtcConstraints == 'object')
        ) {
          u.debug('Adding custom PeerConnection constraints:', m.rtcConstraints)
          for (var _ in m.rtcConstraints) ne.optional.push(m.rtcConstraints[_])
        }
        u.webRTCAdapter.browserDetails.browser === 'edge' && (j.bundlePolicy = 'max-bundle'),
          RTCRtpSender &&
            (RTCRtpSender.prototype.createEncodedStreams ||
              (RTCRtpSender.prototype.createEncodedAudioStreams &&
                RTCRtpSender.prototype.createEncodedVideoStreams)) &&
            (m.senderTransforms || m.receiverTransforms) &&
            ((v.senderTransforms = m.senderTransforms),
            (v.receiverTransforms = m.receiverTransforms),
            (j.forceEncodedAudioInsertableStreams = !0),
            (j.forceEncodedVideoInsertableStreams = !0),
            (j.encodedInsertableStreams = !0)),
          u.log('Creating PeerConnection'),
          u.debug(ne),
          (v.pc = new RTCPeerConnection(j, ne)),
          u.debug(v.pc),
          v.pc.getStats && ((v.volume = {}), (v.bitrate.value = '0 kbits/sec')),
          u.log('Preparing local SDP and gathering candidates (trickle=' + v.trickle + ')'),
          (v.pc.oniceconnectionstatechange = function () {
            v.pc && b.iceState(v.pc.iceConnectionState)
          }),
          (v.pc.onicecandidate = function (P) {
            if (
              !P.candidate ||
              (u.webRTCAdapter.browserDetails.browser === 'edge' &&
                P.candidate.candidate.indexOf('endOfCandidates') > 0)
            )
              u.log('End of candidates.'),
                (v.iceDone = !0),
                v.trickle === !0 ? fe(d, { completed: !0 }) : ct(d, m)
            else {
              var oe = {
                candidate: P.candidate.candidate,
                sdpMid: P.candidate.sdpMid,
                sdpMLineIndex: P.candidate.sdpMLineIndex
              }
              v.trickle === !0 && fe(d, oe)
            }
          }),
          (v.pc.ontrack = function (P) {
            if (
              (u.log('Handling Remote Track'),
              u.debug(P),
              !!P.streams &&
                ((v.remoteStream = P.streams[0]),
                b.onremotestream(v.remoteStream),
                !P.track.onended))
            ) {
              if (v.receiverTransforms) {
                var oe = null
                RTCRtpSender.prototype.createEncodedStreams
                  ? (oe = P.receiver.createEncodedStreams())
                  : (RTCRtpSender.prototype.createAudioEncodedStreams ||
                      RTCRtpSender.prototype.createEncodedVideoStreams) &&
                    (P.track.kind === 'audio' && v.receiverTransforms.audio
                      ? (oe = P.receiver.createEncodedAudioStreams())
                      : P.track.kind === 'video' &&
                        v.receiverTransforms.video &&
                        (oe = P.receiver.createEncodedVideoStreams())),
                  oe &&
                    (console.log(oe),
                    oe.readableStream && oe.writableStream
                      ? oe.readableStream
                          .pipeThrough(v.receiverTransforms[P.track.kind])
                          .pipeTo(oe.writableStream)
                      : oe.readable &&
                        oe.writable &&
                        oe.readable
                          .pipeThrough(v.receiverTransforms[P.track.kind])
                          .pipeTo(oe.writable))
              }
              var me = null
              u.log('Adding onended callback to track:', P.track),
                (P.track.onended = function (xe) {
                  u.log('Remote track removed:', xe),
                    v.remoteStream &&
                      (clearTimeout(me),
                      v.remoteStream.removeTrack(xe.target),
                      b.onremotestream(v.remoteStream))
                }),
                (P.track.onmute = function (xe) {
                  u.log('Remote track muted:', xe),
                    v.remoteStream &&
                      me == null &&
                      (me = setTimeout(function () {
                        u.log('Removing remote track'),
                          v.remoteStream &&
                            (v.remoteStream.removeTrack(xe.target),
                            b.onremotestream(v.remoteStream)),
                          (me = null)
                      }, 3 * 840))
                }),
                (P.track.onunmute = function (xe) {
                  if ((u.log('Remote track flowing again:', xe), me != null))
                    clearTimeout(me), (me = null)
                  else
                    try {
                      v.remoteStream.addTrack(xe.target), b.onremotestream(v.remoteStream)
                    } catch (ve) {
                      u.error(ve)
                    }
                })
            }
          })
      }
      if (x && f) {
        u.log('Adding local stream')
        var Ee = (m.simulcast === !0 || m.simulcast2 === !0) && u.unifiedPlan,
          ge = m.svc
        f.getTracks().forEach(function (P) {
          u.log('Adding local track:', P)
          var oe = null
          if ((!Ee && !ge) || P.kind === 'audio') oe = v.pc.addTrack(P, f)
          else if (Ee) {
            u.log('Enabling rid-based simulcasting:', P)
            let xe = G(m.simulcastMaxBitrates),
              ve = v.pc.addTransceiver(P, {
                direction: 'sendrecv',
                streams: [f],
                sendEncodings: m.sendEncodings || [
                  { rid: 'h', active: !0, maxBitrate: xe.high },
                  { rid: 'm', active: !0, maxBitrate: xe.medium, scaleResolutionDownBy: 2 },
                  { rid: 'l', active: !0, maxBitrate: xe.low, scaleResolutionDownBy: 4 }
                ]
              })
            ve && (oe = ve.sender)
          } else {
            u.log('Enabling SVC (' + ge + '):', P)
            let xe = v.pc.addTransceiver(P, {
              direction: 'sendrecv',
              streams: [f],
              sendEncodings: [{ scalabilityMode: ge }]
            })
            xe && (oe = xe.sender)
          }
          if (oe && v.senderTransforms) {
            var me = null
            RTCRtpSender.prototype.createEncodedStreams
              ? (me = oe.createEncodedStreams())
              : (RTCRtpSender.prototype.createAudioEncodedStreams ||
                  RTCRtpSender.prototype.createEncodedVideoStreams) &&
                (oe.track.kind === 'audio' && v.senderTransforms.audio
                  ? (me = oe.createEncodedAudioStreams())
                  : oe.track.kind === 'video' &&
                    v.senderTransforms.video &&
                    (me = oe.createEncodedVideoStreams())),
              me &&
                (console.log(me),
                me.readableStream && me.writableStream
                  ? me.readableStream
                      .pipeThrough(v.senderTransforms[oe.track.kind])
                      .pipeTo(me.writableStream)
                  : me.readable &&
                    me.writable &&
                    me.readable.pipeThrough(v.senderTransforms[oe.track.kind]).pipeTo(me.writable))
          }
        })
      }
      H(g) &&
        !v.dataChannel[u.dataChanDefaultLabel] &&
        (u.log('Creating default data channel'),
        ce(d, u.dataChanDefaultLabel, null, !1),
        (v.pc.ondatachannel = function (P) {
          u.log('Data channel created by Janus:', P),
            ce(d, P.channel.label, P.channel.protocol, P.channel)
        })),
        v.myStream && b.onlocalstream(v.myStream),
        p
          ? v.pc.setRemoteDescription(p).then(function () {
              if (
                (u.log('Remote description accepted!'),
                (v.remoteSdp = p.sdp),
                v.candidates && v.candidates.length > 0)
              ) {
                for (var P = 0; P < v.candidates.length; P++) {
                  var oe = v.candidates[P]
                  u.debug('Adding remote candidate:', oe),
                    !oe || oe.completed === !0
                      ? v.pc.addIceCandidate(u.endOfCandidates)
                      : v.pc.addIceCandidate(oe)
                }
                v.candidates = []
              }
              Dt(d, g, m)
            }, m.error)
          : Er(d, g, m)
    }
    function nt(d, p, g) {
      ;(g = g || {}),
        (g.success = typeof g.success == 'function' ? g.success : u.noop),
        (g.error = typeof g.error == 'function' ? g.error : Lr)
      var m = g.jsep
      if (p && m) {
        u.error('Provided a JSEP to a createOffer'), g.error('Provided a JSEP to a createOffer')
        return
      } else if (!p && (!m || !m.type || !m.sdp)) {
        u.error('A valid JSEP is required for createAnswer'),
          g.error('A valid JSEP is required for createAnswer')
        return
      }
      g.media = typeof g.media == 'object' && g.media ? g.media : { audio: !0, video: !0 }
      var f = g.media,
        b = D[d]
      if (!b || !b.webrtcStuff) {
        u.warn('Invalid handle'), g.error('Invalid handle')
        return
      }
      var v = b.webrtcStuff
      if (((v.trickle = ie(g.trickle)), !v.pc))
        (f.update = !1), (f.keepAudio = !1), (f.keepVideo = !1)
      else {
        if ((u.log('Updating existing media session'), (f.update = !0), g.stream))
          g.stream !== v.myStream && u.log('Renegotiation involves a new external stream')
        else {
          if (f.addAudio) {
            if (
              ((f.keepAudio = !1),
              (f.replaceAudio = !1),
              (f.removeAudio = !1),
              (f.audioSend = !0),
              v.myStream && v.myStream.getAudioTracks() && v.myStream.getAudioTracks().length)
            ) {
              u.error("Can't add audio stream, there already is one"),
                g.error("Can't add audio stream, there already is one")
              return
            }
          } else
            f.removeAudio
              ? ((f.keepAudio = !1), (f.replaceAudio = !1), (f.addAudio = !1), (f.audioSend = !1))
              : f.replaceAudio &&
                ((f.keepAudio = !1), (f.addAudio = !1), (f.removeAudio = !1), (f.audioSend = !0))
          if (
            (v.myStream
              ? !v.myStream.getAudioTracks() || v.myStream.getAudioTracks().length === 0
                ? (f.replaceAudio &&
                    ((f.keepAudio = !1),
                    (f.replaceAudio = !1),
                    (f.addAudio = !0),
                    (f.audioSend = !0)),
                  R(f) && ((f.keepAudio = !1), (f.addAudio = !0)))
                : R(f) && !f.removeAudio && !f.replaceAudio && (f.keepAudio = !0)
              : (f.replaceAudio &&
                  ((f.keepAudio = !1),
                  (f.replaceAudio = !1),
                  (f.addAudio = !0),
                  (f.audioSend = !0)),
                R(f) && ((f.keepAudio = !1), (f.addAudio = !0))),
            f.addVideo)
          ) {
            if (
              ((f.keepVideo = !1),
              (f.replaceVideo = !1),
              (f.removeVideo = !1),
              (f.videoSend = !0),
              v.myStream && v.myStream.getVideoTracks() && v.myStream.getVideoTracks().length)
            ) {
              u.error("Can't add video stream, there already is one"),
                g.error("Can't add video stream, there already is one")
              return
            }
          } else
            f.removeVideo
              ? ((f.keepVideo = !1), (f.replaceVideo = !1), (f.addVideo = !1), (f.videoSend = !1))
              : f.replaceVideo &&
                ((f.keepVideo = !1), (f.addVideo = !1), (f.removeVideo = !1), (f.videoSend = !0))
          v.myStream
            ? !v.myStream.getVideoTracks() || v.myStream.getVideoTracks().length === 0
              ? (f.replaceVideo &&
                  ((f.keepVideo = !1),
                  (f.replaceVideo = !1),
                  (f.addVideo = !0),
                  (f.videoSend = !0)),
                Z(f) && ((f.keepVideo = !1), (f.addVideo = !0)))
              : Z(f) && !f.removeVideo && !f.replaceVideo && (f.keepVideo = !0)
            : (f.replaceVideo &&
                ((f.keepVideo = !1), (f.replaceVideo = !1), (f.addVideo = !0), (f.videoSend = !0)),
              Z(f) && ((f.keepVideo = !1), (f.addVideo = !0))),
            f.addData && (f.data = !0)
        }
        if (R(f) && f.keepAudio && Z(f) && f.keepVideo) {
          b.consentDialog(!1), Ue(d, m, f, g, v.myStream)
          return
        }
      }
      if (
        f.update &&
        (!v.streamExternal || (v.streamExternal && (f.replaceAudio || f.replaceVideo)))
      ) {
        if (f.removeAudio || f.replaceAudio) {
          if (v.myStream && v.myStream.getAudioTracks() && v.myStream.getAudioTracks().length) {
            var x = v.myStream.getAudioTracks()[0]
            u.log('Removing audio track:', x), v.myStream.removeTrack(x)
            try {
              x.stop()
            } catch {}
          }
          if (v.pc.getSenders() && v.pc.getSenders().length) {
            var I = !0
            if ((f.replaceAudio && u.unifiedPlan && (I = !1), I))
              for (var X of v.pc.getSenders())
                X &&
                  X.track &&
                  X.track.kind === 'audio' &&
                  (u.log('Removing audio sender:', X), v.pc.removeTrack(X))
          }
        }
        if (f.removeVideo || f.replaceVideo) {
          if (v.myStream && v.myStream.getVideoTracks() && v.myStream.getVideoTracks().length) {
            var j = v.myStream.getVideoTracks()[0]
            u.log('Removing video track:', j), v.myStream.removeTrack(j)
            try {
              j.stop()
            } catch {}
          }
          if (v.pc.getSenders() && v.pc.getSenders().length) {
            var ne = !0
            if ((f.replaceVideo && u.unifiedPlan && (ne = !1), ne))
              for (var _ of v.pc.getSenders())
                _ &&
                  _.track &&
                  _.track.kind === 'video' &&
                  (u.log('Removing video sender:', _), v.pc.removeTrack(_))
          }
        }
      }
      if (g.stream) {
        var Ee = g.stream
        u.log('MediaStream provided by the application'),
          u.debug(Ee),
          f.update &&
            v.myStream &&
            v.myStream !== g.stream &&
            !v.streamExternal &&
            !f.replaceAudio &&
            !f.replaceVideo &&
            (u.stopAllTracks(v.myStream), (v.myStream = null)),
          (v.streamExternal = !0),
          b.consentDialog(!1),
          Ue(d, m, f, g, Ee)
        return
      }
      if (R(f) || Z(f)) {
        if (!u.isGetUserMediaAvailable()) {
          g.error('getUserMedia not available')
          return
        }
        var ge = { mandatory: {}, optional: [] }
        b.consentDialog(!0)
        var P = R(f)
        P && f && typeof f.audio == 'object' && (P = f.audio)
        var oe = Z(f)
        if (oe && f) {
          var me = g.simulcast === !0 || g.simulcast2 === !0,
            xe = g.svc
          if (
            ((me || xe) && !m && !f.video && (f.video = 'hires'),
            f.video && f.video != 'screen' && f.video != 'window')
          )
            if (typeof f.video == 'object') oe = f.video
            else {
              var ve = 0,
                Be = 0
              f.video === 'lowres'
                ? ((Be = 240), (ve = 320))
                : f.video === 'lowres-16:9'
                ? ((Be = 180), (ve = 320))
                : f.video === 'hires' || f.video === 'hires-16:9' || f.video === 'hdres'
                ? ((Be = 720), (ve = 1280))
                : f.video === 'fhdres'
                ? ((Be = 1080), (ve = 1920))
                : f.video === '4kres'
                ? ((Be = 2160), (ve = 3840))
                : f.video === 'stdres'
                ? ((Be = 480), (ve = 640))
                : f.video === 'stdres-16:9'
                ? ((Be = 360), (ve = 640))
                : (u.log('Default video setting is stdres 4:3'), (Be = 480), (ve = 640)),
                u.log('Adding media constraint:', f.video),
                (oe = { height: { ideal: Be }, width: { ideal: ve } }),
                u.log('Adding video constraint:', oe)
            }
          else if (f.video === 'screen' || f.video === 'window') {
            if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
              ;(ge.video = {}),
                f.screenshareFrameRate && (ge.video.frameRate = f.screenshareFrameRate),
                f.screenshareHeight && (ge.video.height = f.screenshareHeight),
                f.screenshareWidth && (ge.video.width = f.screenshareWidth),
                (ge.audio = f.captureDesktopAudio),
                navigator.mediaDevices.getDisplayMedia(ge).then(
                  function (Qe) {
                    b.consentDialog(!1),
                      R(f) && !f.keepAudio
                        ? navigator.mediaDevices
                            .getUserMedia({ audio: !0, video: !1 })
                            .then(function (Le) {
                              Qe.addTrack(Le.getAudioTracks()[0]), Ue(d, m, f, g, Qe)
                            })
                        : Ue(d, m, f, g, Qe)
                  },
                  function (Qe) {
                    b.consentDialog(!1), g.error(Qe)
                  }
                )
              return
            }
            const bt = function (Qe, Le) {
                b.consentDialog(!1), Qe ? g.error(Qe) : Ue(d, m, f, g, Le)
              },
              Yr = function (Qe, Le, Tr) {
                u.log('Adding media constraint (screen capture)'),
                  u.debug(Qe),
                  navigator.mediaDevices
                    .getUserMedia(Qe)
                    .then(function (Ct) {
                      Tr
                        ? navigator.mediaDevices
                            .getUserMedia({ audio: !0, video: !1 })
                            .then(function (lo) {
                              Ct.addTrack(lo.getAudioTracks()[0]), Le(null, Ct)
                            })
                        : Le(null, Ct)
                    })
                    .catch(function (Ct) {
                      b.consentDialog(!1), Le(Ct)
                    })
              }
            if (u.webRTCAdapter.browserDetails.browser === 'chrome') {
              var dn = u.webRTCAdapter.browserDetails.version,
                Ql = 33
              window.navigator.userAgent.match('Linux') && (Ql = 35),
                dn >= 26 && dn <= Ql
                  ? ((ge = {
                      video: {
                        mandatory: {
                          googLeakyBucket: !0,
                          maxWidth: window.screen.width,
                          maxHeight: window.screen.height,
                          minFrameRate: f.screenshareFrameRate,
                          maxFrameRate: f.screenshareFrameRate,
                          chromeMediaSource: 'screen'
                        }
                      },
                      audio: R(f) && !f.keepAudio
                    }),
                    Yr(ge, bt))
                  : u.extension.getScreen(function (Qe, Le) {
                      if (Qe) return b.consentDialog(!1), g.error(Qe)
                      ;(ge = {
                        audio: !1,
                        video: {
                          mandatory: {
                            chromeMediaSource: 'desktop',
                            maxWidth: window.screen.width,
                            maxHeight: window.screen.height,
                            minFrameRate: f.screenshareFrameRate,
                            maxFrameRate: f.screenshareFrameRate
                          },
                          optional: [{ googLeakyBucket: !0 }, { googTemporalLayeredScreencast: !0 }]
                        }
                      }),
                        (ge.video.mandatory.chromeMediaSourceId = Le),
                        Yr(ge, bt, R(f) && !f.keepAudio)
                    })
            } else if (u.webRTCAdapter.browserDetails.browser === 'firefox')
              if (u.webRTCAdapter.browserDetails.version >= 33)
                (ge = {
                  video: { mozMediaSource: f.video, mediaSource: f.video },
                  audio: R(f) && !f.keepAudio
                }),
                  Yr(ge, function (Qe, Le) {
                    if ((bt(Qe, Le), !Qe))
                      var Tr = Le.currentTime,
                        Ct = window.setInterval(function () {
                          Le || window.clearInterval(Ct),
                            Le.currentTime == Tr &&
                              (window.clearInterval(Ct), Le.onended && Le.onended()),
                            (Tr = Le.currentTime)
                        }, 500)
                  })
              else {
                var Ll = new Error('NavigatorUserMediaError')
                ;(Ll.name =
                  'Your version of Firefox does not support screen sharing, please install Firefox 33 (or more recent versions)'),
                  b.consentDialog(!1),
                  g.error(Ll)
                return
              }
            return
          }
        }
        ;(!f || f.video !== 'screen') &&
          navigator.mediaDevices
            .enumerateDevices()
            .then(function (bt) {
              var Yr = bt.some(function (Pt) {
                  return Pt.kind === 'audioinput'
                }),
                Qe =
                  W(f) ||
                  bt.some(function (Pt) {
                    return Pt.kind === 'videoinput'
                  }),
                Le = R(f),
                Tr = Z(f),
                Ct = N(f),
                lo = te(f)
              if (Le || Tr || Ct || lo) {
                var Yl = Le ? Yr : !1,
                  kl = Tr ? Qe : !1
                if (!Yl && !kl) return b.consentDialog(!1), g.error('No capture device found'), !1
                if (!Yl && Ct)
                  return (
                    b.consentDialog(!1),
                    g.error('Audio capture is required, but no capture device found'),
                    !1
                  )
                if (!kl && lo)
                  return (
                    b.consentDialog(!1),
                    g.error('Video capture is required, but no capture device found'),
                    !1
                  )
              }
              var qo = { audio: Yr && !f.keepAudio ? P : !1, video: Qe && !f.keepVideo ? oe : !1 }
              u.debug('getUserMedia constraints', qo),
                !qo.audio && !qo.video
                  ? (b.consentDialog(!1), Ue(d, m, f, g, Ee))
                  : navigator.mediaDevices
                      .getUserMedia(qo)
                      .then(function (Pt) {
                        b.consentDialog(!1), Ue(d, m, f, g, Pt)
                      })
                      .catch(function (Pt) {
                        b.consentDialog(!1),
                          g.error({ code: Pt.code, name: Pt.name, message: Pt.message })
                      })
            })
            .catch(function (bt) {
              b.consentDialog(!1), g.error(bt)
            })
      } else Ue(d, m, f, g)
    }
    function qt(d, p) {
      ;(p = p || {}),
        (p.success = typeof p.success == 'function' ? p.success : u.noop),
        (p.error = typeof p.error == 'function' ? p.error : Lr),
        (p.customizeSdp = typeof p.customizeSdp == 'function' ? p.customizeSdp : u.noop)
      var g = p.jsep,
        m = D[d]
      if (!m || !m.webrtcStuff) {
        u.warn('Invalid handle'), p.error('Invalid handle')
        return
      }
      var f = m.webrtcStuff
      if (g) {
        if (!f.pc) {
          u.warn(
            'Wait, no PeerConnection?? if this is an answer, use createAnswer and not handleRemoteJsep'
          ),
            p.error(
              'No PeerConnection: if this is an answer, use createAnswer and not handleRemoteJsep'
            )
          return
        }
        p.customizeSdp(g),
          f.pc.setRemoteDescription(g).then(function () {
            if (
              (u.log('Remote description accepted!'),
              (f.remoteSdp = g.sdp),
              f.candidates && f.candidates.length > 0)
            ) {
              for (var b = 0; b < f.candidates.length; b++) {
                var v = f.candidates[b]
                u.debug('Adding remote candidate:', v),
                  !v || v.completed === !0
                    ? f.pc.addIceCandidate(u.endOfCandidates)
                    : f.pc.addIceCandidate(v)
              }
              f.candidates = []
            }
            p.success()
          }, p.error)
      } else p.error('Invalid JSEP')
    }
    function Er(d, p, g) {
      ;(g = g || {}),
        (g.success = typeof g.success == 'function' ? g.success : u.noop),
        (g.error = typeof g.error == 'function' ? g.error : u.noop),
        (g.customizeSdp = typeof g.customizeSdp == 'function' ? g.customizeSdp : u.noop)
      var m = D[d]
      if (!m || !m.webrtcStuff) {
        u.warn('Invalid handle'), g.error('Invalid handle')
        return
      }
      var f = m.webrtcStuff,
        b = g.simulcast === !0
      b
        ? u.log('Creating offer (iceDone=' + f.iceDone + ', simulcast=' + b + ')')
        : u.log('Creating offer (iceDone=' + f.iceDone + ')')
      var v = {}
      if (u.unifiedPlan) {
        var x = null,
          I = null,
          X = f.pc.getTransceivers()
        if (X && X.length > 0)
          for (var j of X) {
            if (
              (j.sender && j.sender.track && j.sender.track.kind === 'audio') ||
              (j.receiver && j.receiver.track && j.receiver.track.kind === 'audio')
            ) {
              x || (x = j)
              continue
            }
            if (
              (j.sender && j.sender.track && j.sender.track.kind === 'video') ||
              (j.receiver && j.receiver.track && j.receiver.track.kind === 'video')
            ) {
              I || (I = j)
              continue
            }
          }
        var ne = R(p),
          _ = k(p)
        !ne && !_
          ? p.removeAudio &&
            x &&
            (x.setDirection ? x.setDirection('inactive') : (x.direction = 'inactive'),
            u.log('Setting audio transceiver to inactive:', x))
          : ne && _
          ? x &&
            (x.setDirection ? x.setDirection('sendrecv') : (x.direction = 'sendrecv'),
            u.log('Setting audio transceiver to sendrecv:', x))
          : ne && !_
          ? x &&
            (x.setDirection ? x.setDirection('sendonly') : (x.direction = 'sendonly'),
            u.log('Setting audio transceiver to sendonly:', x))
          : !ne &&
            _ &&
            (x
              ? (x.setDirection ? x.setDirection('recvonly') : (x.direction = 'recvonly'),
                u.log('Setting audio transceiver to recvonly:', x))
              : ((x = f.pc.addTransceiver('audio', { direction: 'recvonly' })),
                u.log('Adding recvonly audio transceiver:', x)))
        var Ee = Z(p),
          ge = U(p)
        !Ee && !ge
          ? p.removeVideo &&
            I &&
            (I.setDirection ? I.setDirection('inactive') : (I.direction = 'inactive'),
            u.log('Setting video transceiver to inactive:', I))
          : Ee && ge
          ? I &&
            (I.setDirection ? I.setDirection('sendrecv') : (I.direction = 'sendrecv'),
            u.log('Setting video transceiver to sendrecv:', I))
          : Ee && !ge
          ? I &&
            (I.setDirection ? I.setDirection('sendonly') : (I.direction = 'sendonly'),
            u.log('Setting video transceiver to sendonly:', I))
          : !Ee &&
            ge &&
            (I
              ? (I.setDirection ? I.setDirection('recvonly') : (I.direction = 'recvonly'),
                u.log('Setting video transceiver to recvonly:', I))
              : ((I = f.pc.addTransceiver('video', { direction: 'recvonly' })),
                u.log('Adding recvonly video transceiver:', I)))
      } else (v.offerToReceiveAudio = k(p)), (v.offerToReceiveVideo = U(p))
      var P = g.iceRestart === !0
      P && (v.iceRestart = !0), u.debug(v)
      var oe = Z(p)
      if (oe && b && u.webRTCAdapter.browserDetails.browser === 'firefox') {
        u.log('Enabling Simulcasting for Firefox (RID)')
        var me = f.pc.getSenders().find(function (Be) {
          return Be.track && Be.track.kind === 'video'
        })
        if (me) {
          var xe = me.getParameters()
          xe || (xe = {})
          var ve = G(g.simulcastMaxBitrates)
          ;(xe.encodings = g.sendEncodings || [
            { rid: 'h', active: !0, maxBitrate: ve.high },
            { rid: 'm', active: !0, maxBitrate: ve.medium, scaleResolutionDownBy: 2 },
            { rid: 'l', active: !0, maxBitrate: ve.low, scaleResolutionDownBy: 4 }
          ]),
            me.setParameters(xe)
        }
      }
      f.pc.createOffer(v).then(function (Be) {
        u.debug(Be)
        var dn = { type: Be.type, sdp: Be.sdp }
        if (
          (g.customizeSdp(dn),
          (Be.sdp = dn.sdp),
          u.log('Setting local description'),
          oe &&
            b &&
            !u.unifiedPlan &&
            (u.webRTCAdapter.browserDetails.browser === 'chrome' ||
              u.webRTCAdapter.browserDetails.browser === 'safari') &&
            (u.log('Enabling Simulcasting for Chrome (SDP munging)'), (Be.sdp = E(Be.sdp))),
          (f.mySdp = { type: 'offer', sdp: Be.sdp }),
          f.pc.setLocalDescription(Be).catch(g.error),
          (f.mediaConstraints = v),
          !f.iceDone && !f.trickle)
        ) {
          u.log('Waiting for all candidates...')
          return
        }
        ;(f.senderTransforms || f.receiverTransforms) && (Be.e2ee = !0), g.success(Be)
      }, g.error)
    }
    function Dt(d, p, g) {
      ;(g = g || {}),
        (g.success = typeof g.success == 'function' ? g.success : u.noop),
        (g.error = typeof g.error == 'function' ? g.error : u.noop),
        (g.customizeSdp = typeof g.customizeSdp == 'function' ? g.customizeSdp : u.noop)
      var m = D[d]
      if (!m || !m.webrtcStuff) {
        u.warn('Invalid handle'), g.error('Invalid handle')
        return
      }
      var f = m.webrtcStuff,
        b = g.simulcast === !0 || g.simulcast2 === !0
      b
        ? u.log('Creating answer (iceDone=' + f.iceDone + ', simulcast=' + b + ')')
        : u.log('Creating answer (iceDone=' + f.iceDone + ')')
      var v = null
      if (u.unifiedPlan) {
        v = {}
        var x = null,
          I = null,
          X = f.pc.getTransceivers()
        if (X && X.length > 0)
          for (var j of X) {
            if (
              (j.sender && j.sender.track && j.sender.track.kind === 'audio') ||
              (j.receiver && j.receiver.track && j.receiver.track.kind === 'audio')
            ) {
              x || (x = j)
              continue
            }
            if (
              (j.sender && j.sender.track && j.sender.track.kind === 'video') ||
              (j.receiver && j.receiver.track && j.receiver.track.kind === 'video')
            ) {
              I || (I = j)
              continue
            }
          }
        var ne = R(p),
          _ = k(p)
        if (!ne && !_) {
          if (p.removeAudio && x)
            try {
              x.setDirection ? x.setDirection('inactive') : (x.direction = 'inactive'),
                u.log('Setting audio transceiver to inactive:', x)
            } catch (ve) {
              u.error(ve)
            }
        } else if (ne && _) {
          if (x)
            try {
              x.setDirection ? x.setDirection('sendrecv') : (x.direction = 'sendrecv'),
                u.log('Setting audio transceiver to sendrecv:', x)
            } catch (ve) {
              u.error(ve)
            }
        } else if (ne && !_)
          try {
            x &&
              (x.setDirection ? x.setDirection('sendonly') : (x.direction = 'sendonly'),
              u.log('Setting audio transceiver to sendonly:', x))
          } catch (ve) {
            u.error(ve)
          }
        else if (!ne && _)
          if (x)
            try {
              x.setDirection ? x.setDirection('recvonly') : (x.direction = 'recvonly'),
                u.log('Setting audio transceiver to recvonly:', x)
            } catch (ve) {
              u.error(ve)
            }
          else
            (x = f.pc.addTransceiver('audio', { direction: 'recvonly' })),
              u.log('Adding recvonly audio transceiver:', x)
        var Ee = Z(p),
          ge = U(p)
        if (!Ee && !ge) {
          if (p.removeVideo && I)
            try {
              I.setDirection ? I.setDirection('inactive') : (I.direction = 'inactive'),
                u.log('Setting video transceiver to inactive:', I)
            } catch (ve) {
              u.error(ve)
            }
        } else if (Ee && ge) {
          if (I)
            try {
              I.setDirection ? I.setDirection('sendrecv') : (I.direction = 'sendrecv'),
                u.log('Setting video transceiver to sendrecv:', I)
            } catch (ve) {
              u.error(ve)
            }
        } else if (Ee && !ge) {
          if (I)
            try {
              I.setDirection ? I.setDirection('sendonly') : (I.direction = 'sendonly'),
                u.log('Setting video transceiver to sendonly:', I)
            } catch (ve) {
              u.error(ve)
            }
        } else if (!Ee && ge)
          if (I)
            try {
              I.setDirection ? I.setDirection('recvonly') : (I.direction = 'recvonly'),
                u.log('Setting video transceiver to recvonly:', I)
            } catch (ve) {
              u.error(ve)
            }
          else
            (I = f.pc.addTransceiver('video', { direction: 'recvonly' })),
              u.log('Adding recvonly video transceiver:', I)
      } else u.webRTCAdapter.browserDetails.browser === 'firefox' || u.webRTCAdapter.browserDetails.browser === 'edge' ? (v = { offerToReceiveAudio: k(p), offerToReceiveVideo: U(p) }) : (v = { mandatory: { OfferToReceiveAudio: k(p), OfferToReceiveVideo: U(p) } })
      u.debug(v)
      var P = Z(p)
      if (P && b && u.webRTCAdapter.browserDetails.browser === 'firefox') {
        u.log('Enabling Simulcasting for Firefox (RID)')
        var oe = f.pc.getSenders()[1]
        u.log(oe)
        var me = oe.getParameters()
        u.log(me)
        var xe = G(g.simulcastMaxBitrates)
        oe.setParameters({
          encodings: g.sendEncodings || [
            { rid: 'h', active: !0, maxBitrate: xe.high },
            { rid: 'm', active: !0, maxBitrate: xe.medium, scaleResolutionDownBy: 2 },
            { rid: 'l', active: !0, maxBitrate: xe.low, scaleResolutionDownBy: 4 }
          ]
        })
      }
      f.pc.createAnswer(v).then(function (ve) {
        u.debug(ve)
        var Be = { type: ve.type, sdp: ve.sdp }
        if (
          (g.customizeSdp(Be),
          (ve.sdp = Be.sdp),
          u.log('Setting local description'),
          P &&
            b &&
            !u.unifiedPlan &&
            u.webRTCAdapter.browserDetails.browser === 'chrome' &&
            u.warn(
              'simulcast=true, but this is an answer, and video breaks in Chrome if we enable it'
            ),
          (f.mySdp = { type: 'answer', sdp: ve.sdp }),
          f.pc.setLocalDescription(ve).catch(g.error),
          (f.mediaConstraints = v),
          !f.iceDone && !f.trickle)
        ) {
          u.log('Waiting for all candidates...')
          return
        }
        ;(f.senderTransforms || f.receiverTransforms) && (ve.e2ee = !0), g.success(ve)
      }, g.error)
    }
    function ct(d, p) {
      ;(p = p || {}),
        (p.success = typeof p.success == 'function' ? p.success : u.noop),
        (p.error = typeof p.error == 'function' ? p.error : u.noop)
      var g = D[d]
      if (!g || !g.webrtcStuff) {
        u.warn('Invalid handle, not sending anything')
        return
      }
      var m = g.webrtcStuff
      if ((u.log('Sending offer/answer SDP...'), !m.mySdp)) {
        u.warn('Local SDP instance is invalid, not sending anything...')
        return
      }
      ;(m.mySdp = { type: m.pc.localDescription.type, sdp: m.pc.localDescription.sdp }),
        m.trickle === !1 && (m.mySdp.trickle = !1),
        u.debug(p),
        (m.sdpSent = !0),
        p.success(m.mySdp)
    }
    function ut(d, p) {
      var g = D[d]
      if (!g || !g.webrtcStuff) return u.warn('Invalid handle'), 0
      var m = p ? 'remote' : 'local',
        f = g.webrtcStuff
      return (
        f.volume[m] || (f.volume[m] = { value: 0 }),
        f.pc.getStats &&
        (u.webRTCAdapter.browserDetails.browser === 'chrome' ||
          u.webRTCAdapter.browserDetails.browser === 'safari')
          ? p && !f.remoteStream
            ? (u.warn('Remote stream unavailable'), 0)
            : !p && !f.myStream
            ? (u.warn('Local stream unavailable'), 0)
            : f.volume[m].timer
            ? f.volume[m].value
            : (u.log('Starting ' + m + ' volume monitor'),
              (f.volume[m].timer = setInterval(function () {
                f.pc.getStats().then(function (b) {
                  b.forEach(function (v) {
                    !v ||
                      v.kind !== 'audio' ||
                      (p && !v.remoteSource) ||
                      (!p && v.type !== 'media-source') ||
                      (f.volume[m].value = v.audioLevel ? v.audioLevel : 0)
                  })
                })
              }, 200)),
              0)
          : (u.warn('Getting the ' + m + ' volume unsupported by browser'), 0)
      )
    }
    function Fe(d, p) {
      var g = D[d]
      if (!g || !g.webrtcStuff) return u.warn('Invalid handle'), !0
      var m = g.webrtcStuff
      return m.pc
        ? m.myStream
          ? p
            ? !m.myStream.getVideoTracks() || m.myStream.getVideoTracks().length === 0
              ? (u.warn('No video track'), !0)
              : !m.myStream.getVideoTracks()[0].enabled
            : !m.myStream.getAudioTracks() || m.myStream.getAudioTracks().length === 0
            ? (u.warn('No audio track'), !0)
            : !m.myStream.getAudioTracks()[0].enabled
          : (u.warn('Invalid local MediaStream'), !0)
        : (u.warn('Invalid PeerConnection'), !0)
    }
    function je(d, p, g) {
      var m = D[d]
      if (!m || !m.webrtcStuff) return u.warn('Invalid handle'), !1
      var f = m.webrtcStuff
      return f.pc
        ? f.myStream
          ? p
            ? !f.myStream.getVideoTracks() || f.myStream.getVideoTracks().length === 0
              ? (u.warn('No video track'), !1)
              : ((f.myStream.getVideoTracks()[0].enabled = !g), !0)
            : !f.myStream.getAudioTracks() || f.myStream.getAudioTracks().length === 0
            ? (u.warn('No audio track'), !1)
            : ((f.myStream.getAudioTracks()[0].enabled = !g), !0)
          : (u.warn('Invalid local MediaStream'), !1)
        : (u.warn('Invalid PeerConnection'), !1)
    }
    function nr(d) {
      var p = D[d]
      if (!p || !p.webrtcStuff) return u.warn('Invalid handle'), 'Invalid handle'
      var g = p.webrtcStuff
      return g.pc
        ? g.pc.getStats
          ? g.bitrate.timer
            ? g.bitrate.value
            : (u.log('Starting bitrate timer (via getStats)'),
              (g.bitrate.timer = setInterval(function () {
                g.pc.getStats().then(function (m) {
                  m.forEach(function (f) {
                    if (f) {
                      var b = !1
                      if (
                        ((((f.mediaType === 'video' || f.id.toLowerCase().indexOf('video') > -1) &&
                          f.type === 'inbound-rtp' &&
                          f.id.indexOf('rtcp') < 0) ||
                          (f.type == 'ssrc' &&
                            f.bytesReceived &&
                            (f.googCodecName === 'VP8' || f.googCodecName === ''))) &&
                          (b = !0),
                        b)
                      )
                        if (
                          ((g.bitrate.bsnow = f.bytesReceived),
                          (g.bitrate.tsnow = f.timestamp),
                          g.bitrate.bsbefore === null || g.bitrate.tsbefore === null)
                        )
                          (g.bitrate.bsbefore = g.bitrate.bsnow),
                            (g.bitrate.tsbefore = g.bitrate.tsnow)
                        else {
                          var v = g.bitrate.tsnow - g.bitrate.tsbefore
                          u.webRTCAdapter.browserDetails.browser === 'safari' && (v = v / 1e3)
                          var x = Math.round(((g.bitrate.bsnow - g.bitrate.bsbefore) * 8) / v)
                          u.webRTCAdapter.browserDetails.browser === 'safari' &&
                            (x = parseInt(x / 1e3)),
                            (g.bitrate.value = x + ' kbits/sec'),
                            (g.bitrate.bsbefore = g.bitrate.bsnow),
                            (g.bitrate.tsbefore = g.bitrate.tsnow)
                        }
                    }
                  })
                })
              }, 1e3)),
              '0 kbits/sec')
          : (u.warn('Getting the video bitrate unsupported by browser'),
            'Feature unsupported by browser')
        : 'Invalid PeerConnection'
    }
    function Lr(d) {
      u.error('WebRTC error:', d)
    }
    function h(d, p) {
      u.log('Cleaning WebRTC stuff')
      var g = D[d]
      if (g) {
        var m = g.webrtcStuff
        if (m) {
          if (p === !0) {
            var f = { janus: 'hangup', transaction: u.randomString(12) }
            g.token && (f.token = g.token),
              w && (f.apisecret = w),
              u.debug('Sending hangup request (handle=' + d + '):'),
              u.debug(f),
              t
                ? ((f.session_id = L), (f.handle_id = d), r.send(JSON.stringify(f)))
                : u.httpAPICall(l + '/' + L + '/' + d, {
                    verb: 'POST',
                    withCredentials: A,
                    body: f
                  })
          }
          ;(m.remoteStream = null),
            m.volume &&
              (m.volume.local && m.volume.local.timer && clearInterval(m.volume.local.timer),
              m.volume.remote && m.volume.remote.timer && clearInterval(m.volume.remote.timer)),
            (m.volume = {}),
            m.bitrate.timer && clearInterval(m.bitrate.timer),
            (m.bitrate.timer = null),
            (m.bitrate.bsnow = null),
            (m.bitrate.bsbefore = null),
            (m.bitrate.tsnow = null),
            (m.bitrate.tsbefore = null),
            (m.bitrate.value = null),
            !m.streamExternal &&
              m.myStream &&
              (u.log('Stopping local stream tracks'), u.stopAllTracks(m.myStream)),
            (m.streamExternal = !1),
            (m.myStream = null)
          try {
            m.pc.close()
          } catch {}
          ;(m.pc = null),
            (m.candidates = null),
            (m.mySdp = null),
            (m.remoteSdp = null),
            (m.iceDone = !1),
            (m.dataChannel = {}),
            (m.dtmfSender = null),
            (m.senderTransforms = null),
            (m.receiverTransforms = null)
        }
        g.oncleanup()
      }
    }
    function E(d) {
      var p = d.split(`\r
`),
        g = !1,
        m = [-1],
        f = [-1],
        b = null,
        v = null,
        x = null,
        I = null,
        X = -1
      for (let P = 0; P < p.length; P++) {
        const oe = p[P].match(/m=(\w+) */)
        if (oe) {
          if (oe[1] === 'video')
            if (m[0] < 0) g = !0
            else {
              X = P
              break
            }
          else if (m[0] > -1) {
            X = P
            break
          }
          continue
        }
        if (g) {
          var j = p[P].match(/a=ssrc-group:SIM (\d+) (\d+) (\d+)/)
          if (j)
            return u.warn('The SDP already contains a SIM attribute, munging will be skipped'), d
          var ne = p[P].match(/a=ssrc-group:FID (\d+) (\d+)/)
          if (ne) {
            ;(m[0] = ne[1]), (f[0] = ne[2]), p.splice(P, 1), P--
            continue
          }
          if (m[0]) {
            var _ = p[P].match('a=ssrc:' + m[0] + ' cname:(.+)')
            if (
              (_ && (b = _[1]),
              (_ = p[P].match('a=ssrc:' + m[0] + ' msid:(.+)')),
              _ && (v = _[1]),
              (_ = p[P].match('a=ssrc:' + m[0] + ' mslabel:(.+)')),
              _ && (x = _[1]),
              (_ = p[P].match('a=ssrc:' + m[0] + ' label:(.+)')),
              _ && (I = _[1]),
              p[P].indexOf('a=ssrc:' + f[0]) === 0)
            ) {
              p.splice(P, 1), P--
              continue
            }
            if (p[P].indexOf('a=ssrc:' + m[0]) === 0) {
              p.splice(P, 1), P--
              continue
            }
          }
          if (p[P].length == 0) {
            p.splice(P, 1), P--
            continue
          }
        }
      }
      if (m[0] < 0) {
        ;(X = -1), (g = !1)
        for (let P = 0; P < p.length; P++) {
          const oe = p[P].match(/m=(\w+) */)
          if (oe) {
            if (oe[1] === 'video')
              if (m[0] < 0) g = !0
              else {
                X = P
                break
              }
            else if (m[0] > -1) {
              X = P
              break
            }
            continue
          }
          if (g) {
            if (m[0] < 0) {
              var Ee = p[P].match(/a=ssrc:(\d+)/)
              if (Ee) {
                ;(m[0] = Ee[1]), p.splice(P, 1), P--
                continue
              }
            } else {
              let me = p[P].match('a=ssrc:' + m[0] + ' cname:(.+)')
              if (
                (me && (b = me[1]),
                (me = p[P].match('a=ssrc:' + m[0] + ' msid:(.+)')),
                me && (v = me[1]),
                (me = p[P].match('a=ssrc:' + m[0] + ' mslabel:(.+)')),
                me && (x = me[1]),
                (me = p[P].match('a=ssrc:' + m[0] + ' label:(.+)')),
                me && (I = me[1]),
                p[P].indexOf('a=ssrc:' + f[0]) === 0)
              ) {
                p.splice(P, 1), P--
                continue
              }
              if (p[P].indexOf('a=ssrc:' + m[0]) === 0) {
                p.splice(P, 1), P--
                continue
              }
            }
            if (p[P].length === 0) {
              p.splice(P, 1), P--
              continue
            }
          }
        }
      }
      if (m[0] < 0) return u.warn("Couldn't find the video SSRC, simulcasting NOT enabled"), d
      X < 0 && (X = p.length),
        (m[1] = Math.floor(Math.random() * 4294967295)),
        (m[2] = Math.floor(Math.random() * 4294967295)),
        (f[1] = Math.floor(Math.random() * 4294967295)),
        (f[2] = Math.floor(Math.random() * 4294967295))
      for (var ge = 0; ge < m.length; ge++)
        b && (p.splice(X, 0, 'a=ssrc:' + m[ge] + ' cname:' + b), X++),
          v && (p.splice(X, 0, 'a=ssrc:' + m[ge] + ' msid:' + v), X++),
          x && (p.splice(X, 0, 'a=ssrc:' + m[ge] + ' mslabel:' + x), X++),
          I && (p.splice(X, 0, 'a=ssrc:' + m[ge] + ' label:' + I), X++),
          b && (p.splice(X, 0, 'a=ssrc:' + f[ge] + ' cname:' + b), X++),
          v && (p.splice(X, 0, 'a=ssrc:' + f[ge] + ' msid:' + v), X++),
          x && (p.splice(X, 0, 'a=ssrc:' + f[ge] + ' mslabel:' + x), X++),
          I && (p.splice(X, 0, 'a=ssrc:' + f[ge] + ' label:' + I), X++)
      return (
        p.splice(X, 0, 'a=ssrc-group:FID ' + m[2] + ' ' + f[2]),
        p.splice(X, 0, 'a=ssrc-group:FID ' + m[1] + ' ' + f[1]),
        p.splice(X, 0, 'a=ssrc-group:FID ' + m[0] + ' ' + f[0]),
        p.splice(X, 0, 'a=ssrc-group:SIM ' + m[0] + ' ' + m[1] + ' ' + m[2]),
        (d = p.join(`\r
`)),
        d.endsWith(`\r
`) ||
          (d += `\r
`),
        d
      )
    }
    function R(d) {
      return (
        u.debug('isAudioSendEnabled:', d),
        d
          ? d.audio === !1
            ? !1
            : d.audioSend === void 0 || d.audioSend === null
            ? !0
            : d.audioSend === !0
          : !0
      )
    }
    function N(d) {
      return (
        u.debug('isAudioSendRequired:', d),
        !d ||
        d.audio === !1 ||
        d.audioSend === !1 ||
        d.failIfNoAudio === void 0 ||
        d.failIfNoAudio === null
          ? !1
          : d.failIfNoAudio === !0
      )
    }
    function k(d) {
      return (
        u.debug('isAudioRecvEnabled:', d),
        d
          ? d.audio === !1
            ? !1
            : d.audioRecv === void 0 || d.audioRecv === null
            ? !0
            : d.audioRecv === !0
          : !0
      )
    }
    function Z(d) {
      return (
        u.debug('isVideoSendEnabled:', d),
        d
          ? d.video === !1
            ? !1
            : d.videoSend === void 0 || d.videoSend === null
            ? !0
            : d.videoSend === !0
          : !0
      )
    }
    function te(d) {
      return (
        u.debug('isVideoSendRequired:', d),
        !d ||
        d.video === !1 ||
        d.videoSend === !1 ||
        d.failIfNoVideo === void 0 ||
        d.failIfNoVideo === null
          ? !1
          : d.failIfNoVideo === !0
      )
    }
    function U(d) {
      return (
        u.debug('isVideoRecvEnabled:', d),
        d
          ? d.video === !1
            ? !1
            : d.videoRecv === void 0 || d.videoRecv === null
            ? !0
            : d.videoRecv === !0
          : !0
      )
    }
    function W(d) {
      if (
        (u.debug('isScreenSendEnabled:', d),
        !d || typeof d.video != 'object' || typeof d.video.mandatory != 'object')
      )
        return !1
      var p = d.video.mandatory
      return p.chromeMediaSource
        ? p.chromeMediaSource === 'desktop' || p.chromeMediaSource === 'screen'
        : p.mozMediaSource
        ? p.mozMediaSource === 'window' || p.mozMediaSource === 'screen'
        : p.mediaSource
        ? p.mediaSource === 'window' || p.mediaSource === 'screen'
        : !1
    }
    function H(d) {
      return (
        u.debug('isDataEnabled:', d),
        u.webRTCAdapter.browserDetails.browser === 'edge'
          ? (u.warn("Edge doesn't support data channels yet"), !1)
          : d == null
          ? !1
          : d.data === !0
      )
    }
    function ie(d) {
      return u.debug('isTrickleEnabled:', d), d !== !1
    }
  }
  var pt
  ;(function (e) {
    ;(e.NOT_CONNECTED = 'not_connected'),
      (e.CONNECTING = 'connecting'),
      (e.CONNECTED = 'connected'),
      (e.ERROR = 'error')
  })(pt || (pt = {}))
  var rt
  ;(function (e) {
    ;(e.UNREGISTERED = 'unregistered'),
      (e.REGISTRATION_FAILED = 'registration_failed'),
      (e.REGISTERED = 'registered'),
      (e.REGISTERING = 'registering'),
      (e.UNREGISTERING = 'unregistering')
  })(rt || (rt = {}))
  var We
  ;(function (e) {
    ;(e.INCALL = 'incall'),
      (e.CALLING = 'calling'),
      (e.IDLE = 'idle'),
      (e.OFFLINE = 'offline'),
      (e.RECEIVING_CALL = 'incomingcall')
  })(We || (We = {}))
  function Ch(e) {
    const t = ae(crypto.randomUUID()),
      r = ae(null),
      n = ae(window.navigator.onLine),
      o = ae(null),
      i = ae(null),
      a = ae(null),
      l = ae(null),
      q = ae(null),
      s = ae(null),
      c = ae(null),
      V = M(e),
      {
        janusStatus: A,
        registerStatus: C,
        extenStatus: y,
        inCallStatus: w
      } = {
        janusStatus: ae(pt.NOT_CONNECTED),
        registerStatus: ae(rt.UNREGISTERED),
        extenStatus: ae(We.OFFLINE),
        inCallStatus: ae({ inCall: !1, status: void 0 })
      }
    function J() {
      n.value = window.navigator.onLine
    }
    wt(() => {
      window.addEventListener('online', J), window.addEventListener('offline', J)
    }),
      It(() => {
        window.removeEventListener('online', J), window.removeEventListener('offline', J)
      })
    function O() {
      if (a.value && y.value !== We.OFFLINE && y.value !== We.IDLE) {
        const Q = y.value === We.RECEIVING_CALL ? 'decline' : 'hangup'
        a.value.send({ message: { request: Q } }), a.value.hangup()
      }
    }
    function G() {
      if (a.value) {
        let Q = !0,
          le = !0,
          z = !1
        c.value
          ? ((Q = c.value.sdp.indexOf('m=audio ') > -1),
            (le = c.value.sdp.indexOf('m=video ') > -1))
          : ((z = !0), (le = !1)),
          (z ? a.value.createOffer : a.value.createAnswer)({
            jsep: c.value,
            media: { audio: Q, video: le },
            success: (he) => {
              const we = {
                request: 'accept',
                headers: { Contact: `<sip:${l.value}@${V.janusServer}>` }
              }
              a.value?.send({ message: we, jsep: he })
            },
            error(he) {
              ;(r.value = { type: 'onAnswer', msg: JSON.stringify(he) }),
                (w.value = { inCall: !1, status: void 0 }),
                (y.value = We.IDLE)
              const we = { request: 'decline', code: 480 }
              a.value?.send({ message: we })
            }
          })
      }
    }
    function Y() {
      a.value && a.value.send({ message: { request: 'unregister' } })
    }
    function L({ authuser: Q, secret: le, domain: z, port: Me, name: he, transport: we }) {
      a.value &&
        C.value !== rt.REGISTERED &&
        C.value !== rt.REGISTERING &&
        (a.value.send({
          message: {
            authuser: Q,
            request: 'register',
            username: `sip:${Q}@${z}:${Me}`,
            display_name: he,
            secret: le,
            force_tcp: we === 'tcp',
            force_udp: we === 'udp',
            proxy: `sip:${z}:${Me}`
          }
        }),
        (l.value = Q),
        (q.value = z),
        (s.value = Me))
    }
    function D(Q) {
      a.value &&
        Q !== '' &&
        ((o.value = Q),
        a.value.createOffer({
          media: { audioSend: !0, audioRecv: !0, videoSend: !1, videoRecv: !1 },
          success(le) {
            console.log('Got SDP on creating!')
            const z = { request: 'call', uri: `sip:${Q}@${q.value}:${s.value}` }
            a.value?.send({ message: z, jsep: le })
          },
          error(le) {
            ;(r.value = { type: 'onStartCall', msg: JSON.stringify(le) }),
              u.error('WebRTC error...', r)
          }
        }))
    }
    function qe() {
      a.value &&
        w.value.status &&
        (a.value.isAudioMuted()
          ? (a.value.unmuteAudio(), (w.value.status.muted = !1))
          : (a.value.muteAudio(), (w.value.status.muted = !0)))
    }
    function Ve() {
      if (a.value && w.value.status) {
        const Q = w.value.status.onHold ? 'unhold' : 'hold'
        a.value.send({ message: { request: Q } }), (w.value.status.onHold = Q === 'hold')
      }
    }
    function $(Q) {
      a.value && a.value.dtmf({ dtmf: { tones: Q } })
    }
    function de() {
      u.init({
        debug: V.debug,
        callback: () => {
          if (((A.value = pt.CONNECTING), !u.isWebrtcSupported())) {
            ;(r.value = { type: 'onJanusInit', msg: 'WebRTC not supported' }), (A.value = pt.ERROR)
            return
          }
          i.value = new u({
            server: `${V.janusProtocol}://${V.janusServer}:${V.janusPort}${V.janusEndpoint}`,
            iceServers: V.iceServers,
            withCredentials: V.withCredentials,
            token: V.token,
            apisecret: V.apisecret,
            success: () => {
              i.value?.attach({
                plugin: 'janus.plugin.sip',
                opaqueId: t.value,
                success: (Q) => {
                  ;(A.value = pt.CONNECTED), (a.value = Q)
                },
                onmessage: (Q, le) => {
                  if (
                    (le && (c.value = le),
                    Q.result &&
                      Q.result.event &&
                      [
                        'registered',
                        'registration_failed',
                        'unregistered',
                        'unregistering',
                        'registering'
                      ].includes(Q.result.event))
                  )
                    switch (Q.result.event) {
                      case 'registered':
                        ;(y.value = We.IDLE), (C.value = rt.REGISTERED)
                        break
                      case 'registration_failed':
                        C.value = rt.REGISTRATION_FAILED
                        break
                      case 'unregistered':
                        C.value = rt.UNREGISTERED
                        break
                      case 'unregistering':
                        C.value = rt.UNREGISTERING
                        break
                      case 'registering':
                        C.value = rt.REGISTRATION_FAILED
                        break
                      default:
                        C.value = rt.UNREGISTERED
                        break
                    }
                  else if (Q.result?.event === 'calling') {
                    const z = o.value || ''
                    ;(y.value = We.CALLING),
                      (w.value = {
                        inCall: !0,
                        status: {
                          callDirection: 'outgoing',
                          duration: 0,
                          incallId: crypto.randomUUID(),
                          muted: !1,
                          number: z,
                          onHold: !1,
                          onSpeaker: !1
                        }
                      })
                  } else if (Q.result?.event === 'incomingcall') {
                    const z = Q.result.username
                      ? Q.result.username.substring(
                          Q.result.username.lastIndexOf(':') + 1,
                          Q.result.username.lastIndexOf('@')
                        )
                      : ''
                    ;(y.value = We.RECEIVING_CALL),
                      (w.value = {
                        inCall: !0,
                        status: {
                          callDirection: 'incoming',
                          duration: 0,
                          incallId: crypto.randomUUID(),
                          muted: !1,
                          number: z,
                          onHold: !1,
                          onSpeaker: !1
                        }
                      })
                  } else if (Q.result?.event === 'progress')
                    le != null &&
                      a.value !== null &&
                      (console.log('PROGRESS', le, a.value),
                      a.value.handleRemoteJsep({
                        jsep: le,
                        error: (z) => {
                          ;(r.value = { type: 'onProgress', msg: JSON.stringify(z) }),
                            a.value?.send({ message: { request: 'hangup' } }),
                            a.value?.hangup()
                        }
                      }))
                  else if (Q.result?.event === 'accepted')
                    (y.value = We.INCALL),
                      le &&
                        a.value &&
                        a.value.handleRemoteJsep({
                          jsep: le,
                          error: () => {
                            a.value?.send({ message: { request: 'hangup' } }), a.value?.hangup()
                          }
                        })
                  else if (Q.result?.event === 'updatingcall') {
                    ;(y.value = We.INCALL), console.log('UPDATINGCALL', le, a.value)
                    const z = le ? le.sdp.indexOf('m=audio') > -1 : !1,
                      Me = le ? le.sdp.indexOf('m=video') > -1 : !1
                    a.value?.createAnswer({
                      jsep: le,
                      media: { audio: z, video: Me },
                      success(he) {
                        console.log(`Got SDP ${String(he.type)}! audio=${z}, video=${Me}`)
                        const we = { request: 'update' }
                        a.value?.send({ message: we, jsep: le })
                      },
                      error(he) {
                        ;(r.value = { type: 'onUpdatingCall', msg: JSON.stringify(he) }),
                          console.log('PROGRESS (ERROR)', le, a.value)
                      }
                    })
                  } else
                    Q.result?.event === 'hangup' &&
                      (console.log('HANGUP', le, a.value),
                      (y.value = We.IDLE),
                      (w.value = { inCall: !1, status: void 0 }))
                },
                onlocalstream: (Q) => {
                  console.log('LOCAL STREAM:   ', Q),
                    V.localStreamElement.value && u.attachMediaStream(V.localStreamElement.value, Q)
                },
                onremotestream: (Q) => {
                  console.log('REMOTE STREAM:   ', Q),
                    V.remoteStreamElement.value &&
                      u.attachMediaStream(V.remoteStreamElement.value, Q)
                },
                oncleanup: () => {
                  console.log('Got cleanup notification')
                },
                detached: () => {
                  ;(A.value = pt.NOT_CONNECTED),
                    (y.value = We.OFFLINE),
                    (w.value = { inCall: !1, status: void 0 }),
                    (C.value = rt.UNREGISTERED)
                },
                error: (Q) => {
                  ;(A.value = pt.ERROR),
                    (y.value = We.OFFLINE),
                    (w.value = { inCall: !1, status: void 0 }),
                    (C.value = rt.UNREGISTERED),
                    (r.value = { type: 'onJanusAttach', msg: JSON.stringify(Q) })
                }
              })
            },
            error: (Q) => {
              i.value?.destroy(),
                (A.value = pt.ERROR),
                (y.value = We.OFFLINE),
                (w.value = { inCall: !1, status: void 0 }),
                (C.value = rt.UNREGISTERED),
                (r.value = { type: 'onJanusRunning', msg: JSON.stringify(Q) })
            },
            destroyed: () => {
              ;(A.value = pt.NOT_CONNECTED),
                (y.value = We.OFFLINE),
                (w.value = { inCall: !1, status: void 0 }),
                (C.value = rt.UNREGISTERED)
            }
          })
        }
      })
    }
    return (
      wt(() => {
        Gt(
          [n, A],
          () => {
            n.value && A.value !== pt.CONNECTED && A.value !== pt.CONNECTING && de()
          },
          { immediate: !0 }
        ),
          Gt(C, () => {
            C.value === rt.REGISTERED && r.value && (r.value = null)
          })
      }),
      It(() => {
        i.value?.destroy()
      }),
      {
        hangup: O,
        answer: G,
        startCall: D,
        unregister: Y,
        toggleMute: qe,
        toggleHold: Ve,
        sendDTMF: $,
        register: L,
        isOnline: n,
        error: r,
        janusStatus: A,
        registerStatus: C,
        extenStatus: y,
        inCallStatus: w
      }
    )
  }
  const Mh = (e) => {
    const t = ae(Notification.permission),
      r = ae(null)
    wt(() => {
      Gt(
        t,
        () => {
          t.value !== 'granted' &&
            Notification.requestPermission().then((o) => {
              t.value = o
            })
        },
        { immediate: !0 }
      )
    })
    const n = ({ title: o, options: i }) => {
      if (t.value === 'denied') return { sended: !1, message: 'PERMISSION_DENIED', expireTime: e }
      const a = new Notification(o, i)
      return (
        e &&
          (r.value = setTimeout(() => {
            a.close()
          }, e)),
        { sended: !0, message: 'PERMISSION_GRANTED', expireTime: e }
      )
    }
    return (
      It(() => {
        r.value && clearTimeout(r.value)
      }),
      [t, n]
    )
  }
  function yh() {
    const e = new Audio(
      'data:audio/mpeg;base64,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'
    )
    return (
      (e.loop = !0),
      (e.oncanplay = () => {
        e.play(), console.log('PLAYING CALLING SOUND')
      }),
      e
    )
  }
  function Sh() {
    const e = new Audio(
      'data:audio/mpeg;base64,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'
    )
    return (
      (e.loop = !0),
      (e.oncanplay = () => {
        e.play(), console.log('PLAYING INCOMINGCALL SOUND')
      }),
      e
    )
  }
  const Eh =
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0iIzAwMDAwMCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGQ9Ik0xNTIsOTZWNTZhOCw4LDAsMCwxLDE2LDBWNzYuNjlsMzQuMzQtMzQuMzVhOCw4LDAsMCwxLDExLjMyLDExLjMyTDE3OS4zMiw4OEgyMDBhOCw4LDAsMCwxLDAsMTZIMTYwQTgsOCwwLDAsMSwxNTIsOTZabTc5Ljg4LDc5LjA4QTU2LjI2LDU2LjI2LDAsMCwxLDE3NiwyMjRDOTYuNiwyMjQsMzIsMTU5LjQsMzIsODBBNTYuMjQsNTYuMjQsMCwwLDEsODAuOTIsMjQuMTNhMTYsMTYsMCwwLDEsMTYuNjIsOS41MWwyMS4xMiw0Ny4xNSwwLC4xMkExNiwxNiwwLDAsMSwxMTcuMzksOTZjLS4xOC4yNy0uMzcuNTItLjU3Ljc3TDk2LDEyMS40NWM3LjQ5LDE1LjIyLDIzLjQxLDMxLDM4LjgzLDM4LjUxbDI0LjM0LTIwLjcxYTguMTIsOC4xMiwwLDAsMSwuNzUtLjU2LDE2LDE2LDAsMCwxLDE1LjE3LTEuNGwuMTMuMDYsNDcuMTEsMjEuMTFBMTYsMTYsMCwwLDEsMjMxLjg4LDE3NS4wOFptLTE1Ljg4LTJzLS4wNywwLS4xMSwwaDBsLTQ3LTIxLjA1LTI0LjM1LDIwLjcxYTYuODQsNi44NCwwLDAsMS0uNzQuNTYsMTYsMTYsMCwwLDEtMTUuNzUsMS4xNGMtMTguNzMtOS4wNS0zNy40LTI3LjU4LTQ2LjQ2LTQ2LjExYTE2LDE2LDAsMCwxLDEtMTUuNyw2LjEzLDYuMTMsMCwwLDEsLjU3LS43N0wxMDQsODcuMTVsLTIxLTQ3YS42MS42MSwwLDAsMSwwLS4xMkE0MC4yLDQwLjIsMCwwLDAsNDgsODAsMTI4LjE0LDEyOC4xNCwwLDAsMCwxNzYsMjA4LDQwLjIxLDQwLjIxLDAsMCwwLDIxNiwxNzMuMDdaIj48L3BhdGg+PC9zdmc+',
    Th = T('span', { class: 'pl-2' }, null, -1),
    wh = Re({
      __name: 'VCallWidget',
      setup(e) {
        const { authuser: t, secret: r, domain: n, port: o, transport: i, name: a } = ro(),
          l = ae(null),
          q = ae(null),
          s = ae(null),
          c = ae(null),
          V = ae(!1),
          [A, C] = Mh(),
          y = ae(null),
          w = ae(null),
          {
            janusStatus: J,
            register: O,
            unregister: G,
            answer: Y,
            error: L,
            extenStatus: D,
            hangup: qe,
            inCallStatus: Ve,
            isOnline: $,
            registerStatus: de,
            sendDTMF: Q,
            startCall: le,
            toggleHold: z,
            toggleMute: Me
          } = Ch({
            janusEndpoint: '/janus',
            janusPort: 8189,
            janusProtocol: 'wss',
            janusServer: 'agent.vcmpbx.com.br',
            localStreamElement: l,
            remoteStreamElement: q,
            debug: 'all'
          })
        Gt(J, () => {
          console.warn({ janusStatus: J.value }),
            t &&
              r &&
              n &&
              J.value === 'connected' &&
              O({ authuser: t, secret: r, port: o, domain: n, transport: i, name: a || t })
        })
        const he = ee(() => {
          switch (de.value) {
            case 'registered':
              return D.value === 'idle'
                ? 'Conectado'
                : ['incall', 'calling'].includes(D.value)
                ? 'Em chamada'
                : D.value === 'incomingcall'
                ? 'Recebendo chamada'
                : 'Conectado'
            case 'unregistered':
              return 'Desconectado'
            case 'registering':
              return 'Conectando...'
            case 'unregistering':
              return 'Desconectando'
            case 'registration_failed':
              return 'Registro falhou'
            default:
              return 'Desconectado'
          }
        })
        function we() {
          Ve.value.inCall
            ? (c.value = setTimeout(() => {
                ;(s.value = (s.value || 0) + 1), we()
              }, 1e3))
            : (s.value = null)
        }
        et(() => {
          we()
        }),
          et(() => {
            w.value === null &&
              D.value === 'incomingcall' &&
              ((V.value = !0),
              De(),
              (w.value = Sh()),
              A &&
                document.visibilityState === 'hidden' &&
                C({
                  title: 'Nova Chamada',
                  options: {
                    vibrate: 150,
                    body: `Recebendo chamada de ${Ve.value.status?.number}`,
                    requireInteraction: !0,
                    icon: Eh
                  }
                })),
              he.value === 'Em chamada' &&
                D.value === 'incall' &&
                w.value &&
                (w.value.pause(), (w.value = null), (V.value = !1), De()),
              D.value !== 'incomingcall' &&
                w.value &&
                (w.value.pause(), (w.value = null), (V.value = !1))
          }),
          et(() => {
            he.value === 'Em chamada' &&
              y.value === null &&
              D.value === 'calling' &&
              (y.value = yh()),
              he.value === 'Em chamada' &&
                y.value &&
                D.value === 'incall' &&
                (y.value.pause(), (y.value = null)),
              D.value !== 'calling' && y.value && (y.value.pause(), (y.value = null))
          })
        function De() {
          const fe = document.querySelector('div[data-headlessui-state]'),
            ce = document.getElementById('popoverbutton')
          fe && ce && fe.getAttribute('data-headlessui-state') === '' && ce.click()
        }
        return (
          It(() => {
            c.value && clearTimeout(c.value)
          }),
          (fe, ce) => (
            B(),
            Wt(
              M(Ls),
              { class: 'absolute bottom-4 right-4 md:bottom-8 md:right-8 flex flex-col items-end' },
              {
                default: xr(() => [
                  Se(
                    qi,
                    {
                      'enter-active-class': 'transition duration-100 ease-out',
                      'enter-from-class': 'translate-y-1 opacity-0',
                      'enter-to-class': 'translate-y-0 opacity-100',
                      'leave-active-class': 'transition duration-100 ease-in',
                      'leave-from-class': 'translate-y-0 opacity-100',
                      'leave-to-class': 'translate-y-1 opacity-0'
                    },
                    {
                      default: xr(() => [
                        Se(
                          M(mV),
                          { static: V.value },
                          {
                            default: xr(() => [
                              Se(
                                lh,
                                {
                                  agentStatus: he.value,
                                  register: M(O),
                                  unregister: M(G),
                                  answer: M(Y),
                                  hangup: M(qe),
                                  inCallStatus: M(Ve),
                                  sendDTMF: M(Q),
                                  startCall: M(le),
                                  toggleHold: M(z),
                                  callDuration: s.value,
                                  toggleMute: M(Me)
                                },
                                null,
                                8,
                                [
                                  'agentStatus',
                                  'register',
                                  'unregister',
                                  'answer',
                                  'hangup',
                                  'inCallStatus',
                                  'sendDTMF',
                                  'startCall',
                                  'toggleHold',
                                  'callDuration',
                                  'toggleMute'
                                ]
                              )
                            ]),
                            _: 1
                          },
                          8,
                          ['static']
                        )
                      ]),
                      _: 1
                    }
                  ),
                  Se(
                    M(Ys),
                    {
                      title: 'FeedBack',
                      'aria-label': 'FeedBack',
                      id: 'popoverbutton',
                      class: xt([
                        'bg-blue-500 rounded-full px-3 h-12 text-white flex items-center group shadow-[0_0.5rem_1.5rem_#8257e540]',
                        {
                          'animate-pulse bg-orange-500': [
                            'Recebendo chamada',
                            'Em chamada'
                          ].includes(he.value)
                        }
                      ])
                    },
                    {
                      default: xr(() => [
                        Se(M(UA), { size: 32 }),
                        T(
                          'span',
                          {
                            class: xt([
                              'max-w-0 truncate group-hover:max-w-xl transition-all duration-500 ease-linear text-clip overflow-hidden',
                              { 'max-w-xl': ['Recebendo chamada', 'Em chamada'].includes(he.value) }
                            ])
                          },
                          [
                            Th,
                            ft(
                              ' ' +
                                st(
                                  he.value === 'Em chamada'
                                    ? `Em chamada ${M(hi)(s.value || 0)} `
                                    : ['Recebendo chamada'].includes(he.value)
                                    ? 'Recebendo chamada'
                                    : 'Fazer uma ligação'
                                ),
                              1
                            )
                          ],
                          2
                        ),
                        Oe(
                          T(
                            'audio',
                            {
                              ref_key: 'localStream',
                              ref: l,
                              autoplay: '',
                              playsinline: '',
                              muted: ''
                            },
                            null,
                            512
                          ),
                          [[At, !1]]
                        ),
                        Oe(
                          T(
                            'audio',
                            { ref_key: 'remoteStream', ref: q, autoplay: '', playsinline: '' },
                            null,
                            512
                          ),
                          [[At, !1]]
                        )
                      ]),
                      _: 1
                    },
                    8,
                    ['class']
                  )
                ]),
                _: 1
              }
            )
          )
        )
      }
    }),
    Ih = Re({
      __name: 'App',
      setup(e) {
        return (t, r) => (B(), Wt(wh))
      }
    })
  if (!document.getElementById('vittelgroup-vcall')) {
    const e = document.createElement('div')
    ;(e.id = 'vittelgroup-vcall'), document.body.appendChild(e)
  }
  ju(Ih).mount('#vittelgroup-vcall')
})
