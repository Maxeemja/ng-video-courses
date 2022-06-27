import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  template: `
    <div class="bread-container">
      <div class="container">
        <div class="bread-group">
          <span class="bread-item" *ngFor="let item of path; let idx = index">
            <a *ngIf="idx !== this.path.length - 1; else notAlink" [routerLink]="'/' + item">{{formatItem(item)}}</a>
            <ng-template #notAlink>{{formatItem(item)}}</ng-template>
            <span class="divider" *ngIf="idx !== this.path.length - 1">/</span>
          </span>
        </div>
      </div>
    </div>
  `,
})
export class NavbarComponent {
  path: string[] = []

  formatItem(item: string) {
    return `${item.charAt(0).toUpperCase()}${item.slice(1)}`
  }

  constructor(private router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.path = router.url.slice(1).split('/')
        console.log(this.path)
      }
    })
  }


}
