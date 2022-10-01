import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsInterface } from 'src/app/interfaces/projects-interface';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-edit-project-modal',
  templateUrl: './edit-project-modal.component.html',
  styleUrls: ['./edit-project-modal.component.css']
})
export class EditProjectModalComponent implements OnInit {

  project!: ProjectsInterface;
  editProjectForm!: FormGroup;

  constructor(private projectService: ProjectsService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.editProjectForm = new FormGroup({
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

    this.editProjectForm.setValue({
      title: this.project.title,
      description: this.project.description,
      date: this.project.date,
      img: this.project.img,
      projectUrl: this.project.projectUrl
    });
  }

  get title(): any {
    return this.editProjectForm.get('title');
  }

  get description(): any {
    return this.editProjectForm.get('description');
  }

  get date(): any {
    return this.editProjectForm.get('date');
  }

  get img(): any {
    return this.editProjectForm.get('img');
  }

  get projectUrl(): any {
    return this.editProjectForm.get('projectUrl');
  }

  updateProjectData(updatedProjectData: ProjectsInterface) {
    const newProject: ProjectsInterface = {
      id: this.project.id,
      title: updatedProjectData.title,
      description: updatedProjectData.description,
      date: updatedProjectData.date,
      img: updatedProjectData.img,
      projectUrl: updatedProjectData.projectUrl
    }
    this.projectService.updateProjectData(newProject).subscribe();
  }

}
