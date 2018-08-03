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
    answer: "70 percent",
    },
     {
    prompt: "Which ocean is the largest?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "1",
    },
     {
    prompt: "Which ocean basin is the most geologically active?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean"],
    answer: "1",
    },
     {
    prompt: "How does water move around the world?",
    choices: ["Wind", "Gravity", "Both of the above"],
    answer: "3",
    },
     {
    prompt: "Ocean water moves: ",
    choices: ["From North to South", "From South to North", "In a circular pattern"],
    answer: "3",
    },
     {
    prompt: "What are thermohaline currents?",
    choices: ["cold water currents from the arctic", "warm water currents from Africa", "currents that move up and down in the ocean"],
    answer: "3",
     },
    {
    prompt: "What type of water is more dense?",
    choices: ["polar, cold water", "equator, hot water", "water close to the shore"],
    answer: "1",
    }];
// variable to track question
var counter = questions.length;
// score variables
var correct = 0;
var incorrect = 0;   
var missed = 0; 
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

var pick;
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

    //     if (!running) {
    //         intervalId = setInterval(decrement, 1000);
    //         running = true;
    //     }
    // }
    //   function startGame() {
        $('#start').on('click', function() {
// //     // remove start button
$('#start').hide();
reset();
displayQ();
$('#reset').show();



      });
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
        $('#time-left').html("<h3>Time Remaining: " + timer + " seconds </h3>");
        

//         // stop timer if it reaches 0
        if (timer === 0) {
            stopTimer();
            counter++;
            userGuess.length = 0;
            $('#results').html("<p>Time is up! The correct answer is: " + pick.questions[pick.answer] + "</p>");
    
        }
}

function resetTimer() {
    timer = 10;
    // $('#time-left').html
}
// // stop
function stopTimer() {
    runnning = false;
    clearInterval(intervalId);
}



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
    function submit() {
        $('#submit').on('click', function(e) {
            e.preventDefault();
            userGuess.length = 0;
    
            var userSelect = $('input[type="radio"]:checked').each(function() {
                var idVal = $(this).attr("id");
                alert($(''))
            })
            userGuess.push(userSelect);
            console.log(userGuess);
            nextQ();
    
        });
    };
function createRadios() {
    var multipleChoice = $('.choices');
    multipleChoice.empty();
    for (var i = 0; i < questions[counter].choices.length; i++) {
        multipleChoice.append('<label><input type="radio" name="choices" value="' + [i] + '"><div>' + questions[counter].choices[i] + '</div></input><br></label>');
};
};
function displayQ() {
    // clearQuestion();
    resetTimer();
    $('.question').html(questions[counter].prompt);
    createRadios();
    $('.submit').append('<button type="submit" class="btn btn-default" id="submit">' + "Submit" + '</button>');
    runTimer();
    submit();
};



function nextQ() {
    counter++;
    setTimeout(displayQ);

};

function reset() {
    counter = 0;
    correct = 0; 
    incorrect = 0;
    missed = 0;
    userGuess = [];
    resetTimer();
}
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





});