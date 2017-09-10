import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppComponent} from './app.component'
import {BlackoutModule} from '@lernejaro/blackout'

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
