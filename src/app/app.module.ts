import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppComponent } from './app.component';
import { UsersComponent, ProfileComponent, ProfileEditComponent, AdminComponent,UsersCreateComponent, UsersDeleteComponent, UsersListComponent, UsersDetail } from 'pages';
import { ROUTES } from './app.routes';
import {ReactiveFormsModule} from "@angular/forms";
import {UsersService} from 'services';

@NgModule({
    declarations: [ 
        AppComponent,
        ProfileComponent,
        ProfileEditComponent,
        UsersComponent,
        UsersDeleteComponent,
        UsersCreateComponent,
        UsersListComponent,
        UsersDetail,
        AdminComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot(ROUTES),
    ],
    providers: [ UsersService ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}