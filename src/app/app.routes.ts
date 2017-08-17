import { RouterModule,Routes } from "@angular/router";
import { ProfileComponent, UsersComponent, AdminComponent, UsersDetail, UsersListComponent, JobsComponent } from "pages"
import {UsersCreateComponent} from "../pages/users/create/users.create.component";
import {UsersUserComponent} from "../pages/users/list/user/users.user.component";
import {UsersDeleteComponent} from "../pages/users/delete/users.delete.component";
import {JobsListComponent} from "../pages/jobs/list/jobs.list.component";

export const ROUTES: Routes =  [
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
        component: JobsListComponent
    }
];