import { UserUpdateManyWithoutParentsInput } from "./UserUpdateManyWithoutParentsInput";

export type ParentUpdateInput = {
  children?: Array<"Option1">;
  email?: string | null;
  name?: string | null;
  users?: UserUpdateManyWithoutParentsInput;
};
