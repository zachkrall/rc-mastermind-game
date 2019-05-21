const readline = require('readline');

// define constants
// get random colors
// input prompt random colors
// function logic matching and print
// guess / check loop


const testPattern = false;

const COLORS = ['R', 'O', 'Y', 'G', 'B', 'P'];

const maxAttempts = 10;
let attempts = 0;

if ( testPattern ){
  var pattern1 = ["R","G","B","Y"];
} else {
  var pattern1 = getRandomColors();
}

function getRandomColors (){
  let pattern = [];

  for (let i=0; i<4; i++){
    pattern.push( COLORS[ parseInt(Math.random() * COLORS.length )] );
  }

  return pattern;
}

// A means correct color but not spot
// B means correct color in correct spot
function patternMatch(userPattern) {

  let correctGuesses = [];
  const parsedPattern = userPattern.split('');


  // is corrct pattern
  if (userPattern.toUpperCase() === pattern1.join('')) {
    console.log('You W0n');
    process.exit(1);
  }

  for (let i=0; i<4; i++){


    if( parsedPattern[i].toUpperCase() === pattern1[i] ){
      // color is in the right spot
      correctGuesses.push('K');
    } else if ( pattern1.indexOf(parsedPattern[i].toUpperCase()) > -1 ){
        // color is in pattern
      correctGuesses.push('W')
    }

  }

  return correctGuesses;

}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt() {

  rl.question(
    "\nYour Guess:\n", (answer) => {

      console.log('Turn: ' + attempts + ' / ' + maxAttempts);
      const result = patternMatch(answer);
      console.log(result);

      attempts++;
      if(attempts > maxAttempts) {
        console.log('Game 0ver!');
        console.log('Correct Pattern: ' + pattern1.join() );
        process.exit(0);
      }
      prompt();
    }
  );
}

// console.log(pattern1);
prompt();

// console.log(pattern1);
// console.log( patternMatch("GGGG") );
