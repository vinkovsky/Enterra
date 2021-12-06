import React, { useContext, useState } from "react";
import { sort } from "../../utils/sort";
import { AppContext } from "../AppContainer/AppContainer";
import "./TableHead.less";

const TableHead = () => {
  const [store, setStore] = useContext(AppContext);

  const [asc, setAsc] = useState({
    id: true,
    name: true,
    level: true,
    online: true,
  });

  const onClickHandler = (field) => {
    setAsc((asc) => ({ ...asc, [field]: !asc[field] }));
    setStore({ ...store, current: sort(store.current, field, asc[field]) });
  };

  const getClassBy = (name) => (asc[name] ? "asc" : "desc");

  return (
    <thead className="table-head">
      <tr>
        <th className={getClassBy("id")} onClick={() => onClickHandler("id")}>
          ID
        </th>
        <th
          className={getClassBy("name")}
          onClick={() => onClickHandler("name")}
        >
          Имя
        </th>
        <th
          className={getClassBy("level")}
          onClick={() => onClickHandler("level")}
        >
          Уровень
        </th>
        <th
          className={getClassBy("online")}
          onClick={() => onClickHandler("online")}
        >
          Онлайн
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
