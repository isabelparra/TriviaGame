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
right= 0;
wrong= 0;
attempted= 0;

// All quiz questions 
var questions = [
    {
    prompt: "The oceans cover _____ of the Earth's surface.",
    choices: ["60 percent", "70 percent", "90 percent"],
    answer: 1
    },
     {
    prompt: "Which ocean is the largest?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: 0
    },
     {
    prompt: "Which ocean basin is the most geologically active?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: 0
    },
     {
    prompt: "How does water move around the world?",
    choices: ["Wind", "Gravity", "Both of the above"],
    answer: 2
    },
     {
    prompt: "Ocean water moves: ",
    choices: ["From North to South", "From South to North", "In a circular pattern"],
    answer: 2
    },
     {
    prompt: "What are thermohaline currents?",
    choices: ["cold water currents from the arctic", "warm water currents from Africa", "currents that move up and down in the ocean"],
    answer: 2
     },
    {
    prompt: "What type of water is more dense?",
    choices: ["polar, cold water", "equator, hot water", "water close to the shore"],
    answer: 0
    }];



var answers = [];

// var current = 0;
var current ;
//  var holder = [];

 var question = [];
var counter = 0;
var index;
var userGuess = [];

// Sets timer counter to 10
var timer = 10;



// // Variable to track question
// var counter = 0;

// prevents clock from being sped up 
// var running = false;

$('#reset').hide();

$('#startButton').on('click', startGame);

// $('#reset').on('click', timer.reset);

function startGame() {
    $('#startButton').hide();
    displayQ();
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
    
    $('#reset').show(); 

    if (counter <= 7 ) {
    runTimer();
    $('#submit').append('<button type="submit" id="submit" class="btn btn-default">' + "Submit" + '</button>');
  
    // resetTimer();
 
    index = Math.floor(Math.random()*questions.length);
    current = questions[index];

    // for (i = 0; i < questions.length; i ++) {
    $('#question').html('<h2>' + current.prompt + '</h2>');
        // $('#results'+ i).append(questions[i].prompt)
        // answers = questions[i].choices;

        for (var j = 0; j < current.choices.length; j++) {
        // createRadios();
        
            // $('<input id="answers" class="radio" type="radio" ' + i + '"value="' + j + '">' + questions[i].choices[j] + '</input>').appendTo('#question' + i);
            var userChoice = $('<div>');
            
            userChoice.addClass('choices');
            userChoice.html(current.choices[j]);
            userChoice.attr('data-guessvalue', j);
         $('#choices').append('<label><input type="radio" name="choicesRadios" value="' + [j] + '"><div>' + current.choices[j] + '</div></input><br></label>');
            //  '<label><input type="radio" name="choices" value="' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
        
            //  '<input type="radio" name="choicesRadios"' + i + '" value="' + [j] + '">' + questions[i].choices[j] + '</input>');
// userChoice.append('<label><input type="radio" class="answerChoice" name="choicesRadios" value="' + [j] + '"><div>' + questions[i].choices[j] + '</div></input><br></label>');
      

  
       // for (var i = 0; i < answers.length; i++) {

        //     $('#results' + i).html('<h3>' + answers[i] + '</h3>' );
        // show('.choices');
        //     for (var i = 0; i < answers.length; i++) {
        // $('#results' + i).html('<h3>' + answers[i] + '</h3>' );
//     for (var i = 0; i < .length; i++) {
//         var multipleChoice = $('<div>');
//         multipleChoice.addClass('answerChoices');
//         multipleChoice.html(answers[i]);
//         multipleChoice.attr('data-guess', i);
//         multipleChoice.append('<label><input type="radio" name="choicesRadios"' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
// //         // multipleChoice.append('<label><input type="radio" name="choicesRadios" value="' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
//     }; 
    
    
    // } else {
    //     alert('game over');
    // }
            };
         }; 
        };
    
      
    // index = Math.floor(Math.random()*questions.length);
    // question = questions[index];

//     $('.question').html(question.prompt);
//     createRadios();
//     $('#submit').append('<button type="submit" class="btn btn-default">' + "Submit" + '</button>');
//     $('#reset').show();
// };

