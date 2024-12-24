import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private tokenKey = 'jwtToken';

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  deleteToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  updateToken(newToken: string): void {
    this.saveToken(newToken);
  }
}
