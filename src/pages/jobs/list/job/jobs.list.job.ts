import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {JobsService} from "../../../../services/jobs.service";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
    selector:'job',
    templateUrl:'./jobs.list.job.html'
})


export class JobsListJob implements OnInit{
    public jobs;
    @Input()
    public activeJobInfo;
    id: number;



    constructor(private jobsService: JobsService, private router: Router) {}

    ngOnInit(){
        console.log(this.activeJobInfo)

        // this.jobsService.getJobById(this.id)
        //     .subscribe(
        //         (response: Response) => this.activeJobInfo = response ,
        //         (error) => { console.log(error) },
        //         () => { console.log('finally'); }
        //     );
    }

    onSelect(jobs) {
        this.router.navigate(['/jobs', jobs.id]);
    }

    public activateJobInfo(job: Job) {
        this.activeJobInfo = job;
    }

    public deleteJob(id) {
        this.jobsService.deleteJob(id)
            .subscribe();
    }


}
