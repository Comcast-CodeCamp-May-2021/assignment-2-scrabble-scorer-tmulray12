// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //
let enteredWord = "";
function initialPrompt() {
  console.clear();
   enteredWord = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
   return enteredWord;
  //  console.log(oldScrabbleScorer(word));
  //  console.log(simpleScore(word));

};

function simpleScore(word) {
  word = word.toUpperCase();
  // let simpleScore = "";
  let totalPointValue = 0;
  for (let i = 0; i < word.length; i++) {
      totalPointValue ++;
    // for (const pointValue in simpleScoreStructure) {

      // if (simpleScoreStructure[pointValue].includes(word[i])) {
      //   simpleScore += `Points for '${word[i]}': ${pointValue}\n`
      //   totalPointValue += Number(pointValue);
//       }
//     }
   
  }
   return totalPointValue;
};

function vowelBonusScore(word) {
  word = word.toUpperCase();
  vowelbonusScoreArray = word.split("");
  let totalPointValue = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowelbonusScoreArray[i] === "A" || vowelbonusScoreArray[i] === "E" || vowelbonusScoreArray[i] === "I" || vowelbonusScoreArray[i] === "O" || vowelbonusScoreArray[i] === "U") {
      totalPointValue += 3;
    } else {
      totalPointValue ++;
    }
  }
  return totalPointValue
};
// let vowelBonusScore;

function scrabbleScore(word) {
  word = word.toLowerCase();
  newLetterPoints = 0;
  for (let i = 0; i < word.length; i++) {
    newLetterPoints += newPointStructure[word[i]];
  }
  return newLetterPoints;
};

let simpleScoreObject = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
};
let vowelBonusScoreObject = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoringFunction: vowelBonusScore
};
let scrabbleScoreObject = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
};

const scoringAlgorithms = [simpleScoreObject, vowelBonusScoreObject, scrabbleScoreObject];

function scorerPrompt() {
  console.log("Which scoring algorith would you like to use?\n\n");
  for (let i = 0; i < scoringAlgorithms.length; i++) {
    console.log(`${i} - ${scoringAlgorithms[i].name}: ${scoringAlgorithms[i].description}`);
  }
  scorerPromptNumber = input.question("Enter 0, 1, or 2: ");
  scorerPromptNumber = Number(scorerPromptNumber);
  console.log(`Score for '${enteredWord}': ${scoringAlgorithms[scorerPromptNumber].scoringFunction(enteredWord)}`)
};
  // if (Number(choice) === 0) {
  //   console.log(`Score for '${word}': ${scoringAlgorithms[0].scoringFunction(word)}`);
  // } else if (Number(choice) === 1) {
  //   console.log(`Score for '${word}': ${scoringAlgorithms[1].scoringFunction(word)}`);
  // } else if (Number(choice) === 2) {
//     console.log(`Score for '${word}': ${scoringAlgorithms[2].scoringFunction(word)}`);
//   }
// };
function transform(oldScore) {
 let newPointStructure = {}; 
 for (item in oldScore) {
   for (let i = 0; i < oldScore[item].length; i++) {
     let key = oldScore[item][i].toLowerCase();
     newPointStructure[key] = Number(item);
   }
 }
 return newPointStructure;
};

let newPointStructure = transform(oldPointStructure);
// newPointStructure[" "] = 0;

function runProgram() {
   initialPrompt();
   scorerPrompt();
};

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

