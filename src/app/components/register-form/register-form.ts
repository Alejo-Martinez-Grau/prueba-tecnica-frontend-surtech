import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { provideNativeDateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { merge, min } from 'rxjs';
import { createPasswordStrengthValidator } from '../../validators/password-strength.validator';
import { age18Validator } from '../../validators/age-18.validator';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialog } from '../confirm-dialog/confirm-dialog';

@Component({
  selector: 'app-register-form',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'es-AR' }, provideNativeDateAdapter()],
  templateUrl: './register-form.html',
  styleUrls: ['./register-form.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterForm {
  private formBuilder = inject(FormBuilder);
  dialog = inject(MatDialog);

  readonly hidePassword = signal(true);
  readonly hideConfirmPassword = signal(true);
  readonly errorMessage = signal('');

  emailRegex: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  public form: FormGroup = this.formBuilder.group(
    {
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailRegex)]],
      date: [null, [Validators.required, age18Validator()]],
      areaCode: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(4),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(8),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      country: ['', Validators.required],
      password: [
        '',
        [Validators.required, Validators.minLength(8), createPasswordStrengthValidator()],
      ],
      confirmPassword: ['', Validators.required],
    },
    { validators: this.passwordMatchValidator }
  );

  passwordMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      group.get('confirmPassword')?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }

    return null;
  }

  updateErrorMessage() {
    if (this.form.get('email')?.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.form.get('email')?.invalid) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  toggleHidePassword(event: MouseEvent, isConfirmPassword: boolean = false) {
    if (isConfirmPassword) {
      this.hideConfirmPassword.set(!this.hideConfirmPassword());
    } else {
      this.hidePassword.set(!this.hidePassword());
    }
    event.stopPropagation();
  }

  onSubmit() {
    const dialogRef = this.dialog.open(ConfirmDialog, {
      data: this.form.value,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result !== undefined) {
        console.log('Form Submitted', this.form.value);
        this.form.reset();
      }
    });
  }
}
