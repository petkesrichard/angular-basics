import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {UsersService} from "../../../../services/users.service";
import {ActivatedRoute} from "@angular/router";
import {Location} from '@angular/common';

@Component({
    selector: 'users-detail',
    templateUrl: './users.user.component.html'
})

export class UsersUserComponent {

    @Input("value")
    public user;

    @Output()
    public onUserDelete : EventEmitter<number> = new EventEmitter();

    public id: number;

    constructor(private userService:UsersService, private router: ActivatedRoute){
    }

    deleteItem() {
        // userService.deleteById(id).subscribe(() => ....);
        console.log(this.user);
        this.onUserDelete.emit(this.user.id);
    }

    public activateUserInfo(user: User) {
        this.user= user;
    }

    public deleteUser(id) {
        this.userService.deleteUser(id)
            .subscribe();
    }

}