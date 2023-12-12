import { Component, Input } from '@angular/core';

@Component({
  selector: 'ctfk-colored-circle',
  templateUrl: './colored-circle.component.html',
  styleUrls: ['./colored-circle.component.css']
})
export class ColoredCircleComponent {
  @Input() color: string ='bg-red'
  @Input() tooltipText: string = 'Default Tooltip Text';

}
