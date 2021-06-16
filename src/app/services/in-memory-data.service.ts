import { Card } from "../models/card.model";

export class InMemoryDataService {
  createDb() {
    const cards: Card [] = [
      { id: 11, name: 'Flufferton Sternbuncle', owner: 'John', price: 100, status: 'sold', src:'../../assets/cats/FluffertonSternbuncle.svg'},
      { id: 12, name: 'Gaga Tickears', owner: 'John', price: 100, status: 'available' , src: '../../assets/cats/GagaTickears.svg'},
      { id: 13, name: 'Lala Bilihun', owner: 'John', price: 100, status: 'available', src: '../../assets/cats/LalaBilihun.svg'  },
      { id: 14, name: 'Max Abrashorts', owner: 'John', price: 100, status: 'available', src: '../../assets/cats/MaxAbrashorts.svg'  },
      { id: 15, name: 'Muca Grimskicakes', owner: 'John', price: 100, status: 'available', src: '../../assets/cats/MucaGrimskicakes.svg'  },
      { id: 16, name: 'Nina Fuzzyplum', owner: 'John', price: 100, status: 'available', src: '../../assets/cats/NinaFuzzyplum.svg'  },
      { id: 17, name: 'Old Bahears', owner: 'John', price: 100, status: 'available', src: '../../assets/cats/OldBahears.svg'  },
      { id: 18, name: 'Professor Allhun', owner: 'John', price: 100, status: 'available', src: '../../assets/cats/ProfessorAllhun.svg'  },
      { id: 19, name: 'Professor Fuzzycaw', owner: 'John', price: 100, status: 'available', src: '../../assets/cats/ProfessorFuzzycaw.svg'  },
      { id: 20, name: 'Professor Whampaws', owner: 'John', price: 100, status: 'available', src: '../../assets/cats/ProfessorWhampaws.svg'  }
    ];
    return { cards };
  }
}
