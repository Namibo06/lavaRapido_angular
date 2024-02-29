import { Component } from '@angular/core';
import { ApiUserService } from '../../../services/api-user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers:[CookieService]
})
export class LoginComponent {
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

        if(this.status===200){
          this.cookie.set('token',this.token,7);
          this.callback=true;

          setTimeout(()=>{
            this.callback=false;
            window.location.href='/index';
          },3000);
        }
      },
      error:(err)=>{
        console.log(err);
        this.message="Email/Senha inválidos";
        this.callback=true;
        setTimeout(()=>{
          this.callback=false;
          window.location.href='/login';
        },3000);
      }
    });
  }
}
