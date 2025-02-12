import { Injectable } from '@angular/core';
import { Certs } from './certs';

@Injectable({
  providedIn: 'root'
})
export class CertsService {
private certsDetails: Certs[] = [
  {
    certImg: '/images/certs/certFCC.png',
    certName:'responsive web design',
    certProvider: 'FreeCodeCamp',
    certDate: 'January 2024',
    certFile: '/files/certs/John Gabriel T. Perez - Responsive Web Design FreeCodeCamp.pdf'
  }
]
  constructor() { }

  getCertDetails(): Certs[] {
    return this.certsDetails;
  }
}
