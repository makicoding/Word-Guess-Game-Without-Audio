// Values assigned to each game
var gameOptions = ["game01", "game02", "game03", "game04", "game05"];

// Random Number Generator to pick a game
var gamePick = gameOptions[Math.floor(Math.random() * gameOptions.length)];



// GAME 01      Madonna - Like a Virgin
if (gamePick === "game01") {

    // Initial variables
    var correctGuess01 = false;
    console.log(correctGuess01);

    var correctGuess02 = false;
    console.log(correctGuess02);

    var correctGuess03 = false;
    console.log(correctGuess03);

    var correctGuess04 = false;
    console.log(correctGuess04);

    var correctGuess05 = false;
    console.log(correctGuess05);


    var correctGuessScore = false;

    
    var guessesRemaining = 9;
    


    // Correct Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (this game has a maximum of 15 letters available for the
    // correct word, however more can be just added on in the
    // html and javascript as necessary)
    // (ones that are necessary are commented out)
    //document.getElementById("letter01").style.display = 'none';
    //document.getElementById("letter02").style.display = 'none';
    //document.getElementById("letter03").style.display = 'none';
    //document.getElementById("letter04").style.display = 'none';
    //document.getElementById("letter05").style.display = 'none';
    //document.getElementById("letter06").style.display = 'none';
    //document.getElementById("letter07").style.display = 'none';
    document.getElementById("letter08").style.display = 'none';
    document.getElementById("letter09").style.display = 'none';
    document.getElementById("letter10").style.display = 'none';
    document.getElementById("letter11").style.display = 'none';
    document.getElementById("letter12").style.display = 'none';
    document.getElementById("letter13").style.display = 'none';
    document.getElementById("letter14").style.display = 'none';
    document.getElementById("letter15").style.display = 'none';
    document.getElementById("letter16").style.display = 'none';



        // Incorrect Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (corresponding letters on the right)
    // (incorrect letters of the word are commented out)
    document.getElementById("lag01").style.display = 'none';    // A
    //document.getElementById("lag02").style.display = 'none';    // B
    //document.getElementById("lag03").style.display = 'none';    // C
    document.getElementById("lag04").style.display = 'none';    // D
    //document.getElementById("lag05").style.display = 'none';    // E
    //document.getElementById("lag06").style.display = 'none';    // F
    //document.getElementById("lag07").style.display = 'none';    // G
    //document.getElementById("lag08").style.display = 'none';    // H
    //document.getElementById("lag09").style.display = 'none';    // I
    //document.getElementById("lag10").style.display = 'none';    // J
    //document.getElementById("lag11").style.display = 'none';    // K
    //document.getElementById("lag12").style.display = 'none';    // L
    document.getElementById("lag13").style.display = 'none';    // M
    document.getElementById("lag14").style.display = 'none';    // N
    document.getElementById("lag15").style.display = 'none';    // O
    //document.getElementById("lag16").style.display = 'none';    // P
    //document.getElementById("lag17").style.display = 'none';    // Q
    //document.getElementById("lag18").style.display = 'none';    // R
    //document.getElementById("lag19").style.display = 'none';    // S
    //document.getElementById("lag20").style.display = 'none';    // T
    //document.getElementById("lag21").style.display = 'none';    // U
    //document.getElementById("lag22").style.display = 'none';    // V
    //document.getElementById("lag23").style.display = 'none';    // W
    //document.getElementById("lag24").style.display = 'none';    // X
    //document.getElementById("lag25").style.display = 'none';    // Y
    //document.getElementById("lag26").style.display = 'none';    // Z



    // Play Again Button hidden initially
    document.getElementById("playAgainButton").style.display = 'none';
    

    // Question
    document.getElementById("question").innerHTML = 'Which Artist performed the song Like A Virgin?';
    


    // This function begins the game when 
    // the user presses a key on their keyboard
    document.onkeyup = function(userKeyStroke){
                
        // This determines which key the user pressed on their keyboard
        var userChoice = userKeyStroke.key;
        

        // Letters in the word
        if ((userChoice === "m") || (userChoice === "M")){
            var letterM = 'M';
            document.getElementById("letter01").innerHTML = letterM;
            console.log('user typed m');
            correctGuess01 = true;
            console.log(correctGuess01);
        }
    
        else if ((userChoice === "a") || (userChoice === "A")){
            var letterA = 'A';
            document.getElementById("letter02").innerHTML = letterA;
            document.getElementById("letter07").innerHTML = letterA;
            console.log('user typed a');
            correctGuess02 = true;
            console.log(correctGuess02);
        }
    
        else if ((userChoice === "d") || (userChoice === "D")){
            var letterD = 'D';
            document.getElementById("letter03").innerHTML = letterD;
            console.log('user typed d');
            correctGuess03 = true;
            console.log(correctGuess03);
        }
    
        else if ((userChoice === "o") || (userChoice === "O")){
            var letterO = 'O';
            document.getElementById("letter04").innerHTML = letterO;
            console.log('user typed o');
            correctGuess04 = true;
            console.log(correctGuess04);
        }
    
        else if ((userChoice === "n") || (userChoice === "N")){
            var letterN = 'N';
            document.getElementById("letter05").innerHTML = letterN;
            document.getElementById("letter06").innerHTML = letterN;
            console.log('user typed n');
            correctGuess05 = true;
            console.log(correctGuess05);
        } 
    

        // Letters not in the word
        else {
            guessesRemaining--;
            document.getElementById("userGuessRemain").innerHTML = guessesRemaining;
            console.log('user score goes down by 1 point');
            
            // Letters in the word are commented out
            //if ((userChoice === "a") || (userChoice === "A")){
            //var letterA = 'A';
            //document.getElementById("lag01").innerHTML = letterA;
            //}

            if ((userChoice === "b") || (userChoice === "B")){
            var letterB = 'B';
            document.getElementById("lag02").innerHTML = letterB;
            }

            if ((userChoice === "c") || (userChoice === "C")){
            var letterC = 'C';
            document.getElementById("lag03").innerHTML = letterC;
            }
            
            //if ((userChoice === "d") || (userChoice === "D")){
            //var letterD = 'D';
            //document.getElementById("lag04").innerHTML = letterD;
            //}

            if ((userChoice === "e") || (userChoice === "E")){
            var letterE = 'E';
            document.getElementById("lag05").innerHTML = letterE;
            }

            if ((userChoice === "f") || (userChoice === "F")){
            var letterF = 'F';
            document.getElementById("lag06").innerHTML = letterF;
            }

            if ((userChoice === "g") || (userChoice === "G")){
            var letterG = 'G';
            document.getElementById("lag07").innerHTML = letterG;
            }

            if ((userChoice === "h") || (userChoice === "H")){
            var letterH = 'H';
            document.getElementById("lag08").innerHTML = letterH;
            }

            if ((userChoice === "i") || (userChoice === "I")){
            var letterI = 'I';
            document.getElementById("lag09").innerHTML = letterI;
            }

            if ((userChoice === "j") || (userChoice === "J")){
            var letterJ = 'J';
            document.getElementById("lag10").innerHTML = letterJ;
            }

            if ((userChoice === "k") || (userChoice === "K")){
            var letterK = 'K';
            document.getElementById("lag11").innerHTML = letterK;
            }

            if ((userChoice === "l") || (userChoice === "L")){
            var letterL = 'L';
            document.getElementById("lag12").innerHTML = letterL;
            }

            //if ((userChoice === "m") || (userChoice === "M")){
            //var letterM = 'M';
            //document.getElementById("lag13").innerHTML = letterM;
            //}

            //if ((userChoice === "n") || (userChoice === "N")){
            //var letterN = 'N';
            //document.getElementById("lag14").innerHTML = letterN;
            //}

            //if ((userChoice === "o") || (userChoice === "O")){
            //var letterO = 'O';
            //document.getElementById("lag15").innerHTML = letterO;
            //}

            if ((userChoice === "p") || (userChoice === "P")){
            var letterP = 'P';
            document.getElementById("lag16").innerHTML = letterP;
            }

            if ((userChoice === "q") || (userChoice === "Q")){
            var letterQ = 'Q';
            document.getElementById("lag17").innerHTML = letterQ;
            }

            if ((userChoice === "r") || (userChoice === "R")){
            var letterR = 'R';
            document.getElementById("lag18").innerHTML = letterR;
            }

            if ((userChoice === "s") || (userChoice === "S")){
            var letterS = 'S';
            document.getElementById("lag19").innerHTML = letterS;
            }

            if ((userChoice === "t") || (userChoice === "T")){
            var letterT = 'T';
            document.getElementById("lag20").innerHTML = letterT;
            }

            if ((userChoice === "u") || (userChoice === "U")){
            var letterU = 'U';
            document.getElementById("lag21").innerHTML = letterU;
            }

            if ((userChoice === "v") || (userChoice === "V")){
            var letterV = 'V';
            document.getElementById("lag22").innerHTML = letterV;
            }

            if ((userChoice === "w") || (userChoice === "W")){
            var letterW = 'W';
            document.getElementById("lag23").innerHTML = letterW;
            }

            if ((userChoice === "x") || (userChoice === "X")){
            var letterX = 'X';
            document.getElementById("lag24").innerHTML = letterX;
            }

            if ((userChoice === "y") || (userChoice === "Y")){
            var letterY = 'Y';
            document.getElementById("lag25").innerHTML = letterY;
            }

            if ((userChoice === "z") || (userChoice === "Z")){
            var letterZ = 'Z';
            document.getElementById("lag26").innerHTML = letterZ;
            }
        }



        // If all correctly guessed letters occur, then 
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // You win! text and Play Again button appears.
        if (correctGuess01 && correctGuess02 && correctGuess03 && correctGuess04 && correctGuess05){
            correctGuessScore = true;
            if (correctGuessScore === true){
                document.getElementById("numGuessRemainText").style.display = 'none';
                document.getElementById("userGuessRemain").style.display = 'none';
        
                var winText = 'You Win!';
                document.getElementById("youWinText").innerHTML = winText;
                document.getElementById("playAgainButton").style.display = 'block';
            }
        }

        

        // If guesses remaining is zero, then
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // Correct Answer and Play Again button appears.
        if (guessesRemaining === 0){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';
    
            var correctAnswer = 'Correct answer is Madonna';
            document.getElementById("correctAnswerText").innerHTML = correctAnswer;
            document.getElementById("playAgainButton").style.display = 'block';      
            }
        }
      
            
    
    // When the Play Again button appears and is clicked, then the browser window refreshes.
    function onClickReload() {
        location.reload();
    }
}

