import {NgModule} from '@angular/core';
import {SafePipe} from '../safe.pipe';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    SafePipe,
  ],
  exports: [
    SafePipe,
    FontAwesomeModule
  ]
})
export class SharedModule {
}
