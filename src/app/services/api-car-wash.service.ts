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
  urlEnviarConfirmacao:string='http://localhost:8000/api/v1/car_wash/time_confirmation';

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
        "Authorization":"Bearer "+token
      })
    }

    return this.http.post<marcar_horario>(this.urlEnviarHorarios,body);
  }

  confirmacao(token:string,id:number,confirmation:string){
    const body={
      'id':id,
      'confirmation':confirmation
    };

    const httpOptions={
      headers:new HttpHeaders({
        "Authorization":"Bearer "+token
      })
    }

    return this.http.post(this.urlEnviarConfirmacao,body,httpOptions);
  }

  rejeitando(token:string,id:number,confirmation:string){
    const body={
      'id':id,
      'confirmation':confirmation
    };

    const httpOptions={
      headers:new HttpHeaders({
        "Authorization":"Bearer "+token
      })
    }

    return this.http.post(this.urlEnviarConfirmacao,body,httpOptions);
  }
}
