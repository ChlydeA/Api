import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CatfactsService {
  constructor() { }

  public async initCatFacts() {
    const response = await fetch(
      'https://randomuser.me/api/'
    );
    const data = await response.json();
    return data; 
  }

  public async initRandomUser() {
    const response = await fetch(
      'https://randomuser.me/api/'
    );
    const data = await response.json();
    return data; 
  }
}
