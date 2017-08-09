import {Component, OnInit} from "@angular/core";
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
    public usersList: any[];;

    constructor(private usersService:UsersService, private router:Router) {

    }

    onSelect(user) {
       this.router.navigate(['/users', user.id]);
     }


    ngOnInit() {
        setTimeout(() => {
            this.usersList = this.usersService.getAllUsers();
        }, 3000);
    }
}