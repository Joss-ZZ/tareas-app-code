import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _usuario : User | null = null;

  constructor() { }

  getUser() {
    return this._usuario;
  }

  isAuthenticated() {
    return (window.localStorage.getItem('user')) ? of(true) : of(false);
  }

  login(user: User) {
    this._usuario = user;
    window.localStorage.setItem('user', JSON.stringify(user));
  }
}
