import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ExerciseWhereInput = {
  codeTemplate?: StringNullableFilter;
  exerciseCodeTemplate?: StringNullableFilter;
  exerciseInstructions?: StringNullableFilter;
  exerciseTestCases?: StringNullableFilter;
  id?: StringFilter;
  instructions?: StringNullableFilter;
  relatedLesson?: StringNullableFilter;
  testCases?: StringNullableFilter;
  title?: StringNullableFilter;
};
