console.log('How about a promise?');

function myTurn(){
  console.log('It is my turn to run as a named function');
}

async function waitForIt(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

waitForIt(1000)
  .then(myTurn);
