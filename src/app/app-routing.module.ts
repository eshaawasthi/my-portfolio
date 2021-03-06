import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/common/page-not-found/page-not-found.component';
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { SkillsComponent } from "./components/skills/skills.component";
import { ExperienceComponent } from "./components/experience/experience.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactMeComponent } from "./components/contact-me/contact-me.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
