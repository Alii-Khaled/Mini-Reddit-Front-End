import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap} from 'rxjs/operators' ;
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
            'Accept': 'application/json',
        });
        const body = {
            'username': username,
            'password': password
        };
        return this.http.post('http://localhost:8000/api/unauth/signIn', body, { headers });
    }


    SignUp(username: string , password: string, email: string, password_confirmation: string): Observable<any> {

        const headers = new HttpHeaders ({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        });
        const body = {
            'username': username,
            'email': email,
            'password': password,
            'password_confirmation' : password_confirmation
        };

        return this.http.post('http://localhost:8000/api/unauth/signIn', body, { headers });
    }
    RemoveCommunity(id: number): Observable <any> {

        const headers = new HttpHeaders ({
            "Accept": "application/json",
            "Authorization": "Bearer: {token}",
            "Content-Type": "application/json",
        });

        const body = {
            "community_id": id
        };


        return this.http.post<any>('http://localhost/api/auth/removeCommunity',body ,{ headers });


        }
        SubscribeCommunity(id: number): Observable <any> {
            let headers = {
                "Accept": "application/json",
                "Authorization": "Bearer: {token}",
                "Content-Type": "application/json",
            }

            let body = {
                "community_id": id
            }
            return this.http.post<any>('http://localhost/api/auth/subscribeCommunity',body ,{ headers });
        }

       UnSubscribeCommunity(id: number): Observable <any> {
            let headers = {
                "Accept": "application/json",
                "Authorization": "Bearer: {token}",
                "Content-Type": "application/json",
            }

            let body = {
                "community_id": id
            }
            return this.http.post<any>('http://localhost/api/auth/subscribeCommunity',body ,{ headers });
        }

        editCommunity(id:number ,rules: string , bio: string, banner: string, logo: string){
            let headers = {
                "Accept": "application/json",
                "Authorization": "Bearer: {token}",
                "Content-Type": "application/json",
            }

            let body = {
                "community_id": id,
                "rules_content": rules,
                "des_content":bio,
                "banner": banner,
                "logo": logo
            }
            this.http.patch("http://localhost/api/auth/editCommunity", body, { headers })
        }

}

