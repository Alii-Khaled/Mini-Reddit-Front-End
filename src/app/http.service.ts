import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap} from 'rxjs/operators'; 

import { UserCommunities } from './classes/user-communities';
import { UserPublicInfo } from './classes/user-public-info';
import{Communities} from './classes/community-info';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    constructor(private http: HttpClient) {}
    GetCommNameAndLogo() :Observable<any>
    {
        return this.http.get("http://localhost:3000/communities");
    }

    GetMyCommunities(): Observable<UserCommunities[]> {
        return this.http.get<UserCommunities[]>('http://localhost:3000/communities');
    }
    GetUserPublicInfo(id: number): Observable<UserPublicInfo> {
        return this.http.get<UserPublicInfo>('http://localhost:3000/user_public_info/' + id);
    }
    GetCommunityInfo(): Observable <Communities[]> {
    return this.http.get<Communities[]>('http://localhost:3000/communities');

}
    // login(username: string , password: string): Observable<any> {
    //     return this.http.post( 'request', {username, password});
    // }
   
    login(username: string , password: string): Observable<any> {

        let headers = new HttpHeaders ({
            "Content-Type": "application/json",
            "Accept": "application/json",
        })
        let body = {
            "username": username,
            "password": password
        }
        console.log("Hello");
        return this.http.post('http://localhost:8000/api/unauth/signIn',body, { headers: headers });
    }


    SignUp(username: string , password: string, email: string, password_confirmation: string): Observable<any> {
        
        let headers = new HttpHeaders ({
            "Content-Type": "application/json",
            "Accept": "application/json",
        })
        let body = {
            "username": username,
            "email": email,
            "password": password,
            "password_confirmation" : password_confirmation
        }

        return this.http.post('http://localhost:8000/api/unauth/signIn',body, { headers: headers });
    }
}

