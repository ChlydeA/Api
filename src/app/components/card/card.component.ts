import { Component, OnInit } from '@angular/core';
import { CatfactsService } from 'src/app/services/catfacts.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent  implements OnInit {
  public catFacts?: any;
  public randomUser?: any;

  constructor(private _cat: CatfactsService, private _user: CatfactsService) { }

  ngOnInit() {
    this.fetchCatFactsFromService();
    this.fetchRandomUserFromService();
  }

  public async fetchCatFactsFromService(){
    this.catFacts = await this._cat.initCatFacts();
  } 

  public async fetchRandomUserFromService(){
    this.randomUser = await this._user.initRandomUser();
  } 
}
