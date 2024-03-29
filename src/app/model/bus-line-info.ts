import { BusLineInfoResult } from "./bus-line-result"

export interface BusLineInfo {
    totalCount:number
    lastUpdated:string,
    description:string,
    title:string,
    about:string;
    result:BusLineInfoResult[],
    lineId:string

}
