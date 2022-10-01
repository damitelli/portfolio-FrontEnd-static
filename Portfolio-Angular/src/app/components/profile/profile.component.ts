import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ProfileInterface } from 'src/app/interfaces/profile-interface';
import { ProfileService } from 'src/app/services/profile.service';
import { EditProfileModalComponent } from '../modals/edit-profile-modal/edit-profile-modal.component';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileInfo: ProfileInterface[] = []
  suscription: Subscription;

  constructor(private profileService: ProfileService, private modalService: NgbModal) {
    this.suscription = this.profileService.refresh$.subscribe(() => {
      this.getProfileData();
    });
  }

  ngOnInit(): void {
    this.getProfileData();
  }

  getProfileData() {
    this.profileService.getProfileData().subscribe(profileInfo => {
      this.profileInfo = profileInfo;
    })
  }

  updateProfileData(ProfileData: ProfileInterface) {
    this.profileService.updateProfileData(ProfileData).subscribe()
  }

  openEditModal(info: ProfileInterface) {
    const modalRef = this.modalService.open(EditProfileModalComponent, { size: 'lg', windowClass: 'modal-xl' });
    modalRef.componentInstance.info = info;
  }

}
