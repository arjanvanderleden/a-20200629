import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { RegistrationValues } from '../../ur-import'
import { environment } from '../../environments/environment';
import { tap, catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    private baseURl: string = environment.apiUrl;

    constructor(private http: HttpClient) { }

    submitRegistrationValues(registrationValues: RegistrationValues) {
        const {email, lastName, firstName } = registrationValues;
        return this.http.post<void>(`${this.baseURl}`, {firstName, lastName, email } )
            .pipe(
                tap(() => console.log(`posted values`)),
                map(() => true),
                catchError(this.handleError<boolean>(false)),
            )
    }

    private handleError<T>(result = {} as T) {
        return (error: HttpErrorResponse): Observable<T> => {
            console.error(error);
            return of(result);
        };
    }


}