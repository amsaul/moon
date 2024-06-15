import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OAuthListRelationFilter } from "../oAuth/OAuthListRelationFilter";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  oAuths?: OAuthListRelationFilter;
  parent?: ParentWhereUniqueInput;
  username?: StringFilter;
};
