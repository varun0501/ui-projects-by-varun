import { capitalize, showErrorMessage, showSuccess } from "../../utils/util.js";

export default class EmptyValidator {
  constructor(input, value) {
    this.input = input;
    this.value = value;
    this.errorMessage = `${capitalize(this.input.id)} is required`;
  }

  validate() {
    if (this.input.isDirty) {
      return;
    }
    if (this.value.trim() === "" || this.value == null) {
      this.input.isDirty = true;
      showErrorMessage(this.input, this.errorMessage);
    } else {
      showSuccess(this.input);
    }
  }
}
