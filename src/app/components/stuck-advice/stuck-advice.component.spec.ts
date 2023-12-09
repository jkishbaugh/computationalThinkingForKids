import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuckAdviceComponent } from './stuck-advice.component';

describe('StuckAdviceComponent', () => {
  let component: StuckAdviceComponent;
  let fixture: ComponentFixture<StuckAdviceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StuckAdviceComponent]
    });
    fixture = TestBed.createComponent(StuckAdviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
