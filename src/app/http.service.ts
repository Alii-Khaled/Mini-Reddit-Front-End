import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap} from 'rxjs/operators' ;

import { UserCommunities } from './classes/user-communities';
import { UserPublicInfo } from './classes/user-public-info';


@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {}
    GetCommNameAndLogo(): Observable<any> {
        return this.http.get('http://localhost:3000/communities');
    }
    /**
     * to get all communities subscribed by this user
     */
    GetMyCommunities(): Observable<UserCommunities[]> {
        return this.http.get<UserCommunities[]>('http://localhost:3000/communities');
    }
    /**
     * get user public info like (karma,name,username,...)
     * @param id now we use id to get specific user but when connect to back-end we will use username
     */
    GetUserPublicInfo(id: number): Observable<UserPublicInfo> {
        return this.http.get<UserPublicInfo>('http://localhost:3000/user_public_info/' + id);
    }

    login(username: string , password: string): Observable<any> {
        return this.http.post( 'request', {username, password});

    }
}

