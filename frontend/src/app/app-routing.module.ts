import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { ListTicketComponent } from './list-ticket/list-ticket.component';


const routes: Routes = [
  { path: '', redirectTo: 'tickets', pathMatch: 'full' },
  {
    path: 'addTicket',
    component: AddTicketComponent,
  },
  {
    path: 'tickets',
    component: ListTicketComponent,
  },
  {
    path: 'editTicket/:id',
    component: AddTicketComponent
  },
  {
    path: '**',
    redirectTo: 'tickets',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
