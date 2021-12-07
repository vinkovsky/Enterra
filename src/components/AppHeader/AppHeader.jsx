import React, { useContext, useState } from "react";
import { AppContext } from "../AppContainer/AppContainer";
import "./AppHeader.less";

const AppHeader = () => {
  const [store, setStore] = useContext(AppContext);
  const [value, setValue] = useState("");

  const onClickHandler = () => {
    setStore({ ...store, current: store.initial });
  };

  const checkboxHandler = ({ target: { checked } }) => {
    const current = checked
      ? store.current.filter((item) => !item.online)
      : store.initial;

    setStore({
      ...store,
      current,
    });
  };

  const inputHandler = ({ target: { value } }) => {
    setValue(value);

    const current = store.initial.filter((item) =>
      item.name.toLowerCase().includes(value)
    );

    setStore({
      ...store,
      current,
    });
  };

  return (
    <div className="app-header">
      <span>Имя</span>
      <input type="text" value={value} onChange={(e) => inputHandler(e)} />
      <div>
        <span>Онлайн</span>
        <input type="checkbox" onChange={(e) => checkboxHandler(e)} />
      </div>
      <input
        type="button"
        value="Показать всех"
        onClick={() => onClickHandler()}
      />
    </div>
  );
};

export default AppHeader;
