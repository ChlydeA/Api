import { Component, ViewChild, viewChild } from '@angular/core';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(CardComponent) myCatFacts?: CardComponent;

  handleRefresh(event: any) {
    this.myCatFacts
      ?.fetchCatFactsFromService()
    this.myCatFacts
      ?.fetchRandomUserFromService()
      .then(() => {
        event.target.complete();
      })
      .catch((error) => {
        alert(error);
        event.target.complete();
      });
  }
  constructor() {}
  
}
