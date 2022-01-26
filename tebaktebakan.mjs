import readline from 'readline'
import fs from "fs"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "jawaban :"
});

console.log(`Selamat datang di permainan tebak kata, silahkan isi dengan jawaban yang benar ya!\n\n`)


var soal = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
let index = 0
let counter = 0
console.log(`Pertanyaan :${soal[index].definition}\n`)

rl.prompt();

rl.on('line', (answer) => {

    if (answer == "skip") {
        soal.push(soal[index])
        index++
        console.log(soal[index].definition)
    } else if (answer == soal[index].term) {
        console.log('Selamat Anda Benar!\n\n')
        index++
        counter = 0
        if (index < soal.length) {
            console.log(`Pertanyaan : ${soal[index].definition}\n`)
        } else {
            console.log('Anda Berhasil!');
            rl.close()
        }

    } else {
        counter++
        console.log(`Anda kurang beruntung! anda telah salah ${counter} Kali, silahkan coba lagi\n`)
    }


    rl.prompt();

}).on('close', () => {
    process.exit(0);
})


