// node decorators
const nodeOnEvent = function(names, fn) {
  names
    .split(' ')
    .forEach(name =>
      this.addEventListener(name, fn))
}

const nodesOnEvent = function(names, fn) {
  this
    .map($el => Object.assign($el, {on:nodeOnEvent}))
    .forEach(($el, i) =>
      $el.on(names, fn))
}

// short querySelector: $('.foo') $('.child', context_node)
export const $ = (query, $context = document) =>
  Object.assign($context.querySelector(query), {on:nodeOnEvent})

// shorthand querySelectorAll: $$('.foo') $$('.child', context_node)
export const $$ = (query, $context = document) =>
  Object.assign([...$context.querySelectorAll(query)], {on:nodesOnEvent})

// set multiple attributes on a node
export const setAttributes = (el, attrs) =>
  Object.entries(attrs)
    .forEach(([key, val]) =>
      el.setAttribute(key, val))