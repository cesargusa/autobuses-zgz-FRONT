import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBusLinesComponent } from './list-bus-lines.component';

describe('ListBusLinesComponent', () => {
  let component: ListBusLinesComponent;
  let fixture: ComponentFixture<ListBusLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBusLinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListBusLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
