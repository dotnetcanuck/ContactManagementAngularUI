import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { HomeComponent } from './home/home.component';
import { RouteGuard } from './guard/route-guard';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'createcontact', component: CreateContactComponent, canActivate: [RouteGuard]},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
