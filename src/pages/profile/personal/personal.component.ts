import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PersonalService} from "../../../services/personal.service";
import {StorageService} from "../../../services/storageService";

@Component({
    selector: 'personal-info',
    templateUrl: './personal.component.html'
})

export class PersonalComponent {
    public createPersonalForm: FormGroup;

    constructor(private personalService: PersonalService, private localStorageService: StorageService){}

    public ngOnInit() {
        this.createPersonalForm = new FormGroup({
            'firstName': new FormControl(null, Validators.required, null),
            'lastName': new FormControl(null, Validators.required, null),
            'description': new FormControl(null, Validators.required, null)
        });

    }

    public onSubmit() {
        const body = {
            first_name: this.createPersonalForm.value.firstName,
            last_name: this.createPersonalForm.value.lastName,
            description: this.createPersonalForm.value.description,
            users_id: this.localStorageService.getLogedInUser().id
        }
        console.log("personal_info_body",body);
        this.personalService.addPersonalInfo(body)
            .subscribe(
                (response) => console.log(response),
                (error) => console.log(error)
            );
    }


}