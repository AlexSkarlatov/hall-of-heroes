import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}




// import { Injectable } from '@angular/core';
// import { Hero } from './hero';
// import { HEROES } from './mock-heroes';
// import { Observable, of } from 'rxjs';
// import { MessageService } from '../message.service';
//
// @Injectable({
//   providedIn: 'root'
// })
// // getHeroes(): Hero[] {
// //   return HEROES;
// // }
// /*
// an interesting debugging lesson I learned, i saw in the console it said that
// getheroes was not a function and I could not believe that i just typed THE
// the entire function outside of the class spent 15 minutes staring at the function why it wasn't being exported
// until i realized it wasnt even in the class
// i knew it was supposed to go in the class but i just did not notice because there were so few lines in the initial file
// */
// export class HeroService {
//
//   constructor(private messageService: MessageService) { }
//
//
//
//   getHeroes(): Observable<Hero[]> {
//     // TODO: send the message _after_ fetching the heroes
//     this.messageService.add('HeroService: fetched heroes');
//     return of(HEROES);
//   }
//
//   // getHeroes(): Hero[] {
//   //   return HEROES;
//   // }
//
//
// }
//
//
//
// // NOW TO PROVIDE DTHE HERO SERVICE TO THE Component
//
//
//
// /*
//
// You must make the HeroService available to the dependency injection system before Angular can inject it into the HeroesComponent by registering a provider. A provider is something that can create or deliver a service; in this case, it instantiates the HeroService class to provide the service.
//
// To make sure that the HeroService can provide this service, register it with the injector, which is the object that is responsible for choosing and injecting the provider where the app requires it.
//
// By default, the Angular CLI command ng generate service registers a provider with the root injector for your service by including provider metadata, that is providedIn: 'root' in the @Injectable() decorator.
// */
