import { Component, OnInit } from '@angular/core';
import { WebService, Ticket } from '../web.service';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {

  tickets: Ticket[];
  faTimes = faTimes;

  page = 1;

  handlePageChange(event) {
    this.page = event;
  }
  constructor(private webService: WebService) { }

  ngOnInit() {
    this.retrieveAllTickets();
  }
  retrieveAllTickets(): void {
    this.webService.getMessage()
      .subscribe(
        data => {
          this.tickets = data;
        },
        error => {
          console.log(error);
        });
  }
  refresh(): void {
    window.location.reload();
  }

  remove(id): void {
    this.webService.delete(id)
      .subscribe(
        response => {
          this.refresh();
        },
        error => {
          console.log(error);
        });
  }

  retrieveOneTicket(id) {

  }

}
