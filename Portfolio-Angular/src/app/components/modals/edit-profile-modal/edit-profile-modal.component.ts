import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileInterface } from 'src/app/interfaces/profile-interface';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-edit-profile-modal',
  templateUrl: './edit-profile-modal.component.html',
  styleUrls: ['./edit-profile-modal.component.css']
})
export class EditProfileModalComponent implements OnInit {

  info!: ProfileInterface;
  editProfileForm!: FormGroup;

  constructor(private profileService: ProfileService, public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.editProfileForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      profession: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      location: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      about: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)
      ]),
      pic: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)
      ]),
      cover: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(1000)
      ])
    });

    this.editProfileForm.setValue({
      cover: this.info.cover,
      pic: this.info.pic,
      name: this.info.name,
      profession: this.info.profession,
      location: this.info.location,
      about: this.info.about
    });
  }

  get name(): any {
    return this.editProfileForm.get('name');
  }

  get location(): any {
    return this.editProfileForm.get('location');
  }

  get profession(): any {
    return this.editProfileForm.get('profession');
  }

  get about(): any {
    return this.editProfileForm.get('about');
  }

  get pic(): any {
    return this.editProfileForm.get('pic');
  }

  get cover(): any {
    return this.editProfileForm.get('cover');
  }

  updateProfileData(updatedProfileData: ProfileInterface) {
    const newProfile: ProfileInterface = {
      id: this.info.id,
      cover: updatedProfileData.cover,
      pic: updatedProfileData.pic,
      name: updatedProfileData.name,
      profession: updatedProfileData.profession,
      location: updatedProfileData.location,
      about: updatedProfileData.about
    }

    this.profileService.updateProfileData(newProfile).subscribe();
  }
}
