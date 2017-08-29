import { RouterModule,Routes } from "@angular/router";
import { ProfileComponent, UsersComponent, AdminComponent, UsersDetail, UsersListComponent, JobsComponent, JobsDetailComponent } from "pages"
import {UsersCreateComponent} from "../pages/users/create/users.create.component";
import {UsersUserComponent} from "../pages/users/list/user/users.user.component";
import {UsersDeleteComponent} from "../pages/users/delete/users.delete.component";
import {JobsList} from "../pages/jobs/list/jobs.list";
import {JobsDetail} from "../pages/jobs/detail/jobs.detail";
import {LoginComponent} from "../pages/login/login.component";
import {PagesComponent} from "../pages/pages.component";
import {AuthentificationGuard} from "../services/authentificationGuard";


export const ROUTES: Routes =  [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path:'pages',
        component:PagesComponent,
        canActivate: [AuthentificationGuard],
        children:[
            {
                path: 'profile',
                component: ProfileComponent,
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'users/create',
                component: UsersCreateComponent
            },
            {
                path: 'users/list',
                component: UsersListComponent
            },
            {
                path: 'users/:id',
                component: UsersUserComponent
            },
            {
                path: 'jobs',
                component: JobsComponent
            },
            {
                path: 'jobs/list',
                component: JobsList
            },
            {
                path: 'jobs/:id',
                component: JobsDetail
            },
            {
                path: '**',
                redirectTo: 'profile'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];