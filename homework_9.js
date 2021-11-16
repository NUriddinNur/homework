// task 1    +

let arr1 = [];
let arr2 = new Array()

// console.log(arr2);

// task 2   +
 
let arr3 = [1];

// console.log(arr3.length);

// task 3   +

let arr4 = new Array(5).fill(1);
// console.log(arr4);


// task 4    +

let array4 = [1,2,3,4];
let res4 = array4.join("")

// console.log(res4);

// task 5  +

function getElemArray5(arr, firstElem, lastElem) {
    arr.push(...lastElem);
    arr.unshift(...firstElem)
    return arr;
}

let arr5 = [1,2,3];

// console.log(getElemArray5(arr5, [1, 2,3], [6,7,8]));


// task 6    +

function getValues(arr, start, end) {
    let result = []
    result = arr.splice(start, end, arr);

    return result;
}

let arr66 = [1,2,3,4,5,6];
// console.log(getValues(arr66, 1, 4));


// task 7    +

function deleteElem(arr) {
    // solution 1
    let result = new Set(arr);
    result = Array(...result)

    //solution  2
    let res7 = [];
    for (let i = 0; i < arr.length; i++) {
        if (!res7.includes(arr[i])) {
            res7.push(arr[i])
        }
    }
    // console.log(res7);
    return result;

}

let arr7 = [2,3,1,4,2,3]

// console.log(deleteElem(arr7));


// task 8    +

function concatArray(arr1, arr2) {
    //solution 1
    let result = arr1.concat(arr2);
    console.log(result);

    // solution 2
    let res = [...arr1, ...arr2];

    console.log(res);
}

// concatArray([1,2], [3,4])


// task 9    +

function findGeneralElem(arr1, arr2) {
    let result = []

    for (let i = 0; i < arr1.length; i++) {
        if (arr1.includes(arr2[i])) {
            result.push(arr2[i])
        }
    }
    console.log(result);
}

let arr9 = [2,3,1];
let arr9_1 = [2,4,3];

// findGeneralElem(arr9, arr9_1);


// task  10    +

function emtyArray(arr) {
    arr = [];
    // arr.length = 0;
}

// emtyArray([2,3,4])


// task 11   +

function changeTypeElemToNumber(arr) {
    let result11;

    result11 = arr.map(Number);
    return result11;
}

function changeTypeElemToString(arr) {
    let result11;

    result11 = arr.map(String);
    return result11;
}

function changeTypeElemToBool(arr) {
    let result11;

    result11 = arr.map(Boolean);
    return result11;
}

let arr11 = ["1","2", "a", true, false, NaN, 1,2,3];

// console.log(changeTypeElemToNumber(arr11));
// console.log(changeTypeElemToString(arr11));
// console.log(changeTypeElemToBool(arr11));



// task 12   +

function arrayToObject(arr12) {

    let res = Object.assign({}, arr12)

    console.log("=>", res);
}

// arrayToObject([1,2,3])


// task 13    +

function SortByData(arr, data) {
    let obj = {};
    
    for (let elem of arr) {
        if (!(elem[data] in obj)) {
            obj[elem[data]] = elem[data]
        }
    };


    for (let elem in obj) {
        let result = [];
        for (let i of arr) {
            if (elem === i[data]){
                result.push(i);
            }
        }
        obj[elem] = result;
    }
    return obj    
}

let persons = [
    {name: "Ali", work: "teacher"},
    {name: "Vali", work: "dev"},
    {name: "Jim", work: "test"},
    {name: "John", work: "dev"},
    {name: "Anvar", work: "dev"}
]

let sorted = SortByData(persons, "work");

console.log(sorted);