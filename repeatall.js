// function sum() {

//     let result = 0 

//     for(let i = 0; i<arguments.length; i++) {
//         result += arguments[i]
//     }console.log(result)
// }

// sum(1,2,7)
// sum(1,4)
// sum(11)
// sum(10,3,6,7,9)

// function deretKaskus(n) {

//     const word1 = "KAS"
//     const word2 = "KUS"

//     let result = []

//     for (let i = 3; i<=n*3; i+=3) {

//         if(i%5 === 0 && i%6 === 0) {
//             result.push(`${word1}${word2}`)
//         }else if(i%5 === 0) {
//             result.push(`${word1}`)
//         }else if(i%6 === 0) {
//             result.push(`${word2}`)
//         }else {
//             result.push(i)
//         }
//     }return result
// }

// console.log(deretKaskus(10))


// function stringManipulation(word) {

//     const vowel = "AIUEOaiueo"

//     if (vowel.match(word[0])) {
//         console.log(word)
//     } else (console.log(word.slice(1, word.length) + (word.charAt(0)) + "nyo"))
// }

// stringManipulation('ayam')
// stringManipulation('bebek')
// stringManipulation("belut")
// stringManipulation("oray")

// function sentencesManipulation(sentence) {

//     const vowel = "AIUEOaiueo"

//     let newarray = sentence.split(' ')

//     let result = []

//     for(let i = 0; i<newarray.length; i++) {

//         if (vowel.match(newarray[i][0])) {
//             result.push(newarray[i])
//         }else {
//             result.push(newarray[i].slice(1, newarray.length) + newarray[i][0] + "nyo")
//         }
//     }console.log(result.join(' '))
// }

// sentencesManipulation("ibu pergi ke pasar bersama aku")

// function wierdMultiply(number) {

//     let str = number.toString()

//     if (str.length > 1) {

//         let result = 1

//         for (var i = 0; i < str.length; i++) {
//             result *= str[i]
//         }
//         return wierdMultiply(result)
//     } else {
//         return number
//     }
// }
// console.log(wierdMultiply(39))
// console.log(wierdMultiply(999))
// console.log(wierdMultiply(3))

// function pola(str) {

//     let newstr = str.split(' ')

//     for (let i = 0; i <= 9; i++) {
//         for (j = 0; j <= 9; j++) {
//             if (newstr[0].replace("#", i) * newstr[2] == newstr[4].replace("#", j)) {
//                 return ([i, j])
//             }
//         }
//     }
// }

// console.log(pola('8#61 * 895 = 78410#5'))
// console.log(pola('42#3 * 188 = 80#204'))

function romawi(n) {

    let roman = ''

    let kamus = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

    for (const i in kamus) {
        while (n >= kamus[i]) {
            roman += i
            n-=kamus[i]
        }

    }
    return roman
}

// console.log("Script testing untuk konversi romawi\n");
// console.log("input | expected | result");
// console.log("------|----------|--------")
// console.log("4     |IV        |", romawi(4))
// console.log("9     |IX        |", romawi(9))
// console.log("13    |XIII      |", romawi(13))
// console.log("1453  |MCDLIII   |", romawi(1453))
// console.log("1646  |MDCXLVI   |", romawi(1646))
console.log(romawi(4))
console.log(romawi(9))
console.log(romawi(13))
console.log(romawi(1453))
console.log(romawi(1646))

