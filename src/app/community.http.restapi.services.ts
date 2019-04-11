import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { catchError, tap} from 'rxjs/operators' ;


import{Communities} from './classes/community-info';


@Injectable({
    providedIn: 'root'
})
export class CommunityHttpServiceRestApi {
    constructor(private http: HttpClient) {}
  
  
    /**
     * to get all community info 
     */
    GetCommunityInfo(id:number): Observable <Communities> {
    return this.http.get<Communities>('http://localhost:3000/Community/'+id);
    }
  

}
