import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredCircleComponent } from './colored-circle.component';

describe('ColoredCircleComponent', () => {
  let component: ColoredCircleComponent;
  let fixture: ComponentFixture<ColoredCircleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColoredCircleComponent]
    });
    fixture = TestBed.createComponent(ColoredCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
