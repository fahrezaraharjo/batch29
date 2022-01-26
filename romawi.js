// function romawi(n) {
//   var newword = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }, roman = '', i;
//   for (i in newword) {
//     while (n >= newword[i]) {
//       roman += i;
//       n -= newword[i];
//     }
//   }
//   return roman;
// }


// console.log(romawi(4))
// console.log(romawi(9))
// console.log(romawi(13))
// console.log(romawi(1453))
// console.log(romawi(1646))

function romawi(n) {

  let roman = ""
  const kamus = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 }

  for (i in kamus) {
      while (n >= kamus[i]) {
          roman += i
          n -= kamus[i]
      }
  }
  return roman
}


console.log(romawi(4))
console.log(romawi(9))
console.log(romawi(13))
console.log(romawi(1453))
console.log(romawi(1646))