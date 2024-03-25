import { FC } from "react";
import { FetchProps } from "../types/forms";

export const fetchData = ({ url, method }: FetchProps) => {
  const result = fetch(url, {
    method: method,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  return result;
};
