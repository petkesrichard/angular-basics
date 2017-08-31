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

import {
    MaterialModule, MdButtonToggleModule, MdDatepicker, MdDatepickerModule, MdNativeDateModule,
    MdToolbarModule
} from '@angular/material';
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
import {LoginComponent} from "../pages/login/login.component";
import {LoginService} from "../services/login.service";
import {PagesComponent} from "../pages/pages.component";
import {AuthentificationGuard} from "../services/authentificationGuard";
import {StorageService} from "../services/storageService";
import {MdSnackBarModule} from '@angular/material';
import {PersonalEditComponent} from "../pages/profile/personal/edit/personal.edit.component";
import {PersonalService} from "../services/personal.service";
import {EducationComponent} from "../pages/profile/education/education.component";
import {EducationService} from "../services/education.service";
import {ApplyService} from "../services/apply.service";
import {PersonalComponent} from "../pages/profile/personal/personal.component";

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
        JobsCreateComponent,
        LoginComponent,
        PagesComponent,
        PersonalComponent,
        PersonalEditComponent,
        EducationComponent
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
        MdSnackBarModule,
        MdDatepickerModule,
        MdButtonToggleModule,
        MdNativeDateModule
    ],
    providers: [
        UsersService,
        UserRolesService,
        JobsService,
        ProfileService,
        SkillsService,
        LoginService,
        StorageService,
        AuthentificationGuard,
        PersonalService,
        EducationService,
        ApplyService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}