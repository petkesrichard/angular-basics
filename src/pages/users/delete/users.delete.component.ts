import {Component, OnInit} from '@angular/core'

@Component ({
    selector: 'user-delete',
    templateUrl: './users.delete.component.html',
})

export class UsersDelete implements OnInit {
    public userName:String;
}