// short querySelector: $('.foo') $('.child', context_node)
export const $ = (query, context = document) =>
  context.querySelector(query)

// shorthand querySelectorAll: $$('.foo') $$('.child', context_node)
export const $$ = (query, context = document) =>
  context.querySelectorAll(query)

// set multiple attributes on a node
export const setAttributes = (el, attrs) =>
  Object.entries(attrs)
    .forEach(([key, val]) =>
      el.setAttribute(key, val))

// EXTEND DOM
// $('.foo').on('click', fn)
Node.prototype.on = window.on = function(names, fn) {
  names
    .split(' ')
    .forEach(name =>
      this.addEventListener(name, fn))
}

// $$('.foo').on('click', fn)
// NOTE: try to avoid this, listen once on a parent instead of for n children
NodeList.prototype.on = NodeList.prototype.addEventListener = function(names, fn) {
  this.forEach((elem, i) =>
    elem.on(names, fn))
}

// $$('.foo').map(el => ...)
NodeList.prototype.__proto__ = Array.prototype