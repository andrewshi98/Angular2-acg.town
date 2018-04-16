import { Component, OnInit, Input} from '@angular/core';
import { Http, Response } from '@angular/http';
import { ComponentcommService } from '../../componentcomm.service';

@Component({
  selector: 'app-animation-box',
  templateUrl: './animation-box.component.html',
  styleUrls: ['./animation-box.component.css']
})
export class AnimationBoxComponent implements OnInit {

  @Input() animation_id;

  coverinfo = {}

  constructor(private http : Http, private componentcomm : ComponentcommService) { }

  ngOnInit(): void {}

  load_animationinfo(){
    this.http.get('http://rank.acg.town/API/getcoverinfo.py?id='+this.animation_id).subscribe(data => {
      this.coverinfo = data.json();
    });
  }

}
