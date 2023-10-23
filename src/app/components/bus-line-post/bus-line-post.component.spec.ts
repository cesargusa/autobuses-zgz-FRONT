import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusLinePostComponent } from './bus-line-post.component';

describe('BusLinePostComponent', () => {
  let component: BusLinePostComponent;
  let fixture: ComponentFixture<BusLinePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusLinePostComponent]
    });
    fixture = TestBed.createComponent(BusLinePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
