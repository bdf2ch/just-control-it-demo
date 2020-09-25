import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Источник данных для визуализации
 */
export abstract class DataSource<T> {
  protected data$: BehaviorSubject<T>;    // Данные

  /**
   * Получение данных
   */
  abstract getData(): Observable<T>;

  /**
   * Конструктор
   */
  protected constructor() {}
}
