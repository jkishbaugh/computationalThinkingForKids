import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UnitService } from '../../services/unit.service'
import { Unit } from '../../interfaces/unit';

@Component({
  selector: 'ctfk-unit-list',
  templateUrl: './unit-list.component.html'
})
export class UnitListComponent implements OnInit{
  units: Unit[] = []
  @Output() unitClicked = new EventEmitter<any>()

  onUnitClicked(unit: Unit) {
    this.unitClicked.emit(unit);
  }

  constructor(private unitService: UnitService){}
  ngOnInit(): void {
      this.units = this.unitService.getUnits()
  }
}
