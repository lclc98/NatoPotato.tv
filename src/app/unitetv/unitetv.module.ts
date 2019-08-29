import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UnitetvComponent} from "./unitetv.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {SharedModule} from "../shared/shared.module";
import {UnitetvRoutingModule} from "./unitetv-routing.module";

@NgModule({
  declarations: [
    UnitetvComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    UnitetvRoutingModule,
  ],
  bootstrap: [UnitetvComponent]
})
export class UnitetvModule {
}
