// function deretAngka(n) {
//     const kata1 = "KAS"
//     const kata2 = "KUS"

//     let hasilDeretAngka = []

//     for (var i = 3; i <= n * 3; i += 3) {
//         if (i % 5 === 0 && i % 6 === 0) {
//             hasilDeretAngka.push(`${kata1}${kata2}`)
//         } else if (i % 5 === 0) {
//             hasilDeretAngka.push(`${kata1}`)
//         } else if (i % 6 === 0) {
//             hasilDeretAngka.push(`${kata2}`)
//         } else {
//             hasilDeretAngka.push(i)
//         }
//     } return hasilDeretAngka
// }
// console.log(deretAngka(10))

// function deretAngka(n) {

//     const kata1 = "KAS"
//     const kata2 = "KUS"

//     let hasilDeretAngka = []

//     for(var i = 3; i<=n*3; i+=3) {
//         if(i % 5 === 0 && i % 6 === 0) {
//             hasilDeretAngka.push(`${kata1}${kata2}`)
//         }else if(i%5 === 0) {
//             hasilDeretAngka.push(`${kata1}`)
//         }else if(i%6 === 0) {
//             hasilDeretAngka.push(`${kata2}`)
//         }else {
//             hasilDeretAngka.push(i)
//         }
//     }return hasilDeretAngka
// }
// console.log(deretAngka(10))

function deretAngka(n) {

    const word1 = "KAS"
    const word2 = "KUS"

    let result = []

    for (var i = 3; i <= n * 3; i += 3) {

        if (i % 5 === 0 && i % 6 === 0) {
            result.push(`${word1}${word2}`)
        } else if (i % 5 === 0) {
            result.push(`${word1}`)
        } else if (i % 6 === 0) {
            result.push(`${word2}`)
        } else result.push(i)
    } return result
}

console.log(deretAngka(10))