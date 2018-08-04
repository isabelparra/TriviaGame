$(document).ready(function (){
$('#reset').hide();
// $('#nextButton').hide();
// $('#start').on('click', startGame);



// };
    //     $('#start').hide();

    // });
    // $(document).on('click', '.option', trivia.guessChecker);
    

// });


// start: function() {
//     if (!running) {
//         intervalId = setInterval(timer.count, 1000);
//         running = true;
//     }
// },
// next: function() {
//     clearInterval(intervalId);
//     running = false;
// }
// var converted = timer.timeConverter(timer.time);
// console.log(converted);


// },
// timeConverter: function(t) {
//     var minutes = Math.floor(t/60);
//     var seconds = t - (minutes * 60);
//     if (seconds < 0) {
//         seconds = "0" + seconds;
//     }
// }






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
    answer: "2",
     },
    {
    prompt: "What type of water is more dense?",
    choices: ["polar, cold water", "equator, hot water", "water close to the shore"],
    answer: "0"
    }];

// variable to track question
var counter = 0;
// score variables
var correct = 0;
var incorrect = 0;   
var unanswered = 0; 
// var current = questions.length;
var holder = [];


//var counter = questions.length;
var timer = 10;
// var intervalId;
var userGuess = [];

    // Holds setInterval that runs countdown
    var intervalId;
    // prevents clock from being sped up 
    var running = false;

// var pick;
// var questionNumber;
// var holder = [];
// var trivia = {
//     timer: 10,
//     running: false,
//     intervalId: '',

// reset: function() {
//     timer.time = 0
//     $("#time-left").text("00:10");
// },
// // $('#start').on('click', (trivia) {
    // start: function() {

    // for (var i = 0; i < questions.length; i++) {
    //     holder.push(questions[i]);
//     });
// }
     // start timer
    function runTimer(){
        if (!running) {
            intervalId = setInterval(decrement, 1000);
            running = true;
        }
    }

        // timer countdown
    function decrement() {
        timer --;
        $('#time-left').html("Time Remaining: " + timer + " seconds ");
        

//         // stop timer if it reaches 0
        if (timer === 0) {
            stopTimer();
            unanswered++;
            userGuess.length = 0;

            //record answer 
            var userSelect = $('#choices input:radio[name=choicesRadios]:checked').val();
            // .each(function() {
            //     // var idVal = $(this).attr("id");
                // alert($(''))
         
            userGuess.push(userSelect);
            console.log(userGuess);
            nextQ();
            // $('#results').html("<p>Time is up! The correct answer is: " + pick.questions[pick.answer] + "</p>");
    
        };
};

function resetTimer() {
    timer = 10;
    // runTimer();
    // $('#time-left').html
    // $("#time-left").text("00:10");
    $('#time-left').html("Time Remaining: " + timer + " seconds");
    
};

// function displayTimer() {
//     $('#time-left').html("Time Remaining: " + timer + " seconds");
// }
// // stop
function stopTimer() {
    // runnning = false;
    clearInterval(intervalId);
    // nextQ();
};

function startGame() {
    $('#start').on('click', function(event) {
        event.preventDefault();
// replace button 
$('#start').hide();
// startOver();
displayQ();
resetTimer();
$('#reset').show();
$('#scoreboard').append('<h2>Score</h2><br><p>Number correct:'+ correct + '<br> Number wrong:' + incorrect + '<br>Unanswered: ' + unanswered + '</p>');

  });
};

function submit() {
    $('#submit').on('click', function(e) {
        e.preventDefault();
        userGuess.length = 0;

        // record answer

        var userSelect = $('#choices input:radio[name=choicesRadios]:checked').val();
        // // .each(function() {
        // //     // var idVal = $(this).attr("id");
        //     // alert($(''))
     
        userGuess.push(userSelect);

        console.log(userGuess);
        nextQ();
        // stopTimer();

    });
};



// });
// });

//     time: 10, 
//     lap: 1,
// $('#time-left').text("00:10");

// }

// $('#reset').hide();

