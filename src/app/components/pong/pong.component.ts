import { Component, OnInit } from '@angular/core';
import { Unit } from '../../interfaces/unit';
import { UnitService } from '../../services/unit.service';

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
    imageUrl: '',
    link: '',
    challenges: []
  }
  constructor(private unitService: UnitService){}
  ngOnInit(): void {
    this.unit = this.unitService.getUnits()[0]
  }

}
