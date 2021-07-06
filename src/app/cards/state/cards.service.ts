import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { tap } from 'rxjs/operators';
import { Card } from './card.model';
import { CardsState, CardsStore } from './cards.store';

@Injectable({ providedIn: 'root' })
export class CardsService {
  constructor(private store: CardsStore, private http: HttpClient) {
  }

  private createCard({ id, name, owner, price, status, src }: Partial<Card>) {
    return {
      id,
      name, owner, price, status, src
    } as Card; 
  }


  get() {
    return this.http.get<Card[]>('http://localhost:3000/cards').pipe(tap(cards => {
      this.store.set(cards);
    }));
  }


  add({ name, owner, price, status, src }: Partial<Card>) {
    const card = this.createCard({ id: Math.random(), name, owner, price, status, src });
    this.store.add(card);
  }

  update(id: number, card: Partial<Card>) {
    return this.store.update(id, card);
  }

  delete(id:number) {
    this.store.remove(id);
  }
}

  // url:string =  'http://localhost:3000/cards';

  // constructor(private cardsStore: CardsStore, private http: HttpClient) {
  // }

  // get() {
  //   return this.http.get<Card[]>(this.url).pipe(tap(entities => {
  //     this.cardsStore.set(entities);
  //   }));
  // }

  // add(card: Card) {
  //   this.cardsStore.add(card);
  // }

  // update(id: ID, card: Partial<Card>) {
  //   this.cardsStore.update(id, card);
  // }

  // remove(id: ID) {
  //   this.cardsStore.remove(id);
  // }

// }
