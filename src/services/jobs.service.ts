import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import "rxjs/add/operator/map";

@Injectable()
export class JobsService {
    constructor(private http: Http) {}

    public getAllJobs() {
        const url = 'http://localhost:3000/jobs';

        return this.http.get(url)
            .map((response) => response.json());
    }

    public addJobToJobsList(body: object) {
        const url = 'http://localhost:3000/jobs';

        return this.http.post(url, body)
            .map((response) => response.json());
    }

    public deleteJob(id: number) {
        const url = `http://localhost:3000/jobs/${id}`;

        return this.http.delete(url)
            .map((response) => response.json());
    }
}