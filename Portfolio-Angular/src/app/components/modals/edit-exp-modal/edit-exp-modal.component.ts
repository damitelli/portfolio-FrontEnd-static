import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ExperienceInterface } from 'src/app/interfaces/experience-interface';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-edit-exp-modal',
  templateUrl: './edit-exp-modal.component.html',
  styleUrls: ['./edit-exp-modal.component.css']
})
export class EditExpModalComponent implements OnInit {

  experience!: ExperienceInterface;
  editExpForm!: FormGroup;

  constructor(private experienceService: ExperienceService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.editExpForm = new FormGroup({
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

    this.editExpForm.setValue({
      title: this.experience.title,
      description: this.experience.description,
      date: this.experience.date,
      img: this.experience.img
    });
  }

  get title(): any {
    return this.editExpForm.get('title');
  }

  get description(): any {
    return this.editExpForm.get('description');
  }

  get date(): any {
    return this.editExpForm.get('date');
  }

  get img(): any {
    return this.editExpForm.get('img');
  }

  updateExpData(updatedExpData: ExperienceInterface) {
    const newExperience: ExperienceInterface = {
      id: this.experience.id,
      title: updatedExpData.title,
      description: updatedExpData.description,
      date: updatedExpData.date,
      img: updatedExpData.img
    }
    this.experienceService.updateExperienceData(newExperience).subscribe();
  }

}
