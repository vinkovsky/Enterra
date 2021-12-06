import React from "react";
import "./TableContainer.less";

const TableContainer = ({ children }) => (
  <div className="table-container">
    <table>{children}</table>
  </div>
);

export default TableContainer;
