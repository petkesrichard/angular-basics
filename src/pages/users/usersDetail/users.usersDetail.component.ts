import {Component, OnInit} from '@angular/core'
import {UsersService} from "../../../services/users.service";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'users-detail',
    templateUrl: './users.usersDetail.component.html'
})

export class UsersDetail implements OnInit {

    public user;
    public id: number;

    constructor(private userService:UsersService, private router: ActivatedRoute){

    }

    ngOnInit() {
        this.id = + this.router.params.value.id;
        this.user = this.userService.getUserById(this.id);
    }

}