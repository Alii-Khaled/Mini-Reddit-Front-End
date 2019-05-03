import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Communities } from '../classes/community-info';
import { communityModerators } from 'src/app/classes/community-moderators';

@Injectable({
    providedIn: 'root'
})
export class communityHttpService {
    constructor(private http: HttpClient) { }


    RemoveModerator(id: number, user: string): Observable<any> {
        var token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        });

        const body = {

            "moderator_name": user
        };
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */
            return this.http.delete<communityModerators[]>('http://localhost:3000/get_my_moderators/' + id);

        }
        else {
            return this.http.delete<communityModerators[]>('http://localhost:3000/get_my_moderators/' + id);

        }
    }



    AddModerator(id: number, user: string): Observable<any[]> {
        var token = localStorage.getItem('token');
        const headers = new HttpHeaders({
            "Accept": "application/json",
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json",
        });

        const body = {

            "moderator_name": user
        };
        /**
         * Choose from where i'll get my data
         */
        if (this.IsApi === false) {
            /**
             * From the mock server if "IsApi" is false
             * And from Api if it is true
             */

            return this.http.post<communityModerators[]>('http://localhost:3000/get_my_moderators/', body);
        }
        else {
            return this.http.post<communityModerators[]>('http://localhost:3000/get_my_moderators/', body);

        }
    }

    GetMyModerators(): Observable<any[]> {
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
            return this.http.get<communityModerators[]>('http://localhost:3000/get_my_moderators');

        }
    }
    /**
     * Variable to know from which server we get data (mock or API)
     */
    IsApi = true;
    /**
     * To get all communities info
     *   @param id now we use id to get Specific Community 
     */
    GetCommunityInfo(id: number): Observable<Communities> {

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
            return this.http.get<Communities>('http://localhost:3000/Community/' + id);
        }
    }

    /**
     * Remove Community 
     *  @param id now we use id to Remove Specific Community 
     */


    RemoveCommunity(id: number): Observable<any> {
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
    SubscribeCommunity(id: number): Observable<any> {
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
    UnSubscribeCommunity(id: number): Observable<any> {
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
    editCommunity(id: number, rules: string, bio: string, banner: string, logo: string) {
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
          //  return this.http.get<any>("http://35.204.169.121/api/unauth/ViewPosts", body, { headers })
        }
    }

}




