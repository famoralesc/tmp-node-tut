const names = require('./4-names')
console.log(names)

const sayHiFunc = require('./5-utils')
const data = require("./6-alternative-flavor")
sayHiFunc(names.john)
sayHiFunc(names.marie)
console.log(data)

require('./7-mind-granade.js')
