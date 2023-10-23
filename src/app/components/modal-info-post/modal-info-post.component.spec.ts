import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoPostComponent } from './modal-info-post.component';

describe('ModalInfoPostComponent', () => {
  let component: ModalInfoPostComponent;
  let fixture: ComponentFixture<ModalInfoPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalInfoPostComponent]
    });
    fixture = TestBed.createComponent(ModalInfoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
