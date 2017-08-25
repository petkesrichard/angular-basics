import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { JobsService } from '../../../services/jobs.service';
import { SkillsService } from '../../../services/skills.service';

@Component({
    selector: 'jobs-create',
    templateUrl: './jobs.create.component.html'
})
export class JobsCreateComponent implements OnInit {
    public createJobForm: FormGroup;
    public skills: Skills[];
    public selectedSkill;

    constructor (private jobsService: JobsService, private skillsService: SkillsService) {}

    public ngOnInit() {
        this.createJobForm = new FormGroup({
            'name': new FormControl(null, Validators.required, null),
            'description': new FormControl(null, Validators.required, null),
            'requirements': new FormArray([
                new FormControl(null, null),
            ]),
            'benefits': new FormControl(null, Validators.required, null)
        });

        this.skillsService.getAllSkills()
            .subscribe(
                (response: Response) => this.skills = response ,
                (error) => { console.log(error) },
                () => { console.log('finally'); }
                );
    }

    public onSubmit() {
        const body = this.createJobForm.value;
        console.log("body",body);
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