System.register(['angular2/core', 'angular2/router', '../copyright/copyright.component', '../home/home.component', '../dynamiccontent/dynamic-content.component', '../topnav/top-nav.component', '../../services/toc.service'], function(exports_1, context_1) {
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
    var core_1, core_2, router_1, copyright_component_1, home_component_1, dynamic_content_component_1, top_nav_component_1, toc_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (copyright_component_1_1) {
                copyright_component_1 = copyright_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (dynamic_content_component_1_1) {
                dynamic_content_component_1 = dynamic_content_component_1_1;
            },
            function (top_nav_component_1_1) {
                top_nav_component_1 = top_nav_component_1_1;
            },
            function (toc_service_1_1) {
                toc_service_1 = toc_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(tocService) {
                    this.tocService = tocService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.get();
                };
                AppComponent.prototype.get = function () {
                    var _this = this;
                    this.tocService.get().subscribe(function (data) { _this.toc = data; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/components/app/app.component.html',
                        directives: [copyright_component_1.CopyrightComponent, top_nav_component_1.TopNavComponent, router_1.RouterOutlet],
                        providers: [toc_service_1.TocService]
                    }),
                    router_1.RouteConfig([
                        { path: '/', name: 'HomePage', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/content/', name: 'ContentPage', component: dynamic_content_component_1.DynamicContentComponent },
                    ]),
                    core_2.Injectable(), 
                    __metadata('design:paramtypes', [toc_service_1.TocService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map