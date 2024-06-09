export declare class Common {
    uuid(): string;
    string(data: any): string;
    parse<T>(stringData: string): T;
    undefinedToString<T>(data: T): T;
    arraySlice<T>(array: T[], number: number): T[][];
}
