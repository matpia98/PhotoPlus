import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { LoginModel } from '../../models/login/login-model.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoggedUser } from 'src/app/models/login/logged-user.model';
import { Role } from 'src/app/models/role/role.enum';
import { ConfigService } from '../config/config.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    private hostAddress: string;
    private jwtHelper = new JwtHelperService();
    private loggedUser: LoggedUser | null = null;

    constructor(private http: HttpClient, private router: Router, private configService: ConfigService) {
        this.hostAddress = this.configService.getApiUrl();
        this.initializeFromStorage();
    }

    private initializeFromStorage() {
        try {
            const storedUser = localStorage.getItem('loggedUser');
            const token = localStorage.getItem('token');
            
            if (!token) {
                this.clearStorageAndUser();
                return;
            }

            try {
                if (this.jwtHelper.isTokenExpired(token)) {
                    this.clearStorageAndUser();
                    return;
                }
            } catch (e) {
                console.warn('Invalid token format:', e);
                this.clearStorageAndUser();
                return;
            }

            if (storedUser) {
                this.loggedUser = JSON.parse(storedUser);
            }
        } catch (e) {
            console.warn('Error initializing from storage:', e);
            this.clearStorageAndUser();
        }
    }

    private clearStorageAndUser() {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedUser');
        this.loggedUser = null;
    }

    login(login: string, password: string) {
        const loginModel: LoginModel = { login: login, password: password };

        this.http.post<LoggedUser>(this.hostAddress + 'login', {
            login: login,
            password: password
        }, { observe: 'response' }).subscribe(res => {
            this.loggedUser = res.body;
            this.readTokenFromResponse(res);
            localStorage.setItem('loggedUser', JSON.stringify(this.loggedUser));
            this.router.navigate(['/']);
        });
    }

    public logout() {
        this.clearStorageAndUser();
        this.http.get(this.hostAddress + 'logout').subscribe();
    }

    readTokenFromResponse(res: HttpResponse<any>) {
        const token = res.headers.get('Authorization');
        if (token) {
            localStorage.setItem('token', token);
        }
    }

    public isLoggedIn(): boolean {
        const token = localStorage.getItem('token');
        if (!token) {
            return false;
        }
        
        try {
            if (this.jwtHelper.isTokenExpired(token)) {
                this.clearStorageAndUser();
                return false;
            }
            return true;
        } catch (e) {
            console.warn('Error checking token expiration:', e);
            this.clearStorageAndUser();
            return false;
        }
    }

    getLoggedUser(): LoggedUser | null {
        return this.loggedUser;
    }

    getLoggedUserCode(): string | undefined {
        return this.loggedUser?.code;
    }

    get isModerator(): boolean {
        const role = this.loggedUser?.userRole;
        return role === Role.ADMIN || role === Role.EMPLOYEE;
    }

    get isAdmin(): boolean {
        const role = this.loggedUser?.userRole;
        return role === Role.ADMIN;
    }
}