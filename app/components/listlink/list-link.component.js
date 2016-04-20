System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var LinkListNodeComponent, LinkListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // help from http://stackoverflow.com/questions/34913643/angular2-recursive-templates-in-javascript
            // details: http://blog.thoughtram.io/angular/2015/09/03/forward-references-in-angular-2.html
            LinkListNodeComponent = (function () {
                function LinkListNodeComponent() {
                }
                LinkListNodeComponent = __decorate([
                    core_1.Component({
                        selector: 'link-node',
                        template: "<a>{{node.text}}</a><link-list [nodes]='node.children'></link-list>",
                        inputs: ['node'],
                        directives: [core_1.forwardRef(function () { return LinkListComponent; })]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LinkListNodeComponent);
                return LinkListNodeComponent;
            }());
            exports_1("LinkListNodeComponent", LinkListNodeComponent);
            LinkListComponent = (function () {
                function LinkListComponent() {
                }
                LinkListComponent = __decorate([
                    core_1.Component({
                        selector: 'link-list',
                        template: "<h5>Link-List</h5>\n    <ul *ngIf='nodes'><li *ngFor='#item of nodes'><link-node [node]='item.children'></link-node></li></ul>",
                        inputs: ['nodes'],
                        outputs: [],
                        directives: [LinkListNodeComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LinkListComponent);
                return LinkListComponent;
            }());
            exports_1("LinkListComponent", LinkListComponent);
        }
    }
});
//# sourceMappingURL=list-link.component.js.map