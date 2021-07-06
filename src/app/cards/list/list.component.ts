import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';
import { CardsQuery } from '../state/cards.query';
import { CardsService } from '../state/cards.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  cards: Card[] = [];
  filteredCards: Card[] = [];
  cards$: Observable<Card[]> = this.cardsQuery.selectAll();


  constructor(
    private cardsService: CardsService, 
    private cardsQuery: CardsQuery,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Initialize Cards Store from our database
      this.cardsService.get().subscribe()
  }

  filter(_status:string) {
    this.cards$ = this.cardsQuery.selectAll({
      filterBy: ({ status }) => status === _status
    })
  }

  async buy(card: Card) {
    // Spread operator to take a shallow copy of a readonly object to make it readable
    let _card = { ...card};
    _card.status = 'sold';
    _card.price = 0;
    await this.cardsService.update(_card.id,_card).toPromise();
  }

  async viewCard(card: Card) {
    this.router.navigate([`/card/${card.id}`])
  }

}
