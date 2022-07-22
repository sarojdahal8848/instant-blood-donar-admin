import { toast } from "react-toastify";

interface Toastify {
  error?: string;
  msg: "success" | "error";
}
export const toastify = (data: Toastify) => {
  if (data.msg === "success") {
    return toast.success("success");
  }
  return toast.error(data.error);
};
