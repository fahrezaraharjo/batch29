function stringManipulation(word) {
    function sentenceManipulation(sentence) {
    
        const vowel = ('AEIOUaeiou')
        let kalimat = sentence.split(' ')
        let berubahJadi = []
    
    
        for (i = 0; i < kalimat.length; i++) {
            if (vowel.match((kalimat[i][0]))) {
                berubahJadi.push(kalimat[i])
            } else berubahJadi.push(kalimat[i].slice(1, kalimat[i].length)
                + kalimat[i][0] + 'nyo')
    
    
        if (vowel.match(word[0])) {
            console.log(word)
        } else (console.log(word.slice(1, word.length) + (word.charAt(0)) + 'nyo'))
        } console.log(berubahJadi.join(' '))
    }
sentenceManipulation("ibu pergi ke pasar aku")