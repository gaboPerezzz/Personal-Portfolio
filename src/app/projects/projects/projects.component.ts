import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  hoveredSection: string | null = null; // Track which section is hovered

  setHover(section: string) {
    this.hoveredSection = section;
  }

  removeHover() {
    this.hoveredSection = null;
  }
}

