import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import {StorageService} from "./storageService";
import {Router} from "@angular/router";
import {MdSnackBar} from '@angular/material';

@Injectable()
export class LoginService {
    constructor(
        private http: Http,
        private storageService: StorageService,
        private router:Router,
        public snackBar: MdSnackBar
    ) {}

    public login(username: string, password: string) {
        const url = `http://localhost:8081/login`;
        const params = {
            username,
            password
        };

        return this.http.post(url, params)
            .map((response: Response) => {
                const jsonResponse = response.json();
                if (jsonResponse.data) {
                    this.storageService.setLogedInUser(jsonResponse.data);
                    this.router.navigate(['/pages/profile']);
                }
                else {
                    this.snackBar.open('Username or password error!', null, null,{
                        duration: 2000,
                    });
                }
                return jsonResponse;
            });
    }

}
