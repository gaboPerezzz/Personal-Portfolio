import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../project-service.service';
import { Project } from '../../../project';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-project-details',
   imports: [CommonModule, RouterModule],
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
})
export class ProjectDetailsComponent implements OnInit {
  project: Project | null = null; // Ensure project is always either an object or null

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const projectName = params.get('name'); // Match with route param
      if (projectName) {
        this.project = this.projectService.getProjectByName(projectName) || null; // Avoid undefined
        console.log(this.project)
      }
    });
  }
}
