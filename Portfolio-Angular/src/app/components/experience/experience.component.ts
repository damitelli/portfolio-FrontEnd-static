import { Component, OnInit } from '@angular/core';
import { ExperienceInterface } from '../../interfaces/experience-interface';
import { ExperienceService } from 'src/app/services/experience.service';
import { Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditExpModalComponent } from '../modals/edit-exp-modal/edit-exp-modal.component';
import { AddExpModalComponent } from '../modals/add-exp-modal/add-exp-modal.component';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceList: ExperienceInterface[] = [];
  suscription: Subscription;


  constructor(private experienceService: ExperienceService, private modalService: NgbModal) {
    this.suscription = this.experienceService.refresh$.subscribe(() => {
      this.getExpData();
    });
  }

  ngOnInit(): void {
    this.getExpData();
  }

  getExpData() {
    this.experienceService.getExperiencesData().subscribe(experienceList => {
      this.experienceList = experienceList;
    })
  }

  updateExpData(expData: ExperienceInterface) {
    this.experienceService.updateExperienceData(expData).subscribe()
  }

  deleteExpData(expData: ExperienceInterface) {
    if (window.confirm('¿Realmente desea borrar?')) {
      this.experienceService.deleteExperienceData(expData).subscribe(() => {
        this.experienceList = this.experienceList.filter((d) => d.id !== expData.id)
      })
    };
  }

  openAddModal() {
    this.modalService.open(AddExpModalComponent, { size: 'lg', windowClass: 'modal-xl' });
  }

  openEditModal(experience: ExperienceInterface) {
    const modalRef = this.modalService.open(EditExpModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    modalRef.componentInstance.experience = experience;
  }

}


