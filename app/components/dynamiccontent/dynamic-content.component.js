System.register(['angular2/core', '../proofofconcept/proof-of-concept.component'], function(exports_1, context_1) {
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
    var core_1, proof_of_concept_component_1;
    var DynamicContentComponent;
    function compileToComponent(template, directives) {
        var FakeComponent = (function () {
            function FakeComponent() {
            }
            FakeComponent = __decorate([
                core_1.Component({
                    selector: 'fake',
                    template: template, directives: directives
                }), 
                __metadata('design:paramtypes', [])
            ], FakeComponent);
            return FakeComponent;
        }());
        ;
        return FakeComponent;
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (proof_of_concept_component_1_1) {
                proof_of_concept_component_1 = proof_of_concept_component_1_1;
            }],
        execute: function() {
            DynamicContentComponent = (function () {
                function DynamicContentComponent(loader, elementRef) {
                    this.loader = loader;
                    this.elementRef = elementRef;
                }
                DynamicContentComponent.prototype.ngOnInit = function () {
                    var someDynamicHtml = "<p-o-c></p-o-c><h6>" + Date.now() + "</h6>";
                    this.loader.loadIntoLocation(compileToComponent(someDynamicHtml, [proof_of_concept_component_1.ProofOfConceptComponent]), this.elementRef, 'container');
                };
                DynamicContentComponent = __decorate([
                    core_1.Component({
                        selector: 'dynamic-content',
                        template: "<h3>Dynamic Content</h3>\n    <div #container></div>"
                    }), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef])
                ], DynamicContentComponent);
                return DynamicContentComponent;
            }());
            exports_1("DynamicContentComponent", DynamicContentComponent);
        }
    }
});
//# sourceMappingURL=dynamic-content.component.js.map