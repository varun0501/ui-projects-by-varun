export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function showErrorMessage(input, message) {
  // Remove valid input class
  input.classList.remove("valid-input");
  // Get the error span
  const errorField = input.parentNode.querySelector("input + span");
  // prepare and show error
  errorField.innerText = message;
  errorField.style.visibility = "visible";
}

export function showSuccess(input) {
  input.classList.add("valid-input");
}
