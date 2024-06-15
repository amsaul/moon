import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OAuthCreateInput = {
  provider?: string | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
