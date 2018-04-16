import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { NgForm } from '@angular/forms';
import { SearchService } from '../search.service';
import { ComponentcommService } from '../componentcomm.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-starter-left-side',
  animations: [
    trigger('showoverlay', [
      transition(
        ':enter', [
          style({opacity: 0}),
          animate('500ms', style({'opacity': 1}))
        ]
      ),
      transition(
        ':leave', [
          style({'opacity': 1}),
          animate('500ms', style({'opacity': 0})),
        ]
      )
  ])],
  templateUrl: './starter-left-side.component.html',
  styleUrls: ['./starter-left-side.component.css'],
  providers: []
})
export class StarterLeftSideComponent implements OnInit {

  enableform = true;
  sub : Subscription;

  constructor(private service : SearchService, private compservice : ComponentcommService) {
    this.sub = this.compservice.getLoadingstate().subscribe( result =>{
      this.enableform = result;
    });
  	}
  	
  	Search_onSubmit(){
      if(this.enableform){
        var submit_data = {};
        submit_data["name"] = $('#searchtext').val();
        submit_data["date_from"] = $.datepicker.formatDate('yy-mm-dd', $("#datepicker-front-content").datepicker("getDate"));
        submit_data["date_to"] = $.datepicker.formatDate('yy-mm-31', $("#datepicker-end-content").datepicker("getDate"));
        submit_data["tags"] = $('#tagselector').val();
        submit_data["page"] = 1;
        this.service.searchWord(submit_data);
        this.compservice.setLoadingState(false);
      }
  		return false;
    }

    Search_Cancel(){
      this.service.Search_Cancel();
    }

  ngOnInit() {
    $('#datepicker-front-content').datepicker({
      language: "zh-CN",
      format: 'yyyy-mm-dd',
      immediateUpdates: true,
      autoclose: true,
      minViewMode: 1,
      maxViewMode: 2
    });
    $('#datepicker-end-content').datepicker({
      language: "zh-CN",
      format: 'yyyy-mm-31',
      immediateUpdates: true,
      autoclose: true,
      minViewMode: 1,
      maxViewMode: 2
    });
    ($('.select2') as any).select2({
      ajax: {
        url: "http://rank.acg.town/API/taghint.py",
        dataType: 'json',
        delay: 100,
        data: function (params) {
          return {
            word: params.term, // search term
          };
        },
        processResults: function (data, params) {
          return data;
        },
        cache: true
      },
      minimumInputLength: 1,
      language: "zh-CN"
    });
  }

}
