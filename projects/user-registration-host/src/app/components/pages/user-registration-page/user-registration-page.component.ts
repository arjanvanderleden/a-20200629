import { Component, OnInit } from '@angular/core';
import { RegistrationValues } from 'projects/user-registration/src/public-api';
import { ApiService } from '../../../services/api-service';

@Component({
  selector: 'app-user-registration-page',
  templateUrl: './user-registration-page.component.html',
  styleUrls: ['./user-registration-page.component.less']
})
export class UserRegistrationPageComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  error: string | undefined;
  message: string | undefined;

  ngOnInit(): void {
  }

  onSubmit(registrationValues: RegistrationValues) {
    this.apiService.submitRegistrationValues(registrationValues).subscribe(successResult => {
      this.error = successResult === true ? undefined : 'Registration failed, please try later';
      this.message = successResult === true ? 'Registration succeeded, thank you' : undefined;
    } )
  }

}
