// Write a function called simplePasswordValidator that takes a single parameter. The password must contain atleast one lowercase letter, one uppercase letter and one digit. The length of the password must be atleast 8 characters. The function should return true if the password meets all the criteria, otherwise it should return false.

function simplePasswordValidator(password) {
    let hasLowercase = false
    let hasUppercase = false
    let hasNumber = false
    for (let char of password) {
        if (char.charCodeAt(0) >=65 && char.charCodeAt(0) <=90 ) {
            hasUppercase = true
        } else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            hasLowercase = true
        }
        else if (!isNaN(Number(char))){
            hasNumber = true
        }   
    } 
    if (!hasLowercase || !hasUppercase || !hasNumber || password.length < 8) {
        return false
    } 
    return true
}

console.log(simplePasswordValidator('absfkfkgkg'))
console.log(simplePasswordValidator('ab5Asfkfkgkg'))
console.log(simplePasswordValidator('absfkfkgkg'))