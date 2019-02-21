import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TorreUserService {

  constructor(private http: HttpClient) { }

  public getUsersByName(name: string) {
    return this.http.get(`https://torre.bio/api/people?q=${name}`);
  }

  public getUserByUsername(username: string) {
    return this.http.get(`https://torre.bio/api/bios/${username}`);
  }

  public getUserConnectionsByName(username: string, name: string) {
    return this.http.get(`https://torre.bio/api/people/${username}/connections?q=${name}`);
  }
}
