// function indexPrime(n) {
//     var count = 2;
//     var index = 0;

//     while (index < n) {//  while : loop sampai indeksnya sma dgn n
//         var prime = true;
//         for (var i = 2; i <= Math.sqrt(count); i++)
//             if (count % i == 0)
//                 prime = false
//         if (prime) {
//             index++

//         }
//         count++
//     }
//     return count - 1
// }

// console.log(indexPrime(3))// urutan bilangan prima ke 3
// console.log(indexPrime(4))
// console.log(indexPrime(500))
// console.log(indexPrime(37786))


function indexPrime(n) {

    var number = 2
    var counter = 0

    while (counter < n) {
        var prime = true
        for (var i = 2; i <= Math.sqrt(number); i++)
            if (number % i == 0)
                prime = false
        if (prime) {
            counter++
        }
        number++

    }
    return number -1
}
console.log(indexPrime(3))// urutan bilangan prima ke 3
console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))