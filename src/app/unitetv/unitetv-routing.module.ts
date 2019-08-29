import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UnitetvComponent} from "./unitetv.component";

const routes: Routes = [
  {path: '', component: UnitetvComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnitetvRoutingModule {

}
