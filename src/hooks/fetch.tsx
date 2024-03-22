import { FC } from "react";
import { FetchProps } from "../types/forms";

export const fetchData = ({ url, method, body }: FetchProps) => {
  const result = fetch(url, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

  return result;
};
