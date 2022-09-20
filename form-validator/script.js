import EmptyValidator from "./modules/emptyValidator.js";
import LengthValidator from "./modules/lengthValidator.js";

// Fetch all fields to validate
const form = document.querySelector("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const password1 = document.getElementById("password");
const password2 = document.getElementById("confirmPassword");

const fieldsToValidate = [name, email, password1, password2];
const passwordFields = [password1, password2];

// Validate fields on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Clear errors if any
  clearErrors();
  // Empty field validator
  fieldsToValidate.forEach((field) => {
    field.isDirty = false;
    const emptyFieldValidator = new EmptyValidator(field, field.value);
    emptyFieldValidator.validate();
  });
  // Min Max length validator
  passwordFields.forEach((field) => {
    const fieldLengthValidator = new LengthValidator(field, field.value, 8, 25);
    fieldLengthValidator.validate();
  });
});

/**
 * Clear validation errors
 */
function clearErrors() {
  fieldsToValidate.forEach((field) => {
    const errorField = field.parentNode.querySelector("input + span");
    errorField.innerText = "";
    errorField.style.visibility = "hidden";
  });
}
