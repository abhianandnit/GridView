import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  constructor() { }

  getData() {
    return [
      {
        username: 'ananhek',
        age: '31',
        title: 'Anand',
        min: '30',
        max: '100',
        value: '85'
      },
      {
        username: 'khansp',
        age: '31',
        title: 'Khan',
        min: '30',
        max: '100',
        value: '82'
      },
      {
        username: 'abc',
        age: '37',
        title: 'Kumar',
        min: '30',
        max: '100',
        value: '56'
      },
      {
        username: 'def',
        age: '35',
        title: 'Fry',
        min: '30',
        max: '100',
        value: '56'
      },
      {
        username: 'kumaviz',
        age: '32',
        title: 'Giri',
        min: '30',
        max: '100',
        value: '80'
      }
    ];
  }
}
