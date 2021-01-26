import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
  name: string;

  constructor(private route: ActivatedRoute) {
    this.name = this.route.snapshot.params['id'];
  }
}
