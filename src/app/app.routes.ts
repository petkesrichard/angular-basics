import { RouterModule,Routes } from "@angular/router";
import { ProfileComponent, UsersComponent, AdminComponent, UsersDetail, UsersListComponent, JobsComponent } from "pages"
import {UsersCreateComponent} from "../pages/users/create/users.create.component";
import {UsersUserComponent} from "../pages/users/list/user/users.user.component";

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
        path: 'create',
        component: UsersCreateComponent
    },
    {
        path: 'list',
        component: UsersListComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'users/:id',
        component: UsersUserComponent
    },
    {
        path: 'jobs',
        component: JobsComponent
    },
];