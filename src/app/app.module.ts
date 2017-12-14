import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ImagesComponent } from './images/images.component';

import { MatGridListModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { ImageService } from './image.service';
import { ImageDetailComponent } from './image-detail/image-detail.component';

import { FlexLayoutModule } from "@angular/flex-layout";


@NgModule({
  declarations: [
    AppComponent,
    ImagesComponent,
    ImageDetailComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
