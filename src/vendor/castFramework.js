// Copyright Google Inc. All Rights Reserved.
;(function() {
  'use strict'
  var f,
    aa =
      'function' == typeof Object.create
        ? Object.create
        : function(a) {
            var b = function() {}
            b.prototype = a
            return new b()
          },
    ba
  if ('function' == typeof Object.setPrototypeOf) ba = Object.setPrototypeOf
  else {
    var ca
    a: {
      var da = { Za: !0 },
        ea = {}
      try {
        ea.__proto__ = da
        ca = ea.Za
        break a
      } catch (a) {}
      ca = !1
    }
    ba = ca
      ? function(a, b) {
          a.__proto__ = b
          if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible')
          return a
        }
      : null
  }
  var fa = ba,
    g = function(a, b) {
      a.prototype = aa(b.prototype)
      a.prototype.constructor = a
      if (fa) fa(a, b)
      else
        for (var c in b)
          if ('prototype' != c)
            if (Object.defineProperties) {
              var d = Object.getOwnPropertyDescriptor(b, c)
              d && Object.defineProperty(a, c, d)
            } else a[c] = b[c]
      a.Xa = b.prototype
    },
    ha =
      'function' == typeof Object.defineProperties
        ? Object.defineProperty
        : function(a, b, c) {
            a != Array.prototype && a != Object.prototype && (a[b] = c.value)
          },
    h =
      'undefined' != typeof window && window === this
        ? this
        : 'undefined' != typeof global && null != global
          ? global
          : this,
    ia = function() {
      ia = function() {}
      h.Symbol || (h.Symbol = ja)
    },
    ja = (function() {
      var a = 0
      return function(b) {
        return 'jscomp_symbol_' + (b || '') + a++
      }
    })(),
    la = function() {
      ia()
      var a = h.Symbol.iterator
      a || (a = h.Symbol.iterator = h.Symbol('iterator'))
      'function' != typeof Array.prototype[a] &&
        ha(Array.prototype, a, {
          configurable: !0,
          writable: !0,
          value: function() {
            return ka(this)
          }
        })
      la = function() {}
    },
    ka = function(a) {
      var b = 0
      return ma(function() {
        return b < a.length ? { done: !1, value: a[b++] } : { done: !0 }
      })
    },
    ma = function(a) {
      la()
      a = { next: a }
      a[h.Symbol.iterator] = function() {
        return this
      }
      return a
    },
    na = function(a) {
      la()
      var b = a[Symbol.iterator]
      return b ? b.call(a) : ka(a)
    },
    k = this,
    l = function() {},
    oa = function(a) {
      var b = typeof a
      if ('object' == b)
        if (a) {
          if (a instanceof Array) return 'array'
          if (a instanceof Object) return b
          var c = Object.prototype.toString.call(a)
          if ('[object Window]' == c) return 'object'
          if (
            '[object Array]' == c ||
            ('number' == typeof a.length &&
              'undefined' != typeof a.splice &&
              'undefined' != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable('splice'))
          )
            return 'array'
          if (
            '[object Function]' == c ||
            ('undefined' != typeof a.call &&
              'undefined' != typeof a.propertyIsEnumerable &&
              !a.propertyIsEnumerable('call'))
          )
            return 'function'
        } else return 'null'
      else if ('function' == b && 'undefined' == typeof a.call) return 'object'
      return b
    },
    pa = function(a) {
      var b = oa(a)
      return 'array' == b || ('object' == b && 'number' == typeof a.length)
    },
    p = function(a) {
      return 'function' == oa(a)
    },
    qa = function(a) {
      var b = typeof a
      return ('object' == b && null != a) || 'function' == b
    },
    ra = function(a, b, c) {
      return a.call.apply(a.bind, arguments)
    },
    sa = function(a, b, c) {
      if (!a) throw Error()
      if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2)
        return function() {
          var c = Array.prototype.slice.call(arguments)
          Array.prototype.unshift.apply(c, d)
          return a.apply(b, c)
        }
      }
      return function() {
        return a.apply(b, arguments)
      }
    },
    q = function(a, b, c) {
      q =
        Function.prototype.bind &&
        -1 != Function.prototype.bind.toString().indexOf('native code')
          ? ra
          : sa
      return q.apply(null, arguments)
    },
    ta =
      Date.now ||
      function() {
        return +new Date()
      },
    r = function(a, b) {
      a = a.split('.')
      var c = k
      a[0] in c ||
        'undefined' == typeof c.execScript ||
        c.execScript('var ' + a[0])
      for (var d; a.length && (d = a.shift()); )
        a.length || void 0 === b
          ? (c = c[d] && c[d] !== Object.prototype[d] ? c[d] : (c[d] = {}))
          : (c[d] = b)
    },
    t = function(a, b) {
      function c() {}
      c.prototype = b.prototype
      a.Xa = b.prototype
      a.prototype = new c()
      a.prototype.constructor = a
      a.Vb = function(a, c, m) {
        for (
          var d = Array(arguments.length - 2), e = 2;
          e < arguments.length;
          e++
        )
          d[e - 2] = arguments[e]
        return b.prototype[c].apply(a, d)
      }
    }
  var u = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, u)
    else {
      var b = Error().stack
      b && (this.stack = b)
    }
    a && (this.message = String(a))
  }
  t(u, Error)
  u.prototype.name = 'CustomError'
  var ua = function(a, b) {
    a = a.split('%s')
    for (var c = '', d = a.length - 1, e = 0; e < d; e++)
      c += a[e] + (e < b.length ? b[e] : '%s')
    u.call(this, c + a[d])
  }
  t(ua, u)
  ua.prototype.name = 'AssertionError'
  var va = function(a, b) {
    throw new ua(
      'Failure' + (a ? ': ' + a : ''),
      Array.prototype.slice.call(arguments, 1)
    )
  }
  var Da = function(a) {
      if (!wa.test(a)) return a
      ;-1 != a.indexOf('&') && (a = a.replace(xa, '&amp;'))
      ;-1 != a.indexOf('<') && (a = a.replace(ya, '&lt;'))
      ;-1 != a.indexOf('>') && (a = a.replace(za, '&gt;'))
      ;-1 != a.indexOf('"') && (a = a.replace(Aa, '&quot;'))
      ;-1 != a.indexOf("'") && (a = a.replace(Ba, '&#39;'))
      ;-1 != a.indexOf('\x00') && (a = a.replace(Ca, '&#0;'))
      return a
    },
    xa = /&/g,
    ya = /</g,
    za = />/g,
    Aa = /"/g,
    Ba = /'/g,
    Ca = /\x00/g,
    wa = /[\x00&<>"']/
  var v
  a: {
    var Ea = k.navigator
    if (Ea) {
      var Fa = Ea.userAgent
      if (Fa) {
        v = Fa
        break a
      }
    }
    v = ''
  }
  var w = function(a, b, c) {
    this.reset(a, b, c, void 0, void 0)
  }
  w.prototype.na = null
  var Ga = 0
  w.prototype.reset = function(a, b, c, d, e) {
    'number' == typeof e || Ga++
    this.Ya = d || ta()
    this.B = a
    this.Ab = b
    this.La = c
    delete this.na
  }
  w.prototype.Da = function(a) {
    this.B = a
  }
  var x = function(a) {
      this.Na = a
      this.P = this.ia = this.B = this.j = null
    },
    y = function(a, b) {
      this.name = a
      this.value = b
    }
  y.prototype.toString = function() {
    return this.name
  }
  var Ha = new y('SHOUT', 1200),
    Ia = new y('SEVERE', 1e3),
    Ja = new y('WARNING', 900),
    Ka = new y('INFO', 800),
    La = new y('CONFIG', 700),
    Ma = [
      new y('OFF', Infinity),
      Ha,
      Ia,
      Ja,
      Ka,
      La,
      new y('FINE', 500),
      new y('FINER', 400),
      new y('FINEST', 300),
      new y('ALL', 0)
    ],
    z = null,
    Na = function(a) {
      if (!z) {
        z = {}
        for (var b = 0, c; (c = Ma[b]); b++) (z[c.value] = c), (z[c.name] = c)
      }
      if (a in z) return z[a]
      for (b = 0; b < Ma.length; ++b) if (((c = Ma[b]), c.value <= a)) return c
      return null
    }
  x.prototype.getName = function() {
    return this.Na
  }
  x.prototype.getParent = function() {
    return this.j
  }
  x.prototype.Da = function(a) {
    this.B = a
  }
  var Oa = function(a) {
    if (a.B) return a.B
    if (a.j) return Oa(a.j)
    va('Root logger has no level set.')
    return null
  }
  x.prototype.log = function(a, b, c) {
    if (a.value >= Oa(this).value)
      for (
        p(b) && (b = b()),
          a = new w(a, String(b), this.Na),
          c && (a.na = c),
          c = this;
        c;

      ) {
        var d = c,
          e = a
        if (d.P) for (var m = 0; (b = d.P[m]); m++) b(e)
        c = c.getParent()
      }
  }
  x.prototype.info = function(a, b) {
    this.log(Ka, a, b)
  }
  var Pa = {},
    A = null,
    Qa = function() {
      A || ((A = new x('')), (Pa[''] = A), A.Da(La))
    },
    Ra = function() {
      Qa()
      return A
    },
    Sa = function(a) {
      Qa()
      var b
      if (!(b = Pa[a])) {
        b = new x(a)
        var c = a.lastIndexOf('.'),
          d = a.substr(c + 1)
        c = Sa(a.substr(0, c))
        c.ia || (c.ia = {})
        c.ia[d] = b
        b.j = c
        Pa[a] = b
      }
      return b
    }
  var B = function(a) {
    var b = Ta
    b && b.log(Ja, a, void 0)
  }
  var C = function() {
      this.Ra = ta()
    },
    Ua = null
  C.prototype.set = function(a) {
    this.Ra = a
  }
  C.prototype.reset = function() {
    this.set(ta())
  }
  C.prototype.get = function() {
    return this.Ra
  }
  var Va = function(a) {
    this.Gb = a || ''
    Ua || (Ua = new C())
    this.Rb = Ua
  }
  f = Va.prototype
  f.Fa = !0
  f.Va = !0
  f.Pb = !0
  f.Ob = !0
  f.Wa = !1
  f.Qb = !1
  var E = function(a) {
      return 10 > a ? '0' + a : String(a)
    },
    Wa = function(a, b) {
      a = (a.Ya - b) / 1e3
      b = a.toFixed(3)
      var c = 0
      if (1 > a) c = 2
      else for (; 100 > a; ) c++, (a *= 10)
      for (; 0 < c--; ) b = ' ' + b
      return b
    },
    Xa = function(a) {
      Va.call(this, a)
    }
  t(Xa, Va)
  var Ya = function() {
    this.Hb = q(this.$a, this)
    this.Y = new Xa()
    this.Y.Va = !1
    this.Y.Wa = !1
    this.Ka = this.Y.Fa = !1
    this.lb = {}
  }
  Ya.prototype.$a = function(a) {
    if (!this.lb[a.La]) {
      var b = this.Y
      var c = []
      c.push(b.Gb, ' ')
      if (b.Va) {
        var d = new Date(a.Ya)
        c.push(
          '[',
          E(d.getFullYear() - 2e3) +
            E(d.getMonth() + 1) +
            E(d.getDate()) +
            ' ' +
            E(d.getHours()) +
            ':' +
            E(d.getMinutes()) +
            ':' +
            E(d.getSeconds()) +
            '.' +
            E(Math.floor(d.getMilliseconds() / 10)),
          '] '
        )
      }
      b.Pb && c.push('[', Wa(a, b.Rb.get()), 's] ')
      b.Ob && c.push('[', a.La, '] ')
      b.Qb && c.push('[', a.B.name, '] ')
      c.push(a.Ab)
      b.Wa &&
        (d = a.na) &&
        c.push('\n', d instanceof Error ? d.message : d.toString())
      b.Fa && c.push('\n')
      b = c.join('')
      if ((c = Za))
        switch (a.B) {
          case Ha:
            F(c, 'info', b)
            break
          case Ia:
            F(c, 'error', b)
            break
          case Ja:
            F(c, 'warn', b)
            break
          default:
            F(c, 'log', b)
        }
    }
  }
  var G = null,
    Za = k.console,
    F = function(a, b, c) {
      if (a[b]) a[b](c)
      else a.log(c)
    }
  var $a = { Wb: !0 },
    ab = { Xb: !0 },
    H = function() {
      throw Error('Do not instantiate directly')
    }
  H.prototype.eb = null
  H.prototype.toString = function() {
    return this.content
  }
  var bb = function() {
    H.call(this)
  }
  t(bb, H)
  bb.prototype.ja = $a
  var db = function() {
    var a = cb(void 0, void 0)
    if (!qa(a)) return String(a)
    if (a instanceof H) {
      if (a.ja === $a) return a.content
      if (a.ja === ab) return Da(a.content)
    }
    va('Soy template output is unsafe for use as HTML: ' + a)
    return 'zSoyz'
  }
  var I = function(a, b) {
    this.xb = 100
    this.fb = a
    this.Kb = b
    this.ca = 0
    this.$ = null
  }
  I.prototype.get = function() {
    if (0 < this.ca) {
      this.ca--
      var a = this.$
      this.$ = a.next
      a.next = null
    } else a = this.fb()
    return a
  }
  I.prototype.put = function(a) {
    this.Kb(a)
    this.ca < this.xb && (this.ca++, (a.next = this.$), (this.$ = a))
  }
  var eb = function(a) {
      k.setTimeout(function() {
        throw a
      }, 0)
    },
    fb,
    gb = function() {
      var a = k.MessageChannel
      'undefined' === typeof a &&
        'undefined' !== typeof window &&
        window.postMessage &&
        window.addEventListener &&
        -1 == v.indexOf('Presto') &&
        (a = function() {
          var a = document.createElement('IFRAME')
          a.style.display = 'none'
          a.src = ''
          document.documentElement.appendChild(a)
          var b = a.contentWindow
          a = b.document
          a.open()
          a.write('')
          a.close()
          var c = 'callImmediate' + Math.random(),
            d =
              'file:' == b.location.protocol
                ? '*'
                : b.location.protocol + '//' + b.location.host
          a = q(function(a) {
            if (('*' == d || a.origin == d) && a.data == c)
              this.port1.onmessage()
          }, this)
          b.addEventListener('message', a, !1)
          this.port1 = {}
          this.port2 = {
            postMessage: function() {
              b.postMessage(c, d)
            }
          }
        })
      if (
        'undefined' !== typeof a &&
        -1 == v.indexOf('Trident') &&
        -1 == v.indexOf('MSIE')
      ) {
        var b = new a(),
          c = {},
          d = c
        b.port1.onmessage = function() {
          if (void 0 !== c.next) {
            c = c.next
            var a = c.Ga
            c.Ga = null
            a()
          }
        }
        return function(a) {
          d.next = { Ga: a }
          d = d.next
          b.port2.postMessage(0)
        }
      }
      return 'undefined' !== typeof document &&
        'onreadystatechange' in document.createElement('SCRIPT')
        ? function(a) {
            var b = document.createElement('SCRIPT')
            b.onreadystatechange = function() {
              b.onreadystatechange = null
              b.parentNode.removeChild(b)
              b = null
              a()
              a = null
            }
            document.documentElement.appendChild(b)
          }
        : function(a) {
            k.setTimeout(a, 0)
          }
    }
  var hb = function() {
      this.fa = this.M = null
    },
    jb = new I(
      function() {
        return new ib()
      },
      function(a) {
        a.reset()
      }
    )
  hb.prototype.add = function(a, b) {
    var c = jb.get()
    c.set(a, b)
    this.fa ? (this.fa.next = c) : (this.M = c)
    this.fa = c
  }
  hb.prototype.remove = function() {
    var a = null
    this.M &&
      ((a = this.M),
      (this.M = this.M.next),
      this.M || (this.fa = null),
      (a.next = null))
    return a
  }
  var ib = function() {
    this.next = this.scope = this.pa = null
  }
  ib.prototype.set = function(a, b) {
    this.pa = a
    this.scope = b
    this.next = null
  }
  ib.prototype.reset = function() {
    this.next = this.scope = this.pa = null
  }
  var ob = function(a, b) {
      kb || lb()
      mb || (kb(), (mb = !0))
      nb.add(a, b)
    },
    kb,
    lb = function() {
      if (k.Promise && k.Promise.resolve) {
        var a = k.Promise.resolve(void 0)
        kb = function() {
          a.then(pb)
        }
      } else
        kb = function() {
          var a = pb
          !p(k.setImmediate) ||
          (k.Window &&
            k.Window.prototype &&
            -1 == v.indexOf('Edge') &&
            k.Window.prototype.setImmediate == k.setImmediate)
            ? (fb || (fb = gb()), fb(a))
            : k.setImmediate(a)
        }
    },
    mb = !1,
    nb = new hb(),
    pb = function() {
      for (var a; (a = nb.remove()); ) {
        try {
          a.pa.call(a.scope)
        } catch (b) {
          eb(b)
        }
        jb.put(a)
      }
      mb = !1
    }
  var M = function(a) {
      this.g = 0
      this.Sa = void 0
      this.D = this.o = this.j = null
      this.Z = this.oa = !1
      if (a != l)
        try {
          var b = this
          a.call(
            void 0,
            function(a) {
              K(b, 2, a)
            },
            function(a) {
              if (!(a instanceof L))
                try {
                  if (a instanceof Error) throw a
                  throw Error('Promise rejected.')
                } catch (d) {}
              K(b, 3, a)
            }
          )
        } catch (c) {
          K(this, 3, c)
        }
    },
    qb = function() {
      this.next = this.context = this.I = this.S = this.A = null
      this.W = !1
    }
  qb.prototype.reset = function() {
    this.context = this.I = this.S = this.A = null
    this.W = !1
  }
  var rb = new I(
      function() {
        return new qb()
      },
      function(a) {
        a.reset()
      }
    ),
    sb = function(a, b, c) {
      var d = rb.get()
      d.S = a
      d.I = b
      d.context = c
      return d
    },
    N = function() {
      var a,
        b,
        c = new M(function(c, e) {
          a = c
          b = e
        })
      return new tb(c, a, b)
    }
  M.prototype.then = function(a, b, c) {
    return ub(this, p(a) ? a : null, p(b) ? b : null, c)
  }
  M.prototype.then = M.prototype.then
  M.prototype.$goog_Thenable = !0
  M.prototype.cancel = function(a) {
    0 == this.g &&
      ob(function() {
        var b = new L(a)
        vb(this, b)
      }, this)
  }
  var vb = function(a, b) {
      if (0 == a.g)
        if (a.j) {
          var c = a.j
          if (c.o) {
            for (
              var d = 0, e = null, m = null, n = c.o;
              n && (n.W || (d++, n.A == a && (e = n), !(e && 1 < d)));
              n = n.next
            )
              e || (m = n)
            e &&
              (0 == c.g && 1 == d
                ? vb(c, b)
                : (m
                    ? ((d = m),
                      d.next == c.D && (c.D = d),
                      (d.next = d.next.next))
                    : wb(c),
                  xb(c, e, 3, b)))
          }
          a.j = null
        } else K(a, 3, b)
    },
    zb = function(a, b) {
      a.o || (2 != a.g && 3 != a.g) || yb(a)
      a.D ? (a.D.next = b) : (a.o = b)
      a.D = b
    },
    ub = function(a, b, c, d) {
      var e = sb(null, null, null)
      e.A = new M(function(a, n) {
        e.S = b
          ? function(c) {
              try {
                var e = b.call(d, c)
                a(e)
              } catch (J) {
                n(J)
              }
            }
          : a
        e.I = c
          ? function(b) {
              try {
                var e = c.call(d, b)
                void 0 === e && b instanceof L ? n(b) : a(e)
              } catch (J) {
                n(J)
              }
            }
          : n
      })
      e.A.j = a
      zb(a, e)
      return e.A
    }
  M.prototype.Sb = function(a) {
    this.g = 0
    K(this, 2, a)
  }
  M.prototype.Tb = function(a) {
    this.g = 0
    K(this, 3, a)
  }
  var K = function(a, b, c) {
      if (0 == a.g) {
        a === c &&
          ((b = 3), (c = new TypeError('Promise cannot resolve to itself')))
        a.g = 1
        a: {
          var d = c,
            e = a.Sb,
            m = a.Tb
          if (d instanceof M) {
            zb(d, sb(e || l, m || null, a))
            var n = !0
          } else {
            if (d)
              try {
                var D = !!d.$goog_Thenable
              } catch (J) {
                D = !1
              }
            else D = !1
            if (D) d.then(e, m, a), (n = !0)
            else {
              if (qa(d))
                try {
                  var Z = d.then
                  if (p(Z)) {
                    Ab(d, Z, e, m, a)
                    n = !0
                    break a
                  }
                } catch (J) {
                  m.call(a, J)
                  n = !0
                  break a
                }
              n = !1
            }
          }
        }
        n ||
          ((a.Sa = c),
          (a.g = b),
          (a.j = null),
          yb(a),
          3 != b || c instanceof L || Bb(a, c))
      }
    },
    Ab = function(a, b, c, d, e) {
      var m = !1,
        n = function(a) {
          m || ((m = !0), c.call(e, a))
        },
        D = function(a) {
          m || ((m = !0), d.call(e, a))
        }
      try {
        b.call(a, n, D)
      } catch (Z) {
        D(Z)
      }
    },
    yb = function(a) {
      a.oa || ((a.oa = !0), ob(a.jb, a))
    },
    wb = function(a) {
      var b = null
      a.o && ((b = a.o), (a.o = b.next), (b.next = null))
      a.o || (a.D = null)
      return b
    }
  M.prototype.jb = function() {
    for (var a; (a = wb(this)); ) xb(this, a, this.g, this.Sa)
    this.oa = !1
  }
  var xb = function(a, b, c, d) {
      if (3 == c && b.I && !b.W) for (; a && a.Z; a = a.j) a.Z = !1
      if (b.A) (b.A.j = null), Cb(b, c, d)
      else
        try {
          b.W ? b.S.call(b.context) : Cb(b, c, d)
        } catch (e) {
          Db.call(null, e)
        }
      rb.put(b)
    },
    Cb = function(a, b, c) {
      2 == b ? a.S.call(a.context, c) : a.I && a.I.call(a.context, c)
    },
    Bb = function(a, b) {
      a.Z = !0
      ob(function() {
        a.Z && Db.call(null, b)
      })
    },
    Db = eb,
    L = function(a) {
      u.call(this, a)
    }
  t(L, u)
  L.prototype.name = 'cancel'
  var tb = function(a, b, c) {
    this.K = a
    this.resolve = b
    this.reject = c
  }
  var O = function() {
    this.X = this.X
    this.da = this.da
  }
  O.prototype.X = !1
  O.prototype.la = function() {
    this.X || ((this.X = !0), this.ma())
  }
  O.prototype.ma = function() {
    if (this.da) for (; this.da.length; ) this.da.shift()()
  }
  var Eb = function(a, b, c) {
    O.call(this)
    this.yb = null != c ? q(a, c) : a
    this.wb = b
    this.cb = q(this.Fb, this)
    this.ha = []
  }
  t(Eb, O)
  f = Eb.prototype
  f.L = !1
  f.T = 0
  f.C = null
  f.mb = function(a) {
    this.ha = arguments
    this.C || this.T ? (this.L = !0) : Fb(this)
  }
  f.stop = function() {
    this.C &&
      (k.clearTimeout(this.C), (this.C = null), (this.L = !1), (this.ha = []))
  }
  f.pause = function() {
    this.T++
  }
  f.resume = function() {
    this.T--
    this.T || !this.L || this.C || ((this.L = !1), Fb(this))
  }
  f.ma = function() {
    Eb.Xa.ma.call(this)
    this.stop()
  }
  f.Fb = function() {
    this.C = null
    this.L && !this.T && ((this.L = !1), Fb(this))
  }
  var Fb = function(a) {
    var b = a.cb
    var c = a.wb
    if (!p(b))
      if (b && 'function' == typeof b.handleEvent) b = q(b.handleEvent, b)
      else throw Error('Invalid listener argument')
    b = 2147483647 < Number(c) ? -1 : k.setTimeout(b, c || 0)
    a.C = b
    a.yb.apply(null, a.ha)
  }
  var P = function(a) {
    a.controller = this
    this.a = a
    this.v = this.f = this.b = null
    this.Pa = this.Eb.bind(this)
    this.G = this.Bb.bind(this)
    this.H = this.Cb.bind(this)
    this.m = 0
    this.Ub = new Eb(this.kb, 200, this)
  }
  f = P.prototype
  f.za = function() {
    this.f &&
      (this.m++,
      (this.a.isPaused = !this.a.isPaused),
      this.a.isPaused
        ? this.f.pause(null, this.H, this.G)
        : this.f.play(null, this.H, this.G))
  }
  f.stop = function() {
    this.f && (this.m++, this.f.stop(null, this.H, this.G))
  }
  f.seek = function() {
    if (this.f) {
      this.v && (clearTimeout(this.v), (this.v = null))
      this.m++
      var a = new chrome.cast.media.SeekRequest()
      a.currentTime = this.a.currentTime
      this.f.seek(a, this.H, this.G)
    }
  }
  f.xa = function() {
    this.b &&
      (this.m++,
      (this.a.isMuted = !this.a.isMuted),
      this.b.setReceiverMuted(this.a.isMuted, this.H, this.G))
  }
  f.Ea = function() {
    this.Ub.mb()
  }
  f.kb = function() {
    this.b &&
      (this.m++,
      this.b.setReceiverVolumeLevel(this.a.volumeLevel, this.H, this.G))
  }
  f.Cb = function() {
    this.m--
    this.w()
  }
  f.Bb = function() {
    this.m--
    this.f && this.f.getStatus(null, l, l)
  }
  f.Eb = function() {
    this.f &&
      ((this.a.currentTime = this.f.getEstimatedTime()),
      (this.v = setTimeout(this.Pa, 1e3)))
  }
  f.w = function(a) {
    if (!(0 < this.m))
      if (this.b) {
        this.a.displayName = this.b.displayName || ''
        var b = this.b.statusText || ''
        this.a.displayStatus = b != this.a.displayName ? b : ''
        !a &&
          this.b.receiver &&
          (a = this.b.receiver.volume) &&
          (null != a.muted && (this.a.isMuted = a.muted),
          null != a.level && (this.a.volumeLevel = a.level),
          (this.a.canControlVolume = 'fixed' != a.controlType))
        this.f
          ? ((this.a.isMediaLoaded =
              this.f.playerState != chrome.cast.media.PlayerState.IDLE),
            (this.a.isPaused =
              this.f.playerState == chrome.cast.media.PlayerState.PAUSED),
            (this.a.canPause =
              0 <=
              this.f.supportedMediaCommands.indexOf(
                chrome.cast.media.MediaCommand.PAUSE
              )),
            this.V(this.f.media),
            (this.a.canSeek =
              0 <=
                this.f.supportedMediaCommands.indexOf(
                  chrome.cast.media.MediaCommand.SEEK
                ) && 0 != this.a.duration),
            (this.a.currentTime = this.f.getEstimatedTime()),
            this.v && (clearTimeout(this.v), (this.v = null)),
            this.f.playerState == chrome.cast.media.PlayerState.PLAYING &&
              (this.v = setTimeout(this.Pa, 1e3)))
          : this.V(null)
      } else
        (this.a.displayName = ''), (this.a.displayStatus = ''), this.V(null)
  }
  f.V = function(a) {
    a
      ? ((this.a.duration = a.duration || 0),
        a.metadata &&
          a.metadata.title &&
          (this.a.displayStatus = a.metadata.title))
      : ((this.a.isMediaLoaded = !1),
        (this.a.canPause = !1),
        (this.a.canSeek = !1),
        (this.a.currentTime = 0),
        (this.a.duration = 0))
  }
  var Gb = function(a) {
      if (!a.f)
        for (var b = 0, c = a.b.media; b < c.length; b++)
          if (!c[b].idleReason) {
            a.f = c[b]
            a.f.addUpdateListener(a.zb.bind(a))
            break
          }
    },
    Hb = function(a, b) {
      a.b = b
      b.addMediaListener(a.Ma.bind(a))
      b.addUpdateListener(a.Ca.bind(a))
      Gb(a)
      a.w()
    }
  f = P.prototype
  f.Ca = function(a) {
    a || (this.f = this.b = null)
    this.w()
  }
  f.Ma = function() {
    Gb(this)
    this.w(!0)
  }
  f.zb = function(a) {
    a || (this.f = null)
    this.w(!0)
  }
  f.ra = function(a, b) {
    return b ? (100 * a) / b : 0
  }
  f.sa = function(a, b) {
    return b ? (a * b) / 100 : 0
  }
  f.qa = function(a) {
    return 0 > a
      ? ''
      : [
          ('0' + Math.floor(a / 3600)).substr(-2),
          ('0' + (Math.floor(a / 60) % 60)).substr(-2),
          ('0' + (Math.floor(a) % 60)).substr(-2)
        ].join(':')
  }
  var Ib = (function(a) {
      function b(a) {
        this.content = a
      }
      b.prototype = a.prototype
      return function(a, d) {
        a = new b(String(a))
        void 0 !== d && (a.eb = d)
        return a
      }
    })(bb),
    Jb = {
      '\x00': '&#0;',
      '\t': '&#9;',
      '\n': '&#10;',
      '\x0B': '&#11;',
      '\f': '&#12;',
      '\r': '&#13;',
      ' ': '&#32;',
      '"': '&quot;',
      '&': '&amp;',
      "'": '&#39;',
      '-': '&#45;',
      '/': '&#47;',
      '<': '&lt;',
      '=': '&#61;',
      '>': '&gt;',
      '`': '&#96;',
      '\u0085': '&#133;',
      '\u00a0': '&#160;',
      '\u2028': '&#8232;',
      '\u2029': '&#8233;'
    },
    Kb = function(a) {
      return Jb[a]
    },
    Lb = /[\x00\x22\x27\x3c\x3e]/g,
    Mb = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
    Nb = /</g
  var cb = function(a, b) {
    ;(a = b || a) && a.gb
      ? ((a = a && a.gb),
        null != a && a.ja === $a
          ? ((a = String(a.content)
              .replace(Mb, '')
              .replace(Nb, '&lt;')),
            (a = String(a).replace(Lb, Kb)))
          : (a = Da(String(a))),
        (a = ' nonce="' + a + '"'))
      : (a = '')
    return Ib(
      '<style' +
        a +
        '>.cast_caf_state_c {fill: var(--connected-color, #4285f4);}.cast_caf_state_d {fill: var(--disconnected-color, #7d7d7d);}.cast_caf_state_h {opacity: 0;}</style><svg x="0px" y="0px" width="100%" height="100%" viewBox="0 0 24 24"><g><path id="cast_caf_icon_arch0" class="cast_caf_status_d" d="M1,18 L1,21 L4,21 C4,19.3 2.66,18 1,18 L1,18 Z"/><path id="cast_caf_icon_arch1" class="cast_caf_status_d" d="M1,14 L1,16 C3.76,16 6,18.2 6,21 L8,21 C8,17.13 4.87,14 1,14 L1,14 Z"/><path id="cast_caf_icon_arch2" class="cast_caf_status_d" d="M1,10 L1,12 C5.97,12 10,16.0 10,21 L12,21 C12,14.92 7.07,10 1,10 L1,10 Z"/><path id="cast_caf_icon_box" class="cast_caf_status_d" d="M21,3 L3,3 C1.9,3 1,3.9 1,5 L1,8 L3,8 L3,5 L21,5 L21,19 L14,19 L14,21 L21,21 C22.1,21 23,20.1 23,19 L23,5 C23,3.9 22.1,3 21,3 L21,3 Z"/><path id="cast_caf_icon_boxfill" class="cast_caf_state_h" d="M5,7 L5,8.63 C8,8.6 13.37,14 13.37,17 L19,17 L19,7 Z"/></g></svg>'
    )
  }
  cb.Yb = 'cast.framework.CastButtonTemplate.icon'
  r('cast.framework.VERSION', '1.0.07')
  r('cast.framework.LoggerLevel', {
    DEBUG: 0,
    INFO: 800,
    WARNING: 900,
    ERROR: 1e3,
    NONE: 1500
  })
  r('cast.framework.CastState', {
    NO_DEVICES_AVAILABLE: 'NO_DEVICES_AVAILABLE',
    NOT_CONNECTED: 'NOT_CONNECTED',
    CONNECTING: 'CONNECTING',
    CONNECTED: 'CONNECTED'
  })
  r('cast.framework.SessionState', {
    NO_SESSION: 'NO_SESSION',
    SESSION_STARTING: 'SESSION_STARTING',
    SESSION_STARTED: 'SESSION_STARTED',
    SESSION_START_FAILED: 'SESSION_START_FAILED',
    SESSION_ENDING: 'SESSION_ENDING',
    SESSION_ENDED: 'SESSION_ENDED',
    SESSION_RESUMED: 'SESSION_RESUMED'
  })
  r('cast.framework.CastContextEventType', {
    CAST_STATE_CHANGED: 'caststatechanged',
    SESSION_STATE_CHANGED: 'sessionstatechanged'
  })
  r('cast.framework.SessionEventType', {
    APPLICATION_STATUS_CHANGED: 'applicationstatuschanged',
    APPLICATION_METADATA_CHANGED: 'applicationmetadatachanged',
    ACTIVE_INPUT_STATE_CHANGED: 'activeinputstatechanged',
    VOLUME_CHANGED: 'volumechanged',
    MEDIA_SESSION: 'mediasession'
  })
  r('cast.framework.RemotePlayerEventType', {
    ANY_CHANGE: 'anyChanged',
    IS_CONNECTED_CHANGED: 'isConnectedChanged',
    IS_MEDIA_LOADED_CHANGED: 'isMediaLoadedChanged',
    DURATION_CHANGED: 'durationChanged',
    CURRENT_TIME_CHANGED: 'currentTimeChanged',
    IS_PAUSED_CHANGED: 'isPausedChanged',
    VOLUME_LEVEL_CHANGED: 'volumeLevelChanged',
    CAN_CONTROL_VOLUME_CHANGED: 'canControlVolumeChanged',
    IS_MUTED_CHANGED: 'isMutedChanged',
    CAN_PAUSE_CHANGED: 'canPauseChanged',
    CAN_SEEK_CHANGED: 'canSeekChanged',
    DISPLAY_NAME_CHANGED: 'displayNameChanged',
    STATUS_TEXT_CHANGED: 'statusTextChanged',
    TITLE_CHANGED: 'titleChanged',
    DISPLAY_STATUS_CHANGED: 'displayStatusChanged',
    MEDIA_INFO_CHANGED: 'mediaInfoChanged',
    IMAGE_URL_CHANGED: 'imageUrlChanged',
    PLAYER_STATE_CHANGED: 'playerStateChanged'
  })
  r('cast.framework.ActiveInputState', {
    ACTIVE_INPUT_STATE_UNKNOWN: -1,
    ACTIVE_INPUT_STATE_NO: 0,
    ACTIVE_INPUT_STATE_YES: 1
  })
  var Ob = function(a) {
    Ra().Da(Na(a))
  }
  r('cast.framework.setLoggerLevel', Ob)
  G || (G = new Ya())
  if (G) {
    var Pb = G
    if (1 != Pb.Ka) {
      var Qb = Ra(),
        Rb = Pb.Hb
      Qb.P || (Qb.P = [])
      Qb.P.push(Rb)
      Pb.Ka = !0
    }
  }
  Ob(1e3)
  var Q = function(a) {
    this.type = a
  }
  r('cast.framework.EventData', Q)
  var Sb = function(a) {
    this.type = 'activeinputstatechanged'
    this.activeInputState = a
  }
  g(Sb, Q)
  r('cast.framework.ActiveInputStateEventData', Sb)
  var Tb = function(a) {
    this.applicationId = a.appId
    this.name = a.displayName
    this.images = a.appImages
    this.namespaces = this.ya(a.namespaces || [])
  }
  r('cast.framework.ApplicationMetadata', Tb)
  Tb.prototype.ya = function(a) {
    return a.map(function(a) {
      return a.name
    })
  }
  var Ub = function(a) {
    this.type = 'applicationmetadatachanged'
    this.metadata = a
  }
  g(Ub, Q)
  r('cast.framework.ApplicationMetadataEventData', Ub)
  var Vb = function(a) {
    this.type = 'applicationstatuschanged'
    this.status = a
  }
  g(Vb, Q)
  r('cast.framework.ApplicationStatusEventData', Vb)
  var Wb = Sa('cast.framework.EventTarget'),
    R = function() {
      this.R = {}
    }
  R.prototype.addEventListener = function(a, b) {
    a in this.R || (this.R[a] = [])
    a = this.R[a]
    a.includes(b) || a.push(b)
  }
  R.prototype.removeEventListener = function(a, b) {
    a = this.R[a] || []
    b = a.indexOf(b)
    0 <= b && a.splice(b, 1)
  }
  R.prototype.dispatchEvent = function(a) {
    a &&
      a.type &&
      (this.R[a.type] || []).slice().forEach(function(b) {
        try {
          b(a)
        } catch (c) {
          Wb && Wb.log(Ia, 'Handler for ' + a.type + ' event failed: ' + c, c)
        }
      })
  }
  var Xb = function(a) {
    a = a || {}
    this.receiverApplicationId = a.receiverApplicationId || null
    this.resumeSavedSession =
      void 0 !== a.resumeSavedSession ? a.resumeSavedSession : !0
    this.autoJoinPolicy =
      void 0 !== a.autoJoinPolicy
        ? a.autoJoinPolicy
        : chrome.cast.AutoJoinPolicy.TAB_AND_ORIGIN_SCOPED
    this.language = a.language || null
  }
  r('cast.framework.CastOptions', Xb)
  var Yb = function(a) {
    this.type = 'mediasession'
    this.mediaSession = a
  }
  g(Yb, Q)
  r('cast.framework.MediaSessionEventData', Yb)
  var Zb = function(a, b) {
    this.type = 'volumechanged'
    this.volume = a
    this.isMute = b
  }
  g(Zb, Q)
  r('cast.framework.VolumeEventData', Zb)
  var S = function(a, b) {
    this.h = new R()
    this.g = b
    this.c = a
    this.Ta = a.sessionId
    this.U = a.statusText
    this.Qa = a.receiver
    this.i = a.receiver.volume
    this.ba = new Tb(a)
    this.aa = a.receiver.isActiveInput
    this.c.addMediaListener(this.wa.bind(this))
    $b(this)
  }
  r('cast.framework.CastSession', S)
  var $b = function(a) {
    var b = a.c.loadMedia.bind(a.c)
    a.c.loadMedia = function(c, e, m) {
      b(
        c,
        function(b) {
          e && e(b)
          a.wa(b)
        },
        m
      )
    }
    var c = a.c.queueLoad.bind(a.c)
    a.c.queueLoad = function(b, e, m) {
      c(
        b,
        function(b) {
          e && e(b)
          a.wa(b)
        },
        m
      )
    }
  }
  S.prototype.addEventListener = function(a, b) {
    this.h.addEventListener(a, b)
  }
  S.prototype.addEventListener = S.prototype.addEventListener
  S.prototype.removeEventListener = function(a, b) {
    this.h.removeEventListener(a, b)
  }
  S.prototype.removeEventListener = S.prototype.removeEventListener
  var ac = function(a, b) {
    a.Qa = b
    !b.volume ||
      (a.i && a.i.muted == b.volume.muted && a.i.level == b.volume.level) ||
      ((a.i = b.volume), a.h.dispatchEvent(new Zb(a.i.level, a.i.muted)))
    a.aa != b.isActiveInput &&
      ((a.aa = b.isActiveInput),
      (b = a.aa),
      a.h.dispatchEvent(new Sb(null == b ? -1 : b ? 1 : 0)))
  }
  S.prototype.ub = function() {
    return this.c
  }
  S.prototype.getSessionObj = S.prototype.ub
  S.prototype.tb = function() {
    return this.Ta
  }
  S.prototype.getSessionId = S.prototype.tb
  S.prototype.ta = function() {
    return this.g
  }
  S.prototype.getSessionState = S.prototype.ta
  S.prototype.qb = function() {
    return this.Qa
  }
  S.prototype.getCastDevice = S.prototype.qb
  S.prototype.ob = function() {
    return this.ba
  }
  S.prototype.getApplicationMetadata = S.prototype.ob
  S.prototype.pb = function() {
    return this.U
  }
  S.prototype.getApplicationStatus = S.prototype.pb
  S.prototype.nb = function() {
    var a = this.aa
    return null == a ? -1 : a ? 1 : 0
  }
  S.prototype.getActiveInputState = S.prototype.nb
  S.prototype.Ia = function(a) {
    'SESSION_ENDED' != this.g && (a ? this.c.stop(l, l) : this.c.leave(l, l))
  }
  S.prototype.endSession = S.prototype.Ia
  S.prototype.setVolume = function(a) {
    var b = N(),
      c = Promise.resolve(b.K)
    this.i && ((this.i.level = a), (this.i.muted = !1))
    this.c.setReceiverVolumeLevel(
      a,
      function() {
        return b.resolve()
      },
      function(a) {
        return b.reject(a.code)
      }
    )
    return c
  }
  S.prototype.setVolume = S.prototype.setVolume
  S.prototype.vb = function() {
    return this.i ? this.i.level : null
  }
  S.prototype.getVolume = S.prototype.vb
  S.prototype.Mb = function(a) {
    var b = N(),
      c = Promise.resolve(b.K)
    this.i && (this.i.muted = a)
    this.c.setReceiverMuted(
      a,
      function() {
        return b.resolve()
      },
      function(a) {
        return b.reject(a.code)
      }
    )
    return c
  }
  S.prototype.setMute = S.prototype.Mb
  S.prototype.isMute = function() {
    return this.i ? this.i.muted : null
  }
  S.prototype.isMute = S.prototype.isMute
  S.prototype.sendMessage = function(a, b) {
    var c = N(),
      d = Promise.resolve(c.K)
    this.c.sendMessage(
      a,
      b,
      function() {
        return c.resolve()
      },
      function(a) {
        return c.reject(a.code)
      }
    )
    return d
  }
  S.prototype.sendMessage = S.prototype.sendMessage
  S.prototype.addMessageListener = function(a, b) {
    this.c.addMessageListener(a, b)
  }
  S.prototype.addMessageListener = S.prototype.addMessageListener
  S.prototype.removeMessageListener = function(a, b) {
    this.c.removeMessageListener(a, b)
  }
  S.prototype.removeMessageListener = S.prototype.removeMessageListener
  S.prototype.loadMedia = function(a) {
    var b = N(),
      c = Promise.resolve(b.K)
    this.c.loadMedia(
      a,
      function() {
        b.resolve()
      },
      function(a) {
        b.reject(a.code)
      }
    )
    return c
  }
  S.prototype.loadMedia = S.prototype.loadMedia
  S.prototype.Ja = function() {
    a: {
      var a = this.c
      if (a.media) {
        a = na(a.media)
        for (var b = a.next(); !b.done; b = a.next())
          if (((b = b.value), !b.idleReason)) {
            a = b
            break a
          }
      }
      a = null
    }
    return a
  }
  S.prototype.getMediaSession = S.prototype.Ja
  S.prototype.wa = function(a) {
    a.media && this.h.dispatchEvent(new Yb(a))
  }
  S.prototype.ya = function(a) {
    return a.map(function(a, c) {
      return c.name
    })
  }
  var bc = function(a) {
    this.type = 'caststatechanged'
    this.castState = a
  }
  g(bc, Q)
  r('cast.framework.CastStateEventData', bc)
  var cc = function(a, b, c) {
    this.type = 'sessionstatechanged'
    this.session = a
    this.sessionState = b
    this.errorCode = void 0 !== c ? c : null
  }
  g(cc, Q)
  r('cast.framework.SessionStateEventData', cc)
  var Ta = Sa('cast.framework.CastContext'),
    T = function() {
      this.h = new R()
      this.va = !1
      this.u = null
      this.Ba = !1
      this.N = 'NO_DEVICES_AVAILABLE'
      this.l = 'NO_SESSION'
      this.ea = this.b = null
    }
  r('cast.framework.CastContext', T)
  T.prototype.addEventListener = function(a, b) {
    this.h.addEventListener(a, b)
  }
  T.prototype.addEventListener = T.prototype.addEventListener
  T.prototype.removeEventListener = function(a, b) {
    this.h.removeEventListener(a, b)
  }
  T.prototype.removeEventListener = T.prototype.removeEventListener
  T.prototype.Nb = function(a) {
    if (this.va) B('CastContext already initialized, new options are ignored')
    else {
      this.u = new Xb(a)
      if (!this.u || !this.u.receiverApplicationId)
        throw Error('Missing application id in cast options')
      a = new chrome.cast.SessionRequest(this.u.receiverApplicationId)
      this.u.language && (a.language = this.u.language)
      a = new chrome.cast.ApiConfig(
        a,
        this.Ua.bind(this),
        this.Jb.bind(this),
        this.u.autoJoinPolicy
      )
      chrome.cast.initialize(a, l, l)
      chrome.cast.addReceiverActionListener(this.Ib.bind(this))
      this.va = !0
    }
  }
  T.prototype.setOptions = T.prototype.Nb
  T.prototype.rb = function() {
    return this.N
  }
  T.prototype.getCastState = T.prototype.rb
  T.prototype.ta = function() {
    return this.l
  }
  T.prototype.getSessionState = T.prototype.ta
  T.prototype.requestSession = function() {
    var a = this
    if (!this.va)
      throw Error('Cannot start session before cast options are provided')
    var b = N(),
      c = Promise.resolve(b.K)
    ub(b.K, null, l, void 0)
    c.catch(l)
    var d = 'NOT_CONNECTED' == this.N
    chrome.cast.requestSession(
      function(c) {
        a.Ua(c)
        b.resolve(null)
      },
      function(c) {
        d && U(a, 'SESSION_START_FAILED', c ? c.code : void 0)
        b.reject(c.code)
      }
    )
    return c
  }
  T.prototype.requestSession = T.prototype.requestSession
  T.prototype.sb = function() {
    return this.b
  }
  T.prototype.getCurrentSession = T.prototype.sb
  T.prototype.ib = function(a) {
    this.b && this.b.Ia(a)
  }
  T.prototype.endCurrentSession = T.prototype.ib
  T.prototype.Jb = function(a) {
    ;(this.Ba = a == chrome.cast.ReceiverAvailability.AVAILABLE) &&
      !this.b &&
      this.ea &&
      this.u.resumeSavedSession &&
      chrome.cast.requestSessionById(this.ea)
    dc(this)
  }
  T.prototype.Ib = function(a, b) {
    this.b || b != chrome.cast.ReceiverAction.CAST
      ? this.b && b == chrome.cast.ReceiverAction.STOP
        ? U(this, 'SESSION_ENDING')
        : a && ac(this.b, a)
      : U(this, 'SESSION_STARTING')
  }
  T.prototype.Ua = function(a) {
    var b = 'SESSION_STARTING' == this.l ? 'SESSION_STARTED' : 'SESSION_RESUMED'
    this.ea = null
    this.b = new S(a, b)
    a.addUpdateListener(this.Ca.bind(this))
    U(this, b)
  }
  T.prototype.Ca = function() {
    if (this.b)
      switch (this.b.c.status) {
        case chrome.cast.SessionStatus.DISCONNECTED:
        case chrome.cast.SessionStatus.STOPPED:
          U(this, 'SESSION_ENDED')
          this.ea = this.b.Ta
          this.b = null
          break
        case chrome.cast.SessionStatus.CONNECTED:
          var a = this.b,
            b = a.ba,
            c = a.c,
            d
          if ((d = b.applicationId == c.appId && b.name == c.displayName))
            a: if (
              ((d = b.namespaces),
              (b = b.ya(c.namespaces || [])),
              pa(d) && pa(b) && d.length == b.length)
            ) {
              c = d.length
              for (var e = 0; e < c; e++)
                if (d[e] !== b[e]) {
                  d = !1
                  break a
                }
              d = !0
            } else d = !1
          d || ((a.ba = new Tb(a.c)), a.h.dispatchEvent(new Ub(a.ba)))
          ac(a, a.c.receiver)
          a.U != a.c.statusText &&
            ((a.U = a.c.statusText), a.h.dispatchEvent(new Vb(a.U)))
          break
        default:
          B('Unknown session status ' + this.b.c.status)
      }
    else B('Received session update event without known session')
  }
  var U = function(a, b, c) {
      b == a.l
        ? 'SESSION_START_FAILED' == b && a.h.dispatchEvent(new cc(a.b, a.l, c))
        : ((a.l = b),
          a.b && (a.b.g = a.l),
          a.h.dispatchEvent(new cc(a.b, a.l, c)),
          dc(a))
    },
    dc = function(a) {
      var b = 'NO_DEVICES_AVAILABLE'
      switch (a.l) {
        case 'SESSION_STARTING':
        case 'SESSION_ENDING':
          b = 'CONNECTING'
          break
        case 'SESSION_STARTED':
        case 'SESSION_RESUMED':
          b = 'CONNECTED'
          break
        case 'NO_SESSION':
        case 'SESSION_ENDED':
        case 'SESSION_START_FAILED':
          b = a.Ba ? 'NOT_CONNECTED' : 'NO_DEVICES_AVAILABLE'
          break
        default:
          B('Unexpected session state: ' + a.l)
      }
      b !== a.N && ((a.N = b), a.h.dispatchEvent(new bc(b)))
    }
  T.ua = void 0
  T.O = function() {
    return T.ua ? T.ua : (T.ua = new T())
  }
  T.getInstance = T.O
  var V = function(a) {
      this.F = a
      try {
        this.F.createShadowRoot().innerHTML = cb().content
      } catch (b) {
        this.F.innerHTML = db()
      }
    },
    gc = function(a, b) {
      a.ka = T.O()
      a.Oa = a.Db.bind(a)
      a.ga = []
      for (var c = 0; 3 > c; c++)
        a.ga.push(b.querySelector('#cast_caf_icon_arch' + c))
      a.ab = b.querySelector('#cast_caf_icon_box')
      a.bb = b.querySelector('#cast_caf_icon_boxfill')
      a.Aa = 0
      a.J = null
      a.hb = window.getComputedStyle(a.F, null).display
      a.g = a.ka.N
      ec(a)
      a.F.addEventListener('click', fc)
      a.ka.addEventListener('caststatechanged', a.Oa)
    },
    hc = function(a) {
      a.ka.removeEventListener('caststatechanged', a.Oa)
      null !== a.J && (window.clearTimeout(a.J), (a.J = null))
    },
    fc = function() {
      T.O().requestSession()
    }
  V.prototype.Db = function(a) {
    this.g = a.castState
    ec(this)
  }
  var ec = function(a) {
    if ('NO_DEVICES_AVAILABLE' == a.g) a.F.style.display = 'none'
    else
      switch (((a.F.style.display = a.hb), a.g)) {
        case 'NOT_CONNECTED':
          ic(a, !1, 'cast_caf_state_h')
          break
        case 'CONNECTING':
          ic(a, !1, 'cast_caf_state_h')
          a.J || a.Ha()
          break
        case 'CONNECTED':
          ic(a, !0, 'cast_caf_state_c')
      }
  }
  V.prototype.Ha = function() {
    this.J = null
    if ('CONNECTING' == this.g) {
      for (var a = 0; 3 > a; a++) jc(this.ga[a], a == this.Aa)
      this.Aa = (this.Aa + 1) % 3
      this.J = window.setTimeout(this.Ha.bind(this), 300)
    }
  }
  var ic = function(a, b, c) {
      for (var d = na(a.ga), e = d.next(); !e.done; e = d.next()) jc(e.value, b)
      jc(a.ab, b)
      a.bb.setAttribute('class', c)
    },
    jc = function(a, b) {
      a.setAttribute('class', b ? 'cast_caf_state_c' : 'cast_caf_state_d')
    },
    W = function() {
      return HTMLElement.call(this) || this
    }
  g(W, HTMLElement)
  W.prototype.createdCallback = function() {
    this.s = new V(this)
  }
  W.prototype.attachedCallback = function() {
    gc(this.s, this.shadowRoot || this)
  }
  W.prototype.detachedCallback = function() {
    hc(this.s)
  }
  W.prototype.la = function() {}
  var X = function() {
    return HTMLButtonElement.call(this) || this
  }
  g(X, HTMLButtonElement)
  X.prototype.createdCallback = function() {
    this.s = new V(this)
  }
  X.prototype.attachedCallback = function() {
    gc(this.s, this.shadowRoot || this)
  }
  X.prototype.detachedCallback = function() {
    hc(this.s)
  }
  X.prototype.la = function() {}
  var lc = function() {
      var a = document.createElement.bind(document)
      document.createElement = function(b, c) {
        if (
          'google-cast-launcher' === b ||
          ('button' === b &&
            c &&
            ('google-cast-button' === c || 'google-cast-button' === c.is))
        ) {
          var d = a(b, c)
          kc(d)
          return d
        }
        return a.apply(null, arguments)
      }
    },
    mc = function() {
      document
        .querySelectorAll('button[is=google-cast-button], google-cast-launcher')
        .forEach(function(a) {
          return kc(a)
        })
    },
    kc = function(a) {
      a.s = new V(a)
      gc(a.s, a.shadowRoot || a)
      a.la = function() {
        hc(a.s)
      }
    }
  document.registerElement
    ? (document.registerElement('google-cast-button', {
        prototype: X.prototype,
        extends: 'button'
      }),
      document.registerElement('google-cast-launcher', {
        prototype: W.prototype
      }))
    : ('complete' !== document.readyState
        ? window.addEventListener('load', mc)
        : mc(),
      lc())
  r('cast.framework.RemotePlayer', function() {
    this.isMediaLoaded = this.isConnected = !1
    this.currentTime = this.duration = 0
    this.volumeLevel = 1
    this.canControlVolume = !0
    this.canSeek = this.canPause = this.isMuted = this.isPaused = !1
    this.displayStatus = this.title = this.statusText = this.displayName = ''
    this.controller = this.savedPlayerState = this.playerState = this.imageUrl = this.mediaInfo = null
  })
  var nc = function(a, b, c) {
    this.type = a
    this.field = b
    this.value = c
  }
  g(nc, Q)
  r('cast.framework.RemotePlayerChangedEvent', nc)
  var Y = function(a) {
    var b = new R()
    P.call(this, oc(a, b))
    this.h = b
    a = T.O()
    a.addEventListener('sessionstatechanged', this.Lb.bind(this))
    ;(a = a.b) ? Hb(this, a.c) : this.w()
  }
  g(Y, P)
  r('cast.framework.RemotePlayerController', Y)
  var oc = function(a, b) {
    return new window.Proxy(a, {
      set: function(a, d, e) {
        if (e === a[d]) return !0
        a[d] = e
        b.dispatchEvent(new nc(d + 'Changed', d, e))
        b.dispatchEvent(new nc('anyChanged', d, e))
        return !0
      }
    })
  }
  Y.prototype.addEventListener = function(a, b) {
    this.h.addEventListener(a, b)
  }
  Y.prototype.addEventListener = Y.prototype.addEventListener
  Y.prototype.removeEventListener = function(a, b) {
    this.h.removeEventListener(a, b)
  }
  Y.prototype.removeEventListener = Y.prototype.removeEventListener
  Y.prototype.Lb = function(a) {
    switch (a.sessionState) {
      case 'SESSION_STARTED':
      case 'SESSION_RESUMED':
        this.a.isConnected = !0
        var b = a.session && a.session.c
        b &&
          (Hb(this, b),
          a.session.addEventListener('mediasession', this.Ma.bind(this)))
    }
  }
  Y.prototype.w = function(a) {
    var b = T.O().b
    b
      ? (this.a.savedPlayerState = null)
      : this.a.isConnected &&
        (this.a.savedPlayerState = {
          mediaInfo: this.a.mediaInfo,
          currentTime: this.a.currentTime,
          isPaused: this.a.isPaused
        })
    P.prototype.w.call(this, a)
    this.a.isConnected = !!b
    this.a.statusText = (b && b.U) || ''
    a = b && b.Ja()
    this.a.playerState = (a && a.playerState) || null
  }
  Y.prototype.V = function(a) {
    P.prototype.V.call(this, a)
    var b = (this.a.mediaInfo = a) && a.metadata
    a = null
    var c = ''
    b && ((c = b.title || ''), (b = b.images) && 0 < b.length && (a = b[0].url))
    this.a.title = c
    this.a.imageUrl = a
  }
  Y.prototype.za = function() {
    P.prototype.za.call(this)
  }
  Y.prototype.playOrPause = Y.prototype.za
  Y.prototype.stop = function() {
    P.prototype.stop.call(this)
  }
  Y.prototype.stop = Y.prototype.stop
  Y.prototype.seek = function() {
    P.prototype.seek.call(this)
  }
  Y.prototype.seek = Y.prototype.seek
  Y.prototype.xa = function() {
    P.prototype.xa.call(this)
  }
  Y.prototype.muteOrUnmute = Y.prototype.xa
  Y.prototype.Ea = function() {
    P.prototype.Ea.call(this)
  }
  Y.prototype.setVolumeLevel = Y.prototype.Ea
  Y.prototype.qa = function(a) {
    return P.prototype.qa.call(this, a)
  }
  Y.prototype.getFormattedTime = Y.prototype.qa
  Y.prototype.ra = function(a, b) {
    return P.prototype.ra.call(this, a, b)
  }
  Y.prototype.getSeekPosition = Y.prototype.ra
  Y.prototype.sa = function(a, b) {
    return P.prototype.sa.call(this, a, b)
  }
  Y.prototype.getSeekTime = Y.prototype.sa
}.call(window))
