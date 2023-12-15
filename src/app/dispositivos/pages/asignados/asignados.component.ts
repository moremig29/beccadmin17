import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-asignados',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './asignados.component.html',
  styleUrl: './asignados.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AsignadosComponent { }
