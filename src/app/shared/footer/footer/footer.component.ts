import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-shared',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css','./footer.responsive.component.css']
})
export class FooterComponent {
  date:number=new Date().getFullYear();
}
