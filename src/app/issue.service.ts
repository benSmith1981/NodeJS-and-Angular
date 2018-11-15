import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const uri = 'https://diveapi.herokuapp.com/api';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': '23232ededDE:sdsd3432d8n8'
  })
};



@Injectable({
  providedIn: 'root'
})
export class IssueService {

  constructor(private http: HttpClient) { 
      console.log("IssueService BITCH!")

  }

  getDiveSiteById(id) : Observable<any> {

    let headersObject: HttpHeaders = new HttpHeaders();
    var username = '23232ededDE';
    var password = 'sdsd3432d8n8';
    var basicAuth = 'Basic ' + btoa(username + ':' + password);
    headersObject.append("Authorization", basicAuth); 
    headersObject.append("Content-Type", "application/json;charset=UTF-8");
    const httpOptions2 = {
      headers: headersObject
    };
    console.log("getDiveSiteById..."+id)
    return this.http
        .get(uri+'/divesites/?id='+ id)
        .pipe(map(this.extractData));

  }
  
  getDiveSites(): Observable<any> {
    console.log("getDiveSites")

    return this.http
      .get(uri + '/divesites/?typeOfDivingArray=Deep') 
      .pipe(map(this.extractData));
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
}