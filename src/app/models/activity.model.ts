import { KeyVal } from "./keyValue.model";

export class Activity {
  _id?: number;
  title?: KeyVal;
  description?: KeyVal;
  from?: Date;
  to?: Date;
  image?: string;
  location?: KeyVal;
  date_publication?: Date;
}
