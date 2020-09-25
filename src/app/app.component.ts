import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import {map, tap} from 'rxjs/operators';

import { ISourceResponse } from './interfaces';
import { TableDataSource } from './models';
import { TableSourceService } from './services/table-source.service';
import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  data$: Observable<ISourceResponse>;
  tableDataSource: TableDataSource<string | number>;

  constructor(private readonly tableSource: TableSourceService) {
    this.tableDataSource = new TableDataSource([]);
    this.data$ = this.tableSource.fetchData(environment.dataSourceUrl).pipe(
      map((response: ISourceResponse) => {
        response.meta.pageSize = environment.pageSize;
        return response;
      }),
      tap((response: ISourceResponse) => {
        this.tableDataSource = new TableDataSource<string | number>(response.data, response.meta.total);
      })
    );
  }

  ngOnInit(): void {
  }
}
