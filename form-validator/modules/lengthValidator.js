import { showErrorMessage, showSuccess } from "../../utils/util.js";

export default class LengthValidator {
  constructor(input, value, minLength, maxLength) {
    this.input = input;
    this.value = value;
    this.minLength = minLength ?? 0;
    this.maxLength = maxLength ?? this.value.length;
    this.errorMessage = `field should be between ${this.minLength} and ${this.maxLength}`;
  }

  validate() {
    if (this.input.isDirty) {
      return;
    }
    if (
      this.value.length < this.minLength ||
      this.value.length > this.maxLength
    ) {
      this.input.isDirty = true;
      showErrorMessage(this.input, this.errorMessage);
    } else {
      showSuccess(this.input);
    }
  }
}
