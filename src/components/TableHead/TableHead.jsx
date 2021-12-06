import React from "react";
import "./TableHead.less";

const TableHead = () => {
  return (
    <thead className="table-head">
      <tr>
        <th data-sort-type="text">ID</th>
        <th data-sort-type="numeric">Имя</th>
        <th data-sort-type="numeric">Уровень</th>
        <th data-sort-type="numeric">Онлайн</th>
      </tr>
    </thead>
  );
};

export default TableHead;
