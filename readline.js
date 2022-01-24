const fs =require('fs')

console.log('pertama')

let data = fs.readFile('data.txt', 'utf8', function(err,text){
    console.log(err)
    console.log(text)

})

console.log(data)

console.log('terakhir')
