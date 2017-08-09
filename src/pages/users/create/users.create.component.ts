import {Component} from "@angular/core";
import {UsersService} from "services"
@Component({
    selector: 'users-create',
    templateUrl: './users.create.component.html'
})
export class UsersCreate {
    public username:String;
    public email:String;

    constructor(private usersService:UsersService) {

    }

    createUser(){
        this.usersService.createUser(this.username,this.email);
    }

}