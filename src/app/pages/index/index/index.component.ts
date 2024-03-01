import { Component } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faArrowUpRightFromSquare, faBolt, faClock, faSackDollar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
 dinheiro:IconDefinition=faSackDollar;
 clean:IconDefinition=faBolt;
 clock:IconDefinition=faClock;
 arrowUpRight:IconDefinition=faArrowUpRightFromSquare;
}
