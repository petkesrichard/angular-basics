import {Component, Input, OnInit} from "@angular/core";
import {UsersService} from "services";
import { Router, ActivatedRoute } from '@angular/router';

interface User {
    id: number;
    name: string;
    email: string;
}

@Component({
    selector: 'users-list',
    templateUrl: './users.list.component.html',
})
export class UsersListComponent implements OnInit {

    public userList = [];

    ngOnInit() {
        this.userList = this.usersService.getAllUsers();
        console.log(this.userList);
    }

    constructor(private usersService:UsersService, private router:Router) {
        console.log("??? UserList")
    }

    onSelect(user) {
       this.router.navigate(['/users', user.id]);
     }

    updateList(id: number) {
        debugger;
        const selectedItemIndex = this.userList.findIndex((elem) => elem.id === id);

        this.userList.splice(selectedItemIndex, 1);
    }

}