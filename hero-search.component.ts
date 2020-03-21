import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { Hero } from '../hero';
import { HersoService } from '../hero.service';


@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})

export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();


  constructor() { }

  //serach term into observalbe stream
  search(term: string): void {
    this.searchTerms.next(term);
  }

//A Subject is both a source of observable values and an Observable itself. You can subscribe to a Subject as you would any Observable.
  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      //wait 300ms after keystroke before consering the searchTerms
      //ignore new temr if HeroSearchComponent

      //research rxjs library very interesting contents to be found getHeroes

      //switch to new search observable each time term changes
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term: string) => this.heroService.searchHeroes(term)),
    );
  }

}
