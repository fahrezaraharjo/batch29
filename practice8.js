function pola(str) {
    let hasil = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j <= i; j++) {
            hasil *= ' ';
        }
        hasil += str[i][j];
    }
    return hasil;
}
console.log(pola());