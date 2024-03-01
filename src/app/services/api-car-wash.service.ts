import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { retornarHorarios } from '../models/retornarHorarios';

@Injectable({
  providedIn: 'root'
})
export class ApiCarWashService {
  urlRetornarHorarios:string='http://localhost:8000/api/v1/car_wash/avaliable_schedules';

  constructor(
    private http:HttpClient
  ) { }

  retornarHorarios():Observable<retornarHorarios>{
    return this.http.get<retornarHorarios>(this.urlRetornarHorarios);
  }
}
