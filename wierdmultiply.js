function wierdMultiply(number) {

    let str = number.toString()

    if (str.length > 1) {


        let total = 1

        for (i = 0; i < str.length; i++) {
            total *= str[i]
        }
        return wierdMultiply(total)
    } else {
        return number
    }
}
console.log(wierdMultiply(39))
console.log(wierdMultiply(999))
console.log(wierdMultiply(3))






