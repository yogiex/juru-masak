import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchApiService {

  urlApi = 'http://www.recipepuppy.com/api'
  constructor(private httpClient) { }
}
