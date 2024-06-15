import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OAuthWhereInput = {
  id?: StringFilter;
  provider?: StringNullableFilter;
  token?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
