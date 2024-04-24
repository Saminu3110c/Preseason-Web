function my_downcase(param_1) {
    // Modifying the "my_upcase" to achieve "my_downcase"
    let result = param_1;
    for (let i = 0; i < param_1.length; i++) {
        if (param_1[i] >= 'A' && param_1[i] <= 'Z') {
            result = result.replace(param_1[i], String.fromCharCode(param_1[i].charCodeAt(0) + 32));
        }
    }
    return result;
};



// Example usage
// const inputString = "HELLO, WORLD!";
// const downcasedString = my_downcase(inputString);
// console.log(downcasedString); // Output: hello, world!