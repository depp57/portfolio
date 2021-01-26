import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TwoDimComponent} from './two-dim.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProjectComponent} from './project/project.component';
import {ResumeComponent} from './resume/resume.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {
    path: '', component: TwoDimComponent, children:
      [
        {path: 'me', component: AboutMeComponent},
        {path: 'projects', component: ProjectsComponent},
        {path: 'projects/:id', component: ProjectComponent},
        {path: 'resume', component: ResumeComponent},
        {path: 'contact', component: ContactComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoDimRoutingModule {}
