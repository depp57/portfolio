import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ThreeDimComponent} from './three-dim.component';

const routes: Routes = [
  {path: '', component: ThreeDimComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeDimRoutingModule {
}
