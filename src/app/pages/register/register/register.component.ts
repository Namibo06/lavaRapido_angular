import { Component } from '@angular/core';

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

  constructor(){

  }

  registrar(){
    
  }
}
