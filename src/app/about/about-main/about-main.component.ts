import { Component } from '@angular/core';
import { AboutHeaderComponent } from '../about-header/about-header.component';
import { AboutProfileComponent } from '../about-profile/about-profile.component';

@Component({
  selector: 'app-about-main',
  standalone: true,
  imports: [AboutHeaderComponent, AboutProfileComponent],
  templateUrl: './about-main.component.html',
  styleUrl: './about-main.component.css'
})
export class AboutMainComponent {

}