// GAME 02      Blondie - Call Me
if (gamePick === "game02") {

    // Initial variables
    var correctGuess01 = false;
    console.log(correctGuess01);

    var correctGuess02 = false;
    console.log(correctGuess02);

    var correctGuess03 = false;
    console.log(correctGuess03);

    var correctGuess04 = false;
    console.log(correctGuess04);

    var correctGuess05 = false;
    console.log(correctGuess05);

    var correctGuess06 = false;
    console.log(correctGuess06);

    var correctGuess07 = false;
    console.log(correctGuess07);


    var correctGuessScore = false;

    
    var guessesRemaining = 9;
    


    // Correct Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (this game has a maximum of 15 letters available for the
    // correct word, however more can be just added on in the
    // html and javascript as necessary)
    // (ones that are necessary are commented out)
    //document.getElementById("letter01").style.display = 'none';
    //document.getElementById("letter02").style.display = 'none';
    //document.getElementById("letter03").style.display = 'none';
    //document.getElementById("letter04").style.display = 'none';
    //document.getElementById("letter05").style.display = 'none';
    //document.getElementById("letter06").style.display = 'none';
    //document.getElementById("letter07").style.display = 'none';
    document.getElementById("letter08").style.display = 'none';
    document.getElementById("letter09").style.display = 'none';
    document.getElementById("letter10").style.display = 'none';
    document.getElementById("letter11").style.display = 'none';
    document.getElementById("letter12").style.display = 'none';
    document.getElementById("letter13").style.display = 'none';
    document.getElementById("letter14").style.display = 'none';
    document.getElementById("letter15").style.display = 'none';
    document.getElementById("letter16").style.display = 'none';



        // Incorrect Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (corresponding letters on the right)
    // (incorrect letters of the word are commented out)
    //document.getElementById("lag01").style.display = 'none';    // A
    document.getElementById("lag02").style.display = 'none';    // B
    //document.getElementById("lag03").style.display = 'none';    // C
    document.getElementById("lag04").style.display = 'none';    // D
    document.getElementById("lag05").style.display = 'none';    // E
    //document.getElementById("lag06").style.display = 'none';    // F
    //document.getElementById("lag07").style.display = 'none';    // G
    //document.getElementById("lag08").style.display = 'none';    // H
    document.getElementById("lag09").style.display = 'none';    // I
    //document.getElementById("lag10").style.display = 'none';    // J
    //document.getElementById("lag11").style.display = 'none';    // K
    document.getElementById("lag12").style.display = 'none';    // L
    //document.getElementById("lag13").style.display = 'none';    // M
    document.getElementById("lag14").style.display = 'none';    // N
    document.getElementById("lag15").style.display = 'none';    // O
    //document.getElementById("lag16").style.display = 'none';    // P
    //document.getElementById("lag17").style.display = 'none';    // Q
    //document.getElementById("lag18").style.display = 'none';    // R
    //document.getElementById("lag19").style.display = 'none';    // S
    //document.getElementById("lag20").style.display = 'none';    // T
    //document.getElementById("lag21").style.display = 'none';    // U
    //document.getElementById("lag22").style.display = 'none';    // V
    //document.getElementById("lag23").style.display = 'none';    // W
    //document.getElementById("lag24").style.display = 'none';    // X
    //document.getElementById("lag25").style.display = 'none';    // Y
    //document.getElementById("lag26").style.display = 'none';    // Z



    // Play Again Button hidden initially
    document.getElementById("playAgainButton").style.display = 'none';
    

    // Question
    document.getElementById("question").innerHTML = 'Which Artist performed the song Call Me?';
    


    // This function begins the game when 
    // the user presses a key on their keyboard
    document.onkeyup = function(userKeyStroke){
                
        // This determines which key the user pressed on their keyboard
        var userChoice = userKeyStroke.key;
        

        // Letters in the word
        if ((userChoice === "b") || (userChoice === "B")){
            var letterB = 'B';
            document.getElementById("letter01").innerHTML = letterB;
            console.log('user typed b');
            correctGuess01 = true;
            console.log(correctGuess01);
        }
    
        else if ((userChoice === "l") || (userChoice === "L")){
            var letterL = 'L';
            document.getElementById("letter02").innerHTML = letterL;
            console.log('user typed l');
            correctGuess02 = true;
            console.log(correctGuess02);
        }
    
        else if ((userChoice === "o") || (userChoice === "O")){
            var letterO = 'O';
            document.getElementById("letter03").innerHTML = letterO;
            console.log('user typed o');
            correctGuess03 = true;
            console.log(correctGuess03);
        }
    
        else if ((userChoice === "n") || (userChoice === "N")){
            var letterN = 'N';
            document.getElementById("letter04").innerHTML = letterN;
            console.log('user typed n');
            correctGuess04 = true;
            console.log(correctGuess04);
        }
    
        else if ((userChoice === "d") || (userChoice === "D")){
            var letterD = 'D';
            document.getElementById("letter05").innerHTML = letterD;
            console.log('user typed d');
            correctGuess05 = true;
            console.log(correctGuess05);
        } 
    
        else if ((userChoice === "i") || (userChoice === "I")){
            var letterI = 'I';
            document.getElementById("letter06").innerHTML = letterI;
            console.log('user typed i');
            correctGuess06 = true;
            console.log(correctGuess06);
        } 

        else if ((userChoice === "e") || (userChoice === "E")){
            var letterE = 'E';
            document.getElementById("letter07").innerHTML = letterE;
            console.log('user typed e');
            correctGuess07 = true;
            console.log(correctGuess07);
        } 


        // Letters not in the word
        else {
            guessesRemaining--;
            document.getElementById("userGuessRemain").innerHTML = guessesRemaining;
            console.log('user score goes down by 1 point');
            
            // Letters in the word are commented out
            if ((userChoice === "a") || (userChoice === "A")){
            var letterA = 'A';
            document.getElementById("lag01").innerHTML = letterA;
            }

            //if ((userChoice === "b") || (userChoice === "B")){
            //var letterB = 'B';
            //document.getElementById("lag02").innerHTML = letterB;
            //}

            if ((userChoice === "c") || (userChoice === "C")){
            var letterC = 'C';
            document.getElementById("lag03").innerHTML = letterC;
            }
            
            //if ((userChoice === "d") || (userChoice === "D")){
            //var letterD = 'D';
            //document.getElementById("lag04").innerHTML = letterD;
            //}

            //if ((userChoice === "e") || (userChoice === "E")){
            //var letterE = 'E';
            //document.getElementById("lag05").innerHTML = letterE;
            //}

            if ((userChoice === "f") || (userChoice === "F")){
            var letterF = 'F';
            document.getElementById("lag06").innerHTML = letterF;
            }

            if ((userChoice === "g") || (userChoice === "G")){
            var letterG = 'G';
            document.getElementById("lag07").innerHTML = letterG;
            }

            if ((userChoice === "h") || (userChoice === "H")){
            var letterH = 'H';
            document.getElementById("lag08").innerHTML = letterH;
            }

            //if ((userChoice === "i") || (userChoice === "I")){
            //var letterI = 'I';
            //document.getElementById("lag09").innerHTML = letterI;
            //}

            if ((userChoice === "j") || (userChoice === "J")){
            var letterJ = 'J';
            document.getElementById("lag10").innerHTML = letterJ;
            }

            if ((userChoice === "k") || (userChoice === "K")){
            var letterK = 'K';
            document.getElementById("lag11").innerHTML = letterK;
            }

            //if ((userChoice === "l") || (userChoice === "L")){
            //var letterL = 'L';
            //document.getElementById("lag12").innerHTML = letterL;
            //}

            if ((userChoice === "m") || (userChoice === "M")){
            var letterM = 'M';
            document.getElementById("lag13").innerHTML = letterM;
            }

            //if ((userChoice === "n") || (userChoice === "N")){
            //var letterN = 'N';
            //document.getElementById("lag14").innerHTML = letterN;
            //}

            //if ((userChoice === "o") || (userChoice === "O")){
            //var letterO = 'O';
            //document.getElementById("lag15").innerHTML = letterO;
            //}

            if ((userChoice === "p") || (userChoice === "P")){
            var letterP = 'P';
            document.getElementById("lag16").innerHTML = letterP;
            }

            if ((userChoice === "q") || (userChoice === "Q")){
            var letterQ = 'Q';
            document.getElementById("lag17").innerHTML = letterQ;
            }

            if ((userChoice === "r") || (userChoice === "R")){
            var letterR = 'R';
            document.getElementById("lag18").innerHTML = letterR;
            }

            if ((userChoice === "s") || (userChoice === "S")){
            var letterS = 'S';
            document.getElementById("lag19").innerHTML = letterS;
            }

            if ((userChoice === "t") || (userChoice === "T")){
            var letterT = 'T';
            document.getElementById("lag20").innerHTML = letterT;
            }

            if ((userChoice === "u") || (userChoice === "U")){
            var letterU = 'U';
            document.getElementById("lag21").innerHTML = letterU;
            }

            if ((userChoice === "v") || (userChoice === "V")){
            var letterV = 'V';
            document.getElementById("lag22").innerHTML = letterV;
            }

            if ((userChoice === "w") || (userChoice === "W")){
            var letterW = 'W';
            document.getElementById("lag23").innerHTML = letterW;
            }

            if ((userChoice === "x") || (userChoice === "X")){
            var letterX = 'X';
            document.getElementById("lag24").innerHTML = letterX;
            }

            if ((userChoice === "y") || (userChoice === "Y")){
            var letterY = 'Y';
            document.getElementById("lag25").innerHTML = letterY;
            }

            if ((userChoice === "z") || (userChoice === "Z")){
            var letterZ = 'Z';
            document.getElementById("lag26").innerHTML = letterZ;
            }
        }



        // If all correctly guessed letters occur, then 
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // You win! text and Play Again button appears.
        if (correctGuess01 && correctGuess02 && correctGuess03 && correctGuess04 && correctGuess05 && correctGuess06 && correctGuess07){
            correctGuessScore = true;
            if (correctGuessScore === true){
                document.getElementById("numGuessRemainText").style.display = 'none';
                document.getElementById("userGuessRemain").style.display = 'none';
        
                var winText = 'You Win!';
                document.getElementById("youWinText").innerHTML = winText;
                document.getElementById("playAgainButton").style.display = 'block';
            }
        }

        

        // If guesses remaining is zero, then
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // Correct Answer and Play Again button appears.
        if (guessesRemaining === 0){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';
    
            var correctAnswer = 'Correct answer is Blondie';
            document.getElementById("correctAnswerText").innerHTML = correctAnswer;
            document.getElementById("playAgainButton").style.display = 'block';      
            }
        }
      
            
    
    // When the Play Again button appears and is clicked, then the browser window refreshes.
    function onClickReload() {
        location.reload();
    }
}

