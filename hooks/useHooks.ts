export const useScroll = (options: ScrollToOptions, el = window) => {
  el.scrollTo(options)
}

function getOffset(el) {
  const rect = el.getBoundingClientRect()
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY
  }
}

export const useScrollAnimation = (els: NodeListOf<Element>) => {
  return () => {
    const h = document.documentElement.scrollTop + document.documentElement.clientHeight - 50

    els.forEach((el) => {
      const condition = getOffset(el).top - h < 0

      const stroke = el['dataset'].stroke
      el.setAttribute('stroke-dasharray', stroke)

      if (condition) {
        el['style'].transition = `all .8s ease-in ${el.classList[0] === 'draw_line' ? '.8s' : '0s'}`
        el.setAttribute('stroke-dashoffset', '0')
        el['style'].opacity = 1
      } else {
        el.setAttribute('stroke-dashoffset', stroke)
        el['style'].opacity = 0
        el['style'].transition = ''
      }
    })
  }
}

export const useObserverAnimation = (
  targetClass: string,
  activeClassName: string,
  options = { root: null, rootMargin: '-10px', threshold: 0.1 }
) => {
  const cb = function (entries, observer) {
    const [entry] = entries
    if (entry.isIntersecting) {
      entry.target.classList.add(activeClassName)
    } else {
      entry.target.classList.remove(activeClassName)
    }
  }

  const observer = new IntersectionObserver(cb, options)

  document.querySelectorAll(targetClass).forEach((el) => {
    observer.observe(el)
  })
}

export const useDebounce = function (func, delay = 250) {
  let timer = null

  return () => {
    let context = this

    let args = arguments

    clearTimeout(timer)
    timer = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

export const useThrottle = function (func, timeout = 250) {
  let last
  let timer

  return function () {
    const context = this

    const args = arguments
    const now = +new Date()

    if (last && now < last + timeout) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        func.apply(context, args)
      }, timeout)
    } else {
      last = now
      func.apply(context, args)
    }
  }
}
