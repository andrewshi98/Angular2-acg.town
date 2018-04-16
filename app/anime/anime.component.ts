import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  animeid = 0

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit() {
    this.animeid = this.route.snapshot.params['id'];
  }

}
