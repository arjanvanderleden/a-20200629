import { Injectable } from '@angular/core';
import { FormGroup, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class PasswordValidator {

  static doesNotContainName(): ValidatorFn {

    const doesNotContain = (container: string | null, included: string | null) =>
      container === '' ||
      container === null ||
      included === '' ||
      included === null ||
      container.toLocaleLowerCase().indexOf(included.toLocaleLowerCase()) === -1;

    return (formGroup: FormGroup) => {
      const firstName = formGroup.get('firstName').value;
      const lastName = formGroup.get('lastName').value;
      const password = formGroup.get('password').value;

      const isValid = doesNotContain(password, firstName) &&
        doesNotContain(password, lastName)

      return isValid ? null : {
        'passwordNoName': true
      } as ValidationErrors;
    };
  }

  static hasLength = (miniumLength: number) => (control: AbstractControl) => {

    const value = control.value;
    const isValid = value === null ||
      value === '' ||
      (typeof value === 'string' && value.length >= miniumLength);

    return isValid ? null : {
      'passwordLength': true
    } as ValidationErrors;

  }

  static hasLowerCaseAndUpperCase = () => (control: AbstractControl) => {

    const isMatch = (regex: RegExp, stringValue: string | null) => stringValue === null || stringValue === '' || regex.test(stringValue)

    const value = control.value;
    const isValid = isMatch(/[a-z]/, value) && isMatch(/[A-Z]/, value);

    return isValid ? null : {
      'passwordLowercaseUpperCase': true
    } as ValidationErrors;

  }

}