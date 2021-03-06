import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterStateSnapshot} from "@angular/router";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public activeLinkIndex: number;
    public logedInUserType: number;

    public activeRouteObjectInfo: object;
    public menuItems = [{
        id: 0,
        name: 'Profile',
        routerLink: '/profile',
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

    constructor(private route: ActivatedRoute,private router: Router) {}

    ngOnInit() {
        this.activeLinkIndex = 0;
        this.logedInUserType = 0;

        this.router.events.subscribe(
            (event) => {
                if (event instanceof NavigationEnd) {
                    const url = event.url;
                    const currentRoute = this.menuItems.find((item) => item.routerLink === this.router.url);

                    if (currentRoute) {
                        this.activateMenuItem(currentRoute.id);
                    }
                }
            }
        );

    }

    public activateMenuItem(id: number) {
        this.activeRouteObjectInfo = this.menuItems.find((item) => item.id === id);
        this.activeLinkIndex = id;
    }

    public isMenuItemActive(id: number) {
        return this.activeLinkIndex === id;
    }


}