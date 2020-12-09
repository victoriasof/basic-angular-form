import {Component} from '@angular/core';
import {Friend} from './friend';

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

  addFriend(): void {
      console.log(this.friendModel);

  }

}

