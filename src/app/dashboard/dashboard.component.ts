import { Component, OnInit } from '@angular/core';
import { Observable }        from 'rxjs';

import { Store, Select } from '@ngxs/store';
import { HeroAction }    from '../hero.actions';
import { HeroState }     from '../hero.state';

import { Hero } from '../hero';

@Component({
  selector:    'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.sass' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  /** ngxs Selector **/
  @Select(HeroState.heroes) heroes$!: Observable<Hero[]>

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.store.dispatch(new HeroAction.Load())
  }
}
