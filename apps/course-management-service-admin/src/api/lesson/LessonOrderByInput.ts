import { SortOrder } from "../../util/SortOrder";

export type LessonOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  exercises?: SortOrder;
  id?: SortOrder;
  lessonVideoUrl?: SortOrder;
  linkedExercises?: SortOrder;
  relatedCourse?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  videoUrl?: SortOrder;
};
