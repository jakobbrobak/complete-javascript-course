/* var firstName = 'John';
var lastName = 'Smith';
var age = 28;
var fullAge = true;

var job;

/* 
Kommentar


// Test kommentar

job = 'Web Developer';
console.log(fullAge + job);
console.log(firstName + ' ' + lastName + ' is ' + age + ' years old');



var markMass, markHeight, johnMass, johnHeight;

markMass = 100;
markHeight = 190;

johnMass = 110;
johnHeight = 190;

function BMI(mass, height) {
    return mass / (height * height)
};
console.log("Is Mark's BMI higher than John's?");
console.log(BMI(markMass, markHeight) > BMI(johnMass, johnHeight));

*/

var johnsTeamScoreOne, johnsTeamScoreTwo, johnsTeamScoreThree, johnsTeamAverageScore, marksTeamScoreOne, marksTeamAverageScore, marksTeamScoreTwo, marksTeamScoreThree, marysTeamScoreOne, marysTeamScoreTwo, marysTeamScoreThree, marysTeamAverageScore;

johnsTeamScoreOne = 105;
johnsTeamScoreTwo = 89;
johnsTeamScoreThree = 89;

marksTeamScoreOne = 89;
marksTeamScoreTwo = 160;
marksTeamScoreThree = 89; 

marysTeamScoreOne = 159;
marysTeamScoreTwo = 89;
marysTeamScoreThree = 89;

function CalculateAverageScore(numOne, numTwo, numThree) {
    return (numOne + numTwo + numThree) / 3
}

johnsTeamAverageScore = CalculateAverageScore(johnsTeamScoreOne, johnsTeamScoreTwo,johnsTeamScoreThree);

marksTeamAverageScore = CalculateAverageScore(marksTeamScoreOne, marksTeamScoreTwo,marksTeamScoreThree);

marysTeamAverageScore = CalculateAverageScore(marysTeamScoreOne, marysTeamScoreTwo, marysTeamScoreThree);

if(johnsTeamAverageScore > marksTeamAverageScore && johnsTeamAverageScore > marysTeamAverageScore) {
  console.log("John is the winner with" + " " + johnsTeamAverageScore);
} else if (marksTeamAverageScore > johnsTeamAverageScore && marksTeamAverageScore > marysTeamAverageScore) {
    console.log("Mark is the winner with" + " " + marksTeamAverageScore);
} else if (marysTeamAverageScore > marksTeamAverageScore && marysTeamAverageScore > johnsTeamAverageScore) {
    console.log("Mary is the winner with" + " " + marysTeamAverageScore);
} else {
    console.log("Its a draw between john, mark and mary");
}

