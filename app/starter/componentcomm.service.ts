import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ComponentcommService {

  loadingstate = new Subject<boolean>();
  animedownloadrequestid = new Subject<any>();

  constructor() { }

  setLoadingState(state){
    this.loadingstate.next(state);
  }

  getLoadingstate(): Observable<boolean>{
    return this.loadingstate.asObservable();
  }

  setAnimeDownloadId(id){
    this.animedownloadrequestid.next(id);
  }

  getAnimeDownloadId(): Observable<boolean>{
    return this.animedownloadrequestid.asObservable();
  }

}
