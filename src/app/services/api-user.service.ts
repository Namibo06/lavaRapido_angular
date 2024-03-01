import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from '../models/login';
import { cadastro } from '../models/cadastro';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  urlAutenticar:string='http://localhost:8000/api/v1/user/autentication';
  urlSignUp:string='http://localhost:8000/api/v1/user/sign_up';

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

  cadastro(first_name:string,last_name:string,email:string,phone:string,password:string):Observable<cadastro>{
    const body={
      'first_name':first_name,
      'last_name':last_name,
      'email':email,
      'phone':phone,
      'password':password
    }

    return this.http.post<cadastro>(this.urlSignUp,body);
  }
}
