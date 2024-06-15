import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OAuthUpdateInput = {
  provider?: string | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
};