// GAME 03      Aerosmith - Dude Looks Like A Lady
if (gamePick === "game03") {

    // Initial variables
    var correctGuess01 = false;
    console.log(correctGuess01);

    var correctGuess02 = false;
    console.log(correctGuess02);

    var correctGuess03 = false;
    console.log(correctGuess03);

    var correctGuess04 = false;
    console.log(correctGuess04);

    var correctGuess05 = false;
    console.log(correctGuess05);

    var correctGuess06 = false;
    console.log(correctGuess06);

    var correctGuess07 = false;
    console.log(correctGuess07);

    var correctGuess08 = false;
    console.log(correctGuess08);

    var correctGuess09 = false;
    console.log(correctGuess09);


    var correctGuessScore = false;

    
    var guessesRemaining = 9;
    


    // Correct Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (this game has a maximum of 15 letters available for the
    // correct word, however more can be just added on in the
    // html and javascript as necessary)
    // (ones that are necessary are commented out)
    //document.getElementById("letter01").style.display = 'none';
    //document.getElementById("letter02").style.display = 'none';
    //document.getElementById("letter03").style.display = 'none';
    //document.getElementById("letter04").style.display = 'none';
    //document.getElementById("letter05").style.display = 'none';
    //document.getElementById("letter06").style.display = 'none';
    //document.getElementById("letter07").style.display = 'none';
    //document.getElementById("letter08").style.display = 'none';
    //document.getElementById("letter09").style.display = 'none';
    document.getElementById("letter10").style.display = 'none';
    document.getElementById("letter11").style.display = 'none';
    document.getElementById("letter12").style.display = 'none';
    document.getElementById("letter13").style.display = 'none';
    document.getElementById("letter14").style.display = 'none';
    document.getElementById("letter15").style.display = 'none';
    document.getElementById("letter16").style.display = 'none';



        // Incorrect Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (corresponding letters on the right)
    // (incorrect letters of the word are commented out)
    document.getElementById("lag01").style.display = 'none';    // A
    //document.getElementById("lag02").style.display = 'none';    // B
    //document.getElementById("lag03").style.display = 'none';    // C
    //document.getElementById("lag04").style.display = 'none';    // D
    document.getElementById("lag05").style.display = 'none';    // E
    //document.getElementById("lag06").style.display = 'none';    // F
    //document.getElementById("lag07").style.display = 'none';    // G
    document.getElementById("lag08").style.display = 'none';    // H
    document.getElementById("lag09").style.display = 'none';    // I
    //document.getElementById("lag10").style.display = 'none';    // J
    //document.getElementById("lag11").style.display = 'none';    // K
    //document.getElementById("lag12").style.display = 'none';    // L
    document.getElementById("lag13").style.display = 'none';    // M
    //document.getElementById("lag14").style.display = 'none';    // N
    document.getElementById("lag15").style.display = 'none';    // O
    //document.getElementById("lag16").style.display = 'none';    // P
    //document.getElementById("lag17").style.display = 'none';    // Q
    document.getElementById("lag18").style.display = 'none';    // R
    document.getElementById("lag19").style.display = 'none';    // S
    document.getElementById("lag20").style.display = 'none';    // T
    //document.getElementById("lag21").style.display = 'none';    // U
    //document.getElementById("lag22").style.display = 'none';    // V
    //document.getElementById("lag23").style.display = 'none';    // W
    //document.getElementById("lag24").style.display = 'none';    // X
    //document.getElementById("lag25").style.display = 'none';    // Y
    //document.getElementById("lag26").style.display = 'none';    // Z



    // Play Again Button hidden initially
    document.getElementById("playAgainButton").style.display = 'none';
    

    // Question
    document.getElementById("question").innerHTML = 'Which Artist performed the song Dude (Looks Like A Lady)?';
    


    // This function begins the game when 
    // the user presses a key on their keyboard
    document.onkeyup = function(userKeyStroke){
                
        // This determines which key the user pressed on their keyboard
        var userChoice = userKeyStroke.key;
        

        // Letters in the word
        if ((userChoice === "a") || (userChoice === "A")){
            var letterA = 'A';
            document.getElementById("letter01").innerHTML = letterA;
            console.log('user typed a');
            correctGuess01 = true;
            console.log(correctGuess01);
        }
    
        else if ((userChoice === "e") || (userChoice === "E")){
            var letterE = 'E';
            document.getElementById("letter02").innerHTML = letterE;
            console.log('user typed e');
            correctGuess02 = true;
            console.log(correctGuess02);
        }
    
        else if ((userChoice === "r") || (userChoice === "R")){
            var letterR = 'R';
            document.getElementById("letter03").innerHTML = letterR;
            console.log('user typed r');
            correctGuess03 = true;
            console.log(correctGuess03);
        }
    
        else if ((userChoice === "o") || (userChoice === "O")){
            var letterO = 'O';
            document.getElementById("letter04").innerHTML = letterO;
            console.log('user typed o');
            correctGuess04 = true;
            console.log(correctGuess04);
        }
    
        else if ((userChoice === "s") || (userChoice === "S")){
            var letterS = 'S';
            document.getElementById("letter05").innerHTML = letterS;
            console.log('user typed s');
            correctGuess05 = true;
            console.log(correctGuess05);
        } 
    
        else if ((userChoice === "m") || (userChoice === "M")){
            var letterM = 'M';
            document.getElementById("letter06").innerHTML = letterM;
            console.log('user typed m');
            correctGuess06 = true;
            console.log(correctGuess06);
        } 

        else if ((userChoice === "i") || (userChoice === "I")){
            var letterI = 'I';
            document.getElementById("letter07").innerHTML = letterI;
            console.log('user typed i');
            correctGuess07 = true;
            console.log(correctGuess07);
        } 

        else if ((userChoice === "t") || (userChoice === "T")){
            var letterT = 'T';
            document.getElementById("letter08").innerHTML = letterT;
            console.log('user typed t');
            correctGuess08 = true;
            console.log(correctGuess08);
        } 

        else if ((userChoice === "h") || (userChoice === "H")){
            var letterH = 'H';
            document.getElementById("letter09").innerHTML = letterH;
            console.log('user typed h');
            correctGuess09 = true;
            console.log(correctGuess09);
        } 


        // Letters not in the word
        else {
            guessesRemaining--;
            document.getElementById("userGuessRemain").innerHTML = guessesRemaining;
            console.log('user score goes down by 1 point');
            
            // Letters in the word are commented out
            //if ((userChoice === "a") || (userChoice === "A")){
            //var letterA = 'A';
            //document.getElementById("lag01").innerHTML = letterA;
            //}

            if ((userChoice === "b") || (userChoice === "B")){
            var letterB = 'B';
            document.getElementById("lag02").innerHTML = letterB;
            }

            if ((userChoice === "c") || (userChoice === "C")){
            var letterC = 'C';
            document.getElementById("lag03").innerHTML = letterC;
            }
            
            if ((userChoice === "d") || (userChoice === "D")){
            var letterD = 'D';
            document.getElementById("lag04").innerHTML = letterD;
            }

            //if ((userChoice === "e") || (userChoice === "E")){
            //var letterE = 'E';
            //document.getElementById("lag05").innerHTML = letterE;
            //}

            if ((userChoice === "f") || (userChoice === "F")){
            var letterF = 'F';
            document.getElementById("lag06").innerHTML = letterF;
            }

            if ((userChoice === "g") || (userChoice === "G")){
            var letterG = 'G';
            document.getElementById("lag07").innerHTML = letterG;
            }

            //if ((userChoice === "h") || (userChoice === "H")){
            //var letterH = 'H';
            //document.getElementById("lag08").innerHTML = letterH;
            //}

            //if ((userChoice === "i") || (userChoice === "I")){
            //var letterI = 'I';
            //document.getElementById("lag09").innerHTML = letterI;
            //}

            if ((userChoice === "j") || (userChoice === "J")){
            var letterJ = 'J';
            document.getElementById("lag10").innerHTML = letterJ;
            }

            if ((userChoice === "k") || (userChoice === "K")){
            var letterK = 'K';
            document.getElementById("lag11").innerHTML = letterK;
            }

            if ((userChoice === "l") || (userChoice === "L")){
            var letterL = 'L';
            document.getElementById("lag12").innerHTML = letterL;
            }

            //if ((userChoice === "m") || (userChoice === "M")){
            //var letterM = 'M';
            //document.getElementById("lag13").innerHTML = letterM;
            //}

            if ((userChoice === "n") || (userChoice === "N")){
            var letterN = 'N';
            document.getElementById("lag14").innerHTML = letterN;
            }

            //if ((userChoice === "o") || (userChoice === "O")){
            //var letterO = 'O';
            //document.getElementById("lag15").innerHTML = letterO;
            //}

            if ((userChoice === "p") || (userChoice === "P")){
            var letterP = 'P';
            document.getElementById("lag16").innerHTML = letterP;
            }

            if ((userChoice === "q") || (userChoice === "Q")){
            var letterQ = 'Q';
            document.getElementById("lag17").innerHTML = letterQ;
            }

            //if ((userChoice === "r") || (userChoice === "R")){
            //var letterR = 'R';
            //document.getElementById("lag18").innerHTML = letterR;
            //}

            //if ((userChoice === "s") || (userChoice === "S")){
            //var letterS = 'S';
            //document.getElementById("lag19").innerHTML = letterS;
            //}

            //if ((userChoice === "t") || (userChoice === "T")){
            //var letterT = 'T';
            //document.getElementById("lag20").innerHTML = letterT;
            //}

            if ((userChoice === "u") || (userChoice === "U")){
            var letterU = 'U';
            document.getElementById("lag21").innerHTML = letterU;
            }

            if ((userChoice === "v") || (userChoice === "V")){
            var letterV = 'V';
            document.getElementById("lag22").innerHTML = letterV;
            }

            if ((userChoice === "w") || (userChoice === "W")){
            var letterW = 'W';
            document.getElementById("lag23").innerHTML = letterW;
            }

            if ((userChoice === "x") || (userChoice === "X")){
            var letterX = 'X';
            document.getElementById("lag24").innerHTML = letterX;
            }

            if ((userChoice === "y") || (userChoice === "Y")){
            var letterY = 'Y';
            document.getElementById("lag25").innerHTML = letterY;
            }

            if ((userChoice === "z") || (userChoice === "Z")){
            var letterZ = 'Z';
            document.getElementById("lag26").innerHTML = letterZ;
            }
        }



        // If all correctly guessed letters occur, then 
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // You win! text and Play Again button appears.
        if (correctGuess01 && correctGuess02 && correctGuess03 && correctGuess04 && correctGuess05 && correctGuess06 && correctGuess07 && correctGuess08 && correctGuess09){
            correctGuessScore = true;
            if (correctGuessScore === true){
                document.getElementById("numGuessRemainText").style.display = 'none';
                document.getElementById("userGuessRemain").style.display = 'none';
        
                var winText = 'You Win!';
                document.getElementById("youWinText").innerHTML = winText;
                document.getElementById("playAgainButton").style.display = 'block';
            }
        }

        

        // If guesses remaining is zero, then
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // Correct Answer and Play Again button appears.
        if (guessesRemaining === 0){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';
    
            var correctAnswer = 'Correct answer is Aerosmith';
            document.getElementById("correctAnswerText").innerHTML = correctAnswer;
            document.getElementById("playAgainButton").style.display = 'block';      
            }
        }
      
            
    
    // When the Play Again button appears and is clicked, then the browser window refreshes.
    function onClickReload() {
        location.reload();
    }
}

