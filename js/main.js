$(document).ready(function(){
//~~~ G A M E  L O G I C ~~~//

// ---------------------Start variables & functions--------------------- //

//Creating required variables//
var copycatAnswer = "";
var playerInput = "";
var difficultyLevel = 5; 
var currentPlayerScore = 0;
var timeLeft = difficultyLevel;
var gameRunning = true;
var timer;
var count = 0;


//Saves player 1's score and dislays it to player 2 for comparison
var saveScore = function(){
	if(currentPlayer == 1){
		player1Score += currentPlayerScore
		$("#player1FinalScore").text("YOUR SCORE TO BEAT: " + player1Score);
	}
	else{
		player2Score += currentPlayerScore;
	}
}


//Increases difficulty
var increaseDifficulty = function(){
	difficultyLevel ++;
}


//Create the open-ended math question
var generateOpenEnded = function(){
	var oefirstNumber = Math.floor(Math.random() * Math.pow(difficultyLevel, 3) + 500);
	var oesecondNumber = Math.floor(Math.random() * Math.pow(difficultyLevel, 3) + 1);
	console.log(oefirstNumber);
	console.log(oesecondNumber);
	var oethirdNumber = oefirstNumber + oesecondNumber;
	var oefourthNumber = 0;
	var oegenerateFunction = Math.floor(Math.random() * 3); // makes 3 situations, if oegenfunc = 0, 1, 2

	if(oegenerateFunction === 0){
		//for positive
		var oegenerateFunctionNested = Math.floor(Math.random() * 3);
		if(oegenerateFunctionNested == 0){
			oefourthNumber = oethirdNumber + 10;
			$("#questionBoxText").text("Is " + oefirstNumber + " plus " + oesecondNumber + " equal to " + oefourthNumber + "?");
			copycatAnswer = "no";
		}
		else if(oegenerateFunctionNested == 1){
			oefourthNumber = oethirdNumber + 100;
			$("#questionBoxText").text("Is " + oefirstNumber + " plus " + oesecondNumber + " equal to " + oefourthNumber + "?");	
			copycatAnswer = "no";
		}
		else if(oegenerateFunctionNested == 2){
			oefourthNumber = oethirdNumber + 1000;	
			$("#questionBoxText").text("Is " + oefirstNumber + " plus " + oesecondNumber + " equal to " + oefourthNumber + "?");
			copycatAnswer = "no";
		}
	}
	else if(oegenerateFunction === 1){
		//for negative
		var oegenerateFunctionNested = Math.floor(Math.random() * 3);
		if(oegenerateFunctionNested == 0){
			oefourthNumber = oethirdNumber - 10;
			$("#questionBoxText").text("Is " + oefirstNumber + " minus " + oesecondNumber + " equal to " + oefourthNumber + "?");
			copycatAnswer = "no";
		}
		else if(oegenerateFunctionNested == 1){
			oefourthNumber = oethirdNumber - 100;
			$("#questionBoxText").text("Is " + oefirstNumber + " minus " + oesecondNumber + " equal to " + oefourthNumber + "?");	
			copycatAnswer = "no";
		}
		else if(oegenerateFunctionNested == 2){
			oefourthNumber = oethirdNumber - 1000;	
			$("#questionBoxText").text("Is " + oefirstNumber + " minus " + oesecondNumber + " equal to " + oefourthNumber + "?");
			copycatAnswer = "no";
		}
	}
	else {
		oefourthNumber = oethirdNumber;
		$("#questionBoxText").text("Is " + oefirstNumber + " minus " + oesecondNumber + " equal to " + oefourthNumber + "?");
		copycatAnswer = "yes";
	}
}


//Creates the 'math' question
var generateMathEquation = function(){
	//To generate the numbers used in the question
	var firstNumber = Math.floor(Math.random() * Math.pow(difficultyLevel, 3) + 500);
	var secondNumber = Math.floor(Math.random() * Math.pow(difficultyLevel, 3) + 1);
	var answerNumber = 0;

	//To decide if it's plus or minus
	var generateFunction = Math.floor(Math.random() * 2);
	if(generateFunction === 0){
		answerNumber = firstNumber + secondNumber;
		$("#questionBoxText").text(firstNumber + " + " + secondNumber + " = ?");
		console.log(answerNumber);
	}
	else{
		answerNumber = firstNumber - secondNumber;
		$("#questionBoxText").text(firstNumber + " - " + secondNumber + " = ?");
		console.log(answerNumber);
	}
	copycatAnswer = answerNumber;
}


//Create the 'string' question, there are no capital 'i's
var generateString = function() {
  var answer = "";
  var letters = "ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  for (var i = 0; i < (difficultyLevel + 1); i++)
	answer += letters.charAt(Math.floor(Math.random() * letters.length));
	$("#questionBoxText").text("Type '" + answer + "'");
	copycatAnswer = answer;
}


//Generates a problem for the player
var generateNewProb = function(){
	if(gameRunning == true){
		var questionType = Math.floor(Math.random() * 5); // This returns a number from 0 - 5 (inclusive)
		$("#countDownTimer").text(timeLeft + "s remaining");
	
			if(questionType === 0 || questionType === 1){
				generateMathEquation();
			}
			else if (questionType === 2 || questionType === 3){
				generateString();
			}
			else{
				generateOpenEnded();
			}
	}
	else{
		//if game is NOT running, put click on new game to start in questionbox text
		$("#questionBoxText").text("Click on New Game to start!");
	}
}


//Shows hidden divs for players to type in
var allowInput = function(){
	$("#timerDiv").show();
	$("#curPlayerNScore").show(200);
	$("#playerInputForm").show(200);
}


//Runs a function that has an interval of 1second (for the timer)
var runTimer = function(){
	timeLeft = difficultyLevel + 2; 
	timer = setInterval(function(){
		timeLeft--;
		$("#countDownTimer").text(timeLeft + "s remaining");
		if(timeLeft <= 0){
			timerTimesOut();
		}
	}, 1000);
}


//Stops the timer
var stopTimer = function(){
	clearInterval(timer);
}


//Compares player 1 & 2's scores
var checkScore = function(){
	$("#timerDiv").hide();
	if(player1Score > player2Score){
		$("#scoreToBeatDiv").hide(200);
		$("#playerHalf").hide(200);		
		$("#questionBoxText").text("Player 1 has won!");

	} else if(player1Score < player2Score){
		$("#scoreToBeatDiv").hide(200);
		$("#playerHalf").hide(200);
		$("#questionBoxText").text("Player 2 has won!");
	}
	else if(player1Score == player2Score){
		$("#scoreToBeatDiv").hide(200);
		$("#playerHalf").hide(200);
		$("#questionBoxText").text("It's a tie! Well played.");
	}
}

//Runs a new game
var newGame = function(){
	$("#countDownTimer").hide();
	gameRunning = true;
	$("#questionBoxText").text("Get ready Player 1!");
	setTimeout(function(){
		stopTimer();
		count++;
		currentPlayer = 1;
		player1Score = 0;
		player2Score = 0;
		currentPlayerScore = 0;
		difficultyLevel = 5;
		timeLeft = difficultyLevel;
		runTimer();
		$("#playerHalf").show(200);
		$("#countDownTimer").show();
		$("#playerInputBox").val("");
		$("#answerBoxText").text("");
		$("#displayCurrentScore").text("CURRENT SCORE: " + currentPlayerScore);
		$("#displayCurrentPlayer").text("PLAYER: 1");
		if(count == 1){
			generateNewProb();
		}
		allowInput();
	}, 2000);
	count = 0;
}


//Resets settings for player 2's turn
var resetGame = function(){
	stopTimer();
	$("#countDownTimer").hide();
	difficultyLevel = 5;
	currentPlayer = 2;
	currentPlayerScore = 0;
	$("#playerHalf").hide();
	$("#questionBoxText").text("Get ready Player 2!");
	setTimeout(function(){
		$("#playerHalf").show(200);
		$("#countDownTimer").show();
		runTimer();
		$("#scoreToBeatDiv").show(200);
		$("#displayCurrentScore").text("CURRENT SCORE: " + currentPlayerScore);
		$("#displayCurrentPlayer").text("PLAYER: 2");
		generateNewProb();
	}, 2000);
}


var timerTimesOut = function(){
	if(currentPlayer == 1){
		saveScore();
		console.log("It is now player 2's turn");
		resetGame();
	} 
	else if(currentPlayer == 2){
		saveScore();
		checkScore();
	}
}


// ---------------------End of variables & functions, start of logic---------------------//

$("#newGameButton").click(function(e){
	e.preventDefault();
	newGame();
});


$("#playerInputForm").on("submit", function(e){
	e.preventDefault();
	$("#answerBox").show(200);
	var playerInputArray = $("#playerInputForm").serializeArray();
	playerInput = playerInputArray[0].value;
	$("#playerInputBox").val("");
	$("#answerBoxText").text(playerInput); // appends into cool looking box

	if(playerInput == copycatAnswer){
		currentPlayerScore ++
		$("#displayCurrentScore").text("CURRENT SCORE: " + currentPlayerScore);
		increaseDifficulty();
		stopTimer();
		runTimer();
		generateNewProb(); // 
	} 
	else if(currentPlayer == 1){
		saveScore();
		console.log("It is now player 2's turn");
		resetGame();
	} 
	else if(currentPlayer == 2){
		saveScore();
		checkScore();
	}
});


}); //end jQuery