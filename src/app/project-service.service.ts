import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private projects: Project[] = [
    {
      name: "Don't Look Up",
      image: ["/images/choo.jpg"],
      desc: "A painting is on display in a café in Angeles City, created as a passion project and showcased as part of an exhibition.",
      category: "visual-art",
      tools: ["Acrylic Paint", "Canvas"]
    },
    {
      name: "Princess Peach",
      image: ["/images/artsPic/peach.jpg"],
      desc: "This painting was given as a birthday gift to someone special, created with deep sentiment and personal meaning. ",
      category: "visual-art",
      tools: ["Acrylic Paint", "Oil Pastel", "Canvas"]
    },
    {
      name: "Arko Jeep",
      image: ["/images/artsPic/jeep.jpg"],
      desc: "Designed and conceptualized as the SOC's entry for UDAYS 2024.",
      category: "visual-art",
      tools: ["Acrylic Paint", "Canvas", "newspaper"]
    },
    {
      name: "Thumbnail Edit",
      image: ["/images/digital/burg.jpg"],
      desc: "A commissioned thumbnail design created for Burg, a well-known streamer, for his YouTube video.",
      category: "digital-art",
      tools: ["Photoshop"]
    },
    {
      name: "Glow Up",
      image: ["/images/digital/space.jpg"],
      desc: "This poster was created as an entry for a graphic design organization audition during senior high school.",
      category: "digital-art",
      tools: ["Photoshop"]
    },
    {
      name: "Business Card",
      image: ["/images/digital/card.png"],
      desc: "A mockup design of a personal business card.",
      category: "digital-art",
      tools: ["Photoshop", "Illustrator"]
    },
    {
      name: "Code Geeks",
      image: ["/images/webDesign/CodeGeeksLanding.png", "/images/webDesign/codegeeksOfficers.png"],
      desc: " A WordPress project created for the WSEA subject, designed to serve as the official website for the Code Geeks organization.",
      category: "web-design",
      tools: ["Wordpress" , "Elementor"],
      livedemolink: "https://codegeeks.site"
    },
    {
      name: "Artfolio",
      image: ["/images/webDesign/ArtfolioHome.png", "/images/webDesign/ArtfolioContact.png"],
      desc: "A project built using the MEVN stack, marking the first time designing a web application with a framework.",
      category: "web-design",
      tools: ["HTML", "CSS", "JavaScript"],
      livedemolink: "https://artfolioproject.netlify.app"
    },
    {
      name: "Stitches By Luna",
      image: ["/images/webDesign/SBLlanding.png", "/images/webDesign/SBLproducts.png"],
      desc: "The first client-based web application design, incorporating a colorful and playful theme to reflect the business's identity.",
      category: "web-design",
      tools: ["HTML", "CSS", "JavaScript, Adobe Photoshop, Adobe Lightroom"],
      livedemolink: "https://stitchesbyluna.netlify.app"
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
