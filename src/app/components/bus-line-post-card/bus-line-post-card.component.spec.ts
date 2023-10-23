import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusLinePostCardComponent } from './bus-line-post-card.component';

describe('BusLinePostCardComponent', () => {
  let component: BusLinePostCardComponent;
  let fixture: ComponentFixture<BusLinePostCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusLinePostCardComponent]
    });
    fixture = TestBed.createComponent(BusLinePostCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
