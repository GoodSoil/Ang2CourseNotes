import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {ProofOfConceptComponent} from '../proofofconcept/proof-of-concept.component';

@Component({
    selector: 'dynamic-content',
    template: `<h3>Dynamic Content</h3>
    <div #container></div>`
})
export class DynamicContentComponent {
    constructor(protected loader: DynamicComponentLoader, protected elementRef: ElementRef) {
  }
  ngOnInit() {
    const someDynamicHtml = `<p-o-c></p-o-c><h6>${Date.now()}</h6>`;

    this.loader.loadIntoLocation(
      compileToComponent(someDynamicHtml, [ProofOfConceptComponent]),
      this.elementRef,
      'container'
    );
  }    
}


function compileToComponent(template:string, directives:any[]) {
  @Component({ 
    selector: 'fake', 
    template , directives
  })
  class FakeComponent {};
  return FakeComponent;
}
