import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  cardForm!: FormGroup;
  card: Card = {
    id: 0,
    name: '',
    owner: '',
    price: 0,
    src: '',
    status: 'sold',
  };
  defaultCat = "'../../assets/cats/GagaTickears.svg"

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cardService: CardService,
    private router: Router
  ) {
    this.route.paramMap.subscribe(async (params) => {
      const id = params.get('id');
      if(id && id != "0") {
        this.card = (await this.cardService.getCards().toPromise())
          .filter((card) => card.id.toString() == id)[0];
          console.log("🚀 ~ file: detail.component.ts ~ line 39 ~ DetailComponent ~ this.route.paramMap.subscribe ~ this.card", this.card)
        this.initializeForm();
      }
    });
  }
  initializeForm() {
    if (this.card) {
      this.cardForm.patchValue({
        name: this.card.name,
        owner: this.card.owner,
        price: this.card.price,
      });
    }
  }

  ngOnInit() {
    this.cardForm = this.fb.group({
      name: ['', Validators.required],
      owner: ['', Validators.required],
      price: [0, Validators.required],
    });
  }

  async create(card:any) {
    this.card.id = this.generateUniqueNumber()
    this.card.name = card.name;
    this.card.owner = card.owner;
    this.card.price = card.price;
    this.card.src = this.defaultCat;

    if(card.price > 0) {
      this.card.status = "available"
    } else {
      this.card.status = "sold"
    }
    await this.cardService.createCard(this.card).toPromise();
    this.router.navigate(["/cards"])
    console.log('create');
  }
  generateUniqueNumber(): number {
    return new Date().valueOf();
  }

  async update(card:any) {
    this.card.name = card.name;
    this.card.owner = card.owner;
    this.card.price = card.price;
    if(card.price > 0) {
      this.card.status = "available"
    }
    await this.cardService.updateCard(this.card.id, this.card).toPromise();
    this.router.navigate(["/cards"])
  }
}
