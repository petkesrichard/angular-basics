import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class ApplyService {

    constructor(
        private http:Http
    ){}

    public applyJob(body) {
        const url = 'http://localhost:8081/job_applies';

        return this.http.post(url, body)
            .map((response) => response.json());
    }

}