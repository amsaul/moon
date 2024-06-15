import { UserCreateNestedManyWithoutParentsInput } from "./UserCreateNestedManyWithoutParentsInput";

export type ParentCreateInput = {
  children?: Array<"Option1">;
  email?: string | null;
  name?: string | null;
  users?: UserCreateNestedManyWithoutParentsInput;
};
