import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap} from 'rxjs/operators' ;
import { UserCommunities } from '../Profile_classes/user-communities';
import { UserPublicInfo } from '../Profile_classes/user-public-info';
import { Communities } from '../classes/community-info';
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
    IsApi = false;
    /**
     * To get all communities subscribed by this user
     */
    GetMyCommunities(): Observable<UserCommunities[]> {
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
        return this.http.get<UserCommunities[]>('"http://localhost/api/unauth/viewUserCommunities"');
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
        return this.http.get<UserPublicInfo>('http://localhost:3000/user_public_info/' + id);
        } else {
            /**
             * Here id represent username of the profile owner user
             */
        return this.http.get<UserPublicInfo>('http://localhost/api/unauth/viewPublicUserInfo"' + id);
        }
    }


    /**
     * Get user's posts
     */

    GetPostsObjects(username: string): Observable<PostsObjects[]> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<PostsObjects[]>('http://localhost:3000/posts');
        } else {
            return this.http.get<PostsObjects[]>('http://localhost/api/unauth/ViewPosts' + username);
        }
    }

    /**
     * Getting user's downvoted posts
     * @param username username for user profile owner
     */
    GetDownVoted(username): Observable<PostsObjects[]> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<PostsObjects[]>('http://localhost:3000/downvoted');
        } else {
            return this.http.get<PostsObjects[]>('http://localhost/api/auth/viewUpOrDownvotedPosts' + username + 0);
        }
    }

    /**
     * Getting user's upvoted posts
     * @param username username for user profile owner
     */
    GetUpVoted(username: string): Observable<PostsObjects[]> {
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
        return this.http.get<PostsObjects[]>('http://localhost:3000/upvoted');
        } else {
            return this.http.get<PostsObjects[]>('http://localhost/api/auth/viewUpOrDownvotedPosts' + username + 1);
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
            return this.http.get<comments[]>('http://localhost/api/unauth/viewComments' + username);
        }
    }

    GetMyFollowing(): Observable<UserCommunities[]> {
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
        return this.http.get<UserCommunities[]>('"http://localhost/api/unauth/viewUserCommunities"');
        }
    }


}

