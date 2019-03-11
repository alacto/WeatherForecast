import { ICurrentTemperatureResponse } from './current-temperature-response.interface';

export interface IFiveDayForecastResponse {
    city: any;
    list: ICurrentTemperatureResponse[];
}
