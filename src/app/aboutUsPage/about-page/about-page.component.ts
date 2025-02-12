import { Component, inject } from '@angular/core';
import { CertsService } from '../../certs.service';
import { Certs } from '../../certs';
import { Inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export class AboutPageComponent {

  certs: Certs[] = [];

  certService: CertsService = inject(CertsService);

   constructor(){
    this.certs = this.certService.getCertDetails();
   }


}
