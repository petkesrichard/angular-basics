import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class PersonalService {
    constructor(
        private http:Http
    ){}

    public getAllPersonal() {
        const url = 'http://localhost:8081/personal_info';
        return this.http.get(url)
            .map((response) => response.json());
    }

    public addPersonalInfo(body: object) {
        const url = 'http://localhost:8081/personal_info';

        return this.http.post(url, body)
            .map((response) => response.json());
    }

    public getPersonalInfoId(id) {
        const url = `http://localhost:8081/personal_info/user/${id}`;
        return this.http.get(url)
            .map((response) => response.json())
    }
}