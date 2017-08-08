import {Component, OnInit} from "@angular/core";

interface User {
    name: string;
    email: string;
}

@Component({
    selector: 'users-list',
    templateUrl: './users.list.component.html',
})
export class UsersListComponent implements OnInit {
    public userList: User[];

    ngOnInit() {
        setTimeout(() => {
            this.userList = [{
                name: 'User1',
                email: 'xxx@yy.com'
            },
            {
                name: 'User2',
                email: 'aaa@yy.com'
            },
            {
                name: 'User3',
                email: 'bbb@yy.com'
            }
        ];
        }, 3000);
    }
}