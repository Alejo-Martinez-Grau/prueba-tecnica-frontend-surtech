import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function age18Validator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {

    if (!control.value) {
      return null;
    }

    const birthday = new Date(control.value);
    const today = new Date();    
    const currentYear = today.getFullYear();
    
    // Create a date that represents "18 years ago from today"
    const yearEighteenYearsAgo = currentYear - 18;
    const eighteenYearsAgo = new Date(today);
    eighteenYearsAgo.setFullYear(yearEighteenYearsAgo);
    
    if (birthday > eighteenYearsAgo) {
      return { underAge: true };
    }

    return null;
  };
}