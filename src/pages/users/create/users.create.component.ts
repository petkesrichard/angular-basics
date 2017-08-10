import {Component} from "@angular/core";
import {UsersService} from "services"
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'users-create',
    templateUrl: './users.create.component.html',
    styleUrls: ['./users.create.component.css']
})
export class UsersCreateComponent    {
    public userName:String;
    public email:String;

    public userCreateForm: FormGroup;

    constructor(
        private usersService:UsersService,
    ){}

    public ngOnInit() {
        // 1st step
        this.userCreateForm = new FormGroup({
            // 2nd step
            'userName': new FormControl(
                null,
                Validators.required,
                null
            ),
            'password': new FormControl(
                null,
                Validators.required,
                null
            )
        });
    }

    createUser(){
        this.usersService.createUser(this.userName,this.email);
    }

}