import { User } from "../user/User";

export type OAuth = {
  createdAt: Date;
  id: string;
  provider: string | null;
  token: string | null;
  updatedAt: Date;
  user?: User | null;
};