// GAME 04      Michael Jackson - Beat It
if (gamePick === "game04") {

    // Initial variables
    var correctGuess01 = false;
    console.log(correctGuess01);

    var correctGuess02 = false;
    console.log(correctGuess02);

    var correctGuess03 = false;
    console.log(correctGuess03);

    var correctGuess04 = false;
    console.log(correctGuess04);

    var correctGuess05 = false;
    console.log(correctGuess05);

    var correctGuess06 = false;
    console.log(correctGuess06);

    var correctGuess07 = false;
    console.log(correctGuess07);

    //var correctGuess08 = false;
    //console.log(correctGuess08);

    var correctGuess09 = false;
    console.log(correctGuess09);

    var correctGuess10 = false;
    console.log(correctGuess10);

    var correctGuess11 = false;
    console.log(correctGuess11);

    var correctGuess12 = false;
    console.log(correctGuess12);

    var correctGuess13 = false;
    console.log(correctGuess13);

    var correctGuess14 = false;
    console.log(correctGuess14);

    var correctGuess15 = false;
    console.log(correctGuess15);


    var correctGuessScore = false;

    
    var guessesRemaining = 9;
    


    // Correct Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (this game has a maximum of 15 letters available for the
    // correct word, however more can be just added on in the
    // html and javascript as necessary)
    // (ones that are necessary are commented out)
    //document.getElementById("letter01").style.display = 'none';
    //document.getElementById("letter02").style.display = 'none';
    //document.getElementById("letter03").style.display = 'none';
    //document.getElementById("letter04").style.display = 'none';
    //document.getElementById("letter05").style.display = 'none';
    //document.getElementById("letter06").style.display = 'none';
    //document.getElementById("letter07").style.display = 'none';
    document.getElementById("letter08").innerHTML = '--';
    var space = document.getElementById("letter08");
    space.style.opacity = "0";
    //document.getElementById("letter09").style.display = 'none';
    //document.getElementById("letter10").style.display = 'none';
    //document.getElementById("letter11").style.display = 'none';
    //document.getElementById("letter12").style.display = 'none';
    //document.getElementById("letter13").style.display = 'none';
    //document.getElementById("letter14").style.display = 'none';
    //document.getElementById("letter15").style.display = 'none';
    document.getElementById("letter16").style.display = 'none';



        // Incorrect Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (corresponding letters on the right)
    // (incorrect letters of the word are commented out)
    document.getElementById("lag01").style.display = 'none';    // A
    //document.getElementById("lag02").style.display = 'none';    // B
    document.getElementById("lag03").style.display = 'none';    // C
    //document.getElementById("lag04").style.display = 'none';    // D
    document.getElementById("lag05").style.display = 'none';    // E
    //document.getElementById("lag06").style.display = 'none';    // F
    //document.getElementById("lag07").style.display = 'none';    // G
    document.getElementById("lag08").style.display = 'none';    // H
    document.getElementById("lag09").style.display = 'none';    // I
    document.getElementById("lag10").style.display = 'none';    // J
    document.getElementById("lag11").style.display = 'none';    // K
    document.getElementById("lag12").style.display = 'none';    // L
    document.getElementById("lag13").style.display = 'none';    // M
    document.getElementById("lag14").style.display = 'none';    // N
    document.getElementById("lag15").style.display = 'none';    // O
    //document.getElementById("lag16").style.display = 'none';    // P
    //document.getElementById("lag17").style.display = 'none';    // Q
    //document.getElementById("lag18").style.display = 'none';    // R
    document.getElementById("lag19").style.display = 'none';    // S
    //document.getElementById("lag20").style.display = 'none';    // T
    //document.getElementById("lag21").style.display = 'none';    // U
    //document.getElementById("lag22").style.display = 'none';    // V
    //document.getElementById("lag23").style.display = 'none';    // W
    //document.getElementById("lag24").style.display = 'none';    // X
    //document.getElementById("lag25").style.display = 'none';    // Y
    //document.getElementById("lag26").style.display = 'none';    // Z



    // Play Again Button hidden initially
    document.getElementById("playAgainButton").style.display = 'none';
    

    // Question
    document.getElementById("question").innerHTML = 'Which Artist performed the song Beat It?';
    


    // This function begins the game when 
    // the user presses a key on their keyboard
    document.onkeyup = function(userKeyStroke){
                
        // This determines which key the user pressed on their keyboard
        var userChoice = userKeyStroke.key;
        

        // Letters in the word
        if ((userChoice === "m") || (userChoice === "M")){
            var letterM = 'M';
            document.getElementById("letter01").innerHTML = letterM;
            console.log('user typed m');
            correctGuess01 = true;
            console.log(correctGuess01);
        }
    
        else if ((userChoice === "i") || (userChoice === "I")){
            var letterI = 'I';
            document.getElementById("letter02").innerHTML = letterI;
            console.log('user typed i');
            correctGuess02 = true;
            console.log(correctGuess02);
        }
    
        else if ((userChoice === "c") || (userChoice === "C")){
            var letterC = 'C';
            document.getElementById("letter03").innerHTML = letterC;
            document.getElementById("letter11").innerHTML = letterC;
            console.log('user typed c');
            correctGuess03 = true;
            correctGuess11 = true;
            console.log(correctGuess03);
            console.log(correctGuess11);
        }
    
        else if ((userChoice === "h") || (userChoice === "H")){
            var letterH = 'H';
            document.getElementById("letter04").innerHTML = letterH;
            console.log('user typed h');
            correctGuess04 = true;
            console.log(correctGuess04);
        }
    
        else if ((userChoice === "a") || (userChoice === "A")){
            var letterA = 'A';
            document.getElementById("letter05").innerHTML = letterA;
            document.getElementById("letter10").innerHTML = letterA;
            console.log('user typed a');
            correctGuess05 = true;
            correctGuess10 = true;
            console.log(correctGuess05);
            console.log(correctGuess10);
        } 
    
        else if ((userChoice === "e") || (userChoice === "E")){
            var letterE = 'E';
            document.getElementById("letter06").innerHTML = letterE;
            console.log('user typed e');
            correctGuess06 = true;
            console.log(correctGuess06);
        } 

        else if ((userChoice === "l") || (userChoice === "L")){
            var letterL = 'L';
            document.getElementById("letter07").innerHTML = letterL;
            console.log('user typed l');
            correctGuess07 = true;
            console.log(correctGuess07);
        } 

        //else if ((userChoice === "x") || (userChoice === "X")){
        //    var letterX = 'X';
        //    document.getElementById("letter08").innerHTML = letterX;
        //    console.log('user typed x');
        //    correctGuess08 = true;
        //    console.log(correctGuess08);
        //} 

        else if ((userChoice === "j") || (userChoice === "J")){
            var letterJ = 'J';
            document.getElementById("letter09").innerHTML = letterJ;
            console.log('user typed j');
            correctGuess09 = true;
            console.log(correctGuess09);
        } 

        else if ((userChoice === "k") || (userChoice === "K")){
            var letterK = 'K';
            document.getElementById("letter12").innerHTML = letterK;
            console.log('user typed k');
            correctGuess12 = true;
            console.log(correctGuess12);
        } 

        else if ((userChoice === "s") || (userChoice === "S")){
            var letterS = 'S';
            document.getElementById("letter13").innerHTML = letterS;
            console.log('user typed s');
            correctGuess13 = true;
            console.log(correctGuess13);
        } 

        else if ((userChoice === "o") || (userChoice === "O")){
            var letterO = 'O';
            document.getElementById("letter14").innerHTML = letterO;
            console.log('user typed o');
            correctGuess14 = true;
            console.log(correctGuess14);
        } 

        else if ((userChoice === "n") || (userChoice === "N")){
            var letterN = 'N';
            document.getElementById("letter15").innerHTML = letterN;
            console.log('user typed n');
            correctGuess15 = true;
            console.log(correctGuess15);
        } 


        // Letters not in the word
        else {
            guessesRemaining--;
            document.getElementById("userGuessRemain").innerHTML = guessesRemaining;
            console.log('user score goes down by 1 point');
            
            // Letters in the word are commented out
            //if ((userChoice === "a") || (userChoice === "A")){
            //var letterA = 'A';
            //document.getElementById("lag01").innerHTML = letterA;
            //}

            if ((userChoice === "b") || (userChoice === "B")){
            var letterB = 'B';
            document.getElementById("lag02").innerHTML = letterB;
            }

            //if ((userChoice === "c") || (userChoice === "C")){
            //var letterC = 'C';
            //document.getElementById("lag03").innerHTML = letterC;
            //}
            
            if ((userChoice === "d") || (userChoice === "D")){
            var letterD = 'D';
            document.getElementById("lag04").innerHTML = letterD;
            }

            //if ((userChoice === "e") || (userChoice === "E")){
            //var letterE = 'E';
            //document.getElementById("lag05").innerHTML = letterE;
            //}

            if ((userChoice === "f") || (userChoice === "F")){
            var letterF = 'F';
            document.getElementById("lag06").innerHTML = letterF;
            }

            if ((userChoice === "g") || (userChoice === "G")){
            var letterG = 'G';
            document.getElementById("lag07").innerHTML = letterG;
            }

            //if ((userChoice === "h") || (userChoice === "H")){
            //var letterH = 'H';
            //document.getElementById("lag08").innerHTML = letterH;
            //}

            //if ((userChoice === "i") || (userChoice === "I")){
            //var letterI = 'I';
            //document.getElementById("lag09").innerHTML = letterI;
            //}

            //if ((userChoice === "j") || (userChoice === "J")){
            //var letterJ = 'J';
            //document.getElementById("lag10").innerHTML = letterJ;
            //}

            //if ((userChoice === "k") || (userChoice === "K")){
            //var letterK = 'K';
            //document.getElementById("lag11").innerHTML = letterK;
            //}

            //if ((userChoice === "l") || (userChoice === "L")){
            //var letterL = 'L';
            //document.getElementById("lag12").innerHTML = letterL;
            //}

            //if ((userChoice === "m") || (userChoice === "M")){
            //var letterM = 'M';
            //document.getElementById("lag13").innerHTML = letterM;
            //}

            //if ((userChoice === "n") || (userChoice === "N")){
            //var letterN = 'N';
            //document.getElementById("lag14").innerHTML = letterN;
            //}

            //if ((userChoice === "o") || (userChoice === "O")){
            //var letterO = 'O';
            //document.getElementById("lag15").innerHTML = letterO;
            //}

            if ((userChoice === "p") || (userChoice === "P")){
            var letterP = 'P';
            document.getElementById("lag16").innerHTML = letterP;
            }

            if ((userChoice === "q") || (userChoice === "Q")){
            var letterQ = 'Q';
            document.getElementById("lag17").innerHTML = letterQ;
            }

            if ((userChoice === "r") || (userChoice === "R")){
            var letterR = 'R';
            document.getElementById("lag18").innerHTML = letterR;
            }

            //if ((userChoice === "s") || (userChoice === "S")){
            //var letterS = 'S';
            //document.getElementById("lag19").innerHTML = letterS;
            //}

            if ((userChoice === "t") || (userChoice === "T")){
            var letterT = 'T';
            document.getElementById("lag20").innerHTML = letterT;
            }

            if ((userChoice === "u") || (userChoice === "U")){
            var letterU = 'U';
            document.getElementById("lag21").innerHTML = letterU;
            }

            if ((userChoice === "v") || (userChoice === "V")){
            var letterV = 'V';
            document.getElementById("lag22").innerHTML = letterV;
            }

            if ((userChoice === "w") || (userChoice === "W")){
            var letterW = 'W';
            document.getElementById("lag23").innerHTML = letterW;
            }

            if ((userChoice === "x") || (userChoice === "X")){
            var letterX = 'X';
            document.getElementById("lag24").innerHTML = letterX;
            }

            if ((userChoice === "y") || (userChoice === "Y")){
            var letterY = 'Y';
            document.getElementById("lag25").innerHTML = letterY;
            }

            if ((userChoice === "z") || (userChoice === "Z")){
            var letterZ = 'Z';
            document.getElementById("lag26").innerHTML = letterZ;
            }
        }



        // If all correctly guessed letters occur, then 
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // You win! text and Play Again button appears.
        if (correctGuess01 && correctGuess02 && correctGuess03 && correctGuess04 && correctGuess05 && correctGuess06 && correctGuess07 && correctGuess09 && correctGuess10 && correctGuess11 && correctGuess12 && correctGuess13 && correctGuess14 && correctGuess15){
            correctGuessScore = true;
            if (correctGuessScore === true){
                document.getElementById("numGuessRemainText").style.display = 'none';
                document.getElementById("userGuessRemain").style.display = 'none';
        
                var winText = 'You Win!';
                document.getElementById("youWinText").innerHTML = winText;
                document.getElementById("playAgainButton").style.display = 'block';
            }
        }

        

        // If guesses remaining is zero, then
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // Correct Answer and Play Again button appears.
        if (guessesRemaining === 0){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';
    
            var correctAnswer = 'Correct answer is Michael Jackson';
            document.getElementById("correctAnswerText").innerHTML = correctAnswer;
            document.getElementById("playAgainButton").style.display = 'block';      
            }
        }
      
            
    
    // When the Play Again button appears and is clicked, then the browser window refreshes.
    function onClickReload() {
        location.reload();
    }
}

