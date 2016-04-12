System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1;
    var TopNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TopNavComponent = (function () {
                function TopNavComponent() {
                }
                TopNavComponent.prototype.onSelect = function () {
                };
                TopNavComponent = __decorate([
                    core_1.Component({
                        selector: 'top-nav-bar',
                        inputs: ['tableOfContents'],
                        template: "<nav class=\"navbar navbar-light bg-faded\">\n  <a class=\"navbar-brand\" [routerLink]=\"['HomePage']\">Navbar</a>\n  <!-- <ul class=\"nav navbar-nav\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" [routerLink]=\"['HomePage']\">Home <span class=\"sr-only\">(current)</span></a>\n    </li>\n  </ul> -->\n  <ul class=\"nav navbar-nav\" *ngIf=\"tableOfContents\">\n    <li *ngFor=\"#topNav of tableOfContents.nav\" class=\"nav-item\">\n      <a class=\"nav-link\" (click)=\"onSelect(topNav)\">{{topNav.title}}</a>\n    </li>\n  </ul>\n  <form class=\"form-inline pull-xs-right\">\n    <input class=\"form-control\" type=\"text\" placeholder=\"Search\">\n    <button class=\"btn btn-success-outline\" type=\"submit\">Search</button>\n  </form>\n</nav>\n<br />\n<router-outlet name=\"dynamicContent\"></router-outlet>\n<pre>{{ tableOfContents | json }}</pre>\n",
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([]), 
                    __metadata('design:paramtypes', [])
                ], TopNavComponent);
                return TopNavComponent;
            }());
            exports_1("TopNavComponent", TopNavComponent);
        }
    }
});
//# sourceMappingURL=top-nav.component.js.map