import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';

import { MatGridListModule, MatToolbarModule } from '@angular/material';
import { ImageService } from './image.service';


@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
