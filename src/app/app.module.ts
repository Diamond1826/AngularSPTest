import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { ImgComponent } from './img/img.component';
import { VideoComponent } from './video/video.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    BrowserModule 
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ImpressumComponent,
    KontaktComponent,
    ImgComponent,
    VideoComponent,
    FooterComponent
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }