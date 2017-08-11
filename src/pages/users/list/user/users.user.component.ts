import {Component, Input, OnInit} from '@angular/core'
import {UsersService} from "../../../../services/users.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
    selector: 'users-detail',
    templateUrl: './users.user.component.html'
})

export class UsersUserComponent implements OnInit {

    @Input("value")
    public user;

    public id: number;

    constructor(private userService:UsersService, private router: ActivatedRoute,private _location: Location){
    }

}