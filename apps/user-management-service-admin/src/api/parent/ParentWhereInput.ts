import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ParentWhereInput = {
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  users?: UserListRelationFilter;
};