// function submit() {
//     $('#submit')
// }


    // var questions = options.length;
    // var holder = [];



//   });

//     // // display first question
//     // displayQuestion();
//     // }
// )}; 

    // show trivia game portion
    // $('#game').show();

    // $('#nextButton').show();
    // $('#reset').show();
         




    // clearInterval(intervalId);

    // $('#results').hide();

    // $('#choices').hide();

    // empty last results
    // $('#results').html('');

    // show timer
    // ('#timer').text(trivia.timer);
  

        


            
    // var response = window.prompt(questions[i].prompt);

    //     if(response == questions[i].answer) {
    //         score++;
    //         alert("Correct!");

    //     } else {
    //         alert ("Wrong!");
    //     }
    // };
    // alert ("you got " + score + "/" + questions.length);

    // }),
   

// };
// function firstQuestion() {

   
   
//     // $('#question').html(currentQuestion)
//     // var startContent = $('#content');
//     // startContent.empty();
//     // displayQ();
//     for (i = 0; i < questions.length; i++) {
// // // // //     $('#start').hide();
//     $('#question').append('<form id="' + i + '+ class="center-text"><p>Question ' + (i + 1) + ' of ' + questions.length + '</p><h3 class="question">' + questions[i].prompt + '</h3>' + radioButtons(questions[i].choices, i) + '<button type="submit" class="next">NEXT &#8594;</button></p></form>' );
//     }
//    console.log(questions[i]);

    // for (let j = 0; j < questions[i].answer.length; j++) {
    //     $('#question').append("<h3><input type='radio' name='question'" + i + "value=" + questions[i].answer[j]);
    // }

function createRadios() {
    var multipleChoice = $('#choices');
    multipleChoice.empty();
    // var userGuess = [];
    for (var i = 0; i < questions[counter].choices.length; i++) {
        multipleChoice.append('<label><input type="radio" name="choicesRadios" value="' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
};
};

function displayQ() {
    
    // clearQ();
    resetTimer();
    $('.question').html(questions[counter].prompt);

    createRadios();
    $('#submit').append('<button type="submit" class="btn btn-default">' + "Submit" + '</button>');
    runTimer();
    submit();
};

 function clearQ() {
    var submitDiv = $('#submit')
    submitDiv.empty();

     var results = $('#results');
     results.empty();

     
  stopTimer();

    //  var scoreboard = $('#sco')
 };



function checkQ() {

    clearQ();

    var correctAnswer = questions[counter].answer;
    // if($('input[name=choiceRadios]:checked').val() == questions[counter].answer) {
    //     correct++;
      
  if (userGuess[0] == questions[counter].answer) {
        $('#results').append('<h3> Congratulations! You chose the right answer! </h3>');

        correct++;
        console.log(correct);
        runTimer();
    }
        else if (userGuess[0] === undefined) {
    $('#results').append('<h3> Time is up! </h3><br><br> The correct answer was: ' + questions[counter].choices[correctAnswer] + '</h3>');
        unanswered++;
        runTimer();
    } else {
        $('#results').append('<h3> You chose the wrong answer.<br>The correct answer was: ' + questions[counter].choices[correctAnswer] + '</h3>');
        incorrect++;
        runTimer();
    };
    };


    function nextQ() {
      
        event.preventDefault();
        checkQ();
        counter++;
      
        // setTimeout(displayQ);
        // $('#submit').empty();
        if (counter === questions.length) {
            setTimeout(startOver, timer);
        } else {
            setTimeout(displayQ, timer);
        };


        // runTimer();
        // displayQ();
    
        // console.log('Next Question');
    
    };
//         console.log(userGuess);
//         console.log(answer);
//     };
// };


function reset() {
    counter = 0;
    correct = 0; 
    incorrect = 0;
    missed = 0;
    userGuess = [];
    resetTimer();
};

function startOver() {
  
    clearQ();
$('#reset').on('click', function(event) {
    event.preventDefault();
    reset();
    clearQ();
    startGame();
});
};
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


startGame();


});