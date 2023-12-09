import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowBlocksComponent } from './know-blocks.component';

describe('KnowBlocksComponent', () => {
  let component: KnowBlocksComponent;
  let fixture: ComponentFixture<KnowBlocksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KnowBlocksComponent]
    });
    fixture = TestBed.createComponent(KnowBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
