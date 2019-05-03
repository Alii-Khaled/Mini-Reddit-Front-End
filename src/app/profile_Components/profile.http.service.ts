import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { UserCommunities } from '../profile_classes/user-communities';
import { UserPublicInfo } from '../profile_classes/user-public-info';
import { PostsObjects } from '../classes/posts-objects';
import { comments, post } from '../classes/comments';
import { c } from '../classes/c';

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
     * Back-end link
     */
    BackEnd = 'http://35.204.169.121';
    /**
     * To get all communities subscribed by this user
     */
    getMyCommunities(username): Observable<UserCommunities[]> {
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
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + token
            });
            return this.http.get<UserCommunities[]>('http://localhost:3000/communities');
        }
    }

     /**
      * Getting username for the logged in user
      */
    getUserName(): Observable<any> {
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
            // return this.http.get<any>('https://930d0c7c.ngrok.io/api/auth/getUsername' , {headers});
            return this.http.get<any>(this.BackEnd + '/api/auth/getUsername' , {headers});
            }
    }
    /**
     * Get user public info like (karma,name,username,...)
     * @param id now we use id to get specific user but when connect to back-end we will use username
     */
    getUserPublicInfo(id): Observable<UserPublicInfo> {
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
            // return this.http.get<UserPublicInfo>('https://930d0c7c.ngrok.io/api/unauth/viewPublicUserInfo?username=' + id , {headers});
            return this.http.get<UserPublicInfo>(this.BackEnd + '/api/unauth/viewPublicUserInfo?username=' + id , {headers});
        }
    }

    /**
     * Get user's posts
     */
    getOverView(username: string): Observable<any> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<any>('http://localhost:3000/overview');
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
            return this.http.get<any>(this.BackEnd + '/api/auth/viewOverview?username=' + username , { headers });
        }
    }

    /**
     * Getting user's downvoted posts
     * @param type type for upvoted or down voted
     */
    getDownVoted(): Observable<any> {
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
            // return this.http.get<any>('https://930d0c7c.ngrok.io/api/auth/viewUpOrDownvotedPosts?type=0', {headers} );
            return this.http.get<any>(this.BackEnd + '/api/auth/viewUpOrDownvotedPosts?type=0', {headers} );
        }
    }

    /**
     * Getting user's upvoted posts
     * @param username username for user profile owner
     */
    getUpVoted(): Observable<any> {
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
            // return this.http.get<any>('https://930d0c7c.ngrok.io/api/auth/viewUpOrDownvotedPosts?type=1' , {headers} );
            return this.http.get<any>(this.BackEnd + '/api/auth/viewUpOrDownvotedPosts?type=1' , {headers} );
        }
    }

    /**
     * Getting user's posts
     * @param username username for user profile owner
     */
    getMyPosts(username: string): Observable<any> {
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
            // return this.http.get<any>('https://930d0c7c.ngrok.io/api/unauth/ViewPosts?username=' + username ,  {headers} );
            return this.http.get<any>(this.BackEnd + '/api/unauth/ViewPosts?username=' + username ,  {headers} );
        }
    }


    /**
     * Getting user's hidden posts
     */
    getHidden(): Observable<PostsObjects[]> {
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
    getComments(username: string): Observable<comments[]> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<comments[]>('http://localhost:3000/comments');
        } else {
            // return this.http.get<comments[]>('https://930d0c7c.ngrok.io/api/unauth/viewComments' + username);
            return this.http.get<comments[]>(this.BackEnd + '/api/unauth/viewComments' + username);
        }
    }

    getMyFollowing(username): Observable<any> {
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
            // return this.http.get<any>('https://930d0c7c.ngrok.io/api/auth/following?username=' + username , { headers });
            return this.http.get<any>(this.BackEnd + '/api/auth/following?username=' + username , { headers });
        }
    }

/**
 * SignOut
 */
signOut() {
    if (this.IsApi === false) {
        /**
         * From the mock server if "IsApi" is false
         * And from Api if it is true
         */
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
        let body = {};
        return this.http.post(this.BackEnd + '/api/auth/signOut' , body, {headers});
    }
}

    /**
     * To get all communities info
     *   @param id now we use id to get Specific Community 
     */
    getCommunityInfo(id: number): Observable<UserCommunities> {

        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
            return this.http.get<UserCommunities>('http://localhost:3000/Community/' + id);

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
               /**
                * Get community info not now in backend
                */
            return this.http.get<UserCommunities>(this.BackEnd + '/api/unauth/communityInformation?id=' + id , { headers } );
        }
    }

    // /** POST: add a new hero to the database */
    // addHero (hero: PostsObjects): Observable<PostsObjects> {
    //     return this.http.post<PostsObjects>('http://localhost:3000/Community/', hero, httpOptions)
    //     .pipe(
    //         catchError(this.handleError('addHero', hero))
    //     );
    // }

    // createPost (postData) {
    //     return this.http.post<comments>('http://localhost:3000/comments/', postData);
    // }

    // hidePost(post_id: number){
    //     return this.http.put(''+post_id,)
    // }

    // updateCustomer(customer: Customer){
    //     return this.httpClient.put(`${this.apiURL}/customers/${customer.id}`,customer);
    // }

}



