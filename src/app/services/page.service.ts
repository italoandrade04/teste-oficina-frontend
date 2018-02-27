import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable()
export class PageService {

  constructor(private http: Http) { }

  public pagesBS = new BehaviorSubject<string>(null);

  getPages(){
    return this.http.get('pages')
      .map(res => res.json());
  }

  getPage(slug){
    return this.http.get('pages/'+slug)
      .map(res => res.json());
  }
  
  
}
