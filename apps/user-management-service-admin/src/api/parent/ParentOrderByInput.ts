import { SortOrder } from "../../util/SortOrder";

export type ParentOrderByInput = {
  children?: SortOrder;
  createdAt?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
