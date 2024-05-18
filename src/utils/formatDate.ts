import { format } from "date-fns";

interface FormatDateParams {
  dateFormat?: string;
  fallbackString?: string;
}

export const formatDate = (
  date: number | undefined,
  params?: FormatDateParams,
) => {
  if (date === 0 || !date || date.toString()?.length <= 1) {
    if (params?.fallbackString) {
      return params.fallbackString;
    }

    return "";
  }

  return format(
    new Date(date * 1000),
    params?.dateFormat || "HH:mm, dd.MM.yyyy",
  );
};
