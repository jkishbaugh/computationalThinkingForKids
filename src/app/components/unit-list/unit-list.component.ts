import { Component, OnInit } from '@angular/core';
import { UnitService } from './unit.service'
import { Unit } from './unit';

@Component({
  selector: 'ctfk-unit-list',
  templateUrl: './unit-list.component.html'
})
export class UnitListComponent implements OnInit{
  units: Unit[] = []

  constructor(private unitService: UnitService){}
  ngOnInit(): void {
      this.units = this.unitService.getUnits()
  }
}
