// function sum() {

//     let total = 0

//     for (var i = 0; i < arguments.length; i++) {

//         total += arguments[i]
//     } console.log(total)
// }

// sum(1, 2, 7)
// sum(1, 4)
// sum(11)
// sum(10, 3, 6, 7, 9)


// function deretKaskus(n) {

//     const word1 = "KAS"
//     const word2 = "KUS"

//     let result = []

//     for (var i = 3; i <= n * 3; i += 3) {

//         if (i % 5 === 0 && i % 6 === 0) {
//             result.push(`${word1}${word2}`)
//         } else if (i % 5 === 0) {
//             result.push(`${word1}`)
//         } else if (i % 6 === 0) {
//             result.push(`${word2}`)
//         } else {
//             result.push(i)
//         } 
//     }return result

// }
// console.log(deretKaskus(10))

// function stringManipulation (word) {

//     const vowel = "AIUEOaiueo"

//     if(vowel.match(word[0])) {
//         console.log(word)
//     }else {
//         console.log(word.slice(1, word.length) + (word.charAt(0)) + 'nyo')
//     }
// }

// stringManipulation('ayam')
// stringManipulation("bebek")
// stringManipulation("ular")
// // stringManipulation("badak")

// function sentencesManipulation(sentence) {

//     const vowel = "AIUEOaiueo"

//     let newarray = sentence.split(' ')

//     let result = []

//     for (var i = 0; i < newarray.length; i++) {

//         if (vowel.match(newarray[i][0])) {
//             result.push(newarray[i])
//         } else (result.push(newarray[i][0].slice(1, newarray.length) + newarray[i] + "nyo"))
//     } console.log(result.join(' '))

// } 

// sentencesManipulation('ibu pergi ke pasar bersama')


// function wierdMultiply(number) {

//     let str = number.toString()

//     if (str.length > 1) {

//         let total = 1

//         for (var i = 0; i < str.length; i++) {
//             total *= str[i]
//         } return wierdMultiply(total)
//     }else {
//         return number
//     }
// }

// console.log(wierdMultiply(39))
// console.log(wierdMultiply(999))
// console.log(wierdMultiply(3))


function pola(str) {

    let split = str.split(" ")

    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            if (split[0].replace('#', i) * split[2] == split[4].replace('#', j)) {
                return ([i, j])
            }
        }
    }
}

console.log(pola('8#61 * 895 = 78410#5'))
console.log(pola('42#3 * 188 = 80#204'))