import { ShortDate } from "./ShortDate";
import { LongDate } from "./LongDate";
import { DistanceDate } from "./Distance";
import { ShortDateTime } from "./ShortDateTime";
import { LongDateTime } from "./LongDateTime";
import { Time } from './Time';
import { Custom } from "./Custom";
var Datum = /** @class */ (function () {
    function Datum() {
    }
    Datum.displayName = "Datum";
    Datum.ShortDate = ShortDate;
    Datum.LongDate = LongDate;
    Datum.Distance = DistanceDate;
    Datum.ShortDateTime = ShortDateTime;
    Datum.LongDateTime = LongDateTime;
    Datum.Time = Time;
    Datum.Custom = Custom;
    return Datum;
}());
Datum.ShortDate.displayName = "Datum.ShortDate";
Datum.LongDate.displayName = "Datum.LongDate";
Datum.Distance.displayName = "Datum.Distance";
Datum.ShortDateTime.displayName = "Datum.ShortDateTime";
Datum.LongDateTime.displayName = "Datum.LongDateTime";
Datum.Time.displayName = "Datum.Time";
Datum.Custom.displayName = "Datum.Custom";
export { Datum };
