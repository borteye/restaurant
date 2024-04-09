const dateFormatter = (dateStr: string) => {
  const formattedDate = new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
  return formattedDate;
};

export default dateFormatter;
