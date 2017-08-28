import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public activeLinkIndex: number;
    public currentRoute;
    public currentRouteId: number;
    @Output()
        menuItemOnClick : EventEmitter<number> = new EventEmitter();




    public activeRouteObjectInfo: object;
    public menuItems = [{
        id: 0,
        name: 'Profile',
        routerLink: '/profile',
        children: [
            {


            }
        ]
    }, {
        id: 1,
        name: 'Users',
        routerLink: '/users',
        children: [
            {
                id: 0,
                name: 'UserList',
                routerLink: '/users/list'
            },
            {
                id: 1,
                name: 'UserCreate',
                routerLink: '/users/create'
            }
            ]
    }, {
        id: 2,
        name: 'Jobs',
        routerLink: '/jobs',
        children: [
            {
                id: 0,
                name: 'JobList',
                routerLink: '/jobs/list'
            },
            {
                id: 1,
                name: 'JobCreate',
                routerLink: '/jobs'
            },
            {
                id: 2,
                name: 'JobEdit',
                routerLink: '/jobs'
            }
        ]
    }];

    constructor(private route: ActivatedRoute,private router: Router) {
        this.currentRouteId = 0;
        this.activeLinkIndex = 0;
    }

    currentUrl() {
        this.currentRoute = this.menuItems.find((item) => item.routerLink === this.router.url);

        this.currentRouteId = this.currentRoute.id;

        this.menuItemOnClick.emit(this.currentRouteId);
    }


    ngOnInit() {

       /* let currentUrl = this.router.url;*/
        // gaseste ruta curenta


    }

    public activateMenuItem(id: number) {
        this.activeRouteObjectInfo = this.menuItems.find((item) => item.id === id);
        this.activeLinkIndex = id;
    }

    public isMenuItemActive(id: number) {
        return this.activeLinkIndex === id;
    }

/*<a md-tab-link
    [routerLink]="['/profile']" (click)="activeLinkIndex = 1"
    routerLinkActive #rla="routerLinkActive"
        [active]="activeLinkIndex === 1">
        Profile
        </a>
        <a md-tab-link
    [routerLink]="['/users']" (click)="activeLinkIndex = 2"
    routerLinkActive #rla="routerLinkActive"
        [active]="activeLinkIndex === 2">
        Users
        </a>
        <a md-tab-link
    [routerLink]="['/jobs']" (click)="activeLinkIndex = 3"
    routerLinkActive #rla="routerLinkActive"
        [active]="activeLinkIndex === 3">
        Jobs
        </a>*/
}