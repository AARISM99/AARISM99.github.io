import { Coords } from "./coords.model";
import { KeyVal } from "./keyValue.model";

export class Activity {
  _id?: number;
  title?: KeyVal;
  description?: KeyVal;
  by?: KeyVal;
  from?: Date;
  to?: Date;
  image?: string;
  locationAddress?: KeyVal;
  locationCoordinates?: Coords;
  date_publication?: Date;
}
