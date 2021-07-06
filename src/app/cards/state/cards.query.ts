import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { CardsStore, CardsState } from './cards.store';


@Injectable({ providedIn: 'root' })
export class CardsQuery extends QueryEntity<CardsState> {

  constructor(protected store: CardsStore) {
    super(store);
  }

}
