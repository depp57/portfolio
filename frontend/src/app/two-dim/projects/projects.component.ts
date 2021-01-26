import {Component, OnInit} from '@angular/core';
import {Project} from './project';
import {ProjectsService} from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: ProjectsService) {}

  ngOnInit(): void {
    this.projectService.getProjectsFromJSON()
      .then(projects => this.projects = projects);
  }

  getInputText(event: Event | null): string {
    if (event !== null) {
      return (event.target as HTMLInputElement).value;
    }
    return '';
  }
}
