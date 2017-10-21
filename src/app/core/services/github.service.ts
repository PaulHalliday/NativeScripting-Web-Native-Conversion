import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { User } from '../../shared/models/user.model';

@Injectable()
export class GithubService {
  ROOT_URL = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getUserInformation(userId: string): Observable<User> {
    return this.http.get<User>(`${this.ROOT_URL}/users/${userId}`);
  }
}
