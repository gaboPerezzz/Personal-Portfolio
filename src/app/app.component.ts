import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './homePage/footer/footer.component';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
declare var bootstrap: any;
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-bootstrap';

  closeOffcanvas() {
    const offcanvasElement = document.getElementById('offcanvasExample');
    const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement); 
    if (offcanvas) {
      offcanvas.hide(); 
    }
  }
}
