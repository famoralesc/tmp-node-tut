const path = require('path')

console.log(path.sep)

const filtPath = path.join('/content', 'subfolder', 'test.txt')
console.log(filtPath)

const base = path.basename(filtPath)
console.log(base)

const absplite = path.resolve()
