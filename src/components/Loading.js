import React from "react";
import loading from "./loading.gif";

const Loading = () => {
  return (
    <React.Fragment>
      <img
        className="mt-5"
        src={loading}
        alt="Loading..."
        style={{ width: "200px", display: "block", margin: "auto" }}
      />
    </React.Fragment>
  );
};
export default Loading;
