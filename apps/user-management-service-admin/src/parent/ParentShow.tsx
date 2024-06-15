import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { PARENT_TITLE_FIELD } from "./ParentTitle";

export const ParentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="children" source="children" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="User" target="parentId" label="Users">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="ID" source="id" />
            <TextField label="Last Name" source="lastName" />
            <ReferenceField
              label="Parent"
              source="parent.id"
              reference="Parent"
            >
              <TextField source={PARENT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Roles" source="roles" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
