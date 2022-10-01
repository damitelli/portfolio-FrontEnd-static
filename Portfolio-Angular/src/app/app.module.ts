import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { BtnEditComponent } from './components/btn-edit/btn-edit.component';
import { BtnDeleteComponent } from './components/btn-delete/btn-delete.component';
import { BtnAddComponent } from './components/btn-add/btn-add.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { AddExpModalComponent } from './components/modals/add-exp-modal/add-exp-modal.component';
import { EditExpModalComponent } from './components/modals/edit-exp-modal/edit-exp-modal.component';
import { EditEduModalComponent } from './components/modals/edit-edu-modal/edit-edu-modal.component';
import { AddEduModalComponent } from './components/modals/add-edu-modal/add-edu-modal.component';
import { EditSkillModalComponent } from './components/modals/edit-skill-modal/edit-skill-modal.component';
import { AddSkillModalComponent } from './components/modals/add-skill-modal/add-skill-modal.component';
import { EditProjectModalComponent } from './components/modals/edit-project-modal/edit-project-modal.component';
import { AddProjectModalComponent } from './components/modals/add-project-modal/add-project-modal.component';
import { EditProfileModalComponent } from './components/modals/edit-profile-modal/edit-profile-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ProjectsComponent,
    BtnEditComponent,
    BtnDeleteComponent,
    BtnAddComponent,
    AddExpModalComponent,
    EditExpModalComponent,
    EditEduModalComponent,
    AddEduModalComponent,
    EditSkillModalComponent,
    AddSkillModalComponent,
    EditProjectModalComponent,
    AddProjectModalComponent,
    EditProfileModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
