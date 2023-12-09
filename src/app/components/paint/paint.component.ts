import { Component, OnInit } from '@angular/core';
import { Unit } from '../unit-list/unit';
import { UnitService } from '../unit-list/unit.service';

@Component({
  selector: 'ctfk-paint',
  templateUrl: './paint.component.html',
  styleUrls: ['./paint.component.css']
})
export class PaintComponent implements OnInit{
  unit: Unit = {
    id: 0,
    title: '',
    starterLink: '',
    description: '',
    challenges: [],
    imageUrl: '',
    link: ''
  }
  constructor(private unitService: UnitService){}
  ngOnInit(): void {
    this.unit = this.unitService.getUnits()[3]
  }
}
