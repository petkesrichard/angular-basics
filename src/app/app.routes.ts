import { Routes } from "@angular/router";
import { HomeComponent, UsersComponent, AdminComponent } from "pages"

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
];