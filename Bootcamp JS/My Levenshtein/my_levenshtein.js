// Write an algorithm that calculates the Qwasar version of a Levenshtein number between two words.
function my_levenshtein(firstStr, secondStr){
	if(firstStr.length !== secondStr.length){
        return -1;
    }else{

    
    var my_value = 0;

        for(i = 0; i < firstStr.length; i++){

            
            if(firstStr[i] !== secondStr[i]){
                my_value++;
            }

           
        }
        return my_value;
    }
};