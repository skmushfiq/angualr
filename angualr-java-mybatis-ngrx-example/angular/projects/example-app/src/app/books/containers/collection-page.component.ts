import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CollectionPageActions } from '@example-app/books/actions';
import { Book } from '@example-app/books/models';
import * as fromBooks from '@example-app/books/reducers';

@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <div class="main-content">
    <div class="container-fluid">
      <div class="card">
        <div class="card-header card-header-danger">
          <h4 class="card-title">Book Collection  <a  [routerLink]="['./find']" class="pull-right">Search from Google</a></h4>
          <p class="card-category">View All your book collections</p>
        </div>
        <div class="card-body">
          <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
        </div>
      </div>
    </div>
  </div>
    `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [
    `
      mat-card-title {
        display: flex;
        justify-content: center;
      }
    `,
  ],
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Book[]>;

  constructor(private store: Store<fromBooks.State>) {
    this.books$ = store.pipe(select(fromBooks.getBookCollection));
  }

  ngOnInit() {
    this.store.dispatch(CollectionPageActions.loadCollection());
    this.books$.subscribe(it=>console.log(it));
  }
}
