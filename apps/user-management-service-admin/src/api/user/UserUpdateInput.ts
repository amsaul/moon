import { OAuthUpdateManyWithoutUsersInput } from "./OAuthUpdateManyWithoutUsersInput";
import { ParentWhereUniqueInput } from "../parent/ParentWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  oAuths?: OAuthUpdateManyWithoutUsersInput;
  parent?: ParentWhereUniqueInput | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
