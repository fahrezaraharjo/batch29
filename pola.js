function pola(str) {

    let split = str.split(' ')


    for (let i = 0; i <= 9; i++) {
        for (let j = 0; j <= 9; j++) {
            if (split[0].replace('#', i) * split[2] == split[4].replace('#', j)) {
                return ([i, j])

            }



        }

    }

}


console.log(pola('8#61 * 895 = 78410#5'))
console.log(pola('42#3 * 188 = 80#204'))