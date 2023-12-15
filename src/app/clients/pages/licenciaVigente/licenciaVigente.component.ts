import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-licencia-vigente',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: 'licenciaVigente.component.html',
  styleUrl: './licenciaVigente.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LicenciaVigenteComponent { }
