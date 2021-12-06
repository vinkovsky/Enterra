import React from "react";
import { players } from "../../config/players";
import "./TableRow.less";

const TableRow = () => {
  return players.map(({ id, name, level, online }, i) => (
    <tr className="table-row" key={name + i}>
      <td>
        <span>{id}</span>
      </td>
      <td>
        <span>{name}</span>
      </td>
      <td>
        <span>
          {[...new Array(level)].map((_, i) => (
            <i className="star" key={i} />
          ))}
        </span>
      </td>
      <td>
        <span className={online ? "indicator online" : "indicator"}></span>
      </td>
    </tr>
  ));
};

export default TableRow;
