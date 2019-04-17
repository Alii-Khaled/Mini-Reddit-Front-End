import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, tap, retry} from 'rxjs/operators' ;
import { UserCommunities } from './Profile_classes/user-communities';
import { UserPublicInfo } from './Profile_classes/user-public-info';
import {Communities} from './classes/community-info';
import { PostsObjects } from './classes/posts-objects';
import { comments } from './classes/comments';


@Injectable({
    providedIn: 'root'
})
export class HttpService {

    constructor(private http: HttpClient) {}

    /**
     * To get all community info
     */
    GetCommunityInfo(id: number): Observable <Communities> {
        return this.http.get<Communities>('http://localhost:3000/Community/' + id);


        }
    GetCommNameAndLogo(): Observable<any> {
        return this.http.get('http://localhost:3000/communities');
    }
    // login(username: string , password: string): Observable<any> {
    //     return this.http.post( 'request', {username, password});
    // }

    login(username: string , password: string): Observable<any> {

        const headers = new HttpHeaders ({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        });
        const body = {
            username,
            password
        };
        return this.http.post('https://930d0c7c.ngrok.io/api/unauth/signIn', body, { headers });
    }


    SignUp(username: string , password: string, email: string, password_confirmation: string): Observable<any> {

        const headers = new HttpHeaders ({
            'Content-Type': 'application/json',
            Accept: 'application/json',
        });
        const body = {
            username,
            email,
            password,
            password_confirmation
        };

        return this.http.post('https://930d0c7c.ngrok.io/api/unauth/signIn', body, { headers });
    }
    /**
     * to send a request contains the email
     */
    next(email: string): Observable<any> {
        return this.http.post( 'request', {email});

    }

}