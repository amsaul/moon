import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LessonWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  lessonVideoUrl?: StringNullableFilter;
  relatedCourse?: StringNullableFilter;
  title?: StringNullableFilter;
  videoUrl?: StringNullableFilter;
};
