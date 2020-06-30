import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidator } from '../../validators/password-validator';
import { RegistrationValues } from '../../types';

@Component({
  selector: 'ur-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  registrationForm: FormGroup;
  @Output() submitted = new EventEmitter<RegistrationValues>();
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, PasswordValidator.hasLowerCaseAndUpperCase(), PasswordValidator.hasLength(8)]],
    },
    {
      validators: [PasswordValidator.doesNotContainName()]
    });
  }

  get firstName() { return this.registrationForm.get('firstName')}
  get lastName() { return this.registrationForm.get('lastName') }
  get email() { return this.registrationForm.get('email') }
  get password() { return this.registrationForm.get('password') }

  onSubmit() {
    this.submitted.emit(this.registrationForm.value)
  }

  onReset() {
    this.registrationForm.reset({firstName: '', lastName: '', email: '', password: ''})
  }

}
