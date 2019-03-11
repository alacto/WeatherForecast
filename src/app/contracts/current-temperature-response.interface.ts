import { IMain } from './main.interface';
import { IWeather } from './weather.interface';

export interface ICurrentTemperatureResponse {
    dt_txt?: string;
    coord: any;
    weather: IWeather[];
    main: IMain;
    name: string;
}
