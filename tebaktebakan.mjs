import readline from 'readline'
import fs from "fs"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "tebakan :"
});

console.log('Selamat datang di permainan tebak kata, silahkan isi dengan jawaban yang benar ya! ')


var soal = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
let index = 0
let counter = 0
console.log(soal[index].definition)

rl.prompt();

rl.on('line', (answer) => {

    if (answer == "skip") {
        soal.push(soal[index])
        index++
        console.log(soal[index].definition)
    } else if (answer == soal[index].term) {
        console.log('selamat anda benar!')
        index++
        counter = 0
        if (index < soal.length) {
            console.log(soal[index].definition)
        } else {
            console.log('Hore Anda Menang!');
            rl.close()
        }

    } else {
        counter++
        console.log(`"Wkwkwkwk, anda kurang beruntung! anda telah salah ${counter} kali`)
    }


    rl.prompt();

}).on('close', () => {
    process.exit(0);
})


