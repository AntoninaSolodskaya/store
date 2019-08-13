import React from "react";

const SpinnerPage = () => {
  return (
    <div className="wrapper">
      <div className="main-container">
        <div className="spinner-border white-text" role="status" />
        <span className="span-loader">Loading...</span>
      </div>
    </div>
  );
};

export default SpinnerPage;
