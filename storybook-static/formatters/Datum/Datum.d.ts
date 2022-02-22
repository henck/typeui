import { ShortDate } from "./ShortDate";
import { LongDate } from "./LongDate";
import { DistanceDate } from "./Distance";
import { ShortDateTime } from "./ShortDateTime";
import { LongDateTime } from "./LongDateTime";
import { Time } from './Time';
import { Custom } from "./Custom";
declare class Datum {
    static displayName: string;
    static ShortDate: typeof ShortDate;
    static LongDate: typeof LongDate;
    static Distance: typeof DistanceDate;
    static ShortDateTime: typeof ShortDateTime;
    static LongDateTime: typeof LongDateTime;
    static Time: typeof Time;
    static Custom: typeof Custom;
}
export { Datum };
