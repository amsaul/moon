import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ExerciseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="codeTemplate" source="codeTemplate" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="exerciseCodeTemplate" source="exerciseCodeTemplate" />
        <TextField label="exerciseInstructions" source="exerciseInstructions" />
        <TextField label="exerciseTestCases" source="exerciseTestCases" />
        <TextField label="ID" source="id" />
        <TextField label="instructions" source="instructions" />
        <TextField label="relatedLesson" source="relatedLesson" />
        <TextField label="testCases" source="testCases" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
