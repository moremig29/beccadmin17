import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-asignar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './asignar.component.html',
  styleUrl: './asignar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AsignarComponent { }
