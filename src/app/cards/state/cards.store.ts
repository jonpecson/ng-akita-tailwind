import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Card } from './card.model';

export interface CardsState extends EntityState<Card> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cards' })
export class CardsStore extends EntityStore<CardsState> {

  constructor() {
    super();
  }

}
