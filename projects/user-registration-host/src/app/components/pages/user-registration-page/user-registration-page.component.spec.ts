import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrationPageComponent } from './user-registration-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserRegistrationModule } from 'user-registration';
import { HttpClientModule } from '@angular/common/http';

describe('UserRegistrationPageComponent', () => {
  let component: UserRegistrationPageComponent;
  let fixture: ComponentFixture<UserRegistrationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserRegistrationPageComponent ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        UserRegistrationModule,
        HttpClientModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
