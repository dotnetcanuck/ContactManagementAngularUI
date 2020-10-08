import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactManagementService } from './services/contact-management.service';
import { HttpClientModule } from '@angular/common/http';
import { PhonePipe } from './pipes/phone.pipe';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertifyService } from './services/alertify.service';
import { SharedService } from './services/shared.service';
import { RouteGuard } from './guard/route-guard';


@NgModule({
  declarations: [
    AppComponent,
      ContactListComponent,
      PhonePipe,
      CreateContactComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [ContactManagementService, AlertifyService, SharedService, RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
