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

    public updatePersonalInfo(body,id) {
            const url = `http://localhost:8081/personal_info/${id}`
        return this.http.put(url, body)
            .map((response) => response.json());
    }

    public getPersonalInfoId(id) {
        const url = `http://localhost:8081/personal_info/user/${id}`;
        return this.http.get(url)
            .map((response) => response.json())
    }

    public getPersonalId(id) {
        const url = `http://localhost:8081/personal_info/${id}`;
        return this.http.get(url)
            .map((response) => response.json())
    }

}