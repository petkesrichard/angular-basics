import {Component, OnDestroy, OnInit} from '@angular/core';
import {timeInterval} from "rxjs/operator/timeInterval";
import {timeout} from "rxjs/operator/timeout";

@Component({
    selector: 'home-component',
    template: `
        <h1>Home component here</h1>
        
        <p>{{ title }}</p>
        
        <button (click)="handleButtonClick()">My button</button>
        
        <img>
    `,
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
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