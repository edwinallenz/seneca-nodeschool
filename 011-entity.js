'use strict'

module.exports = function math  (options) {

    this.add({role:'math', cmd:'sum'}, (msg, callback) => {

        var sum = msg.right + msg.left
        callback(null, {answer:sum})
    })


    this.add({role:'math', cmd:'product'}, (msg, callback) => {

        var product = msg.right * msg.left
        callback(null, {answer:product})
    })

    this.wrap({role:'math'}, function (msg, callback)  {

        const operation = this.make('operation')
        operation.cmd = msg.cmd
        operation.left = msg.left
        operation.right = msg.right


        operation.save$(function(err,foo){
            console.log(`${foo.cmd} ${foo.left} ${foo.right}`)
        })
        msg.right = parseInt(msg.right)
        msg.left = parseInt(msg.left)

        this.prior(msg, callback)
    })

    this.add({role:'math', cmd:'operation-history'}, (msg, callback) => {
        const operationObj = this.make('operation')

        operationObj.list$({}, (err, list) => {
            return callback(null, list)
        })
        
    })

}
