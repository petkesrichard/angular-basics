import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProfileService {
    constructor(private http: Http) {}

    public getAllProfiles() {
        const url = 'http://localhost:3000/profiles/';

        return this.http.get(url)
            .map((response) => response.json());
    }

    public addProfileToProfileList(body) {
        console.log(body);
        const url = 'http://localhost:3000/profiles';

        return this.http.post(url, body)
            .map((response) => response.json());
    }

    public deleteProfile(id: number) {
        const url = `http://localhost:3000/profiles/${id}`;

        return this.http.delete(url)
            .map((response) => response.json());
    }


}


