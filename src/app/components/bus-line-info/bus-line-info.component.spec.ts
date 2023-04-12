import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusLineInfoComponent } from './bus-line-info.component';

describe('BusLineInfoComponent', () => {
  let component: BusLineInfoComponent;
  let fixture: ComponentFixture<BusLineInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusLineInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusLineInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
