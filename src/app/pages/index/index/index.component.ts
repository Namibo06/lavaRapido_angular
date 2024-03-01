import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare, faBolt, faCar, faChevronDown, faClipboardCheck, faClock, faQuoteRight, faSackDollar, faWind } from '@fortawesome/free-solid-svg-icons';
import { ApiCarWashService } from '../../../services/api-car-wash.service';
import { CookieService } from 'ngx-cookie-service';

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
  chevron:IconDefinition=faChevronDown;

  /*api */
  api:any=[];

  user_id:string='';
  date:string='';
  hour:string='';
  minute:string='';
  token:string='';

  /*callback's */
  callbackSucess:boolean=false;
  messageSucess:string="";
  callbackError:boolean=false;
  messageError:string="";

  constructor(
    private service:ApiCarWashService,
    private cookie:CookieService
  ){
    this.horarios();
    this.getCookies();
  }

  getCookies(){
    this.token=this.cookie.get('token');
    this.user_id=this.cookie.get('id').toString();
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

  enviarHorario(){

    this.service.postHorario(this.token,this.user_id,this.date,this.hour,this.minute).subscribe({
      next:(res)=>{
        console.log(res);
        this.messageSucess=res.message;
        this.callbackSucess=true;

        setTimeout(()=>{
          this.callbackSucess=false;
          window.location.href='/index';
        },2000);
      },
      error:(err)=>{
        console.log(err);

        this.messageError="Horário já agendado";
        this.callbackError=true;

        setTimeout(()=>{
          this.callbackError=false;
          //window.location.href='/index';
        },5000);
      }
    });
  }
}
