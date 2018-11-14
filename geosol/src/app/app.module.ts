import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from "@ionic/storage";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddPlacePage } from "../pages/add-place/add-place";
import { PlacePage } from "../pages/place/place";
import { SetLocationPage } from "../pages/set-location/set-location";
import { AgmCoreModule } from "angular2-google-maps/core";
import { PlacesService } from "../services/places";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBgn_JEParRWt-WLJ0AfDFS-cxhjm57XwQ'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddPlacePage,
    PlacePage,
    SetLocationPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService,
    Storage
  ]
})
export class AppModule {
}

// AIzaSyBvm4M_XnIl1B8i184-uJYc4qnMmifE_VQ
