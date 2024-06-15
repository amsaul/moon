import { SortOrder } from "../../util/SortOrder";

export type ExerciseOrderByInput = {
  codeTemplate?: SortOrder;
  createdAt?: SortOrder;
  exerciseCodeTemplate?: SortOrder;
  exerciseInstructions?: SortOrder;
  exerciseTestCases?: SortOrder;
  id?: SortOrder;
  instructions?: SortOrder;
  relatedLesson?: SortOrder;
  testCases?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
