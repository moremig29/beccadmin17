import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NotificationService } from './notification.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  urlBase: string = 'https://beccadminapi.beccasoftware.com/api'

  constructor(
    public cookieService: CookieService,
    private notificationService: NotificationService
  ) { }

  getToken(){
    return this.cookieService.get('token');
  }

  throwError(err: any): any {
    let message = err.error.displayMessage
    this.notificationService.errorMessage( message );
    throw new Error( message );
  }

  headers(){
    let headers = new HttpHeaders();
    headers = headers.append('Authorization','Bearer' + this.getToken());
    return headers
  }

}
