import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EducationInterface } from 'src/app/interfaces/education-interface';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-edit-edu-modal',
  templateUrl: './edit-edu-modal.component.html',
  styleUrls: ['./edit-edu-modal.component.css']
})
export class EditEduModalComponent implements OnInit {

  education!: EducationInterface;
  editEduForm!: FormGroup;

  constructor(private educationService: EducationService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.editEduForm = new FormGroup({
      title: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      description: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)
      ]),
      date: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      img: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)
      ])
    });

    this.editEduForm.setValue({
      title: this.education.title,
      description: this.education.description,
      date: this.education.date,
      img: this.education.img
    });
  }

  get title(): any {
    return this.editEduForm.get('title');
  }

  get description(): any {
    return this.editEduForm.get('description');
  }

  get date(): any {
    return this.editEduForm.get('date');
  }

  get img(): any {
    return this.editEduForm.get('img');
  }

  updateEduData(updatedEduData: EducationInterface) {
    const newEducation: EducationInterface = {
      id: this.education.id,
      title: updatedEduData.title,
      description: updatedEduData.description,
      date: updatedEduData.date,
      img: updatedEduData.img
    }
    this.educationService.updateEducationData(newEducation).subscribe();
  }

}
