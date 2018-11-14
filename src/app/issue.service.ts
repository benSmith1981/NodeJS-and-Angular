import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/api/v1/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  uri = 'https://diveapi.herokuapp.com/api/';

  constructor(private http: HttpClient) { 
      console.log("IssueService")
  }
  
  getDiveSiteById(id) : Observable<any> {
    return this.http.get(this.uri+'/divesites/?id='+ id).pipe(
      map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}
