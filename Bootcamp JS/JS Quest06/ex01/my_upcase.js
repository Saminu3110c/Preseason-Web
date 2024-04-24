function my_upcase(param_1) {
    let result = param_1;
    for (let i = 0; i < param_1.length; i++) {
        if (param_1[i] >= 'a' && param_1[i] <= 'z') {
            result = result.replace(param_1[i], String.fromCharCode(param_1[i].charCodeAt(0) - 32));
        }
    }
    return result;
};


// Example usage
// const inputString = "Hello, world!";
// const uppercasedString = my_upcase(inputString);
// console.log(uppercasedString); // Output: HELLO, WORLD!