

function randomNumberGenerator() {
    let randomNumberSelected = [];

    for (let i = 0; i < 4; i++) {
      const randomNumber = Math.floor(Math.random() * 101);
      console.log("Random Numbers: ", randomNumber);

      randomNumberSelected.push(randomNumber);
    }
    return randomNumberSelected;

}
  const checkRandomNumber = randomNumberGenerator();
  console.log("Numbers: ", checkRandomNumber);

function displayNumbers() {

}

function storedNumbers() {
    let promptedNumbers = [];

    for (let i = 0; i < displayNumbers.length; i++) {
        const displayList = displayNumbers[i];
        
    }
}