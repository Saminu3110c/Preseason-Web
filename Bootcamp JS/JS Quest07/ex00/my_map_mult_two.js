//Create a function my_map_mult_two that receives an integer array as a parameter and iterates over the array.
//Perform a multiplication by 2 on each value and return the new array collected.

function my_map_mult_two(param_1) {
    var param_2 = [];
    for(i = 0; i < param_1.length; i++){
      param_2.push(param_1[i]*2);
    }
    return param_2;
};
