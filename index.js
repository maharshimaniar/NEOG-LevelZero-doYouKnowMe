var readLineSync = require('readline-sync');
var chalk = require('chalk');

var name = readLineSync.question("Enter your name : ");
console.log("Welcome " + name + " to 'Do you know Maharshi?'");
console.log("-----------------------------------");
console.log(chalk.bgYellowBright("RULES : "));
console.log(chalk.bgYellowBright("~Every correct answer gives 1 point."));
console.log(chalk.bgYellowBright("~Consequetive 2 correct answer promotes you to Level 2."));
console.log(chalk.bgYellowBright("~Consequetive 4 correct answer promotes you to Level 3."));
console.log(chalk.bgYellowBright("~There are total 5 questions and 3 levels in this game."));
console.log(chalk.bgBlueBright("ALL THE BEST!"));
console.log("-----------------------------------");
var score = 0;
var level = 1;
var trueCount = 0;
var questionCount = 0;
highScores = [{ name: "Maharshi", score: 5 ,level : 3}, { name: "Nirav", score: 4 ,level : 2}];

questions = [{
  question: "I live in _______? ",
  answer: "rajkot"
},{
  question: "What is the name of my Graduating University? ",answer: "nmims"
},{
  question: "Which is my Favourite Bike? ",
  answer: "bullet"
},{
  question: "What is my Favourite Food?? ",
  answer: "dosa"
},{
  question: "Where am I working Currently? ",
  answer: "zs"
}];

function levelCheck(trueCount){
  if (trueCount===4){
    level=3;
    console.log(chalk.greenBright("Yay! Level Upgraded."));
  }
  else if (trueCount===2){
    level=2;
    console.log(chalk.greenBright("Yay! Level Upgraded."));
  }
}

function play(question, answer) {
  questionCount ++;
  console.log(chalk.yellow("Level : "+level+"/3")+"          "+chalk.blue("Question : "+questionCount+"/5")+"          "+chalk.cyanBright("Streak : "+trueCount));
  userAnswer = readLineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(chalk.green("Correct!"));
    score += 1;
    trueCount +=1;
    levelCheck(trueCount);
  }
  else {
    console.log(chalk.red("Wrong!"));
    trueCount=0;
  }
  console.log("Score : ", score);
  console.log("-----------------------------------");
}

function highScorePrint(rank, name, highScore,level) {
  console.log(rank, " ", name, " : ", highScore," : ",level);
}
function highScoreCheck(name, highScore) {
  if (score > highScore) {
    console.log("Congratulations! You have broken ", name, "'s Highscore.");
  }
  else if (score === highScore) {
    console.log("Congratulations! You have leveled ", name, "'s Highscore.");
  }
  else {
    console.log("You didn't brake Highscore. Better luck Next Time...");
  }
  return true;
}

for (var i = 0; i < questions.length; i++) {
  play(questions[i].question, questions[i].answer);
}
if(score<0){
  score = 0;
}
console.log(chalk.magenta("Final Score : ", score));
console.log("");
console.log("Highscores");
console.log("No     Name     Score     Level")
console.log("-----------------------------------");
for (var i = 0; i < highScores.length; i++) {
  highScorePrint(i + 1, highScores[i].name, highScores[i].score,highScores[i].level);
}

for (var i = 0; i < highScores.length; i++) {
  var flag = highScoreCheck(highScores[i].name, highScores[i].score);

  if (flag) {
    break;
  }
}