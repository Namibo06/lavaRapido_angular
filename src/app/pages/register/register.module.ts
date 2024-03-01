import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { HeaderModule } from '../../shared/header/header.module';
import { FooterModule } from '../../shared/footer/footer.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [RegisterComponent],
  exports:[RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderModule,
    FooterModule,
    RouterModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class RegisterModule { }
