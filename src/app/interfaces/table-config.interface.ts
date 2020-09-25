import { IColumn } from './column.interface';

/**
 * Интерфейс, описывающий настройки таблицы с данными
 */
export interface IDataTableConfig {
  columns: IColumn[];
  total: { [key: string]: any; };
  pageSize?: number;
}
