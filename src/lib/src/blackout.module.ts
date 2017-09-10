import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
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
