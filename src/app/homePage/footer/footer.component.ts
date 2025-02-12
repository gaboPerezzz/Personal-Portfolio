import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'] 
})
export class FooterComponent {
  userEmail = '';
  isSubscribed = false;
  emailValidation = false;

  subscribe() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    if (emailPattern.test(this.userEmail)) {
      this.isSubscribed = true;
      this.emailValidation = false;
    } else {
      this.emailValidation = true;
      this.isSubscribed = false;
    }
  }
}
