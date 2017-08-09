import { Injectable } from '@angular/core';


const usersList: Array<object> = [{
    id: 1,
    name: 'User',
    email: 'asdasdasd@yyy.com1'
}, {
    id: 2,
    name: 'User2',
    email: 'qqqq@yyy.com2'
}, {
    id: 3,
    name: 'User3',
    email: 'xsdasdasdx@yyy.com3'
}, {
    id: 4,
    name: 'User4',
    email: 'tttttt@yyy.com4'
}];



@Injectable()
export class UsersService {

    private userID:number;
    constructor() {
        console.log('****************');
        console.log('creating service');
    }

    public getAllUsers() {
        return usersList;
    }

    public getUserById(id: number): object {
        const user = usersList.find((userInfo) => userInfo.id === id);

        return user ? user : {};
    }

    public createUser(username:string,email:string) {
        this.userID = Object.keys(usersList).length + 1;
        const  newUser = {
            id: this.userID,
            name: username,
            email: email,
        }
        usersList.push(newUser);
    }

    public editUser() {

    }

    public removeUser() {

    }
}