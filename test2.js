function sum(num){
    if (num === 0) {
        return 0;
    } else {
        return num + sum(--num)
    }
}
console.log(sum(4))

sum(4);