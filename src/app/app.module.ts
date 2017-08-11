import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import {
    UsersComponent,
    ProfileComponent,
    ProfileEditComponent,
    AdminComponent,
    JobsComponent,
    JobsCreateComponent,
    UsersCreateComponent,
    UsersDeleteComponent,
    UsersListComponent,
    UsersUserComponent,
} from 'pages';

import { ROUTES } from './app.routes';
import {ReactiveFormsModule} from "@angular/forms";
import { UsersService, JobsService } from 'services';
import {HttpModule} from "@angular/http";
import {} from "../pages/users/list/user/users.user.component";

@NgModule({
    declarations: [ 
        AppComponent,
        ProfileComponent,
        ProfileEditComponent,
        UsersComponent,
        UsersDeleteComponent,
        UsersCreateComponent,
        UsersListComponent,
        UsersUserComponent,
        JobsComponent,
        JobsCreateComponent,
        AdminComponent
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
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}