import { Component, VERSION } from '@angular/core';
import { UsersDataService } from './services/users-data.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  users: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((data) => {
      console.log('data', data);
      this.users = data;
    });
  }
}
