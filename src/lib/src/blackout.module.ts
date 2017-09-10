import {NgModule} from '@angular/core'
import {BlackoutComponent} from './blackout.component'
import {BlackoutService} from './blackout.service'

@NgModule({
  declarations: [
    BlackoutComponent,
  ],
  providers: [
    BlackoutService,
  ],
  entryComponents: [
    BlackoutComponent,
  ],
})
export class BlackoutModule {
}
