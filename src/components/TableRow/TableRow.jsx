import React, { useContext } from "react";
import { players } from "../../config/players";
import { AppContext } from "../AppContainer/AppContainer";
import "./TableRow.less";

const TableRow = () => {
  const [state, setState] = useContext(AppContext);

  const onClickHandler = (id) => {
    const elem = state.current.filter((item) => item.id === id);
    const list = state.current.filter((item) => item.id !== id);
    setState({ ...state, current: list });
  };

  return state.current.map(({ id, name, level, online }, i) => (
    <tr className="table-row" key={name + i} onClick={() => onClickHandler(id)}>
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
