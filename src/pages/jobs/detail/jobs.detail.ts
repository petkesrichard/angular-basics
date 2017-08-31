import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {JobsService} from "../../../services/jobs.service";
import {StorageService} from "../../../services/storageService.ts";
import {ApplyService} from "../../../services/apply.service.ts";

@Component({
    selector:'job-detail',
    templateUrl:'./jobs.detail.html'
})

export class JobsDetail implements OnInit{
    public activeJobInfo: Job;
    id: number;

    constructor(private jobsService: JobsService,
                private router: ActivatedRoute,
                private storageService: StorageService,
                private applyService: ApplyService
    )
    {}



    ngOnInit(){
        this.id = +this.router.params.value.id;
        console.log(this.id);
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

    public createJobApply() {
        this.jobsService.getJobById(this.id)
            .subscribe(
            (response: Response) => {
                console.log(response.id);
                var job_id = response.id;
                const body = {
                    users_id: this.storageService.getLogedInUser().id,
                    jobs_id: job_id
                }
                console.log("object",body);
                this.applyService.applyJob(body)
                    .subscribe(
                    (response) => console.log("Response create job apply",response),
                    (error) => console.log(error)
                );

            },
            (error) => { console.log(error) }
        );

    }

}