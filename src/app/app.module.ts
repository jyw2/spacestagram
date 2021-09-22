import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PictureManagerComponent } from './picture-manager/picture-manager.component';
import { PictureComponent } from './picture/picture.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyLikedPicsComponent } from './my-liked-pics/my-liked-pics.component'

@NgModule({
  declarations: [
    AppComponent,
    PictureManagerComponent,
    PictureComponent,
    MyLikedPicsComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
