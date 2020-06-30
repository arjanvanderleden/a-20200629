# User RegistrationWork space

This is a multi project angular workspace, it hosts two projects
- A User Registration library
- A hosting application

### User Registration Library

This library contains a module, components, validators with but one concern: enabling input and validation of user registration data.

The library exports a module with the user registration form.

Using of this module is possible by either:

- using the published npm packages to either a public or private package repository
- installing the package by file (ie `$> npm install dist/user-registration`)
- importing the package directly by means of the public api. This method is used in the hosting application by a single import file `ur-import` for centralized access. When developing the library and using the host application as a development tool, this method does not require much manual work: `ng server` allows both projects to be worked on

### User Registration Host Application
The (route enabled) host application is responsible for hosting the user registration form component and posting the values on submission of the form. Validation of registration data is no concern of this application


### Peer dependencies
The Library uses ng-bootstrap as UI frame work and requires all hosting applications to have this package installed. In the package.json file of the library this is installed as a development dependency


## Installation and development
`$> git clone https://github.com/arjanvanderleden/a-20200629.git`

`$> cd a-20200629`

`$> npm install`

`$> ng serve`

## Tests
`$> ng test` will run the test for the library

`$> ng test user-registration-host` will run the test for the hosting application

## Email address validation
The library uses the angular provided `Validators.email` that implements the whatwg.org specification found [here](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address). This specification conforms more to common found email addresses then the [RFC 5322](https://tools.ietf.org/html/rfc5322#page-17) spec. which is geared more at technical correctness.

DIY implementations / Inventing the wheel when implementing email validation is bound to end in bug reports and user disappointment.

## Images

![Registration](images/registration_800x600.png?raw=true "Registration")
![Validation](images/validation_800x600.png?raw=true "Validation")
![Success](images/success_800x600.png?raw=true "Success")

# Angular specific information

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
