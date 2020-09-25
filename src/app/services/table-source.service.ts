import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ISourceResponse } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class TableSourceService {

  constructor(private readonly http: HttpClient) {}

  /**
   * Получение данных от источника данных
   * @param url - Url источника данных
   */
  fetchData(url: string): Observable<ISourceResponse> {
    return this.http.get(url).pipe(
      map((response: ISourceResponse) => response)
    );
  }
}
