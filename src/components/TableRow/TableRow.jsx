import React, { Fragment, useContext, useState } from "react";
import { UserMenu, UserProfile } from "..";
import { AppContext } from "../AppContainer/AppContainer";
import "./TableRow.less";

const TableRow = () => {
  const [store] = useContext(AppContext);
  const [player, setPlayer] = useState({});

  const onClickHandler = (item, index) => {
    setPlayer({ ...item, index, menu: true });
  };

  return store.current.map((item, index) => {
    const { id, name, level, online } = item;
    return (
      <Fragment key={name + index}>
        <tr className="table-row" onClick={() => onClickHandler(item, index)}>
          <td>{id}</td>
          <td>{name}</td>
          <td>
            {[...new Array(level)].map((_, index) => (
              <i className="star" key={index} />
            ))}
          </td>
          <td>
            <i className={online ? "indicator online" : "indicator"} />
          </td>
        </tr>
        {player?.menu && player?.index === index ? (
          <UserMenu player={player} setPlayer={setPlayer} />
        ) : null}

        {player?.popup && player?.index === index ? (
          <UserProfile player={player} setPlayer={setPlayer} />
        ) : null}
      </Fragment>
    );
  });
};

export default TableRow;
