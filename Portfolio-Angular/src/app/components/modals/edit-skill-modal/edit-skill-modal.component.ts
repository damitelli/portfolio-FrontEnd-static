import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillsInterface } from 'src/app/interfaces/skills-interface';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-edit-skill-modal',
  templateUrl: './edit-skill-modal.component.html',
  styleUrls: ['./edit-skill-modal.component.css']
})
export class EditSkillModalComponent implements OnInit {

  skill!: SkillsInterface;
  editSkillForm!: FormGroup;

  constructor(private skillService: SkillsService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.editSkillForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      percentage: new FormControl(0, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ]),
    });

    this.editSkillForm.setValue({
      name: this.skill.name,
      percentage: this.skill.percentage,
    });
  }

  get name(): any {
    return this.editSkillForm.get('name');
  }

  get percentage(): any {
    return this.editSkillForm.get('percentage');
  }

  updateSkillData(updatedSkillData: SkillsInterface) {
    const newSkill: SkillsInterface = {
      id: this.skill.id,
      name: updatedSkillData.name,
      percentage: updatedSkillData.percentage,
    }
    this.skillService.updateSkillData(newSkill).subscribe();
  }

}
