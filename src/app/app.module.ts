import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MainBackgroundComponent } from './components/main-background/main-background.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PercentageBarComponent } from './components/percentage-bar/percentage-bar.component';
import { MetricsHorizontalListComponent } from './components/metrics-horizontal-list/metrics-horizontal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    MainBackgroundComponent,
    AboutMeComponent,
    PercentageBarComponent,
    MetricsHorizontalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
