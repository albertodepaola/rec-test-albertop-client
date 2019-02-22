import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TorreUserService {

  constructor(private http: HttpClient) { }

  public getUsersByName(name: string) {
    return this.http.get(`${environment.apiUrl}/api/people?q=${name}`);
  }

  public getUserByUsername(username: string) {
    return this.http.get(`${environment.apiUrl}/api/bios/${username}`);
  }

  public getUserConnectionsByName(username: string, name: string) {
    return this.http.get(`${environment.apiUrl}/api/people/${username}/connections?q=${name}`);
  }
}
