import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CourseWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  language?: "Option1";
  level?: "Option1";
  title?: StringNullableFilter;
};
