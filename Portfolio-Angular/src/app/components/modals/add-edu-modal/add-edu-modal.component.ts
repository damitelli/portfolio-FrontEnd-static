import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EducationInterface } from 'src/app/interfaces/education-interface';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-add-edu-modal',
  templateUrl: './add-edu-modal.component.html',
  styleUrls: ['./add-edu-modal.component.css']
})
export class AddEduModalComponent implements OnInit {

  addEduForm!: FormGroup;

  constructor(private educationService: EducationService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.addEduForm = new FormGroup({
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
      ]),
    });
  }

  get title() {
    return this.addEduForm.get('title')!;
  }

  get description() {
    return this.addEduForm.get('description')!;
  }

  get date() {
    return this.addEduForm.get('date')!;
  }

  get img() {
    return this.addEduForm.get('img')!;
  }

  addEduData(newEducation: EducationInterface[]) {
    this.educationService.addEducationData(newEducation).subscribe();
  }
}
