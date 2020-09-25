import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { WebService, Ticket } from '../web.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  public ticket: Ticket = {
    title: '',
    priority: '',
    reason: '',
    description: '',
    createdAt: ''
  }

  saving = false;

  display = 'none';
  AddButtondisplay = 'block';
  counter = 5;
  faSpinner = faSpinner;

  constructor(private webService: WebService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    const id: string = this.activatedRoute.snapshot.params.id;
    if (id) {
      this.webService.getOneMessage(id).subscribe((ticket) => (this.ticket = ticket));
      this.AddButtondisplay = 'none';
    }
  }

  post(): void {

    this.webService.create(this.ticket)
      .subscribe(
        response => {
          response
          //this.saving = true;
          this.openModal();

        },
        error => {
          console.log(error);
        });
  }

  openModal() {
    this.display = 'block';
    let intervalId = setInterval(() => {
      this.counter = this.counter - 1;
      if (this.counter === 0) {
        this.onCloseHandled();
        this.refresh();
        clearInterval(intervalId);
      }
    }, 1000)
  }
  onCloseHandled() {
    this.display = 'none';
  }
  refresh(): void {
    window.location.reload();
  }

}
