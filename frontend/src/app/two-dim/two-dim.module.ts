import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {DataViewModule} from 'primeng/dataview';
import {RippleModule} from 'primeng/ripple';
import {InputTextModule} from 'primeng/inputtext';
import {HttpClientModule} from '@angular/common/http';
import {CardModule} from 'primeng/card';
import {EditorModule} from 'primeng/editor';
import {FormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {PdfViewerModule} from 'ng2-pdf-viewer';

import {TwoDimRoutingModule} from './two-dim-routing.module';
import {TwoDimComponent} from './two-dim.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ContactComponent} from './contact/contact.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {ProjectComponent} from './project/project.component';
import {ProjectsComponent} from './projects/projects.component';
import {ResumeComponent} from './resume/resume.component';
import {MessageService} from 'primeng/api';
import {ProjectsService} from './projects/projects.service';
import {EmailMeService} from './contact/email-me.service';
import {AnimatedNameComponent} from './about-me/animated-name/animated-name.component';

@NgModule({
  declarations: [
    TwoDimComponent,
    AboutMeComponent,
    ContactComponent,
    NavBarComponent,
    ProjectComponent,
    ProjectsComponent,
    ResumeComponent,
    AnimatedNameComponent
  ],
  imports: [
    CommonModule,
    TwoDimRoutingModule,
    PdfViewerModule,
    ButtonModule,
    RippleModule,
    DataViewModule,
    InputTextModule,
    HttpClientModule,
    CardModule,
    EditorModule,
    FormsModule,
    ToastModule
  ],
  providers: [ProjectsService, EmailMeService, MessageService]
})
export class TwoDimModule {}
