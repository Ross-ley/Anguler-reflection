import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MTGListComponent } from './MTGs/mtg-list/mtg-list.component';
import { PokemonTCGListComponent } from './PokemonTCG/PokemonTCG-list/PokemonTCG-list.component';
import { HomeListComponent } from './Homes/Home-list/Home-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MTGListComponent,
    HomeListComponent,
    PokemonTCGListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    NgbModule,
    RouterModule.forRoot([
      {path: '', redirectTo: 'Home', pathMatch: 'full'},
      {path: 'Home', component: HomeListComponent},
      {path: 'PokemonTCG', component: PokemonTCGListComponent},
      {path: 'MagicTheGathing', component: MTGListComponent}
    ])
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
