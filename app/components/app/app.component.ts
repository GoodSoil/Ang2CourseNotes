// Angular Imports
import {Component} from 'angular2/core';
import {Injectable} from 'angular2/core';
import {RouterOutlet, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
// Component Imports
import {CopyrightComponent} from '../copyright/copyright.component';
import {HomeComponent} from '../home/home.component';
import {DynamicContentComponent} from '../dynamiccontent/dynamic-content.component';
import {TopNavComponent} from '../topnav/top-nav.component';
import {LinkListNodeComponent,LinkNode,LinkListComponent} from '../listlink/list-link.component';
// Service Imports
import {TocService} from '../../services/toc.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/components/app/app.component.html',
    directives: [CopyrightComponent, TopNavComponent, RouterOutlet, LinkListComponent],
    providers: [TocService]
})
@RouteConfig([
   { path:'/', name: 'HomePage', component: HomeComponent, useAsDefault: true },
   { path:'/:content/', component: DynamicContentComponent },
//   { path:'/content/:path', name: 'ContentPage', component: DynamicContentComponent }
//   {path:'/crisis-center', name: 'CrisisCenter', component: CrisisListComponent},
//   {path:'/heroes',        name: 'Heroes',       component: HeroListComponent}
])
@Injectable()
export class AppComponent {
    private toc:{};
    private myNodes: LinkNode[] = [
        {
            text: 'One',
            value: '1',
            children: [
                {
                    text: 'One.ChildA',
                    value: '1A',
                    children: [
                        {
                            text: 'One.ChildA.Grandchild',
                            value: '1Aa',
                            children: []
                        },
                    ]
                },
                {
                    text: 'One.ChildB',
                    value: '1B',
                    children: []
                }
            ]
        },
        {
            text: 'Two',
            value: '2',
            children: [
                {
                    text: 'Two.ChildA',
                    value: '2A',
                    children: []
                },
            ]
        },
        {
            text: 'Three',
            value: '3',
            children: []
        },
    ];
    constructor(private tocService: TocService) {}
    
    ngOnInit() {
        this.get();
    }
    
    get() {
        this.tocService.get().subscribe((data) => { this.toc = data})
    }
}
