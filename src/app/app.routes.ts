import { Routes } from '@angular/router';
import { HomeComponent } from './homePage/landing/landing.component';
import { ProjectsComponent } from './projects/projects/projects.component';
import { ProjectDetailsComponent } from './projects/components/project-details/project-details.component';
import { AboutPageComponent } from './aboutUsPage/about-page/about-page.component';
import { ProjectWorksComponent } from './projects/components/project-works/project-works.component';
import { ContactUsComponent } from './contactPage/contact-us/contact-us.component';
export const routes: Routes = [
    {path: 'about', component: AboutPageComponent},
    {path: '', component: HomeComponent},
    { path: 'projects', component: ProjectsComponent }, 
    { path: 'projects/:category', component: ProjectWorksComponent},
    { path: 'projects/:category/:name', component: ProjectDetailsComponent},
    { path: 'contact', component: ContactUsComponent}
    


];