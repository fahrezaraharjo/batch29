function sentencesManipulation(sentence) {

    const vowel = ('AIUEOaiueo')
    let newarray = sentence.split(' ')
    let changeinto = []

    for (var i = 0; i < newarray.length; i++) {
        if (vowel.match((newarray[i][0]))) {
            changeinto.push(newarray[i])
        } else changeinto.push(newarray[i].slice(1, newarray[i].length)
            + newarray[i][0] + 'nyo')


    } return changeinto.join(' ')
}
sentencesManipulation('ibu pergi ke pasar bersama aku')




const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'tulis kalimatmu disini > '
});

rl.prompt();

rl.on('line', (line) => {
    console.log("hasil konversi: " + sentencesManipulation(line));

    rl.prompt();
}).on('close', () => {
    console.log('Good bye!');
    process.exit(0);
});