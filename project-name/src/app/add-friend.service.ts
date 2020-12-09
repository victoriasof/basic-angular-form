import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Friend} from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  url = 'http://localhost:9000';

  constructor(public http: HttpClient) { }

addFriend(friend: Friend): Observable<Friend>{
  return this.http.post<Friend>(this.url, friend);
}

}
