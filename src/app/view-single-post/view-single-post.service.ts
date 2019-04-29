import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewSinglePostService {
  IsApi = false;
  BackEnd: string;

  constructor(private http: HttpClient) { }

  GetSinglePost(post_id: number): Observable<any> {
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
        return this.http.get<any>(this.BackEnd + '/api/unauth/ViewPosts?username=' + post_id ,  {headers} );
    }
}

// addBook (book: Book): Observable<Book> {
//   return this.http.get<Hero>(this.bookUrl, httpOptions)
//     .pipe(
//       catchError(this.handleError('addBook', book))
//     );
// }

}
