'use strict'

const seneca = require('./001-math')
const leftNumber = process.argv[2]
const rightNumber = process.argv[3]
seneca.act({role:'math',cmd:'sum', val: {left:parseInt(leftNumber),right:parseInt(rightNumber)}}, (err, result) => {
    if(err) return console.error(err)
    console.log(result)
})


