// VARIABLES

// Holds setInterval that runs countdown
var intervalId;

// All variables pertaining to scores in an object
// var quiz = {
// right: 0,
// wrong: 0, 
// attempted: 0,
// timer: 10
// };

var right= 0;
var wrong= 0;
var attempted= 0;

// All quiz questions 
var questions = [
    {
    prompt: "The oceans cover _____ of the Earth's surface.",
    choices: ["60 percent", "70 percent", "90 percent"],
    answer: "1"
    },
     {
    prompt: "Which ocean is the largest?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "0"
    },
     {
    prompt: "Which ocean basin is the most geologically active?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "0"
    },
     {
    prompt: "How does water move around the world?",
    choices: ["Wind", "Gravity", "Both of the above"],
    answer: "2"
    },
     {
    prompt: "Ocean water moves: ",
    choices: ["From North to South", "From South to North", "In a circular pattern"],
    answer: "2"
    },
     {
    prompt: "What are thermohaline currents?",
    choices: ["cold water currents from the arctic", "warm water currents from Africa", "currents that move up and down in the ocean"],
    answer: "2"
     },
    {
    prompt: "What type of water is more dense?",
    choices: ["polar, cold water", "equator, hot water", "water close to the shore"],
    answer: "0"
    }];


// Variable to track question
var counter = 0;

var current;
//  var holder = [];

var index;
var userGuess = [];

// Sets timer counter to 10
var timer = 10;

// prevents clock from being sped up 
var running = false;

$('#reset').hide();
$('#next').hide();
$('#startButton').on('click', startGame);
$('#reset').on('click', reset);
$('#next').on('click', next);

function startGame() {
    $('#startButton').hide();
    displayQ();
    $('#reset').show();
    
    // runTimer();
    // for (i = 0; i < questions.length; i ++) {
    //     question.push(questions[i]);
        // $('.question' + i).append('<h2>' + questions[i].prompt + '</h2>');
    };
//     // $('#startButton').on('click', function(event) {
//     $('#startButton').hide();

//     // clearInterval(intervalId);
//     // intervalId = setInterval(decrement, 1000);
//     // // event.preventDefault();
//         // startOver();

//     // resetTimer();

//     $('#reset').show();
//     // $('#scoreboard').append('<h2>Score</h2><br><p>Number correct:'+ correct + '<br> Number wrong:' + incorrect + '<br>Unanswered: ' + unanswered + '</p>');
//         // });
// };


function displayQ() {
    // if (counter <= 7 ) {
    // $('#next').hide();
    resetTimer();
    $('#submit').append('<button type="submit" id="submit" class="btn btn-default">' + "Submit" + '</button>'); 

    index = Math.floor(Math.random()*questions.length);
    current = questions[index];
    runTimer();
    // for (i = 0; i < questions.length; i ++) {
    $('#question').html(current.prompt);
        // $('#results'+ i).append(questions[i].prompt)

        for (var j = 0; j < current.choices.length; j++) {
        // createRadios();
            var userChoice = $('<div>');
            userChoice.addClass('choices');
            userChoice.html(current.choices[j]);
            userChoice.attr('data-guessvalue', j);
         $('#choices').append('<label><input type="radio" name="choicesRadios" value="' + [j] + '"><div>' + current.choices[j] + '</div></input></label>');
         
    // } else {
    //     alert('game over');
    // }
        // };
         }; 
         
        };
    

// Function to start timer    
function runTimer(){
    $('#time-left').html("Time Remaining: " + timer + " seconds");
    intervalId = setInterval(decrement, 1000);
    
    
    // if (!running) {
    // clearInterval(intervalId);
    
// clearInterval(intervalId);
// intervalId = setInterval(decrement, 1000);
    // running = true;
    // };
        };

    // timer countdown

function decrement() {
    timer--;

    $('#time-left').html("Time Remaining: " + timer + " seconds");
    
    // stop timer if it reaches 0
    if (timer === 0) {
        stop();
        alert('Time Up!');
        // checkQ();
        resetTimer();
        submit();
        next();
        // userGuess.length = 0;

        //record answer 
        // var userSelect = $('#choices input:radio[name=choicesRadios]:checked').val();
        // // .each(function() {
        // //     // var idVal = $(this).attr("id");
      
        // userGuess.push(userSelect);
        // console.log(userGuess);
        // nextQ();
            // $('#results').html("<p>Time is up! The correct answer is: " + pick.questions[pick.answer] + "</p>");
    };
};

function stop() {
    // runnning = false;
    clearInterval(intervalId);  
};

// function displayTimer() {
//     $('#time-left').html("Time Remaining: " + timer + " seconds");
// }
// // stop


function resetTimer() {
clearInterval(intervalId);
timer = 10;
// runTimer();
};


$('#submit').on('click', submit);


function submit() {
    var userGuess = parseInt($(this).attr('data-guessvalue'));
    // var buttonRow = radios.charAt(8).trim();
    // var userGuess = ('input:checked').val().trim();
    // var userGuess = $('#choices input:radio[name=choicesRadios]:checked').val();
    console.log({userGuess});
    if (userGuess === current.answer) {
        stop();
        right++;
        $('#results').html('Correct!');
        $('#next').show(); 
        $('#submit').hide();
    } else {
        stop();
        wrong++;
        userGuess='';
       $('#next').show(); 
       $('#submit').hide();
        $('#results').html('The correct answer is ' + current.choices[current.answer]);  
    }
   
};

function next() {
    clearQ();
    displayQ();
    $('#submit').show();
    $('#next').hide();
   
    counter++; 
    
    
 };


function reset() {

    counter = 0;
    right = 0; 
    wrong = 0;
    attempted  = 0;
    userGuess = [];
    // resetTimer();
    clearQ();
    startGame();
    // $('#quizContainer').empty();
};

// function startOver() {
  
// //     clearQ();
// $('#reset').on('click', function(event) {
//     event.preventDefault();
//     reset();
//     clearQ();
//     startOver();
//     startGame();
//     $('#startButton').show();
    
   
// });
// };

function clearQ() {
    
    var questionsDiv = $('#question');
    questionsDiv.empty();

    var choicesDiv = $('#choices');
    choicesDiv.empty();

    var submitDiv = $('#submit')
    submitDiv.empty();

     var results = $('#results');
     results.empty();
};

