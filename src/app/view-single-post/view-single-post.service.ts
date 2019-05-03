import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { singlePost } from '../classes/single-post';

@Injectable({
  providedIn: 'root'
})
export class ViewSinglePostService {
  IsApi = false;
  BackEnd: string;

  constructor(private http: HttpClient) { }

  getSinglePost(post_id: number): Observable<singlePost> {
    if (this.IsApi === false) {
        /**
         * From the mock server if "IsApi" is false
         * And from Api if it is true
         */
        return this.http.get<singlePost>('http://localhost:3000/single-post');
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
        return this.http.get<any>(this.BackEnd + '/api/unauth/ViewPosts?username=' + post_id ,  {headers} );
    }
}

// addBook (book: Book): Observable<Book> {
//   return this.http.get<Hero>(this.bookUrl, httpOptions)
//     .pipe(
//       catchError(this.handleError('addBook', book))
//     );
// }

// getMyCommunities(username): Observable<number[]> {
//   /**
//    * Choose from where i'll get my data
//    */
//   if (this.IsApi === false) {
//       /**
//        * From the mock server if "IsApi" is false
//        * And from Api if it is true
//        */
//   return this.http.get<number[]>('http://localhost:3000/communities');
//   } else {
//        /**
//         * Getting token
//         */
//       var token = localStorage.getItem('token');
//       /**
//        * Set headers
//        */
//       const headers = new HttpHeaders ({
//           'Content-Type': 'application/json',
//           'Accept': 'application/json',
//           'Authorization': 'Bearer ' + token
//       });
//       return this.http.get<number[]>( this.BackEnd + '/api/unauth/viewUserCommunities?username=' + username , {headers} );
//   }
// }

}
