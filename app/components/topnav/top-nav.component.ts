import {Component} from 'angular2/core';
import {NgClass} from 'angular2/common';

import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'top-nav-bar',
    inputs: ['tableOfContents'],
    template: `<nav class="navbar navbar-light bg-faded">
  <a class="navbar-brand" [routerLink]="['HomePage']">Navbar</a>
  <!-- <ul class="nav navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" [routerLink]="['HomePage']">Home <span class="sr-only">(current)</span></a>
    </li>
  </ul> -->
  <ul class="nav navbar-nav" *ngIf="tableOfContents">
    <li *ngFor="#topNav of tableOfContents.nav" class="nav-item">
      <a class="nav-link" [ngClass]="{active: topNav===currentNav}" (click)="onSelect(topNav)">{{topNav.title}}</a>
    </li>
  </ul>
  <form class="form-inline pull-xs-right">
    <input class="form-control" type="text" placeholder="Search">
    <button class="btn btn-success-outline" type="submit">Search</button>
  </form>
</nav>
<br />
<router-outlet name="dynamicContent"></router-outlet>
<details><summary class="h4">tableOfContents</summary><pre>{{ tableOfContents | json }}</pre></details>
<details><summary class="h4">currentNav</summary><pre>{{ currentNav | json }}</pre></details>

`,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  //{path:'/',    name: 'CrisisList',   component: CrisisListComponent, useAsDefault: true},
  //{path:'/:id', name: 'CrisisDetail', component: CrisisDetailComponent}
])
export class TopNavComponent {
    public tableOfContents: any;
    private currentNav: any;
    constructor(private _router: Router) {}
    onSelect(nav) {
        this.currentNav = nav;
        
    }
}
