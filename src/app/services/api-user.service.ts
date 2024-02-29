import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  urlAutenticar:string='http://localhost:8000/api/v1/user/autentication';

  constructor(
    private http:HttpClient
  ) { }

  login(email:string,password:string):Observable<login>{
    const body={
      'email':email,
      'password':password
    };

    return this.http.post<login>(this.urlAutenticar,body);
  }
}
