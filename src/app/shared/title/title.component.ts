import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <div class="breadcrumbs">
      <div class="breadcrumbs-inner">
          <div class="row m-0">
              <div class="col-sm-4">
                  <div class="page-header float-left">
                      <div class="page-title">
                          <h1> {{ title }} </h1>
                      </div>
                  </div>
              </div>
              <div class="col-sm-8">
                  <!-- <div class="page-header float-right">
                      <div class="page-title">
                          <ol class="breadcrumb text-right">
                              <li><a href="#">Dashboard</a></li>
                              <li><a href="#">Forms</a></li>
                              <li class="active">Advanced</li>
                          </ol>
                      </div>
                  </div> -->
              </div>
          </div>
      </div>
    </div>
  `,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleComponent {
  @Input( { required: true } ) title: string = ''
}
