export type Lesson = {
  content: string | null;
  createdAt: Date;
  exercises?: Array<"Option1">;
  id: string;
  lessonVideoUrl: string | null;
  linkedExercises?: Array<"Option1">;
  relatedCourse: string | null;
  title: string | null;
  updatedAt: Date;
  videoUrl: string | null;
};
