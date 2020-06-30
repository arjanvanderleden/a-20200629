import { NgModule } from '@angular/core';
import { UserRegistrationFormComponent } from './components/user-registration-form/user-registration-form.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [UserRegistrationFormComponent],
  providers: [FormBuilder],
  imports: [FormsModule, ReactiveFormsModule, CommonModule, BrowserModule],
  exports: [UserRegistrationFormComponent]
})
export class UserRegistrationModule { }
