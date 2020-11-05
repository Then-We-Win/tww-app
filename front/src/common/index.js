import lodashGet from 'lodash.get'
import merge from 'deepmerge'
import Emitter from 'eventemitter2'
import gen from 'generate-password'

const _reactor = new Emitter({
  wildcard: true,
  delimiter: '_'
})

const utils = {
  generatePassword: gen.generate,
  ucFirst (string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  },
  hashInt (str, max = 1000) {
    var hash = 0
    for (var i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i)
      hash = hash & hash
    }
    return Math.round(max * Math.abs(hash) / 2147483648)
  },
  niceDate (date) {
    const dd = String(date.getDate())
    const mm = String(date.getMonth() + 1) // January is 0
    const yyyy = date.getFullYear()
    return `${mm}/${dd}/${yyyy}`
  },
  // Circumvents bug in Jest: Jest cannot transfer globals in certain includes using jsdom.
  insertIf (condition, ...elements) {
    return condition ? elements : []
  },
  in (arr, val) {
    if (arr.indexOf(val) === -1) return false
    return true
  },
  is (variable) {
    if (variable === undefined) return false
    return true
  },
  isnt (variable) {
    return !this.is(variable)
  },
  clone (object) {
    return JSON.parse(JSON.stringify(object))
  },
  merge (...args) {
    const safeArgs = args
    safeArgs.forEach((arg, index) => {
      if (arg === undefined || arg === null) safeArgs[index] = {}
    })
    return merge.all([...safeArgs])
  },
  get (obj, path) {
    return lodashGet(obj, path)
  },
  only (obj, keys) { // Returns white-listed properties of an object.
    obj = obj || {}
    if (typeof keys === 'string') keys = keys.split(/ +/)
    return keys.reduce((ret, key) => {
      if (obj[key] === null) return ret
      ret[key] = obj[key]
      return ret
    }, {})
  },
  timeout (ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  },
  // Returns a list of total differences between v1 and v2, where each is an object with strings or
  // arrays in k/v pairs...
  totalDiff (v1, v2) {
    const diff = []
    Object.keys(v1).forEach(key => {
      const equal = this.isEqual(v1[key], v2[key])
      // If it's not equal and also an array that is not empty, store the difference...
      if (!(equal === true || (Array.isArray(equal) && Object.keys(equal).length === 0))) {
        diff[key] = equal
      }
      // If it's a string and not equal, store the value of a1 instead of false...
      if (equal === false && typeof v1[key] === 'string') {
        diff[key] = v1[key]
      }
    })
    return diff
  },
  // Handles string or k/v object comparison, returns list of differences if found...
  isEqual (v1, v2) {
    if (typeof v1 === 'string' && typeof v2 === 'string') {
      return v1 === v2
    } else {
      return this.arrayDiff(v1, v2)
    }
  },
  // Returns the difference between a1 and a2
  arrayDiff (a1, a2) {
    const a = []
    // a = true for each item in a1 (new profile)
    for (let i = 0; i < a1.length; i++) {
      a[a1[i]] = true
    }
    // If a2 is empty or undefined, well then everything is different :)
    if (!a2) {
      if (typeof a1 === 'string') return a1
      return a
    }
    // Delete any matches, a = false where item is missing in a1 but exists in a2...
    for (let i = 0; i < a2.length; i++) {
      if (a[a2[i]]) {
        delete a[a2[i]]
      } else {
        a[a2[i]] = false
      }
    }
    // Resulting array contains true for item is in a1 but not a2...
    // ...and false for item is in a2 but not in a1.
    return a
  },
  IE () {
    const ua = window.navigator.userAgent
    const msie = ua.indexOf('MSIE ')
    if (msie > 0) {
      // IE 10 or older => return version number
      return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10)
    }

    const trident = ua.indexOf('Trident/')
    if (trident > 0) {
      // IE 11 => return version number
      const rv = ua.indexOf('rv:')
      return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10)
    }

    const edge = ua.indexOf('Edge/')
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10)
    }

    // other browser
    return false
  },
  // Use to replace JSON.stringify with safer alternative.
  stringify (obj, replacer, spaces, cycleReplacer) {
    return JSON.stringify(obj, this.serializer(replacer, cycleReplacer), spaces)
  },
  // Alternative to the JavaScript serializer... doesn't throw cyclic ref errors.
  serializer (replacer, cycleReplacer) {
    const stack = [], keys = []

    if (cycleReplacer == null) {
      cycleReplacer = function (key, value) {
        if (stack[0] === value) return '[Circular ~]'
        return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']'
      }
    }

    return function (key, value) {
      if (stack.length > 0) {
        const thisPos = stack.indexOf(this)
        ~thisPos ? stack.splice(thisPos + 1) : stack.push(this)
        ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key)
        if (~stack.indexOf(value)) value = cycleReplacer.call(this, key, value)
      } else stack.push(value)

      return replacer == null ? value : replacer.call(this, key, value)
    }
  }
}

if (window === undefined) {
  const window = {} // eslint-disable-line no-unused-vars
}
utils.debug = window.app ? window.app.debug : {}
utils.context = window.app ? window.app.debug.info.options.ctx : {}

export default utils
export const reactor = _reactor

export const reactorMixin = {
  beforeMount () {
    if (this.$options.reactions) {
      const reactions = this.$options.reactions
      Object.keys(reactions).forEach(reaction => {
        if (reaction === '_all') {
          _reactor.on('*', reactions[reaction].bind(this))
        } else {
          _reactor.on(reaction, reactions[reaction].bind(this))
        }
      })
    }
  },
  beforeDestroy () {
    if (this.$options.reactions) {
      const reactions = this.$options.reactions
      Object.keys(reactions).forEach(reaction => {
        if (reaction === '_all') {
          _reactor.off('*', reactions[reaction].bind(this))
        } else {
          _reactor.off(reaction, reactions[reaction].bind(this))
        }
      })
    }
  }
}
