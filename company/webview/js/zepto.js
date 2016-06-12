var Zepto = function() {
    function t(t) {
        return null == t ? String(t) : Y[J.call(t)] || "object"
    }
    function e(e) {
        return "function" == t(e)
    }
    function n(t) {
        return null != t && t == t.window
    }
    function r(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }
    function i(e) {
        return "object" == t(e)
    }
    function o(t) {
        return i(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }
    function a(t) {
        return "number" == typeof t.length
    }
    function s(t) {
        return M.call(t,
        function(t) {
            return null != t
        })
    }
    function u(t) {
        return t.length > 0 ? j.fn.concat.apply([], t) : t
    }
    function c(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }
    function l(t) {
        return t in $ ? $[t] : $[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }
    function f(t, e) {
        return "number" != typeof e || Z[c(t)] ? e: e + "px"
    }
    function h(t) {
        var e, n;
        return L[t] || (e = A.createElement(t), A.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), L[t] = n),
        L[t]
    }
    function p(t) {
        return "children" in t ? D.call(t.children) : j.map(t.childNodes,
        function(t) {
            return 1 == t.nodeType ? t: void 0
        })
    }
    function d(t, e) {
        var n, r = t ? t.length: 0;
        for (n = 0; r > n; n++) this[n] = t[n];
        this.length = r,
        this.selector = e || ""
    }
    function m(t, e, n) {
        for (T in e) n && (o(e[T]) || Q(e[T])) ? (o(e[T]) && !o(t[T]) && (t[T] = {}), Q(e[T]) && !Q(t[T]) && (t[T] = []), m(t[T], e[T], n)) : e[T] !== E && (t[T] = e[T])
    }
    function g(t, e) {
        return null == e ? j(t) : j(t).filter(e)
    }
    function v(t, n, r, i) {
        return e(n) ? n.call(t, r, i) : n
    }
    function y(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }
    function x(t, e) {
        var n = t.className || "",
        r = n && n.baseVal !== E;
        return e === E ? r ? n.baseVal: n: void(r ? n.baseVal = e: t.className = e)
    }
    function w(t) {
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null: +t + "" == t ? +t: /^[\[\{]/.test(t) ? j.parseJSON(t) : t) : t
        } catch(e) {
            return t
        }
    }
    function b(t, e) {
        e(t);
        for (var n = 0,
        r = t.childNodes.length; r > n; n++) b(t.childNodes[n], e)
    }
    var E, T, j, S, N, C, P = [],
    O = P.concat,
    M = P.filter,
    D = P.slice,
    A = window.document,
    L = {},
    $ = {},
    Z = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    },
    R = /^\s*<(\w+|!)[^>]*>/,
    F = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    k = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    q = /^(?:body|html)$/i,
    H = /([A-Z])/g,
    _ = ["val", "css", "html", "text", "data", "width", "height", "offset"],
    z = ["after", "prepend", "before", "append"],
    I = A.createElement("table"),
    U = A.createElement("tr"),
    X = {
        tr: A.createElement("tbody"),
        tbody: I,
        thead: I,
        tfoot: I,
        td: U,
        th: U,
        "*": A.createElement("div")
    },
    B = /complete|loaded|interactive/,
    V = /^[\w-]*$/,
    Y = {},
    J = Y.toString,
    G = {},
    W = A.createElement("div"),
    K = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        "for": "htmlFor",
        "class": "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    },
    Q = Array.isArray ||
    function(t) {
        return t instanceof Array
    };
    return G.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return ! 1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var r, i = t.parentNode,
        o = !i;
        return o && (i = W).appendChild(t),
        r = ~G.qsa(i, e).indexOf(t),
        o && W.removeChild(t),
        r
    },
    N = function(t) {
        return t.replace(/-+(.)?/g,
        function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    },
    C = function(t) {
        return M.call(t,
        function(e, n) {
            return t.indexOf(e) == n
        })
    },
    G.fragment = function(t, e, n) {
        var r, i, a;
        return F.test(t) && (r = j(A.createElement(RegExp.$1))),
        r || (t.replace && (t = t.replace(k, "<$1></$2>")), e === E && (e = R.test(t) && RegExp.$1), e in X || (e = "*"), a = X[e], a.innerHTML = "" + t, r = j.each(D.call(a.childNodes),
        function() {
            a.removeChild(this)
        })),
        o(n) && (i = j(r), j.each(n,
        function(t, e) {
            _.indexOf(t) > -1 ? i[t](e) : i.attr(t, e)
        })),
        r
    },
    G.Z = function(t, e) {
        return new d(t, e)
    },
    G.isZ = function(t) {
        return t instanceof G.Z
    },
    G.init = function(t, n) {
        var r;
        if (!t) return G.Z();
        if ("string" == typeof t) if (t = t.trim(), "<" == t[0] && R.test(t)) r = G.fragment(t, RegExp.$1, n),
        t = null;
        else {
            if (n !== E) return j(n).find(t);
            r = G.qsa(A, t)
        } else {
            if (e(t)) return j(A).ready(t);
            if (G.isZ(t)) return t;
            if (Q(t)) r = s(t);
            else if (i(t)) r = [t],
            t = null;
            else if (R.test(t)) r = G.fragment(t.trim(), RegExp.$1, n),
            t = null;
            else {
                if (n !== E) return j(n).find(t);
                r = G.qsa(A, t)
            }
        }
        return G.Z(r, t)
    },
    j = function(t, e) {
        return G.init(t, e)
    },
    j.extend = function(t) {
        var e, n = D.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()),
        n.forEach(function(n) {
            m(t, n, e)
        }),
        t
    },
    G.qsa = function(t, e) {
        var n, r = "#" == e[0],
        i = !r && "." == e[0],
        o = r || i ? e.slice(1) : e,
        a = V.test(o);
        return t.getElementById && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : D.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    },
    j.contains = A.documentElement.contains ?
    function(t, e) {
        return t !== e && t.contains(e)
    }: function(t, e) {
        for (; e && (e = e.parentNode);) if (e === t) return ! 0;
        return ! 1
    },
    j.type = t,
    j.isFunction = e,
    j.isWindow = n,
    j.isArray = Q,
    j.isPlainObject = o,
    j.isEmptyObject = function(t) {
        var e;
        for (e in t) return ! 1;
        return ! 0
    },
    j.inArray = function(t, e, n) {
        return P.indexOf.call(e, t, n)
    },
    j.camelCase = N,
    j.trim = function(t) {
        return null == t ? "": String.prototype.trim.call(t)
    },
    j.uuid = 0,
    j.support = {},
    j.expr = {},
    j.noop = function() {},
    j.map = function(t, e) {
        var n, r, i, o = [];
        if (a(t)) for (r = 0; r < t.length; r++) n = e(t[r], r),
        null != n && o.push(n);
        else for (i in t) n = e(t[i], i),
        null != n && o.push(n);
        return u(o)
    },
    j.each = function(t, e) {
        var n, r;
        if (a(t)) {
            for (n = 0; n < t.length; n++) if (e.call(t[n], n, t[n]) === !1) return t
        } else for (r in t) if (e.call(t[r], r, t[r]) === !1) return t;
        return t
    },
    j.grep = function(t, e) {
        return M.call(t, e)
    },
    window.JSON && (j.parseJSON = JSON.parse),
    j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(t, e) {
        Y["[object " + e + "]"] = e.toLowerCase()
    }),
    j.fn = {
        constructor: G.Z,
        length: 0,
        forEach: P.forEach,
        reduce: P.reduce,
        push: P.push,
        sort: P.sort,
        splice: P.splice,
        indexOf: P.indexOf,
        concat: function() {
            var t, e, n = [];
            for (t = 0; t < arguments.length; t++) e = arguments[t],
            n[t] = G.isZ(e) ? e.toArray() : e;
            return O.apply(G.isZ(this) ? this.toArray() : this, n)
        },
        map: function(t) {
            return j(j.map(this,
            function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return j(D.apply(this, arguments))
        },
        ready: function(t) {
            return B.test(A.readyState) && A.body ? t(j) : A.addEventListener("DOMContentLoaded",
            function() {
                t(j)
            },
            !1),
            this
        },
        get: function(t) {
            return t === E ? D.call(this) : this[t >= 0 ? t: t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return P.every.call(this,
            function(e, n) {
                return t.call(e, n, e) !== !1
            }),
            this
        },
        filter: function(t) {
            return e(t) ? this.not(this.not(t)) : j(M.call(this,
            function(e) {
                return G.matches(e, t)
            }))
        },
        add: function(t, e) {
            return j(C(this.concat(j(t, e))))
        },
        is: function(t) {
            return this.length > 0 && G.matches(this[0], t)
        },
        not: function(t) {
            var n = [];
            if (e(t) && t.call !== E) this.each(function(e) {
                t.call(this, e) || n.push(this)
            });
            else {
                var r = "string" == typeof t ? this.filter(t) : a(t) && e(t.item) ? D.call(t) : j(t);
                this.forEach(function(t) {
                    r.indexOf(t) < 0 && n.push(t)
                })
            }
            return j(n)
        },
        has: function(t) {
            return this.filter(function() {
                return i(t) ? j.contains(this, t) : j(this).find(t).size()
            })
        },
        eq: function(t) {
            return - 1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !i(t) ? t: j(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !i(t) ? t: j(t)
        },
        find: function(t) {
            var e, n = this;
            return e = t ? "object" == typeof t ? j(t).filter(function() {
                var t = this;
                return P.some.call(n,
                function(e) {
                    return j.contains(e, t)
                })
            }) : 1 == this.length ? j(G.qsa(this[0], t)) : this.map(function() {
                return G.qsa(this, t)
            }) : j()
        },
        closest: function(t, e) {
            var n = this[0],
            i = !1;
            for ("object" == typeof t && (i = j(t)); n && !(i ? i.indexOf(n) >= 0 : G.matches(n, t));) n = n !== e && !r(n) && n.parentNode;
            return j(n)
        },
        parents: function(t) {
            for (var e = [], n = this; n.length > 0;) n = j.map(n,
            function(t) {
                return (t = t.parentNode) && !r(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return g(e, t)
        },
        parent: function(t) {
            return g(C(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return g(this.map(function() {
                return p(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return this.contentDocument || D.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return g(this.map(function(t, e) {
                return M.call(p(e.parentNode),
                function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return j.map(this,
            function(e) {
                return e[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""),
                "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var n = e(t);
            if (this[0] && !n) var r = j(t).get(0),
            i = r.parentNode || this.length > 1;
            return this.each(function(e) {
                j(this).wrapAll(n ? t.call(this, e) : i ? r.cloneNode(!0) : r)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                j(this[0]).before(t = j(t));
                for (var e; (e = t.children()).length;) t = e.first();
                j(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var n = e(t);
            return this.each(function(e) {
                var r = j(this),
                i = r.contents(),
                o = n ? t.call(this, e) : t;
                i.length ? i.wrapAll(o) : r.append(o)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                j(this).replaceWith(j(this).children())
            }),
            this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return this.each(function() {
                var e = j(this); (t === E ? "none" == e.css("display") : t) ? e.show() : e.hide()
            })
        },
        prev: function(t) {
            return j(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return j(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = this.innerHTML;
                j(this).empty().append(v(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML: null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = v(this, t, e, this.textContent);
                this.textContent = null == n ? "": "" + n
            }) : 0 in this ? this[0].textContent: null
        },
        attr: function(t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                if (1 === this.nodeType) if (i(t)) for (T in t) y(this, T, t[T]);
                else y(this, t, v(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n: E
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    y(this, t)
                },
                this)
            })
        },
        prop: function(t, e) {
            return t = K[t] || t,
            1 in arguments ? this.each(function(n) {
                this[t] = v(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(t, e) {
            var n = "data-" + t.replace(H, "-$1").toLowerCase(),
            r = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== r ? w(r) : E
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = v(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? j(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t) return this.each(function(e) {
                var n = j(this),
                r = v(this, t, e, n.offset()),
                i = n.offsetParent().offset(),
                o = {
                    top: r.top - i.top,
                    left: r.left - i.left
                };
                "static" == n.css("position") && (o.position = "relative"),
                n.css(o)
            });
            if (!this.length) return null;
            if (!j.contains(A.documentElement, this[0])) return {
                top: 0,
                left: 0
            };
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function(e, n) {
            if (arguments.length < 2) {
                var r, i = this[0];
                if (!i) return;
                if (r = getComputedStyle(i, ""), "string" == typeof e) return i.style[N(e)] || r.getPropertyValue(e);
                if (Q(e)) {
                    var o = {};
                    return j.each(e,
                    function(t, e) {
                        o[e] = i.style[N(e)] || r.getPropertyValue(e)
                    }),
                    o
                }
            }
            var a = "";
            if ("string" == t(e)) n || 0 === n ? a = c(e) + ":" + f(e, n) : this.each(function() {
                this.style.removeProperty(c(e))
            });
            else for (T in e) e[T] || 0 === e[T] ? a += c(T) + ":" + f(T, e[T]) + ";": this.each(function() {
                this.style.removeProperty(c(T))
            });
            return this.each(function() {
                this.style.cssText += ";" + a
            })
        },
        index: function(t) {
            return t ? this.indexOf(j(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return t ? P.some.call(this,
            function(t) {
                return this.test(x(t))
            },
            l(t)) : !1
        },
        addClass: function(t) {
            return t ? this.each(function(e) {
                if ("className" in this) {
                    S = [];
                    var n = x(this),
                    r = v(this, t, e, n);
                    r.split(/\s+/g).forEach(function(t) {
                        j(this).hasClass(t) || S.push(t)
                    },
                    this),
                    S.length && x(this, n + (n ? " ": "") + S.join(" "))
                }
            }) : this
        },
        removeClass: function(t) {
            return this.each(function(e) {
                if ("className" in this) {
                    if (t === E) return x(this, "");
                    S = x(this),
                    v(this, t, e, S).split(/\s+/g).forEach(function(t) {
                        S = S.replace(l(t), " ")
                    }),
                    x(this, S.trim())
                }
            })
        },
        toggleClass: function(t, e) {
            return t ? this.each(function(n) {
                var r = j(this),
                i = v(this, t, n, x(this));
                i.split(/\s+/g).forEach(function(t) { (e === E ? !r.hasClass(t) : e) ? r.addClass(t) : r.removeClass(t)
                })
            }) : this
        },
        scrollTop: function(t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === E ? e ? this[0].scrollTop: this[0].pageYOffset: this.each(e ?
                function() {
                    this.scrollTop = t
                }: function() {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        scrollLeft: function(t) {
            if (this.length) {
                var e = "scrollLeft" in this[0];
                return t === E ? e ? this[0].scrollLeft: this[0].pageXOffset: this.each(e ?
                function() {
                    this.scrollLeft = t
                }: function() {
                    this.scrollTo(t, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0],
                e = this.offsetParent(),
                n = this.offset(),
                r = q.test(e[0].nodeName) ? {
                    top: 0,
                    left: 0
                }: e.offset();
                return n.top -= parseFloat(j(t).css("margin-top")) || 0,
                n.left -= parseFloat(j(t).css("margin-left")) || 0,
                r.top += parseFloat(j(e[0]).css("border-top-width")) || 0,
                r.left += parseFloat(j(e[0]).css("border-left-width")) || 0,
                {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || A.body; t && !q.test(t.nodeName) && "static" == j(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    },
    j.fn.detach = j.fn.remove,
    ["width", "height"].forEach(function(t) {
        var e = t.replace(/./,
        function(t) {
            return t[0].toUpperCase()
        });
        j.fn[t] = function(i) {
            var o, a = this[0];
            return i === E ? n(a) ? a["inner" + e] : r(a) ? a.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                a = j(this),
                a.css(t, v(this, i, e, a[t]()))
            })
        }
    }),
    z.forEach(function(e, n) {
        var r = n % 2;
        j.fn[e] = function() {
            var e, i, o = j.map(arguments,
            function(n) {
                return e = t(n),
                "object" == e || "array" == e || null == n ? n: G.fragment(n)
            }),
            a = this.length > 1;
            return o.length < 1 ? this: this.each(function(t, e) {
                i = r ? e: e.parentNode,
                e = 0 == n ? e.nextSibling: 1 == n ? e.firstChild: 2 == n ? e: null;
                var s = j.contains(A.documentElement, i);
                o.forEach(function(t) {
                    if (a) t = t.cloneNode(!0);
                    else if (!i) return j(t).remove();
                    i.insertBefore(t, e),
                    s && b(t,
                    function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        },
        j.fn[r ? e + "To": "insert" + (n ? "Before": "After")] = function(t) {
            return j(t)[e](this),
            this
        }
    }),
    G.Z.prototype = d.prototype = j.fn,
    G.uniq = C,
    G.deserializeValue = w,
    j.zepto = G,
    j
} ();
window.Zepto = Zepto,
void 0 === window.$ && (window.$ = Zepto),
function(t) {
    function e(e, n, r) {
        var i = t.Event(n);
        return t(e).trigger(i, r),
        !i.isDefaultPrevented()
    }
    function n(t, n, r, i) {
        return t.global ? e(n || y, r, i) : void 0
    }
    function r(e) {
        e.global && 0 === t.active++&&n(e, null, "ajaxStart")
    }
    function i(e) {
        e.global && !--t.active && n(e, null, "ajaxStop")
    }
    function o(t, e) {
        var r = e.context;
        return e.beforeSend.call(r, t, e) === !1 || n(e, r, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void n(e, r, "ajaxSend", [t, e])
    }
    function a(t, e, r, i) {
        var o = r.context,
        a = "success";
        r.success.call(o, t, a, e),
        i && i.resolveWith(o, [t, a, e]),
        n(r, o, "ajaxSuccess", [e, r, t]),
        u(a, e, r)
    }
    function s(t, e, r, i, o) {
        var a = i.context;
        i.error.call(a, r, e, t),
        o && o.rejectWith(a, [r, e, t]),
        n(i, a, "ajaxError", [r, i, t || e]),
        u(e, r, i)
    }
    function u(t, e, r) {
        var o = r.context;
        r.complete.call(o, e, t),
        n(r, o, "ajaxComplete", [e, r]),
        i(r)
    }
    function c() {}
    function l(t) {
        return t && (t = t.split(";", 2)[0]),
        t && (t == T ? "html": t == E ? "json": w.test(t) ? "script": b.test(t) && "xml") || "text"
    }
    function f(t, e) {
        return "" == e ? t: (t + "&" + e).replace(/[&?]{1,2}/, "?")
    }
    function h(e) {
        e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)),
        !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
    }
    function p(e, n, r, i) {
        return t.isFunction(n) && (i = r, r = n, n = void 0),
        t.isFunction(r) || (i = r, r = void 0),
        {
            url: e,
            data: n,
            success: r,
            dataType: i
        }
    }
    function d(e, n, r, i) {
        var o, a = t.isArray(n),
        s = t.isPlainObject(n);
        t.each(n,
        function(n, u) {
            o = t.type(u),
            i && (n = r ? i: i + "[" + (s || "object" == o || "array" == o ? n: "") + "]"),
            !i && a ? e.add(u.name, u.value) : "array" == o || !r && "object" == o ? d(e, u, r, n) : e.add(n, u)
        })
    }
    var m, g, v = 0,
    y = window.document,
    x = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    w = /^(?:text|application)\/javascript/i,
    b = /^(?:text|application)\/xml/i,
    E = "application/json",
    T = "text/html",
    j = /^\s*$/,
    S = y.createElement("a");
    S.href = window.location.href,
    t.active = 0,
    t.ajaxJSONP = function(e, n) {
        if (! ("type" in e)) return t.ajax(e);
        var r, i, u = e.jsonpCallback,
        c = (t.isFunction(u) ? u() : u) || "jsonp" + ++v,
        l = y.createElement("script"),
        f = window[c],
        h = function(e) {
            t(l).triggerHandler("error", e || "abort")
        },
        p = {
            abort: h
        };
        return n && n.promise(p),
        t(l).on("load error",
        function(o, u) {
            clearTimeout(i),
            t(l).off().remove(),
            "error" != o.type && r ? a(r[0], p, e, n) : s(null, u || "error", p, e, n),
            window[c] = f,
            r && t.isFunction(f) && f(r[0]),
            f = r = void 0
        }),
        o(p, e) === !1 ? (h("abort"), p) : (window[c] = function() {
            r = arguments
        },
        l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (i = setTimeout(function() {
            h("timeout")
        },
        e.timeout)), p)
    },
    t.ajaxSettings = {
        type: "GET",
        beforeSend: c,
        success: c,
        error: c,
        complete: c,
        context: null,
        global: !0,
        xhr: function() {
            return new window.XMLHttpRequest
        },
        accepts: {
            script: "text/javascript, application/javascript, application/x-javascript",
            json: E,
            xml: "application/xml, text/xml",
            html: T,
            text: "text/plain"
        },
        crossDomain: !1,
        timeout: 0,
        processData: !0,
        cache: !0
    },
    t.ajax = function(e) {
        var n, i, u = t.extend({},
        e || {}),
        p = t.Deferred && t.Deferred();
        for (m in t.ajaxSettings) void 0 === u[m] && (u[m] = t.ajaxSettings[m]);
        r(u),
        u.crossDomain || (n = y.createElement("a"), n.href = u.url, n.href = n.href, u.crossDomain = S.protocol + "//" + S.host != n.protocol + "//" + n.host),
        u.url || (u.url = window.location.toString()),
        (i = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, i)),
        h(u);
        var d = u.dataType,
        v = /\?.+=\?/.test(u.url);
        if (v && (d = "jsonp"), u.cache !== !1 && (e && e.cache === !0 || "script" != d && "jsonp" != d) || (u.url = f(u.url, "_=" + Date.now())), "jsonp" == d) return v || (u.url = f(u.url, u.jsonp ? u.jsonp + "=?": u.jsonp === !1 ? "": "callback=?")),
        t.ajaxJSONP(u, p);
        var x, w = u.accepts[d],
        b = {},
        E = function(t, e) {
            b[t.toLowerCase()] = [t, e]
        },
        T = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1: window.location.protocol,
        N = u.xhr(),
        C = N.setRequestHeader;
        if (p && p.promise(N), u.crossDomain || E("X-Requested-With", "XMLHttpRequest"), E("Accept", w || "*/*"), (w = u.mimeType || w) && (w.indexOf(",") > -1 && (w = w.split(",", 2)[0]), N.overrideMimeType && N.overrideMimeType(w)), (u.contentType || u.contentType !== !1 && u.data && "GET" != u.type.toUpperCase()) && E("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers) for (g in u.headers) E(g, u.headers[g]);
        if (N.setRequestHeader = E, N.onreadystatechange = function() {
            if (4 == N.readyState) {
                N.onreadystatechange = c,
                clearTimeout(x);
                var e, n = !1;
                if (N.status >= 200 && N.status < 300 || 304 == N.status || 0 == N.status && "file:" == T) {
                    d = d || l(u.mimeType || N.getResponseHeader("content-type")),
                    e = N.responseText;
                    try {
                        "script" == d ? (1, eval)(e) : "xml" == d ? e = N.responseXML: "json" == d && (e = j.test(e) ? null: t.parseJSON(e))
                    } catch(r) {
                        n = r
                    }
                    n ? s(n, "parsererror", N, u, p) : a(e, N, u, p)
                } else s(N.statusText || null, N.status ? "error": "abort", N, u, p)
            }
        },
        o(N, u) === !1) return N.abort(),
        s(null, "abort", N, u, p),
        N;
        if (u.xhrFields) for (g in u.xhrFields) N[g] = u.xhrFields[g];
        var P = "async" in u ? u.async: !0;
        N.open(u.type, u.url, P, u.username, u.password);
        for (g in b) C.apply(N, b[g]);
        return u.timeout > 0 && (x = setTimeout(function() {
            N.onreadystatechange = c,
            N.abort(),
            s(null, "timeout", N, u, p)
        },
        u.timeout)),
        N.send(u.data ? u.data: null),
        N
    },
    t.get = function() {
        return t.ajax(p.apply(null, arguments))
    },
    t.post = function() {
        var e = p.apply(null, arguments);
        return e.type = "POST",
        t.ajax(e)
    },
    t.getJSON = function() {
        var e = p.apply(null, arguments);
        return e.dataType = "json",
        t.ajax(e)
    },
    t.fn.load = function(e, n, r) {
        if (!this.length) return this;
        var i, o = this,
        a = e.split(/\s/),
        s = p(e, n, r),
        u = s.success;
        return a.length > 1 && (s.url = a[0], i = a[1]),
        s.success = function(e) {
            o.html(i ? t("<div>").html(e.replace(x, "")).find(i) : e),
            u && u.apply(o, arguments)
        },
        t.ajax(s),
        this
    };
    var N = encodeURIComponent;
    t.param = function(e, n) {
        var r = [];
        return r.add = function(e, n) {
            t.isFunction(n) && (n = n()),
            null == n && (n = ""),
            this.push(N(e) + "=" + N(n))
        },
        d(r, e, n),
        r.join("&").replace(/%20/g, "+")
    }
} (Zepto),
function(t) {
    function e(t) {
        return t._zid || (t._zid = h++)
    }
    function n(t, n, o, a) {
        if (n = r(n), n.ns) var s = i(n.ns);
        return (g[e(t)] || []).filter(function(t) {
            return ! (!t || n.e && t.e != n.e || n.ns && !s.test(t.ns) || o && e(t.fn) !== e(o) || a && t.sel != a)
        })
    }
    function r(t) {
        var e = ("" + t).split(".");
        return {
            e: e[0],
            ns: e.slice(1).sort().join(" ")
        }
    }
    function i(t) {
        return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
    }
    function o(t, e) {
        return t.del && !y && t.e in x || !!e
    }
    function a(t) {
        return w[t] || y && x[t] || t
    }
    function s(n, i, s, u, l, h, p) {
        var d = e(n),
        m = g[d] || (g[d] = []);
        i.split(/\s/).forEach(function(e) {
            if ("ready" == e) return t(document).ready(s);
            var i = r(e);
            i.fn = s,
            i.sel = l,
            i.e in w && (s = function(e) {
                var n = e.relatedTarget;
                return ! n || n !== this && !t.contains(this, n) ? i.fn.apply(this, arguments) : void 0
            }),
            i.del = h;
            var d = h || s;
            i.proxy = function(t) {
                if (t = c(t), !t.isImmediatePropagationStopped()) {
                    t.data = u;
                    var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
                    return e === !1 && (t.preventDefault(), t.stopPropagation()),
                    e
                }
            },
            i.i = m.length,
            m.push(i),
            "addEventListener" in n && n.addEventListener(a(i.e), i.proxy, o(i, p))
        })
    }
    function u(t, r, i, s, u) {
        var c = e(t); (r || "").split(/\s/).forEach(function(e) {
            n(t, e, i, s).forEach(function(e) {
                delete g[c][e.i],
                "removeEventListener" in t && t.removeEventListener(a(e.e), e.proxy, o(e, u))
            })
        })
    }
    function c(e, n) {
        return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(j,
        function(t, r) {
            var i = n[t];
            e[t] = function() {
                return this[r] = b,
                i && i.apply(n, arguments)
            },
            e[r] = E
        }), (n.defaultPrevented !== f ? n.defaultPrevented: "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = b)),
        e
    }
    function l(t) {
        var e, n = {
            originalEvent: t
        };
        for (e in t) T.test(e) || t[e] === f || (n[e] = t[e]);
        return c(n, t)
    }
    var f, h = 1,
    p = Array.prototype.slice,
    d = t.isFunction,
    m = function(t) {
        return "string" == typeof t
    },
    g = {},
    v = {},
    y = "onfocusin" in window,
    x = {
        focus: "focusin",
        blur: "focusout"
    },
    w = {
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents",
    t.event = {
        add: s,
        remove: u
    },
    t.proxy = function(n, r) {
        var i = 2 in arguments && p.call(arguments, 2);
        if (d(n)) {
            var o = function() {
                return n.apply(r, i ? i.concat(p.call(arguments)) : arguments)
            };
            return o._zid = e(n),
            o
        }
        if (m(r)) return i ? (i.unshift(n[r], n), t.proxy.apply(null, i)) : t.proxy(n[r], n);
        throw new TypeError("expected function")
    },
    t.fn.bind = function(t, e, n) {
        return this.on(t, e, n)
    },
    t.fn.unbind = function(t, e) {
        return this.off(t, e)
    },
    t.fn.one = function(t, e, n, r) {
        return this.on(t, e, n, r, 1)
    };
    var b = function() {
        return ! 0
    },
    E = function() {
        return ! 1
    },
    T = /^([A-Z]|returnValue$|layer[XY]$)/,
    j = {
        preventDefault: "isDefaultPrevented",
        stopImmediatePropagation: "isImmediatePropagationStopped",
        stopPropagation: "isPropagationStopped"
    };
    t.fn.delegate = function(t, e, n) {
        return this.on(e, t, n)
    },
    t.fn.undelegate = function(t, e, n) {
        return this.off(e, t, n)
    },
    t.fn.live = function(e, n) {
        return t(document.body).delegate(this.selector, e, n),
        this
    },
    t.fn.die = function(e, n) {
        return t(document.body).undelegate(this.selector, e, n),
        this
    },
    t.fn.on = function(e, n, r, i, o) {
        var a, c, h = this;
        return e && !m(e) ? (t.each(e,
        function(t, e) {
            h.on(t, n, r, e, o)
        }), h) : (m(n) || d(i) || i === !1 || (i = r, r = n, n = f), (i === f || r === !1) && (i = r, r = f), i === !1 && (i = E), h.each(function(f, h) {
            o && (a = function(t) {
                return u(h, t.type, i),
                i.apply(this, arguments)
            }),
            n && (c = function(e) {
                var r, o = t(e.target).closest(n, h).get(0);
                return o && o !== h ? (r = t.extend(l(e), {
                    currentTarget: o,
                    liveFired: h
                }), (a || i).apply(o, [r].concat(p.call(arguments, 1)))) : void 0
            }),
            s(h, e, i, r, n, c || a)
        }))
    },
    t.fn.off = function(e, n, r) {
        var i = this;
        return e && !m(e) ? (t.each(e,
        function(t, e) {
            i.off(t, n, e)
        }), i) : (m(n) || d(r) || r === !1 || (r = n, n = f), r === !1 && (r = E), i.each(function() {
            u(this, e, r, n)
        }))
    },
    t.fn.trigger = function(e, n) {
        return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e),
        e._args = n,
        this.each(function() {
            e.type in x && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
        })
    },
    t.fn.triggerHandler = function(e, r) {
        var i, o;
        return this.each(function(a, s) {
            i = l(m(e) ? t.Event(e) : e),
            i._args = r,
            i.target = s,
            t.each(n(s, e.type || e),
            function(t, e) {
                return o = e.proxy(i),
                i.isImmediatePropagationStopped() ? !1 : void 0
            })
        }),
        o
    },
    "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
        t.fn[e] = function(t) {
            return 0 in arguments ? this.bind(e, t) : this.trigger(e)
        }
    }),
    t.Event = function(t, e) {
        m(t) || (e = t, t = e.type);
        var n = document.createEvent(v[t] || "Events"),
        r = !0;
        if (e) for (var i in e)"bubbles" == i ? r = !!e[i] : n[i] = e[i];
        return n.initEvent(t, r, !0),
        c(n)
    }
} (Zepto),
function(t) {
    function e(t, e, n, r) {
        return Math.abs(t - e) >= Math.abs(n - r) ? t - e > 0 ? "Left": "Right": n - r > 0 ? "Up": "Down"
    }
    function n() {
        l = null,
        h.last && (h.el.trigger("longTap"), h = {})
    }
    function r() {
        l && clearTimeout(l),
        l = null
    }
    function i() {
        s && clearTimeout(s),
        u && clearTimeout(u),
        c && clearTimeout(c),
        l && clearTimeout(l),
        s = u = c = l = null,
        h = {}
    }
    function o(t) {
        return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
    }
    function a(t, e) {
        return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
    }
    var s, u, c, l, f, h = {},
    p = 750;
    t(document).ready(function() {
        var d, m, g, v, y = 0,
        x = 0;
        "MSGesture" in window && (f = new MSGesture, f.target = document.body),
        t(document).bind("MSGestureEnd",
        function(t) {
            var e = t.velocityX > 1 ? "Right": t.velocityX < -1 ? "Left": t.velocityY > 1 ? "Down": t.velocityY < -1 ? "Up": null;
            e && (h.el.trigger("swipe"), h.el.trigger("swipe" + e))
        }).on("touchstart MSPointerDown pointerdown",
        function(e) { (!(v = a(e, "down")) || o(e)) && (g = v ? e: e.touches[0], e.touches && 1 === e.touches.length && h.x2 && (h.x2 = void 0, h.y2 = void 0), d = Date.now(), m = d - (h.last || d), h.el = t("tagName" in g.target ? g.target: g.target.parentNode), s && clearTimeout(s), h.x1 = g.pageX, h.y1 = g.pageY, m > 0 && 250 >= m && (h.isDoubleTap = !0), h.last = d, l = setTimeout(n, p), f && v && f.addPointer(e.pointerId))
        }).on("touchmove MSPointerMove pointermove",
        function(t) { (!(v = a(t, "move")) || o(t)) && (g = v ? t: t.touches[0], r(), h.x2 = g.pageX, h.y2 = g.pageY, y += Math.abs(h.x1 - h.x2), x += Math.abs(h.y1 - h.y2))
        }).on("touchend MSPointerUp pointerup",
        function(n) { (!(v = a(n, "up")) || o(n)) && (r(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? c = setTimeout(function() {
                h.el.trigger("swipe"),
                h.el.trigger("swipe" + e(h.x1, h.x2, h.y1, h.y2)),
                h = {}
            },
            0) : "last" in h && (30 > y && 30 > x ? u = setTimeout(function() {
                var e = t.Event("tap");
                e.cancelTouch = i,
                h.el.trigger(e),
                h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), h = {}) : s = setTimeout(function() {
                    s = null,
                    h.el && h.el.trigger("singleTap"),
                    h = {}
                },
                250)
            },
            0) : h = {}), y = x = 0)
        }).on("touchcancel MSPointerCancel pointercancel", i),
        t(window).on("scroll", i)
    }),
    ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
        t.fn[e] = function(t) {
            return this.on(e, t)
        }
    })
} (Zepto);; (function() {
    var n = this,
    t = n._,
    r = Array.prototype,
    e = Object.prototype,
    u = Function.prototype,
    i = r.push,
    a = r.slice,
    o = r.concat,
    l = e.toString,
    c = e.hasOwnProperty,
    f = Array.isArray,
    s = Object.keys,
    p = u.bind,
    h = function(n) {
        return n instanceof h ? n: this instanceof h ? void(this._wrapped = n) : new h(n)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = h), exports._ = h) : n._ = h,
    h.VERSION = "1.7.0";
    var g = function(n, t, r) {
        if (void 0 === t) return n;
        switch (null == r ? 3 : r) {
        case 1:
            return function(r) {
                return n.call(t, r)
            };
        case 2:
            return function(r, e) {
                return n.call(t, r, e)
            };
        case 3:
            return function(r, e, u) {
                return n.call(t, r, e, u)
            };
        case 4:
            return function(r, e, u, i) {
                return n.call(t, r, e, u, i)
            }
        }
        return function() {
            return n.apply(t, arguments)
        }
    };
    h.iteratee = function(n, t, r) {
        return null == n ? h.identity: h.isFunction(n) ? g(n, t, r) : h.isObject(n) ? h.matches(n) : h.property(n)
    },
    h.each = h.forEach = function(n, t, r) {
        if (null == n) return n;
        t = g(t, r);
        var e, u = n.length;
        if (u === +u) for (e = 0; u > e; e++) t(n[e], e, n);
        else {
            var i = h.keys(n);
            for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n)
        }
        return n
    },
    h.map = h.collect = function(n, t, r) {
        if (null == n) return [];
        t = h.iteratee(t, r);
        for (var e, u = n.length !== +n.length && h.keys(n), i = (u || n).length, a = Array(i), o = 0; i > o; o++) e = u ? u[o] : o,
        a[o] = t(n[e], e, n);
        return a
    };
    var v = "Reduce of empty array with no initial value";
    h.reduce = h.foldl = h.inject = function(n, t, r, e) {
        null == n && (n = []),
        t = g(t, e, 4);
        var u, i = n.length !== +n.length && h.keys(n),
        a = (i || n).length,
        o = 0;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(v);
            r = n[i ? i[o++] : o++]
        }
        for (; a > o; o++) u = i ? i[o] : o,
        r = t(r, n[u], u, n);
        return r
    },
    h.reduceRight = h.foldr = function(n, t, r, e) {
        null == n && (n = []),
        t = g(t, e, 4);
        var u, i = n.length !== +n.length && h.keys(n),
        a = (i || n).length;
        if (arguments.length < 3) {
            if (!a) throw new TypeError(v);
            r = n[i ? i[--a] : --a]
        }
        for (; a--;) u = i ? i[a] : a,
        r = t(r, n[u], u, n);
        return r
    },
    h.find = h.detect = function(n, t, r) {
        var e;
        return t = h.iteratee(t, r),
        h.some(n,
        function(n, r, u) {
            return t(n, r, u) ? (e = n, !0) : void 0
        }),
        e
    },
    h.filter = h.select = function(n, t, r) {
        var e = [];
        return null == n ? e: (t = h.iteratee(t, r), h.each(n,
        function(n, r, u) {
            t(n, r, u) && e.push(n)
        }), e)
    },
    h.reject = function(n, t, r) {
        return h.filter(n, h.negate(h.iteratee(t)), r)
    },
    h.every = h.all = function(n, t, r) {
        if (null == n) return ! 0;
        t = h.iteratee(t, r);
        var e, u, i = n.length !== +n.length && h.keys(n),
        a = (i || n).length;
        for (e = 0; a > e; e++) if (u = i ? i[e] : e, !t(n[u], u, n)) return ! 1;
        return ! 0
    },
    h.some = h.any = function(n, t, r) {
        if (null == n) return ! 1;
        t = h.iteratee(t, r);
        var e, u, i = n.length !== +n.length && h.keys(n),
        a = (i || n).length;
        for (e = 0; a > e; e++) if (u = i ? i[e] : e, t(n[u], u, n)) return ! 0;
        return ! 1
    },
    h.contains = h.include = function(n, t) {
        return null == n ? !1 : (n.length !== +n.length && (n = h.values(n)), h.indexOf(n, t) >= 0)
    },
    h.invoke = function(n, t) {
        var r = a.call(arguments, 2),
        e = h.isFunction(t);
        return h.map(n,
        function(n) {
            return (e ? t: n[t]).apply(n, r)
        })
    },
    h.pluck = function(n, t) {
        return h.map(n, h.property(t))
    },
    h.where = function(n, t) {
        return h.filter(n, h.matches(t))
    },
    h.findWhere = function(n, t) {
        return h.find(n, h.matches(t))
    },
    h.max = function(n, t, r) {
        var e, u, i = -1 / 0,
        a = -1 / 0;
        if (null == t && null != n) {
            n = n.length === +n.length ? n: h.values(n);
            for (var o = 0,
            l = n.length; l > o; o++) e = n[o],
            e > i && (i = e)
        } else t = h.iteratee(t, r),
        h.each(n,
        function(n, r, e) {
            u = t(n, r, e),
            (u > a || u === -1 / 0 && i === -1 / 0) && (i = n, a = u)
        });
        return i
    },
    h.min = function(n, t, r) {
        var e, u, i = 1 / 0,
        a = 1 / 0;
        if (null == t && null != n) {
            n = n.length === +n.length ? n: h.values(n);
            for (var o = 0,
            l = n.length; l > o; o++) e = n[o],
            i > e && (i = e)
        } else t = h.iteratee(t, r),
        h.each(n,
        function(n, r, e) {
            u = t(n, r, e),
            (a > u || 1 / 0 === u && 1 / 0 === i) && (i = n, a = u)
        });
        return i
    },
    h.shuffle = function(n) {
        for (var t, r = n && n.length === +n.length ? n: h.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = h.random(0, i),
        t !== i && (u[i] = u[t]),
        u[t] = r[i];
        return u
    },
    h.sample = function(n, t, r) {
        return null == t || r ? (n.length !== +n.length && (n = h.values(n)), n[h.random(n.length - 1)]) : h.shuffle(n).slice(0, Math.max(0, t))
    },
    h.sortBy = function(n, t, r) {
        return t = h.iteratee(t, r),
        h.pluck(h.map(n,
        function(n, r, e) {
            return {
                value: n,
                index: r,
                criteria: t(n, r, e)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
            e = t.criteria;
            if (r !== e) {
                if (r > e || void 0 === r) return 1;
                if (e > r || void 0 === e) return - 1
            }
            return n.index - t.index
        }), "value")
    };
    var m = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = h.iteratee(r, e),
            h.each(t,
            function(e, i) {
                var a = r(e, i, t);
                n(u, e, a)
            }),
            u
        }
    };
    h.groupBy = m(function(n, t, r) {
        h.has(n, r) ? n[r].push(t) : n[r] = [t]
    }),
    h.indexBy = m(function(n, t, r) {
        n[r] = t
    }),
    h.countBy = m(function(n, t, r) {
        h.has(n, r) ? n[r]++:n[r] = 1
    }),
    h.sortedIndex = function(n, t, r, e) {
        r = h.iteratee(r, e, 1);
        for (var u = r(t), i = 0, a = n.length; a > i;) {
            var o = i + a >>> 1;
            r(n[o]) < u ? i = o + 1 : a = o
        }
        return i
    },
    h.toArray = function(n) {
        return n ? h.isArray(n) ? a.call(n) : n.length === +n.length ? h.map(n, h.identity) : h.values(n) : []
    },
    h.size = function(n) {
        return null == n ? 0 : n.length === +n.length ? n.length: h.keys(n).length
    },
    h.partition = function(n, t, r) {
        t = h.iteratee(t, r);
        var e = [],
        u = [];
        return h.each(n,
        function(n, r, i) { (t(n, r, i) ? e: u).push(n)
        }),
        [e, u]
    },
    h.first = h.head = h.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : a.call(n, 0, t)
    },
    h.initial = function(n, t, r) {
        return a.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
    },
    h.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : a.call(n, Math.max(n.length - t, 0))
    },
    h.rest = h.tail = h.drop = function(n, t, r) {
        return a.call(n, null == t || r ? 1 : t)
    },
    h.compact = function(n) {
        return h.filter(n, h.identity)
    };
    var y = function(n, t, r, e) {
        if (t && h.every(n, h.isArray)) return o.apply(e, n);
        for (var u = 0,
        a = n.length; a > u; u++) {
            var l = n[u];
            h.isArray(l) || h.isArguments(l) ? t ? i.apply(e, l) : y(l, t, r, e) : r || e.push(l)
        }
        return e
    };
    h.flatten = function(n, t) {
        return y(n, t, !1, [])
    },
    h.without = function(n) {
        return h.difference(n, a.call(arguments, 1))
    },
    h.uniq = h.unique = function(n, t, r, e) {
        if (null == n) return [];
        h.isBoolean(t) || (e = r, r = t, t = !1),
        null != r && (r = h.iteratee(r, e));
        for (var u = [], i = [], a = 0, o = n.length; o > a; a++) {
            var l = n[a];
            if (t) a && i === l || u.push(l),
            i = l;
            else if (r) {
                var c = r(l, a, n);
                h.indexOf(i, c) < 0 && (i.push(c), u.push(l))
            } else h.indexOf(u, l) < 0 && u.push(l)
        }
        return u
    },
    h.union = function() {
        return h.uniq(y(arguments, !0, !0, []))
    },
    h.intersection = function(n) {
        if (null == n) return [];
        for (var t = [], r = arguments.length, e = 0, u = n.length; u > e; e++) {
            var i = n[e];
            if (!h.contains(t, i)) {
                for (var a = 1; r > a && h.contains(arguments[a], i); a++);
                a === r && t.push(i)
            }
        }
        return t
    },
    h.difference = function(n) {
        var t = y(a.call(arguments, 1), !0, !0, []);
        return h.filter(n,
        function(n) {
            return ! h.contains(t, n)
        })
    },
    h.zip = function(n) {
        if (null == n) return [];
        for (var t = h.max(arguments, "length").length, r = Array(t), e = 0; t > e; e++) r[e] = h.pluck(arguments, e);
        return r
    },
    h.object = function(n, t) {
        if (null == n) return {};
        for (var r = {},
        e = 0,
        u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    },
    h.indexOf = function(n, t, r) {
        if (null == n) return - 1;
        var e = 0,
        u = n.length;
        if (r) {
            if ("number" != typeof r) return e = h.sortedIndex(n, t),
            n[e] === t ? e: -1;
            e = 0 > r ? Math.max(0, u + r) : r
        }
        for (; u > e; e++) if (n[e] === t) return e;
        return - 1
    },
    h.lastIndexOf = function(n, t, r) {
        if (null == n) return - 1;
        var e = n.length;
        for ("number" == typeof r && (e = 0 > r ? e + r + 1 : Math.min(e, r + 1)); --e >= 0;) if (n[e] === t) return e;
        return - 1
    },
    h.range = function(n, t, r) {
        arguments.length <= 1 && (t = n || 0, n = 0),
        r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n;
        return u
    };
    var d = function() {};
    h.bind = function(n, t) {
        var r, e;
        if (p && n.bind === p) return p.apply(n, a.call(arguments, 1));
        if (!h.isFunction(n)) throw new TypeError("Bind must be called on a function");
        return r = a.call(arguments, 2),
        e = function() {
            if (! (this instanceof e)) return n.apply(t, r.concat(a.call(arguments)));
            d.prototype = n.prototype;
            var u = new d;
            d.prototype = null;
            var i = n.apply(u, r.concat(a.call(arguments)));
            return h.isObject(i) ? i: u
        }
    },
    h.partial = function(n) {
        var t = a.call(arguments, 1);
        return function() {
            for (var r = 0,
            e = t.slice(), u = 0, i = e.length; i > u; u++) e[u] === h && (e[u] = arguments[r++]);
            for (; r < arguments.length;) e.push(arguments[r++]);
            return n.apply(this, e)
        }
    },
    h.bindAll = function(n) {
        var t, r, e = arguments.length;
        if (1 >= e) throw new Error("bindAll must be passed function names");
        for (t = 1; e > t; t++) r = arguments[t],
        n[r] = h.bind(n[r], n);
        return n
    },
    h.memoize = function(n, t) {
        var r = function(e) {
            var u = r.cache,
            i = t ? t.apply(this, arguments) : e;
            return h.has(u, i) || (u[i] = n.apply(this, arguments)),
            u[i]
        };
        return r.cache = {},
        r
    },
    h.delay = function(n, t) {
        var r = a.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        },
        t)
    },
    h.defer = function(n) {
        return h.delay.apply(h, [n, 1].concat(a.call(arguments, 1)))
    },
    h.throttle = function(n, t, r) {
        var e, u, i, a = null,
        o = 0;
        r || (r = {});
        var l = function() {
            o = r.leading === !1 ? 0 : h.now(),
            a = null,
            i = n.apply(e, u),
            a || (e = u = null)
        };
        return function() {
            var c = h.now();
            o || r.leading !== !1 || (o = c);
            var f = t - (c - o);
            return e = this,
            u = arguments,
            0 >= f || f > t ? (clearTimeout(a), a = null, o = c, i = n.apply(e, u), a || (e = u = null)) : a || r.trailing === !1 || (a = setTimeout(l, f)),
            i
        }
    },
    h.debounce = function(n, t, r) {
        var e, u, i, a, o, l = function() {
            var c = h.now() - a;
            t > c && c > 0 ? e = setTimeout(l, t - c) : (e = null, r || (o = n.apply(i, u), e || (i = u = null)))
        };
        return function() {
            i = this,
            u = arguments,
            a = h.now();
            var c = r && !e;
            return e || (e = setTimeout(l, t)),
            c && (o = n.apply(i, u), i = u = null),
            o
        }
    },
    h.wrap = function(n, t) {
        return h.partial(t, n)
    },
    h.negate = function(n) {
        return function() {
            return ! n.apply(this, arguments)
        }
    },
    h.compose = function() {
        var n = arguments,
        t = n.length - 1;
        return function() {
            for (var r = t,
            e = n[t].apply(this, arguments); r--;) e = n[r].call(this, e);
            return e
        }
    },
    h.after = function(n, t) {
        return function() {
            return--n < 1 ? t.apply(this, arguments) : void 0
        }
    },
    h.before = function(n, t) {
        var r;
        return function() {
            return--n > 0 ? r = t.apply(this, arguments) : t = null,
            r
        }
    },
    h.once = h.partial(h.before, 2),
    h.keys = function(n) {
        if (!h.isObject(n)) return [];
        if (s) return s(n);
        var t = [];
        for (var r in n) h.has(n, r) && t.push(r);
        return t
    },
    h.values = function(n) {
        for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
        return e
    },
    h.pairs = function(n) {
        for (var t = h.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
        return e
    },
    h.invert = function(n) {
        for (var t = {},
        r = h.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
        return t
    },
    h.functions = h.methods = function(n) {
        var t = [];
        for (var r in n) h.isFunction(n[r]) && t.push(r);
        return t.sort()
    },
    h.extend = function(n) {
        if (!h.isObject(n)) return n;
        for (var t, r, e = 1,
        u = arguments.length; u > e; e++) {
            t = arguments[e];
            for (r in t) c.call(t, r) && (n[r] = t[r])
        }
        return n
    },
    h.pick = function(n, t, r) {
        var e, u = {};
        if (null == n) return u;
        if (h.isFunction(t)) {
            t = g(t, r);
            for (e in n) {
                var i = n[e];
                t(i, e, n) && (u[e] = i)
            }
        } else {
            var l = o.apply([], a.call(arguments, 1));
            n = new Object(n);
            for (var c = 0,
            f = l.length; f > c; c++) e = l[c],
            e in n && (u[e] = n[e])
        }
        return u
    },
    h.omit = function(n, t, r) {
        if (h.isFunction(t)) t = h.negate(t);
        else {
            var e = h.map(o.apply([], a.call(arguments, 1)), String);
            t = function(n, t) {
                return ! h.contains(e, t)
            }
        }
        return h.pick(n, t, r)
    },
    h.defaults = function(n) {
        if (!h.isObject(n)) return n;
        for (var t = 1,
        r = arguments.length; r > t; t++) {
            var e = arguments[t];
            for (var u in e) void 0 === n[u] && (n[u] = e[u])
        }
        return n
    },
    h.clone = function(n) {
        return h.isObject(n) ? h.isArray(n) ? n.slice() : h.extend({},
        n) : n
    },
    h.tap = function(n, t) {
        return t(n),
        n
    };
    var b = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof h && (n = n._wrapped),
        t instanceof h && (t = t._wrapped);
        var u = l.call(n);
        if (u !== l.call(t)) return ! 1;
        switch (u) {
        case "[object RegExp]":
        case "[object String]":
            return "" + n == "" + t;
        case "[object Number]":
            return + n !== +n ? +t !== +t: 0 === +n ? 1 / +n === 1 / t: +n === +t;
        case "[object Date]":
        case "[object Boolean]":
            return + n === +t
        }
        if ("object" != typeof n || "object" != typeof t) return ! 1;
        for (var i = r.length; i--;) if (r[i] === n) return e[i] === t;
        var a = n.constructor,
        o = t.constructor;
        if (a !== o && "constructor" in n && "constructor" in t && !(h.isFunction(a) && a instanceof a && h.isFunction(o) && o instanceof o)) return ! 1;
        r.push(n),
        e.push(t);
        var c, f;
        if ("[object Array]" === u) {
            if (c = n.length, f = c === t.length) for (; c--&&(f = b(n[c], t[c], r, e)););
        } else {
            var s, p = h.keys(n);
            if (c = p.length, f = h.keys(t).length === c) for (; c--&&(s = p[c], f = h.has(t, s) && b(n[s], t[s], r, e)););
        }
        return r.pop(),
        e.pop(),
        f
    };
    h.isEqual = function(n, t) {
        return b(n, t, [], [])
    },
    h.isEmpty = function(n) {
        if (null == n) return ! 0;
        if (h.isArray(n) || h.isString(n) || h.isArguments(n)) return 0 === n.length;
        for (var t in n) if (h.has(n, t)) return ! 1;
        return ! 0
    },
    h.isElement = function(n) {
        return ! (!n || 1 !== n.nodeType)
    },
    h.isArray = f ||
    function(n) {
        return "[object Array]" === l.call(n)
    },
    h.isObject = function(n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    },
    h.each(["Arguments", "Function", "String", "Number", "Date", "RegExp"],
    function(n) {
        h["is" + n] = function(t) {
            return l.call(t) === "[object " + n + "]"
        }
    }),
    h.isArguments(arguments) || (h.isArguments = function(n) {
        return h.has(n, "callee")
    }),
    "function" != typeof / . / &&(h.isFunction = function(n) {
        return "function" == typeof n || !1
    }),
    h.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    },
    h.isNaN = function(n) {
        return h.isNumber(n) && n !== +n
    },
    h.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" === l.call(n)
    },
    h.isNull = function(n) {
        return null === n
    },
    h.isUndefined = function(n) {
        return void 0 === n
    },
    h.has = function(n, t) {
        return null != n && c.call(n, t)
    },
    h.noConflict = function() {
        return n._ = t,
        this
    },
    h.identity = function(n) {
        return n
    },
    h.constant = function(n) {
        return function() {
            return n
        }
    },
    h.noop = function() {},
    h.property = function(n) {
        return function(t) {
            return t[n]
        }
    },
    h.matches = function(n) {
        var t = h.pairs(n),
        r = t.length;
        return function(n) {
            if (null == n) return ! r;
            n = new Object(n);
            for (var e = 0; r > e; e++) {
                var u = t[e],
                i = u[0];
                if (u[1] !== n[i] || !(i in n)) return ! 1
            }
            return ! 0
        }
    },
    h.times = function(n, t, r) {
        var e = Array(Math.max(0, n));
        t = g(t, r, 1);
        for (var u = 0; n > u; u++) e[u] = t(u);
        return e
    },
    h.random = function(n, t) {
        return null == t && (t = n, n = 0),
        n + Math.floor(Math.random() * (t - n + 1))
    },
    h.now = Date.now ||
    function() {
        return (new Date).getTime()
    };
    var _ = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    },
    w = h.invert(_),
    j = function(n) {
        var t = function(t) {
            return n[t]
        },
        r = "(?:" + h.keys(n).join("|") + ")",
        e = RegExp(r),
        u = RegExp(r, "g");
        return function(n) {
            return n = null == n ? "": "" + n,
            e.test(n) ? n.replace(u, t) : n
        }
    };
    h.escape = j(_),
    h.unescape = j(w),
    h.result = function(n, t) {
        if (null == n) return void 0;
        var r = n[t];
        return h.isFunction(r) ? n[t]() : r
    };
    var x = 0;
    h.uniqueId = function(n) {
        var t = ++x + "";
        return n ? n + t: t
    },
    h.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var A = /(.)^/,
    k = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    },
    O = /\\|'|\r|\n|\u2028|\u2029/g,
    F = function(n) {
        return "\\" + k[n]
    };
    h.template = function(n, t, r) { ! t && r && (t = r),
        t = h.defaults({},
        t, h.templateSettings);
        var e = RegExp([(t.escape || A).source, (t.interpolate || A).source, (t.evaluate || A).source].join("|") + "|$", "g"),
        u = 0,
        i = "__p+='";
        n.replace(e,
        function(t, r, e, a, o) {
            return i += n.slice(u, o).replace(O, F),
            u = o + t.length,
            r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'": e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'": a && (i += "';\n" + a + "\n__p+='"),
            t
        }),
        i += "';\n",
        t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
        i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var a = new Function(t.variable || "obj", "_", i)
        } catch(o) {
            throw o.source = i,
            o
        }
        var l = function(n) {
            return a.call(this, n, h)
        },
        c = t.variable || "obj";
        return l.source = "function(" + c + "){\n" + i + "}",
        l
    },
    h.chain = function(n) {
        var t = h(n);
        return t._chain = !0,
        t
    };
    var E = function(n) {
        return this._chain ? h(n).chain() : n
    };
    h.mixin = function(n) {
        h.each(h.functions(n),
        function(t) {
            var r = h[t] = n[t];
            h.prototype[t] = function() {
                var n = [this._wrapped];
                return i.apply(n, arguments),
                E.call(this, r.apply(h, n))
            }
        })
    },
    h.mixin(h),
    h.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
    function(n) {
        var t = r[n];
        h.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments),
            "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0],
            E.call(this, r)
        }
    }),
    h.each(["concat", "join", "slice"],
    function(n) {
        var t = r[n];
        h.prototype[n] = function() {
            return E.call(this, t.apply(this._wrapped, arguments))
        }
    }),
    h.prototype.value = function() {
        return this._wrapped
    },
    "function" == typeof define && define.amd && define("underscore", [],
    function() {
        return h
    })
}).call(this);; !
function() {
    function e(e) {
        if (void 0 === e) return e;
        var t, r, n, o, a, i;
        for (n = e.length, r = 0, t = ""; n > r;) {
            if (o = 255 & e.charCodeAt(r++), r == n) {
                t += p.charAt(o >> 2),
                t += p.charAt((3 & o) << 4),
                t += "==";
                break
            }
            if (a = e.charCodeAt(r++), r == n) {
                t += p.charAt(o >> 2),
                t += p.charAt((3 & o) << 4 | (240 & a) >> 4),
                t += p.charAt((15 & a) << 2),
                t += "=";
                break
            }
            i = e.charCodeAt(r++),
            t += p.charAt(o >> 2),
            t += p.charAt((3 & o) << 4 | (240 & a) >> 4),
            t += p.charAt((15 & a) << 2 | (192 & i) >> 6),
            t += p.charAt(63 & i)
        }
        return t
    }
    function t(e) {
        for (var t in e) return ! 1;
        return ! 0
    }
    function r(e, r) {
        var n = 100;
        if ("share" == e) {
            if (r && !t(r)) return r;
            var o = "",
            a = "",
            i = "",
            c = document.querySelector("title"),
            u = document.querySelector("meta[name=description]"),
            d = document.querySelector("link[rel*=apple-touch-icon]"),
            f = document.querySelector("link[rel*=shortcut]");
            if (c && (o = c.innerText), u && (a = u.content), f && (i = f.href), d && (i = d.href), !i) for (var l = document.querySelectorAll("body img"), s = 0; s < l.length; s++) {
                var h = l[s];
                if (h.naturalWidth > n && h.naturalHeight > n) {
                    i = h.src;
                    break
                }
            }
            return {
                platform: "weixin_moments",
                url: location.href,
                title: o,
                desc: a,
                image: i
            }
        }
        return r
    }
    function n() {
        s = document.createElement("iframe"),
        s.id = "__ToutiaoJSBridgeIframe_SetResult",
        s.style.display = "none",
        document.documentElement.appendChild(s),
        l = document.createElement("iframe"),
        l.id = "__ToutiaoJSBridgeIframe",
        l.style.display = "none",
        document.documentElement.appendChild(l)
    }
    function o() {
        var e = JSON.stringify(g);
        return g = [],
        i("SCENE_FETCHQUEUE", e),
        e
    }
    function a(e) {
        var t, r = e.__msg_type,
        n = e.__params,
        o = e.__event_id,
        a = e.__callback_id;
        return "callback" == r ? (t = {
            __err_code: "cb404"
        },
        "string" == typeof a && "function" == typeof _[a] && (t = _[a](n), delete _[a])) : "event" == r && (t = {
            __err_code: "ev404"
        },
        "string" == typeof o && "function" == typeof C[o] && (t = C[o](n))),
        i("SCENE_HANDLEMSGFROMTT", JSON.stringify(t)),
        JSON.stringify(t)
    }
    function i(t, r) {
        s.src = y + "private/setresult/" + t + "&" + e(h.encode(r))
    }
    function c(e, t, n, o) {
        if (o = o || 1, e && "string" == typeof e) {
            "object" != typeof t && (t = {}),
            t = r(e, t);
            var a = (m++).toString();
            "function" == typeof n && (_[a] = n);
            var i = {
                JSSDK: o,
                func: e,
                params: t,
                __msg_type: "call",
                __callback_id: a
            };
            g.push(i),
            l.src = y + "dispatch_message/"
        }
    }
    function u(e, t) {
        e && "string" == typeof e && "function" == typeof t && (C[e] = t, c("addEventListener", {
            name: e
        },
        null))
    }
    function d(e, t) {
        "function" == typeof C[e] && C[e](t)
    }
    function f() {
        function e(e, t) {
            return "params" == t ? e: e[t]
        }
        var r = {
            pageStateChange: "page_state_change",
            isVisible: "is_visible",
            isLogin: "is_login",
            uploadImage: "upload_image"
        },
        n = ["appInfo", "login", "comment", "close", "isVisible", "isLogin", "playVideo"],
        o = ["isAppInstalled", "open", "share", "systemShare", "pay", "pageStateChange", "downloadApp", "openThirdApp", "uploadImage", "addChannel", "gallery", "copyToClipboard", "openCocosPlay"],
        a = n.concat(o),
        i = navigator.userAgent.match(/JSSDK\/([\d.]+)/i),
        u = i ? i[1] : 1;
        i ? a = a.concat(["config"]) : toutiao.config = function(t) {
            var r = e(t, "success");
            return r ? r({
                code: 1,
                supportList: {
                    call: n
                }
            }) : void 0
        },
        a.forEach(function(n) {
            toutiao[n] = function(o) {
                o = o || {};
                var a = e(o, "params"),
                i = e(o, "error"),
                d = e(o, "success"),
                f = e(o, "fail");
                n = r[n] || n,
                c(n, a,
                function(e) {
                    e = e || {};
                    var r = e.code;
                    t(e) ? r = 1 : void 0 == r && (r = 1),
                    -1 == r && i && i(e),
                    0 == r && f && f(e),
                    1 == r && d && d(e)
                },
                u)
            }
        })
    }
    var l, s, h = {
        encode: function(e) {
            e = e || "",
            e = e.replace(/\r\n/g, "\n");
            for (var t = "",
            r = 0; r < e.length; r++) {
                var n = e.charCodeAt(r);
                128 > n ? t += String.fromCharCode(n) : n > 127 && 2048 > n ? (t += String.fromCharCode(n >> 6 | 192), t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224), t += String.fromCharCode(n >> 6 & 63 | 128), t += String.fromCharCode(63 & n | 128))
            }
            return t
        },
        decode: function(e) {
            for (var t = "",
            r = 0,
            n = c1 = c2 = 0; r < e.length;) n = e.charCodeAt(r),
            128 > n ? (t += String.fromCharCode(n), r++) : n > 191 && 224 > n ? (c2 = e.charCodeAt(r + 1), t += String.fromCharCode((31 & n) << 6 | 63 & c2), r += 2) : (c2 = e.charCodeAt(r + 1), c3 = e.charCodeAt(r + 2), t += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3), r += 3);
            return t
        }
    },
    p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    g = [],
    m = 1e3,
    _ = {},
    C = {},
    y = "bytedance://";
    window.ToutiaoJSBridge = {
        call: c,
        on: u,
        _fetchQueue: o,
        _handleMessageFromToutiao: a
    },
    window.toutiao = {
        on: u,
        trigger: d
    },
    n(),
    f()
} ();