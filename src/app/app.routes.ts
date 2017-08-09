import { RouterModule,Routes } from "@angular/router";
import { HomeComponent, UsersComponent, AdminComponent, UsersDetail } from "pages"

export const ROUTES: Routes =  [
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'admin',
        component: AdminComponent
    },
    {
        path: 'users/:id',
        component: UsersDetail
    }
];