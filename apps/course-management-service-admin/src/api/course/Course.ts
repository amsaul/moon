export type Course = {
  createdAt: Date;
  description: string | null;
  id: string;
  language?: "Option1" | null;
  lessons?: Array<"Option1">;
  level?: "Option1" | null;
  title: string | null;
  updatedAt: Date;
};
