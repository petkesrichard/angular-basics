import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class SkillsService {
    constructor(private http: Http) {}

    public getAllSkills() {
        const url = 'http://localhost:8081/skills';

        return this.http.get(url)
            .map((response) => response.json());
    }
}
