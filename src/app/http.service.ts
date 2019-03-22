import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from} from 'rxjs';
import { catchError, tap} from 'rxjs/operators';
import { UserCommunities } from './classes/user-communities';
import { UserPublicInfo } from './classes/user-public-info';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {}

    GetMyCommunities(): Observable<UserCommunities[]> {
        return this.http.get<UserCommunities[]>('http://localhost:3000/communities');
    }
    GetUserPublicInfo(id: number): Observable<UserPublicInfo> {
        return this.http.get<UserPublicInfo>('http://localhost:3000/user_public_info/' + id);
    }
    login(username: string , password: string): Observable<any> {
        return this.http.post( '#', {username, password});

    }
}
