import {Component} from '@angular/core'
import { JobsService } from 'services';

@Component({
    selector:'jobs-list',
    templateUrl:'./jobs.list.component.html'
})

export class JobsListComponent {
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