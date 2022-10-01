import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExpModalComponent } from './edit-exp-modal.component';

describe('EditExpModalComponent', () => {
  let component: EditExpModalComponent;
  let fixture: ComponentFixture<EditExpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditExpModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditExpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
