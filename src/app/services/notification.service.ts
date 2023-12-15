import { Injectable, inject } from '@angular/core';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  successMessage( message :string ) {
    Swal.fire({
      icon: "success",
      text: message,

    });
  }

  errorMessage(message: string) {
    Swal.fire({
      icon: "error",
      text: message,
    });
  }

}
