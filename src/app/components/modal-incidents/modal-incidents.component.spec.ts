import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { ModalIncidentsComponent } from './modal-incidents.component';

describe('ModalIncidentsComponent', () => {
  let component: ModalIncidentsComponent;
  let fixture: ComponentFixture<ModalIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalIncidentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
