import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { EducationInterface } from 'src/app/interfaces/education-interface';
import { EducationService } from 'src/app/services/education.service';
import { EditEduModalComponent } from '../modals/edit-edu-modal/edit-edu-modal.component';
import { AddEduModalComponent } from '../modals/add-edu-modal/add-edu-modal.component';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: EducationInterface[] = [];
  suscription: Subscription;

  constructor(private EducationService: EducationService, private modalService: NgbModal) {
    this.suscription = this.EducationService.refresh$.subscribe(() => {
      this.getEduData();
    });
  }

  ngOnInit(): void {
    this.getEduData();
  }

  getEduData() {
    this.EducationService.getEducationData().subscribe(educationList => {
      this.educationList = educationList;
    })
  }

  updateEduData(eduData: EducationInterface) {
    this.EducationService.updateEducationData(eduData).subscribe()
  }

  deleteEduData(education: EducationInterface) {
    if (window.confirm('¿Realmente desea borrar?')) {
      this.EducationService.deletePortfolioEducation(education).subscribe(() => {
        this.educationList = this.educationList.filter((e) => e.id !== education.id)
      });
    };
  }

  openAddModal() {
    this.modalService.open(AddEduModalComponent, { size: 'lg', windowClass: 'modal-xl' });
  }

  openEditModal(education: EducationInterface) {
    const modalRef = this.modalService.open(EditEduModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    modalRef.componentInstance.education = education;
  }

}
