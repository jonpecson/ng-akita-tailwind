export interface Card {
  id: number;
  name: string;
  owner: string;
  price: number;
  status: string;
  src: string
}

export function createCard(params: Card) {
  return {
    
  } as Card;
}
