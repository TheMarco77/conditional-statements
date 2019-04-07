// start at 0 to collect data
var correct = 0;
// questions for data collection
// question 1
var firstQuestion = prompt('How many burrows are there in New York City?');
if ( firstQuestion === '5' || firstQuestion.toLowerCase() === 'five' ) {
correct += 1;
}
// question 2
var secondQuestion = prompt('Is the Bronx one of them?');
if ( secondQuestion.toLowerCase() === 'yes' ) {
correct += 1;
}
// question 3
var thirdQuestion = prompt('Is Brooklyn one of them?');
if ( thirdQuestion.toLowerCase() === 'yes' ) {
correct += 1;
}
// question 4
var fourthQuestion = prompt( "Is Manhattan one of them?");
if ( fourthQuestion.toLowerCase() === 'yes' ) { 
correct += 1;
}
// question 5 
var fifthQuestion = prompt( "Is Queens one of them?");
if ( fifthQuestion.toLowerCase() === 'yes' ) { 
correct += 1;
}
// question 6
var sixthQuestion = prompt('Is Staten Island one of them?');
if ( sixthQuestion.toLowerCase() === 'yes' ) {
correct += 1; 
}
// question 7
var seventhQuestion = prompt("Is Long Island one of them?");
if ( seventhQuestion.toLowerCase() === 'no' ) { 
correct += 1;    
}
// if else statement and grading system
if ( correct === 7 ) {
  document.write('Out of all 7 questions, you got ' + correct + ' correct. Congratulations, you have earned the GOLDEN Crown!');
}
else if (correct >= 4 ) {
  document.write('Out of all 7 questions, you got ' + correct + ' correct. Congratulations, you have earned the SILVER Crown!');
} 
else if (correct === 3) {
  document.write('Out of all 7 questions, you got ' + correct + ' correct. Congratulations, you have earned the BRONZE Crown');  
}
else {
  document.write('You got more than 4 wrong! Thanks for playing');
}