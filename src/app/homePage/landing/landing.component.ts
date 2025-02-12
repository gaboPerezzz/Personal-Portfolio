import { Component } from '@angular/core';
import { OverviewComponent } from "../overview/overview.component";
import { RouterLink } from '@angular/router';
import { Router, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OverviewComponent, RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class HomeComponent {
  logo = 'images/jgLogo.png'
  homeHeader1 = 'images/me.jpg'
  homeHeader2 = 'images/header-photo.jpg'
  homeHeader3 = 'images/choo.jpg'

}
