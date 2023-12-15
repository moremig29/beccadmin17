import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-licencias-adquiridas',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './licenciaAdquirida.component.html',
  styleUrl: './licenciaAdquirida.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class LicenciasAdquiridasComponent { }
