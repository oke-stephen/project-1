const inputElement = document.querySelector(".user-name");
const spanElement = document.querySelector(".max-characters");

function numberReduction() {
  const inputElementValues = inputElement.value;
  const inputElementValuesLength = inputElementValues.length;
  const maxLength = inputElement.maxLength;

  const remainingCharacters = maxLength - inputElementValuesLength;
  spanElement.textContent = remainingCharacters;
  if (inputElementValuesLength === 0) {
    spanElement.textContent = 0;
  }
}
inputElement.addEventListener("input", numberReduction);

function inputChange() {
  const inputElement = document.querySelector(".user-name");
  const inputElementValues = inputElement.value; 
}
