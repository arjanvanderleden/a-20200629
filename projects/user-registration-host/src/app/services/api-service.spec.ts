import { ApiService } from "./api-service";
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

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

    describe("post RegistrationValues", () => {

        it("should call when", () => {

        })

    })


    afterEach(() => {
        httpTestingController.verify(); //Verifies that no requests are outstanding.
    });


})