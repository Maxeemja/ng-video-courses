import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {filter, takeUntil, tap} from "rxjs/operators";
import {Subject} from "rxjs";


@Component({
  selector: 'app-navbar',
  template: `
    <div class="bread-container">
      <div class="container">
        <div class="bread-group">
          <span class="bread-item" *ngFor="let item of path; let idx = index">
            <a *ngIf="idx !== this.path.length - 1; else notAlink" [routerLink]="'/' + item">{{item | titlecase}}</a>
            <ng-template #notAlink>{{item | titlecase}}</ng-template>
            <span class="divider" *ngIf="idx !== this.path.length - 1">/</span>
          </span>
        </div>
      </div>
    </div>
  `,
})
export class NavbarComponent {
  path: string[] = []

  private readonly destroy$: Subject<void> = new Subject();

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy$),
      tap(() => {
        this.path = router.url.slice(1).split('/')
      })
    )
      .subscribe()
  }

  ngOnDestroy() {
    console.log('destroyed')
    this.destroy$.next()
    this.destroy$.complete()
  }

}
