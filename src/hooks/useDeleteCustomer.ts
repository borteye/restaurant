import { useMutation } from "@tanstack/react-query";

export const useDeleteCustomer = (onSuccess: any, onError: any, id:number) => {
  const endpoint = `http://localhost:5000/delete-customer/:${id}`;

  const url = async (body: any): Promise<string> => {
    try {
      const res = await fetch(endpoint, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        throw new Error(`HTTP error status: ${res.status}`);
      }
      return await res.json();
    } catch (error) {
      throw new Error(`Fetch Rrror: ${error}`);
    }
  };

  return useMutation({
    mutationFn: url,
    onSuccess,
    onError,
  });
};
