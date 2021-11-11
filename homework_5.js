
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

