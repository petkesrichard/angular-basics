import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JobsService} from "../../../services/jobs.service";

@Component({
    selector:'job-detail',
    templateUrl:'./jobs.detail.html'
})

export class JobsDetail implements OnInit{
    public activeJobInfo: Job;
    id: number;

    constructor(private jobsService: JobsService, private router: ActivatedRoute) {}

    ngOnInit(){
        this.id = +this.router.params.value.id;
        this.jobsService.getJobById(this.id)
            .subscribe(
                (response: Response) => this.activeJobInfo = response ,
                (error) => { console.log(error) },
                () => { console.log('finally'); }
            );
    }


    public activateJobInfo(job: Job) {
        this.activeJobInfo = job;
    }
}