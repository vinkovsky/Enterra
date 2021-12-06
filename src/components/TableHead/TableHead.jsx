import React, { useContext, useState } from "react";
import { sort } from "../../utils/sort";
import { AppContext } from "../AppContainer/AppContainer";
import "./TableHead.less";

const TableHead = () => {
  const [state, setState] = useContext(AppContext);
  const [asc, setAsc] = useState(true);

  const onClickHandler = (field, asc) => {
    setAsc((asc) => !asc);
    setState({ ...state, current: sort(state.current, field, asc) });
  };

  return (
    <thead className="table-head">
      <tr>
        <th onClick={() => onClickHandler("id", asc)}>ID</th>
        <th onClick={() => onClickHandler("name", asc)}>Имя</th>
        <th onClick={() => onClickHandler("level", asc)}>Уровень</th>
        <th onClick={() => onClickHandler("online", asc)}>Онлайн</th>
      </tr>
    </thead>
  );
};

export default TableHead;
