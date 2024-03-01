import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retornarHorarios } from '../models/retornarHorarios';
import { marcar_horario } from '../models/marcar_horario';

@Injectable({
  providedIn: 'root'
})
export class ApiCarWashService {
  urlRetornarHorarios:string='http://localhost:8000/api/v1/car_wash/avaliable_schedules';
  urlEnviarHorarios:string='http://localhost:8000/api/v1/car_wash/make_an_appointment';

  constructor(
    private http:HttpClient
  ) { }

  retornarHorarios():Observable<retornarHorarios>{
    return this.http.get<retornarHorarios>(this.urlRetornarHorarios);
  }

  postHorario(token:string,user_id:string,date:string,hour:string,minute:string):Observable<marcar_horario>{
    const body={
      'user_id':user_id,
      'date':date,
      'hour':hour,
      'minute':minute
    }
   
    const httpOptions={
      headers:new HttpHeaders({
        'Bearer':token
      })
    }

    return this.http.post<marcar_horario>(this.urlEnviarHorarios,body);
  }
}
