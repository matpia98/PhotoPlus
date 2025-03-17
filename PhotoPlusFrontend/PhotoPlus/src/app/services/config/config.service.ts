import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = environment.hostAddress;

    if (environment.production) {
      if (window.location.hostname !== 'localhost') {
        const currentOrigin = window.location.origin;
        this.apiUrl = currentOrigin.replace(/:\d+$/, '') + ':8090/';
      }
    }

    console.log('API URL: ' + this.apiUrl);
  }

  getApiUrl(): string {
    return this.apiUrl;
  }
}
