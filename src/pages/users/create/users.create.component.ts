import {Component} from "@angular/core";
import {UsersService} from "services"
@Component({
    selector: 'users-create',
    templateUrl: './users.create.component.html',
    styleUrls: ['./users.create.component.css']
})
export class UsersCreate {
    public userName:String;
    public email:String;

    constructor(private usersService:UsersService) {

    }

    createUser(){
        this.usersService.createUser(this.userName,this.email);
    }

}