import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ExerciseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="codeTemplate" multiline source="codeTemplate" />
        <TextInput
          label="exerciseCodeTemplate"
          multiline
          source="exerciseCodeTemplate"
        />
        <TextInput
          label="exerciseInstructions"
          multiline
          source="exerciseInstructions"
        />
        <TextInput
          label="exerciseTestCases"
          multiline
          source="exerciseTestCases"
        />
        <TextInput label="instructions" multiline source="instructions" />
        <TextInput label="relatedLesson" source="relatedLesson" />
        <TextInput label="testCases" multiline source="testCases" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
