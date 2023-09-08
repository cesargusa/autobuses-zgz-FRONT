import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinesDisplayItemComponent } from './lines-display-item.component';

describe('LinesDisplayItemComponent', () => {
  let component: LinesDisplayItemComponent;
  let fixture: ComponentFixture<LinesDisplayItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinesDisplayItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinesDisplayItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
