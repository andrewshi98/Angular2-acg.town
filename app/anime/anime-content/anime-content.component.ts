import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-anime-content',
  templateUrl: './anime-content.component.html',
  styleUrls: ['./anime-content.component.css']
})
export class AnimeContentComponent implements OnInit {

  @Input() animeid;

  animationdata = {};
  anime_magnet = [];
  animationtags = [];

  constructor(private http: Http, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.http.get('http://rank.acg.town/API/getanime.py?id=' + this.animeid).subscribe(data => {
      this.animationdata = data.json();
      console.log(this.animationdata);
      if (this.animationdata['summary'] == "")
        this.animationdata['summary'] = "没有简介";
      else if (this.animationdata['summary'].substring(0, 2) != "　　") {
        this.animationdata['summary'] = "　　" + this.animationdata['summary'];
      }
    });

    this.http.get('http://rank.acg.town/API/getanimemagnet.py?id=' + this.animeid).subscribe(animemagnet => {
      this.anime_magnet = animemagnet.json();
    });

    this.http.get('http://rank.acg.town/API/getanimetags.py?id=' + this.animeid).subscribe(tag => {
      // Read the result field from the JSON response.
      this.animationtags = tag.json();
    });
  }

  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

}
