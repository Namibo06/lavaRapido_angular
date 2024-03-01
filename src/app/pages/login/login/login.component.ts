import { Component } from '@angular/core';
import { ApiUserService } from '../../../services/api-user.service';
import { CookieService } from 'ngx-cookie-service';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faGoogle,faApple } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','./login.responsive.component.css'],
  providers:[CookieService]
})
export class LoginComponent {
  google:IconDefinition=faGoogle;
  apple:IconDefinition=faApple;

  id:number=0;
  first_name:string='';
  last_name:string='';
  email:string='';
  phone:string='';
  password:string='';
  confirm_password:string='';

  token:string='';
  status:number=0;
  message:string='';
  callback:boolean=false;
  messageError:string='';
  callbackError:boolean=false;

  constructor(
    private service:ApiUserService,
    private cookie:CookieService
  ){}

  autenticar(){
    this.service.login(this.email,this.password).subscribe({
      next:(res)=>{
        this.token=res.token;
        this.status=res.status;
        this.message=res.message;
        this.id=res.user.id;

        if(this.status===200){
          this.cookie.set('token',this.token,7);
          this.cookie.set('id',this.id.toString(),7);
          this.cookie.set('email',this.email,7);
          this.callback=true;

          setTimeout(()=>{
            this.callback=false;
            window.location.href='/index';
          },3000);
        }
      },
      error:(err)=>{
        console.log(err);
        this.messageError="Email/Senha inválidos";
        this.callbackError=true;
        setTimeout(()=>{
          this.callbackError=false;
          window.location.href='/login';
        },3000);
      }
    });
  }
}
