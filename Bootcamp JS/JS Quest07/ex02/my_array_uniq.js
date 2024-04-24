//Create a function my_array_uniq that receives an integer array as a parameter and returns an array with those integers but without any duplicates.

function my_array_uniq(param_1) {
    const my_uniq =param_1.filter((value, index) => param_1.indexOf(value) === index);
    return my_uniq;
};
