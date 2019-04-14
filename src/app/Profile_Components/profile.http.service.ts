import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { UserCommunities } from '../Profile_classes/user-communities';
import { UserPublicInfo } from '../Profile_classes/user-public-info';
import { PostsObjects } from '../classes/posts-objects';
import { comments } from '../classes/comments';

@Injectable({
    providedIn: 'root'
})
export class ProfileHttpService {
    constructor(private http: HttpClient) {}

    /**
     * Variable to know from which server we get data (mock or API)
     */
    IsApi = true;
    /**
     * To get all communities subscribed by this user
     */
    GetMyCommunities(): Observable<any[]> {
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<UserCommunities[]>('http://localhost:3000/communities');
        } else {
             /**
              * Getting token
              */
            var token = localStorage.getItem('token');
            /**
             * Set headers
             */
            const headers = new HttpHeaders ({
                "Accept": "application/json",
                "Authorization": "Bearer: {"+ token +"}",
            });
            console.log('Here is a token: ' + token);
            return this.http.get<any[]>('http://localhost:8000/api/unauth/viewUserCommunities', { headers });
        }
    }

     /**
      * Getting username for the logged in user
      */
    GetUserName(): Observable<any> {
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * Getting username from mock server
             */
        return this.http.get<any>('http://localhost:3000/get_my_user_name');
        } else {
            /**
             * Getting token
             */
            /**
             * Getting token from cookies
             */
            var token = localStorage.getItem('token');
            /**
             * Setting headers
             */
            const headers = new HttpHeaders ({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            /**
             * Getting username from Api
             */
            return this.http.get<any>('http://localhost:8000/api/auth/getUsername' , {headers});
            }
    }
    /**
     * Get user public info like (karma,name,username,...)
     * @param id now we use id to get specific user but when connect to back-end we will use username
     */
    GetUserPublicInfo(id): Observable<UserPublicInfo> {
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<UserPublicInfo>('http://localhost:3000/user_public_info/' + 1);
        } else {
            /**
             * Setting headers
             */
            const headers = new HttpHeaders ({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });

            /**
             * Here id represent username of the profile owner user
             */
            return this.http.get<UserPublicInfo>('http://localhost:8000/api/unauth/viewPublicUserInfo?username=' + id , {headers});
        }
    }

    /**
     * Get user's posts
     */
    GetOverView(username: string): Observable<PostsObjects[]> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<PostsObjects[]>('http://localhost:3000/overview');
        } else {
            /**
             * Getting token from cookies
             */
            var token = localStorage.getItem('token');
            /**
             * Setting headers
             */
            const headers = new HttpHeaders ({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            const body = {
                'username': username
            };
            return this.http.get<PostsObjects[]>('http://localhost:8000/api/auth/viewOverview"' + body + { headers });
        }
    }

    /**
     * Getting user's downvoted posts
     * @param type type for upvoted or down voted
     */
    GetDownVoted(): Observable<any> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<any>('http://localhost:3000/downvoted');
        } else {
            /**
             * Getting token from cookies
             */
            var token = localStorage.getItem('token');
            /**
             * Setting headers
             */
            const headers = new HttpHeaders ({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            return this.http.get<any>('http://localhost:8000/api/auth/viewUpOrDownvotedPosts?type=0', {headers} );
        }
    }

    /**
     * Getting user's upvoted posts
     * @param username username for user profile owner
     */
    GetUpVoted(): Observable<any> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<any>('http://localhost:3000/upvoted');
        } else {
            /**
             * Getting token from cookies
             */
            var token = localStorage.getItem('token');
            /**
             * Setting headers
             */
            const headers = new HttpHeaders ({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            return this.http.get<any>('http://localhost:8000/api/auth/viewUpOrDownvotedPosts?type=1' , {headers} );
        }
    }

    /**
     * Getting user's posts
     * @param username username for user profile owner
     */
    GetMyPosts(username: string): Observable<any> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<any>('http://localhost:3000/posts');
        } else {
            /**
             * Getting token from cookies
             */
            var token = localStorage.getItem('token');
            /**
             * Setting headers
             */
            const headers = new HttpHeaders ({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            return this.http.get<any>('http://localhost:8000/api/unauth/ViewPosts?username=' + username ,  {headers} );
        }
    }

    /**
     * Getting user's hidden posts
     */
    GetHidden(): Observable<PostsObjects[]> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<PostsObjects[]>('http://localhost:3000/hidden');
        } else {
            // no hidden posts link yet
        }
    }
    /**
     * Comments of the user
     * @param username username for user profile owner
     */
    GetComments(username: string): Observable<comments[]> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<comments[]>('http://localhost:3000/comments');
        } else {
            return this.http.get<comments[]>('http://localhost:8000/api/unauth/viewComments' + username);
        }
    }

    GetMyFollowing(username): Observable<any> {
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<any>('http://localhost:3000/communities');
        } else {
            /**
             * Getting token from cookies
             */
            var token = localStorage.getItem('token');
            /**
             * Setting headers
             */
            const headers = new HttpHeaders ({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            return this.http.get<any>('http://localhost:8000/api/auth/following?username=' + username , { headers });
        }
    }


}

