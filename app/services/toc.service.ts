import {Http, Response, Headers} from 'angular2/http';
import {Injectable} from 'angular2/core';
import 'rxjs/add/operator/map';

@Injectable()
export class TocService {
    dataUrl: string = 'http://localhost:7777/data/toc.json';
    constructor(public _http: Http) {
        
    }
    
    get(): any {
        return this._http.get(this.dataUrl).map((response:Response) => response.json());
    }
}
