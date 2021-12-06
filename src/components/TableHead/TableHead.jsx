import React from "react";
import "./TableHead.less";

const TableHead = () => {
  return (
    <div className="table-head">
      <span>ID</span>
      <span>Имя</span>
      <span>Уровень</span>
      <span>Онлайн</span>
    </div>
  );
};

export default TableHead;
