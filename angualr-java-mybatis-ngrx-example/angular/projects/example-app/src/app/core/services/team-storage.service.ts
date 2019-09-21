import { Inject, Injectable, InjectionToken } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { map, tap, switchMap, catchError } from 'rxjs/operators';

import { Team } from '@example-app/teams/models';
import {storageFactory} from './book-storage.service';
import { HttpClient } from '@angular/common/http';
const LOCAL_STORAGE_TOKEN = new InjectionToken(
  'example-app-local-storage',
  { factory: storageFactory }
);

@Injectable({ providedIn: 'root' })
export class TeamStorageService {
  
  
  private collectionKey = 'teams-app';

  supported(): Observable<boolean> {
    return this.storage !== null
      ? of(true)
      : throwError('Local Storage Not Supported');
  }

  getCollection1(): Observable<Team[]> {
    return this.supported().pipe(
      map(_ => this.storage.getItem(this.collectionKey)),
      map((value: string | null) => (value ? JSON.parse(value) : []))
    );
  }

  getCollection(): Observable<Team[]> {
      
    return this.http.post<any>('/api/team/getAllTeams',null)
        .pipe(
          map((value:any) => {
          if(value.success) return value.result as Team[]
          else return [] 
          }),
          catchError((e)=> of([]))
          )
  }

  addToCollection(records: Team[]): Observable<Team[]> {

    return this.http.post<any>('/api/team/addTeam',records[0])
        .pipe(
          map((value:any) => {
          if(value.success) return []
          else return [] 
          }),
          catchError((e)=> of([]))
          )

    // return this.getCollection().pipe(
    //   map((value: Team[]) => [...value, ...records]),
    //   tap((value: Team[]) =>
    //     this.storage.setItem(this.collectionKey, JSON.stringify(value))
    //   )
    // );
  }

  removeFromCollection(ids: Array<string>): Observable<Team[]> {
    return this.getCollection().pipe(
      map((value: Team[]) => value.filter(item => !ids.includes(item.id))),
      tap((value: Team[]) =>
        this.storage.setItem(this.collectionKey, JSON.stringify(value))
      )
    );
  }

  deleteCollection(): Observable<boolean> {
    return this.supported().pipe(
      tap(() => {
        return of(null);
        //return this.storage.removeItem(this.collectionKey)
      })
    );
  }

  constructor(@Inject(LOCAL_STORAGE_TOKEN) private storage: Storage, private http: HttpClient) {

  }
}
