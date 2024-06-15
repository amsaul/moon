import { OAuth } from "../oAuth/OAuth";
import { Parent } from "../parent/Parent";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  oAuths?: Array<OAuth>;
  parent?: Parent | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
