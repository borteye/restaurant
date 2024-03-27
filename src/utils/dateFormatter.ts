import React from "react";

const dateFormatter = () => {
  const currentDate = new Date();

  const month = currentDate.toLocaleString("default", { month: "long" });
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;
  console.log(formattedDate);
  return formattedDate;
};

export default dateFormatter;
