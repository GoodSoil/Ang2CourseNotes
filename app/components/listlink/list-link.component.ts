import {Component,Inject,forwardRef} from 'angular2/core';

export interface LinkNode {
    text: string,
    value: string,
    children: LinkNode[]
}

// help from http://stackoverflow.com/questions/34913643/angular2-recursive-templates-in-javascript
// details: http://blog.thoughtram.io/angular/2015/09/03/forward-references-in-angular-2.html
@Component({
    selector: 'link-node',
    template: `<a>{{node.text}}</a><link-list [nodes]='node.children'></link-list>`,
    inputs: ['node'],
    directives: [forwardRef(function () { return LinkListComponent; })]
})
export class LinkListNodeComponent {
    private node: LinkNode;
    constructor(){}
}

@Component({
    selector: 'link-list',
    template: `<h5>Link-List</h5>
    <ul *ngIf='nodes'><li *ngFor='#item of nodes'><link-node [node]='item.children'></link-node></li></ul>`,
    inputs: ['nodes'],
    outputs: [],
    directives: [LinkListNodeComponent]
})
export class LinkListComponent {
    private nodes: LinkNode[]; 
}
