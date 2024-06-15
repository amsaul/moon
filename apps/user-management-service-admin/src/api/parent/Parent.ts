import { User } from "../user/User";

export type Parent = {
  children?: Array<"Option1">;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
