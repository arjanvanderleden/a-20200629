import { TestBed } from '@angular/core/testing';

import { PasswordValidator } from './password-validator';
import { FormGroup, FormBuilder, ValidatorFn, FormControl } from '@angular/forms';

describe('Registration form Validators', () => {

    describe("doesNotContainName", () => {

        const formBuilder = new FormBuilder();
        let validator: ValidatorFn;
        let formGroup: FormGroup

        beforeEach(() => {
            validator = PasswordValidator.doesNotContainName();
            formGroup = formBuilder
                .group({
                    firstName: [''],
                    lastName: [''],
                    password: [''],
                });
        });

        it('should validate when all values are empty', () => {
            formGroup.controls['firstName'].setValue('');
            formGroup.controls['lastName'].setValue('');
            formGroup.controls['password'].setValue('');
            expect(validator(formGroup)).toBe(null)
        })

        it('should validate when password is empty', () => {
            formGroup.controls['firstName'].setValue('first-name');
            formGroup.controls['lastName'].setValue('last-name');
            formGroup.controls['password'].setValue('');
            expect(validator(formGroup)).toBe(null)
        })

        it('should validate when password does not contain firstName or lastName', () => {
            formGroup.controls['firstName'].setValue('first-name');
            formGroup.controls['lastName'].setValue('last-name');
            formGroup.controls['password'].setValue('does-not-contain');
            expect(validator(formGroup)).toBe(null)
        })

        it('should not validate when password contains firstName case insensitive', () => {
            formGroup.controls['firstName'].setValue('first-name');
            formGroup.controls['lastName'].setValue('last-name');
            formGroup.controls['password'].setValue('-the-FIRST-NAME-');
            expect(validator(formGroup)).not.toBe(null)
        })

        it('should not validate when password contains lastName case insensitive', () => {
            formGroup.controls['firstName'].setValue('first-name');
            formGroup.controls['lastName'].setValue('last-name');
            formGroup.controls['password'].setValue('-the-LAST-NAME-');
            expect(validator(formGroup)).not.toBe(null)
        })

        it('should not validate when password contains firstName and lastName case insensitive', () => {
            formGroup.controls['firstName'].setValue('first-name');
            formGroup.controls['lastName'].setValue('last-name');
            formGroup.controls['password'].setValue('-the-LAST-NAME-or-FIRST-NAME');
            expect(validator(formGroup)).not.toBe(null)
        })
    });

    describe("hasLength", () => {

        let validator: ValidatorFn;
        let formControl: FormControl;

        beforeEach(() => {
            formControl = new FormControl();
        })

        it('should validate an empty value', () => {
            formControl.setValue('');
            const result = PasswordValidator.hasLength(8)(formControl);
            expect(result).toBe(null);
        })

        it('should not validate value with length 7', () => {
            formControl.setValue('1234567')
            const result = PasswordValidator.hasLength(8)(formControl);
            expect(result).toEqual(jasmine.objectContaining({passwordLength: true}));
        })

        it('should validate value with length 8', () => {
            formControl.setValue('12345678')
            const result = PasswordValidator.hasLength(8)(formControl);
            expect(result).toBe(null);
        })
    })

    describe("hasLowerCaseAndUpperCase", () => {
        let validator: ValidatorFn;
        let formControl: FormControl;

        beforeEach(() => {
            formControl = new FormControl();
        })

        it('should validate an empty value', () => {
            formControl.setValue('');
            const result = PasswordValidator.hasLowerCaseAndUpperCase()(formControl);
            expect(result).toBe(null);
        })

        it('should not validate value without lower case', () => {
            formControl.setValue('!@#%^&123SDF')
            const result = PasswordValidator.hasLowerCaseAndUpperCase()(formControl);
            expect(result).toEqual(jasmine.objectContaining({passwordLowercaseUpperCase: true}));
        })

        it('should not validate value without uppercase case', () => {
            formControl.setValue('!@#%^&123sdf')
            const result = PasswordValidator.hasLowerCaseAndUpperCase()(formControl);
            expect(result).toEqual(jasmine.objectContaining({passwordLowercaseUpperCase: true}));
        })

        it('should validate value with lowercase and upper case', () => {
            formControl.setValue('!@#%^&123SDFsdf')
            const result = PasswordValidator.hasLowerCaseAndUpperCase()(formControl);
            expect(result).toBe(null);
        })
    })

});
