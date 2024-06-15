export type LessonCreateInput = {
  content?: string | null;
  exercises?: Array<"Option1">;
  lessonVideoUrl?: string | null;
  linkedExercises?: Array<"Option1">;
  relatedCourse?: string | null;
  title?: string | null;
  videoUrl?: string | null;
};
