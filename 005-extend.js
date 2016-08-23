'use strict'

module.exports = function math  (options) {

    this.add({role:'math', cmd:'sum'}, (msg, callback) => {

        var sum = parseFloat(msg.right) + parseFloat(msg.left)
        callback(null, {answer:sum})
    })

    this.add('role:math,cmd:sum,integer:true', (msg, callback) => {

        var sum = Math.floor(parseFloat(msg.right)) + Math.floor(parseFloat(msg.left))
        callback(null, {answer:sum})
    })

    this.add({role:'math', cmd:'product'}, (msg, callback) => {

        var product = parseFloat(msg.right) * parseFloat(msg.left)
        callback(null, {answer:product})
    }) 

}
