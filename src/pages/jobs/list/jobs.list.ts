import {Component, OnInit} from '@angular/core'
import {JobsService} from 'services';
import {Router} from "@angular/router";

@Component({
    selector: 'jobs-list',
    templateUrl: './jobs.list.html'
})

export class JobsList implements OnInit {
    public jobList = [];

    constructor(private jobsService: JobsService, private router: Router) {
    }

    public ngOnInit() {
        this.jobsService.getAllJobs()
            .subscribe(
                (response: Response) => {
                    this.jobList = response;
                },
                (error) => {
                    console.log(error)
                },
                () => {
                    console.log('finally');
                }
            );
    }

    updateList(id: number) {
        const selectedItemIndex = this.jobList.findIndex((elem) => elem.id === id);

        this.jobList.splice(selectedItemIndex, 1);
    }
}