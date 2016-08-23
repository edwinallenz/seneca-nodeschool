'use strict'

module.exports = function math  (options) {

    this.add({role:'math', cmd:'sum'}, (msg, callback) => {

        var sum = parseFloat(msg.right) + parseFloat(msg.left)

        callback(null, {answer:sum})
    })

    this.add({role:'math', cmd:'sum'}, function(msg, callback)  {
        if(!isFinite(msg.right) || !isFinite(msg.left))
            return callback(new Error('Expected left and right to be numbers.'))


        this.prior({role:'math',cmd:'sum', left:msg.left, right:msg.right}, (err, result) =>{

            result.info = msg.left + '+' + msg.right
            callback(null, result)
        })

    })
}


