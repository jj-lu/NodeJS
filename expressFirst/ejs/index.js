const ejs = require('ejs')

const hello = 'hello world'
const template = '<%= hello %> ejs'

console.log(ejs.render(template, { hello }))

/**
 * 列表
 */
const arr = ['a', 'b', 'c', 'd']

const listTemplate = `
  <ul>
    <% arr.map(item => { %>
      <li> <%= item %> </li>
    <% }) %>
  </ul>
`
console.log(ejs.render(listTemplate, { arr }))

/**
 * 逻辑判断
 */

const isShow = false

const showTemplate = `
    <% if (show) { %>
      展示数据
    <% } else { %>
      不展示数据
    <% } %>
`
console.log(ejs.render(showTemplate, { show: isShow }))
