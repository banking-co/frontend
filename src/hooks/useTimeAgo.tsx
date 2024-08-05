import { useTranslation } from "i18nano";
import { decWord } from "utils";

export const useTimeAgo = () => {
  const t = useTranslation();

  return (timestamp: number) => {
    if (!timestamp) return t("time.ago.now");
    const date = new Date(timestamp);
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    const dayMonthString = () =>
      new Intl.DateTimeFormat("RU-ru", { day: "numeric", month: "short" })
        .format(date)
        .replace(".", "");
    const hourMinuteString = () =>
      date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
    const lasing = (
      title: Array<string> | string,
      end: string,
      count: number,
    ) =>
      Array.isArray(title)
        ? `${count} ${decWord(count, title)} ${end}`
        : `${title} ${end}`;

    switch (true) {
      case seconds < 0:
        return t("time.ago.soon");
      case seconds < 10:
        return t("time.ago.now");
      case seconds < 60:
        return lasing(t("time.ago.seconds"), t("time.ago.back"), seconds);
      case seconds < 3600:
        return lasing(
          t("time.ago.minutes"),
          t("time.ago.back"),
          Math.floor(seconds / 60),
        );
      case seconds < 7200:
        return lasing(
          t("time.ago.hours.one"),
          t("time.ago.back"),
          Math.floor(seconds / 3600),
        );
      case seconds < 10800:
        return lasing(
          t("time.ago.hours.two"),
          t("time.ago.back"),
          Math.floor(seconds / 3600),
        );
      case seconds < 14400:
        return lasing(
          t("time.ago.hours.three"),
          t("time.ago.back"),
          Math.floor(seconds / 3600),
        );
      case seconds < 86400:
        return lasing(
          t("time.ago.hours.accurate", {
            hors: hourMinuteString(),
          }),
          "",
          Math.floor(seconds / 3600),
        );
      case seconds < 172800:
        return lasing(
          t("time.ago.days.one", {
            time: hourMinuteString(),
          }),
          "",
          Math.floor(seconds / 86400),
        );
      case seconds < 259200:
        return lasing(
          t("time.ago.days.two"),
          t("time.ago.back"),
          Math.floor(seconds / 86400),
        );
      case seconds < 345600:
        return lasing(
          t("time.ago.days.three"),
          t("time.ago.back"),
          Math.floor(seconds / 86400),
        );
      case seconds < 31536000:
        return lasing(
          t("time.ago.days.accurate", {
            day: dayMonthString(),
            hour: hourMinuteString(),
          }),
          "",
          Math.floor(seconds / 86400),
        );
      case seconds >= 31536000:
        return lasing(
          t("time.ago.years.accurate", {
            day: dayMonthString(),
            year: date.getFullYear().toString(),
          }),
          "",
          Math.floor(seconds / 31536000),
        );
    }

    return t("time.ago.now");
  };
};
