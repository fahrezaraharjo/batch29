function weirdMultiply(number) {

    let str = number.toString()

    if (str.length > 1) {


        let total = 1

        for (i = 0; i < str.length; i++) {
            total *= str[i]
        }
        return weirdMultiply(total)
    }else{
        return number
    }
}
console.log(weirdMultiply(39))
console.log(weirdMultiply(999))
console.log(weirdMultiply(3))
