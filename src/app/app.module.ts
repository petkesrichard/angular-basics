import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";

import { AppComponent } from './app.component';
import { UsersComponent, HomeComponent, AdminComponent, UsersCreate, UsersListComponent, UsersDetail } from 'pages';
import { ROUTES } from './app.routes';
import {FormsModule} from "@angular/forms";
import {UsersService} from 'services';

@NgModule({
    declarations: [ 
        AppComponent,
        HomeComponent,
        UsersComponent,
        UsersCreate,
        UsersListComponent,
        UsersDetail,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(ROUTES),
    ],
    providers: [ UsersService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}