
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




