import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare, faBolt, faCar, faClipboardCheck, faClock, faQuoteRight, faSackDollar, faWind } from '@fortawesome/free-solid-svg-icons';
import { ApiCarWashService } from '../../../services/api-car-wash.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  quote:IconDefinition=faQuoteRight;
  wind:IconDefinition=faWind;
  snow:IconDefinition=faSnowflake;
  check:IconDefinition=faClipboardCheck;
  car:IconDefinition=faCar;
  dinheiro:IconDefinition=faSackDollar;
  clean:IconDefinition=faBolt;
  clock:IconDefinition=faClock;
  arrowUpRight:IconDefinition=faArrowUpRightFromSquare;

  /*api */
  api:any=[];

  constructor(
    private service:ApiCarWashService
  ){
    this.horarios();
  }

  horarios(){
    this.service.retornarHorarios().subscribe({
      next:(res)=>{
        console.log(res);
        this.api=res.horarios_preenchidos;
      },
      error:(err)=>{
        console.log(err);
      }
    });
  }
}
