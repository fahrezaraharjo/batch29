// function sum() {

//     let result = 0

//     for (let i = 0; i<arguments.length; i++) {
//         result += arguments[i]
//     }console.log(result)


// }

// sum(1,2,7)
// sum(1,4)
// sum(11)
// sum(10,3,6,7,9)

// output 10
// output 5
// output 11
// output 35


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

//     } return result

// }
// console.log(deretKaskus(10))


// function stringManipulation(ayang) {

//     let vowel = "AIUEO".toLowerCase()

//     if (vowel.match(ayang[0])) {
//         console.log(ayang)
//     } else {
//         console.log(ayang.slice(1, ayang.length) + ayang.charAt(0) + "nyo")
//     }
    
// }
// stringManipulation("ayang")
// stringManipulation("ayam")
// stringManipulation("bebek")
// stringManipulation("unta")

function sentenceManipulation(sentence) {

    const vowel = "AIUEO".toLowerCase()

    let newarray = sentence.split(' ')

    let result = []

    for (var i = 0; i<newarray.length; i++) {

        if(vowel.match(newarray[i][0])) {
            result.push(newarray[i])
        }else {
            result.push(newarray[i].slice(1, newarray[i].length) + newarray[i][0] + "nyo")
        }
    }console.log(result.join(' '))
}

sentenceManipulation("ayang pergi ke tsb bersama aku")