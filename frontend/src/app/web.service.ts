import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { stringify } from '@angular/compiler/src/util';

const baseUrl = 'http://localhost:3000/tickets';

export interface Ticket {
    _id?: string;
    title: string;
    priority: string;
    reason: string;
    description: string;
    createdAt: string;
}


@Injectable()
export class WebService {

    constructor(private HttpClient: HttpClient) { }

    /**
     * 
     */
    getMessage(): Observable<any> {
        return this.HttpClient.get<Ticket>(baseUrl)
            .pipe(
                catchError(this.handleError)
            )
    }
    create(ticket: Ticket) {
        return this.HttpClient.post<Ticket>(baseUrl, ticket);
    }
    delete(id: string) {
        return this.HttpClient.delete(`${baseUrl}/${id}`, { responseType: "json" })
            .pipe(
                catchError(this.handleError)
            );
    }
    getOneMessage(id: string) {
        return this.HttpClient.get<Ticket>(`${baseUrl}/${id}`);
    }
    handleError(error: HttpErrorResponse) {
        if (error.status === 404) {
            console.log("tttt");
            return throwError(error.status);
        }
        console.log(error);
        return throwError(error);
    }
}