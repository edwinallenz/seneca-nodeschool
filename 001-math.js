'use strict'

const Seneca = require('seneca')
const seneca = Seneca()

seneca.add({role:'math', cmd:'sum'}, (msg, callback) => {

    var sum = msg.val.right + msg.val.left
    callback(null, {answer:sum})
}) 

module.exports = seneca
