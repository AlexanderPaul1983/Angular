import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  http = inject(HttpClient);

  postProfile(userData: Profile){
    return this.http.post<Profile>('http://localhost:4200/profile', userData);
  }

  constructor() { }
}
