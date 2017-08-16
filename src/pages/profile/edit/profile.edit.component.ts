import {Component} from '@angular/core'
import {FormControl, FormGroup, Validators, FormArray} from "@angular/forms";
import {ProfileService} from "../../../services/profile.service";


interface Profile {
    fullname: string;
    about: string;
    school: string[];
    university: string[];
    skills: string[];
}

@Component ({
    selector: 'profile-edit',
    templateUrl: 'profile.edit.component.html'
})

export class ProfileEditComponent {
    public profileEditForm: FormGroup;
    public profile: Profile[];

    constructor(private profileService: ProfileService) {}

    public ngOnInit() {
        this.profileEditForm = new FormGroup({
            'FullName': new FormControl(null, null, null),
            'About': new FormControl(null, null, null),
            'School': new FormArray([
            ]),
            'University': new FormArray([
            ]),
            'Skills': new FormArray([
            ]),
        });
    }

    public addToSchoolList() {
        const schoolArray = this.profileEditForm.get('School') as FormArray;

        schoolArray.push(new FormGroup({
            'Name': new FormControl(null, null, null),
            'Year': new FormControl(null, null, null),
        }));
    }
    public addToUniversityList() {
        const universityArray = this.profileEditForm.get('University') as FormArray;

        universityArray.push(new FormGroup({
            'Name': new FormControl(null, null, null),
            'Year': new FormControl(null, null, null),
        }));
    }

    public addToSkillsList () {
        const skillsArray = this.profileEditForm.get('Skills') as FormArray;

        skillsArray.push(new FormGroup({
            'Skill': new FormControl(null,null,null),
            'Level': new FormControl(null,null,null)
        }))
    }

    public addProfileToProfileList() {
        this.profileService.addProfileToProfileList(this.profileEditForm.value).subscribe(
            (data) => {
                console.log(data);
            },
            (error) => {
                console.log("error", error);
            },
            () => {
                console.log("finally");
            }
        );
    }

    public showWhatFormContainsNow() {
        console.log(this.profileEditForm);
    }
}