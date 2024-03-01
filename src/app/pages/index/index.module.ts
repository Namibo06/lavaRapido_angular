import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HeaderModule } from './index/components/header/header.module';
import { FooterModule } from './index/components/footer/footer.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  exports:[IndexComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ]
})
export class IndexModule { }
