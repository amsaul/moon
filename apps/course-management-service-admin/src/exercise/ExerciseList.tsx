import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ExerciseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Exercises"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
