function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        let yearsRemaining = 90 - age;
        let daysRemaining = yearsRemaining * 365;
        let weeksRemaining = yearsRemaining * 52;
        let monthsRemaining = yearsRemaining * 12;

        console.log("You have " + daysRemaining + " days, " + weeksRemaining + " weeks, and " + monthsRemaining + " months left.")
        
    /*************Don't change the code below**********/
    }
    
    lifeInWeeks(56);
    