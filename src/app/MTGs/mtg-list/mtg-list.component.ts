import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-mtg-list',
  templateUrl: './mtg-list.component.html',
  styleUrls: ['./mtg-list.component.css']
})
export class MTGListComponent {

  link = "https://api.magicthegathering.io/v1/cards/";
  http: Http;
  mtg = [];

  constructor(http: Http) {
    this.http = http;
  }
  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = this.link + Math.floor(Math.random() * Math.floor(4980));

    
    this.http.request(apiLink).subscribe((res: Response) => {
      this.mtg = res.json();
      console.log(res.json());
    });
}
  displayVis() {
    document.getElementById('key').style.display = 'block';
    document.getElementById('cover').style.display = 'block';
  }
}
