import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/common/navigation-bar/navigation-bar.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { MainBackgroundComponent } from './components/common/main-background/main-background.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PercentageBarComponent } from './components/common/percentage-bar/percentage-bar.component';
import { MetricsHorizontalListComponent } from './components/common/metrics-horizontal-list/metrics-horizontal-list.component';
import { SkillsComponent } from './components/skills/skills.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationBarComponent,
    PageNotFoundComponent,
    MainBackgroundComponent,
    AboutMeComponent,
    PercentageBarComponent,
    MetricsHorizontalListComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
