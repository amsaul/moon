import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const LessonShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="exercises" source="exercises" />
        <TextField label="ID" source="id" />
        <TextField label="lessonVideoURL" source="lessonVideoUrl" />
        <TextField label="linkedExercises" source="linkedExercises" />
        <TextField label="relatedCourse" source="relatedCourse" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="videoURL" source="videoUrl" />
      </SimpleShowLayout>
    </Show>
  );
};
