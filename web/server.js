const express = require('express')

const app = express()

app.set('views', '/users/fahreza/Desktop/batch29/web/views')

app.get('/', function(req, res){
    res.send('welcome to first page')
});

app.get('/category', function(req, res){
    res.send('choices')
})

app.listen(3000, function(){
    console.log('web berjalan di port 3000')
})