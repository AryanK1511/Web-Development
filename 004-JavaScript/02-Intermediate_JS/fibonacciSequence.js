function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        let returnedArr = [];
        if (n === 1) {
            returnedArr = [0];
        }

        else if (n === 2) {
            returnedArr = [0, 1];
        }

        else {
            returnedArr = [0, 1];
            for (let i = 2; i < n; i++) {
                returnedArr.push(returnedArr[returnedArr.length - 2] + returnedArr[returnedArr.length - 1]);
            }
        }
        
        //Return an array of fibonacci numbers starting from 0.
        return returnedArr;
        
    //Do NOT change any of the code below 👇
    }    