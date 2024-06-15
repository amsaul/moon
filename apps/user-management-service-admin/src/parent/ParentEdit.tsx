import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectArrayInput,
  TextInput,
  ReferenceArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const ParentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectArrayInput
          label="children"
          source="children"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
