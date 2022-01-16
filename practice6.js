function sentencesManipulation(sentence) {
    function stringManipulation(word) {

        const newword = "aiueoAIUEO"
        let newsentence = sentence.split(" ")
        let hasil = []

        for (i = 0; i < sentence.length; i++) {
            if (newword.match((sentence[i][0]))) {
                hasil.push(sentence[i])
            } else hasil.push(sentence[i].slice(1, sentence.length))


        } if (newword.match(word[0])) {
            console.log(word)

        } else (console.log(word.slice(1, word.length) + (word.charAt(0)) + "nyo"))

    } console.log(hasil.join(" "))
}

    sentencesManipulation("ibu pergi ke pasar bersama aku")