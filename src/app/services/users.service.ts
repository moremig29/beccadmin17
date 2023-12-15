import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of, tap } from 'rxjs';
import { UserForm } from '../interfaces/userForm.interface';
import { UserLogin } from '../interfaces/userLogin.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor( private baseService: BaseService, private http: HttpClient ) {

  }

  login( usuario: UserForm ){

    return this.http.post<UserLogin>(`${this.baseService.urlBase}/Usuarios/Login`, usuario )
      .pipe(
        tap((res: UserLogin ) => {
          let resultado = res.result.split('|')
          let [token, userId, rolId] = resultado;
          this.baseService.cookieService.set('token', token, { expires: 1, sameSite: 'Lax' });
          this.baseService.cookieService.set('userId', userId, { expires: 1, sameSite: 'Lax' });
          this.baseService.cookieService.set('rolId', rolId, { expires: 1, sameSite: 'Lax' });
        }),
        catchError( ( err: any ) => {
          return this.baseService.throwError(err);
        })
      )

  }

  logout() {
    this.baseService.cookieService.deleteAll();
  }

  getRegistrados() {

    return this.http.get(`${this.baseService.urlBase}/Usuarios`, { headers: this.baseService.headers() } )
      .pipe(
        map( (res: any ) => res.result )
      )
  }

}


