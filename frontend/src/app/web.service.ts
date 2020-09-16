import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
        return this.HttpClient.get<Ticket>(baseUrl);
    }
    create(ticket: Ticket) {
        return this.HttpClient.post<Ticket>(baseUrl, ticket);
    }
    delete(id: string) {
        return this.HttpClient.delete(`${baseUrl}/${id}`);
    }
    getOneMessage(id: string) {
        return this.HttpClient.get<Ticket>(`${baseUrl}/${id}`);
    }
}