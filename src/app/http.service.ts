import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(http: HttpClient) {}

}