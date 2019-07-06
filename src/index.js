module.exports = function check(str, bracketsConfig) {
    var	brackArr = str.split('');									// Получаем массив из строки.
    var sameBrackets = [];
    var opBrackets = [];
    var clBrackets = [];
    var revBrack = {};												// Хранятся в таком виде {')':'(', ']':'[', '}':'{' и тд}
    var sameBrstack = [];
    
    if(str.length % 2 > 0){
    	return false;
    }
    for(var i = 0; i < bracketsConfig.length; i++){				
    	for(var j = 0;j < bracketsConfig[i].length; j++){	
    		if(j == 0){
    		opBrackets.push(bracketsConfig[i][j]);					// Создаём массив из открывающих скобок.
    		}
    		if(j == 1){
    		revBrack[bracketsConfig[i][j]] = bracketsConfig[i][0];	// Создаём объект из закрывающих скобок.
    		clBrackets.push(bracketsConfig[i][j]);
            }
    	}
        if(opBrackets[i]==clBrackets[i]){
            sameBrackets.push(opBrackets[i]);
        }
    }
    //console.log(brackArr);
    //console.log(opBrackets);
    //console.log(clBrackets);
    //console.log(revBrack);
    //console.log(sameBrackets);
    for(i = 0; i < brackArr.length; i++){
        console.log(brackArr);
        var isSameBrack = sameBrackets.indexOf(brackArr[i]);
         if(isSameBrack != -1){
            if(sameBrackets[isSameBrack] == brackArr[i+1]){
                //console.log(brackArr);
                brackArr.splice(i, 2);
                if(brackArr.length == 0){
                    return true;
                }
                i = i -1;
                continue;
            }else{
                var isSameBrstack = sameBrstack.indexOf(brackArr[i]);
                if(isSameBrstack != -1){
                    if(brackArr[i] == sameBrstack[sameBrstack.length-1]){
                        sameBrstack.pop();
                        brackArr.splice(brackArr[i-1], 2);
                        if(brackArr.length == 0){
                            return true;
                        }
                        i = i -1;
                    }else{
                        //console.log("Здесь вылетает");
                        return false;
                    }
                }else{
                      sameBrstack.push(brackArr[i]);   
                }
                }
        }
    	var isOpBrack = opBrackets.indexOf(brackArr[i]);				
    	if(isOpBrack == -1){					                   
            //console.log(brackArr[i]);
            if(brackArr[i-1] == revBrack[brackArr[i]]){
    			//console.log(brackArr);
                brackArr.splice(i-1, 2);
                //console.log(brackArr);
    			if(brackArr.length == 0){
    				return true;
    			}
    			i = i - 2;

    		}else{
    			  //console.log("Вот тут");
                  return false;
    		      }
    			
    	}
    }	
}

	






