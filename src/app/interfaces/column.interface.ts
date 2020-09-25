import { EColumnType, EMetricType } from '../enums';

/**
 * Интерфейс, описывающий колонку в таблице
 */
export interface IColumn {
  type: EColumnType;          // Тип колонки
  key: string;                // Ключ
  title: string;              // Наименование
  metricType: EMetricType;    // Тип метрики
  currency?: string;          // Валюта
}
