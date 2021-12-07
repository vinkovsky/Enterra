import React, { useContext } from "react";
import { AppContext } from "../AppContainer/AppContainer";

import "./UserMenu.less";

const UserMenu = ({ player, setPlayer }) => {
  const [store, setStore] = useContext(AppContext);

  const showPlayerHandler = () => {
    setPlayer((state) => ({ ...state, menu: false, popup: true }));
  };

  const hidePlayerHandler = () => {
    const current = store.current.filter((item) => item.id !== player.id);
    setStore({ ...store, current });
    setPlayer((state) => ({ ...state, menu: false }));
  };

  return (
    <tr className="usermenu-container">
      <td className="usermenu">
        <button onClick={() => showPlayerHandler()}>Показать профиль</button>
        <button onClick={() => hidePlayerHandler()}>Скрыть игрока</button>
      </td>
    </tr>
  );
};

export default UserMenu;
