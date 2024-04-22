import { FC } from "react";
import { FetchProps } from "../types/forms";

export const fetchData = async ({ url, method, body }: any) => {
  const result = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },

    method: method,
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return result;
};
