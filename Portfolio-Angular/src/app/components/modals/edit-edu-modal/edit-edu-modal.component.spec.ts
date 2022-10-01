import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEduModalComponent } from './edit-edu-modal.component';

describe('EditEduModalComponent', () => {
  let component: EditEduModalComponent;
  let fixture: ComponentFixture<EditEduModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEduModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEduModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
