'use strict'

const plugin = require('./005-extend')
const seneca = require('seneca')()

const leftNumber = process.argv[2]
const rightNumber = process.argv[3]

seneca.use(plugin, {})

seneca
    .act({role:'math',cmd:'sum', left:leftNumber, right:rightNumber}, (err, response) => {
    if(err) console.error(err)
    console.log(response)
    }).act({role:'math',cmd:'sum', integer: true, left:leftNumber, right:rightNumber}, (err, response) => {
        if(err) console.error(err)
        console.log(response)
    })
