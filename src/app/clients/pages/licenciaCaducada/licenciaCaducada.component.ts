import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-licencia-caducada',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './licenciaCaducada.component.html',
  styleUrl: './licenciaCaducada.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LicenciaCaducadaComponent { }
