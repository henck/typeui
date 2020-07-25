import { ShortDate } from "./ShortDate";
import { LongDate } from "./LongDate";
import { DistanceDate } from "./Distance";
import { ShortDateTime } from "./ShortDateTime";
import { LongDateTime } from "./LongDateTime";
import { Custom } from "./Custom";

class Datum {
  public static displayName = "Datum";
  public static ShortDate = ShortDate;
  public static LongDate = LongDate;
  public static Distance = DistanceDate;
  public static ShortDateTime = ShortDateTime;
  public static LongDateTime = LongDateTime;
  public static Custom = Custom
}

(Datum.ShortDate as any).displayName = "Datum.ShortDate";
(Datum.LongDate as any).displayName = "Datum.LongDate";
(Datum.Distance as any).displayName = "Datum.Distance";
(Datum.ShortDateTime as any).displayName = "Datum.ShortDateTime";
(Datum.LongDateTime as any).displayName = "Datum.LongDateTime";
(Datum.Custom as any).displayName = "Datum.Custom";

export { Datum }