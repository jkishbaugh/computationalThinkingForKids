import { Component, Input } from '@angular/core';
import { Unit } from 'src/app/interfaces/unit';

@Component({
  selector: 'ctfk-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent {
  @Input() unit: Unit = {
    id: 0,
    title: "Default Title",
    starterLink: "Default Starter Link",
    description: "Default Description",
    imageUrl: "/default/img/url",
    link: "/default",
    challenges: []
  }
}
