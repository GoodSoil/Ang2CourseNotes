import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'top-nav-bar',
    inputs: ['tableOfContents'],
    template: `<nav class="navbar navbar-light bg-faded">
  <a class="navbar-brand" href="#">Navbar</a>
  <ul class="nav navbar-nav">
    <li class="nav-item active">
      <a class="nav-link" [routerLink]="['HomePage']">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" [routerLink]="['ContentPage']">Features</a>
    </li>
  </ul>
  <form class="form-inline pull-xs-right">
    <input class="form-control" type="text" placeholder="Search">
    <button class="btn btn-success-outline" type="submit">Search</button>
  </form>
</nav>
<br />
<pre>{{ tableOfContents | json }}</pre>
`,
    directives: [ROUTER_DIRECTIVES]
})
export class TopNavComponent {
    public tableOfContents: any;
}
