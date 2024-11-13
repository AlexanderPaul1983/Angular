import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  http = inject(HttpClient);
  mainApiUrl = 'http://localhost:4200';

  getProfile(){
    return this.http.get<Profile[]>(`${this.mainApiUrl}/profile`);
  }
  constructor() { }
}
