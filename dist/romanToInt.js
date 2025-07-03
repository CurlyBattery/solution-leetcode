"use strict";
function romanToInt(s) {
    const rArray = [
        ['I', 1],
        ['IV', 4],
        ['V', 5],
        ['IX', 9],
        ['X', 10],
        ['XL', 40],
        ['L', 50],
        ['XC', 90],
        ['C', 100],
        ['CD', 400],
        ['D', 500],
        ['CM', 900],
        ['M', 1000]
    ];
    const romeMap = new Map(rArray.map(obj => [obj[0], obj[1]]));
    let finalNumber = 0;
    const arrayString = [];
    let i = 0;
    while (i < s.length) {
        if (i + 1 < s.length) {
            if (romeMap.has(s[i] + s[i + 1])) {
                arrayString.push(s[i] + s[i + 1]);
                i++;
            }
            else {
                arrayString.push(s[i]);
            }
        }
        else {
            arrayString.push(s[i]);
        }
        i++;
    }
    for (let j = 0; j < arrayString.length; j++) {
        let newNumber = romeMap.get(arrayString[j]);
        finalNumber += typeof newNumber === 'number' ? newNumber : 0;
    }
    return finalNumber;
}
const str = 'MCMXCIV'; // ['M', 'CM', 'XC', 'IV']
console.log(romanToInt(str));
