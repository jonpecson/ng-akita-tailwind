import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from 'rxjs/operators';
import { Card } from "../models/card.model";

@Injectable()
export class CardService {
  private CardAPIUrl = 'http://localhost:3000/cards/'; // URL to web api

  constructor(private http: HttpClient) {}

  getCards(): Observable<Array<Card>> {
    return this.http
        .get<Card[]>(this.CardAPIUrl)
      .pipe(map((cards) => cards || []));
  }

  /** Fetch all cards */
  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.CardAPIUrl).pipe(
      tap((_) => this.log('fetched All Card')),
      catchError(this.handleError<Card[]>('getAllCard', []))
    );
  }
  /** Create card */
  createCard(card: Card): Observable<Card> {
    return this.http.post<Card>(this.CardAPIUrl, card).pipe(
      tap((_) => this.log('create Card')),
      catchError(this.handleError<Card[]>('createCard', []))
    );
  }

  /** delete card */
  deleteCard(id: string): Observable<any> {
    return this.http.delete(this.CardAPIUrl + id).pipe(
      tap((_) => this.log('deleted card')),
      catchError(this.handleError<Card[]>('deleteCard', []))
    );
  }

  /** update card */
  updateCard(id: string | number, changes: Partial<Card>): Observable<any> {
    return this.http.put(this.CardAPIUrl + id, changes).pipe(
      tap((_) => this.log('Updated Card')),
      catchError(this.handleError<Card[]>('updatedCard', []))
    );
  }

  /**
   * Handle Http operation that failed.
   */
  private handleError<T>(operation = 'operation', result?: T): any {
    return (errors: any): Observable<T> => {
      console.error(errors);
      this.log(`${operation} failed: ${errors.message}`);
      return of(result as T);
    };
  }

  /** Log a Card message with the MessageService */
  private log(message: string): any {
    // this.messageService.add(`MfiService: ${message}`);
  }

}