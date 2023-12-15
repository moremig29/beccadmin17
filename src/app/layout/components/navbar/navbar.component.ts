import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor( private usersService: UsersService, private router: Router ){}

  menuItems = [
    {
      title: 'Usuarios',
      children: [
        {
          title: 'BeccAdmin',
          icon: 'fa fa-users',
          url: '',
          routes: [
            {
              title: 'Registrar',
              url: 'usuarios/registrar',
              icon: 'fa fa-users',
            },
            {
              title: 'Registrados',
              url: 'usuarios',
              icon: 'fa fa-users',
            }
          ],
        },
        {
          title: 'BeccaSoftware',
          icon: 'fa fa-users',
          url: '',
          routes: [
            {
              title: 'Licencias vigente',
              url: 'usuarios-becca/activos',
              icon: 'fa fa-users',
            },
            {
              title: 'Licencias caducada',
              url: 'usuarios-becca/vencidos',
              icon: 'fa fa-users',
            },
            {
              title: 'Licencias',
              url: 'usuarios-becca/licencias',
              icon: 'fa fa-users',
            },
            {
              title: 'Licencias free',
              url: 'usuarios-becca/licencias-free',
              icon: 'fa fa-users',
            },
            {
              title: 'Firmas',
              url: 'usuarios-becca/firmas',
              icon: 'fa fa-users',
            },
          ],
        }
      ]
    },
    {
      title: 'Espacio en Disco',
      children: [
        {
          title: 'Empresas',
          icon: 'fa fa-briefcase',
          routes: [],
          url: 'empresas'
        }
      ]
    },
    {
      title: 'Dispositivos Firmas',
      children: [
        {
          title: 'Dispositivos',
          icon: 'fa fa-mobile',
          url: '',
          routes: [
            {
              title: 'Asignar',
              url: 'dispositivos/asignar',
              icon: 'fa fa-mobile',
            },
            {
              title: 'Disponibles',
              url: 'dispositivos/disponibles',
              icon: 'fa fa-mobile',
            },
            {
              title: 'Asignados',
              url: 'dispositivos/asignados',
              icon: 'fa fa-mobile',
            },
          ],
        }
      ]
    },
    {
      title: 'Logs',
      children: [
        {
          title: 'Errores',
          icon: 'fas fa-tachometer-alt',
          routes: [],
          url: 'logs/errores',
        },
        {
          title: 'Transacciones',
          icon: 'fas fa-tachometer-alt',
          routes: [],
          url: 'logs/transacciones',
        }
      ]
    },
  ];

}
