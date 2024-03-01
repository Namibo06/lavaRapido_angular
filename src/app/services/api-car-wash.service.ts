import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCarWashService {
  urlRetornarHorarios:string='http://localhost:8000/api/v1/car_wash/avaliable_schedules';

  constructor(
    private http:HttpClient
  ) { }

  retornarHorarios(){
    return this.http.get(this.urlRetornarHorarios);
  }
}
