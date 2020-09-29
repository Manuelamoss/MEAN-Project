import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination'

import { WebService } from './web.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ErrorService } from './error.service';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent, ListTicketComponent, AddTicketComponent, ErrorComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule,
    CommonModule, HttpClientModule, FormsModule,
    FontAwesomeModule, NgxPaginationModule
  ],
  providers: [WebService,
    {
      provide: ErrorHandler,
      useClass: ErrorService,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
