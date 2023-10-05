import { KeyVal } from "./keyValue.model";

export class News {
  _id?: number;
  title?: KeyVal;
  image?: string;
  summary?: KeyVal;
  body?: KeyVal;
  author?: KeyVal;
  external?: boolean;
  external_link?: string;
  date_publication?: Date;
}
