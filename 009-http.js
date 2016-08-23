'use strict'

const plugin = require('./008-wrap')
const port = parseInt(process.argv[2])
console.log(port)
const seneca = require('seneca')().use(plugin, {}).listen(port)
