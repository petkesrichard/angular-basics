import {Component} from "@angular/core";
import {StorageService} from "../../../services/storageService";
import {PersonalService} from "../../../services/personal.service";
import {Router} from "@angular/router";

@Component({
    selector:'personal',
    templateUrl:'./personal.component.html'
})

export class PersonalComponent {

    public personalInfo;

    constructor(private storageService: StorageService, private personalService: PersonalService, private router: Router){}

    public ngOnInit() {
        this.personalService.getPersonalInfoId(this.storageService.getLogedInUser().id)
            .subscribe((response) => {
                console.log(response);
                this.personalInfo = response;
            });
    }

    onEdit(personal) {
        console.log(personal.data.id)
        this.router.navigate([`/pages/personal/edit`]);
    }

}