import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonalService} from "../../../../services/personal.service";
import {StorageService} from "../../../../services/storageService";
import {Router} from "@angular/router";

@Component({
    selector: 'personal-info',
    templateUrl: './personal.edit.component.html'
})

export class PersonalEditComponent {
    public createPersonalForm: FormGroup;

    constructor(private personalService: PersonalService, private localStorageService: StorageService, private router: Router){}

    public ngOnInit() {
        this.createPersonalForm = new FormGroup({
            'firstName': new FormControl(
                null,
                [Validators.minLength(2), Validators.required],
                null),
            'lastName': new FormControl(
                null,
                [Validators.minLength(2), Validators.required],
                null),
            'description': new FormControl(
                null,
                null,
                null),
        });

    }


    public on

    public updateUser() {

        // console.log(this.localStorageService.getLogedInUser().id);
        this.personalService.getPersonalInfoId(this.localStorageService.getLogedInUser().id).subscribe(
            (response) => {
                console.log(response);
                const personalID = response.data.id;

                if (this.createPersonalForm.valid) {

                    const body = {
                        first_name : this.createPersonalForm.value.firstName,
                        last_name : this.createPersonalForm.value.lastName,
                        description : this.createPersonalForm.value.description
                    }

                    console.log("body: ",body);
                    console.log("personal id",personalID);

                    this.personalService.updatePersonalInfo(body,personalID).subscribe(
                        (response) => {
                            console.log(response);
                            this.router.navigate([`/pages/personal`]);
                        },
                        (error) => console.log(error)
                    );

                }
            },
            (error) => console.log(error)
        );

    }


}