import {Component} from '@angular/core';
/*import {Friend} from "./friend";*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-name';
  /*selected;*/
  languages = [
    {
      name: 'Javascript'
    },
    {
      name: 'PHP'
    },

    {
      name: 'Python'
    }
  ];

  /*friendModel = new Friend ("","","","","")*/

}

