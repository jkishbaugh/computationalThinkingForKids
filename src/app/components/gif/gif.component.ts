import { Component, OnInit } from '@angular/core';
import { Unit } from '../../interfaces/unit';
import { UnitService } from '../../services/unit.service';

@Component({
  selector: 'ctfk-gif',
  templateUrl: './gif.component.html',
  styleUrls: ['./gif.component.css']
})
export class GifComponent implements OnInit{
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
     this.unit = this.unitService.getUnits()[2]
  }

}
