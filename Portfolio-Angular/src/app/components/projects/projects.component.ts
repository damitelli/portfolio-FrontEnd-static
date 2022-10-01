import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsInterface } from 'src/app/interfaces/projects-interface';
import { ProjectsService } from 'src/app/services/projects.service';
import { EditProjectModalComponent } from '../modals/edit-project-modal/edit-project-modal.component';
import { AddProjectModalComponent } from '../modals/add-project-modal/add-project-modal.component';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectsList: ProjectsInterface[] = []
  suscription: Subscription;

  constructor(private projectsService: ProjectsService, private modalService: NgbModal) {
    this.suscription = this.projectsService.refresh$.subscribe(() => {
      this.getProjectsData();
    });
  }

  ngOnInit(): void {
    this.getProjectsData();
  }

  getProjectsData() {
    this.projectsService.getProjectsData().subscribe(projectsList => {
      this.projectsList = projectsList;
    })
  }

  updateProjectData(projectData: ProjectsInterface) {
    this.projectsService.updateProjectData(projectData).subscribe()
  }

  deleteProject(projectData: ProjectsInterface) {
    if (window.confirm('¿Realmente desea borrar?')) {
      this.projectsService.deleteProjectData(projectData).subscribe(() => {
        this.projectsList = this.projectsList.filter((d) => d.id !== projectData.id)
      })
    };
  }

  openAddModal() {
    this.modalService.open(AddProjectModalComponent, { size: 'lg', windowClass: 'modal-xl' });
  }

  openEditModal(project: ProjectsInterface) {
    const modalRef = this.modalService.open(EditProjectModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    modalRef.componentInstance.project = project;
  }

}
