import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { HeaderModule } from './index/components/header/header.module';
import { FooterModule } from './index/components/footer/footer.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {register} from 'swiper/element/bundle';
register();
import { NgxMaskDirective,NgxMaskPipe, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { IConfig } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

const maskConfig:Partial<IConfig>={
  validation:false,
};

@NgModule({
  declarations: [
    IndexComponent
  ],
  exports:[IndexComponent],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    FontAwesomeModule,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule
  ],
  providers:[
    provideEnvironmentNgxMask(maskConfig),
    provideNgxMask()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class IndexModule { }
