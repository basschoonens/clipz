import {ValidationErrors, AbstractControl, ValidatorFn} from '@angular/forms'
import { Auth, fetchSignInMethodsForEmail } from '@angular/fire/auth';
import { inject, Injectable } from '@angular/core';
import { AsyncValidator } from '@angular/forms';

export function Match(controlName: string, matchingControlName: string): ValidatorFn {

  return (group: AbstractControl): ValidationErrors | null  => {
    const control = group.get('password');
    const matchingControl = group.get('confirmPassword');

    if (!control || !matchingControl) {
      console.error('Control not found.');
      return {controlNotFound: false};
    }

    const error = control.value === matchingControl.value ? null : {noMatch: true};

    matchingControl.setErrors(error)

    return error;
  }
}

@Injectable({
  providedIn: 'root'
})
export class EmailTaken implements AsyncValidator {
  auth = inject(Auth);

  validate = (control: AbstractControl): Promise<ValidationErrors | null> => {
    return fetchSignInMethodsForEmail(this.auth, control.value)
    .then((response) => response.length ? {emailTaken: true} : null);
  }
}
