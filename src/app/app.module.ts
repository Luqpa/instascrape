import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*
* Forms module (ngModel)
*/
import { FormsModule } from '@angular/forms';

/*
* Import for HTTP communication
*/

import { HttpClientModule } from '@angular/common/http';

/*
* Reactive forms
*/
import { ReactiveFormsModule } from '@angular/forms';

/*
* Angular Material imports
*/
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ToolbarLeftComponent} from './toolbar-left/toolbar-left.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';



import { ViewSettingsComponent } from './view-settings/view-settings.component';
import { ViewScrapeComponent } from './view-scrape/view-scrape.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ViewSavedprofilesComponent } from './view-savedprofiles/view-savedprofiles.component';
import { ListverticalGeoroutesComponent } from './listvertical-georoutes/listvertical-georoutes.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarLeftComponent,
    ViewSettingsComponent,
    ViewScrapeComponent,
    ProfileInfoComponent,
    ViewSavedprofilesComponent,
    ListverticalGeoroutesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // import HttpClientModule after BrowserModule.
    AppRoutingModule,
    ReactiveFormsModule, //reactive forms
    FormsModule, //forms module - ngModel
    BrowserAnimationsModule, //angular material
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
