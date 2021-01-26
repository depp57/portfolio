import {Project} from './project';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ProjectsService {

  constructor(private httpClient: HttpClient) {}

  getProjectsFromJSON(): Promise<Project[]> {
    return this.httpClient.get<Project[]>('assets/projects.json')
      .toPromise()
      .then(projects => {
        projects.forEach(project => project.techsFlatted = project.technologies.reduce((acc, tech) => acc + ' ' + tech));

        return projects;
      });
  }
}
