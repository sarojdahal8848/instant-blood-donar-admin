import { Oval } from "react-loader-spinner";
import "./loader.scss";

export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__container">
        <Oval height="100" width="100" color="red" ariaLabel="loading" />
        <p>Loading Please wait...</p>
      </div>
    </div>
  );
};
