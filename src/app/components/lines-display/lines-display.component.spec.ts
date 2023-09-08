import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesDisplayComponent } from './lines-display.component';

describe('LinesDisplayComponent', () => {
  let component: LinesDisplayComponent;
  let fixture: ComponentFixture<LinesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinesDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
