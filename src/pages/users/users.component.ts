import { Component, OnInit } from '@angular/core';
import {timeout} from "rxjs/operator/timeout";

@Component({
    selector: 'users-component',
    templateUrl: './users.component.html',
    template: `
        <users-create></users-create>
        
        *******************************
        
        <users-list></users-list>
    `
})
export class UsersComponent {}