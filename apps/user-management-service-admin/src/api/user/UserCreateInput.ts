import { OAuthCreateNestedManyWithoutUsersInput } from "./OAuthCreateNestedManyWithoutUsersInput";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  oAuths?: OAuthCreateNestedManyWithoutUsersInput;
  parent?: ParentWhereUniqueInput | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
