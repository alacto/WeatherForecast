import { ICurrentTemperatureMain } from './current-temperature-main.interface';
import { ICurrentTemperatureWeather } from './current-temperature-weather.interface';

export interface ICurrentTemperatureResponse {
    coord: any;
    weather: ICurrentTemperatureWeather[];
    main: ICurrentTemperatureMain;
    name: string;
}
