import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class EducationService {
    constructor(
        private http:Http
    ){}

    public getAllEducation() {
        const url = 'http://localhost:8081/user_education';
        return this.http.get(url)
            .map((response) => response.json());
    }

    public addEducationInfo(body: object) {
        const url = 'http://localhost:8081/user_education';

        return this.http.post(url, body)
            .map((response) => response.json());
    }

}