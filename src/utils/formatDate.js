import dayjs from "dayjs";

export function formatDate({ dateStr, format = "MMM D", options = {} }) {
  if (!dateStr) return "";

  const { includePrefix = true, prefixFormat = "dddd" } = options;

  const date = dayjs(dateStr);
  const today = dayjs().startOf("day");
  const tomorrow = today.add(1, "day");

  let prefix = "";

  if (includePrefix) {
    if (date.isSame(today, "day")) prefix = "Today";
    else if (date.isSame(tomorrow, "day")) prefix = "Tomorrow";
    else prefix = date.format(prefixFormat);
  }

  if (!includePrefix) return date.format(format);

  return `${prefix}, ${date.format(format)}`;
}
