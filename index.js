

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
  alert(checkRandomNumber)

function displayNumbers() {

}

let storedInput = [];
console.log(storedInput);

function savedSelectedNumber() {
  const storedInput = setTimeout(savedSelectedNumber, 15000);prompt("Enter the number in the right order: ");
  
  return storedInput;
}

const userSelectedNumber = savedSelectedNumber();
console.log(userSelectedNumber);