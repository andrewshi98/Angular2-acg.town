import { StarterComponent } from './../starter/starter.component';
import { AnimeComponent } from '../anime/anime.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component:StarterComponent },
      { path: 'anime/:id', component: AnimeComponent },
      { path: '**', redirectTo: '', pathMatch: 'full'}
    ])
  ],
  declarations: [],
  exports: [ RouterModule]
})
export class AppRoutingModule { }
