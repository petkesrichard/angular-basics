import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent, HomeComponent, AdminComponent, UsersCreate, UsersListComponent } from 'pages';

import { ROUTES } from './app.routes';

@NgModule({
    declarations: [ 
        AppComponent,
        HomeComponent,
        UsersComponent,
        UsersCreate,
        UsersListComponent,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES)
    ],
    providers: [],
    bootstrap: [ AppComponent ]
})
export class AppModule {}