//Create a function my_count_on_it that receives a string array as a parameter and returns an array with the length of each string

function my_count_on_it(param_1) {
    var my_count = [];
    for(i = 0; i < param_1.length; i++){
        my_count.push(param_1[i].length);
    }
    return my_count;
};