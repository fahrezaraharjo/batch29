function sentencesManipulation(sentence) {
    function stringManipulation(word) {

        let newsentence = sentence.split(" ")


        let newword = "aiueoAIUEO"


        let hasil = []


        if (newword.match(word[0])) {
            console.log(word)
        } else (console.log(word.slice(1, word.length) + (word.charAt(0)) + "nyo"))

        console.log(sentence)
//     } if (newword.match(word[0])) {
//         console.log(word)

//     } else (console.log(word.slice(1, word.length) + (word.charAt(0)) + "nyo"))

// } console.log(sentence)




sentencesManipulation("ibu pergi ke pasar bersama aku")