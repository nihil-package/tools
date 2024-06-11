import dayjs from 'dayjs';

interface DateInfo {
    year: string;
    nextYear: string;
    prevYear: string;
    month: string;
    nextMonth: string;
    prevMonth: string;
    date: string;
    day: number;
    dayString: string;
    hour: string;
    minute: string;
    endDate: string;
}
interface CalendarMonthData {
    date: string;
    fullDate: string;
    isActive: boolean;
}
interface CalendarTimeData {
    value: string;
    label: string;
}
interface CalendarTime {
    hours: CalendarTimeData[];
    minutes: CalendarTimeData[];
}
interface MonthData {
    nowDate: string;
    nowTime: string;
    now: string;
    prev: string;
    next: string;
}
declare class Calendar {
    date(date?: (string | number | Date)): dayjs.Dayjs;
    getDateInfo(date?: (string | number | Date)): DateInfo;
    getNowDate(): string;
    monthData(date?: string | number | Date): MonthData;
    monthArray(date?: string | number | Date): CalendarMonthData[][];
    timeData(): CalendarTime;
    dateToFormat(date?: (string | number | Date)): string;
    dateToTimeFormat(date?: (string | number | Date)): string;
    UTCString(date?: (string | number | Date)): string;
}

declare class Common {
    uuid(): string;
    string(data: any): string;
    parse<T>(stringData: string): T;
    undefinedToString<T>(data: T): T;
    arraySlice<T>(array: T[], number: number): T[][];
}

interface TokenInfo<T> {
    iat: number;
    exp: number;
    payload: T;
}
declare class Jwt {
    createAccessToken<T extends object>(info: T): Promise<string>;
    createRefreshToken<T extends object>(info: T): Promise<string>;
    verifyToken<Payload>(token: string, mode: ('accessToken' | 'refreshToken')): Promise<TokenInfo<Payload>>;
    isExpired(exp: number): boolean;
}

interface NihilTool {
    common: Common;
    calendar: Calendar;
    jwt: Jwt;
}
declare const nihilTool: NihilTool;

export { nihilTool };
