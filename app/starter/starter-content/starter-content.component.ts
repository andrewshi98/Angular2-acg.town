import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SearchService } from '../search.service';
import { ComponentcommService } from '../componentcomm.service';
import { AnimationBoxComponent } from './animation-box/animation-box.component';

import { } from 'jquery';
import { } from 'morris.js';
import { } from 'jquery-knob';
import { } from 'bootstrap-datepicker';
import { } from 'jqueryui';
import { } from 'daterangepicker';
import { } from 'jquery.slimscroll';
import { } from 'imagesloaded';

// Variable in assets/js/scripts.js file
declare var AdminLTE: any;

@Component({
  selector: 'app-starter-content',
  templateUrl: './starter-content.component.html',
  styleUrls: ['./starter-content.component.css'],
  providers: []
})
export class StarterContentComponent implements OnInit {

  searchresult = [];
  returnstate = 0;
  currentpage = 0;
  totalpage = 0;

  sub: Subscription;
  content_title_style = { left: 'calc(50% - 2em)' };
  content_title_small = {};
  content_title_text = "动漫排名";
  content_title_small_text = "搜索结果";
  sidebartoggle = false;

  newdatastate = false;
  newdatacontainer = [];
  addelementworkingstate = false;


  constructor(private service: SearchService, private commservice: ComponentcommService) {
    this.sub = this.service.getSearchResult().subscribe(searchresult => {
      this.commservice.setLoadingState(true);
      if (searchresult['state'] == 200) {
        this.currentpage = searchresult['page'];
        this.totalpage = searchresult['totalpage'];
        
        console.log(this.totalpage);        
        this.returnstate = 200;
        this.newdatastate = true;
        this.newdatacontainer = searchresult['data'];
        //this.addelement_helper = searchresult['data'];
        this.checkelement();
        this.changeTitle_Search();
      } else if(searchresult['state'] == 100) {
        this.returnstate = 100;
        this.changeTitle_Main();
        this.searchresult = [];
        this.newdatastate = true;
        this.newdatacontainer = [];
        this.checkelement();
        this.currentpage = 0;
        this.totalpage = 0;
        this.service.getRecommendAnime();
      } else if(searchresult['state'] == 300){        
        this.returnstate = 300;
        this.newdatastate = true;
        this.newdatacontainer = searchresult['data'];
        this.checkelement();
        this.changeTitle_Main();
      }
    });
  }

  ngOnInit() {
    // Update the AdminLTE layouts
    AdminLTE.init();
    $("#sidebar-toggle").click(function () {
      if (this.sidebartoggle) {
        setTimeout(() => {
          $("#masonrycontainer").css("width", "100vw");
          this.sidebartoggle = !this.sidebartoggle;
          ($("#masonrycontainer") as any).masonry({ transitionDuration: '0.3s' }).masonry("reloadItems");
        }, 150);
      }
      else {
        if($('.masonrycontainer').css('min-width') != '1px')
          $("#masonrycontainer").css("width", "80vw");
        this.sidebartoggle = !this.sidebartoggle;
        ($("#masonrycontainer") as any).masonry({ transitionDuration: '0.3s' }).masonry("reloadItems");
      }
    })
    this.service.getRecommendAnime();
  }

  changeTitle_Search() {
    this.content_title_style['left'] = '0%';
    this.content_title_small['visibility'] = 'visible';
    this.content_title_small['opacity'] = 1;
    this.content_title_text = "动漫搜索";
  }

  changeTitle_Main() {
    this.content_title_style['left'] = '45%';
    this.content_title_small['visibility'] = 'hidden';
    this.content_title_small['opacity'] = 0;
    this.content_title_text = "动漫排名";
  }

  changepage(page){
    this.commservice.setLoadingState(false);
    this.service.switchPage(page);
  }

  checkelement(){
    if (this.addelementworkingstate == false && this.newdatastate == true){
      this.newdatastate = false;
      this.searchresult = [];
      this.slowlyaddselement(this.newdatacontainer);
    }
  }

  slowlyaddselement(element) {
    this.addelementworkingstate = true;
    if (element.length != 0 && this.newdatastate == false) {
      this.searchresult.push(element.shift());
      setTimeout(() => { this.slowlyaddselement(element) }, 100);
    }else if(this.newdatastate == true){
      this.searchresult = [];
      this.newdatastate = false;
      this.slowlyaddselement(this.newdatacontainer);
    }else if(element.length == 0){
      ($("#masonrycontainer") as any).masonry({ transitionDuration: '0.3s' }).masonry("reloadItems");
      this.addelementworkingstate = false;
    }
  }

}
