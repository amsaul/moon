import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const LessonList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Lessons"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
