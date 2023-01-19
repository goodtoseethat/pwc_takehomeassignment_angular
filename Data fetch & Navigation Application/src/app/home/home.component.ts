import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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