// Function to start timer    
function runTimer(){
    $('#time-left').html("Time Remaining: " + timer + " seconds ");
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

    $('#time-left').html("Time Remaining: " + timer + " seconds ");
    
    // stop timer if it reaches 0
    if (timer === 0) {
        stop();
        alert('Time Up!');
        // checkQ();
        resetTimer();
        submit();
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
runTimer();
    // displayQ();
};


$('#submit').on('click', submit);

function submit() {
    userGuess = parseInt($(this).attr('data-guessvalue'));
    if (userGuess === current.answer) {
        stop();
        right++;
        userGuess= '';
        $('#results').html('<p>Correct!</p>');
    } else {
        stop();
        wrong++;
        userGuess='';
        $('#results').html('<p>Wrong!</p>');
    }

//     // $('#submit').on('click', function(e) {
//         // e.preventDefault();
//         // userGuess.length = 0;
        
//         // record answer
//   var userSelect = $('#choices input:radio[name=choicesRadios]:checked').val();
// //         // .each(function() {
// //       // var idVal = $(this).attr("id");
// //         // alert($(''))
//          userGuess.push(userSelect);
//         console.log(userGuess);
// //         resetTimer();
//    displayQ();
        

   
};



// function createRadios() {
//     // var multipleChoice = $('#choices');
//     //    multipleChoice.empty();

// //         // var userGuess = [];
//     for (var j = 0; j < questions[counter].choices.length; j++) {
//         var multipleChoice = $('<div>');
//         multipleChoice.addClass('answerChoices');
//         multipleChoice.html(questions[counter].choices[i]);
//         multipleChoice.attr('data-guess', i);
//         multipleChoice.append('<label><input type="radio" name="choicesRadios"' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
// // //         // multipleChoice.append('<label><input type="radio" name="choicesRadios" value="' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
//     };
// //     // answers = questions[counter].choices;
// //     // var correctAnswer = questions[counter].answer;
// // //      for (var i = 0; i < answers.length; i++) {

// // //         $('#results' + i).html('<h3>' + answers[i] + '</h3>' );
// // // // //         multipleChoice.attr('data-guess', i);
// // // // //         multipleChoice.append('<label><input type="radio" name="choicesRadios"' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
// // // // //         // multipleChoice.append('<label><input type="radio" name="choicesRadios" value="' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
//     };
// };    
    
    // multipleChoice.empty();
    // var userGuess = [];
//     for (var i = 0; i < question.choices.length; i++) {
//         var multipleChoice = $('<div>');
//         multipleChoice.addClass('answerChoices');
//         multipleChoice.html(question.choices[i]);
//         multipleChoice.attr('data-guess', i);
//         multipleChoice.append('<label><input type="radio" name="choicesRadios"' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
//         // multipleChoice.append('<label><input type="radio" name="choicesRadios" value="' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
//     };
// };



// function checkQ() {

//     // clearQ();

//     var correctAnswer = questions[counter].answer;

// // $.each($('input[name=choiceRadios]:checked'), function() {
// //        if ($(this).val() === questions[0].answer) {
// //            correct++;
// //        } else { }
// //     // .val() == questions[counter].answer) {
// //         incorrect++;
      
//   if (userGuess[0] == questions[counter].answer) {
//         $('#results').append('<h3> Congratulations! You chose the right answer! </h3>');

//         correct++;
//         // userGuess='';
//         console.log(correct);
//         runTimer();
//     }
//         else if (userGuess[0] === undefined) {
//     $('#results').append('<h3> Time is up! </h3><br><br> The correct answer was: ' + questions[counter].choices[correctAnswer] + '</h3>');
//         unanswered++;
//         runTimer();
//     } else {
//         $('#results').append('<h3> You chose the wrong answer.<br>The correct answer was: ' + questions[counter].choices[correctAnswer] + '</h3>');
//         incorrect++;
//         // userGuess='';
//         runTimer();
//     };
//     };


// function nextQ() {
//     counter++;  

//     // checkQ();
// //         // setTimeout(displayQ);
// //         // $('#submit').empty();
// //     // if (counter === questions.length) {
// //     // setTimeout(startOver, timer);
// //     // } else {
// //     // setTimeout(displayQ, timer);
// //     // };

       
//         displayQ();
//         runTimer();
// //         // console.log('Next Question');
// //     };
// //         console.log(userGuess);
// //         console.log(answer);
// //     };
// };


// function reset() {
//     counter = 0;
//     correct = 0; 
//     incorrect = 0;
//     missed = 0;
//     userGuess = [];
//     resetTimer();
//     // $('#quizContainer').empty();
// };

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
    
    var questionsDiv = $('.question');
    questionsDiv.empty();

    var choicesDiv = $('#choices');
    choicesDiv.empty();

    var submitDiv = $('#submit')
    submitDiv.empty();

     var results = $('#results');
     results.empty();

 

};

//   resetTimer();

//     //  var scoreboard = $('#sco')
//  };
// function radioButtons(ary, qNum) {
//     var answers = [];
//     for (j = 0; j < ary.length; j++) {
//         answers.push('<label><input type="radio" name="' + qNum + '" value="' + ary[i] + '">' + ary[i] + '</label>');
//     }
//     return answers.join(" ");
// }
// $('#question').append("<button id='submit'>Done</button>");

//         var a = $('<button>');
//     a.addClass('btn-answer');
//     a.data('name', questions[i].answer[j]);
//     a.text(questions[i].answer[j]);
//  $('#choices').append(a);
//     }
//     };
        // "<form id=" + i + 'class="center-text"><p>Question ' + (i + 1) + ' of ' + questions.length + '</p><h3 class="questions">' + questions[i].prompt + '</h3>' + '<button type="submit" class="next">NEXT</button></p></form>' );
    // $('.results').html('');
//     // runTimer();
 
    // if (correct + incorrect >= gameLength) {
    //     gameOver();
    // } else {
    // questionNumber = Math.floor(Math.random() * questions.length);
    // pick = questions[questionNumber];
    // $('#question').html("<h2>"+ pick.prompt + "</h2>");
      
//     for (var i = 0; i < pick.choices.length; i++) {
//         var userChoice = $("<div>");
//         userChoice.addClass("answer-choice");
//         userChoice.html(pick.choices[i]);

//         userChoice.attr("data-guessvalue", i);
//         $("#results").append(userChoice);
//     }
// };
// }
    // resetTimer();
    // $('#results').empty().hide();


// };

