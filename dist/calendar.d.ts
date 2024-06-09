import dayjs from 'dayjs';
export interface DateInfo {
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
export interface CalendarMonthData {
    date: string;
    fullDate: string;
    isActive: boolean;
}
export interface CalendarTimeData {
    value: string;
    label: string;
}
export interface CalendarTime {
    hours: CalendarTimeData[];
    minutes: CalendarTimeData[];
}
export interface MonthData {
    nowDate: string;
    nowTime: string;
    now: string;
    prev: string;
    next: string;
}
export declare class Calendar {
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
