import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmatSpinnerOverlayComponent } from './dmat-spinner-overlay.component';

describe('DmatSpinnerOverlayComponent', () => {
  let component: DmatSpinnerOverlayComponent;
  let fixture: ComponentFixture<DmatSpinnerOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmatSpinnerOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DmatSpinnerOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
