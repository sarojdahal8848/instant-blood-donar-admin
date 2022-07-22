import { toast } from "react-toastify";

interface Toastify {
  message: string;
  type: "success" | "error";
}
export const toastify = ({ message, type }: Toastify) => {
  if (type === "success") {
    return toast.success(message);
  }
  return toast.error(message);
};
