import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'sponsors', loadChildren: () => import('./sponsors/sponsors.module').then(m => m.SponsorsModule)},
  {path: 'unitetv', loadChildren: () => import('./unitetv/unitetv.module').then(m => m.UnitetvModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
