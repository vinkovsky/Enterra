import React from "react";
import { players } from "../../config/players";
import "./TableRow.less";

const TableRow = () => {
  return players.map(({ id, name, level, online }, i) => (
    <div className="table-row" key={name + i}>
      <span>{id}</span>
      <span>{name}</span>
      <span>
        {[...new Array(level)].map((_, i) => (
          <i className="star" key={i} />
        ))}
      </span>
      <span className={online ? "indicator online" : "indicator"}></span>
    </div>
  ));
};

export default TableRow;
