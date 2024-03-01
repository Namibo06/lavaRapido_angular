import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faSnowflake } from '@fortawesome/free-regular-svg-icons';
import { faArrowUpRightFromSquare, faBolt, faCar, faClipboardCheck, faClock, faSackDollar, faWind } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  wind:IconDefinition=faWind;
  snow:IconDefinition=faSnowflake;
  check:IconDefinition=faClipboardCheck;
  car:IconDefinition=faCar;
  dinheiro:IconDefinition=faSackDollar;
  clean:IconDefinition=faBolt;
  clock:IconDefinition=faClock;
  arrowUpRight:IconDefinition=faArrowUpRightFromSquare;
}
