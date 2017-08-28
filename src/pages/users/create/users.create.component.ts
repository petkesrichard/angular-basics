import {Component} from "@angular/core";
import {UsersService} from "services"
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserRolesService} from "../../../services/userRoles.service";

@Component({
    selector: 'users-create',
    templateUrl: './users.create.component.html',
    styleUrls: ['./users.create.component.css']
})
export class UsersCreateComponent    {
    public userName:String;
    public email:String;
    public roles: any[];

    public userCreateForm: FormGroup;

    constructor(
        private usersService:UsersService,private userRolesService:UserRolesService
    ){}

    public ngOnInit() {
        this.userCreateForm = new FormGroup({

            'username': new FormControl(
                null,
                Validators.required,
                null
            ),
            'password': new FormControl(
                null,
                Validators.required,
                null
            ),
            'user_role': new FormControl(
                null,
                Validators.required,
                null
            )
        });

        this.userRolesService.getAllRoles()
            .subscribe(
                (response: Response) => this.roles = response ,
                (error) => { console.log(error) },
                () => { console.log('finally'); }
            );
    }

    createUser(){
        const body = {
            username: this.userCreateForm.value.username,
            password: this.userCreateForm.value.password,
            user_roles_id: this.userCreateForm.value.user_role.id
        }
        console.log("Create USER BODY",body);
        this.usersService.createUser(body)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }


}