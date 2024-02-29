import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderModule } from '../../shared/header/header.module';

import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { FooterModule } from '../../shared/footer/footer.module';



@NgModule({
  declarations: [LoginComponent],
  exports:[LoginComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    FormsModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
