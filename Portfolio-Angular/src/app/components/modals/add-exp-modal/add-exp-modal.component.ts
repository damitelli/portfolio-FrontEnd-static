import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceInterface } from 'src/app/interfaces/experience-interface';
import { ExperienceService } from 'src/app/services/experience.service';


@Component({
  selector: 'app-add-exp-modal',
  templateUrl: './add-exp-modal.component.html',
  styleUrls: ['./add-exp-modal.component.css']
})
export class AddExpModalComponent implements OnInit {

  addExpForm!: FormGroup;

  constructor(public activeModal: NgbActiveModal, private experienceService: ExperienceService) { }

  ngOnInit(): void {
    this.addExpForm = new FormGroup({
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
    return this.addExpForm.get('title')!;
  }

  get description() {
    return this.addExpForm.get('description')!;
  }

  get date() {
    return this.addExpForm.get('date')!;
  }

  get img() {
    return this.addExpForm.get('img')!;
  }

  addExpData(newExperience: ExperienceInterface[]) {
    this.experienceService.addExperienceData(newExperience).subscribe();
  }

}
