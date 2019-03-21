import { Component} from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-PokemonTCG-list',
  templateUrl: './PokemonTCG-list.component.html',
  styleUrls: ['./PokemonTCG-list.component.css']
})
export class PokemonTCGListComponent{
 

  link = "https://api.pokemontcg.io/v1/cards?name=";
  http: Http;
  pokemontcg = [];

  constructor(http: Http) {
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = this.link + searchTerm.value;

    
    this.http.request(apiLink).subscribe((res: Response) => {
      const resjson = res.json();
      console.log(resjson);
    if (resjson.cards.length <= 0) {
      this.pokemontcg = []
      document.getElementById('notFound').innerHTML = "Sorry not found. Are you sure you spelt that correct/Is that a card"
      console.log('this is a pain');
    } else {
      this.pokemontcg = resjson.cards;
      document.getElementById('notFound').innerHTML = " "
    }

    });
    
  }

}
