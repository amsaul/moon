import { SortOrder } from "../../util/SortOrder";

export type CourseOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  language?: SortOrder;
  lessons?: SortOrder;
  level?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
