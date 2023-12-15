import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-firmas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './firmas.component.html',
  styleUrl: './firmas.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FirmasComponent { }
