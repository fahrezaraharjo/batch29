function sentencesManipulation(sentence) {

    const vowel = ('AIUEOaiueo')
    let newarray = sentence.split(' ')
    let changeinto = []

    for (var i = 0; i < newarray.length; i++) {
        if (vowel.match((newarray[i][0]))) {
            changeinto.push(newarray[i])
        } else changeinto.push(newarray[i].slice(1,newarray[i].length)
            + newarray[i][0] + 'nyo')


    } console.log(changeinto.join(' '))
}
sentencesManipulation('ibu pergi ke pasar bersama aku')