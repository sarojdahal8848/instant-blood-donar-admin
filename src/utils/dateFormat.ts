import { format } from "date-fns";

export const dateFormat = (date: Date) => {
  return format(new Date(date), "MM/dd/yyyy");
};
