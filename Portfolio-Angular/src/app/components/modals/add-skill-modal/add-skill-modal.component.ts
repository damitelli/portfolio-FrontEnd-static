import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillsInterface } from 'src/app/interfaces/skills-interface';
import { SkillsService } from 'src/app/services/skills.service';

@Component({
  selector: 'app-add-skill-modal',
  templateUrl: './add-skill-modal.component.html',
  styleUrls: ['./add-skill-modal.component.css']
})
export class AddSkillModalComponent implements OnInit {

  addSkillForm!: FormGroup;

  constructor(private skillService: SkillsService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.addSkillForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      percentage: new FormControl(null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(10)
      ])
    });
  }

  get name(): any {
    return this.addSkillForm.get('name')!;
  }

  get percentage(): any {
    return this.addSkillForm.get('percentage')!;
  }

  addSkillData(newskill: SkillsInterface[]) {
    this.skillService.addSkillData(newskill).subscribe();
  }

}
