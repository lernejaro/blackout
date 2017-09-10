import {Component} from '@angular/core'
import {BlackoutService} from '@lernejaro/blackout'

@Component({
  selector: 'demo-app',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private blackout: BlackoutService) {
  }

  public openInvisible(): void {
    this.blackout.show(false).subscribe(() => {
      this.blackout.hide()
    })
  }

  public openVisible(): void {
    this.blackout.show(true).subscribe(() => {
      this.blackout.hide()
    })
  }

}
