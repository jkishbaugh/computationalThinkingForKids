import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntryComponent } from './components/entry/entry.component';
import { KnowBlocksComponent } from './components/know-blocks/know-blocks.component';
import { HomeComponent } from './components/home/home.component';
import { UnitListComponent } from './components/unit-list/unit-list.component';
import { GifComponent } from './components/gif/gif.component';
import { PongComponent } from './components/pong/pong.component';
import { HeaderComponent } from './components/header/header.component';
import { PaintComponent } from './components/paint/paint.component';
import { ModalComponent } from './components/modal/modal.component';
import { StuckAdviceComponent } from './components/stuck-advice/stuck-advice.component';
import { FooterComponent } from './components/footer/footer.component';
import { ColoredCircleComponent } from './components/colored-circle/colored-circle.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ButtonComponent } from './components/button/button.component'
import { ChallengeComponent } from './components/challenge/challenge.component';
import { UnitComponent } from './components/unit/unit.component';
@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    KnowBlocksComponent,
    ChallengeComponent,
    HomeComponent,
    UnitListComponent,
    GifComponent,
    PongComponent,
    HeaderComponent,
    PaintComponent,
    ModalComponent,
    StuckAdviceComponent,
    FooterComponent,
    ColoredCircleComponent,
    ButtonComponent,
    UnitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
