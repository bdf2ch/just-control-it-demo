import { Component, Input, OnInit } from '@angular/core';
import { TableDataSource } from '../../models';
import { IDataTableConfig } from '../../interfaces';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.less']
})
export class DataTableComponent implements OnInit {
  @Input() dataSource: TableDataSource<any>;
  @Input() config: IDataTableConfig;

  constructor() { }

  ngOnInit() {
  }

}
