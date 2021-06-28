import React from "react";

function Loading() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div
        className="spinner-border mt-5"
        role="status"
        style={{ width: "100px", height: "100px" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default Loading;
