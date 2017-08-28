import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {
    UsersComponent,
    ProfileComponent,
    ProfileEditComponent,
    ProfileViewComponent,
    JobsComponent,
    JobsCreateComponent,
    JobsList,
    JobsListJob,
    JobsDetail,
    UsersCreateComponent,
    UsersListComponent,
    UsersUserComponent,
} from 'pages';

import {MaterialModule, MdToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    UsersService,
    JobsService,
    ProfileService,
    SkillsService
} from 'services';

import { ROUTES } from './app.routes';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import 'hammerjs';
import { FormsModule } from '@angular/forms';
import {MdSelectModule} from '@angular/material';
import {UserRolesService} from "../services/userRoles.service";

@NgModule({
    declarations: [ 
        AppComponent,
        ProfileComponent,
        ProfileEditComponent,
        ProfileViewComponent,
        UsersComponent,
        UsersCreateComponent,
        UsersListComponent,
        UsersUserComponent,
        JobsComponent,
        JobsList,
        JobsDetail,
        JobsListJob,
        JobsCreateComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES),
        HttpModule,
        MaterialModule,
        BrowserAnimationsModule,
        FormsModule,
        MdSelectModule,
        MdToolbarModule,
    ],
    providers: [
        UsersService,
        UserRolesService,
        JobsService,
        ProfileService,
        SkillsService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}