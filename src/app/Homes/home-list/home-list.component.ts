import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-Home-list',
  templateUrl: './Home-list.component.html',
  styleUrls: ['./Home-list.component.css']
})
export class HomeListComponent {

  title = "Welcome to GiphySearch";
  link = "https://official-joke-api.appspot.com/random_joke";
  http: Http;
  joke = [];

  constructor(http: Http) {
    this.http = http;
  }

  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = this.link;

    this.http.request(apiLink).subscribe((res: Response) => {
      this.joke = res.json();
      console.log(this.joke);
    });
  }


}