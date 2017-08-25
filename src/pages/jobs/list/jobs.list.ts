import {Component, OnInit} from '@angular/core'
import {JobsService} from 'services';
import {Router} from "@angular/router";

@Component({
    selector: 'jobs-list',
    templateUrl: './jobs.list.html'
})

export class JobsList implements OnInit {
    public jobs;
    public activeJobInfo: Job;

    constructor(private jobsService: JobsService, private router: Router) {
    }

    public ngOnInit() {
        this.jobsService.getAllJobs()
            .subscribe(
                (response: Response) => {
                    this.jobs = response;
                    console.log(this.jobs);
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    console.log('finally');
                }
            );
        // this.jobs = this.jobsService.getAllJobs();
    }

    public

    activateJobInfo(job: Job) {
        this.activeJobInfo = job;
    }

    onSelect(job) {
        this.router.navigate(['/jobs', job.id]);
    }

    public

    deleteJob(id) {
        this.jobsService.deleteJob(id)
            .subscribe();
    }
}