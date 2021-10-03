/*Implement an algorithm to determine if a string has all unique character. 
What if you cannot use additional data structure.
Source: Craking The Coding Internview pg. 90*/

//Implementation with a map O(n) or O(2n)
function isUnique(passedString) {
    if (typeof passedString != 'string' || !passedString) {
        throw new Error(`Value ${passedString} is Invalid!`)
    }

    //Map the key as the character and the quantity as the value
    const characterMap = new Map();
    for (let i of passedString) {
        //check if the character has been added
        if (characterMap.has(i)) {
            characterMap.set(i, characterMap.get(i) + 1);
        } else {
            characterMap.set(i, 1);
        }
    }

    for (let [key, value] of characterMap) {
        if (value > 1) {
            return false;
        }
    }

    return true;
}

//Similar to map using an array list
function isUnique3(passedString) {
    if (typeof passedString != 'string' || !passedString) {
        throw new Error(`Value ${passedString} is Invalid!`)
    }

    const arrayOfChars = [];
    for (let i of passedString) {
        if (arrayOfChars.includes(i)) return false;
        arrayOfChars.push(i);
    }


    return true;
}

//Implement without using a Data Structure O(n^2)
function isUnique1(passedString) {
    if (typeof passedString != 'string' || !passedString) {
        throw new Error(`Value ${passedString} is Invalid!`)
    }

    for (let i = 0; i < passedString.length; i++) {
        for (let j = 0; j < passedString.length; j++) {
            if (i != j && passedString[i] === passedString[j]) {
                return false;
            }
        }
    }

    return true;
}

//Implement without using a Data Structure O(n)\
//Considering ASCII table only
function isUnique2(passedString) {
    if (typeof passedString != 'string' || !passedString) {
        throw new Error(`Value ${passedString} is Invalid!`)
    }

    //The ASCII table has only 128 any more than that has a duplic character
    if (passedString.length > 128) {
        return false;
    }

    //Map the character with an array and set the location of the char as ASCII to true
    const charSet = new Array(128);
    for (let i = 0; i < passedString.length; i++) {
        let val = passedString.charCodeAt(i);
        if (charSet[val]) {
            return false;
        }
        charSet[val] = true;
    }

    return true;
}

//Drive code
try {
    //test using Map()
    console.log(isUnique('abc') + ' => true');
    console.log(isUnique('abb') + ' => false');
    console.log(isUnique('abcdefgop') + ' => true');
    console.log(isUnique('abcdefgoplma') + ' => false');

    console.log('-------------------------------------------')

    //test using without any extra Data Structure
    console.log(isUnique1('abc') + ' => true');
    console.log(isUnique1('abb') + ' => false');
    console.log(isUnique1('abcdefgop') + ' => true');
    console.log(isUnique1('abcdefgoplma') + ' => false');

    console.log('-------------------------------------------')

    //Testing with array maped to ASCII
    console.log(isUnique2('abc') + ' => true');
    console.log(isUnique2('abb') + ' => false');
    console.log(isUnique2('abcdefgop') + ' => true');
    console.log(isUnique2('abcdefgoplma') + ' => false');

    console.log('-------------------------------------------')

    //Testing with array maped to ASCII
    console.log(isUnique3('abc') + ' => true');
    console.log(isUnique3('abb') + ' => false');
    console.log(isUnique3('abcdefgop') + ' => true');
    console.log(isUnique3('abcdefgoplma') + ' => false');
} catch (err) {
    console.log(err);
}