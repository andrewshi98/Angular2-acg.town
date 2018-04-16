import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MasonryModule } from 'angular2-masonry';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';

import { SearchService } from './starter/search.service';
import { ComponentcommService } from './starter/componentcomm.service'
import { AnimationBoxComponent } from './starter/starter-content/animation-box/animation-box.component';
import { AnimationDownloadComponent } from './starter/animation-download/animation-download.component';
import { AnimeComponent } from './anime/anime.component';
import { AnimeContentComponent } from './anime/anime-content/anime-content.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    AnimationBoxComponent,
    AnimationDownloadComponent,
    AnimeComponent,
    AnimeContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    MasonryModule
  ],
  providers: [SearchService, ComponentcommService],
  bootstrap: [AppComponent]
})
export class AppModule { }
