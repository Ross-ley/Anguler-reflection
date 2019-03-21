import {Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Trading Cards';


  getPositionOfFooter(){
    var h = document.documentElement.clientHeight;
    return (h-50);
  }
}

