import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EducationComponent } from './components/education/education.component';
import { CvPageComponent } from './pages/cv-page/cv-page.component';
import { SkillsComponent } from './components/skills/skills.component';
import { WorkExperianceComponent } from './components/work-experiance/work-experiance.component';
import { JobComponent } from './components/work-experiance/job/job.component';
import { SkillComponent } from './components/skills/skill/skill.component';
import { IdentityComponent } from './components/identity/identity.component';
import { CourseComponent } from './components/education/course/course.component';
import { ScaleComponent } from './components/scale/scale.component';
import { IdentityLinkComponent } from './components/identity/identity-link/identity-link.component';

@NgModule({
  declarations: [
    AppComponent,
    CvPageComponent,
    EducationComponent,
    SkillsComponent,
    WorkExperianceComponent,
    JobComponent,
    SkillComponent,
    IdentityComponent,
    CourseComponent,
    ScaleComponent,
    IdentityLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
