import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { UserCommunities } from './classes/user-communities';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {}

    GetMyCommunities(): Observable<UserCommunities[]> {
        return this.http.get<UserCommunities[]>('http://localhost:3000/communities');
    }
}
