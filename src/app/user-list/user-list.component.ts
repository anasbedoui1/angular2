import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-users-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
    new_user: User = {
      username: '', role: '',
      id: 0
    };
newUser: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(users => {
      this.users = users;
    });
  }

  createUser(): void {
    this.userService.createUser(this.newUser).subscribe(() => {
      this.users.push(this.newUser);
      this.newUser = { username: '', role: '' };
    });
  }

  updateUser(user: User): void {
    this.userService.updateUser(user).subscribe(() => {
      // Update the user in the list
      const index = this.users.indexOf(user);
      if (index!== -1) {
        this.users[index] = user;
      }
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      // Remove the user from the list
      this.users = this.users.filter(user => user.id!== id);
    });
  }
}
