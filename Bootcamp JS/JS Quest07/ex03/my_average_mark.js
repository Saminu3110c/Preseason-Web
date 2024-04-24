//Description
//Hash is a data structure that works like an array but instead of having numerical value as an index you can specify "any type" of key:
//You have a test for a class and we want to know the average results for the class.
//Write a function that takes an array of hash with all of the grades/marks for a given test and returns an average grade for the entire class.

function my_average_mark(param_1) {
    var total = 0;
    for(i = 0; i < param_1.length; i++){
        total += param_1[i].integer;
    }
    var average = total/param_1.length;
    return average.toFixed(1);
   
};
