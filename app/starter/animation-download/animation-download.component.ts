import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ComponentcommService } from '../componentcomm.service';
import { Http, Response } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-animation-download',
  templateUrl: './animation-download.component.html',
  styleUrls: ['./animation-download.component.css']
})
export class AnimationDownloadComponent implements OnInit {

  showcomponent = false;
  anime_link = []

  constructor(private commService : ComponentcommService, private http : Http, private sanitizer : DomSanitizer) { }

  ngOnInit() {
    this.commService.getAnimeDownloadId().subscribe(newdownlaodid=>{
      this.showcomponent = true;
      console.log(this.showcomponent);
      this.http.get('http://rank.acg.town/API/getanimemagnet.py?id='+newdownlaodid).subscribe(animemagnet => {
        this.anime_link = animemagnet.json();
        });
    });
  }

  sanitize(url:string){
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }

  close_download_box(){
    this.showcomponent = false;
  }

}
