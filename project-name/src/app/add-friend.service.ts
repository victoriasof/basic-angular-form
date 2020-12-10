import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Friend} from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  url = 'http://localhost:9000/postFriend';

  constructor(private http: HttpClient) { }

postFriend(friend: Friend): Observable<any>{
  return this.http.post<any>(this.url, friend);
}

}
