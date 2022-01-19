    function romawi(n) {
        var newword = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;//gapaham kenapa nulisnya gini
        for ( i in newword ) {// in tuh apa
          while ( n >= newword[i] ) {
            roman += i;
            n -= newword[i];//kenapa -
          }
        }
        return roman;
      }



console.log("Script testing untuk konversi romawi\n");
console.log("input | expected | result");
console.log("------|----------|--------")
console.log("4     |IV        |", romawi(4))
console.log("9     |IX        |", romawi(9))
console.log("13    |XIII      |", romawi(13))
console.log("1453  |MCDLIII   |", romawi(1453))
console.log("1646  |MDCXLVI   |", romawi(1646))
console.log(romawi(1646))
console.log(romawi(4))
console.log(romawi(9))
console.log(romawi(13))
console.log(romawi(1453))