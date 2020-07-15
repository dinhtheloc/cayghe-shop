import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { User } from '../../model/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient, private router: Router) {
    }


    isLogin = () => {
        if (localStorage.getItem('token')) {
            return true;
        } else {
            return false;
        }
    }

    login = (email: string, password: string) => {
        return this.http.post<any>(`${environment.apiUrl}/api/login`, { email, password })
            .pipe(map(data => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', data.data.token);
                localStorage.setItem('email', data.data.email);
                return data;
            }));
    }

    logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        this.router.navigate(['login']);
    }
}
