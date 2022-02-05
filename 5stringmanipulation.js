// function stringManipulation(word) {

//     let newword = "AIUEOaiueo"

//     if(newword.match(word[0])) {//cocokin si vokal dengan kata
//         console.log(word)
//     }else console.log(word.slice(1, word.length) + (word.charAt(0)) + 'nyo')
// }

// stringManipulation('ayam')
// stringManipulation('bebek')
// stringManipulation('ular')
// stringManipulation('badak')


function stringManipulation(word) {

    let vowel = "AIUEO".toLowerCase()

    if(vowel.match(word[0])) {
        console.log(word)
    }else{
        console.log(word.slice(1, word.length) + word.charAt() + "nyo")
    }
    

}

stringManipulation("ayam")
stringManipulation("bebek")