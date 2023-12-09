import { Component, OnInit } from '@angular/core';
import { Unit } from '../unit-list/unit';
import { UnitService } from '../unit-list/unit.service';

@Component({
  selector: 'ctfk-pong',
  templateUrl: './pong.component.html',
  styleUrls: ['./pong.component.css']
})
export class PongComponent implements OnInit{
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
    this.unit = this.unitService.getUnits()[0]
  }

}
