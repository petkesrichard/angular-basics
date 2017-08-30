import {Component} from '@angular/core'
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})



export class LoginComponent {

    public loginForm: FormGroup;

    public user;

    constructor(private loginService:LoginService, private router: Router){}

    ngOnInit() {
        this.loginForm = new FormGroup({
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
        });
    }

    public checkUser() {
        console.log(this.loginForm.value);
        const username = this.loginForm.value.username;
        const password = this.loginForm.value.password;

        this.loginService.login(username, password)
            .subscribe(
                (successResponse) => console.log(successResponse),
                (error) => console.log(error),
            );
    }
}