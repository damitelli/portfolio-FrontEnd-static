import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsInterface } from 'src/app/interfaces/projects-interface';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-add-project-modal',
  templateUrl: './add-project-modal.component.html',
  styleUrls: ['./add-project-modal.component.css']
})
export class AddProjectModalComponent implements OnInit {

  addProjectForm!: FormGroup;

  constructor(private projectService: ProjectsService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.addProjectForm = new FormGroup({
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
      projectUrl: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)
      ])
    });
  }

  get title() {
    return this.addProjectForm.get('title')!;
  }

  get description() {
    return this.addProjectForm.get('description')!;
  }

  get date() {
    return this.addProjectForm.get('date')!;
  }

  get img() {
    return this.addProjectForm.get('img')!;
  }

  get projectUrl() {
    return this.addProjectForm.get('projectUrl')!;
  }

  addProjectData(newProject: ProjectsInterface[]) {
    this.projectService.addProjectData(newProject).subscribe();
  }

}
