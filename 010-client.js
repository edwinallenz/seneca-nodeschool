'use strict'
const left = process.argv[2]
const right = process.argv[3]

const seneca = require('seneca')().client({type:'tcp',host:'127.0.0.1'})

seneca
    .act({role:'math',cmd:'sum', left:left, right:right}, (err, response) => {
        if(err) console.error(err)

        console.log(response)
        process.exit(0)
    })
