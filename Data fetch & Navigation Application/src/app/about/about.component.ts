import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  users: any;
  constructor(private userData: UsersDataService) {
    userData.users().subscribe((data) => {
      console.log('data', data);
      this.users = data;
    });
  }

  ngOnInit() {
  }

}