import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinitoolbarComponent } from './minitoolbar.component';

describe('MinitoolbarComponent', () => {
  let component: MinitoolbarComponent;
  let fixture: ComponentFixture<MinitoolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MinitoolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MinitoolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
