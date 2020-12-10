import {Component, OnInit} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';
// import {HttpClient} from '@angular/common/http';
// import {HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'project-name';
  /*selected;*/
  languages = ['Javascript', 'PHP', 'Python'];

  friendModel = new Friend ('', '', '', '', '');

  private AddFriendsService: any;
  public allFriends: any = [];

  constructor(AddFriendsService: AddFriendService) {
    // this.AddFriendsService = AddFriendsService;
  }
  onSubmit(): void {
    console.log('click');
    // observable.subscribe(data => it worked, error => it didn't work)
    this.AddFriendsService.postFriend(this.friendModel)
      .subscribe(
        (success: any) => console.log('it worked'),
        (error: any) => console.log(error)
      );
  }
  /*
  async getAllFriends(url: string): Promise<any>{
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    this.allFriends = data;
    return data;
  }
  */
  ngOnInit(): any{
    console.log('something');
    // this.getAllFriends('http://localhost:9000/allFriends');
  }
}

