import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {HomeComponent} from './two-dim/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path: '3d', loadChildren: () => import('./three-dim/three-dim.module').then(m => m.ThreeDimModule)},

  // two-dim component is implicitly ('') the child of all these components
  {path: '', loadChildren: () => import('./two-dim/two-dim.module').then(m => m.TwoDimModule)},

  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
