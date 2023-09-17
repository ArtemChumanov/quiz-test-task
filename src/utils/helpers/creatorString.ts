import { matchParameters } from "@/config";

export const creatorQuestionTitle = (title, isDependent, fields) => {
  if (isDependent) {
    const matches = title.match(/\[(\d+)\]/g);
    const values = matches.map((match) => match.match(/\d+/)[0]);
    let str = title;
    values.forEach((i) => {
      const reg = new RegExp("\\{answer\\[" + i + "\\]\\}", "g");
      str = str.replace(reg, matchParameters[fields[i]]);
    });
    return str;
  }
  return title;
};
