const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const tea = {
    'oolong':{
        'type': 'black',
        'origin': 'Yo mommas house',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': true,
        'flavour': 'delicious'
    },
    'matcha':{
        'type': 'green',
        'origin': 'My mommas house',
        'waterTemp': 260,
        'steepTimeSeconds': 200,
        'caffinated': true,
        'flavour': 'yummy'
    },
    'unknown':{
        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 0,
        'steepTimeSeconds': 0,
        'caffinated': false,
        'flavour': 'unknown'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response)=>{
    const teaName = request.params.name.toLowerCase()
    if (tea[teaName]){
        response.json(tea[teaName])
    }else{
        response.json(tea['unknown'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})