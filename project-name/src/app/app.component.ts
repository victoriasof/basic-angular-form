import {Component} from '@angular/core';
import {Friend} from './friend';
import {AddFriendService} from './add-friend.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-name';
  /*selected;*/
  languages = ['Javascript', 'PHP', 'Python'];

  friendModel = new Friend ('', '', '', '', '');
  public AddFriendsService: any;
  allFriends: any = [];
  constructor(AddFriendsService: AddFriendService) {
    this.AddFriendsService = AddFriendsService;
  }

  addFriend(): void {

      // observable.subscribe(data => it worked, error => it didn't work)

      this.AddFriendsService.addFriend(this.friendModel).subscribe((data: Friend) => console.log(data));
      console.log(this.friendModel);

  }

}

