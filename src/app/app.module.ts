import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {
    UsersComponent,
    ProfileComponent,
    ProfileEditComponent,
    ProfileViewComponent,
    AdminComponent,
    JobsComponent,
    JobsCreateComponent,
    UsersCreateComponent,
    UsersDeleteComponent,
    UsersListComponent,
    UsersUserComponent,
} from 'pages';

import {
    UsersService,
    JobsService,
    ProfileService
} from 'services';


import { ROUTES } from './app.routes';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";


@NgModule({
    declarations: [ 
        AppComponent,
        ProfileComponent,
        ProfileEditComponent,
        ProfileViewComponent,
        UsersComponent,
        UsersDeleteComponent,
        UsersCreateComponent,
        UsersListComponent,
        UsersUserComponent,
        JobsComponent,
        JobsCreateComponent,
        AdminComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES),
        HttpModule,
    ],
    providers: [
        UsersService,
        JobsService,
        ProfileService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}