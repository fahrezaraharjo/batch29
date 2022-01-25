function stringManipulation(word) {

    let newword = "AIUEOaiueo"

    if(newword.match(word[0])) {//cocokin si vokal dengan kata
        console.log(word)
    }else console.log(word.slice(1, word.length) + (word.charAt(0)) + 'nyo')
}

stringManipulation('ayam')
stringManipulation('bebek')
stringManipulation('ular')
stringManipulation('badak')