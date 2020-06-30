import { TestBed } from '@angular/core/testing';

import { PasswordValidator } from './password-validator';
import { FormGroup, FormBuilder, ValidatorFn } from '@angular/forms';



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

        beforeEach(() => {

        })

        it('should not validate value = empty', () => {

        })
    })

    describe("hasLowerCaseAndUpperCase", () => {

    })




});
