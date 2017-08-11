import { Component, OnInit } from '@angular/core';
import { JobsService } from 'services';
import { Response } from '@angular/http';

interface Job {
    name: string;
    description: string;
    requirements: string[];
}

@Component({
    selector: 'jobs-component',
    templateUrl: './jobs.component.html'
})
export class JobsComponent implements OnInit {
    public jobs: Job[];
    public activeJobInfo: Job;

    constructor(private jobsService: JobsService) {}

    public ngOnInit() {
        this.jobsService.getAllJobs()
            .subscribe(
                (response: Response) => this.jobs = response ,
                (error) => { console.log(error) },
                () => { console.log('finally'); }
            );
        // this.jobs = this.jobsService.getAllJobs();
    }

    public activateJobInfo(job: Job) {
        this.activeJobInfo = job;
    }

    public deleteJob(id) {
        this.jobsService.deleteJob(id)
            .subscribe();
    }
}