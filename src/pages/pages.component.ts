import {Component} from "@angular/core";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {StorageService} from "../services/storageService";

@Component({
    selector:'page',
    templateUrl:'./pages.component.html',
    styleUrls: ['./pages.component.css']
})

export class PagesComponent {
    public activeLinkIndex: number;
    public logedInUserType: number;

    public activeRouteObjectInfo: object;
    public menuItems = [{
        id: 0,
        name: 'Profile',
        role: 1,
        routerLink: '/pages/profile',
        children: [
            {
                id: 0,
                name: 'Personal Info',
                routerLink: '/pages/personal',
                role: 1
            },
            {
                id: 1,
                name: 'Education',
                routerLink: '/pages/education',
                role: 1
            },
            {
                id: 2,
                name: 'Work Experience',
                routerLink: '/pages/work_experience',
                role: 1
            },
            {
                id: 3,
                name: 'Personal Skills',
                routerLink: '/pages/user_skills',
                role: 1
            }
        ]
    }, {
        id: 1,
        role: 2,
        name: 'Users',
        routerLink: '/pages/users',
        children: [
            {
                id: 0,
                name: 'UserList',
                routerLink: '/pages/users/list',
                role: 3
            },
            {
                id: 1,
                name: 'UserCreate',
                routerLink: '/pages/users/create',
                role: 3
            }
        ]
    }, {
        id: 2,
        name: 'Jobs',
        role: 1,
        routerLink: '/pages/jobs',
        children: [
            {
                id: 0,
                name: 'JobList',
                routerLink: '/pages/jobs/list',
                role: 1
            },
            {
                id: 1,
                name: 'JobCreate',
                routerLink: '/pages/jobs',
                role: 2
            },
            {
                id: 2,
                name: 'JobEdit',
                routerLink: '/pages/jobs',
                role: 2
            }
        ]
    }];

    constructor(private route: ActivatedRoute,
                private router: Router,
                private storageService: StorageService
    ) {}

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

    public onLogOut(){
        this.router.navigate(['/login']);
        this.storageService.removeLogedInUser();
    }

}