function indexPrime(n) {
    var number = 2;
    var counter = 0;

    while (counter < n) {
        var prime = true;
        for (var i = 2; i < number; i++)
            if (number % i == 0)
                prime = false
        if (prime) {
            counter++

        }
        number++
    }
    return number - 1
}

console.log(indexPrime(3))
console.log(indexPrime(4))
console.log(indexPrime(500))
console.log(indexPrime(37786))
