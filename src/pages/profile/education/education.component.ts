import {Component} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {StorageService} from "../../../services/storageService";
import {EducationService} from "../../../services/education.service";
import {PersonalService} from "../../../services/personal.service";

@Component({
    selector: 'education',
    templateUrl: './education.component.html'
})

export class EducationComponent {
    public createEducationForm: FormGroup;

    constructor(private educationService: EducationService,private personalService: PersonalService, private localStorageService: StorageService){}

    public ngOnInit() {
        this.createEducationForm = new FormGroup({
            'schoolName': new FormControl(null, Validators.required, null),
            'graduationDate': new FormControl(null, Validators.required, null),
            'description': new FormControl(null, Validators.required, null)
        });
    }

    public onSubmit() {

        this.personalService.getPersonalInfoId(this.localStorageService.getLogedInUser().id).
            subscribe(
               (response) => {

                   console.log("dataID:",response.data.id);
                   const personalId = response.data.id;

                   const body = {
                       school_name: this.createEducationForm.value.schoolName,
                       graduated_year: this.createEducationForm.value.graduationDate,
                       description: this.createEducationForm.value.description,
                       personal_info_id: personalId
                   }
                   console.log("education_info_body",body);
                   this.educationService.addEducationInfo(body)
                       .subscribe(
                           (response) => console.log(response),
                           (error) => console.log(error)
                       );

               },
            (error) => console.log(error)
        );



    }
}