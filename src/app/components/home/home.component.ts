import { Component, OnInit } from '@angular/core';
import { Unit } from 'src/app/interfaces/unit';
import { UnitService } from 'src/app/services/unit.service';

@Component({
  selector: 'ctfk-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  selectedUnit:Unit = {
    id: 0,
    title: "",
    starterLink: "Default Starter Link",
    description: "Default Description",
    imageUrl: "/default/img/url",
    link: "/default",
    challenges: []
  }
  constructor(private unitService: UnitService){}
  ngOnInit(): void {
  }


  handleUnitClick(unit: Unit){
    this.selectedUnit = unit;

  }
}
