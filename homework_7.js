
// task 7.1     +

const testData = function(data) {
    return Array.isArray(data);
}

// console.log(testData("hello"));    // false

// task 7.2    +

const cloneArray = function(arr1) {
    const newArr = [...arr1];
    return newArr
}

let arr1 = [1,2,3];
let arr2 = cloneArray(arr1);
arr2[0] = 5

// console.log(arr1, arr2);


// task 7.5  + 

const joinArrayElement = function(arr1) {
    let str = "";
    for (let i = 0; i < arr1.length; i++) {
        str = str + arr[i]+",";
    }
    return str;
}
const arr = ["Red", "Green", "Yellow"];

console.log(joinArrayElement(arr));

// task 7.6   +

const insertDashes = function(num) {
    let str = "" + num;
    let arr = str.split("");
    str = ""

    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            str = str + arr[i];
        }else {
            str = str + arr[i] + "-";
        }
    }
    return str
}
console.log(insertDashes(1234));

// task 7.7  +

const sortFunction = function (arr2) {
    let a = 0;

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr2[i] < arr2[j]) {
                a = arr2[i];
                arr2[i] = arr2[j];
                arr2[j] = a;
            }
        }
    }
    return arr2
}
let array = [2,4,3,5,1]
console.log(sortFunction(array));

// task 7.8


const countElemInArray = function (arr) {
    let result = [];
    let res = 0;
    let element;

    for (let elem of arr) {
        result.push(arr.filter(x => x === elem))
    }

    for (let i of result) {
        if (i.length > res) {
            res = i.length;
            element = i[0];
        }
    }
    console.log(element, res);
}

const newArray = ["a", "a", "b", 5, 6, 3, 4]

countElemInArray(newArray)


// task 7.9   +

function reverseWord(str) {
    let resultStr = ""

    for (let i of str) {
        if (i === i.toUpperCase()) {
            resultStr = resultStr + i.toLowerCase()
        }else {
            resultStr = resultStr + i.toUpperCase()
        }
    }
    return resultStr;
}

// console.log(reverseWord("SaloM AssaLom"));

// task 7.10   +

const nesArray = [[2, 3, 4, 2], [5, 4, 6, 33], [22, 33, 1, 8], [67, 87, 9, 0]]

function getArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`"Row" ${i}`);
        for (let j = 0; j <  arr[i].length; j++) {
            console.log(`"${arr[i][j]}"`)
        }
    }
}

// console.log(getArray(nesArray));
