import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-licencia-free',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './licenciaFree.component.html',
  styleUrl: './licenciaFree.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LicenciaFreeComponent { }
