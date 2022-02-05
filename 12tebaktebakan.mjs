if(!process.argv[2]) {
    console.log("tolong sertakan inputan nama filenya")
}


import readline from 'readline'
import fs from "fs"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "jawaban :"
});



console.log(`selamat datang di permainan tebak-tebakan. kamu akan diberikan pertanyaan dari file ini 'data.json`)
console.log(`untuk bermain, jawablah dengan jawaban yang sesuai`)
console.log(`gunakan "skip" untuk menangguhkan pertanyaan,dan di akhir pertanyaan akan di tanyakan lagi\n\n`)

var soal = JSON.parse(fs.readFileSync(process.argv[2], 'utf-8'))
let index = 0
let counter = 0
console.log(`Pertanyaan :${soal[index].definition}`)

rl.prompt();

rl.on('line', (answer) => {

    if (answer == "skip") {
        soal.push(soal[index])
        index++
        console.log(soal[index].definition)
    } else if (answer == soal[index].term) {
        console.log('Selamat Anda Benar!\n')
        index++
        counter = 0
        if (index < soal.length) {
            console.log(`Pertanyaan : ${soal[index].definition}`)
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


