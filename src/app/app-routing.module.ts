import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AboutMeComponent } from "./about-me/about-me.component";
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
