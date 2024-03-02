import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css','./footer.responsive.component.css']
})
export class FooterComponent {
  car:IconDefinition=faCar;
  facebook:IconDefinition=faFacebook;
  twitter:IconDefinition=faTwitter;
  linkedIn:IconDefinition=faLinkedin;



  constructor(){

  }
}
