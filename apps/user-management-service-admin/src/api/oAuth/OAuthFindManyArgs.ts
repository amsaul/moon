import { OAuthWhereInput } from "./OAuthWhereInput";
import { OAuthOrderByInput } from "./OAuthOrderByInput";

export type OAuthFindManyArgs = {
  where?: OAuthWhereInput;
  orderBy?: Array<OAuthOrderByInput>;
  skip?: number;
  take?: number;
};
