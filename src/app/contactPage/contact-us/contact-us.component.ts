import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface contactDetails {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'] // Fixed 'styleUrls' instead of 'styleUrl'
})
export class ContactUsComponent {
  linkedinUrl: string = "https://www.linkedin.com/in/john-gabriel-perez/";
  emailUrl: string = "mailto:johngabrieltperez@gmail.com";
  instaUrl: string = "https://www.instagram.com/perezjgs_/"

  openLink(url: string): void {
    window.open(url, "_blank");
  }

  form: contactDetails = {
    name: '',
    email: '',
    message: '',
  };

  send() {
    if (!this.form.name  || !this.form.email  || !this.form.message) {
      alert('Please fill in all fields.');
      return;
    }

    emailjs
      .send(
        'service_dkmvdod', // EmailJS Service ID
        'template_i35mcml', // EmailJS Template ID
        {
          name: this.form.name,
          email: this.form.email,
          message: this.form.message,
        },
        'NahaF3AMvxaOT2EkS' // EmailJS Public Key
      )
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert('Message sent successfully!');
      })
      .catch((error) => {
        console.error('Email failed to send:', error);
        alert('Error sending message. Please try again later.');
      });
  }
}