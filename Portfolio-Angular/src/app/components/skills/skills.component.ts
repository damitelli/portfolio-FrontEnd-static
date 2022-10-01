import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { SkillsInterface } from '../../interfaces/skills-interface';
import { SkillsService } from '../../services/skills.service';
import { EditSkillModalComponent } from '../modals/edit-skill-modal/edit-skill-modal.component';
import { AddSkillModalComponent } from '../modals/add-skill-modal/add-skill-modal.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsList: SkillsInterface[] = [];
  suscription: Subscription;

  constructor(private skillsService: SkillsService, private modalService: NgbModal) {
    this.suscription = this.skillsService.refresh$.subscribe(() => {
      this.getSkillsData();
    });
  }

  ngOnInit(): void {
    this.getSkillsData();
  }

  getSkillsData() {
    this.skillsService.getSkillsData().subscribe(skillsList => {
      this.skillsList = skillsList;
    })
  }

  updateSkillData(skillData: SkillsInterface) {
    this.skillsService.updateSkillData(skillData).subscribe()
  }

  deleteSkill(skillData: SkillsInterface) {
    if (window.confirm('¿Realmente desea borrar?')) {
      this.skillsService.deleteSkill(skillData).subscribe(() => {
        this.skillsList = this.skillsList.filter((s) => s.id !== skillData.id)
      })
    };
  }
  openAddModal() {
    this.modalService.open(AddSkillModalComponent, { size: 'lg', windowClass: 'modal-xl' });
  }

  openEditModal(skill: SkillsInterface) {
    const modalRef = this.modalService.open(EditSkillModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    modalRef.componentInstance.skill = skill;
  }

}
