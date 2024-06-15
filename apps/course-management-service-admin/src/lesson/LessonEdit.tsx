import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectArrayInput,
} from "react-admin";

export const LessonEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="content" multiline source="content" />
        <SelectArrayInput
          label="exercises"
          source="exercises"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="lessonVideoURL" source="lessonVideoUrl" />
        <SelectArrayInput
          label="linkedExercises"
          source="linkedExercises"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="relatedCourse" source="relatedCourse" />
        <TextInput label="title" source="title" />
        <TextInput label="videoURL" source="videoUrl" />
      </SimpleForm>
    </Edit>
  );
};
