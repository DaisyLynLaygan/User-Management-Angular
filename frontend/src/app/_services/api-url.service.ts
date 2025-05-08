import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiUrlService {
  private _apiUrl: string;

  constructor() {
    // Check if we're in production and possibly running on Vercel
    if (environment.production) {
      // If on Vercel, use Render backend
      if (window.location.hostname.includes('vercel.app')) {
        this._apiUrl = 'https://user-management-angular.onrender.com';
      } 
      // If on Render frontend, use Render backend
      else if (window.location.hostname.includes('onrender.com')) {
        this._apiUrl = 'https://user-management-angular.onrender.com';
      }
      // Fallback to environment config
      else {
        this._apiUrl = environment.apiUrl;
      }
    } 
    // In development, use the environment config
    else {
      this._apiUrl = environment.apiUrl;
    }
  }

  get apiUrl(): string {
    return this._apiUrl;
  }
} 