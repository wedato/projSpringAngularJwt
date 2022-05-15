import { Component, OnInit } from '@angular/core';
import {User} from "./users.model";
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  listeUsers: User[];

  constructor(public userService: UsersService) {
  }

  ngOnInit() {
    this.getListeUsers();
  }

  getListeUsers() {
    this.userService.getUsers()
      .subscribe({
          next: (data) => this.listeUsers = data
          ,
          error: (e) => console.error(e)
        }
      )

  }

}
