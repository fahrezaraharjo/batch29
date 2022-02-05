// function sentencesManipulation(sentence) {

//     const vowel = ('AIUEOaiueo')
//     let newarray = sentence.split(' ')
//     let changeinto = []

//     for (var i = 0; i < newarray.length; i++) {
//         if (vowel.match((newarray[i][0]))) {
//             changeinto.push(newarray[i])
//         } else changeinto.push(newarray[i].slice(1,newarray[i].length)
//             + newarray[i][0] + 'nyo')


//     } console.log(changeinto.join(' '))
// }
// sentencesManipulation('ibu pergi ke pasar bersama aku')



function sentencesManipulation(sentence) {

    const vowel = "AIUEO".toLowerCase()

    let newword = sentence.split(" ")

    result = []

    for (let i = 0; i < newword.length; i++) {

        if (vowel.match(newword[i][0])) {
            result.push(newword[i])
        } else {
            result.push(newword[i].slice(1, newword[i].length) + newword[i][0] + "nyo")
        }
    }
    console.log(result.join(' '))
}

sentencesManipulation("ibu pergi ke pasar bersma aku")