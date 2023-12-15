import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-transacciones',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './transacciones.component.html',
  styleUrl: './transacciones.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TransaccionesComponent { }
