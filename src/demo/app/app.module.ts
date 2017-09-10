import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BlackoutModule} from 'blackout'
import {AppComponent} from './app.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BlackoutModule,
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
})
export class AppModule {}
