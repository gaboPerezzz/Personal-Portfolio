import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../project-service.service';
import { Project } from '../../../project';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-project-works',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-works.component.html',
  styleUrls: ['./project-works.component.css']  // ✅ Fixed the incorrect property name
})
export class ProjectWorksComponent implements OnInit {
  category: string = '';
  projects: Project[] = [];

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category') || '';  // ✅ Get category from URL
      console.log('Category from route:', this.category);

      if (this.category) {
        this.projects = this.projectService.getProjectsByCategory(this.category);
        console.log('Fetched projects:', this.projects);  // ✅ Log the projects for debugging
      }
    });
  }
}
