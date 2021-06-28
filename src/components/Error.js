import React from "react";

function Error({ message }) {
  return (
    <div className="d-flex justify-content-center">
      <div className="alert alert-danger" role="alert">
        {message ? message.toString() : "Something Went Wrong"}
      </div>
    </div>
  );
}

export default Error;
