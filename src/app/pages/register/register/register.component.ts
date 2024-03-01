import { Component } from '@angular/core';
import { ApiUserService } from '../../../services/api-user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
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
    private service:ApiUserService
  ){

  }

  registrar(){
    if(this.password !== this.confirm_password){
      this.messageError="Senhas não batem";
      this.callbackError=true;

      setTimeout(()=>{
        this.callbackError=false;
        window.location.href='/register';
      },3000);
    }

    this.service.cadastro(this.first_name,this.last_name,this.email,this.phone,this.password).subscribe({
      next:(res)=>{
        console.log(res);
        this.message=res.message;
        this.status=res.status;

        if(this.status===200){
          this.callback=true;

          setTimeout(()=>{
            this.callback=false;
            window.location.href='/login';
          },3000);
        }
      },
      error:(err)=>{
        console.log(err);
        this.messageError="Campo(s) inválido(s)";
        this.callbackError=true;
        setTimeout(()=>{
          this.callbackError=false;
          window.location.href='/register';
        },3000);
      }
    });
  }
}
