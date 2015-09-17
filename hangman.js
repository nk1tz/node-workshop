//Hangman
var request = require('request');

getRandomWord();


//
//     FUNCTIONS
//

function startGame(theWord){
    
    //create guessArray
    var guessArray = [theWord.length];
    guessArray.forEach(function(ele){
        ele = "_";
    });
    
    //introductions to the game
    introductions();
}

function findInstancesOfLetterInWord(word, letter, guessArray){
    for(var i=0; i<word.length;i++) {
        if (word[i] === letter){
            guessArray[i] = letter;
        }
    }
}

function outputTheWord(theWord){
    
}

function getRandomWord(){
    request('http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=20000&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5', function (error, response, body) {
        if (error) {
            console.log("There was an error: " + error);
        }
        if (!error && response.statusCode === 200) {
            var randomWord = JSON.parse(body);
            var theWord = randomWord.word;
            console.log(theWord);
            console.log(theWord[0]);
            console.log(theWord[1]);
            console.log(theWord[2]);
            console.log(theWord[3]);
            console.log(theWord[4]);
            
        }
        //pass theWord to next function.
        // startGame(theWord);
    });
}

function introductions(){
    console.log("---                            ---");
    console.log("---   WELCOME TO THE HANGMAN   ---");
    console.log("---                            ---");
    console.log("A random word has been selected, \nit is up to you to guess it, \nlest the gallows take your life!");
}

function outputHangman(stage){
    if(stage === 0){
        console.log( " _________     ");
        console.log( "| /       |    ");
        console.log( "|/             ");
        console.log( "|              ");
        console.log( "|              ");
        console.log( "|              ");
        console.log( "|              ");
    }
    if(stage === 1){
        console.log( " _________     ");
        console.log( "| /       |    ");
        console.log( "|/        0    ");
        console.log( "|              ");
        console.log( "|              ");
        console.log( "|              ");
        console.log( "|              ");
    }
    if(stage === 2){
        console.log( " _________     ");
        console.log( "| /       |    ");
        console.log( "|/        0    ");
        console.log( "|         |    ");
        console.log( "|              ");
        console.log( "|              ");
        console.log( "|              ");
    }
    if(stage === 3){
        console.log( " _________     ");
        console.log( "| /       |    ");
        console.log( "|/        0    ");
        console.log( "|        /|    ");
        console.log( "|              ");
        console.log( "|              ");
        console.log( "|              ");
    }
    if(stage === 4){
        console.log( " _________     ");
        console.log( "| /       |    ");
        console.log( "|/        0    ");
        console.log( "|        /|\\  ");
        console.log( "|              ");
        console.log( "|              ");
        console.log( "|              ");
    }
    if(stage === 5){
        console.log( " _________     ");
        console.log( "| /       |    ");
        console.log( "|/        0    ");
        console.log( "|        /|\\  ");
        console.log( "|        /     ");
        console.log( "|              ");
        console.log( "|              ");
    }
    if(stage === 6){
        console.log( " _________     ");
        console.log( "| /       |    ");
        console.log( "|/        0    ");
        console.log( "|        /|\\  ");
        console.log( "|        / \\  ");
        console.log( "|              ");
        console.log( "|              ");
    }
}