// GAME 05      Eddie Van Halen - Hot For Teacher
if (gamePick === "game05") {

    // Initial variables
    var correctGuess01 = false;
    console.log(correctGuess01);

    var correctGuess02 = false;
    console.log(correctGuess02);

    var correctGuess03 = false;
    console.log(correctGuess03);

    var correctGuess04 = false;
    console.log(correctGuess04);

    var correctGuess05 = false;
    console.log(correctGuess05);

    //var correctGuess06 = false;
    //console.log(correctGuess06);

    var correctGuess07 = false;
    console.log(correctGuess07);

    var correctGuess08 = false;
    console.log(correctGuess08);

    var correctGuess09 = false;
    console.log(correctGuess09);

    //var correctGuess10 = false;
    //console.log(correctGuess10);

    var correctGuess11 = false;
    console.log(correctGuess11);

    var correctGuess12 = false;
    console.log(correctGuess12);

    var correctGuess13 = false;
    console.log(correctGuess13);

    var correctGuess14 = false;
    console.log(correctGuess14);

    var correctGuess15 = false;
    console.log(correctGuess15);


    var correctGuessScore = false;

    
    var guessesRemaining = 9;
    


    // Correct Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (this game has a maximum of 15 letters available for the
    // correct word, however more can be just added on in the
    // html and javascript as necessary)
    // (ones that are necessary are commented out)
    //document.getElementById("letter01").style.display = 'none';
    //document.getElementById("letter02").style.display = 'none';
    //document.getElementById("letter03").style.display = 'none';
    //document.getElementById("letter04").style.display = 'none';
    //document.getElementById("letter05").style.display = 'none';
    document.getElementById("letter06").innerHTML = '--';
    var space = document.getElementById("letter06");
    space.style.opacity = "0";
    //document.getElementById("letter07").style.display = 'none';
    //document.getElementById("letter08").style.display = 'none';
    //document.getElementById("letter09").style.display = 'none';
    document.getElementById("letter10").innerHTML = '--';
    var space = document.getElementById("letter10");
    space.style.opacity = "0";
    //document.getElementById("letter11").style.display = 'none';
    //document.getElementById("letter12").style.display = 'none';
    //document.getElementById("letter13").style.display = 'none';
    //document.getElementById("letter14").style.display = 'none';
    //document.getElementById("letter15").style.display = 'none';
    document.getElementById("letter16").style.display = 'none';



        // Incorrect Letter placeholders that are not necessary 
    // for this game and therefore removed
    // (corresponding letters on the right)
    // (incorrect letters of the word are commented out)
    document.getElementById("lag01").style.display = 'none';    // A
    //document.getElementById("lag02").style.display = 'none';    // B
    //document.getElementById("lag03").style.display = 'none';    // C
    document.getElementById("lag04").style.display = 'none';    // D
    document.getElementById("lag05").style.display = 'none';    // E
    //document.getElementById("lag06").style.display = 'none';    // F
    //document.getElementById("lag07").style.display = 'none';    // G
    document.getElementById("lag08").style.display = 'none';    // H
    document.getElementById("lag09").style.display = 'none';    // I
    //document.getElementById("lag10").style.display = 'none';    // J
    //document.getElementById("lag11").style.display = 'none';    // K
    document.getElementById("lag12").style.display = 'none';    // L
    //document.getElementById("lag13").style.display = 'none';    // M
    document.getElementById("lag14").style.display = 'none';    // N
    //document.getElementById("lag15").style.display = 'none';    // O
    //document.getElementById("lag16").style.display = 'none';    // P
    //document.getElementById("lag17").style.display = 'none';    // Q
    //document.getElementById("lag18").style.display = 'none';    // R
    //document.getElementById("lag19").style.display = 'none';    // S
    //document.getElementById("lag20").style.display = 'none';    // T
    //document.getElementById("lag21").style.display = 'none';    // U
    document.getElementById("lag22").style.display = 'none';    // V
    //document.getElementById("lag23").style.display = 'none';    // W
    //document.getElementById("lag24").style.display = 'none';    // X
    //document.getElementById("lag25").style.display = 'none';    // Y
    //document.getElementById("lag26").style.display = 'none';    // Z



    // Play Again Button hidden initially
    document.getElementById("playAgainButton").style.display = 'none';
    

    // Question
    document.getElementById("question").innerHTML = 'Which Artist performed the song Hot For Teacher?';
    


    // This function begins the game when 
    // the user presses a key on their keyboard
    document.onkeyup = function(userKeyStroke){
                
        // This determines which key the user pressed on their keyboard
        var userChoice = userKeyStroke.key;
        

        // Letters in the word
        if ((userChoice === "e") || (userChoice === "E")){
            var letterE = 'E';
            document.getElementById("letter01").innerHTML = letterE;
            document.getElementById("letter05").innerHTML = letterE;
            document.getElementById("letter14").innerHTML = letterE;
            console.log('user typed e');
            correctGuess01 = true;
            correctGuess05 = true;
            correctGuess14 = true;
            console.log(correctGuess01);
            console.log(correctGuess05);
            console.log(correctGuess14);
        }
    
        else if ((userChoice === "d") || (userChoice === "D")){
            var letterD = 'D';
            document.getElementById("letter02").innerHTML = letterD;
            document.getElementById("letter03").innerHTML = letterD;
            console.log('user typed d');
            correctGuess02 = true;
            correctGuess03 = true;
            console.log(correctGuess02);
            console.log(correctGuess03);
        }
    
        else if ((userChoice === "i") || (userChoice === "I")){
            var letterI = 'I';
            document.getElementById("letter04").innerHTML = letterI;
            console.log('user typed i');
            correctGuess04 = true;
            console.log(correctGuess04);
        }

        //else if ((userChoice === "x") || (userChoice === "X")){
        //    var letterX = 'X';
        //    document.getElementById("letter06").innerHTML = letterX;
        //    console.log('user typed x');
        //    correctGuess06 = true;
        //    console.log(correctGuess06);
        //} 
    
        else if ((userChoice === "v") || (userChoice === "V")){
            var letterV = 'V';
            document.getElementById("letter07").innerHTML = letterV;
            console.log('user typed v');
            correctGuess07 = true;
            console.log(correctGuess07);
        }
    
        else if ((userChoice === "a") || (userChoice === "A")){
            var letterA = 'A';
            document.getElementById("letter08").innerHTML = letterA;
            document.getElementById("letter12").innerHTML = letterA;
            console.log('user typed a');
            correctGuess08 = true;
            correctGuess12 = true;
            console.log(correctGuess08);
            console.log(correctGuess12);
        } 
    
        else if ((userChoice === "n") || (userChoice === "N")){
            var letterN = 'N';
            document.getElementById("letter09").innerHTML = letterN;
            document.getElementById("letter15").innerHTML = letterN;
            console.log('user typed n');
            correctGuess09 = true;
            correctGuess15 = true;
            console.log(correctGuess09);
            console.log(correctGuess15);
        } 

        //else if ((userChoice === "x") || (userChoice === "X")){
        //    var letterX = 'X';
        //    document.getElementById("letter10").innerHTML = letterX;
        //    console.log('user typed x');
        //    correctGuess10 = true;
        //    console.log(correctGuess10);
        //} 

        else if ((userChoice === "h") || (userChoice === "H")){
            var letterH = 'H';
            document.getElementById("letter11").innerHTML = letterH;
            console.log('user typed h');
            correctGuess11 = true;
            console.log(correctGuess11);
        } 
     
        else if ((userChoice === "l") || (userChoice === "L")){
            var letterL = 'L';
            document.getElementById("letter13").innerHTML = letterL;
            console.log('user typed l');
            correctGuess13 = true;
            console.log(correctGuess13);
        } 


        // Letters not in the word
        else {
            guessesRemaining--;
            document.getElementById("userGuessRemain").innerHTML = guessesRemaining;
            console.log('user score goes down by 1 point');
            
            // Letters in the word are commented out
            //if ((userChoice === "a") || (userChoice === "A")){
            //var letterA = 'A';
            //document.getElementById("lag01").innerHTML = letterA;
            //}

            if ((userChoice === "b") || (userChoice === "B")){
            var letterB = 'B';
            document.getElementById("lag02").innerHTML = letterB;
            }

            if ((userChoice === "c") || (userChoice === "C")){
            var letterC = 'C';
            document.getElementById("lag03").innerHTML = letterC;
            }
            
            //if ((userChoice === "d") || (userChoice === "D")){
            //var letterD = 'D';
            //document.getElementById("lag04").innerHTML = letterD;
            //}

            //if ((userChoice === "e") || (userChoice === "E")){
            //var letterE = 'E';
            //document.getElementById("lag05").innerHTML = letterE;
            //}

            if ((userChoice === "f") || (userChoice === "F")){
            var letterF = 'F';
            document.getElementById("lag06").innerHTML = letterF;
            }

            if ((userChoice === "g") || (userChoice === "G")){
            var letterG = 'G';
            document.getElementById("lag07").innerHTML = letterG;
            }

            //if ((userChoice === "h") || (userChoice === "H")){
            //var letterH = 'H';
            //document.getElementById("lag08").innerHTML = letterH;
            //}

            //if ((userChoice === "i") || (userChoice === "I")){
            //var letterI = 'I';
            //document.getElementById("lag09").innerHTML = letterI;
            //}

            if ((userChoice === "j") || (userChoice === "J")){
            var letterJ = 'J';
            document.getElementById("lag10").innerHTML = letterJ;
            }

            if ((userChoice === "k") || (userChoice === "K")){
            var letterK = 'K';
            document.getElementById("lag11").innerHTML = letterK;
            }

            //if ((userChoice === "l") || (userChoice === "L")){
            //var letterL = 'L';
            //document.getElementById("lag12").innerHTML = letterL;
            //}

            if ((userChoice === "m") || (userChoice === "M")){
            var letterM = 'M';
            document.getElementById("lag13").innerHTML = letterM;
            }

            //if ((userChoice === "n") || (userChoice === "N")){
            //var letterN = 'N';
            //document.getElementById("lag14").innerHTML = letterN;
            //}

            if ((userChoice === "o") || (userChoice === "O")){
            var letterO = 'O';
            document.getElementById("lag15").innerHTML = letterO;
            }

            if ((userChoice === "p") || (userChoice === "P")){
            var letterP = 'P';
            document.getElementById("lag16").innerHTML = letterP;
            }

            if ((userChoice === "q") || (userChoice === "Q")){
            var letterQ = 'Q';
            document.getElementById("lag17").innerHTML = letterQ;
            }

            if ((userChoice === "r") || (userChoice === "R")){
            var letterR = 'R';
            document.getElementById("lag18").innerHTML = letterR;
            }

            if ((userChoice === "s") || (userChoice === "S")){
            var letterS = 'S';
            document.getElementById("lag19").innerHTML = letterS;
            }

            if ((userChoice === "t") || (userChoice === "T")){
            var letterT = 'T';
            document.getElementById("lag20").innerHTML = letterT;
            }

            if ((userChoice === "u") || (userChoice === "U")){
            var letterU = 'U';
            document.getElementById("lag21").innerHTML = letterU;
            }

            //if ((userChoice === "v") || (userChoice === "V")){
            //var letterV = 'V';
            //document.getElementById("lag22").innerHTML = letterV;
            //}

            if ((userChoice === "w") || (userChoice === "W")){
            var letterW = 'W';
            document.getElementById("lag23").innerHTML = letterW;
            }

            if ((userChoice === "x") || (userChoice === "X")){
            var letterX = 'X';
            document.getElementById("lag24").innerHTML = letterX;
            }

            if ((userChoice === "y") || (userChoice === "Y")){
            var letterY = 'Y';
            document.getElementById("lag25").innerHTML = letterY;
            }

            if ((userChoice === "z") || (userChoice === "Z")){
            var letterZ = 'Z';
            document.getElementById("lag26").innerHTML = letterZ;
            }
        }



        // If all correctly guessed letters occur, then 
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // You win! text and Play Again button appears.
        if (correctGuess01 && correctGuess02 && correctGuess03 && correctGuess04 && correctGuess05 && correctGuess07 && correctGuess08 && correctGuess09 && correctGuess11 && correctGuess12 && correctGuess13 && correctGuess14 && correctGuess15){
            correctGuessScore = true;
            if (correctGuessScore === true){
                document.getElementById("numGuessRemainText").style.display = 'none';
                document.getElementById("userGuessRemain").style.display = 'none';
        
                var winText = 'You Win!';
                document.getElementById("youWinText").innerHTML = winText;
                document.getElementById("playAgainButton").style.display = 'block';
            }
        }

        

        // If guesses remaining is zero, then
        // Number of guesses remaining text and user guesses remaining number disappears and 
        // Correct Answer and Play Again button appears.
        if (guessesRemaining === 0){
            document.getElementById("numGuessRemainText").style.display = 'none';
            document.getElementById("userGuessRemain").style.display = 'none';
    
            var correctAnswer = 'Correct answer is Eddie Van Halen';
            document.getElementById("correctAnswerText").innerHTML = correctAnswer;
            document.getElementById("playAgainButton").style.display = 'block';      
            }
        }
      
            
    
    // When the Play Again button appears and is clicked, then the browser window refreshes.
    function onClickReload() {
        location.reload();
    }
}



// This code will reload a page:
// window.location.reload();

// This code will load a different page:
// window.location.href = "http://google.com";