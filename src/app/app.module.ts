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
    UsersService,
    JobsService,
    ProfileService,
    SkillsService
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
    ],
    providers: [
        UsersService,
        JobsService,
        ProfileService,
        SkillsService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}