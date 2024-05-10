import { formatDistanceToNow } from "date-fns/formatDistanceToNow";

export const toNow = (date: string | Date) =>
  formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
