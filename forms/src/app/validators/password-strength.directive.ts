import { Directive } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, Validator, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPasswordStrength]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordStrengthDirective,
      multi: true,
    },
  ],
})
export class PasswordStrengthDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value || '';    /// 12345678
    // Password validation rules
    const minLength = /.{8,}/;
    const hasUpperCase = /[A-Z]/;
    const hasLowerCase = /[a-z]/;
    const hasNumber = /[0-9]/;
    const hasSpecialChar = /[\W_]/;

    const valid =
      minLength.test(value) &&
      hasUpperCase.test(value) &&
      hasLowerCase.test(value) &&
      hasNumber.test(value) &&
      hasSpecialChar.test(value);

    return valid ? null : { passwordStrength: true };   // true ==> error , Null ==> no error
  }
}
