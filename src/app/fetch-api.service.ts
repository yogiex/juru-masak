import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

// export interface User {
//   postId: string;
//   id: string;
//   name: string;
//   email: string;
//   body: string;
// }

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  //urlApi = 'http://www.recipepuppy.com/api';
  private endpoint = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient: HttpClient) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // public getUsers(): Observable<User> {
  //   return this.httpClient.get<User>(this.endpoint + '/users')
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  public getData(){
    return this.httpClient.get(this.endpoint);
  }
  // getSingleUser(id): Observable<User> {
  //   return this.httpClient.get<User>(this.endpoint + '/users/' + id)
  //   .pipe(
  //     retry(1),
  //     catchError(this.processError)
  //   )
  // }

  processError(err){
    let message = '';
    if(err.error instanceof ErrorEvent){
      message = err.error.message;
    } else {
      message = 'Error code: ${err.status}\nMessage: ${err.message}';
    }
    console.log(message);
    return throwError(message);
  }

}
