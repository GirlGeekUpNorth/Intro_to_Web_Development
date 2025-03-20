// assign "0" to the "score" variable
let score = 0

//Define function:
function checkAnswers(){
    // assign "0" to the "score" variable
    let score = 0
    let result = 0
    //assign the quiz elements to the quiz variable:
    let quiz = document.forms.quiz.elements;
    //assign the answer to the question to the answer1 variable:
    answer1 = quiz.colour.value;
    // Check the answer to the first question:
    if (answer1 == "pink"){
      score = score + 1;
    }
    else if (answer1 == "yellow"){
        score = score + 2;
      }
    else if (answer1 == "green"){
      score = score + 3;
    }
    else {
        score = score + 4;
      }

    answer2 = quiz.animal.value;
    if (answer2 == "red-panda"){
        score = score + 1;
      }
    if (answer2 == "giraffe"){
          score = score + 2;
        }
    if (answer2 == "jaguar"){
        score = score + 3;
      }
    if (answer2 == "gorilla"){
          score = score + 4;
      }

    answer3 = quiz.music.value;
    if (answer3 == "pop"){
        score = score + 1;
      }
    if (answer3 == "hip-hop"){
          score = score + 2;
        }
    if (answer3 == "rock"){
        score = score + 3;
      }
    if (answer3 == "metal"){
          score = score + 4;
      }

    answer4 = quiz.hobby.value;
    if (answer4 == "read"){
        score = score + 1;
      }
    if (answer4 == "music"){
          score = score + 2;
        }
    if (answer4 == "walk"){
        score = score + 3;
      }
    if (answer4 == "exercise"){
          score = score + 4;
      }

    if (score < 6){
        result = "HTML"
    }
    else if (score < 10){
        result = "Python"
    }
    else if (score < 13){
        result = "JavaScript"
    }
    else {
        result = "Java"
    }
    //display the score variable in an alert:
    alert ('The programming language you should learn is ' + result);
  }



