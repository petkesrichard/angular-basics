import {Component, OnDestroy, OnInit} from '@angular/core';
import {timeInterval} from "rxjs/operator/timeInterval";
import {timeout} from "rxjs/operator/timeout";

@Component({
    selector: 'profile-component',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
    public title: string = 'This is title';

    constructor() {
        console.log('inside constructor');
    }

    ngOnInit() {
/*        setTimeout( (xyz) => {
            this.title = 'Acesta va fi titlul paginii'
        },timeout: 3000);
        console.log('inside init'); */
    }

    public handleButtonClick() {
        console.log('clicked me');
    }

    ngOnDestroy() {
        console.log('inside destroy');
    }
}