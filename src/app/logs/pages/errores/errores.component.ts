import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-errores',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './errores.component.html',
  styleUrl: './errores.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ErroresComponent { }
