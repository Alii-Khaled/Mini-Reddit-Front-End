import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Communities } from '../classes/community-info';
import { communityModerators } from 'src/app/classes/community-moderators';
import { UserPublicInfo } from '../profile_classes/user-public-info';


@Injectable({
    providedIn: 'root'
})
export class communityHttpService {
    /**
 * Variable to know from which server we get data (mock or API)
 */
    IsApi = true;
    constructor(private http: HttpClient) {
    }

    removeModerator(commid: number, user: string, mockid: number): Observable<any> {
        var token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        });

        const body = {
            "community_id": commid,
            "moderator_username": user
        };
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
            return this.http.delete<communityModerators[]>('http://localhost:3000/get_my_moderators/' + mockid);

        }
        else {
            return this.http.post<communityModerators[]>('http://35.204.169.121//api/auth/removeModerator', body, { headers });

        }
    }



    addModerator(id: number, user: string, pic: string): Observable<any[]> {
        var token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        });

        const bodyy = {

            "moderator_username": user,
            "moderator_photo": pic
        };
        const body = {

            "moderator_username": user,
            "community_id": id
        };
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */

            return this.http.post<communityModerators[]>('http://localhost:3000/get_my_moderators/', bodyy);
        }
        else {
            return this.http.post<communityModerators[]>('http://35.204.169.121//api/auth/addModerator', body, { headers });

        }
    }

    getMyModerators(id: number): Observable<any[]> {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
            return this.http.get<communityModerators[]>('http://localhost:3000/get_my_moderators');
        }
        else {
            return this.http.get<communityModerators[]>('http://35.204.169.121/api/auth/viewModerators?community_id=' + id, { headers });

        }
    }

    /**
     * To get all communities info
     *   @param id now we use id to get Specific Community 
     */
    getCommunityInfo(id: number): Observable<Communities> {
        var token = localStorage.getItem('token');

        let headers = {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
            "Accept": "application/json",
        }
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
            return this.http.get<Communities>('http://localhost:3000/Community/' + id);

        }
        else {
            /*get community info not now in backend*/
            return this.http.get<Communities>('http://35.204.169.121/api/unauth/communityInformation?community_id=' + id, { headers });
        }
    }

    /**
     * Remove Community 
     *  @param id now we use id to Remove Specific Community 
     */


    removeCommunity(id: number): Observable<any> {
        var token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        });

        const body = {
            "community_id": id
        };
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
            return this.http.delete<Communities>('http://localhost:3000/Community/' + id);

        }
        else {
            // return this.http.post<any>('https://930d0c7c.ngrok.io/api/auth/removeCommunity',body ,{ headers });
            return this.http.post<any>('http://35.204.169.121/api/auth/removeCommunity', body, { headers });

        }
    }
    /**
     *Subscribe Community 
     *@param id now we use id to subscribe to Specific Community
     */
    subscribeCommunity(id: number): Observable<any> {
        var token = localStorage.getItem('token');
        let headers = {
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        }

        let body = {
            "community_id": id
        }
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
            return this.http.post<any>('http://localhost/api/auth/subscribeCommunity', body, { headers });
        }
        else {
            // return this.http.post<any>('https://930d0c7c.ngrok.io/api/auth/subscribeCommunity', body, { headers });
            return this.http.post<any>('http://35.204.169.121/api/auth/subscribeCommunity', body, { headers });
        }
    }
    /**
     *Unsubscribe Community 
     *@param id now we use id to unsubscribe to Specific Community
     */
    unSubscribeCommunity(id: number): Observable<any> {
        var token = localStorage.getItem('token');
        let headers = {
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        }

        let body = {
            "community_id": id
        }
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
            return this.http.post<any>('http://localhost/api/auth/unSubscribeCommunity', body, { headers });
        }
        else {
            // return this.http.post<any>('https://930d0c7c.ngrok.io/api/auth/unSubscribeCommunity',body ,{ headers });
            return this.http.post<any>('http://35.204.169.121/api/auth/unSubscribeCommunity', body, { headers });
        }

    }
    /**
     *Edit Community 
     *@param id now we use id to edit to Specific Community
     *@param rules now we use id to edit to Specific Community's Rules
     *@param bio now we use id to edit to Specific Community's bio
     *@param banner now we use id to edit to Specific Community's banner
     *@param logo now we use id to edit to Specific Community's avatar
     */
    editCommunity(id: number, rules: string, bio: string, banner: File, logo: File) {
        var token = localStorage.getItem('token');
        let headers = {
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        }

        let body = {
            "community_id": id,
            "rules_content": rules,
            "des_content": bio,
            "banner": banner,
            "logo": logo
        }
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            return this.http.post("http://localhost/api/auth/editCommunity", body, { headers })
        }
        else {
            // return this.http.post("https://930d0c7c.ngrok.io/api/auth/editCommunity", body, { headers })
            return this.http.post("http://35.204.169.121/api/auth/editCommunity", body, { headers })
        }
    }


    /**
     *get Community posts 
     *@param community_id now we use id to edit to Specific Community
     */
    getCommunityPosts(community_id: number) {
        var token = localStorage.getItem('token');
        let headers = {
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        }

        let body = {
            "community_id": community_id,

        }
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            return this.http.get<any>("http://localhost:3000/posts")
        }
        else {
            return this.http.get<any>("http://35.204.169.121/api/unauth/ViewPosts?community_id=" + community_id, { headers })
        }
    }

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
            const headers = new HttpHeaders({
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            });

            /**
             * Here id represent username of the profile owner user
             */
            // return this.http.get<UserPublicInfo>('https://930d0c7c.ngrok.io/api/unauth/viewPublicUserInfo?username=' + id , {headers});
            //return this.http.get<UserPublicInfo>('http://35.204.169.121/api/unauth/viewPublicUserInfo?username=' + id , {headers});
            return this.http.get<UserPublicInfo>('http://localhost:3000/user_public_info/' + 1);
        }
    }

}

