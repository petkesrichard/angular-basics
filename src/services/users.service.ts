import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class UsersService {

    constructor(private http: Http) {}

    public createUser(body: object) {
        const url = 'http://localhost:8081/users';

        return this.http.post(url, body)
            .map((response) => response.json());
    }

    public getAllUsers() {
        const url = 'http://localhost:8081/users';

        return this.http.get(url)
            .map((response) => response.json());
    }

    public deleteUser(id: number) {
        const url = `http://localhost:8081/users/${id}`;

        return this.http.delete(url)
            .map((response) => response.json());
    }

}