import { Component, OnInit } from '@angular/core';
import { UsersService} from "../../services/users.service"
@Component({
    selector: 'users-component',
    templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit{

    constructor()
    {
        console.log("??? UserComponent");
    }

}