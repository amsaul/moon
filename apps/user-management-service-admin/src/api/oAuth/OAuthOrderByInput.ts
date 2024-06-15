import { SortOrder } from "../../util/SortOrder";

export type OAuthOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  provider?: SortOrder;
  token?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
