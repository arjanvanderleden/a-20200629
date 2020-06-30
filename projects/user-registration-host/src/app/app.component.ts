import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  navbarOpen = false;
  title = 'User Registration Host'

  private readonly closeNavbar = () => this.navbarOpen = false;
  private readonly isNavigationEnd = (event) => event instanceof NavigationEnd;

  constructor(router:Router) {
    router.events.pipe(
      filter(this.isNavigationEnd)
    ).subscribe(this.closeNavbar.bind(this))

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
