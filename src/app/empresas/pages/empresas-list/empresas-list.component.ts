import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-empresas-list',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './empresas-list.component.html',
  styleUrl: './empresas-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class EmpresasListComponent { }
