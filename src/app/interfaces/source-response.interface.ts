import { IDataTableConfig } from './table-config.interface';

/**
 * Интерфейс, описывающий структуру источника данных
 */
export interface ISourceResponse {
  data: (number | string)[];    // Данные
  meta: IDataTableConfig;         // Метаданные таблицы
}
