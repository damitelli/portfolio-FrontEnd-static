import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEduModalComponent } from './add-edu-modal.component';

describe('AddEduModalComponent', () => {
  let component: AddEduModalComponent;
  let fixture: ComponentFixture<AddEduModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEduModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEduModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
