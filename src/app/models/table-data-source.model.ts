import { BehaviorSubject, Observable, of } from 'rxjs';

import { DataSource } from './data-source.model';

/**
 * Источник данных для визуализации табличных данных
 */
export class TableDataSource<T> extends DataSource<any[]> {
  total: { [key: string]: any; };                       // Аккумулятивные данные
  pageSize: number;                                     // Количество строк на странице
  page: number;                                         // Текущая страница

  /**
   * Конструктор
   * @param data - Данные для визуализации
   * @param total - Аккумулятивные данные
   */
  constructor(data: T[], total?: {[key: string]: any}) {
    super();
    this.data$ = new BehaviorSubject<T[]>(data);
    this.total = total ? total : null;
    this.page = 1;
  }

  /**
   * Получение текущих данных для отображения
   */
  getData(): Observable<T[]> {
    return of(this.getRows());
  }

  /**
   * Получение текущего набора строк с данными
   */
  getRows(): T[] {
    return this.pageSize > 0
      ? this.data$.getValue().slice(this.page * this.pageSize - this.pageSize, this.page * this.pageSize)
      : this.data$.getValue();
  }

  /**
   * Предыдущая страница с данными
   * @param pageSize - Количество строк на странице
   */
  previousPage(pageSize: number): number {
    this.pageSize = pageSize;
    return ++this.page;
  }

  /**
   * Следующая страница с данными
   * @param pageSize - Количество строк на странице
   */
  nextPage(pageSize: number): number {
    this.pageSize = pageSize;
    return --this.page;
  }
}
