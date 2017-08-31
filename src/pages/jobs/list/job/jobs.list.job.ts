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

    @Output()
        public onJobDelete : EventEmitter<number> = new EventEmitter();


    deleteItem() {
        // userService.deleteById(id).subscribe(() => ....);
        console.log(this.activeJobInfo);
        this.onJobDelete.emit(this.activeJobInfo.id);
    }


    public activateJobInfo(job: Job) {
        this.activeJobInfo = job;
    }

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

    public deleteJob(id) {
        this.jobsService.deleteJob(id)
            .subscribe();
    }


    onSelect(jobs) {
        this.router.navigate(['/pages/jobs', jobs.id]);
    }


}
