import qs from "query-string";

export const vkSign = (): string | undefined => {
  const params = qs.parse(document.location.search.slice(1));
  const object: Record<string, any> = {};

  if (!params) return undefined;

  Object.keys(params)
    .sort((a, b) => {
      if (a.toLowerCase() < b.toLowerCase()) return -1;
      if (a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
    })
    .forEach((str) => {
      if (str !== "sign") object[str] = params[str];
    });

  object.sign = params.sign;

  console.log(new URLSearchParams(object).toString());
  return new URLSearchParams(object).toString();
};
