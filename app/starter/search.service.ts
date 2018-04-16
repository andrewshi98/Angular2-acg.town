import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';

@Injectable()
export class SearchService{

  searchresult = new Subject<any>();
  lastsearchdata = {};

  constructor(private http : Http){

  }

  searchWord(search_data){
    console.log(JSON.stringify(search_data));
    this.lastsearchdata = search_data;
    this.http.get("http://rank.acg.town/API/searchanime.py?json=" + JSON.stringify(search_data))
    .subscribe(
      data => {
        console.log(data);
        this.searchresult.next(data.json());
      }
    )
  }

  getRecommendAnime(){
    this.http.get("http://rank.acg.town/API/getrecommendanime.py")
    .subscribe(
      data => {
        this.searchresult.next(data.json());
      }
    )
  }

  switchPage(pagechange){
    this.lastsearchdata['page'] += pagechange;
    this.http.get("http://rank.acg.town/API/searchanime.py?json=" + JSON.stringify(this.lastsearchdata))
    .subscribe(
      data => {
        this.searchresult.next(data.json());
      }
    )
  }

  Search_Cancel(){
    this.searchresult.next({"state":100, "data":""});
  }

  getSearchResult(): Observable<any>{
    return this.searchresult.asObservable();
  }
}
