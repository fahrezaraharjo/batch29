function sum() {
    let total = 0

    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    console.log(total)
}
sum(1, 2, 7)
sum(1, 4)
sum(11)
sum(10, 3, 6, 7, 9)
sum(2,3,4,5)