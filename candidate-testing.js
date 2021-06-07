const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters? ","(5 + 3)/2 * 10 = ? ","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ","What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your name: ");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

for(let i=0; i<questions.length ; i++){
  candidateAnswer = input.question(questions[i]);
  candidateAnswers.push(candidateAnswer);
}
//console.log(candidateAnswers);
  
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
  for(let i = 0; i < correctAnswers.length ; i++){  
    let myUpAnswer = candidateAnswers[i].toUpperCase();
    let upperAnswer = correctAnswers[i].toUpperCase();
    //console.log(myUpAnswer);
    //console.log(upperAnswer);
    console.log(questions[i]);
    if(myUpAnswer !== upperAnswer){
      console.log(`Your answer is ${candidateAnswers[i]} \nThe correct answer is ${correctAnswers[i]}.\n`);
    }else{ 
      console.log(`Your answer is ${candidateAnswers[i]} \nThe correct answer is ${correctAnswers[i]}.\n`);
      grade ++;
    }
  }
  grade = grade / correctAnswers.length * 100;
  //console.log(correctAnswers);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Hello " + candidateName + "!");
  askQuestion();
  let grade = gradeQuiz(this.candidateAnswers);
  console.log(`>>> Overall Grade: ${grade}% (${grade*correctAnswers.length/100} of 5 responses correct) <<<`);
  if(grade >= 4){
    console.log(">>> Status: PASS <<<");
  }else{
    console.log(">>> Status: FAILED <<<");
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};