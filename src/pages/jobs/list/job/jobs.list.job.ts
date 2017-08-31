import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {JobsService} from "../../../../services/jobs.service";
import {ActivatedRoute, Router} from "@angular/router";
import {StorageService} from "../../../../services/storageService";


@Component({
    selector:'job',
    templateUrl:'./jobs.list.job.html'
})


export class JobsListJob implements OnInit{
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



    constructor(private jobsService: JobsService, private router: Router,private storageService: StorageService) {}

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
