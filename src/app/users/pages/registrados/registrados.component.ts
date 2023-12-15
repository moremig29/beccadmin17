import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { UsersService } from '../../../services/users.service';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-registrados',
  standalone: true,
  imports: [
    CommonModule,
    PaginatorModule,
    TableModule,
    TitleComponent
  ],
  templateUrl: './registrados.component.html',
  styleUrl: './registrados.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class RegistradosComponent {

  usuarios = signal([]);


  constructor( private usersService: UsersService ){
    this.obtenerRegistrados()
  }



  obtenerRegistrados() {
    this.usersService.getRegistrados().subscribe({
      next: ( data: any ) => {
        this.usuarios.update( () => data );

      }
    })
  }
}
