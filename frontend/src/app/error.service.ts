import { Injectable, ErrorHandler, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { WebService } from './web.service';

@Injectable({
  providedIn: 'root'
})

export class ErrorService implements ErrorHandler {
  constructor(private injector: Injector, private webService: WebService) { }
  handleError(error: any) {
    const router = this.injector.get(Router);
    //Outsider errors: (also known as server side errors)
    if (Error instanceof HttpErrorResponse) {
      console.log("aqui" + error.status);
    }
    //insider errors - as client side errors
    else {
      console.error("an error occurred here broo");
    }
    router.navigate(['error']);
  }
}
