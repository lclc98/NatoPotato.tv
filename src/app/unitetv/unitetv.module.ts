import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnitetvComponent} from './unitetv.component';
import {SharedModule} from '../shared/shared.module';
import {UnitetvRoutingModule} from './unitetv-routing.module';

@NgModule({
  declarations: [
    UnitetvComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UnitetvRoutingModule,
  ],
  bootstrap: [UnitetvComponent]
})
export class UnitetvModule {
}
