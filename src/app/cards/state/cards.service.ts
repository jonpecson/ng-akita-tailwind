import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { tap } from 'rxjs/operators';
import { Card } from './card.model';
import { CardsState, CardsStore } from './cards.store';

@Injectable({ providedIn: 'root' })
export class CardsService extends NgEntityService<CardsState> {
  constructor(protected store: CardsStore) {
    super(store);
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
