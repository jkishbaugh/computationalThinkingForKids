import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntryComponent } from './components/entry/entry.component';
import { KnowBlocksComponent } from './components/know-blocks/know-blocks.component';
import { HomeComponent } from './components/home/home.component';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { GifComponent } from './components/gif/gif.component';
import { PongComponent } from './components/pong/pong.component';
import { PaintComponent } from './components/paint/paint.component';

const routes: Routes = [
  {path: 'blocks', component: KnowBlocksComponent},
  {path: 'gif', component: GifComponent},
  {path: 'pong', component: PongComponent},
  {path: 'paint', component: PaintComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
