import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      name: "Don't Look Up",
      image: "/images/choo.jpg",
      desc: " ",
      category: "visual-art",
      tools: ["Acrylic Paint", "Canvas"]
    },
    {
      name: "Princess Peach",
      image: "/images/artsPic/peach.jpg",
      desc: " ",
      category: "visual-art",
      tools: ["Acrylic Paint", "Canvas"]
    },
    {
      name: "Arko Jeep",
      image: "/images/artsPic/jeep.jpg",
      desc: " ",
      category: "visual-art",
      tools: ["Acrylic Paint", "Canvas"]
    },
    {
      name: "Thumbnail Edit",
      image: "/images/digital/burg.jpg",
      desc: "Digital artwork",
      category: "digital-art",
      tools: ["Photoshop"]
    },
    {
      name: "Glow Up",
      image: "/images/digital/space.jpg",
      desc: "Digital artwork",
      category: "digital-art",
      tools: ["Photoshop"]
    },
    {
      name: "Business Card",
      image: "/images/digital/card.png",
      desc: "Digital artwork",
      category: "digital-art",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      name: "Web Design",
      image: "/images/choo.jpg",
      desc: "This project is a...",
      category: "web-design",
      tools: ["Figma", "Adobe XD"]
    }
  ];

  constructor() {}

  getProjectsByCategory(category: string): Project[] {
    return this.projects.filter(project => project.category === category);
  }

  getProjectByName(name: string): Project | undefined {
    return this.projects.find(project => project.name === name);
  }

  getAllProjects(): Project[] {
    return this.projects;
  }
}
