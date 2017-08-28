import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class UserRolesService {
    constructor(private http: Http) {}

    public getAllRoles() {
        const url = 'http://localhost:8081/user_roles';

        return this.http.get(url)
            .map((response) => response.json());
    }
}
