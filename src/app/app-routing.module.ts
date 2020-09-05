import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/*
* Importing components for views
*/
import { ViewSettingsComponent } from './view-settings/view-settings.component';
import { ViewSavedprofilesComponent } from './view-savedprofiles/view-savedprofiles.component';
import { ViewScrapeComponent } from './view-scrape/view-scrape.component';

const routes: Routes = [
	{ path: '', redirectTo: '/scrape', pathMatch: 'full' }, //default, onStart
	{ path: 'scrape', component: ViewScrapeComponent },
	{ path: 'scrape/:scrapetype', component: ViewScrapeComponent },
	{ path: 'savedprofiles', component: ViewSavedprofilesComponent },
	{ path: 'settings', component: ViewSettingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
