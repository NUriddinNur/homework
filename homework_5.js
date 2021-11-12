
// task 1  +

function createUser(firstName, lastName, status, phone, email, password) {
    const user = {
        user_id: createId()+firstName,
        firstName: checkLeng(firstName, "firstName"),
        lastName: checkLeng(lastName, "lastName"),
        status: checkStatus(status),
        email: checkEmail(email),
        password: hashingPass(password),
        phone: checkPhoneKod(phone)
    }
    return user;
}

function createId() {
    const newId = Date.now();
    return newId;
}

function checkStatus(status) {
    const stat = ["moderator", "user", "admin"]
    if (stat.includes(status)) {
        return status;
    }else {
        console.log("Statusni qayta kiriting !!! [moderator, user, admin]");
    }
}

function checkLeng(inputData, key) {
    if (typeof inputData != "string") {
        console.log("String bo'lmagan malumot kiritdingiz !!!");
        return undefined;
    }
    if (inputData.length < 3) {
        if (key === "firstName"){
            console.log("Ismingizni qayta kiriting !!!");
            return undefined;
        }else if (key === "lastName") {
            console.log("Last name ni qayta kiriting !!!");
            return undefined;
        }
    }
    return inputData
}

function checkEmail(email) {
    if (email.includes("@")) {
        return email
    console.log(phoneKod);
} else {
        console.log("Email qayta kiriting");
    }
}

function hashingPass(pass) {
    if (pass.length < 8) {
        console.log("Password 8 ta belgidan kam");
        return undefined
    }
    let pass1 = [];
    let pass2 = [];
    for (let i = 0; i < 4; i ++) {
        pass1.push(pass[i]);
    }
    for (let i = pass.length - 3; i < pass.length; i++) {
        pass2.push(pass[i])
    }

    pass = pass1.join("")+"aabbss"+pass2.join("")
    return pass
}

function checkPhoneKod(num) {
    let phoneKod = num.slice(0, 4)
    if (phoneKod != "+998") {
        console.log("O'zbekiston telifon raqam kiriting !!! ");
        return
    }
    return num;
}

const Ali = createUser("Ali", "Valiev", "admin", "+998989091122", "admin@gmail.com", "11223344");
console.log(Ali);

// task 2  +

const arr = [2, 3, 2, 5, 7, 6, 8, 9, 55, 66, 4, 6, 66]

function getMaxMinNumber(arr) {
    let minNum = arr[0];
    let maxNum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i];
        }
        if (minNum > arr[i]) {
            minNum = arr[i]
        }
    } 

    return {
        maxNum,
        minNum
    }
}

console.log(getMaxMinNumber(arr));

// task 3 +

const arr = [1, 2, 3, 6, 5, 8, 4, 9, 2, 0, 1, 6];

function checkNumberInArray(arr, n) {
    for (let elem of arr) {
        if (elem === n) {
            return true;
        }
    }
    return false
}

console.log(checkNumberInArray(arr, 6));

//task 4 

const arr = [2, 3, 4, 1, 5, 2, 6, 4];

function except(array, excluded) {
    let end = 0;
    let startIndex = excluded[0];
    if (excluded.length === 1) {
        end = array.length - 1;
        console.log(end);
    }else {
        end = excluded[1];
        console.log(end);
    }
    let result = [];
    let step = 0;
    
    for (let i = startIndex; i <= end; i++) {
        result[step] = array[i];
        step += 1;
    }
    return result;
}

console.log(arr);
console.log(except(arr, [3]));


// task 5   +

const arr = [1, 2, 3, 4]; 

function exchangeElem(arr, index, num1) {
    let elem = 0;
    for (let i = index; i < num1; i++) {
        elem = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = elem;
    }
}
exchangeElem(arr, 0, 2)
console.log(arr);




// task 6   +

const arr = [1,10,2,3,4,6];

function getMax(numbers) {
    let num = 0;
    for (let elem of numbers) {
        if (elem > num) {
            num = elem;
        }
    }
    return num
};

console.log(getMax(arr));


// task 7  +

const movies = [
    {title: "a", year: 2021, rating: 4.5},
    {title: "c", year: 2020, rating: 3.7},
    {title: "v", year: 2021, rating: 4.3},
    {title: "g", year: 2019, rating: 4.0},
    {title: "t", year: 2018, rating: 3.9},
    {title: "y", year: 2018, rating: 5.0},
    {title: "j", year: 2021, rating: 3.8},
]


function searchMovieByYear(year) {
    let result = []; 
    const movies2 = movies.find((movie) => {
        if (movie.year === 2021) {
            result.push(movie)
        }
    })

    
    result.sort(function(a,b) {
    return a.rating - b.rating;
    });

    return result;
}

console.log(searchMovieByYear(2021));

// task 8  +

function sum(...args) {
    let result = 0;
    if (Array.isArray(args[0])) {
        let arr = args[0];
        for (let i of arr) {
            result += i;
        }
    }else {
        for (let elem of args) {
            result += elem;
        }
    }
    return result
}

console.log(sum(1,2,3));


/* _______________________________________Array metod________________________________________________ */


// unshift() metod

const arr = [2, 1, 3];

function unshift(arr, ...num) {
    let newArr = [];

    for (let i = 0; i < num.length; i++) {
        newArr[i] = num[i]
    }

    let lenNewArray = newArr.length;

    for (let i = 0; i < 3; i++) {
        newArr[i + lenNewArray] = arr[i]
    }

    return newArr
}

let aass = unshift(arr, true, false)


console.log(aass);
