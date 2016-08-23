'use strict'

module.exports = function math  (options) {

    this.add({role:'math', cmd:'sum'}, (msg, callback) => {

        var sum = parseInt(msg.right) + parseInt(msg.left)
        callback(null, {answer:sum})
    })

    this.add({role:'math', cmd:'product'}, (msg, callback) => {

        var product = parseInt(msg.right) * parseInt(msg.left)
        callback(null, {answer:product})
    }) 

}
