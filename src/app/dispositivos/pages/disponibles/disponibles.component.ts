import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-disponibles',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './disponibles.component.html',
  styleUrl: './disponibles.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DisponiblesComponent { }
