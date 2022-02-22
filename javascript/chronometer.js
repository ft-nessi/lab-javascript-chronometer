class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (callback) callback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here
    const minutes = Math.floor(this.currentTime / 60);
    return minutes;
  }

  getSeconds() {
    // ... your code goes here
    const seconds = this.currentTime % 60;
    return seconds;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here
    let stringWithTwoDigits;
    if (value.toString().length === 1) {
      stringWithTwoDigits = '0' + value.toString();
    } else {
      stringWithTwoDigits = value.toString();
    }
    return stringWithTwoDigits;
  }

  stop() {
    // ... your code goes here
    clearInterval(this.intervalId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    let savedTime =
      this.computeTwoDigitNumber(this.getMinutes()) +
      ':' +
      this.computeTwoDigitNumber(this.getSeconds());

      return savedTime;
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
