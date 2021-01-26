import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ThreeDimRoutingModule} from './three-dim-routing.module';
import {ThreeDimComponent} from './three-dim.component';

@NgModule({
  declarations: [ThreeDimComponent],
  imports: [
    CommonModule,
    ThreeDimRoutingModule
  ]
})
export class ThreeDimModule {
}
