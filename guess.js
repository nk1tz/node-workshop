var prompt = require('prompt');
var theNumber;
var flag = true;
var tries = 6;
var count = 1;

//
//----- MAIN ------
//
start(tries);


//---------- FUNCTIONS ------------

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

function getAndCompare(target,num){
    askUser(count);
    prompt.start();
    prompt.get(['number'], function (err, result) {
        if(err){
            console.log("there was an error");
        }
        if(result.number == target){
            console.log("Congratulations! You have correctly guessed THE number!");
            flag = false;
        }else if(result.number < target){
            console.log("You're low");
        }else if(result.number > target){
            console.log("You're high");
        }
        count++;
        playGame(num-1)
    });
}

function playGame(triesLeft){
    if (triesLeft > 0 && flag){
        getAndCompare(theNumber,triesLeft);
    }
    else if(triesLeft === 0 && flag){
        console.log("You suck!");
        console.log("The number was : "+theNumber);
        console.log("Would you like to play again?")
        promptUserToPlayAgain();
    }
    else if(!flag){
        console.log("Would you like to play again?")
        promptUserToPlayAgain();
    }
}

function askUser(count){
    if (count === 1){
        console.log("What is your first guess?");       
    }else if(count == 2){
        console.log("What is your 2nd guess?");    
    }else if(count == 3){
        console.log("What is your 3rd guess?");
    }else{
        console.log("What is your "+ count + "th guess?");
    }
}

function start(tries){
    console.log("\n\n     --- WELCOME TO THE NUMBER GAME --- \n\n I have chosen a number between 1 and 100, you have " +tries+ " tries to guess.");
    theNumber = randomIntFromInterval(1,100);
    playGame(tries);
}

function promptUserToPlayAgain(){
    prompt.start();
    prompt.get(['yes_or_no'], function (err, result) {
        if(err){
            console.log("there was an error");
        }            
        if(result.yes_or_no === "yes"){
            flag = true;
            count = 1;
            start(tries);
        }else if(result.yes_or_no === "no"){
            console.log("Ok see you next time.");
        }else{
            promptUserToPlayAgain();
        }
    });
}