/**
 * @param {string} password
 * @return {boolean}
//  */
// 2299. Strong Password Checker II

// A password is said to be strong if it satisfies all the following criteria:

// It has at least 8 characters.
// It contains at least one lowercase letter.
// It contains at least one uppercase letter.
// It contains at least one digit.
// It contains at least one special character. The special characters are the characters in the following string: "!@#$%^&*()-+".
// It does not contain 2 of the same character in adjacent positions (i.e., "aab" violates this condition, but "aba" does not).
// Given a string password, return true if it is a strong password. Otherwise, return false.

 

// Example 1:

// Input: password = "IloveLe3tcode!"
// Output: true
// Explanation: The password meets all the requirements. Therefore, we return true.

var strongPasswordCheckerII = function(password) {
    let hasLower = false;
    let hasUpper = false;
    let hasNum = false;
    let hasReg = false;

    let n = password.length;
    if(n < 8) return false;

    for(let i = 0;i<n;i++){

        let c = password[i];

        if(c >= 'a' && c <= 'z'){
            hasLower = true;
        }
         if(c >= 'A' && c <= 'Z'){
            hasUpper = true;
        }
         if( c >= '0' && c <= '9'){
            hasNum = true;
        }
        if(c == '!' || c=='@' || c == '#' || c == '$' || c == '%' || c == '^' || c == '&' || c == '*' || c == '(' || c == ')' || c == '-' || c == '+'){
            hasReg = true;
        }
        if(i < n-1){
            console.log(i + " is "+password[i] + " and " + password[i+1]);
            if(password[i] == password[i+1]){
                // console.log("returned");
                return false;
            }
        }
    }

    // console.log(hasLower + " " + hasUpper + " " + hasNum + " ");
    if(hasLower == true &&hasUpper == true&&hasNum == true && hasReg == true){
        return true;
    }
    return false;
    

};