import { ApiService } from "./api-service";
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RegistrationValues } from '../../ur-import';

describe('Api service', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let apiService: ApiService;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                ApiService
            ]
          });

          httpClient = TestBed.inject(HttpClient);
          httpTestingController = TestBed.inject(HttpTestingController);
          apiService = TestBed.inject(ApiService);
    })

    it("should create", () => {
        expect(apiService).toBeInstanceOf(ApiService)
    })

    describe("POST RegistrationValues", () => {

        let registrationValues: RegistrationValues;

        beforeEach(() => {
            registrationValues = {
                firstName: 'Thomas',
                lastName: 'Shelby',
                email: 'thomas.shelby@co.uk',
                password: 'Ts12345678'
            }
        })

        it("should result in 'true' when posted", () => {
            apiService.submitRegistrationValues(registrationValues).subscribe(
                result => expect(result).toEqual(true, ' a successful POST'),
                fail
              );

              const req = httpTestingController.expectOne(apiService.baseURl);
              expect(req.request.method).toEqual('POST');
              req.flush(0);
        })

        it("should result in false when the api url is wrong", () => {
            apiService.submitRegistrationValues(registrationValues).subscribe(
                result => expect(result).toEqual(false, ' a failed POST'),
                fail
              );

              const req = httpTestingController.expectOne(apiService.baseURl);
              expect(req.request.method).toEqual('POST');

              const msg = '404 error';
              req.flush(msg, { status: 404, statusText: 'Not Found' });
        })

        it("should result in false when the api fails", () => {
            apiService.submitRegistrationValues(registrationValues).subscribe(
                result => expect(result).toEqual(false, ' a failed POST'),
                fail
              );

              const req = httpTestingController.expectOne(apiService.baseURl);
              expect(req.request.method).toEqual('POST');

              const msg = 'Server error';
              req.flush(msg, { status: 500, statusText: 'Server error' });
        })

    })


    afterEach(() => {
        httpTestingController.verify(); //Verifies that no requests are outstanding.
    });


})