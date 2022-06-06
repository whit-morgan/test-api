const express = require('express')
const app = express()
const PORT = 8000



let cartridges = {
    'steel challenge':{
        'caliber': '.40 S&W',
        'bulletType': 'RNFP',
        'bulletMass': '180 grains',
        'powderType': 'Vihtavuori',
        'powderAmount': '4 grains',
        'col': '1.126',
        'primer': 'CCI small pistol NO.500'
    },
    'uspsa limited':{
        'caliber': '.40 S&W',
        'bulletType': 'RNFP',
        'bulletMass': '180 grains',
        'powderType': 'Titegroup',
        'powderAmount': '4.3 grains',
        'col': '1.120',
        'primer': 'CCI small pistol NO.500'
    }
}

app.get('/', (req, res) => {
    try{
        res.sendfile(__dirname + '/index.html')
    }

    catch(error){
        console.error(error)
    }
})

app.get('/api/:name', (req, res) => {
    const cartridgeName = req.params.name.toLowerCase()
    res.json(cartridges[cartridgeName])
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT} `)
})