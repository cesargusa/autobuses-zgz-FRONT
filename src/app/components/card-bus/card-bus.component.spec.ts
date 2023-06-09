import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBusComponent } from './card-bus.component';

describe('CardBusComponent', () => {
  let component: CardBusComponent;
  let fixture: ComponentFixture<CardBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
