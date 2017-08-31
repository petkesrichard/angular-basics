import {Component, Input, OnInit} from "@angular/core";
import {UsersService} from "services";
import { Router, ActivatedRoute } from '@angular/router';



@Component({
    selector: 'users-list',
    templateUrl: './users.list.component.html',
})
export class UsersListComponent implements OnInit {

    public userList = [];

    ngOnInit() {
        this.usersService.getAllUsers()
            .subscribe(
                (response: Response) => {
                    this.userList = response;
                    console.log(this.userList);
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    console.log('finally');
                }
            );
    }

    constructor(private usersService:UsersService, private router:Router) {
    }

    onSelect(user) {
       this.router.navigate(['/users', user.id]);
     }


    updateList(id: number) {
        const selectedItemIndex = this.userList.findIndex((elem) => elem.id === id);

        this.userList.splice(selectedItemIndex, 1);
    }

}