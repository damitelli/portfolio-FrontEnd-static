import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpModalComponent } from './add-exp-modal.component';

describe('AddExpModalComponent', () => {
  let component: AddExpModalComponent;
  let fixture: ComponentFixture<AddExpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
