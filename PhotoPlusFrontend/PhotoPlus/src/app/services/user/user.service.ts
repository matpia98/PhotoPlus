import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from '../../models/user/user';
import { AbstractService } from '../abstract-service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginService } from '../login/login.service';
import { Address } from '../../models/address/address';
import { FieldChange } from '../patch/field-change';
import { PatchFieldChangeService } from '../patch/patch-field-change.service';
import { ConfigService } from '../config/config.service';

@Injectable({
    providedIn: 'root'
})
export class UserService extends AbstractService<User> {

    constructor(http: HttpClient, private loginService: LoginService, private patchFieldChangeService: PatchFieldChangeService, configService: ConfigService) {
        super(http, 'user', configService);
    }

    registerUser(newUser: User): Observable<HttpResponse<User>> {
        console.log('Making registration API call to:', this.hostAddress + this.endpointUrl + '/register');
        console.log('With user data:', newUser);
        return this._http.post<User>(this.hostAddress + this.endpointUrl + '/register', newUser, { observe: 'response' });
    }

    getUsersSearchByLogin(searchText: string): Observable<User[]> {
        return this._http.get<User[]>(this.hostAddress + this.endpointUrl + '/search/' + searchText);
    }

    getDetailsOfLoggedUser(): Observable<User> {
        return this._http.get<User>(this.hostAddress + this.endpointUrl + '/editAccount/' + this.loginService.getLoggedUserCode());
    }

    getAddressesOfLoggedUser(): Observable<Address[]> {
        return this._http.get<Address[]>(environment.hostAddress + 'address/byUser/' + this.loginService.getLoggedUserCode());
    }

    patchDetailsOfLoggedUser(fieldChange: FieldChange) {
        this.patchFieldChangeService.sendPatchRequest(this.endpointUrl + '/editAccount/' + this.loginService.getLoggedUserCode(), fieldChange);
    }

    delete(code: string): Observable<User> {
      return this._http.delete<User>(this.hostAddress + this.endpointUrl + '/deleteUser/' + code);
    }
}
