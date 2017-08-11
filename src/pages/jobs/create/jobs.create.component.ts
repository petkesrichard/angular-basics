import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { JobsService } from '../../../services/jobs.service';

@Component({
    selector: 'jobs-create',
    templateUrl: './jobs.create.component.html'
})
export class JobsCreateComponent implements OnInit {
    public createJobForm: FormGroup;

    constructor (private jobsService: JobsService) {}

    public ngOnInit() {
        this.createJobForm = new FormGroup({
            'name': new FormControl(null, Validators.required, null),
            'description': new FormControl(null, Validators.required, null),
            'requirements': new FormArray([
                new FormControl(null, null),
            ]),
        });
    }

    public onSubmit() {
        const body = this.createJobForm.value;

        this.jobsService.addJobToJobsList(body)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }

    public addRequirementToList() {
        const formArray = this.createJobForm.get('requirements') as FormArray;
        formArray.push(new FormControl(null, null));
    }
}