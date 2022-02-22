const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  
  let seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds());
  printSeconds(seconds);
  let minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes());
  printMinutes(minutes);
}

function printMinutes(minutes) {

  minUniElement.innerText = minutes[minutes.length - 1];
  minDecElement.innerText = minutes[minutes.length - 2];

  return minutes;
}

function printSeconds(seconds) {

  secUniElement.innerText = seconds[seconds.length - 1];
  secDecElement.innerText = seconds[seconds.length - 2];

  return seconds;
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {

  btnLeftElement.className = 'btn stop';
  btnLeftElement.innerText = 'STOP';

}

function setSplitBtn() {

  btnRightElement.className = 'btn split';
  btnRightElement.innerText = 'SPLIT';

  let sortedListElement = document.querySelector("#splits");
  let liElement = document.createElement("li");

  sortedListElement.appendChild(liElement);
  liElement.innerText = chronometer.split();

}

function setStartBtn() {

  btnLeftElement.className = 'btn start';
  btnLeftElement.innerText = 'START';

}

function setResetBtn() {
  // ... your code goes here
  btnRightElement.className = 'btn reset';
  btnRightElement.innerText = 'Reset';

}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {

  if (btnLeftElement.className === 'btn start') {

    chronometer.start(printTime);
    return setStopBtn();

  } else {
    chronometer.stop();
    return setStartBtn();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.className === 'btn reset') {

    chronometer.reset();
    return setSplitBtn();

  } else {

    chronometer.split();
    return setResetBtn();
  }
});
