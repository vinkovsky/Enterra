import React, { useContext } from "react";
import { AppContext } from "../AppContainer/AppContainer";
import "./TableRow.less";

const TableRow = () => {
  const [state, setState] = useContext(AppContext);

  const onClickHandler = (id) => {
    const current = state.current.filter((item) => item.id !== id);
    setState({ ...state, current });
  };

  return state.current.map(({ id, name, level, online }, i) => (
    <tr className="table-row" key={name + i} onClick={() => onClickHandler(id)}>
      <td>{id}</td>
      <td>{name}</td>
      <td>
        {[...new Array(level)].map((_, i) => (
          <i className="star" key={i} />
        ))}
      </td>
      <td>
        <span className={online ? "indicator online" : "indicator"} />
      </td>
    </tr>
  ));
};

export default TableRow;
